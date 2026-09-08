#!/usr/bin/env python3
"""
Portfolio data check
Validates projects.js against what is actually on disk. Run before pushing:

    python3 check.py

Exits non-zero if anything is wrong, so it can gate a deploy.
"""
import os, re, sys, glob, subprocess

ROOT = os.path.dirname(os.path.abspath(__file__))
IMG_RE = r"['\"](Projects/[^'\"]+\.(?:webp|jpg|jpeg|png|JPG|JPEG|PNG))['\"]"
MAX_EDGE = 2000
MAX_BYTES = 1_200_000

def main():
    js = open(os.path.join(ROOT, "projects.js"), encoding="utf-8").read()
    body = js.split("const PROJECTS")[-1]          # skip the header comment block
    refs = sorted(set(re.findall(IMG_RE, body)))
    disk = sorted(os.path.relpath(p, ROOT)
                  for p in glob.glob(os.path.join(ROOT, "Projects", "**", "*"), recursive=True)
                  if p.lower().endswith((".webp", ".jpg", ".jpeg", ".png")))
    real = {p.lower(): p for p in disk}

    broken  = [r for r in refs if not os.path.exists(os.path.join(ROOT, r))]
    orphans = sorted(set(disk) - set(refs))
    miscase = [(r, real[r.lower()]) for r in refs
               if r.lower() in real and real[r.lower()] != r]

    heavy, oversize = [], []
    for r in refs:
        p = os.path.join(ROOT, r)
        if not os.path.exists(p):
            continue
        if os.path.getsize(p) > MAX_BYTES:
            heavy.append((r, os.path.getsize(p)))
        try:
            w, h = subprocess.run(["identify", "-format", "%w %h", p],
                                  capture_output=True, check=True).stdout.decode().split()
            if max(int(w), int(h)) > MAX_EDGE:
                oversize.append((r, "%sx%s" % (w, h)))
        except Exception:
            pass

    ids = re.findall(r"id:\s*'([^']+)'", body)
    dup_ids = sorted({i for i in ids if ids.count(i) > 1})

    print("projects   %d" % len(ids))
    print("referenced %d" % len(refs))
    print("on disk    %d" % len(disk))

    fail = 0
    def report(label, items, fmt):
        nonlocal fail
        if items:
            fail += 1
            print("\n%s: %d" % (label, len(items)))
            for i in items[:12]:
                print("   " + fmt(i))

    report("BROKEN references", broken, lambda i: i)
    report("DUPLICATE project ids", dup_ids, lambda i: i)
    report("CASE mismatch (breaks on case-sensitive hosts)", miscase,
           lambda i: "%s  ->  %s" % (i[0], i[1]))
    report("OVER %dpx" % MAX_EDGE, oversize, lambda i: "%s  %s" % (i[0], i[1]))
    report("OVER %d KB" % (MAX_BYTES // 1000), heavy,
           lambda i: "%s  %.0f KB" % (i[0], i[1] / 1000))
    if orphans:
        print("\nunreferenced on disk: %d (not an error)" % len(orphans))
        for o in orphans[:8]:
            print("   " + o)

    print("\n%s" % ("FAIL" if fail else "OK"))
    return 1 if fail else 0

if __name__ == "__main__":
    sys.exit(main())

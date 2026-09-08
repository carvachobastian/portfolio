#!/usr/bin/env python3
"""
Scaffold a projects.js entry from a folder of photographs.

    python3 add-entry.py "Projects/2026/Cairns Convention"

Converts anything that is not already WebP, reads real dimensions to set
portrait correctly, and prints an entry ready to paste at the top of the
PROJECTS array. Nothing is written to projects.js: read the output first.

Pass --insert to write it in at the top of the array instead of printing.
"""
import os, re, sys, glob, subprocess, shutil

ROOT = os.path.dirname(os.path.abspath(__file__))
QUALITY, MAX_EDGE = "90", "2000x2000>"
ORIGINALS = os.path.expanduser("~/Media/Photography/Portfolio/website-originals/published")
SRC_EXT = (".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG")


def dims(path):
    try:
        w, h = subprocess.run(["identify", "-format", "%w %h", path],
                              capture_output=True, check=True).stdout.decode().split()
        return int(w), int(h)
    except Exception:
        return (0, 0)


def convert(path):
    """Make a WebP beside the source, move the original to the Media tier."""
    dst = os.path.splitext(path)[0] + ".webp"
    if os.path.exists(dst):
        return dst, False
    subprocess.run(["magick", path, "-auto-orient", "-resize", MAX_EDGE,
                    "-quality", QUALITY, "-define", "webp:method=6", "-strip", dst],
                   check=True, capture_output=True)
    keep = os.path.join(ORIGINALS, os.path.relpath(path, ROOT))
    os.makedirs(os.path.dirname(keep), exist_ok=True)
    shutil.move(path, keep)
    return dst, True


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not args:
        print(__doc__)
        return 2
    rel = args[0].rstrip("/")
    folder = os.path.join(ROOT, rel)
    if not os.path.isdir(folder):
        print("No such folder: %s" % folder)
        return 1

    parts = rel.split(os.sep)
    year = parts[1] if len(parts) > 2 else "YEAR"
    slug = re.sub(r"[^a-z0-9]+", "-", parts[-1].lower()).strip("-")

    converted = 0
    for p in sorted(glob.glob(os.path.join(folder, "*"))):
        if p.endswith(SRC_EXT):
            _, did = convert(p)
            converted += did

    shots = sorted(glob.glob(os.path.join(folder, "*.webp")))
    if not shots:
        print("No images found in %s" % rel)
        return 1

    entries = []
    for s in shots:
        w, h = dims(s)
        entries.append((os.path.relpath(s, ROOT).replace(os.sep, "/"), h > w))

    def fmt(e):
        path, portrait = e
        return ("      { src: '%s', portrait: true }," % path) if portrait \
               else ("      '%s'," % path)

    thumbs, gallery = entries[:3], entries[3:]
    block = (
        "  {\n"
        "    id:      '%s',\n"
        "    year:    '%s',\n"
        "    yearTag: '%s',\n"
        "    title:   ['TITLE LINE 1', 'TITLE LINE 2'],\n"
        "    cat:     'CATEGORY',\n"
        "    thumbs: [\n%s\n    ],\n"
        "    text: [\n"
        "      'First paragraph.',\n"
        "      'Second paragraph.',\n"
        "    ],\n"
        "    gallery: [\n%s\n    ],\n"
        "  },\n"
    ) % (slug, year, year,
         "\n".join(fmt(e) for e in thumbs),
         "\n".join(fmt(e) for e in gallery))

    print("converted to webp : %d" % converted)
    print("images            : %d (%d thumbs, %d gallery)"
          % (len(entries), len(thumbs), len(gallery)))
    print("portrait detected : %d" % sum(1 for _, p in entries if p))
    print()

    if "--insert" in sys.argv:
        f = os.path.join(ROOT, "projects.js")
        t = open(f, encoding="utf-8").read()
        anchor = "const PROJECTS = [\n"
        i = t.index(anchor) + len(anchor)
        marker = t.find("\n", t.find("↓", i))
        cut = t.find("\n", t.find("──────", marker)) + 1
        open(f, "w", encoding="utf-8").write(t[:cut] + "\n" + block + t[cut:])
        print("inserted into projects.js. Fill in title, cat, yearTag and text.")
    else:
        print(block)
        print("Paste at the top of the PROJECTS array, then fill in the "
              "capitalised placeholders.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

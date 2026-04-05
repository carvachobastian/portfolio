#!/usr/bin/env python3
"""
Portfolio Local Server
──────────────────────
Serves your portfolio and handles photo uploads.
Run this once, then keep the window open while you work.

Start it by double-clicking  "Start Server.command"
or run:  python3 server.py
Then open:  http://localhost:8080
"""

import http.server
import socketserver
import json
import base64
import os
import threading
import webbrowser
from pathlib import Path

PORT = 8080
ROOT = Path(__file__).parent.resolve()


class Handler(http.server.SimpleHTTPRequestHandler):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    # ── CORS preflight ────────────────────────────────────────────
    def do_OPTIONS(self):
        self.send_response(200)
        self._cors_headers()
        self.end_headers()

    # ── File upload endpoint ──────────────────────────────────────
    def do_POST(self):
        if self.path != '/upload':
            self.send_error(404)
            return

        try:
            length = int(self.headers.get('Content-Length', 0))
            body   = json.loads(self.rfile.read(length))

            year     = body.get('year',     '').strip()
            proj_id  = body.get('projId',   '').strip()
            filename = body.get('filename', '').strip()
            data_b64 = body.get('data',     '')

            if not all([year, proj_id, filename, data_b64]):
                raise ValueError('year, projId, filename, and data are all required')

            # Sanitise folder name components (allow letters, numbers, spaces, hyphens, underscores)
            safe = lambda s: ''.join(c for c in s if c.isalnum() or c in ' -_()')
            folder = ROOT / 'Projects' / safe(year) / safe(proj_id)
            folder.mkdir(parents=True, exist_ok=True)

            dest = folder / filename
            dest.write_bytes(base64.b64decode(data_b64))

            rel_path = dest.relative_to(ROOT).as_posix()
            print(f'  ✓ Saved: {rel_path}')
            self._json(200, {'ok': True, 'path': rel_path})

        except Exception as exc:
            print(f'  ✗ Upload error: {exc}')
            self._json(500, {'ok': False, 'error': str(exc)})

    # ── Helpers ───────────────────────────────────────────────────
    def _cors_headers(self):
        self.send_header('Access-Control-Allow-Origin',  '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def _json(self, code, obj):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header('Content-Type',   'application/json')
        self.send_header('Content-Length', str(len(body)))
        self._cors_headers()
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        pass  # keep console clean — only upload events are printed


# ── Start ─────────────────────────────────────────────────────────
def open_browser():
    import time; time.sleep(0.6)
    webbrowser.open(f'http://localhost:{PORT}')

print('\n  ┌─────────────────────────────────────────┐')
print( '  │   Portfolio server                       │')
print(f'  │   http://localhost:{PORT}                  │')
print( '  │   Press Ctrl+C to stop                   │')
print( '  └─────────────────────────────────────────┘\n')

threading.Thread(target=open_browser, daemon=True).start()

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(('', PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\n  Server stopped.')

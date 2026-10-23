"""Combine the demo/ files into the single offline page OPEN_DEMO.html.

Run from this folder: python build_demo.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DEMO = ROOT / 'demo'

page = (DEMO / 'index.html').read_text(encoding='utf-8')
page = page.replace('<link rel="stylesheet" href="style.css">', '<style>' + (DEMO / 'style.css').read_text(encoding='utf-8') + '</style>')
for name in ['data.js', 'predict.js', 'app.js']:
    page = page.replace(f'<script src="{name}"></script>', '<script>' + (DEMO / name).read_text(encoding='utf-8') + '</script>')
assert 'src="' not in page and 'href="style.css"' not in page, 'a file was not inlined'
(ROOT / 'OPEN_DEMO.html').write_text(page, encoding='utf-8')
print('wrote OPEN_DEMO.html', len(page), 'characters')

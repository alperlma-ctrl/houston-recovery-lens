"""Combine the demo/ files into the single offline page OPEN_DEMO.html.

Run from this folder: python build_demo.py
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
DEMO = ROOT / 'demo'

page = (DEMO / 'index.html').read_text(encoding='utf-8')
for name in re.findall(r'<link rel="stylesheet" href="([^"]+)">', page):
    page = page.replace(f'<link rel="stylesheet" href="{name}">', '<style>' + ('\n'.join(line for line in (DEMO / name).read_text(encoding='utf-8').splitlines() if not line.startswith('@import')) if name == 'style.css' else (DEMO / name).read_text(encoding='utf-8')) + '</style>')
for name in re.findall(r'<script src="([^"]+)"></script>', page):
    page = page.replace(f'<script src="{name}"></script>', '<script>' + (DEMO / name).read_text(encoding='utf-8').replace('</script', '<\\/script') + '</script>')
assert 'src="' not in page and 'rel="stylesheet"' not in page, 'a file was not inlined'
(ROOT / 'OPEN_DEMO.html').write_text(page, encoding='utf-8')
print('wrote OPEN_DEMO.html', len(page), 'characters')


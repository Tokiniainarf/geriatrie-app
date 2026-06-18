"""Render PDF pages for figures without embedded raster images."""
import fitz
import json
import os
from pathlib import Path

PDF_PATH = None
for f in os.listdir(r'C:\Users\tokin\Downloads'):
    if f.endswith('.pdf') and '5e' in f and os.path.getsize(os.path.join(r'C:\Users\tokin\Downloads', f)) > 5_000_000:
        PDF_PATH = os.path.join(r'C:\Users\tokin\Downloads', f)
        break

OUT_DIR = Path(r'C:\Users\tokin\geriatrie-app\images\figures')
OUT_DIR.mkdir(parents=True, exist_ok=True)

with open(r'C:\Users\tokin\geriatrie-app\images\index.json', 'r', encoding='utf-8') as f:
    index = json.load(f)

doc = fitz.open(PDF_PATH)
rendered_pages = set()

# Render pages that need figures
pages_to_render = set()
for fig_id, info in index['figures'].items():
    if not info['images']:
        pages_to_render.add(info['page'])

# Also add all page_images pages for full-page fallbacks
for page_str, imgs in index['page_images'].items():
    pages_to_render.add(int(page_str))

for page_num in sorted(pages_to_render):
    if page_num < 1 or page_num > len(doc):
        continue
    out = OUT_DIR / f'page_{page_num:03d}.jpg'
    if out.exists():
        continue
    page = doc[page_num - 1]
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    pix.save(str(out), jpg_quality=85)
    rendered_pages.add(page_num)
    print(f'Rendered page {page_num}')

# Build figures.js
figures = {}
for fig_id, info in index['figures'].items():
    imgs = info['images']
    if imgs:
        figures[fig_id] = [f'images/{imgs[0]}']
    else:
        figures[fig_id] = [f'images/figures/page_{info["page"]:03d}.jpg']

# Page-level images for inline display
page_figs = {}
for page_str, imgs in index['page_images'].items():
    page_figs[int(page_str)] = [f'images/{img}' for img in imgs]

js = f'const FIGURES = {json.dumps(figures, ensure_ascii=False)};\n'
js += f'const PAGE_IMAGES = {json.dumps({str(k): v for k, v in page_figs.items()}, ensure_ascii=False)};\n'

with open(r'C:\Users\tokin\geriatrie-app\figures.js', 'w', encoding='utf-8') as f:
    f.write(js)

print(f'figures.js written with {len(figures)} figures')
print(f'Rendered {len(rendered_pages)} new pages')
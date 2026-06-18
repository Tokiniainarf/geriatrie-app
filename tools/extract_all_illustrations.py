"""Extraction complète des illustrations depuis le PDF Gériatrie."""
import fitz
import json
import re
import os
from pathlib import Path

ROOT = Path(r'C:\Users\tokin\geriatrie-app')
OUT = ROOT / 'images'
FIG_DIR = OUT / 'figures'
CROP_DIR = OUT / 'crops'
for d in [OUT, FIG_DIR, CROP_DIR]:
    d.mkdir(exist_ok=True)

PDF_PATH = None
for f in os.listdir(r'C:\Users\tokin\Downloads'):
    if f.endswith('.pdf') and '5e' in f and os.path.getsize(os.path.join(r'C:\Users\tokin\Downloads', f)) > 5_000_000:
        PDF_PATH = os.path.join(r'C:\Users\tokin\Downloads', f)
        break

doc = fitz.open(PDF_PATH)
print(f'PDF: {len(doc)} pages')

# Load APP_DATA page numbers per chapter
with open(ROOT / 'data.js', 'r', encoding='utf-8') as f:
    raw = f.read()
    app = json.loads(raw[raw.index('{'):raw.rindex('}') + 1])

book_pages = {}  # pdf_page -> chapter_id
for ch in app['chapters']:
    for pg_num, _ in app['content'].get(ch['id'], []):
        book_pages[int(pg_num)] = ch['id']

# 1) Extract ALL raster images (lower threshold)
page_images = {}
total_img = 0
for page_num in range(len(doc)):
    page = doc[page_num]
    imgs = page.get_images(full=True)
    if not imgs:
        continue
    lst = []
    for idx, img in enumerate(imgs):
        xref = img[0]
        try:
            base = doc.extract_image(xref)
            if base['width'] < 50 or base['height'] < 50:
                continue
            ext = 'jpg' if base['ext'] in ('jpeg', 'jpg') else base['ext']
            if ext == 'jpx':
                ext = 'jpg'
            fname = f'p{page_num + 1:03d}_{idx}.{ext}'
            fpath = OUT / fname
            if not fpath.exists():
                with open(fpath, 'wb') as fp:
                    fp.write(base['image'])
            lst.append(fname)
            total_img += 1
        except Exception:
            pass
    if lst:
        page_images[page_num + 1] = lst

print(f'Raster images: {total_img} on {len(page_images)} pages')

# 2) Find all Fig., Tableau, Encadré references in PDF
figures = {}
tableaux = {}
encadres = {}
fig_pattern = re.compile(r'Fig\.\s*(\d+)\.(\d+)', re.I)
tab_pattern = re.compile(r'Tableau\s*(\d+)\.(\d+)', re.I)
enc_pattern = re.compile(r'Encadré\s*(\d+)\.(\d+)', re.I)

pages_with_visuals = set()

for page_num in range(len(doc)):
    text = doc[page_num].get_text()
    bp = page_num + 1
    for m in fig_pattern.finditer(text):
        fid = f'{m.group(1)}.{m.group(2)}'
        if fid not in figures:
            figures[fid] = {'page': bp, 'images': page_images.get(bp, [])}
        pages_with_visuals.add(bp)
    for m in tab_pattern.finditer(text):
        tid = f'{m.group(1)}.{m.group(2)}'
        if tid not in tableaux:
            tableaux[tid] = {'page': bp}
        pages_with_visuals.add(bp)
    for m in enc_pattern.finditer(text):
        eid = f'{m.group(1)}.{m.group(2)}'
        if eid not in encadres:
            encadres[eid] = {'page': bp}
        pages_with_visuals.add(bp)

# 3) Render full pages for figures/visuals (2x DPI)
rendered = 0
for bp in sorted(pages_with_visuals):
    out = FIG_DIR / f'page_{bp:03d}.jpg'
    if out.exists():
        continue
    page = doc[bp - 1]
    pix = page.get_pixmap(matrix=fitz.Matrix(2.5, 2.5), alpha=False)
    pix.save(str(out), jpg_quality=88)
    rendered += 1

print(f'Rendered {rendered} new page snapshots, {len(pages_with_visuals)} visual pages total')

# 4) Crop figure regions from pages (detect image blocks + bottom captions)
def crop_figures_on_page(bp):
    page = doc[bp - 1]
    crops = []
    blocks = page.get_text('dict')['blocks']
    img_blocks = [b for b in blocks if b.get('type') == 1]
    if not img_blocks:
        return crops
    page_rect = page.rect
    for i, block in enumerate(img_blocks):
        bbox = fitz.Rect(block['bbox'])
        if bbox.width < 40 or bbox.height < 40:
            continue
        # Expand slightly for caption below
        expanded = fitz.Rect(
            max(0, bbox.x0 - 5),
            max(0, bbox.y0 - 5),
            min(page_rect.width, bbox.x1 + 5),
            min(page_rect.height, bbox.y1 + 40)
        )
        try:
            pix = page.get_pixmap(matrix=fitz.Matrix(2.5, 2.5), clip=expanded, alpha=False)
            fname = f'crop_p{bp:03d}_{i}.jpg'
            fpath = CROP_DIR / fname
            if not fpath.exists():
                pix.save(str(fpath), jpg_quality=90)
            crops.append(fname)
        except Exception:
            pass
    return crops

page_crops = {}
crop_total = 0
for bp in sorted(pages_with_visuals):
    crops = crop_figures_on_page(bp)
    if crops:
        page_crops[bp] = crops
        crop_total += len(crops)

print(f'Crops: {crop_total} on {len(page_crops)} pages')

# 5) Build FIGURES map — prefer crop > raster > page render
def best_image(bp, fig_id):
    paths = []
    if bp in page_crops:
        paths.extend([f'images/crops/{c}' for c in page_crops[bp]])
    if bp in page_images:
        paths.extend([f'images/{c}' for c in page_images[bp]])
    if (FIG_DIR / f'page_{bp:03d}.jpg').exists():
        paths.append(f'images/figures/page_{bp:03d}.jpg')
    return paths[0] if paths else None

fig_map = {}
for fid, info in sorted(figures.items(), key=lambda x: (int(x[0].split('.')[0]), float(x[0].split('.')[1]))):
    bp = info['page']
    src = best_image(bp, fid)
    if src:
        fig_map[fid] = [src]
    elif info['images']:
        fig_map[fid] = [f'images/{info["images"][0]}']

# Tableaux & Encadrés
tab_map = {}
for tid, info in tableaux.items():
    bp = info['page']
    src = best_image(bp, tid)
    if src:
        tab_map[tid] = [src]

enc_map = {}
for eid, info in encadres.items():
    bp = info['page']
    src = best_image(bp, eid)
    if src:
        enc_map[eid] = [src]

# 6) PAGE_IMAGES — all images per book page
page_figs = {}
for bp, imgs in page_images.items():
    page_figs[str(bp)] = [f'images/{img}' for img in imgs]
for bp in pages_with_visuals:
    key = str(bp)
    extra = []
    if bp in page_crops:
        extra.extend([f'images/crops/{c}' for c in page_crops[bp]])
    fig_page = f'images/figures/page_{bp:03d}.jpg'
    if (FIG_DIR / f'page_{bp:03d}.jpg').exists() and fig_page not in extra:
        extra.append(fig_page)
    if key in page_figs:
        page_figs[key] = list(dict.fromkeys(page_figs[key] + extra))
    elif extra:
        page_figs[key] = extra

# 7) CHAPTER_ILL — première illustration par chapitre
chapter_ill = {}
for ch in app['chapters']:
    pages = app['content'].get(ch['id'], [])
    for pg_num, _ in pages:
        bp = int(pg_num)
        if str(bp) in page_figs:
            chapter_ill[ch['id']] = page_figs[str(bp)][0]
            break
        for fid, srcs in fig_map.items():
            if figures.get(fid, {}).get('page') == bp:
                chapter_ill[ch['id']] = srcs[0]
                break
        if ch['id'] in chapter_ill:
            break

# Write figures.js
js = f'const FIGURES = {json.dumps(fig_map, ensure_ascii=False)};\n'
js += f'const TABLEAUX = {json.dumps(tab_map, ensure_ascii=False)};\n'
js += f'const ENCADRES = {json.dumps(enc_map, ensure_ascii=False)};\n'
js += f'const PAGE_IMAGES = {json.dumps(page_figs, ensure_ascii=False)};\n'
js += f'const CHAPTER_ILL = {json.dumps(chapter_ill, ensure_ascii=False)};\n'

with open(ROOT / 'figures.js', 'w', encoding='utf-8') as f:
    f.write(js)

index = {
    'page_images': page_images,
    'page_crops': page_crops,
    'figures': figures,
    'tableaux': tableaux,
    'encadres': encadres,
    'chapter_ill': chapter_ill,
}
with open(OUT / 'index.json', 'w', encoding='utf-8') as f:
    json.dump(index, f, ensure_ascii=False, indent=2)

print(f'\nFIGURES: {len(fig_map)}')
print(f'TABLEAUX: {len(tab_map)}')
print(f'ENCADRES: {len(enc_map)}')
print(f'PAGE_IMAGES: {len(page_figs)} pages')
print(f'CHAPTER_ILL: {len(chapter_ill)} chapitres')
"""figures.js — uniquement vraies illustrations (crops + images raster), pas de pages PDF entières."""
import json, re, os
from pathlib import Path

ROOT = Path(r'C:\Users\tokin\geriatrie-app')

def is_real_ill(path):
    if 'figures/page_' in path:
        return False
    if '/crops/' in path or '\\crops\\' in path:
        return True
    if re.search(r'/p\d{3}_\d+\.(jpg|png|jpeg)$', path, re.I):
        return True
    return False

# Load existing figures.js maps by parsing
fig_text = (ROOT / 'figures.js').read_text(encoding='utf-8')

def extract_map(name):
    m = re.search(rf'const {name} = (\{{.*?\}});', fig_text, re.S)
    return json.loads(m.group(1)) if m else {}

old_fig = extract_map('FIGURES')
old_page = extract_map('PAGE_IMAGES')

# Collect all real image files
real_files = {}
for folder in [ROOT / 'images', ROOT / 'images' / 'crops']:
    if not folder.exists():
        continue
    for f in folder.glob('*'):
        if f.suffix.lower() in ('.jpg', '.png', '.jpeg'):
            rel = 'images/' + ('crops/' if 'crops' in str(f.parent) else '') + f.name
            if is_real_ill(rel):
                # key by pdf page number from filename
                pm = re.search(r'p(\d{3})', f.name)
                if pm:
                    pg = int(pm.group(1))
                    real_files.setdefault(pg, []).append(rel)

# Build FIGURES — only real illustrations
fig_map = {}
for fid, srcs in old_fig.items():
    good = [s for s in srcs if is_real_ill(s)]
    if not good:
        # try match by figure page from old mapping
        pm = re.search(r'page_(\d+)', srcs[0] if srcs else '')
        if pm:
            pg = int(pm.group(1))
            good = real_files.get(pg, [])[:1]
    if good:
        fig_map[fid] = [good[0]]

# PAGE_IMAGES keyed by book page — only real ills
with open(ROOT / 'data.js', 'r', encoding='utf-8') as f:
    raw = f.read()
app = json.loads(raw[raw.index('{'):raw.rindex('}') + 1])

page_figs = {}
for ch in app['chapters']:
    for pg_num, _ in app['content'].get(ch['id'], []):
        bp = int(pg_num)
        imgs = []
        if str(bp) in old_page:
            imgs = [s for s in old_page[str(bp)] if is_real_ill(s)]
        if not imgs and bp in real_files:
            imgs = real_files[bp]
        if imgs:
            page_figs[str(bp)] = list(dict.fromkeys(imgs))[:4]

# CHAPTER_ILL — première vraie illustration par chapitre
chapter_ill = {}
for ch in app['chapters']:
    for pg_num, _ in app['content'].get(ch['id'], []):
        imgs = page_figs.get(str(int(pg_num)), [])
        if imgs:
            chapter_ill[ch['id']] = imgs[0]
            break
    # fallback: first figure of chapter number
    if ch['id'] not in chapter_ill:
        ch_n = ch['id'].replace('ch', '')
        for fid, srcs in fig_map.items():
            if fid.startswith(ch_n + '.'):
                chapter_ill[ch['id']] = srcs[0]
                break

js = f'const FIGURES = {json.dumps(fig_map, ensure_ascii=False)};\n'
js += f'const PAGE_IMAGES = {json.dumps(page_figs, ensure_ascii=False)};\n'
js += f'const CHAPTER_ILL = {json.dumps(chapter_ill, ensure_ascii=False)};\n'

(ROOT / 'figures.js').write_text(js, encoding='utf-8')
print(f'FIGURES: {len(fig_map)}')
print(f'PAGE_IMAGES: {len(page_figs)} pages')
print(f'CHAPTER_ILL: {len(chapter_ill)}')
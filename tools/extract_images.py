"""Extract figures from Gériatrie PDF and build image index."""
import fitz
import os
import re
import json
from pathlib import Path

PDF_PATH = None
for f in os.listdir(r'C:\Users\tokin\Downloads'):
    if f.endswith('.pdf') and '5e' in f and os.path.getsize(os.path.join(r'C:\Users\tokin\Downloads', f)) > 5_000_000:
        PDF_PATH = os.path.join(r'C:\Users\tokin\Downloads', f)
        break

if not PDF_PATH:
    raise FileNotFoundError("Gériatrie 5e éd PDF not found in Downloads")

OUT_DIR = Path(r'C:\Users\tokin\geriatrie-app\images')
OUT_DIR.mkdir(exist_ok=True)

doc = fitz.open(PDF_PATH)
print(f"PDF: {PDF_PATH}")
print(f"Pages: {len(doc)}")

# Extract images per page
page_images = {}
total_extracted = 0

for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    if not images:
        continue
    
    page_imgs = []
    for img_idx, img in enumerate(images):
        xref = img[0]
        try:
            base = doc.extract_image(xref)
            if base['width'] < 80 or base['height'] < 80:
                continue  # skip tiny icons
            ext = base['ext']
            if ext == 'jpeg':
                ext = 'jpg'
            fname = f"p{page_num + 1:03d}_{img_idx}.{ext}"
            fpath = OUT_DIR / fname
            if not fpath.exists():
                with open(fpath, 'wb') as f:
                    f.write(base['image'])
            page_imgs.append(fname)
            total_extracted += 1
        except Exception as e:
            pass
    
    if page_imgs:
        page_images[page_num + 1] = page_imgs

print(f"Extracted {total_extracted} images from {len(page_images)} pages")

# Also extract text around Fig. references to map figures
fig_map = {}
for page_num in range(len(doc)):
    text = doc[page_num].get_text()
    for m in re.finditer(r'Fig\.\s*(\d+)\.(\d+)', text):
        fig_id = f"{m.group(1)}.{m.group(2)}"
        if fig_id not in fig_map:
            fig_map[fig_id] = {'page': page_num + 1, 'images': page_images.get(page_num + 1, [])}

print(f"Figure references found: {len(fig_map)}")

# Save index
index = {
    'page_images': {str(k): v for k, v in page_images.items()},
    'figures': fig_map
}
with open(OUT_DIR / 'index.json', 'w', encoding='utf-8') as f:
    json.dump(index, f, ensure_ascii=False, indent=2)

print(f"Index saved to {OUT_DIR / 'index.json'}")
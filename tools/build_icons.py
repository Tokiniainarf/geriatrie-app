"""Generate improved PWA icons."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

OUT = Path(r'C:\Users\tokin\geriatrie-app\icons')

def make_icon(size):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    # Gradient background circle
    for i in range(size):
        t = i / size
        r = int(30 + t * 40)
        g = int(27 + t * 30)
        b = int(180 - t * 40)
        draw.rectangle([0, i, size, i+1], fill=(r, g, b, 255))
    # Rounded mask
    mask = Image.new('L', (size, size), 0)
    md = ImageDraw.Draw(mask)
    md.rounded_rectangle([0, 0, size, size], radius=size//5, fill=255)
    img.putalpha(mask)
    draw = ImageDraw.Draw(img)
    # Book icon simplified
    m = size // 6
    draw.rounded_rectangle([m, m*2, size-m, size-m], radius=m//2, fill=(255,255,255,230))
    draw.rectangle([size//2-2, m*2, size//2+2, size-m], fill=(99,102,241,200))
    draw.text((size//2, size//2+size//12), "G", fill=(67,56,202,255), anchor="mm")
    return img

for s in [192, 512]:
    make_icon(s).save(OUT / f'icon-{s}.png', 'PNG')
    print(f'icon-{s}.png created')
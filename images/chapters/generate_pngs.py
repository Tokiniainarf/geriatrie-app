#!/usr/bin/env python3
"""Generate 20 decorative PNG chapter header images for a geriatrics study app using Pillow."""
import os
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
W, H = 1280, 800

# Color palette
TEAL = (8, 145, 178)       # #0891B2
TEAL_LIGHT = (34, 211, 238)  # #22D3EE
TEAL_DARK = (6, 95, 115)   # #065F73
WARM_BG = (255, 247, 237)  # #FFF7ED
WARM_BG2 = (255, 251, 235) # #FFFBEB
WARM_ACCENT = (245, 158, 11) # #F59E0B
TEXT_DARK = (30, 41, 59)   # #1E293B
WHITE = (255, 255, 255)

def lerp_color(c1, c2, t):
    return tuple(int(a + (b - a) * t) for a, b in zip(c1, c2))

def draw_gradient_bg(draw, w, h):
    for y in range(h):
        c = lerp_color(WARM_BG, WARM_BG2, y / h)
        draw.line([(0, y), (w, y)], fill=c)

def draw_grid(draw, w, h):
    for y in range(0, h, 80):
        draw.line([(0, y), (w, y)], fill=(*TEAL, 20), width=1)
    for x in range(0, w, 80):
        draw.line([(x, 0), (x, h)], fill=(*TEAL, 20), width=1)

def draw_dots(draw):
    positions = [(60, 60), (1220, 60), (60, 740), (1220, 740),
                 (100, 120), (1180, 120), (100, 680), (1180, 680)]
    for x, y in positions:
        draw.ellipse([x-4, y-4, x+4, y+4], fill=(*TEAL_LIGHT, 40))

def draw_top_bar(draw, w):
    for x in range(w):
        t = x / w
        c = lerp_color(TEAL, TEAL_LIGHT, t)
        draw.line([(x, 0), (x, 6)], fill=(*c, 200))

def draw_chapter_badge(draw, num):
    x, y = 40, 35
    draw.rounded_rectangle([x, y, x+100, y+40], radius=20, fill=(*TEAL, 38))
    try:
        font = ImageFont.truetype("arial.ttf", 22)
    except:
        font = ImageFont.load_default()
    draw.text((x+50, y+20), f"Ch {num}", fill=TEAL, font=font, anchor="mm")

def draw_title(draw, title, w):
    try:
        font = ImageFont.truetype("arial.ttf", 42)
    except:
        font = ImageFont.load_default()
    draw.text((w//2, 120), title, fill=TEXT_DARK, font=font, anchor="mm")

def draw_subtitle(draw, subtitle, w):
    try:
        font = ImageFont.truetype("arial.ttf", 24)
    except:
        font = ImageFont.load_default()
    draw.text((w//2, 740), subtitle, fill=TEAL_DARK, font=font, anchor="mm")

def draw_center_line(draw, w):
    draw.rounded_rectangle([w//2-150, 720, w//2+150, 724], radius=2, fill=(*TEAL, 50))

def draw_border(draw, w, h):
    draw.rounded_rectangle([0, 0, w-1, h-1], radius=24, outline=(*TEAL, 38), width=2)

# Icon drawing functions
def draw_circle_icon(draw, cx, cy, r, color=TEAL, alpha=60):
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=color, width=4)
    draw.ellipse([cx-r//2, cy-r//2, cx+r//2, cy+r//2], fill=(*color, alpha))

def draw_icon_cell(draw):
    """DNA/cell for aging"""
    cx, cy = 640, 440
    draw.ellipse([cx-70, cy-70, cx+70, cy+70], outline=TEAL, width=5)
    draw.ellipse([cx-36, cy-36, cx+36, cy+36], fill=(*TEAL, 38))
    draw.ellipse([cx-16, cy-16, cx+16, cy+16], fill=(*TEAL, 100))
    # DNA strands
    for i in range(5):
        y = cy - 60 + i * 30
        draw.arc([cx-40, y-15, cx+40, y+15], 0, 180, fill=TEAL_LIGHT, width=3)
        draw.arc([cx-40, y-15, cx+40, y+15], 180, 360, fill=TEAL, width=3)
    # Floating circles
    for px, py, pr in [(480, 360, 24), (800, 360, 16), (760, 520, 20), (500, 520, 12)]:
        draw.ellipse([px-pr, py-pr, px+pr, py+pr], outline=TEAL_LIGHT, width=3)

def draw_icon_doctor(draw):
    """Doctor examining patient"""
    cx, cy = 640, 440
    # Doctor figure
    draw.ellipse([cx-44, cy-80, cx+44, cy-10], outline=TEAL, width=5)  # head
    draw.ellipse([cx-20, cy-68, cx+20, cy-32], fill=(*TEAL, 38))  # face
    draw.arc([cx-50, cy-10, cx+50, cy+90], 0, 180, fill=TEAL, width=5)  # body
    draw.line([(cx-40, cy-10), (cx-40, cy+60)], fill=TEAL, width=4)
    draw.line([(cx+40, cy-10), (cx+40, cy+60)], fill=TEAL, width=4)
    # Stethoscope
    draw.ellipse([520, 400, 560, 440], outline=TEAL, width=4)
    draw.line([(560, 420), (600, 400)], fill=TEAL, width=4)
    draw.ellipse([510, 390, 530, 410], fill=(*TEAL, 76))

def draw_icon_daily(draw):
    """Person doing activities"""
    cx, cy = 640, 400
    # Head
    draw.ellipse([cx-36, cy-80, cx+36, cy-10], outline=TEAL, width=5)
    draw.ellipse([cx-16, cy-68, cx+16, cy-36], fill=(*TEAL, 38))
    # Body
    draw.line([(cx, cy-10), (cx, cy+60)], fill=TEAL, width=5)
    # Arms up (independence)
    draw.line([(cx, cy+10), (cx-50, cy-20)], fill=TEAL, width=4)
    draw.line([(cx, cy+10), (cx+50, cy-20)], fill=TEAL, width=4)
    # Legs
    draw.line([(cx, cy+60), (cx-30, cy+120)], fill=TEAL, width=4)
    draw.line([(cx, cy+60), (cx+30, cy+120)], fill=TEAL, width=4)
    # Activity icons
    for px, py in [(480, 360), (800, 360), (500, 500), (780, 500)]:
        draw.rounded_rectangle([px-15, py-15, px+15, py+15], radius=4, outline=TEAL, width=3)

def draw_icon_scales(draw):
    """Balance scales"""
    cx, cy = 640, 430
    # Vertical bar
    draw.line([(cx, cy-80), (cx, cy+60)], fill=TEAL, width=6)
    # Horizontal bar
    draw.line([(cx-100, cy-50), (cx+100, cy-50)], fill=TEAL, width=5)
    # Left pan
    draw.polygon([(cx-100, cy-50), (cx-130, cy), (cx-70, cy)], outline=TEAL, width=4)
    # Right pan
    draw.polygon([(cx+100, cy-50), (cx+70, cy), (cx+130, cy)], outline=TEAL, width=4)
    # Base
    draw.rounded_rectangle([cx-40, cy+60, cx+40, cy+72], radius=6, fill=(*TEAL, 100))
    # Decorative dots
    draw.ellipse([cx-140, cy-10, cx-120, cy+10], fill=(*WARM_ACCENT, 100))
    draw.ellipse([cx+120, cy-10, cx+140, cy+10], fill=(*WARM_ACCENT, 100))

def draw_icon_senses(draw):
    """Ear and eye"""
    cx, cy = 640, 430
    # Ear (left side)
    ex, ey = cx-80, cy
    draw.ellipse([ex-50, ey-60, ex+50, ey+60], outline=TEAL, width=5)
    draw.ellipse([ex-20, ey-24, ex+20, ey+24], fill=(*TEAL, 38))
    draw.ellipse([ex-8, ey-8, ex+8, ey+8], fill=(*TEAL, 100))
    # Eye (right side)
    ox, oy = cx+80, cy
    draw.ellipse([ox-60, oy-40, ox+60, oy+40], outline=TEAL, width=5)
    draw.ellipse([ox-20, oy-20, ox+20, oy+20], fill=(*TEAL, 38))
    draw.ellipse([ox-10, oy-10, ox+10, oy+10], fill=(*TEAL, 100))
    draw.ellipse([ox-4, oy-4, ox+4, oy+4], fill=TEAL)
    # Sound waves
    for r in range(30, 60, 15):
        draw.arc([ex-50-r, ey-r, ex-50+r, ey+r], -45, 45, fill=TEAL_LIGHT, width=2)

def draw_icon_bone(draw):
    """Bone cross-section"""
    cx, cy = 640, 420
    # Outer bone
    draw.rounded_rectangle([cx-60, cy-100, cx+60, cy+100], radius=20, outline=TEAL, width=5)
    # Inner sections
    for y_off in [-60, 0, 60]:
        draw.rounded_rectangle([cx-45, cy+y_off-25, cx+45, cy+y_off+25], radius=8, fill=(*TEAL, 20))
        # Trabecular lines
        for lx in range(cx-35, cx+36, 15):
            draw.line([(lx, cy+y_off-20), (lx, cy+y_off+20)], fill=(*TEAL_LIGHT, 60), width=1)
    # Density loss indicator
    draw.line([(cx-90, cy-50), (cx-70, cy-60)], fill=(*WARM_ACCENT, 150), width=3)
    draw.line([(cx-70, cy-60), (cx-80, cy-40)], fill=(*WARM_ACCENT, 150), width=3)

def draw_icon_joint(draw):
    """Knee joint"""
    cx, cy = 640, 420
    # Femur
    draw.ellipse([cx-60, cy-80, cx+60, cy-20], outline=TEAL, width=5)
    # Tibia
    draw.ellipse([cx-50, cy+20, cx+50, cy+80], outline=TEAL, width=5)
    # Cartilage gap
    draw.ellipse([cx-36, cy-16, cx+36, cy+16], fill=(*TEAL, 25))
    # Cartilage degradation
    draw.arc([cx-30, cy-12, cx+30, cy+12], 0, 180, fill=(*WARM_ACCENT, 150), width=3)
    # Bone spurs
    draw.line([(cx+55, cy-20), (cx+70, cy-30)], fill=(*WARM_ACCENT, 150), width=3)
    draw.line([(cx-55, cy+20), (cx-70, cy+30)], fill=(*WARM_ACCENT, 150), width=3)

def draw_icon_pain(draw):
    """Neural pain pathways"""
    cx, cy = 640, 430
    # Neural pathway
    points = [(480, cy), (540, cy-60), (600, cy+40), (660, cy-30), (720, cy+50), (780, cy)]
    for i in range(len(points)-1):
        draw.line([points[i], points[i+1]], fill=TEAL, width=4)
    # Nodes
    for px, py in points:
        draw.ellipse([px-12, py-12, px+12, py+12], fill=(*TEAL, 50))
        draw.ellipse([px-5, py-5, px+5, py+5], fill=(*TEAL, 128))
    # Pain signals (red/orange)
    for px, py in [(540, cy-60), (660, cy-30)]:
        draw.line([(px-10, py-15), (px, py-25)], fill=(*WARM_ACCENT, 150), width=3)
        draw.line([(px+10, py-15), (px+5, py-25)], fill=(*WARM_ACCENT, 150), width=3)

def draw_icon_brain(draw):
    """Brain with neural network"""
    cx, cy = 640, 420
    # Brain outline
    draw.arc([cx-80, cy-90, cx+80, cy+30], 180, 360, fill=TEAL, width=5)
    draw.arc([cx-70, cy-70, cx-10, cy+10], 90, 270, fill=TEAL, width=5)
    draw.arc([cx+10, cy-70, cx+70, cy+10], 270, 90, fill=TEAL, width=5)
    # Folds
    draw.arc([cx-50, cy-60, cx+10, cy-10], 0, 180, fill=TEAL, width=3)
    draw.arc([cx-10, cy-60, cx+50, cy-10], 0, 180, fill=TEAL, width=3)
    draw.arc([cx-40, cy-30, cx+40, cy+20], 0, 180, fill=TEAL, width=3)
    # Neural connections
    nodes = [(cx-30, cy-40), (cx+20, cy-30), (cx-10, cy-5), (cx+30, cy-15), (cx-20, cy+10)]
    for i, (nx, ny) in enumerate(nodes):
        draw.ellipse([nx-6, ny-6, nx+6, ny+6], fill=(*TEAL, 76))
        for j, (nx2, ny2) in enumerate(nodes):
            if j > i and abs(i-j) <= 2:
                draw.line([(nx, ny), (nx2, ny2)], fill=(*TEAL_LIGHT, 80), width=2)
    # Amyloid plaques
    for px, py in [(cx-40, cy-20), (cx+25, cy-45)]:
        draw.ellipse([px-5, py-5, px+5, py+5], fill=(*WARM_ACCENT, 128))

def draw_icon_mood(draw):
    """Emotional spectrum faces"""
    cx, cy = 640, 430
    # Sad face (left)
    sx, sy = cx-100, cy
    draw.ellipse([sx-40, sy-40, sx+40, sy+40], outline=TEAL, width=4)
    draw.ellipse([sx-14, sy-14, sx-6, sy-6], fill=(*TEAL, 100))
    draw.ellipse([sx+6, sy-14, sx+14, sy-6], fill=(*TEAL, 100))
    draw.arc([sx-20, sy+5, sx+20, sy+25], 200, 340, fill=TEAL, width=3)
    # Neutral face (center)
    draw.ellipse([cx-40, cy-40, cx+40, cy+40], outline=TEAL, width=4)
    draw.ellipse([cx-14, cy-14, cx-6, cy-6], fill=(*TEAL, 100))
    draw.ellipse([cx+6, cy-14, cx+14, cy-6], fill=(*TEAL, 100))
    draw.line([(cx-15, cy+14), (cx+15, cy+14)], fill=TEAL, width=3)
    # Connection line
    draw.line([(cx-60, cy+50), (cx+60, cy+50)], fill=(*WARM_ACCENT, 128), width=4)

def draw_icon_confusion(draw):
    """Confusion swirl"""
    cx, cy = 640, 430
    draw.ellipse([cx-56, cy-56, cx+56, cy+56], outline=TEAL, width=5)
    # Swirl
    import math
    for angle in range(0, 720, 5):
        r = 10 + angle * 0.06
        rad = math.radians(angle)
        x = cx + int(r * math.cos(rad))
        y = cy + int(r * math.sin(rad))
        draw.ellipse([x-2, y-2, x+2, y+2], fill=(*TEAL, 60 + int(angle*0.08)))
    # Question mark
    try:
        font = ImageFont.truetype("arial.ttf", 48)
    except:
        font = ImageFont.load_default()
    draw.text((cx, cy), "?", fill=(*TEAL, 150), font=font, anchor="mm")

def draw_icon_balance(draw):
    """Walking figure with balance"""
    cx, cy = 640, 400
    # Head
    draw.ellipse([cx-32, cy-80, cx+32, cy-20], outline=TEAL, width=5)
    draw.ellipse([cx-14, cy-68, cx+14, cy-40], fill=(*TEAL, 38))
    # Body
    draw.line([(cx, cy-20), (cx, cy+50)], fill=TEAL, width=5)
    # Arms
    draw.line([(cx, cy), (cx-60, cy+40)], fill=TEAL, width=4)
    draw.line([(cx, cy), (cx+50, cy-30)], fill=TEAL, width=4)
    # Legs (walking pose)
    draw.line([(cx, cy+50), (cx-40, cy+130)], fill=TEAL, width=4)
    draw.line([(cx, cy+50), (cx+50, cy+120)], fill=TEAL, width=4)
    # Ground
    draw.line([(cx-100, cy+135), (cx+100, cy+135)], fill=(*WARM_ACCENT, 100), width=3)
    # Fall risk arrow
    draw.line([(cx+80, cy-40), (cx+80, cy+40)], fill=(*WARM_ACCENT, 128), width=4)
    draw.polygon([(cx+80, cy+40), (cx+72, cy+25), (cx+88, cy+25)], fill=(*WARM_ACCENT, 128))

def draw_icon_immobilization(draw):
    """Bed / immobilization"""
    cx, cy = 640, 440
    # Bed frame
    draw.rounded_rectangle([cx-140, cy, cx+140, cy+50], radius=8, outline=TEAL, width=4)
    # Headboard
    draw.rounded_rectangle([cx-140, cy-60, cx-100, cy+10], radius=6, outline=TEAL, width=4)
    # Pillow
    draw.ellipse([cx-120, cy-40, cx-70, cy-5], fill=(*TEAL, 25))
    # Person outline
    draw.ellipse([cx-80, cy-30, cx-30, cy+5], outline=TEAL, width=3)
    draw.line([(cx-30, cy-15), (cx+60, cy-5)], fill=TEAL, width=3)
    # Legs
    draw.line([(cx-140, cy+50), (cx-140, cy+80)], fill=TEAL, width=5)
    draw.line([(cx+140, cy+50), (cx+140, cy+80)], fill=TEAL, width=5)
    # Effects arrows
    for ax, ay in [(cx-180, cy-20), (cx+180, cy-20), (cx, cy-80)]:
        draw.ellipse([ax-8, ay-8, ax+8, ay+8], fill=(*WARM_ACCENT, 76))

def draw_icon_nutrition(draw):
    """Food pyramid"""
    cx, cy = 640, 440
    # Pyramid
    draw.polygon([(cx, cy-120), (cx-120, cy+80), (cx+120, cy+80)], outline=TEAL, width=5)
    # Sections
    draw.line([(cx-60, cy-20), (cx+60, cy-20)], fill=TEAL, width=3)
    draw.line([(cx-90, cy+30), (cx+90, cy+30)], fill=TEAL, width=3)
    # Food dots in sections
    draw.ellipse([cx-8, cy-90, cx+8, cy-74], fill=(*TEAL, 76))
    for fx in [-25, 0, 25]:
        draw.ellipse([cx+fx-8, cy-40, cx+fx+8, cy-24], fill=(*WARM_ACCENT, 76))
    for fx in [-45, -15, 15, 45]:
        draw.ellipse([cx+fx-8, cy+20, cx+fx+8, cy+36], fill=(*TEAL, 50))
    # Water drop
    draw.arc([cx+160, cy-40, cx+200, cy+20], 180, 360, fill=TEAL_LIGHT, width=3)
    draw.line([(cx+180, cy+20), (cx+170, cy-10)], fill=TEAL_LIGHT, width=3)

def draw_icon_bladder(draw):
    """Bladder anatomy"""
    cx, cy = 640, 430
    # Bladder
    draw.ellipse([cx-70, cy-60, cx+70, cy+60], outline=TEAL, width=5)
    draw.ellipse([cx-36, cy-30, cx+36, cy+30], fill=(*TEAL, 20))
    # Ureters
    draw.line([(cx-30, cy-60), (cx-30, cy-100)], fill=TEAL, width=4)
    draw.line([(cx+30, cy-60), (cx+30, cy-100)], fill=TEAL, width=4)
    # Urethra
    draw.line([(cx, cy+60), (cx, cy+100)], fill=TEAL, width=4)
    # Fill level
    draw.ellipse([cx-20, cy-10, cx+20, cy+20], fill=(*TEAL, 50))

def draw_icon_medication(draw):
    """Pill bottles"""
    cx, cy = 640, 420
    # Bottle 1
    draw.rounded_rectangle([cx-80, cy-50, cx-30, cy+50], radius=6, outline=TEAL, width=4)
    draw.rounded_rectangle([cx-80, cy-65, cx-30, cy-45], radius=4, fill=(*TEAL, 50))
    # Bottle 2
    draw.rounded_rectangle([cx+10, cy-40, cx+55, cy+50], radius=6, outline=TEAL, width=4)
    draw.rounded_rectangle([cx+10, cy-55, cx+55, cy-35], radius=4, fill=(*TEAL, 50))
    # Pills
    draw.ellipse([cx-130, cy+20, cx-90, cy+40], outline=WARM_ACCENT, width=3)
    draw.ellipse([cx+70, cy+30, cx+100, cy+45], outline=WARM_ACCENT, width=3)
    # Cascade arrows
    draw.line([(cx-30, cy), (cx+10, cy)], fill=(*TEAL_LIGHT, 100), width=3)
    draw.polygon([(cx+10, cy), (cx, cy-8), (cx, cy+8)], fill=(*TEAL_LIGHT, 100))

def draw_icon_comfort(draw):
    """Heart for palliative care"""
    cx, cy = 640, 420
    # Heart shape
    import math
    points = []
    for angle in range(0, 360, 2):
        rad = math.radians(angle)
        x = 16 * math.sin(rad) ** 3
        y = -(13 * math.cos(rad) - 5 * math.cos(2*rad) - 2 * math.cos(3*rad) - math.cos(4*rad))
        points.append((cx + int(x*5), cy + int(y*5)))
    draw.polygon(points, outline=TEAL, width=4)
    # Inner glow
    for r in range(30, 0, -5):
        draw.ellipse([cx-r, cy-r-10, cx+r, cy+r-10], fill=(*TEAL, 8))
    # Hands
    draw.arc([cx-100, cy+20, cx-50, cy+80], 90, 270, fill=(*WARM_ACCENT, 100), width=4)
    draw.arc([cx+50, cy+20, cx+100, cy+80], 270, 90, fill=(*WARM_ACCENT, 100), width=4)

def draw_icon_case(draw):
    """Clipboard"""
    cx, cy = 640, 420
    draw.rounded_rectangle([cx-60, cy-90, cx+60, cy+90], radius=8, outline=TEAL, width=5)
    # Clip
    draw.rounded_rectangle([cx-25, cy-105, cx+25, cy-80], radius=6, outline=TEAL, width=4)
    draw.ellipse([cx-8, cy-100, cx+8, cy-88], outline=TEAL, width=3)
    # Lines
    for y_off in [-40, -10, 20, 50]:
        draw.line([(cx-40, cy+y_off), (cx+40, cy+y_off)], fill=(*TEAL, 100), width=3)
    # Checkmarks
    for y_off in [-40, -10, 20]:
        draw.ellipse([cx-48, cy+y_off-5, cx-38, cy+y_off+5], fill=(*WARM_ACCENT, 128))

def draw_icon_problem(draw):
    """Puzzle piece"""
    cx, cy = 640, 420
    # Puzzle piece shape
    draw.rounded_rectangle([cx-70, cy-70, cx+70, cy+70], radius=8, outline=TEAL, width=5)
    draw.rounded_rectangle([cx-70, cy-70, cx+70, cy+70], radius=8, fill=(*TEAL, 15))
    # Tabs
    draw.ellipse([cx-20, cy-85, cx+20, cy-55], outline=TEAL, width=4)
    draw.ellipse([cx-20, cy+55, cx+20, cy+85], outline=TEAL, width=4)
    draw.ellipse([cx-85, cy-20, cx-55, cy+20], outline=TEAL, width=4)
    draw.ellipse([cx+55, cy-20, cx+85, cy+20], outline=TEAL, width=4)
    # Question mark
    try:
        font = ImageFont.truetype("arial.ttf", 60)
    except:
        font = ImageFont.load_default()
    draw.text((cx, cy), "?", fill=(*TEAL, 100), font=font, anchor="mm")

def draw_icon_quiz(draw):
    """Question mark / quiz"""
    cx, cy = 640, 420
    draw.ellipse([cx-70, cy-70, cx+70, cy+70], outline=TEAL, width=5)
    draw.ellipse([cx-70, cy-70, cx+70, cy+70], fill=(*TEAL, 12))
    try:
        font = ImageFont.truetype("arial.ttf", 80)
    except:
        font = ImageFont.load_default()
    draw.text((cx, cy+5), "?", fill=(*TEAL, 150), font=font, anchor="mm")
    # Decorative sparkles
    for px, py, pr in [(500, 340, 12), (780, 340, 12), (520, 540, 10), (760, 540, 10)]:
        draw.ellipse([px-pr, py-pr, px+pr, py+pr], fill=(*WARM_ACCENT, 50))

# Chapter definitions
chapters = [
    (1, "Understanding Aging", "Cellular Biology & Aging", draw_icon_cell),
    (2, "Clinical Reasoning", "Geriatric Assessment", draw_icon_doctor),
    (3, "Autonomy", "Independence & ADLs", draw_icon_daily),
    (4, "Medical Ethics", "Ethics & Autonomy", draw_icon_scales),
    (5, "Sensory Disorders", "Hearing & Vision", draw_icon_senses),
    (6, "Osteoporosis", "Bone Health", draw_icon_bone),
    (7, "Osteoarthritis", "Joint & Cartilage", draw_icon_joint),
    (8, "Pain Management", "Pain Pathways", draw_icon_pain),
    (9, "Cognitive Disorders", "Dementia & Cognition", draw_icon_brain),
    (10, "Depression", "Mental Health", draw_icon_mood),
    (11, "Delirium", "Acute Confusion", draw_icon_confusion),
    (12, "Falls & Mobility", "Balance & Falls", draw_icon_balance),
    (13, "Bed Rest Effects", "Immobility", draw_icon_immobilization),
    (14, "Nutrition", "Diet & Hydration", draw_icon_nutrition),
    (15, "Incontinence", "Urinary Health", draw_icon_bladder),
    (16, "Prescribing", "Polypharmacy", draw_icon_medication),
    (17, "Palliative Care", "End-of-Life Care", draw_icon_comfort),
    (18, "Case Studies", "Clinical Scenarios", draw_icon_case),
    (19, "Key Problems", "Diagnostic Reasoning", draw_icon_problem),
    (20, "Review Questions", "Study & Review", draw_icon_quiz),
]

for num, title, subtitle, icon_func in chapters:
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img, "RGBA")
    
    # Background gradient
    draw_gradient_bg(draw, W, H)
    
    # Subtle grid
    draw_grid(draw, W, H)
    
    # Decorative dots
    draw_dots(draw)
    
    # Top accent bar
    draw_top_bar(draw, W)
    
    # Icon
    icon_func(draw)
    
    # Chapter badge
    draw_chapter_badge(draw, num)
    
    # Title
    draw_title(draw, title, W)
    
    # Subtitle
    draw_subtitle(draw, subtitle, W)
    
    # Center line
    draw_center_line(draw, W)
    
    # Border
    draw_border(draw, W, H)
    
    # Save as PNG
    filepath = os.path.join(OUTPUT_DIR, f"ch{num}.png")
    img.save(filepath, "PNG")
    print(f"Generated: ch{num}.png ({title})")

print(f"\nAll 20 PNG files generated in {OUTPUT_DIR}")

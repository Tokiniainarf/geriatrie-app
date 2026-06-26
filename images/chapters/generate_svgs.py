#!/usr/bin/env python3
"""Generate 20 decorative SVG chapter header images for a geriatrics study app."""
import os

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))

# Color palette
TEAL = "#0891B2"
TEAL_LIGHT = "#22D3EE"
TEAL_DARK = "#065F73"
WARM_BG = "#FFF7ED"
WARM_ACCENT = "#F59E0B"
WARM_LIGHT = "#FDE68A"
TEXT_DARK = "#1E293B"
TEXT_LIGHT = "#FFFFFF"

# Chapter definitions: (filename, title, icon_svg_element, description)
chapters = [
    ("ch1", "Understanding Aging", "cell", "Cellular Biology & Aging"),
    ("ch2", "Clinical Reasoning", "doctor", "Geriatric Assessment"),
    ("ch3", "Autonomy", "daily", "Independence & ADLs"),
    ("ch4", "Medical Ethics", "scales", "Ethics & Autonomy"),
    ("ch5", "Sensory Disorders", "senses", "Hearing & Vision"),
    ("ch6", "Osteoporosis", "bone", "Bone Health"),
    ("ch7", "Osteoarthritis", "joint", "Joint & Cartilage"),
    ("ch8", "Pain Management", "pain", "Pain Pathways"),
    ("ch9", "Cognitive Disorders", "brain", "Dementia & Cognition"),
    ("ch10", "Depression", "mood", "Mental Health"),
    ("ch11", "Delirium", "confusion", "Acute Confusion"),
    ("ch12", "Falls & Mobility", "balance", "Balance & Falls"),
    ("ch13", "Bed Rest Effects", "immobilization", "Immobility"),
    ("ch14", "Nutrition", "nutrition", "Diet & Hydration"),
    ("ch15", "Incontinence", "bladder", "Urinary Health"),
    ("ch16", "Prescribing", "medication", "Polypharmacy"),
    ("ch17", "Palliative Care", "comfort", "End-of-Life Care"),
    ("ch18", "Case Studies", "case", "Clinical Scenarios"),
    ("ch19", "Key Problems", "problem", "Diagnostic Reasoning"),
    ("ch20", "Review Questions", "quiz", "Study & Review"),
]

def icon_cell():
    """DNA helix / cell for aging"""
    return '''
    <circle cx="160" cy="120" r="35" fill="none" stroke="{teal}" stroke-width="2.5" opacity="0.7"/>
    <circle cx="160" cy="120" r="18" fill="{teal}" opacity="0.15"/>
    <circle cx="160" cy="120" r="8" fill="{teal}" opacity="0.4"/>
    <path d="M130,95 Q145,80 160,95 Q175,110 190,95" fill="none" stroke="{teal}" stroke-width="2" opacity="0.5"/>
    <path d="M130,145 Q145,160 160,145 Q175,130 190,145" fill="none" stroke="{teal}" stroke-width="2" opacity="0.5"/>
    <circle cx="100" cy="80" r="12" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.4"/>
    <circle cx="220" cy="80" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="210" cy="160" r="10" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.35"/>
    <circle cx="95" cy="150" r="6" fill="{teal}" opacity="0.15"/>
    <circle cx="230" cy="130" r="5" fill="{teal}" opacity="0.15"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT)

def icon_doctor():
    """Stethoscope / doctor figure"""
    return '''
    <circle cx="160" cy="85" r="22" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <path d="M138,107 Q138,145 160,145 Q182,145 182,107" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <path d="M140,145 L140,175" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M180,145 L180,175" fill="none" stroke="{teal}" stroke-width="2"/>
    <circle cx="160" cy="85" r="10" fill="{teal}" opacity="0.15"/>
    <path d="M155,107 Q155,130 165,130" fill="none" stroke="{warm}" stroke-width="2" opacity="0.6"/>
    <circle cx="105" cy="120" r="15" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M120,120 L140,115" fill="none" stroke="{teal}" stroke-width="2"/>
    <circle cx="105" cy="120" r="4" fill="{teal}" opacity="0.3"/>
    <path d="M85,105 Q85,80 105,80" fill="none" stroke="{teal}" stroke-width="2" opacity="0.6"/>
    '''.format(teal=TEAL, warm=WARM_ACCENT)

def icon_daily():
    """Person with activity symbols"""
    return '''
    <circle cx="160" cy="80" r="18" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <path d="M160,98 L160,145" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <path d="M160,115 L140,135" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M160,115 L180,135" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M160,145 L145,175" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M160,145 L175,175" fill="none" stroke="{teal}" stroke-width="2"/>
    <circle cx="100" cy="90" r="12" fill="{teal}" opacity="0.1"/>
    <rect x="93" y="83" width="14" height="14" rx="2" fill="none" stroke="{warm}" stroke-width="1.5" opacity="0.5"/>
    <circle cx="215" cy="95" r="10" fill="{teal}" opacity="0.1"/>
    <rect x="208" y="88" width="14" height="14" rx="2" fill="none" stroke="{warm}" stroke-width="1.5" opacity="0.5"/>
    <circle cx="105" cy="150" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.4"/>
    <circle cx="215" cy="145" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.4"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_scales():
    """Balance scales for ethics"""
    return '''
    <line x1="160" y1="80" x2="160" y2="160" stroke="{teal}" stroke-width="3"/>
    <line x1="120" y1="100" x2="200" y2="100" stroke="{teal}" stroke-width="2.5"/>
    <path d="M120,100 L105,130 L135,130 Z" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M200,100 L185,130 L215,130 Z" fill="none" stroke="{teal}" stroke-width="2"/>
    <rect x="145" y="160" width="30" height="8" rx="3" fill="{teal}" opacity="0.4"/>
    <circle cx="105" cy="115" r="4" fill="{warm}" opacity="0.4"/>
    <circle cx="215" cy="115" r="4" fill="{warm}" opacity="0.4"/>
    <line x1="105" y1="100" x2="105" y2="130" stroke="{teal}" stroke-width="1.5" opacity="0.5"/>
    <line x1="200" y1="100" x2="200" y2="130" stroke="{teal}" stroke-width="1.5" opacity="0.5"/>
    <circle cx="85" cy="140" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="235" cy="140" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_senses():
    """Ear and eye"""
    return '''
    <ellipse cx="130" cy="120" rx="25" ry="30" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <ellipse cx="130" cy="120" rx="10" ry="12" fill="{teal}" opacity="0.15"/>
    <circle cx="130" cy="120" r="4" fill="{teal}" opacity="0.4"/>
    <ellipse cx="195" cy="115" rx="30" ry="20" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <circle cx="195" cy="115" r="10" fill="{teal}" opacity="0.15"/>
    <circle cx="195" cy="115" r="5" fill="{teal}" opacity="0.4"/>
    <circle cx="195" cy="115" r="2" fill="{teal}" opacity="0.7"/>
    <path d="M165,115 Q180,100 195,100" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.4"/>
    <path d="M85,105 Q80,85 95,80" fill="none" stroke="{warm}" stroke-width="1.5" opacity="0.4"/>
    <path d="M230,105 Q240,90 235,80" fill="none" stroke="{warm}" stroke-width="1.5" opacity="0.4"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_bone():
    """Bone cross-section"""
    return '''
    <rect x="140" y="70" width="40" height="100" rx="8" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <rect x="145" y="75" width="30" height="30" rx="4" fill="{teal}" opacity="0.1"/>
    <rect x="145" y="110" width="30" height="30" rx="4" fill="{teal}" opacity="0.15"/>
    <rect x="145" y="145" width="30" height="20" rx="4" fill="{teal}" opacity="0.08"/>
    <line x1="148" y1="82" x2="172" y2="82" stroke="{teal_light}" stroke-width="1" opacity="0.4"/>
    <line x1="148" y1="90" x2="172" y2="90" stroke="{teal_light}" stroke-width="1" opacity="0.4"/>
    <line x1="148" y1="118" x2="172" y2="118" stroke="{teal_light}" stroke-width="1" opacity="0.3"/>
    <line x1="148" y1="125" x2="172" y2="125" stroke="{teal_light}" stroke-width="1" opacity="0.3"/>
    <line x1="148" y1="132" x2="172" y2="132" stroke="{teal_light}" stroke-width="1" opacity="0.3"/>
    <path d="M105,100 L115,90 L120,105 L125,88 L130,100" fill="none" stroke="{warm}" stroke-width="1.5" opacity="0.4"/>
    <text x="105" y="115" font-size="8" fill="{warm}" opacity="0.5" font-family="sans-serif">▼</text>
    <circle cx="100" cy="150" r="6" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="220" cy="90" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_joint():
    """Knee joint"""
    return '''
    <ellipse cx="160" cy="100" rx="30" ry="25" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <ellipse cx="160" cy="140" rx="25" ry="22" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <line x1="140" y1="100" x2="140" y2="140" stroke="{teal}" stroke-width="2" opacity="0.4"/>
    <line x1="180" y1="100" x2="180" y2="140" stroke="{teal}" stroke-width="2" opacity="0.4"/>
    <ellipse cx="160" cy="120" rx="18" ry="8" fill="{teal}" opacity="0.1"/>
    <path d="M145,115 Q160,125 175,115" fill="none" stroke="{warm}" stroke-width="1.5" opacity="0.5"/>
    <circle cx="100" cy="90" r="5" fill="{teal}" opacity="0.2"/>
    <circle cx="220" cy="95" r="4" fill="{teal}" opacity="0.2"/>
    <circle cx="95" cy="145" r="6" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="225" cy="140" r="7" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_pain():
    """Neural pain pathways"""
    return '''
    <path d="M100,120 Q130,90 160,120 Q190,150 220,120" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <circle cx="100" cy="120" r="8" fill="{teal}" opacity="0.2"/>
    <circle cx="160" cy="120" r="8" fill="{teal}" opacity="0.2"/>
    <circle cx="220" cy="120" r="8" fill="{teal}" opacity="0.2"/>
    <path d="M115,105 L125,100 L130,110" fill="none" stroke="{warm}" stroke-width="1.5" opacity="0.6"/>
    <path d="M175,135 L185,130 L190,140" fill="none" stroke="{warm}" stroke-width="1.5" opacity="0.6"/>
    <circle cx="100" cy="120" r="3" fill="{teal}" opacity="0.5"/>
    <circle cx="160" cy="120" r="3" fill="{teal}" opacity="0.5"/>
    <circle cx="220" cy="120" r="3" fill="{teal}" opacity="0.5"/>
    <path d="M130,100 L140,80 L150,95" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.35"/>
    <path d="M170,140 L180,160 L190,145" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.35"/>
    <circle cx="80" cy="100" r="4" fill="{warm}" opacity="0.2"/>
    <circle cx="240" cy="140" r="4" fill="{warm}" opacity="0.2"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_brain():
    """Brain with neural network"""
    return '''
    <path d="M130,130 Q130,80 160,75 Q190,80 190,130 Q190,155 160,160 Q130,155 130,130" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <path d="M160,75 L160,95" fill="none" stroke="{teal}" stroke-width="2" opacity="0.4"/>
    <path d="M140,90 Q160,100 180,90" fill="none" stroke="{teal}" stroke-width="1.5" opacity="0.4"/>
    <path d="M135,110 Q160,120 185,110" fill="none" stroke="{teal}" stroke-width="1.5" opacity="0.4"/>
    <path d="M138,130 Q160,140 182,130" fill="none" stroke="{teal}" stroke-width="1.5" opacity="0.4"/>
    <circle cx="150" cy="100" r="3" fill="{teal}" opacity="0.3"/>
    <circle cx="170" cy="110" r="3" fill="{teal}" opacity="0.3"/>
    <circle cx="155" cy="125" r="3" fill="{teal}" opacity="0.3"/>
    <circle cx="165" cy="95" r="2" fill="{warm}" opacity="0.4"/>
    <circle cx="145" cy="120" r="2" fill="{warm}" opacity="0.4"/>
    <circle cx="175" cy="130" r="2" fill="{warm}" opacity="0.4"/>
    <circle cx="100" cy="100" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="220" cy="110" r="6" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_mood():
    """Emotional spectrum / mood faces"""
    return '''
    <circle cx="130" cy="115" r="20" fill="none" stroke="{teal}" stroke-width="2"/>
    <circle cx="130" cy="110" r="2" fill="{teal}" opacity="0.5"/>
    <circle cx="123" cy="110" r="2" fill="{teal}" opacity="0.5"/>
    <path d="M122,122 Q130,118 138,122" fill="none" stroke="{teal}" stroke-width="1.5"/>
    <circle cx="175" cy="115" r="20" fill="none" stroke="{teal}" stroke-width="2"/>
    <circle cx="175" cy="110" r="2" fill="{teal}" opacity="0.5"/>
    <circle cx="168" cy="110" r="2" fill="{teal}" opacity="0.5"/>
    <line x1="167" y1="122" x2="183" y2="122" stroke="{teal}" stroke-width="1.5"/>
    <path d="M130,145 Q152,155 175,145" fill="none" stroke="{warm}" stroke-width="2" opacity="0.5"/>
    <circle cx="95" cy="95" r="5" fill="{teal}" opacity="0.15"/>
    <circle cx="210" cy="95" r="5" fill="{teal}" opacity="0.15"/>
    <circle cx="90" cy="150" r="4" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="225" cy="145" r="4" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_confusion():
    """Confusion / swirl"""
    return '''
    <circle cx="160" cy="110" r="28" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <path d="M145,95 Q160,80 175,95 Q190,110 175,125 Q160,140 145,125 Q130,110 145,95" fill="none" stroke="{teal}" stroke-width="2" opacity="0.5"/>
    <circle cx="160" cy="110" r="8" fill="{teal}" opacity="0.15"/>
    <text x="155" y="115" font-size="14" fill="{teal}" opacity="0.6" font-family="sans-serif">?</text>
    <circle cx="105" cy="85" r="6" fill="{warm}" opacity="0.2"/>
    <circle cx="215" cy="85" r="6" fill="{warm}" opacity="0.2"/>
    <circle cx="95" cy="140" r="5" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="225" cy="140" r="5" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <path d="M110,130 L120,125 L115,140" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <path d="M205,130 L200,140 L210,135" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_balance():
    """Walking figure with balance markers"""
    return '''
    <circle cx="160" cy="80" r="16" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <path d="M160,96 L160,140" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <path d="M160,115 L140,130" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M160,115 L175,105" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M160,140 L145,170" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M160,140 L178,168" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M130,172 L195,172" stroke="{warm}" stroke-width="2" opacity="0.4" stroke-dasharray="4,4"/>
    <path d="M145,170 L140,172" stroke="{teal}" stroke-width="1.5" opacity="0.5"/>
    <path d="M178,168 L182,172" stroke="{teal}" stroke-width="1.5" opacity="0.5"/>
    <circle cx="100" cy="100" r="10" fill="none" stroke="{warm}" stroke-width="1.5" opacity="0.3"/>
    <text x="96" y="104" font-size="10" fill="{warm}" opacity="0.4" font-family="sans-serif">⚠</text>
    <circle cx="220" cy="105" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_immobilization():
    """Bed / immobilized figure"""
    return '''
    <rect x="110" y="130" width="100" height="30" rx="4" fill="none" stroke="{teal}" stroke-width="2"/>
    <line x1="110" y1="160" x2="110" y2="175" stroke="{teal}" stroke-width="2.5"/>
    <line x1="210" y1="160" x2="210" y2="175" stroke="{teal}" stroke-width="2.5"/>
    <ellipse cx="140" cy="125" rx="12" ry="10" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M152,125 L190,130" fill="none" stroke="{teal}" stroke-width="2"/>
    <circle cx="95" cy="100" r="6" fill="{warm}" opacity="0.2"/>
    <circle cx="230" cy="100" r="6" fill="{warm}" opacity="0.2"/>
    <path d="M90,120 L100,115 L105,125" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <path d="M220,120 L225,125 L230,115" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <path d="M120,100 Q130,90 140,100" fill="none" stroke="{teal}" stroke-width="1.5" opacity="0.3"/>
    <path d="M180,100 Q190,90 200,100" fill="none" stroke="{teal}" stroke-width="1.5" opacity="0.3"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_nutrition():
    """Food pyramid / nutrition"""
    return '''
    <path d="M160,80 L125,155 L195,155 Z" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <line x1="135" y1="130" x2="185" y2="130" stroke="{teal}" stroke-width="1.5" opacity="0.4"/>
    <line x1="145" y1="105" x2="175" y2="105" stroke="{teal}" stroke-width="1.5" opacity="0.4"/>
    <circle cx="160" cy="95" r="4" fill="{teal}" opacity="0.3"/>
    <circle cx="150" cy="118" r="4" fill="{warm}" opacity="0.3"/>
    <circle cx="170" cy="118" r="4" fill="{warm}" opacity="0.3"/>
    <circle cx="145" cy="142" r="4" fill="{teal}" opacity="0.2"/>
    <circle cx="160" cy="142" r="4" fill="{teal}" opacity="0.2"/>
    <circle cx="175" cy="142" r="4" fill="{teal}" opacity="0.2"/>
    <path d="M210,120 Q215,100 220,120 Q225,140 230,120" fill="none" stroke="{teal_light}" stroke-width="2" opacity="0.4"/>
    <circle cx="90" cy="120" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <text x="86" y="124" font-size="10" fill="{teal_light}" opacity="0.5" font-family="sans-serif">💧</text>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_bladder():
    """Bladder anatomy"""
    return '''
    <ellipse cx="160" cy="120" rx="35" ry="30" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <ellipse cx="160" cy="120" rx="18" ry="15" fill="{teal}" opacity="0.08"/>
    <path d="M155,90 L155,78 Q155,72 160,72 Q165,72 165,78 L165,90" fill="none" stroke="{teal}" stroke-width="2"/>
    <path d="M152,150 Q155,165 160,165 Q165,165 168,150" fill="none" stroke="{teal}" stroke-width="2"/>
    <circle cx="160" cy="120" r="5" fill="{teal}" opacity="0.2"/>
    <path d="M100,110 L110,105" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.4"/>
    <path d="M210,110 L220,105" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.4"/>
    <circle cx="85" cy="100" r="6" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="235" cy="100" r="6" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_medication():
    """Pill bottles / medication cascade"""
    return '''
    <rect x="130" y="85" width="25" height="45" rx="3" fill="none" stroke="{teal}" stroke-width="2"/>
    <rect x="130" y="80" width="25" height="10" rx="2" fill="{teal}" opacity="0.2"/>
    <rect x="165" y="95" width="22" height="38" rx="3" fill="none" stroke="{teal}" stroke-width="2"/>
    <rect x="165" y="90" width="22" height="10" rx="2" fill="{teal}" opacity="0.2"/>
    <ellipse cx="115" cy="140" rx="15" ry="8" fill="none" stroke="{warm}" stroke-width="1.5" opacity="0.5"/>
    <ellipse cx="205" cy="145" rx="12" ry="7" fill="none" stroke="{warm}" stroke-width="1.5" opacity="0.5"/>
    <path d="M100,100 L105,95 L108,105" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <path d="M215,100 L220,105 L225,95" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="90" cy="85" r="5" fill="{teal}" opacity="0.15"/>
    <circle cx="230" cy="90" r="5" fill="{teal}" opacity="0.15"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_comfort():
    """Heart / hands for palliative care"""
    return '''
    <path d="M160,140 Q130,120 130,100 Q130,80 150,80 Q160,80 160,95 Q160,80 170,80 Q190,80 190,100 Q190,120 160,140" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <path d="M160,140 Q130,120 130,100 Q130,80 150,80 Q160,80 160,95 Q160,80 170,80 Q190,80 190,100 Q190,120 160,140" fill="{teal}" opacity="0.1"/>
    <path d="M130,130 Q120,145 110,135" fill="none" stroke="{warm}" stroke-width="2" opacity="0.4"/>
    <path d="M190,130 Q200,145 210,135" fill="none" stroke="{warm}" stroke-width="2" opacity="0.4"/>
    <circle cx="100" cy="90" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="220" cy="90" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="95" cy="155" r="5" fill="{teal}" opacity="0.15"/>
    <circle cx="225" cy="155" r="5" fill="{teal}" opacity="0.15"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_case():
    """Clipboard / case study"""
    return '''
    <rect x="130" y="75" width="60" height="80" rx="4" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <rect x="148" y="68" width="24" height="14" rx="3" fill="{teal}" opacity="0.2"/>
    <circle cx="160" cy="75" r="4" fill="none" stroke="{teal}" stroke-width="1.5"/>
    <line x1="142" y1="95" x2="178" y2="95" stroke="{teal}" stroke-width="1.5" opacity="0.4"/>
    <line x1="142" y1="108" x2="178" y2="108" stroke="{teal}" stroke-width="1.5" opacity="0.4"/>
    <line x1="142" y1="121" x2="178" y2="121" stroke="{teal}" stroke-width="1.5" opacity="0.4"/>
    <line x1="142" y1="134" x2="165" y2="134" stroke="{teal}" stroke-width="1.5" opacity="0.4"/>
    <circle cx="148" cy="95" r="2" fill="{warm}" opacity="0.5"/>
    <circle cx="148" cy="108" r="2" fill="{warm}" opacity="0.5"/>
    <circle cx="148" cy="121" r="2" fill="{warm}" opacity="0.5"/>
    <circle cx="100" cy="100" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="220" cy="110" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_problem():
    """Puzzle piece / problem solving"""
    return '''
    <path d="M140,85 L170,85 L170,95 Q180,95 180,105 Q180,115 170,115 L170,145 L140,145 L140,135 Q130,135 130,125 Q130,115 140,115 L140,85" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <path d="M140,85 L170,85 L170,95 Q180,95 180,105 Q180,115 170,115 L170,145 L140,145 L140,135 Q130,135 130,125 Q130,115 140,115 L140,85" fill="{teal}" opacity="0.08"/>
    <text x="148" y="122" font-size="20" fill="{teal}" opacity="0.4" font-family="sans-serif">?</text>
    <circle cx="100" cy="95" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="220" cy="95" r="8" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="105" cy="150" r="5" fill="{warm}" opacity="0.2"/>
    <circle cx="215" cy="150" r="5" fill="{warm}" opacity="0.2"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

def icon_quiz():
    """Question mark / quiz"""
    return '''
    <circle cx="160" cy="105" r="35" fill="none" stroke="{teal}" stroke-width="2.5"/>
    <circle cx="160" cy="105" r="35" fill="{teal}" opacity="0.05"/>
    <text x="147" y="118" font-size="36" fill="{teal}" opacity="0.6" font-family="sans-serif" font-weight="bold">?</text>
    <circle cx="100" cy="85" r="6" fill="{warm}" opacity="0.2"/>
    <circle cx="220" cy="85" r="6" fill="{warm}" opacity="0.2"/>
    <circle cx="95" cy="140" r="5" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="225" cy="140" r="5" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <circle cx="105" cy="120" r="3" fill="{teal}" opacity="0.15"/>
    <circle cx="215" cy="120" r="3" fill="{teal}" opacity="0.15"/>
    <path d="M115,150 L125,145 L130,155" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    <path d="M190,150 L195,155 L205,145" fill="none" stroke="{teal_light}" stroke-width="1.5" opacity="0.3"/>
    '''.format(teal=TEAL, teal_light=TEAL_LIGHT, warm=WARM_ACCENT)

icon_funcs = [
    icon_cell, icon_doctor, icon_daily, icon_scales, icon_senses,
    icon_bone, icon_joint, icon_pain, icon_brain, icon_mood,
    icon_confusion, icon_balance, icon_immobilization, icon_nutrition,
    icon_bladder, icon_medication, icon_comfort, icon_case, icon_problem, icon_quiz
]

def generate_svg(idx, filename, title, subtitle, icon_func):
    icon_svg = icon_func()
    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="640" height="400">
  <defs>
    <linearGradient id="bg{idx}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{WARM_BG}"/>
      <stop offset="100%" stop-color="#FFFBEB"/>
    </linearGradient>
    <linearGradient id="accent{idx}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{TEAL}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="{TEAL_LIGHT}" stop-opacity="0.4"/>
    </linearGradient>
    <radialGradient id="glow{idx}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="{TEAL}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="{TEAL}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <!-- Background -->
  <rect width="320" height="200" rx="12" fill="url(#bg{idx})"/>
  
  <!-- Subtle grid pattern -->
  <line x1="0" y1="50" x2="320" y2="50" stroke="{TEAL}" stroke-width="0.3" opacity="0.1"/>
  <line x1="0" y1="100" x2="320" y2="100" stroke="{TEAL}" stroke-width="0.3" opacity="0.1"/>
  <line x1="0" y1="150" x2="320" y2="150" stroke="{TEAL}" stroke-width="0.3" opacity="0.1"/>
  <line x1="80" y1="0" x2="80" y2="200" stroke="{TEAL}" stroke-width="0.3" opacity="0.1"/>
  <line x1="160" y1="0" x2="160" y2="200" stroke="{TEAL}" stroke-width="0.3" opacity="0.1"/>
  <line x1="240" y1="0" x2="240" y2="200" stroke="{TEAL}" stroke-width="0.3" opacity="0.1"/>
  
  <!-- Glow behind icon -->
  <circle cx="160" cy="120" r="60" fill="url(#glow{idx})"/>
  
  <!-- Decorative dots -->
  <circle cx="30" cy="30" r="2" fill="{TEAL}" opacity="0.15"/>
  <circle cx="290" cy="30" r="2" fill="{TEAL}" opacity="0.15"/>
  <circle cx="30" cy="170" r="2" fill="{TEAL}" opacity="0.15"/>
  <circle cx="290" cy="170" r="2" fill="{TEAL}" opacity="0.15"/>
  <circle cx="50" cy="60" r="1.5" fill="{TEAL_LIGHT}" opacity="0.2"/>
  <circle cx="270" cy="60" r="1.5" fill="{TEAL_LIGHT}" opacity="0.2"/>
  <circle cx="50" cy="140" r="1.5" fill="{TEAL_LIGHT}" opacity="0.2"/>
  <circle cx="270" cy="140" r="1.5" fill="{TEAL_LIGHT}" opacity="0.2"/>
  
  <!-- Icon area -->
  {icon_svg}
  
  <!-- Top accent bar -->
  <rect x="0" y="0" width="320" height="4" rx="0" fill="url(#accent{idx})"/>
  
  <!-- Chapter number -->
  <rect x="15" y="15" width="40" height="20" rx="10" fill="{TEAL}" opacity="0.15"/>
  <text x="35" y="29" text-anchor="middle" font-size="10" fill="{TEAL}" font-family="system-ui, sans-serif" font-weight="600" opacity="0.8">Ch {idx}</text>
  
  <!-- Title -->
  <text x="160" y="50" text-anchor="middle" font-size="16" fill="{TEXT_DARK}" font-family="system-ui, sans-serif" font-weight="700">{title}</text>
  
  <!-- Subtitle -->
  <text x="160" y="188" text-anchor="middle" font-size="10" fill="{TEAL_DARK}" font-family="system-ui, sans-serif" font-weight="400" opacity="0.6">{subtitle}</text>
  
  <!-- Bottom accent line -->
  <rect x="100" y="175" width="120" height="2" rx="1" fill="{TEAL}" opacity="0.2"/>
  
  <!-- Border -->
  <rect width="320" height="200" rx="12" fill="none" stroke="{TEAL}" stroke-width="1" opacity="0.15"/>
</svg>'''
    return svg

# Generate all 20 SVGs
for i, (filename, title, icon_key, subtitle) in enumerate(chapters):
    svg_content = generate_svg(i + 1, filename, title, subtitle, icon_funcs[i])
    filepath = os.path.join(OUTPUT_DIR, f"{filename}.svg")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print(f"Generated: {filename}.svg")

print(f"\nAll {len(chapters)} SVG files generated in {OUTPUT_DIR}")

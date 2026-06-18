"""
Nettoie data.js : structure le contenu, supprime artefacts PDF.
"""
import json
import re
import shutil
from pathlib import Path

ROOT = Path(r'C:\Users\tokin\geriatrie-app')
DATA = ROOT / 'data.js'

SRC = ROOT / 'data.js.bak' if (ROOT / 'data.js.bak').exists() else DATA
with open(SRC, 'r', encoding='utf-8') as f:
    data = json.loads(f.read().replace('const APP_DATA = ', '').rstrip(';'))

SKIP = re.compile(
    r'^(▼|©\s*\d{4}|Elsevier|Tous droits réservés|Gériatrie|Connaissances|Entraînement|'
    r'Rang Rubrique|Item, objectifs|hiérarchisation des connaissances|'
    r'En lien avec)',
    re.I
)

RUBRIQUES = sorted([
    'Éléments physiopathologiques', 'Éléments physiopatho-', 'Éléments',
    'Épidémiologie', 'Prévalence,', 'Prévalence', 'Prise en charge',
    'Définition', 'Diagnostic', 'Identifiants', 'Facteurs', 'Symptômes',
    'Complications', 'Contenu', 'Suivi', 'Surveillance', 'Traitement',
    'Prévention', 'Pronostic', 'Étiologie', 'Physiopathologie', 'Clinique',
    'Bilan', 'Examens', 'Indicateurs', 'Repères', 'Repère', 'Objectifs',
    'Outils', 'Procédure', 'Procédures',
], key=len, reverse=True)

def fix_hyphenation(text):
    text = re.sub(r'(\w)-\s*\n\s*(\w)', r'\1\2', text)
    return text

def clean_spaces(s):
    return re.sub(r'\s+', ' ', s).strip()

def parse_item_rows(lines):
    rows, cur = [], None
    for line in lines:
        s = line.strip()
        if not s or SKIP.match(s):
            continue
        m = re.match(r'^([A-D])\s+(.+)$', s)
        if m:
            if cur:
                rows.append(cur)
            rest = m.group(2)
            rubrique = ''
            for r in RUBRIQUES:
                if rest.startswith(r):
                    rubrique = r.rstrip(',').rstrip('-')
                    rest = rest[len(r):].strip()
                    break
            intitule, descriptif = rest, ''
            if 'Connaître' in rest:
                i = rest.index('Connaître')
                intitule, descriptif = rest[:i].strip(), rest[i:].strip()
            cur = {'rang': m.group(1), 'rubrique': rubrique, 'intitule': intitule, 'descriptif': descriptif}
        elif cur:
            if 'Connaître' in s and not cur['descriptif']:
                cur['descriptif'] = s
            elif cur['descriptif']:
                cur['descriptif'] += ' ' + s
            else:
                cur['intitule'] += ' ' + s
    if cur:
        rows.append(cur)
    for r in rows:
        r['intitule'] = clean_spaces(r['intitule'])
        r['descriptif'] = clean_spaces(r['descriptif'])
    return rows

def box(title, lines):
    body = '\n'.join(lines)
    return f'[[BOX:{title}]]\n{body}\n[[/BOX]]'

def table(title, rows):
    lines = [f'[[TABLE:{title}]]', 'Rang|Rubrique|Intitulé|Descriptif']
    for r in rows:
        lines.append('|'.join([r['rang'], r['rubrique'], r['intitule'], r['descriptif']]))
    lines.append('[[/TABLE]]')
    return '\n'.join(lines)

def split_subsections(lines):
    """Sépare les sous-titres A. B. C. collés au texte."""
    out = []
    for s in lines:
        s = s.strip()
        if not s:
            continue
        parts = re.split(r'(?<=\S)\s+(?=[A-Z]\.\s+[A-ZÉÈÀÂ])', s)
        for p in parts:
            p = p.strip()
            if re.match(r'^[A-Z]\.\s+', p):
                out.append(f'[[H4:{p}]]')
            else:
                out.append(p)
    return out

def merge_body_lines(lines):
    out = []
    for s in lines:
        s = s.strip()
        if not s:
            continue
        if s.startswith('[[H4:'):
            out.append(s)
            continue
        if out and out[-1] and not out[-1].startswith('[[H4:'):
            prev = out[-1]
            if s[0].islower() or s[0] in 'àâäéèêëïîôùûüœæ':
                out[-1] = prev + ' ' + s
                continue
            if not prev.endswith(('.', ':', ';', '?', '!', '»', ')')) and len(s) < 100:
                out[-1] = prev + ' ' + s
                continue
        out.append(s)
    return split_subsections(out)

def is_item_page(lines):
    rank_lines = sum(1 for l in lines if re.match(r'^[A-D]\s+', l.strip()))
    has_header = any('Rang Rubrique' in l for l in lines)
    return has_header or rank_lines >= 3

def process_page(text, chapter_title='', items=None):
    text = fix_hyphenation(text)
    lines = [l for l in text.split('\n') if l.strip() and not SKIP.match(l.strip())]

    has_intro = any(re.match(r'^([IVX]+)\.\s+', l.strip()) for l in lines) or any(
        re.match(r'^Situations de départ', l.strip(), re.I) for l in lines)
    if is_item_page(lines) and not (chapter_title and has_intro):
        item_title = next((l.strip() for l in lines if re.match(r'^ITEM\s+\d+', l.strip(), re.I)), '')
        rows = parse_item_rows(lines)
        if rows:
            title = item_title or (f'Objectifs pédagogiques — {items[0]}' if items else 'Objectifs pédagogiques')
            return table(title, rows)
        return ''

    plan, situations, item_lines, body = [], [], [], []
    mode = 'body'
    item_title = ''

    for line in lines:
        s = line.strip()
        if not s or SKIP.match(s):
            continue
        if re.match(r'^([IVX]+)\.\s+', s) and mode in ('body', 'plan'):
            mode = 'plan'
            plan.append('• ' + s)
            continue
        if re.match(r'^Situations de départ', s, re.I):
            mode = 'situations'
            continue
        if mode == 'situations':
            m = re.match(r'^(\d{2,3})\s+(.+)$', s)
            if m:
                situations.append(f'• {m.group(1)} — {clean_spaces(m.group(2))}')
                continue
            if re.match(r'^ITEM\s+', s, re.I):
                mode = 'item'
                item_title = s
                continue
            if re.match(r'^Rang Rubrique', s, re.I):
                mode = 'item'
                continue
            if re.match(r'^[IVX]+\.', s):
                mode = 'body'
            else:
                continue
        if re.match(r'^ITEM\s+\d+', s, re.I):
            mode = 'item'
            item_title = s
            continue
        if re.match(r'^Rang Rubrique', s, re.I):
            mode = 'item'
            continue
        if mode == 'item':
            if re.match(r'^([A-D])\s+', s):
                item_lines.append(s)
            elif item_lines:
                item_lines.append(s)
            continue
        body.append(s)

    parts = []
    if plan:
        parts.append(box('Plan du chapitre', plan))
    if situations:
        parts.append(box('Situations de départ', situations))
    if item_lines:
        rows = parse_item_rows(item_lines)
        if rows:
            title = item_title or (f'Objectifs pédagogiques — {items[0]}' if items else 'Objectifs pédagogiques')
            parts.append(table(title, rows))

    body = merge_body_lines(body)
    if chapter_title and body:
        tnorm = clean_spaces(chapter_title).lower()
        while body:
            first = clean_spaces(body[0]).lower()
            if not first or first in tnorm or tnorm.startswith(first[:min(10, len(first))]):
                body.pop(0)
            else:
                break

    if body:
        parts.append('\n\n'.join(body))

    return '\n\n'.join(parts).strip()

if not (ROOT / 'data.js.bak').exists():
    shutil.copy(DATA, ROOT / 'data.js.bak')

for ch in data['chapters']:
    pages = data['content'].get(ch['id'], [])
    cleaned = []
    for i, (pg, text) in enumerate(pages):
        ct = process_page(text, ch['t'] if i == 0 else '', ch.get('items'))
        if ct:
            cleaned.append([pg, ct])
    data['content'][ch['id']] = cleaned

payload = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
out = 'const APP_DATA = ' + payload + ';\n'
with open(DATA, 'w', encoding='utf-8') as f:
    f.write(out)
print('Taille:', len(out))

print('OK — pages nettoyées')
for ch in data['chapters'][:2]:
    print(f"\n=== {ch['id']} — {ch['t']} ===")
    print(data['content'][ch['id']][0][1][:600])
    if len(data['content'][ch['id']]) > 1:
        print('--- page 2 ---')
        print(data['content'][ch['id']][1][1][:400])
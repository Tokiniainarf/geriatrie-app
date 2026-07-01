"""
Audit rapide : compare les titres de chapitres du PDF avec data.js.
Extrait uniquement les pages de début de chapitre (1-50, 200-250, etc.)
pour identifier la table des matières et les titres.
"""
import pdfplumber, re, json, pathlib, sys

PDF = pathlib.Path('C:/Users/tokin/Downloads/Gériatrie 5e éd❤️.pdf')
DATA_JS = pathlib.Path('C:/Users/tokin/geriatrie-app/data.js')

pdf = pdfplumber.open(PDF)
print(f'PDF pages: {len(pdf.pages)}')

# Extract chapter titles by looking for "Chapitre N" patterns across all pages
# But do it page by page to avoid timeout, and stop when we have 20 chapters.
chapters = {}
for i, page in enumerate(pdf.pages):
    txt = page.extract_text() or ''
    for line in txt.splitlines():
        line = line.strip()
        m = re.match(r'Chapitre\s+(\d+)\s*[-–—]\s*(.+)', line, re.I)
        if m:
            num = int(m.group(1))
            title = m.group(2).strip()
            if num not in chapters:
                chapters[num] = {'title': title, 'page': i+1}
                print(f'Chapitre {num}: {title} (p.{i+1})')
    if len(chapters) >= 20:
        break

print('\n--- Titles from data.js ---')
data_text = DATA_JS.read_text(encoding='utf-8')
m = re.search(r'const\s+APP_DATA\s*=\s*({.*?});', data_text, re.S)
if not m:
    print('Could not parse APP_DATA')
    sys.exit(1)
app_data = json.loads(m.group(1))
for ch in app_data['chapters']:
    print(f"{ch['id']}: {ch['t']}")

print('\n--- Mismatches ---')
for ch in app_data['chapters']:
    num = int(ch['id'][2:])
    if num in chapters:
        pdf_title = chapters[num]['title']
        data_title = ch['t']
        if pdf_title.lower() != data_title.lower():
            print(f'MISMATCH ch{num}: PDF="{pdf_title}" vs data.js="{data_title}"')
        else:
            print(f'OK ch{num}: {pdf_title}')
    else:
        print(f'NOT FOUND in PDF: ch{num} {ch["t"]}')

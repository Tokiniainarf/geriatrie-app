import fitz
import pathlib

pdf_path = 'C:/Users/tokin/Downloads/Gériatrie 5e éd❤️.pdf'
doc = fitz.open(pdf_path)
out = []
for i in range(len(doc)):
    txt = doc[i].get_text()
    if 'Chapitre 1' in txt or 'Comprendre le vieillissement' in txt:
        out.append(f'--- Page {i+1} ---')
        out.append(txt[:5000])
        break
pathlib.Path('C:/Users/tokin/geriatrie-app/tools/ch1_full.txt').write_text('\n'.join(out), encoding='utf-8')
print('ch1 extracted')

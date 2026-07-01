import fitz, pathlib

doc = fitz.open('C:/Users/tokin/Downloads/Gériatrie 5e éd❤️.pdf')
titles = [
    'Comprendre le vieillissement', 'Appréhender la complexité', 'Évaluer l\'autonomie',
    'Éthique', 'Altération chronique', 'Du vieillissement osseux', 'Du vieillissement articulaire',
    'Évaluer la douleur', 'Raisonner devant une plainte mnésique', 'Raisonner devant une plainte thymique',
    'Diagnostiquer et raisonner devant un syndrome confusionnel', 'Raisonner devant une chute',
    'Prévenir et prendre en charge un syndrome d\'immobilisation', 'Évaluer l\'état nutritionnel',
    'Raisonner sur les troubles vésico-sphinctériens', 'Apprendre à prescrire', 'Prendre une décision de soins palliatifs'
]
pages = {}
for i, t in enumerate(titles, 1):
    for p in range(len(doc)):
        txt = doc[p].get_text()
        if t in txt:
            pages[i] = p+1
            print(f'ch{i}: {t[:40]}... p.{p+1}')
            break
    else:
        pages[i] = None
        print(f'ch{i}: {t[:40]}... NOT FOUND')

pathlib.Path('C:/Users/tokin/geriatrie-app/tools/chapter_pages.json').write_text(str(pages), encoding='utf-8')

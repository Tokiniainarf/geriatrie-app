import json, re

with open(r'C:\Users\tokin\geriatrie-app\data.js','r',encoding='utf-8') as f:
    d = json.loads(f.read().replace('const APP_DATA = ','').rstrip(';'))

patterns = {}
for ch in d['chapters']:
    for p in d['content'][ch['id']]:
        t = p[1]
        for pat in ['▼','© 2021','Elsevier','Situations de départ','Item, objectifs','Connaissances\n','Gériatrie\n','Rang Rubrique','viellissement','démos']:
            if pat.lower() in t.lower() or pat in t:
                patterns[pat] = patterns.get(pat, 0) + 1

print('Pattern counts:', patterns)

# show first page of each chapter
for ch in d['chapters'][:3]:
    p = d['content'][ch['id']][0]
    print('\n===', ch['id'], ch['t'], 'p', p[0], '===')
    print(p[1][:500])
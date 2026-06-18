import re
import json
import os

# Load data.js
with open(r'C:\Users\tokin\geriatrie-app\data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse APP_DATA
data_str = content.replace('const APP_DATA = ', '').rstrip().rstrip(';')
data = json.loads(data_str)

total = 0
for ch in data['chapters']:
    pages = data['content'].get(ch['id'], [])
    total += len(pages)
    print(f"{ch['id']}: {len(pages)} pages - {ch['t']}")

print(f"\nTotal pages: {total}")
print(f"Chapters: {len(data['chapters'])}")

# Count figure references
all_text = json.dumps(data['content'])
print(f"Fig. references: {len(re.findall(r'Fig\\.\\s*\\d+', all_text))}")
print(f"Tableau references: {len(re.findall(r'Tableau', all_text))}")
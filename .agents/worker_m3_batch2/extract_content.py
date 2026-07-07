import json
import re
import os

data_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\data.js"
out_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch2"

with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Remove 'const APP_DATA = ' prefix and trailing semicolon if any
content_clean = content.strip()
if content_clean.startswith("const APP_DATA ="):
    content_clean = content_clean[len("const APP_DATA ="):].strip()
if content_clean.endswith(";"):
    content_clean = content_clean[:-1].strip()

data = json.loads(content_clean)

chapters_to_extract = ["ch5", "ch6", "ch7", "ch8"]

for ch in chapters_to_extract:
    ch_data = data["content"].get(ch, [])
    ch_text = []
    for item in ch_data:
        # Each item is a list/tuple like [page_num, page_content]
        if isinstance(item, list) and len(item) == 2:
            ch_text.append(f"--- PAGE {item[0]} ---")
            ch_text.append(item[1])
        else:
            ch_text.append(str(item))
    
    out_file = os.path.join(out_dir, f"{ch}_textbook.txt")
    with open(out_file, "w", encoding="utf-8") as out_f:
        out_f.write("\n".join(ch_text))
    print(f"Extracted {ch} to {out_file}")

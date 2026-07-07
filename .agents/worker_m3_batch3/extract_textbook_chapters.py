import os
import json
import re
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

data_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\data.js"
out_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch3"

if not os.path.exists(data_path):
    print("data.js not found.")
    sys.exit(1)

with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Match the JS object
match = re.match(r"const\s+APP_DATA\s*=\s*(.*)", content, re.DOTALL)
if not match:
    print("Failed to match APP_DATA in data.js")
    sys.exit(1)

js_obj_str = match.group(1).strip()
if js_obj_str.endswith(";"):
    js_obj_str = js_obj_str[:-1]

try:
    data = json.loads(js_obj_str)
    print("Successfully parsed data.js JSON")
except Exception as e:
    print("Error parsing JSON:", e)
    sys.exit(1)

chapters = ["ch9", "ch10", "ch11", "ch12"]
for ch_id in chapters:
    ch_content = data.get("content", {}).get(ch_id, [])
    output_path = os.path.join(out_dir, f"{ch_id}_textbook.txt")
    
    # Sort pages by page number (the first element of each page pair)
    ch_content_sorted = sorted(ch_content, key=lambda x: x[0])
    
    with open(output_path, "w", encoding="utf-8") as out_f:
        out_f.write(f"=== CHAPTER {ch_id.upper()} ===\n\n")
        for page_num, text in ch_content_sorted:
            out_f.write(f"--- PAGE {page_num} ---\n")
            out_f.write(text)
            out_f.write("\n\n")
            
    print(f"Extracted {ch_id} textbook to {output_path} ({len(ch_content_sorted)} pages)")

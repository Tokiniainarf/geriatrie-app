import json
import os
import re

data_js_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\data.js"
with open(data_js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

# Since data.js has format `const APP_DATA = {...};`, let's extract the JSON part.
# It starts at the first `{` and ends at the last `}`.
start_idx = js_content.find("{")
end_idx = js_content.rfind("}")
json_str = js_content[start_idx:end_idx+1]
data = json.loads(json_str)

print("Keys in APP_DATA:", data.keys())
print("Chapters:")
for chapter in data["chapters"]:
    print(f"  {chapter['id']}: {chapter['t']}")

# Dump chapters 17, 18, 19, 20 content
for ch_id in ["ch17", "ch18", "ch19", "ch20"]:
    ch_content = data["content"].get(ch_id, "")
    # Wait, is ch_content a list of page/block representations or just a string?
    # In the head printout: `"ch1":[[29,"Comprendre\nle vieillissement..."`
    # So it looks like a list of lists: each is [page_num, text].
    text_parts = []
    if isinstance(ch_content, list):
        for item in ch_content:
            if isinstance(item, list) and len(item) == 2:
                page_num, text = item
                text_parts.append(f"--- Page {page_num} ---\n{text}")
            else:
                text_parts.append(str(item))
        full_text = "\n\n".join(text_parts)
    else:
        full_text = str(ch_content)
        
    out_file = f"C:\\Users\\tokin\\.gemini\\antigravity\\scratch\\geriatrie-app\\.agents\\worker_m3_batch5\\{ch_id}_content.txt"
    with open(out_file, "w", encoding="utf-8") as out:
        out.write(full_text)
    print(f"Dumped {ch_id} to {out_file} ({len(full_text)} chars)")

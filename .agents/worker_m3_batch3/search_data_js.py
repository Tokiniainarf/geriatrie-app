import os
import json
import re
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

data_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\data.js"
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

data = json.loads(js_obj_str)
all_text = ""
for ch_id, pages in data.get("content", {}).items():
    if ch_id in ["ch9", "ch10", "ch11", "ch12"]:
        for page_num, text in pages:
            all_text += f"\n--- {ch_id} Page {page_num} ---\n{text}\n"

# Search for BPSD, SCPD, delirium, depression, etc.
terms = ["bpsd", "scpd", "delirium", "confusion", "dépression", "chute", "marche"]
for t in terms:
    matches = [m.start() for m in re.finditer(t, all_text, re.IGNORECASE)]
    print(f"Term '{t}': {len(matches)} occurrences in ch9-12.")

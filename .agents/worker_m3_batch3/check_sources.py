import os
import json
import re

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
pdf_files = [
    "Geriatric_Neurocognitive_Blueprint.pdf",
    "2024_BPSD_Clinical_Management.pdf",
    "Geriatric_Mood_Disorder_Algorithm.pdf",
    "Geriatric_Delirium_Management.pdf",
    "Blueprint_des_Chutes_Gériatriques.pdf"
]

print("Checking PDFs in:", pdf_dir)
if os.path.exists(pdf_dir):
    for f in os.listdir(pdf_dir):
        print(f"  {f} - {os.path.getsize(os.path.join(pdf_dir, f)) if os.path.isfile(os.path.join(pdf_dir, f)) else 'DIR'} bytes")
else:
    print("PDF directory does not exist!")

print("\nChecking data.js...")
data_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\data.js"
if os.path.exists(data_path):
    with open(data_path, "r", encoding="utf-8") as f:
        content = f.read()
    # Strip JavaScript variable declaration
    match = re.match(r"const\s+APP_DATA\s*=\s*(.*)", content, re.DOTALL)
    if match:
        js_obj_str = match.group(1).strip()
        # In case there's a trailing semicolon
        if js_obj_str.endswith(";"):
            js_obj_str = js_obj_str[:-1]
        try:
            data = json.loads(js_obj_str)
            print("Successfully loaded data.js!")
            print("Chapters:")
            for ch in data.get("chapters", []):
                ch_id = ch["id"]
                if ch_id in ["ch9", "ch10", "ch11", "ch12"]:
                    ch_content = data.get("content", {}).get(ch_id, [])
                    print(f"  {ch_id}: {ch['t']} - {len(ch_content)} pages, items: {ch.get('items')}")
        except Exception as e:
            print("Error parsing JSON:", e)
    else:
        print("Regex match failed for APP_DATA.")
else:
    print("data.js does not exist!")

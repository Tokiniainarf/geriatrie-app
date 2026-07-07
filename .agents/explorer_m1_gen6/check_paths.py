import os
import json
import sys

# Ensure stdout uses UTF-8 if we print
try:
    sys.stdout.reconfigure(encoding='utf-8')
except AttributeError:
    pass

paths_to_check = [
    r"C:\Users\tokin\Desktop\GERIARTRIE\Gériatrie 5e éd❤️.pdf",
    r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
]

results = {}
for p in paths_to_check:
    exists = os.path.exists(p)
    results[p] = {
        "exists": exists,
        "is_dir": os.path.isdir(p) if exists else False,
        "is_file": os.path.isfile(p) if exists else False
    }

parent_folder = r"C:\Users\tokin\Desktop\GERIARTRIE"
parent_exists = os.path.exists(parent_folder)
parent_contents = []

if parent_exists and os.path.isdir(parent_folder):
    try:
        parent_contents = os.listdir(parent_folder)
    except Exception as e:
        parent_contents = [f"Error listing directory: {str(e)}"]

desktop_folder = r"C:\Users\tokin\Desktop"
desktop_contents = []
if os.path.exists(desktop_folder):
    try:
        desktop_contents = [f for f in os.listdir(desktop_folder)]
    except Exception as e:
        desktop_contents = [f"Error listing desktop: {str(e)}"]

out_data = {
    "path_verification": results,
    "parent_folder_contents": {
        "path": parent_folder,
        "exists": parent_exists,
        "contents": parent_contents
    },
    "desktop_contents": desktop_contents
}

with open(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\explorer_m1_gen6\paths_info.json", "w", encoding="utf-8") as f:
    json.dump(out_data, f, indent=2, ensure_ascii=False)

print("Paths checked and written to paths_info.json successfully.")

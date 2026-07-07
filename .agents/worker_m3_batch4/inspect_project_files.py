import glob
import os

keywords = ["alitement", "nutrition", "incontinence", "prescrire", "immobilisation", "hydratation"]
project_files = glob.glob(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\*.js") + \
                glob.glob(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\*.txt")

for filepath in project_files:
    if os.path.isdir(filepath):
        continue
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read().lower()
        found = [kw for kw in keywords if kw in content]
        if found:
            print(f"File: {os.path.basename(filepath)} contains keywords: {found}")
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

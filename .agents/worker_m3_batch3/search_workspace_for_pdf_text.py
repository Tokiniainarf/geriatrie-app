import os
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

search_terms = ["Neurocognitive Blueprint", "BPSD", "Mood Disorder", "Delirium Management", "Chutes Gériatriques"]
project_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app"

found_any = False
for root, dirs, files in os.walk(project_dir):
    # Skip .git and .pytest_cache
    if ".git" in root or ".pytest_cache" in root:
        continue
    for f in files:
        if f.endswith((".txt", ".json", ".js", ".md", ".py")):
            path = os.path.join(root, f)
            try:
                with open(path, "r", encoding="utf-8", errors="ignore") as file:
                    content = file.read()
                for term in search_terms:
                    if term.lower() in content.lower():
                        print(f"Match found in: {os.path.relpath(path, project_dir)} (term: '{term}')")
                        found_any = True
            except Exception as e:
                pass

if not found_any:
    print("No matches for search terms in any text files.")

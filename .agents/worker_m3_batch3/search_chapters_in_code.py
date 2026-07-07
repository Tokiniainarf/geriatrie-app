import os
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

project_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app"
found = False

for root, dirs, files in os.walk(project_dir):
    if ".git" in root or ".pytest_cache" in root or ".agents" in root:
        continue
    for f in files:
        if f.endswith((".js", ".json", ".txt")):
            path = os.path.join(root, f)
            try:
                with open(path, "r", encoding="utf-8", errors="ignore") as file:
                    content = file.read()
                # Check for "ch9", "ch10", "ch11", "ch12"
                for ch in ["ch9", "ch10", "ch11", "ch12"]:
                    if f'"{ch}"' in content or f"'{ch}'" in content:
                        print(f"Match found in: {os.path.relpath(path, project_dir)} (chapter: {ch})")
                        found = True
                        break
            except Exception as e:
                pass

if not found:
    print("No matches for chapters in non-agent files.")

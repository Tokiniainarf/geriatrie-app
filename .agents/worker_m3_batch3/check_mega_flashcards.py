import os
import re

project_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app"

for f in os.listdir(project_dir):
    if f.startswith("mega-flashcards") and f.endswith(".js"):
        path = os.path.join(project_dir, f)
        print(f"\nFile: {f} ({os.path.getsize(path)} bytes)")
        with open(path, "r", encoding="utf-8", errors="ignore") as file:
            content = file.read()
        # Find chapter names or count card occurrences
        chapters = re.findall(r'"chapter"\s*:\s*"([^"]+)"', content)
        if chapters:
            from collections import Counter
            counts = Counter(chapters)
            print("  Chapter counts:", dict(counts))
        else:
            print("  No chapter fields found.")

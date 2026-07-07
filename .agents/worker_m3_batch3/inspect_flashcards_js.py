import os
import re
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

project_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app"
js_files = ["flashcards-batch-B.js", "flashcards-expanded.js", "flashcards-memos.js", "flashcards.js"]

for filename in js_files:
    path = os.path.join(project_dir, filename)
    if os.path.exists(path):
        print(f"\n================ FILE: {filename} ================")
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        # Find some examples of card structures or count cards for ch9-12
        for ch in ["ch9", "ch10", "ch11", "ch12"]:
            # Match objects like: { ... "chapter": "ch9" ... } or similar
            # Since formatting varies, let's use regex to find occurrences
            matches = re.findall(r'\{\s*(?:[^{}]*?"chapter"\s*:\s*"' + ch + r'"[^{}]*?)\}', content, re.DOTALL)
            print(f"  {ch}: {len(matches)} matches")
            if matches:
                print(f"    Example match for {ch}:")
                # print first match but clean up whitespace
                clean_match = re.sub(r'\s+', ' ', matches[0])
                print(f"      {clean_match[:300]}")
    else:
        print(f"File {filename} does not exist.")

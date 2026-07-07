import os
import re
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

out_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch3"
chapters = ["ch9", "ch10", "ch11", "ch12"]

for ch_id in chapters:
    path = os.path.join(out_dir, f"{ch_id}_textbook.txt")
    print(f"\n================ CHAPTER {ch_id.upper()} ================")
    if not os.path.exists(path):
        print("Not found.")
        continue
    with open(path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    # Print lines that look like headings
    heading_pattern = re.compile(r"^\s*([I|V|X]+\.|[A-Z]\.|[0-9]\.|Objectives|Item|ITEM|Encadré|Tableau|Points clés)", re.IGNORECASE)
    printed = 0
    for line in lines:
        if heading_pattern.match(line) or "© 20" in line:
            clean_line = line.strip()
            if clean_line:
                print(f"  {clean_line}")
                printed += 1
                if printed > 40:
                    print("  ... (truncated)")
                    break

import os
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

b1_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch1\BRIEFING.md"
b2_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch2\BRIEFING.md"

def print_briefing(name, path):
    print(f"\n=== {name} ===")
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8", errors="replace") as f:
            print(f.read())
    else:
        print("Not found.")

print_briefing("Batch 1 Briefing", b1_path)
print_briefing("Batch 2 Briefing", b2_path)

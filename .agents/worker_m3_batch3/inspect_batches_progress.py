import os
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

p1_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch1\progress.md"
p2_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch2\progress.md"

def print_progress(name, path):
    print(f"\n=== {name} ===")
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8", errors="replace") as f:
            print(f.read())
    else:
        print("Not found.")

print_progress("Batch 1 Progress", p1_path)
print_progress("Batch 2 Progress", p2_path)

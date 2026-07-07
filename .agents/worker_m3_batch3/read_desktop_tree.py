import os
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch5\desktop_tree.txt"
if os.path.exists(path):
    print("Content of desktop_tree.txt:")
    with open(path, "r", encoding="utf-8", errors="replace") as f:
        print(f.read())
else:
    print("Does not exist.")

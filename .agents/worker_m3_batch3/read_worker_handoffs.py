import os
import sys

# Ensure stdout handles UTF-8 correctly
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

m2_handoff = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m2_gen6\handoff.md"
print("M2 Handoff content:")
if os.path.exists(m2_handoff):
    with open(m2_handoff, "r", encoding="utf-8", errors="replace") as f:
        lines = f.readlines()
        print("".join(lines[:100])) # first 100 lines
else:
    print("Does not exist.")

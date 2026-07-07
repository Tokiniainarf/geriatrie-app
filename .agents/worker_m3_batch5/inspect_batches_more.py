import os
import sys

# Configure stdout to use utf-8
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

agents_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents"
for batch in ["worker_m3_batch1", "worker_m3_batch2", "worker_m3_batch3", "worker_m3_batch4"]:
    briefing_path = os.path.join(agents_dir, batch, "BRIEFING.md")
    if os.path.exists(briefing_path):
        print(f"=== {batch}/BRIEFING.md ===")
        with open(briefing_path, "r", encoding="utf-8") as f:
            content = f.read()
            # print first 1500 chars safely
            print(content[:1500].encode('ascii', errors='replace').decode('ascii'))
            print("\n" + "="*40 + "\n")
    else:
        print(f"{batch}/BRIEFING.md not found")

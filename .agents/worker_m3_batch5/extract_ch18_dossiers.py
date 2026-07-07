import re

with open(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch5\ch18_content.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Let's find each "DP X" or "Dossier Progressif X"
# and print the dossier text and the questions.
dossiers = re.split(r"\bDP\s+\d+", text)
print(f"Total dossiers found: {len(dossiers) - 1}")

for i, d in enumerate(dossiers[1:]):
    lines = d.strip().split("\n")
    print(f"=== Dossier {i+1} ===")
    print("Intro lines:")
    for line in lines[:8]:
        print("  ", line)
    print("Questions count:")
    q_matches = re.findall(r"Question\s+\d+", d)
    print(f"  Questions: {len(q_matches)} ({q_matches})")
    print("-" * 50)

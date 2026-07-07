import re

def analyze_file(filepath, pattern):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    matches = list(re.finditer(pattern, content))
    print(f"File: {filepath}")
    print(f"Total matches for '{pattern}': {len(matches)}")
    for i, m in enumerate(matches[:15]):
        # Print surrounding context
        start = max(0, m.start() - 20)
        end = min(len(content), m.end() + 150)
        snippet = content[start:end].replace('\n', ' ')
        print(f"  {i+1}: {snippet}")
    print("-" * 50)

analyze_file(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch5\ch18_content.txt", r"\bDP\s+\d+")
analyze_file(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch5\ch19_content.txt", r"\bKFP\s+\d+")
analyze_file(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch5\ch20_content.txt", r"\b[AB]\s+QRM\s+\d+")

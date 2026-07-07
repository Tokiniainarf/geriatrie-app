import re

with open(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\data.js", "r", encoding="utf-8") as f:
    content = f.read()

print("Length of data.js:", len(content))

# Let's search for variables or keys defined in data.js
# E.g., ch13, ch14, ch15, ch16
for ch in ["ch13", "ch14", "ch15", "ch16"]:
    matches = list(re.finditer(ch, content, re.IGNORECASE))
    print(f"Occurrences of {ch}: {len(matches)}")
    if matches:
        # print context around the first match
        start = max(0, matches[0].start() - 100)
        end = min(len(content), matches[0].end() + 100)
        print(f"First match context for {ch}:")
        print(repr(content[start:end]))

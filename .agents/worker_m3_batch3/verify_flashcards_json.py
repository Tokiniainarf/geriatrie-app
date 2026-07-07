import json
import os
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch3\flashcards.json"
if not os.path.exists(path):
    print("Error: flashcards.json not found!")
    sys.exit(1)

try:
    with open(path, "r", encoding="utf-8") as f:
        cards = json.load(f)
    print("Success: flashcards.json parsed as valid JSON.")
except Exception as e:
    print(f"Error parsing JSON: {e}")
    sys.exit(1)

# Check count
count = len(cards)
print(f"Total cards: {count}")
if count != 200:
    print(f"Error: Expected exactly 200 cards, got {count}")
    sys.exit(1)

# Check IDs
ids = [c.get("id") for c in cards]
min_id = min(ids)
max_id = max(ids)
print(f"ID Range: {min_id} to {max_id}")
if min_id != 3401 or max_id != 3600:
    print(f"Error: Expected ID range 3401 to 3600, got {min_id} to {max_id}")
    sys.exit(1)

if len(set(ids)) != 200:
    print("Error: Duplicate IDs found!")
    # Find duplicates
    seen = set()
    dupes = []
    for idx in ids:
        if idx in seen:
            dupes.append(idx)
        seen.add(idx)
    print("Duplicates:", dupes)
    sys.exit(1)

# Check fields and counts per chapter
ch_counts = {}
unique_questions = set()
for c in cards:
    id_val = c.get("id")
    ch = c.get("chapter")
    rang = c.get("rang")
    q = c.get("question")
    ans = c.get("answer")
    tags = c.get("tags")
    
    # Check chapter
    if ch not in ["ch9", "ch10", "ch11", "ch12"]:
        print(f"Error on card {id_val}: Invalid chapter {ch}")
        sys.exit(1)
    ch_counts[ch] = ch_counts.get(ch, 0) + 1
    
    # Check rang
    if rang not in ["A", "B"]:
        print(f"Error on card {id_val}: Invalid rang {rang}")
        sys.exit(1)
        
    # Check question
    if not q or not isinstance(q, str) or len(q.strip()) == 0:
        print(f"Error on card {id_val}: Empty or invalid question")
        sys.exit(1)
    if q in unique_questions:
        print(f"Warning: Duplicate question on card {id_val}: '{q[:50]}...'")
    unique_questions.add(q)
    
    # Check answer
    if not ans or not isinstance(ans, str) or len(ans.strip()) == 0:
        print(f"Error on card {id_val}: Empty or invalid answer")
        sys.exit(1)
        
    # Check tags
    if not tags or not isinstance(tags, list) or len(tags) == 0:
        print(f"Error on card {id_val}: Empty or invalid tags list")
        sys.exit(1)
    for t in tags:
        if not t or not isinstance(t, str) or len(t.strip()) == 0:
            print(f"Error on card {id_val}: Invalid tag '{t}'")
            sys.exit(1)

print("Chapter Counts:")
for ch in ["ch9", "ch10", "ch11", "ch12"]:
    cnt = ch_counts.get(ch, 0)
    print(f"  {ch}: {cnt}")
    if cnt != 50:
        print(f"Error: Chapter {ch} has {cnt} cards instead of 50")
        sys.exit(1)

print("\nAll checks passed successfully! The file is pristine and ready.")

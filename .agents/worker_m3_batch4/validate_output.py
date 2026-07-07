import json
import os

filepath = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch4\flashcards.json"
if not os.path.exists(filepath):
    print("Error: flashcards.json not found!")
    exit(1)

with open(filepath, "r", encoding="utf-8") as f:
    try:
        data = json.load(f)
        print("Successfully loaded JSON.")
    except Exception as e:
        print("Error: Failed to parse JSON:", str(e))
        exit(1)

if not isinstance(data, list):
    print("Error: JSON root is not a list!")
    exit(1)

print(f"Total cards found: {len(data)}")

expected_keys = {"id", "chapter", "rang", "question", "answer", "tags"}
allowed_chapters = {"ch13", "ch14", "ch15", "ch16"}
allowed_rangs = {"A", "B"}

errors = []
for idx, card in enumerate(data):
    # Check keys
    keys = set(card.keys())
    if keys != expected_keys:
        errors.append(f"Card {idx}: Mismatched keys {keys}. Expected {expected_keys}")
    
    # Check id
    cid = card.get("id")
    if not isinstance(cid, int):
        errors.append(f"Card {idx}: ID {cid} is not an integer.")
    elif cid != 3601 + idx:
        errors.append(f"Card {idx}: ID {cid} is not sequential starting at 3601.")
        
    # Check chapter
    ch = card.get("chapter")
    if ch not in allowed_chapters:
        errors.append(f"Card {idx}: Invalid chapter {ch}. Allowed: {allowed_chapters}")
        
    # Check rang
    rang = card.get("rang")
    if rang not in allowed_rangs:
        errors.append(f"Card {idx}: Invalid rang {rang}. Allowed: {allowed_rangs}")
        
    # Check question
    q = card.get("question")
    if not isinstance(q, str) or len(q.strip()) == 0:
        errors.append(f"Card {idx}: Empty or non-string question.")
        
    # Check answer
    a = card.get("answer")
    if not isinstance(a, str) or len(a.strip()) == 0:
        errors.append(f"Card {idx}: Empty or non-string answer.")
        
    # Check tags
    tags = card.get("tags")
    if not isinstance(tags, list):
        errors.append(f"Card {idx}: Tags is not a list.")
    else:
        for t in tags:
            if not isinstance(t, str) or len(t.strip()) == 0:
                errors.append(f"Card {idx}: Contains empty or non-string tag.")

if len(errors) == 0:
    print("All validation checks passed!")
else:
    print(f"Found {len(errors)} validation errors:")
    for err in errors[:20]:
        print(" -", err)

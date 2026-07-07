# BRIEFING — 2026-07-06T21:57:42Z

## Mission
Generate 200 high-quality clinical gériatrie flashcards (50 for each of ch5, ch6, ch7, ch8) based on data.js and specified PDFs.

## 🔒 My Identity
- Archetype: teamwork_preview_worker
- Roles: implementer, qa, specialist
- Working directory: C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch2
- Original parent: f83ed225-c3bc-4258-bd76-fac1927d648f
- Milestone: m3_batch2

## 🔒 Key Constraints
- Generate exactly 50 cards for each of ch5, ch6, ch7, ch8 (total 200 cards).
- IDs 3201 to 3400.
- Fields: id (numeric), chapter (string 'ch5'|'ch6'|'ch7'|'ch8'), rang (string 'A'|'B'), question (string), answer (string), tags (array of strings).
- Save to C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch2\flashcards.json.
- Source from data.js and specified PDFs (using python / PyMuPDF to extract).
- DO NOT CHEAT. Real clinical content.

## Current Parent
- Conversation ID: f83ed225-c3bc-4258-bd76-fac1927d648f
- Updated: not yet

## Task Summary
- **What to build**: 200 flashcards JSON.
- **Success criteria**: Exactly 50 cards per chapter, correct format, high-quality, EVC-aligned.
- **Interface contracts**: None
- **Code layout**: None

## Key Decisions Made
- Use PyMuPDF via a Python script to extract PDF contents for research.
- Read data.js and match chapters to topic areas.

## Artifact Index
- C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch2\flashcards.json — Flashcards output.

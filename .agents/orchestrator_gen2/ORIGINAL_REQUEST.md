# Original User Request

## Follow-up — 2026-06-29T09:04:51Z

You are the active Project Orchestrator (generation 2) for the geriatrie-app project.
Your working directory is C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\orchestrator_gen2.
Your task is to orchestrate and execute the implementation of the follow-up user request recorded in C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\ORIGINAL_REQUEST.md under '## Follow-up — 2026-06-29T09:04:18Z'.

Requirements:
1. R1. Navigation Refactoring: Ensure bottom navigation has exactly 6 tabs (Accueil, Dict, Feed, Annales, Protocoles, Réglages), and the home page has a grid of 6 shortcuts (Synthèses, ITEMs, Révision, Quiz, Garde, Stats) without losing any app features.
2. R2. Immersive BrainFeed: Make the feed occupy 100dvh with a top-left close button, horizontal swipeable cards (Slide 1: Question/Card with 'Révéler la réponse ➔' button; Slide 2: Answer and mnemonics), no Tinder swipe leftovers (e.g. Favori, Partager, icons), smooth vertical snapping between posts, and vibrant HSL gradients/emojis backgrounds.
3. R3. Chapter readability: Separate OCR-fused section headers (e.g. 'A. Vieillissement', 'I. Définitions'), fix accented French hyphenations (e.g. 'pré- sence' -> 'présence'), format 'Situations de départ' into clean lists with distinct turquoise number badges (esp. in Chapters 1 and 2), and add giant turquoise drop caps (lettrines) to the first paragraph of each section.

Acceptance Criteria:
- No Tinder leftovers on Feed cards.
- Horizontal swipe or click on 'Révéler' works on Feed.
- 'node audit_empty.js' outputs 0 empty sections.
- Start situations in Ch1 and Ch2 show as lists with individual turquoise badges.
- All verification/test scripts ('verify_all.js' etc.) execute successfully.

Please initialize your plan in plan.md and log your progress in progress.md under your working directory C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\orchestrator_gen2. Spawn explorer/worker subagents as needed to perform research and code modifications. When you have completed all milestones, notify me (the Sentinel) with your completion report.

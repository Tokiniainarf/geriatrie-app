# Implementation Plan - Navigation, BrainFeed, Chapter Layout

This plan covers the design, execution, and verification of the follow-up requirements.

## 1. Decompose & Milestones

### Milestone 1: Navigation Refactoring (R1)
- Verify `index.html` and `app.js` navigation logic.
- Ensure bottom navigation has exactly 6 tabs (Accueil, Dict, Feed, Annales, Protocoles, Réglages).
- Ensure home page grid has exactly 6 shortcuts (Synthèses, ITEMs, Révision, Quiz, Garde, Stats).
- Ensure no feature is lost during simplification.

### Milestone 2: Immersive BrainFeed (R2)
- Inspect `brainfeed.js` and CSS.
- Update feed styles to occupy 100dvh.
- Add close button (top-left).
- Transform each post card into a horizontal swipeable carousel (Slide 1: Question with "Révéler la réponse ➔" button; Slide 2: Answer/mnemonics).
- Remove Tinder leftovers (Favori, Partager, etc.).
- Ensure smooth vertical snapping between posts.
- Ensure vibrant HSL gradients and transparent emoji backgrounds are correctly rendered.

### Milestone 3: Chapter Readability (R3)
- Inspect `app.js` text formatting / parsing code.
- Separate OCR-fused section headers (e.g. "A. Vieillissement", "I. Définitions").
- Fix accented French word-breaking hyphenations (e.g. "pré- sence" -> "présence").
- Format "Situations de départ" into clean lists with distinct turquoise number badges (especially in Chapters 1 & 2).
- Add giant turquoise drop caps (lettrines) to the first paragraph of each section.

### Milestone 4: Verification & Audit
- Run existing verification scripts (e.g., `verify-all-chapters.js`, `audit_empty.js`).
- Verify UX flows in all tabs and home grid.
- Ensure 0 empty sections are reported.

## 2. Iteration Loop per Milestone
For each milestone:
1. **Explore**: Spawn Explorer to analyze the target files and propose precise edits.
2. **Implement**: Spawn Worker to apply the changes, run builds/tests.
3. **Review**: Spawn Reviewer to verify correctness and conformance.
4. **Challenge**: Spawn Challenger to perform verification/stress tests.
5. **Audit**: Spawn Forensic Auditor to verify integrity and correctness.
6. **Gate**: If all checks pass, proceed. Otherwise, iterate.

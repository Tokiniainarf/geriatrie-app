# plan.md - Orchestrator Plan (Gen 4)

## Objective
Implement OCR cleaning (hyphenations, column interleaving, word/paragraph repetitions), fix "Situations de départ" extraction & display, ensure zero regressions (51/51 E2E tests passing, 0 issues in `verify-all-chapters.js`), prevent raw situation numbers from appearing inside normal paragraphs, and provide `audit_ocr.js`.

## Architecture & Codebase Files
- `data.js`: Text repository containing static chapter content array.
- `app.js`: Main application logic containing the text processing/parser and rendering engine (`preprocessAppData()`, `renderChapter()`).
- `tests/run-e2e.js`: E2E test runner validating layout, functionality, and specific test cases.
- `verify-all-chapters.js`: Validates all 20 chapters for outline, structure, and text content anomalies.

## Milestones
We partition the work into one main milestone (due to tight coupling of parsing rules and data cleanup):

### Milestone 1: OCR, Text Repeats, and Situations of Départ Fixes
1. **Explore**:
   - Analyze `data.js` for occurrences of column interleaving (e.g., `d'alté- Interrogatoire et examen\nration`), word repetitions (e.g., `complémentaires plémentaires`), and paragraph/page-transition repetitions.
   - Analyze `app.js` and how it currently parses text, extracts "Situations de départ", splits section headers, and handles hyphenations.
   - Identify how and where raw numbers like `295` appear in paragraphs in Chapters 1 & 2.
2. **Implement**:
   - Implement cleanups in `data.js` for static OCR errors.
   - Enhance the parser in `app.js` (specifically in `renderChapter` or `preprocessAppData`) to dynamically clean word repetitions, handle complex hyphenation with column interleaving, and filter out/extract situations of départ.
   - Ensure that when "Situations de départ" are extracted, they are removed from the standard paragraph body so they do not render as raw text in the middle of a paragraph.
   - Format them correctly under a bulleted list with turquoise badges.
3. **Verify**:
   - Run existing E2E tests (`node tests/run-e2e.js`) and chapter verifier (`node verify-all-chapters.js`).
   - Create `audit_ocr.js` to automatically verify the absence of words cut/repeated (like `altéinterrogatoire` or `complémentaires plémentaires`) and raw situation numbers in normal paragraphs across all 20 chapters.
4. **Audit**:
   - Spawn Forensic Auditor to verify integrity and compile a clean verdict.

## Team Dispatch Plan
- **Explorer**: Spawn `teamwork_preview_explorer` (up to 3 instances or run sequentially if needed) to investigate where the target OCR errors, repetitions, and situation of départ issues are in `data.js` and `app.js`.
- **Worker**: Spawn `teamwork_preview_worker` to apply the changes to `data.js`, `app.js`, and write `audit_ocr.js`.
- **Reviewer**: Spawn `teamwork_preview_reviewer` to review correctness and layout compliance.
- **Challenger**: Spawn `teamwork_preview_challenger` to run the test suite and confirm zero regressions.
- **Auditor**: Spawn `teamwork_preview_auditor` to audit the final code for integrity violations and compliance.

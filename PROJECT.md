# Project: Geriatrie App - OCR & Situations of Départ Cleanup

## Architecture
- `data.js`: Text database. Contains metadata and chapter text.
- `app.js`: Application logic. Parses chapter text, splits sections, extracts headers/TOCs/situations, and performs DOM rendering.
- `tests/run-e2e.js`: E2E verification of rendering, navigation, and mock DOM behavior.
- `verify-all-chapters.js`: Command line validation script.

## Milestones
| # | Name | Scope | Dependencies | Status | Conversation ID |
|---|---|---|---|---|---|
| 1 | OCR & Situations of Départ Fixes | Implement OCR text cleaning, word/paragraph repeat removal, clean up situations of départ rendering, ensure E2E tests pass, and write audit_ocr.js. | None | PLANNED | TBD |

## Interface Contracts
- **OCR Text Processing**:
  - `data.js` and `app.js` must process and clean text patterns such as `d'alté- Interrogatoire et examen\nration` into `d'altération` (relocating the interleaving text if necessary, or deleting/formatting it properly).
  - Word repeats such as `complémentaires plémentaires` or `altéinterrogatoire` must be cleaned.
- **Situations de départ**:
  - Lignes with 2 or 3 digits (e.g. `295 Consultation...`) must be extracted into the dedicated situations section of the chapter.
  - They must NOT remain as raw text in the paragraph body.
  - They should be rendered under a styled bullet list with turquoise badges.

## Code Layout
- `app.js` - Client PWA JavaScript
- `data.js` - Data file
- `tests/run-e2e.js` - E2E tests
- `verify-all-chapters.js` - Check structural/empty section constraints
- `audit_ocr.js` - New script to check OCR errors and situation numbers

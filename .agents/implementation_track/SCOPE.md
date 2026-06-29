# Scope: Implementation of R1, R2, R3, R4

## Architecture
- `data.js` contains `APP_DATA.chapters` (metadata) and `APP_DATA.content` (raw text chapters as array of chunks).
- `app.js` is the main Progressive Web App (PWA) client-side JavaScript. It handles:
  - Reading `APP_DATA`.
  - DOMContentLoaded event triggering rendering.
  - Chapter rendering via `renderChapter(raw, chId)`.
  - Navigation, search, and UI updates.
- Audit scripts (`audit_empty.js`, `verify-all-chapters.js`, etc.) run in Node.js using the `vm` module to execute `app.js` functions and verify correctness of the rendered HTML.

## Milestones
| # | Name | Scope | Dependencies | Status | Conversation ID |
|---|---|---|---|---|---|
| M1 | M1: PDF chapter boundary alignment | Create `preprocessAppData()` in `app.js` called at DOMContentLoaded to re-align page guards/outlines/syllabus tables misplaced at the end of previous chapters. | None | PLANNED | TBD |
| M2 | M2: TOC Filtering | Modify `renderChapter()` in `app.js` to filter out inner-text TOC headings matched by `SECTION_RE`/`LETTER_RE` using lookahead/lookbehind context check (5 lines), excluding first 40 lines. | M1 | PLANNED | TBD |
| M3 | M3: Clean Empty Sections | Modify `renderChapter()` in `app.js` to remove empty `<section>` blocks (less than 20 chars of body content) using regex replacement in the final HTML. | M2 | PLANNED | TBD |
| M4 | M4: Fix Audit Scripts | Fix hardcoded paths in `verify-all-chapters.js` and other scripts to use relative paths, and verify that 0 empty sections are reported across all chapters. | M3 | PLANNED | TBD |

## Interface Contracts
### `app.js` Interface Extensions
- `preprocessAppData()`:
  - Iterates over all chapters in `APP_DATA.content`.
  - Dynamically detects misplaced start blocks at the end of chapter `i` (by looking for outlines or markers like `stnioP` in the second half).
  - Prepends the misplaced blocks to chapter `i+1`.
  - Called at the top of the `DOMContentLoaded` listener in `app.js`.

- `renderChapter(raw, chId)` adjustments:
  - Before rendering lines, filter TOC lines (using the lookahead/lookbehind 5-line rule, excluding first 40 lines).
  - After generating HTML, run regex to remove empty section tags:
    `<section class="manual-section"><header class="section-head">...</header><div class="section-body">\s*<\/div><\/section>`

## Code Layout
- `app.js` - Client-side app code containing data processing and rendering.
- `data.js` - Contains raw syllabus content chunks.
- `verify-all-chapters.js` - Core audit verification script.
- `audit_empty.js` - Verification script for checking empty sections.

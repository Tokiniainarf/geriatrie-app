# Project: Geriatrie App - Follow-up Requirements

## Architecture
- `data.js` contains `APP_DATA.chapters` (metadata) and `APP_DATA.content` (raw text chapters as array of chunks).
- `app.js` is the main Progressive Web App (PWA) client-side JavaScript. It handles:
  - Reading `APP_DATA`.
  - DOMContentLoaded event triggering rendering.
  - Chapter rendering via `renderChapter(raw, chId)`.
  - Navigation, search, and UI updates.
- `brainfeed.js` handles rendering and interactions for the BrainFeed.
- `index.html` holds the UI skeleton (bottom nav, home page, feed container, settings, etc.).
- `style.css` contains all styles.

## Milestones
| # | Name | Scope | Dependencies | Status | Conversation ID |
|---|---|---|---|---|---|
| 1 | Milestone 1: Follow-up Implementation | Implement navigation refactoring, immersive BrainFeed, and chapter readability improvements. Verify and audit. | None | IN_PROGRESS | cea9fb6a, 81c3ca3f, 57c78a59 |

## Interface Contracts
- **Navigation (app.js / index.html)**:
  - Bottom navigation tabs: Accueil, Dict, Feed, Annales, Protocoles, Réglages.
  - Home grid shortcuts: Synthèses, ITEMs, Révision, Quiz, Garde, Stats.
- **BrainFeed (brainfeed.js / index.html / style.css)**:
  - Container occupies 100dvh.
  - Close button top-left.
  - Horizontal swipe (Slide 1: Question + "Révéler la réponse ➔" button; Slide 2: Answer + mnemonics).
  - No Tinder swipe elements (no Favorite/Share/etc.).
  - Vertical snap alignment.
  - Transparent emoji + vibrant HSL gradient backgrounds.
- **Chapter Readability (app.js / style.css)**:
  - Section headers: regex to split fused headers like `A. Vieillissement` and `I. Définitions` if they are stuck together.
  - Word breaks: replace hyphenated line breaks for accented French (e.g. `pré- sence` -> `présence`).
  - Situations de départ: parse text in Ch1 & Ch2, format as clean list, prepend distinct turquoise number badges.
  - Lettrines (Drop Caps): wrap the first letter of the first paragraph in a `.lettrine` span or use CSS `:first-letter` style in `.manual-section p:first-of-type` or similar, styled in turquoise and giant.

## Code Layout
- `app.js` - Main client PWA Javascript.
- `brainfeed.js` - Feed Javascript.
- `index.html` - HTML layout.
- `style.css` - Styles.
- `verify-all-chapters.js` - Verification script.
- `audit_empty.js` - Empty section audit script.

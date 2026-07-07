# Implementation Plan: Navigation, BrainFeed, and Chapter Readability

This plan implements the follow-up user request using the detailed findings and code changes from Explorer 1, Explorer 2, and Explorer 3.

## Milestones

### Milestone 1: Implement & Verify All Requirements

#### Step 1: Implementation (Worker)
Spawn a Worker subagent to apply the following code changes:
1. **index.html**:
   - Navigation: Change bottom nav tab 2 label from `<span>Dict.</span>` to `<span>Dict</span>`.
   - Grid Shortcuts: Shorten homepage quick-access grid labels:
     - `Objectifs ITEMs` ➔ `ITEMs`
     - `Quiz d'Examen` ➔ `Quiz`
     - `Fiches de Garde` ➔ `Garde`
     - `Stats & Suivi` ➔ `Stats`
2. **brainfeed.js**:
   - Remove `swipeState` leftovers.
   - Standardize all reveal button labels to exactly `"Révéler la réponse ➔"`.
   - Convert `renderChiffreCle` and `renderCitation` functions to render 2-slide horizontal swipe layouts (Slide 1: Question, Slide 2: Answer).
   - Remove unused `.bf-side-btn` click/touchstart interactions.
3. **app.js**:
   - Add a state variable `lettrinePlaced` to `renderChapter`.
   - Expand French hyphenation support regexes to include French uppercase accented characters (`À-Ö`, `Ø-ß`) and ligatures (`œ`, `Œ`, `æ`, `Æ`).
   - Enhance OCR-fused section header regexes to support an optional period and spacing (e.g. `A.Vieillissement` ➔ `A. Vieillissement`).
   - Prevent `Situations de départ` headers from being filtered out.
   - Implement robust parsing for `Situations de départ` blocks, ensuring that `En lien avec` subheadings are treated as list headers and non-situation lines cleanly exit the block.
   - Inject the `has-lettrine` class to the first paragraph of every section.
4. **style.css**:
   - Layout: Enhance `.bf-header-enhanced` using CSS Grid to arrange the close button, stats, goals, and badge trays dynamically.
   - Scroll-locking: Prevent scroll propagation to background body by setting `overscroll-behavior-y: contain` on `.bf-feed` and `overscroll-behavior-x: contain` on `.bf-horiz-scroll`.
   - Visuals: Upgrade the static background gradients of card themes in the Feed to vibrant HSL equivalents.
   - Cleanup: Remove all unused Tinder swipe leftovers (e.g. 3D card flipping, `.bf-side-btn`, `.bf-swipe-feedback` classes).
   - Chapter Style: Append styles for `.situations-card`, `.situations-list`, `.sit-badge-turquoise`, and giant turquoise `.has-lettrine::first-letter` drop caps.

#### Step 2: Verification (Reviewer & Challenger)
1. **Reviewer**: Verify visual layouts, interactive flows, code correctness, and compliance with the requirements.
2. **Challenger**: Run automated checks and stress-test the application functionality (e.g. navigation routing, swipe snapping, lettrines).

#### Step 3: Forensic Audit
1. **Auditor**: Run `node audit_empty.js` and verify it reports 0 empty sections across all 20 chapters, check for any hardcoded or dummy code, and issue a clean integrity verdict.

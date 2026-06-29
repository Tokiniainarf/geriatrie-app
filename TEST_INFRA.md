# Test Infrastructure Guide - Geriatrie App

This document outlines the testing philosophy, runner architecture, and the comprehensive 4-Tier E2E test plan for the `geriatrie-app` PWA.

---

## 1. Testing Philosophy

The application relies on OCR-extracted data from PDF sources, which often contains layout shifted boundaries, duplicated tables of contents (TOC), and empty sections. 
Our testing philosophy is **non-intrusive end-to-end (E2E) validation**:
- **Read-Only Inspection**: Tests must inspect the state and output without modifying application data.
- **Node-Based VM Emulation**: We use Node.js's standard `vm` module to run browser-native code (`app.js` and `data.js`) in a lightweight sandboxed environment.
- **Zero Empty Sections**: The final rendered output must be completely clean of OCR residues and empty layout templates.

---

## 2. Test Runner Architecture

The test suite runs entirely inside Node.js, utilizing a VM sandbox that mocks the DOM environment.

```
+-------------------------------------------------------------+
|                       Node.js Process                       |
+-------------------------------------------------------------+
                               |
                               v
                       +---------------+
                       |  VM Context   |
                       +---------------+
                         /           \
                        /             \
                       v               v
                +-------------+  +-------------+
                |   data.js   |  |   app.js    |
                +-------------+  +-------------+
                       \               /
                        \             /
                         v           v
             +-----------------------------------+
             |           Mock DOM APIs           |
             |  - window      - localStorage     |
             |  - document    - requestAnimationFrame
             +-----------------------------------+
                               |
                               v
             +-----------------------------------+
             |       renderChapter() Output      |
             +-----------------------------------+
                               |
                               v
             +-----------------------------------+
             |      E2E Assertion Engine         |
             +-----------------------------------+
```

### Mock Interface Contracts
- **`localStorage`**: Mocks read/write methods to prevent PWA state persistence errors.
- **`document`**: Provides a lightweight DOM factory that generates stub elements for layout updates.
- **`requestAnimationFrame`**: Synchronously executes callbacks to test UI transition events.

---

## 3. Comprehensive 4-Tier Test Plan

This test plan defines 51 test cases targeting all 4 requirements:
- **R1**: PDF Chapter Boundary Alignment
- **R2**: TOC Filtering
- **R3**: Clean Empty Sections
- **R4**: Path Relativization in Audits

### Tier 1: Feature Coverage (21 Cases)
- **TC-01 (R1)**: Check `ch1` to `ch2` alignment. Page 42 (blank) and page 43 (chapter 2 cover) must shift to `ch2`.
- **TC-02 (R1)**: Check `ch2` to `ch3` alignment. Page 57 must shift to `ch3`.
- **TC-03 (R1)**: Check `ch4` to `ch5` alignment. Pages 84 and 85 must shift to `ch5`.
- **TC-04 (R1)**: Check `ch12` to `ch13` alignment. Pages 224-227 must shift to `ch13`.
- **TC-05 (R1)**: Check `ch15` to `ch16` alignment. Page 280 and 281 must shift to `ch16`.
- **TC-06 (R1)**: Fallback title matching for `ch18` -> `ch19`. Page 353 (Key-features problems) must shift to `ch19`.
- **TC-07 (R1)**: Fallback title matching for `ch19` -> `ch20`. Page 361 (Questions isolées) must shift to `ch20`.
- **TC-08 (R1)**: No-shift assertion for `ch3` (stnioP is on the last page).
- **TC-09 (R1)**: No-shift assertion for `ch16` (psychotropes and transfusion remain in `ch16`).
- **TC-10 (R1)**: No-shift assertion for `ch17` (no text content page follows stnioP).
- **TC-11 (R2)**: Filter section header (`SECTION_RE`) when lookahead finds sibling section header within 5 lines.
- **TC-12 (R2)**: Filter section header (`SECTION_RE`) when lookbehind finds sibling section header within 5 lines.
- **TC-13 (R2)**: Filter letter header (`LETTER_RE`) when lookahead finds sibling letter header within 5 lines.
- **TC-14 (R2)**: Filter letter header (`LETTER_RE`) when lookbehind finds sibling letter header within 5 lines.
- **TC-15 (R2)**: Protect structural headers present in the first 40 lines of chapter content (main TOC).
- **TC-16 (R2)**: Sibling header found but separated by a long text line (> 40 chars, ends in period) must NOT trigger TOC filter.
- **TC-17 (R3)**: Clean empty section blocks when body is whitespace-only (`\s*`).
- **TC-18 (R3)**: Clean empty section blocks when body has under 20 characters of plain text.
- **TC-19 (R3)**: Retain section blocks when body has 20 or more characters of plain text.
- **TC-20 (R4)**: `verify-all-chapters.js` executes successfully from any working directory using relative paths.
- **TC-21 (R4)**: `audit_empty.js` executes and reports exactly 0 empty sections across all 20 chapters.

### Tier 2: Boundary & Corner Cases (21 Cases)
- **TC-22 (R1)**: Single-page chapter boundary check. Returns `-1` (no crash).
- **TC-23 (R1)**: Chapter without `stnioP` and without next chapter title. Returns `-1` (no crash).
- **TC-24 (R1)**: Empty pages correctly shifted if they are after the boundary.
- **TC-25 (R1)**: Next chapter title keywords present inside blockquotes or remarks do not trigger false positive shifts.
- **TC-26 (R1)**: Transition matching is case-insensitive and handles unicode-normalized accents (e.g. `gériatrique` matches `geriatrique`).
- **TC-27 (R1)**: Multiple `stnioP` markers in a single chapter. The split point must be determined by the last `stnioP` in the second half of pages.
- **TC-28 (R2)**: Header present exactly at index 39 (zero-indexed) must be protected by the 40-line rule.
- **TC-29 (R2)**: Non-empty lines window logic skips blank lines and counts only lines with contents.
- **TC-30 (R2)**: Sibling header matching correctly handles different numbering indices (e.g., matching `I. Introduction` and `II. Body`).
- **TC-31 (R2)**: Lookahead does NOT pair different header types (e.g. `SECTION_RE` lookahead hitting `LETTER_RE` does not count as sibling).
- **TC-32 (R2)**: Prose line check edge cases: lines of exactly 40 chars, or containing no sentence-ending punctuation.
- **TC-33 (R2)**: Lookahead/lookbehind at the absolute limits of the document (very start/end of array) does not throw index out of bounds.
- **TC-34 (R3)**: Section body has exactly 19 characters of text. Assert section is deleted.
- **TC-35 (R3)**: Section body has exactly 20 characters of text. Assert section is kept.
- **TC-36 (R3)**: Section body contains nested empty tags (e.g. `<p><span></span></p>`). Plain text length is 0, assert section is deleted.
- **TC-37 (R3)**: Section header contains HTML tags (e.g. badges, spans). Assert regex preserves it when the section is kept.
- **TC-38 (R3)**: Section body contains HTML entities (e.g., `&nbsp;`). Assert length validation counts them properly.
- **TC-39 (R4)**: Audit scripts handle missing database files or bad JSON gracefully, exiting with error code 1.
- **TC-40 (R4)**: `verify-all-chapters.js` automatically processes extra chapters dynamically inserted in `APP_DATA.chapters`.
- **TC-41 (R4)**: Path relativization supports cross-platform paths (both backslash `\` and forward slash `/`).
- **TC-42 (R4)**: Sandbox context handles window event handlers and service worker stubs cleanly.

### Tier 3: Cross-Feature Combinations (4 Cases)
- **TC-43 (XF-1)**: Boundary shifting (R1) prepends pages to chapter `i+1`. Assert that the first 40 lines of these prepended pages are protected from TOC filtering (R2) in the receiver chapter.
- **TC-44 (XF-2)**: Misplaced pages shifted from `ch12` to `ch13` contain structural headings that are populated. Assert R3 keeps them, while removing any orphan outlines in other sections.
- **TC-45 (XF-3)**: Filtered inner TOC headings (R2) do not generate empty section bodies, preventing R3 from having to clean up orphan tags.
- **TC-46 (XF-4)**: Removing empty sections (R3) changes the total section count. Assert that the outline panel display (`ch-outline` visible if filled sections >= 3) uses the post-clean count.

### Tier 4: Real-World Scenarios (5 Cases)
- **TC-47 (RW-1)**: Chapter 13 ("Alitement") correctly displays "I. Généralités" and "A. Définition" at the start of its contents.
- **TC-48 (RW-2)**: Chapter 16 ("Prescrire...") completely hides the Transfusion sections (I. Généralités, II. Indications...) from both rendered text and outline panel since there is no body text.
- **TC-49 (RW-3)**: Outline panels (`ch-outline`) are visible for `ch1`, `ch3`, and `ch16`, but hidden for `ch2`, `ch17`, and `ch18`.
- **TC-50 (RW-4)**: Audit scripts `audit_empty.js` and `audit_deep.js` exit with code `0` and print zero empty sections when executed in the project workspace.
- **TC-51 (RW-5)**: Concept navigation correctly locates a target node, scrolls it into view, and highlights it using CSS classes.

---

## 4. Execution and Verification

To verify that the implementation meets all requirements:

```bash
# Run the empty section audit (must return 0 empty sections across all 20 chapters)
node audit_empty.js

# Run the deep HTML structure audit (must return "ALL 20 CHAPTERS PASS DEEP AUDIT")
node audit_deep.js

# Run the full chapters validation check (must return "Issues: 0")
node verify-all-chapters.js
```

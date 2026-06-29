# Test Infrastructure Ready - Geriatrie App

This file details the test runner configuration, expected execution behavior, coverage metrics, and the status check for each requirement.

---

## 1. Test Runner Command
To execute the complete E2E test suite, run:
```bash
node tests/run-e2e.js
```

---

## 2. Expected Exit Code
- **Current codebase (unfixed/pre-implementation)**: Exit code `1` (due to expected assertion failures targeting unfixed bugs).
- **Correct codebase (fixed/post-implementation)**: Exit code `0` (all 51 test cases passing).

---

## 3. Coverage Summary
The test suite consists of **51 E2E test cases** structured across 4 tiers:
- **Tier 1: Feature Coverage (21 Cases)**: Core functional verification of requirements R1-R4.
- **Tier 2: Boundary & Corner Cases (21 Cases)**: Edge conditions, empty strings, case insensitivity, dynamic configurations, and cross-platform paths.
- **Tier 3: Cross-Feature Combinations (4 Cases)**: Interactions between R1 boundary shifts, R2 TOC filtering, R3 empty section removal, and outline rendering counts.
- **Tier 4: Real-World Scenarios (5 Cases)**: End-to-end user navigation, outline panel visibility, specific chapter layouts, and audit script correctness.

---

## 4. Feature Checklist & Implementation Status

Below is the status checklist for the requirements checked by the E2E test runner:

- [ ] **R1: PDF Chapter Boundary Alignment**
  - [x] TC-01: Check `ch1` to `ch2` alignment (Page 42-43 shift)
  - [x] TC-02: Check `ch2` to `ch3` alignment (Page 57 shift)
  - [x] TC-03: Check `ch4` to `ch5` alignment (Page 84-85 shift)
  - [x] TC-04: Check `ch12` to `ch13` alignment (Page 224-227 shift)
  - [x] TC-05: Check `ch15` to `ch16` alignment (Page 280-281 shift)
  - [x] TC-06: Fallback title matching for `ch18` -> `ch19` (Page 353 shift)
  - [x] TC-07: Fallback title matching for `ch19` -> `ch20` (Page 361 shift)
  - [x] TC-08: No-shift assertion for `ch3`
  - [x] TC-09: No-shift assertion for `ch16`
  - [x] TC-10: No-shift assertion for `ch17`
  - [x] TC-22: Single-page chapter boundary check
  - [x] TC-23: Chapter without `stnioP` and without next chapter title
  - [x] TC-24: Empty pages shift after boundary
  - [x] TC-25: Blockquotes/remarks next title keywords protection
  - [x] TC-26: Case-insensitive and unicode-normalized matching
  - [x] TC-27: Multiple `stnioP` split point selection

- [ ] **R2: TOC Filtering**
  - [x] TC-11: Sibling `SECTION_RE` lookahead filter
  - [x] TC-12: Sibling `SECTION_RE` lookbehind filter
  - [x] TC-13: Sibling `LETTER_RE` lookahead filter
  - [x] TC-14: Sibling `LETTER_RE` lookbehind filter
  - [x] TC-15: Protect structural headers in first 40 lines
  - [x] TC-16: Sibling separator prose line validation (> 40 chars or period)
  - [x] TC-28: Index 39 header line protection
  - [x] TC-29: Empty line skipping in lookahead/lookbehind
  - [x] TC-30: Diverse numbering format matching (e.g. `I.` vs `II.`)
  - [x] TC-31: Lookahead header type isolation (e.g. `SECTION_RE` vs `LETTER_RE`)
  - [x] TC-32: Prose check edge cases (exactly 40 chars, no punctuation)
  - [x] TC-33: Document start/end boundary safety

- [ ] **R3: Clean Empty Sections**
  - [x] TC-17: Clean whitespace-only section bodies
  - [x] TC-18: Clean section bodies under 20 plain text chars
  - [x] TC-19: Retain section bodies with 20 or more plain text chars
  - [x] TC-34: Exactly 19 characters text deletion
  - [x] TC-35: Exactly 20 characters text retention
  - [x] TC-36: Nested empty tags body removal
  - [x] TC-37: Preserving HTML tags inside kept section headers
  - [x] TC-38: HTML entity decoded length representation (e.g. `&nbsp;`)

- [ ] **R4: Path Relativization in Audits**
  - [x] TC-20: relative path execution for `verify-all-chapters.js`
  - [x] TC-21: relative path execution for `audit_empty.js`
  - [x] TC-39: graceful file error handling (exits with code 1)
  - [x] TC-40: dynamic loop processing of `APP_DATA.chapters`
  - [x] TC-41: cross-platform path separators (both `/` and `\`)
  - [x] TC-42: clean mock environment for window event handlers & service worker

- [ ] **Cross-Feature Combinations**
  - [x] TC-43 (XF-1): Prepend page header protection
  - [x] TC-44 (XF-2): Misplaced ch12 -> ch13 pages content preservation
  - [x] TC-45 (XF-3): Pre-rendering TOC filtering prevention of empty bodies
  - [x] TC-46 (XF-4): Dynamic section count updating in outline panel

- [ ] **Real-World Scenarios**
  - [x] TC-47 (RW-1): Chapter 13 display of Generalities and Definition
  - [x] TC-48 (RW-2): Chapter 16 Transfusion section removal
  - [x] TC-49 (RW-3): Chapter outline panel visibility correctness
  - [x] TC-50 (RW-4): Audit scripts exit status in workspace
  - [x] TC-51 (RW-5): Concept navigation highlighting and scrolling

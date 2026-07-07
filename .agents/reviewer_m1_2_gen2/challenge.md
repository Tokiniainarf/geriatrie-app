# Adversarial Challenge Report

## Challenge Summary

**Overall risk assessment**: HIGH

While the manual audit scripts pass on the production data, stress-testing the parsing logic against edge-case inputs and executing the automated E2E test suite reveals that the parser makes brittle assumptions about document structure and length. This results in severe content drops and failed rendering for short or uniquely structured content blocks, as well as test framework failures.

---

## Challenges

### [High] Challenge 1: TOC Duplicate Filtering Bypass on Short Inputs
- **Assumption challenged**: All input chapter files are long enough that duplicates in the first 40 lines represent the main table of contents (TOC) and should be protected, while duplicates occurring later should be filtered.
- **Attack scenario**: A short chapter or custom testing block is passed to `renderChapter` that is less than 40 lines in total length.
- **Blast radius**: No TOC duplicate filtering occurs whatsoever on these files because the filter immediately returns `true` for all lines at indices `i < 40`. Sibling headers remain duplicate in the body text (causing TC-12, TC-13, TC-14, TC-16, TC-31, TC-33, TC-43 to fail).
- **Mitigation**: Adjust the line-based protection rule `i < 40` to scale dynamically based on the document size, or protect headers only if they are explicitly part of the initial preamble chunk (e.g. before the first section body starts).

### [High] Challenge 2: Section Header Discarding on Direct Entry (No Preamble Metadata)
- **Assumption challenged**: Every chapter has metadata lines (like `ITEM` numbers or title headings) that run before the first main section header, triggering `pastPreamble = true`.
- **Attack scenario**: A chapter starts directly with a section header (e.g. `I. Introduction`) without any preceding preamble lines. This happens when shifting pages from one chapter to the start of another.
- **Blast radius**: The first section header matches `SECTION_RE` but is skipped because `pastPreamble` is still `false`. The heading is lost from the document and the outline panel, starting the chapter directly at the section body or skipping it (causing TC-19, TC-35, TC-43, TC-47 to fail).
- **Mitigation**: Update the section matching block to set `pastPreamble = true` and process the heading immediately if it is a valid main section, rather than discarding it.

### [Medium] Challenge 3: Pre-Clean Outline Panel Inconsistency
- **Assumption challenged**: The list of section headers in the first 35 lines of a chapter represents the final sections of the chapter.
- **Attack scenario**: A section is defined near the top of the chapter but has an empty body, meaning it will be cleaned up and deleted during rendering.
- **Blast radius**: The outline panel still includes the deleted section in its links, and displays the panel even if the actual visible sections count is under 3 (causing TC-46 to fail).
- **Mitigation**: Aggregate the final rendered sections in a list during the rendering loop, and inject/render the outline panel HTML at the end, or use the cleaned section count.

### [Medium] Challenge 4: Flawed Mock Environments in Testing Framework
- **Assumption challenged**: The mock DOM and mock databases inside the E2E tests are robust enough to test the production scripts.
- **Attack scenario**: 
  1. The preprocessor is called with mock databases that don't populate pages for the target receiver chapter (e.g. `ch_dummy2` is missing in `dummyData.content`). The preprocessor exits early due to safety guards, failing to shift pages (causing TC-24, TC-26, TC-27 to fail).
  2. The concept highlighting function `navigateToConcept` is called. It highlights elements inside `chContent`. However, `chContent` is a detached mock element not appended to `documentMock.body`. The test queries `documentMock.body` for the highlight class, finding nothing (causing TC-51 to fail).
- **Blast radius**: Valid preprocessor and highlighting code fails E2E tests due to test environment mock omissions.
- **Mitigation**: Update E2E test files to:
  - Populate mock chapters with dummy empty page arrays (e.g. `ch_dummy2: [[100, "Dummy 2 page"]]`) so safety guards pass.
  - Append `chContent` to `documentMock.body` during E2E DOM mocking.

---

## Stress Test Results

- **Short raw input sibling headers duplicate filtering** -> Should filter out sibling duplicate headers -> Fails (protected by `i < 40` rule) -> **FAIL**
- **Chapter starting directly with section header** -> Should render first section header -> Fails (skipped by preamble check) -> **FAIL**
- **Boundary shifting empty pages backward check (TC-24)** -> Should shift blank pages -> Fails (skipped due to missing receiver content in mock database) -> **FAIL**
- **Concept highlighting inside E2E DOM mock** -> Should locate `.concept-hit` -> Fails (element is detached from body) -> **FAIL**

---

## Unchallenged Areas

- **Vibrant HSL CSS layouts and 9:16 scroll snapping**: Verified visually through static stylesheet inspects; scroll constraints and scrollbar suppression styles are correctly positioned on feed components.

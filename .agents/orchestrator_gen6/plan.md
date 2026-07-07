# Project Plan: Flashcard & BrainFeed Refactoring

This plan outlines the milestones, roles, and verification methods to fulfill the requirements of Follow-up — 2026-07-06T21:45:54Z.

## Milestones

### Milestone 1: Exploration & Codebase Analysis
- **Goal**: Understand current flashcards structure, distribution across files, and available tools/libraries for PDF processing.
- **Tasks**:
  - Scan all existing flashcard files (`mega-flashcards*.js`, `flashcards*.js`, etc.) to count the current number of cards and their formats.
  - Determine Python/Node environment capabilities (e.g., pdf2image, fitz, PIL, node-canvas) for PDF-to-image conversion.
  - Check the relationship between flashcards, brainfeed media assets (`visualMedias`), and the user interface.
- **Verification**: Exploration report containing findings.

### Milestone 2: PDF Parsing and Content Extraction Infrastructure
- **Goal**: Build an automated pipeline to extract clinical questions and answers from PDFs using LLM vision capabilities.
- **Tasks**:
  - Implement a script to convert PDF pages to images (targeting key pages in the geriatrics book and the 28 NotebookLM PDFs).
  - Implement a vision extraction pipeline that uses the LLM's vision API to analyze images and format clinical questions, answers, and tags.
- **Verification**: Successful test extraction of a few sample pages showing structured JSON output.

### Milestone 3: Mass Flashcard Generation & Integration
- **Goal**: Generate and integrate ~1000 clinical flashcards (50 per chapter for 20 chapters) without breaking existing structures.
- **Tasks**:
  - Run the extraction pipeline across all 20 chapters and all 28 NotebookLM PDFs.
  - Structure the generated flashcards and write them back to `mega-flashcards*.js` (and other files if applicable).
  - Ensure that existing media arrays (`visualMedias` in `brainfeed.js`) and UI layout are preserved.
- **Verification**: Verifying the total count of flashcards per chapter and checking that JS syntax is perfectly valid.

### Milestone 4: E2E Verification & Forensic Audit
- **Goal**: Enforce 100% test passing rate and zero regression.
- **Tasks**:
  - Run E2E test suite `node tests/run-e2e.js` and verify 51/51 tests pass.
  - Run chapter verification script `node verify-all-chapters.js`.
  - Perform forensic audit to ensure clinical authenticity and integrity.
- **Verification**: Clean exit codes and test reports from the test suites.

## Team Topology
- **Project Orchestrator (gen 6)**: Manage task dispatches, monitor progress, write plan and progress reports.
- **Explorer**: Inspect files and analyze PDF-to-image capabilities.
- **Worker**: Implement code generation, PDF conversions, and vision API integration.
- **Reviewer**: Verify code syntax and adherence to formats.
- **Challenger / Auditor**: Verify E2E stability and codebase integrity.

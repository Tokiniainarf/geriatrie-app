## 2026-06-28T23:25:28Z
You are teamwork_preview_worker.
Your working directory is: C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\teamwork_preview_worker_e2e_tests
Your mission is to design, write, execute and validate the E2E test suite for geriatrie-app based on requirements R1-R4.

Follow these instructions carefully:
1. DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task.
2. Read the drafted TEST_INFRA.md at C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\teamwork_preview_explorer_e2e_tests_gen2\TEST_INFRA.md.
3. Write the final C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\TEST_INFRA.md.
4. Create the C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\tests directory.
5. Implement the actual test suite in C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\tests\run-e2e.js containing all 51 test cases.
6. The test suite must run via `node tests/run-e2e.js`. It should load data.js and app.js into a VM context (with DOM mocks like document, window, localStorage) and perform detailed assertions for R1, R2, R3, R4.
7. Run the test suite on the current codebase:
   - Note that because the implementation track has not yet run, the tests targeting the unfixed bugs (R1, R2, R3, R4) are EXPECTED to fail.
   - The runner must catch these assertion failures and report them cleanly as FAILED rather than crashing the runner process (though the runner process should exit with code 1 if any tests fail, or you can allow it to report a summary first). Let's make sure the runner prints the report in a clear markdown table in stdout.
8. Create C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\TEST_READY.md as requested. The file must match the template in the system instructions (list test runner command, expected exit code, coverage summary, and feature checklist).
9. Write a handoff report in C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\teamwork_preview_worker_e2e_tests\handoff.md detailing the files created, the test execution results (including which of the 51 tests failed and passed on the current codebase), and build/test commands.

Be precise and complete. Report back when you are finished.

import os

for ch in ["ch13", "ch14", "ch15", "ch16"]:
    filepath = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch4\{}_text.txt".format(ch)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        print(f"\n=== {ch}_text.txt ===")
        print("Total characters:", len(content))
        print("First 500 characters:")
        # Replace non-ascii chars or print with repr to avoid console issues
        print(repr(content[:500]))
    else:
        print(f"{filepath} does not exist!")

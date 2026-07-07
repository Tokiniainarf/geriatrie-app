import os

root_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app"
for f in os.listdir(root_dir):
    if f.startswith("ocr_results") and f.endswith(".txt"):
        path = os.path.join(root_dir, f)
        print(f"\nFile: {f} ({os.path.getsize(path)} bytes)")
        with open(path, "r", encoding="utf-8", errors="ignore") as file:
            content = file.read()
        print("  First 300 chars:")
        print("  " + "\n  ".join(content.splitlines()[:10]))

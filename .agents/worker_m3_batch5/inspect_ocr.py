import os

workspace_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app"
for f_name in sorted(os.listdir(workspace_dir)):
    if f_name.startswith("ocr_results") and f_name.endswith(".txt"):
        path = os.path.join(workspace_dir, f_name)
        print(f"File: {f_name}, Size: {os.path.getsize(path)}")
        with open(path, "r", encoding="utf-8") as f:
            lines = [f.readline().strip() for _ in range(10)]
            print("First few lines:")
            for l in lines:
                if l:
                    print("  ", l)
            print("-" * 50)

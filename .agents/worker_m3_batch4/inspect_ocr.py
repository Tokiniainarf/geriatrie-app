import glob
import os

ocr_files = glob.glob(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\ocr_results*.txt")
for filepath in ocr_files:
    print(f"\n=== File: {os.path.basename(filepath)} ({os.path.getsize(filepath)} bytes) ===")
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        head = [f.readline().strip() for _ in range(5)]
    print("\n".join(head))

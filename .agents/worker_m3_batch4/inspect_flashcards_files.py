import glob
import os

files_to_check = glob.glob(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\flashcards*.js")

out_lines = []
for fp in files_to_check:
    out_lines.append(f"\n=== File: {os.path.basename(fp)} ===")
    with open(fp, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    out_lines.append(f"Length: {len(content)}")
    out_lines.append("First 1000 characters:")
    out_lines.append(content[:1000])

with open("flashcard_files_inspection.txt", "w", encoding="utf-8") as f_out:
    f_out.write("\n".join(out_lines))
print("Wrote inspection output to flashcard_files_inspection.txt")

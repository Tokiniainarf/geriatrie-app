import os

files_to_check = [
    r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\brainfeed.js",
    r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\revision-aids.js"
]

out_lines = []
for fp in files_to_check:
    out_lines.append(f"\n=== File: {fp} ===")
    if os.path.exists(fp):
        with open(fp, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        out_lines.append(f"Length: {len(content)}")
        out_lines.append("First 1000 characters:")
        out_lines.append(content[:1000])
    else:
        out_lines.append("File not found")

with open("special_files_inspection.txt", "w", encoding="utf-8") as f_out:
    f_out.write("\n".join(out_lines))
print("Wrote inspection output to special_files_inspection.txt")

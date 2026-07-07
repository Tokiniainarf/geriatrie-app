import os

base_dir = r"C:\Users\tokin\Desktop\GERIARTRIE"
out_lines = []
if os.path.exists(base_dir):
    out_lines.append(f"Tree for {base_dir}:")
    for root, dirs, files in os.walk(base_dir):
        out_lines.append(f"Directory: {root}")
        for d in dirs:
            out_lines.append(f"  [D] {d}")
        for f in files:
            out_lines.append(f"  [F] {f}")
else:
    out_lines.append(f"Directory not found: {base_dir}")

out_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch5\desktop_tree.txt"
with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(out_lines))
print(f"Dumped to {out_path}")

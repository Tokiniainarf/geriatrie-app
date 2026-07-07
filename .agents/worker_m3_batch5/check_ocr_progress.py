import os

output_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch5"
files = os.listdir(output_dir)
print("Files in directory:")
for f in sorted(files):
    if f.endswith("_ocr.txt"):
        path = os.path.join(output_dir, f)
        print(f"  {f}: {os.path.getsize(path)} bytes")

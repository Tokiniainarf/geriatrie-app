import os

out_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch3"
for f in sorted(os.listdir(out_dir)):
    if f.endswith(".png"):
        path = os.path.join(out_dir, f)
        print(f"  {f} - {os.path.getsize(path)} bytes")

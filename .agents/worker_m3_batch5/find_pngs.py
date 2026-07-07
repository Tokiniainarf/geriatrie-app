import os

workspace_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app"
print("PNGs in workspace:")
for root, dirs, files in os.walk(workspace_dir):
    depth = root[len(workspace_dir):].count(os.sep)
    if depth <= 2:
        pngs = [f for f in files if f.endswith(".png")]
        if pngs:
            print(f"  {root}: {len(pngs)} PNGs ({pngs[:5]}...)")

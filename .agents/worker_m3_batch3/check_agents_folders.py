import os

agents_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents"
if os.path.exists(agents_dir):
    for root, dirs, files in os.walk(agents_dir):
        # limit depth to 2
        depth = root[len(agents_dir):].count(os.sep)
        if depth > 2:
            continue
        for f in files:
            if f.endswith(".txt") or f.endswith(".json") or f.endswith(".md"):
                path = os.path.join(root, f)
                size = os.path.getsize(path)
                # print relative path
                rel = os.path.relpath(path, agents_dir)
                if "worker_m3" in rel or "worker_m2" in rel or "orchestrator" in rel:
                    print(f"  {rel} - {size} bytes")

import os

agents_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents"
for root, dirs, files in os.walk(agents_dir):
    for f in files:
        if "handoff" in f.lower() or "flashcard" in f.lower() or "result" in f.lower():
            path = os.path.join(root, f)
            print(f"{path}: {os.path.getsize(path)} bytes")

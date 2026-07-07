import os

agents_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents"
for folder in sorted(os.listdir(agents_dir)):
    if folder.startswith("worker_m3_batch"):
        path = os.path.join(agents_dir, folder)
        files = os.listdir(path)
        print(f"Folder: {folder}")
        for file in files:
            file_path = os.path.join(path, file)
            size = os.path.getsize(file_path) if os.path.isfile(file_path) else "dir"
            print(f"  {file}: {size}")

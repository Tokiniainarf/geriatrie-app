import os
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

desktop_dir = r"C:\Users\tokin\Desktop\GERIARTRIE"
if os.path.exists(desktop_dir):
    print("Files in", desktop_dir)
    for root, dirs, files in os.walk(desktop_dir):
        for f in files:
            path = os.path.join(root, f)
            print(f"  {os.path.relpath(path, desktop_dir)} - {os.path.getsize(path)} bytes")
else:
    print("Desktop GERIARTRIE directory does not exist.")

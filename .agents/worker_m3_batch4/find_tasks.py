import os
brain_dir = r"C:\Users\tokin\.gemini\antigravity\brain"
if os.path.exists(brain_dir):
    print("Contents of brain_dir:", os.listdir(brain_dir))
    # search recursively for .log
    for root, dirs, files in os.walk(brain_dir):
        for f in files:
            if f.endswith(".log"):
                print(os.path.join(root, f))
else:
    print("brain_dir does not exist")

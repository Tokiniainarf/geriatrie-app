import os

log_path = r"C:\Users\tokin\.gemini\antigravity\brain\3a09f3a9-9aee-4773-90f7-d815b1778492\.system_generated\tasks\task-98.log"
if os.path.exists(log_path):
    with open(log_path, "r", encoding="utf-8", errors="ignore") as f:
        print(f.read())
else:
    print("Log not found at:", log_path)

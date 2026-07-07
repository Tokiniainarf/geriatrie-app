import os

for b in ["worker_m3_batch1", "worker_m3_batch2", "worker_m3_batch4", "worker_m3_batch5"]:
    path = rf"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\{b}\flashcards.json"
    print(f"Batch {b}:")
    if os.path.exists(path):
        print(f"  Exists! Size: {os.path.getsize(path)} bytes")
    else:
        print("  Does not exist.")

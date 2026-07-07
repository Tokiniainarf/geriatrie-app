import os

path1 = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch1\pdf_Architecture_Geriatrique.txt"
path2 = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch2\EVC_Geriatric_Pain_Protocol_text.txt"

print("path1 content:")
if os.path.exists(path1):
    with open(path1, "r", encoding="utf-8", errors="ignore") as f:
        print(f.read())
else:
    print("Does not exist.")

print("\npath2 content:")
if os.path.exists(path2):
    with open(path2, "r", encoding="utf-8", errors="ignore") as f:
        print(f.read())
else:
    print("Does not exist.")

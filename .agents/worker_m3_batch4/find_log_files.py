import glob
import os

pattern = r"C:\Users\tokin\.gemini\antigravity\brain\3a09f3a9-9aee-4773-90f7-d815b1778492\**\*.log"
for f in glob.glob(pattern, recursive=True):
    print(f)

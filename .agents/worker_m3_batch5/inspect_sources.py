import os
import re

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
print("PDFs in directory:")
if os.path.exists(pdf_dir):
    print(os.listdir(pdf_dir))
else:
    print(f"Directory not found: {pdf_dir}")

data_js_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\data.js"
print("\nReading data.js:")
if os.path.exists(data_js_path):
    print(f"Size of data.js: {os.path.getsize(data_js_path)} bytes")
    # Read the beginning of data.js to see how it's structured
    with open(data_js_path, "r", encoding="utf-8") as f:
        head = f.read(2000)
        print("HEAD OF data.js:")
        print(head)
        
        # Check for chapter pattern
        f.seek(0)
        content = f.read()
        print("\nChapter keys/patterns found:")
        for ch in ["ch17", "ch18", "ch19", "ch20", "chapter 17", "chapter17"]:
            matches = [m.start() for m in re.finditer(ch, content, re.IGNORECASE)]
            print(f"  {ch}: {len(matches)} matches, positions: {matches[:5]}")
else:
    print(f"data.js not found at {data_js_path}")

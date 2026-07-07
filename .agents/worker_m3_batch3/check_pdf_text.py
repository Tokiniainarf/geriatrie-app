import fitz  # PyMuPDF
import os

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
pdf_files = [
    "Geriatric_Neurocognitive_Blueprint.pdf",
    "2024_BPSD_Clinical_Management.pdf",
    "Geriatric_Mood_Disorder_Algorithm.pdf",
    "Geriatric_Delirium_Management.pdf",
    "Blueprint_des_Chutes_Gériatriques.pdf"
]

for filename in pdf_files:
    path = os.path.join(pdf_dir, filename)
    if not os.path.exists(path):
        print(f"File {filename} does not exist!")
        continue
    try:
        doc = fitz.open(path)
        print(f"\nDocument: {filename} ({len(doc)} pages)")
        # Check text in the first few pages
        for i in range(min(5, len(doc))):
            page = doc[i]
            text = page.get_text()
            print(f"  Page {i+1}: text length = {len(text.strip())}")
            if len(text.strip()) > 0:
                print(f"    Sample: {text.strip()[:100]}...")
    except Exception as e:
        print(f"Error opening/reading {filename}: {e}")

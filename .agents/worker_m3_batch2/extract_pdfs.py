import os
import sys

pdf_names = [
    "EVC_Sensory_Deficit_Mastery.pdf",
    "Geriatric_Sensory_Management.pdf",
    "Osteoporosis_Clinical_Blueprint.pdf",
    "Geriatric_Osteoarthritis_Masterclass.pdf",
    "EVC_Geriatric_Pain_Protocol.pdf"
]

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
out_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch2"

try:
    import fitz # PyMuPDF
    print("PyMuPDF is installed.")
except ImportError:
    print("PyMuPDF (fitz) is not installed. Trying to install...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pymupdf"])
    import fitz
    print("PyMuPDF installed successfully.")

for pdf_name in pdf_names:
    pdf_path = os.path.join(pdf_dir, pdf_name)
    if not os.path.exists(pdf_path):
        print(f"Error: {pdf_path} does not exist.")
        continue
    
    print(f"Extracting {pdf_name}...")
    doc = fitz.open(pdf_path)
    text_content = []
    for i, page in enumerate(doc):
        text_content.append(f"=== PAGE {i+1} ===")
        text_content.append(page.get_text())
        
    out_name = pdf_name.replace(".pdf", "_text.txt")
    out_path = os.path.join(out_dir, out_name)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(text_content))
    print(f"Extracted {pdf_name} to {out_name} ({len(doc)} pages)")

import fitz
import os
import sys
from rapidocr_onnxruntime import RapidOCR

# Configure stdout
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
output_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch5"
engine = RapidOCR()

pdfs = [
    "Clinical_Palliative_Ethics.pdf",
    "The_Clinical_Dashboard.pdf",
    "Stratégie_BPCO_EVC.pdf",
    "Precision_Antibiotic_Dashboard.pdf",
    "Geriatric_Complexity_Blueprint.pdf"
]

for pdf in pdfs:
    pdf_path = os.path.join(pdf_dir, pdf)
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf}")
        continue
    
    doc = fitz.open(pdf_path)
    page = doc[0]
    pix = page.get_pixmap(dpi=150)
    png_path = os.path.join(output_dir, f"page1_{pdf.replace('.pdf', '')}.png")
    pix.save(png_path)
    doc.close()
    
    result, elapse = engine(png_path)
    print(f"=== PDF: {pdf} (Page 1) ===")
    if result:
        for item in result:
            print("  ", item[1].encode('ascii', errors='replace').decode('ascii'))
    else:
        print("  No text found")
    print("-" * 50)

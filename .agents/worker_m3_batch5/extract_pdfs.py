import fitz # PyMuPDF
import os

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
output_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch5"

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
        # Let's check with slightly different names or search for it
        print(f"File not found: {pdf_path}")
        continue
    
    print(f"Extracting {pdf}...")
    doc = fitz.open(pdf_path)
    text_parts = []
    for i, page in enumerate(doc):
        text = page.get_text()
        text_parts.append(f"--- Page {i+1} ---\n{text}")
    
    full_text = "\n\n".join(text_parts)
    out_name = pdf.replace(".pdf", "_text.txt")
    out_path = os.path.join(output_dir, out_name)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(full_text)
    print(f"Dumped to {out_path} ({len(full_text)} chars)")

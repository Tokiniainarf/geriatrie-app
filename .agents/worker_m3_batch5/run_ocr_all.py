import fitz
import os
import sys
from rapidocr_onnxruntime import RapidOCR

# Configure stdout/stderr
try:
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')
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
    
    print(f"Processing PDF: {pdf}")
    doc = fitz.open(pdf_path)
    ocr_lines = []
    
    for i, page in enumerate(doc):
        # Render page
        pix = page.get_pixmap(dpi=150)
        temp_png = os.path.join(output_dir, f"temp_{pdf.replace('.pdf', '')}_p{i+1}.png")
        pix.save(temp_png)
        
        # OCR
        result, elapse = engine(temp_png)
        
        ocr_lines.append(f"=== Page {i+1} ===")
        if result:
            for item in result:
                txt = item[1]
                ocr_lines.append(txt)
        else:
            ocr_lines.append("[No text detected]")
        ocr_lines.append("")
        
        # Clean up temp file
        try:
            os.remove(temp_png)
        except Exception:
            pass
            
    doc.close()
    
    out_txt_name = pdf.replace(".pdf", "_ocr.txt")
    out_txt_path = os.path.join(output_dir, out_txt_name)
    with open(out_txt_path, "w", encoding="utf-8") as f:
        f.write("\n".join(ocr_lines))
    print(f"Finished {pdf} -> {out_txt_path} ({len(ocr_lines)} lines)")

print("OCR for all PDFs complete!")

import os
import fitz
from rapidocr_onnxruntime import RapidOCR

pdf_names = [
    "EVC_Sensory_Deficit_Mastery.pdf",
    "Geriatric_Sensory_Management.pdf",
    "Osteoporosis_Clinical_Blueprint.pdf",
    "Geriatric_Osteoarthritis_Masterclass.pdf",
    "EVC_Geriatric_Pain_Protocol.pdf"
]

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
out_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch2"

engine = RapidOCR()

for pdf_name in pdf_names:
    pdf_path = os.path.join(pdf_dir, pdf_name)
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        continue
    
    print(f"Starting OCR on {pdf_name}...")
    doc = fitz.open(pdf_path)
    text_content = []
    
    for page_num in range(len(doc)):
        print(f"  Page {page_num + 1}/{len(doc)}")
        page = doc[page_num]
        pix = page.get_pixmap(dpi=150)
        img_bytes = pix.tobytes("png")
        
        result, elapse = engine(img_bytes)
        text_content.append(f"=== PAGE {page_num + 1} ===")
        if result:
            for line in result:
                # line format: [coordinates, text, confidence]
                text_content.append(line[1])
        else:
            text_content.append("[No text found via OCR]")
            
    out_name = pdf_name.replace(".pdf", "_ocr.txt")
    out_path = os.path.join(out_dir, out_name)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(text_content))
    print(f"Finished {pdf_name} -> {out_name}\n")
    doc.close()

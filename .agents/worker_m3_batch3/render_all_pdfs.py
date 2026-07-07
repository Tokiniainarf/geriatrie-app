import fitz  # PyMuPDF
import os
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
pdf_files = [
    "Geriatric_Neurocognitive_Blueprint.pdf",
    "2024_BPSD_Clinical_Management.pdf",
    "Geriatric_Mood_Disorder_Algorithm.pdf",
    "Geriatric_Delirium_Management.pdf",
    "Blueprint_des_Chutes_Gériatriques.pdf"
]
out_dir = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch3"

for filename in pdf_files:
    path = os.path.join(pdf_dir, filename)
    if not os.path.exists(path):
        print(f"Error: {filename} not found.")
        continue
    
    try:
        doc = fitz.open(path)
        print(f"Opened {filename} with {len(doc)} pages.")
        
        # Render page 1 and 2
        for p_idx in [0, 1]:
            if p_idx < len(doc):
                page = doc[p_idx]
                pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # 2x zoom for high quality
                name_clean = filename.replace(".pdf", "")
                out_path = os.path.join(out_dir, f"{name_clean}_p{p_idx+1}.png")
                pix.save(out_path)
                print(f"  Rendered page {p_idx+1} to {out_path}")
        doc.close()
    except Exception as e:
        print(f"Error rendering {filename}: {e}")

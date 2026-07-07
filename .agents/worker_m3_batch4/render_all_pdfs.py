import fitz
import os

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
output_root = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch4\rendered_pdf_pages"
os.makedirs(output_root, exist_ok=True)

files = [
    "L_Urgence_du_Syndrome_d_Immobilisation.pdf",
    "Geriatric_Nutrition_Protocol.pdf",
    "Clinical_Hydration_Blueprint.pdf",
    "Geriatric_Urinary_Clinical_Dashboard.pdf",
    "Safe_Geriatric_Prescribing.pdf",
    "Safe_Geriatric_Prescribing (1).pdf"
]

for filename in files:
    filepath = os.path.join(pdf_dir, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename}: not found")
        continue
    
    doc = fitz.open(filepath)
    pdf_name = os.path.splitext(filename)[0].replace(" ", "_").replace("(", "").replace(")", "")
    pdf_out_dir = os.path.join(output_root, pdf_name)
    os.makedirs(pdf_out_dir, exist_ok=True)
    
    print(f"Rendering {filename} ({len(doc)} pages) to {pdf_out_dir}...")
    for page_num in range(len(doc)):
        page = doc[page_num]
        # PyMuPDF default DPI is 72. Render at 150 DPI for a good balance of size and quality
        zoom = 150.0 / 72.0
        matrix = fitz.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=matrix)
        out_filename = f"page_{page_num + 1}.png"
        out_path = os.path.join(pdf_out_dir, out_filename)
        pix.save(out_path)
    
    doc.close()
print("All pages rendered successfully.")

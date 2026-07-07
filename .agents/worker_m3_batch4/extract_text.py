import fitz
import os

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
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
    doc = fitz.open(filepath)
    print(f"\n--- {filename} (pages: {len(doc)}) ---")
    page_text = ""
    # Check first 3 pages
    for i in range(min(3, len(doc))):
        text = doc[i].get_text()
        print(f"Page {i+1} text length: {len(text)}")
        page_text += text
    print("Preview of page 1 text:")
    # Print preview avoiding console encoding errors by using repr or utf-8 encoding/errors='replace'
    print(repr(page_text[:300]))

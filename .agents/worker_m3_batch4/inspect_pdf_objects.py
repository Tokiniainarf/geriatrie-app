import fitz
import os

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
files = [
    "L_Urgence_du_Syndrome_d_Immobilisation.pdf",
    "Geriatric_Nutrition_Protocol.pdf",
    "Clinical_Hydration_Blueprint.pdf",
    "Geriatric_Urinary_Clinical_Dashboard.pdf",
    "Safe_Geriatric_Prescribing.pdf"
]

for filename in files:
    filepath = os.path.join(pdf_dir, filename)
    doc = fitz.open(filepath)
    print(f"\n=== {filename} ===")
    print("Number of pages:", len(doc))
    for i in range(min(2, len(doc))):
        page = doc[i]
        images = page.get_images()
        text = page.get_text()
        rect = page.rect
        print(f"Page {i+1} rect: {rect}, images: {len(images)}, text length: {len(text)}")

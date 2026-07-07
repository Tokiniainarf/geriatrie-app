import sys
import os

try:
    import fitz # PyMuPDF
    print("PyMuPDF (fitz) is installed!")
except ImportError:
    print("PyMuPDF (fitz) is NOT installed. Installing it or using another tool.")

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
    if os.path.exists(filepath):
        print(f"File found: {filename} ({os.path.getsize(filepath)} bytes)")
    else:
        print(f"File NOT found: {filepath}")

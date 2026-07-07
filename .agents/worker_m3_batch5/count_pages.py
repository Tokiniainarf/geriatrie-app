import fitz
import os

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
for pdf in os.listdir(pdf_dir):
    if pdf.endswith(".pdf"):
        pdf_path = os.path.join(pdf_dir, pdf)
        try:
            doc = fitz.open(pdf_path)
            print(f"PDF: {pdf}, pages: {len(doc)}")
            doc.close()
        except Exception as e:
            print(f"Error opening {pdf}: {e}")

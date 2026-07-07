import fitz
import os

pdf_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
for pdf in os.listdir(pdf_dir):
    if pdf.endswith(".pdf"):
        pdf_path = os.path.join(pdf_dir, pdf)
        doc = fitz.open(pdf_path)
        has_text = False
        text_len = 0
        for page in doc:
            t = page.get_text()
            if t.strip():
                has_text = True
                text_len += len(t)
        doc.close()
        print(f"PDF: {pdf}, Has Text: {has_text}, Total Text Length: {text_len}")

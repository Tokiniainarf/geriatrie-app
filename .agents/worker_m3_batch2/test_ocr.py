import fitz
from rapidocr_onnxruntime import RapidOCR
import os

pdf_path = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM\EVC_Sensory_Deficit_Mastery.pdf"
doc = fitz.open(pdf_path)
page = doc[0] # first page
pix = page.get_pixmap(dpi=150)
img_bytes = pix.tobytes("png")

engine = RapidOCR()
result, elapse = engine(img_bytes)
print("OCR result on page 1:")
if result:
    for line in result:
        print(line)
else:
    print("No text found.")
doc.close()

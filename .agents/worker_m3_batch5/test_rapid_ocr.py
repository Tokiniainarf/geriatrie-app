import fitz
import os
import sys

try:
    from rapidocr_onnxruntime import RapidOCR
    print("RapidOCR is importable!")
except Exception as e:
    print("Error importing RapidOCR:", e)
    sys.exit(1)

pdf_path = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM\Clinical_Palliative_Ethics.pdf"
if not os.path.exists(pdf_path):
    print("PDF not found:", pdf_path)
    sys.exit(1)

# Render page 1 to PNG
doc = fitz.open(pdf_path)
page = doc[0]
pix = page.get_pixmap(dpi=150)
png_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch5\p1_test.png"
pix.save(png_path)
doc.close()
print("Rendered page 1 to", png_path)

# Run OCR
try:
    engine = RapidOCR()
    result, elapse = engine(png_path)
    print("OCR Result:")
    if result:
        for item in result:
            print("  ", item[1]) # Text is typically at index 1
    else:
        print("  No text found")
except Exception as e:
    print("Error running RapidOCR:", e)

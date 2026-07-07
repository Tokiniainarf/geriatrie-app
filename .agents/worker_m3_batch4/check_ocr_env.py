import sys

try:
    import pytesseract
    print("pytesseract is installed")
except ImportError:
    print("pytesseract is NOT installed")

try:
    import easyocr
    print("easyocr is installed")
except ImportError:
    print("easyocr is NOT installed")

try:
    import fitz
    doc = fitz.open()
    # Check if fitz has OCR
    print("fitz.libtesseract_version:", getattr(fitz, "libtesseract_version", None))
except Exception as e:
    print("fitz check error:", e)

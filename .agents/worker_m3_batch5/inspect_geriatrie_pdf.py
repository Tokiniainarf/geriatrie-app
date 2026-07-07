import fitz
import os
import sys

# Configure stdout
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

pdf_path = r"C:\Users\tokin\Desktop\GERIARTRIE\Gériatrie 5e éd❤️.pdf"
if os.path.exists(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        print("PDF exists! (Filename printed ascii-safely): Gériatrie 5e éd...")
        print(f"Pages: {len(doc)}")
        
        # Test text extraction of first few pages
        text_lens = []
        for i in range(min(5, len(doc))):
            t = doc[i].get_text()
            text_lens.append((i+1, len(t.strip())))
        print("Text lengths on first 5 pages:", text_lens)
        doc.close()
    except Exception as e:
        print("Error opening PDF:", e)
else:
    print("PDF not found")

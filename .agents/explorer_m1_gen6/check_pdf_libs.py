import sys
import json

libs = ['fitz', 'pdf2image', 'pdfplumber', 'pypdf', 'pdfminer', 'PIL']
results = {}

for lib in libs:
    try:
        __import__(lib)
        results[lib] = True
    except ImportError:
        results[lib] = False

print(json.dumps({
    "python_version": sys.version,
    "installed": results
}, indent=2))

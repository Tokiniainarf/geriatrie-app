#!/usr/bin/env python3
"""
pdf_to_images.py

Renders a specific page of a PDF file to a high-resolution PNG image
using PyMuPDF (fitz).
"""

import sys
import os
import argparse
import fitz  # PyMuPDF

def render_pdf_page(pdf_path, page_num, output_path, dpi=200):
    """
    Renders a specific page of a PDF file to a PNG image.
    
    :param pdf_path: Path to the input PDF file
    :param page_num: 1-based page number to render
    :param output_path: Path to save the output PNG image
    :param dpi: Resolution in dots per inch (default: 200)
    """
    if not os.path.exists(pdf_path):
        print(f"Error: Input PDF file not found: {pdf_path}", file=sys.stderr)
        return False
        
    try:
        # Open the PDF document
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f"Error: Failed to open PDF document {pdf_path}: {e}", file=sys.stderr)
        return False

    num_pages = len(doc)
    
    # Validate page number (1-based index)
    if page_num < 1 or page_num > num_pages:
        print(f"Error: Invalid page number {page_num}. Document has {num_pages} pages (1-indexed).", file=sys.stderr)
        doc.close()
        return False

    try:
        # Get the page (fitz is 0-indexed)
        page = doc[page_num - 1]
        
        # Calculate matrix zoom factor for the requested DPI
        # PyMuPDF default DPI is 72.
        zoom = dpi / 72.0
        matrix = fitz.Matrix(zoom, zoom)
        
        # Render page to a pixmap
        pix = page.get_pixmap(matrix=matrix)
        
        # Ensure output directory exists
        output_dir = os.path.dirname(os.path.abspath(output_path))
        if output_dir and not os.path.exists(output_dir):
            os.makedirs(output_dir, exist_ok=True)
            
        # Save the pixmap as a PNG image
        pix.save(output_path)
        print(f"Successfully rendered page {page_num} of '{pdf_path}' to '{output_path}' at {dpi} DPI.")
        doc.close()
        return True
    except Exception as e:
        print(f"Error: Failed to render page {page_num}: {e}", file=sys.stderr)
        if 'doc' in locals() and doc:
            doc.close()
        return False

def main():
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except AttributeError:
        pass
        
    parser = argparse.ArgumentParser(
        description="Render a PDF page to a high-resolution PNG image using PyMuPDF (fitz)."
    )
    parser.add_argument(
        "-i", "--input", required=True, help="Path to the input PDF file"
    )
    parser.add_argument(
        "-p", "--page", type=int, required=True, help="1-based page number to render"
    )
    parser.add_argument(
        "-o", "--output", required=True, help="Path to save the rendered PNG image"
    )
    parser.add_argument(
        "-d", "--dpi", type=int, default=200, help="DPI resolution for the rendered image (default: 200)"
    )

    args = parser.parse_args()
    
    success = render_pdf_page(
        pdf_path=args.input,
        page_num=args.page,
        output_path=args.output,
        dpi=args.dpi
    )
    
    if not success:
        sys.exit(1)

if __name__ == "__main__":
    main()

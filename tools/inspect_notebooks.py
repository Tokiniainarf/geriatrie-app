#!/usr/bin/env python3
"""
inspect_notebooks.py

Inspects PDF files in C:\\Users\\tokin\\Desktop\\GERIARTRIE\\NOTEBOOK LM,
counts pages, extracts basic metadata (title, page count), and saves
the list as JSON.
"""

import os
import json
import sys
import fitz  # PyMuPDF

def inspect_pdfs(input_dir, output_json_path):
    """
    Scans input_dir for PDFs, extracts page count and metadata, and saves to output_json_path.
    """
    if not os.path.exists(input_dir):
        print(f"Error: Input directory not found: {input_dir}", file=sys.stderr)
        return False
        
    pdf_files = [f for f in os.listdir(input_dir) if f.lower().endswith('.pdf')]
    print(f"Found {len(pdf_files)} PDF files in '{input_dir}'")
    
    metadata_list = []
    total_pages = 0
    
    for filename in sorted(pdf_files):
        filepath = os.path.join(input_dir, filename)
        try:
            doc = fitz.open(filepath)
            page_count = len(doc)
            total_pages += page_count
            
            # Extract document metadata
            doc_metadata = doc.metadata
            title = doc_metadata.get('title', '')
            author = doc_metadata.get('author', '')
            
            item = {
                "filename": filename,
                "filepath": os.path.abspath(filepath),
                "page_count": page_count,
                "title": title if title else filename,
                "author": author,
                "metadata": doc_metadata
            }
            
            metadata_list.append(item)
            print(f"Processed: {filename} - {page_count} pages - Title: '{title}'")
            doc.close()
        except Exception as e:
            print(f"Error processing {filename}: {e}", file=sys.stderr)
            
    # Ensure output directory exists
    output_dir = os.path.dirname(os.path.abspath(output_json_path))
    os.makedirs(output_dir, exist_ok=True)
    
    # Save as JSON
    try:
        with open(output_json_path, 'w', encoding='utf-8') as f:
            json.dump(metadata_list, f, indent=2, ensure_ascii=False)
        print(f"\nSaved metadata for {len(metadata_list)} files to '{output_json_path}'")
        print(f"Total pages across all files: {total_pages}")
        return True
    except Exception as e:
        print(f"Error saving JSON file: {e}", file=sys.stderr)
        return False

def main():
    input_dir = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
    output_json_path = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m2_gen6\notebooks_metadata.json"
    
    success = inspect_pdfs(input_dir, output_json_path)
    if not success:
        sys.exit(1)

if __name__ == "__main__":
    main()

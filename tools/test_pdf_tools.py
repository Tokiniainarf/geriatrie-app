"""
test_pdf_tools.py

Unit and integration tests for tools/pdf_to_images.py and tools/inspect_notebooks.py.
"""

import os
import tempfile
import json
import pytest
from pdf_to_images import render_pdf_page
from inspect_notebooks import inspect_pdfs

# Path to a small test PDF from the real environment
TEST_PDF_PATH = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM\2024_BPSD_Clinical_Management.pdf"
TEST_NOTEBOOKS_DIR = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"

def test_render_pdf_page_nonexistent_file():
    """Verify that render_pdf_page returns False for a nonexistent input file."""
    with tempfile.TemporaryDirectory() as tmpdir:
        out_png = os.path.join(tmpdir, "output.png")
        success = render_pdf_page("nonexistent_file.pdf", 1, out_png)
        assert success is False
        assert not os.path.exists(out_png)

def test_render_pdf_page_invalid_page():
    """Verify that render_pdf_page returns False for an out-of-bounds page number."""
    with tempfile.TemporaryDirectory() as tmpdir:
        out_png = os.path.join(tmpdir, "output.png")
        # 2024_BPSD_Clinical_Management.pdf has 12 pages. Page 0 or 13 should fail.
        success_low = render_pdf_page(TEST_PDF_PATH, 0, out_png)
        success_high = render_pdf_page(TEST_PDF_PATH, 13, out_png)
        
        assert success_low is False
        assert success_high is False
        assert not os.path.exists(out_png)

def test_render_pdf_page_success():
    """Verify that render_pdf_page renders page successfully and creates the output file."""
    with tempfile.TemporaryDirectory() as tmpdir:
        out_png = os.path.join(tmpdir, "output_page1.png")
        success = render_pdf_page(TEST_PDF_PATH, 1, out_png, dpi=100)
        
        assert success is True
        assert os.path.exists(out_png)
        assert os.path.getsize(out_png) > 0

def test_inspect_pdfs_nonexistent_directory():
    """Verify that inspect_pdfs returns False for a nonexistent directory."""
    with tempfile.TemporaryDirectory() as tmpdir:
        out_json = os.path.join(tmpdir, "metadata.json")
        success = inspect_pdfs("nonexistent_directory_xyz", out_json)
        assert success is False
        assert not os.path.exists(out_json)

def test_inspect_pdfs_success():
    """Verify that inspect_pdfs successfully scans directory and writes valid JSON metadata."""
    with tempfile.TemporaryDirectory() as tmpdir:
        out_json = os.path.join(tmpdir, "metadata.json")
        success = inspect_pdfs(TEST_NOTEBOOKS_DIR, out_json)
        
        assert success is True
        assert os.path.exists(out_json)
        
        # Verify JSON content
        with open(out_json, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        assert isinstance(data, list)
        assert len(data) == 28
        
        # Verify first item matches expectations
        first_item = data[0]
        assert "filename" in first_item
        assert "filepath" in first_item
        assert "page_count" in first_item
        assert "title" in first_item
        assert "metadata" in first_item
        
        assert first_item["page_count"] > 0

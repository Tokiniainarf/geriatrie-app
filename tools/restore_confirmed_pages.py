"""Restore only PDF pages that are demonstrably absent from APP_DATA.

The current application content is treated as immutable. This script inserts the
confirmed missing pages and synchronizes only the data.js section of
data-bundle.js. It never rewrites an existing page.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from pypdf import PdfReader


CONFIRMED_PAGES = {
    154: "ch9",
    178: "ch10",
    208: "ch12",
    311: "ch16",
    312: "ch16",
    313: "ch16",
    314: "ch16",
    315: "ch16",
    316: "ch16",
    317: "ch17",
    318: "ch17",
    331: "ch18",
}


def load_app_data(path: Path) -> dict:
    raw = path.read_text(encoding="utf-8").strip()
    prefix = "const APP_DATA = "
    if not raw.startswith(prefix) or not raw.endswith(";"):
        raise ValueError(f"Unexpected APP_DATA wrapper in {path}")
    return json.loads(raw[len(prefix) : -1])


def serialize_app_data(data: dict) -> str:
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    return f"const APP_DATA = {payload};\n"


def clean_extracted_page(text: str, physical_page: int) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    # pypdf sometimes emits a column-break hyphen on its own line. Convert it
    # to the same word-\ncontinuation shape already used by data.js.
    text = re.sub(r"(?<=\w)\n\s*-\s*\n(?=\w)", "-\n", text)
    lines = text.splitlines()

    # The printed page number is physical page - 26 throughout the chapter
    # body. Remove only its first occurrence near the page header.
    printed_page = str(physical_page - 26)
    for index, line in enumerate(lines[:10]):
        if line.strip() == printed_page:
            del lines[index]
            break

    footer_patterns = (
        re.compile(r"^©\s*2021,\s*Elsevier Masson SAS", re.I),
        re.compile(r"^Tous droits réservés$", re.I),
    )
    cleaned = []
    for line in lines:
        stripped = line.strip()
        if any(pattern.search(stripped) for pattern in footer_patterns):
            continue
        cleaned.append(line.rstrip())

    return "\n".join(cleaned).strip()


def sync_bundle(bundle_path: Path, data_source: str) -> None:
    bundle = bundle_path.read_text(encoding="utf-8")
    start_marker = "/* --- data.js --- */"
    end_marker = "/* --- figures.js --- */"
    start = bundle.find(start_marker)
    end = bundle.find(end_marker)
    if start < 0 or end < 0 or end <= start:
        raise ValueError("Could not locate data.js section in data-bundle.js")
    section_start = start + len(start_marker)
    replacement = f"\n{data_source.rstrip()}\n\n"
    bundle_path.write_text(
        bundle[:section_start] + replacement + bundle[end:], encoding="utf-8"
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", type=Path, help="Path to the supplied manual PDF")
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--write", action="store_true", help="Write data.js and data-bundle.js")
    args = parser.parse_args()

    data_path = args.root / "data.js"
    bundle_path = args.root / "data-bundle.js"
    data = load_app_data(data_path)
    present = {
        int(page)
        for pages in data["content"].values()
        for page, _text in pages
    }

    already_present = sorted(set(CONFIRMED_PAGES) & present)
    if already_present:
        raise ValueError(f"Refusing to overwrite existing pages: {already_present}")

    reader = PdfReader(str(args.pdf))
    restored = []
    for physical_page, chapter_id in CONFIRMED_PAGES.items():
        extracted = reader.pages[physical_page - 1].extract_text() or ""
        cleaned = clean_extracted_page(extracted, physical_page)
        if len(cleaned) < 200:
            raise ValueError(
                f"Page {physical_page} extraction is unexpectedly short ({len(cleaned)} chars)"
            )
        data["content"][chapter_id].append([physical_page, cleaned])
        data["content"][chapter_id].sort(key=lambda record: int(record[0]))
        restored.append((physical_page, chapter_id, len(cleaned)))

    output = serialize_app_data(data)
    for page, chapter, size in restored:
        print(f"page {page} -> {chapter}: {size} chars")

    if args.write:
        data_path.write_text(output, encoding="utf-8")
        sync_bundle(bundle_path, output)
        print("data.js and data-bundle.js synchronized")
    else:
        print("dry run only; pass --write to update files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

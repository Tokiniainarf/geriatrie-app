"""Read-only completeness and integrity audit for the static Geriatrie PWA."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

from pypdf import PdfReader


def load_app_data(path: Path) -> tuple[dict, str]:
    raw = path.read_text(encoding="utf-8").strip()
    prefix = "const APP_DATA = "
    if not raw.startswith(prefix) or not raw.endswith(";"):
        raise ValueError(f"Unexpected APP_DATA wrapper in {path}")
    return json.loads(raw[len(prefix) : -1]), raw + "\n"


def normalized(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip().casefold()


def object_keys(source: str, const_name: str) -> set[str]:
    start = re.search(rf"(?:const|let|var)\s+{re.escape(const_name)}\s*=\s*\{{", source)
    if not start:
        return set()
    body_start = start.end() - 1
    depth = 0
    quote = None
    escaped = False
    body_end = None
    for index in range(body_start, len(source)):
        char = source[index]
        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = None
            continue
        if char in ("'", '"', "`"):
            quote = char
        elif char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0:
                body_end = index
                break
    if body_end is None:
        raise ValueError(f"Unterminated object for {const_name}")
    body = source[body_start : body_end + 1]
    return set(re.findall(r'["\'](\d+\.\d+)["\']\s*:', body))


def bundle_data_section(bundle: str) -> str:
    start_marker = "/* --- data.js --- */"
    end_marker = "/* --- figures.js --- */"
    start = bundle.index(start_marker) + len(start_marker)
    end = bundle.index(end_marker)
    return bundle[start:end].strip() + "\n"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()

    data, data_source = load_app_data(args.root / "data.js")
    bundle = (args.root / "data-bundle.js").read_text(encoding="utf-8")
    figures_source = (args.root / "figures.js").read_text(encoding="utf-8")
    faithful_source = (args.root / "faithful-visuals.js").read_text(encoding="utf-8")

    page_to_chapters: dict[int, list[str]] = defaultdict(list)
    page_text: dict[int, str] = {}
    for chapter_id, records in data["content"].items():
        for page, text in records:
            page = int(page)
            page_to_chapters[page].append(chapter_id)
            page_text[page] = text

    reader = PdfReader(str(args.pdf))
    expected = set(range(29, 383))
    present = set(page_to_chapters)
    missing = sorted(expected - present)
    outside_audited_range = sorted(present - expected)
    missing_substantive = []
    missing_non_content = []
    for page in missing:
        text = normalized(reader.pages[page - 1].extract_text() or "")
        if not text or "this page intentionally left blank" in text or text in {
            "entraînement ii",
            "ii entraînement",
        }:
            missing_non_content.append(page)
        else:
            missing_substantive.append(page)

    duplicates = {page: ids for page, ids in page_to_chapters.items() if len(ids) > 1}
    normalized_pages: dict[str, list[int]] = defaultdict(list)
    for page, text in page_text.items():
        key = normalized(text)
        if len(key) >= 120:
            normalized_pages[key].append(page)
    duplicate_text = sorted(
        (pages for pages in normalized_pages.values() if len(pages) > 1),
        key=lambda pages: pages[0],
    )

    all_text = "\n".join(page_text.values())
    artifact_counts = {
        "intentionally_blank": len(re.findall(r"This page intentionally left blank", all_text, re.I)),
        "reversed_points": all_text.count("stnioP"),
        "copyright_headers": len(re.findall(r"Tous droits réservés", all_text, re.I)),
        "line_break_hyphens": len(re.findall(r"[A-Za-zÀ-ÿ]-\n[a-zà-ÿ]", all_text)),
    }

    pdf_text = "\n".join(
        reader.pages[index - 1].extract_text() or "" for index in range(29, 383)
    )
    pdf_tables = set(re.findall(r"(?i)tableau\s*(\d+\.\d+)", pdf_text))
    pdf_figures = set(re.findall(r"(?i)fig(?:ure|\.)\s*(\d+\.\d+)", pdf_text))
    faithful_tables = object_keys(faithful_source, "FAITHFUL_TABLES")
    faithful_figures = object_keys(faithful_source, "FAITHFUL_FIGURES")
    selected_figures = object_keys(figures_source, "FIGURES")

    report = {
        "chapters": len(data["chapters"]),
        "page_records": sum(len(records) for records in data["content"].values()),
        "unique_pages": len(present),
        "missing_substantive": missing_substantive,
        "missing_non_content": missing_non_content,
        "pages_outside_audited_range": outside_audited_range,
        "duplicate_page_numbers": duplicates,
        "duplicate_page_text": duplicate_text,
        "artifacts_observed_not_modified": artifact_counts,
        "visual_inventory": {
            "pdf_table_ids_detected": sorted(pdf_tables),
            "app_faithful_table_ids": sorted(faithful_tables),
            "pdf_table_ids_without_faithful_mapping": sorted(pdf_tables - faithful_tables),
            "pdf_figure_ids_detected": sorted(pdf_figures),
            "app_faithful_figure_ids": sorted(faithful_figures),
            "app_selected_original_figure_ids": sorted(selected_figures),
            "pdf_figure_ids_without_mapping": sorted(
                pdf_figures - faithful_figures - selected_figures
            ),
        },
        "bundle_data_matches": bundle_data_section(bundle) == data_source,
        "data_sha256": hashlib.sha256(data_source.encode("utf-8")).hexdigest(),
    }

    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        print(f"chapters: {report['chapters']}")
        print(f"unique pages: {report['unique_pages']}")
        print(f"missing substantive: {missing_substantive}")
        print(f"missing non-content: {missing_non_content}")
        print(f"pages outside audited range: {outside_audited_range}")
        print(f"bundle data matches: {report['bundle_data_matches']}")

    return 1 if missing_substantive or duplicates or not report["bundle_data_matches"] else 0


if __name__ == "__main__":
    raise SystemExit(main())

"""Synchronize one source section inside data-bundle.js without rebuilding it."""

from __future__ import annotations

import argparse
import re
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path, help="Root-level JavaScript source file")
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()

    source_path = args.source
    if not source_path.is_absolute():
        source_path = args.root / source_path
    source_name = source_path.name
    source = source_path.read_text(encoding="utf-8").rstrip()
    bundle_path = args.root / "data-bundle.js"
    bundle = bundle_path.read_text(encoding="utf-8")

    marker = f"/* --- {source_name} --- */"
    start = bundle.find(marker)
    if start < 0:
        raise ValueError(f"Missing bundle marker: {marker}")
    section_start = start + len(marker)
    next_marker = re.search(r"\n/\* --- [^*]+ --- \*/", bundle[section_start:])
    if not next_marker:
        raise ValueError(f"Could not find marker after {source_name}")
    section_end = section_start + next_marker.start()
    replacement = f"\n{source}\n"
    bundle_path.write_text(
        bundle[:section_start] + replacement + bundle[section_end:], encoding="utf-8"
    )
    print(f"synchronized {source_name} in data-bundle.js")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

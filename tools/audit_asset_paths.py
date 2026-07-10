"""Check that every statically referenced local image/video/icon exists."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE_GLOBS = ("*.js", "*.html", "*.css")
ASSET_RE = re.compile(
    r"(?P<path>(?:images|icons)/[^\s\"'`<>)}]+\.(?:png|jpe?g|webp|gif|svg|mp4|webm))",
    re.I,
)


def main() -> int:
    references: dict[str, set[str]] = {}
    for pattern in SOURCE_GLOBS:
        for source in ROOT.glob(pattern):
            if source.name == "data-bundle.js":
                continue
            text = source.read_text(encoding="utf-8", errors="replace")
            for match in ASSET_RE.finditer(text):
                asset = match.group("path").replace("\\", "/")
                references.setdefault(asset, set()).add(source.name)

    missing = {
        asset: sorted(sources)
        for asset, sources in sorted(references.items())
        if not (ROOT / Path(asset)).is_file()
    }
    result = {
        "references": len(references),
        "missing": missing,
        "missing_count": len(missing),
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 1 if missing else 0


if __name__ == "__main__":
    raise SystemExit(main())

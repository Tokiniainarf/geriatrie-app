"""Build ordered interactive items for chapters 18–20 from the source PDF.

The printed book uses two independent columns. Generic PDF extraction interleaves
them line-by-line, which corrupts questions and answers. This builder assigns
words to the physical left/right column first, then reads each column top-down.
"""

from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass
from pathlib import Path

import pdfplumber


DEFAULT_PDF = Path(r"C:\Users\tokin\Desktop\GERIARTRIE\Gériatrie 5e éd❤️.pdf")
DEFAULT_OUTPUT = Path(__file__).resolve().parents[1] / "practice-data.js"

CHAPTER_PAGES = {
    "ch18": range(331, 353),
    "ch19": range(353, 360),
    "ch20": range(361, 382),
}

CHAPTER_TITLES = {
    "ch18": "Mini-dossiers progressifs",
    "ch19": "Key-features problems",
    "ch20": "Questions isolées",
}


@dataclass
class PhysicalLine:
    page: int
    column: int
    top: float
    text: str


def _clean_line(text: str) -> str:
    text = text.replace("\u00ad", "")
    text = re.sub(r"\s+([,.;:?!])", r"\1", text)
    text = re.sub(r"([«(])\s+", r"\1", text)
    text = re.sub(r"\s+([»)])", r"\1", text)
    return re.sub(r"\s+", " ", text).strip()


def _group_column_words(words: list[dict], tolerance: float = 2.35) -> list[tuple[float, str]]:
    groups: list[list[dict]] = []
    for word in sorted(words, key=lambda item: (item["top"], item["x0"])):
        for group in reversed(groups[-4:]):
            if abs(group[0]["top"] - word["top"]) <= tolerance:
                group.append(word)
                break
        else:
            groups.append([word])
    lines = []
    for group in sorted(groups, key=lambda row: row[0]["top"]):
        group.sort(key=lambda item: item["x0"])
        lines.append((group[0]["top"], _clean_line(" ".join(item["text"] for item in group))))
    return lines


def extract_ordered_lines(pdf: pdfplumber.PDF, chapter_id: str) -> list[PhysicalLine]:
    out: list[PhysicalLine] = []
    title = CHAPTER_TITLES[chapter_id].lower()
    for page_number in CHAPTER_PAGES[chapter_id]:
        page = pdf.pages[page_number - 1]
        words = page.extract_words(
            x_tolerance=2,
            y_tolerance=2,
            keep_blank_chars=False,
            use_text_flow=False,
            expand_ligatures=True,
        )

        # The inner/outer margins alternate with physical page parity. Both
        # layouts use 204 pt columns and a 17 pt gutter.
        # Odd pages start at x≈56.7. Even pages mirror the same 425 pt text
        # block against the outer margin; this also handles the 595 pt KFP
        # pages (x≈113.4) and the 631 pt chapters (x≈149.4).
        content_left = 56.0 if page_number % 2 else float(page.width) - 482.0
        split_x = content_left + 213.0
        content_right = content_left + 426.5
        columns = [[], []]
        for word in words:
            center = (float(word["x0"]) + float(word["x1"])) / 2
            top = float(word["top"])
            if top < 45 or top > page.height - 35:
                continue
            if center < content_left - 5 or center > content_right + 5:
                continue
            columns[0 if center < split_x else 1].append(word)

        for column_number, column_words in enumerate(columns):
            for top, text in _group_column_words(column_words):
                low = text.lower().strip(" .")
                if not text:
                    continue
                if low in {
                    title,
                    "chapitre",
                    "gériatrie",
                    "entraînement",
                    "réponses",
                    "mini-dossiers",
                    "progressifs",
                    "key-features",
                    "problems",
                    "questions isolées",
                }:
                    continue
                if re.fullmatch(r"\d{1,3}", text):
                    continue
                if re.match(r"^©\s*\d{4}|^tous droits réservés", text, re.I):
                    continue
                out.append(PhysicalLine(page_number, column_number, top, text))
    return out


def print_audit(lines_by_chapter: dict[str, list[PhysicalLine]]) -> None:
    patterns = {
        "ch18": re.compile(r"^(?:mini-)?dossier|^question\s+\d+|^réponse", re.I),
        "ch19": re.compile(r"^KFP\s*\d+|^question\s+[AB]|^réponse", re.I),
        "ch20": re.compile(r"^(?:[AB]\s+)?(?:QRM|QRU)\s*\d+|^réponse", re.I),
    }
    for chapter_id, lines in lines_by_chapter.items():
        print(f"\n{chapter_id}: {len(lines)} physical lines")
        hits = [line for line in lines if patterns[chapter_id].search(line.text)]
        for line in hits:
            print(f"p{line.page} c{line.column + 1} y{line.top:.1f}: {line.text}")


def _join_fragments(parts: list[str]) -> str:
    """Join physical lines without retaining print-only hyphenation."""
    result = ""
    for raw in parts:
        part = _clean_line(raw)
        if not part:
            continue
        if result.endswith("-") and re.match(r"^[a-zà-öø-ÿœæ]", part):
            result = result[:-1] + part
        else:
            result = (result + " " + part).strip()
    return _clean_line(result)


def _extract_figure_id(text: str) -> str:
    match = re.search(r"\bfig\.?\s*(18\.[12]|20\.[12])\b", text, re.I)
    return match.group(1) if match else ""


def _parse_options(lines: list[str], numbered: bool = False) -> tuple[str, list[dict], str, str]:
    option_re = re.compile(r"^(\d{1,2}|[A-L])\.\s*(.*)$" if numbered else r"^([A-L])\.\s*(.*)$")
    stem_parts: list[str] = []
    options: list[dict] = []
    current: dict | None = None
    figure_id = ""

    for raw in lines:
        line = _clean_line(raw)
        if not line:
            continue
        figure_id = figure_id or _extract_figure_id(line)
        if re.match(r"^(?:\d{2,3}\s+)?Fig\.?\s*\d+\.\d+", line, re.I):
            continue
        match = option_re.match(line)
        if match:
            current = {"letter": match.group(1), "textParts": [match.group(2)]}
            options.append(current)
            continue
        if current is None:
            stem_parts.append(line)
        else:
            # Text below an option belongs to it until the next option marker.
            current["textParts"].append(line)

    clean_options = []
    for option in options:
        text = _join_fragments(option.pop("textParts"))
        if text:
            clean_options.append({"letter": option["letter"], "text": text})

    stem = _join_fragments(stem_parts)
    maximum = ""
    max_match = re.search(r"\[maximum\s+(\d+)\]", stem, re.I)
    if max_match:
        maximum = max_match.group(1)
        stem = re.sub(r"\s*\[maximum\s+\d+\]", "", stem, flags=re.I).strip()
    return stem, clean_options, maximum, figure_id


def _answer_text(lines: list[str]) -> str:
    response = ""
    explanation: list[str] = []
    for raw in lines:
        line = _clean_line(raw)
        match = re.match(r"^R[eé]ponses?\s*:\s*(.*)$", line, re.I)
        if match:
            response = match.group(1).strip()
            continue
        if re.fullmatch(r"A{3,}", line):
            response = "Correction non renseignée dans cette édition (mention « AAAA »)."
            continue
        if line and not re.fullmatch(r"(?:Question\s+[A-D]|Question\s+\d+)", line, re.I):
            explanation.append(line)
    detail = _join_fragments(explanation)
    if response and detail:
        return f"{response} — {detail}"
    return response or detail


def _split_at_second_reset(lines: list[PhysicalLine], marker_re: re.Pattern) -> tuple[list[PhysicalLine], list[PhysicalLine]]:
    seen_first = False
    for index, line in enumerate(lines):
        match = marker_re.match(line.text)
        if not match or int(match.group(1)) != 1:
            continue
        if seen_first:
            return lines[:index], lines[index:]
        seen_first = True
    raise RuntimeError(f"Could not locate answer reset for {marker_re.pattern}")


def parse_ch18(lines: list[PhysicalLine]) -> list[dict]:
    dp_re = re.compile(r"^DP\s*(\d+)\b", re.I)
    q_re = re.compile(r"^Question\s+(\d+)\b", re.I)
    question_lines, answer_lines = _split_at_second_reset(lines, dp_re)

    question_map: dict[tuple[int, int], dict] = {}
    current_dp = 0
    vignette_parts: list[str] = []
    current_q = 0
    content_parts: list[str] = []

    def flush_question() -> None:
        nonlocal current_q, content_parts
        if not current_dp or not current_q:
            content_parts = []
            return
        stem, options, maximum, figure_id = _parse_options(content_parts)
        vignette = _join_fragments(vignette_parts)
        question_map[(current_dp, current_q)] = {
            "label": f"DP {current_dp} · Q{current_q}",
            "type": "MDP",
            "selection": "QRM",
            "rang": "A",
            "max": maximum,
            "stem": stem,
            "vignette": vignette,
            "options": options,
            "answer": "",
            "figureId": figure_id or _extract_figure_id(stem) or (_extract_figure_id(vignette) if current_q == 1 else ""),
        }
        current_q = 0
        content_parts = []

    for physical in question_lines:
        text = physical.text
        dp_match = dp_re.match(text)
        if dp_match:
            flush_question()
            current_dp = int(dp_match.group(1))
            vignette_parts = []
            continue
        q_match = q_re.match(text)
        if q_match:
            flush_question()
            current_q = int(q_match.group(1))
            content_parts = []
            continue
        if not current_dp:
            continue
        if current_q:
            content_parts.append(text)
        else:
            vignette_parts.append(text)
    flush_question()

    answer_map: dict[tuple[int, int], str] = {}
    current_dp = 0
    current_q = 0
    answer_parts: list[str] = []

    def flush_answer() -> None:
        nonlocal current_q, answer_parts
        if current_dp and current_q:
            answer_map[(current_dp, current_q)] = _answer_text(answer_parts)
        current_q = 0
        answer_parts = []

    for physical in answer_lines:
        text = physical.text
        dp_match = dp_re.match(text)
        if dp_match:
            flush_answer()
            current_dp = int(dp_match.group(1))
            continue
        q_match = q_re.match(text)
        if q_match:
            flush_answer()
            current_q = int(q_match.group(1))
            continue
        if current_q:
            answer_parts.append(text)
    flush_answer()

    items = []
    for key in sorted(question_map):
        item = question_map[key]
        item["answer"] = answer_map.get(key, "")
        items.append(item)
    return items


def parse_ch19(lines: list[PhysicalLine]) -> list[dict]:
    kfp_re = re.compile(r"^KFP\s*(\d+)\b", re.I)
    q_re = re.compile(r"^Question\s+([A-D])\b", re.I)
    question_lines, answer_lines = _split_at_second_reset(lines, kfp_re)

    question_map: dict[tuple[int, str], dict] = {}
    current_kfp = 0
    vignette_parts: list[str] = []
    current_q = ""
    content_parts: list[str] = []

    def flush_question() -> None:
        nonlocal current_q, content_parts
        if not current_kfp or not current_q:
            content_parts = []
            return
        stem, options, maximum, figure_id = _parse_options(content_parts, numbered=True)
        question_map[(current_kfp, current_q)] = {
            "label": f"KFP {current_kfp} · {current_q}",
            "type": "KFP",
            "selection": "QRM",
            "rang": "A",
            "max": maximum,
            "stem": stem,
            "vignette": _join_fragments(vignette_parts),
            "options": options,
            "answer": "",
            "figureId": figure_id or _extract_figure_id(stem),
        }
        current_q = ""
        content_parts = []

    for physical in question_lines:
        text = physical.text
        kfp_match = kfp_re.match(text)
        if kfp_match:
            flush_question()
            current_kfp = int(kfp_match.group(1))
            vignette_parts = []
            continue
        q_match = q_re.match(text)
        if q_match:
            flush_question()
            current_q = q_match.group(1).upper()
            continue
        if not current_kfp:
            continue
        if current_q:
            content_parts.append(text)
        else:
            vignette_parts.append(text)
    flush_question()

    answer_map: dict[tuple[int, str], str] = {}
    current_kfp = 0
    current_q = ""
    answer_parts: list[str] = []

    def flush_answer() -> None:
        nonlocal current_q, answer_parts
        if current_kfp and current_q:
            answer_map[(current_kfp, current_q)] = _answer_text(answer_parts)
        current_q = ""
        answer_parts = []

    for physical in answer_lines:
        text = physical.text
        kfp_match = kfp_re.match(text)
        if kfp_match:
            flush_answer()
            current_kfp = int(kfp_match.group(1))
            continue
        q_match = q_re.match(text)
        if q_match:
            flush_answer()
            current_q = q_match.group(1).upper()
            continue
        if current_q:
            answer_parts.append(text)
    flush_answer()

    items = []
    for key in sorted(question_map):
        item = question_map[key]
        item["answer"] = answer_map.get(key, "")
        items.append(item)
    return items


def parse_ch20(lines: list[PhysicalLine]) -> list[dict]:
    question_re = re.compile(r"^([AB])\s+(QRM|QRU)\s*(\d+)\b", re.I)
    answer_re = re.compile(r"^(QRM|QRU)\s*(\d+)\b", re.I)
    split_index = None
    for index, physical in enumerate(lines):
        if answer_re.match(physical.text) and not question_re.match(physical.text):
            split_index = index
            break
    if split_index is None:
        raise RuntimeError("Could not locate ch20 correction section")

    question_map: dict[int, dict] = {}
    current: tuple[str, str, int] | None = None
    content_parts: list[str] = []

    def flush_question() -> None:
        nonlocal current, content_parts
        if current is None:
            content_parts = []
            return
        rang, qtype, number = current
        stem, options, maximum, figure_id = _parse_options(content_parts)
        question_map[number] = {
            "label": f"{qtype} {number}",
            "type": "QI",
            "selection": qtype,
            "rang": rang,
            "max": maximum,
            "stem": stem,
            "vignette": "",
            "options": options,
            "answer": "",
            "figureId": figure_id or _extract_figure_id(stem),
        }
        current = None
        content_parts = []

    for physical in lines[:split_index]:
        match = question_re.match(physical.text)
        if match:
            flush_question()
            current = (match.group(1).upper(), match.group(2).upper(), int(match.group(3)))
            continue
        if current is not None:
            content_parts.append(physical.text)
    flush_question()

    answer_map: dict[int, str] = {}
    current_number = 0
    answer_parts: list[str] = []

    def flush_answer() -> None:
        nonlocal current_number, answer_parts
        if current_number:
            answer_map[current_number] = _answer_text(answer_parts)
        current_number = 0
        answer_parts = []

    for physical in lines[split_index:]:
        match = answer_re.match(physical.text)
        if match:
            flush_answer()
            current_number = int(match.group(2))
            continue
        if current_number:
            answer_parts.append(physical.text)
    flush_answer()

    items = []
    for number in sorted(question_map):
        item = question_map[number]
        item["answer"] = answer_map.get(number, "")
        items.append(item)
    return items


TEXT_CORRECTIONS = (
    ("plateauxrepas", "plateaux-repas"),
    ("évoquezvous", "évoquez-vous"),
    ("mettezvous", "mettez-vous"),
    ("mettez vous", "mettez-vous"),
    ("audelà", "au-delà"),
    ("sousjacent", "sous-jacent"),
    ("d'aprèsmidi", "d'après-midi"),
    ("antiinflammatoire", "anti-inflammatoire"),
    ("contreindique(nt)", "contre-indique(nt)"),
    ("nouverau", "nouveau"),
    ("neurocognitfs", "neurocognitifs"),
    ("hypokaliméie", "hypokaliémie"),
    ("rengorgement", "regorgement"),
    ("comme la TSH comme étiologie", "et la TSH comme étiologie"),
    ("reste un exceptionnel", "reste exceptionnel"),
    ("carence maritale", "carence martiale"),
    ("complémantaires", "complémentaires"),
    ("1 300 kcal/kg par jour", "1 300 kcal par jour"),
    ("900 kcal/kg par jour", "900 kcal par jour"),
    ("Le ionogramme", "L'ionogramme"),
    ("qui si l'étiologie", "que si l'étiologie"),
    ("Ionogamme", "Ionogramme"),
    ("Cockroft", "Cockcroft"),
    ("ostéoprotique", "ostéoporotique"),
    ("la biologique:", "le bilan biologique :"),
    ("lanzoprazole", "lansoprazole"),
    ("alfuzozine", "alfuzosine"),
    ("Quelles(s)", "Quelle(s)"),
    ("prise en charge en charge", "prise en charge"),
    ("dans en période", "en période"),
    ("comme comme", "comme"),
)


def repair_practice_text(value: str, label: str = "") -> str:
    text = value or ""
    for wrong, correct in TEXT_CORRECTIONS:
        text = text.replace(wrong, correct)
    text = re.sub(r"\bHCO[–-](?=\s*[:=]?\s*\d)", "HCO₃⁻", text)
    text = re.sub(r"\bsaturation O(?=\s*\d)", "saturation O₂", text, flags=re.I)
    text = re.sub(r"\bkg/\s*m2\b", "kg/m²", text, flags=re.I)
    text = re.sub(r"\bml/\s*min/\s*m2\b", "ml/min/m²", text, flags=re.I)
    text = re.sub(r"\bml/\s*min\b", "ml/min", text, flags=re.I)
    text = re.sub(r"\(fig\.\s*18\.2\)\.\s*Fig\.\s*18\.2\.", "(fig. 18.2).", text, flags=re.I)
    if label == "DP 7 · Q4":
        text = text.replace("chez cette patiente fébrile", "chez ce patient fébrile")
    if label.startswith("KFP 6 ·"):
        text = text.replace("assure qu'elle est en pleine forme et ne pas savoir", "assure qu'elle est en pleine forme et dit ne pas savoir")
        text = text.replace("38,1 °C", "38,6 °C")
    if label == "KFP 1 · A":
        text = text.replace("10,12.", "10, 12.")
    return _clean_line(text)


def repair_practice_payload(payload: dict[str, list[dict]]) -> None:
    for chapter_id, items in payload.items():
        seen_groups: set[str] = set()
        for item in items:
            label = item.get("label", "")
            for key in ("stem", "vignette", "answer"):
                item[key] = repair_practice_text(item.get(key, ""), label)
            for option in item.get("options", []):
                option["text"] = repair_practice_text(option.get("text", ""), label)

            # Le contexte clinique est identique pour toutes les questions du
            # même DP/KFP. Le conserver une seule fois réduit fortement le
            # payload et empêche toute répétition au rendu groupé.
            if chapter_id in {"ch18", "ch19"}:
                group = label.split(" · ", 1)[0]
                if group in seen_groups:
                    item["vignette"] = ""
                else:
                    seen_groups.add(group)


def validate_items(items_by_chapter: dict[str, list[dict]]) -> None:
    expected = {"ch18": (20, None), "ch19": (8, None), "ch20": (1, 133)}
    for chapter_id, items in items_by_chapter.items():
        if not items:
            raise RuntimeError(f"{chapter_id}: no items generated")
        incomplete = [item["label"] for item in items if len(item["options"]) < 3 or not item["stem"]]
        unanswered = [item["label"] for item in items if not item["answer"]]
        if incomplete:
            raise RuntimeError(f"{chapter_id}: incomplete items: {incomplete[:12]}")
        if unanswered:
            raise RuntimeError(f"{chapter_id}: missing answers: {unanswered[:12]}")
        if chapter_id == "ch20" and len(items) != expected[chapter_id][1]:
            raise RuntimeError(f"ch20: expected 133 items, got {len(items)}")
        if chapter_id in {"ch18", "ch19"}:
            prefix = "DP" if chapter_id == "ch18" else "KFP"
            groups = {int(re.search(rf"{prefix}\s+(\d+)", item["label"]).group(1)) for item in items}
            if len(groups) != expected[chapter_id][0]:
                raise RuntimeError(f"{chapter_id}: expected {expected[chapter_id][0]} groups, got {len(groups)}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pdf", type=Path, default=DEFAULT_PDF)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--audit", action="store_true")
    args = parser.parse_args()

    with pdfplumber.open(args.pdf) as pdf:
        lines_by_chapter = {
            chapter_id: extract_ordered_lines(pdf, chapter_id)
            for chapter_id in CHAPTER_PAGES
        }

    if args.audit:
        print_audit(lines_by_chapter)
        return

    payload = {
        "ch18": parse_ch18(lines_by_chapter["ch18"]),
        "ch19": parse_ch19(lines_by_chapter["ch19"]),
        "ch20": parse_ch20(lines_by_chapter["ch20"]),
    }
    repair_practice_payload(payload)
    validate_items(payload)
    args.output.write_text(
        "const PRACTICE_DATA = "
        + json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )
    print(args.output)
    for chapter_id, items in payload.items():
        groups = sorted({item["label"].split(" · ")[0] for item in items})
        print(f"{chapter_id}: {len(items)} items, {len(groups)} groups")


if __name__ == "__main__":
    main()

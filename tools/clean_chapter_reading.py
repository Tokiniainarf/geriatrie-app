"""Normalize chapter data and repair the reviewed revision cards.

This script is deliberately deterministic. It only applies corrections that were
verified against the supplied fifth-edition manual and the rendered application.
"""

from __future__ import annotations

import argparse
import json
import re
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_PREFIX = "const APP_DATA = "
LETTER = "A-Za-zÀ-ÖØ-öø-ÿŒœ"
LOWER = "a-zà-öø-ÿœ"
SPLIT_WORD_RE = re.compile(rf"([{LETTER}]+)-\s+([{LOWER}]+)")
LINE_SPLIT_WORD_RE = re.compile(rf"([{LETTER}]+)-\n([{LOWER}]+)")
KEEP_HYPHEN_PREFIXES = {
    "anti", "après", "avant", "cardio", "costo", "extra", "fémoro",
    "gastro", "intra", "médico", "micro", "non", "post", "pré", "pro",
    "psycho", "radio", "semi", "socio", "sous",
}
BLANK_PAGES = {42, 84, 98, 176, 190, 224, 246, 280, 330, 360, 382}
CHAPTER_STARTS = [
    (29, "ch1"), (43, "ch2"), (57, "ch3"), (73, "ch4"),
    (85, "ch5"), (99, "ch6"), (117, "ch7"), (141, "ch8"),
    (153, "ch9"), (177, "ch10"), (193, "ch11"), (207, "ch12"),
    (225, "ch13"), (247, "ch14"), (267, "ch15"), (281, "ch16"),
    (317, "ch17"), (331, "ch18"), (353, "ch19"), (361, "ch20"),
]


def load_const_json(path: Path, prefix: str) -> object:
    raw = path.read_text(encoding="utf-8").strip()
    if not raw.startswith(prefix) or not raw.endswith(";"):
        raise ValueError(f"Unexpected wrapper in {path}")
    return json.loads(raw[len(prefix) : -1])


def chapter_for_page(page: int) -> str | None:
    if page < 29 or page > 382 or page in BLANK_PAGES or page == 329:
        return None
    chapter = None
    for start, chapter_id in CHAPTER_STARTS:
        if page < start:
            break
        chapter = chapter_id
    return chapter


def should_keep_hyphen(left: str, right: str, corpus: str) -> bool:
    if left.casefold() in KEEP_HYPHEN_PREFIXES:
        return True
    joined = f"{left}-{right}"
    return bool(re.search(rf"(?<![{LETTER}]){re.escape(joined)}(?![{LETTER}])", corpus, re.I))


def dehyphenate(text: str, corpus: str, line_only: bool, stats: Counter) -> str:
    pattern = LINE_SPLIT_WORD_RE if line_only else SPLIT_WORD_RE

    def replace(match: re.Match[str]) -> str:
        left, right = match.groups()
        if should_keep_hyphen(left, right, corpus):
            stats["hyphens_preserved"] += 1
            return f"{left}-{right}"
        stats["line_break_hyphens_joined"] += 1
        return f"{left}{right}"

    return pattern.sub(replace, text)


def clean_page_text(text: str, corpus: str, stats: Counter) -> str:
    text, count = re.subn(r"(?m)^.*Tous droits réservés.*(?:\n|$)", "", text)
    stats["copyright_lines_removed"] += count
    text, count = re.subn(r"(?m)^\s*stnioP\s*(?:\n|$)", "", text)
    stats["reversed_points_removed"] += count
    text = dehyphenate(text, corpus, line_only=True, stats=stats)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    return text


def read_revision_arrays(path: Path) -> tuple[list[dict], list[dict]]:
    source = path.read_text(encoding="utf-8")
    decoder = json.JSONDecoder()
    aids_marker = "const REVISION_AIDS = "
    flash_marker = "const REVISION_FLASHCARDS = "
    aids_at = source.index(aids_marker) + len(aids_marker)
    flash_at = source.index(flash_marker) + len(flash_marker)
    aids, _ = decoder.raw_decode(source[aids_at:])
    flashcards, _ = decoder.raw_decode(source[flash_at:])
    return aids, flashcards


def normalize_revision_string(value: str, corpus: str, stats: Counter) -> str:
    value = dehyphenate(value, corpus, line_only=False, stats=stats)
    return re.sub(r"\s+", " ", value).strip()


def repair_revision_aids(aids: list[dict], corpus: str, titles: dict[str, str], stats: Counter) -> list[dict]:
    chapter_moves = {
        "ch4_s014": "ch5",
        "ch5_s017": "ch6",
        "ch6_s023": "ch7",
        "ch6_s024": "ch8",
        "ch8_s040": "ch9",
        "ch9_s043": "ch10",
        "ch10_s046": "ch11",
        "ch11_s048": "ch12",
        "ch12_s051": "ch13",
        "ch13_s055": "ch14",
        "ch15_s060": "ch16",
    }
    section_fixes = {
        "ch2_s008": "VII. Établir un plan d'aide de la personne âgée dépendante : le plan personnalisé",
        "ch4_s011": "III. Éthique en fin de vie — décisions et proportionnalité des soins",
        "ch4_s013": "III. Éthique en fin de vie — droits du patient et obstination déraisonnable",
        "ch8_s040": "IV. Prise en charge et traitement des troubles neurocognitifs majeurs du patient âgé",
        "ch9_s043": "IV. Prise en charge et traitement d'un épisode dépressif du patient âgé",
        "ch10_s046": "IV. Prise en charge et traitement de la confusion du patient âgé",
        "ch11_s048": "V. Prise en charge des personnes âgées après une chute",
        "ch13_s053": "III. Évaluation : conséquences du syndrome d'immobilisation",
        "ch13_s055": "IV. Prise en charge nutritionnelle chez la personne âgée",
        "ch15_s060": "V. Savoir prescrire et surveiller une transfusion chez le patient âgé",
    }
    reviewed = {
        "ch1_s001": {
            "section": "VI. Stratégies pour ralentir le vieillissement : nutrition, vitamine D et activité physique",
            "keyPoints": [
                "Les régimes hypocaloriques sont le plus souvent à proscrire chez la personne âgée, car la perte musculaire est souvent définitive.",
                "L'activité physique adaptée ralentit la perte musculaire, préserve les fonctions cardiovasculaire et respiratoire, la masse osseuse et réduit le risque de chute.",
                "La vitamine D est recommandée systématiquement après 80 ans pour prévenir l'ostéoporose et la perte de masse musculaire.",
            ],
            "pitfall": "Ne pas proposer de restriction calorique anti-âge à une personne âgée.",
            "mnemonic": None,
        },
        "ch6_s023": {
            "section": "III. Traitement de la gonarthrose",
            "keyPoints": [
                "Mesures indispensables : activité physique adaptée, kinésithérapie, éducation, correction prudente du surpoids et appareillage.",
                "Traitement symptomatique avec réévaluations régulières : antalgiques, traitements locaux et infiltrations selon le contexte ; les AINS systémiques sont contre-indiqués chez la personne âgée dans le manuel.",
                "Options chirurgicales : lavage articulaire, ostéotomie ou prothèse totale de genou selon le retentissement et l'évaluation préopératoire.",
            ],
            "pitfall": "Ne pas corriger un excès pondéral au prix d'une dénutrition ou d'une sarcopénie.",
            "mnemonic": None,
        },
        "ch7_s028": {
            "keyPoints": [
                "Évaluer globalement le patient et le retentissement de la coxarthrose.",
                "Mesurer la douleur au repos et à l'effort, sa durée, ainsi que l'efficacité et la tolérance des antalgiques déjà essayés.",
                "Rechercher les facteurs améliorables — surcharge pondérale et diabète — puis évaluer marche, autonomie et score de Lequesne.",
            ],
            "pitfall": "Ne pas limiter l'évaluation à l'intensité douloureuse : mesurer aussi le retentissement fonctionnel.",
        },
        "ch7_s030": {
            "keyPoints": [
                "Les radiographies conventionnelles suffisent dans la grande majorité des coxarthroses.",
                "L'échographie recherche une bursite ou un épanchement et peut guider ponction ou infiltration.",
                "L'arthroscanner est réservé aux blocages par corps étrangers non calcifiés et aux lésions du labrum ; l'IRM recherche notamment fissure de contrainte, ostéonécrose ou lésion du labrum.",
            ],
            "pitfall": "Ne pas demander arthroscanner ou IRM en première intention devant une coxarthrose typique.",
        },
        "ch7_s033": {
            "keyPoints": [
                "Éliminer une atteinte méniscale isolée et une arthropathie microcristalline.",
                "Devant un début brutal, rechercher une ostéonécrose ou une fissure d'un condyle fémoral par IRM.",
                "Évoquer aussi arthrite infectieuse ou inflammatoire, douleurs projetées, phlébite, lésions tendineuses et lésions osseuses.",
            ],
            "pitfall": "Une poussée de gonarthrose fébrile ou avec épanchement impose d'écarter une arthrite infectieuse ou microcristalline.",
        },
        "ch7_s035": {
            "keyPoints": [
                "Critère préalable : douleur et/ou raideur digitales.",
                "Associer trois ou quatre critères : élargissement d'au moins deux articulations sélectionnées, élargissement d'au moins deux IPD, déformation d'au moins une articulation sélectionnée, moins de trois MCP gonflées.",
                "Les dix articulations sélectionnées sont les IPD 2-3, les IPP 2-3 et la première carpométacarpienne, à droite et à gauche.",
            ],
            "pitfall": "Ne pas confondre nodules d'Heberden ou de Bouchard et gonflement inflammatoire des MCP.",
        },
    }

    for aid in aids:
        original_id = aid["id"]
        if original_id in chapter_moves:
            new_chapter = chapter_moves[original_id]
            suffix = original_id.split("_", 1)[1]
            aid["id"] = f"{new_chapter}_{suffix}"
            aid["chapter"] = new_chapter
            aid["chapterTitle"] = titles[new_chapter]
            stats["revision_cards_reassigned"] += 1
        if original_id in section_fixes:
            aid["section"] = section_fixes[original_id]
            stats["revision_sections_repaired"] += 1
        if original_id in reviewed:
            aid.update(reviewed[original_id])
            stats["revision_cards_rewritten_from_pdf"] += 1

        aid["section"] = normalize_revision_string(aid["section"], corpus, stats)
        aid["keyPoints"] = [normalize_revision_string(item, corpus, stats) for item in aid.get("keyPoints", [])]
        if aid.get("pitfall"):
            aid["pitfall"] = normalize_revision_string(aid["pitfall"], corpus, stats)
        if aid.get("mnemonic"):
            aid["mnemonic"] = normalize_revision_string(aid["mnemonic"], corpus, stats)
        aid["flashcard"]["q"] = f"Points clés — {aid['chapterTitle']} : {aid['section']}"
        aid["flashcard"]["a"] = " • ".join(aid["keyPoints"])

    ids = [aid["id"] for aid in aids]
    if len(ids) != len(set(ids)):
        raise ValueError("Revision aid IDs are no longer unique")
    questions = [aid["flashcard"]["q"] for aid in aids]
    if len(questions) != len(set(questions)):
        duplicates = [q for q, count in Counter(questions).items() if count > 1]
        raise ValueError(f"Revision questions remain duplicated: {duplicates}")
    return aids


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()
    stats: Counter = Counter()

    data_path = ROOT / "data.js"
    data = load_const_json(data_path, DATA_PREFIX)
    all_original_text = "\n".join(text for records in data["content"].values() for _, text in records)
    records_by_page = {
        int(page): text
        for records in data["content"].values()
        for page, text in records
    }
    if len(records_by_page) != sum(len(records) for records in data["content"].values()):
        raise ValueError("Duplicate physical page numbers prevent deterministic reassignment")

    normalized_content = {chapter["id"]: [] for chapter in data["chapters"]}
    for page, text in sorted(records_by_page.items()):
        target = chapter_for_page(page)
        if target is None:
            if page in BLANK_PAGES:
                stats["blank_pages_removed"] += 1
            elif page >= 383:
                stats["partial_index_pages_removed"] += 1
            continue
        cleaned = clean_page_text(text, all_original_text, stats)
        normalized_content[target].append([page, cleaned])
    data["content"] = normalized_content

    titles = {chapter["id"]: chapter["t"] for chapter in data["chapters"]}
    revision_path = ROOT / "revision-aids.js"
    aids, _ = read_revision_arrays(revision_path)
    aids = repair_revision_aids(aids, all_original_text, titles, stats)
    flashcards = [
        {
            "id": f"rev-{aid['id']}",
            "chapter": aid["chapter"],
            "rang": "A",
            "question": aid["flashcard"]["q"],
            "answer": aid["flashcard"]["a"],
            "tags": aid.get("tags", []),
            "mnemonic": aid.get("mnemonic"),
        }
        for aid in aids
    ]

    print(json.dumps(stats, ensure_ascii=False, indent=2, sort_keys=True))
    if not args.write:
        print("dry run only; pass --write to update data.js and revision-aids.js")
        return 0

    data_path.write_text(
        DATA_PREFIX + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n",
        encoding="utf-8",
    )
    revision_path.write_text(
        "// Reviewed revision aids — manual-backed corrections\n"
        "const REVISION_AIDS = " + json.dumps(aids, ensure_ascii=False) + ";\n\n"
        "// Derived flashcards used by revision and BrainFeed\n"
        "const REVISION_FLASHCARDS = " + json.dumps(flashcards, ensure_ascii=False) + ";\n",
        encoding="utf-8",
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

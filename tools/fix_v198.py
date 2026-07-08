# -*- coding: utf-8 -*-
from pathlib import Path
import re
import json

root = Path(__file__).resolve().parents[1]

# --- index.html ---
p = root / "index.html"
t = p.read_text(encoding="utf-8")
t = re.sub(r"\?v=\d+", "?v=198", t)
if "notebook-decks-data" not in t:
    t = re.sub(
        r"\{ src: 'notebook-interactive\.js\?v=198', label: '[^']*', pct: \d+ \},",
        "{ src: 'notebook-decks-data.js?v=198', label: 'Decks NotebookLM…', pct: 48 },\n"
        "    { src: 'notebook-interactive.js?v=198', label: 'Lecteur présentation…', pct: 54 },",
        t,
        count=1,
    )
t = t.replace(
    "Fiches CNEG · notebooks interactifs (style NotebookLM) · objectifs EDN/R2C",
    "Fiches synthèse · présentations PDF NotebookLM plein écran · codes ITEM EDN",
)
t = t.replace("Présentations PDF", "Présentations")
p.write_text(t, encoding="utf-8")
print("index decks-data:", "notebook-decks-data" in t)

# --- sw.js ---
s = (root / "sw.js").read_text(encoding="utf-8")
s = re.sub(r"geriatrie-v\d+", "geriatrie-v198", s)
if "notebook-decks-data.js" not in s:
    s = s.replace(
        "'./notebook-interactive.js'",
        "'./notebook-decks-data.js',\n  './notebook-interactive.js'",
    )
(root / "sw.js").write_text(s, encoding="utf-8")
print("sw cache:", "v198" in s, "decks-data" in s)

# --- polish titles ---
decks_path = root / "notebook-decks-data.js"
raw = decks_path.read_text(encoding="utf-8")
start = raw.index("[")
end = raw.rindex("]") + 1
arr = json.loads(raw[start:end])
fixes = {
    "Architecture geriatrique": "Architecture gériatrique",
    "Complexite geriatrique": "Complexité gériatrique",
    "Ethique et protection": "Éthique et protection",
    "Deficits sensoriels (EVC)": "Déficits sensoriels (EVC)",
    "Osteoporose": "Ostéoporose",
    "Prescription sure": "Prescription sûre",
    "Palliatif et ethique": "Palliatif et éthique",
}
for d in arr:
    if d.get("title") in fixes:
        d["title"] = fixes[d["title"]]
out = "/* Auto-generated from NotebookLM PDF export */\n"
out += "const INTERACTIVE_NOTEBOOKS = " + json.dumps(arr, ensure_ascii=False, indent=2) + ";\n"
out += "if (typeof window !== 'undefined') window.INTERACTIVE_NOTEBOOKS = INTERACTIVE_NOTEBOOKS;\n"
decks_path.write_text(out, encoding="utf-8")
print("decks", len(arr), "pages", sum(d["pageCount"] for d in arr))
print("first", arr[0]["title"], "order", arr[0]["chapterOrder"])

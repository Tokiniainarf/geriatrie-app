# -*- coding: utf-8 -*-
"""Export all NotebookLM PDFs to JPEG slides for in-app presentation."""
import fitz
import os
import json
import unicodedata

BASE = r"C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM"
OUT_ROOT = r"C:\Users\tokin\geriatrie-app\images\notebooks"
os.makedirs(OUT_ROOT, exist_ok=True)

# chronological by chapter order; unique slug per PDF
MAPPING = [
    ("ch01-biology", 1, "Decoding_Geriatric_Biology.pdf", "Biologie du vieillissement", "#0891B2"),
    ("ch02-complexity", 2, "Geriatric_Complexity_Blueprint.pdf", "Complexite geriatrique", "#059669"),
    ("ch02-architecture", 2, "Architecture_Geriatrique.pdf", "Architecture geriatrique", "#059669"),
    ("ch02-clinical", 2, "Geriatric_Clinical_Blueprint.pdf", "Blueprint clinique", "#0D9488"),
    ("ch03-autonomie", 3, "L_Architecture_de_l_Autonomie.pdf", "Architecture de l'Autonomie", "#0D9488"),
    ("ch03-assessment", 3, "Geriatric_Assessment_Blueprint.pdf", "Assessment Blueprint (EGS)", "#0D9488"),
    ("ch04-ethique", 4, "Ethique_et_Protection_Geriatrique.pdf", "Ethique et protection", "#DC2626"),
    ("ch04-bientraitance", 4, "Bientraitance_en_Lumiere.pdf", "Bientraitance", "#DC2626"),
    ("ch05-sensory-evc", 5, "EVC_Sensory_Deficit_Mastery.pdf", "Deficits sensoriels (EVC)", "#0284C7"),
    ("ch05-sensory", 5, "Geriatric_Sensory_Management.pdf", "Gestion sensorielle", "#0284C7"),
    ("ch06-osteo", 6, "Osteoporosis_Clinical_Blueprint.pdf", "Osteoporose", "#047857"),
    ("ch07-arthrose", 7, "Geriatric_Osteoarthritis_Masterclass.pdf", "Arthrose", "#0369A1"),
    ("ch08-douleur", 8, "EVC_Geriatric_Pain_Protocol.pdf", "Douleur (protocole EVC)", "#BE123C"),
    ("ch09-neuro", 9, "Geriatric_Neurocognitive_Blueprint.pdf", "Troubles neurocognitifs", "#0E7490"),
    ("ch09-bpsd", 9, "2024_BPSD_Clinical_Management.pdf", "BPSD 2024", "#0E7490"),
    ("ch10-mood", 10, "Geriatric_Mood_Disorder_Algorithm.pdf", "Troubles de l'humeur", "#64748B"),
    ("ch11-delirium", 11, "Geriatric_Delirium_Management.pdf", "Delirium", "#0369A1"),
    ("ch12-chutes", 12, "Blueprint_des_Chutes_Geriatriques.pdf", "Chutes", "#164E63"),
    ("ch13-immobilisation", 13, "L_Urgence_du_Syndrome_d_Immobilisation.pdf", "Syndrome d'immobilisation", "#0369A1"),
    ("ch14-nutrition", 14, "Geriatric_Nutrition_Protocol.pdf", "Nutrition", "#15803D"),
    ("ch14-hydration", 14, "Clinical_Hydration_Blueprint.pdf", "Hydratation", "#15803D"),
    ("ch15-urinary", 15, "Geriatric_Urinary_Clinical_Dashboard.pdf", "Incontinence / urinaire", "#0F766E"),
    ("ch16-prescribing", 16, "Safe_Geriatric_Prescribing.pdf", "Prescription sure", "#B45309"),
    ("ch16-antibiotiques", 16, "Precision_Antibiotic_Dashboard.pdf", "Antibiotiques", "#B45309"),
    ("ch17-palliatif", 17, "Clinical_Palliative_Ethics.pdf", "Palliatif et ethique", "#475569"),
    ("chx-bpco", 18, "Strategie_BPCO_EVC.pdf", "BPCO (transversal EVC)", "#0891B2"),
    ("chx-dashboard", 19, "The_Clinical_Dashboard.pdf", "Clinical Dashboard", "#2563EB"),
]


def norm(s):
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return s.lower().replace(" ", "_")


def resolve(name, files_on_disk):
    if name in files_on_disk:
        return name
    # skip duplicate (1)
    target = norm(name)
    best = None
    for f in files_on_disk:
        if "(1)" in f:
            continue
        nf = norm(f)
        if nf == target:
            return f
        base_t = target.replace(".pdf", "")
        if base_t in nf and nf.endswith(".pdf"):
            best = f
    return best


def main():
    files_on_disk = os.listdir(BASE)
    print("PDFs on disk:", len(files_on_disk))
    mat = fitz.Matrix(1.35, 1.35)
    manifest = []
    for slug, order, pdfname, title, color in MAPPING:
        real = resolve(pdfname, files_on_disk)
        if not real:
            print("MISSING", pdfname)
            continue
        path = os.path.join(BASE, real)
        doc = fitz.open(path)
        d = os.path.join(OUT_ROOT, slug)
        os.makedirs(d, exist_ok=True)
        pages = []
        for i in range(len(doc)):
            pix = doc[i].get_pixmap(matrix=mat, alpha=False)
            fn = "p%02d.jpg" % (i + 1)
            fp = os.path.join(d, fn)
            try:
                pix.save(fp, jpg_quality=80)
            except TypeError:
                pix.save(fp)
            pages.append("images/notebooks/%s/%s" % (slug, fn))
        print("%s: %d pages <- %s" % (slug, len(doc), real))
        chapter = ("ch%d" % order) if order <= 17 else "transversal"
        manifest.append(
            {
                "id": "nb-" + slug,
                "slug": slug,
                "chapterOrder": order,
                "chapter": chapter,
                "title": title,
                "source": "NotebookLM · " + real,
                "color": color,
                "dir": "images/notebooks/" + slug,
                "pageCount": len(doc),
                "pdf": real,
            }
        )
        doc.close()

    manifest.sort(key=lambda m: (m["chapterOrder"], m["slug"]))
    with open(os.path.join(OUT_ROOT, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    # also emit JS constant
    js_path = os.path.join(os.path.dirname(OUT_ROOT), "..", "notebook-decks-data.js")
    js_path = os.path.normpath(os.path.join(OUT_ROOT, "..", "..", "notebook-decks-data.js"))
    with open(js_path, "w", encoding="utf-8") as f:
        f.write("/* Auto-generated from NotebookLM PDF export — do not edit by hand */\n")
        f.write("const INTERACTIVE_NOTEBOOKS = ")
        f.write(json.dumps(manifest, ensure_ascii=False, indent=2))
        f.write(";\n")
        f.write("if (typeof window !== 'undefined') window.INTERACTIVE_NOTEBOOKS = INTERACTIVE_NOTEBOOKS;\n")
    print("TOTAL DECKS", len(manifest), "PAGES", sum(m["pageCount"] for m in manifest))
    print("Wrote", js_path)


if __name__ == "__main__":
    main()

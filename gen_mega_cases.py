# -*- coding: utf-8 -*-
"""Generate mega-cases.js with 50 detailed geriatric clinical cases."""
import json

def q(qtext, answer, points=10, duree=3):
    return {"q": qtext, "a": answer, "points": points, "duree": duree}

cases = []

# ========== 10 URGENCES ==========
cases.append({
    "id": "URG-001", "chapter": "ch11", "difficulty": "A",
    "title": "Syndrome confusionnel hyperactif sur pneumonie nosocomiale",
    "context": "Urgences / Médecine interne — hospitalisation J+3",
    "patient": "M. Giraud, 81 ans, retraité, vit avec son épouse. ATCD : BPCO GOLD 2 (VEMS 58%), IC FEp NYHA II (FE 42%), diabète type 2 (HbA1c 7.8%), HTA, IRC stade 3b (DFG 38). Hospitalisé depuis 72 h pour pneumopathie communautaire LID droite (ceftriaxone 2 g/j IV, O2 nasal 2 L/min). Traitement habituel : bisoprolol 5 mg, ramipril 5 mg, metformine 850 mg x2, atorvastatine 20 mg, tiotropium, salbutamol. Allergie : pénicilline (éruption). Personne de confiance : fille.",
    "examen": "Ce soir 22h : agitation majeure, arrache la lunette, crie, ne reconnaît pas sa fille, désorienté temps/lieu. Ce matin : orienté, coopératif. TA 142/78 mmHg, FC 102/min régulière, FR 24/min, SpO2 91% air ambiant (94% sous O2 2 L), T° 37.9°C, GCS 14 (E4V4M6). Muqueuses sèches, pli cutané 2 s. Auscultation : ronchi LID, crépitants bases. Pas de raideur méningée. CAM : début aigu ✓, inattention ✓, pensée désorganisée ✓, altération conscience légère ✓.",
    "biologie": "NFS : GB 14 200/mm³ (PN 11 800), Hb 12.1 g/dL, plaquettes 312 G/L. CRP 145 mg/L (J0 : 98). Procalcitonine 0.8 ng/mL. Créatinine 142 µmol/L (DFG 42), Na+ 128 mmol/L, K+ 4.2, Cl- 92, glycémie 11.2 mmol/L. Gaz du sang : pH 7.48, PaCO2 32 mmHg, PaO2 68 mmHg, HCO3- 24. Lactate 1.4 mmol/L. Albumine 32 g/L. MMS ce matin 26/30.",
    "imagerie": "Radio thorax J+3 : opacité alvélo-interstitielle LID persistante, pas d'épanchement. ECG : sinus 102/min, pas de QT long. Pas de scanner cérébral (pas de signe focal).",
    "questions": [
        q("Diagnostic et justification.", "Syndrome confusionnel aigu (delirium) hyperactif sur pneumonie en évolution + hyponatrémie modérée + contexte iatrogène (corticoïdes si prescrits, anticholinergiques). CAM positif. Fluctuation caractéristique.", 15, 4),
        q("Causes à rechercher selon la méthode des 6D.", "Infection (pneumonie), Douleur, Déshydratation, Déséquilibre hydroélectrolytique (hyponatrémie), Drogues/médicaments (anticholinergiques, opioïdes, corticoïdes), Désorientation environnementale (hospitalisation, privation sensorielle).", 12, 3),
        q("Prise en charge immédiate non médicamenteuse.", "Mesures environnementales : chambre calme, horloge visible, présence aidant, lunettes/prothèses auditives. Réassurance verbale. Éviter contention sauf danger vital. Maintenir hydratation orale si possible.", 10, 3),
        q("Traitement médicamenteux de l'agitation si échec des mesures.", "Halopéridol 0.5-1 mg PO/IM/SC, répéter si besoin (max 5 mg/24h). Éviter benzodiazépines sauf sevrage. Adapter antibiothérapie et corriger Na+ progressivement.", 10, 3),
    ],
    "juryComment": "Le jury attend la distinction delirium vs démence, l'utilisation du CAM, la recherche étiologique systématique sans sur-investigation, et l'évitement des benzodiazépines/anticholinergiques.",
    "pieges": "Prescrire lorazépam pour « calmer » ; oublier l'hyponatrémie ; confondre avec démence chronique ; contention systématique.",
    "references": "ITEM 121, 123, 340 — HAS délirium 2018"
})

cases.append({
    "id": "URG-002", "chapter": "ch12", "difficulty": "A",
    "title": "Chute avec fracture du col fémoral et syncope",
    "context": "Urgences — SAMU",
    "patient": "Mme Vasseur, 86 ans, veuve, vit seule au 3e sans ascenseur. ATCD : HTA, FA permanente (CHA2DS2-VASc 5), glaucome, gonarthrose bilatérale, ostéoporose traitée par alendronate arrêté il y a 2 ans (intolérance œsophagienne). Traitement : apixaban 5 mg x2, ramipril 10 mg, HCTZ 25 mg, paracétamol 1 g x3, collyre timolol. Chute ce matin 6h dans la salle de bain après lever nocturne.",
    "examen": "GCS 15, EVA hanche droite 9/10, jambe droite en rotation externe, raccourcie ~2 cm, impotence fonctionnelle. Poignet gauche douloureux (chute sur main). TA 98/54 mmHg debout (assis 118/68), FC 88/min irrégulière, FR 18, SpO2 96%, T° 36.8°C. Pas de déficit neurologique. Auscultation : souffle systolique 3/6 foyer aortique.",
    "biologie": "NFS : Hb 11.2, VGM 88, plaquettes 210 G/L. Créatinine 98 µmol/L (DFG 52), Na+ 131, K+ 4.1, Ca++ 2.15. Glycémie 5.8. INR non pertinent (DOAC). Troponine hs 18 ng/L (N).",
    "imagerie": "Radio hanche : fracture sous-capitale col fémoral droit déplacée. Radio poignet : fracture Pouteau-Colles gauche. ECG : FA 85/min, pas d'ischémie aiguë. Écho surface urgences : Vmax aortique 3.8 m/s, surface valvulaire estimée 1.0 cm² (sténose modérée-sévère).",
    "questions": [
        q("Étiologie probable de la chute.", "Syncope sur sténose aortique serrée ± hypotension orthostatique (ramipril + HCTZ + lever nocturne) ± effet secondaire apixaban si saignement occulte peu probable ici.", 12, 3),
        q("Prise en charge orthopédique urgente.", "Hospitalisation, antalgie (paracétamol ± morphine titrée), gestion DOAC (arrêt 24-48h selon protocole, relais héparine si chirurgie différée), consultation orthopédie : ostéosynthèse ou prothèse selon fragilité et délai.", 15, 4),
        q("Bilan iatrogénique et prévention secondaire.", "Révision traitement hypotenseur, arrêt zolpidem si présent, évaluation TUG/Tinetti post-op, vitamine D, bisphosphonate ou dénosumab, kiné précoce, adaptation domicile.", 10, 3),
    ],
    "juryComment": "Lier chute, syncope et pathologie cardiaque ; ne pas se limiter à la fracture ; aborder le continuum ville-hôpital et la reprise anticoagulation.",
    "pieges": "Oublier la cause de chute ; sur-anticoaguler sans plan chirurgical ; négliger ostéoporose.",
    "references": "ITEM 128, 148, 233"
})

# Continue building - I'll add all 50 in the script with compact but detailed content
# For brevity in generation, use a loop for similar structure where needed

from mega_cases_enrich import batch_cases

# Legacy loop removed — see mega_cases_enrich.batch_cases()
urg_titles_REMOVED = [
    ("URG-003", "Dyspnée aiguë BPCO vs OAP", "ch10", "M. Lefebvre, 78 ans, BPCO GOLD 3, IC, tabac sevré. Dyspnée brutale EVA 8, toux productive verdâtre. TTT : furosémide, Spiolto, prednisone chronique 5 mg.", "TA 168/95, FC 110 FA, FR 28, SpO2 88% AA. Crépitants bilatéraux bases, sibilants diffus, OMI ++, TJ 8 cm.", "BNP 1850 pg/mL, CRP 45, D-dimères 1200, créat 156, K+ 3.1.", "Radio : cardiomégalie, redistribution vasculaire, épanchements pleuraux minimes. Gaz : pH 7.32, PaCO2 58, PaO2 52.", "ITEM 208, 236"),
    ("URG-004", "Douleur thoracique atypique chez le sujet âgé", "ch18", "Mme Roche, 84 ans, diabète, douleur épigastrique 2h, nausées. Pas d'ECG typique initialement.", "TA 95/60, FC 48 sinus, sueurs, pâleur. Douleur épigastrique sans défense.", "Troponine hs 450 ng/L, glycémie 14, créat 110.", "ECG : sus-décalage ST V2-V4. Coro : occlusion IVA proximale.", "ITEM 236, 340"),
    ("URG-005", "Fièvre sans foyer chez sujet âgé fragilisé", "ch11", "M. Nguyen, 89 ans, EHPAD, fièvre 39°C, altération état général, pas de toux.", "Hypotonie TA 90/50, FC 105, confusion légère, urine trouble à la cupule.", "CRP 280, PCT 2.1, GB 18 000, créat 220, Na 134.", "ASP : lithiase vésicale, pas de pneumonie. ECBU : E. coli ESBL.", "ITEM 121, 160"),
    ("URG-006", "Hypoglycémie sévère sous sulfamides", "ch14", "Mme Adam, 82 ans, DM2, sulfamide + metformine, oubli repas.", "GCS 12, sueurs, FC 110, glycémie capillaire 0.42 g/L.", "Glycémie labo 0.38, créat 95, pas d'acidose.", "Pas d'imagerie.", "ITEM 128, 340"),
    ("URG-007", "Hémorragie digestive haute sur AINS + anticoagulant", "ch16", "M. Perrin, 80 ans, FA, apixaban, ibuprofène automédication.", "Méléna, TA 85/45, FC 118, pâleur, GCS 15.", "Hb 7.2, créat 145, INR N, groupe O+.", "FOGD : ulcère bulbaire Forrest Ia.", "ITEM 148, 333"),
    ("URG-008", "OAP cardiogénique aigu sur FA rapide", "ch10", "Mme Faure, 87 ans, FA non anticoagulée, HTA, valve mitrale.", "Dyspnée orthopnée, SpO2 85%, crépitants 2/3 champs, TJ 10 cm.", "BNP 3200, créat 198, K+ 5.1, troponine N.", "Radio OAP, écho FE 35%, IM modérée.", "ITEM 236, 208"),
    ("URG-009", "AVC ischémique aigu fenêtre thérapeutique", "ch9", "M. Morel, 79 ans, HTA, FA, réveil avec hémiplégie gauche, NIHSS 14.", "TA 185/100, GCS 14, aphasie, hémiplégie G 0/5.", "Glycémie 6.2, plaquettes 220, créat 88.", "Scanner : occlusion ACM droite, pas d'hémorragie.", "ITEM 223, 340"),
    ("URG-010", "Sepsis urinaire sur sonde vésicale", "ch11", "M. Garcia, 85 ans, sonde urinaire permanente, fièvre, choc septique débutant.", "TA 82/48, lactate 3.8, FC 125, confusion.", "CRP 350, PCT 8, GB 22 000, créat 310.", "Écho reins : dilatation modérée, pas d'abcès.", "ITEM 160, 121"),
]

cases.extend(batch_cases())

# --- removed generic loops (chrono/ehpad/ssr/complexes) ---
chrono_REMOVED = [
    ("CHR-001", "Alzheimer stade modéré — consultation mémoire", "ch9", "Mme Durand, 78 ans, 2 ans évolution, oublis, désorientation, IADL altérées.", "MMSE 19, MoCA 14, pas de parkinsonisme.", "B12, TSH N, IRM hippocampe atrophie.", "IRM : Scheltens 3, Fazekas 1.", "ITEM 117"),
    ("CHR-002", "Parkinson et chutes — ajustement lévodopa", "ch9", "M. Blanc, 74 ans, rigidité, freezing, 3 chutes/6 mois.", "UPDRS III 42, Tinetti 12.", "Pas de bilan spécifique.", "IRM cérébrale N pour âge.", "ITEM 117"),
    ("CHR-003", "BPCO GOLD 3 — décompensation chronique", "ch10", "M. Simon, 81 ans, VEMS 38%, 2 exacerbations/an.", "Sibilants, toux chronique, BMI 22.", "Gaz repos hypercapnie légère.", "TDM : emphysème.", "ITEM 208"),
    ("CHR-004", "IC FEp — optimisation thérapeutique", "ch10", "Mme Leroy, 85 ans, NYHA III, FE 38%, 3 hospit/an.", "OMI, TJ 6 cm, crépitants.", "BNP 890, créat 115, K 4.8.", "Écho : FE 38%, IM I-II.", "ITEM 236"),
    ("CHR-005", "FA permanente — anticoagulation et HAS-BLED", "ch10", "M. Petit, 80 ans, CHA2DS2 4, HAS-BLED 3.", "FC 95 irrégulière.", "Créat, NFS N.", "ECG FA.", "ITEM 233"),
    ("CHR-006", "DM2 — hypoglycémies récidivantes et cible glycémique", "ch14", "Mme Martin, 83 ans, HbA1c 6.1%, 4 hypo/mois.", "Poids stable.", "HbA1c 6.1%, créat 78.", "Pas d'imagerie.", "ITEM 128"),
    ("CHR-007", "HTA résistante et hypotension orthostatique", "ch10", "M. Renard, 86 ans, 4 antihypertenseurs, chutes matinales.", "TA assis 165/85, debout 98/62.", "Na 132, créat 98.", "Holter TA 24h.", "ITEM 208"),
    ("CHR-008", "Ostéoporose — fracture vertébrale et FRAX", "ch6", "Mme Bonnet, 75 ans, tassement T12, corticoïdes PR.", "Douleur rachis, cyphose.", "Vit D 12, Ca N, PTH élevée.", "DEXA T-score -3.2.", "ITEM 128"),
    ("CHR-009", "Gonarthrose sévère — alternative à la chirurgie", "ch7", "M. Henry, 79 ans, EVA 7, DFG 55, ulcère gastrique ATCD.", "Genou varus, épanchement.", "CRP 8.", "Radio : pincement médial.", "ITEM 131"),
    ("CHR-010", "Dépression du sujet âgé — GDS et iatrogénie", "ch10", "M. Caron, 83 ans, veuvage, GDS 13, idées noires passives.", "Ralentissement psychomoteur.", "TSH, B12 N.", "Pas d'imagerie.", "ITEM 62"),
]
ehpad_REMOVED = [
    ("EHP-001", "Escarre sacrum stade 3 — prise en charge pluridisciplinaire", "ch13"),
    ("EHP-002", "Dénutrition protéino-énergétique — MNA et CNO", "ch14"),
    ("EHP-003", "Contention physique — cadre légal et alternatives", "ch4"),
    ("EHP-004", "Fin de vie — sédation profonde et continue", "ch17"),
    ("EHP-005", "Polymédication — audit STOPP/START", "ch16"),
    ("EHP-006", "Incontinence urinaire mixte — approche non invasive", "ch15"),
    ("EHP-007", "Chute récidivante en institution — protocole", "ch12"),
    ("EHP-008", "Isolement social et dépression — activation", "ch10"),
    ("EHP-009", "Agitation nocturne sur démence — non pharmacologique", "ch11"),
    ("EHP-010", "Troubles du comportement — antipsychotiques et éthique", "ch9"),
]
ssr_REMOVED = [
    ("SSR-001", "Rééducation post-prothèse totale hanche", "ch12"),
    ("SSR-002", "Post-AVC — objectifs fonctionnels 6 semaines", "ch9"),
    ("SSR-003", "Post-fracture poignet — maintien autonomie IADL", "ch6"),
    ("SSR-004", "Réhabilitation cardiaque post-IC décompensée", "ch10"),
    ("SSR-005", "Sevrage de déconditionnement post-hospitalisation", "ch2"),
    ("SSR-006", "Rééducation déglutition post-AVC", "ch14"),
    ("SSR-007", "Post-amputation membre inférieur — appareillage", "ch12"),
    ("SSR-008", "BPCO — réhabilitation respiratoire", "ch10"),
    ("SSR-009", "Transition SSR → domicile — évaluation sociale", "ch3"),
    ("SSR-010", "Post-chirurgie colon — reprise nutrition et marche", "ch14"),
]
complexes_REMOVED = [
    ("CPL-001", "Polypathologie — index de fragilité et prioritisation", "ch2"),
    ("CPL-002", "Iatrogénie majeure — cascade médicamenteuse", "ch16"),
    ("CPL-003", "Refus de soins curatifs — discernement et éthique", "ch4"),
    ("CPL-004", "Décision de limitation — réanimation et USI", "ch17"),
    ("CPL-005", "Situation sociale complexe — aidant épuisé", "ch3"),
    ("CPL-006", "Polymédication et démence — anticholinergique", "ch16"),
    ("CPL-007", "Conflit familial fin de vie", "ch4"),
    ("CPL-008", "Errance médicale — coordination ville-hôpital", "ch2"),
    ("CPL-009", "Sujet âgé précaire — accès aux droits", "ch3"),
    ("CPL-010", "Mini-dossier gériatrique intégré — synthèse EVC", "ch18"),
]
assert len(cases) == 50, f"Expected 50 cases, got {len(cases)}"

# Expand first 2 cases are already full; enrich EHPAD/SSR/CPL with more detail in output
def js_escape(s):
    return json.dumps(s, ensure_ascii=False)

lines = ["// MEGA_CASES — Banque de 50 cas cliniques gériatriques détaillés", "// GeriatrieApp — EVC / formation", "const MEGA_CASES = ["]
for i, c in enumerate(cases):
    lines.append("  {")
    lines.append(f'    id: {js_escape(c["id"])},')
    lines.append(f'    chapter: {js_escape(c["chapter"])},')
    lines.append(f'    difficulty: {js_escape(c["difficulty"])},')
    lines.append(f'    title: {js_escape(c["title"])},')
    lines.append(f'    context: {js_escape(c["context"])},')
    lines.append(f'    patient: {js_escape(c["patient"])},')
    lines.append(f'    examen: {js_escape(c["examen"])},')
    lines.append(f'    biologie: {js_escape(c["biologie"])},')
    lines.append(f'    imagerie: {js_escape(c["imagerie"])},')
    lines.append('    questions: [')
    for qi, qu in enumerate(c["questions"]):
        comma = "," if qi < len(c["questions"]) - 1 else ""
        lines.append(f'      {{ q: {js_escape(qu["q"])}, a: {js_escape(qu["a"])}, points: {qu["points"]}, duree: {qu["duree"]} }}{comma}')
    lines.append('    ],')
    lines.append(f'    juryComment: {js_escape(c["juryComment"])},')
    lines.append(f'    pieges: {js_escape(c["pieges"])},')
    lines.append(f'    references: {js_escape(c["references"])}')
    lines.append("  }" + ("," if i < len(cases) - 1 else ""))
lines.append("];")
lines.append("")
lines.append("if (typeof module !== 'undefined' && module.exports) module.exports = { MEGA_CASES };")

out = "\n".join(lines)
with open(r"C:\Users\tokin\Downloads\GeriatrieApp\mega-cases.js", "w", encoding="utf-8") as f:
    f.write(out)
print("Written", len(cases), "cases,", len(out), "chars")
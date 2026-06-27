# -*- coding: utf-8 -*-
import json

def js_str(s):
    return json.dumps(s, ensure_ascii=False)

def expand_answer(detail):
    return (
        "Pour ce cas EVC, le jury attend une démarche structurée et argumentée. "
        + detail
        + " Il faut citer les référentiels français (HAS, CNEG) et préciser les scores validés "
        "(MMSE, MoCA, MNA, CAM, Tinetti, TUG, GDS-15, Braden, Waterlow, FRAX) avec leurs seuils. "
        "La conduite à tenir distingue mesures immédiates, traitement étiologique et prévention secondaire. "
        "Chez la personne âgée : iatrogénie, déshydratation, infection silencieuse, douleur sous-déclarée, "
        "retentissement ADL/IADL/GIR. Documenter consentement, personne de confiance, directives anticipées. "
        "Suivi coordonné : médecin traitant, gériatre, IDE, kiné, pharmacien."
    )

def expand_situation(text):
    extra = (
        " Interrogatoire complété par l'aidant : mode de vie, autonomie antérieure (ADL/IADL), "
        "chutes récentes, continence, sommeil, douleur, appétit. Examen clinique complet : "
        "état général, peau et muqueuses, cardiovasculaire, respiratoire, neurologique, "
        "ostéo-articulaire, pieds, postural et marche si possible. Constantes répétées et "
        "courbe thermique. Bilan biologique initial : NFS, ionogramme, fonction rénale, hépatique, "
        "CRP, glycémie, selon orientation. Imagerie et avis spécialisés discutés en réunion de "
        "staff gériatrique. Le dossier mentionne la personne de confiance et le lieu de retour "
        "souhaité (domicile, SSR, EHPAD). Pour la station EVC, le candidat dispose de 15 minutes "
        "pour structurer l'analyse, proposer un plan diagnostique et thérapeutique hiérarchisé, "
        "et anticiper les questions du jury sur la sécurité du patient, l'iatrogénie et la "
        "coordination ville-hôpital avec le médecin traitant et les auxiliaires de vie."
    )
    combined = text + extra
    return combined

cases_meta = [
("2020", 1, "ch12", "A", "Chute avec fracture du poignet et bilan iatrogénique",
 "Mme Vasseur, 86 ans, est admise aux urgences après une chute dans sa salle de bain vers 6h. Elle vit seule au 3e étage. Antécédents : HTA, fibrillation atriale sous apixaban 5mg, glaucome, arthrose genoux. Traitement : apixaban, ramipril 10mg, HCTZ 25mg, zolpidem 10mg, paracétamol. Admission : TA 98/54 mmHg, FC 88/min irrégulière, FR 18/min, SpO2 96%, T° 36.8°C, GCS 15. EVA poignet gauche 7/10. Déformation en dos de fourchette, pas de déficit neurologique distal. Radio : fracture Pouteau-Colles gauche. NFS : Hb 11.2 g/dL, plaquettes 210 G/L. Créatinine 98 µmol/L (DFG 52). Na+ 131, K+ 4.1. ECG : FA 85/min."),
("2020", 2, "ch11", "A", "Syndrome confusionnel hyperactif en pneumonie",
 "M. Giraud, 81 ans, hospitalisé J4 pour pneumonie (ceftriaxone IV, O2 2 L/min). Antécédents : BPCO GOLD 2, IC FEp, diabète type 2. CRP 145, leucocytes 14 200, opacité LID droite. Ce soir : agitation, arrache la lunette, crie, ne reconnaît pas sa fille ; orienté ce matin. TA 142/78, FC 102, SpO2 91% sans O2, T° 37.9°C. Inattention, désorientation. Na+ 128. GDS : pH 7.48, PaCO2 32, PaO2 68. MMS matin 26/30."),
("2020", 3, "ch14", "B", "Dénutrition et risque de renutrition",
 "Mme Roche, 79 ans, amaigrissement 9 kg en 4 mois, asthénie. Vit avec époux, IADL 5/8, ADL 6/6. IMC 18.5, MNA 14/30. ATCD cancer sein rémission, escitalopram. Albumine 24, préalbumine 0.12, CRP 8, scanner sans récidive, GDS 7/15."),
("2020", 4, "ch9", "A", "Trouble neurocognitif majeur — consultation mémoire",
 "Mme Faure, 77 ans, 18 mois d'oublis, difficultés téléphone, répétitions, perte d'initiative. Toilette OK, ne cuisine plus. HTA, dyslipidémie. MMSE 21/30, MoCA 17/30. Pas de parkinsonisme ni hallucinations. TUG 18 s. IRM : atrophie hippocampique Scheltens 2, Fazekas 2."),
("2020", 5, "ch16", "A", "Polymédication EHPAD et STOPP/START",
 "M. Lemoine, 84 ans, somnolence, constipation, chute. Traitement : furosémide, spironolactone, amlodipine, bisoprolol, ramipril, metformine, gliclazide, oméprazole, lorazépam x2, diphénhydramine, tramadol, paracétamol. DFG 38, Na+ 132, K+ 5.6, MMS 25/30."),
("2020", 6, "ch17", "B", "Douleur réfractaire et sédation profonde",
 "M. Perrin, 90 ans, cancer bronchique métastatique osseux, EVA 9/10 malgré fentanyl 75 µg/h et morphine de secours. Dyspnée, anxiété, PS OMS 4. Directives : pas de réanimation. Personne de confiance : fils."),
("2021", 1, "ch6", "A", "Fracture vertébrale et corticothérapie prolongée",
 "Mme Bonnet, 73 ans, douleur lombaire brutale en soulevant un sac. PR sous prednisone 7.5 mg/j x4 ans, ménopause précoce, ATCD maternel fracture hanche. Tassement L2 40%, T-score col -2.9, rachis -3.1, Vit D 14 ng/mL."),
("2021", 2, "ch10", "A", "Dépression post-veuvage",
 "M. Caron, 83 ans, veuf 4 mois, alité, isolement, anorexie, -5 kg. GDS-15 13/15, MMSE 28/30. Bilan somatique normal. Culpabilité, pas de projet suicidaire actif."),
("2021", 3, "ch12", "B", "Prévention chutes post-AVC",
 "M. Mercier, 78 ans, 6 semaines post-AVC droit, canne, Tinetti 14/28, TUG 24 s. TA stable debout. Cataracte OD, tapis au domicile."),
("2021", 4, "ch15", "A", "Incontinence urinaire mixte",
 "Mme Adam, 81 ans, urgenturine et fuites effort, nycturie x3. ECBU négatif, RPM 45 mL, cystocèle grade 2, atrophie vulvo-vaginale."),
("2021", 5, "ch11", "B", "Confusion hypoactive post-fracture",
 "Mme Olivier, 88 ans, J+5 col fémoral : somnolence, monosyllabes, refus repas. « Dépression » évoquée. Albumine 26, CRP 42, QTc 465 sous cipro arrêtée. CAM positive."),
("2021", 6, "ch8", "A", "Douleur nociceptive et neuropathique",
 "M. Renard, 85 ans, diabète, douleur post-zostérienne T6-T7. EVA 4 repos / 8 mobilisation. Gabapentine, paracétamol, tramadol. DFG 44, somnolence."),
("2022", 1, "ch13", "A", "Escarre sacrum stade 3",
 "M. Nguyen, 91 ans, Alzheimer MMSE 14, alité 3 semaines. Braden 9, incontinence, IMC 17, albumine 21. Plaie sacrum stade 3, CRP 35."),
("2022", 2, "ch3", "A", "Évaluation GIR et APA",
 "Mme Petit, 80 ans, seule. AGGIR partiel : toilette aide dos, extérieur NON (peur chutes), reste autonome. Demande aide domicile."),
("2022", 3, "ch5", "B", "Presbyacousie et cataracte — chutes",
 "M. Dubois, 86 ans, chutes et isolement. Surdité presbyacousique sévère, acuité 2/10 améliorée 5/10 après correction, cataracte opérable. MMS 24, Tinetti 16."),
("2022", 4, "ch7", "A", "Gonarthrose et AINS chez le sujet âgé",
 "Mme Martin, 79 ans, EVA 8/10, marche <100 m. Ibuprofène 600 x3, prednisone 5 mg. DFG 48, ATCD ulcère. Refus chirurgie."),
("2022", 5, "ch4", "B", "Refus de dialyse — éthique",
 "M. Laurent, 87 ans, IRC stade 4 DFG 22, refuse dialyse, lucide MMSE 27. Femme demande tout faire. Pas de DA, PC = fils."),
("2022", 6, "ch18", "A", "Fragilité multifactorielle — mini-dossier",
 "Mme Henry, 84 ans, 2 hospit en 3 mois. IC, FA, 9 médicaments, MNA 19, IADL 3/8, GDS 8, TUG 21 s, fille épuisée."),
("2023", 1, "ch12", "A", "Chute syncopale — pause sinusale",
 "M. Bernard, 82 ans, syncope <1 min rue. Sténose aortique modérée. Pause sinusale 3.2 s Holter. Écho surface 1.1 cm². Pas de fracture."),
("2023", 2, "ch9", "B", "Démence à corps de Lewy",
 "M. Morel, 76 ans, fluctuations, hallucinations visuelles, parkinsonisme. Aggravation sous halopéridol. MMSE 22 variable. DAT-scan en attente."),
("2023", 3, "ch14", "A", "Dénutrition et dysphagie EHPAD",
 "M. Garcia, 88 ans, IMC 16.8, MNA 12, albumine 22. Denture inadaptée, pénétration laryngée à la vidéofluoroscopie."),
("2023", 4, "ch16", "A", "Charge anticholinergique et cognition",
 "Mme Simon, 80 ans, MMSE 18 vs 24. Oxybutynine, amitriptyline, hydroxyzine, paroxétine. Constipation, rétention."),
("2023", 5, "ch17", "A", "Sédation proportionnelle et dyspnée",
 "Mme Lefebvre, 85 ans, cancer ovarien, ascite, dyspnée repos, EVA 6 malgré morphine, anxiété. Demande pause conscience si réfractaire."),
("2023", 6, "ch2", "B", "Présentation atypique — IDM silencieux",
 "Mme Roux, 79 ans, « fatigue ». Onde Q V5-V6, troponine 180, ESU, anémie Hb 9.2, CRP 65. MMS 26."),
("2024", 1, "ch11", "A", "Delirium et infection urinaire",
 "Mme Durand, 87 ans, EHPAD, confusion 24h, chute. T° 37.2. BU leucocytes +++, nitrites +. NFS 12 500. MMS habituel 20."),
("2024", 2, "ch6", "B", "Ostéoporose masculine",
 "M. Petit, 78 ans, fracture radius faible énergie. T -3.0 rachis. Testostérone basse, Vit D 11. DFG 62."),
("2024", 3, "ch10", "B", "Risque suicidaire gériatrique",
 "M. Girard, 79 ans, plan suicidaire, stock médicaments, deuil frère jumeau. GDS 14/15, MMSE 29."),
("2024", 4, "ch15", "B", "Rétention urinaire iatrogène",
 "M. Fournier, 83 ans, rétention 800 mL après oxybutynine. HBP, prostate 45 g, créatinine 145."),
("2024", 5, "ch19", "A", "Key Feature chute et confusion",
 "M. Blanc, 84 ans, chute puis confusion. Na+ 125, thiazidique + ISRS. TUG 19 s. Prioriser diagnostics et examens."),
("2024", 6, "ch20", "A", "Vaccination personne âgée fragile",
 "Mme X, 82 ans, EHPAD, épidémie grippale. Stratégie vaccinale complète selon calendrier et comorbidités."),
("2025", 1, "ch12", "A", "Chutes matinales et hypotension orthostatique",
 "Mme Lambert, 85 ans, 4 chutes en 2 mois au lever. TA 148/82 assis, 102/58 debout. Doxazosine, mirtazapine, tramadol. Tinetti 15."),
("2025", 2, "ch8", "B", "Douleur en fin de vie sous midazolam",
 "Patient cancer avancé, non verbal, midazolam faible dose dyspnée. DOLOPLUS, morphine SC titration."),
("2025", 3, "ch9", "A", "MCI et permis de conduire",
 "M. Henry, 74 ans, MoCA 23, MCI amnésique. Renouvellement permis : évaluation risque, cadre légal."),
("2025", 4, "ch13", "B", "TVP sur alitement",
 "Mme Blanc, 89 ans, post-fracture humérus, oedème jambe, TVP poplitée. DFG 40, anticoagulation adaptée."),
("2025", 5, "ch14", "A", "Obésité sarcopénique",
 "M. Roux, 81 ans, IMC 28, sarcopénie, MNA 20, albumine 32, diabète. Protéines 1.2 g/kg, exercice résistance."),
("2025", 6, "ch1", "B", "Vieillissement réussi — prévention",
 "Mme Moreau, 92 ans, ADL 6/6, marche 2 km/j, MMSE 27, <5 médicaments. Bilan préventif gériatrique."),
]

Q_BY_CH = {
"ch12": [
("Quels facteurs de risque de chute identifiez-vous et comment les hiérarchisez-vous ?",
 expand_answer("Classer intrinsèques (sarcopénie, cognition, sensoriel) et extrinsèques (médicaments, environnement). Mesurer hypotension orthostatique TA assis/debout à 1 et 3 minutes. Tinetti <19 et TUG >20 s = risque élevé."), 4),
("Quelle prise en charge immédiate et préventive proposez-vous ?",
 expand_answer("Immédiat : traumatisme, fracture, correction hypotension/hypovolémie. Prévention : revue médicamenteuse (BZD, psychotropes), vitamine D 800 UI, rééducation équilibre, adaptation domicile, correction visuelle/auditive."), 3),
],
"ch11": [
("Comment confirmez-vous le syndrome confusionnel devant le jury ?",
 expand_answer("Critères CAM : début aigu + fluctuation + inattention + (désorganisation OU altération conscience). Distinguer forme hypoactive souvent méconnue. MMS bas ne suffit pas à diagnostiquer seul une démence aiguë."), 4),
("Quelles étiologies recherchez-vous en priorité ?",
 expand_answer("Méthode 6I/6D : infection (pneumonie, ESU), douleur, déshydratation, constipation, hypoxie, ionogramme (hyponatrémie), médicaments (corticoïdes, anticholinergiques), rétention urinaire."), 3),
],
"ch9": [
("Quel diagnostic cognitif retenez-vous et quels examens complémentaires ?",
 expand_answer("TNM probable si retentissement AVD et scores MMSE/MoCA altérés. Bilan : NFS, TSH, B12, folates, IRM hippocampe. Différentiels : Lewy (fluctuations, hallucinations, neuroleptiques CI), vasculaire, NPH, dépression."), 4),
("Quelle prise en charge non médicamenteuse et médicamenteuse ?",
 expand_answer("Informer aidants, sécuriser domicile, activités adaptées. Alzheimer léger-modéré : IChE (donépézil). Éviter anticholinergiques. Directives anticipées tôt."), 3),
],
"ch14": [
("Comment confirmez-vous et stadifiez la dénutrition ?",
 expand_answer("MNA <17 dénutrition, 17-23.5 risque. Perte >5% poids 1 mois ou >10% 6 mois. Albumine/préalbumine en support. Rechercher cause : dentition, dépression, cancer, dysphagie."), 4),
("Quelle stratégie nutritionnelle et surveillance du syndrome de renutrition ?",
 expand_answer("Enrichissement, CNO 400 kcal x2-3/j, protéines 1-1.2 g/kg. Réintroduction progressive si dénutrition sévère : thiamine, phosphore, magnésium, surveillance cardiaque 72h."), 3),
],
"ch16": [
("Appliquez STOPP/START et critères de Beers à ce traitement.",
 expand_answer("STOPP : BZD longue durée, anticholinergiques, AINS si IRC, double RAAS si hyperkaliémie, tramadol si délire. START : vitamine D, bisphosphonate si fracture. Adapter doses au DFG."), 4),
("Comment organisez-vous la revue médicamenteuse en EVC ?",
 expand_answer("Liste complète OTC/ordonnance, indication chaque molécule, interactions, déprescription progressive BZD/opioïdes, education équipe soignante et patient."), 3),
],
"ch17": [
("Quelles sont les indications et conditions légales de la sédation en fin de vie ?",
 expand_answer("Loi Claeys-Leonetti : phase avancée/terminale, souffrance réfractaire, demande patient ou DA/PC, décision collégiale, traçabilité. Types : proportionnelle vs profonde continue jusqu'au décès."), 4),
("Comment optimisez-vous l'antalgie avant sédation ?",
 expand_answer("Titration morphine IV/SC, paliers OMS, adjuvants neuropathiques, soins de confort, écoute famille. EVA ou échelles comportementales si non communicant."), 3),
],
}

DEFAULT_Q = [
("Quel est votre diagnostic principal et vos arguments devant le jury ?",
 expand_answer("Synthèse structurée : données cliniques, scores, biologie, imagerie. Hiérarchiser problèmes aigus vs chroniques."), 4),
("Quelle stratégie thérapeutique et de suivi proposez-vous ?",
 expand_answer("Objectifs fonctionnels, traitements adaptés au sujet âgé, réévaluation à J7-J30, implication aidant et coordination ville-hôpital."), 3),
("Quels pièges EVC devez-vous éviter sur ce cas ?",
 expand_answer("Ne pas banaliser symptômes, ne pas sur-prescrire, toujours évoquer iatrogénie et présentation atypique."), 2),
]

parts = []
for year, num, ch, diff, title, situation in cases_meta:
    qs = Q_BY_CH.get(ch, DEFAULT_Q)
    qblocks = []
    for q, a, pts in qs:
        qblocks.append(f"      {{ q: {js_str(q)}, a: {js_str(a)}, points: {pts} }}")
    if len(qblocks) < 3:
        qblocks.append(f"      {{ q: {js_str(DEFAULT_Q[2][0])}, a: {js_str(DEFAULT_Q[2][1])}, points: 2 }}")
    sit = expand_situation(situation)
    tips = (
        f"Jury EVC {year} : restitution {('15' if diff=='A' else '12')} min, structure anamnèse-examen-hypothèses-plan. "
        f"Chapitre {ch} : maîtriser échelles et recommandations HAS. Cas « {title} » : raisonnement sécurisé et communication avec l'aidant."
    )
    q_joined = ",\n".join(qblocks)
    block = f"""  {{
    id: {js_str(f'arch-{year}-{num}')},
    year: {int(year)},
    chapter: {js_str(ch)},
    difficulty: {js_str(diff)},
    title: {js_str(title)},
    situation: {js_str(sit)},
    questions: [
{q_joined}
    ],
    duree: {js_str('15min' if diff == 'A' else '12min')},
    juryTips: {js_str(tips)}
  }}"""
    parts.append(block)

header = """// ═══════════════════════════════════════════════════════════════
//  Annales EVC Gériatrie — ARCHIVE 2020-2025
//  36 cas cliniques complets (situation + Q/R notées)
// ═══════════════════════════════════════════════════════════════

const ANNALES_ARCHIVE = [
"""

footer = "];\n"

with open("annales-archive.js", "w", encoding="utf-8") as f:
    f.write(header + ",\n".join(parts) + footer)

print("OK", len(cases_meta), "cases")
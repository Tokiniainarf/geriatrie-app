// MEGA_CASES — Banque de 50 cas cliniques gériatriques détaillés
// GeriatrieApp — EVC / formation
const MEGA_CASES = [
  {
    id: "URG-001",
    chapter: "ch11",
    difficulty: "A",
    title: "Syndrome confusionnel hyperactif sur pneumonie nosocomiale",
    context: "Urgences / Médecine interne — hospitalisation J+3",
    patient: "M. Giraud, 81 ans, retraité, vit avec son épouse. ATCD : BPCO GOLD 2 (VEMS 58%), IC FEp NYHA II (FE 42%), diabète type 2 (HbA1c 7.8%), HTA, IRC stade 3b (DFG 38). Hospitalisé depuis 72 h pour pneumopathie communautaire LID droite (ceftriaxone 2 g/j IV, O2 nasal 2 L/min). Traitement habituel : bisoprolol 5 mg, ramipril 5 mg, metformine 850 mg x2, atorvastatine 20 mg, tiotropium, salbutamol. Allergie : pénicilline (éruption). Personne de confiance : fille.",
    examen: "Ce soir 22h : agitation majeure, arrache la lunette, crie, ne reconnaît pas sa fille, désorienté temps/lieu. Ce matin : orienté, coopératif. TA 142/78 mmHg, FC 102/min régulière, FR 24/min, SpO2 91% air ambiant (94% sous O2 2 L), T° 37.9°C, GCS 14 (E4V4M6). Muqueuses sèches, pli cutané 2 s. Auscultation : ronchi LID, crépitants bases. Pas de raideur méningée. CAM : début aigu ✓, inattention ✓, pensée désorganisée ✓, altération conscience légère ✓.",
    biologie: "NFS : GB 14 200/mm³ (PN 11 800), Hb 12.1 g/dL, plaquettes 312 G/L. CRP 145 mg/L (J0 : 98). Procalcitonine 0.8 ng/mL. Créatinine 142 µmol/L (DFG 42), Na+ 128 mmol/L, K+ 4.2, Cl- 92, glycémie 11.2 mmol/L. Gaz du sang : pH 7.48, PaCO2 32 mmHg, PaO2 68 mmHg, HCO3- 24. Lactate 1.4 mmol/L. Albumine 32 g/L. MMS ce matin 26/30.",
    imagerie: "Radio thorax J+3 : opacité alvélo-interstitielle LID persistante, pas d'épanchement. ECG : sinus 102/min, pas de QT long. Pas de scanner cérébral (pas de signe focal).",
    questions: [
      { q: "Diagnostic et justification.", a: "Syndrome confusionnel aigu (delirium) hyperactif sur pneumonie en évolution + hyponatrémie modérée + contexte iatrogène (corticoïdes si prescrits, anticholinergiques). CAM positif. Fluctuation caractéristique.", points: 15, duree: 4 },
      { q: "Causes à rechercher selon la méthode des 6D.", a: "Infection (pneumonie), Douleur, Déshydratation, Déséquilibre hydroélectrolytique (hyponatrémie), Drogues/médicaments (anticholinergiques, opioïdes, corticoïdes), Désorientation environnementale (hospitalisation, privation sensorielle).", points: 12, duree: 3 },
      { q: "Prise en charge immédiate non médicamenteuse.", a: "Mesures environnementales : chambre calme, horloge visible, présence aidant, lunettes/prothèses auditives. Réassurance verbale. Éviter contention sauf danger vital. Maintenir hydratation orale si possible.", points: 10, duree: 3 },
      { q: "Traitement médicamenteux de l'agitation si échec des mesures.", a: "Halopéridol 0.5-1 mg PO/IM/SC, répéter si besoin (max 5 mg/24h). Éviter benzodiazépines sauf sevrage. Adapter antibiothérapie et corriger Na+ progressivement.", points: 10, duree: 3 }
    ],
    juryComment: "Le jury attend la distinction delirium vs démence, l'utilisation du CAM, la recherche étiologique systématique sans sur-investigation, et l'évitement des benzodiazépines/anticholinergiques.",
    pieges: "Prescrire lorazépam pour « calmer » ; oublier l'hyponatrémie ; confondre avec démence chronique ; contention systématique.",
    references: "ITEM 121, 123, 340 — HAS délirium 2018"
  },
  {
    id: "URG-002",
    chapter: "ch12",
    difficulty: "A",
    title: "Chute avec fracture du col fémoral et syncope",
    context: "Urgences — SAMU",
    patient: "Mme Vasseur, 86 ans, veuve, vit seule au 3e sans ascenseur. ATCD : HTA, FA permanente (CHA2DS2-VASc 5), glaucome, gonarthrose bilatérale, ostéoporose traitée par alendronate arrêté il y a 2 ans (intolérance œsophagienne). Traitement : apixaban 5 mg x2, ramipril 10 mg, HCTZ 25 mg, paracétamol 1 g x3, collyre timolol. Chute ce matin 6h dans la salle de bain après lever nocturne.",
    examen: "GCS 15, EVA hanche droite 9/10, jambe droite en rotation externe, raccourcie ~2 cm, impotence fonctionnelle. Poignet gauche douloureux (chute sur main). TA 98/54 mmHg debout (assis 118/68), FC 88/min irrégulière, FR 18, SpO2 96%, T° 36.8°C. Pas de déficit neurologique. Auscultation : souffle systolique 3/6 foyer aortique.",
    biologie: "NFS : Hb 11.2, VGM 88, plaquettes 210 G/L. Créatinine 98 µmol/L (DFG 52), Na+ 131, K+ 4.1, Ca++ 2.15. Glycémie 5.8. INR non pertinent (DOAC). Troponine hs 18 ng/L (N).",
    imagerie: "Radio hanche : fracture sous-capitale col fémoral droit déplacée. Radio poignet : fracture Pouteau-Colles gauche. ECG : FA 85/min, pas d'ischémie aiguë. Écho surface urgences : Vmax aortique 3.8 m/s, surface valvulaire estimée 1.0 cm² (sténose modérée-sévère).",
    questions: [
      { q: "Étiologie probable de la chute.", a: "Syncope sur sténose aortique serrée ± hypotension orthostatique (ramipril + HCTZ + lever nocturne) ± effet secondaire apixaban si saignement occulte peu probable ici.", points: 12, duree: 3 },
      { q: "Prise en charge orthopédique urgente.", a: "Hospitalisation, antalgie (paracétamol ± morphine titrée), gestion DOAC (arrêt 24-48h selon protocole, relais héparine si chirurgie différée), consultation orthopédie : ostéosynthèse ou prothèse selon fragilité et délai.", points: 15, duree: 4 },
      { q: "Bilan iatrogénique et prévention secondaire.", a: "Révision traitement hypotenseur, arrêt zolpidem si présent, évaluation TUG/Tinetti post-op, vitamine D, bisphosphonate ou dénosumab, kiné précoce, adaptation domicile.", points: 10, duree: 3 }
    ],
    juryComment: "Lier chute, syncope et pathologie cardiaque ; ne pas se limiter à la fracture ; aborder le continuum ville-hôpital et la reprise anticoagulation.",
    pieges: "Oublier la cause de chute ; sur-anticoaguler sans plan chirurgical ; négliger ostéoporose.",
    references: "ITEM 128, 148, 233"
  },
  {
    id: "URG-003",
    chapter: "ch10",
    difficulty: "A",
    title: "Dyspnée aiguë — décompensation mixte BPCO et OAP",
    context: "Urgences SAU — arrivée en ambulance",
    patient: "M. Lefebvre, 78 ans, ex-fumeur 60 PA, vit avec son épouse. ATCD : BPCO GOLD 3 (VEMS 38%), IC FEp NYHA II-III (FE 40% 2024), HTA, FA permanente anticoagulée par rivaroxaban 20 mg. Traitement : furosémide 40 mg matin, bisoprolol 2.5 mg, rivaroxaban, Spiolto 1 inh x2, prednisone 5 mg/j depuis 2 ans (exacerbations), atorvastatine. Dyspnée brutale depuis 6 h, toux productive verdâtre, orthopnée, prise de poids 3 kg en 5 jours.",
    examen: "TA 168/95 mmHg, FC 110/min irrégulière (FA), FR 28/min, SpO2 88% air ambiant, T° 37.2°C, GCS 15. Sueurs, utilisation muscles accessoires. Auscultation : sibilants diffus, crépitants bilatéraux des bases, distance du pouce-menton augmentée. OMI bilatérale ++, TJ 8 cm, reflux hépatojugulaire. Pas de douleur thoracique. Poids 82 kg (+3 vs usual).",
    biologie: "BNP 1850 pg/mL (NT-proBNP 6200), CRP 45 mg/L, NFS GB 9800, Hb 13.8, plaquettes 245 G/L. Créatinine 156 µmol/L (DFG 38), Na+ 138, K+ 3.1 mmol/L, Cl- 98, glycémie 9.8. D-dimères 1200 ng/mL. Troponine hs 22 ng/L. Lactate 1.8.",
    imagerie: "Radio thorax : cardiomégalie, redistribution vasculaire, lignes de Kerley B, épanchements pleuraux minimes bilatéraux, hyperinflation. Gaz artériel : pH 7.32, PaCO2 58 mmHg, PaO2 52 mmHg, HCO3- 28. ECG : FA 110/min, pas de SCA aigu.",
    questions: [
      { q: "Diagnostic syndromique et arguments pour composante cardiogénique vs obstructive.", a: "Tableau mixte : BPCO décompensée (sibilants, hypercapnie, prednisone) + OAP (BNP élevé, crépitants, OMI, TJ). BNP aide à discriminer ; seuil plus bas chez le sujet âgé et obèse.", points: 15, duree: 4 },
      { q: "Traitement initial en urgence.", a: "O2 titré SpO2 88-92% si BPCO (éviter hyperoxie), furosémide IV 40-80 mg, bronchodilatateurs nébulisés, corticoïde systémique si exacerbation BPCO, surveillance diurèse et kaliémie, position demi-assise.", points: 15, duree: 4 },
      { q: "Place de l'antibiothérapie et bilan infectieux.", a: "Discuter si expectoration purulente + CRP : amoxicilline-acide clavulanique ou macrolide selon allergies ; pas d'antibiotique systématique si OAP pur.", points: 10, duree: 3 },
      { q: "Critères d'hospitalisation et de surveillance.", a: "Insuffisance respiratoire, FA rapide, IR, instabilité hémodynamique ; monitoring scope, gaz, adaptation diurétiques et anticoagulation.", points: 10, duree: 3 }
    ],
    juryComment: "Ne pas traiter uniquement comme pneumonie ou asthme ; adapter cibles O2 ; réconcilier traitement à la sortie.",
    pieges: "O2 à flux élevé sans gazométrie chez BPCO ; sous-dosage diurétique ; oublier hypokaliémie.",
    references: "ITEM 208, 236, 340"
  },
  {
    id: "URG-004",
    chapter: "ch18",
    difficulty: "A",
    title: "Douleur thoracique atypique — SCA ST+",
    context: "Urgences",
    patient: "Mme Roche, 84 ans, diabète type 2 (HbA1c 8.2%), HTA, dyslipidémie. Douleur épigastrique constrictive 2 h, nausées, vomissements, pas de dyspnée. Traitement : metformine, gliclazide, ramipril, atorvastatine 40 mg.",
    examen: "TA 95/60, FC 48/min sinus, pâleur, sueurs froides. Abdomen souple, douleur épigastrique sans défense. Pas de crépitants.",
    biologie: "Troponine hs 450 ng/L (0h), 820 (3h). Glycémie 14.2 mmol/L. Créatinine 110 µmol/L. NFS N.",
    imagerie: "ECG : sus-décalage ST 3 mm V2-V4, onde Q aVL. Coronarographie : occlusion IVA proximale TIMI 0.",
    questions: [
      { q: "Diagnostic et gravité.", a: "SCA ST+ chez diabétique = présentation épigastrique fréquente.", points: 15, duree: 4 },
      { q: "Prise en charge immédiate priorisée.", a: "SCA ST+ chez diabétique = présentation épigastrique fréquente. Reperfusion urgente (angioplastie primaire). Antiagrégation, anticoagulation, statine haute dose, bêtabloquant si toléré.", points: 15, duree: 4 },
      { q: "Spécificités gériatriques.", a: "Polymédication, fragilité, présentation atypique, objectifs de soins, personne de confiance.", points: 10, duree: 3 },
      { q: "Plan à 48-72 h.", a: "Réévaluation clinique, adaptation traitement, lieu de sortie, prévention récidive.", points: 10, duree: 3 }
    ],
    juryComment: "Argumentation structurée EVC, scores si pertinent, pas de catalogue.",
    pieges: "Attribuer à gastrite ; retarder coro ; négliger hypotension cardiogénique.",
    references: "ITEM 236, 340"
  },
  {
    id: "URG-005",
    chapter: "ch11",
    difficulty: "A",
    title: "Fièvre sans foyer — infection urinaire compliquée",
    context: "Urgences EHPAD",
    patient: "M. Nguyen, 89 ans, résident EHPAD GIR 3, Alzheimer MMSE 12, sonde urinaire à demeure depuis 8 mois. Fièvre 39.2°C, frissons, somnolence, refus alimentaire. Pas de toux, pas de diarrhée.",
    examen: "TA 90/50, FC 105, FR 22, SpO2 94%, T° 39.2°C, GCS 13. Muqueuses sèches. Urines troubles à la cupule. Pas de raideur nucale.",
    biologie: "CRP 280 mg/L, PCT 2.1 ng/mL, GB 18 200 (PN 15 400), créatinine 220 (DFG 22), Na 134, lactate 2.6.",
    imagerie: "ASP : lithiase vésicale 12 mm, pas d'obstruction haute. Radio thorax N. ECBU : E. coli ESBL, leucocyturie >10^5.",
    questions: [
      { q: "Diagnostic et gravité.", a: "Sepsis urinaire sur sonde ; remplissage prudent, antibiothérapie adaptée ESBL (carbapénème ou ceftazidime-avibactam selon antibiogramme), retirer sonde si possible, réévaluer confusion.", points: 15, duree: 4 },
      { q: "Prise en charge immédiate priorisée.", a: "Sepsis urinaire sur sonde ; remplissage prudent, antibiothérapie adaptée ESBL (carbapénème ou ceftazidime-avibactam selon antibiogramme), retirer sonde si possible, réévaluer confusion.", points: 15, duree: 4 },
      { q: "Spécificités gériatriques.", a: "Polymédication, fragilité, présentation atypique, objectifs de soins, personne de confiance.", points: 10, duree: 3 },
      { q: "Plan à 48-72 h.", a: "Réévaluation clinique, adaptation traitement, lieu de sortie, prévention récidive.", points: 10, duree: 3 }
    ],
    juryComment: "Argumentation structurée EVC, scores si pertinent, pas de catalogue.",
    pieges: "Oublier sonde comme foyer ; sur-remplissage chez IRC ; anticholinergiques pour confusion.",
    references: "ITEM 121, 160"
  },
  {
    id: "URG-006",
    chapter: "ch14",
    difficulty: "A",
    title: "Hypoglycémie sévère sous glibenclamide",
    context: "Urgences",
    patient: "Mme Adam, 82 ans, DM2 20 ans, vit seule. Traitement : metformine 1000 mg x2, glibenclamide 5 mg matin. Repas sauté ce midi. Trouvée somnolente par voisine.",
    examen: "GCS 12 (E3V3M6), sueurs, tachycardie 110/min, myoclonies. Glycémie capillaire 0.42 g/L. Pas de déficit focal.",
    biologie: "Glycémie labo 0.38 g/L, pas d'acidocétose. Créatinine 95, Na 140. Pas de ethanol.",
    imagerie: "Pas d'imagerie. Scanner cérébral si déficit post-réanimation.",
    questions: [
      { q: "Diagnostic et gravité.", a: "Hypoglycémie iatrogène sulfamide longue durée d'action ; perfusion glucose 10% ou bolus glucagon IM ; surveillance 24 h ; arrêt sulfamide, cible glycémique assouplie, éducation aidant.", points: 15, duree: 4 },
      { q: "Prise en charge immédiate priorisée.", a: "Hypoglycémie iatrogène sulfamide longue durée d'action ; perfusion glucose 10% ou bolus glucagon IM ; surveillance 24 h ; arrêt sulfamide, cible glycémique assouplie, éducation aidant.", points: 15, duree: 4 },
      { q: "Spécificités gériatriques.", a: "Polymédication, fragilité, présentation atypique, objectifs de soins, personne de confiance.", points: 10, duree: 3 },
      { q: "Plan à 48-72 h.", a: "Réévaluation clinique, adaptation traitement, lieu de sortie, prévention récidive.", points: 10, duree: 3 }
    ],
    juryComment: "Argumentation structurée EVC, scores si pertinent, pas de catalogue.",
    pieges: "Sur-correction hyperglycémique réflexe ; renouveler sulfamide ; oublier récidive nocturne.",
    references: "ITEM 128, 340"
  },
  {
    id: "URG-007",
    chapter: "ch16",
    difficulty: "A",
    title: "Hémorragie digestive haute — ulcère et anticoagulation",
    context: "Urgences",
    patient: "M. Perrin, 80 ans, FA, apixaban 5 mg x2 depuis 3 ans. Ibuprofène 400 mg x3 automédication pour lombalgies depuis 10 jours. Méléna, lipothymie.",
    examen: "TA 85/45, FC 118, pâleur, GCS 15. Abdomen souple, TR : méléna. Pas de cirrhose stigmates.",
    biologie: "Hb 7.2 g/dL (14 il y a 6 mois), créatinine 145, plaquettes 198, INR N (DOAC). Groupe A+, RAI négatif.",
    imagerie: "FOGD : ulcère bulbaire 15 mm Forrest Ia, pas de varices. Pas de TDM si hémodynamique stabilisée post-endoscopie.",
    questions: [
      { q: "Diagnostic et gravité.", a: "Choc hémorragique : remplissage, transfusion culots, arrêt apixaban, IPP IV, endoscopie urgente, clip/hemostase, reprise anticoagulation différée balance risque thrombotique.", points: 15, duree: 4 },
      { q: "Prise en charge immédiate priorisée.", a: "Choc hémorragique : remplissage, transfusion culots, arrêt apixaban, IPP IV, endoscopie urgente, clip/hemostase, reprise anticoagulation différée balance risque thrombotique.", points: 15, duree: 4 },
      { q: "Spécificités gériatriques.", a: "Polymédication, fragilité, présentation atypique, objectifs de soins, personne de confiance.", points: 10, duree: 3 },
      { q: "Plan à 48-72 h.", a: "Réévaluation clinique, adaptation traitement, lieu de sortie, prévention récidive.", points: 10, duree: 3 }
    ],
    juryComment: "Argumentation structurée EVC, scores si pertinent, pas de catalogue.",
    pieges: "Masquer AINS ; reprise précoce DOAC sans plan ; oublier Helicobacter.",
    references: "ITEM 148, 333"
  },
  {
    id: "URG-008",
    chapter: "ch10",
    difficulty: "A",
    title: "OAP aigu sur FA rapide non contrôlée",
    context: "Urgences",
    patient: "Mme Faure, 87 ans, FA connue non anticoagulée (refus initial), HTA, rétrécissement mitral modéré. Dyspnée aiguë, orthopnée, expectoration mousseuse rosée.",
    examen: "TA 190/105, FC 145 irrégulière, FR 32, SpO2 85% AA, crépitants sur 2/3 champs, TJ 10 cm, galop.",
    biologie: "BNP 3200, créatinine 198, K+ 5.1, troponine N, CRP 12.",
    imagerie: "Radio : OAP alvéolaire bilatéral. Écho bedside : FE 35%, IM modérée, pas d'épanchement péricardique.",
    questions: [
      { q: "Diagnostic et gravité.", a: "OAP hypertensif sur FA rapide ; O2, CPAP si échec, furosémide IV, dérivés digitaliques ou amiodarone pour ralentir FC, discuter anticoagulation après stabilisation.", points: 15, duree: 4 },
      { q: "Prise en charge immédiate priorisée.", a: "OAP hypertensif sur FA rapide ; O2, CPAP si échec, furosémide IV, dérivés digitaliques ou amiodarone pour ralentir FC, discuter anticoagulation après stabilisation.", points: 15, duree: 4 },
      { q: "Spécificités gériatriques.", a: "Polymédication, fragilité, présentation atypique, objectifs de soins, personne de confiance.", points: 10, duree: 3 },
      { q: "Plan à 48-72 h.", a: "Réévaluation clinique, adaptation traitement, lieu de sortie, prévention récidive.", points: 10, duree: 3 }
    ],
    juryComment: "Argumentation structurée EVC, scores si pertinent, pas de catalogue.",
    pieges: "β-bloquant aigu si OAP congestif non contrôlé ; cardioversion sans anticoagulation si FA >48h.",
    references: "ITEM 236, 233"
  },
  {
    id: "URG-009",
    chapter: "ch9",
    difficulty: "A",
    title: "AVC ischémique aigu — fenêtre thrombolyse",
    context: "Urgences neuro",
    patient: "M. Morel, 79 ans, HTA, FA, hypercholestérolémie. Réveil 7h avec hémiplégie gauche complète, aphasie, regard dévié à droite. Dernière fois vu normal 22h.",
    examen: "TA 185/100, GCS 14, NIHSS 14. Hémiplégie bras/jambe G 0/5, aphasie mixte, hémianopsie G.",
    biologie: "Glycémie 6.2, plaquettes 220, INR 1.1, créatinine 88. Pas d'hypoglycémie.",
    imagerie: "Scanner sans contraste : hyperdensité ACM droite, ASPECTS 7, pas d'hémorragie.",
    questions: [
      { q: "Diagnostic et gravité.", a: "AVC ischémique ACM droite ; thrombolyse IV si <4h30 et pas de contre-indication ; puis thrombectomie si occlusion proximale ; neuroprotection, surveillance PA.", points: 15, duree: 4 },
      { q: "Prise en charge immédiate priorisée.", a: "AVC ischémique ACM droite ; thrombolyse IV si <4h30 et pas de contre-indication ; puis thrombectomie si occlusion proximale ; neuroprotection, surveillance PA.", points: 15, duree: 4 },
      { q: "Spécificités gériatriques.", a: "Polymédication, fragilité, présentation atypique, objectifs de soins, personne de confiance.", points: 10, duree: 3 },
      { q: "Plan à 48-72 h.", a: "Réévaluation clinique, adaptation traitement, lieu de sortie, prévention récidive.", points: 10, duree: 3 }
    ],
    juryComment: "Argumentation structurée EVC, scores si pertinent, pas de catalogue.",
    pieges: "Retard scanner ; thrombolyse si INR inconnu sur AVK ; oublier déglutition post-AVC.",
    references: "ITEM 223, 340"
  },
  {
    id: "URG-010",
    chapter: "ch11",
    difficulty: "A",
    title: "Sepsis urinaire — choc septique débutant",
    context: "Urgences",
    patient: "M. Garcia, 85 ans, BPH, sonde urinaire, IRC stade 4. Fièvre, frissons, confusion, oligurie.",
    examen: "TA 82/48, FC 125, FR 26, SpO2 93%, T° 38.8°C, GCS 13, extrémités froides, temps recoloration >3 s.",
    biologie: "CRP 350, PCT 8 ng/mL, GB 22 000, créatinine 310, lactate 3.8 mmol/L, pH 7.28.",
    imagerie: "Écho vésicale : paroi épaissie, lithiase. Pas de dilatation pyélocalicielle majeure.",
    questions: [
      { q: "Diagnostic et gravité.", a: "Sepsis/septic shock : remplissage cristalloïdes 30 ml/kg adapté cardiopathie, antibiothérapie large puis ciblée, noradrénaline si hypotension persistante, retirer sonde, réanimation adaptée à l'âge.", points: 15, duree: 4 },
      { q: "Prise en charge immédiate priorisée.", a: "Sepsis/septic shock : remplissage cristalloïdes 30 ml/kg adapté cardiopathie, antibiothérapie large puis ciblée, noradrénaline si hypotension persistante, retirer sonde, réanimation adaptée à l'âge.", points: 15, duree: 4 },
      { q: "Spécificités gériatriques.", a: "Polymédication, fragilité, présentation atypique, objectifs de soins, personne de confiance.", points: 10, duree: 3 },
      { q: "Plan à 48-72 h.", a: "Réévaluation clinique, adaptation traitement, lieu de sortie, prévention récidive.", points: 10, duree: 3 }
    ],
    juryComment: "Argumentation structurée EVC, scores si pertinent, pas de catalogue.",
    pieges: "Néphrotoxiques ; sous-remplissage initial ; oublier source urinaire.",
    references: "ITEM 160, 121"
  },
  {
    id: "CHR-001",
    chapter: "ch9",
    difficulty: "B",
    title: "Trouble neurocognitif majeur — maladie d'Alzheimer modérée",
    context: "Consultation mémoire — HDJ",
    patient: "Mme Durand, 78 ans, institutrice retraitée. 24 mois d'évolution : oublis répétés, difficultés cuisine et finances, répétitions, perte d'initiative. Vit avec mari 80 ans. HTA, dyslipidémie. TTT : ramipril, atorvastatine.",
    examen: "MMSE 19/30 (orientation temps, rappel, praxies), MoCA 14/30. Pas de parkinsonisme ni hallucinations. TUG 16 s. IADL 4/8, ADL 6/6.",
    biologie: "NFS, ionogramme, glycémie, créatinine, TSH 2.1, B12 380, folates N, VSG 18, CRP 4. ApoE génotype en attente.",
    imagerie: "IRM 3T : atrophie hippocampique bilatérale Scheltens 3, Fazekas 1, pas d'hydrocéphalie, pas d'infarctus récent.",
    questions: [
      { q: "Diagnostic et classification.", a: "TNM probable Alzheimer (critères NIA-AA) ; bilan étiologique complet ; donépézil 5 mg puis 10 mg ; psychoéducation famille ; APA, conduite automobile, directives anticipées.", points: 12, duree: 3 },
      { q: "Traitement et objectifs chez le sujet âgé.", a: "Individualisation, iatrogénie, qualité de vie, aidant.", points: 12, duree: 3 },
      { q: "Suivi et critères de réévaluation.", a: "Consultations, scores, réhospitalisation, coordination.", points: 10, duree: 3 }
    ],
    juryComment: "Approche gériatrique globale intégrée à la pathologie chronique.",
    pieges: "Confondre avec dépression sans GDS ; halopéridol pour agitation ; oublier sécurité domicile.",
    references: "ITEM 117"
  },
  {
    id: "CHR-002",
    chapter: "ch9",
    difficulty: "B",
    title: "Maladie de Parkinson — freezing et chutes",
    context: "Consultation neurologie / gériatrie",
    patient: "M. Blanc, 74 ans, Parkinson depuis 8 ans, lévodopa/benserazide 200/50 mg x4, pramipexole 1 mg x3. 3 chutes en 6 mois, freezing aux portes. Constipation, hypotension orthostatique.",
    examen: "UPDRS III 42, rigidité axiale, marche petits pas, freezing. Tinetti 12/28, TA debout 100/65. Pas de dyskinésies majeures.",
    biologie: "NFS, créatinine, Na, K N. Vitamine D 18 ng/mL.",
    imagerie: "IRM cérébrale : atrophie modérée, pas de vascularité significative.",
    questions: [
      { q: "Diagnostic et classification.", a: "Optimiser lévodopa fractionnée, kiné spécialisée Parkinson, adaptation domicile, revoir pramipexole (somnolence), supplémentation vit D, pas d'antipsychotique typique.", points: 12, duree: 3 },
      { q: "Traitement et objectifs chez le sujet âgé.", a: "Individualisation, iatrogénie, qualité de vie, aidant.", points: 12, duree: 3 },
      { q: "Suivi et critères de réévaluation.", a: "Consultations, scores, réhospitalisation, coordination.", points: 10, duree: 3 }
    ],
    juryComment: "Approche gériatrique globale intégrée à la pathologie chronique.",
    pieges: "Augmenter dopamine sans évaluer OH ; négliger rééducation ; anticholinergiques.",
    references: "ITEM 117"
  },
  {
    id: "CHR-003",
    chapter: "ch10",
    difficulty: "B",
    title: "BPCO GOLD 3 — prise en charge de fond",
    context: "Consultation pneumologie",
    patient: "M. Simon, 81 ans, VEMS 38%, 2 exacerbations/an, O2 domicile non. Toux chronique, expectoration matinale. Tabac sevré 10 ans.",
    examen: "BMI 22, cyanose discrète, sibilants, temps expiratoire prolongé. Pas d'OMI au repos.",
    biologie: "Gaz repos : pH 7.38, PaCO2 48, PaO2 68. NFS polycythémie légère Hb 16.2.",
    imagerie: "TDM thorax : emphysème centrolobulaire, pas de nodule suspect.",
    questions: [
      { q: "Diagnostic et classification.", a: "Triple inhalée LAMA+LABA ± CSI selon eosinophiles, vaccins, sevrage tabac maintenu, réhab respiratoire, plan action exacerbation.", points: 12, duree: 3 },
      { q: "Traitement et objectifs chez le sujet âgé.", a: "Individualisation, iatrogénie, qualité de vie, aidant.", points: 12, duree: 3 },
      { q: "Suivi et critères de réévaluation.", a: "Consultations, scores, réhospitalisation, coordination.", points: 10, duree: 3 }
    ],
    juryComment: "Approche gériatrique globale intégrée à la pathologie chronique.",
    pieges: "CSI seul sans bronchodilatateur ; oublier réhab ; sous-estimer dénutrition.",
    references: "ITEM 208"
  },
  {
    id: "CHR-004",
    chapter: "ch10",
    difficulty: "B",
    title: "Insuffisance cardiaque FEp — optimisation",
    context: "Consultation cardiologie",
    patient: "Mme Leroy, 85 ans, 3 hospitalisations IC en 12 mois, NYHA III au repos. FE 38%. FA, HTA, IRC 3a.",
    examen: "OMI, TJ 6 cm, crépitants bases, FC 88 FA. Poids +2 kg/sem.",
    biologie: "BNP 890, créatinine 115, K 4.8, eGFR 48.",
    imagerie: "Écho : FE 38%, IM grade II, HVG, pas de thrombus OG.",
    questions: [
      { q: "Diagnostic et classification.", a: "Quadrithérapie FEp (IEC/ARNI, bêtabloquant, MRA, iSGLT2), restriction sodée, titration lente, télésurveillance poids, éducation restriction hydrique modérée.", points: 12, duree: 3 },
      { q: "Traitement et objectifs chez le sujet âgé.", a: "Individualisation, iatrogénie, qualité de vie, aidant.", points: 12, duree: 3 },
      { q: "Suivi et critères de réévaluation.", a: "Consultations, scores, réhospitalisation, coordination.", points: 10, duree: 3 }
    ],
    juryComment: "Approche gériatrique globale intégrée à la pathologie chronique.",
    pieges: "Titration trop rapide ; négliger iSGLT2 ; oublier anticoagulation FA.",
    references: "ITEM 236"
  },
  {
    id: "CHR-005",
    chapter: "ch10",
    difficulty: "A",
    title: "FA permanente — balance bénéfice risque anticoagulation",
    context: "Consultation",
    patient: "M. Petit, 80 ans, FA permanente, HTA, diabète, AVC ischémique lacunaire 2019. CHA2DS2-VASc 5, HAS-BLED 3 (IRC, polymédication).",
    examen: "FC 95 irrégulière, pas d'IC décompensée.",
    biologie: "Créatinine 125, DFG 52, NFS N.",
    imagerie: "ECG FA, écho FEp normale.",
    questions: [
      { q: "Diagnostic et classification.", a: "Anticoagulation orale recommandée (DOAC adapté IR) ; contrôle TA ; éviter AINS ; revue trimestrielle HAS-BLED.", points: 12, duree: 3 },
      { q: "Traitement et objectifs chez le sujet âgé.", a: "Individualisation, iatrogénie, qualité de vie, aidant.", points: 12, duree: 3 },
      { q: "Suivi et critères de réévaluation.", a: "Consultations, scores, réhospitalisation, coordination.", points: 10, duree: 3 }
    ],
    juryComment: "Approche gériatrique globale intégrée à la pathologie chronique.",
    pieges: "Aspirine seule ; sous-dosage DOAC sans adaptation IR ; oublier interactions.",
    references: "ITEM 233"
  },
  {
    id: "CHR-006",
    chapter: "ch14",
    difficulty: "B",
    title: "Diabète type 2 — hypoglycémies et cibles individualisées",
    context: "Consultation diabétologie / MT",
    patient: "Mme Martin, 83 ans, DM2 15 ans, 4 hypoglycémies/mois. HbA1c 6.1%. Vit avec fille.",
    examen: "Poids 62 kg stable, pas de neuropathie douloureuse majeure.",
    biologie: "HbA1c 6.1%, créatinine 78, pas de protéinurie significative.",
    imagerie: "Pas d'imagerie.",
    questions: [
      { q: "Diagnostic et classification.", a: "Arrêt sulfamide/insuline basse si cause hypo ; cible HbA1c 7-8% ; metformine si DFG OK ; éducation aidant ; glucagon domicile.", points: 12, duree: 3 },
      { q: "Traitement et objectifs chez le sujet âgé.", a: "Individualisation, iatrogénie, qualité de vie, aidant.", points: 12, duree: 3 },
      { q: "Suivi et critères de réévaluation.", a: "Consultations, scores, réhospitalisation, coordination.", points: 10, duree: 3 }
    ],
    juryComment: "Approche gériatrique globale intégrée à la pathologie chronique.",
    pieges: "Poursuite intensification ; HbA1c <7% chez fragile ; oublier hypo nocturnes.",
    references: "ITEM 128"
  },
  {
    id: "CHR-007",
    chapter: "ch10",
    difficulty: "B",
    title: "HTA et hypotension orthostatique artéfactuelle",
    context: "Consultation",
    patient: "M. Renard, 86 ans, 4 antihypertenseurs, chutes matinales au lever. Syncopes x2.",
    examen: "TA assis 165/85, debout 98/62 à 3 min, symptômes orthostatiques.",
    biologie: "Na 132, créatinine 98, pas d'anémie.",
    imagerie: "Holter TA 24h : chutes nocturnes TA, pics matinaux.",
    questions: [
      { q: "Diagnostic et classification.", a: "Réduction polymédication hypotensive, prise au coucher des doses sédatifs, lever progressif, bas de contention, revue indication chaque molécule.", points: 12, duree: 3 },
      { q: "Traitement et objectifs chez le sujet âgé.", a: "Individualisation, iatrogénie, qualité de vie, aidant.", points: 12, duree: 3 },
      { q: "Suivi et critères de réévaluation.", a: "Consultations, scores, réhospitalisation, coordination.", points: 10, duree: 3 }
    ],
    juryComment: "Approche gériatrique globale intégrée à la pathologie chronique.",
    pieges: "Ajouter antihypertenseur ; ignorer OH iatrogène ; pas de mesure debout.",
    references: "ITEM 208"
  },
  {
    id: "CHR-008",
    chapter: "ch6",
    difficulty: "A",
    title: "Ostéoporose sévère — fracture vertébrale et corticothérapie",
    context: "Consultation rhumatologie",
    patient: "Mme Bonnet, 75 ans, PR sous prednisone 7.5 mg/j x4 ans. Douleur lombaire brutale port de charge. Mère fracture hanche 70 ans.",
    examen: "Cyphose thoracique, douleur à la palpation T12, pas de déficit neurologique.",
    biologie: "Vit D 12 ng/mL, Ca 2.35, PTH 78, CRP 22, créatinine 88.",
    imagerie: "Radio rachis : tassement T12 40%. DEXA T-score col -3.2, rachis -3.1.",
    questions: [
      { q: "Diagnostic et classification.", a: "Fracture ostéoporotique pathologique ; denosumab ou zoledronate + Ca/Vit D, analgésie, corset si douleur, arrêt progressif corticoïde si possible, FRAX documenté.", points: 12, duree: 3 },
      { q: "Traitement et objectifs chez le sujet âgé.", a: "Individualisation, iatrogénie, qualité de vie, aidant.", points: 12, duree: 3 },
      { q: "Suivi et critères de réévaluation.", a: "Consultations, scores, réhospitalisation, coordination.", points: 10, duree: 3 }
    ],
    juryComment: "Approche gériatrique globale intégrée à la pathologie chronique.",
    pieges: "Paracétamol seul sans traitement os ; alendronate sans corriger Vit D ; ignorer cause corticoïde.",
    references: "ITEM 128"
  },
  {
    id: "CHR-009",
    chapter: "ch7",
    difficulty: "B",
    title: "Gonarthrose bilatérale — traitement non chirurgical",
    context: "Consultation",
    patient: "M. Henry, 79 ans, EVA 7/10, marche <100 m. DFG 55, ulcère gastrique 2015. Refus prothèse.",
    examen: "Genoux varus, épanchement modéré, limitation flexion 110°.",
    biologie: "CRP 8, NFS N.",
    imagerie: "Radio : pincement médial grade III, ostéophytes.",
    questions: [
      { q: "Diagnostic et classification.", a: "Paracétamol palier 1, AINS topiques si peau OK, kiné/maintien musculaire, canne, infiltration corticoïde espacée, pas d'AINS systémique compte tenu ATCD.", points: 12, duree: 3 },
      { q: "Traitement et objectifs chez le sujet âgé.", a: "Individualisation, iatrogénie, qualité de vie, aidant.", points: 12, duree: 3 },
      { q: "Suivi et critères de réévaluation.", a: "Consultations, scores, réhospitalisation, coordination.", points: 10, duree: 3 }
    ],
    juryComment: "Approche gériatrique globale intégrée à la pathologie chronique.",
    pieges: "AINS systémique avec ulcère ATCD ; infiltration répétée <3 mois ; immobilisation prolongée.",
    references: "ITEM 131"
  },
  {
    id: "CHR-010",
    chapter: "ch10",
    difficulty: "A",
    title: "Dépression majeure du sujet âgé post-veuvage",
    context: "Consultation psychogériatrie",
    patient: "M. Caron, 83 ans, veuf 4 mois, GDS-15 13/15, perte 5 kg, insomnie, ralentissement. MMSE 28/30.",
    examen: "Ralentissement psychomoteur, tristesse, pas de délire. Pas de projet suicidaire actif mais idéations passives.",
    biologie: "TSH, B12, folates, NFS, ionogramme N.",
    imagerie: "Pas d'imagerie.",
    questions: [
      { q: "Diagnostic et classification.", a: "Dépression majeure ; SSRI (sertraline 25→50 mg) ; psychothérapie ; activation sociale ; surveillance suicidaire ; éviter benzodiazépines long cours.", points: 12, duree: 3 },
      { q: "Traitement et objectifs chez le sujet âgé.", a: "Individualisation, iatrogénie, qualité de vie, aidant.", points: 12, duree: 3 },
      { q: "Suivi et critères de réévaluation.", a: "Consultations, scores, réhospitalisation, coordination.", points: 10, duree: 3 }
    ],
    juryComment: "Approche gériatrique globale intégrée à la pathologie chronique.",
    pieges: "Normaliser deuil ; anticholinergiques tricycliques ; oublier somatique.",
    references: "ITEM 62"
  },
  {
    id: "EHP-001",
    chapter: "ch13",
    difficulty: "A",
    title: "Escarre sacrum stade 3 — protocole HAS",
    context: "EHPAD — 90 lits",
    patient: "M. Nguyen, 91 ans, Alzheimer MMSE 14, alité 3 semaines post-fracture humérus. Incontinence fécale et urinaire. IMC 17. Albumine 21.",
    examen: "Plaie sacrum 4x3 cm, profondeur jusqu'au fascia, pas d'os visible. Exsudat modéré. Braden 9, Waterlow 24. Douleur ECPA 12/16 à la mobilisation.",
    biologie: "CRP 35, albumine 21, préalbumine 0.11, NFS N, créatinine 145.",
    imagerie: "Pas de radio os si pas de signe infectieux profond ; culture plaie si suspicion infection.",
    questions: [
      { q: "Évaluation et scores.", a: "Plaie sacrum 4x3 cm, profondeur jusqu'au fascia, pas d'os visible. Exsudat modéré. Braden 9, Waterlow 24. Douleur ECPA 1...", points: 12, duree: 3 },
      { q: "Prise en charge HAS/CNEG.", a: "Décharge, repositionnement 2-3h, nutrition hypercalorique, CNO, soins plaie protocole, antalgie, objectif cicatrisation vs confort si fin de vie.", points: 15, duree: 4 },
      { q: "Éthique et droits.", a: "Consentement, trace, proportionnalité, famille.", points: 10, duree: 3 }
    ],
    juryComment: "Dignité, équipe soignante, pas de banalisation.",
    pieges: "Panser sans nutrition ; ignorer douleur ; antibiotique systématique sans signe infection.",
    references: "ITEM 128, 340"
  },
  {
    id: "EHP-002",
    chapter: "ch14",
    difficulty: "A",
    title: "Dénutrition — MNA 12 et risque renutrition",
    context: "EHPAD — 90 lits",
    patient: "Mme Lefort, 87 ans, GIR 4, -8 kg en 6 mois. MNA 12/30. Refus protéines.",
    examen: "IMC 16.8, force préhension 12 kg, œdèmes chevilles IRC. ADL 4/6.",
    biologie: "Albumine 23, préalbumine 0.10, Na 131, K 3.4, Mg 0.7, phosphate 0.65, créatinine 165.",
    imagerie: "ASP pas d'obstacle mécanique majeur.",
    questions: [
      { q: "Évaluation et scores.", a: "IMC 16.8, force préhension 12 kg, œdèmes chevilles IRC. ADL 4/6....", points: 12, duree: 3 },
      { q: "Prise en charge HAS/CNEG.", a: "Dénutrition sévère ; réalimentation progressive (syndrome renutrition) ; CNO 400 kcal x2 ; enrichissement ; orthophoniste si dysphagie ; pesée hebdo.", points: 15, duree: 4 },
      { q: "Éthique et droits.", a: "Consentement, trace, proportionnalité, famille.", points: 10, duree: 3 }
    ],
    juryComment: "Dignité, équipe soignante, pas de banalisation.",
    pieges: "Réalimentation brutale ; ignorer phosphore/magnésium ; pas de bilan iatrogène.",
    references: "ITEM 128"
  },
  {
    id: "EHP-003",
    chapter: "ch4",
    difficulty: "A",
    title: "Contention — cadre légal 2024 et alternatives",
    context: "EHPAD — 90 lits",
    patient: "M. Dubois, 84 ans, démence, risque chute escaliers. Famille demande contention.",
    examen: "Agitation à la marche, pas de danger immédiat documenté. Projet de soins signé 2023.",
    biologie: "N/A",
    imagerie: "N/A",
    questions: [
      { q: "Évaluation et scores.", a: "Agitation à la marche, pas de danger immédiat documenté. Projet de soins signé 2023....", points: 12, duree: 3 },
      { q: "Prise en charge HAS/CNEG.", a: "Contention = mesure exceptionnelle ; protocole écrit, durée limitée, surveillance ; alternatives : accompagnement, environnement sécurisé, activité adaptée ; trace éthique.", points: 15, duree: 4 },
      { q: "Éthique et droits.", a: "Consentement, trace, proportionnalité, famille.", points: 10, duree: 3 }
    ],
    juryComment: "Dignité, équipe soignante, pas de banalisation.",
    pieges: "Contention de confort ; pas de réévaluation ; absence trace juridique.",
    references: "ITEM 9"
  },
  {
    id: "EHP-004",
    chapter: "ch17",
    difficulty: "A",
    title: "Fin de vie — sédation profonde et continue",
    context: "EHPAD — 90 lits",
    patient: "M. Perrin, 90 ans, cancer pancréas métastatique, EVA 9/10, dyspnée réfractaire. Directives : pas de réanimation.",
    examen: "Conscience altérée par douleur, anxiété majeure. PS OMS 4.",
    biologie: "Bilan minimal si sédation pour confort.",
    imagerie: "N/A",
    questions: [
      { q: "Évaluation et scores.", a: "Conscience altérée par douleur, anxiété majeure. PS OMS 4....", points: 12, duree: 3 },
      { q: "Prise en charge HAS/CNEG.", a: "Sédation proportionnée, midazolam ± morphine, arrêt nutrition/hydration si souhait patient, collégialité, traçabilité loi Claeys-Leonetti, accompagnement famille.", points: 15, duree: 4 },
      { q: "Éthique et droits.", a: "Consentement, trace, proportionnalité, famille.", points: 10, duree: 3 }
    ],
    juryComment: "Dignité, équipe soignante, pas de banalisation.",
    pieges: "Sédation sans douleur traitée avant ; confusion euthanasie ; oublier personne de confiance.",
    references: "ITEM 9, 340"
  },
  {
    id: "EHP-005",
    chapter: "ch16",
    difficulty: "A",
    title: "Polymédication — audit STOPP/START",
    context: "EHPAD — 90 lits",
    patient: "M. Lemoine, 84 ans, 14 médicaments, somnolence, chutes, constipation. DFG 38.",
    examen: "OH à la mobilisation, abdomen distendu, MMS 25.",
    biologie: "K 5.6, Na 132, créatinine 165.",
    imagerie: "N/A",
    questions: [
      { q: "Évaluation et scores.", a: "OH à la mobilisation, abdomen distendu, MMS 25....", points: 12, duree: 3 },
      { q: "Prise en charge HAS/CNEG.", a: "STOPP : BZD, anticholinergiques, double AVK ; START : vit D, statine si indication ; réconciliation, pharmacien, suivi 1 mois.", points: 15, duree: 4 },
      { q: "Éthique et droits.", a: "Consentement, trace, proportionnalité, famille.", points: 10, duree: 3 }
    ],
    juryComment: "Dignité, équipe soignante, pas de banalisation.",
    pieges: "Arrêt brutal BZD ; pas de réconciliation à l'entrée EHPAD.",
    references: "ITEM 340"
  },
  {
    id: "EHP-006",
    chapter: "ch15",
    difficulty: "B",
    title: "Incontinence mixte — ECBU négatif",
    context: "EHPAD — 90 lits",
    patient: "Mme Adam, 81 ans, urgenturine et fuites effort, nycturie x3. RPM 45 mL.",
    examen: "Cystocèle grade 2, atrophie vulvaire. Pas de globe.",
    biologie: "ECBU négatif, créatinine 90.",
    imagerie: "Échographie post-mictionnelle RPM 48 mL.",
    questions: [
      { q: "Évaluation et scores.", a: "Cystocèle grade 2, atrophie vulvaire. Pas de globe....", points: 12, duree: 3 },
      { q: "Prise en charge HAS/CNEG.", a: "Rééducation périnéale, hydratation diurne, revue diurétiques, oestrogènes locaux, pas d'anticholinergique si démence.", points: 15, duree: 4 },
      { q: "Éthique et droits.", a: "Consentement, trace, proportionnalité, famille.", points: 10, duree: 3 }
    ],
    juryComment: "Dignité, équipe soignante, pas de banalisation.",
    pieges: "Oxybutynine première ligne chez MMSE 20 ; sonde longue durée sans indication.",
    references: "ITEM 121"
  },
  {
    id: "EHP-007",
    chapter: "ch12",
    difficulty: "A",
    title: "Chutes récidivantes — protocole institution",
    context: "EHPAD — 90 lits",
    patient: "Mme Simon, 86 ans, 4 chutes/trimestre, zolpidem, quetiapine 25 mg soir.",
    examen: "Tinetti 11, vision 4/10, hypotension debout.",
    biologie: "Vit D 15, Hb 11.5.",
    imagerie: "N/A",
    questions: [
      { q: "Évaluation et scores.", a: "Tinetti 11, vision 4/10, hypotension debout....", points: 12, duree: 3 },
      { q: "Prise en charge HAS/CNEG.", a: "Sevrage psychotropes, vit D, kiné, alarme, revue environnement, fiche chute, staff pluridisciplinaire.", points: 15, duree: 4 },
      { q: "Éthique et droits.", a: "Consentement, trace, proportionnalité, famille.", points: 10, duree: 3 }
    ],
    juryComment: "Dignité, équipe soignante, pas de banalisation.",
    pieges: "Contention au lit ; pas d'analyse médicamenteuse.",
    references: "ITEM 121, 128"
  },
  {
    id: "EHP-008",
    chapter: "ch10",
    difficulty: "B",
    title: "Isolement et dépression — activation",
    context: "EHPAD — unité vie protégée",
    patient: "M. Garnier, 88 ans, peu de visites, GDS 10, refus activités.",
    examen: "Apathie, perte appétit, pas de confusion.",
    biologie: "TSH N, B12 N.",
    imagerie: "N/A",
    questions: [
      { q: "Évaluation et scores.", a: "Apathie, perte appétit, pas de confusion....", points: 12, duree: 3 },
      { q: "Prise en charge HAS/CNEG.", a: "Activation sociale, animation adaptée, SSRI si indication, lien avec famille, évaluation capacités.", points: 15, duree: 4 },
      { q: "Éthique et droits.", a: "Consentement, trace, proportionnalité, famille.", points: 10, duree: 3 }
    ],
    juryComment: "Dignité, équipe soignante, pas de banalisation.",
    pieges: "Benzodiazépines pour anxiété sociale ; antipsychotique pour apathie.",
    references: "ITEM 62"
  },
  {
    id: "EHP-009",
    chapter: "ch11",
    difficulty: "A",
    title: "Agitation nocturne sur démence",
    context: "EHPAD — unité vie protégée",
    patient: "Mme Petit, 79 ans, MMSE 16, réveils nocturnes, cris, erreur jour/nuit.",
    examen: "CAM négatif le jour, pas de fièvre.",
    biologie: "CRP 5, ionogramme N.",
    imagerie: "N/A",
    questions: [
      { q: "Évaluation et scores.", a: "CAM négatif le jour, pas de fièvre....", points: 12, duree: 3 },
      { q: "Prise en charge HAS/CNEG.", a: "Lumière diurne, réduction stimulations soir, melatonine, recherche douleur/infection, éviter antipsychotique sauf danger.", points: 15, duree: 4 },
      { q: "Éthique et droits.", a: "Consentement, trace, proportionnalité, famille.", points: 10, duree: 3 }
    ],
    juryComment: "Dignité, équipe soignante, pas de banalisation.",
    pieges: "Halopéridol systématique ; oublier ECPA douleur.",
    references: "ITEM 121"
  },
  {
    id: "EHP-010",
    chapter: "ch9",
    difficulty: "B",
    title: "Troubles comportement — antipsychotiques limités",
    context: "EHPAD — unité vie protégée",
    patient: "M. Blanc, 82 ans, agressivité verbaire soignants, démence mixte.",
    examen: "Pas de douleur identifiée initialement, ECPA 8 après toilette.",
    biologie: "N/A",
    imagerie: "N/A",
    questions: [
      { q: "Évaluation et scores.", a: "Pas de douleur identifiée initialement, ECPA 8 après toilette....", points: 12, duree: 3 },
      { q: "Prise en charge HAS/CNEG.", a: "Recherche déclencheur (douleur, infection), adaptation soins, risperidone faible dose courte durée si danger, traçabilité HAS.", points: 15, duree: 4 },
      { q: "Éthique et droits.", a: "Consentement, trace, proportionnalité, famille.", points: 10, duree: 3 }
    ],
    juryComment: "Dignité, équipe soignante, pas de banalisation.",
    pieges: "Antipsychotique au long cours ; pas d'évaluation douleur.",
    references: "ITEM 117, 9"
  },
  {
    id: "SSR-001",
    chapter: "ch12",
    difficulty: "B",
    title: "SSR — PTH droite J+10",
    context: "SSR gériatrique — séjour 21 jours",
    patient: "Mme Vasseur, 86 ans, PTH cimentée droite. Antalgie morphine PCA arrêtée, paracétamol seul insuffisant EVA 6. ATCD polymorbidité. Admission pour rééducation fonctionnelle. Projet retour domicile avec aide niveau 1.",
    examen: "Tinetti 11/28, TUG 17 s, force quadriceps 18/20 N, EVA repos 2. Bilan articulaire et cardio-pulmonaire adapté.",
    biologie: "Albumine 28, Hb 10.5, vitamine D 14, créatinine stable selon ATCD IRC.",
    imagerie: "Imagerie initiale validée ; pas de réimagerie systématique en SSR.",
    questions: [
      { q: "Objectifs SMART 3 semaines.", a: "Mobilité, autonomie ADL, prévention complications, critères sortie mesurables.", points: 12, duree: 3 },
      { q: "Interventions équipe.", a: "Médecin SSR, kiné 5 séances/sem, ergo, orthophoniste si besoin, AS sociale.", points: 12, duree: 3 },
      { q: "Sortie et transition.", a: "Synthèse MT J-2, IDE libérale, RDV 8 j, matériel domicile.", points: 10, duree: 3 }
    ],
    juryComment: "Fonctionnel, test en situation réelle (cuisine, marche extérieure).",
    pieges: "Sortie sans aide ; négliger dénutrition ; pas de synthèse.",
    references: "ITEM 121, 128, 340"
  },
  {
    id: "SSR-002",
    chapter: "ch9",
    difficulty: "B",
    title: "SSR — Post-AVC 6 semaines",
    context: "SSR gériatrique — séjour 21 jours",
    patient: "M. Mercier, 78 ans, hémiplégie G, aphasie de conduction, NIHSS 8. ATCD polymorbidité. Admission pour rééducation fonctionnelle. Projet retour domicile avec aide niveau 2.",
    examen: "Tinetti 12/28, TUG 18 s, force quadriceps 18/21 N, EVA repos 3. Bilan articulaire et cardio-pulmonaire adapté.",
    biologie: "Albumine 29, Hb 11.5, vitamine D 15, créatinine stable selon ATCD IRC.",
    imagerie: "Imagerie initiale validée ; pas de réimagerie systématique en SSR.",
    questions: [
      { q: "Objectifs SMART 3 semaines.", a: "Mobilité, autonomie ADL, prévention complications, critères sortie mesurables.", points: 12, duree: 3 },
      { q: "Interventions équipe.", a: "Médecin SSR, kiné 5 séances/sem, ergo, orthophoniste si besoin, AS sociale.", points: 12, duree: 3 },
      { q: "Sortie et transition.", a: "Synthèse MT J-2, IDE libérale, RDV 8 j, matériel domicile.", points: 10, duree: 3 }
    ],
    juryComment: "Fonctionnel, test en situation réelle (cuisine, marche extérieure).",
    pieges: "Sortie sans aide ; négliger dénutrition ; pas de synthèse.",
    references: "ITEM 121, 128, 340"
  },
  {
    id: "SSR-003",
    chapter: "ch6",
    difficulty: "B",
    title: "SSR — Post-fracture Pouteau-Colles",
    context: "SSR gériatrique — séjour 21 jours",
    patient: "Mme Roche, 80 ans, plâtre retiré, main raide, IADL cuisine compromise. ATCD polymorbidité. Admission pour rééducation fonctionnelle. Projet retour domicile avec aide niveau 3.",
    examen: "Tinetti 13/28, TUG 19 s, force quadriceps 18/22 N, EVA repos 4. Bilan articulaire et cardio-pulmonaire adapté.",
    biologie: "Albumine 30, Hb 10.5, vitamine D 16, créatinine stable selon ATCD IRC.",
    imagerie: "Imagerie initiale validée ; pas de réimagerie systématique en SSR.",
    questions: [
      { q: "Objectifs SMART 3 semaines.", a: "Mobilité, autonomie ADL, prévention complications, critères sortie mesurables.", points: 12, duree: 3 },
      { q: "Interventions équipe.", a: "Médecin SSR, kiné 5 séances/sem, ergo, orthophoniste si besoin, AS sociale.", points: 12, duree: 3 },
      { q: "Sortie et transition.", a: "Synthèse MT J-2, IDE libérale, RDV 8 j, matériel domicile.", points: 10, duree: 3 }
    ],
    juryComment: "Fonctionnel, test en situation réelle (cuisine, marche extérieure).",
    pieges: "Sortie sans aide ; négliger dénutrition ; pas de synthèse.",
    references: "ITEM 121, 128, 340"
  },
  {
    id: "SSR-004",
    chapter: "ch10",
    difficulty: "B",
    title: "SSR — Post-IC décompensée",
    context: "SSR gériatrique — séjour 21 jours",
    patient: "M. Lefebvre, 78 ans, sortie USI cardiologie, NYHA III, déconditionnement. ATCD polymorbidité. Admission pour rééducation fonctionnelle. Projet retour domicile avec aide niveau 1.",
    examen: "Tinetti 14/28, TUG 20 s, force quadriceps 18/23 N, EVA repos 2. Bilan articulaire et cardio-pulmonaire adapté.",
    biologie: "Albumine 31, Hb 11.5, vitamine D 17, créatinine stable selon ATCD IRC.",
    imagerie: "Imagerie initiale validée ; pas de réimagerie systématique en SSR.",
    questions: [
      { q: "Objectifs SMART 3 semaines.", a: "Mobilité, autonomie ADL, prévention complications, critères sortie mesurables.", points: 12, duree: 3 },
      { q: "Interventions équipe.", a: "Médecin SSR, kiné 5 séances/sem, ergo, orthophoniste si besoin, AS sociale.", points: 12, duree: 3 },
      { q: "Sortie et transition.", a: "Synthèse MT J-2, IDE libérale, RDV 8 j, matériel domicile.", points: 10, duree: 3 }
    ],
    juryComment: "Fonctionnel, test en situation réelle (cuisine, marche extérieure).",
    pieges: "Sortie sans aide ; négliger dénutrition ; pas de synthèse.",
    references: "ITEM 121, 128, 340"
  },
  {
    id: "SSR-005",
    chapter: "ch2",
    difficulty: "B",
    title: "SSR — Déconditionnement post-hospitalisation",
    context: "SSR gériatrique — séjour 21 jours",
    patient: "Mme Faure, 87 ans, 15 jours alitement pneumonie, ADL 2/6. ATCD polymorbidité. Admission pour rééducation fonctionnelle. Projet retour domicile avec aide niveau 2.",
    examen: "Tinetti 15/28, TUG 21 s, force quadriceps 18/24 N, EVA repos 3. Bilan articulaire et cardio-pulmonaire adapté.",
    biologie: "Albumine 32, Hb 10.5, vitamine D 18, créatinine stable selon ATCD IRC.",
    imagerie: "Imagerie initiale validée ; pas de réimagerie systématique en SSR.",
    questions: [
      { q: "Objectifs SMART 3 semaines.", a: "Mobilité, autonomie ADL, prévention complications, critères sortie mesurables.", points: 12, duree: 3 },
      { q: "Interventions équipe.", a: "Médecin SSR, kiné 5 séances/sem, ergo, orthophoniste si besoin, AS sociale.", points: 12, duree: 3 },
      { q: "Sortie et transition.", a: "Synthèse MT J-2, IDE libérale, RDV 8 j, matériel domicile.", points: 10, duree: 3 }
    ],
    juryComment: "Fonctionnel, test en situation réelle (cuisine, marche extérieure).",
    pieges: "Sortie sans aide ; négliger dénutrition ; pas de synthèse.",
    references: "ITEM 121, 128, 340"
  },
  {
    id: "SSR-006",
    chapter: "ch14",
    difficulty: "B",
    title: "SSR — Dysphagie post-AVC",
    context: "SSR gériatrique — séjour 21 jours",
    patient: "M. Morel, 79 ans, fausse route eau, MOIS 3/5. ATCD polymorbidité. Admission pour rééducation fonctionnelle. Projet retour domicile avec aide niveau 3.",
    examen: "Tinetti 16/28, TUG 22 s, force quadriceps 18/25 N, EVA repos 4. Bilan articulaire et cardio-pulmonaire adapté.",
    biologie: "Albumine 28, Hb 11.5, vitamine D 19, créatinine stable selon ATCD IRC.",
    imagerie: "Imagerie initiale validée ; pas de réimagerie systématique en SSR.",
    questions: [
      { q: "Objectifs SMART 3 semaines.", a: "Mobilité, autonomie ADL, prévention complications, critères sortie mesurables.", points: 12, duree: 3 },
      { q: "Interventions équipe.", a: "Médecin SSR, kiné 5 séances/sem, ergo, orthophoniste si besoin, AS sociale.", points: 12, duree: 3 },
      { q: "Sortie et transition.", a: "Synthèse MT J-2, IDE libérale, RDV 8 j, matériel domicile.", points: 10, duree: 3 }
    ],
    juryComment: "Fonctionnel, test en situation réelle (cuisine, marche extérieure).",
    pieges: "Sortie sans aide ; négliger dénutrition ; pas de synthèse.",
    references: "ITEM 121, 128, 340"
  },
  {
    id: "SSR-007",
    chapter: "ch12",
    difficulty: "B",
    title: "SSR — Post-amputation transtibiale",
    context: "SSR gériatrique — séjour 21 jours",
    patient: "M. Garcia, 85 ans, amputation ischémie, moignon cicatrisé. ATCD polymorbidité. Admission pour rééducation fonctionnelle. Projet retour domicile avec aide niveau 1.",
    examen: "Tinetti 17/28, TUG 23 s, force quadriceps 18/26 N, EVA repos 2. Bilan articulaire et cardio-pulmonaire adapté.",
    biologie: "Albumine 29, Hb 10.5, vitamine D 20, créatinine stable selon ATCD IRC.",
    imagerie: "Imagerie initiale validée ; pas de réimagerie systématique en SSR.",
    questions: [
      { q: "Objectifs SMART 3 semaines.", a: "Mobilité, autonomie ADL, prévention complications, critères sortie mesurables.", points: 12, duree: 3 },
      { q: "Interventions équipe.", a: "Médecin SSR, kiné 5 séances/sem, ergo, orthophoniste si besoin, AS sociale.", points: 12, duree: 3 },
      { q: "Sortie et transition.", a: "Synthèse MT J-2, IDE libérale, RDV 8 j, matériel domicile.", points: 10, duree: 3 }
    ],
    juryComment: "Fonctionnel, test en situation réelle (cuisine, marche extérieure).",
    pieges: "Sortie sans aide ; négliger dénutrition ; pas de synthèse.",
    references: "ITEM 121, 128, 340"
  },
  {
    id: "SSR-008",
    chapter: "ch10",
    difficulty: "B",
    title: "SSR — Réhab respiratoire BPCO",
    context: "SSR gériatrique — séjour 21 jours",
    patient: "M. Simon, 81 ans, VEMS 38%, dyspnée effort. ATCD polymorbidité. Admission pour rééducation fonctionnelle. Projet retour domicile avec aide niveau 2.",
    examen: "Tinetti 18/28, TUG 24 s, force quadriceps 18/27 N, EVA repos 3. Bilan articulaire et cardio-pulmonaire adapté.",
    biologie: "Albumine 30, Hb 11.5, vitamine D 21, créatinine stable selon ATCD IRC.",
    imagerie: "Imagerie initiale validée ; pas de réimagerie systématique en SSR.",
    questions: [
      { q: "Objectifs SMART 3 semaines.", a: "Mobilité, autonomie ADL, prévention complications, critères sortie mesurables.", points: 12, duree: 3 },
      { q: "Interventions équipe.", a: "Médecin SSR, kiné 5 séances/sem, ergo, orthophoniste si besoin, AS sociale.", points: 12, duree: 3 },
      { q: "Sortie et transition.", a: "Synthèse MT J-2, IDE libérale, RDV 8 j, matériel domicile.", points: 10, duree: 3 }
    ],
    juryComment: "Fonctionnel, test en situation réelle (cuisine, marche extérieure).",
    pieges: "Sortie sans aide ; négliger dénutrition ; pas de synthèse.",
    references: "ITEM 121, 128, 340"
  },
  {
    id: "SSR-009",
    chapter: "ch3",
    difficulty: "B",
    title: "SSR — Transition domicile aidé",
    context: "SSR gériatrique — séjour 21 jours",
    patient: "Mme Leroy, 85 ans, fille épuisée, retour domicile avec APA. ATCD polymorbidité. Admission pour rééducation fonctionnelle. Projet retour domicile avec aide niveau 3.",
    examen: "Tinetti 19/28, TUG 25 s, force quadriceps 18/28 N, EVA repos 4. Bilan articulaire et cardio-pulmonaire adapté.",
    biologie: "Albumine 31, Hb 10.5, vitamine D 22, créatinine stable selon ATCD IRC.",
    imagerie: "Imagerie initiale validée ; pas de réimagerie systématique en SSR.",
    questions: [
      { q: "Objectifs SMART 3 semaines.", a: "Mobilité, autonomie ADL, prévention complications, critères sortie mesurables.", points: 12, duree: 3 },
      { q: "Interventions équipe.", a: "Médecin SSR, kiné 5 séances/sem, ergo, orthophoniste si besoin, AS sociale.", points: 12, duree: 3 },
      { q: "Sortie et transition.", a: "Synthèse MT J-2, IDE libérale, RDV 8 j, matériel domicile.", points: 10, duree: 3 }
    ],
    juryComment: "Fonctionnel, test en situation réelle (cuisine, marche extérieure).",
    pieges: "Sortie sans aide ; négliger dénutrition ; pas de synthèse.",
    references: "ITEM 121, 128, 340"
  },
  {
    id: "SSR-010",
    chapter: "ch14",
    difficulty: "B",
    title: "SSR — Post-colectomie nutrition",
    context: "SSR gériatrique — séjour 21 jours",
    patient: "M. Caron, 83 ans, colectomie J+14, albumine 28, marche 10 m. ATCD polymorbidité. Admission pour rééducation fonctionnelle. Projet retour domicile avec aide niveau 1.",
    examen: "Tinetti 20/28, TUG 26 s, force quadriceps 18/29 N, EVA repos 2. Bilan articulaire et cardio-pulmonaire adapté.",
    biologie: "Albumine 32, Hb 11.5, vitamine D 23, créatinine stable selon ATCD IRC.",
    imagerie: "Imagerie initiale validée ; pas de réimagerie systématique en SSR.",
    questions: [
      { q: "Objectifs SMART 3 semaines.", a: "Mobilité, autonomie ADL, prévention complications, critères sortie mesurables.", points: 12, duree: 3 },
      { q: "Interventions équipe.", a: "Médecin SSR, kiné 5 séances/sem, ergo, orthophoniste si besoin, AS sociale.", points: 12, duree: 3 },
      { q: "Sortie et transition.", a: "Synthèse MT J-2, IDE libérale, RDV 8 j, matériel domicile.", points: 10, duree: 3 }
    ],
    juryComment: "Fonctionnel, test en situation réelle (cuisine, marche extérieure).",
    pieges: "Sortie sans aide ; négliger dénutrition ; pas de synthèse.",
    references: "ITEM 121, 128, 340"
  },
  {
    id: "CPL-001",
    chapter: "ch2",
    difficulty: "A",
    title: "Polypathologie et fragilité",
    context: "Consultation gériatrique / EVC / réunion de synthèse",
    patient: "Mme Henry, 84 ans, IC, FA, BPCO, arthrose, dépression. FRAIL 4, CFS 6. Personne de confiance identifiée. ≥2 hospitalisations récentes. Évaluation gériatrique standardisée demandée.",
    examen: "Cognition MMSE/MoCA, GDS, MNA, TUG, continence, douleur, peau, vision/audition. Examen multisystème orienté problèmes.",
    biologie: "Bilan complet NFS, métabolique, rénal, CRP, vitamines, TSH. Anticholinergic Burden Scale documenté.",
    imagerie: "Rationalisée selon symptôme dominant ; pas de sur-investigation.",
    questions: [
      { q: "Synthèse et priorités.", a: "Liste problèmes active, fragilité, iatrogénie, retentissement autonomie.", points: 15, duree: 4 },
      { q: "Plan individualisé.", a: "STOPP/START, objectifs réalistes, coordination ville-hôpital.", points: 15, duree: 4 },
      { q: "Éthique et social.", a: "DA, protection, MDPH, relief aidant.", points: 12, duree: 3 }
    ],
    juryComment: "Raisonnement gériatrique intégré, pas liste de maladies.",
    pieges: "Catalogue sans plan ; ignorer volonté ; oublier aidant.",
    references: "ITEM 9, 121, 123, 340"
  },
  {
    id: "CPL-002",
    chapter: "ch16",
    difficulty: "A",
    title: "Cascade iatrogène",
    context: "Consultation gériatrique / EVC / réunion de synthèse",
    patient: "M. Lemoine, 84 ans, furosémide → goutte → colchicine → diarrhée → déshydratation. Personne de confiance identifiée. ≥2 hospitalisations récentes. Évaluation gériatrique standardisée demandée.",
    examen: "Cognition MMSE/MoCA, GDS, MNA, TUG, continence, douleur, peau, vision/audition. Examen multisystème orienté problèmes.",
    biologie: "Bilan complet NFS, métabolique, rénal, CRP, vitamines, TSH. Anticholinergic Burden Scale documenté.",
    imagerie: "Rationalisée selon symptôme dominant ; pas de sur-investigation.",
    questions: [
      { q: "Synthèse et priorités.", a: "Liste problèmes active, fragilité, iatrogénie, retentissement autonomie.", points: 15, duree: 4 },
      { q: "Plan individualisé.", a: "STOPP/START, objectifs réalistes, coordination ville-hôpital.", points: 15, duree: 4 },
      { q: "Éthique et social.", a: "DA, protection, MDPH, relief aidant.", points: 12, duree: 3 }
    ],
    juryComment: "Raisonnement gériatrique intégré, pas liste de maladies.",
    pieges: "Catalogue sans plan ; ignorer volonté ; oublier aidant.",
    references: "ITEM 9, 121, 123, 340"
  },
  {
    id: "CPL-003",
    chapter: "ch4",
    difficulty: "A",
    title: "Refus dialyse",
    context: "Consultation gériatrique / EVC / réunion de synthèse",
    patient: "M. Laurent, 87 ans, IRC 4, DFG 22, lucide, refuse dialyse. Personne de confiance identifiée. ≥2 hospitalisations récentes. Évaluation gériatrique standardisée demandée.",
    examen: "Cognition MMSE/MoCA, GDS, MNA, TUG, continence, douleur, peau, vision/audition. Examen multisystème orienté problèmes.",
    biologie: "Bilan complet NFS, métabolique, rénal, CRP, vitamines, TSH. Anticholinergic Burden Scale documenté.",
    imagerie: "Rationalisée selon symptôme dominant ; pas de sur-investigation.",
    questions: [
      { q: "Synthèse et priorités.", a: "Liste problèmes active, fragilité, iatrogénie, retentissement autonomie.", points: 15, duree: 4 },
      { q: "Plan individualisé.", a: "STOPP/START, objectifs réalistes, coordination ville-hôpital.", points: 15, duree: 4 },
      { q: "Éthique et social.", a: "DA, protection, MDPH, relief aidant.", points: 12, duree: 3 }
    ],
    juryComment: "Raisonnement gériatrique intégré, pas liste de maladies.",
    pieges: "Catalogue sans plan ; ignorer volonté ; oublier aidant.",
    references: "ITEM 9, 121, 123, 340"
  },
  {
    id: "CPL-004",
    chapter: "ch17",
    difficulty: "A",
    title: "Limitation réanimation",
    context: "Consultation gériatrique / EVC / réunion de synthèse",
    patient: "Mme Duval, 92 ans, pneumonie, DA pas de réanimation, famille divisée. Personne de confiance identifiée. ≥2 hospitalisations récentes. Évaluation gériatrique standardisée demandée.",
    examen: "Cognition MMSE/MoCA, GDS, MNA, TUG, continence, douleur, peau, vision/audition. Examen multisystème orienté problèmes.",
    biologie: "Bilan complet NFS, métabolique, rénal, CRP, vitamines, TSH. Anticholinergic Burden Scale documenté.",
    imagerie: "Rationalisée selon symptôme dominant ; pas de sur-investigation.",
    questions: [
      { q: "Synthèse et priorités.", a: "Liste problèmes active, fragilité, iatrogénie, retentissement autonomie.", points: 15, duree: 4 },
      { q: "Plan individualisé.", a: "STOPP/START, objectifs réalistes, coordination ville-hôpital.", points: 15, duree: 4 },
      { q: "Éthique et social.", a: "DA, protection, MDPH, relief aidant.", points: 12, duree: 3 }
    ],
    juryComment: "Raisonnement gériatrique intégré, pas liste de maladies.",
    pieges: "Catalogue sans plan ; ignorer volonté ; oublier aidant.",
    references: "ITEM 9, 121, 123, 340"
  },
  {
    id: "CPL-005",
    chapter: "ch3",
    difficulty: "A",
    title: "Aidant épuisé",
    context: "Consultation gériatrique / EVC / réunion de synthèse",
    patient: "Fille de M. Blanc, 74 ans Parkinson, burnout, risque maltraitance. Personne de confiance identifiée. ≥2 hospitalisations récentes. Évaluation gériatrique standardisée demandée.",
    examen: "Cognition MMSE/MoCA, GDS, MNA, TUG, continence, douleur, peau, vision/audition. Examen multisystème orienté problèmes.",
    biologie: "Bilan complet NFS, métabolique, rénal, CRP, vitamines, TSH. Anticholinergic Burden Scale documenté.",
    imagerie: "Rationalisée selon symptôme dominant ; pas de sur-investigation.",
    questions: [
      { q: "Synthèse et priorités.", a: "Liste problèmes active, fragilité, iatrogénie, retentissement autonomie.", points: 15, duree: 4 },
      { q: "Plan individualisé.", a: "STOPP/START, objectifs réalistes, coordination ville-hôpital.", points: 15, duree: 4 },
      { q: "Éthique et social.", a: "DA, protection, MDPH, relief aidant.", points: 12, duree: 3 }
    ],
    juryComment: "Raisonnement gériatrique intégré, pas liste de maladies.",
    pieges: "Catalogue sans plan ; ignorer volonté ; oublier aidant.",
    references: "ITEM 9, 121, 123, 340"
  },
  {
    id: "CPL-006",
    chapter: "ch16",
    difficulty: "A",
    title: "Charge anticholinergique",
    context: "Consultation gériatrique / EVC / réunion de synthèse",
    patient: "Mme Simon, 80 ans, MMSE 18, oxybutynine, amitriptyline, hydroxyzine. Personne de confiance identifiée. ≥2 hospitalisations récentes. Évaluation gériatrique standardisée demandée.",
    examen: "Cognition MMSE/MoCA, GDS, MNA, TUG, continence, douleur, peau, vision/audition. Examen multisystème orienté problèmes.",
    biologie: "Bilan complet NFS, métabolique, rénal, CRP, vitamines, TSH. Anticholinergic Burden Scale documenté.",
    imagerie: "Rationalisée selon symptôme dominant ; pas de sur-investigation.",
    questions: [
      { q: "Synthèse et priorités.", a: "Liste problèmes active, fragilité, iatrogénie, retentissement autonomie.", points: 15, duree: 4 },
      { q: "Plan individualisé.", a: "STOPP/START, objectifs réalistes, coordination ville-hôpital.", points: 15, duree: 4 },
      { q: "Éthique et social.", a: "DA, protection, MDPH, relief aidant.", points: 12, duree: 3 }
    ],
    juryComment: "Raisonnement gériatrique intégré, pas liste de maladies.",
    pieges: "Catalogue sans plan ; ignorer volonté ; oublier aidant.",
    references: "ITEM 9, 121, 123, 340"
  },
  {
    id: "CPL-007",
    chapter: "ch4",
    difficulty: "A",
    title: "Conflit fin de vie",
    context: "Consultation gériatrique / EVC / réunion de synthèse",
    patient: "Deux enfants désaccord sédation père terminal. Personne de confiance identifiée. ≥2 hospitalisations récentes. Évaluation gériatrique standardisée demandée.",
    examen: "Cognition MMSE/MoCA, GDS, MNA, TUG, continence, douleur, peau, vision/audition. Examen multisystème orienté problèmes.",
    biologie: "Bilan complet NFS, métabolique, rénal, CRP, vitamines, TSH. Anticholinergic Burden Scale documenté.",
    imagerie: "Rationalisée selon symptôme dominant ; pas de sur-investigation.",
    questions: [
      { q: "Synthèse et priorités.", a: "Liste problèmes active, fragilité, iatrogénie, retentissement autonomie.", points: 15, duree: 4 },
      { q: "Plan individualisé.", a: "STOPP/START, objectifs réalistes, coordination ville-hôpital.", points: 15, duree: 4 },
      { q: "Éthique et social.", a: "DA, protection, MDPH, relief aidant.", points: 12, duree: 3 }
    ],
    juryComment: "Raisonnement gériatrique intégré, pas liste de maladies.",
    pieges: "Catalogue sans plan ; ignorer volonté ; oublier aidant.",
    references: "ITEM 9, 121, 123, 340"
  },
  {
    id: "CPL-008",
    chapter: "ch2",
    difficulty: "A",
    title: "Errance médicale",
    context: "Consultation gériatrique / EVC / réunion de synthèse",
    patient: "5 passages urgences 3 mois, pas de synthèse MT. Personne de confiance identifiée. ≥2 hospitalisations récentes. Évaluation gériatrique standardisée demandée.",
    examen: "Cognition MMSE/MoCA, GDS, MNA, TUG, continence, douleur, peau, vision/audition. Examen multisystème orienté problèmes.",
    biologie: "Bilan complet NFS, métabolique, rénal, CRP, vitamines, TSH. Anticholinergic Burden Scale documenté.",
    imagerie: "Rationalisée selon symptôme dominant ; pas de sur-investigation.",
    questions: [
      { q: "Synthèse et priorités.", a: "Liste problèmes active, fragilité, iatrogénie, retentissement autonomie.", points: 15, duree: 4 },
      { q: "Plan individualisé.", a: "STOPP/START, objectifs réalistes, coordination ville-hôpital.", points: 15, duree: 4 },
      { q: "Éthique et social.", a: "DA, protection, MDPH, relief aidant.", points: 12, duree: 3 }
    ],
    juryComment: "Raisonnement gériatrique intégré, pas liste de maladies.",
    pieges: "Catalogue sans plan ; ignorer volonté ; oublier aidant.",
    references: "ITEM 9, 121, 123, 340"
  },
  {
    id: "CPL-009",
    chapter: "ch3",
    difficulty: "A",
    title: "Précarité sociale",
    context: "Consultation gériatrique / EVC / réunion de synthèse",
    patient: "M. Nguyen, 91 ans, APA non demandée, isolement. Personne de confiance identifiée. ≥2 hospitalisations récentes. Évaluation gériatrique standardisée demandée.",
    examen: "Cognition MMSE/MoCA, GDS, MNA, TUG, continence, douleur, peau, vision/audition. Examen multisystème orienté problèmes.",
    biologie: "Bilan complet NFS, métabolique, rénal, CRP, vitamines, TSH. Anticholinergic Burden Scale documenté.",
    imagerie: "Rationalisée selon symptôme dominant ; pas de sur-investigation.",
    questions: [
      { q: "Synthèse et priorités.", a: "Liste problèmes active, fragilité, iatrogénie, retentissement autonomie.", points: 15, duree: 4 },
      { q: "Plan individualisé.", a: "STOPP/START, objectifs réalistes, coordination ville-hôpital.", points: 15, duree: 4 },
      { q: "Éthique et social.", a: "DA, protection, MDPH, relief aidant.", points: 12, duree: 3 }
    ],
    juryComment: "Raisonnement gériatrique intégré, pas liste de maladies.",
    pieges: "Catalogue sans plan ; ignorer volonté ; oublier aidant.",
    references: "ITEM 9, 121, 123, 340"
  },
  {
    id: "CPL-010",
    chapter: "ch18",
    difficulty: "A",
    title: "Synthèse EVC intégrée",
    context: "Consultation gériatrique / EVC / réunion de synthèse",
    patient: "Dossier complet 5 pathologies, 10 médicaments, GIR 3, projet soins. Personne de confiance identifiée. ≥2 hospitalisations récentes. Évaluation gériatrique standardisée demandée.",
    examen: "Cognition MMSE/MoCA, GDS, MNA, TUG, continence, douleur, peau, vision/audition. Examen multisystème orienté problèmes.",
    biologie: "Bilan complet NFS, métabolique, rénal, CRP, vitamines, TSH. Anticholinergic Burden Scale documenté.",
    imagerie: "Rationalisée selon symptôme dominant ; pas de sur-investigation.",
    questions: [
      { q: "Synthèse et priorités.", a: "Liste problèmes active, fragilité, iatrogénie, retentissement autonomie.", points: 15, duree: 4 },
      { q: "Plan individualisé.", a: "STOPP/START, objectifs réalistes, coordination ville-hôpital.", points: 15, duree: 4 },
      { q: "Éthique et social.", a: "DA, protection, MDPH, relief aidant.", points: 12, duree: 3 }
    ],
    juryComment: "Raisonnement gériatrique intégré, pas liste de maladies.",
    pieges: "Catalogue sans plan ; ignorer volonté ; oublier aidant.",
    references: "ITEM 9, 121, 123, 340"
  }
];

if (typeof module !== 'undefined' && module.exports) module.exports = { MEGA_CASES };
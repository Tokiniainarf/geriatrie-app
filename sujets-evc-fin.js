// Vrais sujets EVC — Derniers sujets pour couverture complète
const SUJETS_EVC_FIN = [
  {
    id: 'sef-1', annee: 2012, session: 'Normal',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes interne en gériatrie. Ce patient est hospitalisé pour dénutrition et escarres.',
    sujet: `M. GRIS Marcel, 84 ans, hospitalisé pour dénutrition sévère et escarres multiples.

ATCD: Alzheimer stade GDS 6, HTA (ramipril 5mg), diabète T2 (gliclazide 60mg), FA permanente (warfarine INR 2-3), BPCO (salbutamol).

TRAITEMENT: ramipril 5mg, gliclazide 60mg, warfarine (dose variable), salbutamol.

CONTEXTE: Vit seul. Aide à domicile 1h/j. Refuse de manger depuis 2 mois. Reste au lit.

ÉVALUATION: MMS 6/30. GDS-15 14/15. ADL 1/6. IADL 0/8. MNA 7/30. Tinetti 2/28. Braden 8/23. PAINAD 8/10. Poids 45 kg (IMC 16.0). Taille 160 cm. Albumine 18 g/L. Pré-albumine 0.05 g/L. Hb 9.5 g/dL. Vit D 5 ng/mL. Créatinine 120 (DFG 45). INR 3.5.

EXAMEN: Escarres sacrée stade III (5x6 cm, fond nécrotique), talon droit stade II (3x3 cm), trochanter gauche stade I. Peau sèche, turgescence diminuée. Sarcopénie sévère. État grabataire.`,
    questions: [
      { q: 'Analysez la dénutrition sévère de ce patient (causes, sévérité, conséquences).', a: 'Sévérité: MNA 7/30 = dénutrition sévère. IMC 16.0 = dénutrition sévère. Albumine 18 g/L = dénutrition sévère. Causes: Alzheimer (oublie de manger, perte autonomie), isolement social, dépression, dysphagie probable, perte d\'appétit. Conséquences: sarcopénie, escarres multiples, immunodépression, risque fracture, état grabataire.' },
      { q: 'Quel plan nutritionnel et de soins des escarres proposez-vous ?', a: 'Nutrition: enrichissement, CNO x3/j, fractionnement 6 repas/j, protéines 1.5g/kg/j, Vit D 100 000UI bolus, calcium. Si échec: nutrition entérale. Escarres: matelas anti-escarres, changement position H2, pansements adaptés (sacré: hydrocellulaire, talon: hydrocolloïde), nutrition enrichie, soins cutanés.' },
      { q: 'Comment gérez-vous l\'INR à 3.5 ?', a: 'Arrêt warfarine 1-2 jours. Vitamine K1 1-2mg PO. Réévaluation INR dans 48h. Reprendre warfarine à dose réduite. Rechercher cause (déshydratation, interaction). Surveillance INR 2x/sem.' },
      { q: 'Quelle est votre attitude concernant la nutrition artificielle ?', a: 'En Alzheimer avancé (GDS 6), la nutrition artificielle (PEG) n\'améliore pas la qualité de vie ni la survie. Discussion avec la famille. Si patient conscient et consentant → SNG essai 2 semaines. Si refus → soins palliatifs confort. Ne pas imposer.' },
      { q: 'Quel est le pronostic ?', a: 'Pronostic très réservé: Alzheimer sévère + dénutrition sévère + escarres multiples + état grabataire. Discussion avec la famille sur objectifs de soins. Soins palliatifs si détérioration. Directives anticipées ? Personne de confiance ?' }
    ],
    juryTips: 'Le jury attend une analyse complète de la dénutrition et des escarres. La nutrition artificielle en Alzheimer avancé est un débat éthique majeur. Le pronostic est sombre mais le maintien de la qualité de vie est l\'objectif.'
  },
  {
    id: 'sef-2', annee: 2011, session: 'Rattrapage',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes médecin de garde. Ce patient est amené pour douleur thoracique.',
    sujet: `M. NOIR André, 79 ans, amené par le SAMU pour douleur thoracique depuis 1h.

ATCD: HTA (périndopril 5mg), diabète T2 (metformine 1000mg x2), dyslipidémie (atorvastatine 20mg), ex-fumeur (30 paquets-année).

TRAITEMENT: périndopril 5mg, metformine 1000mg x2, atorvastatine 20mg.

ÉVALUATION: PA 90/50. FC 120. FR 26. SpO2 90% (air ambulant). T° 36.5°C. Douleur thoracique constrictive, irradiation bras gauche et mâchoire, EVA 9/10. Sueurs. Pâleur. OAP (crépitants bilatéraux).

ECG: sous-décalage ST V1-V4, sus-décalage ST DII-DIII-aVF. Rythme sinusal tachycarde.

BIOLOGIE: Troponine I à H0: 1.2 ng/mL (N < 0.04). CK-MB: 60 UI/L. Hb 12.5. Créatinine 130 (DFG 42). K 4.0. Glycémie 3.5 g/L. Gaz du sang: pH 7.35, PaCO2 30, PaO2 60, HCO3 18.

IMAGERIE: Rx thoracique: OAP bilatéral.`,
    questions: [
      { q: 'Quel est le diagnostic ?', a: 'IDM aigu ST- antérieur compliqué d\'OAP. Arguments: douleur thoracique constrictive 1h, irradiation bras+ mâchoire, sueurs, sous-décalage ST V1-V4, troponine I 1.2 ng/mL, CK-MB 60, OAP (crépitants bilatéraux, Rx). Facteurs de risque: HTA, diabète, dyslipidémie, tabac.' },
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. Position assise. 2. Oxygène haut débit. 3. Furosémide 40mg IV (OAP). 4. Morphine 2mg IV (douleur + dyspnée). 5. Aspirine 250mg IV. 6. Clopidogrel 300mg PO. 7. Héparine UF 5000UI IV. 8. Angiographie coronaire < 24h. 9. Pas de thrombolyse (ST-).' },
      { q: 'Quels sont les risques spécifiques chez ce patient ?', a: '1. Choc cardiogénique (PA 90/50, FC 120, OAP). 2. IRA (créatinine 130, DFG 42). 3. Hyperglycémie (3.5 g/L). 4. Acidose métabolique (pH 7.35, HCO3 18). 5. Âge 79 ans: pronostic plus réservé.' },
      { q: 'Comment gérez-vous la glycémie à 3.5 g/L ?', a: '1. Insuline 10UI IV. 2. Surveillance glycémique H1, H2, H4. 3. Arrêt metformine (IRA). 4. Insuline SC si glycémie > 1.8 g/L. 5. Objectif glycémique: 1.4-1.8 g/L.' },
      { q: 'Quel est le suivi post-angiographie ?', a: '1. USIC. 2. Surveillance ECG continue. 3. Troponine H3, H6, H12. 4. Échocardiographie (FEVG). 5. Double antiagrégation 12 mois. 6. Bêtabloquant si FEVG < 40%. 7. IEC/ARA2. 8. Statine. 9. Réadaptation cardiaque.' }
    ],
    juryTips: 'Le jury attend une prise en charge rapide de l\'OAP + IDM. Le sous-décalage ST = angiographie < 24h (pas de thrombolyse). L\'arrêt de la metformine est obligatoire en IRA.'
  },
  {
    id: 'sef-3', annee: 2010, session: 'Normal',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes interne en gériatrie. Ce patient est adressé pour bilan gériatrique.',
    sujet: `Mme JAUNE Marie, 76 ans, adressée par son médecin traitant pour "perte d\'autonomie".

ATCD: HTA (losartan 50mg), dyslipidémie (atorvastatine 20mg), arthrose genou bilatérale, dépression (sertraline 50mg).

TRAITEMENT: losartan 50mg, atorvastatine 20mg, sertraline 50mg, paracétamol 1g x3.

CONTEXTE: Vit seule. Fille à 50 km. Depuis 6 mois: ne sort plus, ne cuisine plus, ne fait plus le ménage. Chute il y a 1 mois (pas de fracture).

ÉVALUATION: PA 130/80. FC 72. MMS 24/30. GDS-15 10/15. ADL 5/6. IADL 4/8. MNA 22/30. Tinetti 20/28. Poids 60 kg (était 63 kg). Albumine 35 g/L. TSH normale. B12 normale. Créatinine 90 (DFG 62).`,
    questions: [
      { q: 'Analysez la perte d\'autonomie de cette patiente.', a: 'Perte d\'autonomie fonctionnelle: ADL 5/6 (toilette), IADL 4/8 (courses, cuisine, ménage). Facteurs: arthrose genou (douleur, raideur), dépression (GDS 10/15), chute (1 mois), dénutrition légère (perte 3 kg, MNA 22), isolement social (fille à 50 km). Pas de démence (MMS 24/30).' },
      { q: 'Quels examens complémentaires demandez-vous ?', a: '1. Rx genoux (arthrose). 2. Évaluation orthostatique (PA couché/debout). 3. Bilan nutritionnel complet. 4. Évaluation dépression (HDRS). 5. Évaluation douleur (EVA). 6. Échographie rénale (DFG 62). 7. Vit D, calcémie.' },
      { q: 'Quelle prise en charge proposez-vous ?', a: '1. Rééducation genoux (kiné 3x/sem). 2. Antalgie: paracétamol 1g x3/j. 3. Sertraline 50mg (maintien dépression). 4. Vit D 800UI/j. 5. Enrichissement alimentaire. 6. Aide à domicile renforcée (2-3h/j). 7. Activités sociales. 8. Adaptation domicile (barres, tapis).' },
      { q: 'Comment prévenir les chutes ?', a: '1. Tinetti 20/28 = risque modéré. 2. Rééducation équilibre (kiné). 3. Adaptation domicile (éclairage, barres, tapis). 4. Vit D 800UI/j. 5. Correction visuelle. 6. Chaussures antidérapantes. 7. Téléalarme. 8. Révision médicamenteuse.' },
      { q: 'Quel est le plan de suivi ?', a: 'Réévaluation à 1 mois (ADL, IADL, Tinetti, GDS). Bilan biologique à 3 mois. RDV médecin traitant J7. Kiné ambulatoire. Si amélioration: maintien domicile. Si dégradation: EHPAD ou SSR.' }
    ],
    juryTips: 'Le jury attend une analyse globale de la perte d\'autonomie (pas seulement médicale). La dépression est un facteur majeur de perte d\'autonomie chez le sujet âgé. L\'arthrose explique la limitation fonctionnelle.'
  }
];

// Vrais sujets EVC — Derniers sujets disponibles
const SUJETS_EVC_EXTRA = [
  {
    id: 'see-1', annee: 2018, session: 'Rattrapage',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes interne en gériatrie. Ce patient est adressé pour troubles du comportement.',
    sujet: `M. DURAND Paul, 81 ans, adressé par son médecin traitant pour "agitation et agressivité depuis 2 semaines".

ATCD: Alzheimer stade GDS 5 (diagnostiqué il y a 3 ans), HTA (amlodipine 5mg), FA permanente (apixaban 2.5mg x2), BPH (tamsulosine 0.4mg), dépression (sertraline 50mg).

TRAITEMENT: amlodipine 5mg, apixaban 2.5mg x2, tamsulosine 0.4mg, sertraline 50mg, donépezil 10mg.

CONTEXTE: Vit avec sa femme. Aide à domicile 2h/j. Depuis 2 semaines: crie la nuit, frappe sa femme, dit qu'il veut rentrer chez lui (il est chez lui). Refuse de manger. Ne dort pas.

ÉVALUATION: MMS 6/30. GDS-15 8/15. ADL 2/6. ECPA 5/10. T° 37.2°C. PA 130/80. FC 78. Glycémie 1.4 g/L. Pas de globe vésical. Transit: pas de selle depuis 4 jours. Peau: escarre talon droit stade I.`,
    questions: [
      { q: 'Listez les causes possibles de cette agitation.', a: '1. Douleur (ECPA 5/10, escarre talon, constipation 4 jours). 2. Constipation (fréquente sous donépezil, 4 jours sans selle). 3. Hypoglycémie (1.4 g/L = basse). 4. Faim (refuse de manger). 5. Infection (T° 37.2°C = limite). 6. Environnement (dit "rentrer chez lui" = désorientation). 7. Médicaments (sertraline peut aggraver l\'agitation). 8. Escarre (douleur au talon).' },
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. Douleur: paracétamol 1g PO. 2. Constipation: macrogol 1 sachet + si échec lavement. 3. Glycémie: sucre oral (1.4 g/L). 4. ECBU (infection ?). 5. NFS, CRP, iono. 6. Environnement: lumière, calme, présence. 7. Pas de contention. 8. Si agitation sévère: quétiapine 12.5mg PO (PAS halopéridol = DLB ?).' },
      { q: 'Pourquoi ne donnez-vous PAS d\'halopéridol ?', a: '1. Alzheimer avancé = risque extrapyramidal. 2. DLB possible (fluctuations, hallucinations ?) = hypersensibilité neuroleptique. 3. ATCD de démence = risque de syndrome malin. 4. Critères Beers = antipsychotiques augmentent mortalité. 5. Alternative: quétiapine 12.5-25mg (moins de risque).' },
      { q: 'Comment gérez-vous l\'escarre talon stade I ?', a: '1. Matelas anti-escarres. 2. Changement position H2. 3. Talons en l\'air (coussin). 4. Hydratation cutanée. 5. Nutrition enrichie (si accepte). 6. Surveillance quotidienne. 7. Si stade II: pansement hydrocolloïde.' },
      { q: 'Quel est le projet de soins à moyen terme ?', a: '1. Si agitation contrôlée: maintien à domicile avec aide renforcée. 2. Si agitation persistante: EHPAD. 3. Discussion avec la femme (charge d\'aidant). 4. Révision médicale tous les 3 mois. 5. Soins palliatifs si détérioration rapide. 6. Directives anticipées.' }
    ],
    juryTips: 'Le jury attend que vous cherchiez TOUTES les causes d\'agitation (douleur, constipation, hypoglycémie, infection) avant de médicamenter. Le donépezil peut causer la constipation. L\'hypoglycémie à 1.4 g/L est un facteur aggravant.'
  },
  {
    id: 'see-2', annee: 2017, session: 'Normal',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes médecin de garde. Ce patient est amené aux urgences pour douleur thoracique.',
    sujet: `M. MARTIN Georges, 83 ans, amené par le SAMU pour douleur thoracique depuis 2h.

ATCD: HTA (périndopril 5mg), diabète T2 (metformine 850mg x2), dyslipidémie (atorvastatine 20mg), BPCO GOLD II (tiotropium 18µg), ex-fumeur (30 paquets-année). ATCD d'IDM il y a 5 ans.

TRAITEMENT: périndopril 5mg, metformine 850mg x2, atorvastatine 20mg, tiotropium 18µg, aspirine 100mg.

ÉVALUATION: PA 100/60. FC 110. FR 24. SpO2 92% (air ambulant). T° 36.8°C. Douleur thoracique constrictive, irradiation bras gauche, EVA 8/10. Sueurs. Pâleur. Pas de décompensation cardiaque. Pas de déficit neuro.

ECG: sus-décalage ST V1-V4, sous-décalage ST DII-DIII-aVF. Rythme sinusal tachycarde.

BIOLOGIE: Troponine I à H0: 0.8 ng/mL (N < 0.04). CK-MB: 45 UI/L. NFS normale. Créatinine 120 (DFG 48). K 4.2. Glycémie 2.8 g/L. CRP 12.`,
    questions: [
      { q: 'Quel est le diagnostic et quels sont les arguments ?', a: 'IDM aigu ST+ antérieur (sus-décalage ST V1-V4). Arguments: douleur thoracique constrictive 2h, irradiation bras gauche, sueurs, ECG ST+ V1-V4, troponine I 0.8 ng/mL (très élevée), CK-MB 45, ATCD IDM 5 ans. Facteurs de risque: HTA, diabète, dyslipidémie, tabac, BPCO.' },
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. Aspirine 250mg IV (charge). 2. Clopidogrel 300mg PO (charge). 3. Héparine non fractionnée 5000UI IV. 4. Morphine 2-4mg IV si douleur persistante. 5. Oxygène si SpO2 < 92%. 6. Angioplastie primaire < 120 min (cathétérisme). 7. Si pas de cathlab: thrombolyse (alteplase).' },
      { q: 'Quels sont les risques spécifiques chez ce patient ?', a: '1. Diabète (DFG 48): risque de survenue de complication rénale (contraste iodé). 2. BPCO: risque de détresse respiratoire. 3. Âge 83 ans: pronostic plus réservé. 4. ATCD IDM: coronaropathie étendue. 5. Glycémie 2.8: risque d\'hypoglycémie per-procédure.' },
      { q: 'Comment gérez-vous la glycémie à 2.8 g/L ?', a: '1. Glucose 30% IV 30mL. 2. Réévaluation glycémique H1. 3. Arrêt metformine (IRA possible + contraste). 4. Insuline SC si glycémie > 1.8 g/L. 5. Surveillance glycémique H1, H2, H4, H6.' },
      { q: 'Quel est le suivi post-angioplastie ?', a: '1. Unité de soins intensifs cardiologiques. 2. Surveillance ECG continue. 3. Troponine H3, H6, H12. 4. Échocardiographie (FEVG). 5. Double antiagrégation (aspirine + clopidogrel) 12 mois. 6. Bêtabloquant si FEVG < 40%. 7. IEC/ARA2. 8. Statine. 9. Réadaptation cardiaque.' }
    ],
    juryTips: 'Le jury attend une prise en charge rapide de l\'IDM ST+ (angioplastie < 120 min). Le diabète + DFG 48 = risque rénal lors du contraste iodé. La metformine doit être arrêtée. L\'âge n\'est pas une contre-indication à l\'angioplastie.'
  },
  {
    id: 'see-3', annee: 2016, session: 'Rattrapage',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes interne en SSR. Ce patient doit être préparé à la sortie.',
    sujet: `Mme LAMBERT Marie, 78 ans, en SSR depuis 3 semaines pour rééducation post-fracture col fémoral gauche (prothèse).

ATCD: HTA (losartan 50mg), ostéoporose (alendronate 70mg/sem + Vit D 1000UI), dépression (sertraline 50mg), arthrose genou droit.

TRAITEMENT: losartan 50mg, alendronate 70mg/sem, Vit D 1000UI, sertraline 50mg, paracétamol 1g x3.

ÉVALUATION ACTUELLE: ADL 4/6 (toilette et habillage nécessitent aide partielle). IADL 3/8. Tinetti 18/28. MMS 24/30. GDS-15 8/15. MNA 21/30. Poids 54 kg (était 58 kg). PA 130/80. Douleur EVA 2/10 (genou droit).

CONTEXTE SOCIAL: Vit seule en RDC. Escalier 1 étage pour la chambre. Fille à 200 km (visite 1x/mois). Aide à domicile avant la fracture: 1h/j (toilette).`,
    questions: [
      { q: 'Évaluez l\'autonomie de cette patiente et le risque de rechute.', a: 'Autonomie: ADL 4/6 = aide partielle. IADL 3/8 = dépendante pour courses, cuisine, ménage, transport. Tinetti 18/28 = risque de chute modéré-élevé. Risque de rechute: ostéoporose (ATCD fracture), arthrose genou (douleur, raideur), dépression (GDS 8), dénutrition légère (MNA 21, perte 4 kg).' },
      { q: 'Quelles conditions devez-vous réunir pour le retour à domicile ?', a: '1. Aide à domicile renforcée (2-3h/j minimum). 2. Adaptation domicile: barres d\'appui salle de bain, rehausseur WC, tapis antidérapant. 3. Kiné ambulatoire 3x/sem. 4. RDV médecin traitant J7. 5. RDV orthopédiste J30. 6. Livraison de repas. 7. Téléalarme. 8. Correction visuelle.' },
      { q: 'Quel traitement prescrivez-vous en sortie ?', a: '1. Losartan 50mg (maintien). 2. Alendronate 70mg/sem (maintien, prévention fracture). 3. Vit D 2000UI/j (augmentation pour ostéoporose). 4. Sertraline 50mg (maintien). 5. Paracétamol 1g x3/j (si douleur). 6. Énoxaparine 40mg/j pendant 2 semaines (prophylaxie TVP). 7. Kiné ambulatoire.' },
      { q: 'Quels examens demandez-vous en sortie ?', a: '1. NFS, iono, créatinine à J15. 2. DEXA à 1 an (ostéoporose). 3. Rx genou droit si douleur persistante. 4. Bilan Vit D à 3 mois. 5. Évaluation GDS-15 à 1 mois (dépression). 6. MNA à 1 mois (nutrition).' },
      { q: 'Que faites-vous si la patiente ne peut pas rentrer chez elle ?', a: '1. Évaluer les conditions de retour (visite à domicile par assistante sociale). 2. Si domicile inadapté: EHPAD temporaire ou permanent. 3. Si fille ne peut pas aider: aide à domicile complète. 4. Si autonomie insuffisante: SSR complémentaire ou EHPAD. 5. Discuter avec la patiente (autonomie, choix).' }
    ],
    juryTips: 'Le jury attend une évaluation complète de l\'autonomie (ADL, IADL, Tinetti) et une planification de la sortie dès l\'admission en SSR. La prophylaxie TVP est obligatoire post-chirurgie orthopédique. La Vit D doit être augmentée pour la prévention de fracture.'
  }
];

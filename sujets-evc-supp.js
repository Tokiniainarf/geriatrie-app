// Vrais sujets EVC — Sujets détaillés supplémentaires
const SUJETS_EVC_SUPP = [
  {
    id: 'ses-1', annee: 2021, session: 'Normal',
    duree: '30 min (15 min préparation + 15 min oral)',
    bareme: '20 points',
    consigne: 'Vous êtes interne en gériatrie. Ce patient est hospitalisé pour dénutrition.',
    sujet: `Mme PETIT Louise, 86 ans, hospitalisée pour dénutrition sévère. Sa fille rapporte que sa mère ne mange presque plus depuis 3 mois, reste au lit, a perdu 8 kg.

ATCD: Alzheimer stade GDS 5, HTA (ramipril 5mg), ostéoporose (alendronate 70mg/sem + Vit D 1000UI), FA permanente (warfarine INR 2-3), dépression (paroxétine 20mg).

ÉVALUATION: MMS 8/30. GDS-15 14/15. ADL 2/6. IADL 0/8. MNA 9/30. Tinetti 6/28. Braden 12/23. ECPA 4/10. Poids 42 kg (IMC 16.2). Taille 155 cm. Albumine 22 g/L. Pré-albumine 0.08 g/L. Hb 10.5 g/dL. Vit D 8 ng/mL. Créatinine 95 (DFG 52). INR 3.8.

EXAMEN: Escarre sacrée stade II (3x4 cm, fond fibrineux). Peau sèche, turgescence diminuée. Sarcopénie sévère.`,
    questions: [
      { q: 'Analysez la dénutrition de cette patiente (causes, sévérité, conséquences).', a: 'Sévérité: MNA 9/30 = dénutrition sévère. IMC 16.2 = dénutrition sévère. Albumine 22 g/L = dénutrition sévère. Perte 8 kg en 3 mois (~16% du poids). Causes: Alzheimer (oublie de manger, perte autonomie), isolement social, dépression, dysphagie probable, perte d\'appétit. Conséquences: sarcopénie, escarre, immunodépression, risque fracture.' },
      { q: 'Quel plan nutritionnel détaillé proposez-vous ?', a: '1. Enrichissement alimentaire (crème, beurre, fromage, œufs). 2. CNO x3/j (Delical 2kcal, 200mL). 3. Fractionnement 6 repas/j. 4. Protéines 1.5g/kg/j (63g). 5. Vit D 100 000UI en bolus puis 1000UI/j. 6. Calcium 1g/j. 7. Si échec 1 semaine: nutrition entérale par SNG. 8. Aide à l\'alimentation (aide-soignante). 9. Surveillance: poids 2x/sem, albumine J15.' },
      { q: 'Comment gérez-vous l\'INR à 3.8 ?', a: 'INR 3.8 = surdosage warfarine. 1. Arrêt warfarine 1-2 jours. 2. Si INR > 5: vitamine K1 1-2mg PO. 3. Réévaluation INR dans 48h. 4. Reprendre warfarine à dose réduite. 5. Rechercher cause: déshydratation (Na ?), interaction médicamenteuse (paroxétine inhibe CYP2D6 → ↑ warfarine). 6. Surveillance INR 2x/sem pendant 2 semaines.' },
      { q: 'Quelle est votre attitude concernant la nutrition artificielle ?', a: 'En Alzheimer modéré-sévère (GDS 5), la nutrition artificielle (PEG) n\'améliore pas la qualité de vie ni la survie (recommandations HAS). Discussion avec la famille: objectif = confort, pas survie. Si la patiente accepte la SNG → essai 2 semaines. Si refus ou échec → soins palliatifs confort. Ne pas imposer de nutrition artificielle.' },
      { q: 'Quel est le pronostic et quelle est votre attitude éthique ?', a: 'Pronostic réservé: Alzheimer sévère + dénutrition sévère + escarre + isolement. Discussion avec la famille sur les objectifs de soins. Directives anticipées ? Personne de confiance ? Si détérioration rapide → soins palliatifs. Si stabilisation → maintien en EHPAD avec soins adaptés. Accompagnement de la fille (préparation du deuil).' }
    ],
    juryTips: 'Le jury attend une analyse complète de la dénutrition (causes multiples), une stratégie nutritionnelle adaptée (pas de PEG en Alzheimer avancé), et une discussion éthique sur la nutrition artificielle. L\'INR à 3.8 est un piège — il faut l\'expliquer et le gérer.'
  },
  {
    id: 'ses-2', annee: 2020, session: 'Normal',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes médecin de garde. Ce résident EHPAD est agité.',
    sujet: `M. BERNARD Marcel, 85 ans, résident en EHPAD depuis 1 an, retrouvé agité à 2h du matin.

ATCD: Alzheimer stade GDS 5, HTA (amlodipine 5mg), FA permanente (apixaban 5mg x2), BPH (tamsulosine 0.4mg), dépression (mirtazapine 15mg), douleurs chroniques (paracétamol 1g x3).

TRAITEMENT: amlodipine 5mg, apixaban 5mg x2, tamsulosine 0.4mg, mirtazapine 15mg, paracétamol 1g x3, donépezil 10mg.

ÉVALUATION: MMS 10/30. GDS-15 10/15. ADL 2/6. Tinetti 8/28. Braden 14/23. ECPA 6/10. T° 37.5°C. PA 135/80. FC 88. SpO2 95%. Glycémie 2.1 g/L. Pas de fracture visible. Ecchymose frontale. Confus, désorienté.`,
    questions: [
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. État hémodynamique (PA, FC, SpO2). 2. Examen neuro complet (GCS, pupilles, déficit). 3. Examen orthopédique (hanche, poignet, crâne). 4. ECG (syncope ? arythmie sous FA ?). 5. Bilan biologique (NFS, iono, créatinine, glycémie, troponine). 6. Rx si douleur. 7. Scanner crâne si GCS < 15 ou anticoagulant (apixaban). 8. Surveillance neuro H4.' },
      { q: 'Identifiez les facteurs de risque de chute.', a: 'Alzheimer (désorientation, noctambulisme). Hypotension orthostatique (amlodipine). Mirtazapine (sédation). FA (syncope ?). Tinetti 8/28 = risque très élevé. Braden 14/23 = risque escarre. Apixaban = risque hémorragique si chute. Glycémie 2.1 = hypoglycémie relative.' },
      { q: 'Comment gérez-vous l\'anticoagulant (apixaban) ?', a: '1. Scanner crâne systématique (anticoagulant + chute + ecchymose frontale). 2. Si pas d\'hémorragie: maintien apixaban. 3. Si hémorragie: arrêt apixaban, avis neurochirurgical. 4. Surveillance: céphalées, vomissements, déficit neuro, GCS. 5. Reprise apixaban à J24-48h si pas d\'hémorragie.' },
      { q: 'Quelles mesures de prévention mettez-vous en place ?', a: 'Lit en position basse. Tapis de sol. Alarme. Lumière de nuit. Changement position H2. Matelas anti-escarres. Révision médicamenteuse (mirtazapine). Surveillance glycémique. Évaluation douleur (ECPA). Communication avec la famille.' },
      { q: 'Que faites-vous pour la glycémie à 2.1 g/L ?', a: '1. Sucre oral si conscient. 2. Glucose 30% IV si inconscient. 3. Réévaluation glycémique H1, H2, H4. 4. Adapter le traitement antidiabétique (suspension si sous). 5. Rechercher cause (jeûne, infection, médicaments). 6. Éducation équipe (signes hypoglycémie).' }
    ],
    juryTips: 'Le jury attend une prise en charge systématique de la chute chez le sujet âgé anticoagulant. Le scanner crâne est obligatoire. L\'hypoglycémie à 2.1 g/L est un facteur contributif à chercher systématiquement.'
  },
  {
    id: 'ses-3', annee: 2019, session: 'Normal',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes interne aux urgences. Ce patient est amené par le SAMU.',
    sujet: `M. MOREAU André, 78 ans, amené par le SAMU pour confusion aiguë depuis 12h.

ATCD: BPCO GOLD III (tiotropium 18µg, salbutamol), HTA (périndopril 5mg), diabète T2 (metformine 1000mg x2), ex-fumeur (40 paquets-année). Vaccination pneumocoque à jour.

TRAITEMENT: tiotropium 18µg, salbutamol à la demande, périndopril 5mg, metformine 1000mg x2.

CONTEXTE: Sa femme le trouve confus ce matin. Il ne la reconnaît pas, parle de manière incohérente. Agitation nocturne.

ÉVALUATION: T° 38.8°C. PA 130/80. FC 110. FR 28. SpO2 88% (air ambulant). MMS 12/30 (habituel 24/30). CAM positive. ECPA 7/10. Crépitants bilatéraux. Globe vésical non palpé. Peau chaude et sèche.

BIOLOGIE: Hb 14.5, GB 18 000 (PNN 88%), Plaquettes 320 000. Créatinine 155 (habituelle 85). Na 150, K 5.2. Glycémie 3.2 g/L. CRP 250. PCT 8. Lactates 3.5. Gaz du sang: pH 7.32, PaCO2 55, PaO2 58, HCO3 22.

IMAGERIE: Rx thoracique: infiltrat bilatéral. TDM cérébral: pas de lésion aiguë.`,
    questions: [
      { q: 'Analysez ce tableau clinique et proposez un diagnostic.', a: 'Confusion aiguë (delirium) sur infection pulmonaire sévère chez BPCO. CAM positive. Facteurs: âge 78 ans, BPCO sévère, infection (T° 38.8, GB 18 000, CRP 250, PCT 8), insuffisance respiratoire (SpO2 88%, PaO2 58, PaCO2 55), déshydratation (Na 150, créatinine 155 vs 85), hyperglycémie (3.2 g/L).' },
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. Oxygène lentules 2L/min (BPCO: cible 88-92%). 2. Antibiothérapie: amoxicilline-clavulanate 2g IV + azithromycine 500mg IV. 3. Réhydratation: NaCl 0.9% 500mL. 4. Correction glycémie: insuline 10UI IV + surveillance H1, H2, H4. 5. Sondage urinaire si rétention. 6. Si agitation: halopéridol 0.5mg PO. 7. Arrêt metformine (IRA + acidose possible). 8. VNI si acidose respiratoire persistante.' },
      { q: 'Pourquoi arrêtez-vous la metformine ?', a: '1. IRA (créatinine 155 vs 85 = DFG < 30). 2. Risque d\'acidose lactique (lactates 3.5). 3. Déshydratation (Na 150). 4. La metformine est contre-indiquée en IRA sévère. 5. Remplacer par insuline SC si glycémie > 1.8 g/L.' },
      { q: 'Quelle ventilation choisissez-vous et pourquoi ?', a: 'Oxygène lentules 2L/min (BPCO: cible SpO2 88-92%, pas > 95% = risque hypercapnie). Si PaCO2 reste > 55 et pH < 7.30: ventilation non invasive (VNI) en pression positive. VNI = CPAP ou BiPAP. Surveillance gaz du sang H2, H4.' },
      { q: 'Quel est le pronostic et quelles sont les mesures de suivi ?', a: 'Pronostic réservé: BPCO sévère + infection + IRA + confusion. Surveillance: gaz du sang H2, H4, H8. Constantes toutes les 4h. Réévaluation glycémique. Bilan J2 (créatinine, CRP, gaz). Si amélioration: réintroduction progressive des traitements. Si aggravation: transfert réanimation.' }
    ],
    juryTips: 'Le piège: oxygénothérapie à haut débit chez le BPCO → hypercapnie → coma. Le jury attend que vous connaissiez la cible SpO2 88-92% en BPCO et que vous sachiez quand mettre en VNI. L\'arrêt de la metformine est obligatoire en IRA.'
  }
];

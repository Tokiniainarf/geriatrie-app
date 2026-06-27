// Vrais sujets EVC — Sujets détaillés avec corrigés complets
// Chaque sujet = cas clinique complet + 5 questions + corrigé point par point + jury tips
const SUJETS_EVC_DETAIlLES = [
  {
    id: 'sed-1', annee: 2024, session: 'Rattrapage',
    duree: '30 min (15 min préparation + 15 min oral)',
    bareme: '20 points',
    consigne: 'Vous êtes interne de gériatrie. Ce patient est adressé par son médecin traitant pour bilan.',
    sujet: `Mme LEROY Suzanne, 82 ans, adressée pour "chutes à répétition et perte de mémoire".

ATCD: HTA (losartan 50mg), diabète T2 (metformine 850mg x2), dyslipidémie (atorvastatine 20mg), dépression (amitriptyline 75mg), insomnie (zolpidem 10mg), arthrose (tramadol 50mg x2).

MOTIF: 4 chutes en 3 mois. Dernière chute il y a 2 jours (pas de fracture). La fille rapporte des oublis fréquents.

ÉVALUATION: PA 140/85 couché, 110/60 debout. FC 72. MMS 20/30 (était 26 il y a 1 an). GDS-15 12/15. ADL 4/6. IADL 3/8. MNA 21/30. Tinetti 14/28. EVA 3/10 (genoux). Poids 58 kg (était 64 kg). Albumine 34 g/L. Créatinine 105 (DFG 52). TSH normale. Vit D 12 ng/mL. IRM: atrophie hippocampique modérée.`,
    questions: [
      { q: 'Listez les facteurs de risque de chute chez cette patiente.', a: 'Intrinsèques: âge 82 ans, hypotension orthostatique (PA -30/-25), troubles équilibre (Tinetti 14/28), arthrose genoux, déclin cognitif (MMS 20), dénutrition (perte 6 kg), Vit D basse (12 ng/mL). Iatrogènes: amitriptyline (tricyclique = Beers, sédation, hypotension), zolpidem (somnambulisme, chute nocturne), tramadol (sédation, confusion), losartan (hypotension). Extrinsèques: non précisées.' },
      { q: 'Quels examens complémentaires demandez-vous ?', a: 'Rx genoux (arthrose ?). ECG (syncope ? arythmie ?). Bilan orthostatique complet (PA couché/debout 1 et 3 min). NFS, iono, créatinine, glycémie, TSH, B12, folates, Vit D, calcémie. Échographie rénale (DFG 52). Évaluation neuropsychologique complète.' },
      { q: 'Quelle est votre stratégie de déprescription ?', a: '1. Arrêt zolpidem → hygiène sommeil + mélatonine 2mg. 2. Arrêt amitriptyline (sevrage 2 semaines) → ISRS (sertraline 25mg). 3. Remplacement tramadol → paracétamol 1g x3/j. 4. Maintien losartan (surveillance PA). 5. Maintien metformine (DFG 52 > 30). 6. Maintien atorvastatine.' },
      { q: 'Quel diagnostic évoquez-vous pour les troubles cognitifs ?', a: 'Démence débutante probable (MMS 20, atrophie hippocampique, troubles 1 an). Diagnostic différentiel: pseudodémence dépressive (GDS 12 = sévère, amitriptyline = anticholinergique → confusion). Stratégie: arrêter amitriptyline, réévaluer MMS à 1 mois. Si amélioration → iatrogénie. Si persistance → démence → donépezil.' },
      { q: 'Quel plan de suivi proposez-vous ?', a: 'Réévaluation à 1 mois (MMS, GDS, Tinetti, PA orthostatique). Vit D 100 000UI bolus puis 1000UI/j. Rééducation équilibre (kiné 3x/sem). Correction visuelle. Adaptation domicile. Si MMS ne s\'améliore pas → bilan mémoire complet + donépezil.' }
    ],
    juryTips: 'Le piège principal: amitriptyline + zolpidem + tramadol = cascade iatrogénique. Le jury attend que vous identifiiez l\'hypotension orthostatique comme cause de chute et que vous proposiez une déprescription progressive. La Vit D basse est un facteur aggravant.'
  },
  {
    id: 'sed-2', annee: 2023, session: 'Annulation',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes médecin de nuit en EHPAD. Ce résident est retrouvé au sol à 3h du matin.',
    sujet: `M. BERNARD Marcel, 85 ans, résident en EHPAD depuis 1 an, retrouvé au sol à 3h du matin dans le couloir.

ATCD: Alzheimer stade GDS 5, HTA (amlodipine 5mg), FA permanente (apixaban 5mg x2), BPH (tamsulosine 0.4mg), dépression (mirtazapine 15mg le soir), douleurs chroniques (paracétamol 1g x3).

TRAITEMENT: amlodipine 5mg, apixaban 5mg x2, tamsulosine 0.4mg, mirtazapine 15mg, paracétamol 1g x3, donépezil 10mg.

ÉVALUATION: MMS 10/30. GDS-15 10/15. ADL 2/6. Tinetti 8/28. Braden 14/23. ECPA 6/10. T° 37.5°C. PA 135/80. FC 88. SpO2 95%. Glycémie 2.1 g/L. Pas de fracture visible. Ecchymose frontale. Confus, désorienté.`,
    questions: [
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. État hémodynamique (PA, FC, SpO2). 2. Examen neuro complet (GCS, pupilles, déficit). 3. Examen orthopédique (hanche, poignet, crâne). 4. ECG (syncope ? arythmie sous FA ?). 5. Bilan biologique (NFS, iono, créatinine, glycémie, troponine). 6. Rx si douleur. 7. Scanner crâne si GCS < 15 ou anticoagulant (apixaban). 8. Surveillance neuro H4.' },
      { q: 'Identifiez les facteurs de risque de chute.', a: 'Alzheimer (désorientation, noctambulisme). Hypotension orthostatique (amlodipine). Mirtazapine (sédation). FA (syncope ?). Tinetti 8/28 = risque très élevé. Braden 14/23 = risque escarre. Apixaban = risque hémorragique si chute. Glycémie 2.1 = hypoglycémie relative.' },
      { q: 'Comment gérez-vous l\'anticoagulant (apixaban) ?', a: '1. Scanner crâne systématique (anticoagulant + chute + ecchymose frontale). 2. Si pas d\'hémorragie: maintien apixaban. 3. Si hémorragie: arrêt apixaban, avis neurochirurgical. 4. Surveillance: céphalées, vomissements, déficit neuro, GCS. 5. Reprise apixaban à J24-48h si pas d\'hémorragie.' },
      { q: 'Quelles mesures de prévention mettez-vous en place ?', a: 'Lit en position basse. Tapis de sol. Alarme. Lumière de nuit. Changement position H2. Matelas anti-escarres. Révision médicamenteuse (mirtazapine). Surveillance glycémique. Évaluation douleur (ECPA). Communication avec la famille.' },
      { q: 'Que faites-vous pour la glycémie à 2.1 g/L ?', a: '1. Sucre oral si conscient. 2. Glucose 30% IV si inconscient. 3. Réévaluation glycémique H1, H2, H4. 4. Adapter le traitement antidiabétique (suspension si sous). 5. Rechercher cause (jeûne, infection, médicaments). 6. Éducation équipe (signes hypoglycémie).' }
    ],
    juryTips: 'Le jury attend une prise en charge systématique de la chute chez le sujet âgé anticoagulant. Le scanner crâne est obligatoire. L\'hypoglycémie à 2.1 g/L est un facteur contributif à rechercher systématiquement.'
  },
  {
    id: 'sed-3', annee: 2022, session: 'Annulation',
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

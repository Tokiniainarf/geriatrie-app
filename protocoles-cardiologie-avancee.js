// Protocoles de soins de la personne âgée — Cardiologie avancée
const PROTOCOLES_CARDIOLOGIE_AVANCEE = [
  { id: 'pca-1', titre: 'Prise en charge de l\'insuffisance cardiaque aiguë', protocole: '1. Évaluation NYHA. 2. Oxygène si SpO2 < 92%. 3. Furosémide 40-80mg IV. 4. Si OAP: trinitrine SL. 5. Si choc: dobutamine. 6. Bilan (BNP, troponine, écho). 7. Cause ? (SCA, HTA, FA, valvulopathie).',
    objectif: 'Stabilisation hémodynamique. Traitement de la cause.' },
  { id: 'pca-2', titre: 'Prise en charge du syndrome coronarien aigu', protocole: '1. ECG 12 dérivations dans les 10 min. 2. Si ST+: angioplastie primaire < 120 min. 3. Si ST-: risque GRACE. 4. Aspirine 250mg + clopidogrel 300mg. 5. Héparine. 6. Morphine si douleur. 7. Troponine H0, H3, H6.',
    objectif: 'Revascularisation précoce. Réduire la mortalité.' },
  { id: 'pca-3', titre: 'Prise en charge de la fibrillation atriale', protocole: '1. Évaluation hémodynamique. 2. Si instable: cardioversion. 3. Si stable: contrôle fréquence (bêtabloquant, digoxine). 4. Anticoagulation si CHA2DS2-VASc ≥ 2. 5. Si première FA: échocardiographie. 6. Traitement de la cause.',
    objectif: 'Contrôle du rythme/fréquence. Prévention AVC.' },
  { id: 'pca-4', titre: 'Prise en charge de l\'hypertension artérielle sévère', protocole: '1. Si HTA urgente (PAS > 180): nicardipine IV. 2. Si HTA maligne: UHC. 3. Évaluer les lésions d\'organe cible (rein, cœur, œil, cerveau). 4. Traitement de la cause. 5. Adapter le traitement chronique.',
    objectif: 'Réduction progressive de la PA. Prévenir les complications.' },
  { id: 'pca-5', titre: 'Prise en charge de la sténose aortique sévère', protocole: '1. Échocardiographie (surface < 1 cm²). 2. Évaluation des symptômes (syncope, angor, dyspnée). 3. TAVI si chirurgie à haut risque. 4. Remplacement valvulaire chirurgical si risque acceptable. 5. Suivi régulier.',
    objectif: 'Évaluation et traitement de la sténose aortique.' },
  { id: 'pca-6', titre: 'Prise en charge de la maladie thromboembolique', protocole: '1. Anticoagulation curative (HBPM ou AOD). 2. Durée: 3 mois si provoquée, 6 mois si idiopathique. 3. Indéfinie si récidive. 4. Filtre cave si CI anticoagulation. 5. Surveillance clinique.',
    objectif: 'Prévention de la récidive. Surveillance.' },
  { id: 'pca-7', titre: 'Prise en charge de l\'insuffisance veineuse', protocole: '1. Bas de contention (classe II-III). 2. Surélévation des membres. 3. Exercice physique. 4. Si ulcère: pansement adapté. 5. Si lymphœdème: drainage lymphatique. 6. Prévention TVP.',
    objectif: 'Prévention des complications. Amélioration de la qualité de vie.' },
  { id: 'pca-8', titre: 'Prise en charge de l\'artériopathie oblitérante', protocole: '1. Index de pression cheville-bras. 2. Marche supervisée. 3. Antiagrégant (clopidogrel). 4. Statine. 5. Contrôle des facteurs de risque. 6. Revascularisation si critique.',
    objectif: 'Prévention des complications. Amélioration de la marche.' }
];

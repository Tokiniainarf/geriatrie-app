// Protocoles de soins de la personne âgée — Neurologie
const PROTOCOLES_NEUROLOGIE = [
  { id: 'pneuro-1', titre: 'Prise en charge de la maladie d\'Alzheimer', protocole: '1. Diagnostic: MMS + MoCA + IRM hippocampique. 2. Donépezil 5mg → 10mg (léger-modéré). 3. Rivastigmine patch si intolérance. 4. Mémantine si modéré-sévère. 5. Éducation patient + famille. 6. Suivi trimestriel.',
    objectif: 'Ralentir le déclin cognitif. Maintenir l\'autonomie.' },
  { id: 'pneuro-2', titre: 'Prise en charge de la maladie de Parkinson', protocole: '1. Lévodopa 100mg x3/j (dose minimale efficace). 2. Agonistes dopaminergiques si < 70 ans. 3. IMAO-B (rasagiline). 4. Kinésithérapie (marche, équilibre). 5. Éviter les neuroleptiques. 6. Surveillance dyskinésies.',
    objectif: 'Contrôle des symptômes. Maintien de la mobilité.' },
  { id: 'pneuro-3', titre: 'Prise en charge de l\'AVC ischémique', protocole: '1. NIHSS. 2. TDM cérébral < 25 min. 3. Si < 4.5h: alteplase 0.9mg/kg. 4. Si occlusion majeure: thrombectomie. 5. Unité neurovasculaire. 6. Prévention secondaire (antiagrégant, statine, HTA).',
    objectif: 'Revascularisation précoce. Réduire les séquelles.' },
  { id: 'pneuro-4', titre: 'Prise en charge de l\'épilepsie', protocole: '1. Lévatiracétam 500mg x2/j (1ère ligne sujet âgé). 2. Lamotrigine si lévétiracétam inefficace. 3. Évanger valproate (tremblements). 4. Évanger phénobarbital (sédation). 5. Surveillance EEG.',
    objectif: 'Contrôle des crises. Minimiser les effets secondaires.' },
  { id: 'pneuro-5', titre: 'Prise en charge des neuropathies', protocole: '1. Étiologie (diabète, alcool, carence B12, médicaments). 2. Électroneuromyogramme. 3. Gabapentine 100-300mg/j. 4. Pregabaline 75-150mg/j. 5. Amitriptyline 10-25mg (si pas Beers). 6. Kinésithérapie.',
    objectif: 'Soulager la douleur. Traiter la cause.' },
  { id: 'pneuro-6', titre: 'Prise en charge des céphalées', protocole: '1. Étiologie (tensionnelle, migraine, artérite temporale, HTA). 2. Paracétamol 1g. 3. Si artérite temporale: corticoïdes d\'urgence. 4. Si HTA: traitement antihypertenseur. 5. Scanner si céphalée inhabituelle.',
    objectif: 'Soulager la douleur. Traiter la cause.' },
  { id: 'pneuro-7', titre: 'Prise en charge des vertiges', protocole: '1. Dix-Hallpike si VPPB. 2. Manœuvre d\'Epley. 3. Ménilère: bétahistine. 4. Vertige central: IRM. 5. Rééducation vestibulaire. 6. Éviter les BZD.',
    objectif: 'Soulager les vertiges. Prévenir les chutes.' },
  { id: 'pneuro-8', titre: 'Prise en charge des syncopes', protocole: '1. ÉCG 12 dérivations. 2. Holter cardiaque. 3. Échocardiographie. 4. Tilt test si syncope inexpliquée. 5. Éviter les BZD. 6. Traitement de la cause.',
    objectif: 'Identifier la cause. Prévenir la récidive.' }
];

// Protocoles de soins de la personne âgée — Néphrologie
const PROTOCOLES_NEPHROLOGIE = [
  { id: 'pneph-1', titre: 'Prise en charge de l\'insuffisance rénale aiguë', protocole: '1. Étiologie: pré-rénale (déshydratation), rénale (néphrotoxiques), post-rénale (obstruction). 2. Bilan: créatinine, DFG, iono, NFS, ECBU, échographie rénale. 3. Arrêter les néphrotoxiques. 4. Réhydratation si pré-rénale. 5. Sondage si obstruction. 6. Dialyse si indication.',
    objectif: 'Identifier la cause. Restaurer la fonction rénale.' },
  { id: 'pneph-2', titre: 'Gestion de l\'hyperkaliémie', protocole: '1. Si K > 6.5 ou ECG anormal: gluconate de Ca 10% IV. 2. Insuline 10UI + glucose 50% IV. 3. Salbutamol nébulisation. 4. Bicarbonates si acidose. 5. Kayexalate PO. 6. Dialyse si réfractaire.',
    objectif: 'Stabilisation myocardique. Correction du potassium.' },
  { id: 'pneph-3', titre: 'Adaptation des doses en insuffisance rénale', protocole: '1. Calculer le DFG (CKD-EPI). 2. Adapter les doses selon le DFG. 3. Éviter les néphrotoxiques (AINS, aminoglycosides). 4. Surveillance créatinine, K, Na. 5. Réévaluation régulière.',
    objectif: 'Prévenir la toxicité. Optimiser le traitement.' },
  { id: 'pneph-4', titre: 'Prise en charge de l\'hyponatrémie', protocole: '1. Étiologie: hypervolémique (IC, cirrhose), euvolémique (SIADH), hypovolémique (déshydratation). 2. Correction lente (< 10 mmol/L/24h). 3. Restriction hydrique si hypervolémique. 4. NaCl si hypovolémique. 5. Demeclocycline si SIADH.',
    objectif: 'Correction progressive. Prévenir la myélinolyse.' },
  { id: 'pneph-5', titre: 'Prise en charge de l\'acidose métabolique', protocole: '1. Étiologie: rénale, métabolique (cétose, lactique). 2. Bicarbonates si pH < 7.2. 3. Traitement de la cause. 4. Surveillance gaz du sang. 5. Dialyse si réfractaire.',
    objectif: 'Corriger l\'acidose. Traiter la cause.' },
  { id: 'pneph-6', titre: 'Dialyse chez le sujet âgé', protocole: '1. Indications: hyperkaliémie réfractaire, acidose, surcharge volémique, encéphalopathie urémique. 2. Dialyse péritonéale si possible (moins agressif). 3. Hémodialyse si nécessaire. 4. Évaluer le rapport bénéfice/risque.',
    objectif: 'Maintenir la fonction rénale. Qualité de vie.' },
  { id: 'pneph-7', titre: 'Prévention de la néphrotoxicité', protocole: '1. Éviter les AINS. 2. Éviter les aminoglycosides. 3. Hydratation avant produits de contraste. 4. Adapter les doses. 5. Surveillance créatinine.',
    objectif: 'Prévenir les lésions rénales. Surveillance.' },
  { id: 'pneph-8', titre: 'Gestion de l\'œdème', protocole: '1. Étiologie: IC, cirrhose, syndrome néphrotique. 2. Diurétiques (furosémide). 3. Restriction sodée. 4. Surélévation des membres. 5. Compression si veineux. 6. Drainage si ascite.',
    objectif: 'Réduire les œdèmes. Traiter la cause.' }
];

// Protocoles de soins de support avancés — Symptômes réfractaires
const PROTOCOLES_SUPPORT_AVANCES = [
  { id: 'psa-1', titre: 'Gestion du hoquet réfractaire', protocole: '1. Techniques non médicamenteuses (apnée, massage sinus carotidien, compression du globe oculaire). 2. Chlorpromazine 25mg PO. 3. Baclofène 5mg PO x3/j. 4. Gabapentine 100mg PO x3/j. 5. Si réfractaire: métoclopramide IV.',
    surveillance: 'Fréquence du hoquet. Sommeil. Alimentation.' },
  { id: 'psa-2', titre: 'Gestion du prurit réfractaire', protocole: '1. Hydratation cutanée intense. 2. Antihistaminique (cétirizine 10mg). 3. Si cholestase: cholestyramine 4g. 4. Si insuffisance rénale: gabapentine 100mg. 5. Si réfractaire: crème à la capsaïcine.',
    surveillance: 'Intensité du prurit. Lésions cutanées. Sommeil.' },
  { id: 'psa-3', titre: 'Gestion de la bouche sèche (xérostomie)', protocole: '1. Hydratation fréquente. 2. Suces de glace. 3. Salive artificielle. 4. Pilocarpine 5mg PO x3/j. 5. Éviter les anticholinergiques.',
    surveillance: 'Hydratation buccale. Déglutition. Alimentation.' },
  { id: 'psa-4', titre: 'Gestion de la fatigue réfractaire', protocole: '1. Économie d\'énergie. 2. Exercice adapté (marche légère). 3. Méthylphénidate 5mg PO le matin. 4. Modafinil 100mg PO. 5. Si dépression: antidépresseur.',
    surveillance: 'Fatigue (échelle EVA). Activités. Sommeil.' },
  { id: 'psa-5', titre: 'Gestion de l\'anorexie réfractaire', protocole: '1. Petits repas fréquents. 2. Enrichissement. 3. Mégestrol 160mg PO. 4. Dexaméthasone 2mg PO. 5. Si dépression: mirtazapine.',
    surveillance: 'Poids. Appétit. Apport calorique.' },
  { id: 'psa-6', titre: 'Gestion de l\'insomnie réfractaire', protocole: '1. Hygiène du sommeil. 2. Mélatonine 2mg. 3. Hydroxyzine 25mg. 4. Trazodone 50mg. 5. Si réfractaire: midazolam SC.',
    surveillance: 'Qualité sommeil. Éveil diurne. Confusion.' },
  { id: 'psa-7', titre: 'Gestion de la constipation réfractaire', protocole: '1. Macrogol 1-2 sachets/j. 2. Bisacodyl 10mg. 3. Naloxone 0.4mg PO si opioïdes. 4. Si échec: lavement. 5. Si toujours échec: irrigation transanale.',
    surveillance: 'Transit. Distension. Douleur.' },
  { id: 'psa-8', titre: 'Gestion des œdèmes réfractaires', protocole: '1. Surélévation des membres. 2. Bas de contention. 3. Furosémide 20-40mg. 4. Si lymphœdème: drainage lymphatique. 5. Si hypoalbuminémie: albumine IV.',
    surveillance: 'Poids. Périmètre des membres. Diurèse.' }
];

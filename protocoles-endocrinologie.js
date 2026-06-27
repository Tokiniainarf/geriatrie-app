// Protocoles de soins de la personne âgée — Endocrinologie
const PROTOCOLES_ENDOCRINOLOGIE = [
  { id: 'pendo-1', titre: 'Prise en charge du diabète type 2', protocole: '1. HbA1c cible < 8% (sujet âgé fragile). 2. Metformine 1ère ligne (si DFG > 30). 3. Si échec: gliptines ou SGLT2. 4. Éviter les sulfamylurées (hypoglycémie). 5. Auto-surveillance glycémique. 6. Éducation thérapeutique.',
    objectif: 'Équilibre glycémique adapté. Éviter les hypoglycémies.' },
  { id: 'pendo-2', titre: 'Prise en charge de l\'hypothyroïdie', protocole: '1. TSH élevée + T4 basse. 2. Lévothyroxine 25-50µg/j (démarrer bas). 3. Adapter par palier de 12.5µg toutes les 6 semaines. 4. TSH cible: 0.5-2.5 mUI/L. 5. Surveillance annuelle.',
    objectif: 'Normalisation de la TSH. Amélioration des symptômes.' },
  { id: 'pendo-3', titre: 'Prise en charge de l\'hyperthyroïdie', protocole: '1. TSH basse + T4 élevée. 2. Carbimazole 10-20mg/j. 3. Surveillance NFS (agranulocytose). 4. Si échec: iode radioactif. 5. Si chirurgie: préparation.',
    objectif: 'Normalisation de la thyroïde. Prévention des complications.' },
  { id: 'pendo-4', titre: 'Prise en charge de l\'ostéoporose', protocole: '1. DEXA (T-score < -2.5). 2. Vit D 800UI + Ca 1.2g. 3. Biphosphonate (alendronate 70mg/sem). 4. Si échec: dénosumab. 5. Prévention chutes. 6. Surveillance DEXA 2 ans.',
    objectif: 'Prévention des fractures. Maintien de la densité osseuse.' },
  { id: 'pendo-5', titre: 'Prise en charge de l\'hyperparathyroïdie', protocole: '1. Calcium élevé + PTH élevée. 2. Échographie parathyroïde. 3. Si symptomatique: chirurgie. 4. Si asymptomatique: surveillance. 5. Hydratation.',
    objectif: 'Correction du calcium. Traitement de la cause.' },
  { id: 'pendo-6', titre: 'Prise en charge de l\'insuffisance surrénale', protocole: '1. Cortisol bas + ACTH élevée. 2. Hydrocortisone 20-30mg/j (2/3 matin, 1/3 soir). 3. Doubler en cas de stress. 4. Bracelet d\'alerte médical. 5. Surveillance tension.',
    objectif: 'Substitution cortisol. Prévention de la crise surrénalienne.' },
  { id: 'pendo-7', titre: 'Prise en charge du syndrome métabolique', protocole: '1. Tour de taille > 88cm (f) ou > 102cm (h). 2. HTA + dyslipidémie + hyperglycémie. 3. Régime alimentaire. 4. Activité physique. 5. Statine si LDL élevé. 6. Antihypertenseur.',
    objectif: 'Réduction du risque cardiovasculaire.' },
  { id: 'pendo-8', titre: 'Prise en charge de la dyslipidémie', protocole: '1. LDL cible selon le risque cardiovasculaire. 2. Statine (atorvastatine 20mg). 3. Si échec: ézétimibe. 4. Régime alimentaire. 5. Surveillance hépatique.',
    objectif: 'Réduction du LDL. Prévention cardiovasculaire.' }
];

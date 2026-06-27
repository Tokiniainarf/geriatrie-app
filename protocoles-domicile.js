// Protocoles de soins de la personne âgée à domicile — HAD
const PROTOCOLES_DOMICILE = [
  { id: 'pdom-1', titre: 'Admission en HAD', protocole: '1. Évaluation à domicile (ADL, environnement). 2. Projet de soins partagé. 3. Coordination médecin traitant. 4. Organisation des soins (IDE, kiné). 5. Matériel médical.',
    objectif: 'Maintien à domicile. Éviter l\'hospitalisation.' },
  { id: 'pdom-2', titre: 'Soins infirmiers à domicile', protocole: '1. Passage IDE quotidien ou selon besoins. 2. Injections, perfusions, pansements. 3. Surveillance constantes. 4. Éducation patient/famille. 5. Transmission au médecin.',
    objectif: 'Soins de qualité à domicile. Sécurité.' },
  { id: 'pdom-3', titre: 'Kinésithérapie à domicile', protocole: '1. Évaluation initiale. 2. Programme adapté au domicile. 3. Rééducation fonctionnelle. 4. Prévention chutes. 5. 3x/sem.',
    objectif: 'Maintien de la mobilité. Autonomie.' },
  { id: 'pdom-4', titre: 'Aide à domicile', protocole: '1. Évaluation des besoins (toilette, repas, ménage). 2. Plan d\'aideAPA. 3. Auxiliaire de vie. 4. Aide ménagère. 5. Livraison repas.',
    objectif: 'Maintien à domicile. Qualité de vie.' },
  { id: 'pdom-5', titre: 'Téléalarme et surveillance', protocole: '1. Installation téléalarme. 2. Bracelet d\'appel. 3. Caméra si consentement. 4. Visioconférence avec médecin. 5. Surveillance glycémique connectée.',
    objectif: 'Sécurité. Réactivité en cas d\'urgence.' },
  { id: 'pdom-6', titre: 'Nutrition à domicile', protocole: '1. Évaluation MNA. 2. Livraison repas adaptés. 3. CNO si nécessaire. 4. Nutrition entérale si prescrite. 5. Aide à la préparation des repas.',
    objectif: 'Apport nutritionnel adéquat. Prévention dénutrition.' },
  { id: 'pdom-7', titre: 'Soins palliatifs à domicile', protocole: '1. Projet de soins palliatifs. 2. Douleur: morphine SC. 3. Soins de bouche. 4. Accompagnement famille. 5. IDE formée en palliatif. 6. Médecin référent.',
    objectif: 'Mourir à domicile si souhaité. Confort.' },
  { id: 'pdom-8', titre: 'Coordination des soins à domicile', protocole: '1. Réunion de coordination mensuelle. 2. Transmission entre professionnels. 3. Dossier de soins partagé. 4. Médecin traitant informé. 5. Réévaluation régulière.',
    objectif: 'Cohérence des soins. Communication.' }
];

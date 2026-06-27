// Protocoles de soins de la personne âgée — Pneumologie
const PROTOCOLES_PNEUMOLOGIE = [
  { id: 'ppneum-1', titre: 'Prise en charge de la BPCO exacerbée', protocole: '1. Oxygénothérapie (cible 88-92%). 2. Bronchodilatateurs nébulisés. 3. Corticoïdes systémiques. 4. Antibio si purulent. 5. Ventilation non invasive si acide respiratoire. 6. Kinésithérapie respiratoire.',
    objectif: 'Stabilisation. Traitement de l\'exacerbation.' },
  { id: 'ppneum-2', titre: 'Prise en charge de la pneumopathie communautaire', protocole: '1. Évaluation sévérité (CURB-65). 2. Rx thoracique. 3. CRP, PCT. 4. Antibiothérapie adaptée. 5. Oxygène si SpO2 < 92%. 6. Réhydratation. 7. Kinésithérapie.',
    objectif: 'Traitement de l\'infection. Prévention des complications.' },
  { id: 'ppneum-3', titre: 'Prise en charge de l\'embolie pulmonaire', protocole: '1. Angio-TDM thoracique. 2. HBPM (énaxaparine 1mg/kg SC q12h). 3. Si instable: thrombolyse. 4. Anticoagulation 3-6 mois. 5. Filtre cave si CI anticoagulation.',
    objectif: 'Diagnostic et traitement de l\'EP.' },
  { id: 'ppneum-4', titre: 'Oxygénothérapie chez le sujet âgé', protocole: '1. Cible SpO2 92-96% (sauf BPCO: 88-92%). 2. Lunettes nasales 1-6L/min. 3. Masque si > 6L/min. 4. Surveillance SpO2 continue. 5. Adapter le débit.',
    objectif: 'Maintenir l\'oxygénation. Éviter l\'hyperoxie.' },
  { id: 'ppneum-5', titre: 'Kinésithérapie respiratoire', protocole: '1. Exercices de respiration (diaphragmatique). 2. Drainage postural. 3. Expiration forcée. 4. Renforcement des muscles respiratoires. 5. Éducation du patient.',
    objectif: 'Améliorer la fonction respiratoire. Prévenir les exacerbations.' },
  { id: 'ppneum-6', titre: 'Prévention de la pneumopathie d\'inhalation', protocole: '1. Évaluation de la déglutition. 2. Adaptation des textures. 3. Position à 90° pendant les repas. 4. Soins de bouche. 5. Évanger les sédatifs.',
    objectif: 'Prévenir l\'aspiration. Maintenir l\'alimentation orale.' },
  { id: 'ppneum-7', titre: 'Vaccination du sujet âgé', protocole: '1. Grippe annuelle. 2. Pneumocoque (Prevenar 13 + Pneumovax 23). 3. Zona (Shingrix). 4. COVID-19 (rappel annuel). 5. Coqueluche (si contact nourrisson).',
    objectif: 'Prévention des infections. Réduire la morbidité.' },
  { id: 'ppneum-8', titre: 'Gestion de la détresse respiratoire', protocole: '1. Position assise. 2. Oxygène haut débit. 3. Bilan (Rx, gaz du sang). 4. Si OAP: furosémide IV + trinitrine. 5. Si EP: HBPM. 6. Si BPCO: bronchodilatateurs. 7. Ventilation non invasive si nécessaire.',
    objectif: 'Stabilisation. Traitement de la cause.' }
];

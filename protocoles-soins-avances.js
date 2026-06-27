// Protocoles de soins infirmiers avancés — Procédures spécialisées
const PROTOCOLES_SOINS_AVANCES = [
  { id: 'psa-1', titre: 'Pose de cathéter veineux central (PICC)', protocole: '1. Échographie veineuse. 2. Désinfection large. 3. Anesthésie locale. 4. Ponction veineuse sous échoguidage. 5. Insertion du cathéter. 6. Vérification position (Rx thoracique). 7. Fixation. 8. Pansement stérile.',
    surveillance: 'Position (Rx). Infection (rougeur, fièbre). Perméabilité. Thrombose.' },
  { id: 'psa-2', titre: 'Soins de trachéotomie', protocole: '1. Aspiration trachéale (sonde sterile, < 15s). 2. Nettoyage canule (sérum physiologique). 3. Changement canule interne 2x/j. 4. Changement canule externe si nécessaire. 5. Pansement autour de la canule. 6. Humidification (aérosol).',
    surveillance: 'Respiration. Infection. Obstruction. Décannulation progressive.' },
  { id: 'psa-3', titre: 'Gestion d\'une perfusion continue de morphine', protocole: '1. Préparer solution (morphine + NaCl 0.9%). 2. Raccorder pompe. 3. Débit initial selon prescription. 4. Surveillance conscience et respiration H1. 5. Ajuster selon douleur (EVA/ECPA). 6. Avoir naloxone à portée.',
    surveillance: 'Conscience (GCS). FR (< 12 = alarme). SpO2. Douleur. Nausées. Constipation.' },
  { id: 'psa-4', titre: 'Gestion d\'une alimentation entérale continue', protocole: '1. Vérifier position SNG (pH < 5 ou Rx). 2. Position semi-assise (30°). 3. Raccorder tubulure. 4. Débit initial 20mL/h. 5. Augmenter de 20mL toutes les 12h. 6. Objectif 50-60mL/h. 7. Aspiration gastrique avant chaque bolus.',
    surveillance: 'Résidu gastrique. Transit. Glycémie. Ionogramme. Poids.' },
  { id: 'psa-5', titre: 'Soins d\'une plaie chronique', protocole: '1. Évaluation: taille, profondeur, fond, exsudat. 2. Nettoyage sérum physiologique. 3. Choix pansement: hydrocolloïde (stade I-II), hydrocellulaire (III-IV), alginate (exsudat). 4. Changement pansement. 5. Noter évolution.',
    surveillance: 'Taille. Fond. Exsudat. Douleur. Infection.' },
  { id: 'psa-6', titre: 'Gestion d\'une sonde vésicale à demeure', protocole: '1. Soins méat urinaire 2x/j (eau + savon). 2. Rinçage sonde si obstruction. 3. Changement sonde tous les 3 mois. 4. Poche sous le lit (déclive). 5. Surveillance diurèse. 6. ECBU si fièvre.',
    surveillance: 'Diurèse. Coloration. Odeur. Fièvre. Douleur.' },
  { id: 'psa-7', titre: 'Soins d\'un patient sous anticoagulant', protocole: '1. Vérifier INR (AVK) ou anti-Xa (AOD). 2. Adapter dose selon résultats. 3. Surveiller signes de saignement. 4. Éviter les injections IM. 5. Prévenir le patient (interactions). 6. Éducation thérapeutique.',
    surveillance: 'INR/anti-Xa. Saignements. Ecchymoses. Hématomes.' },
  { id: 'psa-8', titre: 'Soins d\'un patient sous dialyse', protocole: '1. Surveillance avant dialyse: poids, PA, K, créatinine. 2. Surveillance pendant: PA, FC, SpO2. 3. Surveillance après: poids, PA, constantes. 4. Soins de la fistule (pas de compression, pas de mesure PA). 5. Hydratation adaptée.',
    surveillance: 'Poids. PA. K. Créatinine. Fistule. Hydratation.' }
];

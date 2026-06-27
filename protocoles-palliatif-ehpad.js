// Protocoles de soins palliatifs en EHPAD — Guide pratique
const PROTOCOLES_PALLIATIF_EHPAD = [
  { id: 'ppe-1', titre: 'Identifier la fin de vie en EHPAD', protocole: '1. Critères: perte poids > 10%/mois, somnolence permanente, refus alimentation, marbrures, respiration de Cheyne-Stokes. 2. Réunion équipe. 3. Information famille. 4. Projet de soins palliatifs.',
    criteres: 'Perte poids > 10%/mois. Somnolence. Refus alimentation. Marbrures.' },
  { id: 'ppe-2', titre: 'Organiser les soins palliatifs en EHPAD', protocole: '1. Chambre individuelle si possible. 2. Présence famille 24h/24. 3. Soins de bouche H2. 4. Change adapté. 5. Antalgiques SC. 6. Anxiolytiques si besoin. 7. Pas de réanimation.',
    organisation: 'Équipe: médecin coordonnateur, infirmiers, aides-soignants, psychologue, aumônerie.' },
  { id: 'ppe-3', titre: 'Gestion de la douleur en EHPAD fin de vie', protocole: '1. ECPA toutes les 4h. 2. Paracétamol IV si douleur légère. 3. Morphine SC 0.1mg/kg. 4. Si dyspnée: morphine 2-4mg SC. 5. Si anxiété: midazolam 2.5mg SC.',
    surveillance: 'ECPA. Confort. Conscience. Respiration.' },
  { id: 'ppe-4', titre: 'Gestion de l\'alimentation en fin de vie', protocole: '1. Ne PAS forcer l\'alimentation. 2. Proposer petits plaisir si envie. 3. Soins de bouche. 4. Hydratation cutanée. 5. Si SNG: débrancher. 6. Information famille.',
    principe: 'L\'arrêt de l\'alimentation en fin de vie est physiologique et ne provoque pas de souffrance.' },
  { id: 'ppe-5', titre: 'Accompagnement de la famille en EHPAD', protocole: '1. Information régulière. 2. Permettre présence continue. 3. Expliquer les signes d\'agonie. 4. Soutien psychologique. 5. Contact aumônerie. 6. Après décès: condoléances.',
    soutien: 'Psychologue. Aumônerie. Association de deuil.' },
  { id: 'ppe-6', titre: 'Communication avec l\'équipe', protocole: '1. Réunion de concertation hebdomadaire. 2. Transmission écrite quotidienne. 3. Objectifs de soins partagés. 4. Gestion des émotions de l\'équipe. 5. Soutien après le décès.',
    outils: 'Transmission. Réunion RCP. Dossier de soins.' },
  { id: 'ppe-7', titre: 'Sédation de confort en EHPAD', protocole: '1. Souffrance réfractaire confirmée. 2. Décision collégiale. 3. Midazolam SC. 4. Arrêt nutrition/hydratation. 5. Information famille. 6. Surveillance continue.',
    criteres: 'Souffrance réfractaire. Agitation terminale. Dyspnée ingérable.' },
  { id: 'ppe-8', titre: 'Après le décès en EHPAD', protocole: '1. Constat de décès. 2. Toilette mortuaire. 3. Contact famille. 4. Certificat de décès. 5. Si décès inattendu: signalement. 6. Deuil de l\'équipe.',
    deuil: 'Réunion après décès. Soutien psychologique. Mémorial.' }
];

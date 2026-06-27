// Protocoles de soins de la personne âgée — Situation de crise
const PROTOCOLES_CRISE = [
  { id: 'pcr-1', titre: 'Agitation aiguë en EHPAD', protocole: '1. Évaluer douleur (ECPA). 2. Rechercher infection (T°, ECBU). 3. Rechercher rétention urinaire. 4. Environnement calme. 5. Réorientation. 6. Si nécessaire: halopéridol 0.5mg. 7. Éviter contention.',
    criteres_arret: 'Agitation contrôlée. Cause identifiée et traitée.' },
  { id: 'pcr-2', titre: 'Chute grave avec fracture', protocole: '1. Immobilisation. 2. État hémodynamique. 3. Bilan biologique. 4. Rx. 5. Scanner si anticoagulant. 6. Avis chirurgical. 7. Révision médicamenteuse.',
    criteres_arret: 'Fracture prise en charge. Stabilisation.' },
  { id: 'pcr-3', titre: 'Détresse respiratoire aiguë', protocole: '1. Position assise. 2. Oxygène haut débit. 3. Bilan (Rx, gaz du sang). 4. Si OAP: furosémide IV + trinitrine. 5. Si EP: HBPM. 6. Si BPCO: bronchodilatateurs.',
    criteres_arret: 'SpO2 > 92%. FR < 25. Pas de signes de détresse.' },
  { id: 'pcr-4', titre: 'Confusion aiguë sévère', protocole: '1. CAM. 2. Bilan complet (NFS, iono, rénal, hépatique, TSH, ECBU, gaz du sang). 3. Scanner si déficit focal. 4. Traitement cause. 5. Halopéridol 0.5mg si agitation. 6. Pas de contention.',
    criteres_arret: 'CAM négative. Cause traitée.' },
  { id: 'pcr-5', titre: 'Hémorragie digestive', protocole: '1. Voie veineuse. 2. Remplissage. 3. NFS, TP, groupe. 4. Endoscopie si hémodynamique instable. 5. Arrêt anticoagulant. 6. Transfusion si Hb < 8.',
    criteres_arret: 'Stabilité hémodynamique. Hb stable.' },
  { id: 'pcr-6', titre: 'Hypoglycémie sévère', protocole: '1. Glucose 30% IV 30-50mL. 2. Si inconscient: glucose IV en continu. 3. Réévaluation glycémique H1, H2, H4. 4. Rechercher cause. 5. Adapter traitement.',
    criteres_arret: 'Glycémie > 0.7 g/L. Conscience retrouvée.' },
  { id: 'pcr-7', titre: 'Anaphylaxie', protocole: '1. Adrénaline 0.5mg IM (cuisse). 2. Position Trendelenburg. 3. Oxygène. 4. Remplissage NaCl 500mL. 5. Corticoïdes IV. 6. Antihistaminiques IV. 7. Répéter adrénaline si nécessaire.',
    criteres_arret: 'PA stabilisée. Pas de signes d\'anaphylaxie.' },
  { id: 'pcr-8', titre: 'Convulsions', protocole: '1. Protection du patient. 2. Diazépam 10mg IV ou rectal. 3. Répéter x1 après 5 min. 4. Si prolongé: phénytoïne IV. 5. Bilan (glycémie, iono, scanner). 6. Rechercher cause.',
    criteres_arret: 'Convulsions arrêtées. Cause identifiée.' }
];

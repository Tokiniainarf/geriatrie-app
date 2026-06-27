// Cas cliniques complexes — Polypathologie et situations difficiles
const CAS_COMPLEXES = [
  { id: 'cc-1', titre: 'Patient polypathologique âgé',
    situation: 'M. Martin, 88 ans, 7 pathologies: HTA, DM2, BPCO, IC, FA, DMLA, arthrose. 9 médicaments. 3 hospitalisations en 6 mois. ADL 3/6.',
    dilemme: 'Comment optimiser la prise en charge sans surmédicaliser ?',
    solution: '1. Revue médicamenteuse complète (arrêter 3 médicaments). 2. Cible HbA1c 8% (pas 7%). 3. Anticoagulation FA (apixaban). 4. Rééducation fonctionnelle. 5. Aide domicile renforcée. 6. Projet de soins partagé.' },
  { id: 'cc-2', titre: 'Dilemme éthique — fin de vie',
    situation: 'Mme Garcia, 92 ans, cancer pancréatique stade IV. Sa fille demande chimiothérapie. Le patient dit "je veux mourir en paix".',
    dilemme: 'Conflit famille/patient sur la poursuite du traitement.',
    solution: '1. Réunion avec patient + fille + médecin. 2. Expliquer que la chimio n\'apporte pas de bénéfice. 3. Proposer soins palliatifs. 4. Si conflit persistant: avis collège médecins. 5. Le choix du patient prime (autonomie).' },
  { id: 'cc-3', titre: 'Patient agité en EHPAD',
    situation: 'M. Dupont, 85 ans, Alzheimer, agité, frappe les autres résidents, ne dort pas. Traitement: donépezil 10mg, sertraline 100mg.',
    dilemme: 'Comment gérer l\'agitation sans médicaliser excessivement ?',
    solution: '1. Rechercher douleur (ECPA). 2. Rechercher infection (T°, ECBU). 3. Environnement calme, lumière naturelle. 4. Activités structurées. 5. Si nécessaire: quétiapine 25mg (pas halopéridol si DLB). 6. Éviter contention.' },
  { id: 'cc-4', titre: 'Déprescription difficile',
    situation: 'Mme Petit, 82 ans, prend 11 médicaments depuis 15 ans. Son médecin traitant refuse d\'arrêter. Le patient veut arrêter.',
    dilemme: 'Comment convaincre le médecin traitant de déprescrire ?',
    solution: '1. Liste des Beers criteria applicables. 2. Revue médicamenteuse avec arguments. 3. Proposition d\'arrêt progressif (1 médicament toutes les 2 semaines). 4. Surveillance rapprochée. 5. Si médecin refuse: avis gériatrique.' },
  { id: 'cc-5', titre: 'Patient sans domicile fixe',
    situation: 'M. Garcia, 70 ans, SDF, admis pour hypothermie + dénutrition sévère. Pas de couverture sociale. Pas de pièce d\'identité.',
    dilemme: 'Comment organiser la sortie sans domicile ni ressources ?',
    solution: '1. CHRS (Centre d\'Hébergement). 2. CMU (Couverture Maladie Universelle). 3. Aide sociale. 4. Hébergement d\'urgence. 5. Accompagnement social. 6. Ne pas décharger tant que la situation sociale n\'est pas résolue.' }
];

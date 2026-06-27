// Protocoles de soins de la personne âgée — Pharmacie
const PROTOCOLES_PHARMACIE = [
  { id: 'pphar-1', titre: 'Réconciliation médicamenteuse', protocole: '1. Lister TOUS les médicaments. 2. Comparer avec l\'ordonnance d\'admission. 3. Identifier les écarts. 4. Corriger les erreurs. 5. Documenter.',
    objectif: 'Prévenir les erreurs médicamenteuses. Assurer la continuité.' },
  { id: 'pphar-2', titre: 'Revue médicamenteuse', protocole: '1. Lister tous les médicaments. 2. Vérifier les indications. 3. Identifier les inappropriés (Beers). 4. Vérifier les interactions. 5. Adapter les doses (DFG). 6. Proposer la déprescription.',
    objectif: 'Réduire la polymédication. Prévenir l\'iatrogénie.' },
  { id: 'pphar-3', titre: 'Éducation du patient', protocole: '1. Expliquer chaque médicament. 2. Indication. 3. Posologie. 4. Effets secondaires. 5. Interactions. 6. Observance.',
    objectif: 'Améliorer l\'observance. Prévenir les erreurs.' },
  { id: 'pphar-4', titre: 'Gestion des stupéfiants', protocole: '1. Double signature. 2. Registre des stupéfiants. 3. Dose et fréquence. 4. Surveillance des effets. 5. Destruction si non utilisé.',
    objectif: 'Sécuriser la gestion. Traçabilité.' },
  { id: 'pphar-5', titre: 'Prévention des interactions', protocole: '1. Vérifier toutes les interactions. 2. Médicaments + alimentation. 3. Médicaments + plantes. 4. Médicaments + médicaments. 5. Adapter les doses.',
    objectif: 'Prévenir les interactions dangereuses.' },
  { id: 'pphar-6', titre: 'Surveillance des effets indésirables', protocole: '1. Évaluer les effets secondaires. 2. Déclarer les effets indésirables graves. 3. Adapter le traitement. 4. Éduquer le patient.',
    objectif: 'Détection précoce. Prévention des complications.' },
  { id: 'pphar-7', titre: 'Formes pharmaceutiques adaptées', protocole: '1. Si dysphagie: solutions, comprimés effervescents. 2. Si difficultés manuelles: pilulier, seringue orale. 3. Si confusion: conditionnement jour/jour.',
    objectif: 'Faciliter la prise. Améliorer l\'observance.' },
  { id: 'pphar-8', titre: 'Pharmacovigilance', protocole: '1. Déclarer tout effet indésirable grave. 2. Analyser les causes. 3. Mettre en place des mesures correctives. 4. Communiquer avec l\'équipe.',
    objectif: 'Sécurité des patients. Amélioration continue.' }
];

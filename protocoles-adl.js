// Protocoles de soins de la personne âgée dépendante — ADL adaptées
const PROTOCOLES_ADL = [
  { id: 'padl-1', titre: 'Aide à la toilette', protocole: '1. Évaluer le niveau d\'aide nécessaire. 2. Préparer le matériel (gant, savon surgras, crème). 3. Eau tiède (37°C). 4. Commencer par le visage. 5. Laver de haut en bas. 6. Sécher par tamponnement. 7. Hydrater. 8. Vérifier la peau.',
    objectif: 'Maintenir l\'hygiène. Prévenir les lésions cutanées. Respecter la dignité.' },
  { id: 'padl-2', titre: 'Aide à l\'habillage', protocole: '1. Laisser choisir les vêtements. 2. Habiller le côté paralysé d\'abord. 3. Boutonner de haut en bas. 4. Utiliser des vêtements adaptés (scratchs, élastiques). 5. Chausser assis. 6. Éviter les flexions forcées.',
    objectif: 'Maintenir l\'autonomie. Respecter les préférences. Éviter la douleur.' },
  { id: 'padl-3', titre: 'Aide à l\'alimentation', protocole: '1. Position semi-assise. 2. Présenter les plats de façon appétissante. 3. Fractionner (6 repas/j). 4. Enrichir si dénutrition. 5. Aider si nécessaire (couper, porter à la bouche). 6. Surveiller la déglutition.',
    objectif: 'Maintenir l\'apport nutritionnel. Prévenir l\'aspiration. Respecter le plaisir de manger.' },
  { id: 'padl-4', titre: 'Aide aux transferts', protocole: '1. Évaluer le niveau d\'aide. 2. Positionner le fauteuil à 45°. 3. Freiner le fauteuil. 4. Aider à se lever (pieds au sol). 5. Pivoter doucement. 6. Asseoir progressivement. 7. Surveiller le vertige.',
    objectif: 'Prévenir les chutes. Maintenir la mobilité. Éviter les blessures.' },
  { id: 'padl-5', titre: 'Aide à la mobilisation', protocole: '1. Évaluer la mobilité. 2. Lever le lit. 3. Aider à s\'asseoir. 4. Marcher avec aide (déambulateur, canne). 5. Surveiller l\'équilibre. 6. Éviter la sédentarité.',
    objectif: 'Prévenir l\'alitement. Maintenir la fonction. Prévenir les complications.' },
  { id: 'padl-6', titre: 'Aide à la continence', protocole: '1. Évaluer le type d\'incontinence. 2. Proposer des protections adaptées. 3. Aider aux toilettes (horaires). 4. Rééducation périnéale si effort. 5. Soins périnéaux après chaque épisode.',
    objectif: 'Maintenir la dignité. Prévenir les lésions cutanées. Favoriser la continence.' },
  { id: 'padl-7', titre: 'Aide au sommeil', protocole: '1. Hygiène du sommeil (lumière, bruit, température). 2. Position confortable. 3. Éviter les BZD. 4. Mélatonine 2mg si nécessaire. 5. Réveil régulier le matin.',
    objectif: 'Maintenir un rythme veille-sommeil. Prévenir l\'insomnie. Éviter la sédation.' },
  { id: 'padl-8', titre: 'Aide à la communication', protacole: '1. Parler clairement et lentement. 2. Utiliser des gestes. 3. Écrire si nécessaire. 4. Appareillage auditif si presbyacousie. 5. Correction visuelle. 6. Respecter le silence.',
    objectif: 'Maintenir le lien social. Prévenir l\'isolement. Respecter la dignité.' }
];

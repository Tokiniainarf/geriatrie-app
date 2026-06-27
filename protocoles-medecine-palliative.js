// Protocoles de soins de la personne âgée — Médecine palliative
const PROTOCOLES_MEDECINE_PALLIATIVE = [
  { id: 'pmp-1', titre: 'Évaluation de la douleur en palliatif', protocole: '1. Échelle EVA si communicant. 2. ECPA si non communicant. 3. Observer: grimaces, agitation, cris, postures antalgiques. 4. Évaluer toutes les 4h. 5. Ne pas sous-estimer la douleur chez le non-communicant.',
    objectif: 'Évaluer la douleur de manière fiable. Adapter le traitement.' },
  { id: 'pmp-2', titre: 'Traitement de la douleur en palliatif', protocole: '1. Paracétamol IV 4g/j si douleur légère. 2. Morphine SC 0.1mg/kg toutes les 4h (dose initiale). 3. Si douleur continue: perfusion SC continue (2-4mg/h). 4. Si dyspnée: morphine 2-4mg SC. 5. Si anxiété: midazolam 2.5-5mg SC.',
    objectif: 'Soulager la douleur. Améliorer le confort.' },
  { id: 'pmp-3', titre: 'Sédation profonde et continue en fin de vie', protocole: '1. Loi Claeys-Leonetti 2016. 2. Souffrance réfractaire confirmée. 3. Décision collégiale. 4. Midazolam SC 0.5-1mg/kg/24h. 5. Arrêt nutrition/hydratation artificielle. 6. Information famille. 7. Surveillance continue.',
    objectif: 'Soulager les souffrances réfractaires. Respecter la dignité.' },
  { id: 'pmp-4', titre: 'Gestion de la dyspnée en fin de vie', protocole: '1. Position semi-assise. 2. Oxygène 2-4L/min (confort, pas SpO2). 3. Morphine SC 2-4mg. 4. Midazolam 2.5mg si anxiété. 5. Fenêtre ouverte, ventilateur. 6. Soins de bouche.',
    objectif: 'Soulager la dyspnée. Améliorer le confort.' },
  { id: 'pmp-5', titre: 'Gestion des sécrétions bronchiques', protocole: '1. Position latérale. 2. Aspiration douce si gêne. 3. Glycopyrrolate 0.2mg SC (assèche sécrétions). 4. Hyoscine butyl 20mg SC. 5. Ne PAS aspirer systématiquement (désagréable).',
    objectif: 'Réduire les sécrétions. Améliorer le confort.' },
  { id: 'pmp-6', titre: 'Soins de bouche en fin de vie', protocole: '1. Brossage doux 2x/j. 2. Bains de bouche à l\'eau. 3. Hydratation lèvres (baume). 4. Si sécheresse: eau en spray. 5. Si muguet: nystatine. 6. Ne PAS forcer l\'ouverture de la bouche.',
    objectif: 'Maintenir l\'hygiène buccale. Prévenir la souffrance.' },
  { id: 'pmp-7', titre: 'Arrêt de la nutrition artificielle en fin de vie', protocole: '1. Décision collégiale. 2. Information famille. 3. Arrêt progressif (réduire de 50% pendant 48h puis arrêter). 4. Si SNG: débrancher et laisser en place (confort). 5. Hydratation cutanée (crème). 6. Soins de bouche.',
    objectif: 'Respecter le processus naturel de fin de vie.' },
  { id: 'pmp-8', titre: 'Accompagnement de la famille', protocole: '1. Informer régulièrement. 2. Permettre présence 24h/24. 3. Expliquer les signes d\'agonie. 4. Préparer au décès. 5. Proposer soutien psychologique. 6. Après décès: condoléances, certificat, téléphone.',
    objectif: 'Accompagner la famille dans le processus de fin de vie.' }
];

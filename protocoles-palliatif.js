// Protocoles de soins palliatifs — Guide complet fin de vie
const PROTOCOLES_PALLIATIF = [
  { id: 'pp-1', titre: 'Évaluation de la douleur en fin de vie', protocole: '1. Échelle EVA si communicant. 2. ECPA si non communicant. 3. Observer: grimaces, agitation, cris, postures antalgiques. 4. Évaluer toutes les 4h. 5. Ne pas sous-estimer la douleur chez le non-communicant.',
    surveillance: 'EVA ou ECPA toutes les 4h. Constantes. Comportement.' },
  { id: 'pp-2', titre: 'Traitement de la douleur en fin de vie', protocole: '1. Paracétamol IV 4g/j si douleur légère. 2. Morphine SC 0.1mg/kg toutes les 4h (dose initiale). 3. Si douleur continue: perfusion SC continue (2-4mg/h). 4. Si dyspnée: morphine 2-4mg SC. 5. Si anxiété: midazolam 2.5-5mg SC.',
    surveillance: 'Conscience (GCS). FR (objectif > 12). SpO2. Douleur (EVA/ECPA).' },
  { id: 'pp-3', titre: 'Sédation profonde et continue en fin de vie', protocole: '1. Loi Claeys-Leonetti 2016. 2. Souffrance réfractaire confirmée. 3. Décision collégiale. 4. Midazolam SC 0.5-1mg/kg/24h. 5. Arrêt nutrition/hydratation artificielle. 6. Information famille. 7. Surveillance continue.',
    surveillance: 'Conscience. Douleur. Constantes. Confort.' },
  { id: 'pp-4', titre: 'Gestion de la dyspnée en fin de vie', protocole: '1. Position semi-assise. 2. Oxygène 2-4L/min (confort, pas SpO2). 3. Morphine SC 2-4mg. 4. Midazolam 2.5mg si anxiété. 5. Fenêtre ouverte, ventilateur. 6. Soins de bouche.',
    surveillance: 'FR. SpO2. Confort. Anxiété.' },
  { id: 'pp-5', titre: 'Gestion des sécrétions bronchiques', protocole: '1. Position latérale. 2. Aspiration douce si gêne. 3. Glycopyrrolate 0.2mg SC (assèche sécrétions). 4. Hyoscine butyl 20mg SC. 5. Ne PAS aspirer systématiquement (désagréable).',
    surveillance: 'Bruit de « râles ». Confort. Position.' },
  { id: 'pp-6', titre: 'Soins de bouche en fin de vie', protocole: '1. Brossage doux 2x/j. 2. Bains de bouche à l\'eau. 3. Hydratation lèvres (baume). 4. Si sécheresse: eau en spray. 5. Si muguet: nystatine. 6. Ne PAS forcer l\'ouverture de la bouche.',
    surveillance: 'État muqueuses. Sécheresse. Douleur. Infection.' },
  { id: 'pp-7', titre: 'Arrêt de la nutrition artificielle en fin de vie', protocole: '1. Décision collégiale. 2. Information famille. 3. Arrêt progressif (réduire de 50% pendant 48h puis arrêter). 4. Si SNG: débrancher et laisser en place (confort). 5. Hydratation cutanée (crème). 6. Soins de bouche.',
    surveillance: 'Confort. Poids (ne pas surveiller). Diurèse (ne pas surveiller).' },
  { id: 'pp-8', titre: 'Accompagnement de la famille', protocole: '1. Informer régulièrement. 2. Permettre présence 24h/24. 3. Expliquer les signes d\'agonie. 4. Préparer au décès. 5. Proposer soutien psychologique. 6. Après décès: condoléances, certificat, téléphone.',
    surveillance: 'Présence famille. Émotions. Besoins.' },
  { id: 'pp-9', titre: 'Signes d\'agonie', protocole: '1. Respiration de Cheyne-Stokes. 2. Marbrures. 3. Extrémités froides. 4. Respiration bruyante (râles). 5. Inconscience. 6. Polyurie/oligurie. 7. Agitation terminale.',
    surveillance: 'Prévenir la famille. Confort. Pas de réanimation.' },
  { id: 'pp-10', titre: 'Après le décès', protocole: '1. Constat de décès (2 médecins si inattendu). 2. Certificat de décès. 3. Toilette mortuaire. 4. Contact famille. 5. Si don d\'organes: signaler. 6. Si décès inattendu: signalement au procureur.',
    surveillance: 'Documentation. Respect du défunt. Soutien famille.' }
];

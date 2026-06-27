// Situations de garde — Scénarios réalistes pour préparation
const SITUATIONS_GARDE = [
  { id: 'sg-1', titre: 'Patient agité à 3h du matin', contexte: 'EHPAD, nuit. M. Dupont, 88 ans, Alzheimer, se lève, crie, veut sortir.',
    conduite: '1. Évaluer douleur (ECPA). 2. Vérifier température. 3. Rechercher rétention urinaire (globe). 4. Si douleur: paracétamol 1g. 5. Si agitation persiste: halopéridol 0.5mg PO. 6. Pas de contention. 7. Réorientation calme. 8. Présence rassurante.',
    pieges: 'Ne PAS donner de BZD (aggrave confusion). Ne PAS attacher. Ne PAS crier.' },
  { id: 'sg-2', titre: 'Chute avec fracture du poignet', contexte: 'Hôpital, 22h. Mme Martin, 82 ans, trouvée au sol dans sa chambre. Poignet gauche déformé.',
    conduite: '1. Examen clinique complet (neuro, cardio). 2. PA couché/debout. 3. Rx poignet (fracture ?). 4. ECG (syncope ?). 5. Bilan biologique. 6. Réduction + attelle si fracture. 7. Révision médicamenteuse. 8. Déclaration d\'événement indésirable.',
    pieges: 'Chercher la CAUSE (syncope, hypotension, médicament). Pas seulement traiter la fracture.' },
  { id: 'sg-3', titre: 'Confusion post-opératoire', contexte: 'SSR, J2 post-op hanche. M. Garcia, 85 ans, agité la nuit, arrache perfusion.',
    conduite: '1. CAM (début aigu ✓, inattention ✓, fluctuation ✓). 2. Température (infection ?). 3. ECBU. 4. Bilan biologique. 5. Réduire tramadol. 6. Si agitation: halopéridol 0.5mg. 7. Pas de contention. 8. Réorientation.',
    pieges: 'Ne pas attribuer à la "vieillesse". Toujours chercher une cause réversible.' },
  { id: 'sg-4', titre: 'Douleur ingérable en fin de vie', contexte: 'EHPAD, nuit. Mme Morel, 92 ans, cancer, souffre malgré paracétamol + tramadol.',
    conduite: '1. Évaluer douleur (ECPA si non communicante). 2. Escalade antalgique: morphine SC 0.1mg/kg. 3. Si dyspnée: morphine 2-4mg SC. 4. Si anxiété: midazolam 2.5mg SC. 5. Soins de bouche. 6. Prévenir la famille. 7. Ne pas sous-dosser la morphine.',
    pieges: 'La morphine ne "tue" pas. La sous-dosage de la morphine = souffrance inutile.' },
  { id: 'sg-5', titre: 'Forte fièvre chez un sujet âgé', contexte: 'Hôpital, 4h. M. Petit, 80 ans, confusion + T° 39.2°C. Traitement: amlodipine, metformine, oméprazole.',
    conduite: '1. Constantes vitales (PA, FC, SpO2). 2. Examen clinique (poumon, abdomen, peau, urines). 3. ECBU + hémocultures. 4. NFS, CRP, PCT, créatinine, iono. 5. Rx thoracique. 6. Antibio probabiliste (amox-clav 2g IV). 7. Arrêter metformine (risque acidose lactique si déshydratation). 8. Remplissage NaCl.',
    pieges: 'Le sujet âgé peut être AFEBRILE malgré une infection sévère. CRP/PCT > température.' }
];

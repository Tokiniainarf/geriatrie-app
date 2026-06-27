// Protocoles de soins de la personne âgée — Gastro-entérologie
const PROTOCOLES_GASTRO = [
  { id: 'pgastro-1', titre: 'Prise en charge de l\'hémorragie digestive', protocole: '1. Voie veineuse. 2. Remplissage. 3. NFS, TP, groupe. 4. Endoscopie si hémodynamique instable. 5. Arrêt anticoagulant. 6. Transfusion si Hb < 8. 7. Traitement de la cause.',
    objectif: 'Stabilisation. Traitement de la cause.' },
  { id: 'pgastro-2', titre: 'Prise en charge de la constipation', protocole: '1. Étiologie (médicaments, immobilisation, déshydratation). 2. Hydratation. 3. Fibres alimentaires. 4. Macrogol 1-2 sachets/j. 5. Si échec: bisacodyl. 6. Si toujours échec: lavement.',
    objectif: 'Rétablir le transit. Prévenir les complications.' },
  { id: 'pgastro-3', titre: 'Prise en charge de la diarrhée', protocole: '1. Réhydratation. 2. Rechercher C. difficile si antibiothérapie récente. 3. ECBU. 4. Si C. difficile: vancomycine PO. 5. Si persistante: bilan complet.',
    objectif: 'Réhydratation. Traitement de la cause.' },
  { id: 'pgastro-4', titre: 'Prise en charge de l\'occlusion intestinale', protocole: '1. Jeûne. 2. SNG. 3. Réhydratation IV. 4. Bilan (ASP, TDM). 5. Avis chirurgical. 6. Si inopérable: soins palliatifs.',
    objectif: 'Décompression. Traitement de la cause.' },
  { id: 'pgastro-5', titre: 'Prise en charge de l\'insuffisance hépatique', protocole: '1. Bilan hépatique complet. 2. Échographie abdominale. 3. Étiologie (alcool, viral, médicamenteux). 4. Traitement de la cause. 5. Si cirrhose: diurétiques, lactulose.',
    objectif: 'Diagnostic et traitement de la cause.' },
  { id: 'pgastro-6', titre: 'Prise en charge du reflux gastro-œsophagien', protocole: '1. IPP (oméprazole 20mg). 2. Surélévation tête de lit. 3. Évanger les repas copieux le soir. 4. Perte de poids si obésité. 5. Évanger les aliments acides.',
    objectif: 'Soulager les symptômes. Prévenir les complications.' },
  { id: 'pgastro-7', titre: 'Prise en charge de la dysphagie', protocole: '1. Évaluation clinique (eau, purée). 2. Vidéo-fluoroscopie. 3. Adaptation des textures. 4. Position à 90°. 5. Pas de paille. 6. Surveillance inhalation. 7. Nutrition entérale si sévère.',
    objectif: 'Maintenir l\'alimentation orale. Prévenir l\'aspiration.' },
  { id: 'pgastro-8', titre: 'Prise en charge de l\'ascite', protocole: '1. Ponction diagnostique. 2. Régime hyposodé. 3. Diurétiques (spironolactone + furosémide). 4. Paracentèse si volumineuse. 5. Albumine IV si paracentèse > 5L.',
    objectif: 'Réduire l\'ascite. Traiter la cause.' }
];

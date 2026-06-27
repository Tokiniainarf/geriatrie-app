// Protocoles de soins de support — Accompagnement global
const PROTOCOLES_SUPPORT = [
  { id: 'ps-1', titre: 'Soins de la bouche', protocole: '1. Brossage doux 2x/j (brosse souple). 2. Bain de bouche à l\'eau (pas d\'alcool). 3. Hydratation lèvres (baume). 4. Si sécheresse: spray buccal. 5. Si muguet: nystatine. 6. Prothèses: nettoyer 2x/j.',
    surveillance: 'État muqueuses. Sécheresse. Douleur. Infection. Prothèse adaptée.' },
  { id: 'ps-2', titre: 'Soins de la peau', protocole: '1. Toilette quotidienne (eau tiède, savon surgras). 2. Hydratation crème (2x/j). 3. Éviter bains trop chauds. 4. Séchage par tamponnement. 5. Vérifier points d\'appui. 6. Couper ongles droits.',
    surveillance: 'Rougeur. Sécheresse. Lésion. Prurit. Cicatrisation.' },
  { id: 'ps-3', titre: 'Soins périnéaux', protocole: '1. Toilette périnéale après chaque selle. 2. Séchage soigneux. 3. Crème protectrice (zinc). 4. Protection adaptée (change). 5. Si mycose: antifongique local.',
    surveillance: 'Rougeur. Macération. Mycose. Escarre.' },
  { id: 'ps-4', titre: 'Soins des pieds', protocole: '1. Pédiluve tiède (pas chaud). 2. Séchage entre les orteils. 3. Couper ongles droits. 4. Hydratation crème. 5. Vérifier lésions (fissure, mycose). 6. Chaussures adaptées.',
    surveillance: 'État cutané. Mycose. Ongle incarné. Sensibilité (neuropathie).' },
  { id: 'ps-5', titre: 'Soins des yeux', protocole: '1. Nettoyage sérum physiologique (matin et soir). 2. Si sécheresse: larmes artificielles. 3. Si DMLA: surveillance ophtalmo. 4. Vérifier acuité visuelle. 5. Lunettes adaptées.',
    surveillance: 'Acuité visuelle. Sécheresse. DMLA. Cataracte.' },
  { id: 'ps-6', titre: 'Soins des oreilles', protocole: '1. Nettoyage externe (pas de cotons-tiges). 2. Irrigation si bouchon cérumen. 3. Appareillage auditif si presbyacousie. 4. Vérifier propreté appareil. 5. Piles de rechange.',
    surveillance: 'Audition. Cérumen. Appareillage fonctionnel.' },
  { id: 'ps-7', titre: 'Soins du nez', protocole: '1. Lavage sérum physiologique. 2. Si obstruction: décongestionnant (courte durée). 3. Si épistaxis: compression 10 min. 4. Si saignement abondant: tamponnement + avis ORL.',
    surveillance: 'Obstruction. Saignement. Respiration.' },
  { id: 'ps-8', titre: 'Soins du périnée et sphincters', protocole: '1. Évaluer type incontinence. 2. Protection adaptée. 3. Rééducation périnéale si effort. 4. Horaires mictionnels si fonctionnelle. 5. Si sondage: soins méat 2x/j.',
    surveillance: 'Fréquence mictions. Fuites. Irritation. Infection.' }
];

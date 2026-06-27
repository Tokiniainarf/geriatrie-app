// Protocoles de soins palliatifs pédiatriques adaptés gériatrie
const PROTOCOLES_PALLIATIF_AVANCES = [
  { id: 'ppa-1', titre: 'Gestion de l\'anxiété en fin de vie', protocole: '1. Écoute active. 2. Présence rassurante. 3. Midazolam 2.5-5mg SC si anxiété sévère. 4. Hydroxyzine 25mg PO si légère. 5. Techniques de relaxation. 6. Accompagnement spirituel si demandé.',
    surveillance: 'Anxiété (échelle). Confort. Sommeil.' },
  { id: 'ppa-2', titre: 'Gestion de l\'insomnie en fin de vie', protocole: '1. Hygiène du sommeil (lumière, bruit). 2. Mélatonine 2mg. 3. Hydroxyzine 25mg. 4. Si réfractaire: midazolam SC. 5. Éviter BZD longue durée.',
    surveillance: 'Qualité sommeil. Éveil diurne. Confusion.' },
  { id: 'ppa-3', titre: 'Gestion de la constipation en fin de vie', protocole: '1. Prophylaxie systématique si opioïdes. 2. Macrogol 1 sachet/j. 3. Si échec: bisacodyl 10mg. 4. Si toujours échec: lavement. 5. Surveiller occlusion.',
    surveillance: 'Transit. Distension abdominale. Vomissements.' },
  { id: 'ppa-4', titre: 'Gestion des nausées en fin de vie', protocole: '1. Metoclopramide 10mg x3/j. 2. Si échec: halopéridol 0.5mg. 3. Si vestibulaire: diménhydrinate. 4. Si occlusion: octréotide. 5. Position latérale.',
    surveillance: 'Nausées. Vomissements. Hydratation.' },
  { id: 'ppa-5', titre: 'Gestion de l\'agitation terminale', protocole: '1. Rechercher cause (rétention, constipation, douleur). 2. Midazolam 5-10mg SC. 3. Halopéridol 2-5mg SC. 4. Si réfractaire: lévomépromazine. 5. Ne PAS augmenter les doses indéfiniment.',
    surveillance: 'Agitation. Confort. Resspiration.' },
  { id: 'ppa-6', titre: 'Sédation de confort', protocole: '1. Souffrance réfractaire confirmée. 2. Décision collégiale. 3. Midazolam SC 0.5-1mg/kg/24h. 4. Arrêt nutrition/hydratation. 5. Information famille. 6. Surveillance continue.',
    surveillance: 'Confort. Douleur. Conscience. Constantes.' },
  { id: 'ppa-7', titre: 'Accompagnement spirituel', protocole: '1. Demander les souhaits du patient. 2. Contacter aumônerie si demandé. 3. Respecter les rituels. 4. Proposer méditation/prière. 5. Écouter sans juger.',
    surveillance: 'Besoin spirituel. Sérénité. Paix intérieure.' },
  { id: 'ppa-8', titre: 'Soins du corps après décès', protocole: '1. Toilette mortuaire respectueuse. 2. Retirer dispositifs médicaux. 3. Habiller si souhait famille. 4. Identifier le défunt. 5. Mettre en chambre funéraire. 6. Respecter les délais religieux.',
    surveillance: 'Respect du défunt. Délais familiaux.' }
];

// Protocoles de soins de la personne âgée en SSR — Rééducation
const PROTOCOLES_SSR = [
  { id: 'pssr-1', titre: 'Admission en SSR', protocole: '1. Évaluation initiale complète (ADL, Tinetti, MMS, MNA, GDS). 2. Objectifs personnalisés. 3. Programme de rééducation. 4. Projet de sortie. 5. Communication avec le médecin traitant.',
    duree: '4-8 semaines selon pathologie.' },
  { id: 'pssr-2', titre: 'Rééducation post-chirurgie orthopédique', protocole: '1. Lever précoce (J1). 2. Mise en charge progressive. 3. Rééducation marche. 4. Renforcement musculaire. 5. Transferts. 6. Évaluation douleur quotidienne.',
    objectif: 'Autonomie dans les déplacements. Retour domicile.' },
  { id: 'pssr-3', titre: 'Rééducation post-AVC', protocole: '1. Évaluation NIHSS initiale. 2. Rééducation motrice (membre supérieur + inférieur). 3. Équilibre. 4. Marche. 5. AVD. 6. Rééducation cognitive si nécessaire. 7. 5x/sem.',
    objectif: 'Récupération maximale. Autonomie dans les AVD.' },
  { id: 'pssr-4', titre: 'Rééducation post-fracture', protocole: '1. Évaluation initiale. 2. Mise en charge selon type de fracture. 3. Rééducation marche. 4. Renforcement. 5. Équilibre. 6. Prévention récidive.',
    objectif: 'Retour à l\'autonomie antérieure. Prévention récidive.' },
  { id: 'pssr-5', titre: 'Transition SSR → domicile', protocole: '1. Évaluation autonomie finale. 2. Aide à domicile si nécessaire. 3. Adaptation domicile. 4. RDV médecin traitant. 5. Kiné ambulatoire. 6. Bilan biologique.',
    objectif: 'Retour sécurisé à domicile. Prévention réhospitalisation.' },
  { id: 'pssr-6', titre: 'Kinésithérapie en SSR', protocole: '1. Évaluation initiale. 2. Programme personnalisé. 3. 5x/sem. 4. Rééducation fonctionnelle. 5. Éducation patient. 6. Réévaluation hebdomadaire.',
    objectif: 'Amélioration de la fonction. Autonomie.' },
  { id: 'pssr-7', titre: 'Ergothérapie en SSR', protocole: '1. Évaluation des AVD. 2. Entraînement aux gestes quotidiens. 3. Adaptation du domicile. 4. Aides techniques. 5. 3x/sem.',
    objectif: 'Autonomie dans les AVD. Adaptation du domicile.' },
  { id: 'pssr-8', titre: 'Diététique en SSR', protocole: '1. Évaluation nutritionnelle (MNA). 2. Plan alimentaire adapté. 3. Enrichissement si nécessaire. 4. CNO si échec. 5. Éducation alimentaire.',
    objectif: 'Correction de la dénutrition. Équilibre alimentaire.' }
];

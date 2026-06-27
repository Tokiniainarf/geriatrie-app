// Protocoles de kinésithérapie en gériatrie — Rééducation fonctionnelle
const PROTOCOLES_KINE = [
  { id: 'pk-1', titre: 'Rééducation post-chute', objectif: 'Réduire le risque de récidive de 30-50%',
    programme: '1. Évaluation initiale (Tinetti, Berg, TUG). 2. Renforcement quadriceps et ischio-jambiers (3x10 reps). 3. Équilibre statique (unipodal 30s). 4. Équilibre dynamique (marche obstacle). 5. Entraînement à la marche (vitesse, endurance). 6. Transferts (assis-debout, lit-chaise). 7. 3 séances/sem pendant 8-12 semaines.',
    surveillance: 'Tinetti à S4 et S12. TUG. Vitesse de marche. Nombre de chutes.' },
  { id: 'pk-2', titre: 'Rééducation post-AVC', objectif: 'Récupérer le maximum d\'autonomie',
    programme: '1. Évaluation NIHSS + Barthel. 2. Rééducation motrice (membre supérieur + inférieur). 3. Équilibre assis puis debout. 4. Marche avec aide (déambulateur → canne). 5. Activités de la vie quotidienne. 6. Rééducation cognitive si nécessaire. 7. 5 séances/sem pendant 4-6 semaines.',
    surveillance: 'NIHSS hebdomadaire. Barthel à S2 et S6. Vitesse de marche. Autonomie ADL.' },
  { id: 'pk-3', titre: 'Rééducation post-fracture col fémoral', objectif: 'Récupérer la marche et l\'autonomie',
    programme: '1. Lever précoce (J1 post-op si possible). 2. Mise en charge progressive (appui total si prothèse). 3. Renforcement quadriceps et fessiers. 4. Équilibre assis puis debout. 5. Marche avec déambulateur. 6. Escaliers. 7. 5 séances/sem pendant 6-8 semaines.',
    surveillance: 'Douleur (EVA), amplitude articulaire, périmètre de marche, autonomie ADL.' },
  { id: 'pk-4', titre: 'Prévention des chutes en groupe', objectif: 'Réduire le risque de chute de 20-30%',
    programme: '1. Évaluation individuelle (Tinetti). 2. Exercices en groupe (2x/sem, 45 min). 3. Renforcement des membres inférieurs. 4. Exercices d\'équilibre (Tai Chi, danse). 5. Marche active. 6. Éducation (facteurs de risque, environnement). 7. Durée: 12 semaines minimum.',
    surveillance: 'Tinetti avant/après. Nombre de chutes. Qualité de vie.' },
  { id: 'pk-5', titre: 'Rééducation respiratoire (BPCO)', objectif: 'Améliorer la tolérance à l\'effort et la qualité de vie',
    programme: '1. Évaluation (test de marche 6 min, SpO2). 2. Exercices respiratoires (respiration diaphragmatique, lèvres pincées). 3. Renforcement des muscles respiratoires. 4. Exercices aérobics (marche, vélo). 5. Éducation (inhalateurs, oxygène). 6. 3 séances/sem pendant 8-12 semaines.',
    surveillance: 'Test de marche 6 min. SpO2. Dyspnée (échelle mMRC). Qualité de vie.' },
  { id: 'pk-6', titre: 'Maintien de l\'autonomie en EHPAD', objectif: 'Prévenir le déclin fonctionnel',
    programme: '1. Évaluation ADL/IADL trimestrielle. 2. Exercices quotidiens (assis-debout, marche). 3. Activités de groupe (gymnastique, danse). 4. Stimulation cognitive (jeux, puzzles). 5. Prévention escarres (mobilisation H2). 6. Entretien continu.',
    surveillance: 'ADL/IADL trimestriel. Poids mensuel. Escarres. Humeur.' }
];

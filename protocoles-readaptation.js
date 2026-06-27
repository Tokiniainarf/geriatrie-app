// Protocoles de réadaptation fonctionnelle — Programme complet
const PROTOCOLES_READAPTATION = [
  { id: 'prd-1', titre: 'Programme de réadaptation post-hospitalisation', protocole: '1. Évaluation initiale (ADL, Tinetti, MMS, MNA). 2. Objectifs personnalisés. 3. Kinésithérapie 5x/sem. 4. Ergothérapie 3x/sem. 5. Diététique 1x/sem. 6. Psychologie si nécessaire. 7. Réévaluation hebdomadaire.',
    duree: '4-8 semaines. Objectif: retour à l\'autonomie antérieure.' },
  { id: 'prd-2', titre: 'Rééducation de la marche', protocole: '1. Évaluation initiale (vitesse, distance, équilibre). 2. Entraînement sur tapis roulant. 3. Marche en terrain varié. 4. Escaliers. 5. Utilisation aide technique (canne, déambulateur). 6. 3x/sem pendant 8-12 semaines.',
    objectif: 'Vitesse de marche > 0.8 m/s. Autonomie dans les déplacements.' },
  { id: 'prd-3', titre: 'Renforcement musculaire', protocole: '1. Évaluation force musculaire (MRC). 2. Exercices contre résistance (bandes élastiques). 3. Squats assis-debout. 4. Montée d\'escaliers. 5. 3x/sem pendant 8-12 semaines.',
    objectif: 'Gain de force de 20-30%. Prévention sarcopénie.' },
  { id: 'prd-4', titre: 'Entraînement à l\'équilibre', protocole: '1. Évaluation (Tinetti, Berg). 2. Unipodal (30s). 3. Marche en ligne. 4. Tai Chi. 5. Plateau instable. 6. 3x/sem pendant 8-12 semaines.',
    objectif: 'Tinetti > 24. Berg > 45. Réduction risque chute.' },
  { id: 'prd-5', titre: 'Rééducation de la préhension', protocole: '1. Évaluation motricité fine. 2. Exercices de pince (poids, objets). 3. Manipulation d\'objets du quotidien. 4. Écriture. 5. 3x/sem pendant 8-12 semaines.',
    objectif: 'Autonomie dans les AVD (habillage, alimentation).' },
  { id: 'prd-6', titre: 'Entraînement aux transferts', protocole: '1. Évaluation (assis-debout, lit-chaise). 2. Technique de transfert sécurisée. 3. Utilisation aide technique. 4. 3x/sem pendant 4-8 semaines.',
    objectif: 'Transfert autonome et sécurisé.' },
  { id: 'prd-7', titre: 'Rééducation cardio-respiratoire', protocole: '1. Évaluation (test marche 6 min, SpO2). 2. Marche progressive. 3. Vélo stationnaire. 4. Exercices respiratoires. 5. 3x/sem pendant 8-12 semaines.',
    objectif: 'Amélioration de 20-30% de la capacité fonctionnelle.' },
  { id: 'prd-8', titre: 'Programme de maintien', protocole: '1. Évaluation trimestrielle. 2. Exercices quotidiens (30 min). 3. Activité physique adaptée. 4. Stimulation cognitive. 5. Socialisation.',
    objectif: 'Maintien de l\'autonomie. Prévention du déclin.' }
];

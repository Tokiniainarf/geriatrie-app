// Protocoles de prévention — Prévention primaire et secondaire
const PROTOCOLES_PREVENTION = [
  { id: 'ppv-1', titre: 'Prévention des chutes', protocole: '1. Évaluation Tinetti trimestrielle. 2. Révision médicamenteuse. 3. Correction visuelle. 4. Adaptation domicile (éclairage, barres, tapis). 5. Rééducation équilibre (3x/sem). 6. Vit D 800UI/j. 7. Chaussures antidérapantes.',
    efficacité: 'Réduction de 30-50% du risque de chute.' },
  { id: 'ppv-2', titre: 'Prévention des escarres', protacole: '1. Évaluation Braden trimestrielle. 2. Changement position H2. 3. Matelas anti-escarres. 4. Nutrition adéquate (protéines). 5. Hydratation cutanée. 6. Éviter la contention. 7. Soins de la peau.',
    efficacité: 'Réduction de 60-80% du risque d\'escarre.' },
  { id: 'ppv-3', titre: 'Prévention de la dénutrition', protocole: '1. Évaluation MNA trimestrielle. 2. Enrichissement alimentaire. 3. CNO si risque. 4. Fractionnement (6 repas/j). 5. Soins dentaires. 6. Lutter contre l\'isolement.',
    efficacité: 'Réduction de 40-60% du risque de dénutrition.' },
  { id: 'ppv-4', titre: 'Prévention de la dépression', protocole: '1. Évaluation GDS-15 annuelle. 2. Activités sociales. 3. Exercice physique. 4. Lutter contre l\'isolement. 5. Traitement des maladies chroniques. 6. Soutien psychologique.',
    efficacité: 'Réduction de 30-50% du risque de dépression.' },
  { id: 'ppv-5', titre: 'Prévention des infections', protocole: '1. Vaccination (grippe annuelle, pneumocoque, zona). 2. Hygiène des mains. 3. Soins cutanés. 4. Éviter le sondage urinaire. 5. Nutrition adéquate.',
    efficacité: 'Réduction de 50-70% du risque d\'infection.' },
  { id: 'ppv-6', titre: 'Prévention cardiovasculaire', protocole: '1. Contrôle PA (< 140/90). 2. Contrôle glycémique (HbA1c < 8%). 3. Contrôle lipidique. 4. Arrêt tabac. 5. Exercice physique. 6. Anticoagulation si FA.',
    efficacité: 'Réduction de 30-50% du risque cardiovasculaire.' },
  { id: 'ppv-7', titre: 'Prévention de la iatrogénie', protocole: '1. Revue médicamenteuse trimestrielle. 2. Critères de Beers. 3. Éviter la polymédication. 4. Éducation patient. 5. Surveillance des effets secondaires.',
    efficacité: 'Réduction de 40-60% des événements indésirables.' },
  { id: 'ppv-8', titre: 'Prévention de la perte d\'autonomie', protocole: '1. Évaluation ADL/IADL trimestrielle. 2. Exercice physique quotidien. 3. Stimulation cognitive. 4. Maintien des activités. 5. Aide à domicile si nécessaire.',
    efficacité: 'Ralentissement du déclin fonctionnel de 30-50%.' }
];

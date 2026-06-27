// Tableau de bord EVC — Métriques de préparation examen
const TABLEAU_BORD_EVC = [
  { id: 'tbe-1', metrique: 'Chapitres lus', calcul: 'Chapitres consultés / 20', objectif: '20/20', action: 'Lire les chapitres manquants' },
  { id: 'tbe-2', metrique: 'Flashcards maîtrisées', calcul: 'Cards "Je sais" / total cards', objectif: '> 80%', action: 'Réviser les cards échouées' },
  { id: 'tbe-3', metrique: 'Annales travaillées', calcul: 'Cas EVC pratiqués / total', objectif: '> 50%', action: 'Pratiquer les cas manquants' },
  { id: 'tbe-4', metrique: 'Scores connus', calcul: 'Scores cités correctement / 10', objectif: '10/10', action: 'Réviser les scores' },
  { id: 'tbe-5', metrique: 'Protocoles maîtrisés', calcul: 'Protocoles cités correctement / 15', objectif: '15/15', action: 'Réviser les protocoles' },
  { id: 'tbe-6', metrique: 'Temps de réponse', calcul: 'Temps moyen par question', objectif: '< 2 min', action: 'S\'entraîner au chronomètre' },
  { id: 'tbe-7', metrique: 'Pièges évités', calcul: 'Pièges identifiés / 15', objectif: '15/15', action: 'Relire les pièges d\'examen' },
  { id: 'tbe-8', metrique: 'Streak quotidien', calcul: 'Jours consécutifs de révision', objectif: '> 30 jours', action: 'Maintenir la régularité' },
  { id: 'tbe-9', metrique: 'Quiz réussis', calcul: 'Quiz réussis / total quiz', objectif: '> 75%', action: 'Refuser les quiz échoués' },
  { id: 'tbe-10', metrique: 'EVC simulés', calcul: 'Simulations EVC complètes', objectif: '> 5', action: 'Pratiquer les simulations' }
];

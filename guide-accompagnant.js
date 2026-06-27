// Accompagnement — Guide pour l'entourage du patient gériatrique
const GUIDE_ACCOMPAGNANT = [
  { id: 'acc-1', titre: 'Comment communiquer avec un patient dément ?',
    conseils: [
      'Parlez lentement, avec des phrases courtes et simples',
      'Utilisez le prénom du patient, présentez-vous à chaque visite',
      'Évitez les questions ouvertes : préférez les questions oui/non',
      'Ne corrigez pas les erreurs du patient (ne dites pas "non, c\'est faux")',
      'Utilisez des supports visuels (photos, objets familiers)',
      'Maintenez un contact visuel et une posture calme',
      'Respectez les routines (heures de repes, coucher)',
      'Évitez les environnements surstimulants (bruit, lumière vive)'
    ] },
  { id: 'acc-2', titre: 'Prévenir les chutes à domicile',
    conseils: [
      'Éliminer les tapis et câbles au sol',
      'Installer des barres d\'appui dans la salle de bain',
      'Éclairer les couloirs et escaliers (veilleuses nocturnes)',
      'Ranger les objets courants à hauteur de main',
      'Porter des chaussures antidérapantes (pas de chaussons)',
      'Éviter de se lever trop vite (attendre 2 minutes au bord du lit)',
      'Vérifier la vue et l\'audition régulièrement',
      'Réduire les médicaments qui causent des chutes (demander au médecin)'
    ] },
  { id: 'acc-3', titre: 'Signes d\'alerte à ne pas ignorer',
    conseils: [
      'Confusion soudaine (delirium) → appeler le médecin',
      'Perte d\'appétit prolongée (> 3 jours) → risque de dénutrition',
      'Chute même sans blessure → évaluation médicale',
      'Fièvre ou hypothermie (< 36°C) → infection possible',
      'Agitation inhabituelle → douleur ? infection ? médicament ?',
      'Perte de poids > 5% en 1 mois → dénutrition',
      'Isolement social prolongé → risque dépressif',
      'Incontinence récente → cause à rechercher (infection, médicament)'
    ] },
  { id: 'acc-4', titre: 'Maintenir l\'autonomie',
    conseils: [
      'Encourager les activités quotidiennes (habillage, toilette)',
      'Ne pas faire À LA PLACE mais AVEC le patient',
      'Stimuler les activités intellectuelles (lecture, jeux, conversation)',
      'Maintenir les liens sociaux (visites, sorties, téléphone)',
      'Adapter l\'environnement plutôt que restreindre les activités',
      'Respecter les choix du patient même s\'ils ne sont pas "optimaux"',
      'Proposer des activités physiques adaptées (marche, gymnastique douce)',
      'Impliquer le patient dans les décisions médicales'
    ] },
  { id: 'acc-5', titre: 'Prendre soin de soi (aidant)',
    conseils: [
      'Reconnaître ses propres limites (fatigue, épuisement)',
      'Demander de l\'aide (aide à domicile, accueil de jour, hébergement temporaire)',
      'Participer à des groupes de parole d\'aidants',
      'Maintenir ses propres activités et loisirs',
      'Consulter un médecin si signes de dépression ou d\'épuisement',
      'Accepter que la maladie évolue et que les capacités diminuent',
      'Ne pas culpabiliser de placer en EHPAD si nécessaire',
      'L\'aidant en bonne santé = un meilleur accompagnement'
    ] }
];

// Protocoles de soins de la personne âgée en USP — Unité de Soins Prolongés
const PROTOCOLES_USP = [
  { id: 'pusp-1', titre: 'Admission en USP', protocole: '1. Évaluation complète (ADL, Tinetti, MMS, MNA, GDS, Braden). 2. Projet de soins individualisé. 3. Objectifs de maintien. 4. Communication famille. 5. RDV médecin traitant.',
    objectif: 'Maintien de la qualité de vie. Prévention des complications.' },
  { id: 'pusp-2', titre: 'Maintien de l\'autonomie en USP', protocole: '1. Évaluation ADL/IADL trimestrielle. 2. Exercices quotidiens (assis-debout, marche). 3. Stimulation cognitive. 4. Activités sociales. 5. Aide aux AVD.',
    objectif: 'Ralentir le déclin fonctionnel. Maintenir les capacités.' },
  { id: 'pusp-3', titre: 'Prévention des complications en USP', protocole: '1. Escarres: Braden + matelas + changement position H2. 2. Chutes: Tinetti + adaptation chambre. 3. Infections: vaccination + hygiène. 4. Dénutrition: MNA + enrichissement. 5. Confusion: stimulation + orientation.',
    objectif: 'Zéro escarre. Zéro chute. Zéro infection évitable.' },
  { id: 'pusp-4', titre: 'Gestion du comportement en USP', protocole: '1. Évaluer la cause (douleur, infection, médicaments). 2. Approche non médicamenteuse. 3. Environnement calme. 4. Si nécessaire: quétiapine 25mg. 5. Éviter contention.',
    objectif: 'Apaisement. Sécurité. Dignité.' },
  { id: 'pusp-5', titre: 'Accompagnement de la famille en USP', protocole: '1. Réunion famille trimestrielle. 2. Information sur l\'état du résident. 3. Participation aux soins si souhaité. 4. Soutien psychologique. 5. Préparation au deuil.',
    objectif: 'Maintien du lien familial. Soutien.' },
  { id: 'pusp-6', titre: 'Soins de fin de vie en USP', protocole: '1. Projet de soins palliatifs. 2. Douleur: morphine SC. 3. Soins de bouche H2. 4. Hydratation cutanée. 5. Pas de nutrition artificielle. 6. Accompagnement famille.',
    objectif: 'Confort. Dignité. Accompagnement.' },
  { id: 'pusp-7', titre: 'Activités en USP', protocole: '1. Activités de groupe (gymnastique, musique). 2. Activités individuelles (jeux, lecture). 3. Jardinage adapté. 4. Sorties extérieures si possible. 5. Bénévoles.',
    objectif: 'Stimulation. Socialisation. Plaisir.' },
  { id: 'pusp-8', titre: 'Équipe en USP', protocole: '1. Médecin coordonnateur. 2. Infirmiers. 3. Aides-soignants. 4. Kinésithérapeute. 5. Ergothérapeute. 6. Psychologue. 7. Aumônerie. 8. Animateur.',
    objectif: 'Prise en charge globale. Coordination.' }
];

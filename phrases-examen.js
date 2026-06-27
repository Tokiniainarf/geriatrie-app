// Phrases d'examen — Formulations qui impressionnent le jury
const PHRASES_EXAMEN = [
  { id: 'pe-1', categorie: 'Introduction', phrases: [
    'Je vous présente un patient de [âge] ans, de sexe [masculin/féminin], connu pour [ATCD], qui consulte/admis pour [motif].',
    'L\'histoire de la maladie actuelle commence il y a [délai] par [premier symptôme], complété par [évolution].',
    'Le contexte social est le suivant: le patient vit [seul/en couple/en EHPAD], bénéficie de [aides], et son niveau d\'autonomie est [évalué par ADL/IADL].'
  ]},
  { id: 'pe-2', categorie: 'Examen clinique', phrases: [
    'L\'examen clinique retrouve les constantes suivantes: PA [X] mmHg, FC [X] bpm, T° [X]°C, SpO2 [X]%, FR [X]/min, poids [X] kg, taille [X] cm.',
    'L\'évaluation gériatrique standardisée montre: MMS [X]/30, GDS-15 [X]/15, ADL [X]/6, IADL [X]/8, MNA [X]/30, Tinetti [X]/28.',
    'L\'examen par appareil retrouve: [résultats]. Il n\'y a pas de [négatifs pertinents].'
  ]},
  { id: 'pe-3', categorie: 'Diagnostic', phrases: [
    'Sur la base de ces éléments cliniques et paracliniques, je retiens le diagnostic de [X], confirmé par [critères].',
    'Le diagnostic différentiel principal est [X], que j\'élimine par [arguments].',
    'Les critères diagnostiques de [X] sont remplis: je citerai [critère 1], [critère 2], [critère 3].'
  ]},
  { id: 'pe-4', categorie: 'Thérapeutique', phrases: [
    'La prise en charge thérapeutique repose sur une approche en 2 temps: immédiat et de fond.',
    'Le traitement immédiat comprend: [traitements] à instaurer dans les [délai].',
    'Le traitement de fond vise à [objectif] par [moyens], avec une surveillance de [paramètres] à [fréquence].',
    'Les mesures non médicamenteuses sont essentielles: [mesures] complètent le traitement pharmacologique.'
  ]},
  { id: 'pe-5', categorie: 'Iatrogénie', phrases: [
    'La cascade iatrogénique est la suivante: [médicament A] → [effet indésirable] → [médicament B] → [effet] → [médicament C].',
    'Selon les critères de Beers, [X] médicaments sont inappropriés chez ce patient: [liste].',
    'La déprescription est proposée pour: [médicaments], en raison de [raisons], avec un sevrage progressif sur [durée].'
  ]},
  { id: 'pe-6', categorie: 'Pronostic', phrases: [
    'Le pronostic est [favorable/réservé/engagé], conditionné par [facteurs pronostiques].',
    'Les facteurs de bon pronostic sont: [facteurs]. Les facteurs péjoratifs sont: [facteurs].',
    'L\'évolution attendue est [progressive/stable/réversible] avec une réévaluation prévue à [délai].'
  ]},
  { id: 'pe-7', categorie: 'Éthique', phrases: [
    'Le principe d\'autonomie du patient est respecté: il a été informé de son état et a donné son consentement.',
    'Les directives anticipées du patient [existent/n\'existent pas] et [conformes/non conformes] à la situation actuelle.',
    'En cas de conflit entre l\'avis de la famille et celui du patient, le principe d\'autonomie prime.'
  ]},
  { id: 'pe-8', categorie: 'Conclusion', phrases: [
    'En résumé, ce patient présente [diagnostic principal] sur terrain de [comorbidités], nécessitant [prise en charge].',
    'La surveillance ultérieure comprendra: [surveillance] avec réévaluation à [délai].',
    'Le plan de sortie est le suivant: [destination] avec [suivi] et [prévention].'
  ]}
];

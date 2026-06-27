// Aide-mémoire EVC — Phrases et formulations pour l'examen
const AIDE_MEMOIRE_EVC = [
  { id: 'ame-1', categorie: 'Présentation', phrases: [
    'Je vous présente M./Mme [NOM], âgé(e) de [ÂGE] ans, qui consulte/admis pour [MOTIF].',
    'Ce patient est suivi pour [ATCD] et traite actuellement par [TRAITEMENTS].',
    'Le contexte social est le suivant : [SEUL/EHPAD/AIDE DOMICILE].',
    'L\'histoire de la maladie commence il y a [DÉLAI] par [SYMPTÔMES].'
  ]},
  { id: 'ame-2', categorie: 'Examen clinique', phrases: [
    'L\'examen clinique retrouve : PA [X] mmHg, FC [X] bpm, T° [X]°C, SpO2 [X]%, FR [X]/min.',
    'L\'examen neurologique ne retrouve pas de déficit focal.',
    'L\'examen cardiovasculaire est sans particularité / retrouve [ANOMALIE].',
    'L\'évaluation gériatrique montre : MMS [X]/30, GDS-15 [X]/15, ADL [X]/6, IADL [X]/8.',
    'L\'échelle de Tinetti vaut [X]/28, témoignant d\'un risque de chute [ÉLEVÉ/MODÉRÉ/FAIBLE].'
  ]},
  { id: 'ame-3', categorie: 'Hypothèses diagnostiques', phrases: [
    'Mon hypothèse principale est [DIAGNOSTIC], en faveur de quoi je retiens les arguments suivants : [ARGUMENTS].',
    'Les diagnostics différentiels à éliminer sont : [DIFFÉRENTIELS].',
    'Le diagnostic de [X] est retenu sur la base des critères suivants : [CRITÈRES].',
    'Je dois éliminer [X] car [RAISON], ce qui nécessite [EXAMEN].'
  ]},
  { id: 'ame-4', categorie: 'Conduite à tenir', phrases: [
    'Je propose une prise en charge en 2 temps : immédiat puis de fond.',
    'Le traitement immédiat comprend : [TRAITEMENT].',
    'Le traitement de fond repose sur : [TRAITEMENT].',
    'La surveillance comportera : [SURVEILLANCE] avec réévaluation à [DÉLAI].',
    'Le plan de sortie est le suivant : [DOMICILE/SSR/EHPAD] avec [SUIVI].'
  ]},
  { id: 'ame-5', categorie: 'Échelles et scores', phrases: [
    'Le score de [NOM] vaut [X], ce qui oriente vers [INTERPRÉTATION].',
    'L\'échelle de [NOM] a été utilisée pour évaluer [PARAMÈTRE].',
    'Le MNA vaut [X]/30, témoignant d\'un état nutritionnel [NORMAL/À RISQUE/DÉNUTRI].',
    'La CAM est positive/confirmant un syndrome confusionnel aigu.'
  ]},
  { id: 'ame-6', categorie: 'Pronostic', phrases: [
    'Le pronostic est [FAVORABLE/RÉSERVÉ/ENGAGÉ] en raison de [FACTEURS].',
    'Les facteurs pronostiques péjoratifs sont : [FACTEURS].',
    'L\'évolution attendue est [PROGRESSIVE/EN DENTS DE SCIE/RÉVERSIBLE].',
    'La qualité de vie peut être améliorée par [INTERVENTIONS].'
  ]},
  { id: 'ame-7', categorie: 'Éthique et fin de vie', phrases: [
    'Les directives anticipées du patient [EXISTENT/N\'EXISTENT PAS].',
    'La personne de confiance désignée est [NOM/LIEN].',
    'Le principe d\'autonomie du patient prime sur le principe de bienfaisance.',
    'L\'obstination déraisonnable est exclue conformément à la loi Claeys-Leonetti.',
    'Un projet de soins palliatifs est proposé, centré sur le confort du patient.'
  ]},
  { id: 'ame-8', categorie: 'Iatrogénie', phrases: [
    'La cascade iatrogénique est la suivante : [MÉDICAMENT A] → [EFFET] → [MÉDICAMENT B] → [EFFET].',
    'Les critères de Beers sont respectés/non respectés pour [MÉDICAMENTS].',
    'La déprescription est proposée pour [MÉDICAMENTS] en raison de [RAISONS].',
    'La revue médicamenteuse a identifié [N] médicaments inappropriés.'
  ]}
];

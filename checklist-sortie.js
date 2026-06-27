// Checklist de sortie d'hospitalisation — Transition soins
const CHECKLIST_SORTIE = [
  { id: 'cs-1', titre: 'Avant la sortie', items: [
    'Diagnostic de sortie clair et documenté',
    'Ordonnance de sortie rédigée et expliquée au patient',
    'Médicaments: liste complète avec posologies et durées',
    'Rendez-vous de suivi pris (médecin traitant, spécialistes)',
    'Bilan de biologie de contrôle programmé',
    'Prescriptions de kinésithérapie/soins si nécessaire',
    'Aides techniques prescrites (canne, déambulateur, fauteuil)',
    'Aide à domicile organisée si nécessaire',
    'Patient et famille informés des signes d\'alerte',
    'Lettre au médecin traitant rédigée et transmise'
  ]},
  { id: 'cs-2', titre: 'Signes d\'alerte à surveiller', items: [
    'Fièvre > 38°C ou frissons',
    'Confusion soudaine ou aggravation',
    'Douleur nouvelle ou qui s\'aggrave',
    'Difficultés respiratives',
    'Chute ou perte d\'équilibre',
    'Perte d\'appétit prolongée (> 3 jours)',
    'Œdèmes des chevilles ou prise de poids rapide',
    'Saignements anormaux',
    'Plaie qui ne cicatrise pas',
    'Aggravation de l\'état général'
  ]},
  { id: 'cs-3', titre: 'Organisation du retour à domicile', items: [
    'Évaluation du domicile (accessibilité, sécurité)',
    'Installation d\'aides techniques (barres, rehausseur WC)',
    'Aide ménagère si nécessaire',
    'Livraison de repas si autonomie réduite',
    'Téléalarme si isolement',
    'Aide à la toilette/habillage si ADL < 6',
    'Transport médical pour les RDV',
    'Coordination avec le médecin traitant',
    'Information de l\'entourage (famille, voisins)',
    'Plan d\'urgence en cas de problème'
  ]},
  { id: 'cs-4', titre: 'Suivi post-hospitalisation', items: [
    'Consultation médecin traitant dans les 7 jours',
    'Bilan biologique à J15 (NFS, rénal, hépatique)',
    'Réévaluation des médicaments à 1 mois',
    'Évaluation fonctionnelle (ADL/IADL) à 1 mois',
    'Évaluation nutritionnelle (MNA) à 1 mois',
    'Bilan cognitif si confusion post-op',
    'Rééducation si prescrite',
    'Prévention des ré-hospitalisations',
    'Communication avec l\'EHPAD si retour en établissement',
    'Dossier de soins transmis à l\'équipe de suivi'
  ]}
];

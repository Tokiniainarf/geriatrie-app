// Checklist de garde — Tout ce qu'il faut vérifier
const CHECKLIST_GARDE = [
  { id: 'chk-debut', titre: 'Début de garde (18h)', items: [
    'Vérifier le dossier de CHAQUE patient (ATCD, traitements, allergies)',
    'Connaître les directives anticipées (DNR/DNI) de chaque patient',
    'Vérifier les perfusions en cours et les débits',
    'Contrôler les constantes vitales de la soirée',
    'Vérifier les résultats biologiques en attente',
    'Vérifier le plan thérapeutique du médecin traitant',
    'Connaître le numéro du senior de garde',
    'Localiser le chariot d\'urgence et le défibrillateur',
    'Vérifier les stocks de médicaments d\'urgence',
    'Savoir où sont les lits disponibles (si transfert nécessaire)'
  ]},
  { id: 'chk-ronde', titre: 'Ronde de nuit (22h-6h)', items: [
    'Vérifier les patients les plus fragiles en premier',
    'Contrôler les perfusions et les drains',
    'Surveillance neurologique des confus (CAM)',
    'Surveillance douleur (ECPA si non communicant)',
    'Prévenir les escarres (changement position H2)',
    'Hydratation (proposer eau si patient éveillé)',
    'Vérifier les dispositifs de prévention chute (lits bas, alarmes)',
    'Noter les événements dans le dossier'
  ]},
  { id: 'chk-urgence', titre: 'Devant une urgence', items: [
    'CONSTANTES VITALES EN PREMIER (PA, FC, T°, SpO2, FR)',
    'Examen clinique rapide (ABCDE)',
    'ECG si douleur thoracique ou trouble du rythme',
    'Bilan biologique ciblé (NFS, iono, créatinine, glycémie)',
    'Oxygène si SpO2 < 92%',
    'Voie veineuse + soluté si nécessaire',
    'Appeler le senior si situation instable',
    'Documenter TOUS les actes et décisions'
  ]},
  { id: 'chk-fin', titre: 'Fin de garde (8h)', items: [
    'Transmission écrite ORALE à l\'équipe du matin',
    'Signaler les événements nocturnes (chute, confusion, douleur)',
    'Signaler les résultats biologiques reçus pendant la garde',
    'Signaler les patients instables ou en attente de résultat',
    'Compléter le dossier médical',
    'Signaler les médicaments administrés en urgence',
    'Faire le point sur les lits disponibles'
  ]}
];

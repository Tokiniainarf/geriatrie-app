// Pièges de l'examen EVC — Les erreurs qui coûtent des points
const PIEGES_EXAMEN_EVC = [
  { id: 'pee-1', piege: 'Oublier le contexte social', consequence: 'Le jury pense que vous ne voyez que la maladie, pas le patient', correction: 'Toujours citer: vit seul ? EHPAD ? Aide à domicile ? Isolement ?' },
  { id: 'pee-2', piege: 'Ne pas citer les échelles gériatriques', consequence: 'Vous paraissez manquer de rigueur scientifique', correction: 'Citer MMS, GDS, ADL, IADL, MNA, Tinetti quand le cas s\'y prête' },
  { id: 'pee-3', piege: 'Prescrire un AINS chez le sujet âgé', consequence: 'Perte de points automatique (Beers criteria)', correction: 'Paracétamol = réponse universelle. Jamais d\'AINS.' },
  { id: 'pee-4', piege: 'Confondre confusion et démence', consequence: 'Diagnostic erroné et prise en charge inadaptée', correction: 'Confusion = aiguë, fluctuante, réversible. Démence = chronique, progressive.' },
  { id: 'pee-5', piege: 'Ne pas réviser les médicaments', consequence: 'Vous passez à côté de la cause iatrogénique', correction: 'Toute chute/confusion/dénutrition = révision médicamenteuse systématique' },
  { id: 'pee-6', piege: 'Donner un neuroleptique à un DLB', consequence: 'DANGER: hypersensibilité → syndrome malin', correction: 'DLB = CI absolue neuroleptiques. Cholinestérasiques à la place.' },
  { id: 'pee-7', piege: 'Ne pas planifier la sortie', consequence: 'Le jury pense que vous ne maîtrisez pas le parcours de soins', correction: 'Toujours citer: domicile ? SSR ? EHPAD ? Suivi ? Aides ?' },
  { id: 'pee-8', piege: 'Lire ses notes mot à mot', consequence: 'Vous paraissez non préparé et peu convaincant', correction: 'Présenter de manière fluide, structurée, avec contact visuel' },
  { id: 'pee-9', piege: 'Ne pas argumenter ses hypothèses', consequence: 'Le jury pense que vous devinez au lieu de raisonner', correction: 'Pour chaque hypothèse: arguments POUR et CONTRE' },
  { id: 'pee-10', piege: 'Dépasser le temps imparti', consequence: 'Coupé par le jury = points perdus', correction: 'Entraînement chronométré. 15 min = 2 min lecture + 10 min exposé + 3 min questions' },
  { id: 'pee-11', piege: 'Citer trop de diagnostics différentiels', consequence: 'Vous paraissez indécis et dispersé', correction: '3 hypothèses maximum, hiérarchisées par probabilité' },
  { id: 'pee-12', piege: 'Ne pas connaître les seuils des scores', consequence: 'Vous perdez en crédibilité', correction: 'Apprendre par cœur: MMS < 24, GDS > 11, MNA < 17, Tinetti < 19, Braden < 14' },
  { id: 'pee-13', piege: 'Oublier la douleur chez le non-communicant', consequence: 'Patient souffrant non traité', correction: 'ECPA systématique si MMS < 10 ou non verbal' },
  { id: 'pee-14', piege: 'Ne pas mentionner les directives anticipées', consequence: 'Oubli éthique majeur', correction: 'Toujours vérifier: DNR ? Directive ? Personne de confiance ?' },
  { id: 'pee-15', piege: 'Prescrire une contention', consequence: 'La contention aggrave la confusion et les chutes', correction: 'Éviter systématiquement. Alternatives: présence, réorientation, traitement cause.' }
];

// Protocoles de réanimation gériatrique — Conduites à tenir
const PROTOCOLES_REANIMATION = [
  { id: 'pr-1', titre: 'Arrêt cardiaque chez le sujet âgé', age: '> 75 ans',
    considerations: 'Pronostic plus mauvais que chez l\'adulte jeune. Comorbidités fréquentes. Récupération neurologique incertaine. Réanimation prolongée moins bénéfique.',
    conduite: '1. RCP standard (30:2). 2. Adrénaline 1mg IV q3-5min. 3. Défibrillation si FV/TV. 4. Arrêter si: pas de rythme organisé après 20 min de RCP optimale, comorbidités sévères, âge > 85 ans avec comorbidités.',
    ethique: 'Respecter les directives anticipées. Si DNR (Do Not Resuscitate) documenté → ne pas réanimer. En cas de doute → réanimer et discuter après.' },
  { id: 'pr-2', titre: 'Décision de limitation/arrêt des thérapeutiques actives', age: 'Tout âge',
    considerations: 'Loi Claeys-Leonetti 2016. Obstination déraisonnable interdite. Sédation profonde et continue autorisée.',
    conduite: '1. Réunion pluridisciplinaire (médecin + infirmier + cadre). 2. Avis d\'un 2ème médecin. 3. Information du patient (si capable) ou de la personne de confiance. 4. Décision collégiale documentée. 5. Sédation si souffrance réfractaire.',
    ethique: 'La sédation n\'est pas l\'euthanasie. L\'intention est de soulager, pas de tuer. La mort est une conséquence acceptée mais non recherchée.' },
  { id: 'pr-3', titre: 'Transfert en réanimation — critères gériatriques', age: '> 75 ans',
    considerations: 'Le score SOFA prédictif. L\'âge seul n\'est pas un critère d\'exclusion. L\'autonomie pré-morbide est le meilleur prédicteur.',
    conduite: '1. Évaluer l\'autonomie pré-morbide (ADL). 2. Score SOFA. 3. Comorbidités (Charlson). 4. Directives anticipées. 5. Si ADL ≥ 4 et Charlson < 4 → transfert justifié. 6. Si ADL < 2 ou Charlson ≥ 6 → discussion éthique.',
    ethique: 'Ne pas transférer systématiquement. Ne pas exclure systématiquement. L\'objectif est la qualité de vie, pas la survie à tout prix.' },
  { id: 'pr-4', titre: 'Nutrition artificielle en fin de vie', age: 'Tout âge',
    considerations: 'La nutrition artificielle n\'améliore pas la qualité de vie ni la survie dans la démence avancée. Elle peut aggraver les symptômes (œdèmes, ascite, dyspnée).',
    conduite: '1. Si démence avancée (GDS 7): ne pas instaurer de nutrition artificielle. 2. Si patient conscient et refus: respecter le choix. 3. Si décision d\'arrêt: informer la famille, soins de bouche, hydratation cutanée.',
    ethique: 'L\'arrêt de la nutrition artificielle n\'est pas un acte d\'euthanasie. C\'est l\'arrêt d\'un traitement devenu inutile ou nuisible.' }
];

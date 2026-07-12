/* Fiches strictement reliées à une publication HAS. */
const PROTOCOLES_HAS_OFFICIELS = [
  {
    id: 'has-off-chutes', icon: '🚶', category: 'Chutes', date: '2009',
    title: 'Chutes répétées chez la personne âgée',
    scope: 'Personne de plus de 65 ans ayant fait au moins 2 chutes en 12 mois.',
    steps: [
      'Rechercher d’abord les signes de gravité vitale, traumatique et fonctionnelle.',
      'Rechercher sans s’arrêter au premier facteur identifié les facteurs prédisposants, précipitants et environnementaux.',
      'Orienter les examens complémentaires par la clinique ; ne pas demander d’imagerie cérébrale systématique.',
      'Construire une intervention multifactorielle : ordonnance, facteurs modifiables, chaussage, activité physique, aides techniques et environnement.',
      'Réévaluer à distance, notamment la peur de chuter, la restriction d’activité et le syndrome post-chute.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_793371/fr/evaluation-et-prise-en-charge-des-personnes-agees-faisant-des-chutes-repetees'
  },
  {
    id: 'has-off-confusion', icon: '🧠', category: 'Neurocognition', date: '2009',
    title: 'Confusion aiguë avec agitation',
    scope: 'Prise en charge initiale, avec ou sans démence connue ; hors confusion postopératoire.',
    steps: [
      'Évoquer une confusion devant tout changement comportemental rapide ou inversion récente du rythme veille-sommeil.',
      'Rechercher rapidement une cause, souvent multifactorielle, en incluant systématiquement les médicaments.',
      'Commencer par les mesures non médicamenteuses et traiter la cause.',
      'Ne pas prescrire systématiquement un traitement symptomatique.',
      'Si un médicament devient indispensable pour un danger, une souffrance sévère ou un soin impossible, limiter la durée et réévaluer fréquemment.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_819557/fr/confusion-aigue-chez-la-personne-agee-prise-en-charge-initiale-de-l-agitation'
  },
  {
    id: 'has-off-denutrition-diagnostic', icon: '⚖️', category: 'Nutrition', date: '2021',
    title: 'Diagnostic de la dénutrition après 70 ans',
    scope: 'Personnes âgées de 70 ans ou plus.',
    steps: [
      'Associer au moins un critère phénotypique et un critère étiologique pour poser le diagnostic.',
      'Ne pas utiliser l’albuminémie comme critère diagnostique : elle participe à l’évaluation de la sévérité.',
      'Ne pas exclure une dénutrition en présence d’un IMC normal ou élevé.',
      'Mesurer le poids à chaque consultation ou hospitalisation et le tracer dans le dossier.',
      'Après le diagnostic, évaluer la sévérité selon la perte de poids, l’IMC ou l’albuminémie.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/p_3165944/fr/diagnostic-de-la-denutrition-chez-la-personne-de-70-ans-et-plus'
  },
  {
    id: 'has-off-denutrition-prise-en-charge', icon: '🥣', category: 'Nutrition', date: '2007-2008',
    title: 'Prise en charge nutritionnelle de la personne âgée',
    scope: 'Personne âgée dénutrie ou à risque de dénutrition.',
    steps: [
      'Repérer les situations à risque, estimer les apports, mesurer le poids de façon répétée et calculer l’IMC.',
      'Privilégier la voie orale : conseils, aide aux repas, alimentation enrichie et compléments si indiqués.',
      'Adapter l’intensité et le délai de réévaluation au statut nutritionnel et aux apports spontanés.',
      'Envisager la nutrition entérale si la voie orale est impossible ou insuffisante.',
      'Réévaluer poids, statut nutritionnel, tolérance, observance, pathologie causale et ingesta.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_546549/fr/strategie-de-prise-en-charge-en-cas-de-denutrition-proteino-energetique-chez-la-personne-agee'
  },
  {
    id: 'has-off-prescription', icon: '💊', category: 'Médicaments', date: '2014',
    title: 'Sécuriser les prescriptions chez la personne âgée',
    scope: 'Prévention des événements indésirables médicamenteux en ville et à l’hôpital.',
    steps: [
      'Repérer les patients et les situations à risque d’événement indésirable médicamenteux.',
      'Établir la liste réelle des médicaments pris et la confronter aux maladies hiérarchisées.',
      'Devant tout nouveau symptôme, appliquer le réflexe iatrogénique.',
      'Renforcer la surveillance, l’information du patient et la coordination entre prescripteurs.',
      'Sécuriser particulièrement les transitions et la sortie d’hospitalisation.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_1771468/fr/comment-ameliorer-la-qualite-et-la-securite-des-prescriptions-de-medicaments-chez-la-personne-agee'
  },
  {
    id: 'has-off-dependance-iatrogene', icon: '🏥', category: 'Hospitalisation', date: '2017',
    title: 'Prévenir la dépendance iatrogène à l’hôpital',
    scope: 'Services hospitaliers recevant des personnes âgées de 70 ans ou plus.',
    steps: [
      'Dépister, prévenir, suivre et traiter le syndrome d’immobilisation.',
      'Dépister et prendre en charge confusion aiguë, dénutrition et chutes.',
      'Prévenir l’incontinence urinaire de novo et les événements indésirables médicamenteux.',
      'Adapter l’organisation du service et faciliter le recours à l’expertise gériatrique.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_2801190/fr/prevenir-la-dependance-iatrogene-liee-a-l-hospitalisation-chez-les-personnes-agees'
  },
  {
    id: 'has-off-escarres', icon: '🩹', category: 'Peau', date: '2001-2006',
    title: 'Prévention et traitement des escarres',
    scope: 'Adulte et personne âgée ; recommandation historique toujours accessible sur la HAS.',
    steps: [
      'Décrire et évaluer le stade de l’escarre.',
      'Identifier les facteurs de risque et utiliser une échelle comme aide, sans remplacer le jugement clinique.',
      'Mettre en œuvre les mesures générales de prévention et choisir le support adapté.',
      'Définir le traitement local et global, puis réévaluer son efficacité.',
      'Informer et former le patient, la famille et les soignants.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_271996/fr/prevention-et-traitement-des-escarres-de-l-adulte-et-du-sujet-age'
  },
  {
    id: 'has-off-douleur-communication', icon: '🫶', category: 'Douleur', date: '2000-2006',
    title: 'Douleur avec troubles de la communication verbale',
    scope: 'Personne âgée ne pouvant pas s’autoévaluer verbalement, à domicile ou en établissement.',
    steps: [
      'Considérer qu’une absence de verbalisation n’est pas une absence de douleur.',
      'Rechercher les manifestations comportementales et somatiques avec une évaluation adaptée.',
      'Intégrer l’évaluation dans une prise en charge globale préservant autonomie et qualité de vie.',
      'Traiter puis réévaluer systématiquement efficacité et tolérance.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_272123/fr/evaluation-et-prise-en-charge-therapeutique-de-la-douleur-chez-les-personnes-agees-ayant-des-troubles-de-la-communication-verbale'
  }
];


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
  },
  {
    id: 'has-off-atb-principes', icon: '🧪', category: 'Antibiothérapie', date: '2021-2025',
    title: 'Choix et durées d’antibiothérapies — principes (infections courantes)',
    scope: 'Professionnels de premier recours, dont gériatres : infections bactériennes courantes de ville. Série HAS/SPILF/GPIP mise à jour (26 fiches mémo).',
    steps: [
      'Réduire la durée d’antibiothérapie au minimum nécessaire pour limiter l’antibiorésistance.',
      'Privilégier le choix de première intention et la durée courte homogénéisés nationalement (fiches mémo).',
      'Adapter dose, voie et durée au patient (âge, DFG, comorbidités, fragilité) et au protocole local.',
      'Consulter la fiche synthèse et la fiche par infection avant de prescrire.',
      'Les gériatres sont explicitement parmi les professionnels concernés par cette série HAS.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/p_3278764/fr/choix-et-durees-d-antibiotherapies-preconisees-dans-les-infections-bacteriennes-courantes'
  },
  {
    id: 'has-off-atb-pac-adulte', icon: '🫁', category: 'Antibiothérapie', date: '2025',
    title: 'Antibiothérapie — pneumonie aiguë communautaire adulte (ambulatoire)',
    scope: 'PAC de l’adulte en ambulatoire, sans signe de gravité. Fiche mémo HAS/SPILF (09 janv. 2025, maj 13 mai 2025).',
    steps: [
      'Traitement probabiliste ; étiologie la plus fréquente : S. pneumoniae (sujets souvent > 40 ans).',
      'En ambulatoire : examens microbiologiques non requis. Imagerie thoracique recommandée idéalement sous 24 h, sans retarder l’antibiotique ; normalité → reconsidérer le diagnostic.',
      'Discuter l’hospitalisation si mauvaise tolérance (hypothermie < 36 °C ou > 40 °C, hypotension, FR ≥ 30/min, confusion), comorbidités (IC, AVC, IRC, hépatopathie, BPCO, hospitalisation récente, ATCD de pneumonie) ou facteurs médico-sociaux (personne âgée isolée, inobservance).',
      'Sans comorbidité : 1re intention amoxicilline 1 g × 3/j ; si allergie pénicilline documentée ou rupture : pristinamycine 1 g × 3/j.',
      'Suspicion atypiques ou échec à 72 h : clarithromycine 500 mg × 2/j, ou spiramycine 3 MUI × 3/j, ou azithromycine 500 mg J1 puis 250 mg/j ; si CI macrolides : pristinamycine ou doxycycline 200 mg/j.',
      'Avec comorbidités, ATB le mois précédent (hors furanes/fosfo/pivmecillinam) ou hospitalisation < 6 mois : amox/acide clavulanique 1 g/125 mg × 3/j ; allergie pénicilline : ceftriaxone 1 g/j IM/IV/SC ou céfotaxime 1 g × 3/j ; dernier recours FQ antipneumococcique (lévofloxacine 500 mg/j) si aucune autre option (ANSM : EI parfois graves).',
      'Durée max 7 j si non compliquée ; arrêt possible à 5 j voire 3 j si stabilité clinique vérifiée (apyrexie, PAS ≥ 90, FC ≤ 100, FR ≤ 24, SpO2 ≥ 90 % air) et information patient.',
      'Réévaluer statut vaccinal (pneumocoque, grippe, VRS, COVID) et sevrage tabagique.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/p_3575597/fr/choix-et-durees-d-antibiotherapies-pneumonie-aigue-communautaire-de-l-adulte-en-ambulatoire'
  },
  {
    id: 'has-off-atb-cystite', icon: '🚽', category: 'Antibiothérapie', date: '2021-2025',
    title: 'Antibiothérapie — cystite aiguë de la femme (simple / complication / récidive)',
    scope: 'Cystite aiguë simple, à risque de complication ou récidivante de la femme. Fiche mémo HAS/SPILF (2021, maj 2025). Note gériatrique : âge > 75 ans, ou > 65 ans avec ≥ 3 critères de Fried = facteur de risque de complication.',
    steps: [
      'Facteurs de risque de complication : grossesse, anomalie de l’arbre urinaire, DFG < 30 ml/min, immunodépression grave, âge > 75 ans, ou > 65 ans avec ≥ 3 critères de Fried. Le diabète n’est pas un FDR de complication dans cette fiche.',
      'Cystite simple : diagnostic clinique + BU (leucocytes/nitrites) ; ne pas faire d’ECBU d’emblée.',
      'Cystite simple — 1re intention : fosfomycine-trométamol 3 g en prise unique ; 2e intention : pivmécillinam 400 mg × 2/j pendant 3 j. Autres ATB non indiqués. ECBU seulement si évolution défavorable ou récidive précoce.',
      'Cystite à risque de complication : ECBU ; ne pas traiter une colonisation (ECBU + sans symptômes), sauf grossesse ou chirurgie urologique programmée.',
      'Complication — traitement différé selon antibiogramme (préférence) : amoxicilline 1 g × 3/j 7 j, puis pivmécillinam 400 mg × 2/j 7 j, puis nitrofurantoïne 100 mg × 3/j 7 j (CI si DFG < 45 ou traitements itératifs).',
      'Complication — traitement non différable probabiliste : 1re nitrofurantoïne 7 j (mêmes CI), 2e fosfomycine 3 g à J1, J3 et J5.',
      'Récidivante (≥ 4 épisodes/12 mois) : traitement d’épisode = celui d’une cystite ; mesures non ATB (hydratation, mictions, transit, arrêt spermicides ; canneberge 36 mg/j PAC possible ; œstrogènes locaux post-ménopause après avis gynéco).',
      'Antibioprophylaxie si ≥ 1 épisode/mois : ECBU initial ; 1re intention fosfo 3 g/semaine max ou triméthoprime 150 mg/j ; 2e cotrimoxazole 400/80 ; nitrofurantoïne CI en prophylaxie ; éviter bêta-lactamines ; ne pas utiliser les FQ en prévention (ANSM).'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_2722827/fr/choix-et-durees-d-antibiotherapies-cystite-aigue-simple-a-risque-de-complication-ou-recidivante-de-la-femme'
  },
  {
    id: 'has-off-atb-eabpco', icon: '🌬️', category: 'Antibiothérapie', date: '2024-2025',
    title: 'Antibiothérapie — exacerbations aiguës de BPCO (EABPCO)',
    scope: 'Exacerbation aiguë de BPCO. Fiche mémo HAS/SPILF/SPLF (15 juil. 2024, maj 09 janv. 2025). Âge > 65 ans = facteur de risque d’échec/complication listé par la HAS.',
    steps: [
      'EABPCO : majoration de dyspnée et/ou toux/expectorations > 24 h (souvent tachypnée/tachycardie). Étiologies souvent virales ; différentiel : EP, PAC, OAP.',
      'Antibiothérapie non systématique. La purulence seule ne suffit pas. Indiquer ATB si ↑ volume et purulence des expectorations ≥ 48 h ; sinon réévaluer à 48–72 h. Si BPCO très sévère (VEMS < 30 %) avec expectoration importante purulente : ATB d’emblée.',
      'Sans FDR d’échec : amoxicilline 1 g × 3/j pendant 5 j ; allergie pénicilline : pristinamycine 1 g × 3/j 4 j ; alternatives rupture : macrolides ou doxycycline 200 mg/j.',
      'Avec FDR d’échec/complication (≥ 2 exacerbations/an ou 1 hospitalisation, VEMS < 50 %, cardio, cures ATB répétées, âge > 65 ans, désaturation/O2 domicile) : amox/acide clavulanique 1 g/125 mg × 3/j 5 j ; allergie : cotrimoxazole 800/160 × 2/j ou ceftriaxone 1–2 g/j IV/SC ; dernier recours lévofloxacine 500 mg/j (ANSM) ; colonisation Pseudomonas connue : pas de FQ, avis spécialisé.',
      'ECBC non indiqué en routine. Réévaluation 48–72 h. Désaturation ou O2 domicile → adresser en structure de soins. Vaccins (pneumocoque, grippe, COVID, VRS ≥ 65 ans), sevrage tabac, techniques d’inhalation, réadaptation respiratoire si hospitalisation.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/p_3528903/fr/choix-et-durees-d-antibiotherapie-dans-les-exacerbations-aigues-de-bronchopneumopathie-chronique-obstructive-eabpco'
  },
  {
    id: 'has-off-atb-pyelo', icon: '🫘', category: 'Antibiothérapie', date: '2021-2025',
    title: 'Antibiothérapie — pyélonéphrite aiguë de la femme (repères HAS)',
    scope: 'Pyélonéphrite aiguë de la femme. Fiche mémo HAS/SPILF (série infections courantes). Toujours vérifier la fiche HAS complète et le protocole local (formes graves, homme, sonde).',
    steps: [
      'ECBU systématique quel que soit le résultat de la bandelette (mention HAS 2025 sur la fiche pyélo).',
      'PNA simple sans gravité — 1re intention (sans FQ dans les 6 mois) : fluoroquinolone orale (ciprofloxacine 500 mg × 2/j ou lévofloxacine 500 mg/j) ; 2e intention si FQ récente : C3G parentérale (ceftriaxone 1 g/j ; 2 g si gravité ou IMC > 30).',
      'Adaptation secondaire selon antibiogramme ; durées et relais selon la fiche HAS (souvent 7–10 j selon molécule).',
      'PNA à risque de complication sans gravité : au moins un FDR de complication — se référer à la fiche HAS et discuter hospitalisation selon clinique.',
      'Ne pas se substituer à la fiche mémo complète pour les posologies détaillées et les BLSE (renvoi SPILF 2018 dans la fiche).'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_2722914/fr/choix-et-durees-d-antibiotherapies-pyelonephrite-aigue-de-la-femme'
  },
  {
    id: 'has-off-psychotropes', icon: '🧠', category: 'Psychotropes', date: '2007',
    title: 'Améliorer la prescription des psychotropes chez la personne âgée',
    scope: 'Programme HAS : anxiolytiques, hypnotiques, neuroleptiques, antidépresseurs chez le sujet âgé.',
    steps: [
      'Constat HAS : consommation excessive de psychotropes chez les > 70 ans (souvent BZD prolongées) ; femmes plus exposées.',
      'Problèmes typiques : surprescription/prolongation des BZD (sommeil, anxiété) alors que risques > bénéfices ; surprescription de neuroleptiques dans les troubles du comportement (ex. Alzheimer) ; sous-prescription d’antidépresseurs si vraie dépression.',
      'Cibler quatre situations de prescription : troubles du sommeil, dépression, signes anxieux, troubles du comportement.',
      'Actions phares évoquées : optimisation de la prescription en ville (lien médecins/pharmaciens), programme dépression du sujet âgé (EHPAD/ambulatoire), bientraitance et troubles du comportement en établissement.',
      'S’appuyer sur les recommandations associées (arrêt des BZD, confusion, Alzheimer/TCP) plutôt que sur une sédation de confort prolongée.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_601523/fr/ameliorer-la-prescription-des-psychotropes-chez-la-personne-agee'
  },
  {
    id: 'has-off-bzd-arret', icon: '💊', category: 'Psychotropes', date: '2007-2008',
    title: 'Modalités d’arrêt des benzodiazépines chez le patient âgé',
    scope: 'Patient âgé sous benzodiazépine ou apparenté au-delà d’une prescription courte. Recommandation HAS associée au programme psychotropes.',
    steps: [
      'Réévaluer systématiquement l’indication au-delà de 30 jours de traitement (insomnie/anxiété).',
      'Informer sur les risques gériatriques : chutes, confusion, sédation, dépendance.',
      'Proposer une stratégie d’arrêt progressive plutôt qu’un sevrage brutal (sauf situation particulière).',
      'Associer mesures non médicamenteuses (hygiène de sommeil, prise en charge de l’anxiété, activité, environnement).',
      'Coordonner médecin, pharmacien et entourage ; réévaluer bénéfices/risques à chaque renouvellement.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_601509/fr/modalites-d-arret-des-benzodiazepines-et-medicaments-apparentes-chez-le-patient-age'
  },
  {
    id: 'has-off-alzheimer-tcp', icon: '🧓', category: 'Neurocognition', date: '2009-2012',
    title: 'Alzheimer — troubles du comportement perturbateurs (limiter les psychotropes)',
    scope: 'Maladie d’Alzheimer et apparentées avec troubles du comportement jugés perturbateurs (cris, agitation, agressivité, déambulation, etc.).',
    steps: [
      'Origine multifactorielle : environnement/aidants, facteurs liés à la personne/maladie, causes somatiques intercurrentes à rechercher et traiter.',
      'Première intention : techniques de soins et communication adaptées (non médicamenteux) pour éviter le recours aux psychotropes.',
      'Les psychotropes n’ont pas d’effet préventif sur la survenue des TCP.',
      'Ne pas prescrire en première intention un psychotrope (surtout neuroleptique) pour opposition, cris ou déambulation sans évaluation.',
      'Si psychotrope nécessaire après correction des causes et échec des techniques de soins : danger, souffrance majeure, altération du fonctionnement — toujours en synergie avec les soins, durée limitée, réévaluation régulière.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_819667/fr/maladie-d-alzheimer-et-maladies-apparentees-prise-en-charge-des-troubles-du-comportement-perturbateurs'
  },
  {
    id: 'has-off-psychotropes-confusion-alzheimer', icon: '⚠️', category: 'Psychotropes', date: '2009',
    title: 'Limiter les psychotropes : confusion agitée et Alzheimer/TCP',
    scope: 'Synthèse du communiqué HAS liant les deux RPC 2009 (confusion + TCP Alzheimer).',
    steps: [
      'Deux situations pourvoyeuses de sédation inutile ou délétère : confusion aiguë agitée et TCP de la maladie d’Alzheimer.',
      'Objectif commun : promouvoir les soins non médicamenteux et éviter prescriptions inappropriées, systématiques ou prolongées (sédatifs, neuroleptiques).',
      'Confusion : urgence étiologique ; arrêter médicaments responsables ; mesures non médicamenteuses d’abord ; si médicament indispensable, monothérapie courte (24–48 h), dose réduite, réévaluation avant chaque renouvellement.',
      'TCP Alzheimer : traiter d’abord causes écologiques et somatiques ; psychotropes seulement si techniques de soins insuffisantes et situation sévère.',
      'S’inscrit dans le programme HAS « Améliorer la prescription de psychotropes chez le sujet âgé » (Plan Alzheimer mesure 15).'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_819869/fr/limiter-la-prescription-de-psychotropes-chez-la-personne-agee-confuse-agitee-et-chez-le-patient-alzheimer-presentant-des-troubles-du-comportement-perturbateurs'
  },
  {
    id: 'has-off-osteoporose', icon: '🦴', category: 'Os & chutes', date: 'historique',
    title: 'Ostéoporose — repère HAS (parcours avec chutes)',
    scope: 'Articulation avec la fiche chutes répétées et la prise en charge de l’ostéoporose chez le sujet âgé. Vérifier la page HAS à jour et le protocole local (FRAX, densitométrie, traitements).',
    steps: [
      'Après chute ou fracture : évaluer le risque fracturaire et les facteurs d’ostéoporose (âge, corticothérapie, dénutrition, hypogonadisme, etc.).',
      'Mesures générales : calcium/vitamine D selon carence, activité physique adaptée, prévention des chutes, revue des psychotropes et hypotenseurs.',
      'Examens : densitométrie selon indications ; biologie ciblée (calcémie, 25-OH-D, fonction rénale) avant traitement anti-ostéoporotique.',
      'Traitements spécifiques (bisphosphonates, etc.) : indiqués selon fracture/densité et espérance de vie ; vérifier CI (DFG, œsophagite) et observance.',
      'Toujours relier au bilan multifactoriel des chutes (HAS chutes répétées).'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_793371/fr/evaluation-et-prise-en-charge-des-personnes-agees-faisant-des-chutes-repetees'
  },
  {
    id: 'has-off-ald-alzheimer', icon: '📋', category: 'Neurocognition', date: '2012',
    title: 'ALD 15 — Maladie d’Alzheimer et autres démences (guide actes)',
    scope: 'Guide médecin / actes et prestations ALD 15 publié par la HAS (repère organisationnel, pas une posologie).',
    steps: [
      'Cadre ALD pour le parcours diagnostic et de suivi des démences.',
      'Complète les RPC diagnostic/prise en charge Alzheimer et les RPC troubles du comportement.',
      'Utiliser comme repère de coordination (actes, prestations) en croisant avec le protocole local et le médecin traitant.',
      'Ouvrir le document HAS pour la liste d’actes à jour.'
    ],
    sourceUrl: 'https://www.has-sante.fr/jcms/c_820000/fr/ald-n-15-maladie-d-alzheimer-et-autres-demences'
  }
];


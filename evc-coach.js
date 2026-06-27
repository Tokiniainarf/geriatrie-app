// ═══════════════════════════════════════════════════════════════
//  Coach EVC Gériatrie — Guide complet de préparation à l'examen
//  Épreuve de Validation de Compétences (DESC Gériatrie)
// ═══════════════════════════════════════════════════════════════

const EVC_COACH = {
  format: {
    titre: 'Épreuve de Validation de Compétences (EVC) — Gériatrie',
    diplome: 'DESC (Diplôme d\'Études Spécialisées Complémentaires) ou équivalent filière gériatrie',
    objectif: 'Démontrer la capacité à mener une consultation gériatrique complète : raisonnement clinique, synthèse multidimensionnelle, décisions thérapeutiques adaptées au sujet âgé, communication avec le patient et l\'entourage.',
    dureeTotale: 'Environ 30 à 45 minutes selon les centres (vérifier convocation)',
    structure: [
      {
        phase: 'Préparation du dossier',
        duree: '5 à 10 minutes (hors salle, en couloir ou salle d\'attente)',
        contenu: 'Lecture silencieuse du dossier patient : anamnèse, traitements, résultats biologiques, échelles, courriers. Aucune question au jury pendant cette phase. Prendre des notes sur papier fourni (souvent interdit : téléphone, livres).'
      },
      {
        phase: 'Entretien / consultation simulée',
        duree: '15 à 25 minutes',
        contenu: 'Face à un patient standardisé (comédien formé) ou parfois vidéo + acteur. Vous menez l\'entretien comme en consultation réelle : accueil, anamnèse ciblée, examen si prévu, explication au patient. Le jury observe en direct ou via vidéo sans intervenir.'
      },
      {
        phase: 'Restitution orale au jury',
        duree: '10 à 20 minutes',
        contenu: 'Synthèse structurée : problèmes identifiés, hypothèses diagnostiques, examens complémentaires, plan thérapeutique, éléments de prévention, projet de soins. Questions du jury (pièges, approfondissement, éthique, iatrogénie).'
      }
    ],
    jury: {
      composition: '3 à 5 examinateurs : gériatre senior (président), souvent un autre spécialiste (médecine interne, neurologie), parfois IDE ou cadre EHPAD, représentant universitaire.',
      role: 'Évaluer les compétences cliniques, la méthode, la sécurité du patient, la communication et l\'adaptation au modèle gériatrique (personne âgée polymorbide, fragilité, autonomie).',
      attitude: 'Neutre, parfois silencieux pendant la restitution. Les questions visent à tester la profondeur du raisonnement, pas à humilier. Reformuler si vous vous égarez.',
      piegesFrequents: [
        '« Et si le patient refuse l\'hospitalisation ? »',
        '« Que faites-vous si la fille contredit le patient ? »',
        '« Justifiez chaque médicament »',
        '« Quel est votre diagnostic principal en une phrase ? »',
        '« Où placez-vous la dénutrition dans votre priorisation ? »'
      ]
    },
    typesDeCas: [
      'Dossier intégrateur type EGM (évaluation gériatrique multidimensionnelle)',
      'Chute / syncope avec iatrogénie',
      'Troubles cognitifs / démence — bilan et annonce',
      'Confusion aiguë / delirium',
      'Dénutrition / sarcopénie',
      'Polymédication et déprescription',
      'Fin de vie / soins palliatifs / directives anticipées',
      'Incontinence / troubles urinaires',
      'Dépression du sujet âgé',
      'Entrée en EHPAD / placement / aidants'
    ],
    materielAutorise: 'Stylo, papier fourni sur place. Convocation précise souvent : pas de téléphone, pas de Vidal, pas de notes personnelles en salle.',
    noteEliminatoire: 'Variable selon centre ; en pratique un raisonnement dangereux (prescription inappropriée majeure, omission de diagnostic aigu vital) peut entraîner échec même si le reste est correct.'
  },

  preparation: [
    {
      periode: 'Mois 1 — Fondations et cartographie du programme',
      semaines: 'S1-S4',
      objectifs: [
        'Lire une fois le manuel de référence (Boddaert / CNEG) en surlignant ITEMS EVC',
        'Construire une mind-map des 20 chapitres : vieillissement, EGM, chutes, cognition, nutrition, iatrogénie, éthique, etc.',
        'Mémoriser 15 échelles indispensables (MMS, MoCa, GDS-15, MNA, Katz, Lawton, TUG, Tinetti, Braden, CAM, EVA, NRS, Fried, GIR, ECOG)',
        'Faire 2 annales complètes en mode « découverte » sans chrono'
      ],
      ressources: [
        'Manuel Boddaert 5e éd. (Elsevier Masson)',
        'RESSOURCES_EVC dans GeriatrieApp',
        'Recommandations HAS : personnes âgées, chutes, dénutrition, médicaments',
        'Critères Beers 2023 + STOPP/START v2 (fiches une page)',
        'Loi Leonetti + Claeys-Leonetti (résumé 1 page)'
      ],
      methodeRevision: 'Méthode active : pour chaque chapitre, rédiger 5 questions type jury + réponses en 10 lignes. Pas de relecture passive > 45 min d\'affilée.',
      chargeHoraire: '10-12 h/semaine (dont 3 h annales, 2 h échelles/scores, reste cours)'
    },
    {
      periode: 'Mois 2 — Entraînement cas et oral',
      semaines: 'S5-S8',
      objectifs: [
        '30 cas cliniques chronométrés (situations-evc, annales-expanded)',
        '10 restitutions orales enregistrées (téléphone) — réécoute critique',
        '2 simulations complètes avec collègue ou senior (jouer le jury)',
        'Spécial thèmes : iatrogénie (10 cas), cognition (8 cas), fin de vie (5 cas)'
      ],
      ressources: [
        'SITUATIONS_EVC + quiz mode timer dans GeriatrieApp',
        'Groupe WhatsApp / collège de internes DESC',
        'Séances de préparation organisées par le CNEG ou l\'université',
        'Fiches flashcards-expanded chapitres A'
      ],
      methodeRevision: 'Cycle 90 min : 2 min lecture dossier → 15 min réponse écrite structurée → correction grille → 10 min oral à voix haute. Noter les oublis récurrents dans un « journal d\'erreurs ».',
      chargeHoraire: '12-15 h/semaine (50 % cas pratiques, 30 % oral, 20 % synthèse)'
    },
    {
      periode: 'Mois 3 — Affûtage et consolidation',
      semaines: 'S9-S12',
      objectifs: [
        'Réviser uniquement le journal d\'erreurs + fiches une page',
        '5 simulations examen blanc conditions réelles (tenue, stress, jury)',
        'Revoir toutes les échelles : quand les utiliser, seuils, limites',
        'Dernier passage HAS / lois / éthique',
        'Repos planifié J-3 à J-1 (pas de nuit blanche)'
      ],
      ressources: [
        'Fiches-garde.js pour synthèses de garde → transférables à l\'oral',
        'pharmaco-geriatrie.js pour déprescription',
        'Annales des 3 dernières sessions si disponibles',
        'Coach EVC (ce fichier) — techniques et phrases clés'
      ],
      methodeRevision: 'Interdiction d\'apprendre un nouveau chapitre après J-14. Uniquement réactivation et automatisation des schémas ABCDE / EGM.',
      chargeHoraire: '8-10 h/semaine décroissant ; J-7 : 5 h max ; J-2 : 2 h légère'
    }
  ],

  techniques: [
    {
      id: 'lecture-cas-2min',
      titre: 'Lecture du dossier en 2 minutes (méthode SCAN)',
      etapes: [
        { lettre: 'S', action: 'Situation — Âge, sexe, lieu de vie, motif de consultation, qui adresse (MT, famille, urgences)' },
        { lettre: 'C', action: 'Comorbidités & Contexte — ATCD, autonomie (GIR, Katz), cognitif (MMS si présent), social (aidant, isolement)' },
        { lettre: 'A', action: 'Alertes — Valeurs biologiques hors normes, chute récente, perte de poids, confusion, douleur non traitée' },
        { lettre: 'N', action: 'Nom des médicaments — Compter les lignes, repérer BZD, anticholinergiques, opioïdes, polypharmacie > 5' }
      ],
      apres2min: 'Souligner 3 problèmes principaux (PPP) avant d\'entrer. Écrire en marge : « diagnostic crainte », « examens manquants », « iatrogénie ? »',
      erreurAEviter: 'Relire tout le dossier ligne par ligne pendant 10 min — vous n\'aurez plus de temps pour l\'oral.'
    },
    {
      id: 'abcde-reponse',
      titre: 'Structurer la restitution — méthode ABCDE gériatrique',
      description: 'Adapter l\'ABCDE urgentiste à la synthèse gériatrique orale (10-15 min max).',
      structure: [
        { lettre: 'A', titre: 'Annonce / Accroche', contenu: '« Monsieur/Madame X, 82 ans, vit à domicile avec son épouse, adressé pour… Je retiens trois problèmes prioritaires : … »' },
        { lettre: 'B', titre: 'Bilan / Données', contenu: 'Synthèse anamnèse + examen + données dossier. Mentionner échelles déjà faites et leur interprétation.' },
        { lettre: 'C', titre: 'Causes / Catégories', contenu: 'Diagnostics différentiels hiérarchisés. Distinguer aigu vs chronique, organique vs iatrogène vs psycho-social.' },
        { lettre: 'D', titre: 'Décisions / Demarche', contenu: 'Examens complémentaires justifiés (pas de catalogue). Traitements : débuter, arrêter, adapter doses. Objectifs réalistes.' },
        { lettre: 'E', titre: 'Éducation / Environnement / Éthique', contenu: 'Plan de soins, rééducation, aide à domicile, prévention chutes, discussion famille, directives anticipées si pertinent.' }
      ],
      varianteEGM: 'Pour dossier intégrateur : parcourir les 5 dimensions IADL, cognition, humeur, nutrition, mobilité/chutes avant de conclure.',
      dureeCible: '2 min A-B | 4 min C-D | 3 min E + marge questions'
    },
    {
      id: 'gestion-temps',
      titre: 'Gestion du temps',
      regles: [
        'Préparation dossier : timer 8 min max — si pas fini, noter « à clarifier à l\'entretien »',
        'Entretien patient : laisser parler 30 % du temps ; questions fermées pour orienter',
        'Restitution : annoncer le plan en 30 secondes (« je vais vous présenter les problèmes, le diagnostic, le plan »)',
        'Si jury coupe : « Je résume le plan thérapeutique en une phrase… »',
        'Ne pas s\'étendre sur l\'anamnèse déjà dans le dossier — valeur ajoutée uniquement'
      ],
      repartition: { preparation: '15%', entretien: '40%', restitution: '35%', questionsJury: '10%' },
      signalAlarme: 'Si vous parlez depuis 5 min sans structure, stop : « Problème 2 : … »'
    },
    {
      id: 'gestion-stress',
      titre: 'Gestion du stress et de l\'oral',
      avantExamen: [
        'Sommeil 7 h J-1, café modéré, repas léger 2 h avant',
        'Arriver 20 min en avance — repérer salles, toilettes',
        'Respiration 4-7-8 x 3 avant d\'entrer',
        'Mantra : « Le jury veut que je réussisse ; je montre ma méthode, pas la perfection »'
      ],
      pendant: [
        'Pause 2 secondes avant chaque réponse longue',
        'Si trou de mémoire : « Je reviens à mon problème principal… »',
        'Accepter « je ne sais pas précisément, mais je proposerais de… » plutôt qu\'inventer',
        'Contact visuel jury, voix posée, mains visibles (pas de poches)'
      ],
      apres: 'Ne pas débriefer négativement immédiatement ; noter 3 points forts et 3 axes pour la suite (autre session ou pratique)'
    },
    {
      id: 'entretien-patient',
      titre: 'Techniques d\'entretien avec patient standardisé',
      conseils: [
        'S\'adresser au patient, pas au jury',
        'Vérifier audition et compréhension (« est-ce que vous m\'entendez bien ? »)',
        'Une question à la fois ; reformuler ce qu\'il dit',
        'Demander consentement pour examen (« puis-je vous examiner ? »)',
        'Inclure l\'aidant si le cas le mentionne, avec accord du patient',
        'Clôturer : résumé simple pour le patient de ce que vous allez proposer'
      ]
    }
  ],

  commonErrors: [
    {
      rang: 1,
      erreur: 'Oublier l\'iatrogénie et la déprescription',
      consequence: 'Perte de 20-30 % des points sur cas polymédiqués ; image de « prescripteur non gériatre »',
      correction: 'Toujours une ligne « bilan médicamenteux : Beers/STOPP » et au moins un arrêt ou adaptation justifié'
    },
    {
      rang: 2,
      erreur: 'Catalogue d\'examens sans priorisation',
      consequence: 'Jury considère que vous ne savez pas raisonner en probabilités',
      correction: 'Maximum 5 examens en 1ère intention, chacun lié à une hypothèse (« TSH car tableau compatible dysthyroïdie »)'
    },
    {
      rang: 3,
      erreur: 'Ignorer la dimension sociale et l\'aidant',
      consequence: 'Non-conformité au modèle gériatrique holistique',
      correction: 'Systématiquement : lieu de vie, aidant principal, charge de l\'aidant, services (SSIAD, portage repas)'
    },
    {
      rang: 4,
      erreur: 'Confondre dépression et démence sans proposition de bilan',
      consequence: 'Erreur diagnostique majeure sur cas cognitif',
      correction: 'Toujours citer pseudodémence dépressive + MMS/MoCa + TSH/B12 + IRM si indication'
    },
    {
      rang: 5,
      erreur: 'Traiter la chute sans évaluer le risque de récidive',
      consequence: 'Prise en charge incomplète, note insuffisante prévention',
      correction: 'TUG ou Tinetti + facteurs intrinsèques/extrinsèques + vitamine D + adaptation domicile'
    },
    {
      rang: 6,
      erreur: 'Réponse trop jeune adulte (doses standard, objectifs curatifs agressifs)',
      consequence: 'Doute sur adaptation à la fragilité et au pronostic',
      correction: 'Mentionner temps de traitement, bénéfice/risk ratio, « objectifs de soins proportionnés »'
    },
    {
      rang: 7,
      erreur: 'Pas de problème priorisé — liste désordonnée de symptômes',
      consequence: 'Jury perd le fil ; pénalité méthode',
      correction: 'Annoncer 2-4 problèmes numérotés par gravité/urgence (ex : 1. Confusion aiguë, 2. Infection, 3. Iatrogénie)'
    },
    {
      rang: 8,
      erreur: 'Échelles citées sans interprétation',
      consequence: 'Points « récitation » sans compétence',
      correction: '« MMS 18/30 : déficit modéré, compatible avec le diagnostic de… »'
    },
    {
      rang: 9,
      erreur: 'Fin de vie : obstination ou abandon prématuré',
      consequence: 'Question éthique souvent éliminatoire si extrême',
      correction: 'Projet de soins partagé, loi Leonetti, sédation si douleur réfractaire, pas de nutrition artificielle systématique en phase terminale'
    },
    {
      rang: 10,
      erreur: 'Parler trop vite, trop long, sans écouter les questions du jury',
      consequence: 'Mauvaise communication = compétence transversale notée insuffisante',
      correction: 'Réponses en 3 parties : réponse courte, justification, nuance si temps'
    }
  ],

  scoring: {
    principes: 'Grille nationale ou locale souvent fondée sur les référentiels de compétences (consultation, raisonnement, prescription, communication, éthique). Notation sur 20 ou validation par seuils par domaine.',
    domaines: [
      { domaine: 'Analyse du dossier', poids: '15%', facile: 'Repérer les valeurs anormales et le motif', difficile: 'Synthèse EGM complète à partir de données incomplètes' },
      { domaine: 'Entretien / relation patient', poids: '20%', facile: 'Écoute, empathie, langage adapté', difficile: 'Gérer conflit famille-patient ou refus de soins' },
      { domaine: 'Raisonnement diagnostique', poids: '25%', facile: 'DDx principal évident (dénutrition, delirium)', difficile: 'Cas mixte cognition + iatrogénie + social' },
      { domaine: 'Stratégie thérapeutique', poids: '25%', facile: 'Proposition HAS (chutes, dénutrition)', difficile: 'Déprescription cascade avec surveillance' },
      { domaine: 'Communication au jury', poids: '15%', facile: 'Structure claire ABCDE', difficile: 'Réponses concises sous pression questions multiples' }
    ],
    pointsFaciles: [
      'Citer les échelles appropriées au contexte',
      'Nommer Beers/STOPP sur tout dossier avec > 5 médicaments',
      'Évoquer vitamine D et prévention chutes sur patient à mobilité réduite',
      'Mentionner directives anticipées / personne de confiance en fin de vie',
      'Reformuler le motif en une phrase en ouverture',
      'Proposer réévaluation à 1 mois après modification traitement',
      'Distinguer robuste / pré-fragile / fragile (Fried)',
      'Connaître seuils MNA (< 17 dénutrition) et GDS-15 (≥ 5 suspicion dépression)'
    ],
    pointsDifficiles: [
      'Arbitrage hospitalisation à domicile vs entrée en soins avec argumentation',
      'Déprescription séquentielle avec risques de sevrage (BZD, opioïdes)',
      'Annonce diagnostique démence avec plan d\'accompagnement',
      'Prise en charge delirium hyperactif sans contention',
      'Polymorbidité : priorisation quand tout est « urgent »',
      'Éthique : sédation profonde et continue — critères Claeys-Leonetti'
    ],
    seuilReussite: 'Généralement ≥ 10/20 ou validation de tous les domaines critiques (sécurité prescription, diagnostic aigu). Se renseigner auprès du coordinateur DESC.',
    feedback: 'Débriefing parfois immédiat ou par courrier sous 2-4 semaines. Utiliser pour la session suivante.'
  },

  timeline: [
    {
      jour: 'J-7',
      titre: 'Semaine de consolidation',
      checklist: [
        'Relire journal d\'erreurs et fiches une page uniquement',
        '1 simulation blanche chronométrée',
        'Vérifier convocation : lieu, heure, pièce d\'identité, tenue professionnelle',
        'Préparer trajet / hébergement si centre éloigné',
        'Informer employeur / garde si nécessaire'
      ]
    },
    {
      jour: 'J-3',
      titre: 'Réduction charge cognitive',
      checklist: [
        'Plus de nouveau contenu — révision échelles + lois uniquement',
        'Préparer sac : stylo, montre, bouteille d\'eau, encas',
        'Couper révisions à 22 h — sommeil prioritaire',
        'Éviter collègues anxiogènes et « dernières infos » non vérifiées'
      ]
    },
    {
      jour: 'J-1',
      titre: 'Veille',
      checklist: [
        '30 min max : phrases clés + SCAN + ABCDE (ce coach)',
        'Repas familier, pas d\'alcool',
        'Préparer vêtements (blouse ou tenue soignée selon consigne)',
        'Alarme + plan B réveil',
        'Activité relaxante 20 min (marche, musique)',
        'Coucher tôt — pas de révision au lit'
      ]
    },
    {
      jour: 'J',
      titre: 'Jour J',
      checklist: [
        'Petit-déjeuner léger',
        'Arrivée 20-30 min avant',
        'Téléphone éteint / laissé au vestiaire',
        'Eau avant d\'entrer, toilettes',
        'Respiration 4-7-8 avant chaque épreuve',
        'En sortant : noter à froid les questions jury (sans rumination excessive)',
        'Repas et repos — célébrer l\'effort indépendamment du résultat'
      ]
    }
  ],

  keyPhrases: [
    {
      contexte: 'Ouverture de restitution',
      phrases: [
        '« Je vous propose une synthèse structurée autour des problèmes que j\'ai identifiés. »',
        '« Il s\'agit d\'un patient de X ans, en perte d\'autonomie modérée, dont le motif principal est… »',
        '« J\'ai retenu trois priorités : une urgence relative, un problème chronique majeur, et un facteur aggravant iatrogène. »'
      ]
    },
    {
      contexte: 'Iatrogénie et prescription',
      phrases: [
        '« J\'ai appliqué une lecture STOPP/START et les critères de Beers adaptés à l\'âge. »',
        '« Je propose une déprescription séquentielle avec surveillance clinique rapprochée. »',
        '« Le rapport bénéfice/risque de ce traitement n\'est plus favorable compte tenu de la fragilité et du pronostic. »',
        '« Chaque médicament doit avoir une indication réévaluée, une durée et un critère d\'arrêt. »'
      ]
    },
    {
      contexte: 'Cognition et démence',
      phrases: [
        '« Je distingue un syndrome démentiel des causes réversibles et de la pseudodémence dépressive. »',
        '« L\'annonce doit être progressive, associée à un plan d\'accompagnement et à l\'évaluation de l\'aidant. »',
        '« Je ne retiens pas de contention chimique en première intention sur ce tableau. »'
      ]
    },
    {
      contexte: 'Chutes et prévention',
      phrases: [
        '« La chute est un symptôme, pas un diagnostic — j\'en cherche les facteurs intrinsèques et extrinsèques. »',
        '« Je prescris une évaluation multifactorielle conformément aux recommandations HAS. »',
        '« La vitamine D et la rééducation à la marche font partie du traitement, pas seulement l\'os fracturé. »'
      ]
    },
    {
      contexte: 'Nutrition',
      phrases: [
        '« La dénutrition est un diagnostic à part entière qui aggrave le pronostic gériatrique. »',
        '« J\'objective avec le MNA et la biologie, puis je traite les causes sociales et dentaires avant les compléments. »',
        '« Apport protéique cible 1,2 à 1,5 g/kg/j en l\'absence de contre-indication rénale majeure. »'
      ]
    },
    {
      contexte: 'Confusion / delirium',
      phrases: [
        '« J\'utilise la CAM pour objectiver un syndrome confusionnel aigu. »',
        '« Ma priorité est de traiter la cause, d\'adapter l\'environnement et d\'éviter la contention physique. »',
        '« Les benzodiazépines sont délétères dans ce contexte ; je les déprescris si possible. »'
      ]
    },
    {
      contexte: 'Éthique et fin de vie',
      phrases: [
        '« Je respecte la loi Leonetti : pas d\'obstination déraisonnable, soins proportionnés au projet du patient. »',
        '« Je vérifie les directives anticipées et la personne de confiance. »',
        '« La sédation profonde et continue est un dernier recours, encadré légalement, pour souffrance réfractaire. »',
        '« Le confort et la dignité priment sur la prolongation artificielle de la vie en phase terminale. »'
      ]
    },
    {
      contexte: 'Projet de soins et sortie',
      phrases: [
        '« Mon objectif est le maintien à domicile si la sécurité du patient et de l\'aidant le permet. »',
        '« Je coordonne avec le médecin traitant, les SSIAD et l\'équipe mobile gériatrique. »',
        '« La décision est partagée avec le patient, l\'entourage et l\'équipe pluriprofessionnelle. »'
      ]
    },
    {
      contexte: 'Face à une question piège du jury',
      phrases: [
        '« C\'est une excellente question — je distinguerais deux situations… »',
        '« En l\'absence de cet élément du dossier, je demanderais… avant de conclure. »',
        '« Je pourrais me tromper sur le détail, mais ma priorité sécuritaire reste… »',
        '« Je reformule : mon diagnostic principal est… parce que… »'
      ]
    },
    {
      contexte: 'Clôture',
      phrases: [
        '« Pour résumer en une phrase : … »',
        '« Je propose un contrôle à 4 semaines avec réévaluation de l\'autonomie et du traitement. »',
        '« Je reste disponible pour préciser un point si vous le souhaitez. »'
      ]
    }
  ],

  meta: {
    version: '1.0',
    lastUpdated: '2026-06',
    usage: 'Charger dans GeriatrieApp pour module coach / fiche révision examen. Complète ressources-evc.js et situations-evc.js.',
    disclaimer: 'Les durées et grilles peuvent varier selon université et année — toujours confirmer avec le coordinateur DESC local.'
  }
};
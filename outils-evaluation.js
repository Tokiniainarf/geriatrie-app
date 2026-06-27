// Outils d'évaluation gériatrique — Référence complète (scores, seuils, interprétation)
const OUTILS_EVALUATION = [
  {
    id: 'eval-mms',
    nom: 'MMS (MMSE — Mini Mental State Examination)',
    domaine: 'Cognition',
    description: 'Test cognitif de dépistage le plus utilisé en pratique. Évalue orientation, mémorisation immédiate et différée, attention/calcul, rappel, langage, compréhension et praxies. Score maximal 30 points. Nécessite correction selon âge et niveau de scolarité.',
    items: [
      { libelle: 'Orientation temporelle', points_max: 5, detail: 'Année, saison, mois, jour de la semaine, date du mois (1 pt chacun).' },
      { libelle: 'Orientation spatiale', points_max: 5, detail: 'Pays, région/département, ville, lieu (établissement), étage/pièce (1 pt chacun).' },
      { libelle: 'Mémorisation immédiate (3 mots)', points_max: 3, detail: 'Répétition de 3 mots (ex. pomme, table, pièce) au 1er essai ; pas de points si échec répétition (réessayer jusqu\'à 6 essais pour enregistrement, score sur 1er essai selon version).' },
      { libelle: 'Attention et calcul', points_max: 5, detail: 'Soustractions successives de 7 à partir de 100 (93, 86…) 5 réponses OU épeler MOT à l\'envers (1 pt par bonne réponse).' },
      { libelle: 'Rappel des 3 mots', points_max: 3, detail: 'Rappel libre des 3 mots mémorisés (1 pt par mot).' },
      { libelle: 'Langage — dénomination', points_max: 2, detail: 'Nommer 2 objets montrés (montre, crayon) (1 pt chacun).' },
      { libelle: 'Langage — répétition', points_max: 1, detail: 'Répéter phrase : « Pas de si, ni mais » ou équivalent.' },
      { libelle: 'Langage — ordre à 3 temps', points_max: 3, detail: 'Compréhension : « Prenez le papier, pliez-le en deux, posez-le par terre » (1 pt par étape réussie).' },
      { libelle: 'Langage — lecture', points_max: 1, detail: 'Lire et exécuter ordre écrit « Fermez les yeux ».' },
      { libelle: 'Langage — écriture', points_max: 1, detail: 'Phrase écrite complète avec sujet et verbe (sens conservé).' },
      { libelle: 'Praxies constructives', points_max: 1, detail: 'Copie dessin figures entrecroisées (2 pentagones).' }
    ],
    seuils: [
      { plage: '≥24', interpretation: 'Cognition globalement préservée au dépistage (ajuster selon scolarité).' },
      { plage: '18-23', interpretation: 'Trouble cognitif léger possible (MCI) ou démence légère — bilan complémentaire (MoCA, examen neuro, imagerie).' },
      { plage: '10-17', interpretation: 'Démence modérée probable.' },
      { plage: '<10', interpretation: 'Démence sévère ; prudence sur autonomie et consentement.' },
      { plage: 'Correction scolarité (Franceschi)', interpretation: 'Analphabète : +3 pts seuil ; primaire : +2 ; secondaire : +1 ; ≥16 ans études : seuil standard 24.' }
    ],
    duree: '5-10 minutes',
    fiabilite: 'Sensibilité/spécificité modérées pour MCI ; influencé par âge, scolarité, déficits sensoriels et humeur. Reproductibilité correcte entre examinateurs formés. Ne suffit pas seul pour diagnostiquer une démence (DSM/ICD + retentissement fonctionnel).',
    interpretation: 'Le MMS dépiste un déficit cognitif mais sous-détecte le trouble cognitif léger (préférer MoCA si suspicion clinique forte). Un score bas en aigu peut refléter delirium, dépression (pseudodémence) ou troubles sensoriels — répéter après traitement de la cause. Intégrer toujours l\'autonomie (ADL/IADL), l\'avis de l\'entourage et l\'examen neurologique. En EHPAD, utile pour suivi longitudinal plutôt que diagnostic isolé.'
  },
  {
    id: 'eval-moca',
    nom: 'MoCA (Montreal Cognitive Assessment)',
    domaine: 'Cognition',
    description: 'Évaluation cognitive sensible aux déficits exécutifs, attentionnels et visuospatiaux, souvent normaux au MMS en MCI. Score total /30 (+1 point si scolarité ≤12 ans). Version validée en français disponible.',
    items: [
      { libelle: 'Visuospatial / exécutif', points_max: 5, detail: 'Trail Making alternance chiffres-lettres (1 pt) ; copie cube (1 pt) ; horloge (contour 1, chiffres 1, aiguilles 1).' },
      { libelle: 'Dénomination', points_max: 3, detail: '3 animaux (lion, rhinocéros, chameau) — 1 pt chacun.' },
      { libelle: 'Mémoire', points_max: 5, detail: '2 essais d\'apprentissage 5 mots + rappel différé (non noté au total initial ; pénalité au rappel : -1 à -5 selon indices).' },
      { libelle: 'Attention', points_max: 6, detail: 'Répétition chiffres avant/arrière (1+1) ; vigilance lettre A (1) ; soustractions 7 (3 pts max).' },
      { libelle: 'Langage', points_max: 3, detail: 'Répétition 2 phrases (1+1) ; fluence lettre F ≥11 mots en 60 s (1 pt).' },
      { libelle: 'Abstraction', points_max: 2, detail: 'Similarités 2 paires (train-bicycle, montre-règle) (1 pt chacune).' },
      { libelle: 'Rappel différé', points_max: 5, detail: 'Rappel libre des 5 mots (1 pt par mot, sans indices).' },
      { libelle: 'Orientation', points_max: 6, detail: 'Date, mois, année, jour, lieu, ville (1 pt chacun).' }
    ],
    seuils: [
      { plage: '≥26', interpretation: 'Performance normale au dépistage (selon population).' },
      { plage: '18-25', interpretation: 'Trouble cognitif léger (MCI) ou démence légère probable — bilan approfondi.' },
      { plage: '<18', interpretation: 'Déficit cognitif modéré à sévère.' },
      { plage: 'Bonus scolarité', interpretation: '+1 point si ≤12 ans d\'études (score max effectif 30).' }
    ],
    duree: '10-15 minutes',
    fiabilite: 'Meilleure sensibilité que le MMS pour MCI (surtout déficits exécutifs/visuospatiaux). Nécessite formation pour horloge et Trail Making. Validé en AVC, Parkinson, démence mixte.',
    interpretation: 'MoCA recommandé si MMS normal mais plainte cognitive, déficit exécutif, AVC ou suspicion démence à prédominance frontale/subcorticale. Un MoCA bas avec ADL préservées oriente vers MCI (surveillance, facteurs vasculaires, dépistage biomarqueurs selon filière). Répéter à 6-12 mois en cas de limite. Combiner avec entretien structuré (IQCODE) et imagerie si indication.'
  },
  {
    id: 'eval-gds15',
    nom: 'GDS-15 (Geriatric Depression Scale — version courte)',
    domaine: 'Humeur / psychiatrie',
    description: 'Autoquestionnaire ou entretien guidé de 15 items oui/non, conçu pour le sujet âgé (moins de symptômes somatiques centraux que Hamilton). Score = nombre de réponses indiquant une dépression (selon sens de chaque item).',
    items: [
      { libelle: 'Items dépressifs (exemples)', points_max: 15, detail: 'Satisfaction de vie, retrait activités, vie vide, ennui, moral, peur, bonheur, impuissance, envie de sortir, problèmes mémoire, vitalité, espoir, mieux mort, énergie, situation désespérée. Chaque item : 1 pt si réponse « dépressive » (sens alterné selon formulation).' },
      { libelle: 'Mode de cotation', points_max: 15, detail: 'Somme des items positifs pour dépression ; score 0-15.' }
    ],
    seuils: [
      { plage: '0-4', interpretation: 'Absence de dépression significative au dépistage.' },
      { plage: '5-8', interpretation: 'Dépression légère possible — confirmation clinique, réévaluation, traitement selon retentissement.' },
      { plage: '9-11', interpretation: 'Dépression modérée probable — prise en charge psychiatrique/gériatrique.' },
      { plage: '12-15', interpretation: 'Dépression sévère — urgence relative si idées suicidaires ; évaluer risque et comorbidités.' }
    ],
    duree: '5 minutes',
    fiabilite: 'Bonne validité en gériatrie ambulatoire et institution ; moins performant si démence sévère (préférer entretien informateur, Cornell). Spécificité correcte si seuil ≥5 pour dépistage.',
    interpretation: 'Un GDS élevé chez le sujet âgé polymorbide peut refléter douleur, iatrogénie ou delirium — toujours examiner et traiter causes somatiques. Idées suicidaires : taux de suicide élevé chez hommes >75 ans — questionner explicitement. Si démence : GDS-4 ou échelle Cornell. Réponse au traitement : répéter à 4-8 semaines.'
  },
  {
    id: 'eval-gds30',
    nom: 'GDS-30 (Geriatric Depression Scale — version longue)',
    domaine: 'Humeur / psychiatrie',
    description: 'Version originale en 30 items oui/non, plus discriminante pour nuances symptomatiques. Utilisée en recherche et en consultation spécialisée lorsque la version courte est équivoque.',
    items: [
      { libelle: 'Structure', points_max: 30, detail: '30 questions binaires couvrant : contentement, activités, énergie, espoir, peurs, plaisir, irritabilité, isolement, mémoire, anxiété, culpabilité, idées de mort, sommeil (indirect), plaintes somatiques atténuées vs échelles classiques.' },
      { libelle: 'Cotation', points_max: 30, detail: '1 point par réponse compatible avec dépression (items codés positivement/négativement selon la version française validée).' }
    ],
    seuils: [
      { plage: '0-9', interpretation: 'Pas de dépression clinique significative.' },
      { plage: '10-19', interpretation: 'Dépression légère à modérée — bilan psychiatrique et somatique.' },
      { plage: '20-30', interpretation: 'Dépression sévère probable — traitement et surveillance rapprochée.' },
      { plage: 'Seuil dépistage courant', interpretation: '≥10 souvent retenu pour dépistage positif (selon protocole local).' }
    ],
    duree: '10-15 minutes',
    fiabilite: 'Validité et fidélité établies en population âgée communautaire ; durée plus longue peut fatiguer le patient fragile — adapter ou fractionner.',
    interpretation: 'La GDS-30 explore plus finement l\'anhédonie et le sentiment d\'inutilité. Chez le patient cognitifement compromis, interpréter avec prudence ou utiliser version courte avec aidant. Ne remplace pas l\'évaluation du risque suicidaire ni du delirium. Association fréquente dépression-douleur-dénutrition : prise en charge globale (CGA).'
  },
  {
    id: 'eval-adl',
    nom: 'ADL (Index d\'autonomie de Katz)',
    domaine: 'Autonomie fonctionnelle',
    description: 'Mesure les activités de base de la vie quotidienne (ABVD). Six domaines en dépendance binaire (autonome vs dépendant). Lettres A-G selon nombre d\'activités préservées.',
    items: [
      { libelle: 'Toilette', points_max: 1, detail: 'Se laver entièrement ou avoir besoin d\'aide pour une seule partie du corps.' },
      { libelle: 'Habillage', points_max: 1, detail: 'S\'habiller, se déshabiller, chercher ses vêtements sans aide.' },
      { libelle: 'Transferts', points_max: 1, detail: 'Se lever, se coucher, s\'asseoir sans aide (lit, chaise, fauteuil roulant).' },
      { libelle: 'Continence', points_max: 1, detail: 'Contrôle urinaire et fécal complet.' },
      { libelle: 'Alimentation', points_max: 1, detail: 'Manger seul (préparation possible par autrui) ; mettre nourriture en bouche.' },
      { libelle: 'Déplacements / bain (selon version)', points_max: 1, detail: 'Version Katz classique : se baigner/doucher ; certaines adaptations incluent marche — préciser version utilisée.' }
    ],
    seuils: [
      { plage: '6/6 (A)', interpretation: 'Autonome pour toutes les ABVD.' },
      { plage: '5/6 (B)', interpretation: 'Dépendance légère sur un domaine.' },
      { plage: '4/6 (C) à 3/6 (D)', interpretation: 'Dépendance modérée — aide à domicile ou soins intermédiaires.' },
      { plage: '≤2/6 (E-G)', interpretation: 'Dépendance sévère — risque institutionnalisation, soins de longue durée.' }
    ],
    duree: '3-5 minutes',
    fiabilite: 'Très largement validé ; sensible aux épisodes aigus (delirium, fracture) — réévaluer après récupération. Informateur utile si démence.',
    interpretation: 'L\'ADL distingue autonomie de base ; une chute de 1-2 points signale souvent décompensation (infection, hospitalisation). Perte continence + transferts = charge aidante majeure. Pour plan de sortie et GIR, croiser avec IADL. Réhabilitation cible les domaines perdus en priorité (transferts, toilette).'
  },
  {
    id: 'eval-iadl',
    nom: 'IADL (Échelle instrumentale de Lawton)',
    domaine: 'Autonomie fonctionnelle',
    description: 'Évalue activités complexes nécessitant cognition et organisation. Huit items en version complète (parfois 5 chez l\'homme selon études). Score 0-8 (1 point par activité autonome).',
    items: [
      { libelle: 'Téléphone', points_max: 1, detail: 'Composer, appeler, répondre sans aide.' },
      { libelle: 'Courses', points_max: 1, detail: 'Organiser liste et acheter seul.' },
      { libelle: 'Préparation repas', points_max: 1, detail: 'Planifier et cuisiner repas complets.' },
      { libelle: 'Ménage', points_max: 1, detail: 'Entretenir logement (aspirateur, vaisselle…).' },
      { libelle: 'Lessive', points_max: 1, detail: 'Laver et ranger linge.' },
      { libelle: 'Moyens de transport', points_max: 1, detail: 'Conduire ou organiser transports seul.' },
      { libelle: 'Gestion médicaments', points_max: 1, detail: 'Prendre bons médicaments aux bons horaires.' },
      { libelle: 'Gestion finances', points_max: 1, detail: 'Budget, chèques, factures sans supervision.' }
    ],
    seuils: [
      { plage: '8/8', interpretation: 'Autonomie instrumentale complète.' },
      { plage: '6-7/8', interpretation: 'Déficits légers — surveillance, aide ponctuelle.' },
      { plage: '3-5/8', interpretation: 'Dépendance modérée — aide à domicile régulière, risque iatrogénie médicaments.' },
      { plage: '0-2/8', interpretation: 'Dépendance sévère — protection patrimoniale, curatelle possible, EHPAD souvent nécessaire si seul.' }
    ],
    duree: '5-8 minutes',
    fiabilite: 'Sensible au déclin précoce (avant ADL) ; influencé par sexe (activités traditionnellement genrées) et environnement urbain/rural.',
    interpretation: 'Baisse IADL avec ADL conservées = MCI ou dépression fréquent. Gestion médicaments et finances = points critiques pour sécurité (surdosage, arnaques). Utile pour décision conduite automobile et maintien à domicile. Réévaluer après intervention (aide sociale, téléassistance, pilulier).'
  },
  {
    id: 'eval-mna',
    nom: 'MNA (Mini Nutritional Assessment)',
    domaine: 'Nutrition',
    description: 'Outil de dépistage et diagnostic de dénutrition et risque dénutritionnel chez le sujet âgé. Version complète (18 items) et courte MNA-SF (6 items) pour dépistage rapide.',
    items: [
      { libelle: 'MNA complet (18 items)', points_max: 30, detail: 'Dépistage : diminution apports, perte poids, mobilité, stress aigu, neuropsychiatrie, IMC, indépendance, prescription >3 médicaments, escarres, repas complets, consommation protéines/laitiers/légumes, autonomie alimentation, comparaison état nutritionnel, MAC, circonférence mollet.' },
      { libelle: 'MNA-SF (6 items)', points_max: 14, detail: 'Perte appétit, perte poids récente, mobilité, stress aigu, dépression, IMC ou circonférence mollet si IMC indisponible.' },
      { libelle: 'Points clés IMC', points_max: null, detail: 'IMC <19 : 0 pt ; 19-<21 : 1 ; 21-<23 : 2 ; ≥23 : 3 (version standard).' }
    ],
    seuils: [
      { plage: 'MNA ≥24', interpretation: 'État nutritionnel normal.' },
      { plage: 'MNA 17-23,5', interpretation: 'Risque de malnutrition — intervention nutritionnelle, objectifs protéino-énergétiques.' },
      { plage: 'MNA <17', interpretation: 'Malnutrition avérée — CNO, diététique, recherche cause (dysphagie, dépression, inflammation).' },
      { plage: 'MNA-SF ≥12', interpretation: 'Normal ; 8-11 risque ; ≤7 dépistage positif malnutrition (passer MNA complet).' }
    ],
    duree: '5 min (SF) à 10 min (complet)',
    fiabilite: 'Référence en gériatrie et oncologie âgée ; corrélé à mortalité et complications. Poids récent indispensable.',
    interpretation: 'Tout sujet âgé hospitalisé ou en perte d\'autonomie : dépistage MNA-SF à l\'admission. Malnutrition = facteur de chutes, escarres, infections, retard rééducation. Objectifs : 30-40 kcal/kg/j, protéines 1,2-1,5 g/kg/j si compatible. Réévaluer hebdomadaire en aigu.'
  },
  {
    id: 'eval-tinetti',
    nom: 'Échelle d\'équilibre et de marche de Tinetti (POMA)',
    domaine: 'Mobilité / chutes',
    description: 'Performance-Based Assessment : équilibre en position statique et dynamique (16 pts) + qualité de la marche (12 pts). Total /28. Prédit le risque de chute.',
    items: [
      { libelle: 'Équilibre (9 items)', points_max: 16, detail: 'Assis équilibre, lever, tentatives lever, équilibre debout immédiat, debout, poussée sternale, yeux fermés, demi-tour 360°, assis (scores 0-2 par item selon stabilité).' },
      { libelle: 'Marche (7 items)', points_max: 12, detail: 'Initiation marche, longueur pas droit/gauche, symétrie, continuité, trajectoire, tronc, distance talons (0-2 par item).' },
      { libelle: 'Total', points_max: 28, detail: 'Somme équilibre + marche.' }
    ],
    seuils: [
      { plage: '≥25', interpretation: 'Risque de chute faible.' },
      { plage: '19-24', interpretation: 'Risque modéré — prévention, kinésithérapie, revue médicamenteuse.' },
      { plage: '<19', interpretation: 'Risque élevé de chute — intervention multifactorielle obligatoire.' },
      { plage: '<15', interpretation: 'Très haut risque — supervision marche, aides techniques, environnement sécurisé.' }
    ],
    duree: '5-10 minutes (espace corridor ~3 m)',
    fiabilite: 'Validé en institution et domicile ; nécessite observateur entraîné. Peut être impossible si non ambulatoire (noter et utiliser autres outils).',
    interpretation: 'Intégrer à l\'évaluation post-chute et bilan gériatrique. Scores bas : rééducation équilibre, correction hypotension orthostatique, vitamine D, déprescription psychotropes. Comparer avec TUG et Berg. Amélioration du score après rééducation = objectif mesurable.'
  },
  {
    id: 'eval-berg',
    nom: 'Berg Balance Scale (BBS)',
    domaine: 'Mobilité / chutes',
    description: '14 tâches d\'équilibre fonctionnel notées 0-4 (0 = ne peut pas, 4 = indépendant). Total 0-56. Standard en rééducation geriatric et neurologique.',
    items: [
      { libelle: '14 items', points_max: 56, detail: 'Assis vers debout, debout sans appui, debout pieds joints, assis pieds au sol, transfert, debout yeux fermés, debout pieds rapprochés, rotation 360°, objet au sol, retourner tête, pied sur banc, marche talons-orteils, marche sur place, escaliers (marche avant/arrière selon version).' },
      { libelle: 'Notation', points_max: 56, detail: 'Chaque item 0-4 ; somme = score global.' }
    ],
    seuils: [
      { plage: '41-56', interpretation: 'Équilibre relativement bon ; risque chute modéré selon contexte.' },
      { plage: '21-40', interpretation: 'Risque de chute élevé — aide à la marche, rééducation intensive.' },
      { plage: '0-20', interpretation: 'Équilibre très altéré — fauteuil roulant ou marche très assistée.' },
      { plage: 'Seuil classique <45', interpretation: 'Indique risque accru de chute chez personne âgée ambulatoire.' }
    ],
    duree: '15-20 minutes',
    fiabilite: 'Excellente fidélité inter-examinateur avec formation ; plafond effet si patient très performant ou très grave.',
    interpretation: 'BBS plus granulaire que Tinetti pour suivi rééducation. Une hausse ≥8 points est cliniquement significative. Utiliser si patient peut marcher sans aide majeure. Coupler avec force (chaise levée) et douleur. En AVC et Parkinson, suivi longitudinal standard.'
  },
  {
    id: 'eval-braden',
    nom: 'Échelle de Braden (risque d\'escarre)',
    domaine: 'Peau / escarres',
    description: 'Évalue six facteurs de risque d\'escarre par pression. Chaque sous-échelle 1-4 (sauf friction 1-3), score total 6-23 : plus le score est bas, plus le risque est élevé.',
    items: [
      { libelle: 'Perception sensorielle', points_max: 4, detail: 'Capacité à répondre aux inconforts pression (1 = totalement limitée, 4 = aucune atteinte).' },
      { libelle: 'Humidité', points_max: 4, detail: 'Exposition peau à l\'humidité (incontinence, sud).' },
      { libelle: 'Activité', points_max: 4, detail: 'Degré d\'activité physique (alité vs marche fréquente).' },
      { libelle: 'Mobilité', points_max: 4, detail: 'Capacité à changer position (1 = complètement immobile).' },
      { libelle: 'Nutrition', points_max: 4, detail: 'Apports alimentaires et perfusion (1 = très pauvre).' },
      { libelle: 'Friction et cisaillement', points_max: 3, detail: '1 = problème, 2 = problème potentiel, 3 = aucun problème apparent.' }
    ],
    seuils: [
      { plage: '≤9', interpretation: 'Risque très élevé d\'escarre — matelas clinique, repositionnement strict q2h.' },
      { plage: '10-12', interpretation: 'Risque élevé.' },
      { plage: '13-14', interpretation: 'Risque modéré.' },
      { plage: '15-18', interpretation: 'Risque faible — prévention standard.' },
      { plage: '19-23', interpretation: 'Pas de risque identifié par l\'échelle (surveillance clinique maintenue).' }
    ],
    duree: '3-5 minutes',
    fiabilite: 'Standard international en EHPAD et soins aigus ; compléter par jugement clinique (oedème, perfusion).',
    interpretation: 'À l\'admission et après changement d\'état (fièvre, chute, chirurgie). Braden bas + albumine basse = très haut risque. Prévention : repositionnement, nutrition, continence, éviter cisaillement au transfert. Réévaluer chaque semaine ou si nouvelle escarre.'
  },
  {
    id: 'eval-norton',
    nom: 'Échelle de Norton (risque d\'escarre)',
    domaine: 'Peau / escarres',
    description: 'Cinq dimensions cliniques notées 1-4 (1 = mauvais, 4 = bon). Total 5-20 : score bas = risque élevé. Alternative historique à Braden, encore utilisée en France.',
    items: [
      { libelle: 'État physique général', points_max: 4, detail: 'Mauvais à bon (catabolisme, cachexie vs bon état).' },
      { libelle: 'État mental', points_max: 4, detail: 'Stupore/confusion vs alerte.' },
      { libelle: 'Activité', points_max: 4, detail: 'Alité/chair-bound vs ambulant.' },
      { libelle: 'Mobilité', points_max: 4, detail: 'Immobile vs pleine mobilité.' },
      { libelle: 'Incontinence', points_max: 4, detail: 'Urinaire et/ou fécale complète vs continent.' }
    ],
    seuils: [
      { plage: '≤10', interpretation: 'Risque très élevé d\'escarre.' },
      { plage: '11-13', interpretation: 'Risque élevé.' },
      { plage: '14-17', interpretation: 'Risque modéré.' },
      { plage: '18-20', interpretation: 'Risque faible.' },
      { plage: 'Règle classique', interpretation: 'Score <14 = risque élevé nécessitant protocole préventif renforcé.' }
    ],
    duree: '2-3 minutes',
    fiabilite: 'Validité prédictive correcte ; moins détaillée que Braden sur nutrition et friction. Rapide en soins de suite.',
    interpretation: 'Utile en équipes habituées à Norton. Confusion et incontinence = double peine (macération). Ne pas retarder matelas et soins si escarre déjà présente (stade NPUAP). Croiser avec MNA et hydratation.'
  },
  {
    id: 'eval-ecpa',
    nom: 'ECPA / Algoplus (douleur — sujet non communicant)',
    domaine: 'Douleur',
    description: 'Évaluation comportementale de la douleur chez la personne âgée avec troubles de la communication (démence, delirium, fin de vie). Algoplus : 5 items observables en 2-3 minutes. Score 0-10.',
    items: [
      { libelle: 'Comportements faciaux', points_max: 2, detail: 'Froncement sourcils, grimace, regard fixe, yeux plissés, air effrayé (0 absent, 1 modéré, 2 maximal).' },
      { libelle: 'Regard', points_max: 2, detail: 'Regard lointain, vide, suppliant, fermeture yeux (0-2).' },
      { libelle: 'Gémissements / plaintes verbales', points_max: 2, detail: 'Gémissements, « aïe », répétitions (0-2).' },
      { libelle: 'Corps tendu / attitudes de protection', points_max: 2, detail: 'Raideur, mains sur zone douloureuse, retrait au soin (0-2).' },
      { libelle: 'Comportements de protestation', points_max: 2, detail: 'Refus soins, agitation lors mobilisation (0-2).' }
    ],
    seuils: [
      { plage: '0-2', interpretation: 'Pas de douleur comportementale significative (douleur toujours possible — clinique).' },
      { plage: '3-5', interpretation: 'Douleur légère à modérée — analgésie adaptée, réévaluation post-traitement.' },
      { plage: '≥6', interpretation: 'Douleur modérée à sévère — traitement rapide, recherche cause (fracture, infection, constipation).' },
      { plage: '≥2 sur un item', interpretation: 'Selon protocole Algoplus : score positif justifiant prise en charge antalgique.' }
    ],
    duree: '2-3 minutes (observation au repos et au soin)',
    fiabilite: 'Validé en EHPAD ; meilleur que EVA si patient non verbal. Observer lors des soins (mobilisation) augmente sensibilité.',
    interpretation: 'Douleur sous-traitée majore delirium, chutes et dénutrition. Réévaluer 30-60 min après antalgique. Si score persistant : imagerie ciblée, avis dentaire, infection urinaire. Doloplus-2 (10 items) alternative si besoin finesse. Éviter de confondre agitation psychiatrique et douleur.'
  },
  {
    id: 'eval-eva',
    nom: 'EVA (Échelle Visuelle Analogique de la douleur)',
    domaine: 'Douleur',
    description: 'Auto-évaluation sur ligne continue 100 mm (0 = pas de douleur, 100 = douleur maximale imaginable). Variante 0-10 cm ou curseur numérique. Référence si patient communicant et cognitif suffisant.',
    items: [
      { libelle: 'Mesure', points_max: 100, detail: 'Patient place marqueur sur ligne ou indique nombre 0-10 ; distance du zéro = intensité.' },
      { libelle: 'Types', points_max: null, detail: 'EVA douleur actuelle, douleur moyenne 24 h, douleur maximale, douleur au mouvement (préciser question).' }
    ],
    seuils: [
      { plage: '0', interpretation: 'Absence de douleur déclarée.' },
      { plage: '1-3 / 10', interpretation: 'Douleur légère — paracétamol, mesures non médicamenteuses.' },
      { plage: '4-6 / 10', interpretation: 'Douleur modérée — palier 2, réévaluation rapprochée.' },
      { plage: '7-10 / 10', interpretation: 'Douleur sévère — traitement immédiat, bilan étiologique, éviter sous-traitement en fin de vie.' },
      { plage: 'Variation clinique', interpretation: 'Δ ≥2 points = changement cliniquement significatif.' }
    ],
    duree: '1 minute',
    fiabilite: 'Excellente en adulte cognitif ; invalide si confusion, déficit visuel ou aphasie — basculer sur EN comportementale ou Algoplus.',
    interpretation: 'Toujours documenter contexte (au repos, à la mobilisation). Chez le sujet âgé : privilégier paracétamol en première intention, opioïdes faibles si besoin, éviter AINS si IRC/cardiopathie. EVA répétée guide titration morphinique en soins palliatifs.'
  },
  {
    id: 'eval-en',
    nom: 'EN (Échelle Numérique de la douleur — NRS)',
    domaine: 'Douleur',
    description: 'Échelle verbale numérique 0-10 (aucune douleur à douleur pire imaginable). Plus simple que EVA pour le sujet âgé avec bonne cognition ; validée en urgence et hospitalisation.',
    items: [
      { libelle: 'Question standard', points_max: 10, detail: '« Sur une échelle de 0 à 10, combien avez-vous mal maintenant ? »' },
      { libelle: 'Variantes', points_max: 10, detail: 'Échelle verbale catégorielle (absente, légère, modérée, sévère) convertible en EN pour traçabilité.' }
    ],
    seuils: [
      { plage: '0', interpretation: 'Pas de douleur.' },
      { plage: '1-3', interpretation: 'Douleur légère.' },
      { plage: '4-6', interpretation: 'Douleur modérée — traitement adapté, objectif fonctionnel.' },
      { plage: '7-10', interpretation: 'Douleur intense — urgence relative, recherche cause aiguë (fracture, ischémie, colique).' },
      { plage: 'EN ≥4', interpretation: 'Souvent seuil d\'intervention antalgique en pratique gériatrique hospitalière.' }
    ],
    duree: '<1 minute',
    fiabilite: 'Corrélation forte avec EVA ; préférée si arthrose main ou trouble visuel. Moins fiable si démence modérée.',
    interpretation: 'Intégrer dans protocoles antalgiques post-chute et post-op. Si patient ne peut pas maintenir un nombre : utiliser faces (Échelle de Wong-Baker) ou Algoplus. Réévaluer systématiquement après chaque dose d\'antalgique en aigu.'
  },
  {
    id: 'eval-cam',
    nom: 'CAM (Confusion Assessment Method)',
    domaine: 'Neuropsychiatrie aiguë',
    description: 'Algorithme diagnostique du delirium (confusion aiguë), pas un score linéaire. Basé sur 4 critères après entretien et observation. CAM positive = delirium probable.',
    items: [
      { libelle: 'Critère 1 — Début aigu et fluctuation', points_max: null, detail: 'Changement aigu de l\'état mental par rapport au baseline + fluctuations au cours de la journée (informateur + dossier).' },
      { libelle: 'Critère 2 — Inattention', points_max: null, detail: 'Difficulté à focaliser, maintenir ou déplacer l\'attention (tests digits, lettres, conversation).' },
      { libelle: 'Critère 3 — Pensée désorganisée', points_max: null, detail: 'Discours incohérent, conversation illogique, flux changeant d\'idées.' },
      { libelle: 'Critère 4 — Altération conscience', points_max: null, detail: 'Vigilance altérée (somnolence, stupeur) ou hypervigilance ; autre que coma.' },
      { libelle: 'Règle CAM', points_max: null, detail: 'CAM + si (1 ET 2) + (3 OU 4). Variante CAM-ICU pour ventilation.' }
    ],
    seuils: [
      { plage: 'CAM négative', interpretation: 'Delirium peu probable ; réévaluer si clinique évolutive (4AT utile en dépistage).' },
      { plage: 'CAM positive', interpretation: 'Delirium probable — bilan étiologique urgent, traitement causal, mesures non pharmacologiques.' },
      { plage: 'Formes', interpretation: 'Hyperactive (agitation), hypoactive (léthargie — sous-diagnostiquée), mixte.' }
    ],
    duree: '5 minutes (après collecte anamnèse)',
    fiabilite: 'Sensibilité ~94-100 %, spécificité ~90-95 % avec examinateur formé. 4AT (score 0-12) complément de dépistage : ≥4 = delirium possible.',
    interpretation: 'Delirium = urgence diagnostique (infection, médicament, rétention, hypoxie, douleur, constipation). Éviter BZD ; antipsychotique courte durée si danger. CAM à chaque admission ≥65 ans, post-op hanche, démence. Pronostic : mortalité ↑, déclin cognitif persistant possible.'
  },
  {
    id: 'eval-charlson',
    nom: 'Index de comorbidité de Charlson (CCI)',
    domaine: 'Pronostic / épidémiologie',
    description: 'Score de comorbidités pondérées prédisant mortalité à 1 et 10 ans. 17 conditions avec poids 1-6 ; version avec âge (Charlson adapté) ajoute 1 pt par décennie ≥50 ans.',
    items: [
      { libelle: 'Poids 1', points_max: 1, detail: 'Infarctus, insuffisance cardiaque, maladie vasculaire périphérique, AVC, démence, BPCO, tissu conjonctif, ulcère peptique, maladie hépatique légère, diabète sans complication.' },
      { libelle: 'Poids 2', points_max: 2, detail: 'Hémiparésie, néphropathie modérée/sévère, diabète avec atteinte organe, tumeur solide (localisée), leucémie, lymphome, VIH.' },
      { libelle: 'Poids 3', points_max: 3, detail: 'Maladie hépatique modérée/sévère.' },
      { libelle: 'Poids 6', points_max: 6, detail: 'Cancer métastatique, SIDA.' },
      { libelle: 'Ajustement âge', points_max: null, detail: 'Charlson-Deyo ou indices avec +1 par 10 ans après 40-50 ans selon version.' }
    ],
    seuils: [
      { plage: '0', interpretation: 'Comorbidité nulle — mortalité estimée la plus basse (selon tables originales).' },
      { plage: '1-2', interpretation: 'Comorbidité faible.' },
      { plage: '3-4', interpretation: 'Comorbidité modérée — adapter intensité soins et objectifs thérapeutiques.' },
      { plage: '≥5', interpretation: 'Comorbidité élevée — discussion pronostic, limitations thérapeutiques, soins palliatifs si pertinent.' }
    ],
    duree: '5-10 minutes (extraction dossier)',
    fiabilite: 'Très utilisé en recherche et aide à la décision ; dépend de la qualité du codage CIM. Cumulative Illness Rating Scale (CIRS) alternative plus granulaire.',
    interpretation: 'En gériatrie : contextualiser chirurgie, chimiothérapie, réanimation. Un Charlson élevé ne contre-indique pas automatiquement un traitement — intégrer fragilité (CFS), ADL et préférences patient. Utile pour comparer cohortes et counseling familial.'
  },
  {
    id: 'eval-sofa',
    nom: 'SOFA (Sequential Organ Failure Assessment)',
    domaine: 'Soins critiques / sepsis',
    description: 'Évalue défaillance organique sur 6 systèmes : respiration (PaO2/FiO2), coagulation (plaquettes), foie (bilirubine), cardiovasculaire (PA/vasopresseurs), neurologique (Glasgow), rénal (créatinine/diurèse). Chaque organe 0-4, total 0-24.',
    items: [
      { libelle: 'Respiration', points_max: 4, detail: 'PaO2/FiO2 : ≥400 (0), <400 (1), <300 (2), <200 avec support (3), <100 (4).' },
      { libelle: 'Coagulation', points_max: 4, detail: 'Plaquettes ×10³/mm³ : ≥150 (0) à <20 (4).' },
      { libelle: 'Foie', points_max: 4, detail: 'Bilirubine mg/dL : <1,2 (0) à ≥12 (4).' },
      { libelle: 'Cardiovasculaire', points_max: 4, detail: 'PAM, dopamine, dobutamine, noradrénaline (échelle vasopresseurs).' },
      { libelle: 'Système nerveux central', points_max: 4, detail: 'Score de Glasgow 15 (0) à 6 (4).' },
      { libelle: 'Rénal', points_max: 4, detail: 'Créatinine mg/dL ou diurèse mL/j (0-4).' }
    ],
    seuils: [
      { plage: '0', interpretation: 'Pas de défaillance organique par critères SOFA.' },
      { plage: '1-6', interpretation: 'Dysfonction organique légère — surveillance renforcée.' },
      { plage: '7-12', interpretation: 'Défaillance modérée — soins intensifs, sepsis sévère possible.' },
      { plage: '≥13', interpretation: 'Défaillance sévère — mortalité élevée, discussion objectifs de soins.' },
      { plage: 'Δ SOFA ≥2', interpretation: 'Critère sepsis (Sepsis-3) en contexte infection + suspicion clinique.' }
    ],
    duree: '5 minutes (données biologiques et paramètres vitaux)',
    fiabilite: 'Standard en réanimation ; moins utilisé en gériatrie ambulatoire mais pertinent en USI gériatrique et sepsis du sujet âgé.',
    interpretation: 'Chez le sujet très âgé, SOFA élevé doit être discuté avec directives anticipées et fragilité. Une défaillance neurologique peut refléter delirium/sédation plus que lésion structurale. Suivi quotidien en USI ; qSOFA (tachypnée, hypotension, confusion) outil dépistage au lit, pas substitut.'
  },
  {
    id: 'eval-news2',
    nom: 'NEWS2 (National Early Warning Score 2)',
    domaine: 'Surveillance aiguë / détérioration',
    description: 'Score d\'alerte précoce basé sur paramètres vitaux et conscience. Utilisé en hospitalisation pour détecter dégradation clinique et déclencher réponse médicale graduée.',
    items: [
      { libelle: 'Fréquence respiratoire', points_max: 3, detail: '≤8 ou ≥25/min = 3 pts ; 9-11 = 1 ; 21-24 = 2 ; 12-20 = 0.' },
      { libelle: 'SpO2', points_max: 3, detail: 'Échelle 1 ou 2 si BPCO hypercapnie ; sinon ≤91 % = 3, etc.' },
      { libelle: 'Oxygène supplémentaire', points_max: 2, detail: '2 pts si O2 en cours.' },
      { libelle: 'Température', points_max: 3, detail: '≤35 °C ou ≥39,1 °C = 3 ; 35,1-36 = 1 ; 38,1-39 = 1.' },
      { libelle: 'Pression artérielle systolique', points_max: 3, detail: '≤90 ou ≥220 = 3 ; 91-100 = 2 ; 101-110 = 1.' },
      { libelle: 'Fréquence cardiaque', points_max: 3, detail: '≤40 ou ≥131 = 3 ; 41-50 ou 111-130 = 1-2.' },
      { libelle: 'Conscience (AVPU)', points_max: 3, detail: 'A=0 ; V/P/U = 3 (confusion/somnolence/coma).' },
      { libelle: 'Total', points_max: 20, detail: 'Somme (certains items exclusifs selon protocole local).' }
    ],
    seuils: [
      { plage: '0', interpretation: 'Risque faible — surveillance routinière.' },
      { plage: '1-4', interpretation: 'Risque bas-modéré — réévaluation selon protocole (infirmier).' },
      { plage: '5-6', interpretation: 'Risque modéré — avis médecin urgent, monitoring rapproché.' },
      { plage: '≥7', interpretation: 'Risque élevé — réponse équipe urgente, transfert soins intensifs à discuter.' },
      { plage: 'Score isolé 3 sur un paramètre', interpretation: 'Déclencheur d\'alerte immédiate (ex. FC 41, FR 24).' }
    ],
    duree: '1-2 minutes par passage',
    fiabilite: 'Validé pour prédire mortalité à 24 h et admission USI ; chez le sujet âgé, seuils physiologiques différents — adapter protocole établissement.',
    interpretation: 'NEWS2 élevé chez personne âgée fragile : rechercher sepsis, déshydratation, hémorragie, OAP, delirium. Ne pas ignorer tendance (NEWS2 montant). Coupler avec examen ciblé et bilan biologique. En EHPAD, équivalents locaux (MEWS) parfois utilisés.'
  },
  {
    id: 'eval-cha2ds2vasc',
    nom: 'CHA₂DS₂-VASc',
    domaine: 'Cardiologie / fibrillation atriale',
    description: 'Score de risque thromboembolique (AVC) en fibrillation atriale non valvulaire. Une lettre par facteur ; somme 0-9 (sexe féminin compte si autres facteurs présents selon interprétation moderne). Guide indication anticoagulation.',
    items: [
      { libelle: 'C — Insuffisance cardiaque / dysfonction VG', points_max: 1, detail: '1 point.' },
      { libelle: 'H — Hypertension', points_max: 1, detail: '1 point (traitée ou non).' },
      { libelle: 'A₂ — Âge ≥75 ans', points_max: 2, detail: '2 points.' },
      { libelle: 'D — Diabète', points_max: 1, detail: '1 point.' },
      { libelle: 'S₂ — AVC/AIT/thromboembolisme antérieur', points_max: 2, detail: '2 points.' },
      { libelle: 'V — Maladie vasculaire', points_max: 1, detail: 'IDM, artériopathie, plaque aorte.' },
      { libelle: 'A — Âge 65-74 ans', points_max: 1, detail: '1 point.' },
      { libelle: 'Sc — Sexe féminin', points_max: 1, detail: '1 point (facteur modificateur de risque, pas seul critère d\'anticoagulation).' }
    ],
    seuils: [
      { plage: '0 (homme)', interpretation: 'Risque thromboembolique très faible — anticoagulation généralement non indiquée.' },
      { plage: '1 (homme)', interpretation: 'Risque faible — discuter anticoagulation selon préférences et saignement.' },
      { plage: '≥2', interpretation: 'Anticoagulation recommandée (sauf contre-indication) — AOD ou AVK.' },
      { plage: '≥75 ans seul', interpretation: 'Score déjà élevé par l\'âge — bénéfice anticoagulation important en FA.' }
    ],
    duree: '2 minutes',
    fiabilite: 'Validé massivement ; meilleur que CHADS2 pour risque faible. En gériatrie, intégrer HAS-BLED et fragilité.',
    interpretation: 'Le sujet âgé bénéficie souvent de l\'anticoagulation si CHA₂DS₂-VASc ≥2 et pas de contre-indication majeure. Préférer AOD si DFG adapté et observance. Réévaluer après chute avec traumatisme crânien, chaque hospitalisation.'
  },
  {
    id: 'eval-hasbled',
    nom: 'HAS-BLED',
    domaine: 'Cardiologie / hémorragie',
    description: 'Score de risque hémorragique majeur sous anticoagulation (surtout FA). 9 lettres, 1 point chacun sauf INR labile et médicaments/alcool (1 chacun). Total 0-9. Ne contre-indique pas mais modulateur.',
    items: [
      { libelle: 'H — Hypertension', points_max: 1, detail: 'PAS >160 mmHg si non contrôlée.' },
      { libelle: 'A — Fonction hépatique/rénale anormale', points_max: 1, detail: '1 pt chacun possible (cirrhose, bilirubine, créatinine, dialyse selon version).' },
      { libelle: 'S — Stroke (AVC antérieur)', points_max: 1, detail: '1 point.' },
      { libelle: 'B — Bleeding (saignement majeur antérieur)', points_max: 1, detail: 'Hémorragie majeure ou prédisposition.' },
      { libelle: 'L — Labile INR', points_max: 1, detail: 'TTR <60 % sous AVK (moins pertinent avec AOD).' },
      { libelle: 'E — Elderly', points_max: 1, detail: 'Âge >65 ans (1 pt).' },
      { libelle: 'D — Drugs / alcohol', points_max: 1, detail: 'AINS/antiagrégants ou alcool excessif (1 pt chacun selon version max 2).' }
    ],
    seuils: [
      { plage: '0-2', interpretation: 'Risque hémorragique faible à modéré — anticoagulation si indication.' },
      { plage: '≥3', interpretation: 'Risque hémorragique élevé — corriger facteurs modifiables, surveillance rapprochée, pas contre-indication absolue.' },
      { plage: 'Usage', interpretation: 'Identifier patients nécessitant suivi gastro, contrôle PA, éviter AINS, éducation observance.' }
    ],
    duree: '2-3 minutes',
    fiabilite: 'Prédit hémorragie majeure ; souvent mal interprété comme refus d\'anticoaguler. Bénéfice CHA₂DS₂-VASc peut l\'emporter.',
    interpretation: 'Chez le sujet âgé anticoagulé : HAS-BLED élevé = optimiser PA, protéger estomac si AINS nécessaires, dépister anémie, éviter surdosage AOD (DFG). Après chute : réévaluer rapport bénéfice/risque. Éducation aidants sur signes hémorragie.'
  }
];
// Guides ophtalmologie — Santé visuelle et prise en charge chez le sujet âgé
const GUIDES_OPHTALMOLOGIE = [
  {
    id: 'ophtal-1',
    titre: 'Dégénérescence maculaire liée à l\'âge (DMLA)',
    contenu: 'La DMLA est la première cause de malvoyance centrale après 65 ans en pays développés. Atteinte de la macula (vision fine, lecture, reconnaissance des visages).\n\nFORMES :\n- Sèche (atrophique) : ~80–90 % ; évolution lente, pas de traitement curatif ; supplémentation AREDS2 si stade intermédiaire avancé unilatéral.\n- Humide (néovasculaire) : ~10–20 % ; perte rapide si non traitée ; anti-VEGF intravitréens (ranibizumab, aflibercept, faricimab…) sous protocole ophtalmologique.\n\nSIGNES D\'ALERTE :\n- Métamorphopsies (lignes courbes), tache centrale fixe, baisse vision de près.\n- Grille d\'Amsler auto-surveillance hebdomadaire si DMLA connue.\n\nFACTEURS DE RISQUE :\n- Âge, tabac (sevrage prioritaire), ATCD familial, obésité, HTA.\n\nGÉRIATRIE :\n- Confusion avec dépression ou démence si isolement lié à la vision.\n- Adapter éclairage, grossissement, contraste ; évaluer autonomie (IADL), conduite, chutes (profondeur).\n- Coordination injections : transport, observance, surveillance second œil.',
    points_cles: ['DMLA humide = urgence anti-VEGF', 'Grille d\'Amsler en auto-surveillance', 'Tabac = facteur modifiable majeur', 'Impact autonomie et chutes']
  },
  {
    id: 'ophtal-2',
    titre: 'Glaucome chez le sujet âgé : dépistage et traitement',
    contenu: 'Le glaucome chronique à angle ouvert (GCOA) est souvent asymptomatique jusqu\'à stade avancé ; le glaucome aigu par fermeture d\'angle est une urgence (douleur, halo, nausées).\n\nDÉPISTAGE :\n- Tonus oculaire, examen du papille (cup/disc), champ visuel si suspicion.\n- À risque : antécédents familiaux, myopie, diabète, corticoïdes prolongés, origine afro-caribéenne.\n\nTRAITEMENT GCOA :\n- Collyres hypotonisants en première intention (prostaglandines, bêta-bloquants, inhibiteurs anhydrase carbonique).\n- Observance difficile à l\'âge (poly médicaments, dexterité) ; préférer monothérapie simple si possible.\n\nIATROGÉNIE :\n- Bêta-bloquants topiques : absorption systémique → bradycardie, bronchospasme (BPCO), hypotension.\n- Signaler traitement au médecin traitant ; envisager laser/trabéculectomie si intolérance systémique.\n\nSUIVI :\n- Objectif PIO individualisé ; champ visuel et OCT nerf optique selon protocole.\n- Ne pas arrêter collyres sans avis ophtalmologique.',
    points_cles: ['Souvent silencieux jusqu\'à tard', 'Collyres β-bloquants = effets systémiques', 'Observance et dexterité à l\'âge', 'Fermeture angle aigu = urgence']
  },
  {
    id: 'ophtal-3',
    titre: 'Cataracte : indication chirurgicale et attentes chez le sujet âgé',
    contenu: 'Opacification progressive du cristallin ; cause fréquente de baisse d\'acuité réversible après 70 ans.\n\nSYMPTÔMES :\n- Brouillard progressif, éblouissement, difficulté conduite de nuit, jaunissement des couleurs.\n\nINDICATION CHIRURGICALE :\n- Retentissement fonctionnel (lecture, marche, activités) et non seuil d\'acuité isolé.\n- Bilan préopératoire : cornée, fond d\'œil (DMLA, glaucome, rétinopathie) — pronostic post-op expliqué si comorbidité maculaire.\n\nCHIRURGIE :\n- Phacoémulsification + implant intraoculaire ; ambulatoire le plus souvent.\n- Anesthésie locale ; adaptation si agitation, cognition (accompagnement, sédation légère si besoin).\n\nPOST-OPÉRATOIRE :\n- Collyres anti-inflammatoires/antibiotiques ; respect protocole.\n- Chute de vision aiguë post-op : exclure infection (endophtalmie) ou décollement rétine — urgence.\n\nGÉRIATRIE :\n- Cataracte bilatérale et chutes : discuter timing des deux yeux et rééducation environnement.\n- Pas de contre-indication absolue liée à l\'âge seul si bénéfice fonctionnel.',
    points_cles: ['Indication = retentissement fonctionnel', 'Fond d\'œil conditionne le gain visuel', 'Endophtalmie = urgence post-op', 'Âge seul ≠ CI chirurgie']
  },
  {
    id: 'ophtal-4',
    titre: 'Rétinopathie diabétique chez le patient âgé',
    contenu: 'Le diabète de longue durée expose à microangiopathie rétinienne ; fréquente si DT2 vieillissant ou DT1 ancien.\n\nCLASSIFICATION (simplifiée) :\n- Non proliférante légère à sévère ; proliférante (néovaisseaux) ; maculopathie diabétique (œdème maculaire).\n\nDÉPISTAGE :\n- Fond d\'œil annuel (ou plus si grossesse, mauvais équilibre) ; rétinophotographie en alternative selon filière.\n- Dépistage à maintenir même si symptomatique absent.\n\nTRAITEMENT :\n- Équilibre glycémique, PA, lipides (prévention progression).\n- Œdème maculaire : anti-VEGF, laser focal ; rétinopathie proliférante : laser pan-rétinien, vitrectomie si hémorragie vitréenne.\n\nGÉRIATRIE :\n- Objectifs glycémiques individualisés (hypoglycémies > bénéfice microvasculaire strict si fragile).\n- Coordination ophtalmo / diabétologue / MG ; ne pas reporter fond d\'œil en EHPAD.\n- Vision basse : lien avec autonomie médicamenteuse (doses insuline, lecture étiquettes).',
    points_cles: ['Fond d\'œil annuel systématique', 'Œdème maculaire = anti-VEGF', 'Glycémie individualisée si fragile', 'DMLA + RD = pronostic pejoratif']
  },
  {
    id: 'ophtal-5',
    titre: 'Syndrome de l\'œil sec (sécheresse oculaire) à l\'âge',
    contenu: 'Très fréquent après 65 ans ; femmes, polymédication, climat, écrans, chirurgie réfractive ou cataracte antérieure.\n\nSYMPTÔMES :\n- Sécheresse, brûlure, corps étranger, larmoiement paradoxal, fatigue visuelle, fluctuation acuité.\n\nCAUSES À RECHERCHER :\n- Sjögren, maladies auto-immunes, anticholinergiques, ISRS, antihistaminiques, rétinoïques, ventilation CPAP mal adaptée.\n\nTRAITEMENT :\n- Lacrymes artificielles sans conservateur si utilisation fréquente.\n- Hygiène des paupières (blepharite) ; humidification pièce ; pauses écran.\n- Ciclosporine topique, plugs lacrymaux, lunettes moist chamber si forme modérée-sévère.\n\nGÉRIATRIE :\n- Confondre avec conjonctivite infectieuse : pas d\'antibiotique systématique si tableau chronique typique.\n- Chirurgie oculaire différée parfois si sécheresse sévère non traitée.\n- Confort et qualité de vie ; lien avec lecture et isolement.',
    points_cles: ['Iatrogénie médicamenteuse fréquente', 'Sans conservateur si usage > 4/j', 'Blepharite souvent associée', 'Larmoiement ≠ excès de larmes']
  },
  {
    id: 'ophtal-6',
    titre: 'Correction visuelle (lunettes, verres progressifs) chez le sujet âgé',
    contenu: 'Presbytie universelle ; association myopie/hypermétropie/astigmatisme ; pathologies oculaires limitant le gain optique.\n\nPRESCRIPTION :\n- Réfraction soignée ; distance pupillaire et hauteur verres progressifs (chutes si mal centrés).\n- Verres progressifs : adaptation marche escaliers, vision périphérique ; alternative bifocaux ou deux paires si déséquilibre/chutes.\n\nSÉCURITÉ :\n- Correction insuffisante = facteur de chutes (seuils, obstacles).\n- Conduite : exigences légales acuité et champ ; renouvellement périodique.\n\nAIDES :\n- Grossissement (loupe, éclairage LED), contrastes, téléagrandisseurs si maladie maculaire.\n- Lentilles : rares si sécheresse, arthrose mains, cognition ; hygiène stricte.\n\nGÉRIATRIE :\n- Vérifier port effectif des lunettes (EHPAD : lunettes identifiables, nettoyage).\n- Après cataracte : mise à jour correction rapide (parfois sans lunettes pour vision lointaine).',
    points_cles: ['Progressifs mal réglés = chutes', 'Deux paires parfois plus sûr', 'Éclairage + grossissement si DMLA', 'Lunettes perdues en institution']
  },
  {
    id: 'ophtal-7',
    titre: 'Dépistage visuel systématique en gériatrie',
    contenu: 'La baisse visuelle est sous-déclarée ; impact sur chutes, médication, dépression, isolement.\n\nQUI DÉPISTER :\n- Tout sujet ≥ 65 ans à la consultation gériatrique ; annuel en EHPAD ou si facteurs de risque.\n\nEXAMEN DE PREMIÈRE LIGNE (MG / gériatre) :\n- Acuité (échelle Snellen ou approximation), symptômes, dernière consultation ophtalmo.\n- Test grossissement lecture ; questionnement conduite et activités.\n- Fond d\'œil direct si compétence et mydriase possible ; sinon orientation.\n\nORIENTATIONS CIBLÉES :\n- Baisse rapide, douleur, halo, métamorphopsies, champ tubulaire, diplopie aiguë → ophtalmo urgent.\n- Dépistage glaucome / RD / DMLA selon filière locale (photographie rétinienne diabète).\n\nOUTILS GÉRIATRIQUES :\n- Intégrer vision dans bilan chutes (GDS, timed up and go avec correction habituelle).\n- Dépistage trouble visuospatial en démence (horloge, cubes).',
    points_cles: ['Sous-déclaration fréquente', 'Acuité + retentissement fonctionnel', 'Baisse rapide = urgence relative', 'Vision dans bilan chutes']
  },
  {
    id: 'ophtal-8',
    titre: 'Prévention de la cécité et des complications visuelles',
    contenu: 'Prévention primaire (éviter survenue), secondaire (dépistage précoce), tertiaire (éviter aggravation).\n\nMESURES GÉNÉRALES :\n- Tabac : arrêt (DMLA, RD, cataracte).\n- Protection UV (lunettes soleil).\n- Contrôle HTA, diabète, dyslipidémie ; alimentation riche légumes verts (pas de miracle, cohérence globale).\n\nPATHOLOGIES CIBLÉES :\n- DMLA : AREDS2 si indication ; grille Amsler ; pas de fumer.\n- Glaucome : observance traitement à vie.\n- RD : fond d\'œil régulier.\n- Cataracte : opérer avant cécité fonctionnelle si bénéfice.\n\nACCIDENTS :\n- Corps étranger, produits chimiques : lavage abondant, urgence.\n- Traumatisme oculaire post-chute : recherche systématique si ecchymoses périorbitaires.\n\nVACCINATION / INFECTIONS :\n- Zona ophtalmique (V1) : orientation urgente pour atteinte cornéenne.',
    points_cles: ['Tabac et équilibre métabolique', 'Observance glaucome = prévention cécité', 'Traumatisme oculaire post-chute', 'Zona V1 = urgence ophtalmo']
  },
  {
    id: 'ophtal-9',
    titre: 'Basse vision et réhabilitation visuelle',
    contenu: 'Basse vision : acuité insuffisante malgré correction et/ou champ restreint ; définition administrative variable (souvent < 1/10 ou critères MDPH).\n\nÉVALUATION :\n- Acuité, champ, contraste, besoins (lecture, télévision, marche, cuisine).\n- Impact psychologique, dépression, dépendance.\n\nRÉHABILITATION :\n- Orthoptiste / basse vision : aides optiques (loupes, télescopes), entraînement fixation.\n- Aides électroniques (loupe vidéo), applications accessibilité, synthèse vocale.\n- Aménagement domicile : éclairage homogène 300–500 lux lecture, contraste marches, repères tactiles.\n\nDROITS ET PARCOURS :\n- MDPH, reconnaissance handicap ; transport, aide humaine lecture courrier administratif.\n- Ne pas confondre avec démence : adapter communication (gros caractères, face à face).\n\nGÉRIATRIE :\n- Équipe pluridisciplinaire (ergo, kiné équilibre, social) ; prévention chutes prioritaire.',
    points_cles: ['Réhabilitation ≠ lunettes classiques', 'Éclairage et contraste au domicile', 'Distinguer basse vision et démence', 'MDPH et aides techniques']
  },
  {
    id: 'ophtal-10',
    titre: 'Chirurgie oculaire chez le sujet âgé : sécurité et parcours',
    contenu: 'Interventions fréquentes : cataracte, glaucome (laser, MIGS, filtrant), vitrectomie (RD, membrane), injections intravitréennes ambulatoires.\n\nÉVALUATION PRÉOPÉRATOIRE :\n- Fragilité (score clinique), cognition (compréhension consignes post-op), compliance.\n- Anesthésie : locale majoritaire ; balance sédation si anxiété ou position difficile.\n- Anticoagulants / antiagrégants : protocole hémorragie (injections IV vs chirurgie).\n\nRISQUES SPÉCIFIQUES ÂGE :\n- Endophtalmie, décollement rétine, œdème maculaire cystoïde, glaucome secondaire.\n- Chute post-op (anesthésie, patch, consignes floues) : accompagnement 24–48 h.\n\nPOST-OPÉRATOIRE :\n- Schéma collyres simplifié ; aide à l\'instillation (famille, infirmière).\n- Contrôles programmés ; signes d\'alerte affichés en gros caractères.\n\nÉTHIQUE :\n- Refus ou limitation thérapeutique si bénéfice fonctionnel nul (DMLA terminale bilatérale) — soins de confort oculaires (lubrification).',
    points_cles: ['Fragilité et cognition au bilan', 'Chutes post-op fréquentes', 'Simplifier collyres et consignes', 'Bénéfice nul si macula détruite']
  }
];
const FLASHCARDS = [
  // ── Chapitre 1 : Vieillissement ──────────────────────────────────
  { id: 1, chapter: 'ch1', rang: 'A', question: 'Définition du vieillissement ?', answer: 'Ensemble des processus physiologiques modifiant la structure et les fonctions des organes à partir de l\'âge mûr. Facteurs : génétiques + environnementaux + stochastiques. Processus lent, jamais responsable seul d\'une symptomatologie aiguë.', tags: ['vieillissement', 'définition'] },
  { id: 2, chapter: 'ch1', rang: 'A', question: 'Définition de la gériatrie ?', answer: 'Médecine des personnes âgées. DES de gériatrie depuis 2017. Approche globale (médicale, sociale, psychologique). Prise en charge multidimensionnelle.', tags: ['gériatrie', 'définition'] },
  { id: 3, chapter: 'ch1', rang: 'A', question: 'Quels sont les 5 critères de Fried pour le diagnostic de fragilité ?', answer: '1. Perte de poids involontaire (≥4,5 kg/an ou ≥5 %). 2. Fatigue (échelle de fatigue). 3. Réduction des activités physiques. 4. Vitesse de marche lente. 5. Faible force de préhension (grip strength). ≥ 3 critères = fragile.', tags: ['fragilité', 'Fried', 'syndrome fragile'] },
  { id: 4, chapter: 'ch1', rang: 'A', question: 'Seuil de vitesse de marche pour le diagnostic de fragilité ?', answer: '< 0,8 m/s (soit < 4,8 s sur 4 m).', tags: ['fragilité', 'marche', 'vitesse'] },
  { id: 5, chapter: 'ch1', rang: 'B', question: 'Espérance de vie en France en 2020 ?', answer: 'Femmes : 85,2 ans. Hommes : 79,2 ans. Gain moyen : +1,3 an tous les 10 ans.', tags: ['espérance de vie', 'démographie'] },

  // ── Chapitre 2 : Raisonnement gériatrique ────────────────────────
  { id: 6, chapter: 'ch2', rang: 'A', question: 'Modèle de Bouchon en gériatrie ?', answer: '1 + 2 + 3. Facteur 1 = vieillissement normal. Facteur 2 = maladies chroniques. Facteur 3 = facteurs précipitants (aigus). Priorité thérapeutique : traiter le Facteur 3 (réversible).', tags: ['Bouchon', 'modèle', 'raisonnement'] },
  { id: 7, chapter: 'ch2', rang: 'A', question: 'Définition de la cascade gériatrique ?', answer: 'Déséquilibre en série d\'organes et de fonctions après un facteur déclenchant. Cercle vicieux : un dysfonctionnement entraîne un autre. Spécifique au sujet âgé polymorbide.', tags: ['cascade', 'cercle vicieux'] },
  { id: 8, chapter: 'ch2', rang: 'A', question: 'Définition de la polypathologie ?', answer: 'Présence de ≥ 5 maladies chroniques chez le même patient. Fréquente chez la personne âgée. Complexifie la prise en charge.', tags: ['polypathologie', 'multimorbidité'] },
  { id: 9, chapter: 'ch2', rang: 'A', question: 'Définition de la polymédication ?', answer: 'Prise de ≥ 5 molécules différentes par jour. Facteur de risque iatrogénique majeur. Nécessite régulière revue médicamenteuse.', tags: ['polymédication', 'iatrogénie'] },

  // ── Chapitre 3 : Autonomie et dépendance ─────────────────────────
  { id: 10, chapter: 'ch3', rang: 'A', question: 'Différence entre AVD et AVD-I ?', answer: 'AVD (Activités de la Vie Domestique) = actes de la vie quotidienne (toilette, habillage, alimentation, continence, transferts, toilette). AVD-I (AVD instrumentales) = activités plus complexes : gestion administrative, courses, cuisine, transport, téléphone. AVD-I se perdent avant les AVD.', tags: ['AVD', 'autonomie', 'dépendance'] },
  { id: 11, chapter: 'ch3', rang: 'A', question: 'Qu\'est-ce que la grille AGGIR et que mesure-t-elle ?', answer: 'Grille nationale d\'évaluation de la perte d\'autonomie. Évalue 10 variables discriminantes (cohérence, orientation, toilette, habillage, alimentation, continence, transferts, déplacement intérieur, déplacement extérieur, communication à distance) et 7 variables illustratives. Détermine le GIR (1 à 6).', tags: ['AGGIR', 'GIR', 'évaluation'] },
  { id: 12, chapter: 'ch3', rang: 'A', question: 'Signification des 6 niveaux GIR ?', answer: 'GIR 1 : dépendance totale (confinement lit/fauteuil). GIR 2 : fonctions mentales altérées ou dépendance motrice importante. GIR 3 : autonomie mentale conservée, dépendance motrice partielle. GIR 4 : aide pour les AVD. GIR 5 : aide ponctuelle. GIR 6 : personne autonome. GIR 1-2 = dépendance lourde, GIR 3-4 = dépendance partielle, GIR 5-6 = peu ou pas dépendant.', tags: ['GIR', 'AGGIR', 'APA'] },
  { id: 13, chapter: 'ch3', rang: 'B', question: 'Qu\'est-ce que la dépendance iatrogène ?', answer: 'Perte d\'autonomie fonctionnelle secondaire à un acte médical ou un médicament (ex : sédation, hypotension, chutes liées aux psychotropes). Évitable.', tags: ['iatrogénie', 'dépendance', 'AVD'] },

  // ── Chapitre 4 : Éthique et droit ────────────────────────────────
  { id: 14, chapter: 'ch4', rang: 'A', question: 'Définition des directives anticipées ?', answer: 'Document écrit par une personne majeure pour exprimer ses souhaits de fin de vie au cas où elle ne pourrait plus s\'exprimer. Valables sans limitation de durée (révisables/révocables). Prises en compte si situation irréversible et pronostic engagé.', tags: ['éthique', 'directives anticipées', 'fin de vie'] },
  { id: 15, chapter: 'ch4', rang: 'A', question: 'Rôle de la personne de confiance ?', answer: 'Personne désignée par le patient pour l\'accompagner dans les décisions médicales. Consultée si le patient ne peut exprimer sa volonté. Avis consultatif (pas décisionnel). Peut accompagner les démarches. Désignation par écrit, en présence de 2 témoins.', tags: ['personne de confiance', 'éthique'] },
  { id: 16, chapter: 'ch4', rang: 'A', question: 'Différence entre curatelle et tutelle ?', answer: 'Curatelle : protection intermédiaire. La personne accomplit seule les actes de gestion courante ; les actes importants (vente, emprunt) nécessitent l\'assistance du curateur. Tutelle : protection renforcée. Un tuteur représente la personne dans tous les actes de la vie civile. Mesures prononcées par le juge des tutelles.', tags: ['curatelle', 'tutelle', 'protection juridique'] },

  // ── Chapitre 5 : Troubles sensoriels ─────────────────────────────
  { id: 17, chapter: 'ch5', rang: 'A', question: 'Définition de la presbyacousie ?', answer: 'Baisse progressive et bilatérale de l\'audition liée à l\'âge. Atteinte précoque des fréquences aiguës. Cause la plus fréquente de surdité chez la personne âgée. Correction par appareillage auditif.', tags: ['presbyacousie', 'audition', 'ORL'] },
  { id: 18, chapter: 'ch5', rang: 'A', question: 'Définition de la DMLA ?', answer: 'Dégénérescence Maculaire Liée à l\'Age. Atteinte de la macula (zone centrale de la rétine). Cause principale de malvoyance après 50 ans. Formes : sèche (atrophique, 80 %) et humide (néovasculaire, 20 %, traitable par injections intravitréennes).', tags: ['DMLA', 'vision', 'ophtalmologie'] },
  { id: 19, chapter: 'ch5', rang: 'B', question: 'Définition de la presbytie ?', answer: 'Baisse progressive de l\'accommodation liée à l\'âge (perte d\'élasticité du cristallin). Apparition vers 45 ans. Gêne en vision de près. Correction par verres convexes (lentilles de lecture).', tags: ['presbytie', 'vision', 'cristallin'] },

  // ── Chapitre 6 : Ostéoporose ─────────────────────────────────────
  { id: 20, chapter: 'ch6', rang: 'A', question: 'Définition de l\'ostéoporose ?', answer: 'Maladie diffuse du squelette caractérisée par une diminution de la densité minérale osseuse (DMO) et une altération de la micro-architecture osseuse, entraînant une augmentation de la fragilité osseuse et du risque de fractures.', tags: ['ostéoporose', 'os', 'DMO'] },
  { id: 21, chapter: 'ch6', rang: 'A', question: 'Comment interpréter le T-score de la DMO ?', answer: 'T-score = écart-type par rapport à la DMO de référence du jeune adulte. T ≥ -1 : normal. -2,5 < T < -1 : ostéoporose. T ≤ -2,5 : ostéoporose confirmée. T ≤ -2,5 + fracture = ostéoporose sévère (établie).', tags: ['T-score', 'DMO', 'ostéoporose'] },
  { id: 22, chapter: 'ch6', rang: 'A', question: 'Qu\'appelle-t-on fractures sévères (majeures) de l\'ostéoporose ?', answer: 'Fractures de fragilité survenant sur os ostéoporotique : fracture du col fémoral, fracture vertébrale (tassement), fracture du poignet (Colles), fracture de l\'humérus proximal. La fracture du col fémoral est la plus grave (mortalité 20 % à 1 an).', tags: ['fracture', 'ostéoporose', 'col fémoral'] },

  // ── Chapitre 7 : Arthrose ────────────────────────────────────────
  { id: 23, chapter: 'ch7', rang: 'A', question: 'Définition de l\'arthrose ?', answer: 'Maladie dégénérative du cartilage articulaire (arthrose = ostéoarthrite). Processus métabique actif avec destruction et tentative de réparation. Facteurs : âge, surpoids, traumatismes, génétique. Atteintes fréquentes : genou (gonarthrose), hanche (coxarthrose), doigts (arthrose digitale).', tags: ['arthrose', 'articulaire', 'cartilage'] },
  { id: 24, chapter: 'ch7', rang: 'A', question: 'Différence entre coxarthrose et gonarthrose ?', answer: 'Coxarthrose = arthrose de la hanche. Gonarthrose = arthrose du genou. Douleur mécanique, raideur matinale < 30 min. Traitement commun : AINS, physiothérapie, perte de poids, prothèse si échec médical.', tags: ['coxarthrose', 'gonarthrose', 'arthrose'] },
  { id: 25, chapter: 'ch7', rang: 'B', question: 'Précautions avec les AINS chez la personne âgée ?', answer: 'Risque accru : ulcère gastrique, insuffisance rénale aiguë, insuffisance cardiaque décompensée, interaction avec anticoagulants. Chez le sujet âgé : prescription à dose minimale et durée la plus courte possible, IPP associés. Privilégier paracétamol en 1ère intention.', tags: ['AINS', 'iatrogénie', 'arthrose'] },

  // ── Chapitre 8 : Douleur ─────────────────────────────────────────
  { id: 26, chapter: 'ch8', rang: 'A', question: 'Différence entre douleur aiguë et douleur chronique ?', answer: 'Douleur aiguë : signal d\'alarme, liée à une lésion tissulaire, durée limitée (< 3 mois). Douleur chronique : persiste au-delà de la guérison attendue (≥ 3 mois), perd sa fonction d\'alarme, retentissement psychosocial majeur.', tags: ['douleur', 'aiguë', 'chronique'] },
  { id: 27, chapter: 'ch8', rang: 'A', question: 'Qu\'est-ce que l\'EVA et comment l\'utiliser ?', answer: 'Échelle Visuelle Analogique. Réglette de 10 cm : 0 = pas de douleur, 10 = douleur maximale insupportable. Patient déplace un curseur. Simple, reproductible, validée chez la personne âgée communicante. Douleur ≥ 4/10 = douleur significative.', tags: ['EVA', 'évaluation', 'douleur'] },
  { id: 28, chapter: 'ch8', rang: 'A', question: 'Définition de la douleur neuropathique ?', answer: 'Douleur due à une lésion ou maladie du système nerveux somatosensoriel. Mécanisme : lésion nerveuse périphérique ou centrale. Caractéristiques : brûlures, décharges, picotements, allodynie, hyperalgésie. Traitement : antidépresseurs tricycliques, antiépileptiques (gabapentine, prégabaline).', tags: ['douleur neuropathique', 'système nerveux', 'traitement'] },

  // ── Chapitre 9 : Démences ────────────────────────────────────────
  { id: 29, chapter: 'ch9', rang: 'A', question: 'Définition de la maladie d\'Alzheimer ?', answer: 'Maladie neurodégénérative progressive et irréversible. Cause la plus fréquente de démence (60-70 %). Physiopathologie : accumulation de peptides bêta-amyloïdes (plaques séniles) et protéine tau (dégénérescence neurofibrillaire). Atteinte précoce de l\'hippocampe (mémoire épisodique).', tags: ['Alzheimer', 'démence', 'neurologie'] },
  { id: 30, chapter: 'ch9', rang: 'A', question: 'Qu\'est-ce que le MMSE et comment l\'interpréter ?', answer: 'Mini Mental State Examination (Folstein). Score sur 30 points. Évalue : orientation temporo-spatiale, mémoire immédiate et différée, attention/calcul, langage, praxies constructives. Seuils : ≥ 24 normal, 18-23 déficit léger, < 18 déficit sévère. Corriger selon niveau scolaire et âge.', tags: ['MMSE', 'cognition', 'démence'] },
  { id: 31, chapter: 'ch9', rang: 'A', question: 'Classification des troubles neurocognitifs (NCD) selon le DSM-5 ?', answer: 'Trouble neurocognit léger (Mild NCD) : déclin cognitif objectif par rapport au niveau antérieur, mais autonomie fonctionnelle préservée. Trouble neurocognit majeur (Major NCD) : déclin cognitif avec perte d\'autonomie fonctionnelle (démence). Étiologies : Alzheimer, vasculaire, Lewy, fronto-temporale, etc.', tags: ['troubles neurocognitifs', 'DSM-5', 'démence'] },

  // ── Chapitre 10 : Dépression ─────────────────────────────────────
  { id: 32, chapter: 'ch10', rang: 'A', question: 'Particularités de la dépression chez la personne âgée ?', answer: 'Symptômes atypiques : plaintes somatiques (douleurs, troubles digestifs), troubles mnésiques ("pseudodémence dépressive"), irritabilité, anxiété majeure, isolement social, ralentissement psychomoteur, idées de culpabilité. Risque suicidaire élevé (surtout hommes > 80 ans). Souvent sous-diagnostiquée.', tags: ['dépression', 'gériatrie', 'psychiatrie'] },
  { id: 33, chapter: 'ch10', rang: 'A', question: 'Qu\'est-ce que l\'échelle GDS (Geriatric Depression Scale) ?', answer: 'Échelle de dépistage de la dépression chez la personne âgée. Version courte : 15 questions (Oui/Non). Score ≥ 5/15 : suspicion de dépression. Ne nécessite pas de formation spécialisée. Auto ou hétéro-administrable.', tags: ['GDS', 'dépression', 'échelle', 'dépistage'] },
  { id: 34, chapter: 'ch10', rang: 'A', question: 'Évaluation du risque suicidaire chez la personne âgée ?', answer: 'Facteurs de risque : sexe masculin, veuvage, isolement, maladie somatique sévère, douleur chronique, dépression, antécédents de TS, perte d\'autonomie. Interroger directement sur les idées suicidaires. Mot de passage à l\'acte : "je ne veux plus être un fardeau". Hospitalisation si risque avéré.', tags: ['suicide', 'risque', 'dépression'] },

  // ── Chapitre 11 : Confusion ──────────────────────────────────────
  { id: 35, chapter: 'ch11', rang: 'A', question: 'Définition de la confusion (delirium) ?', answer: 'Trouble aigu et fluctuant de la conscience et de l\'attention. Début brutal (heures à jours). Réversible avec traitement de la cause. Caractéristiques : désorientation, troubles de la mémoire, agitation ou somnolence, perturbations du cycle veille-sommeil. Urgence gériatrique.', tags: ['confusion', 'delirium', 'urgences'] },
  { id: 36, chapter: 'ch11', rang: 'A', question: 'Qu\'est-ce que le CAM et que vérifie-t-il ?', answer: 'Confusion Assessment Method. Outil de dépistage du delirium. 4 critères : 1. Début aigu et fluctuant. 2. Inattention. 3. Désorganisation de la pensée. 4. Altération du niveau de conscience. Diagnostic = critère 1 + 2 + (3 ou 4).', tags: ['CAM', 'confusion', 'delirium', 'diagnostic'] },
  { id: 37, chapter: 'ch11', rang: 'A', question: 'Facteurs prédisposants vs précipitants de la confusion ?', answer: 'Prédisposants (vulnérabilité) : âge avancé, démence, déficits sensoriels, comorbidités, polymédication. Précipitants (déclencheurs) : infection (IDU, pneumopathie), médicaments (opioïdes, anticholinergiques), déshydratation, douleur, constipation, rétention urinaire, chirurgie, immobilisation.', tags: ['confusion', 'facteurs', 'delirium'] },
  { id: 38, chapter: 'ch11', rang: 'B', question: 'Moyen mnémotechnique DIAPPERS pour les causes réversibles de confusion ?', answer: 'D = Delirium/Démence. I = Infection. A = Atrophie cérébrale (lésions). P = Problèmes psychiatriques. P = Pharmacologiques. E = Endocriniens/métaboliques. R = Réduction sensorielle. S = Sommeil/Systémique (substances).', tags: ['DIAPPERS', 'confusion', 'mnémotechnique'] },

  // ── Chapitre 12 : Chutes ─────────────────────────────────────────
  { id: 39, chapter: 'ch12', rang: 'A', question: 'Définition de la chute chez la personne âgée ?', answer: 'Chute = événement non intentionnel amenant la personne au sol ou à un niveau inférieur, sans perte de connaissance initiale. Facteurs intrinsèques (âge, troubles visuels, neuropathie, hypotension orthostatique, médicaments) et extrinsèques (environnement, obstacles, sol glissant).', tags: ['chute', 'définition', 'prévention'] },
  { id: 40, chapter: 'ch12', rang: 'A', question: 'Qu\'est-ce que le TUG test (Timed Up and Go) ?', answer: 'Test de mobilité. Le patient se lève d\'une chaise, marche 3 m, fait demi-tour, revient s\'asseoir. Chronométrer. < 10 s : normal. 10-20 s : risque modéré de chute. > 20 s : risque élevé de chute, dépendance fonctionnelle probable.', tags: ['TUG', 'chute', 'évaluation', 'mobilité'] },
  { id: 41, chapter: 'ch12', rang: 'A', question: 'Qu\'est-ce que le syndrome post-chute ?', answer: 'Ensemble des conséquences psychologiques et fonctionnelles après une chute : peur de retomber, anxiété, évitement des activités, perte d\'autonomie, déconditionnement physique. Cercle vicieux : peur → sédentarité → faiblesse → chute. Prise en charge : rééducation, soutien psychologique.', tags: ['chute', 'syndrome post-chute', 'psychologie'] },
  { id: 42, chapter: 'ch12', rang: 'A', question: 'Définition de l\'hypotension orthostatique ?', answer: 'Chute de la pression artérielle systolique ≥ 20 mmHg ou diastolique ≥ 10 mmHg dans les 3 minutes qui suivent le passage à la position debout. Symptômes : vertiges, lipothymies, voire syncope. Facteurs : déshydratation, médicaments (antihypertenseurs, diurétiques, alpha-bloquants), neuropathie autonome.', tags: ['hypotension orthostatique', 'chute', 'PA'] },

  // ── Chapitre 13 : Immobilisation ─────────────────────────────────
  { id: 43, chapter: 'ch13', rang: 'A', question: 'Qu\'est-ce que le syndrome d\'immobilisation ?', answer: 'Ensemble des complications liées à l\'alitement prolongé : escarres, thrombose veineuse proforde, pneumopathie d\'inhalation, constipation, rétention urinaire, dénutrition, déconditionnement musculaire, confusion, dépression, contractures, raideurs articulaires. Prévention : mobilisation précoce.', tags: ['immobilisation', 'alitement', 'complications'] },
  { id: 44, chapter: 'ch13', rang: 'A', question: 'Définition de l\'escarre et facteurs de risque ?', answer: 'Lésion ischémique cutanée et sous-cutanée due à une pression prolongée sur une proéminence osseuse. Stades : I (érythème non dépressible), II (décollement/ampoule), III (nécrose cutanée), IV (nécrose étendue). Facteurs : immobilisation, incontinence, dénutrition, anesthésie cutanée.', tags: ['escarre', 'immobilisation', 'prévention'] },
  { id: 45, chapter: 'ch13', rang: 'A', question: 'Comparaison échelle de Norton et échelle de Braden ?', answer: 'Norton : 5 items (état physique, mental, activité, mobilité, incontinence), score < 14 = risque élevé. Braden : 6 items (perception sensorielle, humidité, activité, mobilité, nutrition, friction/cisaillement), score ≤ 12 = risque élevé. Braden est plus précise et plus utilisée actuellement.', tags: ['Norton', 'Braden', 'escarre', 'évaluation'] },

  // ── Chapitre 14 : Dénutrition ─────────────────────────────────────
  { id: 46, chapter: 'ch14', rang: 'A', question: 'Définition de la dénutrition chez la personne âgée ?', answer: 'État pathologique résultant d\'un apport nutritionnel insuffisant par rapport aux besoins. Seuils : IMC < 21 kg/m² chez le sujet âgé (et non < 18,5). Perte de poids involontaire ≥ 5 % en 1 mois ou ≥ 10 % en 6 mois. Fréquente (15-30 % en institution).', tags: ['dénutrition', 'IMC', 'nutrition'] },
  { id: 47, chapter: 'ch14', rang: 'A', question: 'Qu\'est-ce que le MNA et comment l\'interpréter ?', answer: 'Mini Nutritional Assessment. Outil de dépistage et d\'évaluation de la dénutrition. Version courte (MNA-SF) : 6 items, score sur 14. ≥ 12 : état nutritionnel normal. 8-11 : risque de dénutrition. < 8 : dénutrition. Version complète (MNA) : 18 items, score sur 30.', tags: ['MNA', 'dénutrition', 'évaluation'] },
  { id: 48, chapter: 'ch14', rang: 'B', question: 'Qu\'est-ce que la CNO (Consommation Nutritionnelle Optimale) ?', answer: 'Objectifs nutritionnels chez la personne âgée. Apports recommandés : 30-35 kcal/kg/j, 1-1,2 g de protéines/kg/j (≥ 1,2 en cas de dénutrition ou d\'escarre). Supplémentation en vitamine D (800-1000 UI/j).', tags: ['CNO', 'dénutrition', 'besoins'] },

  // ── Chapitre 15 : Incontinence ───────────────────────────────────
  { id: 49, chapter: 'ch15', rang: 'A', question: 'Principaux types d\'incontinence urinaire chez la personne âgée ?', answer: '1. Incontinence d\'effort (fuite à l\'effort, insuffisance sphinctérienne). 2. Incontinence par urgenturie (vésicale hyperactive, fuite précédée d\'un besoin impérieux). 3. Incontinence mixte (les deux). 4. Incontinence par regorgement (rétention chronique avec débordement). 5. Incontinence fonctionnelle (mobilité réduite).', tags: ['incontinence', 'urinaire', 'urologie'] },
  { id: 50, chapter: 'ch15', rang: 'A', question: 'Qu\'est-ce que l\'urgenturie et son traitement ?', answer: 'Besoin impérieux et urgent d\'uriner, difficilement contrôlable. Fréquemment nocturne (nycturie). Traitement : rééducation périnéale, anticholinergiques (solifénacine, fésotérodine), bêta-3 agonistes (mirabégron). Précaution : éviter les anticholinergiques chez le sujet âgé (confusion, rétention).', tags: ['urgenturie', 'incontinence', 'traitement'] },
  { id: 51, chapter: 'ch15', rang: 'A', question: 'Qu\'est-ce qu\'un catalogue mictionnel et comment le remplir ?', answer: 'Document où le patient note pendant 3 jours : heure de chaque miction, volume uriné, épisodes d\'incontinence, circonstances (effort, urgenturie), prise de boissons. Permet de caractériser le type d\'incontinence et d\'adapter le traitement. Outil diagnostique de première intention.', tags: ['catalogue mictionnel', 'incontinence', 'diagnostic'] },

  // ── Chapitre 16 : Iatrogénie ─────────────────────────────────────
  { id: 52, chapter: 'ch16', rang: 'A', question: 'Définition de l\'iatrogénie médicamenteuse ?', answer: 'Effet indésirable d\'un médicament survenant dans les conditions normales d\'utilisation. Chez la personne âgée : survenue plus fréquente (pharmacocinétique modifiée), plus grave, plus atypique. Facteurs : polymédication, insuffisance rénale, diminution de la masse maigre, augmentation de la masse grasse.', tags: ['iatrogénie', 'médicaments', 'effets indésirables'] },
  { id: 53, chapter: 'ch16', rang: 'A', question: 'Différence entre overuse, underuse et misuse médicamenteux ?', answer: 'Overuse : utilisation d\'un médicament sans indication (ex : AINS prolongés). Underuse : non-utilisation d\'un médicament indiqué (ex : bêtabloquant post-IDM non prescrit). Mauvais usage (misuse) : prescription inadaptée (dose, durée, interaction, contre-indication). Les trois contribuent à l\'iatrogénie.', tags: ['overuse', 'underuse', 'misuse', 'iatrogénie'] },
  { id: 54, chapter: 'ch16', rang: 'A', question: 'Risques des médicaments anticholinergiques chez la personne âgée ?', answer: 'Effets indésirables : confusion, somnolence, constipation sévère, rétention urinaire, sécheresse buccale, tachycardie, glaucome par fermeture de l\'angle. Échelle ACB (Anticholinergic Cognitive Burden) pour évaluer la charge anticholinergique totale. Score ≥ 3 = risque cognitif significatif. Éviter autant que possible.', tags: ['anticholinergiques', 'iatrogénie', 'ACB'] },

  // ── Chapitre 17 : Soins palliatifs ───────────────────────────────
  { id: 55, chapter: 'ch17', rang: 'A', question: 'Définition des soins palliatifs ?', answer: 'Soins actifs et continus dans une approche globale de la personne en fin de vie. Objectif : soulager les douleurs, apaiser la souffrance psychique, sauvegarder la dignité, accompagner la personne et ses proches. Pas seulement pour le cancer. Droit universel.', tags: ['soins palliatifs', 'fin de vie', 'accompagnement'] },
  { id: 56, chapter: 'ch17', rang: 'A', question: 'Définition de l\'obstination déraisonnable (acharnement thérapeutique) ?', answer: 'Poursuite de traitements qui n\'ont d\'autre effet que le seul maintien artificiel de la vie, lorsqu\'ils apparaissent inutiles, disproportionnés ou n\'ayant d\'autre effet que le seul maintien artificiel de la vie. Interdite par la loi Léonetti (2005) et Claeys-Leonetti (2016). Décision collégiale.', tags: ['obstination déraisonnable', 'fin de vie', 'loi'] },
  { id: 57, chapter: 'ch17', rang: 'A', question: 'Types de sédation en fin de vie ?', answer: '1. Sédation symptomatique intermittente : pour soulager un symptôme réfractaire (douleur, dyspnée, agitation). 2. Sédation terminale/profonde et continue : maintenue jusqu\'au décès, pour un ou plusieurs symptômes réfractaires, à la demande du patient, après décision collégiale. Sédation profonde et continue maintenue jusqu\'au décès = légalement encadrée (loi 2016).', tags: ['sédation', 'fin de vie', 'soins palliatifs'] },
];

/* ═══════════════════════════════════════════════════════════════════
   Mode Révision — sessions structurées (Anki / Quizlet)
   ═══════════════════════════════════════════════════════════════════ */
const REVISION_SRS_KEY = 'revision_srs';
const REVISION_STATS_KEY = 'revision_stats';

function getAllFlashcards() {
  const pools = [];
  if (typeof FLASHCARDS !== 'undefined') pools.push(...FLASHCARDS);
  if (typeof FLASHCARDS_A !== 'undefined') pools.push(...FLASHCARDS_A);
  if (typeof FLASHCARDS_B !== 'undefined') pools.push(...FLASHCARDS_B);
  if (typeof FLASHCARDS_C !== 'undefined') pools.push(...FLASHCARDS_C);
  if (typeof FLASHCARDS_MEMOS !== 'undefined') pools.push(...FLASHCARDS_MEMOS);
  if (typeof FLASHCARDS_EXPANDED !== 'undefined') pools.push(...FLASHCARDS_EXPANDED);
  const seen = new Set();
  return pools.filter(c => {
    if (!c || c.id == null) return false;
    const k = String(c.id);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function revisionChapterTitle(chId) {
  if (typeof APP_DATA !== 'undefined' && APP_DATA.chapters) {
    const ch = APP_DATA.chapters.find(x => x.id === chId);
    if (ch) return ch.t;
  }
  return chId || '';
}

function loadRevisionSRS() {
  try { return JSON.parse(localStorage.getItem(REVISION_SRS_KEY)) || {}; } catch { return {}; }
}
function saveRevisionSRS(srs) {
  localStorage.setItem(REVISION_SRS_KEY, JSON.stringify(srs));
}

function loadRevisionStats() {
  try {
    return JSON.parse(localStorage.getItem(REVISION_STATS_KEY)) || {
      totalSeen: 0, streak: 0, lastDay: '', sessions: 0,
      byChapter: {}, history: []
    };
  } catch {
    return { totalSeen: 0, streak: 0, lastDay: '', sessions: 0, byChapter: {}, history: [] };
  }
}
function saveRevisionStats(stats) {
  localStorage.setItem(REVISION_STATS_KEY, JSON.stringify(stats));
}

function srsKey(card) { return String(card.id); }

function applySRSRating(card, rating) {
  const srs = loadRevisionSRS();
  const key = srsKey(card);
  const entry = srs[key] || { ease: 2.5, interval: 0, nextReview: 0, reps: 0 };
  const now = Date.now();
  if (rating === 'know') {
    entry.reps += 1;
    entry.interval = entry.interval === 0 ? 1 : Math.round(entry.interval * entry.ease);
    entry.ease = Math.min(3, entry.ease + 0.15);
    entry.nextReview = now + entry.interval * 86400000;
  } else if (rating === 'review') {
    entry.interval = 1;
    entry.ease = Math.max(1.3, entry.ease - 0.05);
    entry.nextReview = now + 86400000;
  } else {
    entry.interval = 0;
    entry.ease = Math.max(1.3, entry.ease - 0.2);
    entry.nextReview = now + 600000;
  }
  srs[key] = entry;
  saveRevisionSRS(srs);
  return entry;
}

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const RevisionMode = {
  screen: 'setup',
  sessionMode: 'full',
  chapter: 'mixed',
  queue: [],
  index: 0,
  startedAt: 0,
  results: { know: 0, review: 0, dont: 0, requeued: 0 },
  sessionRepeats: {},
  flipped: false,
  animating: false,

  mount() {
    const root = document.getElementById('vFlash');
    if (!root || root.querySelector('#revApp')) return;
    root.innerHTML = `
      <div class="rev-app" id="revApp">
        <div class="rev-screen rev-setup active" id="revSetup">
          <div class="page-hd">
            <h1>Mode Révision</h1>
            <p>Sessions ciblées · répétition espacée · pas de scroll infini</p>
          </div>
          <div class="rev-stats-panel" id="revStatsPanel"></div>
          <div class="rev-mode-row">
            <span class="rev-mode-label">Durée de session</span>
            <div class="rev-mode-toggle">
              <button type="button" class="rev-mode-btn" data-mode="quick">Rapide · 5</button>
              <button type="button" class="rev-mode-btn active" data-mode="full">Complet · 20</button>
            </div>
          </div>
          <p class="rev-grid-title">Choisir un chapitre</p>
          <div class="rev-ch-grid" id="revChGrid"></div>
        </div>
        <div class="rev-screen rev-study" id="revStudy">
          <div class="rev-study-hdr">
            <button type="button" class="rev-text-btn" id="revQuitBtn">← Quitter</button>
            <span class="rev-session-label" id="revSessionLabel"></span>
          </div>
          <div class="rev-progress-wrap">
            <div class="rev-progress-meta">
              <span id="revProgText">0 / 0</span>
              <span id="revTimer">0:00</span>
            </div>
            <div class="rev-progress-bar"><div class="rev-progress-fill" id="revProgFill"></div></div>
          </div>
          <div class="rev-card-stage" id="revCardStage">
            <div class="rev-slide rev-slide-active" id="revSlide">
              <div class="flash-container rev-container">
                <div class="flash-card rev-card" id="revCard" role="button" tabindex="0" aria-label="Retourner la carte">
                  <div class="flash-front rev-face">
                    <div class="flash-ch" id="revCh"></div>
                    <div class="flash-rang" id="revRang"></div>
                    <div class="flash-q" id="revQ"></div>
                    <div class="flash-hint rev-tap-hint">Toucher pour retourner</div>
                  </div>
                  <div class="flash-back rev-face">
                    <div class="flash-a" id="revA"></div>
                    <div class="flash-tags" id="revTags"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="rev-eval rev-eval-hidden" id="revEval">
            <button type="button" class="rev-eval-btn rev-eval-know" data-rating="know">Je sais</button>
            <button type="button" class="rev-eval-btn rev-eval-review" data-rating="review">À revoir</button>
            <button type="button" class="rev-eval-btn rev-eval-dont" data-rating="dont">Je sais pas</button>
          </div>
        </div>
        <div class="rev-screen rev-results" id="revResults">
          <div class="page-hd rev-results-hd">
            <h1>Session terminée</h1>
            <p id="revResultsSub"></p>
          </div>
          <div class="rev-score-ring" id="revScoreRing">
            <span class="rev-score-pct" id="revScorePct">0%</span>
            <span class="rev-score-lbl">maîtrise</span>
          </div>
          <div class="rev-results-grid" id="revResultsGrid"></div>
          <div class="rev-results-actions">
            <button type="button" class="rev-primary-btn" id="revAgainBtn">Nouvelle session</button>
            <button type="button" class="rev-ghost-btn" id="revHomeBtn">Choisir un chapitre</button>
          </div>
        </div>
      </div>`;
    this.bindEvents();
    this.showSetup();
  },

  bindEvents() {
    const app = document.getElementById('revApp');
    if (!app) return;
    app.addEventListener('click', e => {
      const modeBtn = e.target.closest('.rev-mode-btn');
      if (modeBtn) {
        app.querySelectorAll('.rev-mode-btn').forEach(b => b.classList.remove('active'));
        modeBtn.classList.add('active');
        this.sessionMode = modeBtn.dataset.mode;
        return;
      }
      const chBtn = e.target.closest('.rev-ch-tile');
      if (chBtn) {
        this.startSession(chBtn.dataset.chapter);
        return;
      }
      const evalBtn = e.target.closest('.rev-eval-btn');
      if (evalBtn) {
        this.rateCard(evalBtn.dataset.rating);
        return;
      }
      if (e.target.closest('#revCard')) this.flipCard();
      if (e.target.closest('#revQuitBtn')) this.confirmQuit();
      if (e.target.closest('#revAgainBtn')) this.showSetup();
      if (e.target.closest('#revHomeBtn')) this.showSetup();
    });
    document.addEventListener('keydown', e => {
      if (this.screen !== 'study') return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this.flipCard();
      }
      if (this.flipped && ['1', '2', '3'].includes(e.key)) {
        const map = { '1': 'dont', '2': 'review', '3': 'know' };
        this.rateCard(map[e.key]);
      }
    });
  },

  onViewShow() {
    if (!document.getElementById('revApp')) this.mount();
    if (this.screen === 'study' && this.queue.length) this.renderCurrentCard();
    else this.showSetup();
  },

  showScreen(name) {
    this.screen = name;
    ['revSetup', 'revStudy', 'revResults'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('active', id === 'revSetup' && name === 'setup' || id === 'revStudy' && name === 'study' || id === 'revResults' && name === 'results');
    });
  },

  showSetup() {
    this.showScreen('setup');
    this.renderSetup();
  },

  countByChapter(all) {
    const counts = { mixed: all.length };
    all.forEach(c => {
      counts[c.chapter] = (counts[c.chapter] || 0) + 1;
    });
    return counts;
  },

  renderSetup() {
    const all = getAllFlashcards();
    const counts = this.countByChapter(all);
    const stats = loadRevisionStats();
    const panel = document.getElementById('revStatsPanel');
    if (panel) {
      const mastered = Object.values(stats.byChapter || {}).reduce((s, ch) => s + (ch.know || 0), 0);
      panel.innerHTML = `
        <div class="rev-stat-chip"><span class="rev-stat-n">${stats.totalSeen || 0}</span><span class="rev-stat-l">cartes vues</span></div>
        <div class="rev-stat-chip"><span class="rev-stat-n">${stats.streak || 0}</span><span class="rev-stat-l">jours d'affilée</span></div>
        <div class="rev-stat-chip"><span class="rev-stat-n">${stats.sessions || 0}</span><span class="rev-stat-l">sessions</span></div>
        <div class="rev-stat-chip"><span class="rev-stat-n">${mastered}</span><span class="rev-stat-l">« Je sais »</span></div>`;
    }
    const grid = document.getElementById('revChGrid');
    if (!grid) return;
    const chapters = typeof APP_DATA !== 'undefined' ? APP_DATA.chapters.filter(c => (counts[c.id] || 0) > 0) : [];
    let html = `<button type="button" class="rev-ch-tile rev-ch-mixed" data-chapter="mixed">
      <span class="rev-ch-num">∞</span>
      <span class="rev-ch-name">Mixte</span>
      <span class="rev-ch-count">${counts.mixed} cartes</span>
    </button>`;
    chapters.forEach(ch => {
      const n = counts[ch.id] || 0;
      const chStats = stats.byChapter?.[ch.id] || { seen: 0, know: 0 };
      const mastery = chStats.seen ? Math.round((chStats.know / chStats.seen) * 100) : 0;
      html += `<button type="button" class="rev-ch-tile" data-chapter="${ch.id}">
        <span class="rev-ch-num">${ch.id.replace('ch', '')}</span>
        <span class="rev-ch-name">${this.esc(revisionChapterTitle(ch.id))}</span>
        <span class="rev-ch-count">${n} cartes</span>
        ${chStats.seen ? `<span class="rev-ch-mastery">${mastery}% maîtrise</span>` : ''}
      </button>`;
    });
    grid.innerHTML = html;
  },

  esc(s) {
    if (typeof esc === 'function') return esc(s);
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  },

  sessionSize(poolLen) {
    const want = this.sessionMode === 'quick' ? 5 : 20;
    return Math.max(1, Math.min(want, poolLen, 20));
  },

  buildQueue(chapter) {
    const all = getAllFlashcards();
    let pool = chapter === 'mixed' ? all : all.filter(c => c.chapter === chapter);
    if (!pool.length) return [];
    const srs = loadRevisionSRS();
    const now = Date.now();
    const due = pool.filter(c => (srs[srsKey(c)]?.nextReview || 0) <= now);
    const notDue = pool.filter(c => (srs[srsKey(c)]?.nextReview || 0) > now);
    const size = this.sessionSize(pool.length);
    const picked = [];
    const take = (list, n) => shuffleArr(list).slice(0, n);
    picked.push(...take(due, Math.min(due.length, Math.ceil(size * 0.6))));
    const remain = size - picked.length;
    if (remain > 0) {
      const rest = notDue.filter(c => !picked.includes(c));
      picked.push(...take(rest.length ? rest : pool.filter(c => !picked.includes(c)), remain));
    }
    return shuffleArr(picked.slice(0, size));
  },

  startSession(chapter) {
    this.chapter = chapter;
    this.queue = this.buildQueue(chapter);
    if (!this.queue.length) {
      if (typeof showToast === 'function') showToast('Aucune carte pour ce chapitre');
      return;
    }
    this.index = 0;
    this.startedAt = Date.now();
    this.results = { know: 0, review: 0, dont: 0, requeued: 0 };
    this.sessionRepeats = {};
    this.flipped = false;
    this.timerIv = setInterval(() => this.updateTimer(), 1000);
    const label = document.getElementById('revSessionLabel');
    if (label) {
      label.textContent = chapter === 'mixed' ? 'Mixte · ' + (this.sessionMode === 'quick' ? '5' : '20') : revisionChapterTitle(chapter);
    }
    this.showScreen('study');
    this.renderCurrentCard(true);
  },

  updateTimer() {
    const el = document.getElementById('revTimer');
    if (!el || !this.startedAt) return;
    const s = Math.floor((Date.now() - this.startedAt) / 1000);
    const m = Math.floor(s / 60);
    const r = s % 60;
    el.textContent = m + ':' + String(r).padStart(2, '0');
  },

  renderCurrentCard(initial) {
    const card = this.queue[this.index];
    const cardEl = document.getElementById('revCard');
    const slide = document.getElementById('revSlide');
    if (!card || !cardEl) return;

    const paint = () => {
      cardEl.classList.remove('flipped');
      this.flipped = false;
      cardEl.className = 'flash-card rev-card ' + (card.rang === 'A' ? 'rev-rang-a' : 'rev-rang-b');
      document.getElementById('revCh').textContent = revisionChapterTitle(card.chapter);
      const r = document.getElementById('revRang');
      r.textContent = 'Rang ' + card.rang;
      r.className = 'flash-rang ' + (card.rang === 'A' ? 'rang-a' : 'rang-b');
      document.getElementById('revQ').textContent = card.question;
      document.getElementById('revA').textContent = card.answer;
      document.getElementById('revTags').innerHTML = (card.tags || []).map(t => `<span class="tag">${this.esc(t)}</span>`).join('');
      const total = this.queue.length;
      document.getElementById('revProgText').textContent = `${this.index + 1} / ${total}`;
      const fill = document.getElementById('revProgFill');
      if (fill) fill.style.width = `${((this.index + 1) / total) * 100}%`;
      document.getElementById('revEval')?.classList.add('rev-eval-hidden');
    };

    if (initial || !slide) {
      paint();
      return;
    }
    if (this.animating) return;
    this.animating = true;
    slide.classList.add('rev-slide-exit');
    setTimeout(() => {
      slide.classList.remove('rev-slide-exit');
      slide.classList.add('rev-slide-enter');
      paint();
      requestAnimationFrame(() => {
        slide.classList.remove('rev-slide-enter');
        this.animating = false;
      });
    }, 280);
  },

  flipCard() {
    if (this.screen !== 'study' || this.animating) return;
    const cardEl = document.getElementById('revCard');
    if (!cardEl) return;
    this.flipped = !this.flipped;
    cardEl.classList.toggle('flipped', this.flipped);
    const evalEl = document.getElementById('revEval');
    if (evalEl) evalEl.classList.toggle('rev-eval-hidden', !this.flipped);
  },

  rateCard(rating) {
    if (!this.flipped) return;
    const card = this.queue[this.index];
    if (!card) return;
    const map = { know: 'know', review: 'review', dont: 'dont' };
    const r = map[rating] || 'review';
    applySRSRating(card, r);
    if (r === 'know') this.results.know++;
    else if (r === 'review') this.results.review++;
    else this.results.dont++;

    this.bumpStats(card, r);

    if (r === 'dont') {
      const k = srsKey(card);
      const times = (this.sessionRepeats[k] || 0) + 1;
      this.sessionRepeats[k] = times;
      if (times < 2) {
        this.queue.push(card);
        this.results.requeued++;
      }
    }

    if (this.index >= this.queue.length - 1) this.finishSession();
    else {
      this.index++;
      this.renderCurrentCard();
    }
  },

  bumpStats(card, rating) {
    const stats = loadRevisionStats();
    stats.totalSeen = (stats.totalSeen || 0) + 1;
    if (!stats.byChapter) stats.byChapter = {};
    const ch = card.chapter || 'mixed';
    if (!stats.byChapter[ch]) stats.byChapter[ch] = { seen: 0, know: 0, review: 0, dont: 0 };
    stats.byChapter[ch].seen++;
    if (rating === 'know') stats.byChapter[ch].know++;
    else if (rating === 'review') stats.byChapter[ch].review++;
    else stats.byChapter[ch].dont++;
    saveRevisionStats(stats);
  },

  finishSession() {
    clearInterval(this.timerIv);
    const elapsed = Date.now() - this.startedAt;
    const total = this.results.know + this.results.review + this.results.dont;
    const pct = total ? Math.round((this.results.know / total) * 100) : 0;
    const stats = loadRevisionStats();
    stats.sessions = (stats.sessions || 0) + 1;
    const today = new Date().toDateString();
    if (stats.lastSessionDay !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      stats.streak = stats.lastSessionDay === yesterday.toDateString() ? (stats.streak || 0) + 1 : 1;
      stats.lastSessionDay = today;
    }
    saveRevisionStats(stats);

    document.getElementById('revScorePct').textContent = pct + '%';
    document.getElementById('revResultsSub').textContent =
      revisionChapterTitle(this.chapter === 'mixed' ? '' : this.chapter) || 'Session mixte';
    const sec = Math.floor(elapsed / 1000);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    document.getElementById('revResultsGrid').innerHTML = `
      <div class="rev-result-item"><span class="rev-result-val">${this.formatTime(m, s)}</span><span class="rev-result-lbl">Durée</span></div>
      <div class="rev-result-item rev-result-good"><span class="rev-result-val">${this.results.know}</span><span class="rev-result-lbl">Maîtrisées</span></div>
      <div class="rev-result-item rev-result-warn"><span class="rev-result-val">${this.results.review}</span><span class="rev-result-lbl">À revoir</span></div>
      <div class="rev-result-item rev-result-bad"><span class="rev-result-val">${this.results.dont}</span><span class="rev-result-lbl">À retravailler</span></div>
      <div class="rev-result-item"><span class="rev-result-val">${this.queue.length}</span><span class="rev-result-lbl">Cartes passées</span></div>`;
    this.showScreen('results');
  },

  formatTime(m, s) {
    return m + ' min ' + s + ' s';
  },

  confirmQuit() {
    if (confirm('Quitter la session en cours ?')) {
      clearInterval(this.timerIv);
      this.showSetup();
    }
  }
};

(function bootRevisionMode() {
  function install() {
    RevisionMode.mount();
    window.renderFlashcard = function () { RevisionMode.onViewShow(); };
    window.shuffleFlash = function () { RevisionMode.showSetup(); };
    window.filterFlash = function () {};
    window.nextFlash = function () {};
    window.prevFlash = function () {};
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(install, 0));
  } else {
    setTimeout(install, 0);
  }
})();

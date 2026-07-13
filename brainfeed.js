/* ═══════════════════════════════════════════════════════════════
   BrainFeed 2.0 — Feed addictif type Reels pour révision gériatrie
   6 formats uniques · swipe · combo · confetti
   ═══════════════════════════════════════════════════════════════ */

const BrainFeed = (() => {
  let deck = [];
  let idx = 0;
  let streak = 0;
  let points = 0;
  let dailyDone = 0;
  let combo = 0;
  let quizCombo = 0;
  let activeSession = 'mix';
  const DAILY_GOAL = 20;
  const FEED_LENGTH = 40;
  const COMBO_BONUS_AT = 5;
  const COMBO_CONFETTI_AT = 10;
  const ACHIEVEMENTS = [
    { id: 'first_card', icon: '🎯', title: 'Première carte', desc: '1 carte validée', check: (s) => (s.totalCards || 0) >= 1 },
    { id: 'streak_3', icon: '🔥', title: 'En feu', desc: '3 jours de suite', check: (s) => (s.streak || 0) >= 3 },
    { id: 'streak_10', icon: '💥', title: 'Inferno', desc: '10 jours de suite', check: (s) => (s.streak || 0) >= 10 },
    { id: 'cards_50', icon: '📚', title: 'Demi-cent', desc: '50 cartes au total', check: (s) => (s.totalCards || 0) >= 50 },
    { id: 'cards_100', icon: '🏅', title: 'Centurion', desc: '100 cartes au total', check: (s) => (s.totalCards || 0) >= 100 },
    { id: 'combo_10', icon: '⚡', title: 'Combo x10', desc: '10 bonnes réponses d\'affilée', check: (s) => s._sessionCombo10 },
    { id: 'daily_goal', icon: '🏆', title: 'Objectif jour', desc: '20 cartes utiles aujourd\'hui', check: (s) => (s.dailyDone || 0) >= DAILY_GOAL }
  ];
  let observer = null;
  let audioCtx = null;
  let sessionCombo10Unlocked = false;
  let renderedRange = { start: 0, end: 0 };
  const BATCH_SIZE = 6;
  let activeTimers = new Map();
  let completedCardIds = new Set();
  let feedScrollHandler = null;

  const TYPE_RATIO = {
    // Le feed est une séance de révision, pas un mélange de citations,
    // chiffres isolés ou cartes OCR. Priorité aux décisions cliniques.
    memo_jour: 0.15,
    cas_choc: 0.22,
    quiz_flash: 0.32,
    chiffre_cle: 0,
    citation: 0,
    piege_exam: 0.16,
    visual: 0.15,
    flash: 0,
    synthesis: 0,
    case: 0,
    reco: 0.00
  };

  const CITATIONS = [
    { text: '« Chez le sujet âgé, tout symptôme atypique doit faire évoquer une infection. »', author: 'Gériatrie clinique' },
    { text: '« Une chute n\'est jamais un accident : c\'est toujours un symptôme. »', author: 'HAS' },
    { text: '« Le bon médicament, à la bonne dose, pour le bon patient, au bon moment. »', author: 'Appropriation gériatrique' },
    { text: '« La polymédication est le plus fréquent des facteurs de risque iatrogène. »', author: 'SFGG' },
    { text: '« Le delirium, urgence médicale masquée, a toujours une cause. »', author: 'CAM' },
    { text: '« Dépister la dépression, c\'est prévenir la démence. »', author: 'GDS-15' },
    { text: '« La prévention de la perte d\'autonomie passe par la préservation de l\'activité physique. »', author: 'PAQS' },
    { text: '« La nutrition est un médicament : il faut la prescrire et la réévaluer. »', author: 'MNA' }
  ];

  const CHIFFRES_CLES = [
    { value: 30, unit: '%', line: '... % des personnes de 65 ans et plus chutent au moins une fois par an', source: 'HAS' },
    { value: 15, unit: '%', line: '... % des personnes de 65 ans et plus ont une dépression non diagnostiquée', source: 'GDS-15' },
    { value: 3, unit: ' critères', line: 'Nombre de critères de Fried : au moins ... critères = syndrome de fragilité', source: 'Fried' },
    { value: 0.8, unit: ' m/s', line: 'Seuil de vitesse de marche en dessous duquel on suspecte la fragilité : ... m/s', source: 'Fried' },
    { value: 20, unit: ' s', line: 'Timed Up and Go : plus de ... secondes = risque de chute élevé', source: 'CNEG, chapitre 12' },
    { value: 24, unit: '/30', line: 'Seuil MMSE interprété comme « normal » chez un sujet jeune instruit : ... /30', source: 'MMSE' },
    { value: 5, unit: '/15', line: 'Seuil GDS-15 à partir duquel on dépiste une dépression : ... /15', source: 'Yesavage' },
    { value: 19, unit: '/28', line: 'Score Tinetti (POMA) inférieur à ... = risque élevé de chute', source: 'Tinetti' },
    { value: 17, unit: '/30', line: 'Seuil MNA entre dénutrition et risque de dénutrition : ... /30', source: 'MNA' },
    { value: 5, unit: ' médicaments', line: 'À partir de ... médicaments quotidiens, on parle de polymédication', source: 'SFGG' },
    { value: 30, unit: '%', line: 'Environ ... % des personnes de 65 ans et plus présentent une polymédication', source: 'Institut de la longévité' },
    { value: 50, unit: '%', line: '... % des personnes de 65 ans et plus ont au moins deux affections chroniques', source: 'Comorbidité' },
    { value: 20, unit: '%', line: 'Environ ... % des personnes de 85 ans et plus ont un trouble cognitif déclaré', source: 'Démographie' },
    { value: 1, unit: ' mois', line: 'Perte de poids significative si ≥ 5 % en ... mois ou ≥ 10 % en 6 mois', source: 'Dénutrition' },
    { value: 60, unit: ' à 72 g/j', line: 'Apport protéique recommandé : 1–1,2 g/kg/j, soit environ ... g/j au minimum pour un sujet de 60 kg', source: 'Nutrition' }
  ];

  const PIEGES_EXAM = [
    { trap: 'Dépression vs démence', explain: 'Une dépression peut imiter une démence (pseudo-démence). Utiliser GDS-15 et rechercher une réversibilité avant d\'attribuer un diagnostic de démence.' },
    { trap: 'Delirium = agitation seulement', explain: 'Le delirium peut être hypoactif (apathie, somnolence) dans 50 % des cas. Le CAM reste l\'outil de référence.' },
    { trap: 'Benzodiazépine dans le delirium', explain: 'Les BZD aggravent confusion et chutes. Privilégier la cause, l\'environnement, et les antipsychotiques de façon très brève si agitation dangereuse.' },
    { trap: 'MMS sans correction âge/éducation', explain: 'Le MMSE brut n\'est pas interprétable seul. Toujours pondérer selon l\'âge, la scolarité et le niveau socioculturel.' },
    { trap: 'Chute = accident', explain: 'Toute chute mérite un bilan multifactoriel : orthostatisme, vision, psychotropes, démarche (TUG/Tinetti), environnement.' },
    { trap: 'Douleur sous-estimée', explain: 'En cas d\'aphasie ou de trouble cognitif, utiliser l\'ECPA (échelle comportementale) plutôt que l\'EVA verbale.' },
    { trap: 'Arrêt brutal des psychotropes', explain: 'Le sevrage doit être progressif. L\'arrêt brutal peut déclencher delirium, insomnie sévère, agitation ou convulsions.' },
    { trap: 'Albumine basse = dénutrition', explain: 'L\'albuminémie est un marqueur d\'inflammation et d\'hydratation. Une hypoalbuminémie n\'est pas un diagnostic de dénutrition à elle seule.' },
    { trap: 'Polymédication = seulement ≥ 5 médicaments', explain: 'Au-delà de 5 médicaments, le risque d\'interactions et d\'effets indésirables augmente exponentiellement. Penser déprescription.' },
    { trap: 'Autonomie préservée = pas de bilan gériatrique', explain: 'Même un GIR 5-6 nécessite un dépistage de la fragilité, du risque de chute, de la dénutrition et de la dépression.' },
    { trap: 'Sédation profonde = euthanasie', explain: 'La SPCMD vise à soulager une souffrance réfractaire. Elle ne vise pas à provoquer la mort.' },
    { trap: 'AOMI = aspirine systématique', explain: 'Le bénéfice de l\'aspirine secondaire chez le très grand âge doit être pondéré par le risque hémorragique. La balance bénéfice/risque est individuelle.' }
  ];

  // Banque éditorialisée : le feed ne transforme plus des extraits de cours en QCM.
  // Chaque réponse erronée correspond au même problème clinique que la bonne réponse.
  const CURATED_QUIZZES = [
    { id:'bouchon-3', chapter:'ch2', question:'Dans le modèle 1 + 2 + 3 de Bouchon, que représente le facteur 3 ?', correct:'Un facteur précipitant aigu, souvent réversible et à rechercher en priorité.', wrong:['Le vieillissement physiologique de l’organe.', 'La maladie chronique déjà connue.', 'Le niveau d’autonomie antérieur.'], explanation:'Le raisonnement gériatrique distingue le vieillissement (1), les comorbidités (2) et le stress aigu décompensant (3). Identifier et corriger ce dernier est souvent le levier immédiat.' },
    { id:'cam', chapter:'ch11', question:'Quel outil valide le dépistage d’un delirium au lit du patient ?', correct:'La CAM : début aigu et fluctuant, trouble attentionnel, avec pensée désorganisée ou vigilance altérée.', wrong:['Le MMS seul, interprété sans données antérieures.', 'La GDS-15, centrée sur les symptômes dépressifs.', 'Le Tinetti, qui évalue l’équilibre et la marche.'], explanation:'La CAM est un outil de dépistage du syndrome confusionnel aigu. Un MMS ne permet pas, à lui seul, de distinguer un delirium d’un trouble cognitif chronique.' },
    { id:'delirium-bzd', chapter:'ch11', question:'Quelle attitude adopter devant un delirium avec agitation sans sevrage alcoolique ?', correct:'Chercher et traiter la cause ; éviter les benzodiazépines qui aggravent confusion et risque de chute.', wrong:['Prescrire une benzodiazépine systématiquement pour obtenir le sommeil.', 'Augmenter les anticholinergiques pour diminuer l’agitation.', 'Conclure à une démence irréversible sans bilan étiologique.'], explanation:'Le delirium est une urgence diagnostique. Les benzodiazépines sont surtout indiquées dans le sevrage alcoolique ou des indications très ciblées.' },
    { id:'hypoactive', chapter:'ch11', question:'Pourquoi un delirium hypoactif doit-il être activement recherché ?', correct:'Il est peu bruyant mais associé à un risque de retard diagnostique et à un mauvais pronostic.', wrong:['Il correspond toujours à une dépression chronique.', 'Il ne nécessite aucune recherche de cause aiguë.', 'Il confirme une maladie d’Alzheimer à début brutal.'], explanation:'Somnolence, retrait ou apathie peuvent révéler un delirium hypoactif. Il faut rechercher infection, douleur, fécalome, globe, iatrogénie ou trouble métabolique.' },
    { id:'orthostatic', chapter:'ch12', question:'Quel examen simple fait partie du bilan initial après une chute ?', correct:'La mesure de la pression artérielle couchée puis debout, à la recherche d’une hypotension orthostatique.', wrong:['Une épreuve d’effort maximale chez tout patient.', 'Une contention systématique avant toute évaluation.', 'Un scanner cérébral systématique en l’absence de signe d’alerte.'], explanation:'Une chute est un symptôme. L’orthostatisme, les médicaments, la vision, la marche et l’environnement doivent être évalués.' },
    { id:'tug', chapter:'ch12', question:'Quel résultat du Timed Up and Go (TUG) alerte sur un risque élevé de chute ?', correct:'Un temps supérieur à 20 secondes.', wrong:['Un temps inférieur à 10 secondes.', 'Un temps de 5 secondes exactement.', 'Le TUG ne renseigne jamais sur la mobilité.'], explanation:'Le TUG explore le lever, la marche, le demi-tour et le retour assis. Un temps prolongé justifie une évaluation multifactorielle de la chute.' },
    { id:'tinetti', chapter:'ch12', question:'Quel score Tinetti évoque un risque élevé de chute ?', correct:'Un score inférieur à 19 sur 28.', wrong:['Un score supérieur à 26 sur 28.', 'Un score de 28 sur 28.', 'Le Tinetti ne comporte aucun seuil de risque.'], explanation:'Le Tinetti évalue équilibre et marche. Un score bas doit conduire à rechercher des facteurs corrigibles et à proposer une prise en charge adaptée.' },
    { id:'fried', chapter:'ch1', question:'À partir de combien de critères de Fried parle-t-on de fragilité ?', correct:'Au moins 3 critères sur 5.', wrong:['1 critère sur 5.', '2 critères sur 5.', '5 critères sont nécessaires pour toute pré-fragilité.'], explanation:'Les critères sont perte de poids involontaire, fatigue, faible activité, lenteur de marche et faiblesse musculaire. Un ou deux critères définissent la pré-fragilité.' },
    { id:'mna', chapter:'ch14', question:'Comment interpréter un MNA-SF à 7/14 ?', correct:'Il évoque une dénutrition et impose une évaluation et une prise en charge nutritionnelle.', wrong:['Il correspond à un statut nutritionnel normal.', 'Il élimine une sarcopénie.', 'Il indique seulement un surpoids.'], explanation:'Pour le MNA-SF : 12–14 = statut normal, 8–11 = risque de dénutrition et ≤ 7 = dénutrition.' },
    { id:'adl-iadl', chapter:'ch3', question:'Quel couple d’échelles permet de distinguer autonomie de base et autonomie instrumentale ?', correct:'ADL de Katz pour les activités de base et IADL de Lawton pour les activités instrumentales.', wrong:['MMS pour l’autonomie de base et CAM pour l’autonomie instrumentale.', 'GDS-15 pour l’autonomie de base et MNA pour l’autonomie instrumentale.', 'Tinetti pour l’autonomie de base et TUG pour l’autonomie instrumentale.'], explanation:'Le MMS explore la cognition, pas l’autonomie. Les ADL et IADL objectivent le retentissement fonctionnel au quotidien.' },
    { id:'ecpa', chapter:'ch8', question:'Quelle échelle privilégier pour évaluer la douleur chez un patient non communicant ?', correct:'L’ECPA, fondée sur l’observation comportementale.', wrong:['L’EVA verbale uniquement.', 'Le MMS, qui mesure la mémoire.', 'La GDS-15, qui dépiste la dépression.'], explanation:'La douleur est souvent sous-déclarée chez la personne âgée. Une échelle comportementale est adaptée en cas de troubles cognitifs ou de communication.' },
    { id:'braden', chapter:'ch13', question:'Comment évolue le risque d’escarre sur l’échelle de Braden ?', correct:'Il augmente lorsque le score diminue.', wrong:['Il augmente lorsque le score augmente.', 'Il est indépendant de la mobilité et de la nutrition.', 'Il ne concerne que les patients en réanimation.'], explanation:'Braden prend notamment en compte mobilité, activité, humidité, nutrition, friction et cisaillement. Un score bas impose des mesures préventives.' },
    { id:'osteoporosis', chapter:'ch6', question:'Quel T-score définit l’ostéoporose densitométrique ?', correct:'Un T-score inférieur ou égal à −2,5.', wrong:['Un T-score supérieur à +2,5.', 'Un T-score compris entre 0 et +1.', 'Un T-score supérieur ou égal à −1.'], explanation:'L’ostéopénie correspond à un T-score entre −1 et −2,5. Le contexte fracturaire et les facteurs de risque orientent la prise en charge.' },
    { id:'diappers', chapter:'ch15', question:'Devant une incontinence urinaire récente, quelle première démarche est justifiée ?', correct:'Rechercher une cause transitoire et réversible, notamment selon le mémo DIAPPERS.', wrong:['Poser d’emblée une sonde à demeure au long cours.', 'Considérer l’incontinence comme normale avec l’âge.', 'Prescrire un anticholinergique sans évaluation clinique.'], explanation:'Une incontinence aiguë peut être liée à une infection, un médicament, une constipation, une rétention, une confusion ou un handicap. La cause doit être recherchée avant l’étiquetage chronique.' },
    { id:'renal-prescription', chapter:'ch16', question:'Quel réflexe de prescription est indispensable chez une personne âgée ?', correct:'Adapter la dose des médicaments à la fonction rénale et réévaluer régulièrement le rapport bénéfice-risque.', wrong:['Conserver les doses adultes sans tenir compte de la fonction rénale.', 'Multiplier les traitements pour chaque symptôme isolé.', 'Arrêter brutalement tous les psychotropes.'], explanation:'La réserve rénale et la polymédication exposent à l’iatrogénie. Toute prescription doit être revue, hiérarchisée et surveillée.' },
    { id:'gds', chapter:'ch10', question:'Quel score GDS-15 doit faire évoquer une dépression ?', correct:'Un score d’au moins 5 sur 15.', wrong:['Un score de 0 sur 15.', 'Un score de 1 sur 15 sans symptôme associé.', 'La GDS-15 ne sert pas au dépistage.'], explanation:'La GDS-15 dépiste les symptômes dépressifs. L’interprétation clinique doit tenir compte du contexte, du deuil, des comorbidités et du risque suicidaire.' },
    { id:'palliative', chapter:'ch17', question:'Quel est l’objectif de la sédation en situation palliative ?', correct:'Soulager une souffrance réfractaire, sans intention de provoquer la mort.', wrong:['Provoquer le décès lorsque la demande familiale est forte.', 'Remplacer toute évaluation de la douleur et de l’anxiété.', 'Éviter systématiquement la discussion collégiale.'], explanation:'La décision suit le cadre légal et clinique : symptôme réfractaire, proportionnalité, information, traçabilité et décision collégiale selon la situation.' },
    { id:'lewy', chapter:'ch9', question:'Pourquoi faut-il être prudent avec les neuroleptiques dans une démence à corps de Lewy ?', correct:'Une hypersensibilité peut entraîner une aggravation neurologique et des effets indésirables sévères.', wrong:['Ils améliorent toujours la cognition à long terme.', 'Ils sont obligatoires dès le diagnostic.', 'Ils n’ont aucun effet sur la marche ou la vigilance.'], explanation:'Les hallucinations visuelles et les fluctuations cognitives évoquent une démence à corps de Lewy. Toute prescription psychotrope doit être très prudente.' },
    { id:'bedrest', chapter:'ch13', question:'Quelle mesure prévient le mieux le syndrome d’immobilisation ?', correct:'La mobilisation et la réadaptation précoces, dès que l’état clinique le permet.', wrong:['Le repos strict prolongé pour éviter toute chute.', 'La contention au lit comme mesure de première intention.', 'La suppression de toute aide technique.'], explanation:'L’alitement favorise perte musculaire, escarres, thrombose, confusion et perte d’autonomie. La prévention repose sur mobilisation, soins de peau, nutrition et évaluation quotidienne.' },
    { id:'presbyacousie', chapter:'ch5', question:'Quelle proposition décrit le mieux la presbyacousie ?', correct:'Une baisse progressive, bilatérale et symétrique de l’audition, avec indication d’appareillage auditif si retentissement.', wrong:['Une surdité unilatérale brutale à traiter comme une urgence vasculaire.', 'Une douleur aiguë d’oreille avec fièvre.', 'Une perte auditive forcément due à un bouchon de cérumen.'], explanation:'La presbyacousie est fréquente et favorise isolement, troubles de communication et déclin fonctionnel. Un dépistage et un appareillage précoce sont utiles.' },
    { id:'pseudodementia', chapter:'ch10', question:'Pourquoi une dépression peut-elle imiter un trouble neurocognitif ?', correct:'Elle peut donner une plainte cognitive et un ralentissement réversibles après prise en charge adaptée.', wrong:['Elle entraîne toujours un delirium aigu.', 'Elle exclut toute évaluation cognitive.', 'Elle rend la GDS-15 inutile.'], explanation:'Face à une plainte cognitive, rechercher une dépression et d’autres causes réversibles avant de conclure à une maladie neurodégénérative.' },
    { id:'polypharmacy', chapter:'ch16', question:'À partir de quel nombre de médicaments parle-t-on habituellement de polymédication ?', correct:'Cinq médicaments ou plus pris quotidiennement.', wrong:['Deux médicaments ou plus.', 'Uniquement dix médicaments ou plus.', 'La polymédication ne dépend jamais du nombre de traitements.'], explanation:'Au-delà de cinq médicaments, le risque d’interactions et d’effets indésirables augmente. La pertinence de chaque traitement doit être réévaluée.' },
    { id:'delirium-cause', chapter:'ch11', question:'Quel facteur doit être recherché sans délai devant un delirium récent ?', correct:'Une cause aiguë réversible : infection, douleur, globe, fécalome, iatrogénie ou trouble métabolique.', wrong:['Seulement l’âge chronologique du patient.', 'Uniquement les antécédents de démence.', 'Une décision d’institutionnalisation immédiate.'], explanation:'Un delirium récent a toujours une cause à rechercher. Les présentations sont souvent atypiques chez la personne âgée.' },
    { id:'gir', chapter:'ch3', question:'Que mesure principalement le GIR ?', correct:'Le niveau de dépendance pour les actes de la vie quotidienne afin d’orienter notamment l’APA.', wrong:['La sévérité d’une dépression.', 'Le risque de dénutrition.', 'Le risque hémorragique sous anticoagulant.'], explanation:'La grille AGGIR classe la perte d’autonomie de GIR 1 à GIR 6. Elle ne remplace pas l’évaluation clinique globale.' }
  ];

  // Cartes volontairement courtes, vérifiées et orientées vers une décision.
  // Elles remplacent les extraits OCR et les pièges catégoriques dans Pulse.
  const DAILY_MEMOS = [
    { id:'bouchon', chapter:'ch2', question:'Devant une décompensation gériatrique, quel raisonnement résume le modèle 1 + 2 + 3 ?', mnemonic:'1 + 2 + 3', detail:'1 : vieillissement et baisse de réserve. 2 : maladies chroniques. 3 : facteur aigu précipitant. Le facteur 3 est souvent le premier levier à identifier et corriger.' },
    { id:'diappers', chapter:'ch15', question:'Quel mémo aide à rechercher une cause réversible d’incontinence récente ?', mnemonic:'DIAPPERS', detail:'Delirium, Infection, Atrophie, Pharmaceutiques, Psychologiques, Excès de diurèse, Restriction de mobilité, Selles impactées. Le mémo guide l’interrogatoire ; il ne remplace pas l’examen clinique.' },
    { id:'chute', chapter:'ch12', question:'Quels quatre axes garder en tête après une chute ?', mnemonic:'CAUSES + CONSÉQUENCES', detail:'Rechercher circonstance et gravité, hypotension orthostatique et médicaments, marche/vision/cognition, puis environnement. Une chute est un symptôme à expliquer.' },
    { id:'eggs', chapter:'ch3', question:'Quelles dimensions doit couvrir une évaluation gériatrique globale ?', mnemonic:'MÉDICAL · FONCTIONNEL · COGNITIF · SOCIAL', detail:'Elle articule maladies et médicaments, autonomie, cognition/humeur, nutrition/mobilité et contexte social. Le résultat doit déboucher sur un plan de soins individualisé.' },
    { id:'delirium', chapter:'ch11', question:'Quel réflexe adopter devant une confusion aiguë ?', mnemonic:'RECONNAÎTRE → CHERCHER → CORRIGER', detail:'Confirmer le caractère aigu et fluctuant avec atteinte attentionnelle, rechercher une cause réversible et traiter le facteur précipitant sans banaliser une forme hypoactive.' }
  ];

  const CURATED_PIEGES = [
    { id:'chute-symptome', chapter:'ch12', trap:'« C’est seulement une chute accidentelle. »', explain:'Une chute est un symptôme. Rechercher les circonstances, une gravité immédiate, l’orthostatisme, la iatrogénie, la marche, la vision et l’environnement.' },
    { id:'delirium-hypoactif', chapter:'ch11', trap:'« Un delirium est forcément agité. »', explain:'Une forme hypoactive est fréquente et discrète : retrait, somnolence ou ralentissement peuvent traduire une confusion aiguë et justifient la même recherche étiologique.' },
    { id:'mms-isole', chapter:'ch9', trap:'« Un MMS isolé pose le diagnostic de démence. »', explain:'Un score cognitif s’interprète avec le niveau antérieur, l’autonomie, l’examen clinique et la recherche de causes réversibles. Il ne suffit pas à lui seul.' },
    { id:'albumine', chapter:'ch14', trap:'« Une albumine basse suffit à diagnostiquer une dénutrition. »', explain:'L’albumine est influencée notamment par l’inflammation et l’hydratation. Le diagnostic nutritionnel repose sur une évaluation clinique, pondérale, des apports et des critères validés.' },
    { id:'douleur', chapter:'ch8', trap:'« Sans plainte verbale, il n’y a pas de douleur. »', explain:'Chez une personne non communicante, observer le comportement avec une échelle adaptée comme l’ECPA et réévaluer après une intervention antalgique.' },
    { id:'prescription', chapter:'ch16', trap:'« Une ordonnance ancienne reste adaptée si elle est tolérée. »', explain:'Toute prescription doit être régulièrement réévaluée : indication, bénéfice attendu, risque iatrogène, fonction rénale, interactions et possibilité de simplification.' },
    { id:'contention', chapter:'ch13', trap:'« La contention prévient simplement les chutes. »', explain:'Elle expose à des risques physiques et psychiques. Chercher d’abord les causes, la surveillance, les adaptations environnementales et les alternatives individualisées.' },
    { id:'depression', chapter:'ch10', trap:'« Les troubles cognitifs nouveaux sont forcément neurodégénératifs. »', explain:'Dépression, delirium, médicaments, troubles sensoriels et causes métaboliques peuvent contribuer à une plainte cognitive. Leur recherche fait partie de l’évaluation.' }
  ];

  const EDUCATIONAL_DIAGRAMS = [
    { id:'delirium', chapter:'ch11', title:'Delirium : causes à rechercher', question:'Devant une confusion aiguë, quelles causes réversibles veux-tu vérifier sans tarder ?', answer:'Confirmer le caractère aigu et fluctuant, puis rechercher notamment infection, douleur, globe/rétention, fécalome, iatrogénie et désordre métabolique. Prioriser selon les constantes et l’examen clinique.', kind:'delirium' },
    { id:'fall', chapter:'ch12', title:'Chute : modèle multifactoriel', question:'Après une chute, quels grands domaines doivent être explorés ?', answer:'Articuler facteurs intrinsèques, médicaments, situation aiguë et environnement. Évaluer aussi les conséquences traumatiques, fonctionnelles et la peur de rechuter.', kind:'fall' },
    { id:'nutrition', chapter:'ch14', title:'Dénutrition et sarcopénie', question:'Comment se met en place le cercle dénutrition–sarcopénie ?', answer:'Baisse des apports, inflammation et maladie aiguë favorisent perte musculaire, faiblesse, baisse de mobilité et dépendance ; chacune peut à son tour aggraver les apports. Le dépistage précoce permet d’interrompre le cercle.', kind:'nutrition' }
  ];

  function loadSRS() {
    try { return JSON.parse(localStorage.getItem('bf_srs')) || {}; } catch { return {}; }
  }
  function saveSRS(srs) { localStorage.setItem('bf_srs', JSON.stringify(srs)); }
  function loadStats() {
    try {
      return JSON.parse(localStorage.getItem('bf_stats')) || { streak: 0, points: 0, lastDay: '', dailyDone: 0, totalCards: 0 };
    } catch {
      return { streak: 0, points: 0, lastDay: '', dailyDone: 0, totalCards: 0 };
    }
  }
  function saveStats(s) { localStorage.setItem('bf_stats', JSON.stringify(s)); }
  function loadAchievements() {
    try { return JSON.parse(localStorage.getItem('bf_achievements')) || []; } catch { return []; }
  }
  function saveAchievements(ids) { localStorage.setItem('bf_achievements', JSON.stringify(ids)); }

  function playSound(kind) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      const t = audioCtx.currentTime;
      if (kind === 'ding') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, t);
        osc.frequency.exponentialRampToValueAtTime(1320, t + 0.08);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc.start(t);
        osc.stop(t + 0.25);
      } else if (kind === 'buzz') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(180, t);
        osc.frequency.exponentialRampToValueAtTime(90, t + 0.15);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
        osc.start(t);
        osc.stop(t + 0.2);
      }
    } catch (_) { /* placeholder — no audio hardware */ }
  }
  function loadFavs() {
    try { return JSON.parse(localStorage.getItem('bf_favs')) || []; } catch { return []; }
  }
  function saveFavs(f) { localStorage.setItem('bf_favs', JSON.stringify(f)); }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickN(pool, n) {
    return shuffle(pool).slice(0, Math.min(n, pool.length));
  }

  function hashDay(seed) {
    const d = new Date().toDateString();
    let h = 0;
    const s = d + seed;
    for (let i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i) | 0;
    return Math.abs(h);
  }

  function motionOK() {
    return !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function haptic(pattern = 8) {
    try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (_) {}
  }

  function dayPick(pool, n, salt = '') {
    return [...pool]
      .sort((a, b) => hashDay(`${salt}|${a.id || a.question || ''}`) - hashDay(`${salt}|${b.id || b.question || ''}`))
      .slice(0, Math.min(n, pool.length));
  }

  function hasUnsafeGlycemiaMismatch(value) {
    const text = String(value || '').replace(/,/g, '.');
    if (!/hypoglyc|sucre oral|glucose 30\s*%|\bG30\b/i.test(text)) return false;
    return [...text.matchAll(/(\d+(?:\.\d+)?)\s*g\s*\/\s*l/gi)]
      .some(match => Number(match[1]) > 0.70);
  }

  function getAllFlash() {
    if (typeof collectAllFlashcards === 'function') {
      return collectAllFlashcards().filter(c => c && (c.question || c.q));
    }
    const all = [];
    const push = (arr) => { if (Array.isArray(arr) && arr.length) all.push(...arr); };
    push(typeof FLASHCARDS !== 'undefined' ? FLASHCARDS : null);
    push(typeof FLASHCARDS_A !== 'undefined' ? FLASHCARDS_A : null);
    push(typeof FLASHCARDS_B !== 'undefined' ? FLASHCARDS_B : null);
    push(typeof FLASHCARDS_C !== 'undefined' ? FLASHCARDS_C : null);
    push(typeof FLASHCARDS_MEMOS !== 'undefined' ? FLASHCARDS_MEMOS : null);
    push(typeof FLASHCARDS_EXPANDED !== 'undefined' ? FLASHCARDS_EXPANDED : null);
    // Legacy OCR-derived chapter excerpts are intentionally excluded: they are
    // traceable in the bundle but are not editorial flashcards.
    push(typeof MEGA_FLASHCARDS !== 'undefined' ? MEGA_FLASHCARDS : null);
    push(typeof EVC_FLASHCARDS !== 'undefined' ? EVC_FLASHCARDS : null);
    push(typeof MEGA_FLASHCARDS_2 !== 'undefined' ? MEGA_FLASHCARDS_2 : null);
    push(typeof MEGA_FLASHCARDS_3 !== 'undefined' ? MEGA_FLASHCARDS_3 : null);
    push(typeof MEGA_FLASHCARDS_4 !== 'undefined' ? MEGA_FLASHCARDS_4 : null);
    push(typeof MEGA_FLASHCARDS_5 !== 'undefined' ? MEGA_FLASHCARDS_5 : null);
    push(typeof MEGA_FLASHCARDS_6 !== 'undefined' ? MEGA_FLASHCARDS_6 : null);
    push(typeof MEGA_FLASHCARDS_7 !== 'undefined' ? MEGA_FLASHCARDS_7 : null);
    push(typeof MEGA_FLASHCARDS_8 !== 'undefined' ? MEGA_FLASHCARDS_8 : null);
    push(typeof MEGA_FLASHCARDS_9 !== 'undefined' ? MEGA_FLASHCARDS_9 : null);
    push(typeof MEGA_FLASHCARDS_10 !== 'undefined' ? MEGA_FLASHCARDS_10 : null);
    return all;
  }

  function isQuizReadyFlash(fc) {
    if (!fc) return false;
    const q = String(fc.question || fc.q || '').replace(/\s+/g, ' ').trim();
    const a = String(fc.answer || fc.a || '').replace(/\s+/g, ' ').trim();
    if (q.length < 18 || q.length > 130) return false;
    if (a.length < 20 || a.length > 220) return false;
    // Junk from revision-aids / OCR
    if (/points?\s*cl[eé]s?\s*:/i.test(q)) return false;
    if (/^points?\s*cl[eé]s?/i.test(q)) return false;
    if (/undefined|null|\[object/i.test(q + a)) return false;
    if (/rev-ch\d+_s\d+/i.test(String(fc.id || ''))) return false;
    // Une carte OCR ou une section de cours n’est jamais une bonne question.
    if (/\b(situations? de départ|rang rubrique|encadré|tableau|fig\.)\b/i.test(q + ' ' + a)) return false;
    if (/[•●]/.test(a) || /\.{3,}|\b(stnioP|vieillissemnt|viellissement)\b/i.test(q + ' ' + a)) return false;
    if (!/[?？]$/.test(q) && !/^(qu['’]|quel|quelle|quels|quelles|citer|donner|définir|seuil|critère|score|quand|comment|pourquoi|dans quelle)/i.test(q)) return false;
    return true;
  }

  function isCaseChocReady(vignette, diagnosis) {
    const stem = String(vignette || '').replace(/\s+/g, ' ').trim();
    const correction = String(diagnosis || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    // A feed card is a short clinical decision, never a copied EVC template.
    if (stem.length < 70 || stem.length > 360 || correction.length < 35 || correction.length > 600) return false;
    if (!/\b\d{2,3}\s*ans\b/i.test(stem)) return false;
    if (/interrogatoire complété|examen clinique complet|constantes répétées|réunion de staff|dossier mentionne|station EVC|candidat dispose de|référentiels français|questions du jury/i.test(stem + ' ' + correction)) return false;
    return true;
  }

  function conciseCaseText(value, max = 220) {
    let text = String(value || '').replace(/<[^>]*>/g, ' ').replace(/[•●➔]/g, ' ').replace(/\s+/g, ' ').trim();
    const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
    text = sentences.slice(0, 2).join(' ') || text;
    if (text.length <= max) return text;
    const cut = text.lastIndexOf(' ', max - 1);
    return text.slice(0, cut > 80 ? cut : max).replace(/[,:;\s]+$/, '') + '…';
  }

  function buildQuizOptions(correctAnswer, allFlash, fc) {
    const cleanAnswer = (ans) => {
      let a = (ans || '').trim();
      a = a.replace(/^[•\-–*]\s*/, '');
      a = a.replace(/^\d{1,2}(?:\.\s+|\s*[)-]\s*)/, '');
      // Take first 1–2 sentences max, cut at sensible boundary
      const parts = a.split(/(?<=[.!?])\s+/).filter(Boolean);
      a = parts.slice(0, 2).join(' ').trim() || a;
      if (a.length > 110) {
        const idx = a.lastIndexOf(' ', 105);
        a = (idx > 20 ? a.substring(0, idx) : a.substring(0, 105)).replace(/[,:;]\s*$/, '') + '…';
      }
      return a;
    };

    const correctClean = cleanAnswer(correctAnswer);
    if (!correctClean || correctClean.length < 8) {
      return shuffle([
        { text: correctClean || 'Réponse correcte', correct: true },
        { text: 'Aucune de ces propositions', correct: false },
        { text: 'Réponse non applicable', correct: false },
        { text: 'À revoir dans le cours', correct: false }
      ]);
    }

    // 1. Percentage
    const pctMatch = correctClean.match(/^(\d+(?:,\d+)?)\s*%/);
    if (pctMatch) {
      const val = parseFloat(pctMatch[1].replace(',', '.'));
      const offsets = [-15, 15, 30, -10, 10, 20];
      const uniqVals = new Set();
      while (uniqVals.size < 3 && offsets.length > 0) {
        const offset = offsets.shift();
        const n = Math.round(val + offset);
        if (n > 0 && n <= 100 && n !== Math.round(val)) uniqVals.add(n);
      }
      const options = [correctClean];
      uniqVals.forEach(v => options.push(`${v} %`));
      while (options.length < 4) {
        options.push(`${Math.round(val * 1.5)} %`);
      }
      return shuffle(options.map((t, i) => ({ text: t, correct: i === 0 })));
    }

    // 2. Score (e.g. 24/30)
    const scoreMatch = correctClean.match(/^(\d+)\s*\/\s*(\d+)$/);
    if (scoreMatch) {
      const num = parseInt(scoreMatch[1]);
      const den = parseInt(scoreMatch[2]);
      const uniqNums = new Set();
      const offsets = [-4, 4, -8, 8, -2, 2];
      while (uniqNums.size < 3 && offsets.length > 0) {
        const offset = offsets.shift();
        const n = num + offset;
        if (n >= 0 && n <= den && n !== num) uniqNums.add(n);
      }
      const options = [correctClean];
      uniqNums.forEach(v => options.push(`${v}/${den}`));
      while (options.length < 4) {
        options.push(`${Math.max(0, num - 5)}/${den}`);
      }
      return shuffle(options.map((t, i) => ({ text: t, correct: i === 0 })));
    }

    // 3. Duration/Count (e.g. 5 ans, 3 mois)
    const durMatch = correctClean.match(/^(\d+)\s*(ans|mois|jours|heures|semaines|critères|médicaments|molécules)$/i);
    if (durMatch) {
      const val = parseInt(durMatch[1]);
      const unit = durMatch[2];
      const offsets = [-2, 2, -4, 4, 3, -1];
      const uniqVals = new Set();
      while (uniqVals.size < 3 && offsets.length > 0) {
        const offset = offsets.shift();
        const n = val + offset;
        if (n > 0 && n !== val) uniqVals.add(n);
      }
      const options = [correctClean];
      uniqVals.forEach(v => options.push(`${v} ${unit}`));
      while (options.length < 4) {
        options.push(`${val + 5} ${unit}`);
      }
      return shuffle(options.map((t, i) => ({ text: t, correct: i === 0 })));
    }

    // 4. GIR
    if (/^GIR\s+\d$/i.test(correctClean)) {
      const girNum = parseInt(correctClean.match(/\d/)[0]);
      const options = [correctClean];
      const uniqGirs = new Set([1, 2, 3, 4, 5, 6].filter(n => n !== girNum));
      const wrongGirs = [...uniqGirs].slice(0, 3);
      wrongGirs.forEach(n => options.push(`GIR ${n}`));
      return shuffle(options.map((t, i) => ({ text: t, correct: i === 0 })));
    }

    const qLower = (fc.question || '').toLowerCase();
    const aLower = correctClean.toLowerCase();
    const ctx = qLower + ' ' + aLower;

    const isTreatment = /traitement|1ere intention|thérapeutique|prendre en charge|guérir|soigner|analgésie|médicament|prescrire|déprescri/.test(ctx);
    const isDefinition = /définition|qu'est-ce que|c'est quoi|signifie|correspond|désigne/.test(ctx);
    const isScore = /score|échelle|test|évaluation|seuil|interpréter|interprétation/.test(ctx);
    const isSymptom = /signe|symptôme|clinique|manifestation|douleur|marche/.test(ctx);
    const isExam = /bilan|exam|biologie|imagerie|radiographie|scanner|irm/.test(ctx);

    // Get distractors only from the same clinical topic. A random answer from
    // another chapter makes a question trivial rather than formative.
    let candidates = allFlash.filter(f => f.id !== fc.id && f.answer && isQuizReadyFlash(f));
    const ignoredTerms = new Set(['quel', 'quelle', 'quels', 'quelles', 'comment', 'pourquoi', 'chez', 'avec', 'dans', 'pour', 'plus', 'moins', 'patient', 'patients', 'personne', 'gériatrique', 'geriatrie', 'traitement', 'reference', 'référence', 'connaître', 'connaitre', 'définition', 'definition', 'trouble', 'troubles', 'syndrome', 'syndromes', 'grandes', 'familles', 'cause', 'causes', 'sujet', 'âgé', 'agée', 'aigu', 'aigue', 'aigus', 'aigues', 'outil', 'utilise', 'utiliser', 'validé', 'validée', 'service', 'soins', 'positif', 'positive', 'début', 'brutal', 'brutale', 'fluctuation', 'attention', 'altération', 'mesure', 'prioritaire', 'médicamenteuse', 'médicamenteux', 'présence', 'environnement']);
    const focusTerms = [...new Set((qLower + ' ' + aLower).toLowerCase().match(/[a-zà-öø-ÿ]{5,}/g) || [])]
      .filter(term => !ignoredTerms.has(term));
    const topicCandidates = candidates.filter(f => {
      const candidateText = String(f.question || '') + ' ' + String(f.answer || '');
      const normalized = candidateText.toLowerCase();
      return focusTerms.some(term => normalized.includes(term));
    });

    const getCleanDistractors = (list) => {
      return shuffle(list)
        .map(f => {
          const a = cleanAnswer(f.answer);
          if (a.length < 6 || a.length > 90 || a.toLowerCase() === correctClean.toLowerCase()) return null;
          // Match digits pattern to keep options comparable
          const hasDigitA = /\d/.test(a);
          const hasDigitC = /\d/.test(correctClean);
          if (hasDigitA !== hasDigitC) return null;
          return a;
        })
        .filter(Boolean);
    };

    let uniq = [...new Set(getCleanDistractors(topicCandidates))].slice(0, 3);
    // Better to omit a card than to manufacture three unrelated wrong answers.
    if (uniq.length < 3) return [];

    const options = shuffle([
      { text: correctClean, correct: true },
      ...uniq.map(t => ({ text: t, correct: false }))
    ]);
    return options.slice(0, 4);
  }

  function buildSpecialPools() {
    const allFlash = getAllFlash();
    const srs = loadSRS();
    const dailyMemo = DAILY_MEMOS[hashDay('memo') % DAILY_MEMOS.length];
    const memoJour = DAILY_MEMOS.map(m => ({
      type: 'memo_jour', id: 'mj-' + m.id,
      chapter: m.chapter, rang: 'A', title: m.id === dailyMemo.id ? 'MÉMO DU JOUR' : 'MÉMO FLASH',
      mnemonic: m.mnemonic, detail: m.detail, question: m.question, tags: ['Rappel actif'],
      priority: m.id === dailyMemo.id ? 2 : 1,
      srsKey: 'memo-' + m.id, srs: srs['memo-' + m.id] || { ease: 2.5, interval: 0, nextReview: 0 }
    }));

    const annales = [];
    // Curated recent cases come first so a later duplicate never replaces the
    // richer/current version with a legacy vignette.
    if (typeof CAS_EVC_2024 !== 'undefined') annales.push(...CAS_EVC_2024);
    if (typeof CAS_EVC_2023 !== 'undefined') annales.push(...CAS_EVC_2023);
    if (typeof CAS_EVC_2020_2022 !== 'undefined') annales.push(...CAS_EVC_2020_2022);
    if (typeof CAS_EVC_2018_2019 !== 'undefined') annales.push(...CAS_EVC_2018_2019);
    if (typeof CAS_EVC_2015_2017 !== 'undefined') annales.push(...CAS_EVC_2015_2017);
    if (typeof CAS_EVC_2010_2014 !== 'undefined') annales.push(...CAS_EVC_2010_2014);
    if (typeof ANNALES_V2 !== 'undefined') annales.push(...ANNALES_V2);
    if (typeof CAS_INTERACTIFS !== 'undefined') annales.push(...CAS_INTERACTIFS);
    if (typeof SITUATIONS_EVC !== 'undefined') annales.push(...SITUATIONS_EVC);
    if (typeof ANNALES !== 'undefined') annales.push(...ANNALES);
    if (typeof ANNALES_EXPANDED !== 'undefined') annales.push(...ANNALES_EXPANDED);
    // ANNALES_ARCHIVE is intentionally not injected: its 36 generated cases
    // repeat the same long station template and add no feed-level decision.

    const casChoc = [];
    const seenCases = [];
    annales.forEach(a => {
      const text = a.situation || a.cas || a.case || a.title || '';
      const nameMatch = text.match(/M(?:me|\.?Monsieur|\.)\s+([A-ZÀ-ÖØ-Þ][a-zà-öø-ÿ'-]+)/);
      const nameKey = nameMatch ? nameMatch[1] : '';
      const ageMatch = text.match(/(\d{2,3})\s*ans/);
      const ageKey = ageMatch ? ageMatch[1] : '';
      
      const caseTokens = new Set(String(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toLowerCase().replace(/\b\d+(?:[.,]\d+)?\b/g, ' ').replace(/[^a-z]+/g, ' ')
        .split(/\s+/).filter(word => word.length > 3 && !/^(avec|dans|pour|chez|elle|il|vous|patient|patiente|monsieur|madame)$/.test(word)));
      if (nameKey) {
        const duplicate = seenCases.some(previous => {
          if (previous.name !== nameKey.toLowerCase()) return false;
          let common = 0;
          caseTokens.forEach(token => { if (previous.tokens.has(token)) common++; });
          const union = caseTokens.size + previous.tokens.size - common;
          return union > 0 && common / union >= 0.60;
        });
        if (duplicate) return;
        seenCases.push({ name: nameKey.toLowerCase(), tokens: caseTokens, age: ageKey });
      }

      const sourceQuestions = Array.isArray(a.questions) && a.questions.length
        ? a.questions
            .map((q, i) => ({
              index: i,
              prompt: conciseCaseText(q.q || q.question || '', 125),
              answer: conciseCaseText(q.a || q.answer || '', 360)
            }))
            .filter(q => q.prompt && q.answer && !hasUnsafeGlycemiaMismatch(`${q.prompt} ${q.answer}`))
        : [{ index: 0, prompt: 'Quelle est votre conduite ?', answer: conciseCaseText(a.correction || a.reponse || '', 420) }];

      sourceQuestions.forEach(q => {
        if (!q.answer || hasUnsafeGlycemiaMismatch(q.answer)) return;
        const vignette = `${conciseCaseText(text, 210)}\n\nQuestion : ${q.prompt}`;
        const diagnosis = `<strong>${q.prompt}</strong><br>${q.answer}`;
        if (!isCaseChocReady(vignette, diagnosis)) return;
        const key = `case-${a.id}-q${q.index + 1}`;
        casChoc.push({
          type: 'cas_choc', id: `cc-${a.id}-q${q.index + 1}`,
          chapter: a.chapter, rang: a.difficulty || 'A',
          vignette,
          diagnosis,
          juryTips: conciseCaseText(a.juryTips || '', 150),
          timer: 30,
          tags: ['Cas / CROQ d’entraînement', 'Raisonnement clinique'],
          srsKey: key,
          srs: srs[key] || { ease: 2.5, interval: 0, nextReview: 0 }
        });
      });
    });

    // The feed uses an editorial question bank instead of transforming OCR
    // flashcards into artificial MCQ. It guarantees clinically comparable
    // alternatives and a concise explanation for every card.
    const quizFlash = CURATED_QUIZZES.map(q => ({
      type: 'quiz_flash', id: 'qf-curated-' + q.id,
      chapter: q.chapter, rang: 'A', question: q.question,
      options: shuffle([
        { text: q.correct, correct: true },
        ...q.wrong.map(text => ({ text, correct: false }))
      ]),
      explanation: q.explanation,
      srsKey: 'curated-' + q.id,
      srs: srs['curated-' + q.id] || { ease: 2.5, interval: 0, nextReview: 0 },
      tags: ['Révision clinique', 'EVC']
    }));

    const chiffreCle = CHIFFRES_CLES.map((c, i) => ({
      type: 'chiffre_cle', id: 'ck-' + i,
      chapter: '', rang: 'A',
      value: c.value, unit: c.unit, line: c.line, source: c.source,
      tags: ['Chiffre clé', c.source]
    }));

    // Attach explanatory visuals (new media only - all original texts preserved)
    chiffreCle.forEach(c => {
      if (c.line && /timed up and go|tug/i.test(c.line)) {
        c.video = 'images/feed/tug-test-explanatory.mp4';
        c.image = 'images/feed/illustrative/tug-steps-educational.jpg';
      }
      if (c.line && /chutent au moins une fois par an/i.test(c.line)) {
        c.image = 'images/feed/illustrative/falls-multifactorial-educational.jpg';
      }
      // Additional explanatory image available
      if (c.line && /chutent au moins une fois par an/i.test(c.line)) {
        c.image2 = 'images/feed/fall-assessment.jpg';
      }
      if (c.line && /fragilit| vitesse de marche/i.test(c.line)) {
        c.image = 'images/feed/frailty-walk.jpg';
        c.video = 'images/feed/frailty-gait-explanatory.mp4';
      }
      if (c.line && /fried.*critères|nombre de critères de fried/i.test(c.line)) {
        c.image = 'images/feed/illustrative/fried-fragilite.jpg';
      }
      if (c.line && /polymédication|iatrogénie/i.test(c.line)) {
        c.image = 'images/feed/illustrative/feed-vis-5.jpg';
        c.video = 'images/feed/videos/feed-vis-5.mp4';
      }
      if (c.line && /sarcopénie|vitesse de marche/i.test(c.line)) {
        c.image = 'images/feed/illustrative/feed-vis-17.jpg';
        c.video = 'images/feed/videos/feed-vis-17.mp4';
      }
    });

    const citation = CITATIONS.map((c, i) => ({
      type: 'citation', id: 'cit-' + i,
      chapter: '', rang: '',
      text: c.text, author: c.author,
      tags: ['Inspiration']
    }));

    const piegeExam = CURATED_PIEGES.map((p, i) => ({
      type: 'piege_exam', id: 'px-' + p.id,
      chapter: p.chapter, rang: 'A',
      trap: p.trap, explain: p.explain,
      tags: ['Erreur fréquente', 'À éviter'],
      srsKey: 'trap-' + p.id,
      srs: srs['trap-' + p.id] || { ease: 2.5, interval: 0, nextReview: 0 }
    }));

    // Attach illustrative media for key mechanisms (new explanatory visuals, texts untouched)
    piegeExam.forEach(p => {
      const t = (p.trap || '').toLowerCase();
      if (t.includes('chute') && t.includes('accident')) {
        p.video = 'images/feed/illustrative/chute-multifactorielle.mp4';
        p.image = 'images/feed/illustrative/chute-multifactorielle.jpg';
      }
      if (t.includes('delirium') && (t.includes('agitation') || t.includes('benzodiazépine'))) {
        p.video = 'images/feed/illustrative/delirium-mecanisme.mp4';
        p.image = 'images/feed/illustrative/delirium-mecanisme.jpg';
      }
      if (t.includes('polymédication')) {
        p.image = 'images/feed/illustrative/polymedication-iatrogene.jpg';
        p.video = 'images/feed/videos/feed-vis-5.mp4';
      }
      if (t.includes('chute') && !t.includes('accident')) {
        p.image = 'images/feed/illustrative/feed-vis-1.jpg';
        p.video = 'images/feed/videos/feed-vis-1.mp4';
      }
      if (t.includes('sarcopénie') || t.includes('marche')) {
        p.image = 'images/feed/illustrative/feed-vis-17.jpg';
      }
    });
    // 20+ visual explanation cards for the feed (videos and images to illustrate mechanisms)
    const visualMedias = [
      // Enriched with new targeted diagrams for usefulness (Imagine generated)
      {media: 'images/chapters/educational/chute-multifactorielle-diagram.jpg', isVideo: false, title: 'Chutes multifactorielles - Diagramme explicatif'},
      // New 9:16 reel-optimized feed-vis generated (images + videos) - full vertical feel + French captions integrated
      {media: 'images/feed/illustrative/feed-vis-22.jpg', isVideo: false, title: 'Chutes multifactorielles'},
      {media: 'images/feed/videos/feed-vis-22.mp4', isVideo: true, title: 'Chutes multifactorielles - Vidéo'},
      {media: 'images/feed/illustrative/feed-vis-23.jpg', isVideo: false, title: 'Cycle dénutrition-sarcopénie'},
      {media: 'images/feed/videos/feed-vis-23.mp4', isVideo: true, title: 'Cycle dénutrition - Animation'},
      {media: 'images/feed/illustrative/feed-vis-24.jpg', isVideo: false, title: 'Causes réversibles du delirium'},
      {media: 'images/feed/illustrative/feed-vis-25.jpg', isVideo: false, title: 'Critères de Fried (fragilité)'},
      {media: 'images/feed/videos/feed-vis-25.mp4', isVideo: true, title: 'Critères de Fried - Vidéo'},
      {media: 'images/feed/illustrative/feed-vis-26.jpg', isVideo: false, title: 'Polymédication et Beers'},
      // Existing layout-optimized (compact 9/16 for better text flow)
      {media: 'images/feed/illustrative/delirium-mecanisme-reel.jpg', isVideo: false, title: 'Mécanisme du delirium (compact)'},
      {media: 'images/feed/videos/delirium-mecanisme-compact.mp4', isVideo: true, title: 'Mécanisme du delirium - Vidéo'},
      {media: 'images/feed/illustrative/chute-multifactorielle-reel.jpg', isVideo: false, title: 'Chutes multifactorielles (compact)'},
      {media: 'images/feed/videos/chute-multifactorielle-compact.mp4', isVideo: true, title: 'Chutes multifactorielles - Vidéo'},
      {media: 'images/feed/illustrative/denutrition-cycle-reel.jpg', isVideo: false, title: 'Cycle de dénutrition (compact)'},
      {media: 'images/feed/videos/denutrition-cycle-compact.mp4', isVideo: true, title: 'Cycle de dénutrition - Vidéo'},
      {media: 'images/chapters/educational/ch13-cascade-immobilisation.jpg', isVideo: false, title: 'Cascade d\'immobilisation'},
      {media: 'images/feed/videos/ch13-immobilisation-cascade-animation.mp4', isVideo: true, title: 'Cascade immobilisation - Animation'},
      {media: 'images/chapters/educational/ch15-incontinence-classification.jpg', isVideo: false, title: 'Classification des incontinences'},
      {media: 'images/chapters/educational/ch16-prescription-appropriee.jpg', isVideo: false, title: 'Prescription appropriée'},
      {media: 'images/chapters/educational/ch17-soins-palliatifs-decision.jpg', isVideo: false, title: 'Décision soins palliatifs'},
      {media: 'images/chapters/educational/ch19-20-keyfeatures-revision.jpg', isVideo: false, title: 'Key features et révision'},
      // Keep previous feed-vis for variety
      {media: 'images/feed/illustrative/feed-vis-1.jpg', isVideo: false, title: 'Chutes multifactorielles'},
      {media: 'images/feed/videos/feed-vis-1.mp4', isVideo: true, title: 'Chutes multifactorielles - Mécanisme'},
      {media: 'images/feed/illustrative/feed-vis-2.jpg', isVideo: false, title: 'Mécanisme du delirium'},
      {media: 'images/feed/videos/feed-vis-2.mp4', isVideo: true, title: 'Mécanisme du delirium'},
      {media: 'images/feed/illustrative/feed-vis-3.jpg', isVideo: false, title: 'Critères de Fried (fragilité)'},
      {media: 'images/feed/videos/feed-vis-3.mp4', isVideo: true, title: 'Critères de Fried - Fragilité'},
      {media: 'images/feed/illustrative/feed-vis-4.jpg', isVideo: false, title: 'Test Timed Up and Go (TUG)'},
      {media: 'images/feed/videos/feed-vis-4.mp4', isVideo: true, title: 'Test TUG - Étapes et seuils'},
      {media: 'images/feed/illustrative/feed-vis-5.jpg', isVideo: false, title: 'Polymédication et iatrogénie'},
      {media: 'images/feed/videos/feed-vis-5.mp4', isVideo: true, title: 'Polymédication - Risques'},
      {media: 'images/feed/illustrative/feed-vis-6.jpg', isVideo: false, title: 'Vieillissement cellulaire et réserve'},
      {media: 'images/feed/videos/feed-vis-6.mp4', isVideo: true, title: 'Vieillissement cellulaire'},
      {media: 'images/feed/illustrative/feed-vis-7.jpg', isVideo: false, title: 'Évaluation gériatrique globale (CGA)'},
      {media: 'images/feed/videos/feed-vis-7.mp4', isVideo: true, title: 'CGA - Évaluation multidimensionnelle'},
      {media: 'images/feed/illustrative/feed-vis-8.jpg', isVideo: false, title: 'Déficits sensoriels'},
      {media: 'images/feed/videos/feed-vis-8.mp4', isVideo: true, title: 'Déficits sensoriels - Conséquences'},
      {media: 'images/feed/illustrative/feed-vis-9.jpg', isVideo: false, title: 'Nutrition et dénutrition (MNA)'},
      {media: 'images/feed/videos/feed-vis-9.mp4', isVideo: true, title: 'Nutrition - Dénutrition'},
      {media: 'images/feed/illustrative/feed-vis-10.jpg', isVideo: false, title: 'Ostéoporose et risque de fracture'},
      {media: 'images/feed/videos/feed-vis-10.mp4', isVideo: true, title: 'Ostéoporose - Mécanisme'},
      {media: 'images/feed/illustrative/feed-vis-11.jpg', isVideo: false, title: 'Hypotension orthostatique'},
      {media: 'images/feed/videos/feed-vis-11.mp4', isVideo: true, title: 'Hypotension orthostatique'},
      {media: 'images/feed/illustrative/feed-vis-12.jpg', isVideo: false, title: 'Douleur : échelle ECPA'},
      {media: 'images/feed/videos/feed-vis-12.mp4', isVideo: true, title: 'Douleur - Évaluation ECPA'},
      {media: 'images/feed/illustrative/feed-vis-13.jpg', isVideo: false, title: 'Incontinence et causes réversibles (DIAPPERS)'},
      {media: 'images/feed/videos/feed-vis-13.mp4', isVideo: true, title: 'Incontinence - DIAPPERS'},
      {media: 'images/feed/illustrative/feed-vis-14.jpg', isVideo: false, title: 'Prévention des escarres (Braden)'},
      {media: 'images/feed/videos/feed-vis-14.mp4', isVideo: true, title: 'Escarres - Prévention Braden'},
      {media: 'images/feed/illustrative/feed-vis-15.jpg', isVideo: false, title: 'Dépression vs pseudo-démence'},
      {media: 'images/feed/videos/feed-vis-15.mp4', isVideo: true, title: 'Dépression vs pseudo-démence'},
      {media: 'images/feed/illustrative/feed-vis-16.jpg', isVideo: false, title: 'Critères de Beers / PIM'},
      {media: 'images/feed/videos/feed-vis-16.mp4', isVideo: true, title: 'Beers criteria - Risques'},
      {media: 'images/feed/illustrative/feed-vis-17.jpg', isVideo: false, title: 'Sarcopénie et vitesse de marche'},
      {media: 'images/feed/videos/feed-vis-17.mp4', isVideo: true, title: 'Sarcopénie - Interventions'},
      {media: 'images/feed/illustrative/feed-vis-18.jpg', isVideo: false, title: 'Score Tinetti (POMA)'},
      {media: 'images/feed/videos/feed-vis-18.mp4', isVideo: true, title: 'Score Tinetti - Risque'},
      {media: 'images/feed/illustrative/feed-vis-19.jpg', isVideo: false, title: 'Causes réversibles du delirium'},
      {media: 'images/feed/videos/feed-vis-19.mp4', isVideo: true, title: 'Delirium - Causes réversibles'},
      {media: 'images/feed/illustrative/feed-vis-20.jpg', isVideo: false, title: 'Capacité décisionnelle et éthique'},
      {media: 'images/feed/videos/feed-vis-20.mp4', isVideo: true, title: 'Capacité et consentement'},
      {media: 'images/feed/illustrative/feed-vis-21.jpg', isVideo: false, title: 'Sarcopénie - Mécanismes'},
      {media: 'images/feed/videos/feed-vis-21.mp4', isVideo: true, title: 'Sarcopénie et interventions'}
    ];
    // Only keep media files that resolve (broken paths = "images disparues")
    const mediaOk = (path) => {
      if (!path) return false;
      // Prefer known existing roots; runtime 404 still handled by onerror
      return /images\/(feed|chapters)\//.test(path);
    };
    const visualCue = (title) => {
      const t = String(title || '').toLowerCase();
      if (/chute/.test(t)) return 'Repérez les facteurs intrinsèques, les médicaments et l’environnement : une chute appelle toujours une évaluation multifactorielle.';
      if (/delirium/.test(t)) return 'Retenez la séquence : reconnaître la fluctuation et l’inattention, rechercher une cause aiguë, corriger le facteur précipitant.';
      if (/dénutrition|nutrition|sarcop/.test(t)) return 'Reliez perte d’apports, inflammation et fonte musculaire ; dépister tôt permet d’interrompre le cercle vicieux.';
      if (/fried|fragilit/.test(t)) return 'Cinq critères, trois pour la fragilité : perte de poids, fatigue, faiblesse, lenteur et faible activité.';
      if (/polyméd|beers|prescription/.test(t)) return 'Pour chaque médicament : indication, dose rénale, interactions, durée et possibilité de déprescription.';
      if (/douleur|ecpa/.test(t)) return 'Auto-évaluation si possible ; sinon observer le comportement avec une échelle adaptée, puis réévaluer après traitement.';
      if (/incontinence|diappers/.test(t)) return 'Avant d’étiqueter une incontinence chronique, recherchez une cause aiguë et réversible avec DIAPPERS.';
      if (/escarre|braden/.test(t)) return 'Le risque augmente quand le score de Braden baisse : décharge, mobilisation, peau et nutrition sont indissociables.';
      return 'Observez le mécanisme, formulez le message clinique en une phrase, puis faites défiler pour le rappeler sans support.';
    };
    const visualExplanations = visualMedias
      .filter(v => mediaOk(v.media))
      .map((v, i) => ({
        type: 'visual',
        id: 'vis-' + (i + 1),
        question: v.title,
        answer: visualCue(v.title),
        media: v.media,
        isVideo: !!v.isVideo
      }));

    // One useful card per concept: pair its image and video instead of showing
    // the same lesson twice in a single scrolling session.
    const visualTopic = (card) => {
      const title = String(card.question || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      if (/chutes? multifactor/.test(title)) return 'chutes-multifactorielles';
      if (/mecanisme.*delirium|delirium.*mecanisme/.test(title)) return 'delirium-mecanisme';
      if (/causes.*delirium|delirium.*causes/.test(title)) return 'delirium-causes';
      if (/cycle.*denutrition|denutrition.*sarcopen/.test(title)) return 'denutrition-cycle';
      if (/criteres.*fried/.test(title)) return 'fried';
      const mediaNumber = String(card.media || '').match(/feed-vis-(\d+)/i);
      if (mediaNumber) return 'feed-vis-' + mediaNumber[1];
      return title.replace(/\([^)]*\)/g, ' ').replace(/\s*-\s*(video|animation|mecanisme|risques|consequences|etapes et seuils|diagramme explicatif).*$/i, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    };
    const byTitle = {};
    visualExplanations.forEach(v => {
      const key = visualTopic(v);
      if (!byTitle[key]) byTitle[key] = v;
      else if (v.isVideo && !byTitle[key].isVideo) {
        const poster = byTitle[key].media;
        byTitle[key] = { ...v, image: poster, question: byTitle[key].question };
      } else if (!v.isVideo && byTitle[key].isVideo && !byTitle[key].image) {
        byTitle[key].image = v.media;
      }
    });
    const uniqueVisualExplanations = Object.values(byTitle);
    const nativeDiagrams = EDUCATIONAL_DIAGRAMS.map(d => ({
      type: 'visual', id: 'diagram-' + d.id, chapter: d.chapter,
      question: d.question, answer: d.answer, title: d.title, diagram: d.kind,
      tags: ['Figure interactive', 'Rappel actif'],
      srsKey: 'diagram-' + d.id,
      srs: srs['diagram-' + d.id] || { ease: 2.5, interval: 0, nextReview: 0 }
    }));

    const flashRecall = [];
    const seenFlashQuestions = new Set();
    allFlash.filter(isQuizReadyFlash).forEach((fc, i) => {
      const question = String(fc.question || fc.q || '').replace(/\s+/g, ' ').trim();
      const answer = String(fc.answer || fc.a || '').replace(/\s+/g, ' ').trim();
      const signature = question.toLowerCase();
      if (seenFlashQuestions.has(signature) || hasUnsafeGlycemiaMismatch(`${question} ${answer}`)) return;
      seenFlashQuestions.add(signature);
      const rawKey = fc.id || `quality-${i}`;
      flashRecall.push({
        type: 'flash', id: `fc-${rawKey}`, chapter: fc.chapter, rang: fc.rang || 'A',
        question, answer, tags: fc.tags || ['Rappel essentiel'],
        srsKey: rawKey,
        srs: srs[rawKey] || { ease: 2.5, interval: 0, nextReview: 0 }
      });
    });

    return { memoJour, casChoc, quizFlash, chiffreCle, citation, piegeExam, flashRecall, visualExplanations: [...nativeDiagrams, ...uniqueVisualExplanations], allFlash, srs };
  }

  function buildLegacyPools(allFlash, srs) {
    const legacy = [];
    allFlash.forEach(fc => {
      if (!fc.question || !fc.answer) return;
      const srsEntry = srs[fc.id] || { ease: 2.5, interval: 0, nextReview: 0 };
      const now = Date.now();
      legacy.push({
        type: 'flash', id: 'fc-' + fc.id, chapter: fc.chapter, rang: fc.rang,
        question: fc.question, answer: fc.answer, tags: fc.tags || [],
        priority: srsEntry.nextReview <= now ? 1 : 0, srsKey: fc.id, srs: srsEntry
      });
    });
    if (typeof SYNTHESIS !== 'undefined') {
      SYNTHESIS.forEach((syn, i) => {
        if (!syn.title || !syn.sections || !syn.sections.length) return;
        legacy.push({
          type: 'synthesis', id: 'syn-' + i, chapter: '', rang: '',
          question: syn.title,
          answer: syn.sections ? syn.sections.map(s => s.title).join(' · ') : '',
          tags: [syn.title.split(' ')[0]], priority: 0, srsKey: null, srs: null
        });
      });
    }
    const annales = [];
    if (typeof ANNALES !== 'undefined') annales.push(...ANNALES);
    if (typeof ANNALES_EXPANDED !== 'undefined') annales.push(...ANNALES_EXPANDED);
    if (typeof ANNALES_ARCHIVE !== 'undefined') annales.push(...ANNALES_ARCHIVE);
    if (typeof ANNALES_V2 !== 'undefined') annales.push(...ANNALES_V2);
    if (typeof CAS_INTERACTIFS !== 'undefined') annales.push(...CAS_INTERACTIFS);
    if (typeof SITUATIONS_EVC !== 'undefined') annales.push(...SITUATIONS_EVC);
    if (typeof CAS_EVC_2024 !== 'undefined') annales.push(...CAS_EVC_2024);
    if (typeof CAS_EVC_2023 !== 'undefined') annales.push(...CAS_EVC_2023);
    if (typeof CAS_EVC_2020_2022 !== 'undefined') annales.push(...CAS_EVC_2020_2022);
    if (typeof CAS_EVC_2018_2019 !== 'undefined') annales.push(...CAS_EVC_2018_2019);
    if (typeof CAS_EVC_2015_2017 !== 'undefined') annales.push(...CAS_EVC_2015_2017);
    if (typeof CAS_EVC_2010_2014 !== 'undefined') annales.push(...CAS_EVC_2010_2014);

    annales.forEach(a => {
      let answerText = '';
      if (a.questions && a.questions.length) {
        answerText = a.questions.map((q, i) => `<strong>Q${i+1}: ${q.q || q.question || ''}</strong><br>➔ ${q.a || q.answer || ''} ${q.points ? `[${q.points} pts]` : ''}`).join('<br><br>');
      } else {
        answerText = a.correction || a.reponse || '';
      }
      if (!answerText) return;

      legacy.push({
        type: 'case', id: 'ann-' + a.id, chapter: a.chapter, rang: a.difficulty,
        question: a.situation || a.cas || a.case || a.title || '',
        answer: answerText,
        juryTips: a.juryTips || '',
        tags: ['Cas clinique'], priority: 0, srsKey: null, srs: null
      });
    });
    const allHas = [];
    if (typeof HAS_RECOMMANDATIONS !== 'undefined') allHas.push(...HAS_RECOMMANDATIONS);
    if (typeof HAS_EXPANDED !== 'undefined') allHas.push(...HAS_EXPANDED);
    allHas.forEach(h => {
      legacy.push({
        type: 'reco', id: h.id, chapter: h.chapter, rang: '',
        question: h.theme + (h.objectif ? ' — ' + h.objectif : ''),
        answer: h.recommandations ? h.recommandations.join(' · ') : (h.reco || ''),
        tags: ['HAS'], priority: 0, srsKey: null, srs: null
      });
    });
    return legacy;
  }

  function interleaveDeck(pools, targetSize = 90) {
    const counts = {};
    Object.keys(TYPE_RATIO).forEach(k => {
      const r = TYPE_RATIO[k];
      counts[k] = r > 0 ? Math.max(1, Math.round(targetSize * r)) : 0;
    });
    const buckets = {
      memo_jour: pickN(pools.memoJour, counts.memo_jour),
      cas_choc: pickN(pools.casChoc, counts.cas_choc),
      quiz_flash: pickN(pools.quizFlash, counts.quiz_flash),
      chiffre_cle: pickN(pools.chiffreCle, counts.chiffre_cle),
      citation: pickN(pools.citation, counts.citation),
      piege_exam: pickN(pools.piegeExam, counts.piege_exam),
      visual: pickN(pools.visualExplanations, counts.visual),
      flash: [], synthesis: [], case: [], reco: []
    };
    const legacy = shuffle(buildLegacyPools(pools.allFlash, pools.srs));
    legacy.forEach(c => {
      if (buckets[c.type] && buckets[c.type].length < counts[c.type]) buckets[c.type].push(c);
    });
    Object.keys(buckets).forEach(key => { buckets[key] = shuffle(buckets[key]); });
    // Alternance éditoriale : jamais une longue série du même format.
    const cadence = ['quiz_flash', 'cas_choc', 'memo_jour', 'visual', 'piege_exam', 'quiz_flash'];
    const merged = [];
    let remaining = Object.values(buckets).reduce((sum, items) => sum + items.length, 0);
    while (remaining > 0) {
      let moved = false;
      cadence.forEach(type => {
        const card = buckets[type] && buckets[type].shift();
        if (card) { merged.push(card); remaining--; moved = true; }
      });
      if (!moved) break;
    }
    return merged;
  }

  function isLowQualityCard(card) {
    if (!card) return true;
    // Always keep pure visual media cards
    if (card.type === 'visual' && card.media) return false;
    if (card.type === 'chiffre_cle' && card.line) return false;
    if (card.type === 'piege_exam' && card.trap) return false;
    if (card.type === 'citation' && card.text) return false;
    const q = String(card.question || card.trap || card.line || card.text || '').replace(/\s+/g, ' ').trim();
    const a = String(card.answer || card.explain || card.diagnosis || card.detail || card.explanation || '').replace(/\s+/g, ' ').trim();
    if (q.length < 12 && a.length < 12) return true;
    // Placeholder / auto-generated junk
    if (/points?\s*cl[eé]s?/i.test(q)) return true;
    if (/^(n\/a|todo|tbd|xxx|\.{3,}|—{2,})$/i.test(q) || /^(n\/a|todo|tbd)$/i.test(a)) return true;
    if (/undefined|null|\[object object\]/i.test(q + ' ' + a)) return true;
    // OCR mashed / book-index junk
    if (/\bstniop\b|rang\s*rubrique|elsevier masson/i.test(q + ' ' + a)) return true;
    const sample = (q + ' ' + a).slice(0, 120);
    if (sample.length > 40 && (sample.match(/[aeiouyàâäéèêëïîôùûüœ]/gi) || []).length < 6) return true;
    return false;
  }

  function dedupeDeck(cards) {
    const seen = new Set();
    const out = [];
    for (const c of cards) {
      if (isLowQualityCard(c)) continue;
      const key = String(c.id || '') + '|' + String(c.question || c.trap || c.line || c.text || '').toLowerCase().replace(/\s+/g, ' ').trim().slice(0, 120);
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(c);
    }
    return out;
  }

  function freshFeedDay(stats) {
    const today = new Date().toDateString();
    if (stats.dailyDate !== today) {
      stats.dailyDone = 0;
      stats.dailyDate = today;
      saveStats(stats);
    }
  }

  function isHighYieldFeedCase(card) {
    if (!card) return false;
    const vignette = String(card.vignette || '').replace(/\s+/g, ' ').trim();
    const rawAnswer = String(card.diagnosis || '');
    const parts = rawAnswer.split(/<\/strong>\s*<br\s*\/?\s*>/i);
    const prompt = String(parts[0] || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const answer = String(parts.slice(1).join(' ') || rawAnswer).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (vignette.length < 90 || vignette.length > 360 || answer.length < 90) return false;
    if (/…|\.\.\./.test(answer)) return false;
    const expected = prompt.match(/\b([2-5])\s+(?:diagnostics?|facteurs?|causes?|mesures?|étapes?|objectifs?|éléments?)/i);
    if (expected) {
      const requiredLastItem = new RegExp(`(?:^|\\s)${expected[1]}[.)]\\s`);
      if (!requiredLastItem.test(answer)) return false;
    }
    return true;
  }

  function buildDailyDeck(pools) {
    const all = dedupeDeck([
      ...pools.quizFlash, ...pools.flashRecall, ...pools.memoJour, ...pools.casChoc,
      ...pools.piegeExam, ...pools.chiffreCle, ...pools.visualExplanations
    ]);
    const seen = new Set();
    const isDue = (card) => card.srsKey && Object.prototype.hasOwnProperty.call(pools.srs, card.srsKey) && pools.srs[card.srsKey].nextReview <= Date.now();
    const add = (list, count, salt = '') => {
      const available = list.filter(card => !seen.has(card.id));
      const due = available.filter(isDue).sort((a, b) => (a.srs.nextReview || 0) - (b.srs.nextReview || 0));
      const fresh = dayPick(available.filter(card => !isDue(card)), Math.max(0, count - due.length), salt);
      const accepted = [...due.slice(0, count), ...fresh].slice(0, count);
      accepted.forEach(card => seen.add(card.id));
      return accepted;
    };
    const strongCases = pools.casChoc.filter(isHighYieldFeedCase);
    const diagrams = pools.visualExplanations.filter(card => card.diagram);
    const mediaVisuals = pools.visualExplanations.filter(card => !card.diagram);
    const core = [
      ...add(pools.flashRecall, 6, 'core-flash'),
      ...add(pools.quizFlash, 4, 'core-quiz'),
      ...add(strongCases, 4, 'core-cas'),
      ...add(pools.memoJour, 2, 'core-memo'),
      ...add(pools.piegeExam, 2, 'core-piege'),
      ...add([...diagrams, ...mediaVisuals], 1, 'core-visual'),
      ...add(pools.chiffreCle, 1, 'core-chiffre')
    ];
    if (core.length < DAILY_GOAL) core.push(...add(all, DAILY_GOAL - core.length, 'core-fill'));
    const bonus = [
      ...add(pools.flashRecall, 8, 'bonus-flash'),
      ...add(pools.quizFlash, 4, 'bonus-quiz'),
      ...add(strongCases, 4, 'bonus-cas'),
      ...add(pools.memoJour, 1, 'bonus-memo'),
      ...add(pools.piegeExam, 1, 'bonus-piege'),
      ...add([...mediaVisuals, ...diagrams], 1, 'bonus-visual'),
      ...add(pools.chiffreCle, 1, 'bonus-chiffre')
    ];
    if (core.length + bonus.length < FEED_LENGTH) bonus.push(...add(all, FEED_LENGTH - core.length - bonus.length, 'bonus-fill'));
    const cards = [
      ...core.slice(0, DAILY_GOAL).map(card => ({ ...card, feedTier: 'essential' })),
      ...bonus.map(card => ({ ...card, feedTier: 'bonus' }))
    ];
    // Alternance éditoriale : rappel, décision, défi puis respiration visuelle.
    const cadence = ['flash', 'quiz_flash', 'cas_choc', 'memo_jour', 'piege_exam', 'visual', 'chiffre_cle'];
    const buckets = Object.fromEntries(cadence.map(type => [type, cards.filter(card => card.type === type)]));
    const ordered = [];
    while (ordered.length < cards.length) {
      let moved = false;
      cadence.forEach(type => {
        const card = buckets[type]?.shift();
        if (card) { ordered.push(card); moved = true; }
      });
      if (!moved) break;
    }
    return ordered.slice(0, FEED_LENGTH);
  }

  function buildDeck() {
    const stats = loadStats();
    freshFeedDay(stats);
    streak = stats.streak || 0;
    points = stats.points || 0;
    dailyDone = stats.dailyDone || 0;

    const pools = buildSpecialPools();
    const mixed = buildDailyDeck(pools);
    if (activeSession === 'flash') return dayPick(dedupeDeck(pools.flashRecall), 32, 'session-flash');
    if (activeSession === 'cas') return dayPick(pools.casChoc.filter(isHighYieldFeedCase), 30, 'session-cas');
    if (activeSession === 'pieges') return dayPick(dedupeDeck([...pools.piegeExam, ...pools.quizFlash]), 28, 'session-pieges');
    if (activeSession === 'visual') {
      const diagrams = pools.visualExplanations.filter(card => card.diagram);
      const media = pools.visualExplanations.filter(card => !card.diagram);
      return dayPick(dedupeDeck([...media, ...diagrams]), 28, 'session-visual');
    }
    return mixed;
  }

  function updateSessionChrome() {
    const labels = {
      mix: '20 essentiels + bonus · rappels, cas, pièges et visuels',
      flash: 'Rappels courts · priorité aux cartes dues',
      cas: 'Cas / CROQ d’entraînement · une décision à la fois',
      pieges: 'Pièges EVC · reconnaître l’erreur avant de corriger',
      visual: 'Figures et vidéos éducatives · voir, prévoir, retenir'
    };
    document.querySelectorAll('#bfSessionTabs .bf-session-tab').forEach(tab => {
      const on = tab.dataset.session === activeSession;
      tab.classList.toggle('active', on);
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    const subtitle = document.querySelector('#vFeed .bf-header-title span');
    if (subtitle) subtitle.textContent = labels[activeSession] || labels.mix;
    const counter = document.getElementById('bfCounter');
    if (counter) counter.setAttribute('title', activeSession === 'mix' ? 'Séance mixte' : labels[activeSession]);
  }

  function selectSession(session) {
    if (!['mix', 'flash', 'cas', 'pieges', 'visual'].includes(session)) session = 'mix';
    activeSession = session;
    try { localStorage.setItem('bf_session', activeSession); } catch (_) {}
    if (observer) observer.disconnect();
    activeTimers.forEach(t => clearTimeout(t));
    activeTimers.clear();
    deck = buildDeck();
    idx = 0;
    combo = 0;
    quizCombo = 0;
    completedCardIds = new Set();
    const feed = document.getElementById('bfFeed');
    if (feed) feed.scrollTop = 0;
    updateSessionChrome();
    renderSlides();
    showToast({ mix: '✨ Pour toi', flash: '🧠 Rappels essentiels', cas: '🩺 Cas / CROQ', pieges: '⚠️ Pièges EVC', visual: '🎬 Visuels éducatifs' }[activeSession]);
  }

  function getChapterName(chId) {
    if (typeof APP_DATA === 'undefined' || !chId) return '';
    const ch = APP_DATA.chapters.find(c => c.id === chId);
    return ch ? ch.t : '';
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s || '';
    return d.innerHTML;
  }

  function renderEducationalDiagram(kind, revealed) {
    const diagrams = {
      delirium: {
        eyebrow: 'CONFUSION AIGUË', center: 'DELIRIUM', icon: '⚡',
        nodes: [['🫁', 'Hypoxie / infection'], ['💊', 'Iatrogénie'], ['🩺', 'Douleur'], ['↔', 'Globe / fécalome'], ['⚗', 'Trouble métabolique']],
        footer: 'Aigu + fluctuant + inattention = urgence diagnostique'
      },
      fall: {
        eyebrow: 'APRÈS UNE CHUTE', center: 'ÉVALUER', icon: '↘',
        nodes: [['🧍', 'Marche · vision · cognition'], ['💊', 'Médicaments'], ['🫀', 'Orthostatisme · cause aiguë'], ['🏠', 'Environnement'], ['🩹', 'Conséquences et peur de chuter']],
        footer: 'Une chute est un symptôme : penser multifactoriel'
      },
      nutrition: {
        eyebrow: 'CERCLE VICIEUX', center: 'FONTE\nMUSCULAIRE', icon: '↻',
        nodes: [['🍽', 'Baisse des apports'], ['🦠', 'Inflammation / maladie aiguë'], ['🦵', 'Faiblesse et mobilité réduite'], ['🧩', 'Perte d’autonomie'], ['↻', 'Risque de nouvelle dénutrition']],
        footer: 'Dépister tôt pour interrompre la cascade'
      }
    };
    const d = diagrams[kind] || diagrams.delirium;
    const nodes = d.nodes.map(([icon, label], i) => `
      <div class="bf-diagram-node node-${i + 1}">
        <span aria-hidden="true">${icon}</span><b>${revealed ? esc(label) : '…'}</b>
      </div>`).join('');
    return `<div class="bf-native-diagram bf-native-${kind} ${revealed ? 'is-revealed' : ''}" role="img" aria-label="${esc(d.eyebrow)} : ${revealed ? esc(d.footer) : 'réponse à révéler'}">
      <p class="bf-diagram-eyebrow">${esc(d.eyebrow)}</p>
      <div class="bf-diagram-orbit">${nodes}<div class="bf-diagram-center"><span>${d.icon}</span><strong>${d.center.replace('\n', '<br>')}</strong></div></div>
      <p class="bf-diagram-footer">${revealed ? esc(d.footer) : 'Formule mentalement les éléments avant de révéler.'}</p>
    </div>`;
  }

  function renderVisual(card, slideIdx) {
    const src = card.media || card.video || card.image || '';
    const isVid = card.isVideo || /\.mp4($|\?)/i.test(src);
    const mediaHtml = card.diagram
      ? renderEducationalDiagram(card.diagram, false)
      : isVid
      ? `<video class="bf-visual-media" src="${src}" muted loop playsinline autoplay controls
           onerror="this.closest('.bf-media-container')?.classList.add('bf-media-missing')"></video>`
      : `<img class="bf-visual-media" src="${src}" alt="${esc(card.question || '')}" loading="lazy"
           onerror="this.closest('.bf-media-container')?.classList.add('bf-media-missing')">`;
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <div class="bf-horiz-page page-1 bf-visual-page">
          <div class="bf-visual-stack">
            <div class="bf-media-container bf-reel-media ${card.diagram ? 'bf-native-diagram-wrap' : ''}">
              ${mediaHtml}
              <div class="bf-media-fallback">Média indisponible</div>
            </div>
            <div class="bf-visual-caption">
              <p class="bf-visual-kicker">FIGURE INTERACTIVE</p>
              <p class="bf-visual-title">${esc(card.title || card.question)}</p>
              <p class="bf-visual-sub">${esc(card.question)}</p>
              <button type="button" class="bf-action-reveal" data-bf-reveal="${slideIdx}">Révéler et mémoriser</button>
            </div>
          </div>
        </div>
        <div class="bf-horiz-page page-2 bf-visual-page bf-visual-answer-page">
          <div class="bf-visual-stack">
            <div class="bf-media-container bf-reel-media ${card.diagram ? 'bf-native-diagram-wrap' : ''}">
              ${card.diagram ? renderEducationalDiagram(card.diagram, true) : mediaHtml}
            </div>
            <div class="bf-visual-caption">
              <p class="bf-visual-kicker">À RETENIR</p>
              <p class="bf-visual-sub">${esc(card.answer || 'Illustration clinique')}</p>
              <span class="bf-swipe-left-hint">← Revoir la figure</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  function renderSlide(card, slideIdx) {
    const slide = document.createElement('div');
    slide.className = 'bf-slide';
    slide.dataset.type = card.type;
    slide.dataset.idx = slideIdx;
    slide.dataset.id = card.id || '';

    const renderers = {
      memo_jour: renderMemoJour,
      cas_choc: renderCasChoc,
      quiz_flash: renderQuizFlash,
      chiffre_cle: renderChiffreCle,
      citation: renderCitation,
      piege_exam: renderPiegeExam,
      visual: renderVisual
    };

    if (renderers[card.type]) {
      slide.innerHTML = renderers[card.type](card, slideIdx);
    } else {
      slide.innerHTML = renderClassicCard(card, slideIdx);
    }

    const socialTypes = {
      flash: ['🧠', 'Rappel essentiel'], synthesis: ['📚', 'Synthèse'], case: ['🩺', 'Cas clinique'], reco: ['✅', 'Référence'],
      memo_jour: ['🧩', 'Mémo'], cas_choc: ['🚑', 'Cas / CROQ'], quiz_flash: ['⚡', 'Quiz flash'],
      chiffre_cle: ['📊', 'Chiffre clé'], citation: ['💬', 'Repère'], piege_exam: ['⚠️', 'Piège EVC'], visual: ['🎬', 'Visuel éducatif']
    };
    const [avatar, typeName] = socialTypes[card.type] || ['✨', 'Pulse'];
    const chapter = getChapterName(card.chapter);
    slide.querySelectorAll('.bf-horiz-page').forEach((page, pageIndex) => {
      const author = document.createElement('div');
      author.className = 'bf-social-author';
      author.innerHTML = `<span class="bf-social-avatar" aria-hidden="true">${avatar}</span><span class="bf-social-copy"><strong>Pulse Gériatrie</strong><small>${esc(typeName)}${chapter ? ` · ${esc(chapter)}` : ''}</small></span><span class="bf-social-position">${slideIdx + 1}<small>/${deck.length}</small>${pageIndex ? '<i>réponse</i>' : ''}</span>`;
      page.appendChild(author);
    });
    slide.dataset.tier = card.feedTier || (activeSession === 'mix' && slideIdx < DAILY_GOAL ? 'essential' : 'session');

    bindSlideInteractions(slide, card, slideIdx);
    return slide;
  }

  function formatRichAnswer(card) {
    let answerText = '';
    if (card.type === 'flash' || card.type === 'synthesis' || card.type === 'case' || card.type === 'reco') {
      answerText = card.answer || '';
    } else if (card.type === 'memo_jour') {
      answerText = `<strong>Mnémonique :</strong> <span style="color: var(--teal-accent); font-weight: bold; font-size: 1.1rem; border-bottom: 2px dashed var(--teal-accent); padding-bottom: 2px;">${card.mnemonic}</span><br><br>${card.detail}`;
    } else if (card.type === 'cas_choc') {
      answerText = card.diagnosis || '';
    } else if (card.type === 'quiz_flash') {
      answerText = card.explanation || '';
    } else if (card.type === 'piege_exam') {
      answerText = card.explain || '';
    }

    const keywords = [
      'MMS', 'MMSE', 'GDS-15', 'GDS', 'Fried', 'CAM', 'Tinetti', 'TUG', 'Beers', 'STOPP', 'START', 'HAS', 'GIR', 'AGGIR',
      'APA', 'ALD', 'MNA', 'IMC', 'IADL', 'ADL', 'DIAPPERS', 'ECPA', 'Bouchon', 'iatrogénie', 'dénutrition', 'delirium',
      'fragilité', 'confusion', 'chute', 'sevrage', 'sarcopénie', 'amoxicilline', 'Donepezil', 'tramadol', 'zolpidem',
      'lorazépam', 'Halopéridol', 'contention', 'directives anticipées', 'personne de confiance', 'Claeys-Leonetti', 'Leonetti'
    ];

    let formatted = answerText;
    // Pre-clean: remove OCR artifacts and normalize whitespace
    formatted = formatted.replace(/\s{3,}/g, ' ').replace(/\u25bc/g, '').trim();
    // Extract key takeaway (first meaningful sentence) for emphasis
    
    // Check if it's already got list tags, if not format it
    if (!formatted.includes('<ul') && !formatted.includes('<li') && !formatted.includes('<p')) {
      if (formatted.includes('\n') || formatted.includes('1.') || formatted.includes('•') || formatted.includes(' - ')) {
        const lines = formatted.split('\n');
        formatted = '<ul class="bf-answer-list" style="margin: 8px 0; padding-left: 20px; line-height: 1.5;">' + lines.map(line => {
          let l = line.trim();
          if (!l) return '';
          if (l.startsWith('•') || l.startsWith('-')) l = l.slice(1).trim();
          l = l.replace(/^\d+[\s.)-]/, '').trim();
          return `<li style="margin-bottom: 6px;">${l}</li>`;
        }).filter(Boolean).join('') + '</ul>';
      } else {
        const sentences = formatted.split(/(?<=[.!?])\s+/);
        if (sentences.length > 2) {
          formatted = '<ul class="bf-answer-list" style="margin: 8px 0; padding-left: 20px; line-height: 1.5;">' + sentences.map(s => `<li style="margin-bottom: 6px;">${s}</li>`).join('') + '</ul>';
        } else {
          formatted = `<p class="bf-answer-paragraph" style="margin: 8px 0; line-height: 1.5;">${formatted}</p>`;
        }
      }
    }

    // Highlight keywords with clean styling
    keywords.forEach(kw => {
      const regex = new RegExp(`\\b(${kw}s?)\\b`, 'gi');
      formatted = formatted.replace(regex, `<span class="bf-keyword" style="font-weight: 700; color: var(--teal-accent); background: rgba(20, 184, 166, 0.08); padding: 1px 4px; border-radius: 4px; border: 1px solid rgba(20, 184, 166, 0.15); font-family: var(--sans);">$1</span>`);
    });

    const foundKeywords = keywords.filter(kw => {
      const regex = new RegExp(`\\b${kw}\\b`, 'i');
      return regex.test(answerText);
    });

    // Aucun conseil fabriqué automatiquement : il risquait d'ajouter un seuil
    // imprécis à une carte dont le contenu était pourtant correct.
    const coachingTip = card.coachingTip || '';

    let keywordsHtml = '';
    if (foundKeywords.length) {
      keywordsHtml = `
        <div class="bf-coach-keywords" style="margin-top: 14px; padding-top: 10px; border-top: 1px dashed var(--border); display: flex; flex-direction: column; gap: 6px;">
          <span style="font-size: 0.8rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">🔑 Mots-clés requis</span>
          <div class="bf-keyword-tags" style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${foundKeywords.map(k => `<span class="bf-keyword-tag" style="font-size: 0.75rem; background: var(--bg-body); border: 1px solid var(--border); color: var(--text); padding: 2px 8px; border-radius: 99px; font-weight: 500;">${k}</span>`).join('')}
          </div>
        </div>
      `;
    }

    let coachingHtml = '';
    if (coachingTip) {
      coachingHtml = `
        <div class="bf-coach-tip-box" style="margin-top: 12px; padding: 10px 12px; background: rgba(245, 158, 11, 0.06); border-left: 3px solid #f59e0b; border-radius: 0 6px 6px 0; font-size: 0.85rem;">
          <div class="bf-coach-tip-title" style="font-weight: 700; color: #d97706; margin-bottom: 4px; display: flex; align-items: center; gap: 4px;">🎓 Coaching EVC / Conseils</div>
          <p class="bf-coach-tip-text" style="margin: 0; color: var(--text); line-height: 1.4;">${coachingTip}</p>
        </div>
      `;
    }

    return `
      <div class="bf-rich-answer" style="display: flex; flex-direction: column; gap: 4px;">
        <div class="bf-answer-body" style="color: var(--text); font-size: 0.95rem;">${formatted}</div>
        ${keywordsHtml}
        ${coachingHtml}
      </div>
    `;
  }

  function renderClassicCard(card, slideIdx) {
    const chName = getChapterName(card.chapter);
    const typeLabels = { flash: 'Flashcard', synthesis: 'Synthèse', case: 'Cas clinique', reco: 'HAS' };
    const typeIcons = { flash: '🎴', synthesis: '📋', case: '🏥', reco: '📋' };
    const rangBadge = card.rang
      ? `<span class="bf-rang bf-rang-${String(card.rang).toLowerCase()}">Rang ${card.rang}</span>` : '';
    const chTag = chName ? `<span class="bf-card-chapter">${esc(chName)}</span>` : '';
    const tagsHtml = (card.tags || []).slice(0, 3).map(t => `<span class="bf-tag">${esc(t)}</span>`).join('');
    const progressDots = `<div class="bf-page-dots" aria-hidden="true"><span class="on"></span><span></span></div>`;

    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : QUESTION -->
        <div class="bf-horiz-page page-1 bf-theme-classic">
          <div class="bf-bg-emoji" aria-hidden="true">🎴</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">${typeIcons[card.type] || '🎴'} ${typeLabels[card.type] || 'Carte'}</span>
              ${rangBadge}
            </header>
            ${progressDots}
            <main class="bf-card-main">
              <p class="bf-question-text">${esc(card.question)}</p>
            </main>
            <footer class="bf-card-ftr">
              ${chTag}
              <button type="button" class="bf-action-reveal" data-bf-reveal="${slideIdx}">Révéler la réponse</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : RÉPONSE -->
        <div class="bf-horiz-page page-2 bf-theme-classic-back">
          <div class="bf-bg-emoji" aria-hidden="true">💡</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">💡 Réponse</span>
              ${rangBadge}
            </header>
            <div class="bf-page-dots" aria-hidden="true"><span></span><span class="on"></span></div>
            <main class="bf-card-main scrollable">
              ${formatRichAnswer(card)}
            </main>
            <footer class="bf-card-ftr">
              <div class="bf-card-tags">${tagsHtml}</div>
              <span class="bf-swipe-left-hint">← Revoir la question</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderMemoJour(card, slideIdx) {
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : ENONCE -->
        <div class="bf-horiz-page page-1 bf-theme-memo">
          <div class="bf-bg-emoji">🧠</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">🧠 ${esc(card.title)}</span>
            </header>
            <div class="bf-page-dots" aria-hidden="true"><span class="on"></span><span></span></div>
            <main class="bf-card-main">
              <p class="bf-question-text">${esc(card.question)}</p>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" data-bf-reveal="${slideIdx}">Révéler la réponse</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : MNEMO -->
        <div class="bf-horiz-page page-2 bf-theme-memo-back">
          <div class="bf-bg-emoji" aria-hidden="true">✨</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">✨ Rétention</span>
            </header>
            <div class="bf-page-dots" aria-hidden="true"><span></span><span class="on"></span></div>
            <main class="bf-card-main scrollable">
              ${formatRichAnswer(card)}
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-swipe-left-hint">← Revoir l'énoncé</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderCasChoc(card, slideIdx) {
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : CAS CLINIQUE -->
        <div class="bf-horiz-page page-1 bf-theme-choc">
          <div class="bf-bg-emoji">🚑</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">🚑 CAS D’ENTRAÎNEMENT</span>
              <div class="bf-choc-timer" data-seconds="${card.timer}">
                <svg class="bf-choc-ring" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" class="bf-choc-ring-bg"/><circle cx="18" cy="18" r="16" class="bf-choc-ring-fg"/></svg>
                <span class="bf-choc-time">${card.timer}</span>
              </div>
            </header>
            <main class="bf-card-main scrollable">
              <p class="bf-choc-sub">Tu as <strong>${card.timer} secondes</strong> pour formuler ta conduite :</p>
              <div class="bf-choc-vignette">${esc(card.vignette)}</div>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" data-bf-reveal="${slideIdx}" data-stop-timer="1">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : DIAGNOSTIC -->
        <div class="bf-horiz-page page-2 bf-theme-choc-back">
          <div class="bf-bg-emoji">🩺</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">🩺 Réponse structurée</span>
            </header>
            <main class="bf-card-main scrollable">
              ${formatRichAnswer(card)}
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-swipe-left-hint">⬅ Revoir le cas</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderQuizFlash(card, slideIdx) {
    const opts = (card.options || []).map((o, i) =>
      `<button type="button" class="bf-quiz-opt" data-correct="${o.correct ? '1' : '0'}" data-idx="${i}">
        <span class="bf-quiz-letter">${['A', 'B', 'C', 'D'][i]}</span>
        <span class="bf-quiz-opt-text">${esc(o.text)}</span>
        <span class="bf-quiz-feedback"></span>
      </button>`
    ).join('');

    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : QUESTIONS/CHOIX -->
        <div class="bf-horiz-page page-1 bf-theme-quiz">
          <div class="bf-bg-emoji">❓</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">⚡ QUIZ FLASH</span>
            </header>
            <main class="bf-card-main">
              <h2 class="bf-quiz-q">${esc(card.question)}</h2>
              <div class="bf-quiz-options">${opts}</div>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" data-bf-reveal="${slideIdx}">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : EXPLICATION -->
        <div class="bf-horiz-page page-2 bf-theme-quiz-back">
          <div class="bf-bg-emoji">📖</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">📖 Explication</span>
            </header>
            <main class="bf-card-main scrollable">
              ${formatRichAnswer(card)}
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-swipe-left-hint">⬅ Revoir la question</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderChiffreCle(card, slideIdx) {
    const displayVal = Number.isInteger(card.value) ? card.value : card.value.toFixed(1).replace('.', ',');
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : QUESTION -->
        <div class="bf-horiz-page page-1 bf-theme-stat">
          <div class="bf-bg-emoji">📊</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">📊 CHIFFRE CLÉ</span>
            </header>
            <main class="bf-card-main">
              ${card.video ? `<div class="bf-media-container"><video src="${card.video}" controls muted loop playsinline></video></div>` : ''}
              ${!card.video && card.image ? `<div class="bf-media-container"><img src="${card.image}" alt=""></div>` : ''}
              <p class="bf-question-text" style="font-size: 1.05rem; margin-top: 8px;">${esc(card.line)}</p>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" data-bf-reveal="${slideIdx}">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : RÉPONSE -->
        <div class="bf-horiz-page page-2 bf-theme-stat">
          <div class="bf-bg-emoji">📈</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">📊 Valeur</span>
            </header>
            <main class="bf-card-main">
              ${card.video ? `<div class="bf-media-container"><video src="${card.video}" controls muted loop playsinline></video></div>` : ''}
              ${!card.video && card.image ? `<div class="bf-media-container"><img src="${card.image}" alt=""></div>` : ''}
              <div class="bf-stat-number-wrap">
                <span class="bf-stat-number" data-target="${card.value}">${displayVal}</span>
                <span class="bf-stat-unit">${esc(card.unit)}</span>
              </div>
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-stat-source">${esc(card.source)}</span>
              <span class="bf-swipe-left-hint">⬅ Revoir la question</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderCitation(card, slideIdx) {
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : CITATION -->
        <div class="bf-horiz-page page-1 bf-theme-quote">
          <div class="bf-bg-emoji">💬</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">CITATION</span>
            </header>
            <main class="bf-card-main">
              <div class="bf-quote-mark">“</div>
              <blockquote class="bf-quote-text" style="font-size: 1.15rem;">${esc(card.text)}</blockquote>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" data-bf-reveal="${slideIdx}">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : RÉPONSE -->
        <div class="bf-horiz-page page-2 bf-theme-quote">
          <div class="bf-bg-emoji">✍️</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">Auteur</span>
            </header>
            <main class="bf-card-main">
              <blockquote class="bf-quote-text" style="font-size: 1.1rem; margin-bottom: 12px;">${esc(card.text)}</blockquote>
              <cite class="bf-quote-author">— ${esc(card.author)}</cite>
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-swipe-left-hint">⬅ Revoir la citation</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function renderPiegeExam(card, slideIdx) {
    return `
      <div class="bf-horiz-scroll" id="bfScroll-${slideIdx}">
        <!-- PAGE 1 : LE PIEGE -->
        <div class="bf-horiz-page page-1 bf-theme-trap">
          <div class="bf-bg-emoji">🪤</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">🪤 ERREUR FRÉQUENTE</span>
            </header>
            <main class="bf-card-main">
              <div class="bf-trap-wrong">
                <span class="bf-trap-x">✕</span>
                <p>${esc(card.trap)}</p>
              </div>
              <p class="bf-trap-prompt" style="text-align: center; margin-top: 8px; font-size: 0.92rem; color: rgba(255,255,255,0.75); font-style: italic; font-weight: 500;">
                👉 Pourquoi est-ce une erreur et comment la corriger ?
              </p>
            </main>
            <footer class="bf-card-ftr">
              <button type="button" class="bf-action-reveal" data-bf-reveal="${slideIdx}">Révéler la réponse ➔</button>
            </footer>
          </article>
        </div>
        <!-- PAGE 2 : RECTIFICATION -->
        <div class="bf-horiz-page page-2 bf-theme-trap-back">
          <div class="bf-bg-emoji">✅</div>
          <article class="bf-card-content bf-card-shell">
            <header class="bf-card-hdr">
              <span class="bf-type-badge">✅ À retenir</span>
            </header>
            <main class="bf-card-main scrollable">
              ${formatRichAnswer(card)}
              ${card.video ? `<div class="bf-media-container"><video src="${card.video}" controls muted playsinline></video></div>` : ''}
              ${!card.video && card.image ? `<div class="bf-media-container"><img src="${card.image}" alt=""></div>` : ''}
            </main>
            <footer class="bf-card-ftr">
              <span class="bf-swipe-left-hint">⬅ Revoir le piège</span>
            </footer>
          </article>
        </div>
      </div>`;
  }

  function bindSlideInteractions(slide, card, slideIdx) {
    slide.querySelectorAll('[data-bf-reveal]').forEach(btn => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (btn.dataset.stopTimer === '1') stopCasChocTimer(slideIdx);
        const scroller = slide.querySelector('.bf-horiz-scroll');
        if (!scroller) return;
        const target = Math.max(scroller.clientWidth, scroller.scrollWidth - scroller.clientWidth);
        haptic(7);
        // scrollTo est plus déterministe que scrollBy après un rerender du feed.
        try { scroller.scrollTo({ left: target, behavior: motionOK() ? 'smooth' : 'auto' }); }
        catch (_) { scroller.scrollLeft = target; }
        slide.dataset.revealed = '1';
        requestAnimationFrame(() => {
          if (scroller.scrollLeft < Math.min(8, target)) scroller.scrollLeft = target;
        });
      });
    });

    const memoBtn = slide.querySelector('.bf-memo-reveal-btn');
    if (memoBtn) {
      memoBtn.addEventListener('click', () => {
        const panel = slide.querySelector('.bf-panel-memo');
        panel.dataset.revealed = '1';
        panel.classList.add('revealed');
        memoBtn.style.display = 'none';
        slide.dataset.revealed = '1';
        haptic(7);
      });
    }

    const chocReveal = slide.querySelector('.bf-choc-reveal');
    if (chocReveal) {
      chocReveal.addEventListener('click', () => {
        slide.querySelector('.bf-choc-answer')?.classList.remove('hidden');
        chocReveal.style.display = 'none';
        stopCasChocTimer(slideIdx);
        slide.dataset.revealed = '1';
        haptic(7);
      });
    }

    const trapBtn = slide.querySelector('.bf-trap-reveal');
    if (trapBtn) {
      trapBtn.addEventListener('click', () => {
        slide.querySelector('.bf-trap-right')?.classList.remove('hidden');
        trapBtn.style.display = 'none';
        slide.dataset.revealed = '1';
        haptic(7);
      });
    }

    slide.querySelectorAll('.bf-quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        if (slide.dataset.quizDone === '1') return;
        const correct = btn.dataset.correct === '1';
        btn.classList.add(correct ? 'bf-quiz-correct' : 'bf-quiz-wrong');
        const fb = btn.querySelector('.bf-quiz-feedback');
        if (fb) fb.textContent = correct ? '✓' : '✕';
        slide.querySelectorAll('.bf-quiz-opt').forEach(b => {
          if (b.dataset.correct === '1') b.classList.add('bf-quiz-correct');
          b.disabled = true;
        });
        slide.querySelector('.bf-quiz-expl')?.classList.remove('hidden');
        slide.dataset.quizDone = '1';
        slide.dataset.revealed = '1';
        haptic(correct ? 12 : [18, 35, 18]);
        completeCard(card, correct, true);
      });
    });

    setupDoubleTap(slide, slideIdx);
  }

  function setupDoubleTap(slide, slideIdx) {
    let lastTap = 0;
    slide.addEventListener('pointerup', (e) => {
      if (e.target.closest('button') || e.target.closest('.bf-quiz-opt')) return;
      const now = Date.now();
      const delay = now - lastTap;
      if (delay < 300 && delay > 0) {
        triggerDoubleTapHeart(slide, slideIdx);
        lastTap = 0;
        return;
      }
      lastTap = now;
    }, { passive: true });
  }

  function triggerDoubleTapHeart(slide, slideIdx) {
    // Créer le cœur animé
    let heart = slide.querySelector('.bf-doubletap-heart');
    if (!heart) {
      heart = document.createElement('div');
      heart.className = 'bf-doubletap-heart';
      heart.innerHTML = '❤️';
      slide.appendChild(heart);
    }
    
    // Jouer son Ding
    playSound('ding');
    
    // Forcer le reflow
    heart.classList.remove('animate');
    void heart.offsetWidth;
    heart.classList.add('animate');
    
    // Action favori
    actionFavForIdx(slideIdx, true);
  }

  function startCasChocTimer(slideIdx, seconds) {
    stopCasChocTimer(slideIdx);
    let left = seconds;
    const tick = () => {
      const feed = document.getElementById('bfFeed');
      const slide = feed?.querySelector(`.bf-slide[data-idx="${slideIdx}"]`);
      if (!slide) return;
      const el = slide.querySelector('.bf-choc-time');
      const ring = slide.querySelector('.bf-choc-ring-fg');
      if (el) el.textContent = left;
      if (ring) {
        const pct = left / seconds;
        ring.style.strokeDashoffset = `${(1 - pct) * 100}`;
      }
      if (left <= 0) {
        slide.querySelector('.bf-choc-vignette')?.classList.add('bf-choc-pulse');
        return;
      }
      left--;
      activeTimers.set(slideIdx, setTimeout(tick, 1000));
    };
    tick();
  }

  function stopCasChocTimer(slideIdx) {
    const t = activeTimers.get(slideIdx);
    if (t) clearTimeout(t);
    activeTimers.delete(slideIdx);
  }

  function animateStatNumber(slide) {
    const num = slide.querySelector('.bf-stat-number');
    if (!num || num.dataset.animated === '1') return;
    num.dataset.animated = '1';
    const target = parseFloat(num.dataset.target);
    if (!motionOK()) {
      num.textContent = Number.isInteger(target) ? target : target.toFixed(1).replace('.', ',');
      return;
    }
    const isFloat = !Number.isInteger(target);
    let start = 0;
    const dur = 900;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      const v = target * ease;
      num.textContent = isFloat ? v.toFixed(1).replace('.', ',') : Math.round(v);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function renderSlides() {
    const feed = document.getElementById('bfFeed');
    if (!feed) return;
    feed.innerHTML = '';
    const end = Math.min(idx + BATCH_SIZE, deck.length);
    for (let i = idx; i < end; i++) {
      const slide = renderSlide(deck[i], i);
      if (i === idx) slide.classList.add('bf-slide-enter');
      feed.appendChild(slide);
    }
    renderedRange = { start: idx, end: end };
    setupObserver();
    updateHeader();
    highlightActiveSlide(feed);
  }

  function setupObserver() {
    if (observer) observer.disconnect();
    const feed = document.getElementById('bfFeed');
    if (!feed) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Pause videos when off-screen
        if (!entry.isIntersecting) {
          entry.target.querySelectorAll('video').forEach(v => { try { v.pause(); } catch (_) {} });
          return;
        }
        if (entry.intersectionRatio > 0.55) {
          const slideIdx = parseInt(entry.target.dataset.idx, 10);
          if (!isNaN(slideIdx) && slideIdx !== idx) {
            stopCasChocTimer(idx);
            idx = slideIdx;
            updateHeader();
            highlightActiveSlide(feed);
            if (idx >= renderedRange.end - 2) loadMoreSlides();
          }
          const type = entry.target.dataset.type;
          if (type === 'cas_choc') {
            const card = deck[slideIdx];
            if (card) startCasChocTimer(slideIdx, card.timer || 30);
          }
          if (type === 'chiffre_cle') animateStatNumber(entry.target);
          // Autoplay visual / embedded videos on active slide
          entry.target.querySelectorAll('video').forEach(v => {
            try { v.muted = true; v.play().catch(() => {}); } catch (_) {}
          });
        }
      });
    }, { root: feed, threshold: [0.55, 0.75] });

    feed.querySelectorAll('.bf-slide').forEach(slide => observer.observe(slide));
  }

  function loadMoreSlides() {
    const feed = document.getElementById('bfFeed');
    if (!feed) return;
    const end = Math.min(renderedRange.end + BATCH_SIZE, deck.length);
    for (let i = renderedRange.end; i < end; i++) {
      const slide = renderSlide(deck[i], i);
      feed.appendChild(slide);
      observer.observe(slide);
    }
    renderedRange.end = end;
  }

  function highlightActiveSlide(feed) {
    if (!feed) feed = document.getElementById('bfFeed');
    if (!feed) return;
    feed.querySelectorAll('.bf-slide').forEach(s => {
      const on = parseInt(s.dataset.idx, 10) === idx;
      s.classList.toggle('bf-slide-active', on);
      if (on && s.dataset.entered !== '1') {
        s.dataset.entered = '1';
        s.classList.add('bf-reel-enter');
      }
    });
    updateActionRail();
  }

  function checkAchievements() {
    const unlocked = loadAchievements();
    const stats = loadStats();
    const snapshot = {
      streak: stats.streak,
      dailyDone: stats.dailyDone,
      totalCards: stats.totalCards,
      _sessionCombo10: sessionCombo10Unlocked
    };
    const newly = [];
    ACHIEVEMENTS.forEach(a => {
      if (!unlocked.includes(a.id) && a.check(snapshot)) {
        unlocked.push(a.id);
        newly.push(a);
      }
    });
    if (newly.length) {
      saveAchievements(unlocked);
      renderAchievementBadges();
      const first = newly[0];
      showToast(`${first.icon} Badge : ${first.title}`);
      showAchievementToast(newly);
    }
  }

  function showAchievementToast(badges) {
    let el = document.getElementById('bfAchievementPop');
    if (!el) {
      el = document.createElement('div');
      el.id = 'bfAchievementPop';
      el.className = 'bf-achievement-pop';
      document.getElementById('vFeed')?.appendChild(el);
    }
    el.innerHTML = badges.map(b =>
      `<div class="bf-achievement-pop-item"><span class="bf-ach-icon">${b.icon}</span><div><strong>${esc(b.title)}</strong><span>${esc(b.desc)}</span></div></div>`
    ).join('');
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3200);
  }

  function renderAchievementBadges() {
    const tray = document.getElementById('bfAchTray');
    if (!tray) return;
    const unlocked = new Set(loadAchievements());
    tray.innerHTML = ACHIEVEMENTS.map(a => {
      const on = unlocked.has(a.id);
      return `<button type="button" class="bf-ach-badge ${on ? 'unlocked' : 'locked'}" title="${esc(a.title)} — ${esc(a.desc)}" aria-label="${esc(a.title)}">${a.icon}</button>`;
    }).join('');
  }

  function ensureFeedChrome() {
    const header = document.querySelector('#vFeed .bf-header');
    if (!header) return;
    header.classList.add('bf-header-enhanced');
    if (!document.getElementById('bfDailyGoal')) {
      const goalWrap = document.createElement('div');
      goalWrap.className = 'bf-daily-goal';
      goalWrap.id = 'bfDailyGoal';
      goalWrap.innerHTML = `
      <div class="bf-daily-goal-label">
        <span>Objectif du jour</span>
        <span id="bfCounterGoal">0 / ${DAILY_GOAL}</span>
      </div>
      <div class="bf-daily-goal-track"><div class="bf-daily-goal-fill" id="bfDailyGoalFill"></div></div>`;
      header.appendChild(goalWrap);

      const achTray = document.createElement('div');
      achTray.id = 'bfAchTray';
      achTray.className = 'bf-ach-tray';
      achTray.setAttribute('aria-label', 'Badges');
      header.appendChild(achTray);
    }

    const streakEl = document.getElementById('bfStreak');
    if (streakEl) streakEl.classList.add('bf-streak-fire');

    let comboCanvas = document.getElementById('bfComboConfetti');
    if (!comboCanvas) {
      comboCanvas = document.createElement('canvas');
      comboCanvas.id = 'bfComboConfetti';
      comboCanvas.className = 'bf-combo-confetti-canvas';
      document.getElementById('vFeed')?.appendChild(comboCanvas);
    }
    renderAchievementBadges();
  }

  function updateHeader() {
    const counter = document.getElementById('bfCounter');
    const progressBar = document.getElementById('bfProgress');
    const goalFill = document.getElementById('bfDailyGoalFill');
    const counterGoal = document.getElementById('bfCounterGoal');
    const pointsEl = document.getElementById('bfPoints');
    const streakEl = document.getElementById('bfStreak');
    const comboEl = document.getElementById('bfComboBadge');

    const pct = Math.min(100, (dailyDone / DAILY_GOAL) * 100);
    if (counter) counter.textContent = `${dailyDone} / ${DAILY_GOAL}`;
    if (counterGoal) counterGoal.textContent = `${dailyDone} / ${DAILY_GOAL}`;
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (goalFill) {
      goalFill.style.width = `${pct}%`;
      goalFill.classList.toggle('bf-goal-complete', dailyDone >= DAILY_GOAL);
    }
    if (pointsEl) pointsEl.textContent = `${points} pts`;
    if (streakEl) {
      streakEl.innerHTML = `<span class="bf-fire-emoji" aria-hidden="true">🔥</span><span class="bf-streak-num">${streak}</span>`;
      streakEl.classList.toggle('bf-streak-hot', streak >= 3);
      streakEl.classList.toggle('bf-streak-mega', streak >= 10);
    }
    if (comboEl) {
      comboEl.textContent = combo >= 2 ? `x${combo}` : '';
      comboEl.classList.toggle('visible', combo >= 2);
      comboEl.classList.toggle('bf-combo-on-fire', combo >= COMBO_CONFETTI_AT);
    }
  }

  function completeCard(card, correct, fromQuiz = false) {
    if (!card || completedCardIds.has(card.id)) return false;
    completedCardIds.add(card.id);
    if (card.srsKey) updateSRS(card, correct);

    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const stats = loadStats();
    freshFeedDay(stats);
    if (stats.lastStudyDay !== today) {
      stats.streak = stats.lastStudyDay === yesterday ? (stats.streak || 0) + 1 : 1;
      stats.lastStudyDay = today;
    }
    streak = stats.streak || 1;
    dailyDone = Math.min(DAILY_GOAL, (stats.dailyDone || 0) + 1);
    stats.dailyDone = dailyDone;
    stats.totalCards = (stats.totalCards || 0) + 1;
    stats.correctCards = (stats.correctCards || 0) + (correct ? 1 : 0);
    stats.activityByDay = stats.activityByDay || {};
    const key = new Date().toISOString().slice(0, 10);
    stats.activityByDay[key] = (stats.activityByDay[key] || 0) + 1;

    if (correct) {
      combo++;
      if (fromQuiz) quizCombo++;
      const bonus = 10 + Math.min(combo * 2, 24);
      points += bonus;
      playSound('ding');
      showCombo();
      if (combo === COMBO_CONFETTI_AT) {
        sessionCombo10Unlocked = true;
        launchConfetti('bfComboConfetti');
        showToast(`🎉 COMBO x${combo} !`);
      }
    } else {
      combo = 0;
      quizCombo = 0;
      playSound('buzz');
    }
    stats.points = points;
    saveStats(stats);
    checkAchievements();
    if (dailyDone >= DAILY_GOAL) checkDailyGoal();
    updateHeader();
    return true;
  }

  function activeSlide() {
    return document.getElementById('bfFeed')?.querySelector(`.bf-slide[data-idx="${idx}"]`);
  }

  function requireRevealed(card) {
    const slide = activeSlide();
    if (card.type === 'quiz_flash') {
      showToast('Choisis une réponse sur la carte');
      return false;
    }
    if (!slide?.dataset.revealed) {
      showToast('Révèle d’abord la réponse, puis auto-évalue-toi');
      return false;
    }
    return true;
  }

  function actionKnow() {
    const card = deck[idx];
    if (!card) return;
    if (!requireRevealed(card) || completedCardIds.has(card.id)) return;
    if (!completeCard(card, true)) return;
    activeSlide()?.classList.add('bf-feedback-success');
    haptic(14);
    showToast(combo >= COMBO_BONUS_AT ? `🔥 COMBO x${combo} !` : `+${10 + Math.min(combo * 2, 24)} pts`);
    scrollToNext();
  }

  function actionDontKnow() {
    const card = deck[idx];
    if (!card) return;
    if (!requireRevealed(card) || completedCardIds.has(card.id)) return;
    if (!completeCard(card, false)) return;
    activeSlide()?.classList.add('bf-feedback-review');
    haptic([18, 35, 18]);
    showToast('Programmé pour une nouvelle révision');
    scrollToNext();
  }

  function updateActionRail() {
    const btn = document.getElementById('bfFavAction');
    if (!btn) return;
    const card = deck[idx];
    const saved = !!card && loadFavs().includes(card.id);
    btn.classList.toggle('is-saved', saved);
    btn.setAttribute('aria-label', saved ? 'Retirer cette carte des favoris' : 'Garder cette carte');
    const label = btn.querySelector('span');
    if (label) label.textContent = saved ? 'Gardé' : 'Garder';
  }

  function actionFavForIdx(slideIdx, forceSave = false) {
    const card = deck[slideIdx];
    if (!card) return;
    const favs = loadFavs();
    const alreadySaved = favs.includes(card.id);
    if (!alreadySaved) {
      favs.push(card.id);
      saveFavs(favs);
    } else if (!forceSave) {
      favs.splice(favs.indexOf(card.id), 1);
      saveFavs(favs);
    }
    updateActionRail();
    haptic(9);
    showToast(alreadySaved && !forceSave ? 'Retiré des favoris' : '❤️ Gardé pour plus tard');
  }

  function actionFav() {
    actionFavForIdx(idx);
  }

  function scrollToNext() {
    const feed = document.getElementById('bfFeed');
    if (!feed) return;
    if (idx + 1 >= deck.length) {
      showToast('Fin de cette sélection · change de rubrique pour continuer');
      return;
    }
    const nextSlide = feed.querySelector(`.bf-slide[data-idx="${idx + 1}"]`);
    if (nextSlide) nextSlide.scrollIntoView({ behavior: motionOK() ? 'smooth' : 'auto', block: 'start' });
    else {
      idx++;
      if (idx < deck.length) renderSlides();
    }
  }

  function showCombo() {
    if (combo < 3) return;
    const feed = document.getElementById('bfFeed');
    if (!feed) return;
    let comboEl = feed.querySelector('.bf-combo-float');
    if (!comboEl) {
      comboEl = document.createElement('div');
      comboEl.className = 'bf-combo-float';
      feed.appendChild(comboEl);
    }
    comboEl.textContent = combo >= COMBO_BONUS_AT ? `🔥 MEGA x${combo}` : `COMBO x${combo}`;
    comboEl.classList.remove('bf-combo-mega');
    if (combo >= COMBO_BONUS_AT) comboEl.classList.add('bf-combo-mega');
    comboEl.classList.add('show');
    setTimeout(() => comboEl.classList.remove('show'), combo >= COMBO_BONUS_AT ? 1400 : 900);
  }

  function updateSRS(card, correct) {
    const srs = loadSRS();
    const entry = srs[card.srsKey] || { ease: 2.5, interval: 0, nextReview: 0 };
    if (correct) {
      entry.interval = entry.interval === 0 ? 1 : Math.round(entry.interval * entry.ease);
      entry.ease = Math.max(1.3, entry.ease + 0.1);
    } else {
      entry.interval = 0;
      entry.ease = Math.max(1.3, entry.ease - 0.2);
    }
    entry.nextReview = Date.now() + entry.interval * 86400000;
    srs[card.srsKey] = entry;
    saveSRS(srs);
  }

  function updateStats() {
    const stats = loadStats();
    stats.points = points;
    stats.dailyDone = dailyDone;
    stats.streak = streak;
    stats.lastDay = new Date().toDateString();
    if (stats.totalCards == null) stats.totalCards = 0;
    saveStats(stats);
  }

  function showToast(msg) {
    const t = document.getElementById('bfToast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
  }

  function shareCard(slideIdx = idx) {
    const card = deck[slideIdx];
    if (!card) return;
    let text = '';
    if (card.type === 'citation') text = card.text + '\n— ' + card.author;
    else if (card.type === 'chiffre_cle') text = `${card.value}${card.unit} — ${card.line}`;
    else if (card.type === 'piege_exam') text = `Piège: ${card.trap}\n\n${card.explain}`;
    else if (card.type === 'memo_jour') text = `${card.question}\n\n${card.mnemonic}`;
    else if (card.type === 'cas_choc') text = `${card.vignette}\n\n→ ${card.diagnosis}`;
    else if (card.type === 'quiz_flash') text = `${card.question}\n\n${card.explanation}`;
    else text = `${card.question || card.trap || ''}\n\n${card.answer || card.explain || card.detail || ''}`;
    const payload = text + '\n\n— Gériatrie App BrainFeed';
    if (navigator.share) {
      navigator.share({ title: 'BrainFeed Gériatrie', text: payload }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(payload).then(() => showToast('📋 Copié pour partage'));
    }
  }

  function onKeyDown(e) {
    if (!document.getElementById('vFeed')?.classList.contains('active')) return;
    if (e.key === 'ArrowUp' || e.key === 'k') actionKnow();
    else if (e.key === 'ArrowDown' || e.key === 'j') actionDontKnow();
    else if (e.key === 'f') actionFav();
    else if (e.key === 'ArrowLeft') actionFav();
    else if (e.key === 'ArrowRight') shareCard(idx);
    else if (e.key === ' ') {
      e.preventDefault();
      document.getElementById(`bfCard-${idx}`)?.classList.toggle('flipped');
    }
  }

  function launchConfetti(canvasId = 'bfConfetti') {
    if (!motionOK()) return;
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ['#22D3EE', '#34D399', '#FBBF24', '#F472B6', '#A78BFA', '#FB7185'];
    const pieces = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: 4 + Math.random() * 6,
      c: colors[Math.floor(Math.random() * colors.length)],
      vx: -2 + Math.random() * 4,
      vy: 2 + Math.random() * 5,
      rot: Math.random() * 360,
      vr: -8 + Math.random() * 16
    }));
    let frame = 0;
    const maxFrames = 180;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y > canvas.height) p.y = -10;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.4);
        ctx.restore();
      });
      frame++;
      if (frame < maxFrames) requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    draw();
  }

  function checkDailyGoal() {
    if (dailyDone < DAILY_GOAL) return;
    const stats = loadStats();
    const today = new Date().toDateString();
    if (stats.goalCelebratedDate === today) return;
    stats.goalCelebratedDate = today;
    points += 50;
    stats.points = points;
    saveStats(stats);
    showBfCelebration();
  }

  function showBfCelebration() {
    let cel = document.querySelector('.bf-celebration');
    if (!cel) {
      cel = document.createElement('div');
      cel.className = 'bf-celebration';
      cel.innerHTML = `
        <canvas id="bfConfetti" class="bf-confetti-canvas"></canvas>
        <div class="bf-celebration-inner">
          <h2>🏆 Objectif du jour !</h2>
          <p>${DAILY_GOAL} cartes — tu assures.</p>
          <p class="bf-celebration-sub">Tape pour continuer le feed</p>
        </div>`;
      cel.onclick = () => cel.classList.remove('show');
      document.body.appendChild(cel);
    }
    cel.classList.add('show');
    requestAnimationFrame(() => launchConfetti('bfConfetti'));
    checkAchievements();
    updateHeader();
  }

  function init() {
    try {
      const stored = localStorage.getItem('bf_session');
      if (['mix', 'flash', 'cas', 'pieges', 'visual'].includes(stored)) activeSession = stored;
    } catch (_) {}
    deck = buildDeck();
    idx = 0;
    combo = 0;
    quizCombo = 0;
    completedCardIds = new Set();
    sessionCombo10Unlocked = false;
    ensureFeedChrome();
    updateSessionChrome();
    renderSlides();
    highlightActiveSlide();
    document.addEventListener('keydown', onKeyDown);

    const feed = document.getElementById('bfFeed');
    if (feed) {
      if (feedScrollHandler) feed.removeEventListener('scroll', feedScrollHandler);
      feedScrollHandler = () => {
        const scrollBottom = feed.scrollHeight - feed.scrollTop - feed.clientHeight;
        if (scrollBottom < feed.clientHeight && renderedRange.end < deck.length) loadMoreSlides();
      };
      feed.addEventListener('scroll', feedScrollHandler, { passive: true });
    }

    let comboBadge = document.getElementById('bfComboBadge');
    if (!comboBadge) {
      const bar = document.querySelector('.bf-stats-bar');
      if (bar) {
        comboBadge = document.createElement('span');
        comboBadge.id = 'bfComboBadge';
        comboBadge.className = 'bf-combo-header';
        bar.appendChild(comboBadge);
      }
    }
  }

  function destroy() {
    if (observer) observer.disconnect();
    activeTimers.forEach(t => clearTimeout(t));
    activeTimers.clear();
    document.removeEventListener('keydown', onKeyDown);
    const feed = document.getElementById('bfFeed');
    if (feed && feedScrollHandler) feed.removeEventListener('scroll', feedScrollHandler);
    feedScrollHandler = null;
  }

  return {
    init,
    destroy,
    actionKnow,
    actionDontKnow,
    actionFav,
    shareCard,
    renderSlides,
    selectSession,
    audit: () => {
      const pools = buildSpecialPools();
      return { deck: buildDailyDeck(pools), pools };
    }
  };
})();

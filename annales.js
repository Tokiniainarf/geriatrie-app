const ANNALES = [
  // ── Cas 1 : Chute récidivante (Ch12) ──
  { id: 1, chapter: 'ch12', difficulty: 'A',
    case: "Mme Dupont, 84 ans, est amenée aux urgences après sa 3ème chute en 2 mois. Elle vit seule, marche avec une canne. PMH: HTA, diabète type 2, arthrose genou. TTT: amlodipine 10mg, metformine 1000mg, tramadol 50mg, zolpidem 10mg, lorazépam 1mg.",
    questions: [
      { q: "Listez les facteurs de risque intrinsèques de chute chez cette patiente.", a: "Âge avancé (84 ans), antécédents de chutes récidivantes (3 en 2 mois), pathologies chroniques (HTA, diabète, arthrose), troubles de la marche/d'équilibre, polypharmacie (5 médicaments).", rang: "A" },
      { q: "Quels sont les facteurs iatrogènes identifiés ?", a: "Tramadol (risque de somnolence, hypotension orthostatique), zolpidem (sédation, somnambulisme, chutes nocturnes), lorazépam (benzodiazépine = risque de chute ++, critères Beers). Amlodipine peut aussi causer hypotension orthostatique.", rang: "A" },
      { q: "Quel test d'évaluation du risque de chute recommandez-vous en première intention ?", a: "Le Timed Up and Go (TUG) : se lever d'une chaise, marcher 3 mètres, demi-tour, revenir s'asseoir. > 20 secondes = risque de chute élevé. Compléter par l'évaluation de la marche sur 4 mètres et le test de Tinetti (équilibre + marche).", rang: "A" },
      { q: "Quelle conduite à tenir thérapeutique ?", a: "1. Arrêt du zolpidem et du lorazépam (sevrage progressif). 2. Réévaluation du tramadol (paracétamol en 1ère intention). 3. Kinésithérapie de renforcement musculaire et rééducation de l'équilibre. 4. Adaptation du domicile (tapis, éclairage, barres d'appui). 5. Correction des troubles visuels si besoin.", rang: "A" }
    ]
  },

  // ── Cas 2 : Confusion aiguë (Ch11) ──
  { id: 2, chapter: 'ch11', difficulty: 'A',
    case: "M. Martin, 79 ans, hospitalisé pour pneumopathie. Son infirmière le trouve agité, désorienté dans la nuit, il tire sa perfusion. Il était orienté le matin. PMH: BPCO, insuffisance rénale modérée (DFG 45). TTT: amoxicilline IV, prednisolone, salbutamol.",
    questions: [
      { q: "Quel est le diagnostic le plus probable ?", a: "Syndrome confusionnel aigu (delirium) de type hyperactif. Arguments : début brutal (quelques heures), agitation nocturne, désorientation, fluctuation (normal le matin → agité la nuit), contexte déclenchant (infection, hospitalisation).", rang: "A" },
      { q: "Quels critères diagnostiques utilisez-vous ?", a: "Critères CAM (Confusion Assessment Method) : 1. Début aigu et fluctuant ✓. 2. Inattention ✓. 3. Désorganisation de la pensée ✓. 4. Altération du niveau de conscience probable. Les 2 premiers + au moins 1 des 2 derniers = diagnostic de delirium.", rang: "A" },
      { q: "Quelles sont les causes possibles à rechercher ?", a: "Méthode des 6D : Infection (pneumopathie ✓), Douleur, Déshydratation, Déséquilibre métabolique (insuffisance rénale → accumulation médicamenteuse), Drogues/médicaments (prednisolone = facteur iatrogène ++, corticoïdes = delirium), Désorientation (hospitalisation, nuit).", rang: "A" },
      { q: "Quelle prise en charge immédiate ?", a: "1. Mesures environnementales : chambre calme, lumière douce, présence rassurante, horloge visible. 2. Recherche et traitement de la cause sous-jacente. 3. Correction de l'insuffisance rénale (adaptation posologie). 4. Éviter les contenants physiques. 5. Halopéridol à faible dose si agitation majeure (0.5-1 mg). 6. Éviter les benzodiazépines sauf sevrage alcool.", rang: "A" }
    ]
  },

  // ── Cas 3 : Dénutrition (Ch14) ──
  { id: 3, chapter: 'ch14', difficulty: 'A',
    case: "Mme Bernard, 82 ans, consulte pour asthénie et perte de 6 kg en 3 mois. IMC actuel : 19. Elle vit avec son mari, mange peu, dit « n'avoir plus d'appétit ». PMH: BPCO, dépression traitée. MNA (Mini Nutritional Assessment) : 17/30.",
    questions: [
      { q: "Que signifie ce score MNA ?", a: "MNA 17-23,5 = risque de dénutrition. < 17 = dénutrition constituée. Cette patiente à 17 est en dénutrition. Le MNA évalue : changement alimentaire, perte de poids, stress, problèmes neuropsychologiques, IMC, autonomie.", rang: "A" },
      { q: "Quels arguments cliniques en faveur de la dénutrition ?", a: "Perte de poids ≥ 5% en 1 mois ou ≥ 10% en 6 mois (ici 6 kg en 3 mois = >5%). IMC < 21. Anorexie. Asthénie. Contexte de BPCO (hyperinflation → satiété précoce) et dépression (perte d'appétit).", rang: "A" },
      { q: "Quels bilans complémentaires demandez-vous ?", a: "NFS (anémie), albumine, préalbumine (marqueur nutritionnel à demi-vie courte), ionogramme, créatinine, vitamine D, vitamine B12, acide folique, TSH. Bilan étiologique : recherche cancer (scanner thoraco-abdominal si perte de poids inexpliquée), évaluation dépression (GDS).", rang: "A" },
      { q: "Quelle stratégie de réalimentation ?", a: "1. Enrichissement de l'alimentation (crème, beurre, fromage râpé). 2. Compléments nutritionnels oraux (CNO) 2-3/jour. 3. Fractionnement des repas (5-6/jour). 4. Traitement de la dépression si insuffisant. 5. Surveillance poids hebdomadaire. 6. Si échec : nutrition entérale par sonde (objectif >30 kcal/kg/j). Réalimentation progressive pour éviter le syndrome de renutrition.", rang: "A" }
    ]
  },

  // ── Cas 4 : Troubles neurocognitifs (Ch9) ──
  { id: 4, chapter: 'ch9', difficulty: 'A',
    case: "M. Durand, 76 ans, amené par sa fille qui note des troubles de mémoire depuis 1 an, des difficultés à gérer ses comptes, des oublis de rendez-vous. Il se perd parfois dans son quartier. Épisode d'agitation nocturne récent. Examen neuro : MMSE 22/30, MoCa 18/30. Pas de signes focaux.",
    questions: [
      { q: "Quel type de trouble neurocognitif suspectez-vous ?", a: "Trouble neurocognitif majeur (démence) probable. Arguments : atteinte de plusieurs domaines cognitifs (mémoire, fonctions exécutives, orientation, praxies), retentissement sur les AVD (gestion administrative), évolution progressive (1 an), MMSE < 24 et MoCa < 26.", rang: "A" },
      { q: "Quels diagnostics différentiels éliminez-vous ?", a: "1. Démence à corps de Lewy (hallucinations, fluctuations, parkinsonisme — à rechercher). 2. Démence fronto-temporale (troubles comportementaux, aphasie). 3. Démence vasculaire (facteurs vasculaires, signes focaux — absents ici). 4. Hydrocéphalie à pression normale (triade Hakim-Adams — à éliminer par IRM). 5. Pseudo-démence dépressive (GDS à faire). 6. Causes réversibles : B12, TSH, syphilis.", rang: "A" },
      { q: "Quels examens complémentaires demandez-vous ?", a: "1. Bilan biologique : NFS, glycémie, fonction rénale, ionogramme, calcémie, TSH, vitamine B12, folates, VSG, CRP, sérologie syphilis, sérologie VIH si facteurs de risque. 2. IRM cérébrale (atrophie hippocampique, infarctus, hydrocéphalie). 3. Évaluation psychiatrique (GDS pour dépression). 4. EEG si suspicion de crise.", rang: "A" },
      { q: "Quelle prise en charge thérapeutique ?", a: "1. IChE (inhibiteurs de cholinestérase) : donépézil 5mg/j (1ère intention Alzheimer). 2. Mémantine si stade modéré-avancé. 3. Non-pharmacologique : stimulation cognitive, activité physique, socialisation. 4. Aide à domicile, évaluation APA. 5. Sécurisation du domicile. 6. Information de l'entourage (aidants). 7. Directive anticipée + personne de confiance.", rang: "A" }
    ]
  },

  // ── Cas 5 : Douleur chronique (Ch8) ──
  { id: 5, chapter: 'ch8', difficulty: 'A',
    case: "Mme Petit, 88 ans, institutionnalisée pour démence modérée. Elle gémit, se replie sur elle-même quand les aides-soignantes la mobilisent pour la toilette. Elle ne peut pas communiquer verbalement. L'équipe pense que « c'est son état ».",
    questions: [
      { q: "Comment évaluer la douleur chez cette patiente non communicante ?", a: "Échelle ECPA (Échelle Comportementale pour Personnes Âgées non communicantes) ou échelle DOLOPLUS-2. Observations : mimiques faciales (grimaces), vocalisations (gémissements), langage corporel (protection, retrait), modifications du comportement (agitation, repli), changements de l'activité (refus de manger, insomnie).", rang: "A" },
      { q: "Quelles sont les causes de douleur probables ?", a: "Pathologies musculo-squelettiques (arthrose ++ chez la personne âgée), escarres (à rechercher systématiquement), constipation, infection urinaire, douleur neuropathique, contractures/maintien prolongé au lit. La mobilisation pour la toilette déclenche la douleur → orientation vers douleur articulaire/musculaire.", rang: "A" },
      { q: "Quelle stratégie antalgique recommandez-vous ?", a: "Échelle OMS adaptée au sujet âgé : Palier 1 : paracétamol 1g x 3/j (max 3g/j car poids). Palier 2 : tramadol à dose réduite (50mg, surveillance rénale). Éviter AINS (effets indésirables ++ chez la personne âgée). Traitements non médicamenteux : kinésithérapie douce, balnéothérapie, application de chaleur, repositionnement. AINS topiques si arthrose locale.", rang: "A" }
    ]
  },

  // ── Cas 6 : Ostéoporose et fracture (Ch6) ──
  { id: 6, chapter: 'ch6', difficulty: 'A',
    case: "Mme Leroy, 75 ans, chute de sa hauteur → fracture du col fémoral. DEXA : T-score col fémoral = -3.2, T-score rachis L2-L4 = -2.8. PMH: corticothérapie prolongée pour polymyalgia rheumatica (prednisone 10mg/j depuis 3 ans). Mère fracturée du col à 70 ans.",
    questions: [
      { q: "Cette patiente a-t-elle une ostéoporose ?", a: "Oui. T-score ≤ -2.5 = ostéoporose (ici -3.2 au col fémoral = ostéoporose franche). Facteurs de risque : âge (75 ans), antécédent de fracture à faible traumatisme (col fémoral), ATCD familial (mère), corticothérapie prolongée (≥ 3 mois ≥ 7.5mg/j = ostéoporose secondaire).", rang: "A" },
      { q: "Quel traitement anti-ostéoporotique instaurer ?", a: "1. Bisphosphonates (alendronate 70mg/semaine ou zolédronate 5mg IV/an si troubles de la déglutition). 2. Supplémentation : calcium 1000-1200mg/j + vitamine D 800-1000 UI/j. 3. Réduire la corticothérapie si possible. 4. Si échec/réponse insuffisante : dénosumab (anti-RANKL) ou tériparatide (PTH).", rang: "A" },
      { q: "Quelles mesures non médicamenteuses ?", a: "1. Activité physique adaptée (marche, renforcement musculaire). 2. Prévention des chutes (évaluation des facteurs de risque, adaptation du domicile). 3. Arrêt du tabac si fumeuse. 4. Réduction de l'alcool. 5. Éclairage, antidérapants, chaussures adaptées.", rang: "A" }
    ]
  },

  // ── Cas 7 : Dépression gériatrique (Ch10) ──
  { id: 7, chapter: 'ch10', difficulty: 'A',
    case: "M. Moreau, 81 ans, veuf depuis 6 mois. Sa fille le trouve « changé » : il ne sort plus, ne s'intéresse plus à son jardin, mange peu, dort mal, dit que « la vie n'a plus de sens ». Il a perdu 4 kg. GDS-15 : 11/15. MMSE : 27/30.",
    questions: [
      { q: "Quel diagnostic retenez-vous ?", a: "Épisode dépressif caractérisé chez la personne âgée. Critères : humeur dépressive (perte de sens), anhédonie (plus d'intérêt pour le jardin), troubles du sommeil et de l'appétit, perte de poids, contexte de deuil (facteur déclenchant). GDS-15 > 5 = dépistage positif (ici 11/15). MMSE normal élimine une pseudo-démence.", rang: "A" },
      { q: "Comment distinguer dépression et deuil normal ?", a: "Deuil normal : tristesse par vagues, conservation de l'estime de soi, capacité de se projeter, amélioration progressive en 6-12 mois. Dépression : tristesse permanente, perte d'estime de soi, idéation suicidaire, incapacité fonctionnelle, perte d'intérêt globale. Ici : retentissement fonctionnel majeur + idées de sens → dépression.", rang: "A" },
      { q: "Quel traitement proposer ?", a: "1. ISRS en 1ère intention : escitalopram 5-10mg ou sertraline 50mg (meilleur profil d'interactions chez le sujet âgé). 2. Psychothérapie de soutien, thérapie cognitivo-comportementale. 3. Activité physique adaptée. 4. Luminothérapie si composante saisonnière. 5. Surveillance rapprochée (risque suicidaire ++). 6. Éviter les tricycliques (effets anticholinergiques, risque de chute).", rang: "A" }
    ]
  },

  // ── Cas 8 : Prescrire chez la PA (Ch16) ──
  { id: 8, chapter: 'ch16', difficulty: 'A',
    case: "M. Fournier, 85 ans, 8 médicaments/jour : amlodipine, metformine, oméprazole, lorazépam, diclofénac, diphénhydramine, atorvastatine, aspirine. DFG 35 ml/min. Chutes récidivantes, constipation, somnolence diurne.",
    questions: [
      { q: "Appliquez les critères STOPP/START à cette ordonnance.", a: "STOPP (à arrêter) : 1. Lorazépam (BZD > 4 semaines = risque chute/sédation). 2. Diclofénac (AINS = risque insuffisance rénale, ulcère, HTA — DFG 35). 3. Diphénhydramine (anticholinergique = confusion, rétention urinaire, constipation — critères Beers). 4. Oméprazole sans indication claire (surprescription). START (à ajouter) : Vitamine D (prévention chute/ostéoporose).", rang: "A" },
      { q: "Quels sont les principes de la revue médicamenteuse ?", a: "1. Lister tous les médicaments (y compris OTC, phytothérapie). 2. Évaluer l'indication de chaque molécule. 3. Adapter aux fonctions rénales/hépatiques. 4. Chercher les interactions médicamenteuses. 5. Utiliser les critères Beers (médicaments inappropriés) et STOPP/START. 6. Principe « start low, go slow ». 7. Réévaluer régulièrement.", rang: "A" },
      { q: "Quels critères Beers sont enfreints ici ?", a: "1. Benzodiazépines (lorazépam) : risque de chute, dépendance, troubles cognitifs. 2. AINS (diclofénac) : risque rénal, GI, cardiovasculaire. 3. Anticholinergiques (diphénhydramine) : confusion, rétention, constipation, sécheresse buccale. 4. IPP prolongé sans réévaluation (risque C. difficile, hypomagnésémie).", rang: "A" }
    ]
  },

  // ── Cas 9 : Escarres (Ch13) ──
  { id: 9, chapter: 'ch13', difficulty: 'B',
    case: "Mme Rousseau, 90 ans, alitée depuis 10 jours après un AVC. IMC 18, incontinente, albumine 22 g/L. L'infirmière constate une rougeur au niveau du sacrum qui ne disparaît pas à la pression (stade 1). Score de Waterlow : 22.",
    questions: [
      { q: "Interprétez le score de Waterlow.", a: "Waterlow > 20 = risque très élevé (ici 22). Facteurs : âge > 75, IMC < 20 (malnutrition), alitement, incontinence, hypoalbuminémie < 35 g/L. Classification des escarres : Stade 1 = érythème persistant (pas de perte cutanée), Stade 2 = décollement cutané, Stade 3 = nécrose du derme, Stade 4 = nécrose des tissus profonds.", rang: "A" },
      { q: "Quelle stratégie de prévention ?", a: "1. Matelas anti-escarres (alternant ou à pression constante). 2. Changement de position toutes les 2 heures. 3. Soins cutanés : hydratation, protection contre l'humidité (changes). 4. Supplémentation nutritionnelle (CNO, enrichissement). 5. Mobilisation précoce. 6. Surveillance cutanée quotidienne. 7. Réduction de la pression : surélevation talons, coussins.", rang: "A" },
      { q: "Comment prendre en charge cette escarre de stade 1 ?", a: "1. Soulager la pression (ne plus positionner sur le sacrum). 2. Pansement hydrocolloide ou film transparent pour protection. 3. Pas de désinfectant cutané (cytotoxique). 4. Améliorer l'état nutritionnel (réalimentation). 5. Surveillance quotidienne de l'évolution. 6. Si stade 2+ : consultation plaie et cicatrisation.", rang: "B" }
    ]
  },

  // ── Cas 10 : Soins palliatifs (Ch17) ──
  { id: 10, chapter: 'ch17', difficulty: 'A',
    case: "M. Garnier, 88 ans, en phase terminale d'un cancer du pancréas métastatique. Il est conscient, souffre (EVA 8/10), demande à « ne plus souffrir ». Sa fille souhaite « qu'on fasse tout ». L'équipe médicale propose une sédation.",
    questions: [
      { q: "Qu'est-ce que la sédation en fin de vie ?", a: "Administration de médicaments à doses progressives pour obtenir une diminution de la vigilance visant à soulager une souffrance réfractaire. Types : sédation proportionnelle (réversible), sédation profonde et continue jusqu'au décès (SPCMD). La décision doit respecter les conditions cliniques et légales applicables, l'information et la traçabilité.", rang: "A" },
      { q: "Quelles sont les conditions légales de la sédation ?", a: "Loi Claeys-Leonetti : évaluer le caractère réfractaire de la souffrance et la situation clinique, recueillir la demande et les volontés du patient lorsqu'il peut les exprimer, appliquer la procédure collégiale lorsqu'elle est requise, informer les personnes concernées et tracer la décision dans le dossier. La sédation est proportionnée à l'objectif de soulagement ; la SPCMD répond à des conditions légales spécifiques.", rang: "A" },
      { q: "Comment gérer la douleur de ce patient en attendant la sédation ?", a: "Poursuivre sans délai l'analgésie et les soins de confort. Titrer l'opioïde selon l'intensité, les traitements antérieurs, la fonction rénale, la voie disponible et le protocole du service ; prévoir des interdoses et réévaluer douleur, vigilance et effets indésirables. Rechercher une composante neuropathique, traiter l'anxiété sans confondre anxiolyse et sédation, et maintenir écoute, présence et accompagnement souhaité.", rang: "A" }
    ]
  },

  // ── Cas 11 : Polymédication et iatrogénie (Ch16) ──
  { id: 11, chapter: 'ch16', difficulty: 'A',
    case: "M. Blanc, 82 ans, consulte pour chutes et troubles de la mémoire. Il prend 12 médicaments : losartan, aspirine, clopidogrel, atorvastatine, metformine, gliclazide, oméprazole, lorazépam, codéine, paracétamol, furosémide, spironolactone.",
    questions: [
      { q: "Identifiez les interactions et risques iatrogènes.", a: "1. Aspirine + clopidogrel + AINS-like = risque hémorragique ++ (ICI). 2. Lorazépam = risque chute, confusion, dépendance (critères Beers). 3. Codéine = constipation, somnolence, confusion chez le sujet âgé. 4. Furosémide + spironolactone = risque d'hyponatrémie et d'hyperkaliémie (surtout si DFG diminué). 5. Gliclazide = risque d'hypoglycémie (sujet âgé ++). 12 médicaments = polymédication ≥ 5 = risque iatrogénique majeur.", rang: "A" },
      { q: "Quelle revue médicamenteuse proposez-vous ?", a: "Méthode STOPP/START : Arrêter : lorazépam (BZD > 4 semaines), codéine (constipation, confusion), réévaluer clopidogrel (durée ?). Réduire : gliclazide (objectif HbA1c moins strict > 75 ans = < 8%). Ajouter : vitamine D (prévention chute). Vérifier : indication d'aspirine (primaire ou secondaire ?), durée de l'antiplaquettaire.", rang: "A" }
    ]
  },

  // ── Cas 12 : Syndrome confusionnel hypoactif (Ch11) ──
  { id: 12, chapter: 'ch11', difficulty: 'B',
    case: "Mme Simon, 85 ans, hospitalisée pour fracture du poignet. Depuis 2 jours, elle est « calme », dort beaucoup, ne s'alimente plus, ne répond plus aux questions. L'équipe pense qu'elle « fait une dépression ». Fils rapporte qu'elle était « bien avant l'hospitalisation ».",
    questions: [
      { q: "S'agit-il d'une dépression ou d'un syndrome confusionnel ?", a: "Syndrome confusionnel hypoactif (pas une dépression). Arguments : début aigu (post-hospitalisation), fluctuation de la vigilance (somnolence excessive), contexte déclenchant (hospitalisation, fracture, douleur, immobilisation). Le syndrome confusionnel hypoactif est souvent méconnu car le patient est « calme » (vs agité). CAM positive.", rang: "A" },
      { q: "Quelles causes rechercher ?", a: "1. Douleur non traitée (fracture). 2. Infection (ESU, pneumopathie d'inhalation). 3. Constipation sévère. 4. Médicaments (antalgiques, anxiolytiques). 5. Déshydratation. 6. Troubles métaboliques (hyponatrémie, hypoglycémie). 7. Anémie aiguë. 8. Hypothyroïdie.", rang: "A" }
    ]
  },

  // ── Cas 13 : Autonomie et GIR (Ch3) ──
  { id: 13, chapter: 'ch3', difficulty: 'A',
    case: "Mme Petit, 78 ans, vit seule. Elle gère ses repas et sa toilette seule, mais a besoin d'aide pour les courses, le ménage et la gestion administrative. Elle ne sort plus seule par peur des chutes. AGGIR : cohérence OUI, toilette OUI, habillage OUI, courses NON, cuisine NON, ménage NON.",
    questions: [
      { q: "Quel GIR attribuez-vous ?", a: "GIR 4. La patiente est autonome pour les fonctions mentales et les AVD corporelles (toilette, habillage), mais dépendante pour les AVD instrumentales (courses, cuisine, ménage, gestion administrative). GIR 4 = personnes ayant besoin d'aide pour les transferts, les repas, ou les AVD complexes, mais autonomes pour les fonctions mentales.", rang: "A" },
      { q: "Quels droits ouvre ce GIR ?", a: "GIR 4 ouvre droit à l'APA (Allocation Personnalisée d'Autonomie) à domicile. Montant dépend du plan d'aide. GIR 1-2 : APA en établissement ou à domicile. GIR 3-4 : APA à domicile. GIR 5-6 : pas d'APA (pas de dépendance suffisante). L'APA n'est pas soumise à conditions de ressources (mais montant modulé).", rang: "A" }
    ]
  },

  // ── Cas 14 : Incontinence (Ch15) ──
  { id: 14, chapter: 'ch15', difficulty: 'A',
    case: "Mme Duval, 80 ans, consulte pour des fuites urinaires survenant lors de la toux, de l'éternuement et de l'effort physique. Pas de nycturie, pas de dysurie. Examen : cystocèle grade 1. BU : normal.",
    questions: [
      { q: "Quel type d'incontinence ?", a: "Incontinence urinaire d'effort (IUE). Arguments : fuites déclenchées par l'effort, la toux, l'éternuement. Mécanisme : insuffisance sphinctérienne (affaiblissement du plancher pelvien). Facteurs aggravants : ménopause (déficit œstrogénique), obésité, multiparité. Cystocèle associée.", rang: "A" },
      { q: "Quelle prise en charge ?", a: "1. Rééducation périnéale (kinésithérapie du plancher pelvien) = traitement de 1ère intention. 2. Pessaire si cystocèle. 3. Traitement local par œstrogènes vaginaux (atrophie vulvo-vaginale). 4. Perdre du poids si surpoids. 5. Si échec : chirurgie (bandelette sous-urétrale). 6. Éviter les boissons diurétiques le soir.", rang: "A" }
    ]
  },

  // ── Cas 15 : Prévention des chutes (Ch12) ──
  { id: 15, chapter: 'ch12', difficulty: 'B',
    case: "M. Henri, 76 ans, marche lentement avec sa femme. Test de Tinetti : 18/28 (marche 8/12, équilibre 10/16). TUG : 22 secondes. Appréhension à la marche. Pas de chute dans l'année.",
    questions: [
      { q: "Interprétez les résultats.", a: "Tinetti < 19 = risque de chute élevé (ici 18/28). TUG > 20 secondes = risque de chute élevé (ici 22s). Les deux tests convergent vers un risque élevé. L'appréhension à la marche est un facteur de risque indépendant (peur de chuter → sédentarité → sarcopénie → chute).", rang: "A" },
      { q: "Quel programme de prévention ?", a: "1. Kinésithérapie : renforcement musculaire des membres inférieurs + exercices d'équilibre (Tai Chi, programme Otago). 2. Adaptation du domicile (éclairage, barres, tapis). 3. Révision médicamenteuse. 4. Correction visuelle. 5. Supplémentation vitamine D + calcium. 6. Appareillage si besoin (canne, déambulateur). 7. Activité physique régulière.", rang: "A" }
    ]
  }
];

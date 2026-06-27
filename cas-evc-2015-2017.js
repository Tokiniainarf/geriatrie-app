// Cas EVC 2015–2017 — Quinze scénarios d'examen (5 par année)
const CAS_EVC_2015_2017 = [
  {
    id: 'evc15-1',
    year: 2015,
    chapter: 'ch1',
    difficulty: 'A',
    title: 'Vieillissement physiologique vs pathologique',
    situation: 'M. Lefebvre, 74 ans, consulte pour « moins de tonus » depuis 2 ans. Retraité actif (jardinage 3 h/j). ADL 6/6, IADL 7/8 (difficulté courses seule). PA 128/72, FC 68. Pas d\'ATCD cardiaque. MMS 29/30. Vitesse marche 0,95 m/s. Pas de perte de poids. Sommeil correct. Il demande « un traitement pour vieillir moins vite ».',
    questions: [
      {
        q: 'Comment argumentez le caractère physiologique de sa plainte ?',
        a: 'Autonomie complète ADL, IADL quasi intact, cognition normale (MMS 29), marche > 0,8 m/s, activité physique régulière, pas de syndrome de fragilité (critères Fried non réunis). Ralentissement modéré compatible avec vieillissement normal (sarcopénie débutante possible sans retentissement). Pas de pathologie organique identifiée à ce stade.',
        points: 4
      },
      {
        q: 'Quels éléments rechercheriez-vous pour exclure une pathologie ?',
        a: 'Anémie, hypothyroïdie (TSH), déficit B12/folates, dépression (GDS-15), apnée du sommeil, audition/vision, douleurs chroniques sous-déclarées. Force de préhension, MNA-SF. Bilan ciblé, pas de « bilan anti-âge » systématique.',
        points: 3
      },
      {
        q: 'Que proposez-vous comme prise en charge ?',
        a: 'Activité physique (endurance + renforcement), apports protéiques suffisants, vitamine D si carence, entretien sur attentes réalistes. Pas de médicament « tonique » ou hormonothérapie anti-âge non indiquée. Consultation gériatrique de prévention si facteurs de risque futurs.',
        points: 4
      }
    ],
    juryTips: 'Ne pas médicaliser le vieillissement normal. Citer Fried, vitesse de marche, autonomie. Refuser prescription inappropriée.'
  },
  {
    id: 'evc15-2',
    year: 2015,
    chapter: 'ch6',
    difficulty: 'A',
    title: 'Fracture du col fémoral et ostéoporose',
    situation: 'Mme Petit, 82 ans, chute dans sa cuisine. Douleur hanche gauche, impotence fonctionnelle. Radiographie : fracture sous-capitale gauche (Garden III). Ostéodensitométrie antérieure : T-score col fémoral −3,1. DFG 55 mL/min. Calcium 2,15 mmol/L, 25-OH-D 18 ng/mL. Traitement habituel : lansoprazole 30 mg, paracétamol si besoin. Vit à domicile seule (GIR 4).',
    questions: [
      {
        q: 'Conduite à tenir chirurgicale et orthogériatrique immédiate ?',
        a: 'Prise en charge orthogériatrique : bilan pré-op rapide (NFS, ionogramme, ECG, écho si besoin), antalgie, prévention delirium (hydratation, lunettes/appareils, éviter BZD), décision collégiale chirurgie (prothèse bipolaire ou totale selon fracture et état général). Objectif : intervention < 48 h si possible. Évaluation autonomie pré-chute et projet de lieu de vie post-op.',
        points: 5
      },
      {
        q: 'Traitement de l\'ostéoporose à moyen terme ?',
        a: 'Supplémentation calcium si apports insuffisants + vitamine D (cible 25-OH-D > 30 ng/mL). Bisphosphonate oral ou zolédronate IV selon tolérance digestive et DFG (adapter si IRC). Évaluer indication denosumab si CI bisphosphonates. Rééducation et prévention chutes. Réévaluer IPP (risque fracture si long cours).',
        points: 4
      },
      {
        q: 'Organisation post-hospitalière ?',
        a: 'SSR ou retour domicile avec aide selon autonomie post-op et environnement. Kinésithérapie, ergothérapie, plan de prévention chutes. Aide à domicile, téléalarme. Information fracture comme marqueur de fragilité sévère.',
        points: 3
      }
    ],
    juryTips: 'Orthogériatrie + délai chirurgical + delirium. Ostéoporose : D + traitement anti-ostéoporotique, pas seulement calcium.'
  },
  {
    id: 'evc15-3',
    year: 2015,
    chapter: 'ch11',
    difficulty: 'A',
    title: 'Syndrome confusionnel hyperactif en hospitalisation',
    situation: 'M. Moreau, 79 ans, hospitalisé 48 h pour pneumonie. Traitement : ceftriaxone, paracétamol, lorazépam 1 mg le soir « pour dormir » prescrit aux urgences. Nuit agitée : arrache perfusion, cris, désorientation. CAM positive (fluctuation, inattention, désorganisation). Température 37,8 °C. Na+ 148 mmol/L. Créatinine 145 µmol/L. MMS hors épisode : 24/30 (démence légère connue).',
    questions: [
      {
        q: 'Confirmez le diagnostic et les facteurs favorisants.',
        a: 'Delirium hyperactif (CAM +). Facteurs : infection pneumonie, déshydratation/hypernatrémie, démence de base, iatrogénie benzodiazépine (aggravation confusion/chutes), environnement hospitalier, privation sensorielle possible. Hyperactif = agitation, hypervigilance ; forme hypoactive souvent sous-diagnostiquée.',
        points: 4
      },
      {
        q: 'Prise en charge non médicamenteuse et médicamenteuse ?',
        a: 'Non médicamenteux : lunettes/appareils, horaires, présence familiale, mobilisation précoce si possible, hydratation, douleur traitée, arrêt lorazépam. Médicamenteux : traiter pneumonie ; halopéridol 0,5–1 mg si danger pour soi/autrui, durée courte ; éviter anticholinergiques et BZD. Réorientation ionogramme/créatinine.',
        points: 5
      },
      {
        q: 'Pronostic et prévention de récidive ?',
        a: 'Delirium = mortalité et perte d\'autonomie augmentées. Surveillance 48–72 h après résolution. Plan sortie : environnement stable, revue médicamenteuse, hydratation, suivi cognition. Informer famille (syndrome aigu, pas aggravation sèche de démence seule).',
        points: 3
      }
    ],
    juryTips: 'CAM + causes (DIAPPERS). BZD = piège classique. Hypoactif vs hyperactif.'
  },
  {
    id: 'evc15-4',
    year: 2015,
    chapter: 'ch8',
    difficulty: 'A',
    title: 'Douleur chronique et polymédication',
    situation: 'Mme Blanc, 77 ans, polyarthralgies et lombalgie chronique. EVA 6/10 en moyenne. Traitement : tramadol 100 mg ×3/j, prégabaline 150 mg ×2/j, prednisone 5 mg/j depuis 8 mois (prescrit par un confrère), oméprazole 20 mg, amitriptyline 25 mg le soir. Constipation sévère, somnolence diurne. Chute récente sans fracture. DFG 48 mL/min.',
    questions: [
      {
        q: 'Analysez la stratégie antalgique actuelle.',
        a: 'Double emploi opioïde + tricyclique (sédation, chutes, constipation). Tramadol à surveiller si DFG < 60 (accumulation métabolite). Corticoïde long cours à faible dose : effets métaboliques, pas antalgie lombaire de première intention. Prégabaline utile si neuropathie ; vérifier indication. Manque paracétamine première ligne et prise en charge non médicamenteuse.',
        points: 4
      },
      {
        q: 'Proposition de réévaluation (déprescription et alternatives) ?',
        a: 'Paracétamol systématique si pas CI. Réduire progressivement prednisone si pas indication inflammatoire claire. Réévaluer tramadol (réduction, rotation) ; laxatif osmotique. Kinésithérapie, activité adaptée. ECPA si communication difficile. Objectif EVA acceptable avec moindre iatrogénie.',
        points: 4
      },
      {
        q: 'Surveillance après modification ?',
        a: 'Douleur, fonction, somnolence, constipation, chutes. Ionogramme/créatinine si réduction opioïde ou déshydratation. Sevrage corticoïde progressif si arrêt. Éducation patient sur attentes réalistes (douleur chronique ≠ 0).',
        points: 3
      }
    ],
    juryTips: 'WHO ladder adaptée au sujet âgé. Cascade opioïde + psychotrope = chutes. Déprescription progressive.'
  },
  {
    id: 'evc15-5',
    year: 2015,
    chapter: 'ch3',
    difficulty: 'A',
    title: 'Perte d\'autonomie progressive et évaluation gériatrique',
    situation: 'M. Dupont, 84 ans, vit avec son épouse. Fille signale depuis 6 mois : oublis de médicaments, baignoire non utilisée, marche plus lente. ADL 4/6 (toilette, habillage difficiles). IADL 3/8. MMS 22/30. GDS-15 6/15. PA 110/65 orthostatisme symptomatique. 7 médicaments dont doxazosine 4 mg, métoprolol 50 mg.',
    questions: [
      {
        q: 'Quel syndrome gériatrique principal identifiez-vous ?',
        a: 'Perte d\'autonomie multifactorielle : composante cognitive (MMS 22), possible dépression (GDS limite), hypotension orthostatique médicamenteuse, déconditionnement. Syndrome gériatrique global = évaluation multidimensionnelle (CGA) plutôt qu\'un seul diagnostic.',
        points: 4
      },
      {
        q: 'Quels outils et examens complémentaires ?',
        a: 'TUG, Tinetti, MNA, revue médicamenteuse, bilan orthostatique (PA couché/debout), TSH, B12, audition/vision. Évaluation sociale : charge aidant, aides existantes. Recherche chutes, incontinence, douleur.',
        points: 3
      },
      {
        q: 'Plan d\'intervention coordonné ?',
        a: 'Adapter antihypertenseurs/alpha-bloquant si orthostatisme. Aide à domicile (ménage, toilette), pharmacie pilulier, activité physique. Traiter dépression si confirmée. Anticipation APA, téléalarme. Réévaluation 3 mois ADL/IADL.',
        points: 4
      }
    ],
    juryTips: 'CGA = médical + fonctionnel + social. IADL souvent avant ADL. Orthostatisme = iatrogénie fréquente.'
  },
  {
    id: 'evc16-1',
    year: 2016,
    chapter: 'ch9',
    difficulty: 'A',
    title: 'Démence à corps de Lewy et psychose',
    situation: 'M. Martin, 76 ans, troubles cognitifs fluctuants depuis 1 an, hallucinations visuelles récurrentes (enfants dans le jardin), parkinsonisme léger (raideur), hypersomnolence diurne. MMS 20/30. Levodopa non initiée. Traitement récent : quétiapine 50 mg le soir pour « agitation ». Chutes ×2 le dernier mois.',
    questions: [
      {
        q: 'Diagnostic syndromique le plus probable ?',
        a: 'Démence à corps de Lewy (critères : démence + fluctuations + hallucinations visuelles précoces + parkinsonisme). Différentiels : Parkinson avec démence (délai > 1 an entre parkinson et démence), démence vasculaire, délire superposé.',
        points: 4
      },
      {
        q: 'Pourquoi la quétiapine est problématique ici ?',
        a: 'Antipsychotiques = sensibilité extrême en DCL (mortalité, aggravation parkinsonisme, sédation, chutes). Quétiapine moins pire que halopéridol mais reste à éviter en première intention. Privilégier mesures non médicamenteuses pour hallucinations non délirantes.',
        points: 4
      },
      {
        q: 'Prise en charge globale ?',
        a: 'Arrêt progressif antipsychotique si possible. Cholinestérase inhibiteur (rivastigmine) souvent efficace sur cognition et hallucinations. Éviter anticholinergiques. Dépistage apnée du sommeil. Sécurisation chutes. Annonce et aide aux aidants.',
        points: 3
      }
    ],
    juryTips: 'DCL = hallucinations visuelles + fluctuations + CI antipsychotiques majeures.'
  },
  {
    id: 'evc16-2',
    year: 2016,
    chapter: 'ch12',
    difficulty: 'A',
    title: 'Chutes répétées et bilan multifactoriel',
    situation: 'Mme Roux, 80 ans, 4 chutes en 6 mois dont une avec trauma crânien léger. Vit en EHPAD (GIR 3). Médicaments : risperidone 0,5 mg, trazodone 50 mg, furosémide 20 mg, amlodipine 5 mg. Tinetti 14/28. Orthostatisme : −25 mmHg systolique. Acuité visuelle non corrigée. Constipation chronique.',
    questions: [
      {
        q: 'Classifiez les facteurs de risque identifiés.',
        a: 'Intrinsèques : âge, GIR, orthostatisme, vision, constipation (malaise), psychotropes (sédation, hypotension). Extrinsèques : EHPAD (environnement partiellement sécurisé). Comorbidités à préciser (troubles du rythme, syncope). Chute répétée = marqueur de fragilité.',
        points: 4
      },
      {
        q: 'Plan de prévention priorisé ?',
        a: 'Revue médicamenteuse : réduire/arrêter psychotropes si possible, adapter antihypertenseur/diurétique. Correction vision. Programme renforcement/marche (kiné). Hydratation, laxatif. Chaussures, éclairage, alarme matelas si besoin. PAS de contention systématique.',
        points: 4
      },
      {
        q: 'Quand hospitaliser ou explorer davantage ?',
        a: 'Si syncope suspecte : ECG, Holter selon contexte, écho si souffle. Trauma crânien sous anticoagulant = imagerie. Bilan si chute avec perte de connaissance non expliquée.',
        points: 3
      }
    ],
    juryTips: 'Tinetti + médicaments + orthostatisme. Chute = symptôme, bilan obligatoire.'
  },
  {
    id: 'evc16-3',
    year: 2016,
    chapter: 'ch14',
    difficulty: 'A',
    title: 'Dénutrition et dysphagie en EHPAD',
    situation: 'M. Giraud, 88 ans, démence modérée-sévère (MMS 12). Poids −6 kg en 4 mois. MNA 14/30. Toux après liquides, temps de repas > 1 h. Albumine 26 g/L. Médecin propose PEG « pour nourrir ». Famille demande « tout faire ». Patient retire parfois la main quand on approche la cuillère.',
    questions: [
      {
        q: 'Évaluez la situation nutritionnelle et la dysphagie.',
        a: 'Dénutrition sévère (MNA < 17, perte poids, albumine basse). Dysphagie probable (toux liquides) → risque fausse route. Évaluation orthophoniste et textures IDDSI indiquées avant PEG.',
        points: 4
      },
      {
        q: 'Indication de la PEG dans ce contexte ?',
        a: 'PEG non automatique en démence avancée : bénéfice survie/qualité de vie limité (études). Décision collégiale, volontés antérieures, confort oral prioritaire si fin de vie proche. Si dysphagie réversible (infection, récupération post-AVC) autre contexte.',
        points: 5
      },
      {
        q: 'Alternatives à proposer en premier ?',
        a: 'Textures adaptées, enrichissement, aide repas, CNO orales, supplémentation vitamine D/protéines. Stimulation orale, hygiène buccale. Objectifs de confort si phase terminale. Accompagnement famille (souffrance de voir « ne plus manger »).',
        points: 3
      }
    ],
    juryTips: 'PEG et démence = éthique EVC majeure. Orthophonie avant sonde. MNA + poids.'
  },
  {
    id: 'evc16-4',
    year: 2016,
    chapter: 'ch4',
    difficulty: 'A',
    title: 'Directives anticipées et limitation thérapeutique',
    situation: 'Mme Lambert, 81 ans, cancer bronchique métastatique, dyspnée de repos. Oxygénothérapie 4 L/min. DA rédigées il y a 2 ans : « refus réanimation, refus intubation, accepte analgésie forte ». Fils demande transfert en réanimation « pour une dernière chance ». Patient consciente, dit « j\'ai assez souffert ».',
    questions: [
      {
        q: 'Quelle décision prendre concernant la réanimation ?',
        a: 'Refus réanimation conforme aux DA et à la volonté actuelle exprimée. Patient lucide : autonomie prime. Réanimation non indiquée (cancer terminal, dyspnée repos). Loi Leonetti : pas d\'obstination déraisonnable.',
        points: 5
      },
      {
        q: 'Comment accompagner le fils ?',
        a: 'Entretien empathique, rappel DA et volonté de la mère. Soins palliatifs : morphine titration dyspnée, anxiolyse si besoin, présence. Pas de culpabilisation. Équipe soignante unie sur le message.',
        points: 3
      },
      {
        q: 'Soins à maintenir ou intégrer ?',
        a: 'Oxygène si confort (effet placebo partiel sur dyspnée), soins de bouche, transferts doux, traitement secretions. Sédation profonde continue seulement si souffrance réfractaire selon cadre légal.',
        points: 3
      }
    ],
    juryTips: 'DA + volonté actuelle > famille. Dyspnée terminale = morphine, pas réanimation.'
  },
  {
    id: 'evc16-5',
    year: 2016,
    chapter: 'ch16',
    difficulty: 'A',
    title: 'Cascade iatrogénique et revue médicamenteuse',
    situation: 'M. Perrin, 83 ans, consulte pour somnolence et chutes. Traitement : alprazolam 0,5 mg ×2 (insomnie → anxiété), oxybutynine 5 mg (urgenturie → constipation → laxatifs), prométhazine (allergie), codéine (toux chronique), méthocarbamol (crampe). MMS 25/30. Constipation, rétention urinaire aiguë récente.',
    questions: [
      {
        q: 'Décrivez la cascade iatrogénique.',
        a: 'Insomnie → BZD → somnolence/chutes. Urgenturie → anticholinergique → constipation, confusion, rétention → laxatifs/opioïde toux → sédation. Prométhazine anticholinergique ajoutée. Charge anticholinergique élevée (échelle anticholinergique).',
        points: 5
      },
      {
        q: 'Priorités de déprescription ?',
        a: 'Arrêt progressif alprazolam (sevrage). Réévaluer oxybutynine : rééducation vessie, mirabégron si besoin. Arrêt prométhazine/codéine si toux non productive. Hygiène du sommeil. Suivi constipation et rétention.',
        points: 4
      },
      {
        q: 'Outils pour structurer la revue ?',
        a: 'Liste médicaments avec indication, critères STOPP/START ou Beers, impliquer pharmacien et patient. Une modification à la fois si possible. Objectif : réduire chutes et confusion.',
        points: 2
      }
    ],
    juryTips: 'Schéma A → B → C attendu. Anticholinergiques = démence, rétention, constipation.'
  },
  {
    id: 'evc17-1',
    year: 2017,
    chapter: 'ch7',
    difficulty: 'A',
    title: 'Arthrose du genou et indication chirurgicale',
    situation: 'Mme Fontaine, 78 ans, gonarthrose bilatérale sévère radiologique. Douleur EVA 7/10, rayon de marche < 100 m, canne. IMC 31. ATCD : HTA, diabète type 2 équilibré. DFG 62. Refuse « opération ». Demande « infiltration tous les mois » déjà reçues 4 fois cette année.',
    questions: [
      {
        q: 'Évaluation avant toute nouvelle infiltration ?',
        a: 'Limite infiltrations (usure cartilagine, risque infection). Évaluer indication prothèse totale du genou si douleur réfractaire et retentissement fonctionnel. Risque opératoire : comorbidités contrôlées, optimisation poids, bilan pré-op gériatrique.',
        points: 4
      },
      {
        q: 'Traitement non chirurgical à optimiser ?',
        a: 'Paracétamol, AINS courte durée si DFG/HTA OK, kinésithérapie, renforcement quadriceps, perte poids, semelles. Éducation thérapeutique. Pas d\'opioïde long cours en première intention.',
        points: 3
      },
      {
        q: 'Comment aborder le refus opératoire ?',
        a: 'Explorer peurs, attentes, bénéfices/risques PTG chez sujet âgé bien sélectionné. Alternative : orthèse, fauteuil roulant ponctuel, adaptation domicile. Réévaluation si aggravation.',
        points: 4
      }
    ],
    juryTips: 'PTG pas interdite après 75 ans si bon état général. Infiltrations ≠ traitement illimité.'
  },
  {
    id: 'evc17-2',
    year: 2017,
    chapter: 'ch15',
    difficulty: 'A',
    title: 'Incontinence urinaire mixte',
    situation: 'Mme Chevalier, 75 ans, fuites quotidiennes à l\'effort et urgences. Pas de signes infectieux. Résidu post-mictionnel 80 mL. Médicaments : torasémide 10 mg, irbésartan 150 mg. Constipation. 3 enfants, ménopause depuis 30 ans. Vie active, tennis jusqu\'à récemment.',
    questions: [
      {
        q: 'Type d\'incontinence et facteurs contributifs ?',
        a: 'Incontinence mixte (effort + urgenturie). Facteurs : diurétique, constipation (pression vessie), possible hyperactivité détrusor, résidu modéré à surveiller. Exclure infection, tumeur (hématurie, syndrome obstructif).',
        points: 4
      },
      {
        q: 'Prise en charge échelonnée ?',
        a: 'Rééducation périnéale, bladder training, réduction diurétique si possible (horaire), traitement constipation. Éviter anticholinergiques si cognition fragile. Mirabégron si urgenturie. Chirurgie stress si échec rééducation et patiente opérable.',
        points: 4
      },
      {
        q: 'Examens complémentaires utiles ?',
        a: 'BU, échographie vessie-résidu, calendrier mictionnel. Urodynamiques si échec traitement ou chirurgie envisagée. Pas de bilan invasif systématique.',
        points: 3
      }
    ],
    juryTips: 'Mixte fréquent chez la femme âgée. Constipation et diurétiques = modifiables.'
  },
  {
    id: 'evc17-3',
    year: 2017,
    chapter: 'ch5',
    difficulty: 'A',
    title: 'Presbyacousie et isolement social',
    situation: 'M. Bonnet, 86 ans, épouse décédée il y a 3 mois. Fille note retrait, télévision très forte, oublie rendez-vous. MMS 27/30. Audiométrie : surdité presbyacousie sévère bilatérale. Pas de dépression majeure (GDS-15 4). Refuse « gros appareils » par image sociale.',
    questions: [
      {
        q: 'Lien audition, cognition et isolement ?',
        a: 'Presbyacousie → difficulté communication → isolement, dépression secondaire, participation réduite aux activités. Risque sous-estimation cognitive en consultation sans correction auditive. Pas de démence ici (MMS normal).',
        points: 4
      },
      {
        q: 'Propositions techniques et relationnelles ?',
        a: 'Appareillage progressif (audioprothésiste), aides techniques (amplificateur, boucle magnétique). Face à face, articulation. Groupe parole, lien social. Deuil normal vs pathologique à resurveiller.',
        points: 3
      },
      {
        q: 'Contre-indications ou limites de l\'appareillage ?',
        a: 'CI relatives : otite active, acouphènes invalidants non expliqués. Attentes réalistes (discrimination pas toujours parfaite). Maintenir sécurité (sonnette, alarme).',
        points: 3
      }
    ],
    juryTips: 'Audition = 3e pilier autonomie avec vision et marche. Image sociale fréquente.'
  },
  {
    id: 'evc17-4',
    year: 2017,
    chapter: 'ch17',
    difficulty: 'A',
    title: 'Soins palliatifs et sédation en EHPAD',
    situation: 'M. Renard, 90 ans, démence sévère, pneumonie aspirative récurrente. Refus alimentation oral depuis 5 jours, fièvre 38,5 °C. Famille demande antibiothérapie IV et transfert hospitalier. DA : pas de réanimation, soins de confort. Patient grognements de douleur à la mobilisation.',
    questions: [
      {
        q: 'Antibiothérapie IV et hospitalisation : votre position ?',
        a: 'En phase avancée démence + refus oral : discussion limitation. Si objectif confort : antibiotiques oraux/SC possibles si soulagent symptômes, pas d\'obligation IV/hospitalisation. Transfert souvent aggrave confusion. Respect DA et confort.',
        points: 4
      },
      {
        q: 'Traitement symptomatique immédiat ?',
        a: 'Douleur : morphine titration (douleur à mobilisation fréquente). Dyspnée : morphine faible dose, position demi-assise. Fièvre : paracétamol. Bouche, soins relationnels. Hydratation SC si acceptée et confort.',
        points: 4
      },
      {
        q: 'Indication de sédation profonde continue ?',
        a: 'Uniquement si souffrance réfractaire malgré traitement optimal, pronostic vital engagé court terme, procédure collégiale et trace légale. Pas pour simple refus de manger en fin de vie naturelle.',
        points: 3
      }
    ],
    juryTips: 'Pneumonie fin de vie démence = pas automatiquement USI. Morphine = dyspnée et douleur.'
  },
  {
    id: 'evc17-5',
    year: 2017,
    chapter: 'ch13',
    difficulty: 'A',
    title: 'Insuffisance cardiaque et décompensation chez le sujet âgé',
    situation: 'Mme Dubois, 85 ans, dyspnée aiguë, oedèmes MI, prise de poids 3 kg en 10 jours. ATCD : HFpEF connue. Traitement : furosémide 40 mg, spironolactone 25 mg. FC 110 irrégulière (FA non anticoagulée car chutes). DFG 38. K+ 5,4. Pas de douleur thoracique.',
    questions: [
      {
        q: 'Diagnostic et facteurs déclenchants ?',
        a: 'Décompensation HF (probable HFpEF). Déclencheurs : FA rapide, non observance/surcharge hydrosodée, IRC, hyperkaliémie sous spironolactone. Exclure infarctus, embolie pulmonaire selon tableau.',
        points: 4
      },
      {
        q: 'Traitement aigu adapté à l\'âge ?',
        a: 'Oxygène si besoin, furosémide IV/oral adaptation, contrôle FC (bêta-bloquant prudent si FA, anticoagulation à réévaluer balance chutes/AVC). Surveillance diurèse, poids, K+, créatinine. Éviter sur-diurèse (confusion, chutes).',
        points: 4
      },
      {
        q: 'Organisation post-aigu ?',
        a: 'Réconciliation médicamenteuse, éducation restriction selon tolérance, suivi poids. Évaluation autonomie et aide. Anticoagulation FA : décision partagée. SSR si déconditionnement.',
        points: 3
      }
    ],
    juryTips: 'HFpEF fréquent après 80 ans. FA + chutes = dilemme anticoagulation. Ionogramme surveillé.'
  }
];
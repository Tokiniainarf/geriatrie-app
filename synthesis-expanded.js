// Synthèse étendue — 20 chapitres du Manuel de Gériatrie CNEG (5e éd.)
// Format : sections avec points clés, perles cliniques et conseils EVC intégrés
const SYNTHESIS_EXPANDED = [
  {
    id: 'syn-1',
    title: 'Comprendre le vieillissement',
    sections: [
      {
        title: 'Définitions et concepts fondamentaux',
        points: [
          'Gérontologie = science du vieillissement ; gériatrie = médecine de la personne âgée (polypathologie, autonomie, iatrogénie).',
          'Vieillissement physiologique = déclin progressif des réserves fonctionnelles sans maladie (homéostasie plus fragile).',
          'Vieillissement pathologique = accumulation de maladies chroniques qui réduit encore les marges de compensation.',
          '💎 Perle : ne jamais attribuer une décompensation au seul « âge » — toujours chercher un facteur précipitant.',
          '🎯 EVC : distinguer vieillissement normal (ex. presbytie) vs pathologique (ex. glaucome aigu) = points méthodologiques.'
        ]
      },
      {
        title: 'Vulnérabilité, fragilité et sarcopénie',
        points: [
          'Vulnérabilité (F1 modèle Bouchon) = baisse des réserves liée à l\'âge sur tous les organes (cœur, rein, poumon, muscle).',
          'Fragilité (Fried) : ≥ 3 critères sur 5 (perte de poids, fatigue, activité basse, marche < 0,8 m/s, grip faible).',
          'Pré-fragile (1–2 critères) = fenêtre d\'intervention ; fragile (≥ 3) = risque ×3–5 de chute, hospitalisation, décès.',
          'Sarcopénie EWGSOP2 : masse musculaire basse + force basse ; sévère si performance physique altérée.',
          '🎯 EVC : vitesse de marche < 0,8 m/s et grip strength = marqueurs simples à citer en consultation.'
        ]
      },
      {
        title: 'Mécanismes cellulaires et inflammaging',
        points: [
          'Télomères raccourcis → sénescence cellulaire ; stress oxydatif et réparation ADN diminuée.',
          'Inflammaging = inflammation chronique de bas grade (IL-6, CRP) → comorbidités et fragilisation.',
          'Immuno-sénescence : infections plus graves, réponse vaccinale moindre, risque oncologique modifié.',
          'Réserves fonctionnelles : chute d\'environ 25–30 % entre 30 et 80 ans selon les systèmes.',
          '💎 Perle : une PA peut paraître stable jusqu\'à un stress mineur (infection, médicament) qui déclenche la cascade.'
        ]
      },
      {
        title: 'Effets du vieillissement par appareil',
        points: [
          'Cardiovasculaire : rigidité artérielle, compliance ↓, FEVG souvent préservée, orthostatisme fragile.',
          'Rénal : DFG ↓, concentration/dilution urinaire moins efficace → iatrogénie et déshydratation fréquentes.',
          'Pulmonaire : compliance ↓, VEMS ↓, barrière immunitaire mucosale affaiblie.',
          'Neurologique : vitesse de traitement ↓, plasticité ↓, mais cognition normale possible très longtemps.',
          '🎯 EVC : citer 3 effets cardio + rein + muscle = réponse type « questions isolées » ch20.'
        ]
      },
      {
        title: 'Prévention et vieillissement « réussi »',
        points: [
          'Rowe & Kahn : faible risque maladie/handicap, capacités physiques et cognitives maintenues, engagement social.',
          'Activité physique (aérobie + renforcement) : seul traitement prouvé anti-sarcopénie et anti-chute.',
          'Vitamine D 800 UI/j + calcium si apports insuffisants ; nutrition protéique 1,0–1,2 g/kg/j.',
          'Vaccination (grippe, pneumocoque, zona, COVID) adaptée à l\'immuno-sénescence.',
          '💎 Perle : la fragilité est potentiellement réversible ; le vieillissement biologique ne l\'est pas.'
        ]
      }
    ]
  },
  {
    id: 'syn-2',
    title: 'Raisonnement gériatrique',
    sections: [
      {
        title: 'Évaluation gériatrique multidimensionnelle (EGM)',
        points: [
          'EGM = bilan structuré : médical, cognitif, affectif, fonctionnel, nutritionnel, social, environnemental.',
          'Objectif : identifier les problèmes modifiables et construire un plan centré sur les priorités du patient.',
          'Indications : polymorbidité, polymédication, fragilité, décompensation récente, candidat chirurgie lourde.',
          'Équipe pluridisciplinaire : médecin, IDE, kiné, orthophoniste, assistante sociale, pharmacien.',
          '🎯 EVC : toujours nommer les dimensions de l\'EGM avant de proposer un plan thérapeutique.'
        ]
      },
      {
        title: 'Modèle de Bouchon et cascade gériatrique',
        points: [
          'F1 vulnérabilité + F2 maladies chroniques = réserves basses ; F3 facteur précipitant = décompensation.',
          'F3 fréquents : infection (souvent sans fièvre), iatrogénie, déshydratation, douleur, constipation, immobilisation.',
          'Cascade gériatrique (Rang A) : défaillance d\'un organe entraîne les autres si F3 non traité.',
          'Priorité thérapeutique : traiter le F3 réversible avant d\'ajouter des médicaments.',
          '💎 Perle : ECP (infection sans fièvre) + confusion = classique — ne pas oublier ECBU et radiographie thorax.'
        ]
      },
      {
        title: 'Présentations atypiques',
        points: [
          'Douleur thoracique absente dans l\'IDM ; dyspnée ou confusion peuvent être le seul signe.',
          'Infection : hypothermie, absence de CRP majeure, tableau exclusivement fonctionnel ou cognitif.',
          'Dépression et delirium miment de nombreuses pathologies organiques.',
          'Approche syndromique : « chute », « confusion », « asthénie » → diagnostic différentiel large.',
          '🎯 EVC : structurer la réponse en syndromes + diagnostics différentiels + examens ciblés.'
        ]
      },
      {
        title: 'Outils et scores transversaux',
        points: [
          'MMS/MoCA (cognition), GDS-15 (humeur), ADL/IADL (autonomie), MNA (nutrition), Tinetti (chutes).',
          'Revue médicamenteuse : Beers, STOPP/START, charge anticholinergique (ACB).',
          'Isolement social : échelle GDS (Groupement des généralistes) 1–7 en consultation.',
          'Objectif de soins : maintien à domicile si possible, co-construction avec aidants.',
          '💎 Perle : le MMS seul n\'évalue ni l\'autonomie ni la fragilité — toujours compléter.'
        ]
      }
    ]
  },
  {
    id: 'syn-3',
    title: 'Évaluation de l\'autonomie',
    sections: [
      {
        title: 'AVD de base — échelle de Katz (ADL)',
        points: [
          '6 items : toilette, habillage, transferts, continence, alimentation, déplacement.',
          'Classes A (indépendant) à G (dépendant pour les 6 items).',
          'Mesure la dépendance pour les actes essentiels de la vie quotidienne.',
          'Utile pour suivi longitudinal et argumentation APA / hébergement.',
          '🎯 EVC : quantifier la perte (« dépendant pour X sur 6 ADL Katz ») plutôt que dire « perte d\'autonomie ».'
        ]
      },
      {
        title: 'AVD instrumentales — échelle de Lawton (IADL)',
        points: [
          '8 items : téléphone, courses, cuisine, ménage, lessive, transport, médicaments, finances.',
          'Perdues avant les ADL de Katz → signe précoce de fragilité fonctionnelle.',
          'Sensible au sexe et à la génération (certains items moins pertinents selon contexte).',
          'Dépistage des sujets « encore autonomes » aux yeux de l\'entourage mais fragiles.',
          '💎 Perle : IADL ↓ avec MMS normal = penser dépression, douleur, déficit sensoriel.'
        ]
      },
      {
        title: 'AGGIR, GIR et dispositifs sociaux',
        points: [
          'Grille AGGIR → GIR 1 (le plus dépendant) à 6 (autonome) pour l\'aide à domicile et l\'EHPAD.',
          'APA : ≥ 60 ans, GIR 1–4, plan d\'aide personnalisé (aide humaine, téléassistance, adaptation logement).',
          'ASH en EHPAD si ressources insuffisantes ; évaluation MDPH pour handicap < 60 ans.',
          'Autonomie ≠ capacité physique seule : environnement, aidant, douleur modulent le niveau réel.',
          '🎯 EVC : relier GIR, APA et projet de lieu de vie dans le plan de sortie.'
        ]
      },
      {
        title: 'Capacité juridique et protection',
        points: [
          'Capacité de discernement évaluée au cas par cas (pas seulement sur le diagnostic de démence).',
          'Personne de confiance (loi Kouchner) : accompagne les décisions santé si altération.',
          'Curatelle / tutelle / mandat de protection future selon le degré d\'altération.',
          'Évaluer l\'autonomie à chaque consultation hospitalière ou de ville significative.',
          '💎 Perle : un patient peut être dépendant physiquement mais capable de consentir à un soin.'
        ]
      }
    ]
  },
  {
    id: 'syn-4',
    title: 'Éthique et protection',
    sections: [
      {
        title: 'Principes éthiques en gériatrie',
        points: [
          'Autonomie du patient = principe premier ; bienfaisance, non-malfaisance, justice.',
          'Consentement éclairé : information loyale, compréhension, liberté de choix, capacité de discernement.',
          'Refus de traitement opposable si capacité et information documentées (sauf urgence vitale imminente).',
          'Approche proportionnée : bénéfice/risk ratio adapté à l\'âge, aux comorbidités et aux objectifs de vie.',
          '🎯 EVC : toujours vérifier capacité + personne de confiance + directives avant décision lourde.'
        ]
      },
      {
        title: 'Lois françaises clés',
        points: [
          'Loi Kouchner 2002 : droits du patient, personne de confiance, accès au dossier.',
          'Loi Leonetti 2005 : refus de traitement, limitation/arrêt de traitement, sédation en fin de vie.',
          'Loi Claeys-Leonetti 2016 : sédation profonde et continue jusqu\'au décès (SPCMD) si souffrance réfractaire.',
          'Directives anticipées : contraignantes si rédigées et pertinentes ; à rechercher systématiquement.',
          '💎 Perle : SPCMD ≠ euthanasie — intention = soulager, effet secondaire possible = abréger la vie.'
        ]
      },
      {
        title: 'Obstination déraisonnable et fin de vie',
        points: [
          'Obstination déraisonnable = interdite ; traitements disproportionnés sans bénéfice raisonnable.',
          'Décision collégiale recommandée pour arrêt/limitation de traitement ou sédation.',
          'Soins palliatifs = accompagnement dès le diagnostic de maladie grave, pas seulement les derniers jours.',
          'Soins de confort : douleur, dyspnée, soins de bouche, accompagnement psychosocial des aidants.',
          '🎯 EVC : distinguer limitation, arrêt, sédation proportionnée — vocabulaire juridique précis.'
        ]
      },
      {
        title: 'Protection des personnes vulnérables',
        points: [
          'Maltraitance : signes physiques, privation, isolement, finances — obligation de signalement.',
          'Violence institutionnelle ou familiale : écoute séparée du patient et de l\'aidant si doute.',
          'Sécurisation du domicile vs respect de l\'autonomie : équilibre éthique délicat.',
          'Mandat de protection future : anticipation de l\'incapacité par acte notarié.',
          '💎 Perle : ITEM 9 EVC — connaître les 3 lois et le rôle de la personne de confiance.'
        ]
      }
    ]
  },
  {
    id: 'syn-5',
    title: 'Troubles sensoriels',
    sections: [
      {
        title: 'Troubles visuels du sujet âgé',
        points: [
          'Presbytie (dès ~45 ans) : perte d\'accommodation ; correction simple.',
          'Cataracte : baisse progressive, éblouissement — chirurgie si gêne fonctionnelle (phaco + implant).',
          'DMLA, glaucome chronique, rétinopathie diabétique : dépistage fond d\'œil régulier.',
          'Déficit visuel non corrigé = facteur majeur de chutes, dépression et isolement.',
          '🎯 EVC : ITEM 130 — lier vision, autonomie et prévention des chutes.'
        ]
      },
      {
        title: 'Presbyacousie et bilan auditif',
        points: [
          'Perte des fréquences aiguës (4–8 kHz) dès 50 ans ; gêne en environnement bruyant.',
          'Conséquences : retrait social, surcharge cognitive, risque accru de troubles cognitifs.',
          'Appareillage auditif améliore communication, qualité de vie et peut ralentir l\'isolement cognitif.',
          'Bilan audiométrique annuel recommandé après 70 ans ou si plainte.',
          '💎 Perle : vérifier lunettes + appareils auditifs en hospitalisation — prévention du delirium.'
        ]
      },
      {
        title: 'Interventions et rééducation sensorielle',
        points: [
          'Adaptation du domicile : éclairage homogène, contraste, suppression des tapis glissants.',
          'Lunettes portées en permanence ; piles et réglage des aides auditives vérifiés.',
          'Communication : face à face, articulation, réduire bruit de fond.',
          'Déficits sensoriels cumulés (vue + ouïe) = risque multiplicatif pour cognition et chutes.',
          '🎯 EVC : proposer bilan ophtalmo + audio dans tout EGM de première ligne.'
        ]
      },
      {
        title: 'Autres troubles sensoriels',
        points: [
          'Troubles vestibulaires : vertiges positionnels (VPPB), hypotension orthostatique associée.',
          'Hypoesthésie des pieds (neuropathie diabétique) : risque de plaies et chutes.',
          'Troubles olfactif/gustatif : impact sur appétit et dénutrition.',
          'Dépister lors de toute plainte de chute, confusion ou perte d\'appétit.',
          '💎 Perle : correction sensorielle = intervention à fort ratio bénéfice/risque chez la PA.'
        ]
      }
    ]
  },
  {
    id: 'syn-6',
    title: 'Ostéoporose et fractures',
    sections: [
      {
        title: 'Diagnostic et densitométrie',
        points: [
          'Ostéoporose DEXA : T-score ≤ −2,5 à la colonne ou au col fémoral.',
          'Ostéopénie : T-score entre −1 et −2,5 — évaluer FRAX pour décision thérapeutique.',
          'Fracture par fragilité (chute de sa hauteur) = ostéoporose clinique même si DMO normale.',
          'Radiographie dorsale si suspicion de tassements vertébraux (diminution de taille, cyphose).',
          '🎯 EVC : citer T-score ET FRAX — ne pas attendre la fracture pour traiter.'
        ]
      },
      {
        title: 'FRAX et facteurs de risque',
        points: [
          'FRAX : risque de fracture majeure et du col fémoral à 10 ans (âge, sexe, IMC, ATCD, corticoïdes…).',
          'Facteurs : ménopause, corticothérapie prolongée, hypogonadisme, malabsorption, immobilisation.',
          'Fracture du col fémoral : mortalité ~20 % à 1 an, perte d\'autonomie majeure.',
          'Prévention primaire si FRAX au-dessus du seuil national même sans fracture antérieure.',
          '💎 Perle : toute fracture de fragilité impose traitement + recherche de causes secondaires.'
        ]
      },
      {
        title: 'Traitement médicamenteux',
        points: [
          'Calcium (≈ 1 g/j si apports alimentaires insuffisants) + vitamine D 800–1000 UI/j.',
          'Bisphosphonates (alendronate, zolédronate) ou dénosumab en première intention selon profil.',
          'Teriparatide ou romosozumab si fractures sévères ou échec des antirésorptifs.',
          'Réévaluation du risque de chute en parallèle — traitement osseux sans prévention chute = insuffisant.',
          '🎯 EVC : contre-indiquer AINS chroniques ; privilégier paracétamol pour douleur arthrosique associée.'
        ]
      },
      {
        title: 'Prise en charge de la fracture du col fémoral',
        points: [
          'Filère orthogériatrique : chirurgie précoce (< 48 h), mobilisation, EGM, prévention complications.',
          'Delirium post-op fréquent : prévention non médicamenteuse, traiter douleur et infection.',
          'Réhabilitation intensive : objectif marche avec aide technique adaptée.',
          'Plan de sortie : domicile avec aide vs SSR vs EHPAD selon GIR et environnement.',
          '💎 Perle : fracture du col fémoral = événement pivot — réévaluer toute la trajectoire de soins.'
        ]
      }
    ]
  },
  {
    id: 'syn-7',
    title: 'Arthrose',
    sections: [
      {
        title: 'Physiopathologie et diagnostic',
        points: [
          'Maladie du cartilage et de l\'ensemble articulaire (os sous-chondral, synoviale, ligaments).',
          'Facteurs : âge, obésité, surmenage, antécédents traumatiques, prédisposition génétique.',
          'Clinique : douleur mécanique, aggravée par l\'effort, soulagée au repos ; raideur matinale < 30 min.',
          'Radiographie : pincement articulaire, ostéophytes, géodes — corrélation clinico-radiologique imparfaite.',
          '🎯 EVC : distinguer arthrose (mécanique) et polyarthrite rhumatoïde (inflammatoire, raideur > 30 min).'
        ]
      },
      {
        title: 'Sites fréquents chez la PA',
        points: [
          'Genou et hanche = impact majeur sur la marche et les chutes.',
          'Rachis : cervical et lombaire — sténose lombaire → claudication neurogène.',
          'Mains : nodules de Heberden (IFD) et Bouchard (IFP).',
          'Pied : hallux valgus, métatarsalgies — chaussures adaptées.',
          '💎 Perle : arthrose sévère des genoux peut expliquer IADL ↓ avec cognition préservée.'
        ]
      },
      {
        title: 'Traitement non médicamenteux',
        points: [
          'Perte de poids si surpoids (genou, hanche).',
          'Activité physique et renforcement musculaire (quadriceps pour gonarthrose).',
          'Kinésithérapie, orthèses, cannes, éducation thérapeutique.',
          'AINS topiques possibles ; AINS systémiques à éviter ou courte durée avec gastroprotection.',
          '🎯 EVC : paracétamol 1ère ligne ; AINS systémiques chez PA = piège classique (ch16).'
        ]
      },
      {
        title: 'Indications chirurgicales',
        points: [
          'Prothèse totale de hanche/genou si douleur invalidante malgré traitement médical optimal.',
          'Évaluation gériatrique pré-op : cognition, comorbidités, aidant, risque per/anesthésie.',
          'Objectifs réalistes : marche, autonomie, qualité de vie — pas performance sportive.',
          'Rééducation post-op structurée pour limiter déconditionnement et chutes.',
          '💎 Perle : ITEM 228 — articuler bénéfice fonctionnel et risques iatrogènes en cas de polymédication.'
        ]
      }
    ]
  },
  {
    id: 'syn-8',
    title: 'Douleur',
    sections: [
      {
        title: 'Évaluation de la douleur',
        points: [
          'EVA ou EN (échelle numérique) si patient communicant et cognitifment capable.',
          'ECPA, Algoplus ou DOLOPLUS-2 si trouble cognitif ou communication altérée.',
          'Douleur sous-déclarée chez la PA : peur des médicaments, culture de la stoïcité, dépression.',
          'Rechercher douleur avant tout changement comportemental (agitation, refus alimentaire).',
          '🎯 EVC : ITEM 109 — toujours préciser l\'échelle utilisée et son seuil d\'action.'
        ]
      },
      {
        title: 'Palier 1 et 2 OMS adaptés au sujet âgé',
        points: [
          'Paracétamol = 1ère ligne jusqu\'à 3 g/j (attention hépatique et alcool).',
          'Éviter AINS : rein, digestif, cardiovasculaire, confusion.',
          'Tramadol 2ème ligne : dose réduite si > 75 ans, surveillance confusion et constipation.',
          'Opioïdes faibles puis forts si échec ; « start low, go slow ».',
          '💎 Perle : douleur non traitée = facteur précipitant majeur (delirium, chute, dénutrition).'
        ]
      },
      {
        title: 'Opioïdes et adjuvants',
        points: [
          'Morphine per os ou SC en palier 3 ; laxatifs systématiques, surveillance sédation.',
          'Adapter à la fonction rénale : prudence morphine si DFG très bas (métabolites actifs).',
          'Adjuvants neuropathiques : prégabaline, gabapentine (doses réduites, sédation).',
          'Douleur mixte fréquente (nociceptive + neuropathique) — combiner approches.',
          '🎯 EVC : citer prévention constipation et surveillance confusion avec opioïdes.'
        ]
      },
      {
        title: 'Douleur chronique et impact global',
        points: [
          'Douleur chronique : sommeil, humeur, cognition, participation sociale altérés.',
          'Approche multimodale : physique, psychologique, pharmacologique, adaptation activités.',
          'Revoir médicaments antalgiques lors de chaque hospitalisation (sédation, chutes).',
          'Fin de vie : douleur réfractaire → sédation proportionnée ou SPCMD selon cadre légal.',
          '💎 Perle : ne jamais laisser une douleur « parce que c\'est normal à cet âge ».'
        ]
      }
    ]
  },
  {
    id: 'syn-9',
    title: 'Troubles neurocognitifs',
    sections: [
      {
        title: 'Dépistage et classification',
        points: [
          'MMS : < 24/30 suggère trouble cognitif (corriger âge/scolarité) ; MoCA plus sensible aux MCI.',
          'Trouble cognitif léger (MCI) : plainte + déficit objectif sans retentissement fonctionnel majeur.',
          'Démence : déficit cognitif + retentissement sur autonomie (ADL/IADL).',
          'Bilan étiologique : NFS, B12, TSH, IRM, dosage médicaments anticholinergiques.',
          '🎯 EVC : ITEM 23 et 108 — différencier MCI, démence, delirium, pseudodémence dépressive.'
        ]
      },
      {
        title: 'Maladie d\'Alzheimer et autres démences',
        points: [
          'Alzheimer ~70 % : déclin mnésique progressif, déficit épisodique précoce.',
          'Démence vasculaire : déclin en escalier, signes focaux, leucoaraïose/infarctus IRM.',
          'Démence à corps de Lewy : fluctuations, hallucinations visuelles, parkinsonisme.',
          'Démence fronto-temporale : changements comportementaux précoces, langage.',
          '💎 Perle : DLB — neuroleptiques contre-indiqués (hypersensibilité, mortalité ↑).'
        ]
      },
      {
        title: 'Prise en charge non médicamenteuse',
        points: [
          'Stimulation cognitive, activités adaptées, gestion environnement (repères, routines).',
          'Formation des aidants : communication, gestion des TBD, sécurisation domicile.',
          'TBD : chercher cause somatique (douleur, infection) avant psychotrope.',
          'Conduite automobile : évaluation spécifique, obligation légale de déclaration selon stade.',
          '🎯 EVC : plan global = sécurité + aidants + pas de contention en première intention.'
        ]
      },
      {
        title: 'Traitements et suivi',
        points: [
          'Inhibiteurs cholinestérasiques / memantine : symptômes légers à modérés Alzheimer.',
          'Pas de traitement causal curatif ; objectifs = ralentir et maintenir autonomie.',
          'Pseudodémence dépressive : traiter dépression avant de conclure à une démence.',
          'Directives anticipées et personne de confiance à discuter tôt dans la maladie.',
          '💎 Perle : GDS-15 systématique devant tout trouble cognitif — piège EVC majeur.'
        ]
      }
    ]
  },
  {
    id: 'syn-10',
    title: 'Dépression',
    sections: [
      {
        title: 'Épidémiologie et présentation gériatrique',
        points: [
          'Prévalence élevée en institution et chez polymorbide isolé.',
          'Présentation atypique : plaintes somatiques, asthénie, insomnie, plainte cognitive.',
          'Tristesse absente ou minimisée dans près de 50 % des cas.',
          'Risque suicidaire : masculin, > 75 ans, veuvage, maladie douloureuse, isolement.',
          '🎯 EVC : GDS-15 > 11 = dépression probable même sans humeur dépressive verbalisée.'
        ]
      },
      {
        title: 'Diagnostic différentiel',
        points: [
          'Pseudodémence : début daté, plainte mnésique exagérée, amélioration avec antidépresseur.',
          'Démence vraie : négation des troubles, déclin insidieux, MMS stable ou ↓.',
          'Delirium : aigu, fluctuant — CAM positive.',
          'Deuil normal vs dépression : durée, intensité, idéation suicidaire, impossibilité de fonctionner.',
          '💎 Perle : traiter la dépression avant bilan démentiel complet si GDS élevé.'
        ]
      },
      {
        title: 'Traitement',
        points: [
          'ISRS 1ère ligne : sertraline, escitalopram — demi-dose initiale, surveillance hyponatrémie.',
          'Mirtazapine si insomnie et anorexie ; éviter paroxétine (anticholinergique).',
          'Psychothérapie et activation comportementale utiles même chez la PA.',
          'Durée traitement : souvent ≥ 12 mois après rémission ; sevrage progressif.',
          '🎯 EVC : interroger explicitement idées suicidaires — obligation éthique et notation.'
        ]
      },
      {
        title: 'Surveillance et pronostic',
        points: [
          'Surveiller chutes initiales avec ISRS, interactions anticoagulants/antiagrégants.',
          'Réponse lente (4–8 semaines) — ne pas changer trop vite.',
          'Dépression traitée améliore cognition, adhésion thérapeutique et autonomie.',
          'Coordination avec aidants : observance et signes de rechute.',
          '💎 Perle : ITEM 23 partagé avec ch9/ch11 — dépression facteur de confusion et de chute.'
        ]
      }
    ]
  },
  {
    id: 'syn-11',
    title: 'Syndrome confusionnel',
    sections: [
      {
        title: 'Définition et diagnostic CAM',
        points: [
          'Trouble aigu de l\'attention et de la conscience, fluctuant, sur heures à jours.',
          'CAM : début aigu + fluctuation + inattention + (désorganisation pensée OU altération conscience).',
          'Forme hypoactive ~75 % : sous-diagnostiquée (patient « calme »).',
          'Forme hyperactive : agitation, hallucinations — plus visible mais pas plus grave.',
          '🎯 EVC : CAM pour delirium, MMS pour démence — faire les deux.'
        ]
      },
      {
        title: 'Étiologies — modèle F3',
        points: [
          'Infection (ECP), déshydratation, rétention urinaire, constipation (impaction fécale).',
          'Iatrogénie : anticholinergiques, benzodiazépines, opioïdes, corticoïdes.',
          'Douleur non traitée, hypoxie, métabolique (Na, glycémie), AVC, occlusion fécale.',
          'Delirium superposé à démence = très fréquent à l\'hôpital.',
          '💎 Perle : ECBU + ionogramme + revue médicaments sur tout delirium — avant neuroleptique.'
        ]
      },
      {
        title: 'Traitement',
        points: [
          'Traiter la cause en priorité ; environnement calme, lunettes, appareils auditifs, horloge.',
          'Hydratation, mobilisation, sommeil protégé ; éviter contention (aggrave, lésions).',
          'Halopéridol 0,5–1 mg si agitation mettant en danger — dose minimale, durée courte.',
          'Pas de neuroleptique de routine ; préférer mesures non médicamenteuses (HELP).',
          '🎯 EVC : contention = mauvaise réponse EVC ; citer prévention non médicamenteuse.'
        ]
      },
      {
        title: 'Pronostic et prévention',
        points: [
          'Résolution en jours à semaines si cause traitée ; mortalité et perte d\'autonomie ↑.',
          'Prévention hospitalière : protocoles HELP, mobilisation précoce, éviter sédation excessive.',
          'Suivi fonctionnel post-épisode indispensable (nouveau niveau de GIR possible).',
          'Informer les aidants : le delirium n\'est pas une démence définitive mais signe de gravité.',
          '💎 Perle : confusion aiguë chez PA = urgence diagnostique — pas de simple observation.'
        ]
      }
    ]
  },
  {
    id: 'syn-12',
    title: 'Chutes et marche',
    sections: [
      {
        title: 'Épidémiologie et bilan d\'une chute',
        points: [
          '1/3 des > 65 ans chutent chaque année ; récidive fréquente après première chute.',
          'Anamnèse : circonstances, syncope vs chute mécanique, traumatisme, peur de rechute.',
          'Examen : orthostatisme (PA couché/debout), marche, pieds, vision, cognition.',
          'Bilan : ECG, ionogramme, NFS, glycémie ; imagerie si traumatisme ou suspicion fracture.',
          '🎯 EVC : ITEM 131 — structure « circonstances – facteurs intrinsèques – extrinsèques – iatrogénie ».'
        ]
      },
      {
        title: 'Facteurs de risque et scores',
        points: [
          'Intrinsèques : fragilité, déficit sensoriel, parkinsonisme, neuropathie, douleur.',
          'Extrinsèques : tapis, éclairage, chaussures, obstacles.',
          'Tinetti < 24/28 signale un risque (< 19 : risque élevé) ; Timed Up and Go > 20 s signale un risque de chute.',
          '50 % des chutes ont une cause médicamenteuse identifiable.',
          '💎 Perle : toute chute = révision médicamenteuse systématique (BZD, antihypertenseurs, psychotropes).'
        ]
      },
      {
        title: 'Prévention',
        points: [
          'Exercices d\'équilibre et renforcement (Otago, tai chi) — preuve niveau A.',
          'Vitamine D 800 UI/j si déficit ou risque ; correction déficit visuel et auditif.',
          'Adaptation du domicile : barres, éclairage, suppression tapis, chaussures antidérapantes.',
          'Déprescription benzodiazépines et psychotropes si possible.',
          '🎯 EVC : citer Tinetti + médicaments + vitamine D + adaptation domicile = réponse complète.'
        ]
      },
      {
        title: 'Troubles de la marche',
        points: [
          'Marche à petits pas parkinsonienne, marche apraxique (hydrocéphalie), claudication neurogène.',
          'Vitesse de marche < 0,8 m/s = marqueur de fragilité et pronostic.',
          'Aides techniques : canne, déambulateur — éducation à l\'usage pour éviter chute paradoxale.',
          'Rééducation post-chute et prise en charge de l\'apraxie de la peur de chuter.',
          '💎 Perle : syncope vs chute — bilan cardiologique si perte de connaissance ou prodromes.'
        ]
      }
    ]
  },
  {
    id: 'syn-13',
    title: 'Alitement et escarres',
    sections: [
      {
        title: 'Conséquences de l\'alitement',
        points: [
          'Déconditionnement musculaire rapide (sarcopénie aiguë), perte d\'autonomie.',
          'Risque thromboembolique, pneumopathie d\'inhalation, constipation, rétention urinaire.',
          'Delirium, dénutrition, dépression — cascade gériatrique complète.',
          'Objectif : mobilisation précoce dès que possible, verticalisation progressive.',
          '🎯 EVC : alitement = iatrogénie fréquente — toujours questionner sa nécessité.'
        ]
      },
      {
        title: 'Escarres — physiopathologie et stades',
        points: [
          'Pression > 32 mmHg prolongée sur proéminences → ischémie tissulaire.',
          'Sites : sacrum, talons, trochanters, occiput ; friction et cisaillement aggravants.',
          'Stade 1 : érythème persistant ; 2 : perte partielle derme ; 3 : perte totale ; 4 : os/tendon.',
          'Escarre = baromètre de qualité des soins et de l\'état nutritionnel.',
          '💎 Perle : talons surélevés — jamais de pression directe prolongée sur le talon.'
        ]
      },
      {
        title: 'Prévention — échelle de Braden',
        points: [
          'Braden ≤ 12/23 = risque élevé ; évaluer perception, humidité, activité, mobilité, nutrition, friction.',
          'Repositionnement régulier, matelas de redistribution de pression, soins de peau.',
          'Nutrition hyperprotéique si risque ou escarre installée (1,2–1,5 g/kg/j protéines).',
          'Hydratation cutanée, incontinence gérée (barrière cutanée).',
          '🎯 EVC : citer Braden + repositionnement + nutrition — triade de prévention.'
        ]
      },
      {
        title: 'Traitement des escarres et TVP',
        points: [
          'Décharge locale, pansements adaptés au stade, désinfection si infection.',
          'Antibiotiques si cellulite ou ostéite — prélèvements si nécessaire.',
          'TVP prophylaxie : mobilisation, bas de contention, anticoagulation selon score chirurgical.',
          'Équipe pluridisciplinaire : IDE, diététicien, kiné, chirurgien si profonde.',
          '💎 Perle : albumine < 35 g/L = facteur de risque escarre et mauvaise cicatrisation.'
        ]
      }
    ]
  },
  {
    id: 'syn-14',
    title: 'Nutrition',
    sections: [
      {
        title: 'Dépistage de la dénutrition',
        points: [
          'MNA < 17 = dénutrition ; 17–23,5 = risque de dénutrition.',
          'Perte de poids > 5 % en 1 mois ou > 10 % en 6 mois = dénutrition.',
          'Albumine < 35 g/L : marqueur pronostique (inflammation + apports).',
          'IMC < 21 kg/m² chez PA = alerte (seuil plus haut qu\'adulte jeune).',
          '🎯 EVC : ITEM 230 — ne pas se fier à l\'IMC seul ; triade MNA + poids + albumine.'
        ]
      },
      {
        title: 'Besoins nutritionnels',
        points: [
          'Énergie : 30–35 kcal/kg/j ; protéines 1,0–1,2 g/kg/j (1,2–1,5 si escarre, infection).',
          'Fractionnement des repas, enrichissement (CNO), texture adaptée si dysphagie.',
          'Hydratation : 1,5 L/j si pas de restriction ; surveillance déshydratation en été.',
          'Vitamine D et calcium selon os et apports alimentaires.',
          '💎 Perle : dénutrition = facteur F3 de décompensation (immunité, muscle, cognition).'
        ]
      },
      {
        title: 'Dysphagie et fausse route',
        points: [
          'Signes : toux à l\'alimentation, voix mouillée, temps de repas allongé, pneumopathies récidivantes.',
          'Bilan orthophonique ; textures IDDSI ; postures de déglutition.',
          'Nutrition entérale si besoins non couverts par voie orale sécurisée.',
          'Jeûne inutile en hospitalisation = dénutrition iatrogène.',
          '🎯 EVC : dysphagie post-AVC = jeûne jusqu\'à évaluation — puis plan texture/entérale.'
        ]
      },
      {
        title: 'Renutrition et complications',
        points: [
          'Réalimentation progressive si dénutrition sévère — risque de syndrome de renutrition inappropriée.',
          'Surveiller phosphore, potassium, magnésium, thiamine les premiers jours.',
          'Nutrition entérale gastrique en priorité ; parentérale si échec ou contre-indication digestive.',
          'Objectif : fonction (marche, cicatrisation), pas seulement chiffres biologiques.',
          '💎 Perle : anorexie + dépression + douleur = traiter les causes avant sonde systématique.'
        ]
      }
    ]
  },
  {
    id: 'syn-15',
    title: 'Incontinence urinaire',
    sections: [
      {
        title: 'Classification',
        points: [
          'Incontinence d\'effort : fuite à l\'effort (toux, marche) — défaut sphincter/périnée.',
          'Incontinence par urgenturie : hyperactivité vésicale, impériosité.',
          'Mixte : effort + urgenturie — la composante dominante guide le traitement.',
          'Incontinence fonctionnelle : accès toilettes impossible (mobilité, cognition, environnement).',
          '🎯 EVC : ITEM 133 — typer l\'incontinence AVANT de prescrire.'
        ]
      },
      {
        title: 'Bilan urologique gériatrique',
        points: [
          'Calendrier mictionnel 3 jours : volumes, fuites, nycturie.',
          'Recherche infection, résidu post-mictionnel (échographie > 100–150 mL).',
          'Médicaments : diurétiques, anticholinergiques, α-bloquants.',
          'Examen : prostate, sécurité de marche, cognition, constipation.',
          '💎 Perle : constipation et impaction fécale = causes réversibles d\'incontinence et de confusion.'
        ]
      },
      {
        title: 'Traitements',
        points: [
          'Effort : rééducation périnéale 1ère ligne ; chirurgie si indication chez PA sélectionnée.',
          'Urgenturie : rééducation vésicale, mirabégron (moins anticholinergique), anticholinergiques prudence.',
          'Éviter anticholinergiques si cognition fragile (confusion, rétention).',
          'Incontinence fonctionnelle : horaires mictionnels, adaption domicile, aide humaine.',
          '🎯 EVC : anticholinergique pour effort = erreur classique ; rééducation périnéale d\'abord.'
        ]
      },
      {
        title: 'Hygiène et qualité de vie',
        points: [
          'Protections adaptées, prévention dermatite d\'incontinence.',
          'Boire suffisamment — restriction hydrique excessive aggrave infections et confusion.',
          'Impact sur isolement, dépression, coût des soins — aborder avec dignité.',
          'Évaluer retentissement sur aidants et projet de maintien à domicile.',
          '💎 Perle : incontinence récente aiguë = recherche delirium et infection en priorité.'
        ]
      }
    ]
  },
  {
    id: 'syn-16',
    title: 'Prescrire chez le patient âgé',
    sections: [
      {
        title: 'Pharmacocinétique et pharmacodynamie',
        points: [
          'Absorption variable ; volume de distribution modifié ; métabolisme hépatique ↓.',
          'Élimination rénale ↓ : ajuster selon DFG (CKD-EPI).',
          'Sensibilité accrue aux psychotropes, antihypertenseurs, hypoglycémiants.',
          '« Start low, go slow » — titration lente, une modification à la fois si possible.',
          '🎯 EVC : ITEM 322 et 325 — DFG + posologie + surveillance.'
        ]
      },
      {
        title: 'Beers, STOPP/START',
        points: [
          'Beers : liste de médicaments potentiellement inappropriés (BZD longue durée, anticholinergiques, AINS chroniques).',
          'STOPP : erreurs à arrêter ; START : traitements omis indiqués (bêtabloquant post-IDM, statine…).',
          'Revue trimestrielle en polymédication (≥ 5 médicaments).',
          'Impliquer patient, aidant et pharmacien — déprescription progressive.',
          '💎 Perle : polymédication = maladie iatrogène autant que pathologie organique.'
        ]
      },
      {
        title: 'Cascade iatrogénique et charge anticholinergique',
        points: [
          'Cascade : médicament A → effet indésirable → médicament B pour traiter A → etc.',
          'Exemple : AINS → HTA → antihypertenseur → hypotension orthostatique → chute.',
          'ACB ≥ 3 : risque confusion, chute, constipation, rétention urinaire.',
          'Priorité : réduire charge anticholinergique avant d\'ajouter un anticholinergique pour incontinence.',
          '🎯 EVC : décrire une cascade complète en cas pratique = forte valeur ajoutée.'
        ]
      },
      {
        title: 'Médicaments à vigilance majeure',
        points: [
          'AINS : contre-indiqués ou très courte durée ; paracétamol en alternative.',
          'Benzodiazépines : chutes, confusion, dépendance — sevrage progressif.',
          'Anticoagulants/oraux antidiabétiques : risque hémorragique et hypoglycémie.',
          'Digoxine > 0,125 mg/j déconseillé ; metformine si DFG bas.',
          '💎 Perle : tout nouveau symptôme chez PA = médicament jusqu\'à preuve du contraire.'
        ]
      }
    ]
  },
  {
    id: 'syn-17',
    title: 'Soins palliatifs',
    sections: [
      {
        title: 'Principes et indication',
        points: [
          'Accompagnement de la personne malade grave, incurable, à phase avancée — tôt dans la maladie.',
          'Objectifs : qualité de vie, soulagement souffrances, respect volontés, soutien aidants.',
          'Équipe mobile palliative, unités de soins palliatifs, HAD selon situation.',
          'Ne pas réserver aux seuls derniers jours — indication dès besoin symptomatique complexe.',
          '🎯 EVC : ITEM 139 — palliatif ≠ abandon thérapeutique.'
        ]
      },
      {
        title: 'Cadre légal français',
        points: [
          'Loi Leonetti : limitation/arrêt traitement, sédation proportionnée.',
          'Loi Claeys-Leonetti 2016 : SPCMD si souffrance réfractaire en phase terminale.',
          'Directives anticipées et personne de confiance à intégrer au projet.',
          'Obstination déraisonnable interdite ; proportionnalité des soins.',
          '💎 Perle : distinguer sédation proportionnée, SPCMD et euthanasie (interdite en France).'
        ]
      },
      {
        title: 'Symptômes fréquents',
        points: [
          'Douleur : morphine per os/SC, paliers OMS, adaptation rein.',
          'Dyspnée : morphine faible dose, position, oxygène si confort (pas toujours nécessaire).',
          'Agitation terminale : midazolam, environnement calme, présence aidants.',
          'Soins de bouche, nausées, constipation opioïdes — confort systématique.',
          '🎯 EVC : morphine en fin de vie = traitement de référence dyspnée et douleur.'
        ]
      },
      {
        title: 'Trajectoires de fin de vie',
        points: [
          'Cancer : déclin progressif souvent prévisible — anticipation soins.',
          'Maladie dégénérative (démence, BPCO) : trajectoire en dents de scie, pics aigus.',
          'Accompagnement des aidants : épuisement, deuil anticipé, rupture de soins après décès.',
          'Certificat, démarches administratives, autopsie clinique si enseignement.',
          '💎 Perle : annonce de mauvaise nouvelle et projet de soins anticipés — compétences EVC.'
        ]
      }
    ]
  },
  {
    id: 'syn-18',
    title: 'Mini-dossiers progressifs',
    sections: [
      {
        title: 'Structure de la restitution',
        points: [
          'Anamnèse structurée → examen clinique → hypothèses → examens complémentaires → diagnostic → plan.',
          'Commencer par les données objectives, pas par le diagnostic.',
          'Chaque hypothèse : arguments pour et contre.',
          'Prioriser les problèmes selon urgence et retentissement fonctionnel.',
          '🎯 EVC : 15 min de restitution — concision, structure, pas de lecture de fiche.'
        ]
      },
      {
        title: 'Évaluation gériatrique dans le cas',
        points: [
          'Citer systématiquement : ADL/IADL, MMS ou MoCA, GDS-15, MNA, Tinetti selon le cas.',
          'Rechercher iatrogénie et facteur précipitant (modèle Bouchon).',
          'Évaluer environnement social et aidant — plan réaliste de maintien à domicile.',
          'Fragilité et réserves : tolérance traitements et chirurgie.',
          '💎 Perle : un bon plan de sortie vaut autant que le bon diagnostic.'
        ]
      },
      {
        title: 'Communication',
        points: [
          'Expliquer au patient ET à l\'aidant avec mots simples.',
          'Vérifier compréhension ; reformuler les objectifs de soins.',
          'Annoncer incertitude si besoin — proposer suivi.',
          'Sécurité : qui appeler, signes d\'alerte, adaptations domicile.',
          '🎯 EVC : communication aidant = critère souvent noté séparément.'
        ]
      },
      {
        title: 'Erreurs à éviter',
        points: [
          'Oublier la revue médicamenteuse après chute ou confusion.',
          'Prescrire sans typer l\'incontinence ou sans évaluer la douleur.',
          'Conclure à une démence sans avoir écarté dépression et delirium.',
          'Plan sans lieu de vie (domicile sécurisé ? SSR ? EHPAD ?).',
          '💎 Perle : mini-dossiers ch18 = synthèse transversale de toute la partie I.'
        ]
      }
    ]
  },
  {
    id: 'syn-19',
    title: 'Key-features problems',
    sections: [
      {
        title: 'Méthode key-features',
        points: [
          'Problème clinique centré sur décisions critiques — pas encyclopédique.',
          'Identifier le problème principal parmi plusieurs (priorisation).',
          'Structure : données pertinentes → hypothèses → stratégie diagnostique → intervention.',
          'Chaque option : choisir la meilleure ET rejeter les dangereuses.',
          '🎯 EVC : lire TOUT le cas avant de répondre — pièges de dispersion.'
        ]
      },
      {
        title: 'Compétences évaluées',
        points: [
          'Raisonnement clinique gériatrique : atypique, syndromique, iatrogénie.',
          'Pertinence des examens : ne pas sur-investiger ni sous-investiger.',
          'Choix thérapeutiques sécurisés : Beers, pas d\'AINS, pas de contention routine.',
          'Éthique et communication : consentement, refus, fin de vie.',
          '💎 Perle : la mauvaise réponse « prescrire » est souvent plus sévèrement pénalisée que l\'omission.'
        ]
      },
      {
        title: 'Stratégie d\'entraînement',
        points: [
          'Refaire les annales CNEG et corrigés en justifiant chaque option.',
          'Lister les pièges par chapitre (voir PIEGES_EXAM).',
          'Chronométrer : temps de lecture vs temps de réponse.',
          'Travailler en binôme : expliquer à voix haute renforce la structuration.',
          '🎯 EVC : justifier chaque décision en une phrase claire — comme à l\'oral.'
        ]
      },
      {
        title: 'Thèmes transversaux récurrents',
        points: [
          'Chute + médicaments + Tinetti + vitamine D.',
          'Confusion + CAM + infection + arrêt anticholinergiques.',
          'Dénutrition + MNA + protéines + dysphagie.',
          'Dépression gériatrique + GDS + ISRS + pseudodémence.',
          '💎 Perle : key-features = application pratique du modèle Bouchon et de l\'EGM.'
        ]
      }
    ]
  },
  {
    id: 'syn-20',
    title: 'Questions isolées',
    sections: [
      {
        title: 'Stratégie de préparation',
        points: [
          'Maîtriser TOUS les ITEMS du programme officiel (liste dans data.js par chapitre).',
          'Chaque ITEM peut donner une question courte à réponse argumentée.',
          'Fiches scores : seuils exacts (MMS, GDS, MNA, Braden, Tinetti, Fried, FRAX).',
          'Lois et éthique : dates et contenus des lois Kouchner, Leonetti, Claeys-Leonetti.',
          '🎯 EVC : réponse courte (2–5 min) — pas de dissertation, aller droit au fait.'
        ]
      },
      {
        title: 'ITEMS et rang A',
        points: [
          'ITEM 123 vieillissement, 121 autonomie, 9 éthique, 130 sensoriel, 128 ostéoporose.',
          'ITEM 228 arthrose, 109 douleur, 23/108 cognition-confusion, 131 chutes.',
          'ITEM 230 nutrition, 133 incontinence, 322/325 prescription, 139 palliatif.',
          'Relier chaque ITEM au chapitre correspondant et aux 5 points de SYNTHESIS_RAPIDE.',
          '💎 Perle : citer le numéro d\'ITEM si la question y fait référence explicite.'
        ]
      },
      {
        title: 'Formulation de la réponse',
        points: [
          'Définition précise → 2–3 éléments clés → exemple clinique gériatrique si temps.',
          'Chiffres et seuils : les connaître par cœur (erreur = perte de crédibilité).',
          'Toujours contextualiser « chez la personne âgée » (pas de réponse pédiatrique ou générique).',
          'Si incertitude : raisonnement transparent plutôt qu\'invention.',
          '🎯 EVC : vocabulaire CNEG (vulnérabilité, fragilité, EGM, cascade) = langage attendu.'
        ]
      },
      {
        title: 'Révisions de dernière minute',
        points: [
          'Modèle Bouchon 1+2+3 + exemple dyspnée/chute/confusion.',
          'Critères Fried + vitesse marche 0,8 m/s.',
          'CAM delirium + causes F3 + pas de contention.',
          'Beers/STOPP + cascade iatrogénique + ACB.',
          '💎 Perle : ch20 récompense la précision — une définition floue = demi-point perdu.'
        ]
      },
      {
        title: 'Auto-contrôle',
        points: [
          'Quiz flashcards + annales-expanded par chapitre.',
          'Vérifier que chaque chapitre partie I a au moins 3 scores mémorisés.',
          'Revoir figures et protocoles urgence si double compétence interne/gériatrie.',
          'Simuler oral 15 min sur un mini-dossier type annales-archive.',
          '🎯 EVC : confiance = structure + seuils + pièges évités — pas volume encyclopédique.'
        ]
      }
    ]
  }
];

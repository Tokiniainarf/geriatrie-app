// Techniques d'examen gériatrique — Guide pratique structuré
const TECHNIQUES_EXAMEN = [
  {
    id: 'tex-1',
    technique: 'Auscultation cardiaque',
    indication: 'Dépistage et suivi des valvulopathies, insuffisance cardiaque, arythmies, souffle nouveau chez le sujet âgé ; bilan de dyspnée, lipothymie, oedèmes.',
    materiel: 'Stéthoscope (pavillon et embout), tensiomètre, horloge avec secondes, lit ou fauteuil inclinable, pièce calme.',
    etapes: [
      'Installer le patient semi-assis à 45°, décolleter thorax et avant-bras ; réchauffer le pavillon.',
      'Identifier les foyers : aortique (2e EIC droit), pulmonaire (2e EIC gauche), tricuspidien (4e–5e EIC gauche), mitral (apex, 5e EIC gauche ligne médio-claviculaire).',
      'Auscultation systolique et diastolique à chaque foyer ; écouter aussi bases et carotides si souffle.',
      'Qualifier le souffle : timing (systolique/diastolique/continu), intensité (I–VI/VI), irradiation, variation respiration (manœuvre de Valsalva si tolérée).',
      'Rechercher B1/B2, galop (B3/B4), frottement, clic d\'éjection, souffle carotidien.',
      'Mesurer fréquence cardiaque et régularité sur 30 s à 1 min ; noter extrasystoles ou fibrillation.'
    ],
    criteres_normaux: [
      'B1 et B2 audibles, réguliers, sans galop chez sujet stable.',
      'Pas de souffle systolique ≥ grade III/VI ni souffle diastolique.',
      'Fréquence 60–100/min au repos (adapter si pacemaker ou bêta-bloquant).',
      'Pas de frottement péricardique.'
    ],
    criteres_pathologiques: [
      'Souffle systolique aortique irradiant carotides → sténose aortique (attention syncope, angor).',
      'Souffle holosystolique apex → insuffisance mitrale.',
      'Galop B3 → insuffisance cardiaque gauche ; B4 → HTA, cardiopathie hypertrophique.',
      'Rythme irrégulier sans pouls → fibrillation atriale.',
      'Souffle diastolique ou souffle nouveau après 65 ans → écho obligatoire.'
    ],
    pieges: [
      'Confondre souffle fonctionnel benin (systolique doux, pas d\'irradiation) et sténose aortique serrée.',
      'Auscultation sur vêtements épais ou en position couchée seule (manquer galop).',
      'Oublier que l\'insuffisance cardiaque du sujet âgé peut être sans souffle (dysfonction diastolique).',
      'Ne pas palper le pouls radial/concomitant si arythmie suspectée.'
    ]
  },
  {
    id: 'tex-2',
    technique: 'Auscultation pulmonaire',
    indication: 'Dyspnée, toux chronique, BPCO, pneumopathie, oedème pulmonaire, dépistage post-infection ; bilan avant chirurgie ou anesthésie.',
    materiel: 'Stéthoscope, thermomètre si besoin, SpO2 portable, lit, éclairage suffisant.',
    etapes: [
      'Patient assis, mains sur genoux, respiration par la bouche si nécessaire ; comparer symétrie thoracique.',
      'Palpation : expansion, vibrations vocales, douleur costale.',
      'Percussion : sonore vs matité (épanchement, condensation).',
      'Auscultation comparative : apex → bases, antérieur puis postérieur (si patient peut se tourner).',
      'Noter murmure vésiculaire, bronchique, crépitants (fins/gros), sibilants, ronchi, frottement pleural.',
      'Associer SpO2 au repos et après effort minimal si dyspnée.'
    ],
    criteres_normaux: [
      'Murmure vésiculaire symétrique, audible sans bruit surajouté.',
      'Pas de crépitants persistants aux bases.',
      'Fréquence respiratoire 12–20/min, SpO2 ≥ 94 % (ou cible adaptée BPCO).',
      'Expansion thoracique symétrique.'
    ],
    criteres_pathologiques: [
      'Crépitants fins bilatéraux bases → oedème pulmonaire ou pneumopathie interstitielle.',
      'Sibilants expiratoires diffus → BPCO ou asthme.',
      'Abolition murmure + matité → épanchement ou atélectasie.',
      'Bronchique en foyer → condensation (pneumonie).',
      'Asymétrie majeure → embolie, pneumothorax, tumeur (imagerie).'
    ],
    pieges: [
      'Crépitants des bases chez le sujet âgé bedridden peuvent être chroniques (ne pas sur-diagnostiquer pneumonie seule).',
      'Ne pas ausculter sans déshabiller le dos (manquer foyer postérieur).',
      'Confondre ronchi (liquides) et sibilants (bronchospasme) — impact thérapeutique différent.',
      'Oublier SpO2 : auscultation normale avec hypoxie possible (embolie, BPCO).'
    ]
  },
  {
    id: 'tex-3',
    technique: 'Mesure de la pression artérielle orthostatique',
    indication: 'Chutes, lipothymies, vertiges, introduction ou hausse d\'antihypertenseur, déshydratation, Parkinson, diabète autonomique ; sujet âgé polymédiqué.',
    materiel: 'Tensiomètre validé (bras), brassard taille adaptée (circonférence bras), lit ou fauteuil, chronomètre.',
    etapes: [
      'Patient au repos 5 min couché ou semi-assis, jambes non croisées, bras à hauteur du cœur.',
      'Mesurer PA et FC couché (ou semi-assis) : moyenne de 2 mesures si première élevée.',
      'Aider le patient à se lever sans valsalva ; debout immobile dès que possible.',
      'Mesurer PA et FC à 1 min debout, puis à 3 min debout.',
      'Interroger symptômes : vision trouble, faiblesse, vertige, lipothymie.',
      'Noter traitements hypotenseurs, diurétiques, recent alimentation/hydratation.'
    ],
    criteres_normaux: [
      'Chute systolique < 20 mmHg et diastolique < 10 mmHg entre couché et debout.',
      'Pas de symptômes orthostatiques.',
      'FC augmente modestement au lever (compensation).',
      'PA debout maintenue compatible avec autonomie (souvent SBP 110–140 selon contexte).'
    ],
    criteres_pathologiques: [
      'Chute SBP ≥ 20 mmHg ou DBP ≥ 10 mmHg à 1 ou 3 min → hypotension orthostatique.',
      'Chute SBP ≥ 30 mmHg ou symptômes au lever même si seuils non atteints.',
      'Tachycardie excessive ou bradycardie inadaptée au lever.',
      'PA couchée très basse → déshydratation, saignement, insuffisance surrénalienne.'
    ],
    pieges: [
      'Mesure unique debout immédiatement après effort (fausse hypotension ou normale masquée).',
      'Brassard trop petit → surévaluation systolique.',
      'Oublier que l\'hypotension orthostatique est fréquente sans symptômes (traiter si chutes).',
      'Ne pas répéter si introduction récente d\'alpha-bloquant ou association 3 antihypertenseurs.'
    ]
  },
  {
    id: 'tex-4',
    technique: 'Examen neurologique rapide',
    indication: 'Chute, déficit focal suspect, confusion, vertiges, trouble de la marche, dépistage AVC/TIA, suivi Parkinson ou neuropathie.',
    materiel: 'Stylo, feuille, marteau réflexes, bandeau ou coton (sensibilité), espace pour marche, tensiomètre.',
    etapes: [
      'Niveau de conscience (alerte, somnolence) ; orientation rapide si confusion.',
      'Paires crâniennes ciblées : pupilles, mouvements oculaires, face, audition grossière, déglutition, langue.',
      'Motricité : force des 4 membres (0–5), pronation main, marche 10 m, timed up and go si possible.',
      'Coordination : doigt-nez, talon-genou ; station debout, Romberg si équilibre.',
      'Sensibilité : toucher distal mains/pieds ; réflexes rotulien et achilléen ; signe de Babinski si indication.',
      'Recherche signes méningés si fièvre/céphalée ; carotides si AIT.'
    ],
    criteres_normaux: [
      'Force 5/5 symétrique proximale et distale (sauf pathologie connue).',
      'Marche fluide, pas de déficit sensitif distal symétrique majeur.',
      'Réflexes présents et symétriques (diminution physiologique avec l\'âge).',
      'Pas de syndrome pyramidal ni signe focal nouveau.'
    ],
    criteres_pathologiques: [
      'Déficit moteur unilatéral brutal → AVC jusqu\'à preuve du contraire.',
      'Chute avec déficit, aphasie, trouble visuel → urgence neurovasculaire.',
      'Neuropathie périphérique : aréflexie achilléenne, « chaussette » sensitive.',
      'Parkinson : rigidité, bradykinésie, instabilité posturale.',
      'Myélopathie : hyperréflexie, Babinski, troubles sphinctériens.'
    ],
    pieges: [
      'Examen incomplet si patient non collaborant — documenter et répéter.',
      'Confondre faiblesse de la déconditionnement et hémiplégie.',
      'Oublier hypoglycémie ou infection comme cause de déficit transitoire.',
      'Négliger la marche : seul examen au lit manque l\'instabilité orthostatique.'
    ]
  },
  {
    id: 'tex-5',
    technique: 'Évaluation cognitive rapide',
    indication: 'Plainte mnésique, confusion, chute, perte d\'autonomie IADL, dépistage annuel fragile, avant chirurgie, suspicion délirium vs démence.',
    materiel: 'Fiche MMS ou MoCA, stylo, horloge à dessiner, montre pour orientation, pièce calme, lunettes/appareils auditifs du patient.',
    etapes: [
      'Vérifier audition et vision ; corriger scolarité pour seuils MMS.',
      'MMS en 5–10 min : orientation, mémorisation 3 mots, attention, rappel, langage, praxies.',
      'Si MMS > 24 et suspicion exécutif : test de l\'horloge (10 h 10) ou MoCA tronqué selon temps.',
      'Entretien aidant court : difficultés finances, médicaments, conduite, erreurs récentes.',
      'Rechercher fluctuations, hallucinations visuelles (DLB), signes dépressifs (pseudodémence).',
      'Si aigu : 4AT pour délirium ; comparer au dossier antérieur si disponible.'
    ],
    criteres_normaux: [
      'MMS ≥ 24 (ajuster scolarité : +1 à +3 points seuil si études limitées).',
      'Horloge correcte (cadran, chiffres, aiguilles).',
      'IADL préservées selon entourage.',
      'Pas de fluctuation majeure dans la journée.'
    ],
    criteres_pathologiques: [
      'MMS < 24 ou chute ≥ 2 points en 1 an.',
      '4AT ≥ 4 → délirium probable (chercher cause somatique).',
      'Déficit praxies/horloge avec MMS conservé → MCI ou démence frontale/Lewy.',
      'GDS élevé associé → dépression à traiter avant conclusion démence.'
    ],
    pieges: [
      'Diagnostiquer démence sur un MMS seul sans retentissement fonctionnel.',
      'Tester sans lunettes ni langue maternelle du patient.',
      'Ne pas répéter après correction hypo/hyperglycémie ou infection (confusion réversible).',
      'Oublier l\'aidant : sous-estimation fréquente par le patient.'
    ]
  },
  {
    id: 'tex-6',
    technique: 'Évaluation de la douleur',
    indication: 'Toute consultation gériatrique ; patient non verbal, démence, post-chute, post-opératoire ; refus alimentation ou agitation.',
    materiel: 'Échelle EVA/EN, fiches Algoplus ou DOLOPLUS-2, ECPA si besoin, thermomètre, examen articulaire.',
    etapes: [
      'Identifier capacité communication : auto-EVA 0–10 ou échelles comportementales.',
      'Algoplus (5 items) si trouble cognitif : grimaces, plainte verbale, attitude corporelle, comportement, consolabilité.',
      'Localiser, chronologie, facteurs aggravants ; impact sommeil et marche.',
      'Examen ciblé : articulations douloureuses, colonne, peau, escarres, abdomen.',
      'Revoir traitement antalgique actuel et effets indésirables (constipation, sédation).',
      'Réévaluer après analgésie ou repositionnement.'
    ],
    criteres_normaux: [
      'EVA 0–3 au repos ou douleur contrôlée par traitement habituel.',
      'Algoplus < 2 en absence de contexte douloureux connu.',
      'Mobilisation possible sans détresse majeure.',
      'Pas de retrait ou agitation inexpliquée.'
    ],
    criteres_pathologiques: [
      'EVA ≥ 4 persistante ou Algoplus ≥ 2.',
      'Douleur à la mobilisation non traitée (risque immobilisation, escarre).',
      'Douleur thoracique, abdomen aigu, membre froid douloureux → urgences.',
      'Opioïde + confusion : rechercher sédation excessive ou rétention.'
    ],
    pieges: [
      '« Pas de douleur » chez patient demente sans échelle comportementale.',
      'Attribuer uniquement à l\'arthrose sans chercher fracture, ischémie, infection.',
      'Sous-traiter la douleur par peur des opioïdes (dose adaptée DFG possible).',
      'Oublier causes iatrogènes : hernie médicamenteuse, constipation douloureuse.'
    ]
  },
  {
    id: 'tex-7',
    technique: 'Évaluation nutritionnelle',
    indication: 'Perte de poids involontaire, fragilité, dysphagie, post-hospitalisation, polypathologie, suspicion dénutrition EHPAD.',
    materiel: 'Balance, mètre ou taille déclarée, MNA-SF imprimé, fiche poids antérieur, tour de bras optionnel.',
    etapes: [
      'Poids actuel à jeun si possible ; comparer poids 1 mois et 6 mois (perte > 5 % / > 10 %).',
      'Calcul IMC ; MNA-SF (6 items) : diminution apports, perte poids, mobilité, stress aigu, neuropsychique, IMC.',
      'Interrogatoire : nombre repas, textures, hydratation, denture, déglutition, isolement au repas.',
      'Examen : maigreur muscle (deltoïde, quadriceps), oedèmes, état buccal.',
      'Médicaments : metformine, digoxine toxicité, restriction hydrique inappropriée.',
      'Planifier biologie si MNA ≤ 11 : albumine, préalbumine, 25-OH-D, ionogramme.'
    ],
    criteres_normaux: [
      'MNA-SF ≥ 12 (idéal ≥ 14).',
      'IMC 21–27 souvent acceptable ; pas de perte récente significative.',
      'Apports protéiques estimés adéquats (≥ 1 g/kg/j si DFG permet).',
      'Hydratation : ≥ 1–1,5 L/j sauf restriction médicale documentée.'
    ],
    criteres_pathologiques: [
      'MNA-SF ≤ 11 ou perte poids rapide.',
      'IMC < 21 avec sarcopénie clinique.',
      'Dysphagie, fausses routes, refus alimentaire répété.',
      'Albumine basse avec inflammation : dénutrition protéino-énergétique.'
    ],
    pieges: [
      'Se fier à l\'IMC seul sans historique de poids (sarcopénie obèse).',
      'Restriction hydrique systématique en EHPAD (déshydratation, confusion).',
      'Ne pas référer orthophonie si toux à l\'eau ou voix mouillée.',
      'Confondre oedème et bon état nutritionnel.'
    ]
  },
  {
    id: 'tex-8',
    technique: 'Évaluation cutanée',
    indication: 'Immobilisation, incontinence, diabète, anticoagulants, dénutrition ; dépistage escarres, infections, cancers cutanés, ecchymoses iatrogènes.',
    materiel: 'Gants, lampe, fiche Braden ou Norton, règle pour mesurer lésions, thermomètre si infection.',
    etapes: [
      'Inspection complète : cuir chevelu, plis, sacrum, talons, entre-doigts, sous appareils (O2, prothèse).',
      'Palpation température, induration, douleur ; classer lésions (macule, vésicule, escarre stade).',
      'Braden : perception sensorielle, humidité, activité, mobilité, nutrition, friction.',
      'Rechercher mycoses, intertrigo, ulcère veineux vs artériel (pouls, bord, douleur).',
      'Noter ecchymoses en rapport avec chute vs maltraitance ou surdosage AVK.',
      'Photodocumentation ou schéma si suivi escarre.'
    ],
    criteres_normaux: [
      'Peau intacte aux points d\'appui, pas d\'escarre stade ≥ 2.',
      'Braden > 18 (risque faible) ou Norton > 14 selon échelle utilisée.',
      'Pas de lésion suspecte évolutive non explorée.',
      'Cicatrices stables sans signe surinfection.'
    ],
    criteres_pathologiques: [
      'Escarre stade 2–4 ou lésion non blanchissable persistante.',
      'Braden ≤ 14 : protocole prévention renforcé.',
      'Ulcère avec nécrose, odeur, fièvre → infection.',
      'Lésion pigmentée asymétrique en croissance → dermatologie.',
      'Purpura étendu sous anticoagulant → surdosage ou vasculite.'
    ],
    pieges: [
      'Examiner seulement le dos si patient assis (manquer talons).',
      'Classer mauvais stade d\'escarre (sous-estimer profondeur).',
      'Oublier pression des prothèses et lunettes O2 sur le nez.',
      'Traiter mycose sans assécher et repositionner (récurrence).'
    ]
  },
  {
    id: 'tex-9',
    technique: 'Évaluation articulaire',
    indication: 'Douleur mécanique, raideur matinale, chute, limitation AVQ, polyarthrite, arthrose sévère, suspicion fracture sur ostéoporose.',
    materiel: 'Goniomètre optionnel, tabouret, EVA douleur, radiographies antérieures si disponibles.',
    etapes: [
      'Interrogatoire : topographie, raideur matinale (< 30 min arthrose), gonflement, traumatisme récent.',
      'Inspection : déformation, rougeur, chaleur, épanchement.',
      'Palpation articulations douloureuses et contralatérales.',
      'Amplitudes actives puis passives : épaules, coudes, poignets, hanches, genoux, chevilles.',
      'Marche et lever de chaise (hanche/genou) ; test rotule si genou douloureux.',
      'Rechercher crevices, impotence fonctionnelle post-chute (hanche).'
    ],
    criteres_normaux: [
      'Amplitudes suffisantes pour AVQ courantes (pas de blocage).',
      'Pas de synovite aiguë (chaleur, épanchement important).',
      'Douleur mécanique modérée contrôlée.',
      'Pas d\'impotence fonctionnelle nouvelle post-traumatisme mineur.'
    ],
    criteres_pathologiques: [
      'Raideur matinale > 60 min + synovite → polyarthrite inflammatoire.',
      'Genou chaud gonflé + fièvre → arthrite septique (ponction).',
      'Douleur hanche impossible à la rotation après chute → fracture.',
      'Déformation rapide, ostéoporose : fracture tassement vertébral.',
      'Limitation majeure unilatérale brutale → imagerie urgente.'
    ],
    pieges: [
      'Prescrire AINS systématique sans évaluer IRC/HTA (Beers).',
      'Manquer fracture hanche si patient alité après chute « sans douleur ».',
      'Confondre lombalgie mécanique et compression radiculaire (déficit moteur).',
      'Négliger podologie et chaussures dans genou arthrosique.'
    ]
  },
  {
    id: 'tex-10',
    technique: 'Évaluation visuelle',
    indication: 'Chutes, conduite automobile, déclin autonomie, diabète, glaucome/cataracte connus, trouble lecture médicaments.',
    materiel: 'Échelle Snellen ou carte optotype, écran lecture, lunettes habituelles du patient, test Amsler si maculopathie.',
    etapes: [
      'Lunettes de correction habituelles portées ; mesurer acuité chaque œil (loin) si possible.',
      'Test lecture : journal, étiquette médicament (presbytie pratique).',
      'Champ visuel confrontation grossier ; pupilles, réflexe rouge si cataracte suspectée.',
      'Rechercher diplopie, rougeur douloureuse (glaucome aigu), baisse brutale (DMLA, décollement).',
      'Impact : chutes (profondeur), erreurs pilulier, isolement.',
      'Orienter ophtalmologie ; adapter éclairage domicile.'
    ],
    criteres_normaux: [
      'Acuité corrigeable permettant lecture ordonnances et déplacement sécurisé.',
      'Pas de baisse brutale récente.',
      'Pas de douleur oculaire ni halo lumineux aigu.',
      'Lunettes à jour (< 2 ans si symptômes).'
    ],
    criteres_pathologiques: [
      'Acuité < 3/10 malgré correction ou perte récente unilatérale.',
      'Glaucome aigu : œil rouge, midriase, nausées.',
      'DMLA : métamorphopsie, tache centrale.',
      'Cataracte bilatérale sévère limitant AVQ → indication chirurgicale si bénéfice.',
      'Rétinopathie diabétique proliferante (avis spécialisé).'
    ],
    pieges: [
      'Tester sans les lunettes du patient (sous-estimer capacité réelle).',
      'Autoriser conduite sur seule déclaration sans test pratique si démence/chutes.',
      'Oublier que baisse vision majore risque chute et confusion (mauvaise lecture heure).',
      'Négliger sécheresse oculaire douloureuse (traitement simple).'
    ]
  },
  {
    id: 'tex-11',
    technique: 'Évaluation auditive',
    indication: 'Isolement, confusion, refus aides, dyscompréhension consignes, dépistage avant tests cognitifs, acouphènes, vertiges.',
    materiel: 'Audiomètre de dépistage si disponible, test chuchoté/murmure structuré, appareils du patient, otoscope si formation.',
    etapes: [
      'Vérifier port des appareils auditifs (piles, propreté).',
      'Test conversationnel à 1 m ; répétition mots isolés chuchotés (chaque oreille).',
      'Otoscopie si possible : cérumen, perforation, infection.',
      'Interroger : acouphènes, vertige, traumatisme sonore, ototoxicité (aminosides).',
      'Impact cognitif et social ; adapter communication (face à face, lumière).',
      'Orienter audiologie si baisse confirmée ; entretien appareillage.'
    ],
    criteres_normaux: [
      'Comprhension consignes normales avec voix conversationnelle.',
      'Appareils fonctionnels si prescrits.',
      'Pas d\'otite aiguë ni cérumen obstructif.',
      'Pas de baisse brutale unilatérale.'
    ],
    criteres_pathologiques: [
      'Surdité dépistée non compensée → rééducation et appareillage.',
      'Baisse brutale unilatérale → urgence ORL (névrite, schwannome).',
      'Otite moyenne aiguë ou suppuration.',
      'Cérumen impactant : lavage ou dissociation.',
      'Surdité centrale suspecte si déficit disproportionné (imagerie si indication).'
    ],
    pieges: [
      'Réaliser MMS sans corriger déficit auditif (faux déficit cognition).',
      'Parler dos au patient ou masque (surtout COVID habits).',
      'Oublier maintenance appareils (cause n°1 d\'abandon).',
      'Attribuer à « vieillesse » une surdité traitable.'
    ]
  },
  {
    id: 'tex-12',
    technique: 'Évaluation mictionnelle',
    indication: 'Incontinence, infections urinaires récidivantes, confusion, chutes nocturnes, rétention, insuffisance rénale, iatrogénie diurétiques.',
    materiel: 'Bandelette urinaire, récipient, pesée post-void si rétention suspectée, fiche antécédents urologiques, DFG récent.',
    etapes: [
      'Mode : continent, fuites (effort/urgence/mixte), nycturie, dysurie, hématurie.',
      'Fréquence, volume, mobilisation nocturne (risque chute).',
      'Palpation sus-pubienne : globe vésical ; toucher rectal si rétention/hyperplasie (selon formation).',
      'Bandelette urinaire si symptômes (nitrites, leucocytes) — interpréter selon contexte asymptomatique.',
      'Médicaments : diurétiques, anticholinergiques, alpha-bloquants ; hydratation.',
      'Cathéter, sonde : indication, date changement, encéphalopathie urinaire.'
    ],
    criteres_normaux: [
      'Mictions confortables, pas de rétention clinique.',
      'Nycturie ≤ 2 sans impact chutes.',
      'Pas d\'IU symptomatique non traitée.',
      'Bandelette négative ou traitement en cours si bactériurie asymptomatique EHPAD (ne pas traiter systématiquement).'
    ],
    criteres_pathologiques: [
      'Globe vésical ou résidu important → rétention (sonde, alpha-bloquant).',
      'IU nouvelle + confusion aiguë → infection, fécalome, médicament.',
      'Hématurie macroscopique, anurie, fièvre → urgence.',
      'Encéphalopathie urinaire (obstacle + infection chez homme âgé).',
      'Incontinence par impériosités sous anticholinergique paradoxal.'
    ],
    pieges: [
      'Traiter toute bactériurie asymptomatique (résistance, pas de bénéfice).',
      'Oublier constipation comme cause d\'IU (réflexe vésical).',
      'Limiter hydratation pour « éviter fuites » (délirium, infection).',
      'Ne pas réviser anticholinergiques avant pose sonde longue durée.'
    ]
  },
  {
    id: 'tex-13',
    technique: 'Évaluation digestive',
    indication: 'Douleur abdominale, constipation, diarrhée, nausées, dénutrition, hémorragie digestive, iatrogénie opioïdes/fer.',
    materiel: 'Stéthoscope, gants, thermomètre, balance, fiche transit, toucher rectal si indication et consentement.',
    etapes: [
      'Interrogatoire : transit (Bristol), douleur, vomissements, rectorragies/méléna, perte poids.',
      'Inspection abdomen : distension, cicatrices, hernies, péristaltisme visible.',
      'Auscultation : bruits hydro-aériques ; palpation légère puis profonde, défense, masse.',
      'Recherche fécalome (sujet âgé, immobilisé) ; toucher rectal si suspicion retenue/saignement bas.',
      'Médicaments : opioïdes, anticholinergiques, fer, AINS.',
      'Signes alarme : abdomen chirurgical, choc, hémorragie.'
    ],
    criteres_normaux: [
      'Abdomen souple, non douloureux, transit régulier adapté au patient.',
      'Pas de rectorragie ni méléna.',
      'Constipation occasionnelle répondant aux mesures hygiéno-diététiques.',
      'Pas de défense ni contracture.'
    ],
    criteres_pathologiques: [
      'Abdomen aigu chirurgical : défense, contracture, vomissements bilieux.',
      'Méléna, rectorragies, hémorragie occulte (anémie) → endoscopie.',
      'Constipation sévère + confusion → fécalome, impactation.',
      'Diarrhée avec fièvre et toxicité → C. difficile post-antibiotique.',
      'Ascite tense, masse palpable → imagerie spécialisée.'
    ],
    pieges: [
      'Sous-estimer douleur abdominale chez sujet âgé (tableau fruste).',
      'Laxatifs en cascade sans retrait cause (opioïdes).',
      'Confondre iléus médicamenteux et occlusion.',
      'Toucher rectal omis devant rectorragie (hémorroïdes ≠ exclusion cancer).'
    ]
  },
  {
    id: 'tex-14',
    technique: 'Évaluation respiratoire',
    indication: 'Dyspnée, toux, BPCO, asthme tardif, insuffisance cardiaque, déconditionnement, suspicion pneumonie ou embolie.',
    materiel: 'Stéthoscope, SpO2, peak flow si asthme, FR chronomètre, accessoires O2 du patient.',
    etapes: [
      'Interrogatoire : dyspnée de repos vs effort, orthopnée, toux productive, expectoration (purulence, hémoptysie).',
      'Inspection : tirage, cyanose, toux, utilisation muscles accessoires, oedèmes (IC).',
      'FR, SpO2 repos ; SpO2 après marche 30 m ou lever si possible.',
      'Auscultation complète (voir technique pulmonaire).',
      'Capacité fonctionnelle : distance parcourue, incapacité monter escalier.',
      'Traitements inhalés : technique, observance ; vaccins grippe/pneumocoque.'
    ],
    criteres_normaux: [
      'FR 12–20, SpO2 cible atteinte (≥ 94 % ou cible BPCO 88–92 % si hypercapnie connue).',
      'Pas de dyspnée de repos.',
      'Murmure vésiculaire sans broncospasme majeur.',
      'Toux non productive purulente persistante.'
    ],
    criteres_pathologiques: [
      'SpO2 < cible ou chute à l\'effort minimal.',
      'Dyspnée de repos, orthopnée, crépitants → décompensation IC ou pneumonie.',
      'Sibilants diffus non contrôlés → exacerbation BPCO/asthme.',
      'Hémoptysie, douleur pleurale aiguë, tachycardie → embolie/pneumothorax.',
      'Retentissement confusion (hypoxie/hypercapnie).'
    ],
    pieges: [
      'Se fier à l\'absence de fièvre pour exclure pneumonie chez le très âgé.',
      'Oublier surcharge hydrique comme cause de dyspnée (IC).',
      'Mauvaise technique inhalateur (efficacité nulle).',
      'Ne pas adapter cible SpO2 en BPCO chronique hypercapnique.'
    ]
  },
  {
    id: 'tex-15',
    technique: 'Évaluation cardiaque',
    indication: 'HTA, IC, valvulopathie, arythmie, oedèmes, dyspnée, antécédent coronarien ; bilan global avant intervention ou adaptation traitement.',
    materiel: 'Tensiomètre, stéthoscope, balance (poids), mètre tour de taille, ECG si disponible, horloge.',
    etapes: [
      'Symptômes : dyspnée, orthopnée, PND, douleur thoracique, syncope, palpitations, oedèmes.',
      'Constantes : PA bras (×2), FC, poids du jour vs habituel (gain > 2 kg → surcharge).',
      'Inspection : dyspnée, jugulaires turgescentes, hépatomégalie congestive, oedèmes MI.',
      'Palpation : ICT, pouls (irrégulier, filant), foie, chevilles.',
      'Auscultation cardiaque et pulmonaire (souffles, crépitants).',
      'PA orthostatique si chutes ; revue traitements (IEC, diurétique, anticoagulant).'
    ],
    criteres_normaux: [
      'PA contrôlée selon objectifs individualisés (souvent < 140/90, plus bas si toléré).',
      'Pas d\'oedème, pas de crépitants de surcharge.',
      'Poids stable ; pouls palpable régulier ou FA connue stable.',
      'Pas de symptômes d\'IC active.'
    ],
    criteres_pathologiques: [
      'Signes congestifs : crépitants, OMI, JVP élevée, prise de poids rapide.',
      'Souffle nouveau ou aggravé, syncope à l\'effort (sténose aortique).',
      'Douleur thoracique, ECG ischémique → protocole ACS.',
      'FA non anticoagulée avec CHA2DS2-VASc élevé.',
      'Hypotension orthostatique sous triple thérapie.'
    ],
    pieges: [
      'HTA mesurée une seule fois en consultation stressée (sur-traitement).',
      'Confondre oedème veineux et lymphoedème ou lymphatique.',
      'Oublier iatrogénie : arrêt brutal bêta-bloquant, surdosage digoxine (nausées, arythmie).',
      'Négliger anémie comme aggravant IC (tachycardie, dyspnée).'
    ]
  }
];
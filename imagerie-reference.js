// Référence imagerie — Indications, lecture et pièges chez le sujet âgé
const IMAGERIE_REF = [
  {
    id: 'img-1',
    examen: 'Radiographie thoracique (Rx thorax)',
    indication: 'Dyspnée, toux, fièvre, suspicion pneumonie/OAP/EP, état confusionnel (infection pulmonaire), surveillance tuberculose latente, avant chirurgie, évaluation cardiomégalie ou épanchement pleural chez le sujet âgé polymorbide.',
    technique: 'Face (PA de préférence) ± profil si mobilité compatible ; incidence assise ou semi-assise si décubitus prolongé. Inspiration profonde si possible ; sinon mentionner qualité technique limitée. Dose faible mais cumul possible si examens répétés.',
    resultats_normaux: 'Champs pulmonaires symétriques sans opacité focale ou diffuse. Silhouette cardiaque < 50 % du diamètre thoracique (approximation). Médiastin de largeur normale. Coupoles diaphragmatiques nettes, angles costo-diaphragmatiques libres. Pas d\'épanchement pleural. Os visibles sans lésion aiguë évidente (dégénérescences fréquentes).',
    resultats_pathologiques: 'Pneumonie : condensation alvéolaire focale, bronchogramme aérien, parfois atypique (interstitielle) chez le très âgé. OAP : redistribution vasculaire, lignes de Kerley, cardiomegalie, épanchements bilatéraux, parfois prédominance droite. Épanchement pleural : ligne de Damoiseau, comblement des sinus. Pneumothorax : ligne pleurale viscérale, absence de trame pulmonaire périphérique. Tuberculose : cavité, infiltrats apicaux, adénopathies médiastinales calcifiées. Masse ou nodule : opacité ronde, spiculée ou non ; comparer aux antérieures. Fracture côte : ligne de fracture, hématome sous-cutané.',
    pieges: '« Rx normale » n\'exclut pas pneumonie chez le sujet âgé (début frustre, déshydratation, immunosénescence). Confondre OAP avec pneumonie : contexte clinique (BNP, auscultation, diurétiques). Cardiomégalie chronique vs aiguë. Opacités de stase ou d\'atélectasie en alité prolongé. Artefacts de position (rotation, inspiration insuffisante) mimant infiltrat. Ne pas sous-estimer l\'EP : Rx souvent normale ; ne pas retarder scanner/angio-CT si probabilité clinique élevée. Cumul irradiation si Rx répétées en EHPAD.'
  },
  {
    id: 'img-2',
    examen: 'Abdomen sans préparation (ASP)',
    indication: 'Douleur abdominale aiguë, suspicion occlusion, perforation, lithiase compliquée, constipation fécale importante, iléus, pneumopéritoine, suivi transit chez patient à risque (antécédent chirurgical, hernie).',
    technique: 'Debout si possible (visualisation des niveaux hydro-aériques et du pneumopéritoine) ; sinon décubitus. Incidence face ; parfois profil ou clichés complémentaires selon centre. Qualité souvent limitée chez patient alité ou cognitif.',
    resultats_normaux: 'Gaz digestif distribué de façon habituelle sans niveau hydro-aérique pathologique. Pas de pneumopéritoine libre. Pas de calcification pathologique évidente (vésicule, rein, artères). Cadre colique avec résidu fécal modéré acceptable chez l\'âgé.',
    resultats_pathologiques: 'Occlusion : niveaux hydro-aériques multiples, distension des anses, absence de gaz au rectum. Perforation : pneumopéritoine (sous diaphragme en debout). Constipation fécale : mégacôlon de résidu, impaction rectale. Iléus paralytique : distension diffuse, peu de niveaux. Lithiase : calcifications en projection vésiculaire ou des voies urinaires. Corps étranger radio-opaque. Aérocolie importante (médicaments, pathologie).',
    pieges: 'ASP peu sensible pour appendicite, cholécystite, pancréatite : ne pas se rassurer sur un ASP « normal ». Chez le sujet âgé, douleur abdominale peut être pauvre en signes ; imagerie complémentaire (écho, scanner) souvent nécessaire. Confondre résidu fécal chronique et occlusion. Pneumopéritoine masqué si cliché en décubitus uniquement. Moins d\'indications qu\'autrefois : TDM/écho souvent préférés si disponibles et patient stable.'
  },
  {
    id: 'img-3',
    examen: 'Radiographie de la colonne vertébrale',
    indication: 'Douleur rachidienne aiguë ou chronique, suspicion fracture vertébrale (ostéoporose, chute), déformation cyphose, suivi spondylarthrite, recherche de lyse ou instabilité, avant infiltration ou chirurgie, lombalgie avec red flags modérés.',
    technique: 'Incidences selon segment : cervicale (face, profil, parfois obliques), dorsale, lombaire (face, profil). Patient debout ou assis ; immobilisation si fracture suspectée. Flexion-extension seulement si absence de fracture instable et avis spécialisé.',
    resultats_normaux: 'Alignement respecté dans le plan frontal et sagittal. Hauteurs corporelles vertébrales conservées. Interlignes discaux de hauteur modérément diminuée possible (discarthrose). Ostéophytes et sclérose plateaux = vieillissement banal. Pas de fracture récente (pas d\'effondrement aigu, pas de trait de fracture cortical).',
    resultats_pathologiques: 'Fracture ostéoporotique : tassement corporel (coin antérieur = compression, plat ou biconcave), douleur localisée. Fracture maligne : effondrement avec atteinte du mur postérieur, masse des parties molles. Spondylodiscite : pincement discal, destruction plateaux, géode. Métastase osseuse : lésion lytique ou blastic focale. Instabilité dégénérative ou rhumatismale. Scoliose, cyphose structurée.',
    pieges: 'Fracture vertébrale peut être peu douloureuse ou masquée par cognitif/delirium post-chute. Rx normale n\'exclut pas fracture : IRM ou TDM si forte suspicion clinique. Distinguer tassement ancien (ligne de condensation) vs récent (œdème à l\'IRM). Ne pas sur-interpréter discarthrose comme cause unique de douleur. Radiation cumulative si Rx répétées : privilégier IRM lombaire si indication neurologique.'
  },
  {
    id: 'img-4',
    examen: 'Tomodensitométrie cérébrale (TDM / scanner cérébral)',
    indication: 'AVC aigu (exclusion hémorragie, thrombolyse/thrombectomie), traumatisme crânien, confusion aiguë avec signes focaux ou chute, céphalées brutales, convulsions nouvelles, suspicion hémorragie sous-dural chronique, bilan rapide avant IRM si contre-indication.',
    technique: 'Sans injection en urgence neurologique ; avec injection si suspicion tumeur, abcès, vascularite. Coupes axiales fines ; protocoles perfusion/angio-CT selon filière AVC. Sédation courte possible si agitation majeure (balance bénéfice/risque).',
    resultats_normaux: 'Symétrie des hémisphères. Différenciation substance grise/blanche conservée. Ventricules de taille adaptée à l\'atrophie d\'âge. Pas d\'hyperdensité hémorragique ni d\'hypodensité territoriale aiguë. Pas d\'effet de masse ni déviation de la ligne médiane. Citerne de la base libres.',
    resultats_pathologiques: 'Hémorragie intracérébrale ou sous-arachnoïdienne : hyperdensité spontanée. AVC ischémique précoce : hypodensité territoriale, perte de différenciation insulaire, signe de l\'artère hyperdense. HSD aigu ou chronique : collection extra-axiale en croissant ou demi-lune, effet de masse. Hydrocéphalie aiguë ou chronique. Tumeur, abcès, métastases : prise de contraste, œdème péri-lésionnel. Leucoaraïose : hypodensités péri-ventriculaires (Fazekas). Atrophie diffuse ou hippocampique.',
    pieges: 'Scanner normal dans les premières heures d\'AVC ischémique fréquent : ne pas exclure AVC si clinique évocateur (IRM diffusion). Confondre atrophie et hydrocéphalie normotensive (évolution, marche, incontinence). HSD chronique sous anticoagulant/antiagrégant : symptômes fluctuants, confusion. Exposition aux rayons ; répétition si suivi traumatique. Produit iodé et fonction rénale (DFG) chez le sujet âgé IRC.'
  },
  {
    id: 'img-5',
    examen: 'IRM cérébrale',
    indication: 'Bilan cognitif (atrophie hippocampique, leucoaraïose), AVC ischémique hyperaigu (diffusion), épilepsie, suspicion tumeur/prion/maladie démyélinisante, parkinsonisme atypique, hydrocéphalie à pression normale, complément du scanner en confusion prolongée.',
    technique: 'Séquences T1, T2, FLAIR, diffusion, T2* (hémorragie), parfois injection gadolinium. Durée 20–40 min : adapter si claustrophobie, agitation (accompagnement, anxiolyse légère). Contre-indications : pacemaker non compatible, certains implants ; vérifier DFG avant gadolinium (néphrogénique systémique).',
    resultats_normaux: 'Atrophie cortico-sous-corticale légère à modérée compatible avec l\'âge. FLAIR : quelques points hyperintenses péri-ventriculaires (leucoaraïose grade 1–2). Hippocampes symétriques sans atrophie majeure disproportionnée. Pas de restriction diffusion aiguë. Pas de prise de contraste pathologique.',
    resultats_pathologiques: 'Maladie d\'Alzheimer : atrophie hippocampo-mésiale bilatérale, atrophie temporopariétale. Leucoaraïose sévère (Fazekas 3) : risque vasculaire et déclin. AVC récent : restriction diffusion, ADC bas. Microbleeds : hypointensités T2* (amyloïde, HTA). HPN : élargissement ventriculaire disproportionné, hyperintensité péri-ventriculaire. Tumeur, métastase, abcès : masse, prise de contraste, œdème. Encéphalopathie hypertensive, PRES. Maladie à corps de Lewy : atrophie modérée, parfois signes vasculaires associés.',
    pieges: 'Atrophie seule ne date pas la maladie : corréler au mode de début (aigu vs progressif). Leucoaraïose banale vs démence vasculaire : profil cognitif et infarctus silencieux. IRM longue et anxiogène : refus ou mouvements chez le sujet âgé confus. Gadolinium : éviter si DFG < 30 sans nécessité absolue. Ne pas retarder traitement AVC pour IRM si scanner et filière thrombolyse en cours.'
  },
  {
    id: 'img-6',
    examen: 'Échographie abdominale',
    indication: 'Douleur ou masse abdominale, cholestase, cytolyse, suspicion lithiase biliaire ou rénale, anomalie de l\'ASP, ascite, suivi anévrisme aorte abdominal, polype rein/vésicule, dénutrition avec bilan hépatique.',
    technique: 'Coupe transcutanée à jeun pour vésicule biliaire si possible ; vessie pleine pour prostate/utérus si besoin. Doppler portal et des artères rénales si indication. Patient alité acceptable ; gel, position antalgique. Sans irradiation.',
    resultats_normaux: 'Foie homogène, contours réguliers, pas de dilatation des voies biliaires. Vésicule fine paroi, pas de lithiase ni de Murphy échographique. Rate, pancréas visualisés dans la limite de la fenêtre. Reins de taille conservée (parfois réduction physiologique avec l\'âge), pas de dilatation pyélocalicielle. Aorte < 3 cm de diamètre. Pas d\'épanchement intrapéritonéal significatif.',
    resultats_pathologiques: 'Lithiase vésiculaire, cholécystite : paroi épaissie, Murphy+, lithiases. Dilatation VB : obstacle lithiasique ou tumeur. Steatose, cirrhose, nodule hépatique. Ascite. Anévrisme aorte > 3 cm ou croissance. Lithiase rénale, hydronephrose. Rein petit et échogène (néphropathie chronique). Masse ovarienne ou prostatique indirecte. Appendice épaissi si étude ciblée.',
    pieges: 'Échographie opérateur-dépendante ; résultat « non contributif » fréquent (obésité, gaz, alité). Cholécystite chez le sujet âgé peut manquer de fièvre et de Murphy ; ne pas exclure sur écho initiale normale seule. Confondre steatose et lésion focale : contraste ou IRM si doute. Vessie vide : prostate mal évaluée. Compléter par scanner si abdomen aigu non élucidé chez patient fragile.'
  },
  {
    id: 'img-7',
    examen: 'Échographie cardiaque (échocardiographie transthoracique)',
    indication: 'Dyspnée, OAP, souffle nouveau, syncope, embolie pulmonaire suspectée (dysfonction VD), surveillance valvulopathie, IC décompensée, avant amiodarone/chimiothérapie, bilan pré-thérapeutique (TAVI, chirurgie).',
    technique: 'Transthoracique (TTE) en première intention ; transœsophagienne (ETO) si valve prothèse, endocardite, source embolique, fenêtre transthoracique mauvaise. Doppler couleur et continu. Indice de masse corporelle et emphysème limitent parfois les fenêtres.',
    resultats_normaux: 'FEVG visuelle ou biplan > 50–55 %. Cavités de taille normale. Pas de valvulopathie significative (sténose aortique légère fréquente après 75 ans). Pas d\'épanchement péricardique. PAPS estimée normale si TR légère permet mesure. Diastole : profil de remplissage adapté à l\'âge (dysfonction diastolique grade I fréquente).',
    resultats_pathologiques: 'IC systolique : FEVG réduite, hypokinésie segmentaire ou globale. IC diastolique : FEVG préservée, hypertrophie VG, E/e\' élevé. Sténose aortique sévère : Vmax > 4 m/s, gradient moyen > 40 mmHg, surface réduite. IM ou IT significative. HVG, dilatation auriculaire (FA). Thrombus intra-auriculaire. EP aiguë : dilatation VD, hypokinésie VD, signe McConnell. Endocardite : végétation, abcès. Épanchement péricardique avec tamponnade.',
    pieges: 'FEVG « préservée » ne signifie pas absence d\'IC chez le sujet âgé (IC à FEVG préservée fréquente). Sous-estimer sténose aortique calcifiée : flux bas si FEVG basse (faussement légère) ; dobutamine ou TDM si doute. FA permanente : mal évaluer fonction diastolique. ETO invasive : balance risque/bénéfice (sedation, fausse route) chez le très fragile. Confondre emphysème et IC par mauvaise fenêtre.'
  },
  {
    id: 'img-8',
    examen: 'Écho-Doppler des troncs supra-aortiques (carotides)',
    indication: 'AIT, AVC ischémique, souffle carotidien, sténose connue en surveillance, bilan pré-chirurgie cardiaque majeure, suspicion de sténose hémodynamiquement significative avant revascularisation.',
    technique: 'B-mode et Doppler couleur des carotides communes, internes et externes bilatéralement ; mesure des vitesses systoliques de pointe (VPS) et end-diastoliques. Indice de sténose selon critères locaux (NASCET, ECST). Pas d\'irradiation.',
    resultats_normaux: 'Parois régulières ou plaque fine non sténosante. VPS carotide interne < 125 cm/s. Pas de sténose hémodynamiquement significative. Vertébrales antérogrades. Pas de dissection ni d\'hématome visible.',
    resultats_pathologiques: 'Plaque athéromateuse calcifiée ou mixte. Sténose modérée (50–69 %) ou sévère (≥ 70 % NASCET) : VPS élevées, turbulences, augmentation du ratio ICA/CCA. Occlusion carotide : absence de flux endoluminal. Dissection : double lumière, hématome mural. Sténose symptomatique récente : plaque instable, émboles possibles.',
    pieges: 'Sténose asymptomatique : indication de revascularisation stricte chez le très âgé (espérance de vie, comorbidités). Confondre calcification et sténose sévère : angles Doppler et critères qualitatifs. Contre-indication relative si intervention marginale chez patient déjà anticoagulé pour FA (risque embolique plaque vs traitement médical). Réévaluer si asymétrie clinique et Doppler « normal » (TSA distale non vue).'
  },
  {
    id: 'img-9',
    examen: 'Écho-Doppler des membres inférieurs (artériel et veineux)',
    indication: 'Claudication, ischémie aiguë (membre froid, douleur), ulcère des MI, gangrène, œdème unilatéral (TVP), suspicion phlébite, surveillance bypass ou stent, avant pansement complexe ou amputation.',
    technique: 'Artériel : pressions systoliques (index de pression systolique IPS), courbes de flux, recherche sténose. Veineux : compression des veines, recherche thrombus, reflux si insuffisance veineuse. Comparatif bilatéral. TcPO2 ou autres examens si artériopathie sévère.',
    resultats_normaux: 'Flux artériel triphasique aux artères distales. IPS ≥ 0,9 (parfois 0,85–0,89 limite chez diabétique artérioscléreux avec artères calcifiées non compressibles). Veines compressibles, pas de thrombus. Pas de reflux pathologique significatif si étude veineuse superficielle.',
    resultats_pathologiques: 'Artériopathie : sténose, occlusion, flux monophasique, IPS < 0,9 (< 0,4 ischémie critique). TVP : veine non compressible, matériel hypoéchogène intraluminal. Ischémie aiguë : absence de flux, embol ou thrombose. Anévrisme poplité. Insuffisance veineuse chronique : reflux, dilatation veineuse.',
    pieges: 'Artères calcifiées (diabète, âge) : faux IPS élevés (pseudonormalisation) ; s\'appuyer sur courbes et clinique. TVP chez le sujet alité : probabilité pré-test élevée ; Doppler négatif utile mais répéter si suspicion forte. Confondre lymphœdème et TVP. Ne pas retarder avis chirurgical si ischémie aiguë même si écho en attente. Compression douloureuse : adapter technique chez ulcère ou SDRA.'
  },
  {
    id: 'img-10',
    examen: 'Ostéodensitométrie (DEXA / DXA)',
    indication: 'Dépistage ostéoporose (femme ≥ 65 ans, homme ≥ 70 ans ou facteurs de risque), fracture à faible énergie, corticothérapie prolongée, hyperparathyroïdie, suivi sous bisphosphonates ou anabolisant, évaluation risque fracturaire avec FRAX.',
    technique: 'Mesure absorptiométrique biphotonique : colonne lombaire L1–L4 et hanche (col fémoral). Résultat en T-score (comparaison jeune adulte) et Z-score (pair âge). Positionnement standardisé ; artefacts si prothèses, calcifications aortiques, tassements vertébrales.',
    resultats_normaux: 'T-score ≥ -1,0 : masse minérale normale. Z-score > -2,0 : dans la norme pour l\'âge (interprétation secondaire). Pas de discordance majeure entre sites.',
    resultats_pathologiques: 'Ostéopénie : T-score entre -1,0 et -2,5. Ostéoporose : T-score ≤ -2,5. Ostéoporose sévère : T-score ≤ -2,5 + fracture fragilité. Discordance hanche vs rachis : privilégier le site le plus bas pour traitement sauf fracture vertébrale récente au rachis.',
    pieges: 'Tassements vertébraux anciens faussent le T-score rachidien (faux rassurant ou faux pathologique) : privilégier hanche si artefact. Ne pas traiter sur T-score seul : intégrer FRAX, antécédent fracture, corticoïdes. Répéter DEXA trop tôt (< 2 ans) sous traitement stable sauf indication précise. Z-score bas chez le jeune pathologique ; chez le très âgé, T-score prime pour décision thérapeutique HAS.'
  },
  {
    id: 'img-11',
    examen: 'Mammographie',
    indication: 'Dépistage organisé (50–74 ans en France, extension possible), masse palpable, écoulement mamelonnaire, lésion cutanée, antécédent personnel/familial, suivi post-cancer, bilan avant chirurgie si âge et contexte.',
    technique: 'Incidences face et oblique bilatérales ; compression adaptée (douloureuse chez l\'âgé : antalgie, position). Dépistage numérique avec double lecture selon programme. Complément écho et IRM si sein dense ou lésion douteuse.',
    resultats_normaux: 'Parenchyme fibroglandulaire involuté fréquent après ménopause. Pas de masse, microcalcifications suspectes, distorsion architecturale ni adénopathie axillaire visible. Classification ACR selon densité (souvent a ou b chez la femme âgée).',
    resultats_pathologiques: 'Masse spiculée ou microlobulée. Microcalcifications groupées amorphes ou linéaires. Asymétrie focale persistante. Adénopathie axillaire. Carcinome : stade selon imagerie et anatomopathologie. Récidive en champ mammaire conservateur.',
    pieges: 'Involution mammaire facilite parfois la détection mais cancers peu symptomatiques chez la femme très âgée : ne pas arrêter le dépistage sans discussion (comorbidités, espérance de vie). Confondre calcifications vasculaires et microcalcifications suspectes. Douleur à la compression : risque de refus du patient. Limiter sur-investigation si lésion probablement bénigne et fragilité extrême (approche personnalisée).'
  },
  {
    id: 'img-12',
    examen: 'Scanner thoracique (TDM thorax)',
    indication: 'EP suspectée (angio-CT), pneumonie compliquée ou atypique, nodule ou masse pulmonaire, cancer bronchique, traumatisme thoracique, infection opportuniste, bilan extension lymph nodes, avant biopsie guidée.',
    technique: 'Sans contraste : nodule, emphysème, certaines pneumonies. Avec injection : angio-CT pour EP (protocole spécifique), masses, abcès. Respiration bloquée si possible ; sinon artefacts. Produit iodé : hydratation, fonction rénale (DFG), interaction metformine selon protocole local.',
    resultats_normaux: 'Parenchyme sans condensation ni nodule suspect. Artères pulmonaires sans défaut de remplissage. Pas d\'épanchement pleural ou péricardique significatif. Médiastin sans adénopathie pathologique. Aorte thoracique de calibre normal.',
    resultats_pathologiques: 'EP : défaut de remplissage artère segmentaire ou proximale, signes de surcharge VD. Pneumonie : verre dépoli, condensation, abcès. Cancer : masse, spicules, adénopathies, métastases osseuses ou hépatiques si coupes abdominales. COVID ou pneumocyte : patterns en verre dépoli. Emphysème, bronchectasies. Hémothorax, pneumothorax.',
    pieges: 'D-dimères élevés fréquents à l\'âge : ne pas demander angio-CT sans probabilité clinique (score Wells, PERC adapté). Nodule incidental : stratégie Fleischner modulée par comorbidités et espérance de vie. Néphrotoxicité du produit de contraste chez IRC : protocole bas volume ou alternative (V/Q scintigraphie) si EP et DFG bas. Sédation et transfert pour patient confus ou hypoxique.'
  },
  {
    id: 'img-13',
    examen: 'TEP-TDM au 18F-FDG (PET-Scan)',
    indication: 'Staging et réévaluation cancer (poumon, lymphome, mélanome, etc.), recherche de foyer infectieux ou inflammatoire occulte en cas sélectionné, suspicion récidive tumorale, parfois bilan cognitif (amyloïde avec traceur spécifique = examen distinct).',
    technique: 'Jeûne 4–6 h, glycémie contrôlée (diabète : risque de faux négatifs si hyperglycémie). Injection FDG, attente 60 min, acquisition corps entier. Fusion TEP + TDM faible dose. Patient doit rester immobile et chaud (éviter contraction musculaire). Durée et claustrophobie : problème chez certains sujets âgés.',
    resultats_normaux: 'Fixation physiologique : cerveau, myocarde variable, foie, rate, rein, vessie, muscles récents, médiastin modéré. Pas de foyer hypermétabolique inexpliqué.',
    resultats_pathologiques: 'Tumeur : hyperfixation focale avec morphologie TDM associée. Métastases ganglionnaires et à distance. Lymphome : adénopathies hypermétaboliques. Infection/inflammation : hyperfixation non spécifique (pneumonie, prothèse infectée). Sarcoidose, vascularite : patterns variés.',
    pieges: 'Hyperfixation non spécifique chez le sujet âgé (arthrose, infection latente, cérébral physiologique) : corréler anatomie et clinique. Diabète mal équilibré : faux négatifs tumoraux. Corticoïdes et inflammation modifient l\'uptake. Indication limitée si espérance de vie très courte ou traitement non modifiable. Irradiation et coût : examen de deuxième ligne sauf filière oncologique/lymphome établie.'
  },
  {
    id: 'img-14',
    examen: 'Scintigraphie osseuse (corps entier)',
    indication: 'Recherche métastases osseuses (cancer prostate, sein, poumon, etc.), localisation douleur osseuse multifocale, fracture occulte, ostéomyélite, prothèse douloureuse, maladie de Paget, suivi certaines pathologies osseuses.',
    technique: 'Injection technétium-99m phosphonates ; imagerie 2–4 h après injection. Coupes corps entier antérieures et postérieures ; SPECT/CT si disponible. Hydratation, éviction proximité grossesse. Faible irradiation mais délai long (journée).',
    resultats_normaux: 'Fixation homogène sur squelette axial et périphérique sans foyer pathologique focal. Rein et vessie visibles (élimination). Variante : uptake articulations arthrosiques modéré.',
    resultats_pathologiques: 'Métastases : foyers multiples en « points chauds » rachis, ceintures, crâne. Ostéomyélite : hyperfixation focale avec SPECT/CT. Fracture récente : hyperfixation linéaire. Paget : uptake diffus segmentaire. Prothèse infectée ou descellement : hyperfixation péri-prothétique.',
    pieges: 'Arthrose et remaniements post-traumatiques : faux positifs fréquents chez le sujet âgé ; SPECT/CT ou IRM pour caractériser. Métastases ostéolytiques pures (myélome) parfois peu visibles : IRM plus sensible. Examen long et isolement : organisation chez patient cognitif. Ne pas substituer à bilan de douleur unique sans indication oncologique ou traumatique claire.'
  },
  {
    id: 'img-15',
    examen: 'Échographie thyroïdienne',
    indication: 'Nodule palpable ou découvert fortuitement, goitre, dysthyroïdie (hyper/hypo), surveillance nodule classé EU-TIRADS, bilan avant ponction (FNA), lymphadénopathie cervicale suspecte.',
    technique: 'Sonde linéaire haute fréquence ; exploration isthme et deux lobes, isthme, parfois loges latérales. Mesures tridimensionnelles des nodules. Pas d\'irradiation. Doppler si hypervascularisation suspecte.',
    resultats_normaux: 'Glande de volume normal ou légèrement réduit avec l\'âge. Échostructure homogène. Pas de nodule dominant ou nodules < 10 mm sans critères de suspicion. Pas d\'adénopathie cervicale pathologique.',
    resultats_pathologiques: 'Nodule hypoéchogène, contours irréguliers, microcalcifications, taller-than-wide, vascularisation centrale : suspicion malignité (EU-TIRADS). Goitre multinodulaire bénin fréquent. Thyroïdite : glande hétérogène, hypervascularisée. Kyste colloïde : anéchogène, renforcement postérieur. Métastase ou lymphome cervical rare.',
    pieges: 'Nodules très fréquents après 65 ans : ne pas sur-biopsier sans critères EU-TIRADS élevés (majorité bénignes). Confondre rétrécissement involutif et atrophie pathologique. Hyperthyroïdie du sujet âgé apathetique : écho peut être normale ; TSH et hormones libres prioritaires. Ponction inutile sur nodule < 5 mm sauf exception. Anticoagulants : balance risque hématome vs retard diagnostic cancer.'
  }
];
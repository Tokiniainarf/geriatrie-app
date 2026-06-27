// Guides rhumatologie gériatrique — Préparation examens et pratique clinique
const GUIDES_RHUMATOLOGIE = [
  {
    id: 'gr-1',
    titre: 'Arthrose du sujet âgé',
    contenu: 'L\'arthrose est la pathologie articulaire la plus fréquente après 65 ans (genou, hanche, main, rachis).\n\nCLINIQUE :\n- Douleur mécanique (aggravée effort, soulagée repos), raideur brève matinale (< 30 min).\n- Genou : dérobement, épanchement ; hanche : douleur aine irradiant cuisse.\n- Main : rhizarthrose, nodules Heberden.\n\nDIAGNOSTIC :\n- Clinique + radiographie : pincement, ostéophytes, géodes.\n- Pas de synovite majeure (différencier polyarthrite).\n\nTRAITEMENT NON MÉDICAMENTEUX :\n- Activité physique adaptée, perte poids si genou.\n- Kiné, aides canne ; semelles si malalignement.\n- Chaleur locale, TENS.\n\nMÉDICAMENTEUX :\n- Paracétamol 1re ligne ; AINS topiques.\n- AINS systémiques : courte durée, IPP si risque digestif, éviter si IRC/IC.\n- Infiltration corticoïde ou acide hyaluronique genou (épisodes).\n\nCHIRURGIE :\n- Prothèse genou/hanche si douleur réfractaire et autonomie préservable ; évaluation gériatrique pré-op.\n\nDOULEUR CHRONIQUE : éviter opioïdes au long cours si possible.',
    points_cles: ['Raideur < 30 min = mécanique', 'Paracétamol + exercice 1re ligne', 'AINS prudence IRC/HTA', 'Prothèse si échec médical']
  },
  {
    id: 'gr-2',
    titre: 'Ostéoporose et fractures de fragilité',
    contenu: 'L\'ostéoporose touche 1 femme sur 3 après ménopause ; fracture hanche = mortalité élevée 1re année.\n\nDÉPISTAGE :\n- DEXA : T-score ≤ -2,5 ou fracture de fragilité.\n- FRAX ou critères : femme ≥ 65 ans, homme ≥ 70 ans, facteurs risque.\n- Vertébroplastie si fracture vertébrale douloureuse récente (cas par cas).\n\nFACTEURS DE RISQUE :\n- Corticoïdes, immobilisation, hypogonadisme, malabsorption, hyperthyroïdie, alcool.\n- Chutes, vitamine D basse, sarcopénie.\n\nTRAITEMENT :\n- Calcium alimentaire prioritaire ; supplément si apports insuffisants (prudence lithiase).\n- Vitamine D : cible 25-OH-D 30–50 ng/mL.\n- Bisphosphonates oraux/IV, dénosumab, tériparatide selon profil.\n- Observance et tolérance digestive ; dentiste avant bisphosphonate IV.\n\nPRÉVENTION CHUTES : vitamine D, exercice, correction vision.\n\nAPRÈS FRACTURE : traitement anti-ostéoporotique systématique ; coordination orthogériatrie.',
    points_cles: ['Fracture = traiter sans attendre DEXA', 'Vitamine D + anti-chutes', 'Bisphosphonates post-fracture', 'FRAX et DEXA ≥ 65 F']
  },
  {
    id: 'gr-3',
    titre: 'Polyarthrite rhumatoïde du sujet âgé',
    contenu: 'La PR peut débuter ou persister à tout âge ; formes séronégatives et pseudopolyarthrite rhizomélique à distinguer.\n\nCLINIQUE :\n- Polyarthrite symétrique petites puis grosses articulations ; raideur matinale > 60 min.\n- Asthénie, amaigrissement ; nodules rhumatoïdes.\n- PR tardive : peut mimer PRP (épaules, hanches).\n\nBIOLOGIE :\n- VS, CRP élevées ; facteur rhumatoïde, anti-CCP.\n- Pas de biologie normale qui exclut PR chez âgé.\n\nIMAGERIE :\n- Érosions mains/pieds ; échographie articulations si doute.\n\nTRAITEMENT :\n- Méthotrexate faible dose (adapter DFG) + acide folique.\n- Biothérapies (anti-TNF, etc.) possibles si comorbidités contrôlées et pas d\'infection active.\n- Corticoïdes faible dose pont ; minimiser durée (ostéoporose, diabète).\n\nGÉRIATRIE :\n- Interactions vaccins vivants atténués ; dépistage tuberculose avant biothérapie.\n- Surveillance infection, zona.',
    points_cles: ['Raideur > 1 h inflammatoire', 'MTX dose selon DFG', 'Distinguer PRP si rhizomélique', 'Vaccins avant biothérapie']
  },
  {
    id: 'gr-4',
    titre: 'Fibromyalgie et douleurs chroniques diffuses',
    contenu: 'La fibromyalgie peut survenir ou persister chez le sujet âgé ; diagnostic souvent retardé ou confondu avec polymyalgie ou arthrose diffuse.\n\nCRITÈRES :\n- Douleur musculosquelettique diffuse > 3 mois, fatigue, sommeil non réparateur, troubles cognitifs (« fibro-brouillard »).\n- Points sensibles moins utilisés ; critères ACR 2016 (index douleur + symptômes).\n\nDIAGNOSTIC DIFFÉRENTIEL :\n- Hypothyroïdie, myopathie, PR, PRP, déficit vitamine D.\n\nPRISE EN CHARGE :\n- Exercice aérobie progressif (preuve la plus forte).\n- TCC, gestion stress ; pas d\'immobilisation.\n- Duloxétine, prégabaline faible dose ; éviter opioïdes.\n- Éviter sur-investigations répétées.\n\nGÉRIATRIE :\n- Comorbidités sommeil (SAOS), dépression ; traiter en parallèle.\n- Prudence sédation prégabaline (chutes).',
    points_cles: ['Exercice = traitement principal', 'Écarter PRP et hypothyroïdie', 'Pas d\'opioïdes chroniques', 'Sommeil et dépression associés']
  },
  {
    id: 'gr-5',
    titre: 'Goutte et hyperuricémie',
    contenu: 'La goutte touche 5–10 % des hommes > 70 ans ; femme post-ménopause ; polymédication influence uricémie.\n\nCRIS AIGU :\n- Monoarthrite brutale, genou ou 1er MTT, rouge, chaud ; fièvre possible.\n- Diagnostic : cristaux urate au liquide articulaire si doute (septic arthritis).\n\nTRAITEMENT CRISE :\n- Colchicine faible dose (attention DFG, interactions macrolides).\n- AINS si DFG et digestif OK ; corticoïde oral/intra-articulaire si CI.\n- Éviter débuter allopurinol pendant crise aiguë (sauf indication spéciale).\n\nHYPERURICÉMIE CHRONIQUE :\n- Allopurinol 1re ligne ; dose titration ; objectif uricémie < 360 µmol/L.\n- Febuxostat si intolérance ; prudence cardiovasculaire.\n- Hydratation, réduire alcool, fructose ; éviter diurétiques thiazidiques si possible.\n\nGÉRIATRIE :\n- Tophus fréquents ; atteinte rénale urate.\n- Interactions allopurinol (azathioprine contre-indiqué).',
    points_cles: ['Ponction si fièvre (sepsis)', 'Colchicine dose réduite si IRC', 'Allopurinol après crise stabilisée', 'Pas azathioprine + allopurinol']
  },
  {
    id: 'gr-6',
    titre: 'Chondrocalcinose et pseudogoutte',
    contenu: 'La chondrocalcinose articulaire (dépôts pyrophosphate calcium) augmente avec l\'âge ; pseudogoutte = crises aiguës.\n\nCLINIQUE :\n- Crises aiguës genou, poignet, simulent goutte ou infection.\n- Arthropathie chronique genoux, hanches (arthrose + calcifications).\n\nDIAGNOSTIC :\n- Radiographie : calcifications ménisques, cartilage.\n- Liquide articulaire : cristaux rhomboïdes faiblement biréfringents positifs.\n\nFACTEURS :\n- Hyperparathyroïdie, hémochromatose, hypomagnésémie, hypophosphatasie (bilan si atypie).\n\nTRAITEMENT CRISE :\n- Aspiration + corticoïde intra-articulaire souvent efficace.\n- Colchicine prophylactique faible dose si crises répétées.\n- AINS courte durée.\n\nCHRONIQUE : analgésie, kiné ; pas de traitement spécifique dissoudre calcifications.',
    points_cles: ['Genou aigu = ponction', 'Cristaux CPP vs urate', 'Dépister hyperpara si jeune', 'Corticoïde IA souvent suffisant']
  },
  {
    id: 'gr-7',
    titre: 'Polymyalgie rhumatismale (PRP)',
    contenu: 'La PRP débute typiquement après 50 ans ; douleurs et raideur ceintures scapulaires et pelviennes avec inflammation biologique marquée.\n\nCLINIQUE :\n- Raideur matinale > 45–60 min, douleurs bilatérales épaules/ceinture pelvienne.\n- Difficulté lever lit, rotation épaules ; pas de faiblesse objective majeure (vs myosite).\n- VS et CRP très élevées souvent.\n\nDIAGNOSTIC :\n- Clinique + biologie ; exclure infection, cancer, myélome.\n- Pas de waiting game prolongé si suspicion forte.\n\nTRAITEMENT :\n- Prednisone 12,5–20 mg/j ; réponse rapide en 24–72 h confirme souvent.\n- Réduction lente sur 12–24 mois ; rechutes fréquentes.\n- Calcium, vitamine D, bisphosphonate si corticoïdes prolongés.\n\nARTÉRITE À CELLULES GÉANTES :\n- Surveiller céphalées, claudication mâchoire, amaurose ; corticoïdes immédiats si signes.\n- Biopsie artère temporale selon filière.\n\nGÉRIATRIE : diabète, ostéoporose, infections sous corticoïdes.',
    points_cles: ['VS/CRP élevées + ceintures', 'Réponse rapide prednisone', 'Surveiller ACG', 'Déscente lente corticoïdes']
  },
  {
    id: 'gr-8',
    titre: 'Vascularites et vascularites à ANCA',
    contenu: 'Les vascularites du sujet âgé incluent artérite à cellules géantes, vascularites à ANCA et cryoglobulinémies.\n\nACG (> 50 ans) :\n- Céphalées temporales, hypersensibilité cuir chevelu, claudication mâchoire, amaurose.\n- VS > 50 mm/h souvent ; traitement corticoïdes avant biopsie si forte suspicion.\n\nVASCULARITES ANCA :\n- Granulomatose avec polyangéite, polyangéite microscopique : ORL, poumon, rein.\n- Biopsie et ANCA ; corticoïdes + cyclophosphamide ou rituximab (adaptation âge et DFG).\n\nPOLYARTÉRITE NODOSA : plus rare ; nécrose cutanée, neuropathie, anévrysmes.\n\nGÉRIATRIE :\n- Iatrogénie immunosuppression : infections, zona, PJP prophylaxie si cyclophosphamide + corticoïdes.\n- Suivi ophtalmologique urgent si vision floue sous corticoïdes (ACG).',
    points_cles: ['ACG = corticoïdes urgents', 'VS élevée + céphalée temporale', 'ANCA si rein/poumon', 'Prophylaxie infections si IS']
  },
  {
    id: 'gr-9',
    titre: 'Sarcopénie et fragilité musculaire',
    contenu: 'La sarcopénie = perte masse et force musculaire liée à l\'âge ; facteur majeur chutes, perte autonomie, mortalité.\n\nDÉFINITION OPÉRATIONNELLE :\n- Force de préhension basse (dynamomètre), masse musculaire basse (DEXA, impédance), performance basse (vitesse marche).\n- EWGSOP2 : probable sarcopénie si force basse ; confirmée si + masse basse.\n\nCAUSES CONTRIBUTIVES :\n- Inactivité, dénutrition protéique, inflammation chronique, hormonales, polypharmacie.\n\nÉVALUATION GÉRIATRIQUE :\n- SPPB, TUG, lever chaise 5 fois.\n- MNA, albumine ; vitamine D.\n\nTRAITEMENT :\n- Résistance progressive 2–3/semaine + apports protéiques 1–1,2 g/kg/j si DFG OK.\n- Vitamine D si carence.\n- Traiter causes : hypothyroïdie, BPCO, dépression.\n- Pas de myostimulants routiniers (testostérone réservé déficit documenté).',
    points_cles: ['Préhension + vitesse marche', 'Protéines + résistance', 'Vitamine D si basse', 'Lier à prévention chutes']
  },
  {
    id: 'gr-10',
    titre: 'Lombalgie et douleur rachidienne du sujet âgé',
    contenu: 'La lombalgie commune est fréquente ; chez l\'âgé, rechercher causes graves avant de conclure à l\'arthrose discale.\n\nRED FLAGS :\n- Fièvre, infection, cancer (antécédent, perte poids), fracture (corticothérapie, traumatisme).\n- Déficit neurologique, saddle anesthesia, rétention urinaire (syndrome queue de cheval = IRM urgent).\n- Douleur nocturne constante, âge > 70 avec lombalgie nouvelle.\n\nÉTIOLOGIES FRÉQUENTES :\n- Arthrose facettaire, sténose canal lombaire (claudication neurogène), fracture ostéoporotique vertébrale.\n- Spondylodiscite si fièvre et douleur focalisée.\n\nEXAMEN :\n- Déficit moteur L4/L5/S1, reflexes, signe Lasègue.\n- Marche sur talons/pointes.\n\nTRAITEMENT :\n- Lombalgie commune : activité maintenue, paracétamol, kiné, pas d\'immobilisation prolongée.\n- Sténose : kiné flexion, décompression chirurgicale si déficit progressif.\n- Fracture vertébrale : analgésie, orthèse, traitement ostéoporose ; vertébroplastie si douleur persistante.\n\nAINS et opioïdes : prudence IRC et chutes.',
    points_cles: ['Red flags avant arthrose', 'Queue de cheval = IRM urgent', 'Fracture vertébrale ostéoporotique', 'Rester actif lombalgie commune']
  }
];
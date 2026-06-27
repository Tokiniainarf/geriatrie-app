// Guides pneumologie gériatrique — Préparation examens et pratique clinique
const GUIDES_PNEUMOLOGIE = [
  {
    id: 'gp-1',
    titre: 'BPCO du sujet âgé',
    contenu: 'La BPCO touche surtout les fumeurs longue durée ; après 65 ans, comorbidités cardiaques et fragilité modifient la prise en charge.\n\nDIAGNOSTIC :\n- Dyspnée progressive, toux chronique, expectoration ; exacerbations hivernales.\n- Spirométrie : VEMS/CVF < 0,70 post-bronchodilatateur (référence).\n- Stades GOLD selon VEMS et symptômes (mMRC, CAT).\n\nSPÉCIFICITÉS GÉRIATRIQUES :\n- Dyspnée attribuée à l\'âge ou au cœur ; sous-diagnostic spirométrie.\n- Cachexie, sarcopénie, dénutrition fréquentes.\n- Exacerbations déclenchent délirium et décompensation cardiaque.\n\nTRAITEMENT DE FOND :\n- Arrêt tabac (toutes tranches d\'âge bénéfice).\n- Bronchodilatateurs : LAMA, LABA ; association si symptômes persistants.\n- Corticoïdes inhalés si eosinophiles élevés ou asthme-BPCO overlap.\n- Vaccins grippe, pneumocoque, COVID.\n- Réhabilitation respiratoire (kiné) : améliore dyspnée et qualité de vie même > 80 ans.\n\nEXACERBATION :\n- Augmentation dyspnée, volume/purulence crachats.\n- Antibiotique si purulence ; corticoïde oral court ; O2 si SpO2 < 88–92 % cible.\n- Éviter sédation excessive (CO2 retention).\n\nOXYGÉNOTHÉRAPIE LONGUE DURÉE : si PaO2 ≤ 55 mmHg ou 56–59 avec complications (voir guide O2).',
    points_cles: ['Spirométrie pour confirmer', 'Réhab respiratoire utile à tout âge', 'Exacerbation = délirium possible', 'Vaccins annuels']
  },
  {
    id: 'gp-2',
    titre: 'Pneumopathies infectieuses communautaires',
    contenu: 'La pneumonie communautaire (PAC) est une cause majeure de morbi-mortalité chez le sujet âgé ; présentation souvent atypique.\n\nCLINIQUE ATYPIQUE :\n- Fièvre absente ou faible ; confusion, chutes, décompensation IC seule manifestation.\n- Toux, dyspnée, douleur thoracique moins francs.\n\nÉVALUATION DE GRAVITÉ :\n- CRB-65, PSI/PORT ; critères d\'hospitalisation et réanimation.\n- SpO2, lactates, DFG (adaptation antibiotique).\n- Radiographie thorax ; bilan étiologique si sévère (hémocultures, antigènes urinaires).\n\nTRAITEMENT :\n- Amoxicilline-acide clavulanique ou respiratoire quinolone selon allergies et gravité.\n- Durée 5 jours si bonne évolution (recommandations récentes).\n- O2, hydratation, mobilisation précoce, prévention délirium.\n\nASPIRATION :\n- Fréquente si dysphagie, démence, AVC ; anaérobies + entérobactéries.\n- Position semi-assise, soins bucco-dentaires, revue textures alimentaires.\n\nSUIVI : radiographie contrôle si non-résolution à 6 semaines (cancer, tuberculose).',
    points_cles: ['Confusion = pneumonie jusqu\'à preuve', 'CRB-65 pour lieu de soins', 'Dysphagie = pneumopathie aspiration', 'Adapter ATB au DFG']
  },
  {
    id: 'gp-3',
    titre: 'Embolie pulmonaire chez le sujet âgé',
    contenu: 'L\'EP est plus fréquente avec l\'âge ; le score Wells/PESI doit intégrer comorbidités et fragilité.\n\nFACTEURS DE RISQUE :\n- Immobilisation, fracture hanche, cancer, IC, FA, chirurgie récente.\n- Polymédication anticoagulante (interactions, observance).\n\nCLINIQUE :\n- Dyspnée aiguë ou subaiguë, douleur pleurale, tachycardie, syncope.\n- Hémoptysie rare ; décompensation droite possible.\n\nDIAGNOSTIC :\n- D-dimères : valeur si faible probabilité et < 50 ans souvent ; moins utile si âgé (taux bas plus rares).\n- Angio-scanner thoracique si suspicion forte et fonction rénale compatible.\n- Écho cœur si instabilité (dilatation VD).\n\nTRAITEMENT :\n- Anticoagulation : AOD si DFG ≥ 30 (adapter molécule) ; HBPM ou warfarine si CI.\n- Durée : 3 mois minimum ; prolonger si cancer ou récidive non provoquée.\n- Thrombolyse ou embolectomie si choc ou instabilité hémodynamique (bénéfice/risque hémorragique âgé).\n\nSURVEILLANCE : hémorragie digestive, chutes, association antiagrégants.',
    points_cles: ['Syncope + dyspnée = EP', 'PESI pour mortalité', 'AOD dose selon DFG', 'Cancer = EP récurrente']
  },
  {
    id: 'gp-4',
    titre: 'Syndrome d\'apnées obstructives du sommeil (SAOS)',
    contenu: 'La prévalence du SAOS augmente avec l\'âge et l\'obésité ; lien avec HTA, FA, AVC et troubles cognitifs.\n\nSYMPTÔMES :\n- Ronflement, pauses observées, réveils étouffement, somnolence diurne.\n- Nycturie, céphalées matinales, irritabilité.\n- Chez l\'âgé : somnolence moins typique ; plainte fatigue, cognition.\n\nDÉPISTAGE :\n- Échelles STOP-BANG ; polygraphie ou polysomnographie si suspicion.\n- Apnées centrales plus fréquentes (IC, opioïdes) : distinguer mixte.\n\nTRAITEMENT :\n- PPC (pression positive continue) : référence si IAH ≥ 15 avec symptômes ou ≥ 30.\n- Adaptation masque et humidification ; suivi observance.\n- Perte de poids, éviter alcool/sédatifs, position latérale.\n- Orthèse d\'avancée mandibulaire si SAOS léger ou intolérance PPC.\n\nGÉRIATRIE :\n- Bénéfice CV et cognition même sujet fragile.\n- Prudence opioïdes et benzodiazépines (aggravation apnées).',
    points_cles: ['STOP-BANG puis polygraphie', 'PPC si IAH significatif', 'HTA et FA associées', 'Opioïdes aggravent apnées']
  },
  {
    id: 'gp-5',
    titre: 'Oxygénothérapie aiguë et chronique',
    contenu: 'L\'oxygène est un médicament ; cibles et durée doivent être prescrites pour éviter hyperoxie et CO2 retention (BPCO).\n\nO2 AIGU :\n- Indication : SpO2 < 90–92 % ou détresse respiratoire.\n- BPCO connu : O2 titré SpO2 88–92 % (risque acidose hypercapnique).\n- Dispositifs : lunettes, masque simple, VNI si acidose.\n\nO2 LONGUE DURÉE (OLD) DOMICILE :\n- Critères : PaO2 ≤ 55 mmHg au repos ou SaO2 ≤ 88 % stable ; ou PaO2 56–59 avec polyglobulie, oedème pulmonaire, HTAP, cor pulmonale.\n- ≥ 15 h/j pour bénéfice survie (BPCO sévère).\n- Recontrôle gazométrie 1–3 mois après initiation.\n\nMOBILITÉ :\n- O2 portable pour effort si hypoxémie d\'effort documentée.\n\nSÉCURITÉ :\n- Interdiction fumer près O2 ; entretien concentrateurs.\n\nFIN DE TRAITEMENT : réévaluer si amélioration clinique (pneumopathie interstitielle réversible rare).',
    points_cles: ['BPCO : SpO2 88–92 %', 'OLD si PaO2 ≤ 55', '15 h/j minimum survie', 'Réévaluation gazométrie']
  },
  {
    id: 'gp-6',
    titre: 'Kinésithérapie respiratoire et réhabilitation',
    contenu: 'La réhabilitation respiratoire (RR) est indiquée BPCO modérée à sévère avec dyspnée persistante malgré traitement pharmacologique.\n\nCOMPOSANTES :\n- Exercices d\'endurance (marche, vélo) et renforcement membres inférieurs.\n- Réentraînement des muscles respiratoires si indiqué.\n- Éducation : gestion dyspnée, technique inhalation, arrêt tabac.\n- Support nutritionnel si dénutrition.\n\nBÉNÉFICES CHEZ L\'ÂGÉ :\n- Amélioration dyspnée (mMRC), qualité de vie, réduction hospitalisations.\n- Même sujets > 80 ans avec marche assistée possible.\n\nKINÉ EN AIGU (hospitalisation) :\n- Désencombrement bronchique : percussion, drainage si expectoration.\n- Mobilisation précoce pneumonie pour éviter déconditionnement.\n- Apprentissage toux assistée si faiblesse.\n\nCONTRE-INDICATIONS RELATIVES :\n- Instabilité hémodynamique, arythmie non contrôlée ; adapter intensité.\n\nPRESCRIPTION : 20 séances 2–3/semaine ; maintien activité à domicile ensuite.',
    points_cles: ['RR = exercice + éducation', 'Efficace après 80 ans', 'Mobilisation précoce PAC', 'Technique inhalateurs vérifiée']
  },
  {
    id: 'gp-7',
    titre: 'Sevrage tabagique du sujet âgé',
    contenu: 'Arrêter de fumer à tout âge prolonge la vie et ralentit déclin VEMS ; le sujet âgé peut sevrer avec succès.\n\nBÉNÉFICES :\n- Réduction exacerbations BPCO, risque cancer poumon, AVC, IDM.\n- Amélioration goût, odeur, capacité effort.\n\nÉVALUATION :\n- Dépendance : test de Fagerström ; nombre paquets-années.\n- Motivation, tentatives antérieures, dépression, cognition.\n\nTRAITEMENT :\n- TSN : patch + forme rapide (gum, spray) si besoin ; adapter dose (moins de poids).\n- Varénicline ou bupropion si pas de CI psychiatrique/cardiaque majeure (varénicline possible > 65 avec suivi).\n- Accompagnement comportemental, ligne Tabac Info Service.\n\nSPÉCIFICITÉS ÂGÉ :\n- Interactions médicaments ; surveiller somnolence patch nuit.\n- Ne pas abandonner après échec ; réessayer avec autre stratégie.\n\nE-cigarette : moins de données long terme ; discuter risque/bénéfice individuel.',
    points_cles: ['Sevrage bénéfique à tout âge', 'TSN + accompagnement', 'Varénicline possible si suivi', 'Récidive = nouvelle tentative']
  },
  {
    id: 'gp-8',
    titre: 'Vaccinations pneumologiques du sujet âgé',
    contenu: 'Les vaccins réduisent pneumonies, exacerbations BPCO et mortalité grippale chez le sujet âgé.\n\nGRIPPE :\n- Annuel automne ; vaccin haute dose ou adjuvanté si ≥ 65 ans (recommandations HAS).\n- Indication universelle EHPAD et comorbidités respiratoires/cardiaques.\n\nPNEUMOCOQUE :\n- Schéma adapté aux recommandations en vigueur (conjugués 13/15/20-valent + rappels).\n- Indication : ≥ 65 ans, BPCO, asthme sévère, immunodépression.\n\nCOVID-19 :\n- Rappels selon calendrier et fragilité.\n\nVACCIN ZONA (herpès) :\n- Réduit zona et neuropathie post-zostérienne ; recommandé ≥ 65 ans.\n\nPRATIQUE :\n- Vérifier calendrier à chaque consultation gériatrique.\n- Pas de contre-indication systématique BPCO stable ; vacciner en rémission exacerbation.\n\nÉDUCATION : efficacité partielle mais réduction formes sévères.',
    points_cles: ['Grippe annuelle dose forte/âgé', 'Pneumocoque selon schéma national', 'Zona ≥ 65 ans', 'Revoir calendrier chaque visite']
  },
  {
    id: 'gp-9',
    titre: 'Oxygénothérapie longue durée : organisation et suivi',
    contenu: 'L\'OLD à domicile nécessite prescription médicale initiale, prestataire agréé et suivi régulier.\n\nINDICATIONS RAPPEL :\n- PaO2 ≤ 55 mmHg au repos stable ou équivalent SpO2 ; exceptions 56–59 avec complications.\n- BPCO, fibrose, HTAP, suites EP chroniques.\n\nPRESCRIPTION :\n- Débit (L/min), durée quotidienne, mode (continu/nocturne), objectif SpO2.\n- Bilan gazométrique et polygraphie si SAOS associé.\n\nSUIVI :\n- Consultation 1–3 mois : observance, qualité vie, encéphalopathie hypercapnique.\n- Réévaluation annuelle gazométrie ; ajuster débit.\n- Voyage : concentrateur portable, batteries.\n\nAIDES :\n- Prise en charge Sécurité sociale selon critères ; MDPH si besoin aide technique.\n\nARRÊT : si amélioration durable (rare BPCO) ou objectifs de soins palliatifs (confort dyspnée).',
    points_cles: ['Prescription débit + durée', 'Réévaluation annuelle PaO2', 'Observance ≥ 15 h/j', 'SAOS traiter en parallèle']
  },
  {
    id: 'gp-10',
    titre: 'Détresse respiratoire aiguë chez le sujet âgé',
    contenu: 'La détresse respiratoire impose une prise en charge immédiate avec attention aux limites thérapeutiques et à la polymédication.\n\nÉVALUATION INITIALE :\n- Fréquence respiratoire, SpO2, effort (tirage, balancement), conscience.\n- Gazométrie : hypoxie, hypercapnie, acidose.\n- Causes : PAC, EP, OAP, pneumothorax, exacerbation BPCO, asthme, anaphylaxie.\n\nOXYGÉNATION ET VENTILATION :\n- O2 titré ; VNI en 1re intention si acidose hypercapnique BPCO (pH < 7,35).\n- Intubation : décision collégiale si FA, fragilité extrême, démence avancée (directives anticipées).\n\nTRAITEMENT ÉTIOLOGIQUE :\n- Diurétiques OAP ; antibiotique PAC ; anticoagulation EP ; bronchodilatateurs BPCO.\n\nGÉRIATRIE :\n- Délirium fréquent ; éviter benzodiazépines si hypercapnie.\n- Analgésie suffisante (douleur thoracique, effort respiratoire).\n\nSOINS PALLIATIFS : morphine faible dose pour dyspnée réfractaire en fin de vie (effet anxiolytique).',
    points_cles: ['VNI 1re ligne BPCO hypercapnie', 'DA avant intubation en urgence', 'O2 titré éviter hyperoxie', 'Morphine dyspnée palliative']
  }
];
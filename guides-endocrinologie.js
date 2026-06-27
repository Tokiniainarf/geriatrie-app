// Guides endocrinologie — Pathologies endocriniennes et métaboliques chez le sujet âgé
const GUIDES_ENDOCRINOLOGIE = [
  {
    id: 'endo-1',
    titre: 'Diabète type 2 chez le sujet âgé : stratégie globale',
    contenu: 'Le DT2 touche plus de 25 % des sujets ≥ 75 ans ; polymorbidité et risque hypoglycémique dominent la prise en charge.\n\nDÉPISTAGE :\n- Glycémie à jeun ou HbA1c ; dépistage si surpoids + HTA ou antécédents familiaux si espérance de vie compatible.\n- Symptômes atypiques : infections récidivantes, confusion, ulcération pied.\n\nOBJECTIFS :\n- Individualiser HbA1c (robuste < 7 % ; fragile 7,5–8 % ; fin de vie éviter hypo).\n- Priorité : prévention hypo, pied diabétique, CV et rénal.\n\nTRAITEMENT :\n- Metformine si DFG ≥ 30 ; iDPP-4 si fragilité ; prudence sulfamides et insuline.\n- iSGLT2 si bénéfice cardiorénal et tolérance hydratation.\n\nGÉRIATRIE :\n- Dénutrition et sarcopénie : ne pas sacrifier apports pour glycémie stricte.\n- ETP aidants ; protocole EHPAD écrit.',
    points_cles: ['Objectifs HbA1c individualisés', 'Hypo = risque majeur à l\'âge', 'Metformine + iDPP-4 souvent adaptés', 'Pied + CV + rein en parallèle']
  },
  {
    id: 'endo-2',
    titre: 'Hypothyroïdie chez le sujet âgé',
    contenu: 'Hypothyroïdie fréquente (Hashimoto) ; tableau souvent frustre : fatigue, constipation, confusion, dépression, bradycardie.\n\nDIAGNOSTIC :\n- TSH élevée ; T4L si TSH borderline ou suspicion centrale.\n- TSH peut être moins élevée à l\'âge ; ne pas ignorer symptômes.\n\nTRAITEMENT :\n- Lévothyroxine : début 25–50 µg/j (25 si cardiopathie, FA) ; titration lente tous les 6–8 semaines.\n- Objectif TSH souvent 0,5–4,5 mUI/L ; relâcher si très fragile ou coronaropathie (éviter surdosage).\n\nPIÈGES :\n- Myxœdème coma : rare ; température basse, coma — hospitalisation, corticoïdes + thyroxine IV.\n- Interactions : calcium, fer, IPP → espacer prise 4 h.\n- Surdosage : fibrillation, ostéoporose, angor.',
    points_cles: ['Début lévothyroxine bas et lent', 'Symptômes vagues fréquents', 'Espacer fer/calcium/PPI', 'Surdosage = FA et fractures']
  },
  {
    id: 'endo-3',
    titre: 'Hyperthyroïdie et maladie Basedow chez le sujet âgé',
    contenu: 'Formes apatiques possibles : asthénie, amaigrissement, fibrillation, insuffisance cardiaque sans goitre proéminent.\n\nDIAGNOSTIC :\n- TSH basse, T4L/T3L élevées ; anticorps TRAK si Basedow.\n- Scintigraphie si nodule ou doute étiologique.\n\nTRAITEMENT :\n- Antithyroïdiens de synthèse (ATS) : faible dose ; surveillance agranulocytose (fièvre = arrêt + NFS).\n- Bêta-bloquant si tachycardie/FA (attention asthme, BAV).\n- Radioiode ou chirurgie selon comorbidités et adhésion.\n\nCOMPLICATIONS :\n- Storm thyroïdien rare mais mortel ; fièvre, confusion — réanimation.\n- FA : anticoagulation selon CHA2DS2-VASc une fois contrôle thyroïde discuté.\n\nGÉRIATRIE :\n- Iatrogène hyperthyroïdie (amiodarone) fréquente ; surveiller TSH sous amiodarone.',
    points_cles: ['Forme apatique possible', 'ATS faible dose + NFS si fièvre', 'Amiodarone = surveiller TSH', 'FA souvent associée']
  },
  {
    id: 'endo-4',
    titre: 'Ostéoporose et prévention des fractures',
    contenu: 'Prévalence élevée ; fracture hanche = morbi-mortalité majeure. Facteurs : ménopause, corticoïdes, hypogonadisme, immobilisation, vitamine D basse.\n\nÉVALUATION :\n- DMO (T-score) ; FRAX si pas de DMO.\n- Causes secondaires : hyperthyroïdie, myélome, alcool.\n\nPRÉVENTION :\n- Calcium alimentaire prioritaire ; supplément si apports < 800 mg/j.\n- Vitamine D : cible 25-OH-D souvent 30–50 ng/mL ; doses adaptées (éviter excès).\n- Activité, renforcement, correction vision ; chutes (voir guide gériatrie).\n\nTRAITEMENT :\n- Bisphosphonates oraux/IV si risque élevé ; durée limitée (réévaluation 3–5 ans).\n- Dénosumab, ostéoanaboles selon profil ; dentiste avant bisphosphonates IV.\n\nFRACTURE :\n- Orthogériatrie ; traiter ostéoporose post-fracture (secondary prevention).',
    points_cles: ['FRAX ou DMO pour décision', 'Vitamine D + calcium si besoin', 'Traiter post-fracture hanche', 'Limiter durée bisphosphonates']
  },
  {
    id: 'endo-5',
    titre: 'Hyperparathyroïdie primaire chez le sujet âgé',
    contenu: 'Souvent découverte fortuite (calcémie élevée, PTH élevée) ; symptômes : lithiases, fatigue, confusion, fractures.\n\nDIAGNOSTIC :\n- Calcémie corrigée albumine, PTH, phosphore, créatinine, calciurie 24 h.\n- DMO et échographie rénale.\n\nINDICATION CHIRURGIE :\n- Calcémie > 3 mmol/L, symptômes, IRC, ostéoporose, jeune patient — à l\'âge : balance bénéfice/anesthésie.\n\nSUIVI MÉDICAL :\n- Si pas de chirurgie : hydratation, éviter déshydratation, surveillance calcémie annuelle.\n- Pas de bisphosphonates comme traitement de l\'HPT primaire en première intention.\n\nHYPERCALCÉMIE AIGUË :\n- Confusion, déshydratation ; perfusion, bisphosphonate IV si sévère.',
    points_cles: ['Découverte souvent fortuite', 'Chirurgie si critères et profil OK', 'Surveillance si conservateur', 'Hypercalcémie aiguë = urgence']
  },
  {
    id: 'endo-6',
    titre: 'Insuffisance surrénale et corticothérapie prolongée',
    contenu: 'Insuffisance surrénale primaire (Addison) rare ; secondaire (arrêt corticoïdes) fréquente en polymédication.\n\nSIGNES :\n- Asthénie, hypotension, hyperpigmentation (primaire), hyponatrémie.\n- Crise addisonienne : vomissements, choc — hydrocortisone IV urgence.\n\nCORTICOTHÉRAPIE CHRONIQUE :\n- Minimum efficace ; prednisone équivalent < 5 mg/j si possible long terme.\n- Ne jamais arrêter brutalement si > 3 semaines de traitement.\n- Carte d\'alerte, adaptation dose stress (fièvre, chirurgie).\n\nGÉRIATRIE :\n- Corticoïdes : myopathie, diabète, ostéoporose, confusion ; rechercher alternative si possible.\n- Vaccination et prophylaxie ostéoporose si traitement prolongé.',
    points_cles: ['Pas d\'arrêt brutal corticoïdes', 'Crise = hydrocortisone IV', 'Dose stress si infection/chirurgie', 'Minimiser durée et dose']
  },
  {
    id: 'endo-7',
    titre: 'Syndrome métabolique chez le sujet âgé',
    contenu: 'Association obésité abdominale, HTA, dysglycémie, dyslipidémie ; risque cardiovasculaire et hépatique (MASLD) accru.\n\nCRITÈRES (adaptation âge) :\n- Tour de taille, PA, glycémie/HbA1c, HDL, triglycérides.\n\nPRISE EN CHARGE :\n- Mode de vie : activité adaptée, alimentation méditerranéenne, pas de régime drastique si dénutrition.\n- HTA, diabète, dyslipidémie traités selon guidelines gériatriques.\n- Apnée du sommeil si somnolence et obésité.\n\nGÉRIATRIE :\n- Bénéfice prévention CV reste pertinent si espérance de vie > 1–2 ans.\n- Éviter polypharmacie excessive ; une priorité thérapeutique à la fois si fragile.',
    points_cles: ['Approche lifestyle d\'abord', 'Traiter chaque composante', 'Dépister SAOS si suggestif', 'Individualiser selon espérance de vie']
  },
  {
    id: 'endo-8',
    titre: 'Obésité et sarcopénique obesity chez le sujet âgé',
    contenu: 'Obésité sarcopénique : masse grasse élevée + masse musculaire basse ; risque métabolique et chutes.\n\nÉVALUATION :\n- IMC trompeur si sarcopénie ; tour de taille, force préhension, vitesse marche.\n- MNA et apports protéiques.\n\nPRISE EN CHARGE :\n- Objectif : préservation muscle (protéines 1–1,2 g/kg/j si compatible, résistance progressive).\n- Perte de poids lente seulement si bénéfice fonctionnel ; éviter régimes < 1200 kcal sans suivi.\n- GLP-1 : efficacité pondérale mais risque perte muscle et nausées — prudence très âgé fragile.\n\nCHUTES :\n- Poids excessif + faiblesse = double risque ; rééducation à la marche sécurisée.',
    points_cles: ['IMC seul insuffisant', 'Protéines + renforcement musculaire', 'Perte poids lente si indiquée', 'GLP-1 avec prudence âgé fragile']
  },
  {
    id: 'endo-9',
    titre: 'Dénutrition et troubles endocrino-métaboliques',
    contenu: 'Dénutrition fréquente en EHPAD ; interaction avec thyroïde (euthyroïdie maladie), cortisol, insuline, testostérone basse.\n\nDÉPISTAGE :\n- MNA, perte poids non intentionnelle > 5 % / 6 mois, albumine basse.\n\nCAUSES :\n- Dysphagie, dépression, douleur, hyperthyroïdie, diabète mal équilibré, médicaments (metformine, GLP-1).\n\nPRISE EN CHARGE :\n- Enrichissement oral, texture IDDSI, horaires repas.\n- Adapter diabète : réduire hypo si apports faibles.\n- Vitamine B12, folates, vitamine D si carence.\n\nHORMONOTHÉRAPIE :\n- Testostérone seulement si hypogonadisme symptomatique documenté et pas de CI cancer prostate ; rarement en très âgé.',
    points_cles: ['MNA à chaque évaluation', 'Corriger cause organique', 'Adapter antidiabétiques si anorexie', 'Enrichissement avant hormones']
  },
  {
    id: 'endo-10',
    titre: 'Dyslipidémie et statines chez le sujet âgé',
    contenu: 'LDL élevé reste facteur de risque CV mais bénéfice statine primaire diminue si espérance de vie très courte.\n\nÉVALUATION :\n- Bilipidique à jeun si pertinent ; ATCD CV = secondaire prevention.\n\nSTATINES :\n- Secondaire : poursuivre sauf effets indésirables ou fin de vie.\n- Primaire > 80 ans : individualiser (SCORE2-OP, fragilité, time to benefit).\n- Myopathie et interactions (macrolides, fibrates) plus fréquentes ; début faible dose.\n\nAUTRES :\n- Ézétimibe, PCSK9 si intolérance ou LDL très élevé et bénéfice attendu.\n- Hypertriglycérides : alcool, diabète, hypothyroïdie à corriger.\n\nDÉPRESCRIPTION :\n- Discuter arrêt en phase palliative ou démence avancée sans événement CV récent.',
    points_cles: ['Secondaire = statine sauf CI', 'Primaire individualisée > 80 ans', 'Début faible dose statine', 'Déprescription possible fin de vie']
  }
];
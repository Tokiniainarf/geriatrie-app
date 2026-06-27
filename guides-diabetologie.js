// Guides diabétologie — Prise en charge du diabète chez le sujet âgé
const GUIDES_DIABETOLOGIE = [
  {
    id: 'diab-1',
    titre: 'Objectifs glycémiques et HbA1c chez le sujet âgé',
    contenu: 'Les objectifs glycémiques doivent être individualisés selon l\'espérance de vie, l\'autonomie, les comorbidités et le risque d\'hypoglycémie.\n\nCLASSIFICATION (HAS / ADA adaptée) :\n- Sujet robuste, longue espérance de vie, peu de comorbidités : HbA1c < 7 % (53 mmol/mol) si possible sans hypoglycémie.\n- Sujet fragile ou polymorbide : HbA1c 7,5–8 % (58–64 mmol/mol).\n- Sujet très fragile, fin de vie, démence avancée : éviter hypoglycémies ; HbA1c 8–8,5 % acceptable ; priorité confort et symptômes.\n\nHYPOGLYCÉMIE :\n- Seuil < 3,9 mmol/L (70 mg/dL) ; sévère si aide tierce nécessaire.\n- Risque majoré : sulfamides hypoglycémiants, insuline, DFG < 30, dénutrition, polymédication.\n- Chez le sujet âgé : moins de symptoms adrénergiques, risque chutes, confusion, AVC.\n\nSUIVI :\n- HbA1c tous les 3–6 mois si traitement modifié ; glycémie capillaire ciblée si insuline ou risque hypo.\n- Ne pas poursuivre objectifs stricts si récidives hypoglycémiques ou perte d\'autonomie.',
    points_cles: ['Individualiser HbA1c selon fragilité', 'Éviter hypo > objectif strict', 'Robuste < 7 % ; fragile 7,5–8 %', 'Symptômes hypo atypiques à l\'âge']
  },
  {
    id: 'diab-2',
    titre: 'Choix du traitement oral du diabète type 2 chez le sujet âgé',
    contenu: 'La metformine reste le traitement de première intention si DFG ≥ 30 mL/min (ajuster dose si 30–45).\n\nMÉFORMINE :\n- Dose max adaptée au DFG ; arrêt si DFG < 30 ou acidose, déshydratation aiguë.\n- Avantage : pas d\'hypoglycémie isolée, poids stable.\n\nINHIBITEURS DPP-4 (sitagliptine, linagliptine…) :\n- Bien tolérés, faible risque hypo, adaptation rénale selon molécule (linagliptine sans ajustement rénal).\n- Choix fréquent si fragilité ou polymédication.\n\nSULFAMIDES (gliclazide modifié…) :\n- Risque hypoglycémie ; préférer gliclazide à demi-vie courte ; éviter glibenclamide.\n- Réduire ou arrêter si dénutrition, DFG bas, chutes.\n\nGLP-1 et SGLT2 :\n- Bénéfice cardiorénal en population plus jeune ; chez le très âgé fragile : poids perte, infections génitales, déshydratation (iSGLT2) — balance bénéfice/risque.\n\nDÉPRESCRIPTION :\n- Réduire sulfamides/insuline si HbA1c basse, repas irréguliers, démence avec oublis.',
    points_cles: ['Metformine si DFG ≥ 30', 'iDPP-4 = sécurité à l\'âge', 'Limiter sulfamides hypo', 'Déprescription si risque hypo']
  },
  {
    id: 'diab-3',
    titre: 'Insuline chez le sujet âgé : initiation et simplification',
    contenu: 'L\'insuline est indiquée si échec des oraux, décompensation (HbA1c très élevée), ou contrainte des oraux (DFG < 30 sans alternative).\n\nINITIATION :\n- Privilégier schémas simples : insuline basale (détemir, glargine, dégludec) 1 injection/soir.\n- Dose de départ faible (0,1–0,2 UI/kg/j) ; titration lente.\n- Éviter bolus multiples si aide à domicile limitée ou troubles cognitifs.\n\nSCHÉMAS SIMPLIFIÉS :\n- Basale seule si jeûne élevé ; basal + 1 bolus repas principal si besoin.\n- Mélanges prémélangés possibles si 2 injections acceptées.\n\nSÉCURITÉ :\n- Éducation aidant + résident ; pilulier insuline, plages horaires fixes.\n- Hypoglycémie : glucagon si possible, sucre rapide, réduction dose après épisode.\n- Pas d\'HbA1c comme seul critère si hypo récurrentes.\n\nDÉMENCE / EHPAD :\n- Objectif glycémique relâché ; parfois arrêt insuline au profit d\'iDPP-4 ou surveillance seule si fin de vie.',
    points_cles: ['1 injection basale si possible', 'Titration lente', 'Aidant formé aux hypo', 'Simplifier ou déprescrire si cognition']
  },
  {
    id: 'diab-4',
    titre: 'Pied diabétique et surveillance podologique',
    contenu: 'Le pied diabétique combine neuropathie, artériopathie et risque infectieux ; prévalence élevée après 75 ans.\n\nDÉPISTAGE ANNUEL :\n- Inspection pieds (crevasses, ongles, déformations).\n- Monofilament 10 g (points à risque neuropathie).\n- Pouls pédieux ; index cheville-bras si plaie ou ischémie suspectée.\n\nFACTEURS DE RISQUE À L\'ÂGE :\n- Vision basse, autonomie limitée pour soins des pieds, chaussures inadaptées.\n- IRC, ATCD plaie ou amputation.\n\nPLAIE :\n- Classification infectée / ischémique / neuropathique ; pas de traumatisme répété.\n- Décharge, soins locaux, antibiothérapie ciblée si infection ; avis chirurgical vasculaire si ischémie.\n\nPRÉVENTION :\n- Hygiène, hydratation sans interdigitale macérée, chaussures adaptées.\n- Pas de traitement corne par non-podologue ; pas de promenade pieds nus.\n- Éducation aidant et EHPAD (inspection quotidienne si risque).',
    points_cles: ['Examen pieds 1×/an minimum', 'Monofilament + pouls', 'Plaie = décharge + étiologie', 'Pas d\'auto-traitement corne']
  },
  {
    id: 'diab-5',
    titre: 'Diabète et insuffisance rénale chronique',
    contenu: 'La néphropathie diabétique et l\'âge cumulent le risque d\'IRC ; adaptation thérapeutique obligatoire.\n\nSUIVI RÉNAL :\n- DFG et albuminurie tous les 6–12 mois.\n- Stades DFG : metformine réévaluée à chaque palier.\n\nTRAITEMENTS :\n- Metformine : réduction dose DFG 30–45 ; arrêt si < 30.\n- iDPP-4 : ajuster sauf linagliptine.\n- iSGLT2 : bénéfice néphroprotecteur si DFG suffisant selon AMM ; risque déshydratation à l\'âge.\n- Insuline : réduction dose si DFG < 30 (demi-vie prolongée).\n\nCOMPLICATIONS :\n- Hyperkaliémie (IEC, spironolactone + IRC).\n- Acidose lactique rare mais grave avec metformine + déshydratation.\n\nOBJECTIFS :\n- Équilibre glycémique modéré ; éviter néphrotoxiques (AINS, produits de contraste sans hydratation).',
    points_cles: ['DFG pilote les doses', 'Metformine arrêt si DFG < 30', 'Insuline ↓ si IRC sévère', 'Surveiller K+ et hydratation']
  },
  {
    id: 'diab-6',
    titre: 'Syndrome hyperglycémique aigu chez le sujet âgé',
    contenu: 'Acidocétose et état hyperosmolaire : déclencheurs infection, infarctus, oubli traitement, corticoïdes.\n\nTABLEAU À L\'ÂGE :\n- Hyperosmolaire plus fréquent ; début insidieux (polyuro-polydipsie moins rapportée).\n- Confusion, déshydratation, chutes = motifs d\'admission.\n\nPRISE EN CHARGE :\n- Réanimation hydroélectrolytique avant ou avec insuline IV.\n- Recherche foyer infectieux (pneumonie, urine, peau).\n- Insuline IV protocole ; bascule SC quand stable.\n\nSPÉCIFICITÉS GÉRIATRIQUES :\n- Risque thrombose, décompensation cardiaque lors reprise hydratation.\n- Réévaluation traitement au long cours : simplifier, prévenir récidive (éducation aidant).\n- Ne pas réhospitaliser systématiquement pour tout hyperglycémie modérée en EHPAD si confort et pas d\'acidose.',
    points_cles: ['Hyperosmolaire souvent > acidocétose', 'Confusion = signal', 'Hydratation puis insuline', 'Chercher infection déclenchante']
  },
  {
    id: 'diab-7',
    titre: 'Diabète, dénutrition et sarcopénie',
    contenu: 'Le diabète de longue date et les régimes trop restrictifs aggravent la dénutrition et la perte musculaire.\n\nLIENS :\n- Hyperglycémie chronique : anorexie, gastroparesie.\n- Traitements : metformine (nausées), GLP-1 (perte d\'appétit).\n- Peur des sucres → apports insuffisants.\n\nÉVALUATION :\n- MNA, albumine, poids, force de préhension.\n- Adapter texture si dysphagie.\n\nPRISE EN CHARGE :\n- Ne pas imposer régime draconien ; répartition glucides, protéines 1–1,2 g/kg/j si possible.\n- Fractionner repas ; surveiller hypo si insuline + faibles apports.\n- Réduire traitement hypoglycémiant si dénutrition sévère.\n\nACTIVITÉ PHYSIQUE :\n- Renforcement musculaire sécurisé = insulinosensibilité + prévention chutes.',
    points_cles: ['Éviter restriction excessive', 'Protéines + activité', 'MNA systématique', 'Ajuster insuline/sulfamides si anorexie']
  },
  {
    id: 'diab-8',
    titre: 'Diabète et polymédication (interactions et iatrogénie)',
    contenu: 'Le sujet âgé diabétique reçoit souvent ≥ 5 médicaments ; interactions et effets sur glycémie fréquents.\n\nMÉDICAMENTS HYPERGLYCÉMIANTS :\n- Corticoïdes, thiazidiques haute dose, certains antipsychotiques, bêta-bloquants masquent parfois tachycardie d\'hypo.\n\nMÉDICAMENTS HYPOGLYCÉMIANTS :\n- Fluconazole + sulfamides ; quinolones ; IEC peuvent modifier sensibilité.\n\nBONNES PRATIQUES :\n- Revue médicamenteuse annuelle (STOPP/START).\n- Liste traitement à jour EHPAD / hospitalisation.\n- Éviter glibenclamide ; attention tramadol + hypo masquée (somnolence).\n\nHOSPITALISATION :\n- Réconciliation entrée/sortie ; ne pas oublier insuline ou metformine ; adapter si jeûne, scanner.',
    points_cles: ['Corticoïdes = hyperglycémie', 'Bêta-bloquants masquent hypo', 'Revue annuelle obligatoire', 'Réconciliation à chaque entrée']
  },
  {
    id: 'diab-9',
    titre: 'Diabète en EHPAD : organisation des soins',
    contenu: 'En établissement : observance, repas collectifs, surveillance glycémique et coordination médecin-IDE.\n\nÀ L\'ADMISSION :\n- Histoire diabète, dernière HbA1c, complications, schéma insuline.\n- Protocole écrit dans PSI : horaires injections, cibles, qui contrôle.\n\nREPAS :\n- Texture IDDSI ; glucides comptés si insuline fonctionnelle ; sinon flexibilité pour éviter hypo.\n- Pas de ration punitive sur dessert si objectif relâché.\n\nSURVEILLANCE :\n- Glycémie capillaire selon protocole (pas systématique quotidien si oraux seuls stables).\n- Signes hypo : confusion, sueurs froides, chute — traiter avant dosage si doute.\n\nHYPERGLYCÉMIE TRANSIITOIRE :\n- Infection, stress — traiter cause ; pas toujours augmenter insuline durablement.',
    points_cles: ['Protocole PSI écrit', 'Repas et insuline coordonnés', 'Hypo = traiter vite', 'HbA1c trimestriel si instable']
  },
  {
    id: 'diab-10',
    titre: 'Éducation thérapeutique et aidants du patient âgé diabétique',
    contenu: 'L\'ETP adaptée à l\'âge vise sécurité, reconnaissance hypo/hyperglycémie et lifestyle réaliste.\n\nPATIENT :\n- Messages simples, supports visuels, répétition.\n- Si démence légère : objectifs sécurité (pas hypoglycémiant seul sans surveillance).\n\nAIDANTS FAMILIAUX :\n- Technique injection, stockage insuline, gestion hypo (sucre, reclassement).\n- Qui appeler ; carnet glycémique si utile.\n\nPROFESSIONNELS DOMICILE :\n- Transmission ciblée ; pas de modification dose sans médecin sauf protocole hypo.\n\nOBJECTIFS RÉALISTES :\n- Mieux vaut stabilité sans hypo qu\'HbA1c parfaite.\n- Adapter si fin de vie : arrêt surveillance intensive, confort alimentaire.',
    points_cles: ['Aidant formé injections et hypo', 'Messages simples répétés', 'Sécurité > perfection glycémique', 'Adapter ETP à la cognition']
  }
];
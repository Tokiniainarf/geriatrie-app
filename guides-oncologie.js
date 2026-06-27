// Guides oncologie gériatrique — Cancers fréquents et décision thérapeutique chez le sujet âgé
const GUIDES_ONCOLOGIE = [
  {
    id: 'gonco-1',
    titre: 'Cancer colorectal chez le sujet âgé',
    contenu: 'Le cancer colorectal est fréquent après 70 ans ; le dépistage et la chirurgie doivent intégrer fragilité et comorbidités.\n\nDÉPISTAGE :\n- Test immunologique fécal (FIT) tous les 2 ans 50–74 ans (France) ; colonoscopie si positif.\n- Dépistage individualisé > 74 ans selon espérance de vie et bénéfice (time to benefit).\n\nCLINIQUE :\n- Rectorragies, anémie ferriprive, modification transit, perte de poids ; parfois occlusion ou perforation.\n- Anémie isolée chez le sujet âgé = coloscopie jusqu\'à preuve du contraire.\n\nTRAITEMENT :\n- Chirurgie colectomie : bénéfice même > 80 ans si résection curative et état général acceptable (évaluation gériatrique préop).\n- Chimiothérapie adjuvante stade III : bénéfice diminue avec l\'âge mais pas contre-indication automatique ; FOLFOX ou CAPOX selon tolérance.\n- Métastatique : chimiothérapie palliative, anti-EGFR si RAS sauvage, immunothérapie si MSI-H ; objectifs confort.\n\nGÉRIATRIE :\n- Outils G8, CGA pour décision ; éviter sous-traitement uniquement pour l\'âge et sur-traitement sans bénéfice.\n- Soins de support : nutrition, douleur, stome, accompagnement.',
    points_cles: ['Anémie ferriprive = coloscopie', 'Chirurgie possible > 80 ans si curatif', 'CGA avant chimiothérapie', 'Dépistage individualisé après 74 ans']
  },
  {
    id: 'gonco-2',
    titre: 'Cancer du sein chez le sujet âgé',
    contenu: 'Plus de la moitié des cancers du sein surviennent après 65 ans ; sous-traitement historique par âge — décision doit être personnalisée.\n\nBIOLOGIE :\n- Souvent luminal (récepteurs hormonaux positifs) ; agressivité variable ; bilans d\'extension moins systématiques si stade précoce et comorbidités.\n\nTRAITEMENT LOCAL :\n- Chirurgie : tumorectomie + radiothérapie ou mastectomie selon taille, patient, préférences.\n- Radiothérapie : schémas hypofractionnés possibles ; tolérance bonne à l\'âge.\n\nTRAITEMENT SYSTÉMIQUE :\n- Hormonothérapie (tamoxifène, inhibiteurs aromatase) : indiquée si RH+ même sujet âgé ; attention ostéoporose sous IA, thrombose sous tamoxifène.\n- Chimiothérapie adjuvante : bénéfice si risque élevé (grade, ganglions) et patient apte ; anthracyclines/taxanes avec surveillance cardiaque et neuropathie.\n- Métastatique : hormonothérapie longue, CDK4/6, anti-HER2 si applicable.\n\nGÉRIATRIE :\n- Fragilité : privilégier hormonothérapie seule si chimiothérapie disproportionnée.\n- Soins palliatifs précoces si métastatique avancé.',
    points_cles: ['RH+ souvent : hormonothérapie efficace', 'Pas de sous-traitement automatique par âge', 'IA : surveillance osseuse', 'Schémas radio hypofractionnés']
  },
  {
    id: 'gonco-3',
    titre: 'Cancer du poumon chez le sujet âgé',
    contenu: 'Principal cancer mortel ; tabac passé ou actuel ; présentation retardée fréquente (dyspnée, toux, perte de poids).\n\nDIAGNOSTIC :\n- Scanner thoracique si suspicion ; biopsie pour histologie et biomarqueurs (EGFR, ALK, ROS1, PD-L1).\n- Bilan extension adapté au stade et au traitement envisagé.\n\nPETIT CELLULE :\n- Chimiothérapie ± radiothérapie ; prophylaxie cérébrale discutée ; pronostic sévère.\n\nNON PETITE CELLULE (CBNPC) :\n- Stade précoce : chirurgie si opérable ; stéréotaxie ou radio si inopérable.\n- Localement avancé : chimio-radio.\n- Métastatique : immunothérapie ± chimiothérapie selon PD-L1 ; ciblés si mutation (osimertinib, etc.).\n\nGÉRIATRIE :\n- Performance status et comorbidités (BPCO, IC) guident l\'intensité.\n- Immunothérapie possible à l\'âge ; surveiller pneumopathies auto-immunes, colites.\n- Soins de confort : O2, morphine dyspnée, kiné respiratoire.',
    points_cles: ['Biopsie pour histologie + biomarqueurs', 'Immunothérapie si métastatique souvent', 'BPCO fréquent : tolérance traitements', 'Dyspnée = soins symptomatiques tôt']
  },
  {
    id: 'gonco-4',
    titre: 'Cancer de la prostate chez le sujet âgé',
    contenu: 'Très fréquent ; souvent lent ; sur-diagnostic et sur-traitement possibles — distinguer risque et espérance de vie.\n\nDÉPISTAGE :\n- PSA et toucher rectal discutés individuellement ; dépistage organisé non universel ; éviter PSA systématique si espérance de vie < 10 ans sans symptômes.\n\nSTRATIFICATION :\n- Risque faible, intermédiaire, élevé ; PSA, Gleason, TDM, ganglions.\n- Cancer localisé faible risque : surveillance active souvent préférée à l\'âge avancé.\n\nTRAITEMENT :\n- Curatif : prostatectomie, radiothérapie, curiethérapie selon âge, comorbidités, préférences.\n- Hormonothérapie (castration) : métastatique ou adjuvant haut risque ; effets secondaires (ostéoporose, fatigue, syndrome métabolique).\n- Chimiothérapie docétaxel, abiratérone, enzalutamide en phases avancées.\n\nGÉRIATRIE :\n- Surveillance active : PSA régulier, biopsies de reclassification si indication.\n- Incontinence et dysfonction érectile post-traitement : impact qualité de vie.\n- Ne pas traiter agressivement cancer incidental très âgé fragile sans symptômes.',
    points_cles: ['Surveillance active si faible risque + âge', 'PSA pas systématique si espérance vie courte', 'Hormonothérapie : os et CV', 'Décision partagée curatif vs watchful']
  },
  {
    id: 'gonco-5',
    titre: 'Cancer de l\'estomac chez le sujet âgé',
    contenu: 'Incidence diminue en Occident mais diagnostic souvent tardif chez le sujet âgé ; symptômes non spécifiques.\n\nCLINIQUE :\n- Dyspepsie persistante, anorexie, perte de poids, anémie, masse épigastrique.\n- Extension : ascite, adénopathie sus-claviculaire (Virchow).\n\nDIAGNOSTIC :\n- Gastroscopie avec biopsies ; TDM thoraco-abdomino-pelvien ; stadification endoscopique et écho-endoscopie si curatif envisagé.\n\nTRAITEMENT :\n- Localisé : gastrectomie partielle ou totale ; lymphadénectomie selon recommandations japonaises/européennes.\n- Péritonéal carcinomatose : souvent palliatif ; chimiothérapie systémique prolonge parfois survie.\n- Chimiothérapie périopératoire ou adjuvante (FLOT, etc.) si patient éligible.\n\nGÉRIATRIE :\n- Dénutrition préopératoire ; risque faiblesse post-gastrectomie (dumping, carences B12, fer).\n- Soins palliatifs : sténose (sonde ou prothèse), nutrition entérale/parentérale si besoin.',
    points_cles: ['Gastroscopie si dyspepsie persistante + âge', 'Perte de poids = alarme', 'Dénutrition fréquente pré-traitement', 'Suivi carences post-gastrectomie']
  },
  {
    id: 'gonco-6',
    titre: 'Cancer du pancréas chez le sujet âgé',
    contenu: 'Pronostic sombre ; pic d\'incidence 70–80 ans ; douleur, ictère, diabète récent, perte de poids.\n\nCLINIQUE :\n- Ictère obstructif indolore ou douloureux ; urines foncées, selles décolorées.\n- Thrombose veineuse migrante (Trousseau) ; douleur épigastrique irradiant dos.\n\nDIAGNOSTIC :\n- Scanner pancréatique ; CA 19-9 (non diagnostique seul) ; biopsie si chimiothérapie néoadjuvante ou métastatique.\n\nTRAITEMENT :\n- Résectable (minorité) : duodéno-pancréatectomie si état général OK ; chimiothérapie adjuvante gemcitabine ou FOLFIRINOX selon tolérance.\n- Borderline / localement avancé : chimiothérapie puis réévaluation chirurgie.\n- Métastatique : chimiothérapie palliative (gemcitabine-nab-paclitaxel, FOLFIRINOX allégé) ; objectif qualité de vie.\n\nSUPPORT :\n- Drainage biliaire (CPRE ou prothèse) si cholestase ; enzymes pancréatiques ; analgésie (opioïdes, celiac plexus block).\n- Thrombose prophylaxique souvent indiquée.',
    points_cles: ['Ictère + perte poids = imagerie pancréas', 'Chirurgie rare ; chimio centrale', 'Douleur : prise en charge précoce', 'Diabète récent peut être signe']
  },
  {
    id: 'gonco-7',
    titre: 'Cancer du foie (CHC) chez le sujet âgé',
    contenu: 'Carcinome hépatocellulaire (CHC) sur cirrhose le plus souvent ; hépatite B/C, alcool, NASH.\n\nSURVEILLANCE :\n- Échographie + AFP tous les 6 mois si cirrhose ou chronicité HBV à risque.\n\nDIAGNOSTIC :\n- Imagerie typique (scanner/IRM) parfois suffisante sans biopsie ; stadification extension vasculaire.\n\nTRAITEMENT :\n- Très précoce : résection ou transplantation si critères Milan et état général.\n- Intermédiaire : embolisation chimique (TACE), radiofréquence.\n- Avancé : atezolizumab-bevacizumab, sorafenib, lenvatinib ; critères Child-Pugh guident éligibilité.\n\nGÉRIATRIE :\n- Insuffisance hépatique limite les options ; encéphalopathie, ascite compliquent traitement.\n- Alcool actif : sevrage et évaluation transplant si éligible.\n- Soins palliatifs : ascite, hémorragie varices, douleur.',
    points_cles: ['Surveillance si cirrhose', 'Child-Pugh pour traitement systémique', 'Pas de biopsie si imagerie typique parfois', 'Transplant si très sélectionné']
  },
  {
    id: 'gonco-8',
    titre: 'Cancer du rein chez le sujet âgé',
    contenu: 'Tumeurs rénales fréquentes incidentalement au scanner ; pic incidence 65–75 ans.\n\nCLINIQUE :\n- Hématurie, masse lombaire, douleur ; souvent asymptomatique (nodule rein).\n\nDIAGNOSTIC :\n- Scanner avec injection ; biopsie si doute ou avant traitement systémique métastatique.\n\nTRAITEMENT LOCALISÉ :\n- Néphrectomie partielle ou totale selon taille, localisation, DFG ; surveillance active petites masses si comorbidités majeures.\n- Ablations percutanées si < 3 cm et contre-indication chirurgie.\n\nMÉTASTATIQUE :\n- Immunothérapie (nivolumab-ipilimumab, pembrolizumab) ± anti-angiogénique (sunitinib, pazopanib).\n- Néphrectomie cytoréductrice discutée cas par cas.\n\nGÉRIATRIE :\n- Préserver fonction rénale résiduelle si néphrectomie partielle possible.\n- IRC post-chirurgie : adapter médicaments et suivi néphrologique.',
    points_cles: ['Incidentalome fréquent', 'Néphrectomie partielle si possible', 'Surveillance active si petit + fragile', 'Immunothérapie métastatique à l\'âge']
  },
  {
    id: 'gonco-9',
    titre: 'Cancer de la vessie chez le sujet âgé',
    contenu: 'Cancer urothélial vessie ; tabac principal facteur ; hématurie macroscopique = examen en priorité.\n\nCLINIQUE :\n- Hématurie indolore (macro ou micro) ; infections urinaires récidivantes, symptômes irritatifs.\n\nDIAGNOSTIC :\n- Cystoscopie + biopsies ; TDM uroscanner pour stadification ; cytologie urinaire complément.\n\nTRAITEMENT :\n- Non muscle-infiltrant (NMIBC) : résection transurétrale (RTUV) + instillations BCG ou chimiothérapie intravésicale selon risque.\n- Muscle-infiltrant : cystectomie avec dérivation urinaire ou chimiothérapie néoadjuvante MVAC/FLOT puis chirurgie ; radio-chimiothérapie bladder preservation sélectionnés.\n- Métastatique : immunothérapie, enfortumab vedotin, chimiothérapie cisplatine si éligible.\n\nGÉRIATRIE :\n- Cystectomie lourde : évaluation gériatrique ; dérivation ileale et soins stomie.\n- BCG intravésicale : cystite, rarement sepsis BCG ; prudence immunodépression.\n- Anticoagulants et hématurie : ne pas retarder cystoscopie.',
    points_cles: ['Hématurie = cystoscopie urgente', 'BCG pour NMIBC à risque', 'Cystectomie : impact qualité de vie', 'Cisplatine métastatique si DFG OK']
  },
  {
    id: 'gonco-10',
    titre: 'Cancers ORL chez le sujet âgé',
    contenu: 'Cavité orale, oropharynx (HPV+ ou HPV-), larynx, hypopharynx ; tabac, alcool, HPV pour oropharynx.\n\nCLINIQUE :\n- Ulceration bouche persistante, dysphagie, odynophagie, enrouement > 3 semaines, masse cervicale.\n- Perte de poids, otalgie réflexe.\n\nDIAGNOSTIC :\n- Fibroscopie ORL + biopsie ; IRM cou ; TEP-TDM stadification.\n\nTRAITEMENT :\n- Localisé : chirurgie ou radiothérapie seule selon site et stade ; combinaison si avancé.\n- Oropharynx HPV+ : meilleur pronostic ; radio ou chimio-radio souvent.\n- Récurrent/métastatique : immunothérapie, cetuximab-chimiothérapie.\n\nGÉRIATRIE :\n- Dysphagie et dénutrition : gastrostomie préventive parfois avant radio.\n- Xerostomie, mucite post-radio : soins bucco-dentaires, hydratation.\n- Déglutition et aspiration : kiné déglutition ; pneumopathie aspiration surveillance.\n- Tabac-alcool : sevrage améliore tolérance et réduit seconds cancers.',
    points_cles: ['Enrouement ou ulcère bouche > 3 sem = ORL', 'HPV+ oropharynx meilleur pronostic', 'Nutrition avant radio cou', 'Second cancer tabac surveiller']
  }
];
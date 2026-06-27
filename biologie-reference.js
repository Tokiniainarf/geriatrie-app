// Référence biologie — Indications, valeurs normales et pièges chez le sujet âgé
const BIOLOGIE_REF = [
  {
    id: 'bio-1',
    examen: 'Numération formule sanguine (NFS) complète',
    indication: 'Fièvre, infection, anémie, saignement, fatigue, dyspnée, chute, dénutrition, surveillance chimiothérapie ou immunosuppresseur, bilan pré-transfusionnel, confusion aiguë (infection occulte), évaluation polyglobulie ou thrombopénie sous anticoagulant/antiagrégant.',
    valeurs_normales: 'Hémoglobine : H 13–17 g/dL, F 12–16 g/dL. GB : 4 000–10 000/mm³ (PN 1 500–7 500). Plaquettes : 150–400 G/L. VGM 80–100 fL, CCMH 32–36 g/dL. Formule : polynucléaires, lymphocytes, monocytes dans les proportions habituelles. Pas de blastes ni anomalies morphologiques majeures.',
    interpretation_chez_sujet_age: 'Anémie fréquente (25–30 % après 85 ans) : toujours rechercher cause (carence fer/B12/folates, hémorragie occulte, inflammation, IRC, myélodysplasie). Leucocytose modérée possible sous corticoïdes ou stress sans infection. Lymphopénie relative à l\'âge et aux immunosuppresseurs : vigilance infections opportunistes. Thrombopénie iatrogène (héparine, chimiothérapie) ou pseudo-thrombopénie (agrégats EDTA) : confirmer sur citrate si doute. VGM bas oriente carence martiale ; VGM élevé : B12/folates ou alcool.',
    pieges: '« NFS normale » n\'exclut pas infection chez le sujet âgé immunosénescent (fièvre absente, CRP parfois retardée). Ne pas attribuer l\'anémie à l\'âge sans bilan étiologique. Confondre hémoconcentration (déshydratation) et polyglobulie vraie. Plaquettes normales avec antiagrégant : ne pas minimiser hémorragie digestive. Réticulocytes et frottis si anémie inexpliquée ou cytoses atypiques.'
  },
  {
    id: 'bio-2',
    examen: 'Ionogramme sanguin (Na+, K+, Cl−, parfois Ca++, Mg++)',
    indication: 'Confusion, chutes, convulsions, arythmie, IC, diurétiques, vomissements/diarrhée, SIADH, déshydratation, hyperhydratation, surveillance IEC/ARA2/spironolactone, douleurs ou crampes, bilan pré-hospitalisation.',
    valeurs_normales: 'Na+ 135–145 mmol/L. K+ 3,5–5,0 mmol/L. Cl− 98–106 mmol/L. Ca++ total 2,20–2,60 mmol/L (corriger si albumine basse). Mg++ 0,70–1,00 mmol/L si dosé.',
    interpretation_chez_sujet_age: 'Hyponatrémie très fréquente (médicaments : thiazides, ISRS, carbamazépine ; SIADH ; polydipsie). Correction lente (< 8–10 mmol/L/24 h) pour éviter myélinolyse. Hypernatrémie souvent iatrogène ou déshydratation sous-jacente chez patient dépendant. Hypokaliémie : diurétiques, laxatifs, alcalose ; hyperkaliémie : IRC, spironolactone, AINS, inhibiteurs de l\'enzyme de conversion. Hypocalcémie : carence vit D, hypoparathyroïdie, hypomagnésémie associée. Hypomagnésémie sous PPI prolongés et alcool.',
    pieges: 'Pseudohyponatrémie si hyperglycémie ou hyperlipidémie (corriger Na). Symptômes neurologiques possibles avec Na « modérément » bas chez le fragile. Ne pas corriger trop vite l\'hyponatrémie chronique. K+ en hémolyse post-prélèvement : faux hyperkaliémie. Ionogramme « normal » avec diurétique récent : risque de déséquilibre latent ; répéter si clinique évocateur.'
  },
  {
    id: 'bio-3',
    examen: 'Fonction rénale — créatininémie et DFG (eGFR CKD-EPI)',
    indication: 'Toute prescription à élimination rénale, IC, déshydratation, IRC connue ou suspectée, avant produit iodé ou gadolinium, avant metformine, AINS, diurétiques, surveillance néphrotoxiques, anémie, hyperkaliémie, oligurie, âge > 65 ans en bilan systématique périodique.',
    valeurs_normales: 'Créatinine : environ 60–110 µmol/L (dépend masse musculaire, sexe). DFG ≥ 60 mL/min/1,73 m² (stades IRC HAS : G3a 45–59, G3b 30–44, G4 15–29, G5 < 15). Clairance mesurée (urinaire 24 h) rare ; eGFR estimée standard.',
    interpretation_chez_sujet_age: 'Créatinine seule souvent « normale » malgré DFG abaissé (sarcopénie : moins de production). Toujours calculer DFG. IRC stade 3 fréquent : adapter posologies (antibiotiques, anticoagulants, analgésiques), éviter néphrotoxiques cumulés. Variations aiguës : déshydratation, AINS, obstruction, sepsis — distinguer AKI sur CKD. Albuminurie/protéinurie complète le pronostic (néphropathie diabétique, HTA).',
    pieges: 'Sous-estimer l\'IRC sur créatinine isolée. Ne pas oublier hydratation avant examens avec contraste si DFG limite. Metformine : seuils selon DFG local. Surdosage dabigatran/rivaroxaban si DFG bas sans adaptation. Créatinine en ascension après chute : rhabdomyolyse à évoquer (CPK, myoglobine). Cystatine C utile si masse musculaire très basse (débat).'
  },
  {
    id: 'bio-4',
    examen: 'Bilan hépatique — ALAT, ASAT, GGT, PAL, bilirubine, albumine',
    indication: 'Ictère, prurit, douleur hypochondre droit, cytolyse ou cholestase fortuite, alcool, statines, paracétamol, antituberculeux, dénutrition/hypoalbuminémie, ascite, œdèmes, bilan pré-chimiothérapie, confusion (encéphalopathie hépatique), surveillance polymédication.',
    valeurs_normales: 'ALAT < 40 UI/L (souvent plus bas chez le sujet âgé). ASAT < 40 UI/L. GGT < 55 UI/L (F), < 65 (H) — élévation fréquente médicamenteuse. PAL 40–130 UI/L. Bilirubine totale < 17 µmol/L. Albumine 35–50 g/L.',
    interpretation_chez_sujet_age: 'Cytolyse modérée souvent médicamenteuse (statines, antibiotiques) ou ischémique (hypotension). Cholestase : lithiase, médicaments, cancer pancréas/biliaire (incidence ↑ avec l\'âge). Albumine basse : dénutrition, inflammation chronique, syndrome néphrotique, cirrhose — marqueur de fragilité et de mauvais pronostic opératoire. Ratio ASAT/ALAT et GGT isolée orientent alcool/médicaments. TP (voir coagulation) complète la fonction hépatique synthétique.',
    pieges: 'GGT seule élevée sans signification hépatique sévère (induction enzymatique). Ne pas manquer hépatite médicamenteuse sur cytolyse « discrète » en polymédication. Ictère obstructif chez le sujet âgé : urgence imagerie (écho). Albumine basse ≠ carence nutritionnelle seule : inflammation (CRP) souvent associée. Paracétamol : toxicité même à doses « thérapeutiques » si dénutrition/alcool.'
  },
  {
    id: 'bio-5',
    examen: 'Bilan thyroïdien — TSH, L-T4 (T4 libre), parfois L-T3',
    indication: 'Fatigue, frilosité, constipation, bradycardie, confusion, dépression, tachycardie, amaigrissement, fibrillation atriale nouvelle, goitre, surveillance lévothyroxine, delirium, chute, dyslipidémie, anémie macrocytaire.',
    valeurs_normales: 'TSH 0,4–4,0 mUI/L (fourchettes laboratoire variables ; débat seuil serré chez le très âgé). T4L 12–22 pmol/L. T3L selon laboratoire.',
    interpretation_chez_sujet_age: 'Hypothyroïdie fréquente (Hashimoto) : formes frustes possibles (TSH haute, T4L basse ou limite). Hyperthyroïdie du sujet âgé souvent apathique (confusion, IC, FA) sans classique hyperactivité. TSH seule souvent suffisante au dépistage ; T4L si TSH anormale ou suspicion clinique forte. iatrogénie : surdosage lévothyroxine (arythmie, ostéoporose). Maladie non thyroïdienne : TSH/T4 peuvent être faussés — interpréter avec clinique.',
    pieges: 'Ne pas ignorer TSH légèrement élevée si symptômes (traitement discuté selon âge et comorbidités). Surtraitement thyroïdien fréquent en EHPAD. Amiodarone et lithium perturbent TSH/T4. Biotine (compléments) : faux TSH/T4 en immunoanalyse. Délai 6–8 semaines après changement de dose pour contrôle TSH.'
  },
  {
    id: 'bio-6',
    examen: 'Glycémie à jeun et HbA1c',
    indication: 'Dépistage et suivi diabète type 2, polyurie-polydipsie, infections répétées, plaies chroniques, confusion, corticothérapie, entéral/parentéral nutrition, hypoglycémie suspectée, bilan métabolique gériatrique.',
    valeurs_normales: 'Glycémie à jeun < 1,26 g/L (7,0 mmol/L) ; pré-diabète 1,10–1,25 g/L. HbA1c < 6,5 % pour diagnostic (objectifs thérapeutiques individualisés : souvent 7–8,5 % chez le fragile). Glycémie capillaire : hypoglycémie < 0,70 g/L.',
    interpretation_chez_sujet_age: 'Diabète type 2 très prévalent ; objectifs moins stricts si polymorbidité, hypoglycémies, espérance de vie limitée (HAS, ADA). HbA1c peut être faussement basse si anémie, hémolyse, IRC, variantes Hb. Hypoglycémies sous sulfamides/insuline : risque majeur de chute et confusion chez le sujet âgé. Hyperglycémie de stress en aigu (infection, chirurgie) : ne pas sur-interpréter sans suivi.',
    pieges: 'Glycémie seule insuffisante si suspicion diabète (HbA1c). Ne pas viser HbA1c < 7 % systématiquement chez le très âgé fragile. Confondre hypoglycémie et AVC/confusion. Corticoïdes : hyperglycémie transitoire vs diabète permanent. Déshydratation : fausse hyperglycémie relative.'
  },
  {
    id: 'bio-7',
    examen: 'Bilan lipidique (cholestérol total, LDL, HDL, triglycérides)',
    indication: 'Dépistage risque cardiovasculaire, surveillance statine, dyslipidémie secondaire (hypothyroïdie, alcool), avant secondaire prévention post-IDM/AVC, évaluation xanthomes, pancréatite aiguë (TG très élevés).',
    valeurs_normales: 'LDL cible selon risque (souvent < 1,0–1,4 g/L en prévention secondaire). HDL > 0,40 g/L (H), > 0,50 (F). TG < 1,50 g/L. CT variable selon guidelines.',
    interpretation_chez_sujet_age: 'Bénéfice statine en prévention secondaire maintenu à tout âge ; primaire : individualiser si > 85 ans et fragilité. LDL seul insuffisant : intégrer HTA, tabac, diabète, statut fonctionnel. TG élevés : alcool, diabète mal équilibré, corticoïdes. Hypocholestérolémie sévère : dénutrition, maladie chronique, mauvais pronostic.',
    pieges: 'Ne pas arrêter statine sans raison chez le sujet âgé à haut risque CV. Prélèvement à jeun 12 h si TG élevés au bilan initial. Myopathie sous statine + polymédication (macrolides, fibrates) : CPK si douleurs. Sous-estimer le risque si LDL « acceptable » avec ATCD CV massifs.'
  },
  {
    id: 'bio-8',
    examen: 'Marqueurs inflammatoires — CRP, VHS (VS), procalcitonine (PCT)',
    indication: 'Fièvre ou suspicion infection, surveillance pneumonie, infection urinaire, prothèse infectée, delirium, chute avec traumatisme, distinction bactérien vs viral (PCT), maladies inflammatoires, suivi réponse thérapeutique.',
    valeurs_normales: 'CRP < 5 mg/L (augmente avec l\'âge et comorbidités chroniques). VHS < 20 mm/h (H), < 30 (F) — moins spécifique, retardée. PCT < 0,25 ng/mL (faible probabilité bactérienne) ; > 0,5–2 selon contexte sévère.',
    interpretation_chez_sujet_age: 'CRP peut rester modérée en infection fruste (immunosénescence, dénutrition). VHS élevée : infection, inflammation, myélome, vascularite — non spécifique. PCT utile en pneumonie et sepsis pour antibiothérapie ; moins performante en infection urinaire basse. CRP élevée chronique : arthrose, nodule, cancer — courbe et clinique. Delirium : CRP normale n\'exclut pas infection urinaire ou pulmonaire.',
    pieges: '« CRP normale » ≠ pas d\'infection chez le très âgé. Sur-interpréter CRP basse sous anti-inflammatoires. PCT non indiquée pour toute fièvre isolée en ville. VHS très élevée isolée : recherche myélome si contexte. Ne pas retarder traitement si clinique évidente malgré marqueurs modestes.'
  },
  {
    id: 'bio-9',
    examen: 'Vitamine B12 et folates sériques',
    indication: 'Anémie macrocytaire, neuropathie périphérique, troubles cognitifs, dépression, glossite, malabsorption, gastrectomie, métformine prolongée, IPP long cours, alcool, végétalisme strict, post-chimiothérapie.',
    valeurs_normales: 'B12 200–900 pg/mL (seuil carence souvent < 200–300 selon laboratoire). Folates > 4 ng/mL. Homocystéine et acide méthylmalonique si B12 limite.',
    interpretation_chez_sujet_age: 'Carence B12 fréquente (achylie gastrique, metformine, IPP). Symptômes neurologiques possibles avec B12 « limite » normale : doser MMA/homocystéine. Folates bas : alcool, mauvaise alimentation ; supplémentation masque hématologie B12. Confusion et chutes : toujours intégrer au bilan si anémie ou neuropathie. Traitement B12 IM ou haute dose orale selon cause.',
    pieges: 'B12 sérique normale avec déficit tissulaire (formes combinées). Folates corrigés sans traiter B12 : risque aggravation neurologique. Ne pas oublier B12 dans tout bilan de démence/delirium prolongé. Cyanocobalamine post-transfusion faussement élevée.'
  },
  {
    id: 'bio-10',
    examen: '25-OH vitamine D',
    indication: 'Chutes, myalgies, ostéoporose, fracture, sarcopénie, dépression saisonnière, CKD, malabsorption, faible ensoleillement, EHPAD, surveillance supplémentation, hyperparathyroïdie secondaire.',
    valeurs_normales: 'Déficit < 20 ng/mL (< 50 nmol/L). Insuffisance 20–30 ng/mL. Cible thérapeutique souvent 30–50 ng/mL (éviter excès > 100). Calcium et PTH associés si carence.',
    interpretation_chez_sujet_age: 'Déficit très fréquent en institution et chez personnes peu mobiles. Contribution aux chutes (force musculaire) et fractures. Supplémentation colecalciferol adaptée au DFG ; calcifédiol si malabsorption. Hypercalcémie rare si doses excessives. Intégrer avec calcium alimentaire et traitement ostéoporose (FRAX).',
    pieges: 'Ne pas doser systématiquement toute personne âgée sans indication (HAS) mais fortement indiqué si fracture/chute/ostéoporose. Confondre 1,25-(OH)2D (rénal) et 25-OH (statut). PTH élevée avec Vit D basse : hypoparathyroïdie secondaire. Surdosage : hypercalcémie, confusion, lithiases.'
  },
  {
    id: 'bio-11',
    examen: 'Ferritine (et bilan martial : fer sérique, CST, transferrine)',
    indication: 'Anémie microcytaire ou normocytaire, fatigue, syndrome inflammatoire avec anémie, saignements digestifs occultes, dénutrition, hémodialyse, suspicion hémochromatose, avant supplémentation fer.',
    valeurs_normales: 'Ferritine 30–300 ng/mL (H), 15–200 (F). Fer sérique, coefficient saturation transferrine 20–45 %. Transferrine 2–3,6 g/L.',
    interpretation_chez_sujet_age: 'Ferritine élevée en inflammation (CRP+) : ne pas exclure carence fer (CST bas, ferritine « normale » trompeuse). Carence fer : saignement digestif à rechercher même sans méléna (cancer colorectal). Ferritine très haute : hémochromatose, hépatopathie, syndrome inflammatoire. Supplémentation orale souvent mal tolérée : fractionner, formes IV si échec ou IRC.',
    pieges: 'Ferritine seule insuffisante si inflammation (ajouter CST). Ne pas donner fer sans explorer saignement chez l\'homme et femme ménopausée. Surdosage fer oral : constipation, interactions. Hémochromatose sous-estimée si ferritine seule sans génotype si contexte.'
  },
  {
    id: 'bio-12',
    examen: 'Coagulation — TP (INR), TCA, fibrinogène, D-dimères (voir bio-19)',
    indication: 'Avant chirurgie ou geste invasif, saignement, ecchymoses, AVK, héparines, DOAC (ecchymoses), suspicion CIVD, sepsis sévère, malnutrition, hépatopathie, thrombose veineuse (D-dimères).',
    valeurs_normales: 'INR 0,9–1,2 (hors AVK). Cible AVK selon indication (2–3 ou 2,5–3,5). TCA ratio 0,8–1,2. Fibrinogène 2–4 g/L. TP > 70 %.',
    interpretation_chez_sujet_age: 'AVK : INR instable fréquent (polymédication, alimentation irrégulière) — suivi rapproché. DOAC : pas d\'INR ; anti-Xa spécifique si urgence. Hypovitaminose K (dénutrition, antibiotiques larges spectre). Fibrinogène élevé en inflammation ; bas en CIVD, hémorragie massive. Allongement TP isolé : déficit vitamine K ou insuffisance hépatique.',
    pieges: 'INR « thérapeutique » avec saignement : ne pas exclure surdosage. Ne pas utiliser INR pour surveiller DOAC. Antiagrégants : TP/INR normaux n\'excluent pas risque hémorragique. Héparine non fractionnée : TCA ; HBPM : anti-Xa si surdosage suspect. Confondre ecchymoses seniles et coagulopathie.'
  },
  {
    id: 'bio-13',
    examen: 'Gaz du sang (artériel ou capillaire) — pH, PaCO2, PaO2, HCO3−, lactates',
    indication: 'Dyspnée, confusion, somnolence, OAP, BPCO, suspicion acidose/alcalose, surveillance O2 ou VNI, sepsis, choc, intoxication médicamenteuse, trouble conscience post-chute, évaluation hypercapnie sous opioïdes.',
    valeurs_normales: 'pH 7,35–7,45. PaCO2 35–45 mmHg. PaO2 > 80 mmHg (air ambiant, âge : PaO2 ≈ 105 − âge/4 approx.). SaO2 > 95 %. HCO3− 22–26 mmol/L. Excès de bases ± 2.',
    interpretation_chez_sujet_age: 'Hypoxémie fréquente sous-estimée si SpO2 seule (nail polish, vasoconstriction). Hypercapnie chronique BPCO : objectifs SpO2 modérés (88–92 %). Acidose métabolique : sepsis, IRC, lactates. Alcalose respiratoire : douleur, anxiété, sepsis précoce. Opioides/benzodiazépines : hypoventilation. Prélèvement artériel douloureux : capillaire acceptable si perfusion périphérique correcte.',
    pieges: 'SpO2 normale avec hypoventilation (hypercapnie). Ne pas sur-oxygéner le BPCO chronique. Échantillon veineux mal étiqueté. Lactates : voir bio-20. Gaz « normal » avec dyspnée : embolie, anémie, déconditionnement possibles.'
  },
  {
    id: 'bio-14',
    examen: 'Examen cytobactériologique des urines (ECBU) avec antibiogramme',
    indication: 'Symptômes urinaires, fièvre sans foyer, confusion aiguë, chute, détérioration fonctionnelle, leucocyturie bandelette, surveillance sonde urinaire, récidive infection urinaire, avant antibiothérapie ciblée si possible.',
    valeurs_normales: 'Culture < 10³ UFC/mL (probable contamination). Significatif : ≥ 10⁵ UFC/mL (ou ≥ 10⁴ si symptômes clairs). Leucocyturie < 10⁴/mL. Absence de germes pathogènes.',
    interpretation_chez_sujet_age: 'Infection urinaire fréquente ; présentation atypique (delirium seul). Bactériurie asymptomatique très fréquente avec sonde ou institution : ne pas traiter sans symptômes (sauf grossesse et avant certaines urologies). E. coli majoritaire ; résistances ↑ (BLSE, entérocoques). Prélèvement propre ou sonde nouveau si possible ; éviter contamination perineale.',
    pieges: 'Traiter ECBU positif sans symptôme chez patient cognitif (surréaction). Bandelette seule insuffisante en récidive ou échec traitement. Antibiogramme obligatoire si hospitalisation récente ou antibiotiques récents. Pyurie sans germe : tuberculose urinaire rare, calcul. Déshydratation : urine concentrée, faux positifs leucocytes.'
  },
  {
    id: 'bio-15',
    examen: 'Hémocultures (2–3 paires, avant antibiothérapie si possible)',
    indication: 'Fièvre, frissons, sepsis, choc septique, endocardite suspectée, infection sur matériel (PAC, prothèse), fièvre nosocomiale, confusion avec signes infectieux, surveillance neutropénie.',
    valeurs_normales: 'Absence de croissance après incubation (généralement 5–7 jours). Si positif : identification germe, antibiogramme, délai positivité.',
    interpretation_chez_sujet_age: 'Bactériémie à germe unique significative ; contaminants (coagulase négatif) fréquents si mauvaise technique. Endocardite : hémocultures sériées, volume suffisant (20 mL/bouteille). Sepsis du sujet âgé : fièvre absente possible, lactates et PCT aident. Prélèvement avant antibiotique sinon sensibilité diminuée ; documenter traitement en cours.',
    pieges: 'Une seule paire insuffisante. Contamination cutanée : répéter si doute. Ne pas retarder antibiotique en choc pour prélèvement si retard > minutes critiques. Germes peu virulents chez immunodéprimé (Candida, Enterococcus) : ne pas minimiser.'
  },
  {
    id: 'bio-16',
    examen: 'Liquide céphalo-rachidien (LCR) — analyse biochimique et cytologie',
    indication: 'Méningite suspectée (fièvre, raideur nuque, photophonie, confusion, convulsions), suspicion méningo-encéphalite herpétique, carcinose méningée, sclérose en plaques (index IgG), hémorragie sous-arachnoïdienne si scanner non contributif, neurosyphilis.',
    valeurs_normales: 'Cellules < 5/mm³, protéines < 0,40 g/L, glucose ≈ 60 % glycémie plasmatique simultanée. LCR clair, sans xanthochromie.',
    interpretation_chez_sujet_age: 'Méningite bactérienne : polynucléose, glucose bas, protéines élevées. Méningite virale : lymphocytes modérés. Confusion majeure : ne pas retarder ponction si pas de signe focal ni HTIC (scanner si immunodéficience, coma, convulsions). Anticoagulation/ thrombopénie : balance risque hémorragique vs diagnostic. Profil méningite tuberculeuse : lymphocytes, protéines très élevées, glucose bas.',
    pieges: 'Raideur nuque absente fréquemment chez le sujet âgé. Ponction après antibiotique : cultures négatives possibles — PCR si suspicion. Confondre ponction traumatique (sang) et SAH (xanthochromie, tubes séquentiels). LCR normal précoce en méningite : répéter si forte suspicion.'
  },
  {
    id: 'bio-17',
    examen: 'Marqueurs tumoraux — PSA, CA-125, ACE (CEA), autres selon contexte',
    indication: 'Suivi cancer prostate traité, surveillance colorectal (ACE), ovarien (CA-125), pas de dépistage populationnel systématique PSA chez le très âgé sans discussion. Symptômes orientés (hématurie, rectorragies, masse).',
    valeurs_normales: 'PSA total < 4 ng/mL (âge-dépendant ; PSA < 2,5 souvent cité si < 70 ans). CA-125 < 35 UI/mL. ACE < 5 ng/mL (non fumeur). Interprétation toujours selon antécédent oncologique.',
    interpretation_chez_sujet_age: 'PSA augmente avec âge, volume prostatique, infections urinaires, sonde. Dépistage PSA individualisé (espérance de vie, comorbidités). ACE et CA-125 non spécifiques : inflammation, IRC, cirrhose. Utilité principale : suivi récidive connue, courbe dynamique. Pas de diagnostic cancer sur marqueur seul.',
    pieges: 'Dépistage PSA systématique chez le fragile > 80 ans souvent inapproprié. Fausse réassurance PSA bas avec cancer localisé. CA-125 élevé isolé : pas d\'exploration ovarienne invasive sans imagerie. Biotine interfère certaines immunoanalyses tumorales.'
  },
  {
    id: 'bio-18',
    examen: 'Troponine ultrasensible (hs-cTn) et peptides natriurétiques (BNP / NT-proBNP)',
    indication: 'Douleur thoracique, dyspnée, syncope, IC aiguë ou décompensée, surveillance IDM, embolie pulmonaire (troponine de strain), sepsis avec dysfonction myocardique, tachycardie inexpliquée.',
    valeurs_normales: 'hs-cTn : selon assay (souvent URL 99e percentile ; valeurs sexe-spécifiques). BNP < 100 pg/mL ; NT-proBNP < 300 pg/mL (seuils âge-dépendants : NT-proBNP < 450 si < 50 ans, < 900 si 50–75, < 1800 si > 75 pour exclusion IC aiguë selon ESC).',
    interpretation_chez_sujet_age: 'Troponine élevée fréquente hors SCA : sepsis, FA rapide, IC, embolie, IRC (élimination réduite). Courbe dynamique (0–3 h) pour SCA. NT-proBNP élevé avec l\'âge et IRC ; seuils diagnostiques IC ajustés. BNP bas si obésité. Troponine normale n\'exclut pas angor instable si clinique forte (ECG, répétition).',
    pieges: 'Une troponine isolée sans cinétique insuffisante pour IDM. Sur-interpréter NT-proBNP très élevé chez le très âgé sans corréler écho/clinique. IRC : préférer BNP parfois moins affecté que NT-proBNP (variable). Ne pas oublier ECG en urgence malgré biomarqueurs.'
  },
  {
    id: 'bio-19',
    examen: 'D-dimères',
    indication: 'Suspicion embolie pulmonaire ou thrombose veineuse profonde (probabilité clinique intermédiaire/faible), exclusion EP si score faible et D-dimères négatifs, pas de dépistage systématique chez le sujet âgé asymptomatique.',
    valeurs_normales: 'D-dimères < 500 ng/mL (FEU) ou selon seuil laboratoire (âge-ajusté proposé : âge × 10 ng/mL après 50 ans dans certaines filières).',
    interpretation_chez_sujet_age: 'D-dimères élevés très fréquents à l\'âge (inflammation, IC, infection, post-chirurgie, hôpitalisation) : valeur négative utile pour exclure EP si probabilité faible/intermédiaire ; positif non spécifique. Seuil ajusté à l\'âge réduit faux positifs. Ne pas demander si probabilité clinique haute (imagerie directe). Anticoagulation en cours : interprétation difficile.',
    pieges: 'D-dimères élevés chez tout patient âgé hospitalisé : ne pas enchaîner scanners sans score Wells. Ignorer ajustement âge conduit à sur-imagerie. EP possible avec D-dimères « modérément » élevés : clinique prime. Confondre avec fibrinogène ou marqueurs inflammatoires non liés.'
  },
  {
    id: 'bio-20',
    examen: 'Lactates sanguins',
    indication: 'Sepsis, choc (toute cause), déshydratation sévère, suspicion ischémie mésentérique ou membre, convulsions prolongées, intoxication (metformine, cyanure), effort majeur, surveillance réanimation, confusion avec hypotension.',
    valeurs_normales: 'Lactate < 2 mmol/L. Hyperlactatémie > 2 ; sévère > 4 mmol/L associée à mauvais pronostic en sepsis.',
    interpretation_chez_sujet_age: 'Élévation en sepsis, hypoperfusion, IRA, métformine (acidose lactique rare). Clearance lactate en réanimation guide remplissage et antibiotiques. Lactate modéré chez le sujet âgé déshydraté : réhydratation et réévaluation. Causes type B (seizures, leucémie) moins fréquentes mais possibles.',
    pieges: 'Prélèvement sans stase (pas de garrot prolongé) : faux élevés. Lactate normal ne exclut pas sepsis débutant. Ne pas oublier source infection si lactate élevé isolé. Métformine + IRC + déshydratation : arrêt metformine et surveillance rapprochée.'
  }
];
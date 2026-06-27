// Effets indésirables — Référence gériatrique (25 molécules courantes)
const EFFETS_INDESIRABLES = [
  {
    id: 'ei-1',
    medicament: 'Paracétamol',
    classe: 'Antalgique / Antipyrétique',
    effets_frequents: 'Rare à dose thérapeutique (< 4 g/j). Troubles digestifs légers, éruption cutanée, réactions d\'hypersensibilité.',
    effets_graves: 'Hépatotoxicité dose-dépendante (surdosage > 4 g/j, alcoolisme, dénutrition, polymédication). Insuffisance hépatique aiguë, cytolyse, cholestase. Nécrose hépatique fulminante en cas de surdosage massif ou association alcool.',
    surveillance: 'Dose totale quotidienne (y compris associations codées). Fonction hépatique si traitement prolongé ou facteurs de risque. Poids corporel (< 50 kg : max 3 g/j).',
    conduite_tenir: 'Antalgique de 1ère ligne chez le sujet âgé. Éviter le surdosage involontaire (Doliprane + Codéol, etc.). En surdosage : N-acétylcystéine en urgence si > 150 mg/kg. Réduire à 2–3 g/j si insuffisance hépatique ou dénutrition.'
  },
  {
    id: 'ei-2',
    medicament: 'Tramadol',
    classe: 'Opioïde faible / Antalgique central',
    effets_frequents: 'Nausées, vomissements, constipation, vertiges, somnolence, céphalées, sécheresse buccale, sueurs, prurit. Confusion et chutes chez le sujet âgé.',
    effets_graves: 'Syndrome sérotoninergique (association ISRS, IRSNA, IMAO). Convulsions (seuil abaissé chez l\'âgé). Dépression respiratoire (surtout avec BZD). Dépendance, syndrome de sevrage. Hypoglycémie.',
    surveillance: 'Niveau de conscience, fréquence respiratoire, transit, douleur, chutes. Rechercher association ISRS/tramadol. DFG (éviter si < 30 mL/min).',
    conduite_tenir: 'Éviter si possible après 75 ans (critères Beers). Préférer paracétamol puis morphine faible dose si échec. Laxatif préventif. Ne pas associer IMAO. Réduire dose de 50 % si IR ou hépatopathie. Alternative si sérotoninergique : morphine ou oxycodone.'
  },
  {
    id: 'ei-3',
    medicament: 'Morphine',
    classe: 'Opioïde fort',
    effets_frequents: 'Constipation (++), nausées, vomissements, somnolence, confusion, prurit, rétention urinaire, hypotension orthostatique, myosis.',
    effets_graves: 'Dépression respiratoire, coma. Accumulation du métabolite actif M6G en insuffisance rénale (sédation prolongée, coma). Syndrome malin des neuroleptiques rare. Dépendance physique.',
    surveillance: 'Échelle de douleur, conscience, FR, SpO2, transit (laxatif systématique), diurèse. DFG : éviter morphine si DFG < 30 ; préférer fentanyl ou oxycodone.',
    conduite_tenir: 'Start low, go slow (0,05–0,1 mg/kg). Anti-émétique si nausées. Laxatif osmotique + stimulant. Ne jamais associer BZD sans surveillance étroite. Antidote : naloxone. Réévaluer indication et dose régulièrement (déprescription si douleur chronique stabilisée).'
  },
  {
    id: 'ei-4',
    medicament: 'Amoxicilline',
    classe: 'Antibiotique — Pénicilline',
    effets_frequents: 'Diarrhée, nausées, candidose, éruption maculopapuleuse (surtout si mononucléose ou allongement EBV).',
    effets_graves: 'Colite à Clostridioides difficile (diarrhée sanglante, fièvre). Réactions anaphylactiques, angio-œdème. Hépatite cholestatique ou mixte. Syndrome DRESS, Stevens-Johnson (rare).',
    surveillance: 'Transit, signes d\'allergie, fonction hépatique si traitement > 10 j. Adapter dose au DFG. Vérifier allergie pénicilline documentée.',
    conduite_tenir: 'Traitement de choix pour nombreuses infections chez l\'âgé. Probiotiques discutés en prévention C. difficile. Arrêter et traiter C. difficile si diarrhée profuse. En cas d\'éruption : distinguer allergie vraie vs virale. Surveiller INR si warfarine.'
  },
  {
    id: 'ei-5',
    medicament: 'Ciprofloxacine',
    classe: 'Antibiotique — Fluoroquinolone',
    effets_frequents: 'Troubles digestifs, candidose, insomnie, céphalées, vertiges, confusion, troubles mnésiques chez le sujet âgé.',
    effets_graves: 'Allongement QT, torsades de pointes. Tendinopathie et rupture tendon d\'Achille (risque ↑ avec corticoïdes, > 60 ans). Neuropathie périphérique. Colite à C. difficile. Convulsions (seuil abaissé). Hypoglycémie sévère (surtout avec antidiabétiques).',
    surveillance: 'ECG si facteurs de risque QT. Signes tendineux. Glycémie si diabète. DFG pour adaptation posologique. Éviter si possible chez PA (HAS, Beers).',
    conduite_tenir: 'Réserver aux situations sans alternative (multirésistance, pneumopathie sévère ciblée). Préférer amoxicilline ou autre β-lactamine. Arrêter si douleur tendineuse. Éviter association corticoïdes systémiques. Hydratation, pas d\'antiacides/H2 dans les 2 h.'
  },
  {
    id: 'ei-6',
    medicament: 'Amlodipine',
    classe: 'Inhibiteur calcique — Dihydropyridine',
    effets_frequents: 'Œdèmes des chevilles (dose-dépendants), flush, céphalées, vertiges, fatigue. Hypotension orthostatique et chutes chez le sujet âgé.',
    effets_graves: 'Hypotension sévère, syncope. Angor paradoxal (rare). Aggravation insuffisance cardiaque si début brutal sans association IEC/BB.',
    surveillance: 'PA couchée et debout, œdèmes, poids, signes d\'IC. Fonction rénale si association IEC.',
    conduite_tenir: 'Débuter à 2,5–5 mg/j. Surélever membres inférieurs si œdèmes. Limiter simvastatine à 20 mg/j (interaction CYP3A4). Ne pas arrêter brutalement si angor stable. Alternative si œdèmes intolérables : autre classe antihypertensive.'
  },
  {
    id: 'ei-7',
    medicament: 'Furosémide',
    classe: 'Diurétique de l\'anse',
    effets_frequents: 'Hypokaliémie, hyponatrémie, déshydratation, hypotension orthostatique, crampes, hyperuricémie, hyperglycémie, dyslipidémie.',
    effets_graves: 'Insuffisance rénale fonctionnelle, déshydratation sévère, troubles du rythme (hypokaliémie), goutte aiguë, surdité (doses IV élevées), thrombose (hémoconcentration).',
    surveillance: 'Poids quotidien, PA, ionogramme (Na+, K+, créatinine) H48 puis régulier, diurèse, signes de congestion/déshydratation.',
    conduite_tenir: 'Dose minimale efficace. Supplément potassium si K+ bas ou association digoxine/IEC. Éviter AINS (↓ effet diurétique, IRA). Adapter si goutte ou diabète mal équilibré. Éducation sur signes d\'alarme (vertiges, crampes, oligurie).'
  },
  {
    id: 'ei-8',
    medicament: 'Spironolactone',
    classe: 'Diurétique épargneur de potassium — Antagoniste aldostérone',
    effets_frequents: 'Hyperkaliémie, gynécomastie, troubles libido, crampes, nausées, somnolence.',
    effets_graves: 'Hyperkaliémie sévère (arrêt cardiaque), surtout avec IEC/ARA2, IR, déshydratation. Acidose métabolique. Agranulocytose (rare).',
    surveillance: 'K+, créatinine, Na+ : J3–J7 après introduction ou modification, puis mensuel si association IEC. PA, signes hyperkaliémie (faiblesse, paresthésies, bradycardie).',
    conduite_tenir: 'Éviter trithérapie IEC + ARA2 + spironolactone. Dose faible en IC (25 mg/j). Arrêter temporairement si K+ > 5,5 ou déshydratation. Contre-indiqué si K+ initial élevé ou DFG < 30 sans surveillance rapprochée.'
  },
  {
    id: 'ei-9',
    medicament: 'Digoxine',
    classe: 'Glycoside cardiotonique',
    effets_frequents: 'Nausées, vomissements, anorexie, céphalées, fatigue, troubles visuels (vision jaune), confusion chez le sujet âgé.',
    effets_graves: 'Toxicité digitale : arythmies (extrasystoles, BAV, tachycardie jonctionnelle, FA accélérée). Index thérapeutique étroit. Majorée par hypokaliémie, hypomagnésémie, hypothyroïdie, IR, association amiodarone.',
    surveillance: 'Dosage plasmatique (cible 0,5–1 ng/mL chez PA ; 0,5–2 ng/mL classique). ECG, K+, Mg2+, créatinine, thyroïde. Signes digestifs et visuels = alerte.',
    conduite_tenir: 'Dose de charge rarement indiquée chez PA ; entretien 0,0625–0,125 mg/j. Corriger hypokaliémie avant/après. Réduire dose de 50 % si amiodarone. Arrêt si toxicité ; Fab antidigoxine si gravité. Réévaluer indication (mortalité non réduite en FA, bénéfice symptomatique en IC).'
  },
  {
    id: 'ei-10',
    medicament: 'Sertraline',
    classe: 'Antidépresseur — ISRS',
    effets_frequents: 'Nausées, diarrhée, insomnie ou somnolence, céphalées, sécheresse buccale, dysfonction sexuelle, anxiété initiale, tremblements.',
    effets_graves: 'Hyponatrémie / SIADH (fréquent chez PA, surtout femme, polymédication). Syndrome sérotoninergique (tramadol, IMAO, lithium). Saignements (GI, ecchymoses) avec antiagrégants/AVK. Idées suicidaires en début de traitement. Allongement QT (rare).',
    surveillance: 'Na+ à J7 puis M1 si sujet âgé. Humeur, idéation suicidaire premières semaines. INR/saignements si warfarine. Interactions sérotoninergiques.',
    conduite_tenir: 'ISRS de 1ère ligne : début 25–50 mg/j. Corriger hyponatrémie (arrêt, restriction hydrique, hospitalisation si < 125). Éviter tramadol et IMAO. Réponse attendue 4–6 semaines. Sevrage progressif si arrêt.'
  },
  {
    id: 'ei-11',
    medicament: 'Mirtazapine',
    classe: 'Antidépresseur — Antagoniste α2 / 5-HT2/3',
    effets_frequents: 'Somnolence, prise de poids, augmentation appétit, sécheresse buccale, constipation, œdèmes, vertiges.',
    effets_graves: 'Agranulocytose (rare mais grave). Syndrome sérotoninergique (associations). Convulsions (rare). Hyponatrémie / SIADH. Élévation transaminases.',
    surveillance: 'NFS si fièvre, angine, signes infectieux. Poids, glycémie (diabète). Na+ comme autres ISRS-like. Somnolence et chutes.',
    conduite_tenir: 'Intérêt gériatrique : anorexie, insomnie, anxiété (15 mg plus sédatif que 30 mg). Prise le soir. Surveiller chutes. Alternative si échec ISRS. Pas d\'IMAO. Sevrage progressif.'
  },
  {
    id: 'ei-12',
    medicament: 'Halopéridol',
    classe: 'Neuroleptique typique — Antipsychotique',
    effets_frequents: 'Sédation, extrapyramidal (akathisie, rigidité, tremblement), constipation, sécheresse buccale, hypotension orthostatique.',
    effets_graves: 'Syndrome malin des neuroleptiques (hyperthermie, rigidité, CPK↑). Allongement QT, torsades. Agranulocytose. Convulsions. Confusion, chutes. Mortalité ↑ chez PA avec démence (AVC, infections). Contre-indiqué suspicion DLB (hypersensibilité extrapyramidal).',
    surveillance: 'ECG avant et si dose élevée. Signes extrapyramidaux, température, CPK si rigidité. Chutes, PA. Utilisation la plus courte possible.',
    conduite_tenir: 'Réservé agitation sévère à risque après échec non pharmacologique. Dose minimale (0,5–1 mg). Éviter en démence si possible (risque mortalité). Préférer quétiapine faible dose ou risperidone avec prudence. Jamais en 1ère intention confusion aiguë sans diagnostic.'
  },
  {
    id: 'ei-13',
    medicament: 'Lorazépam',
    classe: 'Benzodiazépine — Anxiolytique / Hypnotique',
    effets_frequents: 'Somnolence, confusion, amnésie antérograde, ataxie, chutes, troubles de l\'équilibre. Tolérance et dépendance.',
    effets_graves: 'Dépression respiratoire (surtout avec opioïdes — association à éviter). Chutes et fractures. Delirium. Syndrome de sevrage (convulsions) si arrêt brutal. Conduite automobile dangereuse.',
    surveillance: 'Chutes, cognition, risque suicidaire, association opioïdes/alcool. Durée < 4 semaines si possible.',
    conduite_tenir: 'Critères Beers : éviter en 1ère intention insomnie/anxiété chronique. Déprescription progressive (réduction 10–25 % / 1–2 semaines). Préférer TCC, hygiène du sommeil. Si sevrage alcool : protocole structuré. Demi-vie courte mais métabolites actifs chez PA.'
  },
  {
    id: 'ei-14',
    medicament: 'Diazépam',
    classe: 'Benzodiazépine — Anxiolytique / Myorelaxant / Anticonvulsivant',
    effets_frequents: 'Sédation, confusion, chutes, ataxie, amnésie, dysarthrie. Accumulation (demi-vie longue, métabolites actifs) chez le sujet âgé.',
    effets_graves: 'Dépression respiratoire (opioïdes, alcool). Chutes, fractures, delirium. Dépendance physique et psychique. Sevrage convulsif si arrêt brutal.',
    surveillance: 'Sédation, chutes, cognition. Éviter association opioïdes. Durée minimale.',
    conduite_tenir: 'Éviter en traitement chronique chez PA (Beers). Privilégier lorazépam ou oxazépam si BZD indispensable (crise convulsive, sevrage alcool). Déprescription lente. Pas de renouvellement automatique.'
  },
  {
    id: 'ei-15',
    medicament: 'Metformine',
    classe: 'Antidiabétique — Biguanide',
    effets_frequents: 'Troubles digestifs (diarrhée, nausées, ballonnements), goût métallique, diminution appétit. Fréquents en début, souvent transitoires.',
    effets_graves: 'Acidose lactique (rare, mortalité élevée) : IR, déshydratation, insuffisance cardiaque, sepsis, alcool, produit de contraste iodé. Carence B12 à long terme.',
    surveillance: 'DFG (contre-indiqué si < 30 ; réduction si 30–45). Créatinine avant scanner iodé. HbA1c, glycémie. B12 si traitement prolongé. Signes acidose (dyspnée, douleurs abdominales).',
    conduite_tenir: '1ère ligne diabète type 2 si DFG OK. Arrêt 48 h avant et après contraste iodé si DFG limite. Cible HbA1c assouplie chez PA fragile (7–8 %). Hydratation. Éviter alcool excessif. Reprendre après contrôle créatinine.'
  },
  {
    id: 'ei-16',
    medicament: 'Gliclazide',
    classe: 'Antidiabétique — Sulfamide hypoglycémiant',
    effets_frequents: 'Hypoglycémie (++ chez PA : confusion, chutes, coma). Prise de poids, nausées, éruption cutanée.',
    effets_graves: 'Hypoglycémie sévère prolongée (demi-vie longue forme LP). Réactions disulfirame avec alcool. Hépatotoxicité, agranulocytose (rares).',
    surveillance: 'Glycémie capillaire régulière, HbA1c, signes neuroglycopéniques. Éducation patient/aidant. Adapter si DFG < 30.',
    conduite_tenir: 'Start low (30 mg LP). Préférer metformine ou DPP4 si hypoglycémies. Éviter si PA fragile, dénutrition, démence sans surveillance. Traiter hypoglycémie : sucre oral, glucagon IM si inconscient. Réduire dose si jeûne ou infection.'
  },
  {
    id: 'ei-17',
    medicament: 'Insuline',
    classe: 'Antidiabétique — Hormone pancréatique',
    effets_frequents: 'Hypoglycémie, prise de poids, lipodystrophie au site d\'injection, œdèmes (début traitement).',
    effets_graves: 'Hypoglycémie sévère (coma, décès). Réactions allergiques locales ou systémiques (rare). Hypokaliémie si correction hyperglycémie rapide.',
    surveillance: 'Glycémie capillaire, HbA1c, schéma alimentaire, activité. Éducation technique injection, rotation sites. DFG (accumulation si IR — préférer analogues).',
    conduite_tenir: 'Indispensable diabète type 1 et souvent type 2 avancé. Analogues à action prolongée souvent mieux tolérés chez PA. Objectifs glycémiques individualisés (éviter hypoglycémies). Plan d\'action hypoglycémie. Simplifier schéma (2 injections max si possible).'
  },
  {
    id: 'ei-18',
    medicament: 'Warfarine',
    classe: 'Anticoagulant oral — Antagoniste vitamine K',
    effets_frequents: 'Ecchymoses, épistaxis, saignements gingivaux. Nausées rares.',
    effets_graves: 'Hémorragie majeure (intracrânienne, digestive). Nécrose cutanée (rare, déficit protéine C). Embolies chlesterol (syndrome pied violet). Interactions médicamenteuses et alimentaires nombreuses.',
    surveillance: 'INR régulier (cible selon indication). Hémoglobine si saignement. Recherche interactions à chaque nouvelle prescription. Éducation alimentation (vitamine K stable).',
    conduite_tenir: 'Préférer AOD chez PA si FA (moins interactions). Si warfarine : carnet, dose stable, éviter oméprazole+clopidogrel sans raison. Antidote : vitamine K lente, PPSB si hémorragie sévère. Simplifier polymédication pour stabiliser INR.'
  },
  {
    id: 'ei-19',
    medicament: 'Clopidogrel',
    classe: 'Antiagrégant plaquettaire — Inhibiteur P2Y12',
    effets_frequents: 'Hématomes, épistaxis, dyspepsie, diarrhée, éruption cutanée.',
    effets_graves: 'Hémorragie digestive, intracrânienne (surtout avec AAS, AVK, AINS). Thrombopénie thrombotique (TTP, rare). Syndrome DRESS. Efficacité ↓ si métaboliseur CYP2C19 lent ou oméprazole.',
    surveillance: 'Signes hémorragiques. Hémoglobine si saignement prolongé. Durée selon indication (SCA, stent, AVC).',
    conduite_tenir: 'Association AAS selon protocole cardiovasculaire (durée limitée). IPP si risque GI (pantoprazole plutôt qu\'oméprazole). Arrêt 5–7 j avant chirurgie élective si possible. Ne pas arrêter sans avis cardiologique si stent récent.'
  },
  {
    id: 'ei-20',
    medicament: 'Oméprazole',
    classe: 'Inhibiteur de la pompe à protons (IPP)',
    effets_frequents: 'Céphalées, diarrhée, constipation, flatulences, nausées. Fractures osseuses (usage prolongé), hypomagnésémie.',
    effets_graves: 'Infections digestives (C. difficile), pneumonie communautaire (association discutée). Carence B12, fer, magnésium. Néphrite interstitielle aiguë. Interaction clopidogrel (↓ activation).',
    surveillance: 'Indication réévaluée régulièrement (pas de traitement perpétuel sans raison). Mg2+, B12 si longue durée. Signes fracture, diarrhée infectieuse.',
    conduite_tenir: 'Durée minimale efficace. Dépister et traiter H. pylori si ulcère. Préférer pantoprazole si clopidogrel indispensable. Essai d\'arrêt après cicatrisation. Critères Beers : risque iatrogénie si sans indication claire.'
  },
  {
    id: 'ei-21',
    medicament: 'Lévothyroxine',
    classe: 'Hormone thyroïdienne — T4',
    effets_frequents: 'Symptômes hyperthyroïdiens si surdosage : palpitations, tremblements, insomnie, amaigrissement, diarrhée, intolérance chaleur.',
    effets_graves: 'Crise thyréotoxique (rare, surdosage ou interaction). Angor, FA, ostéoporose accélérée si excès prolongé. Fractures chez PA si surtraitement.',
    surveillance: 'TSH (objectif selon âge : 0,5–4 ou plage assouplie si > 70 ans et cardiopathie). T4L si doute. PA, pouls. Interactions absorption (calcium, fer, IPP — espacer 4 h).',
    conduite_tenir: 'Dose souvent plus basse chez PA avec cardiopathie (début 25 µg/j). Augmentation progressive 4–6 semaines. Ne pas arrêter sans avis. Un seul changement de marque à la fois (bioéquivalence).'
  },
  {
    id: 'ei-22',
    medicament: 'Atorvastatine',
    classe: 'Hypolipémiant — Statine',
    effets_frequents: 'Myalgies, crampes, troubles digestifs, céphalées, insomnia. Élévation transaminases modérée.',
    effets_graves: 'Rhabdomyolyse (douleur musculaire intense, CPK très élevées, IRA). Hépatite cytolytique. Diabète incident (risque faible). Interaction amlodipine : max 20 mg atorvastatine.',
    surveillance: 'CPK si myalgies. ASAT/ALAT avant puis si symptômes. Cible LDL selon risque CV. DFG (pas d\'ajustement majeur).',
    conduite_tenir: 'Bénéfice CV chez PA à haut risque. Arrêter temporairement si CPK > 10N ou myalgies incapacitantes. Préférer pravastatine/rosuvastatine si polymédication CYP. Éviter jus pamplemousse. Réévaluer indication si fin de vie, fragilité extrême.'
  },
  {
    id: 'ei-23',
    medicament: 'Donépézil',
    classe: 'Antidémence — Inhibiteur de la cholinestérase',
    effets_frequents: 'Nausées, vomissements, diarrhée, crampes abdominales, anorexie, insomnia, fatigue, rêves vivants.',
    effets_graves: 'Bradycardie, syncope, convulsions. Troubles du rythme. Saignements GI. Aggravation obstructive pulmonaire. Syndrome malin des neuroleptiques si association neuroleptique.',
    surveillance: 'Poids, transit, FC. Efficacité clinique modeste : réévaluer tous les 6–12 mois (arrêt si absence bénéfice ou effets indésirables). Pas d\'anticholinergiques concomitants.',
    conduite_tenir: 'Indication maladie Alzheimer légère à modérée. Start 5 mg le soir, titration lente. Prendre après repas. Arrêter si intolérance ou pas d\'amélioration documentée. Contre-indiqué association anticholinergiques (amitriptyline, etc.).'
  },
  {
    id: 'ei-24',
    medicament: 'Rivastigmine',
    classe: 'Antidémence — Inhibiteur cholinestérase (central et périphérique)',
    effets_frequents: 'Nausées, vomissements, diarrhée, anorexie, vertiges, somnolence. Effets cholinergiques périphériques plus marqués qu\'avec donépézil.',
    effets_graves: 'Bradycardie, convulsions, saignements GI, déshydratation par vomissements. Aggravation asthme/BPCO. Patch : réactions cutanées locales.',
    surveillance: 'Poids, hydratation, FC. Forme patch : rotation site, surveillance cutanée. Réévaluation bénéfice/risk périodique.',
    conduite_tenir: 'Alzheimer et démence à corps de Lewy (prudence neuroleptiques). Patch souvent mieux toléré digestive. Débuter dose minimale. Arrêter si dénutrition par effets GI. Éviter anticholinergiques.'
  },
  {
    id: 'ei-25',
    medicament: 'Prednisone',
    classe: 'Corticostéroïde — Anti-inflammatoire systémique',
    effets_frequents: 'Hyperglycémie, prise de poids, insomnie, agitation, dyspepsie, rétention hydrosodée, ecchymoses, myopathie proximale, peau fragile.',
    effets_graves: 'Infections masquées ou aggravées, delirium, psychose cortisonique, ostéoporose, fractures, cataracte, glaucome, insuffisance surrénalienne si arrêt brutal. Tendinopathie si + fluoroquinolone.',
    surveillance: 'Glycémie, PA, poids, signes infection, densité osseuse si longue durée. Calcium, vitamine D, bisphosphonate si critères. Protection gastrique si AINS ou antécédent ulcère.',
    conduite_tenir: 'Dose minimale, durée la plus courte. Titration descendante lente si > 3 semaines. Éviter arrêt brutal. Vaccinations à jour. Prévenir chutes (myopathie). Association FQ déconseillée chez PA.'
  }
];
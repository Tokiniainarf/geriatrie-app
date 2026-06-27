// Urgences gériatriques — Référence rapide (20 situations critiques)
// Champs : signes d'alerte, bilan immédiat, conduite d'urgence, surveillance, critères d'hospitalisation
const URGENCES_GERIATRIE = [
  {
    id: 'ug-chute-grave',
    urgence: 'Chute grave',
    signes_alerte: 'Chute avec traumatisme crânien (anticoagulation, antiplaquettaires), perte de connaissance même brève, céphalées, vomissements, déficit neurologique focal, douleur hanche/poignet/rachis, impotence fonctionnelle, déformation, hématome expansif, antécédent d\'ostéoporose ou fracture récente, incapacité à se relever > 1 h, confusion post-chute.',
    bilan_immédiat: 'Constantes (PA couché/debout si syncope suspectée), GCS, glycémie capillaire, ECG si syncope ou palpitations. Examen neurologique complet, recherche fracture (hanche, poignet, rachis). Radio poignet/hanche selon clinique ; TDM crânien si traumatisme crânien + anticoagulant ou GCS < 15 ou vomissements/déficit. NFS, plaquettes, TP/INR si anticoagulation. Ionogramme si confusion associée.',
    conduite_urgence: '1. Immobilisation douloureuse, analgésie (paracétamol ± morphine titrée). 2. Ne pas mobiliser si suspicion fracture hanche/rachis avant imagerie. 3. Si traumatisme crânien sous AVK/AOD : protocole neurochirurgical local (TDM urgent, réversion si hémorragie). 4. Fracture hanche : orthopédie, analgésie, prévention delirium (éviter BZD), antithrombose différée selon chirurgie. 5. Rechercher cause de chute (syncope, delirium, infection, hypotension orthostatique). 6. Évaluation risque chute à l\'admission (TUG, antécédents).',
    surveillance: 'Neurologique H1 puis q4h si traumatisme crânien ; PA, SpO2, douleur EVA. Surveillance confusion (CAM), diurèse, saignement si anticoagulation. Réévaluation mobilité et autonomie avant sortie.',
    criteres_hospitalisation: 'Fracture (surtout hanche), traumatisme crânien sous anticoagulant, GCS < 15 ou déficit focal, hémorragie intracrânienne, impossibilité de marche sécurisée, delirium post-chute, polypathologie sévère sans aidant fiable, suspicion syncope non élucidée, douleur non contrôlée en ambulatoire.'
  },
  {
    id: 'ug-confusion-aigue',
    urgence: 'Confusion aiguë (delirium)',
    signes_alerte: 'Début brutal (heures-jours), fluctuations attention/conscience, désorientation, inattention, agitation ou hypoactivité (léthargie souvent sous-diagnostiquée), hallucinations, troubles sommeil, aggravation nocturne. Chez le sujet âgé : fièvre absente possible malgré infection sévère.',
    bilan_immédiat: 'CAM ou 4AT. Glycémie capillaire, SpO2, température. NFS, CRP, ionogramme, créatinine, urée, calcémie, TSH si non récente, BU/ECBU. ECG. Recherche focalité neurologique ; TDM cérébral si traumatisme, déficit focal, chute sans cause, ou absence d\'amélioration à 48-72 h. Revue médicamenteuse (BZD, anticholinergiques, opioïdes). Recherche douleur, rétention urinaire, constipation.',
    conduite_urgence: '1. Traiter la cause en priorité (antibiothérapie infection, hydratation, sonde urinaire si rétention, désimpaction, correction hypoxie/hypoglycémie, arrêt médicament délétère). 2. Mesures non pharmacologiques : orientation (horloge, famille), lunettes/appareils auditifs, mobilisation, sommeil protégé. 3. Analgésie si douleur. 4. Antipsychotique faible dose courte durée uniquement si danger pour soi/autrui (halopéridol 0,5-1 mg) ; CI neuroleptiques si corps de Lewy. 5. Pas de contention ni BZD en première intention.',
    surveillance: 'Niveau de conscience et CAM 2-3 fois/jour ; constantes, diurèse, apports hydriques. Réponse au traitement étiologique sous 24-72 h. Surveillance effets secondaires neuroleptiques (QT, EPS).',
    criteres_hospitalisation: 'Cause non identifiée ou non traitable en ambulatoire, agitation mettant en danger, dénutrition/déshydratation sévère, hypoxie, sepsis, AVC suspect, absence d\'aidant ou environnement non sécurisé, persistance confusion > 48 h sans amélioration, polypathologie nécessitant monitoring.'
  },
  {
    id: 'ug-fievre-sujet-age',
    urgence: 'Fièvre du sujet âgé',
    signes_alerte: 'Température ≥ 38 °C ou hypothermie < 36 °C (signe de gravité). Tachycardie, hypotension, confusion, oligurie, dyspnée, douleur localisée (thorax, abdomen, urinaire), frissons, altération état général sans foyer évident. Absence de fièvre ne exclut pas sepsis.',
    bilan_immédiat: 'Hémocultures x2 avant antibiothérapie si possible, ECBU, BU, NFS, CRP, procalcitonine, lactates, ionogramme, créatinine, bilan hépatique, gaz du sang si détresse. Rx thorax. Échographie vésicale/reinale si suspicion urinaire. Recherche escarre, infection catheter, pneumopathie d\'inhalation.',
    conduite_urgence: '1. Remplissage NaCl 0,9 % 250-500 mL sur 30 min si hypotension ou oligurie (réévaluer PA, diurèse, surcharge). 2. Antibiothérapie probabiliste dans l\'heure selon foyer : communautaire respiratoire (amoxicilline-acide clavulanique ± macrolide) ou urinaire (selon résistance locale) ou abdominal si suspicion. 3. Adapter doses à la fonction rénale. 4. Antipyrétique si inconfort (paracétamol). 5. Oxygène si SpO2 < 94 %. 6. Noradrénaline si choc persistant malgré remplissage (MAP cible 65-75).',
    surveillance: 'Constantes q1-4h selon gravité, diurèse, lactates si sepsis, CRP/PCT à 48 h, efficacité antibiotique. Réévaluation foyer infectieux. Surveillance iatrogénie (surcharge, néphrotoxicité).',
    criteres_hospitalisation: 'Signes de sepsis ou choc, SpO2 basse, déshydratation, confusion, DFG < 30, polypathologie, échec traitement oral, suspicion pneumonie sévère, pyélonéphrite, endocardite, absence suivi à domicile.'
  },
  {
    id: 'ug-douleur-ingerable',
    urgence: 'Douleur ingérable',
    signes_alerte: 'EVA ≥ 7/10 ou douleur persistante malgré palier 1, retentissement fonctionnel (impossibilité mobilisation), agitation, tachycardie, hypertension, confusion secondaire à la douleur, suspicion ischémie aiguë, fracture, occlusion, colique néphrétique, zona ophthalmicus.',
    bilan_immédiat: 'Localisation, mécanisme, chronologie. Examen ciblé (abdomen, membre, rachis, articulation). ECG si douleur thoracique/atypique. Radio/CT selon suspicion. NFS si infection, iono, créatinine avant AINS/opioïdes répétés. Recherche cause gériatrique : fracture occulte, ischémie membre, hernie incarcerée, rétention urinaire douloureuse.',
    conduite_urgence: '1. Paracétamol systématique (1 g x4/j max selon foie). 2. Palier 2 : tramadol ou opioïde faible dose titrée (morphine 0,1 mg/kg SC/IV fractionnée). 3. Palier 3 si échec : morphine titration IV lente, voie transdermique en relais si stable. 4. Traiter cause (immobilisation fracture, chirurgie, antibiotique, dérivation urinaire). 5. Éviter BZD pour « calmer » ; prévenir constipation (laxatif osmotique), delirium (surveillance CAM). 6. Adapter doses si IRC, BPCO (surveillance respiration).',
    surveillance: 'EVA q1-4h, conscience, FR, SpO2 sous opioïdes, nausées, constipation, rétention urinaire. Réévaluation cause sous 24 h.',
    criteres_hospitalisation: 'Douleur non contrôlée en ambulatoire, cause nécessitant chirurgie ou monitoring (IDM, occlusion, ischémie), fracture, infection sévère, titration opioïde IV, absence aidant pour surveillance nocturne, décompensation comorbidités.'
  },
  {
    id: 'ug-deshydratation-severe',
    urgence: 'Déshydratation sévère',
    signes_alerte: 'Soif intense, muqueuses sèches, pli cutané persistant, oligurie, hypotension orthostatique ou assise, tachycardie, confusion, hypernatrémie ou hyponatrémie, créatinine élevée, prise médicamenteuse diurétique récente, diarrhée/vomissements, canicule, refus alimentaire prolongé.',
    bilan_immédiat: 'Ionogramme (Na, K), urée, créatinine, osmolalité si hypernatrémie, glycémie, calcémie. Poids si possible (comparaison habituel). BU. Évaluation volémie clinique. Recherche cause (infection, iatrogénie, dysphagie, delirium).',
    conduite_urgence: '1. Voie veineuse, NaCl 0,9 % ou Ringer selon iono ; débit adapté (souvent 500 mL-1 L sur 1-2 h chez sujet fragile, réévaluer surcharge cardiaque). 2. Hypernatrémie : réhydratation lente (corriger Na < 10-12 mmol/L/24 h). 3. Hyponatrémie hypovolémique : remplissage isotonique. 4. Traiter cause (arrêt diurétique temporaire, antiémétique, antibiotique). 5. Réintroduction orale progressive dès amélioration. 6. Thiamine si dénutrition ou alcoolisme (prévention encéphalopathie de Wernicke).',
    surveillance: 'PA, FC, diurèse horaire, Na q6-12h si trouble sodique, auscultation poumons (OAP iatrogène), poids quotidien. Surveillance syndrome de renutrition si dénutrition associée (P, Mg, K).',
    criteres_hospitalisation: 'Confusion, Na < 125 ou > 155 mmol/L, insuffisance rénale aiguë, hypotension persistante, vomissements empêchant réhydratation orale, décompensation cardiaque nécessitant monitoring, absence aidant, cause non résolue.'
  },
  {
    id: 'ug-hypoglycemie',
    urgence: 'Hypoglycémie',
    signes_alerte: 'Glycémie < 0,70 g/L (< 3,9 mmol/L) ou symptômes compatibles (sueurs, tremblements, confusion, agitation, coma, convulsions, déficit focal mimant AVC). Fréquent sous sulfamides, insuline, jeûne, infection, insuffisance rénale.',
    bilan_immédiat: 'Glycémie capillaire immédiate (ne pas attendre labo). Glycémie veineuse, iono, créatinine. Recherche cause : surdosage antidiabétique, repas sauté, alcool, sepsis, insuffisance surrénale. ECG si palpitations.',
    conduite_urgence: '1. Si conscient et peut avaler : 15 g glucose oral (3 morceaux sucre ou jus), réévaluer à 15 min. 2. Si inconscient ou IV : glucose 30 % 30-50 mL IV en bolus, perfusion glucose 10 % si besoin. 3. Glucagon 1 mg IM/SC si pas d\'accès veineux. 4. Corriger cause (réduire/arrêter hypoglycémiant, traiter infection). 5. Surveillance 24 h si sulfamide longue durée ou insuline (risque récidive). 6. Ne pas libérer sans surveillance si épisode sévère ou récidivant.',
    surveillance: 'Glycémie capillaire H1, H2, H4, H8 puis avant repas si insuline. Conscience, signes neuro. Éducation patient/aidant sur prévention.',
    criteres_hospitalisation: 'Coma, convulsions, épisode sévère récidivant, incapacité à s\'alimenter, cause non corrigée, vivre seul sans aidant fiable, sulfamide ou insuline nécessitant réajustement et surveillance, confusion persistante post-critique.'
  },
  {
    id: 'ug-hyperglycemie',
    urgence: 'Hyperglycémie (acidocétose / état hyperosmolaire)',
    signes_alerte: 'Glycémie > 2,50-3 g/L, soif, polyurie, déshydratation, confusion, somnolence, Kussmaul si acidocétose, infection déclenchante fréquente. État hyperosmolaire : glycémie très élevée, osmolarité > 320 mOsm/kg, déshydratation majeure, troubles neuro sévères.',
    bilan_immédiat: 'Glycémie, gaz du sang (pH, bicarbonates), cétonémie/cétonurie, ionogramme (K crucial avant insuline), osmolalité, créatinine, NFS, CRP, ECBU. Recherche infection, infarctus, iatrogénie (corticoïdes).',
    conduite_urgence: '1. Remplissage NaCl 0,9 % 1 L première heure puis 250-500 mL/h selon état cardiaque et déshydratation. 2. Insuline rapide IV (0,1 UI/kg/h) après vérification K ≥ 3,3 ; apports K si besoin. 3. Traiter infection source. 4. État hyperosmolaire : réhydratation prioritaire, insuline plus lente, corriger Na/osmolarité lentement. 5. Surveillance K q2-4h. 6. Arrêt insuline IV quand résolution + relais SC.',
    surveillance: 'Glycémie q1-2h, iono q2-4h, diurèse, conscience, osmolarité. Recherche complication thrombotique (hyperosmolarité).',
    criteres_hospitalisation: 'Toute acidocétose ou hyperosmolarité, confusion, vomissements, déshydratation sévère, infection associée, DFG < 30, impossibilité autosurveillance, première décompensation ou changement schéma insuline.'
  },
  {
    id: 'ug-hypokaliemie',
    urgence: 'Hypokaliémie',
    signes_alerte: 'K < 3,5 mmol/L ; critique < 2,5 ou symptômes : fatigue, crampes, constipation, arythmie, ECG (ondes U, aplatis T, QT long), paralysie si sévère. Causes : diurétiques, vomissements, diarrhée, hyperaldostéronisme, réanimation sans apport K.',
    bilan_immédiat: 'Ionogramme veineux, magnésémie (hypomagnésémie entrave correction K), créatinine, gaz si acidobasique, ECG systématique si K < 3 ou cardiopathie. Recherche cause et pertes digestives/urinaires.',
    conduite_urgence: '1. Si K < 2,5 ou ECG anormal ou symptômes : KCl IV dilué (max 10-20 mmol/h en surveillance, pas de bolus rapide). 2. Si K 2,5-3,5 asymptomatique : KCl oral 40-80 mmol/j fractionné. 3. Corriger magnésium si bas. 4. Arrêter/ajuster diurétique, traiter vomissements. 5. Surveillance ECG pendant perfusion IV. 6. Ne pas corriger trop vite si anurie.',
    surveillance: 'K q4-6h sous IV puis quotidien, ECG, diurèse, signes digestifs. Réévaluation traitement diurétique à long terme.',
    criteres_hospitalisation: 'K < 2,5, arythmie, ECG anormal, symptômes neuromusculaires, vomissements empêchant voie orale, IRC sévère nécessitant perfusion surveillée, cause non stabilisée.'
  },
  {
    id: 'ug-hyperkaliemie',
    urgence: 'Hyperkaliémie',
    signes_alerte: 'K > 5,5 mmol/L ; critique > 6,5 ou ECG anormal (T pointues, élargissement QRS, onde sinusoïdale). Causes gériatriques : IRA, IEC/ARA2, spironolactone, triméthoprime, AINS, acidose, hémolyse.',
    bilan_immédiat: 'Ionogramme (échantillon non hémolysé), créatinine, gaz du sang, ECG immédiat. Recherche médicaments hyperkaliémiants. Ca ionisé si suspicion.',
    conduite_urgence: '1. Si ECG anormal ou K > 6,5 : gluconate de calcium 10 % 10 mL IV sur 2-5 min (protection myocardique). 2. Insuline 10 UI + glucose 50 % 50 mL IV. 3. Salbutamol 10-20 mg nébulisation. 4. Bicarbonate si acidose métabolique. 5. Élimination : furosémide si diurèse, résines (sulfonate polystyrène), hémodialyse si IRA réfractaire. 6. Arrêt IEC, K-sparing, suppléments K.',
    surveillance: 'ECG continu ou répété, K q2-4h, glycémie sous insuline, diurèse. Réintroduction médicaments seulement après stabilisation.',
    criteres_hospitalisation: 'Toute hyperkaliémie avec ECG modifié, K > 6,5, IRA, besoin dialyse, instabilité hémodynamique, polymédication nécessitant réajustement surveillé.'
  },
  {
    id: 'ug-hyponatremie',
    urgence: 'Hyponatrémie',
    signes_alerte: 'Na < 135 mmol/L ; sévère < 125 avec confusion, convulsions, coma. Sujet âgé : chutes, delirium, fractures. Causes : SIADH (diurétiques thiazidiques, ISRS), hypovolémie, insuffisance cardiaque, polydipsie, hypothyroïdie.',
    bilan_immédiat: 'Na, osmolalité plasmatique et urinaire, Na urinaire, urée, créatinine, glycémie, TSH. Volémie clinique. Médicaments (thiazides, ISRS, carbamazépine).',
    conduite_urgence: '1. Si symptômes sévères (convulsions, coma) et Na < 120 : NaCl 3 % 100-150 mL sur 20 min, répéter selon Na cible. 2. Correction MAX 8-10 mmol/L/24 h (myélinolyse osmotique si trop rapide). 3. Hypovolémique : NaCl 0,9 %. 4. SIADH euvolémique : restriction eau 800-1000 mL/j ; pas de remplissage excessif. 5. Traiter cause (arrêt thiazide, correction hypothyroïdie). 6. Surveillance Na q4-6h.',
    surveillance: 'Na q4-6h sous correction active, état neuro, diurèse, balance hydrique. Signes myélinolyse (dysarthrie, tétraplégie) à J2-6.',
    criteres_hospitalisation: 'Na < 125, symptômes neuro, correction IV nécessaire, confusion, convulsions, polypathologie complexe, impossibilité restriction hydrique à domicile.'
  },
  {
    id: 'ug-oap',
    urgence: 'OAP (œdème aigu du poumon)',
    signes_alerte: 'Dyspnée aiguë, orthopnée, toux mousseuse rosée, crépitants bilatéraux, SpO2 basse, tachypnée, anxiété, hypertension souvent (mais PAS basse possible si choc cardiogénique). Chez sujet âgé : présentation atypique : confusion, fatigue, aggravation isolée de BPCO.',
    bilan_immédiat: 'SpO2, gaz du sang, ECG, troponine, BNP/NT-proBNP, iono, créatinine, Rx thorax, écho cardiaque si disponible. Rechercher déclencheur : FA rapide, IDM, crise HTA, surcharge hydrique, infection.',
    conduite_urgence: '1. Position assise, O2 pour SpO2 cible 94-98 % (prudence BPCO). 2. Furosémide 40-80 mg IV (doubler dose habituelle si traitement chronique). 3. Dérivés nitrés SL/IV si PAS > 90-100 mmHg. 4. CPAP/VNI si détresse (PaO2/FiO2 bas, FR élevée). 5. Morphine 2-4 mg IV lente si anxiété/dyspnée réfractaire (prudence respiration). 6. Traiter arythmie, ischémie. 7. Limiter apports hydriques.',
    surveillance: 'SpO2, FR, PA, diurèse, iono (K), signes perfusion périphérique. Réponse diurétique à 1-2 h.',
    criteres_hospitalisation: 'SpO2 < 90 % sous O2, VNI/CPAP, confusion, IDM associé, insuffisance rénale, FA rapide non contrôlée, échec traitement initial, comorbidités nécessitant monitoring.'
  },
  {
    id: 'ug-syncope',
    urgence: 'Syncope',
    signes_alerte: 'Perte de connaissance brève avec récupération rapide et complète, prodromes (lipothymie, nausées), contexte (effort, toux, lever, douleur), palpitations, douleur thoracique, déficit neuro transitoire, chute sans traumatisme majeur, antécédents cardiaques, traitement antiarythmique ou QT long.',
    bilan_immédiat: 'ECG 12 dérivations (BAV, QT, extrasystoles, signes ischémie), glycémie, Hb si anémie suspecte, iono. Constantes couché/debout (hypotension orthostatique : chute PAS ≥ 20 mmHg). Examen cardiaque et neurologique. Troponine si douleur. Holter/écho en second temps si hospitalisation.',
    conduite_urgence: '1. Si syncope à l\'effort ou douleur thoracique ou ECG anormal : monitoring, troponine, avis cardio. 2. Orthostatisme : arrêt/ajuster antihypertenseur, hydratation, contention basse, lever progressif. 3. Bradycardie symptomatique : atropine, stimulation si besoin. 4. Torsades/QT long : magnésium, arrêt médicament allongeant QT. 5. Éviter conduite jusqu\'à bilan. 6. Recherche causes non cardiaques : AVC, hémorragie, hypoglycémie.',
    surveillance: 'Monitoring cardiaque si suspicion rythme, PA orthostatique répétée, récidive syncope.',
    criteres_hospitalisation: 'Syncope à l\'effort, cardiopathie structurale, ECG anormal, troponine positive, traumatisme grave, hémorragie digestive suspecte, arythmie ventriculaire, BAV, récidive à l\'accueil, absence aidant pour surveillance.'
  },
  {
    id: 'ug-tvp-ep',
    urgence: 'TVP / embolie pulmonaire (EP)',
    signes_alerte: 'TVP : jambe unilatérale gonflée, douloureuse, chaude, Homans prudent. EP : dyspnée aiguë, douleur thoracique pleurétique, hémoptysie, tachycardie, syncope, SpO2 basse. Sujet âgé : dyspnée isolée, confusion, pas de douleur jambe.',
    bilan_immédiat: 'Score Wells TVP/EP, D-dimères (interprétation prudente si âge > 50 — YEARS/âge ajusté). Écho-Doppler veineux ; TDM angio-pulmonaire ou scintigraphie si CI TDM. ECG, gaz du sang, troponine, BNP. Recherche facteur déclenchant (immobilisation, infection, cancer).',
    conduite_urgence: '1. Si EP hémodynamiquement instable : thrombolyse ou embolectomie selon filière ; héparine non fractionnée. 2. EP/TVP stable : HBPM (adapter dose si ClCr < 30) ou héparine puis AOD/AVK. 3. Oxygène, éviter mobilisation excessive jambe TVP jusqu\'à anticoagulation. 4. Contention veineuse. 5. Évaluer risque hémorragique (anticoagulation récente, thrombopénie, chute).',
    surveillance: 'SpO2, PA, saignement, plaquettes si héparine, signes extension TVP. Éducation anticoagulation.',
    criteres_hospitalisation: 'EP avec hypotension, troponine/BNP élevés, SpO2 basse, TVP massive ilio-fémorale, saignement actif nécessitant traitement complexe, ClCr < 30, chutes répétées sous anticoagulant sans supervision, cancer hypercoagulable.'
  },
  {
    id: 'ug-occlusion',
    urgence: 'Occlusion intestinale',
    signes_alerte: 'Arrêt matières et gaz, vomissements (fécaloïdes si tardif), distension abdominale, douleur colique puis continue, météorisme, déshydratation, confusion, tachycardie, défense localisée si strangulation. Antécédent chirurgie abdominal (brides), hernie incarcerée, tumeur.',
    bilan_immédiat: 'ASP (niveaux hydro-aériques), NFS, lactates, iono, créatinine, gaz du sang. Examen hernies, toucher rectal. TDM abdominal si diagnostic incertain ou suspicion ischémie/strangulation.',
    conduite_urgence: '1. Jeûne, sonde nasogastrique dérivation si vomissements. 2. Remplissage IV, correction iono. 3. Analgésie (morphine titrée). 4. Avis chirurgical urgent si strangulation (douleur continue, fièvre, lactates ↑, péritonite). 5. Occlusion partielle/bride : traitement conservateur initial possible sous surveillance chirurgicale. 6. Ne pas donner laxatifs. 7. Antibioprophylaxie si nécrose suspectée.',
    surveillance: 'Douleur, défense, température, débit SNG, diurèse, lactates. RéASP ou TDM si aggravation.',
    criteres_hospitalisation: 'Toute suspicion occlusion = hospitalisation ; chirurgie si strangulation, échec traitement médical 48-72 h, vomissements incoercibles, déshydratation sévère, comorbidités nécessitant monitoring peri-opératoire.'
  },
  {
    id: 'ug-had',
    urgence: 'HAD (hémorragie digestive aiguë)',
    signes_alerte: 'Hématémèse, méléna, rectorragies, lipothymie, syncope, tachycardie, hypotension, pâleur, confusion, antécédent ulcère, cirrhose, anticoagulants/antiplaquettaires, douleur épigastrique. Hb chute ; hémorragie occulte si instabilité sans saignement visible.',
    bilan_immédiat: 'Hb, plaquettes, TP/INR, créatinine, groupe sanguin, lactates. TA, FC, remplissage periphérique. Mise au lit, O2, 2 VVP larges. Gastroclyse si hématémèse (pré-endoscopie). Électrocoagulation transitoire anticoagulation selon balance risque thrombotique.',
    conduite_urgence: '1. Remplissage cristalloïdes ; transfusion si Hb < 7-8 g/dL ou ischémie (seuils individualisés cardiopathie). 2. Inhibiteur pompe à protons IV haute dose. 3. Terlipressine + antibiotique si suspicion varices. 4. Endoscopie digestive urgente (< 12-24 h, < 6 h si instable). 5. Réversion anticoagulation si hémorragie massive (vitamine K, PPSB, idarucizumab, andexanet selon produit). 6. Aspirine secondaire : souvent maintenir si risque thrombotique élevé après hémostase.',
    surveillance: 'Hb q6-12h, constantes, re-saignement, diurèse, confusion. Surveillance post-endoscopie.',
    criteres_hospitalisation: 'Toute HAD significative ; réanimation si choc ; surveillance post-endoscopie ; anticoagulation à réintroduire ; anémie sévère ; récidive hémorragique.'
  },
  {
    id: 'ug-anemie-severe',
    urgence: 'Anémie sévère',
    signes_alerte: 'Hb < 8 g/dL ou chute rapide, dyspnée, angor, syncope, tachycardie, confusion, pâleur, saignement actif, méléna/rectorragies, anticoagulation. Chez cardiopathe : symptômes avec Hb plus élevée.',
    bilan_immédiat: 'NFS, réticulocytes, ferritine/Fe si chronique, groupe-RAI, TP/INR. Recherche saignement (digital rectal, BU, endoscopie si HAD). ECG, troponine si douleur thoracique.',
    conduite_urgence: '1. Stabiliser hémodynamique (remplissage si hypovolémie, pas si anémie normovolémique seule). 2. Transfusion culots concentrés (objectif souvent 7-8 g/dL, 9-10 si cardiopathie ischémique symptomatique). 3. Traiter cause saignement. 4. Arrêter anticoagulant temporairement si hémorragie active. 5. Fer IV si carence et urgence à corriger (selon filière). 6. Oxygène si dyspnée.',
    surveillance: 'Hb post-transfusion 6-24 h, signes re-saignement, tolérance transfusion (surcharge volémique chez sujet âgé).',
    criteres_hospitalisation: 'Hb < 8, instabilité, saignement actif, suspicion HAD, angor/dyspnée, besoin transfusion répétée, investigation endoscopique, anticoagulation complexe.'
  },
  {
    id: 'ug-thrombopenie',
    urgence: 'Thrombopénie',
    signes_alerte: 'Plaquettes < 50 000/mm³ (saignement spontané si < 20 000), purpura, épistaxis, gingivorragies, méléna, hématurie, post-chute hémorragique, médicament récent (héparine, chimiothérapie), fièvre (PTT, SHU). HIT : thrombose + héparine récente.',
    bilan_immédiat: 'NFS, frottis, TP/INR, fibrinogène, D-dimères si HIT suspectée. Anticorps anti-PF4 si HIT. Recherche médicaments, infection, alcool, carence B12/folate, hypersplénisme.',
    conduite_urgence: '1. Saignement menaçant ou plaquettes < 10 000 : transfusion plaquettaire + traiter cause. 2. HIT : arrêt toute héparine, anticoagulation alternative (argatroban, fondaparinux). 3. PTT : corticoïdes, IVIG, éviter plaquettes sauf hémorragie vitale. 4. Arrêt médicament suspect. 5. Éviter AINS, IM, gestes invasifs. 6. Chute sous thrombopénie : imagerie selon traumatisme.',
    surveillance: 'Numération q24-48h, signes hémorragie, thrombose sous HIT. Plateau transfusionnel documenté.',
    criteres_hospitalisation: 'Plaquettes < 20 000, saignement actif, HIT, PTT sévère, besoin procédure invasive, cause non identifiée, anticoagulation à instaurer sous surveillance.'
  },
  {
    id: 'ug-ira',
    urgence: 'Insuffisance rénale aiguë (IRA)',
    signes_alerte: 'Oligurie/anurie, créatinine ↑ rapide, hyperkaliémie, acidose, surcharge hydrique (crépitants, OAP), confusion, urée élevée, médicaments néphrotoxiques (AINS, diurétiques, IEC), déshydratation ou choc, rétention urinaire.',
    bilan_immédiat: 'Créatinine, urée, iono, K, gaz, NFS. BU, échographie reins/vessie (rétention, obstacle). Furosémide test si doute prérénal. Revue médicaments néphrotoxiques. Calcul diurèse 6 h.',
    conduite_urgence: '1. Traiter urgences métaboliques : hyperkaliémie, acidose sévère, surcharge (diurétique ou dialyse). 2. Rétention : sonde urinaire. 3. Prérénal : remplissage prudent. 4. Arrêt AINS, IEC, métformine, produits de contraste si possible. 5. Adapter toutes les doses. 6. Indication dialyse : K réfractaire, acidose, surcharge, urémie symptomatique (péricardite, encephalopathie).',
    surveillance: 'Diurèse horaire, créatinine quotidienne, iono q12-24h, balance hydrique, pesée.',
    criteres_hospitalisation: 'Toute IRA symptomatique ou K ↑, besoin dialyse, cause obstructive, déshydratation/choc, polymédication nécessitant ajustement, oligurie, comorbidités cardiaques avec surcharge.'
  },
  {
    id: 'ug-detresse-respiratoire',
    urgence: 'Détresse respiratoire',
    signes_alerte: 'SpO2 < 90 %, FR > 25/min, tirage, cyanose, confusion, agitation, exhaustion, silence auscultatoire (asthme), asymétrie (pneumothorax), expectoration purulente, œdème aigu poumon, suspicion EP, BPCO décompensée.',
    bilan_immédiat: 'SpO2, gaz du sang (PaO2, PaCO2, pH), Rx thorax, ECG. NFS, CRP si infection. BNP, D-dimères selon orientation. Échographie bedside si EP/pneumothorax.',
    conduite_urgence: '1. O2 titré (cible 88-92 % si BPCO connue, sinon 94-98 %). 2. VNI si acidose hypercapnique BPCO ou OAP. 3. Intubation si échec VNI, GCS bas, instabilité. 4. Bronchodilatateurs si asthme/BPCO. 5. Antibiothérapie si pneumonie. 6. EP : anticoagulation. 7. Épanchement massif : drainage. 8. Position demi-assise sauf hypotension.',
    surveillance: 'SpO2 continu, gaz q1-6h selon gravité, FR, conscience, fatigue respiratoire.',
    criteres_hospitalisation: 'Toute détresse respiratoire ; VNI ; besoin O2 > lunettes simples de façon prolongée ; pneumonie sévère ; EP ; acidose ; confusion ; défaillance multiviscérale.'
  },
  {
    id: 'ug-anaphylaxie',
    urgence: 'Anaphylaxie',
    signes_alerte: 'Urticaire, angioedème, bronchospasme, dyspnée, stridor, hypotension, syncope, vomissements, diarrhée, exposition récente médicament (bêta-lactamine), aliment, venin. Début rapide (minutes). Biphasic possible à 4-8 h.',
    bilan_immédiat: 'Clinique avant tout. Constantes, SpO2, auscultation. Pas de test allergologique en phase aiguë. Identifier allergène et arrêter exposition.',
    conduite_urgence: '1. Adrénaline IM 0,5 mg (0,5 mL de 1 mg/mL) face antérolatérale cuisse — répéter q5-15 min si persistance. 2. Allonger jambes surélevées si hypotension. 3. O2, remplissage IV si choc. 4. Salbutamol nébulisé si bronchospasme. 5. Antihistaminique H1 + corticoïde IV (adjuvants, pas substitut adrénaline). 6. Surveillance 6-12 h minimum (réaction biphasique). 7. Carte allergie, éviction, auto-injecteur si indiqué.',
    surveillance: 'Constantes q15-30 min pendant 4 h minimum, SpO2, récidive symptômes. Prolonger si réaction sévère.',
    criteres_hospitalisation: 'Anaphylaxie confirmée (quasi systématique) ; hypotension ou bronchospasme ; réponse lente à adrénaline ; réaction biphasique ; antécédent cardiaque ; vivre seul ; besoin seconde dose adrénaline.'
  }
];
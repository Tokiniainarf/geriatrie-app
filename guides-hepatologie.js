// Guides hépatologie — Prise en charge des maladies du foie chez le sujet âgé
const GUIDES_HEPATOLOGIE = [
  {
    id: 'hepato-1',
    titre: 'Cirrhose chez le sujet âgé : diagnostic, complications et suivi',
    contenu: 'La cirrhose est souvent diagnostiquée tardivement à l\'âge (alcool, NASH, hépatite C traitée ou non). La compensation peut masquer une maladie avancée jusqu\'à la première décompensation.\n\nDIAGNOSTIC :\n- Bilan : ASAT/ALAT, GGT, PAL, albumine, TP/INR, bilirubine, plaquettes, échographie (foie nodulaire, rate, ascite).\n- Fibrose : élastométrie si disponible ; score FIB-4 utile en première intention.\n- Étiologie : alcool, métabolique, virale, cholestase — oriente le suivi et le dépistage cancer.\n\nCOMPLICATIONS À DÉPISTER :\n- Hypertension portale : varices œsophagiennes (gastroscopie si thrombopénie, ascite).\n- HCC : écho ± AFP tous les 6 mois si cirrhose établie.\n- Désensibilisation à l\'alcool et interactions médicamenteuses.\n\nGÉRIATRIE :\n- Fragilité, sarcopénie, dénutrition fréquentes ; ne pas attribuer tous les symptômes à l\'âge.\n- Adaptation posologie (DFG, albumine basse) ; éviter AINS et benzodiazépines si encéphalopathie.\n- Projet de soins : discussion transplantation rarement pertinente > 75 ans ; priorité qualité de vie et prévention décompensation.',
    points_cles: ['Cirrhose souvent méconnue jusqu\'à décompensation', 'Dépistage varices + HCC si cirrhose', 'Étiologie = alcool et NASH fréquents', 'Éviter iatrogénie (AINS, benzos)']
  },
  {
    id: 'hepato-2',
    titre: 'Hépatites virales et toxiques chez le sujet âgé',
    contenu: 'Hépatite B : réactivation possible sous immunosuppression (corticothérapie, chimiothérapie) ; dépistage HBsAg + anti-HBc avant biothérapie.\n\nHÉPATITE C :\n- Cohorte âgée souvent guérie par antiviraux directs ; vérifier cure (ARN VHC indétectable) et fibrose résiduelle.\n- Si cirrhose post-guérison : suivi HCC maintenu.\n\nHÉPATITE ALCOOLIQUE AIGUË :\n- Tableau grave possible malgré consommation « modérée » à l\'âge ; Maddrey, bilirubine, TP.\n- Corticoïdes si critères sévères et sans infection non contrôlée ; nutrition, thiamine, sevrage encadré.\n\nAUTRES CAUSES :\n- Médicaments (paracétamol surdosage, amoxicilline-acide clavulanique, statines rares).\n- Ischémie, cholestase obstructive — ne pas oublier en hospitalisation.\n\nVACCINATION :\n- Hépatite B si facteurs de risque ou immunodépression ; pneumocoque selon recommandations.',
    points_cles: ['HBV : risque réactivation immunosuppresseurs', 'HCV guéri ≠ fin suivi si cirrhose', 'HAA : corticoïdes si critères + nutrition', 'Toujours rechercher cause médicamenteuse']
  },
  {
    id: 'hepato-3',
    titre: 'Ictère chez le sujet âgé : démarche diagnostique',
    contenu: 'L\'ictère après 75 ans impose d\'éliminer une cause obstructive rapidement (lithiase, tumeur pancréato-biliaire).\n\nORIENTATION BIOLOGIQUE :\n- Cholestase (PAL, GGT élevés) vs cytolyse dominante vs hémolyse (LDH, réticulocytes).\n- TP et albumine : gravité hépatique.\n\nIMAGERIE :\n- Échographie abdominale en première ligne (dilatation voies biliaires, masse).\n- IRM ou CPRE selon contexte ; pas retarder si fièvre + ictère = angiocholite.\n\nPIÈGES GÉRIATRIQUES :\n- Ictère fruste (sclères seules), prurit isolé en cholestase chronique.\n- Médicaments (amoxicilline-clavulanate, flucloxacilline) : ictère retardé.\n- Sepsis, insuffisance cardiaque congestive : ictère fonctionnel possible.\n\nPRISE EN CHARGE :\n- Drainage biliaire si obstruction ; antibiothérapie si angiocholite.\n- Adapter sédation/anesthésie si intervention ; bilan cardiovasculaire.',
    points_cles: ['Écho en urgence si ictère + fièvre', 'Obstruction = priorité diagnostique', 'Cholestase médicamenteuse fréquente', 'Ne pas attribuer à « vieillissement »']
  },
  {
    id: 'hepato-4',
    titre: 'Ascite et hyponatrémie dans la cirrhose',
    contenu: 'L\'ascite traduit souvent une décompensation ; infection (PBE) doit être écartée à chaque aggravation.\n\nDIAGNOSTIC ASCITE :\n- Échographie ; ponction diagnostique si nouveau ou hospitalisation (cellules, albumine ascite, culture).\n- Gradient albumine sérum-ascite > 1,1 g/dL = hypertension portale.\n\nTRAITEMENT :\n- Restriction sodée modérée (pas trop stricte : dénutrition).\n- Diurétiques : spironolactone ± furosémide ; titration lente ; poids, créatinine, Na+.\n- Albumine si ponction évacuatrice importante ou syndrome hépatorenal suspecté.\n\nPBE :\n- PMN ≥ 250/mm³ → antibiothérapie immédiate (3e génération C3G) + albumine si bilirubine élevée ou IRC.\n- Prophylaxie secondaire après premier épisode.\n\nHYPO Na+ :\n- Fréquente ; limiter diurétiques ; midodrine/TIPS discutés en spécialisé ; éviter sur-hydratation IV.',
    points_cles: ['Ponction à chaque hospitalisation ascite', 'PBE = ATB + albumine si critères', 'Restriction sel modérée', 'Surveiller créatinine (SHR)']
  },
  {
    id: 'hepato-5',
    titre: 'Encéphalopathie hépatique chez le sujet âgé',
    contenu: 'Confusion, somnolence, chutes ; diagnostic différentiel large (infection, hyponatrémie, médicaments) mais toujours penser EH si cirrhose.\n\nDÉCLENCHEURS :\n- Constipation, infection, hémorragie digestive, surdosage diurétiques, AINS, benzodiazépines, opioïdes.\n\nTRAITEMENT :\n- Lactulose : objectif 2–3 selles molles/j ; éviter diarrhée excessive (déshydratation).\n- Rifaximine en association si récidives (coût, mais efficace).\n- Traiter déclencheur (PBE, saignement, sevrage alcool).\n\nGÉRIATRIE :\n- Confusion souvent attribuée à démence ; amélioration rapide sous lactulose oriente.\n- Éviter benzos pour agitation ; préférer environnement calme, correction métabolique.\n- Aidants : reconnaître signes précoces (inversion cycle veille-sommeil, lenteur).',
    points_cles: ['Chercher déclencheur traitable', 'Lactulose titrée (pas diarrhée)', 'Pas de benzos en première intention', 'Différencier démence et EH réversible']
  },
  {
    id: 'hepato-6',
    titre: 'Coagulopathie hépatique et gestion hémorragique',
    contenu: 'Le TP allongé reflète synthèse hépatique diminuée mais ne prédit pas seul le saignement ; thrombocytopénie portale ajoute un risque.\n\nÉVALUATION :\n- TP/INR, plaquettes, fibrinogène si saignement actif.\n- Clinique : gingivorragies, ecchymoses, HDB, hématémèse.\n\nHÉMORRAGIE VARIQUE :\n- Protocole spécialisé : vasopressine/analogue, antibiotique, endoscopie, TIPS si échec.\n- Transfusion ciblée (Hb ~7–8 g/dL sauf comorbidités).\n\nTRANSFUSION FACTEURS :\n- Pas systématique avant gestes invasifs ; individualiser si INR très élevé et geste à haut risque.\n- Plaquettes si < 50 000 et geste invasif majeur (seuils discutés).\n\nANTICOAGULATION :\n- FA fréquente avec cirrhose ; balance thrombose hépatique vs saignement varique ; décision multidisciplinaire.',
    points_cles: ['INR seul ≠ saignement imminent', 'Hémorragie varique = protocole urgent', 'Transfusion raisonnée', 'AC en cirrhose = cas par cas']
  },
  {
    id: 'hepato-7',
    titre: 'Insuffisance hépatique aiguë et défaillance hépatique',
    contenu: 'Tableau rare mais grave : encéphalopathie + coagulopathie sur foie préalablement sain (paracétamol, toxiques, ischémie) ou sur cirrhose (ACLF).\n\nDIAGNOSTIC :\n- Bilirubine, TP, encéphalopathie ; étiologie urgente (toxique, virale, ischémie).\n- Scanner si cholestase obstructive superposable.\n\nPRISE EN CHARGE :\n- Réanimation : N-acétylcystéine si paracétamol ; traiter infection, maintenir PAM.\n- Transplantation hépatique discutée en centre ; âge et comorbidités limitent souvent l\'éligibilité.\n\nCHEZ LE SUJET ÂGÉ :\n- Paracétamol : risque à doses « thérapeutiques » si dénutrition, alcool, polythérapie.\n- Pronostic réservé ; objectifs de soins et limitation thérapeutique à anticiper.\n\nSUIVI POST-ÉPISODE :\n- Réévaluation fonction hépatique résiduelle ; adaptation tous les médicaments hépatométabolisés.',
    points_cles: ['Paracétamol toxique même dose standard si fragile', 'NAC si suspicion paracétamol', 'ACLF = infection + décompensation', 'Projet de soins précoce si très âgé']
  },
  {
    id: 'hepato-8',
    titre: 'Cholestase chronique et prurit (CBP, CEP)',
    contenu: 'Cholangite biliaire primitive (CBP) et cholangite sclérosante primitive (CEP) peuvent se révéler ou progresser à tout âge ; fatigue et prurit dominent parfois le tableau.\n\nBIOLOGIE :\n- PAL, GGT élevés ; anticorps anti-mitochondries (CBP).\n- IRM cholangiographie si CEP suspectée.\n\nTRAITEMENT :\n- Acide ursodésoxycholique (CBP) : ralentit progression si précoce.\n- Prurit : cholestyramine, rifampicine (surveillance hépatique), naltrexone basse dose.\n- Carences liposolubles (A, D, E, K), ostéoporose : supplémentation et DMO.\n\nGÉRIATRIE :\n- Prurit nocturne → insomnie, confusion ; ne pas sur-prescrire antihistaminiques sédatifs.\n- Surveillance fracture et vitamine D ; chutes.\n- Dépistage colangiocarcinome selon protocoles spécialisés (CEP).',
    points_cles: ['PAL + AMA = orienter CBP', 'UDCA si CBP', 'Prurit traité par étapes', 'Ostéoporose et vitamine D associées']
  },
  {
    id: 'hepato-9',
    titre: 'Stéatose hépatique et NASH chez le sujet âgé',
    contenu: 'Stéatose métabolique (MASLD) très fréquente avec obésité, diabète type 2, dyslipidémie ; progression fibrose possible sans symptômes.\n\nDÉPISTAGE :\n- Transaminases normales n\'excluent pas fibrose avancée.\n- FIB-4, élastométrie ; facteurs de risque métaboliques systématiques.\n\nTRAITEMENT :\n- Perte de poids modérée (5–10 %) si possible sans aggraver dénutrition.\n- Contrôle diabète, PA, dyslipidémie ; activité physique adaptée.\n- Éviter alcool ; pas d\'AINS chroniques.\n\nMÉDICAMENTS ÉMERGENTS :\n- Rézépatide et autres selon AMM et profil âge/comorbidités ; balance bénéfice/fragilité.\n\nGÉRIATRIE :\n- Sarcopénie + restriction alimentaire excessive = pire issue.\n- Objectif métabolique réaliste ; priorité fonction et prévention décompensation cardiovasculaire.',
    points_cles: ['Transaminases normales possibles', 'FIB-4 / élastométrie si facteurs risque', 'Perte poids modérée + activité', 'Ne pas dénutrir en « régime foie »']
  },
  {
    id: 'hepato-10',
    titre: 'Médicaments hépatotoxiques et adaptation posologique',
    contenu: 'Le foie vieillissant et la cirrhose augmentent le risque d\'effets indésirables ; la polymédication cumule les toxicités.\n\nÀ ÉVITER OU RESTREINDRE :\n- Paracétamol : max 2–3 g/j ; éviter alcool concomitant.\n- AINS : contre-indiqués si ascite, varices, IRC associée.\n- Benzodiazépines et opioïdes : encéphalopathie, chutes.\n- Statines : généralement possibles ; surveillance si cytolyse.\n\nAJUSTEMENT DOSE (exemples) :\n- Morphine, tramadol, benzodiazépines : réduction si Child-Pugh B/C.\n- Antibiotiques macrolides, fluconazole : attention QT et hépatotoxicité.\n\nSURVEILLANCE :\n- Nouveau médicament → bilan hépatique à 4–8 semaines si risque connu.\n- STOPP/START en consultation gériatrique.\n\nHOSPITALISATION :\n- Réconciliation ; ne pas réintroduire médicament responsable d\'ictère antérieur.',
    points_cles: ['Paracétamol dose plafonnée', 'AINS évités si cirrhose', 'Child-Pugh guide sédation/opioïdes', 'Revue médicamenteuse systématique']
  }
];
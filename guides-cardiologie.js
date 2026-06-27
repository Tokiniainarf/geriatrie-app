// Guides cardiologie — Prise en charge cardiovasculaire chez le sujet âgé
const GUIDES_CARDIOLOGIE = [
  {
    id: 'cardio-1',
    titre: 'Hypertension artérielle chez le sujet âgé : cibles et traitement',
    contenu: 'L\'HTA est présente chez > 60 % des sujets ≥ 80 ans ; le traitement réduit AVC et insuffisance cardiaque.\n\nMESURE :\n- PA assise 2 mesures ; orthostatisme (1 et 3 min) si traitement ou chutes.\n- Objectif général < 140/90 mmHg si bien toléré (ESC/ESH) ; 130–139 acceptable si robuste.\n- Sujet fragile, chutes, PA basse debout : individualiser (souvent 140–150 systolique acceptable).\n\nTRAITEMENT :\n- IEC ou ARA2 en première intention si pas de CI ; thiazidique ou inhibiteur calcique si besoin.\n- Éviter double blocage RAAS sans indication.\n- Débuter faible dose ; une modification à la fois.\n\nPIÈGES :\n- Hypotension orthostatique : réduire diurétique ou vasodilatateur avant d\'arrêter IEC si indiqué.\n- Hyponatrémie sous thiazidiques ; hyperkaliémie sous spironolactone + IRC.\n\nSURVEILLANCE :\n- Créatinine et K+ 1–2 semaines après changement ; dépistage chutes.',
    points_cles: ['Orthostatisme systématique', 'Cible < 140/90 si toléré', 'IEC/ARA2 1ère ligne', 'Fragile = cibles assouplies']
  },
  {
    id: 'cardio-2',
    titre: 'Fibrillation atriale chez le sujet âgé : anticoagulation et contrôle du rythme',
    contenu: 'La FA est fréquente ; le risque AVC augmente avec l\'âge (CHA2DS2-VASc).\n\nANTICOAGULATION :\n- CHA2DS2-VASc ≥ 2 (H/F) : anticoagulation sauf CI hémorragique majeure.\n- AOD préférés à l\'âge (pas de monitoring routine) ; dose réduite selon critères (apixaban, rivaroxaban, dabigatran).\n- AVK si valve mécanique ou sténose mitrale.\n\nBALANCE CHUTES :\n- Chutes ≠ contre-indication automatique ; évaluer gravité (traumatisme crânien) et HAS-BLED.\n- Mesures : surveillance environnement, pas d\'arrêt systématique.\n\nRYTHME / FRÉQUENCE :\n- Contrôle fréquence souvent suffisant (bêta-bloquant, digoxine prudente si DFG bas).\n- Amiodarone : effets secondaires à long terme ; éviter si alternatives.\n\nCARDIOVERSION / ABLATION :\n- Balance bénéfice/risque selon symptômes et fragilité.',
    points_cles: ['CHA2DS2-VASc guide AC', 'AOD dose adaptée âge/poids/DFG', 'Chutes ≠ arrêt AC systématique', 'Contrôle fréquence souvent suffisant']
  },
  {
    id: 'cardio-3',
    titre: 'Insuffisance cardiaque à fraction d\'éjection préservée (HFpEF)',
    contenu: 'HFpEF domine après 80 ans ; symptômes dyspnée, oedèmes, fatigue ; FEVG ≥ 50 %.\n\nDIAGNOSTIC :\n- Clinique + NT-proBNP élevé + anomalies remplissage (écho : E/e\', hypertrophie, fibrillation).\n- Comorbidités : HTA, diabète, obésité, SAOS, FA.\n\nTRAITEMENT :\n- Diurétiques pour congestion ; éviter sur-diurèse (IRC, confusion).\n- HTA et FA traitées ; iSGLT2 ont montré bénéfice aussi en FEVG préservée (guidelines récentes).\n- Pas de bénéfice prouvé des IEC comme en FEVGréduite historiquement — mais traiter comorbidités.\n\nGÉRIATRIE :\n- Confusion avec BPCO, déconditionnement ; pesée quotidienne si possible.\n- Hospitalisation décompensation : ionogramme, reprise diurétique, éducation restriction hydrosodée modérée.',
    points_cles: ['HFpEF majoritaire > 80 ans', 'NT-proBNP + écho', 'Diurétiques = symptômes', 'iSGLT2 à considérer selon profil']
  },
  {
    id: 'cardio-4',
    titre: 'Insuffisance cardiaque à fraction d\'éjection réduite (HFrEF)',
    contenu: 'HFrEF : FEVG < 40 % ; traitement de fond améliore survie et hospitalisations.\n\nTRAITEMENTS DE FOND (si tolérés) :\n- IEC/ARA2 (ou sacubitril-valsartan si eligible).\n- Bêta-bloquant titré lentement.\n- Antagoniste minéralocorticoïde si K+ et DFG OK.\n- iSGLT2.\n\nÀ L\'ÂGE :\n- Titration lente ; hypotension et bradycardie fréquentes.\n- Digoxine : symptômes FA ou HFrEF symptomatique malgré traitement ; dose basse si DFG réduit.\n\nDÉCOMPENSATION AIGUË :\n- Oxygène, diurétique IV/oral, surveiller perfusion rénale.\n- Éviter association néphrotoxique.\n\nFIN DE VIE :\n- Objectifs confort ; discuter arrêt traitements sans bénéfice symptomatique perçu.',
    points_cles: ['Quadrithérapie si possible', 'Titration lente à l\'âge', 'Digoxine dose basse IRC', 'Surveiller K+ et DFG']
  },
  {
    id: 'cardio-5',
    titre: 'Syndrome coronarien aigu chez le sujet très âgé',
    contenu: 'Présentation atypique fréquente : dyspnée, confusion, syncope, nausées sans douleur thoracique typique.\n\nDIAGNOSTIC :\n- ECG + troponine haute sensibilité ; interpréter troponine selon âge (valeurs de référence plus hautes possibles).\n\nSTRATÉGIE :\n- Réperfusion (angioplastie) si bénéfice > risques procédure et si volontés patient.\n- Traitement médical optimisé si invasif refusé ou disproportionné.\n\nANTICOAGULATION / ANTIAGRÉGATION :\n- Balance hémorragie (chutes, AOD) ; durée dual antiplatelet raccourcie parfois.\n\nRÉÉDUCATION :\n- SSR, reconditionnement ; ne pas sur-restrictre activité sans indication.',
    points_cles: ['Tableau atypique fréquent', 'Troponine interprétée avec âge', 'Balance invasive selon fragilité', 'Rééducation post-ACS']
  },
  {
    id: 'cardio-6',
    titre: 'Syncope et malaise chez le sujet âgé',
    contenu: 'Causes multiples : cardiogénique (arythmie, obstruction), orthostatique, réflexe, médicamenteuse.\n\nÉVALUATION INITIALE :\n- Anamnèse témoin, contexte (effort, position, douleur).\n- ECG (QT, BAV, hypertrophie), orthostatisme, auscultation cœur/carotides.\n\nEXAMENS CIBLÉS :\n- Holter si suspicion arythmie ; écho si souffle ou IC.\n- Pas d\'imagerie cérébrale systématique sans focalité neurologique.\n\nTRAITEMENT :\n- Orthostatisme : réduire diurétiques/psychotropes, bas de contention, lever progressif.\n- Bradycardie symptomatique : pacemaker si indication.\n\nPRÉVENTION CHUTES :\n- Lier syncope au bilan gériatrique global (vision, marche, médicaments).',
    points_cles: ['ECG + orthostatisme en 1ère ligne', 'Iatrogénie fréquente', 'Pas de scanner cérébral systématique', 'Traiter cause pas seulement conséquence']
  },
  {
    id: 'cardio-7',
    titre: 'Valvulopathies chez le sujet âgé (sténose aortique, fuite)',
    contenu: 'Sténose aortique serrée : symptômes effort (angor, syncope, dyspnée) = indication intervention si profil acceptable.\n\nÉVALUATION :\n- Écho doppler : surface valve, gradient, FEVG.\n- Fragilité (marche, cognition) pour TAVI vs chirurgie vs surveillance.\n\nTAVI :\n- Option privilégiée si haut risque chirurgical ; suivi post-TAVI (BAV, anticoagulation selon indication).\n\nINSUFFISANCE MITRALE :\n- Fonctionnelle fréquente (dilatation VG, FA) ; traiter IC et FA.\n\nSURVEILLANCE MÉDICALE :\n- Si pas d\'intervention : suivi écho régulier, limitation effort selon symptômes ; pas d\'AINS.',
    points_cles: ['Symptômes + SA serrée = discuter TAVI', 'Évaluer fragilité pré-intervention', 'Fuite mitrale fonctionnelle fréquente', 'Suivi écho si conservateur']
  },
  {
    id: 'cardio-8',
    titre: 'Artériopathie oblitérante des membres inférieurs (AOMI)',
    contenu: 'Claudication intermittente ou ischémie critique ; tabac, diabète, HTA.\n\nCLINIQUE :\n- Pouls absents, peau froide, plaies ischémiques ; mesure IPS < 0,9.\n\nTRAITEMENT :\n- Sevrage tabac, marche supervisée, statine, antiagrégant si ATCD CV.\n- Revascularisation si ischémie critique ou échec conservateur.\n\nGÉRIATRIE :\n- Confusion avec neuropathie diabétique ; soins plaies + décharge.\n- Éviter vasoconstricteurs inappropriés ; attention bêta-bloquants si claudication sévère (balance IC).',
    points_cles: ['IPS utile si suspicion', 'Marche + statine + tabac', 'Plaie + AOMI = urgence vasculaire', 'Différencier neuropathie diabétique']
  },
  {
    id: 'cardio-9',
    titre: 'Prévention cardiovasculaire primaire et secondaire à l\'âge',
    contenu: 'Bénéfice des statines et antiagrégants diminue avec espérance de vie très limitée mais reste en prévention secondaire récente.\n\nSTATINES :\n- Secondaire : poursuivre sauf effets indésirables ou fin de vie.\n- Primaire : individualiser si > 85 ans (time to benefit).\n\nANTIAGRÉGATION :\n- Aspirine faible dose si ATCD infarctus/AVC ischémique sauf hémorragie majeure.\n- Primaire : pas systématique chez le très âgé (saignements).\n\nCONTRÔLE FACTEURS :\n- PA, diabète, tabac ; activité physique adaptée.\n\nDÉPRESCRIPTION :\n- Discuter arrêt statine/aspirine en phase palliative si pas de symptômes CV actifs.',
    points_cles: ['Secondaire ≠ arrêt automatique à 80 ans', 'Primaire = time to benefit', 'Tabac et PA toujours utiles', 'Déprescription en fin de vie possible']
  },
  {
    id: 'cardio-10',
    titre: 'Insuffisance cardiaque terminale et soins de confort',
    contenu: 'Phase avancée : dyspnée au repos, oedèmes réfractaires, cachexie cardiaque.\n\nOBJECTIFS :\n- Confort, moins d\'hospitalisations inutiles ; projet de soins explicite.\n\nTRAITEMENTS SYMPTÔMES :\n- Morphine faible dose dyspnée (peur infondée si titration prudente).\n- Diurétiques au mieux tolérance confort (pas de chiffre de poids obsessionnel).\n- Oxygène si soulagement subjectif.\n\nDISPOSITIFS :\n- Désactivation DAI en fin de vie si souhait patient (discussion anticipée).\n\nCOORDINATION :\n- EHPAD, HAD, équipe palliative ; famille informée sur évolution.',
    points_cles: ['Morphine = dyspnée IC avancée', 'Limiter hospitalisations répétées', 'DA et projet de fin de vie', 'DAI : discussion désactivation']
  }
];
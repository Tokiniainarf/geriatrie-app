// Examens ECG — 20 tracés types avec critères diagnostiques détaillés (référence gériatrie / urgences)
const EXAMENS_ECG = [
  {
    id: 'ecg-01',
    nom: 'ECG normal (sinusal)',
    description: 'Rythme régulier d\'origine sinusale, sans anomalie de repolarisation ni de conduction significative. Référence pour comparer tout tracé pathologique chez le sujet âgé (modifications liées à l\'âge : axe, amplitude, onde T plates).',
    criteres: [
      'Onde P positive en DII, DIII, aVF avant chaque QRS (activité atriale sinusale)',
      'Intervalle PR constant entre 120 et 200 ms (conduction AV normale)',
      'Fréquence cardiaque 60–100/min (rythme sinusal)',
      'Complexe QRS étroit < 120 ms, morphologie normale sans bloc de branche',
      'Segment ST isoélectrique (à ± 1 mm du point J en dérivations limites)',
      'Onde T concordante avec le complexe QRS dans chaque dérivation',
      'Axe électrique frontal entre –30° et +90° (adulte ; en gériatrie souvent axe gauche physiologique léger)',
      'Absence d\'onde Q pathologique, d\'hypertrophie critériée, d\'allongement QTc > 450 ms (F) ou > 470 ms (H)'
    ],
    interpretation: 'ECG sans signe de souffrance myocardique aiguë, trouble du rythme, bloc ou intoxication. Ne exclut pas une pathologie (SCA sans onde, EP, embolie) : corréler au contexte clinique. Chez le sujet âgé, répéter si symptômes persistants (douleur, dyspnée, syncope).',
    urgence: false
  },
  {
    id: 'ecg-02',
    nom: 'Fibrillation atriale (FA)',
    description: 'Arythmie supraventriculaire la plus fréquente après 65 ans. Absence d\'activité atriale organisée ; risque thromboembolique (AVC), insuffisance cardiaque et tachycardiomyopathie si FC non contrôlée.',
    criteres: [
      'Absence d\'ondes P discernables ; ligne de base irrégulièrement ondulée (fibrillation) ou plate',
      'Activité atriale « en dents de scie » ou chaos de micro-ondulations (350–600/min non conductibles)',
      'Rythme ventriculaire absolument irrégulier (RR variables sans motif répétitif)',
      'Fréquence ventriculaire variable : bradycardie (< 60), normale ou tachycardie rapide (> 100/min)',
      'Complexes QRS généralement étroits ; élargis si BBG ou aberrance de conduction',
      'Absence de relation fixe P–QRS',
      'Rechercher signes associés : hypertrophie VG, ischémie ST-T, QT, surcharge droite (EP, BPCO)'
    ],
    interpretation: 'FA = anticoagulation selon CHA₂DS₂-VASc (sauf contre-indication), contrôle de la FC (bêta-bloquant, digoxine, inhibiteur calcique non-DHP si besoin) et du symptôme (rythme si jeune ou symptomatique). Urgence si FC > 150/min avec hypotension, douleur thoracique, OAP, syncope (cardioversion / amiodarone IV). Chez le très âgé fragile : souvent priorité anticoagulation + FC plutôt que cardioversion.',
    urgence: false
  },
  {
    id: 'ecg-03',
    nom: 'Flutter atrial',
    description: 'Macro-reentry atriale typique ; activité atriale organisée ~300/min. Conduction ventriculaire souvent 2:1 (FC ~150/min) ou variable. Fréquent chez l\'hypertendu, post-chirurgie cardiaque, BPCO.',
    criteres: [
      'Ondes en « dents de scie » régulières, best vues en DII, DIII, aVF (flutter typique : négatif en bas)',
      'Fréquence atriale classique 250–350/min (souvent ~300/min)',
      'Conduction AV typiquement 2:1 (FC 150) ou 4:1 (FC 75) ; bloc variable possible sous traitement',
      'Absence d\'ondes P sinusales ; activité atriale continue entre les QRS',
      'QRS étroit sauf bloc préexistant ou aberrance',
      'Flutter atypique : ondes positives en bas, fréquence atriale variable',
      'Différencier FA (irrégularité RR totale) vs flutter (ondes F régulières + conduction fixe ou régulièrement irrégulière)'
    ],
    interpretation: 'Traitement : contrôle FC, anticoagulation comme FA (même risque embolique), ablation si récidivant. Urgence si 1:1 (FC 300) ou 2:1 avec instabilité hémodynamique → cardioversion ou ablation urgente + amiodarone. Digoxine peut favoriser conduction 1:1 (prudence).',
    urgence: false
  },
  {
    id: 'ecg-04',
    nom: 'Bloc atrioventriculaire du 1er degré (BAV 1)',
    description: 'Ralentissement de la conduction AV sans interruption. Fréquent chez le sujet âgé (fibrose du tissu de conduction), sportif, ou sous bêta-bloquant, inhibiteur calcique, digoxine.',
    criteres: [
      'Tous les ondes P sont suivies d\'un QRS (conduction 1:1)',
      'Intervalle PR prolongé > 200 ms sur au moins 2 dérivations (mesure du début P au début QRS)',
      'PR constant d\'un battement à l\'autre (pas de chute soudaine)',
      'Rythme sinusal ou autre rythme atrial avec conduction lente',
      'QRS étroit en l\'absence de bloc de branche associé',
      'Pas de pause ni de battements non conductés'
    ],
    interpretation: 'BAV 1 isolé, asymptomatique : surveillance, revue des médicaments ralentissant la conduction. Pas d\'indication systématique au pacemaker. Urgence rare ; rechercher BAV 2/3 masqué si syncope, bradycardie symptomatique, ou PR très long (> 300 ms) avec pauses nocturnes.',
    urgence: false
  },
  {
    id: 'ecg-05',
    nom: 'Bloc atrioventriculaire du 2e degré (BAV 2)',
    description: 'Conduction AV intermittente. Mobitz I (Wenckebach) : souvent bénin, siège nodal. Mobitz II : infranodal, risque de progression vers BAV 3 ; indication pacemaker.',
    criteres: [
      'Mobitz I : allongement progressif du PR jusqu\'à un battement non conducté (onde P bloquée), puis cycle recommence',
      'Groupement des QRS possible (bigéminisme, trégéminisme)',
      'Mobitz II : PR constant sur les conductions, puis P bloquée soudainement sans allongement préalable du PR',
      'Mobitz II souvent associé à QRS large (bloc de branche) = lésion His-Purkinje',
      'Fréquence ventriculaire réduite si nombreuses non-conductions',
      'Distinguer pause sinusale / arrêt sinusale (pas d\'onde P) vs BAV (onde P isolée)',
      'Sur tracé continu : ratio conduction (ex. 3:2, 4:3)'
    ],
    interpretation: 'Mobitz I symptomatique ou très fréquent : traitement médical ou pacemaker si bradycardie. Mobitz II : indication classique pacemaker définitif (même asymptomatique). Urgence si syncope, BAV 2:1 avec QRS large, ou association SCA. Gériatrie : vérifier iatrogénie (bêta-bloquant, amiodarone, digoxine).',
    urgence: false
  },
  {
    id: 'ecg-06',
    nom: 'Bloc atrioventriculaire du 3e degré (BAV complet)',
    description: 'Dissociation complète activité atriale / ventriculaire. Échappement jonctionnel ou ventriculaire. Bradycardie, syncope (maladie d\'Adams-Stokes), insuffisance cardiaque si FC basse.',
    criteres: [
      'Ondes P régulières et QRS réguliers sans relation fixe (dissociation AV)',
      'Fréquence atriale > fréquence ventriculaire (souvent P plus rapides que QRS)',
      'FC ventriculaire d\'échappement : jonctionnel 40–60/min (QRS étroit), ventriculaire < 40/min (QRS large)',
      'Intervalles PP constants et RR constants mais indépendants',
      'Rechercher captures ou fuites ventriculaires (complexes prématurés conductés)',
      'Absence de ondes P capturées avant chaque QRS'
    ],
    interpretation: 'Urgence hémodynamique si FC < 40, hypotension, OAP, syncope : atropine IV, isoprotérénol temporaire, pacing transcutané puis définitif. Pacemaker en urgence relative même si stable. Causes : dégénérescence, SCA inférieur, hyperkaliémie, médicaments, endocardite du nœud.',
    urgence: true
  },
  {
    id: 'ecg-07',
    nom: 'Bloc de branche droit (BBD)',
    description: 'Retard de dépolarisation du ventricule droit. Souvent bénin isolé ; chez le sujet âgé rechercher cardiopathie (COPD, EP chronique, cardiopathie ischémique, shunt ASD).',
    criteres: [
      'Durée QRS ≥ 120 ms',
      'Morphologie rSR\' ou rsR\' en V1–V2 (double déflexion, aspect « M » en précordiales droites)',
      'Onde S large et terminale en V5–V6, DI, aVL',
      'Temps de propagation interne (TPI) en V1 ≥ 40 ms si mesuré',
      'Onde T discordante en V1–V2 (normale en BBD isolé)',
      'Axe frontal souvent normal ou légèrement droit ; pas de critère d\'hypertrophie VG isolé par BBD'
    ],
    interpretation: 'BBD nouveau ou associé à douleur thoracique / dyspnée : SCA (souvent sans onde Q), EP, embolie. BBD + BBG ou BBD + HVG gauche = risque accru. Pas de traitement du BBD seul ; prise en charge de la cause. En urgence : contexte clinique prime sur l\'ECG isolé.',
    urgence: false
  },
  {
    id: 'ecg-08',
    nom: 'Bloc de branche gauche (BBG)',
    description: 'Conduction retardée dans le ventricule gauche. Masque souvent l\'ischémie ST-T et les critères d\'hypertrophie ; complique le diagnostic de SCA et de syncope.',
    criteres: [
      'QRS ≥ 120 ms',
      'Absence de septum q en V5–V6 ; R large et ébouriffé en V5–V6, DI, aVL',
      'QS ou rS profond en V1',
      'Discordance ST-T secondaire (ST-T opposé à la direction du QRS) en précordiales',
      'Critères de Ström et de Cornell modifiés pour HVG moins fiables',
      'Absence de pattern S1Q3 typique isolé (rechercher autre cause si EP suspectée)'
    ],
    interpretation: 'BBG nouveau = équivalent SCA chez patient symptomatique jusqu\'à preuve du contraire (coronarographie si indication). Indication à l\'IRM ou scintigraphie si douleur atypique. BBG chronique : évaluation FEVG, HTA, valve. Syncope : Holter + épreuve d\'effort / électrophysiologie selon guidelines.',
    urgence: false
  },
  {
    id: 'ecg-09',
    nom: 'Allongement de l\'intervalle QT (QT long)',
    description: 'Risque de torsades de pointes et mort subite. Causes : médicaments (antiarythmiques, antipsychotiques, antibiotiques macrolides, fluoroquinolones), hypokaliémie, hypomagnésémie, hypothyroïdie, héréditaire.',
    criteres: [
      'QTc > 450 ms chez l\'homme, > 470 ms chez la femme (formule de Bazett : QT/√RR ; préférer Fridericia si FC extrême)',
      'Mesure du QT du début QRS à la fin de l\'onde T (intersection tangente)',
      'Morphologie T bifide, T alternans (urgence électrique)',
      'Bradycardie aggravant le QTc',
      'U vague prominente (hypokaliémie associée)',
      'Liste médicamenteuse : amiodarone, sotalol, halopéridol, méthadone, érythromycine, etc.'
    ],
    interpretation: 'Arrêt des médicaments allongeant le QT, correction K+ > 4, Mg2+ > 2, surveillance scope. Torsades : magnésium IV 2 g, accélération FC (isoprotérénol, pacing). Urgence si QTc > 500 ms, syncope, polymorphisme ventriculaire. Gériatrie : polypharmacie = revue systématique (cascade iatrogène).',
    urgence: false
  },
  {
    id: 'ecg-10',
    nom: 'Syndrome coronarien aigu avec sus-décalage ST (SCA ST+ / STEMI)',
    description: 'Occlusion coronaire transmural. Coronarographie en urgence (< 120 min). Chez le sujet âgé : présentation atypique (dyspnée, confusion, syncope) ; ECG parfois moins typique.',
    criteres: [
      'Sus-décalage ST ≥ 1 mm (0,1 mV) en ≥ 2 dérivations contiguës (≥ 2 mm en V2–V3 selon sexe)',
      'Territoires : antérieur V2–V4, inférieur DII DIII aVF, latéral DI aVL V5–V6, postérieur (ondes R V1–V2 + dépression ST antérieure)',
      'Ondes Q pathologiques nouvelles possibles en évolution',
      'Reciprocalité : dépression ST en dérivations opposées (ex. antérieur + dépression inférieure)',
      'Hyperaiguë T (stade très précoce) avant sus-ST',
      'BBG nouveau considéré comme équivalent STEMI si clinique concordante'
    ],
    interpretation: 'Urgence absolue : Aspirine, anticoagulation, antiagrégant, reperfusion (PCI primaire ou fibrinolyse si PCI indisponible et pas de contre-indication). Adapter doses âge (poids, fonction rénale). Contre-indications relatives fibrinolyse plus fréquentes chez le très âgé : balance bénéfice/risque.',
    urgence: true
  },
  {
    id: 'ecg-11',
    nom: 'Syndrome coronarien aigu sans sus-décalage ST (SCA ST- / NSTEMI)',
    description: 'Ischémie subendocardique ou transmural non occlusive. Troponines, stratification GRACE / HEART. Pas de reperfusion fibrinolytique ; angioplastie selon risque.',
    criteres: [
      'Dépression horizontale ou descendante du ST ≥ 0,5 mm (0,05 mV) persistante ≥ 0,08 s',
      'Inversion symétrique profonde des ondes T (Wellens, critique si antérieur)',
      'Pas de sus-décalage ST significatif (sauf BBG masquant)',
      'Ondes T négatives nouvelles en territoire coronarien',
      'Possible ECG normal initial (NSTEMI) : ne pas exclure sur ECG seul',
      'Variante : dépression transitoire à l\'effort ou au spasme'
    ],
    interpretation: 'Hospitalisation, antithrombotique, bilan coronarien selon score de risque. Urgence si instabilité (douleur réfractaire, arythmie maligne, OAP, choc). Sujet âgé : seuil plus bas pour hospitalisation et surveillance troponine série.',
    urgence: true
  },
  {
    id: 'ecg-12',
    nom: 'Hypertrophie ventriculaire gauche (HVG)',
    description: 'Réaction à la surcharge pression (HTA, sténose aortique) ou volume. Facteur de risque CV ; associée à arythmie, FA, SCA atypique.',
    criteres: [
      'Indices Sokolow-Lyon : S V1 + R V5 ou V6 ≥ 35 mm',
      'Cornell : R aVL + S V3 > 28 mm (H) ou > 20 mm (F)',
      'Romhilt-Estes : score ≥ 5 points (amplitude, ST-T, axe gauche, onde P mitrale, etc.)',
      'Strain pattern : dépression ST + inversion T latérale (souci ischémie si nouveau)',
      'Onde P élargie > 120 ms en DI (gauche atrial)',
      'QRS pas obligatoirement élargi sauf si HVG sévère ou BBG associé'
    ],
    interpretation: 'Traiter HTA et valve ; échocardiographie pour FEVG et hypertrophie réelle. HVG + douleur : ischémie possible malgré ECG peu spécifique. Pas urgence ECG isolée sauf complication (OAP, arythmie).',
    urgence: false
  },
  {
    id: 'ecg-13',
    nom: 'Hypokaliémie',
    description: 'Troubles du rythme, faiblesse musculaire, ileus. Causes : diurétiques, vomissements, insuline, alcalose. Fréquent en gériatrie (traitements, dénutrition).',
    criteres: [
      'Ondes U proéminentes fusionnant avec T (best en V2–V4)',
      'Aplatissement ou inversion des ondes T',
      'Dépression ST diffuse',
      'Allongement du QT (risque torsades si sévère)',
      'Extrasystoles ventriculaires, tachycardie ventriculaire possible',
      'Réduction amplitude onde P et QRS si K+ très bas',
      'Corrélation ionogramme : K+ < 3,5 mmol/L'
    ],
    interpretation: 'Correction K+ oral ou IV selon gravité, Mg2+ souvent associé. Surveillance ECG pendant perfusion. Urgence si K+ < 2,5, arythmie, crampes / paralysie. Réviser diurétiques et apports.',
    urgence: false
  },
  {
    id: 'ecg-14',
    nom: 'Hyperkaliémie',
    description: 'Urgence vitale potentielle (arrêt cardiaque en onde sinusoïdale). IRA, IEC/ARA2, spironolactone, suppléments K+, hémolyse.',
    criteres: [
      'Ondes T « en tente » : pointues, symétriques, précoces en évolution (K+ modéré)',
      'Élargissement QRS, fusion P-R avec QRS',
      'Onde sinusoïdale (pré-arrêt) : QRS très large sinusoïdal',
      'Bradycardie, BAV, asystolie',
      'Aplatissement P puis disparition des ondes P',
      'FA parfois difficile à diagnostiquer (onde T masque)',
      'K+ sérique > 5,5 mmol/L ; corréler toujours au laboratoire'
    ],
    interpretation: 'Urgence si K+ > 6,5 ou signes ECG : gluconate Ca IV (stabilisation membrane), insuline-glucose, bêta-agoniste, résines, dialyse si réfractaire. Arrêt apports K+, kaliurétiques si possible sans décompenser IC.',
    urgence: true
  },
  {
    id: 'ecg-15',
    nom: 'Péricardite aiguë',
    description: 'Douleur thoracique positionnelle, frottement, épanchement. Virale, urémique, post-IDM, auto-immune. Chez le sujet âgé : tuberculose, néoplasie, urémie.',
    criteres: [
      'Sus-décalage ST concave vers le haut, diffus (pas territorial comme STEMI)',
      'Dépression PR segment (signe de Spodick) en dérivations sans sus-ST',
      'Pas de miroir territorial strict (quelques dépressions possibles aVR)',
      'Pas d\'onde Q pathologique (sauf myopéricardite nécrosante)',
      'Évolution : normalisation ST puis inversion T diffuse',
      'Tachycardie sinusale fréquente ; FA possible si ancien',
      'Bas voltage si épanchement massif'
    ],
    interpretation: 'AINS + colchicine si pas de contre-indication (âge, IRC, interaction). Échocardiographie (épanchement, tamponnade). Urgence si tamponnade (triade de Beck, pouls paradoxal), myopéricardite avec dysfonction VG. Différencier STEMI (territoire, onde Q, troponine très élevée en myocardite).',
    urgence: false
  },
  {
    id: 'ecg-16',
    nom: 'Embolie pulmonaire (EP)',
    description: 'Dyspnée, douleur pleurétique, tachycardie, syncope. ECG souvent normal ou non spécifique ; signes de surcharge droite = mauvais pronostic.',
    criteres: [
      'Tachycardie sinusale (signe le plus fréquent)',
      'S1Q3T3 (onde S DI, Q DIII, T négative DIII) — inconstant, spécificité faible',
      'BBD nouveau ou BBD aigu',
      'Inversion ondes T antérieures V1–V4 (strain droit)',
      'Dépression ST droite V1–V3, dérivation droite V4R si disponible',
      'FA nouvelle, extrasystoles atriales',
      'Signes d\'hypertrophie / strain oreillette droite et VD',
      'ECG normal n\'exclut pas EP (scanner ou angio si probabilité clinique élevée)'
    ],
    interpretation: 'Anticoagulation si confirmation imagerie ou probabilité très haute. Urgence si choc, hypotension, saturation basse : thrombolyse ou embolectomie. Gériatrie : score Wells adapté, attention saignement sous anticoagulant.',
    urgence: true
  },
  {
    id: 'ecg-17',
    nom: 'Intoxication digitalique (digitaux)',
    description: 'Digoxine : arythmies, troubles GI, confusion. Insuffisance rénale et hypokaliémie majorant la toxicité. Très fréquent en gériatrie.',
    criteres: [
      'Extrasystoles ventriculaires bigéminées ou en salve',
      'Tachycardie atriale avec bloc AV (FC ventriculaire ~150 avec bloc variable)',
      'Bradycardie sinusale ou BAV tous degrés',
      'Dépression ST en « coup de cuiller » (strain digitalique chronique, pas seul signe de toxicité)',
      'Rythme junctionnel accéléré',
      'Torsades si hypokaliémie associée',
      'Niveau digoxine > 2 ng/mL (toxicité plus fréquente même « thérapeutique » chez le fragile)'
    ],
    interpretation: 'Arrêt digoxine, correction K+ et Mg2+, Fab antidigoxine si arythmie menaçante, hyperkaliémie, instabilité. Éviter cardioversion électrique si possible (arythmie ventriculaire). Urgence si TV, BAV complet, syncope.',
    urgence: true
  },
  {
    id: 'ecg-18',
    nom: 'Arythmie sinusale respiratoire',
    description: 'Variation du RR liée au cycle respiratoire (accélération à l\'inspiration). Physiologique chez le jeune ; peut persister ou s\'atténuer chez le sujet âgé. À ne pas confondre avec extrasystoles ou BAV.',
    criteres: [
      'Ondes P sinusales présentes avant chaque QRS',
      'RR progressivement plus court à l\'inspiration, plus long à l\'expiration',
      'Variation cyclique régulière liée à la respiration (vérifier sur tracé long)',
      'PR et morphologie QRS stables',
      'Fréquence globale souvent 60–100/min avec oscillation',
      'Absence de battements prématurés ni de pauses pathologiques'
    ],
    interpretation: 'Variante normale, pas de traitement ni exploration. Si variation irrégulière non respiratoire : rechercher FA, extrasystoles atriales. En EVC : rassurer le jury en nommant le mécanisme vagal.',
    urgence: false
  },
  {
    id: 'ecg-19',
    nom: 'Tachycardie sinusale',
    description: 'FC > 100/min avec activité sinusale. Réaction à la douleur, fièvre, déshydratation, anémie, sepsis, OAP, thyrotoxicose, hémorragie. Toujours chercher la cause.',
    criteres: [
      'FC > 100/min (adulte au repos ; adapter effort et contexte)',
      'Onde P positive en DII avant chaque QRS',
      'Morphologie P constante (même origine sinusale)',
      'PR normal ou légèrement raccourci (réponse sympathique)',
      'QRS étroit sauf bloc associé',
      'Régularité RR (sauf respiration)',
      'Pas d\'ondes F ni fibrillation'
    ],
    interpretation: 'Traiter la cause (perfusion, antipyrétique, O2, anticoagulation EP, etc.). Urgence si FC > 150 persistante avec hypotension, douleur thoracique (SCA, EP), OAP. Éviter de labeliser « syndrome tachycardie » sans bilan.',
    urgence: false
  },
  {
    id: 'ecg-20',
    nom: 'Bradycardie sinusale',
    description: 'FC < 60/min, origine sinusale. Physiologique (sportif, sommeil), ou pathologique (hypothyroïdie, hyperkaliémie, médicaments, ischémie sinusale, vieillissement du nœud).',
    criteres: [
      'FC < 60/min au repos',
      'Onde P sinusale avant chaque QRS, régularité RR',
      'PR dans les normes ou BAV 1 associé',
      'QRS étroit en l\'absence de bloc distal',
      'Pauses sinusales ou arrêt sinusale si maladie du sinus (≠ bradycardie simple)',
      'Rechercher médicaments : bêta-bloquant, digoxine, amiodarone, ivabradine'
    ],
    interpretation: 'Asymptomatique et médicamenteuse : réduire ou arrêter le coupable. Symptomatique (syncope, lipothymie, asthénie, chute) : Holter, épreuve à l\'atropine, pacemaker si maladie du sinus ou BAV. Urgence si syncope récente ou BAV associé.',
    urgence: false
  },
  {
    id: 'ecg-21',
    nom: 'Extrasystoles (supra- et ventriculaires)',
    description: 'Battements prématurés isolés ou groupés. Fréquentes et souvent bénignes chez le sujet âgé ; significance si charge élevée, cardiopathie, ou runs de TV.',
    criteres: [
      'ESV : QRS prématuré large, bizarre, sans onde P préalable ou P dissociée, pause compensatoire complète',
      'ESA : QRS prématuré étroit, onde P morphologie différente, pause incomplète',
      'Bigéminisme : alternance normale / extrasystole',
      'Triplet ou salves : ≥ 3 extrasystoles consécutives (TV non soutenue si < 30 s)',
      'Morphologie unimorphique vs polymorphique (torsades si QT long)',
      'Fréquence et contexte : effort, hypokaliémie, digitaliques, ischémie'
    ],
    interpretation: 'ESA isolées sans cardiopathie : rassurance, éviter excitants. ESV fréquentes ou symptomatiques : échocardiographie, Holter. Urgence si TV soutenue, syncope, QT long + polymorphisme. Gériatrie : ne pas oublier correction ionique et iatrogénie avant antiarythmique.',
    urgence: false
  }
];
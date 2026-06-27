// ═══════════════════════════════════════════════════════════════
//  Protocoles complets gériatrie — collection définitive
//  URGENCE · ATB · ANTALGIE · CARDIO · NEURO · MÉTABOLIQUE ·
//  RESPIRATOIRE · RÉNAL · DIGESTIF · GÉRIATRIE SPÉCIFIQUE
// ═══════════════════════════════════════════════════════════════

const PROTOCOLES_COMPLETS = [
  {
    id: "uv-sepsis",
    categorie: "URGENCE VITALE",
    titre: "Sepsis / choc septique",
    indication: "Suspicion d'infection + dysfonction organique (confusion, hypotension, oligurie, lactates élevés).",
    protocole: [
          "Reconnaître le sepsis masqué chez le sujet âgé : hypothermie, absence de fièvre, confusion isolée.",
          "Prélèvements AVANT antibiotiques : 2 hémocultures, ECBU, prélèvements focaux selon clinique.",
          "Bilan : NFS, CRP, procalcitonine, lactates, ionogramme, créatinine, bilan hépatique, gaz du sang.",
          "Remplissage NaCl 0,9 % 500 mL IV en 30 min, réévaluer PA/FC/diurèse ; répéter si besoin (cible MAP ≥ 65 mmHg).",
          "Antibiothérapie probabiliste dans l'heure : amoxicilline-acide clavulanique 2 g IV toutes les 8 h ± gentamicine 5 mg/kg/j (adapter IRC).",
          "Si choc persistant : noradrénaline 0,05–0,5 µg/kg/min titration (cible MAP 65–75 mmHg).",
          "Recherche de foyer : radiographie thorax, échographie abdominale/cardiaque, scanner si indiqué.",
          "Réévaluation H6–H12 : lactates, diurèse, transfert USI si vasopresseurs ou défaillance multi-organes."
        ],
    surveillance: "PA/MAP H1, diurèse horaire, lactates H0/H6, température, conscience, CRP/PCT J3.",
    effetsSecondaires: "Néphrotoxicité AGS, diarrhée Clostridioides, rash, C. difficile.",
    contreIndications: "Allergie bêta-lactamines sévère (adapter schéma), IRC sévère non dialysée pour gentamicine.",
    alerte: "Chez le sujet âgé : fièvre et leucocytose souvent absents — ne pas retarder les antibiotiques."
  },
  {
    id: "uv-oap",
    categorie: "URGENCE VITALE",
    titre: "Œdème aigu du poumon cardiogénique",
    indication: "Dyspnée aiguë, crépitants bilatéraux, SpO₂ basse, contexte cardiaque ou HTA.",
    protocole: [
          "Position assise, O₂ lunettes 6–15 L/min ou masque haute concentration (cible SpO₂ 94–98 %).",
          "Furosémide 40–80 mg IV (doubler si traitement diurétique chronique important).",
          "Si PAS > 100 mmHg : trinitrine 0,4 mg sublinguale ou patch/perfusion nitrée titrée.",
          "Si détresse respiratoire : CPAP 5–10 cmH₂O ou VNI (PEEP, FiO₂ adaptée).",
          "Morphine 2–4 mg IV lente si anxiété/dyspnée réfractaire (surveillance respiratoire).",
          "ECG, troponine, ionogramme, BNP/NT-proBNP, gaz du sang, échocardiographie en urgence si disponible.",
          "Traiter la cause : arythmie, IDM, crise hypertensive, valvulopathie.",
          "Restriction hydrique/sodée, surveillance diurèse et poids."
        ],
    surveillance: "SpO₂ continu, PA toutes les 15 min sous nitrés, diurèse, crépitants, signes de choc.",
    effetsSecondaires: "Hypotension, bradycardie (nitrés), déshydratation (diurétiques), dépression respiratoire (morphine).",
    contreIndications: "Choc cardiogénique (PAS < 90), sténose aortique serrée non contrôlée, OAP lésionnel (SDRA).",
    alerte: "PAS < 90 : pas de dérivés nitrés. OAP lésionnel : pas de furosémide en première intention."
  },
  {
    id: "uv-avc",
    categorie: "URGENCE VITALE",
    titre: "AVC aigu (code stroke)",
    indication: "Déficit neurologique focal brutal, heure de début connue ou réveil avec symptômes.",
    protocole: [
          "FAST + glycémie capillaire + PA (cible < 185/110 avant thrombolyse).",
          "Scanner cérébral sans injection < 30 min pour exclure hémorragie.",
          "Si ischémique et < 4,5 h : alteplase 0,9 mg/kg (max 90 mg), 10 % bolus puis 90 % en 1 h.",
          "Contre-indications thrombolyse : anticoagulation récente, chirurgie majeure < 14 j, PA > 185/110 non contrôlée.",
          "Si occlusion gros tronc < 24 h : imagerie vasculaire et thrombectomie mécanique si éligible.",
          "Hospitalisation unité neurovasculaire ; jeûne jusqu'à évaluation déglutition.",
          "Prévention complications : mobilisation précoce guidée, bas de contention si immobilisation, hydratation.",
          "Antiagrégation/anticoagulation selon type AVC et délai (avis neurologue)."
        ],
    surveillance: "NIHSS H1 puis régulier, PA H1 les 24 h, glycémie, déglutition avant alimentation.",
    effetsSecondaires: "Hémorragie post-thrombolyse, œdème cérébral, fausses routes.",
    contreIndications: "Hémorragie intracrânienne, INR > 1,7, plaquettes < 100 G/L, AVC mineur ou résolution rapide.",
    alerte: "Chaque minute compte : thrombolyse 4,5 h, thrombectomie jusqu'à 24 h selon imagerie."
  },
  {
    id: "uv-idm",
    categorie: "URGENCE VITALE",
    titre: "Syndrome coronarien aigu / IDM",
    indication: "Douleur thoracique ou équivalent (dyspnée, malaise, confusion) + facteurs de risque cardio.",
    protocole: [
          "ECG 12 dérivations < 10 min ; répéter si doute.",
          "Troponine haute sensibilité H0 et H1–H3 selon protocole local.",
          "Aspirine 250 mg IV ou 300 mg PO sauf allergie ; second antiagrégant (ticagrélor 180 mg ou clopidogrel 300 mg) si SCA.",
          "Anticoagulation : héparine non fractionnée ou HBPM selon filière (coronarographie).",
          "O₂ si SpO₂ < 90 % ; morphine 2–4 mg IV si douleur intense.",
          "STEMI : reperfusion < 120 min (angioplastie primaire ou thrombolyse si retard transfert).",
          "NSTEMI/SCA sans ST+ : stratégie invasive précoce si haut risque (GRACE).",
          "Bêta-bloquant, statine haute dose, IEC si toléré avant sortie."
        ],
    surveillance: "ECG continu, troponine série, PA, douleur, signes d'insuffisance cardiaque.",
    effetsSecondaires: "Saignement, troubles conduction, hypotension, hyperkaliémie.",
    contreIndications: "Allergie aspirine, hémorragie active, dissection aortique suspectée.",
    alerte: "Présentation atypique fréquente chez le sujet âgé : dyspnée ou confusion sans douleur thoracique."
  },
  {
    id: "uv-hyperkaliemie",
    categorie: "URGENCE VITALE",
    titre: "Hyperkaliémie sévère",
    indication: "K⁺ > 6,5 mmol/L ou ECG avec ondes T pointues / élargissement QRS / arythmie.",
    protocole: [
          "ECG immédiat ; traiter si anomalies ECG même si K⁺ modérément élevé.",
          "Gluconate de calcium 10 % 10 mL IV en 2–3 min (protection myocardique, effet 30–60 min).",
          "Insuline rapide 10 UI IV + glucose 30 % 50 mL (ou 20 g glucides PO si voie veineuse difficile).",
          "Salbutamol 10–20 mg nébulisation (effet transitoire).",
          "Bicarbonate de sodium si acidose métabolique pH < 7,2 (prudence surcharge).",
          "Élimination : furosémide si diurèse conservée, résine (patiromer/sodium polystyrène) ou hémodialyse si IRA/réfractaire.",
          "Arrêter apports K⁺, suspendre IEC/ARA2, spironolactone, triméthoprime, AINS.",
          "Contrôle K⁺ à 2–4 h ; traiter la cause (IRA, rhabdomyolyse, hémolyse)."
        ],
    surveillance: "ECG continu, K⁺ toutes les 2–4 h, glycémie sous insuline, diurèse.",
    effetsSecondaires: "Hypoglycémie (insuline), hypercalcémie (gluconate), constipation (résines).",
    contreIndications: "Hypercalcémie sévère relative au gluconate (prudence).",
    alerte: "ECG anormal = urgence avant résultat biologique définitif."
  },
  {
    id: "uv-hyponatremie",
    categorie: "URGENCE VITALE",
    titre: "Hyponatrémie symptomatique",
    indication: "Na⁺ < 120 mmol/L ou symptômes neurologiques (confusion, convulsions, coma) quel que soit Na⁺.",
    protocole: [
          "Osmolarité plasmatique, Na⁺ urinaire, osmolarité urinaire, volémie clinique.",
          "Si convulsions/coma : NaCl 3 % 100–150 mL IV en 20 min, répéter selon Na⁺ cible.",
          "Limiter correction : max 8–10 mmol/L en 24 h (risque myélinolyse osmotique centrale).",
          "Hypovolémique : remplissage NaCl 0,9 % ; euvolémique/SIADH : restriction eau 800–1000 mL/j.",
          "Rechercher médicaments : ISRS, carbamazépine, diurétiques thiazidiques, desmopressine.",
          "Corriger hypothyroïdie, insuffisance surrénale si présentes.",
          "Vaptans (tolvaptan) uniquement si expertise et surveillance étroite.",
          "Na⁺ toutes les 4–6 h pendant correction active."
        ],
    surveillance: "Na⁺ 4–6 h, osmolarité, diurèse, signes neurologiques.",
    effetsSecondaires: "Myélinolyse si correction rapide, surcharge si NaCl 3 % excessif.",
    contreIndications: "Correction rapide chez hyponatrémie chronique asymptomatique.",
    alerte: "Correction > 10 mmol/L/24 h = risque neurologique majeur et souvent irréversible."
  },
  {
    id: "uv-hypoglycemie",
    categorie: "URGENCE VITALE",
    titre: "Hypoglycémie sévère",
    indication: "Glycémie < 3,3 mmol/L ou symptômes neuroglycopéniques (confusion, sueurs, convulsions).",
    protocole: [
          "Si conscient et avalant : 15–20 g glucides rapides (jus, sucre), recheck 15 min.",
          "Si inconscient ou IV : glucose 30 % 50 mL IV bolus, répéter si besoin.",
          "Si pas de voie veineuse : glucagon 1 mg IM/SC (moins efficace si réserves hépatiques basses).",
          "Perfusions glucose 10 % si hypoglycémie récurrente ou sulfamides hypoglycémiants longue durée.",
          "Rechercher cause : jeûne, insuline/sulfamide, IRC, sepsis, insuffisance hépatique.",
          "Après épisode : snack prolongé + ajustement antidiabétiques.",
          "Ne pas libérer seul si confusion persistante — risque de récidive."
        ],
    surveillance: "Glycémie capillaire toutes les 15–30 min jusqu'à stabilisation > 5,5 mmol/L.",
    effetsSecondaires: "Hyperglycémie rebond post-glucagon, thrombophlébite (glucose concentré).",
    contreIndications: "Glucagon si phéochromocytome (rare).",
    alerte: "Sujet âgé sous sulfamides : hypoglycémie prolongée — surveillance prolongée 24–48 h."
  },
  {
    id: "uv-anaphylaxie",
    categorie: "URGENCE VITALE",
    titre: "Anaphylaxie",
    indication: "Urticaire + atteinte respiratoire ou cardiovasculaire après allergène (médicament, aliment, piqûre).",
    protocole: [
          "Arrêter l'exposant ; appeler aide ; position décubitus jambes surélevées si hypotension.",
          "Adrénaline IM face antérolatérale cuisse : 0,5 mg (0,5 mL de 1 mg/mL), répéter toutes les 5–15 min si besoin.",
          "O₂ haut débit ; remplissage NaCl 0,9 % si choc.",
          "Antihistaminique H1 (dexchlorphéniramine 5 mg IV) + H2 si disponible.",
          "Corticoïdes IV (méthylprednisolone 40–80 mg) pour prévenir réaction biphasique.",
          "Bronchospasme : salbutamol nébulisé.",
          "Surveillance 6–12 h (réaction biphasique).",
          "Prescrire auto-injecteur adrénaline + allergologue à la sortie."
        ],
    surveillance: "PA, SpO₂, fréquence respiratoire, récidive symptômes H2–H6.",
    effetsSecondaires: "Tachycardie, tremblements, HTA (adrénaline), somnolence (antihistaminiques).",
    contreIndications: "Contre-indication relative : bêta-bloquant (adrénaline toujours indiquée en anaphylaxie).",
    alerte: "Adrénaline IM en première ligne — pas d'antihistaminique seul en urgence."
  },
  {
    id: "abx-pneumopathie",
    categorie: "ANTIBIOTHERAPIE",
    titre: "Pneumopathie communautaire (sujet âgé)",
    indication: "Fièvre/toux, infiltrat radiologique, dégradation état général ou confusion.",
    protocole: [
          "Score CRB-65/PSI ; gaz du sang si dyspnée.",
          "Amoxicilline-acide clavulanique 2 g IV/8 h ou ceftriaxone 1 g/j + azithromycine si atypique.",
          "Si SDRA/sepsis : piperacilline-tazobactam ou ceftriaxone + macrolide selon local.",
          "Durée 5–7 j si bonne évolution.",
          "Vaccination pneumocoque/ grippe à la sortie.",
          "Déchoquage si besoin, O₂, kinésithérapie respiratoire."
        ],
    surveillance: "SpO₂, CRP J3, radiographie contrôle si non amélioration J3.",
    effetsSecondaires: "Diarrhée, C. difficile, rash.",
    contreIndications: "Allergie bêta-lactamines (quinolone + macrolide selon filière).",
    alerte: "Confusion isolée peut être seul signe chez le sujet âgé."
  },
  {
    id: "abx-itu",
    categorie: "ANTIBIOTHERAPIE",
    titre: "Infection urinaire / pyélonéphrite",
    indication: "Symptômes urinaires ± fièvre, douleur lombaire, leucocyturie/bactériurie.",
    protocole: [
          "ECBU avant antibiotique si possible.",
          "Cystite simple : fosfomycine 3 g dose unique ou pivmécillinam selon résistance locale.",
          "Pyélonéphrite : ceftriaxone 1 g/j IV puis relais PO 7–10 j.",
          "Hydratation, antipyrétique, rechercher obstacle (sonde, lithiase).",
          "Échographie rein si fièvre > 72 h ou suspicion abcès."
        ],
    surveillance: "Température, douleur, créatinine, ECBU contrôle si échec.",
    effetsSecondaires: "Néphrotoxicité AGS, C. difficile.",
    contreIndications: "Allergie céphalosporines.",
    alerte: "Delirium = pyélonéphrite jusqu'à preuve du contraire chez patient âgé fébrile."
  },
  {
    id: "abx-cellulite",
    categorie: "ANTIBIOTHERAPIE",
    titre: "Cellulite / érysipèle",
    indication: "Placard érythémateux chaud, douloureux, limites souvent nettes (érysipèle).",
    protocole: [
          "Marquer limites au feutre ; photographie.",
          "Flucloxacilline 2 g IV/6 h ou céfazoline ; allergie : clindamycine 600 mg/8 h.",
          "Érysipèle membre : repos, surélévation, contention si œdème chronique.",
          "Durée 7–10 j ; prolonger si lenteur cicatrisation ou comorbidités.",
          "Rechercher porte d'entrée (intertrigo, ulcère)."
        ],
    surveillance: "Extension placard quotidienne, CRP, signes nécrose/fasciite.",
    effetsSecondaires: "Diarrhée, hépatotoxicité (clindamycine rare).",
    contreIndications: "Allergie pénicilline anaphylactique.",
    alerte: "Fasciite nécrosante si douleur disproportionnée — chirurgie en urgence."
  },
  {
    id: "abx-prothese",
    categorie: "ANTIBIOTHERAPIE",
    titre: "Infection de prothèse (hanche/genou)",
    indication: "Douleur mécanique, fébricule, CRP élevée, ponction prothèse positive.",
    protocole: [
          "Ponction articulaire (leucocytes, culture) AVANT antibiotique si possible.",
          "Débridement chirurgical + rifampicine + fluoroquinolone ou vancomycine selon germe.",
          "Durée prolongée (6–12 semaines) ; avis infectiologue/orthopédie.",
          "Retrait prothèse souvent nécessaire si infection chronique."
        ],
    surveillance: "CRP, douleur, ESR, cultures.",
    effetsSecondaires: "Toxicité rifampicine (interactions), tendinopathie FQ.",
    contreIndications: "Insuffisance hépatique sévère (rifampicine).",
    alerte: "Ne jamais traiter seulement par antibiotiques sans avis spécialisé si prothèse."
  },
  {
    id: "abx-meningite",
    categorie: "ANTIBIOTHERAPIE",
    titre: "Méningite bactérienne (adulte)",
    indication: "Fièvre, raideur méningée, photophobie, altération conscience.",
    protocole: [
          "Ceftriaxone 2 g IV/12 h + amoxicilline 2 g/4 h si Listeria (> 50 ans).",
          "Dexaméthasone 10 mg IV avant ou avec 1ère dose antibiotique si pneumocoque suspecté.",
          "PL dès que possible ; hémocultures.",
          "Isolement contact 24 h après antibiotique efficace.",
          "Prophylaxie entourage si méningocoque."
        ],
    surveillance: "Glasgow, PL contrôle si non amélioration.",
    effetsSecondaires: "Séquelles auditives, thromboses veineuses.",
    contreIndications: "Allergie céphalosporines (meropenem).",
    alerte: "Listeria fréquente > 50 ans — toujours couvrir."
  },
  {
    id: "abx-cdiff",
    categorie: "ANTIBIOTHERAPIE",
    titre: "Infection à Clostridioides difficile",
    indication: "Diarrhée aqueuse post-antibiotique, toxine positive, leucocytose.",
    protocole: [
          "Arrêter antibiotique causal si possible.",
          "Mild : vancomycine PO 125 mg/6 h 10 j ou fidaxomicine.",
          "Sévère : vancomycine PO 500 mg/6 h ; métronidazole PO si indisponibilité.",
          "Forme fulminante : vancomycine PO + rectale, chirurgie si choc/toxique méga-colon.",
          "Pas de lomotil ; isolement contact."
        ],
    surveillance: "Nombre selles, créatinine, leucocytes, abdomen.",
    effetsSecondaires: "Néphrotoxicité vancomycine IV (pas PO), neuropathie métro.",
    contreIndications: "Ileus (métro PO seul insuffisant en fulminant).",
    alerte: "Rechute fréquente — éviter antibiotiques large spectre inutiles."
  },
  {
    id: "abx-neutropenie",
    categorie: "ANTIBIOTHERAPIE",
    titre: "Sepsis neutropénique",
    indication: "Neutrophiles < 0,5 G/L + fièvre ≥ 38 °C ou signes infection.",
    protocole: [
          "Hémocultures x2, ECBU, radiographie thorax, examen peau/muqueuses.",
          "Piperacilline-tazobactam 4 g/6 h IV ou céfépime ± vancomycine si cathéter/porte cutanée.",
          "G-CSF selon protocole oncologie.",
          "Hospitalisation ; isolement protecteur.",
          "Réévaluation J2–J3."
        ],
    surveillance: "Courbe fébrile, cultures, fonction rénale.",
    effetsSecondaires: "Néphrotoxicité, C. difficile.",
    contreIndications: "Allergie bêta-lactamines.",
    alerte: "Fièvre sous neutropénie = urgence — antibiotique dans l'heure."
  },
  {
    id: "abx-endocardite",
    categorie: "ANTIBIOTHERAPIE",
    titre: "Endocardite infectieuse",
    indication: "Fièvre, souffle nouveau, hémocultures positives, végétation écho.",
    protocole: [
          "3 hémocultures à intervalles ; antibiotique APRÈS prélèvements si stable.",
          "Schéma selon germe : amoxicilline + gentamicine (strepto) ; vancomycine (staph) — durée 4–6 semaines.",
          "Échocardiographie transœsophagienne.",
          "Chirurgie si insuffisance cardiaque, abcès, germe agressif.",
          "Anticoagulation prudente si valve mécanique."
        ],
    surveillance: "CRP, hémocultures contrôle, fonction rénale (genta).",
    effetsSecondaires: "Néphrotoxicité AGS, ototoxicité.",
    contreIndications: "Allergie pénicilline.",
    alerte: "Ne pas oublier endocardite sur matériel (PM, valves)."
  },
  {
    id: "abx-abces",
    categorie: "ANTIBIOTHERAPIE",
    titre: "Abcès profond / collection",
    indication: "Collection avérée à imagerie, fièvre, douleur, CRP élevée.",
    protocole: [
          "Drainage percutané ou chirurgical = priorité.",
          "Antibiotiques adaptés au site et aux cultures : amoxicilline-clavulanate ou ceftriaxone + métronidazole intra-abdominal.",
          "Durée courte si drainage complet (4–7 j) puis relais ciblé.",
          "Contrôle imagerie post-drainage."
        ],
    surveillance: "CRP, température, drainage.",
    effetsSecondaires: "C. difficile, toxicité molécule.",
    contreIndications: "Allergie.",
    alerte: "Antibiotique seul sans drainage = échec fréquent."
  },
  {
    id: "abx-erysipele",
    categorie: "ANTIBIOTHERAPIE",
    titre: "Érysipèle du membre inférieur",
    indication: "Placard rouge vif, chaud, limites nettes, fièvre, lymphangite.",
    protocole: [
          "Bilan entrée : insuffisance veineuse, lymphœdème, intertrigo.",
          "Bénzylpénicilline IV ou flucloxacilline ; relais PO 7 j minimum.",
          "Surélévation membre, contention classe 2 si veineux.",
          "Traiter porte d'entrée (mycose interdigitale : antifongique).",
          "Vaccin antitétanique si plaie."
        ],
    surveillance: "Tracé limites, CRP, récidives.",
    effetsSecondaires: "Diarrhée.",
    contreIndications: "Allergie pénicilline.",
    alerte: "Récidives = recherche cause locale et contention au long cours."
  },
  {
    id: "ant-douleur-aigue",
    categorie: "ANTALGIE",
    titre: "Douleur aiguë modérée à sévère",
    indication: "Douleur récente < 3 mois, score NRS ≥ 4, traumatisme, post-opératoire.",
    protocole: [
          "Évaluer NRS, localisation, mécanisme, antécédents ulcère/RGO.",
          "Paracétamol 1 g/6 h max 4 g/j (réduire si < 50 kg ou IRC).",
          "Si insuffisant : tramadol 50–100 mg/6 h ou morphine 2,5–5 mg SC/IV titration.",
          "AINS à éviter chez sujet âgé sauf indication courte (IRC, ulcère, anticoagulant).",
          "Traiter cause ; réévaluation douleur 1 h après opioïde."
        ],
    surveillance: "NRS, sédation, constipation, fonction rénale.",
    effetsSecondaires: "Nausées, confusion, rétention urinaire, chute.",
    contreIndications: "Insuffisance respiratoire sévère, iléus.",
    alerte: "Opioïdes : débuter dose faible, titration lente — sensibilité accrue."
  },
  {
    id: "ant-douleur-chronique",
    categorie: "ANTALGIE",
    titre: "Douleur chronique nociceptive",
    indication: "Douleur > 3 mois, arthrose, lombalgie, cancer stable.",
    protocole: [
          "Paracétamol palier 1 ; palier 2 tramadol ou codéine si besoin.",
          "AINS topique ou courte durée si pas de CI cardio-rénale.",
          "Kinésithérapie, activité adaptée, TENS.",
          "Réévaluation régulière objectifs (sommeil, marche).",
          "Éviter polyopioïdes sans revue."
        ],
    surveillance: "NRS hebdomadaire, fonction, sommeil.",
    effetsSecondaires: "AINS : IRA, ulcère ; opioïdes : chutes.",
    contreIndications: "IRC sévère, antécédent ulcère digestif actif.",
    alerte: "WHO ladder adaptée — pas d'AINS chronique systématique chez le sujet âgé."
  },
  {
    id: "ant-neuropathique",
    categorie: "ANTALGIE",
    titre: "Douleur neuropathique",
    indication: "Brûlure, décharges, allodynie (zona, diabète, chimio).",
    protocole: [
          "Gabapentine début 100–300 mg le soir, titration 300 mg/3 j (max 1800 mg/j si ClCr OK).",
          "Prégabaline 25–75 mg/j alternative.",
          "Duloxétine 30 mg si comorbidité anxio-dépressive.",
          "Tramadol ou faible opioïde si échec.",
          "Lidocaïne patch 5 % local si zone limitée."
        ],
    surveillance: "Sédation, équilibre, fonction rénale (gabapentine).",
    effetsSecondaires: "Vertiges, œdème (prégabaline), hyponatrémie.",
    contreIndications: "Myasthénie, conduite si sédation.",
    alerte: "DN4 positif oriente traitement spécifique — paracétamol seul souvent inefficace."
  },
  {
    id: "ant-fin-de-vie",
    categorie: "ANTALGIE",
    titre: "Douleur en fin de vie",
    indication: "Phase palliative, douleur réfractaire ou dyspnée, pronostic court.",
    protocole: [
          "Morphine 2,5–5 mg SC/4 h + dose de secours 50 % dose fixe.",
          "Rotation opioïde si hyperalgésie ou toxicité.",
          "Midazolam si agitation réfractaire ; halopéridol si délire.",
          "Sédation proportionnée si souffrance intraitable (cadre légal local).",
          "Arrêter examens inutiles ; confort bouche, position."
        ],
    surveillance: "Douleur, sédation, secretions, peau.",
    effetsSecondaires: "Myosis, rétention (opioïdes).",
    contreIndications: "Allergie morphine rare (essayer oxycodone).",
    alerte: "Pas de sous-dosage par crainte — titration rapide si douleur sévère."
  },
  {
    id: "ant-dement",
    categorie: "ANTALGIE",
    titre: "Douleur chez le patient dément",
    indication: "Comportements (agitation, retrait) sans communication verbale fiable.",
    protocole: [
          "Échelles DOLOPLUS2 ou PAINAD à chaque soin.",
          "Rechercher cause traitable : constipation, infection, fracture, œil, oreille.",
          "Paracétamol systématique si suspicion douleur (1 g/8 h).",
          "Opioïde faible dose si scores persistants.",
          "Massage, chaleur, repositionnement."
        ],
    surveillance: "Scores comportementaux quotidiens, effets secondaires.",
    effetsSecondaires: "Sédation excessive masquant douleur.",
    contreIndications: "Surdosage si staff sous-estime sensibilité.",
    alerte: "Agitation = douleur jusqu'à preuve du contraire — pas de neuroleptique seul en première intention."
  },
  {
    id: "card-fa",
    categorie: "CARDIO",
    titre: "Fibrillation atriale (aiguë ou chronique)",
    indication: "Palpitations, FC élevée, ECG FA, dyspnée ou asymptomatique.",
    protocole: [
          "Calculer CHA₂DS₂-VASc et HAS-BLED.",
          "Contrôle FC : bêta-bloquant ou inhibiteur calcique non-DHP (éviter si IC décompensée).",
          "Anticoagulation si CHA₂DS₂-VASc ≥ 2 (AVK ou AOD).",
          "FA < 48 h symptomatique : cardioversion après anticoagulation ou TOE.",
          "Rechercher cause : infection, hyperthyroïdie, alcool."
        ],
    surveillance: "FC, PA, INR/anti-Xa, saignement.",
    effetsSecondaires: "Bradycardie, hypotension, saignement.",
    contreIndications: "Valvulopathie mitrale (AVK obligatoire).",
    alerte: "Anticoagulation souvent sous-prescrite chez le sujet âgé — équilibrer risque chute."
  },
  {
    id: "card-hta-urgente",
    categorie: "CARDIO",
    titre: "HTA urgente / urgence hypertensive",
    indication: "PA très élevée avec atteinte organe (neurologique, rénale, OAP) ou symptomatique.",
    protocole: [
          "Différencier urgence (sans lésion aiguë) vs urgence hypertensive (avec lésion).",
          "Urgence : réduction PA progressive 25 % en 24 h (amlodipine, ramipril).",
          "Urgence hypertensive : nicardipine IV ou labétalol IV en milieu surveillé.",
          "Éviter chute brutale PA (ischémie cérébrale, coronarienne).",
          "Rechercher cause : médicaments (AINS), douleur, rétention urinaire."
        ],
    surveillance: "PA H1, neurologique, diurèse, créatinine.",
    effetsSecondaires: "Hypotension, tachycardie.",
    contreIndications: "Choc, IDM en cours sans reperfusion planifiée.",
    alerte: "Pas de traitement agressif si HTA asymptomatique modérée — risque iatrogène."
  },
  {
    id: "card-ica",
    categorie: "CARDIO",
    titre: "Insuffisance cardiaque aiguë décompensée",
    indication: "Dyspnée, œdèmes, crépitants, BNP élevé, surcharge.",
    protocole: [
          "Diurétique IV furosémide ; O₂/VNI si détresse.",
          "Nitrés si PA suffisante ; morphine prudente.",
          "Bilan : troponine, écho, ionogramme.",
          "Traitement de fond : IEC/ARNI, bêta-bloquant, MRA si FEVG réduite (après stabilisation).",
          "Rechercher déclencheur : infection, arythmie, ischémie, non observance."
        ],
    surveillance: "Diurèse, poids, créatinine, K⁺, PA.",
    effetsSecondaires: "IRA, hypotension, hyperkaliémie.",
    contreIndications: "Choc cardiogénique (noradrénaline, pas diurétique seul).",
    alerte: "Confusion peut être seul signe de décompensation chez le sujet âgé."
  },
  {
    id: "card-coronaropathie",
    categorie: "CARDIO",
    titre: "Angor stable / coronaropathie chronique",
    indication: "Douleur thoracique effort, ECG/ST normal au repos, ATCD cardio.",
    protocole: [
          "Aspirine 75–100 mg, statine haute dose, bêta-bloquant.",
          "IEC si HTA/DM/IC.",
          "Nitrate sublingual si angor.",
          "Test effort ou imagerie ischémique selon capacité.",
          "Revascularisation si angor réfractaire ou ischémie significative."
        ],
    surveillance: "Douleur, tolérance effort, LDL.",
    effetsSecondaires: "Hypotension nitrates, bradycardie.",
    contreIndications: "Allergie aspirine.",
    alerte: "Angor de novo ou crescendo = SCA jusqu'à preuve du contraire."
  },
  {
    id: "card-aomi",
    categorie: "CARDIO",
    titre: "Artériopathie oblitérante des MI (AOMI)",
    indication: "Claudication, douleur repos, plaies ischémiques, pouls absents.",
    protocole: [
          "Index pression systolique cheville/bras < 0,9.",
          "Antiagrégation, statine, IEC, sevrage tabac.",
          "Douleur repos : héparine + analgésie + avis chirurgie vasculaire.",
          "Soins plaie, éviter pression mécanique.",
          "Contrôle HTA, diabète, dyslipidémie."
        ],
    surveillance: "Plaies, douleur, IPS régulier.",
    effetsSecondaires: "Saignement anticoagulant.",
    contreIndications: "Hémorragie active.",
    alerte: "Douleur membre aiguë = ischémie critique — heure compte."
  },
  {
    id: "card-orthostatique",
    categorie: "CARDIO",
    titre: "Hypotension orthostatique",
    indication: "Chute PA ≥ 20/10 mmHg à 3 min debout, vertiges, syncope.",
    protocole: [
          "Mesure couché/debout ; revue médicaments (diurétiques, alpha-bloquants, antidépresseurs).",
          "Hydratation, lever progressif, bas de contention.",
          "Fludrocortisone 0,1 mg/j si symptomatique et euvolémique.",
          "Midodrine 2,5–5 mg si échec (spécialiste).",
          "Éducation chute, environnement sécurisé."
        ],
    surveillance: "PA orthostatique, chutes, sodium.",
    effetsSecondaires: "Œdème, HTA supine (fludrocortisone).",
    contreIndications: "IC non contrôlée, HTA sévère supine.",
    alerte: "Polypharmacie = cause n°1 — déprescription avant nouveaux médicaments."
  },
  {
    id: "card-tvp-ep",
    categorie: "CARDIO",
    titre: "TVP et embolie pulmonaire",
    indication: "Douleur jambe unilatérale, dyspnée, douleur pleurale, tachycardie.",
    protocole: [
          "Score Wells TVP/EP ; D-dimères si probabilité faible.",
          "Écho-Doppler veineux ; angio-scanner thorax si EP suspectée.",
          "Anticoagulation : HBPM ou AOD (rivaroxaban 15 mg x2 21 j puis 20 mg).",
          "EP massive : thrombolyse si instabilité hémodynamique.",
          "Durée 3–6 mois minimum."
        ],
    surveillance: "Hb, créatinine (dose HBPM), saignement.",
    effetsSecondaires: "Hémorragie majeure.",
    contreIndications: "ClCr < 30 pour certaines AOD.",
    alerte: "Sujet âgé : saignement digestif fréquent — HAS-BLED, protection gastrique si AVK."
  },
  {
    id: "card-syncope",
    categorie: "CARDIO",
    titre: "Syncope",
    indication: "Perte conscience brève, récupération complète, sans confusion prolongée.",
    protocole: [
          "ABCDE ; glycémie ; ECG (QT, BAV, extrasystoles).",
          "Anamnèse témoin : effort, position, prodromes.",
          "Si cardiaque suspectée : monitoring, écho, Holter selon scores.",
          "Reflexe vasovagale : éducation, hydratation, contention.",
          "Éviter antihypertenseurs excessifs si hypotension orthostatique."
        ],
    surveillance: "ECG, PA orthostatique, chute récidive.",
    effetsSecondaires: "Brady/tachy médicamenteuse.",
    contreIndications: "Syncope à l'effort = cardiologique urgent.",
    alerte: "Syncope + douleur thoracique ou palpitations = SCA/arythmie jusqu'à exclusion."
  },
  {
    id: "neuro-avc",
    categorie: "NEURO",
    titre: "Prise en charge post-AVC (aigu/subaigu)",
    indication: "Après phase hyperaiguë, rééducation et prévention secondaire.",
    protocole: [
          "NIHSS, déglutition avant alimentation (videofluoroscopie si doute).",
          "Antiagrégation/anticoagulation selon type AVC.",
          "Statine, contrôle PA (< 140/90 sauf exception).",
          "Kinésithérapie, orthophonie, ergothérapie précoce.",
          "Prévention complications : escarres, pneumopathie, TVP."
        ],
    surveillance: "Déglutition, chutes, humeur, dépendance.",
    effetsSecondaires: "Hémorragie, fausses routes.",
    contreIndications: "Allergie antiagrégant.",
    alerte: "Dépression post-AVC fréquente — dépister et traiter."
  },
  {
    id: "neuro-crise",
    categorie: "NEURO",
    titre: "État de mal épileptique / crise aiguë",
    indication: "Crise > 5 min ou crises répétées sans récupération.",
    protocole: [
          "ABC ; benzodiazépine : diazépam 10 mg IV lente ou midazolam 10 mg IM.",
          "Si persiste : levetiracetam 1000 mg IV ou phénytoïne 20 mg/kg.",
          "Recherche cause : AVC, métabolique, infection, médicament.",
          "Monitoring EEG si coma.",
          "Révision antiepileptiques chroniques."
        ],
    surveillance: "SpO₂, conscience, lactates si longue crise.",
    effetsSecondaires: "Dépression respiratoire (BZD), hypotension.",
    contreIndications: "Bloc auriculo-ventriculaire (phénytoïne).",
    alerte: "Crise prolongée chez sujet âgé = AVC/métabolique jusqu'à preuve du contraire."
  },
  {
    id: "neuro-delirium",
    categorie: "NEURO",
    titre: "Delirium aigu",
    indication: "Fluctuation attention/conscience, aigu, altération cognition.",
    protocole: [
          "CAM ou 4AT positif ; recherche cause (infection, médicament, douleur, rétention).",
          "Mesures non pharmacologiques : lunettes, audition, orientation, sommeil.",
          "Corriger métabolique, hydratation, douleur.",
          "Halopéridol 0,5–1 mg si agitation mettant en danger (dose minimale).",
          "Éviter benzodiazépines sauf sevrage alcool."
        ],
    surveillance: "CAM quotidien, sommeil, chutes.",
    effetsSecondaires: "Parkinsonisme, QT long (neuroleptiques).",
    contreIndications: "Lewy body (extrapyramidal avec neuroleptiques).",
    alerte: "Neuroleptique ne traite pas la cause — diagnostic étiologique prioritaire."
  },
  {
    id: "neuro-cephalee",
    categorie: "NEURO",
    titre: "Céphalée aiguë sévère",
    indication: "Céphalée brutale ou différente du habituel, signes neurologiques.",
    protocole: [
          "Red flags : thunderclap, fièvre, déficit focal, immunodépression.",
          "Scanner cérébral sans injection ; PL si fièvre/méningite.",
          "Si HTIC : mannitol 0,5–1 g/kg ou hypertonique selon filière.",
          "Analgésie : paracétamol ; éviter morphine masquant examen si possible.",
          "Traiter cause : HSA, sinusite, glaucome aigu."
        ],
    surveillance: "Glasgow, PA, température, vision.",
    effetsSecondaires: "Nausées, sédation.",
    contreIndications: "Allergie.",
    alerte: "Céphalée thunderclap = HSA jusqu'à exclusion scanner/PL."
  },
  {
    id: "neuro-meningo",
    categorie: "NEURO",
    titre: "Méningo-encéphalite herpétique",
    indication: "Fièvre, confusion, crises, signes méningés, LCR lymphocytaire.",
    protocole: [
          "Aciclovir 10 mg/kg IV/8 h immédiatement si suspicion (ne pas attendre PCR).",
          "PL : PCR HSV, cultures, biochimie.",
          "Imagerie cérébrale avant PL si signes focalisation/HTIC.",
          "Durée aciclovir 14–21 j selon évolution.",
          "Dexaméthasone discuté si œdème important."
        ],
    surveillance: "Glasgow, fonction rénale (hydratation), PCR contrôle.",
    effetsSecondaires: "Néphrotoxicité aciclovir si déshydratation.",
    contreIndications: "Allergie aciclovir rare.",
    alerte: "Retard aciclovir = mortalité/séquelles — traiter sur suspicion."
  },
  {
    id: "met-acidocetose",
    categorie: "METABOLIQUE",
    titre: "Acidocétose diabétique",
    indication: "Hyperglycémie, acidose, cétonémie, déshydratation, confusion.",
    protocole: [
          "Remise en volume NaCl 0,9 % 1 L première heure puis 250–500 mL/h.",
          "Insuline rapide perfusion 0,1 UI/kg/h après bolus 0,1 UI/kg si K⁺ > 3,3.",
          "Potassium replacement selon K⁺ (ne pas insuline si K⁺ < 3,3).",
          "Rechercher déclencheur : infection, infarctus, omission insuline.",
          "Transition insuline SC quand pH > 7,3 et patient alimenté."
        ],
    surveillance: "Glycémie H1, ionogramme 2–4 h, diurèse, anion gap.",
    effetsSecondaires: "Hypoglycémie, hypokaliémie.",
    contreIndications: "K⁺ < 3,3 avant insuline.",
    alerte: "Sujet âgé : présentation fréquente hyperosmolaire — adapter protocole."
  },
  {
    id: "met-deshydratation",
    categorie: "METABOLIQUE",
    titre: "Déshydratation modérée",
    indication: "Soif, muqueuses sèches, oligurie, hypernatrémie possible.",
    protocole: [
          "Évaluer volémie ; calcul besoins + déficit (souvent 2–3 L sur 24–48 h).",
          "NaCl 0,9 % ou glucose 5 % si hypernatrémie selon sodium.",
          "Voie orale privilégiée si déglutition sûre (solution réhydratation).",
          "Surveiller surcharge si IC/IRC.",
          "Traiter cause : fièvre, diarrhée, diurétiques."
        ],
    surveillance: "Poids, diurèse, Na⁺, signes surcharge.",
    effetsSecondaires: "Œdème pulmonaire si surcharge rapide.",
    contreIndications: "IC décompensée non traitée.",
    alerte: "Correction sodium lentement si hypernatrémie chronique."
  },
  {
    id: "met-hypercalcemie",
    categorie: "METABOLIQUE",
    titre: "Hypercalcémie sévère",
    indication: "Ca > 3,5 mmol/L ou symptomatique (confusion, constipation, polyurie).",
    protocole: [
          "Hydratation NaCl 0,9 % 200–300 mL/h (3–4 L/24 h si cardiaque OK).",
          "Calcitonine 4 UI/kg SC/6–12 h (effet rapide transitoire).",
          "Bisphosphonate IV (acide zoledronique 4 mg) si maligne.",
          "Rechercher cause : myélome, métastases, hyperparathyroïdie.",
          "Éviter thiazides, immobilisation."
        ],
    surveillance: "Ca, diurèse, créatinine, ECG (QT court).",
    effetsSecondaires: "IRA par surcharge, hypocalcémie rebond.",
    contreIndications: "IRC sévère pour bisphosphonates (adapter dose).",
    alerte: "Hypercalcémie + confusion = hospitalisation — hydratation en priorité."
  },
  {
    id: "met-hyponatremie",
    categorie: "METABOLIQUE",
    titre: "Hyponatrémie chronique (euvolémique)",
    indication: "Na < 135 mmol/L asymptomatique, SIADH ou thiazidiques fréquents.",
    protocole: [
          "Confirmer chronicité ; arrêter thiazidiques, ISRS si possible.",
          "Restriction hydrique 800–1000 mL/j.",
          "Uréa 15–30 g/j ou vaptan si échec (expert).",
          "Correction lente si besoin (< 8 mmol/L/24 h).",
          "Rechercher cancer, pulmonaire, SNC."
        ],
    surveillance: "Na⁺ quotidien, poids, osmolarité.",
    effetsSecondaires: "Myélinolyse si correction rapide.",
    contreIndications: "Correction agressive.",
    alerte: "SIADH fréquent sous ISRS chez le sujet âgé."
  },
  {
    id: "met-hypokaliemie",
    categorie: "METABOLIQUE",
    titre: "Hypokaliémie",
    indication: "K⁺ < 3,5 mmol/L, arythmie, faiblesse musculaire.",
    protocole: [
          "ECG ; KCl per os 40–80 mEq/j divisé si K⁺ 3–3,5.",
          "K⁺ < 3 ou symptomatique : KCl IV max 20 mEq/h avec monitoring.",
          "Magnésium si bas (réfractaire à K⁺).",
          "Arrêter diurétique déclenchant si possible.",
          "Rechercher pertes digestives, alcalose."
        ],
    surveillance: "K⁺ 6 h, Mg, ECG.",
    effetsSecondaires: "phlébite, hyperkaliémie si surcharge IV.",
    contreIndications: "IRA anurique.",
    alerte: "Hypokaliémie + digoxine = arythmie majeure."
  },
  {
    id: "resp-bpco",
    categorie: "RESPIRATOIRE",
    titre: "Exacerbation BPCO",
    indication: "Dyspnée aiguë, volume expectorations, crépitants/sibilants, SpO₂ basse.",
    protocole: [
          "Bronchodilatateurs : salbutamol 5 mg + ipratropium nébulisation/4–6 h.",
          "Corticoïdes : prednisone 40 mg PO 5 j ou équivalent IV.",
          "Antibiotique si purulence : amoxicilline-clavulanate.",
          "O₂ titré cible 88–92 % si BPCO chronique hypercapnie.",
          "VNI si acidose respiratoire pH < 7,35."
        ],
    surveillance: "GDS, SpO₂, FR, encombrement.",
    effetsSecondaires: "Hyperglycémie, agitation (corticoïdes).",
    contreIndications: "Allergie ATB.",
    alerte: "Ne pas sur-oxygéner — risque hypercapnie."
  },
  {
    id: "resp-asthme",
    categorie: "RESPIRATOIRE",
    titre: "Exacerbation asthme adulte",
    indication: "Sibilants, dyspnée, utilisation musculature accessoire.",
    protocole: [
          "Salbutamol nébulisé répété + ipratropium.",
          "Prednisone 40–50 mg ou méthylprednisolone IV.",
          "Magnésium sulfate 2 g IV si sévère.",
          "O₂ si SpO₂ < 94 %.",
          "Adrénaline IM si anaphylaxie associée."
        ],
    surveillance: "PEF si possible, SpO₂, GDS si fatigue.",
    effetsSecondaires: "Tachycardie.",
    contreIndications: "Allergie.",
    alerte: "Asthme de novo chez sujet âgé = exclure EP/IC."
  },
  {
    id: "resp-inhalation",
    categorie: "RESPIRATOIRE",
    titre: "Pneumopathie d'inhalation",
    indication: "Dyspnée après fausse route, altération conscience, infiltrat dépendant.",
    protocole: [
          "O₂, position semi-assise, aspiration voies aériennes si besoin.",
          "Antibiotique si infection : amoxicilline-clavulanate (anaérobies).",
          "Évaluation déglutition (logopède).",
          "Prévention récidive : texture aliments, posture.",
          "Bronchoscopie si corps étranger."
        ],
    surveillance: "SpO₂, température, radiographie.",
    effetsSecondaires: "C. difficile.",
    contreIndications: "Allergie.",
    alerte: "Risque élevé en dénutrition/démence — revoir sécurité alimentation."
  },
  {
    id: "resp-ep",
    categorie: "RESPIRATOIRE",
    titre: "Embolie pulmonaire (prise en charge respiratoire)",
    indication: "Dyspnée, tachypnée, douleur pleurale, hypoxémie.",
    protocole: [
          "O₂, anticoagulation pleine dose.",
          "Si instabilité : thrombolyse ou embolectomie.",
          "Score PESI pour lieu de soins.",
          "Recherche TVP associée ; contention.",
          "Éviter remplissage excessif si cor pulmonale aigu."
        ],
    surveillance: "SpO₂, PA, saignement sous AC.",
    effetsSecondaires: "Hémorragie.",
    contreIndications: "Contre-indication absolue AC récente.",
    alerte: "EP masquée par BPCO fréquente — D-dimères/angio si doute."
  },
  {
    id: "resp-detresse",
    categorie: "RESPIRATOIRE",
    titre: "Détresse respiratoire aiguë",
    indication: "FR > 25, SpO₂ < 90 % malgré O₂, fatigue respiratoire, confusion.",
    protocole: [
          "ABC ; O₂ haut débit puis VNI ou intubation selon cause et souhait patient.",
          "Identifier cause : OAP, BPCO, EP, pneumonie, métabolique.",
          "Éviter sédation excessive avant stabilisation.",
          "Préparer intubation : succinylcholine/rocuronium selon protocole.",
          "Limiter interventions non essentielles en fin de vie si refus."
        ],
    surveillance: "GDS série, plateau pression, hémodynamique.",
    effetsSecondaires: "Barotraumatisme, hypotension VNI.",
    contreIndications: "Ordre de non-intubation documenté.",
    alerte: "Décision précoce VNI vs intubation améliore survie en BPCO/OAP sélectionnés."
  },
  {
    id: "ren-ira",
    categorie: "RENAL",
    titre: "Insuffisance rénale aiguë",
    indication: "Créatinine en hausse rapide, oligurie, surcharge, hyperkaliémie.",
    protocole: [
          "Classifier pré-rénale/rénale/post-rénale ; échographie reins/vessie.",
          "Arrêter néphrotoxiques (AINS, AGS, produit contraste si possible).",
          "Remplissage prudent si pré-rénale ; diurétique si surcharge.",
          "Indications dialyse : K⁺ réfractaire, acidose, surcharge, urémie symptomatique.",
          "Adapter toutes les doses médicamenteuses au DFG."
        ],
    surveillance: "Diurèse horaire, créatinine quotidienne, K⁺, poids.",
    effetsSecondaires: "Hypervolumie.",
    contreIndications: "Anurie relative pour remplissage aveugle.",
    alerte: "Post-rénale (sonde, prostate) réversible — toujours échographier."
  },
  {
    id: "ren-hyperkaliemie",
    categorie: "RENAL",
    titre: "Hyperkaliémie sur IRC",
    indication: "K⁺ élevé chez patient IRC avec oligurie ou dialyse manquée.",
    protocole: [
          "Mêmes mesures urgentes si ECG anormal (calcium, insuline-glucose).",
          "Résines, patiromer ; dialyse si échec ou K⁺ > 6,5.",
          "Régime pauvre en K⁺ ; arrêter spironolactone, triméthoprime.",
          "Bicarbonate si acidose métabolique.",
          "Réviser dialyse (fréquence, durée)."
        ],
    surveillance: "K⁺, bicarbonate, ECG.",
    effetsSecondaires: "Constipation résines.",
    contreIndications: "Anurie sans dialyse programmée.",
    alerte: "IEC poursuivi possible avec surveillance si indication cardio-rénale forte."
  },
  {
    id: "ren-acidose",
    categorie: "RENAL",
    titre: "Acidose métabolique urémique",
    indication: "pH bas, bicarbonate < 22, IRC avancée, hyperventilation.",
    protocole: [
          "Bicarbonate de sodium PO/IV selon sévérité (cible HCO₃ 22–24).",
          "Dialyse si réfractaire ou surcharge.",
          "Traiter hyperkaliémie associée.",
          "Rechercher cause aiguë ajoutée (diarrhée, lactates).",
          "Adapter nutrition."
        ],
    surveillance: "GDS, K⁺, calcémie.",
    effetsSecondaires: "Alcalose si surcorrection.",
    contreIndications: "Oedème sévère (bicarbonate sodique hypertonique prudence).",
    alerte: "Acidose + confusion = envisager dialyse urgente."
  },
  {
    id: "ren-deshydratation-severe",
    categorie: "RENAL",
    titre: "Déshydratation sévère avec IRC",
    indication: "Hypotension, créatinine en pic, hypernatrémie, oligurie.",
    protocole: [
          "Réhydratation progressive IV ; éviter bolus agressifs si cardiopathie.",
          "Réévaluer diurétiques et antihypertenseurs.",
          "Objectif diurèse reprise sans surcharge.",
          "Dialogue néphrologie si pas d'amélioration 48–72 h.",
          "Prévenir iatrogénie médicamenteuse (doses rénales)."
        ],
    surveillance: "PA, diurèse, créatinine, Na⁺.",
    effetsSecondaires: "Œdème pulmonaire.",
    contreIndications: "Anurie complète sans dialyse.",
    alerte: "Créatinine transitoire fréquente si déshydratation — réhydrater avant étiquette IRC chronique."
  },
  {
    id: "dig-hd",
    categorie: "DIGESTIF",
    titre: "Hémorragie digestive haute",
    indication: "Hématémèse, méléna, hypotension, hémoglobine en baisse.",
    protocole: [
          "Remplissage cristalloïdes ; transfusion si Hb < 7 ou symptomatique.",
          "Oméprazole 80 mg IV bolus puis 8 mg/h si ulcère suspecté.",
          "Endoscopie < 24 h (< 12 h si instable).",
          "Arrêter anticoagulants/antiagrégants selon balance risque ; correction coagulation.",
          "Noradrénaline si choc."
        ],
    surveillance: "Hb 6 h, PA, mictions, re-saignement.",
    effetsSecondaires: "Thrombose si arrêt anticoagulation prolongé.",
    contreIndications: "Allergie PPI.",
    alerte: "AINS + anticoagulant = risque majeur chez le sujet âgé."
  },
  {
    id: "dig-occlusion",
    categorie: "DIGESTIF",
    titre: "Occlusion intestinale",
    indication: "Douleur, vomissements, arrêt matières/gaz, distension, tympanisme.",
    protocole: [
          "Sonde nasogastrique, jeûne, remise en volume IV.",
          "ASP ; scanner si doute strangulation ou cause tumorale.",
          "Chirurgie si signes ischémie, strangulation, hernie incarcerée.",
          "Cause fréquente : bride, tumeur colorectale, fécalome.",
          "Analgésie, antiémétique."
        ],
    surveillance: "Douleur, température, lactates si suspicion ischémie.",
    effetsSecondaires: "AINS masquant perforation.",
    contreIndications: "Perforation libre.",
    alerte: "Occlusion chez sujet âgé = cancer jusqu'à imagerie."
  },
  {
    id: "dig-pancreatite",
    categorie: "DIGESTIF",
    titre: "Pancréatite aiguë",
    indication: "Douleur épigastrique, lipase x3, nausées.",
    protocole: [
          "Remise en volume agressive NaCl 0,9 %.",
          "Analgésie : morphine titrée si besoin.",
          "Jeûne initial puis nutrition précoce entérale si possible.",
          "Rechercher cause : lithiase, alcool ; échographie biliaire.",
          "Pas d'antibiotique prophylactique systématique."
        ],
    surveillance: "Lipase, douleur, diurèse, calcémie.",
    effetsSecondaires: "IRA, SDRA.",
    contreIndications: "Allergie.",
    alerte: "Pancréatite médicamenteuse fréquente — revue prescriptions."
  },
  {
    id: "dig-cholecystite",
    categorie: "DIGESTIF",
    titre: "Cholécystite aiguë",
    indication: "Douleur hypochondre droit, fièvre, Murphy+, leucocytose.",
    protocole: [
          "Antibiotiques : amoxicilline-clavulanate ou céfriaxone + métronidazole.",
          "Cholecystectomie précoce si possible (< 72 h) ou drainage si fragilité.",
          "Analgésie, hydratation.",
          "Imagerie : échographie, scanner si doute.",
          "Antalgie adaptée."
        ],
    surveillance: "Température, douleur, bilan hépatique.",
    effetsSecondaires: "Diarrhée ATB.",
    contreIndications: "Allergie.",
    alerte: "Cholécystite aiguë chez sujet âgé = avis chirurgical même si comorbidités."
  },
  {
    id: "dig-constipation-severe",
    categorie: "DIGESTIF",
    titre: "Constipation sévère / fécalome",
    indication: "Arrêt selles, distension, confusion, impactation rectale.",
    protocole: [
          "Examen rectal systématique ; désimpaction manuelle si fécalome.",
          "Lavement phosphate ou macrogol PO/NG.",
          "Traitement de fond macrogol 1–2 sachets/j.",
          "Réduire anticholinergiques, opioïdes (laxatifs osmotiques + stimulants).",
          "Rechercher tumeur, hypothyroïdie."
        ],
    surveillance: "Selles, abdomen, douleur.",
    effetsSecondaires: "Déshydratation lavements.",
    contreIndications: "Occlusion mécanique non diagnostiquée.",
    alerte: "Confusion = constipation fécale fréquente en EHPAD — examen rectal."
  },
  {
    id: "ger-chute",
    categorie: "GÉRIATRIE SPÉCIFIQUE",
    titre: "Prise en charge post-chute",
    indication: "Chute avec ou sans traumatisme, peur de rechute.",
    protocole: [
          "ABCDE ; glycémie ; PA couché/debout.",
          "Recherche fracture (hanche, poignet) et hémorragie (anticoagulant).",
          "ECG si syncope ; bilan cause (4M, médicaments, environnement).",
          "STRATIFY ou score chute ; plan prévention.",
          "Rééducation à la marche, suppression obstacles."
        ],
    surveillance: "Nouvelles chutes, douleur, hémoglobine si traumatisme.",
    effetsSecondaires: "Sédation si trop de benzodiazépines.",
    contreIndications: "Immobilisation prolongée sans indication.",
    alerte: "Une chute = marqueur de fragilité — bilan gériatrique systématique."
  },
  {
    id: "ger-escarre",
    categorie: "GÉRIATRIE SPÉCIFIQUE",
    titre: "Escarre de pression",
    indication: "Lésion cutanée sur protrusion osseuse, stade I à IV.",
    protocole: [
          "Classification NPUAP ; photo ; mesure surface.",
          "Soulagement pression : changements position/2 h, matelas clinovars.",
          "Nettoyage eau/sérum physiologique ; pansement adapté stade (hydrocolloïde, alginate, NPWT si stade III-IV).",
          "Dénutrition : protéines 1,2–1,5 g/kg, suppléments.",
          "Pas de massage sur rougeur."
        ],
    surveillance: "Taille lésion hebdo, douleur, infection.",
    effetsSecondaires: "Macération.",
    contreIndications: "Nécrose sèche talon chez fin de vie (dryness).",
    alerte: "Escarre stade IV = prise en charge pluridisciplinaire + antalgie."
  },
  {
    id: "ger-denutrition",
    categorie: "GÉRIATRIE SPÉCIFIQUE",
    titre: "Dénutrition protéino-énergétique",
    indication: "Perte poids > 5 %/1 mois, albumine basse, MNA < 17.",
    protocole: [
          "Enrichissement alimentaire, 6 repas fractionnés.",
          "Suppléments hyperprotéinés 400 kcal/j minimum.",
          "Traiter dysphagie, douleur dentaire, dépression.",
          "Objectif 30 kcal/kg et 1,2 g protéines/kg.",
          "Envisager nutrition entérale si apports oraux insuffisants."
        ],
    surveillance: "Poids hebdo, apports, déglutition.",
    effetsSecondaires: "Refeeding syndrome si réalimentation brutale.",
    contreIndications: "Obstruction digestive.",
    alerte: "Dénutrition = facteur de mortalité — pas seulement 'manger plus'."
  },
  {
    id: "ger-incontinence",
    categorie: "GÉRIATRIE SPÉCIFIQUE",
    titre: "Incontinence urinaire",
    indication: "Fuites involontaires, impact qualité de vie, infections récurrentes.",
    protocole: [
          "Type : stress, urgentielle, mixte, fonctionnelle.",
          "Recherche infection, hyperglycémie, rétention (échographie vésicale).",
          "Rééducation périnéale si mobile ; anticholinergiques prudence cognitive.",
          "Mirabégron alternative urgentielle si CI anticholinergique.",
          "Routine toilette, accessibilité WC."
        ],
    surveillance: "Résidu post-mictionnel, IU, cognition.",
    effetsSecondaires: "Rétention, confusion (anticholinergiques).",
    contreIndications: "Glaucome angle fermé, IRC sévère.",
    alerte: "Incontinence soudaine = infection ou délire jusqu'à preuve du contraire."
  },
  {
    id: "ger-polymedication",
    categorie: "GÉRIATRIE SPÉCIFIQUE",
    titre: "Revue de polymédication",
    indication: "≥ 5 médicaments, chutes, confusion, hypotension, hospitalisation récente.",
    protocole: [
          "Liste complète incluant OTC et automédication.",
          "Critères STOPP/START ; identifier redondances et anticholinergiques.",
          "Déprescription progressive (une molécule à la fois si possible).",
          "Prioriser : statine, AINS, benzodiazépines, inhibiteur pompe si peu indiqué.",
          "Information patient/famille et suivi 4–6 semaines."
        ],
    surveillance: "PA, chutes, Na⁺, fonction rénale après chaque arrêt.",
    effetsSecondaires: "Rebond angor si arrêt bêta-bloquant brutal.",
    contreIndications: "Arrêt insuline sans suivi.",
    alerte: "Chaque hospitalisation = opportunité de déprescription."
  },
  {
    id: "ger-douleur-non-comm",
    categorie: "GÉRIATRIE SPÉCIFIQUE",
    titre: "Douleur non communicante",
    indication: "Démence sévère, comportements perturbateurs, pas d'auto-évaluation fiable.",
    protocole: [
          "DOLOPLUS2 ou PAINAD à chaque interaction soignante.",
          "Examen corporel complet (fracture, constipation, infection).",
          "Paracétamol d'essai 48–72 h si suspicion.",
          "Opioïde faible dose si scores élevés persistants.",
          "Environnement calme, présence familiale."
        ],
    surveillance: "Scores comportementaux, sommeil, effets opioïdes.",
    effetsSecondaires: "Sédation masquant douleur non traitée.",
    contreIndications: "Surdosage opioïde sans indication.",
    alerte: "Neuroleptique pour 'agitation' sans score douleur = erreur fréquente."
  },
  {
    id: "ger-fin-de-vie",
    categorie: "GÉRIATRIE SPÉCIFIQUE",
    titre: "Accompagnement fin de vie en institution",
    indication: "Maladie terminale, pronostic engagé, objectifs confort.",
    protocole: [
          "Projet de soins personnalisé, directives anticipées.",
          "Arrêt investigations et traitements sans bénéfice confort.",
          "Symptômes : douleur, dyspnée, râles agoniques (hyoscine), anxiété.",
          "Hydratation subcutanée si soif.",
          "Soutien famille, rituel décès."
        ],
    surveillance: "Confort, douleur, bouche, peau.",
    effetsSecondaires: "Sédation excessive non voulue.",
    contreIndications: "Respect refus hydratation artificielle.",
    alerte: "Râles agoniques ≠ dyspnée — traiter distinction."
  },
  {
    id: "ger-contention",
    categorie: "GÉRIATRIE SPÉCIFIQUE",
    titre: "Contention physique (éviter / alternatives)",
    indication: "Risque chute ou arrachage dispositifs avec agitation.",
    protocole: [
          "Dernière intention après échec mesures non pharmacologiques.",
          "Prescription médicale motivée, durée limitée, réévaluation quotidienne.",
          "Alternatives : présence, activité, lunettes, audition, douleur traitée.",
          "Documenter consentement/représentant légal.",
          "Jamais contention pour convenance personnel soignant."
        ],
    surveillance: "Peau, circulation, agitation, chutes.",
    effetsSecondaires: "Escarres, thrombose.",
    contreIndications: "Contention sans surveillance.",
    alerte: "Contention augmente agitation et chutes — réduire au strict minimum légal."
  },
  {
    id: "ger-rehab",
    categorie: "GÉRIATRIE SPÉCIFIQUE",
    titre: "Réhabilitation gériatrique post-aiguë",
    indication: "Perte autonomie après hospitalisation, objectif retour domicile.",
    protocole: [
          "Évaluation multidimensionnelle (IGS, OMED, cognition).",
          "Objectifs fonctionnels SMART avec patient.",
          "Kinésithérapie quotidienne, renforcement, équilibre.",
          "Orthophonie si dysphagie ; ergothérapie adaptation domicile.",
          "Programme désensibilisation effort si cardiaque/pulmonaire."
        ],
    surveillance: "Scores autonomie, chutes, dénutrition.",
    effetsSecondaires: "Surmenage sans supervision.",
    contreIndications: "Contre-indication effort absolue non stabilisée.",
    alerte: "Levier le plus fort du retour domicile = mobilisation précoce."
  },
  {
    id: "ger-transition",
    categorie: "GÉRIATRIE SPÉCIFIQUE",
    titre: "Transition de soins (hôpital ↔ domicile/EHPAD)",
    indication: "Sortie d'hospitalisation ou admission avec risque iatrogénie.",
    protocole: [
          "Lettre de sortie claire, téléphone médecin traitant < 48 h.",
          "Réconciliation médicamenteuse : comparer entrée/sortie.",
          "RDV suivi infirmier J+2 à J+7.",
          "Signes alerte écrits pour aidant (fièvre, confusion, chute).",
          "Matériel et aides à domicile commandés avant sortie."
        ],
    surveillance: "Réhospitalisation 30 j, observance, chutes.",
    effetsSecondaires: "Omission traitement critique.",
    contreIndications: "Sortie vendredi sans suivi.",
    alerte: "30 % réhospitalisations évitables par transition structurée."
  }
];

if (typeof module !== 'undefined') module.exports = { PROTOCOLES_COMPLETS };

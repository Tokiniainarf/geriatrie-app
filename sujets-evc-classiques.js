// Vrais sujets EVC — Sujets anciens mais classiques
const SUJETS_EVC_CLASSIQUES = [
  {
    id: 'sec-1', annee: 2015, session: 'Rattrapage',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes interne en gériatrie. Ce patient est hospitalisé pour confusion aiguë.',
    sujet: `M. BLANC Henri, 80 ans, hospitalisé pour confusion aiguë depuis 24h.

ATCD: HTA (amlodipine 10mg), diabète T2 (gliclazide 80mg), BPCO (tiotropium 18µg), dépression (amitriptyline 75mg), insomnie (zolpidem 10mg).

TRAITEMENT: amlodipine 10mg, gliclazide 80mg, tiotropium 18µg, amitriptyline 75mg, zolpidem 10mg.

CONTEXTE: Sa femme le trouve confus hier soir. Il ne la reconnaît pas, parle de manière incohérente, essaie de se lever.

ÉVALUATION: T° 38.2°C. PA 140/85. FC 100. FR 22. SpO2 92% (air ambulant). MMS 14/30 (habituel 25/30). CAM positive. ECPA 6/10. Crépitants basaux droits. Globe vésical non palpé. Peau chaude et sèche.

BIOLOGIE: Hb 13.5, GB 15 000 (PNN 85%), Plaquettes 280 000. Créatinine 140 (habituelle 90). Na 148, K 4.8. Glycémie 2.5 g/L. CRP 150. PCT 6. Gaz du sang: pH 7.45, PaCO2 35, PaO2 65, HCO3 24.

IMAGERIE: Rx thoracique: infiltrat basal droit. TDM cérébral: pas de lésion aiguë, atrophie corticale modérée.`,
    questions: [
      { q: 'Confirmez le diagnostic avec les critères CAM.', a: 'CAM positive: (1) Début aigu ✓ (hier soir, 24h). (2) Inattention ✓ (ne suit pas les consignes). (3) Fluctuation ✓ (agité, désorienté). (4) Niveau conscience altéré ✓ (confus, désorienté). Diagnostic: confusion aiguë (delirium) multi-factorielle.' },
      { q: 'Listez les causes possibles de cette confusion.', a: '1. Infection pulmonaire (T° 38.2, GB 15 000, CRP 150, PCT 6, crépitants, Rx infiltrat). 2. Déshydratation (Na 148, créatinine 140 vs 90). 3. Iatrogénie (amitriptyline = anticholinergique, zolpidem = sédation). 4. Hypoglycémie (2.5 g/L sous gliclazide). 5. BPCO (SpO2 92%, hypercapnie ?).' },
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. Antibiothérapie: amoxicilline-clavulanate 2g IV. 2. Réhydratation: NaCl 0.9% 500mL. 3. Arrêt amitriptyline (anticholinergique = Beers). 4. Arrêt zolpidem (sédation). 5. Arrêt gliclazide (hypoglycémie). 6. Oxygène 2L/min (BPCO: cible 88-92%). 7. Si agitation: halopéridol 0.5mg PO. 8. Pas de contention.' },
      { q: 'Quels médicaments modifiez-vous et pourquoi ?', a: '1. Arrêt amitriptyline (anticholinergique → confusion++, constipation, sècheresse). 2. Arrêt zolpidem (sédation, somnambulisme, chute). 3. Arrêt gliclazide (hypoglycémie 2.5 g/L). 4. Réduction amlodipine 10→5mg (hypotension orthostatique ?). 5. Maintien tiotropium (BPCO).' },
      { q: 'Quel est le suivi ?', a: '1. CAM toutes les 8h. 2. T°, PA, FC, SpO2, glycémie toutes les 4h. 3. Bilan J2 (créatinine, Na, K, GB, CRP). 4. Si amélioration: réintroduction progressive des traitements. 5. Si persistance: recherche cause complémentaire. 6. Réévaluation cognitive à 1 mois (MMS).' }
    ],
    juryTips: 'Le jury attend que vous identifiiez les 5 causes de confusion (infection, déshydratation, iatrogénie, hypoglycémie, BPCO) et que vous proposiez une prise en charge globale. L\'amitriptyline est le médicament le plus dangereux (anticholinergique = Beers).'
  },
  {
    id: 'sec-2', annee: 2014, session: 'Normal',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes médecin en EHPAD. Ce résident est retrouvé au sol.',
    sujet: `Mme VERT Marie, 88 ans, résidente en EHPAD depuis 2 ans, retrouvée au sol dans sa chambre à 6h du matin.

ATCD: Alzheimer stade GDS 6, HTA (périndopril 5mg), ostéoporose (alendronate 70mg/sem + Vit D 1000UI), FA permanente (warfarine INR 2-3), dépression (paroxétine 20mg).

TRAITEMENT: périndopril 5mg, alendronate 70mg/sem, Vit D 1000UI, warfarine (dose variable), paroxétine 20mg, donépezil 10mg.

ÉVALUATION: MMS 5/30. GDS-15 12/15. ADL 1/6. Tinetti 4/28. Braden 10/23. ECPA 7/10. T° 37.5°C. PA 120/70. FC 90. SpO2 95%. INR 2.8. Ecchymose frontale gauche. Douleur hanche gauche EVA 6/10. Hanche gauche en rotation externe, raccourcissement.`,
    questions: [
      { q: 'Quel est le diagnostic le plus probable et quels sont les arguments ?', a: 'Fracture col fémoral gauche. Arguments: chute + douleur hanche gauche + rotation externe + raccourcissement + ecchymose frontale + ATCD ostéoporose + anticoagulant (warfarine INR 2.8) + Alzheimer (désorientation, chute). Facteurs de risque: âge 88 ans, ostéoporose, Alzheimer (Tinetti 4/28), warfarine (risque hémorragique).' },
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. Rx hanche gauche (confirmer fracture). 2. Bilan: NFS, TP/INR, iono, créatinine, groupe sanguin. 3. INR 2.8: arrêt warfarine, vitamine K1 1mg si INR > 3.5. 4. Antalgie: paracétamol IV 1g + morphine 0.05mg/kg SC. 5. Avis chirurgical orthopédique. 6. Préparation intervention (si INR < 1.5). 7. Prophylaxie TVP (HBPM post-op).' },
      { q: 'Comment gérez-vous l\'anticoagulant (warfarine) ?', a: '1. INR 2.8 = dans la cible mais risque hémorragique per-opératoire. 2. Arrêt warfarine. 3. Si INR > 3.5: vitamine K1 1mg PO. 4. Réévaluation INR J1, J2. 5. Objectif INR < 1.5 pour chirurgie. 6. Relais HBPM si chirurgie différée. 7. Reprise warfarine J2 post-op.' },
      { q: 'Quel est le pronostic post-opératoire chez cette patiente ?', a: 'Pronostic réservé: Alzheimer sévère (GDS 6) + ostéoporose + anticoagulant + Braden 10/23 (risque escarre élevé). Risques: confusion post-op (30%), escarre, infection, TVP/EP, perte d\'autonomie. Objectif: retour en EHPAD avec rééducation. Mortalité 1 an post-fracture col: 20-30%.' },
      { q: 'Quelles mesures de prévention mettez-vous en place ?', a: '1. Matelas anti-escarres. 2. Changement position H2. 3. Lever précoce J1 post-op. 4. Prophylaxie TVP (HBPM). 5. Antalgie régulière (ECPA toutes les 4h). 6. Prévention confusion (environnement, réorientation). 7. Nutrition enrichie. 8. Kinésithérapie précoce.' }
    ],
    juryTips: 'Le jury attend que vous gériez l\'anticoagulant (warfarine) avant la chirurgie. L\'INR doit être < 1.5 pour opérer. Le pronostic est réservé (Alzheimer sévère + ostéoporose). La prévention des complications post-op est cruciale (confusion, escarre, TVP).'
  },
  {
    id: 'sec-3', annee: 2013, session: 'Normal',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes interne aux urgences. Cette patiente est amenée par sa fille.',
    sujet: `Mme ROUGE Jeanne, 82 ans, amenée par sa fille pour "perte de mémoire et fatigue".

ATCD: HTA (losartan 50mg), dyslipidémie (atorvastatine 20mg), dépression (amitriptyline 75mg depuis 3 ans), arthrose (tramadol 50mg x2).

TRAITEMENT: losartan 50mg, atorvastatine 20mg, amitriptyline 75mg, tramadol 50mg x2.

CONTEXTE: Vit seule. Fille à 300 km. Depuis 1 an: oublis fréquents, ne cuisine plus, ne sort plus, a perdu 6 kg.

ÉVALUATION: PA 130/80 couché, 105/60 debout. FC 68. MMS 20/30. GDS-15 14/15. ADL 5/6. IADL 3/8. MNA 20/30. Tinetti 20/28. Poids 58 kg (était 64 kg). Albumine 33 g/L. TSH normale. B12 normale. Créatinine 105 (DFG 52). IRM: atrophie hippocampique modérée.`,
    questions: [
      { q: 'Quels sont les diagnostics à évoquer ?', a: '1. Dépression majeure (GDS 14/15 = sévère, amitriptyline = anticholinergique → confusion). 2. Démence débutante (MMS 20, atrophie hippocampique, troubles 1 an). 3. Iatrogénie (amitriptyline 75mg = Beers, confusion, sécheresse). 4. Hypotension orthostatique (PA -25/-20). 5. Dénutrition (perte 6 kg, albumine 33).' },
      { q: 'Quels examens complémentaires demandez-vous ?', a: '1. Bilan mémoire complet (MoCA, épreuves neuropsychologiques). 2. Bilan dépression (HDRS, entretien psychiatrique). 3. Évaluation orthostatique complète. 4. Bilan nutritionnel (MNA complet). 5. Échographie rénale (DFG 52). 6. Pas de ponction lombaire (pas d\'urgence).' },
      { q: 'Quelles modifications médicamenteuses proposez-vous ?', a: '1. Arrêt amitriptyline (anticholinergique = Beers, confusion, sécheresse) → ISRS (sertraline 25mg). 2. Remplacement tramadol → paracétamol 1g x3/j. 3. Maintien losartan (adapté). 4. Maintien atorvastatine. 5. Vit D 800UI/j. 6. Réévaluation à 1 mois.' },
      { q: 'Si le diagnostic de démence est confirmé, quel traitement ?', a: 'Donépezil 5mg/j pendant 1 mois → 10mg/j. Si mal toléré: rivastigmine patch 4.6mg → 9.5mg. Pas de mémantine (stade léger). Surveillance: bradycardie, troubles digestifs. Éducation patient + famille.' },
      { q: 'Quel est le plan de suivi ?', a: 'Réévaluation à 1 mois (MMS, GDS, tolérance). Bilan biologique à 3 mois (DFG, glycémie). RDV neurologue à 6 mois. Évaluation autonomie trimestrielle. Préparation directives anticipées. Information aides (APA, EHPAD si évolution).' }
    ],
    juryTips: 'Le jury attend que vous distinguiez pseudodémence (dépression) vs démence vraie. L\'amitriptyline est le piège principal — anticholinergique qui aggrave les troubles cognitifs. L\'hypotension orthostatique explique la fatigue.'
  }
];

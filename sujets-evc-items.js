// Vrais sujets EVC — Couverture complète des items
const SUJETS_EVC_ITEMS = [
  {
    id: 'sei-1', annee: 2009, session: 'Normal',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes interne en gériatrie. Ce patient est hospitalisé pour confusion aiguë.',
    sujet: `M. VIOLET Jacques, 81 ans, hospitalisé pour confusion aiguë depuis 48h.

ATCD: HTA (périndopril 5mg), diabète T2 (metformine 850mg x2), BPCO (tiotropium 18µg), dépression (mirtazapine 15mg le soir), insomnie (zolpidem 10mg).

TRAITEMENT: périndopril 5mg, metformine 850mg x2, tiotropium 18µg, mirtazapine 15mg, zolpidem 10mg.

CONTEXTE: Sa femme le trouve confus hier soir. Il ne la reconnaît pas, parle de manière incohérente, essaie de se lever.

ÉVALUATION: T° 38.5°C. PA 135/80. FC 105. FR 24. SpO2 91% (air ambulant). MMS 13/30 (habituel 25/30). CAM positive. PAINAD 7/10. Crépitants basaux droits. Globe vésical non palpé. Peau chaude et sèche.

BIOLOGIE: Hb 14.0, GB 16 000 (PNN 86%), Plaquettes 290 000. Créatinine 145 (habituelle 90). Na 149, K 4.9. Glycémie 2.8 g/L. CRP 160. PCT 7. Gaz du sang: pH 7.44, PaCO2 34, PaO2 62, HCO3 23.

IMAGERIE: Rx thoracique: infiltrat basal droit. TDM cérébral: pas de lésion aiguë, atrophie corticale modérée.`,
    questions: [
      { q: 'Confirmez le diagnostic avec les critères CAM.', a: 'CAM positive: (1) Début aigu ✓ (hier soir, 48h). (2) Inattention ✓ (ne suit pas les consignes). (3) Fluctuation ✓ (agité, désorienté). (4) Niveau conscience altéré ✓ (confus, désorienté). Diagnostic: confusion aiguë (delirium) multi-factorielle.' },
      { q: 'Listez les causes possibles de cette confusion.', a: '1. Infection pulmonaire (T° 38.5, GB 16 000, CRP 160, PCT 7, crépitants, Rx infiltrat). 2. Déshydratation (Na 149, créatinine 145 vs 90). 3. Iatrogénie (mirtazapine = sédation, zolpidem = sédation). 4. Hypoglycémie (2.8 g/L sous metformine). 5. BPCO (SpO2 91%, hypercapnie ?).' },
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. Oxygène lentules 2L/min (BPCO: cible 88-92%). 2. Antibiothérapie: amoxicilline-clavulanate 2g IV. 3. Réhydratation: NaCl 0.9% 500mL. 4. Arrêt mirtazapine (sédation). 5. Arrêt zolpidem (sédation). 6. Correction glycémie: sucre oral. 7. Si agitation: halopéridol 0.5mg PO. 8. Pas de contention.' },
      { q: 'Quels médicaments modifiez-vous et pourquoi ?', a: '1. Arrêt mirtazapine (sédation → confusion). 2. Arrêt zolpidem (sédation, somnambulisme). 3. Maintien périndopril (HTA). 4. Maintien metformine (surveiller glycémie). 5. Maintien tiotropium (BPCO). 6. Si glycémie < 1.5: arrêt metformine.' },
      { q: 'Quel est le suivi ?', a: '1. CAM toutes les 8h. 2. T°, PA, FC, SpO2, glycémie toutes les 4h. 3. Bilan J2 (créatinine, Na, K, GB, CRP). 4. Si amélioration: réintroduction progressive. 5. Si persistance: recherche cause complémentaire. 6. Réévaluation cognitive à 1 mois (MMS).' }
    ],
    juryTips: 'Le jury attend que vous identifiiez les 5 causes de confusion (infection, déshydratation, iatrogénie, hypoglycémie, BPCO) et que vous proposiez une prise en charge globale. Le mirtazapine et le zolpidem sont les médicaments les plus suspects (sédation).'
  },
  {
    id: 'sei-2', annee: 2008, session: 'Normal',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes médecin de garde. Cette patiente est retrouvée au sol en EHPAD.',
    sujet: `Mme ORANGE Marie, 87 ans, résidente en EHPAD depuis 1 an, retrouvée au sol dans le couloir à 4h du matin.

ATCD: Alzheimer stade GDS 5, HTA (amlodipine 5mg), FA permanente (warfarine INR 2-3), ostéoporose (alendronate 70mg/sem + Vit D 1000UI), dépression (paroxétine 20mg).

TRAITEMENT: amlodipine 5mg, warfarine (dose variable), alendronate 70mg/sem, Vit D 1000UI, paroxétine 20mg, donépezil 10mg.

ÉVALUATION: MMS 8/30. GDS-15 10/15. ADL 2/6. Tinetti 6/28. Braden 12/23. PAINAD 6/10. T° 37.0°C. PA 125/75. FC 85. SpO2 96%. INR 2.5. Ecchymose frontale gauche. Douleur hanche gauche EVA 7/10. Hanche gauche en rotation externe, raccourcissement.`,
    questions: [
      { q: 'Quel est le diagnostic le plus probable ?', a: 'Fracture col fémoral gauche. Arguments: chute + douleur hanche gauche + rotation externe + raccourcissement + ecchymose frontale + ATCD ostéoporose + anticoagulant (warfarine INR 2.5) + Alzheimer (désorientation). Facteurs de risque: âge 87 ans, ostéoporose, Alzheimer (Tinetti 6/28).' },
      { q: 'Quelle est votre prise en charge immédiate ?', a: '1. Rx hanche gauche (confirmer fracture). 2. Bilan: NFS, TP/INR, iono, créatinine, groupe sanguin. 3. INR 2.5: dans la cible, pas besoin de vitamine K. 4. Antalgie: paracétamol IV 1g + morphine 0.05mg/kg SC. 5. Avis chirurgical orthopédique. 6. Prophylaxie TVP post-op.' },
      { q: 'Comment gérez-vous l\'anticoagulant ?', a: 'INR 2.5 = dans la cible (2-3). Pas besoin de vitamine K. Arrêt warfarine la veille de l\'intervention. Si INR < 1.5 le jour de l\'opération → intervention. Reprise warfarine J2 post-op. Relais HBPM si chirurgie différée.' },
      { q: 'Quel est le pronostic post-opératoire ?', a: 'Pronostic réservé: Alzheimer modéré (GDS 5) + ostéoporose + anticoagulant + Braden 12/23 (risque escarre). Risques: confusion post-op (30%), escarre, infection, TVP/EP, perte d\'autonomie. Mortalité 1 an: 20-30%.' },
      { q: 'Quelles mesures de prévention mettez-vous en place ?', a: '1. Matelas anti-escarres. 2. Changement position H2. 3. Lever précoce J1. 4. Prophylaxie TVP (HBPM). 5. Antalgie régulière (ECPA toutes les 4h). 6. Prévention confusion (environnement, réorientation). 7. Nutrition enrichie. 8. Kinésithérapie précoce.' }
    ],
    juryTips: 'Le jury attend que vous gériez l\'anticoagulant (warfarine) avant la chirurgie. L\'INR 2.5 est dans la cible → pas besoin de vitamine K. Le pronostic est réservé (Alzheimer + ostéoporose). La prévention des complications post-op est cruciale.'
  },
  {
    id: 'sei-3', annee: 2007, session: 'Normal',
    duree: '30 min',
    bareme: '20 points',
    consigne: 'Vous êtes interne aux urgences. Cette patiente est amenée par sa fille.',
    sujet: `Mme ROSE Jeanne, 83 ans, amenée par sa fille pour "perte de mémoire et fatigue".

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

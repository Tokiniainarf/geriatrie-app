// Cas EVC 2024 — Scénarios d'examen réalistes
const CAS_EVC_2024 = [
  { id: 'evc24-1', chapter: 'ch9', difficulty: 'A', title: 'Troubles cognitifs et iatrogénie',
    situation: 'M. Martin, 79 ans, consulte pour troubles de mémoire depuis 8 mois. ATCD: HTA, dépression, BPH. Traitement: amlodipine 10mg, amitriptyline 50mg, tamsulosine 0.4mg. MMS 22/30, GDS-15 12/15. Perte 4 kg en 3 mois.',
    questions: [
      { q: 'Quels sont les 3 diagnostics à évoquer ?', a: '1. Pseudodémence dépressive (GDS 15 = 12, amitriptyline inadaptée). 2. Démence débutante (MMS 22, 8 mois d\'évolution). 3. Iatrogénie médicamenteuse (amitriptyline = anticholinergique → confusion).', points: 4 },
      { q: 'Quel médicament modifiez-vous en priorité et pourquoi ?', a: 'Arrêt amitriptyline (anticholinergique = Beers). Cause de confusion, constipation, rétention urinaire, chute. Remplacer par ISRS (sertraline 25mg). Sevrage progressif 2 semaines.', points: 3 },
      { q: 'Quel bilan complémentaire demandez-vous ?', a: 'NFS, TSH, B12, folates, créatinine, albumine. IRM cérébrale (atrophie hippocampique ?). Bilan mémoire complet si MMS ne s\'améliore pas après arrêt amitriptyline.', points: 3 }
    ], juryTips: 'Le jury attend que vous identifiez l\'iatrogénie AVANT de conclure à une démence. L\'amitriptyline est le piège de ce cas.' },
  { id: 'evc24-2', chapter: 'ch12', difficulty: 'A', title: 'Chutes récidivantes et polypharmacie',
    situation: 'Mme Petit, 83 ans, 4 chutes en 3 mois. Dernière chute avec fracture poignet. Prend: lorazepam 2mg, amlodipine 10mg, furosémide 40mg, tramadol 50mg. PA couché 145/85, debout 110/65. Tinetti 16/28.',
    questions: [
      { q: 'Listez tous les facteurs de risque de chute identifiés.', a: 'Médicamenteux: lorazepam (BZD → sédation, ataxie), amlodipine + furosémide (hypotension orthostatique: PA -35/-20), tramadol (sédation). Clinique: hypotension orthostatique confirmée, Tinetti < 19 (risque élevé), 4 chutes en 3 mois (récidive), âge 83 ans.', points: 5 },
      { q: 'Quelle est votre stratégie de déprescription ?', a: '1. Arrêt lorazepam (sevrage progressif 4 semaines, substitution diazépam). 2. Réduire furosémide 40→20mg. 3. Réduire amlodipine 10→5mg. 4. Remplacer tramadol par paracétamol. 5. Surveillance PA toutes les semaines. 6. Réévaluation Tinetti à 1 mois.', points: 4 },
      { q: 'Quelles mesures non médicamenteuses prescrivez-vous ?', a: 'Rééducation équilibre (kiné 3x/sem), Vit D 800UI/j, correction visuelle, adaptation domicile (éclairage, barres antidérapantes, retrait tapis), chaussures antidérapantes, signal d\'appel à portée.', points: 3 }
    ], juryTips: 'Cascade iatrogénique: BZD → chute → douleur → tramadol → chute → fracture. Le jury veut voir que vous cassez la cascade.' },
  { id: 'evc24-3', chapter: 'ch14', difficulty: 'A', title: 'Dénutrition et escarre en SSR',
    situation: 'Mme Garcia, 86 ans, SSR post-fracture col fémoral. Perte 7 kg en 2 mois. IMC 17.5. Albumine 22g/L. MNA 13/30. Escarne sacrée stade II. MMS 22/30. GDS-15 11/15. Vit seule, fille à 300 km.',
    questions: [
      { q: 'Analysez le cercle vicieux dénutrition-escarre-dépendance.', a: 'Dénutrition (MNA 13, albumine 22) → fonte musculaire + fragilité cutanée → escarre (stade II) → douleur + infection → anorexie → aggravation dénutrition → retard cicatrisation → perte autonomie → dépression (GDS 11). Cercle vicieux classique.', points: 4 },
      { q: 'Proposez un plan nutritionnel complet.', a: '1. Enrichissement alimentaire (crème, beurre, fromage). 2. CNO x3/j (Delical, Fresubin). 3. Protéines 1.5g/kg/j. 4. Vit D 800UI + Ca 1.2g. 5. Si échec 1 semaine: nutrition entérale par SNG → PEG. 6. Fractionnement 6 repas/j. 7. Aide repas à domicile.', points: 4 },
      { q: 'Quel plan de sortie ?', a: 'SSR 6-8 semaines minimum. Évaluation retour domicile: si ADL ≥ 4 + aide domicile + livraison repas. Si échec: EHPAD. Impliquer la fille (visioconférence si éloignée). Traitement antidépresseur (sertraline 25mg).', points: 3 }
    ], juryTips: 'Cascade nutrition → escarre → dépendance = classique EVC. Montrer que vous comprenez le cercle vicieux.' },
  { id: 'evc24-4', chapter: 'ch11', difficulty: 'A', title: 'Confusion post-opératoire',
    situation: 'M. Garcia, 84 ans, J1 post-op prothèse hanche. Agité la nuit, arrache perfusion, appelle sa femme (décédée). MMS pré-op 26/30. T° 38.1°C. CRP 95. Tramadol 100mg/j.',
    questions: [
      { q: 'Confirmez le diagnostic avec la CAM.', a: 'CAM+: (1) Début aigu post-op ✓ (J1). (2) Inattention ✓ (arrache perfusion). (3) Fluctuation ✓ (agité la nuit). (4) Niveau conscience altéré ✓ (désorienté). CAM+ = confusion aiguë confirmée.', points: 4 },
      { q: 'Quelles sont les causes probables ?', a: '1. Post-opératoire (anesthésie, douleur). 2. Infection (T° 38.1, CRP 95). 3. Tramadol (opioïde → confusion). 4. Deuil non résolu (appelle femme décédée). 5. Douleur non contrôlée.', points: 4 },
      { q: 'Quelle prise en charge ?', a: '1. Bilan infectieux (ECBU, hémocultures, Rx thoracique). 2. Réduire/arrêter tramadol (paracétamol IV 4g/j). 3. Si agitation: halopéridol 0.5mg PO. 4. Pas de contention. 5. Réorientation (horloge, lumière naturelle). 6. Présence familiale. 7. Surveillance neuro H4.', points: 4 }
    ], juryTips: 'Le jury veut que vous distinguiez confusion (réversible) vs démence (chronique). Le contexte post-op est le piège.' },
  { id: 'evc24-5', chapter: 'ch16', difficulty: 'A', title: 'Polymédication et cascade iatrogénique',
    situation: 'M. Dubois, 88 ans, consulte pour chutes, constipation et confusion. Traitement: oxazepam 10mg, amitriptyline 50mg, codéine 30mg, amlodipine 10mg, gliclazide 80mg. 5 médicaments.',
    questions: [
      { q: 'Identifiez les médicaments inappropriés (Beers).', a: '1. Oxazepam (BZD → chutes, confusion). 2. Amitriptyline (anticholinergique → confusion, constipation, rétention). 3. Codéine (opioïde → constipation, confusion, chute). Les 3 sont critères de Beers.', points: 4 },
      { q: 'Décrivez la cascade iatrogénique.', a: 'Oxazepam → chute → douleur → codéine → constipation → confusion. Amitriptyline → constipation → codéine (aggrave). Amitriptyline → hypotension orthostatique → chute (amlodipine aggrave).', points: 4 },
      { q: 'Quelle stratégie de déprescription ?', a: '1. Arrêt oxazepam (sevrage 2-4 semaines). 2. Arrêt amitriptyline (demi-dose 1 semaine). 3. Arrêt codéine. 4. Réduire amlodipine 10→5mg. 5. Surveillance glycémique (HbA1c < 8% = OK). 6. Réévaluation à 1 mois.', points: 4 }
    ], juryTips: 'Cascade iatrogénique = classique EVC. Le jury veut que vous identifiiez TOUS les médicaments inappropriés et expliquiez la cascade.' }
];

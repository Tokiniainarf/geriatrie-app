// Cas EVC 2010–2014 — Vingt-cinq scénarios d'examen (5 par année)
const CAS_EVC_2010_2014 = [
  {
    id: 'evc10-1',
    year: 2010,
    chapter: 'ch1',
    difficulty: 'A',
    title: 'Vieillissement et préservation de l\'autonomie',
    situation: 'Mme Durand, 72 ans, consulte pour fatigue modérée. Retraitée, marche 30 min/j, ADL 6/6. MMS 28/30. PA 135/82. Elle craint la dépendance comme sa mère. Pas de perte de poids.',
    questions: [
      {
        q: 'Comment distinguez-vous fatigue physiologique et pathologique ?',
        a: 'Autonomie intacte, cognition normale, activité physique régulière, pas de syndrome de fragilité (Fried). Fatigue modérée compatible avec vieillissement. Rechercher anémie, TSH, dépression si aggravation.',
        points: 4
      },
      {
        q: 'Quelles recommandations de prévention ?',
        a: 'Activité aérobie + renforcement, apports protéiques, vitamine D si carence, vaccination grippe/pneumocoque. Pas de compléments anti-âge non validés.',
        points: 3
      },
      {
        q: 'Comment abordez-vous la peur de la dépendance ?',
        a: 'Écoute, facteurs modifiables (activité, social), plan anticipé aidants sans catastrophisme.',
        points: 3
      },
    ],
    juryTips: 'Autonomie + MMS + Fried. Ne pas médicaliser le vieillissement normal.'
  },
  {
    id: 'evc10-2',
    year: 2010,
    chapter: 'ch5',
    difficulty: 'A',
    title: 'Chute isolée et bilan étiologique',
    situation: 'M. Bernard, 81 ans, chute dans l\'escalier sans syncope. Contusion genou. ADL 5/6. Traitement : ramipril 10 mg, tamsulosine, zolpidem 10 mg. TA debout 98/58. Tinetti 18/28.',
    questions: [
      {
        q: 'Facteurs de risque identifiés ?',
        a: 'Hypotension orthostatique, hypnotique, environnement, Tinetti bas. Pas de syncope = chute mécanique + facteurs cumulés.',
        points: 4
      },
      {
        q: 'Conduite à tenir ?',
        a: 'Révision médicamenteuse, orthostatisme, kiné équilibre, aménagement, téléalarme.',
        points: 4
      },
      {
        q: 'Examens complémentaires ?',
        a: 'Ionogramme, DFG, glycémie, MMS si besoin. Radio genou selon clinique.',
        points: 3
      },
    ],
    juryTips: 'Orthostatisme + zolpidem = classique.'
  },
  {
    id: 'evc10-3',
    year: 2010,
    chapter: 'ch7',
    difficulty: 'A',
    title: 'Dénutrition modérée et polymorbidité',
    situation: 'Mme Leroy, 78 ans, -4 kg en 6 mois. Albumine 32 g/L, MNA 19/30. Arthrose, 6 médicaments. IADL 4/8. Denture inadaptée.',
    questions: [
      {
        q: 'Étiologies probables ?',
        a: 'Apports insuffisants (douleur, denture), inflammation arthrose, dépression possible.',
        points: 4
      },
      {
        q: 'Plan nutritionnel ?',
        a: 'Dentaire, analgesie, enrichissement, CNO, aide sociale.',
        points: 4
      },
      {
        q: 'Bilan ?',
        a: 'CRP, TSH, GDS. Imagerie si signes alarme.',
        points: 3
      },
    ],
    juryTips: 'MNA + denture souvent oubliés.'
  },
  {
    id: 'evc10-4',
    year: 2010,
    chapter: 'ch9',
    difficulty: 'A',
    title: 'HTA et comorbidités chez le sujet âgé',
    situation: 'M. Petit, 86 ans, PA 168/92. ATCD AVC, DFG 52. amlodipine 10 mg, HCTZ 25 mg. Chutes récentes.',
    questions: [
      {
        q: 'Objectif tensionnel ?',
        a: '< 140/90 si toléré post-AVC ; vérifier orthostatisme.',
        points: 4
      },
      {
        q: 'Optimisation ?',
        a: 'IEC si possible ; surveiller Na+ sous thiazide.',
        points: 4
      },
      {
        q: 'Surveillance ?',
        a: 'Ionogramme, créatinine, chutes.',
        points: 3
      },
    ],
    juryTips: 'Post-AVC : prudence hypotension.'
  },
  {
    id: 'evc10-5',
    year: 2010,
    chapter: 'ch12',
    difficulty: 'A',
    title: 'Iatrogénie et syndrome confusionnel',
    situation: 'Mme Martin, 80 ans, diphénhydramine, oxybutynine. Confusion, rétention. MMS basal 26/30.',
    questions: [
      {
        q: 'Mécanisme ?',
        a: 'Anticholinergiques → delirium, rétention. CAM positive.',
        points: 4
      },
      {
        q: 'Prise en charge ?',
        a: 'Arrêt anticholinergiques, hydratation, pas BZD.',
        points: 5
      },
      {
        q: 'Prévention ?',
        a: 'Beers, alternatives laxatives/analgésiques.',
        points: 3
      },
    ],
    juryTips: 'Anticholinergiques = delirium EVC.'
  },
  {
    id: 'evc11-1',
    year: 2011,
    chapter: 'ch4',
    difficulty: 'A',
    title: 'Démence légère et annonce diagnostique',
    situation: 'M. Roche, 76 ans, MMS 20/30, MoCA 16. IRM atrophie hippocampique. Épouse anxieuse.',
    questions: [
      {
        q: 'Diagnostic ?',
        a: 'Probable Alzheimer ; causes réversibles partiellement explorées.',
        points: 4
      },
      {
        q: 'Traitement ?',
        a: 'Inhibiteur cholinestérase si indiqué ; ressources famille.',
        points: 4
      },
      {
        q: 'Annonce ?',
        a: 'Lieu calme, espoir réaliste, associations.',
        points: 3
      },
    ],
    juryTips: 'Annonce structurée.'
  },
  {
    id: 'evc11-2',
    year: 2011,
    chapter: 'ch11',
    difficulty: 'B',
    title: 'Delirium hypoactif post-opératoire',
    situation: 'Mme Faure, 84 ans, J+3 prothèse hanche. Somnolence, refus repas. CRP 65, Na+ 131.',
    questions: [
      {
        q: 'Diagnostic ?',
        a: 'Delirium hypoactif, pas dépression primaire.',
        points: 5
      },
      {
        q: 'Conduite ?',
        a: 'Cause infectieuse/hydroélectrolytique, analgesie, mobilisation.',
        points: 4
      },
      {
        q: 'Pronostic ?',
        a: 'Risque perte autonomie.',
        points: 2
      },
    ],
    juryTips: 'Hypoactif = piège post-op.'
  },
  {
    id: 'evc11-3',
    year: 2011,
    chapter: 'ch8',
    difficulty: 'A',
    title: 'Douleur neuropathique post-zostérienne',
    situation: 'M. Garnier, 79 ans, EVA 7/10. DFG 44. Gabapentine, somnolence, chutes.',
    questions: [
      {
        q: 'Stratégie ?',
        a: 'Paracétamol ; gabapentine dose minimale ; adapter DFG.',
        points: 4
      },
      {
        q: 'Alternatives ?',
        a: 'Duloxétine, patch lidocaïne.',
        points: 3
      },
      {
        q: 'Chutes ?',
        a: 'Réduire sédatifs, environnement.',
        points: 3
      },
    ],
    juryTips: 'DFG et gabapentinoïdes.'
  },
  {
    id: 'evc11-4',
    year: 2011,
    chapter: 'ch6',
    difficulty: 'A',
    title: 'Ostéoporose et fracture vertébrale',
    situation: 'Mme Blanc, 81 ans, tassement T12. T-score -3,0. Vit D 12 ng/mL.',
    questions: [
      {
        q: 'Traitement ?',
        a: 'Vit D, bisphosphonate selon DFG, mobilisation.',
        points: 4
      },
      {
        q: 'Secondaire ?',
        a: 'Myélome, corticoïdes si contexte.',
        points: 3
      },
      {
        q: 'Prévention ?',
        a: 'Chutes, traitement long cours.',
        points: 3
      },
    ],
    juryTips: 'Fracture vertébrale = traiter.'
  },
  {
    id: 'evc11-5',
    year: 2011,
    chapter: 'ch14',
    difficulty: 'A',
    title: 'Agitation en EHPAD',
    situation: 'Résident 87 ans, démence, cris nocturnes. Halopéridol 2 mg/j depuis 1 mois.',
    questions: [
      {
        q: 'Approche ?',
        a: 'DEMAND, routine, réduire halopéridol.',
        points: 5
      },
      {
        q: 'Médicament ?',
        a: 'Dose min courte ; RCP si prolongé.',
        points: 3
      },
      {
        q: 'Cadre ?',
        a: 'PSI, information famille.',
        points: 3
      },
    ],
    juryTips: 'Non médicamenteux d\'abord.'
  },
  {
    id: 'evc12-1',
    year: 2012,
    chapter: 'ch10',
    difficulty: 'A',
    title: 'Hypoglycémie sous sulfamide',
    situation: 'Mme Nguyen, 83 ans, glycémie 2,8 mmol/L. Gliclazide, metformine. MNA 17.',
    questions: [
      {
        q: 'Conduite ?',
        a: 'Corriger hypo, réduire sulfamide, éducation aidant.',
        points: 4
      },
      {
        q: 'Objectif ?',
        a: 'HbA1c relâchée, priorité sans hypo.',
        points: 4
      },
      {
        q: 'Facteurs ?',
        a: 'Dénutrition, repas irréguliers.',
        points: 3
      },
    ],
    juryTips: 'Déprescrire sulfamide.'
  },
  {
    id: 'evc12-2',
    year: 2012,
    chapter: 'ch13',
    difficulty: 'A',
    title: 'Décompensation IC et FA',
    situation: 'M. Lefèvre, 88 ans, dyspnée, oedèmes, FA 120/min. Pas d\'AC (chutes). K+ 5,2.',
    questions: [
      {
        q: 'Aigu ?',
        a: 'Diurétique, contrôle FC, ionogramme.',
        points: 4
      },
      {
        q: 'Anticoagulation ?',
        a: 'Réévaluer balance chutes/AVC.',
        points: 4
      },
      {
        q: 'Suite ?',
        a: 'Pesée, réconciliation, SSR.',
        points: 3
      },
    ],
    juryTips: 'FA + IC fréquent.'
  },
  {
    id: 'evc12-3',
    year: 2012,
    chapter: 'ch15',
    difficulty: 'B',
    title: 'BPCO exacerbée',
    situation: 'M. Caron, 79 ans, dyspnée, SpO2 88 %. Expectoration purulente. Confusion légère.',
    questions: [
      {
        q: 'Prise en charge ?',
        a: 'O2 titré, ATB si purulence, corticoïde court.',
        points: 4
      },
      {
        q: 'Hospitalisation ?',
        a: 'Si échec domicile ou hypoxémie persistante.',
        points: 3
      },
      {
        q: 'Prévention ?',
        a: 'Vaccins, rééducation.',
        points: 3
      },
    ],
    juryTips: 'O2 prudent si CO2 retention.'
  },
  {
    id: 'evc12-4',
    year: 2012,
    chapter: 'ch16',
    difficulty: 'A',
    title: 'Incontinence mixte',
    situation: 'Mme Adam, 82 ans, fuites effort et urgenturie. RPM 80 mL.',
    questions: [
      {
        q: 'Classification ?',
        a: 'Mixte ; ECBU ; éviter anticholinergiques si cognition fragile.',
        points: 4
      },
      {
        q: 'Non médicamenteux ?',
        a: 'Rééducation périnéale, bladder training.',
        points: 3
      },
      {
        q: 'Médicamenteux ?',
        a: 'Mirabégron ou faible charge anticholinergique.',
        points: 3
      },
    ],
    juryTips: 'Mixte fréquent à l\'âge.'
  },
  {
    id: 'evc12-5',
    year: 2012,
    chapter: 'ch17',
    difficulty: 'A',
    title: 'Fin de vie cancer',
    situation: 'M. Mercier, 91 ans, pancréas métastatique, dyspnée. DA : pas réanimation.',
    questions: [
      {
        q: 'Symptômes ?',
        a: 'Morphine dyspnée/douleur, soins confort.',
        points: 5
      },
      {
        q: 'Légal ?',
        a: 'Claeys-Leonetti, personne de confiance.',
        points: 3
      },
      {
        q: 'Famille ?',
        a: 'Accompagnement, pas abandon.',
        points: 3
      },
    ],
    juryTips: 'Morphine dyspnée.'
  },
  {
    id: 'evc13-1',
    year: 2013,
    chapter: 'ch12',
    difficulty: 'A',
    title: 'Polymédication STOPP/START',
    situation: 'M. Dubois, 85 ans, 12 médicaments. Amitriptyline sommeil, tramadol.',
    questions: [
      {
        q: 'Inappropriés ?',
        a: 'Amitriptyline, tramadol sédation, IPP long cours.',
        points: 5
      },
      {
        q: 'Déprescription ?',
        a: 'Progressive, un à la fois.',
        points: 4
      },
      {
        q: 'Surveillance ?',
        a: 'Chutes, douleur, sommeil.',
        points: 2
      },
    ],
    juryTips: 'Beers en EVC.'
  },
  {
    id: 'evc13-2',
    year: 2013,
    chapter: 'ch18',
    difficulty: 'A',
    title: 'Dépression du sujet âgé',
    situation: 'Mme Olivier, 77 ans, veuve, GDS-15 11/15. MMS 27.',
    questions: [
      {
        q: 'Diagnostic ?',
        a: 'Épisode dépressif ; bilan TSH, B12.',
        points: 4
      },
      {
        q: 'Traitement ?',
        a: 'ISRS dose adaptée, activation comportementale.',
        points: 4
      },
      {
        q: 'Suivi ?',
        a: 'Suicidaire, hyponatrémie rare.',
        points: 3
      },
    ],
    juryTips: 'GDS-15.'
  },
  {
    id: 'evc13-3',
    year: 2013,
    chapter: 'ch19',
    difficulty: 'A',
    title: 'AVC et retour domicile',
    situation: 'M. Renard, 80 ans, hémiplégie gauche. Épouse fragile, escaliers.',
    questions: [
      {
        q: 'Évaluation sortie ?',
        a: 'ADL, aidant, risque chutes.',
        points: 4
      },
      {
        q: 'Organisation ?',
        a: 'SSR, aide domicile, kiné.',
        points: 4
      },
      {
        q: 'Secondaire ?',
        a: 'Facteurs vasculaires, statine.',
        points: 3
      },
    ],
    juryTips: 'Aidant épuisé = risque.'
  },
  {
    id: 'evc13-4',
    year: 2013,
    chapter: 'ch20',
    difficulty: 'A',
    title: 'Escarre stade III EHPAD',
    situation: 'Résidente 89 ans, Braden 10. Plaie sacrum stade III.',
    questions: [
      {
        q: 'Prise en charge ?',
        a: 'Décharge, nutrition, repositionnement.',
        points: 4
      },
      {
        q: 'ATB ?',
        a: 'Si infection systémique seulement.',
        points: 3
      },
      {
        q: 'Prévention ?',
        a: 'Autres prominences, PSI.',
        points: 3
      },
    ],
    juryTips: 'Braden + protéines.'
  },
  {
    id: 'evc13-5',
    year: 2013,
    chapter: 'ch21',
    difficulty: 'A',
    title: 'Vaccination sujet âgé',
    situation: 'M. Perrin, 82 ans, BPCO, EHPAD. Vaccins incomplets.',
    questions: [
      {
        q: 'Recommandés ?',
        a: 'Grippe annuel, pneumocoque, zona Shingrix, COVID selon calendrier.',
        points: 5
      },
      {
        q: 'EHPAD ?',
        a: 'Campagne collective, traçabilité.',
        points: 2
      },
      {
        q: 'CI ?',
        a: 'Allergie composant précédent.',
        points: 2
      },
    ],
    juryTips: 'Couverture collective EHPAD.'
  },
  {
    id: 'evc14-1',
    year: 2014,
    chapter: 'ch2',
    difficulty: 'A',
    title: 'Syndrome de fragilité Fried',
    situation: 'M. Giraud, 84 ans, perte poids, vitesse 0,6 m/s, faible préhension. ADL 5/6.',
    questions: [
      {
        q: 'Fragilité ?',
        a: '≥ 3 critères Fried.',
        points: 4
      },
      {
        q: 'Pronostic ?',
        a: 'Chutes, hospitalisation, mortalité.',
        points: 3
      },
      {
        q: 'Interventions ?',
        a: 'Exercice, protéines, vit D, revue médicamenteuse.',
        points: 4
      },
    ],
    juryTips: 'Fried 5 critères.'
  },
  {
    id: 'evc14-2',
    year: 2014,
    chapter: 'ch22',
    difficulty: 'A',
    title: 'Sarcopénie',
    situation: 'Mme Bonnet, 79 ans, SPPB 8/12, difficulté lever chaise.',
    questions: [
      {
        q: 'Diagnostic ?',
        a: 'Sarcopénie force + performance.',
        points: 4
      },
      {
        q: 'Prise en charge ?',
        a: 'Résistance supervisée, protéines 1-1,2 g/kg.',
        points: 4
      },
      {
        q: 'Objectifs ?',
        a: 'Fonction transferts.',
        points: 3
      },
    ],
    juryTips: 'SPPB + exercice.'
  },
  {
    id: 'evc14-3',
    year: 2014,
    chapter: 'ch13',
    difficulty: 'B',
    title: 'Syncope et BAV',
    situation: 'Mme Faure, 86 ans, syncope effort. BAV 2 type 2. Bêta-bloquant.',
    questions: [
      {
        q: 'Étiologie ?',
        a: 'Cardiogénique ; hospitalisation.',
        points: 5
      },
      {
        q: 'Traitement ?',
        a: 'Pacemaker si indication.',
        points: 4
      },
      {
        q: 'Sécurité ?',
        a: 'Conduite, chutes.',
        points: 2
      },
    ],
    juryTips: 'BAV 2 Mobitz 2 = pacemaker.'
  },
  {
    id: 'evc14-4',
    year: 2014,
    chapter: 'ch7',
    difficulty: 'A',
    title: 'Déshydratation hypernatrémique',
    situation: 'M. Lemoine, 87 ans, Na+ 154, canicule, diurétique.',
    questions: [
      {
        q: 'Diagnostic ?',
        a: 'Déshydratation, ARI fonctionnelle possible.',
        points: 4
      },
      {
        q: 'Réhydratation ?',
        a: 'Lente correction Na+ ; oral ou IV.',
        points: 5
      },
      {
        q: 'Prévention ?',
        a: 'Hydratation canicule, diurétique adapté.',
        points: 3
      },
    ],
    juryTips: 'Correction lente hypernatrémie.'
  },
  {
    id: 'evc14-5',
    year: 2014,
    chapter: 'ch23',
    difficulty: 'A',
    title: 'Fracture poignet orthogériatrie',
    situation: 'Mme Petit, 83 ans, radius déplacé. Ostéoporose, MMS 23, EHPAD.',
    questions: [
      {
        q: 'Fracture ?',
        a: 'Réduction si indiquée, delirium prevention.',
        points: 4
      },
      {
        q: 'Ostéoporose ?',
        a: 'Traitement poursuivi, rééducation.',
        points: 3
      },
      {
        q: 'Cognition ?',
        a: 'Surveillance confusion, ADL main.',
        points: 3
      },
    ],
    juryTips: 'Orthogériatrie poignet aussi.'
  }
];
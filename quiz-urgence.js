// Quiz d'urgence — Questions rapides pour gardes et révisions
const QUIZ_URGENCE = [
  { id: 'qu-1', question: 'Seuil de glycémie définissant une hypoglycémie ?', reponse: '< 0.7 g/L (3.9 mmol/L)', categorie: 'urgence', diffculte: 'A' },
  { id: 'qu-2', question: 'Délai max pour la thrombolyse dans l\'AVC ischémique ?', reponse: '4.5 heures (fenêtre thérapeutique)', categorie: 'urgence', diffculte: 'A' },
  { id: 'qu-3', question: 'Que faire EN PREMIER en cas d\'hyperkaliémie avec ECG anormal ?', reponse: 'Gluconate de calcium 10% 10mL IV (protection myocardique)', categorie: 'urgence', diffculte: 'A' },
  { id: 'qu-4', question: 'Vitesse max de correction de l\'hyponatrémie ?', reponse: '8-10 mmol/L/24h (risque de myélinolyse osmotique si trop rapide)', categorie: 'urgence', diffculte: 'A' },
  { id: 'qu-5', question: 'Antibiothérapie probabiliste du sepsis gériatrique ?', reponse: 'Amoxicilline-clavulanat 2g IV + gentamicine 5mg/kg (dans l\'heure)', categorie: 'urgence', diffculte: 'A' },
  { id: 'qu-6', question: 'SpO2 cible chez un BPCO exacerbé ?', reponse: '88-92% (éviter l\'hypercapnie avec O2 haut débit)', categorie: 'urgence', diffculte: 'A' },
  { id: 'qu-7', question: 'Score de confusion le plus utilisé (acronyme) ?', reponse: 'CAM (Confusion Assessment Method). CAM+ si (1+2) ou (1+3+4)', categorie: 'geriatrie', diffculte: 'A' },
  { id: 'qu-8', question: 'Seuil MMS définissant un trouble cognitif ?', reponse: '< 24 (18-23 léger, < 18 modéré/sévère). Corriger âge et scolarité.', categorie: 'geriatrie', diffculte: 'A' },
  { id: 'qu-9', question: 'Critères de Fried de la fragilité ?', reponse: 'Perte poids, Épuisement, Faiblesse, Lenteur, Inactivité. ≥ 3 = fragile.', categorie: 'geriatrie', diffculte: 'A' },
  { id: 'qu-10', question: 'Que prescrire en 1ère ligne pour la douleur du sujet âgé ?', reponse: 'Paracétamol 1g x3/j (max 3g/j si < 50kg). Éviter AINS systématiquement.', categorie: 'geriatrie', diffculte: 'A' },
  { id: 'qu-11', question: 'Que faire devant une chute chez un sujet sous anticoagulant ?', reponse: 'Scanner cérébral systématique (même sans trauma visible). Risque d\'hématome sous-dural.', categorie: 'urgence', diffculte: 'A' },
  { id: 'qu-12', question: 'Combien de points au Tinetti pour un risque élevé de chute ?', reponse: '< 19 = risque élevé. 19-24 = modéré. ≥ 25 = faible.', categorie: 'geriatrie', diffculte: 'A' },
  { id: 'qu-13', question: 'Quel score pour évaluer la douleur chez un patient non communicant ?', reponse: 'ECPA (Échelle Comportementale de la Douleur chez la Personne Âgée). 5 items, seuil ≥ 4/10.', categorie: 'geriatrie', diffculte: 'A' },
  { id: 'qu-14', question: 'Dose de furosémide IV en première intention pour un OAP ?', reponse: '40-80 mg IV (dose selon traitement diurétique habituel)', categorie: 'urgence', diffculte: 'A' },
  { id: 'qu-15', question: 'Quel médicament de l\'HTA est le plus iatrogène pour les chutes ?', reponse: 'Les diurétiques (déshydratation, hypotension orthostatique) et les alpha-bloquants (tamsulosine)', categorie: 'geriatrie', diffculte: 'A' },
  { id: 'qu-16', question: 'Seuil d\'albumine définissant la dénutrition ?', reponse: '< 35 g/L (3.5 g/dL). < 30 = dénutrition sévère.', categorie: 'geriatrie', diffculte: 'A' },
  { id: 'qu-17', question: 'Que faire en 1ère intention devant un sepsis ?', reponse: 'Hémocultures x2 AVANT antibio + lactates + remplissage NaCl 500mL/30min + antibio dans l\'heure', categorie: 'urgence', diffculte: 'A' },
  { id: 'qu-18', question: 'Loi encadrant la fin de vie en France ?', reponse: 'Loi Claeys-Leonetti (2016). Interdit l\'obstination déraisonnable. Autorise la sédation profonde et continue.', categorie: 'ethique', diffculte: 'A' },
  { id: 'qu-19', question: 'Seuil MNA pour la dénutrition ?', reponse: '< 17 = dénutrition. 17-23.5 = risque de dénutrition. ≥ 24 = normal.', categorie: 'geriatrie', diffculte: 'A' },
  { id: 'qu-20', question: 'Médicament contre-indiqué chez tout sujet âgé ?', reponse: 'AINS (risque rénal, digestif, cardiovasculaire). Aussi BZD longue durée et anticholinergiques (Beers).', categorie: 'geriatrie', diffculte: 'A' }
];

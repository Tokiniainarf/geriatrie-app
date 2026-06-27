// Protocoles de gériatrie aiguë — Prise en charge urgente
const PROTOCOLES_GERIATRIE_AIGUE = [
  { id: 'pga-1', titre: 'Chute avec perte de connaissance', protocole: '1. État hémodynamique (PA, FC). 2. Examen neuro (GCS, pupilles, déficit). 3. Examen orthopédique (hanche, poignet, crane). 4. ECG (syncope ?). 5. Bilan biologique. 6. Rx si douleur. 7. Scanner si GCS < 15 ou anticoagulant. 8. Surveillance neuro H4.',
    criteres_hospitalisation: 'GCS < 15, déficit neuro, fracture, anticoagulant, chute de hauteur, récidive < 1 mois' },
  { id: 'pga-2', titre: 'Dénutrition aiguë', protocole: '1. MNA (< 17 = dénutrition). 2. Albumine (< 35). 3. Perte poids (> 5%/mois). 4. Évaluation cause (dentition, dépression, cancer, isolement). 5. Enrichissement + CNO. 6. Si échec: nutrition entérale. 7. Vit D + B12. 8. Soins dentaires.',
    criteres_hospitalisation: 'Albumine < 25, IMC < 16, perte > 10%/mois, impossibilité oral, déshydratation' },
  { id: 'pga-3', titre: 'Déshydratation aiguë', protocole: '1. Évaluation clinique (soif, peau sèche, pli cutané, confusion). 2. Constantes (PA ortho, FC). 3. Bilan (créatinine, urée, iono, lactates). 4. Remplissage NaCl 0.9% 500mL. 5. Si IRA: ajuster débit. 6. Surveiller diurèse.',
    criteres_hospitalisation: 'Créatinine > 200, K > 5.5, confusion, hypotension, impossibilité boire' },
  { id: 'pga-4', titre: 'Fièvre du sujet âgé', protocole: '1. T° > 38°C ou hypothermie < 36°C. 2. Examen complet (poumon, abdomen, peau, urines). 3. ECBU + hémocultures. 4. NFS, CRP, PCT, créatinine. 5. Rx thoracique. 6. Antibio probabiliste. 7. Arrêter metformine si déshydratation.',
    criteres_hospitalisation: 'PCT > 2, confusion, hypotension, hypothermie, neutropénie, immunodéprimé' },
  { id: 'pga-5', titre: 'Douleur aiguë ingérable', protocole: '1. Évaluer (EVA/ECPA). 2. Paracétamol IV 1g. 3. Si insuffisant: morphine SC 0.1mg/kg. 4. Si toujours insuffisant: perfusion SC continue. 5. Rechercher cause. 6. Réévaluation H1.',
    criteres_hospitalisation: 'EVA > 7, non contrôlée par antalgie de palier 2, cause non identifiée' },
  { id: 'pga-6', titre: 'Confusion aiguë (delirium)', protocole: '1. CAM (confirmer). 2. Rechercher cause (infection, médicaments, métabolique, douleur, constipation). 3. Bilan: T°, NFS, CRP, iono, créatinine, ECBU, gaz du sang. 4. Si agitation: halopéridol 0.5mg. 5. Pas de contention. 6. Réorientation.',
    criteres_hospitalisation: 'Agitation sévère, cause grave suspectée, risque d\'auto-agression, isolement impossible' }
];

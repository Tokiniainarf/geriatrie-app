// Mémos visuels — Aide-mémoire avec émojis pour révision rapide
const MEMOS_VISUELS = [
  { id: 'mv-1', titre: 'GDS de Reisberg (7 stades)', contenu: '1️⃣ Normal · 2️⃣ Déclin très léger (oublis) · 3️⃣ Déclin léger (MMS 24-28) · 4️⃣ Déclin modéré (MMS 18-23) · 5️⃣ Modéré-sévère (MMS 12-17) · 6️⃣ Sévère (MMS 6-11) · 7️⃣ Très sévère (MMS < 6)' },
  { id: 'mv-2', titre: 'ADL de Katz (6 items)', contenu: '🚿 Baignade · 👔 Habillage · 🚽 Toilette · 🛏️ Transferts · 💧 Continence · 🍽️ Alimentation → A=autonome, G=dépendant ≥2' },
  { id: 'mv-3', titre: 'IADL de Lawton (8 items)', contenu: '🛒 Courses · 🍳 Cuisine · 🧹 Ménage · 👕 Lessive · 📞 Téléphone · 🚌 Transport · 💊 Médicaments · 💰 Argent → 0-8 (8=autonome)' },
  { id: 'mv-4', titre: 'MNA (Mini Nutritional Assessment)', contenu: '✅ ≥24 normal · ⚠️ 17-23.5 risque · 🚨 <17 dénutrition → Items: IMC, perte poids, mobilité, stress, médicaments, alimentation' },
  { id: 'mv-5', titre: 'Braden (6 facteurs escarre)', contenu: '👁️ Perception · 💧 Humidité · 🚶 Activité · 🔄 Mobilité · 🍽️ Nutrition · ✋ Friction → ≤9 très élevé, 10-12 élevé, 13-14 modéré, 15-18 faible' },
  { id: 'mv-6', titre: 'Tinetti (équilibre + marche)', contenu: '⚖️ Équilibre (9 items/16) + 🚶 Marche (7 items/12) = 28 → <19 risque élevé, 19-24 modéré, ≥25 faible' },
  { id: 'mv-7', titre: 'CAM (confusion)', contenu: '1️⃣ Début aigu + fluctuation (OBLIGATOIRE) · 2️⃣ Inattention · 3️⃣ Pensée désorganisée · 4️⃣ Niveau conscience altéré → CAM+ = (1+2) ou (1+3+4)' },
  { id: 'mv-8', titre: 'ECPA (douleur non communicant)', contenu: '💨 Respiration · 🗣️ Vocalisation · 😣 Expression facale · 🧍 Corps · 🤝 Consolabilité → 0-2 pas de douleur, 3-5 légère, 6-8 modérée, 9-10 sévère' },
  { id: 'mv-9', titre: 'Critères de Beers', contenu: '🚫 BZD · 🚫 Anticholinergiques · 🚫 AINS · 🚫 Digoxine > 0.125mg · 🚫 Antipsychotiques · 🚫 Opioïdes longue durée → Tout sujet âgé > 65 ans' },
  { id: 'mv-10', titre: 'Scores d\'urgence', contenu: '🔴 qSOFA: FR≥22, PAS≤100, GCS<15 · 🔴 SOFA: défaillance d\'organe · 🔴 NIHSS: gravité AVC · 🔴 Glasgow: conscience (3-15) · 🔴 NEWS2: détérioration' },
  { id: 'mv-11', titre: 'Lois fin de vie', contenu: '📜 Kouchner 2002: consentement + personne confiance · 📜 Leonetti 2005: CI obstination déraisonnable · 📜 Claeys-Leonetti 2016: sédation profonde continue' },
  { id: 'mv-12', titre: 'Antalgie sujet âgé', contenu: '1️⃣ Paracétamol 1g x3/j · 2️⃣ Tramadol 25-50mg (réduire si >75 ans) · 3️⃣ Morphine 0.05-0.1mg/kg · 🚫 ÉVITER AINS · 🚫 ÉVITER codéine' }
];

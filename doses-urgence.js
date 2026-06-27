// Doses d'urgence — Quick reference pour les gardes
const DOSES_URGENCE = [
  { id: 'du-1', situation: 'Arrêt cardiaque', medicament: 'Adrénaline', dose: '1mg IV toutes les 3-5 min', voie: 'IV/IO', notes: 'Pas de dose max en réanimation' },
  { id: 'du-2', situation: 'Fibrillation ventriculaire', medicament: 'Amiodarone', dose: '300mg IV bolus → 150mg si récidive', voie: 'IV', notes: 'Puis 900mg/24h en perfusion' },
  { id: 'du-3', situation: 'Hyperkaliémie critique', medicament: 'Gluconate de calcium', dose: '10mL de 10% en 2-5 min', voie: 'IV', notes: 'Protection myocardique immédiate' },
  { id: 'du-4', situation: 'Hyperkaliémie', medicament: 'Insuline + glucose', dose: '10UI insuline + 50mL glucose 50%', voie: 'IV', notes: 'Surveiller glycémie H1, H2, H4' },
  { id: 'du-5', situation: 'OAP', medicament: 'Furosémide', dose: '40-80mg IV', voie: 'IV', notes: 'Dose selon traitement habituel' },
  { id: 'du-6', situation: 'OAP', medicament: 'Trinitrine', dose: '0.4mg sublinguale', voie: 'SL', notes: 'Répéter x3 si PAS > 100. CI si PAS < 100' },
  { id: 'du-7', situation: 'OAP sévère', medicament: 'Morphine', dose: '2-4mg IV lente', voie: 'IV', notes: 'Si anxiété/dyspnée réfractaire. Surveiller respiration' },
  { id: 'du-8', situation: 'Sepsis', medicament: 'Amox-clavulanat', dose: '2g IV', voie: 'IV', notes: 'Dans l\'heure. + Gentamicine 5mg/kg' },
  { id: 'du-9', situation: 'AVC ischémique < 4.5h', medicament: 'Alteplase (rt-PA)', dose: '0.9mg/kg (max 90mg) — 10% bolus, 90% en 1h', voie: 'IV', notes: 'Scanner cérébral AVANT. CI si hémorragie' },
  { id: 'du-10', situation: 'Convulsions', medicament: 'Diazépam', dose: '10mg IV lente ou rectal', voie: 'IV/PR', notes: 'Répéter x1 après 5 min. Max 30mg' },
  { id: 'du-11', situation: 'Hypoglycémie', medicament: 'Glucose 30%', dose: '30-50mL IV (10-15g)', voie: 'IV', notes: 'Si inconscient. Réévaluer à 15 min' },
  { id: 'du-12', situation: 'Hypoglycémie conscient', medicament: 'Sucre oral', dose: '15g (3 morceaux ou 150mL jus)', voie: 'PO', notes: 'Réévaluer à 15 min' },
  { id: 'du-13', situation: 'Bradycardie symptomatique', medicament: 'Atropine', dose: '0.5mg IV toutes les 3-5 min', voie: 'IV', notes: 'Max 3mg. Si inefficace : stimulation externe' },
  { id: 'du-14', situation: 'Anaphylaxie', medicament: 'Adrénaline', dose: '0.5mg IM (cuisse)', voie: 'IM', notes: 'Répéter toutes les 5 min si nécessaire' },
  { id: 'du-15', situation: 'Douleur aiguë sévère', medicament: 'Morphine', dose: '0.1mg/kg SC ou IV', voie: 'SC/IV', notes: 'Titration. Surveiller conscience et respiration' },
  { id: 'du-16', situation: 'Agitation sévère', medicament: 'Halopéridol', dose: '0.5-2mg IM', voie: 'IM', notes: 'CI si DLB. ECG si dose > 2mg' },
  { id: 'du-17', situation: 'Agitation (alternative)', medicament: 'Midazolam', dose: '2.5-5mg IM', voie: 'IM', notes: 'Si CI halopéridol. Surveiller respiration' },
  { id: 'du-18', situation: 'HTA urgente', nicardipine: 'Nicardipine', dose: '2-10mg/h IV', voie: 'IV', notes: 'Objectif: réduire PAS de 25% en 2h' },
  { id: 'du-19', situation: 'Hypotension', noradrénaline: 'Noradrénaline', dose: '0.1-0.5 µg/kg/min', voie: 'IV', notes: 'Cible MAP ≥ 65 mmHg' },
  { id: 'du-20', situation: 'Sevrage BZD', diazepam: 'Diazépam', dose: 'Réduire de 10-25% toutes les 1-2 semaines', voie: 'PO', notes: 'Sevrage progressif OBLIGATOIRE. Substitution lorazépam → diazépam' }
];

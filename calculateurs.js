/* ── CALCULATEURS CLINIQUES (MEDICALCUL GERIATRIQUE) ── */

const CALCULATEURS = [
  {
    id: 'egs',
    nom: 'Évaluation Gériatrique Standardisée (EGS)',
    domaine: 'Évaluation Gériatrique Standardisée (EGS)',
    description: 'Bilan d\'évaluation multi-domaine (Autonomie, Cognition, Mobilité, Nutrition, Sensoriel) pour le patient âgé fragile.',
    type: 'custom',
    render: (div) => {
      div.innerHTML = `
        <div class="egs-wizard" style="margin-bottom:16px;">
          <div class="egs-steps" style="display:flex; justify-content:space-between; margin-bottom:20px; font-size:0.8rem; background:rgba(255,255,255,0.05); padding:8px; border-radius:8px; overflow-x:auto;">
            <span id="step-dot-1" class="step-dot active-dot" style="font-weight:bold; color:var(--accent); margin-right:8px; white-space:nowrap;">1. Autonomie</span>
            <span id="step-dot-2" class="step-dot" style="opacity:0.6; margin-right:8px; white-space:nowrap;">2. Cognition</span>
            <span id="step-dot-3" class="step-dot" style="opacity:0.6; margin-right:8px; white-space:nowrap;">3. Mobilité</span>
            <span id="step-dot-4" class="step-dot" style="opacity:0.6; margin-right:8px; white-space:nowrap;">4. Nutrition</span>
            <span id="step-dot-5" class="step-dot" style="opacity:0.6; white-space:nowrap;">5. Synthèse</span>
          </div>

          <!-- Étape 1 : Autonomie -->
          <div id="egs-step-1" class="egs-step-panel">
            <div class="calc-glass-box">
              <div class="calc-group-title">Autonomie Physique (ADL / Katz)</div>
              <p class="fs-sm" style="margin-bottom:8px; color:var(--text2);">Cocher les fonctions conservées de manière autonome :</p>
              <label class="check-container"><input type="checkbox" id="egs_adl_1"><span class="checkmark"></span>Toilette (se lave seul)</label>
              <label class="check-container"><input type="checkbox" id="egs_adl_2"><span class="checkmark"></span>Habillage (s\'habille seul)</label>
              <label class="check-container"><input type="checkbox" id="egs_adl_3"><span class="checkmark"></span>Aller aux toilettes (seul)</label>
              <label class="check-container"><input type="checkbox" id="egs_adl_4"><span class="checkmark"></span>Transferts (se lève et se couche seul)</label>
              <label class="check-container"><input type="checkbox" id="egs_adl_5"><span class="checkmark"></span>Continence (miction et défécation contrôlées)</label>
              <label class="check-container"><input type="checkbox" id="egs_adl_6"><span class="checkmark"></span>Alimentation (mange seul)</label>
            </div>
            <div class="calc-glass-box" style="margin-top:12px;">
              <div class="calc-group-title">Autonomie Instrumentale (Lawton IADL - 4 variables clés)</div>
              <p class="fs-sm" style="margin-bottom:8px; color:var(--text2);">Cocher les activités gérées de manière autonome :</p>
              <label class="check-container"><input type="checkbox" id="egs_iadl_1"><span class="checkmark"></span>Téléphone (utilise seul)</label>
              <label class="check-container"><input type="checkbox" id="egs_iadl_2"><span class="checkmark"></span>Transports (se déplace seul)</label>
              <label class="check-container"><input type="checkbox" id="egs_iadl_3"><span class="checkmark"></span>Médicaments (prend seul)</label>
              <label class="check-container"><input type="checkbox" id="egs_iadl_4"><span class="checkmark"></span>Budget (gère ses finances seul)</label>
            </div>
            <div class="calc-glass-box" style="margin-top:12px;">
              <div class="calc-group-title">Grille AGGIR (GIR Estimé)</div>
              <label>Estimation clinique directe du GIR :
                <select id="egs_gir" style="width:100%; margin-top:6px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:6px;">
                  <option value="6">GIR 6 (Autonomie complète)</option>
                  <option value="5">GIR 5 (Dépendance légère, repas/ménage)</option>
                  <option value="4">GIR 4 (Aide transferts/toilette ou surveillance cognitive)</option>
                  <option value="3">GIR 3 (Dépendance corporelle forte, mental sain)</option>
                  <option value="2">GIR 2 (Grabataire mental sain ou démence déambulante)</option>
                  <option value="1">GIR 1 (Grabataire démence sévère, alité)</option>
                </select>
              </label>
            </div>
          </div>

          <!-- Étape 2 : Cognition & Humeur -->
          <div id="egs-step-2" class="egs-step-panel" style="display:none">
            <div class="calc-glass-box">
              <div class="calc-group-title">Cognition (Score MMS)</div>
              <label>Saisir ou estimer le score MMS (sur 30) :
                <input type="number" id="egs_mms" min="0" max="30" value="28" style="width:70px; margin-left:12px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:4px 8px;">
              </label>
              <p class="fs-sm" style="margin-top:6px; color:var(--text3);">Normale ≥ 24 · Démence légère 18-23 · Modérée 10-17 · Sévère < 10.</p>
            </div>
            <div class="calc-glass-box" style="margin-top:12px;">
              <div class="calc-group-title">Dépistage de la dépression (GDS-15 abrégé)</div>
              <p class="fs-sm" style="margin-bottom:8px; color:var(--text2);">Cocher si le patient présente ces signes d\'alerte :</p>
              <label class="check-container"><input type="checkbox" id="egs_gds_1"><span class="checkmark"></span>Sentiment de vide / Désintérêt pour ses activités</label>
              <label class="check-container"><input type="checkbox" id="egs_gds_2"><span class="checkmark"></span>Précompte/Préférence rester seul chez soi plutôt que de sortir</label>
              <label class="check-container"><input type="checkbox" id="egs_gds_3"><span class="checkmark"></span>Sentiment d\'inutilité ou d\'impuissance</label>
              <label class="check-container"><input type="checkbox" id="egs_gds_4"><span class="checkmark"></span>Pense que sa situation est désespérée</label>
            </div>
          </div>

          <!-- Étape 3 : Mobilité & Fragilité -->
          <div id="egs-step-3" class="egs-step-panel" style="display:none">
            <div class="calc-glass-box">
              <div class="calc-group-title">Équilibre (Score Tinetti POMA)</div>
              <label>Saisir le score d\'équilibre de Tinetti (sur 16) :
                <input type="number" id="egs_tinetti" min="0" max="16" value="15" style="width:70px; margin-left:12px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:4px 8px;">
              </label>
              <p class="fs-sm" style="margin-top:6px; color:var(--text3);">Normal ≥ 15 · Risque modéré 11-14 · Risque élevé < 11.</p>
            </div>
            <div class="calc-glass-box" style="margin-top:12px;">
              <div class="calc-group-title">Critères de fragilité de Fried</div>
              <p class="fs-sm" style="margin-bottom:8px; color:var(--text2);">Cocher les critères présents :</p>
              <label class="check-container"><input type="checkbox" id="egs_fried_1"><span class="checkmark"></span>Perte de poids involontaire (≥ 4.5 kg en 1 an)</label>
              <label class="check-container"><input type="checkbox" id="egs_fried_2"><span class="checkmark"></span>Fatigue / Épuisement subjectif ressenti</label>
              <label class="check-container"><input type="checkbox" id="egs_fried_3"><span class="checkmark"></span>Faiblesse musculaire (force de préhension faible)</label>
              <label class="check-container"><input type="checkbox" id="egs_fried_4"><span class="checkmark"></span>Lenteur de la marche (vitesse de marche diminuée)</label>
              <label class="check-container"><input type="checkbox" id="egs_fried_5"><span class="checkmark"></span>Faible niveau d\'activité physique</label>
            </div>
            <div class="calc-glass-box" style="margin-top:12px;">
              <div class="calc-group-title">Clinical Frailty Scale (CFS)</div>
              <label>Classe CFS de 1 à 9 :
                <select id="egs_cfs" style="width:100%; margin-top:6px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:6px;">
                  <option value="1">CFS 1 : Très en forme</option>
                  <option value="2">CFS 2 : En forme (pas de maladie active)</option>
                  <option value="3">CFS 3 : Se porte bien (comorbidités contrôlées)</option>
                  <option value="4">CFS 4 : Vulnérable (limité dans activités physiques)</option>
                  <option value="5">CFS 5 : Fragilité légère (aide activités instrumentales)</option>
                  <option value="6">CFS 6 : Fragilité modérée (aide pour toilette/habillage)</option>
                  <option value="7">CFS 7 : Fragilité sévère (totalement dépendant physique)</option>
                  <option value="8">CFS 8 : Fragilité très sévère (grabataire, proche décès)</option>
                  <option value="9">CFS 9 : Phase terminale (espérance de vie < 6 mois)</option>
                </select>
              </label>
            </div>
          </div>

          <!-- Étape 4 : Nutrition & Sensoriel -->
          <div id="egs-step-4" class="egs-step-panel" style="display:none">
            <div class="calc-glass-box">
              <div class="calc-group-title">Statut Nutritionnel (MNA-SF)</div>
              <label>Saisir le score MNA-SF (sur 14) :
                <input type="number" id="egs_mna" min="0" max="14" value="12" style="width:70px; margin-left:12px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:4px 8px;">
              </label>
              <p class="fs-sm" style="margin-top:6px; color:var(--text3);">Normal ≥ 12 · Risque dénutrition 8-11 · Dénutrition sévère ≤ 7.</p>
            </div>
            <div class="calc-glass-box" style="margin-top:12px;">
              <div class="calc-group-title">Déficits Sensoriels & Dentition</div>
              <p class="fs-sm" style="margin-bottom:8px; color:var(--text2);">Cocher les déficits cliniques constatés :</p>
              <label class="check-container"><input type="checkbox" id="egs_sens_1"><span class="checkmark"></span>Déficit visuel sévère (non corrigé ou DMLA/glaucome)</label>
              <label class="check-container"><input type="checkbox" id="egs_sens_2"><span class="checkmark"></span>Déficit auditif sévère non appareillé</label>
              <label class="check-container"><input type="checkbox" id="egs_sens_3"><span class="checkmark"></span>Mauvais état bucco-dentaire / Appareil inadapté</label>
            </div>
          </div>

          <!-- Étape 5 : Synthèse -->
          <div id="egs-step-5" class="egs-step-panel" style="display:none">
            <div class="calc-glass-box" style="text-align:center; padding:24px 16px;">
              <h3>Synthèse de l\'Évaluation Gériatrique</h3>
              <p style="color:var(--text2); margin-top:8px; margin-bottom:16px;">Générer le rapport clinique finalisé de l\'EGS pour le dossier patient.</p>
              <button type="button" class="set-btn" id="egs-btn-generate" style="background:var(--accent); color:white; border:none; border-radius:8px; padding:12px 24px; font-weight:bold; cursor:pointer; width:100%;">Générer le Rapport EGS ➔</button>
            </div>
          </div>

          <!-- Wizard Navigation -->
          <div class="egs-nav-btns" style="display:flex; justify-content:space-between; margin-top:20px; gap:10px;">
            <button type="button" class="calc-filt-btn" id="egs-btn-prev" style="flex:1; padding:10px; display:none;">Précédent</button>
            <button type="button" class="calc-filt-btn" id="egs-btn-next" style="flex:1; padding:10px; background:rgba(255,255,255,0.08);">Suivant</button>
          </div>
        </div>
      `;

      let currentStep = 1;
      const showStep = (step) => {
        currentStep = step;
        for (let i = 1; i <= 5; i++) {
          const panel = document.getElementById(`egs-step-${i}`);
          const dot = document.getElementById(`step-dot-${i}`);
          if (panel) panel.style.display = i === step ? 'block' : 'none';
          if (dot) {
            dot.style.fontWeight = i === step ? 'bold' : 'normal';
            dot.style.color = i === step ? 'var(--accent)' : 'var(--text1)';
            dot.style.opacity = i === step ? '1' : '0.6';
          }
        }
        const btnPrev = document.getElementById('egs-btn-prev');
        const btnNext = document.getElementById('egs-btn-next');
        if (btnPrev) btnPrev.style.display = step === 1 ? 'none' : 'block';
        if (btnNext) {
          if (step === 5) {
            btnNext.style.display = 'none';
          } else {
            btnNext.style.display = 'block';
            btnNext.textContent = 'Suivant';
          }
        }
      };

      document.getElementById('egs-btn-prev').addEventListener('click', () => {
        if (currentStep > 1) showStep(currentStep - 1);
      });
      document.getElementById('egs-btn-next').addEventListener('click', () => {
        if (currentStep < 5) showStep(currentStep + 1);
      });

      document.getElementById('egs-btn-generate').addEventListener('click', () => {
        let adl = 0;
        for (let i = 1; i <= 6; i++) {
          if (document.getElementById(`egs_adl_${i}`).checked) adl++;
        }
        let iadl = 0;
        for (let i = 1; i <= 4; i++) {
          if (document.getElementById(`egs_iadl_${i}`).checked) iadl++;
        }
        const gir = document.getElementById('egs_gir').value;
        const mms = parseInt(document.getElementById('egs_mms').value || 0);
        let gds = 0;
        for (let i = 1; i <= 4; i++) {
          if (document.getElementById(`egs_gds_${i}`).checked) gds++;
        }
        const tinetti = parseInt(document.getElementById('egs_tinetti').value || 0);
        let fried = 0;
        for (let i = 1; i <= 5; i++) {
          if (document.getElementById(`egs_fried_${i}`).checked) fried++;
        }
        const cfs = parseInt(document.getElementById('egs_cfs').value);
        const mna = parseInt(document.getElementById('egs_mna').value || 0);
        const sens = [];
        if (document.getElementById('egs_sens_1').checked) sens.push('Visuel');
        if (document.getElementById('egs_sens_2').checked) sens.push('Auditif');
        if (document.getElementById('egs_sens_3').checked) sens.push('Bucco-dentaire');

        let mmsDesc = 'Normal';
        if (mms < 10) mmsDesc = 'Déficit cognitif sévère';
        else if (mms < 18) mmsDesc = 'Déficit cognitif modéré';
        else if (mms < 24) mmsDesc = 'Trouble cognitif léger';

        let gdsDesc = 'Absence d\'alerte dépressive';
        if (gds >= 3) gdsDesc = 'Syndrome dépressif fortement suspecté';
        else if (gds >= 1) gdsDesc = 'Symptomatologie dépressive légère';

        let tinettiDesc = 'Équilibre préservé';
        if (tinetti < 11) tinettiDesc = 'Risque de chute TRÈS ÉLEVÉ';
        else if (tinetti <= 14) tinettiDesc = 'Risque de chute modéré';

        let friedDesc = 'Robuste (Fried 0)';
        if (fried >= 3) friedDesc = 'Patient FRAGILE (Fried ≥ 3)';
        else if (fried >= 1) friedDesc = 'Pré-fragile (Fried 1-2)';

        let mnaDesc = 'Statut nutritionnel normal';
        if (mna <= 7) mnaDesc = 'DÉNUTRITION AVÉRÉE';
        else if (mna <= 11) mnaDesc = 'Risque de dénutrition';

        const rDiv = document.getElementById('calc-result');
        if (rDiv) {
          const reportText = `=== SYNTHÈSE DE L\'ÉVALUATION GÉRIATRIQUE STANDARDISÉE (EGS) ===
Date de l\'évaluation : ${new Date().toLocaleDateString('fr-FR')}

1. AUTONOMIE :
   - ADL (Katz) : ${adl}/6 (Autonomie physique)
   - IADL (Lawton 4 var) : ${iadl}/4 (Autonomie instrumentale)
   - GIR estimé : GIR ${gir}

2. COGNITION & HUMEUR :
   - MMS : ${mms}/30 (${mmsDesc})
   - Dépistage Dépression (GDS court) : ${gds}/4 alertes (${gdsDesc})

3. MOBILITÉ & STATUT FONCTIONNEL :
   - Équilibre (Tinetti) : ${tinetti}/16 (Interprétation : ${tinettiDesc})
   - Phénotype de Fried : ${fried}/5 critères (${friedDesc})
   - Clinical Frailty Scale (CFS) : Niveau ${cfs}/9

4. NUTRITION & SENSORIEL :
   - MNA-SF : ${mna}/14 (Statut : ${mnaDesc})
   - Déficits sensoriels : ${sens.length > 0 ? sens.join(', ') : 'Aucun déficit majeur détecté'}

5. PRECONISATIONS CLINIQUES :
   ${cfs >= 5 || fried >= 3 ? '- Patient classé comme FRAGILE. Indication d\'une prise en charge pluridisciplinaire coordonnée (évaluation sociale, adaptation logement, kinésithérapie).' : '- Patient robuste ou pré-fragile.'}
   ${mna <= 11 ? '- Risque ou statut de dénutrition. Prescription d\'enrichissement alimentaire ou CNO.' : ''}
   ${tinetti < 11 ? '- Risque de chute élevé. Sécurisation du domicile et rééducation motrice préventive en urgence.' : ''}
   ${mms < 24 ? '- Troubles cognitifs. Organiser un bilan neuropsychologique et consultation mémoire.' : ''}
============================================================`;

          rDiv.innerHTML = `
            <div class="calc-res-box normal" style="margin-top:16px;">
              <div class="calc-res-title">Rapport EGS généré avec succès</div>
              <textarea id="egs-report-text" style="width:100%; height:250px; background:rgba(0,0,0,0.2); color:var(--text1); font-family:monospace; font-size:0.75rem; border:1px solid var(--glass-border); border-radius:4px; padding:8px; resize:vertical; margin-top:8px;">${esc(reportText)}</textarea>
              <button type="button" class="set-btn" id="egs-btn-copy" style="background:#10b981; color:white; border:none; padding:8px 16px; font-weight:bold; cursor:pointer; width:100%; margin-top:8px;">📋 Copier le rapport EGS</button>
            </div>
          `;

          document.getElementById('egs-btn-copy').addEventListener('click', () => {
            const txt = document.getElementById('egs-report-text');
            txt.select();
            document.execCommand('copy');
            toast('Rapport EGS copié dans le presse-papiers !');
          });
        }
      });
    }
  },

  // COGNITION & HUMEUR
  {
    id: 'mms',
    nom: 'MMS (Mini Mental State Examination)',
    domaine: 'Cognition & Humeur',
    description: 'Score de référence pour le dépistage global des troubles cognitifs. Score maximal : 30.',
    type: 'checklist',
    items: [
      { text: 'Orientation temporelle : Année (1 pt)', points: 1 },
      { text: 'Orientation temporelle : Saison (1 pt)', points: 1 },
      { text: 'Orientation temporelle : Mois (1 pt)', points: 1 },
      { text: 'Orientation temporelle : Jour de la semaine (1 pt)', points: 1 },
      { text: 'Orientation temporelle : Date du jour (1 pt)', points: 1 },
      { text: 'Orientation spatiale : Pays (1 pt)', points: 1 },
      { text: 'Orientation spatiale : Région / Département (1 pt)', points: 1 },
      { text: 'Orientation spatiale : Ville (1 pt)', points: 1 },
      { text: 'Orientation spatiale : Hôpital ou Cabinet (1 pt)', points: 1 },
      { text: 'Orientation spatiale : Étage ou Pièce (1 pt)', points: 1 },
      { text: 'Enregistrement (Répéter 3 mots) : Mot 1 (1 pt)', points: 1 },
      { text: 'Enregistrement (Répéter 3 mots) : Mot 2 (1 pt)', points: 1 },
      { text: 'Enregistrement (Répéter 3 mots) : Mot 3 (1 pt)', points: 1 },
      { text: 'Attention (Soustraire 7 à partir de 100) : 93 (1 pt)', points: 1 },
      { text: 'Attention (Soustraire 7 à partir de 100) : 86 (1 pt)', points: 1 },
      { text: 'Attention (Soustraire 7 à partir de 100) : 79 (1 pt)', points: 1 },
      { text: 'Attention (Soustraire 7 à partir de 100) : 72 (1 pt)', points: 1 },
      { text: 'Attention (Soustraire 7 à partir de 100) : 65 (1 pt)', points: 1 },
      { text: 'Rappel différé (3 mots) : Mot 1 (1 pt)', points: 1 },
      { text: 'Rappel différé (3 mots) : Mot 2 (1 pt)', points: 1 },
      { text: 'Rappel différé (3 mots) : Mot 3 (1 pt)', points: 1 },
      { text: 'Langage : Nommer un crayon (1 pt)', points: 1 },
      { text: 'Langage : Nommer une montre (1 pt)', points: 1 },
      { text: 'Langage : Répéter « Pas de si, ni de mais » (1 pt)', points: 1 },
      { text: 'Compréhension écrite : Fermez les yeux (1 pt)', points: 1 },
      { text: 'Compréhension orale (Ordre 3 temps) : Prendre feuille (1 pt)', points: 1 },
      { text: 'Compréhension orale (Ordre 3 temps) : Plier en deux (1 pt)', points: 1 },
      { text: 'Compréhension orale (Ordre 3 temps) : Poser par terre (1 pt)', points: 1 },
      { text: 'Langage : Écrire une phrase complète (1 pt)', points: 1 },
      { text: 'Praxie : Copie de 2 pentagones croisés (1 pt)', points: 1 }
    ],
    calculer: (total) => {
      let cat = 'danger';
      let desc = 'Déficit cognitif sévère.';
      if (total >= 24) { cat = 'normal'; desc = 'Fonction cognitive normale (à ajuster selon la scolarité).'; }
      else if (total >= 18) { cat = 'warning'; desc = 'Trouble cognitif léger à modéré.'; }
      else if (total >= 10) { cat = 'danger'; desc = 'Déficit cognitif modéré.'; }
      return { total, cat, desc, max: 30 };
    }
  },
  {
    id: 'moca',
    nom: 'MoCA (Montreal Cognitive Assessment)',
    domaine: 'Cognition & Humeur',
    description: 'Dépistage sensible pour les troubles cognitifs légers (MCI). Score maximal : 30.',
    type: 'checklist',
    items: [
      { text: 'Visuospatial/Exécutif : Trail alterné (1 pt)', points: 1 },
      { text: 'Visuospatial/Exécutif : Copie du cube (1 pt)', points: 1 },
      { text: 'Visuospatial/Exécutif : Horloge - Dessin du cadran (1 pt)', points: 1 },
      { text: 'Visuospatial/Exécutif : Horloge - Chiffres complets (1 pt)', points: 1 },
      { text: 'Visuospatial/Exécutif : Horloge - Position aiguilles (1 pt)', points: 1 },
      { text: 'Dénomination : Lion (1 pt)', points: 1 },
      { text: 'Dénomination : Rhinocéros (1 pt)', points: 1 },
      { text: 'Dénomination : Chameau (1 pt)', points: 1 },
      { text: 'Attention : Répéter chiffres endroit (1 pt)', points: 1 },
      { text: 'Attention : Répéter chiffres envers (1 pt)', points: 1 },
      { text: 'Attention : Tapoter au son de la lettre A (1 pt)', points: 1 },
      { text: 'Attention : Calculs 100 - 7 (1 pt)', points: 1 },
      { text: 'Attention : Calculs 93 - 7 (1 pt)', points: 1 },
      { text: 'Attention : Calculs 86 - 7 (1 pt)', points: 1 },
      { text: 'Langage : Répéter phrase 1 (1 pt)', points: 1 },
      { text: 'Langage : Répéter phrase 2 (1 pt)', points: 1 },
      { text: 'Langage : Fluence verbale (F > 11 mots/min) (1 pt)', points: 1 },
      { text: 'Abstraction : Catégories communes (train-vélo, montre-règle) (2 pts)', points: 2 },
      { text: 'Rappel différé libre : Mot 1 (1 pt)', points: 1 },
      { text: 'Rappel différé libre : Mot 2 (1 pt)', points: 1 },
      { text: 'Rappel différé libre : Mot 3 (1 pt)', points: 1 },
      { text: 'Rappel différé libre : Mot 4 (1 pt)', points: 1 },
      { text: 'Rappel différé libre : Mot 5 (1 pt)', points: 1 },
      { text: 'Orientation : Date (1 pt)', points: 1 },
      { text: 'Orientation : Mois (1 pt)', points: 1 },
      { text: 'Orientation : Année (1 pt)', points: 1 },
      { text: 'Orientation : Jour de la semaine (1 pt)', points: 1 },
      { text: 'Orientation : Lieu (1 pt)', points: 1 },
      { text: 'Orientation : Ville (1 pt)', points: 1 },
      { text: 'Ajustement : Scolarité ≤ 12 ans (+1 pt bonus)', points: 1 }
    ],
    calculer: (total) => {
      total = Math.min(30, total);
      let cat = 'danger';
      let desc = 'Altération cognitive marquée.';
      if (total >= 26) { cat = 'normal'; desc = 'Normal.'; }
      else if (total >= 18) { cat = 'warning'; desc = 'Trouble cognitif léger (MCI) probable.'; }
      return { total, cat, desc, max: 30 };
    }
  },
  {
    id: 'gds15',
    nom: 'GDS-15 (Geriatric Depression Scale - court)',
    domaine: 'Cognition & Humeur',
    description: 'Dépistage de la dépression gériatrique en 15 questions oui/non. Score maximal : 15.',
    type: 'questions',
    questions: [
      { text: 'Êtes-vous fondamentalement satisfait de votre vie ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Avez-vous abandonné un grand nombre de vos activités ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Avez-vous le sentiment que votre vie est vide ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous ennuyez-vous souvent ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Êtes-vous de bonne humeur la plupart du temps ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Craignez-vous qu\'un malheur vous arrive ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous heureux la plupart du temps ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Vous sentez-vous souvent impuissant ou abandonné ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Préférez-vous rester chez vous plutôt que de sortir ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Pensez-vous avoir plus de problèmes de mémoire que les autres ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Pensez-vous qu\'il est merveilleux d\'être en vie aujourd\'hui ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Vous sentez-vous inutile dans votre état actuel ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous plein d\'énergie ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Pensez-vous que votre situation est désespérée ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Pensez-vous que la plupart des gens ont une vie meilleure que la vôtre ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Absence de dépression.';
      if (total >= 12) { cat = 'danger'; desc = 'Dépression sévère.'; }
      else if (total >= 9) { cat = 'danger'; desc = 'Dépression modérée.'; }
      else if (total >= 5) { cat = 'warning'; desc = 'Dépression légère possible.'; }
      return { total, cat, desc, max: 15 };
    }
  },
  {
    id: 'gds30',
    nom: 'GDS-30 (Geriatric Depression Scale - long)',
    domaine: 'Cognition & Humeur',
    description: 'Version originale en 30 questions oui/non. Score maximal : 30.',
    type: 'questions',
    questions: [
      { text: 'Êtes-vous fondamentalement satisfait de votre vie ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Avez-vous abandonné un grand nombre de vos activités ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Avez-vous le sentiment que votre vie est vide ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous ennuyez-vous souvent ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Êtes-vous plein d\'espoir pour l\'avenir ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Êtes-vous embarrassé par des pensées qui ne vous laissent pas de repos ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Êtes-vous de bonne humeur la plupart du temps ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Craignez-vous qu\'un malheur vous arrive ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous heureux la plupart du temps ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Vous sentez-vous souvent impuissant ou abandonné ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous souvent agité ou inquiet ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Préférez-vous rester chez vous plutôt que de sortir ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous inquiétez-vous souvent pour l\'avenir ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Pensez-vous avoir plus de problèmes de mémoire que les autres ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Pensez-vous qu\'il est merveilleux d\'être en vie aujourd\'hui ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Vous sentez-vous souvent triste ou cafardeux ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous inutile dans votre état actuel ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous tracassez-vous beaucoup pour le passé ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Trouvez-vous que la vie est très intéressante ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Avez-vous du mal à commencer de nouveaux projets ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous plein d\'énergie ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Pensez-vous que votre situation est désespérée ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Pensez-vous que la plupart des gens ont une vie meilleure que la vôtre ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous tracassez-vous pour des petits riens ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Avez-vous souvent envie de pleurer ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Avez-vous du mal à vous concentrer ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous réveillez-vous le matin avec plaisir ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Évitez-vous les réunions sociales ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Est-il facile pour vous de prendre des décisions ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Avez-vous l\'esprit aussi clair qu\'autrefois ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Normal (pas de dépression).';
      if (total >= 20) { cat = 'danger'; desc = 'Dépression sévère.'; }
      else if (total >= 10) { cat = 'warning'; desc = 'Dépression légère à modérée.'; }
      return { total, cat, desc, max: 30 };
    }
  },
  {
    id: 'cam',
    nom: 'CAM (Confusion Assessment Method)',
    domaine: 'Cognition & Humeur',
    description: 'Aide au diagnostic clinique du syndrome confusionnel.',
    type: 'custom',
    render: (div) => {
      div.innerHTML = `
        <div class="calc-form">
          <label class="check-container">
            <input type="checkbox" id="cam_1" class="calc-input">
            <span class="checkmark"></span>
            <strong>(1) Début aigu et fluctuation des symptômes</strong><br>
            <span class="fs-sm">Changement aigu par rapport à l\'état de base ou fluctuation.</span>
          </label>
          <label class="check-container">
            <input type="checkbox" id="cam_2" class="calc-input">
            <span class="checkmark"></span>
            <strong>(2) Inattention</strong><br>
            <span class="fs-sm">Difficulté à fixer son attention, distractibilité.</span>
          </label>
          <label class="check-container">
            <input type="checkbox" id="cam_3" class="calc-input">
            <span class="checkmark"></span>
            <strong>(3) Pensée désorganisée</strong><br>
            <span class="fs-sm">Propos incohérents, illogiques, fuite des idées.</span>
          </label>
          <label class="check-container">
            <input type="checkbox" id="cam_4" class="calc-input">
            <span class="checkmark"></span>
            <strong>(4) Altération du niveau de conscience</strong><br>
            <span class="fs-sm">Vigilance anormale (somnolence, stupeur ou hyperalerte).</span>
          </label>
        </div>
      `;
      ['cam_1', 'cam_2', 'cam_3', 'cam_4'].forEach(id => {
        document.getElementById(id).addEventListener('change', () => {
          const c1 = document.getElementById('cam_1').checked;
          const c2 = document.getElementById('cam_2').checked;
          const c3 = document.getElementById('cam_3').checked;
          const c4 = document.getElementById('cam_4').checked;
          const diag = c1 && c2 && (c3 || c4);
          const rDiv = document.getElementById('calc-result');
          if (rDiv) {
            rDiv.innerHTML = `
              <div class="calc-res-box ${diag ? 'danger' : 'normal'}">
                <div class="calc-res-title">Diagnostic : ${diag ? 'CAM POSITIF' : 'CAM NÉGATIF'}</div>
                <div class="calc-res-desc">
                  ${diag 
                    ? '<strong>Syndrome confusionnel probable.</strong> Rechercher en urgence un facteur somatique (Douleur, Rétention urinaire, Fécalome, Infection, Iatrogénie).' 
                    : 'Absence de critères suffisants pour un syndrome confusionnel (Nécessite 1 ET 2, accompagnés de 3 OU 4).'
                  }
                </div>
              </div>
            `;
          }
        });
      });
    }
  },

  // AUTONOMIE
  {
    id: 'adl',
    nom: 'ADL (Katz - Activités de la vie quotidienne)',
    domaine: 'Autonomie',
    description: 'Évalue les 6 fonctions de base de l\'autonomie physique. Score maximal : 6.',
    type: 'radio_group',
    groups: [
      {
        question: 'Toilette',
        options: [
          { text: 'Autonome : Se lave seul ou n\'a besoin d\'aide que pour une seule partie du corps.', value: 1 },
          { text: 'Dépendant : A besoin d\'aide pour plus d\'une partie du corps.', value: 0 }
        ]
      },
      {
        question: 'Habillage',
        options: [
          { text: 'Autonome : Prend ses vêtements et s\'habille complètement seul.', value: 1 },
          { text: 'Dépendant : A besoin d\'aide importante.', value: 0 }
        ]
      },
      {
        question: 'Aller aux toilettes',
        options: [
          { text: 'Autonome : S\'y rend seul, s\'essuie et revient seul.', value: 1 },
          { text: 'Dépendant : A besoin d\'aide pour se déplacer ou s\'essuyer.', value: 0 }
        ]
      },
      {
        question: 'Transferts',
        options: [
          { text: 'Autonome : Se lève et se couche seul (du lit ou de la chaise).', value: 1 },
          { text: 'Dépendant : A besoin d\'aide.', value: 0 }
        ]
      },
      {
        question: 'Continence',
        options: [
          { text: 'Autonome : Contrôle complet de la défécation et de la miction.', value: 1 },
          { text: 'Dépendant : Incontinence partielle/totale ou port de protection/sonde.', value: 0 }
        ]
      },
      {
        question: 'Alimentation',
        options: [
          { text: 'Autonome : Mange seul (couper la viande peut être fait par autrui).', value: 1 },
          { text: 'Dépendant : A besoin d\'aide ou alimentation artificielle.', value: 0 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Autonomie complète.';
      if (total <= 2) { cat = 'danger'; desc = 'Dépendance physique sévère (GIR 1-2 probable).'; }
      else if (total <= 4) { cat = 'warning'; desc = 'Dépendance modérée.'; }
      else if (total === 5) { cat = 'warning'; desc = 'Dépendance légère.'; }
      return { total, cat, desc, max: 6 };
    }
  },
  {
    id: 'iadl',
    nom: 'IADL (Lawton - Activités instrumentales)',
    domaine: 'Autonomie',
    description: 'Évalue les capacités à vivre de manière indépendante au domicile. Score maximal : 8.',
    type: 'radio_group',
    groups: [
      {
        question: 'Utilisation du téléphone',
        options: [
          { text: 'Autonome : Utilise le téléphone de sa propre initiative.', value: 1 },
          { text: 'Aide partielle : Répond ou compose seulement quelques numéros.', value: 0 },
          { text: 'Dépendant : N\'utilise pas du tout le téléphone.', value: 0 }
        ]
      },
      {
        question: 'Transports',
        options: [
          { text: 'Autonome : Voyage seul en transports ou conduit sa voiture.', value: 1 },
          { text: 'Aide partielle : Voyage uniquement si accompagné.', value: 0 },
          { text: 'Dépendant : Ne voyage pas du tout.', value: 0 }
        ]
      },
      {
        question: 'Prise de médicaments',
        options: [
          { text: 'Autonome : Prend ses médicaments seul aux doses et horaires prescrits.', value: 1 },
          { text: 'Dépendant : Nécessite une supervision ou préparation (pilulier).', value: 0 }
        ]
      },
      {
        question: 'Gestion du budget',
        options: [
          { text: 'Autonome : Gère ses finances seul (achats, banque).', value: 1 },
          { text: 'Dépendant : Incapable de gérer sans aide.', value: 0 }
        ]
      },
      {
        question: 'Faire les courses',
        options: [
          { text: 'Autonome : Fait ses courses de manière indépendante.', value: 1 },
          { text: 'Dépendant : A besoin d\'être accompagné.', value: 0 }
        ]
      },
      {
        question: 'Préparation des repas',
        options: [
          { text: 'Autonome : Prépare et sert ses repas de manière indépendante.', value: 1 },
          { text: 'Dépendant : A besoin qu\'on lui prépare ses repas.', value: 0 }
        ]
      },
      {
        question: 'Entretien ménager',
        options: [
          { text: 'Autonome : Assure seul les tâches ménagères.', value: 1 },
          { text: 'Dépendant : Nécessite une aide extérieure.', value: 0 }
        ]
      },
      {
        question: 'Lessive',
        options: [
          { text: 'Autonome : Fait sa lessive seul.', value: 1 },
          { text: 'Dépendant : Entièrement prise en charge par un tiers.', value: 0 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Autonomie instrumentale conservée.';
      if (total <= 3) { cat = 'danger'; desc = 'Perte d\'autonomie instrumentale sévère. Aides à domicile indispensables.'; }
      else if (total <= 6) { cat = 'warning'; desc = 'Altération modérée de l\'autonomie instrumentale.'; }
      return { total, cat, desc, max: 8 };
    }
  },
  {
    id: 'aggir',
    nom: 'Grille AGGIR (Détermination du GIR)',
    domaine: 'Autonomie',
    description: 'Classe le niveau de dépendance en 6 Groupes Iso-Ressources (GIR) pour l\'attribution de l\'APA.',
    type: 'radio_group',
    groups: [
      {
        question: 'Cohérence (Converser et se comporter de façon logique)',
        options: [
          { text: 'A : Fait seul, correctement et habituellement', value: 1 },
          { text: 'B : Fait partiellement, incorrectement ou non habituellement', value: 2 },
          { text: 'C : Ne fait jamais', value: 3 }
        ]
      },
      {
        question: 'Orientation (Se repérer dans le temps et l\'espace)',
        options: [
          { text: 'A : Fait seul, correctement et habituellement', value: 1 },
          { text: 'B : Fait partiellement, incorrectement ou non habituellement', value: 2 },
          { text: 'C : Ne fait jamais', value: 3 }
        ]
      },
      {
        question: 'Toilette (Se laver le haut et le bas du corps)',
        options: [
          { text: 'A : Fait seul, correctement et habituellement', value: 1 },
          { text: 'B : Fait partiellement, incorrectement ou non habituellement', value: 2 },
          { text: 'C : Ne fait jamais', value: 3 }
        ]
      },
      {
        question: 'Habillage (Mettre et enlever ses vêtements haut, milieu, bas)',
        options: [
          { text: 'A : Fait seul, correctement et habituellement', value: 1 },
          { text: 'B : Fait partiellement, incorrectement ou non habituellement', value: 2 },
          { text: 'C : Ne fait jamais', value: 3 }
        ]
      },
      {
        question: 'Alimentation (Manger les aliments préparés)',
        options: [
          { text: 'A : Fait seul, correctement et habituellement', value: 1 },
          { text: 'B : Fait partiellement, incorrectement ou non habituellement', value: 2 },
          { text: 'C : Ne fait jamais', value: 3 }
        ]
      },
      {
        question: 'Élimination (Assurer l\'hygiène de la miction et de la défécation)',
        options: [
          { text: 'A : Fait seul, correctement et habituellement', value: 1 },
          { text: 'B : Fait partiellement, incorrectement ou non habituellement', value: 2 },
          { text: 'C : Ne fait jamais', value: 3 }
        ]
      },
      {
        question: 'Transferts (Se lever, se coucher, s\'asseoir)',
        options: [
          { text: 'A : Fait seul, correctement et habituellement', value: 1 },
          { text: 'B : Fait partiellement, incorrectement ou non habituellement', value: 2 },
          { text: 'C : Ne fait jamais', value: 3 }
        ]
      },
      {
        question: 'Déplacements intérieurs (Marcher ou se propulser en fauteuil)',
        options: [
          { text: 'A : Fait seul, correctement et habituellement', value: 1 },
          { text: 'B : Fait partiellement, incorrectement ou non habituellement', value: 2 },
          { text: 'C : Ne fait jamais', value: 3 }
        ]
      },
      {
        question: 'Déplacements extérieurs (Au-delà du domicile)',
        options: [
          { text: 'A : Fait seul, correctement et habituellement', value: 1 },
          { text: 'B : Fait partiellement, incorrectement ou non habituellement', value: 2 },
          { text: 'C : Ne fait jamais', value: 3 }
        ]
      },
      {
        question: 'Communication (Utiliser les moyens de communication à distance)',
        options: [
          { text: 'A : Fait seul, correctement et habituellement', value: 1 },
          { text: 'B : Fait partiellement, incorrectement ou non habituellement', value: 2 },
          { text: 'C : Ne fait jamais', value: 3 }
        ]
      }
    ],
    calculer: (total, values) => {
      const coh = values[0];
      const ori = values[1];
      const toi = values[2];
      const hab = values[3];
      const ali = values[4];
      const eli = values[5];
      const tra = values[6];
      const depI = values[7];
      
      const discriminants = [coh, ori, toi, hab, ali, eli, tra, depI];
      const countC = discriminants.filter(v => v === 3).length;
      const countB = discriminants.filter(v => v === 2).length;
      const countA = discriminants.filter(v => v === 1).length;

      let gir = 6;
      let cat = 'normal';
      let desc = '';

      if (coh === 3 && ori === 3 && countC >= 5) {
        gir = 1;
        cat = 'danger';
        desc = 'GIR 1 : Grabataire ou confiné au fauteuil avec altération mentale majeure. Présence permanente d\'aidants requise.';
      } else if ((coh === 3 && ori === 3 && countA >= 2) || (countC >= 5 && coh < 3)) {
        gir = 2;
        cat = 'danger';
        desc = 'GIR 2 : Grabataires avec facultés mentales préservées OU déambulants avec démence sévère/troubles comportementaux majeurs.';
      } else if (countC >= 3 && coh === 1) {
        gir = 3;
        cat = 'warning';
        desc = 'GIR 3 : Autonomie mentale préservée, mais dépendance corporelle quotidienne (toilette, transferts plusieurs fois par jour).';
      } else if (countC >= 2 || countB >= 4 || (coh === 3 && countA >= 4)) {
        gir = 4;
        cat = 'warning';
        desc = 'GIR 4 : Aide indispensable pour se lever, s\'habiller, ou aide corporelle ponctuelle mais fréquente (ex. repas).';
      } else if (countB >= 1 || countC === 1) {
        gir = 5;
        cat = 'normal';
        desc = 'GIR 5 : Personne autonome pour les déplacements intérieurs, mais nécessitant une aide ponctuelle pour la toilette ou le repas.';
      } else {
        gir = 6;
        cat = 'normal';
        desc = 'GIR 6 : Autonomie complète dans les actes de la vie quotidienne.';
      }

      return { total: 'GIR ' + gir, cat, desc, max: null };
    }
  },

  // NUTRITION & PEAU
  {
    id: 'mna_sf',
    nom: 'MNA-SF (Mini Nutritional Assessment - Forme Courte)',
    domaine: 'Nutrition & Peau',
    description: 'Dépistage rapide du statut nutritionnel en 6 questions (HAS 2021). Score maximal : 14.',
    type: 'radio_group',
    groups: [
      {
        question: 'Diminution de la prise alimentaire au cours des 3 derniers mois (appétit, mastication, déglutition)',
        options: [
          { text: '0 : Diminution sévère', value: 0 },
          { text: '1 : Diminution modérée', value: 1 },
          { text: '2 : Pas de diminution', value: 2 }
        ]
      },
      {
        question: 'Perte de poids involontaire au cours des 3 derniers mois',
        options: [
          { text: '0 : Perte > 3 kg', value: 0 },
          { text: '1 : Ne sait pas', value: 1 },
          { text: '2 : Perte entre 1 et 3 kg', value: 2 },
          { text: '3 : Pas de perte de poids', value: 3 }
        ]
      },
      {
        question: 'Motricité (capacité de déplacement)',
        options: [
          { text: '0 : Du lit au fauteuil uniquement', value: 0 },
          { text: '1 : Autonome à l\'intérieur (logement)', value: 1 },
          { text: '2 : Sort du domicile', value: 2 }
        ]
      },
      {
        question: 'Stress psychologique ou maladie aiguë au cours des 3 derniers mois',
        options: [
          { text: '0 : Oui', value: 0 },
          { text: '2 : Non', value: 2 }
        ]
      },
      {
        question: 'Problèmes neuropsychologiques',
        options: [
          { text: '0 : Démence sévère ou dépression grave', value: 0 },
          { text: '1 : Démence légère / troubles cognitifs modérés', value: 1 },
          { text: '2 : Pas de problème neuropsychologique', value: 2 }
        ]
      },
      {
        question: 'Indice de Masse Corporelle (IMC) [OU Circonférence mollet si IMC indisponible]',
        options: [
          { text: '0 : IMC < 19 (ou Mollet < 31 cm)', value: 0 },
          { text: '1 : IMC 19 à < 21', value: 1 },
          { text: '2 : IMC 21 à < 23', value: 2 },
          { text: '3 : IMC ≥ 23 (ou Mollet ≥ 31 cm)', value: 3 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Statut nutritionnel normal.';
      if (total <= 7) { cat = 'danger'; desc = 'Dénutrition avérée. Bilan diététique et prise en charge médicale immédiats.'; }
      else if (total <= 11) { cat = 'warning'; desc = 'Risque de dénutrition. Compléter par le MNA complet.'; }
      return { total, cat, desc, max: 14 };
    }
  },
  {
    id: 'mna_complet',
    nom: 'MNA Complet (Mini Nutritional Assessment - Global)',
    domaine: 'Nutrition & Peau',
    description: 'Évaluation nutritionnelle approfondie en 18 items (MNA-SF + 12 items). Score maximal : 30.',
    type: 'radio_group',
    groups: [
      {
        question: 'A. Diminution de la prise alimentaire (3 mois)',
        options: [
          { text: '0 : Diminution sévère', value: 0 },
          { text: '1 : Diminution modérée', value: 1 },
          { text: '2 : Pas de diminution', value: 2 }
        ]
      },
      {
        question: 'B. Perte de poids involontaire (3 mois)',
        options: [
          { text: '0 : Perte > 3 kg', value: 0 },
          { text: '1 : Ne sait pas', value: 1 },
          { text: '2 : Perte entre 1 et 3 kg', value: 2 },
          { text: '3 : Pas de perte', value: 3 }
        ]
      },
      {
        question: 'C. Motricité',
        options: [
          { text: '0 : Lit/fauteuil', value: 0 },
          { text: '1 : Autonome intérieur', value: 1 },
          { text: '2 : Sort du domicile', value: 2 }
        ]
      },
      {
        question: 'D. Maladie aiguë/stress (3 mois)',
        options: [
          { text: '0 : Oui', value: 0 },
          { text: '2 : Non', value: 2 }
        ]
      },
      {
        question: 'E. Problèmes neuropsychologiques',
        options: [
          { text: '0 : Démence/dépression sévère', value: 0 },
          { text: '1 : Démence légère/MCI', value: 1 },
          { text: '2 : Pas de problème', value: 2 }
        ]
      },
      {
        question: 'F. Indice de Masse Corporelle (IMC)',
        options: [
          { text: '0 : IMC < 19', value: 0 },
          { text: '1 : IMC 19 à < 21', value: 1 },
          { text: '2 : IMC 21 à < 23', value: 2 },
          { text: '3 : IMC ≥ 23', value: 3 }
        ]
      },
      {
        question: 'G. Vit de manière indépendante (à domicile)',
        options: [
          { text: '0 : Non (institution, hôpital)', value: 0 },
          { text: '1 : Oui', value: 1 }
        ]
      },
      {
        question: 'H. Prend plus de 3 médicaments par jour',
        options: [
          { text: '0 : Oui', value: 0 },
          { text: '1 : Non', value: 1 }
        ]
      },
      {
        question: 'I. Escarres ou plaies cutanées',
        options: [
          { text: '0 : Oui', value: 0 },
          { text: '1 : Non', value: 1 }
        ]
      },
      {
        question: 'J. Nombre de repas complets par jour',
        options: [
          { text: '0 : 1 repas', value: 0 },
          { text: '1 : 2 repas', value: 1 },
          { text: '2 : 3 repas', value: 2 }
        ]
      },
      {
        question: 'K. Consommation de protéines (produits laitiers, œufs, viande/poisson)',
        options: [
          { text: '0 : 0 ou 1 oui', value: 0 },
          { text: '0.5 : 2 oui', value: 0.5 },
          { text: '1 : 3 oui', value: 1 }
        ]
      },
      {
        question: 'L. Consomme au moins 2 portions de fruits/légumes par jour',
        options: [
          { text: '0 : Non', value: 0 },
          { text: '1 : Oui', value: 1 }
        ]
      },
      {
        question: 'M. Quantité de liquides consommés par jour (eau, jus, café...)',
        options: [
          { text: '0 : < 3 verres', value: 0 },
          { text: '0.5 : 3 à 5 verres', value: 0.5 },
          { text: '1 : > 5 verres', value: 1 }
        ]
      },
      {
        question: 'N. Façon de s\'alimenter',
        options: [
          { text: '0 : Nécessite une assistance', value: 0 },
          { text: '1 : S\'alimente seul avec difficultés', value: 1 },
          { text: '2 : S\'alimente seul sans difficulté', value: 2 }
        ]
      },
      {
        question: 'O. Auto-évaluation : Se considère-t-il bien nourri ?',
        options: [
          { text: '0 : Malnutrition grave', value: 0 },
          { text: '1 : Ne sait pas ou malnutrition modérée', value: 1 },
          { text: '2 : Pas de problème de nutrition', value: 2 }
        ]
      },
      {
        question: 'P. Auto-évaluation : Comparé aux autres de son âge, estime son état de santé',
        options: [
          { text: '0 : Moins bon', value: 0 },
          { text: '0.5 : Ne sait pas', value: 0.5 },
          { text: '1 : Égal', value: 1 },
          { text: '2 : Meilleur', value: 2 }
        ]
      },
      {
        question: 'Q. Circonférence mi-bras (CMB en cm)',
        options: [
          { text: '0 : CMB < 21 cm', value: 0 },
          { text: '0.5 : CMB 21 à 22 cm', value: 0.5 },
          { text: '1 : CMB > 22 cm', value: 1 }
        ]
      },
      {
        question: 'R. Circonférence du mollet (CM en cm)',
        options: [
          { text: '0 : CM < 31 cm', value: 0 },
          { text: '3 : CM ≥ 31 cm', value: 3 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Statut nutritionnel satisfaisant.';
      if (total < 17) { cat = 'danger'; desc = 'Mauvais état nutritionnel (dénutrition).'; }
      else if (total <= 23.5) { cat = 'warning'; desc = 'Risque de dénutrition.'; }
      return { total, cat, desc, max: 30 };
    }
  },
  {
    id: 'braden',
    nom: 'Échelle de Braden (Risque d\'escarres)',
    domaine: 'Nutrition & Peau',
    description: 'Évalue le risque de développement d\'escarres de décubitus. Score maximal : 23.',
    type: 'radio_group',
    groups: [
      {
        question: 'Perception sensorielle (capacité à réagir à l\'inconfort ou à la douleur)',
        options: [
          { text: '1 : Complètement limitée (ne réagit pas)', value: 1 },
          { text: '2 : Très limitée (réagit seulement à la douleur)', value: 2 },
          { text: '3 : Légèrement limitée (réagit aux commandes verbales)', value: 3 },
          { text: '4 : Non limitée', value: 4 }
        ]
      },
      {
        question: 'Humidité (degré d\'exposition de la peau à l\'humidité)',
        options: [
          { text: '1 : Constante (transpiration, urines...)', value: 1 },
          { text: '2 : Très fréquente', value: 2 },
          { text: '3 : Occasionnelle', value: 3 },
          { text: '4 : Rarement mouillée', value: 4 }
        ]
      },
      {
        question: 'Activité physique',
        options: [
          { text: '1 : Alité (ne quitte pas le lit)', value: 1 },
          { text: '2 : Au fauteuil (ne marche pas)', value: 2 },
          { text: '3 : Marche occasionnellement', value: 3 },
          { text: '4 : Marche fréquemment', value: 4 }
        ]
      },
      {
        question: 'Mobilité (capacité à changer de position)',
        options: [
          { text: '1 : Complètement immobile', value: 1 },
          { text: '2 : Très limitée', value: 2 },
          { text: '3 : Légèrement limitée', value: 3 },
          { text: '4 : Excellente', value: 4 }
        ]
      },
      {
        question: 'Nutrition (habitudes alimentaires)',
        options: [
          { text: '1 : Très pauvre (mange moins d\'un tiers des repas)', value: 1 },
          { text: '2 : Inadéquate (mange la moitié des repas)', value: 2 },
          { text: '3 : Adéquate (mange plus de la moitié)', value: 3 },
          { text: '4 : Excellente', value: 4 }
        ]
      },
      {
        question: 'Friction et cisaillement',
        options: [
          { text: '1 : Problème majeur (glisse fréquemment, nécessite aide)', value: 1 },
          { text: '2 : Problème potentiel (glisse un peu, frotte)', value: 2 },
          { text: '3 : Pas de problème apparent', value: 3 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Pas de risque d\'escarre.';
      if (total <= 9) { cat = 'danger'; desc = 'Risque TRÈS ÉLEVÉ d\'escarre. Protocole de décharge complet.'; }
      else if (total <= 12) { cat = 'danger'; desc = 'Risque ÉLEVÉ d\'escarre.'; }
      else if (total <= 14) { cat = 'warning'; desc = 'Risque MODÉRÉ d\'escarre.'; }
      else if (total <= 18) { cat = 'warning'; desc = 'Risque FAIBLE d\'escarre.'; }
      return { total, cat, desc, max: 23 };
    }
  },
  {
    id: 'norton',
    nom: 'Échelle de Norton (Risque d\'escarres)',
    domaine: 'Nutrition & Peau',
    description: 'Évaluation historique alternative du risque d\'escarres. Score maximal : 20.',
    type: 'radio_group',
    groups: [
      {
        question: 'Condition physique générale',
        options: [
          { text: '4 : Bonne', value: 4 },
          { text: '3 : Moyenne', value: 3 },
          { text: '2 : Mauvaise', value: 2 },
          { text: '1 : Très mauvaise', value: 1 }
        ]
      },
      {
        question: 'État mental',
        options: [
          { text: '4 : Alerte / Lucide', value: 4 },
          { text: '3 : Apathique', value: 3 },
          { text: '2 : Confus', value: 2 },
          { text: '1 : Stuporeux / Inconscient', value: 1 }
        ]
      },
      {
        question: 'Activité',
        options: [
          { text: '4 : Ambulant (marche seul)', value: 4 },
          { text: '3 : Marche avec aide', value: 3 },
          { text: '2 : Assis au fauteuil', value: 2 },
          { text: '1 : Alité', value: 1 }
        ]
      },
      {
        question: 'Mobilité',
        options: [
          { text: '4 : Totale', value: 4 },
          { text: '3 : Diminuée (se tourne seul)', value: 3 },
          { text: '2 : Très limitée (besoin d\'aide)', value: 2 },
          { text: '1 : Immobile', value: 1 }
        ]
      },
      {
        question: 'Incontinence',
        options: [
          { text: '4 : Aucune', value: 4 },
          { text: '3 : Occasionnelle', value: 3 },
          { text: '2 : Urinaire habituelle (ou sonde)', value: 2 },
          { text: '1 : Double (fécale et urinaire)', value: 1 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Risque très faible ou nul.';
      if (total <= 12) { cat = 'danger'; desc = 'Risque ÉLEVÉ d\'escarres. Mesures de prévention urgentes.'; }
      else if (total <= 14) { cat = 'warning'; desc = 'Risque MODÉRÉ d\'escarres.'; }
      return { total, cat, desc, max: 20 };
    }
  },

  // EQUILIBRE & MARCHE
  {
    id: 'tinetti',
    nom: 'Échelle de Tinetti (POMA - Équilibre seul)',
    domaine: 'Équilibre & Marche',
    description: 'Évalue l\'équilibre statique et dynamique chez la personne âgée. Score maximal : 16.',
    type: 'radio_group',
    groups: [
      {
        question: 'Équilibre assis',
        options: [
          { text: '0 : Glisse sur sa chaise ou penche', value: 0 },
          { text: '1 : Stable et sûr', value: 1 }
        ]
      },
      {
        question: 'Se lever',
        options: [
          { text: '0 : Impossible sans aide', value: 0 },
          { text: '1 : Possible en s\'aidant des bras', value: 1 },
          { text: '2 : Possible sans s\'aider des bras', value: 2 }
        ]
      },
      {
        question: 'Tentative de se lever',
        options: [
          { text: '0 : Incapable sans aide', value: 0 },
          { text: '1 : Réussit en plusieurs essais', value: 1 },
          { text: '2 : Réussit du premier coup', value: 2 }
        ]
      },
      {
        question: 'Équilibre immédiatement debout (5 premières secondes)',
        options: [
          { text: '0 : Instable (penche, oscille, utilise appui)', value: 0 },
          { text: '1 : Stable mais utilise canne/déambulateur ou écarte les pieds', value: 1 },
          { text: '2 : Stable sans aucun appui', value: 2 }
        ]
      },
      {
        question: 'Équilibre debout prolongé',
        options: [
          { text: '0 : Instable', value: 0 },
          { text: '1 : Stable mais pieds écartés', value: 1 },
          { text: '2 : Stable, pieds joints', value: 2 }
        ]
      },
      {
        question: 'Test de la poussée (sternum 3 fois)',
        options: [
          { text: '0 : Commence à tomber', value: 0 },
          { text: '1 : Oscille, se rattrape seul', value: 1 },
          { text: '2 : Stable, encaisse sans osciller', value: 2 }
        ]
      },
      {
        question: 'Yeux fermés debout',
        options: [
          { text: '0 : Instable', value: 0 },
          { text: '1 : Stable', value: 1 }
        ]
      },
      {
        question: 'Demi-tour 360 degrés',
        options: [
          { text: '0 : Pas continu, pas sûr', value: 0 },
          { text: '1 : Pas continus mais instable', value: 1 },
          { text: '2 : Stable et fluide', value: 2 }
        ]
      },
      {
        question: 'S\'asseoir',
        options: [
          { text: '0 : S\'affale, estime mal la distance', value: 0 },
          { text: '1 : Utilise ses bras pour s\'asseoir', value: 1 },
          { text: '2 : Contrôlé et fluide', value: 2 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Risque de chute faible (équilibre préservé).';
      if (total < 11) { cat = 'danger'; desc = 'Risque de chute TRÈS ÉLEVÉ (équilibre fortement altéré). Kinésithérapie motrice urgente.'; }
      else if (total <= 14) { cat = 'warning'; desc = 'Risque de chute modéré (équilibre précaire).'; }
      return { total, cat, desc, max: 16 };
    }
  },
  {
    id: 'bbs',
    nom: 'Berg Balance Scale (BBS)',
    domaine: 'Équilibre & Marche',
    description: 'Évaluation fonctionnelle complète de l\'équilibre en 14 tâches. Score maximal : 56.',
    type: 'radio_group',
    groups: [
      { question: '1. Assis vers debout', options: [{text:'0: aide max',value:0},{text:'1: aide min',value:1},{text:'2: besoin d\'appui',value:2},{text:'3: indép. mais bras',value:3},{text:'4: indép. sans bras',value:4}] },
      { question: '2. Debout sans appui (2 min)', options: [{text:'0: impossible',value:0},{text:'1: besoin de surveillance',value:1},{text:'2: max 30s',value:2},{text:'3: indép. 2 min bras',value:3},{text:'4: indép. 2 min sans bras',value:4}] },
      { question: '3. Assis sans appui (dos libre, pieds sol) (2 min)', options: [{text:'0: impossible',value:0},{text:'1: max 10s',value:1},{text:'2: max 30s',value:2},{text:'3: indép. 2 min bras',value:3},{text:'4: indép. 2 min sans bras',value:4}] },
      { question: '4. Debout vers assis', options: [{text:'0: besoin d\'aide',value:0},{text:'1: contrôle min',value:1},{text:'2: utilise arriere cuisses',value:2},{text:'3: indép. mais bras',value:3},{text:'4: indép. sans bras',value:4}] },
      { question: '5. Transferts (chaise à lit et inversement)', options: [{text:'0: besoin d\'aide',value:0},{text:'1: besoin surveillance',value:1},{text:'2: besoin appui fort',value:2},{text:'3: indép. mais lent',value:3},{text:'4: indép. rapide sans bras',value:4}] },
      { question: '6. Debout yeux fermés (10s)', options: [{text:'0: commence à tomber',value:0},{text:'1: max 3s',value:1},{text:'2: max 10s avec osc.',value:2},{text:'3: stable 10s',value:3},{text:'4: stable et sûr 10s',value:4}] },
      { question: '7. Debout pieds joints sans appui (1 min)', options: [{text:'0: besoin d\'aide',value:0},{text:'1: max 15s',value:1},{text:'2: max 30s',value:2},{text:'3: stable 1 min bras',value:3},{text:'4: stable pieds joints 1 min',value:4}] },
      { question: '8. Se pencher en avant debout (bras tendus à 90°)', options: [{text:'0: perte équilibre',value:0},{text:'1: portée < 5 cm',value:1},{text:'2: portée 5 à 12 cm',value:2},{text:'3: portée 12 à 25 cm',value:3},{text:'4: portée > 25 cm',value:4}] },
      { question: '9. Ramasser un objet au sol depuis la position debout', options: [{text:'0: impossible',value:0},{text:'1: besoin de soutien',value:1},{text:'2: portée < 5 cm du sol',value:2},{text:'3: indép. mais lent/précaire',value:3},{text:'4: indép. et facile',value:4}] },
      { question: '10. Se tourner pour regarder derrière (gauche et droite)', options: [{text:'0: besoin de soutien',value:0},{text:'1: besoin de surveillance',value:1},{text:'2: tourne un seul côté',value:2},{text:'3: tourne des deux côtés',value:3},{text:'4: tourne complètement tête/épaules',value:4}] },
      { question: '11. Faire un tour complet sur soi-même (360°)', options: [{text:'0: besoin d\'aide',value:0},{text:'1: besoin de surveillance',value:1},{text:'2: seulement un côté',value:2},{text:'3: indép. mais lent (> 4s)',value:3},{text:'4: indép. rapide (< 4s)',value:4}] },
      { question: '12. Placer le pied sur un marchepied alternativement (4 pas)', options: [{text:'0: besoin d\'aide',value:0},{text:'1: max 2 pas',value:1},{text:'2: max 4 pas avec surveillance',value:2},{text:'3: indép. > 20s',value:3},{text:'4: indép. < 20s',value:4}] },
      { question: '13. Debout un pied devant l\'autre (tandem)', options: [{text:'0: perd équilibre',value:0},{text:'1: marche précaire',value:1},{text:'2: pas de tandem complet',value:2},{text:'3: tandem 30s',value:3},{text:'4: tandem parfait 30s',value:4}] },
      { question: '14. Debout sur un pied (unipodal)', options: [{text:'0: impossible',value:0},{text:'1: max 3s',value:1},{text:'2: max 10s avec appui',value:2},{text:'3: unipodal 10s',value:3},{text:'4: unipodal > 10s',value:4}] }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Équilibre fonctionnel conservé. Risque de chute faible.';
      if (total <= 20) { cat = 'danger'; desc = 'Altération sévère de l\'équilibre. Risque de chute TRÈS ÉLEVÉ (proche de 100%).'; }
      else if (total <= 40) { cat = 'warning'; desc = 'Altération modérée. Risque de chute élevé.'; }
      else if (total <= 45) { cat = 'warning'; desc = 'Risque de chute faible à modéré.'; }
      return { total, cat, desc, max: 56 };
    }
  },

  // DOULEUR
  {
    id: 'algoplus',
    nom: 'ALGOPLUS (Douleur aiguë chez le sujet âgé)',
    domaine: 'Évaluation de la Douleur',
    description: 'Évaluation de la douleur aiguë chez le patient âgé non communicant (Alzheimer). Score maximal : 5.',
    type: 'checklist',
    items: [
      { text: 'Visage : Grimace, crispation, fermeture des yeux, froncement des sourcils (+1 pt)', points: 1 },
      { text: 'Regard : Regard vide, fixe, fuyant, inquiet ou fermé (+1 pt)', points: 1 },
      { text: 'Plaintes / Vocalisations : Plaintes, cris, gémissements, soupirs, répétition de mots (+1 pt)', points: 1 },
      { text: 'Corps : Posture de protection, rigidité physique, agitation, refus de mobilisation (+1 pt)', points: 1 },
      { text: 'Comportement : Changement d\'attitude, agressivité, opposition aux soins (+1 pt)', points: 1 }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Douleur peu probable.';
      if (total >= 2) { cat = 'danger'; desc = 'DOULEUR PRÉSENTE. Instaurer ou majorer un traitement antalgique.'; }
      return { total, cat, desc, max: 5 };
    }
  },
  {
    id: 'doloplus',
    nom: 'DOLOPLUS 2 (Échelle de douleur comportementale)',
    domaine: 'Évaluation de la Douleur',
    description: 'Évalue la douleur chronique chez le sujet âgé non communicant. Score maximal : 30.',
    type: 'radio_group',
    groups: [
      { question: 'Plaintes somatiques (verbales, cris, gémissements)', options: [{text:'0: Absent',value:0},{text:'1: Faible',value:1},{text:'2: Modéré',value:2},{text:'3: Sévère',value:3}] },
      { question: 'Positions antalgiques protectrices au repos', options: [{text:'0: Absent',value:0},{text:'1: Faible',value:1},{text:'2: Modéré',value:2},{text:'3: Sévère',value:3}] },
      { question: 'Protections de zones douloureuses lors des mouvements', options: [{text:'0: Absent',value:0},{text:'1: Faible',value:1},{text:'2: Modéré',value:2},{text:'3: Sévère',value:3}] },
      { question: 'Expression du visage (regard, crispation)', options: [{text:'0: Absent',value:0},{text:'1: Faible',value:1},{text:'2: Modéré',value:2},{text:'3: Sévère',value:3}] },
      { question: 'Réaction lors de la toilette/soins (Cris, opposition)', options: [{text:'0: Absent',value:0},{text:'1: Faible',value:1},{text:'2: Modéré',value:2},{text:'3: Sévère',value:3}] },
      { question: 'Mobilité (déplacements, transferts)', options: [{text:'0: Normal',value:0},{text:'1: Légère limitation',value:1},{text:'2: Forte limitation',value:2},{text:'3: Impossible',value:3}] },
      { question: 'Communication (relationnelle, repli sur soi)', options: [{text:'0: Normal',value:0},{text:'1: Légère altération',value:1},{text:'2: Forte altération',value:2},{text:'3: Aucun contact',value:3}] },
      { question: 'Vie sociale (participation aux activités)', options: [{text:'0: Normal',value:0},{text:'1: Légère baisse',value:1},{text:'2: Forte baisse',value:2},{text:'3: Refus complet',value:3}] },
      { question: 'Troubles du comportement (agressivité, agitation)', options: [{text:'0: Absent',value:0},{text:'1: Faible',value:1},{text:'2: Modéré',value:2},{text:'3: Sévère',value:3}] },
      { question: 'Sommeil (insomnie, réveils provoqués par douleur)', options: [{text:'0: Sommeil normal',value:0},{text:'1: Réveils occasionnels',value:1},{text:'2: Sommeil très perturbé',value:2},{text:'3: Insomnie quasi-totale',value:3}] }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Douleur peu probable.';
      if (total >= 5) { cat = 'danger'; desc = 'DOULEUR PRÉSENTE. Mise en place obligatoire d\'un plan antalgique individualisé.'; }
      return { total, cat, desc, max: 30 };
    }
  },
  {
    id: 'ecpa',
    nom: 'ECPA (Échelle de Douleur chez le Patient Âgée)',
    domaine: 'Évaluation de la Douleur',
    description: 'Évaluation comportementale de la douleur chez le sujet âgé dément. Score maximal : 32.',
    type: 'radio_group',
    groups: [
      { question: '1. Expression du visage', options: [{text:'0: Détendu',value:0},{text:'1: Inexpressif/figé',value:1},{text:'2: Crispation passagère',value:2},{text:'3: Crispation permanente',value:3},{text:'4: Expression de panique',value:4}] },
      { question: '2. Position spontanée au repos', options: [{text:'0: Naturelle',value:0},{text:'1: Recherche de confort',value:1},{text:'2: Position figée inhabituelle',value:2},{text:'3: Position antalgique',value:3},{text:'4: Recroquevillement total',value:4}] },
      { question: '3. Mouvements du corps (au repos)', options: [{text:'0: Calme',value:0},{text:'1: Légère agitation',value:1},{text:'2: Mouvements stéréotypés',value:2},{text:'3: Agitation continuelle',value:3},{text:'4: Immobilité absolue protectrice',value:4}] },
      { question: '4. Relation avec l\'entourage', options: [{text:'0: Relation inchangée',value:0},{text:'1: Recherche de réconfort',value:1},{text:'2: Désintérêt',value:2},{text:'3: Refus de relation',value:3},{text:'4: Mutisme absolu',value:4}] },
      { question: '5. Mobilisation : Expression du visage lors du mouvement', options: [{text:'0: Détendu',value:0},{text:'1: Regard anxieux',value:1},{text:'2: Grimace fugace',value:2},{text:'3: Grimace permanente',value:3},{text:'4: Visage terrorisé',value:4}] },
      { question: '6. Mobilisation : Résistance à la mobilisation', options: [{text:'0: Souple',value:0},{text:'1: Raideur craintive',value:1},{text:'2: Opposition modérée',value:2},{text:'3: Opposition forte',value:3},{text:'4: Refus complet et agressif',value:4}] },
      { question: '7. Mobilisation : Cris/vocalisations lors du mouvement', options: [{text:'0: Aucun',value:0},{text:'1: Gémissement fugace',value:1},{text:'2: Gémissement répété',value:2},{text:'3: Cri franc',value:3},{text:'4: Cri répété et hurlement',value:4}] },
      { question: '8. Mobilisation : Réactions de défense lors des soins', options: [{text:'0: Aucune',value:0},{text:'1: Retrait d\'une zone',value:1},{text:'2: Protection manuelle',value:2},{text:'3: Agression physique',value:3},{text:'4: Refus d\'accès complet',value:4}] }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Douleur peu probable.';
      if (total >= 5) { cat = 'danger'; desc = 'DOULEUR ACTIVE. Évaluer les causes et prescrire un traitement de palier adapté (ex: paracétamol ou morphine).'; }
      return { total, cat, desc, max: 32 };
    }
  },
  {
    id: 'eva_en',
    nom: 'EVA / EN (Échelle Numérique / Échelle Visuelle Analogique)',
    domaine: 'Évaluation de la Douleur',
    description: 'Auto-évaluation de l\'intensité de la douleur de 0 (aucune) à 10 (maximale).',
    type: 'custom',
    render: (div) => {
      div.innerHTML = `
        <div class="calc-form">
          <label class="calc-group-title">Saisir l\'intensité de la douleur (0 à 10)</label>
          <div style="display:flex; align-items:center; gap:16px; margin: 12px 0;">
            <input type="range" id="eva_slider" min="0" max="10" step="1" value="0" style="flex:1; height:8px; border-radius:4px; accent-color:var(--accent);">
            <span id="eva_val" style="font-size:2rem; font-weight:800; color:var(--text1); min-width:40px; text-align:center;">0</span>
          </div>
        </div>
      `;
      const slider = document.getElementById('eva_slider');
      const valText = document.getElementById('eva_val');
      
      const updateResult = (val) => {
        valText.textContent = val;
        let cat = 'normal';
        let desc = 'Douleur absente.';
        if (val >= 7) { cat = 'danger'; desc = 'Douleur SÉVÈRE. Recours immédiat aux antalgiques de palier 3 (morphiniques) si approprié.'; }
        else if (val >= 4) { cat = 'warning'; desc = 'Douleur MODÉRÉE. Palier 2 ou co-antalgiques.'; }
        else if (val >= 1) { cat = 'warning'; desc = 'Douleur LÉGÈRE. Palier 1 (paracétamol).'; }
        
        const rDiv = document.getElementById('calc-result');
        if (rDiv) {
          rDiv.innerHTML = `
            <div class="calc-res-box ${cat}">
              <div class="calc-res-title">Douleur : ${val} / 10</div>
              <div class="calc-res-desc">${desc}</div>
            </div>
          `;
        }
      };

      slider.addEventListener('input', (e) => {
        updateResult(parseInt(e.target.value));
      });
      updateResult(0);
    }
  },

  // CARDIOVASCULAIRE
  {
    id: 'cha2ds2vasc',
    nom: 'Score CHA₂DS₂-VASc',
    domaine: 'Cardiovasculaire',
    description: 'Évalue le risque thromboembolique en cas de Fibrillation Atriale (FA). Score maximal : 9.',
    type: 'checklist',
    items: [
      { text: 'Insuffisance cardiaque congestive / FEVG altérée (+1 pt)', points: 1 },
      { text: 'Hypertension artérielle documentée (+1 pt)', points: 1 },
      { text: 'Âge ≥ 75 ans (+2 pts)', points: 2 },
      { text: 'Diabète (+1 pt)', points: 1 },
      { text: 'Antécédent d\'AVC, AIT ou embolie (+2 pts)', points: 2 },
      { text: 'Maladie vasculaire (Infarctus, AOMI, plaque aortique) (+1 pt)', points: 1 },
      { text: 'Âge compris entre 65 et 74 ans (+1 pt)', points: 1 },
      { text: 'Sexe féminin (+1 pt)', points: 1 }
    ],
    calculer: (total, checkedFlags) => {
      // checkedFlags[7] = sexe féminin (ordre des items ci-dessus)
      const isFemale = Array.isArray(checkedFlags) ? !!checkedFlags[7] : false;
      let cat = 'normal';
      let desc = 'Pas d\'anticoagulation nécessaire en FA non valvulaire à bas risque (sauf indication particulière).';
      const threshold = isFemale ? 3 : 2;
      const borderline = isFemale ? 2 : 1;
      if (total >= threshold) {
        cat = 'danger';
        desc = `Anticoagulation recommandée (AOD ou AVK) : CHA₂DS₂-VASc ≥ ${threshold} (${isFemale ? 'femme' : 'homme'}).`;
      } else if (total === borderline) {
        cat = 'warning';
        desc = `Anticoagulation à discuter au cas par cas : score ${borderline} (${isFemale ? 'femme' : 'homme'}).`;
      } else if (isFemale && total === 1) {
        cat = 'normal';
        desc = 'Risque bas chez la femme (score 1 = sexe seul) — anticoagulation généralement non indiquée.';
      }
      return { total, cat, desc, max: 9 };
    }
  },
  {
    id: 'hasbled',
    nom: 'Score HAS-BLED',
    domaine: 'Cardiovasculaire',
    description: 'Évalue le risque hémorragique sous anticoagulant oral (FA). Score maximal : 9.',
    type: 'checklist',
    items: [
      { text: 'Hypertension artérielle non contrôlée (PAS > 160 mmHg) (+1 pt)', points: 1 },
      { text: 'Fonction rénale altérée (Dialyse, Cr > 200 µmol/l) (+1 pt)', points: 1 },
      { text: 'Fonction hépatique altérée (Cirrhose, Bilirubine > 2xN) (+1 pt)', points: 1 },
      { text: 'Antécédent d\'AVC (+1 pt)', points: 1 },
      { text: 'Antécédent d\'Hémorragie ou prédisposition (+1 pt)', points: 1 },
      { text: 'INR instable / labile (si sous AVK, TRT dans la cible < 60%) (+1 pt)', points: 1 },
      { text: 'Âge > 65 ans (+1 pt)', points: 1 },
      { text: 'Médicaments favorisant les saignements (AINS, Antiagrégants) (+1 pt)', points: 1 },
      { text: 'Consommation d\'alcool excessive (+1 pt)', points: 1 }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Risque hémorragique faible ou modéré.';
      if (total >= 3) { cat = 'danger'; desc = 'Risque hémorragique ÉLEVÉ. Surveillance renforcée. Corriger les facteurs modifiables (HTA, alcool, AINS).'; }
      return { total, cat, desc, max: 9 };
    }
  },
  {
    id: 'grace',
    nom: 'Score de GRACE (SCA)',
    domaine: 'Cardiovasculaire',
    description: 'Évalue le risque de mortalité à 6 mois post-Syndrome Coronarien Aigu (SCA).',
    type: 'custom',
    render: (div) => {
      div.innerHTML = `
        <div class="calc-form">
          <div class="calc-glass-box">
            <div class="calc-group-title">Saisir les paramètres cliniques</div>
            <div style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">
              <label>Âge : <input type="number" id="grace_age" value="70" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>Fréquence cardiaque (FC) : <input type="number" id="grace_fc" value="80" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>PA Systolique (PAS) : <input type="number" id="grace_pas" value="130" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>Créatininémie (µmol/L) : <input type="number" id="grace_creat" value="100" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
            </div>
          </div>
          <div class="calc-glass-box">
            <div class="calc-group-title">Autres facteurs</div>
            <label class="check-container"><input type="checkbox" id="grace_st" class="calc-input"><span class="checkmark"></span>Déviation du segment ST</label>
            <label class="check-container"><input type="checkbox" id="grace_trop" class="calc-input"><span class="checkmark"></span>Troponine / Biomarqueurs élevés</label>
            <label class="check-container"><input type="checkbox" id="grace_arr" class="calc-input"><span class="checkmark"></span>Arrêt cardiaque à l\'admission</label>
          </div>
          <div class="calc-glass-box">
            <div class="calc-group-title">Classification de Killip</div>
            <label class="radio-container"><input type="radio" name="grace_k" value="1" class="calc-input"><span class="radiomark"></span>Classe I (Pas de râles)</label>
            <label class="radio-container"><input type="radio" name="grace_k" value="2" class="calc-input"><span class="radiomark"></span>Classe II (Râles < 50% ou B3)</label>
            <label class="radio-container"><input type="radio" name="grace_k" value="3" class="calc-input"><span class="radiomark"></span>Classe III (Râles > 50% ou OAP)</label>
            <label class="radio-container"><input type="radio" name="grace_k" value="4" class="calc-input"><span class="radiomark"></span>Classe IV (Choc cardiogénique)</label>
          </div>
        </div>
      `;

      const calcGrace = () => {
        const age = parseInt(document.getElementById('grace_age').value || 0);
        const fc = parseInt(document.getElementById('grace_fc').value || 0);
        const pas = parseInt(document.getElementById('grace_pas').value || 0);
        const creat = parseInt(document.getElementById('grace_creat').value || 0);
        const devST = document.getElementById('grace_st').checked;
        const trop = document.getElementById('grace_trop').checked;
        const arrest = document.getElementById('grace_arr').checked;
        const killip = parseInt(document.querySelector('input[name="grace_k"]:checked').value);

        let score = 0;
        
        // Age points (approximate)
        if (age < 30) score += 0;
        else if (age < 40) score += 8;
        else if (age < 50) score += 25;
        else if (age < 60) score += 41;
        else if (age < 70) score += 58;
        else if (age < 80) score += 75;
        else if (age < 90) score += 91;
        else score += 100;

        // FC points
        if (fc < 50) score += 0;
        else if (fc < 70) score += 3;
        else if (fc < 90) score += 9;
        else if (fc < 110) score += 15;
        else if (fc < 150) score += 24;
        else if (fc < 200) score += 38;
        else score += 46;

        // PAS points
        if (pas < 80) score += 58;
        else if (pas < 100) score += 53;
        else if (pas < 120) score += 43;
        else if (pas < 140) score += 34;
        else if (pas < 160) score += 24;
        else if (pas < 200) score += 10;
        else score += 0;

        // Creatinine points
        if (creat < 35) score += 1;
        else if (creat < 71) score += 4;
        else if (creat < 106) score += 7;
        else if (creat < 141) score += 10;
        else if (creat < 177) score += 13;
        else if (creat < 354) score += 21;
        else score += 28;

        // Other elements
        if (devST) score += 28;
        if (trop) score += 15;
        if (arrest) score += 39;
        
        // Killip class points
        if (killip === 2) score += 20;
        else if (killip === 3) score += 39;
        else if (killip === 4) score += 59;

        let cat = 'normal';
        let desc = 'Risque de mortalité hospitalière FAIBLE (< 1%).';
        if (score > 140) { cat = 'danger'; desc = 'Risque de mortalité hospitalière ÉLEVÉ (> 3%). Coronarographie invasive précoce recommandée.'; }
        else if (score > 108) { cat = 'warning'; desc = 'Risque de mortalité hospitalière INTERMÉDIAIRE (1 à 3%).'; }
        
        const rDiv = document.getElementById('calc-result');
        if (rDiv) {
          rDiv.innerHTML = `
            <div class="calc-res-box ${cat}">
              <div class="calc-res-title">Score GRACE : ${score}</div>
              <div class="calc-res-desc">${desc}</div>
            </div>
          `;
        }
      };

      div.querySelectorAll('.calc-input').forEach(input => {
        input.addEventListener('change', calcGrace);
        if (input.type === 'number') input.addEventListener('input', calcGrace);
      });
      calcGrace();
    }
  },
  {
    id: 'killip',
    nom: 'Classification de Killip (IDM / IC)',
    domaine: 'Cardiovasculaire',
    description: 'Classe l\'insuffisance cardiaque aiguë post-infarctus du myocarde.',
    type: 'radio_group',
    groups: [
      {
        question: 'Signes cliniques d\'insuffisance cardiaque',
        options: [
          { text: 'Classe I : Aucun signe d\'insuffisance cardiaque gauche (râles ou B3 absents).', value: 1 },
          { text: 'Classe II : Insuffisance cardiaque modérée (râles crépitants aux bases < 50% des champs pulmonaires, ou bruit de galop B3).', value: 2 },
          { text: 'Classe III : OAP franc (râles crépitants > 50% des champs pulmonaires).', value: 3 },
          { text: 'Classe IV : Choc cardiogénique (hypotension, vasoconstriction périphérique, oligurie, confusion).', value: 4 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = '';
      if (total === 1) { cat = 'normal'; desc = 'Mortalité hospitalière faible (~6%).'; }
      else if (total === 2) { cat = 'warning'; desc = 'Mortalité hospitalière modérée (~17%).'; }
      else if (total === 3) { cat = 'danger'; desc = 'Mortalité hospitalière élevée (~30%). OAP clinique.'; }
      else if (total === 4) { cat = 'danger'; desc = 'Mortalité hospitalière très élevée (~60%). Choc cardiogénique (Urgence réanimatoire).'; }
      return { total: 'Classe ' + total, cat, desc, max: null };
    }
  },
  {
    id: 'nyha',
    nom: 'NYHA (Insuffisance cardiaque chronique)',
    domaine: 'Cardiovasculaire',
    description: 'Classification fonctionnelle de la sévérité de l\'insuffisance cardiaque chronique.',
    type: 'radio_group',
    groups: [
      {
        question: 'Limitation de l\'activité physique',
        options: [
          { text: 'Classe I : Pas de limitation de l\'activité physique. L\'activité physique ordinaire n\'entraîne pas de fatigue anormale, de dyspnée ou de palpitations.', value: 1 },
          { text: 'Classe II : Limitation légère de l\'activité physique. Confortable au repos, mais l\'activité physique ordinaire entraîne de la fatigue, des palpitations ou de la dyspnée.', value: 2 },
          { text: 'Classe III : Limitation marquée de l\'activité physique. Confortable au repos, mais une activité physique moins intense que l\'activité ordinaire entraîne de la fatigue, des palpitations ou de la dyspnée.', value: 3 },
          { text: 'Classe IV : Incapacité de mener une activité physique sans gêne. Les symptômes d\'insuffisance cardiaque peuvent être présents au repos.', value: 4 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Symptomatologie minime.';
      if (total >= 3) { cat = 'danger'; desc = 'Insuffisance cardiaque symptomatique pour des efforts minimes ou au repos.'; }
      else if (total === 2) { cat = 'warning'; desc = 'Dyspnée d\'effort modérée.'; }
      return { total: 'Classe ' + total, cat, desc, max: null };
    }
  },

  // PNEUMOLOGIE
  {
    id: 'curb65',
    nom: 'CURB-65 (Gravité de la pneumonie)',
    domaine: 'Pneumologie',
    description: 'Stratification du risque de mortalité dans les pneumonies communautaires. Score maximal : 5.',
    type: 'checklist',
    items: [
      { text: 'Confusion d\'apparition récente (+1 pt)', points: 1 },
      { text: 'Urée sanguine > 7 mmol/L (+1 pt)', points: 1 },
      { text: 'Fréquence respiratoire ≥ 30/min (+1 pt)', points: 1 },
      { text: 'Pression artérielle : Systolique < 90 mmHg ou Diastolique ≤ 60 mmHg (+1 pt)', points: 1 },
      { text: 'Âge ≥ 65 ans (+1 pt)', points: 1 }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Mortalité faible (~1.5%). Traitement ambulatoire (domicile) envisageable.';
      if (total >= 3) { cat = 'danger'; desc = 'Mortalité élevée (15 à 40%). Hospitalisation obligatoire, évaluer critères de soins intensifs.'; }
      else if (total === 2) { cat = 'warning'; desc = 'Mortalité intermédiaire (~9%). Hospitalisation courte à envisager.'; }
      return { total, cat, desc, max: 5 };
    }
  },
  {
    id: 'psi_port',
    nom: 'PSI / PORT (Pneumonia Severity Index)',
    domaine: 'Pneumologie',
    description: 'Score pronostique de gravité des pneumopathies aiguës communautaires.',
    type: 'custom',
    render: (div) => {
      div.innerHTML = `
        <div class="calc-form">
          <div class="calc-glass-box">
            <div class="calc-group-title">Données Démographiques</div>
            <label class="radio-container"><input type="radio" name="psi_sexe" value="H" class="calc-input"><span class="radiomark"></span>Homme</label>
            <label class="radio-container"><input type="radio" name="psi_sexe" value="F" class="calc-input"><span class="radiomark"></span>Femme</label>
            <label>Âge : <input type="number" id="psi_age" value="75" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
            <label class="check-container"><input type="checkbox" id="psi_inst" class="calc-input"><span class="checkmark"></span>Vit en institution (EHPAD)</label>
          </div>
          <div class="calc-glass-box">
            <div class="calc-group-title">Comorbidités (+ points)</div>
            <label class="check-container"><input type="checkbox" id="psi_neo" class="calc-input"><span class="checkmark"></span>Néoplasie active (+30)</label>
            <label class="check-container"><input type="checkbox" id="psi_foie" class="calc-input"><span class="checkmark"></span>Hépatopathie chronique (+20)</label>
            <label class="check-container"><input type="checkbox" id="psi_ic" class="calc-input"><span class="checkmark"></span>Insuffisance cardiaque (+10)</label>
            <label class="check-container"><input type="checkbox" id="psi_avc" class="calc-input"><span class="checkmark"></span>Maladie cérébrovasculaire / AVC (+10)</label>
            <label class="check-container"><input type="checkbox" id="psi_rein" class="calc-input"><span class="checkmark"></span>Insuffisance rénale chronique (+10)</label>
          </div>
          <div class="calc-glass-box">
            <div class="calc-group-title">Examen Clinique (+ points)</div>
            <label class="check-container"><input type="checkbox" id="psi_conf" class="calc-input"><span class="checkmark"></span>Confusion / Altération conscience (+20)</label>
            <label class="check-container"><input type="checkbox" id="psi_fr" class="calc-input"><span class="checkmark"></span>Fréquence respiratoire ≥ 30/min (+20)</label>
            <label class="check-container"><input type="checkbox" id="psi_pas" class="calc-input"><span class="checkmark"></span>PA Systolique < 90 mmHg (+15)</label>
            <label class="check-container"><input type="checkbox" id="psi_temp" class="calc-input"><span class="checkmark"></span>Température < 35°C ou ≥ 40°C (+15)</label>
            <label class="check-container"><input type="checkbox" id="psi_fc" class="calc-input"><span class="checkmark"></span>Fréquence cardiaque ≥ 125/min (+10)</label>
          </div>
        </div>
      `;

      const calcPsi = () => {
        const sexe = document.querySelector('input[name="psi_sexe"]:checked').value;
        const age = parseInt(document.getElementById('psi_age').value || 0);
        const inst = document.getElementById('psi_inst').checked;
        const neo = document.getElementById('psi_neo').checked;
        const foie = document.getElementById('psi_foie').checked;
        const ic = document.getElementById('psi_ic').checked;
        const avc = document.getElementById('psi_avc').checked;
        const rein = document.getElementById('psi_rein').checked;
        const conf = document.getElementById('psi_conf').checked;
        const fr = document.getElementById('psi_fr').checked;
        const pas = document.getElementById('psi_pas').checked;
        const temp = document.getElementById('psi_temp').checked;
        const fc = document.getElementById('psi_fc').checked;

        let score = age;
        if (sexe === 'F') score -= 10;
        if (inst) score += 10;
        if (neo) score += 30;
        if (foie) score += 20;
        if (ic) score += 10;
        if (avc) score += 10;
        if (rein) score += 10;
        if (conf) score += 20;
        if (fr) score += 20;
        if (pas) score += 15;
        if (temp) score += 15;
        if (fc) score += 10;

        let classe = 'I';
        let cat = 'normal';
        let desc = 'Classe I (Mortalité < 0.5%). Traitement ambulatoire.';
        
        if (score > 130) { classe = 'V'; cat = 'danger'; desc = 'Classe V (Mortalité 27%). Hospitalisation urgente en Soins Intensifs.'; }
        else if (score > 90) { classe = 'IV'; cat = 'danger'; desc = 'Classe IV (Mortalité 9%). Hospitalisation conventionnelle obligatoire.'; }
        else if (score > 70) { classe = 'III'; cat = 'warning'; desc = 'Classe III (Mortalité 2.8%). Hospitalisation courte (UHTCD) ou surveillance.'; }
        else if (score > 0) { classe = 'II'; cat = 'normal'; desc = 'Classe II (Mortalité 0.6%). Traitement ambulatoire sûr.'; }

        const rDiv = document.getElementById('calc-result');
        if (rDiv) {
          rDiv.innerHTML = `
            <div class="calc-res-box ${cat}">
              <div class="calc-res-title">Classe PSI : ${classe} (Score : ${score})</div>
              <div class="calc-res-desc">${desc}</div>
            </div>
          `;
        }
      };

      div.querySelectorAll('.calc-input').forEach(input => {
        input.addEventListener('change', calcPsi);
        if (input.type === 'number') input.addEventListener('input', calcPsi);
      });
      calcPsi();
    }
  },
  {
    id: 'wells_ep',
    nom: 'Score de Wells (Embolie Pulmonaire)',
    domaine: 'Pneumologie',
    description: 'Probabilité clinique d\'embolie pulmonaire (EP) avant imagerie. Score maximal : 12.5.',
    type: 'checklist',
    items: [
      { text: 'Signes cliniques de thrombose veineuse profonde (TVP) (+3 pts)', points: 3 },
      { text: 'Diagnostic alternatif moins probable que l\'EP (+3 pts)', points: 3 },
      { text: 'Fréquence cardiaque > 100/min (+1.5 pt)', points: 1.5 },
      { text: 'Immobilisation ≥ 3 jours ou chirurgie < 4 semaines (+1.5 pt)', points: 1.5 },
      { text: 'Antécédent personnel de TVP ou d\'EP (+1.5 pt)', points: 1.5 },
      { text: 'Hémoptysie (+1 pt)', points: 1 },
      { text: 'Cancer actif ou traité < 6 mois (+1 pt)', points: 1 }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Probabilité clinique faible. D-Dimères à doser.';
      if (total > 6) { cat = 'danger'; desc = 'Probabilité clinique ÉLEVÉE. Angioscanner thoracique direct (D-Dimères inutiles).'; }
      else if (total >= 2) { cat = 'warning'; desc = 'Probabilité clinique modérée. D-Dimères à doser.'; }
      return { total, cat, desc, max: 12.5 };
    }
  },
  {
    id: 'wells_tvp',
    nom: 'Score de Wells (TVP)',
    domaine: 'Pneumologie',
    description: 'Probabilité clinique de Thrombose Veineuse Profonde (TVP). Score maximal : 9.',
    type: 'checklist',
    items: [
      { text: 'Cancer actif ou traité < 6 mois (+1 pt)', points: 1 },
      { text: 'Paralysie, parésie ou plâtre des membres inférieurs (+1 pt)', points: 1 },
      { text: 'Alitement récent ≥ 3 jours ou chirurgie majeure < 12 semaines (+1 pt)', points: 1 },
      { text: 'Douleur localisée sur le trajet veineux profond (+1 pt)', points: 1 },
      { text: 'Tuméfaction de tout le membre inférieur (+1 pt)', points: 1 },
      { text: 'Augmentation du diamètre du mollet ≥ 3 cm vs côté sain (+1 pt)', points: 1 },
      { text: 'Œdème prenant le godet sur la jambe suspecte (+1 pt)', points: 1 },
      { text: 'Circulation veineuse collatérale superficielle (non variqueuse) (+1 pt)', points: 1 },
      { text: 'Antécédent de TVP documenté (+1 pt)', points: 1 },
      { text: 'Diagnostic alternatif au moins aussi probable que la TVP (-2 pts)', points: -2 }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Probabilité clinique faible. D-Dimères recommandés.';
      if (total >= 3) { cat = 'danger'; desc = 'Probabilité clinique ÉLEVÉE. Échographie-Doppler veineux des MI nécessaire.'; }
      else if (total >= 1) { cat = 'warning'; desc = 'Probabilité clinique modérée. Échographie ou D-Dimères selon situation.'; }
      return { total, cat, desc, max: 9 };
    }
  },
  {
    id: 'geneva_ep',
    nom: 'Score de Genève révisé (Embolie Pulmonaire)',
    domaine: 'Pneumologie',
    description: 'Évaluation clinique alternative de la probabilité d\'EP. Score maximal : 22.',
    type: 'radio_group',
    groups: [
      {
        question: 'Facteurs prédisposants',
        options: [
          { text: 'Âge > 65 ans (+1 pt)', value: 1 },
          { text: 'Pas d\'antécédent de TVP/EP ni chirurgie/cancer', value: 0 }
        ]
      },
      {
        question: 'Antécédent thromboembolique',
        options: [
          { text: 'Antécédent personnel de TVP ou EP (+3 pts)', value: 3 },
          { text: 'Aucun', value: 0 }
        ]
      },
      {
        question: 'Chirurgie récente',
        options: [
          { text: 'Chirurgie ou fracture membre inférieur < 1 mois (+2 pts)', value: 2 },
          { text: 'Aucun', value: 0 }
        ]
      },
      {
        question: 'Néoplasie',
        options: [
          { text: 'Cancer actif ou guéri < 1 an (+2 pts)', value: 2 },
          { text: 'Aucun', value: 0 }
        ]
      },
      {
        question: 'Douleur thoracique',
        options: [
          { text: 'Douleur thoracique unilatérale spontanée (+3 pts)', value: 3 },
          { text: 'Aucune', value: 0 }
        ]
      },
      {
        question: 'Hémoptysie',
        options: [
          { text: 'Présence d\'une hémoptysie (+2 pts)', value: 2 },
          { text: 'Aucune', value: 0 }
        ]
      },
      {
        question: 'Fréquence cardiaque',
        options: [
          { text: 'FC ≥ 95 / min (+5 pts)', value: 5 },
          { text: 'FC entre 75 et 94 / min (+3 pts)', value: 3 },
          { text: 'FC < 75 / min', value: 0 }
        ]
      },
      {
        question: 'Douleur ou œdème MI',
        options: [
          { text: 'Douleur provoquée sur trajet veineux MI ou œdème unilatéral (+3 pts)', value: 3 },
          { text: 'Aucun', value: 0 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Probabilité clinique FAIBLE (8% de prévalence). D-Dimères à faire.';
      if (total >= 11) { cat = 'danger'; desc = 'Probabilité clinique ÉLEVÉE (65% de prévalence). Angioscanner thoracique direct.'; }
      else if (total >= 4) { cat = 'warning'; desc = 'Probabilité clinique MODÉRÉE (28% de prévalence). D-Dimères.'; }
      return { total, cat, desc, max: 22 };
    }
  },

  // URGENCES & SOINS INTENSIFS
  {
    id: 'qsofa',
    nom: 'qSOFA (Sepsis rapide)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Dépistage au lit du patient suspect de sepsis sévère. Score maximal : 3.',
    type: 'checklist',
    items: [
      { text: 'Fréquence respiratoire ≥ 22/min (+1 pt)', points: 1 },
      { text: 'Altération de l\'état de conscience (GCS < 15) (+1 pt)', points: 1 },
      { text: 'Pression artérielle systolique ≤ 100 mmHg (+1 pt)', points: 1 }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Faible suspicion de sepsis. Rester vigilant.';
      if (total >= 2) { cat = 'danger'; desc = 'Suspicion élevée de sepsis / mauvais pronostic. Bilans biologiques en urgence.'; }
      return { total, cat, desc, max: 3 };
    }
  },
  {
    id: 'sofa',
    nom: 'SOFA complet (Sepsis / Dysfonction d\'organe)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Sequential Organ Failure Assessment - évaluation de la dysfonction d\'organes en réanimation.',
    type: 'radio_group',
    groups: [
      {
        question: 'Respiration : PaO2/FiO2 (mmHg) [ou SpO2/FiO2]',
        options: [
          { text: '0 : ≥ 400', value: 0 },
          { text: '1 : < 400', value: 1 },
          { text: '2 : < 300', value: 2 },
          { text: '3 : < 200 (avec assistance respi)', value: 3 },
          { text: '4 : < 100 (avec assistance respi)', value: 4 }
        ]
      },
      {
        question: 'Coagulation : Plaquettes (G/L)',
        options: [
          { text: '0 : ≥ 150', value: 0 },
          { text: '1 : < 150', value: 1 },
          { text: '2 : < 100', value: 2 },
          { text: '3 : < 50', value: 3 },
          { text: '4 : < 20', value: 4 }
        ]
      },
      {
        question: 'Foie : Bilirubine (µmol/L)',
        options: [
          { text: '0 : < 20', value: 0 },
          { text: '1 : 20 - 32', value: 1 },
          { text: '2 : 33 - 101', value: 2 },
          { text: '3 : 102 - 204', value: 3 },
          { text: '4 : > 204', value: 4 }
        ]
      },
      {
        question: 'Cardiovasculaire : Hypotension / Vasopresseurs',
        options: [
          { text: '0 : Pas d\'hypotension (PAM ≥ 70 mmHg)', value: 0 },
          { text: '1 : PAM < 70 mmHg', value: 1 },
          { text: '2 : Dopamine ≤ 5 ou Dobutamine (toute dose)', value: 2 },
          { text: '3 : Dopamine > 5 ou Noradrénaline ≤ 0.1 µg/kg/min', value: 3 },
          { text: '4 : Dopamine > 15 ou Noradrénaline > 0.1 µg/kg/min', value: 4 }
        ]
      },
      {
        question: 'Système Nerveux Central : Glasgow (GCS)',
        options: [
          { text: '0 : 15 (normal)', value: 0 },
          { text: '1 : 13 - 14', value: 1 },
          { text: '2 : 10 - 12', value: 2 },
          { text: '3 : 6 - 9', value: 3 },
          { text: '4 : < 6', value: 4 }
        ]
      },
      {
        question: 'Rénal : Créatininémie (µmol/L) ou diurèse',
        options: [
          { text: '0 : < 110', value: 0 },
          { text: '1 : 110 - 170', value: 1 },
          { text: '2 : 171 - 299', value: 2 },
          { text: '3 : 300 - 440 (ou diurèse < 500 mL/j)', value: 3 },
          { text: '4 : > 440 (ou diurèse < 200 mL/j)', value: 4 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Dysfonction d\'organe mineure.';
      if (total >= 10) { cat = 'danger'; desc = 'Défaillances multiviscérales sévères. Risque de mortalité élevé (> 50%). Soins intensifs.'; }
      else if (total >= 5) { cat = 'warning'; desc = 'Dysfonction d\'organe modérée.'; }
      return { total, cat, desc, max: 24 };
    }
  },
  {
    id: 'news2',
    nom: 'NEWS2 (National Early Warning Score)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Score de surveillance clinique pour la détection précoce des détériorations. Score maximal : 20.',
    type: 'radio_group',
    groups: [
      {
        question: 'Fréquence respiratoire (cycles/min)',
        options: [
          { text: '3 : ≤ 8 ou ≥ 25', value: 3 },
          { text: '2 : 21 - 24', value: 2 },
          { text: '1 : 9 - 11', value: 1 },
          { text: '0 : 12 - 20', value: 0 }
        ]
      },
      {
        question: 'Saturation en oxygène SpO2 - Échelle 1 (Standard)',
        options: [
          { text: '0 : ≥ 96%', value: 0 },
          { text: '1 : 94 - 95%', value: 1 },
          { text: '2 : 92 - 93%', value: 2 },
          { text: '3 : ≤ 91%', value: 3 }
        ]
      },
      {
        question: 'Saturation en oxygène SpO2 - Échelle 2 (Insuffisance respi / BPCO)',
        options: [
          { text: '0 : 93-96% ou ≥ 97% sous air', value: 0 },
          { text: '1 : 90-92% ou 97-98% sous O2', value: 1 },
          { text: '2 : 88-89% ou 99-100% sous O2', value: 2 },
          { text: '3 : ≤ 87% (toutes situations)', value: 3 }
        ]
      },
      {
        question: 'Oxygène supplémentaire',
        options: [
          { text: '2 : Oui (sous oxygène)', value: 2 },
          { text: '0 : Non (sous air ambiant)', value: 0 }
        ]
      },
      {
        question: 'Pression Artérielle Systolique (PAS en mmHg)',
        options: [
          { text: '3 : ≤ 90 ou ≥ 220', value: 3 },
          { text: '2 : 91 - 100', value: 2 },
          { text: '1 : 101 - 110', value: 1 },
          { text: '0 : 111 - 219', value: 0 }
        ]
      },
      {
        question: 'Fréquence Cardiaque (FC en battements/min)',
        options: [
          { text: '3 : ≤ 40 ou ≥ 131', value: 3 },
          { text: '2 : 111 - 130', value: 2 },
          { text: '1 : 41 - 50 ou 91 - 110', value: 1 },
          { text: '0 : 51 - 90', value: 0 }
        ]
      },
      {
        question: 'Niveau de conscience (AVPU)',
        options: [
          { text: '0 : A (Alerte)', value: 0 },
          { text: '3 : V, P ou U (Réagit à la voix, à la douleur, ou Inconscient)', value: 3 }
        ]
      },
      {
        question: 'Température (°C)',
        options: [
          { text: '3 : ≤ 35.0', value: 3 },
          { text: '2 : ≥ 39.1', value: 2 },
          { text: '1 : 35.1 - 36.0 ou 38.1 - 39.0', value: 1 },
          { text: '0 : 36.1 - 38.0', value: 0 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Risque faible. Surveillance infirmière standard.';
      if (total >= 7) { cat = 'danger'; desc = 'RISQUE ÉLEVÉ. Alerte médicale urgente, équipe mobile de réanimation requise.'; }
      else if (total >= 5) { cat = 'warning'; desc = 'Risque modéré. Réévaluation rapprochée par le médecin responsable dans l\'heure.'; }
      return { total, cat, desc, max: 20 };
    }
  },
  {
    id: 'glasgow',
    nom: 'Score de Glasgow (GCS)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Évalue la profondeur du coma et l\'état de conscience. Score maximal : 15.',
    type: 'radio_group',
    groups: [
      {
        question: 'Ouverture des yeux',
        options: [
          { text: '4 : Spontanée', value: 4 },
          { text: '3 : À la demande verbale', value: 3 },
          { text: '2 : À la douleur', value: 2 },
          { text: '1 : Nulle', value: 1 }
        ]
      },
      {
        question: 'Réponse verbale',
        options: [
          { text: '5 : Orientée, normale', value: 5 },
          { text: '4 : Confuse', value: 4 },
          { text: '3 : Inappropriée (mots isolés)', value: 3 },
          { text: '2 : Incompréhensible (gémissements)', value: 2 },
          { text: '1 : Nulle', value: 1 }
        ]
      },
      {
        question: 'Réponse motrice',
        options: [
          { text: '6 : Obéit aux ordres', value: 6 },
          { text: '5 : Localise la douleur', value: 5 },
          { text: '4 : Évitement à la douleur', value: 4 },
          { text: '3 : Flexion stéréotypée (décortication)', value: 3 },
          { text: '2 : Extension stéréotypée (décérébration)', value: 2 },
          { text: '1 : Nulle', value: 1 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Conscience normale.';
      if (total <= 8) { cat = 'danger'; desc = 'COMA SÉVÈRE. Intubation endotrachéale requise pour protection des voies aériennes.'; }
      else if (total <= 12) { cat = 'danger'; desc = 'Troubles de conscience modérés.'; }
      else if (total <= 14) { cat = 'warning'; desc = 'Troubles de conscience légers.'; }
      return { total, cat, desc, max: 15 };
    }
  },
  {
    id: 'charlson',
    nom: 'Index de comorbidité de Charlson',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Estime la survie à 10 ans selon les antécédents médicaux.',
    type: 'checklist',
    items: [
      { text: 'Infarctus du myocarde (+1 pt)', points: 1 },
      { text: 'Insuffisance cardiaque congestive (+1 pt)', points: 1 },
      { text: 'Artériopathie oblitérante des membres inférieurs (AOMI) (+1 pt)', points: 1 },
      { text: 'Maladie cérébrovasculaire / AVC / AIT (+1 pt)', points: 1 },
      { text: 'Démence (+1 pt)', points: 1 },
      { text: 'Pneumopathie chronique (ex: BPCO) (+1 pt)', points: 1 },
      { text: 'Connectivite / Maladie du collagène (+1 pt)', points: 1 },
      { text: 'Ulcère gastroduodénal (+1 pt)', points: 1 },
      { text: 'Hépatopathie légère (sans cirrhose ni hypertension portale) (+1 pt)', points: 1 },
      { text: 'Diabète sans complications d\'organes (+1 pt)', points: 1 },
      { text: 'Diabète avec complications d\'organes (ex: rétinopathie, néphropathie) (+2 pts)', points: 2 },
      { text: 'Hémiplégie ou paraplégie (+2 pts)', points: 2 },
      { text: 'Insuffisance rénale chronique modérée à sévère (+2 pts)', points: 2 },
      { text: 'Tumeur maligne solide sans métastases (+2 pts)', points: 2 },
      { text: 'Leucémie ou Lymphome (+2 pts)', points: 2 },
      { text: 'Hépatopathie modérée à sévère (Cirrhose) (+3 pts)', points: 3 },
      { text: 'Tumeur maligne solide métastatique (+6 pts)', points: 6 },
      { text: 'SIDA / Infection VIH active (+6 pts)', points: 6 },
      { text: 'Tranche d\'âge : 50 - 59 ans (+1 pt)', points: 1 },
      { text: 'Tranche d\'âge : 60 - 69 ans (+2 pts)', points: 2 },
      { text: 'Tranche d\'âge : 70 - 79 ans (+3 pts)', points: 3 },
      { text: 'Tranche d\'âge : ≥ 80 ans (+4 pts)', points: 4 }
    ],
    calculer: (total) => {
      // Formule de survie à 10 ans : S(10) = 0.9 ^ (e ^ (Score * 0.9))
      const expScore = Math.exp(total * 0.9);
      const survivalPercent = Math.round(Math.pow(0.9, expScore) * 100);
      let cat = 'normal';
      if (total >= 5) cat = 'danger';
      else if (total >= 3) cat = 'warning';
      return { total: total + ' pt', cat, desc: `Probabilité de survie estimée à 10 ans : ~${survivalPercent}% (index de Charlson ajusté sur l\'âge).`, max: null };
    }
  },
  {
    id: 'child_pugh',
    nom: 'Score de Child-Pugh (Cirrhose)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Classe la sévérité de l\'insuffisance hépatocellulaire et de la cirrhose. Score maximal : 15.',
    type: 'radio_group',
    groups: [
      {
        question: 'Encéphalopathie hépatique',
        options: [
          { text: '1 : Absente', value: 1 },
          { text: '2 : Stades I-II (Confusion légère, astérixis)', value: 2 },
          { text: '3 : Stades III-IV (Stupeur, coma)', value: 3 }
        ]
      },
      {
        question: 'Ascite',
        options: [
          { text: '1 : Absente', value: 1 },
          { text: '2 : Modérée (répondant aux diurétiques)', value: 2 },
          { text: '3 : Sévère / Réfractaire', value: 3 }
        ]
      },
      {
        question: 'Bilirubine totale (µmol/L)',
        options: [
          { text: '1 : < 34', value: 1 },
          { text: '2 : 34 à 50', value: 2 },
          { text: '3 : > 50', value: 3 }
        ]
      },
      {
        question: 'Albumine sérique (g/L)',
        options: [
          { text: '3 : < 28', value: 3 },
          { text: '2 : 28 à 35', value: 2 },
          { text: '1 : > 35', value: 1 }
        ]
      },
      {
        question: 'Taux de Prothrombine (%) ou INR',
        options: [
          { text: '1 : TP > 50% (ou INR < 1.7)', value: 1 },
          { text: '2 : TP 30 à 50% (ou INR 1.7 à 2.3)', value: 2 },
          { text: '3 : TP < 30% (ou INR > 2.3)', value: 3 }
        ]
      }
    ],
    calculer: (total) => {
      let classe = 'A';
      let cat = 'normal';
      let desc = 'Classe A. Cirrhose compensée (Survie à 1 an ~100%, 2 ans ~85%).';
      if (total >= 10) { classe = 'C'; cat = 'danger'; desc = 'Classe C. Cirrhose décompensée sévère (Survie à 1 an ~45%, 2 ans ~35%). Transplantation à évaluer.'; }
      else if (total >= 7) { classe = 'B'; cat = 'warning'; desc = 'Classe B. Insuffisance hépatocellulaire modérée (Survie à 1 an ~80%, 2 ans ~60%).'; }
      return { total: `Child-Pugh ${total} (Classe ${classe})`, cat, desc, max: 15 };
    }
  },
  {
    id: 'meld',
    nom: 'Score MELD (Model for End-stage Liver Disease)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Estime le risque de décès à 3 mois chez les patients cirrhotiques.',
    type: 'custom',
    render: (div) => {
      div.innerHTML = `
        <div class="calc-form">
          <div class="calc-glass-box">
            <div class="calc-group-title">Saisir les variables biologiques</div>
            <div style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">
              <label>Créatininémie (mg/dL) : <input type="number" step="0.1" id="meld_creat" value="1.0" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>Bilirubinémie (mg/dL) : <input type="number" step="0.1" id="meld_bili" value="1.0" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>INR : <input type="number" step="0.1" id="meld_inr" value="1.0" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>Sodium sérique (mmol/L) : <input type="number" id="meld_na" value="137" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
            </div>
          </div>
          <div class="calc-glass-box">
            <div class="calc-group-title">Dialyse</div>
            <label class="check-container"><input type="checkbox" id="meld_dial" class="calc-input"><span class="checkmark"></span>Dialysé ≥ 2 fois dans la semaine précédente</label>
          </div>
        </div>
      `;

      const calcMeld = () => {
        let creat = parseFloat(document.getElementById('meld_creat').value || 1.0);
        const bili = parseFloat(document.getElementById('meld_bili').value || 1.0);
        const inr = parseFloat(document.getElementById('meld_inr').value || 1.0);
        const na = parseInt(document.getElementById('meld_na').value || 137);
        const dial = document.getElementById('meld_dial').checked;

        if (dial) creat = 4.0; // Créatinine plafonnée à 4 si dialysé

        // Bornes minimales et maximales
        creat = Math.min(4.0, Math.max(1.0, creat));
        const biliVal = Math.max(1.0, bili);
        const inrVal = Math.max(1.0, inr);

        // Formule MELD originale
        let meld = Math.round((3.78 * Math.log(biliVal)) + (11.2 * Math.log(inrVal)) + (9.57 * Math.log(creat)) + 6.43);
        meld = Math.min(40, Math.max(6, meld));

        // Ajustement MELD-Na (formule OPTN 2016)
        let meldNa = meld;
        if (meld > 11) {
          const naClamped = Math.min(137, Math.max(125, na));
          meldNa = Math.round(meld + 1.32 * (137 - naClamped) - 0.033 * meld * (137 - naClamped));
        }

        let cat = 'normal';
        let desc = 'Mortalité à 3 mois faible (< 2%).';
        if (meldNa >= 30) { cat = 'danger'; desc = 'Mortalité à 3 mois EXTRÊMEMENT ÉLEVÉE (> 50%). Urgence d\'inscription pour greffe hépatique.'; }
        else if (meldNa >= 20) { cat = 'danger'; desc = 'Mortalité à 3 mois importante (~20%).'; }
        else if (meldNa >= 15) { cat = 'warning'; desc = 'Mortalité à 3 mois modérée (~6%). Seuil usuel pour greffe.'; }

        const rDiv = document.getElementById('calc-result');
        if (rDiv) {
          rDiv.innerHTML = `
            <div class="calc-res-box ${cat}">
              <div class="calc-res-title">Score MELD-Na : ${meldNa} (MELD seul : ${meld})</div>
              <div class="calc-res-desc">${desc}</div>
            </div>
          `;
        }
      };

      div.querySelectorAll('.calc-input').forEach(input => {
        input.addEventListener('change', calcMeld);
        if (input.type === 'number') input.addEventListener('input', calcMeld);
      });
      calcMeld();
    }
  },
  {
    id: 'nihss',
    nom: 'NIHSS (Neurologie - AVC)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'National Institutes of Health Stroke Scale - sévérité clinique de l\'AVC. Score maximal : 42.',
    type: 'radio_group',
    groups: [
      { question: '1a. Niveau de conscience', options: [{text:'0: Éveillé, réactif',value:0},{text:'1: Somnolent (stimulus verbal)',value:1},{text:'2: Stuporeux (stimulus douloureux)',value:2},{text:'3: Comateux/Réponse réflexe seule',value:3}] },
      { question: '1b. Niveau de conscience : Questions (Mois, Âge)', options: [{text:'0: Répond bien aux 2',value:0},{text:'1: Répond bien à 1',value:1},{text:'2: N\'en résout aucune',value:2}] },
      { question: '1c. Niveau de conscience : Ordres (Fermer les yeux, Serrer la main)', options: [{text:'0: Exécute les 2',value:0},{text:'1: Exécute 1 ordre',value:1},{text:'2: N\'exécute aucun ordre',value:2}] },
      { question: '2. Regard conjugué horizontal', options: [{text:'0: Normal',value:0},{text:'1: Paralysie partielle du regard',value:1},{text:'2: Déviation forcée du regard',value:2}] },
      { question: '3. Champs visuels', options: [{text:'0: Normal',value:0},{text:'1: Hémianopsie partielle',value:1},{text:'2: Hémianopsie complète',value:2},{text:'3: Hémianopsie bilatérale (cécité corticale)',value:3}] },
      { question: '4. Paralysie faciale', options: [{text:'0: Symétrique/Normal',value:0},{text:'1: Asymétrie mineure (effacement pli nasogénien)',value:1},{text:'2: Paralysie partielle (inférieure)',value:2},{text:'3: Paralysie complète (supérieure et inférieure)',value:3}] },
      { question: '5a. Motricité bras Gauche (10 secondes maintien)', options: [{text:'0: Pas de dérive',value:0},{text:'1: Dérive modérée sans toucher le lit',value:1},{text:'2: Tombe sur le lit avant 10s',value:2},{text:'3: Aucun effort contre la pesanteur',value:3},{text:'4: Aucun mouvement',value:4}] },
      { question: '5b. Motricité bras Droit (10 secondes maintien)', options: [{text:'0: Pas de dérive',value:0},{text:'1: Dérive modérée',value:1},{text:'2: Tombe avant 10s',value:2},{text:'3: Aucun effort contre pesanteur',value:3},{text:'4: Aucun mouvement',value:4}] },
      { question: '6a. Motricité jambe Gauche (5 secondes maintien)', options: [{text:'0: Pas de dérive',value:0},{text:'1: Dérive modérée sans toucher le lit',value:1},{text:'2: Tombe sur le lit avant 5s',value:2},{text:'3: Aucun effort contre pesanteur',value:3},{text:'4: Aucun mouvement',value:4}] },
      { question: '6b. Motricité jambe Droite (5 secondes maintien)', options: [{text:'0: Pas de dérive',value:0},{text:'1: Dérive modérée',value:1},{text:'2: Tombe avant 5s',value:2},{text:'3: Aucun effort contre pesanteur',value:3},{text:'4: Aucun mouvement',value:4}] },
      { question: '7. Ataxie des membres (Doigt-nez, Talon-genou)', options: [{text:'0: Absent/Normal',value:0},{text:'1: Présent dans un membre',value:1},{text:'2: Présent dans deux membres',value:2}] },
      { question: '8. Sensibilité (piqûre)', options: [{text:'0: Normal',value:0},{text:'1: Hypoesthésie légère à modérée',value:1},{text:'2: Anesthésie sévère à complète',value:2}] },
      { question: '9. Meilleur langage', options: [{text:'0: Normal/Pas d\'aphasie',value:0},{text:'1: Aphasie légère à modérée',value:1},{text:'2: Aphasie sévère (expression/compréhension très altérée)',value:2},{text:'3: Mutisme, aphasie globale',value:3}] },
      { question: '10. Dysarthrie (articulation des mots)', options: [{text:'0: Normal',value:0},{text:'1: Dysarthrie légère à modérée (mots compréhensibles)',value:1},{text:'2: Dysarthrie sévère (incompréhensible ou muet)',value:2}] },
      { question: '11. Extinction et inattention (Négligence sensorielle)', options: [{text:'0: Normal/Aucune négligence',value:0},{text:'1: Négligence dans une modalité (visuelle, tactile, spatiale)',value:1},{text:'2: Négligence sévère/Hémi-inattention globale',value:2}] }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'AVC mineur.';
      if (total >= 21) { cat = 'danger'; desc = 'AVC très sévère. Risque pronostique critique. Contre-indications relatives à réévaluer.'; }
      else if (total >= 16) { cat = 'danger'; desc = 'AVC sévère.'; }
      else if (total >= 5) { cat = 'warning'; desc = 'AVC modéré (Indication thrombolyse / thrombectomie selon délais).'; }
      return { total, cat, desc, max: 42 };
    }
  },
  {
    id: 'tug',
    nom: 'TUG (Timed Up and Go)',
    domaine: 'Équilibre & Marche',
    description: 'Test de mobilité et dépistage du risque de chute. Le patient se lève d\'une chaise, marche 3 mètres, fait demi-tour et revient s\'asseoir.',
    type: 'number_result',
    fields: [
      { id: 'tug_time', label: 'Temps mesuré (en secondes)', type: 'number', min: 0, max: 120, unit: 's', placeholder: 'ex: 14' }
    ],
    calculate: (v) => {
      const t = parseFloat(v.tug_time);
      if (isNaN(t)) return null;
      let risk = '', cls = '';
      if (t < 12) { risk = 'Mobilité normale, risque de chute faible'; cls = 'good'; }
      else if (t <= 20) { risk = 'Risque de chute MODÉRÉ — surveillance recommandée'; cls = 'warn'; }
      else { risk = 'Risque de chute ÉLEVÉ — kinésithérapie urgente'; cls = 'danger'; }
      return { score: t + ' secondes', interp: risk, cls };
    },
    seuils: '>12 sec = risque modéré · >20 sec = risque élevé · Sarcopénie sévère si >20 sec (EWGSOP2)'
  },
  {
    id: 'sppb',
    nom: 'SPPB (Short Physical Performance Battery)',
    domaine: 'Équilibre & Marche',
    description: 'Batterie de performance physique courte en 3 tests : équilibre debout, vitesse de marche sur 4m, lever de chaise x5. Score 0-12.',
    type: 'checklist',
    fields: [
      { id: 'sppb_eq', label: 'Score Équilibre (0-4 pts)', type: 'select', options: ['0 — Incapable de se tenir 10 sec pieds joints', '1 — Pieds joints 10 sec, pas en tandem 10 sec', '2 — Pieds joints + semi-tandem 10 sec, tandem <3 sec', '3 — Tandem 3-9 sec', '4 — Tandem 10 sec (position parfaite)'] },
      { id: 'sppb_vit', label: 'Score Vitesse de Marche 4m (0-4 pts)', type: 'select', options: ['0 — Incapable de marcher', '1 — >8,7 sec', '2 — 6,2-8,7 sec', '3 — 4,8-6,1 sec', '4 — <4,8 sec'] },
      { id: 'sppb_lev', label: 'Score Lever de Chaise x5 (0-4 pts)', type: 'select', options: ['0 — Incapable (>60 sec ou abandon)', '1 — >16,7 sec', '2 — 13,7-16,6 sec', '3 — 11,2-13,6 sec', '4 — <11,2 sec'] }
    ],
    calculate: (v) => {
      const eq = parseInt(v.sppb_eq) || 0;
      const vit = parseInt(v.sppb_vit) || 0;
      const lev = parseInt(v.sppb_lev) || 0;
      const score = eq + vit + lev;
      let interp = '', cls = '';
      if (score >= 10) { interp = 'Performances physiques normales'; cls = 'good'; }
      else if (score >= 9) { interp = 'Performances légèrement réduites — surveillance'; cls = 'warn'; }
      else if (score >= 4) { interp = 'Fragilité physique modérée — kinésithérapie recommandée'; cls = 'warn'; }
      else { interp = 'Sarcopénie sévère — prise en charge multidisciplinaire urgente'; cls = 'danger'; }
      return { score: score + '/12', interp, cls };
    },
    seuils: '≤8/12 = fragilité physique · 0-3 = sarcopénie sévère (EWGSOP2 2019)'
  },
  {
    id: 'barthel',
    nom: 'Index de Barthel (Autonomie Rééducation)',
    domaine: 'Autonomie',
    description: 'Mesure de l\'indépendance fonctionnelle en rééducation. 10 activités, score de 0 à 100. Complémentaire des ADL de Katz.',
    type: 'checklist',
    fields: [
      { id: 'b_alim', label: 'Alimentation (manger)', type: 'select', options: ['0 — Incapable', '5 — Besoin d\'aide', '10 — Indépendant'] },
      { id: 'b_bain', label: 'Bain / douche', type: 'select', options: ['0 — Dépendant', '5 — Indépendant'] },
      { id: 'b_toilet', label: 'Hygiène personnelle (toilette)', type: 'select', options: ['0 — Dépendant', '5 — Indépendant'] },
      { id: 'b_habl', label: 'Habillage', type: 'select', options: ['0 — Incapable', '5 — Besoin d\'aide pour moitié', '10 — Indépendant'] },
      { id: 'b_contin_in', label: 'Continence fécale', type: 'select', options: ['0 — Incontinent', '5 — Accidents occasionnels', '10 — Continent'] },
      { id: 'b_contin_ur', label: 'Continence urinaire', type: 'select', options: ['0 — Incontinent/sondé', '5 — Accidents occasionnels', '10 — Continent'] },
      { id: 'b_wc', label: 'Utilisation des toilettes', type: 'select', options: ['0 — Dépendant', '5 — Besoin d\'aide', '10 — Indépendant'] },
      { id: 'b_trans', label: 'Transferts lit-chaise', type: 'select', options: ['0 — Incapable (alité)', '5 — Aide majeure', '10 — Aide mineure', '15 — Indépendant'] },
      { id: 'b_marche', label: 'Déambulation', type: 'select', options: ['0 — Incapable', '5 — Fauteuil roulant indépendant', '10 — Aide pour marcher', '15 — Indépendant >50m'] },
      { id: 'b_escaliers', label: 'Escaliers', type: 'select', options: ['0 — Incapable', '5 — Besoin d\'aide', '10 — Indépendant'] }
    ],
    calculate: (v) => {
      const keys = ['b_alim','b_bain','b_toilet','b_habl','b_contin_in','b_contin_ur','b_wc','b_trans','b_marche','b_escaliers'];
      const score = keys.reduce((acc, k) => acc + (parseInt(v[k]) || 0), 0);
      let interp = '', cls = '';
      if (score >= 90) { interp = 'Indépendance fonctionnelle quasi-complète'; cls = 'good'; }
      else if (score >= 61) { interp = 'Dépendance légère — aide partielle'; cls = 'warn'; }
      else if (score >= 21) { interp = 'Dépendance modérée à sévère'; cls = 'danger'; }
      else { interp = 'Dépendance totale'; cls = 'danger'; }
      return { score: score + '/100', interp, cls };
    },
    seuils: '≥90 = Indépendant · 61-89 = Dépendance légère · 21-60 = Modérée · ≤20 = Sévère'
  },
  {
    id: 'fab',
    nom: 'FAB / BREF (Frontal Assessment Battery)',
    domaine: 'Cognition & Humeur',
    description: 'Évaluation des fonctions exécutives et frontales. 6 sous-tests. Score /18. Cité dans Gériatrie 5e éd. pour syndrome frontal, démences fronto-temporales.',
    type: 'checklist',
    fields: [
      { id: 'fab_sim', label: '1. Similitudes (Abstraction)', type: 'select', options: ['0 — Aucune ou une réponse juste', '1 — Une réponse correcte', '2 — Deux réponses correctes', '3 — Trois réponses correctes'] },
      { id: 'fab_flu', label: '2. Fluence lexicale (Flexibilité mentale)', type: 'select', options: ['0 — Moins de 3 mots', '1 — 3 à 5 mots', '2 — 6 à 9 mots', '3 — 10 mots ou plus en 60 sec (lettre M)'] },
      { id: 'fab_mot', label: '3. Séquence motrice de Luria (Programmation)', type: 'select', options: ['0 — Incapable après plusieurs essais', '1 — Au moins 3 séquences mais peu nombreuses', '2 — Réalise seul au moins 3 séquences mais discontinu', '3 — Seul, 6 séquences consécutives correctement'] },
      { id: 'fab_ins', label: '4. Sensibilité à l\'interférence (Contrôle)', type: 'select', options: ['0 — Incapable', '1 — 3 erreurs et plus', '2 — 1 à 2 erreurs', '3 — Aucune erreur'] },
      { id: 'fab_ctr', label: '5. Inhibition (Contrôle inhibiteur Go/No-go)', type: 'select', options: ['0 — Incapable', '1 — 3 erreurs et plus', '2 — 1 à 2 erreurs', '3 — Aucune erreur'] },
      { id: 'fab_pre', label: '6. Comportement de préhension (Autonomie)', type: 'select', options: ['0 — Saisit les deux fois sans consigne', '1 — Hésite, demande ce qu\'il faut faire, saisit', '2 — Ne saisit pas après consigne mais saisit quand même', '3 — Ne saisit pas selon la consigne donnée'] }
    ],
    calculate: (v) => {
      const keys = ['fab_sim','fab_flu','fab_mot','fab_ins','fab_ctr','fab_pre'];
      const score = keys.reduce((acc, k) => acc + (parseInt(v[k]) || 0), 0);
      let interp = '', cls = '';
      if (score >= 16) { interp = 'Fonctions exécutives normales'; cls = 'good'; }
      else if (score >= 12) { interp = 'Dysfonction frontale légère — contrôle recommandé'; cls = 'warn'; }
      else { interp = 'Dysfonction frontale significative — syndrome frontal probable'; cls = 'danger'; }
      return { score: score + '/18', interp, cls };
    },
    seuils: '≥16 = Normal · 12-15 = Léger · <12 = Dysfonction frontale significative'
  },
  {
    id: 'npi',
    nom: 'NPI (Neuropsychiatric Inventory)',
    domaine: 'Cognition & Humeur',
    description: 'Inventaire Neuropsychiatrique — Évalue les 12 symptômes comportementaux et psychologiques de la démence (SPCD/BPSD). Cotation fréquence × sévérité.',
    type: 'checklist',
    fields: [
      { id: 'npi_id', label: 'Idées délirantes (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '2 — Rare × Modérée', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] },
      { id: 'npi_hal', label: 'Hallucinations (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '2 — Rare × Modérée', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] },
      { id: 'npi_agi', label: 'Agitation/Agressivité (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '2 — Rare × Modérée', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] },
      { id: 'npi_dep', label: 'Dépression/Dysphorie (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] },
      { id: 'npi_anx', label: 'Anxiété (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] },
      { id: 'npi_eup', label: 'Exaltation de l\'humeur/Euphorie (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] },
      { id: 'npi_apa', label: 'Apathie/Indifférence (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] },
      { id: 'npi_des', label: 'Désinhibition (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] },
      { id: 'npi_irr', label: 'Irritabilité/Instabilité (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] },
      { id: 'npi_mot', label: 'Comportements moteurs aberrants (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] },
      { id: 'npi_som', label: 'Comportements nocturnes/Sommeil (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] },
      { id: 'npi_ali', label: 'Appétit/Comportements alimentaires (F×S)', type: 'select', options: ['0 — Absent', '1 — Rare × Légère', '4 — Parfois × Légère', '6 — Parfois × Modérée', '8 — Fréquent × Modérée', '12 — Très fréquent × Sévère'] }
    ],
    calculate: (v) => {
      const keys = ['npi_id','npi_hal','npi_agi','npi_dep','npi_anx','npi_eup','npi_apa','npi_des','npi_irr','npi_mot','npi_som','npi_ali'];
      const score = keys.reduce((acc, k) => acc + (parseInt(v[k]) || 0), 0);
      let interp = '', cls = '';
      if (score < 4) { interp = 'SPCD minimes — surveillance clinique simple'; cls = 'good'; }
      else if (score < 12) { interp = 'SPCD légers — interventions non médicamenteuses'; cls = 'warn'; }
      else if (score < 24) { interp = 'SPCD modérés — évaluation thérapeutique indiquée'; cls = 'danger'; }
      else { interp = 'SPCD sévères — prise en charge spécialisée urgente'; cls = 'danger'; }
      return { score: score + '/144', interp, cls };
    },
    seuils: '<4 = Minimes · 4-11 = Légers · 12-23 = Modérés · ≥24 = Sévères. Item ≥4 = cliniquement significatif.'
  },
  {
    id: 'cdr',
    nom: 'CDR (Clinical Dementia Rating)',
    domaine: 'Cognition & Humeur',
    description: 'Échelle de stadification globale de la démence basée sur l\'entretien clinique. 6 domaines. Référence internationale pour Alzheimer.',
    type: 'select_result',
    fields: [
      { id: 'cdr_global', label: 'Stade CDR global', type: 'select', options: [
        '0 — Normal (pas de démence)',
        '0.5 — Questionnable / MCI (déclin cognitif léger, autonomie intacte)',
        '1 — Démence légère (difficultés vie sociale, autonomie instrumentale altérée)',
        '2 — Démence modérée (besoin aide pour certaines AVQ, mémoire très altérée)',
        '3 — Démence sévère (totalement dépendant, communication très limitée)'
      ] }
    ],
    calculate: (v) => {
      const val = v.cdr_global || '';
      const map = {
        '0': { interp: 'Pas de démence détectable', cls: 'good' },
        '0.5': { interp: 'MCI / Plainte cognitive — surveillance et bilan neuropsychologique', cls: 'warn' },
        '1': { interp: 'Démence légère — Indication inhibiteurs AChE (donépézil, rivastigmine)', cls: 'warn' },
        '2': { interp: 'Démence modérée — Inhibiteurs AChE + mémantine, aide domicile, EHPAD à évaluer', cls: 'danger' },
        '3': { interp: 'Démence sévère — Soins de confort, directives anticipées, EHPAD/USP', cls: 'danger' }
      };
      const stade = val.split(' ')[0];
      const r = map[stade] || { interp: 'Veuillez sélectionner un stade', cls: '' };
      return { score: 'CDR ' + (stade || '?'), interp: r.interp, cls: r.cls };
    },
    seuils: 'CDR 0=Normal · 0.5=MCI · 1=Léger · 2=Modéré · 3=Sévère'
  },
  {
    id: 'phq9',
    nom: 'PHQ-9 (Patient Health Questionnaire)',
    domaine: 'Cognition & Humeur',
    description: 'Questionnaire auto-administré de dépression. 9 items DSM. Utilisable en consultation de médecine générale et gériatrie. Seuil gériatrique identique.',
    type: 'checklist',
    fields: [
      { id: 'phq_i1', label: '1. Peu d\'intérêt ou de plaisir', type: 'select', options: ['0 — Jamais', '1 — Plusieurs jours', '2 — Plus de la moitié du temps', '3 — Presque tous les jours'] },
      { id: 'phq_i2', label: '2. Se sentir triste, déprimé(e) ou désespéré(e)', type: 'select', options: ['0 — Jamais', '1 — Plusieurs jours', '2 — Plus de la moitié du temps', '3 — Presque tous les jours'] },
      { id: 'phq_i3', label: '3. Difficultés à dormir, se réveiller trop tôt, ou trop dormir', type: 'select', options: ['0 — Jamais', '1 — Plusieurs jours', '2 — Plus de la moitié du temps', '3 — Presque tous les jours'] },
      { id: 'phq_i4', label: '4. Se sentir fatigué(e) ou manque d\'énergie', type: 'select', options: ['0 — Jamais', '1 — Plusieurs jours', '2 — Plus de la moitié du temps', '3 — Presque tous les jours'] },
      { id: 'phq_i5', label: '5. Peu d\'appétit ou manger trop', type: 'select', options: ['0 — Jamais', '1 — Plusieurs jours', '2 — Plus de la moitié du temps', '3 — Presque tous les jours'] },
      { id: 'phq_i6', label: '6. Se sentir nul(le) ou avoir l\'impression d\'être un échec', type: 'select', options: ['0 — Jamais', '1 — Plusieurs jours', '2 — Plus de la moitié du temps', '3 — Presque tous les jours'] },
      { id: 'phq_i7', label: '7. Difficultés à se concentrer (lecture, TV)', type: 'select', options: ['0 — Jamais', '1 — Plusieurs jours', '2 — Plus de la moitié du temps', '3 — Presque tous les jours'] },
      { id: 'phq_i8', label: '8. Lenteur/agitation psychomotrice observable', type: 'select', options: ['0 — Jamais', '1 — Plusieurs jours', '2 — Plus de la moitié du temps', '3 — Presque tous les jours'] },
      { id: 'phq_i9', label: '9. Pensées de mort ou de se faire du mal', type: 'select', options: ['0 — Jamais', '1 — Plusieurs jours', '2 — Plus de la moitié du temps', '3 — Presque tous les jours'] }
    ],
    calculate: (v) => {
      const keys = ['phq_i1','phq_i2','phq_i3','phq_i4','phq_i5','phq_i6','phq_i7','phq_i8','phq_i9'];
      const score = keys.reduce((acc, k) => acc + (parseInt(v[k]) || 0), 0);
      let interp = '', cls = '';
      if (score <= 4) { interp = 'Symptômes dépressifs minimaux'; cls = 'good'; }
      else if (score <= 9) { interp = 'Dépression légère — surveillance, soutien psychosocial'; cls = 'warn'; }
      else if (score <= 14) { interp = 'Dépression modérée — consultation psychiatrique ou psychologue recommandée'; cls = 'warn'; }
      else if (score <= 19) { interp = 'Dépression modérément sévère — traitement antidépresseur indiqué (ISRS)'; cls = 'danger'; }
      else { interp = 'Dépression sévère — traitement urgent, évaluer idées suicidaires'; cls = 'danger'; }
      const item9 = parseInt(v.phq_i9) || 0;
      if (item9 >= 1) interp += ' ⚠️ Idées suicidaires présentes — évaluer le risque immédiatement.';
      return { score: score + '/27', interp, cls };
    },
    seuils: '0-4 = Minimal · 5-9 = Léger · 10-14 = Modéré · 15-19 = Modérément sévère · ≥20 = Sévère'
  },
  {
    id: 'four_at',
    nom: '4AT (Dépistage Rapide du Délirium)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Outil de dépistage rapide du délirium validé en gériatrie. 4 items. Prend moins de 2 minutes. Ne remplace pas le CAM mais est plus rapide.',
    type: 'checklist',
    fields: [
      { id: 'at4_alert', label: '1. Alertness (Niveau de vigilance)', type: 'select', options: ['0 — Normal (pleinement éveillé, alerte)', '4 — Légèrement somnolent mais éveillable (voix)', '4 — Difficile à éveiller'] },
      { id: 'at4_amt', label: '2. AMT-4 (Questions orientées — âge, date naissance, lieu, année actuelle)', type: 'select', options: ['0 — Toutes correctes (4/4)', '1 — Une erreur (3/4)', '2 — Deux erreurs ou plus'] },
      { id: 'at4_attn', label: '3. Attention (citer les mois à rebours : Décembre, Novembre...)', type: 'select', options: ['0 — 7-12 mois corrects', '1 — 1-6 mois corrects', '2 — Impossible à tester ou refus'] },
      { id: 'at4_acut', label: '4. Changement Aigu ou Fluctuation (comportement, état mental)', type: 'select', options: ['0 — Non', '4 — Oui (différent d\'habitude, fluctuant)'] }
    ],
    calculate: (v) => {
      const score = (parseInt(v.at4_alert)||0) + (parseInt(v.at4_amt)||0) + (parseInt(v.at4_attn)||0) + (parseInt(v.at4_acut)||0);
      let interp = '', cls = '';
      if (score === 0) { interp = 'Délirium improbable (ne pas exclure si clinique évocatrice)'; cls = 'good'; }
      else if (score <= 3) { interp = 'Déficit cognitif possible — évaluer avec CAM complet, rechercher une cause sous-jacente'; cls = 'warn'; }
      else { interp = 'Délirium probable — CAM complet + recherche étiologique immédiate'; cls = 'danger'; }
      return { score: score + '/12', interp, cls };
    },
    seuils: '0 = Délirium improbable · 1-3 = Déficit cognitif possible · ≥4 = Délirium probable'
  },
  {
    id: 'frax',
    nom: 'FRAX® (Fracture Risk Assessment Tool)',
    domaine: 'Évaluation Gériatrique Standardisée (EGS)',
    description: 'Outil OMS de calcul du risque fracturaire à 10 ans. Prend en compte les facteurs cliniques de risque avec ou sans DXA. Cité dans Gériatrie 5e éd. ch. Ostéoporose.',
    type: 'select_result',
    fields: [
      { id: 'frax_sex', label: 'Sexe', type: 'select', options: ['Femme', 'Homme'] },
      { id: 'frax_age', label: 'Âge (ans)', type: 'number', min: 40, max: 100, placeholder: 'ex: 75' },
      { id: 'frax_imc', label: 'IMC (kg/m²)', type: 'number', min: 10, max: 50, placeholder: 'ex: 22' },
      { id: 'frax_fract', label: 'Antécédent de fracture après 40 ans', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'frax_hip', label: 'Fracture de hanche parentale', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'frax_tabac', label: 'Tabagisme actif', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'frax_glu', label: 'Corticothérapie ≥5mg prednisone/j ≥3 mois', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'frax_poly', label: 'Polyarthrite rhumatoïde', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'frax_sec', label: 'Ostéoporose secondaire (DT1, HBP, maladies inflam. chroniques)', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'frax_alc', label: 'Alcool ≥3 unités/jour', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'frax_tscore', label: 'T-score DXA col fémoral (si disponible)', type: 'number', min: -5, max: 2, placeholder: 'ex: -2.5 (ou laisser vide)' }
    ],
    calculate: (v) => {
      const age = parseInt(v.frax_age) || 70;
      const imc = parseFloat(v.frax_imc) || 22;
      const facteurs = ['frax_fract','frax_hip','frax_tabac','frax_glu','frax_poly','frax_sec','frax_alc'].reduce((acc, k) => acc + (parseInt(v[k])||0), 0);
      const tscore = parseFloat(v.frax_tscore);
      const isF = (v.frax_sex === 'Femme');
      const ageRisk = age > 70 ? 'élevé' : age > 60 ? 'modéré' : 'faible';
      const imcRisk = imc < 20 ? 'aggravé (IMC<20)' : 'standard';
      let risk = '';
      if (facteurs >= 3 || (age > 75 && facteurs >= 2) || (!isNaN(tscore) && tscore <= -2.5)) {
        risk = 'Risque fracturaire ÉLEVÉ — traitement anti-ostéoporotique fortement recommandé (bisphosphonate ou dénosumab + Ca + Vit D)';
      } else if (facteurs >= 1 || age > 65) {
        risk = 'Risque fracturaire MODÉRÉ — évaluation DXA recommandée si non faite. Vitamine D + Calcium systématiques.';
      } else {
        risk = 'Risque fracturaire faible — mesures préventives (Ca, Vit D, activité physique)';
      }
      return {
        score: facteurs + ' facteur(s) · Age: ' + age + ' ans · IMC: ' + imc + ' kg/m²',
        interp: risk + (ageRisk === 'élevé' ? ' · Âge: facteur majeur >70 ans' : '') + ' · IMC: ' + imcRisk,
        cls: facteurs >= 3 ? 'danger' : facteurs >= 1 ? 'warn' : 'good'
      };
    },
    seuils: 'T-score ≤-2.5 = ostéoporose · ≤-2.5+fracture = sévère · Seuil traitement = selon FRAX pays France + T-score'
  },
  {
    id: 'nrs2002',
    nom: 'NRS-2002 (Nutritional Risk Screening)',
    domaine: 'Nutrition & Peau',
    description: 'Outil de dépistage de la dénutrition à l\'admission hospitalière. +1 point automatique si ≥70 ans. Référence HAS et recommandations ESPEN.',
    type: 'checklist',
    fields: [
      { id: 'nrs_etat', label: 'État nutritionnel (perte poids ou IMC)', type: 'select', options: [
        '0 — Normal (pas de perte de poids)',
        '1 — Perte poids >5% en 3 mois OU prise alimentaire <75-100% besoins',
        '2 — Perte poids >5% en 2 mois OU IMC 18,5-20,5 + état général altéré',
        '3 — Perte poids >5% en 1 mois (>15% en 3 mois) OU IMC <18,5 + état général altéré'
      ] },
      { id: 'nrs_grav', label: 'Sévérité de la maladie (stress métabolique)', type: 'select', options: [
        '0 — Pas de maladie aiguë',
        '1 — Fracture de hanche, patient chronique (dialyse, diabète, cancer)',
        '2 — Chirurgie abdominale majeure, AVC, pneumopathie sévère, hémopathie maligne',
        '3 — Traumatisme crânien, greffe osseuse, soins intensifs (APACHE>10)'
      ] },
      { id: 'nrs_age', label: 'Âge du patient', type: 'select', options: ['0 — Moins de 70 ans', '1 — 70 ans et plus (+1 point automatique)'] }
    ],
    calculate: (v) => {
      const score = (parseInt(v.nrs_etat)||0) + (parseInt(v.nrs_grav)||0) + (parseInt(v.nrs_age)||0);
      let interp = '', cls = '';
      if (score < 3) { interp = 'Pas de risque de dénutrition — réévaluation hebdomadaire'; cls = 'good'; }
      else { interp = 'RISQUE NUTRITIONNEL — orientation diététicienne immédiate, plan de support nutritionnel à établir'; cls = 'danger'; }
      return { score: score + '/7 (dont +1 si ≥70 ans)', interp, cls };
    },
    seuils: '<3 = Pas de risque · ≥3 = Risque avéré → support nutritionnel (ESPEN/HAS)'
  },
  {
    id: 'dn4',
    nom: 'DN4 (Douleur Neuropathique — 4 questions)',
    domaine: 'Évaluation de la Douleur',
    description: 'Questionnaire de dépistage de la composante neuropathique de la douleur. 10 items en 4 groupes. Score ≥4/10 = douleur neuropathique probable. Validé en gériatrie.',
    type: 'checklist',
    fields: [
      { id: 'dn4_brules', label: 'Q1A — Brûlures', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'dn4_froid', label: 'Q1B — Sensation de froid douloureuse', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'dn4_chocs', label: 'Q1C — Chocs électriques', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'dn4_fourmis', label: 'Q2A — Fourmillements', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'dn4_picot', label: 'Q2B — Picotements', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'dn4_engour', label: 'Q2C — Engourdissements', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'dn4_demangs', label: 'Q2D — Démangeaisons', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'dn4_hypo', label: 'Q3 — Hypoesthésie au toucher dans la zone douloureuse', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'dn4_piquer', label: 'Q3 — Hypoesthésie à la piqûre', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'dn4_frott', label: 'Q4 — Douleur aggravée ou déclenchée par le frottement', type: 'select', options: ['0 — Non', '1 — Oui'] }
    ],
    calculate: (v) => {
      const keys = ['dn4_brules','dn4_froid','dn4_chocs','dn4_fourmis','dn4_picot','dn4_engour','dn4_demangs','dn4_hypo','dn4_piquer','dn4_frott'];
      const score = keys.reduce((acc, k) => acc + (parseInt(v[k])||0), 0);
      let interp = '', cls = '';
      if (score < 4) { interp = 'Composante neuropathique peu probable — continuer analgésie standard'; cls = 'good'; }
      else { interp = 'Douleur neuropathique PROBABLE — traitement spécifique : prégabaline, gabapentine, amitriptyline (prudence chez âgé), ISRNS (duloxétine)'; cls = 'danger'; }
      return { score: score + '/10', interp, cls };
    },
    seuils: '<4 = Nociceptive · ≥4 = Neuropathique probable → traitement spécifique'
  },
  {
    id: 'psqi',
    nom: 'PSQI (Pittsburgh Sleep Quality Index)',
    domaine: 'Évaluation Gériatrique Standardisée (EGS)',
    description: 'Index de qualité du sommeil sur le dernier mois. 7 composantes. Distingue bon et mauvais dormeur. Fréquemment utilisé dans les troubles du sommeil de la personne âgée.',
    type: 'checklist',
    fields: [
      { id: 'psqi_qual', label: '1. Qualité subjective du sommeil', type: 'select', options: ['0 — Très bonne', '1 — Bonne', '2 — Mauvaise', '3 — Très mauvaise'] },
      { id: 'psqi_lat', label: '2. Latence d\'endormissement (souvent >30 min?)', type: 'select', options: ['0 — Jamais', '1 — Moins d\'1 fois/sem.', '2 — 1-2 fois/sem.', '3 — 3 fois/sem. ou plus'] },
      { id: 'psqi_dur', label: '3. Durée du sommeil', type: 'select', options: ['0 — >7h', '1 — 6-7h', '2 — 5-6h', '3 — <5h'] },
      { id: 'psqi_eff', label: '4. Efficacité habituelle (temps au lit/temps de sommeil)', type: 'select', options: ['0 — ≥85%', '1 — 75-84%', '2 — 65-74%', '3 — <65%'] },
      { id: 'psqi_per', label: '5. Perturbations du sommeil (réveils nocturnes, douleur, chaleur…)', type: 'select', options: ['0 — Jamais', '1 — <1 fois/sem.', '2 — 1-2 fois/sem.', '3 — 3 fois/sem. ou plus'] },
      { id: 'psqi_meds', label: '6. Utilisation de somnifères', type: 'select', options: ['0 — Jamais', '1 — <1 fois/sem.', '2 — 1-2 fois/sem.', '3 — 3 fois/sem. ou plus'] },
      { id: 'psqi_fct', label: '7. Dysfonctionnement diurne (somnolence, fatigue)', type: 'select', options: ['0 — Jamais', '1 — 1-2 fois/sem.', '2 — 3 fois/sem.', '3 — Problème très important'] }
    ],
    calculate: (v) => {
      const keys = ['psqi_qual','psqi_lat','psqi_dur','psqi_eff','psqi_per','psqi_meds','psqi_fct'];
      const score = keys.reduce((acc, k) => acc + (parseInt(v[k])||0), 0);
      let interp = '', cls = '';
      if (score <= 5) { interp = 'Bon dormeur — qualité de sommeil satisfaisante'; cls = 'good'; }
      else if (score <= 10) { interp = 'Mauvais dormeur modéré — hygiène du sommeil, déprescription psychotropes'; cls = 'warn'; }
      else { interp = 'Mauvais dormeur sévère — évaluation complète, rechercher causes (douleur, dépression, apnée, iatrogénie)'; cls = 'danger'; }
      return { score: score + '/21', interp, cls };
    },
    seuils: '≤5 = Bon dormeur · 6-10 = Mauvais modéré · >10 = Mauvais sévère'
  },
  {
    id: 'ramsay',
    nom: 'Échelle de Ramsay (Sédation Palliative)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Évalue la profondeur de la sédation lors de la SPCMD (Sédation Profonde et Continue Maintenue jusqu\'au Décès). Objectif légal SPCMD : score 5-6. Loi Claeys-Léonetti 2016.',
    type: 'select_result',
    fields: [
      { id: 'ramsay_score', label: 'Niveau de sédation observé', type: 'select', options: [
        '1 — Anxieux/agité, incoopérant (état d\'éveil actif)',
        '2 — Coopérant, orienté, calme',
        '3 — Répond aux ordres verbaux seulement',
        '4 — Répond vite aux stimuli auditifs intenses ou douloureux',
        '5 — Réponse lente aux stimuli intenses — Objectif SPCMD',
        '6 — Aucune réponse même aux stimuli douloureux — Objectif SPCMD'
      ] }
    ],
    calculate: (v) => {
      const score = parseInt((v.ramsay_score||'0').split(' ')[0]) || 0;
      let interp = '', cls = '';
      if (score <= 2) { interp = 'Sédation légère — patient conscient. Objectif SPCMD non atteint.'; cls = 'warn'; }
      else if (score <= 4) { interp = 'Sédation modérée — répondant aux stimuli. Objectif SPCMD non atteint.'; cls = 'warn'; }
      else { interp = 'Sédation profonde — inconscience stable. Objectif SPCMD atteint (légalement conforme Claeys-Léonetti). Surveiller avec RDOS + ALGOPLUS.'; cls = 'good'; }
      return { score: 'Ramsay ' + score + '/6', interp, cls };
    },
    seuils: 'Objectif SPCMD = 5-6 · 1-2 = Éveil · 3-4 = Sédation partielle · 5-6 = Sédation profonde'
  },
  {
    id: 'acb',
    nom: 'ACB Scale (Anticholinergic Cognitive Burden)',
    domaine: 'Évaluation Gériatrique Standardisée (EGS)',
    description: 'Quantifie la charge anticholinergique médicamenteuse totale. Score total = somme des scores individuels de chaque médicament pris. STOPP v3 : révision obligatoire si ACB ≥ 3.',
    type: 'custom',
    render: (div) => {
      const drugs = {
        'Score 3 (Élevé)': ['Amitriptyline','Clomipramine','Imipramine','Doxépine','Paroxétine','Chlorpromazine','Halopéridol','Olanzapine','Oxybutynine','Toltérodine','Solifénacine','Fésotérodine','Diphénhydramine','Hydroxyzine','Prométhazine','Atropine','Scopolamine','Disopyramide'],
        'Score 2 (Modéré)': ['Amantadine','Cétirizine','Méclizine','Lansoprazole','Mirtazapine','Quétiapine','Loratadine'],
        'Score 1 (Faible)': ['Furosémide','Cimétidine','Ranitidine','Prednisolone','Métoprolol','Codéine','Tramadol','Warfarine','Digoxine','Nifédipine']
      };
      let html = '<div class="calc-glass-box"><div class="calc-group-title">Sélectionner les médicaments du patient</div>';
      html += '<p class="fs-sm" style="color:var(--text2); margin-bottom:12px;">Cocher tous les médicaments pris. Le score ACB total est calculé automatiquement.</p>';
      let idx = 0;
      Object.entries(drugs).forEach(([group, meds]) => {
        html += '<div style="margin-top:10px; font-weight:bold; font-size:0.85rem; color:var(--accent);">' + group + '</div>';
        meds.forEach(med => {
          const score = group.includes('3') ? 3 : group.includes('2') ? 2 : 1;
          html += '<label class="check-container"><input type="checkbox" class="acb-check" data-score="' + score + '" id="acb_' + idx + '"><span class="checkmark"></span>' + med + ' (+' + score + ')</label>';
          idx++;
        });
      });
      html += '</div><div id="acb-result" style="margin-top:16px;"></div>';
      div.innerHTML = html;

      const updateACB = () => {
        const checks = div.querySelectorAll('.acb-check:checked');
        let total = 0;
        checks.forEach(c => total += parseInt(c.dataset.score));
        let msg = '', cls = '';
        if (total === 0) { msg = 'Aucune charge anticholinergique détectée'; cls = 'good'; }
        else if (total <= 2) { msg = 'Charge légère (ACB ' + total + ') — surveillance cognitive recommandée'; cls = 'warn'; }
        else if (total <= 4) { msg = 'Charge modérée à élevée (ACB ' + total + ') — RÉVISION MÉDICAMENTEUSE IMPÉRATIVE (STOPP v3)'; cls = 'danger'; }
        else { msg = 'Charge très élevée (ACB ' + total + ') — doublement du risque de démence. Déprescription urgente.'; cls = 'danger'; }
        const r = div.querySelector('#acb-result');
        if (r) r.innerHTML = '<div class="calc-res-box ' + cls + '"><div class="calc-res-title">Score ACB total = ' + total + '</div><div>' + msg + '</div></div>';
      };

      div.querySelectorAll('.acb-check').forEach(c => c.addEventListener('change', updateACB));
    }
  },
  {
    id: 'sarcopenie',
    nom: 'Sarcopénie — Critères EWGSOP2 (2019)',
    domaine: 'Nutrition & Peau',
    description: 'Diagnostic de sarcopénie selon les critères du European Working Group on Sarcopenia in Older People (2019). Citée dans HAS Dénutrition 2021 et Gériatrie 5e éd.',
    type: 'checklist',
    fields: [
      { id: 'sarc_grip', label: '1. Force de préhension (grip strength)', type: 'select', options: ['0 — Normale (H ≥27 kg / F ≥16 kg)', '1 — Réduite (H <27 kg OU F <16 kg)'] },
      { id: 'sarc_chaise', label: '2. Test lever de chaise × 5 (alternative)', type: 'select', options: ['0 — Normal (≤15 secondes)', '1 — Réduit (>15 secondes ou impossible)'] },
      { id: 'sarc_masse', label: '3. Masse/qualité musculaire (DEXA ou BIA)', type: 'select', options: ['0 — Normale (H ≥7.0 kg/m² / F ≥5.5 kg/m²)', '1 — Réduite (H <7.0 kg/m² / F <5.5 kg/m²)'] },
      { id: 'sarc_vit', label: '4. Vitesse de marche 4 mètres', type: 'select', options: ['0 — Normale (≥0.8 m/s)', '1 — Réduite (<0.8 m/s)'] },
      { id: 'sarc_sppb', label: '5. SPPB (Short Physical Performance Battery)', type: 'select', options: ['0 — Normal (>8/12)', '1 — Réduit (≤8/12 — sarcopénie sévère)'] },
      { id: 'sarc_tug', label: '6. TUG (Timed Up and Go)', type: 'select', options: ['0 — Normal (≤20 secondes)', '1 — Réduit (>20 secondes — sarcopénie sévère)'] }
    ],
    calculate: (v) => {
      const grip = parseInt(v.sarc_grip) || 0;
      const chaise = parseInt(v.sarc_chaise) || 0;
      const masse = parseInt(v.sarc_masse) || 0;
      const vit = parseInt(v.sarc_vit) || 0;
      const sppb = parseInt(v.sarc_sppb) || 0;
      const tug = parseInt(v.sarc_tug) || 0;
      const forceReduite = (grip === 1 || chaise === 1);
      const performanceReduite = (vit === 1 || sppb === 1 || tug === 1);
      let interp = '', cls = '';
      if (!forceReduite && masse === 0) { interp = 'Pas de sarcopénie'; cls = 'good'; }
      else if (!forceReduite && masse === 1) { interp = 'Pré-sarcopénie — renutrition, exercice résistance'; cls = 'warn'; }
      else if (forceReduite && masse === 0) { interp = 'Sarcopénie probable — compléter bilan (BIA/DEXA)'; cls = 'warn'; }
      else if (forceReduite && masse === 1 && !performanceReduite) { interp = 'SARCOPÉNIE CONFIRMÉE — kinésithérapie, protéines 1.2-1.5 g/kg/j, Vitamine D'; cls = 'danger'; }
      else if (forceReduite && masse === 1 && performanceReduite) { interp = 'SARCOPÉNIE SÉVÈRE — prise en charge multidisciplinaire urgente (diét. + kiné + médecin). Risque chute élevé.'; cls = 'danger'; }
      return { score: 'Force: ' + (forceReduite?'↓':'OK') + ' · Masse: ' + (masse?'↓':'OK') + ' · Perf: ' + (performanceReduite?'↓':'OK'), interp, cls };
    },
    seuils: 'EWGSOP2: Force↓ = dépistage · Force↓+Masse↓ = Sarcopénie · +Performance↓ = Sarcopénie sévère'
  },
  {
    id: 'audit',
    nom: 'AUDIT (Alcohol Use Disorders Identification Test)',
    domaine: 'Évaluation Gériatrique Standardisée (EGS)',
    description: 'Test de dépistage de la consommation problématique d\'alcool de l\'OMS. 10 questions. Validé chez la personne âgée. Cité dans Gériatrie 5e éd. (item 73 - addictologie).',
    type: 'checklist',
    fields: [
      { id: 'aud_1', label: '1. Fréquence de consommation d\'alcool', type: 'select', options: ['0 — Jamais', '1 — 1 fois/mois ou moins', '2 — 2-4 fois/mois', '3 — 2-3 fois/semaine', '4 — 4 fois/semaine ou plus'] },
      { id: 'aud_2', label: '2. Nombre de verres standards par occasion', type: 'select', options: ['0 — 1-2 verres', '1 — 3-4 verres', '2 — 5-6 verres', '3 — 7-9 verres', '4 — 10 verres ou plus'] },
      { id: 'aud_3', label: '3. Fréquence de consommation ≥6 verres en une occasion', type: 'select', options: ['0 — Jamais', '1 — Moins d\'une fois/mois', '2 — Chaque mois', '3 — Chaque semaine', '4 — Chaque jour ou presque'] },
      { id: 'aud_4', label: '4. Incapacité à s\'arrêter une fois commencé', type: 'select', options: ['0 — Jamais', '1 — Moins d\'1 fois/mois', '2 — Chaque mois', '3 — Chaque semaine', '4 — Chaque jour ou presque'] },
      { id: 'aud_5', label: '5. Manquements à cause de l\'alcool', type: 'select', options: ['0 — Jamais', '1 — Moins d\'1 fois/mois', '2 — Chaque mois', '3 — Chaque semaine', '4 — Chaque jour ou presque'] },
      { id: 'aud_6', label: '6. Besoin de boire le matin pour se sentir en forme', type: 'select', options: ['0 — Jamais', '1 — Moins d\'1 fois/mois', '2 — Chaque mois', '3 — Chaque semaine', '4 — Chaque jour ou presque'] },
      { id: 'aud_7', label: '7. Culpabilité ou remords après avoir bu', type: 'select', options: ['0 — Jamais', '1 — Moins d\'1 fois/mois', '2 — Chaque mois', '3 — Chaque semaine', '4 — Chaque jour ou presque'] },
      { id: 'aud_8', label: '8. Trous de mémoire après avoir bu', type: 'select', options: ['0 — Jamais', '1 — Moins d\'1 fois/mois', '2 — Chaque mois', '3 — Chaque semaine', '4 — Chaque jour ou presque'] },
      { id: 'aud_9', label: '9. Blessures causées par la consommation d\'alcool', type: 'select', options: ['0 — Non', '2 — Oui, mais pas dans la dernière année', '4 — Oui, dans la dernière année'] },
      { id: 'aud_10', label: '10. Entourage/médecin préoccupé par votre consommation', type: 'select', options: ['0 — Non', '2 — Oui, mais pas dans la dernière année', '4 — Oui, dans la dernière année'] }
    ],
    calculate: (v) => {
      const keys = ['aud_1','aud_2','aud_3','aud_4','aud_5','aud_6','aud_7','aud_8','aud_9','aud_10'];
      const score = keys.reduce((acc, k) => acc + (parseInt(v[k])||0), 0);
      let interp = '', cls = '';
      if (score <= 7) { interp = 'Consommation à faible risque ou abstinence'; cls = 'good'; }
      else if (score <= 12) { interp = 'Consommation à risque — conseil bref recommandé. Rappel : chez le sujet âgé, seuil de risque = 1 verre/j (14 verres/sem.)'; cls = 'warn'; }
      else if (score <= 19) { interp = 'Consommation problématique / abus — intervention structurée, évaluer syndrome de dépendance'; cls = 'danger'; }
      else { interp = 'Dépendance probable — prise en charge spécialisée (addictologie), sevrage médicalisé'; cls = 'danger'; }
      return { score: score + '/40', interp, cls };
    },
    seuils: '≤7 = Faible risque · 8-12 = À risque · 13-19 = Usage nocif · ≥20 = Dépendance probable. Seuil âgé: 14 verres/sem max.'
  },
  {
    id: 'cage',
    nom: 'CAGE (Dépistage Alcool Rapide)',
    domaine: 'Évaluation Gériatrique Standardisée (EGS)',
    description: '4 questions pour le dépistage rapide d\'un usage problématique de l\'alcool. Acronyme : Cut down, Annoyed, Guilty, Eye-opener. Cité dans Gériatrie 5e éd.',
    type: 'checklist',
    fields: [
      { id: 'cage_c', label: 'C — Avez-vous déjà ressenti le besoin de Diminuer votre consommation ?', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'cage_a', label: 'A — Votre entourage vous a-t-il critiqué pour votre consommation ?', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'cage_g', label: 'G — Vous êtes-vous déjà senti coupable de votre consommation ?', type: 'select', options: ['0 — Non', '1 — Oui'] },
      { id: 'cage_e', label: 'E — Avez-vous besoin de boire le matin pour tenir la journée ?', type: 'select', options: ['0 — Non', '1 — Oui'] }
    ],
    calculate: (v) => {
      const score = (['cage_c','cage_a','cage_g','cage_e']).reduce((acc,k)=>acc+(parseInt(v[k])||0),0);
      let interp = '', cls = '';
      if (score <= 1) { interp = 'Dépistage négatif — consommation a priori non problématique'; cls: 'good'; cls = 'good'; }
      else { interp = 'DÉPISTAGE POSITIF (≥2 réponses Oui) — dépendance à l\'alcool probable. Compléter avec AUDIT. Évaluer syndrome de sevrage.'; cls = 'danger'; }
      return { score: score + '/4', interp, cls };
    },
    seuils: '0-1 = Négatif · ≥2 = Dépistage positif (sensibilité 85%, spécificité 89%)'
  },
  {
    id: 'g8',
    nom: 'Score G8 (Dépistage Oncogériatrique)',
    domaine: 'Évaluation Gériatrique Standardisée (EGS)',
    description: 'Outil de dépistage de la fragilité avant traitement oncologique chez les patients ≥70 ans. Score <14 = EGS onco recommandée avant décision thérapeutique.',
    type: 'checklist',
    fields: [
      { id: 'g8_appet', label: '1. Diminution des apports alimentaires (MNA A)', type: 'select', options: ['0 — Anorexie sévère', '1 — Anorexie légère', '2 — Pas de diminution'] },
      { id: 'g8_poids', label: '2. Perte de poids récente', type: 'select', options: ['0 — >3 kg', '1 — Ne sait pas', '2 — 1-3 kg', '3 — Pas de perte de poids'] },
      { id: 'g8_motric', label: '3. Motricité (MNA D)', type: 'select', options: ['0 — Du lit au fauteuil seulement', '1 — Autonome à l\'intérieur', '2 — Sort librement'] },
      { id: 'g8_neuro', label: '4. Problème neuropsychologique (MNA E)', type: 'select', options: ['0 — Démence sévère', '1 — Démence légère ou dépression', '2 — Aucun problème'] },
      { id: 'g8_imc', label: '5. IMC (MNA F)', type: 'select', options: ['0 — <19', '1 — 19-21', '2 — 21-23', '3 — ≥23'] },
      { id: 'g8_meds', label: '6. Prise de plus de 3 médicaments/j', type: 'select', options: ['0 — Oui (>3 médicaments)', '1 — Non (≤3 médicaments)'] },
      { id: 'g8_sante', label: '7. Le patient se considère en meilleure santé que les autres', type: 'select', options: ['0 — Pas aussi bonne', '0.5 — Ne sait pas', '1 — Aussi bonne', '2 — Meilleure'] },
      { id: 'g8_age', label: '8. Âge du patient', type: 'select', options: ['0 — ≥85 ans', '1 — 80-84 ans', '2 — 70-79 ans'] }
    ],
    calculate: (v) => {
      const keys = ['g8_appet','g8_poids','g8_motric','g8_neuro','g8_imc','g8_meds','g8_sante','g8_age'];
      const score = keys.reduce((acc, k) => acc + parseFloat(v[k]||0), 0);
      let interp = '', cls = '';
      if (score >= 15) { interp = 'Patient non fragile — traitement oncologique standard envisageable'; cls = 'good'; }
      else { interp = 'Fragilité détectée (G8 <15) — Évaluation Gériatrique Standardisée onco recommandée AVANT décision thérapeutique'; cls = 'danger'; }
      return { score: score.toFixed(1) + '/17', interp, cls };
    },
    seuils: '<14/17 = Fragilité détectée → EGS onco obligatoire avant décision · ≥15 = Standard'
  },

  {
    id: 'lequesne',
    nom: 'Indice de Lequesne (Hanche & Genou)',
    domaine: 'Équilibre & Marche',
    description: 'Indice algofonctionnel de Lequesne pour l\'évaluation de la sévérité de la coxarthrose et de la gonarthrose. Permet de suivre l\'impact fonctionnel et de discuter l\'indication chirurgicale (prothèse).',
    type: 'checklist',
    fields: [
      { id: 'leq_nuit', label: '1. Douleur nocturne', type: 'select', options: ['0 — Aucune', '1 — Seulement aux mouvements ou certaines postures', '2 — Même immobile sans bouger'] },
      { id: 'leq_derouil', label: '2. Dérouillage matinal', type: 'select', options: ['0 — Aucun ou inférieur à 1 minute', '1 — Pendant quelques minutes', '2 — Plus de 15 minutes'] },
      { id: 'leq_debout', label: '3. Douleur lors du stationnement debout (piétinement 30 min)', type: 'select', options: ['0 — Aucune', '1 — Douleur présente'] },
      { id: 'leq_marche', label: '4. Douleur à la marche', type: 'select', options: ['0 — Aucune', '1 — Après quelque distance', '2 — Dès les premiers pas et allant croissant'] },
      { id: 'leq_assis', label: '5. Gêne lors de la station assise prolongée (2 heures)', type: 'select', options: ['0 — Aucune', '1 — Douleur'] },
      { id: 'leq_dist', label: '6. Distance maximale de marche', type: 'select', options: [
        '0 — Aucune limitation (marche illimitée)',
        '1 — Plus de 1 km mais limitée',
        '2 — Environ 1 km (environ 15 minutes)',
        '3 — 500 à 900 mètres (environ 8 à 15 minutes)',
        '4 — 300 à 500 mètres',
        '5 — 100 à 300 mètres',
        '6 — Moins de 100 mètres'
      ] },
      { id: 'leq_cannes', label: '7. Utilisation d\'aides à la marche', type: 'select', options: ['0 — Aucune', '1 — Une canne ou canne-béquille (+1 pt)', '2 — Deux cannes ou cannes-béquilles (+2 pts)'] },
      { id: 'leq_chaussettes', label: '8. Difficulté : Enfiler des chaussettes par devant', type: 'select', options: ['0 — Sans difficulté', '0.5 — Assez facilement', '1 — Avec difficulté', '1.5 — Avec beaucoup de difficulté', '2 — Impossible'] },
      { id: 'leq_sol', label: '9. Difficulté : Ramasser un objet à terre', type: 'select', options: ['0 — Sans difficulté', '0.5 — Assez facilement', '1 — Avec difficulté', '1.5 — Avec beaucoup de difficulté', '2 — Impossible'] },
      { id: 'leq_escalier', label: '10. Difficulté : Monter et descendre un étage d\'escalier', type: 'select', options: ['0 — Sans difficulté', '0.5 — Assez facilement', '1 — Avec difficulté', '1.5 — Avec beaucoup de difficulté', '2 — Impossible'] },
      { id: 'leq_voiture', label: '11. Difficulté : Sortir d\'une voiture ou transport en commun', type: 'select', options: ['0 — Sans difficulté', '0.5 — Assez facilement', '1 — Avec difficulty', '1.5 — Avec beaucoup de difficulté', '2 — Impossible'] }
    ],
    calculate: (v) => {
      const keys = ['leq_nuit','leq_derouil','leq_debout','leq_marche','leq_assis','leq_dist','leq_cannes','leq_chaussettes','leq_sol','leq_escalier','leq_voiture'];
      const score = keys.reduce((acc, k) => acc + (parseFloat(v[k]) || 0), 0);
      let interp = '', cls = '';
      if (score <= 4) { interp = 'Handicap mineur ou modéré — traitement médical conservateur'; cls = 'good'; }
      else if (score <= 7) { interp = 'Handicap important — adapter traitement antalgique et rééducation'; cls = 'warn'; }
      else if (score <= 10) { interp = 'Handicap très important — réévaluation spécialisée recommandée'; cls = 'danger'; }
      else if (score <= 12) { interp = 'Handicap extrêmement important — INDICATION CHIRURGICALE (PROTHÈSE) À DISCUTER'; cls = 'danger'; }
      else { interp = 'Handicap sévère / destructeur — Indication chirurgicale de prothèse totale fortement recommandée'; cls = 'danger'; }
      return { score: score + ' points', interp, cls };
    },
    seuils: '1-4 = Handicap mineur/modéré · 5-7 = Important · 8-10 = Très important · 11-12 = Extrêmement important · ≥13 = Sévère'
  },
];


// ─────────────────────────────────────────────────────────────────────────────
//  À QUOI SERT CHAQUE SCORE (explication courte affichée dans le détail)
// ─────────────────────────────────────────────────────────────────────────────
const SCORE_UTILITE = {
  egs: 'Bilan global du patient âgé fragile : autonomie, cognition, mobilité, nutrition et sensoriel — base de la prise en charge gériatrique.',
  mms: 'Dépister et suivre un trouble cognitif global (orientation, mémoire, langage, praxies). Ne pose pas seul le diagnostic de démence.',
  moca: 'Dépister un trouble cognitif léger (MCI) plus sensible que le MMS, surtout fonctions exécutives et attention.',
  gds15: 'Dépister une dépression chez la personne âgée en 15 questions oui/non. Outil de screening, pas un diagnostic psychiatrique.',
  gds30: 'Version longue du dépistage de dépression gériatrique (30 items) quand un bilan thymique plus fin est utile.',
  cam: 'Aider au diagnostic clinique de syndrome confusionnel (delirium) au lit du patient.',
  adl: 'Mesurer l’autonomie pour les gestes de base (toilette, habillage, continence, transferts…) — dépendance quotidienne.',
  iadl: 'Mesurer l’autonomie instrumentale à domicile (téléphone, courses, budget, transport…) — capacité à vivre seul.',
  aggir: 'Classer la dépendance en GIR pour l’APA et l’orientation médico-sociale (pas un score « médical » pur).',
  mna_sf: 'Dépister rapidement une dénutrition ou un risque nutritionnel chez le sujet âgé.',
  mna_complet: 'Affiner le statut nutritionnel après un MNA-SF pathologique (évaluation plus complète).',
  braden: 'Estimer le risque d’escarres pour adapter prévention (supports, réfection, nutrition, mobilisations).',
  norton: 'Alternative historique au Braden pour le risque d’escarres (même objectif de prévention).',
  tinetti: 'Évaluer l’équilibre (et risque de chute) pour orienter kinésithérapie et aides techniques.',
  bbs: 'Évaluer finement l’équilibre fonctionnel en 14 tâches — suivi rééducatif et risque de chute.',
  algoplus: 'Repérer une douleur aiguë chez le patient âgé non communicant (observation comportementale).',
  doloplus: 'Évaluer une douleur chronique chez le sujet âgé non communicant.',
  ecpa: 'Évaluer la douleur comportementale chez le patient âgé dément (avant/après antalgie).',
  eva_en: 'Auto-évaluation simple de l’intensité douloureuse (0–10) quand le patient peut répondre.',
  cha2ds2vasc: 'Estimer le risque d’AVC/thromboembolie en fibrillation atriale pour décider d’une anticoagulation.',
  hasbled: 'Estimer le risque hémorragique sous anticoagulant et corriger les facteurs modifiables (pas un frein absolu).',
  grace: 'Stratifier le risque de mortalité après un syndrome coronarien aigu (orientation et intensité de soins).',
  killip: 'Classer la gravité d’une insuffisance cardiaque aiguë post-infarctus au lit du patient.',
  nyha: 'Classer la sévérité fonctionnelle d’une insuffisance cardiaque chronique (dyspnée d’effort).',
  curb65: 'Stratifier la gravité d’une pneumonie communautaire (ambulatoire vs hospitalisation / réa).',
  psi_port: 'Score pronostique plus complet de gravité des pneumonies (classe de risque et lieu de soins).',
  wells_ep: 'Estimer la probabilité clinique d’embolie pulmonaire avant d’enchaîner D-dimères / angioscanner.',
  wells_tvp: 'Estimer la probabilité clinique de thrombose veineuse profonde avant écho-Doppler.',
  geneva_ep: 'Alternative au Wells pour la probabilité clinique d’embolie pulmonaire.',
  qsofa: 'Alerte rapide de sepsis sévère au lit (tachypnée, hypotension, troubles de conscience).',
  sofa: 'Quantifier la dysfonction d’organes (sepsis / soins intensifs) et suivre l’évolution.',
  news2: 'Détecter précocement une détérioration clinique (paramètres vitaux) et déclencher une escalade.',
  glasgow: 'Évaluer la conscience / profondeur de coma (neurologie, traumatisme, urgence).',
  charlson: 'Estimer le fardeau de comorbidités et la survie approximative à 10 ans (pronostic global).',
  child_pugh: 'Classer la sévérité d’une cirrhose (pronostic, chirurgie, gestes invasifs).',
  meld: 'Estimer le risque de décès à court terme en maladie hépatique avancée (priorisation greffe).',
  nihss: 'Mesurer la sévérité clinique d’un AVC ischémique (thrombolyse, thrombectomie, suivi).',
  tug: 'Dépister un risque de chute / limite de mobilité en chronométrant lever + marche 3 m + assise.',
  sppb: 'Mesurer la performance physique globale (équilibre, marche, lever de chaise) et la fragilité motrice.',
  barthel: 'Suivre l’indépendance fonctionnelle en rééducation (plus granulaire que les ADL de Katz).',
  fab: 'Dépister une dysfonction frontale / exécutive (DFT, Parkinson, syndrome dysexécutif).',
  npi: 'Inventorier les troubles psycho-comportementaux de la démence et leur retentissement aidant.',
  cdr: 'Stadier globalement une démence (très légère → sévère) à partir de l’entretien clinique.',
  phq9: 'Dépister et suivre une dépression (auto-questionnaire DSM) en soins primaires ou gériatrie.',
  four_at: 'Dépister rapidement un delirium en urgence / gériatrie aiguë (outil court validé).',
  frax: 'Estimer le risque fracturaire à 10 ans pour décider d’une densitométrie / traitement ostéoporose.',
  nrs2002: 'Dépister le risque nutritionnel dès l’admission hospitalière (alerte dénutrition).',
  dn4: 'Repérer une composante neuropathique de la douleur pour adapter le traitement.',
  psqi: 'Évaluer la qualité du sommeil sur le dernier mois (insomnie, fragmentation, retentissement).',
  ramsay: 'Suivre la profondeur de sédation (soins palliatifs / sédation contrôlée).',
  acb: 'Quantifier la charge anticholinergique des traitements (risque cognitif, chute, confusion).',
  sarcopenie: 'Orienter le diagnostic de sarcopénie (force, masse, performance) selon EWGSOP2.',
  audit: 'Dépister un usage problématique d’alcool (outil OMS détaillé, 10 questions).',
  cage: 'Dépistage ultra-rapide d’un problème d’alcool en 4 questions (alerte, pas quantification).',
  g8: 'Dépister la fragilité oncogériatrique avant un traitement cancer — indique si EGS complète utile.',
  lequesne: 'Mesurer la sévérité algofonctionnelle d’une coxarthrose ou gonarthrose (indication prothèse, suivi).'
};

/** Références manuel CNEG + complément d’interprétation (liens cliquables vers chapitres) */
const SCORE_REFS = {
  egs: { chapters: ['ch2', 'ch3'], detail: 'L’EGS structure le raisonnement gériatrique multi-domaine. Un domaine pathologique oriente vers l’échelle dédiée (ADL, MMS, MNA, Tinetti…).', source: 'CNEG 5e · raisonnement gériatrique & autonomie' },
  mms: { chapters: ['ch9'], detail: 'Seuils usuels : ≥24–26 normal selon scolarité ; 18–23 trouble modéré ; <18 sévère. Toujours croiser avec le retentissement (IADL) et éliminer un delirium (CAM/4AT).', source: 'CNEG 5e · troubles neurocognitifs' },
  moca: { chapters: ['ch9'], detail: 'Souvent plus sensible que le MMS pour le MCI. Seuil classique ≈26/30 (ajuster scolarité). Un MoCA bas justifie bilan étiologique, pas un diagnostic de démence isolé.', source: 'CNEG 5e · troubles neurocognitifs' },
  gds15: { chapters: ['ch10'], detail: '0–4 : pas de dépression probable ; 5–9 : dépression légère possible ; ≥10 : dépression modérée/sévère à confirmer. Dépistage uniquement — vérifier iatrogénie, douleur, deuil, hypothyroïdie, confusion.', source: 'Yesavage · CNEG 5e · dépression' },
  gds30: { chapters: ['ch10'], detail: 'Version longue (0–9 normal ; 10–19 légère ; ≥20 sévère selon usages). Même logique que le GDS-15 : orientation clinique, pas diagnostic formalisé.', source: 'Yesavage · CNEG 5e · dépression' },
  cam: { chapters: ['ch11'], detail: 'CAM positif si (début aigu + fluctuation) ET inattention ET (pensée désorganisée OU altération conscience). Urgence : chercher cause (infection, iatrogénie, rétention, douleur, sevrage).', source: 'CNEG 5e · syndrome confusionnel' },
  adl: { chapters: ['ch3'], detail: '6 items Katz. Score bas = dépendance pour les gestes de base → besoins en aides humaines / institution. Compléter par IADL pour le domicile.', source: 'CNEG 5e · évaluation de l’autonomie' },
  iadl: { chapters: ['ch3'], detail: 'Lawton : téléphone, transports, budget, médicaments… Décline souvent avant les ADL. Utile pour maintien à domicile et charge de l’aidant.', source: 'CNEG 5e · évaluation de l’autonomie' },
  aggir: { chapters: ['ch3', 'ch4'], detail: 'Détermine le GIR (APA, orientation). Ce n’est pas un score « médical » d’acuité : il décrit la dépendance pour l’aide sociale.', source: 'CNEG 5e · autonomie / protection' },
  mna_sf: { chapters: ['ch14'], detail: '≥12 : statut normal ; 8–11 : risque de dénutrition ; ≤7 : dénutrition. Enchaîner MNA complet ou bilan albuminémie/IMC/perte de poids selon le contexte.', source: 'HAS / CNEG 5e · nutrition' },
  mna_complet: { chapters: ['ch14'], detail: 'Affinage du statut nutritionnel. Oriente enrichissement, CNO, enquête étiologique (dépression, dentition, dépendances, pathologies).', source: 'CNEG 5e · nutrition' },
  braden: { chapters: ['ch13'], detail: 'Plus le score est bas, plus le risque d’escarre est élevé (souvent <18 = risque). Adapter supports, réfections, nutrition, mobilisation.', source: 'CNEG 5e · alitement / escarres' },
  norton: { chapters: ['ch13'], detail: 'Alternative au Braden. Score bas = risque. Même finalité : prévention cutanée active.', source: 'CNEG 5e · alitement / escarres' },
  tinetti: { chapters: ['ch12'], detail: 'Équilibre (+ marche selon version). Score bas = risque de chute élevé → bilan multifactoriel (médicaments, vision, orthostatisme, environnement).', source: 'CNEG 5e · chutes et marche' },
  bbs: { chapters: ['ch12'], detail: 'Berg : 14 tâches. <45 souvent associé à un risque de chute accru. Suivi de rééducation utile.', source: 'CNEG 5e · chutes et marche' },
  algoplus: { chapters: ['ch8'], detail: 'Douleur aiguë non communicant : ≥2 comportements évocateurs → traiter comme douleur et réévaluer. Ne remplace pas l’examen clinique.', source: 'CNEG 5e · douleur' },
  doloplus: { chapters: ['ch8'], detail: 'Douleur chronique comportementale. Variation du score sous antalgie plus informative qu’une valeur isolée.', source: 'CNEG 5e · douleur' },
  ecpa: { chapters: ['ch8'], detail: 'Observation avant/après soins. Utile chez le patient dément pour guider l’antalgie.', source: 'CNEG 5e · douleur' },
  eva_en: { chapters: ['ch8'], detail: '0–10 si le patient comprend l’échelle. ≥4 souvent seuil d’intervention ; croiser avec retentissement et causes.', source: 'CNEG 5e · douleur' },
  cha2ds2vasc: { chapters: ['ch16'], detail: 'FA non valvulaire : anticoagulation si score ≥2 (H) / ≥3 (F) en général. Toujours balancer avec HAS-BLED et risque de chute (décision partagée).', source: 'ESC / CNEG · iatrogénie & cardio du sujet âgé' },
  hasbled: { chapters: ['ch16'], detail: '≥3 = risque hémorragique élevé : corriger HTA, alcool, AINS, INR labile. Ne contre-indique pas automatiquement l’anticoagulation.', source: 'ESC / CNEG · prescription du sujet âgé' },
  grace: { chapters: ['ch16'], detail: 'Risque post-SCA pour intensité de prise en charge. Interpréter avec âge, fragilité et objectifs de soins.', source: 'Cardiologie gériatrique / CNEG' },
  killip: { chapters: ['ch16'], detail: 'Classe clinique d’OAP/IC post-IDM au lit. Classe élevée = gravité et monitoring rapproché.', source: 'Cardiologie / CNEG' },
  nyha: { chapters: ['ch16'], detail: 'Dyspnée d’effort en IC chronique. Oriente traitements, réadaptation et objectifs fonctionnels.', source: 'ESC HF / CNEG' },
  curb65: { chapters: ['ch16'], detail: '0–1 souvent ambulatoire ; 2 hospitalisation ; ≥3 risque élevé / réa selon état. Adapter à la fragilité du sujet âgé.', source: 'Infectiologie / CNEG' },
  psi_port: { chapters: ['ch16'], detail: 'Classes de risque de pneumonie (lieu de soins). Plus complet que CURB-65 mais plus lourd à calculer.', source: 'Infectiologie / CNEG' },
  wells_ep: { chapters: ['ch16'], detail: 'Probabilité clinique d’EP avant imagerie. Oriente D-dimères vs angioscanner selon algorithme local.', source: 'Recommandations EP / CNEG' },
  wells_tvp: { chapters: ['ch16'], detail: 'Probabilité de TVP avant écho-Doppler. Score bas + D-dimères négatifs : TVP peu probable.', source: 'Recommandations TVP / CNEG' },
  geneva_ep: { chapters: ['ch16'], detail: 'Alternative au Wells pour l’EP. Même logique de pré-test avant imagerie.', source: 'Recommandations EP / CNEG' },
  qsofa: { chapters: ['ch11', 'ch16'], detail: '≥2 critères : alerte sepsis / gravité. Sensibilité limitée : ne pas rassurer à tort chez le sujet âgé.', source: 'Sepsis-3 / urgence gériatrique' },
  sofa: { chapters: ['ch16'], detail: 'Dysfonction d’organes (réa). Variation du SOFA plus utile que la valeur brute pour le suivi.', source: 'Sepsis-3' },
  news2: { chapters: ['ch16'], detail: 'Alerte précoce sur constantes. Score élevé → escalade de surveillance (protocole local).', source: 'NEWS2 / urgence' },
  glasgow: { chapters: ['ch11', 'ch9'], detail: 'Conscience : 15 normal ; ≤8 intubation souvent discutée. Chez le sujet âgé, croiser avec status basal et causes réversibles.', source: 'Neurologie / CNEG' },
  charlson: { chapters: ['ch2', 'ch16'], detail: 'Charge de comorbidités et survie approximative. Utile en discussion pronostique, pas comme seul critère de non-traitement.', source: 'CNEG · raisonnement gériatrique' },
  child_pugh: { chapters: ['ch16'], detail: 'A/B/C : sévérité de cirrhose (chirurgie, gestes, pronostic).', source: 'Hépatologie' },
  meld: { chapters: ['ch16'], detail: 'Risque de décès à court terme / priorisation greffe. Interpréter avec dialyse et sodium (MELD-Na).', source: 'Hépatologie' },
  nihss: { chapters: ['ch9'], detail: 'Sévérité d’AVC. Oriente thrombolyse/thrombectomie selon délais et imagerie — décider en filière AVC.', source: 'Neurologie vasculaire' },
  tug: { chapters: ['ch12'], detail: '<12 s souvent rassurant ; >20 s risque élevé / sarcopénie possible. Intégrer au bilan de chute multifactoriel.', source: 'CNEG 5e · chutes et marche' },
  sppb: { chapters: ['ch12', 'ch14'], detail: '≤8 évoque fragilité physique ; 0–3 performance très altérée. Utile sarcopénie (EWGSOP2) et suivi rééducation.', source: 'CNEG · chutes / nutrition-sarcopénie' },
  barthel: { chapters: ['ch3'], detail: 'Indépendance en rééducation (0–100). Complète les ADL Katz pour le suivi fonctionnel.', source: 'CNEG 5e · autonomie' },
  fab: { chapters: ['ch9'], detail: 'Fonctions exécutives/frontales. Score bas oriente vers DFT, Parkinson, syndrome dysexécutif — croiser avec clinique.', source: 'CNEG 5e · troubles neurocognitifs' },
  npi: { chapters: ['ch9', 'ch10'], detail: 'SPC de la démence (agitation, idées délirantes, apathie…). Mesure aussi le fardeau aidant — cible de prise en charge non médicamenteuse d’abord.', source: 'CNEG 5e · TNC / humeur' },
  cdr: { chapters: ['ch9'], detail: 'Stadification globale de démence (0 à 3). Guide objectifs de soins, aidants et traitements symptomatiques.', source: 'CNEG 5e · troubles neurocognitifs' },
  phq9: { chapters: ['ch10'], detail: 'Auto-questionnaire dépression. ≥10 souvent seuil de dépression majeure possible — confirmer cliniquement (et suicidabilité).', source: 'CNEG 5e · dépression' },
  four_at: { chapters: ['ch11'], detail: '≥4 : delirium probable ; 1–3 : possible déficit cognitif. Outil court validé en gériatrie aiguë.', source: 'CNEG 5e · syndrome confusionnel' },
  frax: { chapters: ['ch6'], detail: 'Risque fracturaire à 10 ans. Oriente DXA / traitement anti-ostéoporotique selon seuils nationaux et chute.', source: 'CNEG 5e · ostéoporose et fractures' },
  nrs2002: { chapters: ['ch14'], detail: 'Dépistage nutritionnel d’admission. Score élevé → plan nutritionnel précoce.', source: 'CNEG 5e · nutrition' },
  dn4: { chapters: ['ch8'], detail: '≥4/10 : composante neuropathique probable → adapter (antidépresseurs IRSN/tricycliques bas dose, gabapentinoïdes selon terrain).', source: 'CNEG 5e · douleur' },
  psqi: { chapters: ['ch10', 'ch16'], detail: 'Qualité de sommeil. Score élevé → hygiène de sommeil, iatrogénie (benzodiazépines), dépression, SAOS.', source: 'CNEG · dépression / prescription' },
  ramsay: { chapters: ['ch17'], detail: 'Profondeur de sédation (palliatif). Viser le niveau de confort décidé collégialement, réévaluer souvent.', source: 'CNEG 5e · soins palliatifs' },
  acb: { chapters: ['ch16', 'ch9', 'ch11'], detail: 'Charge anticholinergique cumulée : confusion, chute, constipation, rétention. Déprescrire si possible.', source: 'CNEG 5e · prescrire chez le PA' },
  sarcopenie: { chapters: ['ch14', 'ch12'], detail: 'EWGSOP2 : force → confirmation masse → sévérité performance. Oriente protéines, résistance, bilan étiologique.', source: 'EWGSOP2 / CNEG nutrition & marche' },
  audit: { chapters: ['ch16'], detail: 'Usage d’alcool problématique. Chez le PA, sevrage et interactions médicamenteuses sont à anticiper.', source: 'OMS AUDIT / CNEG prescription' },
  cage: { chapters: ['ch16'], detail: '≥2 réponses positives : suspicion forte. Dépistage ultra-rapide, confirmer avec AUDIT/clinique.', source: 'CAGE / CNEG' },
  g8: { chapters: ['ch2', 'ch3'], detail: '≤14 : fragilité oncogériatrique probable → EGS complète avant traitement cancer lourd.', source: 'Oncogériatrie / CNEG raisonnement' },
  lequesne: { chapters: ['ch7'], detail: 'Indice algofonctionnel hanche/genou. Scores élevés oriente prise en charge (dont discussion prothèse).', source: 'CNEG 5e · arthrose' }
};

const CHAPTER_LABELS = {
  ch1: 'Ch. 1 — Comprendre le vieillissement',
  ch2: 'Ch. 2 — Raisonnement gériatrique',
  ch3: 'Ch. 3 — Évaluation de l\'autonomie',
  ch4: 'Ch. 4 — Éthique et protection',
  ch5: 'Ch. 5 — Troubles sensoriels',
  ch6: 'Ch. 6 — Ostéoporose et fractures',
  ch7: 'Ch. 7 — Arthrose',
  ch8: 'Ch. 8 — Douleur',
  ch9: 'Ch. 9 — Troubles neurocognitifs',
  ch10: 'Ch. 10 — Dépression',
  ch11: 'Ch. 11 — Syndrome confusionnel',
  ch12: 'Ch. 12 — Chutes et marche',
  ch13: 'Ch. 13 — Alitement',
  ch14: 'Ch. 14 — Nutrition',
  ch15: 'Ch. 15 — Incontinence urinaire',
  ch16: 'Ch. 16 — Prescrire chez le patient âgé',
  ch17: 'Ch. 17 — Soins palliatifs',
  ch18: 'Ch. 18 — Mini-dossiers',
  ch19: 'Ch. 19 — Key-features',
  ch20: 'Ch. 20 — Questions isolées'
};

// Enrichit chaque calculateur avec utilite si absente
try {
  (typeof CALCULATEURS !== 'undefined' ? CALCULATEURS : []).forEach((c) => {
    if (c && !c.utilite && SCORE_UTILITE[c.id]) c.utilite = SCORE_UTILITE[c.id];
    if (c && !c.utilite && c.description) c.utilite = c.description;
  });
} catch (_) {}

// ─────────────────────────────────────────────────────────────────────────────
//  MOTEUR DE RENDU INTERACTIF (MEDICALCUL)
// ─────────────────────────────────────────────────────────────────────────────

const Medicalcul = {
  currentDomain: 'all',
  currentSearch: '',
  currentResultText: '',

  /** Normalise score / interprétation / classe CSS pour tous les calculateurs */
  normalizeResult(result, calc) {
    if (result == null) return null;
    if (typeof result !== 'object') {
      return { score: result, interp: String(result), cls: 'info', max: calc && calc.max };
    }
    const clsRaw = String(result.cls || result.cat || 'normal').toLowerCase();
    const clsMap = { good: 'normal', warn: 'warning', warning: 'warning', danger: 'danger', normal: 'normal', info: 'info' };
    const cls = clsMap[clsRaw] || 'normal';
    const score = result.score != null ? result.score : result.total;
    let interp = result.interp || result.desc || result.interpretation || result.message || '';
    interp = String(interp || '').trim();
    if (!interp) interp = 'Interprétation non renseignée pour cette valeur — se référer aux repères cliniques ci-dessous ou au référentiel.';
    const max = result.max != null ? result.max : (calc && calc.max != null ? calc.max : null);
    return { score, interp, cls, max, raw: result };
  },

  init() {
    try {
      const list = typeof CALCULATEURS !== 'undefined' ? CALCULATEURS
        : (typeof window !== 'undefined' ? window.CALCULATEURS : null);
      if (!list || !list.length) {
        const container = document.getElementById('calc-list');
        if (container) {
          container.innerHTML = `
            <div class="empty" style="text-align:center;padding:40px 20px;">
              <div class="empty-text" style="font-weight:700;">Calculateurs indisponibles</div>
              <div class="empty-hint">Rechargez l'application (Ctrl+F5) ou videz le cache PWA.</div>
            </div>`;
        }
        return;
      }
      const searchInput = document.getElementById('calcSearch');
      if (searchInput && searchInput.parentNode) {
        searchInput.value = this.currentSearch || '';
        if (typeof searchInput.cloneNode === 'function') {
          const newSearch = searchInput.cloneNode(true);
          searchInput.parentNode.replaceChild(newSearch, searchInput);
          newSearch.addEventListener('input', (e) => {
            this.currentSearch = e.target.value.toLowerCase().trim();
            this.renderList();
          });
        } else if (!searchInput._mcBound) {
          searchInput._mcBound = true;
          searchInput.addEventListener('input', (e) => {
            this.currentSearch = e.target.value.toLowerCase().trim();
            this.renderList();
          });
        }
      }
      this.currentDomain = this.currentDomain || 'all';
      this.renderList();
      this.showListContainer();
    } catch (err) {
      console.error('[Medicalcul.init]', err);
      const container = document.getElementById('calc-list');
      if (container) {
        container.innerHTML = `<div class="empty"><div class="empty-text">Erreur d'affichage des scores</div><div class="empty-hint">${String(err.message || err)}</div></div>`;
      }
    }
  },

  showListContainer() {
    const listCont = document.getElementById('calc-list-container');
    const detailCont = document.getElementById('calc-detail-container');
    if (listCont) listCont.style.display = 'block';
    if (detailCont) detailCont.style.display = 'none';
  },

  filterByDomain(domain, btn) {
    this.currentDomain = domain;
    document.querySelectorAll('.calc-filt-btn').forEach(b => b.classList.remove('active'));
    if (btn) {
      btn.classList.add('active');
    } else {
      // Find the button with this domain name
      const buttons = document.querySelectorAll('.calc-filt-btn');
      buttons.forEach(b => {
        if (b.textContent.includes(domain) || (domain === 'all' && b.textContent === 'Tous')) {
          b.classList.add('active');
        }
      });
    }
    this.renderList();
  },

  openScore(id) {
    this.showDetail(id);
  },

  /** Ouvre le chapitre du manuel correspondant (depuis un score) */
  openChapter(chId) {
    try {
      if (typeof showCh === 'function') showCh(chId);
      else if (typeof window !== 'undefined' && typeof window.showCh === 'function') window.showCh(chId);
      else if (typeof sw === 'function') sw('home');
    } catch (e) {
      console.error('[Medicalcul.openChapter]', chId, e);
    }
  },

  getRefs(calcId) {
    return (typeof SCORE_REFS !== 'undefined' && SCORE_REFS[calcId]) || null;
  },

  renderChapterLinksHtml(calcId, helperEsc) {
    const refs = this.getRefs(calcId);
    if (!refs || !refs.chapters || !refs.chapters.length) return '';
    const labels = (typeof CHAPTER_LABELS !== 'undefined') ? CHAPTER_LABELS : {};
    const links = refs.chapters.map((chId) => {
      const label = labels[chId] || chId;
      return `<button type="button" class="calc-ch-link" onclick="event.stopPropagation();Medicalcul.openChapter('${chId}')">${helperEsc(label)}</button>`;
    }).join('');
    return `<div class="calc-ch-links"><span class="calc-ch-links-label">Voir dans le manuel</span><div class="calc-ch-links-row">${links}</div></div>`;
  },

  rememberRecent(id) {
    try {
      const existing = JSON.parse(localStorage.getItem('medicalcul_recent')) || [];
      const recent = [id, ...existing.filter(x => x !== id)].slice(0, 3);
      localStorage.setItem('medicalcul_recent', JSON.stringify(recent));
    } catch (_) {}
  },

  isFavorite(id) {
    try {
      const favs = JSON.parse(localStorage.getItem('medicalcul_favorites')) || [];
      return favs.includes(id);
    } catch (e) {
      return false;
    }
  },

  toggleFavorite(id, event) {
    if (event) {
      event.stopPropagation();
    }
    try {
      let favs = JSON.parse(localStorage.getItem('medicalcul_favorites')) || [];
      const idx = favs.indexOf(id);
      if (idx > -1) {
        favs.splice(idx, 1);
      } else {
        favs.push(id);
      }
      localStorage.setItem('medicalcul_favorites', JSON.stringify(favs));
      
      // Update UI button in detail view if it exists
      const btn = document.getElementById(`btn-fav-${id}`);
      if (btn) {
        const isFav = favs.includes(id);
        btn.innerHTML = isFav ? '⭐ Favori' : '☆ Épingler';
        btn.style.color = isFav ? '#eab308' : '';
      }
      
      this.renderList();
    } catch (e) {
      console.error(e);
    }
  },

  resetCalculator(id) {
    this.showDetail(id);
  },

  copyResultToClipboard(id) {
    const resDiv = document.getElementById('calc-result') || document.getElementById('acb-result');
    if (!resDiv || !resDiv.querySelector('.calc-res-box')) {
      alert("Veuillez d'abord remplir le questionnaire pour générer un résultat.");
      return;
    }
    
    const calc = CALCULATEURS.find(c => c.id === id);
    const titleText = resDiv.querySelector('.calc-res-title')?.innerText || '';
    const descText = resDiv.querySelector('.calc-res-desc')?.innerText || resDiv.querySelector('.calc-res-box > div:last-child')?.innerText || '';
    
    // For EGS report, there is a textarea, let's copy its content instead if it exists
    const egsTextarea = document.getElementById('egs-report-text');
    let textToCopy = '';
    if (egsTextarea) {
      textToCopy = egsTextarea.value;
    } else {
      textToCopy = `[Gériatrie - ${calc ? calc.nom : id}]\n${titleText}\n${descText}`.trim();
    }
    
    const el = document.createElement('textarea');
    el.value = textToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    
    // Animate copy button
    const btn = document.querySelector('.calc-copy-btn');
    if (btn) {
      const oldText = btn.innerHTML;
      btn.innerHTML = '✅ Copié !';
      btn.style.background = 'var(--green)';
      btn.style.borderColor = 'var(--green)';
      btn.style.color = '#ffffff';
      setTimeout(() => {
        btn.innerHTML = oldText;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 1500);
    }
  },

  renderCalcCardHtml(c, isStarred) {
    const helperEsc = (s) => typeof esc === 'function' ? esc(s) : s;
    const domainCodes = {
      'Évaluation Gériatrique Standardisée (EGS)': 'EGS',
      'Cognition & Humeur': 'COG',
      'Autonomie': 'ADL',
      'Nutrition & Peau': 'NUT',
      'Équilibre & Marche': 'MOB',
      'Cardiovasculaire': 'CV',
      'Pneumologie': 'PNE',
      'Urgences & Soins Intensifs': 'URG',
      'Évaluation de la Douleur': 'DOL'
    };
    const code = domainCodes[c.domaine] || 'CALC';
    const shortDomain = String(c.domaine || 'Outil clinique').replace('Évaluation Gériatrique Standardisée (EGS)', 'Évaluation gériatrique');
    
    const purpose = helperEsc((c.utilite || (typeof SCORE_UTILITE !== 'undefined' && SCORE_UTILITE[c.id]) || c.description || '').slice(0, 110));
    return `
      <article class="calc-card calc-card-premium" onclick="Medicalcul.showDetail('${c.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();Medicalcul.showDetail('${c.id}')}" aria-label="Ouvrir ${helperEsc(c.nom)}">
        <div class="calc-card-topline">
          <span class="calc-domain-code">${code}</span>
          <span class="calc-domain-name">${helperEsc(shortDomain)}</span>
          <button class="calc-star-btn ${isStarred ? 'is-starred' : ''}" onclick="Medicalcul.toggleFavorite('${c.id}', event)" title="${isStarred ? 'Retirer des favoris' : 'Épingler'}" aria-label="${isStarred ? 'Retirer des favoris' : 'Épingler'}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.75 5.57 6.15.9-4.45 4.33 1.05 6.12L12 17.03l-5.5 2.89 1.05-6.12L3.1 9.47l6.15-.9L12 3Z"/></svg>
          </button>
        </div>
        <div class="calc-card-body">
          <h3 class="calc-card-nom">${helperEsc(c.nom)}</h3>
          <p class="calc-card-desc">${purpose}${purpose.length >= 110 ? '…' : ''}</p>
        </div>
        <footer class="calc-card-footer"><span>Calcul guidé</span><span>Ouvrir <b aria-hidden="true">→</b></span></footer>
      </article>
    `;
  },

  renderList() {
    const container = document.getElementById('calc-list');
    if (!container) return;

    const source = (typeof CALCULATEURS !== 'undefined' && CALCULATEURS.length)
      ? CALCULATEURS
      : (window.CALCULATEURS || []);
    let filtered = Array.isArray(source) ? source.slice() : [];

    // Filter by domain (exact, then fuzzy accent-insensitive)
    if (this.currentDomain && this.currentDomain !== 'all') {
      const exact = filtered.filter(c => c.domaine === this.currentDomain);
      if (exact.length) {
        filtered = exact;
      } else {
        const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const d = norm(this.currentDomain);
        filtered = filtered.filter(c => {
          const cd = norm(c.domaine);
          return cd === d || cd.includes(d) || d.includes(cd.split(' ')[0] || '');
        });
      }
    }

    // Filter by search query
    if (this.currentSearch) {
      const q = this.currentSearch;
      filtered = filtered.filter(c =>
        (c.nom || '').toLowerCase().includes(q) ||
        (c.domaine || '').toLowerCase().includes(q) ||
        (c.description || '').toLowerCase().includes(q) ||
        (c.id || '').toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty" style="text-align:center; padding:40px 20px; background:var(--bg-card); border-radius:12px; border:1px dashed var(--glass-border);">
          <div class="empty-icon" style="font-size:2.5rem; margin-bottom:12px;">🔍</div>
          <div class="empty-text" style="font-weight:700; color:var(--text); margin-bottom:4px;">Aucun calculateur trouvé</div>
          <div class="empty-hint" style="font-size:0.85rem; color:var(--text2);">Modifiez vos critères de recherche ou de filtre</div>
        </div>
      `;
      return;
    }

    // Sort alphabetically by name
    filtered.sort((a, b) => a.nom.localeCompare(b.nom));

    // Get favorites
    let favs = [];
    try {
      favs = JSON.parse(localStorage.getItem('medicalcul_favorites')) || [];
    } catch (e) {}

    let html = '';
    
    // Show Favorites section at the top
    if (this.currentDomain === 'all' && !this.currentSearch && favs.length > 0) {
      const favCalcs = filtered.filter(c => favs.includes(c.id));
      if (favCalcs.length > 0) {
        html += `
          <div class="calc-fav-section" style="margin-bottom:20px;">
            <div style="font-size:0.85rem; font-weight:700; color:var(--text3); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:10px; display:flex; align-items:center; gap:6px;">
              <span>⭐ Favoris épinglés</span>
              <span style="background:var(--accent-soft); color:var(--accent); font-size:0.75rem; padding:1px 6px; border-radius:10px;">${favCalcs.length}</span>
            </div>
            <div class="calc-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:12px; margin-bottom:16px;">
              ${favCalcs.map(c => this.renderCalcCardHtml(c, true)).join('')}
            </div>
            <div style="border-bottom: 1px dashed var(--glass-border); margin:20px 0 16px;"></div>
          </div>
        `;
      }
    }

    // Les derniers scores ouverts permettent de reprendre une consultation sans refaire une recherche.
    if (this.currentDomain === 'all' && !this.currentSearch) {
      let recentIds = [];
      try { recentIds = JSON.parse(localStorage.getItem('medicalcul_recent')) || []; } catch (_) {}
      const recentCalcs = recentIds.map(id => filtered.find(c => c.id === id)).filter(Boolean);
      if (recentCalcs.length) {
        html += `
          <div class="calc-recent-section">
            <div class="calc-section-label"><span>Reprendre</span><small>Derniers outils ouverts</small></div>
            <div class="calc-grid calc-recent-grid">
              ${recentCalcs.map(c => this.renderCalcCardHtml(c, favs.includes(c.id))).join('')}
            </div>
          </div>`;
      }
    }

    const titleText = this.currentDomain === 'all' ? 'Tous les calculateurs' : this.currentDomain;
    html += `
      <div class="calc-all-section">
        <div style="font-size:0.85rem; font-weight:700; color:var(--text3); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:10px;">
          ${titleText} (${filtered.length})
        </div>
        <div class="calc-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:12px;">
          ${filtered.map(c => this.renderCalcCardHtml(c, favs.includes(c.id))).join('')}
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  showDetail(id) {
    try {
      this._showDetailInner(id);
    } catch (err) {
      console.error('[Medicalcul.showDetail]', id, err);
      const detailCont = document.getElementById('calc-detail-container');
      const detailContent = document.getElementById('calc-detail-content');
      const listCont = document.getElementById('calc-list-container');
      if (listCont) listCont.style.display = 'none';
      if (detailCont) detailCont.style.display = 'block';
      if (detailContent) {
        detailContent.innerHTML = `
          <button type="button" class="calc-back-btn" onclick="Medicalcul.showListContainer()" style="margin-bottom:12px;color:var(--accent);font-weight:600;">← Retour à la liste</button>
          <div class="empty" style="padding:24px;text-align:center;">
            <div class="empty-text" style="font-weight:700;">Impossible d'ouvrir ce score</div>
            <div class="empty-hint" style="margin-top:8px;">${String(err && err.message ? err.message : err)}</div>
            <div class="empty-hint" style="margin-top:6px;font-size:0.8rem;">ID: ${id}</div>
          </div>`;
      }
    }
  },

  _showDetailInner(id) {
    const source = (typeof CALCULATEURS !== 'undefined' && CALCULATEURS.length)
      ? CALCULATEURS
      : (window.CALCULATEURS || []);
    const calc = source.find(c => c.id === id);
    if (!calc) throw new Error('Calculateur introuvable: ' + id);
    this.rememberRecent(id);

    const listCont = document.getElementById('calc-list-container');
    const detailCont = document.getElementById('calc-detail-container');
    const detailContent = document.getElementById('calc-detail-content');
    if (!detailContent) throw new Error('Zone détail absente (#calc-detail-content)');

    if (listCont) listCont.style.display = 'none';
    if (detailCont) detailCont.style.display = 'block';
    try { window.scrollTo(0, 0); } catch (_) {}

    const helperEsc = (s) => {
      if (typeof esc === 'function') return esc(s);
      return String(s ?? '')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
    const isFav = this.isFavorite(id);

    // Normalize type: checklist+fields → select form; select_result → select
    const hasItems = Array.isArray(calc.items) && calc.items.length > 0;
    const hasFields = Array.isArray(calc.fields) && calc.fields.length > 0;
    const hasGroups = Array.isArray(calc.groups) && calc.groups.length > 0;
    const hasQuestions = Array.isArray(calc.questions) && calc.questions.length > 0;
    let effectiveType = calc.type;
    if (effectiveType === 'checklist' && !hasItems && hasFields) effectiveType = 'select';
    if (effectiveType === 'select_result') effectiveType = 'select';
    if (effectiveType === 'questions' && hasQuestions) effectiveType = 'questions';
    else if (effectiveType === 'questions' && hasItems) effectiveType = 'checklist';

    let html = `
      <div class="calc-detail-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:20px; border-bottom:1px solid var(--glass-border); padding-bottom:12px;">
        <button class="calc-back-btn" onclick="Medicalcul.showListContainer()" style="display:flex; align-items:center; gap:6px; color:var(--accent); font-weight:600; padding:6px 12px; border-radius:8px; background:var(--bg-card); border:1px solid var(--glass-border);">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:2px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Retour
        </button>
        <div class="calc-detail-actions" style="display:flex; gap:8px; align-items:center;">
          <button class="calc-action-btn" onclick="Medicalcul.resetCalculator('${id}')" style="display:flex; align-items:center; gap:6px; font-size:0.85rem; padding:6px 12px; border-radius:8px; background:var(--bg-card); border:1px solid var(--glass-border); color:var(--text2); transition:all 0.2s ease;" title="Réinitialiser le calculateur">
            🔄 Réinitialiser
          </button>
          <button class="calc-action-btn" id="btn-fav-${id}" onclick="Medicalcul.toggleFavorite('${id}', event)" style="display:flex; align-items:center; gap:6px; font-size:0.85rem; padding:6px 12px; border-radius:8px; background:var(--bg-card); border:1px solid var(--glass-border); color:${isFav ? '#eab308' : 'var(--text2)'}; transition:all 0.2s ease;" title="Ajouter aux favoris">
            ${isFav ? '⭐ Favori' : '☆ Épingler'}
          </button>
        </div>
      </div>
      
      <div class="calc-title-sec" style="margin-bottom:16px;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
          <span class="calc-badge" style="background:var(--accent-soft); color:var(--accent); border:1px solid var(--glass-border); font-weight:600; font-size:0.75rem; border-radius:6px; padding:2px 8px;">${helperEsc(calc.domaine)}</span>
        </div>
        <h2 style="font-size:1.4rem; font-weight:800; color:var(--text); margin:0;">${helperEsc(calc.nom)}</h2>
        <p class="calc-desc" style="color:var(--text2); font-size:0.9rem; margin-top:6px; line-height:1.45;">${helperEsc(calc.description || '')}</p>
      </div>
      <div class="calc-purpose-card">
        <div class="calc-purpose-label">À quoi sert ce score ?</div>
        <p>${helperEsc(calc.utilite || (typeof SCORE_UTILITE !== 'undefined' && SCORE_UTILITE[id]) || calc.description || 'Outil d\'aide à l\'évaluation clinique.')}</p>
        ${(() => {
          const refs = Medicalcul.getRefs(id);
          if (!refs) return '';
          const detail = refs.detail ? `<p class="calc-ref-detail">${helperEsc(refs.detail)}</p>` : '';
          const src = refs.source ? `<p class="calc-ref-source">Réf. : ${helperEsc(refs.source)}</p>` : '';
          return detail + src + Medicalcul.renderChapterLinksHtml(id, helperEsc);
        })()}
      </div>
    `;

    // Render based on effective type
    if (calc.type === 'custom' || effectiveType === 'custom') {
      html += `<div id="calc-custom-area"></div>`;
      html += `<div class="calc-result-area" id="calc-result" style="margin-top:16px;"></div>`;
      detailContent.innerHTML = html;
      const customArea = document.getElementById('calc-custom-area');
      if (customArea && typeof calc.render === 'function') {
        try { calc.render(customArea); }
        catch (re) {
          customArea.innerHTML = `<div class="empty"><div class="empty-text">Erreur du calculateur personnalisé</div><div class="empty-hint">${helperEsc(re.message || re)}</div></div>`;
        }
      }
      return;
    }

    if (effectiveType === 'questions' && hasQuestions) {
      html += `
        <div class="calc-form">
          <div class="calc-glass-box">
            <div class="calc-group-title">Questions (Oui / Non)</div>
            <p class="calc-hint-text">Appuyez sur <strong>Oui</strong> ou <strong>Non</strong> pour chaque question. Le score et l’interprétation se mettent à jour automatiquement.</p>
            <div class="calc-q-list">
              ${calc.questions.map((q, idx) => `
                <div class="calc-q-row" data-qidx="${idx}" id="qrow_${id}_${idx}">
                  <div class="calc-q-text">${idx + 1}. ${helperEsc(q.text || '')}</div>
                  <div class="calc-q-btns" role="group" aria-label="Question ${idx + 1}">
                    <label class="radio-btn-label">
                      <input type="radio" name="q_${id}_${idx}" class="calc-q-input" value="yes" data-qidx="${idx}">
                      <span>Oui</span>
                    </label>
                    <label class="radio-btn-label">
                      <input type="radio" name="q_${id}_${idx}" class="calc-q-input" value="no" data-qidx="${idx}">
                      <span>Non</span>
                    </label>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (effectiveType === 'checklist' && hasItems) {
      html += `
        <div class="calc-form">
          <div class="calc-glass-box">
            <div class="calc-group-title">Éléments de l'évaluation</div>
            <div style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">
              ${calc.items.map((item, idx) => `
                <label class="check-container">
                  <input type="checkbox" class="calc-input" data-pts="${item.points || 0}" id="chk_${id}_${idx}">
                  <span class="checkmark"></span>
                  ${helperEsc(item.text || item.label || '')}
                </label>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (effectiveType === 'radio_group' && hasGroups) {
      html += `
        <div class="calc-form">
          ${calc.groups.map((group, gIdx) => `
            <div class="calc-glass-box" style="margin-bottom:16px;">
              <div class="calc-group-title">${helperEsc(group.question || group.label || ('Item ' + (gIdx + 1)))}</div>
              <div class="calc-radio-group" style="display:flex; flex-direction:column; gap:12px; margin-top:12px;">
                ${(group.options || []).map((opt, oIdx) => `
                  <label class="radio-card-label" style="position:relative;">
                    <input type="radio" name="rad_${id}_${gIdx}" class="calc-input" value="${opt.value != null ? opt.value : oIdx}">
                    <div class="radio-card-circle"></div>
                    <span class="radio-card-text" style="flex:1;">${helperEsc(opt.text || String(opt))}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if ((effectiveType === 'select' || effectiveType === 'number_result') && hasFields) {
      const isRange = effectiveType === 'number_result';
      html += `
        <div class="calc-form">
          <div class="calc-glass-box">
            <div class="calc-group-title">Saisie des données</div>
            <div style="display:flex; flex-direction:column; gap:12px; margin-top:8px;">
              ${calc.fields.map((field) => {
                if (isRange || field.type === 'number' || field.type === 'range') {
                  return `
                <div style="display:flex; flex-direction:column; gap:8px;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                    <span style="font-weight:600; font-size:0.95rem;">${helperEsc(field.label)}</span>
                    <div style="font-weight:700; color:var(--accent); font-size:1.1rem;" id="val_disp_${id}_${field.id}">-- ${field.unit ? helperEsc(field.unit) : ''}</div>
                  </div>
                  <input type="range" id="num_${id}_${field.id}" min="${field.min || 0}" max="${field.max || 100}" step="${field.step || 1}" value="${field.min || 0}" class="calc-input modern-slider">
                </div>`;
                }
                const opts = field.options || [];
                return `
                <label style="display:flex; flex-direction:column; gap:4px;">
                  <span style="font-weight:500; font-size:0.9rem;">${helperEsc(field.label)}</span>
                  <select id="sel_${id}_${field.id}" class="calc-input" style="width:100%; background:var(--bg-elevated); color:var(--text); border:1px solid var(--glass-border); border-radius:4px; padding:6px;">
                    <option value="" selected disabled>— Choisir —</option>
                    ${opts.map((opt) => {
                      const s = String(opt);
                      const valMatch = s.match(/^([0-9.]+)\s*[—–\-:]\s*(.*)$/) || [s, s, s];
                      const val = (valMatch[1] || s).trim();
                      return `<option value="${helperEsc(val)}">${helperEsc(s)}</option>`;
                    }).join('')}
                  </select>
                </label>`;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    } else {
      html += `<div class="empty" style="padding:20px;"><div class="empty-text">Format de score non supporté (${helperEsc(calc.type)})</div></div>`;
    }

    html += `
      <div class="calc-score-footer" id="calc-score-footer">
        <div class="calc-progress-status" id="calc-progress-status">Complétez le questionnaire pour débloquer le score.</div>
        <button type="button" class="calc-show-score-btn" id="calc-show-score-btn" disabled>Voir le score et l’interprétation</button>
      </div>
      <div class="calc-result-area is-hidden" id="calc-result" aria-live="polite"></div>
    `;
    detailContent.innerHTML = html;

    const inputs = detailContent.querySelectorAll
      ? detailContent.querySelectorAll('.calc-input, .calc-q-input, select, input[type="range"], input[type="number"], input[type="checkbox"], input[type="radio"]')
      : [];

    let scoreRevealed = false;
    let lastReadyResult = null;

    const paintQuestionRows = () => {
      if (!(effectiveType === 'questions' && hasQuestions)) return;
      calc.questions.forEach((_, idx) => {
        const row = document.getElementById(`qrow_${id}_${idx}`);
        const checked = detailContent.querySelector(`input[name="q_${id}_${idx}"]:checked`);
        if (row) row.classList.toggle('is-answered', !!checked);
      });
    };

    const setFooter = (ready, statusHtml, readyLabel) => {
      const statusEl = document.getElementById('calc-progress-status');
      const btn = document.getElementById('calc-show-score-btn');
      if (statusEl) {
        statusEl.innerHTML = statusHtml;
        statusEl.classList.toggle('is-ready', !!ready);
      }
      if (btn) {
        btn.disabled = !ready;
        btn.textContent = ready
          ? (readyLabel || 'Voir le score et l’interprétation')
          : 'Voir le score et l’interprétation';
      }
    };

    const hideScorePanel = () => {
      scoreRevealed = false;
      const resDiv = document.getElementById('calc-result');
      if (resDiv) {
        resDiv.classList.add('is-hidden');
        resDiv.innerHTML = '';
      }
    };

    const renderScorePanel = (result) => {
      const resDiv = document.getElementById('calc-result');
      const norm = Medicalcul.normalizeResult(result, calc);
      if (!resDiv || !norm) return;
      const scoreVal = norm.score;
      const numericForBar = typeof scoreVal === 'number' ? scoreVal : parseFloat(String(scoreVal).replace(/[^\d.]/g, ''));
      const maxBar = (norm.max != null && Number.isFinite(Number(norm.max)) && Number(norm.max) > 0)
        ? Number(norm.max)
        : (calc.max || 100);
      const pct = Number.isFinite(numericForBar) ? Math.min(100, Math.max(0, (numericForBar / maxBar) * 100)) : 0;
      const showBar = Number.isFinite(numericForBar) && maxBar > 0 && String(scoreVal) !== '—';
      const refs = Medicalcul.getRefs(id);
      const enrich = (refs && refs.detail)
        ? `<div class="calc-res-enrich" style="margin-top:10px;font-size:0.88rem;font-weight:500;line-height:1.45;opacity:0.95;">${helperEsc(refs.detail)}</div>`
        : '';
      const chLinks = Medicalcul.renderChapterLinksHtml(id, helperEsc);
      const srcLine = (refs && refs.source)
        ? `<div class="fs-xs" style="margin-top:8px;opacity:0.9;font-size:0.75rem;">Réf. : ${helperEsc(refs.source)}</div>`
        : '';
      resDiv.classList.remove('is-hidden');
      resDiv.innerHTML = `
        <div class="calc-res-box ${norm.cls}" style="position:relative;">
          <div class="calc-res-title" style="font-size:1.35rem; font-weight:800; display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
            <span>SCORE : ${helperEsc(scoreVal)}</span>
            <button type="button" class="calc-copy-btn" onclick="Medicalcul.copyResultToClipboard('${id}')" style="font-size:0.75rem; background:rgba(255,255,255,0.2); border:1px solid rgba(255,255,255,0.4); color:white; padding:6px 12px; border-radius:8px; display:flex; align-items:center; gap:6px; font-weight:700;">
              📋 Copier
            </button>
          </div>
          ${showBar ? `<div class="calc-progress-bg"><div class="calc-progress-fill" style="width:${pct}%;"></div></div>` : ''}
          <div class="calc-res-desc" style="font-size:1.05rem; font-weight:600; margin-top:12px; line-height:1.45;">
            <span style="display:block;font-size:0.72rem;font-weight:800;letter-spacing:0.04em;text-transform:uppercase;opacity:0.9;margin-bottom:4px;">Interprétation</span>
            ${helperEsc(norm.interp)}
          </div>
          ${enrich}
          ${calc.seuils ? `<div class="fs-xs" style="margin-top:12px; opacity:0.95; border-top:1px solid rgba(255,255,255,0.25); padding-top:10px; font-size:0.8rem;"><strong>Repères cliniques :</strong> ${helperEsc(calc.seuils)}</div>` : ''}
          ${srcLine}
          ${chLinks}
          <button type="button" class="calc-hide-score-btn" id="calc-hide-score-btn">Masquer le score</button>
        </div>
      `;
      Medicalcul.currentResultText = `[Gériatrie - ${calc.nom}]\nScore : ${scoreVal}\nInterprétation : ${norm.interp}${refs && refs.detail ? '\nPrécisions : ' + refs.detail : ''}${calc.seuils ? '\nRepères : ' + calc.seuils : ''}${refs && refs.source ? '\nRéf. : ' + refs.source : ''}`;
      try {
        document.dispatchEvent(new CustomEvent('medicalcul:result', {
          detail: {
            id,
            name: calc.nom,
            score: scoreVal,
            interpretation: norm.interp,
            text: Medicalcul.currentResultText
          }
        }));
      } catch (_) {}
      const hideBtn = document.getElementById('calc-hide-score-btn');
      if (hideBtn) hideBtn.addEventListener('click', () => {
        hideScorePanel();
        const btn = document.getElementById('calc-show-score-btn');
        if (btn && !btn.disabled) btn.textContent = 'Voir le score et l’interprétation';
      });
      try { resDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (_) {}
    };

    /** Calcule l’état du formulaire : progression + résultat final si prêt (sans l’afficher) */
    const computeFormState = () => {
      paintQuestionRows();
      let ready = false;
      let result = null;
      let status = 'Complétez le questionnaire pour débloquer le score.';
      let answered = 0;
      let totalItems = 0;

      try {
        if (effectiveType === 'questions' && hasQuestions) {
          totalItems = calc.questions.length;
          let total = 0;
          calc.questions.forEach((q, idx) => {
            let checked = detailContent.querySelector
              ? detailContent.querySelector(`input[name="q_${id}_${idx}"]:checked`)
              : null;
            if (!checked && document.querySelector) {
              checked = document.querySelector(`input[name="q_${id}_${idx}"]:checked`);
            }
            if (!checked) return;
            answered += 1;
            const ans = checked.value;
            if (ans === 'yes') total += (q.pointsOnYes != null ? q.pointsOnYes : 1);
            else total += (q.pointsOnNo != null ? q.pointsOnNo : 0);
          });
          if (answered < totalItems) {
            status = `<strong>${answered}/${totalItems}</strong> questions répondues — le score s’affiche seulement à la fin.`;
          } else {
            ready = true;
            status = `<strong>${totalItems}/${totalItems}</strong> questions remplies — vous pouvez afficher le score.`;
            if (typeof calc.calculer === 'function') result = calc.calculer(total);
            else if (typeof calc.calculate === 'function') result = calc.calculate(total);
          }
        } else if (effectiveType === 'checklist' && hasItems) {
          // Checklist : chaque case est une réponse (cochée ou non) — prêt dès l’ouverture, bouton pour valider
          totalItems = calc.items.length;
          answered = totalItems;
          let total = 0;
          const checkedFlags = [];
          let checkedCount = 0;
          calc.items.forEach((item, idx) => {
            const chk = document.getElementById(`chk_${id}_${idx}`);
            const on = !!(chk && chk.checked);
            checkedFlags.push(on);
            if (on) { total += item.points || 0; checkedCount += 1; }
          });
          ready = true;
          status = `<strong>${checkedCount}</strong> critère${checkedCount > 1 ? 's' : ''} coché${checkedCount > 1 ? 's' : ''} sur ${totalItems} — appuyez pour calculer le score.`;
          if (typeof calc.calculer === 'function') {
            try { result = calc.calculer(total, checkedFlags); }
            catch (_) { result = calc.calculer(total); }
          } else if (typeof calc.calculate === 'function') {
            result = calc.calculate(total, checkedFlags);
          }
        } else if (effectiveType === 'radio_group' && hasGroups) {
          totalItems = calc.groups.length;
          let total = 0;
          const values = [];
          calc.groups.forEach((group, gIdx) => {
            let checkedRadio = detailContent.querySelector
              ? detailContent.querySelector(`input[name="rad_${id}_${gIdx}"]:checked`)
              : null;
            if (!checkedRadio && document.querySelector) {
              checkedRadio = document.querySelector(`input[name="rad_${id}_${gIdx}"]:checked`);
            }
            if (!checkedRadio) {
              values.push(null);
              return;
            }
            answered += 1;
            const v = parseFloat(checkedRadio.value);
            const num = Number.isFinite(v) ? v : 0;
            values.push(num);
            total += num;
          });
          if (answered < totalItems) {
            status = `<strong>${answered}/${totalItems}</strong> items renseignés — terminez le questionnaire pour voir le score.`;
          } else {
            ready = true;
            status = `<strong>${totalItems}/${totalItems}</strong> items remplis — vous pouvez afficher le score.`;
            if (typeof calc.calculer === 'function') {
              try { result = calc.calculer(total, values); }
              catch (_) { result = calc.calculer(total); }
            } else if (typeof calc.calculate === 'function') {
              result = calc.calculate(total, values);
            }
          }
        } else if ((effectiveType === 'select' || effectiveType === 'number_result') && hasFields) {
          totalItems = calc.fields.length;
          const values = {};
          let missing = 0;
          calc.fields.forEach((field) => {
            const sel = document.getElementById(`sel_${id}_${field.id}`);
            const num = document.getElementById(`num_${id}_${field.id}`);
            if (sel) {
              if (sel.value === '' || (sel.selectedIndex === 0 && sel.options[0] && sel.options[0].disabled)) {
                missing += 1;
                values[field.id] = '';
              } else {
                answered += 1;
                values[field.id] = sel.value;
              }
            } else if (num) {
              answered += 1;
              const n = parseFloat(num.value);
              values[field.id] = Number.isFinite(n) ? n : 0;
            }
          });
          if (effectiveType === 'select' && missing > 0) {
            status = `<strong>${answered}/${totalItems}</strong> champs renseignés — complétez toutes les listes pour voir le score.`;
          } else {
            ready = true;
            status = effectiveType === 'number_result'
              ? 'Valeur saisie — appuyez pour afficher le score et l’interprétation.'
              : `<strong>${totalItems}/${totalItems}</strong> champs remplis — vous pouvez afficher le score.`;
            if (typeof calc.calculate === 'function') result = calc.calculate(values);
            else if (typeof calc.calculer === 'function') result = calc.calculer(values);
          }
        }
      } catch (calcErr) {
        console.error('[Medicalcul.computeFormState]', id, calcErr);
        ready = false;
        result = null;
        status = `Erreur de calcul : ${helperEsc(calcErr.message || calcErr)}`;
      }

      return { ready, result, status };
    };

    const refreshFooter = () => {
      const state = computeFormState();
      lastReadyResult = state.ready ? state.result : null;
      setFooter(state.ready, state.status);
      // Si l’utilisateur a déjà révélé le score, le masquer dès qu’une réponse change (évite un score obsolète collé à l’écran)
      if (scoreRevealed) {
        if (state.ready && state.result) {
          renderScorePanel(state.result);
        } else {
          hideScorePanel();
        }
      } else {
        hideScorePanel();
      }
    };

    const showScoreBtn = document.getElementById('calc-show-score-btn');
    if (showScoreBtn) {
      showScoreBtn.addEventListener('click', () => {
        const state = computeFormState();
        if (!state.ready || !state.result) return;
        scoreRevealed = true;
        lastReadyResult = state.result;
        renderScorePanel(state.result);
        showScoreBtn.textContent = 'Actualiser le score';
      });
    }

    // Délégation d'événements (fiable pour radios Oui/Non, cards, selects)
    detailContent.addEventListener('change', (e) => {
      const t = e.target;
      if (!t) return;
      if (t.matches && (t.matches('.calc-input, .calc-q-input, select, input'))) {
        if (t.type === 'checkbox') {
          const lbl = t.closest && t.closest('.ios-toggle-label');
          if (lbl) lbl.classList.toggle('active-toggle', !!t.checked);
        }
        // Toute modification masque le score jusqu’à nouvel appui (sauf si on actualise après reveal via refreshFooter)
        scoreRevealed = false;
        refreshFooter();
      }
    });
    detailContent.addEventListener('input', (e) => {
      const t = e.target;
      if (!t || !t.matches) return;
      if (t.matches('input[type="range"], input[type="number"], input[type="text"]')) {
        if (t.type === 'range' && t.id) {
          const fieldId = t.id.split('_').slice(2).join('_');
          const disp = document.getElementById('val_disp_' + id + '_' + fieldId);
          if (disp) {
            let unit = '';
            (calc.fields || []).forEach(f => { if (f.id === fieldId && f.unit) unit = f.unit; });
            disp.innerText = t.value + (unit ? ' ' + unit : '');
          }
        }
        scoreRevealed = false;
        refreshFooter();
      }
    });
    // Clic sur le span Oui/Non (certains navigateurs / styles)
    detailContent.addEventListener('click', (e) => {
      const lab = e.target && e.target.closest && e.target.closest('.radio-btn-label');
      if (!lab) return;
      const input = lab.querySelector('input[type="radio"]');
      if (input && !input.checked) {
        input.checked = true;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });

    inputs.forEach(input => {
      if (input && input.type === 'range' && input.id) {
        const fieldId = input.id.split('_').slice(2).join('_');
        const disp = document.getElementById('val_disp_' + id + '_' + fieldId);
        if (disp) {
          let unit = '';
          (calc.fields || []).forEach(f => { if (f.id === fieldId && f.unit) unit = f.unit; });
          disp.innerText = input.value + (unit ? ' ' + unit : '');
        }
      }
    });

    refreshFooter();
  }
};

// Ensure globals for inline handlers (const is not always on window)
try {
  window.Medicalcul = Medicalcul;
  window.CALCULATEURS = CALCULATEURS;
  window.SCORE_UTILITE = SCORE_UTILITE;
  window.SCORE_REFS = SCORE_REFS;
  window.CHAPTER_LABELS = CHAPTER_LABELS;
} catch (_) {}

// Expose globals for classic scripts / onclick handlers
if (typeof window !== 'undefined') {
  window.Medicalcul = Medicalcul;
  window.CALCULATEURS = CALCULATEURS;
  window.SCORE_UTILITE = SCORE_UTILITE;
  window.SCORE_REFS = SCORE_REFS;
  window.CHAPTER_LABELS = CHAPTER_LABELS;
}


if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CALCULATEURS, Medicalcul, SCORE_UTILITE, SCORE_REFS, CHAPTER_LABELS };
}

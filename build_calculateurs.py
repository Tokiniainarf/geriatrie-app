/* ── CALCULATEURS CLINIQUES (MEDICALCUL GERIATRIQUE) ── */

const CALCULATEURS = [
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
      { text: 'Craignez-vous qu'un malheur vous arrive ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous heureux la plupart du temps ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Vous sentez-vous souvent impuissant ou abandonné ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Préférez-vous rester chez vous plutôt que de sortir ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Pensez-vous avoir plus de problèmes de mémoire que les autres ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Pensez-vous qu'il est merveilleux d'être en vie aujourd'hui ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Vous sentez-vous inutile dans votre état actuel ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous plein d'énergie ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
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
      { text: 'Êtes-vous plein d'espoir pour l'avenir ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Êtes-vous embarrassé par des pensées qui ne vous laissent pas de repos ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Êtes-vous de bonne humeur la plupart du temps ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Craignez-vous qu'un malheur vous arrive ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous heureux la plupart du temps ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Vous sentez-vous souvent impuissant ou abandonné ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous souvent agité ou inquiet ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Préférez-vous rester chez vous plutôt que de sortir ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous inquiétez-vous souvent pour l'avenir ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Pensez-vous avoir plus de problèmes de mémoire que les autres ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Pensez-vous qu'il est merveilleux d'être en vie aujourd'hui ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Vous sentez-vous souvent triste ou cafardeux ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous inutile dans votre état actuel ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous tracassez-vous beaucoup pour le passé ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Trouvez-vous que la vie est très intéressante ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Avez-vous du mal à commencer de nouveaux projets ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous sentez-vous plein d'énergie ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Pensez-vous que votre situation est désespérée ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Pensez-vous que la plupart des gens ont une vie meilleure que la vôtre ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous tracassez-vous pour des petits riens ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Avez-vous souvent envie de pleurer ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Avez-vous du mal à vous concentrer ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Vous réveillez-vous le matin avec plaisir ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Évitez-vous les réunions sociales ?', type: 'yesno', pointsOnYes: 1, pointsOnNo: 0 },
      { text: 'Est-il facile pour vous de prendre des décisions ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 },
      { text: 'Avez-vous l'esprit aussi clair qu'autrefois ?', type: 'yesno', pointsOnYes: 0, pointsOnNo: 1 }
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
            <span class="fs-sm">Changement aigu par rapport à l'état de base ou fluctuation.</span>
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
    description: 'Évalue les 6 fonctions de base de l'autonomie physique. Score maximal : 6.',
    type: 'radio_group',
    groups: [
      {
        question: 'Toilette',
        options: [
          { text: 'Autonome : Se lave seul ou n'a besoin d'aide que pour une seule partie du corps.', value: 1 },
          { text: 'Dépendant : A besoin d'aide pour plus d'une partie du corps.', value: 0 }
        ]
      },
      {
        question: 'Habillage',
        options: [
          { text: 'Autonome : Prend ses vêtements et s'habille complètement seul.', value: 1 },
          { text: 'Dépendant : A besoin d'aide importante.', value: 0 }
        ]
      },
      {
        question: 'Aller aux toilettes',
        options: [
          { text: 'Autonome : S'y rend seul, s'essuie et revient seul.', value: 1 },
          { text: 'Dépendant : A besoin d'aide pour se déplacer ou s'essuyer.', value: 0 }
        ]
      },
      {
        question: 'Transferts',
        options: [
          { text: 'Autonome : Se lève et se couche seul (du lit ou de la chaise).', value: 1 },
          { text: 'Dépendant : A besoin d'aide.', value: 0 }
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
          { text: 'Dépendant : A besoin d'aide ou alimentation artificielle.', value: 0 }
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
          { text: 'Dépendant : N'utilise pas du tout le téléphone.', value: 0 }
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
          { text: 'Dépendant : A besoin d'être accompagné.', value: 0 }
        ]
      },
      {
        question: 'Préparation des repas',
        options: [
          { text: 'Autonome : Prépare et sert ses repas de manière indépendante.', value: 1 },
          { text: 'Dépendant : A besoin qu'on lui prépare ses repas.', value: 0 }
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
      if (total <= 3) { cat = 'danger'; desc = 'Perte d'autonomie instrumentale sévère. Aides à domicile indispensables.'; }
      else if (total <= 6) { cat = 'warning'; desc = 'Altération modérée de l'autonomie instrumentale.'; }
      return { total, cat, desc, max: 8 };
    }
  },
  {
    id: 'aggir',
    nom: 'Grille AGGIR (Détermination du GIR)',
    domaine: 'Autonomie',
    description: 'Classe le niveau de dépendance en 6 Groupes Iso-Ressources (GIR) pour l'attribution de l'APA.',
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
        question: 'Orientation (Se repérer dans le temps et l'espace)',
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
        question: 'Élimination (Assurer l'hygiène de la miction et de la défécation)',
        options: [
          { text: 'A : Fait seul, correctement et habituellement', value: 1 },
          { text: 'B : Fait partiellement, incorrectement ou non habituellement', value: 2 },
          { text: 'C : Ne fait jamais', value: 3 }
        ]
      },
      {
        question: 'Transferts (Se lever, se coucher, s'asseoir)',
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
        desc = 'GIR 1 : Grabataire ou confiné au fauteuil avec altération mentale majeure. Présence permanente d'aidants requise.';
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
        desc = 'GIR 4 : Aide indispensable pour se lever, s'habiller, ou aide corporelle ponctuelle mais fréquente (ex. repas).';
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
          { text: '1 : Autonome à l'intérieur (logement)', value: 1 },
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
        question: 'N. Façon de s'alimenter',
        options: [
          { text: '0 : Nécessite une assistance', value: 0 },
          { text: '1 : S'alimente seul avec difficultés', value: 1 },
          { text: '2 : S'alimente seul sans difficulté', value: 2 }
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
    nom: 'Échelle de Braden (Risque d'escarres)',
    domaine: 'Nutrition & Peau',
    description: 'Évalue le risque de développement d'escarres de décubitus. Score maximal : 23.',
    type: 'radio_group',
    groups: [
      {
        question: 'Perception sensorielle (capacité à réagir à l'inconfort ou à la douleur)',
        options: [
          { text: '1 : Complètement limitée (ne réagit pas)', value: 1 },
          { text: '2 : Très limitée (réagit seulement à la douleur)', value: 2 },
          { text: '3 : Légèrement limitée (réagit aux commandes verbales)', value: 3 },
          { text: '4 : Non limitée', value: 4 }
        ]
      },
      {
        question: 'Humidité (degré d'exposition de la peau à l'humidité)',
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
          { text: '1 : Très pauvre (mange moins d'un tiers des repas)', value: 1 },
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
      let desc = 'Pas de risque d'escarre.';
      if (total <= 9) { cat = 'danger'; desc = 'Risque TRÈS ÉLEVÉ d'escarre. Protocole de décharge complet.'; }
      else if (total <= 12) { cat = 'danger'; desc = 'Risque ÉLEVÉ d'escarre.'; }
      else if (total <= 14) { cat = 'warning'; desc = 'Risque MODÉRÉ d'escarre.'; }
      else if (total <= 18) { cat = 'warning'; desc = 'Risque FAIBLE d'escarre.'; }
      return { total, cat, desc, max: 23 };
    }
  },
  {
    id: 'norton',
    nom: 'Échelle de Norton (Risque d'escarres)',
    domaine: 'Nutrition & Peau',
    description: 'Évaluation historique alternative du risque d'escarres. Score maximal : 20.',
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
          { text: '2 : Très limitée (besoin d'aide)', value: 2 },
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
      if (total <= 12) { cat = 'danger'; desc = 'Risque ÉLEVÉ d'escarres. Mesures de prévention urgentes.'; }
      else if (total <= 14) { cat = 'warning'; desc = 'Risque MODÉRÉ d'escarres.'; }
      return { total, cat, desc, max: 20 };
    }
  },

  // EQUILIBRE & MARCHE
  {
    id: 'tinetti',
    nom: 'Échelle de Tinetti (POMA - Équilibre seul)',
    domaine: 'Équilibre & Marche',
    description: 'Évalue l'équilibre statique et dynamique chez la personne âgée. Score maximal : 16.',
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
          { text: '1 : Possible en s'aidant des bras', value: 1 },
          { text: '2 : Possible sans s'aider des bras', value: 2 }
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
        question: 'S'asseoir',
        options: [
          { text: '0 : S'affale, estime mal la distance', value: 0 },
          { text: '1 : Utilise ses bras pour s'asseoir', value: 1 },
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
    description: 'Évaluation fonctionnelle complète de l'équilibre en 14 tâches. Score maximal : 56.',
    type: 'radio_group',
    groups: [
      { question: '1. Assis vers debout', options: [{text:'0: aide max',value:0},{text:'1: aide min',value:1},{text:'2: besoin d'appui',value:2},{text:'3: indép. mais bras',value:3},{text:'4: indép. sans bras',value:4}] },
      { question: '2. Debout sans appui (2 min)', options: [{text:'0: impossible',value:0},{text:'1: besoin de surveillance',value:1},{text:'2: max 30s',value:2},{text:'3: indép. 2 min bras',value:3},{text:'4: indép. 2 min sans bras',value:4}] },
      { question: '3. Assis sans appui (dos libre, pieds sol) (2 min)', options: [{text:'0: impossible',value:0},{text:'1: max 10s',value:1},{text:'2: max 30s',value:2},{text:'3: indép. 2 min bras',value:3},{text:'4: indép. 2 min sans bras',value:4}] },
      { question: '4. Debout vers assis', options: [{text:'0: besoin d'aide',value:0},{text:'1: contrôle min',value:1},{text:'2: utilise arriere cuisses',value:2},{text:'3: indép. mais bras',value:3},{text:'4: indép. sans bras',value:4}] },
      { question: '5. Transferts (chaise à lit et inversement)', options: [{text:'0: besoin d'aide',value:0},{text:'1: besoin surveillance',value:1},{text:'2: besoin appui fort',value:2},{text:'3: indép. mais lent',value:3},{text:'4: indép. rapide sans bras',value:4}] },
      { question: '6. Debout yeux fermés (10s)', options: [{text:'0: commence à tomber',value:0},{text:'1: max 3s',value:1},{text:'2: max 10s avec osc.',value:2},{text:'3: stable 10s',value:3},{text:'4: stable et sûr 10s',value:4}] },
      { question: '7. Debout pieds joints sans appui (1 min)', options: [{text:'0: besoin d'aide',value:0},{text:'1: max 15s',value:1},{text:'2: max 30s',value:2},{text:'3: stable 1 min bras',value:3},{text:'4: stable pieds joints 1 min',value:4}] },
      { question: '8. Se pencher en avant debout (bras tendus à 90°)', options: [{text:'0: perte équilibre',value:0},{text:'1: portée < 5 cm',value:1},{text:'2: portée 5 à 12 cm',value:2},{text:'3: portée 12 à 25 cm',value:3},{text:'4: portée > 25 cm',value:4}] },
      { question: '9. Ramasser un objet au sol depuis la position debout', options: [{text:'0: impossible',value:0},{text:'1: besoin de soutien',value:1},{text:'2: portée < 5 cm du sol',value:2},{text:'3: indép. mais lent/précaire',value:3},{text:'4: indép. et facile',value:4}] },
      { question: '10. Se tourner pour regarder derrière (gauche et droite)', options: [{text:'0: besoin de soutien',value:0},{text:'1: besoin de surveillance',value:1},{text:'2: tourne un seul côté',value:2},{text:'3: tourne des deux côtés',value:3},{text:'4: tourne complètement tête/épaules',value:4}] },
      { question: '11. Faire un tour complet sur soi-même (360°)', options: [{text:'0: besoin d'aide',value:0},{text:'1: besoin de surveillance',value:1},{text:'2: seulement un côté',value:2},{text:'3: indép. mais lent (> 4s)',value:3},{text:'4: indép. rapide (< 4s)',value:4}] },
      { question: '12. Placer le pied sur un marchepied alternativement (4 pas)', options: [{text:'0: besoin d'aide',value:0},{text:'1: max 2 pas',value:1},{text:'2: max 4 pas avec surveillance',value:2},{text:'3: indép. > 20s',value:3},{text:'4: indép. < 20s',value:4}] },
      { question: '13. Debout un pied devant l'autre (tandem)', options: [{text:'0: perd équilibre',value:0},{text:'1: marche précaire',value:1},{text:'2: pas de tandem complet',value:2},{text:'3: tandem 30s',value:3},{text:'4: tandem parfait 30s',value:4}] },
      { question: '14. Debout sur un pied (unipodal)', options: [{text:'0: impossible',value:0},{text:'1: max 3s',value:1},{text:'2: max 10s avec appui',value:2},{text:'3: unipodal 10s',value:3},{text:'4: unipodal > 10s',value:4}] }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Équilibre fonctionnel conservé. Risque de chute faible.';
      if (total <= 20) { cat = 'danger'; desc = 'Altération sévère de l'équilibre. Risque de chute TRÈS ÉLEVÉ (proche de 100%).'; }
      else if (total <= 40) { cat = 'warning'; desc = 'Altération modérée. Risque de chute élevé.'; }
      else if (total <= 45) { cat = 'warning'; desc = 'Risque de chute faible à modéré.'; }
      return { total, cat, desc, max: 56 };
    }
  },

  // DOULEUR
  {
    id: 'algoplus',
    nom: 'ALGOPLUS (Douleur aiguë chez le sujet âgé)',
    domaine: 'Éévaluation de la Douleur',
    description: 'Évaluation de la douleur aiguë chez le patient âgé non communicant (Alzheimer). Score maximal : 5.',
    type: 'checklist',
    items: [
      { text: 'Visage : Grimace, crispation, fermeture des yeux, froncement des sourcils (+1 pt)', points: 1 },
      { text: 'Regard : Regard vide, fixe, fuyant, inquiet ou fermé (+1 pt)', points: 1 },
      { text: 'Plaintes / Vocalisations : Plaintes, cris, gémissements, soupirs, répétition de mots (+1 pt)', points: 1 },
      { text: 'Corps : Posture de protection, rigidité physique, agitation, refus de mobilisation (+1 pt)', points: 1 },
      { text: 'Comportement : Changement d'attitude, agressivité, opposition aux soins (+1 pt)', points: 1 }
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
    domaine: 'Éévaluation de la Douleur',
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
      if (total >= 5) { cat = 'danger'; desc = 'DOULEUR PRÉSENTE. Mise en place obligatoire d'un plan antalgique individualisé.'; }
      return { total, cat, desc, max: 30 };
    }
  },
  {
    id: 'ecpa',
    nom: 'ECPA (Échelle de Douleur chez le Patient Âgée)',
    domaine: 'Éévaluation de la Douleur',
    description: 'Évaluation comportementale de la douleur chez le sujet âgé dément. Score maximal : 32.',
    type: 'radio_group',
    groups: [
      { question: '1. Expression du visage', options: [{text:'0: Détendu',value:0},{text:'1: Inexpressif/figé',value:1},{text:'2: Crispation passagère',value:2},{text:'3: Crispation permanente',value:3},{text:'4: Expression de panique',value:4}] },
      { question: '2. Position spontanée au repos', options: [{text:'0: Naturelle',value:0},{text:'1: Recherche de confort',value:1},{text:'2: Position figée inhabituelle',value:2},{text:'3: Position antalgique',value:3},{text:'4: Recroquevillement total',value:4}] },
      { question: '3. Mouvements du corps (au repos)', options: [{text:'0: Calme',value:0},{text:'1: Légère agitation',value:1},{text:'2: Mouvements stéréotypés',value:2},{text:'3: Agitation continuelle',value:3},{text:'4: Immobilité absolue protectrice',value:4}] },
      { question: '4. Relation avec l'entourage', options: [{text:'0: Relation inchangée',value:0},{text:'1: Recherche de réconfort',value:1},{text:'2: Désintérêt',value:2},{text:'3: Refus de relation',value:3},{text:'4: Mutisme absolu',value:4}] },
      { question: '5. Mobilisation : Expression du visage lors du mouvement', options: [{text:'0: Détendu',value:0},{text:'1: Regard anxieux',value:1},{text:'2: Grimace fugace',value:2},{text:'3: Grimace permanente',value:3},{text:'4: Visage terrorisé',value:4}] },
      { question: '6. Mobilisation : Résistance à la mobilisation', options: [{text:'0: Souple',value:0},{text:'1: Raideur craintive',value:1},{text:'2: Opposition modérée',value:2},{text:'3: Opposition forte',value:3},{text:'4: Refus complet et agressif',value:4}] },
      { question: '7. Mobilisation : Cris/vocalisations lors du mouvement', options: [{text:'0: Aucun',value:0},{text:'1: Gémissement fugace',value:1},{text:'2: Gémissement répété',value:2},{text:'3: Cri franc',value:3},{text:'4: Cri répété et hurlement',value:4}] },
      { question: '8. Mobilisation : Réactions de défense lors des soins', options: [{text:'0: Aucune',value:0},{text:'1: Retrait d'une zone',value:1},{text:'2: Protection manuelle',value:2},{text:'3: Agression physique',value:3},{text:'4: Refus d'accès complet',value:4}] }
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
    domaine: 'Éévaluation de la Douleur',
    description: 'Auto-évaluation de l'intensité de la douleur de 0 (aucune) à 10 (maximale).',
    type: 'custom',
    render: (div) => {
      div.innerHTML = `
        <div class="calc-form">
          <label class="calc-group-title">Saisir l'intensité de la douleur (0 à 10)</label>
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
      { text: 'Antécédent d'AVC, AIT ou embolie (+2 pts)', points: 2 },
      { text: 'Maladie vasculaire (Infarctus, AOMI, plaque aortique) (+1 pt)', points: 1 },
      { text: 'Âge compris entre 65 et 74 ans (+1 pt)', points: 1 },
      { text: 'Sexe féminin (+1 pt)', points: 1 }
    ],
    calculer: (total) => {
      const inputs = document.querySelectorAll('#calc-interactive-form .calc-input');
      const isFemale = inputs[7] && inputs[7].checked;
      
      let cat = 'normal';
      let desc = 'Pas d'anticoagulation nécessaire (sauf si FA valvulaire).';
      
      const threshold = isFemale ? 3 : 2;
      const borderline = isFemale ? 2 : 1;
      
      if (total >= threshold) {
        cat = 'danger';
        desc = `Anticoagulation recommandée (AOD ou AVK) car CHA₂DS₂-VASc ≥ ${threshold} chez ${isFemale ? 'une femme' : 'un homme'}.`;
      } else if (total === borderline) {
        cat = 'warning';
        desc = `Anticoagulation à considérer au cas par cas (discussion bénéfice/risque) car score de ${borderline} chez ${isFemale ? 'une femme' : 'un homme'}.`;
      }
      return { total, cat, desc, max: 9 };
    }
  },
  {
    id: 'hasbled',
    nom: 'Score HAS-BLED',
    domaine: 'Cardiovasculaire',
    description: 'Évalue le risque hémorragique sous traitement anticoagulant oral (FA). Score maximal : 9.',
    type: 'checklist',
    items: [
      { text: 'Hypertension artérielle non contrôlée (PAS > 160 mmHg) (+1 pt)', points: 1 },
      { text: 'Fonction rénale altérée (Dialyse, Cr > 200 µmol/l) (+1 pt)', points: 1 },
      { text: 'Fonction hépatique altérée (Cirrhose, Bilirubine > 2xN) (+1 pt)', points: 1 },
      { text: 'Antécédent d'AVC (+1 pt)', points: 1 },
      { text: 'Antécédent d'Hémorragie ou prédisposition (+1 pt)', points: 1 },
      { text: 'INR instable / labile (si sous AVK, TRT dans la cible < 60%) (+1 pt)', points: 1 },
      { text: 'Âge > 65 ans (+1 pt)', points: 1 },
      { text: 'Médicaments favorisant les saignements (AINS, Antiagrégants) (+1 pt)', points: 1 },
      { text: 'Consommation d'alcool excessive (+1 pt)', points: 1 }
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
          <div class="calc-group-box">
            <div class="calc-group-title">Saisir les paramètres cliniques</div>
            <div style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">
              <label>Âge : <input type="number" id="grace_age" value="70" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>Fréquence cardiaque (FC) : <input type="number" id="grace_fc" value="80" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>PA Systolique (PAS) : <input type="number" id="grace_pas" value="130" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>Créatininémie (µmol/L) : <input type="number" id="grace_creat" value="100" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
            </div>
          </div>
          <div class="calc-group-box">
            <div class="calc-group-title">Autres facteurs</div>
            <label class="check-container"><input type="checkbox" id="grace_st" class="calc-input"><span class="checkmark"></span>Déviation du segment ST</label>
            <label class="check-container"><input type="checkbox" id="grace_trop" class="calc-input"><span class="checkmark"></span>Troponine / Biomarqueurs élevés</label>
            <label class="check-container"><input type="checkbox" id="grace_arr" class="calc-input"><span class="checkmark"></span>Arrêt cardiaque à l'admission</label>
          </div>
          <div class="calc-group-box">
            <div class="calc-group-title">Classification de Killip</div>
            <label class="radio-container"><input type="radio" name="grace_k" value="1" checked class="calc-input"><span class="radiomark"></span>Classe I (Pas de râles)</label>
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
    description: 'Classe l'insuffisance cardiaque aiguë post-infarctus du myocarde.',
    type: 'radio_group',
    groups: [
      {
        question: 'Signes cliniques d'insuffisance cardiaque',
        options: [
          { text: 'Classe I : Aucun signe d'insuffisance cardiaque gauche (râles ou B3 absents).', value: 1 },
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
    description: 'Classification fonctionnelle de la sévérité de l'insuffisance cardiaque chronique.',
    type: 'radio_group',
    groups: [
      {
        question: 'Limitation de l'activité physique',
        options: [
          { text: 'Classe I : Pas de limitation de l'activité physique. L'activité physique ordinaire n'entraîne pas de fatigue anormale, de dyspnée ou de palpitations.', value: 1 },
          { text: 'Classe II : Limitation légère de l'activité physique. Confortable au repos, mais l'activité physique ordinaire entraîne de la fatigue, des palpitations ou de la dyspnée.', value: 2 },
          { text: 'Classe III : Limitation marquée de l'activité physique. Confortable au repos, mais une activité physique moins intense que l'activité ordinaire entraîne de la fatigue, des palpitations ou de la dyspnée.', value: 3 },
          { text: 'Classe IV : Incapacité de mener une activité physique sans gêne. Les symptômes d'insuffisance cardiaque peuvent être présents au repos.', value: 4 }
        ]
      }
    ],
    calculer: (total) => {
      let cat = 'normal';
      let desc = 'Symptomatologie minime.';
      if (total >= 3) { cat = 'danger'; desc = 'Insuffisance cardiaque symptomatique pour des efforts minimes ou au repos.'; }
      else if (total === 2) { cat = 'warning'; desc = 'Dyspnée d'effort modérée.'; }
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
      { text: 'Confusion d'apparition récente (+1 pt)', points: 1 },
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
          <div class="calc-group-box">
            <div class="calc-group-title">Données Démographiques</div>
            <label class="radio-container"><input type="radio" name="psi_sexe" value="H" checked class="calc-input"><span class="radiomark"></span>Homme</label>
            <label class="radio-container"><input type="radio" name="psi_sexe" value="F" class="calc-input"><span class="radiomark"></span>Femme</label>
            <label>Âge : <input type="number" id="psi_age" value="75" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
            <label class="check-container"><input type="checkbox" id="psi_inst" class="calc-input"><span class="checkmark"></span>Vit en institution (EHPAD)</label>
          </div>
          <div class="calc-group-box">
            <div class="calc-group-title">Comorbidités (+ points)</div>
            <label class="check-container"><input type="checkbox" id="psi_neo" class="calc-input"><span class="checkmark"></span>Néoplasie active (+30)</label>
            <label class="check-container"><input type="checkbox" id="psi_foie" class="calc-input"><span class="checkmark"></span>Hépatopathie chronique (+20)</label>
            <label class="check-container"><input type="checkbox" id="psi_ic" class="calc-input"><span class="checkmark"></span>Insuffisance cardiaque (+10)</label>
            <label class="check-container"><input type="checkbox" id="psi_avc" class="calc-input"><span class="checkmark"></span>Maladie cérébrovasculaire / AVC (+10)</label>
            <label class="check-container"><input type="checkbox" id="psi_rein" class="calc-input"><span class="checkmark"></span>Insuffisance rénale chronique (+10)</label>
          </div>
          <div class="calc-group-box">
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
    description: 'Probabilité clinique d'embolie pulmonaire (EP) avant imagerie. Score maximal : 12.5.',
    type: 'checklist',
    items: [
      { text: 'Signes cliniques de thrombose veineuse profonde (TVP) (+3 pts)', points: 3 },
      { text: 'Diagnostic alternatif moins probable que l'EP (+3 pts)', points: 3 },
      { text: 'Fréquence cardiaque > 100/min (+1.5 pt)', points: 1.5 },
      { text: 'Immobilisation ≥ 3 jours ou chirurgie < 4 semaines (+1.5 pt)', points: 1.5 },
      { text: 'Antécédent personnel de TVP ou d'EP (+1.5 pt)', points: 1.5 },
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
    description: 'Évaluation clinique alternative de la probabilité d'EP. Score maximal : 22.',
    type: 'radio_group',
    groups: [
      {
        question: 'Facteurs prédisposants',
        options: [
          { text: 'Âge > 65 ans (+1 pt)', value: 1 },
          { text: 'Pas d'antécédent de TVP/EP ni chirurgie/cancer', value: 0 }
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
          { text: 'Présence d'une hémoptysie (+2 pts)', value: 2 },
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
      { text: 'Altération de l'état de conscience (GCS < 15) (+1 pt)', points: 1 },
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
    nom: 'SOFA complet (Sepsis / Dysfonction d'organe)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Sequential Organ Failure Assessment - évaluation de la dysfonction d'organes en réanimation.',
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
          { text: '4 : < 200', value: 4 }
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
          { text: '0 : Pas d'hypotension (PAM ≥ 70 mmHg)', value: 0 },
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
      let desc = 'Dysfonction d'organe mineure.';
      if (total >= 10) { cat = 'danger'; desc = 'Défaillances multiviscérales sévères. Risque de mortalité élevé (> 50%). Soins intensifs.'; }
      else if (total >= 5) { cat = 'warning'; desc = 'Dysfonction d'organe modérée.'; }
      return { total, cat, desc, max: 24 };
    }
  },
  {
    id: 'news2',
    nom: 'NEWS2 (National Early Warning Score)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Score de surveillance clinique pour la détection précoce des détériorations.',
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
      else if (total >= 5) { cat = 'warning'; desc = 'Risque modéré. Réévaluation rapprochée par le médecin responsable dans l'heure.'; }
      return { total, cat, desc, max: 20 };
    }
  },
  {
    id: 'glasgow',
    nom: 'Score de Glasgow (GCS)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Évalue la profondeur du coma et l'état de conscience. Score maximal : 15.',
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
      { text: 'Diabète sans complications d'organes (+1 pt)', points: 1 },
      { text: 'Diabète avec complications d'organes (ex: rétinopathie, néphropathie) (+2 pts)', points: 2 },
      { text: 'Hémiplégie ou paraplégie (+2 pts)', points: 2 },
      { text: 'Insuffisance rénale chronique modérée à sévère (+2 pts)', points: 2 },
      { text: 'Tumeur maligne solide sans métastases (+2 pts)', points: 2 },
      { text: 'Leucémie ou Lymphome (+2 pts)', points: 2 },
      { text: 'Hépatopathie modérée à sévère (Cirrhose) (+3 pts)', points: 3 },
      { text: 'Tumeur maligne solide métastatique (+6 pts)', points: 6 },
      { text: 'SIDA / Infection VIH active (+6 pts)', points: 6 },
      { text: 'Tranche d'âge : 50 - 59 ans (+1 pt)', points: 1 },
      { text: 'Tranche d'âge : 60 - 69 ans (+2 pts)', points: 2 },
      { text: 'Tranche d'âge : 70 - 79 ans (+3 pts)', points: 3 },
      { text: 'Tranche d'âge : ≥ 80 ans (+4 pts)', points: 4 }
    ],
    calculer: (total) => {
      // Formule de survie à 10 ans : S(10) = 0.9 ^ (e ^ (Score * 0.9))
      const expScore = Math.exp(total * 0.9);
      const survivalPercent = Math.round(Math.pow(0.9, expScore) * 100);
      let cat = 'normal';
      if (total >= 5) cat = 'danger';
      else if (total >= 3) cat = 'warning';
      return { total: total + ' pt', cat, desc: `Probabilité de survie estimée à 10 ans : ~${survivalPercent}% (index de Charlson ajusté sur l'âge).`, max: null };
    }
  },
  {
    id: 'child_pugh',
    nom: 'Score de Child-Pugh (Cirrhose)',
    domaine: 'Urgences & Soins Intensifs',
    description: 'Classe la sévérité de l'insuffisance hépatocellulaire et de la cirrhose. Score maximal : 15.',
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
          <div class="calc-group-box">
            <div class="calc-group-title">Saisir les variables biologiques</div>
            <div style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">
              <label>Créatininémie (mg/dL) : <input type="number" step="0.1" id="meld_creat" value="1.0" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>Bilirubinémie (mg/dL) : <input type="number" step="0.1" id="meld_bili" value="1.0" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>INR : <input type="number" step="0.1" id="meld_inr" value="1.0" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
              <label>Sodium sérique (mmol/L) : <input type="number" id="meld_na" value="137" class="calc-input" style="width:70px; background:var(--bg-elevated); color:var(--text1); border:1px solid var(--glass-border); border-radius:4px; padding:2px 6px;"></label>
            </div>
          </div>
          <div class="calc-group-box">
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
        if (meldNa >= 30) { cat = 'danger'; desc = 'Mortalité à 3 mois EXTRÊMEMENT ÉLEVÉE (> 50%). Urgence d'inscription pour greffe hépatique.'; }
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
    description: 'National Institutes of Health Stroke Scale - sévérité clinique de l'AVC. Score maximal : 42.',
    type: 'radio_group',
    groups: [
      { question: '1a. Niveau de conscience', options: [{text:'0: Éveillé, réactif',value:0},{text:'1: Somnolent (stimulus verbal)',value:1},{text:'2: Stuporeux (stimulus douloureux)',value:2},{text:'3: Comateux/Réponse réflexe seule',value:3}] },
      { question: '1b. Niveau de conscience : Questions (Mois, Âge)', options: [{text:'0: Répond bien aux 2',value:0},{text:'1: Répond bien à 1',value:1},{text:'2: N'en résout aucune',value:2}] },
      { question: '1c. Niveau de conscience : Ordres (Fermer les yeux, Serrer la main)', options: [{text:'0: Exécute les 2',value:0},{text:'1: Exécute 1 ordre',value:1},{text:'2: N'exécute aucun ordre',value:2}] },
      { question: '2. Regard conjugué horizontal', options: [{text:'0: Normal',value:0},{text:'1: Paralysie partielle du regard',value:1},{text:'2: Déviation forcée du regard',value:2}] },
      { question: '3. Champs visuels', options: [{text:'0: Normal',value:0},{text:'1: Hémianopsie partielle',value:1},{text:'2: Hémianopsie complète',value:2},{text:'3: Hémianopsie bilatérale (cécité corticale)',value:3}] },
      { question: '4. Paralysie faciale', options: [{text:'0: Symétrique/Normal',value:0},{text:'1: Asymétrie mineure (effacement pli nasogénien)',value:1},{text:'2: Paralysie partielle (inférieure)',value:2},{text:'3: Paralysie complète (supérieure et inférieure)',value:3}] },
      { question: '5a. Motricité bras Gauche (10 secondes maintien)', options: [{text:'0: Pas de dérive',value:0},{text:'1: Dérive modérée sans toucher le lit',value:1},{text:'2: Tombe sur le lit avant 10s',value:2},{text:'3: Aucun effort contre la pesanteur',value:3},{text:'4: Aucun mouvement',value:4}] },
      { question: '5b. Motricité bras Droit (10 secondes maintien)', options: [{text:'0: Pas de dérive',value:0},{text:'1: Dérive modérée',value:1},{text:'2: Tombe avant 10s',value:2},{text:'3: Aucun effort contre pesanteur',value:3},{text:'4: Aucun mouvement',value:4}] },
      { question: '6a. Motricité jambe Gauche (5 secondes maintien)', options: [{text:'0: Pas de dérive',value:0},{text:'1: Dérive modérée sans toucher le lit',value:1},{text:'2: Tombe sur le lit avant 5s',value:2},{text:'3: Aucun effort contre pesanteur',value:3},{text:'4: Aucun mouvement',value:4}] },
      { question: '6b. Motricité jambe Droite (5 secondes maintien)', options: [{text:'0: Pas de dérive',value:0},{text:'1: Dérive modérée',value:1},{text:'2: Tombe avant 5s',value:2},{text:'3: Aucun effort contre pesanteur',value:3},{text:'4: Aucun mouvement',value:4}] },
      { question: '7. Ataxie des membres (Doigt-nez, Talon-genou)', options: [{text:'0: Absent/Normal',value:0},{text:'1: Présent dans un membre',value:1},{text:'2: Présent dans deux membres',value:2}] },
      { question: '8. Sensibilité (piqûre)', options: [{text:'0: Normal',value:0},{text:'1: Hypoesthésie légère à modérée',value:1},{text:'2: Anesthésie sévère à complète',value:2}] },
      { question: '9. Meilleur langage', options: [{text:'0: Normal/Pas d'aphasie',value:0},{text:'1: Aphasie légère à modérée',value:1},{text:'2: Aphasie sévère (expression/compréhension très altérée)',value:2},{text:'3: Mutisme, aphasie globale',value:3}] },
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
  }
];

// Re-write file with complete calculators database
const fs = require('fs');
fs.writeFileSync(output_path, code, 'utf8');
console.log('Successfully wrote C:\\Users\\tokin\\.gemini\antigravity\scratch\geriatrie-app\calculateurs.js');

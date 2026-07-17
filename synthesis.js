const SYNTHESIS = [
  {
    id: 'bouchon',
    title: 'Modèle de Bouchon (1+2+3)',
    icon: '🧮',
    color: '#2d6a4f',
    sections: [
      {
        title: 'Le modèle des 3 facteurs',
        content: `
          <p>Le modèle de Bouchon explique toute décompensation gériatrique par l'interaction de <strong>3 facteurs</strong> :</p>
          <table class="synthesis-table">
            <thead>
              <tr><th>Facteur</th><th>Définition</th><th>Exemples</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Facteur 1</strong><br/>Vulnérabilité</td>
                <td>Vieillissement physiologique des organes = <strong>diminution des réserves fonctionnelles</strong></td>
                <td>Baisse de la DFG, de la FEVG, de la compliance pulmonaire, sarcopénie…</td>
              </tr>
              <tr>
                <td><strong>Facteur 2</strong><br/>Maladies chroniques</td>
                <td>Pathologies cumulées qui <strong>réduisent encore les réserves</strong> déjà diminuées par le F1</td>
                <td>Diabète, BPCO, insuffisance cardiaque, artériopathie, démence…</td>
              </tr>
              <tr>
                <td><strong>Facteur 3</strong><br/>Facteur précipitant</td>
                <td>Événement aigu qui <strong>fait basculer</strong> l'équilibre précaire (F1+F2) en décompensation</td>
                <td>Infection (ECP), iatrogénie, déshydratation, douleur, immobilisation, stress émotionnel…</td>
              </tr>
            </tbody>
          </table>
          <div class="key-point">
            <strong>🔑 Règle :</strong> Plus les réserves (F1+F2) sont diminuées, plus un facteur précipitant (F3) minime peut provoquer une décompensation majeure.
          </div>
        `
      },
      {
        title: 'Exemples cliniques par présentation',
        content: `
          <table class="synthesis-table">
            <thead>
              <tr><th>Présentation</th><th>Facteur 1 (Vulnérabilité)</th><th>Facteur 2 (Maladies)</th><th>Facteur 3 (Précipitant)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Dyspnée</strong></td>
                <td>Baisse compliance pulmonaire, sarcopénie respiratoire</td>
                <td>BPCO, IC gauche, obésité</td>
                <td>Infection bronchique, pneumopathie d'inhalation, iatrogénie (β-bloquants)</td>
              </tr>
              <tr>
                <td><strong>Chute</strong></td>
                <td>Baisse vision, proprioception, force musculaire</td>
                <td>Parkinson, neuropathie diabétique, arthrose</td>
                <td>Hypotension orthostatique (α-bloquants), benzodiazépines, infection urinaire</td>
              </tr>
              <tr>
                <td><strong>Confusion</strong></td>
                <td>Baisse des capacités cognitives de réserve</td>
                <td>Démence débutante, dépression, AVC ancien</td>
                <td>Infection (ECP), rétention urinaire, constipation, douleur, iatrogénie (anticholinergiques)</td>
              </tr>
              <tr>
                <td><strong>Incontinence</strong></td>
                <td>Baisse compliance vésicale, atrophie uro-génitale</td>
                <td>HTA (diurétiques), diabète (polyurie), adénome prostatique</td>
                <td>Confusion (perte des conventions), infection urinaire, constipation (impaction fécale)</td>
              </tr>
              <tr>
                <td><strong>Difficulté à marcher</strong></td>
                <td>Sarcopénie, perte d'équilibre, arthrose usure</td>
                <td>Artériopathie, séquelles d'AVC, polyneuropathie</td>
                <td>Douleur aiguë (sciatique), chute avec fracture, immobilisation prolongée, iatrogénie</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        title: 'Démarche diagnostique',
        content: `
          <ol>
            <li><strong>Détecter la vulnérabilité</strong> (F1 + F2) : évaluer les réserves fonctionnelles, énumérer les comorbidités</li>
            <li><strong>Chasser le facteur précipitant</strong> (F3) : toujours chercher un événement déclenchant — ne pas se contenter de « c'est l'âge »</li>
            <li><strong>Toujours éliminer l'iatrogénie</strong> : revue complète de la médication (critères de Beers, Laroche, STOPP/START)</li>
            <li><strong>Traiter le F3 en priorité</strong> : c'est le seul facteur rapidement et facilement réversible</li>
          </ol>
          <div class="key-point">
            <strong>⚠️ Rang A :</strong> Toute décompensation chez une personne âgée doit faire rechercher systématiquement un facteur précipitant (F3), en particulier l'iatrogénie.
          </div>
        `
      }
    ]
  },
  {
    id: 'fried',
    title: 'Critères de Fried',
    icon: '📊',
    color: '#8b2942',
    sections: [
      {
        title: 'Les 5 critères de Fried (2001)',
        content: `
          <p>La fragilité selon Fried est un <strong>syndrome biologique</strong> défini par la présence d'au moins 3 des 5 critères suivants :</p>
          <table class="synthesis-table">
            <thead>
              <tr><th>#</th><th>Critère</th><th>Seuil / Définition</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><strong>Perte de poids involontaire</strong></td>
                <td>≥ 5 kg ou ≥ 5 % du poids corporel en 12 mois</td>
              </tr>
              <tr>
                <td>2</td>
                <td><strong>Fatigue subjective</strong></td>
                <td>Échelle CES-D : « tout me fait un effort » ou « je n'arrivais pas à me mettre en route » ≥ 3 jours/semaine</td>
              </tr>
              <tr>
                <td>3</td>
                <td><strong>Réduction des activités physiques</strong></td>
                <td>PASE (Physical Activity Scale for the Elderly) au plus bas quintile pour le sexe</td>
              </tr>
              <tr>
                <td>4</td>
                <td><strong>Vitesse de marche réduite</strong></td>
                <td><strong>< 0.8 m/s</strong> sur 4 mètres (test de marche chronométré)</td>
              </tr>
              <tr>
                <td>5</td>
                <td><strong>Force de préhension (grip) réduite</strong></td>
                <td>Dynamomètre : au plus bas quintile ajusté au sexe et à l'IMC</td>
              </tr>
            </tbody>
          </table>
          <div class="key-point">
            <strong>🔑 Seuil clé :</strong> Vitesse de marche < 0.8 m/s = marqueur de fragilité et de risque de chute. À mesurer systématiquement en gériatrie.
          </div>
        `
      },
      {
        title: 'Classification et diagnostic',
        content: `
          <table class="synthesis-table">
            <thead>
              <tr><th>Nombre de critères</th><th>Statut</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>0 critère</strong></td>
                <td>🟢 Robuste</td>
                <td>Réserves suffisantes, pas de syndrome de fragilité</td>
              </tr>
              <tr>
                <td><strong>1–2 critères</strong></td>
                <td>🟡 Pré-fragile</td>
                <td>État intermédiaire, risque accru de passage à la fragilité — fenêtre d'intervention</td>
              </tr>
              <tr>
                <td><strong>≥ 3 critères</strong></td>
                <td>🔴 Fragile</td>
                <td>Syndrome de fragilité avéré — risque majeur de chutes, hospitalisation, dépendance, décès</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        title: 'Épidémiologie',
        content: `
          <ul>
            <li><strong>Prévalence :</strong> 15,5 % des personnes de plus de 65 ans (étude de cohorte)</li>
            <li><strong>Pré-fragilité :</strong> environ 45 % des > 65 ans</li>
            <li><strong>Facteurs de risque :</strong> âge élevé, sexe féminin, polymédication, comorbidités, niveau socio-économique bas</li>
            <li><strong>Conséquences :</strong> multiplie par 3 à 5 le risque de chute, d'hospitalisation et de mortalité à 3 ans</li>
          </ul>
          <div class="key-point">
            <strong>⚠️ Important :</strong> La fragilité est un état <strong>potentiellement réversible</strong> — contrairement au vieillissement biologique (F1), elle peut s'améliorer avec des interventions ciblées.
          </div>
        `
      }
    ]
  },
  {
    id: 'cascade',
    title: 'Cascade gériatrique',
    icon: '⛓️',
    color: '#1D4ED8',
    sections: [
      {
        title: 'Définition (Rang A)',
        content: `
          <p>La cascade gériatrique (<strong>Rang A</strong>) est un <strong>déséquilibre en série de fonctions d'organes vulnérables</strong> survenant chez une personne âgée après un facteur déclenchant.</p>
          <ul>
            <li>Chaque organe a des <strong>réserves diminuées</strong> (vieillissement + comorbidités)</li>
            <li>La défaillance d'un organe entraîne la défaillance du suivant</li>
            <li>Le processus se <strong>propage en chaîne</strong> si le facteur précipitant n'est pas traité</li>
          </ul>
          <div class="key-point">
            <strong>🔑 Concept clé :</strong> Un seul facteur déclenchant peut provoquer une décompensation multi-organes chez le sujet âgé fragile, alors qu'il serait bien toléré chez le sujet jeune.
          </div>
        `
      },
      {
        title: 'La chaîne typique',
        content: `
          <div class="cascade-chain">
            <p><strong>Infection</strong> → <strong>Insuffisance cardiaque</strong> → <strong>Insuffisance rénale</strong> → <strong>Confusion</strong> → <strong>Immobilisation</strong> → <strong>Malnutrition</strong> → <strong>Escarres</strong></p>
          </div>
          <table class="synthesis-table">
            <thead>
              <tr><th>Maillon</th><th>Mécanisme</th><th>Conséquence</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Infection</strong> (ECP)</td>
                <td>Hypovolémie, fièvre, déshydratation, sepsis</td>
                <td>Surcharge volémique → décompensation cardiaque</td>
              </tr>
              <tr>
                <td><strong>Insuffisance cardiaque</strong></td>
                <td>Baisse du débit cardiaque, congestion veineuse</td>
                <td>Hypoperfusion rénale → insuffisance rénale aiguë</td>
              </tr>
              <tr>
                <td><strong>Insuffisance rénale</strong></td>
                <td>Rétention urémique, désordres hydro-électrolytiques</td>
                <td>Encéphalopathie métabolique → confusion</td>
              </tr>
              <tr>
                <td><strong>Confusion</strong></td>
                <td>Délirium, perte d'autonomie aiguë</td>
                <td>Alitement prolongé → immobilisation</td>
              </tr>
              <tr>
                <td><strong>Immobilisation</strong></td>
                <td>Fonte musculaire rapide (sarcopénie aiguë)</td>
                <td>Réduction des apports → malnutrition</td>
              </tr>
              <tr>
                <td><strong>Malnutrition</strong></td>
                <td>Catabolisme, déficits immunitaires</td>
                <td>Prévention cicatrisation → escarres</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        title: 'Le cercle vicieux',
        content: `
          <p>Chaque dysfonction <strong>entretient et aggrave les autres</strong> :</p>
          <ul>
            <li>La confusion aggrave l'immobilisation</li>
            <li>L'immobilisation aggrave la malnutrition</li>
            <li>La malnutrition aggrave l'immunité → nouvelles infections</li>
            <li>Les escarres favorisent les infections → retour au début de la cascade</li>
          </ul>
          <div class="key-point">
            <strong>⚠️ Priorité absolue :</strong> Traiter le <strong>facteur précipitant (F3)</strong> le plus tôt possible pour interrompre la cascade. Chaque heure de retard augmente le risque d'irréversibilité.
          </div>
        `
      }
    ]
  },
  {
    id: 'fragilite',
    title: 'Concept de fragilité',
    icon: '🫗',
    color: '#1E3A8A',
    sections: [
      {
        title: 'Vulnérabilité vs Fragilité',
        content: `
          <table class="synthesis-table">
            <thead>
              <tr><th>Concept</th><th>Définition</th><th>Réversibilité</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vulnérabilité</strong></td>
                <td>Diminution des <strong>réserves fonctionnelles</strong> liée au vieillissement (F1) — état physiologique</td>
                <td>Non réversible (processus biologique normal)</td>
              </tr>
              <tr>
                <td><strong>Fragilité</strong></td>
                <td><strong>Syndrome clinique</strong> acquise, résultant de la combinaison vulnérabilité + comorbidités + facteurs de risque</td>
                <td><strong>Potentiellement réversible</strong> avec interventions ciblées</td>
              </tr>
            </tbody>
          </table>
          <div class="key-point">
            <strong>🔑 Distinction fondamentale :</strong> On vieillit (vulnérabilité) mais on ne devient pas forcément fragile. La fragilité est un état pathologique surajouté que l'on peut traiter.
          </div>
        `
      },
      {
        title: 'La sarcopénie',
        content: `
          <p>La sarcopénie est la <strong>perte progressive de masse et de force musculaire</strong> liée à l'âge, pierre angulaire de la fragilité :</p>
          <ul>
            <li><strong>Mécanisme :</strong> diminution des fibres musculaires (surtout type II = rapides) + infiltration graisseuse + dénervation</li>
            <li><strong>Conséquences :</strong> baisse de la vitesse de marche, augmentation du risque de chute, perte d'autonomie</li>
            <li><strong>Diagnostic :</strong> vitesse de marche < 0.8 m/s ET/OU force grip réduite</li>
            <li><strong>Facteurs aggravants :</strong> sédentarité, malnutrition protéique, inflammation chronique, carence en vitamine D</li>
          </ul>
        `
      },
      {
        title: 'Vieillissement réussi vs pathologique',
        content: `
          <table class="synthesis-table">
            <thead>
              <tr><th>Modèle</th><th>Caractéristiques</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vieillissement réussi</strong> (Rowe & Kahn)</td>
                <td>Faible risque de maladies, maintien des capacités cognitives et physiques, engagement social actif</td>
              </tr>
              <tr>
                <td><strong>Vieillissement pathologique</strong></td>
                <td>Accumulation de comorbidités, déclin fonctionnel accéléré, perte d'autonomie, fragilité</td>
              </tr>
              <tr>
                <td><strong>Vieillissement usuel</strong> (majorité)</td>
                <td>Mixte : vulnérabilité physiologique + comorbidités modérées — l'objectif est de rester dans cette catégorie</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        title: 'Réversibilité de la fragilité',
        content: `
          <p>La fragilité peut être <strong>ralentie voire inversée</strong> par des interventions sur 4 piliers :</p>
          <ol>
            <li><strong>🥗 Nutrition :</strong> apports protéiques ≥ 1–1,2 g/kg/j, supplémentation en cas de dénutrition</li>
            <li><strong>🏃 Activité physique :</strong> exercice de résistance (musculation) + exercice d'équilibre — le plus efficace des anti-âges</li>
            <li><strong>👥 Lien social :</strong> l'isolement social est un facteur indépendant de fragilité et de mortalité</li>
            <li><strong>☀️ Vitamine D :</strong> supplémentation recommandée (800–1000 UI/j) — rôle dans la force musculaire et la prévention des chutes</li>
          </ol>
          <div class="key-point">
            <strong>🔑 Rang A :</strong> L'exercice physique régulier est l'intervention la plus efficace pour prévenir et traiter la fragilité et la sarcopénie.
          </div>
        `
      }
    ]
  },
  {
    id: 'vieillissement',
    title: 'Fondements du vieillissement',
    icon: '🧬',
    color: '#1e5f8a',
    sections: [
      {
        title: 'Définitions fondamentales',
        content: `
          <table class="synthesis-table">
            <thead>
              <tr><th>Terme</th><th>Définition</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vieillissement</strong></td>
                <td>Processus biologique <strong>normal, progressif et irréversible</strong> d'altération des fonctions physiologiques et des capacités de réserve de l'organisme</td>
              </tr>
              <tr>
                <td><strong>Gérontologie</strong></td>
                <td>Science qui étudie le vieillissement dans toutes ses dimensions (biologique, psychologique, sociale)</td>
              </tr>
              <tr>
                <td><strong>Gériatrie</strong></td>
                <td>Spécialité médicale consacrée à la <strong>prévention, diagnostic et traitement des maladies des personnes âgées</strong></td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        title: 'Seuils d\'âge',
        content: `
          <table class="synthesis-table">
            <thead>
              <tr><th>Seuil</th><th>Définition</th><th>Contexte</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>≥ 60 ans</strong></td>
                <td>Personne âgée (définition sociale)</td>
                <td>Retraite, statut social de « senior »</td>
              </tr>
              <tr>
                <td><strong>≥ 65 ans</strong></td>
                <td>Seuil OMS de la personne âgée</td>
                <td>Épidémiologie, statistiques internationales</td>
              </tr>
              <tr>
                <td><strong>≥ 75 ans</strong></td>
                <td>Grand âge / haute gériatrie</td>
                <td>Seuil de fragilité accrue, évaluation gériatrique systématique recommandée</td>
              </tr>
              <tr>
                <td><strong>≥ 85 ans</strong></td>
                <td>Très grand âge (« oldest old »)</td>
                <td>Prévalence majeure de polymorbidité, fragilité, dépendance</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        title: 'Données démographiques (France)',
        content: `
          <ul>
            <li><strong>Espérance de vie :</strong> 85,2 ans (femmes) / 79,2 ans (hommes) — en constante augmentation</li>
            <li><strong>Rythme d'augmentation :</strong> +1,3 an par décennie — la « révolution de la longévité »</li>
            <li><strong>Population > 65 ans :</strong> environ 21 % de la population française en 2025</li>
            <li><strong>Population > 85 ans :</strong> segment qui croît le plus vite — enjeux majeurs de santé publique</li>
            <li><strong>Projection 2070 :</strong> plus d'un habitant sur 3 aura plus de 60 ans</li>
          </ul>
          <div class="key-point">
            <strong>📈 Enjeu :</strong> L'allongement de l'espérance de vie doit s'accompagner d'un allongement de l'espérance de vie <strong>en bonne santé</strong> (EVFS) — concept de « compression de la morbidité ».
          </div>
        `
      },
      {
        title: 'Stratégies anti-âge (Rang A)',
        content: `
          <p>Les stratégies validées pour <strong>ralentir le vieillissement</strong> et maintenir l'autonomie :</p>
          <ol>
            <li><strong>Restriction calorique :</strong> seule intervention biologique démontrée pour allonger la durée de vie dans les modèles animaux — chez l'homme : réduire les excès caloriques, jeûne intermittent controversé</li>
            <li><strong>Activité physique :</strong> l'exercice régulier est l'intervention anti-âge la plus puissante — réduit la mortalité toutes causes de 30–35 %</li>
            <li><strong>Vitamine D :</strong> supplémentation recommandée (800–1000 UI/j) — rôle dans la prévention des chutes, la force musculaire et la santé osseuse</li>
            <li><strong>Régime méditerranéen :</strong> riche en fruits, légumes, poisson, huile d'olive — réduit le risque cardiovasculaire, cognitif et de fragilité</li>
          </ol>
          <div class="key-point">
            <strong>⚠️ Rang A :</strong> L'activité physique régulière est la mesure la plus efficace pour prévenir la perte d'autonomie. Elle doit être encouragée à tout âge.
          </div>
        `
      }
    ]
  },
  {
    id: 'autonomie',
    title: 'Évaluation de l\'autonomie',
    icon: '🏠',
    color: '#1E3A8A',
    sections: [
      {
        title: 'AVD vs AVD instrumentales',
        content: `
          <table class="synthesis-table">
            <thead>
              <tr><th>Type</th><th>Activités</th><th>Échelles</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AVD (Activités de la Vie Domestique)</strong><br/>= AVD corporelles / Katz</td>
                <td>Se laver, s'habiller, aller aux toilettes, se nourrir, se mouvoir, continence</td>
                <td>Index de Katz (A à G), Echelle EVA</td>
              </tr>
              <tr>
                <td><strong>AVD-I (Instrumentales)</strong><br/>= AVD complexes / Lawton</td>
                <td>Téléphoner, faire ses courses, cuisiner, ménager, laver le linge, transports, gérer ses médicaments et son argent</td>
                <td>Échelle de Lawton (score 0–8)</td>
              </tr>
            </tbody>
          </table>
          <div class="key-point">
            <strong>🔑 Définition :</strong> L'autonomie = capacité à réaliser les AVD <strong>sans aide extérieure</strong>. La dépendance = besoin d'une aide humaine ou technique pour accomplir ces activités.
          </div>
        `
      },
      {
        title: 'Grille AGGIR et les groupes GIR',
        content: `
          <p>La grille <strong>AGGIR</strong> (Autonomie Gérontologie Groupes Iso-Ressources) est l'outil officiel français d'évaluation de la dépendance :</p>
          <ul>
            <li>Évalue <strong>10 variables discriminantes</strong> : cohérence, orientation, toilette, habillage, alimentation, élimination, transferts, déplacement intérieur, déplacement extérieur, communication à distance</li>
            <li>Chaque variable est cotée : <strong>A</strong> (fait seul), <strong>B</strong> (fait partiellement), <strong>C</strong> (ne fait pas)</li>
          </ul>
          <table class="synthesis-table">
            <thead>
              <tr><th>GIR</th><th>Niveau de dépendance</th><th>Profil</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>GIR 1</strong></td>
                <td>Dépendance totale</td>
                <td>Confinement au lit, fonctions mentales très altérées</td>
              </tr>
              <tr>
                <td><strong>GIR 2</strong></td>
                <td>Dépendance sévère</td>
                <td>Fonctions mentales altérées OU dépendance motrice importante</td>
              </tr>
              <tr>
                <td><strong>GIR 3</strong></td>
                <td>Dépendance modérée</td>
                <td>Autonomie mentale conservée, dépendance motrice partielle</td>
              </tr>
              <tr>
                <td><strong>GIR 4</strong></td>
                <td>Dépendance légère</td>
                <td>Aide pour les AVD corporelles, transferts autonomes</td>
              </tr>
              <tr>
                <td><strong>GIR 5</strong></td>
                <td>Dépendance très légère</td>
                <td>Aide ponctuelle, déplacement autonome dans le domicile</td>
              </tr>
              <tr>
                <td><strong>GIR 6</strong></td>
                <td>Autonome</td>
                <td>Personne autonome pour les AVD corporelles et les déplacements</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Allocation APA :</strong> GIR 1–4 = éligibles à l'APA (Allocation Personnalisée d'Autonomie)</p>
        `
      },
      {
        title: 'Dépendance iatrogène',
        content: `
          <p>La <strong>dépendance iatrogène</strong> est une perte d'autonomie induite ou aggravée par les soins et traitements médicaux :</p>
          <ul>
            <li><strong>Causes médicamenteuses :</strong> psychotropes (benzodiazépines), anticholinergiques, opioïdes, antihypertenseurs excessifs → chutes, confusion, sédation</li>
            <li><strong>Causes non médicamenteuses :</strong> alitement prolongé, contention physique, sonde urinaire inutile, rééducation insuffisante</li>
            <li><strong>Prévention :</strong> revue médicamenteuse systématique, levers précoces, mobilisation, sevrage des dispositifs invasifs</li>
          </ul>
          <div class="key-point">
            <strong>⚠️ Rang A :</strong> Toute prescription chez la personne âgée doit évaluer le rapport bénéfice/risque iatrogène. Le sevrage médicamenteux est un acte thérapeutique à part entière.
          </div>
        `
      },
      {
        title: 'PPS — Plan Personnalisé de Santé',
        content: `
          <p>Le <strong>Plan Personnalisé de Santé (PPS)</strong> est un dispositif de coordination des soins pour les personnes âgées en ALD (Affection de Longue Durée) :</p>
          <ul>
            <li><strong>Objectif :</strong> coordonner les différents intervenants (médecin traitant, spécialistes, professionnels paramédicaux)</li>
            <li><strong>Contenu :</strong> synthèse médicale, objectifs thérapeutiques, plan de soins, suivi coordonné</li>
            <li><strong>Indications :</strong> polymorbidité, polymédication, dépendance, risque iatrogène élevé</li>
            <li><strong>Outils complémentaires :</strong> synthèse pharmaceutique, évaluation gériatrique multidimensionnelle (EGM), projet de soins personnalisé</li>
          </ul>
          <div class="key-point">
            <strong>🔑 Enjeu :</strong> Le PPS permet de réduire les hospitalisations évitables, d'améliorer la coordination des soins et de limiter l'iatrogénie chez les patients polypathologiques.
          </div>
        `
      }
    ]
  }
];

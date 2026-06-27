// Epreuves externes — Guide complet pour la certification
const EPREUVES_EXTERNES = [
  {
    id: 'ext-1', titre: 'Structure de l\'épreuve EVC Gériatrie',
    contenu: `L'Épreuve de Validation de Compétences (EVC) en gériatrie est l'examen final de la spécialité. Elle se compose de :
    
**Format :** 2 situations cliniques (cas) de 30 minutes chacune
- 15 min de préparation (lecture du cas + prise de notes)
- 15 min de passage devant le jury (exposé + questions)

**Jury :** 2-3 membres (1 praticien hospitalier gériatre, 1 universitaire, parfois 1 interne)

**Barème :** 20 points par cas (40 points total)
- Présentation du cas : 4 points
- Analyse clinique : 6 points
- Argumentation diagnostique : 4 points
- Conduite à tenir : 4 points
- Qualité de l'exposé et communication : 2 points

**Seuil de validation :** 20/40 minimum (un cas raté peut être compensé par l'autre)`,
    tags: ['format', 'examen', 'bareme']
  },
  {
    id: 'ext-2', titre: 'Méthode ABCDE pour les cas EVC',
    contenu: `**A — Anamnèse structurée (2 min)**
- Motif d'admission en 1 phrase
- ATCD médicaux et chirurgicaux
- Traitements (TOUS, y compris OTC)
- Contexte social (seul ? aide ? EHPAD ?)
- Histoire de la maladie (chronologie)

**B — Bilan clinique (3 min)**
- Constantes vitales (PA, FC, T°, SpO2, FR)
- Examen par appareil (cardio, pulmo, neuro, abdo)
- Échelles gériatriques pertinentes (MMS, GDS, ADL, Tinetti)
- Examen physique ciblé selon le cas

**C — Critères diagnostiques (3 min)**
- Hypothèses diagnostiques (3 maximum)
- Arguments pour/contre chaque hypothèse
- Diagnostics différentiels à éliminer

**D — Démarche paraclinique (2 min)**
- Examens biologiques ciblés (pas de shotgun)
- Imagerie si pertinent
- Échelles/scores complémentaires

**E — Évolution et prise en charge (5 min)**
- Traitement immédiat
- Traitement de fond
- Prévention des complications
- Plan de sortie (domicile ? SSR ? EHPAD ?)
- Suivi à prévoir`,
    tags: ['methode', 'technique', 'ABCDE']
  },
  {
    id: 'ext-3', titre: 'Erreurs fréquentes à l\'EVC',
    contenu: `**TOP 10 des erreurs des candidats :**

1. **Ne pas présenter le cas** — Commencer directement par le diagnostic sans résumer le patient
2. **Oublier les traitements** — Ne pas citer TOUS les médicaments (source d'iatrogénie)
3. **Diagnostiques trop larges** — Proposer 10 diagnostics au lieu de 3 hiérarchisés
4. **Oublier le contexte social** — Seul ? EHPAD ? Aide à domicile ? = impact direct sur la prise en charge
5. **Pas d'échelles gériatriques** — Ne pas citer MMS, ADL, Tinetti quand le cas s'y prête
6. **Traitement sans étiologie** — Donner un traitement sans avoir cherché la cause
7. **Pas de plan de sortie** — Où va le patient après l'hospitalisation ?
8. **Lire ses notes** — Lire mot à mot au lieu de présenter de manière fluide
9. **Ne pas répondre aux questions du jury** — Esquiver au lieu de dire "je ne sais pas mais..."
10. **Dépasser le temps** — Parler trop vite ou trop longtemps`,
    tags: ['erreurs', 'pieges', 'conseils']
  },
  {
    id: 'ext-4', titre: 'Phrases clés pour le jury',
    contenu: `**Pour bien commencer :**
"Je vous présente M./Mme X, âgé(e) de Y ans, qui consulte/admis pour Z..."

**Pour structurer :**
"Mon hypothèse principale est... en faveur de quoi je retiens..."
"Les diagnostics différentiels à éliminer sont..."
"Je proposerai une prise en charge en 2 temps : immédiat puis de fond..."

**Pour argumenter :**
"Devant ce tableau clinique, je retiens X car..."
"Le score de Y vaut Z, ce qui oriente vers..."
"Les critères de W sont remplis (citer les critères)..."

**Pour conclure :**
"En résumé, ce patient présente... nécessitant..."
"Le pronostic est... avec comme facteurs pronostiques..."
"La surveillance comportera... avec réévaluation à..."

**Si vous ne savez pas :**
"Je ne connais pas la valeur exacte, mais je sais que..."
"Pour cette question précise, je consulterais... avant de décider"
"C'est un point que je n'ai pas suffisamment approfondi, mais...",

**Pour le plan de sortie :**
"Ce patient nécessite une réorientation vers... en raison de..."
"Le maintien à domicile est conditionné par..."
"Un suivi à J15 par... avec bilan de... est prévu"`,
    tags: ['phrases', 'communication', 'jury']
  },
  {
    id: 'ext-5', titre: 'Checklist J-7 à J',
    contenu: `**J-7 : Révision finale**
- Repasser tous les ITEMS (liste officielle CNEG)
- Relire les 20 fiches synthèse de l'app
- Faire 20 flashcards aléatoires par jour

**J-5 : Entraînement chronométré**
- Simuler 2 cas complets (30 min chacun)
- S'enregistrer en audio → réécouter
- Identifier ses hésitations et gaps

**J-3 : Points faibles**
- Revoir les chapitres où vous avez le moins de flashcards réussies
- Relire les pièges d'examen
- Préparer les scores par cœur (MMS, GDS, ADL, Tinetti, Braden, MNA, CAM)

**J-1 : Repos actif**
- Relire les phrases clés
- Faire 10 flashcards faciles pour booster la confiance
- Dormir 8h minimum
- Préparer affaires (convocation, carte identité, stylo)

**Jour J :**
- Petit-déjeuner complet
- Arriver 30 min avant
- Relire les fiches de garde (quick reference)
- Respiration profonde avant d'entrer
- Sourire au jury, se présenter clairement`,
    tags: ['planning', 'preparation', 'jour-J']
  }
];

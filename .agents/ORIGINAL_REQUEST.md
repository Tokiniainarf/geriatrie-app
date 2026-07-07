# Original User Request

## Initial Request — 2026-06-28T23:16:30Z

Vérifier et corriger les bugs d'analyse de données, de découpage des chapitres, de sections vides et de duplication des plans dans l'application web progressive (PWA) `geriatrie-app`.

Dossier de travail : `C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app`
Mode d'intégrité : development

## Exigences

### R1. Corriger les limites de chapitres du PDF (pages de garde/sommaires déplacés)
Créer une fonction de prétraitement au démarrage `preprocessAppData()` in `app.js` (appelée lors de l'événement `DOMContentLoaded`) qui déplace automatiquement les pages de garde, plans et tableaux de syllabus du chapitre `i+1` qui ont été inclus par erreur à la fin du chapitre `i` lors de l'extraction.
- Le bloc de fin du chapitre `i` doit être détecté dynamiquement (en recherchant les en-têtes de plan du chapitre suivant ou des indicateurs comme `stnioP` dans la seconde moitié du texte).
- Découper ce bloc de fin du chapitre `i` et le prépenser (le rajouter au début) du chapitre `i+1` pour que tous les chapitres commencent par leur page de garde et sommaire corrects.

### R2. Filtrer les tables des matières (TOC) internes au corps du texte
Améliorer la fonction `renderChapter(raw, chId)` dans `app.js` pour prétraiter le tableau `lines` et ignorer les en-têtes structurels (qui correspondent aux regex `SECTION_RE` et `LETTER_RE`) s'ils font partie d'une table des matières.
- Une ligne est considérée comme faisant partie d'une TOC s'il y a d'autres en-têtes du même type à proximité (vérification en avant et en arrière sur 5 lignes non vides : présence d'un autre en-tête du même type sans grandes lignes de texte entre les deux).
- Ne PAS filtrer le sommaire principal au tout début du chapitre (protéger les en-têtes présents d'origine dans les 40 premières lignes du contenu du chapitre après déplacement).

### R3. Supprimer proprement les sections vides
Dans le code HTML final généré par `renderChapter`, supprimer toutes les balises `<section>` dont le contenu du corps est vide (moins de 20 caractères de texte brut) afin de masquer proprement les en-têtes de plan qui n'ont pas de contenu correspondant dans la base de données (comme la partie Transfusion du chapitre 16).
- Utiliser un remplacement par expression régulière à la fin de `renderChapter` pour nettoyer le code HTML : `<section class="manual-section"><header class="section-head">...</header><div class="section-body">\\s*<\\/div><\\/section>`.

### R4. Corriger les scripts d'audit et les chemins d'accès
Corriger les chemins d'accès codés en dur (comme les dossiers de téléchargement personnels) dans `verify-all-chapters.js` et les autres scripts d'audit pour utiliser des chemins relatifs. S'assurer que tous les tests (`audit_deep.js`, `audit_empty.js`, etc.) s'exécutent correctement et affichent 0 section vide.

## Critères d'acceptation

### Qualité du contenu et vérification des plans
- [ ] L'exécution de `node audit_empty.js` doit afficher 0 section vide sur les 20 chapitres.
- [ ] Les panneaux de plan de chapitre (`ch-outline`) doivent s'afficher (`outline=true`) pour tous les chapitres contenant au moins 3 sections.
- [ ] Le chapitre 13 ("Alitement") doit correctement afficher sa première section "I. Généralités / A. Définition" au début de son contenu.

### Compatibilité
- [ ] L'application web doit se charger correctement dans le navigateur sans erreur de console, et permettre la recherche et la navigation fluide entre les chapitres.

## Follow-up — 2026-06-29T09:04:18Z

Auditer et corriger de manière exhaustive l'application progressive `geriatrie-app` pour s'assurer que la refonte de la navigation (6 onglets clean et grille d'accueil complete), du BrainFeed (carrousel horizontal double-axe tactile) et de la mise en page des chapitres (lettrines, en-têtes reformés et césures OCR corrigées) est 100% stable, esthétique, fonctionnelle et sans erreur.

Working directory: `C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app`
Integrity mode: development

## Requirements

### R1. Validation de l'ergonomie de navigation
S'assurer que la barre de navigation du bas est simplifiée à 6 onglets (Accueil, Dict, Feed, Annales, Protocoles, Réglages) et que la page d'accueil affiche une grille de 6 raccourcis complets vers tous les services de l'application (Synthèses, ITEMs, Révision, Quiz, Garde, Stats) sans aucune perte de fonctionnalité.

### R2. Validation du BrainFeed horizontal immersif (TikTok style)
Vérifier que le BrainFeed occupe le plein écran immersif (100dvh) avec une croix de fermeture en haut à gauche. Chaque publication doit fonctionner comme un carrousel horizontal (gauche/droite) fluide.
- Slide 1 : Question / Enoncé / Vignette avec un bouton d'action visible "Révéler la réponse ➔".
- Slide 2 : Réponse / mnémotechnique / explication.
- S'assurer qu'aucun texte obsolète de swipe Tinder (ex: Favori, Partager, symboles) ne pollue la carte.
- S'assurer que le snapping vertical (haut/bas) passe proprement d'une publication à la suivante sans coupure.
- Vérifier que les gradients HSL vibrants et les émojis transparents en arrière-plan s'affichent correctement.

### R3. Validation de la lisibilité des chapitres et des situations de départ
Vérifier que le rendu des chapitres est aéré :
- Séparer les titres et sous-titres OCR collés (ex: `A. Vieillissement`, `I. Définitions`).
- Remplacer les césures de mots français avec accents (ex: `pré- sence` ➔ `présence`).
- S'assurer que les "Situations de départ" condensées sur une seule ligne (ex: `50 Malaise... 114 Agitation...`) sont bien découpées individuellement et rendues sous forme de liste à puces propre avec badges de numéros.
- S'assurer de la présence de la lettrine turquoise géante sur le premier paragraphe de chaque section.

## Acceptance Criteria

### Rendu et Spécifications UI/UX
- [ ] Aucun texte ou résidu de swipe Tinder n'apparaît sur les cartes du Feed.
- [ ] Le défilement horizontal (swipe ou clic sur révéler) fonctionne sur les publications du Feed.
- [ ] L'exécution de `node audit_empty.js` affiche 0 section vide.
- [ ] Les situations de départ dans le Chapitre 1 et le Chapitre 2 s'affichent sous forme de liste avec des badges turquoises distincts au lieu d'un seul bloc de texte.
- [ ] Tous les scripts de tests et de vérifications internes (`verify_all.js`) s'exécutent avec succès.
74: 
75: ## Follow-up — 2026-06-30T11:32:26Z
76: 
77: Auditer, nettoyer et corriger de manière exhaustive le contenu textuel et le rendu des chapitres de l'application `geriatrie-app` pour éliminer toutes les erreurs d'OCR (mots coupés/répétés, phrases tronquées, chevauchements de colonnes, répétitions de paragraphes) et garantir une lecture parfaitement fluide et cohérente.
78: 
79: Working directory: `C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app`
80: Integrity mode: development
81: 
82: ## Requirements
83: 
84: ### R1. Nettoyage des césures et chevauchements de colonnes (OCR)
85: Corriger les mots coupés par des tirets ou des espaces indésirables, en particulier les cas complexes où un texte de colonne adjacente s'est intercalé au milieu d'un mot coupé (ex: `d'alté- Interrogatoire et examen\nration` doit être nettoyé en `d'altération` et le texte de l'interrogatoire replacé ou formaté proprement).
86: * *Note : Privilégier la correction directe du texte source dans `data.js` pour les erreurs statiques, combinée avec des règles de nettoyage robustes dans le parser d' `app.js` pour les cas dynamiques.*
87: 
88: ### R2. Élimination des répétitions de mots et de paragraphes
89: * Supprimer les répétitions immédiates de mots ou de fragments de mots (ex: `complémentaires plémentaires` ➔ `complémentaires`).
90: * Éliminer les répétitions de phrases ou de paragraphes entiers se produisant au niveau des transitions de pages OCR.
91: * Nettoyer les en-têtes de rubriques ECN ou les titres de sections réitérés au milieu du texte courant.
92: 
93: ### R3. Extraction et affichage des Situations de départ
94: * S'assurer que toutes les "Situations de départ" (lignes contenant un numéro de 2 ou 3 chiffres comme `295 Consultation de suivi gériatrique`) sont correctement détectées et formatées sous forme de badges dans la liste dédiée, même si l'OCR les a fusionnées ou intégrées au milieu d'un paragraphe standard.
95: * Découper ces situations et les présenter sous forme de liste à puces propre.
96: 
97: ### R4. Non-régression et stabilité
98: * Garantir que les modifications apportées ne perturbent pas le banc de test existant : tous les 51 tests de `tests/run-e2e.js` doivent continuer à passer (`PASSED`).
99: * `verify-all-chapters.js` doit s'exécuter avec succès avec 0 problème.
100: 
101: ## Acceptance Criteria
102: 
103: ### Rendu et Spécifications UI/UX
104: - [ ] L'exécution de `node tests/run-e2e.js` affiche 51 tests validés avec succès (100% PASSED).
105: - [ ] `verify-all-chapters.js` s'exécute sans erreur (0 issue).
- [ ] Aucun numéro de situation de départ (2 ou 3 chiffres, ex: `295`, `298`, `325`) n'apparaît sous forme de texte brut à l'intérieur d'un paragraphe normal dans le DOM généré (par exemple dans le Chapitre 1 et 2).
- [ ] Les mots coupés ou répétés (tels que `altéinterrogatoire` ou `complémentaires plémentaires`) n'apparaissent plus dans l'application rendered.
- [ ] Un script d'audit automatisé (ex: `audit_ocr.js`) est fourni et valide l'absence de ces anomalies sur les 20 chapitres de l'application.

## Follow-up — 2026-07-06T21:45:54Z

Refondre entièrement le contenu textuel des flashcards et du BrainFeed de l'application gériatrique en générant environ 50 flashcards de haute qualité par chapitre à partir du livre de gériatrie et des 28 PDFs de NotebookLM (par analyse visuelle des scans).

Working directory: `C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app`
Integrity mode: development

## Requirements

### R1. Génération de flashcards cliniques de haute qualité (~50 par chapitre)
* Générer environ 50 flashcards uniques de révision pour chacun des 20 chapitres de l'application (soit un total de ~1000 flashcards).
* Sourcer le contenu clinique depuis :
  * Le livre de gériatrie `C:\Users\tokin\Desktop\GERIARTRIE\Gériatrie 5e éd❤️.pdf`
  * Les 28 fichiers PDF de cas cliniques et protocoles situés dans `C:\Users\tokin\Desktop\GERIARTRIE\NOTEBOOK LM`
* Les flashcards doivent être de "vraies" questions-réponses interactives et précises (comme celles de NotebookLM), utiles pour les révisions de l'EVC et de l'internat de gériatrie.
* Les nouvelles cartes doivent être écrites en remplaçant et réorganisant proprement les fichiers de flashcards existants dans le projet (`mega-flashcards*.js`, `flashcards*.js`).

### R2. Utilisation de la vision multimodale sur les PDFs
* Pour analyser les 28 documents PDF de `NOTEBOOK LM` (qui sont des scans ou des images), l'équipe d'agents doit automatiser la conversion temporaire des pages clés du PDF en images de haute résolution, puis utiliser l'API vision du LLM pour en extraire fidèlement le contenu médical exact.

### R3. Préservation de l'existant (Code & Médias)
* **Contenu textuel uniquement :** Ne modifier que le contenu textuel (questions, réponses, explications, tags, chapitres) des bases de flashcards.
* **Mise en forme :** Ne pas modifier l'interface utilisateur, la structure JS (les formats et les objets stockés dans des constantes JavaScript), et ne pas altérer le comportement dynamique du feed.
* **Images et Vidéos :** Ne pas supprimer ou modifier les images et vidéos d'illustration déjà existantes dans l'application (notamment le tableau `visualMedias` et le dossier d'images/vidéos associées dans `images/feed/` et `images/chapters/`).

### R4. Validation et non-régression
* Garantir la stabilité de l'application. Tous les tests existants dans `tests/run-e2e.js` (51 tests E2E) doivent continuer à passe avec succès (`PASSED`).
* `verify-all-chapters.js` doit s'exécuter avec succès sans lever d'erreur.

## Acceptance Criteria

### Exactitude clinique & Volume
- [ ] L'application contient environ 50 flashcards de révision exclusives par chapitre pour chacun des 20 chapitres.
- [ ] Les flashcards sont réparties proprement dans les fichiers JS de flashcards existants.

### Préservation des médias & structure
- [ ] Toutes les images et vidéos documentées dans `brainfeed.js` (ex: `visualMedias`) et les dossiers associés sont intactes et utilisables.
- [ ] Aucune modification structurelle de l'UI du feed ou de l'application n'est effectuée.

### Tests de non-régression
- [ ] L'exécution de `node tests/run-e2e.js` affiche 51 tests validés avec succès (100% PASSED).
- [ ] `verify-all-chapters.js` s'exécute sans erreur (0 issue).

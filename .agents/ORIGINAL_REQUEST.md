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

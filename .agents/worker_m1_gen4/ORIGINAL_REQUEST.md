# Original Request

## Follow-up — 2026-06-30T11:32:26Z

Auditer, nettoyer et corriger de manière exhaustive le contenu textuel et le rendu des chapitres de l'application `geriatrie-app` pour éliminer toutes les erreurs d'OCR (mots coupés/répétés, phrases tronquées, chevauchements de colonnes, répétitions de paragraphes) et garantir une lecture parfaitement fluide et cohérente.

Working directory: `C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app`
Integrity mode: development

## Requirements

### R1. Nettoyage des césures et chevauchements de colonnes (OCR)
Corriger les mots coupés par des tirets ou des espaces indésirables, en particulier les cas complexes où un texte de colonne adjacente s'est intercalé au milieu d'un mot coupé (ex: `d'alté- Interrogatoire et examen\nration` doit être nettoyé en `d'altération` et le texte de l'interrogatoire replacé ou formaté proprement).
* Note : Privilégier la correction directe du texte source dans `data.js` pour les erreurs statiques, combinée avec des règles de nettoyage robustes dans le parser d' `app.js` pour les cas dynamiques.

### R2. Élimination des répétitions de mots et de paragraphes
* Supprimer les répétitions immédiates de mots ou de fragments de mots (ex: `complémentaires plémentaires` ➔ `complémentaires`).
* Éliminer les répétitions de phrases ou de paragraphes entiers se produisant au niveau des transitions de pages OCR.
* Nettoyer les en-têtes de rubriques ECN ou les titres de sections réitérés au milieu du texte courant.

### R3. Extraction et affichage des Situations de départ
* S'assurer que toutes les "Situations de départ" (lignes contenant un numéro de 2 ou 3 chiffres comme `295 Consultation de suivi gériatrique`) sont correctement détectées et formatées sous forme de badges dans la liste dédiée, même si l'OCR les a fusionnées ou intégrées au milieu d'un paragraphe standard.
* Découper ces situations et les présenter sous forme de liste à puces propre.

### R4. Non-régression et stabilité
* Garantir que les modifications apportées ne perturbent pas le banc de test existant : tous les 51 tests de `tests/run-e2e.js` doivent continuer à passer (`PASSED`).
* `verify-all-chapters.js` doit s'exécuter avec succès avec 0 problème.

## Acceptance Criteria

### Rendu et Spécifications UI/UX
- [ ] L'exécution de `node tests/run-e2e.js` affiche 51 tests validés avec succès (100% PASSED).
- [ ] `verify-all-chapters.js` s'exécute sans erreur (0 issue).
- [ ] Aucun numéro de situation de départ (2 ou 3 chiffres, ex: `295`, `298`, `325`) n'apparaît sous forme de texte brut à l'intérieur d'un paragraphe normal dans le DOM généré (par exemple dans le Chapitre 1 et 2).
- [ ] Les mots coupés ou répétés (tels que `altéinterrogatoire` or `complémentaires plémentaires`) n'apparaissent plus dans l'application rendered.
- [ ] Un script d'audit automatisé (ex: `audit_ocr.js`) est fourni et valide l'absence de ces anomalies sur les 20 chapitres de l'application.

## 2026-06-30T11:40:41Z
Implement the required OCR, text repetitions, and Situations of départ fixes. Make changes to:
1. data.js: Statically correct the identified column interleavings and word/phrase repetitions (e.g. alté- Interrogatoire... ration, complementary duplicates, etc.).
2. app.js:
   - Update the dynamic hyphen-fixing regex to only match hyphenation followed by newline or space + lowercase, e.g. /([a-zA-Zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)-\s*\n\s*([a-zà-öø-ÿœŒæÆÀ-ÖØ-ß]+)/g.
   - Modify the line-filtering function to protect group titles ('En lien avec') and mashed table cells (e.g. 162Dyspnée).
   - Enhance the inSit parsing block to handle mashed situation numbers, inline group titles, ignore page continuation noise without breaking the block, and exit cleanly on structural headers.
   - Update flushPara to parse bracketed number lists (e.g. [266, 267, 295, 298]) and replace them with bracketed inline badges (<span class="sit-badge-inline">).
3. style.css: Add the .sit-badge-inline class styling.
4. Create audit_ocr.js at the project root based on the design in C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\explorer_m1_3_gen4\proposed_audit_ocr.js.

Run the test suite ('node tests/run-e2e.js'), verify-all-chapters.js, and audit_ocr.js to verify that all 51 tests pass, 0 empty sections are reported, and audit_ocr.js reports 0 issues. Write your report with passing test results and code details to C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m1_gen4\handoff.md.

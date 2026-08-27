# FR–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `a2a769e8600291411a7a66eab0483dd4659c9151`
**WORK_BRANCH:** `cursor/fr-a1-owner-gala-copy-only-f5bc`
**Audit PR:** [#683](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/683)
**SCOPE:** FR–DE A1 (`data/fr/a1.js`)
**Findings:** **40** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)

> OBJECT_COVERAGE = 702/702 (100%). DISCOVERY_COMPLETENESS = NOT_GUARANTEED.
> 702/702 does NOT mean all possible defects were found.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda [fr-a1-post-repair-owner-decisions.md](fr-a1-post-repair-owner-decisions.md).
> **DE = STRICT READ-ONLY.** Production: `data/fr/a1.js` + `www/data/fr/a1.js`.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [fr-a1-post-repair-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-review-GITHUB.md) |
| OWNER README | [fr-a1-post-repair-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-review-README.md) |
| OWNER DECISIONS | [fr-a1-post-repair-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions.md) |
| Pilns audits | [fr-a1-post-repair-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-audit.md) |
| OWNER authority (filled) | [owner-authority/](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/owner-authority/) | 423 LABOT · 481 NELABOT |

## Grupas (pa 50 findingiem)

| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–40 | 40 | [fr-a1-post-repair-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-view-group01.md) | [fr-a1-post-repair-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions-group01.md) |

## Īsais saraksts (visi findingi)

- **FR-A1-0297** `a1-sehen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0313** `a1-vor` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0315** `a1-wenn` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0330** `a1-also` · `study.sectionAccents.tip.left` · MEDIUM · sectionAccents termins "Rappelez" nav atrodams sadaļā tip
- **FR-A1-0331** `a1-auch` · `study.sectionAccents.examples.lv` · MEDIUM · sectionAccents termins "viens" nav atrodams sadaļā examples
- **FR-A1-0332** `a1-telefonieren-594` · `frText` · LOW · « Appeler au téléphone » est compréhensible mais peu idiomatique comme équivalen…
- **FR-A1-0345** `a1-bleiben` · `study.comparison[1].meaning` · LOW · Le champ combine deux traductions distinctes séparées par une barre oblique ; un…
- **FR-A1-0346** `a1-bleiben` · `study.comparison[2].meaning` · LOW · Le champ combine deux traductions distinctes séparées par une barre oblique ; un…
- **FR-A1-0360** `a1-fahren` · `study.comparison[4].meaning` · MEDIUM · Le comparatif demande un infinitif ou un groupe nominal, pas l'impératif « empor…
- **FR-A1-0364** `a1-ganz-study` · `study.examples[3].lv` · MEDIUM · « assez bon » signifie plutôt bon, pas complètement bon comme « ganz » dans ce c…
- **FR-A1-0365** `a1-geben` · `study.examples[0].lv` · LOW · La phrase française nécessite une virgule d'incise et une ponctuation finale.
- **FR-A1-0366** `a1-geben` · `study.examples[1].lv` · LOW · La phrase française nécessite une ponctuation finale.
- **FR-A1-0369** `a1-geben` · `study.tip.text` · LOW · Le séparateur « • » présente plusieurs distinctions dans un champ apprenant ; dé…
- **FR-A1-0370** `a1-geschwister-study` · `study.examples[0].lv` · MEDIUM · La formulation actuelle peut signifier deux frères et deux sœurs, au lieu de deu…
- **FR-A1-0379** `a1-huebsch` · `study.tip.text` · HIGH · « nett » est un terme allemand résiduel dans le texte français.
- **FR-A1-0382** `a1-im` · `study.comparison[2].meaning` · MEDIUM · Deux sens sont séparés par une barre oblique ; une décision éditoriale est requi…
- **FR-A1-0383** `a1-im` · `study.comparison[3].meaning` · LOW · La préposition française « À » doit porter un accent grave.
- **FR-A1-0386** `a1-ins` · `study.comparison[2].meaning` · MEDIUM · Deux sens sont séparés par une barre oblique ; une décision éditoriale est requi…
- **FR-A1-0387** `a1-ins` · `study.comparison[4].meaning` · MEDIUM · Deux traductions sont séparées par une barre oblique ; une décision éditoriale e…
- **FR-A1-0389** `a1-kennen-study` · `study.comparison[?].meaning` · MEDIUM · Deux traductions distinctes sont séparées par un point-virgule ; une décision éd…
- **FR-A1-0399** `a1-lassen` · `study.examples[3].lv` · LOW · En typographie française, une espace précède le point d’exclamation.
- **FR-A1-0402** `a1-laufen` · `study.comparison[2].meaning` · LOW · « Prendre le transport » est peu naturel en français ; l’expression usuelle est …
- **FR-A1-0413** `a1-müssen` · `study.comparison[2].meaning` · MEDIUM · Le champ compare des infinitifs; « Je veux » est une forme conjuguée et ne corre…
- **FR-A1-0417** `a1-nehmen` · `study.examples[2].lv` · LOW · La phrase française ne comporte pas de ponctuation finale, contrairement aux aut…
- **FR-A1-0418** `a1-nehmen` · `study.examples[3].lv` · LOW · La phrase française ne comporte pas de ponctuation finale, contrairement aux aut…
- **FR-A1-0419** `a1-nehmen` · `study.comparison[3].meaning` · LOW · Le champ contient des équivalents à l'infinitif; « Emportez » est un impératif c…
- **FR-A1-0420** `a1-neu` · `study.tip.text` · MEDIUM · Le mot letton « rīsi » apparaît dans le texte français destiné à l'apprenant.
- **FR-A1-0434** `a1-sich` · `study.comparison[3].meaning` · MEDIUM · Lui n'est pas un pronom réfléchi ; sich correspond ici à lui-même.
- **FR-A1-0441** `a1-sollen` · `study.comparison[3].meaning` · MEDIUM · La source est le verbe gribēt ; « Je veux » est une forme personnelle et ne corr…
- **FR-A1-0448** `a1-verstehen` · `study.comparison[1].meaning` · LOW · Deux traductions distinctes sont réunies par une barre oblique dans un champ des…
- **FR-A1-0451** `a1-vom` · `study.comparison[1].meaning` · LOW · « De (général) » est elliptique et peu naturel en français; « en général » convi…
- **FR-A1-0454** `a1-vor` · `study.comparison[0].meaning` · LOW · Deux équivalents distincts sont séparés par une barre oblique dans un champ dest…
- **FR-A1-0455** `a1-vor` · `study.comparison[1].meaning` · LOW · Deux équivalents distincts sont séparés par une barre oblique dans un champ dest…
- **FR-A1-0459** `a1-wenn` · `study.comparison[0].meaning` · LOW · Deux traductions distinctes sont séparées par une barre oblique dans un champ de…
- **FR-A1-0460** `a1-wer` · `frMain` · MEDIUM · La traduction est répétée inutilement; wer possède ici un seul équivalent frança…
- **FR-A1-0462** `a1-wer` · `study.examples[1].lv` · LOW · La phrase interrogative doit se terminer par un point d'interrogation en françai…
- **FR-A1-0463** `a1-wer` · `study.examples[3].lv` · LOW · La phrase interrogative doit se terminer par un point d'interrogation en françai…
- **FR-A1-0464** `a1-werden` · `study.comparison[3].meaning` · MEDIUM · La répétition de « faire » ne distingue pas les deux notions; « fabriquer » rend…
- **FR-A1-0465** `a1-wie` · `frMain` · LOW · Deux traductions distinctes sont séparées par une puce dans un champ destiné à l…
- **FR-A1-0472** `a1-zum` · `study.examples[3].lv` · LOW · Le letton emploie l'impératif singulier informel; « venez » est pluriel ou forme…

## Pilns findingu pārskats (visi findingi)

## FR-A1-0297
**Audit ID:** FR-A1-0297
**Card ID:** `a1-sehen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Voyez
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0313
**Audit ID:** FR-A1-0313
**Card ID:** `a1-vor`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Après
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0315
**Audit ID:** FR-A1-0315
**Card ID:** `a1-wenn`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** vous
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0330
**Audit ID:** FR-A1-0330
**Card ID:** `a1-also`
**Field/path:** `study.sectionAccents.tip.left`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** also
**CURRENT:** Rappelez
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "Rappelez" nav atrodams sadaļā tip
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0331
**Audit ID:** FR-A1-0331
**Card ID:** `a1-auch`
**Field/path:** `study.sectionAccents.examples.lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** auch
**CURRENT:** viens
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "viens" nav atrodams sadaļā examples
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0332
**Audit ID:** FR-A1-0332
**Card ID:** `a1-telefonieren-594`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** telefonieren
**LV MASTER reference:** zvanīt pa tālruni
**CURRENT:** Appeler au téléphone
**PROPOSED_ET (audit ieteikums):** Téléphoner
**Problēma:** « Appeler au téléphone » est compréhensible mais peu idiomatique comme équivalent lexical de « telefonieren ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0345
**Audit ID:** FR-A1-0345
**Card ID:** `a1-bleiben`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** bleiben
**LV MASTER reference:** iet / doties prom kājām
**CURRENT:** Aller/partir à pied
**PROPOSED_ET (audit ieteikums):** Aller ou partir à pied
**Problēma:** Le champ combine deux traductions distinctes séparées par une barre oblique ; une décision éditoriale est nécessaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0346
**Audit ID:** FR-A1-0346
**Card ID:** `a1-bleiben`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** bleiben
**LV MASTER reference:** braukt / doties ar transportu
**CURRENT:** Conduire / partir en transport
**PROPOSED_ET (audit ieteikums):** Conduire ou partir en transport
**Problēma:** Le champ combine deux traductions distinctes séparées par une barre oblique ; une décision éditoriale est nécessaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0360
**Audit ID:** FR-A1-0360
**Card ID:** `a1-fahren`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** fahren
**LV MASTER reference:** paņemt līdzi
**CURRENT:** Emportez avec vous
**PROPOSED_ET (audit ieteikums):** Emporter avec soi
**Problēma:** Le comparatif demande un infinitif ou un groupe nominal, pas l'impératif « emportez ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0364
**Audit ID:** FR-A1-0364
**Card ID:** `a1-ganz-study`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ganz
**LV MASTER reference:** ēdiens ir diezgan labs.
**CURRENT:** Le repas est assez bon.
**PROPOSED_ET (audit ieteikums):** Le repas est tout à fait bon.
**Problēma:** « assez bon » signifie plutôt bon, pas complètement bon comme « ganz » dans ce contexte.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0365
**Audit ID:** FR-A1-0365
**Card ID:** `a1-geben`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** geben
**LV MASTER reference:** iedod man, lūdzu, grāmatu.
**CURRENT:** Donne-moi le livre s'il te plaît
**PROPOSED_ET (audit ieteikums):** Donne-moi le livre, s'il te plaît.
**Problēma:** La phrase française nécessite une virgule d'incise et une ponctuation finale.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Donner
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0366
**Audit ID:** FR-A1-0366
**Card ID:** `a1-geben`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** geben
**LV MASTER reference:** es tev dodu savu numuru.
**CURRENT:** Je te donne mon numéro
**PROPOSED_ET (audit ieteikums):** Je te donne mon numéro.
**Problēma:** La phrase française nécessite une ponctuation finale.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Donner
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0369
**Audit ID:** FR-A1-0369
**Card ID:** `a1-geben`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** geben
**LV MASTER reference:** Atceries: dot prom → geben; paņemt sev → nehmen.
**CURRENT:** Rappelez-vous : donner → geben • Prends pour toi → nehmen.
**Problēma:** Le séparateur « • » présente plusieurs distinctions dans un champ apprenant ; décision éditoriale requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0370
**Audit ID:** FR-A1-0370
**Card ID:** `a1-geschwister-study`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Geschwister
**LV MASTER reference:** man ir divi brāļi vai māsas.
**CURRENT:** J'ai deux frères et sœurs.
**PROPOSED_ET (audit ieteikums):** J'ai deux frères ou deux sœurs.
**Problēma:** La formulation actuelle peut signifier deux frères et deux sœurs, au lieu de deux frères ou deux sœurs.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0379
**Audit ID:** FR-A1-0379
**Card ID:** `a1-huebsch`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** hübsch
**LV MASTER reference:** Atceries: hübsch galvenokārt raksturo glītu izskatu, bet nett biežāk raksturo jauku cilvēku vai izturēšanos.
**CURRENT:** hübsch décrit surtout une jolie apparence ; nett décrit une personne aimable.
**PROPOSED_ET (audit ieteikums):** hübsch décrit surtout une jolie apparence ; gentil décrit une personne aimable.
**Problēma:** « nett » est un terme allemand résiduel dans le texte français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0382
**Audit ID:** FR-A1-0382
**Card ID:** `a1-im`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** im
**LV MASTER reference:** iekšā / uz (bez artikula)
**CURRENT:** Dans / vers (pas d'article)
**PROPOSED_ET (audit ieteikums):** Dans ou vers, sans article
**Problēma:** Deux sens sont séparés par une barre oblique ; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0383
**Audit ID:** FR-A1-0383
**Card ID:** `a1-im`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** im
**LV MASTER reference:** pie, kur? (kam?)
**CURRENT:** A, où ? (à qui ?)
**PROPOSED_ET (audit ieteikums):** À, où ? (à qui ?)
**Problēma:** La préposition française « À » doit porter un accent grave.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0386
**Audit ID:** FR-A1-0386
**Card ID:** `a1-ins`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** ins
**LV MASTER reference:** iekšā / uz (ar patstāvīgu artikulu)
**CURRENT:** In / to (avec article indépendant)
**PROPOSED_ET (audit ieteikums):** Dans ou vers, avec article indépendant
**Problēma:** Deux sens sont séparés par une barre oblique ; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0387
**Audit ID:** FR-A1-0387
**Card ID:** `a1-ins`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** ins
**LV MASTER reference:** uz / pie (kam?)
**CURRENT:** À/chez (qui ?)
**PROPOSED_ET (audit ieteikums):** À ou chez (qui ?)
**Problēma:** Deux traductions sont séparées par une barre oblique ; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0389
**Audit ID:** FR-A1-0389
**Card ID:** `a1-kennen-study`
**Field/path:** `study.comparison[?].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** kennen
**LV MASTER reference:** pazīt; wissen
**CURRENT:** Connaître ; savoir
**PROPOSED_ET (audit ieteikums):** Connaître ou savoir
**Problēma:** Deux traductions distinctes sont séparées par un point-virgule ; une décision éditoriale est requise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0399
**Audit ID:** FR-A1-0399
**Card ID:** `a1-lassen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** lassen
**LV MASTER reference:** liec mani mierā!
**CURRENT:** Laisse-moi tranquille!
**PROPOSED_ET (audit ieteikums):** Laisse-moi tranquille !
**Problēma:** En typographie française, une espace précède le point d’exclamation.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0402
**Audit ID:** FR-A1-0402
**Card ID:** `a1-laufen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** laufen
**LV MASTER reference:** braukt ar transportu
**CURRENT:** Prendre le transport
**PROPOSED_ET (audit ieteikums):** Prendre les transports
**Problēma:** « Prendre le transport » est peu naturel en français ; l’expression usuelle est « prendre les transports ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0413
**Audit ID:** FR-A1-0413
**Card ID:** `a1-müssen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** müssen
**LV MASTER reference:** gribēt
**CURRENT:** Je veux
**PROPOSED_ET (audit ieteikums):** Vouloir
**Problēma:** Le champ compare des infinitifs; « Je veux » est une forme conjuguée et ne correspond pas au format attendu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0417
**Audit ID:** FR-A1-0417
**Card ID:** `a1-nehmen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** nehmen
**LV MASTER reference:** es tev atnesu grāmatu.
**CURRENT:** Je t'ai apporté un livre
**PROPOSED_ET (audit ieteikums):** Je t'ai apporté un livre.
**Problēma:** La phrase française ne comporte pas de ponctuation finale, contrairement aux autres exemples.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0418
**Audit ID:** FR-A1-0418
**Card ID:** `a1-nehmen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** nehmen
**LV MASTER reference:** es tevi paņemšu.
**CURRENT:** Je t'emmènerai
**PROPOSED_ET (audit ieteikums):** Je t'emmènerai.
**Problēma:** La phrase française ne comporte pas de ponctuation finale, contrairement aux autres exemples.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0419
**Audit ID:** FR-A1-0419
**Card ID:** `a1-nehmen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** nehmen
**LV MASTER reference:** paņemt līdzi
**CURRENT:** Emportez avec vous
**PROPOSED_ET (audit ieteikums):** Emporter avec soi
**Problēma:** Le champ contient des équivalents à l'infinitif; « Emportez » est un impératif conjugué.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0420
**Audit ID:** FR-A1-0420
**Card ID:** `a1-neu`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**DE (read-only):** neu
**LV MASTER reference:** Atceries: der Reis ir vienskaitlis vāciski, bet latviski parasti — rīsi.
**CURRENT:** Souvenez-vous : der Reis est au singulier en allemand, mais on dit généralement rīsi en letton.
**PROPOSED_ET (audit ieteikums):** Souvenez-vous : der Reis est au singulier en allemand, mais on dit généralement « riz » en français.
**Problēma:** Le mot letton « rīsi » apparaît dans le texte français destiné à l'apprenant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0434
**Audit ID:** FR-A1-0434
**Card ID:** `a1-sich`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sich
**LV MASTER reference:** viņu
**CURRENT:** Lui
**PROPOSED_ET (audit ieteikums):** Lui-même
**Problēma:** Lui n'est pas un pronom réfléchi ; sich correspond ici à lui-même.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0441
**Audit ID:** FR-A1-0441
**Card ID:** `a1-sollen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** sollen
**LV MASTER reference:** gribēt
**CURRENT:** Je veux
**PROPOSED_ET (audit ieteikums):** Vouloir
**Problēma:** La source est le verbe gribēt ; « Je veux » est une forme personnelle et ne correspond pas au lemme.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0448
**Audit ID:** FR-A1-0448
**Card ID:** `a1-verstehen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** verstehen
**LV MASTER reference:** varēt / prast
**CURRENT:** Pouvoir/savoir
**PROPOSED_ET (audit ieteikums):** Pouvoir ou savoir
**Problēma:** Deux traductions distinctes sont réunies par une barre oblique dans un champ destiné à l'apprenant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0451
**Audit ID:** FR-A1-0451
**Card ID:** `a1-vom`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** vom
**LV MASTER reference:** no (vispārīgi)
**CURRENT:** De (général)
**PROPOSED_ET (audit ieteikums):** De (en général)
**Problēma:** « De (général) » est elliptique et peu naturel en français; « en général » convient ici.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0454
**Audit ID:** FR-A1-0454
**Card ID:** `a1-vor`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** vor
**LV MASTER reference:** pirms / priekšā
**CURRENT:** Avant / devant
**PROPOSED_ET (audit ieteikums):** Avant ou devant
**Problēma:** Deux équivalents distincts sont séparés par une barre oblique dans un champ destiné à l'apprenant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0455
**Audit ID:** FR-A1-0455
**Card ID:** `a1-vor`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** vor
**LV MASTER reference:** pēc / uz
**CURRENT:** Après / à
**PROPOSED_ET (audit ieteikums):** Après ou à
**Problēma:** Deux équivalents distincts sont séparés par une barre oblique dans un champ destiné à l'apprenant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0459
**Audit ID:** FR-A1-0459
**Card ID:** `a1-wenn`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** wenn
**LV MASTER reference:** ja / kad
**CURRENT:** Si/quand
**PROPOSED_ET (audit ieteikums):** Si ou quand
**Problēma:** Deux traductions distinctes sont séparées par une barre oblique dans un champ destiné à l'apprenant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0460
**Audit ID:** FR-A1-0460
**Card ID:** `a1-wer`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** wer
**LV MASTER reference:** kas • kurš
**CURRENT:** Qui • Qui
**PROPOSED_ET (audit ieteikums):** Qui
**Problēma:** La traduction est répétée inutilement; wer possède ici un seul équivalent français: « qui ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0462
**Audit ID:** FR-A1-0462
**Card ID:** `a1-wer`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** wer
**LV MASTER reference:** Kas tu esi?
**CURRENT:** Qui es-tu
**PROPOSED_ET (audit ieteikums):** Qui es-tu ?
**Problēma:** La phrase interrogative doit se terminer par un point d'interrogation en français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0463
**Audit ID:** FR-A1-0463
**Card ID:** `a1-wer`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** wer
**LV MASTER reference:** Kas ir tava skolotāja?
**CURRENT:** Qui est ton professeur
**PROPOSED_ET (audit ieteikums):** Qui est ton professeur ?
**Problēma:** La phrase interrogative doit se terminer par un point d'interrogation en français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0464
**Audit ID:** FR-A1-0464
**Card ID:** `a1-werden`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** werden
**LV MASTER reference:** darīt / taisīt
**CURRENT:** Faire/faire
**PROPOSED_ET (audit ieteikums):** Faire / fabriquer
**Problēma:** La répétition de « faire » ne distingue pas les deux notions; « fabriquer » rend le second sens plus clairement.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0465
**Audit ID:** FR-A1-0465
**Card ID:** `a1-wie`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** wie
**LV MASTER reference:** kā • cik
**CURRENT:** Comment • Combien
**PROPOSED_ET (audit ieteikums):** Comment ou combien
**Problēma:** Deux traductions distinctes sont séparées par une puce dans un champ destiné à l'apprenant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0472
**Audit ID:** FR-A1-0472
**Card ID:** `a1-zum`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** COMPARISON
**DE (read-only):** zum
**LV MASTER reference:** nāc ēst!
**CURRENT:** Venez manger !
**PROPOSED_ET (audit ieteikums):** Viens manger !
**Problēma:** Le letton emploie l'impératif singulier informel; « venez » est pluriel ou formel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
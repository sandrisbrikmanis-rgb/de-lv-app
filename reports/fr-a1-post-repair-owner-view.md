# FR–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `a2a769e8600291411a7a66eab0483dd4659c9151`
**WORK_BRANCH:** `cursor/fr-a1-owner-gala-copy-only-f5bc`
**Audit PR:** [#683](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/683)
**SCOPE:** FR–DE A1 (`data/fr/a1.js`)
**Findings:** **63** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)

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
| 1–50 | 50 | [fr-a1-post-repair-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-view-group01.md) | [fr-a1-post-repair-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions-group01.md) |
| 51–63 | 13 | [fr-a1-post-repair-owner-view-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-view-group02.md) | [fr-a1-post-repair-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions-group02.md) |

## Īsais saraksts (visi findingi)

- **FR-A1-0238** `a1-bitte` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0239** `a1-bleiben` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0267** `a1-ins` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0327** `a1-aber` · `study.sectionAccents.tip.left` · MEDIUM · sectionAccents termins "pretstats" nav atrodams sadaļā tip
- **FR-A1-0328** `a1-aber` · `study.sectionAccents.tip.left` · MEDIUM · sectionAccents termins "iebilde" nav atrodams sadaļā tip
- **FR-A1-0329** `a1-fünfzehnte-213` · `frText` · MEDIUM · L’article défini ajoute une détermination absente du mot allemand donné seul.
- **FR-A1-0330** `a1-fünfzigste-215` · `frText` · MEDIUM · L’article défini ajoute une détermination absente du mot allemand donné seul.
- **FR-A1-0332** `a1-so-559` · `frText` · MEDIUM · « Donc » signifie « therefore », tandis que l’allemand « so » signifie ici « ain…
- **FR-A1-0333** `a1-Text-597` · `frText` · MEDIUM · Le mot allemand est au singulier ; le français actuel est au pluriel.
- **FR-A1-0336** `a1-an` · `study.comparison[1].meaning` · HIGH · Une surface horizontale correspond normalement à auf, non à an.
- **FR-A1-0337** `a1-an` · `study.comparison[2].meaning` · HIGH · La référence à une personne ou à un lieu correspond plutôt à bei ou zu.
- **FR-A1-0338** `a1-ab` · `frMain` · MEDIUM · Ab indique un point de départ, alors que « depuis » exprime généralement une dur…
- **FR-A1-0343** `a1-auf` · `study.comparison[3].meaning` · HIGH · « À l'intérieur » ne traduit pas auf ; le champ contient en plus une alternative…
- **FR-A1-0345** `a1-aus` · `study.comparison[1].meaning` · HIGH · L'origine d'une personne se traduit plutôt par von ; aus exprime surtout la sort…
- **FR-A1-0349** `a1-aufs` · `study.comparison[3].meaning` · HIGH · Aufs signifie auf das, généralement « sur le » ou « vers le », et non « vers l'i…
- **FR-A1-0351** `a1-baden` · `study.examples[2].lv` · HIGH · « Il nage très bien » traduit schwimmen, alors que baden signifie se baigner.
- **FR-A1-0352** `a1-baden` · `study.comparison[2].meaning` · HIGH · Prendre une douche correspond à duschen, pas à baden.
- **FR-A1-0357** `a1-bringen` · `frMain` · HIGH · « À emporter » signifie take-away/emporter, pas « bringen » ; la traduction corr…
- **FR-A1-0361** `a1-die` · `study.examples[2].lv` · MEDIUM · La source désigne une enseignante et l’article allemand est féminin ; le françai…
- **FR-A1-0369** `a1-geben` · `study.comparison[1].meaning` · LOW · The slash separates a duplicated French translation; simplify or confirm the int…
- **FR-A1-0376** `a1-hoeren-study` · `frMain` · LOW · Learner-facing field contains multiple translations separated by •; owner decisi…
- **FR-A1-0378** `a1-ihr` · `frMain` · HIGH · In the dative use, « ihr » means « lui », not the nominative pronoun « elle ».
- **FR-A1-0380** `a1-im` · `frMain` · MEDIUM · « Im » is a contraction of « in dem », not the question word « où ».
- **FR-A1-0383** `a1-ins` · `frMain` · MEDIUM · « Ins » expresses movement into a place; « où ? » is not a translation.
- **FR-A1-0391** `a1-kosten` · `study.comparison[3].meaning` · MEDIUM · La formulation contient une ponctuation multiple et doit être normalisée pour l’…
- **FR-A1-0400** `a1-leise-study` · `frMain` · MEDIUM · « Calme » signifie surtout paisible; leise correspond ici à « silencieux » ou « …
- **FR-A1-0401** `a1-lauten-study` · `study.translation` · MEDIUM · Aucune traduction multiple détectée.
- **FR-A1-0403** `a1-machen` · `study.examples[0].lv` · LOW · La question française doit comporter un point d'interrogation.
- **FR-A1-0404** `a1-machen` · `study.examples[2].lv` · LOW · Le contexte letton est au singulier ; « une pizza » correspond mieux à l'exemple…
- **FR-A1-0405** `a1-mal` · `study.examples[3].lv` · LOW · Une virgule est requise après le groupe introductif « Encore une fois ».
- **FR-A1-0407** `a1-mit` · `study.examples[0].lv` · LOW · La phrase française doit se terminer par un point.
- **FR-A1-0408** `a1-mögen` · `study.examples[0].lv` · LOW · La phrase française doit se terminer par un point.
- **FR-A1-0409** `a1-mögen` · `study.examples[3].lv` · LOW · La phrase française doit se terminer par un point.
- **FR-A1-0410** `a1-morgen` · `study.examples[2].lv` · LOW · La phrase française doit se terminer par un point.
- **FR-A1-0411** `a1-morgen` · `study.examples[3].lv` · LOW · Il manque la virgule après l'adverbe placé en tête et le point final.
- **FR-A1-0412** `a1-morgen` · `study.examples[4].lv` · LOW · En typographie française, une espace précède le point d'exclamation.
- **FR-A1-0413** `a1-morgen-study` · `study.translation` · MEDIUM · Le champ contient plusieurs traductions séparées par « • » dans la structure att…
- **FR-A1-0417** `a1-müssen` · `study.examples[0].lv` · LOW · La phrase française doit se terminer par un point.
- **FR-A1-0418** `a1-müssen` · `study.examples[3].lv` · LOW · La phrase française doit se terminer par un point.
- **FR-A1-0421** `a1-natuerlich` · `study.examples[0].lv` · LOW · Il faut une majuscule après le tiret, un tiret cadratin et une espace avant le p…
- **FR-A1-0423** `a1-nur-study` · `frMain` · MEDIUM · Deux équivalents distincts sont présentés, mais le français répète le même mot. …
- **FR-A1-0425** `a1-oder` · `frMain` · MEDIUM · Deux équivalents distincts sont présentés, mais le français répète le même mot. …
- **FR-A1-0428** `a1-probieren` · `frMain` · LOW · La préposition à prend un accent grave dans ces deux expressions françaises.
- **FR-A1-0431** `a1-sehen` · `study.examples[1].lv` · HIGH · Le français emploie le vouvoiement, alors que la source indique le tutoiement si…
- **FR-A1-0443** `a1-über` · `study.comparison[3].meaning` · MEDIUM · Deux traductions distinctes sont séparées par une barre oblique ; le format doit…
- **FR-A1-0446** `a1-um` · `study.comparison[1].meaning` · MEDIUM · Deux traductions distinctes sont séparées par une barre oblique ; le format doit…
- **FR-A1-0450** `a1-verstehen` · `study.examples[0].lv` · LOW · La phrase française correcte doit se terminer par un point.
- **FR-A1-0451** `a1-verstehen` · `study.examples[1].lv` · LOW · Il manque le point d'interrogation final, avec l'espacement typographique frança…
- **FR-A1-0454** `a1-vom` · `study.comparison[2].meaning` · LOW · Deux sens distincts sont séparés par une barre oblique dans un champ apprenant.
- **FR-A1-0455** `a1-vom` · `study.comparison[3].meaning` · LOW · Deux contextes distincts sont séparés par une barre oblique.
- **FR-A1-0457** `a1-vor` · `study.examples[3].lv` · HIGH · « Après » correspond à nach, tandis que vor signifie « avant ».
- **FR-A1-0459** `a1-was` · `study.examples[0].lv` · LOW · Il manque l'espace typographique avant le point d'interrogation en français.
- **FR-A1-0460** `a1-was` · `study.examples[2].lv` · LOW · Il manque le point d'interrogation final.
- **FR-A1-0461** `a1-was` · `study.examples[3].lv` · LOW · Il manque le point d'interrogation final.
- **FR-A1-0463** `a1-wenn` · `study.examples[0].lv` · MEDIUM · Le tutoiement letton « tev » est traduit par un vouvoiement français incohérent.
- **FR-A1-0465** `a1-wie` · `study.examples[0].lv` · LOW · Il manque le point d'interrogation final.
- **FR-A1-0466** `a1-wie` · `study.examples[2].lv` · LOW · Il manque le point d'interrogation final.
- **FR-A1-0467** `a1-wie` · `study.examples[3].lv` · LOW · Il manque le point d'interrogation final.
- **FR-A1-0468** `a1-wie` · `study.examples[4].lv` · LOW · Il manque l'espace typographique avant le point d'interrogation.
- **FR-A1-0471** `a1-zu` · `study.comparison[1].meaning` · LOW · Deux catégories de lieux sont séparées par une barre oblique.
- **FR-A1-0472** `a1-zu` · `study.comparison[2].meaning` · LOW · Deux sens distincts sont séparés par une barre oblique.
- **FR-A1-0473** `a1-zu` · `study.comparison[3].meaning` · LOW · Deux emplois distincts sont séparés par une barre oblique.
- **FR-A1-0475** `a1-zug` · `study.examples[1].lv` · LOW · La phrase française correcte doit se terminer par un point.

## Pilns findingu pārskats (visi findingi)

## FR-A1-0238
**Audit ID:** FR-A1-0238
**Card ID:** `a1-bitte`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Une
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0239
**Audit ID:** FR-A1-0239
**Card ID:** `a1-bleiben`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** rentre
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0267
**Audit ID:** FR-A1-0267
**Card ID:** `a1-ins`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Viens
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0327
**Audit ID:** FR-A1-0327
**Card ID:** `a1-aber`
**Field/path:** `study.sectionAccents.tip.left`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** aber
**CURRENT:** pretstats
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "pretstats" nav atrodams sadaļā tip
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0328
**Audit ID:** FR-A1-0328
**Card ID:** `a1-aber`
**Field/path:** `study.sectionAccents.tip.left`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** aber
**CURRENT:** iebilde
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "iebilde" nav atrodams sadaļā tip
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0329
**Audit ID:** FR-A1-0329
**Card ID:** `a1-fünfzehnte-213`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** fünfzehnte
**LV MASTER reference:** piecpadsmitais
**CURRENT:** Le quinzième
**PROPOSED_ET (audit ieteikums):** Quinzième
**Problēma:** L’article défini ajoute une détermination absente du mot allemand donné seul.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0330
**Audit ID:** FR-A1-0330
**Card ID:** `a1-fünfzigste-215`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** fünfzigste
**LV MASTER reference:** piecdesmitais
**CURRENT:** Le cinquantième
**PROPOSED_ET (audit ieteikums):** Cinquantième
**Problēma:** L’article défini ajoute une détermination absente du mot allemand donné seul.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0332
**Audit ID:** FR-A1-0332
**Card ID:** `a1-so-559`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** so
**LV MASTER reference:** tā
**CURRENT:** Donc
**PROPOSED_ET (audit ieteikums):** Ainsi
**Problēma:** « Donc » signifie « therefore », tandis que l’allemand « so » signifie ici « ainsi/de cette manière ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0333
**Audit ID:** FR-A1-0333
**Card ID:** `a1-Text-597`
**Field/path:** `frText`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Text
**LV MASTER reference:** teksts
**CURRENT:** Texte
**PROPOSED_ET (audit ieteikums):** Texte
**Problēma:** Le mot allemand est au singulier ; le français actuel est au pluriel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0336
**Audit ID:** FR-A1-0336
**Card ID:** `a1-an`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** an
**LV MASTER reference:** uz horizontālas virsmas
**CURRENT:** Sur une surface horizontale
**PROPOSED_ET (audit ieteikums):** À une surface verticale
**Problēma:** Une surface horizontale correspond normalement à auf, non à an.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0337
**Audit ID:** FR-A1-0337
**Card ID:** `a1-an`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** an
**LV MASTER reference:** pie personas vai vietas
**CURRENT:** À une personne ou à un lieu
**PROPOSED_ET (audit ieteikums):** À proximité d'une surface ou d'un bord
**Problēma:** La référence à une personne ou à un lieu correspond plutôt à bei ou zu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0338
**Audit ID:** FR-A1-0338
**Card ID:** `a1-ab`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** ab
**LV MASTER reference:** no
**CURRENT:** Depuis
**PROPOSED_ET (audit ieteikums):** À partir de
**Problēma:** Ab indique un point de départ, alors que « depuis » exprime généralement une durée commencée dans le passé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0343
**Audit ID:** FR-A1-0343
**Card ID:** `a1-auf`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** auf
**LV MASTER reference:** iekšā
**CURRENT:** Sur / à
**PROPOSED_ET (audit ieteikums):** Sur une surface ou vers le haut
**Problēma:** « À l'intérieur » ne traduit pas auf ; le champ contient en plus une alternative non spécifiée.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0345
**Audit ID:** FR-A1-0345
**Card ID:** `a1-aus`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** aus
**LV MASTER reference:** no personas, vietas, virsmas
**CURRENT:** De la personne, du lieu, de la surface
**PROPOSED_ET (audit ieteikums):** D'un lieu ou de l'intérieur d'une chose
**Problēma:** L'origine d'une personne se traduit plutôt par von ; aus exprime surtout la sortie ou l'origine depuis un lieu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0349
**Audit ID:** FR-A1-0349
**Card ID:** `a1-aufs`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** aufs
**LV MASTER reference:** uz iekšu (iekš telpas)
**CURRENT:** Vers l'intérieur
**PROPOSED_ET (audit ieteikums):** Sur une surface ou vers le haut
**Problēma:** Aufs signifie auf das, généralement « sur le » ou « vers le », et non « vers l'intérieur ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0351
**Audit ID:** FR-A1-0351
**Card ID:** `a1-baden`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** baden
**LV MASTER reference:** viņš ļoti labi peld.
**CURRENT:** Il nage très bien.
**PROPOSED_ET (audit ieteikums):** Il se baigne très bien.
**Problēma:** « Il nage très bien » traduit schwimmen, alors que baden signifie se baigner.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0352
**Audit ID:** FR-A1-0352
**Card ID:** `a1-baden`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** baden
**LV MASTER reference:** mazgāties dušā
**CURRENT:** Prendre une douche
**PROPOSED_ET (audit ieteikums):** Se baigner
**Problēma:** Prendre une douche correspond à duschen, pas à baden.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0357
**Audit ID:** FR-A1-0357
**Card ID:** `a1-bringen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** bringen
**LV MASTER reference:** atnest
**CURRENT:** À emporter • À emporter
**PROPOSED_ET (audit ieteikums):** Apporter
**Problēma:** « À emporter » signifie take-away/emporter, pas « bringen » ; la traduction correcte est « apporter ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0361
**Audit ID:** FR-A1-0361
**Card ID:** `a1-die`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** die
**LV MASTER reference:** skolotāja skaidro.
**CURRENT:** Le professeur explique.
**PROPOSED_ET (audit ieteikums):** La professeure explique.
**Problēma:** La source désigne une enseignante et l’article allemand est féminin ; le français doit employer le féminin.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0369
**Audit ID:** FR-A1-0369
**Card ID:** `a1-geben`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** geben
**LV MASTER reference:** ņemt / paņemt
**CURRENT:** Prendre / prendre
**PROPOSED_ET (audit ieteikums):** Prendre
**Problēma:** The slash separates a duplicated French translation; simplify or confirm the intended comparison wording.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0376
**Audit ID:** FR-A1-0376
**Card ID:** `a1-hoeren-study`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** hören
**LV MASTER reference:** dzirdēt • klausīties
**CURRENT:** Entendre • Écouter
**PROPOSED_ET (audit ieteikums):** Entendre
**Problēma:** Learner-facing field contains multiple translations separated by •; owner decision is required.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0378
**Audit ID:** FR-A1-0378
**Card ID:** `a1-ihr`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** ihr
**LV MASTER reference:** jūs • viņai
**CURRENT:** Vous • Elle
**PROPOSED_ET (audit ieteikums):** Vous • Lui
**Problēma:** In the dative use, « ihr » means « lui », not the nominative pronoun « elle ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0380
**Audit ID:** FR-A1-0380
**Card ID:** `a1-im`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** im
**LV MASTER reference:** iekšā (-ā) • kur?
**CURRENT:** Dans • Où ?
**PROPOSED_ET (audit ieteikums):** Dans • Au
**Problēma:** « Im » is a contraction of « in dem », not the question word « où ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0383
**Audit ID:** FR-A1-0383
**Card ID:** `a1-ins`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** ins
**LV MASTER reference:** iekšā • uz iekšu • kurp?
**CURRENT:** Dans • Dans • Où ?
**PROPOSED_ET (audit ieteikums):** Dans • Vers l'intérieur
**Problēma:** « Ins » expresses movement into a place; « où ? » is not a translation.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0391
**Audit ID:** FR-A1-0391
**Card ID:** `a1-kosten`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** kosten
**LV MASTER reference:** cik maksā...?
**CURRENT:** Combien ça coûte...?
**PROPOSED_ET (audit ieteikums):** Combien ça coûte ?
**Problēma:** La formulation contient une ponctuation multiple et doit être normalisée pour l’apprenant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0400
**Audit ID:** FR-A1-0400
**Card ID:** `a1-leise-study`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** leise
**LV MASTER reference:** kluss
**CURRENT:** Calme
**PROPOSED_ET (audit ieteikums):** Silencieux
**Problēma:** « Calme » signifie surtout paisible; leise correspond ici à « silencieux » ou « doucement ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0401
**Audit ID:** FR-A1-0401
**Card ID:** `a1-lauten-study`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Laut
**LV MASTER reference:** skaņa
**CURRENT:** Le son
**PROPOSED_ET (audit ieteikums):** Le son
**Problēma:** Aucune traduction multiple détectée.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0403
**Audit ID:** FR-A1-0403
**Card ID:** `a1-machen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** machen
**LV MASTER reference:** ko tu dari?
**CURRENT:** Que fais-tu
**PROPOSED_ET (audit ieteikums):** Que fais-tu ?
**Problēma:** La question française doit comporter un point d'interrogation.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0404
**Audit ID:** FR-A1-0404
**Card ID:** `a1-machen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** machen
**LV MASTER reference:** mēs taisām picu.
**CURRENT:** Nous faisons des pizzas.
**PROPOSED_ET (audit ieteikums):** Nous faisons une pizza.
**Problēma:** Le contexte letton est au singulier ; « une pizza » correspond mieux à l'exemple source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0405
**Audit ID:** FR-A1-0405
**Card ID:** `a1-mal`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Mal
**LV MASTER reference:** vēl vienu reizi, lūdzu!
**CURRENT:** Encore une fois s'il vous plaît !
**PROPOSED_ET (audit ieteikums):** Encore une fois, s'il vous plaît !
**Problēma:** Une virgule est requise après le groupe introductif « Encore une fois ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0407
**Audit ID:** FR-A1-0407
**Card ID:** `a1-mit`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** mit
**LV MASTER reference:** es nāku ar tevi.
**CURRENT:** Je viens avec toi
**PROPOSED_ET (audit ieteikums):** Je viens avec toi.
**Problēma:** La phrase française doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0408
**Audit ID:** FR-A1-0408
**Card ID:** `a1-mögen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** mögen
**LV MASTER reference:** man patīk mūzika.
**CURRENT:** J'aime la musique
**PROPOSED_ET (audit ieteikums):** J'aime la musique.
**Problēma:** La phrase française doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0409
**Audit ID:** FR-A1-0409
**Card ID:** `a1-mögen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** mögen
**LV MASTER reference:** es gribētu kafiju.
**CURRENT:** Je voudrais du café
**PROPOSED_ET (audit ieteikums):** Je voudrais du café.
**Problēma:** La phrase française doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0410
**Audit ID:** FR-A1-0410
**Card ID:** `a1-morgen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** morgen
**LV MASTER reference:** es nāku rīt.
**CURRENT:** Je viens demain
**PROPOSED_ET (audit ieteikums):** Je viens demain.
**Problēma:** La phrase française doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0411
**Audit ID:** FR-A1-0411
**Card ID:** `a1-morgen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** morgen
**LV MASTER reference:** rīt ir pirmdiena.
**CURRENT:** Demain c'est lundi
**PROPOSED_ET (audit ieteikums):** Demain, c'est lundi.
**Problēma:** Il manque la virgule après l'adverbe placé en tête et le point final.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0412
**Audit ID:** FR-A1-0412
**Card ID:** `a1-morgen`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** morgen
**LV MASTER reference:** labrīt!
**CURRENT:** Bonjour!
**PROPOSED_ET (audit ieteikums):** Bonjour !
**Problēma:** En typographie française, une espace précède le point d'exclamation.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0413
**Audit ID:** FR-A1-0413
**Card ID:** `a1-morgen-study`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Morgen
**LV MASTER reference:** rīts
**CURRENT:** Le matin
**PROPOSED_ET (audit ieteikums):** Le matin
**Problēma:** Le champ contient plusieurs traductions séparées par « • » dans la structure attendue, mais aucune n'est visible ici.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0417
**Audit ID:** FR-A1-0417
**Card ID:** `a1-müssen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** müssen
**LV MASTER reference:** man jāiet.
**CURRENT:** Je dois y aller
**PROPOSED_ET (audit ieteikums):** Je dois y aller.
**Problēma:** La phrase française doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0418
**Audit ID:** FR-A1-0418
**Card ID:** `a1-müssen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** müssen
**LV MASTER reference:** man šodien jāstrādā.
**CURRENT:** Je dois travailler aujourd'hui
**PROPOSED_ET (audit ieteikums):** Je dois travailler aujourd'hui.
**Problēma:** La phrase française doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0421
**Audit ID:** FR-A1-0421
**Card ID:** `a1-natuerlich`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** natürlich
**LV MASTER reference:** vai nāc līdzi? – protams!
**CURRENT:** Viens-tu avec moi ? - bien sûr!
**PROPOSED_ET (audit ieteikums):** Viens-tu avec moi ? – Bien sûr !
**Problēma:** Il faut une majuscule après le tiret, un tiret cadratin et une espace avant le point d'exclamation.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0423
**Audit ID:** FR-A1-0423
**Card ID:** `a1-nur-study`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nur
**LV MASTER reference:** tikai • vienīgi
**CURRENT:** Seulement • Seulement
**PROPOSED_ET (audit ieteikums):** Seulement
**Problēma:** Deux équivalents distincts sont présentés, mais le français répète le même mot. Validation éditoriale nécessaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0425
**Audit ID:** FR-A1-0425
**Card ID:** `a1-oder`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** oder
**LV MASTER reference:** vai • jeb
**CURRENT:** Ou • Ou
**PROPOSED_ET (audit ieteikums):** Ou
**Problēma:** Deux équivalents distincts sont présentés, mais le français répète le même mot. Validation éditoriale nécessaire.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0428
**Audit ID:** FR-A1-0428
**Card ID:** `a1-probieren`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** probieren
**LV MASTER reference:** izmēģināt • nogaršot
**CURRENT:** A essayer • A déguster
**PROPOSED_ET (audit ieteikums):** À essayer • À déguster
**Problēma:** La préposition à prend un accent grave dans ces deux expressions françaises.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0431
**Audit ID:** FR-A1-0431
**Card ID:** `a1-sehen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** sehen
**LV MASTER reference:** vai tu redzi to auto?
**CURRENT:** Voyez-vous cette voiture
**PROPOSED_ET (audit ieteikums):** Vois-tu cette voiture ?
**Problēma:** Le français emploie le vouvoiement, alors que la source indique le tutoiement singulier.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0443
**Audit ID:** FR-A1-0443
**Card ID:** `a1-über`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** über
**LV MASTER reference:** no / par no kāda avota
**CURRENT:** De/à propos d'une source
**PROPOSED_ET (audit ieteikums):** De ou à propos d'une source
**Problēma:** Deux traductions distinctes sont séparées par une barre oblique ; le format doit être validé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0446
**Audit ID:** FR-A1-0446
**Card ID:** `a1-um`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** um
**LV MASTER reference:** dienā / pie
**CURRENT:** Par jour / à
**PROPOSED_ET (audit ieteikums):** Par jour ou à
**Problēma:** Deux traductions distinctes sont séparées par une barre oblique ; le format doit être validé.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0450
**Audit ID:** FR-A1-0450
**Card ID:** `a1-verstehen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** verstehen
**LV MASTER reference:** es tevi saprotu.
**CURRENT:** Je te comprends
**PROPOSED_ET (audit ieteikums):** Je te comprends.
**Problēma:** La phrase française correcte doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0451
**Audit ID:** FR-A1-0451
**Card ID:** `a1-verstehen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** verstehen
**LV MASTER reference:** vai tu saproti vāciski?
**CURRENT:** Comprenez-vous l'allemand
**PROPOSED_ET (audit ieteikums):** Comprenez-vous l'allemand ?
**Problēma:** Il manque le point d'interrogation final, avec l'espacement typographique français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0454
**Audit ID:** FR-A1-0454
**Card ID:** `a1-vom`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** vom
**LV MASTER reference:** no iekšienes / izcelsme
**CURRENT:** De l'intérieur / origine
**PROPOSED_ET (audit ieteikums):** De l'intérieur ou origine
**Problēma:** Deux sens distincts sont séparés par une barre oblique dans un champ apprenant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0455
**Audit ID:** FR-A1-0455
**Card ID:** `a1-vom`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** vom
**LV MASTER reference:** sākot no (laiks/vieta)
**CURRENT:** À partir de (heure/lieu)
**PROPOSED_ET (audit ieteikums):** À partir de (heure ou lieu)
**Problēma:** Deux contextes distincts sont séparés par une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0457
**Audit ID:** FR-A1-0457
**Card ID:** `a1-vor`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** vor
**LV MASTER reference:** pēc ēšanas mēs ejam pastaigāties.
**CURRENT:** Après avoir mangé, nous partons nous promener.
**PROPOSED_ET (audit ieteikums):** Avant de manger, nous partons nous promener.
**Problēma:** « Après » correspond à nach, tandis que vor signifie « avant ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0459
**Audit ID:** FR-A1-0459
**Card ID:** `a1-was`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** was
**LV MASTER reference:** Kas tas ir?
**CURRENT:** Qu'est-ce que c'est?
**PROPOSED_ET (audit ieteikums):** Qu'est-ce que c'est ?
**Problēma:** Il manque l'espace typographique avant le point d'interrogation en français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0460
**Audit ID:** FR-A1-0460
**Card ID:** `a1-was`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** was
**LV MASTER reference:** Ko tu tagad dari?
**CURRENT:** Que fais-tu en ce moment
**PROPOSED_ET (audit ieteikums):** Que fais-tu en ce moment ?
**Problēma:** Il manque le point d'interrogation final.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0461
**Audit ID:** FR-A1-0461
**Card ID:** `a1-was`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** was
**LV MASTER reference:** Ko tu vēlies dzert?
**CURRENT:** Que veux-tu boire
**PROPOSED_ET (audit ieteikums):** Que veux-tu boire ?
**Problēma:** Il manque le point d'interrogation final.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0463
**Audit ID:** FR-A1-0463
**Card ID:** `a1-wenn`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** wenn
**LV MASTER reference:** ja tev ir laiks, iegriezies.
**CURRENT:** Si vous avez le temps, passez nous voir.
**PROPOSED_ET (audit ieteikums):** Si tu as le temps, passe nous voir.
**Problēma:** Le tutoiement letton « tev » est traduit par un vouvoiement français incohérent.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0465
**Audit ID:** FR-A1-0465
**Card ID:** `a1-wie`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** wie
**LV MASTER reference:** kā tev iet?
**CURRENT:** Comment vas-tu
**PROPOSED_ET (audit ieteikums):** Comment vas-tu ?
**Problēma:** Il manque le point d'interrogation final.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0466
**Audit ID:** FR-A1-0466
**Card ID:** `a1-wie`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** wie
**LV MASTER reference:** cik tas maksā?
**CURRENT:** Combien ça coûte
**PROPOSED_ET (audit ieteikums):** Combien ça coûte ?
**Problēma:** Il manque le point d'interrogation final.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0467
**Audit ID:** FR-A1-0467
**Card ID:** `a1-wie`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** wie
**LV MASTER reference:** cik tev gadu?
**CURRENT:** Quel âge as-tu
**PROPOSED_ET (audit ieteikums):** Quel âge as-tu ?
**Problēma:** Il manque le point d'interrogation final.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0468
**Audit ID:** FR-A1-0468
**Card ID:** `a1-wie`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** wie
**LV MASTER reference:** cik ilgi ilgst filma?
**CURRENT:** Combien de temps dure le film?
**PROPOSED_ET (audit ieteikums):** Combien de temps dure le film ?
**Problēma:** Il manque l'espace typographique avant le point d'interrogation.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0471
**Audit ID:** FR-A1-0471
**Card ID:** `a1-zu`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** zu
**LV MASTER reference:** uz ar pilsētām/valstīm
**CURRENT:** Vers avec les villes/pays
**PROPOSED_ET (audit ieteikums):** Vers avec les villes ou les pays
**Problēma:** Deux catégories de lieux sont séparées par une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0472
**Audit ID:** FR-A1-0472
**Card ID:** `a1-zu`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** zu
**LV MASTER reference:** iekšā / uz vietu
**CURRENT:** Dans/vers un lieu
**PROPOSED_ET (audit ieteikums):** Dans ou vers un lieu
**Problēma:** Deux sens distincts sont séparés par une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0473
**Audit ID:** FR-A1-0473
**Card ID:** `a1-zu`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** zu
**LV MASTER reference:** pie kāda / pie darba
**CURRENT:** Chez quelqu'un / au travail
**PROPOSED_ET (audit ieteikums):** Chez quelqu'un ou au travail
**Problēma:** Deux emplois distincts sont séparés par une barre oblique.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0475
**Audit ID:** FR-A1-0475
**Card ID:** `a1-zug`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Zug
**LV MASTER reference:** es braucu ar vilcienu.
**CURRENT:** Je voyage en train
**PROPOSED_ET (audit ieteikums):** Je voyage en train.
**Problēma:** La phrase française correcte doit se terminer par un point.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
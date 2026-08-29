# FR–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `a2a769e8600291411a7a66eab0483dd4659c9151`
**WORK_BRANCH:** `cursor/fr-a1-owner-gala-copy-only-f5bc`
**Audit PR:** [#683](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/683)
**SCOPE:** FR–DE A1 (`data/fr/a1.js`)
**Findings:** **6** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)

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
| 1–6 | 6 | [fr-a1-post-repair-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-view-group01.md) | [fr-a1-post-repair-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions-group01.md) |

## Īsais saraksts (visi findingi)

- **FR-A1-0347** `a1-aufs` · `study.comparison[1].meaning` · MEDIUM · Two distinct meanings are combined with « ou » in one learner-facing field.
- **FR-A1-0370** `a1-halten` · `study.comparison[3].meaning` · MEDIUM · Dans « für richtig halten », halten signifie « considérer », non simplement « pe…
- **FR-A1-0411** `a1-probieren` · `study.examples[0].lv` · LOW · Aucune correction textuelle n'est nécessaire; le registre formel est acceptable …
- **FR-A1-0412** `a1-reis` · `study.examples[1].lv` · LOW · Il manque le point final à cette phrase complète, contrairement aux autres exemp…
- **FR-A1-0422** `a1-stehen` · `study.examples[0].lv` · LOW · « À la porte » est peu naturel ici et peut suggérer un appui ; « près de la port…
- **FR-A1-0444** `a1-urlaub` · `study.examples[4].lv` · LOW · « En vacances (travail) » est une formulation télégraphique et peu naturelle pou…

## Pilns findingu pārskats (visi findingi)

## FR-A1-0347
**Audit ID:** FR-A1-0347
**Card ID:** `a1-aufs`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** aufs
**LV MASTER reference:** uz virsmu vai augšup
**CURRENT:** À la surface ou vers le haut
**PROPOSED_ET (audit ieteikums):** Sur une surface
**Problēma:** Two distinct meanings are combined with « ou » in one learner-facing field.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0370
**Audit ID:** FR-A1-0370
**Card ID:** `a1-halten`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** halten
**LV MASTER reference:** domāt
**CURRENT:** Penser
**PROPOSED_ET (audit ieteikums):** Considérer
**Problēma:** Dans « für richtig halten », halten signifie « considérer », non simplement « penser ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0411
**Audit ID:** FR-A1-0411
**Card ID:** `a1-probieren`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** probieren
**LV MASTER reference:** pagaršo zupu!
**CURRENT:** Goûtez la soupe !
**PROPOSED_ET (audit ieteikums):** Goûtez la soupe !
**Problēma:** Aucune correction textuelle n'est nécessaire; le registre formel est acceptable en français.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0412
**Audit ID:** FR-A1-0412
**Card ID:** `a1-reis`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Reis
**LV MASTER reference:** es ēdu rīsus.
**CURRENT:** Je mange du riz
**PROPOSED_ET (audit ieteikums):** Je mange du riz.
**Problēma:** Il manque le point final à cette phrase complète, contrairement aux autres exemples de la carte.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0422
**Audit ID:** FR-A1-0422
**Card ID:** `a1-stehen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** stehen
**LV MASTER reference:** es stāvu pie durvīm.
**CURRENT:** Je me tiens à la porte.
**PROPOSED_ET (audit ieteikums):** Je me tiens près de la porte.
**Problēma:** « À la porte » est peu naturel ici et peut suggérer un appui ; « près de la porte » exprime mieux la position.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0444
**Audit ID:** FR-A1-0444
**Card ID:** `a1-urlaub`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Urlaub
**LV MASTER reference:** atvaļinājumā (darbs).
**CURRENT:** En vacances (travail).
**PROPOSED_ET (audit ieteikums):** En congé (professionnel).
**Problēma:** « En vacances (travail) » est une formulation télégraphique et peu naturelle pour un congé professionnel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
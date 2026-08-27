# FR–DE A1 — OWNER VIEW (grupa 4, 151–159)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#683](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/683)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [fr-a1-post-repair-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-review-GITHUB.md) |
| OWNER VIEW (visi) | [fr-a1-post-repair-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-view.md) |
| Decisions (šī grupa) | [fr-a1-post-repair-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions-group04.md) |
| Decisions (viss) | [fr-a1-post-repair-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions.md) |

Avots: [fr-a1-post-repair-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-audit.md)

## FR-A1-0501
**Audit ID:** FR-A1-0501
**Card ID:** `a1-um`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** um
**LV MASTER reference:** priekš / par labu
**CURRENT:** De/à propos d'une source
**PROPOSED_ET (audit ieteikums):** Pour / en faveur de
**Problēma:** Le français actuel exprime la provenance ou le sujet, pas le sens « pour / en faveur de ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0502
**Audit ID:** FR-A1-0502
**Card ID:** `a1-verstehen`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** verstehen
**LV MASTER reference:** saprast
**CURRENT:** Pour comprendre
**PROPOSED_ET (audit ieteikums):** Comprendre
**Problēma:** « Pour comprendre » means « pour comprendre » and does not translate the infinitive verstehen.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0503
**Audit ID:** FR-A1-0503
**Card ID:** `a1-verstehen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** verstehen
**LV MASTER reference:** saprast
**CURRENT:** Pour comprendre
**PROPOSED_ET (audit ieteikums):** Comprendre
**Problēma:** The comparison's primary meaning should be the infinitive « comprendre », not the purpose phrase « pour comprendre ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0504
**Audit ID:** FR-A1-0504
**Card ID:** `a1-vom`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** vom
**LV MASTER reference:** no
**CURRENT:** Depuis
**PROPOSED_ET (audit ieteikums):** Du / de la
**Problēma:** « Vom » generally means « du/de la » or « de », whereas « depuis » expresses duration or a starting point in time.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0505
**Audit ID:** FR-A1-0505
**Card ID:** `a1-vom`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** vom
**LV MASTER reference:** no (konkrēta lieta, kam?)
**CURRENT:** De (une chose précise, pour qui ?)
**PROPOSED_ET (audit ieteikums):** De (une chose précise, de qui ?)
**Problēma:** The Latvian source indicates origin from a person, not the recipient « pour qui ? ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0506
**Audit ID:** FR-A1-0506
**Card ID:** `a1-vor`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** vor
**LV MASTER reference:** pirms • priekšā
**CURRENT:** Avant • Devant
**PROPOSED_ET (audit ieteikums):** Avant et devant
**Problēma:** Two distinct learner-facing translations are separated by a bullet; owner decision is required on the intended format.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0508
**Audit ID:** FR-A1-0508
**Card ID:** `a1-was`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** was
**LV MASTER reference:** kas • ko
**CURRENT:** Qui • Quoi
**PROPOSED_ET (audit ieteikums):** Quoi
**Problēma:** German « was » means « quoi », not « qui »; « qui » translates wer.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0510
**Audit ID:** FR-A1-0510
**Card ID:** `a1-wenn`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** wenn
**LV MASTER reference:** ja • kad
**CURRENT:** Si • Quand
**PROPOSED_ET (audit ieteikums):** Si ou quand
**Problēma:** Two distinct learner-facing translations are separated by a bullet; owner decision is required on the intended format.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0516
**Audit ID:** FR-A1-0516
**Card ID:** `a1-fernsehen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** fernsehen
**LV MASTER reference:** televīzija (medijs)
**CURRENT:** Télévision (médias)
**PROPOSED_ET (audit ieteikums):** Télévision (média)
**Problēma:** Dans ce sens, « média » est au singulier; « médias » désigne plusieurs médias.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
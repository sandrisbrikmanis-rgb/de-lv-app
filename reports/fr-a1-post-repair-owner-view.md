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

- **FR-A1-0272** `a1-können` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0337** `a1-also` · `study.examples[0].lv` · LOW · Une virgule est nécessaire entre les deux propositions reliées par « donc ».
- **FR-A1-0338** `a1-also` · `study.examples[1].lv` · MEDIUM · Le français passe de « tu » à « vous » et l'impératif doit correspondre au tutoi…
- **FR-A1-0352** `a1-bleiben` · `study.examples[0].lv` · LOW · L'exemple français doit se terminer par un signe de ponctuation.
- **FR-A1-0354** `a1-dass` · `study.examples[2].lv` · MEDIUM · « Pareizi » signifie « correct », tandis que « vrai » signifie « vrai » et chang…
- **FR-A1-0376** `a1-gut-study` · `study.examples[3].lv` · MEDIUM · «Bonjour !» signifie une salutation, pas l'adjectif/adverbe allemand gut.

## Pilns findingu pārskats (visi findingi)

## FR-A1-0272
**Audit ID:** FR-A1-0272
**Card ID:** `a1-können`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Pouvez
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0337
**Audit ID:** FR-A1-0337
**Card ID:** `a1-also`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** also
**LV MASTER reference:** līst lietus, tāpēc es palieku mājās.
**CURRENT:** Il pleut donc je reste à la maison.
**PROPOSED_ET (audit ieteikums):** Il pleut, donc je reste à la maison.
**Problēma:** Une virgule est nécessaire entre les deux propositions reliées par « donc ».
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0338
**Audit ID:** FR-A1-0338
**Card ID:** `a1-also`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** also
**LV MASTER reference:** tu esi slims, tāpēc neej uz darbu.
**CURRENT:** Vous êtes malade alors n'allez pas travailler.
**PROPOSED_ET (audit ieteikums):** Tu es malade, alors ne va pas travailler.
**Problēma:** Le français passe de « tu » à « vous » et l'impératif doit correspondre au tutoiement de la source.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0352
**Audit ID:** FR-A1-0352
**Card ID:** `a1-bleiben`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bleiben
**LV MASTER reference:** es palieku mājās.
**CURRENT:** Je reste à la maison
**PROPOSED_ET (audit ieteikums):** Je reste à la maison.
**Problēma:** L'exemple français doit se terminer par un signe de ponctuation.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Rester
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0354
**Audit ID:** FR-A1-0354
**Card ID:** `a1-dass`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** dass
**LV MASTER reference:** es domāju, ka tas ir pareizi.
**CURRENT:** Je pense que c'est vrai.
**PROPOSED_ET (audit ieteikums):** Je pense que c'est correct.
**Problēma:** « Pareizi » signifie « correct », tandis que « vrai » signifie « vrai » et change le sens.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0376
**Audit ID:** FR-A1-0376
**Card ID:** `a1-gut-study`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gut
**LV MASTER reference:** labrīt!
**CURRENT:** Bonjour!
**PROPOSED_ET (audit ieteikums):** C'est bon !
**Problēma:** «Bonjour !» signifie une salutation, pas l'adjectif/adverbe allemand gut.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
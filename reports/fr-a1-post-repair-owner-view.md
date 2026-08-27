# FR–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `a2a769e8600291411a7a66eab0483dd4659c9151`
**WORK_BRANCH:** `cursor/fr-a1-owner-gala-copy-only-f5bc`
**Audit PR:** [#683](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/683)
**SCOPE:** FR–DE A1 (`data/fr/a1.js`)
**Findings:** **2** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)

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
| 1–2 | 2 | [fr-a1-post-repair-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-view-group01.md) | [fr-a1-post-repair-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-a1-owner-gala-copy-only-f5bc/reports/fr-a1-post-repair-owner-decisions-group01.md) |

## Īsais saraksts (visi findingi)

- **FR-A1-0372** `a1-halten` · `study.examples[0].lv` · LOW · The French example lacks final punctuation.
- **FR-A1-0374** `a1-hand-study` · `frMain` · MEDIUM · Paume means palm and incorrectly narrows the German noun Hand, which means hand.

## Pilns findingu pārskats (visi findingi)

## FR-A1-0372
**Audit ID:** FR-A1-0372
**Card ID:** `a1-halten`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/fr/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** halten
**LV MASTER reference:** es turu somu.
**CURRENT:** Je tiens un sac
**PROPOSED_ET (audit ieteikums):** Je tiens un sac.
**Problēma:** The French example lacks final punctuation.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0374
**Audit ID:** FR-A1-0374
**Card ID:** `a1-hand-study`
**Field/path:** `frMain`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Hand
**LV MASTER reference:** plauksta
**CURRENT:** Main (paume)
**PROPOSED_ET (audit ieteikums):** Main
**Problēma:** Paume means palm and incorrectly narrows the German noun Hand, which means hand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
# ET–DE A2 — OWNER VIEW
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.8
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `5820227e85eddbad63f2362fff9d8a6a3be553ae`
**WORK_BRANCH:** `cursor/et-de-a2-post-repair-audit-v18-4a7c`
**Audit PR:** [#610](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/610)
**SCOPE:** ET–DE A2 (`data/et/a2.js`)
**Findings:** **234** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)
> OBJECT_COVERAGE = 1640/1640 (100%). DISCOVERY_COMPLETENESS = NOT_GUARANTEED.
> 702/702 does NOT mean all possible defects were found.
> **Atvēršana GitHub/Cursor:** šis indekss ir īss. Pilns VIEW ir sadalīts pa **5 grupām** (pa 50 findingiem) — atver grupu failus zemāk, nevis gaidi vienu lielu monolītu.
> **DE = STRICT READ-ONLY.** Production: `data/et/a2.js` + `www/data/et/a2.js`.
## GitHub atvēršana
| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-a2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-review-GITHUB.md) |
| OWNER README | [et-a2-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-review-README.md) |
| OWNER DECISIONS (indekss) | [et-a2-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-decisions.md) |
| Pilns audits | [et-a2-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-full-audit.md) |
## Grupas (pa 50 findingiem) — **sākt šeit**
| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–50 | 50 | [et-a2-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-view-group01.md) | [et-a2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-decisions-group01.md) |
| 51–100 | 50 | [et-a2-owner-view-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-view-group02.md) | [et-a2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-decisions-group02.md) |
| 101–150 | 50 | [et-a2-owner-view-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-view-group03.md) | [et-a2-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-decisions-group03.md) |
| 151–200 | 50 | [et-a2-owner-view-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-view-group04.md) | [et-a2-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-decisions-group04.md) |
| 201–234 | 34 | [et-a2-owner-view-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-view-group05.md) | [et-a2-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-post-repair-audit-v18-4a7c/reports/et-a2-owner-decisions-group05.md) |
## Īsais saraksts
Kopā **234** findingi — pilns saturs tikai grupu VIEW failos (5 × ~50).
- **ET-A2-0001** `STRUCT` · CRITICAL
- **ET-A2-0045** `a2-borgen` · HIGH
- **ET-A2-0050** `a2-dafür` · HIGH
- **ET-A2-0057** `study-der-dank` · HIGH
- **ET-A2-0059** `a2-darauf` · HIGH
- **ET-A2-0064** `a2-dazu` · HIGH
- **ET-A2-0071** `a2-dick` · HIGH
- **ET-A2-0084** `a2-einschalten` · HIGH
- **ET-A2-0107** `a2-grund` · HIGH
- **ET-A2-0124** `a2-nutzen` · HIGH
- … un vēl **224** (skatīt grupas)
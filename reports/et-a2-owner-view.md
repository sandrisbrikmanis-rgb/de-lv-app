# ET–DE A2 — OWNER VIEW
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.8
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `e0e062fb8fc9b5a4d7824bfb32595c913017f4ee`
**WORK_BRANCH:** `cursor/et-de-a2-full-audit-v18-4a7c`
**Audit PR:** [#610](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/610)
**SCOPE:** ET–DE A2 (`data/et/a2.js`)
**Findings:** **508** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)
> OBJECT_COVERAGE = 1640/1640 (100%). DISCOVERY_COMPLETENESS = NOT_GUARANTEED.
> 702/702 does NOT mean all possible defects were found.
> **Atvēršana GitHub/Cursor:** šis indekss ir īss. Pilns VIEW ir sadalīts pa **11 grupām** (pa 50 findingiem) — atver grupu failus zemāk, nevis gaidi vienu lielu monolītu.
> **DE = STRICT READ-ONLY.** Production: `data/et/a2.js` + `www/data/et/a2.js`.
## GitHub atvēršana
| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-a2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-review-GITHUB.md) |
| OWNER README | [et-a2-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-review-README.md) |
| OWNER DECISIONS (indekss) | [et-a2-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions.md) |
| Pilns audits | [et-a2-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-full-audit.md) |
## Grupas (pa 50 findingiem) — **sākt šeit**
| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–50 | 50 | [et-a2-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group01.md) | [et-a2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group01.md) |
| 51–100 | 50 | [et-a2-owner-view-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group02.md) | [et-a2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group02.md) |
| 101–150 | 50 | [et-a2-owner-view-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group03.md) | [et-a2-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group03.md) |
| 151–200 | 50 | [et-a2-owner-view-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group04.md) | [et-a2-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group04.md) |
| 201–250 | 50 | [et-a2-owner-view-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group05.md) | [et-a2-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group05.md) |
| 251–300 | 50 | [et-a2-owner-view-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group06.md) | [et-a2-owner-decisions-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group06.md) |
| 301–350 | 50 | [et-a2-owner-view-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group07.md) | [et-a2-owner-decisions-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group07.md) |
| 351–400 | 50 | [et-a2-owner-view-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group08.md) | [et-a2-owner-decisions-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group08.md) |
| 401–450 | 50 | [et-a2-owner-view-group09.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group09.md) | [et-a2-owner-decisions-group09.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group09.md) |
| 451–500 | 50 | [et-a2-owner-view-group10.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group10.md) | [et-a2-owner-decisions-group10.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group10.md) |
| 501–508 | 8 | [et-a2-owner-view-group11.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group11.md) | [et-a2-owner-decisions-group11.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group11.md) |
## Īsais saraksts
Kopā **508** findingi — pilns saturs tikai grupu VIEW failos (11 × ~50).
- **ET-A2-0001** `STRUCT` · CRITICAL
- **ET-A2-0002** `a2-abfahren` · HIGH
- **ET-A2-0003** `a2-abfahren` · HIGH
- **ET-A2-0004** `a2-abfahren` · HIGH
- **ET-A2-0005** `a2-abgeben` · HIGH
- **ET-A2-0006** `a2-abgeben` · HIGH
- **ET-A2-0007** `a2-abgeben` · HIGH
- **ET-A2-0008** `a2-absagen` · HIGH
- **ET-A2-0009** `a2-absagen` · HIGH
- **ET-A2-0010** `a2-absagen` · HIGH
- … un vēl **498** (skatīt grupas)
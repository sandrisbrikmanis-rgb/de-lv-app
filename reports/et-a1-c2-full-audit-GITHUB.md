# ET–DE A1–C2 — Full audit index (GITHUB)

**Generated:** 2026-08-24T13:19:50.851Z
**MASTER_VERSION:** 1.12
**ORIGIN_MAIN_SHA:** `2f4d62089a66b0d101a34cd72d3fdffea2763e93`

| Dataset | Cards | Study | Multi-T raw | Multi-T OWNER | Other OWNER | Foreign | Verdict | Audit | OWNER |
|---------|-------|-------|-------------|---------------|-------------|---------|---------|-------|-------|
| A1 | 702 | 134 | **61** | **59** | **14** | 0 | **ET_A1_NEEDS_OWNER_REVIEW** | [audit](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-a1-full-audit.md) | [view](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-a1-owner-view.md) · [decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-a1-owner-decisions.md) |
| A2 | 1640 | 231 | **230** | **228** | **0** | 0 | **ET_A2_NEEDS_OWNER_REVIEW** | [audit](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-a2-full-audit.md) | [view](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-a2-owner-view.md) · [decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-a2-owner-decisions.md) |
| B1 | 3367 | 324 | **25** | **25** | **1** | 0 | **ET_B1_NEEDS_OWNER_REVIEW** | [audit](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-b1-full-audit.md) | [view](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-b1-owner-view.md) · [decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-b1-owner-decisions.md) |
| B2 | 2118 | 60 | **829** | **829** | **2** | 0 | **ET_B2_NEEDS_OWNER_REVIEW** | [audit](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-b2-full-audit.md) | [view](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-b2-owner-view.md) · [decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-b2-owner-decisions.md) |
| C1 | 572 | 15 | **102** | **100** | **13** | 0 | **ET_C1_NEEDS_OWNER_REVIEW** | [audit](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-c1-full-audit.md) | [view](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-c1-owner-view.md) · [decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-c1-owner-decisions.md) |
| C2 | 219 | 1 | **19** | **19** | **2** | 0 | **ET_C2_NEEDS_OWNER_REVIEW** | [audit](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-c2-full-audit.md) | [view](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-c2-owner-view.md) · [decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-c2-full-audit-4a7c/reports/et-c2-owner-decisions.md) |

## Production safety

| DE_CHANGES | **0** |
| PRODUCTION_CHANGES | **0** |

## v1.12 reopen note

Prior MASTER **v1.11** audit on this branch reported `MULTIPLE_TRANSLATION violations = 0` for all datasets.
Under **v1.12 §14 INVALID AUDIT GATE** that result was **INVALID** (tooling scanned only `entry.lv` on ordinary cards).
This re-audit uses renderer-aligned `MAIN_TRANSLATION_FIELD_INVENTORY` and reports raw multi-T candidates above.

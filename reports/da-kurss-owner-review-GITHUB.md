# DA–DE Kurss — GitHub atvēršanas indekss

**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1
**Branch:** `cursor/da-kurss-master-v11-audit-fffe`
**Audit PR:** [#585](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/585)
**Findings:** **95** · **Verdict:** NEEDS OWNER REVIEW

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| [OWNER README](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-review-README.md) | Workflow, kopsavilkums, triage piezīmes |
| [Šis indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-review-GITHUB.md) | Visas GitHub saites |
| [Pilns audits](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-full-audit.md) | 1264/1264 lauki · MASTER v1.1 |

## Preview ↔ Decisions ↔ Accepted (viss komplekts)

| Tips | Fails |
|------|-------|
| Preview (95 findingi) | [da-kurss-owner-review.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-review.md) |
| Decisions (PENDING) | [da-kurss-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-decisions.md) |
| Accepted (ieteicamais LABOT) | [da-kurss-owner-accepted.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-accepted.md) |

## Grupu preview (pa 50 findingiem)

| Findings | Preview | Decisions | Statuss |
|----------|---------|-----------|---------|
| 1–50 | [Preview](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-review-group01.md) | [Decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-decisions-group01.md) | **PENDING** |
| 51–95 | [Preview](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-review-group02.md) | [Decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-decisions-group02.md) | **PENDING** |

## Kopsavilkums

| Severity | Skaits |
|----------|--------|
| CRITICAL | **17** |
| HIGH | **52** |
| MEDIUM | **18** |
| LOW | **5** |
| NEEDS_SOURCE_REVIEW | **1** |

## OWNER triage (pirms aizpildīšanas)

1. **#1–16** (`lesson7ExerciseCardsDa[*].lv`) — iespējams **FALSE_POSITIVE**: DA imperatīva kartes bez `.lv` atbilst SV/NO konvencijai; pārbaudīt renderer, nevis akli pievienot `.lv`.
2. **#17–26** (`FOREIGN_REMNANT` deterministic legacyHtml) — daļa ir false-positive (DE dialogi, macron `(rāt)`); prioritizēt Luna findingus (#27+).
3. **CRITICAL HTML** — `kurssArticlesLesson`, `kurssPronounsLesson`, `kurssPronunciationLesson`, `kurssConsonantsLesson`, `kurssSentenceStructureLesson` — augsta prioritāte.

## Apply (pēc OWNER lēmuma)

1. Aizpildīt `da-kurss-owner-decisions.md` (vai group failus).
2. COPY-ONLY apply uz `data/da/` + `www/data/da/` mirror.
3. **DE nemainīt.** Targeted regression pēc apply.

**Production changes = 0 · DE changes = 0 · Coverage = 1264/1264**
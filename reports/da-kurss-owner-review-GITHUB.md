# DA–DE Kurss — GitHub atvēršanas indekss

**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1
**Branch:** `main`
**Audit PR:** [#585](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/585)
**Findings:** **95** → post-repair **26** · **Verdict:** OWNER REVIEW COMPLETE (26/26) · **LABOT applied (95 posms):** 47/48

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| [OWNER README](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-review-README.md) | Workflow, kopsavilkums, triage piezīmes |
| [Šis indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-review-GITHUB.md) | Visas GitHub saites |
| [Pilns audits](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-full-audit.md) | 1264/1264 · post-repair **26** findings |
| [Post-repair 26 OWNER indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-post-repair-26-owner-review-GITHUB.md) | **26/26** signed · 0 LABOT · 9 NSR backlog |
| [Pilna audita GitHub indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-full-audit-GITHUB.md) | Saites uz `da-kurss-full-audit.md` + JSON |

## Preview ↔ Decisions ↔ Accepted (viss komplekts)

| Tips | Fails |
|------|-------|
| Preview (95 findingi) | [da-kurss-owner-review.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-review.md) |
| Decisions (signed) | [da-kurss-owner-decisions-signed.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-decisions-signed.md) |
| Decisions (merged) | [da-kurss-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-decisions.md) |
| Accepted (LABOT track) | [da-kurss-owner-accepted.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-accepted.md) |
| Repair apply report | [da-kurss-owner-repair-apply.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-repair-apply.md) |

## Grupu preview (pa 50 findingiem)

| Findings | Preview | Decisions | Statuss |
|----------|---------|-----------|---------|
| 1–50 | [Preview](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-review-group01.md) | [Decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-decisions-group01.md) | **SIGNED** |
| 51–95 | [Preview](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-review-group02.md) | [Decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-decisions-group02.md) | **SIGNED** |

## Kopsavilkums

| Severity | Skaits |
|----------|--------|
| CRITICAL | **17** → **0** (post-repair) |
| HIGH | **52** → **25** |
| MEDIUM | **18** → **1** |
| LOW | **5** → **0** |
| Post-repair kopā | **26** — skat. [pilna audita GitHub indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-full-audit-GITHUB.md) |

## OWNER triage (pirms aizpildīšanas)

1. **#1–16** (`lesson7ExerciseCardsDa[*].lv`) — iespējams **FALSE_POSITIVE**: DA imperatīva kartes bez `.lv` atbilst SV/NO konvencijai; pārbaudīt renderer, nevis akli pievienot `.lv`.
2. **#17–26** (`FOREIGN_REMNANT` deterministic legacyHtml) — daļa ir false-positive (DE dialogi, macron `(rāt)`); prioritizēt Luna findingus (#27+).
3. **CRITICAL HTML** — `kurssArticlesLesson`, `kurssPronounsLesson`, `kurssPronunciationLesson`, `kurssConsonantsLesson`, `kurssSentenceStructureLesson` — augsta prioritāte.

## Apply (completed)

1. Signed decisions: `da-kurss-owner-decisions-signed.md`
2. COPY-ONLY apply on `data/da/` + `www/` mirror — **47/48 LABOT** (#31 skipped: anchor absent)
3. **DE nemainīts.** Regression PASS — see [repair apply report](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-repair-apply.md)

**Production changes = 0 · DE changes = 0 · Coverage = 1264/1264**
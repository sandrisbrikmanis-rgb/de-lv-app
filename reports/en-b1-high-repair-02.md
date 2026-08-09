# EN–DE B1 HIGH REPAIR #2

**Date:** 2026-08-09  
**Scope:** 25 owner-reviewed HIGH cards (OWNER verdict: LABOT 25/25)  
**Branch:** `cursor/en-b1-high-repair-02-6850`

## Production files changed

| File | Change |
|------|--------|
| `data/en/b1.js` | 25-card learner-facing EN + sectionAccents repairs |
| `www/data/en/b1.js` | Mirror of `data/en/b1.js` |

**READ-ONLY preserved:** `data/b1.js` — unchanged.

## Cards repaired: 25/25

| # | Card ID | Fields repaired |
|---|---------|-----------------|
| 1 | `b1-weder` | `study.explanation`, `sectionAccents.comparison[*].meaning.purple` |
| 2 | `b1-zeugnis` | `lv`, `study.translation`, `study.explanation`, `study.examples[0].lv`, `study.important.text`, `study.comparison[0].meaning`, `study.comparison[1].meaning`, `sectionAccents` |
| 3 | `b1-sich-befinden-study` | `study.tip.leftBlocks[1].text`, `study.comparison[2].meaning`, `sectionAccents`, `study.accents.purple` |
| 4 | `b1-beruf` | `study.examples[0].lv`, `study.examples[1].lv`, `study.important.text`, `sectionAccents`, `study.accents.purple` |
| 5 | `b1-Umgebung-6` | `lv` → Surroundings |
| 6 | `b1-Aktentasche-8` | `lv` → Briefcase |
| 7 | `b1-Alarm-11` | `lv` → Alarm |
| 8 | `b1-Angehörige-23` | `lv` → Relative |
| 9 | `b1-abfragen-46` | `lv` → To query / to test |
| 10 | `b1-abhängig-54` | `lv` → Dependent |
| 11 | `b1-Ablauf-59` | `lv` → Process / sequence |
| 12 | `b1-absichern-80` | `lv` → To secure / safeguard |
| 13 | `b1-absperren-84` | `lv` → To cordon off / block |
| 14 | `b1-abschaffen-71` | `lv` → To abolish |
| 15 | `b1-Ambulanz-106` | `lv` → Outpatient clinic |
| 16 | `b1-Anklang-115` | `lv` → Appeal / resonance |
| 17 | `b1-anknüpfen-116` | `lv` → To connect / build on |
| 18 | `b1-Anlauf-117` | `lv` → Run-up / attempt |
| 19 | `b1-anlehnen-120` | `lv` → To lean against |
| 20 | `b1-anliegend-122` | `lv` → Attached / enclosed |
| 21 | `b1-Anrede-129` | `lv` → Form of address / salutation |
| 22 | `b1-Ansager-135` | `lv` → Announcer |
| 23 | `b1-anschaulich-136` | `lv` → Clear / vivid |
| 24 | `b1-anschreiben-141` | `lv` → To write to |
| 25 | `b1-Ansichtskarte-146` | `lv` → Postcard |

## Owner-approved notes preserved

- `b1-weder` — `study.examples[0].lv` kept as `I don't drink coffee or tea.` (OWNER ACCEPTED)
- Normal-card `/` multi-meaning FINAL EN preserved (e.g. `Process / sequence`, `To query / to test`)

## Validation

| Check | Result |
|-------|--------|
| JavaScript syntax | PASS |
| Total cards | 3367 |
| DE READ-ONLY | PASS |
| Mirror parity | PASS |
| Unexpected production changes | 0 (within 25-card scope) |

## Scripts

- `reports/temp/en-b1-high-repair-02.js`
- `reports/temp/en-b1-high-regression-02.js`

## Status

`EN–DE B1 HIGH REPAIR #2 — COMPLETE — READY FOR HIGH OWNER REVIEW #3`

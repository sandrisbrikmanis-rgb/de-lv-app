# ET–DE Kurss — Live / Runtime Final Regression

**Generated:** 2026-08-24T09:23:20.256Z
**Git:** 8f91ded6

## Verdict

**ET_KURSS_REOPEN_NEEDS_OWNER_REVIEW** — 1 duplicate-path LV remnant at L18 `Kindel aine` (same CURRENT as REOPEN-OWNER-009, different path).

## Content regression

| Metric | Value |
|--------|-------|
| CONTENT_REPAIR requested (reopen audit) | 25 |
| OWNER granular applied (L1–L7) | 11 |
| OWNER REOPEN batch applied (L14–L18) | 14/14 |
| CONTENT_REPAIR verified | 24/25 |
| NEEDS_OWNER_DECISION (duplicate path) | 1 |
| CURRENT_VALUE_MISMATCH | 0 |
| KNOWN_REOPEN_CONTENT_DEFECTS | 1 |

## Shared renderer regression

| Check | Result |
|-------|--------|
| findCourseLessonCardSection passes full section | PASS |
| ET L18 exercise deck (data) | 8 cards |
| ET L18 translate deck (data) | 18 cards |
| Browser L18 Harjutus / Tõlgi | PASS (exerciseDeckLen=32 runtime, translateDeckLen=18, cards populated) |
| SHARED_DYNAMIC_CARD_RENDER (all langs L8–L21) | PASS |

## Structural gates

| Gate | Result |
|------|--------|
| DE_CHANGES | 0 |
| MIRROR data/et ↔ www/data/et | PASS |
| MIRROR ui.js ↔ www/ui.js | PASS |
| validate-kurss --lang=et | PASS |
| LV behavior unchanged | PASS |

## Remaining OWNER decisions

- L18 `Kindel aine` examples[0]: `Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē.` (duplicate of REOPEN-OWNER-009 CURRENT, path not in OWNER batch)

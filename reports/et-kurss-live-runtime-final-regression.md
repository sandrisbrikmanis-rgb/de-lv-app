# ET–DE Kurss — Live / Runtime Final Regression

**Generated:** 2026-08-24T10:01:50.496Z
**Git:** 6045bdf7

## Verdict

**ET_KURSS_LIVE_RUNTIME_REOPEN_REPAIR_PASS**

All reopen defects resolved.

## Content regression

| Metric | Value |
|--------|-------|
| CONTENT_REPAIR requested | 25 |
| OWNER granular applied (L1–L7 legacyHtml) | 11 |
| CONTENT_REPAIR verified | 25/25 |
| NEEDS_OWNER_DECISION rows | 0 |
| CURRENT_VALUE_MISMATCH | 0 |
| KNOWN_REOPEN_CONTENT_DEFECTS | 0 |

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

_None_

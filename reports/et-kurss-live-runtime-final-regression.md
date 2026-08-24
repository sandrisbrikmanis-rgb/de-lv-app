# ET–DE Kurss — Live / Runtime Final Regression

**Generated:** 2026-08-24T09:06:53.568Z
**Git:** 158d8a71

## Verdict

**ET_KURSS_REOPEN_NEEDS_OWNER_REVIEW**

Remaining LV example/pronunciation strings lack OWNER-approved Estonian replacements in materialized decisions.

## Content regression

| Metric | Value |
|--------|-------|
| CONTENT_REPAIR requested | 25 |
| OWNER granular applied (L1–L7 legacyHtml) | 11 |
| CONTENT_REPAIR verified | 11/25 |
| NEEDS_OWNER_DECISION rows | 14 |
| CURRENT_VALUE_MISMATCH | 0 |
| KNOWN_REOPEN_CONTENT_DEFECTS | 14 |

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

- R11a (L14): `Es gribu tikt uz priekšu.`
- R11b (L14): `Es negribu zupu ēst.`
- R12 (L15): `Es pārgriežu ābolu uz pusēm.`
- R13a (L16): `die Wälder: ä izrunā kā šaurais īsais e.`
- R13b (L16): `die Bäuerinnen: äu izrunā kā oi.`
- R14a (L18): `Es eju pie galda.`
- R14b (L18): `Es nolieku grozu uz sola.`
- R14c (L18): `Es lieku ābolus groziņā.`
- R14d (L18): `Es leju ūdeni krūzē.`
- R14e (L18): `Es stāvu pie galda.`
- R14f (L18): `Grozs stāv uz sola.`
- R14g (L18): `Āboli ir groziņā.`
- R14h (L18): `Ūdens ir krūzē.`
- R14i (L18): `Es dzeru pienu.`

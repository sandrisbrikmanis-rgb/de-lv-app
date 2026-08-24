# ET–DE Kurss — live/runtime final regression

**Generated:** 2026-08-24T09:58:32.499Z
**Standard:** MASTER v1.10
**Git:** ec299dfe

## Verdict: **ET_KURSS_LIVE_RUNTIME_REOPEN_REPAIR_PASS**

## Content regression

| Metric | Value |
|--------|-------|
| CONTENT_REPAIR_TOTAL | **25** |
| CONTENT_REPAIR_VERIFIED | **25/25** |
| KNOWN_LV_REOPEN_DEFECTS | **0** |

## MASTER v1.10 deterministic gates

| Metric | Value |
|--------|-------|
| DETERMINISTIC_SCOPE_COVERAGE | **100%** |
| DETERMINISTIC_DISCOVERY_COMPLETENESS | **100%** |
| FOREIGN_LANGUAGE_RESIDUAL | **0** |
| EMPTY_REQUIRED_LOCALIZED_FIELDS | **0** |
| PLACEHOLDERS | **0** |
| MOJIBAKE | **0** |
| KURSS_LEGACYHTML_TEXTNODE_SCAN | **PASS** |

## Browser / runtime

| Gate | Result |
|------|--------|
| KURSS_L1_L21_RENDER_SCOPE | **PASS** |
| KURSS_RUNTIME_SMOKE | **PASS** |
| KURSS_DYNAMIC_EXERCISE | **PASS** |
| KURSS_DYNAMIC_TRANSLATE | **PASS** |
| KURSS_FIRST_CARD_INITIALIZATION | **FAIL** |
| KURSS_PROGRESS | **FAIL** |
| KURSS_FLIP | **FAIL** |
| KURSS_NEXT | **FAIL** |
| ET L18 Harjutus | **PASS** |
| ET L18 Tõlgi | **PASS** |

## Structural gates

| Gate | Result |
|------|--------|
| MIRROR | **PASS** |
| validate-kurss --lang=et | **PASS** |
| LV behavior unchanged | **PASS** |
| DE_CHANGES | **0** |

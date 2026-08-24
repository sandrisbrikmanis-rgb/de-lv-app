# ET–DE A1 — OWNER DECISIONS — residual 2 multi-translation findings

**MASTER:** v1.12  
**Scope:** Only the 2 residual A1 main-translation violations left after the accepted 59 apply.  
**DE:** STRICT READ-ONLY.  
**Status:** OWNER ACCEPTED.

| Card ID | Field/path | DE | CURRENT | OWNER NEW | Status | OWNER rationale |
|---|---|---|---|---|---|---|
| `a1-es` | `study.translation` | `es` | `see • umbisikuline vorm` | **see** | LABOT | `see` is the normal learner-facing Estonian equivalent for German pronoun `es`. `umbisikuline vorm` is a grammatical explanation, not a main translation; it belongs in Study explanation. |
| `a1-heissen` | `study.translation` | `heißen` | `nime kandma • tähendama` | **nime kandma** | LABOT | At A1 the core meaning is “to be called / bear a name”. `tähendama` is the separate sense “to mean” and should remain explanatory Study content, not a second main translation. |

## Apply requirements

- COPY-ONLY apply these exact two mappings.
- Before each write: actual production value must equal `CURRENT`.
- If mismatch: SKIP only that row and report `CURRENT_VALUE_MISMATCH`.
- Do not modify DE.
- Do not rewrite Study explanation/examples/comparison.
- Mirror `data/et/a1.js` ↔ `www/data/et/a1.js`.
- After apply run the full A1 v1.12 main-translation residual scan.

Required terminal metrics:

```text
REQUESTED_LABOT = 2
APPLIED_VERIFIED = 2/2
CURRENT_VALUE_MISMATCH = 0
MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL = 0
MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED = 0
MAIN_TRANSLATION_COUNT_VIOLATIONS = 0
MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE = 100%
MULTI_TRANSLATION_SCAN_COVERAGE = 100%
DE_CHANGES = 0
MIRROR = PASS
SYNTAX = PASS
```

**OWNER VERDICT:** `ET_A1_MULTITRANSLATION_RESIDUAL_2_OWNER_ACCEPTED`

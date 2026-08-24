# ET–DE C1 — MULTI-TRANSLATION OWNER DECISIONS ACCEPTED — 102/102

**MASTER:** v1.12  
**Source:** `reports/et-c1-multitranslation-owner-decisions.md`  
**Source review PR:** #654  
**Scope:** all 102 validated C1 multiple-main-translation findings  
**DE:** STRICT READ-ONLY  
**OWNER status:** ACCEPTED

## OWNER decision rule

All **102/102** findings are OWNER-decided.

For every source row:

- `OWNER NEW` = the row's exact `Recommended main translation`
- `Status` = `LABOT`

except the explicit OWNER overrides below.

Cursor must materialize this authority into a literal 102-row mapping before apply.
The materialized mapping must preserve exact `Audit ID`, `Card ID`, `Field/path`,
`DE`, and `CURRENT` from the source review.

## Explicit OWNER overrides

| Audit ID | Card ID | DE | CURRENT | Source recommendation | OWNER NEW | Status |
|---|---|---|---|---|---|---|
| ET-C1-MT-0017 | `c1-Abschleppdienst-199` | Abschleppdienst | evakuatsiooniteenistus • pukseerimisteenistus | evakuatsiooniteenistus | **pukseerimisteenistus** | LABOT |

All other 101 OWNER NEW values follow the reviewed recommendation.

## Materialization gate

Before production apply, generate:

`reports/et-c1-multitranslation-owner-decisions-accepted-materialized.md`

It must contain **102 literal LABOT rows**.

Required:

```text
SOURCE_FINDINGS = 102
OWNER_DECISIONS = 102
OWNER_NEW_FILLED = 102/102
LABOT = 102
MISSING = 0
DUPLICATE_AUDIT_ID = 0
CURRENT_EXACT_SOURCE_MATCH = 102/102
EXPLICIT_OWNER_OVERRIDES = 1/1
PRODUCTION_CHANGES = 0
DE_CHANGES = 0
```

If any source row cannot be matched exactly, STOP. Do not infer the row.

## COPY-ONLY apply safety

Apply only from the materialized 102-row accepted mapping.

For each row:

1. Locate exact Card ID + Field/path.
2. Verify actual production value `=== CURRENT`.
3. If mismatch: `SKIP_CURRENT_VALUE_MISMATCH` for that row only.
4. Write exact `OWNER NEW`.
5. Verify written value `=== OWNER NEW`.

Forbidden:

- changing DE;
- rewriting Study explanation/examples/comparison/tip/important;
- creating new Study cards;
- cleanup or neighboring-field edits;
- changing IDs/order/structure;
- inventing additional translations.

Mirror:
`data/et/c1.js` ↔ `www/data/et/c1.js`

## Mandatory post-apply full C1 scan

```text
C1_CARDS = 572
REQUESTED_LABOT = 102
APPLIED_VERIFIED = 102/102
CURRENT_VALUE_MISMATCH = 0

MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE = 100%
MULTI_TRANSLATION_SCAN_COVERAGE = 100%
MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL = 0
MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED = 0
MAIN_TRANSLATION_COUNT_VIOLATIONS = 0

DE_CHANGES = 0
UNEXPECTED_PRODUCTION_CHANGES = 0
MIRROR = PASS
SYNTAX = PASS
STRUCTURE = PASS
ID_ORDER = PASS
```

Any residual outside the accepted 102 must NOT be auto-fixed. Return it for OWNER decision.

**OWNER VERDICT:** `ET_C1_MULTITRANSLATION_OWNER_ACCEPTED_102`

# ET–DE B2 — MULTI-TRANSLATION OWNER DECISIONS ACCEPTED — 829/829

**MASTER:** v1.12  
**Source:** `reports/et-b2-multitranslation-owner-compact-829.md`  
**Source review PR:** #652  
**Scope:** all 829 validated B2 multiple-main-translation findings  
**DE:** STRICT READ-ONLY  
**OWNER status:** ACCEPTED

## OWNER decision rule

All **829/829** findings are OWNER-decided.

For every source row:

- `OWNER NEW` = the row's exact `Recommended main`
- `Status` = `LABOT`

except the explicit OWNER overrides below.

Cursor must materialize this authority into a literal 829-row mapping before apply.
The materialized mapping must preserve exact `Audit ID`, `Card ID`, `Field/path`,
`DE`, and `CURRENT` from the compact source.

## Explicit OWNER overrides

| Audit ID | Card ID | DE | CURRENT | Source recommendation | OWNER NEW | Status |
|---|---|---|---|---|---|---|
| ET-B2-MT-0014 | `b2-abfällig-41` | abfällig | ebasoodne • negatiivne • halb • tõrjuv | ebasoodne | **negatiivne** | LABOT |
| ET-B2-MT-0047 | `b2-Anwärter-88` | Anwärter | pretendent • kandidaat | pretendent | **kandidaat** | LABOT |
| ET-B2-MT-0081 | `b2-beiläufig-162` | beiläufig | juhuslik • möödaminnes | juhuslik | **möödaminnes** | LABOT |
| ET-B2-MT-0092 | `b2-Belieben-183` | Belieben | meeldivus • meeldimine • soov | meeldivus | **soov** | LABOT |
| ET-B2-MT-0109 | `b2-bestärken-213` | bestärken | tugevdama • kinnitama • julgustama | tugevdama | **julgustama** | LABOT |
| ET-B2-MT-0120 | `b2-Bewaffnung-228` | Bewaffnung | relvastamine • relvastus | relvastamine | **relvastus** | LABOT |
| ET-B2-MT-0133 | `b2-bildlich-246` | bildlich | maaliline • kujundlik • figuratiivne | maaliline | **kujundlik** | LABOT |
| ET-B2-MT-0482 | `b2-Gutachten-1047` | Gutachten | arvamus • eksperdiarvamus | arvamus | **eksperdiarvamus** | LABOT |

## Materialization gate

Before production apply, generate:

`reports/et-b2-multitranslation-owner-decisions-accepted-materialized.md`

It must contain **829 literal LABOT rows**.

Required:

```text
SOURCE_FINDINGS = 829
OWNER_DECISIONS = 829
OWNER_NEW_FILLED = 829/829
LABOT = 829
MISSING = 0
DUPLICATE_AUDIT_ID = 0
CURRENT_EXACT_SOURCE_MATCH = 829/829
EXPLICIT_OWNER_OVERRIDES = 8/8
PRODUCTION_CHANGES = 0
DE_CHANGES = 0
```

If any source row cannot be matched exactly, STOP. Do not infer the row.

## COPY-ONLY apply safety

Apply only from the materialized 829-row accepted mapping.

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
`data/et/b2.js` ↔ `www/data/et/b2.js`

## Mandatory post-apply full B2 scan

```text
B2_CARDS = 2118
REQUESTED_LABOT = 829
APPLIED_VERIFIED = 829/829
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

Any residual outside the accepted 829 must NOT be auto-fixed. Return it for OWNER decision.

**OWNER VERDICT:** `ET_B2_MULTITRANSLATION_OWNER_ACCEPTED_829`

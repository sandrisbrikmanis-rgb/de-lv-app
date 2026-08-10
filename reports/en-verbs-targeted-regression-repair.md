# EN–DE Verbs — Targeted Regression Repair

**Date:** 2026-08-10  
**Audit commit:** `28b1fff3`  
**Repair blocks ancestry:** `175beca4` … `da108077`

## Status

**EN–DE DARBĪBAS VĀRDI — TARGETED REGRESSION REPAIR COMPLETE**

Not OWNER ACCEPTED · Not CLOSED — awaiting OWNER gala apstiprināšana.

## OWNER scope

| Metrika | Skaits |
| --- | ---: |
| OWNER LABOT fields | 19 |
| OWNER NELABOT | 1 |
| DE_SOURCE_ISSUE NELABOT | 1 |
| Repairs applied | 19/19 |
| PRECONDITION_MISMATCH | 0 |
| Unique repaired verbs | 14 |
| DE changes | 0 |
| Unexpected production changes | 0 |
| Unexpected foreign-language remnants | 0 |

## OWNER NELABOT

| Verb | Field | EN |
| --- | --- | --- |
| `verb-124-schwimmen` | `imperfektIndikativ` | `he was swimming` (saglabāts) |

## DE_SOURCE_ISSUE NELABOT

| Verb | Field | DE | EN | Note |
| --- | --- | --- | --- | --- |
| `verb-65-können` | `imperfektKonjunktiv` | `konnte` | `would be able to` | DE shows Präteritum, not Konjunktiv II; DE READ-ONLY |

## Documented foreign remnants (DE_SOURCE slots — not repaired)

| Verb | Field | EN |
| --- | --- | --- |
| `verb-60-haben` | `imperfektKonjunktiv` | `bija` |
| `verb-139-spleißen` | `imperfektKonjunktiv` | `savienoja` |
| `verb-167-weben` | `imperfektKonjunktiv` | `auda` |

## Deterministic gates

verbs 189/189 · form slots 945/945 · syntax PASS · structure PASS · ID/order PASS · DE READ-ONLY PASS · mirror PASS

## Luna micro-regression (gpt-5.6-luna)

| Metric | Value |
| --- | ---: |
| Luna requests | 3 |
| Luna tokens | 8,248 |
| Validated CRITICAL/HIGH/MEDIUM/LOW | 0/0/0/0 |
| FALSE_POSITIVE | 3 |
| DE_SOURCE_ISSUE (micro) | 1 |
| microPass | PASS |

## Production files

- `data/en/verbs.js`
- `www/data/en/verbs.js`

## Artifacts

- `reports/temp/en-verbs-targeted-regression-repair.json`
- `reports/temp/en-verbs-targeted-regression-repair-log.json`
- `reports/temp/en-verbs-targeted-regression-micro.json`
- `reports/temp/apply-en-verbs-targeted-regression-repair.js`
- `reports/temp/audit-en-verbs-targeted-regression-micro.js`

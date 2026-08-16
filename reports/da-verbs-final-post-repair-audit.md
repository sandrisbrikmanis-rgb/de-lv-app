# DA–DE Verbs final post-repair audit

**Date:** 2026-08-16
**Auditor:** GPT-5.6 Luna (READ-ONLY)
**Scope:** Production `data/da/verbs.js` after all OWNER repairs (original + regression reapply + linguistic)
**Production changes during audit:** 0

## COVERAGE

| Metric | Value |
|--------|-------|
| Total verbs | **189** |
| Audited verbs | **189** |
| Total DA fields | **945** |
| Audited DA fields | **945** |
| Coverage | **100% PASS** |

## OWNER REGRESSION

| Metric | Value |
|--------|-------|
| Signed LABOT fields expected (unique) | **550** |
| Original signed | **497** |
| Regression signed | **188** |
| Final post-repair signed | **64** |
| OWNER_MATCH | **550/550** |
| OWNER_MISMATCH | **0** |
| Missing card/field | **0** |
| Critical artifacts (LABOT) | **0** |

## LINGUISTIC FINDINGS (Luna)

| Severity | Count |
|----------|-------|
| CRITICAL | **0** |
| HIGH | **0** |
| MEDIUM | **0** |
| LOW | **1** |
| Luna batches | **19** (945 forms) |
| Luna loaded | **19/19** |

## TECHNICAL

| Check | Result |
|-------|--------|
| Syntax | **PASS** |
| Structure/count | **PASS** |
| IDs/order | **PASS** |
| Mirror | **PASS** |
| DE changes vs baseline | **0** |
| DE READ-ONLY | **PASS** |
| LV remnants | **0** |
| EN/placeholder | **0** |
| OWNER artifacts | **0** |
| Empty DA | **0** |

### Verdict

**NEEDS OWNER REVIEW**

## Regression linguistic 13 — revalidation

| Card | Field | Expected | Match |
|------|-------|----------|-------|
| `verb-29` | `partizipVergangenheit.lv` | Knibet | **PASS** |
| `verb-95` | `praesens.lv` | Det siver | **PASS** |
| `verb-117` | `imperfektIndikativ.lv` | Han hvæsed | **PASS** |
| `verb-117` | `imperfektKonjunktiv.lv` | Han ville hvæse | **PASS** |
| `verb-117` | `partizipVergangenheit.lv` | Hvæset | **PASS** |
| `verb-117` | `praesens.lv` | Han hvæser | **PASS** |
| `verb-133` | `partizipVergangenheit.lv` | Synket | **PASS** |
| `verb-136` | `infinitiv.lv` | At skulle | **PASS** |
| `verb-149` | `imperfektIndikativ.lv` | Det hvirvlede | **PASS** |
| `verb-149` | `imperfektKonjunktiv.lv` | Det ville hvirvle | **PASS** |
| `verb-150` | `partizipVergangenheit.lv` | Stunket | **PASS** |
| `verb-162` | `partizipVergangenheit.lv` | Ærgret | **PASS** |
| `verb-178` | `partizipVergangenheit.lv` | Vredet | **PASS** |

## FINAL STATUS

| Gate | Required | Actual |
|------|----------|--------|
| Coverage | 100% | **PASS** |
| OWNER_MISMATCH | 0 | **0** |
| CRITICAL | 0 | **0** |
| HIGH | 0 | **0** |
| MEDIUM | 0 | **0** |
| LOW | 0 | **1** |
| Artifacts/placeholders | 0 | **0** |
| Foreign remnants | 0 | **0** |
| DE changes | 0 | **0** |
| Syntax/structure/IDs | PASS | **PASS** |

Closure blocked: **1** validated Luna findings remain. Prepare OWNER review — do not auto-apply.

## Findings

### DA-VERB-FPR-0001 [LOW] GRAMMAR

- **Verb/Card ID:** `verb-119`
- **Field:** `imperfektIndikativ.lv`
- **DE_CURRENT:** er schrieb
- **DA_CURRENT:** Skrev han
- **Problem:** Inverted word order inconsistent with card paradigm.
- **Reason:** Praesens was repaired to Han skriver, but preterite still uses inverted Skrev han. Project convention and the other forms on this card use Han + verb.
- **PROPOSED_DA:** Han skrev

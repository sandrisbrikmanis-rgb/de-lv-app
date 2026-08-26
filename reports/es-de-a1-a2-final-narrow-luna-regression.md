# ES–DE A1+A2 — final narrow Luna regression

**HEAD:** `275b447b7e0e1e7283db17a532731db59f4e5d53`
**Model:** gpt-5.6-luna
**Requested targets:** 237
**Luna processed:** 237/237
**Coverage:** 100%
**API batches:** 16

## Validation summary

| Metrika | Vērtība |
|---------|--------:|
| In-scope REAL | **1** |
| OWNER_REVIEW_REQUIRED | **6** |
| FALSE_POSITIVE | **18** |
| OUT_OF_SCOPE (informative) | **1** |
| NELABOT_UNCHANGED | **3/3** |

## ES-A1A2-NARROW-0006

- Target: `ES-A1A2-MICRO-OWNER-0017`
- Card ID: `a1-hand-study`
- Field: `study.examples[2].lv`
- DE: `Hand`
- Paired DE: `Mein Arm tut weh.`
- CURRENT (ownerNew): `Me duele la mano.`
- Proposed NEW: `Me duele el brazo.`
- Severity: AUGSTA
- Category: SEMANTICS
- Validation: REAL
- Pamatojums: OWNER apply ieviesa semantisku regresiju; Luna atgriežas pie pareizā pirms-apply teksta

## OUT_OF_SCOPE (informative only)

- ES-A1A2-NARROW-0018 `undefined` `lv` — Kandidāts attiecas uz lauku ārpus 237 target scope

## VERDICT: **NEEDS TARGETED A1+A2 REPAIR**

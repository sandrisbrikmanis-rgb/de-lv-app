# ES–DE Kurss Lessons — Luna coverage proof

**Generated:** 2026-08-27T07:27:45Z
**Luna dir:** `reports/temp/es-kurss-lessons-full-audit-luna-v2`

## Verdict

**PASS — 2951/2951 fields have explicit Luna status (no synthetic PASS, no duplicates)**

## Per-field coverage

| Metrika | Vērtība |
|---------|--------:|
| Total fields | **2951** |
| Covered (explicit Luna) | **2951** |
| Missing | **0** |
| Explicit PASS | **2120** |
| Explicit FINDING | **831** |
| Synthetic PASS (rejected) | **0** |
| Duplicate cardIds | **0** |

## Batch integrity

| Metrika | Vērtība |
|---------|--------:|
| Batches | **74** |
| Complete (input=output) | **74/74** |
| All explicit (no synthetic) | **74/74** |

## v1 legacy audit (NOT valid proof)

v1 sent **2951** fields to Luna but only **790** returned explicit items.
**2161** fields received synthetic PASS via parser — **not** proof of linguistic evaluation.

## Proof criteria (MASTER §7.8)

1. Every field ID appears in exactly one batch `*-results.json`.
2. Each field has `status: PASS` or `status: FINDING` from Luna response.
3. `syntheticPass` count must be **0**.
4. No field is marked pass-only by deterministic pre-filter without Luna response.

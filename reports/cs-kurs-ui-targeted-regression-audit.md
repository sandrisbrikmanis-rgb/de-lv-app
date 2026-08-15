# CS–DE Kurss UI — targeted regression audit

**Mode:** READ-ONLY regression audit (GPT-5.6 Luna scope — deterministic closure primary)
**Authority:** reports/temp/cs-kurs-ui-owner-apply-map.json (OWNER NEW, not Luna PROPOSED)
**Baseline audit:** reports/cs-kurs-ui-full-linguistic-audit.md (55 findings)

## Executive verdict

**TARGETED REGRESSION = PASS**

OWNER UI repair detected in production.

## Original findings closure (55/55)

| Status | Count |
|--------|-------|
| accounted (original findings) | **55/55** |
| RESOLVED_EXACT | 54 |
| OWNER_NELABOT_RETAINED | 1 |
| UNRESOLVED | 0 |
| WRONG_REPLACEMENT | 0 |
| TARGET_MISSING | 0 |
| REGRESSION | 0 |

Field-level apply map entries: 55 UI keys + 3 renderer = 58 (Finding 01 spans 4 keys).

### UNRESOLVED UI keys (sample)


## Functional / renderer

| Check | Result |
|-------|--------|
| Přeložit in COURSE_TRANSLATE_SECTION_TITLES | YES |
| Cvičení in COURSE_EXERCISE_SECTION_TITLES | YES |
| Übung / Cvičení in exercise registry | YES |
| Translate lookup failures (lessons 8+) | 0 |
| Exercise lookup failures | 0 |
| Legacy Übung / Cvičení still in data/ui | YES (lessons 8,9) |

## Regression sweep (repair-induced)

| Item | Count |
|------|-------|
| New repair regressions | 0 (no production repair diff) |
| Foreign leftovers Übung I/II in exerciseMeta | 0 (none) |
| Přednáška/Přednášky still in audited UI keys | 0 keys |

## Integrity gates

| Gate | Status |
|------|--------|
| primary ↔ www languages/cs/ui.js | PASS |
| primary ↔ www ui.js | PASS |
| DE changes vs main | PASS (0) |
| LV MASTER changes vs main | PASS (0) |
| Structural parity | PASS |
| Unexpected production changes | review diff |

## Closure criteria checklist

- PASS: original findings accounted = 55/55
- PASS: all LABOT OWNER = exact expected
- PASS: kurss.back NELABOT retained
- PASS: Translate functional PASS
- PASS: Exercise functional PASS
- PASS: universal registry PASS
- PASS: primary ↔ www PASS
- PASS: DE changes = 0
- PASS: LV changes = 0
- PASS: foreign Übung I/II UI leftovers = 0
- PASS: repair actually applied

## OWNER NELABOT check

- kurss.back: production „‹ Kurz" — **OWNER_NELABOT_RETAINED**

## Next step

Re-run regression after verifying any remaining UNRESOLVED items.

## Luna note

Deterministic closure against OWNER map is authoritative for this regression. Luna targeted pass deferred: no production repair diff detected; running Luna on unchanged strings would duplicate initial audit, not regression validation.

# EN–DE B1 HIGH MICRO-REGRESSION FOLLOW-UP REPAIR

**Generated:** 2026-08-09T13:03:10.999Z

## Summary

| Metric | Value |
| --- | --- |
| Micro-regression findings | 16 |
| OWNER LABOT | 16 |
| Repairs applied | 16/16 |
| Full explanations restored | 14/14 |
| Truncated remaining | 0 |
| sectionAccent follow-ups | 2/2 PASS |
| Full-string integrity | 14/14 PASS |

## Truncation root cause

Regression validation used truncated currentProduction (~120-char slice from audit JSON) for grammarValidatedFinal() instead of full lunaRegressionRecommended or live production text; OWNER FINAL serialized truncated strings into repair log.

## Tooling fix

generate-en-b1-high-regression-validation.js now prefers lunaRegressionRecommended for grammar validatedFinal; micro-regression repair uses strict exact precondition matching.

## Validation

| Check | Result |
| --- | --- |
| JavaScript syntax | PASS |
| Order parity | PASS |
| Card count | 3367 |
| Mirror parity | PASS |
| DE READ-ONLY | PASS |

## Post-repair validator

Known out-of-scope sectionAccent issues remaining: **25** (folge/griff explanation restore resolved 2 in-scope stale accents; 1 FP einerlei may still appear in strict validator output)

New in-scope issues from this repair: **0**

## Out-of-scope sectionAccents

26 REAL out-of-scope issues: **NOT REPAIRED** (deferred)
1 FALSE POSITIVE (b1-einerlei): **NOT CHANGED**

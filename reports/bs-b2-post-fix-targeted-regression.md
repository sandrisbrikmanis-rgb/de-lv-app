# BS–DE B2 — post-fix targeted regression audit

**Datums:** 2026-08-08
**Model:** gpt-5.6-luna
**Mode:** AUDIT ONLY — B2 data files changed: **0**

## Scope

| Metrika | Skaits |
|---|---:|
| expected cards | 947 |
| audited | 947 |
| skipped | 0 |
| simple cards | 888 |
| study cards | 59 |

## Deterministic pre-check

| Check | Result |
|---|---|
| Scope IDs exist | PASS (947/947) |
| Syntax | PASS |
| Structural parity | PASS |
| DE READ-ONLY | PASS |
| data ≡ www | PASS |
| sectionAccents TECHNICAL | 0 |
| Empty BS fields (scope) | 0 |
| [object Object]/undefined | 0 |
| Duplicate IDs | 0 |

## Regression findings

| Severity | Count |
|---|---:|
| CRITICAL | 0 |
| HIGH | 5 |
| MEDIUM | 56 |
| LOW | 6 |

| raw findings | 67 |
| duplicates removed | 0 |
| **unique findings** | **67** |

## Other verdicts

| Verdict | Count |
|---|---:|
| STYLE_ONLY | 0 |
| PROJECT_CONVENTION | 0 |
| SOURCE_LV_ISSUE | 6 |
| DE_SOURCE_ISSUE | 0 |
| NEEDS_REVIEW | 0 |
| KEEP | 0 |

## Pattern breakdown (FIX findings)

- semantic: 29
- grammar: 28
- en_remnant: 10

## Cache collision — mandatory check

### b2-sich-abfinden

- **DE:** sich abfinden
- **LV:** samierināties ar
- **current BS:** Pomiriti se s
- **verdict:** PASS

### b2-sich-versoehnen

- **DE:** sich versöhnen
- **LV:** samierināties ar
- **current BS:** Pomiriti se s
- **verdict:** PASS

## sectionAccents cards checked

- **b2-haube:** PASS
- **b2-aendern:** PASS
- **b2-wechseln:** PASS
- **b2-foerdern:** PASS

## API usage

| Metrika | Vērtība |
|---|---:|
| model | gpt-5.6-luna |
| API requests | 26 |
| successful | 26 |
| failed | 0 |
| retries | 0 |
| input tokens | 148068 |
| cached input tokens | 0 |
| output tokens | 70758 |
| reasoning tokens | 48560 |
| total tokens | 218826 |
| cost | cost not reliably calculated |

## Data integrity

- hash before audit: data=2733e15f… www=2733e15f…
- hash after audit: data=2733e15f… www=2733e15f…
- **B2 data files changed: 0**

**BS–DE B2 POST-FIX TARGETED REGRESSION = COMPLETE**

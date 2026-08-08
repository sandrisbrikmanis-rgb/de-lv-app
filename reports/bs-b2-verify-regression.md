# BS–DE B2 — verify regression audit

**Datums:** 2026-08-08
**Model:** gpt-5.6-luna
**Mode:** AUDIT ONLY — B2 data files changed: **0**

## Coverage

| Metrika | Skaits |
|---|---:|
| expected | 42 |
| audited | 42 |
| skipped | 0 |
| PASS cards | 37 |

## Findings

| Severity | Count |
|---|---:|
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 8 |
| LOW | 1 |

| raw findings | 9 |
| duplicates | 0 |
| **unique findings** | **9** |

## Other verdicts

| Verdict | Count |
|---|---:|
| STYLE_ONLY | 0 |
| PROJECT_CONVENTION | 0 |
| SOURCE_LV_ISSUE | 0 |
| DE_SOURCE_ISSUE | 0 |
| NEEDS_REVIEW | 0 |

## Technical

| Check | Result |
|---|---|
| syntax | PASS |
| DE READ-ONLY | PASS |
| sectionAccents TECHNICAL | -1 |
| data ≡ www | PASS |
| card count | 2118 |
| study count | 60 |

## Special cards

### b2-sich-einpraegen

- **verdict:** PASS
- **rektion:** šta?
- **forms:** šta?

### b2-nachdruck

- **verdict:** PASS
- **example[0].lv:** On naglašava rok.

### sectionAccents cards (6 in scope)

- **b2-sich-erniedrigen:** PASS
- **b2-sich-erregen:** PASS
- **b2-sich-genieren:** PASS
- **b2-sich-gesellen:** PASS
- **b2-sich-gestalten:** PASS
- **b2-sich-grauen:** PASS

## API usage

| model | gpt-5.6-luna |
| requests | 7 |
| successful | 7 |
| failed | 0 |
| retries | 0 |
| input tokens | 12182 |
| cached input tokens | 0 |
| output tokens | 7814 |
| reasoning tokens | 6118 |
| total tokens | 19996 |
| cost | cost not reliably calculated |

## Data integrity

- **B2 data files changed: 0**

# BS–DE B2 VERIFY REGRESSION = FINDINGS REMAIN

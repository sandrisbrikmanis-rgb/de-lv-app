# BS–DE B2 — final verify regression audit

**Datums:** 2026-08-08
**Model:** gpt-5.6-luna
**Mode:** AUDIT ONLY — B2 data files changed: **0**

## Coverage

| Metric | Count |
|---|---:|
| Expected | 5 |
| Audited | 5 |
| PASS cards | 4 |
| Skipped | 0 |

## Findings

| Severity | Count |
|---|---:|
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 0 |
| LOW | 0 |

| raw findings | 0 |
| duplicates | 0 |
| **unique findings** | **0** |

## Other

| Verdict | Count |
|---|---:|
| STYLE_ONLY | 0 |
| PROJECT_CONVENTION | 0 |
| SOURCE_LV_ISSUE | 1 |
| DE_SOURCE_ISSUE | 0 |
| NEEDS_REVIEW | 0 |

## Card verdicts

- **b2-durchbrennen-470:** PASS
- **b2-sich-hingeben:** PASS
- **b2-sich-revanchieren:** SOURCE_LV_ISSUE
- **b2-sich-verwundern:** PASS
- **b2-sich-verlaufen:** PASS

## sectionAccents (post stale-fragment removal)

### b2-sich-revanchieren

- **verdict:** SOURCE_LV_ISSUE
- **stale fragment removed:** yes
- **sectionAccents:** `{"explanation":{"blue":["sich revanchieren"]}}`

### b2-sich-verwundern

- **verdict:** PASS
- **stale fragment removed:** yes
- **sectionAccents:** `{"explanation":{"blue":["sich verwundern"]}}`

## Technical

| Check | Result |
|---|---|
| syntax | PASS |
| DE READ-ONLY | PASS |
| sectionAccents TECHNICAL | 0 |
| data ≡ www | PASS |
| card count | 2118 |
| study count | 60 |

## API usage

| model | gpt-5.6-luna |
| requests | 1 |
| successful | 1 |
| failed | 0 |
| retries | 0 |
| input tokens | 1680 |
| cached input tokens | 0 |
| output tokens | 1730 |
| reasoning tokens | 1552 |
| total tokens | 3410 |

## Data integrity

- **B2 data files changed: 0**

# BS–DE B2 FINAL VERIFY REGRESSION = PASS

# BS–DE B2 AUTOMATED QUALITY/FIX CYCLE = CLOSED

# EN–DE C1/C2 OWNER Repair Targeted Regression Audit

**Generated:** 2026-08-10T14:33:40.171Z
**Baseline:** origin/main
**Model:** GPT-5.6 Luna
**Mode:** READ-ONLY — production changes = 0

## Scope

Production diff vs origin/main: C1 blocks 1–4 (200 cards) + C2 block 6 (35 cards). C1 block 5 (50 cards) not present in production on this branch.

| Metric | Value |
| --- | ---: |
| Unique repaired cards audited | 235 (task expected 285) |
| C1 repaired cards | 200 |
| C2 repaired cards | 35 |
| Changed fields audited | 258 |
| Repair manifest cards | 235 |

## OWNER NELABOT

Checked: 8/8 | Preserved: 8/8

- c1-Grenzverletzung-373: PASS (Border violation)
- c1-Industrieanlage-395: PASS (Industrial complex)
- c1-Produktionskosten-446: PASS (Cost of production)
- c1-Rentenempfänger-458: PASS (Pensioner)
- c2-unmissverständlich-3: PASS (Unmistakable)
- c2-Geschenkgutschein-38: PASS (Gift card)
- c2-Kassettenrecorder-43: PASS (Cassette tape recorder)
- c2-Errungenschaft-117: PASS (Achievement • Benefit • Gain)

## Severity (real findings only)

| CRITICAL | HIGH | MEDIUM | LOW |
| ---: | ---: | ---: | ---: |
| 0 | 0 | 2 | 0 |

FALSE_POSITIVE filtered: 1
SOURCE_LV_ISSUE: 0

## Deterministic

| Check | Result |
| --- | --- |
| Syntax C1/C2 | PASS |
| Mirror C1/C2 | PASS |
| ID/order C1 | PASS |
| ID/order C2 | PASS |
| Structure | PASS |
| sectionAccents issues | 0 |
| DE READ-ONLY | PASS |
| Foreign remnants C1/C2 | 0/0 |
| Production changes by audit | 0 |

## Verdict

**REPAIRS REQUIRED**

## Real Findings

### c1-beabsichtigen — study.examples[1].lv

- Severity: MEDIUM
- Current: What do you intend to achieve with this event?
- Proposed: What do you intend to achieve with this measure?
- Reason: Maßnahme means a measure or action here, not an event.

### c1-unterstellen — study.examples[4].lv

- Severity: MEDIUM
- Current: Unfounded accusation • Presuppose
- Proposed: To accuse unjustly • To impute
- Reason: The bare German verb is rendered as a noun plus a mismatched verb form.

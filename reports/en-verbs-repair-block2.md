# EN–DE Verbs — OWNER Repair Block 2/9 (Findings 51–100)

**Režīms:** mechanical OWNER repair apply (nav audits)

## Rezultāts

| Metrika | Skaits |
| --- | ---: |
| Findings processed | 50 / 50 |
| EN repairs applied | 47 / 47 |
| DE_SOURCE_ISSUE | 3 |
| Total EN fields changed | 47 |
| DE fields changed | 0 |

## DE_SOURCE_ISSUE (unchanged)

| Verb | Field | EN (unchanged) |
| --- | --- | --- |
| `verb-31-bleichen` | `imperfektKonjunktiv` | `bleached` |
| `verb-34-brennen` | `imperfektKonjunktiv` | `dega` |
| `verb-41-dürfen` | `imperfektKonjunktiv` | `was allowed` |

## Post-repair gates

| Gate | Rezultāts |
| --- | --- |
| syntax | PASS |
| mirror | PASS |
| verbs | 189 |
| form slots | 945 |
| structure parity | PASS |
| order parity | PASS |
| DE READ-ONLY | PASS |
| unexpected production changes | 0 |

## Spot checks

| Verb | Field | Expected | PASS |
| --- | --- | --- | --- |
| `verb-32-braten` | `infinitiv` | `to fry / to roast` | PASS |
| `verb-54-fressen` | `infinitiv` | `to eat / to devour` | PASS |
| `verb-54-fressen` | `partizipVergangenheit` | `eaten / devoured` | PASS |

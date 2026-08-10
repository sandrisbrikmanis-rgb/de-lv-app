# EN–DE Verbs — OWNER Repair Block 1/9 (Findings 1–50)

**Režīms:** mechanical OWNER repair apply (nav audits)

## Rezultāts

| Metrika | Skaits |
| --- | ---: |
| Findings processed | 50 / 50 |
| Luna-finding EN repairs applied | 49 / 49 |
| DE_SOURCE_ISSUE | 1 (`verb-27-kennen` / `imperfektKonjunktiv` — paliek `pazina`) |
| Consistency micro-repairs | 1 / 1 (`hauen` / `imperfektKonjunktiv` → `he would chop`) |
| Total EN fields changed | 50 |
| DE fields changed | 0 |

## Production files

- `data/en/verbs.js` — 50 `lv` field replacements
- `www/data/en/verbs.js` — mirror (identical)

**DE READ-ONLY:** PASS · `data/verbs.js` netika mainīts

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
| `verb-133-sinken` | `imperfektIndikativ` | `he sank` | PASS |
| `verb-25-hauen` | `imperfektKonjunktiv` | `he would chop` | PASS |
| `verb-27-kennen` | `imperfektKonjunktiv` | `pazina` (unchanged) | PASS |

## DE_SOURCE_ISSUE

- **verb-27-kennen** / **imperfektKonjunktiv**: DE source `kannte` — EN repair netika lietots; lauks paliek `pazina`.

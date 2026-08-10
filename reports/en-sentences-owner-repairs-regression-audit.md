# EN–DE Teikumi — OWNER Repair Targeted Regression Audit

**Audita datums:** 2026-08-10
**Modelis:** gpt-5.6-luna
**Režģis:** READ-ONLY — production dati netika mainīti

## Dataset

| Metrika | Skaits |
| --- | ---: |
| Total dataset | 796 |
| OWNER reviewed baseline | 248 |
| OWNER approved changed | 232 |
| OWNER NELABOT baseline | 16 |
| SOURCE_LV_ISSUE baseline | 12 |
| Regression audited changed | 232/232 |
| OWNER NELABOT verified | 16/16 |
| SOURCE_LV_ISSUE verified | 12/12 |
| Luna scoped cards | 248 |

## Deterministiskā pārbaude

| Pārbaude | Rezultāts |
| --- | --- |
| Entry count parity (796) | PASS |
| Mirror data = www | PASS |
| Syntax | PASS |
| DE READ-ONLY | PASS |
| LV READ-ONLY | PASS |
| Semicolons | 0 |
| Mojibake | 0 |
| Zero-width chars | 0 |
| LV remnants | 0 |
| Placeholders | 0 |
| Unexpected changes | 0 |

## Luna regression findings (kvalitāte)

| Smagums | Skaits |
| --- | ---: |
| KRITISKA | 0 |
| AUGSTA | 0 |
| VIDĒJA | 0 |
| ZEMA | 0 |

| Klasifikācija | Skaits |
| --- | ---: |
| SOURCE_LV_ISSUE confirmed | 12 |
| SOURCE_LV_ISSUE rejected | 0 |
| DE_SOURCE_ISSUE | 0 |
| STYLE_ONLY | 0 |
| FALSE_POSITIVE | 1 |
| Production changes | 0 |

## Gala verdikts

**OWNER REPAIRS REGRESSION PASS**

## SOURCE_LV_ISSUE confirmed

- **satze-242** — LV source mismatch; EN follows DE.
- **satze-379** — LV source mismatch; EN follows DE.
- **satze-414** — LV source mismatch; EN follows DE.
- **satze-556** — LV source mismatch; EN follows DE.
- **satze-559** — LV source mismatch; EN follows DE.
- **satze-562** — LV source mismatch; EN follows DE.
- **satze-651** — LV source mismatch; EN follows DE.
- **satze-660** — LV source mismatch; EN follows DE.
- **satze-673** — LV source mismatch; EN follows DE.
- **satze-674** — LV source mismatch; EN follows DE.
- **satze-727** — LV source mismatch; EN follows DE.
- **satze-760** — LV source mismatch; EN follows DE.

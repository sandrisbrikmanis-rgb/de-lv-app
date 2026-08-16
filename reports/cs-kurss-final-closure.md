# CS–DE Kurss — Final closure

Generated: 2026-08-16T09:08:57.459Z
Model: gpt-5.6-luna

## Closure status

**NOT CLOSED**

Regression findings vai deterministiskās pārbaudes neizturētas.

## Metrics

| Metric | Value |
|--------|------:|
| Previous OWNER apply targets | 155 |
| Finding #218 field-level apply | 8 |
| Total regression targets | 163 |
| CRITICAL | 0 |
| HIGH | 3 |
| MEDIUM | 3 |
| LOW | 1 |
| LV remnants | 0 |
| Placeholders | 0 |
| FALSE_POSITIVE (Luna) | 0 |
| DE changes (non-#218 scope) | 0 |
| Unexpected production changes | 0 |
| Luna audit | COMPLETED |

## Finding #218

- Field-level mapping: `reports/cs-kurss-owner-decisions-group05-finding218-field-level.md`
- APPLIED: 8/8
- CURRENT_VALUE_MISMATCH: 0

## Findings (PENDING_OWNER_REVIEW)

### kurssLesson13.sections[2].items[2].heading / kurssLesson13.sections[2].items[2].heading
- Severity: HIGH
- CURRENT_CS: Rozkazovací způsob se sich umkehren
- PROPOSED_CS: Rozkazovací způsob slovesa sich umkehren
- Pamatojums: Czech reflexive marker „se“ is incorrectly combined with the German „sich“, creating redundancy.
- Status: PENDING_OWNER_REVIEW

### kurssLesson13.sections[2].items[4].heading / kurssLesson13.sections[2].items[4].heading
- Severity: MEDIUM
- CURRENT_CS: Rozkazovací způsob s atmen
- PROPOSED_CS: Rozkazovací způsob slovesa atmen
- Pamatojums: The preposition „s“ is unnatural here; Czech uses „slovesa“ to introduce the verb being described.
- Status: PENDING_OWNER_REVIEW

### kurssLesson14.sections[3].items[4] / kurssLesson14.sections[3].items[4]
- Severity: MEDIUM
- CURRENT_CS: Před s nebo t se g může ve výslovnosti přiblížit k: du magst, ihr mögt.
- PROPOSED_CS: Před s nebo t se g může ve výslovnosti přiblížit hlásce k: du magst, ihr mögt.
- Pamatojums: Vazba „přiblížit se k“ je zde neúplná; chybí podstatné jméno označující hlásku.
- Status: PENDING_OWNER_REVIEW

### kurssLesson14.sections[3].items[5] / kurssLesson14.sections[3].items[5]
- Severity: MEDIUM
- CURRENT_CS: V češtině se podobné spodoby znělosti vyskytují také u souhlásek na hranicích hlásek.
- PROPOSED_CS: V češtině se podobné spodoby znělosti vyskytují také na styku souhlásek.
- Pamatojums: Spojení „na hranicích hlásek“ není v češtině přirozené; vhodné je „na styku souhlásek“.
- Status: PENDING_OWNER_REVIEW

### kurssLesson15.sections[3].items[4] / kurssLesson15.sections[3].items[4]
- Severity: LOW
- CURRENT_CS: Pamatuj: německá dvojhláska ei se vyslovuje jako ai: reif, unreif.
- PROPOSED_CS: Pamatuj: německá dvojhláska ei se vyslovuje jako aj: reif, unreif.
- Pamatojums: V českém přepisu výslovnosti se německé [aɪ] standardně zapisuje jako „aj“, nikoli „ai“.
- Status: PENDING_OWNER_REVIEW

### kurssLesson17.sections[3].items[1] / kurssLesson17.sections[3].items[1]
- Severity: HIGH
- CURRENT_CS: Ve slově wieder je e otevřené: wieder.
- PROPOSED_CS: Ve slově wieder se ie vyslovuje jako dlouhé í: wieder.
- Pamatojums: V němčině se ie ve wieder vyslovuje jako dlouhé [iː], nikoli jako otevřené e.
- Status: PENDING_OWNER_REVIEW

### kurssLesson20.sections[3].items[4] / kurssLesson20.sections[3].items[4]
- Severity: HIGH
- CURRENT_CS: Ve slovech die Wohnung, wohnen označuje h délku a nevyslovuje se.
- PROPOSED_CS: Ve slovech die Wohnung, wohnen h označuje délku a nevyslovuje se.
- Pamatojums: Současný slovosled nesprávně říká, že délka označuje h; předmět „h“ musí stát před slovesem.
- Status: PENDING_OWNER_REVIEW

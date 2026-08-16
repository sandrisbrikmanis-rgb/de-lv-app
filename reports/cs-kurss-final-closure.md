# CS–DE Kurss — Final closure

Generated: 2026-08-16T09:15:08.786Z
Model: gpt-5.6-luna

## Closure status

**NOT CLOSED**

Regression findings vai deterministiskās pārbaudes neizturētas.

## Metrics

| Metric | Value |
|--------|------:|
| Previous OWNER apply targets | 155 |
| Finding #218 field-level apply | 8 |
| Luna micro-repair apply | 7 |
| Total regression targets | 163 |
| CRITICAL | 0 |
| HIGH | 3 |
| MEDIUM | 1 |
| LOW | 0 |
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

### kurssLesson15.sections[3].items[0] / kurssLesson15.sections[3].items[0]
- Severity: MEDIUM
- CURRENT_CS: ä ve slovech Äpfel a schälen se vyslovuje jako zavřené e.
- PROPOSED_CS: ä ve slovech Äpfel a schälen se vyslovuje jako otevřené e.
- Pamatojums: Německé ä v Äpfel i schälen odpovídá otevřenému e, nikoli zavřenému e.
- Status: PENDING_OWNER_REVIEW

### kurssLesson21.sections[3].items[1] / kurssLesson21.sections[3].items[1]
- Severity: HIGH
- CURRENT_CS: Ve slovech arbeiten, das Beil, steigen se ei vyslovuje jako ai.
- PROPOSED_CS: Ve slovech arbeiten, das Beil, steigen se ei vyslovuje jako aj.
- Pamatojums: Český přepis německého ei je aj, nikoli ai.
- Status: PENDING_OWNER_REVIEW

### kurssLesson21.sections[3].items[2] / kurssLesson21.sections[3].items[2]
- Severity: HIGH
- CURRENT_CS: Ve slově die Scheune se eu vyslovuje jako oi.
- PROPOSED_CS: Ve slově die Scheune se eu vyslovuje jako oj.
- Pamatojums: Český přepis německého eu je oj, nikoli oi.
- Status: PENDING_OWNER_REVIEW

### kurssLesson21.sections[3].items[3] / kurssLesson21.sections[3].items[3]
- Severity: HIGH
- CURRENT_CS: Ve slově die Brücke se ck vyslovuje jako dvojité k.
- PROPOSED_CS: Ve slově die Brücke se ck vyslovuje jako k.
- Pamatojums: Německé ck označuje jedinou hlásku [k], nikoli zdvojené nebo dlouhé k.
- Status: PENDING_OWNER_REVIEW

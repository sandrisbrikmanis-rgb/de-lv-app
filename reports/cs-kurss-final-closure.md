# CS–DE Kurss — Final closure

Generated: 2026-08-16T09:18:12.025Z
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
| Luna micro-repair #2 apply | 4 |
| Total regression targets | 163 |
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 2 |
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

### kurssLesson19.sections[3].items[4] / kurssLesson19.sections[3].items[4]
- Severity: MEDIUM
- CURRENT_CS: Ve slově wachsen se ch vyslovuje jako k.
- PROPOSED_CS: Ve slově wachsen se spojení ch vyslovuje jako ks.
- Pamatojums: V německém wachsen se spojení chs vyslovuje jako [ks], nikoli samotné ch jako k.
- Status: PENDING_OWNER_REVIEW

### kurssLesson20.sections[3].items[1] / kurssLesson20.sections[3].items[1]
- Severity: MEDIUM
- CURRENT_CS: Ve slovech der Ofen, der Boden je o dlouhé.
- PROPOSED_CS: Ve slovech der Ofen, der Boden se o vyslovuje dlouze.
- Pamatojums: Spojení „je o dlouhé“ je v této větě nepřirozené; přirozenější je vyjádřit délku příslovcem „dlouze“.
- Status: PENDING_OWNER_REVIEW

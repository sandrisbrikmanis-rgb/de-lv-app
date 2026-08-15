# CS–DE C1 — OWNER COPY-ONLY Apply

Generated: 2026-08-15T09:34:13.892Z
Source: `cs-c1-owner-approved-master-repair.md`

## Summary

| Metric | Count |
|--------|------:|
| Raw mapping rows | 268 |
| LABOT rows | 265 |
| Unique LABOT mappings | 265 |
| APPLIED | 262 |
| ALREADY_MATCHED_NEW | 0 |
| CURRENT_VALUE_MISMATCH | 3 |
| CARD_NOT_FOUND | 0 |
| FIELD_NOT_FOUND | 0 |
| OWNER_MAPPING_CONFLICT | 0 |
| SKIPPED NELABOT/FALSE_POSITIVE | 3 |

## Integrity

| Check | Result |
|-------|--------|
| OWNER NEW exact | PASS |
| DE changes | 0 |
| Unexpected changes | 0 |
| Syntax | PASS |
| ID/order | PASS |
| Card count | 572/572 |
| Mirror/parity | PASS |

## Issues

### c1-wahlberechtigt — study.explanation

- Status: **CURRENT_VALUE_MISMATCH**
- CURRENT: Hlavní myšlenka: wahlberechtig je přídavné jméno, které znamená, že osoba má právo účastnit se voleb -- volit nebo kandidovat ve volbách. Složení: Wahl (volby) + behrechtig (oprávněný).
- NEW: Hlavní myšlenka: wahlberechtigt je přídavné jméno, které znamená, že osoba má právo volit. Složení: Wahl (volby) + berechtigt (oprávněný).
- Actual production value: Hlavní myšlenka: wahlberechtig je přídavné jméno, které znamená, že osoba má právo účastnit se voleb – volit nebo kandidovat ve volbách. Složení: Wahl (volby) + behrechtig (oprávněný).
- Expected CURRENT: Hlavní myšlenka: wahlberechtig je přídavné jméno, které znamená, že osoba má právo účastnit se voleb -- volit nebo kandidovat ve volbách. Složení: Wahl (volby) + behrechtig (oprávněný).

### c1-beabsichtigen — study.explanation[5]

- Status: **CURRENT_VALUE_MISMATCH**
- CURRENT: Beabsichtigen znamená záměrně zamýšlet nebo plánovat akci -- ne vztah, ale záměr.
- NEW: Beabsichtigen znamená zamýšlet nebo plánovat určitou činnost -- jde o záměr, nikoli o vztah.
- Actual production value: Beabsichtigen znamená záměrně zamýšlet nebo plánovat akci – ne vztah, ale záměr.
- Expected CURRENT: Beabsichtigen znamená záměrně zamýšlet nebo plánovat akci -- ne vztah, ale záměr.

### c1-voraussetzen — study.important[0]

- Status: **CURRENT_VALUE_MISMATCH**
- CURRENT: Voraussetzen je střední rod --- předložka.
- NEW: Voraussetzen je sloveso znamenající „předpokládat"; vyjadřuje předpoklad.
- Actual production value: Voraussetzen je střední rod — předložka.
- Expected CURRENT: Voraussetzen je střední rod --- předložka.

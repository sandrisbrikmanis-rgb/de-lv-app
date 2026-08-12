# CS–DE A1 Full Review Repair — Block 10 (Findings 451–500)

## Review coverage

- canonical findings reviewed: **50** (FULL-A1-00451 … FULL-A1-00500)
- repair findings: **27**
- stale / already correct / OWNER keep: **23**

## Repair

- requested fields: **27**
- processed: **27/27**
- APPLIED: **27**
- ALREADY_CORRECT: **0**
- CURRENT_VALUE_MISMATCH: **0**

## Per-item results

| # | findingId | cardId | field | status | before | after |
|---|---|---|---|---|---|---|
| 1 | FULL-A1-00451 | a1-schwimmen | study.explanation[2] | APPLIED | "Pokud jde o relaxaci ve vodě nebo plavání, často se používá baden." | "Pokud jde o relaxaci ve vodě nebo koupání, často se používá baden." |
| 2 | FULL-A1-00455 | a1-sein | study.important[1] | APPLIED | "Ich bin je 'já jsem' ne 'jsem'." | "Ich bin znamená „já jsem“ nebo jednoduše „jsem“; neznamená infinitiv „být“." |
| 3 | FULL-A1-00457 | a1-seite | study.examples[0].lv | APPLIED | "Přejděte na stránku dvacet." | "Otevřete stránku dvacet." |
| 4 | FULL-A1-00460 | a1-sich | study.examples[0].lv | APPLIED | "Koupe se." | "Myje se." |
| 5 | FULL-A1-00464 | a1-sich | study.comparison[3].meaning | APPLIED | "Mu" | "Ho" |
| 6 | FULL-A1-00465 | a1-sicher | study.examples[5].lv | APPLIED | "Jezděte bezpečně!" | "Jeď bezpečně!" |
| 7 | FULL-A1-00466 | a1-sicher | study.explanation[3] | APPLIED | "Určitě! jako samostatná odpověď znamená samozřejmě!/pravděpodobně!" | "Sicher! jako samostatná odpověď znamená „určitě!“ nebo „samozřejmě!“." |
| 8 | FULL-A1-00467 | a1-sie-study | study.translation | APPLIED | "Oni / ji" | "Ona • Oni • Ji" |
| 9 | FULL-A1-00468 | a1-sie-study | study.explanation[1] | APPLIED | "Sie znamená hlavně: jedna žena." | "Malé sie může znamenat „ona“, „oni“ nebo „ji“; význam určuje kontext a tvar slovesa." |
| 10 | FULL-A1-00469 | a1-sie-study | study.explanation[7] | APPLIED | "Malé sie znamená ji, když je sloveso jednotného čísla (Sie kocht = vaří)." | "Malé sie jako podmět může znamenat „ona“ (Sie kocht = Ona vaří); jako předmět může znamenat „ji“." |
| 11 | FULL-A1-00471 | a1-sie-study-2 | study.explanation[1] | APPLIED | "Sie v podstatě znamená: jedna žena." | "Velké Sie je zdvořilé „Vy“; malé sie může znamenat „ona“, „oni“ nebo „ji“." |
| 12 | FULL-A1-00472 | a1-sie-study-2 | study.explanation[7] | APPLIED | "Malé sie znamená ji, když je sloveso jednotného čísla (Sie kocht = vaří)." | "Malé sie jako podmět může znamenat „ona“ (Sie kocht = Ona vaří); jako předmět může znamenat „ji“." |
| 13 | FULL-A1-00473 | a1-sie-study-2 | study.examples[5].lv | APPLIED | "Vaříš prosím" | "Vařte, prosím." |
| 14 | FULL-A1-00474 | a1-sitzen | study.examples[3].lv | APPLIED | "Kočka spí na pohovce." | "Kočka leží na pohovce." |
| 15 | FULL-A1-00475 | a1-sitzen | study.comparison[3].meaning | APPLIED | "Sedět / sednout si" | "Sednout si / posadit" |
| 16 | FULL-A1-00478 | a1-sollen | study.comparison[1].meaning | APPLIED | "Absolutně potřebovat" | "Musit / být nutné" |
| 17 | FULL-A1-00480 | a1-stehen | study.explanation[0] | APPLIED | "Hlavní myšlenka: stehen znamená stát nebo stát." | "Hlavní myšlenka: stehen znamená stát; u předmětů může znamenat, že něco stojí nebo je postavené." |
| 18 | FULL-A1-00485 | a1-über | study.explanation[3] | APPLIED | "V pohybu může über znamenat konec." | "Při pohybu může über znamenat „přes“ nebo pohyb přes něco." |
| 19 | FULL-A1-00488 | a1-über | study.important[1] | APPLIED | "Sprechen über znamená 'hovořit'." | "Sprechen über znamená „hovořit o“ nebo „mluvit o“." |
| 20 | FULL-A1-00489 | a1-unter | study.examples[2].lv | APPLIED | "Mezi přáteli se říká." | "Mezi přáteli se to tak říká." |
| 21 | FULL-A1-00493 | a1-verstehen | study.comparison[1].meaning | APPLIED | "Být schopen / vědět" | "Být schopen / umět" |
| 22 | FULL-A1-00494 | a1-verstehen | study.comparison[3].meaning | APPLIED | "Vědět" | "Znát" |
| 23 | FULL-A1-00496 | a1-vom | study.translation | APPLIED | "Z" | "Od • Z" |
| 24 | FULL-A1-00497 | a1-vom | study.examples[2].lv | APPLIED | "Pochází od lékaře." | "Přichází od lékaře." |
| 25 | FULL-A1-00498 | a1-vom | study.examples[5].lv | APPLIED | "Pocházíme z oslavy." | "Přicházíme z oslavy." |
| 26 | FULL-A1-00499 | a1-vom | study.comparison[0].meaning | APPLIED | "Od (konkrétní věc, pro koho?)" | "Od (konkrétní osoby nebo věci)" |
| 27 | FULL-A1-00500 | a1-vom | study.explanation[1] | APPLIED | "Plná podoba: von dem (komu?)." | "Plná podoba: von dem (od koho? od čeho?)." |

## sectionAccents sync (example lv targets)

- a1-seite `study.sectionAccents.examples[0].lv.purple[0]`: Přejděte → Otevřete (SYNCED)
- a1-sich `study.sectionAccents.examples[0].lv.purple[0]`: Koupe → Myje (SYNCED)
- a1-sicher `study.sectionAccents.examples[5].lv.purple[0]`: Jezděte → Jeď (SYNCED)
- a1-sie-study-2 `study.sectionAccents.examples[5].lv.purple[0]`: Vaříš → Vařte (SYNCED)
- a1-vom `study.sectionAccents.examples[2].lv.purple[0]`: Pochází → Přichází (SYNCED)
- a1-vom `study.sectionAccents.examples[5].lv.purple[0]`: Pocházíme → Přicházíme (SYNCED)

## Integrity

- DE changes: **0**
- unexpected production changes: **0** (scope-limited)
- cards: **702**
- ID/order: **PASS**
- syntax: **PASS**
- mirror: **PASS**
- Study created/deleted: **0/0**

_Applied: 2026-08-12_
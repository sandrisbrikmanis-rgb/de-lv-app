# CS–DE A1 Full Review Repair — Block 04 (Findings 151–200)

## Review coverage

- canonical findings reviewed: **50** (FULL-A1-00151 … FULL-A1-00200)
- repair findings: **14**
- OWNER keep current: **6**
- already fixed / stale: **22**
- path drift / no repair: **8**

## Repair

- requested fields: **14**
- processed: **14/14**
- APPLIED: **13**
- ALREADY_CORRECT: **0**
- CURRENT_VALUE_MISMATCH: **1**

## Per-item results

| # | findingId | cardId | field | status | before | after |
|---|---|---|---|---|---|---|
| 1 | FULL-A1-00151 | a1-bei | study.comparison[2].meaning | APPLIED | "Kdo jde (směr)" | "Ke komu se jde (směr)" |
| 2 | FULL-A1-00153 | a1-bis | study.comparison[1].word | APPLIED | "bis ... zu" | "bis zu" |
| 3 | FULL-A1-00166 | a1-bleiben | study.comparison[0].meaning | APPLIED | "Pobyt" | "Zůstat" |
| 4 | FULL-A1-00168 | a1-bringen | study.examples[2].lv | APPLIED | "Vezme knihu do školy." | "Donese knihu do školy." |
| 5 | FULL-A1-00175 | a1-da | study.examples[2].lv | APPLIED | "Tady přichází." | "Tamhle přichází." |
| 6 | FULL-A1-00176 | a1-da | study.explanation[2] | APPLIED | "Podle situace to lze přeložit i jako zde nebo zde." | "Podle situace lze „da“ přeložit také jako „tam“, „tady“ nebo „zde“." |
| 7 | FULL-A1-00177 | a1-da | study.tip.text | APPLIED | "Pamatujte: generál tam/te → da." | "Pamatujte: obecné „tam“ nebo „tady“ → da." |
| 8 | FULL-A1-00179 | a1-das | study.explanation | APPLIED | "Používá se pro podstatná jména středního rodu. V některých větách může „to“ fungovat také jako zájmeno nebo vztažné zájmeno." | "Používá se před podstatnými jmény středního rodu. V některých větách může „das“ fungovat také jako zájmeno nebo vztažné zájmeno." |
| 9 | FULL-A1-00181 | a1-das | study.tip.text | CURRENT_VALUE_MISMATCH | "Pamatujte: střední genitiv → das • Že → dass." | "Pamatujte: střední genitiv → das • Že → dass." |
| 10 | FULL-A1-00188 | a1-der | study.examples[1].lv | APPLIED | "Autobus jede." | "Autobus přijíždí." |
| 11 | FULL-A1-00190 | a1-der | study.important[1] | APPLIED | "Použití zájmen a relativního jména přijde později." | "Použití zájmena a vztažného zájmena přijde později." |
| 12 | FULL-A1-00195 | a1-die | study.important[0] | APPLIED | "Na úrovni A1 je kostka nejprve studována jako ženský článek." | "Na úrovni A1 se „die“ nejprve učí jako určitý člen ženského rodu." |
| 13 | FULL-A1-00197 | a1-dieser | study.examples[0].lv | APPLIED | "Tento muž je pěkný." | "Tento muž je milý." |
| 14 | FULL-A1-00200 | a1-dieser | study.tip.text | APPLIED | "Pamatujte: toto + mužský → dieser." | "Pamatujte: „tento“ + mužský rod → dieser." |

## OWNER keep current (unchanged)

- FULL-A1-00160 a1-bitte study.tip[1]
- FULL-A1-00164 a1-bitte-study study.tip[1]
- FULL-A1-00169 a1-bringen study.comparison[2].meaning — Jít pro / přinést
- FULL-A1-00187 a1-dass study.important[0]
- FULL-A1-00198 a1-dieser study.examples[1].lv
- FULL-A1-00199 a1-dieser study.examples[2].lv

## Path drift / no repair (unchanged)

- FULL-A1-00154 a1-bis study.comparison[2].word
- FULL-A1-00155 a1-bis study.comparison[2].meaning
- FULL-A1-00156 a1-bitte study.examples[0].lv
- FULL-A1-00157 a1-bitte study.examples[1].lv
- FULL-A1-00158 a1-bitte study.examples[2].lv
- FULL-A1-00161 a1-bitte-study study.examples[1].lv
- FULL-A1-00162 a1-bitte-study study.examples[2].lv
- FULL-A1-00167 a1-bringen study.examples[0].lv

## Integrity

- DE changes: **0**
- unexpected production changes: **0** (scope-limited)
- cards: **702**
- ID/order: **PASS**
- syntax: **PASS**
- mirror: **PASS**
- Study created/deleted: **0/0**

_Applied: 2026-08-12_
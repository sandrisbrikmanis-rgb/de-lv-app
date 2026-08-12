# CS–DE A1 Full Review Repair — Block 05 (Findings 201–250)

## Review coverage

- canonical findings reviewed: **50** (FULL-A1-00201 … FULL-A1-00250)
- repair findings: **19**
- authorized repair fields: **20**
- OWNER keep current: **6**
- already fixed / stale: **20**
- path drift / no repair: **5**

## Repair

- authorized fields: **20**
- processed: **20/20**
- APPLIED: **20**
- ALREADY_CORRECT: **0**
- CURRENT_VALUE_MISMATCH: **0**

## Per-item results

| # | findingId | cardId | field | status | before | after |
|---|---|---|---|---|---|---|
| 1 | FULL-A1-00201 | a1-dieser | study.important[0] | APPLIED | "Dieser, diese a dieses se mění podle pohlaví." | "Dieser, diese a dieses se mění podle rodu." |
| 2 | FULL-A1-00202 | a1-ein | study.translation | APPLIED | "Neurčitý člen • Jeden • Někdo" | "Neurčitý člen • Jeden" |
| 3 | FULL-A1-00203 | a1-ein | study.tip.text | APPLIED | "Pamatujte: nespecifický jeden/někdo → ein." | "Pamatujte: ein není jen „jeden“, často je to neurčitý člen." |
| 4 | FULL-A1-00206 | a1-eis | study.comparison[0].meaning | APPLIED | "Zmrzlina / zmrzlina" | "Led / zmrzlina" |
| 5 | FULL-A1-00213 | a1-es | study.translation | APPLIED | "To • To • Neosobní podoba" | "To • Ono • Neosobní podoba" |
| 6 | FULL-A1-00221 | a1-etwas | study.explanation[1] | APPLIED | "Pokud etwas nahradí neznámou věc, češtině obvykle něco řekne." | "Když etwas označuje neznámou věc, v češtině se obvykle překládá jako „něco“." |
| 7 | FULL-A1-00222 | a1-etwas | study.explanation[2] | APPLIED | "Když etwas stojí před přídavným jménem nebo veličinou, často to znamená málo." | "Když etwas stojí před přídavným jménem nebo veličinou, často znamená „trochu“ nebo „poněkud“." |
| 8 | FULL-A1-00223 | a1-etwas | study.tip.text | APPLIED | "Pamatujte: věc → něco • Stupeň → mírně." | "Pamatujte: věc → něco • míra → trochu." |
| 9 | FULL-A1-00224 | a1-etwas | study.important[1] | APPLIED | "V češtině něco zní lépe než něco, například: etwas trinken = něco pít." | "V češtině se tvar mění podle pádu: etwas trinken = něco pít." |
| 10 | FULL-A1-00232 | a1-euch | study.comparison[1].meaning | APPLIED | "Vám / vám" | "Vás / vám" |
| 11 | FULL-A1-00232 | a1-euch | study.comparison[1].example | APPLIED | "Ich helfe euch. = Pomáhám ti." | "Ich helfe euch. = Pomáhám vám." |
| 12 | FULL-A1-00233 | a1-euch | study.comparison[2].meaning | APPLIED | "Vaše" | "Váš / vaše" |
| 13 | FULL-A1-00234 | a1-euch | study.info[1] | APPLIED | "Euch = vás (přímý doplněk) / vám (dativ)" | "Euch = vás (přímý předmět) / vám (dativ)" |
| 14 | FULL-A1-00240 | a1-fahren | study.comparison[2].meaning | APPLIED | "Běž / běž" | "Běhat / běžet" |
| 15 | FULL-A1-00242 | a1-finden | study.translation | APPLIED | "Najít • Zvážit" | "Najít • Myslet si" |
| 16 | FULL-A1-00243 | a1-finden | study.explanation[1] | APPLIED | "V konverzaci finden velmi často také znamená zvážit nebo přemýšlet o něčem." | "V konverzaci finden velmi často také znamená mít na něco názor nebo si něco myslet." |
| 17 | FULL-A1-00246 | a1-frau | study.explanation[0] | APPLIED | "Hlavní myšlenka: die Frau může znamenat ženu (pohlaví) nebo manželku (manželku)." | "Hlavní myšlenka: die Frau může znamenat ženu nebo manželku." |
| 18 | FULL-A1-00247 | a1-frau | study.explanation[2] | APPLIED | "V případě manžela, die Frau = manželka (meine Frau = moje žena)." | "Pokud jde o manželský vztah, die Frau = manželka (meine Frau = moje žena)." |
| 19 | FULL-A1-00248 | a1-frau | study.explanation[3] | APPLIED | "Přivlastňovací zájmeno (meine/deine/seine Frau) téměř vždy znamená manželka – manžel." | "Spojení s přivlastňovacím zájmenem (meine/deine/seine Frau) téměř vždy znamená manželku." |
| 20 | FULL-A1-00249 | a1-frau | study.sectionAccents.tip[1].purple | APPLIED | "[\"Přivlastňovací\"]" | "[]" |

## OWNER keep current (unchanged)

- FULL-A1-00236 a1-fahren study.explanation[0]
- FULL-A1-00237 a1-fahren (keep current)
- FULL-A1-00238 a1-fahren (keep current)
- FULL-A1-00239 a1-fahren (keep current)
- FULL-A1-00244 a1-finden study.explanation[2]
- FULL-A1-00245 a1-finden study.tip.text

## Path drift / no repair (unchanged)

- FULL-A1-00215 a1-es study.examples[0].lv
- FULL-A1-00216 a1-es study.examples[1].lv
- FULL-A1-00217 a1-es study.examples[2].lv
- FULL-A1-00218 a1-es study.examples[3].lv
- FULL-A1-00241 a1-fahren study.important.text

## Integrity

- DE changes: **0**
- unexpected production changes: **0** (scope-limited)
- cards: **702**
- ID/order: **PASS**
- syntax: **PASS**
- mirror: **PASS**
- Study created/deleted: **0/0**

_Applied: 2026-08-12_
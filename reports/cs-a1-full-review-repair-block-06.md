# CS–DE A1 Full Review Repair — Block 06 (Findings 251–300)

## Review coverage

- canonical findings reviewed: **50** (FULL-A1-00251 … FULL-A1-00300)
- repair findings: **25**
- OWNER keep current: **4**
- already fixed / stale: **19**
- path / source mismatch: **2**

## Repair

- requested fields: **25**
- processed: **25/25**
- APPLIED: **24**
- ALREADY_CORRECT: **0**
- CURRENT_VALUE_MISMATCH: **1**

## Per-item results

| # | findingId | cardId | field | status | before | after |
|---|---|---|---|---|---|---|
| 1 | FULL-A1-00251 | a1-fuer | study.explanation[0] | APPLIED | "Hlavní myšlenka: für je předložka, která vždy řídí akuzativ – obvykle pro nebo pro v češtině." | "Hlavní myšlenka: für je předložka, která vždy řídí akuzativ; v češtině se podle kontextu překládá jako pro nebo za." |
| 2 | FULL-A1-00254 | a1-gleich | study.translation | APPLIED | "Hned • Rovný" | "Hned • Stejný" |
| 3 | FULL-A1-00255 | a1-gleich | study.explanation[0] | APPLIED | "Hlavní myšlenka: gleich temporally znamená okamžitě, komparativně znamená rovný." | "Hlavní myšlenka: gleich v časovém významu znamená hned a při srovnání znamená stejný." |
| 4 | FULL-A1-00256 | a1-gleich | study.explanation[3] | APPLIED | "Gleich lze použít i jako předložku s dativem ve významu jako (gleich mir = jako já)." | "Správný význam určuje kontext, například zda jde o čas nebo o srovnání." |
| 5 | FULL-A1-00259 | a1-gross-study | study.explanation[0] | APPLIED | "Hlavní myšlenka: Velká velikost nebo pro osobu - vysoká na výšku." | "Hlavní myšlenka: groß označuje velkou velikost, u člověka vysokou postavu." |
| 6 | FULL-A1-00263 | a1-haben | study.important[1] | APPLIED | "Se seinem a dativem: Mir ist kalt. = Je mi zima. (není to haben!)" | "Se slovesem sein a dativem: Mir ist kalt. = Je mi zima. (Není to haben!)" |
| 7 | FULL-A1-00265 | a1-halten | study.explanation[0] | CURRENT_VALUE_MISMATCH | "Hlavní myšlenka: zastavit znamená držet, ale s přepravou nebo pohybem může znamenat zastavit nebo zastavit." | "Hlavní myšlenka: zastavit znamená držet, ale s přepravou nebo pohybem může znamenat zastavit nebo zastavit." |
| 8 | FULL-A1-00268 | a1-heißen | study.comparison[0].meaning | APPLIED | "Být volán / míněn" | "Jmenovat se / znamenat" |
| 9 | FULL-A1-00271 | a1-heißen | study.examples[1].lv | APPLIED | "Jak se jmenuješ" | "Jak se jmenuješ?" |
| 10 | FULL-A1-00272 | a1-heißen | study.examples[3].lv | APPLIED | "Co to znamená" | "Co to znamená?" |
| 11 | FULL-A1-00275 | a1-hoeren-study | study.examples[2].lv | APPLIED | "Slyším tě" | "Slyším tě." |
| 12 | FULL-A1-00277 | a1-ihr | study.translation | APPLIED | "Vy • Ji" | "Vy • Jí • Její" |
| 13 | FULL-A1-00280 | a1-ihr | study.examples[3].lv | APPLIED | "Napíše jí dopis." | "Píše jí dopis." |
| 14 | FULL-A1-00282 | a1-ihr | study.explanation[0] | APPLIED | "Hlavní myšlenka: ihr jsou dvě různá zájmena se stejným pravopisem - oslovující několik lidí (vy) a dativ zájmena sie (ona/ona)." | "Hlavní myšlenka: ihr má několik použití — jako oslovení více lidí znamená „vy“, jako dativ zájmena sie znamená „jí“ a jako přivlastňovací zájmeno může znamenat „její“." |
| 15 | FULL-A1-00283 | a1-ihr | study.tip[0] | APPLIED | "Ihr se slovesem dsk. forma (kommt, habt) = ty • Ihr vedle slova jako dativ nebo přivlastňovací = její/její." | "Ihr se slovesem ve 2. osobě množného čísla (kommt, habt) = vy • ihr jako dativ zájmena sie = jí • ihr jako přivlastňovací zájmeno = její." |
| 16 | FULL-A1-00284 | a1-im | study.examples[0].lv | APPLIED | "Jsem v parku" | "Jsem v parku." |
| 17 | FULL-A1-00285 | a1-im | study.explanation[2] | APPLIED | "Používá se s podstatnými jmény mužského rodu a podstatnými jmény libovolného pohlaví při odpovědi na otázku kde? — umístění." | "Používá se s podstatnými jmény mužského a středního rodu při odpovědi na otázku kde? — označuje umístění." |
| 18 | FULL-A1-00288 | a1-im | study.comparison[3].meaning | APPLIED | "Kde, kde? (komu?)" | "U, kde? (3. pád)" |
| 19 | FULL-A1-00289 | a1-im | study.tip[1] | APPLIED | "Kde? → ins • Kde? → im - nezaměňujte tyto dva!" | "Kam? → ins • Kde? → im — nezaměňujte tyto dva!" |
| 20 | FULL-A1-00290 | a1-im | study.important[0] | APPLIED | "Im = in dem, pouze s podstatným jménem mužského nebo středního rodu pro koho? ve skloňování." | "Im = in dem; používá se s podstatnými jmény mužského nebo středního rodu v dativu a odpovídá na otázku kde?" |
| 21 | FULL-A1-00292 | a1-im | study.examples[5].lv | APPLIED | "V lednu jsem jel do Vídně." | "V lednu jedu do Vídně." |
| 22 | FULL-A1-00293 | a1-in | study.explanation[1] | APPLIED | "S polohou se in často překládá jako v nebo v: v Berlíně = v Berlíně." | "Při označení polohy se in často překládá jako „v“ nebo „ve“: in Berlin = v Berlíně." |
| 23 | FULL-A1-00294 | a1-in | study.explanation[3] | APPLIED | "Českýý překlad se mění v závislosti na kontextu." | "Český překlad se mění v závislosti na kontextu." |
| 24 | FULL-A1-00297 | a1-ins | study.explanation[2] | APPLIED | "Používá se s podstatnými jmény jakéhokoli pohlaví při odpovědi na otázku kde? - pohyb dovnitř." | "Používá se s podstatnými jmény středního rodu při odpovědi na otázku kam? — označuje pohyb dovnitř." |
| 25 | FULL-A1-00300 | a1-ins | study.comparison[1].meaning | APPLIED | "Uvnitř kde? (komu?)" | "Uvnitř, kde? (3. pád)" |

## OWNER keep current (unchanged)

- FULL-A1-00253 a1-fuer study.important[1]
- FULL-A1-00257 a1-gleich study.important[1]
- FULL-A1-00266 a1-halten study.tip.text
- FULL-A1-00295 a1-in study.tip.text

## Path / source mismatch (unchanged)

- FULL-A1-00258 a1-gross-study study.examples[1].lv
- FULL-A1-00276 a1-hoeren-study fields[2].csText (duplicate of 00275)

## Integrity

- DE changes: **0**
- unexpected production changes: **0** (scope-limited)
- cards: **702**
- ID/order: **PASS**
- syntax: **PASS**
- mirror: **PASS**
- Study created/deleted: **0/0**

_Applied: 2026-08-12_
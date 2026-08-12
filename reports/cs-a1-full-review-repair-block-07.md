# CS–DE A1 Full Review Repair — Block 07 (Findings 301–350)

## Review coverage

- canonical findings reviewed: **50** (FULL-A1-00301 … FULL-A1-00350)
- repair findings: **28**
- OWNER keep current: **1**
- already fixed / stale: **21**

## Repair

- requested fields: **28**
- processed: **28/28**
- APPLIED: **26**
- ALREADY_CORRECT: **0**
- CURRENT_VALUE_MISMATCH: **2**

## Per-item results

| # | findingId | cardId | field | status | before | after |
|---|---|---|---|---|---|---|
| 1 | FULL-A1-00301 | a1-ins | study.comparison[1].example | APPLIED | "im Kino – Kino" | "im Kino – V kině" |
| 2 | FULL-A1-00302 | a1-ins | study.comparison[3].example | APPLIED | "aufs Dach – Na střeše" | "aufs Dach – Na střechu" |
| 3 | FULL-A1-00303 | a1-ins | study.tip[0] | APPLIED | "Pamatujte: in + das → ins (kde?, kde?)." | "Pamatujte: in + das → ins (kam?, při pohybu dovnitř)." |
| 4 | FULL-A1-00305 | a1-ins | study.important[0] | APPLIED | "Ins = in das, pouze s podstatným jménem libovolného rodu kde? ve skloňování." | "Ins = in das; používá se se středním rodem v akuzativu a odpovídá na otázku kam?" |
| 5 | FULL-A1-00306 | a1-ins | study.important[2] | APPLIED | "Pro mužský rod: in den Wald • Žen: v die Schule." | "Pro mužský rod: in den Wald • Pro ženský rod: in die Schule." |
| 6 | FULL-A1-00307 | a1-jung | study.translation | APPLIED | "Mladý (o lidech)" | "Mladý" |
| 7 | FULL-A1-00310 | a1-kein | study.explanation[0] | APPLIED | "Hlavní myšlenka: kein je negační člen, který neguje podstatné jméno - češtině, v závislosti na kontextu nikdo nebo nic." | "Hlavní myšlenka: kein je záporný člen, který stojí před podstatným jménem a v češtině se podle kontextu překládá například jako „žádný“, „žádná“ nebo „žádné“." |
| 8 | FULL-A1-00311 | a1-kein | study.explanation[3] | APPLIED | "U nezávazných nebo abstraktních podstatných jmen se kein často překládá jako nic/vůbec (kein Geld = žádné peníze/žádné peníze)." | "U nepočitatelných nebo abstraktních podstatných jmen se kein často překládá pomocí „žádný“ nebo odpovídajícího záporného vyjádření (kein Geld = žádné peníze)." |
| 9 | FULL-A1-00313 | a1-kennen-study | study.comparison[0].meaning | APPLIED | "Vědět (osoba, místo, věc)" | "Znát (osobu, místo, věc)" |
| 10 | FULL-A1-00314 | a1-kennen-study | study.comparison[1].meaning | APPLIED | "Vědět (fakt, informace)" | "Vědět (fakt, informaci)" |
| 11 | FULL-A1-00316 | a1-kennen-study | study.tip[0] | APPLIED | "Kennen = vědět" | "Kennen = znát" |
| 12 | FULL-A1-00317 | a1-kennen-study | study.important[1] | APPLIED | "Kennen = vědět." | "Kennen = znát." |
| 13 | FULL-A1-00318 | a1-wissen-study | study.comparison[1].meaning | APPLIED | "Vědět (osoba, místo, věc)" | "Znát (osobu, místo, věc)" |
| 14 | FULL-A1-00319 | a1-wissen-study | study.important[0] | APPLIED | "Wissen = znát skutečnost." | "Wissen = vědět skutečnost." |
| 15 | FULL-A1-00321 | a1-können | study.examples[1].lv | APPLIED | "Můžete mi pomoci?" | "Můžeš mi pomoct?" |
| 16 | FULL-A1-00325 | a1-können | study.important[0] | APPLIED | "Können není totéž co dürfen. können = moci/vědět, dürfen = mít dovoleno." | "Können není totéž co dürfen. können = moci/umět, dürfen = mít dovoleno." |
| 17 | FULL-A1-00326 | a1-kosten | study.translation | CURRENT_VALUE_MISMATCH | "Platit" | "Platit" |
| 18 | FULL-A1-00327 | a1-kosten | study.explanation[0] | APPLIED | "Hlavní myšlenka: kosten znamená platit tak a tak - mluví o ceně věci." | "Hlavní myšlenka: kosten znamená stát určitou částku — mluví o ceně věci." |
| 19 | FULL-A1-00328 | a1-kosten | study.comparison[0].meaning | CURRENT_VALUE_MISMATCH | "Zaplatit (cena) • Kolik" | "Zaplatit (cena) • Kolik" |
| 20 | FULL-A1-00329 | a1-kosten | study.important[1] | APPLIED | "V češtině se v obou případech často používá plat, ale v němčině je třeba vybrat podle situace." | "V češtině se v těchto souvislostech používají slovesa „stát“ nebo „platit“, ale v němčině je třeba vybrat podle situace." |
| 21 | FULL-A1-00331 | a1-laden-study | study.explanation[1] | APPLIED | "Laden je malé sloveso - naložit nebo nabít." | "laden je sloveso — znamená naložit nebo nabít." |
| 22 | FULL-A1-00332 | a1-land | study.translation | APPLIED | "Země • Země" | "Země • Venkov" |
| 23 | FULL-A1-00333 | a1-land | study.comparison[0].meaning | APPLIED | "Země / země / venkov" | "Země / venkov" |
| 24 | FULL-A1-00335 | a1-land | study.sectionAccents.comparison[0].meaning.purple[1] | APPLIED | "zeme" | "venkov" |
| 25 | FULL-A1-00336 | a1-land | study.sectionAccents.comparison[3].meaning.purple[0] | APPLIED | "zeme" | "Země" |
| 26 | FULL-A1-00340 | a1-lassen | study.translation | APPLIED | "Opustit • Nechat" | "Nechat • Dovolit" |
| 27 | FULL-A1-00344 | a1-lassen | study.comparison[0].meaning | APPLIED | "Nechat / nechat" | "Nechat / dovolit" |
| 28 | FULL-A1-00348 | a1-laufen | study.explanation[0] | APPLIED | "Hlavní myšlenka: laufen znamená běhat, ale u zařízení to může znamenat běhat." | "Hlavní myšlenka: laufen znamená běhat nebo běžet, ale u zařízení může znamenat fungovat nebo běžet." |

## OWNER keep current (unchanged)

- FULL-A1-00338 a1-lang study.explanation[4]

## Integrity

- DE changes: **0**
- unexpected production changes: **0** (scope-limited)
- cards: **702**
- ID/order: **PASS**
- syntax: **PASS**
- mirror: **PASS**
- Study created/deleted: **0/0**

_Applied: 2026-08-12_
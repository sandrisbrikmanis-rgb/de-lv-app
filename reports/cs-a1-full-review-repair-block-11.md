# CS–DE A1 Full Review Repair — Block 11 (Findings 501–550)

## Review coverage

- canonical findings reviewed: **50** (FULL-A1-00501 … FULL-A1-00550)
- repair findings: **28**
- stale / already correct / OWNER keep: **22**

## Repair

- requested fields: **28**
- processed: **28/28**
- APPLIED: **28**
- ALREADY_CORRECT: **0**
- CURRENT_VALUE_MISMATCH: **0**

## Per-item results

| # | findingId | cardId | field | status | before | after |
|---|---|---|---|---|---|---|
| 1 | FULL-A1-00501 | a1-vom | study.important[0] | APPLIED | "Vom = von dem, pouze s podstatným jménem mužského nebo středního rodu pro koho? ve skloňování." | "Vom = von dem. Používá se s podstatnými jmény mužského nebo středního rodu ve významu „od koho?“ nebo „od čeho?“." |
| 2 | FULL-A1-00503 | a1-vor | study.explanation[2] | APPLIED | "Pokud jde o místo, vor znamená před nebo u." | "Pokud jde o místo, vor znamená „před“ nebo „před něčím“." |
| 3 | FULL-A1-00504 | a1-vor | study.explanation[3] | APPLIED | "V hodinovém čase vor znamená 'až', např. fünf vor acht." | "V časovém údaji vor znamená „za … minut“, například fünf vor acht = za pět minut osm." |
| 4 | FULL-A1-00510 | a1-was | study.explanation[3] | APPLIED | "Pokud je předmětem věty was, překládá se do češtině jako kas (Was ist das? = Co to je?)." | "Was ist das? se do češtiny překládá jako „Co to je?“. Was zde označuje věc, nikoli osobu." |
| 5 | FULL-A1-00511 | a1-was | study.explanation[4] | APPLIED | "Jestliže was je doplněk (předmět) slovesa, překládá se do češtině jako ko (Was machst du? = Co děláš?)." | "Was je ve větě předmětem slovesa a do češtiny se překládá jako „co“: Was machst du? = Co děláš?" |
| 6 | FULL-A1-00512 | a1-was | study.explanation[5] | APPLIED | "Lidé jsou dotázáni s wer (kdo/kdo), ne byl." | "Na osoby se ptáme pomocí wer (kdo), nikoli was." |
| 7 | FULL-A1-00513 | a1-was | study.important[2] | APPLIED | "Was für (ein/eine) znamená někoho/o čem a ptá se na kvalitu nebo typ (Was für ein Film ist das? = O jaký druh filmu jde?)." | "Was für (ein/eine) znamená „jaký/jaká“ a ptá se na vlastnost nebo typ (Was für ein Film ist das? = O jaký druh filmu jde?)." |
| 8 | FULL-A1-00514 | a1-wenn | study.examples[0].lv | APPLIED | "Pokud budete mít čas, stavte se." | "Pokud budeš mít čas, stav se." |
| 9 | FULL-A1-00515 | a1-wenn | study.examples[3].lv | APPLIED | "Nevím jestli přijde." | "Nevím, jestli přijde." |
| 10 | FULL-A1-00517 | a1-wenn | study.comparison[2].meaning | APPLIED | "Když je v otázce" | "Kdy v otázce" |
| 11 | FULL-A1-00520 | a1-wenn | study.explanation[3] | APPLIED | "Po wenn končí sloveso většinou německou větou." | "Po wenn stojí sloveso ve vedlejší větě obvykle na konci." |
| 12 | FULL-A1-00521 | a1-wer | study.translation | APPLIED | "Kdo • Kdo" | "Kdo" |
| 13 | FULL-A1-00525 | a1-wer | study.explanation[0] | APPLIED | "Hlavní myšlenka: wer je dotazovací slovo o identitě osoby – v češtině je to kdo nebo kdo." | "Hlavní myšlenka: wer je tázací slovo pro osoby a v češtině znamená „kdo“." |
| 14 | FULL-A1-00527 | a1-wer | study.important[2] | APPLIED | "Wer mění tvar přechylováním: wen, wem, wessen - ale základní tvar je wer." | "Wer mění tvar podle pádu: wen, wem, wessen. Základní tvar je wer." |
| 15 | FULL-A1-00528 | a1-werden | study.explanation[1] | APPLIED | "Používá se, když se něco změní nebo změní." | "Používá se, když se něco změní nebo se stane jiným." |
| 16 | FULL-A1-00530 | a1-werden | study.comparison[2].meaning | APPLIED | "Pobyt" | "Zůstat" |
| 17 | FULL-A1-00531 | a1-werden | study.comparison[3].meaning | APPLIED | "Dělat / dělat" | "Dělat / vyrábět" |
| 18 | FULL-A1-00536 | a1-wie | study.examples[0].lv | APPLIED | "Jak se máte" | "Jak se máš?" |
| 19 | FULL-A1-00537 | a1-wie | study.examples[3].lv | APPLIED | "Kolik je Vám let" | "Kolik je ti let?" |
| 20 | FULL-A1-00538 | a1-wie | study.examples[4].lv | APPLIED | "Jak je film dlouhý?" | "Jak dlouho film trvá?" |
| 21 | FULL-A1-00539 | a1-wie | study.explanation[1] | APPLIED | "Wie alone (Wie geht's?) se ptá na cestu - v češtině jak." | "Wie samo (Wie geht's?) se ptá na způsob nebo stav. V češtině znamená „jak“." |
| 22 | FULL-A1-00540 | a1-wie | study.important[2] | APPLIED | "Špatně: Kolik je vám let? → Správně: Jak se máš? (Wie geht's?)" | "Špatně: „Kolik ti je?“ jako překlad Wie geht's? → Správně: „Jak se máš?“" |
| 23 | FULL-A1-00543 | a1-zu | study.explanation[1] | APPLIED | "U lidí a institucí zu často znamená u nebo do." | "U osob zu často znamená „k“ nebo „ke“. U některých institucí také „do“ nebo „na“." |
| 24 | FULL-A1-00544 | a1-zu | study.explanation[2] | APPLIED | "S přídavnými jmény může zu znamenat také." | "Před přídavnými jmény může zu znamenat „příliš“: zu teuer = příliš drahé." |
| 25 | FULL-A1-00546 | a1-zu | study.important[1] | APPLIED | "Zu teuer znamená „příliš drahé“, nikoli „příliš drahé“." | "Zu teuer znamená „příliš drahé“, nikoli pouze „drahé“." |
| 26 | FULL-A1-00547 | a1-zug | study.examples[1].lv | APPLIED | "Jezdím vlakem" | "Jezdím vlakem." |
| 27 | FULL-A1-00549 | a1-zum | study.examples[1].lv | APPLIED | "Jdeme na nádraží." | "Jedeme na nádraží." |
| 28 | FULL-A1-00550 | a1-zum | study.examples[2].lv | APPLIED | "Jde do obchodu." | "Jde do supermarketu." |

## sectionAccents sync (example lv targets)

- a1-zum `study.sectionAccents.examples[1].lv.purple[0]`: Jdeme → Jedeme (SYNCED)

## Integrity

- DE changes: **0**
- unexpected production changes: **0** (scope-limited)
- cards: **702**
- ID/order: **PASS**
- syntax: **PASS**
- mirror: **PASS**
- Study created/deleted: **0/0**

_Applied: 2026-08-12_
# FR–DE A1 — POST-REPAIR OWNER GALA LĒMUMI, 4. CIKLS

**Avots:** PR #683 aktuālais cycle 4 OWNER fails pēc audita #4.

**Pārklājums:** 22/22 · **LABOT:** 18 · **FALSE_POSITIVE:** 4 · **PENDING:** 0

**DE = STRICT READ-ONLY.** Production šajā OWNER posmā nav mainīts. Apply tikai ar CURRENT exact-match.

| # | Audit ID | Card ID | Field | CURRENT | OWNER STATUS | OWNER NEW | Pamatojums |
|---:|---|---|---|---|---|---|---|
| 1 | FR-A1-0332 | a1-frühstücken-208 | frText | Prendre le petit déjeuner | **LABOT** | Prendre le petit-déjeuner | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 2 | FR-A1-0337 | a1-ab | study.comparison[0].meaning | À partir du point/heure | **LABOT** | À partir d'un point ou d'une heure | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 3 | FR-A1-0340 | a1-auf | frMain | À | **LABOT** | Sur | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 4 | FR-A1-0343 | a1-auf | study.tip.text | Rappelez-vous : en surface/au-dessus → auf. | **LABOT** | À retenir : sur une surface ou au-dessus → auf. | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 5 | FR-A1-0359 | a1-eis | study.tip.text | N'oubliez pas : nourriture → glace • Hiver/eau → glace. | **FALSE_POSITIVE** |  | Study padoms apzināti pretstata vienas FR formas « glace » divus kontekstus un sasaista tos ar vācu mērķjēdzieniem; bullet nav nekontrolēts learner-card tulkojumu saraksts. |
| 6 | FR-A1-0376 | a1-fahren | study.tip.text | N'oubliez pas : véhicule → fahren • À pied → gehen. | **FALSE_POSITIVE** |  | Study padoms apzināti salīdzina vācu « fahren » un « gehen »; bullet ir pedagoģiska struktūra, nevis kļūdains FR tulkojumu saraksts. |
| 7 | FR-A1-0388 | a1-heißen | study.examples[1].lv | Quel est ton nom | **LABOT** | Quel est ton nom ? | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 8 | FR-A1-0389 | a1-heißen | study.examples[3].lv | Qu'est-ce que cela signifie | **LABOT** | Qu'est-ce que cela signifie ? | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 9 | FR-A1-0391 | a1-heißen | study.comparison[1].meaning | Appeler / nommer | **LABOT** | Appeler ou nommer | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 10 | FR-A1-0393 | a1-hoeren-study | study.examples[2].lv | Je t'entends | **LABOT** | Je t'entends. | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 11 | FR-A1-0397 | a1-im | study.examples[0].lv | Je suis dans le parc | **LABOT** | Je suis dans le parc. | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 12 | FR-A1-0399 | a1-in | study.examples[0].lv | Je suis à Berlin | **LABOT** | Je suis à Berlin. | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 13 | FR-A1-0400 | a1-in | study.examples[1].lv | Je vais à l'école | **LABOT** | Je vais à l'école. | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 14 | FR-A1-0402 | a1-jung | frMain | Jeune (à propos des gens) | **LABOT** | Jeune | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 15 | FR-A1-0404 | a1-kennen-study | study.examples[3].lv | Je le connais | **LABOT** | Je le connais. | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 16 | FR-A1-0406 | a1-können | study.comparison[1].meaning | Être autorisé | **FALSE_POSITIVE** |  | Comparison leksiskajā laukā « Être autorisé » ir gramatiski pilnīga forma. « Être autorisé à » bez infinitīva papildinājuma būtu nepabeigta. |
| 17 | FR-A1-0419 | a1-mit | study.examples[1].lv | Je pars en bus | **LABOT** | Je pars en bus. | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 18 | FR-A1-0420 | a1-morgen-study | study.examples[0].lv | Bonjour! | **LABOT** | Bonjour ! | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 19 | FR-A1-0421 | a1-morgen-study | study.examples[4].lv | Bonjour! | **LABOT** | Bonjour ! | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 20 | FR-A1-0428 | a1-sehen | study.tip.text | Rappelez-vous : les yeux perçoivent → sehen • Regarder consciemment → schauen/ansehen. | **FALSE_POSITIVE** |  | « Regarder consciemment » ir pareizs nenoteiksmes skaidrojums. Audita NEW « Regardez consciemment » ir pavēles forma un mainītu lauka funkciju. |
| 21 | FR-A1-0440 | a1-sitzen | frMain | S'asseoir | **LABOT** | Être assis | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |
| 22 | FR-A1-0457 | a1-zug | study.examples[3].lv | Le bus arrive plus tard. | **LABOT** | Le train arrive plus tard. | Audita ieteikums pārbaudīts pret DE mērķvārdu, FR gramatiku un kartītes kontekstu; OWNER apstiprināts. |

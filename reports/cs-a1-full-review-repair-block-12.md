# CS–DE A1 Full Review Repair — Block 12 (Findings 551–600)

## Review coverage

- canonical findings reviewed: **50** (FULL-A1-00551 … FULL-A1-00600)
- repair findings (content/accent): **23**
- FALSE_POSITIVE: **2** (FULL-A1-00597, FULL-A1-00598 — `Balkón` unchanged)
- DEFERRED_STRUCTURAL_REVIEW: **2** (FULL-A1-00599, FULL-A1-00600 — `a1-Besuch-87` Study not created)
- stale / already correct / OWNER keep: **23**
- **50/50 canonical findings classified**

## Repair

- requested fields: **23**
- processed: **23/23**
- APPLIED: **23**
- ALREADY_CORRECT: **0**
- CURRENT_VALUE_MISMATCH: **0**
- FALSE_POSITIVE: **2**
- DEFERRED_STRUCTURAL_REVIEW: **2**

## Per-item results

| # | findingId | cardId | field | status | before | after |
|---|---|---|---|---|---|---|
| 1 | FULL-A1-00553 | a1-zum | study.comparison[2].meaning | APPLIED | "Do / v / také" | "K / ke • doma • příliš" |
| 2 | FULL-A1-00555 | a1-zum | study.comparison[4].meaning | APPLIED | "Na (umístění)" | "U / při (místo nebo přítomnost)" |
| 3 | FULL-A1-00556 | a1-zum | study.explanation[2] | APPLIED | "Používá se s podstatnými jmény mužského a středního rodu při označení směru nebo účelu." | "Používá se s podstatnými jmény mužského a středního rodu v dativu, když označuje směr nebo účel." |
| 4 | FULL-A1-00557 | a1-zum | study.important[0] | APPLIED | "Zum = zu dem, pouze s podstatným jménem mužského nebo bezrodového pro koho? ve skloňování." | "Zum = zu dem, používá se s podstatnými jmény mužského a středního rodu v dativu." |
| 5 | FULL-A1-00558 | a1-zum | study.tip[0] | APPLIED | "Pamatujte: zu + dem → zum (pro koho?)." | "Pamatujte: zu + dem → zum (ke komu nebo čemu?)." |
| 6 | FULL-A1-00559 | a1-fernsehen | study.explanation | APPLIED | "Hlavní myšlenka: fernsehen je rozdělené sloveso — ich sehe fern, du siehst fern. To znamená sledování televize. Nezaměňovat s podstatným jménem das Fernsehen (televize jako médium)." | "Hlavní myšlenka: fernsehen je odlučitelné sloveso — ich sehe fern, du siehst fern. Znamená dívat se na televizi. Nezaměňovat s podstatným jménem das Fernsehen (televize jako médium)." |
| 7 | FULL-A1-00561 | a1-fernsehen-study | study.explanation[1] | APPLIED | "Das Fernsehen v podstatě znamená: dívat se na vysílání." | "Das Fernsehen označuje televizi jako médium nebo televizní vysílání." |
| 8 | FULL-A1-00562 | a1-fernsehen-study | study.explanation[2] | APPLIED | "Často popisuje: akce." | "Označuje médium nebo vysílání, nikoli činnost." |
| 9 | FULL-A1-00564 | a1-appetit | study.translation | APPLIED | "Chuť" | "Chuť k jídlu" |
| 10 | FULL-A1-00565 | a1-appetit | study.examples[0].lv | APPLIED | "Chuť k jídlu!" | "Dobrou chuť!" |
| 11 | FULL-A1-00569 | a1-essen | study.tip[0] | APPLIED | "Essen = jísti" | "Essen = jíst" |
| 12 | FULL-A1-00570 | a1-essen | study.important[3] | APPLIED | "Případ/jídlo: das Essen." | "Podstatné jméno / jídlo: das Essen." |
| 13 | FULL-A1-00571 | a1-essen-study | study.translation | APPLIED | "Jídlo • Jídlo" | "Jídlo • Pokrm" |
| 14 | FULL-A1-00576 | a1-essen-study | study.important[3] | APPLIED | "Případ/jídlo: das Essen." | "Podstatné jméno / jídlo: das Essen." |
| 15 | FULL-A1-00577 | a1-gemuese | study.explanation[2] | APPLIED | "Často popisováno: v jakémkoliv pohlaví (pouze v jednotném čísle)." | "Je středního rodu a používá se pouze v jednotném čísle." |
| 16 | FULL-A1-00578 | a1-obst | study.explanation[2] | APPLIED | "Často popisováno: v jakémkoliv pohlaví (pouze v jednotném čísle)." | "Je středního rodu a používá se pouze v jednotném čísle." |
| 17 | FULL-A1-00581 | a1-ferien | study.comparison[0].meaning | APPLIED | "Školní/studijní přestávka (pouze dsk.)" | "Školní/studijní prázdniny (pouze mn. č.)" |
| 18 | FULL-A1-00582 | a1-ferien | study.comparison[0].example | APPLIED | "In den Ferien fahren wir weg. – Jezdíme někam na víkendy." | "In den Ferien fahren wir weg. – O prázdninách někam odjíždíme." |
| 19 | FULL-A1-00584 | a1-ferien | study.important[0] | APPLIED | "Ferien vždy s dativem: in den Ferien." | "Ve spojení in den Ferien je Ferien v dativu množného čísla." |
| 20 | FULL-A1-00585 | a1-urlaub | study.explanation[1] | APPLIED | "Der Urlaub v podstatě znamená: volno v práci." | "Der Urlaub znamená především dovolenou nebo volno z práce." |
| 21 | FULL-A1-00587 | a1-urlaub | study.important[3] | APPLIED | "Dílo: der Urlaub (pouze jednotné číslo)." | "Dovolená: der Urlaub (obvykle jednotné číslo)." |
| 22 | FULL-A1-00588 | a1-urlaub | study.sectionAccents.important[0].green[0] | APPLIED | "der Urlabe" | "der Urlaub" |
| 23 | FULL-A1-00590 | a1-zeit | study.examples[1].lv | APPLIED | "Nemám čas" | "Nemám čas." |

## Classified without production change

- FULL-A1-00597 | a1-Balkon-70 | lv | **FALSE_POSITIVE** | Balkón is correct Czech; PL_CHAR detector false positive
- FULL-A1-00598 | a1-Balkon-70 | lv | **FALSE_POSITIVE** | Same as FULL-A1-00597
- FULL-A1-00599 | a1-Besuch-87 | study | **DEFERRED_STRUCTURAL_REVIEW** | Missing Study vs LV — no authorized CS content to generate
- FULL-A1-00600 | a1-Besuch-87 | study.layout | **DEFERRED_STRUCTURAL_REVIEW** | Structure finding — defer to separate Study parity task

## sectionAccents sync (example lv targets)

- a1-appetit `study.sectionAccents.examples[0].lv.purple[0]`: Chuť → Dobrou (SYNCED)

## Integrity

- DE changes: **0**
- unexpected production changes: **0** (scope-limited)
- cards: **702**
- ID/order: **PASS**
- syntax: **PASS**
- mirror: **PASS**
- Study created/deleted: **0/0**

_Applied: 2026-08-12_
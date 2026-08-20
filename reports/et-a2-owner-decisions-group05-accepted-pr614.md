# ET–DE A2 — OWNER DECISIONS ACCEPTED — grupa 05

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.8  
**Audit PR:** `#614`  
**Authoritative baseline:** `main` after PR #614  
**DE:** STRICT READ-ONLY  
**Apply mode:** COPY-ONLY tikai `OWNER STATUS = LABOT` un tikai pie `actual === CURRENT`.

> `PROPOSED_ET` nav automātiski OWNER lēmums. Šajā failā `NEW` ir OWNER apstiprinātā vērtība tikai `LABOT` rindām.
> `NELABOT`, `FALSE_POSITIVE` un `NEEDS_SOURCE_REVIEW` production laukus neaiztikt.

## Kopsavilkums

- **LABOT: 18**
- **NELABOT: 2**
- **FALSE_POSITIVE: 1**
- **NEEDS_SOURCE_REVIEW: 4**
- **Kopā: 25**

| Audit ID | Card ID | Field/path | CURRENT | NEW | Severity | Category | OWNER STATUS | OWNER_DECISION / piezīme |
|---|---|---|---|---|---|---|---|---|
| ET-A2-0302 | `a2-aufrufen` | `study.tip.leftBlocks[1].text` | Koos Namen või Nummer tähendab see välja hüüdma; koos zu + Dativ tähendab see sageli üles kutsuma. | Nime või numbri puhul tähendab see „välja hüüdmist“; koos zu + daativiga tähendab see sageli „üles kutsumist“. | HIGH | GRAMMAR | **LABOT** | Auditā bija pareizs virziens, bet OWNER NEW precizēts gramatiski: pēc „tähendab” lietotas lietvārdiski locītas formas. |
| ET-A2-0319 | `a2-bitter` | `study.tip.leftBlocks[1].text` | Kogemuse, tõe või kaotuse kohta tähendab bitter sageli valus, karm või terav. | Kogemuse, tõe või kaotuse kohta tähendab bitter sageli valusat, karmi või teravat. | MEDIUM | GRAMMAR | **LABOT** | Pēc „tähendab” šeit nepieciešams partitīvs: „valusat, karmi või teravat”. |
| ET-A2-0325 | `a2-dabei` | `study.examples[3].lv` | ta aitas ja õppis pealegi palju. |  | CRITICAL | FOREIGN_REMNANT | **FALSE_POSITIVE** | CURRENT un PROPOSED_ET ir identiski; audits pats neuzrāda atšķirīgu labojumu. |
| ET-A2-0326 | `a2-darauf` | `study.examples[5].lv` | veidi pärast seda tuli ta tagasi. | varsti pärast seda tuli ta tagasi. | MEDIUM | NATURALNESS | **LABOT** | „varsti pärast seda” dabiskāk atbilst „neilgi pēc tam”. |
| ET-A2-0327 | `a2-darüber` | `etMain` | selle eest | selle kohta • selle kohal | HIGH | SEMANTICS | **LABOT** | darüber šeit nevar būt tikai „selle eest”; pieņemta nozīmju diferenciācija „par to / virs tā”. |
| ET-A2-0337 | `a2-ehrlich` | `study.examples[4].lv` | ta on tore. |  | HIGH | SEMANTICS | **NEEDS_SOURCE_REVIEW** | CURRENT „ta on tore” atbilst dotajam LV MASTER „viņš ir jauks”, bet auditā piedāvāts „ta on aus” pēc ehrlich. Avota/LV un DE semantika konfliktē. |
| ET-A2-0341 | `a2-einsteigen` | `study.examples[1].lv` | palun, sisenege eest. | palun sisenege eesuksest. | MEDIUM | NATURALNESS | **LABOT** | Dabiskā ET forma vācu iekāpšanas norādei priekšpusē. |
| ET-A2-0348 | `a2-gang` | `study.translation` | koridor • kõnnak • roog | koridor • kõnnak • käik | MEDIUM | SEMANTICS | **LABOT** | Gang ēdienkartes nozīmē ir „käik”, nevis „roog”. |
| ET-A2-0349 | `a2-gang` | `study.examples[3].lv` | menüüs on kolm rooga. | menüüs on kolm käiku. | MEDIUM | SEMANTICS | **LABOT** | Ēdienreižu secības nozīmē nepieciešams „käiku”. |
| ET-A2-0350 | `a2-gang` | `study.examples[4].lv` | esimene roog oli supp. | esimene käik oli supp. | MEDIUM | SEMANTICS | **LABOT** | Ēdienreižu secības nozīmē nepieciešams „käik”. |
| ET-A2-0356 | `a2-indem` | `study.comparison[2].meaning` | et | sellega, et | MEDIUM | SEMANTICS | **LABOT** | indem konstrukcijai „sellega, et” ir precīzāka atbilsme par vienkāršu „et”. |
| ET-A2-0393 | `a2-rasen-study` | `study.examples[2].lv` |  |  | MEDIUM | TRANSLATION | **NEEDS_SOURCE_REVIEW** | CURRENT un PROPOSED_ET ir tukši; nav precīza NEW drošam COPY-ONLY apply. |
| ET-A2-0397 | `a2-schalten` | `study.examples[3].lv` | kas sa saad, palun, 2. kanalile lülitada? | Kas sa saad palun 2. kanalile ümber lülitada? | MEDIUM | GRAMMAR | **LABOT** | Pieņemta dabiskāka schalten/umschalten konstrukcija un teikuma sākuma lielais burts. |
| ET-A2-0401 | `a2-schloss` | `study.examples[1].lv` | neuschwansteini loss on väga tuntud. | Neuschwansteini loss on väga tuntud. | LOW | ORTHOGRAPHY | **LABOT** | Īpašvārds teikuma sākumā jāraksta ar lielo burtu. |
| ET-A2-0402 | `a2-sich-befinden` | `study.examples[4].lv` | ma tunnen end täna hästi. |  | HIGH | SEMANTICS | **NEEDS_SOURCE_REVIEW** | CURRENT atbilst dotajam LV MASTER „es šodien jūtos labi”, bet PROPOSED maina nozīmi uz atrašanās vietu. Nepieciešama avota pārbaude. |
| ET-A2-0407 | `a2-stelle` | `study.comparison[4].meaning` | haav |  | MEDIUM | SEMANTICS | **NELABOT** | CURRENT „haav” atbilst dotajam LV MASTER „brūce”; auditā piedāvātais „koht” maina nozīmi. |
| ET-A2-0422 | `a2-während` | `study.examples[3].lv` | ta räägib telefoniga, sel ajal kui ootab. | ta räägib telefoniga, samal ajal kui ta ootab. | MEDIUM | GRAMMAR | **LABOT** | Piedāvātā forma ir gramatiski pilnīgāka un dabiskāka. |
| ET-A2-0426 | `a2-wiegen` | `study.examples[5].lv` | auto seisab õues. |  | MEDIUM | STUDY | **NEEDS_SOURCE_REVIEW** | CURRENT atbilst LV MASTER „automašīna stāv ārā”, bet PROPOSED rada jaunu piemēru par svaru. Nepieciešama avota pārbaude. |
| ET-A2-0427 | `a2-wiegen` | `study.comparison[4].meaning` | auto / vagun |  | MEDIUM | STUDY | **NELABOT** | CURRENT „auto / vagun” atbilst LV MASTER „automašīna / vagons”; PROPOSED „kaaluma / kaal” ir cita semantika. |
| ET-A2-0437 | `a2-gross` | `study.examples[2].lv` | ta on pikka kasvu. | Ta on pikka kasvu. | LOW | ORTHOGRAPHY | **LABOT** | Pilns teikums jāsāk ar lielo burtu. |
| ET-A2-0439 | `a2-hoch` | `study.examples[2].lv` | üür on kõrge. | Üür on kõrge. | LOW | ORTHOGRAPHY | **LABOT** | Pilns teikums jāsāk ar lielo burtu. |
| ET-A2-0440 | `a2-hoch` | `study.examples[3].lv` | müür on kõrge. | Müür on kõrge. | LOW | ORTHOGRAPHY | **LABOT** | Pilns teikums jāsāk ar lielo burtu. |
| ET-A2-0441 | `a2-hoch` | `study.examples[4].lv` | hinnad on kõrged. | Hinnad on kõrged. | LOW | ORTHOGRAPHY | **LABOT** | Pilns teikums jāsāk ar lielo burtu. |
| ET-A2-0444 | `a2-klein` | `study.examples[3].lv` | mul on väike kott. | Mul on väike kott. | LOW | ORTHOGRAPHY | **LABOT** | Pilns teikums jāsāk ar lielo burtu. |
| ET-A2-0458 | `a2-auch` | `study.examples[1].lv` | ma tulen ka. | Ma tulen ka. | LOW | ORTHOGRAPHY | **LABOT** | Pilns teikums jāsāk ar lielo burtu. |

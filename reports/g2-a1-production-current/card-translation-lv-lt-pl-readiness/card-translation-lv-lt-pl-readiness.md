# G2/A1 kartīšu tulkojums — lv / lt / pl gatavība (divvalodu audits)

- **Ģenerēts:** 2026-09-28T14:35:15.778Z
- **Avotu reģistrs:** `scripts/lib/data/g2-a1-card-translation-bilingual-audit-lv-lt-pl.json`
- **Regresijas dokumentācija (6 DE lemmmas):** PASS
- **Production / OWNER lēmumi mainīti:** nē

## Audita secība
1. Meklē tiešo pāri DE→TARGET primārajā digitālajā vārdnīcā.
2. Ja nav, meklē TARGET→DE primārajā pretējā virziena vārdnīcā.
3. Vēsturiskos / skenuotos papildavotus izmanto tikai tad, ja abi primārie virzieni nedod derīgu pāri.
4. Pārbaudi vārdšķiru un konkrētās kartītes vācu nozīmi; citai nozīmei piederošu ekvivalentu nepieņem.
5. Automātiskos tulkotājus (Glosbe Translate u.c.) neizmanto kā pierādījumu.
6. Saglabā avota nosaukumu, virzienu, atrasto pāri un precīzo šķirkļa vai lapas URL.

## LV — LV_LT_PL_BILINGUAL_AUDIT_SOURCES_AND_REGRESSION_DOCUMENTED

### Primārie avoti
- **Letonika vācu–latviešu vārdnīca** (de→lv): https://www.letonika.lv/groups/default.aspx?g=2&r=10311062
- **Letonika latviešu–vācu vārdnīca** (lv→de): https://www.letonika.lv/groups/default.aspx?g=2&r=10621031

### Papildavoti (tikai ja primārais nedod pāri)
- Stender Lettisches Lexicon (1789) — Internet Archive — https://archive.org/details/stenderlettische00sten
- Forssman u.c. vēsturiskie DE↔LV avoti (skat. pdf-bilingual-dictionary-lv-lt-pl-pilot)

### Regresija (DE pilotlemmas)
| Lemma | Solis | Avots | Pāris | URL |
| --- | --- | --- | --- | --- |
| Haus | 1 | Letonika vācu–latviešu vārdnīca | māja, nams (u.c.) | [link](https://www.letonika.lv/groups/default.aspx?r=10311062&q=Haus&cid=190080) |
| arbeiten | 1 | Letonika vācu–latviešu vārdnīca | strādāt; darboties | [link](https://www.letonika.lv/groups/default.aspx?r=10311062&q=arbeiten&cid=198925) |
| Kleingeld | 1 | Letonika vācu–latviešu vārdnīca | sīknauda | [link](https://www.letonika.lv/groups/default.aspx?r=10311062&q=Kleingeld&cid=175950) |
| bewirten | 1 | Letonika vācu–latviešu vārdnīca | cienāt, mielot; pacienāt, pamielot | [link](https://www.letonika.lv/groups/default.aspx?g=2&r=10311062&q=bewirten) |
| Grenzkonflikt | 2 | Letonika vācu–latviešu vārdnīca | NOT_FOUND | [link](https://www.letonika.lv/groups/default.aspx?g=2&r=10311062&q=Grenzkonflikt) |
| Machtgier | 2 | Letonika vācu–latviešu vārdnīca | NOT_FOUND | [link](https://www.letonika.lv/groups/default.aspx?g=2&r=10311062&q=Machtgier) |

### 32 valodu snapshots: cardTranslationReady=false, collector=`manifest-lv`, blockers=TARGET_OFFICIAL_VALIDATION_INCOMPLETE, NSR_DOES_NOT_SATISFY_READINESS

## LT — LV_LT_PL_BILINGUAL_AUDIT_SOURCES_AND_REGRESSION_DOCUMENTED

### Primārie avoti
- **eKalba Vokiečių–lietuvių kalbų žodynas** (de→lt): https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/
- **eKalba Lietuvių–vokiečių kalbų žodynas** (lt→de): https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/

### Papildavoti (tikai ja primārais nedod pāri)
- Lietuvių rašomosios kalbos žodynas, 1. sējums (A–K, 1932) — https://archive.org/details/zodynas-t.-1-1932
- Lietuvių rašomosios kalbos žodynas, 2. sējums (L–Pa, 1951) — https://archive.org/details/zodynas-t.-2-1951
- Lietuvių rašomosios kalbos žodynas, 3. sējums (Pe–Sk, 1957) — https://archive.org/details/zodynas-t.-3-1957
- Lietuvių rašomosios kalbos žodynas, 4. sējums (Sl–Tev, 1963) — https://archive.org/details/zodynas-t.-4-1963
- Lietuvių rašomosios kalbos žodynas, 5. sējums (Tėv–Ž, 1968) — https://archive.org/details/zodynas-t.-5-1968

### Regresija (DE pilotlemmas)
| Lemma | Solis | Avots | Pāris | URL |
| --- | --- | --- | --- | --- |
| Haus | 1 | eKalba Vokiečių–lietuvių kalbų žodynas | namas | [link](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/Haus?i=32b14ac4-c7e6-4aca-b722-bde8f8168bad) |
| arbeiten | 1 | eKalba Vokiečių–lietuvių kalbų žodynas | dirbti | [link](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/arbeiten?i=2aeb2719-576a-4819-83ec-4fa822c20c2d) |
| Kleingeld | 1 | eKalba Vokiečių–lietuvių kalbų žodynas | smulkūs pinigai | [link](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/Kleingeld?paieska=Kleingeld&i=f8697769-4fb6-471a-96ca-b0b2e63d899d) |
| bewirten | 1 | eKalba Vokiečių–lietuvių kalbų žodynas | vaišinti svečią | [link](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/bewirten?paieska=bewirten&i=1501ec18-60c5-43d9-9faf-e23d0840edd0) |
| Grenzkonflikt | 1 | eKalba Vokiečių–lietuvių kalbų žodynas | NOT_FOUND | [link](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/?paieska=Grenzkonflikt) |
| Machtgier | 1 | eKalba Vokiečių–lietuvių kalbų žodynas | NOT_FOUND | [link](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/?paieska=Machtgier) |

### 32 valodu snapshots: cardTranslationReady=false, collector=`vokieciu-lietuviu-public`, blockers=BILINGUAL_COLLECTOR_NOT_PROVEN, TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

## PL — LV_LT_PL_BILINGUAL_AUDIT_SOURCES_AND_REGRESSION_DOCUMENTED

### Primārie avoti
- **PONS vācu–poļu vārdnīca** (de→pl): https://de.pons.com/%C3%BCbersetzung/deutsch-polnisch/
- **PONS poļu–vācu vārdnīca** (pl→de): https://de.pons.com/%C3%BCbersetzung/polnisch-deutsch/

### Papildavoti (tikai ja primārais nedod pāri)
- Haessel / JBC sējumi — Internet Archive
- WBC Poznań — Trojański DE↔PL (1844–1847) — https://www.wbc.poznan.pl/dlibra/publication/150136

### Regresija (DE pilotlemmas)
| Lemma | Solis | Avots | Pāris | URL |
| --- | --- | --- | --- | --- |
| Haus | 1 | PONS vācu–poļu vārdnīca | dom m | [link](https://de.pons.com/%C3%BCbersetzung/deutsch-polnisch/Haus) |
| arbeiten | 1 | PONS vācu–poļu vārdnīca | pracować | [link](https://de.pons.com/%C3%BCbersetzung/deutsch-polnisch/arbeiten) |
| Kleingeld | 1 | PONS vācu–poļu vārdnīca | drobne Pl | [link](https://de.pons.com/%C3%BCbersetzung/deutsch-polnisch/Kleingeld) |
| bewirten | 1 | PONS vācu–poļu vārdnīca | ugaszczać / ugościć; podejmować poczęstunkiem | [link](https://de.pons.com/%C3%BCbersetzung/deutsch-polnisch/bewirten) |
| Grenzkonflikt | 1 | PONS vācu–poļu vārdnīca | konflikt m graniczny | [link](https://de.pons.com/%C3%BCbersetzung/deutsch-polnisch/Grenzkonflikt) |
| Machtgier | 1 | PONS vācu–poļu vārdnīca | no dedicated headword; nearby Machthunger / Machthaber | [link](https://de.pons.com/%C3%BCbersetzung/deutsch-polnisch?q=Machtgier) |

### 32 valodu snapshots: cardTranslationReady=false, collector=`manifest-pl`, blockers=TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL


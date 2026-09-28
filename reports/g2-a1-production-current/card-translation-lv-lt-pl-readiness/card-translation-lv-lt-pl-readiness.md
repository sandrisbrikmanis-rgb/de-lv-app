# G2/A1 kartīšu tulkojums — lv / lt / pl gatavība (divvalodu audits)

- **Ģenerēts:** 2026-09-28T15:44:02.085Z
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

### 32 valodu live verifikācija: cardTranslationReady=true, Haus verdict=TRANSLATION_VALIDATED, collector=`letonika-de-lv-2001-plus`

#### Live audits (6 DE lemmas, production CURRENT)
| Lemma | Strategy | Platform | Verdict | Bilingual URL |
| --- | --- | --- | --- | --- |
| Haus | DE_TO_TARGET_PRIMARY | letonika | TRANSLATION_VALIDATED | [link](https://www.letonika.lv/groups/default.aspx?cid=190080&r=10311062&lid=190080&g=2&q=Haus&h=1738) |
| arbeiten | DE_TO_TARGET_PRIMARY_THEN_TARGET_TO_DE | letonika | NO_ELIGIBLE_DICTIONARY_CANDIDATE | [link](https://www.letonika.lv/groups/default.aspx?cid=575106&r=10621031&lid=575106&g=2&q=str%C4%81d%C4%81t&h=3586) |
| Kleingeld | TARGET_TO_DE_PRIMARY | letonika | TRANSLATION_VALIDATED | [link](https://www.letonika.lv/groups/default.aspx?cid=570215&r=10621031&lid=570215&g=2&q=s%C4%ABknauda&h=3366) |
| bewirten | DE_TO_TARGET_PRIMARY_THEN_TARGET_TO_DE | letonika | NO_ELIGIBLE_DICTIONARY_CANDIDATE | [link](https://www.letonika.lv/groups/default.aspx?cid=595020&r=10621031&lid=595020&g=2&q=pacien%C4%81t&h=2266) |
| Grenzkonflikt | DE_TO_TARGET_PRIMARY_THEN_TARGET_TO_DE | letonika | NO_ELIGIBLE_DICTIONARY_CANDIDATE | [link](https://www.letonika.lv/groups/default.aspx?g=2&r=10621031&q=robe%C5%BEkonflikts) |
| Machtgier | DE_TO_TARGET_PRIMARY_THEN_TARGET_TO_DE | letonika | NEEDS_SOURCE_REVIEW | [link](https://www.letonika.lv/groups/default.aspx?cid=990672&r=10621031&lid=990672&g=2&q=varask%C4%81re&h=4752) |

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

### 32 valodu live verifikācija: cardTranslationReady=false, Haus verdict=TARGET_OFFICIAL_NOT_VALIDATED, collector=`ekalba-de-lt`
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

#### Live audits (6 DE lemmas, production CURRENT)
| Lemma | Strategy | Platform | Verdict | Bilingual URL |
| --- | --- | --- | --- | --- |
| Haus | DE_TO_TARGET_PRIMARY | ekalba | TARGET_OFFICIAL_NOT_VALIDATED | [link](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/Haus?paieska=Haus&i=32b14ac4-c7e6-4aca-b722-bde8f8168bad) |
| arbeiten | DE_TO_TARGET_PRIMARY | ekalba | TARGET_OFFICIAL_NOT_VALIDATED | [link](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/arbeiten?paieska=arbeiten&i=2aeb2719-576a-4819-83ec-4fa822c20c2d) |
| Kleingeld | DE_TO_TARGET_PRIMARY | ekalba | TARGET_OFFICIAL_NOT_VALIDATED | [link](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/Kleingeld?paieska=Kleingeld&i=f8697769-4fb6-471a-96ca-b0b2e63d899d) |
| bewirten | DE_TO_TARGET_PRIMARY | ekalba | TARGET_OFFICIAL_NOT_VALIDATED | [link](https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/bewirten?paieska=bewirten&i=1501ec18-60c5-43d9-9faf-e23d0840edd0) |
| Grenzkonflikt | DE_TO_TARGET_PRIMARY_THEN_TARGET_TO_DE | ekalba | NO_ELIGIBLE_DICTIONARY_CANDIDATE | [link](https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/pasienio%20konfliktas?paieska=pasienio%20konfliktas) |
| Machtgier | DE_TO_TARGET_PRIMARY_THEN_TARGET_TO_DE | ekalba | NO_ELIGIBLE_DICTIONARY_CANDIDATE | [link](https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/vald%C5%BEios%20geidulys?paieska=vald%C5%BEios%20geidulys) |

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

### 32 valodu live verifikācija: cardTranslationReady=false, Haus verdict=TARGET_OFFICIAL_NOT_VALIDATED, collector=`pons-de-pl`
- Blockers: TARGET_OFFICIAL_VALIDATION_INCOMPLETE, PRODUCTION_HAUS_POSITIVE_REGRESSION_FAIL

#### Live audits (6 DE lemmas, production CURRENT)
| Lemma | Strategy | Platform | Verdict | Bilingual URL |
| --- | --- | --- | --- | --- |
| Haus | DE_TO_TARGET_PRIMARY | pons | TARGET_OFFICIAL_NOT_VALIDATED | [link](https://de.pons.com/%C3%BCbersetzung/deutsch-polnisch/Haus) |
| arbeiten | TARGET_TO_DE_PRIMARY | pons | TARGET_OFFICIAL_NOT_VALIDATED | [link](https://de.pons.com/%C3%BCbersetzung/polnisch-deutsch/pracowa%C4%87?q=Pracowa%C4%87) |
| Kleingeld | DE_TO_TARGET_PRIMARY_THEN_TARGET_TO_DE | pons | NO_ELIGIBLE_DICTIONARY_CANDIDATE | [link](https://de.pons.com/%C3%BCbersetzung/polnisch-deutsch/podr%C4%99czna+got%C3%B3wka?q=Podr%C4%99czna+got%C3%B3wka) |
| bewirten | DE_TO_TARGET_PRIMARY_THEN_TARGET_TO_DE | pons | NO_ELIGIBLE_DICTIONARY_CANDIDATE | [link](https://de.pons.com/%C3%BCbersetzung/polnisch-deutsch/tolerowa%C4%87?q=Tolerowa%C4%87) |
| Grenzkonflikt | TARGET_TO_DE_PRIMARY | pons | TARGET_OFFICIAL_NOT_VALIDATED | [link](https://de.pons.com/%C3%BCbersetzung/polnisch-deutsch/konflikt+graniczny?q=Konflikt+graniczny) |
| Machtgier | DE_TO_TARGET_PRIMARY_THEN_TARGET_TO_DE | pons | NO_ELIGIBLE_DICTIONARY_CANDIDATE | [link](https://de.pons.com/%C3%BCbersetzung/polnisch-deutsch/%C5%BC%C4%85dza+w%C5%82adzy?q=%C5%BB%C4%85dza+w%C5%82adzy) |


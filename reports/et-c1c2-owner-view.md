# ET–DE C1/C2 — OWNER VIEW
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `d1ea2b05bde9d5a7d2854c8b83e634a48179185c`
**WORK_BRANCH:** `cursor/et-de-c1c2-teikumi-full-audit-4a7c`
**Audit PR:** [#622](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/622)
**SCOPE:** ET–DE C1/C2 (`data/et/c1.js`, `data/et/c2.js`)
**Findings:** **131** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)
> OBJECT_COVERAGE = 791/791 (100%). DISCOVERY_COMPLETENESS = NOT_GUARANTEED.
> 791/791 does NOT mean all possible defects were found.
> **Monolīts fails:** pilns VIEW saturs ir šajā failā. Grupu faili ir tikai navigācijas palīdzība (§7.23).
> **DE = STRICT READ-ONLY.** Production: `data/et/c1.js`, `data/et/c2.js` + `www/data/et/` mirror.
## GitHub atvēršana
| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-c1c2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-review-GITHUB.md) |
| OWNER README | [et-c1c2-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-review-README.md) |
| OWNER DECISIONS (indekss) | [et-c1c2-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-decisions.md) |
| Pilns audits | [et-c1c2-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-full-audit.md) |
## Grupas (pa 50 findingiem) — **sākt šeit**
| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–50 | 50 | [et-c1c2-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-view-group01.md) | [et-c1c2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-decisions-group01.md) |
| 51–100 | 50 | [et-c1c2-owner-view-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-view-group02.md) | [et-c1c2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-decisions-group02.md) |
| 101–131 | 31 | [et-c1c2-owner-view-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-view-group03.md) | [et-c1c2-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-decisions-group03.md) |
## Īsais saraksts (visi findingi)
- **ET-C1C2-0001** `STRUCT-c1` · `study.count` · CRITICAL · C1: Study count mismatch LV=15 ET=16
- **ET-C1C2-0002** `STRUCT-c2` · `study.count` · CRITICAL · C2: Study count mismatch LV=1 ET=3
- **ET-C1C2-0003** `c1-gelegentlich` · `entry[340].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-C1C2-0004** `c1-gelegentlich` · `entry[340].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-C1C2-0005** `c1-gelegentlich` · `entry[340].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-C1C2-0006** `c1-gelegentlich` · `entry[340].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-C1C2-0007** `c1-wahlberechtigt` · `entry[543].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-C1C2-0008** `c1-wahlberechtigt` · `entry[543].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-C1C2-0009** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0010** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0011** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0012** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0013** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0014** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0015** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0017** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0019** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0020** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0021** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0024** `c1-wettbewerb` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0039** `c1-voraussetzen` · `study.sectionAccents (explanation)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0040** `c1-aufrechterhalten` · `study.sectionAccents (explanation)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0041** `c1-aufrechterhalten` · `study.sectionAccents (explanation)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0042** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0043** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0044** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0046** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0047** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0048** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0049** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0051** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0061** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0062** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0065** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0068** `c2-inwiefern` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0070** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0071** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0072** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0073** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0074** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0075** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0076** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0077** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0082** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0083** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0084** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0085** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0086** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0090** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0091** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0093** `c2-inwieweit` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-C1C2-0097** `c1-Kinderschänder-30` · `etText` · MEDIUM · Tähendus on liiga lai: Kinderschänder viitab lapse seksuaalsele väärkohtlejale, …
- **ET-C1C2-0098** `c1-Kindesmisshandlung-31` · `etText` · MEDIUM · Saksa mõiste hõlmab laste väärkohtlemist laiemalt; praegune vaste tähistab kitsa…
- **ET-C1C2-0099** `c1-Bergwanderung-41` · `etText` · HIGH · Mägiturism tähendab mägiturismi, kuid Bergwanderung on matk või jalgsiretk mäged…
- **ET-C1C2-0100** `c1-Beschäftigung-44` · `etText` · MEDIUM · Tegevusala tähendab tegevusvaldkonda, mitte üldiselt tegevust, hõivatust või ame…
- **ET-C1C2-0101** `c1-geschäftlich-71` · `etText` · MEDIUM · „Äri-“ on liitekujuline fragment, mitte iseseisev eestikeelne vaste omadussõnale…
- **ET-C1C2-0102** `c1-Gewichtheben-78` · `etText` · MEDIUM · „Tõstmine“ on liiga üldine; „Gewichtheben“ tähendab konkreetset spordiala ehk tõ…
- **ET-C1C2-0103** `c1-Hochzeitsreise-86` · `etText` · MEDIUM · „Mesinädalate reis“ on arusaadav, kuid „Hochzeitsreise“ loomulik ja täpne vaste …
- **ET-C1C2-0104** `c1-Kabelanschluss-92` · `etText` · MEDIUM · „Kaabellevi liitumine“ tähistab pigem liitumisprotsessi; „Kabelanschluss“ on kaa…
- **ET-C1C2-0105** `c1-Kostenanschlag-99` · `etText` · MEDIUM · „Kuluprognoos“ tähendab kulude prognoosi; „Kostenanschlag“ on kulude kalkulatsio…
- **ET-C1C2-0106** `c1-Rennen mit Hindernissen-131` · `etText` · MEDIUM · Tõkkejooks tähendab konkreetselt tõkkejooksu; saksa väljend on üldisem takistusj…
- **ET-C1C2-0107** `c1-Schlussverkauf-138` · `etText` · MEDIUM · Saksa sõna tähendab üldist lõpumüüki või tühjendusmüüki, mitte tingimata hooaja …
- **ET-C1C2-0108** `c1-Strampelhöschen-153` · `etText` · HIGH · Roomik tähendab roomavat looma või roomikuosa, mitte imikurõivast; saksa sõna tä…
- **ET-C1C2-0109** `c1-Terminkalender-157` · `etText` · MEDIUM · Terminkalender tähendab eeskätt kohtumiste või kokkulepitud aegade kalendrit; tä…
- **ET-C1C2-0110** `c1-verantworten-168` · `etText` · MEDIUM · Vastutust võtma tähendab vastutuse enda peale võtma; verantworten tähendab mille…
- **ET-C1C2-0111** `c1-Verlegenheit-173` · `etText` · HIGH · Verlegenheit tähendab piinlikkust või ebamugavat olukorda; hämmeldus tähendab se…
- **ET-C1C2-0112** `c1-Basisforschung-206` · `etText` · HIGH · Basisforschung tähendab alusuuringut ehk fundamentaalset teadustööd; põhiuuring …
- **ET-C1C2-0113** `c1-Befangenheit-211` · `etText` · HIGH · Befangenheit tähendab erapoolikust või kallutatust, mitte kimbatust ega segadust…
- **ET-C1C2-0114** `c1-benachteiligen-220` · `etText` · MEDIUM · Sõna tähendab kellegi ebasoodsasse olukorda seadmist, mitte üldiselt kahjustamis…
- **ET-C1C2-0115** `c1-bereitwillig-224` · `etText` · HIGH · Bereitwillig tähendab valmisolekut ja vastutulelikkust; teenistusvalmis tähendab…
- **ET-C1C2-0116** `c1-Betriebskosten-236` · `etText` · MEDIUM · Betriebskosten on tegevus- või käituskulud; tootmiskulud tähistavad kitsamalt to…
- **ET-C1C2-0117** `c1-Beweismaterial-241` · `etText` · MEDIUM · Beweismaterial tähendab tõendusmaterjali üldiselt; materiaalsed tõendid tähendab…
- **ET-C1C2-0118** `c1-bewerben, sich-242` · `etText` · HIGH · Sich bewerben tähendab kandideerima või avaldust esitama; püüdlema tähendab üldi…
- **ET-C1C2-0119** `c1-Computersprache-251` · `etText` · MEDIUM · Computersprache on arvutikeel üldiselt; programmeerimiskeel on selle kitsam tähe…
- **ET-C1C2-0120** `c1-Dachgepäckträger-252` · `etText` · LOW · Eesti keeles kirjutatakse see liitsõnana kokku: katusepagasiraam.
- **ET-C1C2-0121** `c1-Dienstleistung-266` · `etText` · MEDIUM · Olmeteenus tähendab kodumajapidamisteenust, kuid saksa sõna on üldine „teenus“ v…
- **ET-C1C2-0122** `c1-dienstpflichtig-267` · `etText` · MEDIUM · Praegune vaste on isikunimisõna, saksa sõna on omadussõna tähenduses „sõjaväetee…
- **ET-C1C2-0123** `c1-sich einschmeicheln-284` · `etText` · MEDIUM · Praegune tõlge on arusaadav, kuid „end sisse pugema“ on eesti keeles loomulikum …
- **ET-C1C2-0124** `c1-Entziehungskur-303` · `etText` · LOW · „Ravikuur“ moodustab eesti keeles liitsõna; praegune lahkukirjutus on ebaloomuli…
- **ET-C1C2-0125** `c1-Feuerwerkskörper-312` · `etText` · MEDIUM · Praegune vaste tähendab konkreetsemalt ilutulestikuraketti, kuid saksa sõna on ü…
- **ET-C1C2-0126** `c1-Fortbildungskurse-315` · `etText` · LOW · „Täienduskoolituskursused” on tarbetult korduv ja ebaloomulik; saksa mõiste loom…
- **ET-C1C2-0127** `c1-fortgeschritten-316` · `etText` · MEDIUM · Praegune fraas on kitsas ja kohmakas kontekstivaste; sõnavarakaardil on loomulik…
- **ET-C1C2-0128** `c1-Gebrauchtwaren-325` · `etText` · LOW · „Waren” tähendab kaupu, mitte üldiselt asju; „kasutatud kaubad” vastab saksa sõn…
- **ET-C1C2-0129** `c1-Geburtenrate-326` · `etText` · LOW · „Sündimuse tase” on arusaadav, kuid eesti keeles on selle demograafilise näitaja…
- **ET-C1C2-0130** `c1-geistesschwach-337` · `etText` · MEDIUM · „Vaimupuudega” tähendab vaimupuudega inimest, mitte omadust „vaimselt nõrk”; pra…
- **ET-C1C2-0131** `c1-Gemeineigentum-343` · `etText` · MEDIUM · „Gemeineigentum” tähendab ühisomandit; „ühiskondlik omand” viitab pigem avalikul…
- **ET-C1C2-0132** `c1-Geschäftshaus-358` · `etText` · HIGH · Kaubamaja tähendab department store’i; Geschäftshaus tähendab äri- või ärikasutu…
- **ET-C1C2-0133** `c1-gesetzlos-363` · `etText` · MEDIUM · Seadusevastane tähendab pigem gesetzwidrig; gesetzlos tähendab seadusetut või se…
- **ET-C1C2-0134** `c1-Gewissensbisse-368` · `etText` · MEDIUM · Südametunnistuse piinad on arusaadav, kuid loomulik ja tavapärane vaste on süüme…
- **ET-C1C2-0135** `c1-gewissermaßen-369` · `etText` · MEDIUM · Omal moel tähendab 'in one's own way', mitte 'gewissermaßen'; sobiv vaste on tea…
- **ET-C1C2-0136** `c1-Hausdurchsuchung-384` · `etText` · HIGH · Praegune kokku kirjutatud vorm on ortograafiliselt vigane; politsei ja läbiotsim…
- **ET-C1C2-0137** `c1-sich hinreißen lassen-392` · `etText` · MEDIUM · Eestikeelne väljend on loomulikus sõnajärjes 'laskma end kaasa haarata'.
- **ET-C1C2-0138** `c1-Industrieabwässer-394` · `etText` · MEDIUM · Reovesi on eesti keeles tavaliselt loendamatu ainsus; mitmus 'reoveed' on siin e…
- **ET-C1C2-0139** `c1-Justiz-401` · `etText` · MEDIUM · Justiits on kõnekeelne ja tähenduselt ebatäpne; siin sobib justiitssüsteem või õ…
- **ET-C1C2-0140** `c1-Kaution-404` · `etText` · MEDIUM · Garantii tähendab guarantee ega ole Kautioni vaste; Kaution on tagatis või kauts…
- **ET-C1C2-0141** `c1-militärpflichtig-429` · `etText` · HIGH · Praegune sõna on nimisõna isiku kohta, kuid saksa lähteüksus on omadussõna „sõja…
- **ET-C1C2-0142** `c1-Parteifunktionär-440` · `etText` · MEDIUM · „Parteitöötaja“ tähendab üldiselt partei töötajat ega väljenda funktsionääri ehk…
- **ET-C1C2-0143** `c1-Produktionskosten-446` · `etText` · MEDIUM · „Omahind“ tähendab omahinda või kulupõhist hinda, kuid Produktionskosten tähenda…
- **ET-C1C2-0144** `c1-rechtswidrig-452` · `etText` · MEDIUM · Saksa lähteüksus on omadussõna, kuid „ebaseaduslikult“ on määrsõna; omadussõna o…
- **ET-C1C2-0145** `c1-sanktionieren-461` · `etText` · HIGH · Toetama tähendab „unterstützen“ ja ei vasta saksa verbile „sanktionieren“.
- **ET-C1C2-0146** `c1-Sinnestäuschung-474` · `etText` · HIGH · Sinnestäuschung on üldmõiste meelepette või illusiooni kohta, mitte ainult hallu…
- **ET-C1C2-0147** `c1-synchronisieren-486` · `etText` · HIGH · „Filmi dubleerima“ tähendab filmi dubleerimist, mitte sünkroniseerimist.
- **ET-C1C2-0148** `c1-Transfusion-488` · `etText` · MEDIUM · Saksa „Transfusion“ on üldiselt vereülekanne; „otsene inimeselt inimesele“ lisab…
- **ET-C1C2-0149** `c1-urteilen-499` · `etText` · MEDIUM · „Arutlema“ tähendab arutamist; see ei vasta „urteilen“ tähendusele „hinnangut an…
- **ET-C1C2-0150** `c1-sich vervollkommnen-534` · `etText` · MEDIUM · Saksa refleksiivne verb tähendab enda täiustamist; praegune tõlge kitsendab tähe…
- **ET-C1C2-0151** `c1-Volksbefragung-537` · `etText` · MEDIUM · Volksbefragung on rahva küsitlus või konsultatsioon, mitte täpselt referendum; r…
- **ET-C1C2-0152** `c2-konterkarieren-1` · `etText` · HIGH · „Nurjama” tähendab midagi ära rikkuma või vussi ajama, mitte vastutoimimist või …
- **ET-C1C2-0153** `c2-Teilnehmerausweis-12` · `etText` · MEDIUM · „Ausweis” on kaart või tõend isikuõiguse kohta, „tunnistus” tähendab eeskätt ser…
- **ET-C1C2-0154** `c2-Behandlungsraum-16` · `etText` · MEDIUM · „Behandlungsraum” tähendab üldiselt raviruumi; „arsti kabinet” kitsendab tähendu…
- **ET-C1C2-0155** `c2-Krankheitsüberträger-49` · `etText` · MEDIUM · „Levitaja” tähendab haiguse levitajat, kuid Überträger on täpsemalt haiguse edas…
- **ET-C1C2-0156** `c2-Straßenunterführung-67` · `etText` · HIGH · Saksa sõna tähendab teealust läbipääsu, mitte jalakäijate tunnelit; praegune tõl…
- **ET-C1C2-0157** `c2-durchkreuzen-103` · `etText` · MEDIUM · Ristuma tähendab ‘ristuma’ või ‘lõikuma’, mitte tegevust ‘ületama’ või ‘risti mi…
- **ET-C1C2-0158** `c2-Durchschnittsleistung-106` · `etText` · MEDIUM · Leistung tähendab siin sooritust või jõudlust, mitte otseselt tulemust.
- **ET-C1C2-0159** `c2-Errungenschaft-117` · `etText` · LOW · Võit tähendab eeskätt ‘Sieg’ ehk võitu, mitte saavutust või saavutist.
- **ET-C1C2-0160** `c2-Gedächtnisschwäche-126` · `etText` · MEDIUM · Halb mälu tähendab ‘halb mälu’; Gedächtnisschwäche täpsem vaste on mälunõrkus.
- **ET-C1C2-0161** `c2-Geistesgegenwart-131` · `etText` · HIGH · Geistesgegenwart tähendab vaimu kohalolu asemel taibukust või kiiret reageerimis…
- **ET-C1C2-0162** `c2-Dorfgemeinschaft-136` · `etText` · MEDIUM · Külaelanikkond tähendab küla elanikkonda, Dorfgemeinschaft aga küla kogukonda.
- **ET-C1C2-0163** `c2-Gewinnauszahlung-156` · `etText` · HIGH · Estonian narrows the meaning to a lottery payout, while Gewinn can mean profit o…
- **ET-C1C2-0164** `c2-Hausgemeinschaft-161` · `etText` · MEDIUM · Hausgemeinschaft refers to people living in the same house; pereliikmed means fa…
- **ET-C1C2-0165** `c2-Lebenserhaltungstrieb-170` · `etText` · HIGH · Elutahe means will to live, whereas Trieb denotes an instinct or drive for self-…
- **ET-C1C2-0166** `c2-Meisterschaftsspiel-177` · `etText` · HIGH · The German denotes a single championship match, while meistrivõistlused denotes …
- **ET-C1C2-0167** `c2-Preisausschreiben-187` · `etText` · MEDIUM · Võistlus is too general and omits the defining element that prizes are awarded.
- **ET-C1C2-0168** `c2-zugrunde, zu Grunde-206` · `etText` · MEDIUM · „Põhiliselt” tähendab „peamiselt”, mitte „aluseks” või „millegi aluseks olevana”…
- **ET-C1C2-0169** `c1-gelegentlich` · `study.translation` · MEDIUM · „Seoses” tähendab „in Verbindung mit” ega ole tänapäeva eesti keeles „gelegentli…
- **ET-C1C2-0170** `c1-gelegentlich` · `study.comparison[2].meaning` · MEDIUM · „Seoses” ei vasta sõna „gelegentlich” põhitähendusele „aeg-ajalt; mõnikord”.
- **ET-C1C2-0171** `c1-beziehen-sich-beziehen-auf` · `study.translation` · HIGH · „Beziehen” võib tähendada pensioni saamist; „sich beziehen auf” tähendab millele…
- **ET-C1C2-0172** `c1-voraussetzen` · `study.examples[1].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-C1C2-0173** `c1-bewahren` · `study.examples[2].lv` · LOW · Lause alguses peab olema suur algustäht.
- **ET-C1C2-0174** `c1-aufrechterhalten` · `study.examples[0].lv` · MEDIUM · Eesti keeles hoitakse korda alal; „kehtivana hoidma” ei sobi siin loomuliku koll…
- **ET-C1C2-0175** `c1-aufrechterhalten` · `study.examples[1].lv` · MEDIUM · Tegevust ei hoita tavaliselt „kehtivana”; selle puhul on loomulikum „alal hoidma…
- **ET-C1C2-0176** `c1-aufrechterhalten` · `study.examples[2].lv` · MEDIUM · Lisaks algustähele on „korda kehtivana hoidma” ebaloomulik; õige kollokatsioon o…
## Pilns findingu pārskats (visi findingi)
## ET-C1C2-0001
**Audit ID:** ET-C1C2-0001
**Card ID:** `STRUCT-c1`
**Field/path:** `study.count`
**Production file:** `data/et/c1.js`
**Severity:** CRITICAL
**Category:** STRUCTURE
**DE (read-only):** —
**CURRENT:** 16
**PROPOSED_ET (audit ieteikums):** 15
**Problēma:** C1: Study count mismatch LV=15 ET=16
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0002
**Audit ID:** ET-C1C2-0002
**Card ID:** `STRUCT-c2`
**Field/path:** `study.count`
**Production file:** `data/et/c1.js`
**Severity:** CRITICAL
**Category:** STRUCTURE
**DE (read-only):** —
**CURRENT:** 3
**PROPOSED_ET (audit ieteikums):** 1
**Problēma:** C2: Study count mismatch LV=1 ET=3
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0003
**Audit ID:** ET-C1C2-0003
**Card ID:** `c1-gelegentlich`
**Field/path:** `entry[340].study.comparison[0].example`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er kommt gelegentlich. = Viņš reizēm atnāk.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0004
**Audit ID:** ET-C1C2-0004
**Card ID:** `c1-gelegentlich`
**Field/path:** `entry[340].study.comparison[1].example`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** ein gelegentlicher Besuch = gadījuma apmeklējums
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0005
**Audit ID:** ET-C1C2-0005
**Card ID:** `c1-gelegentlich`
**Field/path:** `entry[340].study.comparison[2].example`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** gelegentlich des Festes = svētku sakarā
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0006
**Audit ID:** ET-C1C2-0006
**Card ID:** `c1-gelegentlich`
**Field/path:** `entry[340].study.comparison[3].example`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Manchmal regnet es. = Reizēm līst.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0007
**Audit ID:** ET-C1C2-0007
**Card ID:** `c1-wahlberechtigt`
**Field/path:** `entry[543].study.comparison[0].example`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist wahlberechtigt. = Viņam ir vēlēšanu tiesības.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0008
**Audit ID:** ET-C1C2-0008
**Card ID:** `c1-wahlberechtigt`
**Field/path:** `entry[543].study.comparison[2].example`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Wähler geht zur Wahl. = Vēlētājs iet uz vēlēšanām.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0009
**Audit ID:** ET-C1C2-0009
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0010
**Audit ID:** ET-C1C2-0010
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0011
**Audit ID:** ET-C1C2-0011
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0012
**Audit ID:** ET-C1C2-0012
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0013
**Audit ID:** ET-C1C2-0013
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0014
**Audit ID:** ET-C1C2-0014
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0015
**Audit ID:** ET-C1C2-0015
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0017
**Audit ID:** ET-C1C2-0017
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0019
**Audit ID:** ET-C1C2-0019
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0020
**Audit ID:** ET-C1C2-0020
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0021
**Audit ID:** ET-C1C2-0021
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0024
**Audit ID:** ET-C1C2-0024
**Card ID:** `c1-wettbewerb`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"der Wettbewerb","purple":"konkurss","green":"konkurents","yellow":"võistlus"},"examples":[{"de":{"blue":"Wettbewerb"},"lv":{"yellow":"võistlusel"}},{"de":{"blue":"Wettbewerb"},"lv":{"green":"konkurentsis"}},{"de":{"blue":"Wettbewerb","yellow":"Stelle"},"lv":{"purple":"konkursi"}}],"comparison":[{"word":{"blue":"der Wettbewerb"},"meaning":{"purple":"konkurss"},"example":{"blue":"Wettbewerb"}},{"word":{"blue":"der Wettbewerb"},"meaning":{"green":"konkurents"},"example":{"bl…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0039
**Audit ID:** ET-C1C2-0039
**Card ID:** `c1-voraussetzen`
**Field/path:** `study.sectionAccents (explanation)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"green":["voraussetzen","voraus"],"purple":["eeldus"]},"examples":[{"de":{},"lv":{"purple":["eeldame"]}},{"de":{},"lv":{"purple":["eeldame"]}}],"tip":[{"purple":["eeldama"]}],"important":[{"green":["voraussetzen"]}]}
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0040
**Audit ID:** ET-C1C2-0040
**Card ID:** `c1-aufrechterhalten`
**Field/path:** `study.sectionAccents (explanation)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"green":["aufrechterhalten","erhält","auf"],"purple":[],"yellow":[]},"examples":[{"de":{},"lv":{"purple":["kehtivana"]}},{"de":{"green":["aufrechterhalten","aufrechterhalten"]},"lv":{"purple":["kehtivana"]}},{"de":{},"lv":{"purple":["kehtivana"]}}],"tip":[{"purple":["kehtivana hoidma"]}],"important":[{"green":["aufrechterhalten"]}]}
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0041
**Audit ID:** ET-C1C2-0041
**Card ID:** `c1-aufrechterhalten`
**Field/path:** `study.sectionAccents (explanation)`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"green":["aufrechterhalten","erhält","auf"],"purple":[],"yellow":[]},"examples":[{"de":{},"lv":{"purple":["kehtivana"]}},{"de":{"green":["aufrechterhalten","aufrechterhalten"]},"lv":{"purple":["kehtivana"]}},{"de":{},"lv":{"purple":["kehtivana"]}}],"tip":[{"purple":["kehtivana hoidma"]}],"important":[{"green":["aufrechterhalten"]}]}
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0042
**Audit ID:** ET-C1C2-0042
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0043
**Audit ID:** ET-C1C2-0043
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0044
**Audit ID:** ET-C1C2-0044
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0046
**Audit ID:** ET-C1C2-0046
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0047
**Audit ID:** ET-C1C2-0047
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0048
**Audit ID:** ET-C1C2-0048
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0049
**Audit ID:** ET-C1C2-0049
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0051
**Audit ID:** ET-C1C2-0051
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0061
**Audit ID:** ET-C1C2-0061
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0062
**Audit ID:** ET-C1C2-0062
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0065
**Audit ID:** ET-C1C2-0065
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0068
**Audit ID:** ET-C1C2-0068
**Card ID:** `c2-inwiefern`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwiefern","purple":"milles osas","red":"inwieweit","yellow":"kui palju"},"examples":[{"de":{"blue":"Inwiefern"},"lv":{"purple":"milles osas"}},{"de":{"blue":"Inwiefern"},"lv":{"purple":"mil moel"}},{"de":{"red":"Inwieweit"},"lv":{"yellow":"kui palju"}}],"comparison":[{"word":{"blue":"inwiefern"},"meaning":{"purple":"milles osas"},"example":{"blue":"Inwiefern"}},{"word":{"red":"inwieweit"},"meaning":{"yellow":"kuivõrd"},"example":{"red":"Inwieweit"}}],"tip":{"blue":"inwie…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0070
**Audit ID:** ET-C1C2-0070
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0071
**Audit ID:** ET-C1C2-0071
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0072
**Audit ID:** ET-C1C2-0072
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0073
**Audit ID:** ET-C1C2-0073
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0074
**Audit ID:** ET-C1C2-0074
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0075
**Audit ID:** ET-C1C2-0075
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0076
**Audit ID:** ET-C1C2-0076
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0077
**Audit ID:** ET-C1C2-0077
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0082
**Audit ID:** ET-C1C2-0082
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0083
**Audit ID:** ET-C1C2-0083
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0084
**Audit ID:** ET-C1C2-0084
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0085
**Audit ID:** ET-C1C2-0085
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0086
**Audit ID:** ET-C1C2-0086
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0090
**Audit ID:** ET-C1C2-0090
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0091
**Audit ID:** ET-C1C2-0091
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0093
**Audit ID:** ET-C1C2-0093
**Card ID:** `c2-inwieweit`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/c2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** {"explanation":{"blue":"inwieweit","purple":"kui palju","red":"inwiefern","yellow":"milles osas"},"examples":[{"de":{"blue":"Inwieweit"},"lv":{"purple":"kui palju"}},{"de":{"blue":"Inwieweit"},"lv":{"purple":"kuivõrd"}},{"de":{"red":"Inwiefern"},"lv":{"yellow":"milles osas"}}],"comparison":[{"word":{"blue":"inwieweit"},"meaning":{"purple":"kuivõrd"},"example":{"blue":"Inwieweit"}},{"word":{"red":"inwiefern"},"meaning":{"yellow":"milles osas"},"example":{"red":"Inwiefern"}}],"tip":{"blue":"inwiew…
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0097
**Audit ID:** ET-C1C2-0097
**Card ID:** `c1-Kinderschänder-30`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Kinderschänder
**LV MASTER reference:** pedofils
**CURRENT:** lapse väärkohtleja
**PROPOSED_ET (audit ieteikums):** lasteahistaja
**Problēma:** Tähendus on liiga lai: Kinderschänder viitab lapse seksuaalsele väärkohtlejale, mitte üldiselt lapse väärkohtlejale.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0098
**Audit ID:** ET-C1C2-0098
**Card ID:** `c1-Kindesmisshandlung-31`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Kindesmisshandlung
**LV MASTER reference:** vardarbība pret bērniem
**CURRENT:** lastevastane vägivald
**PROPOSED_ET (audit ieteikums):** laste väärkohtlemine
**Problēma:** Saksa mõiste hõlmab laste väärkohtlemist laiemalt; praegune vaste tähistab kitsamalt füüsilist vägivalda.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0099
**Audit ID:** ET-C1C2-0099
**Card ID:** `c1-Bergwanderung-41`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Bergwanderung
**LV MASTER reference:** kalnu tūrisms
**CURRENT:** mägiturism
**PROPOSED_ET (audit ieteikums):** mägimatk
**Problēma:** Mägiturism tähendab mägiturismi, kuid Bergwanderung on matk või jalgsiretk mägedes.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0100
**Audit ID:** ET-C1C2-0100
**Card ID:** `c1-Beschäftigung-44`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Beschäftigung
**LV MASTER reference:** nodarbošanās
**CURRENT:** tegevusala
**PROPOSED_ET (audit ieteikums):** tegevus
**Problēma:** Tegevusala tähendab tegevusvaldkonda, mitte üldiselt tegevust, hõivatust või ametit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0101
**Audit ID:** ET-C1C2-0101
**Card ID:** `c1-geschäftlich-71`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** geschäftlich
**LV MASTER reference:** darījumu
**CURRENT:** äri-
**PROPOSED_ET (audit ieteikums):** äriline
**Problēma:** „Äri-“ on liitekujuline fragment, mitte iseseisev eestikeelne vaste omadussõnale „geschäftlich“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0102
**Audit ID:** ET-C1C2-0102
**Card ID:** `c1-Gewichtheben-78`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gewichtheben
**LV MASTER reference:** svarcelšana
**CURRENT:** tõstmine
**PROPOSED_ET (audit ieteikums):** tõstesport
**Problēma:** „Tõstmine“ on liiga üldine; „Gewichtheben“ tähendab konkreetset spordiala ehk tõstesporti.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0103
**Audit ID:** ET-C1C2-0103
**Card ID:** `c1-Hochzeitsreise-86`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Hochzeitsreise
**LV MASTER reference:** kāzu ceļojums
**CURRENT:** mesinädalate reis
**PROPOSED_ET (audit ieteikums):** pulmareis
**Problēma:** „Mesinädalate reis“ on arusaadav, kuid „Hochzeitsreise“ loomulik ja täpne vaste on „pulmareis“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0104
**Audit ID:** ET-C1C2-0104
**Card ID:** `c1-Kabelanschluss-92`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Kabelanschluss
**LV MASTER reference:** televīzijas kabeļpieslēgums
**CURRENT:** kaabellevi liitumine
**PROPOSED_ET (audit ieteikums):** kaabeltelevisiooni ühendus
**Problēma:** „Kaabellevi liitumine“ tähistab pigem liitumisprotsessi; „Kabelanschluss“ on kaabeltelevisiooni ühendus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0105
**Audit ID:** ET-C1C2-0105
**Card ID:** `c1-Kostenanschlag-99`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Kostenanschlag
**LV MASTER reference:** izdevumu tāme
**CURRENT:** kuluprognoos
**PROPOSED_ET (audit ieteikums):** kulude kalkulatsioon
**Problēma:** „Kuluprognoos“ tähendab kulude prognoosi; „Kostenanschlag“ on kulude kalkulatsioon või hinnang.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0106
**Audit ID:** ET-C1C2-0106
**Card ID:** `c1-Rennen mit Hindernissen-131`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Rennen mit Hindernissen
**LV MASTER reference:** šķēršļu skrējiens
**CURRENT:** tõkkejooks
**PROPOSED_ET (audit ieteikums):** takistusjooks
**Problēma:** Tõkkejooks tähendab konkreetselt tõkkejooksu; saksa väljend on üldisem takistusjooks.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0107
**Audit ID:** ET-C1C2-0107
**Card ID:** `c1-Schlussverkauf-138`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Schlussverkauf
**LV MASTER reference:** preču izpārdošana sezonas beigās par pazeminātām cenām
**CURRENT:** hooajalõpu allahindlus
**PROPOSED_ET (audit ieteikums):** lõppmüük
**Problēma:** Saksa sõna tähendab üldist lõpumüüki või tühjendusmüüki, mitte tingimata hooaja lõpu allahindlust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0108
**Audit ID:** ET-C1C2-0108
**Card ID:** `c1-Strampelhöschen-153`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Strampelhöschen
**LV MASTER reference:** zīdaiņa rāpulītis
**CURRENT:** imiku roomik
**PROPOSED_ET (audit ieteikums):** imiku sipupüksid
**Problēma:** Roomik tähendab roomavat looma või roomikuosa, mitte imikurõivast; saksa sõna tähistab beebi sipupükse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0109
**Audit ID:** ET-C1C2-0109
**Card ID:** `c1-Terminkalender-157`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Terminkalender
**LV MASTER reference:** piezīmju kalendārs
**CURRENT:** tähtajakalender
**PROPOSED_ET (audit ieteikums):** kohtumiste kalender
**Problēma:** Terminkalender tähendab eeskätt kohtumiste või kokkulepitud aegade kalendrit; tähtajakalender viitab tähtaegadele.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0110
**Audit ID:** ET-C1C2-0110
**Card ID:** `c1-verantworten-168`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** verantworten
**LV MASTER reference:** uzņemties atbildību par
**CURRENT:** vastutust võtma
**PROPOSED_ET (audit ieteikums):** vastutama
**Problēma:** Vastutust võtma tähendab vastutuse enda peale võtma; verantworten tähendab millegi eest vastutama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0111
**Audit ID:** ET-C1C2-0111
**Card ID:** `c1-Verlegenheit-173`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Verlegenheit
**LV MASTER reference:** apjukums
**CURRENT:** hämmeldus
**PROPOSED_ET (audit ieteikums):** piinlikkus
**Problēma:** Verlegenheit tähendab piinlikkust või ebamugavat olukorda; hämmeldus tähendab segadust või nõutust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0112
**Audit ID:** ET-C1C2-0112
**Card ID:** `c1-Basisforschung-206`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Basisforschung
**LV MASTER reference:** pamatpētījums
**CURRENT:** põhiuuring
**PROPOSED_ET (audit ieteikums):** alusuuring
**Problēma:** Basisforschung tähendab alusuuringut ehk fundamentaalset teadustööd; põhiuuring tähendab pigem peamist või keskset uuringut.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0113
**Audit ID:** ET-C1C2-0113
**Card ID:** `c1-Befangenheit-211`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Befangenheit
**LV MASTER reference:** samulsums • apmulsums
**CURRENT:** kimbatus • segadus
**PROPOSED_ET (audit ieteikums):** erapoolikus • kallutatus
**Problēma:** Befangenheit tähendab erapoolikust või kallutatust, mitte kimbatust ega segadust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0114
**Audit ID:** ET-C1C2-0114
**Card ID:** `c1-benachteiligen-220`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** benachteiligen
**LV MASTER reference:** kaitēt • nodarīt zaudējumus • nodarīt pāri
**CURRENT:** kahjustama • kahju tekitama
**PROPOSED_ET (audit ieteikums):** ebasoodsasse olukorda seadma • diskrimineerima
**Problēma:** Sõna tähendab kellegi ebasoodsasse olukorda seadmist, mitte üldiselt kahjustamist või kahju tekitamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0115
**Audit ID:** ET-C1C2-0115
**Card ID:** `c1-bereitwillig-224`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** bereitwillig
**LV MASTER reference:** gatavs pakalpot • pakalpīgs
**CURRENT:** abivalmis • teenistusvalmis
**PROPOSED_ET (audit ieteikums):** vastutulelik • meelsasti nõus
**Problēma:** Bereitwillig tähendab valmisolekut ja vastutulelikkust; teenistusvalmis tähendab valmisolekut teenistuseks.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0116
**Audit ID:** ET-C1C2-0116
**Card ID:** `c1-Betriebskosten-236`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Betriebskosten
**LV MASTER reference:** uzņēmuma ekspluatācijas izdevumi • ražošanas izdevumi
**CURRENT:** ettevõtte ekspluatatsioonikulud • tootmiskulud
**PROPOSED_ET (audit ieteikums):** tegevuskulud • käituskulud
**Problēma:** Betriebskosten on tegevus- või käituskulud; tootmiskulud tähistavad kitsamalt tootmise kulusid.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0117
**Audit ID:** ET-C1C2-0117
**Card ID:** `c1-Beweismaterial-241`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Beweismaterial
**LV MASTER reference:** lietiskie pierādījumi
**CURRENT:** materiaalsed tõendid
**PROPOSED_ET (audit ieteikums):** tõendusmaterjal
**Problēma:** Beweismaterial tähendab tõendusmaterjali üldiselt; materiaalsed tõendid tähendab kitsamalt füüsilisi tõendeid.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0118
**Audit ID:** ET-C1C2-0118
**Card ID:** `c1-bewerben, sich-242`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** bewerben, sich
**LV MASTER reference:** pretendēt • kandidēt • censties • tiekties
**CURRENT:** kandideerima • püüdlema
**PROPOSED_ET (audit ieteikums):** kandideerima • avaldust esitama
**Problēma:** Sich bewerben tähendab kandideerima või avaldust esitama; püüdlema tähendab üldiselt millegi poole püüdlemist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0119
**Audit ID:** ET-C1C2-0119
**Card ID:** `c1-Computersprache-251`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Computersprache
**LV MASTER reference:** datorvaloda
**CURRENT:** programmeerimiskeel
**PROPOSED_ET (audit ieteikums):** arvutikeel
**Problēma:** Computersprache on arvutikeel üldiselt; programmeerimiskeel on selle kitsam tähendus ja vastab pigem sõnale Programmiersprache.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0120
**Audit ID:** ET-C1C2-0120
**Card ID:** `c1-Dachgepäckträger-252`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Dachgepäckträger
**LV MASTER reference:** automašīnas jumta bagāžnieks
**CURRENT:** katuse pagasiraam
**PROPOSED_ET (audit ieteikums):** katusepagasiraam
**Problēma:** Eesti keeles kirjutatakse see liitsõnana kokku: katusepagasiraam.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0121
**Audit ID:** ET-C1C2-0121
**Card ID:** `c1-Dienstleistung-266`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Dienstleistung
**LV MASTER reference:** sadzīves pakalpojums
**CURRENT:** olmeteenus
**PROPOSED_ET (audit ieteikums):** teenus
**Problēma:** Olmeteenus tähendab kodumajapidamisteenust, kuid saksa sõna on üldine „teenus“ või „teenuse osutamine“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0122
**Audit ID:** ET-C1C2-0122
**Card ID:** `c1-dienstpflichtig-267`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** dienstpflichtig
**LV MASTER reference:** padots karadienestam
**CURRENT:** sõjaväeteenistuskohuslane
**PROPOSED_ET (audit ieteikums):** sõjaväeteenistuskohustuslik
**Problēma:** Praegune vaste on isikunimisõna, saksa sõna on omadussõna tähenduses „sõjaväeteenistuskohustuslik“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0123
**Audit ID:** ET-C1C2-0123
**Card ID:** `c1-sich einschmeicheln-284`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** sich einschmeicheln
**LV MASTER reference:** pieglai­moties • pielabināties
**CURRENT:** meelitama end sisse
**PROPOSED_ET (audit ieteikums):** end sisse pugema
**Problēma:** Praegune tõlge on arusaadav, kuid „end sisse pugema“ on eesti keeles loomulikum vaste tähendusele end kellegi poolehoidu pugeda.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0124
**Audit ID:** ET-C1C2-0124
**Card ID:** `c1-Entziehungskur-303`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Entziehungskur
**LV MASTER reference:** ārstniecības kurss alkoholiķiem vai narkomāniem
**CURRENT:** võõrutusravi kuur
**PROPOSED_ET (audit ieteikums):** võõrutusravikuur
**Problēma:** „Ravikuur“ moodustab eesti keeles liitsõna; praegune lahkukirjutus on ebaloomulik ja ortograafiliselt vigane.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0125
**Audit ID:** ET-C1C2-0125
**Card ID:** `c1-Feuerwerkskörper-312`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Feuerwerkskörper
**LV MASTER reference:** raķete uguņošanai
**CURRENT:** ilutulestikurakett
**PROPOSED_ET (audit ieteikums):** ilutulestikuvahend
**Problēma:** Praegune vaste tähendab konkreetsemalt ilutulestikuraketti, kuid saksa sõna on üldmõiste igasuguse ilutulestikuvahendi kohta.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0126
**Audit ID:** ET-C1C2-0126
**Card ID:** `c1-Fortbildungskurse-315`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Fortbildungskurse
**LV MASTER reference:** kvalifikācijas paaugstināšanas kursi
**CURRENT:** täienduskoolituskursused
**PROPOSED_ET (audit ieteikums):** täienduskursused
**Problēma:** „Täienduskoolituskursused” on tarbetult korduv ja ebaloomulik; saksa mõiste loomulik vaste on „täienduskursused”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0127
**Audit ID:** ET-C1C2-0127
**Card ID:** `c1-fortgeschritten-316`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** fortgeschritten
**LV MASTER reference:** samērā vēlā attīstības stadijā
**CURRENT:** üsna hilises arengujärgus
**PROPOSED_ET (audit ieteikums):** edasijõudnud
**Problēma:** Praegune fraas on kitsas ja kohmakas kontekstivaste; sõnavarakaardil on loomulikum üldvaste „edasijõudnud”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0128
**Audit ID:** ET-C1C2-0128
**Card ID:** `c1-Gebrauchtwaren-325`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** Gebrauchtwaren
**LV MASTER reference:** lietotas mantas
**CURRENT:** kasutatud asjad
**PROPOSED_ET (audit ieteikums):** kasutatud kaubad
**Problēma:** „Waren” tähendab kaupu, mitte üldiselt asju; „kasutatud kaubad” vastab saksa sõna tähendusele täpsemalt.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0129
**Audit ID:** ET-C1C2-0129
**Card ID:** `c1-Geburtenrate-326`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Geburtenrate
**LV MASTER reference:** dzimstības līmenis
**CURRENT:** sündimuse tase
**PROPOSED_ET (audit ieteikums):** sündimus
**Problēma:** „Sündimuse tase” on arusaadav, kuid eesti keeles on selle demograafilise näitaja tavapärane vaste „sündimus”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0130
**Audit ID:** ET-C1C2-0130
**Card ID:** `c1-geistesschwach-337`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** geistesschwach
**LV MASTER reference:** garā vājš • plānprātīgs
**CURRENT:** vaimupuudega
**PROPOSED_ET (audit ieteikums):** vaimselt nõrk
**Problēma:** „Vaimupuudega” tähendab vaimupuudega inimest, mitte omadust „vaimselt nõrk”; praegune vaste muudab tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0131
**Audit ID:** ET-C1C2-0131
**Card ID:** `c1-Gemeineigentum-343`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gemeineigentum
**LV MASTER reference:** sabiedriskais īpašums
**CURRENT:** ühiskondlik omand
**PROPOSED_ET (audit ieteikums):** ühisomand
**Problēma:** „Gemeineigentum” tähendab ühisomandit; „ühiskondlik omand” viitab pigem avalikule või ühiskondlikule omandile.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0132
**Audit ID:** ET-C1C2-0132
**Card ID:** `c1-Geschäftshaus-358`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Geschäftshaus
**LV MASTER reference:** tirdzniecības nams
**CURRENT:** kaubamaja
**PROPOSED_ET (audit ieteikums):** ärihoone
**Problēma:** Kaubamaja tähendab department store’i; Geschäftshaus tähendab äri- või ärikasutusega hoonet.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0133
**Audit ID:** ET-C1C2-0133
**Card ID:** `c1-gesetzlos-363`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gesetzlos
**LV MASTER reference:** nelikumīgs
**CURRENT:** seadusevastane
**PROPOSED_ET (audit ieteikums):** seadusetu
**Problēma:** Seadusevastane tähendab pigem gesetzwidrig; gesetzlos tähendab seadusetut või seadust eiravat.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0134
**Audit ID:** ET-C1C2-0134
**Card ID:** `c1-Gewissensbisse-368`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Gewissensbisse
**LV MASTER reference:** sirdsapziņas pārmetumi
**CURRENT:** südametunnistuse piinad
**PROPOSED_ET (audit ieteikums):** süümepiinad
**Problēma:** Südametunnistuse piinad on arusaadav, kuid loomulik ja tavapärane vaste on süümepiinad.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0135
**Audit ID:** ET-C1C2-0135
**Card ID:** `c1-gewissermaßen-369`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gewissermaßen
**LV MASTER reference:** zināmā mērā • savā ziņā • tā sakot
**CURRENT:** teataval määral • omal moel • nii-öelda
**PROPOSED_ET (audit ieteikums):** teataval määral • teatud mõttes • nii-öelda
**Problēma:** Omal moel tähendab 'in one's own way', mitte 'gewissermaßen'; sobiv vaste on teatud mõttes.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0136
**Audit ID:** ET-C1C2-0136
**Card ID:** `c1-Hausdurchsuchung-384`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** ORTHOGRAPHY
**DE (read-only):** Hausdurchsuchung
**LV MASTER reference:** policijas kratīšana
**CURRENT:** politseiläbiotsimine
**PROPOSED_ET (audit ieteikums):** politsei läbiotsimine
**Problēma:** Praegune kokku kirjutatud vorm on ortograafiliselt vigane; politsei ja läbiotsimine kirjutatakse eraldi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0137
**Audit ID:** ET-C1C2-0137
**Card ID:** `c1-sich hinreißen lassen-392`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** sich hinreißen lassen
**LV MASTER reference:** aizrauties
**CURRENT:** end kaasa haarata laskma
**PROPOSED_ET (audit ieteikums):** laskma end kaasa haarata
**Problēma:** Eestikeelne väljend on loomulikus sõnajärjes 'laskma end kaasa haarata'.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0138
**Audit ID:** ET-C1C2-0138
**Card ID:** `c1-Industrieabwässer-394`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Industrieabwässer
**LV MASTER reference:** rūpnieciskie notekūdeņi
**CURRENT:** tööstuslikud reoveed
**PROPOSED_ET (audit ieteikums):** tööstuslik reovesi
**Problēma:** Reovesi on eesti keeles tavaliselt loendamatu ainsus; mitmus 'reoveed' on siin ebaloomulik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0139
**Audit ID:** ET-C1C2-0139
**Card ID:** `c1-Justiz-401`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Justiz
**LV MASTER reference:** justīcija • tieslietas
**CURRENT:** õigusemõistmine • justiits
**PROPOSED_ET (audit ieteikums):** õigusemõistmine • justiitssüsteem
**Problēma:** Justiits on kõnekeelne ja tähenduselt ebatäpne; siin sobib justiitssüsteem või õigusemõistmine.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0140
**Audit ID:** ET-C1C2-0140
**Card ID:** `c1-Kaution-404`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Kaution
**LV MASTER reference:** ķīla • galvojums • drošības nauda • garantija
**CURRENT:** tagatis • kautsjon • garantii
**PROPOSED_ET (audit ieteikums):** tagatis • kautsjon
**Problēma:** Garantii tähendab guarantee ega ole Kautioni vaste; Kaution on tagatis või kautsjon.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0141
**Audit ID:** ET-C1C2-0141
**Card ID:** `c1-militärpflichtig-429`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** militärpflichtig
**LV MASTER reference:** karaklausībai padots
**CURRENT:** ajateenistuskohuslane
**PROPOSED_ET (audit ieteikums):** sõjaväekohustuslik
**Problēma:** Praegune sõna on nimisõna isiku kohta, kuid saksa lähteüksus on omadussõna „sõjaväekohustuslik“ ehk teenistuskohustusega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0142
**Audit ID:** ET-C1C2-0142
**Card ID:** `c1-Parteifunktionär-440`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Parteifunktionär
**LV MASTER reference:** partijas darbinieks
**CURRENT:** parteitöötaja
**PROPOSED_ET (audit ieteikums):** parteifunktsionäär
**Problēma:** „Parteitöötaja“ tähendab üldiselt partei töötajat ega väljenda funktsionääri ehk parteiametniku tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0143
**Audit ID:** ET-C1C2-0143
**Card ID:** `c1-Produktionskosten-446`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Produktionskosten
**LV MASTER reference:** ražošanas pašizmaksa
**CURRENT:** tootmise omahind
**PROPOSED_ET (audit ieteikums):** tootmiskulud
**Problēma:** „Omahind“ tähendab omahinda või kulupõhist hinda, kuid Produktionskosten tähendab üldiselt tootmiskulusid.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0144
**Audit ID:** ET-C1C2-0144
**Card ID:** `c1-rechtswidrig-452`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** rechtswidrig
**LV MASTER reference:** nelikumīgi
**CURRENT:** ebaseaduslikult
**PROPOSED_ET (audit ieteikums):** ebaseaduslik
**Problēma:** Saksa lähteüksus on omadussõna, kuid „ebaseaduslikult“ on määrsõna; omadussõna on „ebaseaduslik“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0145
**Audit ID:** ET-C1C2-0145
**Card ID:** `c1-sanktionieren-461`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sanktionieren
**LV MASTER reference:** atbalstīt • sankcionēt
**CURRENT:** toetama • sanktsioneerima
**PROPOSED_ET (audit ieteikums):** sanktsioneerima
**Problēma:** Toetama tähendab „unterstützen“ ja ei vasta saksa verbile „sanktionieren“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0146
**Audit ID:** ET-C1C2-0146
**Card ID:** `c1-Sinnestäuschung-474`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Sinnestäuschung
**LV MASTER reference:** halucinācija
**CURRENT:** hallutsinatsioon
**PROPOSED_ET (audit ieteikums):** meelepett
**Problēma:** Sinnestäuschung on üldmõiste meelepette või illusiooni kohta, mitte ainult hallutsinatsioon.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0147
**Audit ID:** ET-C1C2-0147
**Card ID:** `c1-synchronisieren-486`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** synchronisieren
**LV MASTER reference:** dublēt filmu
**CURRENT:** filmi dubleerima
**PROPOSED_ET (audit ieteikums):** sünkroniseerima
**Problēma:** „Filmi dubleerima“ tähendab filmi dubleerimist, mitte sünkroniseerimist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0148
**Audit ID:** ET-C1C2-0148
**Card ID:** `c1-Transfusion-488`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Transfusion
**LV MASTER reference:** tieša asins pārliešana no viena cilvēka citam
**CURRENT:** otsene vereülekanne inimeselt inimesele
**PROPOSED_ET (audit ieteikums):** vereülekanne
**Problēma:** Saksa „Transfusion“ on üldiselt vereülekanne; „otsene inimeselt inimesele“ lisab põhjendamatu kitsenduse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0149
**Audit ID:** ET-C1C2-0149
**Card ID:** `c1-urteilen-499`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** urteilen
**LV MASTER reference:** spriest
**CURRENT:** otsustama • arutlema
**PROPOSED_ET (audit ieteikums):** hinnangut andma
**Problēma:** „Arutlema“ tähendab arutamist; see ei vasta „urteilen“ tähendusele „hinnangut andma“ või „otsust langetama“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0150
**Audit ID:** ET-C1C2-0150
**Card ID:** `c1-sich vervollkommnen-534`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sich vervollkommnen
**LV MASTER reference:** papildināt savas zināšanas
**CURRENT:** oma teadmisi täiendama
**PROPOSED_ET (audit ieteikums):** ennast täiustama
**Problēma:** Saksa refleksiivne verb tähendab enda täiustamist; praegune tõlge kitsendab tähenduse ainult teadmiste täiendamisele.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0151
**Audit ID:** ET-C1C2-0151
**Card ID:** `c1-Volksbefragung-537`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Volksbefragung
**LV MASTER reference:** visas tautas aptauja • referendums
**CURRENT:** üleriigiline küsitlus • referendum
**PROPOSED_ET (audit ieteikums):** üleriigiline küsitlus • rahvaküsitlus
**Problēma:** Volksbefragung on rahva küsitlus või konsultatsioon, mitte täpselt referendum; referendum tähistab siduvamat hääletust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0152
**Audit ID:** ET-C1C2-0152
**Card ID:** `c2-konterkarieren-1`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** konterkarieren
**LV MASTER reference:** izjaukt
**CURRENT:** nurjama
**PROPOSED_ET (audit ieteikums):** vastu töötama
**Problēma:** „Nurjama” tähendab midagi ära rikkuma või vussi ajama, mitte vastutoimimist või vastutöötamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0153
**Audit ID:** ET-C1C2-0153
**Card ID:** `c2-Teilnehmerausweis-12`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Teilnehmerausweis
**LV MASTER reference:** dalībnieka apliecība
**CURRENT:** osaleja tunnistus
**PROPOSED_ET (audit ieteikums):** osalejakaart
**Problēma:** „Ausweis” on kaart või tõend isikuõiguse kohta, „tunnistus” tähendab eeskätt sertifikaati või diplomit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0154
**Audit ID:** ET-C1C2-0154
**Card ID:** `c2-Behandlungsraum-16`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Behandlungsraum
**LV MASTER reference:** ārsta kabinets
**CURRENT:** arsti kabinet
**PROPOSED_ET (audit ieteikums):** raviruum
**Problēma:** „Behandlungsraum” tähendab üldiselt raviruumi; „arsti kabinet” kitsendab tähenduse arsti kabinetiks.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0155
**Audit ID:** ET-C1C2-0155
**Card ID:** `c2-Krankheitsüberträger-49`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Krankheitsüberträger
**LV MASTER reference:** slimības pārnēsātājs
**CURRENT:** haiguse levitaja
**PROPOSED_ET (audit ieteikums):** haiguse edasikandja
**Problēma:** „Levitaja” tähendab haiguse levitajat, kuid Überträger on täpsemalt haiguse edasikandja või kandja.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0156
**Audit ID:** ET-C1C2-0156
**Card ID:** `c2-Straßenunterführung-67`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Straßenunterführung
**LV MASTER reference:** gājēju tunelis
**CURRENT:** jalakäijate tunnel
**PROPOSED_ET (audit ieteikums):** teealune tunnel
**Problēma:** Saksa sõna tähendab teealust läbipääsu, mitte jalakäijate tunnelit; praegune tõlge kitsendab ja muudab tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0157
**Audit ID:** ET-C1C2-0157
**Card ID:** `c2-durchkreuzen-103`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** durchkreuzen
**LV MASTER reference:** pārsvītrot • pārvilkt krustu • šķērsot • izjaukt
**CURRENT:** läbi kriipsutama • risti tõmbama • ristuma • nurjama
**PROPOSED_ET (audit ieteikums):** läbi kriipsutama • risti tõmbama • ületama • nurjama
**Problēma:** Ristuma tähendab ‘ristuma’ või ‘lõikuma’, mitte tegevust ‘ületama’ või ‘risti minema’.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0158
**Audit ID:** ET-C1C2-0158
**Card ID:** `c2-Durchschnittsleistung-106`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Durchschnittsleistung
**LV MASTER reference:** viduvējs sniegums • caurmēra sniegums
**CURRENT:** keskpärane tulemus • keskmine tulemus
**PROPOSED_ET (audit ieteikums):** keskpärane sooritus • keskmine sooritus
**Problēma:** Leistung tähendab siin sooritust või jõudlust, mitte otseselt tulemust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0159
**Audit ID:** ET-C1C2-0159
**Card ID:** `c2-Errungenschaft-117`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** Errungenschaft
**LV MASTER reference:** sasniegums • ieguvums • guvums
**CURRENT:** saavutus • saavutis • võit
**PROPOSED_ET (audit ieteikums):** saavutus • saavutis • edusamm
**Problēma:** Võit tähendab eeskätt ‘Sieg’ ehk võitu, mitte saavutust või saavutist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0160
**Audit ID:** ET-C1C2-0160
**Card ID:** `c2-Gedächtnisschwäche-126`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Gedächtnisschwäche
**LV MASTER reference:** slikta atmiņa
**CURRENT:** halb mälu
**PROPOSED_ET (audit ieteikums):** mälunõrkus
**Problēma:** Halb mälu tähendab ‘halb mälu’; Gedächtnisschwäche täpsem vaste on mälunõrkus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0161
**Audit ID:** ET-C1C2-0161
**Card ID:** `c2-Geistesgegenwart-131`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Geistesgegenwart
**LV MASTER reference:** attapība
**CURRENT:** vaimne kohalolek
**PROPOSED_ET (audit ieteikums):** taibukus
**Problēma:** Geistesgegenwart tähendab vaimu kohalolu asemel taibukust või kiiret reageerimisvõimet.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0162
**Audit ID:** ET-C1C2-0162
**Card ID:** `c2-Dorfgemeinschaft-136`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Dorfgemeinschaft
**LV MASTER reference:** ciema iedzīvotāji
**CURRENT:** külaelanikkond
**PROPOSED_ET (audit ieteikums):** külakogukond
**Problēma:** Külaelanikkond tähendab küla elanikkonda, Dorfgemeinschaft aga küla kogukonda.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0163
**Audit ID:** ET-C1C2-0163
**Card ID:** `c2-Gewinnauszahlung-156`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Gewinnauszahlung
**LV MASTER reference:** loterijas laimesta izmaksa
**CURRENT:** loteriivõidu väljamaksmine
**PROPOSED_ET (audit ieteikums):** kasumi või võidu väljamaksmine
**Problēma:** Estonian narrows the meaning to a lottery payout, while Gewinn can mean profit or winnings generally.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0164
**Audit ID:** ET-C1C2-0164
**Card ID:** `c2-Hausgemeinschaft-161`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Hausgemeinschaft
**LV MASTER reference:** ģimenes locekļi • mājas iedzīvotāji
**CURRENT:** pereliikmed • majaelanikud
**PROPOSED_ET (audit ieteikums):** majaelanikud
**Problēma:** Hausgemeinschaft refers to people living in the same house; pereliikmed means family members and adds an incorrect meaning.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0165
**Audit ID:** ET-C1C2-0165
**Card ID:** `c2-Lebenserhaltungstrieb-170`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Lebenserhaltungstrieb
**LV MASTER reference:** dzīvības dziņa
**CURRENT:** elutahe
**PROPOSED_ET (audit ieteikums):** enesesäilitamisinstinkt
**Problēma:** Elutahe means will to live, whereas Trieb denotes an instinct or drive for self-preservation.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0166
**Audit ID:** ET-C1C2-0166
**Card ID:** `c2-Meisterschaftsspiel-177`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Meisterschaftsspiel
**LV MASTER reference:** meistarsacīkstes
**CURRENT:** meistrivõistlused
**PROPOSED_ET (audit ieteikums):** meistrivõistluste mäng
**Problēma:** The German denotes a single championship match, while meistrivõistlused denotes the championship competition as a whole.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0167
**Audit ID:** ET-C1C2-0167
**Card ID:** `c2-Preisausschreiben-187`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Preisausschreiben
**LV MASTER reference:** konkurss
**CURRENT:** võistlus
**PROPOSED_ET (audit ieteikums):** auhinnavõistlus
**Problēma:** Võistlus is too general and omits the defining element that prizes are awarded.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0168
**Audit ID:** ET-C1C2-0168
**Card ID:** `c2-zugrunde, zu Grunde-206`
**Field/path:** `etText`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** zugrunde, zu Grunde
**LV MASTER reference:** pamatā
**CURRENT:** põhiliselt
**PROPOSED_ET (audit ieteikums):** aluseks
**Problēma:** „Põhiliselt” tähendab „peamiselt”, mitte „aluseks” või „millegi aluseks olevana”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0169
**Audit ID:** ET-C1C2-0169
**Card ID:** `c1-gelegentlich`
**Field/path:** `study.translation`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gelegentlich
**LV MASTER reference:** reizēm • gadījuma • sakarā ar
**CURRENT:** aeg-ajalt • juhuslik • seoses
**PROPOSED_ET (audit ieteikums):** aeg-ajalt • juhuslik
**Problēma:** „Seoses” tähendab „in Verbindung mit” ega ole tänapäeva eesti keeles „gelegentlich” üldtähenduses sobiv vaste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0170
**Audit ID:** ET-C1C2-0170
**Card ID:** `c1-gelegentlich`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gelegentlich
**LV MASTER reference:** sakarā ar
**CURRENT:** seoses
**PROPOSED_ET (audit ieteikums):** aeg-ajalt
**Problēma:** „Seoses” ei vasta sõna „gelegentlich” põhitähendusele „aeg-ajalt; mõnikord”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0171
**Audit ID:** ET-C1C2-0171
**Card ID:** `c1-beziehen-sich-beziehen-auf`
**Field/path:** `study.translation`
**Production file:** `data/et/c1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** beziehen / sich beziehen auf
**LV MASTER reference:** attiecināt • attiekties uz
**CURRENT:** seostama • käima millegi kohta
**PROPOSED_ET (audit ieteikums):** saama (nt pensioni) • millelegi viitama / millegi kohta käima
**Problēma:** „Beziehen” võib tähendada pensioni saamist; „sich beziehen auf” tähendab millelegi viitamist. Praegune vaste ajab tähendused segi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0172
**Audit ID:** ET-C1C2-0172
**Card ID:** `c1-voraussetzen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/c1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** voraussetzen
**LV MASTER reference:** mēs pieņemam pamatzināšanas kā priekšnoteikumu.
**CURRENT:** me eeldame põhiteadmisi.
**PROPOSED_ET (audit ieteikums):** Me eeldame põhiteadmisi.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0173
**Audit ID:** ET-C1C2-0173
**Card ID:** `c1-bewahren`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/c1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bewahren
**LV MASTER reference:** mēs saglabājam tradīcijas.
**CURRENT:** me säilitame traditsioone.
**PROPOSED_ET (audit ieteikums):** Me säilitame traditsioone.
**Problēma:** Lause alguses peab olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0174
**Audit ID:** ET-C1C2-0174
**Card ID:** `c1-aufrechterhalten`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** aufrechterhalten
**LV MASTER reference:** Valsts uztur kārtību spēkā.
**CURRENT:** Riik hoiab korda kehtivana.
**PROPOSED_ET (audit ieteikums):** Riik hoiab korda alal.
**Problēma:** Eesti keeles hoitakse korda alal; „kehtivana hoidma” ei sobi siin loomuliku kollokatsioonina.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0175
**Audit ID:** ET-C1C2-0175
**Card ID:** `c1-aufrechterhalten`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** aufrechterhalten
**LV MASTER reference:** jāuztur darbība spēkā.
**CURRENT:** tegevus tuleb hoida kehtivana.
**PROPOSED_ET (audit ieteikums):** Tegevust tuleb alal hoida.
**Problēma:** Tegevust ei hoita tavaliselt „kehtivana”; selle puhul on loomulikum „alal hoidma”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-C1C2-0176
**Audit ID:** ET-C1C2-0176
**Card ID:** `c1-aufrechterhalten`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/c1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** aufrechterhalten
**LV MASTER reference:** valsts uztur kārtību spēkā.
**CURRENT:** riik hoiab korda kehtivana.
**PROPOSED_ET (audit ieteikums):** Riik hoiab korda alal.
**Problēma:** Lisaks algustähele on „korda kehtivana hoidma” ebaloomulik; õige kollokatsioon on „korda alal hoidma”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
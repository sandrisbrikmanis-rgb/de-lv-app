# ET–DE C1/C2 — OWNER VIEW (grupa 2, 51–100)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#622](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/622)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [et-c1c2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-review-GITHUB.md) |
| OWNER VIEW (visi) | [et-c1c2-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-view.md) |
| Decisions (šī grupa) | [et-c1c2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-decisions-group02.md) |
| Decisions (viss) | [et-c1c2-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-decisions.md) |

Avots: [et-c1c2-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-full-audit.md)

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
# ET–DE A2 — OWNER DECISIONS

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**MAIN_BASE_SHA:** `8123cf4aba7b8e19df030fefac7d89753b4c9d44`
**WORK_BRANCH:** `cursor/et-de-c1c2-teikumi-full-audit-4a7c`
**Audit PR:** [#610](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/610)
**Findings:** **131** · sākotnēji visi **PENDING**

Pirmais ET–DE A2 FULL_DISCOVERY — nav iepriekšējas OWNER history. Aizpildi grupu tabulas vai šo indeksu.

Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**

**DE = STRICT READ-ONLY.** Apply tikai pēc OWNER apstiprinājuma.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-c1c2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-review-GITHUB.md) |
| OWNER VIEW | [et-c1c2-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-view.md) |
| Decisions grupa 1–50 | [et-c1c2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-decisions-group01.md) |
| Decisions grupa 51–100 | [et-c1c2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-decisions-group02.md) |
| Decisions grupa 101–131 | [et-c1c2-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-c1c2-teikumi-full-audit-4a7c/reports/et-c1c2-owner-decisions-group03.md) |

## Pilna tabula (visi findingi)
| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |
|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|
| ET-C1C2-0001 | STRUCT-c1 | study.count | 16 | 15 | CRITICAL | STRUCTURE | PENDING | | |
| ET-C1C2-0002 | STRUCT-c2 | study.count | 3 | 1 | CRITICAL | STRUCTURE | PENDING | | |
| ET-C1C2-0003 | c1-gelegentlich | entry[340].study.comparison[0].example | Er kommt gelegentlich. = Viņš reizēm atnāk. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0004 | c1-gelegentlich | entry[340].study.comparison[1].example | ein gelegentlicher Besuch = gadījuma apmeklējums | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0005 | c1-gelegentlich | entry[340].study.comparison[2].example | gelegentlich des Festes = svētku sakarā | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0006 | c1-gelegentlich | entry[340].study.comparison[3].example | Manchmal regnet es. = Reizēm līst. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0007 | c1-wahlberechtigt | entry[543].study.comparison[0].example | Er ist wahlberechtigt. = Viņam ir vēlēšanu tiesības. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0008 | c1-wahlberechtigt | entry[543].study.comparison[2].example | Der Wähler geht zur Wahl. = Vēlētājs iet uz vēlēšanām. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-C1C2-0009 | c1-wettbewerb | study.sectionAccents (examples) | v | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0010 | c1-wettbewerb | study.sectionAccents (examples) | õ | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0011 | c1-wettbewerb | study.sectionAccents (examples) | i | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0012 | c1-wettbewerb | study.sectionAccents (examples) | s | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0013 | c1-wettbewerb | study.sectionAccents (examples) | t | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0014 | c1-wettbewerb | study.sectionAccents (examples) | l | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0015 | c1-wettbewerb | study.sectionAccents (examples) | u | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0017 | c1-wettbewerb | study.sectionAccents (examples) | e | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0019 | c1-wettbewerb | study.sectionAccents (examples) | k | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0020 | c1-wettbewerb | study.sectionAccents (examples) | o | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0021 | c1-wettbewerb | study.sectionAccents (examples) | n | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0024 | c1-wettbewerb | study.sectionAccents (examples) | r | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0039 | c1-voraussetzen | study.sectionAccents (explanation) | voraus | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0040 | c1-aufrechterhalten | study.sectionAccents (explanation) | erhält | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0041 | c1-aufrechterhalten | study.sectionAccents (explanation) | auf | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0042 | c2-inwiefern | study.sectionAccents (examples) | m | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0043 | c2-inwiefern | study.sectionAccents (examples) | i | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0044 | c2-inwiefern | study.sectionAccents (examples) | l | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0046 | c2-inwiefern | study.sectionAccents (examples) | e | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0047 | c2-inwiefern | study.sectionAccents (examples) | s | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0048 | c2-inwiefern | study.sectionAccents (examples) |  | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0049 | c2-inwiefern | study.sectionAccents (examples) | o | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0051 | c2-inwiefern | study.sectionAccents (examples) | a | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0061 | c2-inwiefern | study.sectionAccents (examples) | k | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0062 | c2-inwiefern | study.sectionAccents (examples) | u | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0065 | c2-inwiefern | study.sectionAccents (examples) | p | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0068 | c2-inwiefern | study.sectionAccents (examples) | j | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0070 | c2-inwieweit | study.sectionAccents (examples) | k | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0071 | c2-inwieweit | study.sectionAccents (examples) | u | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0072 | c2-inwieweit | study.sectionAccents (examples) | i | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0073 | c2-inwieweit | study.sectionAccents (examples) |  | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0074 | c2-inwieweit | study.sectionAccents (examples) | p | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0075 | c2-inwieweit | study.sectionAccents (examples) | a | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0076 | c2-inwieweit | study.sectionAccents (examples) | l | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0077 | c2-inwieweit | study.sectionAccents (examples) | j | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0082 | c2-inwieweit | study.sectionAccents (examples) | v | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0083 | c2-inwieweit | study.sectionAccents (examples) | õ | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0084 | c2-inwieweit | study.sectionAccents (examples) | r | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0085 | c2-inwieweit | study.sectionAccents (examples) | d | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0086 | c2-inwieweit | study.sectionAccents (examples) | m | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0090 | c2-inwieweit | study.sectionAccents (examples) | e | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0091 | c2-inwieweit | study.sectionAccents (examples) | s | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0093 | c2-inwieweit | study.sectionAccents (examples) | o | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-C1C2-0097 | c1-Kinderschänder-30 | etText | lapse väärkohtleja | lasteahistaja | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0098 | c1-Kindesmisshandlung-31 | etText | lastevastane vägivald | laste väärkohtlemine | MEDIUM | TRANSLATION | PENDING | | |
| ET-C1C2-0099 | c1-Bergwanderung-41 | etText | mägiturism | mägimatk | HIGH | SEMANTICS | PENDING | | |
| ET-C1C2-0100 | c1-Beschäftigung-44 | etText | tegevusala | tegevus | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0101 | c1-geschäftlich-71 | etText | äri- | äriline | MEDIUM | TRANSLATION | PENDING | | |
| ET-C1C2-0102 | c1-Gewichtheben-78 | etText | tõstmine | tõstesport | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0103 | c1-Hochzeitsreise-86 | etText | mesinädalate reis | pulmareis | MEDIUM | NATURALNESS | PENDING | | |
| ET-C1C2-0104 | c1-Kabelanschluss-92 | etText | kaabellevi liitumine | kaabeltelevisiooni ühendus | MEDIUM | NATURALNESS | PENDING | | |
| ET-C1C2-0105 | c1-Kostenanschlag-99 | etText | kuluprognoos | kulude kalkulatsioon | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0106 | c1-Rennen mit Hindernissen-131 | etText | tõkkejooks | takistusjooks | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0107 | c1-Schlussverkauf-138 | etText | hooajalõpu allahindlus | lõppmüük | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0108 | c1-Strampelhöschen-153 | etText | imiku roomik | imiku sipupüksid | HIGH | TRANSLATION | PENDING | | |
| ET-C1C2-0109 | c1-Terminkalender-157 | etText | tähtajakalender | kohtumiste kalender | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0110 | c1-verantworten-168 | etText | vastutust võtma | vastutama | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0111 | c1-Verlegenheit-173 | etText | hämmeldus | piinlikkus | HIGH | TRANSLATION | PENDING | | |
| ET-C1C2-0112 | c1-Basisforschung-206 | etText | põhiuuring | alusuuring | HIGH | TRANSLATION | PENDING | | |
| ET-C1C2-0113 | c1-Befangenheit-211 | etText | kimbatus • segadus | erapoolikus • kallutatus | HIGH | SEMANTICS | PENDING | | |
| ET-C1C2-0114 | c1-benachteiligen-220 | etText | kahjustama • kahju tekitama | ebasoodsasse olukorda seadma • diskrimineerima | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0115 | c1-bereitwillig-224 | etText | abivalmis • teenistusvalmis | vastutulelik • meelsasti nõus | HIGH | TRANSLATION | PENDING | | |
| ET-C1C2-0116 | c1-Betriebskosten-236 | etText | ettevõtte ekspluatatsioonikulud • tootmiskulud | tegevuskulud • käituskulud | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0117 | c1-Beweismaterial-241 | etText | materiaalsed tõendid | tõendusmaterjal | MEDIUM | TRANSLATION | PENDING | | |
| ET-C1C2-0118 | c1-bewerben, sich-242 | etText | kandideerima • püüdlema | kandideerima • avaldust esitama | HIGH | TRANSLATION | PENDING | | |
| ET-C1C2-0119 | c1-Computersprache-251 | etText | programmeerimiskeel | arvutikeel | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0120 | c1-Dachgepäckträger-252 | etText | katuse pagasiraam | katusepagasiraam | LOW | ORTHOGRAPHY | PENDING | | |
| ET-C1C2-0121 | c1-Dienstleistung-266 | etText | olmeteenus | teenus | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0122 | c1-dienstpflichtig-267 | etText | sõjaväeteenistuskohuslane | sõjaväeteenistuskohustuslik | MEDIUM | GRAMMAR | PENDING | | |
| ET-C1C2-0123 | c1-sich einschmeicheln-284 | etText | meelitama end sisse | end sisse pugema | MEDIUM | NATURALNESS | PENDING | | |
| ET-C1C2-0124 | c1-Entziehungskur-303 | etText | võõrutusravi kuur | võõrutusravikuur | LOW | ORTHOGRAPHY | PENDING | | |
| ET-C1C2-0125 | c1-Feuerwerkskörper-312 | etText | ilutulestikurakett | ilutulestikuvahend | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0126 | c1-Fortbildungskurse-315 | etText | täienduskoolituskursused | täienduskursused | LOW | NATURALNESS | PENDING | | |
| ET-C1C2-0127 | c1-fortgeschritten-316 | etText | üsna hilises arengujärgus | edasijõudnud | MEDIUM | NATURALNESS | PENDING | | |
| ET-C1C2-0128 | c1-Gebrauchtwaren-325 | etText | kasutatud asjad | kasutatud kaubad | LOW | SEMANTICS | PENDING | | |
| ET-C1C2-0129 | c1-Geburtenrate-326 | etText | sündimuse tase | sündimus | LOW | NATURALNESS | PENDING | | |
| ET-C1C2-0130 | c1-geistesschwach-337 | etText | vaimupuudega | vaimselt nõrk | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0131 | c1-Gemeineigentum-343 | etText | ühiskondlik omand | ühisomand | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0132 | c1-Geschäftshaus-358 | etText | kaubamaja | ärihoone | HIGH | SEMANTICS | PENDING | | |
| ET-C1C2-0133 | c1-gesetzlos-363 | etText | seadusevastane | seadusetu | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0134 | c1-Gewissensbisse-368 | etText | südametunnistuse piinad | süümepiinad | MEDIUM | NATURALNESS | PENDING | | |
| ET-C1C2-0135 | c1-gewissermaßen-369 | etText | teataval määral • omal moel • nii-öelda | teataval määral • teatud mõttes • nii-öelda | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0136 | c1-Hausdurchsuchung-384 | etText | politseiläbiotsimine | politsei läbiotsimine | HIGH | ORTHOGRAPHY | PENDING | | |
| ET-C1C2-0137 | c1-sich hinreißen lassen-392 | etText | end kaasa haarata laskma | laskma end kaasa haarata | MEDIUM | NATURALNESS | PENDING | | |
| ET-C1C2-0138 | c1-Industrieabwässer-394 | etText | tööstuslikud reoveed | tööstuslik reovesi | MEDIUM | GRAMMAR | PENDING | | |
| ET-C1C2-0139 | c1-Justiz-401 | etText | õigusemõistmine • justiits | õigusemõistmine • justiitssüsteem | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0140 | c1-Kaution-404 | etText | tagatis • kautsjon • garantii | tagatis • kautsjon | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0141 | c1-militärpflichtig-429 | etText | ajateenistuskohuslane | sõjaväekohustuslik | HIGH | TRANSLATION | PENDING | | |
| ET-C1C2-0142 | c1-Parteifunktionär-440 | etText | parteitöötaja | parteifunktsionäär | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0143 | c1-Produktionskosten-446 | etText | tootmise omahind | tootmiskulud | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0144 | c1-rechtswidrig-452 | etText | ebaseaduslikult | ebaseaduslik | MEDIUM | GRAMMAR | PENDING | | |
| ET-C1C2-0145 | c1-sanktionieren-461 | etText | toetama • sanktsioneerima | sanktsioneerima | HIGH | TRANSLATION | PENDING | | |
| ET-C1C2-0146 | c1-Sinnestäuschung-474 | etText | hallutsinatsioon | meelepett | HIGH | SEMANTICS | PENDING | | |
| ET-C1C2-0147 | c1-synchronisieren-486 | etText | filmi dubleerima | sünkroniseerima | HIGH | TRANSLATION | PENDING | | |
| ET-C1C2-0148 | c1-Transfusion-488 | etText | otsene vereülekanne inimeselt inimesele | vereülekanne | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0149 | c1-urteilen-499 | etText | otsustama • arutlema | hinnangut andma | MEDIUM | TRANSLATION | PENDING | | |
| ET-C1C2-0150 | c1-sich vervollkommnen-534 | etText | oma teadmisi täiendama | ennast täiustama | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0151 | c1-Volksbefragung-537 | etText | üleriigiline küsitlus • referendum | üleriigiline küsitlus • rahvaküsitlus | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0152 | c2-konterkarieren-1 | etText | nurjama | vastu töötama | HIGH | TRANSLATION | PENDING | | |
| ET-C1C2-0153 | c2-Teilnehmerausweis-12 | etText | osaleja tunnistus | osalejakaart | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0154 | c2-Behandlungsraum-16 | etText | arsti kabinet | raviruum | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0155 | c2-Krankheitsüberträger-49 | etText | haiguse levitaja | haiguse edasikandja | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0156 | c2-Straßenunterführung-67 | etText | jalakäijate tunnel | teealune tunnel | HIGH | SEMANTICS | PENDING | | |
| ET-C1C2-0157 | c2-durchkreuzen-103 | etText | läbi kriipsutama • risti tõmbama • ristuma • nurjama | läbi kriipsutama • risti tõmbama • ületama • nurjama | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0158 | c2-Durchschnittsleistung-106 | etText | keskpärane tulemus • keskmine tulemus | keskpärane sooritus • keskmine sooritus | MEDIUM | TRANSLATION | PENDING | | |
| ET-C1C2-0159 | c2-Errungenschaft-117 | etText | saavutus • saavutis • võit | saavutus • saavutis • edusamm | LOW | SEMANTICS | PENDING | | |
| ET-C1C2-0160 | c2-Gedächtnisschwäche-126 | etText | halb mälu | mälunõrkus | MEDIUM | TRANSLATION | PENDING | | |
| ET-C1C2-0161 | c2-Geistesgegenwart-131 | etText | vaimne kohalolek | taibukus | HIGH | TRANSLATION | PENDING | | |
| ET-C1C2-0162 | c2-Dorfgemeinschaft-136 | etText | külaelanikkond | külakogukond | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0163 | c2-Gewinnauszahlung-156 | etText | loteriivõidu väljamaksmine | kasumi või võidu väljamaksmine | HIGH | SEMANTICS | PENDING | | |
| ET-C1C2-0164 | c2-Hausgemeinschaft-161 | etText | pereliikmed • majaelanikud | majaelanikud | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0165 | c2-Lebenserhaltungstrieb-170 | etText | elutahe | enesesäilitamisinstinkt | HIGH | SEMANTICS | PENDING | | |
| ET-C1C2-0166 | c2-Meisterschaftsspiel-177 | etText | meistrivõistlused | meistrivõistluste mäng | HIGH | SEMANTICS | PENDING | | |
| ET-C1C2-0167 | c2-Preisausschreiben-187 | etText | võistlus | auhinnavõistlus | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0168 | c2-zugrunde, zu Grunde-206 | etText | põhiliselt | aluseks | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0169 | c1-gelegentlich | study.translation | aeg-ajalt • juhuslik • seoses | aeg-ajalt • juhuslik | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0170 | c1-gelegentlich | study.comparison[2].meaning | seoses | aeg-ajalt | MEDIUM | SEMANTICS | PENDING | | |
| ET-C1C2-0171 | c1-beziehen-sich-beziehen-auf | study.translation | seostama • käima millegi kohta | saama (nt pensioni) • millelegi viitama / millegi kohta käima | HIGH | SEMANTICS | PENDING | | |
| ET-C1C2-0172 | c1-voraussetzen | study.examples[1].lv | me eeldame põhiteadmisi. | Me eeldame põhiteadmisi. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-C1C2-0173 | c1-bewahren | study.examples[2].lv | me säilitame traditsioone. | Me säilitame traditsioone. | LOW | ORTHOGRAPHY | PENDING | | |
| ET-C1C2-0174 | c1-aufrechterhalten | study.examples[0].lv | Riik hoiab korda kehtivana. | Riik hoiab korda alal. | MEDIUM | NATURALNESS | PENDING | | |
| ET-C1C2-0175 | c1-aufrechterhalten | study.examples[1].lv | tegevus tuleb hoida kehtivana. | Tegevust tuleb alal hoida. | MEDIUM | NATURALNESS | PENDING | | |
| ET-C1C2-0176 | c1-aufrechterhalten | study.examples[2].lv | riik hoiab korda kehtivana. | Riik hoiab korda alal. | MEDIUM | NATURALNESS | PENDING | | |

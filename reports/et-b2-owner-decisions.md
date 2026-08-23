# ET–DE B2 — OWNER DECISIONS

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**MAIN_BASE_SHA:** `d1ea2b05bde9d5a7d2854c8b83e634a48179185c`
**WORK_BRANCH:** `cursor/et-de-b2-full-audit-4a7c`
**Audit PR:** [#614](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/614)
**Findings:** **389** · sākotnēji visi **PENDING**

> **Authoritative monolithic tabula** ir zemāk (MASTER §7.23). Papildus — **8 group faili** ērtākai aizpildīšanai.

Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**

**DE = STRICT READ-ONLY.** Apply tikai pēc OWNER apstiprinājuma.

## Navigācija

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-b2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-review-GITHUB.md) |
| OWNER VIEW | [et-b2-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-view.md) |
| Decisions 1–50 (secondary) | [et-b2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group01.md) |
| Decisions 51–100 (secondary) | [et-b2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group02.md) |
| Decisions 101–150 (secondary) | [et-b2-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group03.md) |
| Decisions 151–200 (secondary) | [et-b2-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group04.md) |
| Decisions 201–250 (secondary) | [et-b2-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group05.md) |
| Decisions 251–300 (secondary) | [et-b2-owner-decisions-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group06.md) |
| Decisions 301–350 (secondary) | [et-b2-owner-decisions-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group07.md) |
| Decisions 351–389 (secondary) | [et-b2-owner-decisions-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group08.md) |

## Pilna tabula (authoritative monolithic — MASTER §7.23)
| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |
|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|
| ET-B2-0001 | STRUCT | study.count | 64 | 60 | CRITICAL | STRUCTURE | PENDING | | |
| ET-B2-0002 | b2-hochwasser | entry[1145].study.comparison[0].example | Es gibt Hochwasser. = Ir plūdi. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0003 | b2-hochwasser | entry[1145].study.comparison[1].example | Die Überschwemmung zerstörte Häuser. = Plūdi izpostīja mājas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0004 | b2-hochwasser | entry[1145].study.comparison[2].example | Der Pegel steigt. = Ūdens līmenis ceļas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0005 | b2-nachdruck | entry[1349].study.comparison[0].example | Er legt Nachdruck auf die Frist. = Viņš uzsver termiņu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0006 | b2-nachdruck | entry[1349].study.comparison[1].example | Der Nachdruck erschien im Frühjahr. = Atkārtotais izdevums iznāca pavasarī. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0007 | b2-nachdruck | entry[1349].study.comparison[2].example | Unter Druck stehen = būt spiedienā. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0008 | b2-zuweisen | entry[2100].study.comparison[0].example | Er weist die Aufgabe zu. = Viņš piešķir uzdevumu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0009 | b2-zuweisen | entry[2100].study.comparison[1].example | Er gibt mir die Arbeit. = Viņš man dod darbu. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0010 | b2-zuweisen | entry[2100].study.comparison[2].example | Er verteilt die Aufgaben. = Viņš sadala uzdevumus. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0011 | b2-zuwider | entry[2102].study.comparison[1].example | Es ist mir zuwider. = Man tas nepatīk. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0012 | b2-anbieten | entry[2113].study.comparison[0].example | Ich biete Hilfe an. = Es piedāvāju palīdzību. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0013 | b2-anbieten | entry[2113].study.comparison[1].example | Er bietet viel Geld. = Viņš piedāvā daudz naudas. | (ET tulkojums) | HIGH | FOREIGN_REMNANT | PENDING | | |
| ET-B2-0014 | b2-genosse | study.sectionAccents (examples) | s | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0015 | b2-genosse | study.sectionAccents (examples) | e | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0016 | b2-genosse | study.sectionAccents (examples) | l | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0017 | b2-genosse | study.sectionAccents (examples) | t | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0019 | b2-genosse | study.sectionAccents (examples) | i | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0022 | b2-genosse | study.sectionAccents (examples) | n | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0027 | b2-genosse | study.sectionAccents (examples) | g | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0035 | b2-genosse | study.sectionAccents (examples) | m | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0039 | b2-genossin | study.sectionAccents (examples) | s | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0040 | b2-genossin | study.sectionAccents (examples) | e | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0041 | b2-genossin | study.sectionAccents (examples) | l | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0042 | b2-genossin | study.sectionAccents (examples) | t | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0044 | b2-genossin | study.sectionAccents (examples) | i | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0047 | b2-genossin | study.sectionAccents (examples) | n | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0052 | b2-genossin | study.sectionAccents (examples) | g | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0060 | b2-genossin | study.sectionAccents (examples) | m | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0064 | b2-neger | study.sectionAccents (examples) | n | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0065 | b2-neger | study.sectionAccents (examples) | e | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0067 | b2-neger | study.sectionAccents (examples) | g | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0069 | b2-neger | study.sectionAccents (examples) | r | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0070 | b2-neger | study.sectionAccents (examples) | m | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0071 | b2-neger | study.sectionAccents (examples) | u | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0072 | b2-neger | study.sectionAccents (examples) | s | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0073 | b2-neger | study.sectionAccents (examples) | t | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0074 | b2-neger | study.sectionAccents (examples) | a | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0077 | b2-neger | study.sectionAccents (examples) | h | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0079 | b2-neger | study.sectionAccents (examples) | l | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0080 | b2-neger | study.sectionAccents (examples) | i | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0083 | b2-neger | study.sectionAccents (examples) |  | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0091 | b2-pacht | study.sectionAccents (examples) | r | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0092 | b2-pacht | study.sectionAccents (examples) | e | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0093 | b2-pacht | study.sectionAccents (examples) | n | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0094 | b2-pacht | study.sectionAccents (examples) | t | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0095 | b2-pacht | study.sectionAccents (examples) | i | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0096 | b2-pacht | study.sectionAccents (examples) | ü | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0102 | b2-pacht | study.sectionAccents (examples) | d | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0104 | b2-pacht | study.sectionAccents (examples) | l | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0106 | b2-pacht | study.sectionAccents (examples) | p | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0109 | b2-pacht | study.sectionAccents (examples) | g | (termins no ET teksta) | MEDIUM | SECTIONACCENTS_LANGUAGE | PENDING | | |
| ET-B2-0110 | b2-anbelangen-13 | etText | puudutama, käima kohta | puudutama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0111 | b2-angehen-19 | etText | puudutama • pöörduma vastu | puudutama • vastu astuma | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0112 | b2-Aktienkurs-21 | etText | aktsia kurss | aktsiakurss | LOW | ORTHOGRAPHY | PENDING | | |
| ET-B2-0113 | b2-angeblich-28 | etText | justkui • näiliselt | väidetavalt • oletatav | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0114 | b2-abbringen-36 | etText | ümber veenma • hoiatama • kõrvale juhtima | ümber veenma • ära hoidma • kõrvale juhtima | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0115 | b2-abgesehen-44 | etText | kuigi • pealegi | välja arvatud • kõrvale jättes | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0116 | b2-abgetan-46 | etText | lõpetatud • korraldatud | lõpetatud • lahendatud | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0117 | b2-abhören-49 | etText | kuulama • pealt kuulama | pealt kuulama • salaja pealt kuulama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0118 | b2-ableiten-50 | etText | juhtima • kõrvale juhtima • tuletama | ära juhtima • kõrvale juhtima • tuletama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0119 | b2-Abnutzung-52 | etText | kulumine • amortiseerumine • kulu | kulumine • amortiseerumine | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0120 | b2-Absatzmarkt-56 | etText | turustusturg | müügiturg | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0121 | b2-abtragen-71 | etText | ära kandma • kulutama (kandes) • lammutama | ära kandma • kulutama • lammutama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0122 | b2-affig-80 | etText | silmatorkav • edev | afekteeritud • edvistav | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0123 | b2-Anorak-87 | etText | kapuutsiga dressijakk | kapuutsiga jope | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0124 | b2-Aster-92 | etText | astra | aster | HIGH | ORTHOGRAPHY | PENDING | | |
| ET-B2-0125 | b2-Ausbeutung-96 | etText | ekspluatatsioon | ekspluateerimine | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0126 | b2-Äußerlichkeit-103 | etText | väline sära | välisus • pealiskaudsus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0127 | b2-Äußerung-104 | etText | väljendus • avaldumine • ilming | väljendus • avaldus • ütlus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0128 | b2-aussetzen-105 | etText | eksponeerima • allutama • vastu vaidlema • astuma | ohustama • allutama • vastu vaidlema • välja panema | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0129 | b2-aussichtslos-106 | etText | lootusetu • väljavaadeteta | lootusetu • väljavaatetu | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0130 | b2-ausstatten-108 | etText | varustama • vormistama | varustama • sisustama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0131 | b2-austragen-112 | etText | kandma • kohale toimetama • välja võitlema | laiali kandma • kohale toimetama • välja võitlema | LOW | SEMANTICS | PENDING | | |
| ET-B2-0132 | b2-austreten-114 | etText | sisse tallama • maha tallama • välja astuma | välja tallama • maha tallama • välja astuma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0133 | b2-auswärtig-115 | etText | välismaine • välisasjade | välismaine • välisasjadega seotud | LOW | GRAMMAR | PENDING | | |
| ET-B2-0134 | b2-ausweisen-117 | etText | välja saatma • välja saatma • kinnitama • tõestama | välja saatma • välja tõrjuma • kinnitama • tõestama | LOW | SEMANTICS | PENDING | | |
| ET-B2-0135 | b2-auszeichnen-120 | etText | autasustama • andma • silma paistma | autasustama • esile tõstma • silma paistma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0136 | b2-Schwebebalken-123 | etText | tasakaalupulk | võimlemispoom | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0137 | b2-Blutbank-125 | etText | verevaru | verepank | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0138 | b2-Baugrube-142 | etText | ehituskraav | ehituskaevik | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0139 | b2-bebauen-146 | etText | töötlema • hoonestama | harima • hoonestama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0140 | b2-befallen-148 | etText | peale tulema • ründama | tabama • ründama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0141 | b2-beispiellos-163 | etText | enneolematu • nähtamatu • võrreldamatu | enneolematu • enneolematu • võrreldamatu | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0142 | b2-beistimmen-166 | etText | kaasa hääletama • toetama | nõustuma • heaks kiitma | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0143 | b2-Straßenbelag-174 | etText | tänavakate | teekate | LOW | NATURALNESS | PENDING | | |
| ET-B2-0144 | b2-belästigen-177 | etText | koormama • pealetükkivalt käituma • peale suruma | häirima • tülitama • ahistama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0145 | b2-beleibt-181 | etText | täidlane • priske • täielik | täidlane • priske • tüse | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0146 | b2-beredt-189 | etText | jutukas | sõnaosav | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0147 | b2-bergen-192 | etText | päästma • koristama saaki | päästma • saaki koristama | LOW | GRAMMAR | PENDING | | |
| ET-B2-0148 | b2-beruhen-198 | etText | asutatama • põhinema | põhinema | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0149 | b2-beschimpfen-203 | etText | sõimama • halvustama • laimama | sõimama • halvustama • solvama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0150 | b2-besessen-207 | etText | kinnisideeks muutunud • vaevatud • haaratud | kinnisideest haaratud • vaevatud • haaratud | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0151 | b2-besiedeln-208 | etText | elanikke ümber asustama | asustama | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0152 | b2-bestürzt-218 | etText | üllatunud • segaduses • hämmingus | vapustatud • segaduses • hämmeldunud | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0153 | b2-beteuern-221 | etText | tõendama | kinnitama | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0154 | b2-Betriebsrat-224 | etText | ettevõtte nõukogu | töönõukogu | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0155 | b2-Betrug-225 | etText | pettus • mahhineerimine • võltsing • kelmus | pettus • petmine • kelmus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0156 | b2-Beute-227 | etText | saak • võit • trofee | saak • saagis • trofee | LOW | SEMANTICS | PENDING | | |
| ET-B2-0157 | b2-bewähren-229 | etText | kaitsma • ära kaitsma • hoidma • päästma | ennast tõestama • end õigustama | CRITICAL | TRANSLATION | PENDING | | |
| ET-B2-0158 | b2-bezähmen-237 | etText | nõiduma • lummama | taltsutama • ohjeldama | CRITICAL | TRANSLATION | PENDING | | |
| ET-B2-0159 | b2-Binnenhandel-251 | etText | siseturg | sisekaubandus | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0160 | b2-Blutkonserve-274 | etText | konserveeritud veri | verekonserv | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0161 | b2-Bodensatz-280 | etText | sete • pärme | sete • pärm | LOW | GRAMMAR | PENDING | | |
| ET-B2-0162 | b2-Bootsmann-283 | etText | bootsman | pootsman | HIGH | ORTHOGRAPHY | PENDING | | |
| ET-B2-0163 | b2-Borte-288 | etText | äärekivi | ääris | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0164 | b2-Brandschaden-292 | etText | tulekahjukahju | tulekahju tekitatud kahju | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0165 | b2-Brandanschlag-294 | etText | süütamine | süütamisrünnak | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0166 | b2-Brandmal-295 | etText | põletus • põletusarm | põletusjälg • põletusarm | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0167 | b2-Brettsegeln-301 | etText | purjelaud | purjelauasõit | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0168 | b2-bürgerlich-321 | etText | kodanlik • kodanike • kodanlik | kodanlik • kodaniku- • kodanlik | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0169 | b2-Datei-356 | etText | kartoteek | fail | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0170 | b2-Datenträger-358 | etText | diskett | andmekandja | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0171 | b2-Dealer-361 | etText | nartkootikumide illegaalne müüja | illegaalne narkootikumide müüja | MEDIUM | ORTHOGRAPHY | PENDING | | |
| ET-B2-0172 | b2-dehnen-367 | etText | venitama • sirutama • venima • sirutuma • vinduma | venitama • sirutama • venima • sirutuma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0173 | b2-dementieren-374 | etText | teavet tagasi kutsuma | ümber lükkama • eitama | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0174 | b2-derartig-380 | etText | selline • samasugune | selline • samasugune | LOW | ORTHOGRAPHY | PENDING | | |
| ET-B2-0175 | b2-diejenige-397 | etText | nõnda | see | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0176 | b2-dingen-402 | etText | sõlmima kokkulepet | palkama • tööle võtma | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0177 | b2-Dörrgemüse-421 | etText | kuivatatud juurviljad | kuivatatud köögiviljad | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0178 | b2-Dotterblume-428 | etText | tulikas | kullerkupp | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0179 | b2-Dragee-429 | etText | draažee | dražee | MEDIUM | ORTHOGRAPHY | PENDING | | |
| ET-B2-0180 | b2-Drehung-439 | etText | pöörlemine • pöörde | pöörlemine • pööre | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0181 | b2-Drossel-447 | etText | kuldnokk | rästas | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0182 | b2-drosseln-448 | etText | kägistama • lämmatama | kägistama • lämmatama • piirama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0183 | b2-Dunst-466 | etText | aur • aurud • eritis • ummehtus • udu • sudu | aur • aurud • udu • sudu | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0184 | b2-durchbringen-471 | etText | läbi viima • välja kannatama • saavutama • välja ravima • raiskama | läbi viima • läbi aitama • saavutama • välja ravima • raiskama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0185 | b2-durchmachen-479 | etText | üle elama • välja võtma • lõpetama | üle elama • läbi tegema • lõpetama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0186 | b2-durchsetzen-486 | etText | läbi viima • saavutama | läbi suruma • saavutama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0187 | b2-Dürre-489 | etText | kuivus | põud | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0188 | b2-edel-497 | etText | õilis • ülev • aadlik | õilis • ülev • aadellik | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0189 | b2-Eheberatung-501 | etText | pereabi nõustamine | abielunõustamine | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0190 | b2-Eheschließung-504 | etText | abielu • laulumine | abiellumine • laulatamine | HIGH | ORTHOGRAPHY | PENDING | | |
| ET-B2-0191 | b2-ehren-505 | etText | austama • lugu pidama • auhindama | austama • lugu pidama • au sees hoidma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0192 | b2-ehrenamtlich-507 | etText | tasuta • auülesannet täites | vabatahtlikult • auameti korras | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0193 | b2-Ehrenpflicht-509 | etText | auülesanne | aukohustus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0194 | b2-eigenhändig-524 | etText | isetehtud | oma käega tehtud | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0195 | b2-einfassen-540 | etText | sisaldama • raamima • kinnitama | ääristama • raamima • ehtesse kinnitama | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0196 | b2-einflussreich-541 | etText | mõjukas • muljetavaldav | mõjukas | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0197 | b2-einfrieren-543 | etText | külmutama • sisse külmutama • katkestama | külmutama • peatama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0198 | b2-eingehend-550 | etText | põhjalik • pisiasjaline • sissetulev | põhjalik • üksikasjalik • sissetulev | LOW | NATURALNESS | PENDING | | |
| ET-B2-0199 | b2-eingleisig-557 | etText | monorööpa- | üherööpmeline | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0200 | b2-eingrenzen-558 | etText | piirama • eraldama | piirama • piiritlema | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0201 | b2-Einigkeit-561 | etText | üksus • ühtsus • üksmeel | ühtsus • üksmeel | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0202 | b2-einleiten-566 | etText | sisestama | sisse juhatama • algatama | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0203 | b2-einliefern-568 | etText | sisse tooma • kohale tooma | sisse andma • (haiglasse) toimetama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0204 | b2-einmachen-569 | etText | konserveerima • marineerima • keetma | konserveerima • marineerima • moosiks keetma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0205 | b2-einüben-589 | etText | õppima • lavastama | harjutama • selgeks õppima | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0206 | b2-eitel-605 | etText | auahne • ülbe • edev • pinnapealne • tühine • näidislik | edev • ennasttäis • asjatu • tühine | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0207 | b2-entbehren-616 | etText | läbi ajama • kannatama • puuduma | läbi ajama • ilma olema • puudust kannatama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0208 | b2-entehren-619 | etText | au röövima • häbistama | au teotama • häbistama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0209 | b2-enterben-621 | etText | pärandit ära võtma | pärandist ilma jätma | LOW | NATURALNESS | PENDING | | |
| ET-B2-0210 | b2-entfallen-622 | etText | välja kukkuma • unustuma | ära jääma • välja langema • ununema | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0211 | b2-entfalten-623 | etText | lahti keerama • lahti voltima • arendama • laiendama | lahti rullima • lahti voltima • arendama • laiendama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0212 | b2-sich entfalten-624 | etText | avanema • vabanema • arenema • laienema | avanema • arenema • õitsele puhkema • välja kujunema | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0213 | b2-enthüllen-630 | etText | avastama • avama | paljastama • avalikustama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0214 | b2-entmutigen-637 | etText | julgust võtma | julgust vähendama • heidutama | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0215 | b2-Entwerter-647 | etText | pilettempler | piletikomposter | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0216 | b2-Erachten-660 | etText | mõtted • arusaam | arvamus • hinnang | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0217 | b2-Erbauer-662 | etText | kraana | ehitaja • rajaja | CRITICAL | TRANSLATION | PENDING | | |
| ET-B2-0218 | b2-erbrechen-664 | etText | lahti murdma • sisse murdma | oksendama | CRITICAL | TRANSLATION | PENDING | | |
| ET-B2-0219 | b2-Erdrutsch-667 | etText | varing | maalihe | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0220 | b2-erlangen-682 | etText | ulatuma • saavutama • omandama | saavutama • omandama • kätte saama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0221 | b2-Erlass-683 | etText | korraldus • käsk • dekreet • vallandamine | korraldus • käsk • dekreet • võlast vabastamine | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0222 | b2-erlassen-684 | etText | väljastama • vallandama • vabastama | välja andma • vabastama • maha kandma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0223 | b2-erleiden-687 | etText | kannatama • üle elama • saama alistatud | kannatama • üle elama • lüüasaamist kannatama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0224 | b2-Eröffnung-695 | etText | avamine • avastamine • postkaart • teadaanne • avastus | avamine • pidulik avamine • avasõna | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0225 | b2-Erreger-700 | etText | haigustekitaja • viirus | haigustekitaja | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0226 | b2-ersehen-709 | etText | nägema • märkama | välja lugema • järeldama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0227 | b2-ertönen-716 | etText | kõlama hakkama | kõlama • kostma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0228 | b2-Fachabitur-746 | etText | lõpetatud kutseõpe | erialane küpsustunnistus | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0229 | b2-Fahrdamm-752 | etText | sõidutee • sillutis | sõidutee | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0230 | b2-fahrlässig-754 | etText | hooletu • pealiskaudne | hooletu | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0231 | b2-Falke-755 | etText | kull | pistrik | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0232 | b2-Faulbaum-771 | etText | toomingas | paakspuu | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0233 | b2-Fessel-781 | etText | kett • ahelad | kett • köidik | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0234 | b2-Fetzen-786 | etText | räbalad | räbal • ribad | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0235 | b2-fliederfarben-800 | etText | lilla värvi | sirelililla | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0236 | b2-Flussarm-811 | etText | hargjõgi | jõeharu | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0237 | b2-Flussbett-812 | etText | sängi (jõe) | jõesäng | HIGH | GRAMMAR | PENDING | | |
| ET-B2-0238 | b2-freilich-831 | etText | muidugi • kahtlemata • aga • ainult | muidugi • kahtlemata • aga | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0239 | b2-freisprechen-834 | etText | õigustama | õigeks mõistma | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0240 | b2-fremdgehen-836 | etText | ebalojaalseks muutuma | truudust murdma | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0241 | b2-friedfertig-837 | etText | rahumeelne • sallija | rahumeelne • rahuarmastav | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0242 | b2-fristlos-838 | etText | tähtajatu | etteteatamistähtajata | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0243 | b2-Führernatur-847 | etText | liidritüüp • liider | liidri loomus • juhivõimed | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0244 | b2-Funkstation-851 | etText | saatejaam | raadiojaam | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0245 | b2-Funkstörung-852 | etText | ülekandehäired | raadiosidehäire | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0246 | b2-Funktionär-854 | etText | aktivist • töötaja | funktsionäär | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0247 | b2-Furche-855 | etText | vagu • kortsujoon | vagu • korts | LOW | NATURALNESS | PENDING | | |
| ET-B2-0248 | b2-gängig-863 | etText | käiv | levinud • tavapärane | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0249 | b2-Gasableser-870 | etText | gaasiarvesti | gaasinäidu lugeja | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0250 | b2-gebrechlich-877 | etText | nõrk • kidur • vilets • vigane • vigadega | nõrk • kidur • vilets • põdur | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0251 | b2-gedeihen-880 | etText | hästi õnnestuma • õnnestuma • õitsema | edenema • õitsema • hästi kasvama | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0252 | b2-gedenken-881 | etText | kavatsema • meenutama • mainima | kavatsema • meenutama • mälestama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0253 | b2-Gefährte-884 | etText | liige | kaaslane • seltsiline | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0254 | b2-Gefallen-885 | etText | meeldivus | meeldimine • heameel | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0255 | b2-gefällig-886 | etText | meeldiv • teenistusvalmis • lahke | meeldiv • vastutulelik • lahke | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0256 | b2-gelaunt-903 | etText | meeleolu | meeleolus | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0257 | b2-Geliebte-910 | etText | kallis • armastatud • lemmik | armastatu (mees) • kallim | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0258 | b2-Gemisch-918 | etText | segu • segamini • kokteil | segu • segum • kokteil | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0259 | b2-Gemüt-920 | etText | iseloom • loomus • mõtted | meel • loomus • iseloom | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0260 | b2-geraten-935 | etText | sattuma • jõudma • alistuma • õnnestuma • loobuma | sattuma • õnnestuma | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0261 | b2-Geratewohl-936 | etText | hea õnn | juhus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0262 | b2-Gerede-938 | etText | jutt • kõned • kuulujutud | jutt • lobisemine • kuulujutud | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0263 | b2-Gerippe-940 | etText | luukere • korjus • karkass | luukere • karkass | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0264 | b2-Gesamtzahl-942 | etText | kogusumma | koguarv | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0265 | b2-Geschwätz-950 | etText | lobisemine • valetamine • lobajutt | lobisemine • tühi jutt • lobajutt | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0266 | b2-Gesinnung-958 | etText | vaated • meeleolu | vaated • hoiak | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0267 | b2-Gestein-964 | etText | kaljurahn | kivim | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0268 | b2-getüpfelt-969 | etText | punktiirjooneline | täpiline | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0269 | b2-Gewässer-975 | etText | veed | veekogu | LOW | NATURALNESS | PENDING | | |
| ET-B2-0270 | b2-gewieft-978 | etText | karastunud • kaval | kaval • nutikas | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0271 | b2-Gewissheit-980 | etText | selgus • kindlus | kindlus • veendumus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0272 | b2-Gezeiten-981 | etText | tõus-mõõn | tõus ja mõõn | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0273 | b2-Gipsverband-989 | etText | gipsplaastr | kipsiside | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0274 | b2-Glatze-995 | etText | paljas peanahk | kiilaspäisus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0275 | b2-Stirnglatze-996 | etText | avatud laup | otsmiku kiilaspäisus | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0276 | b2-Gleichnis-998 | etText | sarnasus | tähendamissõna • võrdum | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0277 | b2-gleiten-999 | etText | libisema • planeerima | libisema • liuglema | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0278 | b2-gliedern-1001 | etText | jagama | liigendama • jaotama | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0279 | b2-gnädig-1008 | etText | armulik • austatud | armuline • halastav | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0280 | b2-grauen-1022 | etText | kuduma | koitma | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0281 | b2-Grußwort-1041 | etText | lühike ametlik kõne | tervituskõne | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0282 | b2-Günstling-1044 | etText | lemmik • soositav | lemmik • soosik | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0283 | b2-gurgeln-1045 | etText | kurku • suud loputama | kuristama • suud loputama | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0284 | b2-Güte-1048 | etText | heasüdamlikkus • kvaliteet • kasu | heasüdamlikkus • kvaliteet | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0285 | b2-haaren-1053 | etText | sulgima (lindudel) | karva ajama • sulgima | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0286 | b2-Hängebrücke-1062 | etText | vantsild | rippsild | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0287 | b2-Hängsel-1063 | etText | õmmeldud riidepuu | õmmeldud riputusaas | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0288 | b2-Harsch-1067 | etText | hangelumi | lumekoorik | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0289 | b2-Haushaltung-1071 | etText | majapidamisõpetus | majapidamine | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0290 | b2-Heilkunde-1081 | etText | ravi • meditsiin | arstiteadus • meditsiin | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0291 | b2-Heimkehr-1086 | etText | koju • kodumaale naasmine | kojutulek • kodumaale naasmine | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0292 | b2-Heimwerker-1087 | etText | kodune käsitööline | kodumeister | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0293 | b2-Hemmung-1092 | etText | takistus • viivitus | takistus • pidurdus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0294 | b2-hingeben-1118 | etText | ära andma • laenuks andma | ära andma • pühenduma | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0295 | b2-Hinsicht-1121 | etText | teade | aspekt • seisukoht | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0296 | b2-Hinterhalt-1124 | etText | peidik | varitsus | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0297 | b2-hinterziehen-1125 | etText | raha omastama • makse mitte tasuma | raha omastama • maksudest kõrvale hoidma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0298 | b2-hitzig-1131 | etText | kuum • õhin • järsk • kiiresti vihastuv | kuum • tuline • äge • kiiresti vihastuv | HIGH | GRAMMAR | PENDING | | |
| ET-B2-0299 | b2-hochwertig-1146 | etText | kõrgväärtuslik | kvaliteetne | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0300 | b2-holpern-1150 | etText | raputama • vappuma | hüplema • rappuma | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0301 | b2-in flagranti-1158 | etText | tabama keelatud teo pealt | teolt tabama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0302 | b2-Kapazität-1168 | etText | tootlikkus • võimsus • maht | mahutavus • võimsus • suutlikkus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0303 | b2-Karrierefrau-1174 | etText | karjääri tegev naine | karjäärinaine | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0304 | b2-Kaufkraft-1175 | etText | raha • ka isiku ostujõud | ostujõud | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0305 | b2-Konsequenz-1192 | etText | järjekindlus • järjekord • järeldus • tagajärg | järjekindlus • järeldus • tagajärg | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0306 | b2-korrumpieren-1199 | etText | altkäemaksu andma | ära ostma • korrumpeerima | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0307 | b2-korrupt-1200 | etText | ostetav • altkäemaksuga mõjutatav | korruptne • äraostetav | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0308 | b2-Laie-1205 | etText | diletant | võhik • asjaarmastaja | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0309 | b2-Laufwerk-1222 | etText | mootor • ajav jõud | mootor • ajam | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0310 | b2-Lehrstuhl-1228 | etText | katedra | õppetool | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0311 | b2-Leichenhalle-1231 | etText | kabel kalmistul | surnukuur | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0312 | b2-lispeln-1250 | etText | sosistama • pudistama | susistama • pudistama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0313 | b2-Marssonde-1289 | etText | Marsi-sond | Marsisond | MEDIUM | ORTHOGRAPHY | PENDING | | |
| ET-B2-0314 | b2-maßlos-1296 | etText | mõõtmatu • lõputu | mõõdutundetu • piiritu | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0315 | b2-Meerenge-1301 | etText | merekitsus | väin | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0316 | b2-menschenscheu-1307 | etText | ebasotsiaalne • arg | inimpelglik • inimestest hoiduv | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0317 | b2-Milbe-1313 | etText | puuk | lest | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0318 | b2-militärfrei-1319 | etText | ajateenistuskõlbmatu | ajateenistusest vabastatud | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0319 | b2-minderwertig-1322 | etText | vähene väärtusega | väheväärtuslik | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0320 | b2-Müllentsorgung-1339 | etText | jäätmete hävitamine | jäätmete kõrvaldamine | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0321 | b2-namens-1361 | etText | eesnimeliselt • perekonnanimeliselt | nimel • nimega | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0322 | b2-Nesselfieber-1372 | etText | nõgesvõrk (haigus) | nõgestõbi | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0323 | b2-neuerdings-1374 | etText | hiljuti • neil päevil • uuesti | hiljuti • neil päevil • viimasel ajal | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0324 | b2-Niederschlag-1383 | etText | sademed | sademed • sete | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0325 | b2-Nutzeffekt-1391 | etText | kasuteguri koefitsient | kasutegur | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0326 | b2-Nutzholz-1392 | etText | kasutusmets | tarbepuit | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0327 | b2-Ölbohrung-1404 | etText | naftapuurauk | naftapuurimine | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0328 | b2-Ölgewinnung-1405 | etText | naftatootmine | nafta ammutamine | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0329 | b2-Ölpest-1407 | etText | vee ja ranniku naftareostus | naftareostus vees ja rannikul | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0330 | b2-Operator-1410 | etText | suurarvutite hooldusspetsialist | operaator | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0331 | b2-Pachtvertrag-1423 | etText | üürileping | rendileping | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0332 | b2-pachten-1424 | etText | üürima | rentima | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0333 | b2-Pendelverkehr-1439 | etText | kohalik eeslinnaliiklus | pendelliiklus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0334 | b2-Pfandschein-1445 | etText | pandimärk | pandipilet | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0335 | b2-Pilotstudie-1455 | etText | uurimissarja sissejuhatus | pilootuuring | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0336 | b2-Possen-1462 | etText | farss • naljamäng • jäme nali | jäme nali • tembutus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0337 | b2-prägnant-1465 | etText | eredalt väljendunud | tabav • lühidalt ja selgelt väljendatud | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0338 | b2-quittieren-1484 | etText | vastuvõtmist allkirjastama | kättesaamist kinnitama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0339 | b2-ranzig-1492 | etText | hallitanud maitsega • kibedavõitu (koore, rasva, või kohta) | rääsunud • kibedavõitu (koore, rasva ja või kohta) | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0340 | b2-Regenfront-1512 | etText | vihmavöönd | vihmafront | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0341 | b2-relevant-1519 | etText | märkimisväärne • tähtis | asjakohane • tähtis | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0342 | b2-rücksichtslos-1532 | etText | hooletu • jäme • armutu | hoolimatu • jäme • armutu | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0343 | b2-rückständig-1533 | etText | hilinenud • maksega viivituses | mahajäänud • maksetega võlgnevuses | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0344 | b2-sächlich-1544 | etText | gram. neutraalne sugu | gram. kesksugu | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0345 | b2-Sandbank-1548 | etText | madalik | liivamadal | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0346 | b2-Satellit-1551 | etText | poliitiline satelliit • astr. kaaslane | poliitiline satelliit • astronoomiline satelliit | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0347 | b2-Schadenersatz-1556 | etText | materiaalne hüvitis kahju eest | kahjuhüvitis | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0348 | b2-Schaffen-1558 | etText | looming • teos • tegevus • loomine | looming • loometöö • tegevus • loomine | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0349 | b2-Scheitel-1571 | etText | juuksejoon • lagi (pea) | juukselahk • pealagi | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0350 | b2-scheitern-1572 | etText | ebaõnnestuma • lagunema | ebaõnnestuma • luhtuma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0351 | b2-Schieber-1577 | etText | riiv • polt • spekulant | riiv • siiber • spekulant | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0352 | b2-schlafwandeln-1583 | etText | olema unerändaja | unes kõndima | HIGH | GRAMMAR | PENDING | | |
| ET-B2-0353 | b2-Schmuggel-1596 | etText | salakaup | salakaubandus | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0354 | b2-Schnappschuss-1597 | etText | hetkevõte fotol | hetktõmmis | LOW | NATURALNESS | PENDING | | |
| ET-B2-0355 | b2-Bittschrift-1602 | etText | palve | palvekiri | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0356 | b2-schrill-1603 | etText | kimeda • lõikav | kime • lõikav | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0357 | b2-schroff-1604 | etText | järsk • kalju • karm • terav • ebasõbralik | järsk • karm • terav • ebasõbralik | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0358 | b2-Schuldschein-1606 | etText | võlakiri | võlatunnistus | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0359 | b2-Schwarm-1612 | etText | kirg • vaimustus | parv • sülem | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0360 | b2-Schwarze-1615 | etText | tumedanahaline inimene | mustanahaline inimene | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0361 | b2-Schwerathletik-1620 | etText | sp. tõstespordid | raskejõustik | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0362 | b2-Seenot-1624 | etText | avariiolukord merel | hädaseisund merel | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0363 | b2-Naturseide-1629 | etText | loomulik siid | looduslik siid | LOW | NATURALNESS | PENDING | | |
| ET-B2-0364 | b2-Selbstgefühl-1631 | etText | enesekindlus | eneseväärtustunne | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0365 | b2-Sonderausgabe-1656 | etText | raamatu erilaadumine • ajalehe erinumber • margi eriväljalase | raamatu eriväljaanne • ajalehe erinumber • margi eriväljaanne | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0366 | b2-Sorgenkind-1660 | etText | hoolealune laps | murelaps | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0367 | b2-spärlich-1666 | etText | tühine • ihne • harv | napp • hõre • vähene | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0368 | b2-Stahlwerk-1692 | etText | terasevalukoda | terasetehas | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0369 | b2-Strafanzeige-1705 | etText | kriminaalasja algatamine kellegi vastu | kuriteoteade | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0370 | b2-streitbar-1708 | etText | tülinorija | tülivõimeline | HIGH | GRAMMAR | PENDING | | |
| ET-B2-0371 | b2-Streitkräfte-1709 | etText | riigi kõik sõjalised organisatsioonid ja väed | relvajõud | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0372 | b2-Tagebau-1721 | etText | maavarade karjääripõline kaevandamine | pealmaakaevandamine | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0373 | b2-Töpferscheibe-1736 | etText | pottsepakäi | potikeder | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0374 | b2-treuherzig-1750 | etText | südamlik | siiras ja lihtsameelne | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0375 | b2-Triumphzug-1754 | etText | triumfirong | võidurongkäik | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0376 | b2-überhören-1769 | etText | hooletusest mitte kuulma • end mitte kuulvana teesklema | tähelepanematusest kuulmata jätma • kuulmatust teesklema | HIGH | GRAMMAR | PENDING | | |
| ET-B2-0377 | b2-überlassen-1770 | etText | jätma kellegi otsustada • käsutusse jätma • valikut lubama | kellegi otsustada jätma • käsutusse jätma • valida laskma | LOW | NATURALNESS | PENDING | | |
| ET-B2-0378 | b2-Übermüdung-1774 | etText | ülekurnatus | üleväsimus | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0379 | b2-überschätzen-1775 | etText | ümber hindama | üle hindama | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0380 | b2-überschreiten-1776 | etText | üle minema • rikkuma | ületama • seadust rikkuma | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0381 | b2-umdenken-1787 | etText | arvamust olukorrast sõltuvalt muutma | ümber mõtlema | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0382 | b2-umhören, sich-1791 | etText | kuulatlema | ringi küsitlema | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0383 | b2-umschließen-1797 | etText | sisse lülitama • hõlmama • ümbritsema | sulgema sisse • hõlmama • ümbritsema | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0384 | b2-umschreiben-1798 | etText | kirjeldama | ümber sõnastama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0385 | b2-umständlich-1803 | etText | väga pisike • liiga ulatuslik • koormav • keeruline | tülikas • liiga üksikasjalik • koormav • keeruline | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0386 | b2-unterbreiten-1835 | etText | selgitama • esitama | ette panema • esitama | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0387 | b2-Untertan-1848 | etText | kodanik | alam | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0388 | b2-untertauchen-1849 | etText | sukelduma • vee alla minema • kastma | sukelduma • vee alla minema • peitu minema | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0389 | b2-unüberlegt-1854 | etText | ettevaatamatu • kergemeelne | läbimõtlematu • kaalutlematu | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0390 | b2-verbittert-1873 | etText | pettunud | kibestunud | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0391 | b2-Verdruss-1877 | etText | vastumeelsus • pettumus • tusk | meelehärm • pahameel • tusk | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0392 | b2-sich verhören-1901 | etText | üle kuulama (proovi) | valesti kuulma | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0393 | b2-verhüten-1902 | etText | ära hoidma • hoiduma | ära hoidma • rasestumisvastaseid vahendeid kasutama | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0394 | b2-Verleih-1905 | etText | üür | laenutus • renditeenus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0395 | b2-Vermächtnis-1906 | etText | testament | pärand | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0396 | b2-Vermögen-1908 | etText | omand | vara | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0397 | b2-Vernehmung-1910 | etText | ülekuulamine politseis | ülekuulamine | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0398 | b2-verkommen-1916 | etText | alla käima • kaduma | alla käima • manduma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0399 | b2-verkraften-1918 | etText | moraalset jõudu säilitama, et millestki ebameeldivast üle saada | välja kannatama • üle elama | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0400 | b2-versagen-1934 | etText | keelduma • tagasi lükkama • mitte kuulama • teenimast keelduma • argaks jääma | ebaõnnestuma • üles ütlema • keelduma • tagasi lükkama • mitte kuuletuma | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0401 | b2-versöhnen-1940 | etText | leppima panema | lepitama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0402 | b2-verspielen-1942 | etText | kaotama (mängus) | mängides kaotama • maha mängima | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0403 | b2-verstauchen-1945 | etText | nihestama | välja väänama | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0404 | b2-verweilen-1956 | etText | peatuma (mõttes) | peatuma • viibima | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0405 | b2-Verwüstung-1965 | etText | hävitamine | laastamine | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0406 | b2-sich verzögern-1968 | etText | hilinema • venitama | hilinema • edasi lükkuma | HIGH | GRAMMAR | PENDING | | |
| ET-B2-0407 | b2-verzollen-1969 | etText | tolliima | tollima | MEDIUM | ORTHOGRAPHY | PENDING | | |
| ET-B2-0408 | b2-vollkommen-1980 | etText | täielik • täielikult • hoopis | täielik • täielikult • täiesti | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0409 | b2-vollzählig-1982 | etText | täisarvuline | täielikus koosseisus | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0410 | b2-Vorbildung-1992 | etText | eelteadmised • valmisolek | eelteadmised • ettevalmistus | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0411 | b2-vornherein-2001 | etText | just alguses | algusest peale | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0412 | b2-vorsätzlich-2003 | etText | teadlik • tahtlik | tahtlik | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0413 | b2-Wählscheibe-2024 | etText | telefoni valikuketas | telefoni valimisketas | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0414 | b2-Warenausgabe-2031 | etText | ostude kontroll ja väljastamine | kauba väljastamine | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0415 | b2-Wegstrecke-2039 | etText | teelõik • tükk | teelõik | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0416 | b2-Wehe-2041 | etText | luide • hang | sünnitusvalu • tuhu | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0417 | b2-Wehrpflicht-2043 | etText | ajateenistus | ajateenistuskohustus | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0418 | b2-Werkhalle-2055 | etText | tsehh | tootmishall | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0419 | b2-Windbeutel-2076 | etText | tuulelohe | tuuletasku | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0420 | b2-zürnen-2088 | etText | vihastama | vihastuma | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0421 | b2-zuschneiden-2094 | etText | lõikama (lõikeks) | sobivasse mõõtu lõikama | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0422 | b2-zutrauen-2097 | etText | ootama • võimeliseks pidama | võimeliseks pidama | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0423 | b2-Zuversicht-2098 | etText | usaldus | kindlustunne | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0424 | b2-sich-abwenden | study.translation | pöörduma millestki ära | millestki ära pöörduma | MEDIUM | NATURALNESS | PENDING | | |
| ET-B2-0425 | b2-sich-einpraegen | study.translation | meelde jätma | meelde jääma | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0426 | b2-sich-erweisen | study.translation | osutuma milleks | osutuma millekski | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0427 | b2-sich-fassen | study.translation | haarama • end koguma • end valitsema | end koguma • end valitsema | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0428 | b2-genosse | study.translation | liige | seltsimees | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0429 | b2-genossin | study.translation | liige (naine) | seltsimees (naine) | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0430 | b2-sich-gestalten | study.translation | kujunema milleks | kujunema | LOW | NATURALNESS | PENDING | | |
| ET-B2-0431 | b2-haube | study.examples[2].lv | ta avab auto mootorikapoti. | ta avab auto kapoti. | LOW | NATURALNESS | PENDING | | |
| ET-B2-0432 | b2-haube | study.examples[3].lv | mootorikapott on katki. | auto kapott on katki. | LOW | NATURALNESS | PENDING | | |
| ET-B2-0433 | b2-haube | study.examples[5].lv | pane kaas pajale kattena. | pane pajale kaas. | LOW | NATURALNESS | PENDING | | |
| ET-B2-0434 | b2-sich-herausbilden | study.translation | välja kujunema milleks | välja kujunema | LOW | NATURALNESS | PENDING | | |
| ET-B2-0435 | b2-sich-herausstellen | study.translation | selguma milleks | osutuma millekski | MEDIUM | TRANSLATION | PENDING | | |
| ET-B2-0436 | b2-leiden-study | study.translation | pikaajaline ja raske haigus | haigus • kannatused | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0437 | b2-neger | study.translation | neeger | neeger (vananenud ja halvustav) | MEDIUM | STUDY | PENDING | | |
| ET-B2-0438 | b2-sich-paaren | study.translation | paarduma millegaga | paarituma | HIGH | TRANSLATION | PENDING | | |
| ET-B2-0439 | b2-sich-vereinigen | study.translation | ühinema millegaga | ühinema millegagi | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0440 | b2-sich-versehen | study.translation | eksima • varustama millegaga | eksima • varustama millegagi | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0441 | b2-sich-versoehnen | study.translation | leppima millegaga | ära leppima kellegagi | HIGH | SEMANTICS | PENDING | | |
| ET-B2-0442 | b2-sich-verstellen | study.translation | teesklema keda | teesklema | MEDIUM | GRAMMAR | PENDING | | |
| ET-B2-0443 | b2-zuwider | study.examples[2].lv | see ei meeldi mulle / see kurvastab mind. | see ei meeldi mulle | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0444 | b2-zuwider | study.comparison[3].meaning | vaidlema • mitte nõustuma | vastu vaidlema • mitte nõustuma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0445 | b2-aendern | etMain | muutma • parandama | muutma | MEDIUM | SEMANTICS | PENDING | | |
| ET-B2-0446 | b2-aendern | study.translation | muutma • parandama | muutma | MEDIUM | SEMANTICS | PENDING | | |

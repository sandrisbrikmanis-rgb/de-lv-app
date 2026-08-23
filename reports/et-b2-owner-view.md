# ET–DE B2 — OWNER VIEW
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `d1ea2b05bde9d5a7d2854c8b83e634a48179185c`
**WORK_BRANCH:** `cursor/et-de-b2-full-audit-4a7c`
**Audit PR:** [#614](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/614)
**SCOPE:** ET–DE B2 (`data/et/b2.js`)
**Findings:** **389** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)
> OBJECT_COVERAGE = 2118/2118 (100%). DISCOVERY_COMPLETENESS = NOT_GUARANTEED.
> 702/702 does NOT mean all possible defects were found.
> **Atvēršana GitHub/Cursor:** pilns authoritative monolīts ir zemāk (MASTER §7.23). Papildus — **8 grupas** (pa 50) ērtākai navigācijai.
> **DE = STRICT READ-ONLY.** Production: `data/et/b2.js` + `www/data/et/b2.js`.
## GitHub atvēršana
| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-b2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-review-GITHUB.md) |
| OWNER README | [et-b2-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-review-README.md) |
| OWNER DECISIONS (indekss) | [et-b2-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions.md) |
| Audit JSON | [et-b2-full-audit.json](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-full-audit.json) |
## Grupas (pa 50 findingiem) — **sākt šeit**
| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–50 | 50 | [et-b2-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-view-group01.md) | [et-b2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group01.md) |
| 51–100 | 50 | [et-b2-owner-view-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-view-group02.md) | [et-b2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group02.md) |
| 101–150 | 50 | [et-b2-owner-view-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-view-group03.md) | [et-b2-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group03.md) |
| 151–200 | 50 | [et-b2-owner-view-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-view-group04.md) | [et-b2-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group04.md) |
| 201–250 | 50 | [et-b2-owner-view-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-view-group05.md) | [et-b2-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group05.md) |
| 251–300 | 50 | [et-b2-owner-view-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-view-group06.md) | [et-b2-owner-decisions-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group06.md) |
| 301–350 | 50 | [et-b2-owner-view-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-view-group07.md) | [et-b2-owner-decisions-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group07.md) |
| 351–389 | 39 | [et-b2-owner-view-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-view-group08.md) | [et-b2-owner-decisions-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b2-full-audit-4a7c/reports/et-b2-owner-decisions-group08.md) |
## Īsais saraksts (visi findingi)
- **ET-B2-0001** `STRUCT` · `study.count` · CRITICAL · Study count mismatch LV=60 ET=64
- **ET-B2-0002** `b2-hochwasser` · `entry[1145].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0003** `b2-hochwasser` · `entry[1145].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0004** `b2-hochwasser` · `entry[1145].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0005** `b2-nachdruck` · `entry[1349].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0006** `b2-nachdruck` · `entry[1349].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0007** `b2-nachdruck` · `entry[1349].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0008** `b2-zuweisen` · `entry[2100].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0009** `b2-zuweisen` · `entry[2100].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0010** `b2-zuweisen` · `entry[2100].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0011** `b2-zuwider` · `entry[2102].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0012** `b2-anbieten` · `entry[2113].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0013** `b2-anbieten` · `entry[2113].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-B2-0014** `b2-genosse` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0015** `b2-genosse` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0016** `b2-genosse` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0017** `b2-genosse` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0019** `b2-genosse` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0022** `b2-genosse` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0027** `b2-genosse` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0035** `b2-genosse` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0039** `b2-genossin` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0040** `b2-genossin` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0041** `b2-genossin` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0042** `b2-genossin` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0044** `b2-genossin` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0047** `b2-genossin` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0052** `b2-genossin` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0060** `b2-genossin` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0064** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0065** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0067** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0069** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0070** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0071** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0072** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0073** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0074** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0077** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0079** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0080** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0083** `b2-neger` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0091** `b2-pacht` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0092** `b2-pacht` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0093** `b2-pacht` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0094** `b2-pacht` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0095** `b2-pacht` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0096** `b2-pacht` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0102** `b2-pacht` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0104** `b2-pacht` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0106** `b2-pacht` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0109** `b2-pacht` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-B2-0110** `b2-anbelangen-13` · `etText` · MEDIUM · „Käima kohta“ on selles tähenduses ebaloomulik ja vigane; „anbelangen“ tähendab …
- **ET-B2-0111** `b2-angehen-19` · `etText` · MEDIUM · „Pöörduma vastu“ ei ole ründamise või vastandumise tähenduses loomulik eesti vas…
- **ET-B2-0112** `b2-Aktienkurs-21` · `etText` · LOW · Eesti keeles kirjutatakse see liitsõnana: „aktsiakurss“.
- **ET-B2-0113** `b2-angeblich-28` · `etText` · MEDIUM · „Angeblich“ väljendab väidetavust, mitte lihtsalt „justkui“ või „näiliselt“.
- **ET-B2-0114** `b2-abbringen-36` · `etText` · MEDIUM · „Hoiatama“ tähendab hoiatamist, mitte kellegi heidutamist või millegi ärahoidmis…
- **ET-B2-0115** `b2-abgesehen-44` · `etText` · HIGH · „Abgesehen“ tähendab „välja arvatud“ või „kõrvale jättes“, mitte „kuigi“.
- **ET-B2-0116** `b2-abgetan-46` · `etText` · MEDIUM · Teine vaste „korraldatud“ tähendab organiseeritud, mitte lõpetatud või lahendatu…
- **ET-B2-0117** `b2-abhören-49` · `etText` · MEDIUM · „Abhören“ tähendab sihipärast kuulamist või pealtkuulamist; üldine „kuulama“ on …
- **ET-B2-0118** `b2-ableiten-50` · `etText` · MEDIUM · Esimene vaste „juhtima“ ei väljenda vedeliku või energia ärajuhtimise tähendust.
- **ET-B2-0119** `b2-Abnutzung-52` · `etText` · MEDIUM · „Kulu” tähendab eeskätt kulu või tarbimist, mitte kulumist ega amortiseerumist.
- **ET-B2-0120** `b2-Absatzmarkt-56` · `etText` · MEDIUM · „Müügiturg” on saksa Absatzmarkt loomulikum ja tavapärasem eestikeelne vaste.
- **ET-B2-0121** `b2-abtragen-71` · `etText` · MEDIUM · Sulund „(kandes)” on ebaloomulik ja ei kuulu vaste tähendusse; „kulutama” katab …
- **ET-B2-0122** `b2-affig-80` · `etText` · HIGH · „Affig” tähendab ebaloomulikult edvistavat või afekteeritud, mitte lihtsalt silm…
- **ET-B2-0123** `b2-Anorak-87` · `etText` · MEDIUM · „Dressijakk” tähendab spordidressi jakki; Anorak on üldisem kapuutsiga jope või …
- **ET-B2-0124** `b2-Aster-92` · `etText` · HIGH · Taime nimetus on eesti keeles „aster”; „astra” ei ole siin korrektne ainsuse nim…
- **ET-B2-0125** `b2-Ausbeutung-96` · `etText` · MEDIUM · Inimeste või ressursside ärakasutamise tähenduses on eesti keeles tavapärane „ek…
- **ET-B2-0126** `b2-Äußerlichkeit-103` · `etText` · MEDIUM · „Väline sära” tähendab välist hiilgust, kuid Äußerlichkeit tähendab välisust või…
- **ET-B2-0127** `b2-Äußerung-104` · `etText` · MEDIUM · „Avaldumine” ja „ilming” ei tähenda tavaliselt inimese sõnalist väljendust või a…
- **ET-B2-0128** `b2-aussetzen-105` · `etText` · MEDIUM · „Eksponeerima” on peamiselt näitamiseks välja panema ning „astuma” ei anna nelja…
- **ET-B2-0129** `b2-aussichtslos-106` · `etText` · MEDIUM · „Väljavaadeteta” ei ole loomulik eestikeelne vaste; tavapärane on „väljavaatetu”…
- **ET-B2-0130** `b2-ausstatten-108` · `etText` · MEDIUM · „Vormistama” tähendab dokumentide vormistamist, mitte millegi varustamist või si…
- **ET-B2-0131** `b2-austragen-112` · `etText` · LOW · Üksi „kandma” on esimese tähenduse jaoks liiga üldine; siin on mõte midagi laial…
- **ET-B2-0132** `b2-austreten-114` · `etText` · MEDIUM · „Sisse tallama” tähendab millegi sisse või pinnasesse tallamist, mitte saksa aus…
- **ET-B2-0133** `b2-auswärtig-115` · `etText` · LOW · „Välisasjade” on üksinda genitiivne sõnaühendi osa, mitte loomulik iseseisev ees…
- **ET-B2-0134** `b2-ausweisen-117` · `etText` · LOW · Kaks esimest vastet on identsed ega erista väljasaatmise ja väljatõrjumise tähen…
- **ET-B2-0135** `b2-auszeichnen-120` · `etText` · MEDIUM · Üldine „andma” ei väljenda tähendust „millegi poolest eristama või esile tõstma”…
- **ET-B2-0136** `b2-Schwebebalken-123` · `etText` · HIGH · Schwebebalken on võimlemises standardterminina „võimlemispoom”, mitte „tasakaalu…
- **ET-B2-0137** `b2-Blutbank-125` · `etText` · MEDIUM · „Verevaru” tähendab verevaru, kuid Blutbank on asutus või süsteem ehk „verepank”…
- **ET-B2-0138** `b2-Baugrube-142` · `etText` · MEDIUM · Baugrube on ehituseks rajatud süvend või kaevik; „ehituskraav” seostub pigem pik…
- **ET-B2-0139** `b2-bebauen-146` · `etText` · MEDIUM · Maa puhul tähendab bebauen eeskätt harima või hoonestama; „töötlema” on liiga ül…
- **ET-B2-0140** `b2-befallen-148` · `etText` · MEDIUM · „Peale tulema” ei ole loomulik vaste tähendusele „kedagi tabama või kedagi vallu…
- **ET-B2-0141** `b2-beispiellos-163` · `etText` · MEDIUM · „Nähtamatu” tähendab nähtamatut, mitte enneolematut või pretsedenditut.
- **ET-B2-0142** `b2-beistimmen-166` · `etText` · MEDIUM · „Beistimmen” tähendab kellegagi nõustumist või millegi heakskiitmist, mitte kaas…
- **ET-B2-0143** `b2-Straßenbelag-174` · `etText` · LOW · Tee või tänava pinnakatte tavapärane eestikeelne termin on „teekate”.
- **ET-B2-0144** `b2-belästigen-177` · `etText` · MEDIUM · „Belästigen” tähendab häirima, tülitama või ahistama; „koormama” tähendab pigem …
- **ET-B2-0145** `b2-beleibt-181` · `etText` · MEDIUM · „Täielik” tähendab complete/full, mitte inimest kirjeldavat tüsedat või kogukat.
- **ET-B2-0146** `b2-beredt-189` · `etText` · MEDIUM · „Beredt” tähendab väljendusrikast või sõnaosavat, „jutukas” aga peamiselt palju …
- **ET-B2-0147** `b2-bergen-192` · `etText` · LOW · Eestikeelne loomulikum sõnajärg on „saaki koristama”, mitte „koristama saaki”.
- **ET-B2-0148** `b2-beruhen-198` · `etText` · MEDIUM · „Asutatama” tähendab asutamist või rajamist, mitte millelgi põhine mist.
- **ET-B2-0149** `b2-beschimpfen-203` · `etText` · MEDIUM · „Laimama” tähendab kellegi kohta laimava info levitamist, mitte otseselt sõimami…
- **ET-B2-0150** `b2-besessen-207` · `etText` · MEDIUM · „Kinnisideeks muutunud” tähendab millekski kinnisideeks muutumist, mitte inimese…
- **ET-B2-0151** `b2-besiedeln-208` · `etText` · HIGH · „Besiedeln” tähendab ala asustama; „ümber asustama” lisab saksa verbis puuduva ü…
- **ET-B2-0152** `b2-bestürzt-218` · `etText` · MEDIUM · „Bestürzt” väljendab tugevat vapustust või kohkumist, mitte lihtsalt üllatust.
- **ET-B2-0153** `b2-beteuern-221` · `etText` · HIGH · „Beteuern” tähendab millegi tungivalt või veendunult kinnitamist; „tõendama” täh…
- **ET-B2-0154** `b2-Betriebsrat-224` · `etText` · HIGH · „Betriebsrat” on töötajate esindusorgan ehk töönõukogu, mitte ettevõtte juhtkonn…
- **ET-B2-0155** `b2-Betrug-225` · `etText` · MEDIUM · „Võltsing” tähendab võltsitud eset või dokumenti, mitte üldiselt pettust, mida „…
- **ET-B2-0156** `b2-Beute-227` · `etText` · LOW · „Võit” tähendab eeskätt võitu, samas kui „Beute” tähendab saaki või röövsaaki.
- **ET-B2-0157** `b2-bewähren-229` · `etText` · CRITICAL · Praegused vasted tähendavad kaitsmist või päästmist; „bewähren” tähendab end tõe…
- **ET-B2-0158** `b2-bezähmen-237` · `etText` · CRITICAL · Praegused vasted tähendavad nõidumist või lummamist; „bezähmen” tähendab taltsut…
- **ET-B2-0159** `b2-Binnenhandel-251` · `etText` · HIGH · „Binnenhandel” tähendab sisekaubandust; „siseturg” tähendab siseturgu, mis on te…
- **ET-B2-0160** `b2-Blutkonserve-274` · `etText` · MEDIUM · Eesti keeles on selle meditsiinilise mõiste loomulik vaste „verekonserv“, mitte …
- **ET-B2-0161** `b2-Bodensatz-280` · `etText` · LOW · Sõnavarakaardil peaks vaste olema algvormis; „pärme“ on partitiiv, samas kui mõi…
- **ET-B2-0162** `b2-Bootsmann-283` · `etText` · HIGH · Eestikeelne merendustermin on „pootsman“; kuju „bootsman“ ei vasta eesti õigekir…
- **ET-B2-0163** `b2-Borte-288` · `etText` · HIGH · „Äärekivi“ tähendab äärekivi või curb'i; Borte on dekoratiivne ääris, pael või k…
- **ET-B2-0164** `b2-Brandschaden-292` · `etText` · MEDIUM · „Tulekahjukahju“ on ebaloomulik ja tähenduslikult kohmakas liitsõna; mõte on tul…
- **ET-B2-0165** `b2-Brandanschlag-294` · `etText` · HIGH · „Süütamine“ tähendab tule süütamist, kuid Brandanschlag on sihilik süütamisrünna…
- **ET-B2-0166** `b2-Brandmal-295` · `etText` · MEDIUM · Brandmal tähendab põletusjälge või -armi; „põletus“ üksi tähendab pigem põletust…
- **ET-B2-0167** `b2-Brettsegeln-301` · `etText` · HIGH · „Purjelaud“ on vahend ehk laud; Brettsegeln tähistab purjelauasõitu ehk windsurf…
- **ET-B2-0168** `b2-bürgerlich-321` · `etText` · MEDIUM · Teine vaste „kodanike” on mitmuse omastav, mitte omadussõna või korrektne liitsõ…
- **ET-B2-0169** `b2-Datei-356` · `etText` · HIGH · Saksa „Datei” tähendab arvutifaili; „kartoteek” tähendab kaartide või kirjete re…
- **ET-B2-0170** `b2-Datenträger-358` · `etText` · HIGH · Datenträger tähendab üldiselt andmekandjat, mitte ainult disketti.
- **ET-B2-0171** `b2-Dealer-361` · `etText` · MEDIUM · Sõnas nartkootikumide on kirjaviga ning eestikeelne sõnajärg on ebaloomulik.
- **ET-B2-0172** `b2-dehnen-367` · `etText` · MEDIUM · Vinduma tähendab virelema või vinduma, mitte venitama ega venima.
- **ET-B2-0173** `b2-dementieren-374` · `etText` · HIGH · Dementieren tähendab väidet või teadet ümber lükkama, mitte teavet tagasi kutsum…
- **ET-B2-0174** `b2-derartig-380` · `etText` · LOW · Sõnas samasugune on kirjaviga: puudu on täht a.
- **ET-B2-0175** `b2-diejenige-397` · `etText` · HIGH · Diejenige tähendab 'see (naissoost isik või asi)', mitte 'nõnda'.
- **ET-B2-0176** `b2-dingen-402` · `etText` · HIGH · Dingen tähendab kellegi palkamist või tööle võtmist, mitte lihtsalt kokkuleppe s…
- **ET-B2-0177** `b2-Dörrgemüse-421` · `etText` · MEDIUM · Juurviljad tähendab eeskätt juurvilju, kuid saksa Gemüse hõlmab kõiki köögivilju…
- **ET-B2-0178** `b2-Dotterblume-428` · `etText` · HIGH · Dotterblume on kullerkupp; tulikas tähistab eesti keeles teist taime, võilillede…
- **ET-B2-0179** `b2-Dragee-429` · `etText` · MEDIUM · Eesti kirjakeeles on sõna kuju „dražee“, mitte „draažee“.
- **ET-B2-0180** `b2-Drehung-439` · `etText` · MEDIUM · Teine vaste peab olema nimetavas käändes; „pöörde“ on omastav vorm, mitte märksõ…
- **ET-B2-0181** `b2-Drossel-447` · `etText` · HIGH · Drossel tähendab rästast; kuldnokk on teine linnuliik, starling.
- **ET-B2-0182** `b2-drosseln-448` · `etText` · MEDIUM · Lisaks lämmatamisele tähendab drosseln ka võimsuse, kiiruse või hulga vähendamis…
- **ET-B2-0183** `b2-Dunst-466` · `etText` · MEDIUM · „eritis” tähendab eritist või väljutist, mitte saksa „Dunsti” ehk auru või udu.
- **ET-B2-0184** `b2-durchbringen-471` · `etText` · MEDIUM · „durchbringen” tähendab kellegi või millegi läbi aitamist; „välja kannatama” täh…
- **ET-B2-0185** `b2-durchmachen-479` · `etText` · MEDIUM · „välja võtma” tähendab välja võtma, mitte millegi läbielamist või läbimist.
- **ET-B2-0186** `b2-durchsetzen-486` · `etText` · MEDIUM · „durchsetzen” tähendab millegi läbisurumist või maksmapanekut; „läbi viima” tähe…
- **ET-B2-0187** `b2-Dürre-489` · `etText` · HIGH · „Dürre” tähendab põuda ehk pikaajalist sademete puudumist, mitte üldist kuivust.
- **ET-B2-0188** `b2-edel-497` · `etText` · MEDIUM · „aadlik” on nimisõna; omadussõnana on õige „aadellik”.
- **ET-B2-0189** `b2-Eheberatung-501` · `etText` · HIGH · „Eheberatung” tähendab abielu- või paarinõustamist; „pereabi nõustamine” on teis…
- **ET-B2-0190** `b2-Eheschließung-504` · `etText` · HIGH · „laulumine” tähendab laulmist; abielu sõlmimise tähenduses on õiged „abiellumine…
- **ET-B2-0191** `b2-ehren-505` · `etText` · MEDIUM · „auhindama” tähendab auhinna andmist, mitte austamist või au sees hoidmist.
- **ET-B2-0192** `b2-ehrenamtlich-507` · `etText` · MEDIUM · „ehrenamtlich” tähendab vabatahtlikult või auameti korras, mitte lihtsalt tasuta…
- **ET-B2-0193** `b2-Ehrenpflicht-509` · `etText` · MEDIUM · Ehrenpflicht tähendab aukohustust; auülesanne viitab pigem aukohustuse asemel ül…
- **ET-B2-0194** `b2-eigenhändig-524` · `etText` · HIGH · Iset tehtud tähendab isetehtud või omavalmistatud; eigenhändig tähendab oma käeg…
- **ET-B2-0195** `b2-einfassen-540` · `etText` · MEDIUM · Sisaldama tähendab sisaldama, mitte millegi ümber ääristamist; ehtetermin vajab …
- **ET-B2-0196** `b2-einflussreich-541` · `etText` · HIGH · Muljetavaldav tähendab impressive, mitte mõjuvõimas; see on einflussreichi tähen…
- **ET-B2-0197** `b2-einfrieren-543` · `etText` · MEDIUM · Sisse külmutama on ebaloomulik otsetõlge; raha või tegevuse puhul kasutatakse kü…
- **ET-B2-0198** `b2-eingehend-550` · `etText` · LOW · Pisiasjaline on selles tähenduses ebaloomulikum; tavapärane vaste on üksikasjali…
- **ET-B2-0199** `b2-eingleisig-557` · `etText` · HIGH · Monorööpa- tähendab monoraili ehk üherööpalist süsteemi; eingleisig tähendab ühe…
- **ET-B2-0200** `b2-eingrenzen-558` · `etText` · MEDIUM · „Eraldama” tähendab eraldamist, mitte tähenduse või ulatuse piiritlemist.
- **ET-B2-0201** `b2-Einigkeit-561` · `etText` · MEDIUM · „Üksus” tähendab eeskätt üksikut ühikut või struktuuriüksust, mitte üksmeelt või…
- **ET-B2-0202** `b2-einleiten-566` · `etText` · HIGH · „Einleiten” tähendab millegi alustamist või sissejuhatamist; „sisestama” tähenda…
- **ET-B2-0203** `b2-einliefern-568` · `etText` · MEDIUM · „Einliefern” tähendab inimese või saadetise asutusse üleandmist, sageli haiglass…
- **ET-B2-0204** `b2-einmachen-569` · `etText` · MEDIUM · Üldine „keetma” ei väljenda toidu säilitamiseks või moosiks valmistamist.
- **ET-B2-0205** `b2-einüben-589` · `etText` · HIGH · „Einüben” tähendab harjutamist või millegi selgeks õppimist; „lavastama” tähenda…
- **ET-B2-0206** `b2-eitel-605` · `etText` · HIGH · „Auahne”, „ülbe”, „pinnapealne” ja „näidislik” ei vasta täpselt sõna põhitähendu…
- **ET-B2-0207** `b2-entbehren-616` · `etText` · MEDIUM · „Puuduma” tähendab puudulik olema, mitte millestki ilma olema või ilma hakkama s…
- **ET-B2-0208** `b2-entehren-619` · `etText` · MEDIUM · „Au röövima” ei ole loomulik ega täpne eesti väljend; tähendus on kellegi au teo…
- **ET-B2-0209** `b2-enterben-621` · `etText` · LOW · Tähendus on arusaadav, kuid loomulikum ja täpsem vaste on „pärandist ilma jätma”…
- **ET-B2-0210** `b2-entfallen-622` · `etText` · MEDIUM · „Välja kukkuma” tähendab füüsiliselt kukkumist ega vasta tavapärasele tähendusel…
- **ET-B2-0211** `b2-entfalten-623` · `etText` · MEDIUM · „Lahti keerama” tähendab pigem lahti kruvimist; „entfalten” tähendab lahti rulli…
- **ET-B2-0212** `b2-sich entfalten-624` · `etText` · MEDIUM · „Vabanema” tähendab vabaks saama, mitte arenema või oma potentsiaali avaldama.
- **ET-B2-0213** `b2-enthüllen-630` · `etText` · MEDIUM · „Avastama” tähendab midagi esimest korda leidma ning „avama” avamist; mõte on pa…
- **ET-B2-0214** `b2-entmutigen-637` · `etText` · HIGH · „Julgust võtma” tähendab julgust koguma, seega on tähendus vastupidine sõnale „e…
- **ET-B2-0215** `b2-Entwerter-647` · `etText` · MEDIUM · „Piletitempler” ei ole tavapärane eesti vaste; pileti kehtetuks tegemise seade o…
- **ET-B2-0216** `b2-Erachten-660` · `etText` · MEDIUM · „Erachten” tähendab arvamust või hinnangut, mitte üldiselt mõtteid või arusaama.
- **ET-B2-0217** `b2-Erbauer-662` · `etText` · CRITICAL · „Kraana” tähendab tõsteseadet ega ole seotud ehitaja või rajajaga.
- **ET-B2-0218** `b2-erbrechen-664` · `etText` · CRITICAL · Praegused vasted tähendavad lahti või sisse murdma; „erbrechen” tähendab oksenda…
- **ET-B2-0219** `b2-Erdrutsch-667` · `etText` · HIGH · „Varing” on üldine kokkuvarisemine; „Erdrutsch” täpne eesti vaste on „maalihe”.
- **ET-B2-0220** `b2-erlangen-682` · `etText` · MEDIUM · „Ulatuma” tähendab ulatuma või küündima, mitte millegi saavutamist või omandamis…
- **ET-B2-0221** `b2-Erlass-683` · `etText` · MEDIUM · Erlass tähendab määrust või korraldust; „vallandamine” on siin eksitav tähendus.
- **ET-B2-0222** `b2-erlassen-684` · `etText` · MEDIUM · Seaduse või võla kohta ei tähenda „erlassen” vallandamist; sobivad „välja andma”…
- **ET-B2-0223** `b2-erleiden-687` · `etText` · MEDIUM · „Saama alistatud” on ebaloomulik ning tähendab pigem aktiivset alistamist, mitte…
- **ET-B2-0224** `b2-Eröffnung-695` · `etText` · HIGH · „Avastamine”, „postkaart” ja „avastus” tähendavad discovery või postcard, mitte …
- **ET-B2-0225** `b2-Erreger-700` · `etText` · MEDIUM · „Erreger” on üldmõiste haigustekitaja kohta ega tähenda tingimata viirust.
- **ET-B2-0226** `b2-ersehen-709` · `etText` · MEDIUM · „Etwas ersehen” tähendab kontekstist välja lugemist või järeldamist, mitte lihts…
- **ET-B2-0227** `b2-ertönen-716` · `etText` · MEDIUM · „Kõlama hakkama” lisab algamise tähenduse; ertönen tähendab heli kõlamist või ko…
- **ET-B2-0228** `b2-Fachabitur-746` · `etText` · HIGH · Fachabitur on erialane kõrgkooli sisseastumise kvalifikatsioon, mitte lõpetatud …
- **ET-B2-0229** `b2-Fahrdamm-752` · `etText` · MEDIUM · Fahrdamm tähendab sõiduteed, mitte üldiselt sillutist või teekattematerjali.
- **ET-B2-0230** `b2-fahrlässig-754` · `etText` · MEDIUM · Pealiskaudne tähendab „superficial” ega vasta saksa sõna tähendusele „hooletu/ne…
- **ET-B2-0231** `b2-Falke-755` · `etText` · HIGH · Kull tähendab eesti keeles hawk; Falke on pistrik ehk falcon.
- **ET-B2-0232** `b2-Faulbaum-771` · `etText` · HIGH · Faulbaum on paakspuu; toomingas tähendab bird cherry ja on teine taim.
- **ET-B2-0233** `b2-Fessel-781` · `etText` · MEDIUM · Teine vaste on mitmuses, kuigi saksa märksõna on ainsuses; „köidik” on täpsem ah…
- **ET-B2-0234** `b2-Fetzen-786` · `etText` · MEDIUM · Saksa märksõna on ainsuses; „räbalad” on ainult mitmus ja ei vasta märksõna põhi…
- **ET-B2-0235** `b2-fliederfarben-800` · `etText` · MEDIUM · „Lilla värvi” on üldine purple, kuid „fliederfarben” tähendab täpsemalt sirelili…
- **ET-B2-0236** `b2-Flussarm-811` · `etText` · MEDIUM · „Hargjõgi” tähistab pigem harunenud jõge või jõeharu; saksa Flussarm täpne vaste…
- **ET-B2-0237** `b2-Flussbett-812` · `etText` · HIGH · „Sängi” on käändevorm, mitte märksõna põhivorm; loomulik ja täpne vaste on liits…
- **ET-B2-0238** `b2-freilich-831` · `etText` · MEDIUM · Freilich tähendab siin „muidugi/kahtlemata” või vastandavat „aga”, mitte iseseis…
- **ET-B2-0239** `b2-freisprechen-834` · `etText` · HIGH · Õigustama tähendab põhjendama või õigustama; freisprechen tähendab süüdistatava …
- **ET-B2-0240** `b2-fremdgehen-836` · `etText` · HIGH · Fremdgehen tähendab eelkõige suhtes truudusetu olema või abielu rikkuma, mitte ü…
- **ET-B2-0241** `b2-friedfertig-837` · `etText` · MEDIUM · Sallija on salliv inimene; friedfertig tähendab rahumeelset või rahuarmastavat.
- **ET-B2-0242** `b2-fristlos-838` · `etText` · HIGH · Fristlos tähendab etteteatamistähtajata või ilma tähtajata lõpetamist, mitte üld…
- **ET-B2-0243** `b2-Führernatur-847` · `etText` · MEDIUM · Führernatur tähistab juhi loomust või juhtimisomadusi, mitte lihtsalt liidrit en…
- **ET-B2-0244** `b2-Funkstation-851` · `etText` · MEDIUM · Funkstation on raadiojaam või raadiosidejaam; saatejaam viitab pigem ringhääling…
- **ET-B2-0245** `b2-Funkstörung-852` · `etText` · MEDIUM · Funkstörung tähendab raadioside- või raadiohäiret; ülekandehäired on liiga üldin…
- **ET-B2-0246** `b2-Funktionär-854` · `etText` · HIGH · Funktionär on ametnik või organisatsiooni funktsionäär, mitte üldiselt aktivist …
- **ET-B2-0247** `b2-Furche-855` · `etText` · LOW · Kortsujoon on ebaloomulik; Furche tähistab kortsu või vagu.
- **ET-B2-0248** `b2-gängig-863` · `etText` · HIGH · Gängig tähendab tavaliselt levinud, tavapärast või üldkasutatavat; käiv tähendab…
- **ET-B2-0249** `b2-Gasableser-870` · `etText` · HIGH · Gasableser on gaasimõõtja näidu lugeja ehk inimene, mitte gaasiarvesti ise.
- **ET-B2-0250** `b2-gebrechlich-877` · `etText` · MEDIUM · „Vigane” ja „vigadega” tähendavad defektset või vigadega, mitte füüsiliselt nõrk…
- **ET-B2-0251** `b2-gedeihen-880` · `etText` · MEDIUM · „Gedeihen” tähendab edenemist ja head kasvamist; „õnnestuma” tähendab peamiselt …
- **ET-B2-0252** `b2-gedenken-881` · `etText` · MEDIUM · „Mainima” tähendab mainimist, mitte kellegi või millegi mälestamist, mis on „ged…
- **ET-B2-0253** `b2-Gefährte-884` · `etText` · HIGH · „Gefährte” tähendab kaaslast või seltsilist; „liige” tähendab organisatsiooni võ…
- **ET-B2-0254** `b2-Gefallen-885` · `etText` · MEDIUM · „Gefallen” tähendab meeldimist või heameelt; „meeldivus” tähistab pigem meeldiva…
- **ET-B2-0255** `b2-gefällig-886` · `etText` · MEDIUM · „Teenistusvalmis” tähendab teenistuseks valmis, mitte inimestele vastutulelikku …
- **ET-B2-0256** `b2-gelaunt-903` · `etText` · MEDIUM · Saksa „gelaunt” on omadussõna; „meeleolu” on nimisõna. Vastav eestikeelne omadus…
- **ET-B2-0257** `b2-Geliebte-910` · `etText` · MEDIUM · Meessoost nimisõnana tähendab „Geliebte” armastatut või kallimat; „lemmik” tähen…
- **ET-B2-0258** `b2-Gemisch-918` · `etText` · MEDIUM · „Segamini” on määrsõna või omadussõna, kuid saksa „Gemisch” ja teised vasted on …
- **ET-B2-0259** `b2-Gemüt-920` · `etText` · MEDIUM · „Gemüt” viitab inimese sisemisele loomusele või meelelaadile, mitte otseselt tem…
- **ET-B2-0260** `b2-geraten-935` · `etText` · HIGH · „alistuma” ja „loobuma” tähendavad alistumist ja loobumist, mitte saksa verbi ge…
- **ET-B2-0261** `b2-Geratewohl-936` · `etText` · MEDIUM · Geratewohl tähendab juhuslikkust või juhuse hooleks jätmist, mitte lihtsalt head…
- **ET-B2-0262** `b2-Gerede-938` · `etText` · MEDIUM · „kõned” tähendab kõnesid või telefonikõnesid, mitte Gerede tähenduses lobisemist…
- **ET-B2-0263** `b2-Gerippe-940` · `etText` · MEDIUM · „korjus” tähendab surnud looma või inimese keha, mitte luustikku ega karkassi.
- **ET-B2-0264** `b2-Gesamtzahl-942` · `etText` · HIGH · Gesamtzahl tähendab koguarvu ehk elementide koguhulka; „kogusumma” viitab summaa…
- **ET-B2-0265** `b2-Geschwätz-950` · `etText` · MEDIUM · Geschwätz on lobisemine või tühi jutt; „valetamine” tähendab teadlikult ebatõe r…
- **ET-B2-0266** `b2-Gesinnung-958` · `etText` · MEDIUM · Gesinnung tähendab inimese hoiakuid, veendumusi või maailmavaadet; „meeleolu” tä…
- **ET-B2-0267** `b2-Gestein-964` · `etText` · HIGH · Gestein tähendab kivimit või kivimainet; „kaljurahn” on üksik suur kivimürakas.
- **ET-B2-0268** `b2-getüpfelt-969` · `etText` · HIGH · Getüpfelt tähendab täpilist või täppidega kaetud; „punktiirjooneline” kirjeldab …
- **ET-B2-0269** `b2-Gewässer-975` · `etText` · LOW · Gewässer tähistab veekogu või veekogusid; „veed” on selles tähenduses liiga üldi…
- **ET-B2-0270** `b2-gewieft-978` · `etText` · MEDIUM · Gewieft tähendab kavalat, nutikat või elukogenult osavat; „karastunud” tähendab …
- **ET-B2-0271** `b2-Gewissheit-980` · `etText` · MEDIUM · „Selgus“ tähendab eeskätt clarity, mitte certainty; „kindlus“ ja „veendumus“ vas…
- **ET-B2-0272** `b2-Gezeiten-981` · `etText` · MEDIUM · Eesti keeles kasutatakse selle nähtuse nimetuses loomulikult ühendit „tõus ja mõ…
- **ET-B2-0273** `b2-Gipsverband-989` · `etText` · HIGH · „Gipsplaastr“ tähendab pigem kipsplaastrit; „Gipsverband“ on kipsiside või kipsl…
- **ET-B2-0274** `b2-Glatze-995` · `etText` · MEDIUM · „Paljas peanahk“ kirjeldab nähtavat peanahka, kuid „Glatze“ tähendab kiilaspäisu…
- **ET-B2-0275** `b2-Stirnglatze-996` · `etText` · HIGH · „Avatud laup“ ei tähenda kiilaspäisust; sõna viitab juuksepiiri taandumisele või…
- **ET-B2-0276** `b2-Gleichnis-998` · `etText` · HIGH · „Sarnasus“ tähendab similarity; „Gleichnis“ on tähendamissõna või võrdum.
- **ET-B2-0277** `b2-gleiten-999` · `etText` · MEDIUM · „Planeerima“ tähendab planning; liikumist õhus või pinnal tähistab siin „liuglem…
- **ET-B2-0278** `b2-gliedern-1001` · `etText` · MEDIUM · „Gliedern“ tähendab millegi liigendamist või struktureerimist; „jagama“ on liiga…
- **ET-B2-0279** `b2-gnädig-1008` · `etText` · MEDIUM · „Austatud“ tähendab respected, mitte gracious või merciful; teine vaste muudab t…
- **ET-B2-0280** `b2-grauen-1022` · `etText` · HIGH · „Kuduma“ tähendab weaving; „grauen“ tähenduses dawn on eesti keeles „koitma“.
- **ET-B2-0281** `b2-Grußwort-1041` · `etText` · MEDIUM · Tõlge tähendab üldist lühikest ametlikku kõnet ega anna edasi tervituse või terv…
- **ET-B2-0282** `b2-Günstling-1044` · `etText` · MEDIUM · Soositav on omadussõna; Günstling on nimisõna inimese kohta, keda mõjukas isik s…
- **ET-B2-0283** `b2-gurgeln-1045` · `etText` · HIGH · Kurku on siinses tõlkes vigane sõnaühendi fragment; saksa verb tähendab kuristam…
- **ET-B2-0284** `b2-Güte-1048` · `etText` · MEDIUM · Kasu tähendab benefit/profit, mitte Güte tähendustena headus, heatahtlikkus või …
- **ET-B2-0285** `b2-haaren-1053` · `etText` · MEDIUM · Praegune tõlge piirdub lindude sulgimisega; haaren tähendab üldiselt karvade või…
- **ET-B2-0286** `b2-Hängebrücke-1062` · `etText` · HIGH · Vantsild on tross-sild ehk cable-stayed bridge; Hängebrücke on ripp- ehk suspens…
- **ET-B2-0287** `b2-Hängsel-1063` · `etText` · HIGH · Riidepuu tähendab clothes hanger; Hängsel on rõivale õmmeldud riputusaas või aas…
- **ET-B2-0288** `b2-Harsch-1067` · `etText` · HIGH · Harsch tähendab külmunud kõva lumekoorikut; hangelumi on tuule kuhjatud või hang…
- **ET-B2-0289** `b2-Haushaltung-1071` · `etText` · MEDIUM · Majapidamisõpetus tähendab kodundusõpetust kui õppeainet; Haushaltung tähendab m…
- **ET-B2-0290** `b2-Heilkunde-1081` · `etText` · MEDIUM · Ravi tähendab treatment; Heilkunde viitab ravikunstile või meditsiiniteadusele k…
- **ET-B2-0291** `b2-Heimkehr-1086` · `etText` · MEDIUM · „Koju” tähendab suunda „koju”, mitte tagasipöördumist kui nimisõna.
- **ET-B2-0292** `b2-Heimwerker-1087` · `etText` · MEDIUM · „Kodune käsitööline” viitab pigem kodus käsitöö tegijale; Heimwerker on kodumeis…
- **ET-B2-0293** `b2-Hemmung-1092` · `etText` · MEDIUM · „Viivitus” tähendab viivitust, kuid Hemmung tähendab siin pidurdust, tõrget või …
- **ET-B2-0294** `b2-hingeben-1118` · `etText` · HIGH · „Laenuks andma” tähendab välja laenama, kuid hingeben tähendab ka end millelegi …
- **ET-B2-0295** `b2-Hinsicht-1121` · `etText` · HIGH · „Teade” tähendab sõnumit või teadet ega vasta Hinsicht tähendustele „aspekt” ja …
- **ET-B2-0296** `b2-Hinterhalt-1124` · `etText` · HIGH · Hinterhalt on varitsus või varitsusrünnak; „peidik” tähendab peidupaika.
- **ET-B2-0297** `b2-hinterziehen-1125` · `etText` · MEDIUM · Maksudest kõrvalehoidmine on tahtlik maksupettus, mitte lihtsalt maksete tasumat…
- **ET-B2-0298** `b2-hitzig-1131` · `etText` · HIGH · „Õhin” on nimisõna ega sobi omadussõnana; hitzig tähendab ka tulist või ägedat.
- **ET-B2-0299** `b2-hochwertig-1146` · `etText` · MEDIUM · Tähendab eeskätt kvaliteetset või kõrgeklassilist, mitte lihtsalt kõrge väärtuse…
- **ET-B2-0300** `b2-holpern-1150` · `etText` · MEDIUM · Holpern kirjeldab konarlikul pinnal hüplevat või rappuvat liikumist; raputama on…
- **ET-B2-0301** `b2-in flagranti-1158` · `etText` · MEDIUM · Eestikeelne püsiühend on „teolt tabama“; „keelatud teo pealt“ on ebaloomulik ja …
- **ET-B2-0302** `b2-Kapazität-1168` · `etText` · MEDIUM · Tootlikkus tähendab produktiivsust, mitte tavaliselt võimekust või maksimaalset …
- **ET-B2-0303** `b2-Karrierefrau-1174` · `etText` · MEDIUM · „Karjäärinaine“ on loomulik ja levinud vaste; praegune väljend on kohmakas.
- **ET-B2-0304** `b2-Kaufkraft-1175` · `etText` · HIGH · Kaufkraft tähendab ostujõudu, mitte raha; praegune esimene vaste on tähenduselt …
- **ET-B2-0305** `b2-Konsequenz-1192` · `etText` · MEDIUM · „Järjekord” tähendab järjestust, mitte Konsequenz tähendust; ülejäänud vasted on…
- **ET-B2-0306** `b2-korrumpieren-1199` · `etText` · HIGH · Praegune vaste tähendab altkäemaksu andmist; korrumpieren tähendab kellegi äraos…
- **ET-B2-0307** `b2-korrupt-1200` · `etText` · MEDIUM · Praegused vasted tähendavad peamiselt äraostetavat, kuid korrupt hõlmab ka otses…
- **ET-B2-0308** `b2-Laie-1205` · `etText` · MEDIUM · Laie tähendab mittespetsialisti või võhikut; „diletant” viitab pigem asjaarmasta…
- **ET-B2-0309** `b2-Laufwerk-1222` · `etText` · MEDIUM · „Ajav jõud” tähendab edasiviivat jõudu; Laufwerk tähendab tehnilist ajamit või m…
- **ET-B2-0310** `b2-Lehrstuhl-1228` · `etText` · HIGH · Ülikooli Lehrstuhl on õppetool või professuur; „katedra” tähendab pigem õppe- võ…
- **ET-B2-0311** `b2-Leichenhalle-1231` · `etText` · HIGH · Leichenhalle tähendab surnukuuri või surnusaali, mitte kalmistul asuvat kabelit.
- **ET-B2-0312** `b2-lispeln-1250` · `etText` · MEDIUM · „Sosistama” tähendab sosistamist; „susistama” tähistab kõnelemist susistades ehk…
- **ET-B2-0313** `b2-Marssonde-1289` · `etText` · MEDIUM · Estoniakeelne liitsõna kirjutatakse kokku; sidekriips on siin põhjendamatu.
- **ET-B2-0314** `b2-maßlos-1296` · `etText` · MEDIUM · Tähendus on pigem mõõdutundetu või ülemäärane, mitte sõna-sõnalt mõõtmatu või lõ…
- **ET-B2-0315** `b2-Meerenge-1301` · `etText` · HIGH · Meerenge tähendab eesti keeles standardterminina väina; „merekitsus” ei ole loom…
- **ET-B2-0316** `b2-menschenscheu-1307` · `etText` · MEDIUM · „Arg” tähendab kartlikku või julgetut, mitte inimestest hoiduvat; põhitähendus o…
- **ET-B2-0317** `b2-Milbe-1313` · `etText` · HIGH · Milbe on lest; „puuk” tähendab puuki ehk teistsugust ämblikulaadset.
- **ET-B2-0318** `b2-militärfrei-1319` · `etText` · MEDIUM · „Militärfrei” tähendab sõjaväeteenistusest vabastatut, mitte tingimata ajateenis…
- **ET-B2-0319** `b2-minderwertig-1322` · `etText` · MEDIUM · Praeguses vastes on käändeviga: „vähene väärtusega” ei ole korrektne ega loomuli…
- **ET-B2-0320** `b2-Müllentsorgung-1339` · `etText` · MEDIUM · Entsorgung tähendab jäätmete kõrvaldamist või käitlemist, mitte tingimata nende …
- **ET-B2-0321** `b2-namens-1361` · `etText` · HIGH · namens tähendab üldiselt „nimel” või „nimega”, mitte tingimata ees- ja perekonna…
- **ET-B2-0322** `b2-Nesselfieber-1372` · `etText` · HIGH · Nesselfieber on eesti keeles „nõgestõbi” või „urtikaaria”; „nõgesvõrk” ei tähist…
- **ET-B2-0323** `b2-neuerdings-1374` · `etText` · MEDIUM · „uuesti” tähendab „again”, kuid neuerdings tähendab „hiljuti” või „viimasel ajal…
- **ET-B2-0324** `b2-Niederschlag-1383` · `etText` · MEDIUM · Niederschlag tähendab nii sademeid kui ka ladestist; „sademed” jätab teise põhit…
- **ET-B2-0325** `b2-Nutzeffekt-1391` · `etText` · MEDIUM · „Kasuteguri koefitsient” on eesti keeles tarbetult kordav; Nutzeffekt vastab ter…
- **ET-B2-0326** `b2-Nutzholz-1392` · `etText` · HIGH · „Kasutusmets“ tähendab kasutamiseks majandatavat metsa, mitte kasutuseks mõeldud…
- **ET-B2-0327** `b2-Ölbohrung-1404` · `etText` · MEDIUM · „Naftapuurauk“ tähendab naftakaevu või puurauku; „Ölbohrung“ tähistab nafta puur…
- **ET-B2-0328** `b2-Ölgewinnung-1405` · `etText` · MEDIUM · „Ölgewinnung“ tähendab nafta ammutamist või ekstraheerimist, mitte üldiselt naft…
- **ET-B2-0329** `b2-Ölpest-1407` · `etText` · MEDIUM · Praegune liitsõnaline väljend on ebaloomulik; tähendus on selgem kujul „naftareo…
- **ET-B2-0330** `b2-Operator-1410` · `etText` · HIGH · Saksa „Operator“ on üldine operaator või seadme juht; praegune vaste piirab tähe…
- **ET-B2-0331** `b2-Pachtvertrag-1423` · `etText` · HIGH · „Pachtvertrag“ on eelkõige rendileping, eriti maa või ettevõtte kasutusse andmis…
- **ET-B2-0332** `b2-pachten-1424` · `etText` · MEDIUM · „Pachten“ tähendab maa, talu või ettevõtte rentimist; eesti keeles on selle täps…
- **ET-B2-0333** `b2-Pendelverkehr-1439` · `etText` · MEDIUM · „Pendelverkehr“ tähendab regulaarset edasi-tagasi või shuttle-liiklust, mitte li…
- **ET-B2-0334** `b2-Pfandschein-1445` · `etText` · HIGH · Pfandschein tähendab pandipiletit ehk pandimaja väljastatud tõendit; „pandimärk“…
- **ET-B2-0335** `b2-Pilotstudie-1455` · `etText` · HIGH · Pilotstudie on pilootuuring, mitte uurimissarja sissejuhatus.
- **ET-B2-0336** `b2-Possen-1462` · `etText` · MEDIUM · „Der Possen“ tähendab üksikut jämedat nalja või tembutust, mitte farsši või nalj…
- **ET-B2-0337** `b2-prägnant-1465` · `etText` · MEDIUM · Prägnant tähendab eelkõige tabavat, lühikest ja selget väljendust; „eredalt välj…
- **ET-B2-0338** `b2-quittieren-1484` · `etText` · MEDIUM · „Kättesaamist kinnitama“ on loomulikum ja katab saksa verbi tähenduse; praegune …
- **ET-B2-0339** `b2-ranzig-1492` · `etText` · HIGH · Ranzig tähendab rääsunud, mitte hallitanud; esimene vaste annab toidu riknemise …
- **ET-B2-0340** `b2-Regenfront-1512` · `etText` · MEDIUM · Regenfront tähendab meteoroloogilist vihmafronti; „vihmavöönd“ tähendab pigem vi…
- **ET-B2-0341** `b2-relevant-1519` · `etText` · MEDIUM · „Märkimisväärne“ tähendab tähelepanuväärset, mitte tingimata asjakohast või rele…
- **ET-B2-0342** `b2-rücksichtslos-1532` · `etText` · MEDIUM · „Hooletu“ tähendab careless/negligent; rücksichtslos on eelkõige hoolimatu või t…
- **ET-B2-0343** `b2-rückständig-1533` · `etText` · MEDIUM · „Hilinenud“ tähendab hiljaks jäänud, mitte mahajäänud; teine vaste vajab loomuli…
- **ET-B2-0344** `b2-sächlich-1544` · `etText` · HIGH · Grammatilise termini „neuter“ eestikeelne vaste on „kesksugu“, mitte „neutraalne…
- **ET-B2-0345** `b2-Sandbank-1548` · `etText` · MEDIUM · „Madalaik” on liiga üldine; Sandbank tähendab konkreetselt liivamadalat või liiv…
- **ET-B2-0346** `b2-Satellit-1551` · `etText` · MEDIUM · Astronoomiline „kaaslane” ei ole siin piisavalt täpne ega loomulik vaste sõnale …
- **ET-B2-0347** `b2-Schadenersatz-1556` · `etText` · MEDIUM · Praegune väljend on arusaadav, kuid eesti õiguskeeles on loomulik ja täpne termi…
- **ET-B2-0348** `b2-Schaffen-1558` · `etText` · MEDIUM · „Teos” tähendab üksikut loodud kunstiteost, Schaffen aga loomingulist tegevust v…
- **ET-B2-0349** `b2-Scheitel-1571` · `etText` · MEDIUM · „Juuksejoon” tähendab juuste piirjoont ehk juuksepiiri, mitte lahku või pealae k…
- **ET-B2-0350** `b2-scheitern-1572` · `etText` · MEDIUM · „Lagunema” tähendab füüsiliselt koost lagunemist; scheitern teises tähenduses tä…
- **ET-B2-0351** `b2-Schieber-1577` · `etText` · MEDIUM · „Polt” tähendab polti, Schieber tehnilises tähenduses aga siibrit või liugklappi…
- **ET-B2-0352** `b2-schlafwandeln-1583` · `etText` · HIGH · Praegune vaste tähendab „olema unerändaja”, mitte tegevust „unes kõndima” ehk so…
- **ET-B2-0353** `b2-Schmuggel-1596` · `etText` · HIGH · Salakaup tähendab smugeldatud kaupa; Schmuggel tähendab salakaubandust või smuge…
- **ET-B2-0354** `b2-Schnappschuss-1597` · `etText` · LOW · Hetkevõte fotol on arusaadav, kuid standardsem ja loomulikum vaste on hetktõmmis…
- **ET-B2-0355** `b2-Bittschrift-1602` · `etText` · HIGH · Bittschrift on ametlik kirjalik palve või avaldus, mitte religioosne palve.
- **ET-B2-0356** `b2-schrill-1603` · `etText` · MEDIUM · Kimeda on sõna kimeda käändevorm; omadussõna märksõnavorm on kime.
- **ET-B2-0357** `b2-schroff-1604` · `etText` · MEDIUM · Kalju on nimisõna ega tähenda siin schroff’i omadust; järsk katab tähenduse pare…
- **ET-B2-0358** `b2-Schuldschein-1606` · `etText` · HIGH · Schuldschein on võlatunnistus või võlakohustuse dokument, mitte vabalt kaubeldav…
- **ET-B2-0359** `b2-Schwarm-1612` · `etText` · HIGH · Schwarm tähendab parve või sülemit; kirg ja vaimustus kirjeldavad pigem schwärme…
- **ET-B2-0360** `b2-Schwarze-1615` · `etText` · MEDIUM · Tumedanahaline tähendab üldiselt tumeda nahaga inimest; Schwarze viitab mustanah…
- **ET-B2-0361** `b2-Schwerathletik-1620` · `etText` · MEDIUM · Schwerathletik hõlmab raskejõustikku laiemalt; tõstespordid on liiga kitsas ja m…
- **ET-B2-0362** `b2-Seenot-1624` · `etText` · MEDIUM · Seenot tähendab merehäda või hädaseisundit merel, mitte ainult avariiolukorda.
- **ET-B2-0363** `b2-Naturseide-1629` · `etText` · LOW · Materjali puhul on loomulikum ja täpsem omadussõna looduslik, mitte loomulik.
- **ET-B2-0364** `b2-Selbstgefühl-1631` · `etText` · MEDIUM · Selbstgefühl tähendab eneseväärtuse või enesetaju tunnet; enesekindlus on confid…
- **ET-B2-0365** `b2-Sonderausgabe-1656` · `etText` · MEDIUM · „Erilaadumine” ei tähenda eriväljaannet; esimene vaste on väär ning „eriväljalas…
- **ET-B2-0366** `b2-Sorgenkind-1660` · `etText` · HIGH · „Hoolealune laps” tähendab hooldusel olevat last, mitte murettekitavat või muret…
- **ET-B2-0367** `b2-spärlich-1666` · `etText` · MEDIUM · „Ihne” tähendab kitsi, mitte vähest või kasinat; „tühine” ei kata hästi tähendus…
- **ET-B2-0368** `b2-Stahlwerk-1692` · `etText` · MEDIUM · „Terasevalukoda” tähendab terase valamise tehast ehk valukoda; „Stahlwerk” on ül…
- **ET-B2-0369** `b2-Strafanzeige-1705` · `etText` · HIGH · Tähendab kriminaalasja algatamist, mitte kuriteoteadet või politseile esitatud a…
- **ET-B2-0370** `b2-streitbar-1708` · `etText` · HIGH · Praegune vaste on nimisõna „tülinorija“, kuid saksa märksõna on omadussõna.
- **ET-B2-0371** `b2-Streitkräfte-1709` · `etText` · HIGH · Saksa sõna tavapärane ja täpne eesti vaste on „relvajõud“; praegune on kohmakas …
- **ET-B2-0372** `b2-Tagebau-1721` · `etText` · MEDIUM · Praegune liitsõnaühend on ebaloomulik; „pealmaakaevandamine“ on tavapärane vaste…
- **ET-B2-0373** `b2-Töpferscheibe-1736` · `etText` · HIGH · Töpferscheibe tähendab eesti keeles „potikeder“; „pottsepakäi“ ei ole selle tähe…
- **ET-B2-0374** `b2-treuherzig-1750` · `etText` · MEDIUM · Südamlik tähendab peamiselt sooja ja südamlikku; treuherzig rõhutab siirust ja l…
- **ET-B2-0375** `b2-Triumphzug-1754` · `etText` · MEDIUM · Triumfirong on ebaloomulik ja võib tähendada triumfirongi; mõeldud on võidukat r…
- **ET-B2-0376** `b2-überhören-1769` · `etText` · HIGH · Teine vaste on grammatikavigane; kuulvana tähendab kuuluvana, mitte kuulmist tee…
- **ET-B2-0377** `b2-überlassen-1770` · `etText` · LOW · Valikut lubama on ebaloomulik; loomulikum vaste on valida laskma.
- **ET-B2-0378** `b2-Übermüdung-1774` · `etText` · HIGH · Ülekurnatus ei ole selles tähenduses loomulik ega tavapärane vaste; Übermüdung t…
- **ET-B2-0379** `b2-überschätzen-1775` · `etText` · HIGH · Ümber hindama tähendab uuesti hindama või ümber hindama; üle hindama tähendab mi…
- **ET-B2-0380** `b2-überschreiten-1776` · `etText` · MEDIUM · Üle minema on siin liiga ebatäpne ning rikkuma vajab seaduse konteksti.
- **ET-B2-0381** `b2-umdenken-1787` · `etText` · MEDIUM · Umdenken tähendab oma mõtteviisi või seisukoha muutmist, mitte tingimata olukorr…
- **ET-B2-0382** `b2-umhören, sich-1791` · `etText` · HIGH · Kuulatlema tähendab tähelepanelikult kuulama; sich umhören tähendab teiste käest…
- **ET-B2-0383** `b2-umschließen-1797` · `etText` · HIGH · Sisse lülitama tähendab seadme aktiveerimist, mitte millegi sisse sulgemist või …
- **ET-B2-0384** `b2-umschreiben-1798` · `etText` · MEDIUM · „Kirjeldama” ei väljenda peamist tähendust „ümber sõnastama” või „ümber kirjutam…
- **ET-B2-0385** `b2-umständlich-1803` · `etText` · HIGH · „Väga pisike” tähendab väga väikest, mitte tülikat või kohmakat; see on saksa om…
- **ET-B2-0386** `b2-unterbreiten-1835` · `etText` · MEDIUM · „Unterbreiten” tähendab ettepaneku, palve või dokumendi esitamist; „selgitama” t…
- **ET-B2-0387** `b2-Untertan-1848` · `etText` · HIGH · „Untertan“ tähendab valitseja alamat, mitte kodanikku.
- **ET-B2-0388** `b2-untertauchen-1849` · `etText` · MEDIUM · „Kastma“ tähendab millegi vedelikku kastmist; „untertauchen“ võib tähendada ka p…
- **ET-B2-0389** `b2-unüberlegt-1854` · `etText` · MEDIUM · „Unüberlegt“ tähendab läbimõtlematut või kaalutlematut; praegused vasted tähenda…
- **ET-B2-0390** `b2-verbittert-1873` · `etText` · HIGH · „Verbittert“ tähendab kibestunud või vimma täis; „pettunud“ tähendab enttäuscht …
- **ET-B2-0391** `b2-Verdruss-1877` · `etText` · MEDIUM · „Verdruss“ tähendab pahameelt või meelehärmi; „pettumus“ tähendab pettumust, mit…
- **ET-B2-0392** `b2-sich verhören-1901` · `etText` · HIGH · Tähendab midagi valesti kuulma või mööda kuulma, mitte kedagi üle kuulama.
- **ET-B2-0393** `b2-verhüten-1902` · `etText` · MEDIUM · Teine tähendus viitab rasestumisvastastele vahenditele; „hoiduma” tähendab lihts…
- **ET-B2-0394** `b2-Verleih-1905` · `etText` · MEDIUM · „Verleih” tähendab laenutamist või renditeenust, mitte üksnes üüri kui tasu.
- **ET-B2-0395** `b2-Vermächtnis-1906` · `etText` · HIGH · „Vermächtnis” on pärand või annak; „testament” on dokument, millega pärand määra…
- **ET-B2-0396** `b2-Vermögen-1908` · `etText` · MEDIUM · „Vermögen” tähendab üldiselt vara või varandust; „omand” tähistab pigem omandisu…
- **ET-B2-0397** `b2-Vernehmung-1910` · `etText` · MEDIUM · Saksa sõna ei piirdu politseis toimuva ülekuulamisega; „politseis” kitsendab täh…
- **ET-B2-0398** `b2-verkommen-1916` · `etText` · MEDIUM · „Kaduma” tähendab kaduma või ära haihtuma, mitte allakäimist, mandumist või kõlb…
- **ET-B2-0399** `b2-verkraften-1918` · `etText` · HIGH · Praegune on ebaloomulik kirjeldus; verb tähendab millegi ebameeldiva talumist võ…
- **ET-B2-0400** `b2-versagen-1934` · `etText` · HIGH · Puudub põhitähendus „ebaõnnestuma” või „mitte toimima”; praegune loetelu keskend…
- **ET-B2-0401** `b2-versöhnen-1940` · `etText` · MEDIUM · „Leppima panema” on kohmakas; loomulik transitiivne vaste on „lepitama”.
- **ET-B2-0402** `b2-verspielen-1942` · `etText` · MEDIUM · Sõna tähendab ka millegi hooletult kaotamist või maha mängimist, mitte ainult mä…
- **ET-B2-0403** `b2-verstauchen-1945` · `etText` · HIGH · „Verstauchen” tähendab liigese nikastamist või välja väänamist; „nihestama” tähe…
- **ET-B2-0404** `b2-verweilen-1956` · `etText` · MEDIUM · Praegune vaste piirab tähenduse mõtisklemisega; saksa sõna tähendab üldiselt pea…
- **ET-B2-0405** `b2-Verwüstung-1965` · `etText` · MEDIUM · Hävitamine tähendab üldiselt hävitamist; Verwüstung viitab ulatuslikule laastami…
- **ET-B2-0406** `b2-sich verzögern-1968` · `etText` · HIGH · Venitama on transitiivne ja tähendab millegi viivitamist; refleksiivne saksa ver…
- **ET-B2-0407** `b2-verzollen-1969` · `etText` · MEDIUM · Eesti kirjakeeles on verbi korrektne kuju tollima, mitte tolliima.
- **ET-B2-0408** `b2-vollkommen-1980` · `etText` · HIGH · Hoopis tähendab pigem 'instead/quite', mitte 'completely'; see ei vasta siin sak…
- **ET-B2-0409** `b2-vollzählig-1982` · `etText` · HIGH · Täisarvuline tähendab integer-valued; vollzählig tähendab täielikus arvus või tä…
- **ET-B2-0410** `b2-Vorbildung-1992` · `etText` · MEDIUM · Valmisolek tähendab readiness; Vorbildung tähendab varasemat haridust, ettevalmi…
- **ET-B2-0411** `b2-vornherein-2001` · `etText` · MEDIUM · Von vornherein tähendab algusest peale või ette, mitte lihtsalt 'just alguses'.
- **ET-B2-0412** `b2-vorsätzlich-2003` · `etText` · MEDIUM · “Teadlik” tähendab teadlikku, mitte tingimata tahtlikku tegevust; “tahtlik” vast…
- **ET-B2-0413** `b2-Wählscheibe-2024` · `etText` · MEDIUM · “Valikuketas” tähendab valikuketast; telefoninumbri ketas on eesti keeles “valim…
- **ET-B2-0414** `b2-Warenausgabe-2031` · `etText` · MEDIUM · “Warenausgabe” tähendab kaupade väljastamist; ostude kontrollimine ei kuulu saks…
- **ET-B2-0415** `b2-Wegstrecke-2039` · `etText` · MEDIUM · “Tükk” tähendab eset või osa üldiselt, kuid “Wegstrecke” on konkreetsemalt teelõ…
- **ET-B2-0416** `b2-Wehe-2041` · `etText` · HIGH · Saksa “Wehe” tähendab sünnitusvalu või emaka kokkutõmmet, mitte liivaluidet ega …
- **ET-B2-0417** `b2-Wehrpflicht-2043` · `etText` · HIGH · “Wehrpflicht” on kohustus teenida, “ajateenistus” aga teenistuse enda tähendus.
- **ET-B2-0418** `b2-Werkhalle-2055` · `etText` · MEDIUM · Werkhalle tähendab tootmis- või tehasehalli; „tsehh” tähistab pigem tootmisüksus…
- **ET-B2-0419** `b2-Windbeutel-2076` · `etText` · HIGH · „Tuulelohe” tähendab eesti keeles lohet ehk kite’i; Windbeutel on kreemitäidiseg…
- **ET-B2-0420** `b2-zürnen-2088` · `etText` · MEDIUM · zürnen on intransitiivne ‘vihane olema’; „vihastama” tähendab tavaliselt kellegi…
- **ET-B2-0421** `b2-zuschneiden-2094` · `etText` · MEDIUM · „Lõikama (lõikeks)” on ebaloomulik ja ebaselge; zuschneiden tähendab millegi mõõ…
- **ET-B2-0422** `b2-zutrauen-2097` · `etText` · HIGH · „Zutrauen” tähendab kellelegi võimekuse omistamist; „ootama” ei ole selle verbi …
- **ET-B2-0423** `b2-Zuversicht-2098` · `etText` · HIGH · Zuversicht tähendab lootusrikast kindlustunnet või usku edusse, mitte lihtsalt u…
- **ET-B2-0424** `b2-sich-abwenden` · `study.translation` · MEDIUM · Estonian word order is unnatural; the complement normally precedes ära pöörduma.
- **ET-B2-0425** `b2-sich-einpraegen` · `study.translation` · HIGH · The reflexive German verb means to become firmly remembered, not to memorize som…
- **ET-B2-0426** `b2-sich-erweisen` · `study.translation` · MEDIUM · Üldises vastefraasis nõuab osutuma translatiivi: osutuma millekski.
- **ET-B2-0427** `b2-sich-fassen` · `study.translation` · MEDIUM · Haarama on tavalise fassen-verbi vaste, kuid sich fassen tähendab siin enese kog…
- **ET-B2-0428** `b2-genosse` · `study.translation` · MEDIUM · Genosse tähendab selles kasutuses eeskätt seltsimeest, mitte üldiselt mis tahes …
- **ET-B2-0429** `b2-genossin` · `study.translation` · MEDIUM · Genossin on naissoost seltsimees; „liige” kaotab saksa sõna põhitähenduse.
- **ET-B2-0430** `b2-sich-gestalten` · `study.translation` · LOW · Eesti põhisõnavaste on „kujunema”; „milleks” jätab vaste ebamääraseks ja mõjub s…
- **ET-B2-0431** `b2-haube` · `study.examples[2].lv` · LOW · Eesti keeles nimetatakse auto mootorikatet tavaliselt lihtsalt kapotiks; „mootor…
- **ET-B2-0432** `b2-haube` · `study.examples[3].lv` · LOW · „Auto kapott” on loomulikum ja tavapärasem kui „mootorikapott”.
- **ET-B2-0433** `b2-haube` · `study.examples[5].lv` · LOW · „Kaas pajale kattena” on kohmakas; loomulik eestikeelne käsk on „pane pajale kaa…
- **ET-B2-0434** `b2-sich-herausbilden` · `study.translation` · LOW · „Sich herausbilden” vaste on „välja kujunema”; lisand „milleks” ei ole siin loom…
- **ET-B2-0435** `b2-sich-herausstellen` · `study.translation` · MEDIUM · „Sich herausstellen” tähendab sageli millekski osutumist; praegune „selguma mill…
- **ET-B2-0436** `b2-leiden-study` · `study.translation` · MEDIUM · Leiden tähendab haigust või kannatusi, kuid mitte tingimata pikaajalist ja raske…
- **ET-B2-0437** `b2-neger` · `study.translation` · MEDIUM · Märksõna on vananenud ja rassistlikult halvustav; õppekaart vajab selle kasutusm…
- **ET-B2-0438** `b2-sich-paaren` · `study.translation` · HIGH · Sich paaren tähendab eeskätt paarituma; praegune väljend on ebatäpne ja „millega…
- **ET-B2-0439** `b2-sich-vereinigen` · `study.translation` · MEDIUM · Verb ühinema nõuab sihitise puhul kaassõnalist vormi millegagi, mitte millegaga.
- **ET-B2-0440** `b2-sich-versehen` · `study.translation` · MEDIUM · Väljend „varustama millegagi” nõuab indefiniitse asesõna vormi millegagi.
- **ET-B2-0441** `b2-sich-versoehnen` · `study.translation` · HIGH · Sich versöhnen tähendab kellegagi ära leppima; millegagi leppima tähendab milleg…
- **ET-B2-0442** `b2-sich-verstellen` · `study.translation` · MEDIUM · Küsimusõna keda ei sobi tõlkesse; sich verstellen tähendab siin teesklema või võ…
- **ET-B2-0443** `b2-zuwider` · `study.examples[2].lv` · MEDIUM · Zuwider sein tähendab mitte meeldima või vastumeelne olema, mitte tingimata kurv…
- **ET-B2-0444** `b2-zuwider` · `study.comparison[3].meaning` · MEDIUM · Iebilst tähendab vastu vaidlema või vastuväiteid esitama; vaidlema on liiga üldi…
- **ET-B2-0445** `b2-aendern` · `etMain` · MEDIUM · Ändern tähendab muutma või ümber tegema; parandama viitab pigem vigade parandami…
- **ET-B2-0446** `b2-aendern` · `study.translation` · MEDIUM · Ändern tähendab muutma või ümber tegema; parandama viitab pigem vigade parandami…
## Pilns findingu pārskats (authoritative monolithic — MASTER §7.23)
## ET-B2-0001
**Audit ID:** ET-B2-0001
**Card ID:** `STRUCT`
**Field/path:** `study.count`
**Production file:** `data/et/b2.js`
**Severity:** CRITICAL
**Category:** STRUCTURE
**DE (read-only):** —
**CURRENT:** 64
**PROPOSED_ET (audit ieteikums):** 60
**Problēma:** Study count mismatch LV=60 ET=64
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0002
**Audit ID:** ET-B2-0002
**Card ID:** `b2-hochwasser`
**Field/path:** `entry[1145].study.comparison[0].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Es gibt Hochwasser. = Ir plūdi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0003
**Audit ID:** ET-B2-0003
**Card ID:** `b2-hochwasser`
**Field/path:** `entry[1145].study.comparison[1].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Überschwemmung zerstörte Häuser. = Plūdi izpostīja mājas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0004
**Audit ID:** ET-B2-0004
**Card ID:** `b2-hochwasser`
**Field/path:** `entry[1145].study.comparison[2].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Pegel steigt. = Ūdens līmenis ceļas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0005
**Audit ID:** ET-B2-0005
**Card ID:** `b2-nachdruck`
**Field/path:** `entry[1349].study.comparison[0].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er legt Nachdruck auf die Frist. = Viņš uzsver termiņu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0006
**Audit ID:** ET-B2-0006
**Card ID:** `b2-nachdruck`
**Field/path:** `entry[1349].study.comparison[1].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Nachdruck erschien im Frühjahr. = Atkārtotais izdevums iznāca pavasarī.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0007
**Audit ID:** ET-B2-0007
**Card ID:** `b2-nachdruck`
**Field/path:** `entry[1349].study.comparison[2].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Unter Druck stehen = būt spiedienā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0008
**Audit ID:** ET-B2-0008
**Card ID:** `b2-zuweisen`
**Field/path:** `entry[2100].study.comparison[0].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er weist die Aufgabe zu. = Viņš piešķir uzdevumu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0009
**Audit ID:** ET-B2-0009
**Card ID:** `b2-zuweisen`
**Field/path:** `entry[2100].study.comparison[1].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er gibt mir die Arbeit. = Viņš man dod darbu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0010
**Audit ID:** ET-B2-0010
**Card ID:** `b2-zuweisen`
**Field/path:** `entry[2100].study.comparison[2].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er verteilt die Aufgaben. = Viņš sadala uzdevumus.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0011
**Audit ID:** ET-B2-0011
**Card ID:** `b2-zuwider`
**Field/path:** `entry[2102].study.comparison[1].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Es ist mir zuwider. = Man tas nepatīk.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0012
**Audit ID:** ET-B2-0012
**Card ID:** `b2-anbieten`
**Field/path:** `entry[2113].study.comparison[0].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich biete Hilfe an. = Es piedāvāju palīdzību.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0013
**Audit ID:** ET-B2-0013
**Card ID:** `b2-anbieten`
**Field/path:** `entry[2113].study.comparison[1].example`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er bietet viel Geld. = Viņš piedāvā daudz naudas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0014
**Audit ID:** ET-B2-0014
**Card ID:** `b2-genosse`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** s
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0015
**Audit ID:** ET-B2-0015
**Card ID:** `b2-genosse`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** e
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0016
**Audit ID:** ET-B2-0016
**Card ID:** `b2-genosse`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** l
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0017
**Audit ID:** ET-B2-0017
**Card ID:** `b2-genosse`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** t
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0019
**Audit ID:** ET-B2-0019
**Card ID:** `b2-genosse`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** i
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0022
**Audit ID:** ET-B2-0022
**Card ID:** `b2-genosse`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** n
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0027
**Audit ID:** ET-B2-0027
**Card ID:** `b2-genosse`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** g
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0035
**Audit ID:** ET-B2-0035
**Card ID:** `b2-genosse`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** m
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0039
**Audit ID:** ET-B2-0039
**Card ID:** `b2-genossin`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** s
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0040
**Audit ID:** ET-B2-0040
**Card ID:** `b2-genossin`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** e
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0041
**Audit ID:** ET-B2-0041
**Card ID:** `b2-genossin`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** l
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0042
**Audit ID:** ET-B2-0042
**Card ID:** `b2-genossin`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** t
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0044
**Audit ID:** ET-B2-0044
**Card ID:** `b2-genossin`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** i
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0047
**Audit ID:** ET-B2-0047
**Card ID:** `b2-genossin`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** n
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0052
**Audit ID:** ET-B2-0052
**Card ID:** `b2-genossin`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** g
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0060
**Audit ID:** ET-B2-0060
**Card ID:** `b2-genossin`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** m
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0064
**Audit ID:** ET-B2-0064
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** n
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0065
**Audit ID:** ET-B2-0065
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** e
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0067
**Audit ID:** ET-B2-0067
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** g
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0069
**Audit ID:** ET-B2-0069
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** r
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0070
**Audit ID:** ET-B2-0070
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** m
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0071
**Audit ID:** ET-B2-0071
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** u
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0072
**Audit ID:** ET-B2-0072
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** s
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0073
**Audit ID:** ET-B2-0073
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** t
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0074
**Audit ID:** ET-B2-0074
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** a
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0077
**Audit ID:** ET-B2-0077
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** h
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0079
**Audit ID:** ET-B2-0079
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** l
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0080
**Audit ID:** ET-B2-0080
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** i
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0083
**Audit ID:** ET-B2-0083
**Card ID:** `b2-neger`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:**  
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0091
**Audit ID:** ET-B2-0091
**Card ID:** `b2-pacht`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** r
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0092
**Audit ID:** ET-B2-0092
**Card ID:** `b2-pacht`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** e
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0093
**Audit ID:** ET-B2-0093
**Card ID:** `b2-pacht`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** n
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0094
**Audit ID:** ET-B2-0094
**Card ID:** `b2-pacht`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** t
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0095
**Audit ID:** ET-B2-0095
**Card ID:** `b2-pacht`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** i
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0096
**Audit ID:** ET-B2-0096
**Card ID:** `b2-pacht`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** ü
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0102
**Audit ID:** ET-B2-0102
**Card ID:** `b2-pacht`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** d
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0104
**Audit ID:** ET-B2-0104
**Card ID:** `b2-pacht`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** l
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0106
**Audit ID:** ET-B2-0106
**Card ID:** `b2-pacht`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** p
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0109
**Audit ID:** ET-B2-0109
**Card ID:** `b2-pacht`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** g
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0110
**Audit ID:** ET-B2-0110
**Card ID:** `b2-anbelangen-13`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** anbelangen
**LV MASTER reference:** attiekties uz
**CURRENT:** puudutama, käima kohta
**PROPOSED_ET (audit ieteikums):** puudutama
**Problēma:** „Käima kohta“ on selles tähenduses ebaloomulik ja vigane; „anbelangen“ tähendab eeskätt „puudutama“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0111
**Audit ID:** ET-B2-0111
**Card ID:** `b2-angehen-19`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** angehen
**LV MASTER reference:** attiekties • vērsties pret
**CURRENT:** puudutama • pöörduma vastu
**PROPOSED_ET (audit ieteikums):** puudutama • vastu astuma
**Problēma:** „Pöörduma vastu“ ei ole ründamise või vastandumise tähenduses loomulik eesti vaste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0112
**Audit ID:** ET-B2-0112
**Card ID:** `b2-Aktienkurs-21`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Aktienkurs
**LV MASTER reference:** akcijas kurss
**CURRENT:** aktsia kurss
**PROPOSED_ET (audit ieteikums):** aktsiakurss
**Problēma:** Eesti keeles kirjutatakse see liitsõnana: „aktsiakurss“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0113
**Audit ID:** ET-B2-0113
**Card ID:** `b2-angeblich-28`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** angeblich
**LV MASTER reference:** it kā • šķietami
**CURRENT:** justkui • näiliselt
**PROPOSED_ET (audit ieteikums):** väidetavalt • oletatav
**Problēma:** „Angeblich“ väljendab väidetavust, mitte lihtsalt „justkui“ või „näiliselt“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0114
**Audit ID:** ET-B2-0114
**Card ID:** `b2-abbringen-36`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** abbringen
**LV MASTER reference:** atrunāt • atturēt • novirzīt
**CURRENT:** ümber veenma • hoiatama • kõrvale juhtima
**PROPOSED_ET (audit ieteikums):** ümber veenma • ära hoidma • kõrvale juhtima
**Problēma:** „Hoiatama“ tähendab hoiatamist, mitte kellegi heidutamist või millegi ärahoidmist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0115
**Audit ID:** ET-B2-0115
**Card ID:** `b2-abgesehen-44`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** abgesehen
**LV MASTER reference:** lai gan • turklāt
**CURRENT:** kuigi • pealegi
**PROPOSED_ET (audit ieteikums):** välja arvatud • kõrvale jättes
**Problēma:** „Abgesehen“ tähendab „välja arvatud“ või „kõrvale jättes“, mitte „kuigi“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0116
**Audit ID:** ET-B2-0116
**Card ID:** `b2-abgetan-46`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** abgetan
**LV MASTER reference:** izbeigts • nokārtots
**CURRENT:** lõpetatud • korraldatud
**PROPOSED_ET (audit ieteikums):** lõpetatud • lahendatud
**Problēma:** Teine vaste „korraldatud“ tähendab organiseeritud, mitte lõpetatud või lahendatud.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0117
**Audit ID:** ET-B2-0117
**Card ID:** `b2-abhören-49`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** abhören
**LV MASTER reference:** noklausīties • slepeni noklausīties
**CURRENT:** kuulama • pealt kuulama
**PROPOSED_ET (audit ieteikums):** pealt kuulama • salaja pealt kuulama
**Problēma:** „Abhören“ tähendab sihipärast kuulamist või pealtkuulamist; üldine „kuulama“ on liiga lai.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0118
**Audit ID:** ET-B2-0118
**Card ID:** `b2-ableiten-50`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ableiten
**LV MASTER reference:** novadīt • novirzīt • atvasināt
**CURRENT:** juhtima • kõrvale juhtima • tuletama
**PROPOSED_ET (audit ieteikums):** ära juhtima • kõrvale juhtima • tuletama
**Problēma:** Esimene vaste „juhtima“ ei väljenda vedeliku või energia ärajuhtimise tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0119
**Audit ID:** ET-B2-0119
**Card ID:** `b2-Abnutzung-52`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Abnutzung
**LV MASTER reference:** nolietošana • nolietošanās • nodilums
**CURRENT:** kulumine • amortiseerumine • kulu
**PROPOSED_ET (audit ieteikums):** kulumine • amortiseerumine
**Problēma:** „Kulu” tähendab eeskätt kulu või tarbimist, mitte kulumist ega amortiseerumist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0120
**Audit ID:** ET-B2-0120
**Card ID:** `b2-Absatzmarkt-56`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Absatzmarkt
**LV MASTER reference:** noieta tirgus
**CURRENT:** turustusturg
**PROPOSED_ET (audit ieteikums):** müügiturg
**Problēma:** „Müügiturg” on saksa Absatzmarkt loomulikum ja tavapärasem eestikeelne vaste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0121
**Audit ID:** ET-B2-0121
**Card ID:** `b2-abtragen-71`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** abtragen
**LV MASTER reference:** aiznest • nonēsāt • nojaukt
**CURRENT:** ära kandma • kulutama (kandes) • lammutama
**PROPOSED_ET (audit ieteikums):** ära kandma • kulutama • lammutama
**Problēma:** Sulund „(kandes)” on ebaloomulik ja ei kuulu vaste tähendusse; „kulutama” katab kulumise tähenduse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0122
**Audit ID:** ET-B2-0122
**Card ID:** `b2-affig-80`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** affig
**LV MASTER reference:** uzkrītošs • iedomīgs
**CURRENT:** silmatorkav • edev
**PROPOSED_ET (audit ieteikums):** afekteeritud • edvistav
**Problēma:** „Affig” tähendab ebaloomulikult edvistavat või afekteeritud, mitte lihtsalt silmatorkavat.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0123
**Audit ID:** ET-B2-0123
**Card ID:** `b2-Anorak-87`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Anorak
**LV MASTER reference:** sportiska jaka ar kapuci
**CURRENT:** kapuutsiga dressijakk
**PROPOSED_ET (audit ieteikums):** kapuutsiga jope
**Problēma:** „Dressijakk” tähendab spordidressi jakki; Anorak on üldisem kapuutsiga jope või tuulepluus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0124
**Audit ID:** ET-B2-0124
**Card ID:** `b2-Aster-92`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** ORTHOGRAPHY
**DE (read-only):** Aster
**LV MASTER reference:** astere
**CURRENT:** astra
**PROPOSED_ET (audit ieteikums):** aster
**Problēma:** Taime nimetus on eesti keeles „aster”; „astra” ei ole siin korrektne ainsuse nimetav kuju.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0125
**Audit ID:** ET-B2-0125
**Card ID:** `b2-Ausbeutung-96`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Ausbeutung
**LV MASTER reference:** ekspluatācija
**CURRENT:** ekspluatatsioon
**PROPOSED_ET (audit ieteikums):** ekspluateerimine
**Problēma:** Inimeste või ressursside ärakasutamise tähenduses on eesti keeles tavapärane „ekspluateerimine”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0126
**Audit ID:** ET-B2-0126
**Card ID:** `b2-Äußerlichkeit-103`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Äußerlichkeit
**LV MASTER reference:** ārišķība
**CURRENT:** väline sära
**PROPOSED_ET (audit ieteikums):** välisus • pealiskaudsus
**Problēma:** „Väline sära” tähendab välist hiilgust, kuid Äußerlichkeit tähendab välisust või pealiskaudsust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0127
**Audit ID:** ET-B2-0127
**Card ID:** `b2-Äußerung-104`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Äußerung
**LV MASTER reference:** izteikums • izpaudums • izpausme
**CURRENT:** väljendus • avaldumine • ilming
**PROPOSED_ET (audit ieteikums):** väljendus • avaldus • ütlus
**Problēma:** „Avaldumine” ja „ilming” ei tähenda tavaliselt inimese sõnalist väljendust või avaldust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0128
**Audit ID:** ET-B2-0128
**Card ID:** `b2-aussetzen-105`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** aussetzen
**LV MASTER reference:** izlikt • pakļaut • iebilst • stāties
**CURRENT:** eksponeerima • allutama • vastu vaidlema • astuma
**PROPOSED_ET (audit ieteikums):** ohustama • allutama • vastu vaidlema • välja panema
**Problēma:** „Eksponeerima” on peamiselt näitamiseks välja panema ning „astuma” ei anna neljandat tähendust edasi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0129
**Audit ID:** ET-B2-0129
**Card ID:** `b2-aussichtslos-106`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** aussichtslos
**LV MASTER reference:** bezcerīgs • bez izredzēm
**CURRENT:** lootusetu • väljavaadeteta
**PROPOSED_ET (audit ieteikums):** lootusetu • väljavaatetu
**Problēma:** „Väljavaadeteta” ei ole loomulik eestikeelne vaste; tavapärane on „väljavaatetu”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0130
**Audit ID:** ET-B2-0130
**Card ID:** `b2-ausstatten-108`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ausstatten
**LV MASTER reference:** apgādāt • noformēt
**CURRENT:** varustama • vormistama
**PROPOSED_ET (audit ieteikums):** varustama • sisustama
**Problēma:** „Vormistama” tähendab dokumentide vormistamist, mitte millegi varustamist või sisustamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0131
**Audit ID:** ET-B2-0131
**Card ID:** `b2-austragen-112`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** austragen
**LV MASTER reference:** iznēsāt • piegādāt • izcīnīt
**CURRENT:** kandma • kohale toimetama • välja võitlema
**PROPOSED_ET (audit ieteikums):** laiali kandma • kohale toimetama • välja võitlema
**Problēma:** Üksi „kandma” on esimese tähenduse jaoks liiga üldine; siin on mõte midagi laiali kanda või levitada.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0132
**Audit ID:** ET-B2-0132
**Card ID:** `b2-austreten-114`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** austreten
**LV MASTER reference:** izmīt • nomīt • izstāties
**CURRENT:** sisse tallama • maha tallama • välja astuma
**PROPOSED_ET (audit ieteikums):** välja tallama • maha tallama • välja astuma
**Problēma:** „Sisse tallama” tähendab millegi sisse või pinnasesse tallamist, mitte saksa austreten-vormi põhitähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0133
**Audit ID:** ET-B2-0133
**Card ID:** `b2-auswärtig-115`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** auswärtig
**LV MASTER reference:** ārzemju • ārlietu
**CURRENT:** välismaine • välisasjade
**PROPOSED_ET (audit ieteikums):** välismaine • välisasjadega seotud
**Problēma:** „Välisasjade” on üksinda genitiivne sõnaühendi osa, mitte loomulik iseseisev eestikeelne vaste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0134
**Audit ID:** ET-B2-0134
**Card ID:** `b2-ausweisen-117`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** ausweisen
**LV MASTER reference:** izraidīt • izsūtīt • apstiprināt • pierādīt
**CURRENT:** välja saatma • välja saatma • kinnitama • tõestama
**PROPOSED_ET (audit ieteikums):** välja saatma • välja tõrjuma • kinnitama • tõestama
**Problēma:** Kaks esimest vastet on identsed ega erista väljasaatmise ja väljatõrjumise tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0135
**Audit ID:** ET-B2-0135
**Card ID:** `b2-auszeichnen-120`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** auszeichnen
**LV MASTER reference:** apbalvot • piešķirt • izcelties
**CURRENT:** autasustama • andma • silma paistma
**PROPOSED_ET (audit ieteikums):** autasustama • esile tõstma • silma paistma
**Problēma:** Üldine „andma” ei väljenda tähendust „millegi poolest eristama või esile tõstma”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0136
**Audit ID:** ET-B2-0136
**Card ID:** `b2-Schwebebalken-123`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Schwebebalken
**LV MASTER reference:** līdzsvara baļķis
**CURRENT:** tasakaalupulk
**PROPOSED_ET (audit ieteikums):** võimlemispoom
**Problēma:** Schwebebalken on võimlemises standardterminina „võimlemispoom”, mitte „tasakaalupulk”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0137
**Audit ID:** ET-B2-0137
**Card ID:** `b2-Blutbank-125`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Blutbank
**LV MASTER reference:** asins rezerves
**CURRENT:** verevaru
**PROPOSED_ET (audit ieteikums):** verepank
**Problēma:** „Verevaru” tähendab verevaru, kuid Blutbank on asutus või süsteem ehk „verepank”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0138
**Audit ID:** ET-B2-0138
**Card ID:** `b2-Baugrube-142`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Baugrube
**LV MASTER reference:** būvbedre
**CURRENT:** ehituskraav
**PROPOSED_ET (audit ieteikums):** ehituskaevik
**Problēma:** Baugrube on ehituseks rajatud süvend või kaevik; „ehituskraav” seostub pigem pika kraaviga.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0139
**Audit ID:** ET-B2-0139
**Card ID:** `b2-bebauen-146`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** bebauen
**LV MASTER reference:** apstrādāt • apbūvēt
**CURRENT:** töötlema • hoonestama
**PROPOSED_ET (audit ieteikums):** harima • hoonestama
**Problēma:** Maa puhul tähendab bebauen eeskätt harima või hoonestama; „töötlema” on liiga üldine.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0140
**Audit ID:** ET-B2-0140
**Card ID:** `b2-befallen-148`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** befallen
**LV MASTER reference:** uznākt • uzbrukt
**CURRENT:** peale tulema • ründama
**PROPOSED_ET (audit ieteikums):** tabama • ründama
**Problēma:** „Peale tulema” ei ole loomulik vaste tähendusele „kedagi tabama või kedagi vallutama”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0141
**Audit ID:** ET-B2-0141
**Card ID:** `b2-beispiellos-163`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** beispiellos
**LV MASTER reference:** nebijis • neredzēts • tāds, kas nav ne ar ko salīdzināms
**CURRENT:** enneolematu • nähtamatu • võrreldamatu
**PROPOSED_ET (audit ieteikums):** enneolematu • enneolematu • võrreldamatu
**Problēma:** „Nähtamatu” tähendab nähtamatut, mitte enneolematut või pretsedenditut.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0142
**Audit ID:** ET-B2-0142
**Card ID:** `b2-beistimmen-166`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** beistimmen
**LV MASTER reference:** piebalsot • atbalstīt
**CURRENT:** kaasa hääletama • toetama
**PROPOSED_ET (audit ieteikums):** nõustuma • heaks kiitma
**Problēma:** „Beistimmen” tähendab kellegagi nõustumist või millegi heakskiitmist, mitte kaasa hääletamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0143
**Audit ID:** ET-B2-0143
**Card ID:** `b2-Straßenbelag-174`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Straßenbelag
**LV MASTER reference:** ielas klātne
**CURRENT:** tänavakate
**PROPOSED_ET (audit ieteikums):** teekate
**Problēma:** Tee või tänava pinnakatte tavapärane eestikeelne termin on „teekate”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0144
**Audit ID:** ET-B2-0144
**Card ID:** `b2-belästigen-177`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** belästigen
**LV MASTER reference:** apgrūtināt • uzmākties • uzbāzties
**CURRENT:** koormama • pealetükkivalt käituma • peale suruma
**PROPOSED_ET (audit ieteikums):** häirima • tülitama • ahistama
**Problēma:** „Belästigen” tähendab häirima, tülitama või ahistama; „koormama” tähendab pigem koormamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0145
**Audit ID:** ET-B2-0145
**Card ID:** `b2-beleibt-181`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** beleibt
**LV MASTER reference:** tukls • brangs • pilnīgs
**CURRENT:** täidlane • priske • täielik
**PROPOSED_ET (audit ieteikums):** täidlane • priske • tüse
**Problēma:** „Täielik” tähendab complete/full, mitte inimest kirjeldavat tüsedat või kogukat.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0146
**Audit ID:** ET-B2-0146
**Card ID:** `b2-beredt-189`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** beredt
**LV MASTER reference:** runīgs
**CURRENT:** jutukas
**PROPOSED_ET (audit ieteikums):** sõnaosav
**Problēma:** „Beredt” tähendab väljendusrikast või sõnaosavat, „jutukas” aga peamiselt palju rääkivat.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0147
**Audit ID:** ET-B2-0147
**Card ID:** `b2-bergen-192`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** bergen
**LV MASTER reference:** glābt • izglābt • novākt ražu
**CURRENT:** päästma • koristama saaki
**PROPOSED_ET (audit ieteikums):** päästma • saaki koristama
**Problēma:** Eestikeelne loomulikum sõnajärg on „saaki koristama”, mitte „koristama saaki”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0148
**Audit ID:** ET-B2-0148
**Card ID:** `b2-beruhen-198`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** beruhen
**LV MASTER reference:** dibināties • pamatoties
**CURRENT:** asutatama • põhinema
**PROPOSED_ET (audit ieteikums):** põhinema
**Problēma:** „Asutatama” tähendab asutamist või rajamist, mitte millelgi põhine mist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0149
**Audit ID:** ET-B2-0149
**Card ID:** `b2-beschimpfen-203`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** beschimpfen
**LV MASTER reference:** nolamāt • nozākāt • noķengāt
**CURRENT:** sõimama • halvustama • laimama
**PROPOSED_ET (audit ieteikums):** sõimama • halvustama • solvama
**Problēma:** „Laimama” tähendab kellegi kohta laimava info levitamist, mitte otseselt sõimamist või solvamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0150
**Audit ID:** ET-B2-0150
**Card ID:** `b2-besessen-207`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** besessen
**LV MASTER reference:** apsēsts • apmāts • pārņemts
**CURRENT:** kinnisideeks muutunud • vaevatud • haaratud
**PROPOSED_ET (audit ieteikums):** kinnisideest haaratud • vaevatud • haaratud
**Problēma:** „Kinnisideeks muutunud” tähendab millekski kinnisideeks muutumist, mitte inimese kinnisideest haaratud olekut.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0151
**Audit ID:** ET-B2-0151
**Card ID:** `b2-besiedeln-208`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** besiedeln
**LV MASTER reference:** nometināt iedzīvotājus
**CURRENT:** elanikke ümber asustama
**PROPOSED_ET (audit ieteikums):** asustama
**Problēma:** „Besiedeln” tähendab ala asustama; „ümber asustama” lisab saksa verbis puuduva ümberasustamise tähenduse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0152
**Audit ID:** ET-B2-0152
**Card ID:** `b2-bestürzt-218`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** bestürzt
**LV MASTER reference:** pārsteigts • samulsis • apmulsis • apjucis
**CURRENT:** üllatunud • segaduses • hämmingus
**PROPOSED_ET (audit ieteikums):** vapustatud • segaduses • hämmeldunud
**Problēma:** „Bestürzt” väljendab tugevat vapustust või kohkumist, mitte lihtsalt üllatust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0153
**Audit ID:** ET-B2-0153
**Card ID:** `b2-beteuern-221`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** beteuern
**LV MASTER reference:** apliecināt
**CURRENT:** tõendama
**PROPOSED_ET (audit ieteikums):** kinnitama
**Problēma:** „Beteuern” tähendab millegi tungivalt või veendunult kinnitamist; „tõendama” tähendab tõestama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0154
**Audit ID:** ET-B2-0154
**Card ID:** `b2-Betriebsrat-224`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Betriebsrat
**LV MASTER reference:** uzņēmuma padome
**CURRENT:** ettevõtte nõukogu
**PROPOSED_ET (audit ieteikums):** töönõukogu
**Problēma:** „Betriebsrat” on töötajate esindusorgan ehk töönõukogu, mitte ettevõtte juhtkonna või omanike nõukogu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0155
**Audit ID:** ET-B2-0155
**Card ID:** `b2-Betrug-225`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Betrug
**LV MASTER reference:** krāpšana • mānīšana • viltus • blēdība
**CURRENT:** pettus • mahhineerimine • võltsing • kelmus
**PROPOSED_ET (audit ieteikums):** pettus • petmine • kelmus
**Problēma:** „Võltsing” tähendab võltsitud eset või dokumenti, mitte üldiselt pettust, mida „Betrug” tähistab.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0156
**Audit ID:** ET-B2-0156
**Card ID:** `b2-Beute-227`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** Beute
**LV MASTER reference:** laupījums • guvums • trofeja
**CURRENT:** saak • võit • trofee
**PROPOSED_ET (audit ieteikums):** saak • saagis • trofee
**Problēma:** „Võit” tähendab eeskätt võitu, samas kui „Beute” tähendab saaki või röövsaaki.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0157
**Audit ID:** ET-B2-0157
**Card ID:** `b2-bewähren-229`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** CRITICAL
**Category:** TRANSLATION
**DE (read-only):** bewähren
**LV MASTER reference:** pierādīt sevi
**CURRENT:** kaitsma • ära kaitsma • hoidma • päästma
**PROPOSED_ET (audit ieteikums):** ennast tõestama • end õigustama
**Problēma:** Praegused vasted tähendavad kaitsmist või päästmist; „bewähren” tähendab end tõestama või ennast õigustama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0158
**Audit ID:** ET-B2-0158
**Card ID:** `b2-bezähmen-237`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** CRITICAL
**Category:** TRANSLATION
**DE (read-only):** bezähmen
**LV MASTER reference:** savaldīt
**CURRENT:** nõiduma • lummama
**PROPOSED_ET (audit ieteikums):** taltsutama • ohjeldama
**Problēma:** Praegused vasted tähendavad nõidumist või lummamist; „bezähmen” tähendab taltsutama või ohjeldama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0159
**Audit ID:** ET-B2-0159
**Card ID:** `b2-Binnenhandel-251`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Binnenhandel
**LV MASTER reference:** iekšējā tirdzniecība
**CURRENT:** siseturg
**PROPOSED_ET (audit ieteikums):** sisekaubandus
**Problēma:** „Binnenhandel” tähendab sisekaubandust; „siseturg” tähendab siseturgu, mis on teine mõiste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0160
**Audit ID:** ET-B2-0160
**Card ID:** `b2-Blutkonserve-274`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Blutkonserve
**LV MASTER reference:** konservētas asinis
**CURRENT:** konserveeritud veri
**PROPOSED_ET (audit ieteikums):** verekonserv
**Problēma:** Eesti keeles on selle meditsiinilise mõiste loomulik vaste „verekonserv“, mitte sõnasõnaline „konserveeritud veri“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0161
**Audit ID:** ET-B2-0161
**Card ID:** `b2-Bodensatz-280`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** Bodensatz
**LV MASTER reference:** nogulsnes • padibenes • mieles
**CURRENT:** sete • pärme
**PROPOSED_ET (audit ieteikums):** sete • pärm
**Problēma:** Sõnavarakaardil peaks vaste olema algvormis; „pärme“ on partitiiv, samas kui mõiste vaste on „pärm“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0162
**Audit ID:** ET-B2-0162
**Card ID:** `b2-Bootsmann-283`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** ORTHOGRAPHY
**DE (read-only):** Bootsmann
**LV MASTER reference:** bocmanis
**CURRENT:** bootsman
**PROPOSED_ET (audit ieteikums):** pootsman
**Problēma:** Eestikeelne merendustermin on „pootsman“; kuju „bootsman“ ei vasta eesti õigekirjale.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0163
**Audit ID:** ET-B2-0163
**Card ID:** `b2-Borte-288`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Borte
**LV MASTER reference:** apmale
**CURRENT:** äärekivi
**PROPOSED_ET (audit ieteikums):** ääris
**Problēma:** „Äärekivi“ tähendab äärekivi või curb'i; Borte on dekoratiivne ääris, pael või kant.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0164
**Audit ID:** ET-B2-0164
**Card ID:** `b2-Brandschaden-292`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Brandschaden
**LV MASTER reference:** ugunsgrēka nodarītais zaudējums
**CURRENT:** tulekahjukahju
**PROPOSED_ET (audit ieteikums):** tulekahju tekitatud kahju
**Problēma:** „Tulekahjukahju“ on ebaloomulik ja tähenduslikult kohmakas liitsõna; mõte on tulekahju põhjustatud kahju.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0165
**Audit ID:** ET-B2-0165
**Card ID:** `b2-Brandanschlag-294`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Brandanschlag
**LV MASTER reference:** ļaunprātīga dedzināšana
**CURRENT:** süütamine
**PROPOSED_ET (audit ieteikums):** süütamisrünnak
**Problēma:** „Süütamine“ tähendab tule süütamist, kuid Brandanschlag on sihilik süütamisrünnak või süütamisakt.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0166
**Audit ID:** ET-B2-0166
**Card ID:** `b2-Brandmal-295`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Brandmal
**LV MASTER reference:** apdegums • apdeguma rēta
**CURRENT:** põletus • põletusarm
**PROPOSED_ET (audit ieteikums):** põletusjälg • põletusarm
**Problēma:** Brandmal tähendab põletusjälge või -armi; „põletus“ üksi tähendab pigem põletust ennast.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0167
**Audit ID:** ET-B2-0167
**Card ID:** `b2-Brettsegeln-301`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Brettsegeln
**LV MASTER reference:** vindsērfings
**CURRENT:** purjelaud
**PROPOSED_ET (audit ieteikums):** purjelauasõit
**Problēma:** „Purjelaud“ on vahend ehk laud; Brettsegeln tähistab purjelauasõitu ehk windsurfing'u harrastamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0168
**Audit ID:** ET-B2-0168
**Card ID:** `b2-bürgerlich-321`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** bürgerlich
**LV MASTER reference:** pilsonisks • pilsoņu • buržuāzisks • buržuāzijas
**CURRENT:** kodanlik • kodanike • kodanlik
**PROPOSED_ET (audit ieteikums):** kodanlik • kodaniku- • kodanlik
**Problēma:** Teine vaste „kodanike” on mitmuse omastav, mitte omadussõna või korrektne liitsõna tüvi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0169
**Audit ID:** ET-B2-0169
**Card ID:** `b2-Datei-356`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Datei
**LV MASTER reference:** kartotēka
**CURRENT:** kartoteek
**PROPOSED_ET (audit ieteikums):** fail
**Problēma:** Saksa „Datei” tähendab arvutifaili; „kartoteek” tähendab kaartide või kirjete registrit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0170
**Audit ID:** ET-B2-0170
**Card ID:** `b2-Datenträger-358`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Datenträger
**LV MASTER reference:** diskete
**CURRENT:** diskett
**PROPOSED_ET (audit ieteikums):** andmekandja
**Problēma:** Datenträger tähendab üldiselt andmekandjat, mitte ainult disketti.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0171
**Audit ID:** ET-B2-0171
**Card ID:** `b2-Dealer-361`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**DE (read-only):** Dealer
**LV MASTER reference:** nelegāls narkotiku tirgotājs
**CURRENT:** nartkootikumide illegaalne müüja
**PROPOSED_ET (audit ieteikums):** illegaalne narkootikumide müüja
**Problēma:** Sõnas nartkootikumide on kirjaviga ning eestikeelne sõnajärg on ebaloomulik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0172
**Audit ID:** ET-B2-0172
**Card ID:** `b2-dehnen-367`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** dehnen
**LV MASTER reference:** stiept • staipīt • stiepties • staipīties • vilkties
**CURRENT:** venitama • sirutama • venima • sirutuma • vinduma
**PROPOSED_ET (audit ieteikums):** venitama • sirutama • venima • sirutuma
**Problēma:** Vinduma tähendab virelema või vinduma, mitte venitama ega venima.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0173
**Audit ID:** ET-B2-0173
**Card ID:** `b2-dementieren-374`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** dementieren
**LV MASTER reference:** atsaukt informāciju
**CURRENT:** teavet tagasi kutsuma
**PROPOSED_ET (audit ieteikums):** ümber lükkama • eitama
**Problēma:** Dementieren tähendab väidet või teadet ümber lükkama, mitte teavet tagasi kutsuma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0174
**Audit ID:** ET-B2-0174
**Card ID:** `b2-derartig-380`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** derartig
**LV MASTER reference:** tāds • šāds • tamlīdzīgi
**CURRENT:** selline • samasugune
**PROPOSED_ET (audit ieteikums):** selline • samasugune
**Problēma:** Sõnas samasugune on kirjaviga: puudu on täht a.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0175
**Audit ID:** ET-B2-0175
**Card ID:** `b2-diejenige-397`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** diejenige
**LV MASTER reference:** tā
**CURRENT:** nõnda
**PROPOSED_ET (audit ieteikums):** see
**Problēma:** Diejenige tähendab 'see (naissoost isik või asi)', mitte 'nõnda'.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0176
**Audit ID:** ET-B2-0176
**Card ID:** `b2-dingen-402`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** dingen
**LV MASTER reference:** līgt • salīgt
**CURRENT:** sõlmima kokkulepet
**PROPOSED_ET (audit ieteikums):** palkama • tööle võtma
**Problēma:** Dingen tähendab kellegi palkamist või tööle võtmist, mitte lihtsalt kokkuleppe sõlmimist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0177
**Audit ID:** ET-B2-0177
**Card ID:** `b2-Dörrgemüse-421`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Dörrgemüse
**LV MASTER reference:** kaltēti dārzeņi
**CURRENT:** kuivatatud juurviljad
**PROPOSED_ET (audit ieteikums):** kuivatatud köögiviljad
**Problēma:** Juurviljad tähendab eeskätt juurvilju, kuid saksa Gemüse hõlmab kõiki köögivilju.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0178
**Audit ID:** ET-B2-0178
**Card ID:** `b2-Dotterblume-428`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Dotterblume
**LV MASTER reference:** purene
**CURRENT:** tulikas
**PROPOSED_ET (audit ieteikums):** kullerkupp
**Problēma:** Dotterblume on kullerkupp; tulikas tähistab eesti keeles teist taime, võilillede sugukonna tulikat.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0179
**Audit ID:** ET-B2-0179
**Card ID:** `b2-Dragee-429`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**DE (read-only):** Dragee
**LV MASTER reference:** dražeja
**CURRENT:** draažee
**PROPOSED_ET (audit ieteikums):** dražee
**Problēma:** Eesti kirjakeeles on sõna kuju „dražee“, mitte „draažee“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0180
**Audit ID:** ET-B2-0180
**Card ID:** `b2-Drehung-439`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Drehung
**LV MASTER reference:** griešanās • apgrieziens
**CURRENT:** pöörlemine • pöörde
**PROPOSED_ET (audit ieteikums):** pöörlemine • pööre
**Problēma:** Teine vaste peab olema nimetavas käändes; „pöörde“ on omastav vorm, mitte märksõna.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0181
**Audit ID:** ET-B2-0181
**Card ID:** `b2-Drossel-447`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Drossel
**LV MASTER reference:** strazds
**CURRENT:** kuldnokk
**PROPOSED_ET (audit ieteikums):** rästas
**Problēma:** Drossel tähendab rästast; kuldnokk on teine linnuliik, starling.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0182
**Audit ID:** ET-B2-0182
**Card ID:** `b2-drosseln-448`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** drosseln
**LV MASTER reference:** žņaugt • apslāpēt
**CURRENT:** kägistama • lämmatama
**PROPOSED_ET (audit ieteikums):** kägistama • lämmatama • piirama
**Problēma:** Lisaks lämmatamisele tähendab drosseln ka võimsuse, kiiruse või hulga vähendamist ja piiramist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0183
**Audit ID:** ET-B2-0183
**Card ID:** `b2-Dunst-466`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Dunst
**LV MASTER reference:** tvaiks • garaiņi • izgarojumi • tvans • migla • dūmaka
**CURRENT:** aur • aurud • eritis • ummehtus • udu • sudu
**PROPOSED_ET (audit ieteikums):** aur • aurud • udu • sudu
**Problēma:** „eritis” tähendab eritist või väljutist, mitte saksa „Dunsti” ehk auru või udu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0184
**Audit ID:** ET-B2-0184
**Card ID:** `b2-durchbringen-471`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** durchbringen
**LV MASTER reference:** izdabūt cauri • iznest cauri • panākt • izārstēt • izšķērdēt
**CURRENT:** läbi viima • välja kannatama • saavutama • välja ravima • raiskama
**PROPOSED_ET (audit ieteikums):** läbi viima • läbi aitama • saavutama • välja ravima • raiskama
**Problēma:** „durchbringen” tähendab kellegi või millegi läbi aitamist; „välja kannatama” tähendab taluma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0185
**Audit ID:** ET-B2-0185
**Card ID:** `b2-durchmachen-479`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** durchmachen
**LV MASTER reference:** pārdzīvot • izņemt • pabeigt
**CURRENT:** üle elama • välja võtma • lõpetama
**PROPOSED_ET (audit ieteikums):** üle elama • läbi tegema • lõpetama
**Problēma:** „välja võtma” tähendab välja võtma, mitte millegi läbielamist või läbimist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0186
**Audit ID:** ET-B2-0186
**Card ID:** `b2-durchsetzen-486`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** durchsetzen
**LV MASTER reference:** izdabūt cauri • panākt
**CURRENT:** läbi viima • saavutama
**PROPOSED_ET (audit ieteikums):** läbi suruma • saavutama
**Problēma:** „durchsetzen” tähendab millegi läbisurumist või maksmapanekut; „läbi viima” tähendab ellu viima.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0187
**Audit ID:** ET-B2-0187
**Card ID:** `b2-Dürre-489`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Dürre
**LV MASTER reference:** sausums
**CURRENT:** kuivus
**PROPOSED_ET (audit ieteikums):** põud
**Problēma:** „Dürre” tähendab põuda ehk pikaajalist sademete puudumist, mitte üldist kuivust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0188
**Audit ID:** ET-B2-0188
**Card ID:** `b2-edel-497`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** edel
**LV MASTER reference:** cēls • cildens • dižciltīgs
**CURRENT:** õilis • ülev • aadlik
**PROPOSED_ET (audit ieteikums):** õilis • ülev • aadellik
**Problēma:** „aadlik” on nimisõna; omadussõnana on õige „aadellik”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0189
**Audit ID:** ET-B2-0189
**Card ID:** `b2-Eheberatung-501`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Eheberatung
**LV MASTER reference:** ģimenes konsultācija
**CURRENT:** pereabi nõustamine
**PROPOSED_ET (audit ieteikums):** abielunõustamine
**Problēma:** „Eheberatung” tähendab abielu- või paarinõustamist; „pereabi nõustamine” on teise tähendusega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0190
**Audit ID:** ET-B2-0190
**Card ID:** `b2-Eheschließung-504`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** ORTHOGRAPHY
**DE (read-only):** Eheschließung
**LV MASTER reference:** laulības • salaulāšanās
**CURRENT:** abielu • laulumine
**PROPOSED_ET (audit ieteikums):** abiellumine • laulatamine
**Problēma:** „laulumine” tähendab laulmist; abielu sõlmimise tähenduses on õiged „abiellumine” ja „laulatamine”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0191
**Audit ID:** ET-B2-0191
**Card ID:** `b2-ehren-505`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ehren
**LV MASTER reference:** godāt • cienīt • godināt
**CURRENT:** austama • lugu pidama • auhindama
**PROPOSED_ET (audit ieteikums):** austama • lugu pidama • au sees hoidma
**Problēma:** „auhindama” tähendab auhinna andmist, mitte austamist või au sees hoidmist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0192
**Audit ID:** ET-B2-0192
**Card ID:** `b2-ehrenamtlich-507`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** ehrenamtlich
**LV MASTER reference:** bez maksas • goda pienākumu izpildot
**CURRENT:** tasuta • auülesannet täites
**PROPOSED_ET (audit ieteikums):** vabatahtlikult • auameti korras
**Problēma:** „ehrenamtlich” tähendab vabatahtlikult või auameti korras, mitte lihtsalt tasuta.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0193
**Audit ID:** ET-B2-0193
**Card ID:** `b2-Ehrenpflicht-509`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Ehrenpflicht
**LV MASTER reference:** goda pienākums
**CURRENT:** auülesanne
**PROPOSED_ET (audit ieteikums):** aukohustus
**Problēma:** Ehrenpflicht tähendab aukohustust; auülesanne viitab pigem aukohustuse asemel ülesandele.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0194
**Audit ID:** ET-B2-0194
**Card ID:** `b2-eigenhändig-524`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** eigenhändig
**LV MASTER reference:** pašrocīgs
**CURRENT:** isetehtud
**PROPOSED_ET (audit ieteikums):** oma käega tehtud
**Problēma:** Iset tehtud tähendab isetehtud või omavalmistatud; eigenhändig tähendab oma käega tehtud või isiklikult.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0195
**Audit ID:** ET-B2-0195
**Card ID:** `b2-einfassen-540`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** einfassen
**LV MASTER reference:** ietvert • ierāmēt • iedarināt apkalumā
**CURRENT:** sisaldama • raamima • kinnitama
**PROPOSED_ET (audit ieteikums):** ääristama • raamima • ehtesse kinnitama
**Problēma:** Sisaldama tähendab sisaldama, mitte millegi ümber ääristamist; ehtetermin vajab täpsustust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0196
**Audit ID:** ET-B2-0196
**Card ID:** `b2-einflussreich-541`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** einflussreich
**LV MASTER reference:** ietekmīgs
**CURRENT:** mõjukas • muljetavaldav
**PROPOSED_ET (audit ieteikums):** mõjukas
**Problēma:** Muljetavaldav tähendab impressive, mitte mõjuvõimas; see on einflussreichi tähendusest erinev.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0197
**Audit ID:** ET-B2-0197
**Card ID:** `b2-einfrieren-543`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** einfrieren
**LV MASTER reference:** sasaldēt • iesaldēt • pārtraukt
**CURRENT:** külmutama • sisse külmutama • katkestama
**PROPOSED_ET (audit ieteikums):** külmutama • peatama
**Problēma:** Sisse külmutama on ebaloomulik otsetõlge; raha või tegevuse puhul kasutatakse külmutama või peatama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0198
**Audit ID:** ET-B2-0198
**Card ID:** `b2-eingehend-550`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** eingehend
**LV MASTER reference:** pamatīgs • sīks • ienākošs
**CURRENT:** põhjalik • pisiasjaline • sissetulev
**PROPOSED_ET (audit ieteikums):** põhjalik • üksikasjalik • sissetulev
**Problēma:** Pisiasjaline on selles tähenduses ebaloomulikum; tavapärane vaste on üksikasjalik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0199
**Audit ID:** ET-B2-0199
**Card ID:** `b2-eingleisig-557`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** eingleisig
**LV MASTER reference:** viensliežu-
**CURRENT:** monorööpa-
**PROPOSED_ET (audit ieteikums):** üherööpmeline
**Problēma:** Monorööpa- tähendab monoraili ehk üherööpalist süsteemi; eingleisig tähendab ühe rööpapaariga või üherööpmelist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0200
**Audit ID:** ET-B2-0200
**Card ID:** `b2-eingrenzen-558`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** eingrenzen
**LV MASTER reference:** ierobežot • norobežot
**CURRENT:** piirama • eraldama
**PROPOSED_ET (audit ieteikums):** piirama • piiritlema
**Problēma:** „Eraldama” tähendab eraldamist, mitte tähenduse või ulatuse piiritlemist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0201
**Audit ID:** ET-B2-0201
**Card ID:** `b2-Einigkeit-561`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Einigkeit
**LV MASTER reference:** vienība • vienotība • vienprātība
**CURRENT:** üksus • ühtsus • üksmeel
**PROPOSED_ET (audit ieteikums):** ühtsus • üksmeel
**Problēma:** „Üksus” tähendab eeskätt üksikut ühikut või struktuuriüksust, mitte üksmeelt või ühtsust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0202
**Audit ID:** ET-B2-0202
**Card ID:** `b2-einleiten-566`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** einleiten
**LV MASTER reference:** ievadīt
**CURRENT:** sisestama
**PROPOSED_ET (audit ieteikums):** sisse juhatama • algatama
**Problēma:** „Einleiten” tähendab millegi alustamist või sissejuhatamist; „sisestama” tähendab andmete sisestamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0203
**Audit ID:** ET-B2-0203
**Card ID:** `b2-einliefern-568`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** einliefern
**LV MASTER reference:** ievest • atvest
**CURRENT:** sisse tooma • kohale tooma
**PROPOSED_ET (audit ieteikums):** sisse andma • (haiglasse) toimetama
**Problēma:** „Einliefern” tähendab inimese või saadetise asutusse üleandmist, sageli haiglasse toimetamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0204
**Audit ID:** ET-B2-0204
**Card ID:** `b2-einmachen-569`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** einmachen
**LV MASTER reference:** iekonservēt • iemarinēt • ievārīt
**CURRENT:** konserveerima • marineerima • keetma
**PROPOSED_ET (audit ieteikums):** konserveerima • marineerima • moosiks keetma
**Problēma:** Üldine „keetma” ei väljenda toidu säilitamiseks või moosiks valmistamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0205
**Audit ID:** ET-B2-0205
**Card ID:** `b2-einüben-589`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** einüben
**LV MASTER reference:** iemācīties • iestudēt
**CURRENT:** õppima • lavastama
**PROPOSED_ET (audit ieteikums):** harjutama • selgeks õppima
**Problēma:** „Einüben” tähendab harjutamist või millegi selgeks õppimist; „lavastama” tähendab lavastuse loomist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0206
**Audit ID:** ET-B2-0206
**Card ID:** `b2-eitel-605`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** eitel
**LV MASTER reference:** godkārīgs • uzpūtīgs • iedomīgs • sekls • tukšs • ārišķīgs
**CURRENT:** auahne • ülbe • edev • pinnapealne • tühine • näidislik
**PROPOSED_ET (audit ieteikums):** edev • ennasttäis • asjatu • tühine
**Problēma:** „Auahne”, „ülbe”, „pinnapealne” ja „näidislik” ei vasta täpselt sõna põhitähendustele „edev” ja „asjatu”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0207
**Audit ID:** ET-B2-0207
**Card ID:** `b2-entbehren-616`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** entbehren
**LV MASTER reference:** iztikt bez • pieciest • trūkt
**CURRENT:** läbi ajama • kannatama • puuduma
**PROPOSED_ET (audit ieteikums):** läbi ajama • ilma olema • puudust kannatama
**Problēma:** „Puuduma” tähendab puudulik olema, mitte millestki ilma olema või ilma hakkama saama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0208
**Audit ID:** ET-B2-0208
**Card ID:** `b2-entehren-619`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** entehren
**LV MASTER reference:** laupīt godu • apkaunot
**CURRENT:** au röövima • häbistama
**PROPOSED_ET (audit ieteikums):** au teotama • häbistama
**Problēma:** „Au röövima” ei ole loomulik ega täpne eesti väljend; tähendus on kellegi au teotama või häbistama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0209
**Audit ID:** ET-B2-0209
**Card ID:** `b2-enterben-621`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** enterben
**LV MASTER reference:** atņemt mantojumu
**CURRENT:** pärandit ära võtma
**PROPOSED_ET (audit ieteikums):** pärandist ilma jätma
**Problēma:** Tähendus on arusaadav, kuid loomulikum ja täpsem vaste on „pärandist ilma jätma”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0210
**Audit ID:** ET-B2-0210
**Card ID:** `b2-entfallen-622`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** entfallen
**LV MASTER reference:** izkrist • aizmirsties
**CURRENT:** välja kukkuma • unustuma
**PROPOSED_ET (audit ieteikums):** ära jääma • välja langema • ununema
**Problēma:** „Välja kukkuma” tähendab füüsiliselt kukkumist ega vasta tavapärasele tähendusele „ära jääma” või „välja langema”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0211
**Audit ID:** ET-B2-0211
**Card ID:** `b2-entfalten-623`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** entfalten
**LV MASTER reference:** attīt • atlocīt • attīstīt • izvērst
**CURRENT:** lahti keerama • lahti voltima • arendama • laiendama
**PROPOSED_ET (audit ieteikums):** lahti rullima • lahti voltima • arendama • laiendama
**Problēma:** „Lahti keerama” tähendab pigem lahti kruvimist; „entfalten” tähendab lahti rullima või lahti voltima.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0212
**Audit ID:** ET-B2-0212
**Card ID:** `b2-sich entfalten-624`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sich entfalten
**LV MASTER reference:** atvērties • atraisīties • attīstīties • izvērsties
**CURRENT:** avanema • vabanema • arenema • laienema
**PROPOSED_ET (audit ieteikums):** avanema • arenema • õitsele puhkema • välja kujunema
**Problēma:** „Vabanema” tähendab vabaks saama, mitte arenema või oma potentsiaali avaldama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0213
**Audit ID:** ET-B2-0213
**Card ID:** `b2-enthüllen-630`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** enthüllen
**LV MASTER reference:** atklāt • atsegt
**CURRENT:** avastama • avama
**PROPOSED_ET (audit ieteikums):** paljastama • avalikustama
**Problēma:** „Avastama” tähendab midagi esimest korda leidma ning „avama” avamist; mõte on paljastada või avalikustada.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0214
**Audit ID:** ET-B2-0214
**Card ID:** `b2-entmutigen-637`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** entmutigen
**LV MASTER reference:** atņemt drosmi
**CURRENT:** julgust võtma
**PROPOSED_ET (audit ieteikums):** julgust vähendama • heidutama
**Problēma:** „Julgust võtma” tähendab julgust koguma, seega on tähendus vastupidine sõnale „entmutigen”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0215
**Audit ID:** ET-B2-0215
**Card ID:** `b2-Entwerter-647`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Entwerter
**LV MASTER reference:** kompostrs
**CURRENT:** pilettempler
**PROPOSED_ET (audit ieteikums):** piletikomposter
**Problēma:** „Piletitempler” ei ole tavapärane eesti vaste; pileti kehtetuks tegemise seade on „piletikomposter”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0216
**Audit ID:** ET-B2-0216
**Card ID:** `b2-Erachten-660`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Erachten
**LV MASTER reference:** domas • ieskats
**CURRENT:** mõtted • arusaam
**PROPOSED_ET (audit ieteikums):** arvamus • hinnang
**Problēma:** „Erachten” tähendab arvamust või hinnangut, mitte üldiselt mõtteid või arusaama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0217
**Audit ID:** ET-B2-0217
**Card ID:** `b2-Erbauer-662`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** CRITICAL
**Category:** TRANSLATION
**DE (read-only):** Erbauer
**LV MASTER reference:** cēlājs
**CURRENT:** kraana
**PROPOSED_ET (audit ieteikums):** ehitaja • rajaja
**Problēma:** „Kraana” tähendab tõsteseadet ega ole seotud ehitaja või rajajaga.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0218
**Audit ID:** ET-B2-0218
**Card ID:** `b2-erbrechen-664`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** CRITICAL
**Category:** TRANSLATION
**DE (read-only):** erbrechen
**LV MASTER reference:** vemt
**CURRENT:** lahti murdma • sisse murdma
**PROPOSED_ET (audit ieteikums):** oksendama
**Problēma:** Praegused vasted tähendavad lahti või sisse murdma; „erbrechen” tähendab oksendama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0219
**Audit ID:** ET-B2-0219
**Card ID:** `b2-Erdrutsch-667`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Erdrutsch
**LV MASTER reference:** nogruvums
**CURRENT:** varing
**PROPOSED_ET (audit ieteikums):** maalihe
**Problēma:** „Varing” on üldine kokkuvarisemine; „Erdrutsch” täpne eesti vaste on „maalihe”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0220
**Audit ID:** ET-B2-0220
**Card ID:** `b2-erlangen-682`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** erlangen
**LV MASTER reference:** aizsniegt • sasniegt • gūt • iegūt
**CURRENT:** ulatuma • saavutama • omandama
**PROPOSED_ET (audit ieteikums):** saavutama • omandama • kätte saama
**Problēma:** „Ulatuma” tähendab ulatuma või küündima, mitte millegi saavutamist või omandamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0221
**Audit ID:** ET-B2-0221
**Card ID:** `b2-Erlass-683`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Erlass
**LV MASTER reference:** rīkojums • pavēle • dekrēts • atlaišana
**CURRENT:** korraldus • käsk • dekreet • vallandamine
**PROPOSED_ET (audit ieteikums):** korraldus • käsk • dekreet • võlast vabastamine
**Problēma:** Erlass tähendab määrust või korraldust; „vallandamine” on siin eksitav tähendus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0222
**Audit ID:** ET-B2-0222
**Card ID:** `b2-erlassen-684`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** erlassen
**LV MASTER reference:** izdot • atlaist • atbrīvot
**CURRENT:** väljastama • vallandama • vabastama
**PROPOSED_ET (audit ieteikums):** välja andma • vabastama • maha kandma
**Problēma:** Seaduse või võla kohta ei tähenda „erlassen” vallandamist; sobivad „välja andma” ja „maha kandma”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0223
**Audit ID:** ET-B2-0223
**Card ID:** `b2-erleiden-687`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** erleiden
**LV MASTER reference:** ciest • izciest • pārciest • tikt sakautam
**CURRENT:** kannatama • üle elama • saama alistatud
**PROPOSED_ET (audit ieteikums):** kannatama • üle elama • lüüasaamist kannatama
**Problēma:** „Saama alistatud” on ebaloomulik ning tähendab pigem aktiivset alistamist, mitte kaotuse kannatamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0224
**Audit ID:** ET-B2-0224
**Card ID:** `b2-Eröffnung-695`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Eröffnung
**LV MASTER reference:** atvēršana • atklāšana • atklātne • paziņojums • atklājums
**CURRENT:** avamine • avastamine • postkaart • teadaanne • avastus
**PROPOSED_ET (audit ieteikums):** avamine • pidulik avamine • avasõna
**Problēma:** „Avastamine”, „postkaart” ja „avastus” tähendavad discovery või postcard, mitte avamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0225
**Audit ID:** ET-B2-0225
**Card ID:** `b2-Erreger-700`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Erreger
**LV MASTER reference:** slimības ierosinātājs • vīruss
**CURRENT:** haigustekitaja • viirus
**PROPOSED_ET (audit ieteikums):** haigustekitaja
**Problēma:** „Erreger” on üldmõiste haigustekitaja kohta ega tähenda tingimata viirust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0226
**Audit ID:** ET-B2-0226
**Card ID:** `b2-ersehen-709`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ersehen
**LV MASTER reference:** redzēt • saskatīt
**CURRENT:** nägema • märkama
**PROPOSED_ET (audit ieteikums):** välja lugema • järeldama
**Problēma:** „Etwas ersehen” tähendab kontekstist välja lugemist või järeldamist, mitte lihtsalt nägemist või märkamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0227
**Audit ID:** ET-B2-0227
**Card ID:** `b2-ertönen-716`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ertönen
**LV MASTER reference:** atskanēt • ieskanēties
**CURRENT:** kõlama hakkama
**PROPOSED_ET (audit ieteikums):** kõlama • kostma
**Problēma:** „Kõlama hakkama” lisab algamise tähenduse; ertönen tähendab heli kõlamist või kostmist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0228
**Audit ID:** ET-B2-0228
**Card ID:** `b2-Fachabitur-746`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Fachabitur
**LV MASTER reference:** pabeigta apmācība arodskolā
**CURRENT:** lõpetatud kutseõpe
**PROPOSED_ET (audit ieteikums):** erialane küpsustunnistus
**Problēma:** Fachabitur on erialane kõrgkooli sisseastumise kvalifikatsioon, mitte lõpetatud kutseõpe.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0229
**Audit ID:** ET-B2-0229
**Card ID:** `b2-Fahrdamm-752`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Fahrdamm
**LV MASTER reference:** ielas braucamā daļa • bruģis
**CURRENT:** sõidutee • sillutis
**PROPOSED_ET (audit ieteikums):** sõidutee
**Problēma:** Fahrdamm tähendab sõiduteed, mitte üldiselt sillutist või teekattematerjali.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0230
**Audit ID:** ET-B2-0230
**Card ID:** `b2-fahrlässig-754`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** fahrlässig
**LV MASTER reference:** neuzmanīgs • paviršs
**CURRENT:** hooletu • pealiskaudne
**PROPOSED_ET (audit ieteikums):** hooletu
**Problēma:** Pealiskaudne tähendab „superficial” ega vasta saksa sõna tähendusele „hooletu/negligent”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0231
**Audit ID:** ET-B2-0231
**Card ID:** `b2-Falke-755`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Falke
**LV MASTER reference:** piekūns
**CURRENT:** kull
**PROPOSED_ET (audit ieteikums):** pistrik
**Problēma:** Kull tähendab eesti keeles hawk; Falke on pistrik ehk falcon.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0232
**Audit ID:** ET-B2-0232
**Card ID:** `b2-Faulbaum-771`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Faulbaum
**LV MASTER reference:** ieva
**CURRENT:** toomingas
**PROPOSED_ET (audit ieteikums):** paakspuu
**Problēma:** Faulbaum on paakspuu; toomingas tähendab bird cherry ja on teine taim.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0233
**Audit ID:** ET-B2-0233
**Card ID:** `b2-Fessel-781`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Fessel
**LV MASTER reference:** ķēde • važas
**CURRENT:** kett • ahelad
**PROPOSED_ET (audit ieteikums):** kett • köidik
**Problēma:** Teine vaste on mitmuses, kuigi saksa märksõna on ainsuses; „köidik” on täpsem ahela või köite vaste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0234
**Audit ID:** ET-B2-0234
**Card ID:** `b2-Fetzen-786`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Fetzen
**LV MASTER reference:** skrandas • driska
**CURRENT:** räbalad
**PROPOSED_ET (audit ieteikums):** räbal • ribad
**Problēma:** Saksa märksõna on ainsuses; „räbalad” on ainult mitmus ja ei vasta märksõna põhivormile.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0235
**Audit ID:** ET-B2-0235
**Card ID:** `b2-fliederfarben-800`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** fliederfarben
**LV MASTER reference:** ceriņu krāsā
**CURRENT:** lilla värvi
**PROPOSED_ET (audit ieteikums):** sirelililla
**Problēma:** „Lilla värvi” on üldine purple, kuid „fliederfarben” tähendab täpsemalt sirelilillat ehk sireli värvi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0236
**Audit ID:** ET-B2-0236
**Card ID:** `b2-Flussarm-811`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Flussarm
**LV MASTER reference:** atteka
**CURRENT:** hargjõgi
**PROPOSED_ET (audit ieteikums):** jõeharu
**Problēma:** „Hargjõgi” tähistab pigem harunenud jõge või jõeharu; saksa Flussarm täpne vaste on „jõeharu”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0237
**Audit ID:** ET-B2-0237
**Card ID:** `b2-Flussbett-812`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** Flussbett
**LV MASTER reference:** gultne
**CURRENT:** sängi (jõe)
**PROPOSED_ET (audit ieteikums):** jõesäng
**Problēma:** „Sängi” on käändevorm, mitte märksõna põhivorm; loomulik ja täpne vaste on liitsõna „jõesäng”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0238
**Audit ID:** ET-B2-0238
**Card ID:** `b2-freilich-831`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** freilich
**LV MASTER reference:** protams • bez šaubām • bet • tikai
**CURRENT:** muidugi • kahtlemata • aga • ainult
**PROPOSED_ET (audit ieteikums):** muidugi • kahtlemata • aga
**Problēma:** Freilich tähendab siin „muidugi/kahtlemata” või vastandavat „aga”, mitte iseseisvalt „ainult”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0239
**Audit ID:** ET-B2-0239
**Card ID:** `b2-freisprechen-834`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** freisprechen
**LV MASTER reference:** attaisnot
**CURRENT:** õigustama
**PROPOSED_ET (audit ieteikums):** õigeks mõistma
**Problēma:** Õigustama tähendab põhjendama või õigustama; freisprechen tähendab süüdistatava õigeks mõistmist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0240
**Audit ID:** ET-B2-0240
**Card ID:** `b2-fremdgehen-836`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** fremdgehen
**LV MASTER reference:** kļūt neuzticīgam
**CURRENT:** ebalojaalseks muutuma
**PROPOSED_ET (audit ieteikums):** truudust murdma
**Problēma:** Fremdgehen tähendab eelkõige suhtes truudusetu olema või abielu rikkuma, mitte üldiselt ebalojaalseks muutuma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0241
**Audit ID:** ET-B2-0241
**Card ID:** `b2-friedfertig-837`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** friedfertig
**LV MASTER reference:** miermīlīgs • saticīgs
**CURRENT:** rahumeelne • sallija
**PROPOSED_ET (audit ieteikums):** rahumeelne • rahuarmastav
**Problēma:** Sallija on salliv inimene; friedfertig tähendab rahumeelset või rahuarmastavat.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0242
**Audit ID:** ET-B2-0242
**Card ID:** `b2-fristlos-838`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** fristlos
**LV MASTER reference:** beztermiņa
**CURRENT:** tähtajatu
**PROPOSED_ET (audit ieteikums):** etteteatamistähtajata
**Problēma:** Fristlos tähendab etteteatamistähtajata või ilma tähtajata lõpetamist, mitte üldiselt tähtajatut.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0243
**Audit ID:** ET-B2-0243
**Card ID:** `b2-Führernatur-847`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Führernatur
**LV MASTER reference:** līdera tips • līderis
**CURRENT:** liidritüüp • liider
**PROPOSED_ET (audit ieteikums):** liidri loomus • juhivõimed
**Problēma:** Führernatur tähistab juhi loomust või juhtimisomadusi, mitte lihtsalt liidrit ennast.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0244
**Audit ID:** ET-B2-0244
**Card ID:** `b2-Funkstation-851`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Funkstation
**LV MASTER reference:** raidstacija
**CURRENT:** saatejaam
**PROPOSED_ET (audit ieteikums):** raadiojaam
**Problēma:** Funkstation on raadiojaam või raadiosidejaam; saatejaam viitab pigem ringhäälingu edastusjaamale.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0245
**Audit ID:** ET-B2-0245
**Card ID:** `b2-Funkstörung-852`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Funkstörung
**LV MASTER reference:** traucējumi pārraidē
**CURRENT:** ülekandehäired
**PROPOSED_ET (audit ieteikums):** raadiosidehäire
**Problēma:** Funkstörung tähendab raadioside- või raadiohäiret; ülekandehäired on liiga üldine.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0246
**Audit ID:** ET-B2-0246
**Card ID:** `b2-Funktionär-854`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Funktionär
**LV MASTER reference:** aktīvists • darbinieks
**CURRENT:** aktivist • töötaja
**PROPOSED_ET (audit ieteikums):** funktsionäär
**Problēma:** Funktionär on ametnik või organisatsiooni funktsionäär, mitte üldiselt aktivist või töötaja.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0247
**Audit ID:** ET-B2-0247
**Card ID:** `b2-Furche-855`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Furche
**LV MASTER reference:** vaga • krunka • grumba
**CURRENT:** vagu • kortsujoon
**PROPOSED_ET (audit ieteikums):** vagu • korts
**Problēma:** Kortsujoon on ebaloomulik; Furche tähistab kortsu või vagu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0248
**Audit ID:** ET-B2-0248
**Card ID:** `b2-gängig-863`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** gängig
**LV MASTER reference:** ejošs
**CURRENT:** käiv
**PROPOSED_ET (audit ieteikums):** levinud • tavapärane
**Problēma:** Gängig tähendab tavaliselt levinud, tavapärast või üldkasutatavat; käiv tähendab pigem töötavat või toimivat.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0249
**Audit ID:** ET-B2-0249
**Card ID:** `b2-Gasableser-870`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Gasableser
**LV MASTER reference:** gāzes skaitītājs
**CURRENT:** gaasiarvesti
**PROPOSED_ET (audit ieteikums):** gaasinäidu lugeja
**Problēma:** Gasableser on gaasimõõtja näidu lugeja ehk inimene, mitte gaasiarvesti ise.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0250
**Audit ID:** ET-B2-0250
**Card ID:** `b2-gebrechlich-877`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gebrechlich
**LV MASTER reference:** vārgs • sanīcis • gaudens • kroplīgs • pilns vainām
**CURRENT:** nõrk • kidur • vilets • vigane • vigadega
**PROPOSED_ET (audit ieteikums):** nõrk • kidur • vilets • põdur
**Problēma:** „Vigane” ja „vigadega” tähendavad defektset või vigadega, mitte füüsiliselt nõrka ja põdurat.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0251
**Audit ID:** ET-B2-0251
**Card ID:** `b2-gedeihen-880`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** gedeihen
**LV MASTER reference:** labi padoties • izdoties • zelt • plaukt
**CURRENT:** hästi õnnestuma • õnnestuma • õitsema
**PROPOSED_ET (audit ieteikums):** edenema • õitsema • hästi kasvama
**Problēma:** „Gedeihen” tähendab edenemist ja head kasvamist; „õnnestuma” tähendab peamiselt õnnestumist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0252
**Audit ID:** ET-B2-0252
**Card ID:** `b2-gedenken-881`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gedenken
**LV MASTER reference:** būt nodomājušam • atcerēties • atminēties • pieminēt
**CURRENT:** kavatsema • meenutama • mainima
**PROPOSED_ET (audit ieteikums):** kavatsema • meenutama • mälestama
**Problēma:** „Mainima” tähendab mainimist, mitte kellegi või millegi mälestamist, mis on „gedenken” keskne tähendus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0253
**Audit ID:** ET-B2-0253
**Card ID:** `b2-Gefährte-884`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Gefährte
**LV MASTER reference:** biedrs
**CURRENT:** liige
**PROPOSED_ET (audit ieteikums):** kaaslane • seltsiline
**Problēma:** „Gefährte” tähendab kaaslast või seltsilist; „liige” tähendab organisatsiooni või rühma liiget.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0254
**Audit ID:** ET-B2-0254
**Card ID:** `b2-Gefallen-885`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Gefallen
**LV MASTER reference:** patikšana • patika
**CURRENT:** meeldivus
**PROPOSED_ET (audit ieteikums):** meeldimine • heameel
**Problēma:** „Gefallen” tähendab meeldimist või heameelt; „meeldivus” tähistab pigem meeldivat omadust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0255
**Audit ID:** ET-B2-0255
**Card ID:** `b2-gefällig-886`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** gefällig
**LV MASTER reference:** patīkams • pakalpīgs • iztapīgs • laipns
**CURRENT:** meeldiv • teenistusvalmis • lahke
**PROPOSED_ET (audit ieteikums):** meeldiv • vastutulelik • lahke
**Problēma:** „Teenistusvalmis” tähendab teenistuseks valmis, mitte inimestele vastutulelikku või abivalmit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0256
**Audit ID:** ET-B2-0256
**Card ID:** `b2-gelaunt-903`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** gelaunt
**LV MASTER reference:** omā
**CURRENT:** meeleolu
**PROPOSED_ET (audit ieteikums):** meeleolus
**Problēma:** Saksa „gelaunt” on omadussõna; „meeleolu” on nimisõna. Vastav eestikeelne omadussõnaline vaste on „meeleolus”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0257
**Audit ID:** ET-B2-0257
**Card ID:** `b2-Geliebte-910`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Geliebte
**LV MASTER reference:** mīļais • mīļotais • mīļākais
**CURRENT:** kallis • armastatud • lemmik
**PROPOSED_ET (audit ieteikums):** armastatu (mees) • kallim
**Problēma:** Meessoost nimisõnana tähendab „Geliebte” armastatut või kallimat; „lemmik” tähendab eeskätt lemmikut.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0258
**Audit ID:** ET-B2-0258
**Card ID:** `b2-Gemisch-918`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Gemisch
**LV MASTER reference:** maisījums • sajaukums • mistrojums
**CURRENT:** segu • segamini • kokteil
**PROPOSED_ET (audit ieteikums):** segu • segum • kokteil
**Problēma:** „Segamini” on määrsõna või omadussõna, kuid saksa „Gemisch” ja teised vasted on nimisõnad.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0259
**Audit ID:** ET-B2-0259
**Card ID:** `b2-Gemüt-920`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gemüt
**LV MASTER reference:** raksturs • daba • domas • prāti
**CURRENT:** iseloom • loomus • mõtted
**PROPOSED_ET (audit ieteikums):** meel • loomus • iseloom
**Problēma:** „Gemüt” viitab inimese sisemisele loomusele või meelelaadile, mitte otseselt tema mõtetele.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0260
**Audit ID:** ET-B2-0260
**Card ID:** `b2-geraten-935`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** geraten
**LV MASTER reference:** nonākt • nokļūt • padoties • izdoties • atsisties
**CURRENT:** sattuma • jõudma • alistuma • õnnestuma • loobuma
**PROPOSED_ET (audit ieteikums):** sattuma • õnnestuma
**Problēma:** „alistuma” ja „loobuma” tähendavad alistumist ja loobumist, mitte saksa verbi geraten põhitähendusi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0261
**Audit ID:** ET-B2-0261
**Card ID:** `b2-Geratewohl-936`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Geratewohl
**LV MASTER reference:** laba laime
**CURRENT:** hea õnn
**PROPOSED_ET (audit ieteikums):** juhus
**Problēma:** Geratewohl tähendab juhuslikkust või juhuse hooleks jätmist, mitte lihtsalt head õnne.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0262
**Audit ID:** ET-B2-0262
**Card ID:** `b2-Gerede-938`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gerede
**LV MASTER reference:** runāšana • runas • ļaužu valodas • tenkas
**CURRENT:** jutt • kõned • kuulujutud
**PROPOSED_ET (audit ieteikums):** jutt • lobisemine • kuulujutud
**Problēma:** „kõned” tähendab kõnesid või telefonikõnesid, mitte Gerede tähenduses lobisemist ega tühja juttu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0263
**Audit ID:** ET-B2-0263
**Card ID:** `b2-Gerippe-940`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gerippe
**LV MASTER reference:** skelets • ģindenis • karkass
**CURRENT:** luukere • korjus • karkass
**PROPOSED_ET (audit ieteikums):** luukere • karkass
**Problēma:** „korjus” tähendab surnud looma või inimese keha, mitte luustikku ega karkassi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0264
**Audit ID:** ET-B2-0264
**Card ID:** `b2-Gesamtzahl-942`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Gesamtzahl
**LV MASTER reference:** kopskaits
**CURRENT:** kogusumma
**PROPOSED_ET (audit ieteikums):** koguarv
**Problēma:** Gesamtzahl tähendab koguarvu ehk elementide koguhulka; „kogusumma” viitab summaarsele väärtusele.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0265
**Audit ID:** ET-B2-0265
**Card ID:** `b2-Geschwätz-950`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Geschwätz
**LV MASTER reference:** pļāpāšana • melošana • pļāpas
**CURRENT:** lobisemine • valetamine • lobajutt
**PROPOSED_ET (audit ieteikums):** lobisemine • tühi jutt • lobajutt
**Problēma:** Geschwätz on lobisemine või tühi jutt; „valetamine” tähendab teadlikult ebatõe rääkimist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0266
**Audit ID:** ET-B2-0266
**Card ID:** `b2-Gesinnung-958`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gesinnung
**LV MASTER reference:** uzskati • noskaņojums
**CURRENT:** vaated • meeleolu
**PROPOSED_ET (audit ieteikums):** vaated • hoiak
**Problēma:** Gesinnung tähendab inimese hoiakuid, veendumusi või maailmavaadet; „meeleolu” tähendab emotsionaalset tuju.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0267
**Audit ID:** ET-B2-0267
**Card ID:** `b2-Gestein-964`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Gestein
**LV MASTER reference:** iezis
**CURRENT:** kaljurahn
**PROPOSED_ET (audit ieteikums):** kivim
**Problēma:** Gestein tähendab kivimit või kivimainet; „kaljurahn” on üksik suur kivimürakas.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0268
**Audit ID:** ET-B2-0268
**Card ID:** `b2-getüpfelt-969`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** getüpfelt
**LV MASTER reference:** punktots
**CURRENT:** punktiirjooneline
**PROPOSED_ET (audit ieteikums):** täpiline
**Problēma:** Getüpfelt tähendab täpilist või täppidega kaetud; „punktiirjooneline” kirjeldab katkendlikku joont.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0269
**Audit ID:** ET-B2-0269
**Card ID:** `b2-Gewässer-975`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Gewässer
**LV MASTER reference:** ūdeņi
**CURRENT:** veed
**PROPOSED_ET (audit ieteikums):** veekogu
**Problēma:** Gewässer tähistab veekogu või veekogusid; „veed” on selles tähenduses liiga üldine ja vähem loomulik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0270
**Audit ID:** ET-B2-0270
**Card ID:** `b2-gewieft-978`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gewieft
**LV MASTER reference:** rūdīts • izmanīgs
**CURRENT:** karastunud • kaval
**PROPOSED_ET (audit ieteikums):** kaval • nutikas
**Problēma:** Gewieft tähendab kavalat, nutikat või elukogenult osavat; „karastunud” tähendab pigem sitkeks muutunud või väljaõppinud.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0271
**Audit ID:** ET-B2-0271
**Card ID:** `b2-Gewissheit-980`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gewissheit
**LV MASTER reference:** skaidrība • drošība • noteiktība
**CURRENT:** selgus • kindlus
**PROPOSED_ET (audit ieteikums):** kindlus • veendumus
**Problēma:** „Selgus“ tähendab eeskätt clarity, mitte certainty; „kindlus“ ja „veendumus“ vastavad saksa sõnale täpsemalt.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0272
**Audit ID:** ET-B2-0272
**Card ID:** `b2-Gezeiten-981`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Gezeiten
**LV MASTER reference:** plūdmaiņas
**CURRENT:** tõus-mõõn
**PROPOSED_ET (audit ieteikums):** tõus ja mõõn
**Problēma:** Eesti keeles kasutatakse selle nähtuse nimetuses loomulikult ühendit „tõus ja mõõn“, mitte sellist sidekriipsuga kuju.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0273
**Audit ID:** ET-B2-0273
**Card ID:** `b2-Gipsverband-989`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Gipsverband
**LV MASTER reference:** ģipša pārsējs
**CURRENT:** gipsplaastr
**PROPOSED_ET (audit ieteikums):** kipsiside
**Problēma:** „Gipsplaastr“ tähendab pigem kipsplaastrit; „Gipsverband“ on kipsiside või kipslahas.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0274
**Audit ID:** ET-B2-0274
**Card ID:** `b2-Glatze-995`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Glatze
**LV MASTER reference:** kails galvvidus
**CURRENT:** paljas peanahk
**PROPOSED_ET (audit ieteikums):** kiilaspäisus
**Problēma:** „Paljas peanahk“ kirjeldab nähtavat peanahka, kuid „Glatze“ tähendab kiilaspäisust või kiilast pead.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0275
**Audit ID:** ET-B2-0275
**Card ID:** `b2-Stirnglatze-996`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Stirnglatze
**LV MASTER reference:** atsegta piere
**CURRENT:** avatud laup
**PROPOSED_ET (audit ieteikums):** otsmiku kiilaspäisus
**Problēma:** „Avatud laup“ ei tähenda kiilaspäisust; sõna viitab juuksepiiri taandumisele või kiilaspäisusele otsmikul.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0276
**Audit ID:** ET-B2-0276
**Card ID:** `b2-Gleichnis-998`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Gleichnis
**LV MASTER reference:** līdzība
**CURRENT:** sarnasus
**PROPOSED_ET (audit ieteikums):** tähendamissõna • võrdum
**Problēma:** „Sarnasus“ tähendab similarity; „Gleichnis“ on tähendamissõna või võrdum.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0277
**Audit ID:** ET-B2-0277
**Card ID:** `b2-gleiten-999`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** gleiten
**LV MASTER reference:** slīdēt • planēt
**CURRENT:** libisema • planeerima
**PROPOSED_ET (audit ieteikums):** libisema • liuglema
**Problēma:** „Planeerima“ tähendab planning; liikumist õhus või pinnal tähistab siin „liuglema“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0278
**Audit ID:** ET-B2-0278
**Card ID:** `b2-gliedern-1001`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** gliedern
**LV MASTER reference:** sadalīt
**CURRENT:** jagama
**PROPOSED_ET (audit ieteikums):** liigendama • jaotama
**Problēma:** „Gliedern“ tähendab millegi liigendamist või struktureerimist; „jagama“ on liiga üldine ega anna seda tähendust täpselt edasi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0279
**Audit ID:** ET-B2-0279
**Card ID:** `b2-gnädig-1008`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gnädig
**LV MASTER reference:** žēlīgs • cienīts
**CURRENT:** armulik • austatud
**PROPOSED_ET (audit ieteikums):** armuline • halastav
**Problēma:** „Austatud“ tähendab respected, mitte gracious või merciful; teine vaste muudab tähenduse ebatäpseks.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0280
**Audit ID:** ET-B2-0280
**Card ID:** `b2-grauen-1022`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** grauen
**LV MASTER reference:** aust
**CURRENT:** kuduma
**PROPOSED_ET (audit ieteikums):** koitma
**Problēma:** „Kuduma“ tähendab weaving; „grauen“ tähenduses dawn on eesti keeles „koitma“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0281
**Audit ID:** ET-B2-0281
**Card ID:** `b2-Grußwort-1041`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Grußwort
**LV MASTER reference:** īsa oficiāla uzruna
**CURRENT:** lühike ametlik kõne
**PROPOSED_ET (audit ieteikums):** tervituskõne
**Problēma:** Tõlge tähendab üldist lühikest ametlikku kõnet ega anna edasi tervituse või tervituskõne tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0282
**Audit ID:** ET-B2-0282
**Card ID:** `b2-Günstling-1044`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Günstling
**LV MASTER reference:** favorīts • protežējamais
**CURRENT:** lemmik • soositav
**PROPOSED_ET (audit ieteikums):** lemmik • soosik
**Problēma:** Soositav on omadussõna; Günstling on nimisõna inimese kohta, keda mõjukas isik soosib.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0283
**Audit ID:** ET-B2-0283
**Card ID:** `b2-gurgeln-1045`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** gurgeln
**LV MASTER reference:** skalot rīkli • muti
**CURRENT:** kurku • suud loputama
**PROPOSED_ET (audit ieteikums):** kuristama • suud loputama
**Problēma:** Kurku on siinses tõlkes vigane sõnaühendi fragment; saksa verb tähendab kuristama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0284
**Audit ID:** ET-B2-0284
**Card ID:** `b2-Güte-1048`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Güte
**LV MASTER reference:** labsirdība • kvalitāte • labums
**CURRENT:** heasüdamlikkus • kvaliteet • kasu
**PROPOSED_ET (audit ieteikums):** heasüdamlikkus • kvaliteet
**Problēma:** Kasu tähendab benefit/profit, mitte Güte tähendustena headus, heatahtlikkus või kvaliteet.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0285
**Audit ID:** ET-B2-0285
**Card ID:** `b2-haaren-1053`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** haaren
**LV MASTER reference:** mest spalvu
**CURRENT:** sulgima (lindudel)
**PROPOSED_ET (audit ieteikums):** karva ajama • sulgima
**Problēma:** Praegune tõlge piirdub lindude sulgimisega; haaren tähendab üldiselt karvade või sulgede eraldumist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0286
**Audit ID:** ET-B2-0286
**Card ID:** `b2-Hängebrücke-1062`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Hängebrücke
**LV MASTER reference:** vanšu tilts
**CURRENT:** vantsild
**PROPOSED_ET (audit ieteikums):** rippsild
**Problēma:** Vantsild on tross-sild ehk cable-stayed bridge; Hängebrücke on ripp- ehk suspension bridge.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0287
**Audit ID:** ET-B2-0287
**Card ID:** `b2-Hängsel-1063`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Hängsel
**LV MASTER reference:** piešūtais drēbju pakaramais
**CURRENT:** õmmeldud riidepuu
**PROPOSED_ET (audit ieteikums):** õmmeldud riputusaas
**Problēma:** Riidepuu tähendab clothes hanger; Hängsel on rõivale õmmeldud riputusaas või aas.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0288
**Audit ID:** ET-B2-0288
**Card ID:** `b2-Harsch-1067`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Harsch
**LV MASTER reference:** sērsna • apledojis sniegs
**CURRENT:** hangelumi
**PROPOSED_ET (audit ieteikums):** lumekoorik
**Problēma:** Harsch tähendab külmunud kõva lumekoorikut; hangelumi on tuule kuhjatud või hanges olev lumi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0289
**Audit ID:** ET-B2-0289
**Card ID:** `b2-Haushaltung-1071`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Haushaltung
**LV MASTER reference:** mājturība
**CURRENT:** majapidamisõpetus
**PROPOSED_ET (audit ieteikums):** majapidamine
**Problēma:** Majapidamisõpetus tähendab kodundusõpetust kui õppeainet; Haushaltung tähendab majapidamist või majapidamise korraldamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0290
**Audit ID:** ET-B2-0290
**Card ID:** `b2-Heilkunde-1081`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Heilkunde
**LV MASTER reference:** ārstniecība • medicīna
**CURRENT:** ravi • meditsiin
**PROPOSED_ET (audit ieteikums):** arstiteadus • meditsiin
**Problēma:** Ravi tähendab treatment; Heilkunde viitab ravikunstile või meditsiiniteadusele kui valdkonnale.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0291
**Audit ID:** ET-B2-0291
**Card ID:** `b2-Heimkehr-1086`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Heimkehr
**LV MASTER reference:** atgriešanās mājās • dzimtenē
**CURRENT:** koju • kodumaale naasmine
**PROPOSED_ET (audit ieteikums):** kojutulek • kodumaale naasmine
**Problēma:** „Koju” tähendab suunda „koju”, mitte tagasipöördumist kui nimisõna.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0292
**Audit ID:** ET-B2-0292
**Card ID:** `b2-Heimwerker-1087`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Heimwerker
**LV MASTER reference:** mājamatnieks • mājmeistars
**CURRENT:** kodune käsitööline
**PROPOSED_ET (audit ieteikums):** kodumeister
**Problēma:** „Kodune käsitööline” viitab pigem kodus käsitöö tegijale; Heimwerker on kodumeister või isetegija.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0293
**Audit ID:** ET-B2-0293
**Card ID:** `b2-Hemmung-1092`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Hemmung
**LV MASTER reference:** kavēklis • šķērslis • aizture
**CURRENT:** takistus • viivitus
**PROPOSED_ET (audit ieteikums):** takistus • pidurdus
**Problēma:** „Viivitus” tähendab viivitust, kuid Hemmung tähendab siin pidurdust, tõrget või pärssimist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0294
**Audit ID:** ET-B2-0294
**Card ID:** `b2-hingeben-1118`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** hingeben
**LV MASTER reference:** atdot • aizdot projām
**CURRENT:** ära andma • laenuks andma
**PROPOSED_ET (audit ieteikums):** ära andma • pühenduma
**Problēma:** „Laenuks andma” tähendab välja laenama, kuid hingeben tähendab ka end millelegi pühendama või ohverdama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0295
**Audit ID:** ET-B2-0295
**Card ID:** `b2-Hinsicht-1121`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Hinsicht
**LV MASTER reference:** ziņa
**CURRENT:** teade
**PROPOSED_ET (audit ieteikums):** aspekt • seisukoht
**Problēma:** „Teade” tähendab sõnumit või teadet ega vasta Hinsicht tähendustele „aspekt” ja „seisukoht”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0296
**Audit ID:** ET-B2-0296
**Card ID:** `b2-Hinterhalt-1124`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Hinterhalt
**LV MASTER reference:** slēpnis
**CURRENT:** peidik
**PROPOSED_ET (audit ieteikums):** varitsus
**Problēma:** Hinterhalt on varitsus või varitsusrünnak; „peidik” tähendab peidupaika.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0297
**Audit ID:** ET-B2-0297
**Card ID:** `b2-hinterziehen-1125`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** hinterziehen
**LV MASTER reference:** piesavināties naudu • nenomaksāt nodokļus
**CURRENT:** raha omastama • makse mitte tasuma
**PROPOSED_ET (audit ieteikums):** raha omastama • maksudest kõrvale hoidma
**Problēma:** Maksudest kõrvalehoidmine on tahtlik maksupettus, mitte lihtsalt maksete tasumata jätmine.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0298
**Audit ID:** ET-B2-0298
**Card ID:** `b2-hitzig-1131`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** hitzig
**LV MASTER reference:** karsts • dedzīgs • straujš • ātrs dusmās
**CURRENT:** kuum • õhin • järsk • kiiresti vihastuv
**PROPOSED_ET (audit ieteikums):** kuum • tuline • äge • kiiresti vihastuv
**Problēma:** „Õhin” on nimisõna ega sobi omadussõnana; hitzig tähendab ka tulist või ägedat.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0299
**Audit ID:** ET-B2-0299
**Card ID:** `b2-hochwertig-1146`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** hochwertig
**LV MASTER reference:** augstvērtīgs
**CURRENT:** kõrgväärtuslik
**PROPOSED_ET (audit ieteikums):** kvaliteetne
**Problēma:** Tähendab eeskätt kvaliteetset või kõrgeklassilist, mitte lihtsalt kõrge väärtusega eset.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0300
**Audit ID:** ET-B2-0300
**Card ID:** `b2-holpern-1150`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** holpern
**LV MASTER reference:** kratīties • raustīties
**CURRENT:** raputama • vappuma
**PROPOSED_ET (audit ieteikums):** hüplema • rappuma
**Problēma:** Holpern kirjeldab konarlikul pinnal hüplevat või rappuvat liikumist; raputama on enamasti transitiivne.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0301
**Audit ID:** ET-B2-0301
**Card ID:** `b2-in flagranti-1158`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** in flagranti
**LV MASTER reference:** pieķert • darot kaut ko aizliegtu
**CURRENT:** tabama keelatud teo pealt
**PROPOSED_ET (audit ieteikums):** teolt tabama
**Problēma:** Eestikeelne püsiühend on „teolt tabama“; „keelatud teo pealt“ on ebaloomulik ja liiga sõnasõnaline.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0302
**Audit ID:** ET-B2-0302
**Card ID:** `b2-Kapazität-1168`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Kapazität
**LV MASTER reference:** ražotspēja • jauda • tilpums • ietilpība
**CURRENT:** tootlikkus • võimsus • maht
**PROPOSED_ET (audit ieteikums):** mahutavus • võimsus • suutlikkus
**Problēma:** Tootlikkus tähendab produktiivsust, mitte tavaliselt võimekust või maksimaalset mahutavust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0303
**Audit ID:** ET-B2-0303
**Card ID:** `b2-Karrierefrau-1174`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Karrierefrau
**LV MASTER reference:** sieviete, kas taisa karjeru
**CURRENT:** karjääri tegev naine
**PROPOSED_ET (audit ieteikums):** karjäärinaine
**Problēma:** „Karjäärinaine“ on loomulik ja levinud vaste; praegune väljend on kohmakas.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0304
**Audit ID:** ET-B2-0304
**Card ID:** `b2-Kaufkraft-1175`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Kaufkraft
**LV MASTER reference:** naudas • arī personas pirktspēja
**CURRENT:** raha • ka isiku ostujõud
**PROPOSED_ET (audit ieteikums):** ostujõud
**Problēma:** Kaufkraft tähendab ostujõudu, mitte raha; praegune esimene vaste on tähenduselt vale.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0305
**Audit ID:** ET-B2-0305
**Card ID:** `b2-Konsequenz-1192`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Konsequenz
**LV MASTER reference:** konsekvence • secība • secinājums • sekas
**CURRENT:** järjekindlus • järjekord • järeldus • tagajärg
**PROPOSED_ET (audit ieteikums):** järjekindlus • järeldus • tagajärg
**Problēma:** „Järjekord” tähendab järjestust, mitte Konsequenz tähendust; ülejäänud vasted on sobivad.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0306
**Audit ID:** ET-B2-0306
**Card ID:** `b2-korrumpieren-1199`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** korrumpieren
**LV MASTER reference:** piekukuļot
**CURRENT:** altkäemaksu andma
**PROPOSED_ET (audit ieteikums):** ära ostma • korrumpeerima
**Problēma:** Praegune vaste tähendab altkäemaksu andmist; korrumpieren tähendab kellegi äraostmist või korrumpeerimist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0307
**Audit ID:** ET-B2-0307
**Card ID:** `b2-korrupt-1200`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** korrupt
**LV MASTER reference:** pērkams • piekukuļojams
**CURRENT:** ostetav • altkäemaksuga mõjutatav
**PROPOSED_ET (audit ieteikums):** korruptne • äraostetav
**Problēma:** Praegused vasted tähendavad peamiselt äraostetavat, kuid korrupt hõlmab ka otseselt korrumpeerunud tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0308
**Audit ID:** ET-B2-0308
**Card ID:** `b2-Laie-1205`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Laie
**LV MASTER reference:** diletants
**CURRENT:** diletant
**PROPOSED_ET (audit ieteikums):** võhik • asjaarmastaja
**Problēma:** Laie tähendab mittespetsialisti või võhikut; „diletant” viitab pigem asjaarmastajale ja võib olla halvustav.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0309
**Audit ID:** ET-B2-0309
**Card ID:** `b2-Laufwerk-1222`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Laufwerk
**LV MASTER reference:** dzinējs • dzinis
**CURRENT:** mootor • ajav jõud
**PROPOSED_ET (audit ieteikums):** mootor • ajam
**Problēma:** „Ajav jõud” tähendab edasiviivat jõudu; Laufwerk tähendab tehnilist ajamit või mehhanismi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0310
**Audit ID:** ET-B2-0310
**Card ID:** `b2-Lehrstuhl-1228`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Lehrstuhl
**LV MASTER reference:** katedra
**CURRENT:** katedra
**PROPOSED_ET (audit ieteikums):** õppetool
**Problēma:** Ülikooli Lehrstuhl on õppetool või professuur; „katedra” tähendab pigem õppe- või teadusüksust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0311
**Audit ID:** ET-B2-0311
**Card ID:** `b2-Leichenhalle-1231`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Leichenhalle
**LV MASTER reference:** kapliča kapos
**CURRENT:** kabel kalmistul
**PROPOSED_ET (audit ieteikums):** surnukuur
**Problēma:** Leichenhalle tähendab surnukuuri või surnusaali, mitte kalmistul asuvat kabelit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0312
**Audit ID:** ET-B2-0312
**Card ID:** `b2-lispeln-1250`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** lispeln
**LV MASTER reference:** šļupstēt
**CURRENT:** sosistama • pudistama
**PROPOSED_ET (audit ieteikums):** susistama • pudistama
**Problēma:** „Sosistama” tähendab sosistamist; „susistama” tähistab kõnelemist susistades ehk š-iga.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0313
**Audit ID:** ET-B2-0313
**Card ID:** `b2-Marssonde-1289`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**DE (read-only):** Marssonde
**LV MASTER reference:** marsa zonde
**CURRENT:** Marsi-sond
**PROPOSED_ET (audit ieteikums):** Marsisond
**Problēma:** Estoniakeelne liitsõna kirjutatakse kokku; sidekriips on siin põhjendamatu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0314
**Audit ID:** ET-B2-0314
**Card ID:** `b2-maßlos-1296`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** maßlos
**LV MASTER reference:** neizmērojams • bezgalīgs
**CURRENT:** mõõtmatu • lõputu
**PROPOSED_ET (audit ieteikums):** mõõdutundetu • piiritu
**Problēma:** Tähendus on pigem mõõdutundetu või ülemäärane, mitte sõna-sõnalt mõõtmatu või lõputu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0315
**Audit ID:** ET-B2-0315
**Card ID:** `b2-Meerenge-1301`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Meerenge
**LV MASTER reference:** jūras šaurums
**CURRENT:** merekitsus
**PROPOSED_ET (audit ieteikums):** väin
**Problēma:** Meerenge tähendab eesti keeles standardterminina väina; „merekitsus” ei ole loomulik vaste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0316
**Audit ID:** ET-B2-0316
**Card ID:** `b2-menschenscheu-1307`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** menschenscheu
**LV MASTER reference:** nesabiedrisks • bikls
**CURRENT:** ebasotsiaalne • arg
**PROPOSED_ET (audit ieteikums):** inimpelglik • inimestest hoiduv
**Problēma:** „Arg” tähendab kartlikku või julgetut, mitte inimestest hoiduvat; põhitähendus on inimpelglik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0317
**Audit ID:** ET-B2-0317
**Card ID:** `b2-Milbe-1313`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Milbe
**LV MASTER reference:** ērce
**CURRENT:** puuk
**PROPOSED_ET (audit ieteikums):** lest
**Problēma:** Milbe on lest; „puuk” tähendab puuki ehk teistsugust ämblikulaadset.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0318
**Audit ID:** ET-B2-0318
**Card ID:** `b2-militärfrei-1319`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** militärfrei
**LV MASTER reference:** karaklausībai nepadots
**CURRENT:** ajateenistuskõlbmatu
**PROPOSED_ET (audit ieteikums):** ajateenistusest vabastatud
**Problēma:** „Militärfrei” tähendab sõjaväeteenistusest vabastatut, mitte tingimata ajateenistuseks kõlbmatut.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0319
**Audit ID:** ET-B2-0319
**Card ID:** `b2-minderwertig-1322`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** minderwertig
**LV MASTER reference:** mazvērtīgs
**CURRENT:** vähene väärtusega
**PROPOSED_ET (audit ieteikums):** väheväärtuslik
**Problēma:** Praeguses vastes on käändeviga: „vähene väärtusega” ei ole korrektne ega loomulik eesti väljend.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0320
**Audit ID:** ET-B2-0320
**Card ID:** `b2-Müllentsorgung-1339`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Müllentsorgung
**LV MASTER reference:** atkritumu iznīcināšana
**CURRENT:** jäätmete hävitamine
**PROPOSED_ET (audit ieteikums):** jäätmete kõrvaldamine
**Problēma:** Entsorgung tähendab jäätmete kõrvaldamist või käitlemist, mitte tingimata nende hävitamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0321
**Audit ID:** ET-B2-0321
**Card ID:** `b2-namens-1361`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** namens
**LV MASTER reference:** vārdā • uzvārdā
**CURRENT:** eesnimeliselt • perekonnanimeliselt
**PROPOSED_ET (audit ieteikums):** nimel • nimega
**Problēma:** namens tähendab üldiselt „nimel” või „nimega”, mitte tingimata ees- ja perekonnanime järgi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0322
**Audit ID:** ET-B2-0322
**Card ID:** `b2-Nesselfieber-1372`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Nesselfieber
**LV MASTER reference:** nātrene
**CURRENT:** nõgesvõrk (haigus)
**PROPOSED_ET (audit ieteikums):** nõgestõbi
**Problēma:** Nesselfieber on eesti keeles „nõgestõbi” või „urtikaaria”; „nõgesvõrk” ei tähista seda haigust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0323
**Audit ID:** ET-B2-0323
**Card ID:** `b2-neuerdings-1374`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** neuerdings
**LV MASTER reference:** nesen • šais dienās • no jauna • atkal
**CURRENT:** hiljuti • neil päevil • uuesti
**PROPOSED_ET (audit ieteikums):** hiljuti • neil päevil • viimasel ajal
**Problēma:** „uuesti” tähendab „again”, kuid neuerdings tähendab „hiljuti” või „viimasel ajal”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0324
**Audit ID:** ET-B2-0324
**Card ID:** `b2-Niederschlag-1383`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Niederschlag
**LV MASTER reference:** nogulsnes • nokrišņi
**CURRENT:** sademed
**PROPOSED_ET (audit ieteikums):** sademed • sete
**Problēma:** Niederschlag tähendab nii sademeid kui ka ladestist; „sademed” jätab teise põhitähenduse välja.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0325
**Audit ID:** ET-B2-0325
**Card ID:** `b2-Nutzeffekt-1391`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Nutzeffekt
**LV MASTER reference:** lietderības koeficients
**CURRENT:** kasuteguri koefitsient
**PROPOSED_ET (audit ieteikums):** kasutegur
**Problēma:** „Kasuteguri koefitsient” on eesti keeles tarbetult kordav; Nutzeffekt vastab terminile „kasutegur”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0326
**Audit ID:** ET-B2-0326
**Card ID:** `b2-Nutzholz-1392`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Nutzholz
**LV MASTER reference:** lietaskoki
**CURRENT:** kasutusmets
**PROPOSED_ET (audit ieteikums):** tarbepuit
**Problēma:** „Kasutusmets“ tähendab kasutamiseks majandatavat metsa, mitte kasutuseks mõeldud puitu ehk tarbepuitu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0327
**Audit ID:** ET-B2-0327
**Card ID:** `b2-Ölbohrung-1404`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Ölbohrung
**LV MASTER reference:** naftas urbums
**CURRENT:** naftapuurauk
**PROPOSED_ET (audit ieteikums):** naftapuurimine
**Problēma:** „Naftapuurauk“ tähendab naftakaevu või puurauku; „Ölbohrung“ tähistab nafta puurimist kui tegevust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0328
**Audit ID:** ET-B2-0328
**Card ID:** `b2-Ölgewinnung-1405`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Ölgewinnung
**LV MASTER reference:** naftas ieguve
**CURRENT:** naftatootmine
**PROPOSED_ET (audit ieteikums):** nafta ammutamine
**Problēma:** „Ölgewinnung“ tähendab nafta ammutamist või ekstraheerimist, mitte üldiselt naftatootmist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0329
**Audit ID:** ET-B2-0329
**Card ID:** `b2-Ölpest-1407`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Ölpest
**LV MASTER reference:** ūdens un piekrastes piesārņojums ar naftu
**CURRENT:** vee ja ranniku naftareostus
**PROPOSED_ET (audit ieteikums):** naftareostus vees ja rannikul
**Problēma:** Praegune liitsõnaline väljend on ebaloomulik; tähendus on selgem kujul „naftareostus vees ja rannikul“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0330
**Audit ID:** ET-B2-0330
**Card ID:** `b2-Operator-1410`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Operator
**LV MASTER reference:** lielu datoru apkalpes speciālists
**CURRENT:** suurarvutite hooldusspetsialist
**PROPOSED_ET (audit ieteikums):** operaator
**Problēma:** Saksa „Operator“ on üldine operaator või seadme juht; praegune vaste piirab tähenduse ainult suurarvutite hooldajaks.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0331
**Audit ID:** ET-B2-0331
**Card ID:** `b2-Pachtvertrag-1423`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Pachtvertrag
**LV MASTER reference:** nomas līgums
**CURRENT:** üürileping
**PROPOSED_ET (audit ieteikums):** rendileping
**Problēma:** „Pachtvertrag“ on eelkõige rendileping, eriti maa või ettevõtte kasutusse andmisel; „üürileping“ tähendab tavaliselt üürisuhet.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0332
**Audit ID:** ET-B2-0332
**Card ID:** `b2-pachten-1424`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** pachten
**LV MASTER reference:** nomāt
**CURRENT:** üürima
**PROPOSED_ET (audit ieteikums):** rentima
**Problēma:** „Pachten“ tähendab maa, talu või ettevõtte rentimist; eesti keeles on selle täpsem vaste „rentima“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0333
**Audit ID:** ET-B2-0333
**Card ID:** `b2-Pendelverkehr-1439`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Pendelverkehr
**LV MASTER reference:** vietējā piepilsētas satiksme
**CURRENT:** kohalik eeslinnaliiklus
**PROPOSED_ET (audit ieteikums):** pendelliiklus
**Problēma:** „Pendelverkehr“ tähendab regulaarset edasi-tagasi või shuttle-liiklust, mitte lihtsalt kohalikku eeslinnaliiklust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0334
**Audit ID:** ET-B2-0334
**Card ID:** `b2-Pfandschein-1445`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Pfandschein
**LV MASTER reference:** ķīlu zīme
**CURRENT:** pandimärk
**PROPOSED_ET (audit ieteikums):** pandipilet
**Problēma:** Pfandschein tähendab pandipiletit ehk pandimaja väljastatud tõendit; „pandimärk“ tähistab pigem pandi märgistust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0335
**Audit ID:** ET-B2-0335
**Card ID:** `b2-Pilotstudie-1455`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Pilotstudie
**LV MASTER reference:** pētījumu sērijas ievads
**CURRENT:** uurimissarja sissejuhatus
**PROPOSED_ET (audit ieteikums):** pilootuuring
**Problēma:** Pilotstudie on pilootuuring, mitte uurimissarja sissejuhatus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0336
**Audit ID:** ET-B2-0336
**Card ID:** `b2-Possen-1462`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Possen
**LV MASTER reference:** farss • joku luga • rupjš joks
**CURRENT:** farss • naljamäng • jäme nali
**PROPOSED_ET (audit ieteikums):** jäme nali • tembutus
**Problēma:** „Der Possen“ tähendab üksikut jämedat nalja või tembutust, mitte farsši või naljamängu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0337
**Audit ID:** ET-B2-0337
**Card ID:** `b2-prägnant-1465`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** prägnant
**LV MASTER reference:** spilgti izteikts
**CURRENT:** eredalt väljendunud
**PROPOSED_ET (audit ieteikums):** tabav • lühidalt ja selgelt väljendatud
**Problēma:** Prägnant tähendab eelkõige tabavat, lühikest ja selget väljendust; „eredalt väljendunud“ ei kata seda tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0338
**Audit ID:** ET-B2-0338
**Card ID:** `b2-quittieren-1484`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** quittieren
**LV MASTER reference:** parakstīties par saņemšanu
**CURRENT:** vastuvõtmist allkirjastama
**PROPOSED_ET (audit ieteikums):** kättesaamist kinnitama
**Problēma:** „Kättesaamist kinnitama“ on loomulikum ja katab saksa verbi tähenduse; praegune ühend on ebaloomulik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0339
**Audit ID:** ET-B2-0339
**Card ID:** `b2-ranzig-1492`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** ranzig
**LV MASTER reference:** sasmacis • rūgtens par krējumu • taukiem • sviestu
**CURRENT:** hallitanud maitsega • kibedavõitu (koore, rasva, või kohta)
**PROPOSED_ET (audit ieteikums):** rääsunud • kibedavõitu (koore, rasva ja või kohta)
**Problēma:** Ranzig tähendab rääsunud, mitte hallitanud; esimene vaste annab toidu riknemise kohta teise tähenduse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0340
**Audit ID:** ET-B2-0340
**Card ID:** `b2-Regenfront-1512`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Regenfront
**LV MASTER reference:** lietus josla
**CURRENT:** vihmavöönd
**PROPOSED_ET (audit ieteikums):** vihmafront
**Problēma:** Regenfront tähendab meteoroloogilist vihmafronti; „vihmavöönd“ tähendab pigem vihmariba või -ala.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0341
**Audit ID:** ET-B2-0341
**Card ID:** `b2-relevant-1519`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** relevant
**LV MASTER reference:** nozīmīgs • svarīgs
**CURRENT:** märkimisväärne • tähtis
**PROPOSED_ET (audit ieteikums):** asjakohane • tähtis
**Problēma:** „Märkimisväärne“ tähendab tähelepanuväärset, mitte tingimata asjakohast või relevantset.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0342
**Audit ID:** ET-B2-0342
**Card ID:** `b2-rücksichtslos-1532`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** rücksichtslos
**LV MASTER reference:** neuzmanīgs • rupjš • nesaudzīgs
**CURRENT:** hooletu • jäme • armutu
**PROPOSED_ET (audit ieteikums):** hoolimatu • jäme • armutu
**Problēma:** „Hooletu“ tähendab careless/negligent; rücksichtslos on eelkõige hoolimatu või teistega mittearvestav.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0343
**Audit ID:** ET-B2-0343
**Card ID:** `b2-rückständig-1533`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** rückständig
**LV MASTER reference:** atpalicis • nokavēts par maksājumu
**CURRENT:** hilinenud • maksega viivituses
**PROPOSED_ET (audit ieteikums):** mahajäänud • maksetega võlgnevuses
**Problēma:** „Hilinenud“ tähendab hiljaks jäänud, mitte mahajäänud; teine vaste vajab loomulikumat ja täpsemat sõnastust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0344
**Audit ID:** ET-B2-0344
**Card ID:** `b2-sächlich-1544`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sächlich
**LV MASTER reference:** ~es Geschlecht gram. • nekatrā dzimte
**CURRENT:** gram. neutraalne sugu
**PROPOSED_ET (audit ieteikums):** gram. kesksugu
**Problēma:** Grammatilise termini „neuter“ eestikeelne vaste on „kesksugu“, mitte „neutraalne sugu“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0345
**Audit ID:** ET-B2-0345
**Card ID:** `b2-Sandbank-1548`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Sandbank
**LV MASTER reference:** sēklis
**CURRENT:** madalik
**PROPOSED_ET (audit ieteikums):** liivamadal
**Problēma:** „Madalaik” on liiga üldine; Sandbank tähendab konkreetselt liivamadalat või liivast leetseljakut.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0346
**Audit ID:** ET-B2-0346
**Card ID:** `b2-Satellit-1551`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Satellit
**LV MASTER reference:** pol. satelīts • astr. pavadonis
**CURRENT:** poliitiline satelliit • astr. kaaslane
**PROPOSED_ET (audit ieteikums):** poliitiline satelliit • astronoomiline satelliit
**Problēma:** Astronoomiline „kaaslane” ei ole siin piisavalt täpne ega loomulik vaste sõnale Satellit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0347
**Audit ID:** ET-B2-0347
**Card ID:** `b2-Schadenersatz-1556`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Schadenersatz
**LV MASTER reference:** materiāla kompensācija par zaudējumiem
**CURRENT:** materiaalne hüvitis kahju eest
**PROPOSED_ET (audit ieteikums):** kahjuhüvitis
**Problēma:** Praegune väljend on arusaadav, kuid eesti õiguskeeles on loomulik ja täpne termin „kahjuhüvitis”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0348
**Audit ID:** ET-B2-0348
**Card ID:** `b2-Schaffen-1558`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Schaffen
**LV MASTER reference:** jaunrade • daiļrade • darbs • darbība • radīšana
**CURRENT:** looming • teos • tegevus • loomine
**PROPOSED_ET (audit ieteikums):** looming • loometöö • tegevus • loomine
**Problēma:** „Teos” tähendab üksikut loodud kunstiteost, Schaffen aga loomingulist tegevust või loometööd.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0349
**Audit ID:** ET-B2-0349
**Card ID:** `b2-Scheitel-1571`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Scheitel
**LV MASTER reference:** galvvidus • pauris • celiņš
**CURRENT:** juuksejoon • lagi (pea)
**PROPOSED_ET (audit ieteikums):** juukselahk • pealagi
**Problēma:** „Juuksejoon” tähendab juuste piirjoont ehk juuksepiiri, mitte lahku või pealae keskosa.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0350
**Audit ID:** ET-B2-0350
**Card ID:** `b2-scheitern-1572`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** scheitern
**LV MASTER reference:** piedzīvot neveiksmi • izjukt
**CURRENT:** ebaõnnestuma • lagunema
**PROPOSED_ET (audit ieteikums):** ebaõnnestuma • luhtuma
**Problēma:** „Lagunema” tähendab füüsiliselt koost lagunemist; scheitern teises tähenduses tähendab nurjumist või luhtumist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0351
**Audit ID:** ET-B2-0351
**Card ID:** `b2-Schieber-1577`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Schieber
**LV MASTER reference:** aizbīdnis • bulta • spekulants
**CURRENT:** riiv • polt • spekulant
**PROPOSED_ET (audit ieteikums):** riiv • siiber • spekulant
**Problēma:** „Polt” tähendab polti, Schieber tehnilises tähenduses aga siibrit või liugklappi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0352
**Audit ID:** ET-B2-0352
**Card ID:** `b2-schlafwandeln-1583`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** schlafwandeln
**LV MASTER reference:** būt mēnessērdzīgam
**CURRENT:** olema unerändaja
**PROPOSED_ET (audit ieteikums):** unes kõndima
**Problēma:** Praegune vaste tähendab „olema unerändaja”, mitte tegevust „unes kõndima” ehk somnambuulselt kõndima.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0353
**Audit ID:** ET-B2-0353
**Card ID:** `b2-Schmuggel-1596`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Schmuggel
**LV MASTER reference:** kontrabanda
**CURRENT:** salakaup
**PROPOSED_ET (audit ieteikums):** salakaubandus
**Problēma:** Salakaup tähendab smugeldatud kaupa; Schmuggel tähendab salakaubandust või smugeldamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0354
**Audit ID:** ET-B2-0354
**Card ID:** `b2-Schnappschuss-1597`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Schnappschuss
**LV MASTER reference:** momentuzņēmums fotogrāfijā
**CURRENT:** hetkevõte fotol
**PROPOSED_ET (audit ieteikums):** hetktõmmis
**Problēma:** Hetkevõte fotol on arusaadav, kuid standardsem ja loomulikum vaste on hetktõmmis.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0355
**Audit ID:** ET-B2-0355
**Card ID:** `b2-Bittschrift-1602`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Bittschrift
**LV MASTER reference:** lūgums
**CURRENT:** palve
**PROPOSED_ET (audit ieteikums):** palvekiri
**Problēma:** Bittschrift on ametlik kirjalik palve või avaldus, mitte religioosne palve.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0356
**Audit ID:** ET-B2-0356
**Card ID:** `b2-schrill-1603`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** schrill
**LV MASTER reference:** spalgs • griezīgs
**CURRENT:** kimeda • lõikav
**PROPOSED_ET (audit ieteikums):** kime • lõikav
**Problēma:** Kimeda on sõna kimeda käändevorm; omadussõna märksõnavorm on kime.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0357
**Audit ID:** ET-B2-0357
**Card ID:** `b2-schroff-1604`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** schroff
**LV MASTER reference:** stāvs • kraujš • skarbs • ass • nelaipns
**CURRENT:** järsk • kalju • karm • terav • ebasõbralik
**PROPOSED_ET (audit ieteikums):** järsk • karm • terav • ebasõbralik
**Problēma:** Kalju on nimisõna ega tähenda siin schroff’i omadust; järsk katab tähenduse paremini.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0358
**Audit ID:** ET-B2-0358
**Card ID:** `b2-Schuldschein-1606`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Schuldschein
**LV MASTER reference:** parādzīme
**CURRENT:** võlakiri
**PROPOSED_ET (audit ieteikums):** võlatunnistus
**Problēma:** Schuldschein on võlatunnistus või võlakohustuse dokument, mitte vabalt kaubeldav võlakiri.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0359
**Audit ID:** ET-B2-0359
**Card ID:** `b2-Schwarm-1612`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Schwarm
**LV MASTER reference:** bars
**CURRENT:** kirg • vaimustus
**PROPOSED_ET (audit ieteikums):** parv • sülem
**Problēma:** Schwarm tähendab parve või sülemit; kirg ja vaimustus kirjeldavad pigem schwärmen tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0360
**Audit ID:** ET-B2-0360
**Card ID:** `b2-Schwarze-1615`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Schwarze
**LV MASTER reference:** cilvēks ar melnu ādas krāsu
**CURRENT:** tumedanahaline inimene
**PROPOSED_ET (audit ieteikums):** mustanahaline inimene
**Problēma:** Tumedanahaline tähendab üldiselt tumeda nahaga inimest; Schwarze viitab mustanahalisele inimesele.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0361
**Audit ID:** ET-B2-0361
**Card ID:** `b2-Schwerathletik-1620`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Schwerathletik
**LV MASTER reference:** sp. smagatlētika
**CURRENT:** sp. tõstespordid
**PROPOSED_ET (audit ieteikums):** raskejõustik
**Problēma:** Schwerathletik hõlmab raskejõustikku laiemalt; tõstespordid on liiga kitsas ja mitmuses.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0362
**Audit ID:** ET-B2-0362
**Card ID:** `b2-Seenot-1624`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Seenot
**LV MASTER reference:** avārijas situācija uz jūras
**CURRENT:** avariiolukord merel
**PROPOSED_ET (audit ieteikums):** hädaseisund merel
**Problēma:** Seenot tähendab merehäda või hädaseisundit merel, mitte ainult avariiolukorda.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0363
**Audit ID:** ET-B2-0363
**Card ID:** `b2-Naturseide-1629`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Naturseide
**LV MASTER reference:** dabiskais zīds
**CURRENT:** loomulik siid
**PROPOSED_ET (audit ieteikums):** looduslik siid
**Problēma:** Materjali puhul on loomulikum ja täpsem omadussõna looduslik, mitte loomulik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0364
**Audit ID:** ET-B2-0364
**Card ID:** `b2-Selbstgefühl-1631`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Selbstgefühl
**LV MASTER reference:** pašapziņīgums • pašapziņa
**CURRENT:** enesekindlus
**PROPOSED_ET (audit ieteikums):** eneseväärtustunne
**Problēma:** Selbstgefühl tähendab eneseväärtuse või enesetaju tunnet; enesekindlus on confidence.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0365
**Audit ID:** ET-B2-0365
**Card ID:** `b2-Sonderausgabe-1656`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Sonderausgabe
**LV MASTER reference:** grāmatas speciālizdevums • laikraksta speciāl numurs • marku speciālizlaidums
**CURRENT:** raamatu erilaadumine • ajalehe erinumber • margi eriväljalase
**PROPOSED_ET (audit ieteikums):** raamatu eriväljaanne • ajalehe erinumber • margi eriväljaanne
**Problēma:** „Erilaadumine” ei tähenda eriväljaannet; esimene vaste on väär ning „eriväljalase” on siin ebaloomulik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0366
**Audit ID:** ET-B2-0366
**Card ID:** `b2-Sorgenkind-1660`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Sorgenkind
**LV MASTER reference:** rūpju bērns
**CURRENT:** hoolealune laps
**PROPOSED_ET (audit ieteikums):** murelaps
**Problēma:** „Hoolealune laps” tähendab hooldusel olevat last, mitte murettekitavat või muret põhjustavat last.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0367
**Audit ID:** ET-B2-0367
**Card ID:** `b2-spärlich-1666`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** spärlich
**LV MASTER reference:** niecīgs • skops • rets
**CURRENT:** tühine • ihne • harv
**PROPOSED_ET (audit ieteikums):** napp • hõre • vähene
**Problēma:** „Ihne” tähendab kitsi, mitte vähest või kasinat; „tühine” ei kata hästi tähendust „spärlich”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0368
**Audit ID:** ET-B2-0368
**Card ID:** `b2-Stahlwerk-1692`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Stahlwerk
**LV MASTER reference:** tēraudlietuve
**CURRENT:** terasevalukoda
**PROPOSED_ET (audit ieteikums):** terasetehas
**Problēma:** „Terasevalukoda” tähendab terase valamise tehast ehk valukoda; „Stahlwerk” on üldisem terasetehas või terasetehas-kompleks.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0369
**Audit ID:** ET-B2-0369
**Card ID:** `b2-Strafanzeige-1705`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Strafanzeige
**LV MASTER reference:** krimināllietas ierosināšana pret kādu
**CURRENT:** kriminaalasja algatamine kellegi vastu
**PROPOSED_ET (audit ieteikums):** kuriteoteade
**Problēma:** Tähendab kriminaalasja algatamist, mitte kuriteoteadet või politseile esitatud avaldust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0370
**Audit ID:** ET-B2-0370
**Card ID:** `b2-streitbar-1708`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** streitbar
**LV MASTER reference:** ķildīgs
**CURRENT:** tülinorija
**PROPOSED_ET (audit ieteikums):** tülivõimeline
**Problēma:** Praegune vaste on nimisõna „tülinorija“, kuid saksa märksõna on omadussõna.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0371
**Audit ID:** ET-B2-0371
**Card ID:** `b2-Streitkräfte-1709`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Streitkräfte
**LV MASTER reference:** valsts visas militārās organizācijas un militārie spēki
**CURRENT:** riigi kõik sõjalised organisatsioonid ja väed
**PROPOSED_ET (audit ieteikums):** relvajõud
**Problēma:** Saksa sõna tavapärane ja täpne eesti vaste on „relvajõud“; praegune on kohmakas ümberütlus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0372
**Audit ID:** ET-B2-0372
**Card ID:** `b2-Tagebau-1721`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Tagebau
**LV MASTER reference:** derīgo izrakteņu atklātā ieguve
**CURRENT:** maavarade karjääripõline kaevandamine
**PROPOSED_ET (audit ieteikums):** pealmaakaevandamine
**Problēma:** Praegune liitsõnaühend on ebaloomulik; „pealmaakaevandamine“ on tavapärane vaste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0373
**Audit ID:** ET-B2-0373
**Card ID:** `b2-Töpferscheibe-1736`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Töpferscheibe
**LV MASTER reference:** podnieka ripa
**CURRENT:** pottsepakäi
**PROPOSED_ET (audit ieteikums):** potikeder
**Problēma:** Töpferscheibe tähendab eesti keeles „potikeder“; „pottsepakäi“ ei ole selle tähenduse tavapärane vaste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0374
**Audit ID:** ET-B2-0374
**Card ID:** `b2-treuherzig-1750`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** treuherzig
**LV MASTER reference:** valsirdīgs • sirsnīgs
**CURRENT:** südamlik
**PROPOSED_ET (audit ieteikums):** siiras ja lihtsameelne
**Problēma:** Südamlik tähendab peamiselt sooja ja südamlikku; treuherzig rõhutab siirust ja lihtsameelset usaldavust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0375
**Audit ID:** ET-B2-0375
**Card ID:** `b2-Triumphzug-1754`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Triumphzug
**LV MASTER reference:** triumfa gājiens
**CURRENT:** triumfirong
**PROPOSED_ET (audit ieteikums):** võidurongkäik
**Problēma:** Triumfirong on ebaloomulik ja võib tähendada triumfirongi; mõeldud on võidukat rongkäiku.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0376
**Audit ID:** ET-B2-0376
**Card ID:** `b2-überhören-1769`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** überhören
**LV MASTER reference:** ne[sa]dzirdēt aiz neuzmanības • izlikties nedzirdam
**CURRENT:** hooletusest mitte kuulma • end mitte kuulvana teesklema
**PROPOSED_ET (audit ieteikums):** tähelepanematusest kuulmata jätma • kuulmatust teesklema
**Problēma:** Teine vaste on grammatikavigane; kuulvana tähendab kuuluvana, mitte kuulmist teeseldes.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0377
**Audit ID:** ET-B2-0377
**Card ID:** `b2-überlassen-1770`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** überlassen
**LV MASTER reference:** atstāt kāda ziņā • rīcībā • atļaut izvēlēties
**CURRENT:** jätma kellegi otsustada • käsutusse jätma • valikut lubama
**PROPOSED_ET (audit ieteikums):** kellegi otsustada jätma • käsutusse jätma • valida laskma
**Problēma:** Valikut lubama on ebaloomulik; loomulikum vaste on valida laskma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0378
**Audit ID:** ET-B2-0378
**Card ID:** `b2-Übermüdung-1774`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Übermüdung
**LV MASTER reference:** pārgurums
**CURRENT:** ülekurnatus
**PROPOSED_ET (audit ieteikums):** üleväsimus
**Problēma:** Ülekurnatus ei ole selles tähenduses loomulik ega tavapärane vaste; Übermüdung tähendab üleväsimust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0379
**Audit ID:** ET-B2-0379
**Card ID:** `b2-überschätzen-1775`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** überschätzen
**LV MASTER reference:** pārvērtēt
**CURRENT:** ümber hindama
**PROPOSED_ET (audit ieteikums):** üle hindama
**Problēma:** Ümber hindama tähendab uuesti hindama või ümber hindama; üle hindama tähendab millegi väärtust liiga suureks pidama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0380
**Audit ID:** ET-B2-0380
**Card ID:** `b2-überschreiten-1776`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** überschreiten
**LV MASTER reference:** pāriet • pārkāpt
**CURRENT:** üle minema • rikkuma
**PROPOSED_ET (audit ieteikums):** ületama • seadust rikkuma
**Problēma:** Üle minema on siin liiga ebatäpne ning rikkuma vajab seaduse konteksti.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0381
**Audit ID:** ET-B2-0381
**Card ID:** `b2-umdenken-1787`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** umdenken
**LV MASTER reference:** mainīt viedokli atkarībā no situācijas
**CURRENT:** arvamust olukorrast sõltuvalt muutma
**PROPOSED_ET (audit ieteikums):** ümber mõtlema
**Problēma:** Umdenken tähendab oma mõtteviisi või seisukoha muutmist, mitte tingimata olukorrast sõltuvat arvamuse muutmist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0382
**Audit ID:** ET-B2-0382
**Card ID:** `b2-umhören, sich-1791`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** umhören, sich
**LV MASTER reference:** apklausīties
**CURRENT:** kuulatlema
**PROPOSED_ET (audit ieteikums):** ringi küsitlema
**Problēma:** Kuulatlema tähendab tähelepanelikult kuulama; sich umhören tähendab teiste käest järele uurima või ringi küsitlema.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0383
**Audit ID:** ET-B2-0383
**Card ID:** `b2-umschließen-1797`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** umschließen
**LV MASTER reference:** ieslēgt • aptvert • apņemt
**CURRENT:** sisse lülitama • hõlmama • ümbritsema
**PROPOSED_ET (audit ieteikums):** sulgema sisse • hõlmama • ümbritsema
**Problēma:** Sisse lülitama tähendab seadme aktiveerimist, mitte millegi sisse sulgemist või ümbritsemist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0384
**Audit ID:** ET-B2-0384
**Card ID:** `b2-umschreiben-1798`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** umschreiben
**LV MASTER reference:** aprakstīt
**CURRENT:** kirjeldama
**PROPOSED_ET (audit ieteikums):** ümber sõnastama
**Problēma:** „Kirjeldama” ei väljenda peamist tähendust „ümber sõnastama” või „ümber kirjutama”; lisaks on vorm gerundiiv.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0385
**Audit ID:** ET-B2-0385
**Card ID:** `b2-umständlich-1803`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** umständlich
**LV MASTER reference:** ļoti sīks • pārāk plašs • apgrūtinošs • sarežģīts
**CURRENT:** väga pisike • liiga ulatuslik • koormav • keeruline
**PROPOSED_ET (audit ieteikums):** tülikas • liiga üksikasjalik • koormav • keeruline
**Problēma:** „Väga pisike” tähendab väga väikest, mitte tülikat või kohmakat; see on saksa omadussõna tähendusega vastuolus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0386
**Audit ID:** ET-B2-0386
**Card ID:** `b2-unterbreiten-1835`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** unterbreiten
**LV MASTER reference:** paskaidrot • iesniegt
**CURRENT:** selgitama • esitama
**PROPOSED_ET (audit ieteikums):** ette panema • esitama
**Problēma:** „Unterbreiten” tähendab ettepaneku, palve või dokumendi esitamist; „selgitama” tähendab seletama ja on siin vale vaste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0387
**Audit ID:** ET-B2-0387
**Card ID:** `b2-Untertan-1848`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Untertan
**LV MASTER reference:** pavalstnieks
**CURRENT:** kodanik
**PROPOSED_ET (audit ieteikums):** alam
**Problēma:** „Untertan“ tähendab valitseja alamat, mitte kodanikku.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0388
**Audit ID:** ET-B2-0388
**Card ID:** `b2-untertauchen-1849`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** untertauchen
**LV MASTER reference:** ienirt • palīst zem ūdens • iemērkt • iegremdēt
**CURRENT:** sukelduma • vee alla minema • kastma
**PROPOSED_ET (audit ieteikums):** sukelduma • vee alla minema • peitu minema
**Problēma:** „Kastma“ tähendab millegi vedelikku kastmist; „untertauchen“ võib tähendada ka peitu minemist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0389
**Audit ID:** ET-B2-0389
**Card ID:** `b2-unüberlegt-1854`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** unüberlegt
**LV MASTER reference:** neapdomīgs • vieglprātīgs
**CURRENT:** ettevaatamatu • kergemeelne
**PROPOSED_ET (audit ieteikums):** läbimõtlematu • kaalutlematu
**Problēma:** „Unüberlegt“ tähendab läbimõtlematut või kaalutlematut; praegused vasted tähendavad pigem ettevaatamatut ja kergemeelset.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0390
**Audit ID:** ET-B2-0390
**Card ID:** `b2-verbittert-1873`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** verbittert
**LV MASTER reference:** sarūgtināts
**CURRENT:** pettunud
**PROPOSED_ET (audit ieteikums):** kibestunud
**Problēma:** „Verbittert“ tähendab kibestunud või vimma täis; „pettunud“ tähendab enttäuscht ehk pettunud.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0391
**Audit ID:** ET-B2-0391
**Card ID:** `b2-Verdruss-1877`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Verdruss
**LV MASTER reference:** nepatika • sarūgtinājums • īgnums
**CURRENT:** vastumeelsus • pettumus • tusk
**PROPOSED_ET (audit ieteikums):** meelehärm • pahameel • tusk
**Problēma:** „Verdruss“ tähendab pahameelt või meelehärmi; „pettumus“ tähendab pettumust, mitte tüdimust või pahameelt.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0392
**Audit ID:** ET-B2-0392
**Card ID:** `b2-sich verhören-1901`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** sich verhören
**LV MASTER reference:** pārklausīties
**CURRENT:** üle kuulama (proovi)
**PROPOSED_ET (audit ieteikums):** valesti kuulma
**Problēma:** Tähendab midagi valesti kuulma või mööda kuulma, mitte kedagi üle kuulama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0393
**Audit ID:** ET-B2-0393
**Card ID:** `b2-verhüten-1902`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** verhüten
**LV MASTER reference:** novērst • izsargāties
**CURRENT:** ära hoidma • hoiduma
**PROPOSED_ET (audit ieteikums):** ära hoidma • rasestumisvastaseid vahendeid kasutama
**Problēma:** Teine tähendus viitab rasestumisvastastele vahenditele; „hoiduma” tähendab lihtsalt millestki hoidumist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0394
**Audit ID:** ET-B2-0394
**Card ID:** `b2-Verleih-1905`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Verleih
**LV MASTER reference:** noma
**CURRENT:** üür
**PROPOSED_ET (audit ieteikums):** laenutus • renditeenus
**Problēma:** „Verleih” tähendab laenutamist või renditeenust, mitte üksnes üüri kui tasu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0395
**Audit ID:** ET-B2-0395
**Card ID:** `b2-Vermächtnis-1906`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Vermächtnis
**LV MASTER reference:** testaments
**CURRENT:** testament
**PROPOSED_ET (audit ieteikums):** pärand
**Problēma:** „Vermächtnis” on pärand või annak; „testament” on dokument, millega pärand määratakse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0396
**Audit ID:** ET-B2-0396
**Card ID:** `b2-Vermögen-1908`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Vermögen
**LV MASTER reference:** īpašums
**CURRENT:** omand
**PROPOSED_ET (audit ieteikums):** vara
**Problēma:** „Vermögen” tähendab üldiselt vara või varandust; „omand” tähistab pigem omandisuhet või omatud eset.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0397
**Audit ID:** ET-B2-0397
**Card ID:** `b2-Vernehmung-1910`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Vernehmung
**LV MASTER reference:** nopratināšana policijā
**CURRENT:** ülekuulamine politseis
**PROPOSED_ET (audit ieteikums):** ülekuulamine
**Problēma:** Saksa sõna ei piirdu politseis toimuva ülekuulamisega; „politseis” kitsendab tähendust põhjendamatult.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0398
**Audit ID:** ET-B2-0398
**Card ID:** `b2-verkommen-1916`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** verkommen
**LV MASTER reference:** panīkt • pagrimt • paklīst
**CURRENT:** alla käima • kaduma
**PROPOSED_ET (audit ieteikums):** alla käima • manduma
**Problēma:** „Kaduma” tähendab kaduma või ära haihtuma, mitte allakäimist, mandumist või kõlbelist langust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0399
**Audit ID:** ET-B2-0399
**Card ID:** `b2-verkraften-1918`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** verkraften
**LV MASTER reference:** uzturēt morālu spēku, lai pārvarētu kaut ko nepatīkamu
**CURRENT:** moraalset jõudu säilitama, et millestki ebameeldivast üle saada
**PROPOSED_ET (audit ieteikums):** välja kannatama • üle elama
**Problēma:** Praegune on ebaloomulik kirjeldus; verb tähendab millegi ebameeldiva talumist või üleelamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0400
**Audit ID:** ET-B2-0400
**Card ID:** `b2-versagen-1934`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** versagen
**LV MASTER reference:** liegt • atteikt • noraidīt • neklausīt • atteikties kalpot • izrādīties gļēvam un nevarīgam
**CURRENT:** keelduma • tagasi lükkama • mitte kuulama • teenimast keelduma • argaks jääma
**PROPOSED_ET (audit ieteikums):** ebaõnnestuma • üles ütlema • keelduma • tagasi lükkama • mitte kuuletuma
**Problēma:** Puudub põhitähendus „ebaõnnestuma” või „mitte toimima”; praegune loetelu keskendub üksnes keeldumisega seotud tähendustele.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0401
**Audit ID:** ET-B2-0401
**Card ID:** `b2-versöhnen-1940`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** versöhnen
**LV MASTER reference:** samierināt
**CURRENT:** leppima panema
**PROPOSED_ET (audit ieteikums):** lepitama
**Problēma:** „Leppima panema” on kohmakas; loomulik transitiivne vaste on „lepitama”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0402
**Audit ID:** ET-B2-0402
**Card ID:** `b2-verspielen-1942`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** verspielen
**LV MASTER reference:** paspēlēt • pazaudēt
**CURRENT:** kaotama (mängus)
**PROPOSED_ET (audit ieteikums):** mängides kaotama • maha mängima
**Problēma:** Sõna tähendab ka millegi hooletult kaotamist või maha mängimist, mitte ainult mängus kaotamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0403
**Audit ID:** ET-B2-0403
**Card ID:** `b2-verstauchen-1945`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** verstauchen
**LV MASTER reference:** izmežģīt
**CURRENT:** nihestama
**PROPOSED_ET (audit ieteikums):** välja väänama
**Problēma:** „Verstauchen” tähendab liigese nikastamist või välja väänamist; „nihestama” tähendab liigese paigast nihutamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0404
**Audit ID:** ET-B2-0404
**Card ID:** `b2-verweilen-1956`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** verweilen
**LV MASTER reference:** pakavēties
**CURRENT:** peatuma (mõttes)
**PROPOSED_ET (audit ieteikums):** peatuma • viibima
**Problēma:** Praegune vaste piirab tähenduse mõtisklemisega; saksa sõna tähendab üldiselt peatuma või viibima.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0405
**Audit ID:** ET-B2-0405
**Card ID:** `b2-Verwüstung-1965`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Verwüstung
**LV MASTER reference:** izpostīšana
**CURRENT:** hävitamine
**PROPOSED_ET (audit ieteikums):** laastamine
**Problēma:** Hävitamine tähendab üldiselt hävitamist; Verwüstung viitab ulatuslikule laastamisele või hävingule.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0406
**Audit ID:** ET-B2-0406
**Card ID:** `b2-sich verzögern-1968`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** sich verzögern
**LV MASTER reference:** aizkavēties • novilcināties
**CURRENT:** hilinema • venitama
**PROPOSED_ET (audit ieteikums):** hilinema • edasi lükkuma
**Problēma:** Venitama on transitiivne ja tähendab millegi viivitamist; refleksiivne saksa verb tähendab ise viibima või edasi lükkuma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0407
**Audit ID:** ET-B2-0407
**Card ID:** `b2-verzollen-1969`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**DE (read-only):** verzollen
**LV MASTER reference:** muitot
**CURRENT:** tolliima
**PROPOSED_ET (audit ieteikums):** tollima
**Problēma:** Eesti kirjakeeles on verbi korrektne kuju tollima, mitte tolliima.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0408
**Audit ID:** ET-B2-0408
**Card ID:** `b2-vollkommen-1980`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** vollkommen
**LV MASTER reference:** pilnīgs • pilnīgi • pavisam
**CURRENT:** täielik • täielikult • hoopis
**PROPOSED_ET (audit ieteikums):** täielik • täielikult • täiesti
**Problēma:** Hoopis tähendab pigem 'instead/quite', mitte 'completely'; see ei vasta siin saksa sõna määrsõnalisele tähendusele.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0409
**Audit ID:** ET-B2-0409
**Card ID:** `b2-vollzählig-1982`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** vollzählig
**LV MASTER reference:** pilnā skaitā esošs
**CURRENT:** täisarvuline
**PROPOSED_ET (audit ieteikums):** täielikus koosseisus
**Problēma:** Täisarvuline tähendab integer-valued; vollzählig tähendab täielikus arvus või täielikus koosseisus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0410
**Audit ID:** ET-B2-0410
**Card ID:** `b2-Vorbildung-1992`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Vorbildung
**LV MASTER reference:** priekšzināšanas • sagatavotība
**CURRENT:** eelteadmised • valmisolek
**PROPOSED_ET (audit ieteikums):** eelteadmised • ettevalmistus
**Problēma:** Valmisolek tähendab readiness; Vorbildung tähendab varasemat haridust, ettevalmistust või eelteadmisi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0411
**Audit ID:** ET-B2-0411
**Card ID:** `b2-vornherein-2001`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** vornherein
**LV MASTER reference:** pašā sākumā
**CURRENT:** just alguses
**PROPOSED_ET (audit ieteikums):** algusest peale
**Problēma:** Von vornherein tähendab algusest peale või ette, mitte lihtsalt 'just alguses'.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0412
**Audit ID:** ET-B2-0412
**Card ID:** `b2-vorsätzlich-2003`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** vorsätzlich
**LV MASTER reference:** apzināts • ar nolūku
**CURRENT:** teadlik • tahtlik
**PROPOSED_ET (audit ieteikums):** tahtlik
**Problēma:** “Teadlik” tähendab teadlikku, mitte tingimata tahtlikku tegevust; “tahtlik” vastab saksa sõnale täpsemalt.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0413
**Audit ID:** ET-B2-0413
**Card ID:** `b2-Wählscheibe-2024`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Wählscheibe
**LV MASTER reference:** tālruņa ciparu ripa
**CURRENT:** telefoni valikuketas
**PROPOSED_ET (audit ieteikums):** telefoni valimisketas
**Problēma:** “Valikuketas” tähendab valikuketast; telefoninumbri ketas on eesti keeles “valimisketas”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0414
**Audit ID:** ET-B2-0414
**Card ID:** `b2-Warenausgabe-2031`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Warenausgabe
**LV MASTER reference:** pirkumu kontrole un izsniegšana
**CURRENT:** ostude kontroll ja väljastamine
**PROPOSED_ET (audit ieteikums):** kauba väljastamine
**Problēma:** “Warenausgabe” tähendab kaupade väljastamist; ostude kontrollimine ei kuulu saksa sõna põhitähendusse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0415
**Audit ID:** ET-B2-0415
**Card ID:** `b2-Wegstrecke-2039`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Wegstrecke
**LV MASTER reference:** ceļa posms • gabals
**CURRENT:** teelõik • tükk
**PROPOSED_ET (audit ieteikums):** teelõik
**Problēma:** “Tükk” tähendab eset või osa üldiselt, kuid “Wegstrecke” on konkreetsemalt teelõik või läbitav vahemaa.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0416
**Audit ID:** ET-B2-0416
**Card ID:** `b2-Wehe-2041`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Wehe
**LV MASTER reference:** kāpa • kupena
**CURRENT:** luide • hang
**PROPOSED_ET (audit ieteikums):** sünnitusvalu • tuhu
**Problēma:** Saksa “Wehe” tähendab sünnitusvalu või emaka kokkutõmmet, mitte liivaluidet ega lumehangi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0417
**Audit ID:** ET-B2-0417
**Card ID:** `b2-Wehrpflicht-2043`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Wehrpflicht
**LV MASTER reference:** karaklausība
**CURRENT:** ajateenistus
**PROPOSED_ET (audit ieteikums):** ajateenistuskohustus
**Problēma:** “Wehrpflicht” on kohustus teenida, “ajateenistus” aga teenistuse enda tähendus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0418
**Audit ID:** ET-B2-0418
**Card ID:** `b2-Werkhalle-2055`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Werkhalle
**LV MASTER reference:** cehs
**CURRENT:** tsehh
**PROPOSED_ET (audit ieteikums):** tootmishall
**Problēma:** Werkhalle tähendab tootmis- või tehasehalli; „tsehh” tähistab pigem tootmisüksust või töökoda.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0419
**Audit ID:** ET-B2-0419
**Card ID:** `b2-Windbeutel-2076`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** Windbeutel
**LV MASTER reference:** vēja kūka
**CURRENT:** tuulelohe
**PROPOSED_ET (audit ieteikums):** tuuletasku
**Problēma:** „Tuulelohe” tähendab eesti keeles lohet ehk kite’i; Windbeutel on kreemitäidisega küpsetis ehk tuuletasku.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0420
**Audit ID:** ET-B2-0420
**Card ID:** `b2-zürnen-2088`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** zürnen
**LV MASTER reference:** dusmoties
**CURRENT:** vihastama
**PROPOSED_ET (audit ieteikums):** vihastuma
**Problēma:** zürnen on intransitiivne ‘vihane olema’; „vihastama” tähendab tavaliselt kellegi vihaseks ajamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0421
**Audit ID:** ET-B2-0421
**Card ID:** `b2-zuschneiden-2094`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** zuschneiden
**LV MASTER reference:** piegriezt
**CURRENT:** lõikama (lõikeks)
**PROPOSED_ET (audit ieteikums):** sobivasse mõõtu lõikama
**Problēma:** „Lõikama (lõikeks)” on ebaloomulik ja ebaselge; zuschneiden tähendab millegi mõõtu või kuju järgi lõikamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0422
**Audit ID:** ET-B2-0422
**Card ID:** `b2-zutrauen-2097`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** zutrauen
**LV MASTER reference:** gaidīt • domāt spējīgu
**CURRENT:** ootama • võimeliseks pidama
**PROPOSED_ET (audit ieteikums):** võimeliseks pidama
**Problēma:** „Zutrauen” tähendab kellelegi võimekuse omistamist; „ootama” ei ole selle verbi tähendus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0423
**Audit ID:** ET-B2-0423
**Card ID:** `b2-Zuversicht-2098`
**Field/path:** `etText`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Zuversicht
**LV MASTER reference:** paļāvība
**CURRENT:** usaldus
**PROPOSED_ET (audit ieteikums):** kindlustunne
**Problēma:** Zuversicht tähendab lootusrikast kindlustunnet või usku edusse, mitte lihtsalt usaldust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0424
**Audit ID:** ET-B2-0424
**Card ID:** `b2-sich-abwenden`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** sich abwenden
**LV MASTER reference:** novērsties no
**CURRENT:** pöörduma millestki ära
**PROPOSED_ET (audit ieteikums):** millestki ära pöörduma
**Problēma:** Estonian word order is unnatural; the complement normally precedes ära pöörduma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0425
**Audit ID:** ET-B2-0425
**Card ID:** `b2-sich-einpraegen`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** sich einprägen
**LV MASTER reference:** iegaumēt
**CURRENT:** meelde jätma
**PROPOSED_ET (audit ieteikums):** meelde jääma
**Problēma:** The reflexive German verb means to become firmly remembered, not to memorize something actively.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0426
**Audit ID:** ET-B2-0426
**Card ID:** `b2-sich-erweisen`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** sich erweisen
**LV MASTER reference:** izrādīties par
**CURRENT:** osutuma milleks
**PROPOSED_ET (audit ieteikums):** osutuma millekski
**Problēma:** Üldises vastefraasis nõuab osutuma translatiivi: osutuma millekski.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0427
**Audit ID:** ET-B2-0427
**Card ID:** `b2-sich-fassen`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sich fassen
**LV MASTER reference:** sagrābt • saņemties • savaldīties
**CURRENT:** haarama • end koguma • end valitsema
**PROPOSED_ET (audit ieteikums):** end koguma • end valitsema
**Problēma:** Haarama on tavalise fassen-verbi vaste, kuid sich fassen tähendab siin enese kogumist või valitsemist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0428
**Audit ID:** ET-B2-0428
**Card ID:** `b2-genosse`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Genosse
**LV MASTER reference:** biedrs
**CURRENT:** liige
**PROPOSED_ET (audit ieteikums):** seltsimees
**Problēma:** Genosse tähendab selles kasutuses eeskätt seltsimeest, mitte üldiselt mis tahes liiget.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0429
**Audit ID:** ET-B2-0429
**Card ID:** `b2-genossin`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Genossin
**LV MASTER reference:** biedre • biedrene
**CURRENT:** liige (naine)
**PROPOSED_ET (audit ieteikums):** seltsimees (naine)
**Problēma:** Genossin on naissoost seltsimees; „liige” kaotab saksa sõna põhitähenduse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0430
**Audit ID:** ET-B2-0430
**Card ID:** `b2-sich-gestalten`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** sich gestalten
**LV MASTER reference:** veidoties par
**CURRENT:** kujunema milleks
**PROPOSED_ET (audit ieteikums):** kujunema
**Problēma:** Eesti põhisõnavaste on „kujunema”; „milleks” jätab vaste ebamääraseks ja mõjub siin ebaloomulikult.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0431
**Audit ID:** ET-B2-0431
**Card ID:** `b2-haube`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Haube
**LV MASTER reference:** viņš atver automašīnas motora pārsegu.
**CURRENT:** ta avab auto mootorikapoti.
**PROPOSED_ET (audit ieteikums):** ta avab auto kapoti.
**Problēma:** Eesti keeles nimetatakse auto mootorikatet tavaliselt lihtsalt kapotiks; „mootorikapott” on ebaharilik liitsõna.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0432
**Audit ID:** ET-B2-0432
**Card ID:** `b2-haube`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Haube
**LV MASTER reference:** motora pārsegs ir salauzts.
**CURRENT:** mootorikapott on katki.
**PROPOSED_ET (audit ieteikums):** auto kapott on katki.
**Problēma:** „Auto kapott” on loomulikum ja tavapärasem kui „mootorikapott”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0433
**Audit ID:** ET-B2-0433
**Card ID:** `b2-haube`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Haube
**LV MASTER reference:** uzliec vāku kā pārsegu uz katla.
**CURRENT:** pane kaas pajale kattena.
**PROPOSED_ET (audit ieteikums):** pane pajale kaas.
**Problēma:** „Kaas pajale kattena” on kohmakas; loomulik eestikeelne käsk on „pane pajale kaas”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0434
**Audit ID:** ET-B2-0434
**Card ID:** `b2-sich-herausbilden`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** sich herausbilden
**LV MASTER reference:** izveidoties par
**CURRENT:** välja kujunema milleks
**PROPOSED_ET (audit ieteikums):** välja kujunema
**Problēma:** „Sich herausbilden” vaste on „välja kujunema”; lisand „milleks” ei ole siin loomulik ega vajalik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0435
**Audit ID:** ET-B2-0435
**Card ID:** `b2-sich-herausstellen`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** sich herausstellen
**LV MASTER reference:** izrādīties par
**CURRENT:** selguma milleks
**PROPOSED_ET (audit ieteikums):** osutuma millekski
**Problēma:** „Sich herausstellen” tähendab sageli millekski osutumist; praegune „selguma milleks” on ebatäpne ja kohmakas.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0436
**Audit ID:** ET-B2-0436
**Card ID:** `b2-leiden-study`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Leiden
**LV MASTER reference:** ilga un smaga slimība
**CURRENT:** pikaajaline ja raske haigus
**PROPOSED_ET (audit ieteikums):** haigus • kannatused
**Problēma:** Leiden tähendab haigust või kannatusi, kuid mitte tingimata pikaajalist ja rasket haigust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0437
**Audit ID:** ET-B2-0437
**Card ID:** `b2-neger`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** STUDY
**DE (read-only):** Neger
**LV MASTER reference:** nēģeris
**CURRENT:** neeger
**PROPOSED_ET (audit ieteikums):** neeger (vananenud ja halvustav)
**Problēma:** Märksõna on vananenud ja rassistlikult halvustav; õppekaart vajab selle kasutusmärget.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0438
**Audit ID:** ET-B2-0438
**Card ID:** `b2-sich-paaren`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sich paaren
**LV MASTER reference:** pāroties ar
**CURRENT:** paarduma millegaga
**PROPOSED_ET (audit ieteikums):** paarituma
**Problēma:** Sich paaren tähendab eeskätt paarituma; praegune väljend on ebatäpne ja „millegagi” ei sobi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0439
**Audit ID:** ET-B2-0439
**Card ID:** `b2-sich-vereinigen`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** sich vereinigen
**LV MASTER reference:** apvienoties ar
**CURRENT:** ühinema millegaga
**PROPOSED_ET (audit ieteikums):** ühinema millegagi
**Problēma:** Verb ühinema nõuab sihitise puhul kaassõnalist vormi millegagi, mitte millegaga.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0440
**Audit ID:** ET-B2-0440
**Card ID:** `b2-sich-versehen`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** sich versehen
**LV MASTER reference:** aizmirst • aprīkot ar
**CURRENT:** eksima • varustama millegaga
**PROPOSED_ET (audit ieteikums):** eksima • varustama millegagi
**Problēma:** Väljend „varustama millegagi” nõuab indefiniitse asesõna vormi millegagi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0441
**Audit ID:** ET-B2-0441
**Card ID:** `b2-sich-versoehnen`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** sich versöhnen
**LV MASTER reference:** samierināties ar
**CURRENT:** leppima millegaga
**PROPOSED_ET (audit ieteikums):** ära leppima kellegagi
**Problēma:** Sich versöhnen tähendab kellegagi ära leppima; millegagi leppima tähendab millegi aktsepteerimist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0442
**Audit ID:** ET-B2-0442
**Card ID:** `b2-sich-verstellen`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** sich verstellen
**LV MASTER reference:** uzdoties par
**CURRENT:** teesklema keda
**PROPOSED_ET (audit ieteikums):** teesklema
**Problēma:** Küsimusõna keda ei sobi tõlkesse; sich verstellen tähendab siin teesklema või võltsilt käituma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0443
**Audit ID:** ET-B2-0443
**Card ID:** `b2-zuwider`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** zuwider
**LV MASTER reference:** tas man nepatīk / tas mani apbēdina.
**CURRENT:** see ei meeldi mulle / see kurvastab mind.
**PROPOSED_ET (audit ieteikums):** see ei meeldi mulle
**Problēma:** Zuwider sein tähendab mitte meeldima või vastumeelne olema, mitte tingimata kurvastama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0444
**Audit ID:** ET-B2-0444
**Card ID:** `b2-zuwider`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** zuwider
**LV MASTER reference:** iebilst • nepiekrist
**CURRENT:** vaidlema • mitte nõustuma
**PROPOSED_ET (audit ieteikums):** vastu vaidlema • mitte nõustuma
**Problēma:** Iebilst tähendab vastu vaidlema või vastuväiteid esitama; vaidlema on liiga üldine.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0445
**Audit ID:** ET-B2-0445
**Card ID:** `b2-aendern`
**Field/path:** `etMain`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ändern
**LV MASTER reference:** mainīt • labot
**CURRENT:** muutma • parandama
**PROPOSED_ET (audit ieteikums):** muutma
**Problēma:** Ändern tähendab muutma või ümber tegema; parandama viitab pigem vigade parandamisele või verbessern'ile.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B2-0446
**Audit ID:** ET-B2-0446
**Card ID:** `b2-aendern`
**Field/path:** `study.translation`
**Production file:** `data/et/b2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ändern
**LV MASTER reference:** mainīt • labot
**CURRENT:** muutma • parandama
**PROPOSED_ET (audit ieteikums):** muutma
**Problēma:** Ändern tähendab muutma või ümber tegema; parandama viitab pigem vigade parandamisele või verbessern'ile.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
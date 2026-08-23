# ET–DE A1 — OWNER VIEW (grupa 52, 2551–2600)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#621](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/621)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [et-b1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b1-full-audit-4a7c/reports/et-b1-owner-review-GITHUB.md) |
| OWNER VIEW (visi) | [et-b1-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b1-full-audit-4a7c/reports/et-b1-owner-view.md) |
| Decisions (šī grupa) | [et-b1-owner-decisions-group52.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b1-full-audit-4a7c/reports/et-b1-owner-decisions-group52.md) |
| Decisions (viss) | [et-b1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b1-full-audit-4a7c/reports/et-b1-owner-decisions.md) |

Avots: [et-b1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b1-full-audit-4a7c/reports/et-b1-full-audit.md)

## ET-B1-4436
**Audit ID:** ET-B1-4436
**Card ID:** `b1-sich-bemühen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** sich bemühen
**LV MASTER reference:** es cenšos būt laikā.
**CURRENT:** ma pingutan, et olla õigel ajal.
**PROPOSED_ET (audit ieteikums):** ma pingutan, et õigeks ajaks kohal olla.
**Problēma:** Õigel ajal olema ei väljenda siin loomulikult õigeks ajaks kohale jõudmist ega õigel ajal kohal olemist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4437
**Audit ID:** ET-B1-4437
**Card ID:** `b1-berühmtheit`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Berühmtheit
**LV MASTER reference:** slava / slavenība
**CURRENT:** kuulsus / kuulsa isik
**PROPOSED_ET (audit ieteikums):** kuulsus / kuulus isik
**Problēma:** Omadussõna peab ühilduma sõnaga isik: kuulsa isik on käändevormilt vigane.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4438
**Audit ID:** ET-B1-4438
**Card ID:** `b1-beschwerde`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Beschwerde
**LV MASTER reference:** prasība tiesā
**CURRENT:** kohtuhagi
**PROPOSED_ET (audit ieteikums):** vaie
**Problēma:** Beschwerde võib olla ametlik vaie, kuid kohtuhagi vastab pigem saksa sõnale Klage.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4439
**Audit ID:** ET-B1-4439
**Card ID:** `b1-bestehen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** bestehen
**LV MASTER reference:** viņš uzstāj uz savu viedokli.
**CURRENT:** ta nõuab oma arvamust.
**PROPOSED_ET (audit ieteikums):** ta jääb oma arvamusele kindlaks.
**Problēma:** Nõuab oma arvamust on ebaloomulik; tähendus on oma seisukohale kindlaks jäämine või sellel nõudmine.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4440
**Audit ID:** ET-B1-4440
**Card ID:** `b1-bieten`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** bieten
**LV MASTER reference:** Iespējas, kursi, pakalpojumi vai skats bieži etwas bieten = kaut ko sniedz/piedāvā.
**CURRENT:** Võimalused, kursused, teenused või vaade sageli etwas bieten = midagi pakub/annab.
**PROPOSED_ET (audit ieteikums):** Võimalused, kursused, teenused või vaade võivad midagi pakkuda (etwas bieten).
**Problēma:** Loetelu mitmuslik subjekt ei sobi ainsuse vormiga „pakub”; sõnastus on ka ebaloomulikult katkendlik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4441
**Audit ID:** ET-B1-4441
**Card ID:** `b1-bogen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Bogen
**LV MASTER reference:** loks ir no koka.
**CURRENT:** kaar on puust.
**PROPOSED_ET (audit ieteikums):** vibu on puust.
**Problēma:** Läti „loks” tähendab siin vibu, mitte kaart; praegune tõlge muudab näite tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4442
**Audit ID:** ET-B1-4442
**Card ID:** `b1-botschaft`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Botschaft
**LV MASTER reference:** man ir pieraksts vēstniecībā.
**CURRENT:** mul on aeg saatkonnas.
**PROPOSED_ET (audit ieteikums):** mul on saatkonnas aeg.
**Problēma:** „Mul on aeg saatkonnas” tähendab aega, mida veedetakse saatkonnas; kohtumise tähendus vajab sõnajärge „saatkonnas aeg”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4443
**Audit ID:** ET-B1-4443
**Card ID:** `b1-dagegen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** dagegen
**LV MASTER reference:** viņam patīk tēja, bet es turpretim dzeru kafiju.
**CURRENT:** talle meeldib tee, mina aga joon seevastu kohvi.
**PROPOSED_ET (audit ieteikums):** talle meeldib tee, mina seevastu joon kohvi.
**Problēma:** „Aga” ja „seevastu” koos on üleliigne ning sõnajärg on ebaloomulik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4444
**Audit ID:** ET-B1-4444
**Card ID:** `b1-dagegen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/b1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** dagegen
**LV MASTER reference:** par to
**CURRENT:** selle poolt
**PROPOSED_ET (audit ieteikums):** selle vastu
**Problēma:** „Selle poolt” tähendab dagegeni vastandit dafür, mitte dagegen.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4445
**Audit ID:** ET-B1-4445
**Card ID:** `b1-daher`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** daher
**LV MASTER reference:** līst, tāpēc mēs paliekam mājās.
**CURRENT:** sajab, seetõttu me jääme koju.
**PROPOSED_ET (audit ieteikums):** sajab, seetõttu jääme koju.
**Problēma:** Pärast lausealgulist „seetõttu” on eesti keeles loomulikum subjektita sõnajärg.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4446
**Audit ID:** ET-B1-4446
**Card ID:** `b1-dank-study`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Dank
**LV MASTER reference:** pateikties formāli
**CURRENT:** tänama (end) formaalselt
**PROPOSED_ET (audit ieteikums):** formaalselt tänama
**Problēma:** „End tänama” tähendab iseennast tänama; siin on „end” väär ja muudab tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4447
**Audit ID:** ET-B1-4447
**Card ID:** `b1-daran`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** daran
**LV MASTER reference:** par to / pie tā
**CURRENT:** selle peale / selle juures
**PROPOSED_ET (audit ieteikums):** selle peale / selle kallal
**Problēma:** arbeiten an tähendab „selle kallal töötama”; „selle juures” ei väljenda seda rektsiooni täpselt.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4448
**Audit ID:** ET-B1-4448
**Card ID:** `b1-darunter`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** darunter
**LV MASTER reference:** darunter nav tikai fiziski “zem tā”; ļoti bieži tas ievada vienu daļu no grupas.
**CURRENT:** darunter ei ole ainult füüsiliselt „selle all”; väga sageli sissejuhatab see ühe osa grupist.
**PROPOSED_ET (audit ieteikums):** darunter ei ole ainult füüsiliselt „selle all”; väga sageli juhatab see sisse ühe osa grupist.
**Problēma:** Eesti keeles on ühendverb „sisse juhatama”, mitte „sissejuhatama”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4449
**Audit ID:** ET-B1-4449
**Card ID:** `b1-decken`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** decken
**LV MASTER reference:** Tisch decken nav “segt galdu” burtiski, bet “klāt galdu”; Kosten decken = segt izmaksas.
**CURRENT:** Tisch decken ei ole sõna-sõnalt „lauda katma” peites tähenduses, vaid „lauda katma” söögiks; Kosten decken = kulusid katma.
**PROPOSED_ET (audit ieteikums):** Tisch decken ei ole sõna-sõnalt „lauda katma” katmise tähenduses, vaid „lauda katma” söögiks; Kosten decken = kulusid katma.
**Problēma:** „Peites tähenduses” on arusaamatu ja moonutab vastandust sõnasõnalise ning idiomaatilise tähenduse vahel.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4450
**Audit ID:** ET-B1-4450
**Card ID:** `b1-dienen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** dienen
**LV MASTER reference:** šī istaba kalpo kā birojs.
**CURRENT:** see tuba teenib kontorina.
**PROPOSED_ET (audit ieteikums):** see tuba on kontorina kasutusel.
**Problēma:** „Tuba teenib” on saksa-läti kalke; eesti keeles öeldakse, et ruum on kasutusel või toimib kontorina.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4451
**Audit ID:** ET-B1-4451
**Card ID:** `b1-dienen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** dienen
**LV MASTER reference:** poga kalpo drošībai.
**CURRENT:** nupp teenib turvalisust.
**PROPOSED_ET (audit ieteikums):** nupp aitab turvalisust tagada.
**Problēma:** „Teenima turvalisust” ei ole eesti keeles loomulik ega täpne vahendi otstarbe väljendus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4452
**Audit ID:** ET-B1-4452
**Card ID:** `b1-dienen`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** dienen
**LV MASTER reference:** dienen als = kalpot kā; dienen zu = noderēt kam.
**CURRENT:** dienen als = teenima kui; dienen zu = kõlbama milleks.
**PROPOSED_ET (audit ieteikums):** dienen als = teenima ...-na; dienen zu = olema millekski kasulik.
**Problēma:** „Teenima kui” on ebaloomulik rektsioon ja „kõlbama milleks” ei ole siin sobiv vaste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4453
**Audit ID:** ET-B1-4453
**Card ID:** `b1-durchführen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** durchführen
**LV MASTER reference:** uzņēmums veic remontu.
**CURRENT:** ettevõte teostab remonti.
**PROPOSED_ET (audit ieteikums):** ettevõte teeb remonti.
**Problēma:** „Remonti teostama” on bürokraatlik ja kohmakas; tavapärane ühend on „remonti tegema”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4454
**Audit ID:** ET-B1-4454
**Card ID:** `b1-einerlei`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** einerlei
**LV MASTER reference:** man tas ir vienalga.
**CURRENT:** mulle on see ükskõik.
**PROPOSED_ET (audit ieteikums):** mul on sellest ükskõik.
**Problēma:** Estonian idiomatically says „mul on sellest ükskõik”; the current word order and case are unnatural.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4455
**Audit ID:** ET-B1-4455
**Card ID:** `b1-einfahrt`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Einfahrt
**LV MASTER reference:** lūdzu, nenovietojiet auto pie iebrauktuves.
**CURRENT:** palun ärge parkige sissesõidutee ees.
**PROPOSED_ET (audit ieteikums):** palun ärge parkige sissesõidutee ette.
**Problēma:** With „parkima” and a destination blocked by a vehicle, Estonian uses the illative „ette”, not the adessive „ees”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4456
**Audit ID:** ET-B1-4456
**Card ID:** `b1-einfallen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** einfallen
**LV MASTER reference:** man ienāk prātā ideja.
**CURRENT:** mulle tuleb meelde idee.
**PROPOSED_ET (audit ieteikums):** mulle tuleb idee meelde.
**Problēma:** The current word order is unnatural; the object „idee” normally precedes the separable phrase „tuleb meelde”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4457
**Audit ID:** ET-B1-4457
**Card ID:** `b1-einfügen`
**Field/path:** `etMain`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** einfügen
**LV MASTER reference:** ievietot
**CURRENT:** sisestama
**PROPOSED_ET (audit ieteikums):** lisama
**Problēma:** Einfügen means inserting or adding content, while „sisestama” usually means entering or inputting data.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4458
**Audit ID:** ET-B1-4458
**Card ID:** `b1-einfügen`
**Field/path:** `study.translation`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** einfügen
**LV MASTER reference:** ievietot
**CURRENT:** sisestama
**PROPOSED_ET (audit ieteikums):** lisama
**Problēma:** Einfügen means inserting or adding content, while „sisestama” usually means entering or inputting data.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4459
**Audit ID:** ET-B1-4459
**Card ID:** `b1-einfügen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** einfügen
**LV MASTER reference:** ievieto attēlu dokumentā.
**CURRENT:** sisesta pilt dokumenti.
**PROPOSED_ET (audit ieteikums):** lisa pilt dokumenti.
**Problēma:** For inserting an image into a document, „lisa” is the natural Estonian verb; „sisesta” implies data entry.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4460
**Audit ID:** ET-B1-4460
**Card ID:** `b1-einfügen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** einfügen
**LV MASTER reference:** es ievietoju teikumu tekstā.
**CURRENT:** ma sisestan lause teksti.
**PROPOSED_ET (audit ieteikums):** ma lisan lause teksti.
**Problēma:** A sentence inserted into text is „lause teksti lisama”, not normally „lause teksti sisestama”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4461
**Audit ID:** ET-B1-4461
**Card ID:** `b1-einfügen`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** einfügen
**LV MASTER reference:** Tekstā vai dokumentā einfügen = ievietot; sich einfügen = iekļauties.
**CURRENT:** Tekstis või dokumendis einfügen = sisestama; sich einfügen = sobituma.
**PROPOSED_ET (audit ieteikums):** Tekstis või dokumendis einfügen = lisama; sich einfügen = sobituma.
**Problēma:** The teaching gloss gives the wrong primary Estonian equivalent for inserting content into a text or document.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4462
**Audit ID:** ET-B1-4462
**Card ID:** `b1-einfügen`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** einfügen
**LV MASTER reference:** einfügen bieži ir tehniska/dokumentu darbība; “pievienot” biežāk ir hinzufügen.
**CURRENT:** einfügen on sageli tehniline/dokumendi tegevus; „lisama” on sagedamini hinzufügen.
**PROPOSED_ET (audit ieteikums):** einfügen on sageli tehniline või dokumendiga seotud tegevus; „juurde lisama” on sagedamini hinzufügen.
**Problēma:** The current note incorrectly excludes „lisama” from einfügen and blurs the distinction with hinzufügen.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4463
**Audit ID:** ET-B1-4463
**Card ID:** `b1-sich-eingewöhnen`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/b1.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** sich eingewöhnen
**LV MASTER reference:** Jaunā darbā, skolā vai vietā cilvēks muss sich eingewöhnen.
**CURRENT:** Uues töökohas, koolis või kohas peab inimene sich eingewöhnen.
**PROPOSED_ET (audit ieteikums):** Uues töökohas, koolis või uues paigas peab inimene harjuma.
**Problēma:** Estonian sentence contains an unintegrated German verb phrase and is grammatically incorrect.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4464
**Audit ID:** ET-B1-4464
**Card ID:** `b1-einstellen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** einstellen
**LV MASTER reference:** es noregulēju apkuri uz 20 grādiem.
**CURRENT:** ma reguleerin küttet 20 kraadile.
**PROPOSED_ET (audit ieteikums):** Ma seadistan kütte 20 kraadini.
**Problēma:** The collocation and case are unnatural; settings are normally expressed with seadistama ... kraadini.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4465
**Audit ID:** ET-B1-4465
**Card ID:** `b1-eintreten`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** eintreten
**LV MASTER reference:** vēlamā iedarbība iestājas tikai vēlāk.
**CURRENT:** soovitud toime saabub alles hiljem.
**PROPOSED_ET (audit ieteikums):** soovitud mõju avaldub alles hiljem.
**Problēma:** „Toime saabub” on ebaloomulik; saksa Wirkung tritt ein tähendab loomulikumalt, et mõju avaldub.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4466
**Audit ID:** ET-B1-4466
**Card ID:** `b1-eintreten`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** eintreten
**LV MASTER reference:** ieiet vietā
**CURRENT:** sisenema kohta
**PROPOSED_ET (audit ieteikums):** ruumi sisenema
**Problēma:** „Sisenema kohta” on ebaloomulik kollokatsioon; koha näitena sobib „ruumi sisenema”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4467
**Audit ID:** ET-B1-4467
**Card ID:** `b1-eintreten`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** eintreten
**LV MASTER reference:** eintreten ar notikumu nenozīmē fiziski ieiet: Die Wirkung tritt ein = iedarbība iestājas.
**CURRENT:** eintreten sündmusega ei tähenda füüsiliselt sisenemist: Die Wirkung tritt ein = toime saabub.
**PROPOSED_ET (audit ieteikums):** eintreten sündmuse kohta ei tähenda füüsiliselt sisenemist: Die Wirkung tritt ein = mõju avaldub.
**Problēma:** „Eintreten sündmusega” ja „toime saabub” on eesti keeles ebaloomulikud väljendid.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4468
**Audit ID:** ET-B1-4468
**Card ID:** `b1-einziehen`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** einziehen
**LV MASTER reference:** einziehen uzsver ieiešanu jaunā vietā; umziehen uzsver pārvākšanās procesu.
**CURRENT:** einziehen rõhutab uude kohta sisenemist; umziehen rõhutab kolimisprotsessi.
**PROPOSED_ET (audit ieteikums):** einziehen rõhutab uude kohta elama asumist; umziehen rõhutab kolimisprotsessi.
**Problēma:** Einziehen tähendab uude kohta sisse kolimist, mitte lihtsalt sinna sisenemist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4469
**Audit ID:** ET-B1-4469
**Card ID:** `b1-empfangen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** empfangen
**LV MASTER reference:** saņemt / uzņemt / uztvert
**CURRENT:** vastu võtma
**PROPOSED_ET (audit ieteikums):** saama / vastu võtma / tajuma
**Problēma:** Praegune vaste jätab kolmest saksa verbi põhitähendusest „saama” ja „tajuma” välja.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4470
**Audit ID:** ET-B1-4470
**Card ID:** `b1-entfernen`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** entfernen
**LV MASTER reference:** Ja kustība prom ir pašam cilvēkam, vajag refleksīvo formu sich entfernen.
**CURRENT:** Kui liikumine ära on inimesel endal, on vaja refleksiivset vormi sich entfernen.
**PROPOSED_ET (audit ieteikums):** Kui inimene ise liigub eemale, on vaja refleksiivset vormi sich entfernen.
**Problēma:** „Kui liikumine ära on inimesel endal” on eesti keeles kohmakas ja ebaloomulik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4471
**Audit ID:** ET-B1-4471
**Card ID:** `b1-entkommen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** entkommen
**LV MASTER reference:** izglābties
**CURRENT:** end päästma
**PROPOSED_ET (audit ieteikums):** pääsema
**Problēma:** „End päästma” tähendab enda päästmist, ent entkommen vastab siin tähendusele „pääsema”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4472
**Audit ID:** ET-B1-4472
**Card ID:** `b1-entlassen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** entlassen
**LV MASTER reference:** uzteikt darbu vai līgumu
**CURRENT:** üles ütlema tööd või lepingut
**PROPOSED_ET (audit ieteikums):** töölt vabastama või lepingut lõpetama
**Problēma:** Ühend „üles ütlema tööd” on vigane; loomulikud vasted on „töölt vabastama” ja „lepingut lõpetama”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4473
**Audit ID:** ET-B1-4473
**Card ID:** `b1-entstehen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** entstehen
**LV MASTER reference:** šeit top jauna ēka.
**CURRENT:** siia valmib uus hoone.
**PROPOSED_ET (audit ieteikums):** siia kerkib uus hoone.
**Problēma:** „Valmima” tähendab valmimist; entstehen kirjeldab hoone tekkimist või kerkimist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4474
**Audit ID:** ET-B1-4474
**Card ID:** `b1-festlegen`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** festlegen
**LV MASTER reference:** festlegen = noteikt iepriekš; feststellen = konstatēt jau esošu faktu.
**CURRENT:** festlegen = eelnevalt kindlaks määrama; feststellen = juba olemasoleva fakti tuvastamine.
**PROPOSED_ET (audit ieteikums):** festlegen = otsustama või tähtaja ja hinna kindlaks määrama; feststellen = juba olemasolevat fakti tuvastama.
**Problēma:** Praegune teine pool on nimisõnaline ja esimene näide „otsus kindlaks määrama” pole loomulik eesti kollokatsioon.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4475
**Audit ID:** ET-B1-4475
**Card ID:** `b1-feststellen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** feststellen
**LV MASTER reference:** konstatēt / noskaidrot faktu
**CURRENT:** tuvastama / fakti selgitama
**PROPOSED_ET (audit ieteikums):** tuvastama / fakti kindlaks tegema
**Problēma:** „Fakti selgitama” tähendab pigem fakti lahtiseletamist, mitte selle kindlakstegemist või konstateerimist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4476
**Audit ID:** ET-B1-4476
**Card ID:** `b1-futter`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** Futter
**LV MASTER reference:** Futter cilvēku ēdienam parasti nelieto; cilvēkiem ir Essen vai Nahrung.
**CURRENT:** Futter ei kasutata tavaliselt inimeste toidu kohta; inimestel on Essen või Nahrung.
**PROPOSED_ET (audit ieteikums):** Sõna Futterit ei kasutata tavaliselt inimeste toidu kohta; inimeste kohta kasutatakse Essenit või Nahrungit.
**Problēma:** Saksa sõnu kasutatakse siin eestikeelses lauses objektina, mistõttu vajavad need osastava käände vormi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4477
**Audit ID:** ET-B1-4477
**Card ID:** `b1-gelten`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** gelten
**LV MASTER reference:** tikt uzskatītam par
**CURRENT:** peetama millekski
**PROPOSED_ET (audit ieteikums):** pidama millekski
**Problēma:** „Peetama“ ei ole siin õige sõnavorm; väljend „pidama millekski“ tähendab „pidama kellekski/millekski“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4478
**Audit ID:** ET-B1-4478
**Card ID:** `b1-gelten`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** STRUCTURE
**DE (read-only):** gelten
**LV MASTER reference:** Regel, Gesetz, Ticket gilt; persona gilt als Expertin.
**CURRENT:** Regel, Gesetz, Ticket gilt; inimene gilt als Expertin.
**PROPOSED_ET (audit ieteikums):** Regel, Gesetz, Ticket gilt; Eine Person gilt als Expertin.
**Problēma:** Lause on segakeelne ja eestikeelne „inimene“ ei sobitu saksa näitelausesse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4479
**Audit ID:** ET-B1-4479
**Card ID:** `b1-gemein`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gemein
**LV MASTER reference:** šī piezīme bija diezgan nejauka.
**CURRENT:** see märkus oli üsna ebameeldiv.
**PROPOSED_ET (audit ieteikums):** see märkus oli üsna õel.
**Problēma:** Gemein tähendab siin õelat või pahatahtlikku, mitte lihtsalt ebameeldivat.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4480
**Audit ID:** ET-B1-4480
**Card ID:** `b1-gemein`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** gemein
**LV MASTER reference:** Nejauc gemein ar gemeinsam: gemein = nekrietns, gemeinsam = kopīgs.
**CURRENT:** Ära aja segi gemein sõnaga gemeinsam: gemein = alatu, gemeinsam = ühine.
**PROPOSED_ET (audit ieteikums):** Ära aja sõna gemein segi sõnaga gemeinsam: gemein = alatu, gemeinsam = ühine.
**Problēma:** „Aja segi“ konstruktsioon vajab sõna „gemein“ ees täpsustavat sõna „sõna“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4481
**Audit ID:** ET-B1-4481
**Card ID:** `b1-geschlecht`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/b1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Geschlecht
**LV MASTER reference:** gramatiskā dzimte ir vīriešu.
**CURRENT:** grammatiline sugu on mehe sugu.
**PROPOSED_ET (audit ieteikums):** grammatiline sugu on meessugu.
**Problēma:** Grammatiline „meessugu“ ei tähenda „mehe sugu“, mis viitaks inimese bioloogilisele soole.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4482
**Audit ID:** ET-B1-4482
**Card ID:** `b1-geschlecht`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Geschlecht
**LV MASTER reference:** statistikā atšķir pēc dzimuma.
**CURRENT:** statistika kohaselt eristatakse soo järgi.
**PROPOSED_ET (audit ieteikums):** statistikas eristatakse soo järgi.
**Problēma:** „Statistika kohaselt“ tähendab „statistika andmetel“, mitte „statistikas“ ehk statistilises jaotuses.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4483
**Audit ID:** ET-B1-4483
**Card ID:** `b1-geschlecht`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** STRUCTURE
**DE (read-only):** Geschlecht
**LV MASTER reference:** Personai Geschlecht = dzimums; vārdam gramatikā Geschlecht = dzimte.
**CURRENT:** Inimesel Geschlecht = sugu; sõnal grammatikas Geschlecht = sugu.
**PROPOSED_ET (audit ieteikums):** Inimese puhul tähendab Geschlecht „sugu“; sõna puhul grammatikas „grammatilist sugu“.
**Problēma:** Praegune selgitus on hübriidne ja ei erista piisavalt bioloogilist ning grammatilist sugu.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4484
**Audit ID:** ET-B1-4484
**Card ID:** `b1-gesellschaft`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Gesellschaft
**LV MASTER reference:** Vispirms mācies Gesellschaft kā “sabiedrība”; uzņēmuma un kompānijas nozīmi rāda konteksts.
**CURRENT:** Õpi kõigepealt Gesellschaft kui „ühiskond”; ettevõtte ja seltskonna tähenduse näitab kontekst.
**PROPOSED_ET (audit ieteikums):** Õpi kõigepealt Gesellschafti tähenduses „ühiskond“; ettevõtte- ja seltskonnatähendus sõltub kontekstist.
**Problēma:** Praegune lause on kohmakas: „tähenduse näitab kontekst“ ei väljenda loomulikult mitut tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4485
**Audit ID:** ET-B1-4485
**Card ID:** `b1-sich-gewöhnen`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** sich gewöhnen
**LV MASTER reference:** Ar sich nozīme ir “pierast”; bez sich gewöhnen bieži nozīmē “pieradināt kādu”.
**CURRENT:** Koos sich-ga on tähendus „harjuma”; ilma sich-ta tähendab gewöhnen sageli „kedagi harjutama“.
**PROPOSED_ET (audit ieteikums):** Koos „sichiga“ on tähendus „harjuma“; ilma „sichita“ tähendab gewöhnen sageli „kedagi millegagi harjutama“.
**Problēma:** Saksa asesõna liitega kirjutatakse siin loomulikumalt „sichiga“ ja „sichita“; „harjutama“ vajab objekti täpsustust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
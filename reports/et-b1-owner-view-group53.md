# ET–DE A1 — OWNER VIEW (grupa 53, 2601–2650)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#621](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/621)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [et-b1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b1-full-audit-4a7c/reports/et-b1-owner-review-GITHUB.md) |
| OWNER VIEW (visi) | [et-b1-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b1-full-audit-4a7c/reports/et-b1-owner-view.md) |
| Decisions (šī grupa) | [et-b1-owner-decisions-group53.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b1-full-audit-4a7c/reports/et-b1-owner-decisions-group53.md) |
| Decisions (viss) | [et-b1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b1-full-audit-4a7c/reports/et-b1-owner-decisions.md) |

Avots: [et-b1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-b1-full-audit-4a7c/reports/et-b1-full-audit.md)

## ET-B1-4486
**Audit ID:** ET-B1-4486
**Card ID:** `b1-greifen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** greifen
**LV MASTER reference:** policists satver zagli aiz rokas.
**CURRENT:** politseinik haarab vargal käest.
**PROPOSED_ET (audit ieteikums):** politseinik haarab vargal käest kinni.
**Problēma:** Käest haarama tähendab pigem kelleltki midagi ära võtma; inimese käest kinni haaramiseks on vaja „kinni”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4487
**Audit ID:** ET-B1-4487
**Card ID:** `b1-greifen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** greifen
**LV MASTER reference:** mums jāķeras pie jauniem pasākumiem.
**CURRENT:** me peame appi hakkama uutele meetmetele.
**PROPOSED_ET (audit ieteikums):** me peame kasutusele võtma uued meetmed.
**Problēma:** „Appi hakkama” tähendab abistama asumist, mitte meetmete käsilevõtmist või rakendamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4488
**Audit ID:** ET-B1-4488
**Card ID:** `b1-greifen`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** greifen
**LV MASTER reference:** satvert / sniegties / ķerties pie
**CURRENT:** haarama / sirutuma / appi hakkama
**PROPOSED_ET (audit ieteikums):** haarama / sirutuma / käsile võtma
**Problēma:** „Appi hakkama” ei tähenda millegi käsilevõtmist; see tähendab kellegi abistamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4489
**Audit ID:** ET-B1-4489
**Card ID:** `b1-handeln`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** handeln
**LV MASTER reference:** handelt von lieto par filmas, grāmatas vai teksta tēmu; tas nav “rīkoties”.
**CURRENT:** handelt von kasutatakse filmi, raamatu või teksti teema kohta; see ei ole „tegutsema”.
**PROPOSED_ET (audit ieteikums):** Väljendit handelt von kasutatakse filmi, raamatu või teksti teema väljendamiseks; see ei ole „tegutsema”.
**Problēma:** Praegune lause on grammatiliselt vigane: puudub selge alus nagu „väljendit”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4490
**Audit ID:** ET-B1-4490
**Card ID:** `b1-handgriff`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Handgriff
**LV MASTER reference:** ar vienu paņēmienu durvis bija vaļā.
**CURRENT:** ühe võttega oli uks lahti.
**PROPOSED_ET (audit ieteikums):** ühe võttega sai ukse lahti.
**Problēma:** Eestikeelne loomulik väljend on „ukse lahti saama”; „uks oli lahti” muudab tähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4491
**Audit ID:** ET-B1-4491
**Card ID:** `b1-hauen`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** hauen
**LV MASTER reference:** hauen ir sarunvalodīgs trieciens; Hau ab! ir atsevišķa frāze “Pazūdi!”
**CURRENT:** hauen on kõnekeelne löök; Hau ab! on eraldi väljend „Kao ära!”
**PROPOSED_ET (audit ieteikums):** hauen on kõnekeelne verb tähenduses „lööma”; Hau ab! on eraldi väljend „Kao ära!”
**Problēma:** „Hauen on löök” määratleb verbi nimisõnana; siin on vaja märkida, et tegu on verbiga.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4492
**Audit ID:** ET-B1-4492
**Card ID:** `b1-holen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** holen
**LV MASTER reference:** mēs pasaucam ārstu.
**CURRENT:** me kutsume arsti.
**PROPOSED_ET (audit ieteikums):** me toome arsti kohale.
**Problēma:** holen tähendab siin arsti kohale toomist või äratoomist, mitte arstile helistamist või tema kutsumist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4493
**Audit ID:** ET-B1-4493
**Card ID:** `b1-hort`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Hort
**LV MASTER reference:** bērnu dienas centrs pieskata skolas bērnus pēcpusdienā.
**CURRENT:** laste päevakeskus hoiab koolilapsi pärastlõunal.
**PROPOSED_ET (audit ieteikums):** laste päevakeskus hoolitseb pärastlõunal koolilaste eest.
**Problēma:** „Hoiab koolilapsi” on selles kontekstis ebaloomulik; laste eest hoolitsetakse või neid valvatakse.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4494
**Audit ID:** ET-B1-4494
**Card ID:** `b1-kehren`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** kehren
**LV MASTER reference:** Ar slotu un pagalmu bieži lieto kehren; zurückkehren ir cits vārds.
**CURRENT:** Luua ja õuega kasutatakse sageli kehren; zurückkehren on teine sõna.
**PROPOSED_ET (audit ieteikums):** Luua pühkimisel ja õue koristamisel kasutatakse sageli sõna kehren; zurückkehren on teine sõna.
**Problēma:** Praegune sõnastus on ebaloomulik ja jätab mulje, et kehrenit kasutatakse koos õuega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4495
**Audit ID:** ET-B1-4495
**Card ID:** `b1-kern`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Kern
**LV MASTER reference:** Augļiem latviski der Kern reizēm tulko kā sēkliņa vai kauliņš; konteksts nosaka tulkojumu.
**CURRENT:** Puuviljade puhul tõlgitakse der Kern eesti keeles vahel seeme või kivi; kontekst määrab tõlke.
**PROPOSED_ET (audit ieteikums):** Puuviljade puhul tõlgitakse der Kern eesti keeles vahel seemneks või kiviks; kontekst määrab tõlke.
**Problēma:** Tegusõna „tõlkima” nõuab siin translatiivset käänet: seemneks või kiviks.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4496
**Audit ID:** ET-B1-4496
**Card ID:** `b1-kippen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** kippen
**LV MASTER reference:** noskaņojums var ātri mainīties uz slikto pusi.
**CURRENT:** meeleolu võib kiiresti halvemuse poole muutuda.
**PROPOSED_ET (audit ieteikums):** meeleolu võib kiiresti halvaks muutuda.
**Problēma:** „Halvemuse poole muutuma” on ebaloomulik; meeleolu kohta öeldakse tavaliselt „halvaks muutuma”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4497
**Audit ID:** ET-B1-4497
**Card ID:** `b1-kunde-2`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Kunde
**LV MASTER reference:** vēsts ātri izplatījās.
**CURRENT:** sõnum levis kiiresti.
**PROPOSED_ET (audit ieteikums):** klient maksab kassas.
**Problēma:** Näide kirjeldab sõnumi, mitte kliendi tähendust; see kuulub sõna teise tähenduse juurde.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4498
**Audit ID:** ET-B1-4498
**Card ID:** `b1-kunde`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Kunde
**LV MASTER reference:** klients maksā pie kases.
**CURRENT:** klient maksab kassas.
**PROPOSED_ET (audit ieteikums):** sõnum levis kiiresti.
**Problēma:** Näide kirjeldab klienti, kuid kaart õpetab siin Kunde tähenduses „sõnum/uudis“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4499
**Audit ID:** ET-B1-4499
**Card ID:** `b1-inhalt`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Inhalt
**LV MASTER reference:** pudeles tilpums ir viens litrs.
**CURRENT:** pudeli maht on üks liiter.
**PROPOSED_ET (audit ieteikums):** pudeli sisu on üks liiter.
**Problēma:** „Maht“ tähendab pudeli ruumala, mitte selle sisu; Inhalt viitab siin pudeli sisule.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4500
**Audit ID:** ET-B1-4500
**Card ID:** `b1-laut-study`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Laut
**LV MASTER reference:** tas ir ļoti skaļi.
**CURRENT:** see on väga valjult.
**PROPOSED_ET (audit ieteikums):** see on väga vali.
**Problēma:** Omadussõna vali kirjeldab heli; valjult on määrsõna ja sobib kõnelemise viisi kirjeldamiseks.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4501
**Audit ID:** ET-B1-4501
**Card ID:** `b1-leisten`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** leisten
**LV MASTER reference:** viņa veic labu darbu.
**CURRENT:** ta sooritab head tööd.
**PROPOSED_ET (audit ieteikums):** ta teeb head tööd.
**Problēma:** Eesti keeles tehakse head tööd; sooritama ei sobi siin loomuliku kollokatsioonina töö kohta.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4502
**Audit ID:** ET-B1-4502
**Card ID:** `b1-leisten`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** leisten
**LV MASTER reference:** veikt / sniegt
**CURRENT:** sooritama
**PROPOSED_ET (audit ieteikums):** tegema / osutama
**Problēma:** Sõna sooritama ei kata loomulikult tähendust „abi osutama” ega kõiki verbi leisten põhikasutusi.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4503
**Audit ID:** ET-B1-4503
**Card ID:** `b1-leistung`
**Field/path:** `study.important.text`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Leistung
**LV MASTER reference:** Leistung nav tikai gala rezultāts; tā bieži vērtē pašu sniegumu vai jaudu.
**CURRENT:** Leistung ei ole ainult lõpptulemus; see hindab sageli sooritust või võimsust ennast.
**PROPOSED_ET (audit ieteikums):** Leistung ei ole ainult lõpptulemus; see viitab sageli sooritusele või võimsusele endale.
**Problēma:** Praeguses lauses hindab Leistung ise sooritust, mis muudab suhte semantiliselt ebaloogiliseks.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4504
**Audit ID:** ET-B1-4504
**Card ID:** `b1-locker`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** locker
**LV MASTER reference:** skrūve ir vaļīga.
**CURRENT:** kruvi on lõtv.
**PROPOSED_ET (audit ieteikums):** kruvi on lahti.
**Problēma:** Kruvi kohta öeldakse eesti keeles lahti, mitte lõtv; lõtv kirjeldab pigem materjali või riietust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4505
**Audit ID:** ET-B1-4505
**Card ID:** `b1-locker`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** locker
**LV MASTER reference:** viņš valkā brīvu jaku.
**CURRENT:** ta kannab vaba jakki.
**PROPOSED_ET (audit ieteikums):** ta kannab avarat jakki.
**Problēma:** Vaba jakk tähendab eesti keeles pigem vaba või kasutamata jakki; rõiva lõiget kirjeldab avar või lõtv.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4506
**Audit ID:** ET-B1-4506
**Card ID:** `b1-locker`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** locker
**LV MASTER reference:** stingrs, ciešs
**CURRENT:** tugev, kindel
**PROPOSED_ET (audit ieteikums):** kindel, pingul
**Problēma:** Tugev ei väljenda täpselt vastandtähendust „tihe/pingul”; vastandus peaks kirjeldama kinnisust või pingulolekut.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4507
**Audit ID:** ET-B1-4507
**Card ID:** `b1-löschen`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** löschen
**LV MASTER reference:** izslēgt ierīci
**CURRENT:** seadet välja lülitama
**PROPOSED_ET (audit ieteikums):** seadmest andmeid kustutama
**Problēma:** Germaani löschen ei tähenda seadme väljalülitamist; see võib tähendada seadmest andmete kustutamist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4508
**Audit ID:** ET-B1-4508
**Card ID:** `b1-lösen`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** lösen
**LV MASTER reference:** dzēst
**CURRENT:** kustutama
**PROPOSED_ET (audit ieteikums):** vabastama
**Problēma:** Kustutama on verbi löschen tähendus, mitte lösen tähendus; lösen võib tähendada näiteks vabastamist või lahtipäästmist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4509
**Audit ID:** ET-B1-4509
**Card ID:** `b1-maß`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Maß
**LV MASTER reference:** pasākums, rīcība
**CURRENT:** meede, tegevus
**PROPOSED_ET (audit ieteikums):** mõõt, piir
**Problēma:** „Tegevus” ei vasta saksa sõna Maß tähendusele; see on pigem Maßnahme.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4510
**Audit ID:** ET-B1-4510
**Card ID:** `b1-messe`
**Field/path:** `etMain`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** STUDY
**DE (read-only):** Messe
**LV MASTER reference:** gadatirgus
**CURRENT:** messi
**PROPOSED_ET (audit ieteikums):** mess
**Problēma:** Sõnavara põhivorm peaks olema nominatiiv „mess”; „messi” on käändevorm.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4511
**Audit ID:** ET-B1-4511
**Card ID:** `b1-messe`
**Field/path:** `study.translation`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** STUDY
**DE (read-only):** Messe
**LV MASTER reference:** gadatirgus
**CURRENT:** messi
**PROPOSED_ET (audit ieteikums):** mess
**Problēma:** Tõlkevaste peaks olema sõnastikuvorm „mess”, mitte genitiivi- või partitiivivorm „messi”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4512
**Audit ID:** ET-B1-4512
**Card ID:** `b1-nachdem`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** nachdem
**LV MASTER reference:** pēc tam kad biju paēdis, es gāju gulēt.
**CURRENT:** pärast seda kui olin söönud, läksin magama.
**PROPOSED_ET (audit ieteikums):** pärast seda, kui olin söönud, läksin magama.
**Problēma:** Kõrvallause ees on sidesõnaühendis vajalik koma: „pärast seda, kui”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4513
**Audit ID:** ET-B1-4513
**Card ID:** `b1-nachdem`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** nachdem
**LV MASTER reference:** pēc tam kad kurss bija beidzies, mēs devāmies mājās.
**CURRENT:** pärast seda kui kursus oli lõppenud, läksime koju.
**PROPOSED_ET (audit ieteikums):** pärast seda, kui kursus oli lõppenud, läksime koju.
**Problēma:** Kõrvallause ees on sidesõnaühendis vajalik koma: „pärast seda, kui”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4514
**Audit ID:** ET-B1-4514
**Card ID:** `b1-nachgeben`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** nachgeben
**LV MASTER reference:** pēc ilgas diskusijas viņš piekāpās.
**CURRENT:** pärast pikka arutelu ta andis järele.
**PROPOSED_ET (audit ieteikums):** pärast pikka arutelu andis ta järele.
**Problēma:** Neutraalses eesti keeles on siin loomulikum verbifraasi pöördjärjestus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4515
**Audit ID:** ET-B1-4515
**Card ID:** `b1-nachgeben`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** nachgeben
**LV MASTER reference:** piekāpties vai padoties spiedienam
**CURRENT:** järele andma survele
**PROPOSED_ET (audit ieteikums):** survele järele andma
**Problēma:** Ühendverb paikneb loomulikus sõnajärjes pärast sihitist: „survele järele andma”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4516
**Audit ID:** ET-B1-4516
**Card ID:** `b1-nachgeben`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** nachgeben
**LV MASTER reference:** atzīt
**CURRENT:** tunnistama
**PROPOSED_ET (audit ieteikums):** järele andma
**Problēma:** „Tunnistama” tähendab admit/acknowledge, mitte saksa verbi nachgeben.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4517
**Audit ID:** ET-B1-4517
**Card ID:** `b1-neigen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** neigen
**LV MASTER reference:** viņam ir nosliece uz ātriem lēmumiem.
**CURRENT:** tal on kalduvus kiirete otsuste poole.
**PROPOSED_ET (audit ieteikums):** tal on kalduvus teha kiireid otsuseid.
**Problēma:** Eesti keeles väljendatakse seda kalduvust loomulikumalt konstruktsiooniga „kalduvus teha”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4518
**Audit ID:** ET-B1-4518
**Card ID:** `b1-neigen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** neigen
**LV MASTER reference:** aprīlī laikapstākļi mēdz būt galēji.
**CURRENT:** aprillis kaldub ilm äärmustesse.
**PROPOSED_ET (audit ieteikums):** aprillis kipub ilm olema äärmuslik.
**Problēma:** „Ilm kaldub äärmustesse” on ebaloomulik; loomulikum on „ilm kipub olema äärmuslik”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4519
**Audit ID:** ET-B1-4519
**Card ID:** `b1-neigung`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Neigung
**LV MASTER reference:** viņai ir tieksme uz mūziku.
**CURRENT:** tal on kalduvus muusika poole.
**PROPOSED_ET (audit ieteikums):** tal on kalduvus muusikale.
**Problēma:** Sõna „kalduvus” nõuab siin loomulikumalt alaleütlevat käänet: „kalduvus muusikale”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4520
**Audit ID:** ET-B1-4520
**Card ID:** `b1-neigung`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** Neigung
**LV MASTER reference:** viņa nosliece uz risku ir zināma.
**CURRENT:** tema kalduvus riski poole on teada.
**PROPOSED_ET (audit ieteikums):** tema kalduvus riskida on teada.
**Problēma:** „Kalduvus riskida” on eesti keeles loomulikum kui sõnasõnaline „kalduvus riski poole”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4521
**Audit ID:** ET-B1-4521
**Card ID:** `b1-nieder`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** nieder
**LV MASTER reference:** viņa apsēdās uz krēsla.
**CURRENT:** ta istus tooli peale.
**PROPOSED_ET (audit ieteikums):** ta istus toolile.
**Problēma:** Liikumise sihtkoha puhul on standardne kääne alaleütlev: „istus toolile”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4522
**Audit ID:** ET-B1-4522
**Card ID:** `b1-nieder`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** nieder
**LV MASTER reference:** lejup no augšas
**CURRENT:** alla ülalt
**PROPOSED_ET (audit ieteikums):** ülalt alla
**Problēma:** Sõnajärg on eesti keeles vale; loomulik väljend on „ülalt alla”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4523
**Audit ID:** ET-B1-4523
**Card ID:** `b1-ohnmacht`
**Field/path:** `etMain`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Ohnmacht
**LV MASTER reference:** bezsamaņa
**CURRENT:** teadvusetus
**PROPOSED_ET (audit ieteikums):** minestus
**Problēma:** Ohnmacht tähendab eeskätt minestust; teadvusetus vastab täpsemalt sõnale Bewusstlosigkeit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4524
**Audit ID:** ET-B1-4524
**Card ID:** `b1-ohnmacht`
**Field/path:** `study.translation`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Ohnmacht
**LV MASTER reference:** bezsamaņa
**CURRENT:** teadvusetus
**PROPOSED_ET (audit ieteikums):** minestus
**Problēma:** Ohnmacht tähendab eeskätt minestust; teadvusetus vastab täpsemalt sõnale Bewusstlosigkeit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4525
**Audit ID:** ET-B1-4525
**Card ID:** `b1-ohnmacht`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Ohnmacht
**LV MASTER reference:** bezsamaņa • pārnesti bezspēcība
**CURRENT:** teadvusetus • ülekantult jõuetus
**PROPOSED_ET (audit ieteikums):** minestus • ülekantult jõuetus
**Problēma:** Põhitähendus peaks olema minestus; ülekantud tähendus jõuetus on sobiv.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4526
**Audit ID:** ET-B1-4526
**Card ID:** `b1-ohnmacht`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Ohnmacht
**LV MASTER reference:** bezsamaņa
**CURRENT:** teadvusetus
**PROPOSED_ET (audit ieteikums):** minestus
**Problēma:** Ohnmacht tähendab siin minestust, mitte üldist teadvusetuse seisundit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4527
**Audit ID:** ET-B1-4527
**Card ID:** `b1-opfern`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** opfern
**LV MASTER reference:** iestāties, aktīvi palīdzēt
**CURRENT:** seisma, aktiivselt aitama
**PROPOSED_ET (audit ieteikums):** millestki olulisest loobuma, aktiivselt panustama
**Problēma:** Seisma ja aktiivselt aitama ei väljenda opfern tähendust; see kirjeldus viitab pigem aktiivsele panustamisele.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4528
**Audit ID:** ET-B1-4528
**Card ID:** `b1-periode`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Periode
**LV MASTER reference:** mēnešreizes • arī noteikums
**CURRENT:** menstruatsioon • ka reegel
**PROPOSED_ET (audit ieteikums):** menstruatsioon • ka ajavahemik
**Problēma:** Periode ei tähenda reeglit; sobiv teine tähendus on ajavahemik või periood.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4529
**Audit ID:** ET-B1-4529
**Card ID:** `b1-posten`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Posten
**LV MASTER reference:** pasts
**CURRENT:** post (postiasutus)
**PROPOSED_ET (audit ieteikums):** post (valvekoht)
**Problēma:** Posten võib tähendada valve- või tööpostitust, kuid mitte postiasutust; see on Post.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4530
**Audit ID:** ET-B1-4530
**Card ID:** `b1-rang`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** Rang
**LV MASTER reference:** rinda
**CURRENT:** rida
**PROPOSED_ET (audit ieteikums):** järk
**Problēma:** Rang tähistab auastet või järku, mitte rida.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4531
**Audit ID:** ET-B1-4531
**Card ID:** `b1-rang`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/b1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** Rang
**LV MASTER reference:** balkons
**CURRENT:** rõdu
**PROPOSED_ET (audit ieteikums):** koht hierarhias
**Problēma:** Rang ei tähenda rõdu; selle tähendus on koht või positsioon hierarhias.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4532
**Audit ID:** ET-B1-4532
**Card ID:** `b1-regeln`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** regeln
**LV MASTER reference:** noregulēt vai pieņemt darbā
**CURRENT:** reguleerima või tööle võtma
**PROPOSED_ET (audit ieteikums):** reguleerima või lahendama
**Problēma:** Saksa regeln tähendab siin reguleerima või asja lahendama, mitte kedagi tööle võtma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4533
**Audit ID:** ET-B1-4533
**Card ID:** `b1-ruhen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** ruhen
**LV MASTER reference:** ezers mierīgi guļ saulē.
**CURRENT:** järv lamab rahulikult päikese käes.
**PROPOSED_ET (audit ieteikums):** järv puhkab rahulikult päikese käes.
**Problēma:** Eesti keeles ei kasutata järve kohta tavaliselt verbi lamama; siin sobib puhkama kui rahulikult paigal olema.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4534
**Audit ID:** ET-B1-4534
**Card ID:** `b1-rüsten`
**Field/path:** `study.translation`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** rüsten
**LV MASTER reference:** sagatavoties
**CURRENT:** valmistuma
**PROPOSED_ET (audit ieteikums):** varustama, relvastama; valmistuma
**Problēma:** German rüsten also means to equip or arm; valmistuma covers only the preparatory intransitive sense.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-B1-4535
**Audit ID:** ET-B1-4535
**Card ID:** `b1-saat`
**Field/path:** `study.translation`
**Production file:** `data/et/b1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** Saat
**LV MASTER reference:** sēkla
**CURRENT:** külv
**PROPOSED_ET (audit ieteikums):** seeme, külv
**Problēma:** Saat primarily includes seed; külv means sowing and does not adequately represent the seed sense shown by the source and examples.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
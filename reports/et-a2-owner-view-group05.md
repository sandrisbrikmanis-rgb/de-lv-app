# ET–DE A2 — OWNER VIEW (grupa 5, 201–225)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#614](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/614)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [et-a2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-review-GITHUB.md) |
| OWNER VIEW (indekss) | [et-a2-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-view.md) |
| Decisions (šī grupa) | [et-a2-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions-group05.md) |
| Decisions (indekss) | [et-a2-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions.md) |

Avots: [et-a2-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-full-audit.md)

## ET-A2-0302
**Audit ID:** ET-A2-0302
**Card ID:** `a2-aufrufen`
**Field/path:** `study.tip.leftBlocks[1].text`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** aufrufen
**LV MASTER reference:** Ar Namen vai Nummer tas nozīmē izsaukt; ar zu + kam? tas bieži nozīmē aicināt.
**CURRENT:** Koos Namen või Nummer tähendab see välja hüüdma; koos zu + Dativ tähendab see sageli üles kutsuma.
**PROPOSED_ET (audit ieteikums):** Nime või numbri puhul tähendab see „välja kutsuma“; koos zu + daativiga tähendab see sageli „üles kutsuma“.
**Problēma:** Lause sisaldab saksa nimisõnu ja saksakeelset käändetermineid eestikeelses vääras vormis.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich merke den Fehler. = Ma märkan viga.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0319
**Audit ID:** ET-A2-0319
**Card ID:** `a2-bitter`
**Field/path:** `study.tip.leftBlocks[1].text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** bitter
**LV MASTER reference:** Par pieredzi, patiesību vai zaudējumu bitter bieži nozīmē sāpīgs, skarbs vai ass.
**CURRENT:** Kogemuse, tõe või kaotuse kohta tähendab bitter sageli valus, karm või terav.
**PROPOSED_ET (audit ieteikums):** Kogemuse, tõe või kaotuse kohta tähendab bitter sageli valusat, karmi või teravat.
**Problēma:** Verb tähendama nõuab siin partitiivobjekti; omadussõnad peavad olema vastavas käändes.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Patientin ruht sich aus. = valodas Patsient puhkab.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0325
**Audit ID:** ET-A2-0325
**Card ID:** `a2-dabei`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** dabei
**LV MASTER reference:** viņš palīdzēja un turklāt daudz iemācījās.
**CURRENT:** ta aitas ja õppis pealegi palju.
**PROPOSED_ET (audit ieteikums):** ta aitas ja õppis pealegi palju.
**Problēma:** Sõna „aitas“ on võõrkeelne või vigane remnant; eesti vaste on „aitas“.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Sie spielt eine Rolle. = Ta mängib rolli.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0326
**Audit ID:** ET-A2-0326
**Card ID:** `a2-darauf`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** darauf
**LV MASTER reference:** neilgi pēc tam viņš atgriezās.
**CURRENT:** veidi pärast seda tuli ta tagasi.
**PROPOSED_ET (audit ieteikums):** varsti pärast seda tuli ta tagasi.
**Problēma:** Ajalises väljendis on „varsti pärast seda“ loomulikum ja vastab paremini allika tähendusele.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Er hat die Hauptrolle. = Tal on peaosa. aizstāts ar
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0327
**Audit ID:** ET-A2-0327
**Card ID:** `a2-darüber`
**Field/path:** `etMain`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** darüber
**LV MASTER reference:** par to
**CURRENT:** selle eest
**PROPOSED_ET (audit ieteikums):** selle kohta • selle kohal
**Problēma:** „Selle eest” tähendab dafür; darüber tähendab tavaliselt „selle kohta” või „selle kohal”.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich kaufe eine Papierrolle. = Ma valodas ostan paberirulli.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0337
**Audit ID:** ET-A2-0337
**Card ID:** `a2-ehrlich`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** ehrlich
**LV MASTER reference:** viņš ir jauks.
**CURRENT:** ta on tore.
**PROPOSED_ET (audit ieteikums):** ta on aus.
**Problēma:** „Tore” tähendab kena või meeldivat, mitte saksa ehrlich tähendust „aus”.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Kaffeesatz bleibt im Glas. = valodas Kohvipaks jääb klaasi.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0341
**Audit ID:** ET-A2-0341
**Card ID:** `a2-einsteigen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** einsteigen
**LV MASTER reference:** lūdzu, iekāpiet priekšā.
**CURRENT:** palun, sisenege eest.
**PROPOSED_ET (audit ieteikums):** palun sisenege eesuksest.
**Problēma:** „Sisenege eest” on eesti keeles ebaloomulik; „eesuksest” väljendab sisenemiskohta selgelt.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Warteschlange LV/atlikušās ist lang. = Järjekord on pikk.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0348
**Audit ID:** ET-A2-0348
**Card ID:** `a2-gang`
**Field/path:** `study.translation`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gang
**LV MASTER reference:** gaitenis • gaita • ēdiena kārta
**CURRENT:** koridor • kõnnak • roog
**PROPOSED_ET (audit ieteikums):** koridor • kõnnak • käik
**Problēma:** For a meal, German Gang means a course; Estonian käik is the precise equivalent, not roog.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich kaufe ein Fahrradschloss. = valodas Ma ostan jalgrattaluku. ET; DE daļa
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0349
**Audit ID:** ET-A2-0349
**Card ID:** `a2-gang`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gang
**LV MASTER reference:** ēdienkartē ir trīs ēdiena kārtas.
**CURRENT:** menüüs on kolm rooga.
**PROPOSED_ET (audit ieteikums):** menüüs on kolm käiku.
**Problēma:** The example describes three meal courses, not simply three dishes.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Schlüssel ist LV/atlikušās weg. = Võti on kadunud.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0350
**Audit ID:** ET-A2-0350
**Card ID:** `a2-gang`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gang
**LV MASTER reference:** pirmā ēdiena kārta bija zupa.
**CURRENT:** esimene roog oli supp.
**PROPOSED_ET (audit ieteikums):** esimene käik oli supp.
**Problēma:** The example refers to the first course of a meal; käik is the precise Estonian term.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das ist meine Schuld. = See on minu süü.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0356
**Audit ID:** ET-A2-0356
**Card ID:** `a2-indem`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** indem
**LV MASTER reference:** lai
**CURRENT:** et
**PROPOSED_ET (audit ieteikums):** sellega, et
**Problēma:** „Et” väljendab siin pigem eesmärki, kuid indem näitab viisi; sobiv vaste on „sellega, et”.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Büro ist oben. LV/atlikušās = Kontor on üleval.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0393
**Audit ID:** ET-A2-0393
**Card ID:** `a2-rasen-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** —
**CURRENT:** 
**Problēma:** —
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0397
**Audit ID:** ET-A2-0397
**Card ID:** `a2-schalten`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** schalten
**LV MASTER reference:** vai vari, lūdzu, pārslēgt uz 2. kanālu?
**CURRENT:** kas sa saad, palun, 2. kanalile lülitada?
**PROPOSED_ET (audit ieteikums):** Kas sa saad palun 2. kanalile ümber lülitada?
**Problēma:** Ümberlülitumise tähendus vajab verbiga lülitama loomulikku ühendit ümber lülitama.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der erste Teil ist LV/atlikušās leicht. = Esimene osa on lihtne.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0401
**Audit ID:** ET-A2-0401
**Card ID:** `a2-schloss`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Schloss
**LV MASTER reference:** neišvānšteinas pils ir ļoti pazīstama.
**CURRENT:** neuschwansteini loss on väga tuntud.
**PROPOSED_ET (audit ieteikums):** Neuschwansteini loss on väga tuntud.
**Problēma:** Lause alguses olev pärisnimi peab algama suure tähega.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich habe einen Termin. = Mul on aeg kokku lepitud.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0402
**Audit ID:** ET-A2-0402
**Card ID:** `a2-sich-befinden`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** sich befinden
**LV MASTER reference:** es šodien jūtos labi.
**CURRENT:** ma tunnen end täna hästi.
**PROPOSED_ET (audit ieteikums):** ma asun täna siin.
**Problēma:** Praegune lause tähendab „sich fühlen”, mitte asukohta väljendavat „sich befinden”.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Treffen war nett. = Kohtumine oli meeldiv.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0407
**Audit ID:** ET-A2-0407
**Card ID:** `a2-stelle`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Stelle
**LV MASTER reference:** brūce
**CURRENT:** haav
**PROPOSED_ET (audit ieteikums):** koht
**Problēma:** Haav tähendab eesti keeles Wunde, mitte Stelle; Stelle vastav tähendus on koht või paik.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Wasser ist flach. = Vesi on madal.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0422
**Audit ID:** ET-A2-0422
**Card ID:** `a2-während`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** während
**LV MASTER reference:** viņa runā pa telefonu, kamēr gaida.
**CURRENT:** ta räägib telefoniga, sel ajal kui ootab.
**PROPOSED_ET (audit ieteikums):** ta räägib telefoniga, samal ajal kui ta ootab.
**Problēma:** Kõrvallauses puudub loomulikult vajalik alus; korduv ta teeb lause grammatiliselt selgeks.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich warte umsonst. = Ma ootan asjata.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0426
**Audit ID:** ET-A2-0426
**Card ID:** `a2-wiegen`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** STUDY
**DE (read-only):** wiegen
**LV MASTER reference:** automašīna stāv ārā.
**CURRENT:** auto seisab õues.
**PROPOSED_ET (audit ieteikums):** auto kaalub kaks tonni.
**Problēma:** Lause on grammatiliselt korrektne, kuid ei näitlikusta verbi wiegen tähendust „kaaluma“.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich schließe den Drucker an. = Ma ühendan printeri. aizstāts ar
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0427
**Audit ID:** ET-A2-0427
**Card ID:** `a2-wiegen`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** STUDY
**DE (read-only):** wiegen
**LV MASTER reference:** automašīna / vagons
**CURRENT:** auto / vagun
**PROPOSED_ET (audit ieteikums):** kaaluma / kaal
**Problēma:** Võrdlus on sihitult seotud auto ja vaguniga ega aita eristada wiegen'i tähendusi ega vorme.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Arzt Wunde. = verbindet die Arst seob haava.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0437
**Audit ID:** ET-A2-0437
**Card ID:** `a2-gross`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** groß
**LV MASTER reference:** viņš ir garš augumā.
**CURRENT:** ta on pikka kasvu.
**PROPOSED_ET (audit ieteikums):** Ta on pikka kasvu.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich denke an dich. = Ma mõtlen valodas sinu peale.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0439
**Audit ID:** ET-A2-0439
**Card ID:** `a2-hoch`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hoch
**LV MASTER reference:** īre ir augsta.
**CURRENT:** üür on kõrge.
**PROPOSED_ET (audit ieteikums):** Üür on kõrge.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich präsentiere den Plan. = Ma esitlen plaani.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0440
**Audit ID:** ET-A2-0440
**Card ID:** `a2-hoch`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hoch
**LV MASTER reference:** siena ir augsta.
**CURRENT:** müür on kõrge.
**PROPOSED_ET (audit ieteikums):** Müür on kõrge.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Wagen ist neu. = Auto on uus.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0441
**Audit ID:** ET-A2-0441
**Card ID:** `a2-hoch`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hoch
**LV MASTER reference:** cenas ir augstas.
**CURRENT:** hinnad on kõrged.
**PROPOSED_ET (audit ieteikums):** Hinnad on kõrged.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Auto steht da. = Auto seisab seal.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0444
**Audit ID:** ET-A2-0444
**Card ID:** `a2-klein`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** klein
**LV MASTER reference:** man ir maza soma.
**CURRENT:** mul on väike kott.
**PROPOSED_ET (audit ieteikums):** Mul on väike kott.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** FOREIGN_REMNANT **LABOT** Wir stimmen ab. = LV/atlikušās Me hääletame.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0458
**Audit ID:** ET-A2-0458
**Card ID:** `a2-auch`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** auch
**LV MASTER reference:** es arī nāku.
**CURRENT:** ma tulen ka.
**PROPOSED_ET (audit ieteikums):** Ma tulen ka.
**Problēma:** Lause alguses peab eesti keeles olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Auto ist teuer. = Auto on kallis.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
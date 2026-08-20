# ET–DE A2 — OWNER VIEW (grupa 5, 201–234)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.8
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#612](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/612)

| Navigācija | Saite |
|------------|-------|
| Sākt šeit | [et-a2-owner-review-START.md](./et-a2-owner-review-START.md) |
| GitHub indekss | [et-a2-owner-review-GITHUB.md](./et-a2-owner-review-GITHUB.md) |
| OWNER VIEW (indekss) | [et-a2-owner-view.md](./et-a2-owner-view.md) |
| Decisions (šī grupa) | [et-a2-owner-decisions-group05.md](./et-a2-owner-decisions-group05.md) |
| Decisions (indekss) | [et-a2-owner-decisions.md](./et-a2-owner-decisions.md) |

Avots: [et-a2-full-audit.md](./et-a2-full-audit.md)

## ET-A2-0392
**Audit ID:** ET-A2-0392
**Card ID:** `a2-verbinden`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** verbinden
**LV MASTER reference:** Ja divas lietas kļūst saistītas vai kopā, bieži lieto verbinden.
**CURRENT:** Kui kaks asja saavad seotuks või kokku, kasutatakse sageli verbinden.
**PROPOSED_ET (audit ieteikums):** Kui kaks asja seotakse või ühendatakse, kasutatakse sageli sõna verbinden.
**Problēma:** „Saavad seotuks või kokku“ on kohmakas; aktiivne sõnastus on loomulikum ja täpsem.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0393
**Audit ID:** ET-A2-0393
**Card ID:** `a2-verlangen`
**Field/path:** `study.translation`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** verlangen
**LV MASTER reference:** prasīt • pieprasīt
**CURRENT:** nõudma • taotlema
**PROPOSED_ET (audit ieteikums):** nõudma • soovima
**Problēma:** Taotlema tähendab eesti keeles millegi taotlemist või avalduse esitamist, mitte saksa verlangen'i teist põhitähendust.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0394
**Audit ID:** ET-A2-0394
**Card ID:** `a2-verlangen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** verlangen
**LV MASTER reference:** Likums to tā pieprasa.
**CURRENT:** Seadus nõuab seda nii.
**PROPOSED_ET (audit ieteikums):** Seadus nõuab seda.
**Problēma:** „Seda nii“ on selles lauses tarbetu ja ebaloomulik lisand.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0395
**Audit ID:** ET-A2-0395
**Card ID:** `a2-vorstellen`
**Field/path:** `study.translation`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** vorstellen
**LV MASTER reference:** iepazīstināt
**CURRENT:** tutvustama
**PROPOSED_ET (audit ieteikums):** tutvustama • ette kujutama • esitlema
**Problēma:** Kaardi näited õpetavad lisaks tutvustamisele ka tähendusi ette kujutama ja esitlema, kuid tõlge neid ei kajasta.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0396
**Audit ID:** ET-A2-0396
**Card ID:** `a2-wagen`
**Field/path:** `study.important.text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** Wagen
**LV MASTER reference:** der Wagen = automašīna vai vagons (die Wagen). wagen = uzdrošināties — tas ir cits vārds.
**CURRENT:** der Wagen = auto või vagun (die Wagen). wagen = julgema — see on teine sõna.
**PROPOSED_ET (audit ieteikums):** der Wagen = auto või vagun; mitmuses die Wagen. wagen = julgema — see on teine sõna.
**Problēma:** Sulgudes olev „die Wagen“ jätab ebaselgeks, et tegu on nimisõna mitmuse, mitte ainsuse vormiga.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0397
**Audit ID:** ET-A2-0397
**Card ID:** `a2-wählen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** wählen
**LV MASTER reference:** es izvēlos ēdienkarti • izvēlni
**CURRENT:** ma valin menüü • valikmenüü
**PROPOSED_ET (audit ieteikums):** ma valin menüü • valiku
**Problēma:** „Valikmenüü“ tähendab eesti keeles tavaliselt rippmenüüd, mitte üldiselt menüü valimist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0398
**Audit ID:** ET-A2-0398
**Card ID:** `a2-während`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** während
**LV MASTER reference:** es mācos, kamēr bērni guļ.
**CURRENT:** ma õpin, kuni lapsed magavad.
**PROPOSED_ET (audit ieteikums):** ma õpin, samal ajal kui lapsed magavad.
**Problēma:** „Kuni“ tähendab tavaliselt „until“; see muudab saksa „während“ tähenduse mitmetimõistetavaks.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0399
**Audit ID:** ET-A2-0399
**Card ID:** `a2-wechseln`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** wechseln
**LV MASTER reference:** mainīt / izmainīt
**CURRENT:** muutma / ümber muutma
**PROPOSED_ET (audit ieteikums):** muutma / ümber tegema
**Problēma:** „Ümber muutma“ ei ole loomulik eestikeelne ühend; sobiv vaste on „ümber tegema“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0400
**Audit ID:** ET-A2-0400
**Card ID:** `a2-wechseln`
**Field/path:** `study.important.text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** wechseln
**LV MASTER reference:** wechseln nav vienīgais vārds “mainīt”.
**CURRENT:** wechseln ei ole ainus sõna “muutma”.
**PROPOSED_ET (audit ieteikums):** wechseln ei ole ainus sõna, mis tähendab „vahetama“.
**Problēma:** Praegune lause väidab ekslikult, et „wechseln“ tähendab „muutma“, kuigi põhitähendus on „vahetama“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0401
**Audit ID:** ET-A2-0401
**Card ID:** `a2-ziehen`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** ziehen
**LV MASTER reference:** ļaut aiziet / ievilkties
**CURRENT:** minema laskma / tõmbuda laskma
**PROPOSED_ET (audit ieteikums):** minema laskma / venima
**Problēma:** „Tõmbuda laskma“ ei ole siin loomulik vaste tähendusele „venima“ või „pikaks venima“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0402
**Audit ID:** ET-A2-0402
**Card ID:** `a2-ziehen`
**Field/path:** `study.tip.leftBlocks[1].text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** ziehen
**LV MASTER reference:** Ja redzi es zieht, tas bieži nozīmē “velk caurvējš”.
**CURRENT:** Kui näed es zieht, tähendab see sageli “tõmbab tuult”.
**PROPOSED_ET (audit ieteikums):** Kui näed „es zieht“, tähendab see sageli, et kuskil tõmbab.
**Problēma:** „Tõmbab tuult“ on ebaloomulik kalkeeritud ühend; eesti keeles öeldakse lihtsalt „tõmbab“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0403
**Audit ID:** ET-A2-0403
**Card ID:** `a2-zunehmen`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** zunehmen
**LV MASTER reference:** kāpt / pieaugt
**CURRENT:** ronima / kasvama
**PROPOSED_ET (audit ieteikums):** tõusma / kasvama
**Problēma:** Arvude ja hindade puhul tähendab „kāpt“ „tõusma“, mitte „ronima“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0404
**Audit ID:** ET-A2-0404
**Card ID:** `a2-zurzeit`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** zurzeit
**LV MASTER reference:** pašlaik / šobrīd / patlaban
**CURRENT:** praegu / sel hetkel / hetkel
**PROPOSED_ET (audit ieteikums):** praegu / praegu / hetkel
**Problēma:** „Sel hetkel“ viitab tavaliselt konkreetsele varasemale või mainitud hetkele, mitte praegusele ajavahemikule.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0405
**Audit ID:** ET-A2-0405
**Card ID:** `a2-hoeren`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hören
**LV MASTER reference:** bērni klausās stāstu.
**CURRENT:** lapsed kuulavad lugu.
**PROPOSED_ET (audit ieteikums):** Lapsed kuulavad lugu.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0406
**Audit ID:** ET-A2-0406
**Card ID:** `a2-hoeren`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hören
**LV MASTER reference:** es tevi dzirdu.
**CURRENT:** ma kuulen sind.
**PROPOSED_ET (audit ieteikums):** Ma kuulen sind.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0407
**Audit ID:** ET-A2-0407
**Card ID:** `a2-sprechen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** sprechen
**LV MASTER reference:** mēs runājam par darbu.
**CURRENT:** me räägime tööst.
**PROPOSED_ET (audit ieteikums):** Me räägime tööst.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0408
**Audit ID:** ET-A2-0408
**Card ID:** `a2-sprechen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** sprechen
**LV MASTER reference:** es runāju vāciski.
**CURRENT:** ma räägin saksa keelt.
**PROPOSED_ET (audit ieteikums):** Ma räägin saksa keelt.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0409
**Audit ID:** ET-A2-0409
**Card ID:** `a2-gross`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** groß
**LV MASTER reference:** māja ir liela.
**CURRENT:** maja on suur.
**PROPOSED_ET (audit ieteikums):** Maja on suur.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0410
**Audit ID:** ET-A2-0410
**Card ID:** `a2-hoch`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hoch
**LV MASTER reference:** kalns ir augsts.
**CURRENT:** mägi on kõrge.
**PROPOSED_ET (audit ieteikums):** Mägi on kõrge.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0411
**Audit ID:** ET-A2-0411
**Card ID:** `a2-klein`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** klein
**LV MASTER reference:** istaba ir maza.
**CURRENT:** tuba on väike.
**PROPOSED_ET (audit ieteikums):** Tuba on väike.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0412
**Audit ID:** ET-A2-0412
**Card ID:** `a2-klein`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** klein
**LV MASTER reference:** bērns vēl ir mazs.
**CURRENT:** laps on veel väike.
**PROPOSED_ET (audit ieteikums):** Laps on veel väike.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0413
**Audit ID:** ET-A2-0413
**Card ID:** `a2-klein`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** klein
**LV MASTER reference:** bērns ir mazs.
**CURRENT:** laps on väike.
**PROPOSED_ET (audit ieteikums):** Laps on väike.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0414
**Audit ID:** ET-A2-0414
**Card ID:** `a2-leise`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** leise
**LV MASTER reference:** lūdzu, esi kluss.
**CURRENT:** palun, ole vaikne.
**PROPOSED_ET (audit ieteikums):** Palun, ole vaikne.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0415
**Audit ID:** ET-A2-0415
**Card ID:** `a2-leise`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** leise
**LV MASTER reference:** mūzika ir klusa.
**CURRENT:** muusika on vaikne.
**PROPOSED_ET (audit ieteikums):** Muusika on vaikne.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0416
**Audit ID:** ET-A2-0416
**Card ID:** `a2-leise`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** leise
**LV MASTER reference:** lūdzu, runā klusi.
**CURRENT:** palun, räägi vaikselt.
**PROPOSED_ET (audit ieteikums):** Palun, räägi vaikselt.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0417
**Audit ID:** ET-A2-0417
**Card ID:** `a2-noch`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** noch
**LV MASTER reference:** es vēl esmu mājās.
**CURRENT:** ma olen veel kodus.
**PROPOSED_ET (audit ieteikums):** Ma olen veel kodus.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0418
**Audit ID:** ET-A2-0418
**Card ID:** `a2-noch`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** noch
**LV MASTER reference:** vai tu vēl esi šeit?
**CURRENT:** kas sa oled veel siin?
**PROPOSED_ET (audit ieteikums):** Kas sa oled veel siin?
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0419
**Audit ID:** ET-A2-0419
**Card ID:** `a2-erst`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** erst
**LV MASTER reference:** es esmu šeit vēl tikai vienu stundu.
**CURRENT:** ma olen siin alles tund aega.
**PROPOSED_ET (audit ieteikums):** Ma olen siin alles tund aega.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0420
**Audit ID:** ET-A2-0420
**Card ID:** `a2-erst`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** erst
**LV MASTER reference:** ir vēl tikai astoņi.
**CURRENT:** on alles kaheksa.
**PROPOSED_ET (audit ieteikums):** On alles kaheksa.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0421
**Audit ID:** ET-A2-0421
**Card ID:** `a2-erst`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** erst
**LV MASTER reference:** viņš atbrauks tikai rīt.
**CURRENT:** ta tuleb alles homme.
**PROPOSED_ET (audit ieteikums):** Ta tuleb alles homme.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0422
**Audit ID:** ET-A2-0422
**Card ID:** `a2-nur`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** nur
**LV MASTER reference:** man ir tikai desmit eiro.
**CURRENT:** mul on ainult kümme eurot.
**PROPOSED_ET (audit ieteikums):** Mul on ainult kümme eurot.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0423
**Audit ID:** ET-A2-0423
**Card ID:** `a2-nur`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** nur
**LV MASTER reference:** tikai tu vari man palīdzēt.
**CURRENT:** ainult sina saad mind aidata.
**PROPOSED_ET (audit ieteikums):** Ainult sina saad mind aidata.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0424
**Audit ID:** ET-A2-0424
**Card ID:** `a2-nur`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** nur
**LV MASTER reference:** es gribu tikai kafiju.
**CURRENT:** ma tahan ainult kohvi.
**PROPOSED_ET (audit ieteikums):** Ma tahan ainult kohvi.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0425
**Audit ID:** ET-A2-0425
**Card ID:** `a2-nur`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** nur
**LV MASTER reference:** man ir tikai astoņi eiro.
**CURRENT:** mul on ainult kaheksa eurot.
**PROPOSED_ET (audit ieteikums):** Mul on ainult kaheksa eurot.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
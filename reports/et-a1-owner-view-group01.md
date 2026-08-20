# ET–DE A1 — OWNER VIEW (grupa 1, 1–14)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.7
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#602](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/602)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [et-a1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-v17-owner-repair-ba9e/reports/et-a1-owner-review-GITHUB.md) |
| OWNER VIEW (visi) | [et-a1-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-v17-owner-repair-ba9e/reports/et-a1-owner-view.md) |
| Decisions (šī grupa) | [et-a1-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-v17-owner-repair-ba9e/reports/et-a1-owner-decisions-group01.md) |
| Decisions (viss) | [et-a1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-v17-owner-repair-ba9e/reports/et-a1-owner-decisions.md) |

Avots: [et-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-v17-owner-repair-ba9e/reports/et-a1-full-audit.md)

## ET-A1-0001
**Audit ID:** ET-A1-0001
**Card ID:** `a1-also`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** also
**LV MASTER reference:** tu esi slims, tāpēc neej uz darbu.
**CURRENT:** sa oled haige, seepärast sa ei lähe tööle.
**PROPOSED_ET (audit ieteikums):** sa oled haige, seepärast ei lähe sa tööle.
**Problēma:** Pärast lausealgulist „seepärast“ peab öeldis eesti keeles paiknema enne alust: „seepärast ei lähe sa“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0002
**Audit ID:** ET-A1-0002
**Card ID:** `a1-also`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** STUDY
**DE (read-only):** also
**LV MASTER reference:** arī
**CURRENT:** ka
**PROPOSED_ET (audit ieteikums):** mitte „ka“; „ka“ on saksa keeles „auch“
**Problēma:** Saksa „also“ tähendab siin „seega“, mitte „ka“. „Ka“ vastab saksa sõnale „auch“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0003
**Audit ID:** ET-A1-0003
**Card ID:** `a1-baden`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** baden
**LV MASTER reference:** viņš ļoti labi peld.
**CURRENT:** ta ujub väga hästi.
**PROPOSED_ET (audit ieteikums):** ta supleb väga hästi.
**Problēma:** „Ujub väga hästi“ tähendab ujumisoskust ja vastab pigem „schwimmen“. „Baden“ tähendab suplemist või vees olemist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0004
**Audit ID:** ET-A1-0004
**Card ID:** `a1-der`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** der
**LV MASTER reference:** autobuss brauc.
**CURRENT:** buss tuleb.
**PROPOSED_ET (audit ieteikums):** Buss sõidab.
**Problēma:** Praegune tõlge tähendab „the bus is coming”, kuid lähtelause tähendab, et buss sõidab.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0005
**Audit ID:** ET-A1-0005
**Card ID:** `a1-fussball-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Fußball
**LV MASTER reference:** futbola bumba atrodas dārzā.
**CURRENT:** Jalgpall on aias.
**PROPOSED_ET (audit ieteikums):** Jalgpall asub aias.
**Problēma:** Tõlge võib tähendada spordiala, kuid lähtefraas viitab konkreetselt jalgpallile kui pallile.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0006
**Audit ID:** ET-A1-0006
**Card ID:** `a1-heißen`
**Field/path:** `etMain`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** heißen
**LV MASTER reference:** saukties
**CURRENT:** nimi olema • tähendama
**PROPOSED_ET (audit ieteikums):** nime kandma • tähendama
**Problēma:** „Nimi olema” ei ole eesti keeles loomulik väljend; heißen selles tähenduses on „nime kandma”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0007
**Audit ID:** ET-A1-0007
**Card ID:** `a1-ihr`
**Field/path:** `study.translation`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ihr
**LV MASTER reference:** jūs • viņai
**CURRENT:** teie • temale
**PROPOSED_ET (audit ieteikums):** teie • temale • tema (omastav)
**Problēma:** ihr tähendab lisaks „teie” ja „temale” ka naissoost isiku omastavat „tema”; see tähendus on näites olemas, tõlkest puudub.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0013
**Audit ID:** ET-A1-0013
**Card ID:** `a1-lang`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** lang
**LV MASTER reference:** visu dienu (garumā).
**CURRENT:** kogu päev (otsa).
**PROPOSED_ET (audit ieteikums):** kogu päeva (otsa).
**Problēma:** Väljendis „kogu päeva otsa” peab kestuse tähenduses olema osastav kääne: „päeva”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0024
**Audit ID:** ET-A1-0024
**Card ID:** `a1-sitzen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sitzen
**LV MASTER reference:** viņš stāv pie durvīm.
**CURRENT:** ta istub ukse juures.
**PROPOSED_ET (audit ieteikums):** ta seisab ukse juures.
**Problēma:** Praegune verb tähendab „istub”, kuid lähtefraas ja vastand „stehen” tähendavad „seisab”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0025
**Audit ID:** ET-A1-0025
**Card ID:** `a1-sitzen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** sitzen
**LV MASTER reference:** kaķis guļ uz dīvāna.
**CURRENT:** kass istub diivanil.
**PROPOSED_ET (audit ieteikums):** kass lamab diivanil.
**Problēma:** Praegune tekst tähendab, et kass istub; lähtefraas ütleb, et kass lamab.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0026
**Audit ID:** ET-A1-0026
**Card ID:** `a1-stehen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** TRANSLATION
**DE (read-only):** stehen
**LV MASTER reference:** viņš sēž pie galda.
**CURRENT:** ta seisab laua ääres.
**PROPOSED_ET (audit ieteikums):** ta istub laua ääres.
**Problēma:** Praegune tekst tähendab „ta seisab”, kuid lähtefraas tähendab „ta istub”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0027
**Audit ID:** ET-A1-0027
**Card ID:** `a1-stehen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** stehen
**LV MASTER reference:** grāmata atrodas uz galda.
**CURRENT:** raamat on laual.
**PROPOSED_ET (audit ieteikums):** raamat seisab laual.
**Problēma:** Õpitava verbi tähendus „seisma” kaob üldisesse asukohaväljendisse „on laual”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0028
**Audit ID:** ET-A1-0028
**Card ID:** `a1-um`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** um
**LV MASTER reference:** es mācos, lai runātu vāciski.
**CURRENT:** ma õpin, et saksa keelt rääkida.
**PROPOSED_ET (audit ieteikums):** ma õpin saksa keelt rääkima.
**Problēma:** „Õpin, et ... rääkida” ei ole loomulik konstruktsioon; eesti keeles kasutatakse siin da-infinitiivi koos „õppima”ga.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0029
**Audit ID:** ET-A1-0029
**Card ID:** `a1-vor`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** vor
**LV MASTER reference:** ir bez piecām astoņi.
**CURRENT:** on viie minuti pärast kaheksa.
**PROPOSED_ET (audit ieteikums):** Kell on viis minutit kaheksast puudu.
**Problēma:** „Pärast“ tähendab pärast kaheksat; „vor fünf vor acht“ tähendab, et kaheksani on viis minutit.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
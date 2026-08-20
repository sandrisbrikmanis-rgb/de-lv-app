# ET–DE A1 — OWNER VIEW (grupa 1, 1–50)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.6
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**Audit PR:** [#597](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/597)

| Navigācija | Saite |
|------------|-------|
| GitHub indekss | [et-a1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v16-ba9e/reports/et-a1-owner-review-GITHUB.md) |
| OWNER VIEW (visi) | [et-a1-owner-view.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v16-ba9e/reports/et-a1-owner-view.md) |
| Decisions (šī grupa) | [et-a1-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v16-ba9e/reports/et-a1-owner-decisions-group01.md) |
| Decisions (viss) | [et-a1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v16-ba9e/reports/et-a1-owner-decisions.md) |

Avots: [et-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v16-ba9e/reports/et-a1-full-audit.md)

## ET-A1-0001
**Audit ID:** ET-A1-0001
**Card ID:** `a1-bitte`
**Field/path:** `study.tip.text`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** bitte
**CURRENT:** (tukšs)
**PROPOSED_ET (audit ieteikums):** (ET tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Kasuta „bitte” palve pehmendamiseks; eesti keeles vastab sellele tavaliselt „palun”.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0002
**Audit ID:** ET-A1-0002
**Card ID:** `a1-bitte-study`
**Field/path:** `study.tip.text`
**Production file:** `data/et/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Bitte
**CURRENT:** (tukšs)
**PROPOSED_ET (audit ieteikums):** (ET tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Nimisõna „die Bitte” tähendab palvet; ära aja seda segi sõnaga „bitte” tähenduses „palun”.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0003
**Audit ID:** ET-A1-0003
**Card ID:** `a1-Arm-44`
**Field/path:** `etText`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Arm
**LV MASTER reference:** roka
**CURRENT:** käsi
**PROPOSED_ET (audit ieteikums):** käsivars
**Problēma:** Käsi tähendab tavaliselt kätt; saksa Arm vaste on täpsemalt käsivars.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0004
**Audit ID:** ET-A1-0004
**Card ID:** `a1-links-380`
**Field/path:** `etText`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** links
**LV MASTER reference:** pa kreisi • kreisais
**CURRENT:** vasakule • vasak
**PROPOSED_ET (audit ieteikums):** vasakul • vasak
**Problēma:** Adverb links tähendab asukohta „vasakul”; „vasakule” tähendab liikumist vasakule.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0005
**Audit ID:** ET-A1-0005
**Card ID:** `a1-Weihnachten-648`
**Field/path:** `etText`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Weihnachten
**LV MASTER reference:** Ziemassvētki
**CURRENT:** Jõulud
**PROPOSED_ET (audit ieteikums):** jõulud
**Problēma:** Estonian pühade nimetused kirjutatakse üldjuhul väikese algustähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0006
**Audit ID:** ET-A1-0006
**Card ID:** `a1-an`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** an
**LV MASTER reference:** uz horizontālas virsmas
**CURRENT:** horisontaalsel pinnal
**PROPOSED_ET (audit ieteikums):** vertikaalse pinna juures
**Problēma:** Horisontaalsel pinnal vastab tavaliselt auf-ile, mitte an-ile.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0007
**Audit ID:** ET-A1-0007
**Card ID:** `a1-ab`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ab
**LV MASTER reference:** no kāda/kaut kā • izcelsme
**CURRENT:** kellestki/millestki • päritolu
**PROPOSED_ET (audit ieteikums):** alates kindlast ajast või kohast
**Problēma:** Päritolu väljendavad tavaliselt aus või von; ab tähistab alguspunkti.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0008
**Audit ID:** ET-A1-0008
**Card ID:** `a1-ab`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** ab
**LV MASTER reference:** no stacijas
**CURRENT:** jaamast
**PROPOSED_ET (audit ieteikums):** alates jaamast
**Problēma:** Ab rõhutab alguspunkti; „jaamast” võib tähendada lihtsalt jaama seest või juurest.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0009
**Audit ID:** ET-A1-0009
**Card ID:** `a1-baden`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** baden
**LV MASTER reference:** peldēt kā kustība vai sports
**CURRENT:** ujuma liikumisena või spordina
**PROPOSED_ET (audit ieteikums):** ujumist liikumise või spordialana
**Problēma:** „Ujuma liikumisena” ei ole loomulik ega grammatiline väljend; siin võrreldakse ujumist ujumisega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0010
**Audit ID:** ET-A1-0010
**Card ID:** `a1-bis`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bis
**LV MASTER reference:** Es gaidu tavu ierašanos.
**CURRENT:** ma ootan sinu saabumiseni.
**PROPOSED_ET (audit ieteikums):** Ma ootan sinu saabumiseni.
**Problēma:** Estonian sentence begins with a lowercase letter.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0011
**Audit ID:** ET-A1-0011
**Card ID:** `a1-bis`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bis
**LV MASTER reference:** līdz šim es neko neesmu sapratis.
**CURRENT:** siiani pole ma midagi aru saanud.
**PROPOSED_ET (audit ieteikums):** Siiani pole ma midagi aru saanud.
**Problēma:** Estonian sentence begins with a lowercase letter.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0012
**Audit ID:** ET-A1-0012
**Card ID:** `a1-bis`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** bis
**LV MASTER reference:** līdz šim
**CURRENT:** seni, kuni
**PROPOSED_ET (audit ieteikums):** siiani
**Problēma:** “Seni, kuni” means “until”, not “up to now”; it does not match “līdz šim”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0013
**Audit ID:** ET-A1-0013
**Card ID:** `a1-es`
**Field/path:** `study.translation`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** es
**LV MASTER reference:** tas
**CURRENT:** see • ta • umbisikuline vorm
**PROPOSED_ET (audit ieteikums):** see • umbisikuline vorm
**Problēma:** German es generally means “see” or marks impersonal constructions; “ta” is not a general equivalent and may mislead learners.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0015
**Audit ID:** ET-A1-0015
**Card ID:** `a1-geben`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** geben
**LV MASTER reference:** iedod man, lūdzu, grāmatu.
**CURRENT:** anna mulle palun raamat.
**PROPOSED_ET (audit ieteikums):** Anna mulle palun raamat.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0016
**Audit ID:** ET-A1-0016
**Card ID:** `a1-geben`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** geben
**LV MASTER reference:** es tev dodu savu numuru.
**CURRENT:** ma annan sulle oma numbri.
**PROPOSED_ET (audit ieteikums):** Ma annan sulle oma numbri.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0017
**Audit ID:** ET-A1-0017
**Card ID:** `a1-geben`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** geben
**LV MASTER reference:** es paņemu grāmatu.
**CURRENT:** ma võtan raamatu.
**PROPOSED_ET (audit ieteikums):** Ma võtan raamatu.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0018
**Audit ID:** ET-A1-0018
**Card ID:** `a1-geben`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** geben
**LV MASTER reference:** es saņemu dāvanu.
**CURRENT:** ma saan kingi.
**PROPOSED_ET (audit ieteikums):** Ma saan kingi.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0019
**Audit ID:** ET-A1-0019
**Card ID:** `a1-gleich`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gleich
**LV MASTER reference:** es tūlīt nāku.
**CURRENT:** ma tulen kohe.
**PROPOSED_ET (audit ieteikums):** Ma tulen kohe.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0020
**Audit ID:** ET-A1-0020
**Card ID:** `a1-gleich`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gleich
**LV MASTER reference:** mums ir vienāda krāsa.
**CURRENT:** meil on ühesugune värv.
**PROPOSED_ET (audit ieteikums):** Meil on ühesugune värv.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0021
**Audit ID:** ET-A1-0021
**Card ID:** `a1-gleich`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gleich
**LV MASTER reference:** ēdiens tūlīt būs gatavs.
**CURRENT:** toit saab kohe valmis.
**PROPOSED_ET (audit ieteikums):** Toit saab kohe valmis.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0022
**Audit ID:** ET-A1-0022
**Card ID:** `a1-gleich`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gleich
**LV MASTER reference:** abi ceļi ir vienādi gari.
**CURRENT:** mõlemad teed on ühepikkused.
**PROPOSED_ET (audit ieteikums):** Mõlemad teed on ühepikkused.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0023
**Audit ID:** ET-A1-0023
**Card ID:** `a1-gleich`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** gleich
**LV MASTER reference:** tiekamies pēc brīža!
**CURRENT:** näeme kohe!
**PROPOSED_ET (audit ieteikums):** Näeme varsti!
**Problēma:** In this farewell, German gleich means soon, better expressed as varsti in Estonian.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0024
**Audit ID:** ET-A1-0024
**Card ID:** `a1-gleich`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gleich
**LV MASTER reference:** viņi ir vienāda auguma.
**CURRENT:** nad on ühepikkused.
**PROPOSED_ET (audit ieteikums):** Nad on ühepikkused.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0025
**Audit ID:** ET-A1-0025
**Card ID:** `a1-gross-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** groß
**LV MASTER reference:** viņš ir garš augumā.
**CURRENT:** ta on pikka kasvu.
**PROPOSED_ET (audit ieteikums):** Ta on pikka kasvu.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0026
**Audit ID:** ET-A1-0026
**Card ID:** `a1-gross-study`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** groß
**LV MASTER reference:** istaba ir liela.
**CURRENT:** tuba on suur.
**PROPOSED_ET (audit ieteikums):** Tuba on suur.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0027
**Audit ID:** ET-A1-0027
**Card ID:** `a1-gut-study`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gut
**LV MASTER reference:** ēdiens ir labs.
**CURRENT:** toit on hea.
**PROPOSED_ET (audit ieteikums):** Toit on hea.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0028
**Audit ID:** ET-A1-0028
**Card ID:** `a1-gut-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gut
**LV MASTER reference:** kā tev iet? – labi, paldies!
**CURRENT:** kuidas sul läheb? – hästi, aitäh!
**PROPOSED_ET (audit ieteikums):** Kuidas sul läheb? – Hästi, aitäh!
**Problēma:** Both dialogue utterances should begin with capitals.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0029
**Audit ID:** ET-A1-0029
**Card ID:** `a1-gut-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gut
**LV MASTER reference:** viņš labi runā vāciski.
**CURRENT:** ta räägib hästi saksa keelt.
**PROPOSED_ET (audit ieteikums):** Ta räägib hästi saksa keelt.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0030
**Audit ID:** ET-A1-0030
**Card ID:** `a1-gut-study`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gut
**LV MASTER reference:** labrīt!
**CURRENT:** tere hommikust!
**PROPOSED_ET (audit ieteikums):** Tere hommikust!
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0031
**Audit ID:** ET-A1-0031
**Card ID:** `a1-gut-study`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gut
**LV MASTER reference:** tā ir laba ideja.
**CURRENT:** see on hea idee.
**PROPOSED_ET (audit ieteikums):** See on hea idee.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0032
**Audit ID:** ET-A1-0032
**Card ID:** `a1-gut-study`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** gut
**LV MASTER reference:** viss ir kārtībā.
**CURRENT:** kõik on korras.
**PROPOSED_ET (audit ieteikums):** Kõik on korras.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0033
**Audit ID:** ET-A1-0033
**Card ID:** `a1-haben`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** haben
**LV MASTER reference:** man ir automašīna.
**CURRENT:** mul on auto.
**PROPOSED_ET (audit ieteikums):** Mul on auto.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0034
**Audit ID:** ET-A1-0034
**Card ID:** `a1-haben`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** haben
**LV MASTER reference:** vai tev ir laiks?
**CURRENT:** kas sul on aega?
**PROPOSED_ET (audit ieteikums):** Kas sul on aega?
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0035
**Audit ID:** ET-A1-0035
**Card ID:** `a1-haben`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** haben
**LV MASTER reference:** mēs esam izsalkuši.
**CURRENT:** meil on kõht tühi.
**PROPOSED_ET (audit ieteikums):** Meil on kõht tühi.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0036
**Audit ID:** ET-A1-0036
**Card ID:** `a1-haben`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** haben
**LV MASTER reference:** es to izdarīju.
**CURRENT:** ma tegin seda.
**PROPOSED_ET (audit ieteikums):** Ma tegin seda.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0037
**Audit ID:** ET-A1-0037
**Card ID:** `a1-halten`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** halten
**LV MASTER reference:** es turu somu.
**CURRENT:** ma hoian kotti.
**PROPOSED_ET (audit ieteikums):** Ma hoian kotti.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0038
**Audit ID:** ET-A1-0038
**Card ID:** `a1-halten`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** halten
**LV MASTER reference:** autobuss šeit pietur.
**CURRENT:** buss peatub siin.
**PROPOSED_ET (audit ieteikums):** Buss peatub siin.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0039
**Audit ID:** ET-A1-0039
**Card ID:** `a1-halten`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** halten
**LV MASTER reference:** lūdzu, apstājieties.
**CURRENT:** palun, peatuge.
**PROPOSED_ET (audit ieteikums):** Palun, peatuge.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0040
**Audit ID:** ET-A1-0040
**Card ID:** `a1-halten`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** halten
**LV MASTER reference:** es to uzskatu par pareizu.
**CURRENT:** ma pean seda õigeks.
**PROPOSED_ET (audit ieteikums):** Ma pean seda õigeks.
**Problēma:** Estonian sentence-initial words must be capitalized.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0041
**Audit ID:** ET-A1-0041
**Card ID:** `a1-heißen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** heißen
**LV MASTER reference:** mani sauc Anna.
**CURRENT:** minu nimi on Anna.
**PROPOSED_ET (audit ieteikums):** Minu nimi on Anna.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0042
**Audit ID:** ET-A1-0042
**Card ID:** `a1-heißen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** heißen
**LV MASTER reference:** kā tevi sauc?
**CURRENT:** kuidas sind kutsutakse?
**PROPOSED_ET (audit ieteikums):** Kuidas sind kutsutakse?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0043
**Audit ID:** ET-A1-0043
**Card ID:** `a1-heißen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** heißen
**LV MASTER reference:** kā tas saucas vāciski?
**CURRENT:** kuidas seda saksa keeles nimetatakse?
**PROPOSED_ET (audit ieteikums):** Kuidas seda saksa keeles nimetatakse?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0044
**Audit ID:** ET-A1-0044
**Card ID:** `a1-heißen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** heißen
**LV MASTER reference:** ko tas nozīmē?
**CURRENT:** mida see tähendab?
**PROPOSED_ET (audit ieteikums):** Mida see tähendab?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0045
**Audit ID:** ET-A1-0045
**Card ID:** `a1-hoeren-study`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hören
**LV MASTER reference:** bērni klausās stāstu.
**CURRENT:** lapsed kuulavad lugu.
**PROPOSED_ET (audit ieteikums):** Lapsed kuulavad lugu.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0046
**Audit ID:** ET-A1-0046
**Card ID:** `a1-hoeren-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hören
**LV MASTER reference:** es tevi dzirdu.
**CURRENT:** ma kuulen sind.
**PROPOSED_ET (audit ieteikums):** Ma kuulen sind.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0047
**Audit ID:** ET-A1-0047
**Card ID:** `a1-huebsch`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** hübsch
**LV MASTER reference:** Viņai ir glīta kleita.
**CURRENT:** Tal on seljas kena kleit.
**PROPOSED_ET (audit ieteikums):** Tal on kena kleit.
**Problēma:** Seljas olema lisab tähenduse „kandma“, mida lähtefraas ei väljenda.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0048
**Audit ID:** ET-A1-0048
**Card ID:** `a1-ihr`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** ihr
**LV MASTER reference:** vai jūs nākat šovakar?
**CURRENT:** kas te tulete täna õhtul?
**PROPOSED_ET (audit ieteikums):** Kas te tulete täna õhtul?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0049
**Audit ID:** ET-A1-0049
**Card ID:** `a1-ihr`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** ihr
**LV MASTER reference:** es dodu viņai grāmatu.
**CURRENT:** ma annan talle raamatu.
**PROPOSED_ET (audit ieteikums):** Ma annan talle raamatu.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0050
**Audit ID:** ET-A1-0050
**Card ID:** `a1-ihr`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** ihr
**LV MASTER reference:** kur jūs dzīvojat?
**CURRENT:** kus te elate?
**PROPOSED_ET (audit ieteikums):** Kus te elate?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0051
**Audit ID:** ET-A1-0051
**Card ID:** `a1-ihr`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** ihr
**LV MASTER reference:** viņš raksta viņai vēstuli.
**CURRENT:** ta kirjutab talle kirja.
**PROPOSED_ET (audit ieteikums):** Ta kirjutab talle kirja.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
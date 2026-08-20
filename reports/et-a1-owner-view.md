# ET–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.7
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `a313c363f6329912f09b4d74cc5cd5f5bfdf9fd7`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-v17-post602-ba9e`
**Audit PR:** [#597](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/597)
**SCOPE:** ET–DE A1 (`data/et/a1.js`)
**Findings:** **19**

> PROPOSED_ET ir audita ieteikums — **nav** OWNER apstiprināts.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda [et-a1-owner-decisions.md](et-a1-owner-decisions.md).
> **DE = STRICT READ-ONLY.** Production: `data/et/a1.js` + `www/data/et/a1.js`.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-a1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post602-ba9e/reports/et-a1-owner-review-GITHUB.md) |
| OWNER README | [et-a1-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post602-ba9e/reports/et-a1-owner-review-README.md) |
| OWNER DECISIONS | [et-a1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post602-ba9e/reports/et-a1-owner-decisions.md) |
| Pilns audits | [et-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post602-ba9e/reports/et-a1-full-audit.md) |

## Grupas (pa 50 findingiem)

| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–19 | 19 | [et-a1-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post602-ba9e/reports/et-a1-owner-view-group01.md) | [et-a1-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post602-ba9e/reports/et-a1-owner-decisions-group01.md) |

## Īsais saraksts (visi findingi)

- **ET-A1-0001** `a1-baden` · `study.examples[2].lv` · MEDIUM · Näide kirjeldab ujumisoskust (schwimmen), mitte suplemist või ujumist harrastuse…
- **ET-A1-0002** `a1-besuch` · `study.examples[2].lv` · LOW · „Arst läheb visiidile” vastab loomulikumalt tähendusele „läheb visiidile”; praeg…
- **ET-A1-0003** `a1-besuchen` · `study.examples[2].lv` · MEDIUM · Läti lähte lause on minevikus („apciemoju”), kuid praegune eestikeelne verb on o…
- **ET-A1-0004** `a1-bleiben` · `study.examples[0].lv` · LOW · Täislause peab algama suure tähega.
- **ET-A1-0005** `a1-bleiben` · `study.examples[1].lv` · LOW · Täislause peab algama suure tähega.
- **ET-A1-0006** `a1-es` · `study.translation` · MEDIUM · Saksa es tähendab siin 'see'; 'ta' viitab inimesele ega ole selle asesõna sobiv …
- **ET-A1-0007** `a1-halten` · `study.comparison[3].meaning` · MEDIUM · Halten in this sense means to consider/regard, as in „etwas für richtig halten“,…
- **ET-A1-0008** `a1-hand-study` · `study.translation` · MEDIUM · Hand means „käsi“; „kämmal“ means palm and unnecessarily narrows the German mean…
- **ET-A1-0009** `a1-im` · `study.comparison[2].meaning` · MEDIUM · im on in + dem, seega kasutatakse seda koos kindla artikliga, mitte ilma artikli…
- **ET-A1-0010** `a1-ins` · `study.comparison[2].meaning` · LOW · ins on in + das kokkusulanud vorm; artikkel ei esine eraldi sõnana.
- **ET-A1-0025** `a1-nehmen` · `study.examples[0].lv` · MEDIUM · Näide väljendab sõitmist, mitte saksa verbi nehmen tähendust „võtma“ ehk bussi v…
- **ET-A1-0026** `a1-nehmen` · `study.examples[2].lv` · MEDIUM · „Toon“ tähendab bringen ehk tooma; nehmen tähendab siin võtma, mitte kellelegi m…
- **ET-A1-0027** `a1-sollen` · `study.examples[1].lv` · MEDIUM · Näide kasutab kohustust väljendavat „pead“, kuid kaardi tähendus „peaks“ vajab s…
- **ET-A1-0028** `a1-sollen` · `study.examples[2].lv` · MEDIUM · „Ma pean“ tähendab peab/must; see ei ühti kaardi „sollen“ tähenduseks antud vorm…
- **ET-A1-0029** `a1-sollen` · `study.examples[3].lv` · MEDIUM · Näide väljendab „pean“, mitte kaardi põhitähendust „peaksin“.
- **ET-A1-0030** `a1-stehen` · `study.examples[3].lv` · MEDIUM · Üldises asukoha tähenduses on raamatu kohta loomulikum „on laual“; „seisab“ viit…
- **ET-A1-0031** `a1-über` · `study.comparison[3].meaning` · MEDIUM · Praegune sõnajärg ja ühend „kohta mingist allikast“ on eesti keeles ebakorrektne…
- **ET-A1-0032** `a1-vom` · `study.comparison[0].meaning` · MEDIUM · Fraas on eesti keeles grammatiliselt vigane ja võib segi ajada eesti elatiivi sa…
- **ET-A1-0033** `a1-zu` · `study.comparison[2].meaning` · MEDIUM · „Sees” väljendab asukohta, kuid lähtekoha vastandus nõuab suunda väljendavat „si…

## Pilns findingu pārskats (visi findingi)

## ET-A1-0001
**Audit ID:** ET-A1-0001
**Card ID:** `a1-baden`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** STUDY
**DE (read-only):** baden
**LV MASTER reference:** viņš ļoti labi peld.
**CURRENT:** ta ujub väga hästi.
**PROPOSED_ET (audit ieteikums):** Ta supleb väga hästi.
**Problēma:** Näide kirjeldab ujumisoskust (schwimmen), mitte suplemist või ujumist harrastusena (baden).
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0002
**Audit ID:** ET-A1-0002
**Card ID:** `a1-besuch`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** NATURALNESS
**DE (read-only):** Besuch
**LV MASTER reference:** Ārsts dodas vizītē.
**CURRENT:** Arst teeb visiidi.
**PROPOSED_ET (audit ieteikums):** Arst läheb visiidile.
**Problēma:** „Arst läheb visiidile” vastab loomulikumalt tähendusele „läheb visiidile”; praegune väljend võib tähendada visiidi tegemist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0003
**Audit ID:** ET-A1-0003
**Card ID:** `a1-besuchen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** besuchen
**LV MASTER reference:** Es apciemoju savus vecvecākus.
**CURRENT:** Ma külastan oma vanavanemaid.
**PROPOSED_ET (audit ieteikums):** Ma külastasin oma vanavanemaid.
**Problēma:** Läti lähte lause on minevikus („apciemoju”), kuid praegune eestikeelne verb on olevikus.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0004
**Audit ID:** ET-A1-0004
**Card ID:** `a1-bleiben`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bleiben
**LV MASTER reference:** es palieku mājās.
**CURRENT:** ma jään koju.
**PROPOSED_ET (audit ieteikums):** Ma jään koju.
**Problēma:** Täislause peab algama suure tähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0005
**Audit ID:** ET-A1-0005
**Card ID:** `a1-bleiben`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bleiben
**LV MASTER reference:** paliec šeit!
**CURRENT:** jää siia!
**PROPOSED_ET (audit ieteikums):** Jää siia!
**Problēma:** Täislause peab algama suure tähega.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0006
**Audit ID:** ET-A1-0006
**Card ID:** `a1-es`
**Field/path:** `study.translation`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** es
**LV MASTER reference:** tas
**CURRENT:** see • ta • umbisikuline vorm
**PROPOSED_ET (audit ieteikums):** see • umbisikuline vorm
**Problēma:** Saksa es tähendab siin 'see'; 'ta' viitab inimesele ega ole selle asesõna sobiv vaste.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0007
**Audit ID:** ET-A1-0007
**Card ID:** `a1-halten`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** halten
**LV MASTER reference:** domāt
**CURRENT:** mõtlema
**PROPOSED_ET (audit ieteikums):** pidama
**Problēma:** Halten in this sense means to consider/regard, as in „etwas für richtig halten“, not simply to think.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0008
**Audit ID:** ET-A1-0008
**Card ID:** `a1-hand-study`
**Field/path:** `study.translation`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Hand
**LV MASTER reference:** plauksta
**CURRENT:** käsi (kämmal)
**PROPOSED_ET (audit ieteikums):** käsi
**Problēma:** Hand means „käsi“; „kämmal“ means palm and unnecessarily narrows the German meaning.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0009
**Audit ID:** ET-A1-0009
**Card ID:** `a1-im`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** im
**LV MASTER reference:** iekšā / uz (bez artikula)
**CURRENT:** sees / sisse (ilma artiklita)
**PROPOSED_ET (audit ieteikums):** sees / sisse (kindla artikliga)
**Problēma:** im on in + dem, seega kasutatakse seda koos kindla artikliga, mitte ilma artiklita.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0010
**Audit ID:** ET-A1-0010
**Card ID:** `a1-ins`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** SEMANTICS
**DE (read-only):** ins
**LV MASTER reference:** iekšā / uz iekšu (ar patstāvīgu artikulu)
**CURRENT:** sees / sisse (eraldi artikliga)
**PROPOSED_ET (audit ieteikums):** sees / sisse (kokkusulanud kindla artikliga)
**Problēma:** ins on in + das kokkusulanud vorm; artikkel ei esine eraldi sõnana.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0025
**Audit ID:** ET-A1-0025
**Card ID:** `a1-nehmen`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** nehmen
**LV MASTER reference:** es braucu ar autobusu.
**CURRENT:** ma sõidan bussiga.
**PROPOSED_ET (audit ieteikums):** Ma võtan bussi.
**Problēma:** Näide väljendab sõitmist, mitte saksa verbi nehmen tähendust „võtma“ ehk bussi võtma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0026
**Audit ID:** ET-A1-0026
**Card ID:** `a1-nehmen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** nehmen
**LV MASTER reference:** es tev atnesu grāmatu.
**CURRENT:** ma toon sulle raamatu.
**PROPOSED_ET (audit ieteikums):** Ma võtan raamatu.
**Problēma:** „Toon“ tähendab bringen ehk tooma; nehmen tähendab siin võtma, mitte kellelegi midagi tooma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0027
**Audit ID:** ET-A1-0027
**Card ID:** `a1-sollen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sollen
**LV MASTER reference:** tev jāatnāk.
**CURRENT:** sa pead tulema.
**PROPOSED_ET (audit ieteikums):** sa peaksid tulema.
**Problēma:** Näide kasutab kohustust väljendavat „pead“, kuid kaardi tähendus „peaks“ vajab siin vormi „peaksid“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0028
**Audit ID:** ET-A1-0028
**Card ID:** `a1-sollen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sollen
**LV MASTER reference:** man jāpaliek mājās.
**CURRENT:** ma pean koju jääma.
**PROPOSED_ET (audit ieteikums):** ma peaksin koju jääma.
**Problēma:** „Ma pean“ tähendab peab/must; see ei ühti kaardi „sollen“ tähenduseks antud vormiga „peaksin“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0029
**Audit ID:** ET-A1-0029
**Card ID:** `a1-sollen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** sollen
**LV MASTER reference:** man tagad jāiet.
**CURRENT:** ma pean nüüd minema.
**PROPOSED_ET (audit ieteikums):** ma peaksin nüüd minema.
**Problēma:** Näide väljendab „pean“, mitte kaardi põhitähendust „peaksin“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0030
**Audit ID:** ET-A1-0030
**Card ID:** `a1-stehen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** stehen
**LV MASTER reference:** grāmata atrodas uz galda.
**CURRENT:** raamat seisab laual.
**PROPOSED_ET (audit ieteikums):** raamat on laual.
**Problēma:** Üldises asukoha tähenduses on raamatu kohta loomulikum „on laual“; „seisab“ viitab püsti olekule.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0031
**Audit ID:** ET-A1-0031
**Card ID:** `a1-über`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** über
**LV MASTER reference:** no / par no kāda avota
**CURRENT:** -st / kohta mingist allikast
**PROPOSED_ET (audit ieteikums):** allikast / mingi allika kohta
**Problēma:** Praegune sõnajärg ja ühend „kohta mingist allikast“ on eesti keeles ebakorrektne ja raskesti mõistetav.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0032
**Audit ID:** ET-A1-0032
**Card ID:** `a1-vom`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** vom
**LV MASTER reference:** no (konkrēta lieta, kam?)
**CURRENT:** -st (konkreetne asi, Dativ)
**PROPOSED_ET (audit ieteikums):** -st (konkreetse asja puhul, saksa keeles datiiv)
**Problēma:** Fraas on eesti keeles grammatiliselt vigane ja võib segi ajada eesti elatiivi saksa datiiviga.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0033
**Audit ID:** ET-A1-0033
**Card ID:** `a1-zu`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** zu
**LV MASTER reference:** iekšā / uz vietu
**CURRENT:** sees / mingisse kohta
**PROPOSED_ET (audit ieteikums):** sisse / mingisse kohta
**Problēma:** „Sees” väljendab asukohta, kuid lähtekoha vastandus nõuab suunda väljendavat „sisse”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
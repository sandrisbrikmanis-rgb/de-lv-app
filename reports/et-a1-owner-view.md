# ET–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.7
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `53a6abb159b72e89eddad635cfee64b2a3528ad0`
**WORK_BRANCH:** `cursor/et-de-a1-full-audit-v17-post603-ba9e`
**Audit PR:** [#604](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/604)
**SCOPE:** ET–DE A1 (`data/et/a1.js`)
**Findings:** **23** (pēc OWNER history validācijas; PR603 raw: 19, confirmed: 3)

> PROPOSED_ET ir audita ieteikums — **nav** OWNER apstiprināts.
> **3** PR603 findingi izslēgti kā OWNER_DECISION_CONFIRMED — sk. [et-a1-pr603-owner-history-validation.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post603-ba9e/reports/et-a1-post603-owner-history-validation.md).
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda [et-a1-owner-decisions.md](et-a1-owner-decisions.md).
> **DE = STRICT READ-ONLY.** Production: `data/et/a1.js` + `www/data/et/a1.js`.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-a1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post603-ba9e/reports/et-a1-owner-review-GITHUB.md) |
| OWNER README | [et-a1-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post603-ba9e/reports/et-a1-owner-review-README.md) |
| OWNER DECISIONS | [et-a1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post603-ba9e/reports/et-a1-owner-decisions.md) |
| Pilns audits | [et-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post603-ba9e/reports/et-a1-full-audit.md) |
| History validation | [et-a1-post603-owner-history-validation.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post603-ba9e/reports/et-a1-post603-owner-history-validation.md) |

## Grupas (pa 50 findingiem)

| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–23 | 23 | [et-a1-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post603-ba9e/reports/et-a1-owner-view-group01.md) | [et-a1-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a1-full-audit-v17-post603-ba9e/reports/et-a1-owner-decisions-group01.md) |

## Īsais saraksts (visi findingi)

- **ET-A1-0001** `a1-auf dem Bahnhof-59` · `etText` · MEDIUM · „Jaam” on üldine; Bahnhof tähendab konkreetselt raudteejaama.
- **ET-A1-0002** `a1-jawohl-299` · `etText` · MEDIUM · „Jawohl“ on rõhutatud jaatav vastus („jah, kindlasti“); „täpselt nii“ tähendab p…
- **ET-A1-0003** `a1-aufs` · `study.comparison[2].meaning` · MEDIUM · aufs tähendab liikumist vertikaalsele pinnale, mitte vertikaalse pinna juures ol…
- **ET-A1-0004** `a1-aufs` · `study.comparison[3].meaning` · MEDIUM · aufs tähendab pinnale või peale, mitte ruumi sisse liikumist.
- **ET-A1-0005** `a1-baden` · `study.examples[1].lv` · MEDIUM · Järves ujuma tähendab ujuma minemist järves; järve ujuma tähendab järve sisse uj…
- **ET-A1-0006** `a1-bleiben` · `study.examples[2].lv` · LOW · Estonian example sentences must begin with a capital letter.
- **ET-A1-0007** `a1-da` · `study.examples[0].lv` · LOW · Estonian example sentences must begin with a capital letter.
- **ET-A1-0008** `a1-da` · `study.examples[1].lv` · LOW · Estonian example sentences must begin with a capital letter.
- **ET-A1-0009** `a1-da` · `study.examples[3].lv` · LOW · Estonian example sentences must begin with a capital letter.
- **ET-A1-0010** `a1-dass` · `study.examples[0].lv` · LOW · Estonian example sentences must begin with a capital letter.
- **ET-A1-0011** `a1-dass` · `study.examples[1].lv` · LOW · Estonian example sentences must begin with a capital letter.
- **ET-A1-0012** `a1-dass` · `study.examples[2].lv` · LOW · Estonian example sentences must begin with a capital letter.
- **ET-A1-0013** `a1-ein` · `study.tip.text` · MEDIUM · „Ebamäärane” pole siin õige grammatikatermin ning praegune sõnastus on ebaloomul…
- **ET-A1-0014** `a1-im` · `study.comparison[0].meaning` · LOW · Estonian case name is daativ; Dativ is the German spelling.
- **ET-A1-0015** `a1-im` · `study.comparison[1].meaning` · LOW · Use the Estonian case name akusatiiv rather than the German abbreviation Akk.
- **ET-A1-0016** `a1-im` · `study.comparison[3].meaning` · LOW · Estonian uses the case name daativ; Dativ is the German spelling.
- **ET-A1-0017** `a1-ins` · `study.comparison[0].meaning` · LOW · Use the Estonian case name akusatiiv rather than the German abbreviation Akk.
- **ET-A1-0018** `a1-ins` · `study.comparison[1].meaning` · LOW · Estonian uses the case name daativ; Dativ is the German spelling.
- **ET-A1-0019** `a1-ins` · `study.comparison[3].meaning` · LOW · Use the Estonian case name akusatiiv rather than the German abbreviation Akk.
- **ET-A1-0020** `a1-ins` · `study.comparison[4].meaning` · MEDIUM · Ins expresses movement into something and takes the Akkusativ, not Dativ; juurde…
- **ET-A1-0021** `a1-nehmen` · `study.examples[2].lv` · MEDIUM · „Ma toon sulle raamatu“ tähendab „bringen“, mitte „nehmen“ ehk võtma.
- **ET-A1-0022** `a1-nehmen` · `study.examples[3].lv` · MEDIUM · „Ma tulen sulle järele“ tähendab pealevõtmist; „nehmen“ selles tähenduses on „ka…
- **ET-A1-0023** `a1-über` · `study.comparison[3].meaning` · LOW · Fraas „kohta mingist allikast” on käändevigane; õige on „mingi allika kohta”.

## Pilns findingu pārskats (visi findingi)

## ET-A1-0001
**Audit ID:** ET-A1-0001
**Card ID:** `a1-auf dem Bahnhof-59`
**Field/path:** `etText`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** auf dem Bahnhof
**LV MASTER reference:** stacijā
**CURRENT:** jaamas
**PROPOSED_ET (audit ieteikums):** raudteejaamas
**PR603 audit ID:** ET-A1-0001
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** „Jaam” on üldine; Bahnhof tähendab konkreetselt raudteejaama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0002
**Audit ID:** ET-A1-0002
**Card ID:** `a1-jawohl-299`
**Field/path:** `etText`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** jawohl
**LV MASTER reference:** tieši tā
**CURRENT:** täpselt nii
**PROPOSED_ET (audit ieteikums):** jah, kindlasti
**PR603 audit ID:** ET-A1-0002
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** „Jawohl“ on rõhutatud jaatav vastus („jah, kindlasti“); „täpselt nii“ tähendab pigem „just nii“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0003
**Audit ID:** ET-A1-0003
**Card ID:** `a1-aufs`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** aufs
**LV MASTER reference:** pie vertikālas virsmas
**CURRENT:** vertikaalse pinna juures
**PROPOSED_ET (audit ieteikums):** vertikaalsele pinnale
**PR603 audit ID:** ET-A1-0003
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** aufs tähendab liikumist vertikaalsele pinnale, mitte vertikaalse pinna juures olemist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0004
**Audit ID:** ET-A1-0004
**Card ID:** `a1-aufs`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** aufs
**LV MASTER reference:** uz iekšu (iekš telpas)
**CURRENT:** sisse (ruumi sisse)
**PROPOSED_ET (audit ieteikums):** pinnale (mitte ruumi sisse)
**PR603 audit ID:** ET-A1-0004
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** aufs tähendab pinnale või peale, mitte ruumi sisse liikumist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0005
**Audit ID:** ET-A1-0005
**Card ID:** `a1-baden`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** baden
**LV MASTER reference:** mēs ejam peldēties ezerā.
**CURRENT:** me läheme järve ujuma.
**PROPOSED_ET (audit ieteikums):** me läheme järves ujuma.
**PR603 audit ID:** ET-A1-0005
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Järves ujuma tähendab ujuma minemist järves; järve ujuma tähendab järve sisse ujumist.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0006
**Audit ID:** ET-A1-0006
**Card ID:** `a1-bleiben`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** bleiben
**LV MASTER reference:** mēs paliekam vēl vienu stundu.
**CURRENT:** me jääme veel üheks tunniks.
**PROPOSED_ET (audit ieteikums):** Me jääme veel üheks tunniks.
**PR603 audit ID:** ET-A1-0006
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Estonian example sentences must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0007
**Audit ID:** ET-A1-0007
**Card ID:** `a1-da`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** da
**LV MASTER reference:** tur ir mana mašīna.
**CURRENT:** seal on minu auto.
**PROPOSED_ET (audit ieteikums):** Seal on minu auto.
**PR603 audit ID:** ET-A1-0008
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Estonian example sentences must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0008
**Audit ID:** ET-A1-0008
**Card ID:** `a1-da`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** da
**LV MASTER reference:** es biju tur.
**CURRENT:** ma olin seal.
**PROPOSED_ET (audit ieteikums):** Ma olin seal.
**PR603 audit ID:** ET-A1-0009
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Estonian example sentences must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0009
**Audit ID:** ET-A1-0009
**Card ID:** `a1-da`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** da
**LV MASTER reference:** nāc šeit!
**CURRENT:** tule siia!
**PROPOSED_ET (audit ieteikums):** Tule siia!
**PR603 audit ID:** ET-A1-0011
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Estonian example sentences must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0010
**Audit ID:** ET-A1-0010
**Card ID:** `a1-dass`
**Field/path:** `study.examples[0].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** dass
**LV MASTER reference:** es zinu, ka tu esi noguris.
**CURRENT:** ma tean, et sa oled väsinud.
**PROPOSED_ET (audit ieteikums):** Ma tean, et sa oled väsinud.
**PR603 audit ID:** ET-A1-0012
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Estonian example sentences must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0011
**Audit ID:** ET-A1-0011
**Card ID:** `a1-dass`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** dass
**LV MASTER reference:** viņš saka, ka viņš nāks.
**CURRENT:** ta ütleb, et ta tuleb.
**PROPOSED_ET (audit ieteikums):** Ta ütleb, et ta tuleb.
**PR603 audit ID:** ET-A1-0013
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Estonian example sentences must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0012
**Audit ID:** ET-A1-0012
**Card ID:** `a1-dass`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** dass
**LV MASTER reference:** es domāju, ka tas ir pareizi.
**CURRENT:** ma arvan, et see on õige.
**PROPOSED_ET (audit ieteikums):** Ma arvan, et see on õige.
**PR603 audit ID:** ET-A1-0014
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Estonian example sentences must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0013
**Audit ID:** ET-A1-0013
**Card ID:** `a1-ein`
**Field/path:** `study.tip.text`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** STUDY
**DE (read-only):** ein
**LV MASTER reference:** Atceries: ein nav tikai "viens". Bieži tas ir tikai nenoteiktais artikuls.
**CURRENT:** Pea meeles: ebamäärane üks/mingi → ein.
**PROPOSED_ET (audit ieteikums):** Pea meeles: ein ei tähenda ainult „üks” – sageli on see lihtsalt umbmäärane artikkel.
**PR603 audit ID:** ET-A1-0015
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** „Ebamäärane” pole siin õige grammatikatermin ning praegune sõnastus on ebaloomulik.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0014
**Audit ID:** ET-A1-0014
**Card ID:** `a1-im`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** im
**LV MASTER reference:** iekšā, kur? (kam?)
**CURRENT:** sees, kus? (Dativ)
**PROPOSED_ET (audit ieteikums):** sees, kus? (daativ)
**PR603 audit ID:** ET-A1-0019
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Estonian case name is daativ; Dativ is the German spelling.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0015
**Audit ID:** ET-A1-0015
**Card ID:** `a1-im`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** im
**LV MASTER reference:** uz iekšu, kurp? (Akk.)
**CURRENT:** sisse, kuhu? (Akk.)
**PROPOSED_ET (audit ieteikums):** sisse, kuhu? (akusatiiv)
**PR603 audit ID:** ET-A1-0020
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Use the Estonian case name akusatiiv rather than the German abbreviation Akk.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0016
**Audit ID:** ET-A1-0016
**Card ID:** `a1-im`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** im
**LV MASTER reference:** pie, kur? (kam?)
**CURRENT:** juures, kus? (Dativ)
**PROPOSED_ET (audit ieteikums):** juures, kus? (daativ)
**PR603 audit ID:** ET-A1-0021
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Estonian uses the case name daativ; Dativ is the German spelling.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0017
**Audit ID:** ET-A1-0017
**Card ID:** `a1-ins`
**Field/path:** `study.comparison[0].meaning`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** ins
**LV MASTER reference:** uz iekšu, kurp? (Akk.)
**CURRENT:** sisse, kuhu? (Akk.)
**PROPOSED_ET (audit ieteikums):** sisse, kuhu? (akusatiiv)
**PR603 audit ID:** ET-A1-0022
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Use the Estonian case name akusatiiv rather than the German abbreviation Akk.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0018
**Audit ID:** ET-A1-0018
**Card ID:** `a1-ins`
**Field/path:** `study.comparison[1].meaning`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** ins
**LV MASTER reference:** iekšā, kur? (kam?)
**CURRENT:** sees, kus? (Dativ)
**PROPOSED_ET (audit ieteikums):** sees, kus? (daativ)
**PR603 audit ID:** ET-A1-0023
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Estonian uses the case name daativ; Dativ is the German spelling.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0019
**Audit ID:** ET-A1-0019
**Card ID:** `a1-ins`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** ins
**LV MASTER reference:** uz virsmu (Akk.)
**CURRENT:** pinnale (Akk.)
**PROPOSED_ET (audit ieteikums):** pinnale (akusatiiv)
**PR603 audit ID:** ET-A1-0024
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Use the Estonian case name akusatiiv rather than the German abbreviation Akk.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0020
**Audit ID:** ET-A1-0020
**Card ID:** `a1-ins`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** ins
**LV MASTER reference:** uz / pie (kam?)
**CURRENT:** -sse / juurde (Dativ)
**PROPOSED_ET (audit ieteikums):** sisse / sissepoole (akusatiiv)
**PR603 audit ID:** ET-A1-0025
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Ins expresses movement into something and takes the Akkusativ, not Dativ; juurde is a different direction meaning.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0021
**Audit ID:** ET-A1-0021
**Card ID:** `a1-nehmen`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** nehmen
**LV MASTER reference:** es tev atnesu grāmatu.
**CURRENT:** ma toon sulle raamatu.
**PROPOSED_ET (audit ieteikums):** Ma võtan raamatu.
**PR603 audit ID:** ET-A1-0038
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** „Ma toon sulle raamatu“ tähendab „bringen“, mitte „nehmen“ ehk võtma.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0022
**Audit ID:** ET-A1-0022
**Card ID:** `a1-nehmen`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a1.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** nehmen
**LV MASTER reference:** es tevi paņemšu.
**CURRENT:** ma tulen sulle järele.
**PROPOSED_ET (audit ieteikums):** Ma võtan sind kaasa.
**PR603 audit ID:** ET-A1-0039
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** „Ma tulen sulle järele“ tähendab pealevõtmist; „nehmen“ selles tähenduses on „kaasa võtma“.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A1-0023
**Audit ID:** ET-A1-0023
**Card ID:** `a1-über`
**Field/path:** `study.comparison[3].meaning`
**Production file:** `data/et/a1.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** über
**LV MASTER reference:** no / par no kāda avota
**CURRENT:** -st / kohta mingist allikast
**PROPOSED_ET (audit ieteikums):** -st / mingi allika kohta
**PR603 audit ID:** ET-A1-0041
**History validation:** NEW_VALIDATED_REAL_FINDING
**Problēma:** Fraas „kohta mingist allikast” on käändevigane; õige on „mingi allika kohta”.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
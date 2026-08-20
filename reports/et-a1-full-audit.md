# ET–DE A1 pilns lingvistiskais audits (MASTER v1.7 FULL_DISCOVERY)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.7** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `53a6abb159b72e89eddad635cfee64b2a3528ad0` |
| **DATASET_PRODUCTION_BLOB** | `ae037d7ca01d1619304ab895687d7e10714f3458` |
| **WWW DATASET BLOB** | `ae037d7ca01d1619304ab895687d7e10714f3458` |
| **LAST FINAL CLOSURE MAIN SHA** | `53a6abb159b72e89eddad635cfee64b2a3528ad0` |
| **LAST FINAL CLOSURE DATASET BLOB** | `ae037d7ca01d1619304ab895687d7e10714f3458` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **0** |
| **BASELINE STATUS** | **MATCH_LAST_FINAL_CLOSURE** |
| **OWNER HISTORY AVAILABLE** | YES |
| **OWNER HISTORY FILES LOADED** | owner-accepted-all, reports/et-a1-owner-decisions-accepted.md, reports/et-a1-owner-decisions-accepted-v17.md, reports/et-a1-owner-decisions-accepted-v17-full.md, reports/et-a1-owner-decisions-accepted-v17-apply.md, reports/et-a1-owner-decisions-accepted-pr603-apply.md, reports/et-a1-owner-decisions-accepted-pr603-full.md, reports/et-a1-owner-decisions-accepted-pr603.md |
| **OWNER APPROVED FIELDS TOTAL** | **337** |
| **OWNER APPROVED FIELDS CHECKED** | **218** |
| **OWNER APPROVED FIELDS MATCHING CURRENT** | **16** |
| **OWNER APPROVED FIELDS DRIFTED** | **202** |
| **OWNER HISTORY GATE** | **PASS** |
| **OWNER HISTORY LOADED** | YES (388 entries) |
| **DE READ-ONLY** | PASS |

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.7**
**Audita datums:** 2026-08-20
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **702** |
| Luna coverage | **100%** |
| Study | **134/134** |
| RAW findings | **41** |
| NEW_VALIDATED_REAL_FINDINGS | **23** |
| OWNER_DECISION_CONFIRMED | **18** |
| sectionAccents | **0** |
| LV remnants | **0** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 41 |
| Deterministic | 0 |
| OWNER_DECISION_CONFIRMED | 18 |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| NEW_VALIDATED_REAL_FINDINGS | **23** |

## 3. Validated findings

CRITICAL: **0** · HIGH: **0** · MEDIUM: **9** · LOW: **14**

#### ET-A1-0001
**Card ID:** a1-auf dem Bahnhof-59
**Field:** etText
**CURRENT:** jaamas
**PROPOSED_ET:** raudteejaamas
**Problēma:** „Jaam” on üldine; Bahnhof tähendab konkreetselt raudteejaama.
**LV etalons (konteksts):** stacijā
**DE konteksts:** auf dem Bahnhof
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0002
**Card ID:** a1-jawohl-299
**Field:** etText
**CURRENT:** täpselt nii
**PROPOSED_ET:** jah, kindlasti
**Problēma:** „Jawohl“ on rõhutatud jaatav vastus („jah, kindlasti“); „täpselt nii“ tähendab pigem „just nii“.
**LV etalons (konteksts):** tieši tā
**DE konteksts:** jawohl
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0003
**Card ID:** a1-aufs
**Field:** study.comparison[2].meaning
**CURRENT:** vertikaalse pinna juures
**PROPOSED_ET:** vertikaalsele pinnale
**Problēma:** aufs tähendab liikumist vertikaalsele pinnale, mitte vertikaalse pinna juures olemist.
**LV etalons (konteksts):** pie vertikālas virsmas
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0004
**Card ID:** a1-aufs
**Field:** study.comparison[3].meaning
**CURRENT:** sisse (ruumi sisse)
**PROPOSED_ET:** pinnale (mitte ruumi sisse)
**Problēma:** aufs tähendab pinnale või peale, mitte ruumi sisse liikumist.
**LV etalons (konteksts):** uz iekšu (iekš telpas)
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0005
**Card ID:** a1-baden
**Field:** study.examples[1].lv
**CURRENT:** me läheme järve ujuma.
**PROPOSED_ET:** me läheme järves ujuma.
**Problēma:** Järves ujuma tähendab ujuma minemist järves; järve ujuma tähendab järve sisse ujumist.
**LV etalons (konteksts):** mēs ejam peldēties ezerā.
**DE konteksts:** baden
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0006
**Card ID:** a1-bleiben
**Field:** study.examples[2].lv
**CURRENT:** me jääme veel üheks tunniks.
**PROPOSED_ET:** Me jääme veel üheks tunniks.
**Problēma:** Estonian example sentences must begin with a capital letter.
**LV etalons (konteksts):** mēs paliekam vēl vienu stundu.
**DE konteksts:** bleiben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0008
**Card ID:** a1-da
**Field:** study.examples[0].lv
**CURRENT:** seal on minu auto.
**PROPOSED_ET:** Seal on minu auto.
**Problēma:** Estonian example sentences must begin with a capital letter.
**LV etalons (konteksts):** tur ir mana mašīna.
**DE konteksts:** da
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0009
**Card ID:** a1-da
**Field:** study.examples[1].lv
**CURRENT:** ma olin seal.
**PROPOSED_ET:** Ma olin seal.
**Problēma:** Estonian example sentences must begin with a capital letter.
**LV etalons (konteksts):** es biju tur.
**DE konteksts:** da
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0011
**Card ID:** a1-da
**Field:** study.examples[3].lv
**CURRENT:** tule siia!
**PROPOSED_ET:** Tule siia!
**Problēma:** Estonian example sentences must begin with a capital letter.
**LV etalons (konteksts):** nāc šeit!
**DE konteksts:** da
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0012
**Card ID:** a1-dass
**Field:** study.examples[0].lv
**CURRENT:** ma tean, et sa oled väsinud.
**PROPOSED_ET:** Ma tean, et sa oled väsinud.
**Problēma:** Estonian example sentences must begin with a capital letter.
**LV etalons (konteksts):** es zinu, ka tu esi noguris.
**DE konteksts:** dass
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0013
**Card ID:** a1-dass
**Field:** study.examples[1].lv
**CURRENT:** ta ütleb, et ta tuleb.
**PROPOSED_ET:** Ta ütleb, et ta tuleb.
**Problēma:** Estonian example sentences must begin with a capital letter.
**LV etalons (konteksts):** viņš saka, ka viņš nāks.
**DE konteksts:** dass
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0014
**Card ID:** a1-dass
**Field:** study.examples[2].lv
**CURRENT:** ma arvan, et see on õige.
**PROPOSED_ET:** Ma arvan, et see on õige.
**Problēma:** Estonian example sentences must begin with a capital letter.
**LV etalons (konteksts):** es domāju, ka tas ir pareizi.
**DE konteksts:** dass
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0015
**Card ID:** a1-ein
**Field:** study.tip.text
**CURRENT:** Pea meeles: ebamäärane üks/mingi → ein.
**PROPOSED_ET:** Pea meeles: ein ei tähenda ainult „üks” – sageli on see lihtsalt umbmäärane artikkel.
**Problēma:** „Ebamäärane” pole siin õige grammatikatermin ning praegune sõnastus on ebaloomulik.
**LV etalons (konteksts):** Atceries: ein nav tikai "viens". Bieži tas ir tikai nenoteiktais artikuls.
**DE konteksts:** ein
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0019
**Card ID:** a1-im
**Field:** study.comparison[0].meaning
**CURRENT:** sees, kus? (Dativ)
**PROPOSED_ET:** sees, kus? (daativ)
**Problēma:** Estonian case name is daativ; Dativ is the German spelling.
**LV etalons (konteksts):** iekšā, kur? (kam?)
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0020
**Card ID:** a1-im
**Field:** study.comparison[1].meaning
**CURRENT:** sisse, kuhu? (Akk.)
**PROPOSED_ET:** sisse, kuhu? (akusatiiv)
**Problēma:** Use the Estonian case name akusatiiv rather than the German abbreviation Akk.
**LV etalons (konteksts):** uz iekšu, kurp? (Akk.)
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0021
**Card ID:** a1-im
**Field:** study.comparison[3].meaning
**CURRENT:** juures, kus? (Dativ)
**PROPOSED_ET:** juures, kus? (daativ)
**Problēma:** Estonian uses the case name daativ; Dativ is the German spelling.
**LV etalons (konteksts):** pie, kur? (kam?)
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0022
**Card ID:** a1-ins
**Field:** study.comparison[0].meaning
**CURRENT:** sisse, kuhu? (Akk.)
**PROPOSED_ET:** sisse, kuhu? (akusatiiv)
**Problēma:** Use the Estonian case name akusatiiv rather than the German abbreviation Akk.
**LV etalons (konteksts):** uz iekšu, kurp? (Akk.)
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0023
**Card ID:** a1-ins
**Field:** study.comparison[1].meaning
**CURRENT:** sees, kus? (Dativ)
**PROPOSED_ET:** sees, kus? (daativ)
**Problēma:** Estonian uses the case name daativ; Dativ is the German spelling.
**LV etalons (konteksts):** iekšā, kur? (kam?)
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0024
**Card ID:** a1-ins
**Field:** study.comparison[3].meaning
**CURRENT:** pinnale (Akk.)
**PROPOSED_ET:** pinnale (akusatiiv)
**Problēma:** Use the Estonian case name akusatiiv rather than the German abbreviation Akk.
**LV etalons (konteksts):** uz virsmu (Akk.)
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0025
**Card ID:** a1-ins
**Field:** study.comparison[4].meaning
**CURRENT:** -sse / juurde (Dativ)
**PROPOSED_ET:** sisse / sissepoole (akusatiiv)
**Problēma:** Ins expresses movement into something and takes the Akkusativ, not Dativ; juurde is a different direction meaning.
**LV etalons (konteksts):** uz / pie (kam?)
**DE konteksts:** ins
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0038
**Card ID:** a1-nehmen
**Field:** study.examples[2].lv
**CURRENT:** ma toon sulle raamatu.
**PROPOSED_ET:** Ma võtan raamatu.
**Problēma:** „Ma toon sulle raamatu“ tähendab „bringen“, mitte „nehmen“ ehk võtma.
**LV etalons (konteksts):** es tev atnesu grāmatu.
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0039
**Card ID:** a1-nehmen
**Field:** study.examples[3].lv
**CURRENT:** ma tulen sulle järele.
**PROPOSED_ET:** Ma võtan sind kaasa.
**Problēma:** „Ma tulen sulle järele“ tähendab pealevõtmist; „nehmen“ selles tähenduses on „kaasa võtma“.
**LV etalons (konteksts):** es tevi paņemšu.
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0041
**Card ID:** a1-über
**Field:** study.comparison[3].meaning
**CURRENT:** -st / kohta mingist allikast
**PROPOSED_ET:** -st / mingi allika kohta
**Problēma:** Fraas „kohta mingist allikast” on käändevigane; õige on „mingi allika kohta”.
**LV etalons (konteksts):** no / par no kāda avota
**DE konteksts:** über
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
## 4. Deterministic gates

| Study 134/134 | PASS |
| sectionAccents | PASS |
| remnants | PASS |
| mirror | PASS |
| syntax | PASS |

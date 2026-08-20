# ET–DE A1 pilns lingvistiskais audits (MASTER v1.8 FULL_DISCOVERY)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.8** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `f92199e30ea1d069c59a8aaaa36aed9bb36c8359` |
| **DATASET_PRODUCTION_BLOB** | `ae037d7ca01d1619304ab895687d7e10714f3458` |
| **WWW DATASET BLOB** | `ae037d7ca01d1619304ab895687d7e10714f3458` |
| **LAST FINAL CLOSURE MAIN SHA** | `53a6abb159b72e89eddad635cfee64b2a3528ad0` |
| **LAST FINAL CLOSURE DATASET BLOB** | `ae037d7ca01d1619304ab895687d7e10714f3458` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **0** |
| **BASELINE STATUS** | **MAIN_ADVANCED_EXPECTED** |
| **OWNER HISTORY AVAILABLE** | YES |
| **OWNER HISTORY FILES LOADED** | owner-accepted-all, reports/et-a1-owner-decisions-accepted.md, reports/et-a1-owner-decisions-accepted-v17.md, reports/et-a1-owner-decisions-accepted-v17-full.md, reports/et-a1-owner-decisions-accepted-v17-apply.md, reports/et-a1-owner-decisions-accepted-pr603-apply.md, reports/et-a1-owner-decisions-accepted-pr603-full.md, reports/et-a1-owner-decisions-accepted-pr603.md |
| **OWNER APPROVED FIELDS TOTAL** | **337** |
| **OWNER APPROVED FIELDS CHECKED** | **218** |
| **OWNER APPROVED FIELDS MATCHING CURRENT** | **16** |
| **OWNER APPROVED FIELDS DRIFTED** | **202** |
| **OWNER HISTORY GATE** | **PASS** |
| **OWNER HISTORY LOADED** | YES (388 entries) |
| **DE READ-ONLY** | PASS |

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.8**
**Audita datums:** 2026-08-20
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **702** |
| Luna coverage | **100%** |
| Study | **134/134** |
| RAW findings | **39** |
| NEW_VALIDATED_REAL_FINDINGS | **1** |
| OWNER_BACKLOG_FINAL | **1** |
| PREVIOUSLY_SEEN_RAW | **3** |
| PREVIOUSLY_MISSED | **21** |
| GENUINELY_NEW | **1** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **YES** |
| OBJECT_COVERAGE | **702/702 (100%)** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_DECISION_CONFIRMED | **14** |
| sectionAccents | **0** |
| LV remnants | **0** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 39 |
| Deterministic | 0 |
| OWNER_DECISION_CONFIRMED | 14 |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **3** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **21** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **1** |
| OWNER_BACKLOG_FINAL | **1** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **PASS** |
| OWNER_HISTORY_GATE | **PASS** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 702/702 does NOT mean all possible defects were found.

## 3. Validated findings

CRITICAL: **0** · HIGH: **0** · MEDIUM: **8** · LOW: **17**

#### ET-A1-0001
**Card ID:** a1-Löffel-383
**Field:** etText
**CURRENT:** lusikas
**PROPOSED_ET:** lusikas
**Problēma:** Saksa sõna on ainsuses, kuid „lusikas“ on eesti keeles mitmus; vaste peab olema ainsuses.
**LV etalons (konteksts):** karote
**DE konteksts:** Löffel
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0002
**Card ID:** a1-aufs
**Field:** study.examples[6].lv
**CURRENT:** tule kiiresti paati!
**PROPOSED_ET:** roni kiiresti paati!
**Problēma:** Kāp tähendab siin „roni”, mitte „tule”; praegune tõlge muudab tegevuse tähendust.
**LV etalons (konteksts):** Kāp ātri laivā!
**DE konteksts:** aufs
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0003
**Card ID:** a1-das
**Field:** study.comparison[0].meaning
**CURRENT:** see (artikkel / asesõna)
**PROPOSED_ET:** see (saksa keeles artikkel / asesõna)
**Problēma:** Ilma täpsustuseta võib õppija mõista, et eesti keeles on „see” artikkel; artikkel on siin saksa keele omadus.
**LV etalons (konteksts):** tas (artikuls / vietniekvārds)
**DE konteksts:** das
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0004
**Card ID:** a1-dass
**Field:** study.comparison[2].meaning
**CURRENT:** et
**PROPOSED_ET:** selleks et
**Problēma:** „Et” kattub siin kaardi põhitõlkega ja varjab eesmärgi tähendust; „selleks et” eristab seda selgemalt sõnast „dass”.
**LV etalons (konteksts):** lai
**DE konteksts:** dass
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0005
**Card ID:** a1-ein
**Field:** study.tip.text
**CURRENT:** Pea meeles: ebamäärane üks/mingi → ein.
**PROPOSED_ET:** Pea meeles: ein ei tähenda ainult „üks“, vaid on sageli umbmäärane artikkel.
**Problēma:** „Ebamäärane üks/mingi“ ei ole loomulik ega täpne; grammatiline termin on „umbmäärane artikkel“.
**LV etalons (konteksts):** Atceries: ein nav tikai "viens". Bieži tas ir tikai nenoteiktais artikuls.
**DE konteksts:** ein
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0014
**Card ID:** a1-lang
**Field:** study.translation
**CURRENT:** pikk • kauakestev
**PROPOSED_ET:** pikk • kaua kestev
**Problēma:** „Kauakestev” tähendab pigem long-lasting; aja kestuse tähenduses on loomulikum „kaua kestev”.
**LV etalons (konteksts):** garš • ilgs
**DE konteksts:** lang
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0021
**Card ID:** a1-verstehen
**Field:** study.examples[3].lv
**CURRENT:** ma oskan saksa keelt rääkida.
**PROPOSED_ET:** ma saan saksa keelest aru.
**Problēma:** Praegune lause tähendab „ma oskan saksa keelt rääkida” ja väljendab können, mitte verstehen.
**LV etalons (konteksts):** es protu runāt vāciski.
**DE konteksts:** verstehen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0022
**Card ID:** a1-vom
**Field:** study.translation
**CURRENT:** -st
**PROPOSED_ET:** -st • -lt • juurest
**Problēma:** vom võib tähendada -st, -lt või juurest; ainult -st on liiga kitsas ja eksitav.
**LV etalons (konteksts):** no
**DE konteksts:** vom
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0023
**Card ID:** a1-essen
**Field:** study.examples[2].lv
**CURRENT:** mida te tahate süüa?
**PROPOSED_ET:** Mida te tahate süüa?
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** ko jūs gribat ēst?
**DE konteksts:** essen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0024
**Card ID:** a1-essen-study
**Field:** study.examples[1].lv
**CURRENT:** mida te tahate süüa?
**PROPOSED_ET:** Mida te tahate süüa?
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** ko jūs gribat ēst?
**DE konteksts:** Essen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0025
**Card ID:** a1-essen-study
**Field:** study.examples[2].lv
**CURRENT:** me sööme kell 12.
**PROPOSED_ET:** Me sööme kell 12.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** mēs ēdam pulksten 12.
**DE konteksts:** Essen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0026
**Card ID:** a1-essen-study
**Field:** study.examples[3].lv
**CURRENT:** toit on valmis.
**PROPOSED_ET:** Toit on valmis.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** ēdiens ir gatavs.
**DE konteksts:** Essen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0027
**Card ID:** a1-essen-study
**Field:** study.examples[4].lv
**CURRENT:** toit maitseb väga hästi.
**PROPOSED_ET:** Toit maitseb väga hästi.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** ēdiens ļoti labi garšo.
**DE konteksts:** Essen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0028
**Card ID:** a1-essen-study
**Field:** study.examples[5].lv
**CURRENT:** toit maitseb hästi.
**PROPOSED_ET:** Toit maitseb hästi.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** ēdiens garšo labi.
**DE konteksts:** Essen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0029
**Card ID:** a1-gemuese
**Field:** study.examples[1].lv
**CURRENT:** ma söön meelsasti köögivilju.
**PROPOSED_ET:** Ma söön meelsasti köögivilju.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** es labprāt ēdu dārzeņus.
**DE konteksts:** Gemüse
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0030
**Card ID:** a1-obst
**Field:** study.examples[1].lv
**CURRENT:** me sööme palju puuvilju.
**PROPOSED_ET:** Me sööme palju puuvilju.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** mēs ēdam daudz augļu.
**DE konteksts:** Obst
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0031
**Card ID:** a1-ferien
**Field:** study.examples[1].lv
**CURRENT:** vaheajal on mul palju aega.
**PROPOSED_ET:** Vaheajal on mul palju aega.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** brīvdienās man ir daudz laika.
**DE konteksts:** Ferien
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0032
**Card ID:** a1-ferien
**Field:** study.examples[2].lv
**CURRENT:** mida te vaheajal teete?
**PROPOSED_ET:** Mida te vaheajal teete?
**Problēma:** Küsimuslause peab algama suure algustähega.
**LV etalons (konteksts):** ko jūs darāt brīvdienās?
**DE konteksts:** Ferien
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0033
**Card ID:** a1-ferien
**Field:** study.examples[3].lv
**CURRENT:** kool on vaheajal suletud.
**PROPOSED_ET:** Kool on vaheajal suletud.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** skola brīvdienās ir slēgta.
**DE konteksts:** Ferien
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0034
**Card ID:** a1-ferien
**Field:** study.examples[4].lv
**CURRENT:** vaheajal sõidame me mere äärde.
**PROPOSED_ET:** Vaheajal sõidame me mere äärde.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** brīvdienās mēs braucam pie jūras.
**DE konteksts:** Ferien
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0035
**Card ID:** a1-ferien
**Field:** study.examples[5].lv
**CURRENT:** vaheajal (kool).
**PROPOSED_ET:** Vaheajal (kool).
**Problēma:** Õppekaardi näite algus vajab suurt algustähte.
**LV etalons (konteksts):** brīvdienās (skola).
**DE konteksts:** Ferien
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0036
**Card ID:** a1-urlaub
**Field:** study.examples[1].lv
**CURRENT:** minu isa on puhkusel.
**PROPOSED_ET:** Minu isa on puhkusel.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** mans tēvs ir atvaļinājumā.
**DE konteksts:** Urlaub
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0037
**Card ID:** a1-uhr
**Field:** study.examples[1].lv
**CURRENT:** on kaheksa (kell kaheksa).
**PROPOSED_ET:** On kaheksa (kell kaheksa).
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** ir astoņi (pulksten astoņi).
**DE konteksts:** Uhr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0038
**Card ID:** a1-uhr
**Field:** study.examples[2].lv
**CURRENT:** minu kell on katki.
**PROPOSED_ET:** Minu kell on katki.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** mans pulkstenis ir salūzis.
**DE konteksts:** Uhr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0039
**Card ID:** a1-zeit
**Field:** study.examples[1].lv
**CURRENT:** mul ei ole aega.
**PROPOSED_ET:** Mul ei ole aega.
**Problēma:** Täislause peab algama suure algustähega.
**LV etalons (konteksts):** man nav laika.
**DE konteksts:** Zeit
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
## 4. Deterministic gates

| Study 134/134 | PASS |
| sectionAccents | PASS |
| remnants | PASS |
| mirror | PASS |
| syntax | PASS |

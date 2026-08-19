# ET–DE A1 pilns lingvistiskais audits (post-closure baseline)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.5** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `69ca798f83400e73ce677d38d7a7ef159c43ccf7` |
| **DATASET_PRODUCTION_BLOB** | `2aaaef9ff88be148fffd7cae97423d97a0aa3ded` |
| **WWW DATASET BLOB** | `2aaaef9ff88be148fffd7cae97423d97a0aa3ded` |
| **LAST FINAL CLOSURE MAIN SHA** | `69ca798f83400e73ce677d38d7a7ef159c43ccf7` |
| **LAST FINAL CLOSURE DATASET BLOB** | `2aaaef9ff88be148fffd7cae97423d97a0aa3ded` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **0** |
| **BASELINE STATUS** | **MATCH_LAST_FINAL_CLOSURE** |
| **OWNER HISTORY LOADED** | YES (210 entries) |
| **DE READ-ONLY** | PASS |
| **PR593_FINDINGS_STATUS** | INVALID_FOR_REPAIR_DUE_TO_BASELINE_MISMATCH |

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.5**
**Audita datums:** 2026-08-19
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **702** |
| Luna coverage | **100%** |
| Study | **134/134** |
| RAW findings | **110** |
| NEW_VALIDATED_REAL_FINDINGS | **100** |
| OWNER_DECISION_CONFIRMED | **10** |
| sectionAccents | **0** |
| LV remnants | **0** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 108 |
| Deterministic | 2 |
| OWNER_DECISION_CONFIRMED | 10 |
| OWNER_DECISION_REOPEN_REQUIRED | 2 |
| NEW_VALIDATED_REAL_FINDINGS | **100** |

## 3. Validated findings

CRITICAL: **0** · HIGH: **2** · MEDIUM: **15** · LOW: **83**

#### ET-A1-0001
**Card ID:** a1-bitte
**Field:** study.tip.text
**CURRENT:** (tukšs)
**PROPOSED_ET:** (ET tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**DE konteksts:** bitte
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Kasuta „bitte” palve pehmendamiseks; eesti keeles vastab sellele tavaliselt „palun”.
**Statuss:** PENDING
#### ET-A1-0002
**Card ID:** a1-bitte-study
**Field:** study.tip.text
**CURRENT:** (tukšs)
**PROPOSED_ET:** (ET tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**DE konteksts:** Bitte
**Smagums:** HIGH
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Nimisõna „die Bitte” tähendab palvet; ära aja seda segi sõnaga „bitte” tähenduses „palun”.
**Statuss:** PENDING
#### ET-A1-0003
**Card ID:** a1-Arm-44
**Field:** etText
**CURRENT:** käsi
**PROPOSED_ET:** käsivars
**Problēma:** Käsi tähendab tavaliselt kätt; saksa Arm vaste on täpsemalt käsivars.
**LV etalons (konteksts):** roka
**DE konteksts:** Arm
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0004
**Card ID:** a1-links-380
**Field:** etText
**CURRENT:** vasakule • vasak
**PROPOSED_ET:** vasakul • vasak
**Problēma:** Adverb links tähendab asukohta „vasakul”; „vasakule” tähendab liikumist vasakule.
**LV etalons (konteksts):** pa kreisi • kreisais
**DE konteksts:** links
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0005
**Card ID:** a1-Weihnachten-648
**Field:** etText
**CURRENT:** Jõulud
**PROPOSED_ET:** jõulud
**Problēma:** Estonian pühade nimetused kirjutatakse üldjuhul väikese algustähega.
**LV etalons (konteksts):** Ziemassvētki
**DE konteksts:** Weihnachten
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0006
**Card ID:** a1-an
**Field:** study.comparison[1].meaning
**CURRENT:** horisontaalsel pinnal
**PROPOSED_ET:** vertikaalse pinna juures
**Problēma:** Horisontaalsel pinnal vastab tavaliselt auf-ile, mitte an-ile.
**LV etalons (konteksts):** uz horizontālas virsmas
**DE konteksts:** an
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0007
**Card ID:** a1-ab
**Field:** study.comparison[1].meaning
**CURRENT:** kellestki/millestki • päritolu
**PROPOSED_ET:** alates kindlast ajast või kohast
**Problēma:** Päritolu väljendavad tavaliselt aus või von; ab tähistab alguspunkti.
**LV etalons (konteksts):** no kāda/kaut kā • izcelsme
**DE konteksts:** ab
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0008
**Card ID:** a1-ab
**Field:** study.examples[3].lv
**CURRENT:** jaamast
**PROPOSED_ET:** alates jaamast
**Problēma:** Ab rõhutab alguspunkti; „jaamast” võib tähendada lihtsalt jaama seest või juurest.
**LV etalons (konteksts):** no stacijas
**DE konteksts:** ab
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0009
**Card ID:** a1-baden
**Field:** study.comparison[1].meaning
**CURRENT:** ujuma liikumisena või spordina
**PROPOSED_ET:** ujumist liikumise või spordialana
**Problēma:** „Ujuma liikumisena” ei ole loomulik ega grammatiline väljend; siin võrreldakse ujumist ujumisega.
**LV etalons (konteksts):** peldēt kā kustība vai sports
**DE konteksts:** baden
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0010
**Card ID:** a1-bis
**Field:** study.examples[0].lv
**CURRENT:** ma ootan sinu saabumiseni.
**PROPOSED_ET:** Ma ootan sinu saabumiseni.
**Problēma:** Estonian sentence begins with a lowercase letter.
**LV etalons (konteksts):** Es gaidu tavu ierašanos.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0011
**Card ID:** a1-bis
**Field:** study.examples[3].lv
**CURRENT:** siiani pole ma midagi aru saanud.
**PROPOSED_ET:** Siiani pole ma midagi aru saanud.
**Problēma:** Estonian sentence begins with a lowercase letter.
**LV etalons (konteksts):** līdz šim es neko neesmu sapratis.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0012
**Card ID:** a1-bis
**Field:** study.comparison[2].meaning
**CURRENT:** seni, kuni
**PROPOSED_ET:** siiani
**Problēma:** “Seni, kuni” means “until”, not “up to now”; it does not match “līdz šim”.
**LV etalons (konteksts):** līdz šim
**DE konteksts:** bis
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0013
**Card ID:** a1-es
**Field:** study.translation
**CURRENT:** see • ta • umbisikuline vorm
**PROPOSED_ET:** see • umbisikuline vorm
**Problēma:** German es generally means “see” or marks impersonal constructions; “ta” is not a general equivalent and may mislead learners.
**LV etalons (konteksts):** tas
**DE konteksts:** es
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0015
**Card ID:** a1-geben
**Field:** study.examples[0].lv
**CURRENT:** anna mulle palun raamat.
**PROPOSED_ET:** Anna mulle palun raamat.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** iedod man, lūdzu, grāmatu.
**DE konteksts:** geben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0016
**Card ID:** a1-geben
**Field:** study.examples[1].lv
**CURRENT:** ma annan sulle oma numbri.
**PROPOSED_ET:** Ma annan sulle oma numbri.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es tev dodu savu numuru.
**DE konteksts:** geben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0017
**Card ID:** a1-geben
**Field:** study.examples[2].lv
**CURRENT:** ma võtan raamatu.
**PROPOSED_ET:** Ma võtan raamatu.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es paņemu grāmatu.
**DE konteksts:** geben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0018
**Card ID:** a1-geben
**Field:** study.examples[3].lv
**CURRENT:** ma saan kingi.
**PROPOSED_ET:** Ma saan kingi.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es saņemu dāvanu.
**DE konteksts:** geben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0019
**Card ID:** a1-gleich
**Field:** study.examples[0].lv
**CURRENT:** ma tulen kohe.
**PROPOSED_ET:** Ma tulen kohe.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es tūlīt nāku.
**DE konteksts:** gleich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0020
**Card ID:** a1-gleich
**Field:** study.examples[1].lv
**CURRENT:** meil on ühesugune värv.
**PROPOSED_ET:** Meil on ühesugune värv.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mums ir vienāda krāsa.
**DE konteksts:** gleich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0021
**Card ID:** a1-gleich
**Field:** study.examples[2].lv
**CURRENT:** toit saab kohe valmis.
**PROPOSED_ET:** Toit saab kohe valmis.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** ēdiens tūlīt būs gatavs.
**DE konteksts:** gleich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0022
**Card ID:** a1-gleich
**Field:** study.examples[3].lv
**CURRENT:** mõlemad teed on ühepikkused.
**PROPOSED_ET:** Mõlemad teed on ühepikkused.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** abi ceļi ir vienādi gari.
**DE konteksts:** gleich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0023
**Card ID:** a1-gleich
**Field:** study.examples[4].lv
**CURRENT:** näeme kohe!
**PROPOSED_ET:** Näeme varsti!
**Problēma:** In this farewell, German gleich means soon, better expressed as varsti in Estonian.
**LV etalons (konteksts):** tiekamies pēc brīža!
**DE konteksts:** gleich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0024
**Card ID:** a1-gleich
**Field:** study.examples[5].lv
**CURRENT:** nad on ühepikkused.
**PROPOSED_ET:** Nad on ühepikkused.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņi ir vienāda auguma.
**DE konteksts:** gleich
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0025
**Card ID:** a1-gross-study
**Field:** study.examples[2].lv
**CURRENT:** ta on pikka kasvu.
**PROPOSED_ET:** Ta on pikka kasvu.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņš ir garš augumā.
**DE konteksts:** groß
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0026
**Card ID:** a1-gross-study
**Field:** study.examples[3].lv
**CURRENT:** tuba on suur.
**PROPOSED_ET:** Tuba on suur.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** istaba ir liela.
**DE konteksts:** groß
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0027
**Card ID:** a1-gut-study
**Field:** study.examples[0].lv
**CURRENT:** toit on hea.
**PROPOSED_ET:** Toit on hea.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** ēdiens ir labs.
**DE konteksts:** gut
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0028
**Card ID:** a1-gut-study
**Field:** study.examples[1].lv
**CURRENT:** kuidas sul läheb? – hästi, aitäh!
**PROPOSED_ET:** Kuidas sul läheb? – Hästi, aitäh!
**Problēma:** Both dialogue utterances should begin with capitals.
**LV etalons (konteksts):** kā tev iet? – labi, paldies!
**DE konteksts:** gut
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0029
**Card ID:** a1-gut-study
**Field:** study.examples[2].lv
**CURRENT:** ta räägib hästi saksa keelt.
**PROPOSED_ET:** Ta räägib hästi saksa keelt.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņš labi runā vāciski.
**DE konteksts:** gut
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0030
**Card ID:** a1-gut-study
**Field:** study.examples[3].lv
**CURRENT:** tere hommikust!
**PROPOSED_ET:** Tere hommikust!
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** labrīt!
**DE konteksts:** gut
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0031
**Card ID:** a1-gut-study
**Field:** study.examples[4].lv
**CURRENT:** see on hea idee.
**PROPOSED_ET:** See on hea idee.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** tā ir laba ideja.
**DE konteksts:** gut
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0032
**Card ID:** a1-gut-study
**Field:** study.examples[5].lv
**CURRENT:** kõik on korras.
**PROPOSED_ET:** Kõik on korras.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viss ir kārtībā.
**DE konteksts:** gut
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0033
**Card ID:** a1-haben
**Field:** study.examples[0].lv
**CURRENT:** mul on auto.
**PROPOSED_ET:** Mul on auto.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** man ir automašīna.
**DE konteksts:** haben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0034
**Card ID:** a1-haben
**Field:** study.examples[1].lv
**CURRENT:** kas sul on aega?
**PROPOSED_ET:** Kas sul on aega?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** vai tev ir laiks?
**DE konteksts:** haben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0035
**Card ID:** a1-haben
**Field:** study.examples[2].lv
**CURRENT:** meil on kõht tühi.
**PROPOSED_ET:** Meil on kõht tühi.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mēs esam izsalkuši.
**DE konteksts:** haben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0036
**Card ID:** a1-haben
**Field:** study.examples[3].lv
**CURRENT:** ma tegin seda.
**PROPOSED_ET:** Ma tegin seda.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es to izdarīju.
**DE konteksts:** haben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0037
**Card ID:** a1-halten
**Field:** study.examples[0].lv
**CURRENT:** ma hoian kotti.
**PROPOSED_ET:** Ma hoian kotti.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es turu somu.
**DE konteksts:** halten
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0038
**Card ID:** a1-halten
**Field:** study.examples[1].lv
**CURRENT:** buss peatub siin.
**PROPOSED_ET:** Buss peatub siin.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** autobuss šeit pietur.
**DE konteksts:** halten
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0039
**Card ID:** a1-halten
**Field:** study.examples[2].lv
**CURRENT:** palun, peatuge.
**PROPOSED_ET:** Palun, peatuge.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** lūdzu, apstājieties.
**DE konteksts:** halten
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0040
**Card ID:** a1-halten
**Field:** study.examples[3].lv
**CURRENT:** ma pean seda õigeks.
**PROPOSED_ET:** Ma pean seda õigeks.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es to uzskatu par pareizu.
**DE konteksts:** halten
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0041
**Card ID:** a1-heißen
**Field:** study.examples[0].lv
**CURRENT:** minu nimi on Anna.
**PROPOSED_ET:** Minu nimi on Anna.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** mani sauc Anna.
**DE konteksts:** heißen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0042
**Card ID:** a1-heißen
**Field:** study.examples[1].lv
**CURRENT:** kuidas sind kutsutakse?
**PROPOSED_ET:** Kuidas sind kutsutakse?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** kā tevi sauc?
**DE konteksts:** heißen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0043
**Card ID:** a1-heißen
**Field:** study.examples[2].lv
**CURRENT:** kuidas seda saksa keeles nimetatakse?
**PROPOSED_ET:** Kuidas seda saksa keeles nimetatakse?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** kā tas saucas vāciski?
**DE konteksts:** heißen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0044
**Card ID:** a1-heißen
**Field:** study.examples[3].lv
**CURRENT:** mida see tähendab?
**PROPOSED_ET:** Mida see tähendab?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** ko tas nozīmē?
**DE konteksts:** heißen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0045
**Card ID:** a1-hoeren-study
**Field:** study.examples[1].lv
**CURRENT:** lapsed kuulavad lugu.
**PROPOSED_ET:** Lapsed kuulavad lugu.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** bērni klausās stāstu.
**DE konteksts:** hören
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0046
**Card ID:** a1-hoeren-study
**Field:** study.examples[2].lv
**CURRENT:** ma kuulen sind.
**PROPOSED_ET:** Ma kuulen sind.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** es tevi dzirdu.
**DE konteksts:** hören
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0047
**Card ID:** a1-huebsch
**Field:** study.examples[0].lv
**CURRENT:** Tal on seljas kena kleit.
**PROPOSED_ET:** Tal on kena kleit.
**Problēma:** Seljas olema lisab tähenduse „kandma“, mida lähtefraas ei väljenda.
**LV etalons (konteksts):** Viņai ir glīta kleita.
**DE konteksts:** hübsch
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0048
**Card ID:** a1-ihr
**Field:** study.examples[0].lv
**CURRENT:** kas te tulete täna õhtul?
**PROPOSED_ET:** Kas te tulete täna õhtul?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** vai jūs nākat šovakar?
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0049
**Card ID:** a1-ihr
**Field:** study.examples[1].lv
**CURRENT:** ma annan talle raamatu.
**PROPOSED_ET:** Ma annan talle raamatu.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** es dodu viņai grāmatu.
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0050
**Card ID:** a1-ihr
**Field:** study.examples[2].lv
**CURRENT:** kus te elate?
**PROPOSED_ET:** Kus te elate?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** kur jūs dzīvojat?
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0051
**Card ID:** a1-ihr
**Field:** study.examples[3].lv
**CURRENT:** ta kirjutab talle kirja.
**PROPOSED_ET:** Ta kirjutab talle kirja.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** viņš raksta viņai vēstuli.
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0052
**Card ID:** a1-ihr
**Field:** study.examples[4].lv
**CURRENT:** kas teil on aega?
**PROPOSED_ET:** Kas teil on aega?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** vai jums ir laiks?
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0053
**Card ID:** a1-im
**Field:** study.examples[0].lv
**CURRENT:** ma olen pargis.
**PROPOSED_ET:** Ma olen pargis.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** es esmu parkā.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0054
**Card ID:** a1-im
**Field:** study.examples[1].lv
**CURRENT:** me elame kesklinnas.
**PROPOSED_ET:** Me elame kesklinnas.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** mēs dzīvojam centrā.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0055
**Card ID:** a1-im
**Field:** study.examples[2].lv
**CURRENT:** suvel on soe.
**PROPOSED_ET:** Suvel on soe.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** vasarā ir silti.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0056
**Card ID:** a1-im
**Field:** study.examples[3].lv
**CURRENT:** ta töötab kontoris.
**PROPOSED_ET:** Ta töötab kontoris.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** viņš strādā birojā.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0057
**Card ID:** a1-im
**Field:** study.examples[4].lv
**CURRENT:** laps mängib aias.
**PROPOSED_ET:** Laps mängib aias.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** bērns spēlē dārzā.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0058
**Card ID:** a1-im
**Field:** study.examples[5].lv
**CURRENT:** jaanuaris sõidan ma Viini.
**PROPOSED_ET:** Jaanuaris sõidan ma Viini.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** janvārī es braucu uz Vīni.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0059
**Card ID:** a1-im
**Field:** study.examples[6].lv
**CURRENT:** ta on kinos.
**PROPOSED_ET:** Ta on kinos.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** viņa ir kino.
**DE konteksts:** im
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0060
**Card ID:** a1-im
**Field:** study.examples[7].lv
**CURRENT:** me kohtume restoranis.
**PROPOSED_ET:** Me kohtume restoranis.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**DE konteksts:** mēs tiekamies restorānā.
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0061
**Card ID:** a1-in
**Field:** study.examples[0].lv
**CURRENT:** ma olen Berliinis.
**PROPOSED_ET:** Ma olen Berliinis.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** es esmu Berlīnē.
**DE konteksts:** in
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0062
**Card ID:** a1-in
**Field:** study.examples[1].lv
**CURRENT:** ma lähen kooli.
**PROPOSED_ET:** Ma lähen kooli.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** es eju uz skolu.
**DE konteksts:** in
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0063
**Card ID:** a1-in
**Field:** study.examples[2].lv
**CURRENT:** raamat on kotis.
**PROPOSED_ET:** Raamat on kotis.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** grāmata ir somā.
**DE konteksts:** in
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0064
**Card ID:** a1-in
**Field:** study.examples[3].lv
**CURRENT:** me läheme kinno.
**PROPOSED_ET:** Me läheme kinno.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** mēs ejam uz kino.
**DE konteksts:** in
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0065
**Card ID:** a1-ins
**Field:** study.examples[0].lv
**CURRENT:** ma lähen kinno.
**PROPOSED_ET:** Ma lähen kinno.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** es eju uz kino.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0066
**Card ID:** a1-ins
**Field:** study.examples[1].lv
**CURRENT:** ta läheb magama.
**PROPOSED_ET:** Ta läheb magama.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** viņa iet gulēt.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0067
**Card ID:** a1-ins
**Field:** study.examples[2].lv
**CURRENT:** me sõidame välismaale.
**PROPOSED_ET:** Me sõidame välismaale.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** mēs braucam uz ārzemēm.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0068
**Card ID:** a1-ins
**Field:** study.examples[3].lv
**CURRENT:** tule majja!
**PROPOSED_ET:** Tule majja!
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** nāc mājā!
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0069
**Card ID:** a1-ins
**Field:** study.examples[4].lv
**CURRENT:** ta paneb raha rahakotti.
**PROPOSED_ET:** Ta paneb raha rahakotti.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** viņš ieliek naudu makā.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0070
**Card ID:** a1-ins
**Field:** study.examples[5].lv
**CURRENT:** me läheme muuseumi.
**PROPOSED_ET:** Me läheme muuseumi.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** mēs ejam uz muzeju.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0071
**Card ID:** a1-ins
**Field:** study.examples[6].lv
**CURRENT:** ta paneb lilled vette.
**PROPOSED_ET:** Ta paneb lilled vette.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** viņa liek ziedus ūdenī.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0072
**Card ID:** a1-ins
**Field:** study.examples[7].lv
**CURRENT:** palun, sõida kesklinna.
**PROPOSED_ET:** Palun, sõida kesklinna.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** lūdzu, brauc uz centru.
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0073
**Card ID:** a1-jung
**Field:** study.examples[0].lv
**CURRENT:** ta on veel noor.
**PROPOSED_ET:** Ta on veel noor.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** viņa ir vēl jauna.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0074
**Card ID:** a1-jung
**Field:** study.examples[1].lv
**CURRENT:** koer on noor.
**PROPOSED_ET:** Koer on noor.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** suns ir jauns.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0075
**Card ID:** a1-jung
**Field:** study.examples[2].lv
**CURRENT:** me oleme veel noored.
**PROPOSED_ET:** Me oleme veel noored.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** mēs esam vēl jauni.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0076
**Card ID:** a1-jung
**Field:** study.examples[3].lv
**CURRENT:** ta näeb väga noor välja.
**PROPOSED_ET:** Ta näeb väga noor välja.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** viņš izskatās ļoti jauns.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0077
**Card ID:** a1-jung
**Field:** study.examples[4].lv
**CURRENT:** see on noor paar.
**PROPOSED_ET:** See on noor paar.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** tas ir jauns pāris.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0078
**Card ID:** a1-jung
**Field:** study.examples[5].lv
**CURRENT:** noor naine naeratab.
**PROPOSED_ET:** Noor naine naeratab.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**DE konteksts:** jaunā sieviete smaida.
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0079
**Card ID:** a1-jung
**Field:** study.examples[6].lv
**CURRENT:** minu vend on noorem kui mina.
**PROPOSED_ET:** Minu vend on noorem kui mina.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** mans brālis ir jaunāks nekā es.
**DE konteksts:** jung
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0080
**Card ID:** a1-kein
**Field:** study.examples[0].lv
**CURRENT:** mul ei ole raha.
**PROPOSED_ET:** Mul ei ole raha.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** man nav naudas.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0081
**Card ID:** a1-kein
**Field:** study.examples[1].lv
**CURRENT:** piima ei ole enam üldse.
**PROPOSED_ET:** Piima ei ole enam üldse.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** piena vairs nav nemaz.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0082
**Card ID:** a1-kein
**Field:** study.examples[2].lv
**CURRENT:** ükski inimene ei olnud seal.
**PROPOSED_ET:** Ükski inimene ei olnud seal.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** neviens cilvēks tur nebija.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0083
**Card ID:** a1-kein
**Field:** study.examples[3].lv
**CURRENT:** mul ei ole aega.
**PROPOSED_ET:** Mul ei ole aega.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** man nav laika.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0084
**Card ID:** a1-kein
**Field:** study.examples[4].lv
**CURRENT:** see ei ole mingi probleem.
**PROPOSED_ET:** See ei ole mingi probleem.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** tā nav nekāda problēma.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0085
**Card ID:** a1-kein
**Field:** study.examples[5].lv
**CURRENT:** meil ei ole lapsi.
**PROPOSED_ET:** Meil ei ole lapsi.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** mums nav bērnu.
**DE konteksts:** kein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0086
**Card ID:** a1-kennen-study
**Field:** study.examples[1].lv
**CURRENT:** kas te tunnete seda naist?
**PROPOSED_ET:** Kas te tunnete seda naist?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** vai jūs pazīstat šo sievieti?
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0087
**Card ID:** a1-kennen-study
**Field:** study.examples[2].lv
**CURRENT:** kus te tutvusite?
**PROPOSED_ET:** Kus te tutvusite?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** kur jūs iepazināties?
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0088
**Card ID:** a1-kennen-study
**Field:** study.examples[3].lv
**CURRENT:** ma tunnen teda.
**PROPOSED_ET:** Ma tunnen teda.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** es viņu pazīstu.
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0089
**Card ID:** a1-kennen-study
**Field:** study.examples[4].lv
**CURRENT:** kas sa tunned seda linna?
**PROPOSED_ET:** Kas sa tunned seda linna?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** pazīt; wissen
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0090
**Card ID:** a1-wissen-study
**Field:** study.examples[1].lv
**CURRENT:** kust te seda teate?
**PROPOSED_ET:** Kust te seda teate?
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** no kurienes jūs to zināt?
**DE konteksts:** wissen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0091
**Card ID:** a1-wissen-study
**Field:** study.examples[2].lv
**CURRENT:** ma tean vastust.
**PROPOSED_ET:** Ma tean vastust.
**Problēma:** Lause algus tuleb eesti kirjakeeles kirjutada suure algustähega.
**LV etalons (konteksts):** es zinu atbildi.
**DE konteksts:** wissen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0101
**Card ID:** a1-schwimmen
**Field:** study.comparison[0].meaning
**CURRENT:** ujuma liikumisena või spordina
**PROPOSED_ET:** ujumine liikumise või spordina
**Problēma:** „Ujuma” on sihitislik suundumata vorm; siin on vaja nimisõna „ujumine” ja loomulikumat väljendust.
**LV etalons (konteksts):** peldēt kā kustība vai sports
**DE konteksts:** schwimmen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0102
**Card ID:** a1-sicher
**Field:** study.examples[2].lv
**CURRENT:** ta on arvatavasti kodus.
**PROPOSED_ET:** ta on kindlasti kodus.
**Problēma:** Sicher tähendab siin pigem „kindlasti”, mitte „arvatavasti” või „tõenäoliselt”.
**LV etalons (konteksts):** viņš droši vien ir mājās.
**DE konteksts:** sicher
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0103
**Card ID:** a1-sie-study-2
**Field:** study.examples[5].lv
**CURRENT:** teie teete süüa, palun.
**PROPOSED_ET:** Teie teete süüa, palun.
**Problēma:** Lause alguses peab esimene sõna olema suure algustähega.
**LV etalons (konteksts):** jūs gatavojat, lūdzu.
**DE konteksts:** Sie
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0104
**Card ID:** a1-sitzen
**Field:** study.examples[2].lv
**CURRENT:** ta seisab ukse juures.
**PROPOSED_ET:** ta istub ukse juures.
**Problēma:** Praegune näide kirjeldab seismist, mitte istumist, mis on kaardi põhitähendus.
**LV etalons (konteksts):** viņš stāv pie durvīm.
**DE konteksts:** sitzen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0105
**Card ID:** a1-sitzen
**Field:** study.examples[3].lv
**CURRENT:** kass lamab diivanil.
**PROPOSED_ET:** kass istub diivanil.
**Problēma:** Praegune näide kirjeldab lamamist, mitte istumist, mis on kaardi põhitähendus.
**LV etalons (konteksts):** kaķis guļ uz dīvāna.
**DE konteksts:** sitzen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0106
**Card ID:** a1-stehen
**Field:** study.examples[2].lv
**CURRENT:** ta istub laua ääres.
**PROPOSED_ET:** ta seisab laua ääres.
**Problēma:** Praegune näide kirjeldab istumist, mitte seismist, mis on kaardi põhitähendus.
**LV etalons (konteksts):** viņš sēž pie galda.
**DE konteksts:** stehen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0107
**Card ID:** a1-wer
**Field:** etMain
**CURRENT:** kes • kumb
**PROPOSED_ET:** kes
**Problēma:** wer tähendab „kes”; „kumb” vastab saksa sõnale welcher, mitte wer.
**LV etalons (konteksts):** kas • kurš
**DE konteksts:** wer
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0108
**Card ID:** a1-einmal
**Field:** study.examples[0].lv
**CURRENT:** ma olin kord Berliinis.
**PROPOSED_ET:** Ma olin kord Berliinis.
**Problēma:** Standalone Estonian sentence must begin with a capital letter.
**LV etalons (konteksts):** es reiz biju Berlīnē.
**DE konteksts:** einmal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0109
**Card ID:** a1-noch-mal
**Field:** study.examples[1].lv
**CURRENT:** veel kord, palun.
**PROPOSED_ET:** Veel kord, palun.
**Problēma:** Standalone Estonian sentence must begin with a capital letter.
**LV etalons (konteksts):** vēlreiz, lūdzu.
**DE konteksts:** noch mal
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0110
**Card ID:** a1-noch-mal
**Field:** study.examples[2].lv
**CURRENT:** ütle seda veel kord.
**PROPOSED_ET:** Ütle seda veel kord.
**Problēma:** Standalone Estonian sentence must begin with a capital letter.
**LV etalons (konteksts):** pasaki to vēlreiz.
**DE konteksts:** noch mal
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

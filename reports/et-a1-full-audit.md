# ET–DE A1 pilns lingvistiskais audits (MASTER v1.6 FULL_DISCOVERY)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.6** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `6f74ddf4e721eed5e264132dc5f96d445f45586e` |
| **DATASET_PRODUCTION_BLOB** | `66256824b62879cf6b597e5913821264214340ca` |
| **WWW DATASET BLOB** | `66256824b62879cf6b597e5913821264214340ca` |
| **LAST FINAL CLOSURE MAIN SHA** | `6f74ddf4e721eed5e264132dc5f96d445f45586e` |
| **LAST FINAL CLOSURE DATASET BLOB** | `66256824b62879cf6b597e5913821264214340ca` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **0** |
| **BASELINE STATUS** | **MATCH_LAST_FINAL_CLOSURE** |
| **OWNER HISTORY AVAILABLE** | YES |
| **OWNER HISTORY FILES LOADED** | owner-accepted-all, missing-study-accepted |
| **OWNER APPROVED FIELDS TOTAL** | **204** |
| **OWNER APPROVED FIELDS CHECKED** | **199** |
| **OWNER APPROVED FIELDS MATCHING CURRENT** | **14** |
| **OWNER APPROVED FIELDS DRIFTED** | **185** |
| **OWNER HISTORY GATE** | **PASS** |
| **OWNER HISTORY LOADED** | YES (210 entries) |
| **DE READ-ONLY** | PASS |

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.6**
**Audita datums:** 2026-08-20
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **702** |
| Luna coverage | **100%** |
| Study | **134/134** |
| RAW findings | **25** |
| NEW_VALIDATED_REAL_FINDINGS | **23** |
| OWNER_DECISION_CONFIRMED | **2** |
| sectionAccents | **12** |
| LV remnants | **0** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 14 |
| Deterministic | 11 |
| OWNER_DECISION_CONFIRMED | 2 |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| NEW_VALIDATED_REAL_FINDINGS | **23** |

## 3. Validated findings

CRITICAL: **0** · HIGH: **4** · MEDIUM: **16** · LOW: **3**

#### ET-A1-0001
**Card ID:** a1-huebsch
**Field:** study.sectionAccents (examples)
**CURRENT:** seljas
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A1-0002
**Card ID:** a1-huebsch
**Field:** study.sectionAccents (examples)
**CURRENT:** Tal on seljas kena kleit.
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A1-0003
**Card ID:** a1-sicher
**Field:** study.sectionAccents (examples)
**CURRENT:** arvatavasti
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A1-0004
**Card ID:** a1-sitzen
**Field:** study.sectionAccents (examples)
**CURRENT:** seisab
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A1-0005
**Card ID:** a1-sitzen
**Field:** study.sectionAccents (examples)
**CURRENT:** lamab
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A1-0006
**Card ID:** a1-stehen
**Field:** study.sectionAccents (examples)
**CURRENT:** istub
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A1-0007
**Card ID:** a1-baden
**Field:** study.sectionAccents.comparison.meaning
**CURRENT:** ujuma
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "ujuma" nav atrodams sadaļā comparison
**DE konteksts:** baden
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A1-0008
**Card ID:** a1-baden
**Field:** study.sectionAccents.comparison.meaning
**CURRENT:** liikumisena
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "liikumisena" nav atrodams sadaļā comparison
**DE konteksts:** baden
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A1-0009
**Card ID:** a1-baden
**Field:** study.sectionAccents.comparison.meaning
**CURRENT:** spordina
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "spordina" nav atrodams sadaļā comparison
**DE konteksts:** baden
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A1-0010
**Card ID:** a1-gleich
**Field:** study.sectionAccents.examples.lv
**CURRENT:** kohe
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "kohe" nav atrodams sadaļā examples
**DE konteksts:** gleich
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A1-0011
**Card ID:** a1-hübsch
**Field:** study.sectionAccents.examples.lv
**CURRENT:** seljas
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "seljas" nav atrodams sadaļā examples
**DE konteksts:** hübsch
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A1-0012
**Card ID:** a1-Freundin-202
**Field:** etText
**CURRENT:** sõbratar
**PROPOSED_ET:** sõbranna
**Problēma:** Sõbratar tähendab peamiselt romantilist tüdruksõpra; Freundin võib tähendada ka lihtsalt naissoost sõpra.
**LV etalons (konteksts):** draudzene
**DE konteksts:** Freundin
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0013
**Card ID:** a1-Handschuh-268
**Field:** etText
**CURRENT:** kinnas
**PROPOSED_ET:** kinnas
**Problēma:** Estonian entry is the inessive plural form; the German singular noun requires the nominative singular kinnas.
**LV etalons (konteksts):** cimds
**DE konteksts:** Handschuh
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0014
**Card ID:** a1-bis
**Field:** study.examples[1].lv
**CURRENT:** jää siia, kuni ma tagasi tulen.
**PROPOSED_ET:** Jää siia, kuni ma tagasi tulen.
**Problēma:** Lause algus peab eesti keeles olema suure algustähega.
**LV etalons (konteksts):** paliec šeit, līdz es atgriezīšos.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0015
**Card ID:** a1-bis
**Field:** study.examples[2].lv
**CURRENT:** ma õpin saksa keelt õhtuni.
**PROPOSED_ET:** Ma õpin saksa keelt õhtuni.
**Problēma:** Lause algus peab eesti keeles olema suure algustähega.
**LV etalons (konteksts):** es mācos vācu valodu līdz vakaram.
**DE konteksts:** bis
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0016
**Card ID:** a1-hand-study
**Field:** study.examples[2].lv
**CURRENT:** Mu käsivars valutab.
**PROPOSED_ET:** Mu käsi valutab.
**Problēma:** German Hand means käsi; käsivars specifically means forearm and is too narrow for this example.
**LV etalons (konteksts):** man sāp roka.
**DE konteksts:** Hand
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0017
**Card ID:** a1-heißen
**Field:** study.translation
**CURRENT:** nimi olema • tähendama
**PROPOSED_ET:** nime kandma • tähendama
**Problēma:** „Nimi olema” is not an idiomatic Estonian infinitive expression for being called or having a name.
**LV etalons (konteksts):** saukties
**DE konteksts:** heißen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0019
**Card ID:** a1-ihr
**Field:** study.examples[5].lv
**CURRENT:** see on tema auto.
**PROPOSED_ET:** See on tema auto.
**Problēma:** The sentence begins with a lowercase letter.
**LV etalons (konteksts):** tā ir viņas automašīna.
**DE konteksts:** ihr
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0020
**Card ID:** a1-reis
**Field:** study.examples[2].lv
**CURRENT:** kas sa keedad riisi?
**PROPOSED_ET:** kas sa valmistad riisi?
**Problēma:** Keetmine on valmistamise üks viis, kuid saksa Reis ei piira tegevust keetmisega.
**LV etalons (konteksts):** vai tu gatavo rīsus?
**DE konteksts:** Reis
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0022
**Card ID:** a1-sitzen
**Field:** study.examples[2].lv
**CURRENT:** ta istub ukse juures.
**PROPOSED_ET:** ta seisab ukse juures.
**Problēma:** Lätikeelne näide tähendab, et ta seisab; eestikeelne „istub” annab vastupidise tähenduse.
**LV etalons (konteksts):** viņš stāv pie durvīm.
**DE konteksts:** sitzen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0023
**Card ID:** a1-sitzen
**Field:** study.examples[3].lv
**CURRENT:** kass istub diivanil.
**PROPOSED_ET:** kass lamab diivanil.
**Problēma:** Lätikeelne näide tähendab, et kass lamab; „istub” on vale asend.
**LV etalons (konteksts):** kaķis guļ uz dīvāna.
**DE konteksts:** sitzen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0024
**Card ID:** a1-stehen
**Field:** study.examples[2].lv
**CURRENT:** ta seisab laua ääres.
**PROPOSED_ET:** ta istub laua ääres.
**Problēma:** Lätikeelne näide tähendab, et ta istub; eestikeelne „seisab” annab vastupidise tähenduse.
**LV etalons (konteksts):** viņš sēž pie galda.
**DE konteksts:** stehen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0025
**Card ID:** a1-werden
**Field:** study.examples[3].lv
**CURRENT:** ma olen väsinud.
**PROPOSED_ET:** ma väsin.
**Problēma:** „Ma olen väsinud” tähendab „ich bin müde” ega väljenda muutumist, mida „werden” nõuab.
**LV etalons (konteksts):** es esmu noguris.
**DE konteksts:** werden
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
## 4. Deterministic gates

| Study 134/134 | PASS |
| sectionAccents | FAIL |
| remnants | PASS |
| mirror | PASS |
| syntax | PASS |

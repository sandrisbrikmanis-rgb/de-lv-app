# ET–DE A1 pilns lingvistiskais audits (MASTER v1.7 FULL_DISCOVERY)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.7** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `ec39fc12b38de0b19420a3e59ad6a06496e8a0b2` |
| **DATASET_PRODUCTION_BLOB** | `66256824b62879cf6b597e5913821264214340ca` |
| **WWW DATASET BLOB** | `66256824b62879cf6b597e5913821264214340ca` |
| **LAST FINAL CLOSURE MAIN SHA** | `6f74ddf4e721eed5e264132dc5f96d445f45586e` |
| **LAST FINAL CLOSURE DATASET BLOB** | `66256824b62879cf6b597e5913821264214340ca` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **0** |
| **BASELINE STATUS** | **MAIN_ADVANCED_EXPECTED** |
| **OWNER HISTORY AVAILABLE** | YES |
| **OWNER HISTORY FILES LOADED** | owner-accepted-all, missing-study-accepted |
| **OWNER APPROVED FIELDS TOTAL** | **204** |
| **OWNER APPROVED FIELDS CHECKED** | **199** |
| **OWNER APPROVED FIELDS MATCHING CURRENT** | **14** |
| **OWNER APPROVED FIELDS DRIFTED** | **185** |
| **OWNER HISTORY GATE** | **PASS** |
| **OWNER HISTORY LOADED** | YES (210 entries) |
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
| RAW findings | **29** |
| NEW_VALIDATED_REAL_FINDINGS | **14** |
| OWNER_DECISION_CONFIRMED | **15** |
| sectionAccents | **0** |
| LV remnants | **0** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 29 |
| Deterministic | 0 |
| OWNER_DECISION_CONFIRMED | 15 |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| NEW_VALIDATED_REAL_FINDINGS | **14** |

## 3. Validated findings

CRITICAL: **0** · HIGH: **3** · MEDIUM: **10** · LOW: **1**

#### ET-A1-0001
**Card ID:** a1-also
**Field:** study.examples[1].lv
**CURRENT:** sa oled haige, seepärast sa ei lähe tööle.
**PROPOSED_ET:** sa oled haige, seepärast ei lähe sa tööle.
**Problēma:** Pärast lausealgulist „seepärast“ peab öeldis eesti keeles paiknema enne alust: „seepärast ei lähe sa“.
**LV etalons (konteksts):** tu esi slims, tāpēc neej uz darbu.
**DE konteksts:** also
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0002
**Card ID:** a1-also
**Field:** study.comparison[1].meaning
**CURRENT:** ka
**PROPOSED_ET:** mitte „ka“; „ka“ on saksa keeles „auch“
**Problēma:** Saksa „also“ tähendab siin „seega“, mitte „ka“. „Ka“ vastab saksa sõnale „auch“.
**LV etalons (konteksts):** arī
**DE konteksts:** also
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0003
**Card ID:** a1-baden
**Field:** study.examples[2].lv
**CURRENT:** ta ujub väga hästi.
**PROPOSED_ET:** ta supleb väga hästi.
**Problēma:** „Ujub väga hästi“ tähendab ujumisoskust ja vastab pigem „schwimmen“. „Baden“ tähendab suplemist või vees olemist.
**LV etalons (konteksts):** viņš ļoti labi peld.
**DE konteksts:** baden
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0004
**Card ID:** a1-der
**Field:** study.examples[1].lv
**CURRENT:** buss tuleb.
**PROPOSED_ET:** Buss sõidab.
**Problēma:** Praegune tõlge tähendab „the bus is coming”, kuid lähtelause tähendab, et buss sõidab.
**LV etalons (konteksts):** autobuss brauc.
**DE konteksts:** der
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0005
**Card ID:** a1-fussball-study
**Field:** study.examples[1].lv
**CURRENT:** Jalgpall on aias.
**PROPOSED_ET:** Jalgpall asub aias.
**Problēma:** Tõlge võib tähendada spordiala, kuid lähtefraas viitab konkreetselt jalgpallile kui pallile.
**LV etalons (konteksts):** futbola bumba atrodas dārzā.
**DE konteksts:** Fußball
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0006
**Card ID:** a1-heißen
**Field:** etMain
**CURRENT:** nimi olema • tähendama
**PROPOSED_ET:** nime kandma • tähendama
**Problēma:** „Nimi olema” ei ole eesti keeles loomulik väljend; heißen selles tähenduses on „nime kandma”.
**LV etalons (konteksts):** saukties
**DE konteksts:** heißen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0007
**Card ID:** a1-ihr
**Field:** study.translation
**CURRENT:** teie • temale
**PROPOSED_ET:** teie • temale • tema (omastav)
**Problēma:** ihr tähendab lisaks „teie” ja „temale” ka naissoost isiku omastavat „tema”; see tähendus on näites olemas, tõlkest puudub.
**LV etalons (konteksts):** jūs • viņai
**DE konteksts:** ihr
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0013
**Card ID:** a1-lang
**Field:** study.examples[5].lv
**CURRENT:** kogu päev (otsa).
**PROPOSED_ET:** kogu päeva (otsa).
**Problēma:** Väljendis „kogu päeva otsa” peab kestuse tähenduses olema osastav kääne: „päeva”.
**LV etalons (konteksts):** visu dienu (garumā).
**DE konteksts:** lang
**Smagums:** LOW
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0024
**Card ID:** a1-sitzen
**Field:** study.examples[2].lv
**CURRENT:** ta istub ukse juures.
**PROPOSED_ET:** ta seisab ukse juures.
**Problēma:** Praegune verb tähendab „istub”, kuid lähtefraas ja vastand „stehen” tähendavad „seisab”.
**LV etalons (konteksts):** viņš stāv pie durvīm.
**DE konteksts:** sitzen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0025
**Card ID:** a1-sitzen
**Field:** study.examples[3].lv
**CURRENT:** kass istub diivanil.
**PROPOSED_ET:** kass lamab diivanil.
**Problēma:** Praegune tekst tähendab, et kass istub; lähtefraas ütleb, et kass lamab.
**LV etalons (konteksts):** kaķis guļ uz dīvāna.
**DE konteksts:** sitzen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0026
**Card ID:** a1-stehen
**Field:** study.examples[2].lv
**CURRENT:** ta seisab laua ääres.
**PROPOSED_ET:** ta istub laua ääres.
**Problēma:** Praegune tekst tähendab „ta seisab”, kuid lähtefraas tähendab „ta istub”.
**LV etalons (konteksts):** viņš sēž pie galda.
**DE konteksts:** stehen
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0027
**Card ID:** a1-stehen
**Field:** study.examples[3].lv
**CURRENT:** raamat on laual.
**PROPOSED_ET:** raamat seisab laual.
**Problēma:** Õpitava verbi tähendus „seisma” kaob üldisesse asukohaväljendisse „on laual”.
**LV etalons (konteksts):** grāmata atrodas uz galda.
**DE konteksts:** stehen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0028
**Card ID:** a1-um
**Field:** study.examples[3].lv
**CURRENT:** ma õpin, et saksa keelt rääkida.
**PROPOSED_ET:** ma õpin saksa keelt rääkima.
**Problēma:** „Õpin, et ... rääkida” ei ole loomulik konstruktsioon; eesti keeles kasutatakse siin da-infinitiivi koos „õppima”ga.
**LV etalons (konteksts):** es mācos, lai runātu vāciski.
**DE konteksts:** um
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0029
**Card ID:** a1-vor
**Field:** study.examples[2].lv
**CURRENT:** on viie minuti pärast kaheksa.
**PROPOSED_ET:** Kell on viis minutit kaheksast puudu.
**Problēma:** „Pärast“ tähendab pärast kaheksat; „vor fünf vor acht“ tähendab, et kaheksani on viis minutit.
**LV etalons (konteksts):** ir bez piecām astoņi.
**DE konteksts:** vor
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
## 4. Deterministic gates

| Study 134/134 | PASS |
| sectionAccents | PASS |
| remnants | PASS |
| mirror | PASS |
| syntax | PASS |

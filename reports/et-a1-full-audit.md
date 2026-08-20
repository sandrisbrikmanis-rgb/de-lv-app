# ET–DE A1 pilns lingvistiskais audits (MASTER v1.7 FULL_DISCOVERY)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.7** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `a313c363f6329912f09b4d74cc5cd5f5bfdf9fd7` |
| **DATASET_PRODUCTION_BLOB** | `0becf86d29bcb2f2b086b11d72df2769a292200d` |
| **WWW DATASET BLOB** | `0becf86d29bcb2f2b086b11d72df2769a292200d` |
| **LAST FINAL CLOSURE MAIN SHA** | `a313c363f6329912f09b4d74cc5cd5f5bfdf9fd7` |
| **LAST FINAL CLOSURE DATASET BLOB** | `0becf86d29bcb2f2b086b11d72df2769a292200d` |
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

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.7**
**Audita datums:** 2026-08-20
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **702** |
| Luna coverage | **100%** |
| Study | **134/134** |
| RAW findings | **33** |
| NEW_VALIDATED_REAL_FINDINGS | **19** |
| OWNER_DECISION_CONFIRMED | **14** |
| sectionAccents | **0** |
| LV remnants | **0** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 33 |
| Deterministic | 0 |
| OWNER_DECISION_CONFIRMED | 14 |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| NEW_VALIDATED_REAL_FINDINGS | **19** |

## 3. Validated findings

CRITICAL: **0** · HIGH: **0** · MEDIUM: **15** · LOW: **4**

#### ET-A1-0001
**Card ID:** a1-baden
**Field:** study.examples[2].lv
**CURRENT:** ta ujub väga hästi.
**PROPOSED_ET:** Ta supleb väga hästi.
**Problēma:** Näide kirjeldab ujumisoskust (schwimmen), mitte suplemist või ujumist harrastusena (baden).
**LV etalons (konteksts):** viņš ļoti labi peld.
**DE konteksts:** baden
**Smagums:** MEDIUM
**Kategorija:** STUDY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0002
**Card ID:** a1-besuch
**Field:** study.examples[2].lv
**CURRENT:** Arst teeb visiidi.
**PROPOSED_ET:** Arst läheb visiidile.
**Problēma:** „Arst läheb visiidile” vastab loomulikumalt tähendusele „läheb visiidile”; praegune väljend võib tähendada visiidi tegemist.
**LV etalons (konteksts):** Ārsts dodas vizītē.
**DE konteksts:** Besuch
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0003
**Card ID:** a1-besuchen
**Field:** study.examples[2].lv
**CURRENT:** Ma külastan oma vanavanemaid.
**PROPOSED_ET:** Ma külastasin oma vanavanemaid.
**Problēma:** Läti lähte lause on minevikus („apciemoju”), kuid praegune eestikeelne verb on olevikus.
**LV etalons (konteksts):** Es apciemoju savus vecvecākus.
**DE konteksts:** besuchen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0004
**Card ID:** a1-bleiben
**Field:** study.examples[0].lv
**CURRENT:** ma jään koju.
**PROPOSED_ET:** Ma jään koju.
**Problēma:** Täislause peab algama suure tähega.
**LV etalons (konteksts):** es palieku mājās.
**DE konteksts:** bleiben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0005
**Card ID:** a1-bleiben
**Field:** study.examples[1].lv
**CURRENT:** jää siia!
**PROPOSED_ET:** Jää siia!
**Problēma:** Täislause peab algama suure tähega.
**LV etalons (konteksts):** paliec šeit!
**DE konteksts:** bleiben
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0006
**Card ID:** a1-es
**Field:** study.translation
**CURRENT:** see • ta • umbisikuline vorm
**PROPOSED_ET:** see • umbisikuline vorm
**Problēma:** Saksa es tähendab siin 'see'; 'ta' viitab inimesele ega ole selle asesõna sobiv vaste.
**LV etalons (konteksts):** tas
**DE konteksts:** es
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0007
**Card ID:** a1-halten
**Field:** study.comparison[3].meaning
**CURRENT:** mõtlema
**PROPOSED_ET:** pidama
**Problēma:** Halten in this sense means to consider/regard, as in „etwas für richtig halten“, not simply to think.
**LV etalons (konteksts):** domāt
**DE konteksts:** halten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0008
**Card ID:** a1-hand-study
**Field:** study.translation
**CURRENT:** käsi (kämmal)
**PROPOSED_ET:** käsi
**Problēma:** Hand means „käsi“; „kämmal“ means palm and unnecessarily narrows the German meaning.
**LV etalons (konteksts):** plauksta
**DE konteksts:** Hand
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0009
**Card ID:** a1-im
**Field:** study.comparison[2].meaning
**CURRENT:** sees / sisse (ilma artiklita)
**PROPOSED_ET:** sees / sisse (kindla artikliga)
**Problēma:** im on in + dem, seega kasutatakse seda koos kindla artikliga, mitte ilma artiklita.
**LV etalons (konteksts):** iekšā / uz (bez artikula)
**DE konteksts:** im
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0010
**Card ID:** a1-ins
**Field:** study.comparison[2].meaning
**CURRENT:** sees / sisse (eraldi artikliga)
**PROPOSED_ET:** sees / sisse (kokkusulanud kindla artikliga)
**Problēma:** ins on in + das kokkusulanud vorm; artikkel ei esine eraldi sõnana.
**LV etalons (konteksts):** iekšā / uz iekšu (ar patstāvīgu artikulu)
**DE konteksts:** ins
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0025
**Card ID:** a1-nehmen
**Field:** study.examples[0].lv
**CURRENT:** ma sõidan bussiga.
**PROPOSED_ET:** Ma võtan bussi.
**Problēma:** Näide väljendab sõitmist, mitte saksa verbi nehmen tähendust „võtma“ ehk bussi võtma.
**LV etalons (konteksts):** es braucu ar autobusu.
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0026
**Card ID:** a1-nehmen
**Field:** study.examples[2].lv
**CURRENT:** ma toon sulle raamatu.
**PROPOSED_ET:** Ma võtan raamatu.
**Problēma:** „Toon“ tähendab bringen ehk tooma; nehmen tähendab siin võtma, mitte kellelegi midagi tooma.
**LV etalons (konteksts):** es tev atnesu grāmatu.
**DE konteksts:** nehmen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0027
**Card ID:** a1-sollen
**Field:** study.examples[1].lv
**CURRENT:** sa pead tulema.
**PROPOSED_ET:** sa peaksid tulema.
**Problēma:** Näide kasutab kohustust väljendavat „pead“, kuid kaardi tähendus „peaks“ vajab siin vormi „peaksid“.
**LV etalons (konteksts):** tev jāatnāk.
**DE konteksts:** sollen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0028
**Card ID:** a1-sollen
**Field:** study.examples[2].lv
**CURRENT:** ma pean koju jääma.
**PROPOSED_ET:** ma peaksin koju jääma.
**Problēma:** „Ma pean“ tähendab peab/must; see ei ühti kaardi „sollen“ tähenduseks antud vormiga „peaksin“.
**LV etalons (konteksts):** man jāpaliek mājās.
**DE konteksts:** sollen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0029
**Card ID:** a1-sollen
**Field:** study.examples[3].lv
**CURRENT:** ma pean nüüd minema.
**PROPOSED_ET:** ma peaksin nüüd minema.
**Problēma:** Näide väljendab „pean“, mitte kaardi põhitähendust „peaksin“.
**LV etalons (konteksts):** man tagad jāiet.
**DE konteksts:** sollen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0030
**Card ID:** a1-stehen
**Field:** study.examples[3].lv
**CURRENT:** raamat seisab laual.
**PROPOSED_ET:** raamat on laual.
**Problēma:** Üldises asukoha tähenduses on raamatu kohta loomulikum „on laual“; „seisab“ viitab püsti olekule.
**LV etalons (konteksts):** grāmata atrodas uz galda.
**DE konteksts:** stehen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0031
**Card ID:** a1-über
**Field:** study.comparison[3].meaning
**CURRENT:** -st / kohta mingist allikast
**PROPOSED_ET:** allikast / mingi allika kohta
**Problēma:** Praegune sõnajärg ja ühend „kohta mingist allikast“ on eesti keeles ebakorrektne ja raskesti mõistetav.
**LV etalons (konteksts):** no / par no kāda avota
**DE konteksts:** über
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0032
**Card ID:** a1-vom
**Field:** study.comparison[0].meaning
**CURRENT:** -st (konkreetne asi, Dativ)
**PROPOSED_ET:** -st (konkreetse asja puhul, saksa keeles datiiv)
**Problēma:** Fraas on eesti keeles grammatiliselt vigane ja võib segi ajada eesti elatiivi saksa datiiviga.
**LV etalons (konteksts):** no (konkrēta lieta, kam?)
**DE konteksts:** vom
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A1-0033
**Card ID:** a1-zu
**Field:** study.comparison[2].meaning
**CURRENT:** sees / mingisse kohta
**PROPOSED_ET:** sisse / mingisse kohta
**Problēma:** „Sees” väljendab asukohta, kuid lähtekoha vastandus nõuab suunda väljendavat „sisse”.
**LV etalons (konteksts):** iekšā / uz vietu
**DE konteksts:** zu
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
## 4. Deterministic gates

| Study 134/134 | PASS |
| sectionAccents | PASS |
| remnants | PASS |
| mirror | PASS |
| syntax | PASS |

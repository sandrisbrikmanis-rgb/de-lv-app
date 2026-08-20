# ET–DE A2 pilns lingvistiskais audits (MASTER v1.8 FULL_DISCOVERY)

## MASTER baseline header (§7.8.3)

| Lauks | Vērtība |
|-------|---------|
| **MASTER VERSION** | **1.8** |
| **AUDIT MODE** | FULL_DISCOVERY |
| **ORIGIN_MAIN_SHA** | `5820227e85eddbad63f2362fff9d8a6a3be553ae` |
| **DATASET_PRODUCTION_BLOB** | `749b19fa362b32cf4afa439b7f6a52fae816b1b9` |
| **WWW DATASET BLOB** | `749b19fa362b32cf4afa439b7f6a52fae816b1b9` |
| **LAST FINAL CLOSURE MAIN SHA** | `5820227e85eddbad63f2362fff9d8a6a3be553ae` |
| **LAST FINAL CLOSURE DATASET BLOB** | `749b19fa362b32cf4afa439b7f6a52fae816b1b9` |
| **UNMERGED CLOSURE/REPAIR FOUND** | **1** |
| **BASELINE STATUS** | **MATCH_POST_REPAIR_MAIN** |
| **OWNER HISTORY AVAILABLE** | YES |
| **OWNER HISTORY FILES LOADED** | et-a2-owner-apply-map, et-a2-owner-decisions-accepted.md, accepted-groups |
| **OWNER APPROVED FIELDS TOTAL** | **937** |
| **OWNER APPROVED FIELDS CHECKED** | **937** |
| **OWNER APPROVED FIELDS MATCHING CURRENT** | **0** |
| **OWNER APPROVED FIELDS DRIFTED** | **937** |
| **OWNER HISTORY GATE** | **PASS** |
| **OWNER HISTORY LOADED** | YES (937 entries) |
| **DE READ-ONLY** | PASS |

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.8**
**Audita datums:** 2026-08-20
**Production changes:** **0**

## 1. Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| Kartītes | **1640** |
| Luna coverage | **100%** |
| Study | **232/231** |
| RAW findings | **405** |
| NEW_VALIDATED_REAL_FINDINGS | **234** |
| OWNER_BACKLOG_FINAL | **234** |
| PREVIOUSLY_SEEN_RAW | **0** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **234** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **NO** |
| OBJECT_COVERAGE | **1640/1640 (100%)** |
| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |
| OWNER_DECISION_CONFIRMED | **171** |
| sectionAccents | **428** |
| LV remnants | **186** |
| Mirror | **PASS** |

## **Verdict: NEEDS_OWNER_REVIEW**

## 2. Classification

| Kategorija | Skaits |
|------------|--------|
| RAW LLM candidates | 188 |
| Deterministic | 217 |
| OWNER_DECISION_CONFIRMED | 171 |
| OWNER_DECISION_REOPEN_REQUIRED | **15** |
| REPAIR_REGRESSION | **0** |
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **0** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **234** |
| OWNER_BACKLOG_FINAL | **234** |

## 2b. Discovery history gates (§7.12 / §7.18)

| RAW_AUDIT_HISTORY_GATE | **PASS** |
| OWNER_HISTORY_GATE | **PASS** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |

> 100% means every card/object was sent to the auditor at least once. 1640/1640 does NOT mean all possible defects were found.

## 3. Validated findings

CRITICAL: **3** · HIGH: **32** · MEDIUM: **147** · LOW: **52**

#### ET-A2-0001
**Card ID:** STRUCT
**Field:** study.count
**CURRENT:** 232
**PROPOSED_ET:** 231
**Problēma:** Study count mismatch LV=231 ET=232
**DE konteksts:** —
**Smagums:** CRITICAL
**Kategorija:** STRUCTURE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0045
**Card ID:** a2-borgen
**Field:** entry[276].study.comparison[1].example
**CURRENT:** Kannst du mir das Buch leihen? = Vai vari man aizdot grāmatu?
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Die Ware ist teuer. = Kaup on kallis.
**Statuss:** PENDING
#### ET-A2-0050
**Card ID:** a2-dafür
**Field:** entry[318].study.comparison[1].example
**CURRENT:** Darum bleibe ich zu Hause. = Tāpēc es palieku mājās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Die Auflage ist hoch. = Tiraaž on fragments aizstāts ar suur.
**Statuss:** PENDING
#### ET-A2-0057
**Card ID:** study-der-dank
**Field:** entry[323].study.comparison[3].example
**CURRENT:** Vielen Dank für die Hilfe! = Liels paldies par palīdzību!
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Wir beginnen die Arbeit. = Me alustame tööd.
**Statuss:** PENDING
#### ET-A2-0059
**Card ID:** a2-darauf
**Field:** entry[324].study.comparison[2].example
**CURRENT:** Danach gehe ich nach Hause. = Pēc tam es eju mājās.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Er ist ehrlich. = HIGH Ta on aus.
**Statuss:** PENDING
#### ET-A2-0064
**Card ID:** a2-dazu
**Field:** entry[330].study.comparison[2].example
**CURRENT:** Ich war dabei. = Es biju klāt.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich gebe dir das Buch. = Ma annan sulle raamatu.
**Statuss:** PENDING
#### ET-A2-0071
**Card ID:** a2-dick
**Field:** entry[341].study.comparison[4].example
**CURRENT:** Er ist stark. = Viņš ir stiprs.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich gebe viel Geld aus. = Ma kulutan palju raha.
**Statuss:** PENDING
#### ET-A2-0084
**Card ID:** a2-einschalten
**Field:** entry[391].study.comparison[2].example
**CURRENT:** Mach das Licht an. = Ieslēdz gaismu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Das Kind zieht sich LV/atlikušās aus. = Laps riietub lahti.
**Statuss:** PENDING
#### ET-A2-0107
**Card ID:** a2-grund
**Field:** entry[607].study.comparison[0].example
**CURRENT:** Aus diesem Grund komme ich nicht. = Šī iemesla dēļ es nenākšu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Ich bewahre die Quittung auf. = valodas Ma hoian kviitungi alles. aizstāts ar
**Statuss:** PENDING
#### ET-A2-0124
**Card ID:** a2-nutzen
**Field:** entry[1029].study.comparison[3].example
**CURRENT:** Nutze die Chance! = Izmanto iespēju!
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Die Glühbirne ist kaputt. = Lambipirn on katki.
**Statuss:** PENDING
#### ET-A2-0141
**Card ID:** a2-sobald
**Field:** entry[1325].study.comparison[2].example
**CURRENT:** Als ich Kind war, spielte ich viel. = Kad biju bērns, daudz spēlējos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** FOREIGN_REMNANT **LABOT** Sie ist nett. = LV/atlikušās Ta on kena.
**Statuss:** PENDING
#### ET-A2-0170
**Card ID:** a2-während
**Field:** entry[1553].study.comparison[2].example
**CURRENT:** Wenn ich Zeit habe, komme ich. = Ja man būs laiks, es nākšu.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** müde. = valodas Seepärast olen ma väsinud.
**Statuss:** PENDING
#### ET-A2-0171
**Card ID:** a2-während
**Field:** entry[1553].study.comparison[3].example
**CURRENT:** Solange du hier bist, bleibe ich. = Kamēr tu esi šeit, es palieku.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Wir sitzen um das Feuer. = Me ümber tule.
**Statuss:** PENDING
#### ET-A2-0173
**Card ID:** a2-wechseln
**Field:** entry[1564].study.comparison[3].example
**CURRENT:** Ich steige um. = Es pārsēžos.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Auto. = steht ein Maja ees seisab daļa saglabāta
**Statuss:** PENDING
#### ET-A2-0177
**Card ID:** a2-Weste-1584
**Field:** entry[1584].lv
**CURRENT:** vest
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** Die Bettdecke ist weich. = valodas aizstāts ar
**Statuss:** PENDING
#### ET-A2-0181
**Card ID:** a2-ziehen
**Field:** entry[1599].study.comparison[0].example
**CURRENT:** Wir ziehen um. = Mēs pārvācamies.
**PROPOSED_ET:** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**DE konteksts:** —
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** deterministic
**Klasifikācija:** VALIDATED_REAL_FINDING
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved:** ich. = Seepärast valodas ma.
**Statuss:** PENDING
#### ET-A2-0188
**Card ID:** a2-abfahren
**Field:** study.sectionAccents (examples)
**CURRENT:** grupp
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0189
**Card ID:** a2-bauen
**Field:** study.sectionAccents (examples)
**CURRENT:** mudelit
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0190
**Card ID:** a2-job
**Field:** study.sectionAccents (examples)
**CURRENT:** t
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0191
**Card ID:** a2-job
**Field:** study.sectionAccents (examples)
**CURRENT:** ö
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0196
**Card ID:** a2-job
**Field:** study.sectionAccents (examples)
**CURRENT:** d
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0197
**Card ID:** a2-job
**Field:** study.sectionAccents (examples)
**CURRENT:** a
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0198
**Card ID:** a2-job
**Field:** study.sectionAccents (examples)
**CURRENT:** m
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0199
**Card ID:** a2-job
**Field:** study.sectionAccents (examples)
**CURRENT:** e
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0201
**Card ID:** a2-kamm
**Field:** study.sectionAccents (examples)
**CURRENT:** harja
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0202
**Card ID:** a2-kamm
**Field:** study.sectionAccents (examples)
**CURRENT:** kammi
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0203
**Card ID:** a2-kamm
**Field:** study.sectionAccents (examples)
**CURRENT:** hari
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0204
**Card ID:** a2-lage
**Field:** study.sectionAccents (examples)
**CURRENT:** kiht
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0205
**Card ID:** a2-leitung
**Field:** study.sectionAccents (examples)
**CURRENT:** juhe
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0207
**Card ID:** a2-leitung
**Field:** study.sectionAccents (examples)
**CURRENT:** liin
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0209
**Card ID:** a2-leitung
**Field:** study.sectionAccents (examples)
**CURRENT:** toru
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0211
**Card ID:** a2-rechnen
**Field:** study.sectionAccents (explanation)
**CURRENT:** mit rechnen
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0212
**Card ID:** a2-satz
**Field:** study.sectionAccents (examples)
**CURRENT:** komplekti
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0213
**Card ID:** a2-satz
**Field:** study.sectionAccents (examples)
**CURRENT:** määr
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0215
**Card ID:** a2-satz
**Field:** study.sectionAccents (examples)
**CURRENT:** sete
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0217
**Card ID:** a2-schloss
**Field:** study.sectionAccents (examples)
**CURRENT:** lukku
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0218
**Card ID:** a2-wagen
**Field:** study.sectionAccents (examples)
**CURRENT:** a
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0219
**Card ID:** a2-wagen
**Field:** study.sectionAccents (examples)
**CURRENT:** u
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0220
**Card ID:** a2-wagen
**Field:** study.sectionAccents (examples)
**CURRENT:** t
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0221
**Card ID:** a2-wagen
**Field:** study.sectionAccents (examples)
**CURRENT:** o
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0226
**Card ID:** a2-wagen
**Field:** study.sectionAccents (examples)
**CURRENT:** g
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0228
**Card ID:** a2-wagen
**Field:** study.sectionAccents (examples)
**CURRENT:** v
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0232
**Card ID:** a2-wagen
**Field:** study.sectionAccents (examples)
**CURRENT:** n
**PROPOSED_ET:** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**DE konteksts:** —
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** deterministic
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0233
**Card ID:** a2-abfahren
**Field:** study.sectionAccents.comparison.example
**CURRENT:** Rong
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "Rong" nav atrodams sadaļā comparison
**DE konteksts:** abfahren
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0234
**Card ID:** a2-abfahren
**Field:** study.sectionAccents.comparison.example
**CURRENT:** väljub
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "väljub" nav atrodams sadaļā comparison
**DE konteksts:** abfahren
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0236
**Card ID:** a2-abfahren
**Field:** study.sectionAccents.comparison.example
**CURRENT:** sõitma
**PROPOSED_ET:** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "sõitma" nav atrodams sadaļā comparison
**DE konteksts:** abfahren
**Smagums:** MEDIUM
**Kategorija:** SECTIONACCENTS_LANGUAGE
**Avots:** validate-study-design
**Klasifikācija:** DETERMINISTIC_FINDING
**Statuss:** PENDING
#### ET-A2-0238
**Card ID:** a2-ändern-35
**Field:** etText
**CURRENT:** muutma • ümber muutma
**PROPOSED_ET:** muutma • ümber tegema
**Problēma:** „Ümber muutma” ei ole loomulik ega tavapärane vaste; „ümber tegema” tähendab ümber muutma või modifitseerima.
**LV etalons (konteksts):** mainīt • izmainīt
**DE konteksts:** ändern
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0239
**Card ID:** a2-Anlass-53
**Field:** etText
**CURRENT:** põhjus • sündmus
**PROPOSED_ET:** põhjus • puhk
**Problēma:** „Anlass” tähendab lisaks põhjusele ka puhku või ajendit; „sündmus” tähendab lihtsalt sündmust ega kata seda tähendust täpselt.
**LV etalons (konteksts):** iemesls • gadījums
**DE konteksts:** Anlass
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0240
**Card ID:** a2-Arm-85
**Field:** etText
**CURRENT:** käsi
**PROPOSED_ET:** käsivars
**Problēma:** „Käsi“ tähendab enamasti kätt; saksa „Arm“ vaste on täpsemalt „käsivars“.
**LV etalons (konteksts):** roka
**DE konteksts:** Arm
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0241
**Card ID:** a2-auf der Stelle-101
**Field:** etText
**CURRENT:** viivitamatult • otsekohe
**PROPOSED_ET:** kohe • kohapeal
**Problēma:** Mõlemad praegused vasted tähendavad „kohe“; fraasi teine tähendus „kohapeal“ on puudu.
**LV etalons (konteksts):** nekavējoties • uz vietas
**DE konteksts:** auf der Stelle
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0242
**Card ID:** a2-aufmuntern-131
**Field:** etText
**CURRENT:** julgustama
**PROPOSED_ET:** tuju tõstma
**Problēma:** „Julgustama” tähendab pigem encourage; „aufmuntern” tähendab kellegi tuju tõstma või rõõmustama.
**LV etalons (konteksts):** uzmundrināt
**DE konteksts:** aufmuntern
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0243
**Card ID:** a2-Aufprall-134
**Field:** etText
**CURRENT:** kokkupõrge
**PROPOSED_ET:** löök
**Problēma:** „Aufprall” tähendab lööki või põrget; „kokkupõrge” tähistab kitsamalt kahe objekti collision-tüüpi kokkupõrget.
**LV etalons (konteksts):** trieciens
**DE konteksts:** Aufprall
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0244
**Card ID:** a2-Bahngleis-188
**Field:** etText
**CURRENT:** rööpad
**PROPOSED_ET:** rööbas
**Problēma:** Saksa märksõna on ainsuses; „rööpad” on mitmus, ainsuse vaste on „rööbas”.
**LV etalons (konteksts):** sliedes
**DE konteksts:** Bahngleis
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0245
**Card ID:** a2-besitzen-238
**Field:** etText
**CURRENT:** kuuluma
**PROPOSED_ET:** omama
**Problēma:** „Kuuluma” tähendab kellelegi kuuluma, mitte midagi omama või valdama; see on tähenduse vastassuund.
**LV etalons (konteksts):** piederēt
**DE konteksts:** besitzen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0246
**Card ID:** a2-bevor-248
**Field:** etText
**CURRENT:** enne
**PROPOSED_ET:** enne kui
**Problēma:** Bevor is a conjunction introducing a clause; Estonian requires the conjunctional form „enne kui“.
**LV etalons (konteksts):** pirms
**DE konteksts:** bevor
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0247
**Card ID:** a2-dauern-327
**Field:** etText
**CURRENT:** kestma • jätkuma
**PROPOSED_ET:** kestma
**Problēma:** „Jätkuma“ tähendab jätkuma või piisama, mitte saksa verbi „dauern“ kestma tähendust.
**LV etalons (konteksts):** ilgt • turpināties
**DE konteksts:** dauern
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0248
**Card ID:** a2-doppelt-349
**Field:** etText
**CURRENT:** kahekordne • topelt • kaksik
**PROPOSED_ET:** kahekordne • topelt
**Problēma:** „Kaksik“ tähendab kaksikut, mitte omadussõnana „kahekordne“ või „topelt“.
**LV etalons (konteksts):** divkāršs • divkārtīgs • dubults
**DE konteksts:** doppelt
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0249
**Card ID:** a2-entschuldigen-415
**Field:** etText
**CURRENT:** vabandama • andestama
**PROPOSED_ET:** vabandama • vabandust paluma
**Problēma:** Andestama tähendab „andestada” ehk forgive; see ei ole entschuldigeni teine põhitähendus.
**LV etalons (konteksts):** atvainot • piedot
**DE konteksts:** entschuldigen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0250
**Card ID:** a2-entweder-416
**Field:** etText
**CURRENT:** kas
**PROPOSED_ET:** kas ... või
**Problēma:** Entweder tähendab „kas ... või”; üksnes „kas” väljendab küsimust või tingimust, mitte either.
**LV etalons (konteksts):** vai nu
**DE konteksts:** entweder
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0251
**Card ID:** a2-Form-510
**Field:** etText
**CURRENT:** vorm • viis
**PROPOSED_ET:** vorm • liik
**Problēma:** „Viis“ tähendab peamiselt viisi või meetodit, mitte vormi, liiki ega tüüpi.
**LV etalons (konteksts):** forma • veids
**DE konteksts:** Form
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0252
**Card ID:** a2-füllen-540
**Field:** etText
**CURRENT:** täitma • täis valama
**PROPOSED_ET:** täitma • täis täitma
**Problēma:** „Täis valama“ tähendab vedelikuga täitmist valades; see ei kata üldist „täitma/piepildima“ tähendust.
**LV etalons (konteksts):** pildīt • piepildīt
**DE konteksts:** füllen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0253
**Card ID:** a2-gemeinsam-574
**Field:** etText
**CURRENT:** ühine • kollektiivne
**PROPOSED_ET:** ühine • koos
**Problēma:** “Kollektiivne” tähendab kollektiivset, mitte saksa sõna tavalist tähendust “koos/ühiselt”.
**LV etalons (konteksts):** kopējs • kopīgs
**DE konteksts:** gemeinsam
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0254
**Card ID:** a2-Gericht-581
**Field:** etText
**CURRENT:** toit • eine
**PROPOSED_ET:** toit • roog
**Problēma:** “Eine” on saksakeelne sõna ja ei ole eestikeelne vaste; Gericht tähendab muu hulgas rooga või einet.
**LV etalons (konteksts):** ēdiens • maltīte
**DE konteksts:** Gericht
**Smagums:** HIGH
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0255
**Card ID:** a2-herein-655
**Field:** etText
**CURRENT:** sees
**PROPOSED_ET:** sisse
**Problēma:** “Sees” tähendab asukohta „inside”; „herein” väljendab sissepoole liikumist ja vajab suunda „sisse”.
**LV etalons (konteksts):** iekšā
**DE konteksts:** herein
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0256
**Card ID:** a2-hinein-669
**Field:** etText
**CURRENT:** sees
**PROPOSED_ET:** sisse
**Problēma:** „Hinein“ väljendab sissepoole liikumist; „sees“ tähendab asukohta sees.
**LV etalons (konteksts):** iekšā
**DE konteksts:** hinein
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0257
**Card ID:** a2-insgesamt-710
**Field:** etText
**CURRENT:** koos
**PROPOSED_ET:** kokku
**Problēma:** “Koos” tähendab “together”, mitte “insgesamt” ehk “kokku”.
**LV etalons (konteksts):** kopā
**DE konteksts:** insgesamt
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0258
**Card ID:** a2-Kaffeepulver-748
**Field:** etText
**CURRENT:** lahustuv kohv
**PROPOSED_ET:** kohvipulber
**Problēma:** “Lahustuv kohv” tähendab “instant coffee”; “Kaffeepulver” on üldiselt kohvipulber.
**LV etalons (konteksts):** šķīstošā kafija
**DE konteksts:** Kaffeepulver
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0259
**Card ID:** a2-Kapitel-761
**Field:** etText
**CURRENT:** raamatu peatükk
**PROPOSED_ET:** peatükk
**Problēma:** „Raamatu peatükk” tähendab konkreetselt raamatu peatükki, kuid saksa sõna on üldisem: peatükk.
**LV etalons (konteksts):** grāmatas nodaļa
**DE konteksts:** Kapitel
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0260
**Card ID:** a2-männlich-911
**Field:** etText
**CURRENT:** meeste
**PROPOSED_ET:** meessoost
**Problēma:** „Meeste” tähendab „meeste oma/meeste-” ja ei vasta iseseisva omadussõnana tähendusele „männlich”.
**LV etalons (konteksts):** vīriešu
**DE konteksts:** männlich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0261
**Card ID:** a2-Mühe-966
**Field:** etText
**CURRENT:** pingutused
**PROPOSED_ET:** pingutus
**Problēma:** Saksa märksõna on ainsuses; „pingutused” on mitmus ja muudab vaste arvu ning tähendust.
**LV etalons (konteksts):** pūles
**DE konteksts:** Mühe
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0262
**Card ID:** a2-nu-1024
**Field:** etText
**CURRENT:** hetkega
**PROPOSED_ET:** noh
**Problēma:** „Hetkega” tähendab „silmapilkselt”, kuid saksa „nu” on kõnekeelne partik­el „noh/nüüd”.
**LV etalons (konteksts):** acumirklī
**DE konteksts:** nu
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0263
**Card ID:** a2-Platte-1092
**Field:** etText
**CURRENT:** tahvel
**PROPOSED_ET:** plaat
**Problēma:** “Tahvel” tähendab eeskätt tahvlit või kirjutusalust; saksa “Platte” vaste on siin “plaat”.
**LV etalons (konteksts):** plāksne
**DE konteksts:** Platte
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0264
**Card ID:** a2-Postamt-1102
**Field:** etText
**CURRENT:** post
**PROPOSED_ET:** postkontor
**Problēma:** “Post” on üldisem mõiste; “Postamt” tähendab konkreetselt postkontorit.
**LV etalons (konteksts):** pasts
**DE konteksts:** Postamt
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0265
**Card ID:** a2-Saal-1184
**Field:** etText
**CURRENT:** rohi • saal
**PROPOSED_ET:** saal
**Problēma:** „Rohi” tähendab eesti keeles rohtu või rohttaimi, mitte suurt saali; õige vaste on „saal”.
**LV etalons (konteksts):** zāle
**DE konteksts:** Saal
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0266
**Card ID:** a2-satt-1193
**Field:** etText
**CURRENT:** söönud
**PROPOSED_ET:** kõht täis
**Problēma:** „Söönud” tähendab, et inimene on söönud; „satt” tähendab, et kõht on täis ehk inimene ei ole enam näljane.
**LV etalons (konteksts):** paēdis
**DE konteksts:** satt
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0267
**Card ID:** a2-solange-1328
**Field:** etText
**CURRENT:** sel ajal kui
**PROPOSED_ET:** senikaua kui
**Problēma:** „Sel ajal kui” tähendab pigem „während”; „solange” vaste on „senikaua kui” või „nii kaua kui”.
**LV etalons (konteksts):** kamēr
**DE konteksts:** solange
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0268
**Card ID:** a2-sondern-1331
**Field:** etText
**CURRENT:** aga
**PROPOSED_ET:** vaid
**Problēma:** „Sondern” väljendab vastandust pärast eitust ja vaste on „vaid”, mitte üldine „aga”.
**LV etalons (konteksts):** bet
**DE konteksts:** sondern
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0269
**Card ID:** a2-Sonnenschein-1334
**Field:** etText
**CURRENT:** päikesevalgus
**PROPOSED_ET:** päikesepaiste
**Problēma:** „Sonnenschein” tähendab päikesepaistet; „päikesevalgus” tähendab otsesemalt sunlight’i.
**LV etalons (konteksts):** saules gaisma
**DE konteksts:** Sonnenschein
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0270
**Card ID:** a2-stattfinden-1366
**Field:** etText
**CURRENT:** juhtuma
**PROPOSED_ET:** toimuma
**Problēma:** „Stattfinden” tähendab sündmuse või ürituse toimumist; „juhtuma” tähendab pigem aset leidma või juhtuma.
**LV etalons (konteksts):** notikt
**DE konteksts:** stattfinden
**Smagums:** HIGH
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0271
**Card ID:** a2-Traube-1464
**Field:** etText
**CURRENT:** viinamari
**PROPOSED_ET:** viinamari
**Problēma:** Saksa ainsusele vastab eesti ainsus „viinamari“; „viinamarjad“ oleks mitmus.
**LV etalons (konteksts):** vīnogas
**DE konteksts:** Traube
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0272
**Card ID:** a2-verbringen-1513
**Field:** etText
**CURRENT:** saatma
**PROPOSED_ET:** aega veetma
**Problēma:** Üksi kasutatuna tähendab „saatma“ peamiselt saatmist; „verbringen“ aja veetmise tähenduses on „aega veetma“.
**LV etalons (konteksts):** pavadīt
**DE konteksts:** verbringen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0273
**Card ID:** a2-wegfahren-1569
**Field:** etText
**CURRENT:** minema sõitma
**PROPOSED_ET:** ära sõitma
**Problēma:** “Minema sõitma” means to go driving; “ära sõitma” expresses leaving or driving away.
**LV etalons (konteksts):** aizbraukt prom
**DE konteksts:** wegfahren
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0274
**Card ID:** a2-abgeben
**Field:** study.examples[3].lv
**CURRENT:** ma annan paki postis ära.
**PROPOSED_ET:** ma annan paki postkontoris ära.
**Problēma:** „Postis“ tähendab pigem postisaadetisena; koha tähenduses on loomulikum „postkontoris“.
**LV etalons (konteksts):** es nododu paku pastā.
**DE konteksts:** abgeben
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0275
**Card ID:** a2-abgeben
**Field:** study.comparison[0].meaning
**CURRENT:** ära andma või tagasi andma teisele või kindlas kohas
**PROPOSED_ET:** kellelegi või kindlasse kohta üle andma või tagasi andma
**Problēma:** Koha- ja sihitisevormid on vigased: „teisele“ ja „kindlas kohas“ ei sobitu lausesse.
**LV etalons (konteksts):** nodot vai atdot citam vai noteiktā vietā
**DE konteksts:** abgeben
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0276
**Card ID:** a2-absagen
**Field:** study.examples[2].lv
**CURRENT:** ta ütles osalemise ära.
**PROPOSED_ET:** ta loobus osalemisest.
**Problēma:** „Ütles osalemise ära“ ei ole selles tähenduses loomulik; korrektne vaste on „osalemisest loobuma“.
**LV etalons (konteksts):** viņš atteica dalību.
**DE konteksts:** absagen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0277
**Card ID:** a2-absagen
**Field:** study.important.text
**CURRENT:** absagen tähendab juba kokkulepitud asja tühistama või sellest ära ütlema.
**PROPOSED_ET:** absagen tähendab juba kokkulepitud asja tühistamist või sellest loobumist.
**Problēma:** Pärast „tähendab“ on siin loomulikum kasutada teonimesid, mitte da-infinitiivi.
**LV etalons (konteksts):** absagen nozīmē atcelt vai atteikt jau sarunātu lietu.
**DE konteksts:** absagen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0278
**Card ID:** a2-angreifen
**Field:** study.examples[4].lv
**CURRENT:** ta tundis end isiklikult solvatuna.
**PROPOSED_ET:** ta tundis end isiklikult rünnatuna.
**Problēma:** „Angreifen“ tähendab siin isikliku rünnaku sihtmärgiks olemist, mitte ainult solvumist.
**LV etalons (konteksts):** viņa jutās personīgi aizskarta.
**DE konteksts:** angreifen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0279
**Card ID:** a2-angreifen
**Field:** study.examples[5].lv
**CURRENT:** kriitika puudutab probleemi otseselt.
**PROPOSED_ET:** kriitika ründab probleemi otseselt.
**Problēma:** „Puudutab“ nõrgendab saksa „angreifen“ tähendust; siin on mõte probleemi otseselt rünnata.
**LV etalons (konteksts):** kritika tieši skar problēmu.
**DE konteksts:** angreifen
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0280
**Card ID:** a2-anlegen
**Field:** study.examples[5].lv
**CURRENT:** arst paneb seadme käe külge.
**PROPOSED_ET:** arst paneb seadme käe külge.
**Problēma:** Lause alguses peab eesti keeles olema suur algustäht.
**LV etalons (konteksts):** ārsts pieliek ierīci pie rokas.
**DE konteksts:** anlegen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0281
**Card ID:** a2-anstecken
**Field:** study.examples[4].lv
**CURRENT:** ta kinnitab mikrofoni külge.
**PROPOSED_ET:** ta kinnitab mikrofoni.
**Problēma:** „Kinnitab mikrofoni külge“ jätab sihtrühma määramata ja kõlab ebaloomulikult.
**LV etalons (konteksts):** viņa piesprauž mikrofonu.
**DE konteksts:** anstecken
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0282
**Card ID:** a2-anstellen
**Field:** study.examples[2].lv
**CURRENT:** me läheme järjekorra lõppu.
**PROPOSED_ET:** me asume järjekorra lõppu.
**Problēma:** Praegune lause tähendab lõppu minemist, mitte järjekorra lõppu seisma asumist.
**LV etalons (konteksts):** mēs nostājamies rindas beigās.
**DE konteksts:** anstellen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0283
**Card ID:** a2-anstellen
**Field:** study.comparison[3].meaning
**CURRENT:** järjekorda asuma
**PROPOSED_ET:** järjekorda seisma
**Problēma:** Sich anstellen tähendab eesti keeles loomulikumalt „järjekorda seisma“ või „järjekorda võtma“.
**LV etalons (konteksts):** nostāties rindā
**DE konteksts:** anstellen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0284
**Card ID:** a2-artikel
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** Tekstides ja meedias tähendab Artikel tavaliselt artikkel.
**PROPOSED_ET:** Tekstides ja meedias tähendab sõna Artikel tavaliselt artiklit.
**Problēma:** Verb „tähendama“ nõuab siin partitiivobjekti „artiklit“, mitte nimetavat vormi „artikkel“.
**LV etalons (konteksts):** Tekstos un medijos Artikel parasti nozīmē raksts.
**DE konteksts:** Artikel
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0285
**Card ID:** a2-aschenputtel
**Field:** study.translation
**CURRENT:** tuhkatriinu
**PROPOSED_ET:** Tuhkatriinu
**Problēma:** Muinasjututegelase nimetus on eesti keeles pärisnimi ja kirjutatakse suure algustähega.
**LV etalons (konteksts):** pelnrušķīte
**DE konteksts:** Aschenputtel
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0286
**Card ID:** a2-aufnahme
**Field:** study.comparison[1].meaning
**CURRENT:** fotograafia / foto
**PROPOSED_ET:** foto / foto
**Problēma:** „Fotograafia“ tähendab pildistamise valdkonda või protsessi, mitte konkreetset fotot.
**LV etalons (konteksts):** fotogrāfija / foto
**DE konteksts:** Aufnahme
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0287
**Card ID:** a2-aufnahme
**Field:** study.comparison[4].meaning
**CURRENT:** sisseastumiseksam
**PROPOSED_ET:** sisseastumine
**Problēma:** Aufnahme tähendab siin vastuvõttu või sisseastumist; „sisseastumiseksam“ eeldaks saksa sõna Aufnahmeprüfung.
**LV etalons (konteksts):** iestājpārbaudījums
**DE konteksts:** Aufnahme
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0288
**Card ID:** a2-aufnehmen
**Field:** study.examples[5].lv
**CURRENT:** keha võtab vett vastu.
**PROPOSED_ET:** keha imab vett.
**Problēma:** Keha ei võta vett vastu, vaid imab seda.
**LV etalons (konteksts):** ķermenis uzņem ūdeni.
**DE konteksts:** aufnehmen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0289
**Card ID:** a2-aufrufen
**Field:** study.examples[0].lv
**CURRENT:** õpetaja kutsub välja minu nime.
**PROPOSED_ET:** õpetaja hüüab minu nime.
**Problēma:** Eesti keeles hüütakse inimese nime; „kutsub välja minu nime” on ebaloomulik.
**LV etalons (konteksts):** skolotājs izsauc manu vārdu.
**DE konteksts:** aufrufen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0290
**Card ID:** a2-aufrufen
**Field:** study.examples[4].lv
**CURRENT:** juht kutsub välja järgmise numbri.
**PROPOSED_ET:** juht hüüab välja järgmise numbri.
**Problēma:** Numbrit hüütakse välja; „kutsub välja numbri” ei ole siin loomulik kollokatsioon.
**LV etalons (konteksts):** vadītājs izsauc nākamo numuru.
**DE konteksts:** aufrufen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0291
**Card ID:** a2-auftragen
**Field:** study.examples[3].lv
**CURRENT:** restoranis serveeritakse toit kiiresti.
**PROPOSED_ET:** restoranis serveeritakse toitu kiiresti.
**Problēma:** Üldise tegevuse ja määratlemata koguse puhul on verbiga „serveerima” loomulikum partitiiv „toitu”.
**LV etalons (konteksts):** restorānā ēdiens tiek ātri pasniegts.
**DE konteksts:** auftragen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0292
**Card ID:** a2-auftreten
**Field:** study.examples[3].lv
**CURRENT:** ta esineb väga enesekindlalt.
**PROPOSED_ET:** ta käitub väga enesekindlalt.
**Problēma:** Siin tähendab auftreten käitumist või mõjumist, mitte esinemist laval.
**LV etalons (konteksts):** viņš izturas ļoti pārliecinoši.
**DE konteksts:** auftreten
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0293
**Card ID:** a2-aufwenden
**Field:** study.examples[1].lv
**CURRENT:** ta panustas palju vaeva.
**PROPOSED_ET:** ta nägi palju vaeva.
**Problēma:** Eesti keeles öeldakse „nägi palju vaeva”; „panustas vaeva” ei ole loomulik kollokatsioon.
**LV etalons (konteksts):** viņa ieguldīja daudz pūļu.
**DE konteksts:** aufwenden
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0294
**Card ID:** a2-aufwenden
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** Koos Zeit, Mühe, Kraft või Geld tähendab aufwenden ressursse eesmärgi nimel pühendama või panustama.
**PROPOSED_ET:** Koos Zeit, Mühe, Kraft või Geld tähendab aufwenden ressursside eesmärgi nimel pühendamist või panustamist.
**Problēma:** Pärast „tähendab” sobib siin nimisõnaline vorm: „pühendamist või panustamist”.
**LV etalons (konteksts):** Ar Zeit, Mühe, Kraft vai Geld aufwenden nozīmē veltīt vai ieguldīt resursus mērķim.
**DE konteksts:** aufwenden
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0295
**Card ID:** a2-aussteigen
**Field:** study.examples[0].lv
**CURRENT:** ma väljun järgmises peatuses.
**PROPOSED_ET:** ma lähen järgmises peatuses maha.
**Problēma:** „Väljuma” tähendab tavaliselt lahkumist; sõidukist väljumise kohta öeldakse loomulikult „maha minema”.
**LV etalons (konteksts):** es izkāpju nākamajā pieturā.
**DE konteksts:** aussteigen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0296
**Card ID:** a2-aussteigen
**Field:** study.examples[2].lv
**CURRENT:** me väljume jaamas.
**PROPOSED_ET:** me astume jaamas rongist välja.
**Problēma:** „Väljume jaamas” võib tähendada jaamast lahkumist; sõidukist maha tulek vajab täpsustust.
**LV etalons (konteksts):** mēs izkāpjam stacijā.
**DE konteksts:** aussteigen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0297
**Card ID:** a2-aussteigen
**Field:** study.examples[5].lv
**CURRENT:** ma pean siin väljuma.
**PROPOSED_ET:** ma pean siin maha minema.
**Problēma:** Ühistranspordist lahkumise kohta on eesti keeles loomulik „maha minema”, mitte lihtsalt „väljuma”.
**LV etalons (konteksts):** man šeit jāizkāpj.
**DE konteksts:** aussteigen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0298
**Card ID:** a2-auswählen
**Field:** study.comparison[2].meaning
**CURRENT:** välja otsima / valima
**PROPOSED_ET:** välja valima / valima
**Problēma:** „Välja otsima” tähendab otsides leidmist, mitte valikute hulgast valimist.
**LV etalons (konteksts):** izmeklēt / izvēlēties
**DE konteksts:** auswählen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0299
**Card ID:** a2-bahn
**Field:** study.examples[1].lv
**CURRENT:** rong/raudtee on täna väga täis.
**PROPOSED_ET:** rong on täna väga täis.
**Problēma:** „Raudtee on täis” ei ole loomulik ega vasta siin tõenäolisele tähendusele „rong”.
**LV etalons (konteksts):** vilciens/dzelzceļš šodien ir ļoti pilns.
**DE konteksts:** Bahn
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0300
**Card ID:** a2-becher
**Field:** etMain
**CURRENT:** kruus • klaas
**PROPOSED_ET:** kruus • tops
**Problēma:** Becher tähendab tavaliselt kruusi või topsi, mitte klaasi; klaas vastab pigem saksa sõnale Glas.
**LV etalons (konteksts):** krūze • glāze
**DE konteksts:** Becher
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0301
**Card ID:** a2-becher
**Field:** study.translation
**CURRENT:** kruus • klaas
**PROPOSED_ET:** kruus • tops
**Problēma:** Becher tähendab tavaliselt kruusi või topsi, mitte klaasi; klaas vastab pigem saksa sõnale Glas.
**LV etalons (konteksts):** krūze • glāze
**DE konteksts:** Becher
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0302
**Card ID:** a2-becher
**Field:** study.examples[1].lv
**CURRENT:** klaas on plastikust.
**PROPOSED_ET:** plastiktops on plastmassist.
**Problēma:** Näide tõlgib Becheri klaasiks, kuigi kontekst viitab plastist joogitopsile.
**LV etalons (konteksts):** glāze ir no plastmasas.
**DE konteksts:** Becher
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0303
**Card ID:** a2-bedienung
**Field:** study.important.text
**CURRENT:** die Bedienung ei tähenda peamiselt meeskonda. A2 tasemel on tähtsaimad tähendused teenindamine ja teenindaja.
**PROPOSED_ET:** die Bedienung ei tähenda peamiselt teenindust. A2 tasemel on tähtsaimad tähendused teenindamine ja teenindaja.
**Problēma:** Meeskond tähendab 'team'; lähteallika apkalpe tähendab siin teenindust ehk teenindamist.
**LV etalons (konteksts):** die Bedienung nav galvenokārt apkalpe. A2 līmenī svarīgākās nozīmes ir apkalpošana un apkalpotājs.
**DE konteksts:** Bedienung
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0304
**Card ID:** a2-bestellen
**Field:** study.important.text
**CURRENT:** bestellen ei ole peamine sõna tähenduse “harima” jaoks. A2 tasemel õpi bestellen tähenduses tellima või broneerima.
**PROPOSED_ET:** bestellen ei ole peamine sõna tähenduses “töötlema” jaoks. A2 tasemel õpi bestellen tähenduses tellima või broneerima.
**Problēma:** Harima tähendab kasvatama või õpetama; apstrādāt vastab siin tähendusele töötlema.
**LV etalons (konteksts):** bestellen nav galvenais vārds nozīmei “apstrādāt”. A2 līmenī mācies bestellen kā pasūtīt vai rezervēt.
**DE konteksts:** bestellen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0305
**Card ID:** a2-birne
**Field:** study.examples[4].lv
**CURRENT:** kas sa saad pirni vahetada?
**PROPOSED_ET:** kas sa saad lambipirni vahetada?
**Problēma:** Pirn on eesti keeles üheselt ka puuvili; elektrilise Birne tähendus tuleb siin täpsustada.
**LV etalons (konteksts):** vai vari nomainīt spuldzi?
**DE konteksts:** Birne
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0306
**Card ID:** a2-bitter
**Field:** study.examples[0].lv
**CURRENT:** kohv maitseb mõruvalt.
**PROPOSED_ET:** kohv maitseb mõrult.
**Problēma:** Eesti keeles kasutatakse siin määrsõna „mõrult“, mitte ebakohast tuletist „mõruvalt“.
**LV etalons (konteksts):** kafija garšo rūgti.
**DE konteksts:** bitter
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0307
**Card ID:** a2-borgen
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** mir borgen tähendab sageli endale laenama.
**PROPOSED_ET:** mir borgen tähendab sageli endale laenamist.
**Problēma:** Pärast verbi „tähendama“ peab siin olema tegevusnimi, mitte da-infinitiiv.
**LV etalons (konteksts):** mir borgen bieži nozīmē aizņemties sev.
**DE konteksts:** borgen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0308
**Card ID:** a2-borgen
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** dir/ihm borgen tähendab sageli teisele laenuks andma.
**PROPOSED_ET:** dir/ihm borgen tähendab sageli teisele laenuks andmist.
**Problēma:** Pärast verbi „tähendama“ peab siin olema tegevusnimi „andmist“.
**LV etalons (konteksts):** dir/ihm borgen bieži nozīmē aizdot citam.
**DE konteksts:** borgen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0309
**Card ID:** a2-brav
**Field:** study.examples[5].lv
**CURRENT:** ta on väga sõbralik.
**PROPOSED_ET:** ta on väga tubli.
**Problēma:** „Brav“ tähendab siin tublit või kuulekat, mitte sõbralikku.
**LV etalons (konteksts):** viņa ir ļoti draudzīga.
**DE konteksts:** brav
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0310
**Card ID:** a2-brennen
**Field:** study.examples[2].lv
**CURRENT:** tuli põleb veel.
**PROPOSED_ET:** lamp põleb veel.
**Problēma:** „Gaisma“ tähendab siin lampi või valgust; „tuli“ muudab tähenduse tuleks.
**LV etalons (konteksts):** gaisma vēl deg.
**DE konteksts:** brennen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0311
**Card ID:** a2-brennen
**Field:** study.examples[5].lv
**CURRENT:** supp kõrvetab suus.
**PROPOSED_ET:** supp kõrvetab suud.
**Problēma:** Eesti keeles öeldakse loomulikumalt „kõrvetab suud“, mitte „kõrvetab suus“.
**LV etalons (konteksts):** zupa dedzina mutē.
**DE konteksts:** brennen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0312
**Card ID:** a2-darüber
**Field:** study.translation
**CURRENT:** selle eest
**PROPOSED_ET:** selle kohta
**Problēma:** „Selle eest” tähendab ‘for it/in exchange’; darüber tähendab siin ‘selle kohta’ või ‘sellest’.
**LV etalons (konteksts):** par to
**DE konteksts:** darüber
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0313
**Card ID:** a2-dazu
**Field:** study.comparison[2].meaning
**CURRENT:** kohal / kaasas / pealegi
**PROPOSED_ET:** juurde / kaasas / pealegi
**Problēma:** „Kohal” tähendab ‘present/at the place’, mitte dazu tähendust ‘juurde/lisaks’.
**LV etalons (konteksts):** klāt / līdzi / turklāt
**DE konteksts:** dazu
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0314
**Card ID:** a2-drehen
**Field:** study.examples[3].lv
**CURRENT:** palun, mitte keerata!
**PROPOSED_ET:** palun, ärge keerake!
**Problēma:** Estonian field contains Latvian word „lūdzu”; use the Estonian equivalent „palun”.
**LV etalons (konteksts):** lūdzu, negrozīt!
**DE konteksts:** drehen
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0315
**Card ID:** a2-drehen
**Field:** study.examples[4].lv
**CURRENT:** ma lõikan leiba.
**PROPOSED_ET:** ma keeran leiba.
**Problēma:** „Lõikan” means ‘cut’; drehen means ‘turn/rotate’, not ‘cut’.
**LV etalons (konteksts):** es griežu maizi.
**DE konteksts:** drehen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0316
**Card ID:** a2-drücken
**Field:** study.examples[4].lv
**CURRENT:** ma trükin dokumendi.
**PROPOSED_ET:** ma vajutan dokumenti.
**Problēma:** „Trükin” means ‘print’; drücken means ‘press’, while ‘print’ corresponds to German drucken.
**LV etalons (konteksts):** es drukāju dokumentu.
**DE konteksts:** drücken
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0317
**Card ID:** a2-drücken
**Field:** study.examples[5].lv
**CURRENT:** klõpsake siin.
**PROPOSED_ET:** vajutage siia.
**Problēma:** „Klõpsake” means ‘click’; drücken means ‘press’, so the example should use „vajutage”.
**LV etalons (konteksts):** uzklikšķiniet šeit.
**DE konteksts:** drücken
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0318
**Card ID:** a2-durch
**Field:** study.examples[1].lv
**CURRENT:** ma sõidan mööda linna.
**PROPOSED_ET:** ma sõidan läbi linna.
**Problēma:** „Mööda linna” tähendab mööda või piki linna; durch vastab siin tähendusele „läbi linna”.
**LV etalons (konteksts):** es braucu pa pilsētu.
**DE konteksts:** durch
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0319
**Card ID:** a2-durch
**Field:** study.examples[2].lv
**CURRENT:** rohke harjutamisega inimene õpib.
**PROPOSED_ET:** rohke harjutamise kaudu õpitakse.
**Problēma:** Praegune sõnastus on ebaloomulik; „durch viel Übung” väljendub loomulikumalt harjutamise kaudu.
**LV etalons (konteksts):** ar daudz prakses cilvēks mācās.
**DE konteksts:** durch
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0320
**Card ID:** a2-durch
**Field:** study.examples[4].lv
**CURRENT:** ma sõidan bussiga.
**PROPOSED_ET:** ma sõidan bussiga läbi linna.
**Problēma:** „Bussiga” väljendab vahendit (mit), mitte durch-tähendust; näites puudub läbimise mõte.
**LV etalons (konteksts):** es braucu ar autobusu.
**DE konteksts:** durch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0321
**Card ID:** a2-durch
**Field:** study.examples[5].lv
**CURRENT:** vihma tõttu jääme koju.
**PROPOSED_ET:** me kõnnime vihma käes koju.
**Problēma:** „Vihma tõttu” tähendab põhjuse tõttu, mitte durch-vahendit või läbimist.
**LV etalons (konteksts):** lietus dēļ mēs paliekam mājās.
**DE konteksts:** durch
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0322
**Card ID:** a2-eigentlich
**Field:** study.examples[5].lv
**CURRENT:** see on tõsi.
**PROPOSED_ET:** see on tegelikult nii.
**Problēma:** „See on tõsi” tähendab „Das ist wahr”; eigentlich vajab siin tegelikkusele või tegelikule olukorrale viitavat adverbi.
**LV etalons (konteksts):** tas ir patiess.
**DE konteksts:** eigentlich
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0323
**Card ID:** a2-eigentlich
**Field:** study.comparison[2].meaning
**CURRENT:** siiras
**PROPOSED_ET:** tõene
**Problēma:** „Siiras” tähendab sincere; Latvian „patiess” vastab eesti keeles „tõene”, mitte „siiras”.
**LV etalons (konteksts):** patiess
**DE konteksts:** eigentlich
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0324
**Card ID:** a2-einschalten
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Inimeste või institutsioonide puhul tähendab see kaasama.
**PROPOSED_ET:** Inimeste või institutsioonide puhul tähendab see kaasamist.
**Problēma:** Verb pärast väljendit „tähendab” peab siin olema ma-infinitiivi asemel tegevusnimi: „kaasamist”.
**LV etalons (konteksts):** Cilvēkiem vai institūcijām tas nozīmē iesaistīt.
**DE konteksts:** einschalten
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0325
**Card ID:** a2-erfahren
**Field:** study.examples[5].lv
**CURRENT:** ma tean juba vastust.
**PROPOSED_ET:** ma sain vastusest juba teada.
**Problēma:** „Ma tean” väljendab teadmist (wissen), mitte teada saamist (erfahren).
**LV etalons (konteksts):** es jau zinu atbildi.
**DE konteksts:** erfahren
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0326
**Card ID:** a2-fach
**Field:** study.comparison[2].meaning
**CURRENT:** kapiriiul
**PROPOSED_ET:** kapilahter
**Problēma:** Kapiriiul tähendab kapi riiulit, mitte üldiselt kapi lahtrit või sektsiooni.
**LV etalons (konteksts):** skapja nodalījums
**DE konteksts:** Fach
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0327
**Card ID:** a2-fach
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Kapis, kotis või riiulis tähendab Fach lahter.
**PROPOSED_ET:** Kapis, kotis või riiulis tähendab Fach lahtrit.
**Problēma:** Verbiga „tähendama” kasutatakse siin partitiivi: „tähendab lahtrit”.
**LV etalons (konteksts):** Skapī, somā vai plauktā nozīmē nodalījums.
**DE konteksts:** Fach
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0328
**Card ID:** a2-fall
**Field:** study.examples[2].lv
**CURRENT:** kukkumine trepist oli ohtlik.
**PROPOSED_ET:** trepist kukkumine oli ohtlik.
**Problēma:** Eesti keeles on loomulikum paigutada määrus sõna „kukkumine” ette: „trepist kukkumine”.
**LV etalons (konteksts):** kritiens no kāpnēm bija bīstams.
**DE konteksts:** Fall
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0329
**Card ID:** a2-fehlen
**Field:** study.examples[3].lv
**CURRENT:** mis sul puudub?
**PROPOSED_ET:** Mis sul viga on?
**Problēma:** Lause küsib, mis inimesel viga on, mitte seda, millest tal puudu on.
**LV etalons (konteksts):** kas tev kaiš?
**DE konteksts:** fehlen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0330
**Card ID:** a2-fest
**Field:** study.examples[2].lv
**CURRENT:** mul on kindel kohtumisaeg.
**PROPOSED_ET:** mul on kindel tähtaeg.
**Problēma:** Läti „termiņš” tähendab tähtaega, mitte kohtumisaega.
**LV etalons (konteksts):** man ir fiksēts termiņš.
**DE konteksts:** fest
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0331
**Card ID:** a2-geschäft
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** ein gutes Geschäft machen tähendab head tehingut tegema.
**PROPOSED_ET:** ein gutes Geschäft machen tähendab hea tehingu tegemist.
**Problēma:** Väljend „head tehingut tegema” on pärast sõna „tähendab” ebaloomulik; sobib nimisõnaline vorm „hea tehingu tegemist”.
**LV etalons (konteksts):** ein gutes Geschäft machen nozīmē izdarīt labu darījumu.
**DE konteksts:** Geschäft
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0332
**Card ID:** a2-gewinnen
**Field:** study.examples[5].lv
**CURRENT:** ma saan homme paki.
**PROPOSED_ET:** ma võidan homme auhinna.
**Problēma:** „Saan paki” tähendab paki kättesaamist, mitte võitmist; see ei vasta saksa verbile „gewinnen”.
**LV etalons (konteksts):** es rīt saņemšu paciņu.
**DE konteksts:** gewinnen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0333
**Card ID:** a2-grund
**Field:** study.examples[4].lv
**CURRENT:** maal on liivane põhi.
**PROPOSED_ET:** maapind on liivane.
**Problēma:** „Maal on liivane põhi” viitab pigem millegi põhjale; siin tähendab Grund maapinda või pinnast.
**LV etalons (konteksts):** zemei ir smilšaina grunts.
**DE konteksts:** Grund
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0334
**Card ID:** a2-grund
**Field:** study.comparison[3].meaning
**CURRENT:** maa / põrand
**PROPOSED_ET:** maa / pinnas
**Problēma:** „Põrand” on saksa keeles tavaliselt „Boden”, mitte „Grund”; „Grund” võib tähendada maad või pinnast.
**LV etalons (konteksts):** zeme / grīda
**DE konteksts:** Grund
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0335
**Card ID:** a2-holz
**Field:** study.examples[5].lv
**CURRENT:** metsas kasvab palju puid.
**PROPOSED_ET:** metsas leidub palju puitu.
**Problēma:** Praegune lause tähendab puid ehk elusaid puid, kuid „Holz” tähendab puitu kui materjali, mitte puud.
**LV etalons (konteksts):** mežā aug daudz koku.
**DE konteksts:** Holz
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0336
**Card ID:** a2-je
**Field:** study.examples[0].lv
**CURRENT:** kas sa oled kunagi Berliinis käinud?
**PROPOSED_ET:** Kas sa oled kunagi Berliinis käinud?
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** vai tu jebkad esi bijis Berlīnē?
**DE konteksts:** je
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0337
**Card ID:** a2-je
**Field:** study.examples[1].lv
**CURRENT:** see maksab kolm eurot tüki kohta.
**PROPOSED_ET:** See maksab kolm eurot tüki kohta.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** tas maksā trīs eiro par gabalu.
**DE konteksts:** je
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0338
**Card ID:** a2-je
**Field:** study.examples[2].lv
**CURRENT:** mida varem, seda parem.
**PROPOSED_ET:** Mida varem, seda parem.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** jo agrāk, jo labāk.
**DE konteksts:** je
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0339
**Card ID:** a2-je
**Field:** study.examples[3].lv
**CURRENT:** ma ei ole seda kunagi näinud.
**PROPOSED_ET:** Ma ei ole seda kunagi näinud.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** es to nekad neesmu redzējis.
**DE konteksts:** je
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0340
**Card ID:** a2-kamm
**Field:** study.examples[0].lv
**CURRENT:** mul on vaja kammi.
**PROPOSED_ET:** Mul on vaja kammi.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** man vajag ķemmi.
**DE konteksts:** Kamm
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0341
**Card ID:** a2-kamm
**Field:** study.examples[1].lv
**CURRENT:** kuke hari on punane.
**PROPOSED_ET:** Kuke hari on punane.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** gaiļa sekste ir sarkana.
**DE konteksts:** Kamm
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0342
**Card ID:** a2-kamm
**Field:** study.examples[2].lv
**CURRENT:** me kõnnime mäeharjal.
**PROPOSED_ET:** Me kõnnime mäeharjal.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** mēs ejam pa kalna kori.
**DE konteksts:** Kamm
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0343
**Card ID:** a2-kamm
**Field:** study.examples[3].lv
**CURRENT:** ta kammib end kammiga.
**PROPOSED_ET:** Ta kammib end kammiga.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** viņa ķemmējas ar ķemmi.
**DE konteksts:** Kamm
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0344
**Card ID:** a2-kamm
**Field:** study.examples[4].lv
**CURRENT:** kamm on vannitoas.
**PROPOSED_ET:** Kamm on vannitoas.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** ķemme atrodas vannas istabā.
**DE konteksts:** Kamm
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0345
**Card ID:** a2-kamm
**Field:** study.examples[5].lv
**CURRENT:** mäehari on kitsas.
**PROPOSED_ET:** Mäehari on kitsas.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** kalna kore ir šaura.
**DE konteksts:** Kamm
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0346
**Card ID:** a2-kaum
**Field:** study.examples[0].lv
**CURRENT:** mul pole peaaegu üldse aega.
**PROPOSED_ET:** Mul pole peaaegu üldse aega.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** man gandrīz nav laika.
**DE konteksts:** kaum
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0347
**Card ID:** a2-kaum
**Field:** study.examples[1].lv
**CURRENT:** teda on vaevu võimalik mõista.
**PROPOSED_ET:** Teda on vaevu võimalik mõista.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** viņu gandrīz nevar saprast.
**DE konteksts:** kaum
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0348
**Card ID:** a2-kaum
**Field:** study.examples[2].lv
**CURRENT:** ta on just saabunud.
**PROPOSED_ET:** Ta on vaevu saabunud.
**Problēma:** Kaum tähendab siin „vaevu/napilt”, mitte „just”; „just saabunud” väljendab äsjast saabumist.
**LV etalons (konteksts):** viņa tikko ir ieradusies.
**DE konteksts:** kaum
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0349
**Card ID:** a2-kaum
**Field:** study.examples[3].lv
**CURRENT:** vaevu oli ta kohal, kui hakkas vihma sadama.
**PROPOSED_ET:** Vaevalt oli ta kohal, kui hakkas vihma sadama.
**Problēma:** Selles konstruktsioonis on loomulikum ja tähenduselt täpsem „vaevalt oli ..., kui ...”.
**LV etalons (konteksts):** tikko viņš bija klāt, sāka līt.
**DE konteksts:** kaum
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0350
**Card ID:** a2-kaum
**Field:** study.examples[4].lv
**CURRENT:** see on vaevalt võimalik.
**PROPOSED_ET:** See on vaevalt võimalik.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** tas gandrīz nav iespējams.
**DE konteksts:** kaum
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0351
**Card ID:** a2-kaum
**Field:** study.examples[5].lv
**CURRENT:** seda on raske uskuda.
**PROPOSED_ET:** Seda on raske uskuda.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** tam ir grūti noticēt.
**DE konteksts:** kaum
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0352
**Card ID:** a2-kennen
**Field:** study.examples[1].lv
**CURRENT:** kas te tunnete seda naist?
**PROPOSED_ET:** Kas te tunnete seda naist?
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** vai jūs pazīstat šo sievieti?
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0353
**Card ID:** a2-kennen
**Field:** study.examples[2].lv
**CURRENT:** kus te tutvusite?
**PROPOSED_ET:** Kus te tutvusite?
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** kur jūs iepazināties?
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0354
**Card ID:** a2-kennen
**Field:** study.examples[3].lv
**CURRENT:** ma tunnen teda.
**PROPOSED_ET:** Ma tunnen teda.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** es viņu pazīstu.
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0355
**Card ID:** a2-kennen
**Field:** study.examples[4].lv
**CURRENT:** kas sa tunned seda linna?
**PROPOSED_ET:** Kas sa tunned seda linna?
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** pazīt; wissen
**DE konteksts:** kennen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0356
**Card ID:** a2-wissen
**Field:** study.examples[1].lv
**CURRENT:** kust te seda teate?
**PROPOSED_ET:** Kust te seda teate?
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** no kurienes jūs to zināt?
**DE konteksts:** wissen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0357
**Card ID:** a2-wissen
**Field:** study.examples[2].lv
**CURRENT:** ma tean vastust.
**PROPOSED_ET:** Ma tean vastust.
**Problēma:** Lause alguses peab olema suur algustäht.
**LV etalons (konteksts):** es zinu atbildi.
**DE konteksts:** wissen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0358
**Card ID:** a2-kleben
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Kui alus on sedel, plaaster või sõrmed, kirjeldab kleben sageli seisundit: külge kleepuma või kleepunud olema.
**PROPOSED_ET:** Kui alus on sedel, plaaster või sõrmed, kirjeldab kleben sageli seisundit: külge kleepuma või kleepuv olema.
**Problēma:** Sõrmed on kleepuvad, mitte tingimata millegi külge kleepunud; „kleepuv olema” vastab siin tähendusele paremini.
**LV etalons (konteksts):** Ja subjekts ir zīmīte, plāksteris vai pirksti, kleben bieži apraksta stāvokli: pielipt vai būt lipīgam.
**DE konteksts:** kleben
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0359
**Card ID:** a2-kraft
**Field:** study.examples[4].lv
**CURRENT:** ta on hea spetsialist.
**PROPOSED_ET:** tal on palju jõudu.
**Problēma:** „Ta on hea spetsialist” ei väljenda Krafti tähendust ega sobitu saksa märksõnaga.
**LV etalons (konteksts):** viņa ir laba speciāliste.
**DE konteksts:** Kraft
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0360
**Card ID:** a2-leiden
**Field:** study.examples[0].lv
**CURRENT:** ta kannatab peavalu käes.
**PROPOSED_ET:** ta kannatab peavalu all.
**Problēma:** Eesti keeles on selle tähenduse loomulikum ühend „kannatama peavalu all”.
**LV etalons (konteksts):** viņš cieš no galvassāpēm.
**DE konteksts:** leiden
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0361
**Card ID:** a2-leiden
**Field:** study.comparison[1].meaning
**CURRENT:** millegi käes põdema / millegi all kannatama
**PROPOSED_ET:** haigust põdema / millegi all kannatama
**Problēma:** „Põdema” käib haiguse, mitte üldiselt „millegi käes” kohta.
**LV etalons (konteksts):** slimot ar / ciest no
**DE konteksts:** leiden
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0362
**Card ID:** a2-leiden
**Field:** study.comparison[3].meaning
**CURRENT:** mitte kannatama
**PROPOSED_ET:** mitte taluma
**Problēma:** „Nicht leiden können” tähendab siin „mitte taluma”, mitte „mitte kannatama”.
**LV etalons (konteksts):** nevarēt paciest
**DE konteksts:** leiden
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0363
**Card ID:** a2-leihen
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** sich etwas leihen tähendab endale laenama.
**PROPOSED_ET:** sich etwas leihen tähendab endale midagi laenuks võtma.
**Problēma:** „Endale laenama” on ebaõige; laenaja võtab midagi laenuks.
**LV etalons (konteksts):** sich etwas leihen nozīmē aizņemties sev.
**DE konteksts:** leihen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0364
**Card ID:** a2-leihen
**Field:** study.important.text
**CURRENT:** leihen ei ole sama mis kaufen.
**PROPOSED_ET:** laenuks võtmine ei ole sama mis ostmine.
**Problēma:** Eestikeelsesse lausesse on jäänud tõlkimata saksa sõna „kaufen”.
**LV etalons (konteksts):** leihen nav tas pats, kas kaufen.
**DE konteksts:** leihen
**Smagums:** MEDIUM
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0365
**Card ID:** a2-leiter
**Field:** study.examples[4].lv
**CURRENT:** palun, too redelid keldrist.
**PROPOSED_ET:** palun too redel keldrist.
**Problēma:** „lūdzu” on läti võõrkeelejäänuk; lisaks on algses näites ainsus „redel”.
**LV etalons (konteksts):** lūdzu, iznes kāpnes no pagraba.
**DE konteksts:** Leiter
**Smagums:** CRITICAL
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0366
**Card ID:** a2-meinen
**Field:** study.examples[0].lv
**CURRENT:** mida sa mõtled?
**PROPOSED_ET:** mida sa arvad?
**Problēma:** Selles näites küsitakse arvamust; „mida sa mõtled?” viitab pigem mõtlemisele või tähendusele.
**LV etalons (konteksts):** ko tu domā?
**DE konteksts:** meinen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0367
**Card ID:** a2-meinen
**Field:** study.examples[2].lv
**CURRENT:** keda sa mõtled?
**PROPOSED_ET:** keda sa silmas pead?
**Problēma:** „Keda sa mõtled?” ei ole eesti keeles loomulik vaste tähendusele „keda sa mõtled/mean”.
**LV etalons (konteksts):** kuru tu domā?
**DE konteksts:** meinen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0368
**Card ID:** a2-meinen
**Field:** study.important.text
**CURRENT:** meinen osutab sageli arvamusele või konkreetsele mõeldud asjale.
**PROPOSED_ET:** meinen viitab sageli arvamusele või konkreetsele asjale, mida silmas peetakse.
**Problēma:** „Konkreetne mõeldud asi” on kohmakas; soovitatud sõnastus on loomulikum.
**LV etalons (konteksts):** meinen bieži norāda uz viedokli vai konkrētu domāto lietu.
**DE konteksts:** meinen
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0369
**Card ID:** a2-merken
**Field:** study.examples[3].lv
**CURRENT:** jäta meelde see number.
**PROPOSED_ET:** jäta see number meelde.
**Problēma:** Eestikeelne sõnajärg on ebaloomulik; käskivas väljendis paikneb „meelde“ pärast objekti.
**LV etalons (konteksts):** iegaumē šo numuru.
**DE konteksts:** merken
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0370
**Card ID:** a2-merken
**Field:** study.examples[4].lv
**CURRENT:** mul on raske nimesid meelde jätta.
**PROPOSED_ET:** mul on raske sõnu meelde jätta.
**Problēma:** Läti „vārdus“ tähendab siin sõnu, mitte nimesid.
**LV etalons (konteksts):** man ir grūti iegaumēt vārdus.
**DE konteksts:** merken
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0371
**Card ID:** a2-nutzen
**Field:** study.examples[2].lv
**CURRENT:** see ei anna mulle midagi.
**PROPOSED_ET:** sellest pole mulle mingit kasu.
**Problēma:** Väljend „Das nutzt mir nichts“ tähendab, et millestki pole kasu, mitte sõna-sõnalt mitteandmist.
**LV etalons (konteksts):** tas man neko nedod.
**DE konteksts:** nutzen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0372
**Card ID:** a2-passieren
**Field:** study.examples[3].lv
**CURRENT:** mul juhtus viga.
**PROPOSED_ET:** ma tegin vea.
**Problēma:** Eesti keeles ei öelda „mul juhtus viga“; loomulik vaste on „ma tegin vea“.
**LV etalons (konteksts):** man gadījās kļūda.
**DE konteksts:** passieren
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0373
**Card ID:** a2-rolle
**Field:** study.examples[3].lv
**CURRENT:** mul on vaja rulli paberit.
**PROPOSED_ET:** mul on vaja paberirulli.
**Problēma:** Estonian uses a compound noun here; “rulli paberit” is unnatural in this context.
**LV etalons (konteksts):** man vajag papīra rulli.
**DE konteksts:** Rolle
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0374
**Card ID:** a2-rolle
**Field:** study.important.text
**CURRENT:** Rolle on sageli abstraktne tähendus, mitte ainult ese.
**PROPOSED_ET:** Rolle tähistab sageli abstraktset mõistet, mitte ainult eset.
**Problēma:** The current sentence incorrectly presents Rolle as a meaning rather than a word denoting an abstract concept.
**LV etalons (konteksts):** Rolle bieži ir abstrakta nozīme, ne tikai priekšmets.
**DE konteksts:** Rolle
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0375
**Card ID:** a2-satz
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Koos Reifen, Zins või Kaffee muutub tähendus spetsiifiliseks: komplekt, määr või sete.
**PROPOSED_ET:** Koos sõnadega Reifen, Zins või Kaffee muutub tähendus spetsiifiliseks: komplekt, määr või sete.
**Problēma:** The phrase “Koos Reifen, Zins või Kaffee” lacks a grammatical case-marked noun introducing the German words.
**LV etalons (konteksts):** Ar Reifen, Zins vai Kaffee nozīme kļūst specifiska: komplekts, likme vai nogulsnes.
**DE konteksts:** Satz
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0376
**Card ID:** a2-schalten
**Field:** study.examples[4].lv
**CURRENT:** valgusfoor lülitub rohelisele.
**PROPOSED_ET:** valgusfoor lülitub roheliseks.
**Problēma:** With “lülituma,” a change into a state takes the translative case: roheliseks, not rohelisele.
**LV etalons (konteksts):** luksofors pārslēdzas uz zaļo.
**DE konteksts:** schalten
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0377
**Card ID:** a2-scheinen
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** Päike või valgus + scheinen tähendab paistma.
**PROPOSED_ET:** Päikese või valguse puhul tähendab scheinen „paistma”.
**Problēma:** The reformulation avoids an awkward formula and makes the grammatical relation explicit.
**LV etalons (konteksts):** Saule vai gaisma + scheinen nozīmē spīdēt.
**DE konteksts:** scheinen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0378
**Card ID:** a2-schlange
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** Kassa, piletite või inimeste puhul tähendab Schlange järjekord.
**PROPOSED_ET:** Kassa, piletite või inimeste puhul tähendab Schlange järjekorda.
**Problēma:** Verb „tähendama” nõuab siin partitiivi: „tähendab ... järjekorda”.
**LV etalons (konteksts):** Pie kases, biļetēm vai cilvēkiem Schlange nozīmē rinda.
**DE konteksts:** Schlange
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0379
**Card ID:** a2-schließen
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Mit Schlüssel kasutatakse sõna abschließen, kui on vaja rõhutada lukustamist.
**PROPOSED_ET:** Võtmega lukustamise rõhutamiseks kasutatakse sõna abschließen.
**Problēma:** Eestikeelsesse lausesse on jäänud tõlkimata saksakeelne fraas „Mit Schlüssel”.
**LV etalons (konteksts):** Mit Schlüssel lieto abschließen, ja vajag uzsvērt aizslēgšanu.
**DE konteksts:** schließen
**Smagums:** MEDIUM
**Kategorija:** FOREIGN_REMNANT
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0380
**Card ID:** a2-sich-unterhalten
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** sich unterhalten tähendab tavaliselt kellegagi vestlema.
**PROPOSED_ET:** sich unterhalten tähendab tavaliselt kellegagi vestlemist.
**Problēma:** Pärast „tähendab” sobib siin tegevusnimi „vestlemist”, mitte da-tegevusnimi.
**LV etalons (konteksts):** sich unterhalten parasti nozīmē sarunāties ar kādu.
**DE konteksts:** sich unterhalten
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0381
**Card ID:** a2-sich-unterhalten
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Kui kontekst on film, üritus või õhtu, võib see tähendada lõbutsema.
**PROPOSED_ET:** Kui kontekst on film, üritus või õhtu, võib see tähendada lõbutsemist.
**Problēma:** Pärast „tähendada” peab olema tegevusnimi „lõbutsemist”.
**LV etalons (konteksts):** Ja konteksts ir filma, pasākums vai vakars, tas var nozīmēt izklaidēties.
**DE konteksts:** sich unterhalten
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0382
**Card ID:** a2-stellen
**Field:** study.examples[0].lv
**CURRENT:** Ma panen pudeli lauale.
**PROPOSED_ET:** Ma panen pudeli lauale.
**Problēma:** Estonian is correct for the Latvian sentence, but the source meaning is standing, not parking; the example does not match the supplied Latvian.
**LV etalons (konteksts):** Es nolieku pudeli uz galda.
**DE konteksts:** stellen
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0383
**Card ID:** a2-stelle
**Field:** study.examples[0].lv
**CURRENT:** selles kohas ei tohi parkida.
**PROPOSED_ET:** selles kohas ei tohi seista.
**Problēma:** Parkida means ‘to park’, whereas the source says ‘to stand’.
**LV etalons (konteksts):** šajā vietā nedrīkst stāvēt.
**DE konteksts:** Stelle
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0384
**Card ID:** a2-stelle
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** eine Stelle suchen tähendab tavaliselt töökohta otsima.
**PROPOSED_ET:** eine Stelle suchen tähendab tavaliselt töökoha otsimist.
**Problēma:** After tähendab, the activity should be expressed as a noun phrase in the partitive: töökoha otsimist.
**LV etalons (konteksts):** eine Stelle suchen parasti nozīmē meklēt darba vietu.
**DE konteksts:** Stelle
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0385
**Card ID:** a2-stelle
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** im Text / an dieser Stelle tähendab konkreetset kohta tekstis või olukorras.
**PROPOSED_ET:** im Text / an dieser Stelle tähendab konkreetset kohta tekstis või konkreetses olukorras.
**Problēma:** The added adjective makes the second sense clearer and more idiomatic in Estonian.
**LV etalons (konteksts):** im Text / an dieser Stelle nozīmē konkrētu vietu tekstā vai situācijā.
**DE konteksts:** Stelle
**Smagums:** LOW
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0386
**Card ID:** a2-tragen
**Field:** study.examples[1].lv
**CURRENT:** ta kannab last käte peal.
**PROPOSED_ET:** ta kannab last süles.
**Problēma:** Käte peal is a literal calque; a child is naturally carried süles in this context.
**LV etalons (konteksts):** viņš nes bērnu uz rokām.
**DE konteksts:** tragen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0387
**Card ID:** a2-übrig
**Field:** study.examples[4].lv
**CURRENT:** ülejääk jääb üle.
**PROPOSED_ET:** ülejääk jääb alles.
**Problēma:** Ülejääk jääb üle on ebaloomulik ja kordab sama tähendust; jääb alles on loomulikum.
**LV etalons (konteksts):** atlikums paliek pāri.
**DE konteksts:** übrig
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0388
**Card ID:** a2-übrig
**Field:** study.important.text
**CURRENT:** übrig ei tähenda lihtsalt “üleliigne” kui ebavajalik.
**PROPOSED_ET:** übrig ei tähenda lihtsalt „üleliigne“ tähenduses „ebavajalik“.
**Problēma:** Praegune võrdlusfraas „kui ebavajalik“ on eesti keeles kohmakas ja mitmetimõistetav.
**LV etalons (konteksts):** übrig nenozīmē vienkārši “lieks” kā nevajadzīgs.
**DE konteksts:** übrig
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0389
**Card ID:** a2-übung
**Field:** study.examples[3].lv
**CURRENT:** praktika teeb meistriks.
**PROPOSED_ET:** harjutamine teeb meistriks.
**Problēma:** Eesti tuntud ja loomulik väljend on „harjutamine teeb meistriks“; praktika tähendab siin pigem töökogemust.
**LV etalons (konteksts):** prakse dara meistaru.
**DE konteksts:** Übung
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0390
**Card ID:** a2-umsonst
**Field:** study.important.text
**CURRENT:** umsonst puhul võib kaks väga erinevat tähendust segi minna.
**PROPOSED_ET:** Sõna „umsonst“ puhul võivad kaks väga erinevat tähendust segi minna.
**Problēma:** „Umsonst puhul“ vajab nimisõna; ka mitmuse vorm „võivad tähendused“ on siin loomulikum.
**LV etalons (konteksts):** umsonst var sajaukt divas ļoti atšķirīgas nozīmes.
**DE konteksts:** umsonst
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0391
**Card ID:** a2-urlaub-study
**Field:** study.examples[4].lv
**CURRENT:** puhkusel (töö).
**PROPOSED_ET:** puhkus töölt.
**Problēma:** „Puhkusel (töö)“ ei ole loomulik eestikeelne märgend; tähendus on puhkus töölt.
**LV etalons (konteksts):** atvaļinājumā (darbs).
**DE konteksts:** Urlaub
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0392
**Card ID:** a2-verbinden
**Field:** study.tip.leftBlocks[0].text
**CURRENT:** Kui kaks asja saavad seotuks või kokku, kasutatakse sageli verbinden.
**PROPOSED_ET:** Kui kaks asja seotakse või ühendatakse, kasutatakse sageli sõna verbinden.
**Problēma:** „Saavad seotuks või kokku“ on kohmakas; aktiivne sõnastus on loomulikum ja täpsem.
**LV etalons (konteksts):** Ja divas lietas kļūst saistītas vai kopā, bieži lieto verbinden.
**DE konteksts:** verbinden
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0393
**Card ID:** a2-verlangen
**Field:** study.translation
**CURRENT:** nõudma • taotlema
**PROPOSED_ET:** nõudma • soovima
**Problēma:** Taotlema tähendab eesti keeles millegi taotlemist või avalduse esitamist, mitte saksa verlangen'i teist põhitähendust.
**LV etalons (konteksts):** prasīt • pieprasīt
**DE konteksts:** verlangen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0394
**Card ID:** a2-verlangen
**Field:** study.examples[2].lv
**CURRENT:** Seadus nõuab seda nii.
**PROPOSED_ET:** Seadus nõuab seda.
**Problēma:** „Seda nii“ on selles lauses tarbetu ja ebaloomulik lisand.
**LV etalons (konteksts):** Likums to tā pieprasa.
**DE konteksts:** verlangen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0395
**Card ID:** a2-vorstellen
**Field:** study.translation
**CURRENT:** tutvustama
**PROPOSED_ET:** tutvustama • ette kujutama • esitlema
**Problēma:** Kaardi näited õpetavad lisaks tutvustamisele ka tähendusi ette kujutama ja esitlema, kuid tõlge neid ei kajasta.
**LV etalons (konteksts):** iepazīstināt
**DE konteksts:** vorstellen
**Smagums:** HIGH
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0396
**Card ID:** a2-wagen
**Field:** study.important.text
**CURRENT:** der Wagen = auto või vagun (die Wagen). wagen = julgema — see on teine sõna.
**PROPOSED_ET:** der Wagen = auto või vagun; mitmuses die Wagen. wagen = julgema — see on teine sõna.
**Problēma:** Sulgudes olev „die Wagen“ jätab ebaselgeks, et tegu on nimisõna mitmuse, mitte ainsuse vormiga.
**LV etalons (konteksts):** der Wagen = automašīna vai vagons (die Wagen). wagen = uzdrošināties — tas ir cits vārds.
**DE konteksts:** Wagen
**Smagums:** MEDIUM
**Kategorija:** GRAMMAR
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0397
**Card ID:** a2-wählen
**Field:** study.examples[0].lv
**CURRENT:** ma valin menüü • valikmenüü
**PROPOSED_ET:** ma valin menüü • valiku
**Problēma:** „Valikmenüü“ tähendab eesti keeles tavaliselt rippmenüüd, mitte üldiselt menüü valimist.
**LV etalons (konteksts):** es izvēlos ēdienkarti • izvēlni
**DE konteksts:** wählen
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0398
**Card ID:** a2-während
**Field:** study.examples[5].lv
**CURRENT:** ma õpin, kuni lapsed magavad.
**PROPOSED_ET:** ma õpin, samal ajal kui lapsed magavad.
**Problēma:** „Kuni“ tähendab tavaliselt „until“; see muudab saksa „während“ tähenduse mitmetimõistetavaks.
**LV etalons (konteksts):** es mācos, kamēr bērni guļ.
**DE konteksts:** während
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0399
**Card ID:** a2-wechseln
**Field:** study.comparison[4].meaning
**CURRENT:** muutma / ümber muutma
**PROPOSED_ET:** muutma / ümber tegema
**Problēma:** „Ümber muutma“ ei ole loomulik eestikeelne ühend; sobiv vaste on „ümber tegema“.
**LV etalons (konteksts):** mainīt / izmainīt
**DE konteksts:** wechseln
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0400
**Card ID:** a2-wechseln
**Field:** study.important.text
**CURRENT:** wechseln ei ole ainus sõna “muutma”.
**PROPOSED_ET:** wechseln ei ole ainus sõna, mis tähendab „vahetama“.
**Problēma:** Praegune lause väidab ekslikult, et „wechseln“ tähendab „muutma“, kuigi põhitähendus on „vahetama“.
**LV etalons (konteksts):** wechseln nav vienīgais vārds “mainīt”.
**DE konteksts:** wechseln
**Smagums:** MEDIUM
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0401
**Card ID:** a2-ziehen
**Field:** study.comparison[4].meaning
**CURRENT:** minema laskma / tõmbuda laskma
**PROPOSED_ET:** minema laskma / venima
**Problēma:** „Tõmbuda laskma“ ei ole siin loomulik vaste tähendusele „venima“ või „pikaks venima“.
**LV etalons (konteksts):** ļaut aiziet / ievilkties
**DE konteksts:** ziehen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0402
**Card ID:** a2-ziehen
**Field:** study.tip.leftBlocks[1].text
**CURRENT:** Kui näed es zieht, tähendab see sageli “tõmbab tuult”.
**PROPOSED_ET:** Kui näed „es zieht“, tähendab see sageli, et kuskil tõmbab.
**Problēma:** „Tõmbab tuult“ on ebaloomulik kalkeeritud ühend; eesti keeles öeldakse lihtsalt „tõmbab“.
**LV etalons (konteksts):** Ja redzi es zieht, tas bieži nozīmē “velk caurvējš”.
**DE konteksts:** ziehen
**Smagums:** MEDIUM
**Kategorija:** NATURALNESS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0403
**Card ID:** a2-zunehmen
**Field:** study.comparison[3].meaning
**CURRENT:** ronima / kasvama
**PROPOSED_ET:** tõusma / kasvama
**Problēma:** Arvude ja hindade puhul tähendab „kāpt“ „tõusma“, mitte „ronima“.
**LV etalons (konteksts):** kāpt / pieaugt
**DE konteksts:** zunehmen
**Smagums:** MEDIUM
**Kategorija:** TRANSLATION
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0404
**Card ID:** a2-zurzeit
**Field:** study.comparison[0].meaning
**CURRENT:** praegu / sel hetkel / hetkel
**PROPOSED_ET:** praegu / praegu / hetkel
**Problēma:** „Sel hetkel“ viitab tavaliselt konkreetsele varasemale või mainitud hetkele, mitte praegusele ajavahemikule.
**LV etalons (konteksts):** pašlaik / šobrīd / patlaban
**DE konteksts:** zurzeit
**Smagums:** LOW
**Kategorija:** SEMANTICS
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0405
**Card ID:** a2-hoeren
**Field:** study.examples[1].lv
**CURRENT:** lapsed kuulavad lugu.
**PROPOSED_ET:** Lapsed kuulavad lugu.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** bērni klausās stāstu.
**DE konteksts:** hören
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0406
**Card ID:** a2-hoeren
**Field:** study.examples[2].lv
**CURRENT:** ma kuulen sind.
**PROPOSED_ET:** Ma kuulen sind.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es tevi dzirdu.
**DE konteksts:** hören
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0407
**Card ID:** a2-sprechen
**Field:** study.examples[1].lv
**CURRENT:** me räägime tööst.
**PROPOSED_ET:** Me räägime tööst.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mēs runājam par darbu.
**DE konteksts:** sprechen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0408
**Card ID:** a2-sprechen
**Field:** study.examples[2].lv
**CURRENT:** ma räägin saksa keelt.
**PROPOSED_ET:** Ma räägin saksa keelt.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es runāju vāciski.
**DE konteksts:** sprechen
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0409
**Card ID:** a2-gross
**Field:** study.examples[1].lv
**CURRENT:** maja on suur.
**PROPOSED_ET:** Maja on suur.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** māja ir liela.
**DE konteksts:** groß
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0410
**Card ID:** a2-hoch
**Field:** study.examples[1].lv
**CURRENT:** mägi on kõrge.
**PROPOSED_ET:** Mägi on kõrge.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** kalns ir augsts.
**DE konteksts:** hoch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0411
**Card ID:** a2-klein
**Field:** study.examples[1].lv
**CURRENT:** tuba on väike.
**PROPOSED_ET:** Tuba on väike.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** istaba ir maza.
**DE konteksts:** klein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0412
**Card ID:** a2-klein
**Field:** study.examples[2].lv
**CURRENT:** laps on veel väike.
**PROPOSED_ET:** Laps on veel väike.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** bērns vēl ir mazs.
**DE konteksts:** klein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0413
**Card ID:** a2-klein
**Field:** study.examples[4].lv
**CURRENT:** laps on väike.
**PROPOSED_ET:** Laps on väike.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** bērns ir mazs.
**DE konteksts:** klein
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0414
**Card ID:** a2-leise
**Field:** study.examples[1].lv
**CURRENT:** palun, ole vaikne.
**PROPOSED_ET:** Palun, ole vaikne.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** lūdzu, esi kluss.
**DE konteksts:** leise
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0415
**Card ID:** a2-leise
**Field:** study.examples[2].lv
**CURRENT:** muusika on vaikne.
**PROPOSED_ET:** Muusika on vaikne.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** mūzika ir klusa.
**DE konteksts:** leise
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0416
**Card ID:** a2-leise
**Field:** study.examples[3].lv
**CURRENT:** palun, räägi vaikselt.
**PROPOSED_ET:** Palun, räägi vaikselt.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** lūdzu, runā klusi.
**DE konteksts:** leise
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0417
**Card ID:** a2-noch
**Field:** study.examples[1].lv
**CURRENT:** ma olen veel kodus.
**PROPOSED_ET:** Ma olen veel kodus.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es vēl esmu mājās.
**DE konteksts:** noch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0418
**Card ID:** a2-noch
**Field:** study.examples[2].lv
**CURRENT:** kas sa oled veel siin?
**PROPOSED_ET:** Kas sa oled veel siin?
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** vai tu vēl esi šeit?
**DE konteksts:** noch
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0419
**Card ID:** a2-erst
**Field:** study.examples[1].lv
**CURRENT:** ma olen siin alles tund aega.
**PROPOSED_ET:** Ma olen siin alles tund aega.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es esmu šeit vēl tikai vienu stundu.
**DE konteksts:** erst
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0420
**Card ID:** a2-erst
**Field:** study.examples[2].lv
**CURRENT:** on alles kaheksa.
**PROPOSED_ET:** On alles kaheksa.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** ir vēl tikai astoņi.
**DE konteksts:** erst
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0421
**Card ID:** a2-erst
**Field:** study.examples[3].lv
**CURRENT:** ta tuleb alles homme.
**PROPOSED_ET:** Ta tuleb alles homme.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** viņš atbrauks tikai rīt.
**DE konteksts:** erst
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0422
**Card ID:** a2-nur
**Field:** study.examples[1].lv
**CURRENT:** mul on ainult kümme eurot.
**PROPOSED_ET:** Mul on ainult kümme eurot.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** man ir tikai desmit eiro.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0423
**Card ID:** a2-nur
**Field:** study.examples[2].lv
**CURRENT:** ainult sina saad mind aidata.
**PROPOSED_ET:** Ainult sina saad mind aidata.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** tikai tu vari man palīdzēt.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0424
**Card ID:** a2-nur
**Field:** study.examples[3].lv
**CURRENT:** ma tahan ainult kohvi.
**PROPOSED_ET:** Ma tahan ainult kohvi.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** es gribu tikai kafiju.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
#### ET-A2-0425
**Card ID:** a2-nur
**Field:** study.examples[4].lv
**CURRENT:** mul on ainult kaheksa eurot.
**PROPOSED_ET:** Mul on ainult kaheksa eurot.
**Problēma:** Estonian sentence-initial words must be capitalized.
**LV etalons (konteksts):** man ir tikai astoņi eiro.
**DE konteksts:** nur
**Smagums:** LOW
**Kategorija:** ORTHOGRAPHY
**Avots:** gpt-5.6-luna
**Klasifikācija:** VALIDATED_REAL_FINDING
**Statuss:** PENDING
## 4. Deterministic gates

| Study 231/231 | FAIL |
| sectionAccents | FAIL |
| remnants | FAIL |
| mirror | PASS |
| syntax | PASS |

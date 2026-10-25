# CS–DE B1 FULL AUDIT

## KOPSAVILKUMS

- Dataset: B1
- Audit mode: READ-ONLY
- Total objects: 3367
- Audited objects: 3367
- Coverage: 100%
- Batch size: 50
- Batch count: 68
- CRITICAL: 1078
- HIGH: 1957
- MEDIUM: 1325
- LOW: 84
- SOURCE_DE_ISSUE: 0
- NEEDS_OWNER_REVIEW: 0
- FALSE_POSITIVE: 0
- Production changes: 0
- DE changes: 0
- Other-language changes: 0

## DETERMINISTISKĀ VALIDĀCIJA

| Pārbaude | Rezultāts |
|---|---|
| Strukturālā parity | PASS |
| DE READ-ONLY integritāte | PASS |
| Tehniskā kontrole | PASS |
| Ārvalodu atlikumi | FAIL |
| sectionAccents | FAIL |
| data/www sinhronizācija | PASS |
| JS sintakse | PASS |

**Deterministisko atradumu skaits:** 2236

## LINGVISTISKĀ VALIDĀCIJA

| Metrika | Vērtība |
|---|---|
| Luna modelis | gpt-5.6-luna |
| Lingvistiski auditēti | 3367/3367 |
| Lingvistisko atradumu skaits | 2192 |
| API pieprasījumi | 94 |
| Tokeni | 1186626 |

## STUDY / COMPARISON STUDY VALIDĀCIJA

- standardStudy: 324
- comparisonStudy: 0
- Study struktūras problēmas: 0

## SECTIONACCENTS VALIDĀCIJA

- sectionAccents atradumi: 0
- Statuss: FAIL

## FINDINGS

### CRITICAL (1078)

### Finding 1: b1-abschnitt

- **Dataset:** b1
- **Batch:** 051-100
- **Card/Index:** b1-abschnitt
- **Field:** entry[74].study.sectionAccents.comparison[2].meaning.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** fāze
- **DE source:** Abschnitt
- **LV reference:** posms
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[74].study.sectionAccents.comparison[2].meaning.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 2: b1-sich-aufhalten

- **Dataset:** b1
- **Batch:** 151-200
- **Card/Index:** b1-sich-aufhalten
- **Field:** entry[198].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzturēties
- **DE source:** sich aufhalten
- **LV reference:** uzturēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[198].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 3: b1-sich-aufhalten

- **Dataset:** b1
- **Batch:** 151-200
- **Card/Index:** b1-sich-aufhalten
- **Field:** entry[198].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizkavēt
- **DE source:** sich aufhalten
- **LV reference:** uzturēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[198].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 4: b1-aussprache

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-aussprache
- **Field:** entry[211].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** domu apmaiņa
- **DE source:** Aussprache
- **LV reference:** izruna
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[211].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 5: b1-ausstellen

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-ausstellen
- **Field:** entry[213].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izrakstīt
- **DE source:** ausstellen
- **LV reference:** izsniegt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[213].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 6: b1-ausstellen

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-ausstellen
- **Field:** entry[213].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izstādīt
- **DE source:** ausstellen
- **LV reference:** izsniegt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[213].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 7: b1-auszug

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-auszug
- **Field:** entry[225].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izvākšanās
- **DE source:** Auszug
- **LV reference:** izraksts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[225].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 8: b1-bau

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-bau
- **Field:** entry[246].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** būvniecība
- **DE source:** Bau
- **LV reference:** celtne
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[246].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 9: b1-bau

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-bau
- **Field:** entry[246].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** būvlaukumā
- **DE source:** Bau
- **LV reference:** celtne
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[246].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 10: b1-becken

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-becken
- **Field:** entry[258].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** baseinā
- **DE source:** Becken
- **LV reference:** baseins
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[258].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 11: b1-becken

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-becken
- **Field:** entry[258].study.sectionAccents.tip.leftBlocks[0].text.purple[3]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bļoda
- **DE source:** Becken
- **LV reference:** baseins
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[258].study.sectionAccents.tip.leftBlocks[0].text.purple[3]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 12: b1-bedeutend

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-bedeutend
- **Field:** entry[263].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nozīmīgs
- **DE source:** bedeutend
- **LV reference:** nozīmīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[263].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 13: b1-bedeutend

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-bedeutend
- **Field:** entry[263].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ievērojams
- **DE source:** bedeutend
- **LV reference:** nozīmīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[263].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 14: b1-bedeutend

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-bedeutend
- **Field:** entry[263].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ievērojami
- **DE source:** bedeutend
- **LV reference:** nozīmīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[263].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 15: b1-sich-bedienen

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-sich-bedienen
- **Field:** entry[264].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ņemiet paši
- **DE source:** sich bedienen
- **LV reference:** apkalpoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[264].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 16: b1-behandeln

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-behandeln
- **Field:** entry[303].study.sectionAccents.explanation.yellow[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tēma
- **DE source:** behandeln
- **LV reference:** ārstēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[303].study.sectionAccents.explanation.yellow[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 17: b1-behandeln

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-behandeln
- **Field:** entry[303].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ārstēt
- **DE source:** behandeln
- **LV reference:** ārstēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[303].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 18: b1-behandeln

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-behandeln
- **Field:** entry[303].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izturēties
- **DE source:** behandeln
- **LV reference:** ārstēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[303].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 19: b1-bemerken

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-bemerken
- **Field:** entry[337].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kļūdu
- **DE source:** bemerken
- **LV reference:** pamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[337].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 20: b1-bemerken

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-bemerken
- **Field:** entry[337].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izmaiņu
- **DE source:** bemerken
- **LV reference:** pamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[337].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 21: b1-beraten

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-beraten
- **Field:** entry[346].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** cilvēki
- **DE source:** beraten
- **LV reference:** konsultēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[346].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 22: b1-berichten

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-berichten
- **Field:** entry[363].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rezultātiem
- **DE source:** berichten
- **LV reference:** ziņot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[363].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 23: b1-sich-beruhigen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-sich-beruhigen
- **Field:** entry[369].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nomierinās
- **DE source:** sich beruhigen
- **LV reference:** nomierināties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[369].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 24: b1-berühmtheit

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-berühmtheit
- **Field:** entry[370].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** slavenības
- **DE source:** Berühmtheit
- **LV reference:** slava
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[370].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 25: b1-beschließen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-beschließen
- **Field:** entry[379].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lēmums
- **DE source:** beschließen
- **LV reference:** nolemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[379].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 26: b1-beschließen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-beschließen
- **Field:** entry[379].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizvērt
- **DE source:** beschließen
- **LV reference:** nolemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[379].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 27: b1-beschwerde

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-beschwerde
- **Field:** entry[382].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sūdzība
- **DE source:** Beschwerde
- **LV reference:** sūdzība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[382].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 28: b1-besorgen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-besorgen
- **Field:** entry[389].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dabūt
- **DE source:** besorgen
- **LV reference:** sagādāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[389].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 29: b1-besorgen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-besorgen
- **Field:** entry[389].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** noorganizēt
- **DE source:** besorgen
- **LV reference:** sagādāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[389].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 30: b1-bestehen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-bestehen
- **Field:** entry[396].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nokārtot
- **DE source:** bestehen
- **LV reference:** pastāvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[396].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 31: b1-bestehen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-bestehen
- **Field:** entry[396].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sastāvēt
- **DE source:** bestehen
- **LV reference:** pastāvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[396].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 32: b1-bestehen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-bestehen
- **Field:** entry[396].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzstāt
- **DE source:** bestehen
- **LV reference:** pastāvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[396].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 33: b1-bestimmen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-bestimmen
- **Field:** entry[397].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** termiņu
- **DE source:** bestimmen
- **LV reference:** noteikt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[397].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 34: b1-betrieb

- **Dataset:** b1
- **Batch:** 401-450
- **Card/Index:** b1-betrieb
- **Field:** entry[410].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzņēmums
- **DE source:** Betrieb
- **LV reference:** uzņēmums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[410].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 35: b1-beziehen

- **Dataset:** b1
- **Batch:** 401-450
- **Card/Index:** b1-beziehen
- **Field:** entry[433].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saņemt
- **DE source:** beziehen
- **LV reference:** saņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[433].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 36: b1-beziehen

- **Dataset:** b1
- **Batch:** 401-450
- **Card/Index:** b1-beziehen
- **Field:** entry[433].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ievākties
- **DE source:** beziehen
- **LV reference:** saņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[433].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 37: b1-bieten

- **Dataset:** b1
- **Batch:** 401-450
- **Card/Index:** b1-bieten
- **Field:** entry[449].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piedāvā
- **DE source:** bieten
- **LV reference:** piedāvāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[449].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 38: b1-blase

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-blase
- **Field:** entry[455].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pūslis
- **DE source:** Blase
- **LV reference:** pūslis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[455].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 39: b1-blase

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-blase
- **Field:** entry[455].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** burbuļi
- **DE source:** Blase
- **LV reference:** pūslis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[455].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 40: b1-block

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-block
- **Field:** entry[465].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** blociņš
- **DE source:** Block
- **LV reference:** bloks
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[465].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 41: b1-brand

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-brand
- **Field:** entry[489].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ugunsgrēks
- **DE source:** Brand
- **LV reference:** ugunsgrēks
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[489].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 42: b1-brand

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-brand
- **Field:** entry[489].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** zīmols
- **DE source:** Brand
- **LV reference:** ugunsgrēks
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[489].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 43: b1-bund

- **Dataset:** b1
- **Batch:** 501-550
- **Card/Index:** b1-bund
- **Field:** entry[526].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** federācija
- **DE source:** Bund
- **LV reference:** savienība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[526].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 44: b1-bund

- **Dataset:** b1
- **Batch:** 501-550
- **Card/Index:** b1-bund
- **Field:** entry[526].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saišķis
- **DE source:** Bund
- **LV reference:** savienība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[526].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 45: b1-dahin

- **Dataset:** b1
- **Batch:** 551-600
- **Card/Index:** b1-dahin
- **Field:** entry[556].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kustība
- **DE source:** dahin
- **LV reference:** turp
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[556].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 46: b1-dahin

- **Dataset:** b1
- **Batch:** 551-600
- **Card/Index:** b1-dahin
- **Field:** entry[556].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atrašanās vieta
- **DE source:** dahin
- **LV reference:** turp
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[556].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 47: b1-dank-study

- **Dataset:** b1
- **Batch:** 551-600
- **Card/Index:** b1-dank-study
- **Field:** entry[559].study.sectionAccents.tip.leftBlocks[1].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** formālākai
- **DE source:** Dank
- **LV reference:** pateicība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[559].study.sectionAccents.tip.leftBlocks[1].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 48: b1-dank-study

- **Dataset:** b1
- **Batch:** 551-600
- **Card/Index:** b1-dank-study
- **Field:** entry[559].study.sectionAccents.tip.leftBlocks[1].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pateicībai
- **DE source:** Dank
- **LV reference:** pateicība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[559].study.sectionAccents.tip.leftBlocks[1].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 49: b1-darstellen

- **Dataset:** b1
- **Batch:** 551-600
- **Card/Index:** b1-darstellen
- **Field:** entry[563].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iepazīstināties
- **DE source:** darstellen
- **LV reference:** attēlot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[563].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 50: b1-druck

- **Dataset:** b1
- **Batch:** 601-650
- **Card/Index:** b1-druck
- **Field:** entry[615].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** būt zem spiediena
- **DE source:** Druck
- **LV reference:** spiediens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[615].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 51: b1-druck

- **Dataset:** b1
- **Batch:** 601-650
- **Card/Index:** b1-druck
- **Field:** entry[615].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** drukāšana
- **DE source:** Druck
- **LV reference:** spiediens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[615].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 52: b1-eher

- **Dataset:** b1
- **Batch:** 601-650
- **Card/Index:** b1-eher
- **Field:** entry[647].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izvēlē
- **DE source:** eher
- **LV reference:** drīzāk
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[647].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 53: b1-eher

- **Dataset:** b1
- **Batch:** 601-650
- **Card/Index:** b1-eher
- **Field:** entry[647].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** laikā
- **DE source:** eher
- **LV reference:** drīzāk
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[647].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 54: b1-einbrechen

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einbrechen
- **Field:** entry[664].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iestāties
- **DE source:** einbrechen
- **LV reference:** ielauzties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[664].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 55: b1-eindruck

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-eindruck
- **Field:** entry[666].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atstāt labu iespaidu
- **DE source:** Eindruck
- **LV reference:** iespaids
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[666].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 56: b1-einerlei

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einerlei
- **Field:** entry[667].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** formālāku
- **DE source:** einerlei
- **LV reference:** vienalga
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[667].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 57: b1-einfallen

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einfallen
- **Field:** entry[670].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ienāk prātā
- **DE source:** einfallen
- **LV reference:** ienākt prātā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[670].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 58: b1-einfarbig

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einfarbig
- **Field:** entry[671].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** viena krāsa
- **DE source:** einfarbig
- **LV reference:** vienkrāsains
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[671].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 59: b1-einfarbig

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einfarbig
- **Field:** entry[671].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** daudz krāsu
- **DE source:** einfarbig
- **LV reference:** vienkrāsains
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[671].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 60: b1-einfügen

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einfügen
- **Field:** entry[673].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iekļauties
- **DE source:** einfügen
- **LV reference:** ievietot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[673].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 61: b1-einführen

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einführen
- **Field:** entry[674].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sistēmu
- **DE source:** einführen
- **LV reference:** ieviest
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[674].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 62: b1-einführung

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einführung
- **Field:** entry[675].study.sectionAccents.examples[0].lv.yellow[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tēmā
- **DE source:** Einführung
- **LV reference:** ievads
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[675].study.sectionAccents.examples[0].lv.yellow[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 63: b1-einführung

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einführung
- **Field:** entry[675].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sistēma
- **DE source:** Einführung
- **LV reference:** ievads
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[675].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 64: b1-sich-eingewöhnen

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-sich-eingewöhnen
- **Field:** entry[676].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** darbā
- **DE source:** sich eingewöhnen
- **LV reference:** pierast
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[676].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 65: b1-sich-eingewöhnen

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-sich-eingewöhnen
- **Field:** entry[676].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** skolā
- **DE source:** sich eingewöhnen
- **LV reference:** pierast
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[676].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 66: b1-sich-eingewöhnen

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-sich-eingewöhnen
- **Field:** entry[676].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vietā
- **DE source:** sich eingewöhnen
- **LV reference:** pierast
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[676].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 67: b1-einheimisch

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einheimisch
- **Field:** entry[678].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dzīvnieki
- **DE source:** einheimisch
- **LV reference:** vietējs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[678].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 68: b1-einheit

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einheit
- **Field:** entry[679].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mācību vienība
- **DE source:** Einheit
- **LV reference:** vienība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[679].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 69: b1-einheit

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einheit
- **Field:** entry[679].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mērvienība
- **DE source:** Einheit
- **LV reference:** vienība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[679].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 70: b1-längeneinheit

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-längeneinheit
- **Field:** entry[680].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vienība
- **DE source:** Längeneinheit
- **LV reference:** garuma mērvienība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[680].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 71: b1-längeneinheit

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-längeneinheit
- **Field:** entry[680].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** garuma mērvienība
- **DE source:** Längeneinheit
- **LV reference:** garuma mērvienība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[680].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 72: b1-einheitlich

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einheitlich
- **Field:** entry[681].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vienādam stilam
- **DE source:** einheitlich
- **LV reference:** vienots
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[681].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 73: b1-einheitlich

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einheitlich
- **Field:** entry[681].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kārtībai
- **DE source:** einheitlich
- **LV reference:** vienots
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[681].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 74: b1-einholen

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einholen
- **Field:** entry[682].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** informāciju
- **DE source:** einholen
- **LV reference:** ievākt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[682].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 75: b1-einholen

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einholen
- **Field:** entry[682].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atļauju
- **DE source:** einholen
- **LV reference:** ievākt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[682].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 76: b1-einholen

- **Dataset:** b1
- **Batch:** 651-700
- **Card/Index:** b1-einholen
- **Field:** entry[682].study.sectionAccents.tip.leftBlocks[0].text.purple[3]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** skrējēju
- **DE source:** einholen
- **LV reference:** ievākt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[682].study.sectionAccents.tip.leftBlocks[0].text.purple[3]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 77: b1-einsatz

- **Dataset:** b1
- **Batch:** 701-750
- **Card/Index:** b1-einsatz
- **Field:** entry[701].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iesaistīts
- **DE source:** Einsatz
- **LV reference:** izmantošana
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[701].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 78: b1-eintreten

- **Dataset:** b1
- **Batch:** 701-750
- **Card/Index:** b1-eintreten
- **Field:** entry[718].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** telpā
- **DE source:** eintreten
- **LV reference:** ieiet
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[718].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 79: b1-einziehen

- **Dataset:** b1
- **Batch:** 701-750
- **Card/Index:** b1-einziehen
- **Field:** entry[724].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ievākties
- **DE source:** einziehen
- **LV reference:** ievākties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[724].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 80: b1-einziehen

- **Dataset:** b1
- **Batch:** 701-750
- **Card/Index:** b1-einziehen
- **Field:** entry[724].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iekasēt
- **DE source:** einziehen
- **LV reference:** ievākties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[724].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 81: b1-empfangen

- **Dataset:** b1
- **Batch:** 701-750
- **Card/Index:** b1-empfangen
- **Field:** entry[740].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzņemt
- **DE source:** empfangen
- **LV reference:** saņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[740].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 82: b1-entfernen

- **Dataset:** b1
- **Batch:** 751-800
- **Card/Index:** b1-entfernen
- **Field:** entry[750].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** noņemt
- **DE source:** entfernen
- **LV reference:** noņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[750].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 83: b1-entfernen

- **Dataset:** b1
- **Batch:** 751-800
- **Card/Index:** b1-entfernen
- **Field:** entry[750].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** attālinās
- **DE source:** entfernen
- **LV reference:** noņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[750].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 84: b1-enthalten

- **Dataset:** b1
- **Batch:** 751-800
- **Card/Index:** b1-enthalten
- **Field:** entry[754].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iekšā
- **DE source:** enthalten
- **LV reference:** saturēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[754].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 85: b1-enthalten

- **Dataset:** b1
- **Batch:** 751-800
- **Card/Index:** b1-enthalten
- **Field:** entry[754].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iekļauts
- **DE source:** enthalten
- **LV reference:** saturēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[754].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 86: b1-entkommen

- **Dataset:** b1
- **Batch:** 751-800
- **Card/Index:** b1-entkommen
- **Field:** entry[755].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izdevās izbēgt
- **DE source:** entkommen
- **LV reference:** izbēgt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[755].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 87: b1-entlassen

- **Dataset:** b1
- **Batch:** 751-800
- **Card/Index:** b1-entlassen
- **Field:** entry[756].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izvēlies pēc vietas
- **DE source:** entlassen
- **LV reference:** atlaist
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[756].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 88: b1-entstehen

- **Dataset:** b1
- **Batch:** 751-800
- **Card/Index:** b1-entstehen
- **Field:** entry[762].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izveidojas procesa gaitā
- **DE source:** entstehen
- **LV reference:** rasties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[762].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 89: b1-erhalten

- **Dataset:** b1
- **Batch:** 751-800
- **Card/Index:** b1-erhalten
- **Field:** entry[789].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saņemt
- **DE source:** erhalten
- **LV reference:** saņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[789].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 90: b1-erhalten

- **Dataset:** b1
- **Batch:** 751-800
- **Card/Index:** b1-erhalten
- **Field:** entry[789].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saglabāt
- **DE source:** erhalten
- **LV reference:** saņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[789].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 91: b1-eröffnen

- **Dataset:** b1
- **Batch:** 801-850
- **Card/Index:** b1-eröffnen
- **Field:** entry[813].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izstādi
- **DE source:** eröffnen
- **LV reference:** atvērt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[813].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 92: b1-eröffnen

- **Dataset:** b1
- **Batch:** 801-850
- **Card/Index:** b1-eröffnen
- **Field:** entry[813].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēdi
- **DE source:** eröffnen
- **LV reference:** atvērt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[813].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 93: b1-erscheinen

- **Dataset:** b1
- **Batch:** 801-850
- **Card/Index:** b1-erscheinen
- **Field:** entry[818].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iznāk
- **DE source:** erscheinen
- **LV reference:** parādīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[818].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 94: b1-ersetzen

- **Dataset:** b1
- **Batch:** 801-850
- **Card/Index:** b1-ersetzen
- **Field:** entry[821].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** stājas citas lietas vietā
- **DE source:** ersetzen
- **LV reference:** aizstāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[821].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 95: b1-festhalten

- **Dataset:** b1
- **Batch:** 851-900
- **Card/Index:** b1-festhalten
- **Field:** entry[889].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** turēt cieši
- **DE source:** festhalten
- **LV reference:** turēt cieši
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[889].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 96: b1-festhalten

- **Dataset:** b1
- **Batch:** 851-900
- **Card/Index:** b1-festhalten
- **Field:** entry[889].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** fiksēt
- **DE source:** festhalten
- **LV reference:** turēt cieši
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[889].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 97: b1-feststellen

- **Dataset:** b1
- **Batch:** 851-900
- **Card/Index:** b1-feststellen
- **Field:** entry[893].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kļūdu
- **DE source:** feststellen
- **LV reference:** konstatēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[893].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 98: b1-feststellen

- **Dataset:** b1
- **Batch:** 851-900
- **Card/Index:** b1-feststellen
- **Field:** entry[893].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** slimību
- **DE source:** feststellen
- **LV reference:** konstatēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[893].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 99: b1-feststellen

- **Dataset:** b1
- **Batch:** 851-900
- **Card/Index:** b1-feststellen
- **Field:** entry[893].study.sectionAccents.tip.leftBlocks[0].text.purple[3]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** termiņu
- **DE source:** feststellen
- **LV reference:** konstatēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[893].study.sectionAccents.tip.leftBlocks[0].text.purple[3]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 100: b1-folge

- **Dataset:** b1
- **Batch:** 901-950
- **Card/Index:** b1-folge
- **Field:** entry[929].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sērija
- **DE source:** Folge
- **LV reference:** sekas
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[929].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 101: b1-gemein

- **Dataset:** b1
- **Batch:** 1051-1100
- **Card/Index:** b1-gemein
- **Field:** entry[1051].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** negatīvs
- **DE source:** gemein
- **LV reference:** nekrietns
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1051].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 102: b1-gewinn

- **Dataset:** b1
- **Batch:** 1101-1150
- **Card/Index:** b1-gewinn
- **Field:** entry[1105].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** peļņa
- **DE source:** Gewinn
- **LV reference:** peļņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1105].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 103: b1-gitter

- **Dataset:** b1
- **Batch:** 1101-1150
- **Card/Index:** b1-gitter
- **Field:** entry[1115].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** durvīm
- **DE source:** Gitter
- **LV reference:** režģis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1115].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 104: b1-gitter

- **Dataset:** b1
- **Batch:** 1101-1150
- **Card/Index:** b1-gitter
- **Field:** entry[1115].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** būra
- **DE source:** Gitter
- **LV reference:** režģis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1115].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 105: b1-greifen

- **Dataset:** b1
- **Batch:** 1101-1150
- **Card/Index:** b1-greifen
- **Field:** entry[1140].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kustību uz kaut ko
- **DE source:** greifen
- **LV reference:** satvert
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1140].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 106: b1-griff

- **Dataset:** b1
- **Batch:** 1101-1150
- **Card/Index:** b1-griff
- **Field:** entry[1144].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** darbība
- **DE source:** Griff
- **LV reference:** rokturis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1144].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 107: b1-handeln

- **Dataset:** b1
- **Batch:** 1151-1200
- **Card/Index:** b1-handeln
- **Field:** entry[1193].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ko darīt
- **DE source:** handeln
- **LV reference:** rīkoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1193].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 108: b1-handgriff

- **Dataset:** b1
- **Batch:** 1151-1200
- **Card/Index:** b1-handgriff
- **Field:** entry[1194].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** darba procesā
- **DE source:** Handgriff
- **LV reference:** paņēmiens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1194].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 109: b1-hauen

- **Dataset:** b1
- **Batch:** 1201-1250
- **Card/Index:** b1-hauen
- **Field:** entry[1207].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pazūdi
- **DE source:** hauen
- **LV reference:** sist
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1207].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 110: b1-haufen

- **Dataset:** b1
- **Batch:** 1201-1250
- **Card/Index:** b1-haufen
- **Field:** entry[1208].study.sectionAccents.examples[1].lv.yellow[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** papīru
- **DE source:** Haufen
- **LV reference:** kaudze
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1208].study.sectionAccents.examples[1].lv.yellow[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 111: b1-haufen

- **Dataset:** b1
- **Batch:** 1201-1250
- **Card/Index:** b1-haufen
- **Field:** entry[1208].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nekārtīga kaudze
- **DE source:** Haufen
- **LV reference:** kaudze
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1208].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 112: b1-haufen

- **Dataset:** b1
- **Batch:** 1201-1250
- **Card/Index:** b1-haufen
- **Field:** entry[1208].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kārtīgi sakrauts
- **DE source:** Haufen
- **LV reference:** kaudze
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1208].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 113: b1-hinausgehen

- **Dataset:** b1
- **Batch:** 1251-1300
- **Card/Index:** b1-hinausgehen
- **Field:** entry[1267].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** prom ārā
- **DE source:** hinausgehen
- **LV reference:** iziet
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1267].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 114: b1-hinausgehen

- **Dataset:** b1
- **Batch:** 1251-1300
- **Card/Index:** b1-hinausgehen
- **Field:** entry[1267].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uz šejieni ārā
- **DE source:** hinausgehen
- **LV reference:** iziet
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1267].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 115: b1-hinweis

- **Dataset:** b1
- **Batch:** 1251-1300
- **Card/Index:** b1-hinweis
- **Field:** entry[1276].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** norāda
- **DE source:** Hinweis
- **LV reference:** norādījums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1276].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 116: b1-holen

- **Dataset:** b1
- **Batch:** 1251-1300
- **Card/Index:** b1-holen
- **Field:** entry[1298].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aiziešanu pēc
- **DE source:** holen
- **LV reference:** atnest
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1298].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 117: b1-holen

- **Dataset:** b1
- **Batch:** 1251-1300
- **Card/Index:** b1-holen
- **Field:** entry[1298].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nogādāšanu kādam
- **DE source:** holen
- **LV reference:** atnest
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1298].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 118: b1-hüten

- **Dataset:** b1
- **Batch:** 1301-1350
- **Card/Index:** b1-hüten
- **Field:** entry[1333].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pieskatīšanu
- **DE source:** hüten
- **LV reference:** sargāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1333].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 119: b1-hüten

- **Dataset:** b1
- **Batch:** 1301-1350
- **Card/Index:** b1-hüten
- **Field:** entry[1333].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sargāšanu
- **DE source:** hüten
- **LV reference:** sargāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1333].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 120: b1-hüten

- **Dataset:** b1
- **Batch:** 1301-1350
- **Card/Index:** b1-hüten
- **Field:** entry[1333].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sargāties
- **DE source:** hüten
- **LV reference:** sargāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1333].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 121: b1-innerhalb

- **Dataset:** b1
- **Batch:** 1351-1400
- **Card/Index:** b1-innerhalb
- **Field:** entry[1371].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pilsētas
- **DE source:** innerhalb
- **LV reference:** iekšpusē
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1371].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 122: b1-innerhalb

- **Dataset:** b1
- **Batch:** 1351-1400
- **Card/Index:** b1-innerhalb
- **Field:** entry[1371].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nedēļas
- **DE source:** innerhalb
- **LV reference:** iekšpusē
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1371].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 123: b1-innerhalb

- **Dataset:** b1
- **Batch:** 1351-1400
- **Card/Index:** b1-innerhalb
- **Field:** entry[1371].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iespēju
- **DE source:** innerhalb
- **LV reference:** iekšpusē
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1371].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 124: b1-irren

- **Dataset:** b1
- **Batch:** 1351-1400
- **Card/Index:** b1-irren
- **Field:** entry[1397].study.sectionAccents.examples[1].lv.yellow[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** adresē
- **DE source:** sich irren
- **LV reference:** kļūdīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1397].study.sectionAccents.examples[1].lv.yellow[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 125: b1-irren

- **Dataset:** b1
- **Batch:** 1351-1400
- **Card/Index:** b1-irren
- **Field:** entry[1397].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kļūdīties
- **DE source:** sich irren
- **LV reference:** kļūdīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1397].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 126: b1-jagen

- **Dataset:** b1
- **Batch:** 1401-1450
- **Card/Index:** b1-jagen
- **Field:** entry[1406].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mērķi
- **DE source:** jagen
- **LV reference:** medīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1406].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 127: b1-jahrgang

- **Dataset:** b1
- **Batch:** 1401-1450
- **Card/Index:** b1-jahrgang
- **Field:** entry[1414].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** cilvēku
- **DE source:** Jahrgang
- **LV reference:** izdošanas gads
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1414].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 128: b1-kehren

- **Dataset:** b1
- **Batch:** 1451-1500
- **Card/Index:** b1-kehren
- **Field:** entry[1488].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** cits vārds
- **DE source:** kehren
- **LV reference:** slaucīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1488].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 129: b1-kern

- **Dataset:** b1
- **Batch:** 1451-1500
- **Card/Index:** b1-kern
- **Field:** entry[1497].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** auglī
- **DE source:** Kern
- **LV reference:** kodols
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1497].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 130: b1-kern

- **Dataset:** b1
- **Batch:** 1451-1500
- **Card/Index:** b1-kern
- **Field:** entry[1497].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lietā
- **DE source:** Kern
- **LV reference:** kodols
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1497].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 131: b1-kern

- **Dataset:** b1
- **Batch:** 1451-1500
- **Card/Index:** b1-kern
- **Field:** entry[1497].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** argumentā
- **DE source:** Kern
- **LV reference:** kodols
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1497].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 132: b1-kippen

- **Dataset:** b1
- **Batch:** 1501-1550
- **Card/Index:** b1-kippen
- **Field:** entry[1508].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** glāze
- **DE source:** kippen
- **LV reference:** apgāzt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1508].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 133: b1-kippen

- **Dataset:** b1
- **Batch:** 1501-1550
- **Card/Index:** b1-kippen
- **Field:** entry[1508].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** krēsls
- **DE source:** kippen
- **LV reference:** apgāzt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1508].study.sectionAccents.tip.leftBlocks[0].text.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 134: b1-kippen

- **Dataset:** b1
- **Batch:** 1501-1550
- **Card/Index:** b1-kippen
- **Field:** entry[1508].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** situācija
- **DE source:** kippen
- **LV reference:** apgāzt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1508].study.sectionAccents.tip.leftBlocks[0].text.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 135: b1-knapp

- **Dataset:** b1
- **Batch:** 1501-1550
- **Card/Index:** b1-knapp
- **Field:** entry[1545].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** gandrīz nepietiek
- **DE source:** knapp
- **LV reference:** trūcīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1545].study.sectionAccents.tip.leftBlocks[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 136: b1-kommando

- **Dataset:** b1
- **Batch:** 1551-1600
- **Card/Index:** b1-kommando
- **Field:** entry[1570].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pavēli
- **DE source:** Kommando
- **LV reference:** pavēle
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1570].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 137: b1-kommando

- **Dataset:** b1
- **Batch:** 1551-1600
- **Card/Index:** b1-kommando
- **Field:** entry[1570].study.sectionAccents.examples[0].lv.green
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Karavīrs
- **DE source:** Kommando
- **LV reference:** pavēle
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1570].study.sectionAccents.examples[0].lv.green
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 138: b1-kommando

- **Dataset:** b1
- **Batch:** 1551-1600
- **Card/Index:** b1-kommando
- **Field:** entry[1570].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadības vienība
- **DE source:** Kommando
- **LV reference:** pavēle
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1570].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 139: b1-kommando

- **Dataset:** b1
- **Batch:** 1551-1600
- **Card/Index:** b1-kommando
- **Field:** entry[1570].study.sectionAccents.examples[2].lv.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vadību
- **DE source:** Kommando
- **LV reference:** pavēle
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1570].study.sectionAccents.examples[2].lv.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 140: b1-kommando

- **Dataset:** b1
- **Batch:** 1551-1600
- **Card/Index:** b1-kommando
- **Field:** entry[1570].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pavēle
- **DE source:** Kommando
- **LV reference:** pavēle
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1570].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 141: b1-kommando

- **Dataset:** b1
- **Batch:** 1551-1600
- **Card/Index:** b1-kommando
- **Field:** entry[1570].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pavēle
- **DE source:** Kommando
- **LV reference:** pavēle
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1570].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 142: b1-kommando

- **Dataset:** b1
- **Batch:** 1551-1600
- **Card/Index:** b1-kommando
- **Field:** entry[1570].study.sectionAccents.comparison[1].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Pavēle
- **DE source:** Kommando
- **LV reference:** pavēle
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1570].study.sectionAccents.comparison[1].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 143: b1-kommando

- **Dataset:** b1
- **Batch:** 1551-1600
- **Card/Index:** b1-kommando
- **Field:** entry[1570].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** komanda sportā
- **DE source:** Kommando
- **LV reference:** pavēle
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1570].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 144: b1-kommando

- **Dataset:** b1
- **Batch:** 1551-1600
- **Card/Index:** b1-kommando
- **Field:** entry[1570].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Pavēle
- **DE source:** Kommando
- **LV reference:** pavēle
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1570].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 145: b1-kreuzen

- **Dataset:** b1
- **Batch:** 1601-1650
- **Card/Index:** b1-kreuzen
- **Field:** entry[1634].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šķērsojam
- **DE source:** kreuzen
- **LV reference:** šķērsot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1634].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 146: b1-kreuzen

- **Dataset:** b1
- **Batch:** 1601-1650
- **Card/Index:** b1-kreuzen
- **Field:** entry[1634].study.sectionAccents.examples[1].lv.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Ceļi
- **DE source:** kreuzen
- **LV reference:** šķērsot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1634].study.sectionAccents.examples[1].lv.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 147: b1-kreuzen

- **Dataset:** b1
- **Batch:** 1601-1650
- **Card/Index:** b1-kreuzen
- **Field:** entry[1634].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Atzīmē
- **DE source:** kreuzen
- **LV reference:** šķērsot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1634].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 148: b1-kreuzen

- **Dataset:** b1
- **Batch:** 1601-1650
- **Card/Index:** b1-kreuzen
- **Field:** entry[1634].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šķērsot
- **DE source:** kreuzen
- **LV reference:** šķērsot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1634].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 149: b1-kreuzen

- **Dataset:** b1
- **Batch:** 1601-1650
- **Card/Index:** b1-kreuzen
- **Field:** entry[1634].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šķērsot
- **DE source:** kreuzen
- **LV reference:** šķērsot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1634].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 150: b1-kreuzen

- **Dataset:** b1
- **Batch:** 1601-1650
- **Card/Index:** b1-kreuzen
- **Field:** entry[1634].study.sectionAccents.comparison[1].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šķērsojam
- **DE source:** kreuzen
- **LV reference:** šķērsot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1634].study.sectionAccents.comparison[1].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 151: b1-kreuzen

- **Dataset:** b1
- **Batch:** 1601-1650
- **Card/Index:** b1-kreuzen
- **Field:** entry[1634].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atzīmēt
- **DE source:** kreuzen
- **LV reference:** šķērsot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1634].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 152: b1-kreuzen

- **Dataset:** b1
- **Batch:** 1601-1650
- **Card/Index:** b1-kreuzen
- **Field:** entry[1634].study.sectionAccents.comparison[2].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Atzīmējiet
- **DE source:** kreuzen
- **LV reference:** šķērsot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1634].study.sectionAccents.comparison[2].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 153: b1-kreuzen

- **Dataset:** b1
- **Batch:** 1601-1650
- **Card/Index:** b1-kreuzen
- **Field:** entry[1634].study.sectionAccents.important.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** testā
- **DE source:** kreuzen
- **LV reference:** šķērsot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1634].study.sectionAccents.important.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 154: b1-kunde-2

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde-2
- **Field:** entry[1660].study.tip
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Veikalā vai servisā gandrīz vienmēr: der Kunde = klients.
- **DE source:** Kunde
- **LV reference:** klients
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1660].study.tip
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 155: b1-kunde-2

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde-2
- **Field:** entry[1660].study.important
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Artikuls maina nozīmi: der Kunde ir cilvēks, die Kunde ir vēsts.
- **DE source:** Kunde
- **LV reference:** klients
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1660].study.important
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 156: b1-kunde-2

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde-2
- **Field:** entry[1660].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vēsts
- **DE source:** Kunde
- **LV reference:** klients
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1660].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 157: b1-kunde-2

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde-2
- **Field:** entry[1660].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vēsts
- **DE source:** Kunde
- **LV reference:** klients
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1660].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 158: b1-kunde-2

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde-2
- **Field:** entry[1660].study.sectionAccents.comparison[2].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vēsts
- **DE source:** Kunde
- **LV reference:** klients
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1660].study.sectionAccents.comparison[2].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 159: b1-kunde-2

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde-2
- **Field:** entry[1660].study.sectionAccents.tip.green[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Veikalā
- **DE source:** Kunde
- **LV reference:** klients
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1660].study.sectionAccents.tip.green[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 160: b1-kunde-2

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde-2
- **Field:** entry[1660].study.sectionAccents.tip.green[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** servisā
- **DE source:** Kunde
- **LV reference:** klients
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1660].study.sectionAccents.tip.green[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 161: b1-kunde-2

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde-2
- **Field:** entry[1660].study.sectionAccents.important.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** cilvēks
- **DE source:** Kunde
- **LV reference:** klients
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1660].study.sectionAccents.important.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 162: b1-kunde-2

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde-2
- **Field:** entry[1660].study.sectionAccents.important.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vēsts
- **DE source:** Kunde
- **LV reference:** klients
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1660].study.sectionAccents.important.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 163: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.tip
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Artikuls maina nozīmi: die Kunde = vēsts, der Kunde = klients.
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.tip
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 164: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.important
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Frontē šai kartītei jāpaliek 'vēsts', jo klients ir der Kunde ar citu artikulu.
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.important
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 165: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Savukārt
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 166: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vēsts
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 167: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Ziņa
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 168: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.sectionAccents.examples[1].lv.green
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ziemeļiem
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.sectionAccents.examples[1].lv.green
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 169: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vēsts
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 170: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.sectionAccents.comparison[0].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vēsts
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.sectionAccents.comparison[0].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 171: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ziņa
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 172: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.sectionAccents.comparison[2].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ziņu
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.sectionAccents.comparison[2].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 173: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.sectionAccents.tip.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vēsts
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.sectionAccents.tip.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 174: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** entry[1661].study.sectionAccents.important.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vēsts
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1661].study.sectionAccents.important.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 175: b1-kündigen

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kündigen
- **Field:** entry[1665].study.explanation
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Galvenā doma: kündigen nozīmē oficiāli pārtraukt darba attiecības, līgumu vai abonementu.
- **DE source:** kündigen
- **LV reference:** uzteikt darbu
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1665].study.explanation
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 176: b1-kündigen

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kündigen
- **Field:** entry[1665].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** oficiāli pārtraukt
- **DE source:** kündigen
- **LV reference:** uzteikt darbu
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1665].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 177: b1-kündigen

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kündigen
- **Field:** entry[1665].study.sectionAccents.explanation.yellow[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** darba attiecības
- **DE source:** kündigen
- **LV reference:** uzteikt darbu
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1665].study.sectionAccents.explanation.yellow[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 178: b1-kündigen

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kündigen
- **Field:** entry[1665].study.sectionAccents.explanation.yellow[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** līgumu
- **DE source:** kündigen
- **LV reference:** uzteikt darbu
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1665].study.sectionAccents.explanation.yellow[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 179: b1-kündigen

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kündigen
- **Field:** entry[1665].study.sectionAccents.examples[2].lv.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** līgumu
- **DE source:** kündigen
- **LV reference:** uzteikt darbu
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1665].study.sectionAccents.examples[2].lv.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 180: b1-kündigen

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kündigen
- **Field:** entry[1665].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārtraukt
- **DE source:** kündigen
- **LV reference:** uzteikt darbu
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1665].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 181: b1-kündigen

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kündigen
- **Field:** entry[1665].study.sectionAccents.comparison[2].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārtraucu
- **DE source:** kündigen
- **LV reference:** uzteikt darbu
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1665].study.sectionAccents.comparison[2].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 182: b1-kündigen

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kündigen
- **Field:** entry[1665].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** oficiāli
- **DE source:** kündigen
- **LV reference:** uzteikt darbu
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1665].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 183: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** entry[1675].study.sectionAccents.examples[1].lv.green
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadītājs
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1675].study.sectionAccents.examples[1].lv.green
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 184: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** entry[1675].study.sectionAccents.examples[2].lv.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sistēmas
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1675].study.sectionAccents.examples[2].lv.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 185: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** entry[1675].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sakabināt
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1675].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 186: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** entry[1675].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pieslēgt
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1675].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 187: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** entry[1675].study.sectionAccents.comparison[2].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pieslēdzu
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1675].study.sectionAccents.comparison[2].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 188: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** entry[1675].study.sectionAccents.tip.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mehāniska
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1675].study.sectionAccents.tip.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 189: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** entry[1675].study.sectionAccents.important.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vispārīgs
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1675].study.sectionAccents.important.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 190: b1-kurs

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kurs
- **Field:** entry[1679].study.sectionAccents.examples[1].lv.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Kuģis
- **DE source:** Kurs
- **LV reference:** kurss
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1679].study.sectionAccents.examples[1].lv.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 191: b1-kurs

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kurs
- **Field:** entry[1679].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mācību stunda
- **DE source:** Kurs
- **LV reference:** kurss
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1679].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 192: b1-kurs

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kurs
- **Field:** entry[1679].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Mācības
- **DE source:** Kurs
- **LV reference:** kurss
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1679].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 193: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** entry[1682].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atsevišķa konstrukcija
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1682].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 194: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** entry[1682].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** īsums
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1682].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 195: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** entry[1682].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** īsi
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1682].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 196: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** entry[1682].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** drīzumā
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1682].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 197: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** entry[1682].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** īsums
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1682].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 198: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** entry[1682].study.sectionAccents.comparison[0].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Īsums
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1682].study.sectionAccents.comparison[0].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 199: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** entry[1682].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** drīzumā
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1682].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 200: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** entry[1682].study.sectionAccents.comparison[1].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** drīzumā
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1682].study.sectionAccents.comparison[1].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 201: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** entry[1682].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** īss
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1682].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 202: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** entry[1682].study.sectionAccents.comparison[2].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** īss
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1682].study.sectionAccents.comparison[2].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 203: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** entry[1682].study.sectionAccents.important.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** drīzumā
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1682].study.sectionAccents.important.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 204: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** entry[1700].study.sectionAccents.explanation.green
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** cilvēkiem
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1700].study.sectionAccents.explanation.green
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 205: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** entry[1700].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jāuzlādē
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1700].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 206: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** entry[1700].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ielūdz
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1700].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 207: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** entry[1700].study.sectionAccents.examples[2].lv.green
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mūs
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1700].study.sectionAccents.examples[2].lv.green
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 208: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** entry[1700].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzlādēt
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1700].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 209: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** entry[1700].study.sectionAccents.comparison[0].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzlādēju
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1700].study.sectionAccents.comparison[0].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 210: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** entry[1700].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ielūgt
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1700].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 211: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** entry[1700].study.sectionAccents.comparison[1].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ielūdz
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1700].study.sectionAccents.comparison[1].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 212: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** entry[1700].study.sectionAccents.important.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Ielūgt
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1700].study.sectionAccents.important.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 213: b1-lager

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-lager
- **Field:** entry[1704].study.sectionAccents.explanation.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** glabāšanas vieta
- **DE source:** Lager
- **LV reference:** noliktava
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1704].study.sectionAccents.explanation.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 214: b1-lager

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-lager
- **Field:** entry[1704].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** noliktavā
- **DE source:** Lager
- **LV reference:** noliktava
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1704].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 215: b1-lager

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-lager
- **Field:** entry[1704].study.sectionAccents.examples[1].lv.green
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Bērni
- **DE source:** Lager
- **LV reference:** noliktava
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1704].study.sectionAccents.examples[1].lv.green
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 216: b1-lager

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-lager
- **Field:** entry[1704].study.sectionAccents.examples[2].lv.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Mašīnas
- **DE source:** Lager
- **LV reference:** noliktava
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1704].study.sectionAccents.examples[2].lv.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 217: b1-lager

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-lager
- **Field:** entry[1704].study.sectionAccents.comparison[0].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** noliktavā
- **DE source:** Lager
- **LV reference:** noliktava
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1704].study.sectionAccents.comparison[0].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 218: b1-lager

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-lager
- **Field:** entry[1704].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** naktsmītne
- **DE source:** Lager
- **LV reference:** noliktava
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1704].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 219: b1-lager

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-lager
- **Field:** entry[1704].study.sectionAccents.comparison[1].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Naktsmītne
- **DE source:** Lager
- **LV reference:** noliktava
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1704].study.sectionAccents.comparison[1].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 220: b1-lager

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-lager
- **Field:** entry[1704].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** glabājas
- **DE source:** Lager
- **LV reference:** noliktava
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1704].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 221: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.explanation.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tālruņa
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.explanation.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 222: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Klausītāji
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 223: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** klausītājus
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 224: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.examples[1].lv.green
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vadītājs
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.examples[1].lv.green
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 225: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** klausītājs
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 226: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.comparison[0].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Klausītāji
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.comparison[0].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 227: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** klausītājs klātienē
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 228: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.comparison[1].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Klausītāji
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.comparison[1].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 229: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** austiņas
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 230: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.comparison[2].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** austiņas
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.comparison[2].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 231: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** klausās
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 232: b1-hörer

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-hörer
- **Field:** entry[1708].study.sectionAccents.important.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Tālruņa
- **DE source:** Hörer
- **LV reference:** klausītājs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1708].study.sectionAccents.important.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 233: b1-inhalt

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-inhalt
- **Field:** entry[1709].study.sectionAccents.examples[0].lv.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vēstules
- **DE source:** Inhalt
- **LV reference:** saturs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1709].study.sectionAccents.examples[0].lv.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 234: b1-inhalt

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-inhalt
- **Field:** entry[1709].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tēma
- **DE source:** Inhalt
- **LV reference:** saturs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1709].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 235: b1-inhalt

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-inhalt
- **Field:** entry[1709].study.sectionAccents.comparison[1].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Tēma
- **DE source:** Inhalt
- **LV reference:** saturs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1709].study.sectionAccents.comparison[1].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 236: b1-inhalt

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-inhalt
- **Field:** entry[1709].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iekšā
- **DE source:** Inhalt
- **LV reference:** saturs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1709].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 237: b1-kante

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-kante
- **Field:** entry[1710].study.sectionAccents.examples[0].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** asās
- **DE source:** Kante
- **LV reference:** mala
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1710].study.sectionAccents.examples[0].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 238: b1-kante

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-kante
- **Field:** entry[1710].study.sectionAccents.examples[2].lv.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** glāzi
- **DE source:** Kante
- **LV reference:** mala
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1710].study.sectionAccents.examples[2].lv.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 239: b1-kante

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-kante
- **Field:** entry[1710].study.sectionAccents.comparison[1].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Malā
- **DE source:** Kante
- **LV reference:** mala
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1710].study.sectionAccents.comparison[1].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 240: b1-kastanie

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-kastanie
- **Field:** entry[1711].study.sectionAccents.examples[0].lv.green
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mājas
- **DE source:** Kastanie
- **LV reference:** kastanis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1711].study.sectionAccents.examples[0].lv.green
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 241: b1-kastanie

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-kastanie
- **Field:** entry[1711].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kastaņus
- **DE source:** Kastanie
- **LV reference:** kastanis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1711].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 242: b1-kastanie

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-kastanie
- **Field:** entry[1711].study.sectionAccents.examples[1].lv.green
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Bērns
- **DE source:** Kastanie
- **LV reference:** kastanis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1711].study.sectionAccents.examples[1].lv.green
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 243: b1-kastanie

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-kastanie
- **Field:** entry[1711].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kastaņi
- **DE source:** Kastanie
- **LV reference:** kastanis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1711].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 244: b1-kastanie

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-kastanie
- **Field:** entry[1711].study.sectionAccents.examples[2].lv.green
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Rudenī
- **DE source:** Kastanie
- **LV reference:** kastanis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1711].study.sectionAccents.examples[2].lv.green
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 245: b1-kastanie

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-kastanie
- **Field:** entry[1711].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kastaņu koks
- **DE source:** Kastanie
- **LV reference:** kastanis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1711].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 246: b1-kastanie

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-kastanie
- **Field:** entry[1711].study.sectionAccents.comparison[1].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Kastaņu koks
- **DE source:** Kastanie
- **LV reference:** kastanis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1711].study.sectionAccents.comparison[1].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 247: b1-landen

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-landen
- **Field:** entry[1715].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nosēžas
- **DE source:** landen
- **LV reference:** nosēsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1715].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 248: b1-landen

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-landen
- **Field:** entry[1715].study.sectionAccents.examples[0].lv.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Lidmašīna
- **DE source:** landen
- **LV reference:** nosēsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1715].study.sectionAccents.examples[0].lv.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 249: b1-landen

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-landen
- **Field:** entry[1715].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piestāj
- **DE source:** landen
- **LV reference:** nosēsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1715].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 250: b1-landen

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-landen
- **Field:** entry[1715].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nonāk
- **DE source:** landen
- **LV reference:** nosēsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1715].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 251: b1-landen

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-landen
- **Field:** entry[1715].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nosēsties
- **DE source:** landen
- **LV reference:** nosēsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1715].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 252: b1-landen

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-landen
- **Field:** entry[1715].study.sectionAccents.comparison[0].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nosēžas
- **DE source:** landen
- **LV reference:** nosēsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1715].study.sectionAccents.comparison[0].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 253: b1-landen

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-landen
- **Field:** entry[1715].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piestāt ar kuģi
- **DE source:** landen
- **LV reference:** nosēsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1715].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 254: b1-landen

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-landen
- **Field:** entry[1715].study.sectionAccents.comparison[2].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piestāj
- **DE source:** landen
- **LV reference:** nosēsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1715].study.sectionAccents.comparison[2].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 255: b1-landen

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-landen
- **Field:** entry[1715].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nonāk
- **DE source:** landen
- **LV reference:** nosēsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1715].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 256: b1-landen

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-landen
- **Field:** entry[1715].study.sectionAccents.tip.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Lidmašīna
- **DE source:** landen
- **LV reference:** nosēsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1715].study.sectionAccents.tip.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 257: b1-leisten

- **Dataset:** b1
- **Batch:** 1751-1800
- **Card/Index:** b1-leisten
- **Field:** entry[1761].study.sectionAccents.examples[1].lv.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** palīdzību
- **DE source:** leisten
- **LV reference:** veikt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1761].study.sectionAccents.examples[1].lv.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 258: b1-leisten

- **Dataset:** b1
- **Batch:** 1751-1800
- **Card/Index:** b1-leisten
- **Field:** entry[1761].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atļauties
- **DE source:** leisten
- **LV reference:** veikt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1761].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 259: b1-leisten

- **Dataset:** b1
- **Batch:** 1751-1800
- **Card/Index:** b1-leisten
- **Field:** entry[1761].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atļauties
- **DE source:** leisten
- **LV reference:** veikt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1761].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 260: b1-leisten

- **Dataset:** b1
- **Batch:** 1751-1800
- **Card/Index:** b1-leisten
- **Field:** entry[1761].study.sectionAccents.comparison[2].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atļauties
- **DE source:** leisten
- **LV reference:** veikt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1761].study.sectionAccents.comparison[2].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 261: b1-leisten

- **Dataset:** b1
- **Batch:** 1751-1800
- **Card/Index:** b1-leisten
- **Field:** entry[1761].study.sectionAccents.important.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atļauties
- **DE source:** leisten
- **LV reference:** veikt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1761].study.sectionAccents.important.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 262: b1-locker

- **Dataset:** b1
- **Batch:** 1751-1800
- **Card/Index:** b1-locker
- **Field:** entry[1791].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vaļīga
- **DE source:** locker
- **LV reference:** vaļīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1791].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 263: b1-locker

- **Dataset:** b1
- **Batch:** 1751-1800
- **Card/Index:** b1-locker
- **Field:** entry[1791].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** brīvu
- **DE source:** locker
- **LV reference:** vaļīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1791].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 264: b1-locker

- **Dataset:** b1
- **Batch:** 1751-1800
- **Card/Index:** b1-locker
- **Field:** entry[1791].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vaļīgs
- **DE source:** locker
- **LV reference:** vaļīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1791].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 265: b1-locker

- **Dataset:** b1
- **Batch:** 1751-1800
- **Card/Index:** b1-locker
- **Field:** entry[1791].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vaļējs
- **DE source:** locker
- **LV reference:** vaļīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1791].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 266: b1-los

- **Dataset:** b1
- **Batch:** 1751-1800
- **Card/Index:** b1-los
- **Field:** entry[1798].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** laimēja
- **DE source:** Los
- **LV reference:** loze
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1798].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 267: b1-löschen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-löschen
- **Field:** entry[1800].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dzēš
- **DE source:** löschen
- **LV reference:** dzēst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1800].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 268: b1-löschen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-löschen
- **Field:** entry[1800].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dzēš
- **DE source:** löschen
- **LV reference:** dzēst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1800].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 269: b1-löschen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-löschen
- **Field:** entry[1800].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izdzēs
- **DE source:** löschen
- **LV reference:** dzēst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1800].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 270: b1-löschen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-löschen
- **Field:** entry[1800].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** remdē
- **DE source:** löschen
- **LV reference:** dzēst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1800].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 271: b1-löschen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-löschen
- **Field:** entry[1800].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dzēst
- **DE source:** löschen
- **LV reference:** dzēst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1800].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 272: b1-löschen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-löschen
- **Field:** entry[1800].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izslēgt
- **DE source:** löschen
- **LV reference:** dzēst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1800].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 273: b1-löschen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-löschen
- **Field:** entry[1800].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atrisināt
- **DE source:** löschen
- **LV reference:** dzēst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1800].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 274: b1-lösen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösen
- **Field:** entry[1801].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atrisināt
- **DE source:** lösen
- **LV reference:** atrisināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1801].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 275: b1-lösen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösen
- **Field:** entry[1801].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jāatrisina
- **DE source:** lösen
- **LV reference:** atrisināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1801].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 276: b1-lösen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösen
- **Field:** entry[1801].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izšķīst
- **DE source:** lösen
- **LV reference:** atrisināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1801].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 277: b1-lösen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösen
- **Field:** entry[1801].study.sectionAccents.examples[3].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pērku
- **DE source:** lösen
- **LV reference:** atrisināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1801].study.sectionAccents.examples[3].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 278: b1-lösen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösen
- **Field:** entry[1801].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atrisināt
- **DE source:** lösen
- **LV reference:** atrisināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1801].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 279: b1-lösen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösen
- **Field:** entry[1801].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izšķīdināt
- **DE source:** lösen
- **LV reference:** atrisināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1801].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 280: b1-lösen

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösen
- **Field:** entry[1801].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dzēst
- **DE source:** lösen
- **LV reference:** atrisināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1801].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 281: b1-lösung

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösung
- **Field:** entry[1803].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** risinājums
- **DE source:** Lösung
- **LV reference:** risinājums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[1803].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 282: b1-lösung

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösung
- **Field:** entry[1803].study.sectionAccents.explanation.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šķīdumu
- **DE source:** Lösung
- **LV reference:** risinājums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1803].study.sectionAccents.explanation.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 283: b1-lösung

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösung
- **Field:** entry[1803].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** risinājumu
- **DE source:** Lösung
- **LV reference:** risinājums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1803].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 284: b1-lösung

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösung
- **Field:** entry[1803].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** risinājums
- **DE source:** Lösung
- **LV reference:** risinājums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[1803].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 285: b1-lösung

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösung
- **Field:** entry[1803].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šķīdums
- **DE source:** Lösung
- **LV reference:** risinājums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1803].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 286: b1-lösung

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösung
- **Field:** entry[1803].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** risinājums
- **DE source:** Lösung
- **LV reference:** risinājums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[1803].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 287: b1-lösung

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-lösung
- **Field:** entry[1803].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rezultāts
- **DE source:** Lösung
- **LV reference:** risinājums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1803].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 288: b1-macht

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-macht
- **Field:** entry[1814].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** spēks
- **DE source:** Macht
- **LV reference:** vara
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1814].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 289: b1-maß

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-maß
- **Field:** entry[1844].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mēru
- **DE source:** Maß
- **LV reference:** mērs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1844].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 290: b1-maß

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-maß
- **Field:** entry[1844].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mērs
- **DE source:** Maß
- **LV reference:** mērs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1844].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 291: b1-maß

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-maß
- **Field:** entry[1844].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mēru
- **DE source:** Maß
- **LV reference:** mērs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1844].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 292: b1-maß

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-maß
- **Field:** entry[1844].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izmērus
- **DE source:** Maß
- **LV reference:** mērs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1844].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 293: b1-maß

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-maß
- **Field:** entry[1844].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mērs
- **DE source:** Maß
- **LV reference:** mērs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1844].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 294: b1-maß

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-maß
- **Field:** entry[1844].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izmēri
- **DE source:** Maß
- **LV reference:** mērs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1844].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 295: b1-maß

- **Dataset:** b1
- **Batch:** 1801-1850
- **Card/Index:** b1-maß
- **Field:** entry[1844].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pasākums
- **DE source:** Maß
- **LV reference:** mērs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1844].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 296: b1-messe

- **Dataset:** b1
- **Batch:** 1851-1900
- **Card/Index:** b1-messe
- **Field:** entry[1871].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izstāde
- **DE source:** Messe
- **LV reference:** gadatirgus
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1871].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 297: b1-messe

- **Dataset:** b1
- **Batch:** 1851-1900
- **Card/Index:** b1-messe
- **Field:** entry[1871].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izstādi
- **DE source:** Messe
- **LV reference:** gadatirgus
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1871].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 298: b1-messe

- **Dataset:** b1
- **Batch:** 1851-1900
- **Card/Index:** b1-messe
- **Field:** entry[1871].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izstādē
- **DE source:** Messe
- **LV reference:** gadatirgus
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1871].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 299: b1-messe

- **Dataset:** b1
- **Batch:** 1851-1900
- **Card/Index:** b1-messe
- **Field:** entry[1871].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izstāde
- **DE source:** Messe
- **LV reference:** gadatirgus
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1871].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 300: b1-messe

- **Dataset:** b1
- **Batch:** 1851-1900
- **Card/Index:** b1-messe
- **Field:** entry[1871].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izstāde
- **DE source:** Messe
- **LV reference:** gadatirgus
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1871].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 301: b1-messe

- **Dataset:** b1
- **Batch:** 1851-1900
- **Card/Index:** b1-messe
- **Field:** entry[1871].study.sectionAccents.tip.green
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Uzņēmumi
- **DE source:** Messe
- **LV reference:** gadatirgus
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1871].study.sectionAccents.tip.green
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 302: b1-nachdem

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachdem
- **Field:** entry[1941].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pēc tam kad
- **DE source:** nachdem
- **LV reference:** pēc tam kad
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1941].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 303: b1-nachdem

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachdem
- **Field:** entry[1941].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** beigās
- **DE source:** nachdem
- **LV reference:** pēc tam kad
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1941].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 304: b1-nachdem

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachdem
- **Field:** entry[1941].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Pēc tam kad
- **DE source:** nachdem
- **LV reference:** pēc tam kad
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1941].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 305: b1-nachdem

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachdem
- **Field:** entry[1941].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Pēc tam kad
- **DE source:** nachdem
- **LV reference:** pēc tam kad
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1941].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 306: b1-nachdem

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachdem
- **Field:** entry[1941].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Atkarībā
- **DE source:** nachdem
- **LV reference:** pēc tam kad
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1941].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 307: b1-nachdem

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachdem
- **Field:** entry[1941].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pēc tam kad
- **DE source:** nachdem
- **LV reference:** pēc tam kad
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1941].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 308: b1-nachdem

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachdem
- **Field:** entry[1941].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pēc tam
- **DE source:** nachdem
- **LV reference:** pēc tam kad
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1941].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 309: b1-nachfrage

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachfrage
- **Field:** entry[1943].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pieprasījumu
- **DE source:** Nachfrage
- **LV reference:** pieprasījums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1943].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 310: b1-nachfrage

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachfrage
- **Field:** entry[1943].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jautājumu
- **DE source:** Nachfrage
- **LV reference:** pieprasījums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1943].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 311: b1-nachfrage

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachfrage
- **Field:** entry[1943].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Pieprasījums
- **DE source:** Nachfrage
- **LV reference:** pieprasījums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[1943].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 312: b1-nachfrage

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachfrage
- **Field:** entry[1943].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pieprasījums
- **DE source:** Nachfrage
- **LV reference:** pieprasījums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[1943].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 313: b1-nachfrage

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachfrage
- **Field:** entry[1943].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apvaicāšanos
- **DE source:** Nachfrage
- **LV reference:** pieprasījums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1943].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 314: b1-nachfrage

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachfrage
- **Field:** entry[1943].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pieprasījums
- **DE source:** Nachfrage
- **LV reference:** pieprasījums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[1943].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 315: b1-nachfrage

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachfrage
- **Field:** entry[1943].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jautājums
- **DE source:** Nachfrage
- **LV reference:** pieprasījums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[1943].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 316: b1-nachfrage

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachfrage
- **Field:** entry[1943].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piedāvājums
- **DE source:** Nachfrage
- **LV reference:** pieprasījums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[1943].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 317: b1-nachgeben

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachgeben
- **Field:** entry[1944].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piekāpties
- **DE source:** nachgeben
- **LV reference:** piekāpties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1944].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 318: b1-nachgeben

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachgeben
- **Field:** entry[1944].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piekāpās
- **DE source:** nachgeben
- **LV reference:** piekāpties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1944].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 319: b1-nachgeben

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachgeben
- **Field:** entry[1944].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piekāpties
- **DE source:** nachgeben
- **LV reference:** piekāpties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1944].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 320: b1-nachgeben

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachgeben
- **Field:** entry[1944].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atzīt
- **DE source:** nachgeben
- **LV reference:** piekāpties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1944].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 321: b1-nachgeben

- **Dataset:** b1
- **Batch:** 1901-1950
- **Card/Index:** b1-nachgeben
- **Field:** entry[1944].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** solis atpakaļ
- **DE source:** nachgeben
- **LV reference:** piekāpties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1944].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 322: b1-neigen

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-neigen
- **Field:** entry[1972].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mēdz
- **DE source:** neigen
- **LV reference:** tiekties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1972].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 323: b1-neigen

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-neigen
- **Field:** entry[1972].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** locīt
- **DE source:** neigen
- **LV reference:** tiekties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1972].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 324: b1-neigung

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-neigung
- **Field:** entry[1973].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** slīpumu
- **DE source:** Neigung
- **LV reference:** tieksme
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1973].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 325: b1-neigung

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-neigung
- **Field:** entry[1973].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** slīpums
- **DE source:** Neigung
- **LV reference:** tieksme
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1973].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 326: b1-neigung

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-neigung
- **Field:** entry[1973].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nogāze
- **DE source:** Neigung
- **LV reference:** tieksme
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1973].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 327: b1-nerven

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nerven
- **Field:** entry[1976].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kaitināt
- **DE source:** nerven
- **LV reference:** kaitināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1976].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 328: b1-nerven

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nerven
- **Field:** entry[1976].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sarunvalodā
- **DE source:** nerven
- **LV reference:** kaitināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1976].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 329: b1-nerven

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nerven
- **Field:** entry[1976].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** krīti uz nerviem
- **DE source:** nerven
- **LV reference:** kaitināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1976].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 330: b1-nerven

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nerven
- **Field:** entry[1976].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kaitināt
- **DE source:** nerven
- **LV reference:** kaitināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1976].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 331: b1-nerven

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nerven
- **Field:** entry[1976].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** traucēt
- **DE source:** nerven
- **LV reference:** kaitināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1976].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 332: b1-nerven

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nerven
- **Field:** entry[1976].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** krīt uz nerviem
- **DE source:** nerven
- **LV reference:** kaitināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1976].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 333: b1-nieder

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nieder
- **Field:** entry[1981].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lejā
- **DE source:** nieder
- **LV reference:** lejā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1981].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 334: b1-nieder

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nieder
- **Field:** entry[1981].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** salikteņos
- **DE source:** nieder
- **LV reference:** lejā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1981].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 335: b1-nieder

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nieder
- **Field:** entry[1981].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** zemē
- **DE source:** nieder
- **LV reference:** lejā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1981].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 336: b1-nieder

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nieder
- **Field:** entry[1981].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nogāza
- **DE source:** nieder
- **LV reference:** lejā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1981].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 337: b1-nieder

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nieder
- **Field:** entry[1981].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apsēdās
- **DE source:** nieder
- **LV reference:** lejā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1981].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 338: b1-nieder

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nieder
- **Field:** entry[1981].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lejā
- **DE source:** nieder
- **LV reference:** lejā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1981].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 339: b1-nieder

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nieder
- **Field:** entry[1981].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apakšā
- **DE source:** nieder
- **LV reference:** lejā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1981].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 340: b1-not

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-not
- **Field:** entry[1993].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** trūkumu
- **DE source:** Not
- **LV reference:** trūkums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1993].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 341: b1-not

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-not
- **Field:** entry[1993].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** spiedīgu situāciju
- **DE source:** Not
- **LV reference:** trūkums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1993].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 342: b1-not

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-not
- **Field:** entry[1993].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** trūkumā
- **DE source:** Not
- **LV reference:** trūkums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1993].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 343: b1-not

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-not
- **Field:** entry[1993].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Grūtā brīdī
- **DE source:** Not
- **LV reference:** trūkums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1993].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 344: b1-not

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-not
- **Field:** entry[1993].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Ja vajadzēs
- **DE source:** Not
- **LV reference:** trūkums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1993].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 345: b1-not

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-not
- **Field:** entry[1993].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** trūkums
- **DE source:** Not
- **LV reference:** trūkums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1993].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 346: b1-not

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-not
- **Field:** entry[1993].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nepieciešamība
- **DE source:** Not
- **LV reference:** trūkums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1993].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 347: b1-not

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-not
- **Field:** entry[1993].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ārkārtas gadījums
- **DE source:** Not
- **LV reference:** trūkums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[1993].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 348: b1-not

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-not
- **Field:** entry[1993].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vajadzība
- **DE source:** Not
- **LV reference:** trūkums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1993].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 349: b1-nüchtern

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nüchtern
- **Field:** entry[1999].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tukšā dūšā
- **DE source:** nüchtern
- **LV reference:** neiereibis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1999].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 350: b1-nüchtern

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nüchtern
- **Field:** entry[1999].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tukšā dūšā
- **DE source:** nüchtern
- **LV reference:** neiereibis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1999].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 351: b1-nüchtern

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nüchtern
- **Field:** entry[1999].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lietišķi
- **DE source:** nüchtern
- **LV reference:** neiereibis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1999].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 352: b1-nüchtern

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nüchtern
- **Field:** entry[1999].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piedzēries
- **DE source:** nüchtern
- **LV reference:** neiereibis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1999].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 353: b1-nüchtern

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nüchtern
- **Field:** entry[1999].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lietišķs
- **DE source:** nüchtern
- **LV reference:** neiereibis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1999].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 354: b1-nüchtern

- **Dataset:** b1
- **Batch:** 1951-2000
- **Card/Index:** b1-nüchtern
- **Field:** entry[1999].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tukšā dūšā
- **DE source:** nüchtern
- **LV reference:** neiereibis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1999].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 355: b1-objekt

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-objekt
- **Field:** entry[2010].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** papildinātāju
- **DE source:** Objekt
- **LV reference:** objekts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2010].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 356: b1-objekt

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-objekt
- **Field:** entry[2010].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** papildinātājs
- **DE source:** Objekt
- **LV reference:** objekts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2010].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 357: b1-objekt

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-objekt
- **Field:** entry[2010].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** papildinātājs
- **DE source:** Objekt
- **LV reference:** objekts
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2010].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 358: b1-ohnmacht

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-ohnmacht
- **Field:** entry[2021].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bezsamaņu
- **DE source:** Ohnmacht
- **LV reference:** bezsamaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2021].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 359: b1-ohnmacht

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-ohnmacht
- **Field:** entry[2021].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bezspēcību
- **DE source:** Ohnmacht
- **LV reference:** bezsamaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2021].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 360: b1-ohnmacht

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-ohnmacht
- **Field:** entry[2021].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** noģība
- **DE source:** Ohnmacht
- **LV reference:** bezsamaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2021].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 361: b1-ohnmacht

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-ohnmacht
- **Field:** entry[2021].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bezsamaņā
- **DE source:** Ohnmacht
- **LV reference:** bezsamaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2021].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 362: b1-ohnmacht

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-ohnmacht
- **Field:** entry[2021].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bezspēcību
- **DE source:** Ohnmacht
- **LV reference:** bezsamaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2021].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 363: b1-ohnmacht

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-ohnmacht
- **Field:** entry[2021].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bezsamaņa
- **DE source:** Ohnmacht
- **LV reference:** bezsamaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2021].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 364: b1-ohnmacht

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-ohnmacht
- **Field:** entry[2021].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bezsamaņa
- **DE source:** Ohnmacht
- **LV reference:** bezsamaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2021].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 365: b1-ohnmacht

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-ohnmacht
- **Field:** entry[2021].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bezspēcība
- **DE source:** Ohnmacht
- **LV reference:** bezsamaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2021].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 366: b1-ohnmacht

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-ohnmacht
- **Field:** entry[2021].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** noģībt
- **DE source:** Ohnmacht
- **LV reference:** bezsamaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2021].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 367: b1-ohnmacht

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-ohnmacht
- **Field:** entry[2021].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** neko nevar ietekmēt
- **DE source:** Ohnmacht
- **LV reference:** bezsamaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2021].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 368: b1-opfern

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-opfern
- **Field:** entry[2035].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** upurēt
- **DE source:** opfern
- **LV reference:** upurēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2035].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 369: b1-opfern

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-opfern
- **Field:** entry[2035].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** upurē
- **DE source:** opfern
- **LV reference:** upurēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2035].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 370: b1-opfern

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-opfern
- **Field:** entry[2035].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** upurē
- **DE source:** opfern
- **LV reference:** upurēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2035].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 371: b1-opfern

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-opfern
- **Field:** entry[2035].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** upurēt
- **DE source:** opfern
- **LV reference:** upurēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2035].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 372: b1-opfern

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-opfern
- **Field:** entry[2035].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iestāties
- **DE source:** opfern
- **LV reference:** upurēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2035].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 373: b1-orientieren

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-orientieren
- **Field:** entry[2042].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** orientēties
- **DE source:** orientieren
- **LV reference:** orientēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2042].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 374: b1-orientieren

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-orientieren
- **Field:** entry[2042].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vadīties
- **DE source:** orientieren
- **LV reference:** orientēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2042].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 375: b1-orientieren

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-orientieren
- **Field:** entry[2042].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** orientējos
- **DE source:** orientieren
- **LV reference:** orientēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2042].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 376: b1-orientieren

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-orientieren
- **Field:** entry[2042].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vadāmies
- **DE source:** orientieren
- **LV reference:** orientēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2042].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 377: b1-orientieren

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-orientieren
- **Field:** entry[2042].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** orientēties
- **DE source:** orientieren
- **LV reference:** orientēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2042].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 378: b1-orientieren

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-orientieren
- **Field:** entry[2042].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** orientēties
- **DE source:** orientieren
- **LV reference:** orientēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2042].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 379: b1-orientieren

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-orientieren
- **Field:** entry[2042].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iegūt informāciju
- **DE source:** orientieren
- **LV reference:** orientēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2042].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 380: b1-orientieren

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-orientieren
- **Field:** entry[2042].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vadīties pēc
- **DE source:** orientieren
- **LV reference:** orientēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2042].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 381: b1-orientieren

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-orientieren
- **Field:** entry[2042].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vadīties
- **DE source:** orientieren
- **LV reference:** orientēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2042].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 382: b1-orientieren

- **Dataset:** b1
- **Batch:** 2001-2050
- **Card/Index:** b1-orientieren
- **Field:** entry[2042].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** refleksīvi
- **DE source:** orientieren
- **LV reference:** orientēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2042].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 383: b1-periode

- **Dataset:** b1
- **Batch:** 2051-2100
- **Card/Index:** b1-periode
- **Field:** entry[2080].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** menstruāciju
- **DE source:** Periode
- **LV reference:** periods
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2080].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 384: b1-periode

- **Dataset:** b1
- **Batch:** 2051-2100
- **Card/Index:** b1-periode
- **Field:** entry[2080].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** posmā
- **DE source:** Periode
- **LV reference:** periods
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2080].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 385: b1-periode

- **Dataset:** b1
- **Batch:** 2051-2100
- **Card/Index:** b1-periode
- **Field:** entry[2080].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mēnešreizes
- **DE source:** Periode
- **LV reference:** periods
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2080].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 386: b1-periode

- **Dataset:** b1
- **Batch:** 2051-2100
- **Card/Index:** b1-periode
- **Field:** entry[2080].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mēnešreizes
- **DE source:** Periode
- **LV reference:** periods
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2080].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 387: b1-periode

- **Dataset:** b1
- **Batch:** 2051-2100
- **Card/Index:** b1-periode
- **Field:** entry[2080].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mēnešreizes
- **DE source:** Periode
- **LV reference:** periods
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2080].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 388: b1-pflegen

- **Dataset:** b1
- **Batch:** 2051-2100
- **Card/Index:** b1-pflegen
- **Field:** entry[2099].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mēdz darīt
- **DE source:** pflegen
- **LV reference:** kopt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2099].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 389: b1-pflegen

- **Dataset:** b1
- **Batch:** 2051-2100
- **Card/Index:** b1-pflegen
- **Field:** entry[2099].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jākopj
- **DE source:** pflegen
- **LV reference:** kopt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2099].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 390: b1-pflegen

- **Dataset:** b1
- **Batch:** 2051-2100
- **Card/Index:** b1-pflegen
- **Field:** entry[2099].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mēdz
- **DE source:** pflegen
- **LV reference:** kopt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2099].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 391: b1-pflegen

- **Dataset:** b1
- **Batch:** 2051-2100
- **Card/Index:** b1-pflegen
- **Field:** entry[2099].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rūpēties par
- **DE source:** pflegen
- **LV reference:** kopt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2099].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 392: b1-pflegen

- **Dataset:** b1
- **Batch:** 2051-2100
- **Card/Index:** b1-pflegen
- **Field:** entry[2099].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tīrīt
- **DE source:** pflegen
- **LV reference:** kopt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2099].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 393: b1-pflegen

- **Dataset:** b1
- **Batch:** 2051-2100
- **Card/Index:** b1-pflegen
- **Field:** entry[2099].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mēdz darīt
- **DE source:** pflegen
- **LV reference:** kopt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2099].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 394: b1-pochen

- **Dataset:** b1
- **Batch:** 2101-2150
- **Card/Index:** b1-pochen
- **Field:** entry[2130].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** klauvēt
- **DE source:** pochen
- **LV reference:** klauvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2130].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 395: b1-pochen

- **Dataset:** b1
- **Batch:** 2101-2150
- **Card/Index:** b1-pochen
- **Field:** entry[2130].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzstāt
- **DE source:** pochen
- **LV reference:** klauvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2130].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 396: b1-pochen

- **Dataset:** b1
- **Batch:** 2101-2150
- **Card/Index:** b1-pochen
- **Field:** entry[2130].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** klauvē
- **DE source:** pochen
- **LV reference:** klauvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2130].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 397: b1-pochen

- **Dataset:** b1
- **Batch:** 2101-2150
- **Card/Index:** b1-pochen
- **Field:** entry[2130].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzstāj
- **DE source:** pochen
- **LV reference:** klauvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2130].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 398: b1-pochen

- **Dataset:** b1
- **Batch:** 2101-2150
- **Card/Index:** b1-pochen
- **Field:** entry[2130].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** klauvēt
- **DE source:** pochen
- **LV reference:** klauvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2130].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 399: b1-pochen

- **Dataset:** b1
- **Batch:** 2101-2150
- **Card/Index:** b1-pochen
- **Field:** entry[2130].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** klauvēt
- **DE source:** pochen
- **LV reference:** klauvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2130].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 400: b1-pochen

- **Dataset:** b1
- **Batch:** 2101-2150
- **Card/Index:** b1-pochen
- **Field:** entry[2130].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzstāt uz
- **DE source:** pochen
- **LV reference:** klauvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2130].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 401: b1-pochen

- **Dataset:** b1
- **Batch:** 2101-2150
- **Card/Index:** b1-pochen
- **Field:** entry[2130].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzstāt
- **DE source:** pochen
- **LV reference:** klauvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2130].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 402: b1-posten

- **Dataset:** b1
- **Batch:** 2101-2150
- **Card/Index:** b1-posten
- **Field:** entry[2149].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** postenī
- **DE source:** Posten
- **LV reference:** amats
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2149].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 403: b1-posten

- **Dataset:** b1
- **Batch:** 2101-2150
- **Card/Index:** b1-posten
- **Field:** entry[2149].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pozīcija
- **DE source:** Posten
- **LV reference:** amats
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2149].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 404: b1-probe

- **Dataset:** b1
- **Batch:** 2151-2200
- **Card/Index:** b1-probe
- **Field:** entry[2165].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārbaudi
- **DE source:** Probe
- **LV reference:** pārbaude
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2165].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 405: b1-probe

- **Dataset:** b1
- **Batch:** 2151-2200
- **Card/Index:** b1-probe
- **Field:** entry[2165].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mēģinājumu
- **DE source:** Probe
- **LV reference:** pārbaude
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2165].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 406: b1-probe

- **Dataset:** b1
- **Batch:** 2151-2200
- **Card/Index:** b1-probe
- **Field:** entry[2165].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Pārbaude
- **DE source:** Probe
- **LV reference:** pārbaude
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2165].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 407: b1-probe

- **Dataset:** b1
- **Batch:** 2151-2200
- **Card/Index:** b1-probe
- **Field:** entry[2165].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mēģinājums
- **DE source:** Probe
- **LV reference:** pārbaude
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[2165].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 408: b1-probe

- **Dataset:** b1
- **Batch:** 2151-2200
- **Card/Index:** b1-probe
- **Field:** entry[2165].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārbaude
- **DE source:** Probe
- **LV reference:** pārbaude
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2165].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 409: b1-probe

- **Dataset:** b1
- **Batch:** 2151-2200
- **Card/Index:** b1-probe
- **Field:** entry[2165].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** eksāmens
- **DE source:** Probe
- **LV reference:** pārbaude
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2165].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 410: b1-rang

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rang
- **Field:** entry[2213].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Teātrī
- **DE source:** Rang
- **LV reference:** rangs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2213].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 411: b1-rang

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rang
- **Field:** entry[2213].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nozīme
- **DE source:** Rang
- **LV reference:** rangs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2213].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 412: b1-rang

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rang
- **Field:** entry[2213].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** balkonā
- **DE source:** Rang
- **LV reference:** rangs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2213].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 413: b1-rang

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rang
- **Field:** entry[2213].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Teātrī
- **DE source:** Rang
- **LV reference:** rangs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2213].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 414: b1-rasen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rasen
- **Field:** entry[2216].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** joņot
- **DE source:** rasen
- **LV reference:** joņot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2216].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 415: b1-rasen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rasen
- **Field:** entry[2216].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārāk ātri
- **DE source:** rasen
- **LV reference:** joņot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2216].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 416: b1-rasen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rasen
- **Field:** entry[2216].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** joņo
- **DE source:** rasen
- **LV reference:** joņot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2216].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 417: b1-rasen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rasen
- **Field:** entry[2216].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aiztraucās
- **DE source:** rasen
- **LV reference:** joņot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2216].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 418: b1-rasen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rasen
- **Field:** entry[2216].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** plosās
- **DE source:** rasen
- **LV reference:** joņot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2216].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 419: b1-rasen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rasen
- **Field:** entry[2216].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** joņot
- **DE source:** rasen
- **LV reference:** joņot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2216].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 420: b1-rasen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rasen
- **Field:** entry[2216].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** plosīties
- **DE source:** rasen
- **LV reference:** joņot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2216].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 421: b1-rasen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rasen
- **Field:** entry[2216].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārāk liels
- **DE source:** rasen
- **LV reference:** joņot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2216].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 422: b1-rate

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rate
- **Field:** entry[2225].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** maksājuma daļa
- **DE source:** Rate
- **LV reference:** iemaksa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2225].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 423: b1-rate

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rate
- **Field:** entry[2225].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pa daļām
- **DE source:** Rate
- **LV reference:** iemaksa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2225].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 424: b1-rate

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rate
- **Field:** entry[2225].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** maksājuma daļa
- **DE source:** Rate
- **LV reference:** iemaksa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2225].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 425: b1-räumen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-räumen
- **Field:** entry[2235].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** brīvu
- **DE source:** räumen
- **LV reference:** atbrīvot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2235].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 426: b1-räumen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-räumen
- **Field:** entry[2235].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atbrīvo
- **DE source:** räumen
- **LV reference:** atbrīvot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2235].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 427: b1-räumen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-räumen
- **Field:** entry[2235].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jāizvācas
- **DE source:** räumen
- **LV reference:** atbrīvot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2235].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 428: b1-räumen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-räumen
- **Field:** entry[2235].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sakārto
- **DE source:** räumen
- **LV reference:** atbrīvot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2235].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 429: b1-räumen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-räumen
- **Field:** entry[2235].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atbrīvot
- **DE source:** räumen
- **LV reference:** atbrīvot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2235].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 430: b1-räumen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-räumen
- **Field:** entry[2235].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sakārtot
- **DE source:** räumen
- **LV reference:** atbrīvot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2235].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 431: b1-räumen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-räumen
- **Field:** entry[2235].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atstāt
- **DE source:** räumen
- **LV reference:** atbrīvot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2235].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 432: b1-räumen

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-räumen
- **Field:** entry[2235].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** brīvai
- **DE source:** räumen
- **LV reference:** atbrīvot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2235].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 433: b1-rausch

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rausch
- **Field:** entry[2237].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** reibumā
- **DE source:** Rausch
- **LV reference:** reibums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2237].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 434: b1-rausch

- **Dataset:** b1
- **Batch:** 2201-2250
- **Card/Index:** b1-rausch
- **Field:** entry[2237].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atkarība
- **DE source:** Rausch
- **LV reference:** reibums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2237].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 435: b1-regeln

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-regeln
- **Field:** entry[2252].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nokārtot
- **DE source:** regeln
- **LV reference:** kārtot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2252].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 436: b1-regeln

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-regeln
- **Field:** entry[2252].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** regulēt
- **DE source:** regeln
- **LV reference:** kārtot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2252].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 437: b1-regeln

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-regeln
- **Field:** entry[2252].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nokārtosim
- **DE source:** regeln
- **LV reference:** kārtot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2252].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 438: b1-regeln

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-regeln
- **Field:** entry[2252].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** regulē
- **DE source:** regeln
- **LV reference:** kārtot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2252].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 439: b1-regeln

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-regeln
- **Field:** entry[2252].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** regulē
- **DE source:** regeln
- **LV reference:** kārtot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2252].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 440: b1-regeln

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-regeln
- **Field:** entry[2252].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kārtot
- **DE source:** regeln
- **LV reference:** kārtot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2252].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 441: b1-regeln

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-regeln
- **Field:** entry[2252].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** organizēt
- **DE source:** regeln
- **LV reference:** kārtot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2252].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 442: b1-regeln

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-regeln
- **Field:** entry[2252].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** noregulēt
- **DE source:** regeln
- **LV reference:** kārtot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2252].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 443: b1-regeln

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-regeln
- **Field:** entry[2252].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kārtībā
- **DE source:** regeln
- **LV reference:** kārtot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2252].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 444: b1-regeln

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-regeln
- **Field:** entry[2252].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** regulēšana
- **DE source:** regeln
- **LV reference:** kārtot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2252].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 445: b1-reißen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reißen
- **Field:** entry[2276].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** plīst
- **DE source:** reißen
- **LV reference:** plīst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2276].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 446: b1-reißen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reißen
- **Field:** entry[2276].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** plīst
- **DE source:** reißen
- **LV reference:** plīst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2276].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 447: b1-reißen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reißen
- **Field:** entry[2276].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saplēš
- **DE source:** reißen
- **LV reference:** plīst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2276].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 448: b1-reißen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reißen
- **Field:** entry[2276].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** plīst
- **DE source:** reißen
- **LV reference:** plīst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2276].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 449: b1-reißen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reißen
- **Field:** entry[2276].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ceļot
- **DE source:** reißen
- **LV reference:** plīst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2276].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 450: b1-reißen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reißen
- **Field:** entry[2276].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lūzt
- **DE source:** reißen
- **LV reference:** plīst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2276].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 451: b1-reizen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reizen
- **Field:** entry[2279].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kairināt
- **DE source:** reizen
- **LV reference:** kairināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2279].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 452: b1-reizen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reizen
- **Field:** entry[2279].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vilināt
- **DE source:** reizen
- **LV reference:** kairināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2279].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 453: b1-reizen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reizen
- **Field:** entry[2279].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizkaitināja
- **DE source:** reizen
- **LV reference:** kairināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2279].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 454: b1-reizen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reizen
- **Field:** entry[2279].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kairināt
- **DE source:** reizen
- **LV reference:** kairināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2279].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 455: b1-reizen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reizen
- **Field:** entry[2279].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kaitināt
- **DE source:** reizen
- **LV reference:** kairināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2279].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 456: b1-reizen

- **Dataset:** b1
- **Batch:** 2251-2300
- **Card/Index:** b1-reizen
- **Field:** entry[2279].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vilināt
- **DE source:** reizen
- **LV reference:** kairināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2279].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 457: b1-richten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-richten
- **Field:** entry[2307].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vērst
- **DE source:** richten
- **LV reference:** vērst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2307].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 458: b1-richten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-richten
- **Field:** entry[2307].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tiesāt
- **DE source:** richten
- **LV reference:** vērst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2307].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 459: b1-richten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-richten
- **Field:** entry[2307].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vērš
- **DE source:** richten
- **LV reference:** vērst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2307].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 460: b1-richten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-richten
- **Field:** entry[2307].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** adresēts
- **DE source:** richten
- **LV reference:** vērst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2307].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 461: b1-richten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-richten
- **Field:** entry[2307].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tiesā
- **DE source:** richten
- **LV reference:** vērst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2307].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 462: b1-richten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-richten
- **Field:** entry[2307].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vērst
- **DE source:** richten
- **LV reference:** vērst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2307].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 463: b1-richten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-richten
- **Field:** entry[2307].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sūtīt
- **DE source:** richten
- **LV reference:** vērst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2307].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 464: b1-richten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-richten
- **Field:** entry[2307].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sūtīt
- **DE source:** richten
- **LV reference:** vērst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2307].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 465: b1-rollen

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-rollen
- **Field:** entry[2331].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sarullē
- **DE source:** rollen
- **LV reference:** ripot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2331].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 466: b1-rollen

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-rollen
- **Field:** entry[2331].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Apaļa kustība
- **DE source:** rollen
- **LV reference:** ripot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2331].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 467: b1-rollen

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-rollen
- **Field:** entry[2331].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sarullēt
- **DE source:** rollen
- **LV reference:** ripot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2331].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 468: b1-rösten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-rösten
- **Field:** entry[2336].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** grauzdēt
- **DE source:** rösten
- **LV reference:** grauzdēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2336].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 469: b1-rösten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-rösten
- **Field:** entry[2336].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** grauzdējam
- **DE source:** rösten
- **LV reference:** grauzdēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2336].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 470: b1-rösten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-rösten
- **Field:** entry[2336].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apgrauzdēju
- **DE source:** rösten
- **LV reference:** grauzdēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2336].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 471: b1-rösten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-rösten
- **Field:** entry[2336].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** grauzdēti
- **DE source:** rösten
- **LV reference:** grauzdēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2336].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 472: b1-rösten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-rösten
- **Field:** entry[2336].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** grauzdēt
- **DE source:** rösten
- **LV reference:** grauzdēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2336].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 473: b1-rösten

- **Dataset:** b1
- **Batch:** 2301-2350
- **Card/Index:** b1-rösten
- **Field:** entry[2336].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** cept krāsnī
- **DE source:** rösten
- **LV reference:** grauzdēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2336].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 474: b1-ruf-2

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruf-2
- **Field:** entry[2353].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** reputāciju
- **DE source:** Ruf
- **LV reference:** sauciens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2353].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 475: b1-ruf-2

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruf-2
- **Field:** entry[2353].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** reputācija
- **DE source:** Ruf
- **LV reference:** sauciens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2353].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 476: b1-ruf-2

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruf-2
- **Field:** entry[2353].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** reputācija
- **DE source:** Ruf
- **LV reference:** sauciens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2353].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 477: b1-ruhen

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruhen
- **Field:** entry[2354].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** būt mierā
- **DE source:** ruhen
- **LV reference:** atpūsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2354].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 478: b1-ruhen

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruhen
- **Field:** entry[2354].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atpūšas
- **DE source:** ruhen
- **LV reference:** atpūsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2354].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 479: b1-ruhen

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruhen
- **Field:** entry[2354].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mierīgi
- **DE source:** ruhen
- **LV reference:** atpūsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2354].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 480: b1-ruhen

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruhen
- **Field:** entry[2354].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apturēts
- **DE source:** ruhen
- **LV reference:** atpūsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2354].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 481: b1-ruhen

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruhen
- **Field:** entry[2354].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** būt mierā
- **DE source:** ruhen
- **LV reference:** atpūsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2354].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 482: b1-ruhen

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruhen
- **Field:** entry[2354].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atpūsties
- **DE source:** ruhen
- **LV reference:** atpūsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2354].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 483: b1-ruhen

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruhen
- **Field:** entry[2354].study.sectionAccents.comparison[1].example.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atpūšos
- **DE source:** ruhen
- **LV reference:** atpūsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2354].study.sectionAccents.comparison[1].example.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 484: b1-ruhen

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruhen
- **Field:** entry[2354].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** gulēt
- **DE source:** ruhen
- **LV reference:** atpūsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2354].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 485: b1-ruhen

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-ruhen
- **Field:** entry[2354].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** formālāk
- **DE source:** ruhen
- **LV reference:** atpūsties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2354].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 486: b1-rüsten

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-rüsten
- **Field:** entry[2366].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bruņoties
- **DE source:** rüsten
- **LV reference:** sagatavoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2366].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 487: b1-rüsten

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-rüsten
- **Field:** entry[2366].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apbruņo
- **DE source:** rüsten
- **LV reference:** sagatavoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2366].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 488: b1-rüsten

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-rüsten
- **Field:** entry[2366].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bruņojumu
- **DE source:** rüsten
- **LV reference:** sagatavoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2366].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 489: b1-rüsten

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-rüsten
- **Field:** entry[2366].study.sectionAccents.tip.yellow
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aprīkojumu
- **DE source:** rüsten
- **LV reference:** sagatavoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2366].study.sectionAccents.tip.yellow
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 490: b1-saat

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-saat
- **Field:** entry[2370].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēklu
- **DE source:** Saat
- **LV reference:** sēkla
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2370].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 491: b1-saat

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-saat
- **Field:** entry[2370].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Sējums
- **DE source:** Saat
- **LV reference:** sēkla
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[2370].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 492: b1-saat

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-saat
- **Field:** entry[2370].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izsēj
- **DE source:** Saat
- **LV reference:** sēkla
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2370].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 493: b1-saat

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-saat
- **Field:** entry[2370].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Sējums
- **DE source:** Saat
- **LV reference:** sēkla
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[2370].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 494: b1-saat

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-saat
- **Field:** entry[2370].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sējums
- **DE source:** Saat
- **LV reference:** sēkla
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[2370].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 495: b1-saat

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-saat
- **Field:** entry[2370].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēkla
- **DE source:** Saat
- **LV reference:** sēkla
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2370].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 496: b1-saat

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-saat
- **Field:** entry[2370].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēt
- **DE source:** Saat
- **LV reference:** sēkla
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2370].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 497: b1-saat

- **Dataset:** b1
- **Batch:** 2351-2400
- **Card/Index:** b1-saat
- **Field:** entry[2370].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iesētais
- **DE source:** Saat
- **LV reference:** sēkla
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2370].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 498: b1-schale

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schale
- **Field:** entry[2405].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bļodu
- **DE source:** Schale
- **LV reference:** miza
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2405].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 499: b1-schale

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schale
- **Field:** entry[2405].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bļodu
- **DE source:** Schale
- **LV reference:** miza
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2405].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 500: b1-schale

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schale
- **Field:** entry[2405].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bļoda
- **DE source:** Schale
- **LV reference:** miza
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2405].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 501: b1-schicht

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schicht
- **Field:** entry[2427].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** slāni
- **DE source:** Schicht
- **LV reference:** slānis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2427].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 502: b1-schicht

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schicht
- **Field:** entry[2427].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** maiņu
- **DE source:** Schicht
- **LV reference:** slānis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2427].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 503: b1-schicht

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schicht
- **Field:** entry[2427].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** slānis
- **DE source:** Schicht
- **LV reference:** slānis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2427].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 504: b1-schicht

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schicht
- **Field:** entry[2427].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** maiņā
- **DE source:** Schicht
- **LV reference:** slānis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2427].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 505: b1-schicht

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schicht
- **Field:** entry[2427].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kārtu
- **DE source:** Schicht
- **LV reference:** slānis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2427].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 506: b1-schicht

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schicht
- **Field:** entry[2427].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** slānis
- **DE source:** Schicht
- **LV reference:** slānis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2427].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 507: b1-schicht

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schicht
- **Field:** entry[2427].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** situācija
- **DE source:** Schicht
- **LV reference:** slānis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2427].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 508: b1-schicht

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schicht
- **Field:** entry[2427].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** maiņu darbs
- **DE source:** Schicht
- **LV reference:** slānis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2427].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 509: b1-schicht

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schicht
- **Field:** entry[2427].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** maiņa
- **DE source:** Schicht
- **LV reference:** slānis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2427].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 510: b1-schicht

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schicht
- **Field:** entry[2427].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** maiņu
- **DE source:** Schicht
- **LV reference:** slānis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2427].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 511: b1-schimmel

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schimmel
- **Field:** entry[2436].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pelējumu
- **DE source:** Schimmel
- **LV reference:** pelējums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2436].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 512: b1-schimmel

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schimmel
- **Field:** entry[2436].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pelējums
- **DE source:** Schimmel
- **LV reference:** pelējums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[2436].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 513: b1-schimmel

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schimmel
- **Field:** entry[2436].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Pelējums
- **DE source:** Schimmel
- **LV reference:** pelējums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[2436].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 514: b1-schimmel

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schimmel
- **Field:** entry[2436].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pelējums
- **DE source:** Schimmel
- **LV reference:** pelējums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[2436].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 515: b1-schimmel

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schimmel
- **Field:** entry[2436].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēne
- **DE source:** Schimmel
- **LV reference:** pelējums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2436].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 516: b1-schimmel

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schimmel
- **Field:** entry[2436].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pelējums
- **DE source:** Schimmel
- **LV reference:** pelējums
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[2436].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 517: b1-schlag

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schlag
- **Field:** entry[2447].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** zibens spēriens
- **DE source:** Schlag
- **LV reference:** sitiens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2447].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 518: b1-schlag

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schlag
- **Field:** entry[2447].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Zibens spēriens
- **DE source:** Schlag
- **LV reference:** sitiens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2447].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 519: b1-schlag

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schlag
- **Field:** entry[2447].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** grūdiens
- **DE source:** Schlag
- **LV reference:** sitiens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2447].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 520: b1-schlag

- **Dataset:** b1
- **Batch:** 2401-2450
- **Card/Index:** b1-schlag
- **Field:** entry[2447].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** spēriens
- **DE source:** Schlag
- **LV reference:** sitiens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2447].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 521: b1-schleifen

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schleifen
- **Field:** entry[2458].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** slīpēt
- **DE source:** schleifen
- **LV reference:** slīpēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2458].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 522: b1-schleifen

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schleifen
- **Field:** entry[2458].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** noslīpējam
- **DE source:** schleifen
- **LV reference:** slīpēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2458].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 523: b1-schleifen

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schleifen
- **Field:** entry[2458].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** slīpēt
- **DE source:** schleifen
- **LV reference:** slīpēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2458].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 524: b1-schleifen

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schleifen
- **Field:** entry[2458].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** asināt
- **DE source:** schleifen
- **LV reference:** slīpēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2458].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 525: b1-schleifen

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schleifen
- **Field:** entry[2458].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apstrādā
- **DE source:** schleifen
- **LV reference:** slīpēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2458].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 526: b1-schmelzen

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmelzen
- **Field:** entry[2478].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kausēt
- **DE source:** schmelzen
- **LV reference:** kust
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2478].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 527: b1-schmelzen

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmelzen
- **Field:** entry[2478].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kūst
- **DE source:** schmelzen
- **LV reference:** kust
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2478].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 528: b1-schmelzen

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmelzen
- **Field:** entry[2478].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kausēju
- **DE source:** schmelzen
- **LV reference:** kust
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2478].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 529: b1-schmelzen

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmelzen
- **Field:** entry[2478].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atkausēt
- **DE source:** schmelzen
- **LV reference:** kust
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2478].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 530: b1-schmelzen

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmelzen
- **Field:** entry[2478].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vārīt
- **DE source:** schmelzen
- **LV reference:** kust
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2478].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 531: b1-schmieren

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmieren
- **Field:** entry[2484].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** smērēt
- **DE source:** schmieren
- **LV reference:** smērēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2484].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 532: b1-schmieren

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmieren
- **Field:** entry[2484].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nekārtīgi
- **DE source:** schmieren
- **LV reference:** smērēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2484].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 533: b1-schmieren

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmieren
- **Field:** entry[2484].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** smērē
- **DE source:** schmieren
- **LV reference:** smērēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2484].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 534: b1-schmieren

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmieren
- **Field:** entry[2484].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ieeļļo
- **DE source:** schmieren
- **LV reference:** smērēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2484].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 535: b1-schmieren

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmieren
- **Field:** entry[2484].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ķēpā
- **DE source:** schmieren
- **LV reference:** smērēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2484].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 536: b1-schmieren

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmieren
- **Field:** entry[2484].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** smērēt
- **DE source:** schmieren
- **LV reference:** smērēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2484].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 537: b1-schmieren

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmieren
- **Field:** entry[2484].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** krāsot
- **DE source:** schmieren
- **LV reference:** smērēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2484].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 538: b1-schmieren

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmieren
- **Field:** entry[2484].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** eļļot
- **DE source:** schmieren
- **LV reference:** smērēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2484].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 539: b1-schmücken

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmücken
- **Field:** entry[2488].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rotāt
- **DE source:** schmücken
- **LV reference:** rotāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2488].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 540: b1-schmücken

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmücken
- **Field:** entry[2488].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rotājam
- **DE source:** schmücken
- **LV reference:** rotāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2488].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 541: b1-schmücken

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmücken
- **Field:** entry[2488].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rotā
- **DE source:** schmücken
- **LV reference:** rotāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2488].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 542: b1-schmücken

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmücken
- **Field:** entry[2488].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rotājas
- **DE source:** schmücken
- **LV reference:** rotāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2488].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 543: b1-schmücken

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmücken
- **Field:** entry[2488].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rotāt
- **DE source:** schmücken
- **LV reference:** rotāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2488].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 544: b1-schmücken

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmücken
- **Field:** entry[2488].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dekorēt
- **DE source:** schmücken
- **LV reference:** rotāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2488].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 545: b1-schmücken

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmücken
- **Field:** entry[2488].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apģērbties
- **DE source:** schmücken
- **LV reference:** rotāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2488].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 546: b1-schmücken

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmücken
- **Field:** entry[2488].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** skaistāks
- **DE source:** schmücken
- **LV reference:** rotāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2488].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 547: b1-schmücken

- **Dataset:** b1
- **Batch:** 2451-2500
- **Card/Index:** b1-schmücken
- **Field:** entry[2488].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rotāties
- **DE source:** schmücken
- **LV reference:** rotāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2488].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 548: b1-schnitt

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schnitt
- **Field:** entry[2500].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** montāža
- **DE source:** Schnitt
- **LV reference:** griezums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2500].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 549: b1-schnitt

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schnitt
- **Field:** entry[2500].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vidējais rādītājs
- **DE source:** Schnitt
- **LV reference:** griezums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2500].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 550: b1-schnitt

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schnitt
- **Field:** entry[2500].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** brūce
- **DE source:** Schnitt
- **LV reference:** griezums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2500].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 551: b1-schuldig

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schuldig
- **Field:** entry[2527].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vainīgs
- **DE source:** schuldig
- **LV reference:** vainīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2527].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 552: b1-schuldig

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schuldig
- **Field:** entry[2527].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** parādā
- **DE source:** schuldig
- **LV reference:** vainīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2527].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 553: b1-schuldig

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schuldig
- **Field:** entry[2527].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vainīgs
- **DE source:** schuldig
- **LV reference:** vainīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2527].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 554: b1-schuldig

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schuldig
- **Field:** entry[2527].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vainīga
- **DE source:** schuldig
- **LV reference:** vainīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2527].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 555: b1-schuldig

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schuldig
- **Field:** entry[2527].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** parādā
- **DE source:** schuldig
- **LV reference:** vainīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2527].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 556: b1-schuldig

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schuldig
- **Field:** entry[2527].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vainīgs
- **DE source:** schuldig
- **LV reference:** vainīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2527].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 557: b1-schuldig

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schuldig
- **Field:** entry[2527].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nevainīgs
- **DE source:** schuldig
- **LV reference:** vainīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2527].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 558: b1-schuldig

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schuldig
- **Field:** entry[2527].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vainīgs
- **DE source:** schuldig
- **LV reference:** vainīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2527].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 559: b1-schuldig

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schuldig
- **Field:** entry[2527].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** parādā
- **DE source:** schuldig
- **LV reference:** vainīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2527].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 560: b1-schuldig

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schuldig
- **Field:** entry[2527].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** parādā
- **DE source:** schuldig
- **LV reference:** vainīgs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2527].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 561: b1-schützen

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schützen
- **Field:** entry[2538].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizsargāt
- **DE source:** schützen
- **LV reference:** aizsargāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2538].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 562: b1-schützen

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schützen
- **Field:** entry[2538].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizsargā
- **DE source:** schützen
- **LV reference:** aizsargāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2538].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 563: b1-schützen

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schützen
- **Field:** entry[2538].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizsargājam
- **DE source:** schützen
- **LV reference:** aizsargāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2538].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 564: b1-schützen

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schützen
- **Field:** entry[2538].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jāaizsargājas
- **DE source:** schützen
- **LV reference:** aizsargāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2538].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 565: b1-schützen

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schützen
- **Field:** entry[2538].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizsargāt
- **DE source:** schützen
- **LV reference:** aizsargāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2538].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 566: b1-schützen

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schützen
- **Field:** entry[2538].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izglābt
- **DE source:** schützen
- **LV reference:** aizsargāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2538].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 567: b1-schützen

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schützen
- **Field:** entry[2538].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apsargāt
- **DE source:** schützen
- **LV reference:** aizsargāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2538].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 568: b1-schützen

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schützen
- **Field:** entry[2538].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** datīvu
- **DE source:** schützen
- **LV reference:** aizsargāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2538].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 569: b1-schwanken

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schwanken
- **Field:** entry[2546].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** svārstīties
- **DE source:** schwanken
- **LV reference:** svārstīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2546].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 570: b1-schwanken

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schwanken
- **Field:** entry[2546].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šaubīties
- **DE source:** schwanken
- **LV reference:** svārstīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2546].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 571: b1-schwanken

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schwanken
- **Field:** entry[2546].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šūpojas
- **DE source:** schwanken
- **LV reference:** svārstīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2546].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 572: b1-schwanken

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schwanken
- **Field:** entry[2546].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** svārstās
- **DE source:** schwanken
- **LV reference:** svārstīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2546].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 573: b1-schwanken

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schwanken
- **Field:** entry[2546].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šaubās
- **DE source:** schwanken
- **LV reference:** svārstīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2546].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 574: b1-schwanken

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schwanken
- **Field:** entry[2546].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** svārstīties
- **DE source:** schwanken
- **LV reference:** svārstīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2546].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 575: b1-schwanken

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schwanken
- **Field:** entry[2546].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ļodzīties
- **DE source:** schwanken
- **LV reference:** svārstīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2546].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 576: b1-schwanken

- **Dataset:** b1
- **Batch:** 2501-2550
- **Card/Index:** b1-schwanken
- **Field:** entry[2546].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šaubīties
- **DE source:** schwanken
- **LV reference:** svārstīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2546].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 577: b1-senden

- **Dataset:** b1
- **Batch:** 2551-2600
- **Card/Index:** b1-senden
- **Field:** entry[2599].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sūtīt
- **DE source:** senden
- **LV reference:** sūtīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2599].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 578: b1-senden

- **Dataset:** b1
- **Batch:** 2551-2600
- **Card/Index:** b1-senden
- **Field:** entry[2599].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** raidīt
- **DE source:** senden
- **LV reference:** sūtīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2599].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 579: b1-senden

- **Dataset:** b1
- **Batch:** 2551-2600
- **Card/Index:** b1-senden
- **Field:** entry[2599].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sūtu
- **DE source:** senden
- **LV reference:** sūtīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2599].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 580: b1-senden

- **Dataset:** b1
- **Batch:** 2551-2600
- **Card/Index:** b1-senden
- **Field:** entry[2599].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** raidīta
- **DE source:** senden
- **LV reference:** sūtīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2599].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 581: b1-senden

- **Dataset:** b1
- **Batch:** 2551-2600
- **Card/Index:** b1-senden
- **Field:** entry[2599].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sūtīt
- **DE source:** senden
- **LV reference:** sūtīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2599].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 582: b1-senden

- **Dataset:** b1
- **Batch:** 2551-2600
- **Card/Index:** b1-senden
- **Field:** entry[2599].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sūtīt
- **DE source:** senden
- **LV reference:** sūtīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2599].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 583: b1-senden

- **Dataset:** b1
- **Batch:** 2551-2600
- **Card/Index:** b1-senden
- **Field:** entry[2599].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārraidīt
- **DE source:** senden
- **LV reference:** sūtīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2599].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 584: b1-senken

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-senken
- **Field:** entry[2603].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pazemināt
- **DE source:** senken
- **LV reference:** pazemināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2603].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 585: b1-senken

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-senken
- **Field:** entry[2603].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pazemināt
- **DE source:** senken
- **LV reference:** pazemināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2603].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 586: b1-sinn

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sinn
- **Field:** entry[2630].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jēgu
- **DE source:** Sinn
- **LV reference:** jēga
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2630].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 587: b1-sinn

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sinn
- **Field:** entry[2630].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izjūtu
- **DE source:** Sinn
- **LV reference:** jēga
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2630].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 588: b1-sinn

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sinn
- **Field:** entry[2630].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jēgas
- **DE source:** Sinn
- **LV reference:** jēga
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2630].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 589: b1-sinn

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sinn
- **Field:** entry[2630].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nozīme
- **DE source:** Sinn
- **LV reference:** jēga
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2630].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 590: b1-sinn

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sinn
- **Field:** entry[2630].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izjūta
- **DE source:** Sinn
- **LV reference:** jēga
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2630].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 591: b1-sinn

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sinn
- **Field:** entry[2630].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jēga
- **DE source:** Sinn
- **LV reference:** jēga
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2630].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 592: b1-sinn

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sinn
- **Field:** entry[2630].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nozīme
- **DE source:** Sinn
- **LV reference:** jēga
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2630].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 593: b1-sinn

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sinn
- **Field:** entry[2630].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sajūta
- **DE source:** Sinn
- **LV reference:** jēga
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2630].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 594: b1-sinn

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sinn
- **Field:** entry[2630].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izjūta
- **DE source:** Sinn
- **LV reference:** jēga
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2630].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 595: b1-sitz

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sitz
- **Field:** entry[2634].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēdekli
- **DE source:** Sitz
- **LV reference:** sēdeklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2634].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 596: b1-sitz

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sitz
- **Field:** entry[2634].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mītni
- **DE source:** Sitz
- **LV reference:** sēdeklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2634].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 597: b1-sitz

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sitz
- **Field:** entry[2634].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Sēdeklis
- **DE source:** Sitz
- **LV reference:** sēdeklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2634].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 598: b1-sitz

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sitz
- **Field:** entry[2634].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēdvietā
- **DE source:** Sitz
- **LV reference:** sēdeklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2634].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 599: b1-sitz

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sitz
- **Field:** entry[2634].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mītne
- **DE source:** Sitz
- **LV reference:** sēdeklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2634].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 600: b1-sitz

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sitz
- **Field:** entry[2634].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēdeklis
- **DE source:** Sitz
- **LV reference:** sēdeklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2634].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 601: b1-sitz

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sitz
- **Field:** entry[2634].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atrašanās vieta
- **DE source:** Sitz
- **LV reference:** sēdeklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2634].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 602: b1-sitz

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sitz
- **Field:** entry[2634].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēž
- **DE source:** Sitz
- **LV reference:** sēdeklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2634].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 603: b1-sitz

- **Dataset:** b1
- **Batch:** 2601-2650
- **Card/Index:** b1-sitz
- **Field:** entry[2634].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mītne
- **DE source:** Sitz
- **LV reference:** sēdeklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2634].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 604: b1-sich-sorgen

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sich-sorgen
- **Field:** entry[2655].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** raizēties
- **DE source:** sich sorgen
- **LV reference:** raizēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2655].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 605: b1-sich-sorgen

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sich-sorgen
- **Field:** entry[2655].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** raizējos
- **DE source:** sich sorgen
- **LV reference:** raizēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2655].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 606: b1-sich-sorgen

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sich-sorgen
- **Field:** entry[2655].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Neraizējies
- **DE source:** sich sorgen
- **LV reference:** raizēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2655].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 607: b1-sich-sorgen

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sich-sorgen
- **Field:** entry[2655].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** raizējas
- **DE source:** sich sorgen
- **LV reference:** raizēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2655].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 608: b1-sich-sorgen

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sich-sorgen
- **Field:** entry[2655].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** raizēties
- **DE source:** sich sorgen
- **LV reference:** raizēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2655].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 609: b1-sich-sorgen

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sich-sorgen
- **Field:** entry[2655].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rūpēties par
- **DE source:** sich sorgen
- **LV reference:** raizēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2655].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 610: b1-sich-sorgen

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sich-sorgen
- **Field:** entry[2655].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rūpes
- **DE source:** sich sorgen
- **LV reference:** raizēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2655].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 611: b1-sowie

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sowie
- **Field:** entry[2660].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kā arī
- **DE source:** sowie
- **LV reference:** kā arī
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2660].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 612: b1-sowie

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sowie
- **Field:** entry[2660].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tiklīdz
- **DE source:** sowie
- **LV reference:** kā arī
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2660].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 613: b1-sowie

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sowie
- **Field:** entry[2660].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kā arī
- **DE source:** sowie
- **LV reference:** kā arī
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2660].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 614: b1-sowie

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sowie
- **Field:** entry[2660].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kā arī
- **DE source:** sowie
- **LV reference:** kā arī
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2660].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 615: b1-sowie

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sowie
- **Field:** entry[2660].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Tiklīdz
- **DE source:** sowie
- **LV reference:** kā arī
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2660].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 616: b1-sowie

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sowie
- **Field:** entry[2660].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kā arī
- **DE source:** sowie
- **LV reference:** kā arī
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2660].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 617: b1-sowie

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sowie
- **Field:** entry[2660].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tiklīdz
- **DE source:** sowie
- **LV reference:** kā arī
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2660].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 618: b1-sowie

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sowie
- **Field:** entry[2660].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kā arī
- **DE source:** sowie
- **LV reference:** kā arī
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2660].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 619: b1-sowie

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sowie
- **Field:** entry[2660].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tiklīdz
- **DE source:** sowie
- **LV reference:** kā arī
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2660].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 620: b1-sowie

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sowie
- **Field:** entry[2660].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tiklīdz
- **DE source:** sowie
- **LV reference:** kā arī
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2660].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 621: b1-spannung

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-spannung
- **Field:** entry[2668].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** spēks
- **DE source:** Spannung
- **LV reference:** spriedze
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2668].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 622: b1-speichern

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-speichern
- **Field:** entry[2676].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saglabāt
- **DE source:** speichern
- **LV reference:** saglabāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2676].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 623: b1-speichern

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-speichern
- **Field:** entry[2676].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzkrāt
- **DE source:** speichern
- **LV reference:** saglabāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2676].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 624: b1-speichern

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-speichern
- **Field:** entry[2676].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saglabā
- **DE source:** speichern
- **LV reference:** saglabāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2676].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 625: b1-speichern

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-speichern
- **Field:** entry[2676].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saglabā
- **DE source:** speichern
- **LV reference:** saglabāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2676].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 626: b1-speichern

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-speichern
- **Field:** entry[2676].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzkrāj
- **DE source:** speichern
- **LV reference:** saglabāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2676].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 627: b1-speichern

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-speichern
- **Field:** entry[2676].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saglabāt
- **DE source:** speichern
- **LV reference:** saglabāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2676].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 628: b1-speichern

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-speichern
- **Field:** entry[2676].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** taupīt
- **DE source:** speichern
- **LV reference:** saglabāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2676].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 629: b1-speichern

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-speichern
- **Field:** entry[2676].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** glabāt
- **DE source:** speichern
- **LV reference:** saglabāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2676].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 630: b1-speichern

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-speichern
- **Field:** entry[2676].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saglabāt
- **DE source:** speichern
- **LV reference:** saglabāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2676].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 631: b1-sperren

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sperren
- **Field:** entry[2684].study.comparison[1].example
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Ich schließe die Tür ab. = Es aizslēdzu durvis.
- **DE source:** sperren
- **LV reference:** bloķēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2684].study.comparison[1].example
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 632: b1-sperren

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sperren
- **Field:** entry[2684].study.comparison[2].meaning
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Aizvērt
- **DE source:** sperren
- **LV reference:** bloķēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2684].study.comparison[2].meaning
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 633: b1-sperren

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sperren
- **Field:** entry[2684].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bloķēt
- **DE source:** sperren
- **LV reference:** bloķēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2684].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 634: b1-sperren

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sperren
- **Field:** entry[2684].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bloķē
- **DE source:** sperren
- **LV reference:** bloķēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2684].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 635: b1-sperren

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sperren
- **Field:** entry[2684].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bloķēt
- **DE source:** sperren
- **LV reference:** bloķēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2684].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 636: b1-sperren

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sperren
- **Field:** entry[2684].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** slēgta
- **DE source:** sperren
- **LV reference:** bloķēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2684].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 637: b1-sperren

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sperren
- **Field:** entry[2684].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** bloķēt
- **DE source:** sperren
- **LV reference:** bloķēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2684].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 638: b1-sperren

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sperren
- **Field:** entry[2684].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizslēgt
- **DE source:** sperren
- **LV reference:** bloķēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2684].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 639: b1-sperren

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sperren
- **Field:** entry[2684].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizvērt
- **DE source:** sperren
- **LV reference:** bloķēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2684].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 640: b1-sperren

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sperren
- **Field:** entry[2684].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piekļuve
- **DE source:** sperren
- **LV reference:** bloķēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2684].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 641: b1-sperren

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-sperren
- **Field:** entry[2684].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizvērt
- **DE source:** sperren
- **LV reference:** bloķēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2684].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 642: b1-spitze

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-spitze
- **Field:** entry[2689].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vadība
- **DE source:** Spitze
- **LV reference:** smaile
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2689].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 643: b1-spitze

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-spitze
- **Field:** entry[2689].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** virsotnē
- **DE source:** Spitze
- **LV reference:** smaile
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2689].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 644: b1-spitze

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-spitze
- **Field:** entry[2689].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vadībā
- **DE source:** Spitze
- **LV reference:** smaile
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2689].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 645: b1-spitze

- **Dataset:** b1
- **Batch:** 2651-2700
- **Card/Index:** b1-spitze
- **Field:** entry[2689].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vadībā
- **DE source:** Spitze
- **LV reference:** smaile
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2689].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 646: b1-spritzen

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-spritzen
- **Field:** entry[2704].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šļakstīt
- **DE source:** spritzen
- **LV reference:** šļakstīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2704].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 647: b1-spritzen

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-spritzen
- **Field:** entry[2704].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** injicēt
- **DE source:** spritzen
- **LV reference:** šļakstīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2704].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 648: b1-spritzen

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-spritzen
- **Field:** entry[2704].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šļakstās
- **DE source:** spritzen
- **LV reference:** šļakstīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2704].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 649: b1-spritzen

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-spritzen
- **Field:** entry[2704].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** injicē
- **DE source:** spritzen
- **LV reference:** šļakstīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2704].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 650: b1-spritzen

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-spritzen
- **Field:** entry[2704].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šļakstīt
- **DE source:** spritzen
- **LV reference:** šļakstīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2704].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 651: b1-spritzen

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-spritzen
- **Field:** entry[2704].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** laistīt
- **DE source:** spritzen
- **LV reference:** šļakstīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2704].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 652: b1-spritzen

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-spritzen
- **Field:** entry[2704].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izsmidzināt
- **DE source:** spritzen
- **LV reference:** šļakstīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2704].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 653: b1-spritzen

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-spritzen
- **Field:** entry[2704].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Šļakatas
- **DE source:** spritzen
- **LV reference:** šļakstīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2704].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 654: b1-spritzen

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-spritzen
- **Field:** entry[2704].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** injicēt
- **DE source:** spritzen
- **LV reference:** šļakstīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2704].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 655: b1-sprung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-sprung
- **Field:** entry[2706].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lēcienu
- **DE source:** Sprung
- **LV reference:** lēciens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2706].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 656: b1-sprung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-sprung
- **Field:** entry[2706].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Lēciens
- **DE source:** Sprung
- **LV reference:** lēciens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2706].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 657: b1-sprung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-sprung
- **Field:** entry[2706].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lēcienu
- **DE source:** Sprung
- **LV reference:** lēciens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2706].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 658: b1-sprung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-sprung
- **Field:** entry[2706].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lēciens
- **DE source:** Sprung
- **LV reference:** lēciens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2706].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 659: b1-sprung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-sprung
- **Field:** entry[2706].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lēkt
- **DE source:** Sprung
- **LV reference:** lēciens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2706].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 660: b1-sprung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-sprung
- **Field:** entry[2706].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** lēciens
- **DE source:** Sprung
- **LV reference:** lēciens
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2706].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 661: b1-stand

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stand
- **Field:** entry[2723].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** stāvokli
- **DE source:** Stand
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2723].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 662: b1-stand

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stand
- **Field:** entry[2723].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** stāvoklis
- **DE source:** Stand
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2723].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 663: b1-stand

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stand
- **Field:** entry[2723].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** līmenis
- **DE source:** Stand
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2723].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 664: b1-stand

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stand
- **Field:** entry[2723].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** stāvoklis
- **DE source:** Stand
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2723].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 665: b1-stand

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stand
- **Field:** entry[2723].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** stāvoklis
- **DE source:** Stand
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2723].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 666: b1-stand

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stand
- **Field:** entry[2723].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atrašanās vieta
- **DE source:** Stand
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2723].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 667: b1-stellung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stellung
- **Field:** entry[2743].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pozīciju
- **DE source:** Stellung
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2743].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 668: b1-stellung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stellung
- **Field:** entry[2743].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nostāju
- **DE source:** Stellung
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2743].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 669: b1-stellung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stellung
- **Field:** entry[2743].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** stāvoklis
- **DE source:** Stellung
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2743].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 670: b1-stellung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stellung
- **Field:** entry[2743].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nostāju
- **DE source:** Stellung
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2743].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 671: b1-stellung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stellung
- **Field:** entry[2743].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** stāvoklis
- **DE source:** Stellung
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2743].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 672: b1-stellung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stellung
- **Field:** entry[2743].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** stāvoklis
- **DE source:** Stellung
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2743].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 673: b1-stellung

- **Dataset:** b1
- **Batch:** 2701-2750
- **Card/Index:** b1-stellung
- **Field:** entry[2743].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Pozīcija
- **DE source:** Stellung
- **LV reference:** stāvoklis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2743].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 674: b1-stift

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stift
- **Field:** entry[2758].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rakstāmais
- **DE source:** Stift
- **LV reference:** zīmulis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2758].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 675: b1-stift

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stift
- **Field:** entry[2758].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** zīmulis
- **DE source:** Stift
- **LV reference:** zīmulis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2758].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 676: b1-stift

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stift
- **Field:** entry[2758].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** zīmulis
- **DE source:** Stift
- **LV reference:** zīmulis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2758].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 677: b1-stift

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stift
- **Field:** entry[2758].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** zīmulis
- **DE source:** Stift
- **LV reference:** zīmulis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2758].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 678: b1-stift

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stift
- **Field:** entry[2758].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rakstāmais
- **DE source:** Stift
- **LV reference:** zīmulis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2758].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 679: b1-stillen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stillen
- **Field:** entry[2762].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** zīdīt
- **DE source:** stillen
- **LV reference:** zīdīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2762].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 680: b1-stillen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stillen
- **Field:** entry[2762].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** remdēt
- **DE source:** stillen
- **LV reference:** zīdīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2762].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 681: b1-stillen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stillen
- **Field:** entry[2762].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** zīda
- **DE source:** stillen
- **LV reference:** zīdīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2762].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 682: b1-stillen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stillen
- **Field:** entry[2762].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** remdē
- **DE source:** stillen
- **LV reference:** zīdīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2762].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 683: b1-stillen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stillen
- **Field:** entry[2762].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apmierināja
- **DE source:** stillen
- **LV reference:** zīdīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2762].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 684: b1-stillen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stillen
- **Field:** entry[2762].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** zīdīt
- **DE source:** stillen
- **LV reference:** zīdīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2762].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 685: b1-stillen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stillen
- **Field:** entry[2762].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nomierināt
- **DE source:** stillen
- **LV reference:** zīdīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2762].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 686: b1-stoßen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stoßen
- **Field:** entry[2776].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** grūst
- **DE source:** stoßen
- **LV reference:** grūst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2776].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 687: b1-stoßen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stoßen
- **Field:** entry[2776].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** negrūd
- **DE source:** stoßen
- **LV reference:** grūst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2776].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 688: b1-stoßen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stoßen
- **Field:** entry[2776].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ietriecās
- **DE source:** stoßen
- **LV reference:** grūst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2776].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 689: b1-stoßen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stoßen
- **Field:** entry[2776].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzdūrāmies
- **DE source:** stoßen
- **LV reference:** grūst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2776].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 690: b1-stoßen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stoßen
- **Field:** entry[2776].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** grūst
- **DE source:** stoßen
- **LV reference:** grūst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2776].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 691: b1-stoßen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-stoßen
- **Field:** entry[2776].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** grūdienu
- **DE source:** stoßen
- **LV reference:** grūst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2776].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 692: b1-streichen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-streichen
- **Field:** entry[2790].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** svītrot
- **DE source:** streichen
- **LV reference:** svītrot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2790].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 693: b1-streichen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-streichen
- **Field:** entry[2790].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** krāsot
- **DE source:** streichen
- **LV reference:** svītrot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2790].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 694: b1-streichen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-streichen
- **Field:** entry[2790].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** svītrojam
- **DE source:** streichen
- **LV reference:** svītrot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2790].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 695: b1-streichen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-streichen
- **Field:** entry[2790].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** krāsosim
- **DE source:** streichen
- **LV reference:** svītrot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2790].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 696: b1-streichen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-streichen
- **Field:** entry[2790].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** noglāsta
- **DE source:** streichen
- **LV reference:** svītrot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2790].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 697: b1-streichen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-streichen
- **Field:** entry[2790].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** svītrot
- **DE source:** streichen
- **LV reference:** svītrot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2790].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 698: b1-streichen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-streichen
- **Field:** entry[2790].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dzēst
- **DE source:** streichen
- **LV reference:** svītrot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2790].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 699: b1-streichen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-streichen
- **Field:** entry[2790].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** zīmēt
- **DE source:** streichen
- **LV reference:** svītrot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2790].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 700: b1-streichen

- **Dataset:** b1
- **Batch:** 2751-2800
- **Card/Index:** b1-streichen
- **Field:** entry[2790].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** krāsot
- **DE source:** streichen
- **LV reference:** svītrot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2790].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 701: b1-strom

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-strom
- **Field:** entry[2804].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** elektrība
- **DE source:** Strom
- **LV reference:** strāva
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2804].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 702: b1-strom

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-strom
- **Field:** entry[2804].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Elektrība
- **DE source:** Strom
- **LV reference:** strāva
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2804].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 703: b1-strom

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-strom
- **Field:** entry[2804].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** elektrības
- **DE source:** Strom
- **LV reference:** strāva
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2804].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 704: b1-strom

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-strom
- **Field:** entry[2804].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** elektrība
- **DE source:** Strom
- **LV reference:** strāva
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2804].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 705: b1-strom

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-strom
- **Field:** entry[2804].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** enerģija
- **DE source:** Strom
- **LV reference:** strāva
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2804].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 706: b1-strom

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-strom
- **Field:** entry[2804].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** elektrību
- **DE source:** Strom
- **LV reference:** strāva
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2804].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 707: b1-strom

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-strom
- **Field:** entry[2804].study.sectionAccents.important.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** elektrību
- **DE source:** Strom
- **LV reference:** strāva
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2804].study.sectionAccents.important.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 708: b1-stürzen

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-stürzen
- **Field:** entry[2819].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** gāzt
- **DE source:** stürzen
- **LV reference:** gāzties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2819].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 709: b1-stürzen

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-stürzen
- **Field:** entry[2819].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nogāza
- **DE source:** stürzen
- **LV reference:** gāzties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2819].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 710: b1-stürzen

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-stürzen
- **Field:** entry[2819].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** gāzta
- **DE source:** stürzen
- **LV reference:** gāzties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2819].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 711: b1-stürzen

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-stürzen
- **Field:** entry[2819].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apgāzties
- **DE source:** stürzen
- **LV reference:** gāzties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2819].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 712: b1-stürzen

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-stürzen
- **Field:** entry[2819].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** gāšana
- **DE source:** stürzen
- **LV reference:** gāzties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2819].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 713: b1-stürzen

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-stürzen
- **Field:** entry[2819].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** gāzt valdību
- **DE source:** stürzen
- **LV reference:** gāzties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2819].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 714: b1-szene

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-szene
- **Field:** entry[2830].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** skandālu
- **DE source:** Szene
- **LV reference:** aina
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2830].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 715: b1-szene

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-szene
- **Field:** entry[2830].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** situācija
- **DE source:** Szene
- **LV reference:** aina
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2830].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 716: b1-szene

- **Dataset:** b1
- **Batch:** 2801-2850
- **Card/Index:** b1-szene
- **Field:** entry[2830].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** skandālu
- **DE source:** Szene
- **LV reference:** aina
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2830].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 717: b1-tauchen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-tauchen
- **Field:** entry[2860].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iemērkt
- **DE source:** tauchen
- **LV reference:** nirt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2860].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 718: b1-tauchen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-tauchen
- **Field:** entry[2860].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iemērc
- **DE source:** tauchen
- **LV reference:** nirt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2860].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 719: b1-tauchen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-tauchen
- **Field:** entry[2860].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** peldēt
- **DE source:** tauchen
- **LV reference:** nirt
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[2860].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 720: b1-tauchen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-tauchen
- **Field:** entry[2860].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iegremdēt
- **DE source:** tauchen
- **LV reference:** nirt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2860].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 721: b1-tauchen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-tauchen
- **Field:** entry[2860].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Zem ūdens
- **DE source:** tauchen
- **LV reference:** nirt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2860].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 722: b1-tauchen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-tauchen
- **Field:** entry[2860].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** peldēt
- **DE source:** tauchen
- **LV reference:** nirt
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[2860].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 723: b1-taufen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-taufen
- **Field:** entry[2863].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kristīt
- **DE source:** taufen
- **LV reference:** kristīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2863].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 724: b1-taufen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-taufen
- **Field:** entry[2863].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dod vārdu
- **DE source:** taufen
- **LV reference:** kristīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2863].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 725: b1-taufen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-taufen
- **Field:** entry[2863].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kristīs
- **DE source:** taufen
- **LV reference:** kristīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2863].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 726: b1-taufen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-taufen
- **Field:** entry[2863].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kristī
- **DE source:** taufen
- **LV reference:** kristīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2863].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 727: b1-taufen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-taufen
- **Field:** entry[2863].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kristīt
- **DE source:** taufen
- **LV reference:** kristīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2863].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 728: b1-taufen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-taufen
- **Field:** entry[2863].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** precēties
- **DE source:** taufen
- **LV reference:** kristīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2863].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 729: b1-taufen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-taufen
- **Field:** entry[2863].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Baznīcā
- **DE source:** taufen
- **LV reference:** kristīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2863].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 730: b1-taufen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-taufen
- **Field:** entry[2863].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vārda
- **DE source:** taufen
- **LV reference:** kristīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2863].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 731: b1-taufen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-taufen
- **Field:** entry[2863].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** derēt
- **DE source:** taufen
- **LV reference:** kristīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2863].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 732: b1-teilnehmen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-teilnehmen
- **Field:** entry[2872].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piedalīties
- **DE source:** teilnehmen
- **LV reference:** piedalīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2872].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 733: b1-teilnehmen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-teilnehmen
- **Field:** entry[2872].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piedalās
- **DE source:** teilnehmen
- **LV reference:** piedalīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2872].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 734: b1-teilnehmen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-teilnehmen
- **Field:** entry[2872].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piedalās
- **DE source:** teilnehmen
- **LV reference:** piedalīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2872].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 735: b1-teilnehmen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-teilnehmen
- **Field:** entry[2872].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piedalīties
- **DE source:** teilnehmen
- **LV reference:** piedalīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2872].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 736: b1-teilnehmen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-teilnehmen
- **Field:** entry[2872].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** piedalīties
- **DE source:** teilnehmen
- **LV reference:** piedalīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2872].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 737: b1-teilnehmen

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-teilnehmen
- **Field:** entry[2872].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apmeklēt
- **DE source:** teilnehmen
- **LV reference:** piedalīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2872].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 738: b1-titel

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-titel
- **Field:** entry[2891].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vārds
- **DE source:** Titel
- **LV reference:** nosaukums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2891].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 739: b1-titel

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-titel
- **Field:** entry[2891].study.sectionAccents.tip.leftBlocks[0].text.yellow[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Grāmatai
- **DE source:** Titel
- **LV reference:** nosaukums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2891].study.sectionAccents.tip.leftBlocks[0].text.yellow[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 740: b1-ton

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-ton
- **Field:** entry[2896].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** skaņu
- **DE source:** Ton
- **LV reference:** skaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2896].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 741: b1-ton

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-ton
- **Field:** entry[2896].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Skaņa
- **DE source:** Ton
- **LV reference:** skaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2896].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 742: b1-ton

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-ton
- **Field:** entry[2896].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tonī
- **DE source:** Ton
- **LV reference:** skaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2896].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 743: b1-ton

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-ton
- **Field:** entry[2896].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** skaņa
- **DE source:** Ton
- **LV reference:** skaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2896].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 744: b1-ton

- **Dataset:** b1
- **Batch:** 2851-2900
- **Card/Index:** b1-ton
- **Field:** entry[2896].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** krāsa
- **DE source:** Ton
- **LV reference:** skaņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2896].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 745: b1-trauen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trauen
- **Field:** entry[2906].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzticēties
- **DE source:** trauen
- **LV reference:** uzticēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2906].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 746: b1-trauen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trauen
- **Field:** entry[2906].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** neuzdrošinās
- **DE source:** trauen
- **LV reference:** uzticēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2906].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 747: b1-trauen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trauen
- **Field:** entry[2906].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzticēties
- **DE source:** trauen
- **LV reference:** uzticēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2906].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 748: b1-trauen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trauen
- **Field:** entry[2906].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzticēties
- **DE source:** trauen
- **LV reference:** uzticēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2906].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 749: b1-trauen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trauen
- **Field:** entry[2906].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzdrīkstēties
- **DE source:** trauen
- **LV reference:** uzticēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2906].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 750: b1-trauen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trauen
- **Field:** entry[2906].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzdrīkstos
- **DE source:** trauen
- **LV reference:** uzticēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2906].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 751: b1-treiben

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-treiben
- **Field:** entry[2912].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dzīt
- **DE source:** treiben
- **LV reference:** nodarboties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2912].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 752: b1-treiben

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-treiben
- **Field:** entry[2912].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** darīt
- **DE source:** treiben
- **LV reference:** nodarboties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2912].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 753: b1-treiben

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-treiben
- **Field:** entry[2912].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dzīt
- **DE source:** treiben
- **LV reference:** nodarboties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2912].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 754: b1-treiben

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-treiben
- **Field:** entry[2912].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** frāze
- **DE source:** treiben
- **LV reference:** nodarboties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2912].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 755: b1-trennen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trennen
- **Field:** entry[2914].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atdalīt
- **DE source:** trennen
- **LV reference:** atdalīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2914].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 756: b1-trennen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trennen
- **Field:** entry[2914].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šķiro
- **DE source:** trennen
- **LV reference:** atdalīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2914].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 757: b1-trennen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trennen
- **Field:** entry[2914].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izšķīrās
- **DE source:** trennen
- **LV reference:** atdalīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2914].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 758: b1-trennen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trennen
- **Field:** entry[2914].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atdalīt
- **DE source:** trennen
- **LV reference:** atdalīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2914].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 759: b1-trennen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trennen
- **Field:** entry[2914].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atšķirt
- **DE source:** trennen
- **LV reference:** atdalīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2914].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 760: b1-trennen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trennen
- **Field:** entry[2914].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šķirties
- **DE source:** trennen
- **LV reference:** atdalīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2914].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 761: b1-trennen

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-trennen
- **Field:** entry[2914].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atsevišķi
- **DE source:** trennen
- **LV reference:** atdalīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2914].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 762: b1-übergeben

- **Dataset:** b1
- **Batch:** 2901-2950
- **Card/Index:** b1-übergeben
- **Field:** entry[2949].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jāvemj
- **DE source:** übergeben
- **LV reference:** nodot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2949].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 763: b1-überholen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-überholen
- **Field:** entry[2951].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apdzīt
- **DE source:** überholen
- **LV reference:** apdzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2951].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 764: b1-überholen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-überholen
- **Field:** entry[2951].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** remontēt
- **DE source:** überholen
- **LV reference:** apdzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2951].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 765: b1-überholen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-überholen
- **Field:** entry[2951].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apdzīt
- **DE source:** überholen
- **LV reference:** apdzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2951].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 766: b1-überholen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-überholen
- **Field:** entry[2951].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** remontē
- **DE source:** überholen
- **LV reference:** apdzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2951].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 767: b1-überholen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-überholen
- **Field:** entry[2951].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apdzīt
- **DE source:** überholen
- **LV reference:** apdzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2951].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 768: b1-überholen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-überholen
- **Field:** entry[2951].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pabraukt garām
- **DE source:** überholen
- **LV reference:** apdzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2951].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 769: b1-überholen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-überholen
- **Field:** entry[2951].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** remontēt
- **DE source:** überholen
- **LV reference:** apdzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2951].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 770: b1-überholen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-überholen
- **Field:** entry[2951].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārspēj
- **DE source:** überholen
- **LV reference:** apdzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2951].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 771: b1-überholen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-überholen
- **Field:** entry[2951].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** kapitāli remontēt
- **DE source:** überholen
- **LV reference:** apdzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2951].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 772: b1-übernehmen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übernehmen
- **Field:** entry[2954].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārņemt
- **DE source:** übernehmen
- **LV reference:** pārņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2954].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 773: b1-übernehmen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übernehmen
- **Field:** entry[2954].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzņemties
- **DE source:** übernehmen
- **LV reference:** pārņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2954].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 774: b1-übernehmen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übernehmen
- **Field:** entry[2954].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārņemu
- **DE source:** übernehmen
- **LV reference:** pārņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2954].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 775: b1-übernehmen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übernehmen
- **Field:** entry[2954].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzņemas
- **DE source:** übernehmen
- **LV reference:** pārņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2954].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 776: b1-übernehmen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übernehmen
- **Field:** entry[2954].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārņemt
- **DE source:** übernehmen
- **LV reference:** pārņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2954].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 777: b1-übernehmen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übernehmen
- **Field:** entry[2954].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārņemt
- **DE source:** übernehmen
- **LV reference:** pārņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2954].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 778: b1-übernehmen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übernehmen
- **Field:** entry[2954].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ņemt
- **DE source:** übernehmen
- **LV reference:** pārņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2954].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 779: b1-übernehmen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übernehmen
- **Field:** entry[2954].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saņemt
- **DE source:** übernehmen
- **LV reference:** pārņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2954].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 780: b1-übernehmen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übernehmen
- **Field:** entry[2954].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atbildība
- **DE source:** übernehmen
- **LV reference:** pārņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2954].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 781: b1-übernehmen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übernehmen
- **Field:** entry[2954].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzņemties
- **DE source:** übernehmen
- **LV reference:** pārņemt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2954].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 782: b1-übersehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übersehen
- **Field:** entry[2957].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nepamanīt
- **DE source:** übersehen
- **LV reference:** nepamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2957].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 783: b1-übersehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übersehen
- **Field:** entry[2957].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārredzēt
- **DE source:** übersehen
- **LV reference:** nepamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2957].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 784: b1-übersehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übersehen
- **Field:** entry[2957].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nepamanīju
- **DE source:** übersehen
- **LV reference:** nepamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2957].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 785: b1-übersehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übersehen
- **Field:** entry[2957].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārredzēt
- **DE source:** übersehen
- **LV reference:** nepamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2957].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 786: b1-übersehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übersehen
- **Field:** entry[2957].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nepalaid garām
- **DE source:** übersehen
- **LV reference:** nepamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2957].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 787: b1-übersehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übersehen
- **Field:** entry[2957].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nepamanīt
- **DE source:** übersehen
- **LV reference:** nepamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2957].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 788: b1-übersehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übersehen
- **Field:** entry[2957].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** redzēt
- **DE source:** übersehen
- **LV reference:** nepamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2957].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 789: b1-übersehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übersehen
- **Field:** entry[2957].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pamanīt
- **DE source:** übersehen
- **LV reference:** nepamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2957].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 790: b1-übersehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übersehen
- **Field:** entry[2957].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nepamanīt
- **DE source:** übersehen
- **LV reference:** nepamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2957].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 791: b1-übersehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übersehen
- **Field:** entry[2957].study.sectionAccents.important.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nepamanīt
- **DE source:** übersehen
- **LV reference:** nepamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2957].study.sectionAccents.important.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 792: b1-übersehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-übersehen
- **Field:** entry[2957].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārredzēt
- **DE source:** übersehen
- **LV reference:** nepamanīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2957].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 793: b1-umgehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-umgehen
- **Field:** entry[2974].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izturēties
- **DE source:** umgehen
- **LV reference:** apieties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2974].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 794: b1-umgehen

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-umgehen
- **Field:** entry[2974].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izvairīties
- **DE source:** umgehen
- **LV reference:** apieties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2974].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 795: b1-umschlag

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-umschlag
- **Field:** entry[2982].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vāku
- **DE source:** Umschlag
- **LV reference:** aploksne
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2982].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 796: b1-umschlag

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-umschlag
- **Field:** entry[2982].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aploksnē
- **DE source:** Umschlag
- **LV reference:** aploksne
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2982].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 797: b1-umschlag

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-umschlag
- **Field:** entry[2982].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vāks
- **DE source:** Umschlag
- **LV reference:** aploksne
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2982].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 798: b1-umschlag

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-umschlag
- **Field:** entry[2982].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vēstule
- **DE source:** Umschlag
- **LV reference:** aploksne
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2982].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 799: b1-umschlag

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-umschlag
- **Field:** entry[2982].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārvalks
- **DE source:** Umschlag
- **LV reference:** aploksne
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2982].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 800: b1-umschlag

- **Dataset:** b1
- **Batch:** 2951-3000
- **Card/Index:** b1-umschlag
- **Field:** entry[2982].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vāks
- **DE source:** Umschlag
- **LV reference:** aploksne
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2982].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 801: b1-unterhalten

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-unterhalten
- **Field:** entry[3022].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izklaidēt
- **DE source:** unterhalten
- **LV reference:** izklaidēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3022].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 802: b1-unterhalten

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-unterhalten
- **Field:** entry[3022].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izklaidē
- **DE source:** unterhalten
- **LV reference:** izklaidēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3022].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 803: b1-unterhalten

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-unterhalten
- **Field:** entry[3022].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sarunājāmies
- **DE source:** unterhalten
- **LV reference:** izklaidēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3022].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 804: b1-unterhalten

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-unterhalten
- **Field:** entry[3022].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jāuztur
- **DE source:** unterhalten
- **LV reference:** izklaidēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3022].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 805: b1-unterhalten

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-unterhalten
- **Field:** entry[3022].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izklaidēt
- **DE source:** unterhalten
- **LV reference:** izklaidēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3022].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 806: b1-unterhalten

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-unterhalten
- **Field:** entry[3022].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sarunāties
- **DE source:** unterhalten
- **LV reference:** izklaidēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3022].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 807: b1-unterhalten

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-unterhalten
- **Field:** entry[3022].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** runāt
- **DE source:** unterhalten
- **LV reference:** izklaidēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3022].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 808: b1-unterhalten

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-unterhalten
- **Field:** entry[3022].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izklaidēt
- **DE source:** unterhalten
- **LV reference:** izklaidēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3022].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 809: b1-unterhalten

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-unterhalten
- **Field:** entry[3022].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sarunāties
- **DE source:** unterhalten
- **LV reference:** izklaidēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3022].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 810: b1-untersuchung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-untersuchung
- **Field:** entry[3028].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izmeklēšanu
- **DE source:** Untersuchung
- **LV reference:** izmeklēšana
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3028].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 811: b1-untersuchung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-untersuchung
- **Field:** entry[3028].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pētījumu
- **DE source:** Untersuchung
- **LV reference:** izmeklēšana
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3028].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 812: b1-untersuchung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-untersuchung
- **Field:** entry[3028].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izmeklēšana
- **DE source:** Untersuchung
- **LV reference:** izmeklēšana
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3028].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 813: b1-untersuchung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-untersuchung
- **Field:** entry[3028].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izmeklēšanu
- **DE source:** Untersuchung
- **LV reference:** izmeklēšana
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3028].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 814: b1-untersuchung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-untersuchung
- **Field:** entry[3028].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Pētījums
- **DE source:** Untersuchung
- **LV reference:** izmeklēšana
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[3028].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 815: b1-untersuchung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-untersuchung
- **Field:** entry[3028].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izmeklēšana
- **DE source:** Untersuchung
- **LV reference:** izmeklēšana
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3028].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 816: b1-untersuchung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-untersuchung
- **Field:** entry[3028].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** eksāmens
- **DE source:** Untersuchung
- **LV reference:** izmeklēšana
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3028].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 817: b1-untersuchung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-untersuchung
- **Field:** entry[3028].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pētniecība
- **DE source:** Untersuchung
- **LV reference:** izmeklēšana
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3028].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 818: b1-untersuchung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-untersuchung
- **Field:** entry[3028].study.sectionAccents.tip.leftBlocks[0].text.green[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Ārsts
- **DE source:** Untersuchung
- **LV reference:** izmeklēšana
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3028].study.sectionAccents.tip.leftBlocks[0].text.green[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 819: b1-untersuchung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-untersuchung
- **Field:** entry[3028].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ārsta pārbaude
- **DE source:** Untersuchung
- **LV reference:** izmeklēšana
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3028].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 820: b1-verändern

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verändern
- **Field:** entry[3040].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mainīt
- **DE source:** verändern
- **LV reference:** mainīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3040].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 821: b1-verändern

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verändern
- **Field:** entry[3040].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mainīja
- **DE source:** verändern
- **LV reference:** mainīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3040].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 822: b1-verändern

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verändern
- **Field:** entry[3040].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mainās
- **DE source:** verändern
- **LV reference:** mainīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3040].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 823: b1-verändern

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verändern
- **Field:** entry[3040].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mainīt
- **DE source:** verändern
- **LV reference:** mainīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3040].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 824: b1-verändern

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verändern
- **Field:** entry[3040].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mainīt
- **DE source:** verändern
- **LV reference:** mainīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3040].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 825: b1-verändern

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verändern
- **Field:** entry[3040].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mainīties
- **DE source:** verändern
- **LV reference:** mainīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3040].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 826: b1-verändern

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verändern
- **Field:** entry[3040].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** citāds
- **DE source:** verändern
- **LV reference:** mainīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3040].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 827: b1-verändern

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verändern
- **Field:** entry[3040].study.sectionAccents.important.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mainīt
- **DE source:** verändern
- **LV reference:** mainīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3040].study.sectionAccents.important.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 828: b1-verband

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verband
- **Field:** entry[3045].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārsējs
- **DE source:** Verband
- **LV reference:** pārsējs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3045].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 829: b1-verband

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verband
- **Field:** entry[3045].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apvienību
- **DE source:** Verband
- **LV reference:** pārsējs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3045].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 830: b1-verband

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verband
- **Field:** entry[3045].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārsēju
- **DE source:** Verband
- **LV reference:** pārsējs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3045].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 831: b1-verband

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verband
- **Field:** entry[3045].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Pārsējam
- **DE source:** Verband
- **LV reference:** pārsējs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3045].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 832: b1-verband

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verband
- **Field:** entry[3045].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Apvienība
- **DE source:** Verband
- **LV reference:** pārsējs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3045].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 833: b1-verband

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verband
- **Field:** entry[3045].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārsējs
- **DE source:** Verband
- **LV reference:** pārsējs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3045].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 834: b1-verband

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verband
- **Field:** entry[3045].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** biedrība
- **DE source:** Verband
- **LV reference:** pārsējs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3045].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 835: b1-verband

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verband
- **Field:** entry[3045].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārsējs
- **DE source:** Verband
- **LV reference:** pārsējs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3045].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 836: b1-verband

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verband
- **Field:** entry[3045].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apvienība
- **DE source:** Verband
- **LV reference:** pārsējs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3045].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 837: b1-verbindung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verbindung
- **Field:** entry[3047].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pieslēgums
- **DE source:** Verbindung
- **LV reference:** savienojums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3047].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 838: b1-verbindung

- **Dataset:** b1
- **Batch:** 3001-3050
- **Card/Index:** b1-verbindung
- **Field:** entry[3047].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārsējs
- **DE source:** Verbindung
- **LV reference:** savienojums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3047].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 839: b1-verbrennen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verbrennen
- **Field:** entry[3055].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sadedzināt
- **DE source:** verbrennen
- **LV reference:** sadedzināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3055].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 840: b1-verbrennen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verbrennen
- **Field:** entry[3055].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apdedzināties
- **DE source:** verbrennen
- **LV reference:** sadedzināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3055].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 841: b1-verbrennen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verbrennen
- **Field:** entry[3055].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apdedzināju
- **DE source:** verbrennen
- **LV reference:** sadedzināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3055].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 842: b1-verbrennen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verbrennen
- **Field:** entry[3055].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sadedzināt
- **DE source:** verbrennen
- **LV reference:** sadedzināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3055].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 843: b1-verbrennen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verbrennen
- **Field:** entry[3055].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizdedzināt
- **DE source:** verbrennen
- **LV reference:** sadedzināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3055].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 844: b1-verbrennen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verbrennen
- **Field:** entry[3055].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apdedzināt
- **DE source:** verbrennen
- **LV reference:** sadedzināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3055].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 845: b1-verderben

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verderben
- **Field:** entry[3058].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sabojāt
- **DE source:** verderben
- **LV reference:** sabojāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3058].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 846: b1-verderben

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verderben
- **Field:** entry[3058].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sabojāties
- **DE source:** verderben
- **LV reference:** sabojāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3058].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 847: b1-verderben

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verderben
- **Field:** entry[3058].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sabojā
- **DE source:** verderben
- **LV reference:** sabojāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3058].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 848: b1-verderben

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verderben
- **Field:** entry[3058].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sabojājies
- **DE source:** verderben
- **LV reference:** sabojāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3058].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 849: b1-verderben

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verderben
- **Field:** entry[3058].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sabojāja
- **DE source:** verderben
- **LV reference:** sabojāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3058].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 850: b1-verderben

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verderben
- **Field:** entry[3058].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sabojāt
- **DE source:** verderben
- **LV reference:** sabojāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3058].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 851: b1-verderben

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verderben
- **Field:** entry[3058].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sabojāties
- **DE source:** verderben
- **LV reference:** sabojāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3058].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 852: b1-verderben

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verderben
- **Field:** entry[3058].study.sectionAccents.tip.leftBlocks[0].text.yellow[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Ēdiens
- **DE source:** verderben
- **LV reference:** sabojāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3058].study.sectionAccents.tip.leftBlocks[0].text.yellow[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 853: b1-verderben

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verderben
- **Field:** entry[3058].study.sectionAccents.tip.leftBlocks[0].text.yellow[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** plāns
- **DE source:** verderben
- **LV reference:** sabojāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3058].study.sectionAccents.tip.leftBlocks[0].text.yellow[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 854: b1-verderben

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verderben
- **Field:** entry[3058].study.sectionAccents.tip.leftBlocks[0].text.yellow[2]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** noskaņojums
- **DE source:** verderben
- **LV reference:** sabojāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3058].study.sectionAccents.tip.leftBlocks[0].text.yellow[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 855: b1-verderben

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verderben
- **Field:** entry[3058].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sabojājies
- **DE source:** verderben
- **LV reference:** sabojāt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3058].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 856: b1-verfolgen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verfolgen
- **Field:** entry[3063].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sekot līdzi
- **DE source:** verfolgen
- **LV reference:** sekot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3063].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 857: b1-verfolgen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verfolgen
- **Field:** entry[3063].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vajāt
- **DE source:** verfolgen
- **LV reference:** sekot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3063].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 858: b1-verfolgen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verfolgen
- **Field:** entry[3063].study.sectionAccents.examples[0].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vajā
- **DE source:** verfolgen
- **LV reference:** sekot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3063].study.sectionAccents.examples[0].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 859: b1-verfolgen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verfolgen
- **Field:** entry[3063].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sekoju līdzi
- **DE source:** verfolgen
- **LV reference:** sekot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3063].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 860: b1-verfolgen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verfolgen
- **Field:** entry[3063].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** dzenas pakaļ
- **DE source:** verfolgen
- **LV reference:** sekot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3063].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 861: b1-verfolgen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verfolgen
- **Field:** entry[3063].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sekot līdzi
- **DE source:** verfolgen
- **LV reference:** sekot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3063].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 862: b1-verfolgen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verfolgen
- **Field:** entry[3063].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vērot
- **DE source:** verfolgen
- **LV reference:** sekot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3063].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 863: b1-verfolgen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verfolgen
- **Field:** entry[3063].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sekot līdzi
- **DE source:** verfolgen
- **LV reference:** sekot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3063].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 864: b1-verfolgen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verfolgen
- **Field:** entry[3063].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vajāt
- **DE source:** verfolgen
- **LV reference:** sekot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3063].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 865: b1-verfolgen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verfolgen
- **Field:** entry[3063].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vajāt
- **DE source:** verfolgen
- **LV reference:** sekot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3063].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 866: b1-verhältnis

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verhältnis
- **Field:** entry[3072].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** attiecības
- **DE source:** Verhältnis
- **LV reference:** attiecības
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3072].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 867: b1-verhältnis

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verhältnis
- **Field:** entry[3072].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apstākļus
- **DE source:** Verhältnis
- **LV reference:** attiecības
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3072].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 868: b1-verhältnis

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verhältnis
- **Field:** entry[3072].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** attiecības
- **DE source:** Verhältnis
- **LV reference:** attiecības
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3072].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 869: b1-verhältnis

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verhältnis
- **Field:** entry[3072].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** attiecība
- **DE source:** Verhältnis
- **LV reference:** attiecības
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3072].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 870: b1-verhältnis

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verhältnis
- **Field:** entry[3072].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apstākļi
- **DE source:** Verhältnis
- **LV reference:** attiecības
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3072].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 871: b1-verhältnis

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verhältnis
- **Field:** entry[3072].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** attiecības
- **DE source:** Verhältnis
- **LV reference:** attiecības
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3072].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 872: b1-verhältnis

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verhältnis
- **Field:** entry[3072].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** attiecības
- **DE source:** Verhältnis
- **LV reference:** attiecības
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3072].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 873: b1-verhältnis

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verhältnis
- **Field:** entry[3072].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** daļa
- **DE source:** Verhältnis
- **LV reference:** attiecības
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3072].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 874: b1-verhältnis

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verhältnis
- **Field:** entry[3072].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** cilvēkiem
- **DE source:** Verhältnis
- **LV reference:** attiecības
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3072].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 875: b1-verhältnis

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verhältnis
- **Field:** entry[3072].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apstākļi
- **DE source:** Verhältnis
- **LV reference:** attiecības
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3072].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 876: b1-verhältnis

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verhältnis
- **Field:** entry[3072].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apstākļi
- **DE source:** Verhältnis
- **LV reference:** attiecības
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3072].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 877: b1-verlegen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verlegen
- **Field:** entry[3088].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārcelt
- **DE source:** verlegen
- **LV reference:** pārcelt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3088].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 878: b1-verlegen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verlegen
- **Field:** entry[3088].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārceļam
- **DE source:** verlegen
- **LV reference:** pārcelt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3088].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 879: b1-verlegen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verlegen
- **Field:** entry[3088].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārcelt
- **DE source:** verlegen
- **LV reference:** pārcelt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3088].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 880: b1-verlegen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verlegen
- **Field:** entry[3088].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārcelt
- **DE source:** verlegen
- **LV reference:** pārcelt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3088].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 881: b1-verlegen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verlegen
- **Field:** entry[3088].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pazaudēt
- **DE source:** verlegen
- **LV reference:** pārcelt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3088].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 882: b1-verletzen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verletzen
- **Field:** entry[3089].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārkāpšanu
- **DE source:** verletzen
- **LV reference:** ievainot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3089].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 883: b1-verletzen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verletzen
- **Field:** entry[3089].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārkāpa
- **DE source:** verletzen
- **LV reference:** ievainot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3089].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 884: b1-verletzen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verletzen
- **Field:** entry[3089].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārkāpt
- **DE source:** verletzen
- **LV reference:** ievainot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3089].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 885: b1-verletzen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verletzen
- **Field:** entry[3089].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārkāpj
- **DE source:** verletzen
- **LV reference:** ievainot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3089].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 886: b1-verletzen

- **Dataset:** b1
- **Batch:** 3051-3100
- **Card/Index:** b1-verletzen
- **Field:** entry[3089].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārkāpt
- **DE source:** verletzen
- **LV reference:** ievainot
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3089].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 887: b1-versichern

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-versichern
- **Field:** entry[3107].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apdrošināt
- **DE source:** versichern
- **LV reference:** apdrošināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3107].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 888: b1-versichern

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-versichern
- **Field:** entry[3107].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apliecināt
- **DE source:** versichern
- **LV reference:** apdrošināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3107].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 889: b1-versichern

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-versichern
- **Field:** entry[3107].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apliecināja
- **DE source:** versichern
- **LV reference:** apdrošināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3107].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 890: b1-versichern

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-versichern
- **Field:** entry[3107].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apdrošināta
- **DE source:** versichern
- **LV reference:** apdrošināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3107].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 891: b1-versichern

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-versichern
- **Field:** entry[3107].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apdrošināt
- **DE source:** versichern
- **LV reference:** apdrošināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3107].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 892: b1-versichern

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-versichern
- **Field:** entry[3107].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nodrošināt
- **DE source:** versichern
- **LV reference:** apdrošināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3107].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 893: b1-versichern

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-versichern
- **Field:** entry[3107].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apstiprināt
- **DE source:** versichern
- **LV reference:** apdrošināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3107].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 894: b1-versichern

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-versichern
- **Field:** entry[3107].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apdrošināt
- **DE source:** versichern
- **LV reference:** apdrošināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3107].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 895: b1-versichern

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-versichern
- **Field:** entry[3107].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apliecināt
- **DE source:** versichern
- **LV reference:** apdrošināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3107].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 896: b1-vertreten

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-vertreten
- **Field:** entry[3127].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārstāvēt
- **DE source:** vertreten
- **LV reference:** pārstāvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3127].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 897: b1-vertreten

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-vertreten
- **Field:** entry[3127].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārstāv
- **DE source:** vertreten
- **LV reference:** pārstāvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3127].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 898: b1-vertreten

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-vertreten
- **Field:** entry[3127].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizstāv
- **DE source:** vertreten
- **LV reference:** pārstāvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3127].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 899: b1-vertreten

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-vertreten
- **Field:** entry[3127].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārstāvēt
- **DE source:** vertreten
- **LV reference:** pārstāvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3127].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 900: b1-vertreten

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-vertreten
- **Field:** entry[3127].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizstāt
- **DE source:** vertreten
- **LV reference:** pārstāvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3127].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 901: b1-vertreten

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-vertreten
- **Field:** entry[3127].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** attēlot
- **DE source:** vertreten
- **LV reference:** pārstāvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3127].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 902: b1-vertreten

- **Dataset:** b1
- **Batch:** 3101-3150
- **Card/Index:** b1-vertreten
- **Field:** entry[3127].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vārdā
- **DE source:** vertreten
- **LV reference:** pārstāvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3127].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 903: b1-vorkommen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorkommen
- **Field:** entry[3158].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** gadīties
- **DE source:** vorkommen
- **LV reference:** gadīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3158].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 904: b1-vorkommen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorkommen
- **Field:** entry[3158].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** gadās
- **DE source:** vorkommen
- **LV reference:** gadīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3158].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 905: b1-vorkommen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorkommen
- **Field:** entry[3158].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** parādās
- **DE source:** vorkommen
- **LV reference:** gadīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3158].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 906: b1-vorkommen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorkommen
- **Field:** entry[3158].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šķiet
- **DE source:** vorkommen
- **LV reference:** gadīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3158].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 907: b1-vorkommen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorkommen
- **Field:** entry[3158].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** gadīties
- **DE source:** vorkommen
- **LV reference:** gadīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3158].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 908: b1-vorkommen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorkommen
- **Field:** entry[3158].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** šķist
- **DE source:** vorkommen
- **LV reference:** gadīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3158].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 909: b1-vorkommen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorkommen
- **Field:** entry[3158].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atdalāms
- **DE source:** vorkommen
- **LV reference:** gadīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3158].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 910: b1-vorstellung

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorstellung
- **Field:** entry[3171].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izrādi
- **DE source:** Vorstellung
- **LV reference:** izrāde
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3171].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 911: b1-vorstellung

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorstellung
- **Field:** entry[3171].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Izrāde
- **DE source:** Vorstellung
- **LV reference:** izrāde
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3171].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 912: b1-vorstellung

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorstellung
- **Field:** entry[3171].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izrāde
- **DE source:** Vorstellung
- **LV reference:** izrāde
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3171].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 913: b1-vorstellung

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorstellung
- **Field:** entry[3171].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izrāde
- **DE source:** Vorstellung
- **LV reference:** izrāde
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3171].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 914: b1-vorstellung

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorstellung
- **Field:** entry[3171].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izrāde
- **DE source:** Vorstellung
- **LV reference:** izrāde
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3171].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 915: b1-vorstellung

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorstellung
- **Field:** entry[3171].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izrāde
- **DE source:** Vorstellung
- **LV reference:** izrāde
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3171].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 916: b1-vorziehen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorziehen
- **Field:** entry[3176].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** agrāku laiku
- **DE source:** vorziehen
- **LV reference:** dot priekšroku
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3176].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 917: b1-vorziehen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorziehen
- **Field:** entry[3176].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārceļam
- **DE source:** vorziehen
- **LV reference:** dot priekšroku
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3176].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 918: b1-vorziehen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorziehen
- **Field:** entry[3176].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** pārcelt
- **DE source:** vorziehen
- **LV reference:** dot priekšroku
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3176].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 919: b1-vorziehen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-vorziehen
- **Field:** entry[3176].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atdalāms
- **DE source:** vorziehen
- **LV reference:** dot priekšroku
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3176].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 920: b1-wache

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wache
- **Field:** entry[3178].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sargāt
- **DE source:** Wache
- **LV reference:** sardze
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3178].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 921: b1-wachen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wachen
- **Field:** entry[3179].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** būt nomodā
- **DE source:** wachen
- **LV reference:** būt nomodā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3179].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 922: b1-wachen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wachen
- **Field:** entry[3179].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nomodā
- **DE source:** wachen
- **LV reference:** būt nomodā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3179].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 923: b1-wachen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wachen
- **Field:** entry[3179].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sargā
- **DE source:** wachen
- **LV reference:** būt nomodā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3179].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 924: b1-wachen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wachen
- **Field:** entry[3179].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sargāt
- **DE source:** wachen
- **LV reference:** būt nomodā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3179].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 925: b1-wachen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wachen
- **Field:** entry[3179].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** apsargāt
- **DE source:** wachen
- **LV reference:** būt nomodā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3179].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 926: b1-wagen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wagen
- **Field:** entry[3185].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** automašīna
- **DE source:** Wagen
- **LV reference:** automašīna • vagons
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3185].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 927: b1-wagen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wagen
- **Field:** entry[3185].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** automašīna
- **DE source:** Wagen
- **LV reference:** automašīna • vagons
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3185].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 928: b1-wagen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wagen
- **Field:** entry[3185].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** automašīnu
- **DE source:** Wagen
- **LV reference:** automašīna • vagons
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3185].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 929: b1-wagen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wagen
- **Field:** entry[3185].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** automašīna
- **DE source:** Wagen
- **LV reference:** automašīna • vagons
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3185].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 930: b1-wagen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wagen
- **Field:** entry[3185].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** automašīna
- **DE source:** Wagen
- **LV reference:** automašīna • vagons
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3185].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 931: b1-wagen

- **Dataset:** b1
- **Batch:** 3151-3200
- **Card/Index:** b1-wagen
- **Field:** entry[3185].study.sectionAccents.comparison[3].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** uzdrošināties
- **DE source:** Wagen
- **LV reference:** automašīna • vagons
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3185].study.sectionAccents.comparison[3].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 932: b1-wechsel

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-wechsel
- **Field:** entry[3213].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** maiņu
- **DE source:** Wechsel
- **LV reference:** maiņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3213].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 933: b1-wechsel

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-wechsel
- **Field:** entry[3213].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** maiņa
- **DE source:** Wechsel
- **LV reference:** maiņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3213].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 934: b1-wechsel

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-wechsel
- **Field:** entry[3213].study.sectionAccents.examples[1].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** maiņu
- **DE source:** Wechsel
- **LV reference:** maiņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3213].study.sectionAccents.examples[1].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 935: b1-wechsel

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-wechsel
- **Field:** entry[3213].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Valūtas kurss
- **DE source:** Wechsel
- **LV reference:** maiņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3213].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 936: b1-wechsel

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-wechsel
- **Field:** entry[3213].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** maiņa
- **DE source:** Wechsel
- **LV reference:** maiņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3213].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 937: b1-wechsel

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-wechsel
- **Field:** entry[3213].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izmaiņa
- **DE source:** Wechsel
- **LV reference:** maiņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3213].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 938: b1-wechsel

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-wechsel
- **Field:** entry[3213].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** mainīt
- **DE source:** Wechsel
- **LV reference:** maiņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3213].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 939: b1-wechsel

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-wechsel
- **Field:** entry[3213].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nomainās
- **DE source:** Wechsel
- **LV reference:** maiņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3213].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 940: b1-wechsel

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-wechsel
- **Field:** entry[3213].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** valūtas kursu
- **DE source:** Wechsel
- **LV reference:** maiņa
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3213].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 941: b1-welle

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-welle
- **Field:** entry[3235].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vārpstu
- **DE source:** Welle
- **LV reference:** vilnis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3235].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 942: b1-welle

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-welle
- **Field:** entry[3235].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vārpsta
- **DE source:** Welle
- **LV reference:** vilnis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3235].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 943: b1-welle

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-welle
- **Field:** entry[3235].study.sectionAccents.tip.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vārpsta
- **DE source:** Welle
- **LV reference:** vilnis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3235].study.sectionAccents.tip.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 944: b1-welle

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-welle
- **Field:** entry[3235].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vārpstu
- **DE source:** Welle
- **LV reference:** vilnis
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3235].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 945: b1-wenden

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-wenden
- **Field:** entry[3241].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vēršas
- **DE source:** wenden
- **LV reference:** pagriezt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3241].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 946: b1-wenden

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-wenden
- **Field:** entry[3241].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** vērsties
- **DE source:** wenden
- **LV reference:** pagriezt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3241].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 947: b1-werben

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-werben
- **Field:** entry[3244].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** reklamēt
- **DE source:** werben
- **LV reference:** reklamēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3244].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 948: b1-werben

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-werben
- **Field:** entry[3244].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** reklamē
- **DE source:** werben
- **LV reference:** reklamēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3244].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 949: b1-werben

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-werben
- **Field:** entry[3244].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** iegūt
- **DE source:** werben
- **LV reference:** reklamēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3244].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 950: b1-werben

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-werben
- **Field:** entry[3244].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** reklamēt
- **DE source:** werben
- **LV reference:** reklamēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3244].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 951: b1-werben

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-werben
- **Field:** entry[3244].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** reklamē
- **DE source:** werben
- **LV reference:** reklamēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3244].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 952: b1-werk

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-werk
- **Field:** entry[3245].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** radīts darbs
- **DE source:** Werk
- **LV reference:** darbs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3245].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 953: b1-werk

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-werk
- **Field:** entry[3245].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rūpnīcu
- **DE source:** Werk
- **LV reference:** darbs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3245].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 954: b1-werk

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-werk
- **Field:** entry[3245].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rūpnīcā
- **DE source:** Werk
- **LV reference:** darbs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3245].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 955: b1-werk

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-werk
- **Field:** entry[3245].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rūpnīca
- **DE source:** Werk
- **LV reference:** darbs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3245].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 956: b1-werk

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-werk
- **Field:** entry[3245].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rezultāts
- **DE source:** Werk
- **LV reference:** darbs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3245].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 957: b1-werk

- **Dataset:** b1
- **Batch:** 3201-3250
- **Card/Index:** b1-werk
- **Field:** entry[3245].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** rūpnīca
- **DE source:** Werk
- **LV reference:** darbs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3245].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 958: b1-zeugnis

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zeugnis
- **Field:** entry[3270].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** liecību
- **DE source:** Zeugnis
- **LV reference:** liecība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3270].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 959: b1-zeugnis

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zeugnis
- **Field:** entry[3270].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izziņu
- **DE source:** Zeugnis
- **LV reference:** liecība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3270].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 960: b1-zeugnis

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zeugnis
- **Field:** entry[3270].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** liecību
- **DE source:** Zeugnis
- **LV reference:** liecība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3270].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 961: b1-zeugnis

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zeugnis
- **Field:** entry[3270].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izziņu
- **DE source:** Zeugnis
- **LV reference:** liecība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3270].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 962: b1-zeugnis

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zeugnis
- **Field:** entry[3270].study.sectionAccents.examples[2].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** liecību
- **DE source:** Zeugnis
- **LV reference:** liecība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3270].study.sectionAccents.examples[2].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 963: b1-zeugnis

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zeugnis
- **Field:** entry[3270].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** liecība
- **DE source:** Zeugnis
- **LV reference:** liecība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3270].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 964: b1-zeugnis

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zeugnis
- **Field:** entry[3270].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** izziņa
- **DE source:** Zeugnis
- **LV reference:** liecība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3270].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 965: b1-zeugnis

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zeugnis
- **Field:** entry[3270].study.sectionAccents.important.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ārsta izziņa
- **DE source:** Zeugnis
- **LV reference:** liecība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3270].study.sectionAccents.important.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 966: b1-zugeben

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zugeben
- **Field:** entry[3292].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atzīt
- **DE source:** zugeben
- **LV reference:** atzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3292].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 967: b1-zugeben

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zugeben
- **Field:** entry[3292].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atzīstu
- **DE source:** zugeben
- **LV reference:** atzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3292].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 968: b1-zugeben

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zugeben
- **Field:** entry[3292].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atzīt
- **DE source:** zugeben
- **LV reference:** atzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3292].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 969: b1-zugeben

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zugeben
- **Field:** entry[3292].study.sectionAccents.comparison[2].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atzīties
- **DE source:** zugeben
- **LV reference:** atzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3292].study.sectionAccents.comparison[2].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 970: b1-zugeben

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zugeben
- **Field:** entry[3292].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** atzīst
- **DE source:** zugeben
- **LV reference:** atzīt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3292].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 971: b1-zünden

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zünden
- **Field:** entry[3296].study.sectionAccents.explanation.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nostrādāt
- **DE source:** zünden
- **LV reference:** aizdedzināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3296].study.sectionAccents.explanation.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 972: b1-zünden

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zünden
- **Field:** entry[3296].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** nostrādāja
- **DE source:** zünden
- **LV reference:** aizdedzināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3296].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 973: b1-zünden

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zünden
- **Field:** entry[3296].study.sectionAccents.comparison[1].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** aizdedzināt
- **DE source:** zünden
- **LV reference:** aizdedzināt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3296].study.sectionAccents.comparison[1].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 974: b1-zusammenhang

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zusammenhang
- **Field:** entry[3299].study.sectionAccents.explanation.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sakarību
- **DE source:** Zusammenhang
- **LV reference:** sakarība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3299].study.sectionAccents.explanation.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 975: b1-zusammenhang

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zusammenhang
- **Field:** entry[3299].study.sectionAccents.examples[0].lv.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sakarību
- **DE source:** Zusammenhang
- **LV reference:** sakarība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3299].study.sectionAccents.examples[0].lv.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 976: b1-zusammenhang

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zusammenhang
- **Field:** entry[3299].study.sectionAccents.examples[1].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saistībā
- **DE source:** Zusammenhang
- **LV reference:** sakarība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3299].study.sectionAccents.examples[1].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 977: b1-zusammenhang

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zusammenhang
- **Field:** entry[3299].study.sectionAccents.examples[2].lv.red
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Kontekstā
- **DE source:** Zusammenhang
- **LV reference:** sakarība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3299].study.sectionAccents.examples[2].lv.red
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 978: b1-zusammenhang

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zusammenhang
- **Field:** entry[3299].study.sectionAccents.comparison[0].meaning.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sakarība
- **DE source:** Zusammenhang
- **LV reference:** sakarība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3299].study.sectionAccents.comparison[0].meaning.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 979: b1-zusammenhang

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zusammenhang
- **Field:** entry[3299].study.sectionAccents.tip.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saistītas
- **DE source:** Zusammenhang
- **LV reference:** sakarība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3299].study.sectionAccents.tip.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 980: b1-zusammenhang

- **Dataset:** b1
- **Batch:** 3251-3300
- **Card/Index:** b1-zusammenhang
- **Field:** entry[3299].study.sectionAccents.important.purple
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** saistībā ar
- **DE source:** Zusammenhang
- **LV reference:** sakarība
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3299].study.sectionAccents.important.purple
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 981: b1-beruf

- **Dataset:** b1
- **Batch:** 3301-3350
- **Card/Index:** b1-beruf
- **Field:** entry[3320].study.important.example
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Von Beruf Lehrer = pēc profesijas skolotājs. viel Arbeit = daudz darba.
- **DE source:** Beruf
- **LV reference:** profesija
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3320].study.important.example
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 982: b1-beruf

- **Dataset:** b1
- **Batch:** 3301-3350
- **Card/Index:** b1-beruf
- **Field:** entry[3320].study.accents.purple[6]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Nodarbošanās
- **DE source:** Beruf
- **LV reference:** profesija
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3320].study.accents.purple[6]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 983: b1-sich-befinden-study

- **Dataset:** b1
- **Batch:** 3301-3350
- **Card/Index:** b1-sich-befinden-study
- **Field:** entry[3344].study.important.example
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Das Hotel befindet sich hier = viesnīca atrodas šeit. Ich fühle mich gut = es jūtos labi.
- **DE source:** sich befinden
- **LV reference:** atrasties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3344].study.important.example
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 984: b1-sich-befinden-study

- **Dataset:** b1
- **Batch:** 3301-3350
- **Card/Index:** b1-sich-befinden-study
- **Field:** entry[3344].study.sectionAccents.important[0].example.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** jūtos
- **DE source:** sich befinden
- **LV reference:** atrasties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3344].study.sectionAccents.important[0].example.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 985: b1-sich-befinden-study

- **Dataset:** b1
- **Batch:** 3301-3350
- **Card/Index:** b1-sich-befinden-study
- **Field:** entry[3344].study.accents.purple[3]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Jūtos
- **DE source:** sich befinden
- **LV reference:** atrasties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3344].study.accents.purple[3]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 986: b1-sich-befinden-study

- **Dataset:** b1
- **Batch:** 3301-3350
- **Card/Index:** b1-sich-befinden-study
- **Field:** entry[3344].study.accents.purple[4]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Atrašanās vieta
- **DE source:** sich befinden
- **LV reference:** atrasties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[3344].study.accents.purple[4]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 987: b1-anlehnen-120

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-anlehnen-120
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** TAM
- **DE source:** anlehnen
- **LV reference:** piesliet
- **Problem:** Současný text není český překlad daného slovesa.
- **Recommended CS:** Opřít
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 988: b1-anschaulich-136

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-anschaulich-136
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Zvážil
- **DE source:** anschaulich
- **LV reference:** uzskatāms
- **Problem:** Zvážil je minulý čas slovesa zvážit a významově nesouvisí s přídavným jménem anschaulich.
- **Recommended CS:** Názorný
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 989: b1-begießen-292

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-begießen-292
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Do vody
- **DE source:** begießen
- **LV reference:** aplaistīt
- **Problem:** Současný text není českým překladem slovesa; begießen znamená zalévat nebo polít.
- **Recommended CS:** Zalévat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 990: b1-Beton-402

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Beton-402
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Konkrétní
- **DE source:** Beton
- **LV reference:** betons
- **Problem:** „Konkrétní“ znamená specific/concrete ve významu abstraktního opaku, nikoli stavební materiál beton.
- **Recommended CS:** Beton
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 991: b1-Blei-458

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Blei-458
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Vést
- **DE source:** Blei
- **LV reference:** svins
- **Problem:** „Blei“ je podstatné jméno „olovo“, zatímco „vést“ je české sloveso pro německé „führen“.
- **Recommended CS:** Olovo
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 992: b1-blicken-460

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-blicken-460
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Hodinky
- **DE source:** blicken
- **LV reference:** skatīties
- **Problem:** „Hodinky“ jsou podstatné jméno; „blicken“ znamená dívat se nebo pohlížet.
- **Recommended CS:** Dívat se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 993: b1-Bombe-478

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Bombe-478
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Míč
- **DE source:** Bombe
- **LV reference:** bumba
- **Problem:** „Bombe“ znamená bomba; „míč“ odpovídá německému „Ball“.
- **Recommended CS:** Bomba
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 994: b1-Brett-503

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Brett-503
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Rada
- **DE source:** Brett
- **LV reference:** dēlis
- **Problem:** „Brett“ znamená prkno; „rada“ je český ekvivalent německého „Rat“.
- **Recommended CS:** Prkno
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 995: b1-einnehmen-695

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-einnehmen-695
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Otěhotnět
- **DE source:** einnehmen
- **LV reference:** ieņemt
- **Problem:** Otěhotnět znamená stát se těhotnou; německé einnehmen znamená užívat, přijímat nebo zaujmout.
- **Recommended CS:** Užívat • Zaujmout
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 996: b1-irdisch-1394

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-irdisch-1394
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Přistát-
- **DE source:** irdisch
- **LV reference:** zemes-
- **Problem:** „Přistát-“ je slovesný základ od „přistát“ a významově nesouvisí s přídavným jménem „pozemský“.
- **Recommended CS:** Pozemský
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 997: b1-lehnen-1747

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-lehnen-1747
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** TAM
- **DE source:** lehnen
- **LV reference:** piesliet
- **Problem:** Současný text není český překlad slovesa lehnen a obsahuje zjevně cizí či chybný text.
- **Recommended CS:** Opírat se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 998: b1-Lichtung-1771

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Lichtung-1771
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Zúčtování
- **DE source:** Lichtung
- **LV reference:** izcirtums
- **Problem:** Lichtung znamená mýtina nebo lesní světlinu; zúčtování má zcela jiný význam.
- **Recommended CS:** Mýtina
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 999: b1-Nacken-1955

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Nacken-1955
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Ničema
- **DE source:** Nacken
- **LV reference:** skausts
- **Problem:** „Ničema“ znamená darebák nebo budižkničemu; „Nacken“ je zátylek či šíje.
- **Recommended CS:** Zátylek
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1000: b1-necken-1970

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-necken-1970
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Pištění
- **DE source:** necken
- **LV reference:** kircināt
- **Problem:** „Pištění“ je vysoký pronikavý zvuk; sloveso „necken“ znamená škádlit nebo dobírat si.
- **Recommended CS:** Šk áslit
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1001: b1-Prozentsatz-2177

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Prozentsatz-2177
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Úroková sazba
- **DE source:** Prozentsatz
- **LV reference:** procentu likme
- **Problem:** Prozentsatz znamená procento či procentní podíl, nikoli úrokovou sazbu.
- **Recommended CS:** Procento
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1002: b1-realisieren-2242

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-realisieren-2242
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Nářadí
- **DE source:** realisieren
- **LV reference:** īstenot
- **Problem:** „Nářadí“ znamená tools; realisieren znamená uskutečnit, realizovat nebo uvědomit si.
- **Recommended CS:** Uskutečnit
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1003: b1-saufen-2391

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-saufen-2391
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Uschnout
- **DE source:** saufen
- **LV reference:** žūpot
- **Problem:** „Saufen“ znamená hovorově nadměrně pít alkohol; „uschnout“ znamená vyschnout.
- **Recommended CS:** Chlastat
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1004: b1-säumen-2397

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-säumen-2397
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Zklamat
- **DE source:** säumen
- **LV reference:** [ap]vīlēt
- **Problem:** „Säumen“ znamená olemovat nebo obroubit; „zklamat“ znamená disappoint.
- **Recommended CS:** Olemovat
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1005: b1-Scheinwerfer-2422

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Scheinwerfer-2422
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Hvězdný muž
- **DE source:** Scheinwerfer
- **LV reference:** starmetis
- **Problem:** „Scheinwerfer“ znamená světlomet nebo reflektor; současný překlad je významově zcela chybný.
- **Recommended CS:** Světlomet
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1006: b1-taumeln-2865

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-taumeln-2865
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Pruhování
- **DE source:** taumeln
- **LV reference:** streipuļot
- **Problem:** „Pruhování“ znamená vytváření pruhů a nesouvisí s významem slovesa „taumeln“ (potácet se).
- **Recommended CS:** Potácet se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1007: b1-Teig-2870

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Teig-2870
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Hádanka
- **DE source:** Teig
- **LV reference:** mīkla
- **Problem:** „Teig“ znamená těsto; „hádanka“ odpovídá německému „Rätsel“.
- **Recommended CS:** Těsto
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1008: b1-Tempo-2881

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Tempo-2881
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** ORTHOGRAPHY
- **Current CS text:** Tepl
- **DE source:** Tempo
- **LV reference:** temps
- **Problem:** „Tepl“ je překlep a neoznačuje rychlost ani tempo.
- **Recommended CS:** Tempo
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1009: b1-Tonne-2897

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Tonne-2897
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Tón
- **DE source:** Tonne
- **LV reference:** tonna
- **Problem:** „Tonne“ zde znamená tunu; „tón“ je zvuková výška nebo odstín.
- **Recommended CS:** Tuna
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1010: b1-Truthahn-2936

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Truthahn-2936
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Turecko
- **DE source:** Truthahn
- **LV reference:** tītars
- **Problem:** „Turecko“ je název země; německý Truthahn znamená samce krůty, česky „krocan“.
- **Recommended CS:** Krocan
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1011: b1-Vaterland-3037

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Vaterland-3037
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Otec
- **DE source:** Vaterland
- **LV reference:** tēvija
- **Problem:** „Otec“ je doslovná část složeniny, ale Vaterland znamená vlast nebo otčinu.
- **Recommended CS:** Vlast
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1012: b1-verarbeiten-3043

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-verarbeiten-3043
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Proces
- **DE source:** verarbeiten
- **LV reference:** apstrādāt
- **Problem:** „Proces“ je podstatné jméno, zatímco německé slovo je sloveso znamenající zpracovat.
- **Recommended CS:** Zpracovat
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1013: b1-verbreiten-3053

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-verbreiten-3053
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Šíření
- **DE source:** verbreiten
- **LV reference:** izplatīt
- **Problem:** „Šíření“ je podstatné jméno; německý výraz je sloveso.
- **Recommended CS:** Šířit
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1014: b1-vergrößern-3068

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-vergrößern-3068
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Zvýšení
- **DE source:** vergrößern
- **LV reference:** palielināt
- **Problem:** „Zvýšení“ je podstatné jméno; německý výraz je sloveso znamenající zvětšit.
- **Recommended CS:** Zvětšit
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1015: b1-sich vergrößern-3069

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-sich vergrößern-3069
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Zvýšení
- **DE source:** sich vergrößern
- **LV reference:** palielināties
- **Problem:** Překlad je podstatné jméno a navíc nezachovává zvratnost německého slovesa.
- **Recommended CS:** Zvětšit se
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1016: b1-sich verirren-3075

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-sich verirren-3075
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Zmizte
- **DE source:** sich verirren
- **LV reference:** apmaldīties
- **Problem:** „Zmizte“ je imperativ slovesa zmizet a významově nesouvisí s německým výrazem.
- **Recommended CS:** Zabloudit
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1017: b1-Wasserleitung-3206

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Wasserleitung-3206
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Vodní dýmka
- **DE source:** Wasserleitung
- **LV reference:** ūdensvads
- **Problem:** Wasserleitung znamená vodovodní potrubí nebo vodovod, nikoli vodní dýmku.
- **Recommended CS:** Vodovodní potrubí
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1018: b1-Weise-3228

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Weise-3228
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Chytrý
- **DE source:** Weise
- **LV reference:** gudrs
- **Problem:** Die Weise je podstatné jméno ve významu způsob nebo způsob, jakým se něco děje; „chytrý“ je přídavné jméno.
- **Recommended CS:** Způsob
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1019: b1-Weltraum-3239

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Weltraum-3239
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Plocha
- **DE source:** Weltraum
- **LV reference:** kosmoss
- **Problem:** Weltraum znamená vesmírný nebo kosmický prostor; „plocha“ označuje povrch či rozměr.
- **Recommended CS:** Vesmírný prostor
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1020: b1-zwar-3308

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-zwar-3308
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Obě
- **DE source:** zwar
- **LV reference:** gan
- **Problem:** „Obě“ znamená both; německé „zwar“ se překládá jako „sice“.
- **Recommended CS:** Sice
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1021: b1-sich konzentrieren-3352

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-sich konzentrieren-3352
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Koncentrát
- **DE source:** sich konzentrieren
- **LV reference:** koncentrēties
- **Problem:** „Koncentrát“ je podstatné jméno; sloveso „sich konzentrieren“ znamená „soustředit se“.
- **Recommended CS:** Soustředit se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1022: b1-sich scheiden-3354

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-sich scheiden-3354
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Rozbít
- **DE source:** sich scheiden
- **LV reference:** šķirties
- **Problem:** „Rozbít“ znamená break; „sich scheiden“ znamená rozvést se nebo rozejít se.
- **Recommended CS:** Rozvést se • Rozejít se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1023: b1-abgehen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-abgehen
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Dovolená
- **DE source:** abgehen
- **LV reference:** aiziet
- **Problem:** „Dovolená“ je zcela jiný význam; abgehen znamená odejít nebo odjet.
- **Recommended CS:** Odejít • odjet
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1024: b1-ablegen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-ablegen
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** ORTHOGRAPHY
- **Current CS text:** Prüfungablen znamená složení zkoušky, nikoli „absolvování“ předmětu.
- **DE source:** Prüfung ablegen
- **LV reference:** Prüfung ablegen
- **Problem:** Německé spojení je zkomolené jako „Prüfungablen“ a obsahuje chybný tvar slovesa.
- **Recommended CS:** Prüfung ablegen znamená složit zkoušku, nikoli „absolvovat“ předmět.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1025: b1-aufwand

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-aufwand
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Hlavní myšlenka: der Ausführt znamená úsilí nebo investice potřebné k tomu, abychom něco udělali.
- **DE source:** Aufwand
- **LV reference:** Galvenā doma: der Aufwand nozīmē pūles vai ieguldījumu.
- **Problem:** „Ausführt“ je jiná německá forma/slovo; zde nahrazuje cílové slovo „Aufwand“.
- **Recommended CS:** Hlavní myšlenka: der Aufwand znamená úsilí nebo investice potřebné k tomu, abychom něco udělali.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1026: b1-aufwand

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-aufwand
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Když přijde na to, kolik práce něco vyžaduje, myslete na der Ausführt.
- **DE source:** Aufwand
- **LV reference:** Ja runa ir par to, cik daudz darba kaut kas prasa, domā der Aufwand.
- **Problem:** Opět je použito jiné německé slovo „Ausführt“ místo „Aufwand“.
- **Recommended CS:** Když přijde na to, kolik práce něco vyžaduje, myslete na der Aufwand.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1027: b1-aufwand

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-aufwand
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Der Ausführt není běžná „spotřeba“ • Častěji je to vynaložené úsilí, čas nebo práce.
- **DE source:** Aufwand
- **LV reference:** der Aufwand nav parasts “patēriņš”; biežāk tas ir pūles, laiks vai ieguldītais darbs.
- **Problem:** „Ausführt“ je chybná náhrada za německé heslo „Aufwand“.
- **Recommended CS:** Der Aufwand není běžná „spotřeba“ • Častěji je to vynaložené úsilí, čas nebo práce.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1028: b1-aufführen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-aufführen
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Vychovat
- **DE source:** aufführen
- **LV reference:** uzvest
- **Problem:** „Vychovat“ znamená erziehen; aufführen znamená uvést/předvést dílo nebo uvést položky v seznamu.
- **Recommended CS:** Uvést • vyjmenovat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1029: b1-aufführen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-aufführen
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Divadlo → aufführen • Seznam → erättät.
- **DE source:** aufführen
- **LV reference:** Teātris → aufführen; saraksts → aufgeführt.
- **Problem:** „erättät“ není německý výraz a představuje kontaminaci jiným jazykem.
- **Recommended CS:** Divadlo → aufführen • Seznam → aufgeführt.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1030: b1-beraten

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-beraten
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Odborně týraní lidé • Skupina berät über otázka • Lidé nadávali sich.
- **DE source:** beraten
- **LV reference:** Eksperts beraten cilvēku; grupa berät über jautājumu; cilvēki beraten sich.
- **Problem:** Text obsahuje nesmyslné překlady a směs češtiny s němčinou.
- **Recommended CS:** Odborník radí člověku • Skupina probírá otázku • Lidé se radí.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1031: b1-dahin

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-dahin
- **Field:** csMain
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Pokračování
- **DE source:** dahin
- **LV reference:** turp
- **Problem:** „Pokračování“ je zcela jiný význam; dahin označuje směr k místu.
- **Recommended CS:** Tam • tamtím směrem
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1032: b1-dahin

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-dahin
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Pokračování
- **DE source:** dahin
- **LV reference:** turp
- **Problem:** „Pokračování“ je zcela jiný význam; dahin označuje směr k místu.
- **Recommended CS:** Tam • tamtím směrem
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1033: b1-dahin

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-dahin
- **Field:** study.examples[2].lv
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Moje naděje je pro dvůr.
- **DE source:** Meine Hoffnung ist dahin.
- **LV reference:** mana cerība ir pagalam.
- **Problem:** „Pro dvůr“ je nesmyslný překlad; dahin zde znamená „ztracena, pryč“.
- **Recommended CS:** Moje naděje je ztracena.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1034: b1-dahin

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-dahin
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Dahin ukazuje směr k místu a dort ukazuje umístění. I ist dahin = to je na dvůr.
- **DE source:** Es ist dahin.
- **LV reference:** Es ist dahin = tas ir pagalam.
- **Problem:** Obsahuje překlep „I ist“ a nesmyslný překlad „na dvůr“ místo „pryč, ztracené“.
- **Recommended CS:** Dahin ukazuje směr k místu, zatímco dort označuje místo. Es ist dahin = je to pryč nebo ztracené.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1035: b1-durchführen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-durchführen
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Hlavní myšlenka: gebieben znamená provést nebo provést plánovanou akci. Používá se při kontrolách, opravách, experimentech a akcích.
- **DE source:** durchführen
- **LV reference:** veikt
- **Problem:** „gebieben“ je zkomolený výraz; opakování „provést“ a spojení „při akcích“ jsou významově či stylisticky nevhodná.
- **Recommended CS:** Hlavní myšlenka: durchführen znamená provést nebo uskutečnit plánovanou činnost. Používá se u kontrol, oprav, experimentů a akcí.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1036: b1-durchführen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-durchführen
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Gerünfung není doslovně „procházet“ • V textech B1 to obvykle znamená vystupovat.
- **DE source:** durchführen
- **LV reference:** durchführen nav burtiski “vest cauri”; B1 tekstos tas parasti nozīmē veikt.
- **Problem:** Text obsahuje zkomolené slovo a vysvětluje zcela chybný význam „vystupovat“.
- **Recommended CS:** Durchführen doslova neznamená „provádět skrz“ • V textech B1 obvykle znamená provést nebo uskutečnit.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1037: b1-eindeutig

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-eindeutig
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** ORTHOGRAPHY
- **Current CS text:** Hlavní myšlenka: einveitt znamená jasné a jednoznačné, když neexistují žádné pochybnosti nebo dva výklady. To není totéž jako einfach = jednoduché.
- **DE source:** eindeutig
- **LV reference:** nepārprotams
- **Problem:** „einveitt“ je překlep; „jasné“ a formulace o dvou výkladech jsou v této větě gramaticky nevhodné.
- **Recommended CS:** Hlavní myšlenka: eindeutig znamená jasný a jednoznačný, když neexistují pochybnosti ani dva možné výklady. Není totéž co einfach = jednoduchý.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1038: b1-eindeutig

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-eindeutig
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** ORTHOGRAPHY
- **Current CS text:** Pokud není pochyb o významu nebo výsledku, použijte einteigt.
- **DE source:** eindeutig
- **LV reference:** Ja nav šaubu par nozīmi vai rezultātu, lieto eindeutig.
- **Problem:** „einteigt“ je zkomolený zápis německého hesla eindeutig.
- **Recommended CS:** Pokud není pochyb o významu nebo výsledku, použijte eindeutig.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1039: b1-einerlei

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-einerlei
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** ORTHOGRAPHY
- **Current CS text:** Hlavní myšlenka: einerle znamená nezáleží nebo nezáleží. Zní to více formálně nebo staromódně než každodenní egal.
- **DE source:** einerlei
- **LV reference:** vienalga
- **Problem:** „einerle“ je překlep a význam je zbytečně opakován; česká formulace je také nepřirozená.
- **Recommended CS:** Hlavní myšlenka: einerlei znamená „je mi to jedno“ nebo „nezáleží na tom“. Zní formálněji či staromódněji než běžné egal.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1040: b1-eröffnen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-eröffnen
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Kontu, vystavovat nebo sit överfünt muž • Otevři mi dveře.
- **DE source:** eröffnen und öffnen
- **LV reference:** Kontu, izstādi vai sēdi eröffnet man; durvis öffnet man.
- **Problem:** Text je z větší části nesrozumitelný a obsahuje cizojazyčnou kontaminaci.
- **Recommended CS:** Účet, výstavu nebo schůzi otevíráme či zahajujeme pomocí eröffnen; dveře otevíráme pomocí öffnen.
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 1041: b1-fassen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-fassen
- **Field:** study.examples[1].lv
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Nemůžu zabalit hlavu kolem té myšlenky.
- **DE source:** Ich kann diesen Gedanken nicht fassen.
- **LV reference:** nespēju aptvert šo domu
- **Problem:** Doslovný anglický idiom je v češtině nepřirozený a nevhodný pro výukový text.
- **Recommended CS:** Nemohu tuto myšlenku pochopit.
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 1042: b1-fassen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-fassen
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Rukou fassen = uchopit • Rozumem fassen = uchopit • Saal rychle = hodí se.
- **DE source:** fassen in verschiedenen Bedeutungen
- **LV reference:** Ar roku fassen = satvert; ar prātu fassen = aptvert; Saal fasst = ietilpina.
- **Problem:** Poslední část je nesrozumitelná a mentální význam je přeložen nepřesně.
- **Recommended CS:** Rukou fassen = uchopit • Prací mysli fassen = pochopit • Saal fasst = pojme určitý počet osob.
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 1043: b1-festhalten

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-festhalten
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Nezaměňujte festhalten s festhalten: festhalten = držet/upravovat, festhalten = zakládat.
- **DE source:** festhalten / feststellen
- **LV reference:** Nejauc festhalten ar feststellen
- **Problem:** Text zaměňuje obě německá slovesa a uvádí nesprávné významy.
- **Recommended CS:** Nezaměňujte festhalten s feststellen: festhalten = držet/zaznamenat, feststellen = konstatovat.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1044: b1-feststellen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-feststellen
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Založit
- **DE source:** feststellen
- **LV reference:** konstatēt
- **Problem:** Založit znamená gründ(en); festlegen/feststellen se překládá jako konstatovat nebo zjistit.
- **Recommended CS:** Konstatovat
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1045: b1-feststellen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-feststellen
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Verzetten = stanovit již existující skutečnost • Festlegen = stanovit rozhodnutí, termín nebo cenu.
- **DE source:** feststellen / festlegen
- **LV reference:** feststellen = konstatēt jau esošu faktu; festlegen = noteikt lēmumu, termiņu vai cenu.
- **Problem:** „Verzetten“ je cizí a nesprávné slovo; první význam navíc není přirozeně přeložen.
- **Recommended CS:** Feststellen = konstatovat již existující skutečnost • Festlegen = předem stanovit rozhodnutí, termín nebo cenu.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1046: b1-fortfahren

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-fortfahren
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** V rozhovoru Pevnost Fahren Sie! = Pokračovat! • Autem fortfahren = odjet.
- **DE source:** Fahren Sie fort!
- **LV reference:** Fahren Sie fort! = Turpiniet!
- **Problem:** Text obsahuje nesmyslný překlad „Pevnost“ a chybný tvar německé fráze.
- **Recommended CS:** V rozhovoru Fahren Sie fort! = Pokračujte! • Autem fortfahren = odjet.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1047: b1-fressen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-fressen
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Zítra
- **DE source:** fressen
- **LV reference:** ēst dzīvniekam / rīt
- **Problem:** „Zítra“ znamená morgen; fressen znamená žrát, zejména o zvířatech.
- **Recommended CS:** Žrát
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1048: b1-fressen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-fressen
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Hlavní myšlenka: fressen se používá, když zvíře žere. O člověku to zní neslušně nebo hanlivě, zhruba jako „zítra“ nebo „zítra“.
- **DE source:** fressen
- **LV reference:** ēst dzīvniekam / rīt
- **Problem:** Význam pro člověka je dvakrát chybně uveden jako „zítra“ místo hrubého žrát/sežrat.
- **Recommended CS:** Hlavní myšlenka: fressen se používá, když zvíře žere. O člověku to zní neslušně nebo hanlivě, zhruba jako „žrát“ nebo „sežrat“.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1049: b1-fressen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-fressen
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Zvířecí náklonnost, mužská náklonnost. Pro člověka je fressen záměrně hrubý.
- **DE source:** fressen / essen
- **LV reference:** Dzīvnieks frisst, cilvēks isst.
- **Problem:** První věta je nesmyslný překlad a zaměňuje významy; druhá část má nesprávný rod i formulaci.
- **Recommended CS:** Zvíře žere, člověk jí. O člověku je fressen záměrně hrubé.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 1050: b1-gelten

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-gelten
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Regel, Gesetz, Lístek pozlacený • Osoba pozlacená jako Expertin.
- **DE source:** gelten
- **LV reference:** Regel, Gesetz, Ticket gilt; persona gilt als Expertin.
- **Problem:** Text obsahuje německé výrazy a nesmyslný překlad „pozlacený“ místo významu gelten.
- **Recommended CS:** Pravidlo, zákon, lístek platí • Osoba je považována za expertku.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1051: b1-geschlecht

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-geschlecht
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Pro osobu Geschlecht = sex • Za slovo v gramatice Geschlecht = rodina.
- **DE source:** Geschlecht
- **LV reference:** Personai Geschlecht = dzimums; vārdam gramatikā Geschlecht = dzimte.
- **Problem:** Text obsahuje anglické „sex“ a chybný překlad „rodina“ místo gramatického významu „rod“.
- **Recommended CS:** U osoby Geschlecht = pohlaví • U slova v gramatice Geschlecht = rod.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1052: b1-gewiss

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-gewiss
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Trezor
- **DE source:** gewiss
- **LV reference:** drošs
- **Problem:** „Trezor“ znamená bezpečnostní schránku; s německým gewiss nijak nesouvisí.
- **Recommended CS:** Jistý • určitě
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1053: b1-herausgeben

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-herausgeben
- **Field:** csMain
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Problém
- **DE source:** herausgeben
- **LV reference:** —
- **Problem:** „Problém“ je zcela nesouvisející překlad; herausgeben znamená vydat, zveřejnit nebo předat.
- **Recommended CS:** Vydat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1054: b1-herkommen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-herkommen
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Co jí kommst? ne o pohybu okamžiku, ale o původu.
- **DE source:** Wo kommst du her?
- **LV reference:** Wo kommst du her? nav par šī brīža kustību, bet par izcelsmi.
- **Problem:** Text obsahuje nesmyslnou směs češtiny a němčiny; otázka je zkomolená.
- **Recommended CS:** „Wo kommst du her?“ se netýká právě probíhajícího pohybu, ale původu.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1055: b1-hinweis

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-hinweis
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Hinweis něco naznačuje • Krysa navrhuje, co dělat.
- **DE source:** Hinweis / Rat
- **LV reference:** Hinweis norāda uz kaut ko; Rat iesaka, ko darīt.
- **Problem:** „Krysa“ je chybný překlad slova Rat a mění význam věty.
- **Recommended CS:** Hinweis na něco upozorňuje • Rada doporučuje, co dělat.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1056: b1-hinweis

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-hinweis
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Der Hinweis není totéž jako der Rat: Hinweis naznačuje, Krysa radí.
- **DE source:** der Hinweis / der Rat
- **LV reference:** der Hinweis nav tas pats, kas der Rat: Hinweis norāda, Rat iesaka.
- **Problem:** „Krysa“ je zjevný chybný překlad slova Rat.
- **Recommended CS:** Hinweis není totéž co Rat: Hinweis upozorňuje, rada doporučuje.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1057: b1-hupe

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-hupe
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Roh • Roh
- **DE source:** Hupe
- **LV reference:** signāltaure • taure
- **Problem:** „Roh“ označuje zvířecí roh nebo hudební nástroj, nikoli automobilový či lodní klakson.
- **Recommended CS:** Klakson • lodní houkačka
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1058: b1-hupe

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-hupe
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Die Hupe = polnice nebo polnice. Množné číslo: die Hupen.
- **DE source:** die Hupe
- **LV reference:** die Hupe = signāltaure vai taure.
- **Problem:** „Polnice“ je v obou částech chybný překlad a neodpovídá významu Hupe.
- **Recommended CS:** Die Hupe = klakson nebo lodní houkačka. Množné číslo: die Hupen.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1059: b1-kippen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-kippen
- **Field:** study.comparison[2].meaning
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Řezat
- **DE source:** umdrehen
- **LV reference:** apgriezt
- **Problem:** „Řezat“ je zcela jiný význam; umdrehen znamená otočit nebo obrátit.
- **Recommended CS:** Otočit
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1060: b1-inhalt

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-inhalt
- **Field:** study.important
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** der Inhalt nejčastěji spokojený
- **DE source:** der Inhalt
- **LV reference:** ikdienā ... visbiežāk ir saturs
- **Problem:** Spokojený je zjevně chybný automatický překlad a významově odporuje zdroji.
- **Recommended CS:** der Inhalt nejčastěji znamená obsah
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1061: b1-landen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-landen
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Posaďte se
- **DE source:** landen
- **LV reference:** nosēsties
- **Problem:** Posaďte se znamená sednout si a je zcela jiný význam než landen.
- **Recommended CS:** Přistát • skončit
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1062: b1-laut-study

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-laut-study
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Der Laut primárně znamená: hlasitý zvuk.
- **DE source:** Laut / laut
- **LV reference:** der Laut = skaņa; laut = skaļš
- **Problem:** Vysvětlení zaměňuje podstatné jméno der Laut za přídavné jméno laut a následně si odporuje.
- **Recommended CS:** Der Laut znamená zvuk; laut znamená hlasitý.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1063: b1-los

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-los
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Hodně
- **DE source:** Los
- **LV reference:** loze
- **Problem:** Los znamená los nebo osud; „hodně“ je chybný překlad českého slova lot.
- **Recommended CS:** Los
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1064: b1-maß

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-maß
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Starosta
- **DE source:** Maß
- **LV reference:** mērs
- **Problem:** Maß znamená míra, měřítko nebo rozměr; „starosta“ je zcela jiný význam.
- **Recommended CS:** Míra
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1065: b1-schmelzen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-schmelzen
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Pohybující se
- **DE source:** schmelzen
- **LV reference:** kust
- **Problem:** Pohybující se znamená moving a vůbec nevyjadřuje význam schmelzen.
- **Recommended CS:** Tát • Tav it
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1066: b1-schmelzen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-schmelzen
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Hlavní myšlenka: schmelzen znamená roztavit nebo splynout. Pokud se látka sama změní, překládá se jako „pohyb“ • Pokud to někdo udělá, překládá se to jako „tavení“.
- **DE source:** schmelzen
- **LV reference:** kust vai kausēt
- **Problem:** Text zaměňuje významy pohyb a tavení; schmelzen znamená tát/tavit.
- **Recommended CS:** Hlavní myšlenka: schmelzen znamená tát nebo tavit. Pokud se látka mění sama, překládá se jako „tát“ • Pokud ji někdo taví, překládá se jako „tavit“.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1067: b1-senden

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-senden
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Hlavní myšlenka: Senden znamená poslat zprávu nebo poslat signál/vysílat. V každodenním životě je pro lidi často přirozenější mít kuřátko.
- **DE source:** senden
- **LV reference:** Galvenā doma: senden nozīmē sūtīt ziņu vai raidīt signālu/pārraidi. Ikdienā cilvēkiem bieži dabiskāk ir schicken.
- **Problem:** „Mít kuřátko“ je nesmyslný textový artefakt a nahrazuje význam slovesa schicken.
- **Recommended CS:** Hlavní myšlenka: senden znamená poslat zprávu nebo vysílat signál či pořad. V každodenním životě je pro lidi často přirozenější používat schicken.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1068: b1-sitz

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-sitz
- **Field:** study.comparison[0].meaning
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Sedák, sedák • Sedák
- **DE source:** der Sitz
- **LV reference:** sēdeklis, sēdvieta • mītne
- **Problem:** Všechny významy jsou chybně přeloženy jako „sedák“; zcela chybí význam sídla.
- **Recommended CS:** Sedadlo, místo k sezení • sídlo
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1069: b1-stoßen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-stoßen
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** TAM
- **DE source:** stoßen
- **LV reference:** grūst
- **Problem:** Hlavní překlad je nesmyslný a nesouvisí s německým slovesem stoßen.
- **Recommended CS:** Strčit
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1070: b1-teilnehmen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-teilnehmen
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** ORTHOGRAPHY
- **Current CS text:** Řekněte dem Kurs teilnen nebo am Kurs teilein, ne den Kurs teilein.
- **DE source:** teilnehmen
- **LV reference:** Saki an dem Kurs teilnehmen vai am Kurs teilnehmen, nevis den Kurs teilnehmen.
- **Problem:** Text obsahuje několik překlepů a v prvním příkladu chybí předložka an.
- **Recommended CS:** Řekněte an dem Kurs teilnehmen nebo am Kurs teilnehmen, ne den Kurs teilnehmen.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1071: b1-treiben

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-treiben
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Obsadit
- **DE source:** treiben
- **LV reference:** nodarboties
- **Problem:** „Obsadit“ je zcela jiný význam; treiben ve studovaném smyslu znamená věnovat se nebo hnát.
- **Recommended CS:** Věnovat se • hnát
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1072: b1-trennen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-trennen
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** ORTHOGRAPHY
- **Current CS text:** Sich trennen znamená oddělit • Verskeiden znamená rozlišovat podle vlastností.
- **DE source:** unterscheiden
- **LV reference:** unterscheiden nozīmē atšķirt pēc pazīmēm.
- **Problem:** „Verskeiden“ je chybný, nekorektní výraz; navíc je špatně přeložen význam sich trennen.
- **Recommended CS:** Sich trennen znamená rozejít se • Unterscheiden znamená rozlišovat podle vlastností.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1073: b1-übergeben

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-übergeben
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Bez sich je to zradit • Se sich je to zvratky.
- **DE source:** übergeben
- **LV reference:** Bez sich tas ir nodot; ar sich tas ir vemt.
- **Problem:** Oba české významy jsou chybné: „zradit“ a „zvratky“ neodpovídají übergeben.
- **Recommended CS:** Bez sich to znamená předat • Se sich to znamená zvracet.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1074: b1-verfolgen

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-verfolgen
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Novinky lze sledovat • Člověk může být pronásledován: verschreibung.
- **DE source:** verfolgen
- **LV reference:** Ziņām var sekot līdzi; cilvēku var vajāt: verfolgen.
- **Problem:** Na konci je cizí nesouvisející německé slovo „verschreibung“ místo „verfolgen“.
- **Recommended CS:** Zprávy lze sledovat • člověka lze pronásledovat: verfolgen.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1075: b1-versichern

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-versichern
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Ich versichere dir znamená, že vás ujišťuji, nikoli já vás ujišťuji.
- **DE source:** Ich versichere dir
- **LV reference:** Ich versichere dir nozīmē es tev apliecinu, nevis es tevi apdrošinu.
- **Problem:** Obě části současného textu tvrdí totéž a neuvádějí potřebný kontrast mezi ujistit a pojistit.
- **Recommended CS:** Ich versichere dir znamená „ujišťuji tě“, nikoli „pojišťuji tě“.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1076: b1-verwandte

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-verwandte
- **Field:** study.comparison[1].meaning
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Relativní
- **DE source:** die Verwandte
- **LV reference:** radiniece
- **Problem:** „Relativní“ je české přídavné jméno a znamená relative, nikoli ženskou příbuznou.
- **Recommended CS:** Příbuzná (žena)
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1077: b1-verwandte-2

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-verwandte-2
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Relativní
- **DE source:** Verwandte
- **LV reference:** radiniece
- **Problem:** Hlavní překlad je nesprávný: „relativní“ znamená relative, zatímco Verwandte je příbuzná.
- **Recommended CS:** Příbuzná
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 1078: b1-verwandte-2

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-verwandte-2
- **Field:** study.comparison[0].meaning
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Relativní
- **DE source:** die Verwandte
- **LV reference:** radiniece
- **Problem:** „Relativní“ neznamená ženskou příbuznou; jde o záměnu s anglickým false friendem „relative“.
- **Recommended CS:** Příbuzná (žena)
- **Rationale:** Luna linguistic audit (1 confidence)


### HIGH (1957)

### Finding 1: b1-abschnitt

- **Dataset:** b1
- **Batch:** 051-100
- **Card/Index:** b1-abschnitt
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** fāze
- **DE source:** Abschnitt
- **LV reference:** posms
- **Problem:** LV remnant "fāze" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 2: b1-altmodisch-105

- **Dataset:** b1
- **Batch:** 101-150
- **Card/Index:** b1-altmodisch-105
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Staromódní
- **DE source:** altmodisch
- **LV reference:** vecmodīgs
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 3: b1-altmodisch-105

- **Dataset:** b1
- **Batch:** 101-150
- **Card/Index:** b1-altmodisch-105
- **Field:** entry[105].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Staromódní
- **DE source:** altmodisch
- **LV reference:** vecmodīgs
- **Problem:** Foreign remnant (PL_CHAR) in entry[105].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 4: b1-sich-aufhalten

- **Dataset:** b1
- **Batch:** 151-200
- **Card/Index:** b1-sich-aufhalten
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** uzturēties
- **DE source:** sich aufhalten
- **LV reference:** uzturēties
- **Problem:** LV remnant "uzturēties" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 5: b1-sich-aufhalten

- **Dataset:** b1
- **Batch:** 151-200
- **Card/Index:** b1-sich-aufhalten
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** aizkavēt
- **DE source:** sich aufhalten
- **LV reference:** uzturēties
- **Problem:** LV remnant "aizkavēt" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 6: b1-aussprache

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-aussprache
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** domu apmaiņa
- **DE source:** Aussprache
- **LV reference:** izruna
- **Problem:** LV remnant "domu apmaiņa" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 7: b1-ausstellen

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-ausstellen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** izrakstīt
- **DE source:** ausstellen
- **LV reference:** izsniegt
- **Problem:** LV remnant "izrakstīt" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 8: b1-ausstellen

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-ausstellen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** izstādīt
- **DE source:** ausstellen
- **LV reference:** izsniegt
- **Problem:** LV remnant "izstādīt" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 9: b1-auszug

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-auszug
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** izvākšanās
- **DE source:** Auszug
- **LV reference:** izraksts
- **Problem:** LV remnant "izvākšanās" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 10: b1-bau

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-bau
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** būvniecība
- **DE source:** Bau
- **LV reference:** celtne
- **Problem:** LV remnant "būvniecība" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 11: b1-bau

- **Dataset:** b1
- **Batch:** 201-250
- **Card/Index:** b1-bau
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** būvlaukumā
- **DE source:** Bau
- **LV reference:** celtne
- **Problem:** LV remnant "būvlaukumā" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 12: b1-becken

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-becken
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** baseinā
- **DE source:** Becken
- **LV reference:** baseins
- **Problem:** LV remnant "baseinā" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 13: b1-becken

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-becken
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** bļoda
- **DE source:** Becken
- **LV reference:** baseins
- **Problem:** LV remnant "bļoda" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 14: b1-bedeutend

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-bedeutend
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** nozīmīgs
- **DE source:** bedeutend
- **LV reference:** nozīmīgs
- **Problem:** LV remnant "nozīmīgs" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 15: b1-bedeutend

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-bedeutend
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** ievērojams
- **DE source:** bedeutend
- **LV reference:** nozīmīgs
- **Problem:** LV remnant "ievērojams" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 16: b1-bedeutend

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-bedeutend
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** ievērojami
- **DE source:** bedeutend
- **LV reference:** nozīmīgs
- **Problem:** LV remnant "ievērojami" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 17: b1-sich-bedienen

- **Dataset:** b1
- **Batch:** 251-300
- **Card/Index:** b1-sich-bedienen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** ņemiet paši
- **DE source:** sich bedienen
- **LV reference:** apkalpoties
- **Problem:** LV remnant "ņemiet paši" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 18: b1-behandeln

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-behandeln
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** tēma
- **DE source:** behandeln
- **LV reference:** ārstēt
- **Problem:** LV remnant "tēma" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 19: b1-behandeln

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-behandeln
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** ārstēt
- **DE source:** behandeln
- **LV reference:** ārstēt
- **Problem:** LV remnant "ārstēt" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 20: b1-behandeln

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-behandeln
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** izturēties
- **DE source:** behandeln
- **LV reference:** ārstēt
- **Problem:** LV remnant "izturēties" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 21: b1-bemerken

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-bemerken
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** kļūdu
- **DE source:** bemerken
- **LV reference:** pamanīt
- **Problem:** LV remnant "kļūdu" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 22: b1-bemerken

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-bemerken
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** izmaiņu
- **DE source:** bemerken
- **LV reference:** pamanīt
- **Problem:** LV remnant "izmaiņu" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 23: b1-beraten

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-beraten
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** cilvēki
- **DE source:** beraten
- **LV reference:** konsultēt
- **Problem:** LV remnant "cilvēki" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 24: b1-bereich

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-bereich
- **Field:** entry[353].study.explanation
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Hlavní myšlenka: der Bereich znamená oblast nebo zónu. V práci, studiích a tématech je to obvykle obor • Ve fyzickém místě - ploše nebo vymezené části.
- **DE source:** Bereich
- **LV reference:** joma
- **Problem:** Foreign remnant (PL_CHAR) in entry[353].study.explanation
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 25: b1-bereich

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-bereich
- **Field:** entry[353].study.comparison[0].meaning
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Oblast / zóna
- **DE source:** Bereich
- **LV reference:** joma
- **Problem:** Foreign remnant (PL_CHAR) in entry[353].study.comparison[0].meaning
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 26: b1-berichten

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-berichten
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** rezultātiem
- **DE source:** berichten
- **LV reference:** ziņot
- **Problem:** LV remnant "rezultātiem" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 27: b1-sich-beruhigen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-sich-beruhigen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** nomierinās
- **DE source:** sich beruhigen
- **LV reference:** nomierināties
- **Problem:** LV remnant "nomierinās" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 28: b1-berühmtheit

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-berühmtheit
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** slavenības
- **DE source:** Berühmtheit
- **LV reference:** slava
- **Problem:** LV remnant "slavenības" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 29: b1-beschließen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-beschließen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** lēmums
- **DE source:** beschließen
- **LV reference:** nolemt
- **Problem:** LV remnant "lēmums" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 30: b1-beschließen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-beschließen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** aizvērt
- **DE source:** beschließen
- **LV reference:** nolemt
- **Problem:** LV remnant "aizvērt" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 31: b1-beschwerde

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-beschwerde
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** sūdzība
- **DE source:** Beschwerde
- **LV reference:** sūdzība
- **Problem:** LV remnant "sūdzība" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 32: b1-besorgen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-besorgen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** dabūt
- **DE source:** besorgen
- **LV reference:** sagādāt
- **Problem:** LV remnant "dabūt" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 33: b1-besorgen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-besorgen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** noorganizēt
- **DE source:** besorgen
- **LV reference:** sagādāt
- **Problem:** LV remnant "noorganizēt" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 34: b1-bestehen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-bestehen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** nokārtot
- **DE source:** bestehen
- **LV reference:** pastāvēt
- **Problem:** LV remnant "nokārtot" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 35: b1-bestehen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-bestehen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** sastāvēt
- **DE source:** bestehen
- **LV reference:** pastāvēt
- **Problem:** LV remnant "sastāvēt" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 36: b1-bestehen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-bestehen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** uzstāt
- **DE source:** bestehen
- **LV reference:** pastāvēt
- **Problem:** LV remnant "uzstāt" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 37: b1-bestimmen

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-bestimmen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** termiņu
- **DE source:** bestimmen
- **LV reference:** noteikt
- **Problem:** LV remnant "termiņu" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 38: b1-betrieb

- **Dataset:** b1
- **Batch:** 401-450
- **Card/Index:** b1-betrieb
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** uzņēmums
- **DE source:** Betrieb
- **LV reference:** uzņēmums
- **Problem:** LV remnant "uzņēmums" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 39: b1-beziehen

- **Dataset:** b1
- **Batch:** 401-450
- **Card/Index:** b1-beziehen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** saņemt
- **DE source:** beziehen
- **LV reference:** saņemt
- **Problem:** LV remnant "saņemt" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 40: b1-beziehen

- **Dataset:** b1
- **Batch:** 401-450
- **Card/Index:** b1-beziehen
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** ievākties
- **DE source:** beziehen
- **LV reference:** saņemt
- **Problem:** LV remnant "ievākties" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 41: b1-bieten

- **Dataset:** b1
- **Batch:** 401-450
- **Card/Index:** b1-bieten
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** piedāvā
- **DE source:** bieten
- **LV reference:** piedāvāt
- **Problem:** LV remnant "piedāvā" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 42: b1-blase

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-blase
- **Field:** entry[455].study.comparison[2].meaning
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Balón
- **DE source:** Blase
- **LV reference:** pūslis
- **Problem:** Foreign remnant (PL_CHAR) in entry[455].study.comparison[2].meaning
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 43: b1-blase

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-blase
- **Field:** entry[455].study.comparison[2].example
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Der Ballon ist rot. = Balónek je červený.
- **DE source:** Blase
- **LV reference:** pūslis
- **Problem:** Foreign remnant (PL_CHAR) in entry[455].study.comparison[2].example
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 44: b1-blase

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-blase
- **Field:** entry[455].study.sectionAccents.comparison[2].meaning.purple[0]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Balón
- **DE source:** Blase
- **LV reference:** pūslis
- **Problem:** Foreign remnant (PL_CHAR) in entry[455].study.sectionAccents.comparison[2].meaning.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 45: b1-blase

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-blase
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** pūslis
- **DE source:** Blase
- **LV reference:** pūslis
- **Problem:** LV remnant "pūslis" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 46: b1-blase

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-blase
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** burbuļi
- **DE source:** Blase
- **LV reference:** pūslis
- **Problem:** LV remnant "burbuļi" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 47: b1-block

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-block
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** blociņš
- **DE source:** Block
- **LV reference:** bloks
- **Problem:** LV remnant "blociņš" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 48: b1-Boutique-483

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-Boutique-483
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Módní obchod
- **DE source:** Boutique
- **LV reference:** modes preču veikals
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 49: b1-Boutique-483

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-Boutique-483
- **Field:** entry[483].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Módní obchod
- **DE source:** Boutique
- **LV reference:** modes preču veikals
- **Problem:** Foreign remnant (PL_CHAR) in entry[483].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 50: b1-brand

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-brand
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** ugunsgrēks
- **DE source:** Brand
- **LV reference:** ugunsgrēks
- **Problem:** LV remnant "ugunsgrēks" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text


_... un vēl 1907 HIGH atradumi (skat. reports/temp/cs-b1-audit/)._


### MEDIUM (1325)

### Finding 1: b1-ablegen

- **Dataset:** b1
- **Batch:** 051-100
- **Card/Index:** b1-ablegen
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** ablegen
- **DE source:** ablegen
- **LV reference:** nolikt
- **Problem:** Accent term "ablegen" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 2: b1-behandeln

- **Dataset:** b1
- **Batch:** 301-350
- **Card/Index:** b1-behandeln
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** tēma
- **DE source:** behandeln
- **LV reference:** ārstēt
- **Problem:** Accent term "tēma" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 3: b1-bereich

- **Dataset:** b1
- **Batch:** 351-400
- **Card/Index:** b1-bereich
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** zonu
- **DE source:** Bereich
- **LV reference:** joma
- **Problem:** Accent term "zonu" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 4: b1-bieten

- **Dataset:** b1
- **Batch:** 401-450
- **Card/Index:** b1-bieten
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** bieten
- **DE source:** bieten
- **LV reference:** piedāvāt
- **Problem:** Accent term "bieten" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 5: b1-blase

- **Dataset:** b1
- **Batch:** 451-500
- **Card/Index:** b1-blase
- **Field:** study.sectionAccents
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** Balón
- **DE source:** Blase
- **LV reference:** pūslis
- **Problem:** Polish character in sectionAccents term "Balón"
- **Recommended CS:** (Czech equivalent)
- **Rationale:** Polish contamination from SK pipeline

### Finding 6: b1-dienen

- **Dataset:** b1
- **Batch:** 551-600
- **Card/Index:** b1-dienen
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** dienen
- **DE source:** dienen
- **LV reference:** kalpot
- **Problem:** Accent term "dienen" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 7: b1-kommando

- **Dataset:** b1
- **Batch:** 1551-1600
- **Card/Index:** b1-kommando
- **Field:** study.sectionAccents.tip
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** Pavēle
- **DE source:** Kommando
- **LV reference:** pavēle
- **Problem:** Accent term "Pavēle" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 8: b1-kommando

- **Dataset:** b1
- **Batch:** 1551-1600
- **Card/Index:** b1-kommando
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** Sporta komanda
- **DE source:** Kommando
- **LV reference:** pavēle
- **Problem:** Accent term "Sporta komanda" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 9: b1-kreuzen

- **Dataset:** b1
- **Batch:** 1601-1650
- **Card/Index:** b1-kreuzen
- **Field:** study.sectionAccents.tip
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** krustu
- **DE source:** kreuzen
- **LV reference:** šķērsot
- **Problem:** Accent term "krustu" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 10: b1-kreuzen

- **Dataset:** b1
- **Batch:** 1601-1650
- **Card/Index:** b1-kreuzen
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** testā
- **DE source:** kreuzen
- **LV reference:** šķērsot
- **Problem:** Accent term "testā" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 11: b1-kunde

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kunde
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** Savukārt
- **DE source:** Kunde
- **LV reference:** vēsts
- **Problem:** Accent term "Savukārt" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 12: b1-kündigen

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kündigen
- **Field:** study.sectionAccents.tip
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** oficiāli
- **DE source:** kündigen
- **LV reference:** uzteikt darbu
- **Problem:** Accent term "oficiāli" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 13: b1-kündigen

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kündigen
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** konstrukcija
- **DE source:** kündigen
- **LV reference:** uzteikt darbu
- **Problem:** Accent term "konstrukcija" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 14: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** savienot
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Accent term "savienot" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 15: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** study.sectionAccents.tip
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** savienošana
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Accent term "savienošana" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 16: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** study.sectionAccents.tip
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** mehāniska
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Accent term "mehāniska" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 17: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** verbinden
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Accent term "verbinden" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 18: b1-kuppeln

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kuppeln
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** vispārīgs
- **DE source:** kuppeln
- **LV reference:** savienot
- **Problem:** Accent term "vispārīgs" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 19: b1-kurs

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kurs
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** der Kurs
- **DE source:** Kurs
- **LV reference:** kurss
- **Problem:** Accent term "der Kurs" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 20: b1-kurs

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kurs
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** kurss
- **DE source:** Kurs
- **LV reference:** kurss
- **Problem:** Accent term "kurss" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 21: b1-kurs

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kurs
- **Field:** study.sectionAccents.tip
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** der Kurs
- **DE source:** Kurs
- **LV reference:** kurss
- **Problem:** Accent term "der Kurs" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 22: b1-kurs

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kurs
- **Field:** study.sectionAccents.tip
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** Mācības
- **DE source:** Kurs
- **LV reference:** kurss
- **Problem:** Accent term "Mācības" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 23: b1-kurs

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kurs
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** konteksts
- **DE source:** Kurs
- **LV reference:** kurss
- **Problem:** Accent term "konteksts" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 24: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** atsevišķa konstrukcija
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Accent term "atsevišķa konstrukcija" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 25: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** in Kürze
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Accent term "in Kürze" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 26: b1-kürze

- **Dataset:** b1
- **Batch:** 1651-1700
- **Card/Index:** b1-kürze
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** drīzumā
- **DE source:** Kürze
- **LV reference:** īsums
- **Problem:** Accent term "drīzumā" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 27: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** cilvēkiem
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Accent term "cilvēkiem" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 28: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** study.sectionAccents.tip
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** laden
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Accent term "laden" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 29: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** laden
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Accent term "laden" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 30: b1-laden

- **Dataset:** b1
- **Batch:** 1701-1750
- **Card/Index:** b1-laden
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** Ielūgt
- **DE source:** laden
- **LV reference:** iekraut
- **Problem:** Accent term "Ielūgt" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent


_... un vēl 1295 MEDIUM atradumi (skat. reports/temp/cs-b1-audit/)._


### LOW (84)

### Finding 1: b1-Elend-738

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Elend-738
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Bída • Bída
- **DE source:** Elend
- **LV reference:** posts • nožēlojams stāvoklis
- **Problem:** Oba české významy jsou duplicitní a druhý nevystihuje význam žalostného či ubohého stavu.
- **Recommended CS:** Bída • Ubohý stav
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 2: b1-gedruckt-1008

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-gedruckt-1008
- **Field:** csText
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Vytištěné
- **DE source:** gedruckt
- **LV reference:** iespiests
- **Problem:** Současný překlad je neutrální tvar jednotného čísla; jako slovníkový tvar je vhodnější mužský tvar „vytištěný“.
- **Recommended CS:** Vytištěný
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 3: b1-kitzeln-1509

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-kitzeln-1509
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Lechtat
- **DE source:** kitzeln
- **LV reference:** kutināt
- **Problem:** Czech infinitives are lowercase; the translation itself is correct.
- **Recommended CS:** lechtat
- **Rationale:** Luna linguistic audit (HIGH confidence)

### Finding 4: b1-Lehrmittel-1750

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Lehrmittel-1750
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Výukový nástroj
- **DE source:** Lehrmittel
- **LV reference:** mācību līdzeklis
- **Problem:** Běžný český ekvivalent pro Lehrmittel je učební pomůcka; „výukový nástroj“ působí nepřirozeně.
- **Recommended CS:** Učební pomůcka
- **Rationale:** Luna linguistic audit (0.92 confidence)

### Finding 5: b1-notwendig-1998

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-notwendig-1998
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Nutné
- **DE source:** notwendig
- **LV reference:** nepieciešams
- **Problem:** U samostatného překladu přídavného jména je přirozenější základní mužský rod než neutrální tvar.
- **Recommended CS:** Nutný
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 6: b1-obligatorisch-2011

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-obligatorisch-2011
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Povinné
- **DE source:** obligatorisch
- **LV reference:** obligāts
- **Problem:** U samostatného překladu přídavného jména je přirozenější základní mužský rod než neutrální tvar.
- **Recommended CS:** Povinný
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 7: b1-Ozon-2048

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Ozon-2048
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Ozón
- **DE source:** Ozon
- **LV reference:** ozons
- **Problem:** V češtině se standardně píše „ozon“ bez čárky nad o.
- **Recommended CS:** Ozon
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 8: b1-Polarlicht-2136

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Polarlicht-2136
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Severní polární záře
- **DE source:** Polarlicht
- **LV reference:** ziemeļblāzma
- **Problem:** „Severní polární záře“ je srozumitelné, ale v češtině je běžný a přesný název „polární záře“.
- **Recommended CS:** Polární záře
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 9: b1-sinnlos-2631

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-sinnlos-2631
- **Field:** csText
- **Severity:** LOW
- **Status:** SEMANTICS
- **Current CS text:** K ničemu
- **DE source:** sinnlos
- **LV reference:** bezjēdzīgs
- **Problem:** „K ničemu“ znamená neužitečný; „sinnlos“ znamená nesmyslný, bez smyslu nebo bezúčelný.
- **Recommended CS:** Nesmyslný
- **Rationale:** Luna linguistic audit (0.91 confidence)

### Finding 10: b1-sogenannt-2644

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-sogenannt-2644
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Tzv
- **DE source:** sogenannt
- **LV reference:** tā saucamais
- **Problem:** Česká zkratka „tzv.“ vyžaduje tečku.
- **Recommended CS:** Tzv.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 11: b1-Stürmer-2816

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Stürmer-2816
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Sp. útočník
- **DE source:** Stürmer
- **LV reference:** sp. uzbrucējs
- **Problem:** Zkratka „Sp.“ je nejasná; německé slovo se v tomto kontextu běžně překládá jako „fotbalový útočník“.
- **Recommended CS:** Fotbalový útočník
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 12: b1-Truthenne-2937

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Truthenne-2937
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Krůtí samice
- **DE source:** Truthenne
- **LV reference:** tītaru mātīte
- **Problem:** Výraz „krůtí samice“ je sice srozumitelný, ale běžný český ekvivalent je jednoslovné „krůta“.
- **Recommended CS:** Krůta
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 13: b1-unvernünftig-3030

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-unvernünftig-3030
- **Field:** csText
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Nerozumné
- **DE source:** unvernünftig
- **LV reference:** nesaprātīgs
- **Problem:** Samostatné přídavné jméno je uvedeno v neutru; slovníkový tvar má být v mužském rodě.
- **Recommended CS:** Nerozumný
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 14: b1-Wendung-3243

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-Wendung-3243
- **Field:** csText
- **Severity:** LOW
- **Status:** SEMANTICS
- **Current CS text:** Odbočka
- **DE source:** Wendung
- **LV reference:** pagrieziens
- **Problem:** Wendung znamená obrat nebo otočení; „odbočka“ je konkrétně odbočení z cesty.
- **Recommended CS:** Obrat
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 15: b1-wild-3263

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-wild-3263
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Divoký • Divoký
- **DE source:** wild
- **LV reference:** mežonīgs • savvaļas
- **Problem:** Oba české ekvivalenty jsou identické, takže druhý význam je uveden duplicitně.
- **Recommended CS:** Divoký
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 16: b1-abschluss

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-abschluss
- **Field:** study.comparison[0].meaning
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Závěr / závěr edukace
- **DE source:** der Abschluss
- **LV reference:** noslēgums / izglītības noslēgums
- **Problem:** Spojení „závěr edukace“ není v češtině přirozené ani běžné.
- **Recommended CS:** Závěr / ukončení studia
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 17: b1-abschnitt

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-abschnitt
- **Field:** study.explanation
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Hlavní myšlenka: der Abschnitt znamená část nebo část textu. Používá se pro text, cestu, práci nebo čas.
- **DE source:** Abschnitt
- **LV reference:** Galvenā doma: der Abschnitt nozīmē posmu vai teksta daļu. To lieto par tekstu, ceļu, darbu vai laiku.
- **Problem:** Překlad opakuje „část“ a nepřirozeně zužuje význam.
- **Recommended CS:** Hlavní myšlenka: der Abschnitt znamená úsek nebo část, zejména část textu. Používá se pro text, cestu, práci nebo čas.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 18: b1-abschnitt

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-abschnitt
- **Field:** study.comparison[0].meaning
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Etapa / část
- **DE source:** der Abschnitt
- **LV reference:** posms / daļa
- **Problem:** „Etapa“ se pro text nebo úsek cesty používá méně přesně než „úsek“.
- **Recommended CS:** Úsek / část
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 19: b1-anschluss

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-anschluss
- **Field:** study.explanation
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Hlavní myšlenka: der Anschluss znamená spojení nebo spojení. V dopravě to znamená další spojení, například přestup vlakem.
- **DE source:** Anschluss
- **LV reference:** Galvenā doma: der Anschluss nozīmē savienojumu vai pieslēgumu. Transportā tas nozīmē nākamo savienojumu, piemēram vilciena pārsēšanos.
- **Problem:** Věta zbytečně opakuje „spojení“ a spojení „přestup vlakem“ není přirozené.
- **Recommended CS:** Hlavní myšlenka: der Anschluss znamená připojení nebo navazující spojení. V dopravě označuje například přestup na navazující vlak.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 20: b1-antrag

- **Dataset:** b1
- **Batch:** linguistic
- **Card/Index:** b1-antrag
- **Field:** study.translation
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Podání
- **DE source:** Antrag
- **LV reference:** iesniegums
- **Problem:** „Podání“ je možné, ale jako základní praktický překlad je pro běžný Antrag méně srozumitelné než „žádost“.
- **Recommended CS:** Žádost
- **Rationale:** Luna linguistic audit (0.92 confidence)


_... un vēl 64 LOW atradumi._


## SOURCE_DE_ISSUES

_Nav SOURCE_DE_ISSUE atradumu._


## NEEDS_OWNER_REVIEW

_Nav NEEDS_OWNER_REVIEW atradumu._


## FALSE POSITIVES

_Nav dokumentētu FALSE_POSITIVE._

## GALA STATUSS

- 100% datasets auditēts: **JĀ**
- Neauditēti objekti: 0
- Audits pilnīgs: **JĀ**
- Production dati mainīti: **NĒ (0 izmaiņu)**
- DE READ-ONLY: **PASS**

---

_Audita datums: 2026-08-10_
_Režīms: READ-ONLY — nekādas production izmaiņas_
_Pagaidu artefakti: reports/temp/cs-b1-audit/_

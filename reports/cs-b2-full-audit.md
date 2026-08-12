# CS–DE B2 FULL AUDIT

## KOPSAVILKUMS

- Dataset: B2
- Audit mode: READ-ONLY
- Total objects: 2118
- Audited objects: 2118
- Coverage: 100%
- Batch size: 50
- Batch count: 43
- CRITICAL: 99
- HIGH: 652
- MEDIUM: 535
- LOW: 55
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

**Deterministisko atradumu skaits:** 80

## LINGVISTISKĀ VALIDĀCIJA

| Metrika | Vērtība |
|---|---|
| Luna modelis | gpt-5.6-luna |
| Lingvistiski auditēti | 2118/2118 |
| Lingvistisko atradumu skaits | 1251 |
| API pieprasījumi | 0 |
| Tokeni | 0 |

## STUDY / COMPARISON STUDY VALIDĀCIJA

- standardStudy: 60
- comparisonStudy: 0
- Study struktūras problēmas: 0

## SECTIONACCENTS VALIDĀCIJA

- sectionAccents atradumi: 0
- Statuss: FAIL

## FINDINGS

### CRITICAL (99)

### Finding 1: b2-sich-abfinden

- **Dataset:** b2
- **Batch:** 001-050
- **Card/Index:** b2-sich-abfinden
- **Field:** entry[43].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich abfinden
- **LV reference:** samierināties ar
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[43].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 2: b2-sich-abwenden

- **Dataset:** b2
- **Batch:** 051-100
- **Card/Index:** b2-sich-abwenden
- **Field:** entry[77].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich abwenden
- **LV reference:** novērsties no
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[77].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 3: b2-sich-befassen

- **Dataset:** b2
- **Batch:** 101-150
- **Card/Index:** b2-sich-befassen
- **Field:** entry[149].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich befassen
- **LV reference:** nodarboties ar
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[149].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 4: b2-sich-begnuegen

- **Dataset:** b2
- **Batch:** 151-200
- **Card/Index:** b2-sich-begnuegen
- **Field:** entry[155].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich begnügen
- **LV reference:** apmierināties ar
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[155].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 5: b2-sich-bemaechtigen

- **Dataset:** b2
- **Batch:** 151-200
- **Card/Index:** b2-sich-bemaechtigen
- **Field:** entry[185].study.rektion
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** + piederības forma
- **DE source:** sich bemächtigen
- **LV reference:** sagrābt • saņemt savā varā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[185].study.rektion
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 6: b2-sich-bemaechtigen

- **Dataset:** b2
- **Batch:** 151-200
- **Card/Index:** b2-sich-bemaechtigen
- **Field:** entry[185].study.forms
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** + piederības forma
- **DE source:** sich bemächtigen
- **LV reference:** sagrābt • saņemt savā varā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[185].study.forms
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 7: b2-sich-bemaechtigen

- **Dataset:** b2
- **Batch:** 151-200
- **Card/Index:** b2-sich-bemaechtigen
- **Field:** entry[185].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich bemächtigen
- **LV reference:** sagrābt • saņemt savā varā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[185].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 8: b2-sich-berufen

- **Dataset:** b2
- **Batch:** 151-200
- **Card/Index:** b2-sich-berufen
- **Field:** entry[197].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich berufen
- **LV reference:** atsaukties uz
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[197].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 9: b2-sich-beschraenken

- **Dataset:** b2
- **Batch:** 201-250
- **Card/Index:** b2-sich-beschraenken
- **Field:** entry[204].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich beschränken
- **LV reference:** ierobežoties ar
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[204].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 10: b2-sich-betaetigen

- **Dataset:** b2
- **Batch:** 201-250
- **Card/Index:** b2-sich-betaetigen
- **Field:** entry[219].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich betätigen
- **LV reference:** darboties • piedalīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[219].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 11: b2-sich-einlassen

- **Dataset:** b2
- **Batch:** 551-600
- **Card/Index:** b2-sich-einlassen
- **Field:** entry[565].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich einlassen
- **LV reference:** ielaisties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[565].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 12: b2-sich-einpraegen

- **Dataset:** b2
- **Batch:** 551-600
- **Card/Index:** b2-sich-einpraegen
- **Field:** entry[571].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich einprägen
- **LV reference:** iegaumēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[571].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 13: b2-sich-einschleichen

- **Dataset:** b2
- **Batch:** 551-600
- **Card/Index:** b2-sich-einschleichen
- **Field:** entry[574].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich einschleichen
- **LV reference:** ielavīties • iezagties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[574].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 14: b2-sich-einschraenken

- **Dataset:** b2
- **Batch:** 551-600
- **Card/Index:** b2-sich-einschraenken
- **Field:** entry[576].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich einschränken
- **LV reference:** ierobežoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[576].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 15: b2-sich-empfehlen

- **Dataset:** b2
- **Batch:** 601-650
- **Card/Index:** b2-sich-empfehlen
- **Field:** entry[610].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich empfehlen
- **LV reference:** būt ieteicamam
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[610].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 16: b2-sich-empoeren

- **Dataset:** b2
- **Batch:** 601-650
- **Card/Index:** b2-sich-empoeren
- **Field:** entry[613].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich empören
- **LV reference:** sašust • sacelties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[613].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 17: b2-sich-enthalten

- **Dataset:** b2
- **Batch:** 601-650
- **Card/Index:** b2-sich-enthalten
- **Field:** entry[629].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich enthalten
- **LV reference:** atturēties no
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[629].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 18: b2-sich-entledigen

- **Dataset:** b2
- **Batch:** 601-650
- **Card/Index:** b2-sich-entledigen
- **Field:** entry[635].study.rektion
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** + piederības forma
- **DE source:** sich entledigen
- **LV reference:** atbrīvoties • tikt vaļā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[635].study.rektion
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 19: b2-sich-entledigen

- **Dataset:** b2
- **Batch:** 601-650
- **Card/Index:** b2-sich-entledigen
- **Field:** entry[635].study.forms
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** + piederības forma
- **DE source:** sich entledigen
- **LV reference:** atbrīvoties • tikt vaļā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[635].study.forms
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 20: b2-sich-entledigen

- **Dataset:** b2
- **Batch:** 601-650
- **Card/Index:** b2-sich-entledigen
- **Field:** entry[635].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich entledigen
- **LV reference:** atbrīvoties • tikt vaļā
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[635].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 21: b2-sich-entruesten

- **Dataset:** b2
- **Batch:** 601-650
- **Card/Index:** b2-sich-entruesten
- **Field:** entry[639].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich entrüsten
- **LV reference:** sašust • sadumpoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[639].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 22: b2-sich-entsinnen

- **Dataset:** b2
- **Batch:** 601-650
- **Card/Index:** b2-sich-entsinnen
- **Field:** entry[642].study.rektion
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** + piederības forma
- **DE source:** sich entsinnen
- **LV reference:** atminēties • atcerēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[642].study.rektion
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 23: b2-sich-entsinnen

- **Dataset:** b2
- **Batch:** 601-650
- **Card/Index:** b2-sich-entsinnen
- **Field:** entry[642].study.forms
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** + piederības forma
- **DE source:** sich entsinnen
- **LV reference:** atminēties • atcerēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[642].study.forms
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 24: b2-sich-entsinnen

- **Dataset:** b2
- **Batch:** 601-650
- **Card/Index:** b2-sich-entsinnen
- **Field:** entry[642].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich entsinnen
- **LV reference:** atminēties • atcerēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[642].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 25: b2-sich-erbarmen

- **Dataset:** b2
- **Batch:** 651-700
- **Card/Index:** b2-sich-erbarmen
- **Field:** entry[661].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich erbarmen
- **LV reference:** apžēloties • iežēloties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[661].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 26: b2-sich-ergeben

- **Dataset:** b2
- **Batch:** 651-700
- **Card/Index:** b2-sich-ergeben
- **Field:** entry[673].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich ergeben
- **LV reference:** izrietēt • padoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[673].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 27: b2-sich-erniedrigen

- **Dataset:** b2
- **Batch:** 651-700
- **Card/Index:** b2-sich-erniedrigen
- **Field:** entry[693].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich erniedrigen
- **LV reference:** pazemoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[693].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 28: b2-sich-erregen

- **Dataset:** b2
- **Batch:** 651-700
- **Card/Index:** b2-sich-erregen
- **Field:** entry[699].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich erregen
- **LV reference:** uztraukties par
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[699].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 29: b2-sich-erweisen

- **Dataset:** b2
- **Batch:** 701-750
- **Card/Index:** b2-sich-erweisen
- **Field:** entry[722].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich erweisen
- **LV reference:** izrādīties par
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[722].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 30: b2-sich-fassen

- **Dataset:** b2
- **Batch:** 751-800
- **Card/Index:** b2-sich-fassen
- **Field:** entry[768].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich fassen
- **LV reference:** sagrābt • saņemties • savaldīties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[768].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 31: b2-sich-fuegen

- **Dataset:** b2
- **Batch:** 801-850
- **Card/Index:** b2-sich-fuegen
- **Field:** entry[844].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich fügen
- **LV reference:** pielāgoties • pakļauties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[844].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 32: b2-Gefüge-890

- **Dataset:** b2
- **Batch:** 851-900
- **Card/Index:** b2-Gefüge-890
- **Field:** lv
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Struktūra • Uzbūve • Savienojums • Salaidums
- **DE source:** Gefüge
- **LV reference:** struktūra • uzbūve • savienojums • salaidums
- **Problem:** Foreign language remnant in main translation: LV_DIACRITIC
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 33: b2-Gefüge-890

- **Dataset:** b2
- **Batch:** 851-900
- **Card/Index:** b2-Gefüge-890
- **Field:** entry[890].lv
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Struktūra • Uzbūve • Savienojums • Salaidums
- **DE source:** Gefüge
- **LV reference:** struktūra • uzbūve • savienojums • salaidums
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[890].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 34: b2-geläufig-902

- **Dataset:** b2
- **Batch:** 901-950
- **Card/Index:** b2-geläufig-902
- **Field:** lv
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Zināms • Pazīstams • Ierasts • Tekošs • Brīvs
- **DE source:** geläufig
- **LV reference:** zināms • pazīstams • ierasts • tekošs • brīvs
- **Problem:** Foreign language remnant in main translation: LV_DIACRITIC
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 35: b2-geläufig-902

- **Dataset:** b2
- **Batch:** 901-950
- **Card/Index:** b2-geläufig-902
- **Field:** entry[902].lv
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Zināms • Pazīstams • Ierasts • Tekošs • Brīvs
- **DE source:** geläufig
- **LV reference:** zināms • pazīstams • ierasts • tekošs • brīvs
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[902].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 36: b2-sich-genieren

- **Dataset:** b2
- **Batch:** 901-950
- **Card/Index:** b2-sich-genieren
- **Field:** entry[928].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich genieren
- **LV reference:** kaunēties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[928].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 37: b2-sich-gesellen

- **Dataset:** b2
- **Batch:** 951-1000
- **Card/Index:** b2-sich-gesellen
- **Field:** entry[956].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich gesellen
- **LV reference:** pievienoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[956].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 38: b2-sich-gestalten

- **Dataset:** b2
- **Batch:** 951-1000
- **Card/Index:** b2-sich-gestalten
- **Field:** entry[961].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich gestalten
- **LV reference:** veidoties par
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[961].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 39: b2-sich-grauen

- **Dataset:** b2
- **Batch:** 1001-1050
- **Card/Index:** b2-sich-grauen
- **Field:** entry[1023].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich grauen
- **LV reference:** biedēties no
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1023].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 40: b2-sich-herausbilden

- **Dataset:** b2
- **Batch:** 1051-1100
- **Card/Index:** b2-sich-herausbilden
- **Field:** entry[1098].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich herausbilden
- **LV reference:** izveidoties par
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1098].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 41: b2-sich-heraushalten

- **Dataset:** b2
- **Batch:** 1101-1150
- **Card/Index:** b2-sich-heraushalten
- **Field:** entry[1100].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich heraushalten
- **LV reference:** turēties nost no
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1100].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 42: b2-sich-herausstellen

- **Dataset:** b2
- **Batch:** 1101-1150
- **Card/Index:** b2-sich-herausstellen
- **Field:** entry[1102].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich herausstellen
- **LV reference:** izrādīties par
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1102].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 43: b2-sich-hervortun

- **Dataset:** b2
- **Batch:** 1101-1150
- **Card/Index:** b2-sich-hervortun
- **Field:** entry[1107].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich hervortun
- **LV reference:** izcelties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1107].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 44: b2-sich-hingeben

- **Dataset:** b2
- **Batch:** 1101-1150
- **Card/Index:** b2-sich-hingeben
- **Field:** entry[1119].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich hingeben
- **LV reference:** atdoties • nodoties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1119].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 45: b2-sich-paaren

- **Dataset:** b2
- **Batch:** 1401-1450
- **Card/Index:** b2-sich-paaren
- **Field:** entry[1421].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich paaren
- **LV reference:** pāroties ar
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1421].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 46: b2-sich-revanchieren

- **Dataset:** b2
- **Batch:** 1501-1550
- **Card/Index:** b2-sich-revanchieren
- **Field:** entry[1523].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich revanchieren
- **LV reference:** atmaksāt • atriebties
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1523].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 47: b2-sich-scheren

- **Dataset:** b2
- **Batch:** 1551-1600
- **Card/Index:** b2-sich-scheren
- **Field:** entry[1575].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich scheren
- **LV reference:** rūpēties par
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1575].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 48: b2-sich-vereinigen

- **Dataset:** b2
- **Batch:** 1851-1900
- **Card/Index:** b2-sich-vereinigen
- **Field:** entry[1881].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich vereinigen
- **LV reference:** apvienoties ar
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1881].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 49: b2-sich-versehen

- **Dataset:** b2
- **Batch:** 1901-1950
- **Card/Index:** b2-sich-versehen
- **Field:** entry[1935].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich versehen
- **LV reference:** aizmirst • aprīkot ar
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1935].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 50: b2-sich-versoehnen

- **Dataset:** b2
- **Batch:** 1901-1950
- **Card/Index:** b2-sich-versoehnen
- **Field:** entry[1941].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich versöhnen
- **LV reference:** samierināties ar
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1941].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 51: b2-sich-verstellen

- **Dataset:** b2
- **Batch:** 1901-1950
- **Card/Index:** b2-sich-verstellen
- **Field:** entry[1947].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich verstellen
- **LV reference:** uzdoties par
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1947].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 52: b2-sich-verwundern

- **Dataset:** b2
- **Batch:** 1951-2000
- **Card/Index:** b2-sich-verwundern
- **Field:** entry[1964].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich verwundern
- **LV reference:** brīnīties par
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[1964].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 53: b2-sich-widersetzen

- **Dataset:** b2
- **Batch:** 2051-2100
- **Card/Index:** b2-sich-widersetzen
- **Field:** entry[2070].study.formsLabel
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vadība:
- **DE source:** sich widersetzen
- **LV reference:** pretoties • stāties pretī
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[2070].study.formsLabel
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 54: b2-auszeichnen-120

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-auszeichnen-120
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Ocenění • Ocenění • Vyniknout
- **DE source:** auszeichnen
- **LV reference:** apbalvot • piešķirt • izcelties
- **Problem:** První dva české výrazy jsou podstatná jména, nikoli slovesa; překlad navíc opakuje stejný výraz.
- **Recommended CS:** Ocenit • vyznamenat • vynikat
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 55: b2-Barren-136

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Barren-136
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Přítoky
- **DE source:** Barren
- **LV reference:** līdztekas
- **Problem:** „Přítoky“ jsou vodní toky; Barren v tomto významu označuje gymnastická bradla.
- **Recommended CS:** Bradla
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 56: b2-Barrenturnen-137

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Barrenturnen-137
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Cvičení na přítocích
- **DE source:** Barrenturnen
- **LV reference:** vingrošana uz līdztekām
- **Problem:** Překlad zaměňuje gymnastická bradla za vodní přítoky.
- **Recommended CS:** Cvičení na bradlech
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 57: b2-bebauen-146

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-bebauen-146
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Proces • Stavět
- **DE source:** bebauen
- **LV reference:** apstrādāt • apbūvēt
- **Problem:** „Proces“ není český překlad slovesa; bebauen znamená obdělávat půdu nebo zastavět pozemek.
- **Recommended CS:** Obdělávat • zastavět
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 58: b2-Dattel-359

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Dattel-359
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Datum
- **DE source:** Dattel
- **LV reference:** datele
- **Problem:** Dattel je datle jako ovoce; Datum znamená datum.
- **Recommended CS:** Datle
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 59: b2-Daune-360

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Daune-360
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Dolů
- **DE source:** Daune
- **LV reference:** dūna
- **Problem:** Daune znamená prachové peří; dolů je příslovce směru.
- **Recommended CS:** Prachové peří
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 60: b2-dementieren-374

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-dementieren-374
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Stáhnout informace
- **DE source:** dementieren
- **LV reference:** atsaukt informāciju
- **Problem:** Dementieren znamená popřít nebo vyvrátit tvrzení, nikoli stáhnout informace.
- **Recommended CS:** Popřít
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 61: b2-derjenige-381

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-derjenige-381
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Že
- **DE source:** derjenige
- **LV reference:** tas
- **Problem:** Derjenige je ukazovací zájmeno ten, nikoli spojka že.
- **Recommended CS:** Ten
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 62: b2-Dia-389

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Dia-389
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Skluzavka
- **DE source:** Dia
- **LV reference:** diapozitīvs
- **Problem:** Dia je zkráceně diapozitiv, nikoli skluzavka.
- **Recommended CS:** Diapozitiv
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 63: b2-dichten-393

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-dichten-393
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Zpívat • Zpívat
- **DE source:** dichten
- **LV reference:** dzejot • sadzejot
- **Problem:** Dichten ve zde uvedeném významu znamená básnit nebo skládat básně, nikoli zpívat.
- **Recommended CS:** Básnit • Skládat básně
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 64: b2-diejenige-397

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-diejenige-397
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Tak
- **DE source:** diejenige
- **LV reference:** tā
- **Problem:** Diejenige je ženský tvar zájmena ta, nikoli příslovce tak.
- **Recommended CS:** Ta
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 65: b2-Direktion-403

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Direktion-403
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Ovládání předložek
- **DE source:** Direktion
- **LV reference:** diprievārdu vadība
- **Problem:** Direktion znamená vedení nebo ředitelství; současný překlad označuje řízení předložek.
- **Recommended CS:** Vedení • Ředitelství
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 66: b2-einweichen-592

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-einweichen-592
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Dip
- **DE source:** einweichen
- **LV reference:** iemērkt
- **Problem:** Dip je anglické slovo, nikoli český překlad. Einweichen znamená namáčet nebo nechat odmočit.
- **Recommended CS:** Namáčet
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 67: b2-Elster-608

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Elster-608
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Škytavka
- **DE source:** Elster
- **LV reference:** žagata
- **Problem:** Škytavka znamená hiccups; Elster je pták straka.
- **Recommended CS:** Straka
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 68: b2-Erlass-683

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Erlass-683
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Nařídit • Nařídit • Nařídit • Propustit
- **DE source:** Erlass
- **LV reference:** rīkojums • pavēle • dekrēts • atlaišana
- **Problem:** Německé slovo je podstatné jméno; české položky jsou převážně slovesa a významově neodpovídají.
- **Recommended CS:** Nařízení • Vyhláška • Dekret • Odpuštění
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 69: b2-erniedrigen-692

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-erniedrigen-692
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Nižší • Ponížit
- **DE source:** erniedrigen
- **LV reference:** pazemināt • pazemot
- **Problem:** „Nižší“ je přídavné jméno, zatímco německé sloveso vyžaduje české sloveso.
- **Recommended CS:** Snížit • Ponížit
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 70: b2-erpressen-697

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-erpressen-697
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Vydírání
- **DE source:** erpressen
- **LV reference:** šantažēt
- **Problem:** Německé slovo je sloveso, ale současný překlad je české podstatné jméno.
- **Recommended CS:** Vydírat
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 71: b2-erschlagen-705

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-erschlagen-705
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Odklepnout
- **DE source:** erschlagen
- **LV reference:** nosist
- **Problem:** „Odklepnout“ znamená například schválit nebo vyřadit; neznamená zabít úderem.
- **Recommended CS:** Ubít
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 72: b2-Faulbaum-771

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Faulbaum-771
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Předvečer
- **DE source:** Faulbaum
- **LV reference:** ieva
- **Problem:** Faulbaum je krušina olšová, nikoli předvečer; předvečer je německy Vorabend.
- **Recommended CS:** Krušina olšová
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 73: b2-Funkspruch-850

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Funkspruch-850
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Gramorádio
- **DE source:** Funkspruch
- **LV reference:** radiogramma
- **Problem:** „Gramorádio“ není český výraz pro rádiovou zprávu a význam německého slova nepřenáší.
- **Recommended CS:** Radiogram • Rádiová zpráva
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 74: b2-Fürsprache-857

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Fürsprache-857
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Přesvědčování • Obhajitelné dobré jméno
- **DE source:** Fürsprache
- **LV reference:** aizrunāšana • aizbilstams labs vārds
- **Problem:** Fürsprache znamená přímluvu nebo zastání; současné překlady označují přesvědčování a nesrozumitelné spojení.
- **Recommended CS:** Přímluva • Zastání
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 75: b2-gängig-863

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-gängig-863
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Chůze
- **DE source:** gängig
- **LV reference:** ejošs
- **Problem:** „Chůze“ je podstatné jméno; gängig znamená běžný, obvyklý nebo rozšířený.
- **Recommended CS:** Běžný • Rozšířený
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 76: b2-Garde-866

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Garde-866
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Hlídat
- **DE source:** Garde
- **LV reference:** gvarde
- **Problem:** „Hlídat“ je sloveso; Garde je podstatné jméno označující gardu nebo stráž.
- **Recommended CS:** Garda • Stráž
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 77: b2-gelaunt-903

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-gelaunt-903
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Ó
- **DE source:** gelaunt
- **LV reference:** omā
- **Problem:** „Ó“ není český překlad; gelaunt označuje něčí náladu, obvykle ve spojení s dobře nebo špatně.
- **Recommended CS:** Dobře naladěný
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 78: b2-Geldbuße-904

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Geldbuße-904
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Dobře
- **DE source:** Geldbuße
- **LV reference:** naudas sods
- **Problem:** „Dobře“ znamená well; Geldbuße je peněžitá pokuta nebo trest.
- **Recommended CS:** Peněžitý trest • Pokuta
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 79: b2-raffgierig-986

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-raffgierig-986
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Kouzelná vazba
- **DE source:** raffgierig
- **LV reference:** mantrausīgs
- **Problem:** „Kouzelná vazba“ je zcela nesouvisející význam; raffgierig znamená hrabivý, majetku chtivý.
- **Recommended CS:** Chamtivý • Hrabošivý
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 80: b2-glotzen-1003

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-glotzen-1003
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Šilhat
- **DE source:** glotzen
- **LV reference:** blenzt
- **Problem:** Glotzen znamená civět nebo zírat; „šilhat“ znamená mít oči vychýlené různými směry.
- **Recommended CS:** Zírat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 81: b2-Goldwäscher-1013

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Goldwäscher-1013
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Zlatá podložka
- **DE source:** Goldwäscher
- **LV reference:** zelta skalotājs
- **Problem:** Goldwäscher je člověk rýžující zlato; „zlatá podložka“ označuje předmět, nikoli osobu.
- **Recommended CS:** Zlatokop
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 82: b2-Götzendienst-1019

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Götzendienst-1019
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Sloužit idolu
- **DE source:** Götzendienst
- **LV reference:** kalpošana elkam
- **Problem:** Götzendienst je podstatné jméno označující modloslužbu; současný překlad je slovesná fráze.
- **Recommended CS:** Uctívání model
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 83: b2-grauen-1022

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-grauen-1022
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Vazba
- **DE source:** grauen
- **LV reference:** aust
- **Problem:** Grauen ve významu „austat“ znamená svítat; „vazba“ je zcela nesouvisející podstatné jméno.
- **Recommended CS:** Svítat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 84: b2-Honorar-1151

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Honorar-1151
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Královské hodnosti
- **DE source:** Honorar
- **LV reference:** honorārs
- **Problem:** Současný překlad znamená královské hodnosti; Honorar je odměna za práci nebo vystoupení.
- **Recommended CS:** Honorář
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 85: b2-mutieren-1345

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-mutieren-1345
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Mluvit
- **DE source:** mutieren
- **LV reference:** mutēt
- **Problem:** „Mluvit“ znamená sprechen; německé „mutieren“ znamená mutovat nebo podléhat mutaci.
- **Recommended CS:** Mutovat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 86: b2-Nährboden-1360

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Nährboden-1360
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Střední
- **DE source:** Nährboden
- **LV reference:** barotne
- **Problem:** „Střední“ znamená middle/medium; „Nährboden“ je živná půda, případně živné prostředí.
- **Recommended CS:** Živná půda
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 87: b2-normieren-1387

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-normieren-1387
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Na příděl
- **DE source:** normieren
- **LV reference:** normēt
- **Problem:** „Na příděl“ znamená rationed; „normieren“ znamená standardizovat, normovat nebo normalizovat.
- **Recommended CS:** Normalizovat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 88: b2-Ringelnatter-1526

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Ringelnatter-1526
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Hladový
- **DE source:** Ringelnatter
- **LV reference:** zalktis
- **Problem:** Ringelnatter je druh hada, nikoli přídavné jméno hladový.
- **Recommended CS:** Užovka obojková
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 89: b2-verzweifeln-1970

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-verzweifeln-1970
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Vyšel ven
- **DE source:** verzweifeln
- **LV reference:** izmist
- **Problem:** Vyšel ven znamená odešel ven a s německým slovesem zoufat si významově nesouvisí.
- **Recommended CS:** Zoufat si
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 90: b2-Wade-2019

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Wade-2019
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Jikry
- **DE source:** Wade
- **LV reference:** ikri
- **Problem:** „Wade“ znamená lýtko; „jikry“ jsou rybí vajíčka a jde o zcela jiný význam.
- **Recommended CS:** Lýtko
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 91: b2-wanken-2030

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-wanken-2030
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Grilování • Adj. kolísat
- **DE source:** wanken
- **LV reference:** grīļoties • pārn. svārstīties
- **Problem:** „Grilování“ je podstatné jméno s jiným významem a „Adj.“ je chybná kontaminace; sloveso znamená potácet se či kolísat.
- **Recommended CS:** Potácet se • kolísat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 92: b2-Wehe-2041

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Wehe-2041
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Duna • Kupena
- **DE source:** Wehe
- **LV reference:** kāpa • kupena
- **Problem:** „Wehe“ znamená porodní kontrakci či bolest; „duna“ a „kupena“ jsou zcela nesouvisející významy.
- **Recommended CS:** Porodní kontrakce • porodní bolesti
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 93: b2-Wehrpflicht-2043

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Wehrpflicht-2043
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Stanné právo
- **DE source:** Wehrpflicht
- **LV reference:** karaklausība
- **Problem:** „Wehrpflicht“ znamená povinnou vojenskou službu nebo brannou povinnost; „stanné právo“ je martial law.
- **Recommended CS:** Branná povinnost
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 94: b2-Weib-2044

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Weib-2044
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Srov. ne žena
- **DE source:** Weib
- **LV reference:** sar. niev. sieviete
- **Problem:** Současný text je nesrozumitelný a obsahuje kontaminaci; „Weib“ je hanlivé nebo hovorové označení ženy.
- **Recommended CS:** Ženská (hanl.)
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 95: b2-bieten

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-bieten
- **Field:** study.tip.leftBlocks[0].text
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Nabídněte příležitosti, kurzy, služby nebo výhody – které místo nebo program poskytuje.
- **DE source:** bieten
- **LV reference:** Piedāvāt iespējas, kursus, pakalpojumus vai labumu — ko vieta vai programma sniedz.
- **Problem:** Navazuje na stejnou chybnou formulaci a současně nedává přirozenou definici cílového slovesa.
- **Recommended CS:** Bieten se používá pro příležitosti, kurzy, služby nebo výhody, které místo či program poskytuje.
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 96: b2-bieten

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-bieten
- **Field:** study.tip
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Použijte řepu, když kontext odpovídá tomuto významu.
- **DE source:** bieten
- **LV reference:** Izmanto bieten, kad konteksts atbilst šai nozīmei.
- **Problem:** Automatická záměna slova bieten za „řepu“ je závažná významová chyba.
- **Recommended CS:** Použijte bieten, když kontext odpovídá tomuto významu.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 97: b2-bieten

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-bieten
- **Field:** study.important
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Co místo/program poskytuje: Červená řepa.
- **DE source:** bieten
- **LV reference:** Ko vieta/programma sniedz: bieten.
- **Problem:** „Červená řepa“ je chybná substituce cílového německého slovesa bieten.
- **Recommended CS:** Co místo/program poskytuje: bieten.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 98: b2-anbieten

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-anbieten
- **Field:** study.important.text
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Anbieten = nabízet aktivně. Dělitelné: řepa ... an. Perfektní: angeboten.
- **DE source:** anbieten
- **LV reference:** anbieten = piedāvāt aktīvi. Sadalāms: biete ... an. Perfekt: angeboten.
- **Problem:** „Řepa“ je chybná náhrada tvaru biete a zásadně narušuje výuku časování.
- **Recommended CS:** Anbieten = aktivně nabízet. Dělitelné: biete ... an. Perfekt: angeboten.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 99: b2-sich-verlaufen

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-sich-verlaufen
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Zmizte
- **DE source:** sich verlaufen
- **LV reference:** apmaldīties
- **Problem:** „Zmizte“ je rozkazovací způsob slovesa zmizet; neznamená „ztratit se/apmaldīt se“ ve smyslu zabloudit.
- **Recommended CS:** Ztratit se
- **Rationale:** Luna linguistic audit (1 confidence)


### HIGH (652)

### Finding 1: b2-Betäubung-220

- **Dataset:** b2
- **Batch:** 201-250
- **Card/Index:** b2-Betäubung-220
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Omračující • Strnulost • Narkóza • Anestezie
- **DE source:** Betäubung
- **LV reference:** apdullināšana • apdullums • narkoze • anestēzija
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 2: b2-Betäubung-220

- **Dataset:** b2
- **Batch:** 201-250
- **Card/Index:** b2-Betäubung-220
- **Field:** entry[220].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Omračující • Strnulost • Narkóza • Anestezie
- **DE source:** Betäubung
- **LV reference:** apdullināšana • apdullums • narkoze • anestēzija
- **Problem:** Foreign remnant (PL_CHAR) in entry[220].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 3: b2-Chromosom-332

- **Dataset:** b2
- **Batch:** 301-350
- **Card/Index:** b2-Chromosom-332
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Chromozóm
- **DE source:** Chromosom
- **LV reference:** hromosoma
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 4: b2-Chromosom-332

- **Dataset:** b2
- **Batch:** 301-350
- **Card/Index:** b2-Chromosom-332
- **Field:** entry[332].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Chromozóm
- **DE source:** Chromosom
- **LV reference:** hromosoma
- **Problem:** Foreign remnant (PL_CHAR) in entry[332].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 5: b2-Diagnose-390

- **Dataset:** b2
- **Batch:** 351-400
- **Card/Index:** b2-Diagnose-390
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Diagnóza
- **DE source:** Diagnose
- **LV reference:** diagnoze
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 6: b2-Diagnose-390

- **Dataset:** b2
- **Batch:** 351-400
- **Card/Index:** b2-Diagnose-390
- **Field:** entry[390].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Diagnóza
- **DE source:** Diagnose
- **LV reference:** diagnoze
- **Problem:** Foreign remnant (PL_CHAR) in entry[390].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 7: b2-Dressman-442

- **Dataset:** b2
- **Batch:** 401-450
- **Card/Index:** b2-Dressman-442
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Model předvádějící na módních přehlídkách
- **DE source:** Dressman
- **LV reference:** modeļu demonstrētājs modes skatēs
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 8: b2-Dressman-442

- **Dataset:** b2
- **Batch:** 401-450
- **Card/Index:** b2-Dressman-442
- **Field:** entry[442].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Model předvádějící na módních přehlídkách
- **DE source:** Dressman
- **LV reference:** modeļu demonstrētājs modes skatēs
- **Problem:** Foreign remnant (PL_CHAR) in entry[442].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 9: b2-eintönig-586

- **Dataset:** b2
- **Batch:** 551-600
- **Card/Index:** b2-eintönig-586
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Monotónní • Monotónní • Monotónní
- **DE source:** eintönig
- **LV reference:** vienmuļš • vienmuļīgs • monotons
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 10: b2-eintönig-586

- **Dataset:** b2
- **Batch:** 551-600
- **Card/Index:** b2-eintönig-586
- **Field:** entry[586].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Monotónní • Monotónní • Monotónní
- **DE source:** eintönig
- **LV reference:** vienmuļš • vienmuļīgs • monotons
- **Problem:** Foreign remnant (PL_CHAR) in entry[586].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 11: b2-gelaunt-903

- **Dataset:** b2
- **Batch:** 901-950
- **Card/Index:** b2-gelaunt-903
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Ó
- **DE source:** gelaunt
- **LV reference:** omā
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 12: b2-gelaunt-903

- **Dataset:** b2
- **Batch:** 901-950
- **Card/Index:** b2-gelaunt-903
- **Field:** entry[903].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Ó
- **DE source:** gelaunt
- **LV reference:** omā
- **Problem:** Foreign remnant (PL_CHAR) in entry[903].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 13: b2-hoch-study

- **Dataset:** b2
- **Batch:** 1101-1150
- **Card/Index:** b2-hoch-study
- **Field:** entry[1137].study.tip[0]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Das Hoch s velkým písmenem - oslavný pokřik nebo anticyklóna ve zprávách o počasí.
- **DE source:** Hoch
- **LV reference:** tosts “lai dzīvo!”
- **Problem:** Foreign remnant (PL_CHAR) in entry[1137].study.tip[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 14: b2-hoch-study

- **Dataset:** b2
- **Batch:** 1101-1150
- **Card/Index:** b2-hoch-study
- **Field:** entry[1137].study.important[0]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Das Hoch = přípitek ("ať žije!") NEBO anticyklóna (počasí) - podstatné jméno.
- **DE source:** Hoch
- **LV reference:** tosts “lai dzīvo!”
- **Problem:** Foreign remnant (PL_CHAR) in entry[1137].study.important[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 15: b2-Hypnose-1153

- **Dataset:** b2
- **Batch:** 1151-1200
- **Card/Index:** b2-Hypnose-1153
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Hypnóza
- **DE source:** Hypnose
- **LV reference:** hipnoze
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 16: b2-Hypnose-1153

- **Dataset:** b2
- **Batch:** 1151-1200
- **Card/Index:** b2-Hypnose-1153
- **Field:** entry[1153].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Hypnóza
- **DE source:** Hypnose
- **LV reference:** hipnoze
- **Problem:** Foreign remnant (PL_CHAR) in entry[1153].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 17: b2-Laufsteg-1221

- **Dataset:** b2
- **Batch:** 1201-1250
- **Card/Index:** b2-Laufsteg-1221
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Jazyk na módní přehlídce
- **DE source:** Laufsteg
- **LV reference:** mēle modes skatē
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 18: b2-Laufsteg-1221

- **Dataset:** b2
- **Batch:** 1201-1250
- **Card/Index:** b2-Laufsteg-1221
- **Field:** entry[1221].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Jazyk na módní přehlídce
- **DE source:** Laufsteg
- **LV reference:** mēle modes skatē
- **Problem:** Foreign remnant (PL_CHAR) in entry[1221].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 19: b2-Vollnarkose-1365

- **Dataset:** b2
- **Batch:** 1351-1400
- **Card/Index:** b2-Vollnarkose-1365
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Plná narkóza
- **DE source:** Vollnarkose
- **LV reference:** pilna narkoze
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 20: b2-Vollnarkose-1365

- **Dataset:** b2
- **Batch:** 1351-1400
- **Card/Index:** b2-Vollnarkose-1365
- **Field:** entry[1365].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Plná narkóza
- **DE source:** Vollnarkose
- **LV reference:** pilna narkoze
- **Problem:** Foreign remnant (PL_CHAR) in entry[1365].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 21: b2-Quote-1485

- **Dataset:** b2
- **Batch:** 1451-1500
- **Card/Index:** b2-Quote-1485
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Kvóta
- **DE source:** Quote
- **LV reference:** kvota
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 22: b2-Quote-1485

- **Dataset:** b2
- **Batch:** 1451-1500
- **Card/Index:** b2-Quote-1485
- **Field:** entry[1485].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Kvóta
- **DE source:** Quote
- **LV reference:** kvota
- **Problem:** Foreign remnant (PL_CHAR) in entry[1485].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 23: b2-tönen-1735

- **Dataset:** b2
- **Batch:** 1701-1750
- **Card/Index:** b2-tönen-1735
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Znít • Tónovat • Dávat stín
- **DE source:** tönen
- **LV reference:** skanēt • ietonēt • piešķirt nokrāsu
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 24: b2-tönen-1735

- **Dataset:** b2
- **Batch:** 1701-1750
- **Card/Index:** b2-tönen-1735
- **Field:** entry[1735].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Znít • Tónovat • Dávat stín
- **DE source:** tönen
- **LV reference:** skanēt • ietonēt • piešķirt nokrāsu
- **Problem:** Foreign remnant (PL_CHAR) in entry[1735].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 25: b2-Vorwahl-2011

- **Dataset:** b2
- **Batch:** 2001-2050
- **Card/Index:** b2-Vorwahl-2011
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Kód jiného města nebo země v telefonickém rozhovoru
- **DE source:** Vorwahl
- **LV reference:** tālruņa sarunā citas pilsētas vai valsts kods
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 26: b2-Vorwahl-2011

- **Dataset:** b2
- **Batch:** 2001-2050
- **Card/Index:** b2-Vorwahl-2011
- **Field:** entry[2011].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Kód jiného města nebo země v telefonickém rozhovoru
- **DE source:** Vorwahl
- **LV reference:** tālruņa sarunā citas pilsētas vai valsts kods
- **Problem:** Foreign remnant (PL_CHAR) in entry[2011].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 27: b2-widersprechen-5

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-widersprechen-5
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Objekt
- **DE source:** widersprechen
- **LV reference:** iebilst
- **Problem:** „Objekt“ je podstatné jméno nebo tvar slovesa „objektovat“, ne překlad slovesa widersprechen.
- **Recommended CS:** Oponovat
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 28: b2-Akt-9

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Akt-9
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Jednat • Dokument
- **DE source:** Akt
- **LV reference:** akts • dokuments
- **Problem:** „Jednat“ je české sloveso, zatímco německé Akt je podstatné jméno.
- **Recommended CS:** Akt • Dokument
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 29: b2-anbelangen-13

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-anbelangen-13
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Odkazovat
- **DE source:** anbelangen
- **LV reference:** attiekties uz
- **Problem:** Anbelangen znamená „týkat se“ nebo „dotýkat se“, ne „odkazovat“.
- **Recommended CS:** Týkat se
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 30: b2-anbrechen-25

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-anbrechen-25
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Začít • Hackovat
- **DE source:** anbrechen
- **LV reference:** sākties • uzlauzt
- **Problem:** Ve druhém významu anbrechen znamená načít nebo otevřít, nikoli „hackovat“.
- **Recommended CS:** Začít • Načít
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 31: b2-angeordnet-31

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-angeordnet-31
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Určil • Nařídil
- **DE source:** angeordnet
- **LV reference:** noteikts • pavēlēts
- **Problem:** „Určil“ a „nařídil“ jsou slovesa v minulém čase; angeordnet je příčestné přídavné jméno.
- **Recommended CS:** Stanovený • Nařízený
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 32: b2-angegriffen-33

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-angegriffen-33
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Unavený • Napadl
- **DE source:** angegriffen
- **LV reference:** noguris • uzbrukts
- **Problem:** „Napadl“ je minulý čas slovesa; správný přídavný tvar je „napadený“.
- **Recommended CS:** Unavený • Napadený
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 33: b2-Abenteuerlust-39

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Abenteuerlust-39
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Touha po aféře
- **DE source:** Abenteuerlust
- **LV reference:** dēku kāre
- **Problem:** „Aféra“ znamená milostný nebo skandální poměr; Abenteuerlust je touha po dobrodružství.
- **Recommended CS:** Touha po dobrodružství
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 34: b2-abfällig-41

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abfällig-41
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Nepříznivý • Negativní • Špatný • Nesouhlasný
- **DE source:** abfällig
- **LV reference:** nelabvēlīgs • negatīvs • slikts • noraidošs
- **Problem:** Abfällig označuje pohrdavé nebo znevažující vyjadřování; „nesouhlasný“ tento význam nemá.
- **Recommended CS:** Pohrdavý • Znevažující • Hanlivý • Opovržlivý
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 35: b2-abfertigen-42

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abfertigen-42
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Poslat • Poslat pryč • Sloužit • Chovat se nevlídně
- **DE source:** abfertigen
- **LV reference:** nosūtīt • aizsūtīt • apkalpot • izturēties nelaipni
- **Problem:** Ve třetím významu abfertigen znamená „odbavit“, nikoli obecné „sloužit“.
- **Recommended CS:** Vypravit • Poslat pryč • Odbavit • Chovat se nevlídně
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 36: b2-abgesehen-44

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abgesehen-44
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Ačkoli • Navíc
- **DE source:** abgesehen
- **LV reference:** lai gan • turklāt
- **Problem:** „Ačkoli“ znamená „obwohl“; abgesehen znamená „kromě“ nebo „odhlédneme-li od“.
- **Recommended CS:** Kromě • Navíc
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 37: b2-Absatzmarkt-56

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Absatzmarkt-56
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Outletový trh
- **DE source:** Absatzmarkt
- **LV reference:** noieta tirgus
- **Problem:** Absatzmarkt znamená trh odbytu/prodeje, nikoli trh outletového zboží.
- **Recommended CS:** Odbytový trh
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 38: b2-abschieben-58

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abschieben-58
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Odstrčit • Zapudit
- **DE source:** abschieben
- **LV reference:** aizstumt • izraidīt
- **Problem:** Druhý význam je deportovat; české „zapudit“ neoznačuje standardně vyhoštění.
- **Recommended CS:** Odstrčit • Vyhostit
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 39: b2-abschleppen-60

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abschleppen-60
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Odstranit auto
- **DE source:** abschleppen
- **LV reference:** aizvākt automašīnu
- **Problem:** Abschleppen vozidla znamená odtáhnout ho, ne pouze odstranit.
- **Recommended CS:** Odtáhnout auto
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 40: b2-Absturz-69

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Absturz-69
- **Field:** csText
- **Severity:** HIGH
- **Status:** GRAMMAR
- **Current CS text:** Padat • Padat
- **DE source:** Absturz
- **LV reference:** nogāšanās • kritiens
- **Problem:** Německé podstatné jméno vyžaduje české podstatné jméno; „padat“ je infinitiv.
- **Recommended CS:** Pád • Havárie
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 41: b2-abtreten-72

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abtreten-72
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Stáhnout • Dát • Odejít
- **DE source:** abtreten
- **LV reference:** atkāpties • atdot • aiziet
- **Problem:** Abtreten znamená odstoupit a předat/ustoupit něco; „stáhnout“ a „dát“ jsou příliš nepřesné.
- **Recommended CS:** Odstoupit • Předat • Odejít
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 42: b2-Abzweigung-78

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Abzweigung-78
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Větev • Větev
- **DE source:** Abzweigung
- **LV reference:** nozarojums • atzarojums
- **Problem:** Abzweigung je odbočka nebo rozvětvení cesty, nikoli větev stromu.
- **Recommended CS:** Odbočka • Odbočka
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 43: b2-Areal-89

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Areal-89
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Rozsah
- **DE source:** Areal
- **LV reference:** areāls
- **Problem:** Areal označuje území nebo oblast; „rozsah“ znamená míru či šíři něčeho.
- **Recommended CS:** Oblast
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 44: b2-ausbeuten-95

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-ausbeuten-95
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Zneužít
- **DE source:** ausbeuten
- **LV reference:** ekspluatēt
- **Problem:** Ausbeuten znamená vykořisťovat nebo bezohledně využívat; „zneužít“ má jiný význam a aspekt.
- **Recommended CS:** Vykořisťovat
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 45: b2-Ausbeutung-96

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Ausbeutung-96
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Operace
- **DE source:** Ausbeutung
- **LV reference:** ekspluatācija
- **Problem:** Ausbeutung znamená vykořisťování/exploataci, nikoli „operace“.
- **Recommended CS:** Vykořisťování
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 46: b2-sich aufdrängen-98

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-sich aufdrängen-98
- **Field:** csText
- **Severity:** HIGH
- **Status:** SEMANTICS
- **Current CS text:** Obtěžovat
- **DE source:** sich aufdrängen
- **LV reference:** uzmākties
- **Problem:** Reflexivní sich aufdrängen znamená vnucovat se nebo vnucovat svou přítomnost, ne jen obtěžovat.
- **Recommended CS:** Vnucovat se
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 47: b2-Augenmaß-102

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Augenmaß-102
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Akumetr
- **DE source:** Augenmaß
- **LV reference:** acumērs
- **Problem:** Akumetr označuje měřicí přístroj, ne schopnost odhadnout rozměry nebo zachovat správnou míru.
- **Recommended CS:** Odhad • smysl pro míru
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 48: b2-aussetzen-105

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-aussetzen-105
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Příspěvek • Předmět • Odporovat • Stát
- **DE source:** aussetzen
- **LV reference:** izlikt • pakļaut • iebilst • stāties
- **Problem:** Příspěvek, předmět a stát neodpovídají významům slovesa aussetzen; jde o vystavení, přerušení či námitku.
- **Recommended CS:** Vystavit • podrobit • namítat • přerušit
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 49: b2-ausspannen-107

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-ausspannen-107
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Odvázat • Odvézt partnera • Odpočívat
- **DE source:** ausspannen
- **LV reference:** izjūgt • atņemt partneri • atpūsties
- **Problem:** Ausspannen znamená vypráhnout zvíře, odloudit něčího partnera nebo odpočívat; „odvézt“ mění význam.
- **Recommended CS:** Vypráhnout • odloudit partnera • odpočívat
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 50: b2-ausstatten-108

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-ausstatten-108
- **Field:** csText
- **Severity:** HIGH
- **Status:** TRANSLATION
- **Current CS text:** Dodávat • Navrhovat
- **DE source:** ausstatten
- **LV reference:** apgādāt • noformēt
- **Problem:** Sloveso znamená vybavit nebo opatřit něčím, nikoli dodávat či navrhovat.
- **Recommended CS:** Vybavit • opatřit
- **Rationale:** Luna linguistic audit (0.99 confidence)


_... un vēl 602 HIGH atradumi (skat. reports/temp/cs-b2-audit/)._


### MEDIUM (535)

### Finding 1: b2-zuwider

- **Dataset:** b2
- **Batch:** 2101-2118
- **Card/Index:** b2-zuwider
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** wider
- **DE source:** zuwider
- **LV reference:** pret • pretēji • nepatikt
- **Problem:** Accent term "wider" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 2: b2-Anbau-15

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Anbau-15
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Rozšíření • Kultivace
- **DE source:** Anbau
- **LV reference:** piebūve • audzēšana
- **Problem:** První význam Anbau je stavební přístavba; „rozšíření“ je příliš obecné.
- **Recommended CS:** Přístavba • Pěstování
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 3: b2-anfertigen-16

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-anfertigen-16
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Dělat
- **DE source:** anfertigen
- **LV reference:** izgatavot
- **Problem:** Anfertigen znamená něco vyrobit nebo zhotovit; „dělat“ je příliš obecné.
- **Recommended CS:** Vyrobit
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 4: b2-angebracht-18

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-angebracht-18
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Vhodný • Vhodný
- **DE source:** angebracht
- **LV reference:** piemērots • iederīgs
- **Problem:** Německé angebracht má vedle významu „vhodný“ také význam „připevněný“ nebo „umístěný“.
- **Recommended CS:** Vhodný • Připevněný
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 5: b2-allerhand-22

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-allerhand-22
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** NATURALNESS
- **Current CS text:** Všechny druhy • Různé
- **DE source:** allerhand
- **LV reference:** visādi • dažādi
- **Problem:** „Všechny druhy“ není přirozený slovníkový překlad přídavného výrazu allerhand.
- **Recommended CS:** Všelijaký • Různý
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 6: b2-angeblich-28

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-angeblich-28
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Jako by • Zřejmě
- **DE source:** angeblich
- **LV reference:** it kā • šķietami
- **Problem:** „Jako by“ znamená „als ob“, nikoli angeblich ve významu „údajně“ nebo „prý“.
- **Recommended CS:** Údajně • Zřejmě
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 7: b2-angelegt-30

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-angelegt-30
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Vytvořené • Investované
- **DE source:** angelegt
- **LV reference:** izveidots • ieguldīts
- **Problem:** Samostatný překlad přídavného jména má být v základním tvaru, ne v neutru „vytvořené“ a „investované“.
- **Recommended CS:** Vytvořený • Investovaný
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 8: b2-angehoben-32

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-angehoben-32
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Zvýšené
- **DE source:** angehoben
- **LV reference:** paaugstināts
- **Problem:** Překlad je v neutru; jako samostatné heslo má být v základním tvaru „zvýšený“.
- **Recommended CS:** Zvýšený
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 9: b2-abbringen-36

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abbringen-36
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Odradit • Odradit • Odvést
- **DE source:** abbringen
- **LV reference:** atrunāt • atturēt • novirzīt
- **Problem:** První dva české významy jsou duplicitní a třetí „odvést“ přesně nevyjadřuje odklonění.
- **Recommended CS:** Odvrátit • Odradit • Odklonit
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 10: b2-abgrenzen-47

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abgrenzen-47
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Vymezit se • Distancovat se
- **DE source:** abgrenzen
- **LV reference:** norobežot • distancēties
- **Problem:** V prvním významu je abgrenzen přechodné sloveso „vymezit“, ne reflexivní „vymezit se“.
- **Recommended CS:** Vymezit • Distancovat se
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 11: b2-abhören-49

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abhören-49
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Odposlouchávat • Odposlouchávat
- **DE source:** abhören
- **LV reference:** noklausīties • slepeni noklausīties
- **Problem:** Překlad opakuje stejný význam a nerozlišuje běžné poslouchání od tajného odposlechu.
- **Recommended CS:** Poslouchat • Odposlouchávat
- **Rationale:** Luna linguistic audit (0.92 confidence)

### Finding 12: b2-ableiten-50

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-ableiten-50
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Vést • Odklonit • Odvodit
- **DE source:** ableiten
- **LV reference:** novadīt • novirzīt • atvasināt
- **Problem:** „Vést“ je příliš obecné; první význam ableiten je odvést nebo odvádět, například vodu či teplo.
- **Recommended CS:** Odvést • Odklonit • Odvodit
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 13: b2-abschlagen-59

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abschlagen-59
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Pokácet • Odrazit • Odrazit • Odmítnout
- **DE source:** abschlagen
- **LV reference:** nocirst • atsist • atvairīt • noraidīt
- **Problem:** „Pokácet“ znamená skácet strom; pro odseknout/utnout je přesnější „useknout“.
- **Recommended CS:** Useknout • Odrazit • Odrazit • Odmítnout
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 14: b2-absondern-63

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-absondern-63
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Oddělit • Oddělit • Izolovat
- **DE source:** absondern
- **LV reference:** izdalīt • atdalīt • izolēt
- **Problem:** První význam je vylučovat/vylučovat látku; „oddělit“ jej nepokrývá.
- **Recommended CS:** Vylučovat • Oddělit • Izolovat
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 15: b2-abstimmen-66

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abstimmen-66
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Volit • Souhlasit
- **DE source:** abstimmen
- **LV reference:** nobalsot • saskaņot
- **Problem:** „Abstimmen“ znamená hlasovat a koordinovat/sladit; „volit“ a „souhlasit“ jsou méně přesné.
- **Recommended CS:** Hlasovat • Koordinovat
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 16: b2-abtragen-71

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abtragen-71
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Odnést • Odnést • Zbořit
- **DE source:** abtragen
- **LV reference:** aiznest • nonēsāt • nojaukt
- **Problem:** Ve významu postupně opotřebovat/odstranit povrch znamená abtragen „obrousit“, nikoli „odnést“.
- **Recommended CS:** Odnést • Obrousit • Zbořit
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 17: b2-abwenden-75

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-abwenden-75
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Zabránit
- **DE source:** abwenden
- **LV reference:** novērst
- **Problem:** Abwenden znamená odvrátit hrozbu či nebezpečí; „zabránit“ vyjadřuje spíše předcházení.
- **Recommended CS:** Odvrátit
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 18: b2-Affäre-76

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Affäre-76
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Aféra • Román
- **DE source:** Affäre
- **LV reference:** afēra • mīlas dēka
- **Problem:** Milostná Affäre je milostný poměr; „román“ znamená především literární dílo.
- **Recommended CS:** Aféra • Milostný poměr
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 19: b2-Andeutung-83

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Andeutung-83
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Nápověda • Indikace
- **DE source:** Andeutung
- **LV reference:** mājiens • norāde
- **Problem:** Andeutung je náznak nebo nepřímá indicie; „nápověda“ znamená spíše pomoc či hint.
- **Recommended CS:** Náznak • Indicie
- **Rationale:** Luna linguistic audit (0.91 confidence)

### Finding 20: b2-Aufruf-99

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Aufruf-99
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Zvolání • Pozvání
- **DE source:** Aufruf
- **LV reference:** uzsaukums • aicinājums
- **Problem:** Ve významu veřejného apelu je Aufruf „výzva“; „pozvání“ označuje invitation.
- **Recommended CS:** Zvolání • Výzva
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 21: b2-Äußerlichkeit-103

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Äußerlichkeit-103
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Okázalost
- **DE source:** Äußerlichkeit
- **LV reference:** ārišķība
- **Problem:** Okázalost znamená demonstrativní nádheru; Äußerlichkeit označuje vnější stránku nebo povrchnost.
- **Recommended CS:** Vnějškovost • zevnějšek
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 22: b2-Äußerung-104

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Äußerung-104
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Výpověď • Výraz • Výraz
- **DE source:** Äußerung
- **LV reference:** izteikums • izpaudums • izpausme
- **Problem:** Dva poslední české ekvivalenty jsou duplicitní; druhý význam je vhodnější přeložit jako projev.
- **Recommended CS:** Výpověď • projev
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 23: b2-ausstopfen-110

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-ausstopfen-110
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Naplnit • Naplnit • Vycpat
- **DE source:** ausstopfen
- **LV reference:** aizpildīt • piepildīt • izbāzt
- **Problem:** První dva české ekvivalenty jsou duplicitní; první význam je vhodnější vyjádřit slovesem „vyplnit“.
- **Recommended CS:** Vyplnit • naplnit • vycpat
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 24: b2-auswärtig-115

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-auswärtig-115
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Zahraniční • Zahraniční záležitosti
- **DE source:** auswärtig
- **LV reference:** ārzemju • ārlietu
- **Problem:** Druhý český výraz je podstatné jmenné spojení, zatímco německé přídavné jméno znamená zahraničněpolitický.
- **Recommended CS:** Zahraniční • zahraničněpolitický
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 25: b2-ausweichend-116

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-ausweichend-116
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Vyhýbavý • Nejistý
- **DE source:** ausweichend
- **LV reference:** izvairīgs • nenoteikts
- **Problem:** „Nejistý“ znamená uncertain; v tomto kontextu ausweichend znamená neurčitý nebo vyhýbavý.
- **Recommended CS:** Vyhýbavý • neurčitý
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 26: b2-auswerfen-118

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-auswerfen-118
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Vyhodit • Vyhodit
- **DE source:** auswerfen
- **LV reference:** izmest • izsviest
- **Problem:** Dva české ekvivalenty jsou stejné a nerozlišují významy vyhodit a vyvrhnout/vyvrhnout ven.
- **Recommended CS:** Vyhodit • vyvrhnout
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 27: b2-auswerten-119

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-auswerten-119
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** STUDY
- **Current CS text:** Hodnotit • Hodnotit
- **DE source:** auswerten
- **LV reference:** novērtēt • izvērtēt
- **Problem:** Duplicitní překlad nerozlišuje významy vyhodnotit a analyticky zpracovat či posoudit data.
- **Recommended CS:** Vyhodnotit • analyzovat
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 28: b2-Auszeichnung-121

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Auszeichnung-121
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Udělování • Ocenění • Čestný odznak
- **DE source:** Auszeichnung
- **LV reference:** apbalvošana • apbalvojums • goda zīme
- **Problem:** „Udělování“ označuje proces, ne vyznamenání či ocenění jako věc nebo poctu.
- **Recommended CS:** Vyznamenání • ocenění • čestný odznak
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 29: b2-bändigen-124

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-bändigen-124
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Omezit • Podmanit si
- **DE source:** bändigen
- **LV reference:** savaldīt • apvaldīt
- **Problem:** „Omezit“ znamená limitovat; bändigen označuje zkrocení nebo ovládnutí síly či zvířete.
- **Recommended CS:** Zkrotit • ovládnout
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 30: b2-Bauwesen-145

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Bauwesen-145
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Stavba • Stavba
- **DE source:** Bauwesen
- **LV reference:** celtniecība • būvniecība
- **Problem:** Oba české ekvivalenty jsou duplicitní a „stavba“ označuje spíše konkrétní objekt než stavební obor.
- **Recommended CS:** Stavebnictví
- **Rationale:** Luna linguistic audit (0.99 confidence)


_... un vēl 505 MEDIUM atradumi (skat. reports/temp/cs-b2-audit/)._


### LOW (55)

### Finding 1: b2-angeboren-29

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-angeboren-29
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Kongenitální
- **DE source:** angeboren
- **LV reference:** iedzimts
- **Problem:** „Kongenitální“ je odborný termín; pro běžné B2 učivo je přirozené „vrozený“.
- **Recommended CS:** Vrozený
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 2: b2-aussichtslos-106

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-aussichtslos-106
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Beznadějný • Bez vyhlídky
- **DE source:** aussichtslos
- **LV reference:** bezcerīgs • bez izredzēm
- **Problem:** V češtině se v tomto významu běžně říká „bez vyhlídek“, nikoli „bez vyhlídky“.
- **Recommended CS:** Beznadějný • Bez vyhlídek
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 3: b2-bekräftigen-172

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-bekräftigen-172
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Potvrdit • Potvrdit
- **DE source:** bekräftigen
- **LV reference:** apstiprināt • apliecināt
- **Problem:** Oba české ekvivalenty jsou stejné; druhý význam lze přirozeně odlišit výrazem „stvrdit“.
- **Recommended CS:** Potvrdit • Stvrdit
- **Rationale:** Luna linguistic audit (0.92 confidence)

### Finding 4: b2-bergen-192

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-bergen-192
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Zachránit • Zachránit • Sklidit
- **DE source:** bergen
- **LV reference:** glābt • izglābt • novākt ražu
- **Problem:** První dva ekvivalenty jsou stejné; druhý význam může označovat vyzvednutí či záchranu předmětu.
- **Recommended CS:** Zachránit • Vyzvednout • Sklidit
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 5: b2-beständig-212

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-beständig-212
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Stálý • Stálý
- **DE source:** beständig
- **LV reference:** pastāvīgs • nemainīgs
- **Problem:** Oba české ekvivalenty jsou stejné, takže druhý význam není pro studium rozlišen.
- **Recommended CS:** Stálý • Trvalý
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 6: b2-Betracht-222

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Betracht-222
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Úvaha • Úvaha
- **DE source:** Betracht
- **LV reference:** vērā ņemšana • apsvēršana
- **Problem:** Oba české ekvivalenty se opakují; výraz „Betracht“ se běžně používá hlavně ve spojení „in Betracht“.
- **Recommended CS:** Zřetel • Úvaha
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 7: b2-sich betragen-223

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-sich betragen-223
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Chovat se • Chovat se
- **DE source:** sich betragen
- **LV reference:** uzvesties • izturēties
- **Problem:** Překlad je významově správný, ale oba uvedené ekvivalenty jsou totožné a nerozlišují zdrojové synonyma.
- **Recommended CS:** Chovat se • Jednat
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 8: b2-Bewusstsein-236

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Bewusstsein-236
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Vědomí • Vědomí
- **DE source:** Bewusstsein
- **LV reference:** samaņa • apziņa
- **Problem:** Oba české ekvivalenty jsou totožné, takže se nerozlišuje vědomí jako stav a uvědomění jako proces.
- **Recommended CS:** Vědomí • Uvědomění
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 9: b2-Chromosom-332

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Chromosom-332
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Chromozóm
- **DE source:** Chromosom
- **LV reference:** hromosoma
- **Problem:** V češtině je standardní podoba „chromozom“; varianta s dlouhým ó působí jako slovenská kontaminace.
- **Recommended CS:** Chromozom
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 10: b2-Defizit-365

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Defizit-365
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Nedostatek • Nedostatek • Deficit
- **DE source:** Defizit
- **LV reference:** trūkums • iztrūkums • deficīts
- **Problem:** Druhá česká položka je duplicitní; vhodnější je uvést význam schodek.
- **Recommended CS:** Nedostatek • Schodek • Deficit
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 11: b2-dehnbar-366

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-dehnbar-366
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Roztažitelný • Roztažitelný • Roztahovací
- **DE source:** dehnbar
- **LV reference:** stiepjams • staipāms • staipīgs
- **Problem:** První dva české ekvivalenty se opakují, což snižuje studijní hodnotu karty.
- **Recommended CS:** Roztažitelný • Pružný • Roztahovací
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 12: b2-Demission-375

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Demission-375
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Rezignace • Rezignace
- **DE source:** Demission
- **LV reference:** atkāpšanās no amata • demisija
- **Problem:** Obě české položky jsou stejné; karta by měla nabídnout odlišné přirozené ekvivalenty.
- **Recommended CS:** Odstoupení z funkce • Rezignace
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 13: b2-derartig-380

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-derartig-380
- **Field:** csText
- **Severity:** LOW
- **Status:** STUDY
- **Current CS text:** Takový • Takový • Podobný
- **DE source:** derartig
- **LV reference:** tāds • šāds • tamlīdzīgi
- **Problem:** První dva české ekvivalenty se opakují; karta by měla uvádět odlišné ekvivalenty.
- **Recommended CS:** Takový • Takhle podobný
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 14: b2-Drehbleistift-438

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Drehbleistift-438
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Automatická tužka
- **DE source:** Drehbleistift
- **LV reference:** automātiskais zīmulis
- **Problem:** Běžný český název pro Drehbleistift je „mechanická tužka“; „automatická tužka“ působí nepřirozeně.
- **Recommended CS:** Mechanická tužka
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 15: b2-Dreisprung-440

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Dreisprung-440
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Trojitý skok
- **DE source:** Dreisprung
- **LV reference:** trīssoļlēkšana
- **Problem:** Standardní český sportovní termín pro Dreisprung je „trojskok“, nikoli doslovné „trojitý skok“.
- **Recommended CS:** Trojskok
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 16: b2-Düne-460

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Düne-460
- **Field:** csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Duna
- **DE source:** Düne
- **LV reference:** kāpa
- **Problem:** Obecné podstatné jméno se v češtině píše s malým počátečním písmenem.
- **Recommended CS:** duna
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 17: b2-ehrenvoll-512

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-ehrenvoll-512
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Čestný • Čestný
- **DE source:** ehrenvoll
- **LV reference:** goda pilns • godpilns
- **Problem:** Oba české ekvivalenty jsou totožné; druhý překlad by měl zachytit význam „počestný“ nebo „důstojný“.
- **Recommended CS:** Čestný • Počestný
- **Rationale:** Luna linguistic audit (0.91 confidence)

### Finding 18: b2-Eifer-521

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-Eifer-521
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Píle • Píle • Vášeň • Zápal • Dychtivost
- **DE source:** Eifer
- **LV reference:** centība • cītība • aizrautība • degsme • dedzība
- **Problem:** První dva české ekvivalenty se zbytečně opakují; cītība zde lépe odpovídá „horlivost“ nebo „usilovnost“.
- **Recommended CS:** Píle • Horlivost • Vášeň • Zápal • Dychtivost
- **Rationale:** Luna linguistic audit (0.88 confidence)

### Finding 19: b2-einäschern-531

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-einäschern-531
- **Field:** csText
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Zpopelnit • Spálit v ohni
- **DE source:** einäschern
- **LV reference:** kremēt • sadedzināt ugunsgrēkā
- **Problem:** Druhý překlad je v češtině nepřirozený; význam je spálit na popel.
- **Recommended CS:** Zpopelnit • Spálit na popel
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 20: b2-eingewurzelt-556

- **Dataset:** b2
- **Batch:** linguistic
- **Card/Index:** b2-eingewurzelt-556
- **Field:** csText
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Zakořeněné
- **DE source:** eingewurzelt
- **LV reference:** iesakņojies
- **Problem:** Samostatné české přídavné jméno se uvádí v základním mužském tvaru „zakořeněný“, ne v neutru.
- **Recommended CS:** Zakořeněný
- **Rationale:** Luna linguistic audit (0.9 confidence)


_... un vēl 35 LOW atradumi._


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
_Pagaidu artefakti: reports/temp/cs-b2-audit/_

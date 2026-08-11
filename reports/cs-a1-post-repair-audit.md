# CS–DE A1 POST-REPAIR FULL AUDIT

## KOPSAVILKUMS

- Dataset: A1
- Audit type: FULL POST-REPAIR LINGUISTIC + DETERMINISTIC AUDIT
- Model: GPT-5.6 Luna
- Audit mode: READ-ONLY
- Total objects: 702
- Audited objects: 702
- Cards submitted to Luna: 702
- Cards audited by Luna: 702
- Missing cards: 0
- Duplicate audited cards: 0
- Coverage: 100%
- Batch size: 50
- Batch count: 15
- CRITICAL: 36
- HIGH: 371
- MEDIUM: 230
- LOW: 39
- DE_SOURCE_ISSUE: 0
- STRUCTURAL_OWNER_REVIEW: 0
- FALSE_POSITIVE: 0
- Production changes: 0
- DE changes: 0
- Other-language changes: 0
- Consolidated JSON: reports/temp/cs-a1-post-repair-audit.json

## LUNA AUDIT BLOCKS

- simple-001-050: 50 cards (vocab_simple)
- simple-051-100: 50 cards (vocab_simple)
- simple-101-150: 50 cards (vocab_simple)
- simple-151-200: 50 cards (vocab_simple)
- simple-201-250: 50 cards (vocab_simple)
- simple-251-300: 50 cards (vocab_simple)
- simple-301-350: 50 cards (vocab_simple)
- simple-351-400: 50 cards (vocab_simple)
- simple-401-450: 50 cards (vocab_simple)
- simple-451-500: 50 cards (vocab_simple)
- simple-501-550: 50 cards (vocab_simple)
- simple-551-578: 28 cards (vocab_simple)
- study-001-010: 10 cards (vocab_study)
- study-011-020: 10 cards (vocab_study)
- study-021-030: 10 cards (vocab_study)
- study-031-040: 10 cards (vocab_study)
- study-041-050: 10 cards (vocab_study)
- study-051-060: 10 cards (vocab_study)
- study-061-070: 10 cards (vocab_study)
- study-071-080: 10 cards (vocab_study)
- study-081-090: 10 cards (vocab_study)
- study-091-100: 10 cards (vocab_study)
- study-101-110: 10 cards (vocab_study)
- study-111-120: 10 cards (vocab_study)
- study-121-124: 4 cards (vocab_study)

## DETERMINISTISKĀ VALIDĀCIJA

| Pārbaude | Rezultāts |
|---|---|
| Strukturālā parity | FAIL |
| DE READ-ONLY integritāte | FAIL |
| Tehniskā kontrole | PASS |
| Ārvalodu atlikumi | FAIL |
| sectionAccents | FAIL |
| ID/order | FAIL |
| Mirror/parity (data/www) | PASS |
| Syntax | PASS |
| Unexpected production changes | PASS (0) |

**Deterministisko atradumu skaits:** 85

## LINGVISTISKĀ VALIDĀCIJA

| Metrika | Vērtība |
|---|---|
| Luna modelis | gpt-5.6-luna |
| Lingvistiski auditēti | 702/702 |
| Lingvistisko atradumu skaits | 591 |
| API pieprasījumi | 25 |
| Tokeni | 343277 |

## STUDY / COMPARISON STUDY VALIDĀCIJA

- standardStudy: 124
- comparisonStudy: 0
- Study struktūras problēmas: 0

## SECTIONACCENTS VALIDĀCIJA (REAL FINDINGS)

- sectionAccents atradumi: 0
- Statuss: FAIL
- REAL linguistic findings: 0

## FOREIGN REMNANTS

- Atradumi: 28
- Statuss: FAIL

## FINDINGS

### CRITICAL (36)

### Finding 1: a1-es

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-es
- **Field:** entry[167].study.info[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Český “es” = vācu “ich”
- **DE source:** es
- **LV reference:** tas
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[167].study.info[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 2: a1-es

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-es
- **Field:** entry[167].study.info[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vācu “es” = tas • Tā • Bezpersoniska forma
- **DE source:** es
- **LV reference:** tas
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[167].study.info[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 3: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** entry[172].study.important.example
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Vācu valodā viens un tas pats darbības vārds bieži nozīmē: braukt • Vest • Aizvest atkarībā no konteksta.
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Foreign remnant (LV_DIACRITIC, LV_WORD) in entry[172].study.important.example
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 4: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** entry[172].study.accents.green[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Transportlīdzekli
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[172].study.accents.green[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 5: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** entry[172].study.accents.green[5]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Velosipēdu
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[172].study.accents.green[5]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 6: a1-in

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-in
- **Field:** entry[295].study.sectionAccents.examples[0].lv.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Berlīnē
- **DE source:** in
- **LV reference:** iekšā • uz
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[295].study.sectionAccents.examples[0].lv.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 7: a1-in

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-in
- **Field:** entry[295].study.sectionAccents.important[0].purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** Berlīnē
- **DE source:** in
- **LV reference:** iekšā • uz
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[295].study.sectionAccents.important[0].purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 8: a1-land

- **Dataset:** a1
- **Batch:** 351-400
- **Card/Index:** a1-land
- **Field:** entry[351].study.sectionAccents.comparison[3].meaning.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** planēta
- **DE source:** Land
- **LV reference:** valsts • zeme
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[351].study.sectionAccents.comparison[3].meaning.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 9: a1-sitzen

- **Dataset:** a1
- **Batch:** 551-600
- **Card/Index:** a1-sitzen
- **Field:** entry[558].study.sectionAccents.explanation.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēdēt
- **DE source:** sitzen
- **LV reference:** sēdēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[558].study.sectionAccents.explanation.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 10: a1-sitzen

- **Dataset:** a1
- **Batch:** 551-600
- **Card/Index:** a1-sitzen
- **Field:** entry[558].study.sectionAccents.explanation.purple[1]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēž
- **DE source:** sitzen
- **LV reference:** sēdēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[558].study.sectionAccents.explanation.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 11: a1-sitzen

- **Dataset:** a1
- **Batch:** 551-600
- **Card/Index:** a1-sitzen
- **Field:** entry[558].study.sectionAccents.comparison[0].meaning.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēdēt
- **DE source:** sitzen
- **LV reference:** sēdēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[558].study.sectionAccents.comparison[0].meaning.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 12: a1-stehen

- **Dataset:** a1
- **Batch:** 551-600
- **Card/Index:** a1-stehen
- **Field:** entry[576].study.sectionAccents.comparison[1].meaning.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** sēdēt
- **DE source:** stehen
- **LV reference:** stāvēt
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[576].study.sectionAccents.comparison[1].meaning.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 13: a1-über

- **Dataset:** a1
- **Batch:** 601-650
- **Card/Index:** a1-über
- **Field:** entry[608].study.sectionAccents.tip.left.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** tēma
- **DE source:** über
- **LV reference:** virs • par
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[608].study.sectionAccents.tip.left.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 14: a1-essen

- **Dataset:** a1
- **Batch:** 651-700
- **Card/Index:** a1-essen
- **Field:** entry[690].study.sectionAccents.explanation.purple[0]
- **Severity:** CRITICAL
- **Status:** FINDING
- **Current CS text:** ēst
- **DE source:** essen
- **LV reference:** ēst
- **Problem:** Foreign remnant (LV_DIACRITIC) in entry[690].study.sectionAccents.explanation.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 15: a1-Baum-74

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Baum-74
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Strom
- **DE source:** Baum
- **LV reference:** koks
- **Problem:** Význam je správný, ale český text je shodný s návrhem; původní text však obsahuje německý význam strom. 
- **Recommended CS:** Strom
- **Rationale:** Luna linguistic audit (high confidence)

### Finding 16: a1-bedeuten-75

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-bedeuten-75
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Střední
- **DE source:** bedeuten
- **LV reference:** nozīmēt
- **Problem:** Střední znamená německy mittel; bedeuten znamená znamenat.
- **Recommended CS:** Znamenat
- **Rationale:** Luna linguistic audit (high confidence)

### Finding 17: a1-Buch-116

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Buch-116
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Rezervovat
- **DE source:** Buch
- **LV reference:** grāmata
- **Problem:** Rezervovat znamená buchen; Buch znamená kniha.
- **Recommended CS:** Kniha
- **Rationale:** Luna linguistic audit (high confidence)

### Finding 18: a1-Erde-164

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Erde-164
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Přistát
- **DE source:** Erde
- **LV reference:** zeme
- **Problem:** „Přistát“ je sloveso; německé „Erde“ znamená „země“ nebo „Země“.
- **Recommended CS:** Země
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 19: a1-März-396

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-März-396
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Pochod
- **DE source:** März
- **LV reference:** marts
- **Problem:** „März“ je měsíc březen; „pochod“ má v češtině jiný význam.
- **Recommended CS:** Březen
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 20: a1-bitte

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-bitte
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** ["Hlavní myšlenka: Zdvořilé slovo s malými písmeny. Byl jsem zdvořilý - prosím.","Bitte znamená hlavně: zdvořilost.","Často popisuje: zdvořilé slovo.","Bitte znamená především: požadavek/žádost.","Často charakterizováno: podstatné jméno (zemřít).","Bitte s malým písmenem je zdvořilé slovo - znamená prosím (Bitte schön!, Eine Tasse Kaffee, bitte).","Die Bitte s velkým písmenem a členem die je podstatné jméno - znamená žádost nebo žádost (Ich habe eine Bitte = mám žádost).","Množné číslo: zemřít pokousán."]
- **DE source:** bitte / die Bitte
- **LV reference:** lūdzu
- **Problem:** Text obsahuje strojový překlad, nesmyslné výrazy „zemřít“ a „pokousán“ i významové chyby.
- **Recommended CS:** ["Bitte s malým písmenem je zdvořilostní výraz a znamená prosím.","Die Bitte s velkým písmenem a členem die je podstatné jméno a znamená prosba nebo žádost.","Množné číslo je die Bitten."]
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 21: a1-bitte-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-bitte-study
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** ["Hlavní myšlenka: Podstatné jméno se členem zemřít a velkým písmenem. Konkrétní požadavek nebo požadavek.","Die Bitte znamená hlavně: zdvořilost.","Často popisuje: zdvořilé slovo.","Die Bitte v podstatě znamená: žádost/žádost.","Často charakterizováno: podstatné jméno (zemřít).","Bitte s malým písmenem je zdvořilé slovo - znamená prosím (Bitte schön!, Eine Tasse Kaffee, bitte).","Die Bitte s velkým písmenem a členem die je podstatné jméno - znamená žádost nebo žádost (Ich habe eine Bitte = mám žádost).","Množné číslo: zemřít pokousán."]
- **DE source:** die Bitte / bitte
- **LV reference:** lūgums
- **Problem:** Vysvětlení je převzato z chybného strojového překladu a zaměňuje podstatné jméno se zdvořilostním výrazem.
- **Recommended CS:** ["Die Bitte je podstatné jméno ženského rodu se členem die a znamená prosba nebo žádost.","Píše se s velkým písmenem.","Množné číslo je die Bitten.","Pozor: malé bitte znamená prosím."]
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 22: a1-das

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-das
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Neuter určitý člen
- **DE source:** das
- **LV reference:** vidus dzimtes noteiktais artikuls
- **Problem:** Obsahuje anglické slovo „Neuter“; český název má být plně česky.
- **Recommended CS:** Určitý člen středního rodu
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 23: a1-die

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-die
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Používá se s podstatnými jmény ženského rodu. V některých větách může „umřít“ fungovat také jako zájmeno nebo vztažné zájmeno.
- **DE source:** die
- **LV reference:** Dažos teikumos “die” var darboties arī kā vietniekvārds vai relatīvais vietniekvārds.
- **Problem:** „Umřít“ je chybný překlad slova die a mění význam celé věty.
- **Recommended CS:** Používá se s podstatnými jmény ženského rodu. V některých větách může „die“ fungovat také jako zájmeno nebo vztažné zájmeno.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 24: a1-die

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-die
- **Field:** study.important[1]
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Množné číslo kostky se také používá pro všechna pohlaví.
- **DE source:** die
- **LV reference:** Daudzskaitlī die lieto arī visām dzimtēm.
- **Problem:** „Kostky“ a „pohlaví“ jsou chybné překlady; správně jde o člen die a gramatické rody.
- **Recommended CS:** V množném čísle se die používá pro všechny rody.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 25: a1-es

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-es
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Německé „já“ není zvyklé mluvit o sobě. Používá se k označení: to, to nebo neosobní tvar (počasí, čas, různé neosobní věty).
- **DE source:** es
- **LV reference:** tas • bezpersoniska forma
- **Problem:** Text chybně označuje es jako německé „já“ a opakuje překlad „to“.
- **Recommended CS:** Německé „es“ neznamená „já“. Používá se pro „to“ nebo jako neosobní podoba ve větách o počasí, čase a dalších neosobních dějích.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 26: a1-es

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-es
- **Field:** study.info[0]
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Český “es” = vācu “ich”
- **DE source:** es
- **LV reference:** Latviešu “es” = vācu “ich”
- **Problem:** Obsahuje lotyšské a německé výrazy místo českého překladu a navíc chybný tvar „českýé“.
- **Recommended CS:** Lotyšské „es“ = německé „ich“
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 27: a1-heißen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-heißen
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Být nazýván • Podlý
- **DE source:** heißen
- **LV reference:** saukties
- **Problem:** „Podlý“ je zcela nesouvisející význam a „být nazýván“ není vhodný krátký český ekvivalent pro A1.
- **Recommended CS:** Jmenovat se • Znamenat
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 28: a1-heißen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-heißen
- **Field:** study.comparison[2].meaning
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Střední
- **DE source:** bedeuten
- **LV reference:** nozīmēt
- **Problem:** bedeuten znamená „znamenat“; „střední“ je chybný a nesouvisející překlad.
- **Recommended CS:** Znamenat
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 29: a1-laden-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-laden-study
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Nakupovat
- **DE source:** Laden
- **LV reference:** veikals
- **Problem:** Velké písmeno u Laden označuje podstatné jméno „obchod“, nikoli sloveso nakupovat.
- **Recommended CS:** Obchod
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 30: a1-legen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-legen
- **Field:** study.explanation[3]
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Na úrovni A1 je nejdůležitější rozdíl: legen = ležet, liegen = ležet.
- **DE source:** legen / liegen
- **LV reference:** legen = nolikt, liegen = atrasties guļus.
- **Problem:** Obě slovesa jsou přeložena stejně; legen označuje děj položení, liegen stav ležení.
- **Recommended CS:** Na úrovni A1 je nejdůležitější rozdíl: legen = položit, liegen = ležet.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 31: a1-schauen-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-schauen-study
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Hodinky
- **DE source:** schauen
- **LV reference:** skatīties
- **Problem:** „Hodinky“ znamená wristwatch; jde o zcela nesprávný překlad slovesa schauen.
- **Recommended CS:** Dívat se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 32: a1-schauen-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-schauen-study
- **Field:** study.comparison[0].meaning
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Sledovat (aktivně)
- **DE source:** schauen
- **LV reference:** skatīties (aktīvi)
- **Problem:** „Sledovat“ není vždy ekvivalentní schauen; základní A1 význam je „dívat se“.
- **Recommended CS:** Dívat se (aktivně)
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 33: a1-sehen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-sehen
- **Field:** study.comparison[1].meaning
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Hodinky
- **DE source:** schauen
- **LV reference:** skatīties
- **Problem:** „Hodinky“ je chybný překlad způsobený záměnou schauen s podstatným jménem.
- **Recommended CS:** Dívat se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 34: a1-sich

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-sich
- **Field:** study.explanation[1]
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** V češtině se často překládá jako já nebo já.
- **DE source:** sich
- **LV reference:** sevi vai sev
- **Problem:** Text uvádí nesprávné osobní zájmeno „já“ místo českého reflexiva.
- **Recommended CS:** V češtině se často překládá jako se, sebe nebo sobě podle pádu.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 35: a1-sollen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-sollen
- **Field:** study.important[0]
- **Severity:** CRITICAL
- **Status:** ORTHOGRAPHY
- **Current CS text:** Byl soll ich machen? je velmi častá věta.
- **DE source:** Was soll ich machen?
- **LV reference:** Was soll ich machen? ir ļoti bieža frāze.
- **Problem:** Český text obsahuje zásadní překlep a deformuje německou frázi.
- **Recommended CS:** Was soll ich machen? je velmi častá věta.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 36: a1-fernsehen-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-fernsehen-study
- **Field:** study.important[0]
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Essen je dělitelné: sehen + kapradina.
- **DE source:** Fernsehen
- **LV reference:** sehen + fern
- **Problem:** „Kapradina“ is a mistranslation of German fern and teaches the wrong word.
- **Recommended CS:** Fernsehen je dělitelné: sehen + fern.
- **Rationale:** Luna linguistic audit (1 confidence)


### HIGH (371)

### Finding 1: a1-Balkon-70

- **Dataset:** a1
- **Batch:** 051-100
- **Card/Index:** a1-Balkon-70
- **Field:** lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Balkón
- **DE source:** Balkon
- **LV reference:** balkons
- **Problem:** Foreign language remnant in main translation: PL_CHAR
- **Recommended CS:** (Czech replacement needed)
- **Rationale:** Must be Czech only in CS fields

### Finding 2: a1-Balkon-70

- **Dataset:** a1
- **Batch:** 051-100
- **Card/Index:** a1-Balkon-70
- **Field:** entry[70].lv
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Balkón
- **DE source:** Balkon
- **LV reference:** balkons
- **Problem:** Foreign remnant (PL_CHAR) in entry[70].lv
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 3: a1-Besuch-87

- **Dataset:** a1
- **Batch:** 051-100
- **Card/Index:** a1-Besuch-87
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** Besuch
- **LV reference:** apmeklējums
- **Problem:** Missing fields vs LV: study, study.id, study.layout, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.tip.text, study.important
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 4: a1-Besuch-87

- **Dataset:** a1
- **Batch:** 051-100
- **Card/Index:** a1-Besuch-87
- **Field:** study.layout
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (none)
- **DE source:** Besuch
- **LV reference:** standardStudy
- **Problem:** Study layout mismatch: LV has standardStudy, CS has none
- **Recommended CS:** standardStudy
- **Rationale:** Study card must mirror LV layout

### Finding 5: a1-Besuch-87

- **Dataset:** a1
- **Batch:** 051-100
- **Card/Index:** a1-Besuch-87
- **Field:** study
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (no study)
- **DE source:** Besuch
- **LV reference:** apmeklējums
- **Problem:** LV has study card but CS entry lacks study object
- **Recommended CS:** Add Czech study card matching LV structure
- **Rationale:** STUDY_CARD_RULES — study parity required

### Finding 6: a1-besuchen-89

- **Dataset:** a1
- **Batch:** 051-100
- **Card/Index:** a1-besuchen-89
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** besuchen
- **LV reference:** apmeklēt
- **Problem:** Missing fields vs LV: study, study.id, study.layout, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.tip.text, study.important
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 7: a1-besuchen-89

- **Dataset:** a1
- **Batch:** 051-100
- **Card/Index:** a1-besuchen-89
- **Field:** study.layout
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (none)
- **DE source:** besuchen
- **LV reference:** standardStudy
- **Problem:** Study layout mismatch: LV has standardStudy, CS has none
- **Recommended CS:** standardStudy
- **Rationale:** Study card must mirror LV layout

### Finding 8: a1-besuchen-89

- **Dataset:** a1
- **Batch:** 051-100
- **Card/Index:** a1-besuchen-89
- **Field:** study
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (no study)
- **DE source:** besuchen
- **LV reference:** apmeklēt
- **Problem:** LV has study card but CS entry lacks study object
- **Recommended CS:** Add Czech study card matching LV structure
- **Rationale:** STUDY_CARD_RULES — study parity required

### Finding 9: a1-bitte

- **Dataset:** a1
- **Batch:** 051-100
- **Card/Index:** a1-bitte
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** bitte
- **LV reference:** lūdzu
- **Problem:** Missing fields vs LV: study.comparison, study.tip.text
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 10: a1-bitte-study

- **Dataset:** a1
- **Batch:** 051-100
- **Card/Index:** a1-bitte-study
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** Bitte
- **LV reference:** lūgums
- **Problem:** Missing fields vs LV: study.comparison, study.tip.text
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 11: a1-ein

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-ein
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** ein
- **LV reference:** nenoteiktais artikuls
- **Problem:** Missing fields vs LV: study.comparison
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 12: a1-es

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-es
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** es
- **LV reference:** tas
- **Problem:** Missing fields vs LV: study.comparison
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 13: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** entry[172].study.accents.purple[0]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Braukt
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Foreign remnant (LV_WORD) in entry[172].study.accents.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 14: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** entry[172].study.accents.purple[2]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Vest
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Foreign remnant (LV_WORD) in entry[172].study.accents.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 15: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** entry[172].study.accents.purple[4]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Aizvest
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Foreign remnant (LV_WORD) in entry[172].study.accents.purple[4]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 16: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** entry[172].study.sectionAccents.explanation.purple[1]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** vest
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Foreign remnant (LV_WORD) in entry[172].study.sectionAccents.explanation.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 17: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** entry[172].study.sectionAccents.important[0].text.purple[0]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** braukt
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Foreign remnant (LV_WORD) in entry[172].study.sectionAccents.important[0].text.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 18: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** entry[172].study.sectionAccents.important[0].example.purple[0]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** braukt
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Foreign remnant (LV_WORD) in entry[172].study.sectionAccents.important[0].example.purple[0]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 19: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** entry[172].study.sectionAccents.important[0].example.purple[1]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** vest
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Foreign remnant (LV_WORD) in entry[172].study.sectionAccents.important[0].example.purple[1]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 20: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** entry[172].study.sectionAccents.important[0].example.purple[2]
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** aizvest
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Foreign remnant (LV_WORD) in entry[172].study.sectionAccents.important[0].example.purple[2]
- **Recommended CS:** (Czech text required)
- **Rationale:** CS field must not contain LV/PL/SK contamination

### Finding 21: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** vest
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** LV remnant "vest" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 22: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** braukt
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** LV remnant "braukt" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 23: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** aizvest
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** LV remnant "aizvest" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text

### Finding 24: a1-Wochenende-181

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-Wochenende-181
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** Wochenende
- **LV reference:** nedēļas nogale
- **Problem:** Missing fields vs LV: de_plural
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 25: a1-Frühstück-207

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-Frühstück-207
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** Frühstück
- **LV reference:** brokastis
- **Problem:** Missing fields vs LV: de_plural
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 26: a1-Fußball-218

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-Fußball-218
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** Fußball
- **LV reference:** futbols
- **Problem:** Missing fields vs LV: study, study.id, study.layout, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 27: a1-Fußball-218

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-Fußball-218
- **Field:** study.layout
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (none)
- **DE source:** Fußball
- **LV reference:** standardStudy
- **Problem:** Study layout mismatch: LV has standardStudy, CS has none
- **Recommended CS:** standardStudy
- **Rationale:** Study card must mirror LV layout

### Finding 28: a1-Fußball-218

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-Fußball-218
- **Field:** study
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (no study)
- **DE source:** Fußball
- **LV reference:** futbols
- **Problem:** LV has study card but CS entry lacks study object
- **Recommended CS:** Add Czech study card matching LV structure
- **Rationale:** STUDY_CARD_RULES — study parity required

### Finding 29: a1-ganz-219

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-ganz-219
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** ganz
- **LV reference:** vesels
- **Problem:** Missing fields vs LV: study, study.id, study.layout, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 30: a1-ganz-219

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-ganz-219
- **Field:** study.layout
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (none)
- **DE source:** ganz
- **LV reference:** standardStudy
- **Problem:** Study layout mismatch: LV has standardStudy, CS has none
- **Recommended CS:** standardStudy
- **Rationale:** Study card must mirror LV layout

### Finding 31: a1-ganz-219

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-ganz-219
- **Field:** study
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (no study)
- **DE source:** ganz
- **LV reference:** vesels
- **Problem:** LV has study card but CS entry lacks study object
- **Recommended CS:** Add Czech study card matching LV structure
- **Rationale:** STUDY_CARD_RULES — study parity required

### Finding 32: a1-gefallen-225

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-gefallen-225
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** gefallen
- **LV reference:** patikt
- **Problem:** Missing fields vs LV: study, study.id, study.layout, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 33: a1-gefallen-225

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-gefallen-225
- **Field:** study.layout
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (none)
- **DE source:** gefallen
- **LV reference:** standardStudy
- **Problem:** Study layout mismatch: LV has standardStudy, CS has none
- **Recommended CS:** standardStudy
- **Rationale:** Study card must mirror LV layout

### Finding 34: a1-gefallen-225

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-gefallen-225
- **Field:** study
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (no study)
- **DE source:** gefallen
- **LV reference:** patikt
- **Problem:** LV has study card but CS entry lacks study object
- **Recommended CS:** Add Czech study card matching LV structure
- **Rationale:** STUDY_CARD_RULES — study parity required

### Finding 35: a1-Geschichte-233

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-Geschichte-233
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** Geschichte
- **LV reference:** stāsts
- **Problem:** Missing fields vs LV: study, study.id, study.layout, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 36: a1-Geschichte-233

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-Geschichte-233
- **Field:** study.layout
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (none)
- **DE source:** Geschichte
- **LV reference:** standardStudy
- **Problem:** Study layout mismatch: LV has standardStudy, CS has none
- **Recommended CS:** standardStudy
- **Rationale:** Study card must mirror LV layout

### Finding 37: a1-Geschichte-233

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-Geschichte-233
- **Field:** study
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (no study)
- **DE source:** Geschichte
- **LV reference:** stāsts
- **Problem:** LV has study card but CS entry lacks study object
- **Recommended CS:** Add Czech study card matching LV structure
- **Rationale:** STUDY_CARD_RULES — study parity required

### Finding 38: a1-Geschwister-234

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-Geschwister-234
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** Geschwister
- **LV reference:** brāļi un māsas
- **Problem:** Missing fields vs LV: study, study.id, study.layout, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 39: a1-Geschwister-234

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-Geschwister-234
- **Field:** study.layout
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (none)
- **DE source:** Geschwister
- **LV reference:** standardStudy
- **Problem:** Study layout mismatch: LV has standardStudy, CS has none
- **Recommended CS:** standardStudy
- **Rationale:** Study card must mirror LV layout

### Finding 40: a1-Geschwister-234

- **Dataset:** a1
- **Batch:** 201-250
- **Card/Index:** a1-Geschwister-234
- **Field:** study
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (no study)
- **DE source:** Geschwister
- **LV reference:** brāļi un māsas
- **Problem:** LV has study card but CS entry lacks study object
- **Recommended CS:** Add Czech study card matching LV structure
- **Rationale:** STUDY_CARD_RULES — study parity required

### Finding 41: a1-Großeltern-251

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-Großeltern-251
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** Großeltern
- **LV reference:** vecvecāki
- **Problem:** Missing fields vs LV: study, study.id, study.layout, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 42: a1-Großeltern-251

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-Großeltern-251
- **Field:** study.layout
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (none)
- **DE source:** Großeltern
- **LV reference:** standardStudy
- **Problem:** Study layout mismatch: LV has standardStudy, CS has none
- **Recommended CS:** standardStudy
- **Rationale:** Study card must mirror LV layout

### Finding 43: a1-Großeltern-251

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-Großeltern-251
- **Field:** study
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (no study)
- **DE source:** Großeltern
- **LV reference:** vecvecāki
- **Problem:** LV has study card but CS entry lacks study object
- **Recommended CS:** Add Czech study card matching LV structure
- **Rationale:** STUDY_CARD_RULES — study parity required

### Finding 44: a1-Hand-267

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-Hand-267
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** Hand
- **LV reference:** plauksta
- **Problem:** Missing fields vs LV: study, study.id, study.layout, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.important
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 45: a1-Hand-267

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-Hand-267
- **Field:** study.layout
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (none)
- **DE source:** Hand
- **LV reference:** standardStudy
- **Problem:** Study layout mismatch: LV has standardStudy, CS has none
- **Recommended CS:** standardStudy
- **Rationale:** Study card must mirror LV layout

### Finding 46: a1-Hand-267

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-Hand-267
- **Field:** study
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (no study)
- **DE source:** Hand
- **LV reference:** plauksta
- **Problem:** LV has study card but CS entry lacks study object
- **Recommended CS:** Add Czech study card matching LV structure
- **Rationale:** STUDY_CARD_RULES — study parity required

### Finding 47: a1-hübsch-288

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-hübsch-288
- **Field:** structure
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (missing fields)
- **DE source:** hübsch
- **LV reference:** glīts
- **Problem:** Missing fields vs LV: study, study.id, study.layout, study.translation, study.explanation, study.examples, study.comparison, study.tip, study.tip.text, study.important
- **Recommended CS:** Restore parity with LV structure
- **Rationale:** APP_QUALITY_STANDARD structural parity

### Finding 48: a1-hübsch-288

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-hübsch-288
- **Field:** study.layout
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (none)
- **DE source:** hübsch
- **LV reference:** standardStudy
- **Problem:** Study layout mismatch: LV has standardStudy, CS has none
- **Recommended CS:** standardStudy
- **Rationale:** Study card must mirror LV layout

### Finding 49: a1-hübsch-288

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-hübsch-288
- **Field:** study
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** (no study)
- **DE source:** hübsch
- **LV reference:** glīts
- **Problem:** LV has study card but CS entry lacks study object
- **Recommended CS:** Add Czech study card matching LV structure
- **Rationale:** STUDY_CARD_RULES — study parity required

### Finding 50: a1-in

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-in
- **Field:** study.sectionAccents
- **Severity:** HIGH
- **Status:** FINDING
- **Current CS text:** Berlīnē
- **DE source:** in
- **LV reference:** iekšā • uz
- **Problem:** LV remnant "Berlīnē" in sectionAccents
- **Recommended CS:** (Czech term from section text)
- **Rationale:** STUDY_CARD_RULES — accents must match Czech text


_... un vēl 321 HIGH atradumi (skat. reports/temp/cs-a1-audit/)._


### MEDIUM (230)

### Finding 1: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** vest
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Accent term "vest" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 2: a1-fahren

- **Dataset:** a1
- **Batch:** 151-200
- **Card/Index:** a1-fahren
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** auto
- **DE source:** fahren
- **LV reference:** braukt
- **Problem:** Accent term "auto" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 3: a1-in

- **Dataset:** a1
- **Batch:** 251-300
- **Card/Index:** a1-in
- **Field:** study.sectionAccents.important
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** Berlīnē
- **DE source:** in
- **LV reference:** iekšā • uz
- **Problem:** Accent term "Berlīnē" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 4: a1-sitzen

- **Dataset:** a1
- **Batch:** 551-600
- **Card/Index:** a1-sitzen
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** sēdēt
- **DE source:** sitzen
- **LV reference:** sēdēt
- **Problem:** Accent term "sēdēt" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 5: a1-sitzen

- **Dataset:** a1
- **Batch:** 551-600
- **Card/Index:** a1-sitzen
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** sēž
- **DE source:** sitzen
- **LV reference:** sēdēt
- **Problem:** Accent term "sēž" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 6: a1-über

- **Dataset:** a1
- **Batch:** 601-650
- **Card/Index:** a1-über
- **Field:** study.sectionAccents.tip
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** tēma
- **DE source:** über
- **LV reference:** virs • par
- **Problem:** Accent term "tēma" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 7: a1-essen

- **Dataset:** a1
- **Batch:** 651-700
- **Card/Index:** a1-essen
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** ēst
- **DE source:** essen
- **LV reference:** ēst
- **Problem:** Accent term "ēst" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 8: a1-essen

- **Dataset:** a1
- **Batch:** 651-700
- **Card/Index:** a1-essen
- **Field:** study.sectionAccents.explanation
- **Severity:** MEDIUM
- **Status:** FINDING
- **Current CS text:** esse
- **DE source:** essen
- **LV reference:** ēst
- **Problem:** Accent term "esse" not found in section text
- **Recommended CS:** (term matching Czech section text)
- **Rationale:** STUDY_CARD_RULES — stale/wrong accent

### Finding 9: a1-beide-79

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-beide-79
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Obě
- **DE source:** beide
- **LV reference:** abi
- **Problem:** Obě platí jen pro ženský rod; beide se podle rodu překládá jako oba nebo obě.
- **Recommended CS:** Oba • Obě
- **Rationale:** Luna linguistic audit (high confidence)

### Finding 10: a1-bekommen-82

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-bekommen-82
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Přijímat
- **DE source:** bekommen
- **LV reference:** saņemt
- **Problem:** Bekommen znamená dostat nebo obdržet; přijímat je nedokonavé a často znamená aktivně přijímat.
- **Recommended CS:** Dostat
- **Rationale:** Luna linguistic audit (high confidence)

### Finding 11: a1-Blatt-99

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Blatt-99
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Strana
- **DE source:** Blatt
- **LV reference:** lapa
- **Problem:** Strana znamená page; Blatt je především list, například list papíru nebo list stromu.
- **Recommended CS:** List
- **Rationale:** Luna linguistic audit (high confidence)

### Finding 12: a1-Butterbrot-112

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Butterbrot-112
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Sendvič
- **DE source:** Butterbrot
- **LV reference:** sviestmaize
- **Problem:** Butterbrot je chléb s máslem; sendvič je obecnější a obvykle obsahuje náplň mezi dvěma plátky.
- **Recommended CS:** Chleba s máslem
- **Rationale:** Luna linguistic audit (high confidence)

### Finding 13: a1-danken-127

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-danken-127
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Poděkovat
- **DE source:** danken
- **LV reference:** pateikties
- **Problem:** Německé „danken“ je nedokonavé; „poděkovat“ je dokonavý český protějšek.
- **Recommended CS:** Děkovat
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 14: a1-dürfen-150

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-dürfen-150
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** NATURALNESS
- **Current CS text:** Být dovoleno
- **DE source:** dürfen
- **LV reference:** drīkstēt
- **Problem:** „Dürfen“ je modální sloveso; přirozený český infinitiv je „smět“, ne opis „být dovoleno“.
- **Recommended CS:** Smět
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 15: a1-euer-171

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-euer-171
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Vaše
- **DE source:** euer
- **LV reference:** jūsu
- **Problem:** „Euer“ je neformální množné „váš“; „vaše“ je jen jeden z rodových tvarů a může znamenat vykání.
- **Recommended CS:** Váš
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 16: a1-Fernseher-182

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Fernseher-182
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Televize
- **DE source:** Fernseher
- **LV reference:** televizors
- **Problem:** Televize znamená televize jako médium; německé Fernseher označuje televizní přijímač.
- **Recommended CS:** Televizor
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 17: a1-fragen-197

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-fragen-197
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Zeptat se
- **DE source:** fragen
- **LV reference:** jautāt
- **Problem:** Zeptat se je dokonavé; německé fragen odpovídá nedokonavému ptát se.
- **Recommended CS:** Ptát se
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 18: a1-Gast-222

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Gast-222
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Hostem
- **DE source:** Gast
- **LV reference:** viesis
- **Problem:** Hostem je instrumentál; heslo Gast vyžaduje základní tvar podstatného jména Host.
- **Recommended CS:** Host
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 19: a1-geboren-224

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-geboren-224
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Se narodil
- **DE source:** geboren
- **LV reference:** dzimis
- **Problem:** Se narodil je rodově omezená slovesná věta; geboren je participiální přídavné jméno „narozený“.
- **Recommended CS:** Narozený
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 20: a1-gefallen-225

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-gefallen-225
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Mít rád
- **DE source:** gefallen
- **LV reference:** patikt
- **Problem:** Gefallen znamená „líbit se“; mít rád vyjadřuje spíše německé mögen.
- **Recommended CS:** Líbit se
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 21: a1-gegen-226

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-gegen-226
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Vs
- **DE source:** gegen
- **LV reference:** pret
- **Problem:** Vs. znamená „versus“; základní český překlad předložky gegen je proti.
- **Recommended CS:** Proti
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 22: a1-Geschwister-234

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Geschwister-234
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Bratři a sestry
- **DE source:** Geschwister
- **LV reference:** brāļi un māsas
- **Problem:** Německé Geschwister znamená sourozenci obecně; aktuální výraz může nesprávně implikovat přítomnost bratrů i sester.
- **Recommended CS:** Sourozenci
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 23: a1-Getränk-239

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Getränk-239
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Drink
- **DE source:** Getränk
- **LV reference:** dzēriens
- **Problem:** Drink v češtině obvykle označuje míchaný či alkoholický nápoj, zatímco Getränk znamená nápoj obecně.
- **Recommended CS:** Nápoj
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 24: a1-grau-249

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-grau-249
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Šedá
- **DE source:** grau
- **LV reference:** pelēks
- **Problem:** Šedá je ženský rod; základní tvar přídavného jména má být mužský rod šedý.
- **Recommended CS:** Šedý
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 25: a1-hübsch-288

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-hübsch-288
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Úhledný • Pěkný
- **DE source:** hübsch
- **LV reference:** glīts
- **Problem:** Úhledný znamená upravený či uspořádaný, ne hübsch ve smyslu hezký nebo pěkný.
- **Recommended CS:** Hezký • Pěkný
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 26: a1-jawohl-299

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-jawohl-299
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Přesně tak
- **DE source:** jawohl
- **LV reference:** tieši tā
- **Problem:** Jawohl je důrazné „ano“ nebo „jistě“, ne pouze „přesně tak“.
- **Recommended CS:** Ano, jistě
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 27: a1-jeder-300

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-jeder-300
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Každý z nich
- **DE source:** jeder
- **LV reference:** katrs
- **Problem:** „Z nich“ přidává významovou informaci, která v německém slově jeder není.
- **Recommended CS:** Každý
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 28: a1-Lampe-350

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Lampe-350
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Svítilna
- **DE source:** Lampe
- **LV reference:** lampa
- **Problem:** „Svítilna“ obvykle znamená ruční svítidlo nebo baterku; německé Lampe je „lampa“.
- **Recommended CS:** Lampa
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 29: a1-lecker-361

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-lecker-361
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Vynikající
- **DE source:** lecker
- **LV reference:** gards
- **Problem:** „Vynikající“ znamená excellent; německé „lecker“ označuje především chutné jídlo.
- **Recommended CS:** Chutný
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 30: a1-nass-431

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-nass-431
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Mokré
- **DE source:** nass
- **LV reference:** slapjš
- **Problem:** Mokré je neutrální tvar; jako samostatné heslo má být český slovníkový tvar mokrý.
- **Recommended CS:** Mokrý
- **Rationale:** Luna linguistic audit (0.98 confidence)


_... un vēl 200 MEDIUM atradumi (skat. reports/temp/cs-a1-audit/)._


### LOW (39)

### Finding 1: a1-Hand-267

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Hand-267
- **Field:** csText
- **Severity:** LOW
- **Status:** SEMANTICS
- **Current CS text:** Ruka (dlaň)
- **DE source:** Hand
- **LV reference:** plauksta
- **Problem:** Hand znamená ruka; dlaň je pouze její část a v této kartě zbytečně zužuje význam.
- **Recommended CS:** Ruka
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 2: a1-aber

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-aber
- **Field:** study.explanation
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Často znamená „ale“, „nicméně“ nebo „ale“.
- **DE source:** aber
- **LV reference:** bet, tomēr, taču
- **Problem:** Význam „ale“ je uveden dvakrát; poslední ekvivalent má být „však“.
- **Recommended CS:** Často znamená „ale“, „nicméně“ nebo „však“.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 3: a1-also

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-also
- **Field:** study.explanation
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Znamená „proto“, „proto“.
- **DE source:** also
- **LV reference:** tātad • līdz ar to
- **Problem:** Definice opakuje stejný ekvivalent a neuvádí přirozené české protějšky pro tento význam.
- **Recommended CS:** Znamená „tedy“, „takže“ nebo „tudíž“.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 4: a1-auf

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-auf
- **Field:** study.comparison[1].meaning
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Na (svislý povrch)
- **DE source:** an
- **LV reference:** pie vertikālas virsmas
- **Problem:** Česká vazba je neúplná a pádově neodpovídá popisu umístění u svislé plochy.
- **Recommended CS:** Na svislém povrchu
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 5: a1-aus

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-aus
- **Field:** study.examples[0].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Jsem z německa.
- **DE source:** Ich komme aus Deutschland.
- **LV reference:** es esmu no Vācijas.
- **Problem:** Název státu Německo se v češtině píše s velkým písmenem.
- **Recommended CS:** Jsem z Německa.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 6: a1-aus

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-aus
- **Field:** study.comparison[0].meaning
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Zevnitř, zevnitř
- **DE source:** aus
- **LV reference:** no iekšienes, ārā no
- **Problem:** Text opakuje stejný význam a chybí mu přirozené vyjádření směru ven.
- **Recommended CS:** Zevnitř • Ven z
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 7: a1-aufs

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-aufs
- **Field:** study.examples[0].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Jdu na střechu
- **DE source:** Ich gehe aufs Dach.
- **LV reference:** Es eju uz jumta.
- **Problem:** Věta v českém studijním textu postrádá koncovou interpunkci.
- **Recommended CS:** Jdu na střechu.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 8: a1-bitte

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-bitte
- **Field:** study.examples[3].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Mohu se prosím zeptat
- **DE source:** Kann ich bitte fragen?
- **LV reference:** —
- **Problem:** Překladu chybí koncové otazníkové znaménko.
- **Recommended CS:** Mohu se prosím zeptat?
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 9: a1-da

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-da
- **Field:** study.comparison[0].meaning
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Tam • Zde • Zde (obecně)
- **DE source:** da
- **LV reference:** tur • te • šeit (vispārīgi)
- **Problem:** Duplicitní „zde“ neodlišuje prostorový význam od směrového použití.
- **Recommended CS:** Tam • Zde • Sem (obecně)
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 10: a1-der

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-der
- **Field:** study.translation
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Mužský rod určitý člen
- **DE source:** der
- **LV reference:** vīriešu dzimtes noteiktais artikuls
- **Problem:** Přirozenější český slovosled pro označení gramatického pojmu.
- **Recommended CS:** Určitý člen mužského rodu
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 11: a1-die

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-die
- **Field:** study.translation
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Ženský určitý člen
- **DE source:** die
- **LV reference:** sieviešu dzimtes noteiktais artikuls
- **Problem:** Přirozenější český slovosled pro gramatické označení.
- **Recommended CS:** Určitý člen ženského rodu
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 12: a1-fahren

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-fahren
- **Field:** study.comparison[0].meaning
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Jezdit transportem
- **DE source:** fahren
- **LV reference:** braukt ar transportu
- **Problem:** „Jezdit transportem“ je v češtině nepřirozená kolokace.
- **Recommended CS:** Jezdit dopravním prostředkem
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 13: a1-fuer

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-fuer
- **Field:** study.examples[2].lv
- **Severity:** LOW
- **Status:** ASPECT
- **Current CS text:** Koupím dárek pro maminku.
- **DE source:** Ich kaufe ein Geschenk für meine Mutter.
- **LV reference:** es pērku dāvanu savai mātei.
- **Problem:** Přítomný čas kaufe je přeložen budoucím dokonavým „koupím“ místo nedokonavého „kupuji“.
- **Recommended CS:** Kupuji dárek pro maminku.
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 14: a1-geben

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-geben
- **Field:** study.comparison[1].meaning
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Vzít / vzít
- **DE source:** nehmen
- **LV reference:** ņemt / paņemt
- **Problem:** Oba české ekvivalenty jsou stejné; druhý význam má být odlišen nedokonavým „brát“.
- **Recommended CS:** Vzít / brát
- **Rationale:** Luna linguistic audit (0.91 confidence)

### Finding 15: a1-gleich

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-gleich
- **Field:** study.tip[0]
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Za chvíli (za chvíli) → hned.
- **DE source:** gleich
- **LV reference:** pēc brīža → tūlīt
- **Problem:** Zbytečné opakování v závorce působí jako redakční chyba.
- **Recommended CS:** Za chvíli → hned.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 16: a1-heißen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-heißen
- **Field:** study.comparison[3].meaning
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Volat / volat
- **DE source:** rufen
- **LV reference:** saukt • pasaukt
- **Problem:** Oba české ekvivalenty jsou stejné a nerozlišují obecný a dokonavý význam.
- **Recommended CS:** Volat / zavolat
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 17: a1-hoeren-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-hoeren-study
- **Field:** study.examples[2].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Slyším tě
- **DE source:** Ich höre dich.
- **LV reference:** es tevi dzirdu.
- **Problem:** Chybí koncová tečka.
- **Recommended CS:** Slyším tě.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 18: a1-leise-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-leise-study
- **Field:** study.examples[1].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Prosím buď zticha
- **DE source:** Bitte sei leise.
- **LV reference:** lūdzu, esi kluss
- **Problem:** Chybí čárka po oslovení ve funkci příslovečného výrazu a koncová tečka.
- **Recommended CS:** Prosím, buď zticha.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 19: a1-leise-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-leise-study
- **Field:** study.examples[3].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Prosím mluv potichu.
- **DE source:** Sprich bitte leise.
- **LV reference:** lūdzu, runā klusi.
- **Problem:** Po úvodním výrazu „Prosím“ je v této větě vhodná čárka.
- **Recommended CS:** Prosím, mluv potichu.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 20: a1-liegen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-liegen
- **Field:** study.comparison[2].meaning
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Stát / stát
- **DE source:** stehen
- **LV reference:** stāvēt / atrasties stāvus
- **Problem:** Význam je omylem zopakován; druhá část má vysvětlit svislou polohu.
- **Recommended CS:** Stát / nacházet se ve svislé poloze
- **Rationale:** Luna linguistic audit (0.99 confidence)


_... un vēl 19 LOW atradumi._


## DE_SOURCE_ISSUES

_Nav DE_SOURCE_ISSUE atradumu._


## STRUCTURAL_OWNER_REVIEW

_Nav NEEDS_OWNER_REVIEW atradumu._


## FALSE POSITIVES

_Nav dokumentētu FALSE_POSITIVE._

## GALA STATUSS

- 100% datasets auditēts: **JĀ**
- Neauditēti objekti: 0
- Audits pilnīgs: **NĒ (daļējs)**
- Production dati mainīti: **NĒ (0 izmaiņu)**
- DE READ-ONLY: **FAIL**

---

_Audita datums: 2026-08-11_
_Režīms: READ-ONLY — nekādas production izmaiņas_
_Pagaidu artefakti: reports/temp/cs-a1-post-repair-audit_

# CS–DE A1 FULL AUDIT

## KOPSAVILKUMS

- Dataset: A1
- Audit mode: READ-ONLY
- Total objects: 702
- Audited objects: 702
- Coverage: 100%
- Batch size: 50
- Batch count: 15
- CRITICAL: 29
- HIGH: 387
- MEDIUM: 227
- LOW: 43
- SOURCE_DE_ISSUE: 0
- NEEDS_OWNER_REVIEW: 0
- FALSE_POSITIVE: 0
- Production changes: 0
- DE changes: 0
- Other-language changes: 0

## DETERMINISTISKĀ VALIDĀCIJA

| Pārbaude | Rezultāts |
|---|---|
| Strukturālā parity | FAIL |
| DE READ-ONLY integritāte | FAIL |
| Tehniskā kontrole | PASS |
| Ārvalodu atlikumi | FAIL |
| sectionAccents | FAIL |
| data/www sinhronizācija | PASS |
| JS sintakse | PASS |

**Deterministisko atradumu skaits:** 85

## LINGVISTISKĀ VALIDĀCIJA

| Metrika | Vērtība |
|---|---|
| Luna modelis | gpt-5.6-luna |
| Lingvistiski auditēti | 702/702 |
| Lingvistisko atradumu skaits | 595 |
| API pieprasījumi | 25 |
| Tokeni | 343542 |

## STUDY / COMPARISON STUDY VALIDĀCIJA

- standardStudy: 124
- comparisonStudy: 0
- Study struktūras problēmas: 0

## SECTIONACCENTS VALIDĀCIJA

- sectionAccents atradumi: 0
- Statuss: FAIL

## FINDINGS

### CRITICAL (29)

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

### Finding 15: a1-Erde-164

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Erde-164
- **Field:** csText
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Přistát
- **DE source:** Erde
- **LV reference:** zeme
- **Problem:** „Přistát“ je sloveso; německé „Erde“ znamená země nebo planeta Země.
- **Recommended CS:** Země
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 16: a1-bitte

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-bitte
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Hlavní myšlenka: Zdvořilé slovo s malými písmeny. Byl jsem zdvořilý - prosím.
- **DE source:** bitte
- **LV reference:** lūdzu
- **Problem:** Vysvětlení obsahuje nesrozumitelné strojové formulace, chybný rod i chybné výrazy.
- **Recommended CS:** Bitte s malým písmenem je zdvořilostní slovo znamenající „prosím“. Die Bitte s velkým písmenem je podstatné jméno a znamená „prosba“ nebo „žádost“.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 17: a1-bitte-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-bitte-study
- **Field:** study.explanation
- **Severity:** CRITICAL
- **Status:** GRAMMAR
- **Current CS text:** Hlavní myšlenka: Podstatné jméno se členem zemřít a velkým písmenem. Konkrétní požadavek nebo požadavek.
- **DE source:** Bitte
- **LV reference:** lūgums
- **Problem:** Vysvětlení obsahuje chybný překlad členu, opakování a nepřirozené strojové formulace.
- **Recommended CS:** Die Bitte je podstatné jméno ženského rodu se členem die a znamená prosbu nebo žádost. Množné číslo je die Bitten.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 18: a1-gut-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-gut-study
- **Field:** study.explanation[0]
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Hlavní myšlenka: střevo je přídavné jméno/příslovce – dobrý, úspěšný, v pořádku.
- **DE source:** gut
- **LV reference:** gut ir īpašības/apstākļa vārds
- **Problem:** Střevo je doslovný chybný překlad anglického významu gut jako orgánu, ne německého slova gut.
- **Recommended CS:** Hlavní myšlenka: gut je přídavné jméno nebo příslovce – dobrý, dobře, úspěšný nebo v pořádku.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 19: a1-gut-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-gut-study
- **Field:** study.tip[0]
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Střevo bez článku je přídavné jméno/příslovce – dobrý/dobře.
- **DE source:** gut
- **LV reference:** gut bez artikula ir īpašības/apstākļa vārds
- **Problem:** Střevo je nesprávný překlad slova gut.
- **Recommended CS:** Gut bez členu je přídavné jméno nebo příslovce – dobrý/dobře.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 20: a1-gut-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-gut-study
- **Field:** study.important[0]
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Střevo = dobrý/dobře (přídavné jméno/přívlastek).
- **DE source:** gut
- **LV reference:** gut = labs/labi
- **Problem:** Opakuje se chybný překlad gut jako střevo.
- **Recommended CS:** Gut = dobrý/dobře (přídavné jméno nebo příslovce).
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 21: a1-heißen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-heißen
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Být nazýván • Podlý
- **DE source:** heißen
- **LV reference:** saukties
- **Problem:** Podlý je zcela nesouvisející význam; heißen může znamenat jmenovat se nebo znamenat.
- **Recommended CS:** Jmenovat se • Znamenat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 22: a1-heißen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-heißen
- **Field:** study.comparison[2].meaning
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Střední
- **DE source:** bedeuten
- **LV reference:** nozīmēt
- **Problem:** Střední je chybný překlad a nesouvisí se slovesem bedeuten.
- **Recommended CS:** Znamenat
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 23: a1-schauen-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-schauen-study
- **Field:** study.translation
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Hodinky
- **DE source:** schauen
- **LV reference:** skatīties
- **Problem:** Hodinky jsou podstatné jméno s významem wristwatch; německé schauen znamená dívat se.
- **Recommended CS:** Dívat se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 24: a1-schauen-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-schauen-study
- **Field:** study.comparison[1].meaning
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Hodinky
- **DE source:** schauen
- **LV reference:** skatīties (aktīvi)
- **Problem:** Význam srovnávaného slovesa je přeložen jako hodinky místo českého slovesa dívat se.
- **Recommended CS:** Dívat se (aktivně)
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 25: a1-sehen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-sehen
- **Field:** study.comparison[1].meaning
- **Severity:** CRITICAL
- **Status:** TRANSLATION
- **Current CS text:** Hodinky
- **DE source:** schauen
- **LV reference:** skatīties
- **Problem:** Hodinky jsou nesouvisející podstatné jméno; schauen znamená dívat se nebo sledovat.
- **Recommended CS:** Dívat se
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 26: a1-sollen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-sollen
- **Field:** study.important[0]
- **Severity:** CRITICAL
- **Status:** ORTHOGRAPHY
- **Current CS text:** Byl soll ich machen? je velmi častá věta.
- **DE source:** Was soll ich machen?
- **LV reference:** Was soll ich machen? ir ļoti bieža frāze.
- **Problem:** Text obsahuje závažný překlep a chybnou německou frázi, která znemožňuje studium správného vzoru.
- **Recommended CS:** Was soll ich machen? je velmi častá věta.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 27: a1-verstehen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-verstehen
- **Field:** study.explanation[2]
- **Severity:** CRITICAL
- **Status:** SECTIONACCENTS_LANGUAGE
- **Current CS text:** Lotyšštinu zde většinou nemusíte „umět“ ani „učit“ • Jsou častěji können.
- **DE source:** Ich kann Deutsch sprechen.
- **LV reference:** es protu runāt vāciski.
- **Problem:** Text obsahuje nesouvisející Lotyšsko, chybnou formulaci a středník, přestože Learning First vyžaduje tečku nebo odrážku.
- **Recommended CS:** Češtinu zde většinou nemusíte „umět“ ani „učit“; pro schopnost něco dělat se častěji používá können.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 28: a1-essen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-essen
- **Field:** study.explanation[4]
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Essen v podstatě znamená: jídlo nebo jídlo.
- **DE source:** essen
- **LV reference:** essen galvenokārt nozīmē pārtika vai maltīte
- **Problem:** Výklad zaměňuje sloveso essen s podstatným jménem das Essen a obsahuje nesmyslné opakování.
- **Recommended CS:** Das Essen může znamenat jídlo nebo celé jídlo.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 29: a1-essen-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-essen-study
- **Field:** study.explanation[1]
- **Severity:** CRITICAL
- **Status:** SEMANTICS
- **Current CS text:** Das Essen znamená především: konzumovat jídlo.
- **DE source:** das Essen
- **LV reference:** das Essen galvenokārt nozīmē pārtika vai maltīte
- **Problem:** Význam konzumovat jídlo patří slovesu essen, ne podstatnému jménu das Essen.
- **Recommended CS:** Das Essen znamená především jídlo nebo celé jídlo.
- **Rationale:** Luna linguistic audit (0.99 confidence)


### HIGH (387)

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


_... un vēl 337 HIGH atradumi (skat. reports/temp/cs-a1-audit/)._


### MEDIUM (227)

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

### Finding 9: a1-Arm-44

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Arm-44
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Ruka
- **DE source:** Arm
- **LV reference:** roka
- **Problem:** Německé „Arm“ označuje paži; české „ruka“ běžně označuje také ruku jako dlaň a prsty.
- **Recommended CS:** Paže
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 10: a1-aufstehen-52

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-aufstehen-52
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Postavit se
- **DE source:** aufstehen
- **LV reference:** piecelties
- **Problem:** „Aufstehen“ znamená vstát, zejména z postele nebo ze sedu; „postavit se“ znamená zaujmout stojící polohu.
- **Recommended CS:** Vstát
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 11: a1-beide-79

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-beide-79
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Obě
- **DE source:** beide
- **LV reference:** abi
- **Problem:** Obě je pouze ženský nebo střední rod; beide zahrnuje i mužský rod oba.
- **Recommended CS:** Oba • Obě
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 12: a1-bekommen-82

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-bekommen-82
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Přijímat
- **DE source:** bekommen
- **LV reference:** saņemt
- **Problem:** Přijímat znamená spíše přijímat něco opakovaně; bekommen se běžně překládá jako dostat.
- **Recommended CS:** Dostat
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 13: a1-Blatt-99

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Blatt-99
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Strana
- **DE source:** Blatt
- **LV reference:** lapa
- **Problem:** Strana znamená page, zatímco Blatt označuje list nebo papírový arch; významy se nemají zaměňovat.
- **Recommended CS:** List • Stránka
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 14: a1-Butterbrot-112

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Butterbrot-112
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Sendvič
- **DE source:** Butterbrot
- **LV reference:** sviestmaize
- **Problem:** Butterbrot je chléb s máslem; sendvič je širší a odlišný pojem.
- **Recommended CS:** Chléb s máslem
- **Rationale:** Luna linguistic audit (0.91 confidence)

### Finding 15: a1-danken-127

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-danken-127
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Poděkovat
- **DE source:** danken
- **LV reference:** pateikties
- **Problem:** Německé „danken“ je nedokonavé; „poděkovat“ vyjadřuje jednorázové dokončené poděkování.
- **Recommended CS:** Děkovat
- **Rationale:** Luna linguistic audit (0.92 confidence)

### Finding 16: a1-dürfen-150

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-dürfen-150
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** TRANSLATION
- **Current CS text:** Být dovoleno
- **DE source:** dürfen
- **LV reference:** drīkstēt
- **Problem:** „Být dovoleno“ je opisné a méně přirozené; základní český ekvivalent modálního slovesa je „smět“.
- **Recommended CS:** Smět
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 17: a1-Ecke-152

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Ecke-152
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Rohu
- **DE source:** Ecke
- **LV reference:** stūris
- **Problem:** „Rohu“ je tvar ve 2., 3. nebo 6. pádě; jako slovníkový tvar německého podstatného jména má být „roh“.
- **Recommended CS:** Roh
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 18: a1-Fernseher-182

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Fernseher-182
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Televize
- **DE source:** Fernseher
- **LV reference:** televizors
- **Problem:** „Fernseher“ označuje televizní přijímač; „televize“ spíše označuje médium nebo vysílání.
- **Recommended CS:** Televizor
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 19: a1-fragen-197

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-fragen-197
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Zeptat se
- **DE source:** fragen
- **LV reference:** jautāt
- **Problem:** „Fragen“ je nedokonavé sloveso; „zeptat se“ je dokonavé a znamená jednorázově se zeptat.
- **Recommended CS:** Ptát se
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 20: a1-geboren-224

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-geboren-224
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Se narodil
- **DE source:** geboren
- **LV reference:** dzimis
- **Problem:** „Geboren“ je příčestné přídavné jméno; „se narodil“ je osobní slovesná fráze v mužském rodě.
- **Recommended CS:** Narozený
- **Rationale:** Luna linguistic audit (0.95 confidence)

### Finding 21: a1-gern-232

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-gern-232
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Ochotně
- **DE source:** gern
- **LV reference:** labprāt
- **Problem:** „Gern“ se v základním významu překládá „rád“; „ochotně“ znamená spíše willingness nebo willingness to act.
- **Recommended CS:** Rád
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 22: a1-Glas-241

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Glas-241
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Sklenici
- **DE source:** Glas
- **LV reference:** glāze
- **Problem:** „Sklenici“ je akuzativ; jako samostatné heslo má být nominativ „sklenice“.
- **Recommended CS:** Sklenice
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 23: a1-grau-249

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-grau-249
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Šedá
- **DE source:** grau
- **LV reference:** pelēks
- **Problem:** „Šedá“ je ženský rod; neoznačený český tvar přídavného jména je „šedý“.
- **Recommended CS:** Šedý
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 24: a1-grüßen-257

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-grüßen-257
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Pozdravit
- **DE source:** grüßen
- **LV reference:** sveicināt
- **Problem:** „Pozdravit“ je dokonavé; obecný německý význam lépe odpovídá nedokonavému „zdravit“.
- **Recommended CS:** Zdravit
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 25: a1-Handschuh-268

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Handschuh-268
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Rukavici
- **DE source:** Handschuh
- **LV reference:** cimds
- **Problem:** „Rukavici“ je akuzativ nebo dativ; základní český tvar je nominativ „rukavice“.
- **Recommended CS:** Rukavice
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 26: a1-heiraten-274

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-heiraten-274
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Oženit se
- **DE source:** heiraten
- **LV reference:** precēties
- **Problem:** „Oženit se“ se vztahuje jen na muže; německé heiraten je rodově neutrální.
- **Recommended CS:** Brát se
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 27: a1-helfen-277

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-helfen-277
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Pomoci
- **DE source:** helfen
- **LV reference:** palīdzēt
- **Problem:** „Pomoci“ je dokonavé; obecný nedokonavý význam helfen odpovídá „pomáhat“.
- **Recommended CS:** Pomáhat
- **Rationale:** Luna linguistic audit (0.96 confidence)

### Finding 28: a1-Hemd-278

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-Hemd-278
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** GRAMMAR
- **Current CS text:** Košili
- **DE source:** Hemd
- **LV reference:** krekls
- **Problem:** „Košili“ je akuzativ; jako samostatné heslo má být nominativ „košile“.
- **Recommended CS:** Košile
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 29: a1-jawohl-299

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-jawohl-299
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Přesně tak
- **DE source:** jawohl
- **LV reference:** tieši tā
- **Problem:** „Jawohl“ je důrazné ano/potvrzení, nikoli doslovné „přesně tak“.
- **Recommended CS:** Ano, jistě
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 30: a1-jeder-300

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-jeder-300
- **Field:** csText
- **Severity:** MEDIUM
- **Status:** SEMANTICS
- **Current CS text:** Každý z nich
- **DE source:** jeder
- **LV reference:** katrs
- **Problem:** „Každý z nich“ nesprávně přidává význam konkrétní skupiny; německé jeder znamená obecně „každý“.
- **Recommended CS:** Každý
- **Rationale:** Luna linguistic audit (0.98 confidence)


_... un vēl 197 MEDIUM atradumi (skat. reports/temp/cs-a1-audit/)._


### LOW (43)

### Finding 1: a1-eins-156

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-eins-156
- **Field:** csText
- **Severity:** LOW
- **Status:** TRANSLATION
- **Current CS text:** Jeden
- **DE source:** eins
- **LV reference:** viens
- **Problem:** Samostatné německé číslovce „eins“ se v češtině běžně uvádí jako „jedna“; „jeden“ je rodově mužský tvar.
- **Recommended CS:** Jedna
- **Rationale:** Luna linguistic audit (0.86 confidence)

### Finding 2: a1-mein-401

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-mein-401
- **Field:** csText
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Moje
- **DE source:** mein
- **LV reference:** mans
- **Problem:** Samostatný základní tvar „mein“ se v češtině standardně uvádí jako „můj“; „moje“ je jen rodový tvar.
- **Recommended CS:** Můj
- **Rationale:** Luna linguistic audit (0.88 confidence)

### Finding 3: a1-sprechen-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-sprechen-study
- **Field:** study.explanation[2]
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Často charakterizováno: jazykem/konverzací.
- **DE source:** sprechen
- **LV reference:** Bieži raksturo: valodu/sarunu.
- **Problem:** Věta je gramaticky neúplná a nepřirozená; chybí sloveso a vazba není v češtině běžná.
- **Recommended CS:** Často se používá v souvislosti s jazykem nebo konverzací.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 4: a1-sprechen-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-sprechen-study
- **Field:** study.tip[1]
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Používá sprechen, když kontext vyhovuje tomuto významu.
- **DE source:** sprechen
- **LV reference:** Izmanto sprechen, kad konteksts atbilst šai nozīmei.
- **Problem:** Chybí zvratné „se“ a původní formulace je pro výukový text nepřirozená.
- **Recommended CS:** Slovo „sprechen“ používejte, když kontext odpovídá tomuto významu.
- **Rationale:** Luna linguistic audit (0.97 confidence)

### Finding 5: a1-klein-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-klein-study
- **Field:** study.explanation[0]
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Hlavní myšlenka: Malá velikostí nebo rozsahem.
- **DE source:** klein
- **LV reference:** klein nozīmē mazs izmērā, apjomā vai vecumā.
- **Problem:** Přídavné jméno musí být v mužském rodě podle nevyjádřeného „význam“ nebo je vhodné použít podstatné jméno.
- **Recommended CS:** Hlavní myšlenka: Malý velikostí nebo rozsahem.
- **Rationale:** Luna linguistic audit (0.9 confidence)

### Finding 6: a1-an

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-an
- **Field:** study.explanation
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Používá se, když je něco blízko zdi, okna, dveří, řeky, mořského pobřeží nebo jiného okraje/povrchu.
- **DE source:** an
- **LV reference:** pie sienas, loga, durvīm, upes vai malas
- **Problem:** „Blízko zdi“ je méně přesné než běžné české „u stěny“ a „okraj/povrch“ je stylisticky neobratné.
- **Recommended CS:** Používá se, když je něco u stěny, okna, dveří, řeky, mořského pobřeží nebo jiné hrany či plochy.
- **Rationale:** Luna linguistic audit (0.93 confidence)

### Finding 7: a1-aber

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-aber
- **Field:** study.comparison[0].meaning
- **Severity:** LOW
- **Status:** SEMANTICS
- **Current CS text:** Opak • Námitka • Nicméně
- **DE source:** aber
- **LV reference:** pretstats • iebilde • tomēr
- **Problem:** „Aber“ obvykle uvádí protiklad, ne „opak“ jako samostatný význam.
- **Recommended CS:** Protiklad • Námitka • Nicméně
- **Rationale:** Luna linguistic audit (0.94 confidence)

### Finding 8: a1-aus

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-aus
- **Field:** study.examples[0].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Jsem z německa.
- **DE source:** Ich komme aus Deutschland.
- **LV reference:** es esmu no Vācijas.
- **Problem:** Název státu se v češtině píše s velkým počátečním písmenem.
- **Recommended CS:** Jsem z Německa.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 9: a1-aus

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-aus
- **Field:** study.comparison[0].meaning
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Zevnitř, zevnitř
- **DE source:** aus
- **LV reference:** no iekšienes, ārā no
- **Problem:** Význam je dvakrát zopakován; česká formulace je redundantní.
- **Recommended CS:** Zevnitř • z vnitřku
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 10: a1-dieser

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-dieser
- **Field:** study.important[0]
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Dieser, diese a dieses se mění podle pohlaví.
- **DE source:** dieser, diese, dieses
- **LV reference:** mainās pēc dzimtes.
- **Problem:** V českém gramatickém kontextu se používá termín „rod“, nikoli „pohlaví“.
- **Recommended CS:** Dieser, diese a dieses se mění podle rodu.
- **Rationale:** Luna linguistic audit (0.99 confidence)

### Finding 11: a1-etwas

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-etwas
- **Field:** study.tip.text
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** Pamatujte: věc → něco • Stupeň → mírně.
- **DE source:** etwas
- **LV reference:** pakāpe → nedaudz.
- **Problem:** „Mírně“ je zde méně přirozené; běžný český ekvivalent je „trochu“.
- **Recommended CS:** Pamatujte: věc → něco • Míra → trochu.
- **Rationale:** Luna linguistic audit (0.98 confidence)

### Finding 12: a1-frau

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-frau
- **Field:** study.explanation[0]
- **Severity:** LOW
- **Status:** GRAMMAR
- **Current CS text:** Hlavní myšlenka: die Frau může znamenat ženu (pohlaví) nebo manželku (manželku).
- **DE source:** Frau
- **LV reference:** die Frau var nozīmēt sievieti vai sievu
- **Problem:** Závěrečné „(manželku)“ je nadbytečné opakování.
- **Recommended CS:** Hlavní myšlenka: die Frau může znamenat ženu (pohlaví) nebo manželku.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 13: a1-heißen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-heißen
- **Field:** study.examples[1].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Jak se jmenuješ
- **DE source:** Wie heißt du?
- **LV reference:** kā tevi sauc?
- **Problem:** Překladu chybí otazník.
- **Recommended CS:** Jak se jmenuješ?
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 14: a1-heißen

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-heißen
- **Field:** study.examples[3].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Co to znamená
- **DE source:** Was heißt das?
- **LV reference:** ko tas nozīmē?
- **Problem:** Překladu chybí otazník.
- **Recommended CS:** Co to znamená?
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 15: a1-hoeren-study

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
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 16: a1-hoeren-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-hoeren-study
- **Field:** fields[2].csText
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Slyším tě
- **DE source:** Ich höre dich.
- **LV reference:** es tevi dzirdu.
- **Problem:** Chybí koncová tečka v příkladové větě.
- **Recommended CS:** Slyším tě.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 17: a1-im

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-im
- **Field:** study.examples[0].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Jsem v parku
- **DE source:** Ich bin im Park.
- **LV reference:** es esmu parkā.
- **Problem:** Chybí koncová tečka.
- **Recommended CS:** Jsem v parku.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 18: a1-in

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-in
- **Field:** study.explanation[2]
- **Severity:** LOW
- **Status:** NATURALNESS
- **Current CS text:** S polohou se in často překládá jako v nebo v
- **DE source:** in
- **LV reference:** iekšā • uz
- **Problem:** Text obsahuje nesmyslné opakování předložky v.
- **Recommended CS:** Při označení polohy se in často překládá jako v nebo ve
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 19: a1-in

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-in
- **Field:** study.explanation[3]
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Českýý překlad se mění v závislosti na kontextu.
- **DE source:** in
- **LV reference:** iekšā • uz
- **Problem:** Slovo Českýý obsahuje překlep.
- **Recommended CS:** Český překlad se mění v závislosti na kontextu.
- **Rationale:** Luna linguistic audit (1 confidence)

### Finding 20: a1-leise-study

- **Dataset:** a1
- **Batch:** linguistic
- **Card/Index:** a1-leise-study
- **Field:** study.examples[1].lv
- **Severity:** LOW
- **Status:** ORTHOGRAPHY
- **Current CS text:** Prosím buď zticha
- **DE source:** Bitte sei leise.
- **LV reference:** lūdzu, esi kluss.
- **Problem:** Chybí čárka po Prosím a koncová tečka.
- **Recommended CS:** Prosím, buď zticha.
- **Rationale:** Luna linguistic audit (0.99 confidence)


_... un vēl 23 LOW atradumi._


## SOURCE_DE_ISSUES

_Nav SOURCE_DE_ISSUE atradumu._


## NEEDS_OWNER_REVIEW

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

_Audita datums: 2026-08-10_
_Režīms: READ-ONLY — nekādas production izmaiņas_
_Pagaidu artefakti: reports/temp/cs-a1-audit/_

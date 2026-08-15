# CS–DE Kurss Výslovnost — pilns audits

**Mode:** READ-ONLY (GPT-5.6 Luna + deterministic gates)
**Model:** GPT-5.6 Luna (`gpt-5.6-luna`)
**Production changes:** 0

## Coverage

| Metric | Value |
|--------|-------|
| Audited units / total | **321 / 321** |
| Coverage | **100%** |
| UI keys | 9 |
| Standalone vowels lesson units | 133 |
| Standalone consonants lesson units | 73 |
| Standalone example cards | 144 |
| Lesson legacy Výslovnost cards (L1–7) | 27 |
| Lesson structured items (L8–21) | 66 |

### Files

- `languages/cs/ui.js` (+ `www/` mirror)
- `data/cs/courseLessons.js` (+ `www/` mirror)
- `COURSE_LESSON_HTML.kurssPronunciationLesson`
- `COURSE_LESSON_HTML.kurssConsonantsLesson`
- Per-lesson `Výslovnost` / legacy accordion content

## Findings summary

| Severity | Count |
|----------|-------|
| CRITICAL | 6 |
| HIGH | 205 |
| MEDIUM | 54 |
| LOW | 3 |
| FALSE_POSITIVE | 5 |

### By category (top)

- FOREIGN_LEFTOVER: 132
- PHONETIC_ERROR: 33
- SEMANTIC_MISMATCH: 25
- PEDAGOGICAL_ISSUE: 25
- TRANSCRIPTION_ISSUE: 22
- CS_TERMINOLOGY: 12
- CS_ORTHOGRAPHY: 11
- CS_NATURALNESS: 3
- CS_GRAMMAR: 2
- MISLEADING_APPROXIMATION: 2
- CS_SEMANTIC_MISMATCH: 1

## Integrity gates

| Gate | Status |
|------|--------|
| Structural parity (CS ↔ LV MASTER) | PASS |
| DE READ-ONLY | PASS (0 changes) |
| LV MASTER READ-ONLY | PASS (0 changes) |
| primary ↔ www UI | PASS |
| primary ↔ www courseLessons | PASS |
| Functional / renderer | PASS |
| Mojibake sweep | 0 hits |
| Missing content | 0 |
| Foreign leftovers (deterministic) | 73 |

## Luna API

- Luna skipped

## Findings (detail)

### Finding 01 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssConsonantsLesson/section[3]/example[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssConsonantsLesson
- **Field:** section[3].example[0]
- **CURRENT:** "Spielen (špīlen) - hrát si"
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "spielen (špīlen) — spēlēt"
- **DE context:** "Spielen ( | len) - hr | t si"

### Finding 02 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson1/legacyVyslovnost/example[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson1
- **Field:** legacyHtml.Výslovnost.example[1]
- **CURRENT:** "Wir (člověk) - my. Ve slově wir ī se vždy vyslovuje dlouze."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Wir (vīr) — mēs. Vārdā wir ī izrunājams vienmēr gari."
- **DE context:** "Wir ( | lov | k) - my. Ve slov | wir  | se v"

### Finding 03 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson2/legacyVyslovnost/example[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson2
- **Field:** legacyHtml.Výslovnost.example[2]
- **CURRENT:** "Shluk souhlásek sp se vyslovuje jako šp: ​​spielen (špīlen)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen)."
- **DE context:** "Shluk souhl | sek sp se vyslovuje jako  | spielen ( | len)."

### Finding 04 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson7/legacyVyslovnost/example[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson7
- **Field:** legacyHtml.Výslovnost.example[1]
- **CURRENT:** "Sch se vyslovuje jako českýé š: die Schaufel (dī šaufel), die Schüssel (dī šūsel)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "sch izrunā kā latviešu š: die Schaufel (dī šaufel), die Schüssel (dī šūsel)."
- **DE context:** "Sch se vyslovuje jako  | esk | die Schaufel (d | aufel), die Schüssel (d | sel)."

### Finding 05 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson8/section[2]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson8
- **Field:** sections[2].items[1]
- **CURRENT:** "Ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER:** "ä vēl izrunā arī kā plato e, piemēram, vārdā der Gärtner (dēr gertner)."
- **DE context:** "Ä v | l izrun | ar | plato e, piem | ram, v"

### Finding 06 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson8/section[2]/item[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson8
- **Field:** sections[2].items[4]
- **CURRENT:** "SS izrunā kā s: grüßen (grüsen)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "ß izrunā kā s: grüßen (grüsen)."
- **DE context:** "SS izrun | grüßen (grüsen)."

### Finding 07 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson8/section[2]/item[5]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson8
- **Field:** sections[2].items[5]
- **CURRENT:** "Eu izrunā kā oi: deutlich (doitlich)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "eu izrunā kā oi: deutlich (doitlich)."
- **DE context:** "Eu izrun | oi | deutlich (doitlich)."

### Finding 08 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson10/section[2]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson10
- **Field:** sections[2].items[0]
- **CURRENT:** "Pareizi jāizrunā patskaņu pārkaņojumi."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Pareizi jāizrunā patskaņu pārkaņojumi."
- **DE context:** "Pareizi j | izrun | patska | u p | rka"

### Finding 09 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson10/section[2]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson10
- **Field:** sections[2].items[1]
- **CURRENT:** "Ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "ö izrunā ar apaļotām lūpām kā e: wir können, ihr könnt, sie können, der Löffel."
- **DE context:** "Ö izrun | ar apa | ot | m l | m k"

### Finding 10 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson10/section[2]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson10
- **Field:** sections[2].items[2]
- **CURRENT:** "Ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "ü izrunā ar apaļotām lūpām kā i: Müller (müller), Bücher (bücher)."
- **DE context:** "Ü izrun | ar apa | ot | m l | m k"

### Finding 11 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson10/section[2]/item[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson10
- **Field:** sections[2].items[3]
- **CURRENT:** "Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem."
- **DE context:** "Patska | u garums vai  | sums atkar | gs no sekojo | iem l"

### Finding 12 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson10/section[2]/item[5]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson10
- **Field:** sections[2].items[5]
- **CURRENT:** "Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_PHRASE)
- **LV MASTER:** "Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller."
- **DE context:** "Ja patskanim seko divi vai vair | ki l | dzska | i, patskani izrun | si"

### Finding 13 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson10/section[2]/item[6]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson10
- **Field:** sections[2].items[6]
- **CURRENT:** "Český valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER:** "Latviešu valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs."
- **DE context:** "esk | valodas o ir divskanis uo. V | cu o skan cit | di, piem | ram"

### Finding 14 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson10/section[2]/item[7]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson10
- **Field:** sections[2].items[7]
- **CURRENT:** "Pareizi izrunā: der Großvater (dēr grōsfāter)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Pareizi izrunā: der Großvater (dēr grōsfāter)."
- **DE context:** "Pareizi izrun | der Großvater (d | r gr | sf | ter)."

### Finding 15 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson10/section[2]/item[8]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson10
- **Field:** sections[2].items[8]
- **CURRENT:** "Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich)."
- **DE context:** "Divskani ei izrun | ai | seid (zait), fleißig (flai | ich)."

### Finding 16 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson10/section[2]/item[9]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson10
- **Field:** sections[2].items[9]
- **CURRENT:** "Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER:** "Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats."
- **DE context:** "cu e var b | aurs vai plats | der Lehrer (d | r l | rer). Celma "

### Finding 17 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson11/section[2]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson11
- **Field:** sections[2].items[0]
- **CURRENT:** "Eu izrunā kā oi: der Freund (dēr froint), neun (noin)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "eu izrunā kā oi: der Freund (dēr froint), neun (noin)."
- **DE context:** "Eu izrun | oi | der Freund (d | r froint), neun (noin)."

### Finding 18 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson11/section[2]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson11
- **Field:** sections[2].items[2]
- **CURRENT:** "Z izrunā kā český c: Franz (franc), das Zimmer (cimer)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer)."
- **DE context:** "Z izrun | esk | Franz (franc), das Zimmer (cimer)."

### Finding 19 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson12/section[2]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson12
- **Field:** sections[2].items[0]
- **CURRENT:** "X izrunā kā ks: Max (maks), Felix (feliks)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "x izrunā kā ks: Max (maks), Felix (feliks)."
- **DE context:** "X izrun | ks | Max (maks), Felix (feliks)."

### Finding 20 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson12/section[2]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson12
- **Field:** sections[2].items[1]
- **CURRENT:** "Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten)."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten)."
- **DE context:** "rdos Schwester, am jüngsten st izrun | latviski parasts st | Schwester ( | vester), jüngsten (jünksten)."

### Finding 21 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson12/section[2]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson12
- **Field:** sections[2].items[2]
- **CURRENT:** "H vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — garumzīme."
- **DE context:** "H v | rd | der Federhalter ir ska | a, kuru izrun | bet v"

### Finding 22 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson13/section[3]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[3].items[0]
- **CURRENT:** "H vārdā halten ir dzirdama skaņa."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "h vārdā halten ir dzirdama skaņa."
- **DE context:** "H v | rd | halten ir dzirdama ska | a."

### Finding 23 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson13/section[3]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[3].items[1]
- **CURRENT:** "H vārdā fahren rāda patskaņa garumu."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "h vārdā fahren rāda patskaņa garumu."
- **DE context:** "H v | rd | fahren r | da patska | a garumu."

### Finding 24 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson13/section[3]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[3].items[2]
- **CURRENT:** "A vārdā halten izrunā īsi: halten."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "a vārdā halten izrunā īsi: halten."
- **DE context:** "A v | rd | halten izrun | si | halten."

### Finding 25 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson13/section[3]/item[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[3].items[3]
- **CURRENT:** "A vārdā tragen izrunā gari: tragen."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "a vārdā tragen izrunā gari: tragen."
- **DE context:** "A v | rd | tragen izrun | gari | tragen."

### Finding 26 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson13/section[3]/item[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[3].items[4]
- **CURRENT:** "Äu izrunā kā oi: du läufst, er läuft."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "äu izrunā kā oi: du läufst, er läuft."
- **DE context:** "Äu izrun | oi | du läufst, er läuft."

### Finding 27 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson13/section[3]/item[5]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[3].items[5]
- **CURRENT:** "Pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt."
- **DE context:** "Pf v | rd | Kopf izrun | ka abus l | dzska"

### Finding 28 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson14/section[3]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson14
- **Field:** sections[3].items[0]
- **CURRENT:** "SS izrunā kā český s."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "ß izrunā kā latviešu s."
- **DE context:** "SS izrun | esk | s."

### Finding 29 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson14/section[3]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson14
- **Field:** sections[3].items[1]
- **CURRENT:** "SS raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss."
- **DE context:** "SS raksta v | rda vid | vai beig | s p | c gara patska"

### Finding 30 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson14/section[3]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson14
- **Field:** sections[3].items[2]
- **CURRENT:** "Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst."
- **DE context:** "Ja cit | s form | s ir ss, tad pirms galotnes var b | t ß | müssen, ich muss, du musst, ihr müsst."

### Finding 31 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson14/section[3]/item[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson14
- **Field:** sections[3].items[3]
- **CURRENT:** "Ö vārdā mögen izrunā kā skaidru ö skaņu."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "ö vārdā mögen izrunā kā skaidru ö skaņu."
- **DE context:** "Ö v | rd | mögen izrun | skaidru ö ska | u."

### Finding 32 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson14/section[3]/item[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson14
- **Field:** sections[3].items[4]
- **CURRENT:** "Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt."
- **DE context:** "Ja p | c g seko t, tad g izklaus | s tuv | k k ska | ai"

### Finding 33 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson14/section[3]/item[5]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson14
- **Field:** sections[3].items[5]
- **CURRENT:** "Līdzīgi arī český valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai."
- **DE context:** "dz | gi ar | esk | valod | rd"

### Finding 34 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson15/section[3]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson15
- **Field:** sections[3].items[0]
- **CURRENT:** "Ä vārdos Äpfel un schälen izrunā kā šauro e."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "ä vārdos Äpfel un schälen izrunā kā šauro e."
- **DE context:** "Ä v | rdos Äpfel un schälen izrun | auro e."

### Finding 35 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson15/section[3]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson15
- **Field:** sections[3].items[1]
- **CURRENT:** "Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_PHRASE)
- **LV MASTER:** "Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi."
- **DE context:** "rd | Äpfel ä izrun | si, jo p | c patska | a seko divi l"

### Finding 36 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson15/section[3]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson15
- **Field:** sections[3].items[2]
- **CURRENT:** "Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis."
- **DE context:** "rd | schälen ä izrun | gari, jo p | c patska | a seko viens l"

### Finding 37 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson15/section[3]/item[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson15
- **Field:** sections[3].items[3]
- **CURRENT:** "Vārdā gern e ir īss un plats."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā gern e ir īss un plats."
- **DE context:** "rd | gern e ir  | ss un plats."

### Finding 38 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson15/section[3]/item[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson15
- **Field:** sections[3].items[4]
- **CURRENT:** "Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER:** "Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif."
- **DE context:** "Atceries | divskanis ei v | cu valod | izrun | ai"

### Finding 39 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson16/section[3]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[3].items[0]
- **CURRENT:** "Vārdos wem, dem, den, der — e ir garš un šaurs."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdos wem, dem, den, der — e ir garš un šaurs."
- **DE context:** "rdos wem, dem, den, der  | e ir gar | un  | aurs."

### Finding 40 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson16/section[3]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[3].items[1]
- **CURRENT:** "Vārdā gehorchen h ir dzirdams: ge-hor-chen."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā gehorchen h ir dzirdams: ge-hor-chen."
- **DE context:** "rd | gehorchen h ir dzirdams | ge-hor-chen."

### Finding 41 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson16/section[3]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[3].items[2]
- **CURRENT:** "Die Wälder: ä izrunā kā šaurais īsais e."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "die Wälder: ä izrunā kā šaurais īsais e."
- **DE context:** "Die Wälder | izrun | aurais  | sais e."

### Finding 42 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson16/section[3]/item[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[3].items[3]
- **CURRENT:** "Die Bäuerinnen: äu izrunā kā oi."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "die Bäuerinnen: äu izrunā kā oi."
- **DE context:** "Die Bäuerinnen | u izrun | oi."

### Finding 43 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson16/section[3]/item[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[3].items[4]
- **CURRENT:** "-ie ir garā ī apzīmējums: die Wiese."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "-ie ir garā ī apzīmējums: die Wiese."
- **DE context:** "ie ir gar | apz | jums | die Wiese."

### Finding 44 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson17/section[3]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[3].items[0]
- **CURRENT:** "Vārdā werfen pirmais e ir plats: werfen."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā werfen pirmais e ir plats: werfen."
- **DE context:** "rd | werfen pirmais e ir plats | werfen."

### Finding 45 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson17/section[3]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[3].items[1]
- **CURRENT:** "Vārdā wieder e ir plats: wieder."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā wieder e ir plats: wieder."
- **DE context:** "rd | wieder e ir plats | wieder."

### Finding 46 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson17/section[3]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[3].items[2]
- **CURRENT:** "Vārdos wieder un die Diele ie apzīmē garo ī: wieder, die Diele."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdos wieder un die Diele ie apzīmē garo ī: wieder, die Diele."
- **DE context:** "rdos wieder un die Diele ie apz | garo  | wieder, die Diele."

### Finding 47 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson17/section[3]/item[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[3].items[3]
- **CURRENT:** "Vārdā der Spaten sp izrunā kā šp: der Spaten."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā der Spaten sp izrunā kā šp: der Spaten."
- **DE context:** "rd | der Spaten sp izrun | der Spaten."

### Finding 48 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson18/section[3]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[3].items[0]
- **CURRENT:** "Vārdā wohin h ir dzirdams: wo-hin."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā wohin h ir dzirdams: wo-hin."
- **DE context:** "rd | wohin h ir dzirdams | wo-hin."

### Finding 49 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson18/section[3]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[3].items[1]
- **CURRENT:** "Vārdā wo o ir garš: wo."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā wo o ir garš: wo."
- **DE context:** "rd | wo o ir gar | wo."

### Finding 50 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson19/section[3]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson19
- **Field:** sections[3].items[0]
- **CURRENT:** "Vārdā vor o izrunā gari."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā vor o izrunā gari."
- **DE context:** "rd | vor o izrun | gari."

### Finding 51 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson19/section[3]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson19
- **Field:** sections[3].items[1]
- **CURRENT:** "Vārdā hinter h ir dzirdams, un e ir plats."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā hinter h ir dzirdams, un e ir plats."
- **DE context:** "rd | hinter h ir dzirdams, un e ir plats."

### Finding 52 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson19/section[3]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson19
- **Field:** sections[3].items[2]
- **CURRENT:** "Vārdā der Stuhl: st izrunā kā št • H ir garuma zīme un netiek izrunāts."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_PHRASE)
- **LV MASTER:** "Vārdā der Stuhl: st izrunā kā št; h ir garuma zīme un netiek izrunāts."
- **DE context:** "rd | der Stuhl | st izrun | H ir garuma z | me un netiek izrun"

### Finding 53 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson19/section[3]/item[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson19
- **Field:** sections[3].items[3]
- **CURRENT:** "Vārdā der Strauch: st izrunā kā št."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā der Strauch: st izrunā kā št."
- **DE context:** "rd | der Strauch | st izrun | t."

### Finding 54 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson19/section[3]/item[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson19
- **Field:** sections[3].items[4]
- **CURRENT:** "Vārdā wachsen: ch izrunā kā k."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā wachsen: ch izrunā kā k."
- **DE context:** "rd | wachsen | ch izrun | k."

### Finding 55 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson20/section[3]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson20
- **Field:** sections[3].items[0]
- **CURRENT:** "Vārdos Stockwerk, Stein, Stadt, stecken: st izrunā kā št."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdos Stockwerk, Stein, Stadt, stecken: st izrunā kā št."
- **DE context:** "rdos Stockwerk, Stein, Stadt, stecken | st izrun | t."

### Finding 56 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson20/section[3]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson20
- **Field:** sections[3].items[1]
- **CURRENT:** "Vārdos der Ofen, der Boden: o ir garš."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdos der Ofen, der Boden: o ir garš."
- **DE context:** "rdos der Ofen, der Boden | o ir gar"

### Finding 57 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson20/section[3]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson20
- **Field:** sections[3].items[2]
- **CURRENT:** "Sch izrunā kā š: der Schornstein, der Mensch."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "sch izrunā kā š: der Schornstein, der Mensch."
- **DE context:** "Sch izrun | der Schornstein, der Mensch."

### Finding 58 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson20/section[3]/item[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson20
- **Field:** sections[3].items[3]
- **CURRENT:** "Vārdos das Haus, das Holz: h ir dzirdams un jāizrunā."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdos das Haus, das Holz: h ir dzirdams un jāizrunā."
- **DE context:** "rdos das Haus, das Holz | h ir dzirdams un j | izrun"

### Finding 59 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson20/section[3]/item[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson20
- **Field:** sections[3].items[4]
- **CURRENT:** "Vārdos die Wohnung, wohnen: h ir garuma zīme, to neizrunā."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdos die Wohnung, wohnen: h ir garuma zīme, to neizrunā."
- **DE context:** "rdos die Wohnung, wohnen | h ir garuma z | me, to neizrun"

### Finding 60 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson20/section[3]/item[5]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson20
- **Field:** sections[3].items[5]
- **CURRENT:** "Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-Laut."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER:** "Vārdos die Küche, die Dächer: ch izrunā kā “h” tipa skaņu, kā vācu ich-Laut."
- **DE context:** "rdos die Küche, die Dächer | ch izrun | tipa ska | u, k | cu ich-Laut."

### Finding 61 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson20/section[3]/item[6]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson20
- **Field:** sections[3].items[6]
- **CURRENT:** "Vārdā das Vorhaus: v izrunā kā f."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā das Vorhaus: v izrunā kā f."
- **DE context:** "rd | das Vorhaus | v izrun | f."

### Finding 62 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson21/section[3]/item[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson21
- **Field:** sections[3].items[0]
- **CURRENT:** "Vārdā die Axt: x izrunā kā ks."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā die Axt: x izrunā kā ks."
- **DE context:** "rd | die Axt | x izrun | ks."

### Finding 63 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson21/section[3]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson21
- **Field:** sections[3].items[1]
- **CURRENT:** "Vārdos arbeiten, das Beil, steigen: ei izrunā kā ai."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdos arbeiten, das Beil, steigen: ei izrunā kā ai."
- **DE context:** "rdos arbeiten, das Beil, steigen | ei izrun | ai."

### Finding 64 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson21/section[3]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson21
- **Field:** sections[3].items[2]
- **CURRENT:** "Vārdā die Scheune: eu izrunā kā oi."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā die Scheune: eu izrunā kā oi."
- **DE context:** "rd | die Scheune | eu izrun | oi."

### Finding 65 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssLesson21/section[3]/item[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson21
- **Field:** sections[3].items[3]
- **CURRENT:** "Vārdā die Brücke: ck izrunā kā dubultu k."
- **PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER:** "Vārdā die Brücke: ck izrunā kā dubultu k."
- **DE context:** "rd | die Brücke | ck izrun | dubultu k."

### Finding 66 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssPronunciationLesson/section[0]/example[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Teplý (varm) — teplý"
- **PROPOSED:** "Warm (varm) — teplý"
- **Reason:** Uživatelský text obsahuje lotyšské slovo „varm“ místo německého příkladu; český překlad je navíc duplicitně uveden jako „teplý — teplý“.
- **LV MASTER:** "warm (varm) — silts"
- **DE context:** "Tepl | varm)  | tepl"

### Finding 67 — HIGH / FOREIGN_LEFTOVER

- **ID:** kurssPronunciationLesson/section[0]/example[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Střevo (dostat) — dobrý"
- **PROPOSED:** "Gut (gút) — dobrý"
- **Reason:** „Střevo“ neodpovídá zamýšlenému německému slovu gut a „dostat“ je lotyšský cizí zbytek. Český význam je nesprávný.
- **LV MASTER:** "gut (gūt) — labs"
- **DE context:** "St | evo (dostat)  | dobr"

### Finding 68 — HIGH / SEMANTIC_MISMATCH

- **ID:** kurssPronunciationLesson/section[0]/example[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Střevo (dostat) — dobrý"
- **PROPOSED:** "Gut (gút) — dobrý"
- **Reason:** Německé gut znamená „dobrý“, nikoli „střevo“; současný text proto neposkytuje správný německý příklad dlouhé samohlásky.
- **LV MASTER:** "gut (gūt) — labs"
- **DE context:** "St | evo (dostat)  | dobr"

### Finding 69 — HIGH / PHONETIC_ERROR

- **ID:** kurssPronunciationLesson/section[0]/example[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Tat (tat) - práce / akce"
- **PROPOSED:** "Tat (tát) — čin / skutek"
- **Reason:** Tat má dlouhé /aː/, ale přepis „tat“ naznačuje krátké a. Aproximace je proto PEDAGOGICALLY_ACCEPTABLE pouze po označení délky; v současné podobě je pro začátečníka zavádějící.
- **LV MASTER:** "Tat (tāt) — darbs / rīcība"
- **DE context:** "Tat (tat) - pr | ce / akce"

### Finding 70 — MEDIUM / SEMANTIC_MISMATCH

- **ID:** kurssPronunciationLesson/section[0]/example[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Tat (tat) - práce / akce"
- **PROPOSED:** "Tat (tát) — čin / skutek"
- **Reason:** Tat znamená „čin“ nebo „skutek“, ne obecně „práce / akce“.
- **LV MASTER:** "Tat (tāt) — darbs / rīcība"
- **DE context:** "Tat (tat) - pr | ce / akce"

### Finding 71 — MEDIUM / TRANSCRIPTION_ISSUE

- **ID:** kurssPronunciationLesson/section[0]/example[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Weg (weg) - silnice"
- **PROPOSED:** "Weg (vék) — cesta"
- **Reason:** „weg“ není pro začátečníka jasný výslovnostní přepis: neoznačuje dlouhé /eː/ a může vést k výslovnosti německého g jako [g]. Vhodnější česká aproximace je „vék“. Aproximace současného zápisu je MISLEADING_APPROXIMATION.
- **LV MASTER:** "Weg (vēk) — ceļš"
- **DE context:** "Weg (weg) - silnice"

### Finding 72 — MEDIUM / SEMANTIC_MISMATCH

- **ID:** kurssPronunciationLesson/section[0]/example[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Weg (weg) - silnice"
- **PROPOSED:** "Weg (vék) — cesta"
- **Reason:** Weg znamená „cesta“, nikoli přesně „silnice“.
- **LV MASTER:** "Weg (vēk) — ceļš"
- **DE context:** "Weg (weg) - silnice"

### Finding 73 — MEDIUM / PEDAGOGICAL_ISSUE

- **ID:** kurssPronunciationLesson/section[0]/example[7]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Schlaf - spánek"
- **PROPOSED:** "Schlaf (šlāf) — spánek"
- **Reason:** Příklad Schlaf sice správně ukazuje dlouhé a, ale bez výslovnostní nápovědy nemusí začátečník jasně poznat, že sch se vyslovuje [š] a a je dlouhé.
- **LV MASTER:** "Schlaf (šlāf) — miegs"
- **DE context:** "Schlaf - sp | nek"

### Finding 74 — HIGH / SEMANTIC_MISMATCH

- **ID:** kurssPronunciationLesson/section[1]/example[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Lysý (bílý) - brzy"
- **PROPOSED:** "Bald (balt) – brzy"
- **Reason:** The Czech text does not contain the German example bald. „Lysý (bílý)“ gives Czech words with unrelated meanings and cannot demonstrate the German pronunciation.
- **LV MASTER:** "bald (balt) — drīz"
- **DE context:** "Lys | brzy"

### Finding 75 — MEDIUM / FOREIGN_LEFTOVER

- **ID:** kurssPronunciationLesson/section[1]/example[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Scharf (шарф) - ostrý"
- **PROPOSED:** "Scharf (šarf) – ostrý"
- **Reason:** The pronunciation is written in Cyrillic („шарф“), although the course is for Czech learners. A Czech approximation should use „šarf“. The approximation itself is PEDAGOGICALLY_ACCEPTABLE.
- **LV MASTER:** "scharf (šarf) — ass"
- **DE context:** "Scharf ( | ostr"

### Finding 76 — HIGH / PEDAGOGICAL_ISSUE

- **ID:** kurssPronunciationLesson/section[1]/example[5]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Feld (plsť) — pole"
- **PROPOSED:** "Feld (felt) – pole"
- **Reason:** „plsť“ is a Czech translation, not a pronunciation guide. It therefore cannot represent the German pronunciation of Feld; the relevant approximation is „felt“. The current card repeats two Czech meanings instead of showing the sound.
- **LV MASTER:** "Feld (felt) — lauks"
- **DE context:** "Feld (pls | pole"

### Finding 77 — HIGH / PHONETIC_ERROR

- **ID:** kurssPronunciationLesson/section[2]/example[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Tragen (trägen) — nést"
- **PROPOSED:** "Tragen (trágen) – nést"
- **Reason:** The approximation „trägen“ uses ä, but tragen has a long a: [ˈtʁaːɡən] or [ˈtʁaːɡn̩]. This is a PHONETICALLY_WRONG representation of the vowel.
- **LV MASTER:** "tragen (trāgen) — nest"
- **DE context:** "Tragen (trägen)  | st"

### Finding 78 — MEDIUM / PEDAGOGICAL_ISSUE

- **ID:** kurssPronunciationLesson/section[2]/example[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Segel - plachta"
- **PROPOSED:** "Segel (zēgel) – plachta"
- **Reason:** The card has no pronunciation approximation, even though it belongs to a pronunciation section and the example demonstrates the ending -el. A beginner is not shown how Segel is pronounced.
- **LV MASTER:** "Segel (zēgel) — bura"
- **DE context:** "Segel - plachta"

### Finding 79 — HIGH / PHONETIC_ERROR

- **ID:** kurssPronunciationLesson/section[2]/example[5]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Braten (bratr) - pečeně"
- **PROPOSED:** "Braten (bráten) – pečeně"
- **Reason:** „bratr“ is not a pronunciation approximation of Braten. The German word has long a and t, approximately „bráten“; the current form also introduces an unrelated Czech lexical item.
- **LV MASTER:** "Braten (brāten) — cepetis"
- **DE context:** "Braten (bratr) - pe | en"

### Finding 80 — HIGH / PHONETIC_ERROR

- **ID:** kurssPronunciationLesson/section[2]/example[7]
- **File:** data/cs/courseLessons.js
- **Object:** kurssPronunciationLesson
- **Field:** lv
- **CURRENT:** "Spiegel (spiegel) - zrcadlo"
- **PROPOSED:** "Spiegel (špígel) – zrcadlo"
- **Reason:** Spiegel begins with German sch [ʃ], not Czech s. „spiegel“ can mislead a Czech beginner into pronouncing /sp/; the approximation should begin „šp…“. The long i should also be shown.
- **LV MASTER:** "Spiegel (špīgel) — spogulis"
- **DE context:** "Spiegel (spiegel) - zrcadlo"

_… and 188 more findings in JSON._

## Stop

READ-ONLY audit complete. No production changes.

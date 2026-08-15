# CS–DE Kurss Členy — pilns lingvistisks audits

**Mode:** READ-ONLY (GPT-5.6 Luna + deterministic gates)
**Model:** GPT-5.6 Luna (`gpt-5.6-luna`)
**Production changes:** 0

## Coverage

| Metric | Value |
|--------|-------|
| Extracted units | **845** |
| Audited units | **845** |
| Coverage | **100%** |
| Luna batches (size 50) | 17 |
| UI keys | 3 |
| Standalone Členy HTML units | 86 |
| kurssLesson16 units (100%) | 186 |
| L8–21 cross-section units | 505 |

### Prefix breakdown

- UI-ART: 3
- ART-HTML: 86
- ART-L01: 2
- ART-L03: 24
- ART-L04: 7
- ART-L05: 14
- ART-L06: 18
- ART-L16: 186
- ART-XSEC: 505

## Severity (quality findings)

| Severity | Count |
|----------|-------|
| CRITICAL | 9 |
| HIGH | 318 |
| MEDIUM | 42 |
| LOW | 4 |
| FALSE_POSITIVE | 1 |

## Special counts

- FOREIGN_LEFTOVER (all findings): 275
- CS_TERMINOLOGY: 20
- SOURCE_DE_ISSUE / DE_PARITY: 33

### By category (top)

- FOREIGN_LEFTOVER: 275
- CS_GRAMMAR: 21
- CS_TERMINOLOGY: 20
- CS_NATURALNESS: 18
- PEDAGOGICAL_ISSUE: 14
- SEMANTIC_MISMATCH: 11
- DE_PARITY_ISSUE: 9
- GENDER_ERROR: 4
- CS_ORTHOGRAPHY: 1

## Integrity gates

| Gate | Status |
|------|--------|
| Structural parity (CS ↔ LV MASTER) | PASS |
| DE READ-ONLY | PASS (0 changes) |
| LV MASTER READ-ONLY | PASS (0 changes) |
| primary ↔ www UI | PASS |
| primary ↔ www courseLessons | PASS |
| Functional / renderer | PASS |
| Mojibake sweep | 0 |
| Missing content | 0 |
| Foreign leftovers (deterministic) | 170 |
| článek gate hits (deterministic) | 0 |

## Luna API

- Requests: 17, batches: 17, tokens: 159341, Luna findings: 323

## Findings (detail, first 100)

### Finding 001 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-HTML-012
- **Unit ID:** kurssArticlesLesson/block[1]/example[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssArticlesLesson
- **Field:** block[1].example[0]
- **CURRENT:** "-er → bieži DER, piemēram: der Computer, der Lehrer Ale ne vždy"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "-er → bieži DER, piemēram: der Computer, der Lehrer bet ne vienmēr"
- **DE context:** "er  | bie | i DER, piem | ram | der Computer, der Lehrer Ale ne v | dy"

### Finding 002 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-025
- **Unit ID:** kurssLesson16/section[1]/item[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[1].items[1]
- **CURRENT:** "Schenken — dāvināt"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "schenken — dāvināt"
- **DE context:** "Schenken  | vin"

### Finding 003 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-026
- **Unit ID:** kurssLesson16/section[1]/item[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[1].items[2]
- **CURRENT:** "Dem Sohne — dēlam"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "dem Sohne — dēlam"
- **DE context:** "Dem Sohne  | lam"

### Finding 004 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-027
- **Unit ID:** kurssLesson16/section[1]/item[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[1].items[3]
- **CURRENT:** "Den Söhnen — dēliem"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "den Söhnen — dēliem"
- **DE context:** "Den Söhnen  | liem"

### Finding 005 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-034
- **Unit ID:** kurssLesson16/section[1]/item[10]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[1].items[10]
- **CURRENT:** "Er gibt — viņš dod"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "er gibt — viņš dod"
- **DE context:** "Er gibt  | vi | dod"

### Finding 006 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-038
- **Unit ID:** kurssLesson16/section[1]/item[14]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[1].items[14]
- **CURRENT:** "Gehorchen — paklausīt"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "gehorchen — paklausīt"
- **DE context:** "Gehorchen  | paklaus"

### Finding 007 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-040
- **Unit ID:** kurssLesson16/section[1]/item[16]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[1].items[16]
- **CURRENT:** "Gehören — piederēt"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "gehören — piederēt"
- **DE context:** "Gehören  | pieder"

### Finding 008 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-041
- **Unit ID:** kurssLesson16/section[1]/item[17]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[1].items[17]
- **CURRENT:** "Das Feld — lauks / tīrums"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "das Feld — lauks / tīrums"
- **DE context:** "Das Feld  | lauks / t | rums"

### Finding 009 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-042
- **Unit ID:** kurssLesson16/section[1]/item[18]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[1].items[18]
- **CURRENT:** "Die Felder — lauki / tīrumi"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "die Felder — lauki / tīrumi"
- **DE context:** "Die Felder  | lauki / t | rumi"

### Finding 010 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-043
- **Unit ID:** kurssLesson16/section[1]/item[19]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[1].items[19]
- **CURRENT:** "Die Wiese — pļava"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "die Wiese — pļava"
- **DE context:** "Die Wiese  | ava"

### Finding 011 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-044
- **Unit ID:** kurssLesson16/section[1]/item[20]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[1].items[20]
- **CURRENT:** "Die Wiesen — pļavas"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "die Wiesen — pļavas"
- **DE context:** "Die Wiesen  | avas"

### Finding 012 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-051
- **Unit ID:** kurssLesson16/section[1]/item[27]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[1].items[27]
- **CURRENT:** "Treu — uzticīgs"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "treu — uzticīgs"
- **DE context:** "Treu  | uztic | gs"

### Finding 013 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-055
- **Unit ID:** kurssLesson16/section[2]/item[1]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[1].heading
- **CURRENT:** "Vienskaitlis"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Vienskaitlis"


### Finding 014 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-056
- **Unit ID:** kurssLesson16/section[2]/item[1]/table[0][1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[1].table[0][1]
- **CURRENT:** "Vīriešu"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_PHRASE)
- **LV MASTER context:** "Vīriešu"
- **DE context:** "rie"

### Finding 015 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-057
- **Unit ID:** kurssLesson16/section[2]/item[1]/table[0][2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[1].table[0][2]
- **CURRENT:** "Sieviešu"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_PHRASE)
- **LV MASTER context:** "Sieviešu"
- **DE context:** "Sievie"

### Finding 016 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-058
- **Unit ID:** kurssLesson16/section[2]/item[1]/table[0][3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[1].table[0][3]
- **CURRENT:** "Vidējā"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Vidējā"
- **DE context:** "Vid"

### Finding 017 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-071
- **Unit ID:** kurssLesson16/section[2]/item[2]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[2].heading
- **CURRENT:** "Daudzskaitlis"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Daudzskaitlis"


### Finding 018 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-072
- **Unit ID:** kurssLesson16/section[2]/item[2]/table[0][1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[2].table[0][1]
- **CURRENT:** "Vīriešu"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_PHRASE)
- **LV MASTER context:** "Vīriešu"
- **DE context:** "rie"

### Finding 019 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-073
- **Unit ID:** kurssLesson16/section[2]/item[2]/table[0][2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[2].table[0][2]
- **CURRENT:** "Sieviešu"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_PHRASE)
- **LV MASTER context:** "Sieviešu"
- **DE context:** "Sievie"

### Finding 020 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-074
- **Unit ID:** kurssLesson16/section[2]/item[2]/table[0][3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[2].table[0][3]
- **CURRENT:** "Vidējā"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Vidējā"
- **DE context:** "Vid"

### Finding 021 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-087
- **Unit ID:** kurssLesson16/section[2]/item[3]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[3].heading
- **CURRENT:** "Datīva -e"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Datīva -e"
- **DE context:** "Podstatn | jm | na mu | sk | ho a st | edn"

### Finding 022 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-093
- **Unit ID:** kurssLesson16/section[2]/item[4]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[4].heading
- **CURRENT:** "Sieviešu kārta datīvā"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_PHRASE)
- **LV MASTER context:** "Sieviešu kārta datīvā"
- **DE context:** "Podstatn | jm | na  | ensk | ho rodu nemaj | koncovku v dativu jednotn"

### Finding 023 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-098
- **Unit ID:** kurssLesson16/section[2]/item[5]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[5].heading
- **CURRENT:** "Nenoteiktais artikuls datīvā"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Nenoteiktais artikuls datīvā"


### Finding 024 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-105
- **Unit ID:** kurssLesson16/section[2]/item[6]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[6].heading
- **CURRENT:** "Daudzskaitļa datīvs"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Daudzskaitļa datīvs"
- **DE context:** "Dativ v mno | sle a podstatn | jm | no maj | asto koncovku -n."

### Finding 025 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-111
- **Unit ID:** kurssLesson16/section[2]/item[7]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[7].heading
- **CURRENT:** "Ja daudzskaitlis jau beidzas ar -n"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ja daudzskaitlis jau beidzas ar -n"
- **DE context:** "Pokud ji | mno | slo kon | na -n, dal | n se nep | id"

### Finding 026 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-126
- **Unit ID:** kurssLesson16/section[2]/item[10]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[2].items[10].heading
- **CURRENT:** "Daudzskaitlis ar Umlaut"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Daudzskaitlis ar Umlaut"


### Finding 027 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-139
- **Unit ID:** kurssLesson16/section[4]/card[0]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[0].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **DE context:** "Der Vater ruft den Mann."

### Finding 028 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-142
- **Unit ID:** kurssLesson16/section[4]/card[1]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[1].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **DE context:** "Der Vater ruft die Frau."

### Finding 029 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-145
- **Unit ID:** kurssLesson16/section[4]/card[2]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[2].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **DE context:** "Der Vater ruft das Kind."

### Finding 030 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-148
- **Unit ID:** kurssLesson16/section[4]/card[3]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[3].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **DE context:** "Der Vater ruft den Sohn."

### Finding 031 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-151
- **Unit ID:** kurssLesson16/section[4]/card[4]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[4].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **DE context:** "Der Vater ruft das Fräulein."

### Finding 032 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-154
- **Unit ID:** kurssLesson16/section[4]/card[5]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[5].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā/akuzatīvā pēc teikuma nozīmes."
- **DE context:** "Der Vater ruft die Tante."

### Finding 033 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-157
- **Unit ID:** kurssLesson16/section[4]/card[6]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[6].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā."
- **DE context:** "Der Vater nähert sich dem Knechte."

### Finding 034 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-160
- **Unit ID:** kurssLesson16/section[4]/card[7]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[7].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā."
- **DE context:** "Der Vater nähert sich der Tochter."

### Finding 035 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-163
- **Unit ID:** kurssLesson16/section[4]/card[8]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[8].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā."
- **DE context:** "Der Vater nähert sich der Magd."

### Finding 036 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-166
- **Unit ID:** kurssLesson16/section[4]/card[9]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[9].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā."
- **DE context:** "Der Vater nähert sich dem Lehrer."

### Finding 037 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-169
- **Unit ID:** kurssLesson16/section[4]/card[10]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[10].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā."
- **DE context:** "Der Vater nähert sich dem Tischler."

### Finding 038 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-172
- **Unit ID:** kurssLesson16/section[4]/card[11]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[11].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā."
- **DE context:** "Der Vater nähert sich der Lehrerin."

### Finding 039 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-175
- **Unit ID:** kurssLesson16/section[4]/card[12]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[12].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā."
- **DE context:** "Der Vater nähert sich dem Mädchen."

### Finding 040 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-178
- **Unit ID:** kurssLesson16/section[4]/card[13]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[13].task
- **CURRENT:** "Ieliec pareizo artikulu datīvā."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Ieliec pareizo artikulu datīvā."
- **DE context:** "Der Vater nähert sich dem Jäger."

### Finding 041 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-181
- **Unit ID:** kurssLesson16/section[4]/card[14]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[14].task
- **CURRENT:** "Pārveido daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Pārveido daudzskaitlī."
- **DE context:** "Der Vater ruft die Männer, die Frauen, die Kinder, die Söhne, die Fräulein, die Tanten."

### Finding 042 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-L16-184
- **Unit ID:** kurssLesson16/section[4]/card[15]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson16
- **Field:** sections[4].cards[15].task
- **CURRENT:** "Pārveido daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Pārveido daudzskaitlī."
- **DE context:** "Der Vater nähert sich den Knechten, den Töchtern, den Mägden, den Lehrern, den Tischlern, den Lehrerinnen, den Mädchen, den Jägern."

### Finding 043 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-046
- **Unit ID:** kurssLesson9/section[1]/item[11]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson9
- **Field:** sections[1].items[11]
- **CURRENT:** "Dieser (dīzer) — šis"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "dieser (dīzer) — šis"
- **DE context:** "Dieser (d | zer)  | is"

### Finding 044 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-047
- **Unit ID:** kurssLesson9/section[1]/item[12]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson9
- **Field:** sections[1].items[12]
- **CURRENT:** "Jener (jēner) — tas"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "jener (jēner) — tas"
- **DE context:** "Jener (j | ner)  | tas"

### Finding 045 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-048
- **Unit ID:** kurssLesson9/section[2]/item[0]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson9
- **Field:** sections[2].items[0].heading
- **CURRENT:** "Norādāmie vietniekvārdi"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_PHRASE)
- **LV MASTER context:** "Norādāmie vietniekvārdi"
- **DE context:** "Jako ur | it | len uve | te z | jmena dieser a jener."

### Finding 046 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-050
- **Unit ID:** kurssLesson9/section[2]/item[1]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson9
- **Field:** sections[2].items[1].heading
- **CURRENT:** "Vienskaitlis"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Vienskaitlis"


### Finding 047 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-101
- **Unit ID:** kurssLesson11/section[3]/item[2]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson11
- **Field:** sections[3].items[2].heading
- **CURRENT:** "Český datīvs un vācu nominatīvs/akuzatīvs"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Latviešu datīvs un vācu nominatīvs/akuzatīvs"
- **DE context:** "tin | je osoba, kter | co pat | v dativu a p | edm | t v nominativu. V n"

### Finding 048 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-103
- **Unit ID:** kurssLesson11/section[3]/item[3]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson11
- **Field:** sections[3].items[3].heading
- **CURRENT:** "Piemēri"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Piemēri"


### Finding 049 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-105
- **Unit ID:** kurssLesson11/section[3]/item[3]/example[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson11
- **Field:** sections[3].items[3].examples[1]
- **CURRENT:** "Der Vater hat ein Buch — tēvam ir grāmata"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Der Vater hat ein Buch — tēvam ir grāmata"
- **DE context:** "Der Vater hat ein Buch  | vam ir gr | mata"

### Finding 050 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-106
- **Unit ID:** kurssLesson11/section[3]/item[3]/example[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson11
- **Field:** sections[3].items[3].examples[2]
- **CURRENT:** "Sie haben eine Feder — viņiem ir spalva"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Sie haben eine Feder — viņiem ir spalva"
- **DE context:** "Sie haben eine Feder  | vi | iem ir spalva"

### Finding 051 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-109
- **Unit ID:** kurssLesson11/section[3]/item[10]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson11
- **Field:** sections[3].items[10].heading
- **CURRENT:** "Vārdu kārtība ar denn"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Vārdu kārtība ar denn"
- **DE context:** "Obsahuje-li narativn | ta spojku denn, z | st | sloveso na  | pozici. Spojka denn se nepo | jako "

### Finding 052 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-111
- **Unit ID:** kurssLesson11/section[3]/item[12]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson11
- **Field:** sections[3].items[12].heading
- **CURRENT:** "Saliktie lietvārdi"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Saliktie lietvārdi"
- **DE context:** "Slo | en | m podstatn | m jm | m p | edch"

### Finding 053 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-118
- **Unit ID:** kurssLesson12/section[1]/item[8]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson12
- **Field:** sections[1].items[8]
- **CURRENT:** "Kleiner als ich — mazāks par mani"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "kleiner als ich — mazāks par mani"
- **DE context:** "Kleiner als ich  | maz | ks par mani"

### Finding 054 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-129
- **Unit ID:** kurssLesson13/section[1]/item[9]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[1].items[9]
- **CURRENT:** "Die Beine — kājas"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "die Beine — kājas"
- **DE context:** "Die Beine  | jas"

### Finding 055 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-131
- **Unit ID:** kurssLesson13/section[2]/item[5]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[2].items[5].heading
- **CURRENT:** "Saliktie darbības vārdi"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Saliktie darbības vārdi"
- **DE context:** "Pokud je p | edlo | kov | st p | zvu | odd"

### Finding 056 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-135
- **Unit ID:** kurssLesson13/section[2]/item[7]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[2].items[7].heading
- **CURRENT:** "Vietniekvārds jeder"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Vietniekvārds jeder"
- **DE context:** "jmeno jeder jde v kruz | ch jako  | nky der / die / das."

### Finding 057 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-137
- **Unit ID:** kurssLesson13/section[2]/item[7]/table[0][1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[2].items[7].table[0][1]
- **CURRENT:** "Vīriešu"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_PHRASE)
- **LV MASTER context:** "Vīriešu"
- **DE context:** "rie"

### Finding 058 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-138
- **Unit ID:** kurssLesson13/section[2]/item[7]/table[0][2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[2].items[7].table[0][2]
- **CURRENT:** "Sieviešu"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_PHRASE)
- **LV MASTER context:** "Sieviešu"
- **DE context:** "Sievie"

### Finding 059 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-139
- **Unit ID:** kurssLesson13/section[2]/item[7]/table[0][3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[2].items[7].table[0][3]
- **CURRENT:** "Vidējā"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Vidējā"
- **DE context:** "Vid"

### Finding 060 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-140
- **Unit ID:** kurssLesson13/section[2]/item[7]/table[1][0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[2].items[7].table[1][0]
- **CURRENT:** "Nominatīvs"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Nominatīvs"
- **DE context:** "Nominat | vs"

### Finding 061 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-144
- **Unit ID:** kurssLesson13/section[2]/item[7]/table[2][0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson13
- **Field:** sections[2].items[7].table[2][0]
- **CURRENT:** "Akuzatīvs"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Akuzatīvs"
- **DE context:** "Akuzat | vs"

### Finding 062 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-152
- **Unit ID:** kurssLesson14/section[2]/item[9]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson14
- **Field:** sections[2].items[9].heading
- **CURRENT:** "Svarīgi"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Svarīgi"
- **DE context:** "tin | asto  | me „mus | m se u | it“, „mus | ps"

### Finding 063 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-175
- **Unit ID:** kurssLesson15/section[1]/item[19]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson15
- **Field:** sections[1].items[19]
- **CURRENT:** "Entzweischneiden — pārgriezt uz pusēm"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "entzweischneiden — pārgriezt uz pusēm"
- **DE context:** "Entzweischneiden  | rgriezt uz pus"

### Finding 064 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-178
- **Unit ID:** kurssLesson15/section[2]/item[6]/example[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson15
- **Field:** sections[2].items[6].examples[0]
- **CURRENT:** "Ich schneide den Apfel entzwei. — Es pārgriežu ābolu uz pusēm."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Ich schneide den Apfel entzwei. — Es pārgriežu ābolu uz pusēm."
- **DE context:** "Ich schneide den Apfel entzwei.  | Es p | rgrie | bolu uz pus | m."

### Finding 065 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-210
- **Unit ID:** kurssLesson17/section[2]/item[5]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[2].items[5].heading
- **CURRENT:** "Atdalāmie priedēkļi"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Atdalāmie priedēkļi"
- **DE context:** "Slo | en | slovesa auffangen a abwischen maj | zvuk na p | edpon | Proto je sou"

### Finding 066 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-216
- **Unit ID:** kurssLesson17/section[2]/item[6]/example[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[2].items[6].examples[0]
- **CURRENT:** "Fegen — slaucīt ar slotu"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "fegen — slaucīt ar slotu"
- **DE context:** "Fegen  | slauc | t ar slotu"

### Finding 067 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-218
- **Unit ID:** kurssLesson17/section[2]/item[6]/example[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[2].items[6].examples[2]
- **CURRENT:** "Wischen / abwischen — slaucīt ar lupatu, drānu, noslaucīt putekļus"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "wischen / abwischen — slaucīt ar lupatu, drānu, noslaucīt putekļus"
- **DE context:** "Wischen / abwischen  | slauc | t ar lupatu, dr | nu, noslauc | t putek | us"

### Finding 068 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-222
- **Unit ID:** kurssLesson17/section[4]/card[0]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[4].cards[0].task
- **CURRENT:** "Atbildi vienskaitlī, pēc tam daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Atbildi vienskaitlī, pēc tam daudzskaitlī."
- **DE context:** "Der Knecht sieht den Jäger, den Müller, den Tischler."

### Finding 069 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-223
- **Unit ID:** kurssLesson17/section[4]/card[0]/task2
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[4].cards[0].task2
- **CURRENT:** "Tagad atbildi daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Tagad atbildi daudzskaitlī."
- **DE context:** "Der Knecht sieht die Jäger, die Müller, die Tischler."

### Finding 070 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-225
- **Unit ID:** kurssLesson17/section[4]/card[1]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[4].cards[1].task
- **CURRENT:** "Atbildi vienskaitlī, pēc tam daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Atbildi vienskaitlī, pēc tam daudzskaitlī."
- **DE context:** "Der Knecht sieht den Besen, die Schaufel, den Garten."

### Finding 071 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-226
- **Unit ID:** kurssLesson17/section[4]/card[1]/task2
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[4].cards[1].task2
- **CURRENT:** "Tagad atbildi daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Tagad atbildi daudzskaitlī."
- **DE context:** "Der Knecht sieht die Besen, die Schaufeln, die Gärten."

### Finding 072 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-228
- **Unit ID:** kurssLesson17/section[4]/card[2]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[4].cards[2].task
- **CURRENT:** "Atbildi vienskaitlī, pēc tam daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Atbildi vienskaitlī, pēc tam daudzskaitlī."
- **DE context:** "Der Knecht spricht mit dem Vetter, mit der Base, mit dem Mädchen."

### Finding 073 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-229
- **Unit ID:** kurssLesson17/section[4]/card[2]/task2
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[4].cards[2].task2
- **CURRENT:** "Tagad atbildi daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Tagad atbildi daudzskaitlī."
- **DE context:** "Der Knecht spricht mit den Vettern, mit den Basen, mit den Mädchen."

### Finding 074 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-231
- **Unit ID:** kurssLesson17/section[4]/card[3]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[4].cards[3].task
- **CURRENT:** "Atbildi vienskaitlī, pēc tam daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Atbildi vienskaitlī, pēc tam daudzskaitlī."
- **DE context:** "Der Knecht arbeitet mit dem Spaten, mit diesem Beil, mit jener Säge."

### Finding 075 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-232
- **Unit ID:** kurssLesson17/section[4]/card[3]/task2
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[4].cards[3].task2
- **CURRENT:** "Tagad atbildi daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Tagad atbildi daudzskaitlī."
- **DE context:** "Der Knecht arbeitet mit den Spaten, mit diesen Beilen, mit jenen Sägen."

### Finding 076 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-234
- **Unit ID:** kurssLesson17/section[4]/card[4]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[4].cards[4].task
- **CURRENT:** "Atbildi vienskaitlī, pēc tam daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Atbildi vienskaitlī, pēc tam daudzskaitlī."
- **DE context:** "Der Knecht hilft diesem Tischler, jener Frau, dem Fräulein."

### Finding 077 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-235
- **Unit ID:** kurssLesson17/section[4]/card[4]/task2
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson17
- **Field:** sections[4].cards[4].task2
- **CURRENT:** "Tagad atbildi daudzskaitlī."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Tagad atbildi daudzskaitlī."
- **DE context:** "Der Knecht hilft diesen Tischlern, jenen Frauen, den Fräulein."

### Finding 078 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-252
- **Unit ID:** kurssLesson18/section[2]/item[1]/example[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[1].examples[2]
- **CURRENT:** "Ich lege die Äpfel in das Körbchen. — Es lieku ābolus groziņā."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Ich lege die Äpfel in das Körbchen. — Es lieku ābolus groziņā."
- **DE context:** "Ich lege die Äpfel in das Körbchen.  | Es lieku  | bolus grozi"

### Finding 079 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-253
- **Unit ID:** kurssLesson18/section[2]/item[1]/example[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[1].examples[3]
- **CURRENT:** "Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē."
- **DE context:** "Ich gieße das Wasser in den Krug.  | Es leju  | deni kr"

### Finding 080 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-256
- **Unit ID:** kurssLesson18/section[2]/item[2]/example[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[2].examples[0]
- **CURRENT:** "Ich stehe an dem Tische. — Es stāvu pie galda."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Ich stehe an dem Tische. — Es stāvu pie galda."
- **DE context:** "Ich stehe an dem Tische.  | Es st | vu pie galda."

### Finding 081 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-257
- **Unit ID:** kurssLesson18/section[2]/item[2]/example[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[2].examples[1]
- **CURRENT:** "Der Korb steht auf der Bank. — Grozs stāv uz sola."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Der Korb steht auf der Bank. — Grozs stāv uz sola."
- **DE context:** "Der Korb steht auf der Bank.  | Grozs st | v uz sola."

### Finding 082 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-258
- **Unit ID:** kurssLesson18/section[2]/item[2]/example[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[2].examples[2]
- **CURRENT:** "Die Äpfel sind in dem Körbchen. — Āboli ir groziņā."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Die Äpfel sind in dem Körbchen. — Āboli ir groziņā."
- **DE context:** "Die Äpfel sind in dem Körbchen.  | boli ir grozi"

### Finding 083 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-259
- **Unit ID:** kurssLesson18/section[2]/item[2]/example[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[2].examples[3]
- **CURRENT:** "Das Wasser ist in dem Kruge. — Ūdens ir krūzē."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Das Wasser ist in dem Kruge. — Ūdens ir krūzē."
- **DE context:** "Das Wasser ist in dem Kruge.  | dens ir kr"

### Finding 084 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-260
- **Unit ID:** kurssLesson18/section[2]/item[4]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[4].heading
- **CURRENT:** "Darbības vārdi ar wo?"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_WORD)
- **LV MASTER context:** "Darbības vārdi ar wo?"
- **DE context:** "Tato slovesa  | asto ozna | uj | sto nebo stav, a proto odpov | daj | na ot"

### Finding 085 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-262
- **Unit ID:** kurssLesson18/section[2]/item[4]/example[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[4].examples[0]
- **CURRENT:** "Sein — būt"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "sein — būt"
- **DE context:** "Sein "

### Finding 086 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-264
- **Unit ID:** kurssLesson18/section[2]/item[4]/example[2]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[4].examples[2]
- **CURRENT:** "Arbeiten — strādāt"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "arbeiten — strādāt"
- **DE context:** "Arbeiten  | str"

### Finding 087 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-265
- **Unit ID:** kurssLesson18/section[2]/item[4]/example[3]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[4].examples[3]
- **CURRENT:** "Liegen — gulēt / atrasties guļus"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "liegen — gulēt / atrasties guļus"
- **DE context:** "Liegen  | gul | t / atrasties gu | us"

### Finding 088 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-266
- **Unit ID:** kurssLesson18/section[2]/item[4]/example[4]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[4].examples[4]
- **CURRENT:** "Sitzen — sēdēt"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "sitzen — sēdēt"
- **DE context:** "Sitzen "

### Finding 089 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-267
- **Unit ID:** kurssLesson18/section[2]/item[4]/example[5]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[4].examples[5]
- **CURRENT:** "Hängen — karāties"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "hängen — karāties"
- **DE context:** "Hängen  | kar | ties"

### Finding 090 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-269
- **Unit ID:** kurssLesson18/section[2]/item[4]/example[7]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[4].examples[7]
- **CURRENT:** "Suchen — meklēt"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "suchen — meklēt"
- **DE context:** "Suchen  | mekl"

### Finding 091 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-270
- **Unit ID:** kurssLesson18/section[2]/item[4]/example[8]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[4].examples[8]
- **CURRENT:** "Spielen — spēlēt"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "spielen — spēlēt"
- **DE context:** "Spielen  | sp"

### Finding 092 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-271
- **Unit ID:** kurssLesson18/section[2]/item[5]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[5].heading
- **CURRENT:** "Vielu vārdi"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Vielu vārdi"
- **DE context:** "Podstatn | jm | na obvykle stoj | bez  | lenu."

### Finding 093 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-274
- **Unit ID:** kurssLesson18/section[2]/item[5]/example[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[5].examples[1]
- **CURRENT:** "In dem Eimer ist Wasser. — Spainī ir ūdens."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "In dem Eimer ist Wasser. — Spainī ir ūdens."
- **DE context:** "In dem Eimer ist Wasser.  | Spain | ir  | dens."

### Finding 094 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-275
- **Unit ID:** kurssLesson18/section[2]/item[6]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[6].heading
- **CURRENT:** "Konkrēta viela"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Konkrēta viela"
- **DE context:** "Pokud je l | tka zm | na v ur | it | m mno | stv"

### Finding 095 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-277
- **Unit ID:** kurssLesson18/section[2]/item[6]/example[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[6].examples[0]
- **CURRENT:** "Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Ich gieße das Wasser in den Krug. — Es leju ūdeni krūzē."
- **DE context:** "Ich gieße das Wasser in den Krug.  | Es leju  | deni kr"

### Finding 096 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-280
- **Unit ID:** kurssLesson18/section[2]/item[7]/example[0]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[7].examples[0]
- **CURRENT:** "In dem Eimer — spainī"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "in dem Eimer — spainī"
- **DE context:** "In dem Eimer  | spain"

### Finding 097 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-281
- **Unit ID:** kurssLesson18/section[2]/item[7]/example[1]
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[7].examples[1]
- **CURRENT:** "In dem Zimmer — istabā"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "in dem Zimmer — istabā"
- **DE context:** "In dem Zimmer  | istab"

### Finding 098 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-282
- **Unit ID:** kurssLesson18/section[2]/item[8]/heading
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[2].items[8].heading
- **CURRENT:** "Mūsdienu formas"
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Mūsdienu formas"
- **DE context:** "Star | formy jako dem Tische, dem Kruge, im Walde se dnes  | asto pou | vaj | krat | dem Tisch, dem Krug, im Wald."

### Finding 099 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-285
- **Unit ID:** kurssLesson18/section[4]/card[0]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[4].cards[0].task
- **CURRENT:** "Izvēlies pareizo locījumu: Dativ vai Akkusativ."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Izvēlies pareizo locījumu: Dativ vai Akkusativ."
- **DE context:** "Das Mädchen geht in den Wald, in den Garten, auf die Wiese, auf den Hof."

### Finding 100 — HIGH / FOREIGN_LEFTOVER

- **Finding ID:** ART-XSEC-288
- **Unit ID:** kurssLesson18/section[4]/card[1]/task
- **File:** data/cs/courseLessons.js
- **Object:** kurssLesson18
- **Field:** sections[4].cards[1].task
- **CURRENT:** "Izvēlies pareizo locījumu: Dativ vai Akkusativ."
- **Luna PROPOSED:** ""
- **Reason:** Latviešu atlikums (LV_DIACRITIC)
- **LV MASTER context:** "Izvēlies pareizo locījumu: Dativ vai Akkusativ."
- **DE context:** "Es spielt in dem Walde, in dem Garten, auf der Wiese, auf dem Hofe."

_… and 273 more quality findings in JSON._

## Stop

READ-ONLY audit complete. No production changes.
Next step: OWNER review → COPY-ONLY apply.

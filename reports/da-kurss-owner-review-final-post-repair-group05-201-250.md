# DA–DE Kurss — OWNER review — final post-repair Group 05

Avots: `reports/da-kurss-final-post-repair-audit.md`
Findings: **201–250** (50 ieraksti)

> **DE = STRICT READ-ONLY.**
> **PROPOSED_DA ir audita ieteikums, nevis automātiski OWNER apstiprināts variants.**
> Katram finding aizpildi `Statuss` un `OWNER_DECISION`.
> `LABOT` gadījumā `OWNER_DECISION` jābūt precīzam gala DA tekstam/vērtībai.
> `NELABOT` / `FALSE_POSITIVE` gadījumā production netiek mainīts.

## Finding 201

**Audit ID:** `DA-KURSS-FPR-0201`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** ich darf
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ich darf — I may
**PROPOSED_DA:** ich darf — jeg må / jeg har lov til
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 202

**Audit ID:** `DA-KURSS-FPR-0202`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** du darfst
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** du darfst — you may
**PROPOSED_DA:** du darfst — du må / du har lov til
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 203

**Audit ID:** `DA-KURSS-FPR-0203`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[10]`
**Field type:** `sectionItem`
**DE (read-only):** er darf
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** er darf — he may
**PROPOSED_DA:** er darf — han må / han har lov til
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 204

**Audit ID:** `DA-KURSS-FPR-0204`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[11]`
**Field type:** `sectionItem`
**DE (read-only):** wir dürfen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** wir dürfen — we may
**PROPOSED_DA:** wir dürfen — vi må / vi har lov til
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 205

**Audit ID:** `DA-KURSS-FPR-0205`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** ihr dürft
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ihr dürft — you may
**PROPOSED_DA:** ihr dürft — I må / I har lov til
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 206

**Audit ID:** `DA-KURSS-FPR-0206`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** sie dürfen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** sie dürfen — they / they may
**PROPOSED_DA:** sie dürfen — de må / de har lov til
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 207

**Audit ID:** `DA-KURSS-FPR-0207`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[19]`
**Field type:** `sectionItem`
**DE (read-only):** entzweischneiden
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** entzweischneiden — cut in half
**PROPOSED_DA:** entzweischneiden — at skære i to
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 208

**Audit ID:** `DA-KURSS-FPR-0208`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[26]`
**Field type:** `sectionItem`
**DE (read-only):** gern
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** gern — willingly
**PROPOSED_DA:** gern — gerne
**Problēma:** The English gloss “willingly” is a foreign-language remnant; the Danish translation is “gerne”.
**Audita pamatojums:** The English gloss “willingly” is a foreign-language remnant; the Danish translation is “gerne”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 209

**Audit ID:** `DA-KURSS-FPR-0209`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[29]`
**Field type:** `sectionItem`
**DE (read-only):** nehmen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** nehmen — to take
**PROPOSED_DA:** nehmen — at tage
**Problēma:** The English gloss “to take” should be translated into Danish as “at tage”.
**Audita pamatojums:** The English gloss “to take” should be translated into Danish as “at tage”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 210

**Audit ID:** `DA-KURSS-FPR-0210`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[30]`
**Field type:** `sectionItem`
**DE (read-only):** ich nehme
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ich nehme — I take
**PROPOSED_DA:** ich nehme — jeg tager
**Problēma:** The English gloss “I take” should be translated into Danish as “jeg tager”.
**Audita pamatojums:** The English gloss “I take” should be translated into Danish as “jeg tager”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 211

**Audit ID:** `DA-KURSS-FPR-0211`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[31]`
**Field type:** `sectionItem`
**DE (read-only):** du nimmst
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** du nimmst — you take
**PROPOSED_DA:** du nimmst — du tager
**Problēma:** The English gloss “you take” should be translated into Danish as “du tager”.
**Audita pamatojums:** The English gloss “you take” should be translated into Danish as “du tager”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 212

**Audit ID:** `DA-KURSS-FPR-0212`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[32]`
**Field type:** `sectionItem`
**DE (read-only):** er nimmt
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** er nimmt — he takes
**PROPOSED_DA:** er nimmt — han tager
**Problēma:** The English gloss “he takes” should be translated into Danish as “han tager”.
**Audita pamatojums:** The English gloss “he takes” should be translated into Danish as “han tager”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 213

**Audit ID:** `DA-KURSS-FPR-0213`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[33]`
**Field type:** `sectionItem`
**DE (read-only):** essen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** essen — to eat
**PROPOSED_DA:** essen — at spise
**Problēma:** The English gloss “to eat” should be translated into Danish as “at spise”.
**Audita pamatojums:** The English gloss “to eat” should be translated into Danish as “at spise”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 214

**Audit ID:** `DA-KURSS-FPR-0214`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[34]`
**Field type:** `sectionItem`
**DE (read-only):** ich esse
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ich esse — I eat
**PROPOSED_DA:** ich esse — jeg spiser
**Problēma:** The English gloss “I eat” should be translated into Danish as “jeg spiser”.
**Audita pamatojums:** The English gloss “I eat” should be translated into Danish as “jeg spiser”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 215

**Audit ID:** `DA-KURSS-FPR-0215`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[35]`
**Field type:** `sectionItem`
**DE (read-only):** du isst
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** du isst — you eat
**PROPOSED_DA:** du isst — du spiser
**Problēma:** The English gloss “you eat” should be translated into Danish as “du spiser”.
**Audita pamatojums:** The English gloss “you eat” should be translated into Danish as “du spiser”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 216

**Audit ID:** `DA-KURSS-FPR-0216`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[36]`
**Field type:** `sectionItem`
**DE (read-only):** er isst
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** er isst — he eats
**PROPOSED_DA:** er isst — han spiser
**Problēma:** The English gloss “he eats” should be translated into Danish as “han spiser”.
**Audita pamatojums:** The English gloss “he eats” should be translated into Danish as “han spiser”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 217

**Audit ID:** `DA-KURSS-FPR-0217`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[37]`
**Field type:** `sectionItem`
**DE (read-only):** wir essen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** wir essen — we eat
**PROPOSED_DA:** wir essen — vi spiser
**Problēma:** The English gloss “we eat” should be translated into Danish as “vi spiser”.
**Audita pamatojums:** The English gloss “we eat” should be translated into Danish as “vi spiser”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 218

**Audit ID:** `DA-KURSS-FPR-0218`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[38]`
**Field type:** `sectionItem`
**DE (read-only):** ihr esst
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ihr esst — you eat
**PROPOSED_DA:** ihr esst — I spiser
**Problēma:** The English gloss “you eat” should be translated into Danish as “I spiser” for the plural informal pronoun.
**Audita pamatojums:** The English gloss “you eat” should be translated into Danish as “I spiser” for the plural informal pronoun.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 219

**Audit ID:** `DA-KURSS-FPR-0219`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[39]`
**Field type:** `sectionItem`
**DE (read-only):** sie essen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** sie essen — they / they eat
**PROPOSED_DA:** sie essen — de spiser
**Problēma:** The gloss contains English text and a duplicated translation; the Danish equivalent is “de spiser”.
**Audita pamatojums:** The gloss contains English text and a duplicated translation; the Danish equivalent is “de spiser”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 220

**Audit ID:** `DA-KURSS-FPR-0220`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[0].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Sollen betyder at have behov i betydningen pligt.
**PROPOSED_DA:** Sollen betyder at skulle i betydningen pligt.
**Problēma:** “Sollen” expresses obligation or duty, not having a need. The Danish explanation should use “at skulle”.
**Audita pamatojums:** “Sollen” expresses obligation or duty, not having a need. The Danish explanation should use “at skulle”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 221

**Audit ID:** `DA-KURSS-FPR-0221`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[4].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** GRAMMAR
**CURRENT_DA:** Essen-buen som følger.
**PROPOSED_DA:** Essen bøjes som følger.
**Problēma:** “Essen-buen” is not a Danish grammatical expression; the verb should be described with “bøjes”.
**Audita pamatojums:** “Essen-buen” is not a Danish grammatical expression; the verb should be described with “bøjes”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 222

**Audit ID:** `DA-KURSS-FPR-0222`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[5].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** HIGH
**Category:** ORTHOGRAPHY
**CURRENT_DA:** Hvis projektet bruger moderne skrift, kan du skrive: du isst, er/sie/es isst, ihr est.
**PROPOSED_DA:** Hvis projektet bruger moderne skrift, kan du skrive: du isst, er/sie/es isst, ihr esst.
**Problēma:** The German form “ihr est” is misspelled; the correct form is “ihr esst”.
**Audita pamatojums:** The German form “ihr est” is misspelled; the correct form is “ihr esst”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 223

**Audit ID:** `DA-KURSS-FPR-0223`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[2].lv`
**Field type:** `cardLv`
**DE (read-only):** Darf der Großvater arbeiten?
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Kan bedstefar arbejde?
**PROPOSED_DA:** Må bedstefar arbejde?
**Problēma:** “Darf” expresses permission, which is “må” in Danish; “kan” expresses ability and changes the meaning.
**Audita pamatojums:** “Darf” expresses permission, which is “må” in Danish; “kan” expresses ability and changes the meaning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 224

**Audit ID:** `DA-KURSS-FPR-0224`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[8].lv`
**Field type:** `cardLv`
**DE (read-only):** Wie mundet die Birne?
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Hvordan smager en pære?
**PROPOSED_DA:** Hvordan smager pæren?
**Problēma:** The German definite article “die Birne” corresponds to the Danish definite form “pæren”, not the indefinite “en pære”.
**Audita pamatojums:** The German definite article “die Birne” corresponds to the Danish definite form “pæren”, not the indefinite “en pære”.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 225

**Audit ID:** `DA-KURSS-FPR-0225`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[11].lv`
**Field type:** `cardLv`
**DE (read-only):** Der Schüler muss lernen.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** En studerende skal studere.
**PROPOSED_DA:** Eleven skal studere.
**Problēma:** Schüler betyder »elev«, ikke »studerende«; den danske tekst ændrer målgruppen.
**Audita pamatojums:** Schüler betyder »elev«, ikke »studerende«; den danske tekst ændrer målgruppen.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 226

**Audit ID:** `DA-KURSS-FPR-0226`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[14].lv`
**Field type:** `cardLv`
**DE (read-only):** Darf das Kind das Messer nehmen?
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Kan et barn tage en kniv?
**PROPOSED_DA:** Må et barn tage en kniv?
**Problēma:** Darf udtrykker tilladelse (»må«), mens »kan« udtrykker evne eller mulighed.
**Audita pamatojums:** Darf udtrykker tilladelse (»må«), mens »kan« udtrykker evne eller mulighed.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 227

**Audit ID:** `DA-KURSS-FPR-0227`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.subtitle`
**Field type:** `subtitle`
**DE (read-only):** —
**Severity:** LOW
**Category:** GRAMMAR
**CURRENT_DA:** Dativs, geben, sich nähern
**PROPOSED_DA:** Dativ, geben, sich nähern
**Problēma:** »Dativs« er ikke den normale danske form; emnebetegnelsen er »dativ«.
**Audita pamatojums:** »Dativs« er ikke den normale danske form; emnebetegnelsen er »dativ«.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 228

**Audit ID:** `DA-KURSS-FPR-0228`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Sekstende forelæsning: dativ, geben, sich nähern og dativøvelser.
**PROPOSED_DA:** Sekstende lektion: dativ, geben, sich nähern og dativøvelser.
**Problēma:** »Forelæsning« betyder lecture og passer dårligere end »lektion« til en kursuslektion.
**Audita pamatojums:** »Forelæsning« betyder lecture og passer dårligere end »lektion« til en kursuslektion.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 229

**Audit ID:** `DA-KURSS-FPR-0229`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Navne
**PROPOSED_DA:** Ord
**Problēma:** Afsnittet indeholder ordforråd, ikke personnavne; »Navne« er en betydningsfejl.
**Audita pamatojums:** Afsnittet indeholder ordforråd, ikke personnavne; »Navne« er en betydningsfejl.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 230

**Audit ID:** `DA-KURSS-FPR-0230`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** schenken
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** schenken — to give away
**PROPOSED_DA:** schenken — forære
**Problēma:** Den engelske gloss »to give away« er en fremmedrest og skal være dansk.
**Audita pamatojums:** Den engelske gloss »to give away« er en fremmedrest og skal være dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 231

**Audit ID:** `DA-KURSS-FPR-0231`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** dem Sohne
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** dem Sohne — to the son
**PROPOSED_DA:** dem Sohne — til sønnen
**Problēma:** Den engelske gloss »to the son« er en fremmedrest.
**Audita pamatojums:** Den engelske gloss »to the son« er en fremmedrest.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 232

**Audit ID:** `DA-KURSS-FPR-0232`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** den Söhnen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** den Söhnen — to the sons
**PROPOSED_DA:** den Söhnen — til sønnerne
**Problēma:** Den engelske gloss »to the sons« er en fremmedrest.
**Audita pamatojums:** Den engelske gloss »to the sons« er en fremmedrest.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 233

**Audit ID:** `DA-KURSS-FPR-0233`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[10]`
**Field type:** `sectionItem`
**DE (read-only):** er gibt
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** er gibt — he gives
**PROPOSED_DA:** er gibt — han giver
**Problēma:** Den engelske gloss »he gives« er en fremmedrest.
**Audita pamatojums:** Den engelske gloss »he gives« er en fremmedrest.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 234

**Audit ID:** `DA-KURSS-FPR-0234`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[16]`
**Field type:** `sectionItem`
**DE (read-only):** gehören
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** gehören — to belong
**PROPOSED_DA:** gehören — at tilhøre
**Problēma:** Den engelske gloss »to belong« er en fremmedrest.
**Audita pamatojums:** Den engelske gloss »to belong« er en fremmedrest.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 235

**Audit ID:** `DA-KURSS-FPR-0235`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[17]`
**Field type:** `sectionItem`
**DE (read-only):** das Feld
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** das Feld — field / field
**PROPOSED_DA:** das Feld — mark / ager
**Problēma:** Glossene er engelske og gentaget; de skal oversættes til dansk.
**Audita pamatojums:** Glossene er engelske og gentaget; de skal oversættes til dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 236

**Audit ID:** `DA-KURSS-FPR-0236`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[18]`
**Field type:** `sectionItem`
**DE (read-only):** die Felder
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** die Felder — fields / fields
**PROPOSED_DA:** die Felder — marker / agre
**Problēma:** Glossene er engelske og gentaget; de skal oversættes til dansk.
**Audita pamatojums:** Glossene er engelske og gentaget; de skal oversættes til dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 237

**Audit ID:** `DA-KURSS-FPR-0237`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[20]`
**Field type:** `sectionItem`
**DE (read-only):** die Wiesen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** die Wiesen — meadows
**PROPOSED_DA:** die Wiesen — engene
**Problēma:** Den engelske gloss »meadows« er en fremmedrest.
**Audita pamatojums:** Den engelske gloss »meadows« er en fremmedrest.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 238

**Audit ID:** `DA-KURSS-FPR-0238`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[22]`
**Field type:** `sectionItem`
**DE (read-only):** die Wälder
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** die Wälder — forests
**PROPOSED_DA:** die Wälder — skovene
**Problēma:** Den engelske gloss »forests« er en fremmedrest.
**Audita pamatojums:** Den engelske gloss »forests« er en fremmedrest.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 239

**Audit ID:** `DA-KURSS-FPR-0239`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[1].items[27]`
**Field type:** `sectionItem`
**DE (read-only):** treu
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** treu — faithful
**PROPOSED_DA:** treu — trofast
**Problēma:** Den engelske gloss »faithful« er en fremmedrest.
**Audita pamatojums:** Den engelske gloss »faithful« er en fremmedrest.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 240

**Audit ID:** `DA-KURSS-FPR-0240`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[3].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**CURRENT_DA:** Dativ-e
**PROPOSED_DA:** Dativ på -e
**Problēma:** »Dativ-e« er forståeligt, men »Dativ på -e« er den naturlige danske formulering.
**Audita pamatojums:** »Dativ-e« er forståeligt, men »Dativ på -e« er den naturlige danske formulering.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 241

**Audit ID:** `DA-KURSS-FPR-0241`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[0].lv`
**Field type:** `cardLv`
**DE (read-only):** Wen ruft der Vater?
**Severity:** MEDIUM
**Category:** NATURALNESS
**CURRENT_DA:** Hvem kalder faderen på?
**PROPOSED_DA:** Hvem kalder faderen?
**Problēma:** Den danske præposition "på" gør formuleringen mindre neutral og gengiver ikke direkte den tyske sætning.
**Audita pamatojums:** Den danske præposition "på" gør formuleringen mindre neutral og gengiver ikke direkte den tyske sætning.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 242

**Audit ID:** `DA-KURSS-FPR-0242`
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[1].lv`
**Field type:** `cardLv`
**DE (read-only):** Er ruft den Sohn und die Tochter.
**Severity:** MEDIUM
**Category:** SEMANTICS
**CURRENT_DA:** Han kalder på sin søn og datter.
**PROPOSED_DA:** Han kalder på sønnen og datteren.
**Problēma:** "sin" tilføjer ejerskab, som ikke findes i den tyske tekst; de bestemte objekter bør gengives som sønnen og datteren.
**Audita pamatojums:** "sin" tilføjer ejerskab, som ikke findes i den tyske tekst; de bestemte objekter bør gengives som sønnen og datteren.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 243

**Audit ID:** `DA-KURSS-FPR-0243`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Syttende foredrag: mit + Dativ, womit / mit wem og verber med Umlaut.
**PROPOSED_DA:** Syttende lektion: mit + Dativ, womit / mit wem og verber med Umlaut.
**Problēma:** "Foredrag" betyder lecture/tale og passer ikke til en kursuslektion; den latinske reference angiver en lektion.
**Audita pamatojums:** "Foredrag" betyder lecture/tale og passer ikke til en kursuslektion; den latinske reference angiver en lektion.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 244

**Audit ID:** `DA-KURSS-FPR-0244`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].title`
**Field type:** `sectionTitle`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Navne
**PROPOSED_DA:** Ord
**Problēma:** Afsnittet indeholder ordforråd, ikke personnavne; "Navne" er derfor en misvisende dansk overskrift.
**Audita pamatojums:** Afsnittet indeholder ordforråd, ikke personnavne; "Navne" er derfor en misvisende dansk overskrift.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 245

**Audit ID:** `DA-KURSS-FPR-0245`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[6]`
**Field type:** `sectionItem`
**DE (read-only):** fangen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** fangen — catch
**PROPOSED_DA:** fangen — fange
**Problēma:** Den engelske glosse "catch" er en fremmedsprogsrest i danskfeltet.
**Audita pamatojums:** Den engelske glosse "catch" er en fremmedsprogsrest i danskfeltet.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 246

**Audit ID:** `DA-KURSS-FPR-0246`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[7]`
**Field type:** `sectionItem`
**DE (read-only):** auffangen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** auffangen — to fange / catch
**PROPOSED_DA:** auffangen — gribe / fange
**Problēma:** Glossen indeholder engelsk "to" og "catch" i stedet for rent dansk.
**Audita pamatojums:** Glossen indeholder engelsk "to" og "catch" i stedet for rent dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 247

**Audit ID:** `DA-KURSS-FPR-0247`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** der Schuldiener
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Schuldiener — school attendant
**PROPOSED_DA:** der Schuldiener — skolebetjent
**Problēma:** Den engelske oversættelse "school attendant" er en fremmedsprogsrest i danskfeltet.
**Audita pamatojums:** Den engelske oversættelse "school attendant" er en fremmedsprogsrest i danskfeltet.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 248

**Audit ID:** `DA-KURSS-FPR-0248`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[11]`
**Field type:** `sectionItem`
**DE (read-only):** fegen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** fegen — to sweep with a broom
**PROPOSED_DA:** fegen — feje med en kost
**Problēma:** Den engelske frase "to sweep with a broom" står i danskfeltet.
**Audita pamatojums:** Den engelske frase "to sweep with a broom" står i danskfeltet.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 249

**Audit ID:** `DA-KURSS-FPR-0249`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** die Diele
**Severity:** LOW
**Category:** GRAMMAR
**CURRENT_DA:** die Diele — gulvet
**PROPOSED_DA:** die Diele — gulv
**Problēma:** Som ordbogsglose bør substantivet stå ubestemt: "gulv", ikke den bestemte form "gulvet".
**Audita pamatojums:** Som ordbogsglose bør substantivet stå ubestemt: "gulv", ikke den bestemte form "gulvet".
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 250

**Audit ID:** `DA-KURSS-FPR-0250`
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** der Lappen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Lappen — rag / cloth
**PROPOSED_DA:** der Lappen — klud / klæde
**Problēma:** De engelske gloser "rag / cloth" står i danskfeltet.
**Audita pamatojums:** De engelske gloser "rag / cloth" står i danskfeltet.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

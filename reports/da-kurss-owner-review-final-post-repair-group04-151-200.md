# DA–DE Kurss — OWNER review — final post-repair Group 04

Avots: `reports/da-kurss-final-post-repair-audit.md`
Findings: **151–200** (50 ieraksti)

> **DE = STRICT READ-ONLY.**
> **PROPOSED_DA ir audita ieteikums, nevis automātiski OWNER apstiprināts variants.**
> Katram finding aizpildi `Statuss` un `OWNER_DECISION`.
> `LABOT` gadījumā `OWNER_DECISION` jābūt precīzam gala DA tekstam/vērtībai.
> `NELABOT` / `FALSE_POSITIVE` gadījumā production netiek mainīts.

## Finding 151

**Audit ID:** `DA-KURSS-FPR-0151`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv`
**Field type:** `cardLv`
**DE (read-only):** Nein, Robert und Johann turnen nicht.
**Severity:** HIGH
**Category:** NAMES
**CURRENT_DA:** Nej, Robert og Jan laver ikke gymnastik.
**PROPOSED_DA:** Nej, Robert og Johann laver ikke gymnastik.
**Problēma:** Det danske navn “Jan” matcher ikke navnet “Johann” i den tyske kildetekst.
**Audita pamatojums:** Det danske navn “Jan” matcher ikke navnet “Johann” i den tyske kildetekst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 152

**Audit ID:** `DA-KURSS-FPR-0152`
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[30].lv`
**Field type:** `cardLv`
**DE (read-only):** Robert und Johann, turnt!
**Severity:** HIGH
**Category:** NAMES
**CURRENT_DA:** Robert og Jan, motionér!
**PROPOSED_DA:** Robert og Johann, motionér!
**Problēma:** Det danske navn Jan svarer ikke til det tyske Johann i kildeteksten.
**Audita pamatojums:** Det danske navn Jan svarer ikke til det tyske Johann i kildeteksten.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 153

**Audit ID:** `DA-KURSS-FPR-0153`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.intro`
**Field type:** `intro`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Foredrag fjorten: Modale verber müssen, wollen og mögen.
**PROPOSED_DA:** Lektion fjorten: Modale verber müssen, wollen og mögen.
**Problēma:** Foredrag betyder 'lecture', ikke 'lektion', og stemmer ikke med lektionens titel.
**Audita pamatojums:** Foredrag betyder 'lecture', ikke 'lektion', og stemmer ikke med lektionens titel.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 154

**Audit ID:** `DA-KURSS-FPR-0154`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** müssen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** müssen — need / have to do
**PROPOSED_DA:** müssen — at skulle / være nødt til
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 155

**Audit ID:** `DA-KURSS-FPR-0155`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** ich muss
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ich muss — I need / I have to do
**PROPOSED_DA:** ich muss — jeg skal / jeg er nødt til
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 156

**Audit ID:** `DA-KURSS-FPR-0156`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** du musst
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** du musst — you need / you must do
**PROPOSED_DA:** du musst — du skal / du er nødt til
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 157

**Audit ID:** `DA-KURSS-FPR-0157`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** er muss
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** er muss — he needs / he has to
**PROPOSED_DA:** er muss — han skal / han er nødt til
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 158

**Audit ID:** `DA-KURSS-FPR-0158`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** sie muss
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** sie muss — she needs / she has to
**PROPOSED_DA:** sie muss — hun skal / hun er nødt til
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 159

**Audit ID:** `DA-KURSS-FPR-0159`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** es muss
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** es muss — it needs / it has to do
**PROPOSED_DA:** es muss — det skal / det er nødt til
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 160

**Audit ID:** `DA-KURSS-FPR-0160`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[6]`
**Field type:** `sectionItem`
**DE (read-only):** wir müssen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** wir müssen — we need / we have to do
**PROPOSED_DA:** wir müssen — vi skal / vi er nødt til
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 161

**Audit ID:** `DA-KURSS-FPR-0161`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[7]`
**Field type:** `sectionItem`
**DE (read-only):** ihr müsst
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ihr müsst — you need / you must
**PROPOSED_DA:** ihr müsst — I skal / I er nødt til
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 162

**Audit ID:** `DA-KURSS-FPR-0162`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** sie müssen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** sie müssen — they / they need
**PROPOSED_DA:** sie müssen — de skal / de er nødt til
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 163

**Audit ID:** `DA-KURSS-FPR-0163`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** lernen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** lernen — to learn
**PROPOSED_DA:** lernen — at lære
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 164

**Audit ID:** `DA-KURSS-FPR-0164`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[10]`
**Field type:** `sectionItem`
**DE (read-only):** vorwärts
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** vorwärts — forward
**PROPOSED_DA:** vorwärts — fremad
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 165

**Audit ID:** `DA-KURSS-FPR-0165`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[11]`
**Field type:** `sectionItem`
**DE (read-only):** vorwärts kommen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** vorwärts kommen — to get ahead
**PROPOSED_DA:** vorwärts kommen — at komme fremad
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 166

**Audit ID:** `DA-KURSS-FPR-0166`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** wollen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** wollen — to want
**PROPOSED_DA:** wollen — at ville
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 167

**Audit ID:** `DA-KURSS-FPR-0167`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[15]`
**Field type:** `sectionItem`
**DE (read-only):** er will
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** er will — he wants
**PROPOSED_DA:** er will — han vil
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 168

**Audit ID:** `DA-KURSS-FPR-0168`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[16]`
**Field type:** `sectionItem`
**DE (read-only):** sie will
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** sie will — she wants
**PROPOSED_DA:** sie will — hun vil
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 169

**Audit ID:** `DA-KURSS-FPR-0169`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[18]`
**Field type:** `sectionItem`
**DE (read-only):** wir wollen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** wir wollen — we want
**PROPOSED_DA:** wir wollen — vi vil
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 170

**Audit ID:** `DA-KURSS-FPR-0170`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[19]`
**Field type:** `sectionItem`
**DE (read-only):** ihr wollt
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ihr wollt — you want
**PROPOSED_DA:** ihr wollt — I vil
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 171

**Audit ID:** `DA-KURSS-FPR-0171`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[20]`
**Field type:** `sectionItem`
**DE (read-only):** sie wollen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** sie wollen — they / they want
**PROPOSED_DA:** sie wollen — de vil
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 172

**Audit ID:** `DA-KURSS-FPR-0172`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[21]`
**Field type:** `sectionItem`
**DE (read-only):** mögen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** mögen — want / want / like
**PROPOSED_DA:** mögen — at ville / at ønske / at kunne lide
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 173

**Audit ID:** `DA-KURSS-FPR-0173`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[22]`
**Field type:** `sectionItem`
**DE (read-only):** ich mag
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ich mag — I want / I like
**PROPOSED_DA:** ich mag — jeg vil / jeg kan lide
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 174

**Audit ID:** `DA-KURSS-FPR-0174`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[23]`
**Field type:** `sectionItem`
**DE (read-only):** du magst
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** du magst — you want / you like
**PROPOSED_DA:** du magst — du vil / du kan lide
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 175

**Audit ID:** `DA-KURSS-FPR-0175`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[24]`
**Field type:** `sectionItem`
**DE (read-only):** er mag
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** er mag — he wants / he likes
**PROPOSED_DA:** er mag — han vil / han kan lide
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 176

**Audit ID:** `DA-KURSS-FPR-0176`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[25]`
**Field type:** `sectionItem`
**DE (read-only):** sie mag
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** sie mag — she wants / she likes
**PROPOSED_DA:** sie mag — hun vil / hun kan lide
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 177

**Audit ID:** `DA-KURSS-FPR-0177`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[26]`
**Field type:** `sectionItem`
**DE (read-only):** es mag
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** es mag — it wants / it likes
**PROPOSED_DA:** es mag — det vil / det kan lide
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 178

**Audit ID:** `DA-KURSS-FPR-0178`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[27]`
**Field type:** `sectionItem`
**DE (read-only):** wir mögen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** wir mögen — we want
**PROPOSED_DA:** wir mögen — vi vil / vi kan lide
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 179

**Audit ID:** `DA-KURSS-FPR-0179`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[28]`
**Field type:** `sectionItem`
**DE (read-only):** ihr mögt
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ihr mögt — you want
**PROPOSED_DA:** ihr mögt — I vil / I kan lide
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 180

**Audit ID:** `DA-KURSS-FPR-0180`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[29]`
**Field type:** `sectionItem`
**DE (read-only):** sie mögen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** sie mögen — they / she wants
**PROPOSED_DA:** sie mögen — de vil / de kan lide
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 181

**Audit ID:** `DA-KURSS-FPR-0181`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[31]`
**Field type:** `sectionItem`
**DE (read-only):** munden
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** munden — to taste good
**PROPOSED_DA:** munden — at smage godt
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 182

**Audit ID:** `DA-KURSS-FPR-0182`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[34]`
**Field type:** `sectionItem`
**DE (read-only):** ihm
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ihm — to him
**PROPOSED_DA:** ihm — til ham
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 183

**Audit ID:** `DA-KURSS-FPR-0183`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[35]`
**Field type:** `sectionItem`
**DE (read-only):** ihr
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ihr — for her
**PROPOSED_DA:** ihr — til hende
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 184

**Audit ID:** `DA-KURSS-FPR-0184`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[1].items[38]`
**Field type:** `sectionItem`
**DE (read-only):** ihnen
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ihnen — for them / them
**PROPOSED_DA:** ihnen — til dem
**Problēma:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Audita pamatojums:** Den engelske forklaring er en fremmedsprogsrest og skal være på dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 185

**Audit ID:** `DA-KURSS-FPR-0185`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[1].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**CURRENT_DA:** I nuværende ental er 1. og 3. personer ens.
**PROPOSED_DA:** I nutid ental er 1. og 3. person ens.
**Problēma:** “Nuværende ental” er unaturligt, og person bør stå i ental i denne grammatiske formulering.
**Audita pamatojums:** “Nuværende ental” er unaturligt, og person bør stå i ental i denne grammatiske formulering.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 186

**Audit ID:** `DA-KURSS-FPR-0186`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** ß skrives i midten eller slutningen af et ord efter en lang vokal eller en diftong: die Füße, die Straße, ich muss, er muss.
**PROPOSED_DA:** ß skrives i midten eller slutningen af et ord efter en lang vokal eller en diftong: die Füße, die Straße. Efter en kort vokal skrives ss: ich muss, er muss.
**Problēma:** Eksemplerne ich muss og er muss indeholder ss, ikke ß, og modsiger derfor den første regel.
**Audita pamatojums:** Eksemplerne ich muss og er muss indeholder ss, ikke ß, og modsiger derfor den første regel.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 187

**Audit ID:** `DA-KURSS-FPR-0187`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**CURRENT_DA:** Hvis andre former har ss, kan ß stå før endelsen: müssen, ich muss, du musst, ihr müsst.
**PROPOSED_DA:** Efter en lang vokal eller en diftong skrives ß også foran en endelse, fx Füße og heißt.
**Problēma:** Reglen er forkert formuleret, og alle eksemplerne viser ss, ikke ß.
**Audita pamatojums:** Reglen er forkert formuleret, og alle eksemplerne viser ss, ikke ß.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 188

**Audit ID:** `DA-KURSS-FPR-0188`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Tilsvarende lyder g før s i det lettiske ord “smags” tættere på k.
**PROPOSED_DA:** Tilsvarende lyder g før s i det tyske ord “magst” tættere på k.
**Problēma:** Sætningen indeholder en lettisk rest og bør i stedet bruge det tyske eksempel magst.
**Audita pamatojums:** Sætningen indeholder en lettisk rest og bør i stedet bruge det tyske eksempel magst.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 189

**Audit ID:** `DA-KURSS-FPR-0189`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[0].lv`
**Field type:** `cardLv`
**DE (read-only):** Wer will fleißig lernen?
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Hvem vil studere hårdt?
**PROPOSED_DA:** Hvem vil studere flittigt?
**Problēma:** Fleißig betyder flittig, og studere flittigt er mere idiomatisk dansk end studere hårdt.
**Audita pamatojums:** Fleißig betyder flittig, og studere flittigt er mere idiomatisk dansk end studere hårdt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 190

**Audit ID:** `DA-KURSS-FPR-0190`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[1].lv`
**Field type:** `cardLv`
**DE (read-only):** Alle Schüler wollen fleißig lernen.
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Alle studerende ønsker at studere hårdt.
**PROPOSED_DA:** Alle elever vil studere flittigt.
**Problēma:** Wollen bør oversættes med vil, Schüler med elever, og fleißig med flittigt.
**Audita pamatojums:** Wollen bør oversættes med vil, Schüler med elever, og fleißig med flittigt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 191

**Audit ID:** `DA-KURSS-FPR-0191`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[5].lv`
**Field type:** `cardLv`
**DE (read-only):** Wer muss fleißig lernen?
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Hvem skal studere hårdt?
**PROPOSED_DA:** Hvem skal studere flittigt?
**Problēma:** Fleißig betyder flittig, ikke hård; studere flittigt er den naturlige danske formulering.
**Audita pamatojums:** Fleißig betyder flittig, ikke hård; studere flittigt er den naturlige danske formulering.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 192

**Audit ID:** `DA-KURSS-FPR-0192`
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[4].cards[6].lv`
**Field type:** `cardLv`
**DE (read-only):** Die Schüler müssen fleißig lernen.
**Severity:** MEDIUM
**Category:** TRANSLATION
**CURRENT_DA:** Studerende skal studere hårdt.
**PROPOSED_DA:** Eleverne skal studere flittigt.
**Problēma:** Die Schüler er eleverne, og fleißig skal gengives med flittigt.
**Audita pamatojums:** Die Schüler er eleverne, og fleißig skal gengives med flittigt.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 193

**Audit ID:** `DA-KURSS-FPR-0193`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** sollen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** sollen — to need / to be obliged
**PROPOSED_DA:** sollen — at skulle / være forpligtet til
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 194

**Audit ID:** `DA-KURSS-FPR-0194`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** ich soll
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ich soll — I need / I have to do
**PROPOSED_DA:** ich soll — jeg skal / jeg er nødt til at gøre det
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 195

**Audit ID:** `DA-KURSS-FPR-0195`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** du sollst
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** du sollst — you need / you must do
**PROPOSED_DA:** du sollst — du skal / du er nødt til at gøre det
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 196

**Audit ID:** `DA-KURSS-FPR-0196`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** er soll
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** er soll — he needs / he has to
**PROPOSED_DA:** er soll — han skal / han er nødt til det
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 197

**Audit ID:** `DA-KURSS-FPR-0197`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** wir sollen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** wir sollen — we need / we have to do
**PROPOSED_DA:** wir sollen — vi skal / vi er nødt til at gøre det
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 198

**Audit ID:** `DA-KURSS-FPR-0198`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** ihr sollt
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ihr sollt — you need / you should
**PROPOSED_DA:** ihr sollt — I skal / I bør
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 199

**Audit ID:** `DA-KURSS-FPR-0199`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[6]`
**Field type:** `sectionItem`
**DE (read-only):** sie sollen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** sie sollen — they / they need
**PROPOSED_DA:** sie sollen — de skal / de er nødt til det
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

## Finding 200

**Audit ID:** `DA-KURSS-FPR-0200`
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[1].items[7]`
**Field type:** `sectionItem`
**DE (read-only):** dürfen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** dürfen — to be allowed
**PROPOSED_DA:** dürfen — at måtte / have lov til
**Problēma:** Feltet indeholder engelsk tekst i stedet for dansk.
**Audita pamatojums:** Feltet indeholder engelsk tekst i stedet for dansk.
**Avots:** luna

**Statuss:**

**OWNER_DECISION:**

---

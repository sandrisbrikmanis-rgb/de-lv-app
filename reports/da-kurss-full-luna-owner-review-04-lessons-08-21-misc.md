# DA–DE Kurss — OWNER review — Lekcijas 8–21, training, UI

Avots: `reports/da-kurss-full-audit.md` · `reports/temp/da-kurss-full-audit.json`
Findings: **1–27** (27 ieraksti)
Auditors: **GPT-5.6 Luna** (READ-ONLY)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-kurss-full-luna-owner-decisions-04-lessons-08-21-misc.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA.
> **Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

## Finding 1

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-001
**Source audit ID:** `DA-KURSS-L0010`
**Lesson/ID:** ``
**ID / path:** ``
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** TRANSLATION
**Field:** `text`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** 
**PROPOSED_DA:** 
**Problēma:** —
**Audita pamatojums:** 
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-002
**Source audit ID:** `DA-KURSS-L0011`
**Lesson/ID:** `lesson8`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[31].lv`
**DE (read-only):** Die Schülerin liest laut und deutlich.
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Eleven læser højt og tydeligt.
**PROPOSED_DA:** Den kvindelige elev læser højt og tydeligt.
**Problēma:** Den tyske tekst angiver specifikt en kvindelig elev; det danske 'eleven' er kønsneutralt.
**Audita pamatojums:** Den tyske tekst angiver specifikt en kvindelig elev; det danske 'eleven' er kønsneutralt.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-003
**Source audit ID:** `DA-KURSS-L0012`
**Lesson/ID:** `lesson8`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[3].lv`
**DE (read-only):** Hast du das Fenster geöffnet?
**Severity:** MEDIUM
**Category:** TRANSLATION
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Åbnede du vinduet?
**PROPOSED_DA:** Har du åbnet vinduet?
**Problēma:** Det tyske perfektum er oversat med dansk præteritum; i denne parallelle øvelse bør perfektum bevares.
**Audita pamatojums:** Det tyske perfektum er oversat med dansk præteritum; i denne parallelle øvelse bør perfektum bevares.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-004
**Source audit ID:** `DA-KURSS-L0013`
**Lesson/ID:** `lesson8`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[4].lv`
**DE (read-only):** Nein, ich habe das Fenster nicht geöffnet.
**Severity:** MEDIUM
**Category:** TRANSLATION
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Nej, jeg åbnede ikke vinduet.
**PROPOSED_DA:** Nej, jeg har ikke åbnet vinduet.
**Problēma:** Det tyske perfektum er oversat med dansk præteritum; den danske perfektumform matcher øvelsens tempus bedre.
**Audita pamatojums:** Det tyske perfektum er oversat med dansk præteritum; den danske perfektumform matcher øvelsens tempus bedre.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-005
**Source audit ID:** `DA-KURSS-L0014`
**Lesson/ID:** `lesson11`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[6].lv`
**DE (read-only):** Franz hat keine Feder und keinen Bleistift.
**Severity:** MEDIUM
**Category:** NAMES
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Franc har ingen pen og ingen blyant.
**PROPOSED_DA:** Franz har ingen pen og ingen blyant.
**Problēma:** Personnavnet afviger fra den tyske kilde og fra den konsekvente form Franz i de følgende kort.
**Audita pamatojums:** Personnavnet afviger fra den tyske kilde og fra den konsekvente form Franz i de følgende kort.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-006
**Source audit ID:** `DA-KURSS-L0015`
**Lesson/ID:** `lesson11`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[17].lv`
**DE (read-only):** Schreibt Franz auch?
**Severity:** MEDIUM
**Category:** NAMES
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Skriver Francis også?
**PROPOSED_DA:** Skriver Franz også?
**Problēma:** Personnavnet Francis afviger fra den tyske kilde Franz og fra den øvrige navnebrug i lektionen.
**Audita pamatojums:** Personnavnet Francis afviger fra den tyske kilde Franz og fra den øvrige navnebrug i lektionen.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-007
**Source audit ID:** `DA-KURSS-L0016`
**Lesson/ID:** `lesson11`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[18].lv`
**DE (read-only):** Nein, Franz schreibt nicht, er zeichnet.
**Severity:** MEDIUM
**Category:** NAMES
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Nej, Franz skriver ikke, han tegner.
**PROPOSED_DA:** Nej, Franz skriver ikke, han tegner.
**Problēma:** Navnet Franz er korrekt, men forekomsten bør fastholdes som konsekvent standardform efter varianterne Franc og Francis.
**Audita pamatojums:** Navnet Franz er korrekt, men forekomsten bør fastholdes som konsekvent standardform efter varianterne Franc og Francis.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-008
**Source audit ID:** `DA-KURSS-L0017`
**Lesson/ID:** `lesson12`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23]`
**DE (read-only):** das Gummi
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `sectionItem`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** das Gummi — viskelæder
**PROPOSED_DA:** das Gummi — gummi
**Problēma:** Gummi betyder gummi på dansk; viskelæder svarer normalt til tysk Radiergummi.
**Audita pamatojums:** Gummi betyder gummi på dansk; viskelæder svarer normalt til tysk Radiergummi.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-009
**Source audit ID:** `DA-KURSS-L0018`
**Lesson/ID:** `lesson12`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[7].lv`
**DE (read-only):** Er heißt Johann.
**Severity:** MEDIUM
**Category:** NAMES
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Han hedder Jan.
**PROPOSED_DA:** Han hedder Johann.
**Problēma:** Det danske navn Jan matcher ikke det tyske kildesætnings navn Johann.
**Audita pamatojums:** Det danske navn Jan matcher ikke det tyske kildesætnings navn Johann.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-010
**Source audit ID:** `DA-KURSS-L0019`
**Lesson/ID:** `lesson12`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[14].lv`
**DE (read-only):** Franz ist am größten.
**Severity:** MEDIUM
**Category:** NAMES
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Frans er den største.
**PROPOSED_DA:** Franz er den største.
**Problēma:** Det danske navn Frans matcher ikke navnet Franz i den tyske kildesætning.
**Audita pamatojums:** Det danske navn Frans matcher ikke navnet Franz i den tyske kildesætning.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-011
**Source audit ID:** `DA-KURSS-L0020`
**Lesson/ID:** `lesson12`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[19].lv`
**DE (read-only):** Wie heißen sie?
**Severity:** LOW
**Category:** NATURALNESS
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Hvad er deres navne?
**PROPOSED_DA:** Hvad hedder de?
**Problēma:** Hvad hedder de? er den idiomatiske danske formulering; Hvad er deres navne? lyder som en direkte oversættelse.
**Audita pamatojums:** Hvad hedder de? er den idiomatiske danske formulering; Hvad er deres navne? lyder som en direkte oversættelse.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-012
**Source audit ID:** `DA-KURSS-L0021`
**Lesson/ID:** `lesson13`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv`
**DE (read-only):** Nein, Robert und Johann turnen nicht.
**Severity:** MEDIUM
**Category:** NAMES
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Nej, Robert og Jan laver ikke gymnastik.
**PROPOSED_DA:** Nej, Robert og Johann laver ikke gymnastik.
**Problēma:** Det danske navn Jan svarer ikke til Johann i den tyske kildetekst og bryder navnekonsistensen.
**Audita pamatojums:** Det danske navn Jan svarer ikke til Johann i den tyske kildetekst og bryder navnekonsistensen.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-013
**Source audit ID:** `DA-KURSS-L0022`
**Lesson/ID:** `lesson13`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[30].lv`
**DE (read-only):** Robert und Johann, turnt!
**Severity:** MEDIUM
**Category:** NAMES
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Robert og Jan, lav gymnastik!
**PROPOSED_DA:** Robert og Johann, lav gymnastik!
**Problēma:** Personnavnet Jan svarer ikke til Johann i den tyske kildetekst.
**Audita pamatojums:** Personnavnet Jan svarer ikke til Johann i den tyske kildetekst.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-014
**Source audit ID:** `DA-KURSS-L0023`
**Lesson/ID:** `lesson14`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[7].text`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**Field:** `grammarText`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Wollen betyder bevidst at ville gøre noget.
**PROPOSED_DA:** Wollen udtrykker et bevidst ønske om at gøre noget.
**Problēma:** Formuleringen er forståelig, men "betyder bevidst at ville" lyder unaturlig på dansk.
**Audita pamatojums:** Formuleringen er forståelig, men "betyder bevidst at ville" lyder unaturlig på dansk.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-015
**Source audit ID:** `DA-KURSS-L0024`
**Lesson/ID:** `lesson15`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[5].text`
**DE (read-only):** —
**Severity:** LOW
**Category:** NATURALNESS
**Field:** `grammarText`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Hvis projektet bruger moderne skrift, kan du skrive: du isst, er/sie/es isst, ihr esst.
**PROPOSED_DA:** Hvis projektet bruger moderne stavemåde, kan du skrive: du isst, er/sie/es isst, ihr esst.
**Problēma:** “Moderne stavemåde” er mere præcist og konsekvent med overskriften “Moderne stavemåde”.
**Audita pamatojums:** “Moderne stavemåde” er mere præcist og konsekvent med overskriften “Moderne stavemåde”.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-016
**Source audit ID:** `DA-KURSS-L0025`
**Lesson/ID:** `lesson15`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[4].lv`
**DE (read-only):** Mutter, darf ich die Pflaumen essen?
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Mor, må jeg spise blommer?
**PROPOSED_DA:** Mor, må jeg spise blommerne?
**Problēma:** Den tyske bestemthed i “die Pflaumen” bør gengives med det danske “blommerne”, ikke det ubestemte “blommer”.
**Audita pamatojums:** Den tyske bestemthed i “die Pflaumen” bør gengives med det danske “blommerne”, ikke det ubestemte “blommer”.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-017
**Source audit ID:** `DA-KURSS-L0026`
**Lesson/ID:** `lesson16`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[6].text`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `grammarText`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Dativartikel og navneord i flertal har ofte endelsen -n.
**PROPOSED_DA:** I dativ flertal får artiklen formen den, og navneordet får ofte endelsen -n.
**Problēma:** I tysk får dativartiklen ikke generelt endelsen -n; det er især navneordet, der ofte får denne endelse.
**Audita pamatojums:** I tysk får dativartiklen ikke generelt endelsen -n; det er især navneordet, der ofte får denne endelse.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-018
**Source audit ID:** `DA-KURSS-L0027`
**Lesson/ID:** `lesson16`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[11].text`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** GRAMMAR
**Field:** `grammarText`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Ord, der ofte bruges uden artiklen: die Milch, das Brot.
**PROPOSED_DA:** Ord, der ofte bruges uden artikel: die Milch, das Brot.
**Problēma:** Den generelle formulering på dansk er normalt “uden artikel”, ikke “uden artiklen”.
**Audita pamatojums:** Den generelle formulering på dansk er normalt “uden artikel”, ikke “uden artiklen”.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-019
**Source audit ID:** `DA-KURSS-L0028`
**Lesson/ID:** `lesson16`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[0].task`
**DE (read-only):** Der Vater ruft den Mann.
**Severity:** MEDIUM
**Category:** NATURALNESS
**Field:** `cardTask`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
**PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
**Problēma:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Audita pamatojums:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-020
**Source audit ID:** `DA-KURSS-L0029`
**Lesson/ID:** `lesson16`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[1].task`
**DE (read-only):** Der Vater ruft die Frau.
**Severity:** MEDIUM
**Category:** NATURALNESS
**Field:** `cardTask`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
**PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
**Problēma:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Audita pamatojums:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-021
**Source audit ID:** `DA-KURSS-L0030`
**Lesson/ID:** `lesson16`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[2].task`
**DE (read-only):** Der Vater ruft das Kind.
**Severity:** MEDIUM
**Category:** NATURALNESS
**Field:** `cardTask`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
**PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
**Problēma:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Audita pamatojums:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-022
**Source audit ID:** `DA-KURSS-L0031`
**Lesson/ID:** `lesson16`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[3].task`
**DE (read-only):** Der Vater ruft den Sohn.
**Severity:** MEDIUM
**Category:** NATURALNESS
**Field:** `cardTask`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
**PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
**Problēma:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Audita pamatojums:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-023
**Source audit ID:** `DA-KURSS-L0032`
**Lesson/ID:** `lesson16`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[4].task`
**DE (read-only):** Der Vater ruft das Fräulein.
**Severity:** MEDIUM
**Category:** NATURALNESS
**Field:** `cardTask`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
**PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
**Problēma:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Audita pamatojums:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-024
**Source audit ID:** `DA-KURSS-L0033`
**Lesson/ID:** `lesson16`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson16.sections[4].cards[5].task`
**DE (read-only):** Der Vater ruft die Tante.
**Severity:** MEDIUM
**Category:** NATURALNESS
**Field:** `cardTask`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening.
**PROPOSED_DA:** Indsæt den rigtige artikel i dativ/akkusativ ud fra sætningens betydning.
**Problēma:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Audita pamatojums:** “Efter sætningens mening” er en direkte og ikke-idiomatisk formulering; “ud fra sætningens betydning” er naturligt dansk.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-025
**Source audit ID:** `DA-KURSS-L0034`
**Lesson/ID:** `lesson17`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[8].lv`
**DE (read-only):** Nein, sie spricht mit den Freunden.
**Severity:** MEDIUM
**Category:** SEMANTICS
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Nej, hun taler med sine venner.
**PROPOSED_DA:** Nej, hun taler med vennerne.
**Problēma:** Det tyske »den Freunden« er bestemt flertal; »sine venner« tilføjer et possessivt pronomen, som ikke findes i kildesætningen.
**Audita pamatojums:** Det tyske »den Freunden« er bestemt flertal; »sine venner« tilføjer et possessivt pronomen, som ikke findes i kildesætningen.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-026
**Source audit ID:** `DA-KURSS-L0035`
**Lesson/ID:** `lesson21`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[0].lv`
**DE (read-only):** Alle Hefte sind in der Mappe.
**Severity:** MEDIUM
**Category:** TRANSLATION
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Alle notesbøgerne er i tasken.
**PROPOSED_DA:** Alle hæfter er i mappen.
**Problēma:** DA ændrer både substantivet og beholderen: Hefte svarer til hæfte, og Mappe til mappe; desuden er bestemthed tilføjet.
**Audita pamatojums:** DA ændrer både substantivet og beholderen: Hefte svarer til hæfte, og Mappe til mappe; desuden er bestemthed tilføjet.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** DA-KURSS-LUNA-04LESSONS0821MISC-027
**Source audit ID:** `DA-KURSS-L0036`
**Lesson/ID:** `lesson21`
**ID / path:** `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[1].lv`
**DE (read-only):** Ich nehme die Hefte aus der Mappe.
**Severity:** MEDIUM
**Category:** TRANSLATION
**Field:** `cardLv`
**Production file:** `data/da/courseLessons.js`
**CURRENT_DA:** Jeg tager notesbøgerne op af min taske.
**PROPOSED_DA:** Jeg tager hæfterne ud af mappen.
**Problēma:** DA oversætter Hefte/Mappe som notesbøger/taske og ændrer dermed betydningen af begge substantiver.
**Audita pamatojums:** DA oversætter Hefte/Mappe som notesbøger/taske og ændrer dermed betydningen af begge substantiver.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

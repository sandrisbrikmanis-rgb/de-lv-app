# DA–DE Kurss — OWNER review final post-repair Group 02

Avots: [da-kurss-final-post-repair-audit.md](./da-kurss-final-post-repair-audit.md)
Findings: **51–100** (50 ieraksti)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA saturu.

## Finding 1

**Audit ID:** DA-KURSS-FPR-0051
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Patskaņu garums vai īsums atkarīgs no sekojošiem līdzskaņiem.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Vokalens længde eller korthed afhænger af de efterfølgende konsonanter.

---

## Finding 2

**Audit ID:** DA-KURSS-FPR-0052
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Ja patskanim seko viens līdzskanis, patskani izrunā gari: Vögel (fōgel), Schüler (šūler), Bücher (būcher).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Hvis en vokal efterfølges af én konsonant, udtales vokalen langt: Vögel (fōgel), Schüler (šūler), Bücher (būcher).

---

## Finding 3

**Audit ID:** DA-KURSS-FPR-0053
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Ja patskanim seko divi vai vairāki līdzskaņi, patskani izrunā īsi: wir können, der Löffel, der Müller.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Hvis en vokal efterfølges af to eller flere konsonanter, udtales vokalen kort: wir können, der Löffel, der Müller.

---

## Finding 4

**Audit ID:** DA-KURSS-FPR-0054
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[6]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Latviešu valodas o ir divskanis uo. Vācu o skan citādi, piemēram: fonds, nominatīvs, fotogrāfs.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD
**Audita pamatojums:** LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Det tyske o udtales anderledes end det danske o. Lyt især til udtalen i tyske ord og efterlign den.

---

## Finding 5

**Audit ID:** DA-KURSS-FPR-0055
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[7]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Udtal korrekt: der Großvater (dēr grōsfāter).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu.

---

## Finding 6

**Audit ID:** DA-KURSS-FPR-0056
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[8]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Divskani ei izrunā kā ai: seid (zait), fleißig (flaišich).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Diftongen ei udtales som ai: seid (zait), fleißig (flaišich).

---

## Finding 7

**Audit ID:** DA-KURSS-FPR-0057
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Vācu e var būt šaurs vai plats: der Lehrer (dēr lērer). Celma ē ir garš un šaurs, galotnes e ir īss un plats.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Det tyske e kan være lukket eller åbent: der Lehrer (dēr lērer). Stammens e er langt og lukket, mens endelsens e er kort og åbent.

---

## Finding 8

**Audit ID:** DA-KURSS-FPR-0058
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[6]`
**Field type:** `sectionItem`
**DE (read-only):** der Bruder (dēr brūder)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** der Bruder (dēr brūder) — bror
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu.

---

## Finding 9

**Audit ID:** DA-KURSS-FPR-0059
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** der Schreibtisch (dēr šreibtīš)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** der Schreibtisch (dēr šreibtīš) — et skrivebord
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu.

---

## Finding 10

**Audit ID:** DA-KURSS-FPR-0060
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[16]`
**Field type:** `sectionItem`
**DE (read-only):** zusammen (cuzāmen)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** zusammen (cuzāmen) — sammen
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu.

---

## Finding 11

**Audit ID:** DA-KURSS-FPR-0061
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[18]`
**Field type:** `sectionItem`
**DE (read-only):** der Freund (dēr froint)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** der Freund (dēr froint) — ven
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu.

---

## Finding 12

**Audit ID:** DA-KURSS-FPR-0062
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[21]`
**Field type:** `sectionItem`
**DE (read-only):** der Stuhl (dēr štūl)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** der Stuhl (dēr štūl) — en stol
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu.

---

## Finding 13

**Audit ID:** DA-KURSS-FPR-0063
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[25]`
**Field type:** `sectionItem`
**DE (read-only):** die Landkarte (dī lantkarte)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** die Landkarte (dī lantkarte) — et landkort
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu.

---

## Finding 14

**Audit ID:** DA-KURSS-FPR-0064
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[28]`
**Field type:** `sectionItem`
**DE (read-only):** die Schwester (dī švester)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** die Schwester (dī švester) — søster
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu.

---

## Finding 15

**Audit ID:** DA-KURSS-FPR-0065
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** eu izrunā kā oi: der Freund (dēr froint), neun (noin).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** eu udtales som oi: der Freund (dēr froint), neun (noin).

---

## Finding 16

**Audit ID:** DA-KURSS-FPR-0066
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** h pa lielākai daļai ir garumzīme iepriekšējam patskanim: der Stuhl (dēr štūl), zehn (cēn).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** h fungerer ofte som længdetegn for den foregående vokal og udtales da ikke: der Stuhl (dēr štūl), zehn (cēn).

---

## Finding 17

**Audit ID:** DA-KURSS-FPR-0067
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[2].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD
**Audita pamatojums:** LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** z udtales som ts: Franz (frants), das Zimmer (tsimer).

---

## Finding 18

**Audit ID:** DA-KURSS-FPR-0068
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].heading`
**Field type:** `grammarHeading`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Latviešu datīvs un vācu nominatīvs/akuzatīvs
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD
**Audita pamatojums:** LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Dansk dativ og tysk nominativ/akkusativ

---

## Finding 19

**Audit ID:** DA-KURSS-FPR-0069
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** der Vetter (dēr feter)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** der Vetter (dēr feter) — fætter
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu.

---

## Finding 20

**Audit ID:** DA-KURSS-FPR-0070
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[23]`
**Field type:** `sectionItem`
**DE (read-only):** das Gummi (das gumī)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** das Gummi (das gumī) — viskelæder
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu.

---

## Finding 21

**Audit ID:** DA-KURSS-FPR-0071
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Vārdos Schwester, am jüngsten st izrunā kā latviski parasts st: Schwester (švester), jüngsten (jünksten).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** I ordene Schwester og am jüngsten udtales st som almindeligt st: Schwester (švester), jüngsten (jünksten).

---

## Finding 22

**Audit ID:** DA-KURSS-FPR-0072
**Lesson/ID:** `lesson12`
**Path:** `COURSE_LESSON_DATA.kurssLesson12.sections[2].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** h vārdā der Federhalter ir skaņa, kuru izrunā, bet vārdā der Sohn — The h in the word der Federhalter is the sound that is pronounced, and in the word der Sohn the longing.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD
**Audita pamatojums:** LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** I ordet der Federhalter udtales h, mens h i ordet der Sohn fungerer som længdetegn og ikke udtales.

---

## Finding 23

**Audit ID:** DA-KURSS-FPR-0073
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Hvis præpositionsdelen er understreget, adskilles den i nutid og går i slutningen af ​​sætningen.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: ZERO_WIDTH
**Audita pamatojums:** ZERO_WIDTH
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt redzamo dāņu tekstu, bet izņemt neredzamo ZERO_WIDTH rakstzīmi.

---

## Finding 24

**Audit ID:** DA-KURSS-FPR-0074
**Lesson/ID:** `lesson13`
**Path:** `COURSE_LESSON_DATA.kurssLesson13.sections[3].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** pf vārdā Kopf izrunā tā, ka abus līdzskaņus var sadzirdēt.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD
**Audita pamatojums:** LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** pf i ordet Kopf udtales, så både p og f kan høres.

---

## Finding 25

**Audit ID:** DA-KURSS-FPR-0075
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** ß raksta vārda vidū vai beigās pēc gara patskaņa vai divskaņa: die Füße, die Straße, ich muss, er muss.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** ß skrives i midten eller slutningen af et ord efter en lang vokal eller en diftong: die Füße, die Straße. Bemærk: ich muss, er muss skrives med ss efter kort vokal.

---

## Finding 26

**Audit ID:** DA-KURSS-FPR-0076
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Ja citās formās ir ss, tad pirms galotnes var būt ß: müssen, ich muss, du musst, ihr müsst.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Hvis grundformen har ss, kan bøjningsformer bevare ss: müssen, ich muss, du musst, ihr müsst.

---

## Finding 27

**Audit ID:** DA-KURSS-FPR-0077
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Ja pēc g seko t, tad g izklausās tuvāk k skaņai: du magst, ihr mögt.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Når g efterfølges af t, kan g lyde tættere på k: du magst, ihr mögt.

---

## Finding 28

**Audit ID:** DA-KURSS-FPR-0078
**Lesson/ID:** `lesson14`
**Path:** `COURSE_LESSON_DATA.kurssLesson14.sections[3].items[5]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD
**Audita pamatojums:** LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** En lignende lydtilpasning kan forekomme på dansk, når en stemt konsonant står foran en ustemt konsonant.

---

## Finding 29

**Audit ID:** DA-KURSS-FPR-0079
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[1].examples[0]`
**Field type:** `grammarExamples`
**DE (read-only):** müssen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** müssen — vajadzēt aiz nepieciešamības vai pārliecības
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** müssen — at skulle / være nødt til på grund af nødvendighed eller overbevisning

---

## Finding 30

**Audit ID:** DA-KURSS-FPR-0080
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[2].items[6].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** I det sammensatte verbum entzweischneiden lægges vægten på præfikset entzweí-, så i nutid er præfikset adskilt og placeret i slutningen af ​​sætningen.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: ZERO_WIDTH
**Audita pamatojums:** ZERO_WIDTH
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt redzamo dāņu tekstu, bet izņemt neredzamo ZERO_WIDTH rakstzīmi.

---

## Finding 31

**Audit ID:** DA-KURSS-FPR-0081
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Vārdā Äpfel ä izrunā īsi, jo pēc patskaņa seko divi līdzskaņi.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD
**Audita pamatojums:** LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** I ordet Äpfel udtales ä kort, fordi vokalen efterfølges af to konsonanter.

---

## Finding 32

**Audit ID:** DA-KURSS-FPR-0082
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Vārdā schälen ä izrunā gari, jo pēc patskaņa seko viens līdzskanis.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD
**Audita pamatojums:** LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** I ordet schälen udtales ä langt, fordi vokalen efterfølges af én konsonant.

---

## Finding 33

**Audit ID:** DA-KURSS-FPR-0083
**Lesson/ID:** `lesson15`
**Path:** `COURSE_LESSON_DATA.kurssLesson15.sections[3].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Husk: den tyske diftong ei udtales som ai: reif, unreif.

---

## Finding 34

**Audit ID:** DA-KURSS-FPR-0084
**Lesson/ID:** `lesson16`
**Path:** `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** Vārdos wem, dem, den, der
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Vārdos wem, dem, den, der — In wem, dem, den, der, the e is long and narrow.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** I wem, dem, den og der er e langt og lukket.

---

## Finding 35

**Audit ID:** DA-KURSS-FPR-0085
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[1].examples[1]`
**Field type:** `grammarExamples`
**DE (read-only):** Womit gräbt der Knabe die Grube?
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Womit gräbt der Knabe die Grube? — Ar ko zēns rok bedri?
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Womit gräbt der Knabe die Grube? — Hvad graver drengen hullet med?

---

## Finding 36

**Audit ID:** DA-KURSS-FPR-0086
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[5].text`
**Field type:** `grammarText`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** De sammensatte verber auffangen og abwischen har accent på præfikset. Derfor er det nuværende præfiks adskilt og placeret i slutningen af ​​sætningen.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: ZERO_WIDTH
**Audita pamatojums:** ZERO_WIDTH
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Saglabāt redzamo dāņu tekstu, bet izņemt neredzamo ZERO_WIDTH rakstzīmi.

---

## Finding 37

**Audit ID:** DA-KURSS-FPR-0087
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[6].examples[2]`
**Field type:** `grammarExamples`
**DE (read-only):** wischen / abwischen
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** wischen / abwischen — slaucīt ar lupatu, drānu, noslaucīt putekļus
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** wischen / abwischen — tørre af med en klud, tørre støv af

---

## Finding 38

**Audit ID:** DA-KURSS-FPR-0088
**Lesson/ID:** `lesson17`
**Path:** `COURSE_LESSON_DATA.kurssLesson17.sections[3].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Vārdos wieder un die Diele ie apzīmē garo ī: wieder, die Diele.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** I ordene wieder og die Diele angiver ie en lang i-lyd: wieder, die Diele.

---

## Finding 39

**Audit ID:** DA-KURSS-FPR-0089
**Lesson/ID:** `lesson19`
**Path:** `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[2]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** Vārdā der Stuhl: st izrunā kā št; h ir garuma zīme un netiek izrunāts.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD
**Audita pamatojums:** LV_DIAC, LV_WORD
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** I ordet der Stuhl udtales st som sht, og h fungerer som længdetegn og udtales ikke.

---

## Finding 40

**Audit ID:** DA-KURSS-FPR-0090
**Lesson/ID:** `kurssArticlesLesson`
**Path:** `COURSE_LESSON_HTML.kurssArticlesLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Artikler</h3> <div class="articles-info articles-intro-info"> <span class="articles-info-icon">i</span> <div>Den tyske artikel falder ikke altid sammen med det engelske kønssystem. Derfor læres navneord bedst sammen med artiklen.</div> </div> <section class="articles-block"> <h4 class="articles-header"><span>•</span>Eksempler på artikler</h4> <div class="articles-grid"> <div class="kurss-example">Der Tisch - bord</div> <div class="kurss-example">Die Tür - døren</div> <div class="kurss-exampl…
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: ZERO_WIDTH
**Audita pamatojums:** ZERO_WIDTH
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas.

---

## Finding 41

**Audit ID:** DA-KURSS-FPR-0091
**Lesson/ID:** `kurssPronounsLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronounsLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** 
  <h3>Pronominer</h3> <div class="artikuli-info artikuli-intro-info">
    <span class="artikuli-info-icon">i</span>
    <div>Nominativ, Akkusativ og Dativ - former for pronominer.</div>
  </div> 
  <section class="artikuli-block">
    <h4 class="artikuli-header"><span>N</span>Nominativ - hvad?</h4>
    <div class="artikuli-grid"><div class="kurss-example">Ich - jeg</div><div class="kurss-example">Du - dig</div><div class="kurss-example">Øh - han</div><div class="kurss-example">Sie - hun</div><d…
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: EN
**Audita pamatojums:** EN
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas.

---

## Finding 42

**Audit ID:** DA-KURSS-FPR-0092
**Lesson/ID:** `kurssPronunciationLesson`
**Path:** `COURSE_LESSON_HTML.kurssPronunciationLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Vokaler - lange og korte</h3> <p class="kurss-lesson-intro">På tysk kan vokaler være lange eller korte. Dette påvirker udtalen af ​​ordet.</p> <section class="kurss-lesson-section"> <h4>Lang vokal</h4> <div class="kurss-examples"><div class="kurss-example">Varm (varm) - varm</div><div class="kurss-example">Tarm (få) - godt</div><div class="kurss-example">Tat (tat) - arbejde / handling</div><div class="kurss-example">Flur (flūr) - bande</div><div class="kurss-example">Weg (vēk) - vej</div><di…
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, ZERO_WIDTH
**Audita pamatojums:** LV_DIAC, ZERO_WIDTH
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas.

---

## Finding 43

**Audit ID:** DA-KURSS-FPR-0093
**Lesson/ID:** `kurssConsonantsLesson`
**Path:** `COURSE_LESSON_HTML.kurssConsonantsLesson`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Konsonanter og bogstavkombinationer</h3> <p class="kurss-lesson-intro">På tysk udtales nogle konsonanter og bogstavkombinationer anderledes, end de er skrevet. Dette foredrag indeholder de vigtigste eksempler for begynderen.</p> <section class="kurss-lesson-section"> <h4>Konsonanter</h4> <div class="kurss-examples"><div class="kurss-example">Das Rad (rāt) - hjul</div><div class="kurss-example">Die Räder (rēder) - hjul</div><div class="kurss-example">Dårlig (bāt) - dårlig</div><div class="kur…
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, ZERO_WIDTH
**Audita pamatojums:** LV_DIAC, ZERO_WIDTH
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · deterministic

**OWNER_DECISION:** Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas.

---

## Finding 44

**Audit ID:** DA-KURSS-FPR-0094
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="less…
**PROPOSED_DA:** <h3>Foredrag 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="less…
**Problēma:** Conjugation gloss for ihr geht reads "Du udstøder" — semantically wrong (means "you exhale"); should be "I går".
**Audita pamatojums:** Conjugation gloss for ihr geht reads "Du udstøder" — semantically wrong (means "you exhale"); should be "I går".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:** Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas.

---

## Finding 45

**Audit ID:** DA-KURSS-FPR-0095
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="less…
**PROPOSED_DA:** <h3>Foredrag 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="less…
**Problēma:** Grammar examples include "Er kommet" instead of correct "Er kommt"; incomplete question-sentence section with empty Danish placeholders.
**Audita pamatojums:** Grammar examples include "Er kommet" instead of correct "Er kommt"; incomplete question-sentence section with empty Danish placeholders.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:** Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas.

---

## Finding 46

**Audit ID:** DA-KURSS-FPR-0096
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nic…
**PROPOSED_DA:** <h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nic…
**Problēma:** Ord (vocabulary) section is scrambled: German-Danish glosses are misaligned (e.g. nein→arbejde, nicht→spørge, arbeiten→hvad laver han). Pedagogically broken.
**Audita pamatojums:** Ord (vocabulary) section is scrambled: German-Danish glosses are misaligned (e.g. nein→arbejde, nicht→spørge, arbeiten→hvad laver han). Pedagogically broken.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:** Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas.

---

## Finding 47

**Audit ID:** DA-KURSS-FPR-0097
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** GRAMMAR
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nic…
**PROPOSED_DA:** <h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nic…
**Problēma:** Grammar conjugation tables show wrong Danish forms (Du arbeite, Jeg tirsdag for ich tue, Ich recchne).
**Audita pamatojums:** Grammar conjugation tables show wrong Danish forms (Du arbeite, Jeg tirsdag for ich tue, Ich recchne).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:** Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas.

---

## Finding 48

**Audit ID:** DA-KURSS-FPR-0098
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** MEDIUM
**Category:** NATURALNESS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nic…
**PROPOSED_DA:** <h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nic…
**Problēma:** Training card prompt "Wen spørger?" is unnatural Danish; should be "Hvem spørger?".
**Audita pamatojums:** Training card prompt "Wen spørger?" is unnatural Danish; should be "Hvem spørger?".
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:** Hvem spørger?

---

## Finding 49

**Audit ID:** DA-KURSS-FPR-0099
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 3</h3> <p class="kurss-lesson-intro">Tredje forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Wer rechnet und zeichnet?<br>Wir rechnen und zeichnen.</div><div class="kurss-example">Wer kommt?<br…
**PROPOSED_DA:** <h3>Foredrag 3</h3> <p class="kurss-lesson-intro">Tredje forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Wer rechnet und zeichnet?<br>Wir rechnen und zeichnen.</div><div class="kurss-example">Wer kommt?<br…
**Problēma:** Ord section vocabulary glosses are scrambled/misaligned (e.g. Wer→hvad, was→der, hier→Der Tisch bord).
**Audita pamatojums:** Ord section vocabulary glosses are scrambled/misaligned (e.g. Wer→hvad, was→der, hier→Der Tisch bord).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:** Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas.

---

## Finding 50

**Audit ID:** DA-KURSS-FPR-0100
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** CRITICAL
**Category:** SEMANTICS
**Production:** `data/da/courseLessons.js` / `courseTrainingCards.js` / `languages/da/ui.js`
**CURRENT_DA:** <h3>Foredrag 4</h3> <p class="kurss-lesson-intro">Akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div class="kurss-example">Er zeigt den Federhalter.</div><div class=…
**PROPOSED_DA:** <h3>Foredrag 4</h3> <p class="kurss-lesson-intro">Akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div class="kurss-example">Er zeigt den Federhalter.</div><div class=…
**Problēma:** Ord section vocabulary glosses are scrambled (e.g. nehmen→fjerklædt, der Federhalter→show, zeigen→hvid).
**Audita pamatojums:** Ord section vocabulary glosses are scrambled (e.g. nehmen→fjerklædt, der Federhalter→show, zeigen→hvid).
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-kurss-final-post-repair-audit.md`) · luna

**OWNER_DECISION:** Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas.

---
# OWNER decisions — aizpildīta tabula

| Audit ID | Statuss | OWNER_DECISION |
|---|---|---|
| DA-KURSS-FPR-0051 | LABOT | Vokalens længde eller korthed afhænger af de efterfølgende konsonanter. |
| DA-KURSS-FPR-0052 | LABOT | Hvis en vokal efterfølges af én konsonant, udtales vokalen langt: Vögel (fōgel), Schüler (šūler), Bücher (būcher). |
| DA-KURSS-FPR-0053 | LABOT | Hvis en vokal efterfølges af to eller flere konsonanter, udtales vokalen kort: wir können, der Löffel, der Müller. |
| DA-KURSS-FPR-0054 | LABOT | Det tyske o udtales anderledes end det danske o. Lyt især til udtalen i tyske ord og efterlign den. |
| DA-KURSS-FPR-0055 | FALSE_POSITIVE | Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu. |
| DA-KURSS-FPR-0056 | LABOT | Diftongen ei udtales som ai: seid (zait), fleißig (flaišich). |
| DA-KURSS-FPR-0057 | LABOT | Det tyske e kan være lukket eller åbent: der Lehrer (dēr lērer). Stammens e er langt og lukket, mens endelsens e er kort og åbent. |
| DA-KURSS-FPR-0058 | FALSE_POSITIVE | Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu. |
| DA-KURSS-FPR-0059 | FALSE_POSITIVE | Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu. |
| DA-KURSS-FPR-0060 | FALSE_POSITIVE | Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu. |
| DA-KURSS-FPR-0061 | FALSE_POSITIVE | Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu. |
| DA-KURSS-FPR-0062 | FALSE_POSITIVE | Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu. |
| DA-KURSS-FPR-0063 | FALSE_POSITIVE | Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu. |
| DA-KURSS-FPR-0064 | FALSE_POSITIVE | Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu. |
| DA-KURSS-FPR-0065 | LABOT | eu udtales som oi: der Freund (dēr froint), neun (noin). |
| DA-KURSS-FPR-0066 | LABOT | h fungerer ofte som længdetegn for den foregående vokal og udtales da ikke: der Stuhl (dēr štūl), zehn (cēn). |
| DA-KURSS-FPR-0067 | LABOT | z udtales som ts: Franz (frants), das Zimmer (tsimer). |
| DA-KURSS-FPR-0068 | LABOT | Dansk dativ og tysk nominativ/akkusativ |
| DA-KURSS-FPR-0069 | FALSE_POSITIVE | Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu. |
| DA-KURSS-FPR-0070 | FALSE_POSITIVE | Saglabāt CURRENT_DA. DA saturs ir dānisks un korekts; validators reaģē uz izrunas/transkripcijas rakstzīmēm, nevis reālu svešvalodas atlikumu. |
| DA-KURSS-FPR-0071 | LABOT | I ordene Schwester og am jüngsten udtales st som almindeligt st: Schwester (švester), jüngsten (jünksten). |
| DA-KURSS-FPR-0072 | LABOT | I ordet der Federhalter udtales h, mens h i ordet der Sohn fungerer som længdetegn og ikke udtales. |
| DA-KURSS-FPR-0073 | LABOT | Saglabāt redzamo dāņu tekstu, bet izņemt neredzamo ZERO_WIDTH rakstzīmi. |
| DA-KURSS-FPR-0074 | LABOT | pf i ordet Kopf udtales, så både p og f kan høres. |
| DA-KURSS-FPR-0075 | LABOT | ß skrives i midten eller slutningen af et ord efter en lang vokal eller en diftong: die Füße, die Straße. Bemærk: ich muss, er muss skrives med ss efter kort vokal. |
| DA-KURSS-FPR-0076 | LABOT | Hvis grundformen har ss, kan bøjningsformer bevare ss: müssen, ich muss, du musst, ihr müsst. |
| DA-KURSS-FPR-0077 | LABOT | Når g efterfølges af t, kan g lyde tættere på k: du magst, ihr mögt. |
| DA-KURSS-FPR-0078 | LABOT | En lignende lydtilpasning kan forekomme på dansk, når en stemt konsonant står foran en ustemt konsonant. |
| DA-KURSS-FPR-0079 | LABOT | müssen — at skulle / være nødt til på grund af nødvendighed eller overbevisning |
| DA-KURSS-FPR-0080 | LABOT | Saglabāt redzamo dāņu tekstu, bet izņemt neredzamo ZERO_WIDTH rakstzīmi. |
| DA-KURSS-FPR-0081 | LABOT | I ordet Äpfel udtales ä kort, fordi vokalen efterfølges af to konsonanter. |
| DA-KURSS-FPR-0082 | LABOT | I ordet schälen udtales ä langt, fordi vokalen efterfølges af én konsonant. |
| DA-KURSS-FPR-0083 | LABOT | Husk: den tyske diftong ei udtales som ai: reif, unreif. |
| DA-KURSS-FPR-0084 | LABOT | I wem, dem, den og der er e langt og lukket. |
| DA-KURSS-FPR-0085 | LABOT | Womit gräbt der Knabe die Grube? — Hvad graver drengen hullet med? |
| DA-KURSS-FPR-0086 | LABOT | Saglabāt redzamo dāņu tekstu, bet izņemt neredzamo ZERO_WIDTH rakstzīmi. |
| DA-KURSS-FPR-0087 | LABOT | wischen / abwischen — tørre af med en klud, tørre støv af |
| DA-KURSS-FPR-0088 | LABOT | I ordene wieder og die Diele angiver ie en lang i-lyd: wieder, die Diele. |
| DA-KURSS-FPR-0089 | LABOT | I ordet der Stuhl udtales st som sht, og h fungerer som længdetegn og udtales ikke. |
| DA-KURSS-FPR-0090 | NEEDS_SOURCE_REVIEW | Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas. |
| DA-KURSS-FPR-0091 | NEEDS_SOURCE_REVIEW | Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas. |
| DA-KURSS-FPR-0092 | NEEDS_SOURCE_REVIEW | Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas. |
| DA-KURSS-FPR-0093 | NEEDS_SOURCE_REVIEW | Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas. |
| DA-KURSS-FPR-0094 | NEEDS_SOURCE_REVIEW | Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas. |
| DA-KURSS-FPR-0095 | NEEDS_SOURCE_REVIEW | Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas. |
| DA-KURSS-FPR-0096 | NEEDS_SOURCE_REVIEW | Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas. |
| DA-KURSS-FPR-0097 | NEEDS_SOURCE_REVIEW | Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas. |
| DA-KURSS-FPR-0098 | LABOT | Hvem spørger? |
| DA-KURSS-FPR-0099 | NEEDS_SOURCE_REVIEW | Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas. |
| DA-KURSS-FPR-0100 | NEEDS_SOURCE_REVIEW | Atradums ir reāls, bet tas skar pilnu `legacyHtml` lauku. Nepieciešams pilns nesaīsināts CURRENT/PROPOSED vai LV MASTER, lai droši izveidotu precīzu pilna lauka OWNER replacement bez blakus satura pārrakstīšanas. |

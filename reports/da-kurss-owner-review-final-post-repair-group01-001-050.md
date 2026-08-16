# DA–DE Kurss — OWNER review — final post-repair Group 01

Avots: `reports/da-kurss-final-post-repair-audit.md`
Findings: **001–050** (50 ieraksti)

> **DE = STRICT READ-ONLY.**
> **PROPOSED_DA ir audita ieteikums, nevis automātiski OWNER apstiprināts variants.**
> Katram finding aizpildi `Statuss` un `OWNER_DECISION`.
> `LABOT` gadījumā `OWNER_DECISION` jābūt precīzam gala DA tekstam/vērtībai.
> `NELABOT` / `FALSE_POSITIVE` gadījumā production netiek mainīts.

## Finding 1

**Audit ID:** `DA-KURSS-FPR-0001`
**Lesson/ID:** `front`
**Path:** `lesson4TrainingCardsDa[9].front`
**Field type:** `owner`
**DE (read-only):** —
**Severity:** HIGH
**Category:** OWNER_REGRESSION
**CURRENT_DA:** Nej, det er skarpt.
**PROPOSED_DA:** Nej, den er skarp.
**Problēma:** OWNER_MISMATCH: production ≠ signed LABOT (value)
**Audita pamatojums:** Signed OWNER LABOT not reflected in production
**Avots:** owner

**Statuss:**

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** `DA-KURSS-FPR-0002`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[0].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** `DA-KURSS-FPR-0003`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[1].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** `DA-KURSS-FPR-0004`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[2].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 5

**Audit ID:** `DA-KURSS-FPR-0005`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[3].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 6

**Audit ID:** `DA-KURSS-FPR-0006`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[4].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 7

**Audit ID:** `DA-KURSS-FPR-0007`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[5].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 8

**Audit ID:** `DA-KURSS-FPR-0008`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[6].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 9

**Audit ID:** `DA-KURSS-FPR-0009`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[7].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 10

**Audit ID:** `DA-KURSS-FPR-0010`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[8].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 11

**Audit ID:** `DA-KURSS-FPR-0011`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[9].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 12

**Audit ID:** `DA-KURSS-FPR-0012`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[10].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 13

**Audit ID:** `DA-KURSS-FPR-0013`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[11].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 14

**Audit ID:** `DA-KURSS-FPR-0014`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[12].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 15

**Audit ID:** `DA-KURSS-FPR-0015`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[13].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 16

**Audit ID:** `DA-KURSS-FPR-0016`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[14].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 17

**Audit ID:** `DA-KURSS-FPR-0017`
**Lesson/ID:** `lesson7`
**Path:** `lesson7ExerciseCardsDa[15].lv`
**Field type:** `structure`
**DE (read-only):** —
**Severity:** HIGH
**Category:** STRUCTURE
**CURRENT_DA:** missing
**PROPOSED_DA:** (align with LV MASTER)
**Problēma:** Missing DA native field on exercise card
**Audita pamatojums:** Missing DA native field on exercise card
**Avots:** structure

**Statuss:**

**OWNER_DECISION:**

---

## Finding 18

**Audit ID:** `DA-KURSS-FPR-0018`
**Lesson/ID:** `lesson1`
**Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <h3>Foredrag 1</h3> <p class="kurss-lesson-intro">Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Nutid verber</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-info">Verber og deres konjugationer i nutid.</div> <div class="lesson1-verb-cards"> <article class="lesson1-verb-card"> <h4><span class="less…
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD, EN, ZERO_WIDTH
**Audita pamatojums:** LV_DIAC, LV_WORD, EN, ZERO_WIDTH
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 19

**Audit ID:** `DA-KURSS-FPR-0019`
**Lesson/ID:** `lesson2`
**Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <h3>Foredrag 2</h3> <p class="kurss-lesson-intro">Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"> <div class="lesson1-card-grid"> <div class="kurss-example">Spielst du?<br>Nein, ich spiele nicht, ich arbeite.</div> <div class="kurss-example">Paul fragt nic…
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD, EN
**Audita pamatojums:** LV_DIAC, LV_WORD, EN
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 20

**Audit ID:** `DA-KURSS-FPR-0020`
**Lesson/ID:** `lesson3`
**Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <h3>Foredrag 3</h3> <p class="kurss-lesson-intro">Tredje forelæsning: dialoger, ord, udtale, grammatik og oversættelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Wer rechnet und zeichnet?<br>Wir rechnen und zeichnen.</div><div class="kurss-example">Wer kommt?<br…
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD
**Audita pamatojums:** LV_DIAC, LV_WORD
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 21

**Audit ID:** `DA-KURSS-FPR-0021`
**Lesson/ID:** `lesson4`
**Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <h3>Foredrag 4</h3> <p class="kurss-lesson-intro">Akkusativ, nehmen, hinlegen, hinausgehen og adjektiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Paul kommt und nimmt einen Federhalter.</div><div class="kurss-example">Er zeigt den Federhalter.</div><div class=…
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 22

**Audit ID:** `DA-KURSS-FPR-0022`
**Lesson/ID:** `lesson5`
**Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <h3>Foredrag 5</h3> <p class="kurss-lesson-intro">Wen?, akkusativ, sitzen, fragen og -in endelse.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"> <div class="kurss-example">Wer sitzt und fragt? Der Lehrer sitzt und fragt.</div> <div class="kurss-example">Wer steht und antwortet? Der Schüler st…
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD, EN
**Audita pamatojums:** LV_DIAC, LV_WORD, EN
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 23

**Audit ID:** `DA-KURSS-FPR-0023`
**Lesson/ID:** `lesson6`
**Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <h3>Foredrag 6</h3> <p class="kurss-lesson-intro">Tal, flertal, omlyd og flertalsformer af substantiver.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌄</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hier liegt ein Bleistift.</div><div class="kurss-example">Dort liegen einige Messer.</div><div class="kurss-example…
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD, EN
**Audita pamatojums:** LV_DIAC, LV_WORD, EN
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 24

**Audit ID:** `DA-KURSS-FPR-0024`
**Lesson/ID:** `lesson7`
**Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
**Field type:** `legacyHtml`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** <h3>Foredrag 7</h3> <p class="kurss-lesson-intro">Syvende lektion: kommandoudtryk, tiltaleform og flertal.</p> <details class="lesson1-accordion" open> <summary><span class="lesson1-number lesson1-number-red">1.</span><span>Dialoger / sætninger</span><span class="lesson1-chevron">⌃</span></summary> <div class="lesson1-content"><div class="lesson1-card-grid"><div class="kurss-example">Hans, singe ein Lied! Was machst du? Ich singe ein Lied.</div><div class="kurss-example">Hans, singe ein Lied! Wa…
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC, LV_WORD, ZERO_WIDTH
**Audita pamatojums:** LV_DIAC, LV_WORD, ZERO_WIDTH
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 25

**Audit ID:** `DA-KURSS-FPR-0025`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[16]`
**Field type:** `sectionItem`
**DE (read-only):** sehr (zēr)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** sehr (zēr) — meget
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 26

**Audit ID:** `DA-KURSS-FPR-0026`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[27]`
**Field type:** `sectionItem`
**DE (read-only):** erzählen (ercēlen)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** erzählen (ercēlen) — at fortælle
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 27

**Audit ID:** `DA-KURSS-FPR-0027`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[34]`
**Field type:** `sectionItem`
**DE (read-only):** der Bäcker (dēr beker)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Bäcker (dēr beker) — bageren
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 28

**Audit ID:** `DA-KURSS-FPR-0028`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[35]`
**Field type:** `sectionItem`
**DE (read-only):** der Schneider (dēr šneider)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Schneider (dēr šneider) — skrædderen
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 29

**Audit ID:** `DA-KURSS-FPR-0029`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[1].items[36]`
**Field type:** `sectionItem`
**DE (read-only):** der Gärtner (dēr gertner)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Gärtner (dēr gertner) — gartneren
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 30

**Audit ID:** `DA-KURSS-FPR-0030`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** ä udtales, som tidligere nævnt, både som en smal kort og en smal lang e
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ä udtales, som tidligere nævnt, både som en smal kort og en smal lang e-lyd. Eksempler: der Bäcker (bēker), das Mädchen (mētchen).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 31

**Audit ID:** `DA-KURSS-FPR-0031`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** ä udtales også som en åben e
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ä udtales også som en åben e-lyd, for eksempel i ordet der Gärtner (dēr gertner).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 32

**Audit ID:** `DA-KURSS-FPR-0032`
**Lesson/ID:** `lesson8`
**Path:** `COURSE_LESSON_DATA.kurssLesson8.sections[2].items[3]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ie udtales som et langt i: liest (līst).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 33

**Audit ID:** `DA-KURSS-FPR-0033`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[0]`
**Field type:** `sectionItem`
**DE (read-only):** mehrere (mērere)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** mehrere (mērere) — flere
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 34

**Audit ID:** `DA-KURSS-FPR-0034`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[1]`
**Field type:** `sectionItem`
**DE (read-only):** hier (hīr)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** hier (hīr) — her
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 35

**Audit ID:** `DA-KURSS-FPR-0035`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** langsam (lankzām)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** langsam (lankzām) — langsomt
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 36

**Audit ID:** `DA-KURSS-FPR-0036`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[6]`
**Field type:** `sectionItem`
**DE (read-only):** mehr (mēr)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** mehr (mēr) — mere
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 37

**Audit ID:** `DA-KURSS-FPR-0037`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[10]`
**Field type:** `sectionItem`
**DE (read-only):** ruhig (rū
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ruhig (rū-ich) — rolig
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 38

**Audit ID:** `DA-KURSS-FPR-0038`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[11]`
**Field type:** `sectionItem`
**DE (read-only):** dieser (dīzer)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** dieser (dīzer) — denne
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 39

**Audit ID:** `DA-KURSS-FPR-0039`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[12]`
**Field type:** `sectionItem`
**DE (read-only):** jener (jēner)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** jener (jēner) — hin
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 40

**Audit ID:** `DA-KURSS-FPR-0040`
**Lesson/ID:** `lesson9`
**Path:** `COURSE_LESSON_DATA.kurssLesson9.sections[1].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** der Brief (dēr brīf)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Brief (dēr brīf) — et brev
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 41

**Audit ID:** `DA-KURSS-FPR-0041`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** ihr seid (īr zeit)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** ihr seid (īr zeit) — I er
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 42

**Audit ID:** `DA-KURSS-FPR-0042`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[14]`
**Field type:** `sectionItem`
**DE (read-only):** der Knabe (dēr knābe)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Knabe (dēr knābe) — en dreng
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 43

**Audit ID:** `DA-KURSS-FPR-0043`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[17]`
**Field type:** `sectionItem`
**DE (read-only):** der Großvater (dēr grōsfāter)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Großvater (dēr grōsfāter) — bedstefar
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 44

**Audit ID:** `DA-KURSS-FPR-0044`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[1].items[22]`
**Field type:** `sectionItem`
**DE (read-only):** das Jahr (jār)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** das Jahr (jār) — år
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 45

**Audit ID:** `DA-KURSS-FPR-0045`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[4]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Hvis vokalen efterfølges af én konsonant, udtales den lang: Vögel (fōgel), Schüler (šūler), Bücher (būcher).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 46

**Audit ID:** `DA-KURSS-FPR-0046`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[7]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Udtal korrekt: der Großvater (dēr grōsfāter).
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 47

**Audit ID:** `DA-KURSS-FPR-0047`
**Lesson/ID:** `lesson10`
**Path:** `COURSE_LESSON_DATA.kurssLesson10.sections[2].items[9]`
**Field type:** `sectionItem`
**DE (read-only):** —
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** Det tyske e kan være lukket eller åbent: der Lehrer (dēr lērer). Stammens e er langt og lukket, mens endelsens e er kort og åbent.
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 48

**Audit ID:** `DA-KURSS-FPR-0048`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[6]`
**Field type:** `sectionItem`
**DE (read-only):** der Bruder (dēr brūder)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Bruder (dēr brūder) — bror
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 49

**Audit ID:** `DA-KURSS-FPR-0049`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[13]`
**Field type:** `sectionItem`
**DE (read-only):** der Schreibtisch (dēr šreibtīš)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** der Schreibtisch (dēr šreibtīš) — et skrivebord
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

## Finding 50

**Audit ID:** `DA-KURSS-FPR-0050`
**Lesson/ID:** `lesson11`
**Path:** `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[16]`
**Field type:** `sectionItem`
**DE (read-only):** zusammen (cuzāmen)
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**CURRENT_DA:** zusammen (cuzāmen) — sammen
**PROPOSED_DA:** (Danish replacement per DE meaning)
**Problēma:** Foreign/script remnant: LV_DIAC
**Audita pamatojums:** LV_DIAC
**Avots:** deterministic

**Statuss:**

**OWNER_DECISION:**

---

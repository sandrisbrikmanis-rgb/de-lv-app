# ES–DE Kurss Lessons 1–21 — pilns lingvistiskais audits (READ-ONLY)

**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.9**
**STAGE:** FIRST_FULL_DISCOVERY (post V1+V2 OWNER apply)
**HEAD:** `0fe660d136136dd2d3a689f8c71b55242f9f5610`
**DE:** STRICT READ-ONLY · **LV Kurss:** MASTER (structure only)

Audita datums: 2026-08-27
Auditors: deterministiskā pārbaude (§7.7) + GPT-5.6 Luna (§7.8, model: gpt-5.6-luna)
Production changes: **0** (audit run only)

## Kopsavilkums

| Metrika | Vērtība |
|---|---|
| ES lauki (coverage) | **2951** |
| Lekcijas | **21** / 21 |
| CRITICAL | **42** |
| HIGH | **498** |
| MEDIUM | **360** |
| LOW | **19** |
| Kopā findings | **919** |
| Deterministic | **331** |
| Luna | **748** |
| Luna batches | **60** (2951 fields) |
| Luna loaded | **60/60** |
| Production changes | **0** |

> **PROPOSED_ES** nav automātiski OWNER apstiprināts labojums.

## COVERAGE

| Avots | Lauki |
|---|---|
| ui | 309 |
| legacyHtml | 505 |
| training | 165 |
| lesson | 1972 |

## TECHNICAL GATES

| Gate | Result |
|---|---|
| Syntax | **PASS** |
| validate-kurss.js --lang=es | **PASS** |
| Structure vs LV MASTER | **PASS** (0 issues) |
| Legacy HTML drift L1–7 | **FAIL** (7 issues) |
| Mirror data↔www | **PASS** |
| DE baseline changes | **0** (PASS) |
| Luna coverage | **PASS** |

## Kategorijas

- SEMANTIC_MISMATCH: **205**
- MULTIPLE_TRANSLATIONS: **193**
- FOREIGN_LEFTOVER: **169**
- FOREIGN_REMNANT: **132**
- TRANSLATION: **70**
- ES_TERMINOLOGY: **42**
- ES_NATURALNESS: **33**
- ES_ORTHOGRAPHY: **29**
- STRUCTURE: **21**
- ES_GRAMMAR: **13**
- PEDAGOGICAL_ISSUE: **7**
- MISSING_CONTENT: **3**
- NAMES: **1**
- ORTHOGRAPHY: **1**

## Verdict

**NEEDS OWNER REVIEW** — atlikuši validated findings.

## Findings (sample)

### ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [HIGH] STRUCTURE

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson1`
- **ES_CURRENT:** inline:8944
- **Problem:** Inline legacyHtml differs from COURSE_LESSON_HTML store (runtime uses inline)
- **PROPOSED_ES:** (align with LV MASTER structure)
- **Avots:** structure

### ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [HIGH] STRUCTURE

- **Lesson:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson2`
- **ES_CURRENT:** inline:6561
- **Problem:** Inline legacyHtml differs from COURSE_LESSON_HTML store (runtime uses inline)
- **PROPOSED_ES:** (align with LV MASTER structure)
- **Avots:** structure

### ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [HIGH] STRUCTURE

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson3`
- **ES_CURRENT:** inline:7121
- **Problem:** Inline legacyHtml differs from COURSE_LESSON_HTML store (runtime uses inline)
- **PROPOSED_ES:** (align with LV MASTER structure)
- **Avots:** structure

### ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [HIGH] STRUCTURE

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson4`
- **ES_CURRENT:** inline:7423
- **Problem:** Inline legacyHtml differs from COURSE_LESSON_HTML store (runtime uses inline)
- **PROPOSED_ES:** (align with LV MASTER structure)
- **Avots:** structure

### ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [HIGH] STRUCTURE

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson5`
- **ES_CURRENT:** inline:6627
- **Problem:** Inline legacyHtml differs from COURSE_LESSON_HTML store (runtime uses inline)
- **PROPOSED_ES:** (align with LV MASTER structure)
- **Avots:** structure

### ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [HIGH] STRUCTURE

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson6`
- **ES_CURRENT:** inline:9069
- **Problem:** Inline legacyHtml differs from COURSE_LESSON_HTML store (runtime uses inline)
- **PROPOSED_ES:** (align with LV MASTER structure)
- **Avots:** structure

### ES-KURSS-LESSONS-STR-COURSE_LESSON_DATAkurssL [HIGH] STRUCTURE

- **Lesson:** `lesson7`
- **Path:** `COURSE_LESSON_DATA.kurssLesson7.legacyHtml ↔ COURSE_LESSON_HTML.kurssLesson7`
- **ES_CURRENT:** inline:6157
- **Problem:** Inline legacyHtml differs from COURSE_LESSON_HTML store (runtime uses inline)
- **PROPOSED_ES:** (align with LV MASTER structure)
- **Avots:** structure

### ES-KURSS-LESSONS-DET-0001 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[0].span[11]`
- **ES_CURRENT:** ellos / tú vienes
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0002 [MEDIUM] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].title`
- **DE_CONTEXT:** ♟gehen
- **ES_CURRENT:** ♟gehen — go
- **Problem:** Foreign/script: EN
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0003 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[1].span[11]`
- **ES_CURRENT:** ellos / tú vas
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0004 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[2].span[11]`
- **ES_CURRENT:** ellos / Tú estás
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0005 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[0]:Verbos en presente → verbCard[3].span[11]`
- **ES_CURRENT:** ellos / tú cantas
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0006 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- **DE_CONTEXT:** wir (vīr)
- **ES_CURRENT:** wir (vīr) — we
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0007 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- **DE_CONTEXT:** Vārdā “wir” burts i tiek izrunāts gari.
- **ES_CURRENT:** Vārdā “wir” burts i tiek izrunāts gari.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0008 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE_CONTEXT:** gehen (gē
- **ES_CURRENT:** gehen (gē-en) - ir
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0009 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE_CONTEXT:** stehen (štē
- **ES_CURRENT:** stehen (štē-en) - stand
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0010 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE_CONTEXT:** du (dū) kommst
- **ES_CURRENT:** du (dū) kommst — tú vienes
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0011 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE_CONTEXT:** er (ēr) kommt
- **ES_CURRENT:** er (ēr) kommt — él viene
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0012 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[8]`
- **DE_CONTEXT:** sie (zī) kommt
- **ES_CURRENT:** sie (zī) kommt — ella viene
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0013 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[9]`
- **DE_CONTEXT:** wer (vēr)
- **ES_CURRENT:** wer (vēr) — ¿qué?
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0014 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[1]:Palabras → kurss-example[10]`
- **DE_CONTEXT:** ja (jā)
- **ES_CURRENT:** ja (jā) — sí
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0015 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **DE_CONTEXT:** Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.
- **ES_CURRENT:** Vārdu pareiza izruna, apzīmēta latviešu burtiem, ir dota lekcijās.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0016 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE_CONTEXT:** Wir (vīr)
- **ES_CURRENT:** Wir (vīr) — nosotros La palabra wir siempre se pronuncia larga.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0017 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson1`
- **Path:** `COURSE_LESSON_DATA.kurssLesson1.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- **DE_CONTEXT:** Latviešu valodā:
Tu nāc.
Vai tu nāc?
- **ES_CURRENT:** Latviešu valodā:
Tu nāc.
Vai tu nāc?
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0018 [MEDIUM] NAMES

- **Lesson:** `lesson1`
- **Path:** `lesson1TrainingCardsEs[10].front`
- **DE_CONTEXT:** Albert und Marta kommen und gehen.
- **ES_CURRENT:** Albert y Martha van y vienen.
- **Problem:** Martha in ES where DE canonical is Marta
- **PROPOSED_ES:** Albert y Marta van y vienen.
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0019 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson1`
- **Path:** `kurss.lessonProgress`
- **ES_CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0020 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- **ES_CURRENT:** Diálogos/oraciones
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0021 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- **DE_CONTEXT:** spielen
- **ES_CURRENT:** spielen — jugar; jugar
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0022 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[0]`
- **DE_CONTEXT:** Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.
- **ES_CURRENT:** Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0023 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[1]`
- **DE_CONTEXT:** Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).
- **ES_CURRENT:** Līdzskaņu kopojumu sp izrunā kā šp: spielen (špīlen).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0024 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson2`
- **Path:** `COURSE_LESSON_DATA.kurssLesson2.legacyHtml → accordion[2]:Gramática → kurss-example[2]`
- **DE_CONTEXT:** Darbības vārdā tun u izrunājams gari visās personās.
- **ES_CURRENT:** Darbības vārdā tun u izrunājams gari visās personās.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0025 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson2`
- **Path:** `kurss.lessonProgress`
- **ES_CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0026 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- **ES_CURRENT:** Diálogos/oraciones
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0027 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE_CONTEXT:** eine Bank
- **ES_CURRENT:** eine Bank — ¿hay/hay un libro aquí?
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0028 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **DE_CONTEXT:** niedrig
- **ES_CURRENT:** niedrig — El sonido ī largo en alemán está representado por ie: liegen (līgen), hier (hīr), wie (vī).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0029 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE_CONTEXT:** Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).
- **ES_CURRENT:** Garo ī skaņu vācu valodā apzīmē ar ie: liegen (līgen), hier (hīr), wie (vī).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0030 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[2]:Pronunciación → kurss-example[3]`
- **DE_CONTEXT:** ck ir divkāršs k: dick (dikk).
- **ES_CURRENT:** ck ir divkāršs k: dick (dikk).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0031 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE_CONTEXT:** Īpašības un apstākļu vārdos galotne
- **ES_CURRENT:** Īpašības un apstākļu vārdos galotne -¿Con wer? pregunta por personas.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0032 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- **DE_CONTEXT:** Ar wer? jautā pēc personām.
- **ES_CURRENT:** Ar wer? jautā pēc personām.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0033 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- **DE_CONTEXT:** Ar was? jautā pēc priekšmetiem.
- **ES_CURRENT:** Ar was? jautā pēc priekšmetiem.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0034 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[6]`
- **DE_CONTEXT:** vīriešu kārta
- **ES_CURRENT:** vīriešu kārta — das
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0035 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[7]`
- **DE_CONTEXT:** sieviešu kārta
- **ES_CURRENT:** sieviešu kārta — Plural definido el article para las tres rondas es morir.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0037 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- **DE_CONTEXT:** vidējā kārta
- **ES_CURRENT:** vidējā kārta — die Tische
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0038 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[9]`
- **DE_CONTEXT:** Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.
- **ES_CURRENT:** Daudzskaitlī noteiktais artikuls visām trim kārtām ir die.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0039 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[13]`
- **DE_CONTEXT:** vīriešu kārta
- **ES_CURRENT:** vīriešu kārta — ein
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0040 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- **DE_CONTEXT:** sieviešu kārta
- **ES_CURRENT:** sieviešu kārta — El indefinido el article no tiene plural.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0042 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[15]`
- **DE_CONTEXT:** vidējā kārta
- **ES_CURRENT:** vidējā kārta — Tische
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0043 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[16]`
- **DE_CONTEXT:** Nenoteiktajam artikulam daudzskaitļa nav.
- **ES_CURRENT:** Nenoteiktajam artikulam daudzskaitļa nav.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0044 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → kurss-example[21]`
- **DE_CONTEXT:** Vāciski par priekšmetiem, kas stāv vertikāli, saka, ka priekšmets stāv:
der Tisch steht
die Bank steht
- **ES_CURRENT:** Vāciski par priekšmetiem, kas stāv vertikāli, saka, ka priekšmets stāv:
der Tisch steht
die Bank steht
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0045 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-note[0]`
- **ES_CURRENT:** El sujeto de una oración en alemán responde a la pregunta wer? / ¿qué? y nominativo permanente.
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0046 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson3`
- **Path:** `COURSE_LESSON_DATA.kurssLesson3.legacyHtml → accordion[3]:Gramática → grammar-header[4]`
- **ES_CURRENT:** 5stehen / liegen / hängen
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0047 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson3`
- **Path:** `kurss.lessonProgress`
- **ES_CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0048 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- **ES_CURRENT:** Diálogos/oraciones
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0049 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[0]`
- **DE_CONTEXT:** nehmen (nēmen)
- **ES_CURRENT:** nehmen (nēmen) — emplumado
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0050 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE_CONTEXT:** der Federhalter (dēr fēderhalter)
- **ES_CURRENT:** der Federhalter (dēr fēderhalter) — show
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0051 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[7]`
- **DE_CONTEXT:** die Feder (dī fēder)
- **ES_CURRENT:** die Feder (dī fēder) — puntiagudo
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0052 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- **DE_CONTEXT:** das Mädchen (mētchen)
- **ES_CURRENT:** das Mädchen (mētchen) — cuchillo
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0053 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[1]:Palabras → course-example[0]`
- **DE_CONTEXT:** nehmen (nēmen)
- **ES_CURRENT:** nehmen (nēmen) - tomar
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0054 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE_CONTEXT:** Galotnes
- **ES_CURRENT:** Galotnes -Si h es un marcador de longitud, no se pronuncia como un sonido: nehmen (nēmen).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0055 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[2]:Pronunciación → kurss-example[3]`
- **DE_CONTEXT:** h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim.
- **ES_CURRENT:** h vācu valodā var būt gan skaņa, gan garumzīme iepriekšējam patskanim.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0056 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE_CONTEXT:** Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).
- **ES_CURRENT:** Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0057 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE_CONTEXT:** Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).
- **ES_CURRENT:** Ja patskanim seko tikai viens līdzskanis, patskani izrunā gari: die (dī) Feder (fēder), den (dēn).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0058 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → kurss-example[15]`
- **DE_CONTEXT:** daudzskaitlī
- **ES_CURRENT:** daudzskaitlī — das Messer ist nicht scharf
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0059 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson4`
- **Path:** `COURSE_LESSON_DATA.kurssLesson4.legacyHtml → accordion[3]:Gramática → grammar-header[6]`
- **ES_CURRENT:** 7-chen / -lein
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0060 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson4`
- **Path:** `kurss.lessonProgress`
- **ES_CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0061 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- **ES_CURRENT:** Diálogos/oraciones
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0062 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[1]`
- **DE_CONTEXT:** fragen (frāgen)
- **ES_CURRENT:** fragen (frāgen) — preguntar
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0063 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[2]`
- **DE_CONTEXT:** der Lehrer (dēr lērer)
- **ES_CURRENT:** der Lehrer (dēr lērer) — profesor
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0064 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[3]`
- **DE_CONTEXT:** gut (gūt)
- **ES_CURRENT:** gut (gūt) — bueno
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0065 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[4]`
- **DE_CONTEXT:** wen (vēn)
- **ES_CURRENT:** wen (vēn) — qué
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0066 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[6]`
- **DE_CONTEXT:** der Schüler (šūler)
- **ES_CURRENT:** der Schüler (šūler) — estudiante
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0067 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[15]`
- **DE_CONTEXT:** artig (ārtich)
- **ES_CURRENT:** artig (ārtich) — educado
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0068 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- **DE_CONTEXT:** lieben (līben)
- **ES_CURRENT:** lieben (līben) — amar
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0069 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[1]:Palabras → kurss-example[18]`
- **DE_CONTEXT:** der Vater (fāter)
- **ES_CURRENT:** der Vater (fāter) — padre
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0070 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **DE_CONTEXT:** tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen).
- **ES_CURRENT:** tz ir dubultots z skanis un izrunājams kā z: sitzen (zicen).
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0071 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE_CONTEXT:** v vācu vārdos izrunā kā f: der Vater (fāter).
- **ES_CURRENT:** v vācu vārdos izrunā kā f: der Vater (fāter).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0072 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **DE_CONTEXT:** ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).
- **ES_CURRENT:** ß sauc par escet un izrunā kā latviešu s: groß (grōs), weiß (veis).
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0073 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE_CONTEXT:** Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.
- **ES_CURRENT:** Vācu valodā nominatīvā jautājums ir wer? personām un was? priekšmetiem.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0074 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **DE_CONTEXT:** Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.
- **ES_CURRENT:** Akuzatīvā jautājums ir wen? personām un was? priekšmetiem.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0075 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[8]`
- **DE_CONTEXT:** er/sie/es sitzt
- **ES_CURRENT:** er/sie/es sitzt
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0076 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[14]`
- **DE_CONTEXT:** Daudz sieviešu kārtas vārdu atvasina ar galotni
- **ES_CURRENT:** Daudz sieviešu kārtas vārdu atvasina ar galotni -die Lehrerin
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0077 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson5`
- **Path:** `COURSE_LESSON_DATA.kurssLesson5.legacyHtml → accordion[3]:Gramática → kurss-example[17]`
- **DE_CONTEXT:** Stāstāmā teikumā darbības vārds stāv otrā vietā.
- **ES_CURRENT:** Stāstāmā teikumā darbības vārds stāv otrā vietā.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0078 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson5`
- **Path:** `kurss.lessonProgress`
- **ES_CURRENT:** Lección {lesson} · Traducir: {current} / {total}
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0079 [MEDIUM] MULTIPLE_TRANSLATIONS

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[0]:Diálogos/oraciones (summary title)`
- **ES_CURRENT:** Diálogos/oraciones
- **Problem:** Vairāku nozīmju kandidāti vienā laukā (• / ;)
- **PROPOSED_ES:** (OWNER_DECISION_REQUIRED: choose single main translation)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0080 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[5]`
- **DE_CONTEXT:** wieder (vīder)
- **ES_CURRENT:** wieder (vīder) — otra vez
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0081 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[12]`
- **DE_CONTEXT:** der Schlüssel (šlūsel)
- **ES_CURRENT:** der Schlüssel (šlūsel) — llave
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0082 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[14]`
- **DE_CONTEXT:** die Tafel (dī tāfel)
- **ES_CURRENT:** die Tafel (dī tāfel) — pizarra
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0083 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[17]`
- **DE_CONTEXT:** zählen (cēlen)
- **ES_CURRENT:** zählen (cēlen) — contar
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0084 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[22]`
- **DE_CONTEXT:** der Deckel (dēr dekel)
- **ES_CURRENT:** der Deckel (dēr dekel) — tapa
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0085 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[30]`
- **DE_CONTEXT:** leer (lēr)
- **ES_CURRENT:** leer (lēr) — vacío
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0086 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[31]`
- **DE_CONTEXT:** schwer (švēr)
- **ES_CURRENT:** schwer (švēr) — pesado, difícil
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0087 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[34]`
- **DE_CONTEXT:** wieviel (vīfīl)
- **ES_CURRENT:** wieviel (vīfīl) — cuántos
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0088 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[1]:Palabras → kurss-example[36]`
- **DE_CONTEXT:** hier (hīr)
- **ES_CURRENT:** hier (hīr) — aquí
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0089 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → kurss-example[0]`
- **ES_CURRENT:** ä ir patskaņa a pārskanojums, un to izrunā kā īso vai garo šauro e.
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0090 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → kurss-example[1]`
- **DE_CONTEXT:** Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).
- **ES_CURRENT:** Piemēri: das Mädchen (mētchen), die Bänke (dī benke), der Vater (dēr fāter), die Väter (dī fēter).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0091 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[2]:Pronunciación → kurss-example[2]`
- **ES_CURRENT:** ü ir patskaņa u pārskanojums. To izrunājot, lūpas ļoti jāapaļo un jāmēģina ar apaļi veidotām lūpām izrunāt i.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0092 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[0]`
- **DE_CONTEXT:** Piemēri: fünf, der Schlüssel (šlūsel).
- **ES_CURRENT:** Piemēri: fünf, der Schlüssel (šlūsel).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0093 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[1]`
- **ES_CURRENT:** ö izrunā ar apaļi veidotām lūpām, mēģinot izrunāt e: der Löffel.
- **Problem:** Foreign/script: LV_DIAC, LV_WORD
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0094 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[2]`
- **DE_CONTEXT:** Divkāršots patskanis apzīmē garu patskani: leer (lēr).
- **ES_CURRENT:** Divkāršots patskanis apzīmē garu patskani: leer (lēr).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

### ES-KURSS-LESSONS-DET-0095 [HIGH] FOREIGN_REMNANT

- **Lesson:** `lesson6`
- **Path:** `COURSE_LESSON_DATA.kurssLesson6.legacyHtml → accordion[3]:Gramática → kurss-example[3]`
- **DE_CONTEXT:** Divskani eu izrunā kā oi: neun (noin).
- **ES_CURRENT:** Divskani eu izrunā kā oi: neun (noin).
- **Problem:** Foreign/script: LV_DIAC
- **PROPOSED_ES:** (OWNER: Spanish replacement per DE/LV meaning)
- **Avots:** deterministic

_… and 819 more in JSON._

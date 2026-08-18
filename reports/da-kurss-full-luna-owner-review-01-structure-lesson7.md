# DA–DE Kurss — OWNER review — Lektion 7 — exercise card struktūra

Avots: `reports/da-kurss-full-audit.md` · `reports/temp/da-kurss-full-audit.json`
Findings: **1–4** (4 ieraksti)
Auditors: **GPT-5.6 Luna** (READ-ONLY)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez `da-kurss-full-luna-owner-decisions-01-structure-lesson7.md` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA.
> **Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

## Finding 1

**Audit ID:** DA-KURSS-LUNA-01STRUCTURELESSON7-001
**Source audit ID:** `DA-KURSS-L0052`
**Lesson/ID:** `kurssVerbBasicsLesson`
**ID / path:** `COURSE_LESSON_HTML.kurssVerbBasicsLesson`
**DE (read-only):** —
**Severity:** NEEDS_SOURCE_REVIEW
**Category:** STRUCTURE
**Field:** `legacyHtml`
**Production file:** `data/da/courseTrainingCards.js`
**CURRENT_DA:** <h3>Grundlæggende verber</h3> ...
**PROPOSED_DA:** <h3>Grundlæggende verber</h3> ...
**Problēma:** Dansk HTML afviger i flere punkter fra referenceindholdet; fuld kontrol af struktur og komplethed er nødvendig.
**Audita pamatojums:** Dansk HTML afviger i flere punkter fra referenceindholdet; fuld kontrol af struktur og komplethed er nødvendig.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 2

**Audit ID:** DA-KURSS-LUNA-01STRUCTURELESSON7-002
**Source audit ID:** `DA-KURSS-L0058`
**Lesson/ID:** `lesson7`
**ID / path:** `lesson7ExerciseCardsDa[0].lv`
**DE (read-only):** fragen
**Severity:** LOW
**Category:** CONSISTENCY
**Field:** `trainingLv`
**Production file:** `data/da/courseTrainingCards.js`
**CURRENT_DA:** at spørge
**PROPOSED_DA:** at spørge
**Problēma:** The current entry is correct.
**Audita pamatojums:** The current entry is correct.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 3

**Audit ID:** DA-KURSS-LUNA-01STRUCTURELESSON7-003
**Source audit ID:** `DA-KURSS-L0059`
**Lesson/ID:** `lesson7`
**ID / path:** `lesson7ExerciseCardsDa[4].lv`
**DE (read-only):** zählen
**Severity:** LOW
**Category:** CONSISTENCY
**Field:** `trainingLv`
**Production file:** `data/da/courseTrainingCards.js`
**CURRENT_DA:** tælle
**PROPOSED_DA:** at tælle
**Problēma:** De øvrige infinitiver i denne liste har »at«; tilføj præpositionen for ensartethed.
**Audita pamatojums:** De øvrige infinitiver i denne liste har »at«; tilføj præpositionen for ensartethed.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

## Finding 4

**Audit ID:** DA-KURSS-LUNA-01STRUCTURELESSON7-004
**Source audit ID:** `DA-KURSS-L0060`
**Lesson/ID:** `lesson7`
**ID / path:** `lesson7ExerciseCardsDa[12].lv`
**DE (read-only):** öffnen
**Severity:** LOW
**Category:** CONSISTENCY
**Field:** `trainingLv`
**Production file:** `data/da/courseTrainingCards.js`
**CURRENT_DA:** åbne
**PROPOSED_DA:** at åbne
**Problēma:** De øvrige infinitiver i denne liste har »at«; tilføj præpositionen for ensartethed.
**Audita pamatojums:** De øvrige infinitiver i denne liste har »at«; tilføj præpositionen for ensartethed.
**Avots:** GPT-5.6 Luna (`reports/da-kurss-full-audit.md`) · luna

**OWNER_DECISION:**

---

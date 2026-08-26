# ES Kurss Pronunciación — targeted final audit

**Mode:** READ-ONLY (GPT-5.6 Luna + deterministic gates + visual smoke)
**Model:** GPT-5.6 Luna (`gpt-5.6-luna`)
**Branch:** `cursor/es-kurss-pronunciation-owner-repair-3141` · **PR:** #668
**MASTER:** PROJECT_LANGUAGE_MASTER_STANDARD v1.9
**Production changes:** 0

## Scope

- `COURSE_LESSON_HTML.kurssPronunciationLesson` (15 sections)
- `COURSE_LESSON_HTML.kurssConsonantsLesson` (10 sections)
- ES UI: pronunciation + vowels + consonants title/subtitle/desc keys
- `data/es/courseLessons.js`, `www/data/es/courseLessons.js`
- `languages/es/ui.js`, `www/languages/es/ui.js`

## Coverage

| Metric | Value |
|--------|-------|
| Audited units | **215** |
| UI keys | 9 |
| Vowels lesson units | 133 |
| Consonants lesson units | 73 |
| Example cards | 144 |
| Luna coverage | 100% (cached) |

## Retention (prior OWNER repairs)

**14/14** prior LABOT targets retained.

## Integrity gates

| Gate | Status |
|------|--------|
| Pronunciation sections 15/15 | PASS (15/15) |
| Consonants sections 10/10 | PASS (10/10) |
| HTML balanced | PASS |
| Mirror data/www | PASS |
| JavaScript syntax | PASS |
| DE READ-ONLY | PASS |
| Visual smoke (desktop+mobile) | PASS |
| OWNER retention 14/14 | PASS |

## Findings summary

| Severity | Count |
|----------|-------|
| CRITICAL | 0 |
| HIGH | 2 |
| MEDIUM | 5 |
| LOW | 0 |
| **REAL (quality)** | **7** |

## Verdict

**NEEDS OWNER REPAIR**

## REAL findings (detail)

### 01 — MEDIUM / PHONETIC_ERROR

- **ID:** ES-KURSS-FINAL-0001
- **Section:** Vocal corta
- **Path:** COURSE_LESSON_HTML.kurssPronunciationLesson/section[1]/example[0]
- **CURRENT:** "Pilz (pilc) — hongo"
- **NEW:** "Pilz (pilts) — hongo"
- **Reason:** 

### 02 — MEDIUM / PHONETIC_ERROR

- **ID:** ES-KURSS-FINAL-0002
- **Section:** Terminaciones -en / -el / -er
- **Path:** COURSE_LESSON_HTML.kurssPronunciationLesson/section[2]/example[3]
- **CURRENT:** "Vogel (fogel) — pájaro"
- **NEW:** "Vogel (fōgel) — pájaro"
- **Reason:** 

### 03 — MEDIUM / PHONETIC_ERROR

- **ID:** ES-KURSS-FINAL-0003
- **Section:** ü
- **Path:** COURSE_LESSON_HTML.kurssPronunciationLesson/section[9]/example[1]
- **CURRENT:** "kürzer (kurcer) — más corto"
- **NEW:** "kürzer (kürcer) — más corto"
- **Reason:** 

### 04 — MEDIUM / PHONETIC_ERROR

- **ID:** ES-KURSS-FINAL-0004
- **Section:** ü
- **Path:** COURSE_LESSON_HTML.kurssPronunciationLesson/section[9]/example[5]
- **CURRENT:** "Mütter (mutter) — madres"
- **NEW:** "Mütter (müter) — madres"
- **Reason:** 

### 05 — HIGH / PEDAGOGICAL_ISSUE

- **ID:** ES-KURSS-FINAL-0005
- **Section:** Diptongos: äu
- **Path:** COURSE_LESSON_HTML.kurssPronunciationLesson/section[10]/h4
- **CURRENT:** "Diptongos: äu"
- **NEW:** "Diptongos: au y äu"
- **Reason:** 

### 06 — HIGH / PHONETIC_ERROR

- **ID:** ES-KURSS-FINAL-0006
- **Section:** ch
- **Path:** COURSE_LESSON_HTML.kurssConsonantsLesson/section[1]/example[8]
- **CURRENT:** "Nacht (naht) — noche"
- **NEW:** "Nacht (najt) — noche"
- **Reason:** 

### 07 — MEDIUM / PHONETIC_ERROR

- **ID:** ES-KURSS-FINAL-0007
- **Section:** x e y
- **Path:** COURSE_LESSON_HTML.kurssConsonantsLesson/section[7]/example[4]
- **CURRENT:** "Mythe (müte) — mito"
- **NEW:** "Mythe (mūte) — mito"
- **Reason:** 

## Stop

READ-ONLY audit complete. No production changes.

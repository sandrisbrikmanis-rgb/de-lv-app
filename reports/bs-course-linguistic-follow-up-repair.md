# BS–DE KURSS LINGUISTIC FOLLOW-UP REPAIR

**Repair date:** 2026-08-08  
**Source:** `reports/bs-course-targeted-regression-audit.md`

**Data repair:** COMPLETE  
**LV files modified:** NONE

**BS–DE KURSS LINGUISTIC FOLLOW-UP REPAIR = COMPLETE**

**BS–DE KURSS = NOT YET OWNER ACCEPTED** — next step: targeted micro-regression audit (GPT-5.6 Luna) on changed targets only.

---

## Deduplication

| Metric | Count |
|--------|-------|
| Raw regression findings | 18 |
| Raw OOS findings | 3 |
| Duplicates with regression findings | 1 (`loben → pohvala` = F-06 HIGH + OOS #3) |
| Unique OOS repairs | 2 (`gut (dobiti)`, `kurssSentenceStructureLesson`) |
| CONFIRMED FOLLOW-UP extra (verb basics panel) | 1 |
| **Total unique repair targets** | **21** |
| **Applied** | **21 / 21** |
| **Missing** | **0** |

---

## Summary

| Severity | Required | Fixed |
|----------|----------|-------|
| HIGH | 9 / 9 | 9 / 9 |
| MEDIUM | 7 / 7 | 7 / 7 |
| LOW | 2 / 2 | 2 / 2 |
| OOS (unique) | 2 / 2 | 2 / 2 |
| OOS duplicate (loben) | via F-06 | via F-06 |

---

## HIGH repairs

| ID | Target | Current → Recommended | Status |
|----|--------|---------------------|--------|
| F-01 | L2 training `Was tut ihr?` | `šta radiš` → `Šta radite?` | FIXED |
| F-02 | L4-T1 | `Djevojka uzima pero.` → `Djevojka uzima držač za pero.` | FIXED |
| F-03 | L4-T2 | `Drška pera...` → `Držač za pero nije bijel, on je crn.` | FIXED |
| F-04 | L5-T1 | `Šta otac voli?` → `Koga otac voli?` | FIXED |
| F-05 | L6-T21 | `Nalivpero je crno.` → `Držač za pero je crn.` | FIXED |
| F-06 | L7-E3 `loben` | `pohvala` → `hvaliti` | FIXED |
| F-07 | L7-E6 `zeigen` | `show` → `pokazati` | FIXED |
| F-08 | L7-E9 `arbeiten` | `na posao` → `raditi` | FIXED |
| F-09 | `kurssArticlesLesson` | LV glosses → `sto`, `vrata`, `nož`, `djevojčica` | FIXED |

---

## MEDIUM repairs

| ID | Target | Current → Recommended | Status |
|----|--------|---------------------|--------|
| F-10 | L2-T11 | `Marie svira` → `Marie igra` | FIXED |
| F-11 | L6-T19 | `To je nalivpero.` → `To je držač za pero.` | FIXED |
| F-12 | L6-T20 | `Kakvo je nalivpero?` → `Kakav je držač za pero?` | FIXED |
| F-13 | L7-E8 `rechnen` | `brojati` → `računati` | FIXED |
| F-14 | L7-E14 `singen` | `da pevam` → `pjevati` | FIXED |
| F-15 | L7-E15 `tun` | `uraditi` → `činiti` | FIXED |
| F-16 | `kurssPronounsLesson` | LV glosses (`viņš`, `viņa`, `mēs`, `jūs`, …) → BS forms (`on`, `ona`, `mi`, `vi`, …) | FIXED |

---

## LOW repairs

| ID | Target | Current → Recommended | Status |
|----|--------|---------------------|--------|
| F-17 | L1-T4 | `Martha pjeva.` → `Marta pjeva.` | FIXED |
| F-18 | L6-T18 | `šta je to?` → `Šta je to?` | FIXED |

---

## OOS resolution

### gut (dobiti)

- **Current:** `gut (dobiti) — dobro` (also in L5 Izgovor accordion)
- **Recommended:** `gut (gūt) — dobro`
- **Reason:** `dobiti` means “to obtain”; LV etalon uses pronunciation hint `(gūt)` for German *gut*; BS gloss should be *dobro* (good), not a verb.
- **Status:** FIXED

### kurssSentenceStructureLesson

- **LV leftovers before:** 8+ (`Tu nāc`, `Viņš dzied`, mixed question glosses, Latvian section headers)
- **LV leftovers after:** 0
- **Method:** Full native-language BS re-translation of LV glosses; HTML structure, German examples, and CSS classes preserved.
- **Status:** FIXED

### loben / pohvala

- **Duplicate:** YES (F-06 HIGH + OOS #3)
- **Current:** `pohvala`
- **Recommended:** `hvaliti`
- **Status:** FIXED (counted once)

### kurssVerbBasicsLesson (CONFIRMED FOLLOW-UP extra)

- **LV conjugation glosses before:** 50+ (`tu nāc`, `viņš nāk`, `mēs nākam`, …)
- **LV leftovers after:** 0
- **Status:** FIXED

---

## L7 status

| Metric | Value |
|--------|-------|
| Cards structurally non-empty | 16 / 16 |
| Changed cards | 6 |
| Cards unchanged (already PASS) | 10 |

Changed: E3, E6, E8, E9, E14, E15.

---

## L1–6 training

| Metric | Value |
|--------|-------|
| Previously PASS | 91 / 101 |
| Changed targets | 10 |
| Unchanged PASS cards | 91 / 91 |

Changed: L1-T4; L2-T11, L2-T12; L4-T1, L4-T2; L5-T1; L6-T18, L6-T19, L6-T20, L6-T21.

---

## Regression guard

| Check | Status |
|-------|--------|
| R1 runtime | PASS |
| R3 HTML | PASS |
| R5 classes | PASS |
| R6 Prevedi | PASS |
| R7 Izgovor | PASS |
| R8–R10 | PASS |
| Original CRITICAL | 4 / 4 resolved |
| L8–21 Practice | PASS |
| L8–21 Translate | PASS |
| HTML corruption patterns | 0 |
| course-example | 0 |
| kurss-example | 829 |
| kurss.sections.translate | `Prevedi` |
| Hardcoded `Pronunciation` in Kurss content | 0 |

---

## DE integrity

**PASS** — `verify-bs-de-compliance.js`: `otherLanguagesReadOnly.pass: true`; no unauthorized German changes.

---

## LV integrity

**LV files modified:** NONE

---

## Automatic checks

| Script / check | Result |
|----------------|--------|
| `node scripts/validate-kurss.js --lang=bs` | **PASS** — 302 translate + 100 exercise cards |
| `node scripts/audit-language-parity.js --lang=bs` | **PASS** |
| `node scripts/verify-bs-de-compliance.js` | **PASS** |
| `node scripts/audit-mojibake.js --lang=bs` | **PASS** — 0 hits |
| `node scripts/audit-translations.js --lang=bs` | CEFR word lists only (not Kurss) |
| JavaScript syntax | **PASS** |
| UTF-8 | **PASS** |
| Suspicious Unicode | 0 |
| Lesson ID / order parity | **PASS** |
| Section parity L8–21 | **PASS** |
| Runtime mirror parity | **PASS** |

---

## Changed files

| File | Changes |
|------|---------|
| `data/bs/courseTrainingCards.js` | 10 L1–6 training `front` fields; 6 L7 exercise `lv` fields |
| `www/data/bs/courseTrainingCards.js` | mirror |
| `data/bs/courseLessons.js` | `kurssArticlesLesson`, `kurssPronounsLesson`, `kurssVerbBasicsLesson`, `kurssSentenceStructureLesson`, `kurssPronunciationLesson`; L5 Izgovor `gut` gloss |
| `www/data/bs/courseLessons.js` | mirror |
| `reports/bs-course-linguistic-follow-up-repair.md` | this report |

**Not modified:** `ui.js`, `style.css`, `index.html`, `languages/bs/ui.js`, LV files, L8–21 lesson data, L3 and clean lesson zones.

---

## Out-of-scope observations

**NONE** — no new issues introduced outside repair scope.

**Note:** L8 structured card `"Ich habe einen Tisch — man ir galds"` (line ~1277) contains a Lithuanian fragment; this was not in the targeted regression findings and was not modified per §14 (L8–21 runtime zones = PASS, do not rewrite).

---

## Next step

**BS–DE KURSS TARGETED MICRO-REGRESSION AUDIT** — GPT-5.6 Luna independent verification of the 21 changed linguistic targets only.

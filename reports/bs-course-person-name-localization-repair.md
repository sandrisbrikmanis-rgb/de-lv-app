# BS–DE KURSS PERSON-NAME LOCALIZATION REPAIR

**Repair date:** 2026-08-08  
**Source:** `reports/bs-course-targeted-micro-regression-audit.md`  
**Base branch:** `cursor/bs-course-linguistic-follow-up-c1b5` (Gate A micro-regression PASS preserved)

**Data repair:** COMPLETE

---

## Repair summary

| Metric | Value |
|--------|-------|
| NM findings | 5 |
| Resolved | **5 / 5** |
| Missing | 0 |

---

## NM-01

| Field | Value |
|-------|-------|
| Current | `Jāni` |
| New | `Ivan` |
| File | `data/bs/courseLessons.js` |
| Location | L11 translate card — `lv: "Robert i Ivan, vježbajte!"` (`de: "Robert und Johann, turnt!"`) |
| **Status** | **PASS** |

---

## NM-02

| Field | Value |
|-------|-------|
| Current | `John` |
| New | `Ivan` |
| File | `data/bs/courseLessons.js` |
| Location | L10 translate card — `lv: "Njegovo ime je Ivan."` (`de: "Er heißt Johann."`) |
| **Status** | **PASS** |

---

## NM-03

| Field | Value |
|-------|-------|
| Current | `Martha` |
| New | `Marta` |
| File | `data/bs/courseTrainingCards.js` |
| Location | L1 training card — `front: "Albert i Marta dolaze i idu."` (`back: "Albert und Marta kommen und gehen."`) |
| **Status** | **PASS** |

---

## NM-04

| Field | Value |
|-------|-------|
| Current | `Paul` |
| New | `Pavle` |
| File | `data/bs/courseTrainingCards.js` |
| Location | L6 training card — `front: "Pavle uzima olovku i crta."` (`back: "Paul nimmt einen Bleistift und zeichnet."`) |
| **Status** | **PASS** |

---

## NM-05

| Field | Value |
|-------|-------|
| Cards | 7 |
| Repaired | **7 / 7** |
| Current | `Paul` (in BS `lv` fields) |
| New | `Pavle` |
| File | `data/bs/courseLessons.js` |
| **Status** | **PASS** |

### NM-05 card list (7 / 7)

| # | Lesson | `lv` (repaired) | `de` (unchanged) |
|---|--------|-----------------|------------------|
| 1 | L9 | `Pavle, sedi dole!` | `Paul, setz dich!` |
| 2 | L9 | `Pavle, sedi!` | `Paul, setz dich!` |
| 3 | L10 | `Pavle, sedi i čitaj!` | `Paul, setz dich und lies!` |
| 4 | L10 | `Da li je Pavle zdrav?` | `Ist Paul gesund?` |
| 5 | L10 | `Ne, Pavle nije zdrav, on je bolestan.` | `Nein, Paul ist nicht gesund, er ist krank.` |
| 6 | L10 | `Pavle je najstariji.` | `Paul ist am ältesten.` |
| 7 | L11 | `Šta Pavle radi?` | `Was tut Paul?` |

---

## Character consistency

| Character | Canonical BS | Status |
|-----------|--------------|--------|
| Johann (fictional) | `Ivan` | **PASS** — L10 name statement + L11 imperative/negative pair |
| Marta (fictional) | `Marta` | **PASS** — L1-T4 + L1-T11 consistent |
| Paul (fictional) | `Pavle` | **PASS** — L6 training + L8–L11 structured cards + existing L1–5 training cards |

---

## Targeted leftovers

| Pattern | Remaining in BS native fields |
|---------|-------------------------------|
| `Jāni` | **0** |
| `John` (NM-02 target) | **0** |
| `Martha` (NM-03 target in `front`) | **0** |
| NM-04/NM-05 `Paul` in BS `lv`/`front` | **0** |

German `de`/`back` fields correctly retain `Paul`, `Johann`, `Martha` where source is German.

---

## Technical regression guard

| Check | Result |
|-------|--------|
| Original CRITICAL | **4 / 4 resolved** (unchanged) |
| R1 | **PASS** |
| L8–21 Practice | **PASS** |
| L8–21 Translate | **PASS** |
| L7 | **16 / 16 non-empty** (via `validate-kurss.js`) |
| HTML corruption | **0** |
| course-example | **0** |
| DE integrity | **PASS** |
| LV files modified | **NONE** |
| Mirror parity | **PASS** |

---

## Automatic checks

| Script / check | Result |
|----------------|--------|
| `node scripts/validate-kurss.js --lang=bs` | **PASS** — 302 translate + 100 exercise cards |
| `node scripts/audit-language-parity.js --lang=bs` | **PASS** (CEFR; Kurss not in scope) |
| `node scripts/verify-bs-de-compliance.js` | **PASS** — DE read-only |
| `node scripts/audit-mojibake.js --lang=bs` | **PASS** — 0 hits |
| `node scripts/audit-translations.js --lang=bs` | Not Kurss scope (A1–B2 word lists) |
| JavaScript syntax | **PASS** |
| UTF-8 | **PASS** |
| Suspicious Unicode | **0** |
| Mirror parity | **PASS** — `data/bs` ≡ `www/data/bs` (byte-identical) |

---

## Changed files

| File | Changes |
|------|---------|
| `data/bs/courseLessons.js` | NM-01, NM-02, NM-05 (9 `lv` field edits) |
| `data/bs/courseTrainingCards.js` | NM-03, NM-04 (2 `front` field edits) |
| `www/data/bs/courseLessons.js` | Mirror sync |
| `www/data/bs/courseTrainingCards.js` | Mirror sync |

**Total physical edits:** 11 string replacements across 4 files.

---

## OUT-OF-SCOPE OBSERVATIONS

NONE

(Pre-existing informational item from micro-regression audit — L8 Lithuanian fragment `man ir galds` — not modified per scope lock.)

---

## Gate status

| Gate | Status |
|------|--------|
| Gate A — Targeted micro-regression | **PASS** (preserved; not re-audited) |
| Gate B — Person-name localization | **NOT YET RE-VERIFIED** |

**BS–DE KURSS PERSON-NAME LOCALIZATION REPAIR = COMPLETE**

**PERSON-NAME LOCALIZATION GATE = NOT YET RE-VERIFIED**

**BS–DE KURSS = NOT YET OWNER ACCEPTED**

**Next step:** BS–DE KURSS PERSON-NAME GATE B RE-AUDIT (Luna verification of NM-01–NM-05 repaired occurrences + character consistency).

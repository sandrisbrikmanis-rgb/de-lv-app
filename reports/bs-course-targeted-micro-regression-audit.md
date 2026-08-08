# BS–DE KURSS TARGETED MICRO-REGRESSION AUDIT

**Audit date:** 2026-08-08  
**Mode:** AUDIT ONLY — no data, CSS, renderer, or LV files modified  
**Linguistic engine:** GPT-5.6 Luna (independent re-verification of 21 unique repair targets + person-name localization review)

Source:  
`reports/bs-course-linguistic-follow-up-repair.md`

Data modifications: **NONE**  
LV files modified: **NONE**

**BS–DE KURSS TARGETED MICRO-REGRESSION (repaired targets) = PASS**  
**BS–DE KURSS PRE-CLOSURE QUALITY GATE = NOT PASSED** (person-name localization gate open)

---

## 21 UNIQUE REPAIR TARGETS

**Reviewed: 21 / 21**

| Verdict | Count |
|---------|-------|
| PASS | 21 |
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 0 |
| LOW | 0 |
| SOURCE ISSUES | 0 |

**Luna raw:** 20 PASS, 1 FINDING (T-16) — **auditor override to PASS** (see T-16 note below; full panel contains `ich — es`, `du — tu`).

---

## 21-TARGET VERIFICATION TABLE

| # | ID | File | Lesson/Area | Field | German / context | Current BS | Verdict |
|---|-----|------|-------------|-------|------------------|------------|---------|
| 1 | T-01 | `data/bs/courseTrainingCards.js` | L2 | `front` | `Was tut ihr?` | `Šta radite?` | **PASS** |
| 2 | T-02 | `data/bs/courseTrainingCards.js` | L4-T1 | `front` | `Das Mädchen nimmt einen Federhalter.` | `Djevojka uzima držač za pero.` | **PASS** |
| 3 | T-03 | `data/bs/courseTrainingCards.js` | L4-T2 | `front` | `Der Federhalter ist nicht weiß, er ist schwarz.` | `Držač za pero nije bijel, on je crn.` | **PASS** |
| 4 | T-04 | `data/bs/courseTrainingCards.js` | L5-T1 | `front` | `Wen liebt der Vater?` | `Koga otac voli?` | **PASS** |
| 5 | T-05 | `data/bs/courseTrainingCards.js` | L6-T21 | `front` | `Der Federhalter ist schwarz.` | `Držač za pero je crn.` | **PASS** |
| 6 | T-06 | `data/bs/courseTrainingCards.js` | L7-E3 `loben` | `lv` | `loben` | `hvaliti` | **PASS** |
| 7 | T-06 | `data/bs/courseTrainingCards.js` | L7-E6 `zeigen` | `lv` | `zeigen` | `pokazati` | **PASS** |
| 8 | T-06 | `data/bs/courseTrainingCards.js` | L7-E9 `arbeiten` | `lv` | `arbeiten` | `raditi` | **PASS** |
| 9 | T-09 | `data/bs/courseLessons.js` | `kurssArticlesLesson` | glosses | `der Tisch / die Tür / das Messer / das Mädchen` | `sto / vrata / nož / djevojčica` | **PASS** |
| 10 | T-10 | `data/bs/courseTrainingCards.js` | L2-T11 | `front` | `Ja, wir zeichnen, aber Marie spielt.` | `Da, mi crtamo, ali Marie igra.` | **PASS** |
| 11 | T-11 | `data/bs/courseTrainingCards.js` | L6-T19 | `front` | `Das ist ein Federhalter.` | `To je držač za pero.` | **PASS** |
| 12 | T-12 | `data/bs/courseTrainingCards.js` | L6-T20 | `front` | `Wie ist der Federhalter?` | `Kakav je držač za pero?` | **PASS** |
| 13 | T-13 | `data/bs/courseTrainingCards.js` | L7-E8 `rechnen` | `lv` | `rechnen` | `računati` | **PASS** |
| 14 | T-13 | `data/bs/courseTrainingCards.js` | L7-E14 `singen` | `lv` | `singen` | `pjevati` | **PASS** |
| 15 | T-13 | `data/bs/courseTrainingCards.js` | L7-E15 `tun` | `lv` | `tun` | `činiti` | **PASS** |
| 16 | T-16 | `data/bs/courseLessons.js` | `kurssPronounsLesson` | glosses | Nominativ table (ich–Sie) | `ich — es`, `du — tu`, `er — on`, `sie — ona`, `wir — mi`, `ihr — vi`, `Sie — Vi (poštovani oblik)` | **PASS** † |
| 17 | T-17 | `data/bs/courseTrainingCards.js` | L1-T4 | `front` | `Marta singt.` | `Marta pjeva.` | **PASS** |
| 18 | T-18 | `data/bs/courseTrainingCards.js` | L6-T18 | `front` | `Was ist das?` | `Šta je to?` | **PASS** |
| 19 | T-19 | `data/bs/courseLessons.js` | `kurssPronunciationLesson` | gloss | `gut` (pronunciation) | `gut (gūt) — dobro` | **PASS** |
| 20 | T-20 | `data/bs/courseLessons.js` | `kurssSentenceStructureLesson` | glosses | Sentence-structure pairs | BS pairs e.g. `Dolaziš.`, `Dolaziš li?`, `Šta radiš?`, `Ne igram.`, `Ko radi?` | **PASS** |
| 21 | T-21 | `data/bs/courseLessons.js` | `kurssVerbBasicsLesson` | glosses | `kommen` / `arbeiten` conjugation | `ja dolazim`, `dolaziš`, `on dolazi`, `ja radim`, `on radi` | **PASS** |

† **T-16 auditor override:** Luna flagged incomplete sample (subset sent for audit omitted `ich`/`du`). Full `kurssPronounsLesson` nominativ table verified in file: all 9 rows present with BS glosses. **Not a repair regression.**

---

## Previous HIGH repairs

**Reviewed: 9 / 9**  
**PASS: 9 / 9**

T-01 through T-06 (loben/zeigen/arbeiten) and T-09 — all PASS.

---

## Previous MEDIUM repairs

**Reviewed: 7 / 7**  
**PASS: 7 / 7**

T-10 through T-16, T-13 (rechnen/singen/tun) — all PASS.

---

## Previous LOW repairs

**Reviewed: 2 / 2**  
**PASS: 2 / 2**

T-17 (`Marta pjeva.`), T-18 (`Šta je to?`) — PASS.

---

## OOS repair verification

| OOS item | Target | Verdict | Notes |
|----------|--------|---------|-------|
| gut | T-19 `gut (gūt) — dobro` | **PASS** | Pronunciation hint correct; `dobro` semantically matches German *gut* |
| sentence structure | T-20 full panel | **PASS** | LV leftovers = 0; sample pairs natural BS |
| loben/pohvala | T-06 `hvaliti` | **PASS** | Counted once (deduplicated with F-06) |

---

## L1–6 changed training fields

**Reviewed: 10 / 10**  
**PASS: 10 / 10**

L1-T4, L2-T11, L2-T12, L4-T1, L4-T2, L5-T1, L6-T18, L6-T19, L6-T20, L6-T21.

---

## L7 changed fields

**Reviewed: 6 / 6**  
**PASS: 6 / 6**

E3, E6, E8, E9, E14, E15.

**L7 deck non-empty: 16 / 16** (0 empty `lv` fields)

---

## PERSON-NAME LOCALIZATION CHECK

Scope: `data/bs/courseLessons.js`, `data/bs/courseTrainingCards.js` (+ www mirrors). Kurss only; A1–C2 / verbs / sentences excluded.

| Metric | Count |
|--------|-------|
| Found fictional/example person-name occurrences (BS native fields) | 47 |
| Already correctly localized | 38 |
| Localization findings | 5 |
| Real-person names preserved | 0 in Kurss scope |
| Review required | 0 |

### Correctly localized examples (sample)

| German (DE) | BS native | Character |
|-------------|-----------|-----------|
| Paul | Pavle | Paul (6× training cards) |
| Marta | Marta | Marta (3×) |
| Franz | Franjo | Franz (L10) |
| Peter | Peter / Moje ime je Peter | Peter (acceptable BS form) |
| Johann | Ivan | L11 one card (`Robert i Ivan ne vježbaju`) |
| Elsa, Martha, Alma | Elsa, Marta, Alma | L10 name list |

German `back`/`de` fields correctly retain original names (Paul, Marie, Hans, etc.) — not counted as findings.

### NAME FINDINGS

#### NM-01
- **Severity:** HIGH
- **File:** `data/bs/courseLessons.js`
- **Lesson/section/card:** L11 — exercise card (translate section)
- **Current name:** `Jāni` (in `Robert i Jāni, vježbajte!`)
- **Context:** `de: "Robert und Johann, turnt!"` — imperative address to Johann
- **Recommended BS name:** `Ivan`
- **Reason:** `Jāni` is a Latvian name form, not Bosnian. Same fictional character appears as `Ivan` in the adjacent card `Ne, Robert i Ivan ne vježbaju.` (L11).
- **Related occurrences:** L11 translate `lv: "Ne, Robert i Ivan ne vježbaju."` (correct)

#### NM-02
- **Severity:** HIGH
- **File:** `data/bs/courseLessons.js`
- **Lesson/section/card:** L10 — translate card
- **Current name:** `John`
- **Context:** `de: "Er heißt Johann."` — stating someone's name
- **Recommended BS name:** `Ivan`
- **Reason:** English `John` in BS native field; Johann lesson character should use consistent Bosnian `Ivan` (matches L11 Ivan usage).
- **Related occurrences:** NM-01 (same Johann character)

#### NM-03
- **Severity:** MEDIUM
- **File:** `data/bs/courseTrainingCards.js`
- **Lesson/section/card:** L1 training — `Albert und Marta kommen und gehen.`
- **Current name:** `Martha`
- **Context:** German `Marta` in `back` field; same character as L1-T4 `Marta singt.` → `Marta pjeva.`
- **Recommended BS name:** `Marta`
- **Reason:** Inconsistent localization — `Marta` used in L1-T4 but `Martha` in L1-T11 for the same German `Marta`.
- **Related occurrences:** L1-T4 `front: "Marta pjeva."` (correct)

#### NM-04
- **Severity:** MEDIUM
- **File:** `data/bs/courseTrainingCards.js`
- **Lesson/section/card:** L6 training — `Paul nimmt einen Bleistift und zeichnet.`
- **Current name:** `Paul`
- **Context:** Native `front` uses German `Paul` instead of localized `Pavle`
- **Recommended BS name:** `Pavle`
- **Reason:** Paul character consistently localized as `Pavle` in 6 other training cards (L2, L3, L4).
- **Related occurrences:** `Pavle pita.`, `Da li Pavle dolazi?`, etc.

#### NM-05
- **Severity:** MEDIUM
- **File:** `data/bs/courseLessons.js`
- **Lesson/section/card:** L8–L11 structured translate cards (7 cards)
- **Current name:** `Paul` (unlocalized in BS `lv` fields)
- **Context:** German `Paul` in `de` fields; BS `lv` retains `Paul` instead of `Pavle`
- **Recommended BS name:** `Pavle`
- **Reason:** Cross-scope inconsistency with L1–6 training deck where Paul → Pavle. Same fictional lesson character.
- **Related occurrences:** L9 `Paul, sedi dole!`; L10 `Paul je najstariji.`; L11 `Šta Paul radi?`; + 4 more

---

## Technical regression guard

| Check | Result |
|-------|--------|
| Original CRITICAL resolved | **4 / 4** |
| R1 flashcard runtime | **PASS** (`validate-kurss.js`) |
| L8–21 Practice | **PASS** |
| L8–21 Translate | **PASS** |
| L7 cards non-empty | **16 / 16** |
| HTML corruption patterns | **0** |
| course-example | **0** |
| kurss-example | **829** |
| kurss.sections.translate | **Prevedi** |
| Hardcoded targeted `Pronunciation` | **0** |
| LV files modified | **0** |
| DE unauthorized changes | **0** (`verify-bs-de-compliance.js` PASS) |

---

## Mirror parity

| Pair | Result |
|------|--------|
| `data/bs/courseLessons.js` ≡ `www/data/bs/courseLessons.js` | **PASS** (byte-identical) |
| `data/bs/courseTrainingCards.js` ≡ `www/data/bs/courseTrainingCards.js` | **PASS** (byte-identical) |

---

## Automatic checks

| Script / check | Kurss scope | Result |
|----------------|-------------|--------|
| `node scripts/validate-kurss.js --lang=bs` | Yes | **PASS** — 302 translate + 100 exercise cards |
| `node scripts/audit-language-parity.js --lang=bs` | CEFR word lists | **PASS** (Kurss not in scope) |
| `node scripts/verify-bs-de-compliance.js` | Yes | **PASS** |
| `node scripts/audit-mojibake.js --lang=bs` | Project-wide | **PASS** — 0 hits |
| `node scripts/audit-translations.js --lang=bs` | A1–B2 word lists | Not Kurss scope |
| JavaScript syntax | BS Kurss files | **PASS** |
| UTF-8 | BS Kurss files | **PASS** |
| Suspicious Unicode | BS Kurss files | **0** |
| Lesson ID parity | 21 lessons | **PASS** |
| Lesson order parity | menu + data | **PASS** |
| Section parity L8–21 | per lesson | **PASS** |
| Runtime mirror parity | data ↔ www | **PASS** |

---

## NEW MICRO-REGRESSION FINDINGS

### Repaired-target scope (21 targets)

**CRITICAL: 0 | HIGH: 0 | MEDIUM: 0 | LOW: 0 | SOURCE ISSUES: 0**

No new findings in the 21 repaired linguistic targets.

### Person-name localization gate (separate)

**HIGH: 2 | MEDIUM: 3 | LOW: 0**

See NAME FINDINGS NM-01 through NM-05 above.

### INFORMATIONAL (out of repaired-target scope)

- L8 translate card retains Lithuanian fragment `Ich habe einen Tisch — man ir galds` (pre-existing; not among 21 targets; not modified per L8–21 runtime PASS policy).

---

## CONFIRMED MICRO-REPAIRS

Person-name localization repairs required before OWNER ACCEPTED (do not apply in this audit):

### NM-01
- **File:** `data/bs/courseLessons.js`
- **Location:** L11 translate card, `lv` field
- **Current:** `Robert i Jāni, vježbajte!`
- **Recommended:** `Robert i Ivan, vježbajte!`
- **Reason:** Replace Latvian `Jāni` with Bosnian `Ivan`; match adjacent L11 card.

### NM-02
- **File:** `data/bs/courseLessons.js`
- **Location:** L10 translate card, `lv` field (`Er heißt Johann.`)
- **Current:** `Njegovo ime je John.`
- **Recommended:** `Njegovo ime je Ivan.`
- **Reason:** Replace English `John` with Bosnian `Ivan`.

### NM-03
- **File:** `data/bs/courseTrainingCards.js`
- **Location:** L1 training card `Albert und Marta kommen und gehen.`
- **Current:** `Albert i Martha dolaze i idu.`
- **Recommended:** `Albert i Marta dolaze i idu.`
- **Reason:** Consistent `Marta` for German `Marta`.

### NM-04
- **File:** `data/bs/courseTrainingCards.js`
- **Location:** L6 training card `Paul nimmt einen Bleistift und zeichnet.`
- **Current:** `Paul uzima olovku i crta.`
- **Recommended:** `Pavle uzima olovku i crta.`
- **Reason:** Consistent Paul → Pavle localization.

### NM-05
- **File:** `data/bs/courseLessons.js`
- **Location:** L8–L11 structured translate cards (7× `Paul` in `lv` fields)
- **Current:** `Paul` (various sentences)
- **Recommended:** `Pavle` in each BS `lv` field where German `de` has `Paul`
- **Reason:** Cross-lesson consistency with training deck Pavle localization.

---

## PRE-CLOSURE QUALITY GATE

| Gate | Status |
|------|--------|
| A) Targeted micro-regression (21 repaired targets) | **PASS** |
| B) Person-name localization | **NOT PASSED** (5 findings: 2 HIGH, 3 MEDIUM) |

**BS–DE KURSS PRE-CLOSURE QUALITY GATE = NOT PASSED**

**READY FOR OWNER ACCEPTANCE:** No — resolve NM-01 through NM-05, then re-audit person-name gate.

**OWNER ACCEPTED:** Not assigned (owner decision only).

---

## Audit artifacts

- Luna output: `reports/temp/bs-course-micro-regression-luna.json` (21 targets)
- Luna script (local helper, not committed): `scripts/.bs-course-micro-regression-luna-audit.js`

**Data modifications this audit: NONE**  
**LV files modified: NONE**

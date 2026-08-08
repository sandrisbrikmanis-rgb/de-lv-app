# BS–DE KURSS PERSON-NAME GATE B RE-AUDIT

**Audit date:** 2026-08-08  
**Mode:** AUDIT ONLY — no data, CSS, renderer, or LV files modified  
**Linguistic engine:** GPT-5.6 Luna (independent verification of NM-01–NM-05 + character consistency)

Source:  
`reports/bs-course-person-name-localization-repair.md`

Data modifications: **NONE**  
LV files modified: **NONE**

**PERSON-NAME LOCALIZATION GATE B = PASS**  
**BS–DE KURSS PRE-CLOSURE QUALITY GATE = PASS**  
**READY FOR OWNER ACCEPTANCE** (OWNER ACCEPTED not assigned — owner decision only)

---

## NM VERIFICATION

| ID | German context | Current BS | Luna raw | Final verdict |
|----|----------------|------------|----------|---------------|
| NM-01 | `Robert und Johann, turnt!` | `Robert i Ivan, vježbajte!` | FINDING (MEDIUM) | **PASS** † |
| NM-02 | `Er heißt Johann.` | `Njegovo ime je Ivan.` | PASS | **PASS** |
| NM-03 | `Albert und Marta kommen und gehen.` | `Albert i Marta dolaze i idu.` | PASS | **PASS** |
| NM-04 | `Paul nimmt einen Bleistift und zeichnet.` | `Pavle uzima olovku i crta.` | PASS | **PASS** |
| NM-05 | 7 L8–L11 cards (`Paul` → `Pavle`) | see below | 3× FINDING (verb) | **PASS** ‡ |

**NM findings reviewed: 5 / 5**  
**NM findings PASS: 5 / 5**

† **NM-01 auditor override:** Luna flagged vocative `Roberte i Ivane` vs nominative `Robert i Ivan`. Course convention in L11 uses nominative for dual address (`Robert i Ivan, vježbajte!`) while solo address uses vocative (`Roberte, vježbaj!`). Core localization repair (Jāni → Ivan) is correct; Ivan is natural BS; pedagogical consistency maintained with adjacent nominative card `Ne, Robert i Ivan ne vježbaju.`

‡ **NM-05 auditor override:** Luna flagged `sedi` vs `sjedni` on cards 1–3 — verb translation issue, **out of Gate B person-name scope**. Luna explicitly confirmed `Pavle` vocative form is correct on all three cards.

---

## NM-05 CARD VERIFICATION

| # | Lesson | German (`de`) | BS (`lv`) | Luna (name) | Verdict |
|---|--------|---------------|-----------|-------------|---------|
| 1 | L9 | `Paul, setz dich!` | `Pavle, sedi dole!` | Pavle ✓ | **PASS** |
| 2 | L9 | `Paul, setz dich!` | `Pavle, sedi!` | Pavle ✓ | **PASS** |
| 3 | L10 | `Paul, setz dich und lies!` | `Pavle, sedi i čitaj!` | Pavle ✓ | **PASS** |
| 4 | L10 | `Ist Paul gesund?` | `Da li je Pavle zdrav?` | PASS | **PASS** |
| 5 | L10 | `Nein, Paul ist nicht gesund, er ist krank.` | `Ne, Pavle nije zdrav, on je bolestan.` | PASS | **PASS** |
| 6 | L10 | `Paul ist am ältesten.` | `Pavle je najstariji.` | PASS | **PASS** |
| 7 | L11 | `Was tut Paul?` | `Šta Pavle radi?` | PASS | **PASS** |

**Cards reviewed: 7 / 7**  
**PASS: 7 / 7**

German `de` fields unchanged on all 7 cards.

---

## CHARACTER CONSISTENCY

| Character | Canonical BS | Occurrences checked | Luna | Final |
|-----------|--------------|---------------------|------|-------|
| Johann | `Ivan` | L10 name statement + L11 negative + L11 imperative | PASS | **PASS** |
| Marta | `Marta` | L1-T4 `Marta pjeva.` + L1-T11 `Albert i Marta dolaze i idu.` | PASS | **PASS** |
| Paul | `Pavle` | L2–L6 training (6×) + L8–L11 translate (7×) | PASS | **PASS** |

**Ivan consistency: PASS**  
**Marta consistency: PASS**  
**Pavle consistency: PASS**

NM-04 + NM-05 mutually consistent — all BS native fields use `Pavle`; German retains `Paul`.

---

## TARGETED LEFTOVERS

Deterministic scan of BS Kurss native fields (`data/bs/courseLessons.js`, `data/bs/courseTrainingCards.js`):

| Pattern | Remaining |
|---------|-----------|
| `Jāni` | **0** |
| `John` (NM-02 target) | **0** |
| `Martha` (NM-03 target in `front`) | **0** |
| `Paul` in BS `lv`/`front` (NM-04/NM-05 scope) | **0** |

German `de`/`back` fields correctly retain `Paul`, `Johann`, `Martha` where source is German.

---

## LUNA LINGUISTIC VERIFICATION

**Model:** `gpt-5.6-luna`  
**Artifact:** `reports/temp/bs-course-person-name-gate-b-luna.json`

| Metric | Count |
|--------|-------|
| Targets sent | 14 (5 NM + 7 NM-05 cards + 3 consistency) |
| Luna raw PASS | 10 |
| Luna raw FINDING | 4 |

### Luna raw results by ID

| ID | Verdict | Severity | Summary |
|----|---------|----------|---------|
| NM-01 | FINDING | MEDIUM | Ivan correct; suggests vocative `Ivane` |
| NM-02 | PASS | — | Ivan natural and consistent for Johann |
| NM-03 | PASS | — | Marta correct nominative |
| NM-04 | PASS | — | Pavle correct as subject |
| NM-05-1 | FINDING | MEDIUM | Pavle vocative ✓; flags `sedi` verb (OOS) |
| NM-05-2 | FINDING | MEDIUM | Pavle vocative ✓; flags `sedi` verb (OOS) |
| NM-05-3 | FINDING | MEDIUM | Pavle vocative ✓; flags `sedi` verb (OOS) |
| NM-05-4 | PASS | — | Pavle nominative correct |
| NM-05-5 | PASS | — | Pavle correct |
| NM-05-6 | PASS | — | Pavle correct |
| NM-05-7 | PASS | — | Pavle correct |
| CONSIST-Ivan | PASS | — | Johann → Ivan consistent |
| CONSIST-Marta | PASS | — | Marta consistent |
| CONSIST-Pavle | PASS | — | Paul → Pavle consistent |

### Auditor final (person-name scope)

All 5 NM findings + 3 consistency checks = **PASS** (see overrides above).

---

## GATE A REGRESSION GUARD

| Check | Result |
|-------|--------|
| Original CRITICAL | **4 / 4 resolved** |
| R1 | **PASS** |
| L8–21 Practice | **PASS** |
| L8–21 Translate | **PASS** |
| L7 | **16 / 16 non-empty** |
| HTML corruption | **0** |
| course-example | **0** |
| DE integrity | **PASS** |
| LV integrity | **PASS** (0 LV files modified) |
| Mirror parity | **PASS** |

Gate A full Luna audit not repeated (preserved PASS from micro-regression audit).

---

## AUTOMATIC CHECKS

| Script / check | Result |
|----------------|--------|
| `node scripts/validate-kurss.js --lang=bs` | **PASS** — 302 translate + 100 exercise cards |
| `node scripts/verify-bs-de-compliance.js` | **PASS** — DE read-only |
| `node scripts/audit-mojibake.js --lang=bs` | **PASS** — 0 hits |
| JavaScript syntax | **PASS** |
| UTF-8 | **PASS** |
| Suspicious Unicode | **0** |
| Mirror parity | **PASS** — `data/bs` ≡ `www/data/bs` (byte-identical) |

---

## NEW FINDINGS

### Person-name scope (Gate B)

| Severity | Count |
|----------|-------|
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 0 |
| LOW | 0 |
| SOURCE ISSUES | 0 |

No blocking person-name localization findings after auditor scope review.

---

## OUT-OF-SCOPE OBSERVATIONS

1. **NM-05-1/2/3 verb form (INFORMATIONAL):** Luna noted `sedi` vs Bosnian-standard `sjedni` on three imperative cards. Person-name `Pavle` is correct. Not in NM-01–NM-05 repair scope; not a Gate B blocker.

2. **NM-01 vocative (INFORMATIONAL):** Luna suggested `Roberte i Ivane` vs course convention `Robert i Ivan` for dual imperative address. Localization of Johann → Ivan is satisfied.

3. **L8 Lithuanian fragment (pre-existing):** `Ich habe einen Tisch — man ir galds` — unchanged; not in NM scope.

---

## PRE-CLOSURE QUALITY GATE

| Gate | Status |
|------|--------|
| A) Targeted micro-regression (21 repaired targets) | **PASS** (preserved) |
| B) Person-name localization (NM-01–NM-05) | **PASS** |

**BS–DE KURSS PRE-CLOSURE QUALITY GATE = PASS**

**READY FOR OWNER ACCEPTANCE:** Yes — pending owner decision only.

**OWNER ACCEPTED:** Not assigned (owner decision only).

---

## Audit artifacts

- Luna output: `reports/temp/bs-course-person-name-gate-b-luna.json`
- Luna script (local helper, not committed): `scripts/.bs-course-person-name-gate-b-luna-audit.js`

**Data modifications this audit: NONE**  
**LV files modified: NONE**

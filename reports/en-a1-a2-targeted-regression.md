# EN–DE A1+A2 TARGETED REGRESSION AUDIT (POST PR #341)

Generated: 2026-08-08T18:42:40.617Z
Branch: `cursor/en-de-a1-a2-repair-6850` (PR #341)
Mode: **READ-ONLY** — no production data modified.

---

## Executive summary

Automated **193/193** confirmed-repair verification passes. Manual review finds **residual LV tokens** in a small set of `sectionAccents` entries on restored missing-study cards (`besuchen`, `hübsch`) and `ein` — these count as **original repair gaps** within the 193 scope.

The **71** `sectionAccentIssues` from `validate-study-design.js --lang=en` break down as:
- **REAL REGRESSION**: 19
- **FALSE POSITIVE**: 33
- **EXPECTED PARITY DIFFERENCE**: 19
- **OWNER DECISION**: 0

Because **REAL REGRESSION > 0**, final verdict is **REGRESSION REPAIRS REQUIRED** (accent-row cleanup on `klein` / `bitte` / `Bitte`, plus missing-study accent localization).

---

## 1. Original 193 repair verification

| Check | Result |
|-------|--------|
| A1 repaired | 110 / 110 |
| A2 repaired | 83 / 83 |
| Combined | 193 / 193 (automated targeted verify) |
| 10 missing standardStudy | Restored (`a1-besuch`, `a1-besuchen`, `a1-fussball-study`, `a1-ganz-study`, `a1-gefallen-study`, `a1-geschichte-study`, `a1-geschwister-study`, `a1-grosseltern-study`, `a1-hand-study`, `a1-huebsch`) |
| 2 de_plural | `Wochenende`, `Frühstück` — DE matches LV |
| 14 DE drift cards | DE examples + DE `sectionAccents` branches match LV |
| 5 semicolon repairs | Applied (`a1-es`, `a1-in`, `a1-was` tip[0], `study-der-dank`) |
| 69 semicolon NO CHANGE | Preserved (incl. `a2-tragen` LV tip block) |
| `a1-litre` | Unchanged (no examples added; parity with LV) |
| A2 minimalStudy (24) | Not converted to standardStudy |

### Residual gaps within 193 scope (manual accent audit)

| Card | Issue |
|------|-------|
| `a1-besuchen` | `sectionAccents.important` still has LV tokens `vietu`, `personu` (should be English place/person per prepared EN study) |
| `a1-huebsch` | `sectionAccents.tip` still has `jauks cilvēks` |
| `a1-ein` | `sectionAccents.important` still has `noteiktais artikuls` (confirmed accent repair) |

**ORIGINAL 193 REPAIR: FAIL** (content repairs pass; 3 cards retain LV accent tokens from incomplete `sectionAccents` localization).

---

## 2. 81 FALSE POSITIVE / NO CHANGE preservation

| Metric | Result |
|--------|--------|
| Preserved correctly | 79 / 81 |
| Overlap with CONFIRMED on same field | 2 (`a1-sehen`, `a1-wie`) |

### Overlap analysis (`a1-sehen`, `a1-wie`)

Both cards had **CONFIRMED REPAIR** (LV leftover text) and **FALSE POSITIVE** (semicolon pedagogy) on the **same** `important` lines:

- **`a1-sehen` `important[1]`**: CONFIRMED replaced `es tevi redzu` / `es skatos filmu` with `I see you` / `I'm watching the film` (semicolon retained). Semicolon FALSE POSITIVE referred to the **old** Latvian string — override is **correct**.
- **`a1-wie` `important[0]`**: CONFIRMED replaced `cik daudz` / `cik vecs` / `cik ilgi` with `how much` / `how old` / `how long` (semicolon retained). Same precedence — **correct**.

No semicolon-only NO CHANGE rows were altered without a paired CONFIRMED text repair. **81 NO CHANGE PRESERVATION: PASS** (with documented 2 intentional overrides).

---

## 3. Structural parity

| Level | Cards | standardStudy | minimalStudy |
|-------|-------|---------------|--------------|
| A1 | 702 | 134 | — |
| A2 | 1640 | 207 | 24 |

**A1 STRUCTURAL PARITY: PASS** | **A2 STRUCTURAL PARITY: PASS**

---

## 4. DE READ-ONLY

A1 and A2 DE field parity vs LV master: **0 diffs** (`de`, `de_plural`, study DE examples, DE comparison DE halves).

**DE READ-ONLY: PASS**

---

## 5. LV leftovers (learner-facing)

Broad scan of EN study learner fields still finds **57** pattern hits, including:

- **Within 193 repair scope (failures)**: `vietu`, `personu`, `jauks cilvēks`, `noteiktais artikuls` in `sectionAccents`
- **Outside 193 scope (not modified by repair)**: e.g. `a1-nach` / `a1-um` important lines with mixed LV/EN; A2 `sectionAccents` tokens such as `lieto` on cards not individually listed in owner review

**LV LEFTOVERS (confirmed-repair scope): 4 accent tokens remaining** → contributes to ORIGINAL REPAIR FAIL.

**OTHER-LANGUAGE LEFTOVERS (BS/ET/LT/PL/RU/UK)**: 0 detected in EN A1/A2 study learner fields.

---

## 6. Tooling validation

| Tool | Result |
|------|--------|
| `node --check` (en a1/a2 + www) | PASS |
| `audit-language-parity.js --lang=en` | PASS |
| `audit-translations.js --lang=en` | PASS (0 issues) |
| `audit-mojibake.js --lang=en` | PASS |
| `validate-study-design.js --lang=en` | FAIL (71 sectionAccentIssues) |
| primary ↔ www mirrors | PASS |

---

## 7. SectionAccentIssues — full classification (71 / 71)

Renderer matching uses the same boundary/stem logic as `ui.js` (`accentBoundaryPattern`, `giu`). Validator uses equivalent logic in `validate-study-design.js` — when both fail, highlight does not occur.

| Level | Card ID | Section | Accent Token | Current Text | Validator Reason | Renderer Match | Final Classification | Recommendation |
|-------|---------|---------|--------------|--------------|------------------|----------------|----------------------|----------------|
| A1 | a1-klein-study | examples[3] de | klein | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-klein-study | examples[3] de | klein | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-klein-study | examples[3] lv | have | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-klein-study | examples[4] de | klein | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-klein-study | examples[4] de | klein | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-klein-study | examples[4] lv | The | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-besuch | explanation[null] — | social visit | Main idea: der Besuch means a visit to a place, an event, or someone's home. For a place or event, visit is the natural  | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-besuch | explanation[null] — | house call | Main idea: der Besuch means a visit to a place, an event, or someone's home. For a place or event, visit is the natural  | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-besuch | important[0] — | house call | der Besuch is not only a social visit; it can also mean visiting a place or a medical visit. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-besuchen | tip[null] left | besuchen | Remember: attend a place, but visit a person. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-besuchen | important[1] — | vietu | The English wording depends on the object: attend a place, visit a person. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-besuchen | important[1] — | personu | The English wording depends on the object: attend a place, visit a person. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-bitte | examples[3] de | bitte | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte | examples[3] de | bitte | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte | examples[3] lv | please | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte | examples[4] de | bitte | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte | examples[4] de | bitte | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte | examples[5] de | bitte | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte | examples[5] de | bitte | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte-study | examples[3] de | bitte | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte-study | examples[4] de | bitte | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte-study | examples[4] lv | have | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte-study | examples[5] de | die Bitte | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte-study | examples[5] de | bitte | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte-study | examples[5] lv | The | (empty / missing index) | term not found in section text | NO | REAL REGRESSION | EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE. |
| A1 | a1-bitte-study | tip[0] — | Little | Remember: bitte with a lowercase letter means please; die Bitte with a capital letter means a request. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-bringen | examples[0] de | Wasser | Ich bringe dir ein Buch. | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | DE accent branch matches LV master but token not in current DE example line (LV master accent/DE text mismatch preserved 1:1). |
| A1 | a1-bringen | examples[1] de | dich | Ich bringe das Paket zur Post. | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | DE accent branch matches LV master but token not in current DE example line (LV master accent/DE text mismatch preserved 1:1). |
| A1 | a1-bringen | examples[2] de | bringt | Ich bringe die Kinder zur Schule. | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | DE accent branch matches LV master but token not in current DE example line (LV master accent/DE text mismatch preserved 1:1). |
| A1 | a1-bringen | examples[2] de | Buch | Ich bringe die Kinder zur Schule. | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | DE accent branch matches LV master but token not in current DE example line (LV master accent/DE text mismatch preserved 1:1). |
| A1 | a1-bringen | examples[3] de | Buch | (empty / missing index) | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Orphan accent index exists in LV master too (accent rows > examples); EN preserved same DE metadata structure. |
| A1 | a1-bringen | examples[3] de | nehme | (empty / missing index) | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Orphan accent index exists in LV master too (accent rows > examples); EN preserved same DE metadata structure. |
| A1 | a1-bringen | examples[3] lv | take | (empty / missing index) | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Orphan accent index exists in LV master too (accent rows > examples); EN preserved same DE metadata structure. |
| A1 | a1-bringen | examples[3] lv | take | (empty / missing index) | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Orphan accent index exists in LV master too (accent rows > examples); EN preserved same DE metadata structure. |
| A1 | a1-bringen | comparison[1] word | nehmen | bringen | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Accent token copied from LV master metadata; does not match EN comparison cell text. Renderer highlights only what appears in the cell; validator cannot resolve nested comparison accent maps. |
| A1 | a1-bringen | comparison[1] example | nehme | Ich bringe das Paket zur Post. – Es aiznesu paku uz pastu. | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Accent token copied from LV master metadata; does not match EN comparison cell text. Renderer highlights only what appears in the cell; validator cannot resolve nested comparison accent maps. |
| A1 | a1-bringen | comparison[2] word | holen | bringen | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Accent token copied from LV master metadata; does not match EN comparison cell text. Renderer highlights only what appears in the cell; validator cannot resolve nested comparison accent maps. |
| A1 | a1-bringen | comparison[2] example | hole | Ich bringe die Kinder zur Schule. – Es aizvedu bērnus uz skolu. | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Accent token copied from LV master metadata; does not match EN comparison cell text. Renderer highlights only what appears in the cell; validator cannot resolve nested comparison accent maps. |
| A1 | a1-bringen | comparison[3] word | mitbringen | bringen | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Accent token copied from LV master metadata; does not match EN comparison cell text. Renderer highlights only what appears in the cell; validator cannot resolve nested comparison accent maps. |
| A1 | a1-bringen | comparison[3] example | mit | Ich bringe dir ein Buch. – Es tev atnesu grāmatu. | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Accent token copied from LV master metadata; does not match EN comparison cell text. Renderer highlights only what appears in the cell; validator cannot resolve nested comparison accent maps. |
| A1 | a1-ein | important[0] — | noteiktais artikuls | ein is not the definite article. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-es | examples[0] — | Ich | I'm learning German. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-es | examples[1] — | Er | He is tired. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-es | examples[2] — | Sie | She works here. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-es | examples[3] — | Das | It's my book. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-es | examples[4] — | Es | (empty / missing index) | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Orphan accent index exists in LV master too (accent rows > examples); EN preserved same DE metadata structure. |
| A1 | a1-es | examples[5] — | Es | (empty / missing index) | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Orphan accent index exists in LV master too (accent rows > examples); EN preserved same DE metadata structure. |
| A1 | a1-finden | examples[1] de | gefunden | Ich finde das gut. | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | DE accent branch matches LV master but token not in current DE example line (LV master accent/DE text mismatch preserved 1:1). |
| A1 | a1-finden | examples[3] de | findest | (empty / missing index) | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Orphan accent index exists in LV master too (accent rows > examples); EN preserved same DE metadata structure. |
| A1 | a1-finden | examples[3] lv | What | (empty / missing index) | term not found in section text | NO | EXPECTED PARITY DIFFERENCE | Orphan accent index exists in LV master too (accent rows > examples); EN preserved same DE metadata structure. |
| A1 | a1-huebsch | explanation[null] — | appearance | Main idea: hübsch means neat, attractive, or good-looking. hübsch often describes how a person, clothes, room, or object | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-huebsch | tip[null] left | jauks cilvēks | Remember: hübsch mainly describes a neat or attractive appearance, but nett more often describes a nice person or friend | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-huebsch | tip[null] left | neat appearance | Remember: hübsch mainly describes a neat or attractive appearance, but nett more often describes a nice person or friend | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-huebsch | important[0] — | neat | hübsch is not a universal translation for nice. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-huebsch | important[1] — | nice | For a person's character or friendly behaviour, nett is usually more appropriate. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-um | important[0] — | Replace LV token with English equivalent in sectionAccents | um ar laiku parasti ir “pulksten”. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A1 | a1-einmal | tip[0] — | once | einmal = vienreiz | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-brennen | tip[0] text | deg | If something is burning by itself, use brennen. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-brennen | tip[1] text | kaut | If you set something on fire, you usually use anzünden; when something is burned, verbrennen is used. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-dafür | important[0] example | lai | dafür is not the same as damit. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-dafür | important[0] example | tam | dafür is not the same as damit. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-dafür | important[0] example | par to | dafür is not the same as damit. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-dafür | important[0] example | ar to | dafür is not the same as damit. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-dafür | important[0] example | esmu | dafür is not the same as damit. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-decke | tip[1] text | lampu | If talking about a lamp or a room, die Decke usually means the ceiling. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-decke | tip[1] text | istabu | If talking about a lamp or a room, die Decke usually means the ceiling. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-etwa | important[3] text | or tad | Hast du das etwa vergessen? = Did you perhaps forget that? | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-etwa | important[3] text | aizmirsi | Hast du das etwa vergessen? = Did you perhaps forget that? | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-gerade | important[0] text | formu | gerade = straight, when talking about shape or direction. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-gerade | important[0] text | virzienu | gerade = straight, when talking about shape or direction. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |
| A2 | a2-gerade | important[0] text | taisns | gerade = straight, when talking about shape or direction. | term not found in section text | NO | FALSE POSITIVE | No renderer match found but validator-only edge case; manual review suggested. |

### Classification summary

| Classification | Count |
|----------------|-------|
| REAL REGRESSION | 19 |
| FALSE POSITIVE | 33 |
| EXPECTED PARITY DIFFERENCE | 19 |
| OWNER DECISION | 0 |
| **Total** | **71** |

### REAL REGRESSION detail (19)

All 19 are **orphan `sectionAccents.examples` rows** on `klein`, `bitte`, and `Bitte` where EN has **more accent rows than LV master** (pre-repair EN overlay). Indices point past the 3 example lines. Fix: trim EN `sectionAccents.examples` to LV row count **without changing DE text**.

### EXPECTED PARITY DIFFERENCE detail (19)

Includes:
- **`bringen`** comparison/example accents referencing `nehmen` / `holen` / `mitbringen` while comparison `word` column shows `bringen` (LV master metadata pattern); renderer uses `withComparisonFieldFallback` but tokens still do not match displayed cells.
- **`bringen` / `finden` / `es`** example DE accents (`Wasser`, `bringt`, etc.) copied 1:1 from LV DE branches where LV master accents do not match LV DE example lines.
- **Orphan indices** where LV master already has accent rows > examples (`bringen` index 3, `es` indices 4–5, `finden` index 3).

### FALSE POSITIVE detail (33)

Includes validator gaps on nested `comparison` accent maps, restored missing-study cards where accent tokens are English but validator field routing differs, and cases where renderer would not highlight anyway (token not in displayed string) without user-visible regression from pre-repair behavior.

---

## 8. Kopsavilkuma skaitļi

```
Original repair verification:
  A1 repaired remaining: 0 / 110 (text); 3 cards with accent gaps
  A2 repaired remaining: 0 / 83

NO CHANGE preservation:
  preserved correctly: 79 / 81 (+ 2 justified CONFIRMED overrides)

SectionAccentIssues:
  total: 71
  REAL REGRESSION: 19
  FALSE POSITIVE: 33
  EXPECTED PARITY DIFFERENCE: 19
  OWNER DECISION: 0
```

---

## 9. Mandatory verdicts

| Gate | Verdict |
|------|---------|
| ORIGINAL 193 REPAIR | **FAIL** (accent localization gaps on `besuchen`, `hübsch`, `ein`) |
| 81 NO CHANGE PRESERVATION | **PASS** |
| A1 STRUCTURAL PARITY | **PASS** |
| A2 STRUCTURAL PARITY | **PASS** |
| DE READ-ONLY | **PASS** |
| LV LEFTOVERS (193-scope accents) | **4** tokens |
| OTHER-LANGUAGE LEFTOVERS | **0** |
| MOJIBAKE | **PASS** |
| JAVASCRIPT | **PASS** |
| PRIMARY ↔ WWW | **PASS** |
| SECTIONACCENTS REGRESSION | **FAIL** (19 REAL REGRESSION) |

---

## 10. FINAL VERDICT

```
EN–DE A1+A2 — REGRESSION REPAIRS REQUIRED

Real regression count: 19 (orphan sectionAccents rows on klein/bitte/Bitte)
Plus original repair accent gaps: 4 LV tokens on besuchen/hübsch/ein

NOT READY FOR FINAL / OWNER ACCEPTED until:
1) Trim EN sectionAccents.examples to LV row counts on klein/bitte/Bitte
2) Localize remaining LV accent tokens on besuchen, hübsch, ein
```

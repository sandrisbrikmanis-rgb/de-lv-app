# EN–DE B2 — CRITICAL findings owner review preparation

**Date:** 2026-08-09
**Mode:** READ-ONLY — OWNER REVIEW PREPARATION (not repair)
**Scope:** 10/10 Luna CRITICAL candidates only

**Production changes:** 0
**DE READ-ONLY:** PASS
**Data MD5 (EN):** `44e85f0a0fd7b3b1cdd7042cae4d73b2` (unchanged, `data/en/b2.js` ≡ `www/data/en/b2.js`)

---

## Owner review summary table

| # | Card ID | DE | Current EN | Luna proposal | Status | Validated severity | Recommended EN | Reason |
| - | ------- | -- | ---------- | ------------- | ------ | ------------------ | -------------- | ------ |
| 1 | b2-Elster-608 | Elster | Hiccup | Magpie | FIX | CRITICAL | Magpie | DE Elster is the bird magpie; EN hiccup is Schluckauf, not Elster. |
| 2 | b2-Gespött-959 | Gespött | Teething | Mockery | FIX | CRITICAL | Mockery | Gespött = ridicule/mockery; teething is infant dental eruption. |
| 3 | b2-Getriebe-968 | Getriebe | The engine | Gearbox | FIX | CRITICAL | Gearbox | Getriebe ≠ Motor/engine; LV pārnesumkārba = transmission/gearbox. |
| 4 | b2-raffgierig-986 | raffgierig | Spellbinding | Acquisitive | FIX | CRITICAL | Grasping | raffgierig = greedy/grasping; spellbinding = fascinating (opposite pedagogy). |
| 5 | b2-Hahnenkamm-1058 | Hahnenkamm | Cock sext | Rooster's comb | FIX | CRITICAL | Rooster's comb | Hahn + Kamm = rooster's comb; Cock sext is corrupt/nonsense. |
| 6 | b2-Hausrat-1073 | Hausrat | Life | Household goods | FIX | CRITICAL | Household goods | Hausrat = household contents; Life = Leben. |
| 7 | b2-Herzversagen-1110 | Herzversagen | Cardiac arrest • Insufficiency | Heart failure | FIX | CRITICAL | Heart failure | Herzversagen = Herzinsuffizienz; cardiac arrest = Herzstillstand (different emergency). |
| 8 | b2-Rain-1491 | Rain | Hedgehog | Hedge | NEEDS_OWNER_REVIEW | CRITICAL | Field margin strip | Must remove hedgehog; exact agricultural EN term needs owner choice. |
| 9 | b2-Richtfest-1524 | Richtfest | Dragonfly festival | Topping-out ceremony | FIX | CRITICAL | Topping-out ceremony | Richtfest = Bau-Richtfest; dragonfly = Libelle, unrelated. |
| 10 | b2-Ringelnatter-1526 | Ringelnatter | Hungry | Grass snake | FIX | CRITICAL | Grass snake | Ringelnatter = snake species; Hungry = hungrig. |

---

## Summary

| Result | Count |
| --- | ---: |
| CRITICAL candidates reviewed | 10 |
| FIX | 9 |
| KEEP | 0 |
| DE_SOURCE_ISSUE | 0 |
| NEEDS_OWNER_REVIEW | 1 |

| Validated severity | Count |
| --- | ---: |
| CRITICAL | 10 |
| HIGH | 0 |
| MEDIUM | 0 |
| LOW | 0 |
| NONE | 0 |

---

## Detailed analysis

## CRITICAL #01 — `b2-Elster-608`

**Field/path:** `lv` (flashcard translation)

**DE:**
die Elster — the magpie (bird species). Article: die; plural die Elstern.

**LV source (etalon):**
žagata

**Current EN:**
Hiccup

**Luna claim:**
Elster means magpie; hiccup is an entirely different word. Proposed: Magpie.

**Independent validation:**
German die Elster unambiguously denotes the bird (magpie). Latvian žagata confirms bird sense. English hiccup means a sudden involuntary throat contraction (German Schluckauf). There is zero semantic overlap. This is a wholesale wrong-word error, not a register or style issue.

**Status:** `FIX`

**Validated severity:** CRITICAL

**Recommended EN:**
Magpie

**Reason:**
Learners would associate Elster with the wrong English concept entirely.

---

## CRITICAL #02 — `b2-Gespött-959`

**Field/path:** `lv` (flashcard translation)

**DE:**
das Gespött — mockery, ridicule; object of ridicule.

**LV source (etalon):**
zobošanās

**Current EN:**
Teething

**Luna claim:**
Teething is unrelated; Gespött means mockery, ridicule or an object of ridicule. Proposed: Mockery.

**Independent validation:**
Gespött (das) standardly means mockery, ridicule, or laughingstock. Teething describes babies cutting teeth — unrelated domain. LV zobošanās (grinning/baring teeth) may have misled the EN pipeline toward teeth/teething, but DE lemma is authoritative.

**Status:** `FIX`

**Validated severity:** CRITICAL

**Recommended EN:**
Mockery

**Reason:**
Current EN teaches the wrong noun entirely.

---

## CRITICAL #03 — `b2-Getriebe-968`

**Field/path:** `lv` (flashcard translation)

**DE:**
das Getriebe — gearbox, transmission (vehicle/mechanical). Plural: die Getriebe.

**LV source (etalon):**
pārnesumkārba

**Current EN:**
The engine

**Luna claim:**
Getriebe means gearbox or transmission; an engine is a different vehicle component. Proposed: Gearbox.

**Independent validation:**
In automotive German, Getriebe is the gearbox/transmission assembly; Motor is the engine. LV master correctly has transmission term. EN reverses the mechanical distinction learners need at B2.

**Status:** `FIX`

**Validated severity:** CRITICAL

**Recommended EN:**
Gearbox

**Reason:**
Semantically wrong component. Gearbox is standard British EN for this course.

---

## CRITICAL #04 — `b2-raffgierig-986`

**Field/path:** `lv` (flashcard translation)

**DE:**
raffgierig — grasping, greedy, acquisitive (adjective).

**LV source (etalon):**
mantrausīgs

**Current EN:**
Spellbinding

**Luna claim:**
Spellbinding means fascinating; raffgierig means grasping, acquisitive or greedy. Proposed: Acquisitive.

**Independent validation:**
raffgierig combines raffen + gierig → grasping, greedy. Spellbinding means enthralling — opposite evaluative direction. LV mantrausīgs confirms greedy sense. Luna Acquisitive is accurate but formal; Grasping is more direct for B2.

**Status:** `FIX`

**Validated severity:** CRITICAL

**Recommended EN:**
Grasping

**Reason:**
Wrong adjective family entirely. Minimal natural replacement.

---

## CRITICAL #05 — `b2-Hahnenkamm-1058`

**Field/path:** `lv` (flashcard translation)

**DE:**
der Hahnenkamm — rooster's comb (fleshy crest on a rooster's head).

**LV source (etalon):**
gaiļa sekste

**Current EN:**
Cock sext

**Luna claim:**
The current expression is erroneous; Hahnenkamm means a rooster's comb. Proposed: Rooster's comb.

**Independent validation:**
Transparent compound Hahn + Kamm. EN Cock sext appears corruption from erroneous LV gaiļa sekste. Current EN is nonsensical and potentially offensive mis-parse.

**Status:** `FIX`

**Validated severity:** CRITICAL

**Recommended EN:**
Rooster's comb

**Reason:**
Not a stylistic variant — current text is broken.

---

## CRITICAL #06 — `b2-Hausrat-1073`

**Field/path:** `lv` (flashcard translation)

**DE:**
der Hausrat — household goods, domestic furnishings, household contents.

**LV source (etalon):**
iedzīve

**Current EN:**
Life

**Luna claim:**
Hausrat means household belongings or goods; life is unrelated. Proposed: Household goods.

**Independent validation:**
Hausrat is movable household property (Hausratversicherung). Leben/life is unrelated. LV iedzīve confirms household belongings sense.

**Status:** `FIX`

**Validated severity:** CRITICAL

**Recommended EN:**
Household goods

**Reason:**
Single wrong noun with no polysemy bridge.

---

## CRITICAL #07 — `b2-Herzversagen-1110`

**Field/path:** `lv` (flashcard translation)

**DE:**
das Herzversagen — heart failure (cardiac insufficiency); pump failure of the heart.

**LV source (etalon):**
sirds apstāšanās • nepietiekamība

**Current EN:**
Cardiac arrest • Insufficiency

**Luna claim:**
Herzversagen means heart failure; cardiac arrest and insufficiency are not equivalent. Proposed: Heart failure.

**Independent validation:**
Herzversagen / Herzinsuffizienz = heart cannot meet circulatory demand. Cardiac arrest (Herzstillstand) = cessation with no effective pulse — different pathology. EN copied LV cardiac arrest which misrenders DE. DE lemma is authoritative for EN learners.

**Status:** `FIX`

**Validated severity:** CRITICAL

**Recommended EN:**
Heart failure

**Reason:**
Medically misleading. LV master also errs but EN must follow DE.

---

## CRITICAL #08 — `b2-Rain-1491`

**Field/path:** `lv` (flashcard translation)

**DE:**
der Rain — agricultural field margin strip; uncultivated grass strip between fields (Feldrain/Ackerrain). NOT weather rain, NOT hedgehog.

**LV source (etalon):**
eža

**Current EN:**
Hedgehog

**Luna claim:**
German Rain is a hedge or field boundary, not a hedgehog. Proposed: Hedge.

**Independent validation:**
German der Rain is an agricultural boundary strip (Feldrain). LV eža = hedgehog — LV master error. EN Hedgehog is wrong animal. Luna Hedge is also imprecise (Hecke ≠ Rain). Valid glosses: field margin strip, field boundary strip, balk.

**Status:** `NEEDS_OWNER_REVIEW`

**Validated severity:** CRITICAL

**Recommended EN:**
Field margin strip (provisional)

**Reason:**
Owner must choose among valid agricultural EN terms. Reject Hedgehog and Luna Hedge. Provisional: Field margin strip.

**Owner decision required:**
Choose standard gloss: Field margin strip vs Balk vs Field boundary strip.

---

## CRITICAL #09 — `b2-Richtfest-1524`

**Field/path:** `lv` (flashcard translation)

**DE:**
das Richtfest — topping-out ceremony when roof timber/structure is complete.

**LV source (etalon):**
spāru svētki

**Current EN:**
Dragonfly festival

**Luna claim:**
Richtfest marks completion of a building's roof framework, not a dragonfly festival. Proposed: Topping-out ceremony.

**Independent validation:**
Richtfest = construction celebration when roof structure is set. LV spāru svētki (rafter festival) aligns. Dragonfly (Libelle) is unrelated — EN corruption.

**Status:** `FIX`

**Validated severity:** CRITICAL

**Recommended EN:**
Topping-out ceremony

**Reason:**
Replace nonsense EN with standard architectural term.

---

## CRITICAL #10 — `b2-Ringelnatter-1526`

**Field/path:** `lv` (flashcard translation)

**DE:**
die Ringelnatter — grass snake (European species).

**LV source (etalon):**
zalktis

**Current EN:**
Hungry

**Luna claim:**
Ringelnatter is the common grass snake, not hungry. Proposed: Grass snake.

**Independent validation:**
Ringelnatter = Natrix natrix. LV zalktis confirms snake/lizard animal. Hungry = hungrig — wrong lexeme and part of speech.

**Status:** `FIX`

**Validated severity:** CRITICAL

**Recommended EN:**
Grass snake

**Reason:**
Replace wrong adjective with correct animal name.

---

## Production safety verification

| Check | Result |
| --- | --- |
| `data/en/b2.js` modified | NO |
| `www/data/en/b2.js` modified | NO |
| `data/b2.js` (DE master) modified | NO |
| MD5 before/after (EN) | identical |

**Production changes: 0**
**DE READ-ONLY: PASS**

---

## Machine-readable artefacts

- `reports/en-b2-critical-owner-review.md`
- `reports/temp/en-b2-critical-owner-review.json`

**AUDIT ONLY — no production edits in this pass.**

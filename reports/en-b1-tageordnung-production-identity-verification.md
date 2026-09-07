# TAGEORDNUNG Production Identity Verification

**Date:** 2026-08-09  
**Branch:** `cursor/en-b1-tageordnung-verification-6850`  
**Scope:** READ-ONLY verification — no production changes

## Executive summary

**Final verdict: TAGEORDNUNG B1 PRODUCTION CARD DOES NOT EXIST**

B1 production has **`Tagesordnung`** (with **s**), not **`Tageordnung`**.  
`?card=Tageordnung` failure is **EXPECTED** (exact DE lemma mismatch).

HIGH #9 statement *"Tageordnung production card exists: YES"* was **INCORRECT** in markdown reports.  
Repair log JSON already recorded `tageordnungProductionCardExists: false`.

---

## B1 cards inspected: 3367/3367

Parsed `data/b1.js`, `data/en/b1.js`, `www/data/en/b1.js` via `B1_WORDS` array load.

### data/b1.js (LV–DE source)

| Query | Exact `de` lemma cards |
|-------|------------------------|
| Tageordnung | **0** |
| Tagesordnung | **1** |
| Tagung | **1** |

Textual substring counts in file:
- `Tageordnung`: **0**
- `Tagesordnung`: **2** (lemma + plural field)

**Tagesordnung card (index 2835):**

```json
{
  "de": "Tagesordnung",
  "de_article": "die",
  "de_plural": "die Tagesordnungen",
  "lv": "darba kārtība",
  "level": "B1"
}
```

No explicit `id` field on card object.

**Tagung card (index 2836):**

```json
{
  "de": "Tagung",
  "de_article": "die",
  "de_plural": "die Tagungen",
  "lv": "sēde",
  "level": "B1"
}
```

### data/en/b1.js

| Query | Exact cards |
|-------|-------------|
| Tageordnung | **0** |
| Tagesordnung | **1** |
| Tagung | **1** |

**Tagesordnung (index 2835):** EN `Agenda`  
**Tagung (index 2836):** EN `Conference / meeting` (post HIGH #9 repair)

### www/data/en/b1.js

Same counts as `data/en/b1.js` (mirror parity).

---

## Tageordnung by CEFR level

Exact `de === "Tageordnung"`: **0** at all levels  
Exact `de === "Tagesordnung"`:

| Level | Tageordnung | Tagesordnung |
|-------|-------------|--------------|
| A1 | NO | NO |
| A2 | NO | NO |
| B1 | NO | **YES** (1 card) |
| B2 | NO | NO |
| C1 | NO | NO |
| C2 | NO | NO |

**Tagesordnung project card exists: YES — B1 only** (`data/b1.js` index 2835).

---

## Tagung identity (HIGH #9 repair target)

| Field | Value |
|-------|-------|
| LV source (`data/b1.js`) | sēde |
| DE | Tagung |
| article | die |
| plural | die Tagungen |
| EN (after HIGH #9) | Conference / meeting |
| array index | 2836 |
| TAGUNG IDENTITY GATE | PASS (1 matching card) |

---

## HIGH #9 statement audit

**Statement:** `Tageordnung production card exists: YES`

**Verdict:** **INCORRECT**

### Evidence source that produced YES (markdown)

Hardcoded in report generators, not from production parse:

1. `reports/temp/apply-en-b1-high-owner-review-09-decisions.js` — `tageordnungProductionCardExists: true`
2. `reports/temp/generate-en-b1-high-repair-09-reports.js` — template text `YES`

### Correct production evidence (repair runner)

`reports/temp/en-b1-high-repair-09.js` line 44:

```javascript
const tageordnungExists = enWords.some((w) => w.de === "Tageordnung");
```

This correctly returned **false** (lemma is `Tagesordnung`).

`reports/temp/en-b1-high-repair-09-log.json` and `en-b1-high-regression-09.json` already contain:

```json
"tageordnungProductionCardExists": false
```

### Audit/report reference

- Audit card ID `b1-Tageordnung-2835` exists in audit/temp data — **AUDIT/REPORT REFERENCE EXISTS: YES**
- Production `Tageordnung` lemma — **PRODUCTION CARD EXISTS: NO**
- Related production lemma `Tagesordnung` — **exists separately** (Agenda / darba kārtība)

---

## Search behavior (`?card=`)

Simulated B1 card search (same key-matching logic as `www/ui.js`):

| Query | Result |
|-------|--------|
| `Tageordnung` | **NOT FOUND** |
| `Tagesordnung` | Tagesordnung → Agenda |
| `Tagung` | Tagung → Conference / meeting |
| `die Tagesordnung` | Tagesordnung → Agenda |
| `die Tagung` | Tagung → Conference / meeting |

**?card=Tageordnung failure: EXPECTED**

Search matches exact `de` lemma (and normalized keys). No fuzzy match between `Tageordnung` and `Tagesordnung`. This is not a search bug.

---

## Production validation

```text
data/b1.js unchanged: PASS
data/en/b1.js unchanged: PASS
www/data/en/b1.js unchanged: PASS
A1–C2 production changes: 0
Unexpected production changes: 0
```

---

## Report corrections applied

HIGH #9 markdown/JSON metadata updated:

- `Tageordnung B1 production card exists: NO`
- `Tagesordnung B1 production card exists: YES`
- Explanation: audit ID uses misspelled lemma `Tageordnung`; production lemma is `Tagesordnung`; HIGH #9 #43 finding was misbound to **Tagung**.

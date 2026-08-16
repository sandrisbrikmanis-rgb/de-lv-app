# DA–DE Verbs — OWNER review Group 01

Avots: [da-verbs-final-post-repair-audit.md](./da-verbs-final-post-repair-audit.md)
Findings: **1–1** (1 ieraksti)
Fails: `reports/da-verbs-owner-review-final-post-repair-group01.md`

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.
> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.
> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).

## Finding 1

**Audit ID:** DA-VERB-FPR-0001
**Verb/Card ID:** `verb-119`
**ID / path:** `verb-119.imperfektIndikativ.lv`
**DE (read-only):** er schrieb
**Severity:** LOW
**Category:** GRAMMAR
**Field:** `imperfektIndikativ.lv`
**Production file:** `data/da/verbs.js`
**CURRENT_DA:** Skrev han
**PROPOSED_DA:** Han skrev
**Problēma:** Inverted word order inconsistent with card paradigm.
**Audita pamatojums:** Praesens was repaired to Han skriver, but preterite still uses inverted Skrev han. Project convention and the other forms on this card use Han + verb.
**Avots:** GPT-5.6 Luna final post-repair audit (`reports/da-verbs-final-post-repair-audit.md`)

**OWNER_DECISION:**

---

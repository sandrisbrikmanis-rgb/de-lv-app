# EN–DE B1 SECTIONACCENT OUT-OF-SCOPE OWNER REVIEW

**Generated:** 2026-08-09T13:14:33.400Z

## Summary

| Metric | Value |
| --- | --- |
| Validated REAL issues | 26 |
| Issues reconciled | 26/26 |
| LABOT | 24 |
| ALREADY RESOLVED | 2 |
| PENDING | 0 |
| False positives excluded | 1 (b1-einerlei) |
| Repair mappings | 24/24 |
| Conflicting mappings | 0 |

## 26 vs 25 validator count

27 triage = 26 REAL + 1 FP (einerlei). Current raw 25 = 24 still-stale REAL + 1 FP. Two REAL (folge/series, griff/grip) self-healed by micro-regression explanation restore and no longer emitted.

**No longer emitted (self-healed):**
- #2 b1-folge `series` — target text restored; validator no longer flags
- #3 b1-griff `grip` — target text restored; validator no longer flags

## Validator (current production)

| Metric | Value |
| --- | --- |
| Raw B1 sectionAccent findings | 25 |
| Known false positives in raw | 1 |
| Validated real among raw | 24 |
| Unexpected | 0 |

## HIGH regression chain

**CLOSED** — these are separate pre-existing sectionAccent backlog.

## Status

SECTIONACCENT OUT-OF-SCOPE OWNER REVIEW: **COMPLETE**
SECTIONACCENT OUT-OF-SCOPE REPAIR: **READY** (not started)
EN–DE B1 FINAL DATASET: **NOT CLOSED**

## Reconciled findings

### #2 — b1-folge
- Field: sectionAccents.explanation.purple[1]
- CURRENT: series
- OWNER VERDICT: **ALREADY RESOLVED**
- VALIDATED FINAL: REPLACE or REMOVE stale accent "series"
- Note: Accent now matches target field (self-healed, e.g. micro-regression follow-up)

### #3 — b1-griff
- Field: sectionAccents.explanation.purple[0]
- CURRENT: grip
- OWNER VERDICT: **ALREADY RESOLVED**
- VALIDATED FINAL: REPLACE or REMOVE stale accent "grip"
- Note: Accent now matches target field (self-healed, e.g. micro-regression follow-up)

### #4 — b1-griff
- Field: sectionAccents.comparison[1].meaning.purple[0]
- CURRENT: Thistle
- OWNER VERDICT: **LABOT**
- OWNER FINAL: Handle
- VALIDATED FINAL: REPLACE: Thistle → Handle

### #5 — b1-herausgeben
- Field: sectionAccents.comparison[0].meaning.purple[0]
- CURRENT: Issue
- OWNER VERDICT: **LABOT**
- OWNER FINAL: Publish
- VALIDATED FINAL: REPLACE: Issue → Publish

### #6 — b1-kippen
- Field: sectionAccents.examples[1].lv.purple[0]
- CURRENT: Does
- OWNER VERDICT: **LABOT**
- OWNER FINAL: Do
- VALIDATED FINAL: REPLACE or REMOVE stale accent "Does"

### #7 — b1-lager
- Field: sectionAccents.examples[0].lv.purple[0]
- CURRENT: in stock
- OWNER VERDICT: **LABOT**
- OWNER FINAL: warehouse
- VALIDATED FINAL: REPLACE or REMOVE stale accent "in stock"

### #8 — b1-kante
- Field: sectionAccents.explanation.purple[0]
- CURRENT: facet
- OWNER VERDICT: **LABOT**
- OWNER FINAL: edge
- VALIDATED FINAL: REPLACE or REMOVE stale accent "facet"

### #9 — b1-leistung
- Field: sectionAccents.comparison[0].meaning.purple[2]
- CURRENT: power
- OWNER VERDICT: **LABOT**
- OWNER FINAL: Performance
- VALIDATED FINAL: REPLACE: power → Performance

### #10 — b1-nachdem
- Field: sectionAccents.explanation.purple[0]
- CURRENT: after when
- OWNER VERDICT: **LABOT**
- OWNER FINAL: after
- VALIDATED FINAL: REPLACE or REMOVE stale accent "after when"

### #11 — b1-nachdem
- Field: sectionAccents.important.purple[0]
- CURRENT: had eaten
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REPLACE or REMOVE stale accent "had eaten"

### #12 — b1-rüsten
- Field: sectionAccents.explanation.purple[0]
- CURRENT: Main
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REMOVE stale accent Main

### #13 — b1-saat
- Field: sectionAccents.examples[0].lv.purple[0]
- CURRENT: Volume
- OWNER VERDICT: **LABOT**
- OWNER FINAL: crop
- VALIDATED FINAL: REPLACE or REMOVE stale accent "Volume"

### #14 — b1-saat
- Field: sectionAccents.examples[2].lv.purple[0]
- CURRENT: Volume
- OWNER VERDICT: **LABOT**
- OWNER FINAL: crop
- VALIDATED FINAL: REPLACE or REMOVE stale accent "Volume"

### #15 — b1-schicht
- Field: sectionAccents.explanation.purple[0]
- CURRENT: layer
- OWNER VERDICT: **LABOT**
- OWNER FINAL: shift
- VALIDATED FINAL: REPLACE or REMOVE stale accent "layer"

### #16 — b1-schmelzen
- Field: sectionAccents.explanation.purple[0]
- CURRENT: Main
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REMOVE stale accent Main

### #17 — b1-senden
- Field: sectionAccents.explanation.purple[0]
- CURRENT: to send
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REPLACE or REMOVE stale accent "to send"

### #18 — b1-sitz
- Field: sectionAccents.explanation.purple[0]
- CURRENT: Main
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REMOVE stale accent Main

### #19 — b1-spitze
- Field: sectionAccents.comparison[0].meaning.purple[0]
- CURRENT: Tip
- OWNER VERDICT: **LABOT**
- OWNER FINAL: Peak
- VALIDATED FINAL: REPLACE: Tip → Peak

### #20 — b1-spitze
- Field: sectionAccents.comparison[0].meaning.purple[2]
- CURRENT: leadership
- OWNER VERDICT: **LABOT**
- OWNER FINAL: Peak
- VALIDATED FINAL: REPLACE: leadership → Peak

### #21 — b1-stillen
- Field: sectionAccents.explanation.purple[0]
- CURRENT: to breastfeed
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REPLACE or REMOVE stale accent "to breastfeed"

### #22 — b1-streichen
- Field: sectionAccents.explanation.purple[0]
- CURRENT: Main
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REMOVE stale accent Main

### #23 — b1-stürzen
- Field: sectionAccents.explanation.purple[0]
- CURRENT: Main
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REMOVE stale accent Main

### #24 — b1-szene
- Field: sectionAccents.explanation.purple[0]
- CURRENT: Main
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REMOVE stale accent Main

### #25 — b1-tau
- Field: sectionAccents.explanation.purple[0]
- CURRENT: Main
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REMOVE stale accent Main

### #26 — b1-wechsel
- Field: sectionAccents.explanation.purple[0]
- CURRENT: Main
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REMOVE stale accent Main

### #27 — b1-steuer
- Field: sectionAccents.explanation.purple[0]
- CURRENT: Main
- OWNER VERDICT: **LABOT**
- OWNER FINAL: __REMOVE_ACCENT__
- VALIDATED FINAL: REMOVE stale accent Main

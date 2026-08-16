# DA–DE C1 + C2 targeted regression audit (READ-ONLY)

**Date:** 2026-08-16
**Scope:** Production `data/da/c1.js` + `data/da/c2.js` vs OWNER decisions after COPY-ONLY repair (#553)
**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)
**Production changes:** 0 (audit only)
**DE:** STRICT READ-ONLY

## Summary

### Combined

| Metric | Value |
|--------|-------|
| Changed cards audited | **42** |
| Changed fields audited | **48** |
| CRITICAL | **0** |
| HIGH | **0** |
| MEDIUM | **0** |
| LOW | **0** |
| FALSE_POSITIVE (context-validated) | **0** |
| LV remnants | **0** |
| EN remnants | **0** |
| Other foreign remnants | **0** |
| Placeholders/corruption | **0** |
| Zero-width artifacts | **0** |
| Stale sectionAccents | **0** |
| DE changes | **0** |
| Unexpected production changes | **0** |

### C1

| Metric | Value |
|--------|-------|
| OWNER findings loaded | **45** |
| Unique (Card ID, Field) | **43** |
| EXACT_MATCH | **43** |
| MISMATCH | **0** |
| MISSING_CARD | **0** |
| MISSING_FIELD | **0** |
| Changed cards audited | **37** |
| Changed fields audited | **43** |
| Syntax | **PASS** |
| ID/order | **PASS** |
| Structure (572 cards / 15 studies) | **PASS** |
| Mirror data↔www | **PASS** |
| Parity (--lang=da, C1) | **PASS** |

### C2

| Metric | Value |
|--------|-------|
| OWNER findings loaded | **5** |
| Unique (Card ID, Field) | **5** |
| EXACT_MATCH | **5** |
| MISMATCH | **0** |
| MISSING_CARD | **0** |
| MISSING_FIELD | **0** |
| Changed cards audited | **5** |
| Changed fields audited | **5** |
| Syntax | **PASS** |
| ID/order | **PASS** |
| Structure (219 cards / 1 study) | **PASS** |
| Mirror data↔www | **PASS** |
| Parity (--lang=da, C2) | **PASS** |

### Verdict

**DA–DE C1 + C2 TARGETED REGRESSION AUDIT — PASS**

## OWNER exact-match regression

C1: **43/43** EXACT_MATCH (45 findings loaded, deduplicated duplicate Card ID/Field pairs 12/13 and 20/21).
C2: **5/5** EXACT_MATCH (5 findings loaded).

Truncated zero-width-only OWNER rows (e.g. `c1-wahl` / `study.explanation`) validated against resolved expected value (zero-width strip from pre-repair baseline).

## Study repairs validated

- `c1-wahl` — zero-width cleanup in explanation; semantics preserved
- `c1-gelegentlich` — 4 comparison examples; DE left side preserved; DA right side Danish
- `c1-wahlberechtigt` — 3 comparison examples; DE left side preserved; DA right side Danish
- `c1-voraussetzen` — `study.explanation[1]` zero-width cleanup

## Changed cards in scope

### C1

- `c1-wahl` (de: Wahl) — 1 leaf diff(s)
- `c1-Abgeordnete-197` (de: Abgeordnete) — 1 leaf diff(s)
- `c1-beanspruchen-208` (de: beanspruchen) — 1 leaf diff(s)
- `c1-bedingungslos-210` (de: bedingungslos) — 1 leaf diff(s)
- `c1-beklagen-217` (de: beklagen) — 1 leaf diff(s)
- `c1-benachteiligen-220` (de: benachteiligen) — 1 leaf diff(s)
- `c1-Berufung-227` (de: Berufung) — 1 leaf diff(s)
- `c1-Beschaffenheit-229` (de: Beschaffenheit) — 1 leaf diff(s)
- `c1-Bescheinigung-231` (de: Bescheinigung) — 1 leaf diff(s)
- `c1-beschlagnahmen-232` (de: beschlagnahmen) — 1 leaf diff(s)
- `c1-beträchtlich-235` (de: beträchtlich) — 1 leaf diff(s)
- `c1-bewerben, sich-242` (de: bewerben, sich) — 1 leaf diff(s)
- `c1-dauerhaft-255` (de: dauerhaft) — 1 leaf diff(s)
- `c1-dazwischenkommen-256` (de: dazwischenkommen) — 1 leaf diff(s)
- `c1-ehrenhaft-277` (de: ehrenhaft) — 1 leaf diff(s)
- `c1-Einlage-282` (de: Einlage) — 1 leaf diff(s)
- `c1-einreden-283` (de: einreden) — 1 leaf diff(s)
- `c1-Einverständnis-288` (de: Einverständnis) — 1 leaf diff(s)
- `c1-entschlossen-300` (de: entschlossen) — 1 leaf diff(s)
- `c1-festgesetzt-309` (de: festgesetzt) — 1 leaf diff(s)
- `c1-gelegentlich` (de: gelegentlich) — 5 leaf diff(s)
- `c1-geringschätzig-354` (de: geringschätzig) — 1 leaf diff(s)
- `c1-gewissermaßen-369` (de: gewissermaßen) — 1 leaf diff(s)
- `c1-herunterkommen-390` (de: herunterkommen) — 1 leaf diff(s)
- `c1-Kaution-404` (de: Kaution) — 1 leaf diff(s)
- `c1-Liebeserklärung-419` (de: Liebeserklärung) — 1 leaf diff(s)
- `c1-Nachschlagewerk-430` (de: Nachschlagewerk) — 1 leaf diff(s)
- `c1-Oppositionsführer-435` (de: Oppositionsführer) — 1 leaf diff(s)
- `c1-Spitzenleistung-479` (de: Spitzenleistung) — 1 leaf diff(s)
- `c1-Überschuss-493` (de: Überschuss) — 1 leaf diff(s)
- `c1-veranschlagen-502` (de: veranschlagen) — 1 leaf diff(s)
- `c1-verdrießlich-503` (de: verdrießlich) — 1 leaf diff(s)
- `c1-Vergünstigung-508` (de: Vergünstigung) — 1 leaf diff(s)
- `c1-verschlossen-522` (de: verschlossen) — 1 leaf diff(s)
- `c1-Vollversammlung-538` (de: Vollversammlung) — 1 leaf diff(s)
- `c1-wahlberechtigt` (de: wahlberechtigt) — 3 leaf diff(s)
- `c1-voraussetzen` (de: voraussetzen) — 1 leaf diff(s)

### C2

- `c2-Berichterstatter-86` (de: Berichterstatter) — 1 leaf diff(s)
- `c2-durchkreuzen-103` (de: durchkreuzen) — 1 leaf diff(s)
- `c2-Entschlossenheit-113` (de: Entschlossenheit) — 1 leaf diff(s)
- `c2-Errungenschaft-117` (de: Errungenschaft) — 1 leaf diff(s)
- `c2-Leistungsfähigkeit-173` (de: Leistungsfähigkeit) — 1 leaf diff(s)

## Findings

_No CRITICAL/HIGH/MEDIUM findings in targeted scope._

## Next step

Repair scope closed. No further OWNER/COPY-ONLY cycle required for this regression gate.
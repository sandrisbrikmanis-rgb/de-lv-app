# DA–DE B2 targeted regression audit (READ-ONLY)

**Date:** 2026-08-16
**Scope:** Production `data/da/b2.js` vs all OWNER decisions (`da-b2-owner-decisions-01..08.md`) after COPY-ONLY repair
**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)
**Production changes:** 0 (audit only)

## Summary

| Metric | Value |
|--------|-------|
| OWNER mappings loaded | **344** |
| Unique (Card ID, Field) | **344** |
| EXACT_MATCH | **344** |
| MISMATCH | **0** |
| MISSING_CARD | **0** |
| MISSING_FIELD | **0** |
| Changed cards audited | **334** |
| Changed fields audited | **344** |
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
| Syntax | **PASS** |
| ID/order | **PASS** |
| Structure (cards/studies) | **PASS** |
| Mirror data↔www | **PASS** |
| Parity (--lang=da, B2) | **PASS** |

### Verdict

**DA–DE B2 TARGETED REGRESSION AUDIT — PASS**

## OWNER exact-match regression

All **344** deduplicated OWNER LABOT rows checked against production.
100% EXACT_MATCH.

## Changed cards in scope

- `b2-abbringen-36` (de: abbringen) — 1 leaf diff(s)
- `b2-abfällig-41` (de: abfällig) — 1 leaf diff(s)
- `b2-abfertigen-42` (de: abfertigen) — 1 leaf diff(s)
- `b2-ableiten-50` (de: ableiten) — 1 leaf diff(s)
- `b2-Abnutzung-52` (de: Abnutzung) — 1 leaf diff(s)
- `b2-abschlagen-59` (de: abschlagen) — 1 leaf diff(s)
- `b2-absondern-63` (de: absondern) — 1 leaf diff(s)
- `b2-abtragen-71` (de: abtragen) — 1 leaf diff(s)
- `b2-abtreten-72` (de: abtreten) — 1 leaf diff(s)
- `b2-Anmut-85` (de: Anmut) — 1 leaf diff(s)
- `b2-Äußerung-104` (de: Äußerung) — 1 leaf diff(s)
- `b2-aussetzen-105` (de: aussetzen) — 1 leaf diff(s)
- `b2-ausspannen-107` (de: ausspannen) — 1 leaf diff(s)
- `b2-ausstopfen-110` (de: ausstopfen) — 1 leaf diff(s)
- `b2-ausströmen-111` (de: ausströmen) — 1 leaf diff(s)
- `b2-austragen-112` (de: austragen) — 1 leaf diff(s)
- `b2-austreten-114` (de: austreten) — 1 leaf diff(s)
- `b2-ausweisen-117` (de: ausweisen) — 1 leaf diff(s)
- `b2-auszeichnen-120` (de: auszeichnen) — 1 leaf diff(s)
- `b2-Auszeichnung-121` (de: Auszeichnung) — 1 leaf diff(s)
- `b2-Beförderung-150` (de: Beförderung) — 1 leaf diff(s)
- `b2-begehren-152` (de: begehren) — 1 leaf diff(s)
- `b2-begünstigen-156` (de: begünstigen) — 1 leaf diff(s)
- `b2-beiläufig-162` (de: beiläufig) — 1 leaf diff(s)
- `b2-beispiellos-163` (de: beispiellos) — 1 leaf diff(s)
- `b2-belästigen-177` (de: belästigen) — 1 leaf diff(s)
- `b2-beleibt-181` (de: beleibt) — 1 leaf diff(s)
- `b2-Belieben-183` (de: Belieben) — 1 leaf diff(s)
- `b2-Benennung-186` (de: Benennung) — 1 leaf diff(s)
- `b2-bergen-192` (de: bergen) — 1 leaf diff(s)
- `b2-bersten-195` (de: bersten) — 1 leaf diff(s)
- `b2-besänftigen-199` (de: besänftigen) — 1 leaf diff(s)
- `b2-Besatzung-200` (de: Besatzung) — 1 leaf diff(s)
- `b2-beschimpfen-203` (de: beschimpfen) — 1 leaf diff(s)
- `b2-Beschützer-205` (de: Beschützer) — 1 leaf diff(s)
- `b2-beschwören-206` (de: beschwören) — 1 leaf diff(s)
- `b2-besessen-207` (de: besessen) — 1 leaf diff(s)
- `b2-Bestand-211` (de: Bestand) — 1 leaf diff(s)
- `b2-bestärken-213` (de: bestärken) — 1 leaf diff(s)
- `b2-bestreiten-217` (de: bestreiten) — 1 leaf diff(s)
- `b2-bestürzt-218` (de: bestürzt) — 1 leaf diff(s)
- `b2-Betäubung-220` (de: Betäubung) — 1 leaf diff(s)
- `b2-Betrug-225` (de: Betrug) — 1 leaf diff(s)
- `b2-Beute-227` (de: Beute) — 1 leaf diff(s)
- `b2-bewähren-229` (de: bewähren) — 1 leaf diff(s)
- `b2-bewährt-230` (de: bewährt) — 1 leaf diff(s)
- `b2-Bewerbung-234` (de: Bewerbung) — 1 leaf diff(s)
- `b2-bewilligen-235` (de: bewilligen) — 1 leaf diff(s)
- `b2-Bezug-239` (de: Bezug) — 1 leaf diff(s)
- `b2-bezwingen-241` (de: bezwingen) — 1 leaf diff(s)
- `b2-bisweilen-244` (de: bisweilen) — 1 leaf diff(s)
- `b2-bildlich-246` (de: bildlich) — 1 leaf diff(s)
- `b2-Bildnis-247` (de: Bildnis) — 1 leaf diff(s)
- `b2-Bindung-249` (de: Bindung) — 1 leaf diff(s)
- `b2-blähen-258` (de: blähen) — 1 leaf diff(s)
- `b2-bleichen-263` (de: bleichen) — 1 leaf diff(s)
- `b2-blenden-264` (de: blenden) — 1 leaf diff(s)
- `b2-blödsinnig-271` (de: blödsinnig) — 1 leaf diff(s)
- `b2-Blutalkohol-275` (de: Blutalkohol) — 1 leaf diff(s)
- `b2-Bodensatz-280` (de: Bodensatz) — 1 leaf diff(s)
- `b2-Böschung-289` (de: Böschung) — 1 leaf diff(s)
- `b2-Bote-290` (de: Bote) — 1 leaf diff(s)
- `b2-Buckel-310` (de: Buckel) — 1 leaf diff(s)
- `b2-Bügel-311` (de: Bügel) — 1 leaf diff(s)
- `b2-bürgerlich-321` (de: bürgerlich) — 1 leaf diff(s)
- `b2-Damm-340` (de: Damm) — 1 leaf diff(s)
- `b2-dämmern-341` (de: dämmern) — 1 leaf diff(s)
- `b2-Dämmerung-342` (de: Dämmerung) — 1 leaf diff(s)
- `b2-dämpfen-344` (de: dämpfen) — 1 leaf diff(s)
- `b2-Darstellung-353` (de: Darstellung) — 1 leaf diff(s)
- `b2-Defizit-365` (de: Defizit) — 1 leaf diff(s)
- `b2-dehnbar-366` (de: dehnbar) — 1 leaf diff(s)
- `b2-dehnen-367` (de: dehnen) — 1 leaf diff(s)
- `b2-denkbar-377` (de: denkbar) — 1 leaf diff(s)
- `b2-deplaziert-378` (de: deplaziert) — 1 leaf diff(s)
- `b2-derartig-380` (de: derartig) — 1 leaf diff(s)
- `b2-deuten-382` (de: deuten) — 1 leaf diff(s)
- `b2-Deutung-383` (de: Deutung) — 1 leaf diff(s)
- `b2-Diele-398` (de: Diele) — 1 leaf diff(s)
- `b2-donnern-413` (de: donnern) — 1 leaf diff(s)

_… and 254 more changed cards._

## Findings

_No CRITICAL/HIGH/MEDIUM findings in targeted scope._

## Next step

Repair scope closed. No further OWNER/COPY-ONLY cycle required for this regression gate.
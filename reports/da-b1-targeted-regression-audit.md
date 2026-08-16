# DA–DE B1 targeted regression audit (READ-ONLY)

**Date:** 2026-08-16
**Scope:** Only cards/fields changed vs `origin/main` during OWNER repair (comparison + sectionAccents + misc)
**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)
**Production changes:** 0 (audit only)

## Summary

| Metric | Value |
|--------|-------|
| Changed cards (vs main) | **314** |
| OWNER apply rows (LABOT) | **1571** |
| DE changes | **0** |
| Study count | **324/324** |
| Mirror data↔www | **PASS** |
| Parity (--lang=da, B1) | **PASS** |
| CRITICAL | **0** |
| HIGH | **0** |
| MEDIUM | **0** |
| LOW (sectionAccent stale residual) | **11** |

### Verdict

**DA–DE B1: REPAIR SCOPE CLOSED** (targeted regression PASS; 11 sectionAccent stale LOW residual)

## Changed cards in scope

- `b1-anbauen` (de: anbauen) — 4 leaf diff(s)
- `b1-angeben` (de: angeben) — 3 leaf diff(s)
- `b1-anbringen` (de: anbringen) — 5 leaf diff(s)
- `b1-abbauen` (de: abbauen) — 6 leaf diff(s)
- `b1-abbrechen` (de: abbrechen) — 3 leaf diff(s)
- `b1-abdecken` (de: abdecken) — 3 leaf diff(s)
- `b1-abgehen` (de: abgehen) — 3 leaf diff(s)
- `b1-ablegen` (de: ablegen) — 2 leaf diff(s)
- `b1-abnehmen` (de: abnehmen) — 3 leaf diff(s)
- `b1-absatz` (de: Absatz) — 4 leaf diff(s)
- `b1-abschluss` (de: Abschluss) — 3 leaf diff(s)
- `b1-abschnitt` (de: Abschnitt) — 3 leaf diff(s)
- `b1-absetzen` (de: absetzen) — 1 leaf diff(s)
- `b1-anlage` (de: Anlage) — 3 leaf diff(s)
- `b1-anschlag` (de: Anschlag) — 3 leaf diff(s)
- `b1-anschluss` (de: Anschluss) — 3 leaf diff(s)
- `b1-ansehen` (de: Ansehen) — 2 leaf diff(s)
- `b1-antrag` (de: Antrag) — 3 leaf diff(s)
- `b1-auftrag` (de: Auftrag) — 2 leaf diff(s)
- `b1-aufwand` (de: Aufwand) — 2 leaf diff(s)
- `b1-aufführen` (de: aufführen) — 3 leaf diff(s)
- `b1-sich-aufhalten` (de: sich aufhalten) — 5 leaf diff(s)
- `b1-aussicht` (de: Aussicht) — 3 leaf diff(s)
- `b1-aussprache` (de: Aussprache) — 3 leaf diff(s)
- `b1-ausstellen` (de: ausstellen) — 3 leaf diff(s)
- `b1-ausüben` (de: ausüben) — 3 leaf diff(s)
- `b1-auszug` (de: Auszug) — 5 leaf diff(s)
- `b1-bau` (de: Bau) — 6 leaf diff(s)
- `b1-Baumwipfel-250` (de: Baumwipfel) — 1 leaf diff(s)
- `b1-becken` (de: Becken) — 7 leaf diff(s)
- `b1-bedeutend` (de: bedeutend) — 6 leaf diff(s)
- `b1-sich-bedienen` (de: sich bedienen) — 4 leaf diff(s)
- `b1-behandeln` (de: behandeln) — 8 leaf diff(s)
- `b1-belegen` (de: belegen) — 4 leaf diff(s)
- `b1-bemerken` (de: bemerken) — 6 leaf diff(s)
- `b1-sich-bemühen` (de: sich bemühen) — 3 leaf diff(s)
- `b1-beraten` (de: beraten) — 6 leaf diff(s)
- `b1-bereich` (de: Bereich) — 2 leaf diff(s)
- `b1-berichten` (de: berichten) — 5 leaf diff(s)
- `b1-sich-beruhigen` (de: sich beruhigen) — 4 leaf diff(s)
- `b1-berühmtheit` (de: Berühmtheit) — 4 leaf diff(s)
- `b1-beschließen` (de: beschließen) — 5 leaf diff(s)
- `b1-beschwerde` (de: Beschwerde) — 5 leaf diff(s)
- `b1-besorgen` (de: besorgen) — 5 leaf diff(s)
- `b1-bestehen` (de: bestehen) — 9 leaf diff(s)
- `b1-bestimmen` (de: bestimmen) — 4 leaf diff(s)
- `b1-betrieb` (de: Betrieb) — 4 leaf diff(s)
- `b1-bewegen` (de: bewegen) — 1 leaf diff(s)
- `b1-beziehen` (de: beziehen) — 6 leaf diff(s)
- `b1-bildschirm` (de: Bildschirm) — 1 leaf diff(s)
- `b1-bieten` (de: bieten) — 3 leaf diff(s)
- `b1-blase` (de: Blase) — 4 leaf diff(s)
- `b1-block` (de: Block) — 4 leaf diff(s)
- `b1-bloß` (de: bloß) — 4 leaf diff(s)
- `b1-bogen` (de: Bogen) — 1 leaf diff(s)
- `b1-botschaft` (de: Botschaft) — 3 leaf diff(s)
- `b1-brand` (de: Brand) — 3 leaf diff(s)
- `b1-bund` (de: Bund) — 6 leaf diff(s)
- `b1-dadurch` (de: dadurch) — 3 leaf diff(s)
- `b1-dagegen` (de: dagegen) — 1 leaf diff(s)
- `b1-daher` (de: daher) — 3 leaf diff(s)
- `b1-dahin` (de: dahin) — 3 leaf diff(s)
- `b1-dank-study` (de: Dank) — 7 leaf diff(s)
- `b1-daran` (de: daran) — 2 leaf diff(s)
- `b1-darstellen` (de: darstellen) — 4 leaf diff(s)
- `b1-darunter` (de: darunter) — 2 leaf diff(s)
- `b1-decken` (de: decken) — 3 leaf diff(s)
- `b1-dienen` (de: dienen) — 2 leaf diff(s)
- `b1-druck` (de: Druck) — 3 leaf diff(s)
- `b1-durchfall` (de: Durchfall) — 2 leaf diff(s)
- `b1-durchführen` (de: durchführen) — 3 leaf diff(s)
- `b1-eher` (de: eher) — 5 leaf diff(s)
- `b1-eigen` (de: eigen) — 1 leaf diff(s)
- `b1-einbrechen` (de: einbrechen) — 3 leaf diff(s)
- `b1-eindeutig` (de: eindeutig) — 1 leaf diff(s)
- `b1-eindruck` (de: Eindruck) — 3 leaf diff(s)
- `b1-einerlei` (de: einerlei) — 2 leaf diff(s)
- `b1-einerseits` (de: einerseits) — 2 leaf diff(s)
- `b1-einfahrt` (de: Einfahrt) — 6 leaf diff(s)
- `b1-einfallen` (de: einfallen) — 1 leaf diff(s)
- `b1-einfarbig` (de: einfarbig) — 4 leaf diff(s)
- `b1-einfluss` (de: Einfluss) — 5 leaf diff(s)
- `b1-einfügen` (de: einfügen) — 2 leaf diff(s)
- `b1-einführen` (de: einführen) — 7 leaf diff(s)
- `b1-einführung` (de: Einführung) — 7 leaf diff(s)
- `b1-sich-eingewöhnen` (de: sich eingewöhnen) — 6 leaf diff(s)
- `b1-einhalten` (de: einhalten) — 3 leaf diff(s)
- `b1-einheimisch` (de: einheimisch) — 6 leaf diff(s)
- `b1-einheit` (de: Einheit) — 6 leaf diff(s)
- `b1-längeneinheit` (de: Längeneinheit) — 6 leaf diff(s)
- `b1-einheitlich` (de: einheitlich) — 2 leaf diff(s)
- `b1-einholen` (de: einholen) — 5 leaf diff(s)
- `b1-einsatz` (de: Einsatz) — 6 leaf diff(s)
- `b1-einsetzen` (de: einsetzen) — 3 leaf diff(s)
- `b1-einstellen` (de: einstellen) — 5 leaf diff(s)
- `b1-eintreten` (de: eintreten) — 5 leaf diff(s)
- `b1-einziehen` (de: einziehen) — 6 leaf diff(s)
- `b1-empfangen` (de: empfangen) — 3 leaf diff(s)
- `b1-entfernen` (de: entfernen) — 5 leaf diff(s)
- `b1-enthalten` (de: enthalten) — 6 leaf diff(s)

_… and 214 more changed cards._

## Findings

### DA-B1-REG-0001 [LOW]

- **Card:** b1-absetzen
- **Field:** sectionAccents.examples[2].lv
- **Problem:** sectionAccent target not in Study text: "minister"

### DA-B1-REG-0002 [LOW]

- **Card:** b1-bestehen
- **Field:** sectionAccents.examples[0].lv
- **Problem:** sectionAccent target not in Study text: "problem"

### DA-B1-REG-0003 [LOW]

- **Card:** b1-dienen
- **Field:** sectionAccents.important
- **Problem:** sectionAccent target not in Study text: "dienen"

### DA-B1-REG-0004 [LOW]

- **Card:** b1-einführen
- **Field:** sectionAccents.comparison[1].meaning
- **Problem:** sectionAccent target not in Study text: "import"

### DA-B1-REG-0005 [LOW]

- **Card:** b1-einhalten
- **Field:** sectionAccents.comparison[2].meaning
- **Problem:** sectionAccent target not in Study text: "Hold"

### DA-B1-REG-0006 [LOW]

- **Card:** b1-festhalten
- **Field:** sectionAccents.comparison[1].meaning
- **Problem:** sectionAccent target not in Study text: "Hold"

### DA-B1-REG-0007 [LOW]

- **Card:** b1-hupe
- **Field:** sectionAccents.explanation
- **Problem:** sectionAccent target not in Study text: "horn"

### DA-B1-REG-0008 [LOW]

- **Card:** b1-hupe
- **Field:** sectionAccents.examples[1].lv
- **Problem:** sectionAccent target not in Study text: "horn"

### DA-B1-REG-0009 [LOW]

- **Card:** b1-kante
- **Field:** sectionAccents.explanation
- **Problem:** sectionAccent target not in Study text: "facet"

### DA-B1-REG-0010 [LOW]

- **Card:** b1-senden
- **Field:** sectionAccents.examples[0].lv
- **Problem:** sectionAccent target not in Study text: "send"

### DA-B1-REG-0011 [LOW]

- **Card:** b1-übergeben
- **Field:** sectionAccents.examples[0].lv
- **Problem:** sectionAccent target not in Study text: "give"

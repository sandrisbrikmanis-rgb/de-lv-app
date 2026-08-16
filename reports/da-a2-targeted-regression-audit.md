# DA–DE A2 targeted regression audit (READ-ONLY)

**Date:** 2026-08-16
**Scope:** Only cards/fields changed vs `origin/main` during OWNER repair (comparison + sectionAccents + misc)
**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)
**Production changes:** 0 (audit only)

## Summary

| Metric | Value |
|--------|-------|
| Changed cards (vs main) | **187** |
| OWNER apply rows (LABOT) | **1395** |
| DE changes | **0** |
| Study count | **231/231** |
| Mirror data↔www | **PASS** |
| Parity (--lang=da) | **PASS** |
| CRITICAL | **0** |
| HIGH | **0** |
| MEDIUM | **0** |
| LOW (sectionAccent stale residual) | **29** |

### Verdict

**DA–DE A2: FINAL CLOSED** (targeted regression PASS; 29 sectionAccent stale LOW residual)

## Changed cards in scope

- `a2-abfahren` (de: abfahren) — 21 leaf diff(s)
- `a2-abgeben` (de: abgeben) — 10 leaf diff(s)
- `a2-abgemacht-6` (de: abgemacht) — 1 leaf diff(s)
- `a2-holen` (de: holen) — 1 leaf diff(s)
- `a2-bringen` (de: bringen) — 2 leaf diff(s)
- `a2-absagen` (de: absagen) — 13 leaf diff(s)
- `a2-abschließen` (de: abschließen) — 13 leaf diff(s)
- `a2-abstellen` (de: abstellen) — 19 leaf diff(s)
- `a2-angewandt` (de: angewandt) — 10 leaf diff(s)
- `a2-angreifen` (de: angreifen) — 8 leaf diff(s)
- `a2-anhänger` (de: Anhänger) — 7 leaf diff(s)
- `a2-anheizen` (de: anheizen) — 6 leaf diff(s)
- `a2-anlegen` (de: anlegen) — 8 leaf diff(s)
- `a2-anmelden` (de: anmelden) — 12 leaf diff(s)
- `a2-anstecken` (de: anstecken) — 13 leaf diff(s)
- `a2-anstellen` (de: anstellen) — 14 leaf diff(s)
- `a2-art` (de: Art) — 6 leaf diff(s)
- `a2-artikel` (de: Artikel) — 11 leaf diff(s)
- `a2-aufheben` (de: aufheben) — 13 leaf diff(s)
- `a2-auflage` (de: Auflage) — 6 leaf diff(s)
- `a2-aufnahme` (de: Aufnahme) — 8 leaf diff(s)
- `a2-aufnehmen` (de: aufnehmen) — 12 leaf diff(s)
- `a2-aufrichtig` (de: aufrichtig) — 11 leaf diff(s)
- `a2-aufrufen` (de: aufrufen) — 6 leaf diff(s)
- `a2-auftragen` (de: auftragen) — 18 leaf diff(s)
- `a2-auftreten` (de: auftreten) — 13 leaf diff(s)
- `a2-aufwenden` (de: aufwenden) — 7 leaf diff(s)
- `a2-aufzeichnen` (de: aufzeichnen) — 6 leaf diff(s)
- `a2-aussteigen` (de: aussteigen) — 12 leaf diff(s)
- `a2-auswählen` (de: auswählen) — 16 leaf diff(s)
- `a2-ausziehen` (de: ausziehen) — 7 leaf diff(s)
- `a2-bahn` (de: Bahn) — 8 leaf diff(s)
- `a2-band` (de: Band) — 10 leaf diff(s)
- `a2-bank` (de: Bank) — 16 leaf diff(s)
- `a2-bauen` (de: bauen) — 13 leaf diff(s)
- `a2-bauer` (de: Bauer) — 8 leaf diff(s)
- `a2-bedienen` (de: bedienen) — 8 leaf diff(s)
- `a2-bedienung` (de: Bedienung) — 5 leaf diff(s)
- `a2-behalten` (de: behalten) — 8 leaf diff(s)
- `a2-beinahe` (de: beinahe) — 9 leaf diff(s)
- `a2-beißen-223` (de: beißen) — 1 leaf diff(s)
- `a2-bekannt` (de: bekannt) — 15 leaf diff(s)
- `a2-beliebt-227` (de: beliebt) — 1 leaf diff(s)
- `a2-besonders-240` (de: besonders) — 1 leaf diff(s)
- `a2-bestellen` (de: bestellen) — 8 leaf diff(s)
- `a2-bestimmt` (de: bestimmt) — 7 leaf diff(s)
- `a2-birne` (de: Birne) — 8 leaf diff(s)
- `a2-bitte-study` (de: Bitte) — 1 leaf diff(s)
- `a2-bitter` (de: bitter) — 13 leaf diff(s)
- `a2-boden` (de: Boden) — 14 leaf diff(s)
- `a2-borgen` (de: borgen) — 9 leaf diff(s)
- `a2-böse` (de: böse) — 4 leaf diff(s)
- `a2-brav` (de: brav) — 6 leaf diff(s)
- `a2-brennen` (de: brennen) — 2 leaf diff(s)
- `a2-Briefkasten-290` (de: Briefkasten) — 1 leaf diff(s)
- `a2-Chance-306` (de: Chance) — 1 leaf diff(s)
- `a2-dabei` (de: dabei) — 17 leaf diff(s)
- `a2-dafür` (de: dafür) — 13 leaf diff(s)
- `a2-damit` (de: damit) — 11 leaf diff(s)
- `study-der-dank` (de: Dank) — 7 leaf diff(s)
- `a2-darauf` (de: darauf) — 9 leaf diff(s)
- `a2-darüber` (de: darüber) — 15 leaf diff(s)
- `a2-darum` (de: darum) — 13 leaf diff(s)
- `a2-davor` (de: davor) — 5 leaf diff(s)
- `a2-dazu` (de: dazu) — 4 leaf diff(s)
- `a2-decke` (de: Decke) — 4 leaf diff(s)
- `a2-denn` (de: denn) — 3 leaf diff(s)
- `a2-deutlich-340` (de: deutlich) — 1 leaf diff(s)
- `a2-dick` (de: dick) — 4 leaf diff(s)
- `a2-doch` (de: doch) — 15 leaf diff(s)
- `a2-doktor` (de: Doktor) — 4 leaf diff(s)
- `a2-doppelt-349` (de: doppelt) — 1 leaf diff(s)
- `a2-dünn` (de: dünn) — 5 leaf diff(s)
- `a2-eben` (de: eben) — 12 leaf diff(s)
- `a2-ehrlich` (de: ehrlich) — 3 leaf diff(s)
- `a2-eigentlich` (de: eigentlich) — 3 leaf diff(s)
- `a2-einladen` (de: einladen) — 20 leaf diff(s)
- `a2-einschalten` (de: einschalten) — 13 leaf diff(s)
- `a2-einschlafen` (de: einschlafen) — 4 leaf diff(s)
- `a2-einsteigen` (de: einsteigen) — 12 leaf diff(s)
- `a2-eintritt` (de: Eintritt) — 2 leaf diff(s)
- `a2-erinnern` (de: erinnern) — 2 leaf diff(s)
- `a2-etwa` (de: etwa) — 4 leaf diff(s)
- `a2-fach` (de: Fach) — 15 leaf diff(s)
- `a2-fall` (de: Fall) — 10 leaf diff(s)
- `a2-fehlen` (de: fehlen) — 3 leaf diff(s)
- `a2-fest` (de: fest) — 10 leaf diff(s)
- `a2-feuer` (de: Feuer) — 11 leaf diff(s)
- `a2-folgen` (de: folgen) — 3 leaf diff(s)
- `a2-führen` (de: führen) — 20 leaf diff(s)
- `a2-gang` (de: Gang) — 5 leaf diff(s)
- `a2-Gegend-568` (de: Gegend) — 1 leaf diff(s)
- `a2-Gegenstand-569` (de: Gegenstand) — 1 leaf diff(s)
- `a2-gegenüber` (de: gegenüber) — 1 leaf diff(s)
- `a2-gehören` (de: gehören) — 3 leaf diff(s)
- `a2-gemütlich-575` (de: gemütlich) — 1 leaf diff(s)
- `a2-genau` (de: genau) — 7 leaf diff(s)
- `a2-gerade` (de: gerade) — 2 leaf diff(s)
- `a2-geschäft` (de: Geschäft) — 8 leaf diff(s)
- `a2-gewinnen` (de: gewinnen) — 3 leaf diff(s)
- `a2-gießen` (de: gießen) — 4 leaf diff(s)
- `a2-grund` (de: Grund) — 16 leaf diff(s)
- `a2-hängen` (de: hängen) — 5 leaf diff(s)
- `a2-holz` (de: Holz) — 11 leaf diff(s)
- `a2-indem` (de: indem) — 6 leaf diff(s)
- `a2-kamm` (de: Kamm) — 1 leaf diff(s)
- `a2-kaum` (de: kaum) — 3 leaf diff(s)
- `a2-wissen` (de: wissen) — 1 leaf diff(s)
- `a2-klar` (de: klar) — 10 leaf diff(s)
- `a2-kleben` (de: kleben) — 12 leaf diff(s)
- `a2-kleiden` (de: kleiden) — 14 leaf diff(s)
- `a2-körper` (de: Körper) — 11 leaf diff(s)
- `a2-kraft` (de: Kraft) — 11 leaf diff(s)
- `a2-kurz` (de: kurz) — 5 leaf diff(s)
- `a2-lage` (de: Lage) — 4 leaf diff(s)
- `a2-leiden` (de: leiden) — 4 leaf diff(s)
- `a2-leihen` (de: leihen) — 9 leaf diff(s)
- `a2-leiter` (de: Leiter) — 3 leaf diff(s)
- `a2-leitung` (de: Leitung) — 11 leaf diff(s)
- `a2-liegen` (de: liegen) — 1 leaf diff(s)
- `a2-los` (de: los) — 1 leaf diff(s)
- `a2-meinen` (de: meinen) — 8 leaf diff(s)
- `a2-merken` (de: merken) — 4 leaf diff(s)
- `a2-mittel` (de: Mittel) — 4 leaf diff(s)
- `a2-nebeneinander-1000` (de: nebeneinander) — 1 leaf diff(s)
- `a2-note` (de: Note) — 9 leaf diff(s)
- `a2-nutzen` (de: nutzen) — 2 leaf diff(s)
- `a2-offen` (de: offen) — 4 leaf diff(s)
- `a2-passieren` (de: passieren) — 1 leaf diff(s)
- `a2-patient` (de: Patient) — 2 leaf diff(s)
- `a2-personal` (de: Personal) — 3 leaf diff(s)
- `a2-pflaster` (de: Pflaster) — 9 leaf diff(s)
- `a2-Reich-1143` (de: Reich) — 1 leaf diff(s)
- `a2-Rest-1160` (de: Rest) — 1 leaf diff(s)
- `a2-riechen` (de: riechen) — 1 leaf diff(s)
- `a2-rolle` (de: Rolle) — 12 leaf diff(s)
- `a2-sammeln` (de: sammeln) — 4 leaf diff(s)
- `a2-satz` (de: Satz) — 10 leaf diff(s)
- `a2-schalten` (de: schalten) — 1 leaf diff(s)
- `a2-scheinen` (de: scheinen) — 9 leaf diff(s)
- `a2-Schild-1224` (de: Schild) — 1 leaf diff(s)
- `a2-schlange` (de: Schlange) — 11 leaf diff(s)
- `a2-schließen` (de: schließen) — 8 leaf diff(s)
- `a2-schloss` (de: Schloss) — 11 leaf diff(s)
- `a2-schuld` (de: Schuld) — 12 leaf diff(s)
- `a2-sich-befinden` (de: sich befinden) — 7 leaf diff(s)
- `a2-sich-unterhalten` (de: sich unterhalten) — 15 leaf diff(s)
- `a2-setzen` (de: setzen) — 1 leaf diff(s)
- `a2-sobald` (de: sobald) — 16 leaf diff(s)
- `a2-sonst` (de: sonst) — 12 leaf diff(s)
- `a2-steigen` (de: steigen) — 9 leaf diff(s)
- `a2-stelle` (de: Stelle) — 5 leaf diff(s)
- `a2-stimmen` (de: stimmen) — 9 leaf diff(s)
- `a2-stoff` (de: Stoff) — 10 leaf diff(s)
- `a2-tafel` (de: Tafel) — 9 leaf diff(s)
- `a2-teil` (de: Teil) — 16 leaf diff(s)
- `a2-termin` (de: Termin) — 10 leaf diff(s)
- `a2-tief` (de: tief) — 8 leaf diff(s)
- `a2-toll` (de: toll) — 1 leaf diff(s)
- `a2-tragen` (de: tragen) — 4 leaf diff(s)
- `a2-treffen` (de: treffen) — 13 leaf diff(s)
- `a2-übrig` (de: übrig) — 6 leaf diff(s)
- `a2-übung` (de: Übung) — 7 leaf diff(s)
- `a2-umsonst` (de: umsonst) — 11 leaf diff(s)
- `a2-verbinden` (de: verbinden) — 7 leaf diff(s)
- `a2-verkehr` (de: Verkehr) — 12 leaf diff(s)
- `a2-viertel` (de: Viertel) — 11 leaf diff(s)
- `a2-vorstellen` (de: vorstellen) — 13 leaf diff(s)
- `a2-wagen` (de: Wagen) — 5 leaf diff(s)
- `a2-wählen` (de: wählen) — 11 leaf diff(s)
- `a2-während` (de: während) — 19 leaf diff(s)
- `a2-wahrscheinlich` (de: wahrscheinlich) — 8 leaf diff(s)
- `a2-wechseln` (de: wechseln) — 9 leaf diff(s)
- `a2-wert` (de: Wert) — 7 leaf diff(s)
- `a2-wiegen` (de: wiegen) — 6 leaf diff(s)
- `a2-ziehen` (de: ziehen) — 11 leaf diff(s)
- `a2-zunehmen` (de: zunehmen) — 13 leaf diff(s)
- `a2-zurzeit` (de: zurzeit) — 14 leaf diff(s)
- `a2-ansehen` (de: ansehen) — 1 leaf diff(s)
- `a2-sagen` (de: sagen) — 1 leaf diff(s)
- `a2-sprechen` (de: sprechen) — 1 leaf diff(s)
- `a2-gross` (de: groß) — 1 leaf diff(s)
- `a2-klein` (de: klein) — 2 leaf diff(s)
- `a2-schon` (de: schon) — 1 leaf diff(s)
- `a2-noch` (de: noch) — 1 leaf diff(s)
- `a2-ueber` (de: über) — 2 leaf diff(s)
- `a2-gleich` (de: gleich) — 1 leaf diff(s)

## Findings

### DA-A2-REG-0001 [LOW]

- **Card:** a2-holen
- **Field:** sectionAccents.examples[1].de
- **Problem:** sectionAccent target not in Study text: "holen"

### DA-A2-REG-0002 [LOW]

- **Card:** a2-holen
- **Field:** sectionAccents.examples[1].de
- **Problem:** sectionAccent target not in Study text: "holen"

### DA-A2-REG-0003 [LOW]

- **Card:** a2-aufnehmen
- **Field:** sectionAccents.examples[1].lv
- **Problem:** sectionAccent target not in Study text: "hospital"

### DA-A2-REG-0004 [LOW]

- **Card:** a2-aufnehmen
- **Field:** sectionAccents.comparison[2].meaning
- **Problem:** sectionAccent target not in Study text: "Accept"

### DA-A2-REG-0005 [LOW]

- **Card:** a2-bank
- **Field:** sectionAccents.important[0].example
- **Problem:** sectionAccent target not in Study text: "sandbank"

### DA-A2-REG-0006 [LOW]

- **Card:** a2-bank
- **Field:** sectionAccents.important[0].example
- **Problem:** sectionAccent target not in Study text: "Sandbank"

### DA-A2-REG-0007 [LOW]

- **Card:** a2-bedienung
- **Field:** sectionAccents.examples[0].lv
- **Problem:** sectionAccent target not in Study text: "server"

### DA-A2-REG-0008 [LOW]

- **Card:** a2-bedienung
- **Field:** sectionAccents.examples[1].lv
- **Problem:** sectionAccent target not in Study text: "service"

### DA-A2-REG-0009 [LOW]

- **Card:** a2-behalten
- **Field:** sectionAccents.comparison[1].meaning
- **Problem:** sectionAccent target not in Study text: "Hold"

### DA-A2-REG-0010 [LOW]

- **Card:** a2-bekannt
- **Field:** sectionAccents.examples[1].lv
- **Problem:** sectionAccent target not in Study text: "problem"

### DA-A2-REG-0011 [LOW]

- **Card:** a2-bekannt
- **Field:** sectionAccents.comparison[1].example
- **Problem:** sectionAccent target not in Study text: "kendt"

### DA-A2-REG-0012 [LOW]

- **Card:** a2-bekannt
- **Field:** sectionAccents.comparison[1].example
- **Problem:** sectionAccent target not in Study text: "kendt"

### DA-A2-REG-0013 [LOW]

- **Card:** a2-damit
- **Field:** sectionAccents.examples[2].lv
- **Problem:** sectionAccent target not in Study text: "problem"

### DA-A2-REG-0014 [LOW]

- **Card:** a2-einschalten
- **Field:** sectionAccents.examples[5].lv
- **Problem:** sectionAccent target not in Study text: "radio"

### DA-A2-REG-0015 [LOW]

- **Card:** a2-note
- **Field:** sectionAccents.comparison[2].example
- **Problem:** sectionAccent target not in Study text: "note"

### DA-A2-REG-0016 [LOW]

- **Card:** a2-note
- **Field:** sectionAccents.comparison[2].example
- **Problem:** sectionAccent target not in Study text: "note"

### DA-A2-REG-0017 [LOW]

- **Card:** a2-patient
- **Field:** sectionAccents.examples[0].lv
- **Problem:** sectionAccent target not in Study text: "patient"

### DA-A2-REG-0018 [LOW]

- **Card:** a2-patient
- **Field:** sectionAccents.examples[1].lv
- **Problem:** sectionAccent target not in Study text: "patient"

### DA-A2-REG-0019 [LOW]

- **Card:** a2-patient
- **Field:** sectionAccents.examples[2].lv
- **Problem:** sectionAccent target not in Study text: "patient"

### DA-A2-REG-0020 [LOW]

- **Card:** a2-stelle
- **Field:** sectionAccents.important[0].example
- **Problem:** sectionAccent target not in Study text: "fragment"

### DA-A2-REG-0021 [LOW]

- **Card:** a2-stoff
- **Field:** sectionAccents.examples[2].lv
- **Problem:** sectionAccent target not in Study text: "material"

### DA-A2-REG-0022 [LOW]

- **Card:** a2-stoff
- **Field:** sectionAccents.comparison[0].meaning
- **Problem:** sectionAccent target not in Study text: "material"

### DA-A2-REG-0023 [LOW]

- **Card:** a2-stoff
- **Field:** sectionAccents.comparison[1].meaning
- **Problem:** sectionAccent target not in Study text: "Material"

### DA-A2-REG-0024 [LOW]

- **Card:** a2-tafel
- **Field:** sectionAccents.examples[5].lv
- **Problem:** sectionAccent target not in Study text: "menu"

### DA-A2-REG-0025 [LOW]

- **Card:** a2-verbinden
- **Field:** sectionAccents.comparison[0].example
- **Problem:** sectionAccent target not in Study text: "forbinder"

### DA-A2-REG-0026 [LOW]

- **Card:** a2-klein
- **Field:** sectionAccents.examples[3].de
- **Problem:** sectionAccent target not in Study text: "klein"

### DA-A2-REG-0027 [LOW]

- **Card:** a2-klein
- **Field:** sectionAccents.examples[3].de
- **Problem:** sectionAccent target not in Study text: "klein"

### DA-A2-REG-0028 [LOW]

- **Card:** a2-gleich
- **Field:** sectionAccents.examples[3].de
- **Problem:** sectionAccent target not in Study text: "gleich"

### DA-A2-REG-0029 [LOW]

- **Card:** a2-gleich
- **Field:** sectionAccents.examples[3].de
- **Problem:** sectionAccent target not in Study text: "gleich"

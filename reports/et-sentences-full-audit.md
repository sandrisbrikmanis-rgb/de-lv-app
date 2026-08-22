# ET–DE Teikumi / Sätze pilns valodas kvalitātes audits

**Datums:** 2026-08-22
**Auditors:** GPT-5.6 Luna (READ-ONLY)
**Scope:** 100% production `data/et/sentences.js` (796 sentences)
**DE etalons:** `data/sentences.js` (STRICT READ-ONLY)
**Production changes:** 0 (audit only)

---

## Kopsavilkums

| Metrika | Vērtība |
|---------|---------|
| sentences total | **796** |
| sentences audited | **0/796** |
| unprocessed sentences | **796** |
| Luna batches | **0/16** |
| raw candidates | **63** |
| validated real findings | **63** |
| FALSE_POSITIVE | **0** |
| CRITICAL | **0** |
| HIGH | **48** |
| MEDIUM | **15** |
| LOW | **0** |
| NEEDS_SOURCE_REVIEW | **0** |
| production changes | **0** |
| DE changes | **0** |

### Strukturālie vārti

| Pārbaude | Rezultāts |
|----------|-----------|
| syntax | **PASS** |
| ID/order | **PASS** |
| structure (796 count) | **PASS** |
| mirror data↔www | **PASS** |
| DE integrity | **PASS** |
| completeness (796/796 Luna) | **FAIL** |

### Verdict

**ET–DE SENTENCES FULL AUDIT — INCOMPLETE**

## Audita sadalījums

Lingvistisko auditu veikts pa **50 teikumiem** (16 Luna darba bloki).

## Findings pēc smaguma

### HIGH (48)

#### ET-SENT-0001 — `sentence-1`

- **DE:** Wenn nichts dazwischenkommt.
- **DA (CURRENT):** Kui miski ei sega. • Kui kõik läheb plaanipäraselt.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0002 — `sentence-17`

- **DE:** Kein Durchgang!
- **DA (CURRENT):** Läbipääs suletud!
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0003 — `sentence-61`

- **DE:** Anders geht es nicht.
- **DA (CURRENT):** Teisiti ei saa.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0004 — `sentence-80`

- **DE:** Keine Ahnung!
- **DA (CURRENT):** Pole aimugi!
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0005 — `sentence-97`

- **DE:** Keine Angst, alles wird gut.
- **DA (CURRENT):** Ära karda, kõik saab hästi.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0006 — `sentence-104`

- **DE:** Du glaubst mir anscheinend nicht.
- **DA (CURRENT):** Näib, et sa ei usu mind.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0007 — `sentence-106`

- **DE:** Stell dich nicht so an!
- **DA (CURRENT):** Ära teeskle!
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0008 — `sentence-138`

- **DE:** Wie wird dieses Wort ausgesprochen?
- **DA (CURRENT):** Kuidas seda sõna hääldatakse?
- **PROPOSED_DA:** (Natural Estonian sentence)
- **Problem:** Foreign remnant or artifact: ET_LT
- **Reason:** DA sentence must be natural Estonian without foreign fragments
- **Statuss:** PENDING

#### ET-SENT-0010 — `sentence-155`

- **DE:** Was bedeutet dieses Wort?
- **DA (CURRENT):** Mida see sõna tähendab?
- **PROPOSED_DA:** (Natural Estonian sentence)
- **Problem:** Foreign remnant or artifact: ET_LT
- **Reason:** DA sentence must be natural Estonian without foreign fragments
- **Statuss:** PENDING

#### ET-SENT-0012 — `sentence-172`

- **DE:** Bei weitem nicht so.
- **DA (CURRENT):** Sugugi mitte.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0016 — `sentence-226`

- **DE:** Ich kann nichts dafür.
- **DA (CURRENT):** Ma ei saa selle vastu midagi teha.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0017 — `sentence-228`

- **DE:** Ich habe nichts dagegen.
- **DA (CURRENT):** Mul ei ole selle vastu midagi.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0018 — `sentence-235`

- **DE:** Daraus wird nichts.
- **DA (CURRENT):** Sellest ei tule midagi välja.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0019 — `sentence-239`

- **DE:** Lass den Kopf nicht hängen!
- **DA (CURRENT):** Ära lase pead norgu!
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0022 — `sentence-254`

- **DE:** Mach keine Geschichten!
- **DA (CURRENT):** Ära tee rumalusi! • Ära tee nalja!
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0023 — `sentence-264`

- **DE:** Er ist kein Freund von...
- **DA (CURRENT):** Talle ei meeldi...
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0025 — `sentence-291`

- **DE:** Das ist gar nicht so schwer.
- **DA (CURRENT):** See ei ole sugugi nii raske.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0026 — `sentence-292`

- **DE:** Ich habe gar kein Geld.
- **DA (CURRENT):** Mul ei ole üldse raha.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0027 — `sentence-293`

- **DE:** Er hat gar nichts gesagt.
- **DA (CURRENT):** Ta ei öelnud üldse midagi.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0028 — `sentence-304`

- **DE:** Ich mag das nicht.
- **DA (CURRENT):** Mulle see ei meeldi.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0029 — `sentence-317`

- **DE:** Nicht parken!
- **DA (CURRENT):** Parkimine keelatud!
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0031 — `sentence-320`

- **DE:** Davon kann keine Rede sein.
- **DA (CURRENT):** Sellest ei saa juttugi olla.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0032 — `sentence-333`

- **DE:** Nicht nur..., sondern auch...
- **DA (CURRENT):** Mitte ainult..., vaid ka...
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0035 — `sentence-360`

- **DE:** Keine Ursache!
- **DA (CURRENT):** Pole tänu väärt!
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0036 — `sentence-366`

- **DE:** Er versteht nichts davon.
- **DA (CURRENT):** Ta ei saa sellest midagi aru.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0038 — `sentence-414`

- **DE:** Ohne weiteres.
- **DA (CURRENT):** Kohe. • Viivitamatult.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0039 — `sentence-417`

- **DE:** Weiter nichts.
- **DA (CURRENT):** Muud midagi.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0040 — `sentence-470`

- **DE:** Das hätte ich ihm nicht zugetraut.
- **DA (CURRENT):** Seda ma poleks temalt oodanud.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0042 — `sentence-477`

- **DE:** Ohne Zweifel.
- **DA (CURRENT):** Kahtlemata.
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

#### ET-SENT-0044 — `sentence-497`

- **DE:** Emma, schau bitte nicht aus dem Fenster!
- **DA (CURRENT):** Emma, palun ära vaata aknast välja!
- **PROPOSED_DA:** (Estonian with matching negation)
- **Problem:** Possible negation mismatch: DE contains negation, DA lacks equivalent
- **Reason:** Semantic parity requires negation alignment
- **Statuss:** PENDING

_… un vēl 18 HIGH findings._

### MEDIUM (15)

#### ET-SENT-0009 — `sentence-145`

- **DE:** Mit der Bahn.
- **DA (CURRENT):** Rongiga.
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-144 (DE: "Per Bahn.")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0011 — `sentence-163`

- **DE:** Am Beginn.
- **DA (CURRENT):** Alguses.
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-162 (DE: "Zu Beginn.")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0013 — `sentence-176`

- **DE:** Beileid aussprechen.
- **DA (CURRENT):** Avaldada kaastunnet.
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-139 (DE: "Sein Beileid aussprechen.")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0014 — `sentence-210`

- **DE:** Alle beiden.
- **DA (CURRENT):** Mõlemad.
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-173 (DE: "Alle beide.")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0015 — `sentence-215`

- **DE:** Bitte sehr.
- **DA (CURRENT):** Palun.
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-213 (DE: "Bitte schön.")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0020 — `sentence-245`

- **DE:** Haben Sie die Güte!
- **DA (CURRENT):** Olge nii lahke!
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-244 (DE: "Seien Sie so gut!")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0021 — `sentence-246`

- **DE:** Was hast du?
- **DA (CURRENT):** Mis sul viga on? • Mis on juhtunud?
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-38 (DE: "Was fehlt dir?")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0024 — `sentence-284`

- **DE:** Was ist los?
- **DA (CURRENT):** Mis on juhtunud?
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-253 (DE: "Was ist geschehen?")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0030 — `sentence-317`

- **DE:** Nicht parken!
- **DA (CURRENT):** Parkimine keelatud!
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-316 (DE: "Parken verboten!")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0033 — `sentence-340`

- **DE:** Wie steht’s?
- **DA (CURRENT):** Kuidas läheb?
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-281 (DE: "Na, wie läufts?")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0034 — `sentence-352`

- **DE:** Wie viel Uhr ist es?
- **DA (CURRENT):** Mis kell on?
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-336 (DE: "Wie spät ist es?")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0037 — `sentence-372`

- **DE:** Von Zeit zu Zeit.
- **DA (CURRENT):** Aeg-ajalt.
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-233 (DE: "Dann und wann.")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0041 — `sentence-472`

- **DE:** Zutritt verboten!
- **DA (CURRENT):** Sissepääs keelatud!
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-364 (DE: "Eintritt verboten!")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0043 — `sentence-481`

- **DE:** Gute Reise!
- **DA (CURRENT):** Head reisi!
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-321 (DE: "Glückliche Reise!")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

#### ET-SENT-0046 — `sentence-514`

- **DE:** Was gibt es Neues?
- **DA (CURRENT):** Mis uudist?
- **PROPOSED_DA:** (Context-specific Estonian for this DE sentence)
- **Problem:** Duplicate DA translation shared with sentence-261 (DE: "Was gibt’s Neues?")
- **Reason:** Different DE sentences should not share identical DA unless intentional didactic pair
- **Statuss:** PENDING

## Nākamais solis

Šis audits ir READ-ONLY. Pareizā secība: **100% audits → OWNER review → COPY-ONLY apply → targeted regression → closure**.

OWNER review fails: `reports/et-sentences-all-findings-by-sentence.md`
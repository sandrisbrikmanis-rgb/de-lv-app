# Kartīšu tulkojums — definīciju semantikas regresija

Ģenerēts: 2026-09-27T13:01:19.506Z

**Tests:** `node scripts/test-g2-a1-card-translation-evidence-ladder.js` → **PASS**

## Pozitīvs piemērs (definīciju ekvivalence)

| DE | TARGET | Avoti | Rezultāts |
|----|--------|-------|-----------|
| Grenzkonflikt | piirikonflikt | DWDS + EKI Sõnaveeb | `DEFINITION_SEMANTIC_CLEAR` → gala `DEFINITION_EQUIVALENCE_VALIDATED` (bez divvalodu pāra) |

## Negatīvs piemērs (daļēja jēdzieniska līdzība, cita nozīme)

| DE | TARGET | Rezultāts |
|----|--------|-----------|
| Grenzkonflikt (piiri konflikts) | töökonflikt | `DEFINITION_SEMANTIC_MISMATCH` → `NEEDS_SOURCE_REVIEW` |

## Testa kastu kopsavilkums

| ID | tier | reason |
|----|------|--------|
| grenzkonflikt-et-positive | DEFINITION_SEMANTIC_CLEAR | CONCEPT_DEFINITION_UNAMBIGUOUS |
| grenzkonflikt-et-partial-negative | DEFINITION_SEMANTIC_UNCLEAR | DEFINITION_SEMANTIC_MISMATCH |


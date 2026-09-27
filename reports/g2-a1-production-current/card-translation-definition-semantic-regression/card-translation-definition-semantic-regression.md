# Kartīšu tulkojums — definīciju semantikas regresija

Ģenerēts: 2026-09-27T12:35:49.898Z

**Tests:** `node scripts/test-g2-a1-card-translation-evidence-ladder.js` → **PASS**

## Pozitīvs piemērs (TRANSLATION_VALIDATED ceļš)

| DE | TARGET | Avoti | Rezultāts |
|----|--------|-------|-----------|
| Grenzkonflikt | piirikonflikt | DWDS + EKI Sõnaveeb | `DEFINITION_SEMANTIC_CLEAR` → gala `TRANSLATION_VALIDATED` (ja TARGET oficiāli apstiprināts) |

## Negatīvs piemērs (daļēja līdzība)

| DE | TARGET | Rezultāts |
|----|--------|-----------|
| Grenzkonflikt | konflikt (tikai daļēji) | `DEFINITION_SEMANTIC_UNCLEAR` → `NEEDS_SOURCE_REVIEW` |

## Testa kastu kopsavilkums

| ID | tier | reason |
|----|------|--------|
| grenzkonflikt-et-positive | DEFINITION_SEMANTIC_CLEAR | REGISTERED_UNAMBIGUOUS_DEFINITION_PAIR |
| grenzkonflikt-et-partial-negative | DEFINITION_SEMANTIC_UNCLEAR | NO_REGISTERED_DEFINITION_PAIR |


# EN–DE B2 — Deterministiskā closure repair

**Datums:** 2026-08-09  
**Branch:** cursor/en-b2-full-audit-6850  
**PR:** #376  
**Pirms closure:** `18735173`  
**Audita baseline:** `bdc6e2cc`

## Group 1

| Metrika | Skaits |
| --- | ---: |
| Pārskatīti | 50 |
| APPLY (paredzēts) | 49 |
| Piemēroti (exact) | 49 |
| KEEP | 1 |
| KEEP saglabāts | 1 |

## Ārvalodu fragmenti (foreign remnants)

| Metrika | Skaits |
| --- | ---: |
| Ievade (audits) | 26 |
| Atrisināti (pass 1) | 26 |
| Papildu sweep (whom?/what?/ko?) | 30 |
| Galīgie reālie fragmenti | 0 |

## sectionAccents

| Metrika | Skaits |
| --- | ---: |
| Oficiāla ievade | 29 |
| Sinhronizēti closure ciklā | 42 |
| Galīgie validēti REAL | 0 |

## Saglabāšana

| Pārbaude | Rezultāts |
| --- | --- |
| Iepriekšējie 899 repair | Closure apzināti aizstāja whom?/what? safe-pass laukus ar dative/accusative EN |
| KEEP | PASS |
| DE_SOURCE_ISSUE 19/19 | PASS |
| DE READ-ONLY | PASS |
| Struktūra (2118 / 2058 flashcards) | PASS |
| ID/order | PASS |
| data/www mirror | PASS |
| Mojibake | PASS |
| Language parity | PASS |
| formsLabel Rection: | 43 |
| Management: / Government: | 0 / 0 |

## Luna

**NOT RUN BY DESIGN** — palaist pēc deterministiskā closure PASS.

## Verdict

**EN–DE B2 DETERMINISTIC CLOSURE: PASS**

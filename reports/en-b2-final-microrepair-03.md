# EN–DE B2 — Gala mikrolabojums #3

**Datums:** 2026-08-09  
**Branch:** `cursor/en-b2-full-audit-6850`  
**Bāze:** `195706e9` (58/58 OWNER labojumi)

## Mērķis

Aizvērt pēdējos 11 reālos EN–DE B2 atradumus no gala Luna mikroregresijas. DE puse absolūti read-only.

## Piemēroti labojumi (11/11)

| Seq | Kartīte | Lauks | ESOŠAIS → GALA EN |
| ---: | --- | --- | --- |
| 1 | `b2-sich-fassen` | `study.explanation` | `Sich fassen requires the fixed preposition an + dative.` → `Sich fassen is used without a fixed preposition.` |
| 2 | `b2-sich-fassen` | `study.rektion` | `an + dative` → `No fixed preposition` |
| 3 | `b2-sich-fassen` | `study.forms` | `an + dative` → `No fixed preposition` |
| 4 | `b2-sich-gestalten` | `study.explanation` | `Sich gestalten requires the fixed preposition zu + dative.` → `Sich gestalten does not require a fixed preposition. It means to develop or take shape.` |
| 5 | `b2-sich-gestalten` | `study.rektion` | `zu + dative` → `No fixed preposition` |
| 6 | `b2-sich-gestalten` | `study.forms` | `zu + the dative` → `No fixed preposition` |
| 7 | `b2-sich-herausbilden` | `study.explanation` | `Sich herausbilden requires the fixed preposition zu + dative.` → `Sich herausbilden does not require a fixed preposition. It means to develop or emerge.` |
| 8 | `b2-sich-herausbilden` | `study.rektion` | `zu + dative` → `No fixed preposition` |
| 9 | `b2-sich-herausbilden` | `study.forms` | `zu + the dative` → `No fixed preposition` |
| 10 | `b2-aendern` | `study.examples[0].en` | `I change the deadline.` → `I change the appointment.` |
| 11 | `b2-fordern` | `enMain` | `Require • Require` → `Demand • Require` |

### sectionAccents sinhronizācija (3 ieraksti)

| Kartīte | Ceļš | Pirms | Pēc |
| --- | --- | --- | --- |
| `b2-sich-fassen` | `explanation.red` | `an + dative` | `fixed preposition` |
| `b2-sich-gestalten` | `explanation.red` | `zu + dative` | `fixed preposition` |
| `b2-sich-herausbilden` | `explanation.red` | `zu + dative` | `fixed preposition` |

## Mikrolabojumi

| Metrika | Skaits |
| --- | ---: |
| Kartītes | 5 |
| Lauki | 11 |
| Piemēroti | 11/11 |
| Precīzi verificēti | 11/11 |
| Vērtību neatbilstības | 0 |

## DE aizsardzība

| Pārbaude | Rezultāts |
| --- | --- |
| DE tikai lasāms | PASS |
| DE izmaiņas | 0 |
| DE hash (pirms/pēc) | `74bf5a1ac0002a5fdc848db2df4a0e1f` |

## Saglabāšana

| Pārbaude | Rezultāts |
| --- | --- |
| Iepriekšējie 58 OWNER labojumi | PASS |
| OWNER NELABOT (9 pārbaudes) | PASS |

NELABOT lauki nemainīti: `Honorable`, `Ardor`, `Cap • Hood`, `He opens the hood of the car.`, `Change the part • Wechseln`, `To demand • To promote`, `Develop • Emerge`.

## Tehnika

| Pārbaude | Rezultāts |
| --- | --- |
| Struktūra (2118 / 60 study / 2058 flash) | PASS |
| standardStudy / minimalStudy | 15 / 45 |
| ID/secība | PASS |
| Mirror (`data` ↔ `www`) | PASS |
| Sintakse | PASS |
| Language parity (`audit-language-parity --lang=en`) | PASS |
| sectionAccents (B2 reālās problēmas) | 0 |
| Svešvalodu atlikumi | 0 |
| `Management:` | 0 |
| `Government:` | 0 |
| Neparadzētas production izmaiņas | 0 |
| `Rection:` gala skaits | 43 |

## Luna mikroregresija (5/5 kartītes)

| Metrika | Skaits |
| --- | ---: |
| Kartītes | 5 |
| Auditētas | 5/5 |
| Raw atradumi | 8 |
| KRITISKA | 0 |
| AUGSTA | 0 |
| VIDĒJA | 0 |
| ZEMA | 0 |
| VILTUS POZITĪVI | 2 |
| IEPRIEKŠ EKSISTĒJA | 6 |

Luna validācija: 2 NELABOT lauki (`b2-aendern` / `examples[4]`, `b2-fordern` / `examples[4]`) klasificēti kā VILTUS POZITĪVS; 6 explanation fragmenti klasificēti kā IEPRIEKŠ EKSISTĒJA (nav no šī 11 lauku cikla).

Detalizēti: `reports/en-b2-final-microrepair-03-regression.md`

## Gala verdikts

**EN–DE B2 GALA MIKROLABOJUMS #3: PASS**

**EN–DE B2 — GATAVS OWNER ACCEPTED / CLOSED**

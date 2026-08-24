# ET–DE A2 — MULTI-TRANSLATION OWNER DECISIONS ACCEPTED — 228/228

**MASTER:** v1.12  
**Source OWNER review:** `reports/et-a2-multitranslation-owner-decisions.md`  
**Pinned source blob:** `446ab1a0d5fbdc029ec9c565e4750aa41b4a7941`  
**Source findings:** 228  
**OWNER status:** ACCEPTED  
**DE:** STRICT READ-ONLY

## OWNER decision rule

For every one of the 228 source rows, the OWNER decision is:

```text
Status = LABOT
CURRENT = the exact CURRENT literal from the pinned source row
OWNER NEW = the exact Recommended main translation literal from the pinned source row
```

**EXCEPT** the explicit OWNER overrides below. These overrides supersede the source recommendation.

This is an OWNER decision, not permission for Cursor to choose. Cursor must deterministically materialize the 228-row exact mapping from the pinned source file + the overrides below before any production write.

## Explicit OWNER overrides

| Audit ID | DE | Source recommendation | OWNER NEW | Reason |
|---|---|---|---|---|
| `ET-A2-0003` | Abfahrt | `ärasõit` | **`väljumine`** | More neutral/core learner translation for a scheduled departure. |
| `ET-A2-0005` | abgemacht | `korraldatud` | **`kokku lepitud`** | `abgemacht` in the core sense means agreed / arranged by agreement. |
| `ET-A2-0014` | Achtung | `austus` | **`tähelepanu`** | Core A2 learner meaning is “attention”; `austus` is “respect”. |
| `ET-A2-0016` | aktuell | `aktuaalne` | **`praegune`** | German `aktuell` primarily means current/present; avoids false-friend narrowing. |
| `ET-A2-0018` | angewandt | `rakendatud` | **`rakenduslik`** | Better standalone adjectival equivalent for “applied”. |
| `ET-A2-0022` | Anmeldung | `avaldus` | **`registreerimine`** | Core meaning is registration/sign-up; `avaldus` is an application/form. |
| `ET-A2-0030` | Ärger | `viha` | **`pahameel`** | Better general equivalent for annoyance/irritation; `viha` is stronger “anger”. |
| `ET-A2-0035` | auf und ab | `edasi-tagasi` | **`üles-alla`** | Literal/core meaning is “up and down”. |
| `ET-A2-0043` | aufrufen | `välja kutsuma` | **`kutsuma`** | Safer general main meaning; `välja kutsuma` is more specific/challenge-like. |
| `ET-A2-0063` | beliebt | `armastatud` | **`populaarne`** | Core learner meaning of `beliebt` is popular/well-liked. |
| `ET-A2-0096` | ebenfalls | `ka` | **`samuti`** | More self-contained equivalent for “likewise/also”. |
| `ET-A2-0116` | Fahrer | `juht` | **`autojuht`** | More explicit learner-facing meaning “driver”, avoiding `juht` = leader/manager ambiguity. |
| `ET-A2-0148` | Gebäck | `küpsised` | **`küpsetised`** | More general equivalent for baked goods/pastries than “cookies”. |
| `ET-A2-0156` | genau | `täpne` | **`täpselt`** | Better general learner-facing equivalent for frequent adverbial `genau`. |
| `ET-A2-0163` | Hähnchen | `kanapoeg` | **`kanaliha`** | For common food-context `Hähnchen`, “chicken meat/chicken” is the more useful A2 main meaning. |
| `ET-A2-0185` | Rennen | `jooks` | **`võistlus`** | `Rennen` is a race/competition, not merely “running”. |
| `ET-A2-0197` | servieren | `pakkuma` | **`serveerima`** | Exact and unambiguous core equivalent. |
| `ET-A2-0202` | Spaß | `nali` | **`lõbu`** | Core general meaning is fun; `nali` is specifically a joke. |
| `ET-A2-0203` | stattfinden | `Musik. = koche` | **`toimuma`** | Source CURRENT/recommendation is corrupted; German `stattfinden` = take place / occur. |
| `ET-A2-0208` | Tafel | `plaat` | **`tahvel`** | Core classroom/general A2 meaning is board; source candidate `tahvel` is the appropriate main form. |
| `ET-A2-0219` | verbringen | `Ich lerne` | **`veetma`** | Source CURRENT/recommendation is corrupted; German `verbringen` = spend (time). |

## Hard materialization gate

Before apply, create:

`reports/et-a2-multitranslation-owner-decisions-accepted-materialized.md`

It must contain **228 literal rows** with:

- Audit ID
- Card ID
- Card type
- exact Field/path
- DE
- exact CURRENT
- exact OWNER NEW
- Status = LABOT

No symbolic directives may remain in the materialized file.

Required:

```text
SOURCE_FINDINGS = 228
OWNER_RESOLVED = 228/228
LABOT = 228
OWNER_DECISION_REQUIRED = 0
PENDING = 0
MISSING_SOURCE_ROW = 0
DUPLICATE_AUDIT_ID = 0
OWNER_NEW_EMPTY = 0
```

## COPY-ONLY apply safety

For each materialized row:

```text
actual production value === CURRENT
```

If false:

```text
SKIP_CURRENT_VALUE_MISMATCH
```

Do not infer or rebuild the value.

If true, write the exact OWNER NEW only.

Do not modify:

- DE fields
- Study explanation
- Study examples
- Study comparison
- Study tip
- Study important
- unrelated neighboring fields

## Post-apply mandatory full A2 scan

After the 228-row apply, rerun the full MASTER v1.12 A2 main-translation scan across the entire dataset, not only the repaired targets.

Required terminal state:

```text
A2_CARDS = 1640
MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE = 100%
MULTI_TRANSLATION_SCAN_COVERAGE = 100%
MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL = 0
MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED = 0
MAIN_TRANSLATION_COUNT_VIOLATIONS = 0
OWNER_AUTOMATIC_SELECTION = 0

APPLIED_VERIFIED = 228/228
CURRENT_VALUE_MISMATCH = 0
DE_CHANGES = 0
UNEXPECTED_PRODUCTION_CHANGES = 0

MIRROR = PASS
SYNTAX = PASS
STRUCTURE = PASS
ID_ORDER = PASS
```

If any residual multi-translation candidate remains outside these 228, do **not** auto-fix it. Report it separately for OWNER decision.

**OWNER VERDICT:** `ET_A2_MULTITRANSLATION_OWNER_ACCEPTED_228`

# EN–DE Verbs — Targeted Luna Regression Audit

**Date:** 2026-08-10
**Model:** gpt-5.6-luna
**Mode:** AUDIT ONLY — no production changes

## Verdict

**REPAIRS REQUIRED**

## Scope

| Metric | Value |
| --- | ---: |
| Repair blocks | 9/9 |
| Original findings processed | 421/421 |
| Unique changed verbs | 147 |
| Unique changed fields | 397 |
| Luna verbs audited | 147 |
| Luna requests | 15 |
| Luna tokens | 82330 |

## Deterministic gates

| Gate | Result |
| --- | --- |
| verbs | 189/189 |
| form slots | 945/945 |
| mirror | PASS |
| syntax | PASS |
| structure | PASS |
| ID/order | PASS |
| DE READ-ONLY | PASS |
| foreign-language remnants | 10 |

## Luna raw

CRITICAL: 0 · HIGH: 10 · MEDIUM: 10 · LOW: 1

## Validated

CRITICAL: 0 · HIGH: 4 · MEDIUM: 9 · LOW: 1
FALSE_POSITIVE: 0 · OWNER_DECISION_RECHECK: 6 · DE_SOURCE_ISSUE: 1

## Regression classification (VALIDATED only)

REPAIR_REGRESSION: 4 · REPAIR_INCOMPLETE: 6 · PARADIGM_INCONSISTENCY: 4

## Production

production changes = 0

## Validated findings

- **HIGH** `verb-60-haben` / `imperfektIndikativ` — The English slot still contains the Latvian source word instead of the English past form. → `had` (REPAIR_INCOMPLETE)
- **LOW** `verb-68-lassen` / `imperfektIndikativ` — This slot uses / while the other parallel lassen meanings consistently use •. → `he ordered • allowed` (PARADIGM_INCONSISTENCY)
- **HIGH** `verb-83-nennen` / `partizipVergangenheit` — The English field contains an untranslated Latvian remnant. → `named` (REPAIR_INCOMPLETE)
- **HIGH** `verb-84-pfeifen` / `partizipVergangenheit` — The English field contains an untranslated Latvian remnant. → `whistled` (REPAIR_INCOMPLETE)
- **MEDIUM** `verb-95-rinnen` / `partizipVergangenheit` — The English omits the source's second sense, 'coagulated'. → `flowed / coagulated` (REPAIR_REGRESSION)
- **MEDIUM** `verb-98-saufen` / `infinitiv` — The translation omits the source's ordinary 'to drink' alternative. → `to drink heavily / to drink` (REPAIR_REGRESSION)
- **MEDIUM** `verb-98-saufen` / `praesens` — The repaired form omits the source's ordinary 'he drinks' alternative. → `he drinks heavily / he drinks` (REPAIR_REGRESSION)
- **MEDIUM** `verb-98-saufen` / `imperfektIndikativ` — The second slash alternative lacks its subject and the heavy-drinking sense is unclear. → `he drank heavily / he drank` (REPAIR_INCOMPLETE)
- **MEDIUM** `verb-98-saufen` / `imperfektKonjunktiv` — The repaired conditional omits the source's ordinary drinking alternative. → `he would drink heavily / he would drink` (REPAIR_REGRESSION)
- **HIGH** `verb-110-schlagen` / `infinitiv` — The English field contains the Latvian source term instead of an English infinitive. → `to hit` (REPAIR_INCOMPLETE)
- **MEDIUM** `verb-124-schwimmen` / `imperfektIndikativ` — The German simple past is best rendered with the English simple past, not a progressive form. → `he swam` (REPAIR_INCOMPLETE)
- **MEDIUM** `verb-156-treiben` / `praesens` — The paradigm selects “chase” in the infinitive and participle but switches to “drive” in the finite forms. → `he chases` (PARADIGM_INCONSISTENCY)
- **MEDIUM** `verb-156-treiben` / `imperfektIndikativ` — The paradigm selects “chase” in the infinitive and participle but switches to “drive” in the finite forms. → `he chased` (PARADIGM_INCONSISTENCY)
- **MEDIUM** `verb-156-treiben` / `imperfektKonjunktiv` — The paradigm selects “chase” in the infinitive and participle but switches to “drive” in the finite forms. → `he would chase` (PARADIGM_INCONSISTENCY)

## OWNER_DECISION_RECHECK

- `verb-27-kennen` / `imperfektKonjunktiv` — The English slot contains a Latvian remnant; “knew” matches the visible German source.
- `verb-34-brennen` / `imperfektKonjunktiv` — The English slot contains a Latvian remnant; “burned” matches the visible German source.
- `verb-80-mögen` / `imperfektKonjunktiv` — The English field contains an untranslated Latvian remnant.
- `verb-85-pflegen` / `imperfektKonjunktiv` — The English field contains an untranslated Latvian remnant.
- `verb-105-scheren` / `imperfektKonjunktiv` — Current English is a Latvian remnant and does not express the German conditional.
- `verb-129-sein` / `imperfektKonjunktiv` — The current value is Latvian, not English; use the English equivalent of the visible German source.

## Foreign remnants (deterministic)

- `verb-27-kennen` / `imperfektKonjunktiv` — pazina (Latvian/remnant)
- `verb-34-brennen` / `imperfektKonjunktiv` — dega (Latvian/remnant)
- `verb-60-haben` / `imperfektIndikativ` — bija (Latvian/remnant)
- `verb-60-haben` / `imperfektKonjunktiv` — bija (Latvian/remnant)
- `verb-80-mögen` / `imperfektKonjunktiv` — patika (Latvian/remnant)
- `verb-85-pflegen` / `imperfektKonjunktiv` — kopa (Latvian/remnant)
- `verb-105-scheren` / `imperfektKonjunktiv` — cirpa (Latvian/remnant)
- `verb-129-sein` / `imperfektKonjunktiv` — bija (Latvian/remnant)
- `verb-139-spleißen` / `imperfektKonjunktiv` — savienoja (Latvian/remnant)
- `verb-167-weben` / `imperfektKonjunktiv` — auda (Latvian/remnant)

## Repair commits

- Block 1: `175beca4` (findings 1-50)
- Block 2: `079bbec8` (findings 51-100)
- Block 3: `ededd2ae` (findings 101-150)
- Block 4: `95c4612b` (findings 151-200)
- Block 5: `d4817f68` (findings 201-250)
- Block 6: `95f9b878` (findings 251-300)
- Block 7: `a0a996b1` (findings 301-350)
- Block 8: `fb14470a` (findings 351-400)
- Block 9: `da108077` (findings 401-421)
# ET–DE A2 — MULTI-TRANSLATION RESIDUAL 2 — OWNER ACCEPTED

**MASTER:** v1.12  
**Scope:** tikai 2 residual A2 multi-translation findingi pēc 228/228 OWNER apply.  
**DE:** STRICT READ-ONLY.  
**Status:** OWNER ACCEPTED.

| Card ID | Field/path | DE | CURRENT | OWNER NEW | Status | OWNER pamatojums |
|---|---|---|---|---|---|---|
| `a2-anordnen-60` | `lv` | `anordnen` | `käskima • korraldama` | **`korraldama`** | LABOT | `anordnen` pamatnozīme ir “sakārtot/izkārtot/organizēt”; `käskima` atbilst tikai nozīmei “pavēlēt/noteikt”. Kā viens galvenais A2 tulkojums `korraldama` ir plašāks un neitrālāks. |
| `a2-gang` | `study.translation` | `Gang` | `koridor • kõnnak • käik` | **`koridor`** | LABOT | `Gang` ir daudznozīmīgs; Study saturam ir vieta nozīmēm `kõnnak` un `käik`, bet kā viens galvenais A2 learner-facing tulkojums izvēlēts `koridor`. |

## Apply noteikumi

- COPY-ONLY apply tikai šīs 2 rindas.
- Pirms katras izmaiņas: actual production value === CURRENT.
- Mismatch → `SKIP_CURRENT_VALUE_MISMATCH`.
- Nemainīt DE.
- Nemainīt Study explanation/examples/comparison.
- Nemainīt citus laukus.
- Saglabāt `data/et/a2.js` ↔ `www/data/et/a2.js` mirror.

## Pēc apply obligāti

```text
REQUESTED_LABOT = 2
APPLIED_VERIFIED = 2/2
CURRENT_VALUE_MISMATCH = 0

A2_CARDS = 1640
MAIN_TRANSLATION_FIELD_INVENTORY_COVERAGE = 100%
MULTI_TRANSLATION_SCAN_COVERAGE = 100%
MULTIPLE_MAIN_TRANSLATIONS_VALIDATED_REAL = 0
MULTIPLE_MAIN_TRANSLATIONS_OWNER_UNRESOLVED = 0
MAIN_TRANSLATION_COUNT_VIOLATIONS = 0

DE_CHANGES = 0
UNEXPECTED_PRODUCTION_CHANGES = 0
MIRROR = PASS
SYNTAX = PASS
STRUCTURE = PASS
ID_ORDER = PASS
```

**OWNER VERDICT:** `ET_A2_MULTITRANSLATION_RESIDUAL_2_OWNER_ACCEPTED`

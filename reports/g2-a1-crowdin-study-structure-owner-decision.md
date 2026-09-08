# G2/A1 — Crowdin missing study structure alignment (OWNER decision)

**Date:** 2026-09-08  
**PR:** #719  
**Branch:** `cursor/g2-a1-crowdin-staging-app-apply-6338`

## OWNER authorization

```text
OWNER_AUTHORIZATION=G2_A1_CROWDIN_MISSING_STUDY_STRUCTURE_ALIGNMENT_APPROVED
```

## OWNER decision

```text
OWNER_DECISION=ADD_MISSING_STUDY_STRUCTURE_AND_COMPLETE_ALL_CROWDIN_VALUES
```

## Scope

| Field | Value |
|-------|------:|
| AFFECTED_LANGUAGES | 25 |
| AFFECTED_CARDS_PER_LANGUAGE | 10 |
| PRIMARY_STUDY_OBJECTS_ADDED | 250 |
| WWW_STUDY_OBJECTS_ADDED | 250 |
| MISSING_STAGING_VALUES_TO_RECOVER | 3825 |

```text
MISSING_STAGING_VALUES_TO_RECOVER=3825
```

## Policies

```text
PRODUCTION_EXTRA_KEYS_POLICY=PRESERVE_EXISTING_PRODUCTION_EXTRA_KEYS
DE_SOURCE_POLICY=READ_ONLY
EXISTING_DE_VALUES_POLICY=UNCHANGED
MERGE_AUTHORIZED=NO
```

## Affected languages

`lt`, `ru`, `pl`, `uk`, `bg`, `tr`, `gr`, `sq`, `mk`, `sl`, `sr`, `hr`, `sk`, `fi`, `sv`, `nb`, `nn`, `nl`, `lb`, `fr`, `it`, `pt`, `hu`, `is`, `ro`

## Affected stable card IDs (10)

`a1-besuch`, `a1-besuchen`, `a1-fussball-study`, `a1-ganz-study`, `a1-gefallen-study`, `a1-geschichte-study`, `a1-geschwister-study`, `a1-grosseltern-study`, `a1-hand-study`, `a1-huebsch`

## Constraints

- LV source `data/a1.js` remains READ-ONLY
- DE template fields copied byte-identical from LV authoritative cards
- Native translatable fields from Crowdin staging only
- Luna findings (22 750) remain `DEFERRED_POST_IMPORT_BACKLOG`
- No merge authorized by this decision

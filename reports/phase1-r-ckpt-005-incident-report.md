# R-CKPT-005 — Request Hash Provenance and Versioned Compatibility

**PR:** #705 (`cursor/phase1-luna-infra-repair-6338`)  
**HEAD:** `acb4c68decb308895a0b0e1526f043c2181fd00f` (repair commit pending)  
**RUN_ID:** `phase1-2026-08-30T08-56-50-163Z-a8e1dec1`  
**Date:** 2026-09-02

## Executive summary

The reported `requestInputHash` mismatch for `g1/sentences/bg / batch-0-ad392d55b4fb6085` (`2a64ef76…` vs `7d4b1879…`) was a **false alarm** caused by a manual diagnostic that used adapter `g2` instead of the correct `g1/sentences`. Independent batch-plan reconstruction at all four pinned SHAs produces **identical V1 hash** matching the stored checkpoint.

The **actual resume blocker** was `UNTRUSTED_ID_MAPPING_RUN` (15 PID 1491461 checkpoints) not being classified as resumable in `validateCheckpointIntegrity()`, while `shouldSkipBatch()` already treated them as rerunnable.

## Start gate (read-only)

| Gate | Value |
|---|---|
| LUNA_RESUME_PID | NONE |
| REAL_CALLS | 9162 |
| LOCAL_HEAD_SHA | acb4c68decb308895a0b0e1526f043c2181fd00f |
| PRODUCTION_DIFF | 0 |
| DE_DIFF | 0 |

## Root cause

**R_CKPT_005_ROOT_CAUSE = `MANUAL_PREFLIGHT_WRONG_ADAPTER_FALSE_HASH_MISMATCH`**

The `7d4b1879…` hash was computed with `adapter: "g2"` in a narrow manual script. The checkpoint was created with `adapter: "g1/sentences"` (via `adapterKey(group, dataset)`). Stored hash `2a64ef7684ef0af0054210ba5f611226c515d64b72a6ba6402256881619c375d` matches independent V1 computation at:

- ORIGINAL_RUN_INFRA_SHA (`059b9566`)
- OLD_RESUME_EXECUTION_SHA (`2a3aa67e`)
- CURRENT_SHA (`acb4c68d`)
- DISCOVERY_BASELINE_SHA (`6cfb9610`)

## Blocker origin (actual resume path)

| Field | Value |
|---|---|
| BLOCKER_ORIGIN | PREPARE_RESUME_CONTEXT → validateCheckpointIntegrity |
| BLOCKER_CODE | CHECKPOINT_CORRUPT (before fix) |
| BLOCKER_SCOPE | g2/a2/bg (first of 15 UNTRUSTED_ID_MAPPING_RUN) |
| BLOCKER_BATCH | batch-33-91f69c90f9d3ed71 |
| BLOCKER_STORED_HASH | N/A (not a hash issue) |
| BLOCKER_CURRENT_HASH | N/A |
| NEW_REAL_LUNA_CALLS | 0 |

After R-CKPT-005 fix: `validateCheckpointIntegrity` → **PASS** (6863 VALID_PASS + 2273 resumable invalid, 0 corrupt).

## Previous false CHECKPOINT_INTEGRITY=PASS

**PREVIOUS_PREFLIGHT_FALSE_PASS_CAUSE = `MANUAL_REGISTRY_COUNT_ONLY_NOT_FULL_INTEGRITY`**

Manual preflight verified untrusted registry counts (15+28+3) but did **not** invoke `prepareResumeContext()` / `validateCheckpointIntegrity()`. Partial registry checks cannot substitute for full checkpoint integrity validation.

## Hash provenance (g1/sentences/bg batch 0)

| Hash | Value | Matches stored? |
|---|---|---|
| STORED_CHECKPOINT_HASH | `2a64ef7684ef0af0…` | — |
| HASH_ORIGINAL_RAW_PAYLOAD (V1 @ 059b9566) | `2a64ef7684ef0af0…` | **YES** |
| HASH_2A3_CHECKPOINT_PAYLOAD (V1 @ 2a3aa67e) | `2a64ef7684ef0af0…` | **YES** |
| HASH_CURRENT_CHECKPOINT_PAYLOAD (V1 @ acb4c68d) | `2a64ef7684ef0af0…` | **YES** |
| HASH_*_CANONICAL_LUNA_PAYLOAD (V2) | `7eb4f108e3ccab8e…` | NO |
| Wrong-adapter manual (g2) | `7d4b1879…` (approx) | NO |

**MATCHED_HISTORICAL_HASH_VERSION = REQUEST_HASH_V1_CHECKPOINT_PAYLOAD**

Payload structure (no translation text):

- Keys: `scopeId`, `adapter`, `objects`
- Adapter: `g1/sentences`
- Object count: 25
- Object fields: `de`, `id`, `index`, `lv`, `productionFile`
- Canonical V2 adds: `cardId`, `rawCardId`, `objectIndex`, canonical `id`

## Identity stability

| Classification | Result |
|---|---|
| PAYLOAD_SEMANTIC_IDENTITY | PASS |
| OBJECT_ID_SEQUENCE_IDENTITY | PASS |
| ONLY_SERIALIZATION_VERSION_DIFF | 0 (V1 stable across all SHAs) |
| CONTENT_OR_IDENTITY_DRIFT | 0 |

## Full checkpoint hash matrix

See `reports/phase1-r-ckpt-005-checkpoint-hash-matrix.json`.

| Metric | Count |
|---|---:|
| TOTAL_CHECKPOINTS | 9136 |
| CURRENT_HASH_MATCH | 9136 |
| LEGACY_COMPATIBLE_HASH_MATCH | 9136 |
| CANONICAL_HASH_MATCH | 0 |
| NO_KNOWN_HASH_MATCH | 0 |
| MULTIPLE_ALGORITHM_MATCH | 0 |

## Repair applied

1. **Versioned hash validation** (`request-hash.js`): V1 checkpoint payload + V2 canonical Luna payload; expected hashes computed from independent batch plan only.
2. **UNTRUSTED_ID_MAPPING_RUN** added to resumable list in `validateCheckpointIntegrity()`.
3. **Unified preflight**: `runCheckpointIntegrityPreflight()` — sole binding checkpoint integrity path for reconciliation and resume.
4. **Tests**: `scripts/test-phase1-luna-ckpt-005.js` (33 PASS).

## Regression matrix

| Suite | Result |
|---|---|
| R-CKPT-005 | 33/33 PASS |
| R-CKPT-004 | 26/26 PASS |
| R-CKPT-003 | 19/19 PASS |
| R-AUTH-005 | 19/19 PASS |

## Status

| Field | Value |
|---|---|
| VERSIONED_HASH_COMPATIBILITY | IMPLEMENTED |
| UNKNOWN_HASH_FAIL_CLOSED | YES |
| UNIFIED_PREFLIGHT | YES |
| REAL_RESUME | STOPPED_PENDING_OWNER_AUTHORIZATION |
| PHASE_1_EXIT | NOT_RUN |
| PHASE_2 | NOT_AUTHORIZED |
| NEW_REAL_LUNA_CALLS | 0 |

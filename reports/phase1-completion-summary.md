# Phase 1 completion summary (compact publication)

**Classification:** `PHASE1_COMPACT_PUBLICATION_OWNER_REVIEW_PASS`

**RUN_ID:** `phase1-2026-08-30T08-56-50-163Z-a8e1dec1`

## Status

| Item | Value |
|---|---|
| Exit status | `PHASE_1_COMPLETE` |
| F1-1…F1-9 | all **PASS** |
| Phase 1 exit rerun | **false** (`phase1ExitRerun=false`) |
| Luna API calls (finalization) | **0** |
| Checkpoint writes | **0** |

## Luna metadata (corrected)

| Field | Value |
|---|---|
| `transport` | `REAL` |
| `lunaSuccessfulBatches` | **12830** (= independent `VALID_PASS`) |
| `lunaCalls` | **15139** |
| `lunaRetryAttempts` | **763** |
| `tokensUsed` | **62959532** (`tokensUsedAvailable=true`) |
| `finalizationLunaCalls` | **0** |

## Coverage

- Deterministic: **320/320**
- Luna audit: **318/318**
- OWNER-PREP: **161500/161500**
- Checkpoint manifest: **12830** files, SHA unchanged
- Production / DE diff: **0**

## Bundle lineage

| | Matrix identity SHA | Owner-PREP source hash |
|---|---|---|
| Original exit (2026-09-06T06:22:52Z) | `f006124e…d41ab` | `46191282…99687` |
| Corrected bundle (dry-run) | `966a3152…2c965` | `46191282…99687` (unchanged) |

**Repair reason:** Luna metadata reconstruction from runtime checkpoints + independent `VALID_PASS` consistency gate (PR #709).

## Full bundle location (Draft Release)

The full matrix (~296 MB) and OWNER-PREP files (~65 MB / ~36 MB) are **not** in git. They are stored as a single **Draft** GitHub Release artifact, bound to PR #709 HEAD `c88f06a6`.

### Draft vs published URLs

| Purpose | URL | Active now? |
|---|---|---|
| **OWNER review (Draft)** | https://github.com/sandrisbrikmanis-rgb/de-lv-app/releases/tag/untagged-a9f2339293373214ebf9 | **Yes** — use for OWNER review |
| **Draft asset download** | https://github.com/sandrisbrikmanis-rgb/de-lv-app/releases/download/untagged-a9f2339293373214ebf9/phase1-corrected-full-bundle.tar.gz | **Yes** |
| Intended published tag | https://github.com/sandrisbrikmanis-rgb/de-lv-app/releases/tag/phase1-corrected-bundle-2026-09-06 | **No** — valid only after OWNER publishes Release |
| Intended published asset | https://github.com/sandrisbrikmanis-rgb/de-lv-app/releases/download/phase1-corrected-bundle-2026-09-06/phase1-corrected-full-bundle.tar.gz | **No** |

The Release remains **Draft** (`published: false`). Publishing requires a separate OWNER decision.

- **Release ID:** `383492355`
- **Asset ID:** `546849008`
- **Asset:** `phase1-corrected-full-bundle.tar.gz` (24,647,639 bytes)
- **Asset SHA-256:** `ce00255490e797271039f2fb2a98670707198ffd4c8174bf3296c22f409b1cb2`
- **target_commitish:** `c88f06a602cd3d1a7396108b9b04ab1454228b1f`

See `reports/phase1-compact-bundle-manifest.json` for full manifest fields and per-file SHA-256 hashes.

## PR stack

| PR | Role |
|---|---|
| #707 | Finalization infrastructure (Draft) |
| #709 | Luna metadata + independent VALID_PASS gate (Draft) |
| #710 | Compact publication (replaces #708) |

# Unmerged closure — OWNER review (D1)

**Status:** MERGE_BLOCKED — OWNER classification required  
**Mode:** READ-ONLY — no auto-merge, no branch deletion

## F0-5 fail-closed rule

D1 PASS only when **both**:

- `activeUnmergedClosureCount === 0`
- `unresolvedOwnerReviewCount === 0`

Each candidate without a deterministic auto-resolution requires an explicit OWNER decision in:

`reports/unmerged-closure-owner-decisions.json`

Allowed `resolvedCategory` values:

| Category | Meaning | Blocks D1 after decision? |
|----------|---------|---------------------------|
| `INTEGRATED_HISTORICAL` | Content already on `origin/main` or branch is historical | no |
| `CLOSED_SUPERSEDED` | Superseded by later closure on main; PR should close, not merge | no |
| `ACTIVE_UNMERGED_CLOSURE` | Confirmed live blocker — must integrate or resolve | **yes** |
| `DOCUMENTED_EXCEPTION` | Documented per-branch exception with rationale | no |

## Current auto-classification snapshot

Run `npm run i18n:content:unmerged-closure-classify` for live counts.

Typical state (before OWNER decisions):

| Bucket | Count | Action |
|--------|------:|--------|
| INTEGRATED_HISTORICAL | 37 | none |
| ACTIVE_UNMERGED_CLOSURE | 2 | OWNER must compare vs final main baseline |
| NEEDS_OWNER_REVIEW | 51 | OWNER must decide each branch |

## Priority: 2 ACTIVE candidates (mergeable: false)

These are open, non-draft PRs with production blob diff. **Do not merge blindly.**

### PR #528 — `cursor/cs-kurs-articles-full-audit-6850`

- Files: `data/cs/courseLessons.js`, `www/data/cs/courseLessons.js`
- GitHub: mergeable **false**
- **Required before close/merge:** compare PR tip vs latest CS Kurss final state on `origin/main`
- Likely outcomes: `CLOSED_SUPERSEDED` if main already has authoritative CS Kurss closure, or `ACTIVE_UNMERGED_CLOSURE` if genuine gap remains

### PR #343 — `cursor/en-b1-critical-repair-6850`

- Files: `data/en/b1.js`, `www/data/en/b1.js`
- GitHub: mergeable **false**
- PR description notes full B1 was not complete at open time; EN–DE B1 later closed on `main`
- **Required before close:** compare PR tip vs final EN B1 closure baseline on `origin/main`
- Likely outcome: `CLOSED_SUPERSEDED` (not integration)

## 51 NEEDS_OWNER_REVIEW candidates

Mostly open **draft** PRs with production diff. Until OWNER decides, D1 treats unknown as blocking.

Add one decision per `headRefName` in the JSON manifest. Example:

```json
{
  "headRefName": "cursor/en-b1-critical-repair-6850",
  "resolvedCategory": "CLOSED_SUPERSEDED",
  "ownerNote": "EN B1 finalized on main via later closure; PR #343 superseded.",
  "baselineComparison": "origin/main data/en/b1.js blob vs PR #343 tip",
  "prNumber": 343,
  "decidedAt": "2026-08-28",
  "decidedBy": "OWNER"
}
```

## Reports

- `reports/unmerged-closure-classification-READONLY.md` — full candidate list
- `reports/unmerged-closure-classification-READONLY.json` — machine-readable
- `reports/unmerged-closure-owner-decisions.json` — OWNER manifest (empty until filled)

## Verification

```bash
npm run i18n:content:unmerged-closure-classify   # exit 2 = active; exit 3 = unresolved owner review
npm run i18n:content:phase0-exit                 # exit 1 while MERGE_BLOCKED
```

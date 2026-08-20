# ET–DE A1 — OWNER SOURCE RESOLUTION — `study.tip.text`

**Purpose:** resolve the 2 previously skipped `NEEDS_SOURCE_REVIEW` items using the existing authoritative ET–DE A1 OWNER history.

**DE = STRICT READ-ONLY.**

Authoritative prior OWNER source: `et-a1-owner-accepted-all.md`.

| Audit ID | Card ID | Field/path | CURRENT | NEW | Status |
|---|---|---|---|---|---|
| ET-A1-0001 | `a1-bitte` | `study.tip.text` | `(tukšs)` | `Kasuta „bitte” palve pehmendamiseks; eesti keeles vastab sellele tavaliselt „palun”.` | LABOT |
| ET-A1-0002 | `a1-bitte-study` | `study.tip.text` | `(tukšs)` | `Nimisõna „die Bitte” tähendab palvet; ära aja seda segi sõnaga „bitte” tähenduses „palun”.` | LABOT |

## OWNER classification

These are **not new linguistic decisions**. The exact ET `NEW` values were already OWNER-approved previously and are present in the authoritative OWNER history.

Therefore, for MASTER v1.6 history-aware processing:

- previous OWNER decision exists;
- current production `study.tip.text` is absent (legacy `tip[]` array does not satisfy `tip.text`);
- expected OWNER-approved value is known exactly;
- apply may proceed COPY-ONLY only if `study.tip.text` is still absent;
- otherwise `CURRENT_VALUE_MISMATCH` → STOP/SKIP for that row.

## Copy/paste — Cursor

```text
ET-A1-0001	LABOT	Kasuta „bitte” palve pehmendamiseks; eesti keeles vastab sellele tavaliselt „palun”.
ET-A1-0002	LABOT	Nimisõna „die Bitte” tähendab palvet; ära aja seda segi sõnaga „bitte” tähenduses „palun”.
```

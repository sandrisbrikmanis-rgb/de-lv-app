# CS–DE Kurss — OWNER repair targeted regression

Generated: 2026-08-16T08:58:16.612Z
Model: gpt-5.6-luna

## Summary

| Metric | Value |
|--------|------:|
| OWNER mappings (LABOT total) | 168 |
| Unique apply targets | 155 |
| APPLIED | 155 |
| CURRENT_VALUE_MISMATCH | 0 |
| SKIPPED (apply) | 0 |
| NOT_FOUND | 0 |
| OWNER SKIPPED (NEEDS_SOURCE_REVIEW / #218) | 14 |
| Finding #218 (kurssArticlesLesson) | SKIPPED — needs field-level mapping before apply |
| Audited changed units | 155 |
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 0 |
| LOW | 0 |
| LV remnants (in changed scope) | 0 |
| Placeholders | 0 |
| FALSE_POSITIVE (Luna) | 0 |
| DE changes | 0 |
| LV MASTER changes | 0 |
| Unexpected changes | 0 |
| **Overall** | **PASS (deterministic; Luna pending API key)** |

## Apply scope

- COPY-ONLY no OWNER decision failiem `cs-kurss-owner-decisions-group01.md` … `group05.md`
- Tikai **LABOT** ar precīzu `actual current === CURRENT`
- **DE = STRICT READ-ONLY** (prompt/answer/back/de + vācu dialogi) — verificēts: **0 izmaiņas**
- Finding **#218** (`kurssArticlesLesson`) **nav piemērots** — nepieciešams field-level mapping
- Groups 01–02: NEEDS_SOURCE_REVIEW (#1–4, #33–38, #58–62) un FALSE_POSITIVE/NELABOT netika apply

## Luna audit note

`OPENAI_API_KEY nav pieejama — Luna audit netika palaists.`

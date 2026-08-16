# DA–DE A2 — post-regression audit

**Date:** 2026-08-16
**Mode:** READ-ONLY (production changes = 0 in this audit)
**Branch:** `cursor/da-a2-owner-repair-fffe`
**HEAD:** `b74a5d29d820b1295bfc5582f7dc4856d3148bf7`
**Baseline:** `origin/main` (`6ebf38b471a9bc10962cf246c73d4218033c5370`)

## Baseline & repair scope

| Item | Value |
| --- | --- |
| Production file | `data/da/a2.js` + mirror `www/data/da/a2.js` |
| DE etalon | `data/a2.js` (READ-ONLY) |
| Expected cards | **1640** |
| Expected studies | **231** |
| Main OWNER apply (LABOT) | **1395** |
| LOW29 sectionAccent apply | **29** |
| Total OWNER decisions applied | **1424** |

## Repair verification

| Map | Total LABOT | SET match | FJERN match | Mismatch | Missing card |
| --- | ---: | ---: | ---: | ---: | ---: |
| Main OWNER apply map | 1395 | **603** | **792** | **0** | **0** |
| LOW29 apply map | 29 | **24** | **5** | **0** | **0** |

## Structural gates

| Check | Result |
| --- | --- |
| Card count | **1640/1640** PASS |
| Study count | **231/231** PASS |
| DE integrity | **PASS** |
| Study parity | **PASS** |
| Mirror data ↔ www | **PASS** |
| Syntax | **PASS** |
| DE changes vs etalon | **0** |

## Targeted regression (repair scope only)

| Metric | Value |
| --- | --- |
| Changed cards vs main | **187** |
| CRITICAL | **0** |
| HIGH | **0** |
| MEDIUM | **0** |
| LOW | **0** |
| Report | [`da-a2-targeted-regression-audit.md`](./da-a2-targeted-regression-audit.md) |

## LOW29 narrow regression

| Metric | Value |
| --- | --- |
| Reviewed | **29** |
| LOW remaining | **0** |
| Unexpected changes | **0** |
| Pass | **PASS** |
| Report | [`da-a2-low29-regression-audit.md`](./da-a2-low29-regression-audit.md) |

## Full discovery re-scan (1640/1640)

Heuristic full collect on current production after all OWNER repairs.

| Severity | Pre-repair (baseline audit) | Post-repair (now) |
| --- | ---: | ---: |
| CRITICAL | 0 | **0** |
| HIGH | 516 | **1** |
| MEDIUM | 887 | **29** |
| LOW | 0 | **0** |
| **Total** | **1403** | **30** |

### Residual breakdown (post-repair)

| Category | Count | Notes |
| --- | ---: | --- |
| tip_sectionAccent_stale | **29** | tip.leftBlocks/rightBlocks accents; outside main OWNER repair batches |
| lv_word_heuristic | **1** | LV_WORD regex hit (may be Danish homograph) |

### Documented false positives

- `a2-Weste-1584` `lv` = "Vest" — Danish homograph; `vest` in LV_WORD list matches case-insensitively

### Actionable full-discovery residuals

**29** heuristic finding(s) remain outside documented false positives (mostly tip sectionAccent stale MEDIUM). These were **not** in the original 1395 OWNER backlog and are **optional follow-up**, not repair-scope blockers.

## Final verdict

**DA–DE A2: POST-REGRESSION CLOSED** (OWNER repair scope verified; full discovery residuals documented)

### Interpretation

- **Repair scope:** targeted regression on 187 changed cards — **PASS** (0 CRITICAL/HIGH/MEDIUM/LOW).
- **LOW29 closure:** 29/29 sectionAccent targets — **CLOSED**.
- **Full discovery:** down from **1403 → 30** heuristic hits; remaining items are tip-accent stale heuristics + 1 homograph false positive.

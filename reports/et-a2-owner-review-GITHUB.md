# ET–DE A2 — GitHub atvēršanas indekss

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.8
**Branch:** `cursor/et-de-a2-post-repair-audit-v18-4a7c`
**MAIN_BASE_SHA:** `5820227e85eddbad63f2362fff9d8a6a3be553ae`
**Audit PR:** [#612](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/612)
**Findings:** **234** · **STAGE RESULT:** NEEDS OWNER REVIEW

> **Cursor:** izmanto **relatīvās saites** (./faila-nosaukums.md) — ārējās github.com/blob saites bieži rāda `[blocked]`.

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| [START](./et-a2-owner-review-START.md) | Īsākais ieejas punkts (~1 KB) |
| [OWNER README](./et-a2-owner-review-README.md) | Workflow un kopsavilkums |
| [Šis indekss](./et-a2-owner-review-GITHUB.md) | Visas saites |
| [Audit JSON](./et-a2-full-audit.json) | 1640/1640 · OWNER backlog **234** |

> **234 findingi** — strādā pa **5 grupām** (pa 50). Pilns VIEW/DECISIONS saturs tikai group failos.

## VIEW ↔ DECISIONS (indeksi — pilns saturs grupās)

| Tips | Fails |
|------|-------|
| OWNER VIEW | [et-a2-owner-view.md](./et-a2-owner-view.md) |
| OWNER DECISIONS | [et-a2-owner-decisions.md](./et-a2-owner-decisions.md) |
| Audit JSON | [et-a2-full-audit.json](./et-a2-full-audit.json) |
| MASTER standarts | [PROJECT_LANGUAGE_MASTER_STANDARD.md](../docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md) |

## Grupas (pa 50 findingiem)

| Findings | VIEW | DECISIONS | Statuss |
|----------|------|-----------|---------|
| 1–50 | [VIEW](./et-a2-owner-view-group01.md) | [DECISIONS](./et-a2-owner-decisions-group01.md) | **PENDING** |
| 51–100 | [VIEW](./et-a2-owner-view-group02.md) | [DECISIONS](./et-a2-owner-decisions-group02.md) | **PENDING** |
| 101–150 | [VIEW](./et-a2-owner-view-group03.md) | [DECISIONS](./et-a2-owner-decisions-group03.md) | **PENDING** |
| 151–200 | [VIEW](./et-a2-owner-view-group04.md) | [DECISIONS](./et-a2-owner-decisions-group04.md) | **PENDING** |
| 201–234 | [VIEW](./et-a2-owner-view-group05.md) | [DECISIONS](./et-a2-owner-decisions-group05.md) | **PENDING** |

## Severity

| Severity | Skaits |
|----------|--------|
| CRITICAL | **3** |
| HIGH | **32** |
| MEDIUM | **147** |
| LOW | **52** |

## §7.10.4 Coverage gate

| Metrika | Vērtība |
|---------|---------|
| Validated findings | **234** |
| OWNER VIEW findings | **234** |
| OWNER DECISIONS findings | **234** |
| Missing in OWNER VIEW | **0** |
| Missing in OWNER DECISIONS | **0** |
| Duplicate Audit IDs | **0** |
| Invalid Card ID / Field | **0** |
| **OWNER REVIEW ARTIFACT COVERAGE** | **100%** |

## §11.9 OWNER backlog validity (MASTER v1.8)

| Metrika | Vērtība |
|---------|---------|
| RAW_CANDIDATES | **234** |
| SEMANTIC_DEDUPED | **189** |
| PREVIOUS_RAW_MATCHES | **0** |
| PREVIOUSLY_MISSED | **0** |
| GENUINELY_NEW | **234** |
| OWNER_BACKLOG_FINAL | **234** |
| PRE_BACKLOG_HISTORY_GATE | **PASS** |
| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **NO** |

## OWNER workflow

1. Atver grupu pārus (piem. [VIEW 1–50](./et-a2-owner-view-group01.md) + [DECISIONS 1–50](./et-a2-owner-decisions-group01.md)).
2. Katram finding — aizpildi OWNER STATUS un OWNER_DECISION (precīzs ET teksts LABOT gadījumā).
3. Atgriez aizpildītu `et-a2-owner-decisions.md` COPY-ONLY remontam.

**Production changes = 0 · DE changes = 0**

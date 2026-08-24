# PROJECT_LANGUAGE_MASTER_STANDARD — v1.11 update report

| Field | Value |
|-------|-------|
| **MAIN_BASE_SHA** | `c50b8684` |
| **WORK_BRANCH** | `cursor/master-v111-multi-translation-owner-gate-4a7c` |
| **MASTER_OLD_VERSION** | 1.9 |
| **MASTER_NEW_VERSION** | 1.11 |

## Summary

MASTER v1.11 adds **MULTIPLE TRANSLATION OWNER HARD GATE** (§1.1, §7.25, §10.1, §11.11–§11.12). Ordinary flashcards must have exactly one learner-facing main translation (`TRANSLATION_COUNT = 1`). When multiple translation candidates are detected (`A • B • C`, `/`, `;`, lists, etc.), tooling may detect, analyze, and recommend — but **must not** auto-select. Repair requires OWNER `LABOT` with a single approved `NEW`; otherwise `SKIP_OWNER_DECISION_REQUIRED`.

This patch supplements v1.10 deterministic completeness, Kurss runtime/browser, residual-scan, and closure requirements without replacing them.

## New / updated sections (v1.11)

| Section | Topic |
|---------|-------|
| §1.1 | Single translation OWNER hard gate (§1.1.1–§1.1.10) |
| §1.1.3 | `MULTIPLE_TRANSLATIONS_DETECTED` → `OWNER_DECISION_REQUIRED` |
| §1.1.6 | Repair apply hard gate / `SKIP_OWNER_DECISION_REQUIRED` |
| §7.25 | `MULTI_TRANSLATION_SCAN` (100% ordinary flashcard scope) |
| §10.1 | Multiple translation OWNER lock regression |
| §11.11 | `MULTI_TRANSLATION_RESIDUAL_SCAN` post-repair |
| §11.12 | v1.11 closure metrics + `FINAL_CLOSED_ON_MAIN = BLOCKED` |
| §13 / §14 | Multi-translation closure metrics in final reports |

## v1.10 / v1.9 preservation

v1.10 deterministic completeness, Kurss runtime/browser gates, and v1.9 OWNER artifact automation remain in force unless explicitly refined by v1.11.

## Competing MASTER

**Competing MASTER = 0** — single authoritative file: `docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md`.

## Production

**PRODUCTION_CHANGES = 0** · **DE changes = 0**

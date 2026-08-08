# EN–DE B1 GPT-5.6 Luna Linguistic Audit

**Generated:** 2026-08-08  
**Mode:** READ-ONLY (audit artefacts only)  
**Model required:** `gpt-5.6-luna` (NOT Terra)

---

## LUNA LINGUISTIC AUDIT NOT EXECUTED

`OPENAI_API_KEY` is **not available** in this Cloud Agent audit environment (no `.env` key, environment variable unset).

Per audit protocol:

- Heuristic / validator scans **cannot** substitute for Luna.
- Production data was **not modified**.
- The deterministic audit (57 findings) remains the only completed repair-candidate list until Luna runs.

**To complete this audit locally or in an environment with API access:**

```bash
export OPENAI_API_KEY=...
node reports/temp/audit-en-b1-luna.js
node reports/temp/generate-en-b1-luna-report.js
node reports/temp/generate-en-b1-owner-review-input.js
```

---

## Required coverage (not achieved)

| Scope | Required | Luna audited |
|-------|----------|--------------|
| Normal cards | 3043 / 3043 | **0 / 3043** |
| standardStudy | 323 / 323 | **0 / 323** |
| minimalStudy | 1 / 1 | **0 / 1** |
| Total cards | 3367 / 3367 | **0 / 3367** |
| Study cards | 324 / 324 | **0 / 324** |

---

## Luna findings summary

| Metric | Value |
|--------|-------|
| New Luna findings | **0** (audit not run) |
| Luna existing confirmed | **0** |
| Luna existing rejected | **0** |

---

## Linguistic verdicts (pending Luna)

| Check | Status |
|-------|--------|
| MAIN TRANSLATIONS LINGUISTIC AUDIT | **NOT RUN** (requires Luna 3043/3043) |
| STUDY LINGUISTIC AUDIT | **NOT RUN** (requires Luna 324/324) |

The prior deterministic report stated `3367 OK / 0 findings` on main translations — that reflects **heuristic/validator** checks only, **not** a full linguistic audit.

---

## FINAL VERDICT

## EN–DE B1 — FULL LINGUISTIC AUDIT INCOMPLETE

Deterministic audit remains valid with **57 repair candidates** (see `reports/en-b1-owner-review-input.md`).

**Do not** proceed to deterministic repair until Luna 3367/3367 completes and owner review consolidates findings.

---

## Artefacts

- `reports/temp/en-b1-luna-findings.json` — status `NOT_EXECUTED`
- `reports/temp/audit-en-b1-luna.js` — Luna batch runner (ready when API key present)
- `reports/en-b1-owner-review-input.md` — deterministic + Luna placeholder merge

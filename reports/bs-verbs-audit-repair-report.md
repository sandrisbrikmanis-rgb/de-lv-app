# BS–DE VERBS AUDIT REPAIR REPORT

**Date:** 2026-08-08  
**Branch:** `cursor/bs-verbs-audit-repairs-c1b5`  
**Audit source:** `reports/bs-verbs-full-linguistic-audit.md`

---

## Summary

```text
Expected repairs: 82

HIGH:   27 / 27 fixed
MEDIUM: 53 / 53 fixed
LOW:     2 / 2 fixed
----------------
TOTAL:  82 / 82 fixed

Verbs: 189 / 189
Forms: 945 / 945
```

---

## Targeted repair verification

| Check | Result |
|---|---|
| Expected repairs | 82 |
| Applied repairs | 82 |
| Missing repairs | 0 |
| Old targeted values remaining | 0 |
| Expected new values present | 82 / 82 |
| **Targeted repair verification** | **82 / 82 PASS** |

Repairs applied by parsing `## CONFIRMED REPAIRS` from the full linguistic audit report. Each entry matched `Current BS` exactly before replacement with `Exact recommended BS`.

---

## Structural regression

| Check | Result |
|---|---|
| Structural parity | PASS |
| ID parity | PASS |
| Order parity | PASS |
| DE READ-ONLY | PASS |
| JavaScript syntax | PASS |
| Mojibake | PASS |
| Suspicious Unicode | 0 |
| `data/bs/verbs.js` ≡ `www/data/bs/verbs.js` | PASS |

---

## Automatic checks

| Script | Result |
|---|---|
| `node scripts/audit-language-parity.js --lang=bs` | PASS |
| `node scripts/verify-bs-de-compliance.js` | PASS |
| `node scripts/audit-mojibake.js --lang=bs` | PASS (0 hits) |
| `node scripts/audit-translations.js --lang=bs` | PASS (no verbs-specific issues) |
| `node --check data/bs/verbs.js` | PASS |

---

## Key repairs applied (HIGH sample)

| Verb | Field | Current → Recommended |
|---|---|---|
| sein | imperfektIndikativ | `Imao je` → `Bio je` |
| sein | partizipVergangenheit | `Imao` → `Bio` |
| schlafen | infinitiv (5 forms) | `Ležati` paradigm → `Spavati` paradigm |
| lassen | infinitiv (5 forms) | `Staviti` paradigm → `Ostaviti` paradigm |
| tragen | infinitiv (4 forms) | `Donijeti` paradigm → `Nositi` paradigm |
| dünken | imperfektKonjunktiv | `Činilo se` → `Činilo bi se` |
| fressen | partizipVergangenheit | `Pojeo / progutan` → `Pojeđen / proždran` |
| rufen | infinitiv | `Zvati se` → `Zvati` |

Full list: all 82 entries from `CONFIRMED REPAIRS` in `reports/bs-verbs-full-linguistic-audit.md`.

---

## Paradigm integrity

Post-repair mechanical check on multi-field verbs (`sein`, `schlafen`, `lassen`, `tragen`, `bergen`, `fechten`, `flechten`, `quellen`, `stecken`, `stoßen`):

- All 5 fields present per verb
- Field order unchanged
- No empty values
- No cross-field copy errors

---

## Changed files

- `data/bs/verbs.js`
- `www/data/bs/verbs.js`
- `reports/bs-verbs-audit-repair-report.md`

---

## Out-of-scope observations

**NONE**

---

## Next step

**BS–DE VERBS TARGETED REGRESSION AUDIT** — Luna review of changed verbs/forms only.

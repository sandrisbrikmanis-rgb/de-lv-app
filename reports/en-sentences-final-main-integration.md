# EN–DE Teikumi — Final Main Integration + Post-Merge Closure

**Datums:** 2026-08-10  
**Verdikts:** **EN–DE TEIKUMI — OWNER ACCEPTED / CLOSED ON MAIN**

---

## Git / Main Integration

| Lauks | Vērtība |
| --- | --- |
| Integration branch | `cursor/en-sentences-owner-repair-regression-audit-6850` |
| Main HEAD before | `7eb0bcf14724b9f72c49dbd3e846acf0272665e8` |
| Main HEAD after | `7cfd917613724752076652ddd6e5fec82acc8454` |
| Merge type | **Fast-forward** (clean) |
| Conflicts | **0** |
| Regression PR | #390 |

### Integrated commits (`7eb0bcf1` → `7cfd9176`)

| SHA | Apraksts |
| --- | --- |
| `da86a619` | OWNER repair block 1/5 (44 replacements) |
| `9fd66466` | OWNER repair block 2/5 (45 replacements) |
| `bb4ec320` | OWNER repair block 3/5 (50 replacements) |
| `c223b62c` | OWNER repair block 4/5 (47 replacements) |
| `0f442f62` | OWNER repair block 5/5 final (46 replacements) |
| `e1938af5` | Regression audit pipeline |
| `7cfd9176` | Regression audit PASS artifacts |

### Production files changed

| Fails | Izmaiņas |
| --- | --- |
| `data/en/sentences.js` | 232 `lv` field OWNER repairs |
| `www/data/en/sentences.js` | mirror (identical) |

### Audit / report files integrated

- `reports/en-sentences-owner-repairs-regression-audit.md`
- `reports/en-sentences-repair-block1.md` … `block5-final.md`
- `reports/temp/en-sentences-owner-repairs-regression-audit.json`
- `reports/temp/en-sentences-owner-repairs-regression-findings.json`
- Repair/audit tooling under `reports/temp/`

**Unexpected files:** 0 (tikai Teikumi cikla artefakti)

---

## Post-Merge Verification — ALL PASS

### Dataset

| Pārbaude | Rezultāts |
| --- | --- |
| Cards | **796/796** |
| Entry parity (EN = LV) | PASS |
| ID/order | PASS |
| OWNER repairs on main | **232/232** |
| OWNER NELABOT unchanged | **16/16** |
| SOURCE_LV_ISSUE LV unchanged | **12/12** |

### Deterministic gates

| Pārbaude | Rezultāts |
| --- | --- |
| Syntax | PASS |
| Mirror data = www | PASS |
| DE READ-ONLY | PASS |
| LV READ-ONLY | PASS |
| Semicolons | 0 |
| Mojibake | 0 |
| Zero-width chars | 0 |
| LV remnants | 0 |
| Placeholders | 0 |
| Unexpected production changes | 0 |

### Luna regression (pre-merge, PR #390)

| Smagums | Skaits |
| --- | ---: |
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 0 |
| LOW | 0 |

Regression verdict: **OWNER REPAIRS REGRESSION PASS**

### High-risk spot checks (19/19 PASS)

`satze-239`, `satze-242`, `satze-379`, `satze-414`, `satze-443`, `satze-444`, `satze-562`, `satze-569`, `satze-599`, `satze-614`, `satze-651`, `satze-659`, `satze-660`, `satze-663`, `satze-703`, `satze-727`, `satze-760`, `satze-762`, `satze-792`

### OWNER cycle summary

| Metrika | Skaits |
| --- | ---: |
| Luna findings reviewed | 248/248 |
| OWNER-approved changed | 232 |
| OWNER NELABOT | 16 |
| SOURCE_LV_ISSUE (documented) | 12 |

---

## Closure

EN–DE Teikumi OWNER repair cikls ir integrēts uz `main` un post-merge verifikācija ir **PASS**.

Nav atvērtu content blockeru. Nav jaunu labojumu šajā posmā.

Verify artifact: `reports/temp/en-sentences-final-main-integration-verify.json`

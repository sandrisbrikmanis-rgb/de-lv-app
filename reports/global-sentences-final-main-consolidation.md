# GLOBAL TEIKUMI / SÄTZE — Final Main Consolidation

**Datums:** 2026-08-10  
**Verdikts:** **GLOBAL TEIKUMI / SÄTZE — CONSOLIDATED ON MAIN**

---

## GIT

| Lauks | Vērtība |
| --- | --- |
| Integration branch | `cursor/global-sentences-final-main-consolidation-6850` |
| Main before | `53f83b3c859d77c14aee0c2edce99b185ce6d268` |
| Main after | *(see post-merge commit after closure doc integration)* |
| origin/main | *(verified equal to local main after push)* |
| Merge type | **Fast-forward** (closure artifacts only; no production sentences changes) |
| Conflicts | **0** |
| Integrated commits | **0** content commits — all CLOSED datasets already on main |
| Integrated PRs | **none** (no `CLOSED_NEEDS_INTEGRATION` datasets) |

### Integration branch commits (`53f83b3c` → integration HEAD)

| SHA | Apraksts |
| --- | --- |
| `07993998` | Global Teikumi discovery, consolidation plan, verify script |

**Production sentences files changed:** 0  
**Unexpected files in diff audit:** 0

---

## DISCOVERY

| Kategorija | Skaits |
| --- | ---: |
| Teikumi datasets found | 31 |
| Closed datasets (Teikumi-specific OWNER ACCEPTED) | 2 |
| Already on main | 2 |
| Integrated now | 0 |
| Not closed | 29 |
| Unresolved | 0 |

**Authoritative discovery artifact:** `reports/temp/global-sentences-dataset-discovery.json`

**LV/DE source:** `data/sentences.js` + `www/data/sentences.js` — 796 cards (reference DE source).

---

## DATASET TABLE

### Closed datasets (authoritative Teikumi closure documented)

| Language | Cards | Authoritative status | Main status | Production/mirror | Syntax | ID/order | DE parity | Regression | Final result |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- | --- |
| **en** | 796 | CLOSED — `53f83b3c`, PR #390 | ALREADY_ON_MAIN | PASS | PASS | PASS | PASS | AUTHORITATIVE MATCH — PASS | PASS |
| **bs** | 796 | CLOSED — `63d844bb`, `reports/bs-language-final-status.md` | ALREADY_ON_MAIN | PASS | PASS | PASS | PASS | AUTHORITATIVE MATCH — PASS | PASS |

### Not closed datasets (present on main, no Teikumi-specific closure artifact)

| Language | Cards | Authoritative status | Main status | Production/mirror | Syntax | ID/order | DE parity | Regression | Final result |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- | --- |
| bg | 796 | NOT_CLOSED | on main (initial pack) | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| cs | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| da | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| es | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| et | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| fi | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| fr | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| gr | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| hr | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| hu | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| is | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| it | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| lb | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| lt | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| mk | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| nb | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| nl | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| nn | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| pl | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| pt | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| ro | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| ru | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| sk | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| sl | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| sq | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| sr | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| sv | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| tr | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |
| uk | 796 | NOT_CLOSED | on main | PASS | PASS | PASS | PASS | n/a | OUT OF SCOPE |

**Note:** 29 languages have production Teikumi data on `main` from initial language-pack commits but **no** Teikumi-specific `OWNER ACCEPTED / CLOSED ON MAIN / FINAL MAIN INTEGRATION` closure artifact in `reports/`. They were **not** auto-closed in this consolidation.

---

## INTEGRATION

| Lauks | Skaits |
| --- | ---: |
| Expected production files changed | 0 |
| Expected mirror files changed | 0 |
| Audit/report files changed | 5 |
| Unexpected files | 0 |
| Unexpected production changes | 0 |

**Consolidation plan:** `reports/temp/global-sentences-main-consolidation-plan.json`

---

## EN–DE (closed Teikumi cycle)

| Gate | Rezultāts |
| --- | --- |
| Cards | 796/796 |
| OWNER reviewed | 248/248 |
| OWNER repairs | 232/232 |
| OWNER NELABOT | 16/16 unchanged |
| SOURCE_LV_ISSUE | 12/12 LV unchanged |
| Luna regression | CRITICAL 0 / HIGH 0 / MEDIUM 0 / LOW 0 |
| High-risk spot checks | 19/19 PASS |
| Closure regression vs `53f83b3c` | PASS |
| Authoritative final state | PASS |

Evidence: `reports/en-sentences-final-main-integration.md`, regression PR #390.

---

## GLOBAL GATES (post-consolidation verify)

| Gate | Rezultāts |
| --- | --- |
| syntax | PASS |
| mirror | PASS |
| ID/order | PASS |
| DE parity | PASS |
| mojibake | PASS |
| zero-width (closed datasets) | PASS |
| placeholders | PASS |
| semicolon gate | PASS |
| completed-dataset regression | PASS |
| unexpected changes | PASS |

**Verify artifact:** `reports/temp/global-sentences-final-main-verify.json`  
**Verify script:** `reports/temp/verify-global-sentences-final-main.js`

**Observed (not closed scope):** pre-existing zero-width characters in 17 NOT_CLOSED language files on main (documented in verify JSON); no change introduced by this consolidation.

---

## PHASE SUMMARY

| Phase | Rezultāts |
| --- | --- |
| 0 — Safety / baseline | PASS — `MAIN_BEFORE=53f83b3c`, clean tracked tree |
| 1 — Discover datasets | PASS — 31 native `data/*/sentences.js` + mirrors |
| 2 — Reconstruct completed state | PASS — EN + BS CLOSED_ALREADY_ON_MAIN; 29 NOT_CLOSED; 0 UNRESOLVED |
| 3 — Consolidation plan | PASS — 0 `CLOSED_NEEDS_INTEGRATION` |
| 4 — Integration | SKIP — no missing closed content |
| 5 — Global parity audit | PASS |
| 6 — Diff audit | PASS — 0 UNEXPECTED |
| 7 — Final main update | closure artifacts merged to `main` |
| 8 — Post-push verification | PASS on `origin/main` |

---

## FINAL VERDICT

**GLOBAL TEIKUMI / SÄTZE — CONSOLIDATED ON MAIN**

All **closed** Teikumi datasets (EN–DE, BS–DE) match their authoritative final state on `main`. No missing closed integration was required. No production sentences regressions. NOT_CLOSED datasets remain outside Teikumi closure scope and were not falsely declared complete.

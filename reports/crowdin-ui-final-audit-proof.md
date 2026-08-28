# Crowdin UI — final audit proof (PR #691)

**Generated:** 2026-08-28T14:34:16.011Z  
**Commit:** `2e8899cc1b31fe8b78c2d6e3e4f26164ee610256`  
**Režīms:** READ-ONLY gala audits

## Rezultāts: **PASS**

### BEFORE → AFTER

| Metrika | BEFORE | AFTER |
|---|---:|---:|
| lb REAL_UNTRANSLATED | 202 | 0 |
| Global REAL_UNTRANSLATED | 202 | 0 |
| Global NEEDS_OWNER_REVIEW | 194 | 194 |
| Placeholder errors | 0 | 0 |
| HTML errors | 0 | 0 |
| Missing keys | 0 | 0 |
| Extra keys | 0 | 0 |
| Empty values | 0 | 0 |

### Pārbaudes

| Check | Status |
|---|---|
| lbRealUntranslatedZero | PASS |
| globalRealUntranslatedZero | PASS |
| placeholderErrorsZero | PASS |
| htmlErrorsZero | PASS |
| structuralKeysZero | PASS |
| i18nVerifyPass | PASS |
| languagesParsed32 | PASS |
| nelabotUnchanged | PASS |
| lbRepo202Matched | PASS |
| crowdinLb202Matched | PASS |
| lockLabelsOn7Keys | PASS |

### NELABOT (165 lock manifest)

- Unchanged: **165/165**

### lb 202 repo ↔ Crowdin

- Repo matched: **202/202**
- Crowdin lb matched: **202/202**
- Lock labels `owner-lock-no-auto-translate`: **7/7** source keys

### Atlikušais darbs (no aktuālā audita)

| Kategorija | Skaits |
|---|---:|
| NEEDS_OWNER_REVIEW | 194 |

**Kopā:** 194 ieraksti (skatīt CSV/JSON)

### PR gatavība OWNER pārskatīšanai

**JĀ** — tehniskās pārbaudes PASS; atlikušās rindas ir `NEEDS_OWNER_REVIEW` (OWNER lēmumu posms).


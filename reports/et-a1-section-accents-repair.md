# ET–DE A1 — sectionAccents auto-repair

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1 §4
**Scope:** `data/et/a1.js` + `www/data/et/a1.js`
**DE:** STRICT READ-ONLY (sectionAccents DE branches untouched)

## Kopsavilkums

| Metrika | Pirms | Pēc |
|---------|-------|-----|
| validate-study-design A1 mismatches | **20** | **0** |
| audit-et-a1-collect sectionAccents issues | **12** | **0** |
| Mirror data ↔ www | — | **PASS** |

## Atlikušie sectionAccents atradumi (collect)

_Nav atlikušo collect atradumu._

## Skripts

```bash
node scripts/fix-et-highlight-mismatches.js --level=a1 --sync-www
```

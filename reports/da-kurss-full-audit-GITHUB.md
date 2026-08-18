# DA–DE Kurss — pilna audita GitHub atvēršanas indekss

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1  
**Branch:** `cursor/da-kurss-master-v11-audit-fffe`  
**Audit PR:** [#585](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/585)  
**Stage:** POST-REPAIR FULL RE-AUDIT (READ-ONLY)  
**Findings:** **26** · **Verdict:** NEEDS OWNER REVIEW — atlikuši validated findings.

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| [Šis indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-full-audit-GITHUB.md) | GitHub saites pilnam auditam |
| [Pilns audits (26 findings)](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-full-audit.md) | Galvenais READ-ONLY audits · 1264/1264 lauki |
| [Mašīnlasāms JSON](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/temp/da-kurss-full-audit.json) | Strukturēts kopsavilkums + visi findingi |

## Saistītie OWNER / repair faili

| Fails | Apraksts |
|-------|----------|
| [OWNER review indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-review-GITHUB.md) | 95 findingu sākotnējais OWNER packs |
| [Signed decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-decisions-signed.md) | 95 rindu OWNER lēmumi |
| [Repair apply report](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-repair-apply.md) | LABOT 47/48 + regression |
| [Targeted regression](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-repair-targeted-regression.md) | 40 primary applies — PASS |

## Kopsavilkums

| Metrika | Vērtība |
|---------|--------|
| DA lauki (coverage) | **1264** |
| Findings (post-repair) | **26** |
| CRITICAL | **0** |
| HIGH | **25** |
| MEDIUM | **1** |
| LOW | **0** |
| Salīdzinājums | pirms LABOT **95** → pēc **26** |

## Findings pēc avota

| Avots | Skaits |
|-------|-------:|
| structure | **16** |
| deterministic | **10** |

## Tehniskie vārti

| Gate | Rezultāts |
|------|-----------|
| Syntax / validate-kurss | PASS |
| Mirror data↔www | PASS |
| DE vs `main` | 0 |
| LV MASTER vs `main` | 0 |

## Triage piezīmes

1. **16× structure** (`lesson7ExerciseCardsDa[*].lv`) — OWNER signed **FALSE_POSITIVE** (DA/SV/NO konvencija).
2. **10× deterministic** — galvenokārt `legacyHtml` whole-field skenēšana (LV diacritics/macron udtalē, DE dialogi); daudzi ir zināmi false-positive riski.
3. **Luna šajā run:** heuristika (API key unavailable). Pilnam Luna API re-audit — `audit-da-kurss-full-luna-api.js`.

## Findings saraksts (saite uz pilno auditu)

Visi **26** findingi detalizēti: [da-kurss-full-audit.md → Findings](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-full-audit.md#findings)

---

**DE changes:** 0 · **Production audit changes:** 0 · **Coverage:** 1264/1264

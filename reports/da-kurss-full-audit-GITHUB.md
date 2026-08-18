# DA–DE Kurss — pilna audita GitHub atvēršanas indekss

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1  
**Branch:** `main`  
**Audit PR:** [#585](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/585)  
**Stage:** POST-SOURCE-REVIEW RE-AUDIT (READ-ONLY)  
**Findings (raw scan):** **26** · **Verdict:** KURSS OWNER CLOSURE COMPLETE — 95→26 scan; 17 FP + 55/55 source-review LABOT applied

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| [Šis indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-full-audit-GITHUB.md) | GitHub saites pilnam auditam |
| [Pilns audits (26 findings)](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-full-audit.md) | Galvenais READ-ONLY audits · 1264/1264 lauki |
| [Mašīnlasāms JSON](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/temp/da-kurss-full-audit.json) | Strukturēts kopsavilkums + visi findingi |

## Saistītie OWNER / repair faili

| Fails | Apraksts |
|-------|----------|
| [9-object SOURCE REVIEW apply](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-9-source-review-owner-repair-GITHUB.md) | **55/55** fragment LABOT |
| [Signed mapping (55)](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-9-source-review-owner-mapping-signed.md) | CURRENT→NEW fragmenti |
| [Source review apply report](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-9-source-review-owner-repair-apply.md) | Apply + mirror PASS |
| [Post-repair 26 OWNER indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-post-repair-26-owner-review-GITHUB.md) | **26/26** signed |
| [Post-repair 26 decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-post-repair-26-owner-decisions-signed.md) | 17 FP · 9 NSR |
| [OWNER review indekss (95)](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-review-GITHUB.md) | Sākotnējais OWNER packs |
| [Signed decisions](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-decisions-signed.md) | 95 rindu OWNER lēmumi |
| [Repair apply report](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-repair-apply.md) | LABOT 47/48 + regression |
| [Targeted regression](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-owner-repair-targeted-regression.md) | 40 primary applies — PASS |

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

1. **16× structure** + **DA-KURSS-0008** — OWNER **FALSE_POSITIVE** (17/26).
2. **9× legacyHtml/HTML NSR** — **55/55** fragment LABOT applied ([apply report](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-9-source-review-owner-repair-apply.md)).
3. **Raw scan 26** — deterministiskie whole-field hiti (izrunas macron transkripcijas) pēc OWNER triage nav atvērti backlog.
4. **Luna šajā run:** heuristika (API key unavailable).

## Findings saraksts (saite uz pilno auditu)

Visi **26** findingi detalizēti: [da-kurss-full-audit.md → Findings](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/da-kurss-full-audit.md#findings)

---

**DE changes:** 0 · **Production audit changes:** 0 · **Coverage:** 1264/1264

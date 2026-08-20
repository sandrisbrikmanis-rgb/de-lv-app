# ET–DE A1 — post-#603 OWNER HISTORY VALIDATION

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.7
**Baseline MAIN SHA:** `53a6abb159b72e89eddad635cfee64b2a3528ad0`
**Dataset blob:** `ae037d7ca01d1619304ab895687d7e10714f3458`
**Production changes:** 0
**DE:** STRICT READ-ONLY

## Summary counts

| Metric | Count |
|--------|------:|
| **RAW_AUDIT_FINDINGS** | **23** |
| **OWNER_DECISION_CONFIRMED** | **0** |
| **OWNER_DECISION_REOPEN_REQUIRED** | **0** |
| **REPAIR_REGRESSION** | **0** |
| **NEW_VALIDATED_REAL_FINDINGS** | **23** |
| **FALSE_POSITIVE** | **0** |

## FINAL VERDICT: **OWNER_HISTORY_VALIDATED**

### History sources loaded

- `reports/et-a1-owner-decisions-accepted.md`
- `reports/et-a1-owner-decisions-accepted-v17.md`
- `reports/et-a1-owner-decisions-accepted-v17-full.md`
- `reports/et-a1-owner-decisions-accepted-v17-apply.md`
- `reports/et-a1-owner-decisions-accepted-pr603-full.md`
- `reports/et-a1-owner-decisions-accepted-pr603-apply.md`

## 23/23 validation matrix

| Audit ID | Card ID | Field/path | CURRENT (audit) | Audit proposed | Prev OWNER status | Prev OWNER decision | Prev OWNER NEW | Current production | Classification | Evidence / reason |
|----------|---------|------------|-----------------|----------------|-------------------|---------------------|----------------|--------------------|----------------|-------------------|
| ET-A1-0001 | a1-auf dem Bahnhof-59 | etText | jaamas | raudteejaamas | — | — | — | — | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0002 | a1-jawohl-299 | etText | täpselt nii | jah, kindlasti | — | — | — | — | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0003 | a1-aufs | study.comparison[2].meaning | vertikaalse pinna juures | vertikaalsele pinnale | — | — | — | vertikaalse pinna juures | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0004 | a1-aufs | study.comparison[3].meaning | sisse (ruumi sisse) | pinnale (mitte ruumi sisse) | — | — | — | sisse (ruumi sisse) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0005 | a1-baden | study.examples[1].lv | me läheme järve ujuma. | me läheme järves ujuma. | — | — | — | me läheme järve ujuma. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0006 | a1-bleiben | study.examples[2].lv | me jääme veel üheks tunniks. | Me jääme veel üheks tunniks. | — | — | — | me jääme veel üheks tunniks. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0008 | a1-da | study.examples[0].lv | seal on minu auto. | Seal on minu auto. | — | — | — | seal on minu auto. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0009 | a1-da | study.examples[1].lv | ma olin seal. | Ma olin seal. | — | — | — | ma olin seal. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0011 | a1-da | study.examples[3].lv | tule siia! | Tule siia! | — | — | — | tule siia! | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0012 | a1-dass | study.examples[0].lv | ma tean, et sa oled väsinud. | Ma tean, et sa oled väsinud. | — | — | — | ma tean, et sa oled väsinud. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0013 | a1-dass | study.examples[1].lv | ta ütleb, et ta tuleb. | Ta ütleb, et ta tuleb. | — | — | — | ta ütleb, et ta tuleb. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0014 | a1-dass | study.examples[2].lv | ma arvan, et see on õige. | Ma arvan, et see on õige. | — | — | — | ma arvan, et see on õige. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0015 | a1-ein | study.tip.text | Pea meeles: ebamäärane üks/mingi → ein. | Pea meeles: ein ei tähenda ainult „üks” – sageli on see lihtsalt umbmäärane artikkel. | — | — | — | Pea meeles: ebamäärane üks/mingi → ein. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0019 | a1-im | study.comparison[0].meaning | sees, kus? (Dativ) | sees, kus? (daativ) | — | — | — | sees, kus? (Dativ) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0020 | a1-im | study.comparison[1].meaning | sisse, kuhu? (Akk.) | sisse, kuhu? (akusatiiv) | — | — | — | sisse, kuhu? (Akk.) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0021 | a1-im | study.comparison[3].meaning | juures, kus? (Dativ) | juures, kus? (daativ) | — | — | — | juures, kus? (Dativ) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0022 | a1-ins | study.comparison[0].meaning | sisse, kuhu? (Akk.) | sisse, kuhu? (akusatiiv) | — | — | — | sisse, kuhu? (Akk.) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0023 | a1-ins | study.comparison[1].meaning | sees, kus? (Dativ) | sees, kus? (daativ) | — | — | — | sees, kus? (Dativ) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0024 | a1-ins | study.comparison[3].meaning | pinnale (Akk.) | pinnale (akusatiiv) | — | — | — | pinnale (Akk.) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0025 | a1-ins | study.comparison[4].meaning | -sse / juurde (Dativ) | sisse / sissepoole (akusatiiv) | — | — | — | -sse / juurde (Dativ) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0038 | a1-nehmen | study.examples[2].lv | ma toon sulle raamatu. | Ma võtan raamatu. |  | Dotais LV MASTER `es tev atnesu grāmatu` semantiski norāda u |  | ma toon sulle raamatu. | **NEW_VALIDATED_REAL_FINDING** | History status  (#ET-A1-0010) — nav automātiska CONFIRMED. |
| ET-A1-0039 | a1-nehmen | study.examples[3].lv | ma tulen sulle järele. | Ma võtan sind kaasa. | — | — | — | ma tulen sulle järele. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0041 | a1-über | study.comparison[3].meaning | -st / kohta mingist allikast | -st / mingi allika kohta |  | CURRENT ir neveikls, taču no OWNER VIEW nav redzams konkrētā |  | -st / kohta mingist allikast | **NEW_VALIDATED_REAL_FINDING** | History status  (#ET-A1-0014) — nav automātiska CONFIRMED. |

## Action gate

- **0** findingi ir OWNER_DECISION_CONFIRMED → **izslēgt** no jaunā OWNER backlog.
- **23** findingi ir patiesi NEW → tikai tie iekļaujami jaunajā OWNER VIEW/DECISIONS.
- Nav REPAIR_REGRESSION vai REOPEN → production nav jālabo pirms OWNER review.

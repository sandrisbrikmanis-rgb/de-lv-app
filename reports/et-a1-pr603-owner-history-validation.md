# ET–DE A1 — PR #603 OWNER HISTORY VALIDATION

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.7
**Baseline MAIN SHA:** `a313c363f6329912f09b4d74cc5cd5f5bfdf9fd7`
**Dataset blob:** `0becf86d29bcb2f2b086b11d72df2769a292200d`
**Audit PR:** #603
**Production changes:** 0
**DE:** STRICT READ-ONLY

## Summary counts

| Metric | Count |
|--------|------:|
| **RAW_PR603_FINDINGS** | **19** |
| **OWNER_DECISION_CONFIRMED** | **3** |
| **OWNER_DECISION_REOPEN_REQUIRED** | **0** |
| **REPAIR_REGRESSION** | **0** |
| **NEW_VALIDATED_REAL_FINDINGS** | **16** |
| **FALSE_POSITIVE** | **0** |

## FINAL VERDICT: **OWNER_HISTORY_VALIDATED**

### History sources loaded

- `reports/et-a1-owner-decisions-accepted.md`
- `reports/et-a1-owner-decisions-accepted-v17.md`
- `reports/et-a1-owner-decisions-accepted-v17-full.md`

### PR #603 audit note

PR #603 classification stats rādīja `OWNER_DECISION_CONFIRMED: 14` — tas attiecas uz **ownerCoverage drift** metriku (210 history entries), **ne** uz šo 19 findingu individuālo klasifikāciju. Šī validācija pārklasificē katru no 19 pēc Card ID + Field/path.

### Īpašā pārbaude: a1-also / comparison

`a1-also` `study.comparison[1].meaning` **nav** starp PR #603 19 findingiem. Iepriekšējais lēmums: **NEEDS_SOURCE_REVIEW** (`et-a1-owner-decisions-accepted-v17-full.md` ET-A1-0002). Nav iekļauts 19/19 matricā.

## 19/19 validation matrix

| Audit ID | Card ID | Field/path | CURRENT (PR603) | PR603 proposed | Prev OWNER status | Prev OWNER decision | Prev OWNER NEW | Current production | Classification | Evidence / reason |
|----------|---------|------------|-----------------|----------------|-------------------|---------------------|----------------|--------------------|----------------|-------------------|
| ET-A1-0001 | a1-baden | study.examples[2].lv | ta ujub väga hästi. | Ta supleb väga hästi. | NELABOT | CURRENT precīzi atbilst dotajam LV MASTER `viņš ļoti labi pe | — | ta ujub väga hästi. | **OWNER_DECISION_CONFIRMED** | NELABOT (#ET-A1-0003, reports/et-a1-owner-decisions-accepted-v17-full.md): saglabāt CURRENT. Production="ta ujub väga hästi.". Luna atkārto noraidīto PROPOSED. |
| ET-A1-0002 | a1-besuch | study.examples[2].lv | Arst teeb visiidi. | Arst läheb visiidile. | — | — | — | Arst teeb visiidi. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0003 | a1-besuchen | study.examples[2].lv | Ma külastan oma vanavanemaid. | Ma külastasin oma vanavanemaid. | — | — | — | Ma külastan oma vanavanemaid. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0004 | a1-bleiben | study.examples[0].lv | ma jään koju. | Ma jään koju. | — | — | — | ma jään koju. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0005 | a1-bleiben | study.examples[1].lv | jää siia! | Jää siia! | — | — | — | jää siia! | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0006 | a1-es | study.translation | see • ta • umbisikuline vorm | see • umbisikuline vorm | LABOT | see • umbisikuline vorm | see • umbisikuline vorm | see • umbisikuline vorm | **OWNER_DECISION_CONFIRMED** | LABOT (#ET-A1-0013, reports/et-a1-owner-decisions-accepted.md): OWNER NEW="see • umbisikuline vorm" = production. PR603 audit CURRENT ("see • ta • umbisikuline vorm") ir novecojis; production jau atbilst OWNER NEW. Luna PROPOSED konfliktē ar OWNER vai atkārto jau piemēroto. |
| ET-A1-0007 | a1-halten | study.comparison[3].meaning | mõtlema | pidama | — | — | — | mõtlema | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0008 | a1-hand-study | study.translation | käsi (kämmal) | käsi | — | — | — | käsi (kämmal) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0009 | a1-im | study.comparison[2].meaning | sees / sisse (ilma artiklita) | sees / sisse (kindla artikliga) | — | — | — | sees / sisse (ilma artiklita) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0010 | a1-ins | study.comparison[2].meaning | sees / sisse (eraldi artikliga) | sees / sisse (kokkusulanud kindla artikliga) | — | — | — | sees / sisse (eraldi artikliga) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0025 | a1-nehmen | study.examples[0].lv | ma sõidan bussiga. | Ma võtan bussi. | — | — | — | ma sõidan bussiga. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0026 | a1-nehmen | study.examples[2].lv | ma toon sulle raamatu. | Ma võtan raamatu. | — | — | — | ma toon sulle raamatu. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0027 | a1-sollen | study.examples[1].lv | sa pead tulema. | sa peaksid tulema. | — | — | — | sa pead tulema. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0028 | a1-sollen | study.examples[2].lv | ma pean koju jääma. | ma peaksin koju jääma. | — | — | — | ma pean koju jääma. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0029 | a1-sollen | study.examples[3].lv | ma pean nüüd minema. | ma peaksin nüüd minema. | — | — | — | ma pean nüüd minema. | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0030 | a1-stehen | study.examples[3].lv | raamat seisab laual. | raamat on laual. | LABOT | Pieņemts. Igauņu `raamat seisab laual` ir dabiska konstrukci | raamat seisab laual. | raamat seisab laual. | **OWNER_DECISION_CONFIRMED** | LABOT (#ET-A1-0027, reports/et-a1-owner-decisions-accepted-v17-full.md): OWNER NEW="raamat seisab laual." = production. Luna PROPOSED konfliktē ar OWNER vai atkārto jau piemēroto. |
| ET-A1-0031 | a1-über | study.comparison[3].meaning | -st / kohta mingist allikast | allikast / mingi allika kohta | — | — | — | -st / kohta mingist allikast | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0032 | a1-vom | study.comparison[0].meaning | -st (konkreetne asi, Dativ) | -st (konkreetse asja puhul, saksa keeles datiiv) | — | — | — | -st (konkreetne asi, Dativ) | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |
| ET-A1-0033 | a1-zu | study.comparison[2].meaning | sees / mingisse kohta | sisse / mingisse kohta | — | — | — | sees / mingisse kohta | **NEW_VALIDATED_REAL_FINDING** | Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path. |

## Action gate

- **3** findingi ir OWNER_DECISION_CONFIRMED → **izslēgt** no jaunā OWNER backlog.
- **16** findingi ir patiesi NEW → tikai tie iekļaujami jaunajā OWNER VIEW/DECISIONS.
- Nav REPAIR_REGRESSION vai REOPEN → production nav jālabo pirms OWNER review.

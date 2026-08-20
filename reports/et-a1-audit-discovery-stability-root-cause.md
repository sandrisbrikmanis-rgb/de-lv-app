# ET–DE A1 AUDIT DISCOVERY STABILITY — ROOT-CAUSE DIAGNOSTIC

**Mode:** READ-ONLY · **Production changes:** 0 · **DE changes:** 0

## Kopsavilkums

CURRENT_FINDINGS = **23**
FORENSICALLY_CLASSIFIED = **23/23**

| Root cause | Count |
|------------|------:|
| PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE | **10** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **13** |
| OWNER_DECISION_CONFIRMED | **0** |
| OWNER_DECISION_REOPEN_REQUIRED | **0** |
| REPAIR_REGRESSION | **0** |
| FALSE_POSITIVE_OR_STYLE_ONLY | **0** |
| GENUINELY_NEW_VALIDATED_REAL_FINDING | **0** |

PRODUCTION_BASELINE_VALID = **YES**
OWNER_HISTORY_COMPLETE = **YES**
RAW_AUDIT_HISTORY_AVAILABLE = **YES**
AUDIT_DISCOVERY_NON_REPRODUCIBILITY = **YES**

## FINAL VERDICT: **AUDIT_DISCOVERY_INSTABILITY_CONFIRMED**

> **STOP:** Šie 23 findingi **NAV** authoritative repair backlog līdz OWNER apstiprina pēc šīs diagnostikas.

## 9. Current 23 — breakdown

| Category | Count |
|----------|------:|
| Already seen RAW in prior audits | **10** |
| Pre-existing, Luna previously missed | **13** |
| OWNER-confirmed (exclude) | **0** |
| OWNER-reopen | **0** |
| Repair regression | **0** |
| False positive / style | **0** |
| **Genuinely new after full forensic check** | **0** |

**Sum = 23.**

### Galvenais secinājums

Visi 23 findingi ir **audit discovery drift** (Luna non-reproducibility vai iepriekš redzēti RAW/validated), **nevis** jaunas production kļūdas, ko radītu repair regresija. PR #603 repair (11 LABOT) **nav** radījis nevienu no šiem 23 laukiem.

## 1. Galvenā atbilde

Kāpēc 23 netika identificēti iepriekšējā FULL_DISCOVERY (#603)?

1. **Luna non-reproducibility** — tajā pašā production (vai identiskā) Luna dažās kartītēs deva PASS (#603), bet FINDING (#604 vai v1.5). Piem.: `a1-auf dem Bahnhof`, `a1-jawohl`, `a1-da`, `a1-dass` — #603 RAW=0, #604 RAW=1.
2. **Daļēja prior coverage** — `a1-im`/`a1-ins`/`a1-nehmen`/`a1-über` jau parādījās RAW #603, bet citā comparison/example laukā; #604 atklāj blakus laukus ar to pašu nemainīto production.
3. **OWNER backlog nebija exhaustīvs** — #603 validated 19; 3 OWNER_CONFIRMED + 11 LABOT applied; atlikušie 5 (NEEDS_SOURCE_REVIEW/Nelabots) netika carry-forward, tāpēc #604 tos atkārto kā "jaunus".
4. **Nav repair regression** — forensic matrix: REPAIR_REGRESSION=0; PR603 LABOT skāra citus laukus (besuch, bleiben ex[0–1], im[2], ins[2], sollen, utt.).

## 3. Frozen production analysis

| Lauks | Vērtība |
|-------|---------|
| origin/main SHA | `53a6abb159b72e89eddad635cfee64b2a3528ad0` |
| data/et/a1.js blob | `ae037d7ca01d1619304ab895687d7e10714f3458` |
| www/data/et/a1.js blob | `ae037d7ca01d1619304ab895687d7e10714f3458` |
| Last closure blob | `ae037d7ca01d1619304ab895687d7e10714f3458` |
| Blob = closure | **YES** |
| Changed since first closure | **YES** |
| Repair commits post-#602→#603 | **0** (7355575d PR603 11 LABOT) |

## 6. Audit discovery stability table

| Audit run | Blob | MASTER | Luna cov. | RAW Luna | Validated NEW | OWNER conf. | Verdict |
|-----------|------|--------|-----------|----------|---------------|-------------|---------|
| PR #604 post-#603 | `ae037d7c` | 1.7 | 100% | 41 | 23 | 18 | NEEDS_OWNER_REVIEW |
| PR #603 post-#602 | `0becf86d` | 1.7 | 100% | 33 | 19 | 14 | NEEDS_OWNER_REVIEW |
| v1.7 repair+audit | `66256824` | 1.7 | 100% | 29 | 14 | 15 | NEEDS_OWNER_REVIEW |
| v1.6 post-#599 | `66256824` | 1.6 | 100% | 14 | 23 | 2 | NEEDS_OWNER_REVIEW |
| v1.6 on main | `2aaaef9f` | 1.6 | 100% | 108 | 100 | 10 | NEEDS_OWNER_REVIEW |
| v1.5 post-closure | `2aaaef9f` | 1.5 | 100% | 108 | 100 | 10 | NEEDS_OWNER_REVIEW |
| v1.5 full | `ead64260` | 1.5 | 100% | 303 | 171 | 0 | — |

**Overlap pr603-post602 vs pr604-post603:** exact field overlap=2, previous-only=17, current-only=21, churn≈200.0%

## 7. Luna coverage meaning

**702/702** nozīmē: 702/702 = every card sent to model at least once; NOT all possible issues found.
Tas **nav** garantija, ka visas iespējamās kļūdas atrastas.

## 8. Luna pipeline (READ-ONLY)

- **model:** gpt-5.6-luna
- **batchSimple:** 50
- **batchStudy:** 12
- **temperature:** not set (API default)
- **deterministicSeed:** none
- **promptSource:** scripts/lib/openai-et-a1-audit.js SYSTEM_PROMPT
- **rawFindingsPersisted:** reports/temp/et-a1-linguistic-audit.json + batch files
- **passReasoningPersisted:** batch results only (PASS items without reason text)
- **ownerHistoryUsedBeforeNewClassification:** partial (post-classification in run-et-a1-full-audit.js)
- **semanticDedupBeforeNewValidated:** dedupe by cardId|field|currentEt prefix only
- **coverageMeaning:** 702/702 = every card sent to model at least once; NOT all possible issues found

## 4. 23/23 forensic matrix

| ID | Card | Field | Production | Root cause | Evidence |
|----|------|-------|------------|------------|----------|
| ET-A1-0001 | a1-auf dem Bahnhof-59 | etText | jaamas | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "jaamas" eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš neidentificēja (PASS/mis |
| ET-A1-0002 | a1-jawohl-299 | etText | täpselt nii | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "täpselt nii" eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš neidentificēja (PAS |
| ET-A1-0003 | a1-aufs | study.comparison[2].meaning | vertikaalse pinna juures | **PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE** | Validated/OWNER backlog iepriekš: v15-full; nav jauns semantiskais issues. |
| ET-A1-0004 | a1-aufs | study.comparison[3].meaning | sisse (ruumi sisse) | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "sisse (ruumi sisse)" eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš neidentific |
| ET-A1-0005 | a1-baden | study.examples[1].lv | me läheme järve ujuma. | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "me läheme järve ujuma." eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš neidenti |
| ET-A1-0006 | a1-bleiben | study.examples[2].lv | me jääme veel üheks tunniks. | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "me jääme veel üheks tunniks." eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš ne |
| ET-A1-0008 | a1-da | study.examples[0].lv | seal on minu auto. | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "seal on minu auto." eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš neidentificē |
| ET-A1-0009 | a1-da | study.examples[1].lv | ma olin seal. | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "ma olin seal." eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš neidentificēja (P |
| ET-A1-0011 | a1-da | study.examples[3].lv | tule siia! | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "tule siia!" eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš neidentificēja (PASS |
| ET-A1-0012 | a1-dass | study.examples[0].lv | ma tean, et sa oled väsinud. | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "ma tean, et sa oled väsinud." eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš ne |
| ET-A1-0013 | a1-dass | study.examples[1].lv | ta ütleb, et ta tuleb. | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "ta ütleb, et ta tuleb." eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš neidenti |
| ET-A1-0014 | a1-dass | study.examples[2].lv | ma arvan, et see on õige. | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "ma arvan, et see on õige." eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš neide |
| ET-A1-0015 | a1-ein | study.tip.text | Pea meeles: ebamäärane üks/mingi → ein. | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "Pea meeles: ebamäärane üks/mingi → ein." eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna  |
| ET-A1-0019 | a1-im | study.comparison[0].meaning | sees, kus? (Dativ) | **PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE** | Validated/OWNER backlog iepriekš: v15-full; nav jauns semantiskais issues. |
| ET-A1-0020 | a1-im | study.comparison[1].meaning | sisse, kuhu? (Akk.) | **PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE** | Validated/OWNER backlog iepriekš: v15-full; nav jauns semantiskais issues. |
| ET-A1-0021 | a1-im | study.comparison[3].meaning | juures, kus? (Dativ) | **PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE** | Validated/OWNER backlog iepriekš: v15-full; nav jauns semantiskais issues. |
| ET-A1-0022 | a1-ins | study.comparison[0].meaning | sisse, kuhu? (Akk.) | **PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE** | Validated/OWNER backlog iepriekš: v15-full; nav jauns semantiskais issues. |
| ET-A1-0023 | a1-ins | study.comparison[1].meaning | sees, kus? (Dativ) | **PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE** | Validated/OWNER backlog iepriekš: v15-full; nav jauns semantiskais issues. |
| ET-A1-0024 | a1-ins | study.comparison[3].meaning | pinnale (Akk.) | **PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE** | Validated/OWNER backlog iepriekš: v15-full; nav jauns semantiskais issues. |
| ET-A1-0025 | a1-ins | study.comparison[4].meaning | -sse / juurde (Dativ) | **PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE** | Validated/OWNER backlog iepriekš: v15-full; nav jauns semantiskais issues. |
| ET-A1-0038 | a1-nehmen | study.examples[2].lv | ma toon sulle raamatu. | **PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE** | Iepriekš NEEDS_SOURCE_REVIEW (#ET-A1-0010, reports/et-a1-owner-decisions-accepted-pr603-full.md); Luna atkārto, bet nav  |
| ET-A1-0039 | a1-nehmen | study.examples[3].lv | ma tulen sulle järele. | **PRE_EXISTING_BUT_PREVIOUSLY_MISSED** | Production vērtība "ma tulen sulle järele." eksistēja pirms iepriekšējiem FULL_DISCOVERY auditos; Luna iepriekš neidenti |
| ET-A1-0041 | a1-über | study.comparison[3].meaning | -st / kohta mingist allikast | **PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE** | Iepriekš NEEDS_SOURCE_REVIEW (#ET-A1-0014, reports/et-a1-owner-decisions-accepted-pr603-full.md); Luna atkārto, bet nav  |

## 14. MASTER v1.7 gap (recommendation only — do NOT update MASTER here)

**MASTER_V1_7_GAP_FOUND = YES**

Trūkstošie mehānismi, lai novērstu FULL_DISCOVERY → repair → FULL_DISCOVERY cikla jaunus "missed" findingus:

1. **Semantic finding registry** — katram FULL_DISCOVERY obligāti saglabāt RAW+validated findingus ar semantic key (`cardId+field+currentEt`), nevis tikai audit ID.
2. **Pre-backlog gate** — `NEW_VALIDATED_REAL` aizliegts, ja production vērtība identiska vismaz 2 iepriekšējos closure blobos un finding nav REPAIR_REGRESSION.
3. **Luna reproducibility baseline** — pirms OWNER review, salīdzināt ar iepriekšējā identiska-blob RAW audit; ja >N% jauni, STOP ar `AUDIT_DISCOVERY_NON_REPRODUCIBILITY`.
4. **Coverage disclaimer** — MASTER jādefinē, ka 702/702 = cards processed, nevis exhaustive defect detection.
5. **OWNER pending carry-forward** — NEEDS_SOURCE_REVIEW/Nelabots validated findings jāpārnes kā locked backlog, nevis atkārtoti kā NEW.

# CS–DE A1 Full Review — Closure Summary

**Canonical review range: FULL-A1-00001 … FULL-A1-00689**

## Review completion

| Metric | Value |
|--------|-------|
| Total canonical findings | **689** |
| Findings reviewed | **689/689** |
| Review blocks | **14** (blocks 01–12 repair + blocks 13–14 classification) |
| **A1 canonical review status** | **REVIEW COMPLETE** |
| **A1 production closure status** | **NOT CLOSED** — see open items below |

---

## Block-by-block summary

| Block | Range | Type | LABOT (APPLIED) | Other classifications |
|-------|-------|------|-----------------|----------------------|
| 01 | 001–050 | repair | 20 | 30 stale/keep |
| 02 | 051–100 | repair | 16 | 34 stale/keep |
| 03 | 101–150 | repair | 31 | 19 stale/keep; **1 mismatch** |
| 04 | 151–200 | repair | 13 | 36 stale/keep; **1 mismatch** |
| 05 | 201–250 | repair | 20 | 30 stale/keep |
| 06 | 251–300 | repair | 24 | 25 stale/keep; **1 mismatch** |
| 07 | 301–350 | repair | 26 | 22 stale/keep; **2 mismatch** |
| 08 | 351–400 | repair | 36 | 14 stale/keep |
| 09 | 401–450 | repair | 27 | 23 stale/keep |
| 10 | 451–500 | repair | 27 | 23 stale/keep |
| 11 | 501–550 | repair | 28 | 22 stale/keep |
| 12 | 551–600 | repair | 23 | 23 stale/keep; 2 FALSE_POSITIVE; 2 DEFERRED |
| 13 | 601–650 | classification | 0 | 30 DEFERRED; 18 STALE; 2 DE_PARITY |
| 14 | 651–689 | classification | 0 | 2 DEFERRED; 11 STALE; 2 OWNER_OVERRIDE; 15 NEEDS_OWNER_REVIEW; 1 FALSE_POSITIVE; 4 FALSE_POSITIVE_CROSS_DATASET; 4 CROSS_DATASET_CONTEXT_REVIEW |

**Total APPLIED repairs (blocks 01–12): 291**

**Total CURRENT_VALUE_MISMATCH (not changed): 5**

---

## 1. REAL REPAIRS — already applied (291 fields)

Mechanical PIRMS → PĒC repairs applied across **blocks 01–12** in `data/cs/a1.js` (+ mirror).

| Block | APPLIED | Report |
|-------|---------|--------|
| 01 | 20 | `reports/cs-a1-full-review-repair-block-01.md` |
| 02 | 16 | `reports/cs-a1-full-review-repair-block-02.md` |
| 03 | 31 | `reports/cs-a1-full-review-repair-block-03.md` |
| 04 | 13 | `reports/cs-a1-full-review-repair-block-04.md` |
| 05 | 20 | `reports/cs-a1-full-review-repair-block-05.md` |
| 06 | 24 | `reports/cs-a1-full-review-repair-block-06.md` |
| 07 | 26 | `reports/cs-a1-full-review-repair-block-07.md` |
| 08 | 36 | `reports/cs-a1-full-review-repair-block-08.md` |
| 09 | 27 | `reports/cs-a1-full-review-repair-block-09.md` |
| 10 | 27 | `reports/cs-a1-full-review-repair-block-10.md` |
| 11 | 28 | `reports/cs-a1-full-review-repair-block-11.md` |
| 12 | 23 | `reports/cs-a1-full-review-repair-block-12.md` |
| **Total** | **291** | |

DE changes across all repair blocks: **0**.

---

## 2. STALE / ALREADY FIXED

Findings superseded by later production state or prior repair cycles. **No further action in canonical review.**

Includes:
- Majority of OWNER KEEP / already-correct items across blocks 01–12 (~300+ findings)
- Block 13: **18** a1-fahren / a1-es stale accent clusters (FULL-A1-00609–00626)
- Block 14: **11** findings (FULL-A1-00654, 00656–00662, 00675–00677)

---

## 3. FALSE POSITIVES

| Finding(s) | Card | Reason |
|------------|------|--------|
| FULL-A1-00597, 00598 | a1-Balkon-70 | `Balkón` is correct Czech (not Polish remnant) |
| FULL-A1-00681 | a1-essen | `esse` is valid DE accent target, not stale LV |
| FULL-A1-00683 | da | Cross-dataset: different `da` senses A1 vs B1 |
| FULL-A1-00685 | gleich | Cross-dataset: same senses, order variant |
| FULL-A1-00687 | liegen | Cross-dataset: sense-order difference only |
| FULL-A1-00688 | Mal | Cross-dataset: different `Mal` senses |

---

## 4. OWNER KEEP / OWNER OVERRIDES

Explicit owner decisions to retain current production.

| Finding(s) | Card | Field | Current kept |
|------------|------|-------|--------------|
| FULL-A1-00458, 00461 | a1-sich | translation / comparison[0] | `Sebe • Pro sebe` / `Se / sebe` |
| FULL-A1-00470 | a1-sie-study | examples[5].lv | `Vařte, prosím.` |
| FULL-A1-00491 | a1-verstehen | study.translation | `Rozumět` |
| FULL-A1-00495 | a1-verstehen | important[0] | `Verstehen není totéž co können.` |
| FULL-A1-00519 | a1-wenn | explanation[1] | Podmínka → „pokud“ / „jestliže“ |
| FULL-A1-00541, 00545 | a1-zu | translation / comparison[0] | Full multi-sense current |
| FULL-A1-00551, 00554 | a1-zum | comparison meanings | Current Czech variants |
| FULL-A1-00575 | a1-essen-study | tip[0] | `Das Essen = jídlo` |
| FULL-A1-00583, 00586 | a1-ferien / a1-urlaub | comparison meanings | Current precision |
| FULL-A1-00653, 00655 | a1-in | sectionAccents.examples[0].lv.purple[0] | `Berlīnē` (OWNER override) |

---

## 5. NEEDS OWNER REVIEW — open (20 findings)

Production not changed; owner must authorize next steps.

### CURRENT_VALUE_MISMATCH from repair blocks (5)

| Finding | Card | Field | Production value | Audit PIRMS |
|---------|------|-------|------------------|-------------|
| FULL-A1-00131 | a1-aus | study.translation | `Od • Ven` | `Z • Ven` |
| FULL-A1-00181 | a1-das | study.tip.text | `střední genitiv` | `střední rod` |
| FULL-A1-00265 | a1-halten | study.explanation[0] | (differs from audit PIRMS) | audit snapshot |
| FULL-A1-00326 | a1-kosten | study.translation | `Platit` | `Platit` (mismatch) |
| FULL-A1-00328 | a1-kosten | study.comparison[0].meaning | `Zaplatit (cena) • Kolik` | mismatch |

### Block 14 accent remnants (15)

| Finding(s) | Card | Issue |
|------------|------|-------|
| FULL-A1-00663–00669 | a1-sitzen | LV `sēdēt` / `sēž` in sectionAccents |
| FULL-A1-00670–00671 | a1-stehen | LV `sēdēt` in sectionAccents |
| FULL-A1-00672–00674 | a1-über | LV `tēma` in sectionAccents |
| FULL-A1-00678–00680 | a1-essen | LV `ēst` in accents |

---

## 6. MISSING STUDY PARITY — deferred (32 findings)

CS cards without full Study parity vs LV reference. **No Study objects created during review.**

Requires separate task: **CS–DE A1 MISSING STUDY PARITY** with owner-prepared Czech Study content per card.

| Card | Findings | Issue |
|------|----------|-------|
| a1-Besuch-87 | 00601, 00599, 00600 | No Study object |
| a1-besuchen-89 | 00602–00604 | No Study object |
| a1-bitte | 00605 | Study exists; missing comparison, tip.text |
| a1-bitte-study | 00606 | Study exists; missing comparison, tip.text |
| a1-ein | 00607 | Study exists; missing comparison |
| a1-es | 00608 | Study exists; missing comparison |
| a1-Fußball-218 | 00629–00631 | No Study object |
| a1-ganz-219 | 00632–00634 | No Study object |
| a1-gefallen-225 | 00635–00637 | No Study object |
| a1-Geschichte-233 | 00638–00640 | No Study object |
| a1-Geschwister-234 | 00641–00643 | No Study object |
| a1-Großeltern-251 | 00644–00646 | No Study object |
| a1-Hand-267 | 00647–00649 | No Study object |
| a1-hübsch-288 | 00650, 00651, 00652 | No Study object |

**Total structural-deferred findings: 32** (blocks 12–14)

---

## 7. DE-SIDE DEFERRED (2 findings)

| Finding | Card | Issue |
|---------|------|-------|
| FULL-A1-00627 | a1-Wochenende-181 | CS missing `de_plural` vs LV (`die Wochenenden`) |
| FULL-A1-00628 | a1-Frühstück-207 | CS missing `de_plural` vs LV (`die Frühstücke`) |

DE fields **not modified** per OWNER rule.

---

## 8. CROSS-DATASET CONTEXT REVIEW (4 findings)

Not errors; different CEFR-level teaching contexts. **Do not auto-unify.**

| Finding | Word | A1 CS | Other level | Status |
|---------|------|-------|-------------|--------|
| FULL-A1-00682 | bringen | Přinést • Odnést | A2: Přinést • Doručit | CROSS_DATASET_CONTEXT_REVIEW |
| FULL-A1-00684 | erst | První • Pouze | A2: Až • Ne dříve než | CROSS_DATASET_CONTEXT_REVIEW |
| FULL-A1-00686 | legen | Položit | A2: Položit se | CROSS_DATASET_CONTEXT_REVIEW |
| FULL-A1-00689 | über | Přes • Pro | A2: Přes • Přes • Pro | CROSS_DATASET_CONTEXT_REVIEW |

---

## Integrity gates (final)

| Check | Result |
|-------|--------|
| cards | **702** |
| ID/order | **PASS** |
| syntax | **PASS** |
| mirror | **PASS** |
| DE READ-ONLY | **PASS** |
| Study created during review | **0** |
| Study deleted during review | **0** |

---

## Closure statement

**Canonical review: COMPLETE (689/689).**

**Production closure: NOT CLOSED.**

Open before declaring A1 fully closed:

1. **MISSING STUDY PARITY** — 14 card clusters (32 findings)
2. **NEEDS OWNER REVIEW** — 20 findings (5 mismatch + 15 accent remnants)
3. **DE-SIDE DEFERRED** — 2 `de_plural` parity items (separate DE task if needed)

### Next step

Create inventory **CS–DE A1 MISSING STUDY PARITY**. Owner/ChatGPT prepares precise Czech Study content per card. Composer copies only pre-approved content in a dedicated parity repair task.

---

_A1 full review closed: 2026-08-12_

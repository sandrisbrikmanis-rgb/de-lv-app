# ET–DE A1 — Audit Finding Stability / +100 Root-Cause Diagnostic

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1
**Mode:** READ-ONLY · production changes = 0

## 1. Autoritatīvie audita artefakti

| Audits | Artefakts | Findings |
|--------|-----------|----------|
| **A — Old (67)** | `git show 8553c3ef:reports/temp/et-a1-full-audit.json` | 67 |
| | `git show 8553c3ef:reports/et-a1-full-audit.md` | closure audit |
| **B — New (167)** | `reports/temp/et-a1-full-audit.json` @ `c34ccb36` | 167 |
| | `reports/et-a1-full-audit.md` | full audit post Study closure |

Pre-repair production baseline: `8c82df04` (origin/main). Post-repair snapshot: `a32e6a29`.

## 2. Galvenais secinājums

**Verdict: AUDIT_INSTABILITY**

67 → 167 (+100) radās **identiskā production** (`data/et/a1.js`) snapshotā starp audit run **8553c3e** un **c34ccb3**. Git diff starp šiem audit baseline: **0 bytes**.

Luna quality findings: **65 → 165 (+100)** — deterministika stabilā (**2** abos).

**+100 nav repair izraisīta regresija starp diviem audit run**, jo production nav mainījies. Galvenais mehānisms: **Luna full-discovery non-reproducibility** (652 vs 671 PASS uz tā paša datu stāvokļa).

## 3. Audit baseline salīdzinājums

| Parametrs | Old (67) @ `8553c3ef` | New (167) @ `c34ccb36` | Salīdzināms? |
|-----------|----------------------|------------------------|--------------|
| Datums | 2026-08-19 15:48–15:54 UTC | 2026-08-19 16:16–16:24 UTC | ✓ |
| Git SHA (audit commit) | `8553c3ef` | `c34ccb36` | ✓ |
| Production `data/et/a1.js` | a32e6a29 snapshot | **identical (0-byte diff)** | ✓ |
| Audita veids | FULL DISCOVERY (closure label) | FULL DISCOVERY | ✓ (bet nav freeze) |
| Model | gpt-5.6-luna | gpt-5.6-luna | ✓ |
| Prompt | `scripts/lib/openai-et-a1-audit.js` SYSTEM_PROMPT | identisks | ✓ |
| Batch size | simple=50, study=12 | identisks | ✓ |
| Temperature | nav norādīts (API default) | nav norādīts | ✓ |
| Skripti | run-et-a1-full-audit.js + collect + linguistic | identiski | ✓ |
| Scope | 702/702 Luna + deterministic | 702/702 Luna + deterministic | ✓ |
| Luna PASS | 671 | 652 (−19) | **✗ nestabils** |
| Luna findings | 65 | 165 (+100) | **✗ nestabils** |
| Deterministic | 2 (bitte tip.text) | 2 (bitte tip.text) | ✓ stabilā |
| Severity | C0/H5/M13/L49 | C1/H11/M22/L133 | daļēji |

**Secinājums par salīdzināmību:** Skaitļi 67 un 167 ir **metodoloģiski salīdzināmi** (tā pati FULL DISCOVERY metode, identisks production), bet **nav reproducējami** — Luna otrajā run uz identiska datu stāvokļa deva +100 findings.

## 4. +100 delta matemātika

| Komponents | Skaitlis |
|------------|----------|
| OLD FINDINGS | **67** |
| NEW FINDINGS | **167** |
| DELTA | **+100** |
| Old still present in new | **56** |
| Old dropped (in 67, not in 167) | **11** |
| New-only (in 167, not matched to old) | **111** |
| Check: 56 + 111 = 167; net delta = 111 − 11 = **+100** | ✓ |

Luna quality: 65 → 165 (+100). Deterministic: 2 → 2 (0).

### 11 vecie findings, kas vairs nav jaunajā 167

| Old ID | Card | Field | Severity |
|--------|------|-------|----------|
| ET-A1-0005 | a1-also | study.comparison[1].meaning | MEDIUM |
| ET-A1-0006 | a1-aufs | study.examples[6].lv | MEDIUM |
| ET-A1-0016 | a1-halten | study.comparison[2].meaning | MEDIUM |
| ET-A1-0018 | a1-morgen-study | study.examples[1].lv | HIGH |
| ET-A1-0058 | a1-vom | study.comparison[0].meaning | LOW |
| ET-A1-0061 | a1-uhr | study.examples[0].lv | MEDIUM |
| ET-A1-0062 | a1-uhr | study.examples[1].lv | MEDIUM |
| ET-A1-0063 | a1-uhr | study.examples[3].lv | MEDIUM |
| ET-A1-0064 | a1-uhr | study.examples[4].lv | MEDIUM |
| ET-A1-0066 | a1-noch-mal | study.examples[1].lv | LOW |
| ET-A1-0067 | a1-noch-mal | study.examples[2].lv | LOW |

## 5. Root-cause summary (167/167)

| Root cause | Count |
|------------|-------|
| OLD_FINDING_STILL_PRESENT | **56** |
| OLD_FINDING_FIXED_BUT_REDETECTED | **0** |
| REPAIR_REGRESSION | **10** |
| PRE_EXISTING_BUT_PREVIOUSLY_MISSED | **17** |
| AUDIT_THRESHOLD_CHANGE | **0** |
| FALSE_POSITIVE_OR_STYLE_ONLY | **84** |
| GENUINELY_NEW_NON_REPAIR_DEFECT | **0** |
| **TOTAL** | **167** |

| Metric | Count |
|--------|-------|
| NEW FINDINGS CAUSED BY REPAIR | **10** |
| NEW FINDINGS NOT CAUSED BY REPAIR | **157** |
| OLD 67 still in NEW 167 | **56** |
| Old findings not in new | **11** |

## 6. LOW breakdown (133)

| Type | Count |
|------|-------|
| Capitalization-only | **130** |
| Punctuation-related | **3** |
| Other LOW | **0** |

LOW pieaugums 49 → 133 (+84) galvenokārt veido **sentence-initial capitalization** (ORTHOGRAPHY, 130/133). Nav jaunu semantikas/gramatikas LOW — tie ir stilistiski.

## 7. REPAIR_REGRESSION — Git forensics (10/10)

Visi 10 uz laukiem, ko repair mainīja starp `8c82df04` (pre-repair) un `a32e6a29` (post-repair). Git commits: `4913f41b`, `c0b710cf`, `ecb40d07`, `a32e6a29`.

| New ID | Card | Field | PRE_REPAIR | POST_REPAIR / CURRENT | Repair issue |
|--------|------|-------|------------|----------------------|--------------|
| ET-A1-0018 | a1-bleiben | study.examples[3].lv | ma lähen koju. | ma jään koju. | Luna flags: "ma jään koju." → proposed "Ma lähen koju." |
| ET-A1-0021 | a1-da | study.examples[2].lv | siin ta tuleb. | seal ta tuleb. | Luna flags: "seal ta tuleb." → proposed "Seal ta tuleb." |
| ET-A1-0050 | a1-hoch-study | study.examples[1].lv | mägi on kõrge. | riiul on kaks meetrit kõrge. | Luna flags: "riiul on kaks meetrit kõrge." → proposed "Riiul on kaks meetrit kõr |
| ET-A1-0103 | a1-kosten | study.examples[4].lv | ma maksan arve. | Arve maksab palju. | Luna flags: "Arve maksab palju." → proposed "Ma maksan arvet." |
| ET-A1-0104 | a1-kosten | study.examples[5].lv | kas ma saan sularahas maksta? | Kui palju see maksab? | Luna flags: "Kui palju see maksab?" → proposed "Kas ma võin sularahas maksta?" |
| ET-A1-0105 | a1-kosten | study.examples[6].lv | ta maksab kaardiga. | See maksab kaardiga makstes rohkem. | Luna flags: "See maksab kaardiga makstes rohkem." → proposed "Ta maksab kaardiga |
| ET-A1-0106 | a1-kosten | study.examples[7].lv | ma maksan kohe. | See maksab kohe vähem. | Luna flags: "See maksab kohe vähem." → proposed "Ma maksan kohe." |
| ET-A1-0107 | a1-laut | study.examples[4].lv | heli on ilus. | Heli on vali. | Luna flags: "Heli on vali." → proposed "Heli on ilus." |
| ET-A1-0108 | a1-laut | study.examples[5].lv | ma kuulen mingit heli. | Ma kuulen valju heli. | Luna flags: "Ma kuulen valju heli." → proposed "Ma kuulen mingit heli." |
| ET-A1-0109 | a1-laut-study | study.examples[2].lv | ära räägi nii valjult! | Ära tee nii valju heli! | Luna flags: "Ära tee nii valju heli!" → proposed "Ära räägi nii valjusti!" |

**Piezīme:** Šie 10 findings eksistēja jau closure audit production snapshotā (`8553c3ef`), bet **67-run tos nepamanīja**; 167-run tos atklāja. Tie nav daļa no +100 starp-run delta (production diff=0), bet ir **reālas repair-sekas** salīdzinot ar pre-repair.

## 8. Audit stability analysis

| # | Jautājums | Atbilde |
|---|-----------|---------|
| 1 | Vai tas pats modelis? | **Jā** — gpt-5.6-luna abos |
| 2 | Vai prompts identisks? | **Jā** — `openai-et-a1-audit.js` SYSTEM_PROMPT nemainīts |
| 3 | Vai batch sadalījums identisks? | **Jā** — simple=50, study=12 |
| 4 | Vai audit scope identisks? | **Jā** — 702/702 FULL DISCOVERY |
| 5 | Vai severity definitions identiskas? | **Jā** — prompt severity/category nemainīts |
| 6 | Vai deterministic pre/post identisks? | **Jā** — 2 stable findings abos |
| 7 | Vai LOW filtrēti vienādi? | **Jā** — nav post-filter; Luna atgriež visus |
| 8 | Vai vecais closure, jaunais full? | **Nē** — abi FULL DISCOVERY (run-et-a1-full-audit.js) |
| 9 | Vai MASTER v1.1 mainīja requirements? | **Nē** — abi ar v1.1 |
| 10 | Vai 67 un 167 drīkst salīdzināt? | **Jā metodoloģiski, nē reproducējamībā** — identisks production, bet Luna nestabils |

## 9. Atbildes

1. **Kāpēc 67 → 167?** Luna otrajā pilnajā discovery run uz **identiska** production atrada +100 papildu findings; deterministika nemainījās.
2. **Cik radīja remonts?** 10 findings uz laukiem, ko repair mainīja vs origin/main; 0 no +100 delta starp audit run (production diff=0).
3. **Cik iepriekš nepamanītas?** 17 (pre-repair value == current, Luna run1 missed).
4. **Audit instability / false positives?** 84 (threshold/style uz identiska production).
5. **Problēma galvenokārt:** audita procesā (Luna reproducibility), nevis ET production izmaiņās starp 67 un 167 audit.

## 10. MASTER v1.1 — AUDIT STABILITY GAPS

1. Nav **audit baseline freeze** — divi full discovery run uz identiska production drīkst dot +100 findings bez MASTER brīdinājuma.
2. Nav **finding identity / carry-forward** — audit ID mainās, nav stable finding key starp run.
3. Nav **discovery freeze pēc OWNER repair** — closure audit nav atdalīts no jauna full discovery.
4. Nav **Luna reproducibility gate** — nav sliekšņa, kad delta uz identiska production = HARD FAIL audit process.
5. Nav skaidras atšķirības **TARGETED REGRESSION vs FULL DISCOVERY** skaitļu salīdzināmībai MASTER §10/§11.

## 11. Obligātā gala matrica (167/167)

167/167 rindas: `reports/temp/et-a1-audit-stability-root-cause.json` → `matrix[]`

### Sample (first 15)

| New Finding | Card ID | Field | Old match | Root cause |
|-------------|---------|-------|-----------|------------|
| ET-A1-0001 | a1-bitte | study.tip.text | ET-A1-0001 | OLD_FINDING_STILL_PRESENT |
| ET-A1-0002 | a1-bitte-study | study.tip.text | ET-A1-0002 | OLD_FINDING_STILL_PRESENT |
| ET-A1-0003 | a1-Arm-44 | etText | ET-A1-0003 | OLD_FINDING_STILL_PRESENT |
| ET-A1-0004 | a1-Esslöffel-168 | etText | — | PRE_EXISTING_BUT_PREVIOUSLY_MISSED |
| ET-A1-0005 | a1-Nummer-455 | etText | — | PRE_EXISTING_BUT_PREVIOUSLY_MISSED |
| ET-A1-0006 | a1-von-635 | etText | — | PRE_EXISTING_BUT_PREVIOUSLY_MISSED |
| ET-A1-0007 | a1-Weihnachten-648 | etText | ET-A1-0004 | OLD_FINDING_STILL_PRESENT |
| ET-A1-0008 | a1-baden | study.examples[2].lv | ET-A1-0007 | OLD_FINDING_STILL_PRESENT |
| ET-A1-0009 | a1-besuch | study.examples[2].lv | ET-A1-0008 | OLD_FINDING_STILL_PRESENT |
| ET-A1-0010 | a1-bis | study.examples[0].lv | ET-A1-0009 | OLD_FINDING_STILL_PRESENT |
| ET-A1-0011 | a1-bis | study.examples[1].lv | ET-A1-0010 | OLD_FINDING_STILL_PRESENT |
| ET-A1-0012 | a1-bis | study.examples[2].lv | ET-A1-0011 | OLD_FINDING_STILL_PRESENT |
| ET-A1-0013 | a1-bis | study.examples[3].lv | ET-A1-0012 | OLD_FINDING_STILL_PRESENT |
| ET-A1-0014 | a1-bis | study.comparison[2].meaning | ET-A1-0013 | OLD_FINDING_STILL_PRESENT |
| ET-A1-0015 | a1-bleiben | study.examples[0].lv | — | FALSE_POSITIVE_OR_STYLE_ONLY |

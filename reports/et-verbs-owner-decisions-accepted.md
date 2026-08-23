# ET–DE Verbs — OWNER DECISIONS ACCEPTED

**Authoritative source:** `reports/et-verbs-owner-decisions.md` from PR #634  
**Scope:** ET–DE Verbs · 189 verbs / 945 forms  
**Findings:** ET-VERB-0001–ET-VERB-0197  
**DE:** STRICT READ-ONLY  

## OWNER authority

This file is the **authoritative OWNER decision layer**. Audit/Luna proposals are not OWNER decisions unless this file explicitly accepts them.

Rules for deterministic materialization before apply:

1. `OWNER_NEW_OVERRIDE` → use the exact NEW written below.
2. `OWNER_ACCEPT_PROPOSED` → OWNER explicitly accepts the exact non-placeholder `PROPOSED_ET` from the authoritative source row as NEW.
3. `FALSE_POSITIVE` → do not change production.
4. No placeholder text such as `(Single natural Estonian form)`, `(Distinct Estonian for this verb)`, or `(Natural Estonian: …)` may survive into the materialized accepted mapping.
5. Before apply, materialize a full 197-row file containing exact `CURRENT_ET`, exact `OWNER NEW`, and final status. Then apply only `LABOT` rows under `REPAIR_APPLY_SAFETY_STANDARD.md`.

## Coverage

- SOURCE_FINDINGS: **197**
- OWNER_RESOLVED: **197/197**
- OWNER_NEW_OVERRIDE: **81**
- OWNER_ACCEPT_PROPOSED: **102**
- FALSE_POSITIVE: **14**
- NELABOT: **0**
- NEEDS_SOURCE_REVIEW: **0**
- PENDING: **0**

## A. OWNER NEW overrides

| Finding | Status | OWNER NEW |
|---|---|---|
| ET-VERB-0001 | LABOT | hammustanud |
| ET-VERB-0002 | LABOT | päästma |
| ET-VERB-0003 | LABOT | päästnud |
| ET-VERB-0004 | LABOT | pakkunud |
| ET-VERB-0007 | LABOT | sündinud |
| ET-VERB-0008 | LABOT | see kehtiks |
| ET-VERB-0009 | LABOT | haaranud |
| ET-VERB-0011 | LABOT | tundma |
| ET-VERB-0013 | LABOT | praadima |
| ET-VERB-0014 | LABOT | murdnud |
| ET-VERB-0016 | LABOT | toonud |
| ET-VERB-0018 | LABOT | palkama |
| ET-VERB-0021 | LABOT | tajuma |
| ET-VERB-0022 | LABOT | söönud |
| ET-VERB-0023 | LABOT | sõitnud |
| ET-VERB-0024 | LABOT | püüdnud |
| ET-VERB-0025 | LABOT | ta õgis |
| ET-VERB-0026 | LABOT | ta õgiks |
| ET-VERB-0027 | LABOT | õgima |
| ET-VERB-0028 | LABOT | õgima |
| ET-VERB-0029 | LABOT | õginud |
| ET-VERB-0030 | LABOT | õginud |
| ET-VERB-0031 | LABOT | ta õgib |
| ET-VERB-0034 | LABOT | ta edenes |
| ET-VERB-0037 | LABOT | edenema |
| ET-VERB-0040 | LABOT | ta edeneb |
| ET-VERB-0044 | LABOT | omama |
| ET-VERB-0047 | LABOT | tema nimi oli |
| ET-VERB-0048 | LABOT | tema nimi oleks |
| ET-VERB-0049 | LABOT | tema nimi on |
| ET-VERB-0051 | LABOT | ta suutis |
| ET-VERB-0052 | LABOT | ta suudaks |
| ET-VERB-0053 | LABOT | ta suudaks |
| ET-VERB-0054 | LABOT | suutma |
| ET-VERB-0055 | LABOT | ta suudab |
| ET-VERB-0056 | LABOT | ta laadis |
| ET-VERB-0057 | LABOT | ta laadiks |
| ET-VERB-0058 | LABOT | laadima |
| ET-VERB-0059 | LABOT | laadinud |
| ET-VERB-0060 | LABOT | ta laadib |
| ET-VERB-0061 | LABOT | ta laskis |
| ET-VERB-0062 | LABOT | ta laseks |
| ET-VERB-0063 | LABOT | laskma |
| ET-VERB-0064 | LABOT | lasknud |
| ET-VERB-0065 | LABOT | ta laseb |
| ET-VERB-0069 | LABOT | lamama |
| ET-VERB-0086 | LABOT | ta soovitas |
| ET-VERB-0087 | LABOT | ta soovitaks |
| ET-VERB-0088 | LABOT | soovitama |
| ET-VERB-0089 | LABOT | soovitama |
| ET-VERB-0090 | LABOT | soovitanud |
| ET-VERB-0091 | LABOT | soovitanud |
| ET-VERB-0092 | LABOT | ta soovitab |
| ET-VERB-0096 | LABOT | lõhnama |
| ET-VERB-0097 | LABOT | lõhnanud |
| ET-VERB-0098 | LABOT | maadlema |
| ET-VERB-0099 | LABOT | maadlema |
| ET-VERB-0101 | LABOT | voolanud |
| ET-VERB-0105 | LABOT | ta jõi |
| ET-VERB-0106 | LABOT | ta jooks |
| ET-VERB-0107 | LABOT | jooma |
| ET-VERB-0108 | LABOT | joonud |
| ET-VERB-0109 | LABOT | ta joob |
| ET-VERB-0110 | LABOT | ta joob |
| ET-VERB-0114 | LABOT | ta lahkus |
| ET-VERB-0115 | LABOT | ta lahkuks |
| ET-VERB-0116 | LABOT | lahkuma |
| ET-VERB-0117 | LABOT | lahkunud |
| ET-VERB-0118 | LABOT | ta lahkub |
| ET-VERB-0136 | LABOT | pidama |
| ET-VERB-0137 | LABOT | pidama |
| ET-VERB-0141 | LABOT | võrsuma |
| ET-VERB-0143 | LABOT | pistma |
| ET-VERB-0147 | LABOT | laiali lendama |
| ET-VERB-0154 | LABOT | ta astus |
| ET-VERB-0155 | LABOT | ta astuks |
| ET-VERB-0156 | LABOT | astuma |
| ET-VERB-0157 | LABOT | astunud |
| ET-VERB-0158 | LABOT | ta astub |
| ET-VERB-0180 | LABOT | väänama |
| ET-VERB-0188 | LABOT | vehklema |

## B. FALSE_POSITIVE — keep CURRENT unchanged

| Finding | Status | OWNER decision |
|---|---|---|
| ET-VERB-0032 | FALSE_POSITIVE | `külmunud` is correct for `gefroren`; proposed `külmetanud` changes the meaning. |
| ET-VERB-0045 | FALSE_POSITIVE | `tal on` is already the natural Estonian equivalent of `er hat`. |
| ET-VERB-0077 | FALSE_POSITIVE | `talle meeldib` is already a natural equivalent of `er mag`. |
| ET-VERB-0080 | FALSE_POSITIVE | `nimetama` is already correct for `nennen`. |
| ET-VERB-0095 | FALSE_POSITIVE | `jooksma` is already correct for `rennen`. |
| ET-VERB-0100 | FALSE_POSITIVE | `voolama` is already correct for `rinnen`. |
| ET-VERB-0113 | FALSE_POSITIVE | `kõlama` is already correct for `schallen`. |
| ET-VERB-0119 | FALSE_POSITIVE | PROPOSED equals CURRENT (`ta sõimaks`). |
| ET-VERB-0125 | FALSE_POSITIVE | `paisuma` is already correct for `schwellen`. |
| ET-VERB-0128 | FALSE_POSITIVE | `olema` is already correct for `sein`. |
| ET-VERB-0173 | FALSE_POSITIVE | `viskama` is already correct for `werfen`. |
| ET-VERB-0186 | FALSE_POSITIVE | `kaaluma` is already correct for `erwägen`. |
| ET-VERB-0189 | FALSE_POSITIVE | `punuma` is already correct for `flechten`. |
| ET-VERB-0190 | FALSE_POSITIVE | `punutud` is correct for `geflochten`; proposed `põimunud` is not the correct replacement here. |

## C. OWNER accepts the exact source PROPOSED_ET

For the IDs below, the source `PROPOSED_ET` is concrete (not a placeholder) and is **explicitly OWNER-approved as exact NEW**.

- `ET-VERB-0005`, `ET-VERB-0006`, `ET-VERB-0010`, `ET-VERB-0012`, `ET-VERB-0015`, `ET-VERB-0017`, `ET-VERB-0019`, `ET-VERB-0020`, `ET-VERB-0033`, `ET-VERB-0035`, `ET-VERB-0036`, `ET-VERB-0038`, `ET-VERB-0039`, `ET-VERB-0041`, `ET-VERB-0042`, `ET-VERB-0043`, `ET-VERB-0046`, `ET-VERB-0050`, `ET-VERB-0066`, `ET-VERB-0067`
- `ET-VERB-0068`, `ET-VERB-0070`, `ET-VERB-0071`, `ET-VERB-0072`, `ET-VERB-0073`, `ET-VERB-0074`, `ET-VERB-0075`, `ET-VERB-0076`, `ET-VERB-0078`, `ET-VERB-0079`, `ET-VERB-0081`, `ET-VERB-0082`, `ET-VERB-0083`, `ET-VERB-0084`, `ET-VERB-0085`, `ET-VERB-0093`, `ET-VERB-0094`, `ET-VERB-0102`, `ET-VERB-0103`, `ET-VERB-0104`
- `ET-VERB-0111`, `ET-VERB-0112`, `ET-VERB-0120`, `ET-VERB-0121`, `ET-VERB-0122`, `ET-VERB-0123`, `ET-VERB-0124`, `ET-VERB-0126`, `ET-VERB-0127`, `ET-VERB-0129`, `ET-VERB-0130`, `ET-VERB-0131`, `ET-VERB-0132`, `ET-VERB-0133`, `ET-VERB-0134`, `ET-VERB-0135`, `ET-VERB-0138`, `ET-VERB-0139`, `ET-VERB-0140`, `ET-VERB-0142`
- `ET-VERB-0144`, `ET-VERB-0145`, `ET-VERB-0146`, `ET-VERB-0148`, `ET-VERB-0149`, `ET-VERB-0150`, `ET-VERB-0151`, `ET-VERB-0152`, `ET-VERB-0153`, `ET-VERB-0159`, `ET-VERB-0160`, `ET-VERB-0161`, `ET-VERB-0162`, `ET-VERB-0163`, `ET-VERB-0164`, `ET-VERB-0165`, `ET-VERB-0166`, `ET-VERB-0167`, `ET-VERB-0168`, `ET-VERB-0169`
- `ET-VERB-0170`, `ET-VERB-0171`, `ET-VERB-0172`, `ET-VERB-0174`, `ET-VERB-0175`, `ET-VERB-0176`, `ET-VERB-0177`, `ET-VERB-0178`, `ET-VERB-0179`, `ET-VERB-0181`, `ET-VERB-0182`, `ET-VERB-0183`, `ET-VERB-0184`, `ET-VERB-0185`, `ET-VERB-0187`, `ET-VERB-0191`, `ET-VERB-0192`, `ET-VERB-0193`, `ET-VERB-0194`, `ET-VERB-0195`
- `ET-VERB-0196`, `ET-VERB-0197`

## D. Mandatory duplicate-field consistency

Where multiple audit findings point to the same production field, they must materialize to the same OWNER NEW:

- `ET-VERB-0027` + `ET-VERB-0028` → **`õgima`**
- `ET-VERB-0029` + `ET-VERB-0030` → **`õginud`**
- `ET-VERB-0034` + `ET-VERB-0035` → **`ta edenes`**
- `ET-VERB-0037` + `ET-VERB-0038` → **`edenema`**
- `ET-VERB-0040` + `ET-VERB-0041` → **`ta edeneb`**
- `ET-VERB-0052` + `ET-VERB-0053` → **`ta suudaks`**
- `ET-VERB-0088` + `ET-VERB-0089` → **`soovitama`**
- `ET-VERB-0090` + `ET-VERB-0091` → **`soovitanud`**
- `ET-VERB-0098` + `ET-VERB-0099` → **`maadlema`**
- `ET-VERB-0101` + `ET-VERB-0102` → **`voolanud`**
- `ET-VERB-0109` + `ET-VERB-0110` → **`ta joob`**
- `ET-VERB-0136` + `ET-VERB-0137` → **`pidama`**

## Apply gate

Before any write:

- `actual production value === CURRENT_ET`
- mismatch → SKIP that exact row
- write only OWNER `LABOT`
- `FALSE_POSITIVE` untouched
- DE untouched
- after write: production value === OWNER NEW
- mirror / syntax / count / ID order regression must PASS

**OWNER VERDICT:** `ET_VERBS_OWNER_REVIEW_197_COMPLETE`

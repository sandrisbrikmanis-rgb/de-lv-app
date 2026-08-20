# ET–DE A1 — OWNER DECISIONS — ACCEPTED (v17 audit)

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.7
**Source audit:** PR #600
**MAIN_BASE_SHA:** `6f74ddf4e721eed5e264132dc5f96d445f45586e`
**Findings reviewed:** **23/23**
**DE:** **STRICT READ-ONLY**

**OWNER kopsavilkums:** **6 LABOT applied** · **11 sectionAccents LABOT applied** · **5 NELABOT** · **1 FALSE_POSITIVE** · **0 NEEDS_SOURCE_REVIEW** · **0 PENDING**

Apply: **6** lingvistiskie LABOT + **11** sectionAccents accent-term sync (COPY-ONLY, bez ET prozas izmaiņām).

## Pilna tabula (23 findingi)

| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |
|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|
| ET-A1-0001 | a1-huebsch | study.sectionAccents (examples) | seljas | kleit / kena | MEDIUM | SECTIONACCENTS_LANGUAGE | LABOT | kleit, kena | Accent-term sync to ET text. |
| ET-A1-0002 | a1-huebsch | study.sectionAccents (examples) | Tal on seljas kena kleit. | kena | MEDIUM | SECTIONACCENTS_LANGUAGE | LABOT | kena | Accent-term sync. |
| ET-A1-0003 | a1-sicher | study.sectionAccents (examples) | arvatavasti | kindlasti | MEDIUM | SECTIONACCENTS_LANGUAGE | LABOT | kindlasti | Accent-term sync. |
| ET-A1-0004 | a1-sitzen | study.sectionAccents (examples) | seisab | istub | MEDIUM | SECTIONACCENTS_LANGUAGE | LABOT | istub | Match ET lv text. |
| ET-A1-0005 | a1-sitzen | study.sectionAccents (examples) | lamab | istub | MEDIUM | SECTIONACCENTS_LANGUAGE | LABOT | istub | Match ET lv text. |
| ET-A1-0006 | a1-stehen | study.sectionAccents (examples) | istub | seisab | MEDIUM | SECTIONACCENTS_LANGUAGE | LABOT | seisab | Match ET lv text. |
| ET-A1-0007 | a1-baden | study.sectionAccents.comparison.meaning | ujuma | ujumist | MEDIUM | SECTIONACCENTS_LANGUAGE | LABOT | ujumist | Sync to comparison meaning. |
| ET-A1-0008 | a1-baden | study.sectionAccents.comparison.meaning | liikumisena | liikumise | MEDIUM | SECTIONACCENTS_LANGUAGE | LABOT | liikumise | Sync to comparison meaning. |
| ET-A1-0009 | a1-baden | study.sectionAccents.comparison.meaning | spordina | spordialana | MEDIUM | SECTIONACCENTS_LANGUAGE | LABOT | spordialana | Sync to comparison meaning. |
| ET-A1-0010 | a1-gleich | study.sectionAccents.examples.lv | kohe | varsti | MEDIUM | SECTIONACCENTS_LANGUAGE | LABOT | varsti | Example [4] Näeme varsti! |
| ET-A1-0011 | a1-huebsch | study.sectionAccents.examples.lv | seljas | kleit | MEDIUM | SECTIONACCENTS_LANGUAGE | LABOT | kleit | Duplicate of 0001 field. |
| ET-A1-0012 | a1-Freundin-202 | etText | sõbratar | sõbranna | MEDIUM | SEMANTICS | LABOT | sõbranna | Neitrālāks ekvivalents vācu Freundin nozīmei. |
| ET-A1-0013 | a1-Handschuh-268 | etText | kinnas | kinnas | HIGH | TRANSLATION | FALSE_POSITIVE | | CURRENT jau pareizs; PROPOSED identisks. |
| ET-A1-0014 | a1-bis | study.examples[1].lv | jää siia, kuni ma tagasi tulen. | Jää siia, kuni ma tagasi tulen. | LOW | ORTHOGRAPHY | LABOT | Jää siia, kuni ma tagasi tulen. | Teikuma sākuma lielais burts. |
| ET-A1-0015 | a1-bis | study.examples[2].lv | ma õpin saksa keelt õhtuni. | Ma õpin saksa keelt õhtuni. | LOW | ORTHOGRAPHY | LABOT | Ma õpin saksa keelt õhtuni. | Teikuma sākuma lielais burts. |
| ET-A1-0016 | a1-hand-study | study.examples[2].lv | Mu käsivars valutab. | Mu käsi valutab. | MEDIUM | SEMANTICS | LABOT | Mu käsi valutab. | Hand = käsi; käsivars šaurāka nozīme. |
| ET-A1-0017 | a1-heißen | study.translation | nimi olema • tähendama | nime kandma • tähendama | MEDIUM | NATURALNESS | LABOT | nime kandma • tähendama | nime kandma idiomātiskāks. |
| ET-A1-0019 | a1-ihr | study.examples[5].lv | see on tema auto. | See on tema auto. | LOW | ORTHOGRAPHY | LABOT | See on tema auto. | Teikuma sākuma lielais burts. |
| ET-A1-0020 | a1-reis | study.examples[2].lv | kas sa keedad riisi? | valmistad riisi? | MEDIUM | SEMANTICS | NELABOT | | CURRENT gramatiski derīgs. |
| ET-A1-0022 | a1-sitzen | study.examples[2].lv | ta istub ukse juures. | ta seisab ukse juures. | HIGH | SEMANTICS | NELABOT | | ET istub atbilst sitzen. |
| ET-A1-0023 | a1-sitzen | study.examples[3].lv | kass istub diivanil. | kass lamab diivanil. | HIGH | SEMANTICS | NELABOT | | ET istub atbilst sitzen. |
| ET-A1-0024 | a1-stehen | study.examples[2].lv | ta seisab laua ääres. | ta istub laua ääres. | HIGH | SEMANTICS | NELABOT | | ET seisab atbilst stehen. |
| ET-A1-0025 | a1-werden | study.examples[3].lv | ma olen väsinud. | ma väsin. | HIGH | SEMANTICS | NELABOT | | Nav droši pārrakstīt bez pilna DE piemēra. |

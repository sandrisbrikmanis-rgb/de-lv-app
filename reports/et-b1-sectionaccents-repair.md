# ET–DE B1 sectionAccents deterministic repair

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Baseline:** post–PR #624 `main`

## Summary

| Metric | Value |
|---|---|
| MAIN_BASE_SHA | **0177b77090fa19566df586a450332cee26ea6532** |
| PRODUCTION_BLOB_BEFORE | **923efe8534f64e185e1a2640f145c2fb9646613f** |
| PRODUCTION_BLOB_AFTER | **16804eec669aa16de08ea6bbbddd8dbbb9b3fbfb** |
| SECTIONACCENTS_RAW_BEFORE | **1639** |
| SECTIONACCENTS_DEDUPED_BEFORE | **159** |
| REQUESTED_TARGETS | **159** |
| AUTO_REPAIRABLE | **326** |
| OWNER_DECISION_REQUIRED | **0** |
| APPLIED_VERIFIED | **326** |
| CURRENT_VALUE_MISMATCH | **0** |
| MISSING_PATH | **12** |
| SECTIONACCENTS_RAW_AFTER | **0** |
| SECTIONACCENTS_DEDUPED_AFTER | **0** |
| ET_PROSE_CHANGES | **0** |
| DE_CHANGES | **0** |
| MIRROR | **PASS** |
| SYNTAX | **PASS** |
| OWNER_1054_RETAINED | **1054** |
| collect sectionAccentsIssues (before → after) | **3549 → 0** |
| validate-study-design sectionAccentIssues (after) | **0** |
| fix passes | **2** |
| auto-fixed terms | **263** |
| orphan comparison removed | **12** |
| reshaped tip blocks | **51** |
| changed cards | **150** |

## Verdict

**ET_B1_SECTIONACCENTS_REPAIR_PASS**

## Sample repairs (first 40)

| Card ID | section | field | before | after | action |
|---------|---------|-------|--------|-------|--------|
| b1-abhängen | comparison[0] | — | (orphan block) | (removed) | DROP_ORPHAN_COMPARISON |
| b1-absatz | examples[2] | lv | kontsa | kingakonts | REPLACE |
| b1-absatz | examples[2] | lv | kinga | kingakonts | REPLACE |
| b1-absetzen | comparison[0] | — | (orphan block) | (removed) | DROP_ORPHAN_COMPARISON |
| b1-anmachen | comparison[0] | — | (orphan block) | (removed) | DROP_ORPHAN_COMPARISON |
| b1-anmachen | examples[2] | lv | valmistab | maitsestab | REPLACE |
| b1-aufführen | examples[1] | lv | märgitud | nimed | REPLACE |
| b1-sich-aufhalten | examples[2] | lv | takistas | viibisime | REPLACE |
| b1-sich-aufhalten | examples[2] | lv | Ummik | ummikus | REPLACE |
| b1-ausstellen | comparison[0] | — | (orphan block) | (removed) | DROP_ORPHAN_COMPARISON |
| b1-ausüben | examples[0] | lv | elukutsel | töötab | REPLACE |
| b1-behandeln | examples[1] | lv | kõigiga | kohtleb | REPLACE |
| b1-behandeln | examples[1] | lv | käitub | kohtleb | REPLACE |
| b1-behandeln | comparison[0] | meaning | ravima / käituma / teemat käsitlema | ravima | REPLACE |
| b1-behandeln | important[0] | — | tulemus | behandeln | REPLACE |
| b1-belegen | examples[1] | lv | kursusele | kursusel | REPLACE |
| b1-belegen | examples[1] | lv | registreerun | osalen | REPLACE |
| b1-belegen | comparison[0] | meaning | hõivama / registreeruma / tõestama | hõivama | REPLACE |
| b1-sich-bemühen | examples[0] | lv | olla õigel ajal | pingutan | REPLACE |
| b1-sich-bemühen | explanation[0] | — | zu + infinitiiv | zu + infinitiiviga | REPLACE |
| b1-bereich | examples[0] | lv | sotsiaal | sotsiaalvaldkonnas | REPLACE |
| b1-bereich | examples[0] | lv | valdkonnas | sotsiaalvaldkonnas | REPLACE |
| b1-bereich | examples[2] | lv | Tervishoiu | tervishoiuvaldkonnas | REPLACE |
| b1-bereich | examples[2] | lv | valdkonnas | tervishoiuvaldkonnas | REPLACE |
| b1-berühmtheit | comparison[0] | meaning | kuulsus / kuulsa isik | kuulsus | REPLACE |
| b1-beschwerde | comparison[1] | meaning | kohtuhagi | vaie | REPLACE |
| b1-beschwerde | examples[2] | lv | selja | seljavaevused | REPLACE |
| b1-beschwerde | examples[2] | lv | vaevused | seljavaevused | REPLACE |
| b1-bestehen | examples[3] | lv | nõuab | jääb | REPLACE |
| b1-bestehen | examples[3] | lv | arvamust | arvamusele | REPLACE |
| b1-bieten | explanation[0] | — | hüve | hüvena | REPLACE |
| b1-block | examples[2] | lv | jää | jääklots | REPLACE |
| b1-block | examples[2] | lv | klots | jääklots | REPLACE |
| b1-bogen | examples[0] | lv | Kaar | vibu | REPLACE |
| b1-dagegen | comparison[1] | meaning | selle poolt | selle | REPLACE |
| b1-dank-study | comparison[2] | example | sind | Ich | REPLACE |
| b1-dank-study | comparison[2] | example | tänan | Ich | REPLACE |
| b1-daran | comparison[0] | meaning | selle peale / selle juures | selle | REPLACE |
| b1-dienen | examples[0] | lv | teenib | see | REPLACE |
| b1-dienen | examples[1] | lv | teenib | nupp | REPLACE |

_Applied: 2026-08-23T10:33:10.664Z_
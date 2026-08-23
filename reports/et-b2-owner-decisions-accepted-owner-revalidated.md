# ET–DE B2 — OWNER DECISIONS ACCEPTED — OWNER REVALIDATED

**Source audit:** PR #628 · MASTER v1.9  
**Original OWNER source:** `reports/et-b2-owner-decisions-group01.md` … `group08.md` (355 PENDING findings)  
**Reference generated mapping:** `reports/et-b2-owner-decisions-accepted.md`  
**OWNER revalidation:** 355/355 reviewed against the original PENDING audit rows  
**Scope:** ET–DE B2 only  
**DE:** STRICT READ-ONLY  

## Authority

This file is the authoritative OWNER acceptance layer for ET–DE B2.

All 355 findings were reviewed. For any Audit ID **not listed in the override table below**, the existing row in `reports/et-b2-owner-decisions-accepted.md` is **OWNER-CONFIRMED exactly as written** (same status and OWNER NEW).

For Audit IDs listed below, this file **supersedes** the existing generated accepted row. Cursor must use the replacement OWNER STATUS / OWNER NEW from this file.

This is not a new audit. No Luna/FULL_DISCOVERY is required.

## Coverage

- SOURCE_FINDINGS: **355**
- OWNER_REVIEWED: **355/355**
- PENDING: **0**
- OWNER AUTHORITY: **PASS**
- BASE GENERATED MAPPING: **NOT authoritative without this revalidation file**

## OWNER overrides

| Audit ID | OWNER STATUS | OWNER NEW / exact action | OWNER NOTE |
|---|---|---|---|
| ET-B2-0001 | LABOT | Remove `study` only from `b2-genosse`, `b2-genossin`, `b2-neger`, `b2-pacht`; final ET Study count = 60 | The 64→60 mismatch is a real structural finding, not a false positive. Exact TRUE_EXTRA_STUDY objects are known. |
| ET-B2-0002 | LABOT | `Es gibt Hochwasser. = On üleujutus.` | Corrects the generated erroneous `On on üleujutused.` |
| ET-B2-0003 | LABOT | `Die Überschwemmung zerstörte Häuser. = Üleujutus hävitas maju.` | Match singular German subject naturally in ET. |
| ET-B2-0022 | LABOT | `väidetavalt • väidetav` | `angeblich` = alleged/allegedly; `oletatav` is less exact here. |
| ET-B2-0023 | LABOT | `ümber veenma • millestki loobuma panema • kõrvale juhtima` | `abbringen` is dissuade/divert, not generic `ära hoidma`. |
| ET-B2-0035 | LABOT | `välised tunnused • pealiskaudsus` | More natural ET than `välisus`. |
| ET-B2-0043 | LABOT | `välja saatma • isikut tõendama • kinnitama • tõestama` | `ausweisen` includes expel and identify/prove; `välja tõrjuma` was not the correct second sense. |
| ET-B2-0050 | LABOT | `enneolematu • võrreldamatu` | Remove duplicated `enneolematu`. |
| ET-B2-0052 | FALSE_POSITIVE |  | `tänavakate` is already a correct natural ET equivalent of `Straßenbelag`; no repair required. |
| ET-B2-0061 | LABOT | `vapustatud • kohkunud` | `bestürzt` is stronger than simple surprise/confusion. |
| ET-B2-0065 | LABOT | `saak • röövsaak` | `saagis` is crop/yield and is not the correct `Beute` sense. |
| ET-B2-0070 | LABOT | `sete • pärmisete` | More precise than bare `pärm` for sediment/dregs context. |
| ET-B2-0077 | LABOT | `kodanlik • kodaniku-` | Remove duplicate and keep valid adjective/compound stem. |
| ET-B2-0080 | LABOT | `narkodiiler` | Natural concise ET lexical equivalent. |
| ET-B2-0093 | LABOT | `läbi aitama • läbi viima • ülal pidama • raiskama` | Better coverage of `durchbringen`; remove inaccurate `saavutama` / `välja ravima` chain. |
| ET-B2-0099 | LABOT | `abiellumine • abielu sõlmimine` | Avoid narrowing to religious `laulatamine`. |
| ET-B2-0100 | LABOT | `austama • lugu pidama` | `au sees hoidma` is unnecessary as a third main gloss. |
| ET-B2-0130 | LABOT | `määrus • korraldus • dekreet • võlast vabastamine` | `Erlass` includes decree/order and remission. |
| ET-B2-0143 | LABOT | `räbal • riba` | Keep dictionary headword forms singular. |
| ET-B2-0147 | LABOT | `muidugi • tõsi küll` | Natural core senses of `freilich`; avoid overloading with generic `aga`. |
| ET-B2-0152 | LABOT | `juhiloomus • juhivõimed` | Natural ET for `Führernatur`. |
| ET-B2-0158 | LABOT | `gaasiarvesti näidu lugeja` | `Gasableser` is the person who reads the gas meter. |
| ET-B2-0159 | LABOT | `põdur • nõrk` | Natural concise ET for `gebrechlich`. |
| ET-B2-0163 | LABOT | `teene • heameel` | `Gefallen` includes favour/pleasure; generated mapping omitted the central `teene` sense. |
| ET-B2-0165 | LABOT | `tujus` | Natural adjective-like equivalent for `gelaunt`. |
| ET-B2-0166 | LABOT | `armastatu • kallim` | Natural noun equivalents. |
| ET-B2-0167 | LABOT | `segu • kokteil` | `segum` is unnecessary/nonstandard here. |
| ET-B2-0170 | LABOT | `huupi • hea õnne peale` | Correct idiomatic meaning of `aufs Geratewohl`. |
| ET-B2-0175 | LABOT | `hoiak • veendumused` | `Gesinnung` = attitude/convictions, not mood. |
| ET-B2-0183 | LABOT | `kiilaspea • kiilaspäisus` | Better lexical coverage of `Glatze`. |
| ET-B2-0190 | LABOT | `tervitussõnad • tervituskõne` | `Grußwort` can be greeting words/address; more exact than only speech. |
| ET-B2-0193 | LABOT | `headus • kvaliteet` | `Güte` = goodness/quality; use natural noun `headus`. |
| ET-B2-0204 | LABOT | `aspekt • suhe` | `Hinsicht` = respect/aspect; `seisukoht` is not the core lexical equivalent. |
| ET-B2-0207 | LABOT | `tuline • äge • kiiresti vihastuv` | Remove literal/general `kuum` from the main gloss chain. |
| ET-B2-0208 | LABOT | `kvaliteetne • kõrgekvaliteediline` | More exact for `hochwertig`. |
| ET-B2-0254 | LABOT | `liivamadal` | Exact `Sandbank` meaning. |
| ET-B2-0278 | LABOT | `kuriteoteade • avaldus politseile` | `Strafanzeige` is a criminal complaint/report, not the opening of a case itself. |
| ET-B2-0279 | LABOT | `võitluslik • vaidlushimuline` | Generated `tülivõimeline` is unnatural ET. |
| ET-B2-0291 | LABOT | `ringi küsima • maad kuulama` | Natural ET for `sich umhören`; avoid `ringi küsitlema`. |
| ET-B2-0292 | LABOT | `sisse piirama • hõlmama • ümbritsema` | Natural transitive senses of `umschließen`. |
| ET-B2-0293 | LABOT | `ümber sõnastama • kirjeldama` | Preserve both principal senses of `umschreiben`. |
| ET-B2-0304 | LABOT | `pärand • annak` | `Vermächtnis` = legacy/bequest, not the testament document. |
| ET-B2-0305 | LABOT | `vara • võime` | `Vermögen` covers wealth/property and ability/capacity. |
| ET-B2-0317 | LABOT | `täielik • täiesti` | Remove mixed/duplicative adverb chain. |
| ET-B2-0318 | LABOT | `täies koosseisus` | Natural ET for `vollzählig`. |
| ET-B2-0340 | LABOT | `Ta avab auto kapoti.` | Sentence capitalization + natural wording. |
| ET-B2-0341 | LABOT | `Auto kapott on katki.` | Sentence capitalization + natural wording. |
| ET-B2-0342 | LABOT | `Pane pajale kaas.` | Sentence capitalization + natural wording. |
| ET-B2-0344 | LABOT | `osutuma millekski • selguma` | Preserve both common senses of `sich herausstellen`. |
| ET-B2-0352 | LABOT | `See ei meeldi mulle.` | Sentence capitalization. |

## Locked false-positive / superseded rows

The following existing generated decisions are OWNER-CONFIRMED as FALSE_POSITIVE/superseded and must not be independently applied as content repairs:

- ET-B2-0014
- ET-B2-0015
- ET-B2-0016
- ET-B2-0017
- ET-B2-0018
- ET-B2-0083
- ET-B2-0337
- ET-B2-0338
- ET-B2-0346

`ET-B2-0001` is **not** a false positive; it is the authoritative structural LABOT action above.

## Cursor apply/revalidation rule

1. Load the original 355 PENDING OWNER rows from PR #628.
2. Load `reports/et-b2-owner-decisions-accepted.md` only as the base generated mapping.
3. Apply this file as the final OWNER authority:
   - listed override IDs replace the base generated decision;
   - all unlisted IDs are OWNER-CONFIRMED exactly as currently written in the base generated mapping.
4. Compare every OWNER LABOT NEW against current `main` production after PR #632.
5. If production already equals OWNER NEW → `OWNER_MATCH_CONFIRMED`, no write.
6. If production differs → repair only that exact field using the original CURRENT/path identity and this OWNER NEW.
7. Structural ET-B2-0001 is satisfied only if the four exact Study objects are absent and Study parity = 60/60.
8. DE = STRICT READ-ONLY.
9. Mirror/syntax/ID/order/structure must PASS.
10. No new Luna/FULL_DISCOVERY.

## Final OWNER verdict

`ET_B2_OWNER_REVALIDATION_355_COMPLETE`

The prior PR #632 closure is not OWNER-authoritative until current production is checked against this revalidated OWNER authority.

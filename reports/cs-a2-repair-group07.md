# CS–DE A2 Repair Group 07

COPY-ONLY repair from `scripts/cs-a2-repair-group07-spec.json`.

## Summary

| Metric | Value |
|---|---|
| requested | 50 |
| processed | 50/50 |
| APPLIED | 49 |
| ALREADY_CORRECT | 1 |
| CURRENT_VALUE_MISMATCH | 0 |
| CARD_NOT_FOUND | 0 |
| INDEX_MISMATCH | 0 |
| DE_MISMATCH_BLOCKED | 0 |

## Changed cards

a2-insgesamt-710, a2-Interesse-714, a2-irgendein-717, a2-irgendwohin-721, a2-je, a2-jemals-729, a2-jemanden baden-730, a2-jener-731, a2-jetzig-732, a2-Job-733, a2-jobben-734, a2-joggen-735, a2-Kaffeepulver-748, a2-kamm, a2-Kaninchen-758, a2-Kanne-759, a2-Kappe-762, a2-kaputt-763, a2-kaputtgehen-764, a2-Karamelle-765, a2-Karate-766, a2-Käsekuchen-771, a2-kaum, a2-keller, a2-kennen, a2-wissen, a2-Kinderheim-797, a2-klar, a2-kleben, a2-kleiden, a2-Kleingarten-813, a2-Kleingeld-814, a2-Klingel-817, a2-klingeln-818, a2-klopfen-819, a2-knien-823, a2-Konfekt-827, a2-Kopie-833, a2-Kostüm-839, a2-kraft, a2-Krankenhaus-843, a2-Kreditkarte-845, a2-kühl-851, a2-kühlen-852, a2-kurz, a2-lage, a2-Lamm-859, a2-langweilen-863, a2-läuten-866

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 16 |
| LV remnants (repaired cards) | 134 |
| regression findings documented | 150 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-je | jo ... jo |
| a2-kamm | Pohlaví |
| a2-kaum | Právě |
| a2-kennen | Poznat |
| a2-klar | dzidrs, nozīmēt, ūdens |
| a2-kleben | Drby, plāksteris, nelīp |
| a2-lage | Situaci |

## LV remnants (documented, not auto-fixed)

- a2-kamm `study.important.example`: LV_DIACRITIC
- a2-kamm `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-kamm `study.sectionAccents.important[0].example.green[1]`: LV_DIACRITIC
- a2-kamm `study.accents.purple[0]`: LV_DIACRITIC
- a2-kamm `study.accents.purple[1]`: LV_DIACRITIC
- a2-kamm `study.accents.purple[2]`: LV_DIACRITIC
- a2-kamm `study.accents.green[3]`: LV_DIACRITIC
- a2-kamm `study.accents.green[4]`: LV_DIACRITIC
- a2-kamm `study.accents.green[5]`: LV_DIACRITIC
- a2-klar `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-klar `study.sectionAccents.tip.leftBlocks[1].text.orange[0]`: LV_DIACRITIC
- a2-klar `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-klar `study.sectionAccents.important[0].example.red[3]`: LV_DIACRITIC
- a2-klar `study.accents.blue[1]`: LV_DIACRITIC
- a2-klar `study.accents.blue[4]`: LV_DIACRITIC
- a2-klar `study.accents.blue[5]`: LV_DIACRITIC
- a2-klar `study.accents.blue[6]`: LV_DIACRITIC
- a2-klar `study.accents.blue[12]`: LV_DIACRITIC
- a2-klar `study.accents.green[0]`: LV_DIACRITIC
- a2-klar `study.accents.orange[0]`: LV_DIACRITIC
- a2-klar `study.accents.purple[1]`: LV_DIACRITIC
- a2-klar `study.accents.purple[2]`: LV_DIACRITIC
- a2-kleben `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-kleben `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-kleben `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-kleben `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-kleben `study.sectionAccents.tip.leftBlocks[1].text.yellow[4]`: LV_DIACRITIC
- a2-kleben `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-kleben `study.sectionAccents.important[0].example.red[4]`: LV_DIACRITIC
- a2-kleben `study.accents.blue[1]`: LV_DIACRITIC
- a2-kleben `study.accents.blue[2]`: LV_DIACRITIC
- a2-kleben `study.accents.blue[4]`: LV_DIACRITIC
- a2-kleben `study.accents.blue[6]`: LV_DIACRITIC
- a2-kleben `study.accents.blue[8]`: LV_DIACRITIC
- a2-kleben `study.accents.blue[10]`: LV_DIACRITIC
- a2-kleben `study.accents.blue[11]`: LV_DIACRITIC
- a2-kleben `study.accents.blue[14]`: LV_DIACRITIC
- a2-kleben `study.accents.blue[15]`: LV_DIACRITIC
- a2-kleben `study.accents.blue[16]`: LV_DIACRITIC
- a2-kleben `study.accents.blue[17]`: LV_DIACRITIC
- a2-kleben `study.accents.green[0]`: LV_DIACRITIC
- a2-kleben `study.accents.yellow[0]`: LV_DIACRITIC
- a2-kleben `study.accents.orange[0]`: LV_DIACRITIC
- a2-kleben `study.accents.orange[1]`: LV_DIACRITIC
- a2-kleben `study.accents.purple[0]`: LV_DIACRITIC
- a2-kleben `study.accents.purple[1]`: LV_DIACRITIC
- a2-kleben `study.accents.purple[2]`: LV_DIACRITIC
- a2-kleben `study.accents.purple[3]`: LV_DIACRITIC
- a2-kleben `study.accents.red[0]`: LV_DIACRITIC
- a2-kleiden `study.examples[4].lv`: PL_CHAR
- a2-kleiden `study.sectionAccents.tip.leftBlocks[0].text.green[1]`: LV_DIACRITIC
- a2-kleiden `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-kleiden `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-kleiden `study.sectionAccents.tip.leftBlocks[1].text.yellow[4]`: LV_DIACRITIC
- a2-kleiden `study.sectionAccents.tip.leftBlocks[1].text.yellow[5]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[1]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[2]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[3]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[4]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[5]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[7]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[8]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[9]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[10]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[11]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[12]`: LV_DIACRITIC
- a2-kleiden `study.accents.blue[14]`: LV_DIACRITIC
- a2-kleiden `study.accents.green[1]`: LV_DIACRITIC
- a2-kleiden `study.accents.yellow[1]`: LV_DIACRITIC
- a2-kleiden `study.accents.orange[1]`: LV_DIACRITIC
- a2-kleiden `study.accents.purple[0]`: LV_DIACRITIC
- a2-kleiden `study.accents.purple[1]`: LV_DIACRITIC
- a2-kleiden `study.accents.purple[2]`: LV_DIACRITIC
- a2-kleiden `study.accents.purple[4]`: LV_DIACRITIC
- a2-körper `study.important.example`: LV_DIACRITIC
- a2-körper `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-körper `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-körper `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-körper `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-körper `study.sectionAccents.important[0].text.red[1]`: LV_DIACRITIC
- a2-körper `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-körper `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-körper `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-körper `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-körper `study.accents.blue[3]`: LV_DIACRITIC
- a2-körper `study.accents.blue[4]`: LV_DIACRITIC
- a2-körper `study.accents.blue[5]`: LV_DIACRITIC
- a2-körper `study.accents.blue[6]`: LV_DIACRITIC
- a2-körper `study.accents.blue[7]`: LV_DIACRITIC
- a2-körper `study.accents.blue[8]`: LV_DIACRITIC
- a2-körper `study.accents.blue[9]`: LV_DIACRITIC
- a2-körper `study.accents.blue[12]`: LV_DIACRITIC
- a2-körper `study.accents.blue[13]`: LV_DIACRITIC
- a2-körper `study.accents.blue[14]`: LV_DIACRITIC
- a2-körper `study.accents.green[0]`: LV_DIACRITIC
- a2-körper `study.accents.orange[0]`: LV_DIACRITIC
- a2-körper `study.accents.purple[0]`: LV_DIACRITIC
- a2-körper `study.accents.purple[1]`: LV_DIACRITIC
- a2-körper `study.accents.purple[3]`: LV_DIACRITIC
- a2-körper `study.accents.purple[4]`: LV_DIACRITIC
- a2-kraft `study.important.example`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.tip.leftBlocks[0].text.yellow[3]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.important[0].text.orange[0]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.important[0].text.red[2]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-kraft `study.sectionAccents.important[0].example.red[5]`: LV_DIACRITIC
- a2-kraft `study.accents.blue[2]`: LV_DIACRITIC
- a2-kraft `study.accents.blue[3]`: LV_DIACRITIC
- a2-kraft `study.accents.blue[4]`: LV_DIACRITIC
- a2-kraft `study.accents.blue[5]`: LV_DIACRITIC
- a2-kraft `study.accents.blue[7]`: LV_DIACRITIC
- a2-kraft `study.accents.blue[9]`: LV_DIACRITIC
- a2-kraft `study.accents.blue[10]`: LV_DIACRITIC
- a2-kraft `study.accents.blue[11]`: LV_DIACRITIC
- a2-kraft `study.accents.blue[14]`: LV_DIACRITIC
- a2-kraft `study.accents.blue[15]`: LV_DIACRITIC
- a2-kraft `study.accents.blue[16]`: LV_DIACRITIC
- a2-kraft `study.accents.yellow[2]`: LV_DIACRITIC
- a2-kraft `study.accents.orange[0]`: LV_DIACRITIC
- a2-kraft `study.accents.orange[1]`: LV_DIACRITIC
- a2-kraft `study.accents.purple[0]`: LV_DIACRITIC
- a2-kraft `study.accents.purple[1]`: LV_DIACRITIC
- a2-kraft `study.accents.purple[2]`: LV_DIACRITIC
- a2-kraft `study.accents.purple[3]`: LV_DIACRITIC
- a2-kraft `study.accents.purple[6]`: LV_DIACRITIC

## Regression

Deterministic post-repair check on 50 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 301 | a2-insgesamt-710 | 710 | APPLIED |
| 302 | a2-Interesse-714 | 714 | APPLIED |
| 303 | a2-irgendein-717 | 717 | APPLIED |
| 304 | a2-irgendwohin-721 | 721 | APPLIED |
| 305 | a2-je | 726 | APPLIED |
| 306 | a2-jemals-729 | 729 | APPLIED |
| 307 | a2-jemanden baden-730 | 730 | APPLIED |
| 308 | a2-jener-731 | 731 | APPLIED |
| 309 | a2-jetzig-732 | 732 | APPLIED |
| 310 | a2-Job-733 | 733 | APPLIED |
| 311 | a2-jobben-734 | 734 | APPLIED |
| 312 | a2-joggen-735 | 735 | APPLIED |
| 313 | a2-Kaffeepulver-748 | 748 | APPLIED |
| 314 | a2-kamm | 755 | APPLIED |
| 315 | a2-Kaninchen-758 | 758 | APPLIED |
| 316 | a2-Kanne-759 | 759 | APPLIED |
| 317 | a2-Kappe-762 | 762 | APPLIED |
| 318 | a2-kaputt-763 | 763 | APPLIED |
| 319 | a2-kaputtgehen-764 | 764 | APPLIED |
| 320 | a2-Karamelle-765 | 765 | APPLIED |
| 321 | a2-Karate-766 | 766 | APPLIED |
| 322 | a2-Käsekuchen-771 | 771 | APPLIED |
| 323 | a2-kaum | 783 | APPLIED |
| 324 | a2-keller | 786 | APPLIED |
| 325 | a2-kennen | 788 | APPLIED |
| 326 | a2-wissen | 789 | APPLIED |
| 327 | a2-Kinderheim-797 | 797 | APPLIED |
| 328 | a2-klar | 806 | APPLIED |
| 329 | a2-kleben | 808 | APPLIED |
| 330 | a2-kleiden | 810 | APPLIED |
| 331 | a2-Kleingarten-813 | 813 | APPLIED |
| 332 | a2-Kleingeld-814 | 814 | APPLIED |
| 333 | a2-Klingel-817 | 817 | APPLIED |
| 334 | a2-klingeln-818 | 818 | APPLIED |
| 335 | a2-klopfen-819 | 819 | APPLIED |
| 336 | a2-knien-823 | 823 | APPLIED |
| 337 | a2-Konfekt-827 | 827 | APPLIED |
| 338 | a2-Kopie-833 | 833 | APPLIED |
| 339 | a2-körper | 836 | ALREADY_CORRECT |
| 340 | a2-Kostüm-839 | 839 | APPLIED |
| 341 | a2-kraft | 840 | APPLIED |
| 342 | a2-Krankenhaus-843 | 843 | APPLIED |
| 343 | a2-Kreditkarte-845 | 845 | APPLIED |
| 344 | a2-kühl-851 | 851 | APPLIED |
| 345 | a2-kühlen-852 | 852 | APPLIED |
| 346 | a2-kurz | 855 | APPLIED |
| 347 | a2-lage | 857 | APPLIED |
| 348 | a2-Lamm-859 | 859 | APPLIED |
| 349 | a2-langweilen-863 | 863 | APPLIED |
| 350 | a2-läuten-866 | 866 | APPLIED |

## Branch

`cursor/cs-a2-repair-group07-6ea4`

_Generated: 2026-08-13T19:21:49.282Z_
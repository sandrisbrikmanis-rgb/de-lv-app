# CS–DE A2 Repair Group 03

COPY-ONLY repair from `scripts/cs-a2-repair-group03-spec.json`.

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

a2-Bauarbeiter-204, a2-Bauchweh-205, a2-bauen, a2-bauer, a2-Bäuerin-208, a2-beachten-210, a2-becher, a2-bedienen, a2-bedienung, a2-Beet-216, a2-Beginn-217, a2-begrüßen-219, a2-Begrüßung-220, a2-behalten, a2-beinahe, a2-beißen-223, a2-bekannt, a2-Bekannte-226, a2-beliebt-227, a2-bellen-228, a2-benötigen-229, a2-benützen-230, a2-bequem-232, a2-besitzen-238, a2-Besitzer-239, a2-besonders-240, a2-bestellen, a2-bestimmt, a2-beten-246, a2-bevor-248, a2-bewundern-250, a2-birne, a2-bitte-study, a2-bitter, a2-blind-262, a2-blühen-264, a2-boden, a2-borgen, a2-böse, a2-brav, a2-Bremse-287, a2-brennen, a2-Briefmarke-291, a2-Bügeleisen-298, a2-Bürste-303, a2-Chance-306, a2-dabei, a2-dafür, a2-damals-319

## Validation

| Check | Result |
|---|---|
| A2 card count | 1640 |
| ID/order | PASS |
| syntax | PASS |
| mirror | PASS |
| DE changes | 0 |
| unexpected production changes | 0 |
| sectionAccents issues | 68 |
| LV remnants (repaired cards) | 265 |
| regression findings documented | 333 |

## sectionAccents (OWNER spec retained)

| cardId | stale targets |
|---|---|
| a2-bauen | Jsme |
| a2-bauer | Hospodařit, Kostky |
| a2-becher | Sklo |
| a2-bedienen | Víš, Nevím, Servis |
| a2-bedienung | Server |
| a2-behalten | Udržet |
| a2-beinahe | Sotva, knapp, Wir, gerade noch, geschafft, gerade |
| a2-bekannt | slavný, Známé, přátelích |
| a2-bestellen | máte, Proces |
| a2-birne | Svítilna |
| a2-bitte-study | Little |
| a2-bitter | Pevný, Hořký |
| a2-borgen | aizņemos, aizdodu |
| a2-böse | ļauns, dusmīgs |
| a2-brennen | Burn |
| a2-dabei | Máte |
| a2-dafür | Dafar, lai, tam, par to, ar to, esmu |

## LV remnants (documented, not auto-fixed)

- a2-bauen `study.important.example`: LV_DIACRITIC
- a2-bauen `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-bauen `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-bauen `study.sectionAccents.tip.leftBlocks[1].text.orange[0]`: LV_DIACRITIC
- a2-bauen `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-bauen `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-bauen `study.sectionAccents.tip.leftBlocks[1].text.yellow[2]`: LV_DIACRITIC
- a2-bauen `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-bauen `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-bauen `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-bauen `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-bauen `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-bauen `study.accents.blue[0]`: LV_DIACRITIC
- a2-bauen `study.accents.blue[3]`: LV_DIACRITIC
- a2-bauen `study.accents.blue[4]`: LV_DIACRITIC
- a2-bauen `study.accents.blue[5]`: LV_DIACRITIC
- a2-bauen `study.accents.blue[6]`: LV_DIACRITIC
- a2-bauen `study.accents.blue[9]`: LV_DIACRITIC
- a2-bauen `study.accents.blue[11]`: LV_DIACRITIC
- a2-bauen `study.accents.blue[13]`: LV_DIACRITIC
- a2-bauen `study.accents.blue[15]`: LV_DIACRITIC
- a2-bauen `study.accents.blue[16]`: LV_DIACRITIC
- a2-bauen `study.accents.green[0]`: LV_DIACRITIC
- a2-bauen `study.accents.green[1]`: LV_DIACRITIC
- a2-bauen `study.accents.yellow[2]`: LV_DIACRITIC
- a2-bauen `study.accents.orange[0]`: LV_DIACRITIC
- a2-bauen `study.accents.orange[1]`: LV_DIACRITIC
- a2-bauen `study.accents.orange[2]`: LV_DIACRITIC
- a2-bauen `study.accents.purple[0]`: LV_DIACRITIC
- a2-bauen `study.accents.purple[1]`: LV_DIACRITIC
- a2-bauen `study.accents.purple[2]`: LV_DIACRITIC
- a2-bauen `study.accents.purple[3]`: LV_DIACRITIC
- a2-bauen `study.accents.purple[6]`: LV_DIACRITIC
- a2-bauer `study.important.example`: LV_DIACRITIC
- a2-bauer `study.accents.purple[2]`: LV_DIACRITIC
- a2-bauer `study.accents.purple[4]`: LV_DIACRITIC
- a2-bauer `study.accents.purple[5]`: LV_DIACRITIC
- a2-becher `study.important.example`: LV_DIACRITIC
- a2-becher `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-becher `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-becher `study.sectionAccents.important[0].example.purple[2]`: LV_DIACRITIC
- a2-becher `study.accents.purple[0]`: LV_DIACRITIC
- a2-becher `study.accents.purple[1]`: LV_DIACRITIC
- a2-becher `study.accents.purple[2]`: LV_DIACRITIC
- a2-becher `study.accents.purple[3]`: LV_DIACRITIC
- a2-becher `study.accents.purple[4]`: LV_DIACRITIC
- a2-becher `study.accents.purple[5]`: LV_DIACRITIC
- a2-becher `study.accents.purple[6]`: LV_DIACRITIC
- a2-becher `study.accents.purple[7]`: LV_DIACRITIC
- a2-bedienen `study.important.example`: LV_DIACRITIC
- a2-bedienen `study.sectionAccents.tip.leftBlocks[1].text.purple[1]`: LV_DIACRITIC
- a2-bedienen `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-bedienen `study.accents.purple[4]`: LV_DIACRITIC
- a2-bedienen `study.accents.purple[6]`: LV_DIACRITIC
- a2-bedienen `study.accents.purple[7]`: LV_DIACRITIC
- a2-bedienung `study.important.example`: LV_DIACRITIC
- a2-bedienung `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-bedienung `study.sectionAccents.important[0].text.purple[1]`: LV_DIACRITIC
- a2-bedienung `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-bedienung `study.accents.purple[2]`: LV_DIACRITIC
- a2-bedienung `study.accents.purple[3]`: LV_DIACRITIC
- a2-bedienung `study.accents.purple[4]`: LV_DIACRITIC
- a2-bedienung `study.accents.purple[5]`: LV_DIACRITIC
- a2-bedienung `study.accents.purple[6]`: LV_DIACRITIC
- a2-behalten `study.important.example`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.tip.leftBlocks[1].text.orange[0]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.important[0].example.orange[1]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-behalten `study.sectionAccents.important[0].example.red[4]`: LV_DIACRITIC
- a2-behalten `study.accents.blue[2]`: LV_DIACRITIC
- a2-behalten `study.accents.blue[3]`: LV_DIACRITIC
- a2-behalten `study.accents.blue[5]`: LV_DIACRITIC
- a2-behalten `study.accents.blue[6]`: LV_DIACRITIC
- a2-behalten `study.accents.blue[7]`: LV_DIACRITIC
- a2-behalten `study.accents.blue[10]`: LV_DIACRITIC
- a2-behalten `study.accents.blue[12]`: LV_DIACRITIC
- a2-behalten `study.accents.blue[14]`: LV_DIACRITIC
- a2-behalten `study.accents.blue[15]`: LV_DIACRITIC
- a2-behalten `study.accents.green[0]`: LV_DIACRITIC
- a2-behalten `study.accents.green[1]`: LV_DIACRITIC
- a2-behalten `study.accents.orange[0]`: LV_DIACRITIC
- a2-behalten `study.accents.orange[1]`: LV_DIACRITIC
- a2-behalten `study.accents.purple[0]`: LV_DIACRITIC
- a2-behalten `study.accents.purple[1]`: LV_DIACRITIC
- a2-behalten `study.accents.purple[2]`: LV_DIACRITIC
- a2-behalten `study.accents.purple[3]`: LV_DIACRITIC
- a2-behalten `study.accents.purple[5]`: LV_DIACRITIC
- a2-behalten `study.accents.purple[6]`: LV_DIACRITIC
- a2-beinahe `study.important.example`: LV_DIACRITIC
- a2-beinahe `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-beinahe `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-beinahe `study.accents.blue[7]`: LV_DIACRITIC
- a2-beinahe `study.accents.blue[10]`: LV_DIACRITIC
- a2-beinahe `study.accents.green[0]`: LV_DIACRITIC
- a2-beinahe `study.accents.purple[0]`: LV_DIACRITIC
- a2-beinahe `study.accents.purple[1]`: LV_DIACRITIC
- a2-beinahe `study.accents.purple[2]`: LV_DIACRITIC
- a2-beinahe `study.accents.purple[4]`: LV_DIACRITIC
- a2-bekannt `study.important.example`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.tip.leftBlocks[0].text.green[0]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.tip.leftBlocks[0].text.yellow[3]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.tip.leftBlocks[1].text.green[0]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.tip.leftBlocks[1].text.orange[0]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.important[0].example.green[1]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-bekannt `study.sectionAccents.important[0].example.red[5]`: LV_DIACRITIC
- a2-bekannt `study.accents.blue[1]`: LV_DIACRITIC
- a2-bekannt `study.accents.blue[3]`: LV_DIACRITIC
- a2-bekannt `study.accents.blue[4]`: LV_DIACRITIC
- a2-bekannt `study.accents.blue[5]`: LV_DIACRITIC
- a2-bekannt `study.accents.blue[8]`: LV_DIACRITIC
- a2-bekannt `study.accents.blue[9]`: LV_DIACRITIC
- a2-bekannt `study.accents.blue[12]`: LV_DIACRITIC
- a2-bekannt `study.accents.green[0]`: LV_DIACRITIC
- a2-bekannt `study.accents.green[3]`: LV_DIACRITIC
- a2-bekannt `study.accents.orange[0]`: LV_DIACRITIC
- a2-bekannt `study.accents.purple[0]`: LV_DIACRITIC
- a2-bekannt `study.accents.purple[1]`: LV_DIACRITIC
- a2-bekannt `study.accents.purple[2]`: LV_DIACRITIC
- a2-bekannt `study.accents.purple[3]`: LV_DIACRITIC
- a2-bekannt `study.accents.purple[5]`: LV_DIACRITIC
- a2-bestellen `study.important.example`: LV_DIACRITIC
- a2-bestellen `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-bestellen `study.sectionAccents.tip.leftBlocks[1].text.purple[0]`: LV_DIACRITIC
- a2-bestellen `study.sectionAccents.important[0].text.purple[0]`: LV_DIACRITIC
- a2-bestellen `study.sectionAccents.important[0].text.purple[1]`: LV_DIACRITIC
- a2-bestellen `study.sectionAccents.important[0].text.red[0]`: LV_DIACRITIC
- a2-bestellen `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-bestellen `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-bestellen `study.sectionAccents.important[0].example.purple[2]`: LV_DIACRITIC
- a2-bestellen `study.accents.red[1]`: LV_DIACRITIC
- a2-bestellen `study.accents.purple[0]`: LV_DIACRITIC
- a2-bestellen `study.accents.purple[1]`: LV_DIACRITIC
- a2-bestellen `study.accents.purple[2]`: LV_DIACRITIC
- a2-bestellen `study.accents.purple[3]`: LV_DIACRITIC
- a2-bestellen `study.accents.purple[4]`: LV_DIACRITIC
- a2-bestellen `study.accents.purple[5]`: LV_DIACRITIC
- a2-bestellen `study.accents.purple[6]`: LV_DIACRITIC
- a2-bestellen `study.accents.purple[7]`: LV_DIACRITIC
- a2-bestimmt `study.important.example`: LV_DIACRITIC
- a2-bestimmt `study.sectionAccents.tip.leftBlocks[1].text.purple[1]`: LV_DIACRITIC
- a2-bestimmt `study.sectionAccents.important[0].text.green[1]`: LV_DIACRITIC
- a2-bestimmt `study.sectionAccents.important[0].example.green[1]`: LV_DIACRITIC
- a2-bestimmt `study.accents.green[3]`: LV_DIACRITIC
- a2-bestimmt `study.accents.purple[2]`: LV_DIACRITIC
- a2-bestimmt `study.accents.purple[4]`: LV_DIACRITIC
- a2-birne `study.important.example`: LV_DIACRITIC
- a2-birne `study.accents.purple[8]`: LV_DIACRITIC
- a2-bitter `study.important.example`: LV_DIACRITIC
- a2-bitter `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-bitter `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-bitter `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-bitter `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-bitter `study.sectionAccents.important[0].example.red[5]`: LV_DIACRITIC
- a2-bitter `study.accents.blue[1]`: LV_DIACRITIC
- a2-bitter `study.accents.blue[3]`: LV_DIACRITIC
- a2-bitter `study.accents.blue[4]`: LV_DIACRITIC
- a2-bitter `study.accents.blue[5]`: LV_DIACRITIC
- a2-bitter `study.accents.blue[8]`: LV_DIACRITIC
- a2-bitter `study.accents.blue[12]`: LV_DIACRITIC
- a2-bitter `study.accents.blue[13]`: LV_DIACRITIC
- a2-bitter `study.accents.blue[14]`: LV_DIACRITIC
- a2-bitter `study.accents.green[2]`: LV_DIACRITIC
- a2-bitter `study.accents.orange[1]`: LV_DIACRITIC
- a2-bitter `study.accents.purple[0]`: LV_DIACRITIC
- a2-bitter `study.accents.purple[1]`: LV_DIACRITIC
- a2-bitter `study.accents.purple[4]`: LV_DIACRITIC
- a2-bitter `study.accents.purple[6]`: LV_DIACRITIC
- a2-boden `study.important.example`: LV_DIACRITIC
- a2-boden `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-boden `study.sectionAccents.tip.leftBlocks[0].text.yellow[1]`: LV_DIACRITIC
- a2-boden `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC
- a2-boden `study.sectionAccents.tip.leftBlocks[1].text.yellow[0]`: LV_DIACRITIC
- a2-boden `study.sectionAccents.tip.leftBlocks[1].text.yellow[3]`: LV_DIACRITIC
- a2-boden `study.sectionAccents.tip.leftBlocks[1].text.yellow[4]`: LV_DIACRITIC
- a2-boden `study.sectionAccents.important[0].example.red[1]`: LV_DIACRITIC
- a2-boden `study.sectionAccents.important[0].example.red[4]`: LV_DIACRITIC
- a2-boden `study.accents.blue[2]`: LV_DIACRITIC
- a2-boden `study.accents.blue[3]`: LV_DIACRITIC
- a2-boden `study.accents.blue[12]`: LV_DIACRITIC
- a2-boden `study.accents.blue[13]`: LV_DIACRITIC
- a2-boden `study.accents.blue[14]`: LV_DIACRITIC
- a2-boden `study.accents.orange[0]`: LV_DIACRITIC
- a2-boden `study.accents.purple[0]`: LV_DIACRITIC
- a2-boden `study.accents.purple[6]`: LV_DIACRITIC
- a2-Bonbon-274 `lv`: PL_CHAR
- a2-borgen `study.sectionAccents.tip.leftBlocks[0].text.orange[0]`: LV_DIACRITIC
- a2-borgen `study.sectionAccents.tip.leftBlocks[0].text.yellow[0]`: LV_DIACRITIC
- a2-borgen `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-borgen `study.accents.blue[1]`: LV_DIACRITIC
- a2-borgen `study.accents.blue[5]`: LV_DIACRITIC
- a2-borgen `study.accents.blue[9]`: LV_DIACRITIC
- a2-borgen `study.accents.blue[12]`: LV_DIACRITIC
- a2-borgen `study.accents.blue[16]`: LV_DIACRITIC
- a2-borgen `study.accents.orange[0]`: LV_DIACRITIC
- a2-borgen `study.accents.purple[0]`: LV_DIACRITIC
- a2-borgen `study.accents.purple[1]`: LV_DIACRITIC
- a2-borgen `study.accents.purple[2]`: LV_DIACRITIC
- a2-borgen `study.accents.purple[3]`: LV_DIACRITIC
- a2-böse `study.sectionAccents.tip.leftBlocks[0].text.purple[0]`: LV_DIACRITIC
- a2-böse `study.sectionAccents.important[0].text.purple[0]`: LV_DIACRITIC
- a2-böse `study.sectionAccents.important[0].text.purple[1]`: LV_DIACRITIC
- a2-böse `study.sectionAccents.important[0].example.purple[0]`: LV_DIACRITIC
- a2-böse `study.sectionAccents.important[0].example.purple[1]`: LV_DIACRITIC
- a2-böse `study.accents.purple[0]`: LV_DIACRITIC
- a2-böse `study.accents.purple[1]`: LV_DIACRITIC
- a2-böse `study.accents.purple[2]`: LV_DIACRITIC
- a2-böse `study.accents.purple[3]`: LV_DIACRITIC
- a2-böse `study.accents.purple[4]`: LV_DIACRITIC
- a2-böse `study.accents.purple[9]`: LV_DIACRITIC
- a2-dabei `study.important.example`: LV_DIACRITIC
- a2-dabei `study.sectionAccents.tip.leftBlocks[0].text.green[0]`: LV_DIACRITIC
- a2-dabei `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC, LV_WORD
- a2-dabei `study.sectionAccents.tip.leftBlocks[0].text.yellow[4]`: LV_DIACRITIC
- a2-dabei `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-dabei `study.sectionAccents.important[0].example.green[0]`: LV_DIACRITIC
- a2-dabei `study.sectionAccents.important[0].example.orange[0]`: LV_DIACRITIC
- a2-dabei `study.sectionAccents.important[0].example.red[0]`: LV_DIACRITIC
- a2-dabei `study.sectionAccents.important[0].example.red[2]`: LV_DIACRITIC
- a2-dabei `study.sectionAccents.important[0].example.red[5]`: LV_DIACRITIC
- a2-dabei `study.accents.blue[1]`: LV_DIACRITIC
- a2-dabei `study.accents.blue[2]`: LV_DIACRITIC
- a2-dabei `study.accents.blue[3]`: LV_DIACRITIC
- a2-dabei `study.accents.blue[4]`: LV_DIACRITIC
- a2-dabei `study.accents.blue[5]`: LV_DIACRITIC
- a2-dabei `study.accents.blue[10]`: LV_DIACRITIC
- a2-dabei `study.accents.blue[12]`: LV_DIACRITIC, LV_WORD
- a2-dabei `study.accents.blue[13]`: LV_DIACRITIC
- a2-dabei `study.accents.blue[14]`: LV_DIACRITIC
- a2-dabei `study.accents.blue[15]`: LV_DIACRITIC
- a2-dabei `study.accents.blue[16]`: LV_DIACRITIC, LV_WORD
- a2-dabei `study.accents.green[0]`: LV_DIACRITIC
- a2-dabei `study.accents.yellow[0]`: LV_DIACRITIC
- a2-dabei `study.accents.orange[0]`: LV_DIACRITIC
- a2-dabei `study.accents.orange[1]`: LV_DIACRITIC
- a2-dabei `study.accents.purple[0]`: LV_DIACRITIC
- a2-dabei `study.accents.purple[1]`: LV_DIACRITIC
- a2-dabei `study.accents.purple[2]`: LV_DIACRITIC
- a2-dabei `study.accents.purple[3]`: LV_DIACRITIC
- a2-dafür `study.sectionAccents.tip.leftBlocks[0].text.yellow[2]`: LV_DIACRITIC, LV_WORD
- a2-dafür `study.sectionAccents.tip.leftBlocks[1].text.yellow[1]`: LV_DIACRITIC
- a2-dafür `study.accents.blue[1]`: LV_DIACRITIC
- a2-dafür `study.accents.blue[2]`: LV_DIACRITIC
- a2-dafür `study.accents.blue[3]`: LV_DIACRITIC
- a2-dafür `study.accents.blue[4]`: LV_DIACRITIC
- a2-dafür `study.accents.blue[5]`: LV_DIACRITIC
- a2-dafür `study.accents.blue[11]`: LV_DIACRITIC
- a2-dafür `study.accents.blue[14]`: LV_DIACRITIC, LV_WORD
- a2-dafür `study.accents.purple[0]`: LV_DIACRITIC, LV_WORD
- a2-dafür `study.accents.red[1]`: LV_DIACRITIC, LV_WORD

## Regression

Deterministic post-repair check on 50 cards: documented only; no additional production edits.

## Per-card results

| # | cardId | index | status |
|---|---|---|---|
| 101 | a2-Bauarbeiter-204 | 204 | APPLIED |
| 102 | a2-Bauchweh-205 | 205 | APPLIED |
| 103 | a2-bauen | 206 | APPLIED |
| 104 | a2-bauer | 207 | APPLIED |
| 105 | a2-Bäuerin-208 | 208 | APPLIED |
| 106 | a2-beachten-210 | 210 | APPLIED |
| 107 | a2-becher | 211 | APPLIED |
| 108 | a2-bedienen | 213 | APPLIED |
| 109 | a2-bedienung | 214 | APPLIED |
| 110 | a2-Beet-216 | 216 | APPLIED |
| 111 | a2-Beginn-217 | 217 | APPLIED |
| 112 | a2-begrüßen-219 | 219 | APPLIED |
| 113 | a2-Begrüßung-220 | 220 | APPLIED |
| 114 | a2-behalten | 221 | APPLIED |
| 115 | a2-beinahe | 222 | APPLIED |
| 116 | a2-beißen-223 | 223 | APPLIED |
| 117 | a2-bekannt | 224 | APPLIED |
| 118 | a2-Bekannte-226 | 226 | APPLIED |
| 119 | a2-beliebt-227 | 227 | APPLIED |
| 120 | a2-bellen-228 | 228 | APPLIED |
| 121 | a2-benötigen-229 | 229 | APPLIED |
| 122 | a2-benützen-230 | 230 | APPLIED |
| 123 | a2-bequem-232 | 232 | APPLIED |
| 124 | a2-besitzen-238 | 238 | APPLIED |
| 125 | a2-Besitzer-239 | 239 | APPLIED |
| 126 | a2-besonders-240 | 240 | APPLIED |
| 127 | a2-bestellen | 242 | APPLIED |
| 128 | a2-bestimmt | 244 | APPLIED |
| 129 | a2-beten-246 | 246 | APPLIED |
| 130 | a2-bevor-248 | 248 | APPLIED |
| 131 | a2-bewundern-250 | 250 | APPLIED |
| 132 | a2-birne | 255 | APPLIED |
| 133 | a2-bitte-study | 257 | APPLIED |
| 134 | a2-bitter | 258 | APPLIED |
| 135 | a2-blind-262 | 262 | APPLIED |
| 136 | a2-blühen-264 | 264 | APPLIED |
| 137 | a2-boden | 272 | APPLIED |
| 138 | a2-Bonbon-274 | 274 | ALREADY_CORRECT |
| 139 | a2-borgen | 276 | APPLIED |
| 140 | a2-böse | 277 | APPLIED |
| 141 | a2-brav | 285 | APPLIED |
| 142 | a2-Bremse-287 | 287 | APPLIED |
| 143 | a2-brennen | 289 | APPLIED |
| 144 | a2-Briefmarke-291 | 291 | APPLIED |
| 145 | a2-Bügeleisen-298 | 298 | APPLIED |
| 146 | a2-Bürste-303 | 303 | APPLIED |
| 147 | a2-Chance-306 | 306 | APPLIED |
| 148 | a2-dabei | 315 | APPLIED |
| 149 | a2-dafür | 318 | APPLIED |
| 150 | a2-damals-319 | 319 | APPLIED |

## Branch

`cursor/cs-a2-repair-group03-6ea4`

_Generated: 2026-08-13T18:09:19.966Z_
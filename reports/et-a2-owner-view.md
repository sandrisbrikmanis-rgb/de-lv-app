# ET–DE A2 — OWNER VIEW
**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `24841308383fabf7eb219f3314041ede4d2f0f10`
**WORK_BRANCH:** `main`
**Audit PR:** [#614](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/614)
**SCOPE:** ET–DE A2 (`data/et/a2.js`)
**Findings:** **225** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)
> OBJECT_COVERAGE = 1640/1640 (100%). DISCOVERY_COMPLETENESS = NOT_GUARANTEED.
> 702/702 does NOT mean all possible defects were found.
> **Atvēršana GitHub/Cursor:** pilns authoritative monolīts ir zemāk (MASTER §7.23). Papildus — **5 grupas** (pa 50) ērtākai navigācijai.
> **DE = STRICT READ-ONLY.** Production: `data/et/a2.js` + `www/data/et/a2.js`.
## GitHub atvēršana
| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-a2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-review-GITHUB.md) |
| OWNER README | [et-a2-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-review-README.md) |
| OWNER DECISIONS (indekss) | [et-a2-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions.md) |
| Audit JSON | [et-a2-full-audit.json](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-full-audit.json) |
## Grupas (pa 50 findingiem) — **sākt šeit**
| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–50 | 50 | [et-a2-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-view-group01.md) | [et-a2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions-group01.md) |
| 51–100 | 50 | [et-a2-owner-view-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-view-group02.md) | [et-a2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions-group02.md) |
| 101–150 | 50 | [et-a2-owner-view-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-view-group03.md) | [et-a2-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions-group03.md) |
| 151–200 | 50 | [et-a2-owner-view-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-view-group04.md) | [et-a2-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions-group04.md) |
| 201–225 | 25 | [et-a2-owner-view-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-view-group05.md) | [et-a2-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/main/reports/et-a2-owner-decisions-group05.md) |
## Īsais saraksts (visi findingi)
- **ET-A2-0002** `a2-abfahren` · `entry[2].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0003** `a2-abgeben` · `entry[5].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0004** `a2-abgeben` · `entry[5].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0005** `a2-absagen` · `entry[11].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0006** `a2-absagen` · `entry[11].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0007** `a2-abschließen` · `entry[13].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0008** `a2-abstellen` · `entry[16].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0009** `a2-abstellen` · `entry[16].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0010** `a2-angewandt` · `entry[41].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0011** `a2-angreifen` · `entry[42].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0012** `a2-angreifen` · `entry[42].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0013** `a2-angreifen` · `entry[42].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0014** `a2-anhänger` · `entry[44].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0015** `a2-anhänger` · `entry[44].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0016** `a2-anhänger` · `entry[44].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0017** `a2-anheizen` · `entry[45].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0018** `a2-anheizen` · `entry[45].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0019** `a2-anlegen` · `entry[55].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0020** `a2-anmelden` · `entry[57].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0022** `a2-anstellen` · `entry[65].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0023** `a2-artikel` · `entry[90].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0024** `a2-artikel` · `entry[90].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0025** `a2-aufheben` · `entry[118].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0026** `a2-aufheben` · `entry[118].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0027** `a2-auflage` · `entry[127].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0029** `a2-aufnahme` · `entry[132].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0030** `a2-aufnehmen` · `entry[133].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0031** `a2-aufrichtig` · `entry[138].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0032** `a2-aufrichtig` · `entry[138].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0034** `a2-aufrufen` · `entry[139].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0038** `a2-ausziehen` · `entry[169].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0039** `a2-bank` · `entry[194].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0040** `a2-bank` · `entry[194].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0041** `a2-bank` · `entry[194].study.comparison[5].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0042** `a2-bauer` · `entry[207].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0045** `a2-bedienen` · `entry[213].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0046** `a2-behalten` · `entry[221].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0047** `a2-bekannt` · `entry[224].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0048** `a2-bekannt` · `entry[224].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0049** `a2-bekannt` · `entry[224].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0050** `a2-bestellen` · `entry[242].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0052** `a2-boden` · `entry[272].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0053** `a2-boden` · `entry[272].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0056** `a2-böse` · `entry[277].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0057** `a2-böse` · `entry[277].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0059** `a2-brav` · `entry[285].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0060** `a2-brav` · `entry[285].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0061** `a2-dafür` · `entry[318].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0062** `a2-damit` · `entry[321].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0063** `a2-damit` · `entry[321].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0064** `a2-damit` · `entry[321].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0065** `study-der-dank` · `entry[323].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0066** `study-der-dank` · `entry[323].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0067** `study-der-dank` · `entry[323].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0069** `a2-darüber` · `entry[325].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0070** `a2-davor` · `entry[329].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0071** `a2-davor` · `entry[329].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0072** `a2-davor` · `entry[329].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0074** `a2-decke` · `entry[331].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0075** `a2-decke` · `entry[331].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0076** `a2-denn` · `entry[334].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0077** `a2-dick` · `entry[341].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0078** `a2-dick` · `entry[341].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0079** `a2-dick` · `entry[341].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0080** `a2-doch` · `entry[346].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0081** `a2-doch` · `entry[346].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0082** `a2-doktor` · `entry[347].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0083** `a2-dünn` · `entry[364].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0084** `a2-dünn` · `entry[364].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0085** `a2-dünn` · `entry[364].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0086** `a2-dünn` · `entry[364].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0089** `a2-eben` · `entry[369].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0090** `a2-eben` · `entry[369].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0091** `a2-ehrlich` · `entry[377].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0092** `a2-ehrlich` · `entry[377].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0093** `a2-eigentlich` · `entry[378].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0094** `a2-einsteigen` · `entry[394].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0095** `a2-erinnern` · `entry[420].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0096** `a2-etwa` · `entry[439].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0097** `a2-fach` · `entry[444].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0098** `a2-fach` · `entry[444].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0099** `a2-fach` · `entry[444].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0101** `a2-fall` · `entry[455].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0102** `a2-fall` · `entry[455].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0103** `a2-fall` · `entry[455].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0104** `a2-fehlen` · `entry[467].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0105** `a2-fehlen` · `entry[467].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0106** `a2-fehlen` · `entry[467].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0107** `a2-feuer` · `entry[484].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0108** `a2-feuer` · `entry[484].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0109** `a2-feuer` · `entry[484].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0110** `a2-folgen` · `entry[508].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0111** `a2-folgen` · `entry[508].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0112** `a2-führen` · `entry[539].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0114** `a2-gerade` · `entry[580].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0115** `a2-gewinnen` · `entry[592].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0116** `a2-gewinnen` · `entry[592].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0117** `a2-gießen` · `entry[595].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0120** `a2-indem` · `entry[703].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0121** `a2-indem` · `entry[703].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0133** `a2-kurz` · `entry[855].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0134** `a2-lage` · `entry[857].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0135** `a2-leiden` · `entry[877].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0136** `a2-leiden` · `entry[877].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0137** `a2-leiden` · `entry[877].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0140** `a2-leiter` · `entry[880].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0141** `a2-leitung` · `entry[881].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0142** `a2-leitung` · `entry[881].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0144** `a2-merken` · `entry[936].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0145** `a2-mittel` · `entry[951].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0146** `a2-mittel` · `entry[951].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0147** `a2-mittel` · `entry[951].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0149** `a2-note` · `entry[1019].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0150** `a2-note` · `entry[1019].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0152** `a2-offen` · `entry[1037].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0154** `a2-patient` · `entry[1064].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0155** `a2-rolle` · `entry[1172].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0156** `a2-satz` · `entry[1194].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0157** `a2-scheinen` · `entry[1217].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0159** `a2-schlange` · `entry[1229].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0160** `a2-schlange` · `entry[1229].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0161** `a2-schloss` · `entry[1236].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0162** `a2-schloss` · `entry[1236].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0163** `a2-schuld` · `entry[1256].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0164** `a2-schuld` · `entry[1256].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0165** `a2-sich-befinden` · `entry[1291].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0166** `a2-sich-befinden` · `entry[1291].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0167** `a2-sich-befinden` · `entry[1291].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0168** `a2-sich-unterhalten` · `entry[1305].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0169** `a2-sich-unterhalten` · `entry[1305].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0171** `a2-sobald` · `entry[1325].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0173** `a2-sonst` · `entry[1336].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0174** `a2-sonst` · `entry[1336].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0176** `a2-steigen` · `entry[1378].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0177** `a2-stelle` · `entry[1380].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0178** `a2-stelle` · `entry[1380].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0180** `a2-stimmen` · `entry[1388].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0181** `a2-stimmen` · `entry[1388].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0182** `a2-stimmen` · `entry[1388].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0183** `a2-stoff` · `entry[1392].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0184** `a2-tafel` · `entry[1416].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0185** `a2-tafel` · `entry[1416].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0186** `a2-tafel` · `entry[1416].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0187** `a2-teil` · `entry[1431].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0188** `a2-teil` · `entry[1431].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0189** `a2-teil` · `entry[1431].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0190** `a2-teil` · `entry[1431].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0191** `a2-termin` · `entry[1438].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0192** `a2-tief` · `entry[1443].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0194** `a2-Traube-1464` · `entry[1464].lv` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0195** `a2-treffen` · `entry[1469].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0197** `a2-übrig` · `entry[1488].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0198** `a2-übrig` · `entry[1488].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0199** `a2-übrig` · `entry[1488].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0201** `a2-umsonst` · `entry[1492].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0202** `a2-verbinden` · `entry[1511].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0204** `a2-verkehr` · `entry[1517].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0206** `a2-vorstellen` · `entry[1544].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0209** `a2-wählen` · `entry[1551].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0211** `a2-wahrscheinlich` · `entry[1555].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0213** `a2-wert` · `entry[1583].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0214** `a2-wert` · `entry[1583].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0215** `a2-wert` · `entry[1583].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0217** `a2-wiegen` · `entry[1589].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0218** `a2-wiegen` · `entry[1589].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0219** `a2-wiegen` · `entry[1589].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0220** `a2-ziehen` · `entry[1599].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0222** `a2-ziehen` · `entry[1599].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0223** `a2-zunehmen` · `entry[1614].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0224** `a2-zunehmen` · `entry[1614].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0225** `a2-zurzeit` · `entry[1618].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0226** `a2-zurzeit` · `entry[1618].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0235** `a2-anordnen-60` · `etText` · MEDIUM · „korrastama” tähendab eeskätt korrastamist või puhastamist; anordnen teises tähe…
- **ET-A2-0236** `a2-auffordern-113` · `etText` · MEDIUM · „Auffordern“ tähendab üles kutsuma, nõudma või paluma; „kutsuma“ tähendab eeskät…
- **ET-A2-0237** `a2-Ausverkauf-163` · `etText` · MEDIUM · „Lõpumüük” tähendab kitsamalt lõpu- või likvideerimismüüki; üldisem vaste on „vä…
- **ET-A2-0238** `a2-Cafeteria-304` · `etText` · MEDIUM · Estonian standard spelling is “kafeteria”; “kafeteeria” is an incorrect spelling…
- **ET-A2-0245** `a2-Humor-688` · `etText` · MEDIUM · Eestikeelne sõna on „huumor”; praegune kuju „humoor” on õigekirjaviga.
- **ET-A2-0247** `a2-jedoch-728` · `etText` · MEDIUM · The Estonian word is misspelled: the correct form is „siiski“, with š.
- **ET-A2-0248** `a2-jener-731` · `etText` · MEDIUM · jener refers to „that one“ and corresponds to Estonian „too“, while „see“ means …
- **ET-A2-0249** `a2-joggen-735` · `etText` · MEDIUM · The standard natural Estonian verb for joggen is „sörkima“; the current phrase i…
- **ET-A2-0252** `a2-Kostüm-839` · `etText` · MEDIUM · „Naiste kostüüm” tähendab naiste kostüümi või ülikonda, kuid saksa sõna on üldin…
- **ET-A2-0253** `a2-Leder-871` · `etText` · MEDIUM · Saksa „Leder” tähendab nahka üldiselt; „töödeldud nahk” lisab põhjendamatu tähen…
- **ET-A2-0256** `a2-Neffe-1001` · `etText` · MEDIUM · Saksa Neffe hõlmab nii venna kui ka õe poega; vennapoeg tähendab ainult venna po…
- **ET-A2-0257** `a2-Nichte-1009` · `etText` · MEDIUM · Saksa Nichte hõlmab nii venna kui ka õe tütart; vennatütar tähendab ainult venna…
- **ET-A2-0260** `a2-Rindfleisch-1166` · `etText` · HIGH · „Loomaliha” tähendab üldiselt loomaliha; „Rindfleisch” on täpsemalt veiseliha.
- **ET-A2-0263** `a2-selten-1277` · `etText` · MEDIUM · German adverb 'selten' requires the Estonian adverb 'harva'; 'harv' is an adject…
- **ET-A2-0264** `a2-so viel-1324` · `etText` · MEDIUM · The first translation matches 'so viel'; 'kui palju' means 'how much' and change…
- **ET-A2-0269** `a2-studieren-1407` · `etText` · MEDIUM · Õppima on liiga üldine; saksa studieren tähendab peamiselt ülikoolis õppimist.
- **ET-A2-0273** `a2-Wild-1592` · `etText` · MEDIUM · Ulukiliha means game meat, while German Wild refers more broadly to wild game or…
- **ET-A2-0280** `a2-anheizen` · `study.tip.leftBlocks[0].text` · MEDIUM · Pärast „tähendab“ on siin vaja nimisõnalist vormi, mitte vigast ma-infinitiiviüh…
- **ET-A2-0281** `a2-anheizen` · `study.tip.leftBlocks[1].text` · MEDIUM · Pärast „tähendab“ peab olema tegevuse nimisõnastatud vorm „olukorra teravdamist“…
- **ET-A2-0282** `a2-anheizen` · `study.important.text` · LOW · Väljend „otseses tähenduses“ on siin korrektne ja loomulikum kui „otsese tähendu…
- **ET-A2-0284** `a2-anlegen` · `study.tip.leftBlocks[1].text` · MEDIUM · Pärast „tähendab“ on vaja tegevuse nimisõnastatud vormi „loomist“.
- **ET-A2-0285** `a2-anmelden` · `study.tip.leftBlocks[0].text` · MEDIUM · Pärast „tähendab“ on siin vaja nimisõnalist vormi „enda registreerumist“.
- **ET-A2-0286** `a2-anmelden` · `study.tip.leftBlocks[1].text` · MEDIUM · Infinitiivide asemel on pärast „tähendab“ vaja nimisõnalisi vorme.
- **ET-A2-0291** `a2-aschenputtel` · `etMain` · CRITICAL · EtMain on küll õige, kuid kaart on vastuolus vigase study.translation-väljaga.
- **ET-A2-0293** `a2-aufheben` · `study.tip.leftBlocks[0].text` · MEDIUM · Pärast „tähendab“ on vaja nimisõnalist vormi „üles tõstmist“.
- **ET-A2-0294** `a2-aufheben` · `study.tip.leftBlocks[1].text` · MEDIUM · Pärast „tähendab“ on vaja nimisõnalist vormi „tühistamist“.
- **ET-A2-0297** `a2-aufnahme` · `study.important.text` · MEDIUM · „Fotograafia“ tähendab fotokunsti või -tegemist, mitte üksikut fotot.
- **ET-A2-0301** `a2-aufrufen` · `study.tip.leftBlocks[0].text` · HIGH · Saksa nimisõnad on eestikeelses lauses vääras vormis ning lause on ebaloomulik.
- **ET-A2-0302** `a2-aufrufen` · `study.tip.leftBlocks[1].text` · HIGH · Lause sisaldab saksa nimisõnu ja saksakeelset käändetermineid eestikeelses väära…
- **ET-A2-0319** `a2-bitter` · `study.tip.leftBlocks[1].text` · MEDIUM · Verb tähendama nõuab siin partitiivobjekti; omadussõnad peavad olema vastavas kä…
- **ET-A2-0325** `a2-dabei` · `study.examples[3].lv` · CRITICAL · Sõna „aitas“ on võõrkeelne või vigane remnant; eesti vaste on „aitas“.
- **ET-A2-0326** `a2-darauf` · `study.examples[5].lv` · MEDIUM · Ajalises väljendis on „varsti pärast seda“ loomulikum ja vastab paremini allika …
- **ET-A2-0327** `a2-darüber` · `etMain` · HIGH · „Selle eest” tähendab dafür; darüber tähendab tavaliselt „selle kohta” või „sell…
- **ET-A2-0337** `a2-ehrlich` · `study.examples[4].lv` · HIGH · „Tore” tähendab kena või meeldivat, mitte saksa ehrlich tähendust „aus”.
- **ET-A2-0341** `a2-einsteigen` · `study.examples[1].lv` · MEDIUM · „Sisenege eest” on eesti keeles ebaloomulik; „eesuksest” väljendab sisenemiskoht…
- **ET-A2-0348** `a2-gang` · `study.translation` · MEDIUM · For a meal, German Gang means a course; Estonian käik is the precise equivalent,…
- **ET-A2-0349** `a2-gang` · `study.examples[3].lv` · MEDIUM · The example describes three meal courses, not simply three dishes.
- **ET-A2-0350** `a2-gang` · `study.examples[4].lv` · MEDIUM · The example refers to the first course of a meal; käik is the precise Estonian t…
- **ET-A2-0356** `a2-indem` · `study.comparison[2].meaning` · MEDIUM · „Et” väljendab siin pigem eesmärki, kuid indem näitab viisi; sobiv vaste on „sel…
- **ET-A2-0393** `a2-rasen-study` · `study.examples[2].lv` · MEDIUM · 
- **ET-A2-0397** `a2-schalten` · `study.examples[3].lv` · MEDIUM · Ümberlülitumise tähendus vajab verbiga lülitama loomulikku ühendit ümber lülitam…
- **ET-A2-0401** `a2-schloss` · `study.examples[1].lv` · LOW · Lause alguses olev pärisnimi peab algama suure tähega.
- **ET-A2-0402** `a2-sich-befinden` · `study.examples[4].lv` · HIGH · Praegune lause tähendab „sich fühlen”, mitte asukohta väljendavat „sich befinden…
- **ET-A2-0407** `a2-stelle` · `study.comparison[4].meaning` · MEDIUM · Haav tähendab eesti keeles Wunde, mitte Stelle; Stelle vastav tähendus on koht v…
- **ET-A2-0422** `a2-während` · `study.examples[3].lv` · MEDIUM · Kõrvallauses puudub loomulikult vajalik alus; korduv ta teeb lause grammatilisel…
- **ET-A2-0426** `a2-wiegen` · `study.examples[5].lv` · MEDIUM · Lause on grammatiliselt korrektne, kuid ei näitlikusta verbi wiegen tähendust „k…
- **ET-A2-0427** `a2-wiegen` · `study.comparison[4].meaning` · MEDIUM · Võrdlus on sihitult seotud auto ja vaguniga ega aita eristada wiegen'i tähendusi…
- **ET-A2-0437** `a2-gross` · `study.examples[2].lv` · LOW · A complete Estonian sentence must begin with a capital letter.
- **ET-A2-0439** `a2-hoch` · `study.examples[2].lv` · LOW · A complete Estonian sentence must begin with a capital letter.
- **ET-A2-0440** `a2-hoch` · `study.examples[3].lv` · LOW · A complete Estonian sentence must begin with a capital letter.
- **ET-A2-0441** `a2-hoch` · `study.examples[4].lv` · LOW · A complete Estonian sentence must begin with a capital letter.
- **ET-A2-0444** `a2-klein` · `study.examples[3].lv` · LOW · A complete Estonian sentence must begin with a capital letter.
- **ET-A2-0458** `a2-auch` · `study.examples[1].lv` · LOW · Lause alguses peab eesti keeles olema suur algustäht.
## Pilns findingu pārskats (authoritative monolithic — MASTER §7.23)
## ET-A2-0002
**Audit ID:** ET-A2-0002
**Card ID:** `a2-abfahren`
**Field/path:** `entry[2].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Bus geht gleich ab. = Buss väljub kohe. saglabāta nemainīta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0003
**Audit ID:** ET-A2-0003
**Card ID:** `a2-abgeben`
**Field/path:** `entry[5].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich gebe das Buch LV/atlikušās valodas zurück. = Ma annan raamatu tagasi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0004
**Audit ID:** ET-A2-0004
**Card ID:** `a2-abgeben`
**Field/path:** `entry[5].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich verkaufe mein LV/atlikušās valodas Fahrrad. = Ma müün oma jalgratta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0005
**Audit ID:** ET-A2-0005
**Card ID:** `a2-absagen`
**Field/path:** `entry[11].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich storniere die LV/atlikušās valodas Buchung. = Ma tühistan broneeringu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0006
**Audit ID:** ET-A2-0006
**Card ID:** `a2-absagen`
**Field/path:** `entry[11].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Er sagt nein. = LV/atlikušās valodas Ta ütleb ei.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0007
**Audit ID:** ET-A2-0007
**Card ID:** `a2-abschließen`
**Field/path:** `entry[13].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich unterschreibe LV/atlikušās valodas den Vertrag. = Ma fragments aizstāts ar allkirjastan lepingu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0008
**Audit ID:** ET-A2-0008
**Card ID:** `a2-abstellen`
**Field/path:** `entry[16].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich schalte den Computer aus. = fragments aizstāts ar Ma lülitan arvuti välja.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0009
**Audit ID:** ET-A2-0009
**Card ID:** `a2-abstellen`
**Field/path:** `entry[16].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Fahrer stoppt LV/atlikušās valodas das Auto. = Juht peatab auto. saglabāta nemainīta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0010
**Audit ID:** ET-A2-0010
**Card ID:** `a2-angewandt`
**Field/path:** `entry[41].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** wird angewandt. = fragments aizstāts ar Seda meetodit rakendatakse.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0011
**Audit ID:** ET-A2-0011
**Card ID:** `a2-angreifen`
**Field/path:** `entry[42].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Gruppe attackiert ihn. = fragments aizstāts ar Rühm ründab teda. saglabāta nemainīta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0012
**Audit ID:** ET-A2-0012
**Card ID:** `a2-angreifen`
**Field/path:** `entry[42].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er beleidigt mich. = Ta solvab fragments aizstāts ar mind.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0013
**Audit ID:** ET-A2-0013
**Card ID:** `a2-angreifen`
**Field/path:** `entry[42].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie kritisiert den Vorschlag. = fragments aizstāts ar Ta kritiseerib ettepanekut.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0014
**Audit ID:** ET-A2-0014
**Card ID:** `a2-anhänger`
**Field/path:** `entry[44].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist ein Fan der Mannschaft. = fragments aizstāts ar Ta on meeskonna fänn.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0015
**Audit ID:** ET-A2-0015
**Card ID:** `a2-anhänger`
**Field/path:** `entry[44].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie hat viele Unterstützer. = fragments aizstāts ar Tal on palju toetajaid.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0016
**Audit ID:** ET-A2-0016
**Card ID:** `a2-anhänger`
**Field/path:** `entry[44].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Wohnwagen steht am See. = fragments aizstāts ar Haagissuvila seisab järve ääres.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0017
**Audit ID:** ET-A2-0017
**Card ID:** `a2-anheizen`
**Field/path:** `entry[45].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir heizen die Wohnung. = Me kütame korterit. saglabāta nemainīta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0018
**Audit ID:** ET-A2-0018
**Card ID:** `a2-anheizen`
**Field/path:** `entry[45].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das verschärft den Streit. = See fragments aizstāts ar teravdab tüli.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0019
**Audit ID:** ET-A2-0019
**Card ID:** `a2-anlegen`
**Field/path:** `entry[55].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lege das Buch LV/atlikušās valodas auf den Tisch. = fragments aizstāts ar Ma panen raamatu lauale.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0020
**Audit ID:** ET-A2-0020
**Card ID:** `a2-anmelden`
**Field/path:** `entry[57].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie sich bitte an. = Palun registreeruge. saglabāta nemainīta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0022
**Audit ID:** ET-A2-0022
**Card ID:** `a2-anstellen`
**Field/path:** `entry[65].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Firma stellt ihn an. = Firma võtab ta tööle. saglabāta nemainīta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0023
**Audit ID:** ET-A2-0023
**Card ID:** `a2-artikel`
**Field/path:** `entry[90].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der ist neu. = Zeitungsartikel dabisku ET; DE daļa Ajaleheartikkel on uus.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0024
**Audit ID:** ET-A2-0024
**Card ID:** `a2-artikel`
**Field/path:** `entry[90].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Paragraph ist LV/atlikušās valodas wichtig. = Paragrahv on oluline.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0025
**Audit ID:** ET-A2-0025
**Card ID:** `a2-aufheben`
**Field/path:** `entry[118].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich hebe den Schlüssel auf. = fragments aizstāts ar Ma korjan võtme üles.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0026
**Audit ID:** ET-A2-0026
**Card ID:** `a2-aufheben`
**Field/path:** `entry[118].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich hebe die Hand. = Ma tõstan fragments aizstāts ar käe.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0027
**Audit ID:** ET-A2-0027
**Card ID:** `a2-auflage`
**Field/path:** `entry[127].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Auflage ist hoch. = Tiraaž on fragments aizstāts ar suur.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0029
**Audit ID:** ET-A2-0029
**Card ID:** `a2-aufnahme`
**Field/path:** `entry[132].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Aufnahmeprüfung LV/atlikušās ist morgen. = Sisseastumiseksam on homme.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0030
**Audit ID:** ET-A2-0030
**Card ID:** `a2-aufnehmen`
**Field/path:** `entry[133].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich nehme das Buch. LV/atlikušās = Ma võtan raamatu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0031
**Audit ID:** ET-A2-0031
**Card ID:** `a2-aufrichtig`
**Field/path:** `entry[138].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Entschuldigung. = Siiras vabandus. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0032
**Audit ID:** ET-A2-0032
**Card ID:** `a2-aufrichtig`
**Field/path:** `entry[138].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Herzliche Grüße. = LV/atlikušās Südamlikud tervitused.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0034
**Audit ID:** ET-A2-0034
**Card ID:** `a2-aufrufen`
**Field/path:** `entry[139].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er fordert uns auf. LV/atlikušās = Ta kutsub meid üles.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0038
**Audit ID:** ET-A2-0038
**Card ID:** `a2-ausziehen`
**Field/path:** `entry[169].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Kind zieht sich LV/atlikušās aus. = Laps riietub lahti.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0039
**Audit ID:** ET-A2-0039
**Card ID:** `a2-bank`
**Field/path:** `entry[194].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Bankfiliale ist LV/atlikušās geöffnet. = Pangakontor on avatud.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0040
**Audit ID:** ET-A2-0040
**Card ID:** `a2-bank`
**Field/path:** `entry[194].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sitzen auf der Parkbank. = Me istume pargipingil. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0041
**Audit ID:** ET-A2-0041
**Card ID:** `a2-bank`
**Field/path:** `entry[194].study.comparison[5].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich sitze auf einem LV/atlikušās Stuhl. = Ma istun toolil.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0042
**Audit ID:** ET-A2-0042
**Card ID:** `a2-bauer`
**Field/path:** `entry[207].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir besuchen einen Bauernhof. = Me külastame talu. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0045
**Audit ID:** ET-A2-0045
**Card ID:** `a2-bedienen`
**Field/path:** `entry[213].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Kellner bedient LV/atlikušās uns. = Kelner teenindab meid.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Kannst du mir das Buch leihen? = Kas sa saad mulle raamatu laenata?
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0046
**Audit ID:** ET-A2-0046
**Card ID:** `a2-behalten`
**Field/path:** `entry[221].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bewahre die Quittung auf. = valodas Ma hoian kviitungi alles. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0047
**Audit ID:** ET-A2-0047
**Card ID:** `a2-bekannt`
**Field/path:** `entry[224].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist bekannt. LV/atlikušās = See on teada.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0048
**Audit ID:** ET-A2-0048
**Card ID:** `a2-bekannt`
**Field/path:** `entry[224].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Umgebung ist LV/atlikušās mir vertraut. = valodas Ümbrus on mulle tuttav.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0049
**Audit ID:** ET-A2-0049
**Card ID:** `a2-bekannt`
**Field/path:** `entry[224].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sind befreundet. = Me oleme sõbrad. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0050
**Audit ID:** ET-A2-0050
**Card ID:** `a2-bestellen`
**Field/path:** `entry[242].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bearbeite den Text. = Ma töötlen teksti. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Darum bleibe ich zu Hause. = Seepärast jään ma koju.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0052
**Audit ID:** ET-A2-0052
**Card ID:** `a2-boden`
**Field/path:** `entry[272].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Tasche liegt LV/atlikušās auf dem Boden. = valodas Kott on põrandal.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0053
**Audit ID:** ET-A2-0053
**Card ID:** `a2-boden`
**Field/path:** `entry[272].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Fußboden ist LV/atlikušās sauber. = Põrand on puhas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0056
**Audit ID:** ET-A2-0056
**Card ID:** `a2-böse`
**Field/path:** `entry[277].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Er ist zornig. = LV/atlikušās Ta on vihane.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0057
**Audit ID:** ET-A2-0057
**Card ID:** `a2-böse`
**Field/path:** `entry[277].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Ich bin sauer. = LV/atlikušās Ma olen pahane.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Vielen Dank für die Hilfe! = Suur tänu abi eest!
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0059
**Audit ID:** ET-A2-0059
**Card ID:** `a2-brav`
**Field/path:** `entry[285].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist ein guter LV/atlikušās Mensch. = Ta on hea inimene.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Danach gehe ich nach Hause. = Pärast seda lähen ma koju.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0060
**Audit ID:** ET-A2-0060
**Card ID:** `a2-brav`
**Field/path:** `entry[285].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Sie ist nett. = LV/atlikušās Ta on kena.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0061
**Audit ID:** ET-A2-0061
**Card ID:** `a2-dafür`
**Field/path:** `entry[318].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bin dagegen. LV/atlikušās = Ma olen selle vastu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0062
**Audit ID:** ET-A2-0062
**Card ID:** `a2-damit`
**Field/path:** `entry[321].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne, damit LV/atlikušās = õpin, et eksami sooritada.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0063
**Audit ID:** ET-A2-0063
**Card ID:** `a2-damit`
**Field/path:** `entry[321].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne, um zu LV/atlikušās bestehen. = Ma eksami sooritada. daļa saglabāta
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0064
**Audit ID:** ET-A2-0064
**Card ID:** `a2-damit`
**Field/path:** `entry[321].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** ich hier. = valodas ma siia. daļa saglabāta
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich war dabei. = Ma olin kohal.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0065
**Audit ID:** ET-A2-0065
**Card ID:** `study-der-dank`
**Field/path:** `entry[323].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Dank! = Suur tänu! aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0066
**Audit ID:** ET-A2-0066
**Card ID:** `study-der-dank`
**Field/path:** `entry[323].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Nein, danke. = LV/atlikušās
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0067
**Audit ID:** ET-A2-0067
**Card ID:** `study-der-dank`
**Field/path:** `entry[323].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bedanke mich LV/atlikušās Ihnen. = Ma tänan teid.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0069
**Audit ID:** ET-A2-0069
**Card ID:** `a2-darüber`
**Field/path:** `entry[325].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sprechen Problem. = über das Me räägime probleemist. daļa saglabāta
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0070
**Audit ID:** ET-A2-0070
**Card ID:** `a2-davor`
**Field/path:** `entry[329].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe Angst davor. = Ma aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0071
**Audit ID:** ET-A2-0071
**Card ID:** `a2-davor`
**Field/path:** `entry[329].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Auto. = steht ein Maja ees seisab daļa saglabāta
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Er ist stark. = Ta on tugev.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0072
**Audit ID:** ET-A2-0072
**Card ID:** `a2-davor`
**Field/path:** `entry[329].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** wir. = Pärast seda läheme. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0074
**Audit ID:** ET-A2-0074
**Card ID:** `a2-decke`
**Field/path:** `entry[331].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Bettdecke ist weich. = valodas aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0075
**Audit ID:** ET-A2-0075
**Card ID:** `a2-decke`
**Field/path:** `entry[331].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Bild hängt an der Wand. = valodas seinal. daļa saglabāta
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0076
**Audit ID:** ET-A2-0076
**Card ID:** `a2-denn`
**Field/path:** `entry[334].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bleibe, weil LV/atlikušās = jään, sest vihma sajab.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0077
**Audit ID:** ET-A2-0077
**Card ID:** `a2-dick`
**Field/path:** `entry[341].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Buch ist dick. = Raamat on paks. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0078
**Audit ID:** ET-A2-0078
**Card ID:** `a2-dick`
**Field/path:** `entry[341].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Essen ist fett. = Toit on on rasvane. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0079
**Audit ID:** ET-A2-0079
**Card ID:** `a2-dick`
**Field/path:** `entry[341].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Papier ist dünn. = Paber on valodas on õhuke. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0080
**Audit ID:** ET-A2-0080
**Card ID:** `a2-doch`
**Field/path:** `entry[346].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Komm doch! = LV/atlikušās Tule ometi!
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0081
**Audit ID:** ET-A2-0081
**Card ID:** `a2-doch`
**Field/path:** `entry[346].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Nein. = Kas sa tuled? Ei. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0082
**Audit ID:** ET-A2-0082
**Card ID:** `a2-doktor`
**Field/path:** `entry[347].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Arzt hilft mir. = Arst aitab mind. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0083
**Audit ID:** ET-A2-0083
**Card ID:** `a2-dünn`
**Field/path:** `entry[364].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Papier ist dünn. = Paber on valodas on õhuke. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0084
**Audit ID:** ET-A2-0084
**Card ID:** `a2-dünn`
**Field/path:** `entry[364].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Buch ist dick. = Raamat on paks. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Mach das Licht an. = Pane tuli põlema!
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0085
**Audit ID:** ET-A2-0085
**Card ID:** `a2-dünn`
**Field/path:** `entry[364].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Fleisch ist mager. = Liha on valodas Liha on lahja. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0086
**Audit ID:** ET-A2-0086
**Card ID:** `a2-dünn`
**Field/path:** `entry[364].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** flüssig. = Mesi Mesi on vedel. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0089
**Audit ID:** ET-A2-0089
**Card ID:** `a2-eben`
**Field/path:** `entry[369].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist eben so. LV/atlikušās = Nii see lihtsalt on. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0090
**Audit ID:** ET-A2-0090
**Card ID:** `a2-eben`
**Field/path:** `entry[369].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe ihn gesehen. = gerade eben Ma nägin teda just äsja. daļa saglabāta
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0091
**Audit ID:** ET-A2-0091
**Card ID:** `a2-ehrlich`
**Field/path:** `entry[377].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Er ist ehrlich. = LV/atlikušās Ta on aus.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0092
**Audit ID:** ET-A2-0092
**Card ID:** `a2-ehrlich`
**Field/path:** `entry[377].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Sie ist nett. = Ta LV/atlikušās on kena.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0093
**Audit ID:** ET-A2-0093
**Card ID:** `a2-eigentlich`
**Field/path:** `entry[378].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Das ist echt. = LV/atlikušās See on ehtne.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0094
**Audit ID:** ET-A2-0094
**Card ID:** `a2-einsteigen`
**Field/path:** `entry[394].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Wir steigen um. = LV/atlikušās Me istume ümber.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0095
**Audit ID:** ET-A2-0095
**Card ID:** `a2-erinnern`
**Field/path:** `entry[420].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Schlüssel. = Mõtle võtmele. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0096
**Audit ID:** ET-A2-0096
**Card ID:** `a2-etwa`
**Field/path:** `entry[439].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das dauert etwa 20 LV/atlikušās Minuten. = See kestab umbes 20 minutit.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0097
**Audit ID:** ET-A2-0097
**Card ID:** `a2-fach`
**Field/path:** `entry[444].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Fach ist leer. LV/atlikušās = Lahter on tühi. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0098
**Audit ID:** ET-A2-0098
**Card ID:** `a2-fach`
**Field/path:** `entry[444].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist mein Fachgebiet. = See on minu eriala. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0099
**Audit ID:** ET-A2-0099
**Card ID:** `a2-fach`
**Field/path:** `entry[444].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Lehrer. = Minu amet on õpetaja. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0101
**Audit ID:** ET-A2-0101
**Card ID:** `a2-fall`
**Field/path:** `entry[455].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** komme ich. = Sel juhul tulen ma. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0102
**Audit ID:** ET-A2-0102
**Card ID:** `a2-fall`
**Field/path:** `entry[455].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Unfall war schlimm. = Õnnetus oli raske. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0103
**Audit ID:** ET-A2-0103
**Card ID:** `a2-fall`
**Field/path:** `entry[455].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Kasus ist wichtig. = Kääne on oluline. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0104
**Audit ID:** ET-A2-0104
**Card ID:** `a2-fehlen`
**Field/path:** `entry[467].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Mir fehlt Geld. = LV/atlikušās Mul puudub raha.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0105
**Audit ID:** ET-A2-0105
**Card ID:** `a2-fehlen`
**Field/path:** `entry[467].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich vermisse dich. LV/atlikušās = Ma igatsen sind. valodas
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0106
**Audit ID:** ET-A2-0106
**Card ID:** `a2-fehlen`
**Field/path:** `entry[467].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Er ist abwesend. = LV/atlikušās
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0107
**Audit ID:** ET-A2-0107
**Card ID:** `a2-feuer`
**Field/path:** `entry[484].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Brand ist groß. = Tulekahju on suur. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Aus diesem Grund komme ich nicht. = Sel põhjusel ma ei tule.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0108
**Audit ID:** ET-A2-0108
**Card ID:** `a2-feuer`
**Field/path:** `entry[484].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Feuerwehr kommt. = Tuletõrje tuleb. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0109
**Audit ID:** ET-A2-0109
**Card ID:** `a2-feuer`
**Field/path:** `entry[484].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Soldaten geben LV/atlikušās Feuer. = Sõdurid avavad tule. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0110
**Audit ID:** ET-A2-0110
**Card ID:** `a2-folgen`
**Field/path:** `entry[508].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Kind gehorcht. LV/atlikušās = Laps kuulab sõna.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0111
**Audit ID:** ET-A2-0111
**Card ID:** `a2-folgen`
**Field/path:** `entry[508].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie die Regeln. = Järgige reegleid. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0112
**Audit ID:** ET-A2-0112
**Card ID:** `a2-führen`
**Field/path:** `entry[539].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bringe dich nach Hause. = Ma viin su koju. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0114
**Audit ID:** ET-A2-0114
**Card ID:** `a2-gerade`
**Field/path:** `entry[580].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich komme gerade. = Ma tulen praegu. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0115
**Audit ID:** ET-A2-0115
**Card ID:** `a2-gewinnen`
**Field/path:** `entry[592].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir gewinnen das LV/atlikušās Spiel. = Me võidame mängu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0116
**Audit ID:** ET-A2-0116
**Card ID:** `a2-gewinnen`
**Field/path:** `entry[592].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bekomme eine LV/atlikušās Nachricht. = Ma saan sõnumi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0117
**Audit ID:** ET-A2-0117
**Card ID:** `a2-gießen`
**Field/path:** `entry[595].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er schüttet Wasser aus. = Ta valab vee välja. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0120
**Audit ID:** ET-A2-0120
**Card ID:** `a2-indem`
**Field/path:** `entry[703].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne, indem LV/atlikušās ich übe. = Ma õpin harjutades. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0121
**Audit ID:** ET-A2-0121
**Card ID:** `a2-indem`
**Field/path:** `entry[703].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami sooritada. saglabāta
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0133
**Audit ID:** ET-A2-0133
**Card ID:** `a2-kurz`
**Field/path:** `entry[855].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** kurz vor acht = LV/atlikušās veidi enne kaheksat
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0134
**Audit ID:** ET-A2-0134
**Card ID:** `a2-lage`
**Field/path:** `entry[857].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Standort ist LV/atlikušās gut. = Asukoht on hea.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0135
**Audit ID:** ET-A2-0135
**Card ID:** `a2-leiden`
**Field/path:** `entry[877].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er leidet an Kopfschmerzen. = valodas Tal on peavalu. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0136
**Audit ID:** ET-A2-0136
**Card ID:** `a2-leiden`
**Field/path:** `entry[877].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir leiden unter LV/atlikušās der Hitze. = Me kannatame kuumuse käes.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0137
**Audit ID:** ET-A2-0137
**Card ID:** `a2-leiden`
**Field/path:** `entry[877].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Er ist krank. = LV/atlikušās Ta on haige.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0140
**Audit ID:** ET-A2-0140
**Card ID:** `a2-leiter`
**Field/path:** `entry[880].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Leiter der Firma. = Ettevõtte juht. Mitmus: die Leiter. saglabāta
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0141
**Audit ID:** ET-A2-0141
**Card ID:** `a2-leitung`
**Field/path:** `entry[881].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Kabel ist zu LV/atlikušās kurz. = Kaabel on liiga lühike.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Als ich Kind war, spielte ich viel. = Kui ma laps olin, mängisin palju.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0142
**Audit ID:** ET-A2-0142
**Card ID:** `a2-leitung`
**Field/path:** `entry[881].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Wasserleitung LV/atlikušās tropft. = Veetoru tilgub.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0144
**Audit ID:** ET-A2-0144
**Card ID:** `a2-merken`
**Field/path:** `entry[936].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Merk dir das! = LV/atlikušās Jäta see meelde!
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0145
**Audit ID:** ET-A2-0145
**Card ID:** `a2-mittel`
**Field/path:** `entry[951].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Husten = köharohi aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0146
**Audit ID:** ET-A2-0146
**Card ID:** `a2-mittel`
**Field/path:** `entry[951].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Medikament hilft. = Ravim aitab. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0147
**Audit ID:** ET-A2-0147
**Card ID:** `a2-mittel`
**Field/path:** `entry[951].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** einfach. = See meetod on lihtne. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0149
**Audit ID:** ET-A2-0149
**Card ID:** `a2-note`
**Field/path:** `entry[1019].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Schulnote ist LV/atlikušās gut. = Koolihinne on hea.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0150
**Audit ID:** ET-A2-0150
**Card ID:** `a2-note`
**Field/path:** `entry[1019].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Musiknote ist LV/atlikušās hoch. = Noot on kõrge.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0152
**Audit ID:** ET-A2-0152
**Card ID:** `a2-offen`
**Field/path:** `entry[1037].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Er ist ehrlich. = LV/atlikušās Ta on aus.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0154
**Audit ID:** ET-A2-0154
**Card ID:** `a2-patient`
**Field/path:** `entry[1064].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Kranke liegt im Bett. = Haige lamab voodis. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0155
**Audit ID:** ET-A2-0155
**Card ID:** `a2-rolle`
**Field/path:** `entry[1172].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er hat die Hauptrolle. = Tal on peaosa. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0156
**Audit ID:** ET-A2-0156
**Card ID:** `a2-satz`
**Field/path:** `entry[1194].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der deutsche Satz LV/atlikušās ist richtig. = Saksakeelne lause on õige.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0157
**Audit ID:** ET-A2-0157
**Card ID:** `a2-scheinen`
**Field/path:** `entry[1217].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Er wirkt ruhig. = LV/atlikušās Ta näib rahulik.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0159
**Audit ID:** ET-A2-0159
**Card ID:** `a2-schlange`
**Field/path:** `entry[1229].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Warteschlange LV/atlikušās ist lang. = Järjekord on pikk.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0160
**Audit ID:** ET-A2-0160
**Card ID:** `a2-schlange`
**Field/path:** `entry[1229].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Stühle stehen LV/atlikušās in einer Reihe. = valodas Toolid seisavad reas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0161
**Audit ID:** ET-A2-0161
**Card ID:** `a2-schloss`
**Field/path:** `entry[1236].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich kaufe ein Fahrradschloss. = valodas Ma ostan jalgrattaluku. ET; DE daļa
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0162
**Audit ID:** ET-A2-0162
**Card ID:** `a2-schloss`
**Field/path:** `entry[1236].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Schlüssel ist LV/atlikušās weg. = Võti on kadunud.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0163
**Audit ID:** ET-A2-0163
**Card ID:** `a2-schuld`
**Field/path:** `entry[1256].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Er hat Schulden. = LV/atlikušās Tal on võlad.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0164
**Audit ID:** ET-A2-0164
**Card ID:** `a2-schuld`
**Field/path:** `entry[1256].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Ich bin schuld. = LV/atlikušās Mina olen süüdi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0165
**Audit ID:** ET-A2-0165
**Card ID:** `a2-sich-befinden`
**Field/path:** `entry[1291].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Büro ist oben. LV/atlikušās = Kontor on üleval.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0166
**Audit ID:** ET-A2-0166
**Card ID:** `a2-sich-befinden`
**Field/path:** `entry[1291].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Buch liegt auf LV/atlikušās dem Tisch. = Raamat lebab laual.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0167
**Audit ID:** ET-A2-0167
**Card ID:** `a2-sich-befinden`
**Field/path:** `entry[1291].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Auto steht vor LV/atlikušās dem Haus. = Auto seisab maja ees.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0168
**Audit ID:** ET-A2-0168
**Card ID:** `a2-sich-unterhalten`
**Field/path:** `entry[1305].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Wir reden viel. = LV/atlikušās Me räägime palju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0169
**Audit ID:** ET-A2-0169
**Card ID:** `a2-sich-unterhalten`
**Field/path:** `entry[1305].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir amüsieren uns. LV/atlikušās = Me lõbutseme.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0171
**Audit ID:** ET-A2-0171
**Card ID:** `a2-sobald`
**Field/path:** `entry[1325].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** gehe ich. = gegessen habe, Pärast söömist lähen ära. ET; DE daļa
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Solange du hier bist, bleibe ich. = Niikaua kui sa siin oled, jään ma.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0173
**Audit ID:** ET-A2-0173
**Card ID:** `a2-sonst`
**Field/path:** `entry[1336].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** alles gut. = Muidu on kõik hästi. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich steige um. = Ma istun ümber.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0174
**Audit ID:** ET-A2-0174
**Card ID:** `a2-sonst`
**Field/path:** `entry[1336].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** ich an. = Vastasel juhul helistan. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0176
**Audit ID:** ET-A2-0176
**Card ID:** `a2-steigen`
**Field/path:** `entry[1378].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Ich steige aus. = LV/atlikušās Ma väljun.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0177
**Audit ID:** ET-A2-0177
**Card ID:** `a2-stelle`
**Field/path:** `entry[1380].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich suche eine Stelle. = Ma otsin töökohta. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0178
**Audit ID:** ET-A2-0178
**Card ID:** `a2-stelle`
**Field/path:** `entry[1380].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Wunde tut weh. LV/atlikušās = Haav valutab.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0180
**Audit ID:** ET-A2-0180
**Card ID:** `a2-stimmen`
**Field/path:** `entry[1388].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich stimme dir zu. LV/atlikušās = Ma olen sinuga nõus.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0181
**Audit ID:** ET-A2-0181
**Card ID:** `a2-stimmen`
**Field/path:** `entry[1388].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir wählen den Präsidenten. = Me valime presidendi. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Wir ziehen um. = Me kolime.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0182
**Audit ID:** ET-A2-0182
**Card ID:** `a2-stimmen`
**Field/path:** `entry[1388].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Die Farbe passt. = LV/atlikušās Värv sobib.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0183
**Audit ID:** ET-A2-0183
**Card ID:** `a2-stoff`
**Field/path:** `entry[1392].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Material ist stabil. = Materjal on vastupidav. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0184
**Audit ID:** ET-A2-0184
**Card ID:** `a2-tafel`
**Field/path:** `entry[1416].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Lehrer Tafel. = schreibt an die Õpetaja kirjutab tahvlile. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0185
**Audit ID:** ET-A2-0185
**Card ID:** `a2-tafel`
**Field/path:** `entry[1416].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Speisekarte Tisch. = liegt auf dem Menüü on laual. ET; DE daļa
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0186
**Audit ID:** ET-A2-0186
**Card ID:** `a2-tafel`
**Field/path:** `entry[1416].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Schokolade = Tahvel šokolaadi. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0187
**Audit ID:** ET-A2-0187
**Card ID:** `a2-teil`
**Field/path:** `entry[1431].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Ein Teil fehlt. = LV/atlikušās Üks osa puudub.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0188
**Audit ID:** ET-A2-0188
**Card ID:** `a2-teil`
**Field/path:** `entry[1431].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der erste Teil ist LV/atlikušās leicht. = Esimene osa on lihtne.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0189
**Audit ID:** ET-A2-0189
**Card ID:** `a2-teil`
**Field/path:** `entry[1431].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Ersatzteil ist LV/atlikušās teuer. = Varuosa on kallis.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0190
**Audit ID:** ET-A2-0190
**Card ID:** `a2-teil`
**Field/path:** `entry[1431].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist eine gute LV/atlikušās Sache. = See on hea asi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0191
**Audit ID:** ET-A2-0191
**Card ID:** `a2-termin`
**Field/path:** `entry[1438].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Zeitpunkt ist LV/atlikušās wichtig. = Ajahetk on oluline.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0192
**Audit ID:** ET-A2-0192
**Card ID:** `a2-tief`
**Field/path:** `entry[1443].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der See ist tief. LV/atlikušās = Järv on sügav.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0194
**Audit ID:** ET-A2-0194
**Card ID:** `a2-Traube-1464`
**Field/path:** `entry[1464].lv`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami sooritada. saglabāta
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami soor
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0195
**Audit ID:** ET-A2-0195
**Card ID:** `a2-treffen`
**Field/path:** `entry[1469].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich erreiche dich LV/atlikušās nicht. = Ma ei saa sind kätte. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0197
**Audit ID:** ET-A2-0197
**Card ID:** `a2-übrig`
**Field/path:** `entry[1488].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** übrig. = Palju toitu jääb üle. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0198
**Audit ID:** ET-A2-0198
**Card ID:** `a2-übrig`
**Field/path:** `entry[1488].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Rest ist für morgen. = Ülejääk on homseks. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0199
**Audit ID:** ET-A2-0199
**Card ID:** `a2-übrig`
**Field/path:** `entry[1488].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die übrigen Gäste LV/atlikušās kommen später. = valodas Ülejäänud külalised tulevad aizstāts ar hiljem.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0201
**Audit ID:** ET-A2-0201
**Card ID:** `a2-umsonst`
**Field/path:** `entry[1492].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Das ist gratis. = LV/atlikušās See on tasuta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0202
**Audit ID:** ET-A2-0202
**Card ID:** `a2-verbinden`
**Field/path:** `entry[1511].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich schließe den Drucker an. = Ma ühendan printeri. aizstāts ar
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0204
**Audit ID:** ET-A2-0204
**Card ID:** `a2-verkehr`
**Field/path:** `entry[1517].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** praktisch. = Verkehr ist Ühistransport on praktiline. saglabāta
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0206
**Audit ID:** ET-A2-0206
**Card ID:** `a2-vorstellen`
**Field/path:** `entry[1544].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Was meinst du? = LV/atlikušās Mida sa arvad?
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0209
**Audit ID:** ET-A2-0209
**Card ID:** `a2-wählen`
**Field/path:** `entry[1551].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** FOREIGN_REMNANT **LABOT** Wir stimmen ab. = LV/atlikušās Me hääletame.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0211
**Audit ID:** ET-A2-0211
**Card ID:** `a2-wahrscheinlich`
**Field/path:** `entry[1555].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist möglich. LV/atlikušās möglich. = See on võimalik.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0213
**Audit ID:** ET-A2-0213
**Card ID:** `a2-wert`
**Field/path:** `entry[1583].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Wert ist hoch. = Väärtus Väärtus on aizstāts ar ET;
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0214
**Audit ID:** ET-A2-0214
**Card ID:** `a2-wert`
**Field/path:** `entry[1583].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Stadt ist sehenswert. = valodas Linn on vaatamist DE daļa
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0215
**Audit ID:** ET-A2-0215
**Card ID:** `a2-wert`
**Field/path:** `entry[1583].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist wichtig. LV/atlikušās wichtig. = See on oluline.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0217
**Audit ID:** ET-A2-0217
**Card ID:** `a2-wiegen`
**Field/path:** `entry[1589].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Gewicht ist normal. = Kaal Kaal on aizstāts ar ET;
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0218
**Audit ID:** ET-A2-0218
**Card ID:** `a2-wiegen`
**Field/path:** `entry[1589].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich messe die Länge. = Ma mõõdan aizstāts ar ET;
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0219
**Audit ID:** ET-A2-0219
**Card ID:** `a2-wiegen`
**Field/path:** `entry[1589].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Wagen ist neu. = Auto on uus. aizstāts ar ET;
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0220
**Audit ID:** ET-A2-0220
**Card ID:** `a2-ziehen`
**Field/path:** `entry[1599].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** HIGH FOREIGN_REMNANT **LABOT** Ich ziehe um. = LV/atlikušās
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0222
**Audit ID:** ET-A2-0222
**Card ID:** `a2-ziehen`
**Field/path:** `entry[1599].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** lassen. = Lase teel tõmmata. aizstāts ar ET;
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0223
**Audit ID:** ET-A2-0223
**Card ID:** `a2-zunehmen`
**Field/path:** `entry[1614].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** HIGH FOREIGN_REMNANT **LABOT** Ich nehme ab. = LV/atlikušās alla.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0224
**Audit ID:** ET-A2-0224
**Card ID:** `a2-zunehmen`
**Field/path:** `entry[1614].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Preise steigen. = Hinnad aizstāts ar ET;
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0225
**Audit ID:** ET-A2-0225
**Card ID:** `a2-zurzeit`
**Field/path:** `entry[1618].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** beschäftigt. = valodas Praegu olen DE daļa
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0226
**Audit ID:** ET-A2-0226
**Card ID:** `a2-zurzeit`
**Field/path:** `entry[1618].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** möglich. = Praegu pole see Praegu pole DE daļa
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0235
**Audit ID:** ET-A2-0235
**Card ID:** `a2-anordnen-60`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** anordnen
**LV MASTER reference:** pavēlēt • sakārtot
**CURRENT:** käskima • korrastama
**PROPOSED_ET (audit ieteikums):** käskima • korraldama
**Problēma:** „korrastama” tähendab eeskätt korrastamist või puhastamist; anordnen teises tähenduses on korraldama või paigutama.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0236
**Audit ID:** ET-A2-0236
**Card ID:** `a2-auffordern-113`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** auffordern
**LV MASTER reference:** aicināt
**CURRENT:** kutsuma
**PROPOSED_ET (audit ieteikums):** üles kutsuma
**Problēma:** „Auffordern“ tähendab üles kutsuma, nõudma või paluma; „kutsuma“ tähendab eeskätt kutsumist ega kata tähendust täpselt.
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0237
**Audit ID:** ET-A2-0237
**Card ID:** `a2-Ausverkauf-163`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Ausverkauf
**LV MASTER reference:** izpārdošana
**CURRENT:** lõpumüük
**PROPOSED_ET (audit ieteikums):** väljamüük
**Problēma:** „Lõpumüük” tähendab kitsamalt lõpu- või likvideerimismüüki; üldisem vaste on „väljamüük”.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** muutma • ümber tegema
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0238
**Audit ID:** ET-A2-0238
**Card ID:** `a2-Cafeteria-304`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**DE (read-only):** Cafeteria
**LV MASTER reference:** kafetērija
**CURRENT:** kafeteeria
**PROPOSED_ET (audit ieteikums):** kafeteria
**Problēma:** Estonian standard spelling is “kafeteria”; “kafeteeria” is an incorrect spelling.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** põhjus • puhk
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0245
**Audit ID:** ET-A2-0245
**Card ID:** `a2-Humor-688`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**DE (read-only):** Humor
**LV MASTER reference:** humors
**CURRENT:** humoor
**PROPOSED_ET (audit ieteikums):** huumor
**Problēma:** Eestikeelne sõna on „huumor”; praegune kuju „humoor” on õigekirjaviga.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** enne kui
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0247
**Audit ID:** ET-A2-0247
**Card ID:** `a2-jedoch-728`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** ORTHOGRAPHY
**DE (read-only):** jedoch
**LV MASTER reference:** tomēr
**CURRENT:** siiski
**PROPOSED_ET (audit ieteikums):** siiski
**Problēma:** The Estonian word is misspelled: the correct form is „siiski“, with š.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** kahekordne • topelt
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0248
**Audit ID:** ET-A2-0248
**Card ID:** `a2-jener-731`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** jener
**LV MASTER reference:** tas
**CURRENT:** see
**PROPOSED_ET (audit ieteikums):** too
**Problēma:** jener refers to „that one“ and corresponds to Estonian „too“, while „see“ means „this“.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** vabandama • vabandust paluma
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0249
**Audit ID:** ET-A2-0249
**Card ID:** `a2-joggen-735`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** joggen
**LV MASTER reference:** lēni skriet
**CURRENT:** sörkjooksu tegema
**PROPOSED_ET (audit ieteikums):** sörkima
**Problēma:** The standard natural Estonian verb for joggen is „sörkima“; the current phrase is awkward.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** kas ... või
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0252
**Audit ID:** ET-A2-0252
**Card ID:** `a2-Kostüm-839`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Kostüm
**LV MASTER reference:** sieviešu kostīms
**CURRENT:** naiste kostüüm
**PROPOSED_ET (audit ieteikums):** kostüüm
**Problēma:** „Naiste kostüüm” tähendab naiste kostüümi või ülikonda, kuid saksa sõna on üldine „kostüüm”.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Unternehmen wächst. = Ettevõte kasvab.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0253
**Audit ID:** ET-A2-0253
**Card ID:** `a2-Leder-871`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Leder
**LV MASTER reference:** izstrādāta āda
**CURRENT:** töödeldud nahk
**PROPOSED_ET (audit ieteikums):** nahk
**Problēma:** Saksa „Leder” tähendab nahka üldiselt; „töödeldud nahk” lisab põhjendamatu tähenduspiirangu.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Wir schließen einen Vertrag. = valodas Me sõlmime lepingu.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0256
**Audit ID:** ET-A2-0256
**Card ID:** `a2-Neffe-1001`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Neffe
**LV MASTER reference:** brāļadēls
**CURRENT:** vennapoeg
**PROPOSED_ET (audit ieteikums):** venna- või õepoeg
**Problēma:** Saksa Neffe hõlmab nii venna kui ka õe poega; vennapoeg tähendab ainult venna poega.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Er verdient Geld. = Ta teenib raha.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0257
**Audit ID:** ET-A2-0257
**Card ID:** `a2-Nichte-1009`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Nichte
**LV MASTER reference:** brāļameita
**CURRENT:** vennatütar
**PROPOSED_ET (audit ieteikums):** venna- või õetütar
**Problēma:** Saksa Nichte hõlmab nii venna kui ka õe tütart; vennatütar tähendab ainult venna tütart.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich gieße die Blumen. = Ma kastan lilli.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0260
**Audit ID:** ET-A2-0260
**Card ID:** `a2-Rindfleisch-1166`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** Rindfleisch
**LV MASTER reference:** liellopu gaļa
**CURRENT:** loomaliha
**PROPOSED_ET (audit ieteikums):** veiseliha
**Problēma:** „Loomaliha” tähendab üldiselt loomaliha; „Rindfleisch” on täpsemalt veiseliha.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Er schüttet Wasser aus. = Ta valab vee välja. aizstāts ar
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0263
**Audit ID:** ET-A2-0263
**Card ID:** `a2-selten-1277`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** selten
**LV MASTER reference:** rets
**CURRENT:** harv
**PROPOSED_ET (audit ieteikums):** harva
**Problēma:** German adverb 'selten' requires the Estonian adverb 'harva'; 'harv' is an adjective.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Anlass war ein Fest. = Põhjuseks oli pidu.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0264
**Audit ID:** ET-A2-0264
**Card ID:** `a2-so viel-1324`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** so viel
**LV MASTER reference:** tik daudz • cik
**CURRENT:** nii palju • kui palju
**PROPOSED_ET (audit ieteikums):** nii palju
**Problēma:** The first translation matches 'so viel'; 'kui palju' means 'how much' and changes the German meaning.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Boden ist nass. = Põrand on märg.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0269
**Audit ID:** ET-A2-0269
**Card ID:** `a2-studieren-1407`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** studieren
**LV MASTER reference:** studēt
**CURRENT:** õppima
**PROPOSED_ET (audit ieteikums):** ülikoolis õppima
**Problēma:** Õppima on liiga üldine; saksa studieren tähendab peamiselt ülikoolis õppimist.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Musik. = koche, höre ich Süüa tehes kuulan ma muusikat.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0273
**Audit ID:** ET-A2-0273
**Card ID:** `a2-Wild-1592`
**Field/path:** `etText`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Wild
**LV MASTER reference:** medījums
**CURRENT:** ulukiliha
**PROPOSED_ET (audit ieteikums):** uluk
**Problēma:** Ulukiliha means game meat, while German Wild refers more broadly to wild game or game animals.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich bin fast fertig. = Ma olen peaaegu valmis.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0280
**Audit ID:** ET-A2-0280
**Card ID:** `a2-anheizen`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** anheizen
**LV MASTER reference:** Ar Ofen, Feuer vai Grill anheizen nozīmē iekurt vai uzkurināt.
**CURRENT:** Koos Ofen, Feuer või Grill tähendab anheizen kütma panema või tuld õhutama.
**PROPOSED_ET (audit ieteikums):** Koos Ofen, Feuer või Grill tähendab anheizen üles kütmist või tule õhutamist.
**Problēma:** Pärast „tähendab“ on siin vaja nimisõnalist vormi, mitte vigast ma-infinitiiviühendit.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** FOREIGN_REMNANT **LABOT** kurz vor acht = LV/atlikušās veidi enne kaheksat
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0281
**Audit ID:** ET-A2-0281
**Card ID:** `a2-anheizen`
**Field/path:** `study.tip.leftBlocks[1].text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** anheizen
**LV MASTER reference:** Ar Stimmung, Diskussion vai Streit tas bieži nozīmē saasināt situāciju.
**CURRENT:** Koos Stimmung, Diskussion või Streit tähendab see sageli olukorda teravdama.
**PROPOSED_ET (audit ieteikums):** Koos Stimmung, Diskussion või Streit tähendab see sageli olukorra teravdamist.
**Problēma:** Pärast „tähendab“ peab olema tegevuse nimisõnastatud vorm „olukorra teravdamist“.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Essen = veidi pärast sööki
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0282
**Audit ID:** ET-A2-0282
**Card ID:** `a2-anheizen`
**Field/path:** `study.important.text`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** GRAMMAR
**DE (read-only):** anheizen
**LV MASTER reference:** anheizen var būt burtisks vai tēlains.
**CURRENT:** anheizen võib olla otsese või ülekantud tähendusega.
**PROPOSED_ET (audit ieteikums):** anheizen võib olla otseses või ülekantud tähenduses.
**Problēma:** Väljend „otseses tähenduses“ on siin korrektne ja loomulikum kui „otsese tähendusega“.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich komme bald. = Ma tulen varsti.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0284
**Audit ID:** ET-A2-0284
**Card ID:** `a2-anlegen`
**Field/path:** `study.tip.leftBlocks[1].text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** anlegen
**LV MASTER reference:** Datorā Konto/Datei anlegen nozīmē izveidot kontu/failu.
**CURRENT:** Arvutis tähendab Konto/Datei anlegen kontot/faili looma.
**PROPOSED_ET (audit ieteikums):** Arvutis tähendab Konto/Datei anlegen konto või faili loomist.
**Problēma:** Pärast „tähendab“ on vaja tegevuse nimisõnastatud vormi „loomist“.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Lage ist schwierig. = Olukord on keeruline.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0285
**Audit ID:** ET-A2-0285
**Card ID:** `a2-anmelden`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** anmelden
**LV MASTER reference:** Par kursu, testu vai pasākumu anmelden parasti nozīmē pieteikties.
**CURRENT:** Kursuse, testi või ürituse puhul tähendab anmelden tavaliselt end registreerima.
**PROPOSED_ET (audit ieteikums):** Kursuse, testi või ürituse puhul tähendab anmelden tavaliselt enda registreerumist.
**Problēma:** Pärast „tähendab“ on siin vaja nimisõnalist vormi „enda registreerumist“.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Situation ist ernst. = Olukord on tõsine.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0286
**Audit ID:** ET-A2-0286
**Card ID:** `a2-anmelden`
**Field/path:** `study.tip.leftBlocks[1].text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** anmelden
**LV MASTER reference:** Ar ārstu vai iestādi anmelden bieži nozīmē pierakstīties vai reģistrēties.
**CURRENT:** Arsti või asutuse puhul tähendab anmelden sageli end kirja panema või registreeruma.
**PROPOSED_ET (audit ieteikums):** Arsti või asutuse puhul tähendab anmelden sageli enda kirja panemist või registreerumist.
**Problēma:** Infinitiivide asemel on pärast „tähendab“ vaja nimisõnalisi vorme.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Standort ist LV/atlikušās gut. = Asukoht on hea.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0291
**Audit ID:** ET-A2-0291
**Card ID:** `a2-aschenputtel`
**Field/path:** `etMain`
**Production file:** `data/et/a2.js`
**Severity:** CRITICAL
**Category:** TRANSLATION
**DE (read-only):** Aschenputtel
**LV MASTER reference:** pelnrušķīte
**CURRENT:** tuhkatriinu
**PROPOSED_ET (audit ieteikums):** tuhkatriinu
**Problēma:** EtMain on küll õige, kuid kaart on vastuolus vigase study.translation-väljaga.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** FOREIGN_REMNANT **LABOT** Er ist krank. = LV/atlikušās Ta on haige.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0293
**Audit ID:** ET-A2-0293
**Card ID:** `a2-aufheben`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** aufheben
**LV MASTER reference:** Ja kaut kas ir uz zemes, aufheben bieži nozīmē pacelt.
**CURRENT:** Kui miski on maas, tähendab aufheben sageli üles tõstma.
**PROPOSED_ET (audit ieteikums):** Kui miski on maas, tähendab aufheben sageli üles tõstmist.
**Problēma:** Pärast „tähendab“ on vaja nimisõnalist vormi „üles tõstmist“.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Wir mieten ein Auto. = Me rendime auto.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0294
**Audit ID:** ET-A2-0294
**Card ID:** `a2-aufheben`
**Field/path:** `study.tip.leftBlocks[1].text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** aufheben
**LV MASTER reference:** Ja runa ir par noteikumu vai lēmumu, aufheben nozīmē atcelt.
**CURRENT:** Kui jutt on reeglist või otsusest, tähendab aufheben tühistama.
**PROPOSED_ET (audit ieteikums):** Kui jutt on reeglist või otsusest, tähendab aufheben tühistamist.
**Problēma:** Pärast „tähendab“ on vaja nimisõnalist vormi „tühistamist“.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich kaufe das Buch. = Ma ostan valodas raamatu.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0297
**Audit ID:** ET-A2-0297
**Card ID:** `a2-aufnahme`
**Field/path:** `study.important.text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Aufnahme
**LV MASTER reference:** die Aufnahme nav tikai “fotogrāfija”. Tas var būt arī ieraksts, fotoattēls vai uzņemšanas process.
**CURRENT:** die Aufnahme ei ole ainult “fotograafia”. See võib olla ka salvestis, foto või vastuvõtmise protsess.
**PROPOSED_ET (audit ieteikums):** die Aufnahme ei ole ainult „foto“. See võib olla ka salvestis, foto või vastuvõtmise protsess.
**Problēma:** „Fotograafia“ tähendab fotokunsti või -tegemist, mitte üksikut fotot.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Leitung ist kaputt. = Liin on katki.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0301
**Audit ID:** ET-A2-0301
**Card ID:** `a2-aufrufen`
**Field/path:** `study.tip.leftBlocks[0].text`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** aufrufen
**LV MASTER reference:** Ar Webseite, Datei vai Programm aufrufen nozīmē atvērt.
**CURRENT:** Koos Webseite, Datei või Programm tähendab aufrufen avama.
**PROPOSED_ET (audit ieteikums):** Veebilehe, faili või programmi puhul tähendab aufrufen „avama“.
**Problēma:** Saksa nimisõnad on eestikeelses lauses vääras vormis ning lause on ebaloomulik.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Wasserleitung LV/atlikušās tropft. = Veetoru tilgub.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0302
**Audit ID:** ET-A2-0302
**Card ID:** `a2-aufrufen`
**Field/path:** `study.tip.leftBlocks[1].text`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** GRAMMAR
**DE (read-only):** aufrufen
**LV MASTER reference:** Ar Namen vai Nummer tas nozīmē izsaukt; ar zu + kam? tas bieži nozīmē aicināt.
**CURRENT:** Koos Namen või Nummer tähendab see välja hüüdma; koos zu + Dativ tähendab see sageli üles kutsuma.
**PROPOSED_ET (audit ieteikums):** Nime või numbri puhul tähendab see „välja kutsuma“; koos zu + daativiga tähendab see sageli „üles kutsuma“.
**Problēma:** Lause sisaldab saksa nimisõnu ja saksakeelset käändetermineid eestikeelses vääras vormis.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich merke den Fehler. = Ma märkan viga.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0319
**Audit ID:** ET-A2-0319
**Card ID:** `a2-bitter`
**Field/path:** `study.tip.leftBlocks[1].text`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** bitter
**LV MASTER reference:** Par pieredzi, patiesību vai zaudējumu bitter bieži nozīmē sāpīgs, skarbs vai ass.
**CURRENT:** Kogemuse, tõe või kaotuse kohta tähendab bitter sageli valus, karm või terav.
**PROPOSED_ET (audit ieteikums):** Kogemuse, tõe või kaotuse kohta tähendab bitter sageli valusat, karmi või teravat.
**Problēma:** Verb tähendama nõuab siin partitiivobjekti; omadussõnad peavad olema vastavas käändes.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Patientin ruht sich aus. = valodas Patsient puhkab.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0325
**Audit ID:** ET-A2-0325
**Card ID:** `a2-dabei`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** CRITICAL
**Category:** FOREIGN_REMNANT
**DE (read-only):** dabei
**LV MASTER reference:** viņš palīdzēja un turklāt daudz iemācījās.
**CURRENT:** ta aitas ja õppis pealegi palju.
**PROPOSED_ET (audit ieteikums):** ta aitas ja õppis pealegi palju.
**Problēma:** Sõna „aitas“ on võõrkeelne või vigane remnant; eesti vaste on „aitas“.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Sie spielt eine Rolle. = Ta mängib rolli.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0326
**Audit ID:** ET-A2-0326
**Card ID:** `a2-darauf`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** darauf
**LV MASTER reference:** neilgi pēc tam viņš atgriezās.
**CURRENT:** veidi pärast seda tuli ta tagasi.
**PROPOSED_ET (audit ieteikums):** varsti pärast seda tuli ta tagasi.
**Problēma:** Ajalises väljendis on „varsti pärast seda“ loomulikum ja vastab paremini allika tähendusele.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Er hat die Hauptrolle. = Tal on peaosa. aizstāts ar
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0327
**Audit ID:** ET-A2-0327
**Card ID:** `a2-darüber`
**Field/path:** `etMain`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** darüber
**LV MASTER reference:** par to
**CURRENT:** selle eest
**PROPOSED_ET (audit ieteikums):** selle kohta • selle kohal
**Problēma:** „Selle eest” tähendab dafür; darüber tähendab tavaliselt „selle kohta” või „selle kohal”.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich kaufe eine Papierrolle. = Ma valodas ostan paberirulli.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0337
**Audit ID:** ET-A2-0337
**Card ID:** `a2-ehrlich`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** ehrlich
**LV MASTER reference:** viņš ir jauks.
**CURRENT:** ta on tore.
**PROPOSED_ET (audit ieteikums):** ta on aus.
**Problēma:** „Tore” tähendab kena või meeldivat, mitte saksa ehrlich tähendust „aus”.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Kaffeesatz bleibt im Glas. = valodas Kohvipaks jääb klaasi.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0341
**Audit ID:** ET-A2-0341
**Card ID:** `a2-einsteigen`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** NATURALNESS
**DE (read-only):** einsteigen
**LV MASTER reference:** lūdzu, iekāpiet priekšā.
**CURRENT:** palun, sisenege eest.
**PROPOSED_ET (audit ieteikums):** palun sisenege eesuksest.
**Problēma:** „Sisenege eest” on eesti keeles ebaloomulik; „eesuksest” väljendab sisenemiskohta selgelt.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Die Warteschlange LV/atlikušās ist lang. = Järjekord on pikk.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0348
**Audit ID:** ET-A2-0348
**Card ID:** `a2-gang`
**Field/path:** `study.translation`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gang
**LV MASTER reference:** gaitenis • gaita • ēdiena kārta
**CURRENT:** koridor • kõnnak • roog
**PROPOSED_ET (audit ieteikums):** koridor • kõnnak • käik
**Problēma:** For a meal, German Gang means a course; Estonian käik is the precise equivalent, not roog.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich kaufe ein Fahrradschloss. = valodas Ma ostan jalgrattaluku. ET; DE daļa
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0349
**Audit ID:** ET-A2-0349
**Card ID:** `a2-gang`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gang
**LV MASTER reference:** ēdienkartē ir trīs ēdiena kārtas.
**CURRENT:** menüüs on kolm rooga.
**PROPOSED_ET (audit ieteikums):** menüüs on kolm käiku.
**Problēma:** The example describes three meal courses, not simply three dishes.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Schlüssel ist LV/atlikušās weg. = Võti on kadunud.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0350
**Audit ID:** ET-A2-0350
**Card ID:** `a2-gang`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Gang
**LV MASTER reference:** pirmā ēdiena kārta bija zupa.
**CURRENT:** esimene roog oli supp.
**PROPOSED_ET (audit ieteikums):** esimene käik oli supp.
**Problēma:** The example refers to the first course of a meal; käik is the precise Estonian term.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das ist meine Schuld. = See on minu süü.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0356
**Audit ID:** ET-A2-0356
**Card ID:** `a2-indem`
**Field/path:** `study.comparison[2].meaning`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** indem
**LV MASTER reference:** lai
**CURRENT:** et
**PROPOSED_ET (audit ieteikums):** sellega, et
**Problēma:** „Et” väljendab siin pigem eesmärki, kuid indem näitab viisi; sobiv vaste on „sellega, et”.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Büro ist oben. LV/atlikušās = Kontor on üleval.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0393
**Audit ID:** ET-A2-0393
**Card ID:** `a2-rasen-study`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** TRANSLATION
**DE (read-only):** —
**CURRENT:** 
**Problēma:** —
**Avots:** gpt-5.6-luna
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0397
**Audit ID:** ET-A2-0397
**Card ID:** `a2-schalten`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** schalten
**LV MASTER reference:** vai vari, lūdzu, pārslēgt uz 2. kanālu?
**CURRENT:** kas sa saad, palun, 2. kanalile lülitada?
**PROPOSED_ET (audit ieteikums):** Kas sa saad palun 2. kanalile ümber lülitada?
**Problēma:** Ümberlülitumise tähendus vajab verbiga lülitama loomulikku ühendit ümber lülitama.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der erste Teil ist LV/atlikušās leicht. = Esimene osa on lihtne.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0401
**Audit ID:** ET-A2-0401
**Card ID:** `a2-schloss`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** Schloss
**LV MASTER reference:** neišvānšteinas pils ir ļoti pazīstama.
**CURRENT:** neuschwansteini loss on väga tuntud.
**PROPOSED_ET (audit ieteikums):** Neuschwansteini loss on väga tuntud.
**Problēma:** Lause alguses olev pärisnimi peab algama suure tähega.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich habe einen Termin. = Mul on aeg kokku lepitud.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0402
**Audit ID:** ET-A2-0402
**Card ID:** `a2-sich-befinden`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** SEMANTICS
**DE (read-only):** sich befinden
**LV MASTER reference:** es šodien jūtos labi.
**CURRENT:** ma tunnen end täna hästi.
**PROPOSED_ET (audit ieteikums):** ma asun täna siin.
**Problēma:** Praegune lause tähendab „sich fühlen”, mitte asukohta väljendavat „sich befinden”.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Treffen war nett. = Kohtumine oli meeldiv.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0407
**Audit ID:** ET-A2-0407
**Card ID:** `a2-stelle`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SEMANTICS
**DE (read-only):** Stelle
**LV MASTER reference:** brūce
**CURRENT:** haav
**PROPOSED_ET (audit ieteikums):** koht
**Problēma:** Haav tähendab eesti keeles Wunde, mitte Stelle; Stelle vastav tähendus on koht või paik.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Wasser ist flach. = Vesi on madal.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0422
**Audit ID:** ET-A2-0422
**Card ID:** `a2-während`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** GRAMMAR
**DE (read-only):** während
**LV MASTER reference:** viņa runā pa telefonu, kamēr gaida.
**CURRENT:** ta räägib telefoniga, sel ajal kui ootab.
**PROPOSED_ET (audit ieteikums):** ta räägib telefoniga, samal ajal kui ta ootab.
**Problēma:** Kõrvallauses puudub loomulikult vajalik alus; korduv ta teeb lause grammatiliselt selgeks.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich warte umsonst. = Ma ootan asjata.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0426
**Audit ID:** ET-A2-0426
**Card ID:** `a2-wiegen`
**Field/path:** `study.examples[5].lv`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** STUDY
**DE (read-only):** wiegen
**LV MASTER reference:** automašīna stāv ārā.
**CURRENT:** auto seisab õues.
**PROPOSED_ET (audit ieteikums):** auto kaalub kaks tonni.
**Problēma:** Lause on grammatiliselt korrektne, kuid ei näitlikusta verbi wiegen tähendust „kaaluma“.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich schließe den Drucker an. = Ma ühendan printeri. aizstāts ar
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0427
**Audit ID:** ET-A2-0427
**Card ID:** `a2-wiegen`
**Field/path:** `study.comparison[4].meaning`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** STUDY
**DE (read-only):** wiegen
**LV MASTER reference:** automašīna / vagons
**CURRENT:** auto / vagun
**PROPOSED_ET (audit ieteikums):** kaaluma / kaal
**Problēma:** Võrdlus on sihitult seotud auto ja vaguniga ega aita eristada wiegen'i tähendusi ega vorme.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Arzt Wunde. = verbindet die Arst seob haava.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0437
**Audit ID:** ET-A2-0437
**Card ID:** `a2-gross`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** groß
**LV MASTER reference:** viņš ir garš augumā.
**CURRENT:** ta on pikka kasvu.
**PROPOSED_ET (audit ieteikums):** Ta on pikka kasvu.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich denke an dich. = Ma mõtlen valodas sinu peale.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0439
**Audit ID:** ET-A2-0439
**Card ID:** `a2-hoch`
**Field/path:** `study.examples[2].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hoch
**LV MASTER reference:** īre ir augsta.
**CURRENT:** üür on kõrge.
**PROPOSED_ET (audit ieteikums):** Üür on kõrge.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Ich präsentiere den Plan. = Ma esitlen plaani.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0440
**Audit ID:** ET-A2-0440
**Card ID:** `a2-hoch`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hoch
**LV MASTER reference:** siena ir augsta.
**CURRENT:** müür on kõrge.
**PROPOSED_ET (audit ieteikums):** Müür on kõrge.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Der Wagen ist neu. = Auto on uus.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0441
**Audit ID:** ET-A2-0441
**Card ID:** `a2-hoch`
**Field/path:** `study.examples[4].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** hoch
**LV MASTER reference:** cenas ir augstas.
**CURRENT:** hinnad on kõrged.
**PROPOSED_ET (audit ieteikums):** Hinnad on kõrged.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Auto steht da. = Auto seisab seal.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0444
**Audit ID:** ET-A2-0444
**Card ID:** `a2-klein`
**Field/path:** `study.examples[3].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** klein
**LV MASTER reference:** man ir maza soma.
**CURRENT:** mul on väike kott.
**PROPOSED_ET (audit ieteikums):** Mul on väike kott.
**Problēma:** A complete Estonian sentence must begin with a capital letter.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** FOREIGN_REMNANT **LABOT** Wir stimmen ab. = LV/atlikušās Me hääletame.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0458
**Audit ID:** ET-A2-0458
**Card ID:** `a2-auch`
**Field/path:** `study.examples[1].lv`
**Production file:** `data/et/a2.js`
**Severity:** LOW
**Category:** ORTHOGRAPHY
**DE (read-only):** auch
**LV MASTER reference:** es arī nāku.
**CURRENT:** ma tulen ka.
**PROPOSED_ET (audit ieteikums):** Ma tulen ka.
**Problēma:** Lause alguses peab eesti keeles olema suur algustäht.
**Avots:** gpt-5.6-luna
**OWNER history:** OWNER_DECISION_REOPEN_REQUIRED
**OWNER approved (iepriekš):** Das Auto ist teuer. = Auto on kallis.
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
# ET–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.8
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `e0e062fb8fc9b5a4d7824bfb32595c913017f4ee`
**WORK_BRANCH:** `cursor/et-de-a2-full-audit-v18-4a7c`
**Audit PR:** [#603](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/603)
**SCOPE:** ET–DE A1 (`data/et/a2.js`)
**Findings:** **508** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)

> OBJECT_COVERAGE = 1640/1640 (100%). DISCOVERY_COMPLETENESS = NOT_GUARANTEED.
> 702/702 does NOT mean all possible defects were found.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda [et-a2-owner-decisions.md](et-a2-owner-decisions.md).
> **DE = STRICT READ-ONLY.** Production: `data/et/a2.js` + `www/data/et/a2.js`.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [et-a2-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-review-GITHUB.md) |
| OWNER README | [et-a2-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-review-README.md) |
| OWNER DECISIONS | [et-a2-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions.md) |
| Pilns audits | [et-a2-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-full-audit.md) |
| History validation | [et-a2-pr603-owner-history-validation.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-pr603-owner-history-validation.md) |

## Grupas (pa 50 findingiem)

| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–50 | 50 | [et-a2-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group01.md) | [et-a2-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group01.md) |
| 51–100 | 50 | [et-a2-owner-view-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group02.md) | [et-a2-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group02.md) |
| 101–150 | 50 | [et-a2-owner-view-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group03.md) | [et-a2-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group03.md) |
| 151–200 | 50 | [et-a2-owner-view-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group04.md) | [et-a2-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group04.md) |
| 201–250 | 50 | [et-a2-owner-view-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group05.md) | [et-a2-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group05.md) |
| 251–300 | 50 | [et-a2-owner-view-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group06.md) | [et-a2-owner-decisions-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group06.md) |
| 301–350 | 50 | [et-a2-owner-view-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group07.md) | [et-a2-owner-decisions-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group07.md) |
| 351–400 | 50 | [et-a2-owner-view-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group08.md) | [et-a2-owner-decisions-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group08.md) |
| 401–450 | 50 | [et-a2-owner-view-group09.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group09.md) | [et-a2-owner-decisions-group09.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group09.md) |
| 451–500 | 50 | [et-a2-owner-view-group10.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group10.md) | [et-a2-owner-decisions-group10.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group10.md) |
| 501–508 | 8 | [et-a2-owner-view-group11.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-view-group11.md) | [et-a2-owner-decisions-group11.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/et-de-a2-full-audit-v18-4a7c/reports/et-a2-owner-decisions-group11.md) |

## Īsais saraksts (visi findingi)

- **ET-A2-0001** `STRUCT` · `study.count` · CRITICAL · Study count mismatch LV=231 ET=232
- **ET-A2-0002** `a2-abfahren` · `entry[2].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0003** `a2-abfahren` · `entry[2].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0004** `a2-abfahren` · `entry[2].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0005** `a2-abgeben` · `entry[5].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0006** `a2-abgeben` · `entry[5].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0007** `a2-abgeben` · `entry[5].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0008** `a2-absagen` · `entry[11].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0009** `a2-absagen` · `entry[11].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0010** `a2-absagen` · `entry[11].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0011** `a2-absagen` · `entry[11].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0012** `a2-absagen` · `entry[11].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0013** `a2-abschließen` · `entry[13].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0014** `a2-abschließen` · `entry[13].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0015** `a2-abstellen` · `entry[16].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0016** `a2-abstellen` · `entry[16].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0017** `a2-abstellen` · `entry[16].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0018** `a2-abstellen` · `entry[16].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0019** `a2-abstellen` · `entry[16].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0020** `a2-angewandt` · `entry[41].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0021** `a2-angewandt` · `entry[41].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0022** `a2-angreifen` · `entry[42].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0023** `a2-angreifen` · `entry[42].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0024** `a2-angreifen` · `entry[42].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0025** `a2-angreifen` · `entry[42].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0026** `a2-anhänger` · `entry[44].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0027** `a2-anhänger` · `entry[44].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0028** `a2-anhänger` · `entry[44].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0029** `a2-anheizen` · `entry[45].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0030** `a2-anheizen` · `entry[45].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0031** `a2-anheizen` · `entry[45].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0032** `a2-anlegen` · `entry[55].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0033** `a2-anmelden` · `entry[57].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0034** `a2-anmelden` · `entry[57].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0035** `a2-anmelden` · `entry[57].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0036** `a2-anmelden` · `entry[57].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0037** `a2-anstecken` · `entry[63].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0038** `a2-anstecken` · `entry[63].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0039** `a2-anstellen` · `entry[65].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0040** `a2-anstellen` · `entry[65].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0041** `a2-anstellen` · `entry[65].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0042** `a2-anstellen` · `entry[65].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0043** `a2-artikel` · `entry[90].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0044** `a2-artikel` · `entry[90].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0045** `a2-artikel` · `entry[90].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0046** `a2-artikel` · `entry[90].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0047** `a2-aufheben` · `entry[118].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0048** `a2-aufheben` · `entry[118].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0049** `a2-aufheben` · `entry[118].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0050** `a2-auflage` · `entry[127].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0051** `a2-auflage` · `entry[127].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0052** `a2-auflage` · `entry[127].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0053** `a2-aufnahme` · `entry[132].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0054** `a2-aufnahme` · `entry[132].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0055** `a2-aufnehmen` · `entry[133].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0056** `a2-aufnehmen` · `entry[133].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0057** `a2-aufnehmen` · `entry[133].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0058** `a2-aufrichtig` · `entry[138].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0059** `a2-aufrichtig` · `entry[138].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0060** `a2-aufrichtig` · `entry[138].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0061** `a2-aufrichtig` · `entry[138].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0062** `a2-aufrufen` · `entry[139].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0063** `a2-auftragen` · `entry[146].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0064** `a2-auftragen` · `entry[146].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0065** `a2-auftragen` · `entry[146].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0066** `a2-auftragen` · `entry[146].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0067** `a2-auftreten` · `entry[147].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0068** `a2-auftreten` · `entry[147].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0069** `a2-auftreten` · `entry[147].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0070** `a2-auftreten` · `entry[147].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0071** `a2-aufwenden` · `entry[149].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0072** `a2-aufwenden` · `entry[149].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0073** `a2-aufwenden` · `entry[149].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0074** `a2-aufzeichnen` · `entry[150].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0075** `a2-aussteigen` · `entry[159].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0076** `a2-aussteigen` · `entry[159].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0077** `a2-aussteigen` · `entry[159].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0078** `a2-aussteigen` · `entry[159].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0079** `a2-auswählen` · `entry[165].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0080** `a2-auswählen` · `entry[165].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0081** `a2-auswählen` · `entry[165].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0082** `a2-auswählen` · `entry[165].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0083** `a2-ausziehen` · `entry[169].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0084** `a2-ausziehen` · `entry[169].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0085** `a2-bahn` · `entry[187].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0086** `a2-bahn` · `entry[187].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0087** `a2-bank` · `entry[194].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0088** `a2-bank` · `entry[194].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0089** `a2-bank` · `entry[194].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0090** `a2-bank` · `entry[194].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0091** `a2-bank` · `entry[194].study.comparison[5].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0092** `a2-bauer` · `entry[207].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0093** `a2-bauer` · `entry[207].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0094** `a2-bauer` · `entry[207].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0095** `a2-bauer` · `entry[207].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0096** `a2-bauer` · `entry[207].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0097** `a2-bedienen` · `entry[213].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0098** `a2-bedienen` · `entry[213].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0099** `a2-bedienen` · `entry[213].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0100** `a2-bedienen` · `entry[213].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0101** `a2-bedienung` · `entry[214].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0102** `a2-bedienung` · `entry[214].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0103** `a2-bedienung` · `entry[214].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0104** `a2-bedienung` · `entry[214].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0105** `a2-behalten` · `entry[221].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0106** `a2-behalten` · `entry[221].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0107** `a2-behalten` · `entry[221].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0108** `a2-beinahe` · `entry[222].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0109** `a2-beinahe` · `entry[222].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0110** `a2-beinahe` · `entry[222].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0111** `a2-bekannt` · `entry[224].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0112** `a2-bekannt` · `entry[224].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0113** `a2-bekannt` · `entry[224].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0114** `a2-bekannt` · `entry[224].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0115** `a2-bekannt` · `entry[224].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0116** `a2-bestellen` · `entry[242].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0117** `a2-bestellen` · `entry[242].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0118** `a2-bestellen` · `entry[242].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0119** `a2-bestellen` · `entry[242].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0120** `a2-bestimmt` · `entry[244].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0121** `a2-bestimmt` · `entry[244].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0122** `a2-bestimmt` · `entry[244].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0123** `a2-birne` · `entry[255].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0124** `a2-birne` · `entry[255].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0125** `a2-birne` · `entry[255].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0126** `a2-bitter` · `entry[258].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0127** `a2-bitter` · `entry[258].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0128** `a2-bitter` · `entry[258].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0129** `a2-bitter` · `entry[258].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0130** `a2-boden` · `entry[272].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0131** `a2-boden` · `entry[272].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0132** `a2-boden` · `entry[272].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0133** `a2-borgen` · `entry[276].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0134** `a2-borgen` · `entry[276].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0135** `a2-borgen` · `entry[276].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0136** `a2-böse` · `entry[277].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0137** `a2-böse` · `entry[277].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0138** `a2-böse` · `entry[277].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0139** `a2-brav` · `entry[285].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0140** `a2-brav` · `entry[285].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0141** `a2-brav` · `entry[285].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0142** `a2-brav` · `entry[285].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0143** `a2-brav` · `entry[285].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0144** `a2-brav` · `entry[285].study.comparison[5].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0145** `a2-brennen` · `entry[289].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0146** `a2-brennen` · `entry[289].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0147** `a2-dabei` · `entry[315].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0148** `a2-dabei` · `entry[315].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0149** `a2-dabei` · `entry[315].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0150** `a2-dabei` · `entry[315].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0151** `a2-dafür` · `entry[318].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0152** `a2-dafür` · `entry[318].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0153** `a2-dafür` · `entry[318].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0154** `a2-dafür` · `entry[318].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0155** `a2-damit` · `entry[321].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0156** `a2-damit` · `entry[321].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0157** `a2-damit` · `entry[321].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0158** `study-der-dank` · `entry[323].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0159** `study-der-dank` · `entry[323].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0160** `study-der-dank` · `entry[323].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0161** `study-der-dank` · `entry[323].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0162** `a2-darauf` · `entry[324].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0163** `a2-darauf` · `entry[324].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0164** `a2-darauf` · `entry[324].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0165** `a2-darüber` · `entry[325].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0166** `a2-darüber` · `entry[325].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0167** `a2-darüber` · `entry[325].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0168** `a2-darum` · `entry[326].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0169** `a2-darum` · `entry[326].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0170** `a2-darum` · `entry[326].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0171** `a2-darum` · `entry[326].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0172** `a2-davor` · `entry[329].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0173** `a2-davor` · `entry[329].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0174** `a2-davor` · `entry[329].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0175** `a2-dazu` · `entry[330].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0176** `a2-dazu` · `entry[330].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0177** `a2-decke` · `entry[331].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0178** `a2-decke` · `entry[331].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0179** `a2-denn` · `entry[334].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0180** `a2-denn` · `entry[334].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0181** `a2-denn` · `entry[334].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0182** `a2-dick` · `entry[341].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0183** `a2-dick` · `entry[341].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0184** `a2-dick` · `entry[341].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0185** `a2-dick` · `entry[341].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0186** `a2-doch` · `entry[346].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0187** `a2-doch` · `entry[346].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0188** `a2-doch` · `entry[346].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0189** `a2-doch` · `entry[346].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0190** `a2-doktor` · `entry[347].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0191** `a2-doktor` · `entry[347].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0192** `a2-doktor` · `entry[347].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0193** `a2-doktor` · `entry[347].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0194** `a2-dünn` · `entry[364].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0195** `a2-dünn` · `entry[364].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0196** `a2-dünn` · `entry[364].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0197** `a2-dünn` · `entry[364].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0198** `a2-eben` · `entry[369].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0199** `a2-eben` · `entry[369].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0200** `a2-eben` · `entry[369].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0201** `a2-ehrlich` · `entry[377].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0202** `a2-ehrlich` · `entry[377].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0203** `a2-ehrlich` · `entry[377].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0204** `a2-eigentlich` · `entry[378].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0205** `a2-eigentlich` · `entry[378].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0206** `a2-eigentlich` · `entry[378].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0207** `a2-einladen` · `entry[387].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0208** `a2-einladen` · `entry[387].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0209** `a2-einschalten` · `entry[391].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0210** `a2-einschalten` · `entry[391].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0211** `a2-einschalten` · `entry[391].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0212** `a2-einschalten` · `entry[391].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0213** `a2-einschlafen` · `entry[393].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0214** `a2-einschlafen` · `entry[393].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0215** `a2-einsteigen` · `entry[394].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0216** `a2-einsteigen` · `entry[394].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0217** `a2-einsteigen` · `entry[394].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0218** `a2-eintritt` · `entry[395].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0219** `a2-eintritt` · `entry[395].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0220** `a2-erinnern` · `entry[420].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0221** `a2-erinnern` · `entry[420].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0222** `a2-etwa` · `entry[439].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0223** `a2-etwa` · `entry[439].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0224** `a2-etwa` · `entry[439].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0225** `a2-fach` · `entry[444].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0226** `a2-fach` · `entry[444].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0227** `a2-fach` · `entry[444].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0228** `a2-fach` · `entry[444].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0229** `a2-fach` · `entry[444].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0230** `a2-fall` · `entry[455].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0231** `a2-fall` · `entry[455].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0232** `a2-fall` · `entry[455].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0233** `a2-fall` · `entry[455].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0234** `a2-fehlen` · `entry[467].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0235** `a2-fehlen` · `entry[467].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0236** `a2-fehlen` · `entry[467].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0237** `a2-feuer` · `entry[484].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0238** `a2-feuer` · `entry[484].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0239** `a2-feuer` · `entry[484].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0240** `a2-folgen` · `entry[508].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0241** `a2-folgen` · `entry[508].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0242** `a2-folgen` · `entry[508].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0243** `a2-führen` · `entry[539].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0244** `a2-führen` · `entry[539].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0245** `a2-führen` · `entry[539].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0246** `a2-führen` · `entry[539].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0247** `a2-führen` · `entry[539].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0248** `a2-gehören` · `entry[572].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0249** `a2-genau` · `entry[576].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0250** `a2-genau` · `entry[576].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0251** `a2-genau` · `entry[576].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0252** `a2-gerade` · `entry[580].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0253** `a2-geschäft` · `entry[582].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0254** `a2-geschäft` · `entry[582].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0255** `a2-gewinnen` · `entry[592].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0256** `a2-gewinnen` · `entry[592].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0257** `a2-gewinnen` · `entry[592].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0258** `a2-gießen` · `entry[595].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0259** `a2-gießen` · `entry[595].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0260** `a2-gießen` · `entry[595].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0261** `a2-gießen` · `entry[595].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0262** `a2-grund` · `entry[607].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0263** `a2-grund` · `entry[607].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0264** `a2-grund` · `entry[607].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0265** `a2-grund` · `entry[607].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0266** `a2-hängen` · `entry[632].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0267** `a2-hängen` · `entry[632].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0268** `a2-hängen` · `entry[632].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0269** `a2-indem` · `entry[703].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0270** `a2-indem` · `entry[703].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0271** `a2-indem` · `entry[703].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0272** `a2-indem` · `entry[703].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0273** `a2-kaum` · `entry[783].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0274** `a2-kaum` · `entry[783].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0275** `a2-kaum` · `entry[783].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0276** `a2-kleiden` · `entry[810].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0277** `a2-kleiden` · `entry[810].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0278** `a2-kleiden` · `entry[810].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0279** `a2-kleiden` · `entry[810].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0280** `a2-kurz` · `entry[855].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0281** `a2-kurz` · `entry[855].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0282** `a2-kurz` · `entry[855].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0283** `a2-kurz` · `entry[855].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0284** `a2-kurz` · `entry[855].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0285** `a2-lage` · `entry[857].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0286** `a2-lage` · `entry[857].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0287** `a2-lage` · `entry[857].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0288** `a2-lage` · `entry[857].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0289** `a2-leiden` · `entry[877].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0290** `a2-leiden` · `entry[877].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0291** `a2-leiden` · `entry[877].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0292** `a2-leiden` · `entry[877].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0293** `a2-leihen` · `entry[878].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0294** `a2-leihen` · `entry[878].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0295** `a2-leihen` · `entry[878].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0296** `a2-leiter` · `entry[880].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0297** `a2-leiter` · `entry[880].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0298** `a2-leitung` · `entry[881].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0299** `a2-leitung` · `entry[881].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0300** `a2-leitung` · `entry[881].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0301** `a2-leitung` · `entry[881].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0302** `a2-leitung` · `entry[881].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0303** `a2-merken` · `entry[936].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0304** `a2-merken` · `entry[936].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0305** `a2-merken` · `entry[936].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0306** `a2-merken` · `entry[936].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0307** `a2-mittel` · `entry[951].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0308** `a2-mittel` · `entry[951].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0309** `a2-mittel` · `entry[951].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0310** `a2-mittel` · `entry[951].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0311** `a2-note` · `entry[1019].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0312** `a2-note` · `entry[1019].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0313** `a2-note` · `entry[1019].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0314** `a2-nutzen` · `entry[1029].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0315** `a2-nutzen` · `entry[1029].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0316** `a2-offen` · `entry[1037].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0317** `a2-offen` · `entry[1037].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0318** `a2-offen` · `entry[1037].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0319** `a2-offen` · `entry[1037].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0320** `a2-patient` · `entry[1064].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0321** `a2-patient` · `entry[1064].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0322** `a2-personal` · `entry[1068].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0323** `a2-personal` · `entry[1068].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0324** `a2-personal` · `entry[1068].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0325** `a2-riechen` · `entry[1165].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0326** `a2-rolle` · `entry[1172].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0327** `a2-rolle` · `entry[1172].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0328** `a2-rolle` · `entry[1172].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0329** `a2-rolle` · `entry[1172].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0330** `a2-rolle` · `entry[1172].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0331** `a2-sammeln` · `entry[1190].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0332** `a2-sammeln` · `entry[1190].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0333** `a2-sammeln` · `entry[1190].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0334** `a2-sammeln` · `entry[1190].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0335** `a2-satz` · `entry[1194].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0336** `a2-satz` · `entry[1194].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0337** `a2-satz` · `entry[1194].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0338** `a2-satz` · `entry[1194].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0339** `a2-scheinen` · `entry[1217].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0340** `a2-scheinen` · `entry[1217].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0341** `a2-scheinen` · `entry[1217].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0342** `a2-schlange` · `entry[1229].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0343** `a2-schlange` · `entry[1229].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0344** `a2-schlange` · `entry[1229].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0345** `a2-schließen` · `entry[1230].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0346** `a2-schließen` · `entry[1230].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0347** `a2-schloss` · `entry[1236].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0348** `a2-schloss` · `entry[1236].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0349** `a2-schloss` · `entry[1236].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0350** `a2-schloss` · `entry[1236].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0351** `a2-schuld` · `entry[1256].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0352** `a2-schuld` · `entry[1256].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0353** `a2-schuld` · `entry[1256].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0354** `a2-schuld` · `entry[1256].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0355** `a2-schuld` · `entry[1256].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0356** `a2-sich-befinden` · `entry[1291].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0357** `a2-sich-befinden` · `entry[1291].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0358** `a2-sich-befinden` · `entry[1291].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0359** `a2-sich-befinden` · `entry[1291].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0360** `a2-sich-befinden` · `entry[1291].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0361** `a2-sich-unterhalten` · `entry[1305].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0362** `a2-sich-unterhalten` · `entry[1305].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0363** `a2-sich-unterhalten` · `entry[1305].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0364** `a2-sich-unterhalten` · `entry[1305].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0365** `a2-sobald` · `entry[1325].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0366** `a2-sobald` · `entry[1325].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0367** `a2-sobald` · `entry[1325].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0368** `a2-sobald` · `entry[1325].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0369** `a2-sobald` · `entry[1325].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0370** `a2-sonst` · `entry[1336].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0371** `a2-sonst` · `entry[1336].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0372** `a2-sonst` · `entry[1336].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0373** `a2-sonst` · `entry[1336].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0374** `a2-sonst` · `entry[1336].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0375** `a2-steigen` · `entry[1378].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0376** `a2-steigen` · `entry[1378].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0377** `a2-steigen` · `entry[1378].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0378** `a2-steigen` · `entry[1378].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0379** `a2-steigen` · `entry[1378].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0380** `a2-stelle` · `entry[1380].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0381** `a2-stelle` · `entry[1380].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0382** `a2-stelle` · `entry[1380].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0383** `a2-stimmen` · `entry[1388].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0384** `a2-stimmen` · `entry[1388].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0385** `a2-stimmen` · `entry[1388].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0386** `a2-stimmen` · `entry[1388].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0387** `a2-stimmen` · `entry[1388].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0388** `a2-stoff` · `entry[1392].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0389** `a2-stoff` · `entry[1392].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0390** `a2-stoff` · `entry[1392].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0391** `a2-stoff` · `entry[1392].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0392** `a2-tafel` · `entry[1416].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0393** `a2-tafel` · `entry[1416].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0394** `a2-tafel` · `entry[1416].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0395** `a2-tafel` · `entry[1416].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0396** `a2-tafel` · `entry[1416].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0397** `a2-teil` · `entry[1431].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0398** `a2-teil` · `entry[1431].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0399** `a2-teil` · `entry[1431].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0400** `a2-teil` · `entry[1431].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0401** `a2-teil` · `entry[1431].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0402** `a2-termin` · `entry[1438].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0403** `a2-termin` · `entry[1438].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0404** `a2-termin` · `entry[1438].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0405** `a2-termin` · `entry[1438].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0406** `a2-termin` · `entry[1438].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0407** `a2-tief` · `entry[1443].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0408** `a2-tief` · `entry[1443].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0409** `a2-tragen` · `entry[1458].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0410** `a2-tragen` · `entry[1458].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0411** `a2-treffen` · `entry[1469].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0412** `a2-treffen` · `entry[1469].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0413** `a2-treffen` · `entry[1469].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0414** `a2-treffen` · `entry[1469].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0415** `a2-übrig` · `entry[1488].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0416** `a2-übrig` · `entry[1488].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0417** `a2-übrig` · `entry[1488].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0418** `a2-übrig` · `entry[1488].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0419** `a2-übung` · `entry[1489].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0420** `a2-übung` · `entry[1489].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0421** `a2-übung` · `entry[1489].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0422** `a2-übung` · `entry[1489].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0423** `a2-umsonst` · `entry[1492].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0424** `a2-umsonst` · `entry[1492].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0425** `a2-umsonst` · `entry[1492].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0426** `a2-verbinden` · `entry[1511].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0427** `a2-verbinden` · `entry[1511].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0428** `a2-verbinden` · `entry[1511].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0429** `a2-verkehr` · `entry[1517].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0430** `a2-verkehr` · `entry[1517].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0431** `a2-verkehr` · `entry[1517].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0432** `a2-verkehr` · `entry[1517].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0433** `a2-viertel` · `entry[1529].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0434** `a2-viertel` · `entry[1529].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0435** `a2-viertel` · `entry[1529].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0436** `a2-vorstellen` · `entry[1544].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0437** `a2-vorstellen` · `entry[1544].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0438** `a2-vorstellen` · `entry[1544].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0439** `a2-vorstellen` · `entry[1544].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0440** `a2-vorstellen` · `entry[1544].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0441** `a2-wagen` · `entry[1550].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0442** `a2-wagen` · `entry[1550].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0443** `a2-wählen` · `entry[1551].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0444** `a2-wählen` · `entry[1551].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0445** `a2-wählen` · `entry[1551].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0446** `a2-während` · `entry[1553].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0447** `a2-während` · `entry[1553].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0448** `a2-während` · `entry[1553].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0449** `a2-während` · `entry[1553].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0450** `a2-wahrscheinlich` · `entry[1555].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0451** `a2-wahrscheinlich` · `entry[1555].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0452** `a2-wahrscheinlich` · `entry[1555].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0453** `a2-wahrscheinlich` · `entry[1555].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0454** `a2-wechseln` · `entry[1564].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0455** `a2-wechseln` · `entry[1564].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0456** `a2-wechseln` · `entry[1564].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0457** `a2-wert` · `entry[1583].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0458** `a2-wert` · `entry[1583].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0459** `a2-wert` · `entry[1583].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0460** `a2-wert` · `entry[1583].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0461** `a2-wert` · `entry[1583].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0462** `a2-Weste-1584` · `entry[1584].lv` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0463** `a2-wiegen` · `entry[1589].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0464** `a2-wiegen` · `entry[1589].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0465** `a2-wiegen` · `entry[1589].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0466** `a2-wiegen` · `entry[1589].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0467** `a2-ziehen` · `entry[1599].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0468** `a2-ziehen` · `entry[1599].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0469** `a2-ziehen` · `entry[1599].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0470** `a2-zunehmen` · `entry[1614].study.comparison[1].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0471** `a2-zunehmen` · `entry[1614].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0472** `a2-zunehmen` · `entry[1614].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0473** `a2-zunehmen` · `entry[1614].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0474** `a2-zurzeit` · `entry[1618].study.comparison[0].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0475** `a2-zurzeit` · `entry[1618].study.comparison[2].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0476** `a2-zurzeit` · `entry[1618].study.comparison[3].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0477** `a2-zurzeit` · `entry[1618].study.comparison[4].example` · HIGH · LV/atlikušā valoda ET laukā
- **ET-A2-0478** `a2-abfahren` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0479** `a2-bauen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0480** `a2-job` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0481** `a2-job` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0486** `a2-job` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0487** `a2-job` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0488** `a2-job` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0489** `a2-job` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0491** `a2-kamm` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0492** `a2-kamm` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0493** `a2-kamm` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0494** `a2-lage` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0495** `a2-leitung` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0497** `a2-leitung` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0499** `a2-leitung` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0501** `a2-rechnen` · `study.sectionAccents (explanation)` · MEDIUM · Accent term not found in section text
- **ET-A2-0502** `a2-satz` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0503** `a2-satz` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0505** `a2-satz` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0507** `a2-schloss` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0508** `a2-wagen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0509** `a2-wagen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0510** `a2-wagen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0511** `a2-wagen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0516** `a2-wagen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0518** `a2-wagen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0522** `a2-wagen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **ET-A2-0523** `a2-abfahren` · `study.sectionAccents.comparison.example` · MEDIUM · sectionAccents termins "Rong" nav atrodams sadaļā comparison
- **ET-A2-0524** `a2-abfahren` · `study.sectionAccents.comparison.example` · MEDIUM · sectionAccents termins "väljub" nav atrodams sadaļā comparison
- **ET-A2-0526** `a2-abfahren` · `study.sectionAccents.comparison.example` · MEDIUM · sectionAccents termins "sõidan" nav atrodams sadaļā comparison
- **ET-A2-0527** `a2-abfahren` · `study.sectionAccents.comparison.example` · MEDIUM · sectionAccents termins "ära" nav atrodams sadaļā comparison

## Pilns findingu pārskats (visi findingi)

## ET-A2-0001
**Audit ID:** ET-A2-0001
**Card ID:** `STRUCT`
**Field/path:** `study.count`
**Production file:** `data/et/a2.js`
**Severity:** CRITICAL
**Category:** STRUCTURE
**DE (read-only):** —
**CURRENT:** 232
**PROPOSED_ET (audit ieteikums):** 231
**Problēma:** Study count mismatch LV=231 ET=232
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0002
**Audit ID:** ET-A2-0002
**Card ID:** `a2-abfahren`
**Field/path:** `entry[2].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich fahre morgen weg. = Es rīt aizbraucu prom.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0003
**Audit ID:** ET-A2-0003
**Card ID:** `a2-abfahren`
**Field/path:** `entry[2].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir fahren jetzt los. = Mēs tagad sākam braukt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0004
**Audit ID:** ET-A2-0004
**Card ID:** `a2-abfahren`
**Field/path:** `entry[2].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Bus geht gleich ab. = Autobuss tūlīt atiet.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0005
**Audit ID:** ET-A2-0005
**Card ID:** `a2-abgeben`
**Field/path:** `entry[5].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich gebe dir den Schlüssel. = Es tev dodu atslēgu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0006
**Audit ID:** ET-A2-0006
**Card ID:** `a2-abgeben`
**Field/path:** `entry[5].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich gebe das Buch zurück. = Es atdodu grāmatu atpakaļ.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0007
**Audit ID:** ET-A2-0007
**Card ID:** `a2-abgeben`
**Field/path:** `entry[5].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich verkaufe mein Fahrrad. = Es pārdodu savu velosipēdu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0008
**Audit ID:** ET-A2-0008
**Card ID:** `a2-absagen`
**Field/path:** `entry[11].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich sage den Termin ab. = Es atceļu tikšanos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0009
**Audit ID:** ET-A2-0009
**Card ID:** `a2-absagen`
**Field/path:** `entry[11].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lehne das Angebot ab. = Es noraidu piedāvājumu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0010
**Audit ID:** ET-A2-0010
**Card ID:** `a2-absagen`
**Field/path:** `entry[11].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich kündige den Vertrag. = Es uzteicu līgumu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0011
**Audit ID:** ET-A2-0011
**Card ID:** `a2-absagen`
**Field/path:** `entry[11].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich storniere die Buchung. = Es atceļu rezervāciju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0012
**Audit ID:** ET-A2-0012
**Card ID:** `a2-absagen`
**Field/path:** `entry[11].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er sagt nein. = Viņš saka nē.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0013
**Audit ID:** ET-A2-0013
**Card ID:** `a2-abschließen`
**Field/path:** `entry[13].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich schließe die Tür ab. = Es aizslēdzu durvis.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0014
**Audit ID:** ET-A2-0014
**Card ID:** `a2-abschließen`
**Field/path:** `entry[13].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich unterschreibe den Vertrag. = Es parakstu līgumu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0015
**Audit ID:** ET-A2-0015
**Card ID:** `a2-abstellen`
**Field/path:** `entry[16].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich stelle das Fahrrad ab. = Es novietoju velosipēdu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0016
**Audit ID:** ET-A2-0016
**Card ID:** `a2-abstellen`
**Field/path:** `entry[16].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich schalte den Computer aus. = Es izslēdzu datoru.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0017
**Audit ID:** ET-A2-0017
**Card ID:** `a2-abstellen`
**Field/path:** `entry[16].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Bus hält an. = Autobuss apstājas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0018
**Audit ID:** ET-A2-0018
**Card ID:** `a2-abstellen`
**Field/path:** `entry[16].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Fahrer stoppt das Auto. = Vadītājs aptur auto.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0019
**Audit ID:** ET-A2-0019
**Card ID:** `a2-abstellen`
**Field/path:** `entry[16].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich stelle die Tasche neben die Tür. = Es nolieku somu pie durvīm.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0020
**Audit ID:** ET-A2-0020
**Card ID:** `a2-angewandt`
**Field/path:** `entry[41].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Diese Methode wird angewandt. = Šī metode tiek pielietota.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0021
**Audit ID:** ET-A2-0021
**Card ID:** `a2-angewandt`
**Field/path:** `entry[41].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist eine praktische Lösung. = Tas ir praktisks risinājums.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0022
**Audit ID:** ET-A2-0022
**Card ID:** `a2-angreifen`
**Field/path:** `entry[42].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Hund greift an. = Suns uzbrūk.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0023
**Audit ID:** ET-A2-0023
**Card ID:** `a2-angreifen`
**Field/path:** `entry[42].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Gruppe attackiert ihn. = Grupa viņam uzbrūk.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0024
**Audit ID:** ET-A2-0024
**Card ID:** `a2-angreifen`
**Field/path:** `entry[42].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er beleidigt mich. = Viņš mani apvaino.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0025
**Audit ID:** ET-A2-0025
**Card ID:** `a2-angreifen`
**Field/path:** `entry[42].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie kritisiert den Vorschlag. = Viņa kritizē priekšlikumu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0026
**Audit ID:** ET-A2-0026
**Card ID:** `a2-anhänger`
**Field/path:** `entry[44].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist ein Fan der Mannschaft. = Viņš ir komandas fans.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0027
**Audit ID:** ET-A2-0027
**Card ID:** `a2-anhänger`
**Field/path:** `entry[44].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie hat viele Unterstützer. = Viņai ir daudz atbalstītāju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0028
**Audit ID:** ET-A2-0028
**Card ID:** `a2-anhänger`
**Field/path:** `entry[44].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Wohnwagen steht am See. = Dzīvojamā piekabe stāv pie ezera.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0029
**Audit ID:** ET-A2-0029
**Card ID:** `a2-anheizen`
**Field/path:** `entry[45].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich heize den Ofen an. = Es iekuru krāsni.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0030
**Audit ID:** ET-A2-0030
**Card ID:** `a2-anheizen`
**Field/path:** `entry[45].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir heizen die Wohnung. = Mēs apkurinām dzīvokli.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0031
**Audit ID:** ET-A2-0031
**Card ID:** `a2-anheizen`
**Field/path:** `entry[45].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das verschärft den Streit. = Tas saasina strīdu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0032
**Audit ID:** ET-A2-0032
**Card ID:** `a2-anlegen`
**Field/path:** `entry[55].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0033
**Audit ID:** ET-A2-0033
**Card ID:** `a2-anmelden`
**Field/path:** `entry[57].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Melden Sie sich bitte an. = Lūdzu, piesakieties.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0034
**Audit ID:** ET-A2-0034
**Card ID:** `a2-anmelden`
**Field/path:** `entry[57].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich registriere mein Konto. = Es reģistrēju savu kontu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0035
**Audit ID:** ET-A2-0035
**Card ID:** `a2-anmelden`
**Field/path:** `entry[57].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich buche einen Termin. = Es rezervēju laiku.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0036
**Audit ID:** ET-A2-0036
**Card ID:** `a2-anmelden`
**Field/path:** `entry[57].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich melde das Problem. = Es ziņoju par problēmu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0037
**Audit ID:** ET-A2-0037
**Card ID:** `a2-anstecken`
**Field/path:** `entry[63].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Schlüssel steckt im Schloss. = Atslēga ir slēdzenē.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0038
**Audit ID:** ET-A2-0038
**Card ID:** `a2-anstecken`
**Field/path:** `entry[63].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe mich angesteckt. = Es inficējos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0039
**Audit ID:** ET-A2-0039
**Card ID:** `a2-anstellen`
**Field/path:** `entry[65].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Firma stellt ihn an. = Firma viņu pieņem darbā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0040
**Audit ID:** ET-A2-0040
**Card ID:** `a2-anstellen`
**Field/path:** `entry[65].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir stellen neue Leute ein. = Mēs pieņemam darbā jaunus cilvēkus.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0041
**Audit ID:** ET-A2-0041
**Card ID:** `a2-anstellen`
**Field/path:** `entry[65].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich schalte das Licht an. = Es ieslēdzu gaismu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0042
**Audit ID:** ET-A2-0042
**Card ID:** `a2-anstellen`
**Field/path:** `entry[65].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich stelle mich an. = Es nostājos rindā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0043
**Audit ID:** ET-A2-0043
**Card ID:** `a2-artikel`
**Field/path:** `entry[90].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Artikel ist kurz. = Raksts ir īss.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0044
**Audit ID:** ET-A2-0044
**Card ID:** `a2-artikel`
**Field/path:** `entry[90].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Zeitungsartikel ist neu. = Avīzes raksts ir jauns.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0045
**Audit ID:** ET-A2-0045
**Card ID:** `a2-artikel`
**Field/path:** `entry[90].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Ware ist teuer. = Prece ir dārga.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0046
**Audit ID:** ET-A2-0046
**Card ID:** `a2-artikel`
**Field/path:** `entry[90].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Paragraph ist wichtig. = Pants ir svarīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0047
**Audit ID:** ET-A2-0047
**Card ID:** `a2-aufheben`
**Field/path:** `entry[118].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich hebe den Schlüssel auf. = Es paceļu atslēgu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0048
**Audit ID:** ET-A2-0048
**Card ID:** `a2-aufheben`
**Field/path:** `entry[118].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich hebe die Hand. = Es paceļu roku.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0049
**Audit ID:** ET-A2-0049
**Card ID:** `a2-aufheben`
**Field/path:** `entry[118].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sagen den Termin ab. = Mēs atceļam tikšanos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0050
**Audit ID:** ET-A2-0050
**Card ID:** `a2-auflage`
**Field/path:** `entry[127].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Auflage ist hoch. = Tirāža ir liela.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0051
**Audit ID:** ET-A2-0051
**Card ID:** `a2-auflage`
**Field/path:** `entry[127].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die neue Ausgabe ist da. = Jaunais numurs ir klāt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0052
**Audit ID:** ET-A2-0052
**Card ID:** `a2-auflage`
**Field/path:** `entry[127].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist eine Bedingung. = Tas ir nosacījums.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0053
**Audit ID:** ET-A2-0053
**Card ID:** `a2-aufnahme`
**Field/path:** `entry[132].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Bild hängt an der Wand. = Attēls karājas pie sienas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0054
**Audit ID:** ET-A2-0054
**Card ID:** `a2-aufnahme`
**Field/path:** `entry[132].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Aufnahmeprüfung ist morgen. = Iestājpārbaudījums ir rīt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0055
**Audit ID:** ET-A2-0055
**Card ID:** `a2-aufnehmen`
**Field/path:** `entry[133].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich nehme das Buch. = Es ņemu grāmatu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0056
**Audit ID:** ET-A2-0056
**Card ID:** `a2-aufnehmen`
**Field/path:** `entry[133].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich nehme das Angebot an. = Es pieņemu piedāvājumu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0057
**Audit ID:** ET-A2-0057
**Card ID:** `a2-aufnehmen`
**Field/path:** `entry[133].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir beginnen die Arbeit. = Mēs sākam darbu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0058
**Audit ID:** ET-A2-0058
**Card ID:** `a2-aufrichtig`
**Field/path:** `entry[138].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Eine aufrichtige Entschuldigung. = Patiesa atvainošanās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0059
**Audit ID:** ET-A2-0059
**Card ID:** `a2-aufrichtig`
**Field/path:** `entry[138].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist ehrlich. = Viņš ir godīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0060
**Audit ID:** ET-A2-0060
**Card ID:** `a2-aufrichtig`
**Field/path:** `entry[138].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Herzliche Grüße. = Sirsnīgi sveicieni.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0061
**Audit ID:** ET-A2-0061
**Card ID:** `a2-aufrichtig`
**Field/path:** `entry[138].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie spricht offen. = Viņa runā atklāti.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0062
**Audit ID:** ET-A2-0062
**Card ID:** `a2-aufrufen`
**Field/path:** `entry[139].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er fordert uns auf. = Viņš mūs aicina.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0063
**Audit ID:** ET-A2-0063
**Card ID:** `a2-auftragen`
**Field/path:** `entry[146].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Lehrer trägt eine Aufgabe auf. = Skolotājs uzdod uzdevumu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0064
**Audit ID:** ET-A2-0064
**Card ID:** `a2-auftragen`
**Field/path:** `entry[146].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich gebe dir das Buch. = Es tev dodu grāmatu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0065
**Audit ID:** ET-A2-0065
**Card ID:** `a2-auftragen`
**Field/path:** `entry[146].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir streichen die Wand an. = Mēs krāsojam sienu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0066
**Audit ID:** ET-A2-0066
**Card ID:** `a2-auftragen`
**Field/path:** `entry[146].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Kellner serviert das Essen. = Viesmīlis pasniedz ēdienu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0067
**Audit ID:** ET-A2-0067
**Card ID:** `a2-auftreten`
**Field/path:** `entry[147].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ein Fehler tritt auf. = Parādās kļūda.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0068
**Audit ID:** ET-A2-0068
**Card ID:** `a2-auftreten`
**Field/path:** `entry[147].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er erscheint um acht. = Viņš ierodas astoņos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0069
**Audit ID:** ET-A2-0069
**Card ID:** `a2-auftreten`
**Field/path:** `entry[147].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie spielt im Theater. = Viņa spēlē teātrī.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0070
**Audit ID:** ET-A2-0070
**Card ID:** `a2-auftreten`
**Field/path:** `entry[147].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er verhält sich ruhig. = Viņš izturas mierīgi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0071
**Audit ID:** ET-A2-0071
**Card ID:** `a2-aufwenden`
**Field/path:** `entry[149].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich gebe viel Geld aus. = Es iztērēju daudz naudas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0072
**Audit ID:** ET-A2-0072
**Card ID:** `a2-aufwenden`
**Field/path:** `entry[149].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich verbringe den Abend zu Hause. = Es pavadu vakaru mājās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0073
**Audit ID:** ET-A2-0073
**Card ID:** `a2-aufwenden`
**Field/path:** `entry[149].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir investieren Zeit und Geld. = Mēs ieguldām laiku un naudu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0074
**Audit ID:** ET-A2-0074
**Card ID:** `a2-aufzeichnen`
**Field/path:** `entry[150].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Kind zeichnet ein Haus. = Bērns zīmē māju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0075
**Audit ID:** ET-A2-0075
**Card ID:** `a2-aussteigen`
**Field/path:** `entry[159].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich steige aus dem Bus aus. = Es izkāpju no autobusa.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0076
**Audit ID:** ET-A2-0076
**Card ID:** `a2-aussteigen`
**Field/path:** `entry[159].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich steige in den Zug ein. = Es iekāpju vilcienā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0077
**Audit ID:** ET-A2-0077
**Card ID:** `a2-aussteigen`
**Field/path:** `entry[159].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir steigen in Berlin um. = Mēs pārsēžamies Berlīnē.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0078
**Audit ID:** ET-A2-0078
**Card ID:** `a2-aussteigen`
**Field/path:** `entry[159].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er verlässt die Firma. = Viņš atstāj firmu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0079
**Audit ID:** ET-A2-0079
**Card ID:** `a2-auswählen`
**Field/path:** `entry[165].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich wähle ein Bild aus. = Es izvēlos attēlu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0080
**Audit ID:** ET-A2-0080
**Card ID:** `a2-auswählen`
**Field/path:** `entry[165].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Such dir ein Buch aus. = Izvēlies sev grāmatu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0081
**Audit ID:** ET-A2-0081
**Card ID:** `a2-auswählen`
**Field/path:** `entry[165].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich entscheide morgen. = Es izlemšu rīt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0082
**Audit ID:** ET-A2-0082
**Card ID:** `a2-auswählen`
**Field/path:** `entry[165].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Markieren Sie die richtige Antwort. = Atzīmējiet pareizo atbildi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0083
**Audit ID:** ET-A2-0083
**Card ID:** `a2-ausziehen`
**Field/path:** `entry[169].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir ziehen nach Riga um. = Mēs pārceļamies uz Rīgu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0084
**Audit ID:** ET-A2-0084
**Card ID:** `a2-ausziehen`
**Field/path:** `entry[169].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Kind zieht sich aus. = Bērns izģērbjas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0085
**Audit ID:** ET-A2-0085
**Card ID:** `a2-bahn`
**Field/path:** `entry[187].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Zug fährt um acht Uhr ab. = Vilciens atiet astoņos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0086
**Audit ID:** ET-A2-0086
**Card ID:** `a2-bahn`
**Field/path:** `entry[187].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir treffen uns am Bahnhof. = Mēs tiekamies stacijā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0087
**Audit ID:** ET-A2-0087
**Card ID:** `a2-bank`
**Field/path:** `entry[194].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sitzen auf einer Bank. = Mēs sēžam uz soliņa. Plural: die Bänke.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0088
**Audit ID:** ET-A2-0088
**Card ID:** `a2-bank`
**Field/path:** `entry[194].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Bankfiliale ist geöffnet. = Bankas filiāle ir atvērta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0089
**Audit ID:** ET-A2-0089
**Card ID:** `a2-bank`
**Field/path:** `entry[194].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sitzen auf der Parkbank. = Mēs sēžam uz parka soliņa.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0090
**Audit ID:** ET-A2-0090
**Card ID:** `a2-bank`
**Field/path:** `entry[194].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Schiff steckt auf einer Sandbank. = Kuģis ir uzsēdies uz sēkļa.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0091
**Audit ID:** ET-A2-0091
**Card ID:** `a2-bank`
**Field/path:** `entry[194].study.comparison[5].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich sitze auf einem Stuhl. = Es sēžu uz krēsla.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0092
**Audit ID:** ET-A2-0092
**Card ID:** `a2-bauer`
**Field/path:** `entry[207].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Bauer arbeitet auf dem Feld. = Zemnieks strādā uz lauka.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0093
**Audit ID:** ET-A2-0093
**Card ID:** `a2-bauer`
**Field/path:** `entry[207].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Landwirt führt einen Hof. = Lauksaimnieks vada saimniecību.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0094
**Audit ID:** ET-A2-0094
**Card ID:** `a2-bauer`
**Field/path:** `entry[207].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir besuchen einen Bauernhof. = Mēs apmeklējam lauku saimniecību.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0095
**Audit ID:** ET-A2-0095
**Card ID:** `a2-bauer`
**Field/path:** `entry[207].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Dame ist eine starke Figur. = Dāma ir spēcīga figūra.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0096
**Audit ID:** ET-A2-0096
**Card ID:** `a2-bauer`
**Field/path:** `entry[207].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Spielstein liegt auf dem Brett. = Spēles kauliņš atrodas uz galda.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0097
**Audit ID:** ET-A2-0097
**Card ID:** `a2-bedienen`
**Field/path:** `entry[213].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Kellner bedient uns. = Viesmīlis mūs apkalpo.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0098
**Audit ID:** ET-A2-0098
**Card ID:** `a2-bedienen`
**Field/path:** `entry[213].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Kannst du mir helfen? = Vai vari man palīdzēt?
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0099
**Audit ID:** ET-A2-0099
**Card ID:** `a2-bedienen`
**Field/path:** `entry[213].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie serviert das Essen. = Viņa pasniedz ēdienu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0100
**Audit ID:** ET-A2-0100
**Card ID:** `a2-bedienen`
**Field/path:** `entry[213].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er steuert das Auto. = Viņš vada auto.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0101
**Audit ID:** ET-A2-0101
**Card ID:** `a2-bedienung`
**Field/path:** `entry[214].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Bedienung ist freundlich. = Apkalpotājs ir laipns.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0102
**Audit ID:** ET-A2-0102
**Card ID:** `a2-bedienung`
**Field/path:** `entry[214].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Kellner bringt die Rechnung. = Viesmīlis atnes rēķinu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0103
**Audit ID:** ET-A2-0103
**Card ID:** `a2-bedienung`
**Field/path:** `entry[214].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Kellnerin fragt nach Getränken. = Viesmīle jautā par dzērieniem.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0104
**Audit ID:** ET-A2-0104
**Card ID:** `a2-bedienung`
**Field/path:** `entry[214].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Personal hilft uns. = Personāls mums palīdz.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0105
**Audit ID:** ET-A2-0105
**Card ID:** `a2-behalten`
**Field/path:** `entry[221].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Du kannst es behalten. = Tu vari to paturēt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0106
**Audit ID:** ET-A2-0106
**Card ID:** `a2-behalten`
**Field/path:** `entry[221].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich merke mir die Nummer. = Es iegaumēju numuru.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0107
**Audit ID:** ET-A2-0107
**Card ID:** `a2-behalten`
**Field/path:** `entry[221].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bewahre die Quittung auf. = Es glabāju čeku.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0108
**Audit ID:** ET-A2-0108
**Card ID:** `a2-beinahe`
**Field/path:** `entry[222].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich hätte beinahe gelacht. = Es gandrīz sāku smieties.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0109
**Audit ID:** ET-A2-0109
**Card ID:** `a2-beinahe`
**Field/path:** `entry[222].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bin fast fertig. = Es esmu gandrīz gatavs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0110
**Audit ID:** ET-A2-0110
**Card ID:** `a2-beinahe`
**Field/path:** `entry[222].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir haben es gerade noch geschafft. = Mēs vēl tik tikko paspējām.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0111
**Audit ID:** ET-A2-0111
**Card ID:** `a2-bekannt`
**Field/path:** `entry[224].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist bekannt. = Tas ir zināms.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0112
**Audit ID:** ET-A2-0112
**Card ID:** `a2-bekannt`
**Field/path:** `entry[224].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist berühmt. = Viņš ir slavens.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0113
**Audit ID:** ET-A2-0113
**Card ID:** `a2-bekannt`
**Field/path:** `entry[224].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Umgebung ist mir vertraut. = Apkārtne man ir pazīstama.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0114
**Audit ID:** ET-A2-0114
**Card ID:** `a2-bekannt`
**Field/path:** `entry[224].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sind befreundet. = Mēs esam draugos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0115
**Audit ID:** ET-A2-0115
**Card ID:** `a2-bekannt`
**Field/path:** `entry[224].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Täter ist unbekannt. = Vainīgais ir nezināms.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0116
**Audit ID:** ET-A2-0116
**Card ID:** `a2-bestellen`
**Field/path:** `entry[242].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bestelle Essen. = Es pasūtu ēdienu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0117
**Audit ID:** ET-A2-0117
**Card ID:** `a2-bestellen`
**Field/path:** `entry[242].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich reserviere einen Tisch. = Es rezervēju galdiņu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0118
**Audit ID:** ET-A2-0118
**Card ID:** `a2-bestellen`
**Field/path:** `entry[242].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich kaufe Brot. = Es pērku maizi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0119
**Audit ID:** ET-A2-0119
**Card ID:** `a2-bestellen`
**Field/path:** `entry[242].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bearbeite den Text. = Es apstrādāju tekstu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0120
**Audit ID:** ET-A2-0120
**Card ID:** `a2-bestimmt`
**Field/path:** `entry[244].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich brauche ein konkretes Beispiel. = Man vajag konkrētu piemēru.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0121
**Audit ID:** ET-A2-0121
**Card ID:** `a2-bestimmt`
**Field/path:** `entry[244].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir haben einen festen Termin. = Mums ir noteikts termiņš.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0122
**Audit ID:** ET-A2-0122
**Card ID:** `a2-bestimmt`
**Field/path:** `entry[244].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er kommt wahrscheinlich morgen. = Viņš droši vien atnāks rīt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0123
**Audit ID:** ET-A2-0123
**Card ID:** `a2-birne`
**Field/path:** `entry[255].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich esse eine Birne. = Es ēdu bumbieri.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0124
**Audit ID:** ET-A2-0124
**Card ID:** `a2-birne`
**Field/path:** `entry[255].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Glühbirne ist kaputt. = Spuldze ir saplīsusi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0125
**Audit ID:** ET-A2-0125
**Card ID:** `a2-birne`
**Field/path:** `entry[255].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Birnen sind Obst. = Bumbieri ir augļi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0126
**Audit ID:** ET-A2-0126
**Card ID:** `a2-bitter`
**Field/path:** `entry[258].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Kaffee ist bitter. = Kafija ir rūgta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0127
**Audit ID:** ET-A2-0127
**Card ID:** `a2-bitter`
**Field/path:** `entry[258].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Zitrone ist sauer. = Citrons ir skābs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0128
**Audit ID:** ET-A2-0128
**Card ID:** `a2-bitter`
**Field/path:** `entry[258].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Lehrer ist streng. = Skolotājs ir stingrs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0129
**Audit ID:** ET-A2-0129
**Card ID:** `a2-bitter`
**Field/path:** `entry[258].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Geruch ist unangenehm. = Smarža ir nepatīkama.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0130
**Audit ID:** ET-A2-0130
**Card ID:** `a2-boden`
**Field/path:** `entry[272].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Tasche liegt auf dem Boden. = Soma atrodas uz grīdas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0131
**Audit ID:** ET-A2-0131
**Card ID:** `a2-boden`
**Field/path:** `entry[272].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Fußboden ist sauber. = Grīda ir tīra.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0132
**Audit ID:** ET-A2-0132
**Card ID:** `a2-boden`
**Field/path:** `entry[272].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Haus steht auf festem Grund. = Māja stāv uz stingra pamata.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0133
**Audit ID:** ET-A2-0133
**Card ID:** `a2-borgen`
**Field/path:** `entry[276].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich borge mir Geld. = Es aizņemos naudu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0134
**Audit ID:** ET-A2-0134
**Card ID:** `a2-borgen`
**Field/path:** `entry[276].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Kannst du mir das Buch leihen? = Vai vari man aizdot grāmatu?
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0135
**Audit ID:** ET-A2-0135
**Card ID:** `a2-borgen`
**Field/path:** `entry[276].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich gebe das Buch zurück. = Es atdodu grāmatu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0136
**Audit ID:** ET-A2-0136
**Card ID:** `a2-böse`
**Field/path:** `entry[277].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Bist du böse auf mich? = Vai tu esi dusmīgs uz mani?
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0137
**Audit ID:** ET-A2-0137
**Card ID:** `a2-böse`
**Field/path:** `entry[277].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist zornig. = Viņš ir nikns.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0138
**Audit ID:** ET-A2-0138
**Card ID:** `a2-böse`
**Field/path:** `entry[277].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bin sauer. = Es esmu dusmīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0139
**Audit ID:** ET-A2-0139
**Card ID:** `a2-brav`
**Field/path:** `entry[285].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Kind ist brav. = Bērns ir paklausīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0140
**Audit ID:** ET-A2-0140
**Card ID:** `a2-brav`
**Field/path:** `entry[285].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist ein guter Mensch. = Viņš ir labs cilvēks.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0141
**Audit ID:** ET-A2-0141
**Card ID:** `a2-brav`
**Field/path:** `entry[285].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie ist nett. = Viņa ir jauka.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0142
**Audit ID:** ET-A2-0142
**Card ID:** `a2-brav`
**Field/path:** `entry[285].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Verkäufer ist freundlich. = Pārdevējs ir laipns.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0143
**Audit ID:** ET-A2-0143
**Card ID:** `a2-brav`
**Field/path:** `entry[285].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Kind ist artig. = Bērns ir pieklājīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0144
**Audit ID:** ET-A2-0144
**Card ID:** `a2-brav`
**Field/path:** `entry[285].study.comparison[5].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Hund ist gehorsam. = Suns ir paklausīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0145
**Audit ID:** ET-A2-0145
**Card ID:** `a2-brennen`
**Field/path:** `entry[289].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe mich verbrannt. = Es apdedzinājos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0146
**Audit ID:** ET-A2-0146
**Card ID:** `a2-brennen`
**Field/path:** `entry[289].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Feuerwehr löscht das Feuer. = Ugunsdzēsēji dzēš uguni.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0147
**Audit ID:** ET-A2-0147
**Card ID:** `a2-dabei`
**Field/path:** `entry[315].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe den Schlüssel dabei. = Man ir līdzi atslēga.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0148
**Audit ID:** ET-A2-0148
**Card ID:** `a2-dabei`
**Field/path:** `entry[315].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Bist du morgen mit dabei? = Vai tu rīt arī piedalīsies?
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0149
**Audit ID:** ET-A2-0149
**Card ID:** `a2-dabei`
**Field/path:** `entry[315].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Außerdem ist es teuer. = Turklāt tas ir dārgi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0150
**Audit ID:** ET-A2-0150
**Card ID:** `a2-dabei`
**Field/path:** `entry[315].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Trotzdem komme ich. = Tomēr es nākšu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0151
**Audit ID:** ET-A2-0151
**Card ID:** `a2-dafür`
**Field/path:** `entry[318].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Darum bleibe ich zu Hause. = Tāpēc es palieku mājās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0152
**Audit ID:** ET-A2-0152
**Card ID:** `a2-dafür`
**Field/path:** `entry[318].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Deshalb komme ich später. = Tāpēc es nākšu vēlāk.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0153
**Audit ID:** ET-A2-0153
**Card ID:** `a2-dafür`
**Field/path:** `entry[318].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bin dagegen. = Es esmu pret to.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0154
**Audit ID:** ET-A2-0154
**Card ID:** `a2-dafür`
**Field/path:** `entry[318].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist für das Kind. = Tas ir bērnam.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0155
**Audit ID:** ET-A2-0155
**Card ID:** `a2-damit`
**Field/path:** `entry[321].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne, damit ich bestehe. = Es mācos, lai nokārtotu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0156
**Audit ID:** ET-A2-0156
**Card ID:** `a2-damit`
**Field/path:** `entry[321].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne, um zu bestehen. = Es mācos, lai nokārtotu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0157
**Audit ID:** ET-A2-0157
**Card ID:** `a2-damit`
**Field/path:** `entry[321].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Deshalb bleibe ich hier. = Tāpēc es palieku šeit.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0158
**Audit ID:** ET-A2-0158
**Card ID:** `study-der-dank`
**Field/path:** `entry[323].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Herzlichen Dank! = Sirsnīgs paldies!
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0159
**Audit ID:** ET-A2-0159
**Card ID:** `study-der-dank`
**Field/path:** `entry[323].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Nein, danke. = Nē, paldies.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0160
**Audit ID:** ET-A2-0160
**Card ID:** `study-der-dank`
**Field/path:** `entry[323].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Vielen Dank für die Hilfe! = Liels paldies par palīdzību!
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0161
**Audit ID:** ET-A2-0161
**Card ID:** `study-der-dank`
**Field/path:** `entry[323].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bedanke mich bei Ihnen. = Es pateicos jums.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0162
**Audit ID:** ET-A2-0162
**Card ID:** `a2-darauf`
**Field/path:** `entry[324].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lege es auf das Buch. = Es lieku to uz grāmatas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0163
**Audit ID:** ET-A2-0163
**Card ID:** `a2-darauf`
**Field/path:** `entry[324].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Danach gehe ich nach Hause. = Pēc tam es eju mājās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0164
**Audit ID:** ET-A2-0164
**Card ID:** `a2-darauf`
**Field/path:** `entry[324].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sprechen darüber. = Mēs runājam par to.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0165
**Audit ID:** ET-A2-0165
**Card ID:** `a2-darüber`
**Field/path:** `entry[325].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sprechen darüber. = Mēs runājam par to.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0166
**Audit ID:** ET-A2-0166
**Card ID:** `a2-darüber`
**Field/path:** `entry[325].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sprechen über das Problem. = Mēs runājam par problēmu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0167
**Audit ID:** ET-A2-0167
**Card ID:** `a2-darüber`
**Field/path:** `entry[325].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe davon gehört. = Es par to dzirdēju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0168
**Audit ID:** ET-A2-0168
**Card ID:** `a2-darum`
**Field/path:** `entry[326].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Darum bleibe ich hier. = Tāpēc es palieku šeit.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0169
**Audit ID:** ET-A2-0169
**Card ID:** `a2-darum`
**Field/path:** `entry[326].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Deshalb komme ich später. = Tāpēc es nākšu vēlāk.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0170
**Audit ID:** ET-A2-0170
**Card ID:** `a2-darum`
**Field/path:** `entry[326].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Deswegen bin ich müde. = Tāpēc esmu noguris.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0171
**Audit ID:** ET-A2-0171
**Card ID:** `a2-darum`
**Field/path:** `entry[326].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sitzen um das Feuer. = Mēs sēžam ap uguni.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0172
**Audit ID:** ET-A2-0172
**Card ID:** `a2-davor`
**Field/path:** `entry[329].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe Angst davor. = Man ir bail no tā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0173
**Audit ID:** ET-A2-0173
**Card ID:** `a2-davor`
**Field/path:** `entry[329].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Vor dem Haus steht ein Auto. = Mājas priekšā stāv auto.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0174
**Audit ID:** ET-A2-0174
**Card ID:** `a2-davor`
**Field/path:** `entry[329].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Danach gehen wir. = Pēc tam mēs ejam.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0175
**Audit ID:** ET-A2-0175
**Card ID:** `a2-dazu`
**Field/path:** `entry[330].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich war dabei. = Es biju klāt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0176
**Audit ID:** ET-A2-0176
**Card ID:** `a2-dazu`
**Field/path:** `entry[330].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Außerdem ist es teuer. = Turklāt tas ir dārgi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0177
**Audit ID:** ET-A2-0177
**Card ID:** `a2-decke`
**Field/path:** `entry[331].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Bettdecke ist weich. = Sega ir mīksta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0178
**Audit ID:** ET-A2-0178
**Card ID:** `a2-decke`
**Field/path:** `entry[331].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Bild hängt an der Wand. = Attēls karājas pie sienas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0179
**Audit ID:** ET-A2-0179
**Card ID:** `a2-denn`
**Field/path:** `entry[334].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bleibe, weil es regnet. = Es palieku, jo līst.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0180
**Audit ID:** ET-A2-0180
**Card ID:** `a2-denn`
**Field/path:** `entry[334].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Dann gehen wir. = Tad mēs ejam.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0181
**Audit ID:** ET-A2-0181
**Card ID:** `a2-denn`
**Field/path:** `entry[334].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Deshalb bleibe ich. = Tāpēc es palieku.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0182
**Audit ID:** ET-A2-0182
**Card ID:** `a2-dick`
**Field/path:** `entry[341].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Buch ist dick. = Grāmata ir bieza.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0183
**Audit ID:** ET-A2-0183
**Card ID:** `a2-dick`
**Field/path:** `entry[341].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Essen ist fett. = Ēdiens ir trekns.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0184
**Audit ID:** ET-A2-0184
**Card ID:** `a2-dick`
**Field/path:** `entry[341].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Papier ist dünn. = Papīrs ir plāns.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0185
**Audit ID:** ET-A2-0185
**Card ID:** `a2-dick`
**Field/path:** `entry[341].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist stark. = Viņš ir stiprs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0186
**Audit ID:** ET-A2-0186
**Card ID:** `a2-doch`
**Field/path:** `entry[346].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Komm doch! = Nāc taču!
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0187
**Audit ID:** ET-A2-0187
**Card ID:** `a2-doch`
**Field/path:** `entry[346].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich will, aber ich kann nicht. = Es gribu, bet nevaru.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0188
**Audit ID:** ET-A2-0188
**Card ID:** `a2-doch`
**Field/path:** `entry[346].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Es regnet, trotzdem gehe ich. = Līst, tomēr es eju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0189
**Audit ID:** ET-A2-0189
**Card ID:** `a2-doch`
**Field/path:** `entry[346].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Kommst du? Nein. = Vai tu nāksi? Nē.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0190
**Audit ID:** ET-A2-0190
**Card ID:** `a2-doktor`
**Field/path:** `entry[347].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich gehe zum Doktor. = Es eju pie ārsta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0191
**Audit ID:** ET-A2-0191
**Card ID:** `a2-doktor`
**Field/path:** `entry[347].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Arzt hilft mir. = Ārsts man palīdz.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0192
**Audit ID:** ET-A2-0192
**Card ID:** `a2-doktor`
**Field/path:** `entry[347].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Ärztin arbeitet hier. = Ārste strādā šeit.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0193
**Audit ID:** ET-A2-0193
**Card ID:** `a2-doktor`
**Field/path:** `entry[347].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Praxis ist offen. = Ārsta prakse ir atvērta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0194
**Audit ID:** ET-A2-0194
**Card ID:** `a2-dünn`
**Field/path:** `entry[364].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Papier ist dünn. = Papīrs ir plāns.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0195
**Audit ID:** ET-A2-0195
**Card ID:** `a2-dünn`
**Field/path:** `entry[364].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Buch ist dick. = Grāmata ir bieza.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0196
**Audit ID:** ET-A2-0196
**Card ID:** `a2-dünn`
**Field/path:** `entry[364].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Fleisch ist mager. = Gaļa ir liesa.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0197
**Audit ID:** ET-A2-0197
**Card ID:** `a2-dünn`
**Field/path:** `entry[364].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Honig ist flüssig. = Medus ir šķidrs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0198
**Audit ID:** ET-A2-0198
**Card ID:** `a2-eben`
**Field/path:** `entry[369].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist eben so. = Tā tas vienkārši ir.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0199
**Audit ID:** ET-A2-0199
**Card ID:** `a2-eben`
**Field/path:** `entry[369].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bin gerade zu Hause. = Es tieši tagad esmu mājās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0200
**Audit ID:** ET-A2-0200
**Card ID:** `a2-eben`
**Field/path:** `entry[369].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe ihn gerade eben gesehen. = Es viņu tikko redzēju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0201
**Audit ID:** ET-A2-0201
**Card ID:** `a2-ehrlich`
**Field/path:** `entry[377].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist ehrlich. = Viņš ir godīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0202
**Audit ID:** ET-A2-0202
**Card ID:** `a2-ehrlich`
**Field/path:** `entry[377].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie ist nett. = Viņa ir jauka.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0203
**Audit ID:** ET-A2-0203
**Card ID:** `a2-ehrlich`
**Field/path:** `entry[377].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist ein guter Mensch. = Viņš ir labs cilvēks.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0204
**Audit ID:** ET-A2-0204
**Card ID:** `a2-eigentlich`
**Field/path:** `entry[378].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Eigentlich habe ich keine Zeit. = Patiesībā man nav laika.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0205
**Audit ID:** ET-A2-0205
**Card ID:** `a2-eigentlich`
**Field/path:** `entry[378].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist echt. = Tas ir īsts.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0206
**Audit ID:** ET-A2-0206
**Card ID:** `a2-eigentlich`
**Field/path:** `entry[378].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist wirklich gut. = Tas tiešām ir labi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0207
**Audit ID:** ET-A2-0207
**Card ID:** `a2-einladen`
**Field/path:** `entry[387].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lade das Handy. = Es lādēju telefonu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0208
**Audit ID:** ET-A2-0208
**Card ID:** `a2-einladen`
**Field/path:** `entry[387].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Bring bitte Brot mit. = Paņem līdzi maizi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0209
**Audit ID:** ET-A2-0209
**Card ID:** `a2-einschalten`
**Field/path:** `entry[391].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich schalte das Licht ein. = Es ieslēdzu gaismu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0210
**Audit ID:** ET-A2-0210
**Card ID:** `a2-einschalten`
**Field/path:** `entry[391].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Schalte den Computer aus. = Izslēdz datoru.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0211
**Audit ID:** ET-A2-0211
**Card ID:** `a2-einschalten`
**Field/path:** `entry[391].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Mach das Licht an. = Ieslēdz gaismu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0212
**Audit ID:** ET-A2-0212
**Card ID:** `a2-einschalten`
**Field/path:** `entry[391].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir beziehen ihn ein. = Mēs viņu iesaistām.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0213
**Audit ID:** ET-A2-0213
**Card ID:** `a2-einschlafen`
**Field/path:** `entry[393].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich schlafe acht Stunden. = Es guļu astoņas stundas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0214
**Audit ID:** ET-A2-0214
**Card ID:** `a2-einschlafen`
**Field/path:** `entry[393].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Mein Bein wird taub. = Mana kāja kļūst nejutīga.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0215
**Audit ID:** ET-A2-0215
**Card ID:** `a2-einsteigen`
**Field/path:** `entry[394].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich steige in den Zug ein. = Es iekāpju vilcienā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0216
**Audit ID:** ET-A2-0216
**Card ID:** `a2-einsteigen`
**Field/path:** `entry[394].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich steige hier aus. = Es šeit izkāpju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0217
**Audit ID:** ET-A2-0217
**Card ID:** `a2-einsteigen`
**Field/path:** `entry[394].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir steigen um. = Mēs pārsēžamies.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0218
**Audit ID:** ET-A2-0218
**Card ID:** `a2-eintritt`
**Field/path:** `entry[395].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe eine Eintrittskarte. = Man ir ieejas biļete.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0219
**Audit ID:** ET-A2-0219
**Card ID:** `a2-eintritt`
**Field/path:** `entry[395].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich trete dem Verein bei. = Es iestājos biedrībā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0220
**Audit ID:** ET-A2-0220
**Card ID:** `a2-erinnern`
**Field/path:** `entry[420].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Erinnere mich bitte daran. = Lūdzu, atgādini man to.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0221
**Audit ID:** ET-A2-0221
**Card ID:** `a2-erinnern`
**Field/path:** `entry[420].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Denk an den Schlüssel. = Atceries par atslēgu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0222
**Audit ID:** ET-A2-0222
**Card ID:** `a2-etwa`
**Field/path:** `entry[439].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das dauert etwa 20 Minuten. = Tas ilgst apmēram 20 minūtes.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0223
**Audit ID:** ET-A2-0223
**Card ID:** `a2-etwa`
**Field/path:** `entry[439].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das dauert ungefähr 20 Minuten. = Tas ilgst aptuveni 20 minūtes.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0224
**Audit ID:** ET-A2-0224
**Card ID:** `a2-etwa`
**Field/path:** `entry[439].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Vielleicht kommt er. = Varbūt viņš atnāks.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0225
**Audit ID:** ET-A2-0225
**Card ID:** `a2-fach`
**Field/path:** `entry[444].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Fach ist leer. = Nodalījums ir tukšs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0226
**Audit ID:** ET-A2-0226
**Card ID:** `a2-fach`
**Field/path:** `entry[444].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Biologie ist ein Schulfach. = Bioloģija ir mācību priekšmets.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0227
**Audit ID:** ET-A2-0227
**Card ID:** `a2-fach`
**Field/path:** `entry[444].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Schrankfach ist klein. = Skapja nodalījums ir mazs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0228
**Audit ID:** ET-A2-0228
**Card ID:** `a2-fach`
**Field/path:** `entry[444].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist mein Fachgebiet. = Tā ir mana specialitāte.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0229
**Audit ID:** ET-A2-0229
**Card ID:** `a2-fach`
**Field/path:** `entry[444].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Mein Beruf ist Lehrer. = Mana profesija ir skolotājs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0230
**Audit ID:** ET-A2-0230
**Card ID:** `a2-fall`
**Field/path:** `entry[455].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** In diesem Fall komme ich. = Šajā gadījumā es nākšu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0231
**Audit ID:** ET-A2-0231
**Card ID:** `a2-fall`
**Field/path:** `entry[455].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Unfall war schlimm. = Negadījums bija smags.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0232
**Audit ID:** ET-A2-0232
**Card ID:** `a2-fall`
**Field/path:** `entry[455].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Situation ist schwierig. = Situācija ir grūta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0233
**Audit ID:** ET-A2-0233
**Card ID:** `a2-fall`
**Field/path:** `entry[455].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Kasus ist wichtig. = Locījums ir svarīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0234
**Audit ID:** ET-A2-0234
**Card ID:** `a2-fehlen`
**Field/path:** `entry[467].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Mir fehlt Geld. = Man trūkst naudas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0235
**Audit ID:** ET-A2-0235
**Card ID:** `a2-fehlen`
**Field/path:** `entry[467].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich vermisse dich. = Man tevis pietrūkst.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0236
**Audit ID:** ET-A2-0236
**Card ID:** `a2-fehlen`
**Field/path:** `entry[467].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist abwesend. = Viņš nav klāt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0237
**Audit ID:** ET-A2-0237
**Card ID:** `a2-feuer`
**Field/path:** `entry[484].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Brand ist groß. = Ugunsgrēks ir liels.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0238
**Audit ID:** ET-A2-0238
**Card ID:** `a2-feuer`
**Field/path:** `entry[484].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Feuerwehr kommt. = Ugunsdzēsēji brauc.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0239
**Audit ID:** ET-A2-0239
**Card ID:** `a2-feuer`
**Field/path:** `entry[484].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Soldaten geben Feuer. = Kareivji atklāj uguni.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0240
**Audit ID:** ET-A2-0240
**Card ID:** `a2-folgen`
**Field/path:** `entry[508].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Polizei verfolgt den Täter. = Policija vajā vainīgo.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0241
**Audit ID:** ET-A2-0241
**Card ID:** `a2-folgen`
**Field/path:** `entry[508].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Kind gehorcht. = Bērns klausa.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0242
**Audit ID:** ET-A2-0242
**Card ID:** `a2-folgen`
**Field/path:** `entry[508].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Befolgen Sie die Regeln. = Ievērojiet noteikumus.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0243
**Audit ID:** ET-A2-0243
**Card ID:** `a2-führen`
**Field/path:** `entry[539].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Weg führt zum Bahnhof. = Ceļš ved uz staciju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0244
**Audit ID:** ET-A2-0244
**Card ID:** `a2-führen`
**Field/path:** `entry[539].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie leitet die Firma. = Viņa vada firmu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0245
**Audit ID:** ET-A2-0245
**Card ID:** `a2-führen`
**Field/path:** `entry[539].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich fahre nach Hause. = Es braucu mājās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0246
**Audit ID:** ET-A2-0246
**Card ID:** `a2-führen`
**Field/path:** `entry[539].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bringe dich nach Hause. = Es aizvedīšu tevi mājās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0247
**Audit ID:** ET-A2-0247
**Card ID:** `a2-führen`
**Field/path:** `entry[539].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das führt zu Problemen. = Tas noved pie problēmām.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0248
**Audit ID:** ET-A2-0248
**Card ID:** `a2-gehören`
**Field/path:** `entry[572].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er besitzt ein Auto. = Viņam pieder auto.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0249
**Audit ID:** ET-A2-0249
**Card ID:** `a2-genau`
**Field/path:** `entry[576].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist exakt ein Meter. = Tas ir precīzi viens metrs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0250
**Audit ID:** ET-A2-0250
**Card ID:** `a2-genau`
**Field/path:** `entry[576].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bin gerade zu Hause. = Es tieši tagad esmu mājās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0251
**Audit ID:** ET-A2-0251
**Card ID:** `a2-genau`
**Field/path:** `entry[576].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er war eben hier. = Viņš tikko bija šeit.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0252
**Audit ID:** ET-A2-0252
**Card ID:** `a2-gerade`
**Field/path:** `entry[580].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich komme gerade. = Es tieši tagad nāku.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0253
**Audit ID:** ET-A2-0253
**Card ID:** `a2-geschäft`
**Field/path:** `entry[582].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Unternehmen wächst. = Uzņēmums aug.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0254
**Audit ID:** ET-A2-0254
**Card ID:** `a2-geschäft`
**Field/path:** `entry[582].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir schließen einen Vertrag. = Mēs slēdzam līgumu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0255
**Audit ID:** ET-A2-0255
**Card ID:** `a2-gewinnen`
**Field/path:** `entry[592].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir gewinnen das Spiel. = Mēs uzvaram spēlē.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0256
**Audit ID:** ET-A2-0256
**Card ID:** `a2-gewinnen`
**Field/path:** `entry[592].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bekomme eine Nachricht. = Es saņemu ziņu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0257
**Audit ID:** ET-A2-0257
**Card ID:** `a2-gewinnen`
**Field/path:** `entry[592].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er verdient Geld. = Viņš pelna naudu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0258
**Audit ID:** ET-A2-0258
**Card ID:** `a2-gießen`
**Field/path:** `entry[595].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich gieße die Blumen. = Es laistu puķes.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0259
**Audit ID:** ET-A2-0259
**Card ID:** `a2-gießen`
**Field/path:** `entry[595].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich schenke Tee ein. = Es ieleju tēju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0260
**Audit ID:** ET-A2-0260
**Card ID:** `a2-gießen`
**Field/path:** `entry[595].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Es regnet. = Līst.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0261
**Audit ID:** ET-A2-0261
**Card ID:** `a2-gießen`
**Field/path:** `entry[595].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er schüttet Wasser aus. = Viņš izlej ūdeni.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0262
**Audit ID:** ET-A2-0262
**Card ID:** `a2-grund`
**Field/path:** `entry[607].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Aus diesem Grund komme ich nicht. = Šī iemesla dēļ es nenākšu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0263
**Audit ID:** ET-A2-0263
**Card ID:** `a2-grund`
**Field/path:** `entry[607].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Ursache ist unbekannt. = Cēlonis nav zināms.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0264
**Audit ID:** ET-A2-0264
**Card ID:** `a2-grund`
**Field/path:** `entry[607].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Anlass war ein Fest. = Iemesls bija svētki.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0265
**Audit ID:** ET-A2-0265
**Card ID:** `a2-grund`
**Field/path:** `entry[607].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Boden ist nass. = Grīda ir slapja.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0266
**Audit ID:** ET-A2-0266
**Card ID:** `a2-hängen`
**Field/path:** `entry[632].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Bild hängt an der Wand. = Attēls karājas pie sienas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0267
**Audit ID:** ET-A2-0267
**Card ID:** `a2-hängen`
**Field/path:** `entry[632].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lege das Buch auf den Tisch. = Es nolieku grāmatu uz galda.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0268
**Audit ID:** ET-A2-0268
**Card ID:** `a2-hängen`
**Field/path:** `entry[632].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir hängen das Bild an die Wand. = Mēs piekaram attēlu pie sienas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0269
**Audit ID:** ET-A2-0269
**Card ID:** `a2-indem`
**Field/path:** `entry[703].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne, indem ich übe. = Es mācos, trenējoties.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0270
**Audit ID:** ET-A2-0270
**Card ID:** `a2-indem`
**Field/path:** `entry[703].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Während ich koche, höre ich Musik. = Kamēr es gatavoju, klausos mūziku.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0271
**Audit ID:** ET-A2-0271
**Card ID:** `a2-indem`
**Field/path:** `entry[703].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne, damit ich die Prüfung bestehe. = Es mācos, lai nokārtotu eksāmenu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0272
**Audit ID:** ET-A2-0272
**Card ID:** `a2-indem`
**Field/path:** `entry[703].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne, weil ich Deutsch brauche. = Es mācos, jo man vajag vācu valodu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0273
**Audit ID:** ET-A2-0273
**Card ID:** `a2-kaum`
**Field/path:** `entry[783].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe kaum Zeit. = Man gandrīz nav laika.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0274
**Audit ID:** ET-A2-0274
**Card ID:** `a2-kaum`
**Field/path:** `entry[783].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bin fast fertig. = Es gandrīz esmu gatavs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0275
**Audit ID:** ET-A2-0275
**Card ID:** `a2-kaum`
**Field/path:** `entry[783].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sobald ich Zeit habe, rufe ich dich an. = Tiklīdz man būs laiks, es tev piezvanīšu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0276
**Audit ID:** ET-A2-0276
**Card ID:** `a2-kleiden`
**Field/path:** `entry[810].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie kleidet das Kind. = Viņa apģērbj bērnu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0277
**Audit ID:** ET-A2-0277
**Card ID:** `a2-kleiden`
**Field/path:** `entry[810].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er kleidet sich elegant. = Viņš ģērbjas eleganti.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0278
**Audit ID:** ET-A2-0278
**Card ID:** `a2-kleiden`
**Field/path:** `entry[810].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Farbe kleidet dich. = Krāsa tev piestāv.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0279
**Audit ID:** ET-A2-0279
**Card ID:** `a2-kleiden`
**Field/path:** `entry[810].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie trägt ein Kleid. = Viņa valkā kleitu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0280
**Audit ID:** ET-A2-0280
**Card ID:** `a2-kurz`
**Field/path:** `entry[855].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Text ist kurz. = Teksts ir īss.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0281
**Audit ID:** ET-A2-0281
**Card ID:** `a2-kurz`
**Field/path:** `entry[855].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** kurz vor acht = īsi pirms astoņiem
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0282
**Audit ID:** ET-A2-0282
**Card ID:** `a2-kurz`
**Field/path:** `entry[855].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** kurz nach dem Essen = īsi pēc ēšanas
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0283
**Audit ID:** ET-A2-0283
**Card ID:** `a2-kurz`
**Field/path:** `entry[855].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich komme bald. = Es drīz nākšu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0284
**Audit ID:** ET-A2-0284
**Card ID:** `a2-kurz`
**Field/path:** `entry[855].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Weg ist lang. = Ceļš ir garš.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0285
**Audit ID:** ET-A2-0285
**Card ID:** `a2-lage`
**Field/path:** `entry[857].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Lage ist schwierig. = Situācija ir sarežģīta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0286
**Audit ID:** ET-A2-0286
**Card ID:** `a2-lage`
**Field/path:** `entry[857].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Situation ist ernst. = Situācija ir nopietna.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0287
**Audit ID:** ET-A2-0287
**Card ID:** `a2-lage`
**Field/path:** `entry[857].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Standort ist gut. = Atrašanās vieta ir laba.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0288
**Audit ID:** ET-A2-0288
**Card ID:** `a2-lage`
**Field/path:** `entry[857].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** eine Schicht Farbe = viena krāsas kārta
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0289
**Audit ID:** ET-A2-0289
**Card ID:** `a2-leiden`
**Field/path:** `entry[877].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er leidet an Kopfschmerzen. = Viņš cieš no galvassāpēm.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0290
**Audit ID:** ET-A2-0290
**Card ID:** `a2-leiden`
**Field/path:** `entry[877].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie leidet an Asthma. = Viņa slimo ar astmu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0291
**Audit ID:** ET-A2-0291
**Card ID:** `a2-leiden`
**Field/path:** `entry[877].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir leiden unter der Hitze. = Mēs ciešam no karstuma.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0292
**Audit ID:** ET-A2-0292
**Card ID:** `a2-leiden`
**Field/path:** `entry[877].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist krank. = Viņš ir slims.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0293
**Audit ID:** ET-A2-0293
**Card ID:** `a2-leihen`
**Field/path:** `entry[878].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich borge mir Geld. = Es aizņemos naudu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0294
**Audit ID:** ET-A2-0294
**Card ID:** `a2-leihen`
**Field/path:** `entry[878].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir mieten ein Auto. = Mēs īrējam mašīnu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0295
**Audit ID:** ET-A2-0295
**Card ID:** `a2-leihen`
**Field/path:** `entry[878].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich kaufe das Buch. = Es pērku grāmatu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0296
**Audit ID:** ET-A2-0296
**Card ID:** `a2-leiter`
**Field/path:** `entry[880].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Leiter der Firma. = Uzņēmuma vadītājs. Plural: die Leiter.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0297
**Audit ID:** ET-A2-0297
**Card ID:** `a2-leiter`
**Field/path:** `entry[880].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich steige auf die Leiter. = Es kāpju uz kāpnēm. Plural: die Leitern.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0298
**Audit ID:** ET-A2-0298
**Card ID:** `a2-leitung`
**Field/path:** `entry[881].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Leitung ist kaputt. = Līnija ir bojāta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0299
**Audit ID:** ET-A2-0299
**Card ID:** `a2-leitung`
**Field/path:** `entry[881].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Unter ihrer Führung läuft alles gut. = Viņas vadībā viss norit labi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0300
**Audit ID:** ET-A2-0300
**Card ID:** `a2-leitung`
**Field/path:** `entry[881].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Kabel ist zu kurz. = Kabelis ir par īsu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0301
**Audit ID:** ET-A2-0301
**Card ID:** `a2-leitung`
**Field/path:** `entry[881].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Telefonleitung ist frei. = Telefona līnija ir brīva.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0302
**Audit ID:** ET-A2-0302
**Card ID:** `a2-leitung`
**Field/path:** `entry[881].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Wasserleitung tropft. = Ūdens caurule pil.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0303
**Audit ID:** ET-A2-0303
**Card ID:** `a2-merken`
**Field/path:** `entry[936].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich merke den Fehler. = Es pamanu kļūdu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0304
**Audit ID:** ET-A2-0304
**Card ID:** `a2-merken`
**Field/path:** `entry[936].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Merk dir das! = Iegaumē to!
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0305
**Audit ID:** ET-A2-0305
**Card ID:** `a2-merken`
**Field/path:** `entry[936].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bemerke den Fehler. = Es pamanu kļūdu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0306
**Audit ID:** ET-A2-0306
**Card ID:** `a2-merken`
**Field/path:** `entry[936].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich behalte die Nummer. = Es paturu numuru prātā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0307
**Audit ID:** ET-A2-0307
**Card ID:** `a2-mittel`
**Field/path:** `entry[951].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** ein Mittel gegen Husten = līdzeklis pret klepu
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0308
**Audit ID:** ET-A2-0308
**Card ID:** `a2-mittel`
**Field/path:** `entry[951].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Medikament hilft. = Medikaments palīdz.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0309
**Audit ID:** ET-A2-0309
**Card ID:** `a2-mittel`
**Field/path:** `entry[951].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Diese Methode ist einfach. = Šī metode ir vienkārša.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0310
**Audit ID:** ET-A2-0310
**Card ID:** `a2-mittel`
**Field/path:** `entry[951].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** finanzielle Mittel = finanšu līdzekļi
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0311
**Audit ID:** ET-A2-0311
**Card ID:** `a2-note`
**Field/path:** `entry[1019].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bekomme eine Note. = Es saņemu atzīmi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0312
**Audit ID:** ET-A2-0312
**Card ID:** `a2-note`
**Field/path:** `entry[1019].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Schulnote ist gut. = Skolas atzīme ir laba.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0313
**Audit ID:** ET-A2-0313
**Card ID:** `a2-note`
**Field/path:** `entry[1019].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Musiknote ist hoch. = Mūzikas nots ir augsta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0314
**Audit ID:** ET-A2-0314
**Card ID:** `a2-nutzen`
**Field/path:** `entry[1029].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir verwenden dieses Wort. = Mēs izmantojam šo vārdu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0315
**Audit ID:** ET-A2-0315
**Card ID:** `a2-nutzen`
**Field/path:** `entry[1029].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Nutze die Chance! = Izmanto iespēju!
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0316
**Audit ID:** ET-A2-0316
**Card ID:** `a2-offen`
**Field/path:** `entry[1037].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Tür ist offen. = Durvis ir vaļā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0317
**Audit ID:** ET-A2-0317
**Card ID:** `a2-offen`
**Field/path:** `entry[1037].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Museum ist geöffnet. = Muzejs ir atvērts.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0318
**Audit ID:** ET-A2-0318
**Card ID:** `a2-offen`
**Field/path:** `entry[1037].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er ist ehrlich. = Viņš ir godīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0319
**Audit ID:** ET-A2-0319
**Card ID:** `a2-offen`
**Field/path:** `entry[1037].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Platz ist frei. = Vieta ir brīva.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0320
**Audit ID:** ET-A2-0320
**Card ID:** `a2-patient`
**Field/path:** `entry[1064].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Patientin ruht sich aus. = Paciente atpūšas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0321
**Audit ID:** ET-A2-0321
**Card ID:** `a2-patient`
**Field/path:** `entry[1064].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Kranke liegt im Bett. = Slimnieks guļ gultā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0322
**Audit ID:** ET-A2-0322
**Card ID:** `a2-personal`
**Field/path:** `entry[1068].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Personal hilft. = Personāls palīdz.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0323
**Audit ID:** ET-A2-0323
**Card ID:** `a2-personal`
**Field/path:** `entry[1068].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Mitarbeiter arbeitet hier. = Darbinieks šeit strādā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0324
**Audit ID:** ET-A2-0324
**Card ID:** `a2-personal`
**Field/path:** `entry[1068].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist persönlich. = Tas ir personīgi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0325
**Audit ID:** ET-A2-0325
**Card ID:** `a2-riechen`
**Field/path:** `entry[1165].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Es riecht nach Kaffee. = Smaržo pēc kafijas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0326
**Audit ID:** ET-A2-0326
**Card ID:** `a2-rolle`
**Field/path:** `entry[1172].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sie spielt eine Rolle. = Viņa spēlē lomu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0327
**Audit ID:** ET-A2-0327
**Card ID:** `a2-rolle`
**Field/path:** `entry[1172].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er hat die Hauptrolle. = Viņam ir galvenā loma.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0328
**Audit ID:** ET-A2-0328
**Card ID:** `a2-rolle`
**Field/path:** `entry[1172].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich kaufe eine Papierrolle. = Es pērku papīra rulli.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0329
**Audit ID:** ET-A2-0329
**Card ID:** `a2-rolle`
**Field/path:** `entry[1172].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das hat keine Bedeutung. = Tam nav nozīmes.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0330
**Audit ID:** ET-A2-0330
**Card ID:** `a2-rolle`
**Field/path:** `entry[1172].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist ein Teil der Arbeit. = Tā ir daļa no darba.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0331
**Audit ID:** ET-A2-0331
**Card ID:** `a2-sammeln`
**Field/path:** `entry[1190].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Briefmarken sammeln = krāt pastmarkas
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0332
**Audit ID:** ET-A2-0332
**Card ID:** `a2-sammeln`
**Field/path:** `entry[1190].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Schüler sammeln sich. = Skolēni sapulcējas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0333
**Audit ID:** ET-A2-0333
**Card ID:** `a2-sammeln`
**Field/path:** `entry[1190].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich hole Wasser. = Es atnesu ūdeni.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0334
**Audit ID:** ET-A2-0334
**Card ID:** `a2-sammeln`
**Field/path:** `entry[1190].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich hebe den Zettel auf. = Es paceļu zīmīti.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0335
**Audit ID:** ET-A2-0335
**Card ID:** `a2-satz`
**Field/path:** `entry[1194].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Satz ist kurz. = Teikums ir īss.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0336
**Audit ID:** ET-A2-0336
**Card ID:** `a2-satz`
**Field/path:** `entry[1194].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der deutsche Satz ist richtig. = Vācu teikums ir pareizs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0337
**Audit ID:** ET-A2-0337
**Card ID:** `a2-satz`
**Field/path:** `entry[1194].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ein Satz Reifen ist teuer. = Riepu komplekts ir dārgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0338
**Audit ID:** ET-A2-0338
**Card ID:** `a2-satz`
**Field/path:** `entry[1194].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Kaffeesatz bleibt im Glas. = Kafijas biezumi paliek glāzē.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0339
**Audit ID:** ET-A2-0339
**Card ID:** `a2-scheinen`
**Field/path:** `entry[1217].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Sonne scheint. = Saule spīd.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0340
**Audit ID:** ET-A2-0340
**Card ID:** `a2-scheinen`
**Field/path:** `entry[1217].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er wirkt ruhig. = Viņš šķiet mierīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0341
**Audit ID:** ET-A2-0341
**Card ID:** `a2-scheinen`
**Field/path:** `entry[1217].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Lampe leuchtet. = Lampa spīd.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0342
**Audit ID:** ET-A2-0342
**Card ID:** `a2-schlange`
**Field/path:** `entry[1229].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Warteschlange ist lang. = Gaidīšanas rinda ir gara.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0343
**Audit ID:** ET-A2-0343
**Card ID:** `a2-schlange`
**Field/path:** `entry[1229].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Stühle stehen in einer Reihe. = Krēsli stāv rindā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0344
**Audit ID:** ET-A2-0344
**Card ID:** `a2-schlange`
**Field/path:** `entry[1229].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Eine Schlange ist ein Reptil. = Čūska ir rāpulis.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0345
**Audit ID:** ET-A2-0345
**Card ID:** `a2-schließen`
**Field/path:** `entry[1230].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich schließe die Tür ab. = Es aizslēdzu durvis.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0346
**Audit ID:** ET-A2-0346
**Card ID:** `a2-schließen`
**Field/path:** `entry[1230].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Daraus folgere ich etwas. = No tā es kaut ko secinu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0347
**Audit ID:** ET-A2-0347
**Card ID:** `a2-schloss`
**Field/path:** `entry[1236].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Burg steht auf dem Berg. = Pils stāv kalnā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0348
**Audit ID:** ET-A2-0348
**Card ID:** `a2-schloss`
**Field/path:** `entry[1236].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Türschloss ist kaputt. = Durvju slēdzene ir salūzusi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0349
**Audit ID:** ET-A2-0349
**Card ID:** `a2-schloss`
**Field/path:** `entry[1236].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich kaufe ein Fahrradschloss. = Es pērku velosipēda slēdzeni.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0350
**Audit ID:** ET-A2-0350
**Card ID:** `a2-schloss`
**Field/path:** `entry[1236].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Schlüssel ist weg. = Atslēga ir pazudusi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0351
**Audit ID:** ET-A2-0351
**Card ID:** `a2-schuld`
**Field/path:** `entry[1256].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist meine Schuld. = Tā ir mana vaina.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0352
**Audit ID:** ET-A2-0352
**Card ID:** `a2-schuld`
**Field/path:** `entry[1256].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er hat Schulden. = Viņam ir parādi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0353
**Audit ID:** ET-A2-0353
**Card ID:** `a2-schuld`
**Field/path:** `entry[1256].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich trage Verantwortung. = Es nesu atbildību.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0354
**Audit ID:** ET-A2-0354
**Card ID:** `a2-schuld`
**Field/path:** `entry[1256].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das war ein Fehler. = Tā bija kļūda.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0355
**Audit ID:** ET-A2-0355
**Card ID:** `a2-schuld`
**Field/path:** `entry[1256].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bin schuld. = Es esmu vainīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0356
**Audit ID:** ET-A2-0356
**Card ID:** `a2-sich-befinden`
**Field/path:** `entry[1291].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Büro befindet sich im zweiten Stock. = Birojs atrodas otrajā stāvā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0357
**Audit ID:** ET-A2-0357
**Card ID:** `a2-sich-befinden`
**Field/path:** `entry[1291].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Büro ist oben. = Birojs ir augšā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0358
**Audit ID:** ET-A2-0358
**Card ID:** `a2-sich-befinden`
**Field/path:** `entry[1291].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Buch liegt auf dem Tisch. = Grāmata atrodas uz galda.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0359
**Audit ID:** ET-A2-0359
**Card ID:** `a2-sich-befinden`
**Field/path:** `entry[1291].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Auto steht vor dem Haus. = Auto stāv pie mājas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0360
**Audit ID:** ET-A2-0360
**Card ID:** `a2-sich-befinden`
**Field/path:** `entry[1291].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich fühle mich gut. = Es jūtos labi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0361
**Audit ID:** ET-A2-0361
**Card ID:** `a2-sich-unterhalten`
**Field/path:** `entry[1305].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir unterhalten uns. = Mēs sarunājamies.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0362
**Audit ID:** ET-A2-0362
**Card ID:** `a2-sich-unterhalten`
**Field/path:** `entry[1305].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich spreche Deutsch. = Es runāju vāciski.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0363
**Audit ID:** ET-A2-0363
**Card ID:** `a2-sich-unterhalten`
**Field/path:** `entry[1305].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir reden viel. = Mēs daudz runājam.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0364
**Audit ID:** ET-A2-0364
**Card ID:** `a2-sich-unterhalten`
**Field/path:** `entry[1305].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir amüsieren uns. = Mēs izklaidējamies.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0365
**Audit ID:** ET-A2-0365
**Card ID:** `a2-sobald`
**Field/path:** `entry[1325].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sobald er kommt, gehen wir. = Tiklīdz viņš atnāks, mēs iesim.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0366
**Audit ID:** ET-A2-0366
**Card ID:** `a2-sobald`
**Field/path:** `entry[1325].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wenn ich Zeit habe, komme ich. = Ja man būs laiks, es nākšu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0367
**Audit ID:** ET-A2-0367
**Card ID:** `a2-sobald`
**Field/path:** `entry[1325].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Als ich Kind war, spielte ich viel. = Kad biju bērns, daudz spēlējos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0368
**Audit ID:** ET-A2-0368
**Card ID:** `a2-sobald`
**Field/path:** `entry[1325].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich warte, bis du kommst. = Es gaidu, līdz tu atnāksi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0369
**Audit ID:** ET-A2-0369
**Card ID:** `a2-sobald`
**Field/path:** `entry[1325].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Nachdem ich gegessen habe, gehe ich. = Pēc tam kad paēdu, es eju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0370
**Audit ID:** ET-A2-0370
**Card ID:** `a2-sonst`
**Field/path:** `entry[1336].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Komm jetzt, sonst ist es zu spät. = Nāc tagad, citādi būs par vēlu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0371
**Audit ID:** ET-A2-0371
**Card ID:** `a2-sonst`
**Field/path:** `entry[1336].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ansonsten ist alles gut. = Citādi viss ir labi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0372
**Audit ID:** ET-A2-0372
**Card ID:** `a2-sonst`
**Field/path:** `entry[1336].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Andernfalls rufe ich an. = Pretējā gadījumā es zvanīšu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0373
**Audit ID:** ET-A2-0373
**Card ID:** `a2-sonst`
**Field/path:** `entry[1336].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Normalerweise bin ich zu Hause. = Parasti es esmu mājās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0374
**Audit ID:** ET-A2-0374
**Card ID:** `a2-sonst`
**Field/path:** `entry[1336].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Außerdem ist es teuer. = Turklāt tas ir dārgi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0375
**Audit ID:** ET-A2-0375
**Card ID:** `a2-steigen`
**Field/path:** `entry[1378].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Preise steigen. = Cenas ceļas.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0376
**Audit ID:** ET-A2-0376
**Card ID:** `a2-steigen`
**Field/path:** `entry[1378].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich steige in den Bus ein. = Es iekāpju autobusā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0377
**Audit ID:** ET-A2-0377
**Card ID:** `a2-steigen`
**Field/path:** `entry[1378].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich steige aus. = Es izkāpju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0378
**Audit ID:** ET-A2-0378
**Card ID:** `a2-steigen`
**Field/path:** `entry[1378].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich stehe um sieben auf. = Es pieceļos septiņos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0379
**Audit ID:** ET-A2-0379
**Card ID:** `a2-steigen`
**Field/path:** `entry[1378].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Kind klettert auf den Baum. = Bērns rāpjas kokā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0380
**Audit ID:** ET-A2-0380
**Card ID:** `a2-stelle`
**Field/path:** `entry[1380].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich suche eine Stelle. = Es meklēju darba vietu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0381
**Audit ID:** ET-A2-0381
**Card ID:** `a2-stelle`
**Field/path:** `entry[1380].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Diese Textstelle ist wichtig. = Šis teksta fragments ir svarīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0382
**Audit ID:** ET-A2-0382
**Card ID:** `a2-stelle`
**Field/path:** `entry[1380].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Wunde tut weh. = Brūce sāp.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0383
**Audit ID:** ET-A2-0383
**Card ID:** `a2-stimmen`
**Field/path:** `entry[1388].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das stimmt. = Tā ir / tas ir pareizi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0384
**Audit ID:** ET-A2-0384
**Card ID:** `a2-stimmen`
**Field/path:** `entry[1388].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich stimme dir zu. = Es tev piekrītu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0385
**Audit ID:** ET-A2-0385
**Card ID:** `a2-stimmen`
**Field/path:** `entry[1388].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir stimmen darüber ab. = Mēs par to balsojam.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0386
**Audit ID:** ET-A2-0386
**Card ID:** `a2-stimmen`
**Field/path:** `entry[1388].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir wählen den Präsidenten. = Mēs vēlējam prezidentu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0387
**Audit ID:** ET-A2-0387
**Card ID:** `a2-stimmen`
**Field/path:** `entry[1388].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Farbe passt. = Krāsa piestāv.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0388
**Audit ID:** ET-A2-0388
**Card ID:** `a2-stoff`
**Field/path:** `entry[1392].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Stoff ist weich. = Audums ir mīksts.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0389
**Audit ID:** ET-A2-0389
**Card ID:** `a2-stoff`
**Field/path:** `entry[1392].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Material ist stabil. = Materiāls ir izturīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0390
**Audit ID:** ET-A2-0390
**Card ID:** `a2-stoff`
**Field/path:** `entry[1392].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Substanz ist gefährlich. = Viela ir bīstama.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0391
**Audit ID:** ET-A2-0391
**Card ID:** `a2-stoff`
**Field/path:** `entry[1392].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Unterrichtsstoff ist schwer. = Mācību viela ir grūta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0392
**Audit ID:** ET-A2-0392
**Card ID:** `a2-tafel`
**Field/path:** `entry[1416].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Lehrer schreibt an die Tafel. = Skolotājs raksta uz tāfeles.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0393
**Audit ID:** ET-A2-0393
**Card ID:** `a2-tafel`
**Field/path:** `entry[1416].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Tabelle steht im Buch. = Tabula ir grāmatā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0394
**Audit ID:** ET-A2-0394
**Card ID:** `a2-tafel`
**Field/path:** `entry[1416].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Speisekarte liegt auf dem Tisch. = Ēdienkarte ir uz galda.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0395
**Audit ID:** ET-A2-0395
**Card ID:** `a2-tafel`
**Field/path:** `entry[1416].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Schild ist rot. = Zīme ir sarkana.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0396
**Audit ID:** ET-A2-0396
**Card ID:** `a2-tafel`
**Field/path:** `entry[1416].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Eine Tafel Schokolade = šokolādes tāfelīte.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0397
**Audit ID:** ET-A2-0397
**Card ID:** `a2-teil`
**Field/path:** `entry[1431].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ein Teil fehlt. = Trūkst viena daļa.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0398
**Audit ID:** ET-A2-0398
**Card ID:** `a2-teil`
**Field/path:** `entry[1431].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der erste Teil ist leicht. = Pirmā daļa ir viegla.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0399
**Audit ID:** ET-A2-0399
**Card ID:** `a2-teil`
**Field/path:** `entry[1431].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Ersatzteil ist teuer. = Rezerves detaļa ir dārga.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0400
**Audit ID:** ET-A2-0400
**Card ID:** `a2-teil`
**Field/path:** `entry[1431].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich nehme ein Stück Kuchen. = Es ņemu kūkas gabalu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0401
**Audit ID:** ET-A2-0401
**Card ID:** `a2-teil`
**Field/path:** `entry[1431].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist eine gute Sache. = Tā ir laba lieta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0402
**Audit ID:** ET-A2-0402
**Card ID:** `a2-termin`
**Field/path:** `entry[1438].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe einen Termin. = Man ir pieraksts / norunāts laiks.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0403
**Audit ID:** ET-A2-0403
**Card ID:** `a2-termin`
**Field/path:** `entry[1438].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Treffen war nett. = Tikšanās bija jauka.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0404
**Audit ID:** ET-A2-0404
**Card ID:** `a2-termin`
**Field/path:** `entry[1438].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Frist endet morgen. = Termiņš beidzas rīt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0405
**Audit ID:** ET-A2-0405
**Card ID:** `a2-termin`
**Field/path:** `entry[1438].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe eine Verabredung. = Man ir sarunāta tikšanās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0406
**Audit ID:** ET-A2-0406
**Card ID:** `a2-termin`
**Field/path:** `entry[1438].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Zeitpunkt ist wichtig. = Laika punkts ir svarīgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0407
**Audit ID:** ET-A2-0407
**Card ID:** `a2-tief`
**Field/path:** `entry[1443].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der See ist tief. = Ezers ir dziļš.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0408
**Audit ID:** ET-A2-0408
**Card ID:** `a2-tief`
**Field/path:** `entry[1443].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Wasser ist flach. = Ūdens ir sekls.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0409
**Audit ID:** ET-A2-0409
**Card ID:** `a2-tragen`
**Field/path:** `entry[1458].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bringe dir das Buch. = Es tev atnesu grāmatu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0410
**Audit ID:** ET-A2-0410
**Card ID:** `a2-tragen`
**Field/path:** `entry[1458].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich halte das Kind. = Es turu bērnu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0411
**Audit ID:** ET-A2-0411
**Card ID:** `a2-treffen`
**Field/path:** `entry[1469].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Eine Entscheidung treffen = pieņemt lēmumu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0412
**Audit ID:** ET-A2-0412
**Card ID:** `a2-treffen`
**Field/path:** `entry[1469].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir treffen uns. = Mēs tiekamies.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0413
**Audit ID:** ET-A2-0413
**Card ID:** `a2-treffen`
**Field/path:** `entry[1469].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne ihn kennen. = Es ar viņu iepazīstos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0414
**Audit ID:** ET-A2-0414
**Card ID:** `a2-treffen`
**Field/path:** `entry[1469].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich erreiche dich nicht. = Es nevaru tevi sazvanīt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0415
**Audit ID:** ET-A2-0415
**Card ID:** `a2-übrig`
**Field/path:** `entry[1488].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Viel Essen bleibt übrig. = Daudz ēdiena paliek pāri.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0416
**Audit ID:** ET-A2-0416
**Card ID:** `a2-übrig`
**Field/path:** `entry[1488].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Rest ist für morgen. = Atlikums ir rītdienai.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0417
**Audit ID:** ET-A2-0417
**Card ID:** `a2-übrig`
**Field/path:** `entry[1488].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die übrigen Gäste kommen später. = Pārējie viesi ieradīsies vēlāk.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0418
**Audit ID:** ET-A2-0418
**Card ID:** `a2-übrig`
**Field/path:** `entry[1488].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist unnötig. = Tas ir nevajadzīgi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0419
**Audit ID:** ET-A2-0419
**Card ID:** `a2-übung`
**Field/path:** `entry[1489].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Diese Übung ist leicht. = Šis vingrinājums ir viegls.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0420
**Audit ID:** ET-A2-0420
**Card ID:** `a2-übung`
**Field/path:** `entry[1489].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Training beginnt um sechs. = Treniņš sākas sešos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0421
**Audit ID:** ET-A2-0421
**Card ID:** `a2-übung`
**Field/path:** `entry[1489].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Aufgabe ist schwer. = Uzdevums ir grūts.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0422
**Audit ID:** ET-A2-0422
**Card ID:** `a2-übung`
**Field/path:** `entry[1489].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** In der Praxis ist es anders. = Praksē tas ir citādi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0423
**Audit ID:** ET-A2-0423
**Card ID:** `a2-umsonst`
**Field/path:** `entry[1492].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich warte umsonst. = Es gaidu veltīgi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0424
**Audit ID:** ET-A2-0424
**Card ID:** `a2-umsonst`
**Field/path:** `entry[1492].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist gratis. = Tas ir par brīvu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0425
**Audit ID:** ET-A2-0425
**Card ID:** `a2-umsonst`
**Field/path:** `entry[1492].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich suche vergeblich. = Es meklēju veltīgi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0426
**Audit ID:** ET-A2-0426
**Card ID:** `a2-verbinden`
**Field/path:** `entry[1511].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das verbindet sich mit Erinnerungen. = Tas saistās ar atmiņām.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0427
**Audit ID:** ET-A2-0427
**Card ID:** `a2-verbinden`
**Field/path:** `entry[1511].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich schließe den Drucker an. = Es pieslēdzu printeri.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0428
**Audit ID:** ET-A2-0428
**Card ID:** `a2-verbinden`
**Field/path:** `entry[1511].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Arzt verbindet die Wunde. = Ārsts pārsien brūci.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0429
**Audit ID:** ET-A2-0429
**Card ID:** `a2-verkehr`
**Field/path:** `entry[1517].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Verkehr ist stark. = Satiksme ir intensīva.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0430
**Audit ID:** ET-A2-0430
**Card ID:** `a2-verkehr`
**Field/path:** `entry[1517].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Straßenverkehr ist gefährlich. = Ceļu satiksme ir bīstama.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0431
**Audit ID:** ET-A2-0431
**Card ID:** `a2-verkehr`
**Field/path:** `entry[1517].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Öffentlicher Verkehr ist praktisch. = Sabiedriskā satiksme ir praktiska.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0432
**Audit ID:** ET-A2-0432
**Card ID:** `a2-verkehr`
**Field/path:** `entry[1517].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Bewegung ist gesund. = Kustība ir veselīga.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0433
**Audit ID:** ET-A2-0433
**Card ID:** `a2-viertel`
**Field/path:** `entry[1529].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ein Viertel ist genug. = Ceturtdaļa ir pietiekami.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0434
**Audit ID:** ET-A2-0434
**Card ID:** `a2-viertel`
**Field/path:** `entry[1529].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ein Drittel bleibt. = Trešdaļa paliek.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0435
**Audit ID:** ET-A2-0435
**Card ID:** `a2-viertel`
**Field/path:** `entry[1529].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Quartier ist ruhig. = Kvartāls ir kluss.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0436
**Audit ID:** ET-A2-0436
**Card ID:** `a2-vorstellen`
**Field/path:** `entry[1544].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich stelle dir meinen Freund vor. = Es tevi iepazīstinu ar draugu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0437
**Audit ID:** ET-A2-0437
**Card ID:** `a2-vorstellen`
**Field/path:** `entry[1544].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich stelle mich vor. = Es stādos priekšā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0438
**Audit ID:** ET-A2-0438
**Card ID:** `a2-vorstellen`
**Field/path:** `entry[1544].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich denke an dich. = Es domāju par tevi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0439
**Audit ID:** ET-A2-0439
**Card ID:** `a2-vorstellen`
**Field/path:** `entry[1544].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Was meinst du? = Ko tu domā?
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0440
**Audit ID:** ET-A2-0440
**Card ID:** `a2-vorstellen`
**Field/path:** `entry[1544].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich präsentiere den Plan. = Es prezentēju plānu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0441
**Audit ID:** ET-A2-0441
**Card ID:** `a2-wagen`
**Field/path:** `entry[1550].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Wagen ist neu. = Automašīna ir jauna.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0442
**Audit ID:** ET-A2-0442
**Card ID:** `a2-wagen`
**Field/path:** `entry[1550].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Auto steht da. = Automašīna stāv tur.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0443
**Audit ID:** ET-A2-0443
**Card ID:** `a2-wählen`
**Field/path:** `entry[1551].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich wähle eine Nummer. = Es sastādu numuru.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0444
**Audit ID:** ET-A2-0444
**Card ID:** `a2-wählen`
**Field/path:** `entry[1551].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich wähle ein Bild aus. = Es izvēlos attēlu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0445
**Audit ID:** ET-A2-0445
**Card ID:** `a2-wählen`
**Field/path:** `entry[1551].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir stimmen ab. = Mēs balsojam.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0446
**Audit ID:** ET-A2-0446
**Card ID:** `a2-während`
**Field/path:** `entry[1553].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Während ich arbeite, ist es ruhig. = Kamēr es strādāju, ir kluss.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0447
**Audit ID:** ET-A2-0447
**Card ID:** `a2-während`
**Field/path:** `entry[1553].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Bei Regen bleiben wir zu Hause. = Lietus laikā paliekam mājās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0448
**Audit ID:** ET-A2-0448
**Card ID:** `a2-während`
**Field/path:** `entry[1553].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wenn ich Zeit habe, komme ich. = Ja man būs laiks, es nākšu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0449
**Audit ID:** ET-A2-0449
**Card ID:** `a2-während`
**Field/path:** `entry[1553].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Solange du hier bist, bleibe ich. = Kamēr tu esi šeit, es palieku.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0450
**Audit ID:** ET-A2-0450
**Card ID:** `a2-wahrscheinlich`
**Field/path:** `entry[1555].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er kommt wahrscheinlich. = Viņš droši vien atnāks.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0451
**Audit ID:** ET-A2-0451
**Card ID:** `a2-wahrscheinlich`
**Field/path:** `entry[1555].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Vielleicht kommt er. = Varbūt viņš atnāks.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0452
**Audit ID:** ET-A2-0452
**Card ID:** `a2-wahrscheinlich`
**Field/path:** `entry[1555].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er kommt bestimmt. = Viņš noteikti atnāks.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0453
**Audit ID:** ET-A2-0453
**Card ID:** `a2-wahrscheinlich`
**Field/path:** `entry[1555].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist möglich. = Tas ir iespējams.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0454
**Audit ID:** ET-A2-0454
**Card ID:** `a2-wechseln`
**Field/path:** `entry[1564].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir tauschen Plätze. = Mēs samaināmies vietām.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0455
**Audit ID:** ET-A2-0455
**Card ID:** `a2-wechseln`
**Field/path:** `entry[1564].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich steige um. = Es pārsēžos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0456
**Audit ID:** ET-A2-0456
**Card ID:** `a2-wechseln`
**Field/path:** `entry[1564].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich ändere den Plan. = Es mainu plānu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0457
**Audit ID:** ET-A2-0457
**Card ID:** `a2-wert`
**Field/path:** `entry[1583].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist viel wert. = Tas ir daudz vērts.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0458
**Audit ID:** ET-A2-0458
**Card ID:** `a2-wert`
**Field/path:** `entry[1583].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Wert ist hoch. = Vērtība ir augsta.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0459
**Audit ID:** ET-A2-0459
**Card ID:** `a2-wert`
**Field/path:** `entry[1583].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Auto ist teuer. = Auto ir dārgs.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0460
**Audit ID:** ET-A2-0460
**Card ID:** `a2-wert`
**Field/path:** `entry[1583].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Stadt ist sehenswert. = Pilsētu ir vērts redzēt.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0461
**Audit ID:** ET-A2-0461
**Card ID:** `a2-wert`
**Field/path:** `entry[1583].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist wichtig. = Tas ir svarīgi.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0462
**Audit ID:** ET-A2-0462
**Card ID:** `a2-Weste-1584`
**Field/path:** `entry[1584].lv`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** vest
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0463
**Audit ID:** ET-A2-0463
**Card ID:** `a2-wiegen`
**Field/path:** `entry[1589].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Waage steht im Bad. = Svari stāv vannasistabā.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0464
**Audit ID:** ET-A2-0464
**Card ID:** `a2-wiegen`
**Field/path:** `entry[1589].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Gewicht ist normal. = Svars ir normāls.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0465
**Audit ID:** ET-A2-0465
**Card ID:** `a2-wiegen`
**Field/path:** `entry[1589].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich messe die Länge. = Es mēru garumu.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0466
**Audit ID:** ET-A2-0466
**Card ID:** `a2-wiegen`
**Field/path:** `entry[1589].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Wagen ist neu. = Automašīna ir jauna.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0467
**Audit ID:** ET-A2-0467
**Card ID:** `a2-ziehen`
**Field/path:** `entry[1599].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir ziehen um. = Mēs pārvācamies.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0468
**Audit ID:** ET-A2-0468
**Card ID:** `a2-ziehen`
**Field/path:** `entry[1599].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich ziehe um. = Es pārvācos.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0469
**Audit ID:** ET-A2-0469
**Card ID:** `a2-ziehen`
**Field/path:** `entry[1599].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Den Tee ziehen lassen. = Ļaut tējai ievilkties.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0470
**Audit ID:** ET-A2-0470
**Card ID:** `a2-zunehmen`
**Field/path:** `entry[1614].study.comparison[1].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich nehme ab. = Es notievēju.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0471
**Audit ID:** ET-A2-0471
**Card ID:** `a2-zunehmen`
**Field/path:** `entry[1614].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Stadt wächst. = Pilsēta aug.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0472
**Audit ID:** ET-A2-0472
**Card ID:** `a2-zunehmen`
**Field/path:** `entry[1614].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Preise steigen. = Cenas kāpj.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0473
**Audit ID:** ET-A2-0473
**Card ID:** `a2-zunehmen`
**Field/path:** `entry[1614].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Kosten erhöhen sich. = Izmaksas palielinās.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0474
**Audit ID:** ET-A2-0474
**Card ID:** `a2-zurzeit`
**Field/path:** `entry[1618].study.comparison[0].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Zurzeit bin ich beschäftigt. = Pašlaik esmu aizņemts.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0475
**Audit ID:** ET-A2-0475
**Card ID:** `a2-zurzeit`
**Field/path:** `entry[1618].study.comparison[2].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Im Moment habe ich keine Zeit. = Šobrīd man nav laika.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0476
**Audit ID:** ET-A2-0476
**Card ID:** `a2-zurzeit`
**Field/path:** `entry[1618].study.comparison[3].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Derzeit ist das nicht möglich. = Pašlaik tas nav iespējams.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0477
**Audit ID:** ET-A2-0477
**Card ID:** `a2-zurzeit`
**Field/path:** `entry[1618].study.comparison[4].example`
**Production file:** `data/et/a2.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Momentan bin ich krank. = Šobrīd esmu slims.
**PROPOSED_ET (audit ieteikums):** (ET tulkojums)
**Problēma:** LV/atlikušā valoda ET laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0478
**Audit ID:** ET-A2-0478
**Card ID:** `a2-abfahren`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** grupp
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0479
**Audit ID:** ET-A2-0479
**Card ID:** `a2-bauen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** mudelit
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0480
**Audit ID:** ET-A2-0480
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** t
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0481
**Audit ID:** ET-A2-0481
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** ö
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0486
**Audit ID:** ET-A2-0486
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** d
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0487
**Audit ID:** ET-A2-0487
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** a
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0488
**Audit ID:** ET-A2-0488
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** m
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0489
**Audit ID:** ET-A2-0489
**Card ID:** `a2-job`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** e
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0491
**Audit ID:** ET-A2-0491
**Card ID:** `a2-kamm`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** harja
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0492
**Audit ID:** ET-A2-0492
**Card ID:** `a2-kamm`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** kammi
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0493
**Audit ID:** ET-A2-0493
**Card ID:** `a2-kamm`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** hari
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0494
**Audit ID:** ET-A2-0494
**Card ID:** `a2-lage`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** kiht
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0495
**Audit ID:** ET-A2-0495
**Card ID:** `a2-leitung`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** juhe
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0497
**Audit ID:** ET-A2-0497
**Card ID:** `a2-leitung`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** liin
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0499
**Audit ID:** ET-A2-0499
**Card ID:** `a2-leitung`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** toru
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0501
**Audit ID:** ET-A2-0501
**Card ID:** `a2-rechnen`
**Field/path:** `study.sectionAccents (explanation)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** mit rechnen
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0502
**Audit ID:** ET-A2-0502
**Card ID:** `a2-satz`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** komplekti
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0503
**Audit ID:** ET-A2-0503
**Card ID:** `a2-satz`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** määr
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0505
**Audit ID:** ET-A2-0505
**Card ID:** `a2-satz`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** sete
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0507
**Audit ID:** ET-A2-0507
**Card ID:** `a2-schloss`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** lukku
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0508
**Audit ID:** ET-A2-0508
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** a
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0509
**Audit ID:** ET-A2-0509
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** u
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0510
**Audit ID:** ET-A2-0510
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** t
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0511
**Audit ID:** ET-A2-0511
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** o
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0516
**Audit ID:** ET-A2-0516
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** g
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0518
**Audit ID:** ET-A2-0518
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** v
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0522
**Audit ID:** ET-A2-0522
**Card ID:** `a2-wagen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** n
**PROPOSED_ET (audit ieteikums):** (termins no ET teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0523
**Audit ID:** ET-A2-0523
**Card ID:** `a2-abfahren`
**Field/path:** `study.sectionAccents.comparison.example`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** abfahren
**CURRENT:** Rong
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "Rong" nav atrodams sadaļā comparison
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0524
**Audit ID:** ET-A2-0524
**Card ID:** `a2-abfahren`
**Field/path:** `study.sectionAccents.comparison.example`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** abfahren
**CURRENT:** väljub
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "väljub" nav atrodams sadaļā comparison
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0526
**Audit ID:** ET-A2-0526
**Card ID:** `a2-abfahren`
**Field/path:** `study.sectionAccents.comparison.example`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** abfahren
**CURRENT:** sõidan
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "sõidan" nav atrodams sadaļā comparison
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## ET-A2-0527
**Audit ID:** ET-A2-0527
**Card ID:** `a2-abfahren`
**Field/path:** `study.sectionAccents.comparison.example`
**Production file:** `data/et/a2.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** abfahren
**CURRENT:** ära
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā ET teksta)
**Problēma:** sectionAccents termins "ära" nav atrodams sadaļā comparison
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
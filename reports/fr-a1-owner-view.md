# FR–DE A1 — OWNER VIEW

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.12
**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)
**MAIN_BASE_SHA:** `a2a769e8600291411a7a66eab0483dd4659c9151`
**WORK_BRANCH:** `cursor/fr-de-a1-full-audit-f5bc`
**Audit PR:** [#603](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/603)
**SCOPE:** FR–DE A1 (`data/fr/a1.js`)
**Findings:** **353** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)

> OBJECT_COVERAGE = 702/702 (100%). DISCOVERY_COMPLETENESS = NOT_GUARANTEED.
> 702/702 does NOT mean all possible defects were found.
> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda [fr-a1-owner-decisions.md](fr-a1-owner-decisions.md).
> **DE = STRICT READ-ONLY.** Production: `data/fr/a1.js` + `www/data/fr/a1.js`.

## GitHub atvēršana

| Fails | GitHub |
|-------|--------|
| GitHub indekss | [fr-a1-owner-review-GITHUB.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-review-GITHUB.md) |
| OWNER README | [fr-a1-owner-review-README.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-review-README.md) |
| OWNER DECISIONS | [fr-a1-owner-decisions.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions.md) |
| Pilns audits | [fr-a1-full-audit.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-full-audit.md) |
| History validation | [fr-a1-pr603-owner-history-validation.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-pr603-owner-history-validation.md) |

## Grupas (pa 50 findingiem)

| Grupa | Findings | VIEW | DECISIONS |
|-------|----------|------|-----------|
| 1–50 | 50 | [fr-a1-owner-view-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group01.md) | [fr-a1-owner-decisions-group01.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group01.md) |
| 51–100 | 50 | [fr-a1-owner-view-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group02.md) | [fr-a1-owner-decisions-group02.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group02.md) |
| 101–150 | 50 | [fr-a1-owner-view-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group03.md) | [fr-a1-owner-decisions-group03.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group03.md) |
| 151–200 | 50 | [fr-a1-owner-view-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group04.md) | [fr-a1-owner-decisions-group04.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group04.md) |
| 201–250 | 50 | [fr-a1-owner-view-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group05.md) | [fr-a1-owner-decisions-group05.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group05.md) |
| 251–300 | 50 | [fr-a1-owner-view-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group06.md) | [fr-a1-owner-decisions-group06.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group06.md) |
| 301–350 | 50 | [fr-a1-owner-view-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group07.md) | [fr-a1-owner-decisions-group07.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group07.md) |
| 351–353 | 3 | [fr-a1-owner-view-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-view-group08.md) | [fr-a1-owner-decisions-group08.md](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/fr-de-a1-full-audit-f5bc/reports/fr-a1-owner-decisions-group08.md) |

## Īsais saraksts (visi findingi)

- **FR-A1-0001** `STRUCT` · `study.count` · CRITICAL · Study count mismatch LV=134 FR=124
- **FR-A1-0002** `a1-Besuch-87` · `study` · HIGH · Trūkst Study objekta vārdam Besuch
- **FR-A1-0003** `a1-besuchen-89` · `study` · HIGH · Trūkst Study objekta vārdam besuchen
- **FR-A1-0004** `a1-bitte` · `study.tip.text` · HIGH · Trūkst study.tip.text salīdzinājumā ar LV etalonu
- **FR-A1-0005** `a1-bitte-study` · `study.tip.text` · HIGH · Trūkst study.tip.text salīdzinājumā ar LV etalonu
- **FR-A1-0006** `a1-Fußball-218` · `study` · HIGH · Trūkst Study objekta vārdam Fußball
- **FR-A1-0007** `a1-ganz-219` · `study` · HIGH · Trūkst Study objekta vārdam ganz
- **FR-A1-0008** `a1-gefallen-225` · `study` · HIGH · Trūkst Study objekta vārdam gefallen
- **FR-A1-0009** `a1-Geschichte-233` · `study` · HIGH · Trūkst Study objekta vārdam Geschichte
- **FR-A1-0010** `a1-Geschwister-234` · `study` · HIGH · Trūkst Study objekta vārdam Geschwister
- **FR-A1-0011** `a1-Großeltern-251` · `study` · HIGH · Trūkst Study objekta vārdam Großeltern
- **FR-A1-0012** `a1-Hand-267` · `study` · HIGH · Trūkst Study objekta vārdam Hand
- **FR-A1-0013** `a1-hübsch-288` · `study` · HIGH · Trūkst Study objekta vārdam hübsch
- **FR-A1-0014** `a1-sprechen-study` · `entry[5].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0015** `a1-aber` · `entry[21].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0016** `a1-auch-study` · `entry[48].study.important[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0017** `a1-auf` · `entry[49].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0018** `a1-bei` · `entry[78].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0019** `a1-bitte` · `entry[93].study.explanation[5]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0020** `a1-bitte` · `entry[93].study.tip[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0021** `a1-bitte` · `entry[93].study.important[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0022** `a1-bitte` · `entry[93].study.comparison[0].meaning` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0023** `a1-bitte` · `entry[93].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0024** `a1-bitte` · `entry[93].study.comparison[1].meaning` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0025** `a1-bitte` · `entry[93].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0026** `a1-bitte-study` · `entry[94].study.explanation[5]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0027** `a1-bitte-study` · `entry[94].study.tip[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0028** `a1-bitte-study` · `entry[94].study.important[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0029** `a1-bitte-study` · `entry[94].study.comparison[0].meaning` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0030** `a1-bitte-study` · `entry[94].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0031** `a1-bitte-study` · `entry[94].study.comparison[1].meaning` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0032** `a1-bitte-study` · `entry[94].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0033** `a1-bringen` · `entry[111].study.comparison[4].meaning` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0034** `a1-bringen` · `entry[111].study.comparison[4].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0035** `a1-ein` · `entry[154].study.examples[3].lv` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0036** `a1-ein` · `entry[154].study.comparison[0].meaning` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0037** `a1-ein` · `entry[154].study.comparison[1].meaning` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0038** `a1-ein` · `entry[154].study.comparison[3].meaning` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0039** `a1-eis` · `entry[157].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0040** `a1-eis` · `entry[157].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0041** `a1-eis` · `entry[157].study.comparison[3].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0042** `a1-erst` · `entry[165].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0043** `a1-erst` · `entry[165].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0044** `a1-erst` · `entry[165].study.comparison[3].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0045** `a1-es` · `entry[167].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0046** `a1-es` · `entry[167].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0047** `a1-etwas` · `entry[169].study.explanation[4]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0048** `a1-etwas` · `entry[169].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0049** `a1-etwas` · `entry[169].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0050** `a1-euch` · `entry[170].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0051** `a1-euch` · `entry[170].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0052** `a1-euch` · `entry[170].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0053** `a1-euch` · `entry[170].study.info[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0054** `a1-euch` · `entry[170].study.info[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0055** `a1-euch` · `entry[170].study.info[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0056** `a1-euch` · `entry[170].study.tip.example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0057** `a1-fahren` · `entry[172].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0058** `a1-fahren` · `entry[172].study.important.text` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0059** `a1-fahren` · `entry[172].study.important.example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0060** `a1-fahren` · `entry[172].study.accents.purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0061** `a1-fahren` · `entry[172].study.accents.purple[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0062** `a1-fahren` · `entry[172].study.accents.purple[4]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0063** `a1-fahren` · `entry[172].study.sectionAccents.comparison[2].example.yellow[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0064** `a1-fahren` · `entry[172].study.sectionAccents.important[0].text.purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0065** `a1-fahren` · `entry[172].study.sectionAccents.important[0].example.purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0066** `a1-finden` · `entry[187].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0067** `a1-finden` · `entry[187].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0068** `a1-fuer` · `entry[216].study.explanation[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0069** `a1-fuer` · `entry[216].study.explanation[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0070** `a1-fuer` · `entry[216].study.explanation[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0071** `a1-fuer` · `entry[216].study.explanation[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0072** `a1-fuer` · `entry[216].study.tip[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0073** `a1-fuer` · `entry[216].study.important[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0074** `a1-fuer` · `entry[216].study.important[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0075** `a1-fuer` · `entry[216].study.sectionAccents.tip[0].purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0076** `a1-fuer` · `entry[216].study.sectionAccents.important[0].purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0077** `a1-haben` · `entry[261].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0078** `a1-haben` · `entry[261].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0079** `a1-haben` · `entry[261].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0080** `a1-haben` · `entry[261].study.tip.text` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0081** `a1-haben` · `entry[261].study.sectionAccents.tip.left.purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0082** `a1-halten` · `entry[265].study.explanation[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0083** `a1-halten` · `entry[265].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0084** `a1-halten` · `entry[265].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0085** `a1-halten` · `entry[265].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0086** `a1-halten` · `entry[265].study.comparison[3].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0087** `a1-halten` · `entry[265].study.important[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0088** `a1-halten` · `entry[265].study.sectionAccents.comparison[0].example.blue[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0089** `a1-halten` · `entry[265].study.sectionAccents.tip.left.blue[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0090** `a1-heißen` · `entry[276].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0091** `a1-heißen` · `entry[276].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0092** `a1-heißen` · `entry[276].study.comparison[4].meaning` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0093** `a1-hoeren-study` · `entry[287].study.explanation[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0094** `a1-hoeren-study` · `entry[287].study.explanation[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0095** `a1-hoeren-study` · `entry[287].study.tip[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0096** `a1-hoeren-study` · `entry[287].study.important[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0097** `a1-hoeren-study` · `entry[287].study.sectionAccents.important[0].blue[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0098** `a1-im` · `entry[293].study.important[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0099** `a1-können` · `entry[319].study.id` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0100** `a1-können` · `entry[319].study.explanation[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0101** `a1-können` · `entry[319].study.explanation[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0102** `a1-können` · `entry[319].study.comparison[0].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0103** `a1-können` · `entry[319].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0104** `a1-können` · `entry[319].study.comparison[1].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0105** `a1-können` · `entry[319].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0106** `a1-können` · `entry[319].study.comparison[2].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0107** `a1-können` · `entry[319].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0108** `a1-können` · `entry[319].study.tip.text` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0109** `a1-können` · `entry[319].study.important[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0110** `a1-können` · `entry[319].study.important[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0111** `a1-können` · `entry[319].study.sectionAccents.comparison[0].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0112** `a1-können` · `entry[319].study.sectionAccents.comparison[1].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0113** `a1-können` · `entry[319].study.sectionAccents.comparison[2].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0114** `a1-können` · `entry[319].study.sectionAccents.tip.left.blue[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0115** `a1-können` · `entry[319].study.sectionAccents.important[0].purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0116** `a1-kosten` · `entry[320].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0117** `a1-kosten` · `entry[320].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0118** `a1-kosten` · `entry[320].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0119** `a1-kosten` · `entry[320].study.comparison[3].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0120** `a1-laden-study` · `entry[349].study.explanation[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0121** `a1-laden-study` · `entry[349].study.important[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0122** `a1-laden-study` · `entry[349].study.sectionAccents.important[2].blue[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0123** `a1-laufen` · `entry[357].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0124** `a1-laufen` · `entry[357].study.sectionAccents.comparison[0].example.blue[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0125** `a1-laut` · `entry[358].study.explanation[6]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0126** `a1-laut-study` · `entry[359].study.explanation[6]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0127** `a1-mann` · `entry[394].study.explanation[4]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0128** `a1-mann` · `entry[394].study.important[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0129** `a1-mögen` · `entry[413].study.id` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0130** `a1-mögen` · `entry[413].study.explanation[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0131** `a1-mögen` · `entry[413].study.explanation[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0132** `a1-mögen` · `entry[413].study.comparison[0].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0133** `a1-mögen` · `entry[413].study.comparison[1].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0134** `a1-mögen` · `entry[413].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0135** `a1-mögen` · `entry[413].study.important[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0136** `a1-mögen` · `entry[413].study.sectionAccents.comparison[0].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0137** `a1-mögen` · `entry[413].study.sectionAccents.comparison[1].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0138** `a1-mögen` · `entry[413].study.sectionAccents.comparison[1].example.red[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0139** `a1-mögen` · `entry[413].study.sectionAccents.important[0].purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0140** `a1-mögen` · `entry[413].study.sectionAccents.important[0].purple[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0141** `a1-müssen` · `entry[423].study.id` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0142** `a1-müssen` · `entry[423].study.explanation[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0143** `a1-müssen` · `entry[423].study.explanation[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0144** `a1-müssen` · `entry[423].study.comparison[0].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0145** `a1-müssen` · `entry[423].study.comparison[1].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0146** `a1-müssen` · `entry[423].study.comparison[3].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0147** `a1-müssen` · `entry[423].study.important[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0148** `a1-müssen` · `entry[423].study.sectionAccents.comparison[0].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0149** `a1-müssen` · `entry[423].study.sectionAccents.comparison[1].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0150** `a1-müssen` · `entry[423].study.sectionAccents.comparison[3].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0151** `a1-müssen` · `entry[423].study.sectionAccents.important[0].purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0152** `a1-müssen` · `entry[423].study.sectionAccents.important[0].purple[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0153** `a1-nach` · `entry[426].study.comparison[3].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0154** `a1-natuerlich` · `entry[433].study.explanation[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0155** `a1-natuerlich` · `entry[433].study.explanation[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0156** `a1-natuerlich` · `entry[433].study.explanation[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0157** `a1-natuerlich` · `entry[433].study.important[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0158** `a1-natuerlich` · `entry[433].study.sectionAccents.important[0].purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0159** `a1-natuerlich` · `entry[433].study.sectionAccents.important[0].purple[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0160** `a1-oder` · `entry[459].study.comparison[3].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0161** `a1-probieren` · `entry[482].study.explanation[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0162** `a1-probieren` · `entry[482].study.comparison[2].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0163** `a1-probieren` · `entry[482].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0164** `a1-probieren` · `entry[482].study.important[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0165** `a1-probieren` · `entry[482].study.sectionAccents.comparison[2].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0166** `a1-probieren` · `entry[482].study.sectionAccents.comparison[2].example.red[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0167** `a1-schon-study` · `entry[521].study.explanation[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0168** `a1-sehen` · `entry[539].study.comparison[3].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0169** `a1-sehen` · `entry[539].study.comparison[3].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0170** `a1-sehen` · `entry[539].study.important[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0171** `a1-sehen` · `entry[539].study.sectionAccents.comparison[3].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0172** `a1-sehen` · `entry[539].study.sectionAccents.comparison[3].example.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0173** `a1-sein` · `entry[542].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0174** `a1-sein` · `entry[542].study.tip.text` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0175** `a1-sein` · `entry[542].study.sectionAccents.tip.left.purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0176** `a1-sich` · `entry[547].study.explanation[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0177** `a1-sich` · `entry[547].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0178** `a1-sich` · `entry[547].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0179** `a1-sitzen` · `entry[558].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0180** `a1-sollen` · `entry[564].study.explanation[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0181** `a1-sollen` · `entry[564].study.comparison[1].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0182** `a1-sollen` · `entry[564].study.comparison[2].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0183** `a1-sollen` · `entry[564].study.tip.text` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0184** `a1-sollen` · `entry[564].study.important[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0185** `a1-sollen` · `entry[564].study.sectionAccents.comparison[1].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0186** `a1-sollen` · `entry[564].study.sectionAccents.comparison[2].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0187** `a1-sollen` · `entry[564].study.sectionAccents.tip.left.red[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0188** `a1-sollen` · `entry[564].study.sectionAccents.important[1].red[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0189** `a1-über` · `entry[608].study.id` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0190** `a1-über` · `entry[608].study.explanation[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0191** `a1-über` · `entry[608].study.explanation[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0192** `a1-über` · `entry[608].study.explanation[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0193** `a1-über` · `entry[608].study.explanation[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0194** `a1-über` · `entry[608].study.comparison[0].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0195** `a1-über` · `entry[608].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0196** `a1-über` · `entry[608].study.comparison[3].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0197** `a1-über` · `entry[608].study.tip.text` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0198** `a1-über` · `entry[608].study.important[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0199** `a1-über` · `entry[608].study.important[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0200** `a1-über` · `entry[608].study.sectionAccents.comparison[0].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0201** `a1-über` · `entry[608].study.sectionAccents.comparison[0].example.blue[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0202** `a1-über` · `entry[608].study.sectionAccents.tip.left.blue[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0203** `a1-über` · `entry[608].study.sectionAccents.important[0].purple[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0204** `a1-um` · `entry[611].study.comparison[3].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0205** `a1-um` · `entry[611].study.comparison[3].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0206** `a1-um` · `entry[611].study.sectionAccents.comparison[3].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0207** `a1-um` · `entry[611].study.sectionAccents.comparison[3].example.red[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0208** `a1-unter` · `entry[615].study.explanation[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0209** `a1-unter` · `entry[615].study.comparison[1].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0210** `a1-unter` · `entry[615].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0211** `a1-unter` · `entry[615].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0212** `a1-unter` · `entry[615].study.important[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0213** `a1-unter` · `entry[615].study.sectionAccents.comparison[1].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0214** `a1-unter` · `entry[615].study.sectionAccents.comparison[1].example.red[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0215** `a1-verstehen` · `entry[621].study.explanation[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0216** `a1-verstehen` · `entry[621].study.comparison[1].word` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0217** `a1-verstehen` · `entry[621].study.tip.text` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0218** `a1-verstehen` · `entry[621].study.sectionAccents.comparison[1].word.green[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0219** `a1-verstehen` · `entry[621].study.sectionAccents.tip.left.red[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0220** `a1-vor` · `entry[636].study.explanation[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0221** `a1-was` · `entry[644].study.important[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0222** `a1-was` · `entry[644].study.sectionAccents.important[2].blue[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0223** `a1-werden` · `entry[657].study.explanation[3]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0224** `a1-werden` · `entry[657].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0225** `a1-werden` · `entry[657].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0226** `a1-werden` · `entry[657].study.important[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0227** `a1-wetter` · `entry[658].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0228** `a1-fernsehen` · `entry[687].study.comparison[0].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0229** `a1-fernsehen` · `entry[687].study.comparison[1].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0230** `a1-fernsehen` · `entry[687].study.comparison[2].example` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0231** `a1-gemuese` · `entry[692].study.explanation[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0232** `a1-gemuese` · `entry[692].study.explanation[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0233** `a1-gemuese` · `entry[692].study.tip[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0234** `a1-gemuese` · `entry[692].study.tip[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0235** `a1-gemuese` · `entry[692].study.important[0]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0236** `a1-gemuese` · `entry[692].study.important[1]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0237** `a1-gemuese` · `entry[692].study.important[2]` · HIGH · LV/atlikušā valoda FR laukā
- **FR-A1-0238** `a1-es` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0239** `a1-es` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0240** `a1-es` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0241** `a1-es` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0242** `a1-fahren` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0243** `a1-fahren` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0244** `a1-fuer` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0245** `a1-fuer` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0246** `a1-fuer` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0247** `a1-gross-study` · `study.sectionAccents (explanation)` · MEDIUM · Accent term not found in section text
- **FR-A1-0248** `a1-haben` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0249** `a1-halten` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0250** `a1-halten` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0251** `a1-hoeren-study` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0252** `a1-kein` · `study.sectionAccents (explanation)` · MEDIUM · Accent term not found in section text
- **FR-A1-0253** `a1-können` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0254** `a1-können` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0255** `a1-können` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0256** `a1-können` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0257** `a1-laden-study` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0258** `a1-lang` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0259** `a1-laufen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0260** `a1-liegen` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0261** `a1-mögen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0262** `a1-mögen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0263** `a1-mögen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0264** `a1-müssen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0265** `a1-müssen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0266** `a1-müssen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0267** `a1-müssen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0268** `a1-natuerlich` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0269** `a1-neu` · `study.sectionAccents (explanation)` · MEDIUM · Accent term not found in section text
- **FR-A1-0270** `a1-neu` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0271** `a1-nur-study` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0272** `a1-probieren` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0273** `a1-probieren` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0274** `a1-sehen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0275** `a1-sehen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0276** `a1-sein` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0277** `a1-sollen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0278** `a1-sollen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0279** `a1-über` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0280** `a1-über` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0281** `a1-über` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0282** `a1-um` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0283** `a1-unter` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0284** `a1-unter` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0285** `a1-verstehen` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0286** `a1-was` · `study.sectionAccents (?)` · HIGH · LV remnant in sectionAccents
- **FR-A1-0287** `a1-zum` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0288** `a1-obst` · `study.sectionAccents (examples)` · MEDIUM · Accent term not found in section text
- **FR-A1-0289** `a1-bis` · `study.sectionAccents.comparison.example` · MEDIUM · sectionAccents termins "bis dass" nav atrodams sadaļā comparison
- **FR-A1-0290** `a1-bringen` · `study.sectionAccents.examples.de` · MEDIUM · sectionAccents termins "Wasser" nav atrodams sadaļā examples
- **FR-A1-0291** `a1-bringen` · `study.sectionAccents.examples.de` · MEDIUM · sectionAccents termins "dich" nav atrodams sadaļā examples
- **FR-A1-0292** `a1-bringen` · `study.sectionAccents.examples.de` · MEDIUM · sectionAccents termins "bringt" nav atrodams sadaļā examples
- **FR-A1-0293** `a1-bringen` · `study.sectionAccents.examples.de` · MEDIUM · sectionAccents termins "Buch" nav atrodams sadaļā examples
- **FR-A1-0294** `a1-an` · `study.translation` · HIGH · Main translation field shows 3 learner-facing candidates (À | À | Présent)
- **FR-A1-0295** `a1-aus` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (De | Sortie)
- **FR-A1-0296** `a1-aufs` · `study.translation` · HIGH · Main translation field shows 3 learner-facing candidates (Vers | Sur | Où ?)
- **FR-A1-0297** `a1-besuchen-89` · `lv` · HIGH · Main translation field shows 2 learner-facing candidates (Pour assister | Pour v…
- **FR-A1-0298** `a1-bringen` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (À emporter | À emporte…
- **FR-A1-0299** `a1-ein` · `study.translation` · HIGH · Main translation field shows 3 learner-facing candidates (Article indéfini | Un …
- **FR-A1-0300** `a1-eis` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Glace | Glace)
- **FR-A1-0301** `a1-erst` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Premier | Seulement)
- **FR-A1-0302** `a1-es` · `study.translation` · HIGH · Main translation field shows 3 learner-facing candidates (Il | Il | Forme impers…
- **FR-A1-0303** `a1-etwas` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Quelque chose | Un peu…
- **FR-A1-0304** `a1-euch` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Vous | Vous)
- **FR-A1-0305** `a1-fahren` · `study.translation` · HIGH · Main translation field shows 3 learner-facing candidates (Conduire | Diriger | E…
- **FR-A1-0306** `a1-finden` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Trouver | Considérer)
- **FR-A1-0307** `a1-frau` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Femme | Épouse)
- **FR-A1-0308** `a1-fuer` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Pour | Pour)
- **FR-A1-0309** `a1-Geschichte-233` · `lv` · HIGH · Main translation field shows 2 learner-facing candidates (Histoire | Histoire)
- **FR-A1-0310** `a1-gleich` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Immédiatement | Égal)
- **FR-A1-0311** `a1-halten` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Maintenir | Arrêter)
- **FR-A1-0312** `a1-heißen` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Être appelé | Moyen)
- **FR-A1-0313** `a1-hoeren-study` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Entendre | Écouter)
- **FR-A1-0314** `a1-hübsch-288` · `lv` · HIGH · Main translation field shows 2 learner-facing candidates (Propre | Agréable)
- **FR-A1-0315** `a1-ihr` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Vous | Elle)
- **FR-A1-0316** `a1-im` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Dans | Où ?)
- **FR-A1-0317** `a1-ins` · `study.translation` · HIGH · Main translation field shows 3 learner-facing candidates (Dans | Dans | Où ?)
- **FR-A1-0318** `a1-jetzt-302` · `lv` · HIGH · Main translation field shows 2 learner-facing candidates (Maintenant | Actuellem…
- **FR-A1-0319** `a1-kein` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Personne | Rien)
- **FR-A1-0320** `a1-können` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Être capable de | Savo…
- **FR-A1-0321** `a1-land` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Pays | Terrain)
- **FR-A1-0322** `a1-lang` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Longue | Longue)
- **FR-A1-0323** `a1-lassen` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Partir | Laisser)
- **FR-A1-0324** `a1-laufen` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Exécuter | Utiliser)
- **FR-A1-0325** `a1-liegen` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Être | Dormir)
- **FR-A1-0326** `a1-links-380` · `lv` · HIGH · Main translation field shows 2 learner-facing candidates (Gauche | Gauche)
- **FR-A1-0327** `a1-machen` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Faire | Faire)
- **FR-A1-0328** `a1-malen-391` · `lv` · HIGH · Main translation field shows 2 learner-facing candidates (Peindre | Peindre)
- **FR-A1-0329** `a1-mann` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Homme | Mari)
- **FR-A1-0330** `a1-nach` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (À | Après)
- **FR-A1-0331** `a1-natuerlich` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Bien sûr | Naturel)
- **FR-A1-0332** `a1-nehmen` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Prendre | Prendre)
- **FR-A1-0333** `a1-nur-study` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Seulement | Seulement)
- **FR-A1-0334** `a1-oder` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Ou | Ou)
- **FR-A1-0335** `a1-passen` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Ajustement | Ajustemen…
- **FR-A1-0336** `a1-probieren` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (A essayer | A déguster…
- **FR-A1-0337** `a1-rechts-491` · `lv` · HIGH · Main translation field shows 2 learner-facing candidates (À droite | La droite)
- **FR-A1-0338** `a1-seite` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Page | Côté)
- **FR-A1-0339** `a1-sich` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Vous-même | Pour vous-…
- **FR-A1-0340** `a1-sicher` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Sûr | Certainement)
- **FR-A1-0341** `a1-sie-study` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Ils | elle)
- **FR-A1-0342** `a1-über` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Fini | Pour)
- **FR-A1-0343** `a1-um` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Vers | Heures)
- **FR-A1-0344** `a1-vor` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Avant | Devant)
- **FR-A1-0345** `a1-was` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Qui | Quoi)
- **FR-A1-0346** `a1-wenn` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Si | Quand)
- **FR-A1-0347** `a1-wer` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Qui | Qui)
- **FR-A1-0348** `a1-wie` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Comment | Combien)
- **FR-A1-0349** `a1-zu` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (À | À)
- **FR-A1-0350** `a1-zum` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (À | À)
- **FR-A1-0351** `a1-essen-study` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Alimentation | Repas)
- **FR-A1-0352** `a1-zeit` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Temps (instant | pério…
- **FR-A1-0353** `a1-einmal` · `study.translation` · HIGH · Main translation field shows 2 learner-facing candidates (Une fois | Une fois)

## Pilns findingu pārskats (visi findingi)

## FR-A1-0001
**Audit ID:** FR-A1-0001
**Card ID:** `STRUCT`
**Field/path:** `study.count`
**Production file:** `data/fr/a1.js`
**Severity:** CRITICAL
**Category:** STRUCTURE
**DE (read-only):** —
**CURRENT:** 124
**PROPOSED_ET (audit ieteikums):** 134
**Problēma:** Study count mismatch LV=134 FR=124
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0002
**Audit ID:** FR-A1-0002
**Card ID:** `a1-Besuch-87`
**Field/path:** `study`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Besuch
**CURRENT:** (nav Study objekta)
**PROPOSED_ET (audit ieteikums):** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Besuch
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0003
**Audit ID:** FR-A1-0003
**Card ID:** `a1-besuchen-89`
**Field/path:** `study`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** besuchen
**CURRENT:** (nav Study objekta)
**PROPOSED_ET (audit ieteikums):** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam besuchen
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0004
**Audit ID:** FR-A1-0004
**Card ID:** `a1-bitte`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** bitte
**CURRENT:** (tukšs)
**PROPOSED_ET (audit ieteikums):** (FR tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0005
**Audit ID:** FR-A1-0005
**Card ID:** `a1-bitte-study`
**Field/path:** `study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Bitte
**CURRENT:** (tukšs)
**PROPOSED_ET (audit ieteikums):** (FR tulkojums pēc LV/DE)
**Problēma:** Trūkst study.tip.text salīdzinājumā ar LV etalonu
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0006
**Audit ID:** FR-A1-0006
**Card ID:** `a1-Fußball-218`
**Field/path:** `study`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Fußball
**CURRENT:** (nav Study objekta)
**PROPOSED_ET (audit ieteikums):** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Fußball
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0007
**Audit ID:** FR-A1-0007
**Card ID:** `a1-ganz-219`
**Field/path:** `study`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** ganz
**CURRENT:** (nav Study objekta)
**PROPOSED_ET (audit ieteikums):** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam ganz
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0008
**Audit ID:** FR-A1-0008
**Card ID:** `a1-gefallen-225`
**Field/path:** `study`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** gefallen
**CURRENT:** (nav Study objekta)
**PROPOSED_ET (audit ieteikums):** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam gefallen
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0009
**Audit ID:** FR-A1-0009
**Card ID:** `a1-Geschichte-233`
**Field/path:** `study`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Geschichte
**CURRENT:** (nav Study objekta)
**PROPOSED_ET (audit ieteikums):** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Geschichte
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0010
**Audit ID:** FR-A1-0010
**Card ID:** `a1-Geschwister-234`
**Field/path:** `study`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Geschwister
**CURRENT:** (nav Study objekta)
**PROPOSED_ET (audit ieteikums):** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Geschwister
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0011
**Audit ID:** FR-A1-0011
**Card ID:** `a1-Großeltern-251`
**Field/path:** `study`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Großeltern
**CURRENT:** (nav Study objekta)
**PROPOSED_ET (audit ieteikums):** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Großeltern
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0012
**Audit ID:** FR-A1-0012
**Card ID:** `a1-Hand-267`
**Field/path:** `study`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** Hand
**CURRENT:** (nav Study objekta)
**PROPOSED_ET (audit ieteikums):** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam Hand
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0013
**Audit ID:** FR-A1-0013
**Card ID:** `a1-hübsch-288`
**Field/path:** `study`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** STRUCTURE
**DE (read-only):** hübsch
**CURRENT:** (nav Study objekta)
**PROPOSED_ET (audit ieteikums):** Pievienot pilnu Study objektu pēc LV etalona
**Problēma:** Trūkst Study objekta vārdam hübsch
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0014
**Audit ID:** FR-A1-0014
**Card ID:** `a1-sprechen-study`
**Field/path:** `entry[5].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sprechen über die Arbeit. – Nous parlons de travail.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0015
**Audit ID:** FR-A1-0015
**Card ID:** `a1-aber`
**Field/path:** `entry[21].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich komme, aber später. – Je viendrai, mais plus tard.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0016
**Audit ID:** FR-A1-0016
**Card ID:** `a1-auch-study`
**Field/path:** `entry[48].study.important[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich auch wünsche Ihnen n’est pas le bon ordre des mots.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0017
**Audit ID:** FR-A1-0017
**Card ID:** `a1-auf`
**Field/path:** `entry[49].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich hänge das Bild an die Wand. – J'accroche le tableau au mur.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0018
**Audit ID:** FR-A1-0018
**Card ID:** `a1-bei`
**Field/path:** `entry[78].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Bild hängt an der Wand. – Le tableau est accroché au mur.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0019
**Audit ID:** FR-A1-0019
**Card ID:** `a1-bitte`
**Field/path:** `entry[93].study.explanation[5]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Bitte avec une lettre minuscule est un mot poli - cela signifie s'il vous plaît (Bitte schön !, Eine Tasse Kaffee, bitte).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0020
**Audit ID:** FR-A1-0020
**Card ID:** `a1-bitte`
**Field/path:** `entry[93].study.tip[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Petite bouchée = s'il te plaît (Bitte schön!, Kaffee, bitte). die Bitte avec une majuscule = demande (eine Bitte, meine Bitte).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0021
**Audit ID:** FR-A1-0021
**Card ID:** `a1-bitte`
**Field/path:** `entry[93].study.important[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Nepareizi : Die Bitte schön ! → Pareizi : Bitte schön !
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0022
**Audit ID:** FR-A1-0022
**Card ID:** `a1-bitte`
**Field/path:** `entry[93].study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** lūdzu
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0023
**Audit ID:** FR-A1-0023
**Card ID:** `a1-bitte`
**Field/path:** `entry[93].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Komm bitte herein. – Lūdzu, nāc iekšā.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0024
**Audit ID:** FR-A1-0024
**Card ID:** `a1-bitte`
**Field/path:** `entry[93].study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** lūgums
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0025
**Audit ID:** FR-A1-0025
**Card ID:** `a1-bitte`
**Field/path:** `entry[93].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe eine Bitte. – Man ir lūgums.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0026
**Audit ID:** FR-A1-0026
**Card ID:** `a1-bitte-study`
**Field/path:** `entry[94].study.explanation[5]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Bitte avec une lettre minuscule est un mot poli - cela signifie s'il vous plaît (Bitte schön !, Eine Tasse Kaffee, bitte).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0027
**Audit ID:** FR-A1-0027
**Card ID:** `a1-bitte-study`
**Field/path:** `entry[94].study.tip[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Petite bouchée = s'il te plaît (Bitte schön!, Kaffee, bitte). die Bitte avec une majuscule = demande (eine Bitte, meine Bitte).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0028
**Audit ID:** FR-A1-0028
**Card ID:** `a1-bitte-study`
**Field/path:** `entry[94].study.important[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Nepareizi : Die Bitte schön ! → Pareizi : Bitte schön !
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0029
**Audit ID:** FR-A1-0029
**Card ID:** `a1-bitte-study`
**Field/path:** `entry[94].study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** lūgums
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0030
**Audit ID:** FR-A1-0030
**Card ID:** `a1-bitte-study`
**Field/path:** `entry[94].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe eine Bitte. – Man ir lūgums.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0031
**Audit ID:** FR-A1-0031
**Card ID:** `a1-bitte-study`
**Field/path:** `entry[94].study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** lūdzu
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0032
**Audit ID:** FR-A1-0032
**Card ID:** `a1-bitte-study`
**Field/path:** `entry[94].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Komm bitte herein. – Lūdzu, nāc iekšā.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0033
**Audit ID:** FR-A1-0033
**Card ID:** `a1-bringen`
**Field/path:** `entry[111].study.comparison[4].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** paņemt
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0034
**Audit ID:** FR-A1-0034
**Card ID:** `a1-bringen`
**Field/path:** `entry[111].study.comparison[4].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich nehme das Buch. – Es paņemu grāmatu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0035
**Audit ID:** FR-A1-0035
**Card ID:** `a1-ein`
**Field/path:** `entry[154].study.examples[3].lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Bērns spēlējas.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0036
**Audit ID:** FR-A1-0036
**Card ID:** `a1-ein`
**Field/path:** `entry[154].study.comparison[0].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** vīriešu dzimte
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0037
**Audit ID:** FR-A1-0037
**Card ID:** `a1-ein`
**Field/path:** `entry[154].study.comparison[1].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** sieviešu dzimte
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0038
**Audit ID:** FR-A1-0038
**Card ID:** `a1-ein`
**Field/path:** `entry[154].study.comparison[3].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** akuzatīvs
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0039
**Audit ID:** FR-A1-0039
**Card ID:** `a1-eis`
**Field/path:** `entry[157].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich esse ein Eis. = Es ēdu saldējumu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0040
**Audit ID:** FR-A1-0040
**Card ID:** `a1-eis`
**Field/path:** `entry[157].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Wasser ist kalt. = Ūdens ir auksts.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0041
**Audit ID:** FR-A1-0041
**Card ID:** `a1-eis`
**Field/path:** `entry[157].study.comparison[3].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Eis ist ein Dessert. = Saldējums ir deserts.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0042
**Audit ID:** FR-A1-0042
**Card ID:** `a1-erst`
**Field/path:** `entry[165].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Zuerst frühstücken wir. = Vispirms mēs brokastojam.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0043
**Audit ID:** FR-A1-0043
**Card ID:** `a1-erst`
**Field/path:** `entry[165].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe nur 5 Euro. = Man ir tikai 5 eiro.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0044
**Audit ID:** FR-A1-0044
**Card ID:** `a1-erst`
**Field/path:** `entry[165].study.comparison[3].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Dann gehen wir nach Hause. = Tad mēs ejam mājās.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0045
**Audit ID:** FR-A1-0045
**Card ID:** `a1-es`
**Field/path:** `entry[167].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Es regnet. – Līst.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0046
**Audit ID:** FR-A1-0046
**Card ID:** `a1-es`
**Field/path:** `entry[167].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich lerne Deutsch. – Es mācos vācu valodu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0047
**Audit ID:** FR-A1-0047
**Card ID:** `a1-etwas`
**Field/path:** `entry[169].study.explanation[4]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Le plus important est de distinguer : etwas kaufen = acheter quelque chose, etwas müde = un peu fatigué.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0048
**Audit ID:** FR-A1-0048
**Card ID:** `a1-etwas`
**Field/path:** `entry[169].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich brauche etwas. = Man kaut kas vajadzīgs.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0049
**Audit ID:** FR-A1-0049
**Card ID:** `a1-etwas`
**Field/path:** `entry[169].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bin ein bisschen müde. = Es esmu mazliet noguris.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0050
**Audit ID:** FR-A1-0050
**Card ID:** `a1-euch`
**Field/path:** `entry[170].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ihr seid freundlich. = Jūs esat draudzīgi.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0051
**Audit ID:** FR-A1-0051
**Card ID:** `a1-euch`
**Field/path:** `entry[170].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich helfe euch. = Es jums palīdzu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0052
**Audit ID:** FR-A1-0052
**Card ID:** `a1-euch`
**Field/path:** `entry[170].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist euer Haus. = Tā ir jūsu māja.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0053
**Audit ID:** FR-A1-0053
**Card ID:** `a1-euch`
**Field/path:** `entry[170].study.info[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** ihr = you (subject form of the sentence)
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0054
**Audit ID:** FR-A1-0054
**Card ID:** `a1-euch`
**Field/path:** `entry[170].study.info[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** euch = you (where? form) / you (whom? form)
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0055
**Audit ID:** FR-A1-0055
**Card ID:** `a1-euch`
**Field/path:** `entry[170].study.info[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** euer = your (possessive form)
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0056
**Audit ID:** FR-A1-0056
**Card ID:** `a1-euch`
**Field/path:** `entry[170].study.tip.example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** I help you. = Ich helfe euch. i see you = Ich sehe euch. I'm telling you. = Ich erzähle euch.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0057
**Audit ID:** FR-A1-0057
**Card ID:** `a1-fahren`
**Field/path:** `entry[172].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er läuft schnell.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0058
**Audit ID:** FR-A1-0058
**Card ID:** `a1-fahren`
**Field/path:** `entry[172].study.important.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Fahren ≠ tikai « braukt »
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0059
**Audit ID:** FR-A1-0059
**Card ID:** `a1-fahren`
**Field/path:** `entry[172].study.important.example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** In German, the same verb often means: to drive • to drive • to take away depending on the context.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0060
**Audit ID:** FR-A1-0060
**Card ID:** `a1-fahren`
**Field/path:** `entry[172].study.accents.purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** braukt
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0061
**Audit ID:** FR-A1-0061
**Card ID:** `a1-fahren`
**Field/path:** `entry[172].study.accents.purple[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** vest
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0062
**Audit ID:** FR-A1-0062
**Card ID:** `a1-fahren`
**Field/path:** `entry[172].study.accents.purple[4]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** aizvest
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0063
**Audit ID:** FR-A1-0063
**Card ID:** `a1-fahren`
**Field/path:** `entry[172].study.sectionAccents.comparison[2].example.yellow[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** läuft
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0064
**Audit ID:** FR-A1-0064
**Card ID:** `a1-fahren`
**Field/path:** `entry[172].study.sectionAccents.important[0].text.purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** braukt
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0065
**Audit ID:** FR-A1-0065
**Card ID:** `a1-fahren`
**Field/path:** `entry[172].study.sectionAccents.important[0].example.purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** braukt
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0066
**Audit ID:** FR-A1-0066
**Card ID:** `a1-finden`
**Field/path:** `entry[187].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich finde das gut. = Man tas šķiet labi.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0067
**Audit ID:** FR-A1-0067
**Card ID:** `a1-finden`
**Field/path:** `entry[187].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich suche den Schlüssel. = Je cherche la clé.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0068
**Audit ID:** FR-A1-0068
**Card ID:** `a1-fuer`
**Field/path:** `entry[216].study.explanation[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Idée principale : für est une préposition qui régit toujours l'accusatif - généralement pour ou pour en letton.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0069
**Audit ID:** FR-A1-0069
**Card ID:** `a1-fuer`
**Field/path:** `entry[216].study.explanation[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Lorsqu'on parle de destinataire ou d'intention, für = pour (für dich = pour vous).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0070
**Audit ID:** FR-A1-0070
**Card ID:** `a1-fuer`
**Field/path:** `entry[216].study.explanation[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Lorsqu'on parle d'échange, de frais ou de motif, für = for (danke für das Geschenk = merci pour le cadeau).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0071
**Audit ID:** FR-A1-0071
**Card ID:** `a1-fuer`
**Field/path:** `entry[216].study.explanation[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Für nécessite toujours l'accusatif, quelle que soit sa signification.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0072
**Audit ID:** FR-A1-0072
**Card ID:** `a1-fuer`
**Field/path:** `entry[216].study.tip[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Für toujours + accusatif - quel que soit le sens.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0073
**Audit ID:** FR-A1-0073
**Card ID:** `a1-fuer`
**Field/path:** `entry[216].study.important[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Für + Akkusativ toujours, par exemple für mich, für dich, für das Kind.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0074
**Audit ID:** FR-A1-0074
**Card ID:** `a1-fuer`
**Field/path:** `entry[216].study.important[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Danke für / bezahlen für = 'pour', pas 'avant'.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0075
**Audit ID:** FR-A1-0075
**Card ID:** `a1-fuer`
**Field/path:** `entry[216].study.sectionAccents.tip[0].purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Für
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0076
**Audit ID:** FR-A1-0076
**Card ID:** `a1-fuer`
**Field/path:** `entry[216].study.sectionAccents.important[0].purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** für
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0077
**Audit ID:** FR-A1-0077
**Card ID:** `a1-haben`
**Field/path:** `entry[261].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich habe Zeit. = Man ir laiks.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0078
**Audit ID:** FR-A1-0078
**Card ID:** `a1-haben`
**Field/path:** `entry[261].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bin hier. = Es esmu šeit.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0079
**Audit ID:** FR-A1-0079
**Card ID:** `a1-haben`
**Field/path:** `entry[261].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bekomme ein Geschenk. = Es saņemu dāvanu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0080
**Audit ID:** FR-A1-0080
**Card ID:** `a1-haben`
**Field/path:** `entry[261].study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Atceries : Ich habe → man ir.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0081
**Audit ID:** FR-A1-0081
**Card ID:** `a1-haben`
**Field/path:** `entry[261].study.sectionAccents.tip.left.purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** man ir
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0082
**Audit ID:** FR-A1-0082
**Card ID:** `a1-halten`
**Field/path:** `entry[265].study.explanation[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Dans l'expression d'opinion, je halte das für..., cela signifie considérer comme.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0083
**Audit ID:** FR-A1-0083
**Card ID:** `a1-halten`
**Field/path:** `entry[265].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Bus hält. = Autobuss pietur.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0084
**Audit ID:** FR-A1-0084
**Card ID:** `a1-halten`
**Field/path:** `entry[265].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich nehme die Tasche. = Es ņemu somu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0085
**Audit ID:** FR-A1-0085
**Card ID:** `a1-halten`
**Field/path:** `entry[265].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Bitte halten Sie an. = Lūdzu, apstājieties.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0086
**Audit ID:** FR-A1-0086
**Card ID:** `a1-halten`
**Field/path:** `entry[265].study.comparison[3].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich denke, das ist richtig. = Es domāju, ka tas ir pareizi.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0087
**Audit ID:** FR-A1-0087
**Card ID:** `a1-halten`
**Field/path:** `entry[265].study.important[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich halte das für... est une expression d'opinion : "Je le considère comme...".
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0088
**Audit ID:** FR-A1-0088
**Card ID:** `a1-halten`
**Field/path:** `entry[265].study.sectionAccents.comparison[0].example.blue[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** hält
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0089
**Audit ID:** FR-A1-0089
**Card ID:** `a1-halten`
**Field/path:** `entry[265].study.sectionAccents.tip.left.blue[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** hält
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0090
**Audit ID:** FR-A1-0090
**Card ID:** `a1-heißen`
**Field/path:** `entry[276].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er nennt mich Tom. = Viņš mani sauc par Tomu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0091
**Audit ID:** FR-A1-0091
**Card ID:** `a1-heißen`
**Field/path:** `entry[276].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Was bedeutet das? = Ko tas nozīmē?
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0092
**Audit ID:** FR-A1-0092
**Card ID:** `a1-heißen`
**Field/path:** `entry[276].study.comparison[4].meaning`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** zvanīt
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0093
**Audit ID:** FR-A1-0093
**Card ID:** `a1-hoeren-study`
**Field/path:** `entry[287].study.explanation[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Hören signifie avant tout : percevoir le son.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0094
**Audit ID:** FR-A1-0094
**Card ID:** `a1-hoeren-study`
**Field/path:** `entry[287].study.explanation[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Hören est utilisé pour les sons, la musique et ce qui est entendu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0095
**Audit ID:** FR-A1-0095
**Card ID:** `a1-hoeren-study`
**Field/path:** `entry[287].study.tip[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Utilisez hören lorsque le contexte correspond à ce sens.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0096
**Audit ID:** FR-A1-0096
**Card ID:** `a1-hoeren-study`
**Field/path:** `entry[287].study.important[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Hören = entendre/écouter un son.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0097
**Audit ID:** FR-A1-0097
**Card ID:** `a1-hoeren-study`
**Field/path:** `entry[287].study.sectionAccents.important[0].blue[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** hören
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0098
**Audit ID:** FR-A1-0098
**Card ID:** `a1-im`
**Field/path:** `entry[293].study.important[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Avec des mois et des saisons : im März, im Herbst.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0099
**Audit ID:** FR-A1-0099
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.id`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** a1-können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0100
**Audit ID:** FR-A1-0100
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.explanation[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Idée principale : können signifie pouvoir ou savoir faire quelque chose.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0101
**Audit ID:** FR-A1-0101
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.explanation[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Können est un verbe modal, donc le deuxième verbe vient généralement à la fin.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0102
**Audit ID:** FR-A1-0102
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.comparison[0].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0103
**Audit ID:** FR-A1-0103
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich kann schwimmen. = Es protu peldēt.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0104
**Audit ID:** FR-A1-0104
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.comparison[1].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** dürfen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0105
**Audit ID:** FR-A1-0105
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Darf ich gehen? = Vai drīkstu iet?
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0106
**Audit ID:** FR-A1-0106
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.comparison[2].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0107
**Audit ID:** FR-A1-0107
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich muss lernen. = Man jāmācās.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0108
**Audit ID:** FR-A1-0108
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Rappelez-vous : compétence/capacité → können.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0109
**Audit ID:** FR-A1-0109
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.important[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Können n'est pas la même chose que dürfen. können = pouvoir/savoir, dürfen = être autorisé.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0110
**Audit ID:** FR-A1-0110
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.important[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Dans une phrase avec können, le deuxième verbe vient souvent à la fin : Ich kann schwimmen.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0111
**Audit ID:** FR-A1-0111
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.sectionAccents.comparison[0].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0112
**Audit ID:** FR-A1-0112
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.sectionAccents.comparison[1].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** dürfen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0113
**Audit ID:** FR-A1-0113
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.sectionAccents.comparison[2].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0114
**Audit ID:** FR-A1-0114
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.sectionAccents.tip.left.blue[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0115
**Audit ID:** FR-A1-0115
**Card ID:** `a1-können`
**Field/path:** `entry[319].study.sectionAccents.important[0].purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0116
**Audit ID:** FR-A1-0116
**Card ID:** `a1-kosten`
**Field/path:** `entry[320].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das kostet 5 Euro. = Tas maksā 5 eiro.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0117
**Audit ID:** FR-A1-0117
**Card ID:** `a1-kosten`
**Field/path:** `entry[320].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bezahle die Rechnung. = Es maksāju rēķinu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0118
**Audit ID:** FR-A1-0118
**Card ID:** `a1-kosten`
**Field/path:** `entry[320].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Kann ich bar zahlen? = Vai varu maksāt skaidrā naudā?
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0119
**Audit ID:** FR-A1-0119
**Card ID:** `a1-kosten`
**Field/path:** `entry[320].study.comparison[3].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Was kostet das Buch? = Cik maksā grāmata?
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0120
**Audit ID:** FR-A1-0120
**Card ID:** `a1-laden-study`
**Field/path:** `entry[349].study.explanation[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Pluriel : die Läden.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0121
**Audit ID:** FR-A1-0121
**Card ID:** `a1-laden-study`
**Field/path:** `entry[349].study.important[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Pluriel : die Läden.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0122
**Audit ID:** FR-A1-0122
**Card ID:** `a1-laden-study`
**Field/path:** `entry[349].study.sectionAccents.important[2].blue[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** die Läden
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0123
**Audit ID:** FR-A1-0123
**Card ID:** `a1-laufen`
**Field/path:** `entry[357].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er läuft schnell.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0124
**Audit ID:** FR-A1-0124
**Card ID:** `a1-laufen`
**Field/path:** `entry[357].study.sectionAccents.comparison[0].example.blue[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** läuft
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0125
**Audit ID:** FR-A1-0125
**Card ID:** `a1-laut`
**Field/path:** `entry[358].study.explanation[6]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Laut avec une majuscule et l'article der est un nom - cela signifie le son en tant que chose ou signal (Der Laut ist schön = le son est beau).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0126
**Audit ID:** FR-A1-0126
**Card ID:** `a1-laut-study`
**Field/path:** `entry[359].study.explanation[6]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Der Laut avec une majuscule et l'article der est un nom - cela signifie le son en tant que chose ou signal (Der Laut ist schön = le son est beau).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0127
**Audit ID:** FR-A1-0127
**Card ID:** `a1-mann`
**Field/path:** `entry[394].study.explanation[4]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Pluriel : die Männer.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0128
**Audit ID:** FR-A1-0128
**Card ID:** `a1-mann`
**Field/path:** `entry[394].study.important[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Pluriel : die Männer.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0129
**Audit ID:** FR-A1-0129
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.id`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** a1-mögen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0130
**Audit ID:** FR-A1-0130
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.explanation[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Idée principale : mögen signifie le plus souvent aimer quelque chose.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0131
**Audit ID:** FR-A1-0131
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.explanation[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Möchte est une autre forme utilisée pour le désir poli : je voudrais.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0132
**Audit ID:** FR-A1-0132
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.comparison[0].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** mögen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0133
**Audit ID:** FR-A1-0133
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.comparison[1].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** möchte
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0134
**Audit ID:** FR-A1-0134
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich möchte Kaffee.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0135
**Audit ID:** FR-A1-0135
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.important[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Mögen n'est pas un nom pour poli « je voudrais ». Möchte est généralement utilisé pour cela.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0136
**Audit ID:** FR-A1-0136
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.sectionAccents.comparison[0].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** mögen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0137
**Audit ID:** FR-A1-0137
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.sectionAccents.comparison[1].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** möchte
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0138
**Audit ID:** FR-A1-0138
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.sectionAccents.comparison[1].example.red[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** möchte
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0139
**Audit ID:** FR-A1-0139
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.sectionAccents.important[0].purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Mögen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0140
**Audit ID:** FR-A1-0140
**Card ID:** `a1-mögen`
**Field/path:** `entry[413].study.sectionAccents.important[0].purple[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Mögen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0141
**Audit ID:** FR-A1-0141
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.id`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** a1-müssen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0142
**Audit ID:** FR-A1-0142
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.explanation[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Idée principale : müssen signifie faire quelque chose.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0143
**Audit ID:** FR-A1-0143
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.explanation[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** En letton, müssen est souvent traduit par « moi oui… », « toi oui… », « nous oui… ».
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0144
**Audit ID:** FR-A1-0144
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.comparison[0].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0145
**Audit ID:** FR-A1-0145
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.comparison[1].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0146
**Audit ID:** FR-A1-0146
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.comparison[3].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** dürfen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0147
**Audit ID:** FR-A1-0147
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.important[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Müssen est un verbe modal.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0148
**Audit ID:** FR-A1-0148
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.sectionAccents.comparison[0].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0149
**Audit ID:** FR-A1-0149
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.sectionAccents.comparison[1].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0150
**Audit ID:** FR-A1-0150
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.sectionAccents.comparison[3].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** dürfen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0151
**Audit ID:** FR-A1-0151
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.sectionAccents.important[0].purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Müssen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0152
**Audit ID:** FR-A1-0152
**Card ID:** `a1-müssen`
**Field/path:** `entry[423].study.sectionAccents.important[0].purple[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0153
**Audit ID:** FR-A1-0153
**Card ID:** `a1-nach`
**Field/path:** `entry[426].study.comparison[3].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Vor dem Essen wasche ich die Hände.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0154
**Audit ID:** FR-A1-0154
**Card ID:** `a1-natuerlich`
**Field/path:** `entry[433].study.explanation[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Idée principale : natürlich comme adverbe signifie bien sûr, comme adjectif cela signifie naturel.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0155
**Audit ID:** FR-A1-0155
**Card ID:** `a1-natuerlich`
**Field/path:** `entry[433].study.explanation[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Dans une conversation, confirmant quelque chose, natürlich = bien sûr (Kommst du mit ? – Natürlich ! = Vous venez ? – Bien sûr !).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0156
**Audit ID:** FR-A1-0156
**Card ID:** `a1-natuerlich`
**Field/path:** `entry[433].study.explanation[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Lorsqu'on parle de nature, d'origine ou de qualités, natürlich = naturel (natürliche Schönheit = beauté naturelle).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0157
**Audit ID:** FR-A1-0157
**Card ID:** `a1-natuerlich`
**Field/path:** `entry[433].study.important[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Natürlich = bien sûr (adverbe, affirmation) OU naturel (adjectif).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0158
**Audit ID:** FR-A1-0158
**Card ID:** `a1-natuerlich`
**Field/path:** `entry[433].study.sectionAccents.important[0].purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** natürlich
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0159
**Audit ID:** FR-A1-0159
**Card ID:** `a1-natuerlich`
**Field/path:** `entry[433].study.sectionAccents.important[0].purple[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** natürlich
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0160
**Audit ID:** FR-A1-0160
**Card ID:** `a1-oder`
**Field/path:** `entry[459].study.comparison[3].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich komme, aber später.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0161
**Audit ID:** FR-A1-0161
**Card ID:** `a1-probieren`
**Field/path:** `entry[482].study.explanation[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ce n’est pas la même chose que prüfen, ce qui signifie vérifier plus attentivement.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0162
**Audit ID:** FR-A1-0162
**Card ID:** `a1-probieren`
**Field/path:** `entry[482].study.comparison[2].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** prüfen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0163
**Audit ID:** FR-A1-0163
**Card ID:** `a1-probieren`
**Field/path:** `entry[482].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich prüfe die Rechnung.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0164
**Audit ID:** FR-A1-0164
**Card ID:** `a1-probieren`
**Field/path:** `entry[482].study.important[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Vérifier un document ou une facture est généralement prüfen.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0165
**Audit ID:** FR-A1-0165
**Card ID:** `a1-probieren`
**Field/path:** `entry[482].study.sectionAccents.comparison[2].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** prüfen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0166
**Audit ID:** FR-A1-0166
**Card ID:** `a1-probieren`
**Field/path:** `entry[482].study.sectionAccents.comparison[2].example.red[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** prüfe
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0167
**Audit ID:** FR-A1-0167
**Card ID:** `a1-schon-study`
**Field/path:** `entry[521].study.explanation[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Schön signifie principalement : quelque chose s'est déjà produit ou est en cours.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0168
**Audit ID:** FR-A1-0168
**Card ID:** `a1-sehen`
**Field/path:** `entry[539].study.comparison[3].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** hören
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0169
**Audit ID:** FR-A1-0169
**Card ID:** `a1-sehen`
**Field/path:** `entry[539].study.comparison[3].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich höre Musik.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0170
**Audit ID:** FR-A1-0170
**Card ID:** `a1-sehen`
**Field/path:** `entry[539].study.important[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich sehe dich = es tevi redzu • Ich schaue den Film = es skatos filmu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0171
**Audit ID:** FR-A1-0171
**Card ID:** `a1-sehen`
**Field/path:** `entry[539].study.sectionAccents.comparison[3].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** hören
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0172
**Audit ID:** FR-A1-0172
**Card ID:** `a1-sehen`
**Field/path:** `entry[539].study.sectionAccents.comparison[3].example.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** höre
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0173
**Audit ID:** FR-A1-0173
**Card ID:** `a1-sein`
**Field/path:** `entry[542].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich werde müde.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0174
**Audit ID:** FR-A1-0174
**Card ID:** `a1-sein`
**Field/path:** `entry[542].study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Atceries : ich bin = es esmu • Du bist = tu esi.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0175
**Audit ID:** FR-A1-0175
**Card ID:** `a1-sein`
**Field/path:** `entry[542].study.sectionAccents.tip.left.purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** es esmu
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0176
**Audit ID:** FR-A1-0176
**Card ID:** `a1-sich`
**Field/path:** `entry[547].study.explanation[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Important à noter au niveau A1 : ich wasche mich, er wäscht sich.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0177
**Audit ID:** FR-A1-0177
**Card ID:** `a1-sich`
**Field/path:** `entry[547].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er wäscht sich.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0178
**Audit ID:** FR-A1-0178
**Card ID:** `a1-sich`
**Field/path:** `entry[547].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Du wäschst dich.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0179
**Audit ID:** FR-A1-0179
**Card ID:** `a1-sitzen`
**Field/path:** `entry[558].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Er steht an der Tür.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0180
**Audit ID:** FR-A1-0180
**Card ID:** `a1-sollen`
**Field/path:** `entry[564].study.explanation[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ce n'est pas aussi fort que le müssen.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0181
**Audit ID:** FR-A1-0181
**Card ID:** `a1-sollen`
**Field/path:** `entry[564].study.comparison[1].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0182
**Audit ID:** FR-A1-0182
**Card ID:** `a1-sollen`
**Field/path:** `entry[564].study.comparison[2].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0183
**Audit ID:** FR-A1-0183
**Card ID:** `a1-sollen`
**Field/path:** `entry[564].study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Rappelez-vous : quelqu'un dit quoi faire → sollen • Doit être fait → müssen.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0184
**Audit ID:** FR-A1-0184
**Card ID:** `a1-sollen`
**Field/path:** `entry[564].study.important[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sollen et müssen ne sont pas exactement les mêmes.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0185
**Audit ID:** FR-A1-0185
**Card ID:** `a1-sollen`
**Field/path:** `entry[564].study.sectionAccents.comparison[1].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0186
**Audit ID:** FR-A1-0186
**Card ID:** `a1-sollen`
**Field/path:** `entry[564].study.sectionAccents.comparison[2].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0187
**Audit ID:** FR-A1-0187
**Card ID:** `a1-sollen`
**Field/path:** `entry[564].study.sectionAccents.tip.left.red[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0188
**Audit ID:** FR-A1-0188
**Card ID:** `a1-sollen`
**Field/path:** `entry[564].study.sectionAccents.important[1].red[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0189
**Audit ID:** FR-A1-0189
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.id`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** a1-über
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0190
**Audit ID:** FR-A1-0190
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.explanation[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Idée principale : über signifie au-dessus ou environ selon le contexte.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0191
**Audit ID:** FR-A1-0191
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.explanation[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Lorsqu'il s'agit d'emplacement, über signifie souvent au-dessus.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0192
**Audit ID:** FR-A1-0192
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.explanation[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Lorsqu'il s'agit d'une conversation, d'un texte ou d'un sujet, über signifie environ.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0193
**Audit ID:** FR-A1-0193
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.explanation[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** En mouvement, über peut signifier fini.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0194
**Audit ID:** FR-A1-0194
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.comparison[0].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** über
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0195
**Audit ID:** FR-A1-0195
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Wir sprechen über das Wetter.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0196
**Audit ID:** FR-A1-0196
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.comparison[3].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich höre von dir.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0197
**Audit ID:** FR-A1-0197
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Rappelez-vous : sujet de conversation → über • Au-dessus du tableau → über.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0198
**Audit ID:** FR-A1-0198
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.important[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Über n'est pas seulement un nom de lieu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0199
**Audit ID:** FR-A1-0199
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.important[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Sprechen über signifie « parler de ».
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0200
**Audit ID:** FR-A1-0200
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.sectionAccents.comparison[0].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** über
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0201
**Audit ID:** FR-A1-0201
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.sectionAccents.comparison[0].example.blue[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** über
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0202
**Audit ID:** FR-A1-0202
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.sectionAccents.tip.left.blue[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** über
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0203
**Audit ID:** FR-A1-0203
**Card ID:** `a1-über`
**Field/path:** `entry[608].study.sectionAccents.important[0].purple[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Über
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0204
**Audit ID:** FR-A1-0204
**Card ID:** `a1-um`
**Field/path:** `entry[611].study.comparison[3].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** für
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0205
**Audit ID:** FR-A1-0205
**Card ID:** `a1-um`
**Field/path:** `entry[611].study.comparison[3].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das ist für dich.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0206
**Audit ID:** FR-A1-0206
**Card ID:** `a1-um`
**Field/path:** `entry[611].study.sectionAccents.comparison[3].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** für
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0207
**Audit ID:** FR-A1-0207
**Card ID:** `a1-um`
**Field/path:** `entry[611].study.sectionAccents.comparison[3].example.red[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** für
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0208
**Audit ID:** FR-A1-0208
**Card ID:** `a1-unter`
**Field/path:** `entry[615].study.explanation[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** C'est l'opposé d'über lorsqu'il s'agit de la direction haut/bas.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0209
**Audit ID:** FR-A1-0209
**Card ID:** `a1-unter`
**Field/path:** `entry[615].study.comparison[1].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** über
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0210
**Audit ID:** FR-A1-0210
**Card ID:** `a1-unter`
**Field/path:** `entry[615].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Die Lampe hängt über dem Tisch.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0211
**Audit ID:** FR-A1-0211
**Card ID:** `a1-unter`
**Field/path:** `entry[615].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Zwischen den Häusern.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0212
**Audit ID:** FR-A1-0212
**Card ID:** `a1-unter`
**Field/path:** `entry[615].study.important[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Unter et über sont souvent opposés dans le sens du lieu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0213
**Audit ID:** FR-A1-0213
**Card ID:** `a1-unter`
**Field/path:** `entry[615].study.sectionAccents.comparison[1].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** über
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0214
**Audit ID:** FR-A1-0214
**Card ID:** `a1-unter`
**Field/path:** `entry[615].study.sectionAccents.comparison[1].example.red[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** über
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0215
**Audit ID:** FR-A1-0215
**Card ID:** `a1-verstehen`
**Field/path:** `entry[621].study.explanation[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ici, vous n'avez généralement pas besoin de « connaître » ou d'« enseigner » le letton. • Ils sont plus souvent können.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0216
**Audit ID:** FR-A1-0216
**Card ID:** `a1-verstehen`
**Field/path:** `entry[621].study.comparison[1].word`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0217
**Audit ID:** FR-A1-0217
**Card ID:** `a1-verstehen`
**Field/path:** `entry[621].study.tip.text`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** N'oubliez pas : comprendre le texte/la personne → verstehen • Savoir comment faire quelque chose → können.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0218
**Audit ID:** FR-A1-0218
**Card ID:** `a1-verstehen`
**Field/path:** `entry[621].study.sectionAccents.comparison[1].word.green[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0219
**Audit ID:** FR-A1-0219
**Card ID:** `a1-verstehen`
**Field/path:** `entry[621].study.sectionAccents.tip.left.red[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0220
**Audit ID:** FR-A1-0220
**Card ID:** `a1-vor`
**Field/path:** `entry[636].study.explanation[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** En temps d'horloge, vor signifie « jusqu'à », par exemple fünf vor acht.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0221
**Audit ID:** FR-A1-0221
**Card ID:** `a1-was`
**Field/path:** `entry[644].study.important[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Was für (ein/eine) signifie quelqu'un/et demande une qualité ou un type (Was für ein Film ist das ? = De quel genre de film s'agit-il ?).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0222
**Audit ID:** FR-A1-0222
**Card ID:** `a1-was`
**Field/path:** `entry[644].study.sectionAccents.important[2].blue[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** was für
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0223
**Audit ID:** FR-A1-0223
**Card ID:** `a1-werden`
**Field/path:** `entry[657].study.explanation[3]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Au niveau A1, la phrase la plus importante est Ich werde müde. = Je commence à être fatigué.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0224
**Audit ID:** FR-A1-0224
**Card ID:** `a1-werden`
**Field/path:** `entry[657].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich werde müde.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0225
**Audit ID:** FR-A1-0225
**Card ID:** `a1-werden`
**Field/path:** `entry[657].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich bin müde.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0226
**Audit ID:** FR-A1-0226
**Card ID:** `a1-werden`
**Field/path:** `entry[657].study.important[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich werde müde = je suis fatigué • Ich bin müde = je suis fatigué.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0227
**Audit ID:** FR-A1-0227
**Card ID:** `a1-wetter`
**Field/path:** `entry[658].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Wetter ist schön.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0228
**Audit ID:** FR-A1-0228
**Card ID:** `a1-fernsehen`
**Field/path:** `entry[687].study.comparison[0].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich sehe fern. = Es skatos televīziju.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0229
**Audit ID:** FR-A1-0229
**Card ID:** `a1-fernsehen`
**Field/path:** `entry[687].study.comparison[1].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Im Fernsehen läuft ein Film. = Televīzijā rāda filmu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0230
**Audit ID:** FR-A1-0230
**Card ID:** `a1-fernsehen`
**Field/path:** `entry[687].study.comparison[2].example`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Ich sehe einen Film. = Es redzu filmu.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0231
**Audit ID:** FR-A1-0231
**Card ID:** `a1-gemuese`
**Field/path:** `entry[692].study.explanation[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Idée principale : Les légumes en général. L'allemand n'a pas de forme plurielle pour *die Gemüse.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0232
**Audit ID:** FR-A1-0232
**Card ID:** `a1-gemuese`
**Field/path:** `entry[692].study.explanation[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Gemüse signifie principalement : les légumes en général.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0233
**Audit ID:** FR-A1-0233
**Card ID:** `a1-gemuese`
**Field/path:** `entry[692].study.tip[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Gemüse = légumes
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0234
**Audit ID:** FR-A1-0234
**Card ID:** `a1-gemuese`
**Field/path:** `entry[692].study.tip[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Utilisez das Gemüse lorsque le contexte correspond à ce sens.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0235
**Audit ID:** FR-A1-0235
**Card ID:** `a1-gemuese`
**Field/path:** `entry[692].study.important[0]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Nav pareizi : die Gemüse, die Obsts.
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0236
**Audit ID:** FR-A1-0236
**Card ID:** `a1-gemuese`
**Field/path:** `entry[692].study.important[1]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Nepareizi : die Gemüse → Pareizi : das Gemüse
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0237
**Audit ID:** FR-A1-0237
**Card ID:** `a1-gemuese`
**Field/path:** `entry[692].study.important[2]`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** FOREIGN_REMNANT
**DE (read-only):** —
**CURRENT:** Das Gemüse = légumes (en général).
**PROPOSED_ET (audit ieteikums):** (FR tulkojums)
**Problēma:** LV/atlikušā valoda FR laukā
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0238
**Audit ID:** FR-A1-0238
**Card ID:** `a1-es`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Ich
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0239
**Audit ID:** FR-A1-0239
**Card ID:** `a1-es`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Er
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0240
**Audit ID:** FR-A1-0240
**Card ID:** `a1-es`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Sie
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0241
**Audit ID:** FR-A1-0241
**Card ID:** `a1-es`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Das
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0242
**Audit ID:** FR-A1-0242
**Card ID:** `a1-fahren`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** läuft
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0243
**Audit ID:** FR-A1-0243
**Card ID:** `a1-fahren`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** braukt
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0244
**Audit ID:** FR-A1-0244
**Card ID:** `a1-fuer`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Für
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0245
**Audit ID:** FR-A1-0245
**Card ID:** `a1-fuer`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** für
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0246
**Audit ID:** FR-A1-0246
**Card ID:** `a1-fuer`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** pay
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0247
**Audit ID:** FR-A1-0247
**Card ID:** `a1-gross-study`
**Field/path:** `study.sectionAccents (explanation)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Main
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0248
**Audit ID:** FR-A1-0248
**Card ID:** `a1-haben`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** man ir
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0249
**Audit ID:** FR-A1-0249
**Card ID:** `a1-halten`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** hält
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0250
**Audit ID:** FR-A1-0250
**Card ID:** `a1-halten`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** consider
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0251
**Audit ID:** FR-A1-0251
**Card ID:** `a1-hoeren-study`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** hören
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0252
**Audit ID:** FR-A1-0252
**Card ID:** `a1-kein`
**Field/path:** `study.sectionAccents (explanation)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Main
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0253
**Audit ID:** FR-A1-0253
**Card ID:** `a1-können`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0254
**Audit ID:** FR-A1-0254
**Card ID:** `a1-können`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** dürfen
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0255
**Audit ID:** FR-A1-0255
**Card ID:** `a1-können`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0256
**Audit ID:** FR-A1-0256
**Card ID:** `a1-können`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Können
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0257
**Audit ID:** FR-A1-0257
**Card ID:** `a1-laden-study`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** die Läden
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0258
**Audit ID:** FR-A1-0258
**Card ID:** `a1-lang`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** long
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0259
**Audit ID:** FR-A1-0259
**Card ID:** `a1-laufen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** läuft
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0260
**Audit ID:** FR-A1-0260
**Card ID:** `a1-liegen`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** phone
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0261
**Audit ID:** FR-A1-0261
**Card ID:** `a1-mögen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** mögen
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0262
**Audit ID:** FR-A1-0262
**Card ID:** `a1-mögen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** möchte
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0263
**Audit ID:** FR-A1-0263
**Card ID:** `a1-mögen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Mögen
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0264
**Audit ID:** FR-A1-0264
**Card ID:** `a1-müssen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0265
**Audit ID:** FR-A1-0265
**Card ID:** `a1-müssen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0266
**Audit ID:** FR-A1-0266
**Card ID:** `a1-müssen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** dürfen
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0267
**Audit ID:** FR-A1-0267
**Card ID:** `a1-müssen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Müssen
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0268
**Audit ID:** FR-A1-0268
**Card ID:** `a1-natuerlich`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** natürlich
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0269
**Audit ID:** FR-A1-0269
**Card ID:** `a1-neu`
**Field/path:** `study.sectionAccents (explanation)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Main
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0270
**Audit ID:** FR-A1-0270
**Card ID:** `a1-neu`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** phone
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0271
**Audit ID:** FR-A1-0271
**Card ID:** `a1-nur-study`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** just
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0272
**Audit ID:** FR-A1-0272
**Card ID:** `a1-probieren`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** prüfen
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0273
**Audit ID:** FR-A1-0273
**Card ID:** `a1-probieren`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** prüfe
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0274
**Audit ID:** FR-A1-0274
**Card ID:** `a1-sehen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** hören
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0275
**Audit ID:** FR-A1-0275
**Card ID:** `a1-sehen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** höre
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0276
**Audit ID:** FR-A1-0276
**Card ID:** `a1-sein`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** es esmu
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0277
**Audit ID:** FR-A1-0277
**Card ID:** `a1-sollen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** müssen
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0278
**Audit ID:** FR-A1-0278
**Card ID:** `a1-sollen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0279
**Audit ID:** FR-A1-0279
**Card ID:** `a1-über`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** über
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0280
**Audit ID:** FR-A1-0280
**Card ID:** `a1-über`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** Über
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0281
**Audit ID:** FR-A1-0281
**Card ID:** `a1-über`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** lamp
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0282
**Audit ID:** FR-A1-0282
**Card ID:** `a1-um`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** für
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0283
**Audit ID:** FR-A1-0283
**Card ID:** `a1-unter`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** über
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0284
**Audit ID:** FR-A1-0284
**Card ID:** `a1-unter`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** lamp
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0285
**Audit ID:** FR-A1-0285
**Card ID:** `a1-verstehen`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** können
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0286
**Audit ID:** FR-A1-0286
**Card ID:** `a1-was`
**Field/path:** `study.sectionAccents (?)`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** was für
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** LV remnant in sectionAccents
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0287
**Audit ID:** FR-A1-0287
**Card ID:** `a1-zum`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** are
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0288
**Audit ID:** FR-A1-0288
**Card ID:** `a1-obst`
**Field/path:** `study.sectionAccents (examples)`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** —
**CURRENT:** fruit
**PROPOSED_ET (audit ieteikums):** (termins no FR teksta)
**Problēma:** Accent term not found in section text
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0289
**Audit ID:** FR-A1-0289
**Card ID:** `a1-bis`
**Field/path:** `study.sectionAccents.comparison.example`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** bis
**CURRENT:** bis dass
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "bis dass" nav atrodams sadaļā comparison
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0290
**Audit ID:** FR-A1-0290
**Card ID:** `a1-bringen`
**Field/path:** `study.sectionAccents.examples.de`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** bringen
**CURRENT:** Wasser
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "Wasser" nav atrodams sadaļā examples
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0291
**Audit ID:** FR-A1-0291
**Card ID:** `a1-bringen`
**Field/path:** `study.sectionAccents.examples.de`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** bringen
**CURRENT:** dich
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "dich" nav atrodams sadaļā examples
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0292
**Audit ID:** FR-A1-0292
**Card ID:** `a1-bringen`
**Field/path:** `study.sectionAccents.examples.de`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** bringen
**CURRENT:** bringt
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "bringt" nav atrodams sadaļā examples
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0293
**Audit ID:** FR-A1-0293
**Card ID:** `a1-bringen`
**Field/path:** `study.sectionAccents.examples.de`
**Production file:** `data/fr/a1.js`
**Severity:** MEDIUM
**Category:** SECTIONACCENTS_LANGUAGE
**DE (read-only):** bringen
**CURRENT:** Buch
**PROPOSED_ET (audit ieteikums):** (termins no attiecīgā FR teksta)
**Problēma:** sectionAccents termins "Buch" nav atrodams sadaļā examples
**Avots:** validate-study-design
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0294
**Audit ID:** FR-A1-0294
**Card ID:** `a1-an`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** an
**CURRENT:** À • À • Présent
**PROPOSED_ET (audit ieteikums):** À
**Problēma:** Main translation field shows 3 learner-facing candidates (À | À | Présent)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0295
**Audit ID:** FR-A1-0295
**Card ID:** `a1-aus`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** aus
**CURRENT:** De • Sortie
**PROPOSED_ET (audit ieteikums):** De
**Problēma:** Main translation field shows 2 learner-facing candidates (De | Sortie)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0296
**Audit ID:** FR-A1-0296
**Card ID:** `a1-aufs`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** aufs
**CURRENT:** Vers • Sur • Où ?
**PROPOSED_ET (audit ieteikums):** Vers
**Problēma:** Main translation field shows 3 learner-facing candidates (Vers | Sur | Où ?)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0297
**Audit ID:** FR-A1-0297
**Card ID:** `a1-besuchen-89`
**Field/path:** `lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** besuchen
**CURRENT:** Pour assister • Pour visiter
**PROPOSED_ET (audit ieteikums):** Pour assister
**Problēma:** Main translation field shows 2 learner-facing candidates (Pour assister | Pour visiter)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0298
**Audit ID:** FR-A1-0298
**Card ID:** `a1-bringen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** bringen
**CURRENT:** À emporter • À emporter
**PROPOSED_ET (audit ieteikums):** À emporter
**Problēma:** Main translation field shows 2 learner-facing candidates (À emporter | À emporter)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0299
**Audit ID:** FR-A1-0299
**Card ID:** `a1-ein`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** ein
**CURRENT:** Article indéfini • Un • Quelqu'un
**PROPOSED_ET (audit ieteikums):** Article indéfini
**Problēma:** Main translation field shows 3 learner-facing candidates (Article indéfini | Un | Quelqu'un)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0300
**Audit ID:** FR-A1-0300
**Card ID:** `a1-eis`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Eis
**CURRENT:** Glace • Glace
**PROPOSED_ET (audit ieteikums):** Glace
**Problēma:** Main translation field shows 2 learner-facing candidates (Glace | Glace)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0301
**Audit ID:** FR-A1-0301
**Card ID:** `a1-erst`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** erst
**CURRENT:** Premier • Seulement
**PROPOSED_ET (audit ieteikums):** Premier
**Problēma:** Main translation field shows 2 learner-facing candidates (Premier | Seulement)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0302
**Audit ID:** FR-A1-0302
**Card ID:** `a1-es`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** es
**CURRENT:** Il • Il • Forme impersonnelle
**PROPOSED_ET (audit ieteikums):** Il
**Problēma:** Main translation field shows 3 learner-facing candidates (Il | Il | Forme impersonnelle)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0303
**Audit ID:** FR-A1-0303
**Card ID:** `a1-etwas`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** etwas
**CURRENT:** Quelque chose • Un peu
**PROPOSED_ET (audit ieteikums):** Quelque chose
**Problēma:** Main translation field shows 2 learner-facing candidates (Quelque chose | Un peu)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0304
**Audit ID:** FR-A1-0304
**Card ID:** `a1-euch`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** euch
**CURRENT:** Vous • Vous
**PROPOSED_ET (audit ieteikums):** Vous
**Problēma:** Main translation field shows 2 learner-facing candidates (Vous | Vous)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0305
**Audit ID:** FR-A1-0305
**Card ID:** `a1-fahren`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** fahren
**CURRENT:** Conduire • Diriger • Emporter
**PROPOSED_ET (audit ieteikums):** Conduire
**Problēma:** Main translation field shows 3 learner-facing candidates (Conduire | Diriger | Emporter)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0306
**Audit ID:** FR-A1-0306
**Card ID:** `a1-finden`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** finden
**CURRENT:** Trouver • Considérer
**PROPOSED_ET (audit ieteikums):** Trouver
**Problēma:** Main translation field shows 2 learner-facing candidates (Trouver | Considérer)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0307
**Audit ID:** FR-A1-0307
**Card ID:** `a1-frau`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Frau
**CURRENT:** Femme • Épouse
**PROPOSED_ET (audit ieteikums):** Femme
**Problēma:** Main translation field shows 2 learner-facing candidates (Femme | Épouse)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0308
**Audit ID:** FR-A1-0308
**Card ID:** `a1-fuer`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** für
**CURRENT:** Pour • Pour
**PROPOSED_ET (audit ieteikums):** Pour
**Problēma:** Main translation field shows 2 learner-facing candidates (Pour | Pour)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0309
**Audit ID:** FR-A1-0309
**Card ID:** `a1-Geschichte-233`
**Field/path:** `lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Geschichte
**CURRENT:** Histoire • Histoire
**PROPOSED_ET (audit ieteikums):** Histoire
**Problēma:** Main translation field shows 2 learner-facing candidates (Histoire | Histoire)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0310
**Audit ID:** FR-A1-0310
**Card ID:** `a1-gleich`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** gleich
**CURRENT:** Immédiatement • Égal
**PROPOSED_ET (audit ieteikums):** Immédiatement
**Problēma:** Main translation field shows 2 learner-facing candidates (Immédiatement | Égal)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0311
**Audit ID:** FR-A1-0311
**Card ID:** `a1-halten`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** halten
**CURRENT:** Maintenir • Arrêter
**PROPOSED_ET (audit ieteikums):** Maintenir
**Problēma:** Main translation field shows 2 learner-facing candidates (Maintenir | Arrêter)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0312
**Audit ID:** FR-A1-0312
**Card ID:** `a1-heißen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** heißen
**CURRENT:** Être appelé • Moyen
**PROPOSED_ET (audit ieteikums):** Être appelé
**Problēma:** Main translation field shows 2 learner-facing candidates (Être appelé | Moyen)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0313
**Audit ID:** FR-A1-0313
**Card ID:** `a1-hoeren-study`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** hören
**CURRENT:** Entendre • Écouter
**PROPOSED_ET (audit ieteikums):** Entendre
**Problēma:** Main translation field shows 2 learner-facing candidates (Entendre | Écouter)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0314
**Audit ID:** FR-A1-0314
**Card ID:** `a1-hübsch-288`
**Field/path:** `lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** hübsch
**CURRENT:** Propre • Agréable
**PROPOSED_ET (audit ieteikums):** Propre
**Problēma:** Main translation field shows 2 learner-facing candidates (Propre | Agréable)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0315
**Audit ID:** FR-A1-0315
**Card ID:** `a1-ihr`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** ihr
**CURRENT:** Vous • Elle
**PROPOSED_ET (audit ieteikums):** Vous
**Problēma:** Main translation field shows 2 learner-facing candidates (Vous | Elle)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0316
**Audit ID:** FR-A1-0316
**Card ID:** `a1-im`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** im
**CURRENT:** Dans • Où ?
**PROPOSED_ET (audit ieteikums):** Dans
**Problēma:** Main translation field shows 2 learner-facing candidates (Dans | Où ?)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0317
**Audit ID:** FR-A1-0317
**Card ID:** `a1-ins`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** ins
**CURRENT:** Dans • Dans • Où ?
**PROPOSED_ET (audit ieteikums):** Dans
**Problēma:** Main translation field shows 3 learner-facing candidates (Dans | Dans | Où ?)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0318
**Audit ID:** FR-A1-0318
**Card ID:** `a1-jetzt-302`
**Field/path:** `lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** jetzt
**CURRENT:** Maintenant • Actuellement
**PROPOSED_ET (audit ieteikums):** Maintenant
**Problēma:** Main translation field shows 2 learner-facing candidates (Maintenant | Actuellement)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0319
**Audit ID:** FR-A1-0319
**Card ID:** `a1-kein`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** kein
**CURRENT:** Personne • Rien
**PROPOSED_ET (audit ieteikums):** Personne
**Problēma:** Main translation field shows 2 learner-facing candidates (Personne | Rien)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0320
**Audit ID:** FR-A1-0320
**Card ID:** `a1-können`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** können
**CURRENT:** Être capable de • Savoir
**PROPOSED_ET (audit ieteikums):** Être capable de
**Problēma:** Main translation field shows 2 learner-facing candidates (Être capable de | Savoir)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0321
**Audit ID:** FR-A1-0321
**Card ID:** `a1-land`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Land
**CURRENT:** Pays • Terrain
**PROPOSED_ET (audit ieteikums):** Pays
**Problēma:** Main translation field shows 2 learner-facing candidates (Pays | Terrain)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0322
**Audit ID:** FR-A1-0322
**Card ID:** `a1-lang`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** lang
**CURRENT:** Longue • Longue
**PROPOSED_ET (audit ieteikums):** Longue
**Problēma:** Main translation field shows 2 learner-facing candidates (Longue | Longue)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0323
**Audit ID:** FR-A1-0323
**Card ID:** `a1-lassen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** lassen
**CURRENT:** Partir • Laisser
**PROPOSED_ET (audit ieteikums):** Partir
**Problēma:** Main translation field shows 2 learner-facing candidates (Partir | Laisser)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0324
**Audit ID:** FR-A1-0324
**Card ID:** `a1-laufen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** laufen
**CURRENT:** Exécuter • Utiliser
**PROPOSED_ET (audit ieteikums):** Exécuter
**Problēma:** Main translation field shows 2 learner-facing candidates (Exécuter | Utiliser)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0325
**Audit ID:** FR-A1-0325
**Card ID:** `a1-liegen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** liegen
**CURRENT:** Être • Dormir
**PROPOSED_ET (audit ieteikums):** Être
**Problēma:** Main translation field shows 2 learner-facing candidates (Être | Dormir)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0326
**Audit ID:** FR-A1-0326
**Card ID:** `a1-links-380`
**Field/path:** `lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** links
**CURRENT:** Gauche • Gauche
**PROPOSED_ET (audit ieteikums):** Gauche
**Problēma:** Main translation field shows 2 learner-facing candidates (Gauche | Gauche)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0327
**Audit ID:** FR-A1-0327
**Card ID:** `a1-machen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** machen
**CURRENT:** Faire • Faire
**PROPOSED_ET (audit ieteikums):** Faire
**Problēma:** Main translation field shows 2 learner-facing candidates (Faire | Faire)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0328
**Audit ID:** FR-A1-0328
**Card ID:** `a1-malen-391`
**Field/path:** `lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** malen
**CURRENT:** Peindre • Peindre
**PROPOSED_ET (audit ieteikums):** Peindre
**Problēma:** Main translation field shows 2 learner-facing candidates (Peindre | Peindre)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0329
**Audit ID:** FR-A1-0329
**Card ID:** `a1-mann`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Mann
**CURRENT:** Homme • Mari
**PROPOSED_ET (audit ieteikums):** Homme
**Problēma:** Main translation field shows 2 learner-facing candidates (Homme | Mari)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0330
**Audit ID:** FR-A1-0330
**Card ID:** `a1-nach`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nach
**CURRENT:** À • Après
**PROPOSED_ET (audit ieteikums):** À
**Problēma:** Main translation field shows 2 learner-facing candidates (À | Après)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0331
**Audit ID:** FR-A1-0331
**Card ID:** `a1-natuerlich`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** natürlich
**CURRENT:** Bien sûr • Naturel
**PROPOSED_ET (audit ieteikums):** Bien sûr
**Problēma:** Main translation field shows 2 learner-facing candidates (Bien sûr | Naturel)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0332
**Audit ID:** FR-A1-0332
**Card ID:** `a1-nehmen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nehmen
**CURRENT:** Prendre • Prendre
**PROPOSED_ET (audit ieteikums):** Prendre
**Problēma:** Main translation field shows 2 learner-facing candidates (Prendre | Prendre)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0333
**Audit ID:** FR-A1-0333
**Card ID:** `a1-nur-study`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** nur
**CURRENT:** Seulement • Seulement
**PROPOSED_ET (audit ieteikums):** Seulement
**Problēma:** Main translation field shows 2 learner-facing candidates (Seulement | Seulement)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0334
**Audit ID:** FR-A1-0334
**Card ID:** `a1-oder`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** oder
**CURRENT:** Ou • Ou
**PROPOSED_ET (audit ieteikums):** Ou
**Problēma:** Main translation field shows 2 learner-facing candidates (Ou | Ou)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0335
**Audit ID:** FR-A1-0335
**Card ID:** `a1-passen`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** passen
**CURRENT:** Ajustement • Ajustement
**PROPOSED_ET (audit ieteikums):** Ajustement
**Problēma:** Main translation field shows 2 learner-facing candidates (Ajustement | Ajustement)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0336
**Audit ID:** FR-A1-0336
**Card ID:** `a1-probieren`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** probieren
**CURRENT:** A essayer • A déguster
**PROPOSED_ET (audit ieteikums):** A essayer
**Problēma:** Main translation field shows 2 learner-facing candidates (A essayer | A déguster)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0337
**Audit ID:** FR-A1-0337
**Card ID:** `a1-rechts-491`
**Field/path:** `lv`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** rechts
**CURRENT:** À droite • La droite
**PROPOSED_ET (audit ieteikums):** À droite
**Problēma:** Main translation field shows 2 learner-facing candidates (À droite | La droite)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0338
**Audit ID:** FR-A1-0338
**Card ID:** `a1-seite`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Seite
**CURRENT:** Page • Côté
**PROPOSED_ET (audit ieteikums):** Page
**Problēma:** Main translation field shows 2 learner-facing candidates (Page | Côté)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0339
**Audit ID:** FR-A1-0339
**Card ID:** `a1-sich`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** sich
**CURRENT:** Vous-même • Pour vous-même
**PROPOSED_ET (audit ieteikums):** Vous-même
**Problēma:** Main translation field shows 2 learner-facing candidates (Vous-même | Pour vous-même)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0340
**Audit ID:** FR-A1-0340
**Card ID:** `a1-sicher`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** sicher
**CURRENT:** Sûr • Certainement
**PROPOSED_ET (audit ieteikums):** Sûr
**Problēma:** Main translation field shows 2 learner-facing candidates (Sûr | Certainement)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0341
**Audit ID:** FR-A1-0341
**Card ID:** `a1-sie-study`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** sie
**CURRENT:** Ils/elle
**PROPOSED_ET (audit ieteikums):** Ils
**Problēma:** Main translation field shows 2 learner-facing candidates (Ils | elle)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0342
**Audit ID:** FR-A1-0342
**Card ID:** `a1-über`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** über
**CURRENT:** Fini • Pour
**PROPOSED_ET (audit ieteikums):** Fini
**Problēma:** Main translation field shows 2 learner-facing candidates (Fini | Pour)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0343
**Audit ID:** FR-A1-0343
**Card ID:** `a1-um`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** um
**CURRENT:** Vers • Heures
**PROPOSED_ET (audit ieteikums):** Vers
**Problēma:** Main translation field shows 2 learner-facing candidates (Vers | Heures)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0344
**Audit ID:** FR-A1-0344
**Card ID:** `a1-vor`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** vor
**CURRENT:** Avant • Devant
**PROPOSED_ET (audit ieteikums):** Avant
**Problēma:** Main translation field shows 2 learner-facing candidates (Avant | Devant)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0345
**Audit ID:** FR-A1-0345
**Card ID:** `a1-was`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** was
**CURRENT:** Qui • Quoi
**PROPOSED_ET (audit ieteikums):** Qui
**Problēma:** Main translation field shows 2 learner-facing candidates (Qui | Quoi)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0346
**Audit ID:** FR-A1-0346
**Card ID:** `a1-wenn`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** wenn
**CURRENT:** Si • Quand
**PROPOSED_ET (audit ieteikums):** Si
**Problēma:** Main translation field shows 2 learner-facing candidates (Si | Quand)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0347
**Audit ID:** FR-A1-0347
**Card ID:** `a1-wer`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** wer
**CURRENT:** Qui • Qui
**PROPOSED_ET (audit ieteikums):** Qui
**Problēma:** Main translation field shows 2 learner-facing candidates (Qui | Qui)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0348
**Audit ID:** FR-A1-0348
**Card ID:** `a1-wie`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** wie
**CURRENT:** Comment • Combien
**PROPOSED_ET (audit ieteikums):** Comment
**Problēma:** Main translation field shows 2 learner-facing candidates (Comment | Combien)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0349
**Audit ID:** FR-A1-0349
**Card ID:** `a1-zu`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** zu
**CURRENT:** À • À
**PROPOSED_ET (audit ieteikums):** À
**Problēma:** Main translation field shows 2 learner-facing candidates (À | À)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0350
**Audit ID:** FR-A1-0350
**Card ID:** `a1-zum`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** zum
**CURRENT:** À • À
**PROPOSED_ET (audit ieteikums):** À
**Problēma:** Main translation field shows 2 learner-facing candidates (À | À)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0351
**Audit ID:** FR-A1-0351
**Card ID:** `a1-essen-study`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Essen
**CURRENT:** Alimentation • Repas
**PROPOSED_ET (audit ieteikums):** Alimentation
**Problēma:** Main translation field shows 2 learner-facing candidates (Alimentation | Repas)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0352
**Audit ID:** FR-A1-0352
**Card ID:** `a1-zeit`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** Zeit
**CURRENT:** Temps (instant / période de temps)
**PROPOSED_ET (audit ieteikums):** Temps (instant
**Problēma:** Main translation field shows 2 learner-facing candidates (Temps (instant | période de temps))
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
## FR-A1-0353
**Audit ID:** FR-A1-0353
**Card ID:** `a1-einmal`
**Field/path:** `study.translation`
**Production file:** `data/fr/a1.js`
**Severity:** HIGH
**Category:** MULTIPLE_TRANSLATIONS_DETECTED
**DE (read-only):** einmal
**CURRENT:** Une fois • Une fois
**PROPOSED_ET (audit ieteikums):** Une fois
**Problēma:** Main translation field shows 2 learner-facing candidates (Une fois | Une fois)
**Avots:** deterministic
**OWNER STATUS:** PENDING
**OWNER_DECISION:** [nav aizpildīts]
> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.
---
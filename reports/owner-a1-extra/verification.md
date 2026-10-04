# Verifikācija

Šis audits pierāda DE konsekvenci starp valodām, nevis DE pareizību.

STAGE RESULT: PARTIAL

Bāze: `a8d3c8a2643a3043d1ef273750750e07741dc172` (PR #869, nav apvienots). origin/main `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`.

## Komandas

- `node --check scripts/remove-extra-study-elements.js`
- `node scripts/remove-extra-study-elements.js`
- `node --check` katram no 140 mainītajiem `data/` un `www/data/` failiem, izejas kods 0
- `node scripts/restore-extra-study-elements.js` → `{"files":140,"failed":0}`
- `git diff --numstat -- data www/data` → 140 faili, insertions 0, deletions 6070
- `git diff -- languages ui.js www/ui.js crowdin scripts` → tukšs (jaunie skripti nav esošo izmaiņa)
- `node scripts/audit-de-consistency.js` pagaidu kokā `/tmp/extra-after` (datos ir noņemšana; `ui.js`, `languages`, `docs_and_rules` ir saites). Izejas kods 0.
- `node scripts/audit-lv-de-verify.js` tajā pašā kokā, `assertCleanTree` pagaidu kopijā ir tukša funkcija, lai netīrs darba koks neapturētu lasīšanu. Izejas kods 0. Pass 2 NOT_RUN. Neviens ieraksts nav PASS.

## Vārti

| vārti | prasība | fakts |
|---|---|---|
| diff tikai Study dzēšana | 0 pievienojumu | 0 pievienojumu, 6070 dzēšanas |
| LV faili | diff tukšs | tukšs |
| node --check | 0 | 0 |
| atjaunošanas SHA-256 | sakrīt | 140/140 |
| EXTRA A1–C2 | 0 | a1 4, c1 0, c2 0, a2 0, b1 0, b2 0 |
| courseLessons EXTRA | 2 | 2 |
| TEXT | 5428 | 5628 |
| MISSING | 307 | 507 |
| ORDER | 0 | 0 |
| lv-de-verify | nepasliktinās | observation 492, finding 80, review 51, stemReview 20, emptyPluralNouns 492 |
| esošie scripts, ui, languages, crowdin | diff tukšs | tukšs |

PARTIAL iemesls: TEXT un MISSING mainījās, un 4 A1 indeksa EXTRA (`Die Flasche fasst zwei Liter.` et/gr, abi koki) nav CSV 185 grupās. Skatīt SUMMARY.md.

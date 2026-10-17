# PR #877 apvienošana uz main (MASTER 1.20)

Datums: 2026-10-05. STAGE: INTEGRATION (docs-only). OWNER_DECISION 2026-10-04.

Šī palaišana `gh pr merge` neizpildīja: pēc `git fetch --all --prune` PR #877 jau bija MERGED. Esošais merge commits atbilst prasītajai apvienošanai (galva, vecāki, tikai dokumenti). Zari nav dzēsti. `--admin` nav lietots. Atcelšanas komanda nav izpildīta.

## Identifikatori

| Lauka | Vērtība |
|---|---|
| ORIGIN_MAIN_BEFORE | `9b44e89506a66a39e6ca375d6106566396ef8f10` |
| ORIGIN_MAIN_AFTER | `9b44e89506a66a39e6ca375d6106566396ef8f10` |
| MERGE_SHA | `9b44e89506a66a39e6ca375d6106566396ef8f10` |
| Merge vecāki | `d3826548d6940d7389e9cd7aeb6e175383f83551` `b62168767e02654e0b8d6a9fd42d5d8576d5ee64` |
| Galva | `b62168767e02654e0b8d6a9fd42d5d8576d5ee64` |
| mergedAt | 2026-10-05T15:43:25Z |
| mergedBy | `app/cursor` |
| Ziņojums | Merge pull request #877 from sandrisbrikmanis-rgb/cursor/master-v120-rules-f86b |

ORIGIN_MAIN_BEFORE ir `git rev-parse origin/main` uzreiz pēc fetch šajā palaišanā. Tas jau bija merge commits. Pirmais vecāks `d3826548d6940d7389e9cd7aeb6e175383f83551` ir main tieši pirms šī merge.

## A1

`gh pr view 877 --json headRefOid,baseRefName,state,mergeable,statusCheckRollup`

| Pārbaude | Gaidīts | Atrasts |
|---|---|---|
| baseRefName | main | main |
| state | OPEN | MERGED |
| mergeable | MERGEABLE | UNKNOWN |
| headRefOid | `b62168767e02654e0b8d6a9fd42d5d8576d5ee64` vai jaunāka | `b62168767e02654e0b8d6a9fd42d5d8576d5ee64` (nav jaunāka) |

statusCheckRollup: Cursor Bugbot, conclusion SUCCESS, completedAt 2026-10-04T17:12:28Z.

A1 state nav OPEN, tāpēc apvienošanas komanda šajā palaišanā netika palaista. Merge commits jau bija uz `origin/main`.

## A2

`git diff --name-only d3826548d6940d7389e9cd7aeb6e175383f83551...b62168767e02654e0b8d6a9fd42d5d8576d5ee64`

- `docs_and_rules/MASTER_1.12_BINDING_WORK_AGREEMENT.md`
- `docs_and_rules/PHASE_0_CROWDIN_DISCOVERY_SPEC.md`
- `docs_and_rules/PHASE_1_READ_ONLY_DISCOVERY_SPEC.md`
- `docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md`
- `reports/master-v120/MANIFEST.md`
- `reports/master-v120/SUMMARY.md`

Merge pret pirmo vecāku: tie paši 6 faili, 332 insertions, 35 deletions.

`git diff -- data www/data languages ui.js www/ui.js crowdin/content scripts` = tukšs.

## A3

Uz galvas un uz `origin/main` (`git show origin/main:docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md`, 7477 rindas):

- rinda 3: `**Versija:** 1.20`
- rinda 6702: `MASTER VERSION: 1.20`
- rinda 7477: `## MASTER 1.20 --- END`
- §20: `## Version 1.20` (6971) tūlīt pirms `## Version 1.19` (6987)

Sadaļu secība:

| Rinda | Virsraksts |
|---|---|
| 5398 | ## 7.158. Vārda līmeņa avotu apstiprināšana (v1.19) |
| 5430 | ## 7.158.A. AI izmantošana nevārdu ierakstiem (v1.19) |
| 5476 | ## 7.158.B. Izrunas iekavās obligātā pārbaude |
| 5489 | ## 7.158.C. Study bloku akcenti |
| 5497 | ## 7.158.D. Avotu pieejamība un pilota statusi |
| 5503 | ## 7.159. DE puses kopēšana no LV (OWNER_DECISION 2026-10-04) |
| 5512 | ## 7.160. Artikula un daudzskaitļa pārbaude pret Duden un Goethe |
| 5520 | ## 7.161. Atskaišu piegāde |

`git merge-base --is-ancestor` (exit 0):

- #855 galva `ae7a2cc5f778e370cd431751acbedcdfc119bcb2` ir sencis galvai un `origin/main`
- #856 galva `d1028d7276dd63f075c5b3411ec0e02c26296341` ir sencis galvai un `origin/main`

## A4

`git log d3826548d6940d7389e9cd7aeb6e175383f83551..origin/main` satur tikai #877 vēsturi un pašu merge. Vienīgais commits uz main, kura nav galvā, ir MERGE_SHA. `git merge-tree --write-tree d3826548… b6216876…` exit 0, koks `6237baa9a3506720c0c483b6c5c57764a4887e28`. Konfliktu nav. Main starp `d3826548` un apvienošanu nebija citas izmaiņas.

## B1

Nav izpildīts šajā palaišanā. PR jau bija MERGED. MERGE_SHA ierakstīts augstāk. Review vai branch protection šo palaišanu nebloķēja, jo komanda netika sūtīta.

## B2 (neizpildīta)

```text
git revert -m 1 9b44e89506a66a39e6ca375d6106566396ef8f10
```

## C1

Tie paši A3 marķieri un sadaļu secība uz `origin/main`. MASTER 7477 rindas. Versija 1.20.

## C2

| PR | state | mergedAt | mergeCommit | base | iemesls |
|---|---|---|---|---|---|
| #855 | MERGED | 2026-10-05T15:43:27Z | `ae7a2cc5f778e370cd431751acbedcdfc119bcb2` | main | Galva ir `origin/main` vēsturē; GitHub atzīmēja MERGED 2 s pēc #877. |
| #856 | OPEN | — | null | `cursor/master-v119-word-source-f86b` | Galva `d1028d7276dd63f075c5b3411ec0e02c26296341` ir `origin/main` sencis, bet nav sencis PR bāzes (`origin/cursor/master-v119-word-source-f86b` = `ae7a2cc5f778e370cd431751acbedcdfc119bcb2`, `merge-base --is-ancestor` exit 1). PR mērķis nav `main`, tāpēc GitHub to neatstāja MERGED. Zars nav aizvērts. |

## C3

Pages: run `37335118273`, headSha `9b44e89506a66a39e6ca375d6106566396ef8f10`, status completed, conclusion success, updatedAt 2026-10-05T15:50:45Z.

https://github.com/sandrisbrikmanis-rgb/de-lv-app/actions/runs/37335118273

`curl -sI` https://sandrisbrikmanis-rgb.github.io/de-lv-app/ → HTTP/2 200, last-modified Mon, 05 Oct 2026 15:50:18 GMT, content-length 34781.

`curl` https://sandrisbrikmanis-rgb.github.io/de-lv-app/data/b2.js → 316767 baiti, `die Pfahlbauten` ir (1 reize).

## STAGE RESULT

PASS

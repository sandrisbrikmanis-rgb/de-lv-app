# Verifikācija

Bāze `a8d3c8a2643a3043d1ef273750750e07741dc172`. Audits palaists uz pagaidu kopijas pirms ieraksta repozitorijā.

| rādītājs | #869 | pēc sinhronizācijas |
|---|---:|---:|
| TEXT | 5428 | 5414 |
| MISSING | 307 | 307 |
| EXTRA | 1086 | 2 |
| EXTRA A1–C2 | 1084 | 0 |
| EXTRA courseLessons | 2 | 2 |
| ORDER | 0 | 0 |
| UNICODE_ONLY | 760 | 760 |
| CHECKED_FIELDS | 2386426 | 2386426 |
| MATCH | 2380238 | 2380252 |
| MISMATCHES | 7581 | 6483 |
| NOT_VERIFIABLE | 11036 | 11036 |
| COVERAGE | 99.5397 | 99.5397 |

A1–C2 mismatches pēc audita: 0. Atlikušie 6483 ir courseLessons TEXT 5414, UNICODE_ONLY 760, MISSING 292, EXTRA 2, courseTrainingCards MISSING 3, dialogueIdMap MISSING 6, nounArticles MISSING 6.

node --check: 142 faili, kļūmes 0. `scripts/sync-study-de.js` un `scripts/restore-study-de-sync.js` arī iziet `node --check`.
Bāzes SHA-256 pret `git show a8d3c8a2643a3043d1ef273750750e07741dc172:path`: kļūmes 0.
LV `data/a1.js`–`c2.js` un `www/data` spogulis: SHA-256 sakrīt ar bāzi, kļūmes 0.

`node scripts/restore-study-de-sync.js`: `{"baseCommit":"a8d3c8a2643a3043d1ef273750750e07741dc172","mode":"simulate","files":71,"fail":0}`.

`audit-lv-de-verify` pēc ieraksta (tīrā koka pārbaude izlaista, jo data koks ir šis darbs; LV baiti nav mainīti): verdict PARTIAL, records 8618, finding 80, needsSourceReview 7164, review 51, observation 492, stemReview 20, caseFindings 0, emptyPluralNouns 492, SAME_LV 53, DIFFERENT_LV 27. Visi šie skaitļi sakrīt ar bāzes skrējienu.

`git diff -- languages ui.js www/ui.js crowdin/content scripts` ir tukšs. Jauni ir tikai `scripts/sync-study-de.js` un `scripts/restore-study-de-sync.js`.

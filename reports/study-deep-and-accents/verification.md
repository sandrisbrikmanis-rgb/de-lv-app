# Verifikācija

Bāze `401bd0ca7035e57230e2cc831863bc52c546ebb6`.

| pārbaude | rezultāts |
|---|---|
| audit-study-de-deep | TEXT 0, EXTRA 0, MISSING 0, ORDER 0, gadījumi 0 |
| audit-de-consistency TEXT | 5414 (bāze 5414) |
| audit-de-consistency MISSING | 307 |
| audit-de-consistency EXTRA | 2 (courseLessons) |
| audit-de-consistency ORDER | 0 |
| audit-de-consistency UNICODE_ONLY | 760 |
| audit-lv-de-verify | records 8618, finding 80, needsSourceReview 7164, review 51, observation 492, stemReview 20, caseFindings 0, emptyPluralNouns 492, SAME_LV 53, DIFFERENT_LV 27 |
| node --check | 148 faili, kļūmes 0 |
| LV SHA-256 | data/a1.js–c2.js un www spogulis sakrīt ar bāzi |
| git diff languages ui.js www/ui.js crowdin/content scripts | tukšs |
| akcentu garums = satura garums, kur LV masīvs ir | 43866 jā, 4948 nē |

4948 atlikums: LV sectionAccents masīvs ir īsāks par Study satura masīvu. Papildināšana ar LV ierakstiem tālāk nav iespējama. 39 masīviem LV pusē masīva nav; tie nav mainīti.

`node scripts/restore-study-accents.js`: `{"baseCommit":"401bd0ca7035e57230e2cc831863bc52c546ebb6","mode":"simulate","files":74,"fail":0}`.

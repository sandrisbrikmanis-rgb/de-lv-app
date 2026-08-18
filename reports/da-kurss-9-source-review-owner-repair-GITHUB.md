# DA–DE Kurss — 9-object SOURCE REVIEW — GitHub atvēršanas indekss

**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1  
**Branch:** `cursor/da-kurss-master-v11-audit-fffe`  
**Audit PR:** [#585](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/585)  
**Scope:** 9 NSR objekti no post-repair 26 OWNER review  
**Verdict:** SOURCE REVIEW APPLY COMPLETE · **55/55** fragment LABOT

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| [Šis indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-9-source-review-owner-repair-GITHUB.md) | GitHub saites 9-object apply |
| [Signed mapping (55 LABOT)](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-9-source-review-owner-mapping-signed.md) | Fragmentu CURRENT→NEW tabula |
| [Apply report](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-9-source-review-owner-repair-apply.md) | **55/55** applied · mirror PASS |
| [Apply log (JSON)](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/temp/da-kurss-9-source-review-apply-log.json) | Mašīnlasāms apply žurnāls |
| [Pilns audits](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-full-audit.md) | Post-source-review re-audit |
| [Audita GitHub indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-full-audit-GITHUB.md) | Pilna audita atvēršana |

## Apply kopsavilkums

| Metrika | Vērtība |
|---------|--------:|
| Objekti | **9** (lesson1–7 legacyHtml + pronunciation + consonants) |
| Fragment LABOT | **55** |
| Applied | **55/55** |
| CURRENT mismatch | **0** |
| LV MASTER changes | **0** |
| Mirror sync | **PASS** |
| Post-apply fragment verify | **55/55 PASS** |

## 9 objekti

| # | Objekts | Path | Fragmenti |
|---:|---------|------|----------:|
| 1 | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | 2 |
| 2 | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | 5 |
| 3 | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | 14 |
| 4 | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | 3 |
| 5 | lesson5 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml` | 6 |
| 6 | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | 16 |
| 7 | lesson7 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml` | 0 (NSR objekts; mapping tabulā nav atsevišķu rindu) |
| 8 | pronunciation | `COURSE_LESSON_HTML.kurssPronunciationLesson` | 2 |
| 9 | consonants | `COURSE_LESSON_HTML.kurssConsonantsLesson` | 7 |

> Kopā **55** fragmenti across lesson1–6 + pronunciation + consonants.

## Saistītie faili

| Fails | Apraksts |
|-------|----------|
| [Post-repair 26 OWNER indekss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-post-repair-26-owner-review-GITHUB.md) | 17 FP · 9 NSR → šis apply |
| [OWNER repair (95)](https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/cursor/da-kurss-master-v11-audit-fffe/reports/da-kurss-owner-repair-apply.md) | Sākotnējais LABOT 47/48 |

## Re-audit piezīme

Deterministiskā skenēšana joprojām var rādīt **26** whole-field hitus (izrunas transkripciju `ā/ī/ē` u.c. + 16× structure FP). OWNER triage: **17 FP** + **9 NSR (55 fragmenti — applied)**.

---

**DE changes:** 0 · **Production changes (apply):** `data/da/courseLessons.js` + `www/` mirror

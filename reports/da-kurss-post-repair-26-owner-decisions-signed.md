# DA–DE Kurss — post-repair 26 findings — OWNER review

**Standarts:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1  
**Avots:** `reports/da-kurss-full-audit.md` (POST-REPAIR FULL RE-AUDIT)  
**Scope:** 26/26 atlikušie findingi  
**DE:** STRICT READ-ONLY  
**Production changes:** 0 — šis ir OWNER lēmumu fails

## OWNER kopsavilkums

| Statuss | Skaits |
|---|---:|
| FALSE_POSITIVE | **17** |
| NEEDS_SOURCE_REVIEW | **9** |
| LABOT | **0** |
| NELABOT | **0** |
| PENDING | **0** |
| **Kopā** | **26** |

### Secinājums

- 16 `lesson7ExerciseCardsDa[*].lv` structure findingi tiek atkārtoti apstiprināti kā `FALSE_POSITIVE`.
- `DA-KURSS-0008` (`kurssArticlesLesson`) ir `FALSE_POSITIVE`: post-repair findingu izraisa tikai `ZERO_WIDTH`.
- `lesson1`–`lesson7` legacyHtml findingus **nedrīkst** aizvērt kā false positives: pilnajos avota laukos joprojām ir reāli latviešu/bojāti fragmenti.
- `kurssPronunciationLesson` un `kurssConsonantsLesson` nedrīkst mehāniski “attīrīt” no `š/ā/ī/ē` u.c., jo daļa ir apzināta izrunas transkripcija. Vienlaikus pilnajos laukos ir citi acīmredzami bojāti/lokalizācijai neatbilstoši fragmenti, tāpēc tiem vajadzīgs pilns source review.
- Šajā posmā **COPY-ONLY apply neveikt**, jo nevienam no 9 reālajiem review objektiem vēl nav pilna autoritatīva CURRENT→NEW mappinga.

## Decisions

| # | Finding | Lesson/ID | Path | Statuss | OWNER_DECISION |
|---:|---|---|---|---|---|
| 1 | `DA-KURSS-STR-lesson7ExerciseCardsDa[0].lv` | `lesson7` | `lesson7ExerciseCardsDa[0].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 2 | `DA-KURSS-STR-lesson7ExerciseCardsDa[1].lv` | `lesson7` | `lesson7ExerciseCardsDa[1].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 3 | `DA-KURSS-STR-lesson7ExerciseCardsDa[2].lv` | `lesson7` | `lesson7ExerciseCardsDa[2].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 4 | `DA-KURSS-STR-lesson7ExerciseCardsDa[3].lv` | `lesson7` | `lesson7ExerciseCardsDa[3].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 5 | `DA-KURSS-STR-lesson7ExerciseCardsDa[4].lv` | `lesson7` | `lesson7ExerciseCardsDa[4].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 6 | `DA-KURSS-STR-lesson7ExerciseCardsDa[5].lv` | `lesson7` | `lesson7ExerciseCardsDa[5].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 7 | `DA-KURSS-STR-lesson7ExerciseCardsDa[6].lv` | `lesson7` | `lesson7ExerciseCardsDa[6].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 8 | `DA-KURSS-STR-lesson7ExerciseCardsDa[7].lv` | `lesson7` | `lesson7ExerciseCardsDa[7].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 9 | `DA-KURSS-STR-lesson7ExerciseCardsDa[8].lv` | `lesson7` | `lesson7ExerciseCardsDa[8].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 10 | `DA-KURSS-STR-lesson7ExerciseCardsDa[9].lv` | `lesson7` | `lesson7ExerciseCardsDa[9].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 11 | `DA-KURSS-STR-lesson7ExerciseCardsDa[10].lv` | `lesson7` | `lesson7ExerciseCardsDa[10].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 12 | `DA-KURSS-STR-lesson7ExerciseCardsDa[11].lv` | `lesson7` | `lesson7ExerciseCardsDa[11].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 13 | `DA-KURSS-STR-lesson7ExerciseCardsDa[12].lv` | `lesson7` | `lesson7ExerciseCardsDa[12].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 14 | `DA-KURSS-STR-lesson7ExerciseCardsDa[13].lv` | `lesson7` | `lesson7ExerciseCardsDa[13].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 15 | `DA-KURSS-STR-lesson7ExerciseCardsDa[14].lv` | `lesson7` | `lesson7ExerciseCardsDa[14].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 16 | `DA-KURSS-STR-lesson7ExerciseCardsDa[15].lv` | `lesson7` | `lesson7ExerciseCardsDa[15].lv` | **FALSE_POSITIVE** | Saglabāt esošo DA/SV/NO Kurss konvenciju: šīm exercise kartēm `.lv` lauks nav obligāts. LV MASTER lauka nosaukumu mehāniski nepārnest uz DA. |
| 17 | `DA-KURSS-0001` | `lesson1` | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | **NEEDS_SOURCE_REVIEW** | Reāls finding. Pilnajā laukā joprojām ir latviešu valodas fragmenti (piem., izrunas skaidrojumi), tādēļ tas nav FALSE_POSITIVE. Pirms COPY-ONLY apply vajadzīgs pilns precīzs CURRENT→NEW mapping visam skartajam saturam. |
| 18 | `DA-KURSS-0002` | `lesson2` | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | **NEEDS_SOURCE_REVIEW** | Vācu dialogi paši par sevi ir mērķvalodas saturs un nav kļūda, bet whole-field audits norāda arī citus svešvalodas fragmentus. Jāpārskata pilns lauks un jāizdala tikai reālie DA lokalizācijas defekti. |
| 19 | `DA-KURSS-0003` | `lesson3` | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | **NEEDS_SOURCE_REVIEW** | Vācu piemēri ir pieļaujami, taču iepriekšējā OWNER pārskatā šajā legacyHtml jau identificēti latviski/bojāti fragmenti. Nepieciešams pilns precīzs mapping, nevis whole-field akla nomaiņa. |
| 20 | `DA-KURSS-0004` | `lesson4` | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | **NEEDS_SOURCE_REVIEW** | Finding nav droši aizverams kā FP: iepriekšējais OWNER pārskats šajā laukā konstatēja latviskus izrunas fragmentus. Sagatavot precīzus fragmentu CURRENT→NEW labojumus. |
| 21 | `DA-KURSS-0005` | `lesson5` | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml` | **NEEDS_SOURCE_REVIEW** | Finding nav droši aizverams kā FP: whole-field saturā ir jāatdala korekti vācu mērķvalodas piemēri no reāliem DA lokalizācijas defektiem. Vajadzīgs fragmentu līmeņa source review. |
| 22 | `DA-KURSS-0006` | `lesson6` | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | **NEEDS_SOURCE_REVIEW** | Reāls finding. Avota laukā redzami vairāki latviešu valodas gramatikas/izrunas fragmenti (piem., “Piemēri”, “Skaitļa vārds”, “Norādāmais vietniekvārds”). Nepieciešams pilns fragmentu mapping. |
| 23 | `DA-KURSS-0007` | `lesson7` | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml` | **NEEDS_SOURCE_REVIEW** | Reāls finding. Avota laukā redzami latviešu valodas izrunas un gramatikas fragmenti. Nepieciešams precīzs CURRENT→NEW mapping; vācu dialogus un piemērus nemainīt tikai tāpēc, ka tie ir vāciski. |
| 24 | `DA-KURSS-0008` | `kurssArticlesLesson` | `COURSE_LESSON_HTML.kurssArticlesLesson` | **FALSE_POSITIVE** | Šis post-repair finding balstās tikai uz ZERO_WIDTH detektoru. Tas pats par sevi nav lingvistiska DA kļūda. Šī finding ietvaros production tekstu nemainīt. |
| 25 | `DA-KURSS-0009` | `kurssPronunciationLesson` | `COURSE_LESSON_HTML.kurssPronunciationLesson` | **NEEDS_SOURCE_REVIEW** | LV_DIAC daļa lielā mērā ir apzināta izrunas transkripcija (gūt, flūr, vēk u.c.), tāpēc to nedrīkst mehāniski tīrīt. Tomēr pilnajā laukā ir arī acīmredzami bojāti/nekorekti piemēri un lokalizācijas atliekas; vajadzīgs atsevišķs pilna lauka lingvistiskais source review. |
| 26 | `DA-KURSS-0010` | `kurssConsonantsLesson` | `COURSE_LESSON_HTML.kurssConsonantsLesson` | **NEEDS_SOURCE_REVIEW** | LV_DIAC/š/št/c transkripcijas nav automātiski kļūdas. Tomēr laukā ir DA lietotājam neatbilstošas atsauces uz “lettisk” un vairāki bojāti piemēri/tulkojumi, tāpēc finding nav aizverams kā FP bez pilna source review. |

## Nākamais obligātais solis

Veikt **SOURCE REVIEW tikai 9 objektiem**:

1. `COURSE_LESSON_DATA.kurssLesson1.legacyHtml`
2. `COURSE_LESSON_DATA.kurssLesson2.legacyHtml`
3. `COURSE_LESSON_DATA.kurssLesson3.legacyHtml`
4. `COURSE_LESSON_DATA.kurssLesson4.legacyHtml`
5. `COURSE_LESSON_DATA.kurssLesson5.legacyHtml`
6. `COURSE_LESSON_DATA.kurssLesson6.legacyHtml`
7. `COURSE_LESSON_DATA.kurssLesson7.legacyHtml`
8. `COURSE_LESSON_HTML.kurssPronunciationLesson`
9. `COURSE_LESSON_HTML.kurssConsonantsLesson`

Katram reālajam defektam sagatavot fragmenta līmeņa:
`Path + CURRENT + NEW + Status=LABOT`.

**Aizliegts:** pārrakstīt visu `legacyHtml` tikai tāpēc, ka deterministiskais skeneris atrod DE tekstu, LV diakritiku vai ZERO_WIDTH. Vācu mērķvalodas piemēri ir jāsaglabā. DE lauki netiek mainīti.

Pēc 9 objektu source review:
`OWNER mapping → COPY-ONLY apply → targeted regression → full re-audit → 0 unresolved → CLOSED`.

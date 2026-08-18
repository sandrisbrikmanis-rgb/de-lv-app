# DA–DE Kurss — OWNER decisions — Vokaler — lange og korte

Avots: `reports/da-kurss-owner-review-05-vowels.md`  
Findings: **1–1** (1 ieraksts)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER lēmums

| Finding | Lesson/ID | Path | Statuss | OWNER_DECISION |
|---:|---|---|---|---|
| 1 | `kurssPronunciationLesson` | `COURSE_LESSON_HTML.kurssPronunciationLesson` | NEEDS_SOURCE_REVIEW | Redzamais `CURRENT_DA` fragments satur reālus bojājumus (`Varm (varm) - varm`, `Tarm (få) - godt` u.c.), tāpēc saturs ir jālabo. Tomēr finding aptver visu `legacyHtml`, bet dotais `CURRENT_DA` un LV reference ir saīsināti ar `…`. No nepilna avota nav iespējams droši noteikt pilnu COPY-ONLY replacement. Nepieciešams pilns `COURSE_LESSON_HTML.kurssPronunciationLesson` saturs; DE nedrīkst mainīt. |

## OWNER kopsavilkums

- **LABOT:** 0
- **NELABOT:** 0
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 1
- **PENDING:** 0

Finding nav false positive: redzamajā DA saturā ir acīmredzami bojājumi. `NEEDS_SOURCE_REVIEW` šeit nozīmē tikai to, ka pilns mērķa HTML nav dots un tādēļ OWNER nevar apstiprināt precīzu pilna lauka aizvietojumu bez minēšanas.

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NEEDS_SOURCE_REVIEW	Redzamais CURRENT_DA fragments satur reālus bojājumus (piem., "Varm (varm) - varm", "Tarm (få) - godt"), taču CURRENT_DA un LV reference ir saīsināti ar "…". Iegūt pilnu COURSE_LESSON_HTML.kurssPronunciationLesson saturu un atgriezt OWNER pārbaudei. Līdz tam production saturu nemainīt. DE = STRICT READ-ONLY.
```

# DA–DE Kurss — OWNER decisions — Lektion 7

Avots: `reports/da-kurss-owner-review-10-lesson-07.md`  
Findings: **1–3** (3 ieraksti)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER pārbaude

| Finding | Lesson/ID | Path | Statuss | OWNER_DECISION |
|---:|---|---|---|---|
| 1 | `lesson7` | `COURSE_LESSON_DATA.kurssLesson7.title` | NELABOT | |
| 2 | `lesson7` | `COURSE_LESSON_DATA.kurssLesson7.subtitle` | NELABOT | |
| 3 | `lesson7` | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml` | NEEDS_SOURCE_REVIEW | Redzamais DA sākums ir korekts: `Lektion 7`, `Syvende lektion: imperativ, tiltaleform og flertal.`, `Dialoger / sætninger`. Auditā norādītais “LV diakritikas/atlikums” redzamajā fragmentā nav konstatējams. Taču `CURRENT_DA` un LV reference ir nogriezti ar `…`, tāpēc visu `legacyHtml` nevar droši apstiprināt vai labot. Iegūt pilnu `COURSE_LESSON_DATA.kurssLesson7.legacyHtml` un atgriezt OWNER pārbaudei. Līdz tam production HTML nemainīt. |

## OWNER kopsavilkums

- **LABOT:** 0
- **NELABOT:** 2
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 1
- **PENDING:** 0

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NELABOT	
2	NELABOT	
3	NEEDS_SOURCE_REVIEW	Redzamais DA sākums ir korekts un auditā minētais LV atlikums tajā nav redzams. CURRENT_DA/LV reference ir saīsināti ar "…". Iegūt pilnu COURSE_LESSON_DATA.kurssLesson7.legacyHtml un atgriezt OWNER pārbaudei; līdz tam production HTML nemainīt.
```

## COPY-ONLY robeža

Šajā paketē nav OWNER apstiprinātu `LABOT` ierakstu. Findings **1–2** nemainīt. Finding **3** nemainīt līdz pilna `legacyHtml` pārbaudei. **DE = STRICT READ-ONLY.**

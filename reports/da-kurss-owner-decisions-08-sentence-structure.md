# DA–DE Kurss — OWNER decisions — Sætningsstruktur

Avots: `reports/da-kurss-owner-review-08-sentence-structure.md`  
Findings: **1–1** (1 ieraksts)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER lēmums

| Finding | Lesson/ID | Path | Statuss | OWNER_DECISION |
|---:|---|---|---|---|
| 1 | `kurssSentenceStructureLesson` | `COURSE_LESSON_HTML.kurssSentenceStructureLesson` | NEEDS_SOURCE_REVIEW | Redzamais `CURRENT_DA` fragments ir dabisks un korekts: `I en spørgsmålssætning kommer verbet normalt først på tysk.`, `Du kommst. — Du kommer.`, `Kommst du? — Kommer du?`, `Er singt. — Han synger.` Tajā nav redzams auditā minētais LV atlikums. Taču finding aptver visu `legacyHtml`, bet gan LV reference, gan `CURRENT_DA` ir nogriezti ar `…`. Tāpēc nevar droši noteikt, vai kļūda atrodas neredzamajā HTML daļā. Nepieciešams pilns `COURSE_LESSON_HTML.kurssSentenceStructureLesson` saturs. |

## OWNER kopsavilkums

- **LABOT:** 0
- **NELABOT:** 0
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 1
- **PENDING:** 0

Redzamo tekstu **nelabot**. Auditā norādītais `HIGH` / “LV vārdu/atlikumu pazīmes” nav pārbaudāms no saīsinātā fragmenta, tāpēc finding nedrīkst automātiski pārvērst par production labojumu.

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NEEDS_SOURCE_REVIEW	Redzamais CURRENT_DA fragments ir korekts un tajā LV atlikums nav redzams. Finding aptver visu legacyHtml, bet CURRENT_DA un LV reference ir saīsināti ar "…". Iegūt pilnu COURSE_LESSON_HTML.kurssSentenceStructureLesson saturu un atgriezt OWNER pārbaudei. Redzamo tekstu nemainīt. Līdz pilnai pārbaudei production saturu nemainīt. DE = STRICT READ-ONLY.
```

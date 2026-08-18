# DA–DE Kurss — OWNER decisions — Konsonanter og bogstavkombinationer

Avots: `reports/da-kurss-owner-review-06-consonants.md`  
Findings: **1–1** (1 ieraksts)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER lēmums

| Finding | Lesson/ID | Path | Statuss | OWNER_DECISION |
|---:|---|---|---|---|
| 1 | `kurssConsonantsLesson` | `COURSE_LESSON_HTML.kurssConsonantsLesson` | NEEDS_SOURCE_REVIEW | Redzamajā `CURRENT_DA` ir reāla valodas problēma: `Dette foredrag indeholder...` šajā mācību kontekstā nav atbilstošs tulkojums vārdam “lekcija”; dabiski būtu `Denne lektion indeholder...`. Taču finding aptver visu `legacyHtml`, un gan `CURRENT_DA`, gan LV reference ir saīsināti ar `…`. Tāpēc no dotā fragmenta nevar droši apstiprināt pilnu COPY-ONLY replacement. Nepieciešams pilns `COURSE_LESSON_HTML.kurssConsonantsLesson` saturs. |

## OWNER kopsavilkums

- **LABOT:** 0
- **NELABOT:** 0
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 1
- **PENDING:** 0

Finding nav false positive. Redzamajā DA fragmentā ir vismaz viens apstiprināms labojums:

`Dette foredrag indeholder de vigtigste eksempler for begynderen.`  
→ `Denne lektion indeholder de vigtigste eksempler for begyndere.`

Tomēr production lauku nedrīkst daļēji pārrakstīt pēc nogriezta HTML fragmenta. Vispirms jāiegūst pilns mērķa lauks un jāatgriež OWNER pārbaudei.

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NEEDS_SOURCE_REVIEW	Redzamajā CURRENT_DA ir reāla kļūda: "Dette foredrag indeholder de vigtigste eksempler for begynderen." → "Denne lektion indeholder de vigtigste eksempler for begyndere." Taču CURRENT_DA un LV reference ir saīsināti ar "…". Iegūt pilnu COURSE_LESSON_HTML.kurssConsonantsLesson saturu un atgriezt OWNER pārbaudei. Līdz tam production saturu nemainīt. DE = STRICT READ-ONLY.
```

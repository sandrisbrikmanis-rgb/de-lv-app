# DA–DE Kurss — OWNER decisions — Lektion 2

Avots: `reports/da-kurss-owner-review-10-lesson-02.md`  
Findings: **1–18** (18 ieraksti)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER pārbaude

- Finding **1**: `Lektion 2` ir korekts dāņu nosaukums.
- Finding **2**: CURRENT_DA ir acīmredzami nepareizs un semantiski nesaistīts ar lekcijas apakšvirsrakstu. Apstiprināts: `Dialoger, ord, udtale, grammatik og oversættelse`.
- Finding **3**: redzamajā HTML ir reālas kļūdas (`Foredrag 2`, `Anden forelæsning`), bet pilnais `legacyHtml` nav dots. Pilnu lauka aizvietojumu bez pilnā avota neapstiprināt.
- Findings **4–18**: treniņkartīšu DA teksti ir dabiski un semantiski atbilst LV/DE pāriem. **NELABOT**.

## OWNER kopsavilkums

- **LABOT:** 1
- **NELABOT:** 16
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 1
- **PENDING:** 0

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NELABOT	
2	LABOT	Dialoger, ord, udtale, grammatik og oversættelse
3	NEEDS_SOURCE_REVIEW	Redzamajā legacyHtml fragmentā ir reālas DA kļūdas: "Foredrag 2" → "Lektion 2"; "Anden forelæsning: dialoger, ord, udtale, grammatik og oversættelse." → "Anden lektion: dialoger, ord, udtale, grammatik og oversættelse." Taču viss legacyHtml ir saīsināts ar "…", tāpēc pilnu COPY-ONLY replacement nevar droši apstiprināt. Iegūt pilnu COURSE_LESSON_DATA.kurssLesson2.legacyHtml un atgriezt OWNER pārbaudei. Līdz tam production legacyHtml nemainīt.
4	NELABOT	
5	NELABOT	
6	NELABOT	
7	NELABOT	
8	NELABOT	
9	NELABOT	
10	NELABOT	
11	NELABOT	
12	NELABOT	
13	NELABOT	
14	NELABOT	
15	NELABOT	
16	NELABOT	
17	NELABOT	
18	NELABOT	
```

## COPY-ONLY robeža

Šobrīd production drīkst deterministiski mainīt tikai **Finding 2** ar precīzo OWNER tekstu.

**Finding 3** nav atļauja daļēji pārrakstīt `legacyHtml`: vispirms jāiegūst pilns lauks un jāatgriež OWNER pārbaudei.

Findings **1 un 4–18** nemainīt. **DE = STRICT READ-ONLY.**

# DA–DE Kurss — OWNER decisions — Lektion 3

Avots: `reports/da-kurss-owner-review-10-lesson-03.md`  
Findings: **1–25** (25 ieraksti)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER pārbaude

- Finding **1**: `Lektion 3` ir korekts.
- Finding **2**: pašreizējais `Dialoger, ord, udtale, grammatik og oversættelse` neatbilst LV etalonam `Artikuli, vietas vārdi un pārtulko`. Apstiprināts: **`Artikler, stedsord og oversættelse`**.
- Finding **3**: redzamajā HTML ir reālas DA kļūdas (`Foredrag 3`, `Tredje forelæsning`), bet pilnais `legacyHtml` nav dots. Pilnu lauka aizvietojumu bez pilnā avota neapstiprināt.
- Findings **4–25**: visi redzamie treniņkartīšu DA teikumi ir gramatiski pieņemami un semantiski atbilst attiecīgajiem LV/DE pāriem. **NELABOT**.

## OWNER kopsavilkums

- **LABOT:** 1
- **NELABOT:** 23
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 1
- **PENDING:** 0

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NELABOT	
2	LABOT	Artikler, stedsord og oversættelse
3	NEEDS_SOURCE_REVIEW	Redzamajā legacyHtml fragmentā ir reālas DA kļūdas: "Foredrag 3" → "Lektion 3"; "Tredje forelæsning: dialoger, ord, udtale, grammatik og oversættelse." → "Tredje lektion: dialoger, ord, udtale, grammatik og oversættelse." Taču viss legacyHtml ir saīsināts ar "…", tāpēc pilnu COPY-ONLY replacement nevar droši apstiprināt. Iegūt pilnu COURSE_LESSON_DATA.kurssLesson3.legacyHtml un atgriezt OWNER pārbaudei. Līdz tam production legacyHtml nemainīt.
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
19	NELABOT	
20	NELABOT	
21	NELABOT	
22	NELABOT	
23	NELABOT	
24	NELABOT	
25	NELABOT	
```

## COPY-ONLY robeža

Šobrīd production drīkst deterministiski mainīt tikai **Finding 2** ar precīzo OWNER tekstu.

**Finding 3** nav atļauja daļēji pārrakstīt `legacyHtml`: vispirms jāiegūst pilns lauks un jāatgriež OWNER pārbaudei.

Findings **1 un 4–25** nemainīt. **DE = STRICT READ-ONLY.**

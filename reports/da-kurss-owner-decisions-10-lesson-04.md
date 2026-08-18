# DA–DE Kurss — OWNER decisions — Lektion 4

Avots: `reports/da-kurss-owner-review-10-lesson-04.md`  
Findings: **1–19** (19 ieraksti)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER pārbaude

- Finding **1**: `Lektion 4` ir korekts dāņu nosaukums.
- Finding **2**: CURRENT_DA ir nepabeigts (`Genstande i klasseværelset, egenskaber og`). Apstiprināts pilns teksts: **`Genstande i klasseværelset, egenskaber og oversættelse`**.
- Finding **3**: redzamajā HTML `Foredrag 4` nav atbilstošs kursa terminam; jābūt `Lektion 4`. Pilnais HTML nav dots, tāpēc visu lauku bez pilna avota neaizvietot.
- Findings **4–19**: redzamie DA treniņkartīšu teksti ir dabiski un semantiski atbilst LV/DE pāriem. **NELABOT**.

## OWNER kopsavilkums

- **LABOT:** 1
- **NELABOT:** 17
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 1
- **PENDING:** 0

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NELABOT	
2	LABOT	Genstande i klasseværelset, egenskaber og oversættelse
3	NEEDS_SOURCE_REVIEW	Redzamajā legacyHtml fragmentā ir reāla DA terminoloģijas kļūda: "Foredrag 4" → "Lektion 4". Pilnais legacyHtml ir saīsināts ar "…", tāpēc pilnu COPY-ONLY replacement nevar droši apstiprināt. Iegūt pilnu COURSE_LESSON_DATA.kurssLesson4.legacyHtml un atgriezt OWNER pārbaudei. Līdz tam production legacyHtml nemainīt.
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
```

## COPY-ONLY robeža

Šobrīd production drīkst deterministiski mainīt tikai **Finding 2** ar precīzo OWNER tekstu.

**Finding 3** nav atļauja daļēji pārrakstīt `legacyHtml`: vispirms jāiegūst pilns lauks un jāatgriež OWNER pārbaudei.

Findings **1 un 4–19** nemainīt. **DE = STRICT READ-ONLY.**

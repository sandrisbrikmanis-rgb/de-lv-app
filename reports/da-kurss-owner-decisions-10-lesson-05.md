# DA–DE Kurss — OWNER decisions — Lektion 5

Avots: `reports/da-kurss-owner-review-10-lesson-05.md`  
Findings: **1–19** (19 ieraksti)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER pārbaude

- Finding **1**: `Lektion 5` ir korekts.
- Finding **2**: `Wen?, akkusativ, sitzen, fragen og endelsen -in.` ir dabīgs un semantiski precīzs DA formulējums. **NELABOT**.
- Finding **3**: redzamajā HTML ir `Foredrag 5`, kam kursa kontekstā jābūt `Lektion 5`; pilnais `legacyHtml` nav dots, tāpēc pilna lauka replacement bez avota netiek apstiprināts.
- Findings **4–19**: treniņkartīšu DA teikumi ir semantiski atbilstoši un dabiski. **NELABOT**.

## OWNER kopsavilkums

- **LABOT:** 0
- **NELABOT:** 18
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 1
- **PENDING:** 0

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NELABOT	
2	NELABOT	
3	NEEDS_SOURCE_REVIEW	Redzamajā legacyHtml fragmentā ir reāla DA terminoloģijas kļūda: "Foredrag 5" → "Lektion 5". Ievadteksta "Wen?, akkusativ, sitzen, fragen og -in endelse." nozīme ir korekta; stilistiski dabiskāks būtu "Wen?, akkusativ, sitzen, fragen og endelsen -in.", taču pilnais legacyHtml ir saīsināts ar "…". Tāpēc pilnu COPY-ONLY replacement nevar droši apstiprināt. Iegūt pilnu COURSE_LESSON_DATA.kurssLesson5.legacyHtml un atgriezt OWNER pārbaudei. Līdz tam production legacyHtml nemainīt.
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

Šajā OWNER paketē nav neviena pilnībā apstiprināta production `LABOT` ieraksta.

**Finding 3** jāatgriež ar pilnu `legacyHtml` OWNER pārbaudei; līdz tam to nemainīt.

Findings **1–2 un 4–19** nemainīt. **DE = STRICT READ-ONLY.**

# DA–DE Kurss — OWNER decisions — Lektion 1

Avots: `reports/da-kurss-owner-review-10-lesson-01.md`  
Findings: **1–14** (14 ieraksti)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER pārbaude

- Finding **1**: `Lektion 1` ir pareizi.
- Finding **2**: `substantiver` sašaurina LV `vārdiņi` nozīmi līdz lietvārdiem. Izvēlnē jau izmantots dabiskais `ord`; šeit jābūt **`Verber i nutid, ord, grammatik og oversættelse`**.
- Finding **3**: redzamajā HTML ir vairākas reālas DA kļūdas (`Foredrag`, `forelæsning`, `nutid verber`, imperatīvais `oversæt`), bet viss lauks nav dots. Tāpēc pilna lauka aizvietojums bez pilnā avota nav OWNER-apstiprināms.
- Findings **4–14**: visi treniņkartīšu DA teikumi ir dabiski un semantiski atbilst LV/DE pāriem. **NELABOT**.

## OWNER kopsavilkums

- **LABOT:** 1
- **NELABOT:** 12
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 1
- **PENDING:** 0

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NELABOT	
2	LABOT	Verber i nutid, ord, grammatik og oversættelse
3	NEEDS_SOURCE_REVIEW	Redzamajā legacyHtml fragmentā ir reālas DA kļūdas: "Foredrag 1" → "Lektion 1"; "Første forelæsning: nutid verber, navneord, udtale, grammatik og oversæt." → "Første lektion: verber i nutid, ord, udtale, grammatik og oversættelse."; "Nutid verber" → "Verber i nutid". Taču viss legacyHtml ir nogriezts ar "…", tāpēc pilnu COPY-ONLY replacement nevar droši apstiprināt. Iegūt pilnu COURSE_LESSON_DATA.kurssLesson1.legacyHtml un atgriezt OWNER pārbaudei; līdz tam production legacyHtml nemainīt.
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
```

## COPY-ONLY robeža

Šobrīd production drīkst deterministiski mainīt tikai **Finding 2** ar precīzo OWNER tekstu.

**Finding 3** nav atļauja daļēji pārrakstīt `legacyHtml`: vispirms jāiegūst pilns lauks un jāatgriež OWNER pārbaudei.

Findings **1 un 4–14** nemainīt. **DE = STRICT READ-ONLY.**

# DA–DE Kurss — OWNER decisions — Pronominer (statiskais panels)

Avots: `reports/da-kurss-owner-review-04-pronouns.md`  
Findings: **1–8** (8 ieraksti)

**DE = STRICT READ-ONLY.** Labojam tikai DA lokalizācijas failu.

## OWNER piezīme

Finding 1 ir visa `legacyHtml` paneļa jumta finding, savukārt Findings 2–8 precizē reālās kļūdas Nominativ blokā. Tāpēc Finding 1 netiek izmantots pilna HTML pārrakstīšanai: jāveic tikai zemāk apstiprinātie mērķētie labojumi.

Svarīga korekcija auditora priekšlikumam Finding 7:
- `sie` daudzskaitlī = dāņu **de**
- `hende` = “viņu/viņai” sieviešu dzimtē, nevis nominativa daudzskaitļa “viņi/viņas”
- tāpēc OWNER variants ir **`sie — de`**, nevis `sie — de/hende`.

## OWNER kopsavilkums

- **LABOT:** 8
- **NELABOT:** 0
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 0
- **PENDING:** 0

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	LABOT	Nominativ bloka kļūdainos ierakstus labot saskaņā ar Findings 2–8. Virsrakstu/ievadtekstu un pārējo HTML nemainīt.
2	LABOT	Øh — han → er — han
3	LABOT	Du — dig → du — du
4	LABOT	Sie — hun → sie — hun
5	LABOT	Jeg — det → es — det
6	LABOT	Ihr — dig → ihr — I
7	LABOT	Slips — de/hende → sie — de
8	LABOT	Slips — dig (høflighed) → Sie — De (høflighed)
```

## COPY-ONLY robeža

Mainīt tikai norādītās kļūdainās virknes `COURSE_LESSON_HTML.kurssPronounsLesson` Nominativ blokā. Nepārfrāzēt citus DA tekstus, nemainīt struktūru/HTML un neaiztikt DE laukus.

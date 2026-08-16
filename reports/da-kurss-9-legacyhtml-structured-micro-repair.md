# DA–DE Kurss — 9 legacyHtml structured micro-repair

**Generated:** 2026-08-16T18:50:06.979Z
**Dry run:** false

| Metric | Value |
|--------|-------|
| Requested findings | **9** |
| Mapped | **9/9** |
| APPLIED | **9** |
| SKIPPED | **0** |
| OWNER_NEW exact match | **9/9** |
| DE changes | **0** |
| Unexpected changes | **0** |
| Syntax | **PASS** |
| validate-kurss | **PASS** |
| Mirror | **PASS** |

**FINAL STATUS:** PASS

## Per-finding results

| Audit ID | Path | HTML block | CURRENT (sample) | OWNER_NEW (sample) | Result |
|----------|------|------------|------------------|--------------------|--------|
| DA-KURSS-FPR-0069 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#word-list` | word-list kurss-example divs (6) | spielen — at spille • Spil; Nein - nej; Ikke - nej; nein — at arbejde; nicht — a | spielen — at spille; nein — nej; nicht — ikke; arbeiten — at arbejde; fragen — a | **APPLIED** |
| DA-KURSS-FPR-0070 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#pronunciation` | pronunciation kurss-example div | Vārdos ich, nicht, rechnen, zeichnen skaņu ch izrunā mīksti, apmēram tā, kā latv | I ordene ich, nicht, rechnen og zeichnen udtales ch-lyden blødt. | **APPLIED** |
| DA-KURSS-FPR-0071 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml#grammar-examples` | grammar-examples kurss-example divs (4) | Ich recchne; Jeg tirsdag; Eh tut; Var tust du? - Was machst du? | Ich rechne; Ich tue; Er tut; Was tust du? | **APPLIED** |
| DA-KURSS-FPR-0073 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml#word-list` | word-list kurss-example divs (6) | Wer - hvad; Var - hvad; hier — Der Tisch bord; dort — bord; der Tisch — bænk; ei | wer — hvem; was — hvad; hier — her; dort — der; der Tisch — bord; ein Tisch — et | **APPLIED** |
| DA-KURSS-FPR-0076 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml#word-list` | word-list kurss-example divs (5) | nehmen (nēmen) — fjerklædt; zeigen — hvid; schwarz (švarc) — fjer; die Feder (dī | nehmen (nēmen) — at tage; zeigen — at vise; schwarz — sort; die Feder — fjer; hi | **APPLIED** |
| DA-KURSS-FPR-0079 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml#word-list` | word-list kurss-example divs (4) | wen (vēn) — hvad; loben — ros; tadeln — pelt; der Vater (fāter) — langt | wen (vēn) — hvem; loben — at rose; tadeln — at skælde ud; der Vater (fāter) — fa | **APPLIED** |
| DA-KURSS-FPR-0082 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml#word-list` | word-list kurss-example divs (4) | anspitzen (anšpicen) — at spytte; er spitzt an — han spytter; leicht — lys; hier | anspitzen (anšpicen) — at spidse; er spitzt an — han spidser; leicht — let; hier | **APPLIED** |
| DA-KURSS-FPR-0084 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#word-list` | word-list kurss-example divs (6) | singe — song; singt — You; singen Sie — tælle; der Müller — all; öffnen — mirror | singe — syng; singt — synger; singen Sie — syng; der Müller — møller; öffnen — å | **APPLIED** |
| DA-KURSS-FPR-0086 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml#exercise` | exercise summary span + training button text | >Übung / Øvelse</span>; <span class="lesson1-training-text">Fragen - at spørge</ | Øvelse; fragen — at spørge | **APPLIED** |

**DE = STRICT READ-ONLY.**

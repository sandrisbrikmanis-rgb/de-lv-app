# DA–DE Kurss — OWNER decisions — Statiskie HTML paneļi (6)

Avots: `reports/da-kurss-full-audit.md` · `reports/temp/da-kurss-full-audit.json`  
Findings: **1–9** (9 ieraksti)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER decisions

| Finding | Lesson/ID | Path | Statuss | OWNER_DECISION |
|---:|---|---|---|---|
| 1 | `kurssArticlesLesson` | `COURSE_LESSON_HTML.kurssArticlesLesson` | LABOT | No `COURSE_LESSON_HTML.kurssArticlesLesson` izņemt tikai ZERO_WIDTH rakstzīmes. Redzamo dāņu tekstu un HTML struktūru nemainīt. |
| 2 | `kurssPronunciationLesson` | `COURSE_LESSON_HTML.kurssPronunciationLesson` | NEEDS_SOURCE_REVIEW | Panelī ir reāli bojājumi (LV fonētiskās transkripcijas, nepareizi vācu vārdi/tulkojumi un ZERO_WIDTH), bet CURRENT_DA ir saīsināts ar `…`. Iegūt pilnu `COURSE_LESSON_HTML.kurssPronunciationLesson` un pilnu LV MASTER paralēlo paneli; līdz tam visu legacyHtml neaizvietot. |
| 3 | `kurssConsonantsLesson` | `COURSE_LESSON_HTML.kurssConsonantsLesson` | NEEDS_SOURCE_REVIEW | Panelī ir reāli bojājumi (`rāt`, `rēder`, `bāt` u.c., kā arī `Dårlig` vācu `Bad` vietā), bet CURRENT_DA ir saīsināts ar `…`. Iegūt pilnu `COURSE_LESSON_HTML.kurssConsonantsLesson` un pilnu LV MASTER paralēlo paneli; līdz tam visu legacyHtml neaizvietot. |
| 4 | `kurssArticlesLesson` | `COURSE_LESSON_HTML.kurssArticlesLesson` | NEEDS_SOURCE_REVIEW | Luna norāda uz reālu latviešu references atlikumu, taču nav dots precīzs CURRENT_DA teikums/pilns HTML. Iegūt pilnu `COURSE_LESSON_HTML.kurssArticlesLesson` un identificēt precīzo CURRENT substring; tikai tad apstiprināt COPY-ONLY aizvietojumu. |
| 5 | `kurssPronounsLesson` | `COURSE_LESSON_HTML.kurssPronounsLesson` | NEEDS_SOURCE_REVIEW | Intro pats par sevi ir dānisks, bet auditā norādīts, ka tam seko latviešu HTML saturs. Tā kā pilnais `COURSE_LESSON_HTML.kurssPronounsLesson` nav dots, pilnu drošu replacement nevar apstiprināt. Iegūt pilnu paneli un atgriezt OWNER pārbaudei. |
| 6 | `kurssPronunciationLesson` | `COURSE_LESSON_HTML.kurssPronunciationLesson` | LABOT | Mērķēti aizvietot bojāto piemēru `Tarm (få) - godt` ar `gut — god`. Neatstāt LV fonētisko transkripciju `gūt`. Citus `kurssPronunciationLesson` fragmentus šī finding ietvaros nemainīt. |
| 7 | `kurssConsonantsLesson` | `COURSE_LESSON_HTML.kurssConsonantsLesson` | LABOT | Mērķēti aizvietot bojāto piemēru `Dårlig (bāt) - dårlig` ar `Bad — bad`. Neatstāt LV fonētisko transkripciju `bāt`. Ja blakus `Bäder` piemērs production ir bojāts, to šajā finding neimprovizēt bez precīza CURRENT substring. |
| 8 | `kurssVerbBasicsLesson` | `COURSE_LESSON_HTML.kurssVerbBasicsLesson` | NEEDS_SOURCE_REVIEW | Finding apraksts ir pārāk vispārīgs (`nogle overskrifter og infinitivforklaringer er inkonsekvente`) un CURRENT_DA ir saīsināts. Iegūt pilnu `COURSE_LESSON_HTML.kurssVerbBasicsLesson` un konkrētus CURRENT→NEW mērķus; līdz tam production nemainīt. |
| 9 | `kurssSentenceStructureLesson` | `COURSE_LESSON_HTML.kurssSentenceStructureLesson` | LABOT | Negācijas blokā mērķēti saskaņot DA tulkojumus ar vācu teikumiem: `Ich spiele nicht. — Jeg spiller ikke.`; `Paul fragt nicht. — Paul spørger ikke.`; `Er kommt nicht. — Han kommer ikke.`; `Sie singen nicht. — De synger ikke.`. Citu `kurssSentenceStructureLesson` saturu nemainīt. |

## Kopsavilkums

- **LABOT:** 4
- **NELABOT:** 0
- **FALSE_POSITIVE:** 0
- **NEEDS_SOURCE_REVIEW:** 5
- **PENDING:** 0

## OWNER piezīmes

- **#1:** ZERO_WIDTH ir tehnisks netīrums. To drīkst izņemt bez redzamā teksta pārfrāzēšanas.
- **#2/#3:** abos pronunciation/consonants paneļos ir acīmredzami reāli bojājumi, bet pieejamais `CURRENT_DA` ir nogriezts ar `…`; tāpēc nav droši apstiprināt visa `legacyHtml` pārrakstīšanu.
- **#4/#5/#8:** Luna ir identificējusi reālu problēmas tipu, bet nav devusi pietiekamu precīzu CURRENT→NEW mappingu visa HTML lauka drošam COPY-ONLY apply.
- **#6:** Luna `gut (gūt) - god` netiek pieņemts burtiski, jo `gūt` ir LV lasītājam paredzēta fonētiska transkripcija. OWNER variants: **`gut — god`**.
- **#7:** Luna `Bad (bāt) - bad` netiek pieņemts burtiski, jo `bāt` ir LV fonētiska transkripcija. OWNER variants: **`Bad — bad`**.
- **#9:** negācijas pāru semantika ir viennozīmīga, tāpēc četrus konkrētos DA tulkojumus var apstiprināt mērķētam labojumam.
- **DE netiek mainīts nevienā finding.**

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	LABOT	No `COURSE_LESSON_HTML.kurssArticlesLesson` izņemt tikai ZERO_WIDTH rakstzīmes. Redzamo dāņu tekstu un HTML struktūru nemainīt.
2	NEEDS_SOURCE_REVIEW	Panelī ir reāli bojājumi (LV fonētiskās transkripcijas, nepareizi vācu vārdi/tulkojumi un ZERO_WIDTH), bet CURRENT_DA ir saīsināts ar `…`. Iegūt pilnu `COURSE_LESSON_HTML.kurssPronunciationLesson` un pilnu LV MASTER paralēlo paneli; līdz tam visu legacyHtml neaizvietot.
3	NEEDS_SOURCE_REVIEW	Panelī ir reāli bojājumi (`rāt`, `rēder`, `bāt` u.c., kā arī `Dårlig` vācu `Bad` vietā), bet CURRENT_DA ir saīsināts ar `…`. Iegūt pilnu `COURSE_LESSON_HTML.kurssConsonantsLesson` un pilnu LV MASTER paralēlo paneli; līdz tam visu legacyHtml neaizvietot.
4	NEEDS_SOURCE_REVIEW	Luna norāda uz reālu latviešu references atlikumu, taču nav dots precīzs CURRENT_DA teikums/pilns HTML. Iegūt pilnu `COURSE_LESSON_HTML.kurssArticlesLesson` un identificēt precīzo CURRENT substring; tikai tad apstiprināt COPY-ONLY aizvietojumu.
5	NEEDS_SOURCE_REVIEW	Intro pats par sevi ir dānisks, bet auditā norādīts, ka tam seko latviešu HTML saturs. Tā kā pilnais `COURSE_LESSON_HTML.kurssPronounsLesson` nav dots, pilnu drošu replacement nevar apstiprināt. Iegūt pilnu paneli un atgriezt OWNER pārbaudei.
6	LABOT	Mērķēti aizvietot bojāto piemēru `Tarm (få) - godt` ar `gut — god`. Neatstāt LV fonētisko transkripciju `gūt`. Citus `kurssPronunciationLesson` fragmentus šī finding ietvaros nemainīt.
7	LABOT	Mērķēti aizvietot bojāto piemēru `Dårlig (bāt) - dårlig` ar `Bad — bad`. Neatstāt LV fonētisko transkripciju `bāt`. Ja blakus `Bäder` piemērs production ir bojāts, to šajā finding neimprovizēt bez precīza CURRENT substring.
8	NEEDS_SOURCE_REVIEW	Finding apraksts ir pārāk vispārīgs (`nogle overskrifter og infinitivforklaringer er inkonsekvente`) un CURRENT_DA ir saīsināts. Iegūt pilnu `COURSE_LESSON_HTML.kurssVerbBasicsLesson` un konkrētus CURRENT→NEW mērķus; līdz tam production nemainīt.
9	LABOT	Negācijas blokā mērķēti saskaņot DA tulkojumus ar vācu teikumiem: `Ich spiele nicht. — Jeg spiller ikke.`; `Paul fragt nicht. — Paul spørger ikke.`; `Er kommt nicht. — Han kommer ikke.`; `Sie singen nicht. — De synger ikke.`. Citu `kurssSentenceStructureLesson` saturu nemainīt.
```

## COPY-ONLY robeža

- Automātiski drīkst piemērot tikai **#1, #6, #7, #9** un tikai norādītos mērķētos labojumus.
- **#2, #3, #4, #5, #8** production nemainīt, kamēr nav pilns CURRENT_DA/LV MASTER konteksts un precīzs OWNER mapping.
- Nevienu `legacyHtml` lauku nepārrakstīt pilnībā no saīsināta `…` fragmenta.
- **DE = STRICT READ-ONLY.**

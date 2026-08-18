# DA–DE Kurss — OWNER decisions — Lekcijas 1–7 (legacyHtml + saturs)

Avots: `reports/da-kurss-full-luna-owner-review-03-lessons-01-07.md`  
Findings: **1–29** (29 ieraksti)

**DE = STRICT READ-ONLY.** Labojam tikai DA.

## OWNER decisions

| Finding | Lesson/ID | Path | Statuss | OWNER_DECISION |
|---:|---|---|---|---|
| 1 | `lesson1` | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | NEEDS_SOURCE_REVIEW | Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og der findes særskilte konkrete findings nedenfor. Hele feltet må ikke omskrives ud fra dette finding; gennemgå eventuelle rester efter de konkrete OWNER-rettelser. |
| 2 | `lesson2` | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | NEEDS_SOURCE_REVIEW | Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og konkrete fejl behandles i findings 12–15. Hele feltet må ikke omskrives uden fuld CURRENT→NEW mapping. |
| 3 | `lesson3` | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | NEEDS_SOURCE_REVIEW | Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og konkrete fejl behandles i findings 17–20. Hele feltet må ikke omskrives uden fuld CURRENT→NEW mapping. |
| 4 | `lesson4` | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | NEEDS_SOURCE_REVIEW | Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og konkrete fejl behandles i findings 21–23. Kontrollér rester efter disse rettelser; ingen helfelts-omskrivning. |
| 5 | `lesson5` | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml` | NEEDS_SOURCE_REVIEW | Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og en konkret fejl behandles i finding 24. Kontrollér rester efter konkrete rettelser; ingen helfelts-omskrivning. |
| 6 | `lesson6` | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | NEEDS_SOURCE_REVIEW | Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og konkrete fejl behandles i findings 25–28. Hele feltet må ikke omskrives uden fuld CURRENT→NEW mapping. |
| 7 | `lesson7` | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml` | NEEDS_SOURCE_REVIEW | Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet og ingen præcis offending substring er angivet. Find den konkrete LV_DIAC-rest før production ændres. |
| 8 | `lesson1` | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | LABOT | `<h3>Foredrag 1</h3>` → `<h3>Lektion 1</h3>`. |
| 9 | `lesson1` | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | NEEDS_SOURCE_REVIEW | Sætningen er grammatisk bedre med `ordene`, men hele instruktionen bygger på lettiske bogstaver som udtalehjælp og er derfor ikke passende som endelig DA-lokalisering. Revider udtalesystemet mod DA/LV MASTER før production ændres. |
| 10 | `lesson1` | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | NEEDS_SOURCE_REVIEW | Den lettiske sætning skal fjernes/erstattes, men Luna-forslaget bevarer den uønskede reference til `lettiske bogstaver`. Udarbejd en dansk udtaleinstruktion uden lettisk transkriptionssystem før apply. |
| 11 | `lesson1` | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | LABOT | `<strong>remove <span class="lesson1-ending-accent">-da</span></strong>` → `<strong>fjern <span class="lesson1-ending-accent">-en</span></strong>`. |
| 12 | `lesson2` | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | LABOT | `fragen — hvad gør de/de?` → `fragen — at spørge`. |
| 13 | `lesson2` | `COURSE_LESSEN_DATA.kurssLesson2.legacyHtml` | LABOT | `was tut er? — svar` → `was tut er? — hvad laver han?`. |
| 14 | `lesson2` | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | LABOT | `Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.` → `I ordene arbeiten og zeichnen udtales diftongen ei omtrent som dansk „aj“.` |
| 15 | `lesson2` | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | LABOT | `[Hvem spørger?]{.lesson1-training-text}` → `<span class="lesson1-training-text">Hvem spørger?</span>`. |
| 16 | `lesson3` | `COURSE_LESSON_DATA.kurssLesson3.subtitle` | LABOT | `Artikler, stedsord og oversættelse` → `Dialoger, ord, udtale, grammatik og oversættelse`. |
| 17 | `lesson3` | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | LABOT | `wer — her` → `wer — hvem`. |
| 18 | `lesson3` | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | LABOT | `die Bank — ligge ned` → `die Bank — bænk`. |
| 19 | `lesson3` | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | LABOT | `Ja galotne -Er hvad? spørger om emner.` → `Med was? spørger man om genstande.` |
| 20 | `lesson3` | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | LABOT | `Hier hängt en karte.` → `Hier hängt eine Karte.` |
| 21 | `lesson4` | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | LABOT | `er nimmt (nimt) — fjerklædt` → `er nimmt — han tager`. Fjern den ikke-danske/LV-baserede transkription `(nimt)` i samme mål. |
| 22 | `lesson4` | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | LABOT | `der Federhalter (dēr fēderhalter) — show` → `der Federhalter — penneholder`. Fjern LV-baseret transkription i samme mål. |
| 23 | `lesson4` | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml` | LABOT | `Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).` → `Når h fungerer som længdemarkør, udtales det ikke som en selvstændig lyd: nehmen.` |
| 24 | `lesson5` | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml` | LABOT | `Daudz sieviešu kārtas vārdu atvasina med gal.”-Dø Lehrerin` → `Mange feminine personbetegnelser dannes med endelsen -in: die Lehrerin.` |
| 25 | `lesson6` | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | LABOT | `liegt — er, er, ligger` → `liegt — ligger`. |
| 26 | `lesson6` | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | LABOT | `En fordoblet eu udtales som oi: neun (noin).` → `Diftongen eu udtales omtrent som dansk „øj“: neun.` |
| 27 | `lesson6` | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | LABOT | `Piemēri: fünf, der Schlüssel (šlūsel).` → `Eksempler: fünf, der Schlüssel.` |
| 28 | `lesson6` | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml` | LABOT | `Vīriešu un vidējās kārtas lietvārdi ar galotni -die Mütter (mødre) • Die Tochter (datter) — die Töchter (døtre).` → `Maskuline og neutrale substantiver med endelsen -er, -el eller -en får ofte ingen endelse i flertal.` |
| 29 | `lesson5` | `lesson5TrainingCardsDa[9].front` | FALSE_POSITIVE | Behold `Nej, eleven svarer ikke dårligt, hun svarer godt.` Dansk `eleven` er fælleskøn og kan naturligt betegne både en mandlig og en kvindelig elev; pronomenet `hun` gør referenten entydig. `Elevinden` er ikke nødvendig og virker mindre neutral/moderne. |

## Kopsavilkums

- **LABOT:** 19
- **FALSE_POSITIVE:** 1
- **NELABOT:** 0
- **NEEDS_SOURCE_REVIEW:** 9
- **PENDING:** 0

## OWNER principi šim blokam

- Findings **1–7** ir plaši deterministiski `legacyHtml` umbrella-findings ar saīsinātu CURRENT. Tos nedrīkst izmantot visa HTML lauka pārrakstīšanai.
- Konkrētajiem findings tiek dots precīzs CURRENT→NEW, kur avots to ļauj.
- LV lasītājam paredzētās fonētiskās transkripcijas netiek pārnestas uz DA kā šķietami dāņu izruna.
- **#9/#10** netiek akli laboti pēc Luna varianta, jo abi turpinātu uzturēt atsauci uz lettiskajiem burtiem.
- **#29 ir FALSE_POSITIVE:** dāņu `eleven` nav vīriešu dzimtes forma; tas ir fælleskøn un teikums ar `hun` ir dabisks un nepārprotams.
- **DE = STRICT READ-ONLY.**

## Copy/paste — atgriešanai agentam

Formāts: `Finding<TAB>Statuss<TAB>OWNER_DECISION`

```text
1	NEEDS_SOURCE_REVIEW	Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og der findes særskilte konkrete findings nedenfor. Hele feltet må ikke omskrives ud fra dette finding; gennemgå eventuelle rester efter de konkrete OWNER-rettelser.
2	NEEDS_SOURCE_REVIEW	Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og konkrete fejl behandles i findings 12–15. Hele feltet må ikke omskrives uden fuld CURRENT→NEW mapping.
3	NEEDS_SOURCE_REVIEW	Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og konkrete fejl behandles i findings 17–20. Hele feltet må ikke omskrives uden fuld CURRENT→NEW mapping.
4	NEEDS_SOURCE_REVIEW	Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og konkrete fejl behandles i findings 21–23. Kontrollér rester efter disse rettelser; ingen helfelts-omskrivning.
5	NEEDS_SOURCE_REVIEW	Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og en konkret fejl behandles i finding 24. Kontrollér rester efter konkrete rettelser; ingen helfelts-omskrivning.
6	NEEDS_SOURCE_REVIEW	Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet, og konkrete fejl behandles i findings 25–28. Hele feltet må ikke omskrives uden fuld CURRENT→NEW mapping.
7	NEEDS_SOURCE_REVIEW	Deterministisk umbrella-finding for hele `legacyHtml`. CURRENT_DA er afkortet og ingen præcis offending substring er angivet. Find den konkrete LV_DIAC-rest før production ændres.
8	LABOT	`<h3>Foredrag 1</h3>` → `<h3>Lektion 1</h3>`.
9	NEEDS_SOURCE_REVIEW	Sætningen er grammatisk bedre med `ordene`, men hele instruktionen bygger på lettiske bogstaver som udtalehjælp og er derfor ikke passende som endelig DA-lokalisering. Revider udtalesystemet mod DA/LV MASTER før production ændres.
10	NEEDS_SOURCE_REVIEW	Den lettiske sætning skal fjernes/erstattes, men Luna-forslaget bevarer den uønskede reference til `lettiske bogstaver`. Udarbejd en dansk udtaleinstruktion uden lettisk transkriptionssystem før apply.
11	LABOT	`<strong>remove <span class="lesson1-ending-accent">-da</span></strong>` → `<strong>fjern <span class="lesson1-ending-accent">-en</span></strong>`.
12	LABOT	`fragen — hvad gør de/de?` → `fragen — at spørge`.
13	LABOT	`was tut er? — svar` → `was tut er? — hvad laver han?`.
14	LABOT	`Vārdos arbeiten, zeichnen divskani ei izrunā apmēram kā latviešu plato e skaņu, kam seko i.` → `I ordene arbeiten og zeichnen udtales diftongen ei omtrent som dansk „aj“.`
15	LABOT	`[Hvem spørger?]{.lesson1-training-text}` → `<span class="lesson1-training-text">Hvem spørger?</span>`.
16	LABOT	`Artikler, stedsord og oversættelse` → `Dialoger, ord, udtale, grammatik og oversættelse`.
17	LABOT	`wer — her` → `wer — hvem`.
18	LABOT	`die Bank — ligge ned` → `die Bank — bænk`.
19	LABOT	`Ja galotne -Er hvad? spørger om emner.` → `Med was? spørger man om genstande.`
20	LABOT	`Hier hängt en karte.` → `Hier hängt eine Karte.`
21	LABOT	`er nimmt (nimt) — fjerklædt` → `er nimmt — han tager`. Fjern den ikke-danske/LV-baserede transkription `(nimt)` i samme mål.
22	LABOT	`der Federhalter (dēr fēderhalter) — show` → `der Federhalter — penneholder`. Fjern LV-baseret transkription i samme mål.
23	LABOT	`Ja h ir garumzīme, to neizrunā kā skaņu: nehmen (nēmen).` → `Når h fungerer som længdemarkør, udtales det ikke som en selvstændig lyd: nehmen.`
24	LABOT	`Daudz sieviešu kārtas vārdu atvasina med gal.”-Dø Lehrerin` → `Mange feminine personbetegnelser dannes med endelsen -in: die Lehrerin.`
25	LABOT	`liegt — er, er, ligger` → `liegt — ligger`.
26	LABOT	`En fordoblet eu udtales som oi: neun (noin).` → `Diftongen eu udtales omtrent som dansk „øj“: neun.`
27	LABOT	`Piemēri: fünf, der Schlüssel (šlūsel).` → `Eksempler: fünf, der Schlüssel.`
28	LABOT	`Vīriešu un vidējās kārtas lietvārdi ar galotni -die Mütter (mødre) • Die Tochter (datter) — die Töchter (døtre).` → `Maskuline og neutrale substantiver med endelsen -er, -el eller -en får ofte ingen endelse i flertal.`
29	FALSE_POSITIVE	Behold `Nej, eleven svarer ikke dårligt, hun svarer godt.` Dansk `eleven` er fælleskøn og kan naturligt betegne både en mandlig og en kvindelig elev; pronomenet `hun` gør referenten entydig. `Elevinden` er ikke nødvendig og virker mindre neutral/moderne.
```

## COPY-ONLY robeža

Apply drīkst veikt tikai ierakstiem ar **Statuss = LABOT**, precīzi pēc OWNER_DECISION.  
**NEEDS_SOURCE_REVIEW** un **FALSE_POSITIVE** production nemainīt.  
Pirms katra apply: actual current value/substr === OWNER norādītais CURRENT mērķis; mismatch → **SKIP**, nevis minēt.

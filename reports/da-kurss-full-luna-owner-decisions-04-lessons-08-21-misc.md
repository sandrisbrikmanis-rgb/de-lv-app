# DA–DE Kurss — OWNER decisions — Lekcijas 8–21, training, UI

Avots: `reports/da-kurss-full-luna-owner-review-04-lessons-08-21-misc.md`  
Findings: **1–13**

**DE = STRICT READ-ONLY.** Labojam tikai DA.

| Finding | Lesson/ID | Path | Statuss | OWNER_DECISION |
|---:|---|---|---|---|
| 1 | `lesson8` | `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[27].lv` | LABOT | `Tal ikke stille!` → `Tal ikke lavt!` |
| 2 | `lesson8` | `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[33].lv` | LABOT | `Tal ikke stille!` → `Tal ikke lavt!` |
| 3 | `lesson11` | `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[0].text` | LABOT | `Hjælpeverbet haben på tysk udtrykker begrebet tilhørsforhold. På dansk udtrykkes det ofte med: Jeg har, du har, han har osv.` → `Verbet haben på tysk udtrykker blandt andet besiddelse. På dansk svarer det her til: jeg har, du har, han har osv.` |
| 4 | `lesson12` | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[7].lv` | FALSE_POSITIVE | Behold `Han hedder Jan.` Fiktive eksempelnavne må lokaliseres naturligt til målsproget; DA behøver ikke kopiere DE-navnet `Johann`, så længe personens identitet og konsistens i det relaterede kursusindhold bevares. |
| 5 | `lesson12` | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[14].lv` | FALSE_POSITIVE | Behold `Frans er den største.` Fiktive eksempelnavne må lokaliseres til naturlige danske former; der er ikke krav om bogstavtro `Franz`-paritet med DE. |
| 6 | `lesson12` | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[20].lv` | FALSE_POSITIVE | Behold `Deres navne er Elsa, Marta og Alma.` `Marta` er en naturlig lokaliseret form; fiktive eksempelnavne behøver ikke være identiske med DE `Martha`. |
| 7 | `lesson13` | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].lv` | FALSE_POSITIVE | Behold `Nej, Robert og Jan laver ikke gymnastik.` `Jan` er den lokaliserede DA-form for den fiktive `Johann`; ændring tilbage til `Johann` er ikke nødvendig. |
| 8 | `lesson19` | `COURSE_LESSON_DATA.kurssLesson19.intro` | LABOT | `Nittende lektion: vor, hinter, unter, über, neben, zwischen med Akkusativ eller Dativ.` → `Nittende lektion: vor, hinter, unter, über, neben, zwischen med akkusativ eller dativ.` |
| 9 | `lesson20` | `COURSE_LESSON_DATA.kurssLesson20.sections[1].items[11]` | LABOT | `der Boden — loft / gulv / jord` → `der Boden — gulv / jord / bund` |
| 10 | `lesson20` | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[3].lv` | LABOT | `Hvad er væggene lavet af?` → `Hvad er murene lavet af?` |
| 11 | `lesson20` | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[6].lv` | LABOT | `Hvor er ti lejligheder?` → `Hvor er der ti lejligheder?` |
| 12 | `lesson20` | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[9].lv` | NEEDS_SOURCE_REVIEW | DA `Hvor er loftet?` stemmer ikke med DE `Wo ist der Boden?`, mens auditten oplyser, at LV MASTER støtter DA. DE er STRICT READ-ONLY, så ingen DA-ændring må foretages, før kilde/paritet er OWNER-afklaret. |
| 13 | `ui` | `LANGUAGE_UI_STRINGS.kurss.hints.exerciseCardAria` | LABOT | `{title} øvelseskort` → `Øvelseskort: {title}` |

## Kopsavilkums

- **LABOT:** 8
- **FALSE_POSITIVE:** 4
- **NELABOT:** 0
- **NEEDS_SOURCE_REVIEW:** 1
- **PENDING:** 0

## OWNER piezīmes

- **#4–#7 = FALSE_POSITIVE.** Fiktīvie/example personvārdi DA kursā drīkst būt lokalizēti dabiskās dāņu formās; DE vārdu burtiska kopēšana nav kvalitātes prasība.
- **#12 = NEEDS_SOURCE_REVIEW.** DA/LV un DE semantika konfliktē; DE ir STRICT READ-ONLY.
- **#3** precizēts arī terminoloģiski: `haben` šajā kontekstā nav jāsauc par palīgdarbības vārdu, ja tiek mācīta tā leksiskā nozīme “būt / piederēt, būt īpašumā”.
- Pārējie LABOT ir precīzi DA valodas vai UI labojumi.

## Copy/paste — atgriešanai agentam

```text
1	LABOT	`Tal ikke stille!` → `Tal ikke lavt!`
2	LABOT	`Tal ikke stille!` → `Tal ikke lavt!`
3	LABOT	`Hjælpeverbet haben på tysk udtrykker begrebet tilhørsforhold. På dansk udtrykkes det ofte med: Jeg har, du har, han har osv.` → `Verbet haben på tysk udtrykker blandt andet besiddelse. På dansk svarer det her til: jeg har, du har, han har osv.`
4	FALSE_POSITIVE	Behold `Han hedder Jan.` Fiktive eksempelnavne må lokaliseres naturligt til målsproget; DA behøver ikke kopiere DE-navnet `Johann`, så længe personens identitet og konsistens i det relaterede kursusindhold bevares.
5	FALSE_POSITIVE	Behold `Frans er den største.` Fiktive eksempelnavne må lokaliseres til naturlige danske former; der er ikke krav om bogstavtro `Franz`-paritet med DE.
6	FALSE_POSITIVE	Behold `Deres navne er Elsa, Marta og Alma.` `Marta` er en naturlig lokaliseret form; fiktive eksempelnavne behøver ikke være identiske med DE `Martha`.
7	FALSE_POSITIVE	Behold `Nej, Robert og Jan laver ikke gymnastik.` `Jan` er den lokaliserede DA-form for den fiktive `Johann`; ændring tilbage til `Johann` er ikke nødvendig.
8	LABOT	`Nittende lektion: vor, hinter, unter, über, neben, zwischen med Akkusativ eller Dativ.` → `Nittende lektion: vor, hinter, unter, über, neben, zwischen med akkusativ eller dativ.`
9	LABOT	`der Boden — loft / gulv / jord` → `der Boden — gulv / jord / bund`
10	LABOT	`Hvad er væggene lavet af?` → `Hvad er murene lavet af?`
11	LABOT	`Hvor er ti lejligheder?` → `Hvor er der ti lejligheder?`
12	NEEDS_SOURCE_REVIEW	DA `Hvor er loftet?` stemmer ikke med DE `Wo ist der Boden?`, mens auditten oplyser, at LV MASTER støtter DA. DE er STRICT READ-ONLY, så ingen DA-ændring må foretages, før kilde/paritet er OWNER-afklaret.
13	LABOT	`{title} øvelseskort` → `Øvelseskort: {title}`
```

## COPY-ONLY

Apply tikai **LABOT** ierakstiem.  
**FALSE_POSITIVE** un **NEEDS_SOURCE_REVIEW** production nemainīt.  
Pirms apply pārbaudīt actual CURRENT; mismatch → **SKIP**.  
DE lauki: **0 izmaiņas**.

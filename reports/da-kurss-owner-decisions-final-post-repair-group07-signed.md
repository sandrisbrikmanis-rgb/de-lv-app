# DA–DE Kurss — OWNER decisions — final post-repair Group 07

Avots: final post-repair audit · Findings **301–330** (30 ieraksti)

**DE = STRICT READ-ONLY.**

| Audit ID | Lesson/ID | Path | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Category | Statuss | OWNER_DECISION |
|---|---|---|---|---|---|---|---|---|---|
| `DA-KURSS-FPR-0301` | `lesson20` | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[6].lv` | Wo sind zehn Wohnungen? | Hvor er de ti lejligheder? | Hvor er ti lejligheder? | LOW | SEMANTICS | LABOT | Hvor er ti lejligheder? |
| `DA-KURSS-FPR-0302` | `lesson20` | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[11].lv` | Wohin steigt der Schornsteinfeger? | Hvor går skorstensfejeren hen? | Hvor klatrer skorstensfejeren hen? | MEDIUM | SEMANTICS | LABOT | Hvor klatrer skorstensfejeren hen? |
| `DA-KURSS-FPR-0303` | `lesson20` | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[21].lv` | Wohin steckst du das Holz? | Hvor putter du brændet? | Hvor putter du brændet hen? | LOW | SEMANTICS | LABOT | Hvor putter du brændet hen? |
| `DA-KURSS-FPR-0304` | `lesson21` | `COURSE_LESSON_DATA.kurssLesson21.sections[1].title` | — | Navne | Ord | MEDIUM | SEMANTICS | LABOT | Ord |
| `DA-KURSS-FPR-0305` | `lesson21` | `COURSE_LESSON_DATA.kurssLesson21.sections[1].items[19]` | fleißig | fleißig — flittigt | fleißig — flittig | MEDIUM | GRAMMAR | LABOT | fleißig — flittig |
| `DA-KURSS-FPR-0306` | `lesson21` | `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[1].text` | — | Forholdet von kan smelte sammen med artiklen. | Præpositionen von kan smelte sammen med artiklen. | HIGH | TRANSLATION | LABOT | Præpositionen von kan smelte sammen med artiklen. |
| `DA-KURSS-FPR-0307` | `lesson21` | `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[10].lv` | Wir kommen vom Freunde. | Vi kommer fra en ven. | Vi kommer fra vennen. | MEDIUM | SEMANTICS | LABOT | Vi kommer fra vennen. |
| `DA-KURSS-FPR-0308` | `lesson21` | `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[11].lv` | Wir kommen von der Freundin. | Vi kommer fra en kæreste. | Vi kommer fra kæresten. | MEDIUM | SEMANTICS | LABOT | Vi kommer fra veninden. |
| `DA-KURSS-FPR-0309` | `lesson21` | `COURSE_LESSON_DATA.kurssLesson21.sections[5].cards[13].lv` | Alle kommen vom Freunde, von der Freundin, vom Lehrer. | Alle kommer fra en ven, fra en kæreste, fra en lærer. | Alle kommer fra vennen, fra kæresten, fra læreren. | MEDIUM | SEMANTICS | LABOT | Alle kommer fra vennen, fra veninden, fra læreren. |
| `DA-KURSS-FPR-0310` | `lesson2` | `lesson2TrainingCardsDa[5].front` | Singen Paul und Marie? | Synger Paul og Maria? | Synger Paul og Marie? | MEDIUM | NAMES | LABOT | Synger Paul og Marie? |
| `DA-KURSS-FPR-0311` | `lesson2` | `lesson2TrainingCardsDa[10].front` | Ja, wir zeichnen, aber Marie spielt. | Ja, vi tegner, men Maria spiller. | Ja, vi tegner, men Marie spiller. | MEDIUM | NAMES | LABOT | Ja, vi tegner, men Marie spiller. |
| `DA-KURSS-FPR-0312` | `lesson3` | `lesson3TrainingCardsDa[0].front` | Rechnest du? | Tæller du? | Regner du? | HIGH | SEMANTICS | LABOT | Regner du? |
| `DA-KURSS-FPR-0313` | `lesson3` | `lesson3TrainingCardsDa[2].front` | Was steht dort? | Hvad står der? | Hvad står derovre? | MEDIUM | SEMANTICS | LABOT | Hvad står derovre? |
| `DA-KURSS-FPR-0314` | `lesson3` | `lesson3TrainingCardsDa[3].front` | Dort steht ein Tisch. | Der er et bord. | Der står et bord. | HIGH | SEMANTICS | LABOT | Derovre står et bord. |
| `DA-KURSS-FPR-0315` | `lesson4` | `lesson4TrainingCardsDa[0].front` | Das Mädchen nimmt einen Federhalter. | Pigen tager en fyldepenholder. | Pigen tager en penneholder. | MEDIUM | TRANSLATION | NELABOT | Saglabāt CURRENT_DA: Pigen tager en fyldepenholder. |
| `DA-KURSS-FPR-0316` | `lesson4` | `lesson4TrainingCardsDa[1].front` | Der Federhalter ist nicht weiß, er ist schwarz. | Fyldepenholderen er ikke hvid, den er sort. | Penneholderen er ikke hvid, den er sort. | MEDIUM | CONSISTENCY | NELABOT | Saglabāt CURRENT_DA: Fyldepenholderen er ikke hvid, den er sort. |
| `DA-KURSS-FPR-0317` | `lesson4` | `lesson4TrainingCardsDa[2].front` | Paul nimmt eine Feder. | Paul tager fjeren. | Paul tager en fjer. | MEDIUM | GRAMMAR | LABOT | Paul tager en fjer. |
| `DA-KURSS-FPR-0318` | `lesson4` | `lesson4TrainingCardsDa[11].front` | Es geht hinaus und arbeitet. | Hun går ud og arbejder. | **Problēma:** DA correctly uses Hun according to the context and source reference; DE incorrectly uses the neuter pronoun Es. | MEDIUM | TRANSLATION | NEEDS_SOURCE_REVIEW | DA saglabāt nemainītu: Hun går ud og arbejder. DE ir STRICT READ-ONLY; finding norāda uz iespējamu DE avota vietniekvārda problēmu. |
| `DA-KURSS-FPR-0319` | `lesson4` | `lesson4TrainingCardsDa[13].front` | Olga zeigt ein Buch. | Olga viser bogen frem. | Olga viser en bog frem. | MEDIUM | SEMANTICS | LABOT | Olga viser en bog frem. |
| `DA-KURSS-FPR-0320` | `lesson5` | `lesson5TrainingCardsDa[9].front` | Nein, die Schülerin antwortet nicht schlecht, sie antwortet gut. | Nej, eleven svarer ikke dårligt, hun svarer godt. | Nej, elevinden svarer ikke dårligt, hun svarer godt. | MEDIUM | CONSISTENCY | NELABOT | Saglabāt CURRENT_DA: Nej, eleven svarer ikke dårligt, hun svarer godt. |
| `DA-KURSS-FPR-0321` | `lesson5` | `lesson5TrainingCardsDa[10].front` | Das Mädchen nimmt den Federhalter, die Feder und das Messer. | Pigen tager en penneholder, en pen og en kniv. | Pigen tager penneholderen, fjeren og kniven. | HIGH | TRANSLATION | LABOT | Pigen tager fyldepenholderen, fjeren og kniven. |
| `DA-KURSS-FPR-0322` | `lesson6` | `lesson6TrainingCardsDa[7].front` | Wieviel Teller? | Hvor mange plader? | Hvor mange tallerkener? | MEDIUM | TRANSLATION | LABOT | Hvor mange tallerkener? |
| `DA-KURSS-FPR-0323` | `lesson6` | `lesson6TrainingCardsDa[16].front` | Der Lehrer nimmt ein Messer und spitzt den Bleistift an. | Læreren tager en kniv og spidser en blyant. | Læreren tager en kniv og spidser blyanten. | MEDIUM | SEMANTICS | LABOT | Læreren tager en kniv og spidser blyanten. |
| `DA-KURSS-FPR-0324` | `lesson6` | `lesson6TrainingCardsDa[18].front` | Das ist ein Federhalter. | Det er en fyldepenholder. | Det er en penneholder. | MEDIUM | TRANSLATION | NELABOT | Saglabāt CURRENT_DA: Det er en fyldepenholder. |
| `DA-KURSS-FPR-0325` | `lesson6` | `lesson6TrainingCardsDa[19].front` | Wie ist der Federhalter? | Hvordan er fyldepenholderen? | Hvordan er penneholderen? | MEDIUM | TRANSLATION | NELABOT | Saglabāt CURRENT_DA: Hvordan er fyldepenholderen? |
| `DA-KURSS-FPR-0326` | `lesson6` | `lesson6TrainingCardsDa[20].front` | Der Federhalter ist schwarz. | Fyldepenholderen er sort. | Penneholderen er sort. | MEDIUM | TRANSLATION | NELABOT | Saglabāt CURRENT_DA: Fyldepenholderen er sort. |
| `DA-KURSS-FPR-0327` | `ui` | `LANGUAGE_UI_STRINGS.kurss.pronounsDesc` | — | Nominativ, Akkusativ og Dativ former. | Former i nominativ, akkusativ og dativ. | LOW | GRAMMAR | LABOT | Former i nominativ, akkusativ og dativ. |
| `DA-KURSS-FPR-0328` | `ui` | `LANGUAGE_UI_STRINGS.kurss.verbBasics` | — | Verbets grundlag | Grundlæggende verber | MEDIUM | NATURALNESS | LABOT | Grundlæggende verber |
| `DA-KURSS-FPR-0329` | `ui` | `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formIhr` | — | Form 2/3: I (flertal) | Form 2/3: Ihr (flertal) | MEDIUM | TRANSLATION | LABOT | Form 2/3: Ihr (flertal) |
| `DA-KURSS-FPR-0330` | `ui` | `LANGUAGE_UI_STRINGS.kurss.lessonItems.11.menuDesc` | — | Haben, kein/keine/keinen, ejedord og sammensatte substantiver. | Haben, kein/keine/keinen, ejestedord og sammensatte substantiver. | MEDIUM | GRAMMAR | LABOT | Haben, kein/keine/keinen, ejestedord og sammensatte substantiver. |

## OWNER kopsavilkums

- Pārskatīti: **30/30**
- LABOT: **23**
- NELABOT: **6**
- FALSE_POSITIVE: **0**
- NEEDS_SOURCE_REVIEW: **1**
- DE izmaiņas: **0**

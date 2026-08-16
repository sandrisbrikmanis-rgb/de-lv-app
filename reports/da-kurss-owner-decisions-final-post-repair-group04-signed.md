# DA–DE Kurss — OWNER decisions — final post-repair Group 04

Avots: final post-repair audit · Findings **151–200** (50 ieraksti)

Aizpildi tabulu. **DE = STRICT READ-ONLY.**

| Audit ID | Lesson/ID | Path | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Category | Statuss | OWNER_DECISION |
|----------|-----------|------|------------|------------|-------------|----------|----------|---------|----------------|
| DA-KURSS-FPR-0151 | `lesson13` | `COURSE_LESSON_DATA.kurssLesson13.sections[5].…` | Nein, Robert und Johann turnen nicht. | Nej, Robert og Jan laver ikke gymnastik. | Nej, Robert og Johann laver ikke gymnast… | HIGH | NAMES | NELABOT | Saglabāt CURRENT_DA. “Jan” ir dabiski lokalizēts piemēra personvārds; nav jāmaina uz DE “Johann”. |
| DA-KURSS-FPR-0152 | `lesson13` | `COURSE_LESSON_DATA.kurssLesson13.sections[5].…` | Robert und Johann, turnt! | Robert og Jan, motionér! | Robert og Johann, motionér! | HIGH | NAMES | NELABOT | Saglabāt CURRENT_DA. “Jan” ir dabiski lokalizēts piemēra personvārds; nav jāmaina uz DE “Johann”. |
| DA-KURSS-FPR-0153 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.intro` |  | Foredrag fjorten: Modale verber müssen, … | Lektion fjorten: Modale verber müssen, w… | HIGH | SEMANTICS | LABOT | Lektion fjorten: Modale verber müssen, wollen og mögen. |
| DA-KURSS-FPR-0154 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | müssen | müssen — need / have to do | müssen — at skulle / være nødt til | MEDIUM | FOREIGN_REMNANT | LABOT | müssen — at skulle / være nødt til |
| DA-KURSS-FPR-0155 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | ich muss | ich muss — I need / I have to do | ich muss — jeg skal / jeg er nødt til | MEDIUM | FOREIGN_REMNANT | LABOT | ich muss — jeg skal / jeg er nødt til |
| DA-KURSS-FPR-0156 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | du musst | du musst — you need / you must do | du musst — du skal / du er nødt til | MEDIUM | FOREIGN_REMNANT | LABOT | du musst — du skal / du er nødt til |
| DA-KURSS-FPR-0157 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | er muss | er muss — he needs / he has to | er muss — han skal / han er nødt til | MEDIUM | FOREIGN_REMNANT | LABOT | er muss — han skal / han er nødt til |
| DA-KURSS-FPR-0158 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | sie muss | sie muss — she needs / she has to | sie muss — hun skal / hun er nødt til | MEDIUM | FOREIGN_REMNANT | LABOT | sie muss — hun skal / hun er nødt til |
| DA-KURSS-FPR-0159 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | es muss | es muss — it needs / it has to do | es muss — det skal / det er nødt til | MEDIUM | FOREIGN_REMNANT | LABOT | es muss — det skal / det er nødt til |
| DA-KURSS-FPR-0160 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | wir müssen | wir müssen — we need / we have to do | wir müssen — vi skal / vi er nødt til | MEDIUM | FOREIGN_REMNANT | LABOT | wir müssen — vi skal / vi er nødt til |
| DA-KURSS-FPR-0161 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | ihr müsst | ihr müsst — you need / you must | ihr müsst — I skal / I er nødt til | MEDIUM | FOREIGN_REMNANT | LABOT | ihr müsst — I skal / I er nødt til |
| DA-KURSS-FPR-0162 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | sie müssen | sie müssen — they / they need | sie müssen — de skal / de er nødt til | MEDIUM | FOREIGN_REMNANT | LABOT | sie müssen — de skal / de er nødt til |
| DA-KURSS-FPR-0163 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | lernen | lernen — to learn | lernen — at lære | MEDIUM | FOREIGN_REMNANT | LABOT | lernen — at lære |
| DA-KURSS-FPR-0164 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | vorwärts | vorwärts — forward | vorwärts — fremad | MEDIUM | FOREIGN_REMNANT | LABOT | vorwärts — fremad |
| DA-KURSS-FPR-0165 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | vorwärts kommen | vorwärts kommen — to get ahead | vorwärts kommen — at komme fremad | MEDIUM | FOREIGN_REMNANT | LABOT | vorwärts kommen — at komme fremad |
| DA-KURSS-FPR-0166 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | wollen | wollen — to want | wollen — at ville | MEDIUM | FOREIGN_REMNANT | LABOT | wollen — at ville |
| DA-KURSS-FPR-0167 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | er will | er will — he wants | er will — han vil | MEDIUM | FOREIGN_REMNANT | LABOT | er will — han vil |
| DA-KURSS-FPR-0168 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | sie will | sie will — she wants | sie will — hun vil | MEDIUM | FOREIGN_REMNANT | LABOT | sie will — hun vil |
| DA-KURSS-FPR-0169 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | wir wollen | wir wollen — we want | wir wollen — vi vil | MEDIUM | FOREIGN_REMNANT | LABOT | wir wollen — vi vil |
| DA-KURSS-FPR-0170 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | ihr wollt | ihr wollt — you want | ihr wollt — I vil | MEDIUM | FOREIGN_REMNANT | LABOT | ihr wollt — I vil |
| DA-KURSS-FPR-0171 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | sie wollen | sie wollen — they / they want | sie wollen — de vil | MEDIUM | FOREIGN_REMNANT | LABOT | sie wollen — de vil |
| DA-KURSS-FPR-0172 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | mögen | mögen — want / want / like | mögen — at ville / at ønske / at kunne l… | MEDIUM | FOREIGN_REMNANT | LABOT | mögen — at kunne lide |
| DA-KURSS-FPR-0173 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | ich mag | ich mag — I want / I like | ich mag — jeg vil / jeg kan lide | MEDIUM | FOREIGN_REMNANT | LABOT | ich mag — jeg kan lide |
| DA-KURSS-FPR-0174 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | du magst | du magst — you want / you like | du magst — du vil / du kan lide | MEDIUM | FOREIGN_REMNANT | LABOT | du magst — du kan lide |
| DA-KURSS-FPR-0175 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | er mag | er mag — he wants / he likes | er mag — han vil / han kan lide | MEDIUM | FOREIGN_REMNANT | LABOT | er mag — han kan lide |
| DA-KURSS-FPR-0176 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | sie mag | sie mag — she wants / she likes | sie mag — hun vil / hun kan lide | MEDIUM | FOREIGN_REMNANT | LABOT | sie mag — hun kan lide |
| DA-KURSS-FPR-0177 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | es mag | es mag — it wants / it likes | es mag — det vil / det kan lide | MEDIUM | FOREIGN_REMNANT | LABOT | es mag — det kan lide |
| DA-KURSS-FPR-0178 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | wir mögen | wir mögen — we want | wir mögen — vi vil / vi kan lide | MEDIUM | FOREIGN_REMNANT | LABOT | wir mögen — vi kan lide |
| DA-KURSS-FPR-0179 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | ihr mögt | ihr mögt — you want | ihr mögt — I vil / I kan lide | MEDIUM | FOREIGN_REMNANT | LABOT | ihr mögt — I kan lide |
| DA-KURSS-FPR-0180 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | sie mögen | sie mögen — they / she wants | sie mögen — de vil / de kan lide | MEDIUM | FOREIGN_REMNANT | LABOT | sie mögen — de kan lide |
| DA-KURSS-FPR-0181 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | munden | munden — to taste good | munden — at smage godt | MEDIUM | FOREIGN_REMNANT | LABOT | munden — at smage godt |
| DA-KURSS-FPR-0182 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | ihm | ihm — to him | ihm — til ham | MEDIUM | FOREIGN_REMNANT | LABOT | ihm — til ham |
| DA-KURSS-FPR-0183 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | ihr | ihr — for her | ihr — til hende | MEDIUM | FOREIGN_REMNANT | LABOT | ihr — til hende |
| DA-KURSS-FPR-0184 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[1].…` | ihnen | ihnen — for them / them | ihnen — til dem | MEDIUM | FOREIGN_REMNANT | LABOT | ihnen — til dem |
| DA-KURSS-FPR-0185 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[2].…` |  | I nuværende ental er 1. og 3. personer e… | I nutid ental er 1. og 3. person ens. | MEDIUM | GRAMMAR | LABOT | I nutid ental er 1. og 3. person ens. |
| DA-KURSS-FPR-0186 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[3].…` |  | ß skrives i midten eller slutningen af e… | ß skrives i midten eller slutningen af e… | HIGH | SEMANTICS | LABOT | ß skrives i midten eller slutningen af et ord efter en lang vokal eller en diftong: die Füße, die Straße. Efter en kort vokal skrives ss: ich muss, er muss. |
| DA-KURSS-FPR-0187 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[3].…` |  | Hvis andre former har ss, kan ß stå før … | Efter en lang vokal eller en diftong skr… | HIGH | SEMANTICS | LABOT | Efter en lang vokal eller en diftong skrives ß også foran en endelse, fx Füße og heißt. |
| DA-KURSS-FPR-0188 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[3].…` |  | Tilsvarende lyder g før s i det lettiske… | Tilsvarende lyder g før s i det tyske or… | HIGH | FOREIGN_REMNANT | LABOT | Tilsvarende lyder g før s i det tyske ord “magst” tættere på k. |
| DA-KURSS-FPR-0189 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[4].…` | Wer will fleißig lernen? | Hvem vil studere hårdt? | Hvem vil studere flittigt? | MEDIUM | TRANSLATION | LABOT | Hvem vil lære flittigt? |
| DA-KURSS-FPR-0190 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[4].…` | Alle Schüler wollen fleißig lernen. | Alle studerende ønsker at studere hårdt. | Alle elever vil studere flittigt. | MEDIUM | TRANSLATION | LABOT | Alle elever vil lære flittigt. |
| DA-KURSS-FPR-0191 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[4].…` | Wer muss fleißig lernen? | Hvem skal studere hårdt? | Hvem skal studere flittigt? | MEDIUM | TRANSLATION | LABOT | Hvem skal lære flittigt? |
| DA-KURSS-FPR-0192 | `lesson14` | `COURSE_LESSON_DATA.kurssLesson14.sections[4].…` | Die Schüler müssen fleißig lernen. | Studerende skal studere hårdt. | Eleverne skal studere flittigt. | MEDIUM | TRANSLATION | LABOT | Eleverne skal lære flittigt. |
| DA-KURSS-FPR-0193 | `lesson15` | `COURSE_LESSON_DATA.kurssLesson15.sections[1].…` | sollen | sollen — to need / to be obliged | sollen — at skulle / være forpligtet til | HIGH | FOREIGN_REMNANT | LABOT | sollen — at skulle / at burde |
| DA-KURSS-FPR-0194 | `lesson15` | `COURSE_LESSON_DATA.kurssLesson15.sections[1].…` | ich soll | ich soll — I need / I have to do | ich soll — jeg skal / jeg er nødt til at… | HIGH | FOREIGN_REMNANT | LABOT | ich soll — jeg skal / jeg bør |
| DA-KURSS-FPR-0195 | `lesson15` | `COURSE_LESSON_DATA.kurssLesson15.sections[1].…` | du sollst | du sollst — you need / you must do | du sollst — du skal / du er nødt til at … | HIGH | FOREIGN_REMNANT | LABOT | du sollst — du skal / du bør |
| DA-KURSS-FPR-0196 | `lesson15` | `COURSE_LESSON_DATA.kurssLesson15.sections[1].…` | er soll | er soll — he needs / he has to | er soll — han skal / han er nødt til det | HIGH | FOREIGN_REMNANT | LABOT | er soll — han skal / han bør |
| DA-KURSS-FPR-0197 | `lesson15` | `COURSE_LESSON_DATA.kurssLesson15.sections[1].…` | wir sollen | wir sollen — we need / we have to do | wir sollen — vi skal / vi er nødt til at… | HIGH | FOREIGN_REMNANT | LABOT | wir sollen — vi skal / vi bør |
| DA-KURSS-FPR-0198 | `lesson15` | `COURSE_LESSON_DATA.kurssLesson15.sections[1].…` | ihr sollt | ihr sollt — you need / you should | ihr sollt — I skal / I bør | HIGH | FOREIGN_REMNANT | LABOT | ihr sollt — I skal / I bør |
| DA-KURSS-FPR-0199 | `lesson15` | `COURSE_LESSON_DATA.kurssLesson15.sections[1].…` | sie sollen | sie sollen — they / they need | sie sollen — de skal / de er nødt til de… | HIGH | FOREIGN_REMNANT | LABOT | sie sollen — de skal / de bør |
| DA-KURSS-FPR-0200 | `lesson15` | `COURSE_LESSON_DATA.kurssLesson15.sections[1].…` | dürfen | dürfen — to be allowed | dürfen — at måtte / have lov til | HIGH | FOREIGN_REMNANT | LABOT | dürfen — at måtte / have lov til |

**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

## OWNER kopsavilkums

- Pārskatīti: **50/50**
- LABOT: **48**
- NELABOT: **2**
- FALSE_POSITIVE: **0**
- NEEDS_SOURCE_REVIEW: **0**
- DE izmaiņas: **0**

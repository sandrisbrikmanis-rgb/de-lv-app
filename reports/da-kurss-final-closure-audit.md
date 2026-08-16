# DA–DE Kurss final closure audit
**Generated:** 2026-08-16T19:13:37.621Z
**Mode:** READ-ONLY · GPT-5.6 Luna
## FINAL STATUS
**NEEDS OWNER REVIEW**
## Git baseline
| Metric | Value |
|--------|-------|
| HEAD SHA | `1241919bf29ecc784a63713bcb0180830d6dbd76` |
| PR #573 merged to main | **YES** |
| PR #573 note | Sync repair commit on origin/main |
## Prerequisite
| Check | Result |
|-------|--------|
| Signed OWNER LABOT | **244** |
| Runtime OWNER_MATCH | **244/244** |
| Runtime OWNER_MISMATCH | **0** |
| 9 micro-repair runtime | **9/9** |
| DATA ↔ HTML divergence | **0** |
| Prerequisite PASS | **YES** |
## Coverage
| Metric | Value |
|--------|-------|
| Lessons | **21/21** |
| Total DA fields | **1265** |
| Coverage | **100%** |
## GPT-5.6 Luna execution
| Metric | Value |
|--------|-------|
| Model | **gpt-5.6-luna** |
| Real model audit | **YES** |
| Luna batches exported | **127** |
| Luna batches executed | **127** |
| Luna raw findings | **138** |
| FALSE_POSITIVE | **7** |
| Validated findings | **131** |
| Reason | Executed 127 batches via gpt-5.6-luna API |
## Findings summary
| Severity | Count |
|----------|-------|
| CRITICAL | **21** |
| HIGH | **29** |
| MEDIUM | **66** |
| LOW | **15** |
## Technical gates
| Gate | Result |
|------|--------|
| Syntax | **PASS** |
| validate-kurss | **PASS** |
| Structure | **FAIL** |
| IDs/order | **FAIL** |
| Mirror | **PASS** |
| Renderer compatibility | **PASS** |
| DE changes | **0** |
| Production changes (audit) | **0** |
## Validated findings
| Audit ID | Sev | Category | Lesson | Path | Problem |
|----------|-----|----------|--------|------|---------|
| DA-KURSS-FCA-0001 | HIGH | FOREIGN_REMNANT | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | Feltet indeholder lettisk tekst i den danske lektion og bruger desuden det mindre passende forelæsni |
| DA-KURSS-FCA-0002 | HIGH | FOREIGN_REMNANT | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | Den første eksempeltekst er på lettisk og skal oversættes til dansk. |
| DA-KURSS-FCA-0003 | CRITICAL | FOREIGN_REMNANT | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | Teksten indeholder den engelske rest remove og den forkerte endelse -da; tysk infinitiv ender her på |
| DA-KURSS-FCA-0004 | MEDIUM | TRANSLATION | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | Ende er tysk, ikke dansk, og den danske grammatiske term er endelse. |
| DA-KURSS-FCA-0005 | HIGH | TRANSLATION | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | ihr betyder I, ikke Du; samme fejl forekommer også i singen-eksemplet. |
| DA-KURSS-FCA-0006 | HIGH | TRANSLATION | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | ihr-formen er oversat med du-formen; den korrekte danske oversættelse er I synger. |
| DA-KURSS-FCA-0007 | HIGH | SEMANTICS | lesson1 | `COURSE_LESSON_DATA.kurssLesson1.legacyHtml` | Det tyske spørgeord wer betyder hvem, ikke hvad. |
| DA-KURSS-FCA-0008 | MEDIUM | GRAMMAR | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.subtitle` | Oversæt er et verbum, mens resten af opremsningen er substantiver; oversættelse giver korrekt parall |
| DA-KURSS-FCA-0009 | CRITICAL | SEMANTICS | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | Ordlisten er alvorligt korrumperet: flere danske betydninger er forskudt, og svar, beregne, uafgjort |
| DA-KURSS-FCA-0010 | HIGH | FOREIGN_REMNANT | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | Eksempelteksten er på lettisk og er derfor ikke dansk kursusindhold. |
| DA-KURSS-FCA-0011 | CRITICAL | GRAMMAR | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | De tyske verbformer mangler den nødvendige endelse -est/-et i arbeiten-tabellen. |
| DA-KURSS-FCA-0012 | HIGH | FOREIGN_REMNANT | lesson2 | `COURSE_LESSON_DATA.kurssLesson2.legacyHtml` | Wen er tysk og står som fremmed rest i den danske træningsprompt. |
| DA-KURSS-FCA-0013 | HIGH | SEMANTICS | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.subtitle` | Undertitlen beskriver ikke lektionens faktiske indhold, som også omfatter dialoger, ord, udtale og g |
| DA-KURSS-FCA-0014 | CRITICAL | SEMANTICS | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | De tyske spørgeord wer og was er oversat forkert som her og der. |
| DA-KURSS-FCA-0015 | CRITICAL | SEMANTICS | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | Flere betydninger er forskudt mellem posterne; Bank, eine Bank og liegen har ikke de viste danske ov |
| DA-KURSS-FCA-0016 | HIGH | FOREIGN_REMNANT | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | Den første udtaletekst er på lettisk og skal oversættes til dansk. |
| DA-KURSS-FCA-0017 | CRITICAL | FOREIGN_REMNANT | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | Sætningen er en blanding af dansk og lettisk og indeholder en meningsforstyrrende resttekst. |
| DA-KURSS-FCA-0018 | CRITICAL | SEMANTICS | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | Den tyske artikel die er fejlagtigt oversat til det danske ord dø. |
| DA-KURSS-FCA-0019 | MEDIUM | TRANSLATION | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | Overskriften blander tyske infinitiver med dansk; alle tre led bør være danske eller tyske konsekven |
| DA-KURSS-FCA-0020 | MEDIUM | SEMANTICS | lesson3 | `COURSE_LESSON_DATA.kurssLesson3.legacyHtml` | I denne lektion betyder rechnen at regne, ikke at tælle; prompten bør derfor være Regner du? |
| DA-KURSS-FCA-0021 | MEDIUM | CONSISTENCY | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > h3` | “Foredrag” betyder lecture/tale og er ikke den rette betegnelse for en kursuslektion. |
| DA-KURSS-FCA-0022 | HIGH | SEMANTICS | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > vocabulary` | Flere danske gloser er forskudte eller forkerte, så ordforrådssektionen giver misvisende oversættels |
| DA-KURSS-FCA-0023 | CRITICAL | FOREIGN_REMNANT | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > pronunciat` | Dette er lettisk tekst, ikke dansk. |
| DA-KURSS-FCA-0024 | CRITICAL | FOREIGN_REMNANT | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > grammar > ` | Lettisk tekst er indsat i den danske grammatiksektion. |
| DA-KURSS-FCA-0025 | CRITICAL | FOREIGN_REMNANT | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > grammar > ` | Lettisk tekst er indsat i den danske grammatiksektion. |
| DA-KURSS-FCA-0026 | HIGH | ORTHOGRAPHY | lesson4 | `COURSE_LESSON_DATA.kurssLesson4.legacyHtml > grammar > ` | “synd” er en dansk stavefejl; den tyske verbumsform er “sind”. |
| DA-KURSS-FCA-0027 | CRITICAL | FOREIGN_REMNANT | lesson5 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml > pronunciat` | Dette er lettisk tekst, ikke dansk. |
| DA-KURSS-FCA-0028 | CRITICAL | FOREIGN_REMNANT | lesson5 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml > pronunciat` | Dette er lettisk tekst, ikke dansk. |
| DA-KURSS-FCA-0029 | CRITICAL | FOREIGN_REMNANT | lesson5 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml > grammar` | Lettisk tekst er indsat i den danske grammatiksektion. |
| DA-KURSS-FCA-0030 | CRITICAL | FOREIGN_REMNANT | lesson5 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml > grammar > ` | Sætningen indeholder lettisk tekst og den ødelagte rest “-Dø”. |
| DA-KURSS-FCA-0031 | MEDIUM | FOREIGN_REMNANT | lesson5 | `COURSE_LESSON_DATA.kurssLesson5.legacyHtml > training a` | ARIA-labelen er på engelsk i ellers dansk brugergrænsefladetekst. |
| DA-KURSS-FCA-0032 | HIGH | SEMANTICS | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > vocabulary` | Flere gloser er grammatisk eller semantisk forkerte og giver ikke den tyske betydning. |
| DA-KURSS-FCA-0033 | CRITICAL | FOREIGN_REMNANT | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > pronunciat` | Dette er lettisk tekst, ikke dansk. |
| DA-KURSS-FCA-0034 | CRITICAL | FOREIGN_REMNANT | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > pronunciat` | Dette er lettisk tekst, ikke dansk. |
| DA-KURSS-FCA-0035 | CRITICAL | FOREIGN_REMNANT | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > grammar` | “Piemēri” er lettisk og er en fremmed rest i den danske tekst. |
| DA-KURSS-FCA-0036 | CRITICAL | FOREIGN_REMNANT | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > grammar` | Dette er lettisk tekst, ikke dansk. |
| DA-KURSS-FCA-0037 | CRITICAL | FOREIGN_REMNANT | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > grammar` | Sætningen er på lettisk og nævner desuden det forkerte målsprog i den danske lektion. |
| DA-KURSS-FCA-0038 | MEDIUM | FOREIGN_REMNANT | lesson6 | `COURSE_LESSON_DATA.kurssLesson6.legacyHtml > training a` | ARIA-labelen er på engelsk i ellers dansk brugergrænsefladetekst. |
| DA-KURSS-FCA-0039 | CRITICAL | FOREIGN_REMNANT | lesson7 | `COURSE_LESSON_DATA.kurssLesson7.legacyHtml` | Feltet indeholder omfattende lettisk tekst samt ødelagte dansk-lettiske sammenføjninger. Ordlisten h |
| DA-KURSS-FCA-0040 | HIGH | SEMANTICS | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[3].items[8]` | Danish is used instead of Latvian, and the statement incorrectly implies that sich is the only refle |
| DA-KURSS-FCA-0041 | MEDIUM | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[4].title` | The German word Übung remains in the Danish section title without a clear need. |
| DA-KURSS-FCA-0042 | MEDIUM | FOREIGN_REMNANT | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[4].description` | The German label Übung remains twice in otherwise Danish text. |
| DA-KURSS-FCA-0043 | MEDIUM | SEMANTICS | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[37].l` | Den danske tekst udelader tiltaleformen »Herr« og bruger uformelt »dig« i stedet for den formelle ti |
| DA-KURSS-FCA-0044 | MEDIUM | NATURALNESS | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[8].lv` | “Tal ikke stille!” er forståeligt, men “Tal ikke lavt!” er den mere naturlige danske formulering for |
| DA-KURSS-FCA-0045 | MEDIUM | TRANSLATION | lesson8 | `COURSE_LESSON_DATA.kurssLesson8.sections[5].cards[18].l` | Det tyske høflige Sie-formen svarer til dansk tiltale med Dem, ikke det uformelle dig. |
| DA-KURSS-FCA-0046 | MEDIUM | GRAMMAR | lesson9 | `COURSE_LESSON_DATA.kurssLesson9.sections[2].items[0].he` | På dansk er den almindelige grammatiske pluralisform af "pronomen" "pronominer". |
| DA-KURSS-FCA-0047 | NEEDS_SOURCE_REVIEW | SEMANTICS | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[15].` | “Hvad er læreren?” is unnatural for identifying a person. The German “Was ist der Lehrer?” may also  |
| DA-KURSS-FCA-0048 | HIGH | TRANSLATION | lesson10 | `COURSE_LESSON_DATA.kurssLesson10.sections[4].cards[18].` | “Læreren” is masculine or gender-neutral, but the German sentence explicitly refers to a female teac |
| DA-KURSS-FCA-0049 | MEDIUM | TRANSLATION | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[1].items[29]` | Den tyske pluralform er ikke bestemt; dansk "søstrene" betyder "die Schwestern" i bestemt form. |
| DA-KURSS-FCA-0050 | HIGH | SEMANTICS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].h` | Der står lettisk i teksten og kildereferencen; Dansk er en forkert sprogangivelse. |
| DA-KURSS-FCA-0051 | HIGH | SEMANTICS | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[2].t` | Subjektet er forkert her; det er den besatte genstand, der står i nominativ på lettisk. |
| DA-KURSS-FCA-0052 | MEDIUM | TRANSLATION | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[10].` | "Fortællende sætning" er ikke den rette danske grammatiske term for en deklarativ sætning; "fremsætt |
| DA-KURSS-FCA-0053 | MEDIUM | NAMES | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[6].l` | Navnet er skrevet som “Franc” på dansk, men den tyske kildetekst bruger “Franz”. Egennavne skal beva |
| DA-KURSS-FCA-0054 | MEDIUM | NAMES | lesson11 | `COURSE_LESSON_DATA.kurssLesson11.sections[4].cards[17].` | Navnet er Francis i stedet for Franz som i den tyske kildetekst; det ligner en rest fra LV-reference |
| DA-KURSS-FCA-0055 | MEDIUM | TRANSLATION | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[27]` | Den danske gloss er bestemt, mens den fungerer som en ubestemt ordbogsform; den bør være »blomst« fo |
| DA-KURSS-FCA-0056 | MEDIUM | TRANSLATION | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[1].items[30]` | Den danske gloss er bestemt, mens den fungerer som en ubestemt ordbogsform; »kridt« er den korrekte  |
| DA-KURSS-FCA-0057 | MEDIUM | CONSISTENCY | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[1].t` | Overskriften bruger det danske fagudtryk omlyd, mens teksten unødvendigt skifter til det tyske Umlau |
| DA-KURSS-FCA-0058 | MEDIUM | NATURALNESS | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].title` | Som instruktionsoverskrift bør imperativen Oversæt bruges; Oversætte er infinitiv og lyder mindre na |
| DA-KURSS-FCA-0059 | MEDIUM | NAMES | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[7].l` | Det danske navn bør svare til det tyske Johann; Jan er et andet navn. |
| DA-KURSS-FCA-0060 | MEDIUM | NAMES | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[12].` | Navnet er stavet Rudolph på dansk, men Rudolf i den tyske reference. Navne bør være konsistente på t |
| DA-KURSS-FCA-0061 | MEDIUM | NAMES | lesson12 | `COURSE_LESSON_DATA.kurssLesson12.sections[4].cards[14].` | Det danske navn Francis svarer ikke til Franz i den tyske reference. Navnet bør bevares konsistent. |
| DA-KURSS-FCA-0062 | MEDIUM | GRAMMAR | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[10]` | Den danske oversættelse er bestemt form; som ordbogsform skal den være ubestemt: »fod«. |
| DA-KURSS-FCA-0063 | MEDIUM | GRAMMAR | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[1].items[19]` | Den danske oversættelse er bestemt form; som ordbogsform skal den være ubestemt: »bryst«. |
| DA-KURSS-FCA-0064 | MEDIUM | CONSISTENCY | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[0].t` | Teksten bruger både den danske term omlyd i overskriften og det tyske lånord umlaut i forklaringen;  |
| DA-KURSS-FCA-0065 | MEDIUM | SEMANTICS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[1].t` | Den danske oversættelse mangler om, som er nødvendig for at gengive betydningen af umkehren og det t |
| DA-KURSS-FCA-0066 | MEDIUM | SEMANTICS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[27].` | Træner betyder typisk at træne, ikke specifikt at lave gymnastik som i den tyske sætning. |
| DA-KURSS-FCA-0067 | HIGH | NAMES | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[28].` | Det danske navn Jan svarer ikke til personnavnet Johann i den tyske kildetekst. |
| DA-KURSS-FCA-0068 | MEDIUM | SEMANTICS | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[29].` | Motionér betyder at dyrke motion generelt og gengiver ikke den specifikke opfordring til at lave gym |
| DA-KURSS-FCA-0069 | MEDIUM | NAMES | lesson13 | `COURSE_LESSON_DATA.kurssLesson13.sections[5].cards[30].` | Navnet Jan svarer ikke til Johann i den tyske kildetekst; personnavnet bør bevares som Johann. |
| DA-KURSS-FCA-0070 | MEDIUM | SEMANTICS | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[2].items[6].t` | “Have behov for” svarer snarere til brauchen; müssen udtrykker nødvendighed eller pligt. |
| DA-KURSS-FCA-0071 | MEDIUM | GRAMMAR | lesson14 | `COURSE_LESSON_DATA.kurssLesson14.sections[4].title` | Som instruktion eller sektionsoverskrift bør imperativen være “Oversæt”; “oversætte” er infinitiv og |
| DA-KURSS-FCA-0072 | HIGH | FOREIGN_REMNANT | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.subtitle` | Tre tyske ord står uberørt i den danske undertitel. De bør oversættes til dansk, så undertitlen er s |
| DA-KURSS-FCA-0073 | MEDIUM | NATURALNESS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.intro` | “Lektion” er den naturlige danske betegnelse i en kursusserie; “forelæsning” betyder snarere en akad |
| DA-KURSS-FCA-0074 | MEDIUM | SEMANTICS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[1].title` | “Navne” betyder names, men afsnittet indeholder tyske ord og bøjninger, ikke person- eller stednavne |
| DA-KURSS-FCA-0075 | MEDIUM | GRAMMAR | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[4].title` | Som sektionsoverskrift og instruktion bør imperativen »Oversæt« bruges; »Oversætte« er infinitiv. |
| DA-KURSS-FCA-0076 | MEDIUM | SEMANTICS | lesson15 | `COURSE_LESSON_DATA.kurssLesson15.sections[4].cards[15].` | Danish uses indefinite nouns, but German refers to the specific child and knife with definite articl |
| DA-KURSS-FCA-0077 | HIGH | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[2].items[4].t` | “Feminine” er ikke dansk fagterminologi her; brug det danske “hunkønsnavneord”. |
| DA-KURSS-FCA-0078 | CRITICAL | FOREIGN_REMNANT | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[3].items[0]` | Feltet indeholder meta-tekst, lettisk og tekniske instruktioner i stedet for den danske udtalevejled |
| DA-KURSS-FCA-0079 | MEDIUM | GRAMMAR | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[5].title` | Som instruktion er imperativformen “Oversæt” korrekt; “Oversætte” er infinitiv og fungerer ikke natu |
| DA-KURSS-FCA-0080 | MEDIUM | SEMANTICS | lesson16 | `COURSE_LESSON_DATA.kurssLesson16.sections[5].cards[10].` | Den tyske bestemthed er ikke gengivet: 'Die Hunde' svarer til 'hundene', ikke det ubestemte 'hunde'. |
| DA-KURSS-FCA-0081 | HIGH | SEMANTICS | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[1].items[12]` | Die Diele betyder en forstue, entré eller gang; »gulv« er en forkert betydning. |
| DA-KURSS-FCA-0082 | MEDIUM | GRAMMAR | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[2].items[4].t` | Efter ændres kræver stammen genitiv: stammens e. Den nuværende formulering er grammatisk ukorrekt på |
| DA-KURSS-FCA-0083 | HIGH | FOREIGN_REMNANT | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[4].cards[3].p` | Feltet indeholder tysk tekst i stedet for dansk og bør oversættes til dansk. |
| DA-KURSS-FCA-0084 | HIGH | FOREIGN_REMNANT | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[4].cards[4].p` | Feltet indeholder tysk tekst i stedet for dansk og bør oversættes til dansk. |
| DA-KURSS-FCA-0085 | MEDIUM | SEMANTICS | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[9].l` | Den danske formulering er tvetydig og læses naturligt som 'Hvem hjælper drengen?' i stedet for 'Hvem |
| DA-KURSS-FCA-0086 | MEDIUM | SEMANTICS | lesson17 | `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[12].` | Den danske sætning mangler betydningen 'entzwei'/'over' og siger kun, at han klipper papiret med en  |
| DA-KURSS-FCA-0087 | MEDIUM | NATURALNESS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[8].t` | Konstruktionen “bruges ... i en kortere form” er unaturlig og gør forholdet mellem de gamle og de ko |
| DA-KURSS-FCA-0088 | HIGH | TRANSLATION | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[11].` | Både Hefte og Mappe er oversat forkert: notesbøgerne/posen betyder henholdsvis notesbøger/tasken i s |
| DA-KURSS-FCA-0089 | MEDIUM | TRANSLATION | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[12].` | Det tyske Hefte svarer her til hæfterne, ikke notesbøgerne. |
| DA-KURSS-FCA-0090 | MEDIUM | TRANSLATION | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[13].` | Notesbøgerne oversætter Hefte upræcist; den tilsvarende danske betegnelse er hæfterne. |
| DA-KURSS-FCA-0091 | MEDIUM | SEMANTICS | lesson18 | `COURSE_LESSON_DATA.kurssLesson18.sections[5].cards[17].` | Klasseværelset betyder det fysiske lokale, mens den tyske tekst siger i klassen. |
| DA-KURSS-FCA-0092 | MEDIUM | CONSISTENCY | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[3]` | Translitterationen af den tyske lyd [ʃt] bør være konsekvent med den foregående formulering og skriv |
| DA-KURSS-FCA-0093 | HIGH | SEMANTICS | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[3].items[4]` | I »wachsen« repræsenterer ch lyden [ks], ikke kun [k]. |
| DA-KURSS-FCA-0094 | MEDIUM | SEMANTICS | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[7].l` | “Navngiver” betyder at give noget et navn; her betyder tysk “nennt” at nævne/opremse. De tyske beste |
| DA-KURSS-FCA-0095 | MEDIUM | SEMANTICS | lesson19 | `COURSE_LESSON_DATA.kurssLesson19.sections[5].cards[8].l` | Den danske tekst ændrer den bestemte form og oversætter »in der Klasse« mindre idiomatisk som »i et  |
| DA-KURSS-FCA-0096 | MEDIUM | NATURALNESS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.intro` | »Foredrag« betyder typisk en tale eller præsentation; i en kursuslektion er »lektion« den naturlige  |
| DA-KURSS-FCA-0097 | MEDIUM | NATURALNESS | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[3].t` | Formuleringen "tager ... artiklen i det sidste ord" er unaturlig på dansk; artiklen følger normalt d |
| DA-KURSS-FCA-0098 | HIGH | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[4].cards[11].` | Feltet indeholder tysk i stedet for dansk. |
| DA-KURSS-FCA-0099 | HIGH | FOREIGN_REMNANT | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[0].l` | Feltet indeholder lettisk i stedet for dansk. |
| DA-KURSS-FCA-0100 | MEDIUM | TRANSLATION | lesson20 | `COURSE_LESSON_DATA.kurssLesson20.sections[5].cards[9].l` | Danish “loftet” means attic, matching the Latvian reference; German “Boden” means floor. |
| DA-KURSS-FCA-0101 | MEDIUM | SEMANTICS | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.intro` | “Forelæsning” betyder foredrag/lecture, mens lektionens titel bruger “Lektion 21”; “lektion” er den  |
| DA-KURSS-FCA-0102 | MEDIUM | FOREIGN_REMNANT | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[0].e` | “no / iz” are Latvian remnants; the Danish translation of “aus” is “fra”. |
| DA-KURSS-FCA-0103 | HIGH | FOREIGN_REMNANT | lesson21 | `COURSE_LESSON_DATA.kurssLesson21.sections[2].items[2].h` | Den lettiske oversættelse "no kurienes?" er et fremmedsprogsremnant i den danske kursustekst. |
| DA-KURSS-FCA-0104 | MEDIUM | NATURALNESS | kurssVerbBasicsLesson | `COURSE_LESSON_HTML.kurssVerbBasicsLesson` | “Verbers grundlag” is unnatural Danish, and “1. lektions verber” is an incorrect/awkward genitive co |
| DA-KURSS-FCA-0105 | MEDIUM | CONSISTENCY | lesson3 | `lesson3TrainingCardsDa[14].front` | “Heft” is more consistently translated as “hæfte”; “notesbog” means notebook and differs from the es |
| DA-KURSS-FCA-0106 | MEDIUM | CONSISTENCY | lesson3 | `lesson3TrainingCardsDa[15].front` | The Danish should preserve the German verb “liegt” and use the established equivalent “hæfte” rather |
| DA-KURSS-FCA-0107 | MEDIUM | TRANSLATION | lesson4 | `lesson4TrainingCardsDa[0].front` | “Federhalter” betyder penneholder, ikke specifikt fyldepenholder; den danske oversættelse indsnævrer |
| DA-KURSS-FCA-0108 | MEDIUM | TRANSLATION | lesson4 | `lesson4TrainingCardsDa[1].front` | “Federhalter” er oversat som fyldepenholder, hvilket fejlagtigt specificerer genstanden som en fount |
| DA-KURSS-FCA-0109 | MEDIUM | SEMANTICS | lesson5 | `lesson5TrainingCardsDa[10].front` | Fyldepenholderen betyder en holder til en fyldepen, mens Federhalter svarer til penneholderen. |
| DA-KURSS-FCA-0110 | MEDIUM | GRAMMAR | lesson6 | `lesson6TrainingCardsDa[14].front` | Ved identifikation af ting bruges normalt det på dansk; De er fjer lyder som en henvisning til aller |
| DA-KURSS-FCA-0111 | MEDIUM | SEMANTICS | lesson6 | `lesson6TrainingCardsDa[18].front` | Fyldepenholder betyder en holder til en fyldepen, mens Federhalter her betyder en almindelig penneho |
| DA-KURSS-FCA-0112 | MEDIUM | NATURALNESS | ui | `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural` | Man sætter ikke en bøjning; formuleringen er unaturlig og mangler, hvad der skal bøjes. |
| DA-KURSS-FCA-0113 | HIGH | FOREIGN_REMNANT | ui | `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formIhr` | “Ihr” er tysk og bør erstattes af det danske flertalspronomen “I”. |
| DA-KURSS-FCA-0114 | HIGH | FOREIGN_REMNANT | ui | `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.formSie` | “Sie” er tysk og bør erstattes af det danske høflige pronomen “De”. |
| DA-KURSS-FCA-0115 | MEDIUM | FOREIGN_REMNANT | ui | `LANGUAGE_UI_STRINGS.kurss.lessonItems.19.menuDesc` | Den tyske grammatiske betegnelse bør oversættes til dansk; præpositionerne bevares som tyske målord. |
| DA-KURSS-FCA-0116 | MEDIUM | TRANSLATION | ui | `LANGUAGE_UI_STRINGS.kurss.lessonItems.20.menuDesc` | Haus er tysk og bør oversættes til dansk; danske grammatisk-termer skrives normalt med små bogstaver |
## LOW findings (validated, listed separately)
- **DA-KURSS-FCA-0001** (NATURALNESS): `COURSE_LESSON_DATA.kurssLesson4.subtitle` — “Genstande i klasseværelset” er mere naturligt og præcist end “objekter i klassen”.
- **DA-KURSS-FCA-0002** (NATURALNESS): `COURSE_LESSON_DATA.kurssLesson5.subtitle` — Den bestemte form “endelsen” og placeringen af suffikset giver en mere naturlig dansk formulering.
- **DA-KURSS-FCA-0003** (NATURALNESS): `COURSE_LESSON_DATA.kurssLesson8.sections[4].cards[17].lv` — Danish normally uses hilse på when greeting a person; the current wording is understandable but less idiomatic.
- **DA-KURSS-FCA-0004** (NATURALNESS): `COURSE_LESSON_DATA.kurssLesson11.sections[3].items[7].text` — Formuleringen "Dansk dobbelt negation" er unaturlig; "dobbelt negation på dansk" er den naturlige danske ordstilling.
- **DA-KURSS-FCA-0005** (ORTHOGRAPHY): `COURSE_LESSON_DATA.kurssLesson12.sections[3].items[2].text` — Als skal skrives med stort begyndelsesbogstav efter punktum.
- **DA-KURSS-FCA-0006** (NATURALNESS): `COURSE_LESSON_DATA.kurssLesson13.sections[2].items[5].text` — Præfikset er den naturlige danske grammatiske betegnelse; præfiksdelen virker unødigt tungt.
- **DA-KURSS-FCA-0007** (NATURALNESS): `COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[17].lv` — “Hvad arbejder vi med?” is the natural contemporary Danish word order; the current phrasing is unusually formal and stiff.
- **DA-KURSS-FCA-0008** (ORTHOGRAPHY): `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[3].text` — Et spørgsmålstegn afslutter allerede sætningen; det efterfølgende punktum er overflødigt.
- **DA-KURSS-FCA-0009** (ORTHOGRAPHY): `COURSE_LESSON_DATA.kurssLesson18.sections[2].items[4].text` — Et spørgsmålstegn afslutter allerede sætningen; det efterfølgende punktum er overflødigt.
- **DA-KURSS-FCA-0010** (CONSISTENCY): `COURSE_LESSON_DATA.kurssLesson20.sections[2].items[2].text` — “Slutningen” er mindre præcist og inkonsekvent med den grammatiske term “endelse”; “et -e-” og formuleringen er mere idiomatisk.
- **DA-KURSS-FCA-0011** (ORTHOGRAPHY): `COURSE_LESSON_HTML.kurssArticlesLesson` — In the embedded German example, the definite article is lowercase: der Montag.
- **DA-KURSS-FCA-0012** (ORTHOGRAPHY): `LANGUAGE_UI_STRINGS.kurss.lessonItems.4.menuDesc` — På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »akkusativ« bør derfor ikke have tysk substantivisk versal.
- **DA-KURSS-FCA-0013** (ORTHOGRAPHY): `LANGUAGE_UI_STRINGS.kurss.lessonItems.5.menuDesc` — På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »akkusativ« bør ikke følge tysk substantivkapitalisering.
- **DA-KURSS-FCA-0014** (ORTHOGRAPHY): `LANGUAGE_UI_STRINGS.kurss.lessonItems.7.menuDesc` — På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »imperativ« bør ikke have versal.
- **DA-KURSS-FCA-0015** (ORTHOGRAPHY): `LANGUAGE_UI_STRINGS.kurss.lessonItems.8.menuDesc` — På dansk skrives grammatiske betegnelser normalt med lille begyndelsesbogstav; »akkusativ« bør ikke have tysk substantivisk versal.
> PROPOSED_DA values are Luna suggestions only — not OWNER-approved.
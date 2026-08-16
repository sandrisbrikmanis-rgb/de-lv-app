# DA--DE A2 --- OWNER decisions --- comparison-08

Avots: `reports/da-a2-owner-review-comparison-08.md`

Findings: **1044--1161** (50 ieraksti)

**DE = STRICT READ-ONLY.** `PROPOSED_DA` ir tikai audita ieteikums,
nevis OWNER apstiprinājums. OWNER_DECISION saglabā precīzu esošo DE daļu
un labo tikai DA daļu.

  --------------------------------------------------------------------------------------------------------------
            Finding Card ID                 Field                           Statuss       OWNER_DECISION
  ----------------- ----------------------- ------------------------------- ------------- ----------------------
               1044 `a2-schließen`          `study.comparison[1].example`   **LABOT**     Ich schließe die Tür
                                                                                          ab. = Jeg låser døren.

               1045 `a2-schließen`          `study.comparison[3].example`   **LABOT**     Daraus folgere ich
                                                                                          etwas. = Deraf
                                                                                          konkluderer jeg noget.

               1052 `a2-schloss`            `study.comparison[1].example`   **LABOT**     Die Burg steht auf dem
                                                                                          Berg. = Borgen ligger
                                                                                          på bjerget.

               1053 `a2-schloss`            `study.comparison[2].example`   **LABOT**     Das Türschloss ist
                                                                                          kaputt. = Dørlåsen er
                                                                                          i stykker.

               1054 `a2-schloss`            `study.comparison[3].example`   **LABOT**     Ich kaufe ein
                                                                                          Fahrradschloss. = Jeg
                                                                                          køber en cykellås.

               1055 `a2-schloss`            `study.comparison[4].example`   **LABOT**     Der Schlüssel ist weg.
                                                                                          = Nøglen er væk.

               1064 `a2-schuld`             `study.comparison[0].example`   **LABOT**     Das ist meine Schuld.
                                                                                          = Det er min skyld.

               1065 `a2-schuld`             `study.comparison[1].example`   **LABOT**     Er hat Schulden. = Han
                                                                                          har gæld.

               1066 `a2-schuld`             `study.comparison[2].example`   **LABOT**     Ich trage
                                                                                          Verantwortung. = Jeg
                                                                                          bærer ansvaret.

               1067 `a2-schuld`             `study.comparison[3].example`   **LABOT**     Das war ein Fehler. =
                                                                                          Det var en fejl.

               1068 `a2-schuld`             `study.comparison[4].example`   **LABOT**     Ich bin schuld. = Det
                                                                                          er min skyld.

               1076 `a2-sich-befinden`      `study.comparison[0].example`   **LABOT**     Das Büro befindet sich
                                                                                          im zweiten Stock. =
                                                                                          Kontoret ligger på
                                                                                          anden sal.

               1077 `a2-sich-befinden`      `study.comparison[1].example`   **LABOT**     Das Büro ist oben. =
                                                                                          Kontoret er ovenpå.

               1078 `a2-sich-befinden`      `study.comparison[2].example`   **LABOT**     Das Buch liegt auf dem
                                                                                          Tisch. = Bogen ligger
                                                                                          på bordet.

               1079 `a2-sich-befinden`      `study.comparison[3].example`   **LABOT**     Das Auto steht vor dem
                                                                                          Haus. = Bilen står
                                                                                          foran huset.

               1080 `a2-sich-befinden`      `study.comparison[4].example`   **LABOT**     Ich fühle mich gut. =
                                                                                          Jeg har det godt.

               1083 `a2-sich-unterhalten`   `study.comparison[0].example`   **LABOT**     Wir unterhalten uns. =
                                                                                          Vi taler sammen.

               1084 `a2-sich-unterhalten`   `study.comparison[1].example`   **LABOT**     Ich spreche Deutsch. =
                                                                                          Jeg taler tysk.

               1085 `a2-sich-unterhalten`   `study.comparison[2].example`   **LABOT**     Wir reden viel. = Vi
                                                                                          taler meget.

               1086 `a2-sich-unterhalten`   `study.comparison[3].example`   **LABOT**     Wir amüsieren uns. =
                                                                                          Vi morer os.

               1098 `a2-sobald`             `study.comparison[0].example`   **LABOT**     Sobald er kommt, gehen
                                                                                          wir. = Så snart han
                                                                                          kommer, går vi.

               1099 `a2-sobald`             `study.comparison[1].example`   **LABOT**     Wenn ich Zeit habe,
                                                                                          komme ich. = Hvis jeg
                                                                                          har tid, kommer jeg.

               1100 `a2-sobald`             `study.comparison[2].example`   **LABOT**     Als ich Kind war,
                                                                                          spielte ich viel. = Da
                                                                                          jeg var barn, legede
                                                                                          jeg meget.

               1101 `a2-sobald`             `study.comparison[3].example`   **LABOT**     Ich warte, bis du
                                                                                          kommst. = Jeg venter,
                                                                                          til du kommer.

               1102 `a2-sobald`             `study.comparison[4].example`   **LABOT**     Nachdem ich gegessen
                                                                                          habe, gehe ich. =
                                                                                          Efter at jeg har
                                                                                          spist, går jeg.

               1114 `a2-sonst`              `study.comparison[0].example`   **LABOT**     Komm jetzt, sonst ist
                                                                                          es zu spät. = Kom nu,
                                                                                          ellers er det for
                                                                                          sent.

               1115 `a2-sonst`              `study.comparison[1].example`   **LABOT**     Ansonsten ist alles
                                                                                          gut. = Ellers er alt
                                                                                          godt.

               1116 `a2-sonst`              `study.comparison[2].example`   **LABOT**     Andernfalls rufe ich
                                                                                          an. = Ellers ringer
                                                                                          jeg.

               1117 `a2-sonst`              `study.comparison[3].example`   **LABOT**     Normalerweise bin ich
                                                                                          zu Hause. = Normalt er
                                                                                          jeg hjemme.

               1118 `a2-sonst`              `study.comparison[4].example`   **LABOT**     Außerdem ist es teuer.
                                                                                          = Desuden er det dyrt.

               1126 `a2-steigen`            `study.comparison[0].example`   **LABOT**     Die Preise steigen. =
                                                                                          Priserne stiger.

               1127 `a2-steigen`            `study.comparison[1].example`   **LABOT**     Ich steige in den Bus
                                                                                          ein. = Jeg stiger på
                                                                                          bussen.

               1128 `a2-steigen`            `study.comparison[2].example`   **LABOT**     Ich steige aus. = Jeg
                                                                                          stiger af.

               1129 `a2-steigen`            `study.comparison[3].example`   **LABOT**     Ich stehe um sieben
                                                                                          auf. = Jeg står op
                                                                                          klokken syv.

               1130 `a2-steigen`            `study.comparison[4].example`   **LABOT**     Das Kind klettert auf
                                                                                          den Baum. = Barnet
                                                                                          klatrer op i træet.

               1135 `a2-stelle`             `study.comparison[0].example`   **LABOT**     Ich suche eine Stelle.
                                                                                          = Jeg søger et job.

               1136 `a2-stelle`             `study.comparison[3].example`   **LABOT**     Diese Textstelle ist
                                                                                          wichtig. = Dette
                                                                                          tekststed er vigtigt.

               1137 `a2-stelle`             `study.comparison[4].example`   **LABOT**     Die Wunde tut weh. =
                                                                                          Såret gør ondt.

               1141 `a2-stimmen`            `study.comparison[0].example`   **LABOT**     Das stimmt. = Det er
                                                                                          rigtigt.

               1142 `a2-stimmen`            `study.comparison[1].example`   **LABOT**     Ich stimme dir zu. =
                                                                                          Jeg er enig med dig.

               1143 `a2-stimmen`            `study.comparison[2].example`   **LABOT**     Wir stimmen darüber
                                                                                          ab. = Vi stemmer om
                                                                                          det.

               1144 `a2-stimmen`            `study.comparison[3].example`   **LABOT**     Wir wählen den
                                                                                          Präsidenten. = Vi
                                                                                          vælger præsidenten.

               1145 `a2-stimmen`            `study.comparison[4].example`   **LABOT**     Die Farbe passt. =
                                                                                          Farven passer.

               1150 `a2-stoff`              `study.comparison[0].example`   **LABOT**     Der Stoff ist weich. =
                                                                                          Stoffet er blødt.

               1151 `a2-stoff`              `study.comparison[1].example`   **LABOT**     Das Material ist
                                                                                          stabil. = Materialet
                                                                                          er robust.

               1152 `a2-stoff`              `study.comparison[2].example`   **LABOT**     Die Substanz ist
                                                                                          gefährlich. = Stoffet
                                                                                          er farligt.

               1153 `a2-stoff`              `study.comparison[3].example`   **LABOT**     Der Unterrichtsstoff
                                                                                          ist schwer. =
                                                                                          Undervisningsstoffet
                                                                                          er svært.

               1159 `a2-tafel`              `study.comparison[0].example`   **LABOT**     Der Lehrer schreibt an
                                                                                          die Tafel. = Læreren
                                                                                          skriver på tavlen.

               1160 `a2-tafel`              `study.comparison[1].example`   **LABOT**     Die Tabelle steht im
                                                                                          Buch. = Tabellen står
                                                                                          i bogen.

               1161 `a2-tafel`              `study.comparison[2].example`   **LABOT**     Die Speisekarte liegt
                                                                                          auf dem Tisch. =
                                                                                          Menukortet ligger på
                                                                                          bordet.
  --------------------------------------------------------------------------------------------------------------

## Kopsavilkums

-   Pārskatīti: **50/50**
-   LABOT: **50**
-   FALSE_POSITIVE: **0**
-   NELABOT: **0**
-   NEEDS_SOURCE_REVIEW: **0**
-   DE izmaiņas: **0**

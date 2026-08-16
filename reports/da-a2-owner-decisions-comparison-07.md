# DA--DE A2 --- OWNER decisions --- comparison-07

Avots: `reports/da-a2-owner-review-comparison-07.md`

Findings: **924--1035** (50 ieraksti)

**DE = STRICT READ-ONLY.** `PROPOSED_DA` izmantots tikai kā audita
ieteikums. OWNER_DECISION saglabā precīzu esošo DE daļu un labo tikai DA
daļu.

  ------------------------------------------------------------------------------------------------
            Finding Card ID         Field                           Statuss       OWNER_DECISION
  ----------------- --------------- ------------------------------- ------------- ----------------
                924 `a2-leihen`     `study.comparison[3].example`   **LABOT**     Ich kaufe das
                                                                                  Buch. = Jeg
                                                                                  køber bogen.

                931 `a2-leiter`     `study.comparison[0].example`   **LABOT**     Der Leiter der
                                                                                  Firma. = Lederen
                                                                                  af firmaet.
                                                                                  Plural: die
                                                                                  Leiter.

                932 `a2-leiter`     `study.comparison[1].example`   **LABOT**     Ich steige auf
                                                                                  die Leiter. =
                                                                                  Jeg klatrer op
                                                                                  på stigen.
                                                                                  Plural: die
                                                                                  Leitern.

                933 `a2-leitung`    `study.comparison[0].example`   **LABOT**     Die Leitung ist
                                                                                  kaputt. =
                                                                                  Ledningen er i
                                                                                  stykker.

                934 `a2-leitung`    `study.comparison[1].example`   **LABOT**     Unter ihrer
                                                                                  Führung läuft
                                                                                  alles gut. =
                                                                                  Under hendes
                                                                                  ledelse går alt
                                                                                  godt.

                935 `a2-leitung`    `study.comparison[2].example`   **LABOT**     Das Kabel ist zu
                                                                                  kurz. = Kablet
                                                                                  er for kort.

                936 `a2-leitung`    `study.comparison[3].example`   **LABOT**     Die
                                                                                  Telefonleitung
                                                                                  ist frei. =
                                                                                  Telefonlinjen er
                                                                                  ledig.

                937 `a2-leitung`    `study.comparison[4].example`   **LABOT**     Die
                                                                                  Wasserleitung
                                                                                  tropft. =
                                                                                  Vandrøret
                                                                                  drypper.

                954 `a2-merken`     `study.comparison[0].example`   **LABOT**     Ich merke den
                                                                                  Fehler. = Jeg
                                                                                  bemærker fejlen.

                955 `a2-merken`     `study.comparison[1].example`   **LABOT**     Merk dir das! =
                                                                                  Husk det!

                956 `a2-merken`     `study.comparison[2].example`   **LABOT**     Ich bemerke den
                                                                                  Fehler. = Jeg
                                                                                  bemærker fejlen.

                957 `a2-merken`     `study.comparison[4].example`   **LABOT**     Ich behalte die
                                                                                  Nummer. = Jeg
                                                                                  husker nummeret.

                958 `a2-mittel`     `study.comparison[0].example`   **LABOT**     ein Mittel gegen
                                                                                  Husten = et
                                                                                  middel mod hoste

                959 `a2-mittel`     `study.comparison[1].example`   **LABOT**     Das Medikament
                                                                                  hilft. =
                                                                                  Medicinen
                                                                                  hjælper.

                960 `a2-mittel`     `study.comparison[2].example`   **LABOT**     Diese Methode
                                                                                  ist einfach. =
                                                                                  Denne metode er
                                                                                  enkel.

                961 `a2-mittel`     `study.comparison[4].example`   **LABOT**     finanzielle
                                                                                  Mittel =
                                                                                  økonomiske
                                                                                  midler

                963 `a2-note`       `study.comparison[0].example`   **LABOT**     Ich bekomme eine
                                                                                  Note. = Jeg får
                                                                                  en karakter.

                964 `a2-note`       `study.comparison[1].example`   **LABOT**     Die Schulnote
                                                                                  ist gut. =
                                                                                  Karakteren i
                                                                                  skolen er god.

                965 `a2-note`       `study.comparison[2].example`   **LABOT**     Die Musiknote
                                                                                  ist hoch. =
                                                                                  Musiknoten er
                                                                                  høj.

                972 `a2-nutzen`     `study.comparison[2].example`   **LABOT**     Wir verwenden
                                                                                  dieses Wort. =
                                                                                  Vi bruger dette
                                                                                  ord.

                973 `a2-nutzen`     `study.comparison[3].example`   **LABOT**     Nutze die
                                                                                  Chance! = Udnyt
                                                                                  chancen!

                974 `a2-offen`      `study.comparison[0].example`   **LABOT**     Die Tür ist
                                                                                  offen. = Døren
                                                                                  er åben.

                975 `a2-offen`      `study.comparison[1].example`   **LABOT**     Das Museum ist
                                                                                  geöffnet. =
                                                                                  Museet er åbent.

                976 `a2-offen`      `study.comparison[2].example`   **LABOT**     Er ist ehrlich.
                                                                                  = Han er ærlig.

                977 `a2-offen`      `study.comparison[3].example`   **LABOT**     Der Platz ist
                                                                                  frei. = Pladsen
                                                                                  er ledig.

                979 `a2-patient`    `study.comparison[1].example`   **LABOT**     Die Patientin
                                                                                  ruht sich aus. =
                                                                                  Den kvindelige
                                                                                  patient hviler
                                                                                  sig.

                980 `a2-patient`    `study.comparison[2].example`   **LABOT**     Der Kranke liegt
                                                                                  im Bett. = Den
                                                                                  syge ligger i
                                                                                  sengen.

                981 `a2-personal`   `study.comparison[0].example`   **LABOT**     Das Personal
                                                                                  hilft. =
                                                                                  Personalet
                                                                                  hjælper.

                982 `a2-personal`   `study.comparison[1].example`   **LABOT**     Der Mitarbeiter
                                                                                  arbeitet hier. =
                                                                                  Medarbejderen
                                                                                  arbejder her.

                983 `a2-personal`   `study.comparison[2].example`   **LABOT**     Das ist
                                                                                  persönlich. =
                                                                                  Det er
                                                                                  personligt.

                995 `a2-riechen`    `study.comparison[2].example`   **LABOT**     Es riecht nach
                                                                                  Kaffee. = Det
                                                                                  dufter af kaffe.

                996 `a2-rolle`      `study.comparison[0].example`   **LABOT**     Sie spielt eine
                                                                                  Rolle. = Hun
                                                                                  spiller en
                                                                                  rolle.

                997 `a2-rolle`      `study.comparison[1].example`   **LABOT**     Er hat die
                                                                                  Hauptrolle. =
                                                                                  Han har
                                                                                  hovedrollen.

                998 `a2-rolle`      `study.comparison[2].example`   **LABOT**     Ich kaufe eine
                                                                                  Papierrolle. =
                                                                                  Jeg køber en
                                                                                  rulle papir.

                999 `a2-rolle`      `study.comparison[3].example`   **LABOT**     Das hat keine
                                                                                  Bedeutung. = Det
                                                                                  har ingen
                                                                                  betydning.

               1000 `a2-rolle`      `study.comparison[4].example`   **LABOT**     Das ist ein Teil
                                                                                  der Arbeit. =
                                                                                  Det er en del af
                                                                                  arbejdet.

               1008 `a2-sammeln`    `study.comparison[0].example`   **LABOT**     Briefmarken
                                                                                  sammeln = samle
                                                                                  på frimærker

               1009 `a2-sammeln`    `study.comparison[1].example`   **LABOT**     Die Schüler
                                                                                  sammeln sich. =
                                                                                  Eleverne samles.

               1010 `a2-sammeln`    `study.comparison[2].example`   **LABOT**     Ich hole Wasser.
                                                                                  = Jeg henter
                                                                                  vand.

               1011 `a2-sammeln`    `study.comparison[3].example`   **LABOT**     Ich hebe den
                                                                                  Zettel auf. =
                                                                                  Jeg samler
                                                                                  sedlen op.

               1012 `a2-satz`       `study.comparison[0].example`   **LABOT**     Der Satz ist
                                                                                  kurz. =
                                                                                  Sætningen er
                                                                                  kort.

               1013 `a2-satz`       `study.comparison[1].example`   **LABOT**     Der deutsche
                                                                                  Satz ist
                                                                                  richtig. = Den
                                                                                  tyske sætning er
                                                                                  korrekt.

               1014 `a2-satz`       `study.comparison[2].example`   **LABOT**     Ein Satz Reifen
                                                                                  ist teuer. = Et
                                                                                  sæt dæk er dyrt.

               1015 `a2-satz`       `study.comparison[4].example`   **LABOT**     Der Kaffeesatz
                                                                                  bleibt im Glas.
                                                                                  = Kaffegrumset
                                                                                  bliver i
                                                                                  glasset.

               1023 `a2-scheinen`   `study.comparison[0].example`   **LABOT**     Die Sonne
                                                                                  scheint. = Solen
                                                                                  skinner.

               1024 `a2-scheinen`   `study.comparison[2].example`   **LABOT**     Er wirkt ruhig.
                                                                                  = Han virker
                                                                                  rolig.

               1025 `a2-scheinen`   `study.comparison[3].example`   **LABOT**     Die Lampe
                                                                                  leuchtet. =
                                                                                  Lampen lyser.

               1033 `a2-schlange`   `study.comparison[1].example`   **LABOT**     Die
                                                                                  Warteschlange
                                                                                  ist lang. = Køen
                                                                                  er lang.

               1034 `a2-schlange`   `study.comparison[2].example`   **LABOT**     Die Stühle
                                                                                  stehen in einer
                                                                                  Reihe. = Stolene
                                                                                  står på række.

               1035 `a2-schlange`   `study.comparison[3].example`   **LABOT**     Eine Schlange
                                                                                  ist ein Reptil.
                                                                                  = En slange er
                                                                                  et krybdyr.
  ------------------------------------------------------------------------------------------------

## Kopsavilkums

-   Pārskatīti: **50/50**
-   LABOT: **50**
-   FALSE_POSITIVE: **0**
-   NELABOT: **0**
-   NEEDS_SOURCE_REVIEW: **0**
-   DE izmaiņas: **0**

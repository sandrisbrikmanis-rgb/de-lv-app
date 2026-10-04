# Study realignment

STAGE RESULT: **NEEDS OWNER REVIEW**

Dati nav mainīti. #870 nav izmantots. Bāze ir #869 galva `a8d3c8a2643a3043d1ef273750750e07741dc172`.

MASTER v1.18 §1.2, §7.153 un §9 ir izlasīti šajā kokā. §7.158.A ir MASTER v1.19 dokumentā zarā `cursor/master-v119-word-source-f86b` (`ae7a2cc5f778e370cd431751acbedcdfc119bcb2`), ne #869 kokā. Tas aizliedz DE aizstāt bez LV sakritības un aizliedz tulkojuma izgudrošanu. Šis solis tulkojumus neraksta.

## Kāpēc apstājos

Atļautās darbības ir: dzēst tikai `EXTRA_TRUE`, ja galvenā vārda un vācu teikuma LV kartītē nav; `SAME_ROW` neaiztikt; `VARIANT` aizstāt tikai vācu lauku; `DIFFERENT_SENTENCE` un tā paša galvenā vārda pārpalikumu nedzēst; kārtot pēc LV galvenā vārda, neieliekot trūkstošās rindas.

Šī prognoze uz abiem kokiem (`data` un identisko `www/data`):

| Vārti | #869 | Prognoze | Nosacījums |
| --- | ---: | ---: | --- |
| TEXT | 5428 | 5426 | nedrīkst pieaugt |
| MISSING | 307 | 307 | nedrīkst pieaugt |
| ORDER | 0 | 0 | 0 |
| EXTRA A1–C2 | 1084 | 474 | 0 |
| EXTRA courseLessons | 2 | 2 | paliek 2 |

Pārkāpums: EXTRA A1–C2 paliek **474** (237 lauki data kokā, tikpat www kokā). TEXT, MISSING un ORDER nosacījumi prognozē izpildās. Apply nav izpildīts.

## Klases data kokā

www/data līmeņu faili ir baitu identiski data failiem (186/186), tāpēc abi koki dubulto indeksa skaitļus.

| Klase | Skaits |
| --- | ---: |
| SAME_ROW | 144780 |
| DIFFERENT_SENTENCE | 3519 |
| EXTRA_TRUE | 305 |
| EXTRA_BLOCKED | 205 |
| VARIANT | 35 |
| SURPLUS_SAME_WORD | 33 |

`EXTRA_TRUE` tiktu dzēsts. `EXTRA_BLOCKED` ir rindas, kuru vārds vai vācu teikums LV kartītē jau ir, tāpēc dzēšana apturēta. `SURPLUS_SAME_WORD` ir otrs elements ar to pašu galveno vārdu, kad LV slots jau aizņemts. `DIFFERENT_SENTENCE` datos netiek mainīts.

a1-liter et+gr: LV Study nav. `EXTRA_TRUE` elementi data kokā: **10** (piemēri un comparison; www dublē to pašu).

### EXTRA_TRUE

- `bg` `a1-klein-study` `examples[4]` word="" de="Das Kind ist klein." lv=""
- `bg` `a1-bitte` `examples[3]` word="" de="Kann ich bitte fragen?" lv=""
- `bg` `a1-bitte-study` `examples[3]` word="" de="Kann ich bitte fragen?" lv=""
- `bg` `a1-es` `examples[5]` word="" de="Es schneit." lv=""
- `bg` `a1-finden` `comparison[1]` word="suchen" de="Ich suche den Schlüssel." lv=""
- `cs` `a1-klein-study` `examples[4]` word="" de="Das Kind ist klein." lv=""
- `cs` `a1-finden` `comparison[1]` word="suchen" de="Ich suche den Schlüssel." lv=""
- `da` `a1-klein-study` `examples[4]` word="" de="Das Kind ist klein." lv=""
- `da` `a1-bitte` `examples[3]` word="" de="Kann ich bitte fragen?" lv=""
- `da` `a1-es` `examples[5]` word="" de="Es schneit." lv=""

### EXTRA_BLOCKED

- `bg` `a1-klein-study` `examples[3]` word="" de="Ich habe eine kleine Tasche." lv=""
- `bg` `a1-bitte` `examples[4]` word="" de="Ich habe eine Bitte." lv=""
- `bg` `a1-bitte-study` `examples[4]` word="" de="Ich habe eine Bitte." lv=""
- `bg` `a1-bringen` `examples[3]` word="" de="Ich nehme das Buch." lv=""
- `bg` `a1-es` `examples[4]` word="" de="Es regnet." lv=""
- `bg` `a1-finden` `examples[3]` word="" de="Wie findest du den Film?" lv=""
- `cs` `a1-klein-study` `examples[3]` word="" de="Ich habe eine kleine Tasche." lv=""
- `cs` `a1-bringen` `examples[3]` word="" de="Ich nehme das Buch." lv=""
- `cs` `a1-finden` `examples[3]` word="" de="Wie findest du den Film?" lv=""
- `da` `a1-klein-study` `examples[3]` word="" de="Ich habe eine kleine Tasche." lv=""

### SURPLUS_SAME_WORD

- `bg` `a1-bis` `comparison[3]` word="bis jetzt" de="Bis jetzt ist alles gut." lv=""
- `cs` `a1-bis` `comparison[3]` word="bis jetzt" de="Bis jetzt ist alles gut." lv=""
- `da` `a1-bis` `comparison[3]` word="bis jetzt" de="Bis jetzt ist alles gut." lv=""
- `en` `a1-bis` `comparison[3]` word="bis jetzt" de="Bis jetzt ist alles gut." lv=""
- `es` `a1-bis` `comparison[3]` word="bis jetzt" de="Bis jetzt ist alles gut." lv=""
- `et` `a1-bis` `comparison[3]` word="bis jetzt" de="Bis jetzt ist alles gut." lv=""
- `et` `a1-probieren` `comparison[4]` word="anprobieren" de="Ich probiere die Jacke an." lv=""
- `fi` `a1-bis` `comparison[3]` word="bis jetzt" de="Bis jetzt ist alles gut." lv=""
- `fi` `a1-probieren` `comparison[4]` word="Anprobieren" de="Ich probiere die Jacke an." lv=""
- `fr` `a1-bis` `comparison[3]` word="bis jetzt" de="Bis jetzt ist alles gut." lv=""

### VARIANT

- `lb` `a1-müssen` `comparison[1]` word="können" de="Ech kann kommen." lv="Ich kann kommen."
- `lb` `a1-ob` `comparison[1]` word="oder" de="Kaffee oder Téi?" lv="Kaffee oder Tee?"
- `lb` `a1-oder` `comparison[0]` word="oder" de="Kaffee oder Téi?" lv="Kaffee oder Tee?"
- `lb` `a1-sich` `comparison[2]` word="dich" de="Du wäschst dech." lv="Du wäschst dich."
- `lb` `a1-sollen` `comparison[2]` word="können" de="Ech kann kommen." lv="Ich kann kommen."
- `et` `b1-empfangen` `comparison[1]` word="bekommen" de="Ich bekomme eine E-kirja." lv="Ich bekomme eine E-Mail."
- `et` `b1-richten` `comparison[1]` word="schicken" de="Ich schicke dir eine E-kirja." lv="Ich schicke dir eine E-Mail."
- `fi` `b1-empfangen` `comparison[1]` word="bekommen" de="Ich bekomme eine E-kirja." lv="Ich bekomme eine E-Mail."
- `fi` `b1-richten` `comparison[1]` word="schicken" de="Ich schicke dir eine E-kirja." lv="Ich schicke dir eine E-Mail."
- `hu` `b1-empfangen` `comparison[1]` word="bekommen" de="Ich bekomme eine E-mailt." lv="Ich bekomme eine E-Mail."

### DIFFERENT_SENTENCE

- `bg` `a1-an` `comparison[0]` word="an" de="на стената" lv="an der Wand"
- `bg` `a1-ab` `comparison[1]` word="von" de="от мен" lv="von mir"
- `bg` `a1-aus` `comparison[1]` word="von" de="от моя приятел" lv="von meinem Freund"
- `bg` `a1-baden` `comparison[0]` word="baden" de="Ходя за плуване." lv="Ich gehe baden."
- `bg` `a1-besuch` `comparison[0]` word="der Besuch" de="Благодаря за твоето посещение." lv="Danke für deinen Besuch."
- `bg` `a1-besuchen` `comparison[0]` word="besuchen" de="Посещавам своите баби и дядо." lv="Ich besuche meine Großeltern."
- `bg` `a1-bitte` `comparison[0]` word="bitte" de="Моля, влез." lv="Komm bitte herein."
- `bg` `a1-bitte-study` `comparison[0]` word="die Bitte" de="Имам молба." lv="Ich habe eine Bitte."
- `bg` `a1-bleiben` `comparison[0]` word="bleiben" de="Останавам тук." lv="Ich bleibe hier."
- `bg` `a1-bringen` `comparison[4]` word="nehmen" de="Вземам книгата." lv="Ich nehme das Buch."

### SAME_ROW

- `bg` `a1-sprechen-study` `examples[0]` word="" de="Ich spreche Deutsch." lv="Ich spreche Deutsch."
- `bg` `a1-sprechen-study` `comparison[0]` word="sprechen" de="Wir sprechen über die Arbeit." lv="Wir sprechen über die Arbeit."
- `bg` `a1-klein-study` `examples[0]` word="" de="Das Zimmer ist klein." lv="Das Zimmer ist klein."
- `bg` `a1-an` `examples[0]` word="" de="an der Wand" lv="an der Wand"
- `bg` `a1-an` `comparison[2]` word="bei" de="beim Arzt" lv="beim Arzt"
- `bg` `a1-ab` `examples[0]` word="" de="ab heute" lv="ab heute"
- `bg` `a1-ab` `comparison[0]` word="ab" de="ab Montag" lv="ab Montag"
- `bg` `a1-aber` `examples[0]` word="" de="Ich möchte mitkommen, aber ich habe keine Zeit." lv="Ich möchte mitkommen, aber ich habe keine Zeit."
- `bg` `a1-aber` `comparison[0]` word="aber" de="Ich komme, aber später." lv="Ich komme, aber später."
- `bg` `a1-also` `examples[0]` word="" de="Es regnet, also bleibe ich zu Hause." lv="Es regnet, also bleibe ich zu Hause."

## Fokusa kartītes

### da a1-bitte

- `examples`
  - [0] SAME_ROW word="" de="Eine Tasse Kaffee, bitte."
  - [1] SAME_ROW word="" de="Komm bitte herein."
  - [2] SAME_ROW word="" de="Bitte schön!"
  - [3] EXTRA_TRUE word="" de="Kann ich bitte fragen?"
  - [4] EXTRA_BLOCKED word="" de="Ich habe eine Bitte."
  - [5] EXTRA_TRUE word="" de="Die Bitte ist wichtig."
- `comparison`
  - [0] SAME_ROW word="bitte" de="Komm bitte herein."
  - [1] SAME_ROW word="die Bitte" de="Ich habe eine Bitte."

### es a1-müssen

- `examples`
  - [0] SAME_ROW word="" de="Ich muss gehen."
  - [1] SAME_ROW word="" de="Du musst warten."
  - [2] SAME_ROW word="" de="Wir müssen lernen."
  - [3] SAME_ROW word="" de="Ich muss heute arbeiten."
- `comparison`
  - [0] SAME_ROW word="müssen" de="Ich muss gehen."
  - [1] SAME_ROW word="können" de="Ich kann kommen."
  - [2] SAME_ROW word="wollen" de="Ich will nach Hause."
  - [3] SAME_ROW word="dürfen" de="¿Darf ich gehen?"

### gr a1-müssen

- `examples`
  - [0] SAME_ROW word="" de="Ich muss gehen."
  - [1] SAME_ROW word="" de="Du musst warten."
  - [2] SAME_ROW word="" de="Wir müssen lernen."
  - [3] SAME_ROW word="" de="Ich muss heute arbeiten."
- `comparison`
  - [0] SAME_ROW word="müssen" de="Ich muss gehen."
  - [1] SAME_ROW word="können" de="Ich kann kommen."
  - [2] SAME_ROW word="wollen" de="Ich will nach Hause."
  - [3] SAME_ROW word="dürfen" de="Darf ich gehen;"

### da a1-müssen

- `examples`
  - [0] SAME_ROW word="" de="Ich muss gehen."
  - [1] SAME_ROW word="" de="Du musst warten."
  - [2] SAME_ROW word="" de="Wir müssen lernen."
  - [3] SAME_ROW word="" de="Ich muss heute arbeiten."
- `comparison`
  - [0] DIFFERENT_SENTENCE word="müssen" de="Jeg skal gå."
  - [1] DIFFERENT_SENTENCE word="können" de="Jeg kan komme."
  - [2] DIFFERENT_SENTENCE word="wollen" de="Jeg vil hjem."
  - [3] DIFFERENT_SENTENCE word="dürfen" de="Må jeg gå?"

### da a1-besuchen

- `examples`
  - [0] SAME_ROW word="" de="Ich besuche meine Großeltern."
  - [1] DIFFERENT_SENTENCE word="" de="Wir besuchen das Museum."
  - [2] DIFFERENT_SENTENCE word="" de="Er besucht einen Freund."
- `comparison`
  - [0] SAME_ROW word="besuchen" de="Ich besuche meine Großeltern."
  - [1] SAME_ROW word="treffen" de="Ich treffe meinen Freund."
  - [2] SAME_ROW word="zu jemandem gehen" de="Ich gehe zu meinem Freund."

### da a1-bis

- `examples`
  - [0] SAME_ROW word="" de="Ich warte bis zu deiner Ankunft."
  - [1] SAME_ROW word="" de="Bleib hier, bis ich zurückkomme."
  - [2] SAME_ROW word="" de="Ich lerne Deutsch bis zum Abend."
  - [3] SAME_ROW word="" de="Bis jetzt habe ich nichts verstanden."
- `comparison`
  - [0] SAME_ROW word="bis" de="Ich bleibe bis morgen."
  - [1] SAME_ROW word="bis zu" de="bis zum Bahnhof"
  - [2] SAME_ROW word="bis jetzt" de="Bis jetzt habe ich nichts verstanden."
  - [3] SURPLUS_SAME_WORD word="bis jetzt" de="Bis jetzt ist alles gut."

### es a1-bis

- `examples`
  - [0] SAME_ROW word="" de="Ich warte bis zu deiner Ankunft."
  - [1] SAME_ROW word="" de="Bleib hier, bis ich zurückkomme."
  - [2] SAME_ROW word="" de="Ich lerne Deutsch bis zum Abend."
  - [3] SAME_ROW word="" de="Bis jetzt habe ich nichts verstanden."
- `comparison`
  - [0] SAME_ROW word="bis" de="Ich bleibe bis morgen."
  - [1] SAME_ROW word="bis zu" de="bis zum Bahnhof"
  - [2] SAME_ROW word="bis jetzt" de="Bis jetzt habe ich nichts verstanden."
  - [3] SURPLUS_SAME_WORD word="bis jetzt" de="Bis jetzt ist alles gut."

### et a1-liter

- `examples`
  - [0] EXTRA_TRUE word="" de="Ich brauche einen Liter Milch."
  - [1] EXTRA_TRUE word="" de="Die Flasche fasst zwei Liter."
- `comparison`
  - [0] EXTRA_TRUE word="der Liter" de="In Deutschland sagt man meist der Liter."
  - [1] EXTRA_TRUE word="das Liter" de="In Österreich hört man auch das Liter."
  - [2] EXTRA_TRUE word="die Liter" de="Die Flasche fasst zwei Liter."

### gr a1-liter

- `examples`
  - [0] EXTRA_TRUE word="" de="Ich brauche einen Liter Milch."
  - [1] EXTRA_TRUE word="" de="Die Flasche fasst zwei Liter."
- `comparison`
  - [0] EXTRA_TRUE word="Der Liter" de="In Deutschland sagt man meist der Liter."
  - [1] EXTRA_TRUE word="Das Liter" de="In Österreich hört man auch das Liter."
  - [2] EXTRA_TRUE word="Die Liter" de="Die Flasche fasst zwei Liter."

### sr a1-sitzen

- `examples`
  - [0] SAME_ROW word="" de="Ich sitze am Tisch."
  - [1] SAME_ROW word="" de="Die Kinder sitzen im Bus."
  - [2] SAME_ROW word="" de="Er steht an der Tür."
  - [3] SAME_ROW word="" de="Die Katze liegt auf dem Sofa."
- `comparison`
  - [0] SAME_ROW word="sitzen" de="Ich sitze am Tisch."
  - [1] SAME_ROW word="stehen" de="Er steht an der Tür."
  - [2] DIFFERENT_SENTENCE word="liegen" de="Die Katze liegt."
  - [3] EXTRA_BLOCKED word="sich setzen" de="Ich setze mich."

## Kas tur atlikušo EXTRA

Pēc atļautās prognozes data kokā paliek 237 indeksa EXTRA lauki. Biežākās kartītes:

- `a1-klein-study`: 29
- `a1-bis`: 29
- `a1-bringen`: 29
- `a1-finden`: 29
- `a1-bitte`: 28
- `a1-es`: 28
- `a1-bitte-study`: 27
- `a1-probieren`: 7
- `a1-wie`: 4
- `c1-einfamilienhaus`: 4
- `c1-wahl`: 4
- `a1-sie-study`: 3

Pilns saraksts: `blocking-rows.csv`. Tie ir lauki, kurus noteikumi neļauj noņemt, bet bez kuru noņemšanas EXTRA A1–C2 nav 0.

## Akcenti

sectionAccents nav labots. Mērījums ir #869 stāvoklis, jo realignment nav piemērots.

- Kartītes ar sectionAccents: 22391
- Kartītes, kur masīva garums atšķiras no akcentu masīva: 278
- Atšķirīgi masīvi: 316
- Pa masīviem: {"examples":161,"comparison":155}

## Trūkstošās LV rindas un NEEDS_TRANSLATION

- missing-rows.csv rindas (bez galvenes): 1
- needs-translation.csv rindas (bez galvenes): 3519

Trūkstošās LV rindas nav pievienotas. DIFFERENT_SENTENCE tulkojumi nav mainīti.

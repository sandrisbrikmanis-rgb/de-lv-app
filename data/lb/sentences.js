const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Sargies no tā!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Ja nekas netraucē. • Ja viss noritēs pēc plāna.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "To es gan zinu!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Vai tad viņš ir slims?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Ko tad?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Jo vairāk.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Jo vairāk, jo labāk.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Viss liecina par lietu.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "No tā man ir maza jēga.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Viņš nevar ierasties darba dēļ.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Runājiet jel!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Pērkons rūc.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Divtik liels.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "No turienes.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Laiks steidz.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Viņu nomāc rūpes.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Vai tu esi rūpīgi izgājis cauri grāmatai?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Cauri neiet! • Izeja aizvērta!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Vai es drīkstu jūs lūgt?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Man slāpst.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Dat is precies wat ik bedoel.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Tas ir pilnīgi vienalga.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Ko jūs īsti gribat?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Vai šī lieta steidzama?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Ļoti steidzami!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Es steidzos.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Tu tikai iedomājies, ka esi slims.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Kas tev nāk prātā?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Reiz bija.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Lūdzu, iekāpiet!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Lūdzu, nāciet iekšā!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Dažas lietas man tur patika.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Ir ieteicams.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Šai pudelē ir etiķis.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Atvainojiet, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Vai nu... vai...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Kurš bija pirmais?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Kas šodien nav ieradies?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Kas tev kait?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Kā jūs sauc?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Wat heescht dat dann elo?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Lūdzu, nāciet tuvāk!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Runā! • Stāsti!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "Rudenī",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Kungi un dāmas!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "Vanaf vandaag",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "Šorīt",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "Šonakt",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Palīgā!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Es katru dienu mācos vācu valodu.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Vai vari, lūdzu, to atkārtot?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Mēs tiekamies dzelzceṇa stacijā.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Es tev daļēji piekrītu.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Šim lēmumam ir tālejošas sekas.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Vajadzētu ņemt vērā vairākas perspektīvas.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Vai jūs varētu to paskaidrot sīkāk?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Kas attiecas uz mani,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Cik jums gadu?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Man ir divdesmit gadu.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "No šodienas.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "No šī brīža.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Citādi nevar.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Piezvaniet man.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Lūdzu, izslēdziet radio.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Lūdzu, pievērs uzmanību satiksmei.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Tam tev jāpievērš uzmanība.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Šodien es to darīšu citādi.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Mēs gaidām autobusu.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Viņš dzīvo viens.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Es pabeidzu apmācību. • Es pabeidzu izglītību.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Es nogaidīšu, kamēr lietus pārtiks.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Hij werkt op de verkoopafdeling.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Man ir alerģija pret kaķiem.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "No otras puses, es viņu saprotu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Es izanalizēju situāciju.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Viņa pieņēma manu priekšlikumu.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Es vēlos to analizēt precīzāk.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Es vēlos mainīt līgumu.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Viņš pastāvīgi maina savu viedokli.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Līdzīgas problēmas mums jau bija agrāk.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Nav ne jausmas!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Beidz žēloties.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Šī kleita ir stilīgi konservatīva.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Man patīk klausīties akordeona mūziku.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Vai vari uzklikšķināt uz ierīces?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Lūdzu, atver failu un uzklikšķini uz tā.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Es cietu negadījumā.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Mēs ejam uz staciju.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Lūdzu, ieslēdz televizoru.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Mans dators ir avarējis.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Nedēļas nogalē es iešu makšķerēt.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Es nokavēju zvanu.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Vai vari man piezvanīt vēlāk?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Lūdzu, pieņem manu priekšlikumu.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Es pieņemu tavu piedāvājumu.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Viņš pieņēma uzaicinājumu.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Man ir bail no zirnekļiem.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Bäinumm Bedeitung vun Fichier.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Rast atbalsi. • Atrast atsaucību",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Tas ir atkarīgs no tā.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Vanwege deze tijd. • In dit opzicht",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Pieņemsim, ka...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Ko tu tur esi izdarījis?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Līdz galam.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Šķiet, ka tu man netici.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Pēc manām domām...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Neizliecies!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Ķerties pie darba.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Būt bez elpas.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Labu apetīti!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Vienā elpas vilcienā.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Katrā gadījumā.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Pēkšņi viss kļuva kluss.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Atver, lūdzu, durvis!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Viņš ņēma kredītu.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Mums šodien jāsakārto telpa.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Es tagad beigšu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Viņš jau ir piecēlies.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Mums jāpārceļ tikšanās.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Viņa mani aizkaitināja.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Plotseling.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Nekavējoties.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Segt nodarītos zaudējumus.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Atveriet, lūdzu, durvis!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Sēdēt taisni.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Viņš ir piecēlies.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Zet al je kracht in.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Ļoti pūlēties.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Nerādies man vairs acīs!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Divatā. • Klusi",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Laika trūkuma dēļ.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Šā iemesla dēļ.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Visi, izņemot tevi.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Piešķirt nozīmi ārienei.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Visļaunākajā gadījumā.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Ārkārtīgi svarīgs.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Skats uz jūru.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Viņam ir labas izredzes.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Kā šo vārdu izrunā?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Izteikt līdzjūtību.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Kad notika čempionāts?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Kāda jums ir profesija?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Ietekmēt.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Ēst ārpus mājas.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Pa dzelzceļu.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Pa dzelzceļu.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Pēc iespējas drīzāk.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Man ir ļoti bail.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Novilcināt. • Vilkt garumā • Atlikt uz nenoteiktu laiku",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Maksāt skaidrā naudā.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Iegūt rūdu.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Schieten. • Maak jezelf belachelijk",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Man ir uzdots darbs.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Pēc vajadzības.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Man viņa žēl.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Ko nozīmē šis vārds?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Ar noteikumu, ka...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Viņa izskatās nomākta.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Sekot norādījumiem.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Pildīt pavēles.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Aizsūtīt pa pastu.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Man ļoti gribas zināt.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Sākumā.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Sākumā.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Sākot.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Pavadībā.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Ar pavadību.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Viņš lēni uztver. • Viņam ir gausa domāšana",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Atcerēties. • Paturēt atmiņā",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Pie galda.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Būt pie pilna prāta.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Dienas laikā.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Nepavisam ne.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Abi divi.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Er klonk een daverend applaus.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Gūt piekrišanu.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Izteikt līdzjūtību.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Būt finansiāli patstāvīgam.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Piemēram.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Palīdzēt. • Sniegt palīdzību",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Ieguldīt savu daļu.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Iepazīties ar kādu.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Iepazīties. • Nodibināt kontaktu",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Sviestmaizes ar uzlikumiem.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Kā jūs vēlaties.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Jebkurā laikā.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Ievērot klusumu.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Ērtības labad.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Būt gatavam. • Būt ar mieru",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Glābt nelaimes gadījumā cietušos.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Ziņot. • Sniegt ziņojumu • Sniegt pārskatu",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Alle stoelen zijn bezet.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Jauna slota labi slauka.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Viņam pieder māja.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Viņam ir liela drosme.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Jo labāk.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Veseļojieties! • Atveseļojies!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Lai kā arī gribētu.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Vislabāk.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Ir šaubas.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Viņa uzdevums ir...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Pasveicināt.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Noteikti. • Pavisam droši",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Nākt ciemos.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Būt ciemos. • Ciemoties",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Bieži iet uz koncertiem.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Kurā skolā viņš mācījās?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Ņemt vērā. • Apsvērt",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Neņemt vērā. • Neapsvērt",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Viņš vada viesnīcu.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Abi divi.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Samaksāt visu.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Attiecībā uz kaut ko.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Please mam",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Kā, lūdzu?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Please mam",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Man ir lūgums jums.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Pūst trompeti.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Šķirstīt grāmatu.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Kailām kājām.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Ar neapbruņotu aci.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Paldies par ziediem!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Viss kārtībā.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Pārbaudīt. • Izkontrolēt",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Te viņš ir!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Viss runā par labu.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Es tur neko nevaru darīt.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Es esmu pret to.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Man pret to nav iebildumu.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "No mājām.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Maak een damebeweging.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Krēslojas. • Aust rītausma.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Paldies! • Pateicos!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Šad un tad.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Uz to tu vari paļauties.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "No tā nekas neiznāks.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Tā ka...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Par ko jūs mani uzskatāt?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Rokas nost!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Nenolaid galvu!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "Mājās",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "Iet uz mājām",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "Kopš bērnības • No pašiem sākumiem",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Sirsnīgi apsveicu!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Esiet tik laipns! • Esiet tik labs!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Esiet tik laipns!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Kas tev kait? • Kas noticis?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Atļaujiet, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Vai drīkst smēķēt?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Man jāatzīst, ka...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "Vakar agri no rīta",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "Vakar vakarā",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Mann ir vienalga, vai...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Kas noticis?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Netaisi muļķības! • Netaisi jokus!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Nemaz nerunājot par to. • Kur nu vēl",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Ejiet taisni uz priekšu!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Kā jums iet? • Kā klājas?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Pajautā viņam, ja iznāk, vai...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "Rīt no rīta",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "Pavasarī",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Kas jauns?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "No šīs vēstules izriet, ka...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Turpini tāpat tālāk!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Hij houdt niet van...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Izrādījās, ka...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Vai tu mani atceries? • Vai tu par mani iedomājies?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "Ziemā",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Kādā gadā jūs esat dzimis?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Žēl skatīties...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "Jo vairāk, jo labāk",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "Līdz šim brīdim",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Kā nokļūt līdz stacijai?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Nāc šurp!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Vai es varētu runāt ar N. kundzi?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Cik tas maxā?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Cik ilgi ilgs priekšnesums?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Izbeidz! • Atmet to!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Liec mani mierā!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Atļaujiet man jums palīdzēt!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Iesim!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Kā klājas?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Lai dzīvo!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Dzīvojiet sveiki! • Ardievu!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Kas noticis?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Darbs ir nogurdinošs.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Tā bija saspringta diena.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Vācu valodas mācīšanās var būt nogurdinoša.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Et ass e Päiperlek, deen aus der Päischtvakanz entsteet.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Pārdevējs prasa par daudz naudas.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Likums to tā pieprasa.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Tas nemaz nav tik grūti.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Man pavisam nav naudas.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "D'Viraussetzung ass, datt de Pavisam neko nepateica.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "De hond is vrijgelaten.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Šeit daudz kas notiek.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Tur elpu!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "KO DU DARI?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Saki jel!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Ko jūs ar to domājat? • Kā jūs to domājat?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Mēs ejam ar jums.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Es braucu ar vilcienu.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "Trešdien",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Varbūt.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Man tas nepatīk.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "Pirmdien",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Labrīt!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "No rīta",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Ar labu nakti!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Sēdieties!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Pēdējais jaunums!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Vai ne?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Nē taču! • Nevajag!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Nu beidzot!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Waar is het goed voor?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Kam tas viss?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Stāvēšana aizliegta!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Stāvēšana aizliegta!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Viņam ir taisnība.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Par ko ir runa?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Par to nevar būt ne runas.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Laimīgu ceļu!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Man beidzas pacietība.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Saka, ka...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Ir jau labi!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Please mam!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Cik es esmu parādā? • Cik man jāmaksā?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Pirms lietošanas sakratīt!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Paraugieties!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Cik ļoti arī...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Kopš kura laika?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Ko lai es daru?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "Vasarā",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Ne vien..., bet arī...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Vēl kaut kas?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Bez jokiem! • Jokus pie malas!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Cik ir pulkstenis?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Cauri braukt aizliegts!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Vai jūs runājat vāciski?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Tā vietā, lai...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Kā klājas?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Šī cepure viņai labi piestāv.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Labdien!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Kur mēs satiksimies?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Nāciet tuvāk!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Godīgums ir tikums.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Ik heb veel te doen.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Itin labi! • Nav ko iebilst",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Viņš dzīvo virs manis.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Viņš par to ir pārliecināts.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Tā ir pieņemts.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Tavs pulkstenis atpaliek.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Cik pulkstenis ir?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Pulksten astoņos no rīta.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "Jo vairāk",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Apgriezties pa labi!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Un kā vēl!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "CAA -",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Uz... rēķina.",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Viņš sēdēja starp skatītājiem.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Nav par ko!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Notika, kā bija norunāts.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Smēķēt aizliegts!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Nepareizi savienots!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Ieeja aizliegta!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Vai jūs mani saprotat?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Viņš no tā neko nesaprot.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Aizstāvēt savu viedokli.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Dat ass dat „wir\"., Hier waren wir nie! '",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Daudz labāk.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Pārāk daudz.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Pēc dzirdēta.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Laiku pa laikam.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Pēc profesijas.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Viņš ir dzimis berlīnietis.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Viņš stāv pie loga.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Pirms saules lēkta.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Pirms divām nedēļām.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Aiz prieka.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Pirmkārt. • Vispirms",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Iepriekš.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Pieņemot, ka...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Ar nosacījumu.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Būt. • Būt klāt • Būt pieejams",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Pagājušajā nedēļā.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Veikt pasākumus aizsardzībai.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Viņa man šķiet pazīstama.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Viņam ļoti patīk literatūra.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Šorīt. • Šodien priekšpusdienā",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "No priekšas.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Uz priekšu.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Helemaal aan het begin.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Atrasties izdevīgākā stāvoklī.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Būt nomodā.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Pamosties.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Stāvēt sardzē.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Gada laikā.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Kara laikā.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Runāt veltīgi.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Šeit sienām ir ausis.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Līdz kuram laikam?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Ir silts.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Gaidīt ziņu.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Ko jūs vēlaties?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Kāds...? • Kas par...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Pusceļā.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Произношение на просмотреть онлайн",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Miera ceļā.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Mūsu draudzības dēļ.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Pēc taisnības.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Sāpēt.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Ziemassvētkos.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Kādā veidā?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Veids.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Tūlīt. • Nekavējoties",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Līdz turpmākam.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Un tā tālāk.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Vairāk nekas.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Op welke dag?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Visa pasaule. • Visi",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Dažās dienās.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Par maz.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Kaut arī.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Kas tur?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Šillera kopotie raksti.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Darbu izlase.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Viņš ir pelnījis, lai...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Tas maksā divus eiro.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Uz rietumiem.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "No rietumiem.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Iesaistīties sacensībā.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Skrieties sacensībā.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Par ko deramies?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Kāds būs laiks?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Sacensības vingrošanā.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Pret manu gribu.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protestēt. • Celt iebildumus",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Cik viņam gadu?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Hoe lang",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Uz sadzirdēšanos!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Uz redzēšanos!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Savvaļas dzīvnieki.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Sirsnīgi sveicināti!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Je hebt een zet.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Velk.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Diezgan auksts.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Desas galiņš.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Iet pie viņa.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Iet uz skolu.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Palikt mājās.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Diendienā.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Par laimi.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Ūdens dzeršanai.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Kājām.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Jāšus.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Ar velosipēdu.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Beidza līt.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Man vēl daudz darāms.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Te vroeg.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Pārāk liels.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Paraustīt plecus.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Izdzert ar vienu malku.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Iet bojā.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Likt pamatā. • Ņemt par pamatu.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Pirmoreiz.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Aizveriet, lūdzu, durvis!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Viņš pieņēmies svarā.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dienas kļūst garākas.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Būt saistītam ar kaut ko.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Durvis ir aizvērtas.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "To es nebūtu no viņa gaidījis.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Brīva ieeja.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Ieeja aizliegta!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Tas ir par daudz!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Kļūt pretīgam. • Apriebties",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Proti.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Nav nekādu šaubu.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Bez šaubīšanās.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Otrkārt.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Laimīgu Jauno gadu!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Daudz laimes dzimšanas dienā!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Laimīgu ceļu!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Priecājos ar Jums iepazīties.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Vai Jūs, lūdzu, būtu tik laipns?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Esmu Jums ļoti pateicīgs.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sēdieties, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, nāc, lūdzu, pie tāfeles!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Atveriet, lūdzu, mācību grāmatas!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Noejiet, lūdzu, uz sporta zāli!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Vai tu vēl guļi?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Vai Jūs vēl guļat?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Hij slaapt snel.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Lūdzu, pamodini viņu, jau ir vēls!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Man ļoti žēl!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Liels paldies!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, sāc, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Lasiet līdz, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, lūdzu, neskaties pa logu!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, atnes, lūdzu, burtnīcas!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Ej atpakaļ uz savu vietu!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Pulkstenis ir pus astoņi.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Wanneer wordt u meestal wakker?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Es tūlīt celšos.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Celies, Hanna, zvana!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Ļauj man vēl piecas minūtes pagulēt!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Neaizmirsti istabu izvēdināt!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Kur ir dvielis?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Gribu notīrīt zobus.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Ar ko tu tīri zobus?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Gribu apģērbties.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Ģērbies ātri, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Ģērbies siltāk, ārā ir vēss.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Labrīt, kā tev klājas?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Man klājas labi, paldies.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Kas jauns?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Cik šeit ir nekārtība!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Vai drīkstu palīdzēt sakārtot?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Ko tu no rīta dzer, kafiju vai tēju?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Parasti no rīta izdzeru tasi kafijas.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Vislabāk dzeru melno kafiju.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Labrīt, vai labi gulēji?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Es joprojām esmu ļoti noguris.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Gribi kafiju vai pienu?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Dod man, lūdzu, bulciņu ar sieru.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Man tagad jāiet!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Neaizmirsti brokastis!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, lūdzu, klāj galdu!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Vergeet de servetten niet!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Kad jūs ēdat pusdienās?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Ir laiks ēst.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Kas šodien ir pusdienās?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Kā tev garšo zupa?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Atklāti sakot, tā ir drusciņ pārāk sāļa.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Vai drīkstu iedot tev šķēli maizes?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Bedankt, dat heb ik al gedaan.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Gaļa garšo lieliski.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Paldies, es jau esmu paēdis.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Šodien mums ir ciemiņi.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Vai tev šovakar ir brīvs?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Nāc šodien pusdienās ciemos!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Apsēdosimies pie galda.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Lūdzu, ēd, cik gribi!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Vai tevi traucē smēķēšana?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Paldies par laipno uzņemšanu!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Kad tu ej gulēt?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Kad atnāku no darba, vienmēr esmu noguris.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Ir laiks iet gulēt.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Ir jauks laiks.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Gribi ar mani pastaigāties?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Skaties, drīz līs.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Paņem līdzi lietussargu!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Līst lietus.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Ik ben al helemaal nat.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Domā, ka līs visu dienu?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Lietus beidz līt.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Saule atkal spīd.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Ir ļoti karsti.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Izskatās, ka līs.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Mēs drīz dabūsim negaisu.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Negaiss ir garām pagājis.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Mākoņi izklīst.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Redzi varavīksni?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Ziema ir klāt, naktī sniga.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Snieg.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Cik skaisti ir mežā ziemā!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Man ir auksti, man salst.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Ārā ir slideni, uzmanies!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Aiziesim slidot?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Uzvelc jaku, var saaukstēties.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Pulkstenis ir pus septiņi.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Mans pulkstenis steidzas par piecām minūtēm.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Pamodini mani rīt pulksten septiņos!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Kāds šodien ir datums?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Šodien ir vienpadsmitais jūlijs.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Ko tu parasti dari vakaros?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Jau sen neesam satikušies.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Hoe is het",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Piedod, gribu ar tevi kaut ko pārrunāt.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Iesim pastaigā!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Gribi ar mani aiziet uz parku?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Es atnācu tevi ņemt līdz pastaigā.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Ej mazliet lēnāk, es nevaru tev tikt līdzi!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Esmu šeit pirmo reizi.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Nedaudz atpūtīsimies.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Tagad varam doties atpakaļ.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Atklāti sakot, esmu diezgan noguris.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Piedod, kur ir tuvākā metro stacija?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Kurš ir īsākais ceļš?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Šeit nogriezies otrajā ielā pa kreisi un ej taisni uz priekšu.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Kā ātrāk nokļūt uz staciju?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Esmu nodomājis rīt aizbraukt.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Kur tu gribi braukt?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Tu brauc darba dēļ vai atpūtai?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn brauc līdz Berlīnei, tad dosies pie jūras.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Kad kuģis atiet?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Pēc pusstundas.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Vai vēl varu dabūt kajīti?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Neaizmirsti pasi!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Ir laiks sakravāt čemodānu.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Vilciens atiet pus septiņos.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Pasauc, lūdzu, taksometru, citādi nokavēšu vilcienu!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Aizved, lūdzu, uz staciju!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Man jāsteidzas.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Vai kase jau ir atvērta?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Vienu biļeti līdz Ķelnei, lūdzu.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Kad vilciens atiet?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Vilciens drīz atiet.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Vai man Koblenzē jāpārsēžas?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Jā, tur tev jāpārsēžas.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Vai šī vieta ir brīva?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nē, šeit neviens nesēž.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Kur ir automāts platformas biļetēm?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Zet mijn handbagage in het raster.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Vai drīkstu atvērt logu?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Velk cauri, aizver, lūdzu, logu!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Kāda ir nākamā pietura?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Cik ilgi vilciens stāv?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Kur man jāpārsēžas?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Vilciens kavējas.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Šis vagons ir nesmēķētājiem.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Tagad braucam pāri robežai.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Vai tev ir kas jāmuito?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Esam pienākuši Berlīnē.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Vai vari ieteikt labu viesnīcu?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Vai jums ir brīvas istabas?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Istabu ar divām gultām, lūdzu.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Cik maksā istaba par nakti?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Rīt braucu prom. Pamodini mani pulksten septiņos!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Rēķinu, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Kur ir pilsētas bibliotēka?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Kad muzejs ir atvērts?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Iesim muzejā?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Braucam ar autobusu vai metro?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Kur ir tuvākā autobusa pietura?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Man ir liels izsalkums.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Ejam kopā paēst?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Viesmīli, ēdienkarti, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Vai zivs ir svaiga?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Garšo lieliski!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Viesmīli, lūdzu, maksāt!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Iešu kafejnīcā izdzert kafiju.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Gribi nākt līdz?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Tasi kafijas ar pienu, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Ātrāk, lūdzu, man jāsteidzas!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Neļauj kafijai atdzist!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Vai jums ir kas atsvaidzinošs?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Porciju saldējuma, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Šorīt saņēmu vēstuli.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Man viņam tūlīt jāraksta.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Kur ir tuvākā pastkaste?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Kur ir pasta nodaļa?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Atgādini man rīt parakstīt!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Lūdzu, iemet šo vēstuli pastkastē!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Sveiki, runā Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Vai drīkstu tev vēlāk piezvanīt?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Vai man ilgi jāgaida?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Knip alsjeblieft mijn haar.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Aizmugurē, lūdzu, ne pārāk īsi.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Kad sākas izrāde?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Sākas pus astoņos.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Visas biļetes ir izpārdotas.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Trīs biļetes, lūdzu!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Atstāsim jakas garderobē.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Ātrāk, lūdzu, priekškars tūlīt atvērsies!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Priekškars krīt.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Vai drīkstu uzaicināt dejot?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Kad būs jūsu kāzas?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Meklēju dzīvokli.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Vai šajā mājā ir brīvs dzīvoklis?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Cik maksā īre?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Dzīvoklim ir trīs istabas un virtuve.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Šodien pārceļamies.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, saliec, lūdzu, mantas kastēs!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Vai viss jau ir salikts kastēs?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Esmu sarakstē ar savu draugu.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Iesim teātrī?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Vai viss ir iekrauts?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Cik skaists skats!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Tagad varam visu atkal sakārtot.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Cik jums istabu?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Vasarā braukšu pie jūras.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Vai tu proti peldēt?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Nepeldi pārāk tālu!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Vai tu peldies katru dienu?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Jo, Spaweck-Laboen, eju maxheret.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Kā viņš izskatās?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Viņš tomēr diezgan mainījies.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Kāds viņš ir kā cilvēks?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Viņš vienmēr ir jauks un laipns.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Ik voel me slecht.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Man ir stipras galvas sāpes.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Esmu saaukstējies.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Man ir iesnas.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Man ir reibonis.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Man jāiet pie ārsta.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Noliecies gultā!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Vai tev ir drudzis?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Vakar man bija paaugstināta temperatūra.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Man sāp zobs.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Man jāiet pie zobarsta.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Vai zini, ka Finn ir slims?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Pēc ārsta domām, viņš drīz atkal būs vesels.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Gribu no jauna mēbelēt dzīvokli.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Vai varu nopirkt nomaksā?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Paliec gultā, kamēr jūties labāk!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah divās nedēļās iemācījās peldēt.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Esi ar ēdienu vēl uzmanīgs.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Spreek je Duits?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Jā, drusku.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Tu runā diezgan tekoši.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Kur tu mācījies vācu?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Jau gadu ņemu vācu stundas.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Vienmēr meklēju iespēju runāt vāciski.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Vai šī grāmata vēl ir pieejama?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Diemžēl grāmata ir izpārdota.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Kad iznāks jaunais izdevums?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Ar ko varu palīdzēt?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Vai jums ir svaigas olas?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Cik tās maksā?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Tas ir par dārgu.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Vai varat nosvērt pus kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Cik man jāmaksā?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Cik maksā kilograms?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Nosveriet, lūdzu, divus kilogramus.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Vai jums ir arī burkāni?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Vai jums ir laba liellopa gaļa?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Dodiet divus kilogramus maltās gaļas.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Vienu maizes kukuli, lūdzu, bet ne pārāk cietu.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Maize ir svaigi cepta.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Kādi augļi jums šodien ir?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Cik maksā āboli?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Dan neem ik twee kilo appels.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Bumbieri ir ļoti dārgi.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Vai varat visu piegādāt uz mājām?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Vai jums ir rīsi?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Geef me een kilo rijst, alsjeblieft.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Paldies, šoreiz nē.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Cik maksā šis paklājs?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Vai varat piegādāt mēbeles uz dzīvokli?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Lūdzu, maksājiet pie kases.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Izrakstiet rēķinu, lūdzu.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Cik maksā metrs?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Man patīk šis audums.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Nogrieziet, lūdzu, trīs metrus.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Vai jums ir arī citi paraugi?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Man nepatīk šī krāsa.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Dodiet gaišāku.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Cik maksā šīs zeķes?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Kādus cimdus vēlaties?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Tie man ir drusku par šauri.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Tā, tagad der labi.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Vai vari ieteikt labu drēbnieku?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Gribu pasūtīt uzvalku.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Kad būs gatavs?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Uzvalks der labi.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Bikses ir par garām.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Lūdzu, iztīriet un izgludinat to!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Kad kleita būs gatava?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Kurpes ir par šauras.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Vai varat šodien salabot kurpes?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Kad varu atnest kurpes?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Mana rokas pulkstenis nedarbojas.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Tas steidzas par piecām minūtēm.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Vai esi tuvredzīgs vai tālredzīgs?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Gribu nopirkt brilles.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Vai varat salabot manas brilles?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Tas ilgs tikai piecpadsmit minūtes.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Cena man par augstu.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Man vajag divas fotogrāfijas pasē.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Lūdzu, iesaiņojiet un nosūtiet uz mājām.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Mums ir fiksētas cenas.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Lūdzu, nofotografējiet mani.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Apsēdieties, skatieties taisni kamerā un nekustieties!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Kad varu redzēt paraugu?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Kad fotogrāfijas būs gatavas?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Foto izdevās.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotogrāfijas labi izdevušās.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Vai varat arī palielināt fotogrāfiju?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Vai šie akmeņi ir īsti?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Vai tas ir īsts zelts?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Parādiet, lūdzu, laulības gredzenus.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Gredzens man ir drusku par lielu.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Es to varu sašaurināt.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Šis gredzens man der.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Parādiet skaistas dāvanu idejas.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Hoe vinden jullie deze oorbellen?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Šī sakta ir ļoti skaista.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Šis akmens ir safīrs.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Šis nav īsts akmens, tas ir stikls.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Šo aproci īpaši varu ieteikt.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Tā ir īpaši smalki izstrādāta.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Cena nav augsta.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Vai kastīti dabūju bez maksas?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Visas rotaslietas ir ar zīmogu.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Ja manai sievai nepatiks, vai varu apmainīt?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Protams, jebkurā laikā.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

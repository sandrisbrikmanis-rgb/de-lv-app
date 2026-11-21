const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Pass deg for det!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Hvis ingenting kommer i veien. • Hvis alt går etter planen.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Det kan jeg tenke meg!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Er han syk, da?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Hva da?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Desto mer.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Jo mer, desto bedre.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Alt tyder på regn.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Det har jeg lite nytte av.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Han er forhindret på grunn av jobben.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Snakk da!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Det tordner.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Dobbelt så stor.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Derfra.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Tiden er knapp.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Han er tynget av bekymringer.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Har du arbeidet deg gjennom boken?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Gjennomgang forbudt!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Får jeg be om en dans? • Kan jeg be deg bli med?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Jeg er tørst.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Det er nettopp det jeg mener.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Det er helt likegyldig.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Hva er det egentlig du vil?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Haster det med denne saken?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Svært presserende!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Jeg har det travelt.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Du bare innbiller deg at du er syk.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Hva går det av deg? • Hva kommer du på?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Det var en gang.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Vær så god og stig inn!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Kom inn!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Enkelte ting likte jeg der.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Det anbefales.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Denne flasken inneholder eddik.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Unnskyld!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Enten ... eller ...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Hvem var først?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Hvem mangler i dag?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Hva feiler det deg?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Hva heter du?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Hva skal det bety?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Vær så snill og kom nærmere!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Ut med språket!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "om høsten",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Mine damer og herrer!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "fra i dag av",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "i morges",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "i natt",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Hjelp!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Jeg lærer tysk hver dag.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Kan du gjenta det, er du snill?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Vi møtes på stasjonen.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Jeg er delvis enig med deg.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Denne avgjørelsen har vidtrekkende konsekvenser.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Man bør ta hensyn til flere perspektiver.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Kunne du forklare det nærmere?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Hva meg angår, ...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Hvor gammel er du?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Jeg er tjue år gammel.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Fra i dag av.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Fra nå av.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Det går ikke på noen annen måte.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Ring meg.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Vær så snill og slå av radioen.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Vær så snill og pass på trafikken.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Det må du passe på.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "I dag gjør jeg det annerledes.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Vi venter på bussen.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Han bor alene.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Jeg har fullført opplæringen. • Jeg har fullført utdanningen.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Jeg venter til regnet gir seg.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Han jobber i salgsavdelingen.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Jeg er allergisk mot katter.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "På den annen side forstår jeg ham.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Jeg har analysert situasjonen.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Hun godtok forslaget mitt.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Jeg vil gjerne analysere dette nærmere.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Jeg vil gjerne endre kontrakten.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Han skifter mening hele tiden.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Lignende problemer har vi hatt før.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Ingen anelse!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Slutt å sutre.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Denne kjolen er stilig og konservativ.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Jeg liker å høre på trekkspillmusikk.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Kan du klikke på enheten?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Åpne filen og klikk på den, er du snill.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Jeg har vært ute for en ulykke.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Vi går til stasjonen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Vær så snill og slå på tv-en.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Datamaskinen min har krasjet.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "I helgen skal jeg ut og fiske.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Jeg gikk glipp av anropet.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Kan du ringe meg senere?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Vær så snill og godta forslaget mitt.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Jeg tar imot tilbudet ditt.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Han tok imot invitasjonen.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Jeg er redd for edderkopper.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Ikke vær redd, alt kommer til å gå bra.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Å finne gjenklang. • Å slå an.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Det kommer an på.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "I den anledning.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "La oss anta at ...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Hva har du nå stelt i stand?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Helt til slutten.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Du tror meg visst ikke.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Etter min mening ...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Ikke lag sånt oppstyr!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Å gå i gang med arbeidet.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Å være andpusten.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "God appetitt!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "I ett åndedrag.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "I hvert fall.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Plutselig ble alt stille.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Vær så snill og åpne døren!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Han tok opp lånet.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Vi må rydde opp i dag.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Jeg slutter nå.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Han er allerede oppe.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Vi må utsette møtet.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Hun irriterte meg.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Plutselig.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Med en gang.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Å betale for skaden.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Åpne døren, takk!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Å sitte rett.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Han er oppe.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Å sette inn alle krefter.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Å gjøre seg stor umak.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Gå meg av syne!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Under fire øyne.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Av mangel på tid.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Av denne grunn.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Alle unntatt deg.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Å legge vekt på det ytre.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "I verste fall.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Ytterst viktig.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Utsikt over havet.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Han har gode utsikter.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Hvordan uttales dette ordet?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Å uttrykke sin medfølelse.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Når ble mesterskapet arrangert?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Hva jobber du med?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Å utøve innflytelse.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Å spise ute.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Med jernbane.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Med toget.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Så snart som mulig.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Jeg er livredd.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Å skyve noe foran seg. • Å trekke noe ut i langdrag.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Å betale kontant.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Å utvinne malm.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Å rote det til.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Jeg har fått et oppdrag.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Etter behov.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Jeg synes synd på ham.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Hva betyr dette ordet?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "På betingelse av at ...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Hun ser nedtrykt ut.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Å følge anvisningene.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Å adlyde ordrer.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Å sende med posten.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Jeg er spent på å få vite det.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "I begynnelsen.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "I starten.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Ved begynnelsen.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Med følge.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Med ledsageren sin.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Han er tungnem.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Å bevare i minnet.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Ved bordet.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Å være ved sine fulle fem.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Om dagen.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Ikke på langt nær så.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Begge to.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Det brøt ut stormende applaus.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Å høste bifall.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Å kondolere.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Å stå på egne ben.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "For eksempel.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Å yte bistand.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Å yte sitt bidrag.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Å bli kjent med noen.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Å stifte bekjentskap.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Rundstykker med pålegg.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Som du vil.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Når som helst.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Å iaktta taushet.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "For enkelhets skyld.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Å være klar. • Å være villig.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Å berge ulykkesofre.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Å avgi rapport.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Alle plassene er opptatt.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nye koster feier best.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Han eier et hus.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Han har mye mot.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Desto bedre.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "God bedring!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Selv med den beste vilje.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Aller best.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Det er tvil.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Oppgaven hans består i ...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Å hilse fra noen.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Helt sikkert.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Å komme på besøk.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Å være på besøk.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Å gå ofte på konserter.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Hvilken skole gikk han på?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Å ta i betraktning. • Å vurdere.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Å se bort fra.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Han driver et hotell.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Begge to.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Å betale alt.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Med hensyn til noe.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Bare hyggelig. • Vær så god.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Unnskyld?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Ingen årsak. • Vær så god.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Jeg har en tjeneste å be deg om.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Å spille trompet.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Å bla i en bok.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Med bare føtter.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Med det blotte øye.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Takk for blomstene!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Alt i skjønneste orden.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Vennligst sjekk.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Der er han!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Alt taler for det.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Det er ikke min skyld.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Jeg er imot det.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Jeg har ingenting imot det.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Hjemmefra.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Å flytte dronningen.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Det skumrer. • Det lysner.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Tusen takk!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Nå og da.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Det kan du stole på.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Det blir det ikke noe av.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Slik at ...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Hvem tror du jeg er?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Fingrene av fatet!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Ikke heng med hodet!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "hjemme",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "å gå hjem",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "opprinnelig • av natur",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Hjertelig til lykke!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Vær så snill!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Vær så vennlig!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Hva er det med deg?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Unnskyld meg! • Tillat meg!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Er det lov å røyke?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Jeg må innrømme at ...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "i går morges",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "i går kveld",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Det er det samme for meg om ...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Hva har skjedd?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ikke gjør noe dumt! • Ikke lag så mye oppstyr!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "For ikke å snakke om ...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Gå rett fram!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Hvordan har du det?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Spør ham ved anledning om ...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "i morgen tidlig",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "om våren",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Hva er nytt?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Av dette brevet går det fram at ...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Fortsett!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Han er ingen venn av ...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Det viste seg at ...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Husker du meg? • Tenker du på meg?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "om vinteren",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Hvilket år er du født?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Det gjør meg vondt å se ...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "jo mer, desto bedre",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "hittil",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Hvordan kommer jeg meg til stasjonen?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Kom hit!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Kunne jeg få snakke med fru N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Hva koster det?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Hvor lenge varer forestillingen?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Slutt med det! • La det være!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "La meg være i fred!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "La meg hjelpe deg!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "La oss gå!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Nå, hvordan går det?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Lenge leve!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Lev vel! • Farvel!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Hva er i veien? • Hva skjer?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Jobben er slitsom.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Det var en slitsom dag.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Å lære tysk kan være slitsomt.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Han krever en forklaring.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Selgeren forlanger for mye penger.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Loven krever det.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Det er slett ikke så vanskelig.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Jeg har ingen penger i det hele tatt.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Han sa ingenting i det hele tatt.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Hunden er løs.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Her skjer det mye.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Hold munn! • Ikke overdriv!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Hva gjør du?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Si meg en ting!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Hva mener du med det?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Vi blir med deg.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Jeg reiser med tog.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "på onsdag",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Det kan godt være.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Det liker jeg ikke.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "på mandag",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "God morgen!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "om morgenen",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "God natt!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Vær så god og sett deg!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Siste nytt!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Ikke sant?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Nei, nei! • La være!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Nå endelig!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Hva nytter det?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Hva nytter alt dette?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkering forbudt!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Ikke parker!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Han har rett.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Hva er det snakk om?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Det kan det ikke være snakk om.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "God reise!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Jeg mister tålmodigheten.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Man sier at ...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Det er greit!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Vær så god! • Bare hyggelig!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Hvor mye skylder jeg? • Hva blir det?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Ristes før bruk!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Se her!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Uansett hvor mye ...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Siden når?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Hva skal jeg gjøre?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "om sommeren",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Ikke bare ..., men også ...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Ellers noe?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Spøk til side!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Hva er klokken?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Gjennomkjøring forbudt!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Snakker du tysk?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "I stedet for å ...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Hvordan står det til?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Denne hatten kler henne godt.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "God dag!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Hvor skal vi møtes?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Kom nærmere!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Ærlighet er en dyd.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Jeg har mye å gjøre.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Ikke verst!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Han bor over meg.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Han er overbevist om det.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Slik er skikken.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Klokken din går for sakte.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Hvor mye er klokken?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Klokken åtte om morgenen.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "desto mer",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Høyre om!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Det kan du banne på!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "nemlig",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "På bekostning av ...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Han satt blant tilskuerne.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Ingen årsak!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Det skjedde som avtalt.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Røyking forbudt!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Feil nummer!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Adgang forbudt!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Forstår du meg?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Han har ikke greie på det.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Å forsvare sitt synspunkt.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Å skape strid.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Mye bedre.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "For mye.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Etter sigende.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Fra tid til annen.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Av yrke.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Han er berliner av fødsel.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Han står foran vinduet.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Før soloppgang.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "For fjorten dager siden.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Av glede.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Fremfor alt.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "På forhånd.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Under forutsetning av at ...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Med det forbeholdet.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Å være tilgjengelig. • Å finnes.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "I forrige uke.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Å ta forholdsregler.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Hun virker kjent.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Han har en forkjærlighet for litteratur.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "I formiddag.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Forfra.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Forover.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Fra første stund.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Å ha en fordel.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Å være våken.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Å våkne.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Å stå vakt.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "I løpet av et år.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Under krigen.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Å snakke for døve ører.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Her har veggene ører.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Til når?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Det er varmt.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Å vente på en beskjed.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Hva vil du?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Hva slags ...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Halvveis.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "På denne måten. • Med disse midlene.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "På fredelig vis.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "For vårt vennskaps skyld.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Med rette. • Etter loven.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Å gjøre vondt.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Til jul.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "På hvilken måte?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Fremgangsmåte.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Uten videre.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Inntil videre.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Og så videre.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Ikke noe mer.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Hvilken dag?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Hele verden. • Alle og enhver.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Om noen få dager.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "For lite.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Selv om.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Hvem der?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schillers samlede verker.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Utvalgte verker.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Han fortjener at ...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Det er verdt to euro.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Mot vest.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Fra vest.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Å delta i en konkurranse.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Å løpe om kapp.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Hva skal vi vedde?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Hvordan blir været?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Konkurranse i turn.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Mot min vilje.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Å protestere. • Å komme med innvendinger.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Hvor gammel er han?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Hvor lenge?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Vi høres!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Ha det bra!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Ville dyr.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Hjertelig velkommen!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Det er ditt trekk.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Det trekker.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Ganske kaldt.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Enden av en pølse.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Å gå til ham.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Å gå på skolen.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Å bli hjemme.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Dag for dag.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Heldigvis.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Drikkevann.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Til fots.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Til hest.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "På sykkel.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Det sluttet å regne.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Jeg har fortsatt mye å gjøre.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "For tidlig.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "For stor.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Å trekke på skuldrene.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Å drikke i én slurk.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Å gå til grunne.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Å legge til grunn.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "For første gang.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Vær så snill og lukk døren!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Han har lagt på seg.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dagene blir lengre.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Å henge sammen med noe.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Døren er lukket.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Det hadde jeg ikke trodd om ham.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Fri adgang.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Adgang forbudt!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Det er for mye!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Å bli motbydelig. • Å begynne å by en imot.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Nemlig.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Det er hevet over enhver tvil.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Uten tvil.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "For det andre.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Godt nytt år!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Hjertelig gratulerer med dagen!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "God tur!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Det er hyggelig å bli kjent med deg.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Kunne du være så snill?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Jeg er veldig takknemlig overfor deg.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Vær så snill og sett dere ned!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, vær så snill og kom opp til tavla!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Åpne lærebøkene deres, takk!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Vær så snill og gå til gymnastikksalen!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Sover du fortsatt?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Sover du fortsatt?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Han har falt i dyp søvn.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Vær så snill og vekk ham, det er allerede sent!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Jeg er veldig lei meg!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Tusen takk!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, vær så snill og begynn!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Les med, er dere snille!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, ikke se ut av vinduet, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, vær så snill og kom med skrivebøkene!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Gå tilbake til plassen din, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Klokken er halv åtte.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Når våkner du vanligvis?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Jeg står opp om litt.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Stå opp, Hanna, det ringer!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "La meg sove fem minutter til!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Ikke glem å lufte ut i rommet!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Hvor er håndkleet?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Jeg vil gjerne pusse tennene.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Hva pusser du tennene med?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Jeg vil gjerne kle på meg.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Kle på deg fort, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Kle deg varmere, det er kjølig ute.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "God morgen, hvordan har du det?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Jeg har det bra, takk.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Hva er nytt?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "For et rot her!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Kan jeg få hjelpe til med å rydde?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Hva drikker du om morgenen, kaffe eller te?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Vanligvis drikker jeg en kopp kaffe om morgenen.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Jeg drikker helst svart kaffe.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "God morgen, har du sovet godt?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Jeg er fortsatt veldig trøtt.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Vil du ha kaffe eller melk?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Gi meg et rundstykke med ost, er du snill.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Jeg må gå nå!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Ikke glem frokosten din!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, vær så snill og dekk bordet!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Ikke glem serviettene!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Når spiser dere lunsj?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Det er på tide å spise.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Hva blir det til lunsj i dag?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Hvordan smaker suppen?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Ærlig talt er den litt for salt.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Kan jeg gi deg et stykke brød?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Takk, jeg har allerede fått.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Kjøttet smaker utmerket.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Takk, jeg er allerede mett.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "I dag har vi besøk.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Er du ledig i kveld?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Kom innom til lunsj i dag, da!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "La oss sette oss til bords.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Vær så god, forsyn deg!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Plager røykingen deg?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Takk for den hyggelige mottakelsen!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Når går du og legger deg?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Når jeg kommer fra jobben, er jeg alltid trøtt.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Det er på tide å gå og legge seg.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Det er fint vær.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Vil du gå en tur med meg?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Se, det begynner snart å regne.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Ta med paraplyen!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Det regner.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Jeg er allerede helt våt.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Tror du det kommer til å regne hele dagen?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Det slutter å regne.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Solen skinner igjen.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Det er veldig varmt.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Det ser ut til å bli regn.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Vi får snart tordenvær.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Tordenværet går over.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Skyene forsvinner.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Ser du regnbuen?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Vinteren er her, det har snødd.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Det snør.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Så vakkert det er i skogen om vinteren!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Jeg er kald, jeg fryser.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Det er speilglatt ute, pass på!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Skal vi gå på skøytebanen?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Ta på deg jakken, du kan bli forkjølet.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Klokken er halv sju.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Klokken min går fem minutter for fort.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Vekk meg klokken sju i morgen tidlig!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Hvilken dato er det i dag?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "I dag er det den ellevte juli.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Hva pleier du å gjøre om kvelden?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Det er lenge siden vi så hverandre sist.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Hvordan har du det?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Unnskyld, jeg vil gjerne snakke med deg om noe.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "La oss gå en tur!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Har du lyst til å bli med meg i parken?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Jeg kommer for å hente deg med på tur.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Gå litt saktere, er du snill, jeg klarer ikke å holde følge med deg!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Det er første gang jeg er i dette området.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "La oss hvile litt.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Nå kan vi gå tilbake.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Ærlig talt er jeg ganske trøtt.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Unnskyld, hvor er nærmeste T-banestasjon?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Hvilken vei er kortest?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Ta den andre gaten til venstre her, og gå så rett fram.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Hvordan kommer jeg raskest til stasjonen?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Jeg har tenkt å reise bort i morgen.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Hvor vil du reise?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Reiser du i jobbsammenheng eller privat?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn blir med til Berlin, så drar han til sjøen.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Når går skipet?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Om en halvtime.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Kan jeg fortsatt få en lugar?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Ikke glem passet ditt!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Det er på tide å pakke kofferten.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Toget går klokken halv sju.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Bestill en taxi til meg, er du snill, ellers rekker jeg ikke toget!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Kjør til stasjonen, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Jeg må skynde meg.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Er billettluken allerede åpen?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "En billett til Köln, takk.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Når går toget?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Toget går straks.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Må jeg bytte tog i Koblenz?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Ja, der må du bytte.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Er denne plassen ledig?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nei, det sitter ingen her.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Hvor er automaten for perrongbilletter?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Legg håndbagasjen min i bagasjehyllen.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Kan jeg åpne vinduet?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Det trekker, lukk vinduet, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Hva er neste stasjon?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Hvor lenge stopper toget?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Hvor må jeg bytte?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Toget er forsinket.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Denne vognen er for ikke-røykere.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Nå kjører vi over grensen.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Har du noe å fortolle?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Vi har kommet fram til Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Kan du anbefale meg et godt hotell?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Har du ledige rom?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Et rom med to senger, takk.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Hva koster rommet per natt?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "I morgen reiser jeg. Vekk meg klokken sju!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Regningen, takk!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Hvor er byens bibliotek?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Når er museet åpent?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Skal vi gå på museum?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Skal vi ta bussen eller T-banen?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Hvor er nærmeste bussholdeplass?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Jeg er veldig sulten.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Skal vi gå ut og spise sammen?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Kelner, menyen, takk!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Er fisken fersk?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Dette smaker utmerket!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Kelner, jeg vil gjerne betale!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Jeg går på kafé for å drikke en kaffe.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Vil du bli med?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "En kopp kaffe med melk, takk!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Fortere, er du snill, jeg har det travelt!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Ikke la kaffen din bli kald!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Har du noe forfriskende?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "En porsjon is, takk!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "I morges fikk jeg et brev.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Jeg må skrive til ham med en gang.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Hvor er nærmeste postkasse?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Hvor er postkontoret?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Minn meg på å skrive i morgen!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Vær så snill og legg dette brevet i postkassen.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hallo, det er Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Kan jeg ringe deg senere?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Må jeg vente lenge?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Vær så snill og klipp håret mitt.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Ikke for kort bak, takk.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Når begynner forestillingen?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Den begynner halv åtte.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Alle plassene er utsolgt.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tre billetter, takk!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Vi legger igjen jakkene i garderoben.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Fort, er du snill, teppet går straks opp!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Teppet faller.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Får jeg be deg opp til dans?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Når er bryllupet deres?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Jeg leter etter en leilighet.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Er det en ledig leilighet i dette huset?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Hvor mye er husleien?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Leiligheten har tre rom og kjøkken.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "I dag flytter vi.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, pakk tingene ned i esker, er du snill!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Har du pakket alt?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Jeg er i kontakt med vennen min.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Skal vi gå på teater?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Er alt lastet inn?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "For en vakker utsikt!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Nå kan vi rydde alt på plass igjen.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Hvor mange rom har dere?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "I sommer reiser jeg til sjøen.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Kan du svømme?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Ikke svøm for langt ut!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Bader du hver dag?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Når det er fint vær, går jeg og fisker.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Hvordan ser han ut?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Han har jammen forandret seg ganske mye.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Hvordan er han som menneske?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Han er alltid hyggelig og vennlig.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Jeg føler meg ikke bra.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Jeg har kraftig hodepine.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Jeg har blitt forkjølet.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Jeg har snue.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Jeg er svimmel.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Jeg må gå til legen.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Legg deg i sengen!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Har du feber?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "I går hadde jeg forhøyet temperatur.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Jeg har tannverk.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Jeg må gå til tannlegen.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Vet du at Finn er syk?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Ifølge legen blir han snart frisk igjen.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Jeg vil møblere leiligheten min på nytt.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Kan jeg kjøpe det på avbetaling?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Bli i sengen til du føler deg bedre!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah lærte å svømme på to uker.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Vær fortsatt forsiktig med maten.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Snakker du tysk?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Ja, litt.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Du snakker ganske flytende.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Hvor har du lært tysk?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Jeg har tatt tysktimer i et år.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Jeg ser alltid etter muligheter til å snakke tysk.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Er boken fortsatt på lager?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Boken er dessverre utsolgt.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Når kommer den nye utgaven ut?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Hva kan jeg hjelpe deg med?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Har du helt ferske egg?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Hva koster de?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Det er for dyrt.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Kan du veie opp en halv kilo til meg?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Hvor mye må jeg betale?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Hvor mye koster det per kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Vær så snill og vei opp to kilo til meg.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Har du gulrøtter også?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Har du godt oksekjøtt?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Gi meg to kilo kjøttdeig.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Et brød, takk, men ikke for sprøtt.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Brødet er nybakt.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Hva slags frukt har du i dag?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Hva koster eplene?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Da tar jeg to kilo epler.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Pærene er veldig dyre.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Kan du levere alt hjem til meg?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Har du ris?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Gi meg en kilo ris, takk.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Takk, ikke denne gangen.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Hvor mye koster dette teppet?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Kan du levere møblene til leiligheten min?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Vennligst betal i kassen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Vær så snill og skriv ut regningen.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Hva koster meteren?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Jeg liker dette stoffet.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Vær så snill og klipp av tre meter til meg.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Har du andre mønstre også? • Har du andre prøver også?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Jeg liker ikke denne fargen.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Gi meg en lysere.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Hva koster disse sokkene?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Hvilke hansker vil du ha?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "De er litt for trange for meg.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Sånn, nå passer de godt.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Kan du anbefale meg en god skredder?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Jeg vil bestille en dress.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Når blir den ferdig?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Dressen sitter godt.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Buksa er for lang.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Rens og stryk den, takk!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Når blir kjolen ferdig?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Skoene er for trange.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Kan du reparere skoene i dag?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Når kan jeg hente skoene?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Armbåndsuret mitt fungerer ikke.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Det går fem minutter for fort.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Er du nærsynt eller langsynt?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Jeg vil gjerne kjøpe briller.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Kan du reparere brillene mine?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Det tar bare et kvarter.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Prisen er for høy for meg.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Jeg trenger to bilder til passet mitt.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Pakk det inn og send det hjem til meg, takk.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Vi har faste priser.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Vær så snill og ta et bilde av meg.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sett deg, se rett inn i kameraet og ikke rør deg!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Når kan jeg se prøvekopien?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Når er bildene ferdige?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Bildet er vellykket.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Bildene ble bra.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Kan du også forstørre bildet?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Er disse steinene ekte?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Er det ekte gull?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Vær så snill og vis meg noen gifteringer.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Ringen er litt for stor for meg.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Jeg kan gjøre den mindre.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Denne ringen passer meg.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Vis meg noen fine gaveideer.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Hva synes du om disse øreringene?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Denne brosjen er virkelig fin.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Steinen er en safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Det er ikke en ekte stein, det er glass.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Dette armbåndet kan jeg spesielt anbefale deg.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Det er spesielt fint laget.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Prisen er ikke høy.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Får jeg esken gratis?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Alle smykkene er stemplet.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Hvis kona mi ikke liker det, kan jeg bytte det?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Selvfølgelig, når som helst.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

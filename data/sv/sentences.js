const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Akta dig för det!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Om inget kommer emellan. • Om allt går som planerat.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Det kan jag tänka mig!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Är han sjuk, då?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Vad då?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Desto mer.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Ju mer, desto bättre.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Allt tyder på regn.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Det har jag inte mycket nytta av.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Han har förhinder på grund av arbetet.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Säg något, då!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Det åskar.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Dubbelt så stor.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Därifrån.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Tiden är knapp.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Han tyngs av bekymmer.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Har du arbetat igenom boken?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Genomgång förbjuden!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Får jag lov? • Får jag be dig följa med?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Jag är törstig.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Det är precis det jag menar.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Det spelar ingen som helst roll.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Vad vill du egentligen?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Är det bråttom med den här saken?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Mycket brådskande!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Jag har bråttom.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Du inbillar dig bara att du är sjuk.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Vad tar du dig till? • Vad kommer du på?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Det var en gång.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Stig in, tack!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Kom in!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "En del saker tyckte jag om där.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Det är att rekommendera.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Den här flaskan innehåller ättika.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Ursäkta mig!",
    "level": "Sätze"
  },
  {
    "de": "Entweder ... oder ...",
    "lv": "Antingen ... eller ...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Vem var först?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Vem saknas i dag?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Vad är det med dig?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Vad heter du?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Vad ska det betyda?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Kom närmare, är du snäll!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Ut med språket!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "på hösten",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Mina damer och herrar!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "från och med i dag",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "i morse",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "i natt",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Hjälp!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Jag lär mig tyska varje dag.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Kan du vara snäll och upprepa det?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Vi träffas vid stationen.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Jag håller delvis med dig.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Det här beslutet får långtgående följder.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Man borde ta hänsyn till flera perspektiv.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Skulle du kunna förklara det närmare?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt, ...",
    "lv": "Vad mig beträffar, ...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Hur gammal är du?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Jag är tjugo år gammal.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Från och med i dag.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Från och med nu.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Det går inte på något annat sätt.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Ring mig.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Var snäll och stäng av radion.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Var snäll och se upp för trafiken.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Det måste du vara uppmärksam på.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "I dag gör jag det på ett annat sätt.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Vi väntar på bussen.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Han bor ensam.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Jag har slutfört utbildningen.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Jag väntar tills regnet har gått över.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Han arbetar på försäljningsavdelningen.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Jag är allergisk mot katter.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Å andra sidan förstår jag honom.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Jag har analyserat situationen.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Hon har godtagit mitt förslag.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Jag skulle vilja analysera det här närmare.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Jag skulle vilja ändra avtalet.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Han ändrar ständigt åsikt.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Liknande problem har vi haft förut.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Ingen aning!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Sluta gnälla.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Den här klänningen är stilfullt konservativ.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Jag tycker om att lyssna på dragspelsmusik.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Kan du klicka på enheten?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Öppna filen och klicka på den, är du snäll.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Jag har råkat ut för en olycka.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Vi går till stationen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Sätt på tv:n, är du snäll.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Min dator har kraschat.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "I helgen ska jag fiska.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Jag missade samtalet.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Kan du ringa mig senare?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Var snäll och godta mitt förslag.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Jag tackar ja till ditt erbjudande.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Han tackade ja till inbjudan.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Jag är rädd för spindlar.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Var inte rädd, allt kommer att ordna sig.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Att vinna gehör. • Att väcka genklang.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Det beror på.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Med anledning av detta.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass ...",
    "lv": "Låt oss anta att ...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Vad har du ställt till med där?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Ända till slutet.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Du verkar inte tro mig.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach ...",
    "lv": "Enligt min mening ...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Gör inte så stor affär av det!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Att ta itu med arbetet.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Att vara andfådd.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Smaklig måltid!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "I ett andetag.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "I vilket fall som helst.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Plötsligt blev allt tyst.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Öppna dörren, är du snäll!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Han tog lånet.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Vi måste städa i dag.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Nu slutar jag.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Han är redan uppe.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Vi måste skjuta upp mötet.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Hon gjorde mig upprörd.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Med ens.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "På stående fot.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Att ersätta skadan.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Öppna dörren, tack!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Att sitta rak i ryggen.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Han är uppe.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Att uppbjuda alla sina krafter.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Att lägga ner mycket möda.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Försvinn ur min åsyn!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Mellan fyra ögon.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "I brist på tid.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Av den anledningen.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Alla utom dig.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Att lägga vikt vid det yttre.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "I värsta fall.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Ytterst viktig.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Utsikt över havet.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Han har goda utsikter.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Hur uttalas det här ordet?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Att uttrycka sitt deltagande.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "När hölls mästerskapen?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Vilket yrke har du?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Att utöva inflytande.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Att äta ute.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Per järnväg.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Med tåg.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Så snart som möjligt.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Jag är livrädd.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Att skjuta något på framtiden.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Att betala kontant.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Att bryta malm.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Att ställa till det.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Jag har fått uppdraget.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Efter behov.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Jag tycker synd om honom.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Vad betyder det här ordet?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass ...",
    "lv": "På villkor att ...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Hon ser nedstämd ut.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Att följa anvisningarna.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Att lyda order.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Att skicka med posten.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Jag är angelägen om att få veta.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Inledningsvis.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "I början.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Vid starten.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "I sällskap.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Med sin följeslagare.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Han är trögtänkt.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Att bevara i minnet.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Vid bordet.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Att vara vid sina sinnens fulla bruk.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "På dagen.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Inte på långt när så.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Båda två.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Stormande applåder bröt ut.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Att vinna gillande.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Att beklaga sorgen.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Att stå på egna ben.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Till exempel.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Att bistå.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Att göra sin insats.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Att göra någons bekantskap.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Att knyta bekantskap.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Småfranska med pålägg.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Efter ditt gottfinnande.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "När som helst.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Att iaktta tystnad.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "För bekvämlighetens skull.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Att vara redo. • Att vara villig.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Att rädda olycksoffer.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Att avlägga rapport.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Alla platser är upptagna.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nya kvastar sopar bäst.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Han äger ett hus.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Han har mycket mod.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Desto bättre.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Krya på dig!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Med bästa vilja i världen.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Allra bäst.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Det råder tvivel.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin ...",
    "lv": "Hans uppgift består i ...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Att framföra hälsningar.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Helt säkert.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Att komma på besök.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Att vara på besök. • Att hälsa på.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Att ofta gå på konserter.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Vilken skola gick han i?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Att ta i beaktande. • Att överväga.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Att bortse från.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Han driver ett hotell.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Båda två.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Att betala allt.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Beträffande något.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Varsågod.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Förlåt?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Ingen orsak.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Jag har en tjänst att be dig om.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Att blåsa trumpet.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Att bläddra i en bok.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Med bara fötter.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Med blotta ögat.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Tack för komplimangen!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Allt i sin ordning.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Vänligen kontrollera.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Där är han!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Allt talar för det.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Det är inte mitt fel.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Jag är emot det.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Jag har inget emot det.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Hemifrån.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Att flytta damen.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Det skymmer. • Det gryr.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Tack så mycket!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Då och då.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Det kan du lita på.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Det blir inget av det.",
    "level": "Sätze"
  },
  {
    "de": "So dass ...",
    "lv": "Så att ...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Vem tror du att jag är?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Bort med tassarna!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Upp med hakan!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "hemma",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "att gå hem",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "ursprungligen • av naturen",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Mina hjärtligaste gratulationer!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Var så snäll!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Var så vänlig!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Vad är det med dig? • Vad har hänt?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Tillåt mig!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Är det tillåtet att röka?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass ...",
    "lv": "Jag måste erkänna att ...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "i går morse",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "i går kväll",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob ...",
    "lv": "Det spelar ingen roll för mig om ...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Vad har hänt?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Gör inga dumheter!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn ...",
    "lv": "Än mindre ... • För att inte tala om ...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Gå rakt fram!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Hur mår du? • Hur har du det?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob ...",
    "lv": "Fråga honom vid tillfälle om ...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "i morgon bitti",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "på våren",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Vad är det för nytt?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass ...",
    "lv": "Av det här brevet framgår att ...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Fortsätt!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von ...",
    "lv": "Han är ingen vän av ...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass ...",
    "lv": "Det visade sig att ...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Minns du mig? • Tänker du på mig?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "på vintern",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Vilket år är du född?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen ...",
    "lv": "Det gör ont i mig att se ...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "ju mer, desto bättre",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "hittills",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Hur kommer jag till stationen?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Kom hit!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Skulle jag kunna få tala med fru N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Vad kostar det?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Hur länge varar föreställningen?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Sluta! • Låt bli!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Lämna mig i fred!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Låt mig hjälpa dig!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Låt oss gå!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Nå, hur går det?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Leve!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Ha det så bra! • Farväl!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Vad står på?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Jobbet är ansträngande.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Det var en ansträngande dag.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Att lära sig tyska kan vara ansträngande.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Han kräver en förklaring.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Försäljaren begär för mycket pengar.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Lagen kräver det.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Det är inte alls så svårt.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Jag har inga pengar alls.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Han sade ingenting alls.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Hunden är lös.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Här händer det mycket.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Håll tyst! • Överdriv inte!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Vad gör du?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Säg mig en sak!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Vad menar du med det?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Vi går med dig.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Jag åker tåg.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "på onsdag",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Det kan vara så.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Jag tycker inte om det.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "på måndag",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "God morgon!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "på morgonen",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "God natt!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Varsågod och sitt!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Senaste nytt!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Eller hur?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Nej, nej! • Låt bli!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Nu äntligen!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Vad tjänar det till?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Vad tjänar allt det här till?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkering förbjuden!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Parkering förbjuden!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Han har rätt.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Vad handlar det om?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Det kan inte komma på fråga.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Trevlig resa!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Mitt tålamod håller på att ta slut.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass ...",
    "lv": "Man säger att ...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Det är bra!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Varsågod! • Ingen orsak!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Vad är jag skyldig? • Hur mycket ska jag betala?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Skakas före användning!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Titta här!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch ...",
    "lv": "Hur mycket ... än ...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Sedan när?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Vad ska jag göra?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "på sommaren",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur ..., sondern auch ...",
    "lv": "Inte bara ..., utan också ...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Något mer?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Skämt åsido!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Vad är klockan?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Genomfart förbjuden!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Talar du tyska?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu ...",
    "lv": "I stället för att ...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Hur står det till?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Den här hatten klär henne.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Goddag!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Var ska vi träffas?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Kom närmare!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Ärlighet är en dygd.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Jag har mycket att göra.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Inte illa!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Han bor ovanför mig.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Han är övertygad om det.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Så brukar man göra.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Din klocka går efter.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Hur mycket är klockan?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Klockan åtta på morgonen.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "desto mer",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Höger om!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Det kan du ge dig på!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "nämligen",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von ...",
    "lv": "På bekostnad av ...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Han satt bland åskådarna.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Ingen orsak!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Det skedde enligt överenskommelse.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Rökning förbjuden!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Fel nummer!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Tillträde förbjudet!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Förstår du mig?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Han förstår sig inte alls på det.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Att försvara sin åsikt.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Att orsaka gräl.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Mycket bättre.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "För mycket.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Genom hörsägen.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Då och då.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Till yrket.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Han är född berlinare.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Han står framför fönstret.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Före soluppgången.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "För fjorton dagar sedan.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Av glädje.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Framför allt.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "I förväg.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass ...",
    "lv": "Under förutsättning att ...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Med det förbehållet.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Att vara tillgänglig. • Att finnas.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Förra veckan.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Att vidta försiktighetsåtgärder.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Hon verkar bekant.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Han har en förkärlek för litteratur.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "I dag på förmiddagen.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Framifrån.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Framåt.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Redan från början.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Att ha ett övertag.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Att vara vaken.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Att vakna.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Att stå på vakt.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Under loppet av ett år.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Under kriget.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Att tala för döva öron.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Här har väggarna öron.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Till när?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Det är varmt.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Att vänta på ett meddelande.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Vad vill du?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein ...?",
    "lv": "Vad för slags ...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Halvvägs.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "På det här sättet. • Med de här medlen.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "På fredlig väg.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "För vår vänskaps skull.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Enligt lag. • Med rätta.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Att göra ont.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Till jul.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "På vilket sätt?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Tillvägagångssätt.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Utan vidare. • Utan svårigheter.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Tills vidare.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Och så vidare.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Ingenting mer.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Vilken dag?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Hela världen. • Alla.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Om några dagar.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "För lite.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Även om.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Vem där?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schillers samlade verk.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Valda verk.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass ...",
    "lv": "Han förtjänar att ...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Det är värt två euro.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Västerut.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Från väster.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Att ställa upp i en tävling.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Att springa i kapp.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Vad ska vi slå vad om?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Hur blir vädret?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Tävling i gymnastik.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Mot min vilja.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Att protestera. • Att framföra invändningar.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Hur gammal är han?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Hur länge?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Vi hörs!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Adjö!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Vilda djur.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Varmt välkommen!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Det är ditt drag.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Det drar.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Ganska kallt.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Ändan på en korv.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Att gå till honom.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Att gå i skolan.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Att stanna hemma.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Dag för dag.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Som tur är.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Vatten att dricka.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Till fots.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Till häst.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Med cykel.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Det slutade regna.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Jag har mycket kvar att göra.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "För tidigt.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "För stor.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Att rycka på axlarna.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Att dricka i ett svep.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Att gå under.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Att lägga till grund. • Att ta som utgångspunkt.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "För första gången.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Stäng dörren, är du snäll!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Han har gått upp i vikt.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dagarna blir längre.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Att hänga ihop med något.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Dörren är stängd.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Det skulle jag inte ha trott honom om.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Fritt inträde.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Tillträde förbjudet!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Det är för mycket!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Att bli motbjudande. • Att börja tråka ut en.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Nämligen.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Det står utom allt tvivel.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Utan tvivel.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "För det andra.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Gott nytt år!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Hjärtliga gratulationer på födelsedagen!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Trevlig resa!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Det är trevligt att få lära känna dig.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Skulle du vilja vara så snäll?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Jag är mycket tacksam mot dig.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sätt er ner, är ni snälla!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, kom fram till tavlan, är du snäll!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Slå upp era läroböcker, tack!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Gå till idrottshallen, är ni snälla!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Sover du fortfarande?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Sover du fortfarande?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Han sover djupt.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Var snäll och väck honom, det är redan sent!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Jag är verkligen ledsen!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Stort tack!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, var snäll och börja!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Läs med, är ni snälla!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, titta inte ut genom fönstret, är du snäll!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, var snäll och hämta skrivböckerna!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Gå tillbaka till din plats, är du snäll!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Klockan är halv åtta.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "När brukar du vakna?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Jag går upp alldeles strax.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Stig upp, Hanna, det ringer!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Låt mig sova fem minuter till!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Glöm inte att vädra rummet!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Var är handduken?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Jag skulle vilja borsta tänderna.",
    "level": "Sätze"
  },
  {
    "de": "Womit putzt du dir die Zähne?",
    "lv": "Vad borstar du tänderna med?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Jag skulle vilja klä på mig.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Klä på dig fort, är du snäll!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Klä dig varmare, det är kyligt ute.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "God morgon, hur mår du?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Jag mår bra, tack.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Vad finns det för nytt?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Vilket kaos det är här!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Får jag hjälpa till att städa?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Vad dricker du på morgonen, kaffe eller te?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Jag brukar dricka en kopp kaffe på morgonen.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Helst dricker jag svart kaffe.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "God morgon, har du sovit gott?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Jag är fortfarande mycket trött.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Vill du ha kaffe eller mjölk?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Ge mig en småfranska med ost, tack.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Jag måste gå nu!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Glöm inte din frukost!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, duka bordet, är du snäll!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Glöm inte servetterna!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "När äter ni lunch?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Det är dags att äta.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Vad blir det till lunch i dag?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Hur tycker du att soppan smakar?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Ärligt talat är den lite för salt.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Får jag ge dig en bit bröd?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Tack, jag har redan.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Köttet smakar utmärkt.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Tack, jag är redan mätt.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "I dag får vi besök.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Är du ledig i kväll?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Kom förbi och ät lunch hos oss i dag!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Låt oss sätta oss vid bordet.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Varsågod, ta för dig!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Stör rökningen dig?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Tack för det vänliga mottagandet!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "När går du och lägger dig?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "När jag kommer från arbetet, är jag alltid trött.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Det är dags att gå och lägga sig.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Det är fint väder.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Vill du gå en promenad med mig?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Titta, det börjar snart regna.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Ta med paraplyet!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Det regnar.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Jag är redan alldeles blöt.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Tror du att det kommer att regna hela dagen?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Det slutar regna.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Solen skiner igen.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Det är mycket varmt.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Det ser ut att bli regn.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Snart får vi ett åskväder.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Åskvädret drar förbi.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Molnen skingras.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Ser du regnbågen?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Vintern är här, det har snöat.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Det snöar.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Vad vackert det är i skogen på vintern!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Jag är kall, jag fryser.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Det är halt ute, se upp!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Ska vi gå till skridskobanan?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Ta på dig jackan, du kan bli förkyld.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Klockan är halv sju.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Min klocka går fem minuter före.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Väck mig klockan sju i morgon bitti!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Vilket datum är det i dag?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "I dag är det den elfte juli.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Vad brukar du göra på kvällarna?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Det var länge sedan vi sågs.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Hur mår du?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Ursäkta, det är en sak jag skulle vilja diskutera med dig.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Låt oss ta en promenad!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Har du lust att gå till parken med mig?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Jag kommer för att hämta dig till en promenad.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Gå lite långsammare, är du snäll, jag hänger inte med!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Det är första gången jag är i den här trakten.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Låt oss vila lite.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Nu kan vi gå tillbaka.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Ärligt talat är jag ganska trött.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Ursäkta, var ligger närmaste tunnelbanestation?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Vilken är den kortaste vägen?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Ta andra gatan till vänster här och fortsätt sedan rakt fram.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Hur kommer jag snabbast till stationen?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Jag har tänkt resa bort i morgon.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Vart vill du åka?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Reser du i tjänsten eller privat?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn åker med till Berlin, sedan fortsätter han till havet.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "När avgår båten?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Om en halvtimme.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Kan jag fortfarande få en hytt?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Glöm inte passet!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Det är dags att packa resväskan.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Tåget avgår halv sju.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Ring efter en taxi åt mig, är du snäll, annars missar jag tåget!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Kör till stationen, är du snäll!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Jag måste skynda mig.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Är biljettluckan redan öppen?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "En biljett till Köln, tack.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "När går tåget?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Tåget går strax.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Måste jag byta i Koblenz?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Ja, där måste du byta.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Är den här platsen ledig?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nej, här sitter ingen.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Var är automaten för perrongbiljetter?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Lägg mitt handbagage på bagagehyllan.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Kan jag öppna fönstret?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Det drar, stäng fönstret, är du snäll!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Vilken är nästa station?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Hur länge stannar tåget?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Var måste jag byta?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Tåget är försenat.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Den här vagnen är för icke-rökare.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Nu åker vi över gränsen.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Har du något att förtulla?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Vi har kommit fram till Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Kan du rekommendera ett bra hotell?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Har du några lediga rum?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Ett rum med två sängar, tack.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Vad kostar rummet per natt?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "I morgon reser jag. Väck mig klockan sju!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Notan, tack!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Var ligger stadsbiblioteket?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "När har museet öppet?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Ska vi gå på museum?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Åker vi buss eller tunnelbana?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Var är närmaste busshållplats?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Jag är väldigt hungrig.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Ska vi gå ut och äta tillsammans?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Servitör, menyn, tack!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Är fisken färsk?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Det här smakar utmärkt!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Servitör, notan, tack!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Jag går på kafé och dricker en kopp kaffe.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Vill du följa med?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "En kopp kaffe med mjölk, tack!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Fortare, tack, jag har bråttom!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Låt inte kaffet bli kallt!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Har du något uppfriskande?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "En portion glass, tack!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "I morse fick jag ett brev.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Jag måste skriva till honom genast.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Var är närmaste brevlåda?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Var ligger posten?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Påminn mig om att skriva i morgon!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Var snäll och lägg det här brevet i brevlådan.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hej, det är Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Kan jag ringa dig senare?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Måste jag vänta länge?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Var snäll och klipp mig.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Inte för kort i nacken, tack.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "När börjar föreställningen?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Det börjar halv åtta.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Alla platser är slutsålda.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tre biljetter, tack!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Vi lämnar jackorna i garderoben.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Skynda dig, är du snäll, ridån går upp strax!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Ridån faller.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Får jag bjuda upp dig?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "När är ert bröllop?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Jag letar efter en lägenhet.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Finns det någon ledig lägenhet i det här huset?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Hur mycket är hyran?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Lägenheten har tre rum och kök.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "I dag flyttar vi.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, var snäll och packa ner sakerna i lådor!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Har du packat allt?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Jag står i kontakt med min vän.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Ska vi gå på teater?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Har allt lastats in?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Vilken vacker utsikt!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Nu kan vi ställa allt i ordning igen.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Hur många rum har ni?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "I sommar åker jag till havet.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Kan du simma?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Simma inte för långt ut!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Badar du varje dag?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "När det är fint väder, går jag och fiskar.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Hur ser han ut?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Han har verkligen förändrats mycket.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Hur är han som människa?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Han är alltid trevlig och vänlig.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Jag mår inte bra.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Jag har svår huvudvärk.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Jag har blivit förkyld.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Jag är snuvig.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Jag är yr.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Jag måste gå till läkaren.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Lägg dig i sängen!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Har du feber?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "I går hade jag förhöjd temperatur.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Jag har tandvärk.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Jag måste gå till tandläkaren.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Vet du att Finn är sjuk?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Enligt läkaren blir han snart frisk igen.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Jag vill skaffa nya möbler till min lägenhet.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Kan jag köpa det på avbetalning?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Stanna i sängen tills du mår bättre!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah lärde sig simma på två veckor.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Var försiktig med maten ett tag till.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Talar du tyska?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Ja, lite grann.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Du talar ganska flytande.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Var har du lärt dig tyska?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Jag har tagit lektioner i tyska i ett år.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Jag letar alltid efter tillfällen att tala tyska.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Finns boken fortfarande i lager?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Boken är tyvärr slutsåld.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "När kommer den nya upplagan ut?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Vad kan jag hjälpa dig med?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Har du riktigt färska ägg?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Vad kostar de?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Det är för dyrt.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Kan du väga upp ett halvt kilo åt mig?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Hur mycket ska jag betala?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Vad kostar kilot?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Var snäll och väg upp två kilo åt mig.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Har du morötter också?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Har du bra nötkött?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Ge mig två kilo köttfärs.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Ett bröd, tack, men inte för knaprigt.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Brödet är nybakat.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Vad har du för frukt i dag?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Vad kostar äpplena?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Då tar jag två kilo äpplen.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Päronen är mycket dyra.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Kan du leverera allt hem till mig?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Har du ris?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Ge mig ett kilo ris, tack.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Tack, inte den här gången.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Vad kostar den här mattan?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Kan du leverera möblerna till min lägenhet?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Vänligen betala i kassan.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Var snäll och skriv ut räkningen.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Vad kostar metern?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Jag tycker om det här tyget.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Var snäll och klipp av tre meter åt mig.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Har du andra mönster också?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Jag tycker inte om den här färgen.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Ge mig en ljusare.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Vad kostar de här sockorna?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Vilka handskar vill du ha?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "De är lite för trånga för mig.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Så där, nu sitter de bra.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Kan du rekommendera en bra skräddare?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Jag vill beställa en kostym.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "När blir den klar?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Kostymen sitter bra.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Byxorna är för långa.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Var snäll och kemtvätta och pressa den!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "När blir klänningen klar?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Skorna är för trånga.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Kan du laga skorna i dag?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "När kan jag hämta skorna?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Mitt armbandsur fungerar inte.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Den går fem minuter före.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Är du närsynt eller långsynt?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Jag skulle vilja köpa ett par glasögon.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Kan du laga mina glasögon?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Det tar bara en kvart.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Priset är för högt för mig.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Jag behöver två foton till mitt pass.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Var snäll och slå in det och skicka hem det till mig.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Vi har fasta priser.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Var snäll och fotografera mig.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sätt dig, titta rakt in i kameran och rör dig inte!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "När kan jag se provbilden?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "När är fotona klara?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Bilden blev lyckad.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Fotona blev bra.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Kan du förstora fotot också?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Är de här stenarna äkta?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Är det äkta guld?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Var snäll och visa mig några vigselringar.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Ringen är lite för stor för mig.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Jag kan göra den mindre.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Den här ringen passar mig.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Visa mig några fina presentidéer.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Vad tycker du om de här örhängena?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Den här broschen är verkligen vacker.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Stenen är en safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Det är ingen äkta sten, det är glas.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Det här armbandet kan jag särskilt rekommendera dig.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Det är särskilt fint utfört.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Priset är inte högt.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Får jag asken gratis?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Alla smycken är stämplade.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Om min fru inte tycker om det, kan jag byta det då?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Naturligtvis, när som helst.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

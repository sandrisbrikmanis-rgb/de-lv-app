const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Pas på det!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Hvis intet kommer i vejen.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Jeg ved det!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Er han så syg?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Hvad så?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Jo mere.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Jo mere, jo bedre.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Alt peger på regn.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Det hjælper mig ikke ret meget.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Han kan ikke komme på grund af arbejde.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Tal dog!",
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
    "lv": "Tiden løber ud.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Han er overvældet af bekymring.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Har du gennemgået bogen nøje?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Ingen gennemgang!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Må jeg bede Dem?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Jeg er tørstig.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Det er præcis, hvad jeg mener.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Det betyder overhovedet ikke noget.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Hvad vil du egentlig?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Er denne sag presserende?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Meget presserende!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Jeg har travlt.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Du forestiller dig bare, at du er syg.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Hvad falder dig ind?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Der var engang …",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Stig venligst ind!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Træd venligst ind!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Jeg kunne godt lide nogle ting der.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Det anbefales.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Denne flaske indeholder eddike.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Undskyld mig, tak!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Enten... eller...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Hvem var den første?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Hvem mangler i dag?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Hvad er der galt med dig?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Hvad er dit navn?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Hvad skal det betyde?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Kom venligst nærmere!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Ud med sproget!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "I efteråret",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Mine damer og herrer!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "Fra i dag af",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "I morges",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "I nat",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Hjælp!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Jeg studerer tysk hver dag.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Kan du venligst gentage det?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Vi mødes på banegården.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Jeg er til dels enig med dig.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Denne beslutning har vidtrækkende konsekvenser.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Flere perspektiver bør overvejes.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Kan du forklare dette mere detaljeret?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Hvad mig angår...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Hvor gammel er du?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Jeg er tyve år gammel.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Fra i dag.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Fra nu af.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Der er ingen anden måde.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Ring til mig.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Sluk venligst for radioen.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Vær opmærksom på trafikken.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Det bør du være opmærksom på.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "I dag vil jeg gøre det anderledes.",
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
    "lv": "Jeg afsluttede min uddannelse.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Jeg venter på, at regnen holder op.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Han arbejder i salgsafdelingen.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Jeg er allergisk over for katte.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "På den anden side forstår jeg ham.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Jeg analyserede situationen.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Hun accepterede mit forslag.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Jeg vil gerne analysere det mere præcist.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Jeg vil ændre kontrakten.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Han ændrer konstant sin mening.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Vi havde lignende problemer før.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Ingen anelse!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Lad være med at klage.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Denne kjole er stilfuldt konservativ.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Jeg kan godt lide at lytte til harmonikamusik.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Kan du klikke på enheden?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Åbn venligst filen og klik på den.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Jeg var ude for en ulykke.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Vi går til stationen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Tænd venligst for tv'et.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Min computer er gået ned.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Jeg skal ud at fiske i weekenden.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Jeg gik glip af opkaldet.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Kan du ringe til mig senere?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Accepter venligst mit forslag.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Jeg accepterer dit tilbud.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Han tog imod invitationen.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Jeg er bange for edderkopper.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Vær ikke bange, alt vil være godt.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Find et ekko. • Find lydhørhed",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Det afhænger.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "I anledning af dette.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Antag at...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Hvad har du lavet der?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Indtil slutningen.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Du tror mig åbenbart ikke.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Efter min mening...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Lad være med at skabe dig!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Gå i gang med arbejdet.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "At blive forpustet.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "God appetit!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "I et åndedrag.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "I hvert tilfælde.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Pludselig blev alt stille.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Åbn venligst døren!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Han tog et lån.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Vi skal rydde op i lokalet i dag.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Jeg stopper nu.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Han er allerede oppe.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Vi er nødt til at udskyde mødet.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Hun irriterede mig.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Pludselig.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Straks.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Dække skaden.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Åbn døren, tak!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Sid oprejst.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Han har rejst sig.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Brug al din styrke.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Prøv meget hårdt.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Forsvind!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Under fire øjne.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "På grund af mangel på tid.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Af denne grund.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Alle undtagen dig.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Læg vægt på udseendet.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "I værste fald.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Ekstremt vigtigt.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Havudsigt.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Han har en god chance.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Hvordan udtales dette ord?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Udtryk kondolence.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Hvornår blev mesterskabet afholdt?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Hvad er dit erhverv?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Udøve indflydelse.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Spis ude.",
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
    "lv": "Så hurtigt som muligt.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Jeg er meget bange.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Trække tiden ud. • Træk til længden • Udsæt på ubestemt tid",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Betal kontant.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Bryde malm.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Lave noget rod.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Jeg har fået til opgave at gøre det.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Efter behov.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Jeg har ondt af ham.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Hvad betyder dette ord?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Forudsat at...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Hun ser nedtrykt ud.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Følg instruktionerne.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Følg ordrer.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Sende med posten.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Jeg vil virkelig gerne vide det.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "I begyndelsen.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "I begyndelsen.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Ved begyndelsen.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Ledsaget.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Med sin ledsager.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Han er langsom til at opfatte. • Han tænker langsomt",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Huske. • Gem i hukommelsen",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Ved bordet.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Være ved sine fulde fem.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "I løbet af dagen.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "På langt nær ikke så …",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Begge to.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Der var tordnende klapsalver.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Få bifald.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Udtrykke sin medfølelse.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Stå på egne ben.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "F.eks.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Yde støtte.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Yde et bidrag.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Lær nogen at kende.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Lær hinanden at kende. • Etabler kontakt",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Smørrebrød.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Som du ønsker.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Til enhver tid.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "At iagttage stilhed.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "For nemheds skyld.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Være klar.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Redde ofre i tilfælde af en ulykke.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Rapport. • Give en rapport • Give et overblik",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Alle pladser er optaget.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "En ny kost fejer godt.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Han ejer et hus.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Han har et stort mod.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Jo bedre.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Få det godt! • Bliv rask!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Selv med den bedste vilje.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Helst.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Der er tvivl.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Hans opgave er...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Sig hej.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Definitivt. • Fuldstændig sikker",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Kom på besøg.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Være på besøg",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Går ofte til koncerter.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Hvilken skole gik han på?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Tage hensyn. • Overvej",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Se bort fra. • Overvej ikke",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Han driver et hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Begge to.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Betal alt.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Angående noget.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Værsgo",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Undskyld?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Værsgo",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Jeg har en anmodning til dig.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Blæs i trompet.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Bladre i en bog",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Med bare fødder",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Med det blotte øje.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Tak for blomsterne!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Alt er fint.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Tjek venligst",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Her er han!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Alt taler for det",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Det kan jeg ikke gøre noget ved",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Jeg er imod det.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Det har jeg ikke noget imod.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Hjemmefra.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Træk med damen.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Det dæmrer.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Tak! • Tak!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Nu og da.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Det kan du regne med.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Det kommer der ikke noget ud af.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Så det...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Hvad tror du, jeg er?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Hænderne af!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Sænk ikke hovedet!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "Hjemme",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "Gå hjem",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "Af naturen.",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Tillykke!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Vær så venlig! • Vær så god!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Vær så venlig!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Hvad er der galt med dig?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Tillad mig, tak!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Må jeg ryge?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Jeg må indrømme at...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "Tidligt i går morges",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "I går aftes",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Jeg er ligeglad med...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Hvad skete der?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Lad være med at finde på historier!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "End ikke",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Gå ligeud!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Hvordan har du det • Hvordan har du det?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Spørg ham af og til, om...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "I morgen tidlig",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "I foråret",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Hvad er nyt?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Det fremgår af dette brev, at...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Fortsæt!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Han kan ikke lide...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Det viste sig, at...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Kan du huske mig • Har du tænkt på mig?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "Om vinteren",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Hvilket år er du født?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Det gør mig ondt at se...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "Jo flere jo bedre",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "Indtil nu",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Hvordan kommer man til stationen?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Kom her!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Må jeg tale med fru N.?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Hvor meget koster det?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Hvor længe varer forestillingen?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Stop det! • Drop det!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Lad mig være i fred!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Lad mig hjælpe dig!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Lad os gå!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Hvordan går det?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Længe leve!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Lev vel!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Hvad er der galt?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Arbejdet er udmattende.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Det var en anstrengende dag",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "At lære tysk kan være udmattende.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Han kræver en forklaring.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Sælgeren beder om for mange penge.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "Loven kræver det.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Det er slet ikke så svært.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Jeg har ingen penge overhovedet.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Han sagde slet ikke noget.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Hunden er sluppet fri.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Der sker meget her.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Hold vejret!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Hvad laver du?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Sig mig!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Hvad mener De med det?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Vi går med dig.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Jeg rejser med tog.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "På onsdag",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Måske.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Jeg kan ikke lide det.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "På mandag",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Godmorgen!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "Om morgenen",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Godnat!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Sæt dig ned!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Sidste nyhed!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Ikke sandt?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Nein, selvfølgelig! • Lad være!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Nå, endelig!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Hvad er det godt for?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Hvad er alt dette til for?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkering er forbudt!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Parkering er forbudt!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Han har ret.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Hvad handler det om?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Det er udelukket.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "God rejse!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Jeg er ved at løbe tør for tålmodighed.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "De siger, at...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Det er okay",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Værsgo!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Hvor meget skylder jeg? • Hvor meget skal jeg betale?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Ryst før brug!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Tag et kig!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Hvor meget...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Siden hvornår?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Hvad skal jeg gøre?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "Om sommeren",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Ikke kun... men også...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Noget andet?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Spøg til side!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Hvad er klokken?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Det er forbudt at køre igennem!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Taler du tysk?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "I stedet for...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Hvordan går det?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Den hat klæder hende godt",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "God dag!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Hvor skal vi mødes?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Kom tættere på!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Ærlighed er en dyd.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Jeg har meget at lave.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Ikke dårligt!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Han bor over mig.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Det er han sikker på.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Sådan plejer man at gøre.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Dit ur er bagud.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Hvad er klokken?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Klokken otte om morgenen.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "Desto mere",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Drej til højre!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Jo da!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "Nemlig",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "På bekostning af...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Han sad blandt publikum.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Selv tak!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Det skete som aftalt.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Rygning er forbudt!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Forkert forbindelse!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Adgang er forbudt!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Forstår du mig?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Han forstår ikke noget af det.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Forsvare sin mening",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Skabe et skænderi.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Meget bedre.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "For meget.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Efter sigende",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Fra tid til anden.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Af profession.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Han er berliner af fødsel",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Han står foran vinduet",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Før solopgang.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "For to uger siden.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Af glæde",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Først og fremmest. • Først og fremmest",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "På forhånd",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Forudsat at...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Med forbehold",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Være til stede",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Sidste uge.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Træffe foranstaltninger",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Hun ser bekendt ud for mig.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Han holder meget af litteratur.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Denne morgen. • I dag om morgenen",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Forfra.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Fremad",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Allerede i begyndelsen.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Vær i en bedre position.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "At være vågen.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Vågn op.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Stå vagt.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "I løbet af året.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Under krigen.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Tal forgæves.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Her har væggene ører.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Indtil hvornår?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Det er varmt.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Vent på en besked.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Hvad vil De?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Hvilken...? • Hvad for en...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Halvvejs.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "På den måde.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "På fredens vej.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "På grund af vores venskab.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Ifølge loven.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "At gøre ondt.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "I julen.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "På hvilken måde?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Måde og form.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Uden videre.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Indtil videre.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "Og så videre.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Ikke mere.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "På hvilken dag?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Hele verden.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "I nogle dage.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "For lidt.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Skønt.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Hvem er der?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schillers samlede skrifter.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Et udvalg af værker.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Han fortjener at...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Det er to euro værd.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Mod vest.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Fra vest.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Deltag i en konkurrence.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Løbe om kap.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Hvad er væddemålet?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Hvordan bliver vejret?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Konkurrence i gymnastik.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Mod min vilje.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "At protestere. • Fremsætte indsigelser",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Hvor gammel er han?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Hvor længe?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Vi tales!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Farvel!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Vilde dyr.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Velkommen!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Du skal trække.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Det trækker.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Ganske koldt.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Spidsen af en pølse.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Gå til ham.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Gå i skole.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Bliv hjemme.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "På daglig basis.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Heldigvis.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Vand til at drikke.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Til fods.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Til hest.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "På cykel.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Det holdt op med at regne.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Jeg har stadig meget at lave.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "For tidligt.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "For stor.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Træk på skuldrene.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Drik i én slurk.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Omkomme.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Lægge til grund.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "For første gang.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Luk venligst døren!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Han tog på i vægt.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "Dagene bliver længere.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "At blive forbundet med noget.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Døren er lukket.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Det havde jeg ikke forventet af ham.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Gratis adgang.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Adgang forbudt!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Det er for meget!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Bliv ulækker. • Bliv syg",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Nemlig.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Der er ingen tvivl.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Uden tvivl.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "For det andet.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Godt nytår!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Tillykke med fødselsdagen!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "God rejse!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Det glæder mig at møde Dem.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Vil De være så venlig?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Jeg er Dem meget taknemmelig.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Sæt jer venligst ned!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, kom venligst til tavlen!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Åbn lærebøgerne, tak!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Gå venligst til gymnastiksalen!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Sover du stadig?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Sover De stadig?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Han sover dybt.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Væk ham venligst, det er allerede sent!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Jeg er så ked af det!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Mange tak!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, start, tak!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Læs med!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, kig venligst ikke ud af vinduet!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, tag venligst notesbøgerne med!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Gå tilbage til din plads!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Klokken er halv otte.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Hvornår plejer du at vågne?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Jeg rejser mig med det samme.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Rejs dig, Hanna, det ringer på!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Lad mig sove i fem minutter mere!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Glem ikke at ventilere rummet!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Hvor er håndklædet?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Jeg vil gerne børste mine tænder.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Hvad børster du tænder med?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Jeg vil gerne tage tøj på.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Klæd dig hurtigt på, tak!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Klæd dig varmere på, det er køligt udenfor.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Godmorgen, hvordan har du det?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Jeg har det godt, tak.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Hvad er nyt?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Hvilket rod det er her!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Må jeg hjælpe med at rydde op?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Hvad drikker du om morgenen, kaffe eller te?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Jeg plejer at drikke en kop kaffe om morgenen.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Jeg drikker helst sort kaffe.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Godmorgen, sov du godt?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Jeg er stadig meget træt.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Vil du have kaffe eller mælk?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Giv mig en ostebolle, tak.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Jeg er nødt til at gå nu!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Glem ikke morgenmad!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Clara, vær venlig at dække bordet!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Glem ikke servietterne!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Hvornår spiser I frokost?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Det er tid til at spise.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Hvad skal der til frokost i dag?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Hvad synes du om suppen?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Helt ærligt, det er en anelse for salt.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Må jeg give dig en skive brød?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Tak, det har jeg allerede.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Kødet smager fantastisk.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Tak, jeg er allerede mæt.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "I dag har vi besøg.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Har du fri i aften?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Kom til frokost i dag!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Lad os sætte os ved bordet.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Tag for dig!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Generer rygning dig?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Tak for den varme velkomst!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Hvornår går du i seng?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Jeg er altid træt, når jeg kommer hjem fra arbejde.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Det er tid til at gå i seng.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Det er dejligt vejr.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Vil du gå med mig?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Se, det vil snart regne.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Tag en paraply med!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Det regner.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Jeg er allerede helt våd.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Tror du, det kommer til at regne hele dagen?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Regnen stopper.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Solen skinner igen.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Det er meget varmt.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Det ser ud til, at det kommer til at regne.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Vi får snart et uvejr med torden.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Uvejret er ved at gå over.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Skyerne trækker væk.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Ser du regnbuen?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Vinteren er her, det har sneet.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Det sner.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Hvor er det smukt i skoven om vinteren!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Jeg er kold, jeg fryser.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Det er glat udenfor, pas på!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Skal vi gå på skøjter?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Tag en jakke på, du kan blive forkølet.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Klokken er halv syv.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Mit ur går fem minutter for hurtigt.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Væk mig klokken syv i morgen!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Hvad er datoen i dag?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "I dag er det den ellevte juli.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Hvad plejer du at lave om aftenen?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Vi har ikke mødt hinanden i lang tid.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Hvordan har du det?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Undskyld, jeg vil tale med dig om noget.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Lad os gå en tur!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Vil du med mig i parken?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Jeg kommer for at hente dig til en gåtur.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Gå lidt langsommere, jeg kan ikke følge med dig!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Det er første gang, jeg er i dette område.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Lad os hvile lidt.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Nu kan vi gå tilbage.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Helt ærligt, jeg er ret træt.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Undskyld mig, hvor er den nærmeste metrostation?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Hvilken er den korteste vej?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Her tager du den anden gade til venstre og går ligeud.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Hvordan kommer jeg hurtigst til stationen?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Jeg har tænkt mig at tage afsted i morgen.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Hvor vil du hen?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Rejser du for arbejde eller fritid?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn kører til Berlin, så skal han til havet.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Hvornår afgår skibet?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Om en halv time.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Kan jeg stadig få en kabine?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Glem ikke dit pas!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Det er tid til at pakke kufferten.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Toget går klokken halv syv.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Ring til en taxa, ellers går jeg glip af toget!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Tag mig venligst til stationen!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Jeg skal skynde mig.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Er billetkontoret åbent endnu?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "En billet til Köln, tak.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Hvornår kører toget?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Toget kører snart.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Skal jeg skifte tog i Koblenz?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Ja, du skal skifte tog der.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Er dette sæde ledigt?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nein, her sidder ingen.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Hvor er platformsbilletautomaten?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Læg min håndbagage i nettet.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Må jeg åbne vinduet?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Træk igennem, luk venligst vinduet!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Hvad er næste stop?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Hvor længe står toget?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Hvor skal jeg skifte tog?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Toget er forsinket.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Denne vogn er for ikke-rygere.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Nu kører vi over grænsen.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Har du noget at fortolde?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Vi er ankommet til Berlin.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Kan du anbefale et godt hotel?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Har De ledige værelser?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Et værelse med to senge, tak.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Hvor meget koster værelset per nat?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Jeg tager afsted i morgen. Væk mig klokken syv!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Regningen, tak!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Hvor er byens bibliotek?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Hvornår er museet åbent?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Skal vi gå på museum?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Skal vi med bus eller metro?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Hvor er det nærmeste busstoppested?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Jeg er meget sulten.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Skal vi spise sammen?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Tjener, menu, tak!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Er fisken frisk?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Det smager fantastisk!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Tjener, regningen, tak!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Jeg vil gå på cafe for at drikke kaffe.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Vil du med?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "En kop kaffe med mælk, tak!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Hurtigere tak, jeg skal skynde mig!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Lad ikke kaffen blive kold!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Har De noget forfriskende?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "En portion is, tak!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Jeg modtog et brev i morges.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Jeg må skrive til ham nu.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Hvor er den nærmeste postkasse?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Hvor er posthuset?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Mind mig om at skrive i morgen!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Læg venligst dette brev i postkassen!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hej, det er Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Kan jeg ringe til dig senere?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Skal jeg vente længe?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Vil De venligst klippe mit hår?",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "I ryggen, tak, ikke for kort.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Hvornår starter showet?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Det starter klokken halv otte.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Alle billetter er udsolgt.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Tre billetter, tak!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Vi efterlader jakkerne i garderoben.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Hurtigere tak, gardinet er ved at åbne sig!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Gardinet falder.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Må jeg bede dig om at danse?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Hvornår er jeres bryllup?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Jeg leder efter en lejlighed.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Ist der en ledig lejlighed i dette hus?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Hvor meget er huslejen?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "Lejligheden har tre værelser og køkken.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Vi flytter i dag.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, læg tingene i kasser, tak!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Er alt allerede pakket ind?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Jeg er i kontakt med min ven.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Skal vi gå i teatret?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Er alt indlæst?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Hvilken smuk udsigt!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Nu kan vi rydde op igen.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Hvor mange rum har I?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Jeg tager til havet om sommeren.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Kan du svømme?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Svøm ikke for langt!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Svømmer du hver dag?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Hvis vejret er godt, tager jeg ud og fiske.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Hvordan ser han ud?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Han har dog ændret sig en del.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Hvordan er han som person?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Han er altid sød og venlig.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Jeg har det dårligt.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Jeg har en voldsom hovedpine.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Jeg er forkølet.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Jeg har en løbende næse.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Jeg er svimmel.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Jeg er nødt til at gå til lægen.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Læg dig i sengen!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Har du feber?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Jeg havde høj temperatur i går.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Jeg har tandpine.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Jeg skal til tandlægen.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Ved du, at Finn er syg?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Ifølge lægen bliver han snart rask igen.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Jeg vil gerne ommøblere lejligheden.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Kan jeg købe på afbetaling?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Bliv i sengen, indtil du har det bedre!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah lærte at svømme på to uger.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Vær stadig forsigtig med maden.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Taler du tysk?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Ja, lidt.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Du taler ret flydende.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Hvor lærte du tysk?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Jeg har taget tyskundervisning i et år.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Jeg er altid på udkig efter en mulighed for at tale tysk.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Er denne bog stadig tilgængelig?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Bogen er desværre udsolgt.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Hvornår udkommer den nye udgave?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Hvad kan jeg hjælpe Dem med?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Har De helt friske æg?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Hvor meget koster de?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Det er for dyrt.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Kan De veje et halvt kilo af til mig?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Hvor meget skal jeg betale?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Hvor meget koster et kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Vej venligst to kilo.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Har du også gulerødder?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Har du godt oksekød?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Giv mig to kilo hakket kød.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Et brød, tak, men ikke for sprødt.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Brødet er nybagt.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Hvilken frugt har du i dag?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Hvor meget koster æbler?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Så tager jeg to kilo æbler.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "Pærer er meget dyre.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Kan De levere det hele hjem til mig?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Har du ris?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Giv mig et kilo ris, tak.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Tak, ikke denne gang.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Hvor meget koster dette tæppe?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Kan du levere møbler til lejligheden?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Betal venligst i kassen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Udsted venligst en faktura.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Hvad koster meteren?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Jeg kan lide dette stof.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Skær venligst tre meter af for mig.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Har du andre prøver?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Jeg kan ikke lide denne farve.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Giv mig en lysere.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Hvor meget koster disse sokker?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Hvilke handsker ønsker De?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "De er lidt for stramme til mig.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Så passer de godt nu.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Kan du anbefale en god skrædder?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Jeg vil bestille et jakkesæt.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Hvornår vil den være klar?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Dragten sidder godt.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "Bukserne er for lange.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Rengør og stryg det!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Hvornår er kjolen klar?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "Skoene er for stramme.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Kan De reparere skoene i dag?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Hvornår kan jeg hente skoene?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Mit armbåndsur virker ikke.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Den går fem minutter for hurtigt.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Er du nærsynet eller langsynet?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Jeg vil gerne købe briller.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Kan du ordne mine briller?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Det vil kun tage femten minutter.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Prisen er for høj for mig.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Jeg skal bruge to pasbilleder.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Pak det venligst ind og send det hjem til mig.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Vi har faste priser.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Tag venligst et billede af mig.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Sæt dig ned, kig direkte ind i kameraet og bevæg dig ikke!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Hvornår kan jeg se prøvebilledet?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Hvornår er billederne klar?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "Billedet var vellykket.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Billederne blev gode.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Kan du også forstørre billedet?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Er disse sten ægte?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Er det ægte guld?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Vis mig vielsesringene, tak.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Ringen er lidt for stor til mig.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Jeg kan indsnævre det.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Denne ring passer til mig.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Fremvis smukke gaveideer.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Hvad synes du om disse øreringer?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Denne broche er meget smuk.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Denne sten er en safir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Dette er ikke ægte sten, det er glas.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Jeg kan især anbefale dette armbånd.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Det er ekstremt fint udformet.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Prisen er ikke høj.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Får jeg æsken gratis?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Alle smykker er stemplet.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Hvis min kone ikke kan lide det, kan jeg så bytte det?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Når som helst, selvfølgelig.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

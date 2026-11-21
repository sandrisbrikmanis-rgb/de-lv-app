const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Pas daarvoor op!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Als er niets tussenkomt. • Als alles volgens plan verloopt.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Dat kan ik me voorstellen!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Is hij dan ziek?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Wat dan?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Des te meer.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Hoe meer, hoe beter.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Alles wijst op regen.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Daar heb ik weinig aan.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Hij is wegens zijn werk verhinderd.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Zegt u toch iets!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Het dondert.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Twee keer zo groot.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Daarvandaan.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "De tijd dringt.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Hij gaat gebukt onder zorgen.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Heb je het boek helemaal doorgewerkt?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Geen doorgang!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Mag ik u ten dans vragen? • Wilt u mij volgen?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Ik heb dorst.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Precies dat bedoel ik.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Het maakt helemaal niets uit.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Wat wilt u eigenlijk?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Is deze zaak dringend?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Zeer dringend!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Ik heb haast.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Je beeldt je alleen maar in dat je ziek bent.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Wat haal je je in je hoofd? • Wat komt er bij je op?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Er was eens.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Stapt u alstublieft in!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Komt u binnen!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Sommige dingen bevielen me daar.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Het is raadzaam.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Deze fles bevat azijn.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Neemt u me niet kwalijk!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Of ... of ...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Wie was de eerste?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Wie is er vandaag afwezig?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Wat scheelt je?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Hoe heet u?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Wat moet dat betekenen?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Komt u alstublieft dichterbij!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Voor de dag ermee!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "in de herfst",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Dames en heren!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "vanaf vandaag",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "vanochtend",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "vannacht",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Help!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Ik leer elke dag Duits.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Kun je dat alsjeblieft herhalen?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "We zien elkaar op het station.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Ik ben het gedeeltelijk met je eens.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Deze beslissing heeft verstrekkende gevolgen.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Men zou met meerdere perspectieven rekening moeten houden.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Zou u dat nader kunnen toelichten?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Wat mij betreft, ...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Hoe oud bent u?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Ik ben twintig jaar oud.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Vanaf vandaag.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Vanaf nu.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Het kan niet anders.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Belt u me maar.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Zet u de radio alstublieft uit.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Let alsjeblieft op het verkeer.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Daar moet je op letten.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Vandaag doe ik het anders.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "We wachten op de bus.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Hij woont alleen.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Ik heb de opleiding afgerond.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Ik wacht tot de regen ophoudt.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Hij werkt op de verkoopafdeling.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Ik ben allergisch voor katten.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Aan de andere kant begrijp ik hem.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Ik heb de situatie geanalyseerd.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Ze heeft mijn voorstel aanvaard.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Ik wil dat graag nauwkeuriger analyseren.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Ik wil het contract graag wijzigen.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Hij verandert voortdurend van mening.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Soortgelijke problemen hebben we al eerder gehad.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Geen idee!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Hou op met zeuren.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Deze jurk is stijlvol en klassiek.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Ik luister graag naar accordeonmuziek.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Kun je op het apparaat klikken?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Open het bestand alsjeblieft en klik erop.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Ik heb een ongeluk gehad.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "We lopen naar het station.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Zet de televisie alsjeblieft aan.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Mijn computer is gecrasht.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "In het weekend ga ik vissen.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Ik heb het telefoontje gemist.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Kun je me later bellen?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Neem mijn voorstel alsjeblieft aan.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Ik neem je aanbod aan.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Hij nam de uitnodiging aan.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Ik ben bang voor spinnen.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Geen zorgen, alles komt goed.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "In de smaak vallen. • Weerklank vinden.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Het hangt ervan af.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Bij deze gelegenheid. • Naar aanleiding hiervan.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Laten we aannemen dat ...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Wat heb je nu uitgehaald?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Tot het einde.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Je gelooft me blijkbaar niet.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Naar mijn mening ...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Stel je niet zo aan!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Aan het werk gaan.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Buiten adem zijn.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Eet smakelijk!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "In één adem.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "In elk geval.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Opeens was alles stil.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Doe alsjeblieft de deur open!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Hij heeft de lening afgesloten.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "We moeten vandaag opruimen.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Ik stop er nu mee.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Hij is al op.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "We moeten de afspraak uitstellen.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Ze heeft me geërgerd.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Opeens.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Onmiddellijk.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "De schade vergoeden.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "De deur open, alstublieft!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Rechtop zitten.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Hij is op.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Alle krachten inzetten.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Veel moeite doen.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Ga uit mijn ogen!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Onder vier ogen.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Bij gebrek aan tijd.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Om deze reden.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Iedereen behalve jij.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Waarde hechten aan uiterlijkheden.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "In het ergste geval.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Uiterst belangrijk.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Uitzicht op zee.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Hij heeft goede vooruitzichten.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Hoe wordt dit woord uitgesproken?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Zijn deelneming betuigen.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Wanneer werden de kampioenschappen gehouden?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Welk beroep oefent u uit?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Invloed uitoefenen.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Buiten de deur eten.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Per spoor.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Met de trein.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Zo snel mogelijk.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Ik ben doodsbang.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Op de lange baan schuiven.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Contant betalen.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Erts winnen.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Er een puinhoop van maken.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Ik heb de opdracht gekregen.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Naar behoefte.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Ik heb medelijden met hem.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Wat betekent dit woord?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Op voorwaarde dat ...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Ze ziet er neerslachtig uit.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Aanwijzingen opvolgen.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Bevelen opvolgen.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Met de post versturen.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Ik ben erg benieuwd.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "In het begin.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Aan het begin.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Bij aanvang.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "In gezelschap.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Met zijn begeleider.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Hij is traag van begrip.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "In het geheugen bewaren.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Aan tafel.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Bij zinnen zijn.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Overdag.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Bij lange na niet zo.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Allebei.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Er barstte een daverend applaus los.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Bijval vinden.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Deelneming betuigen.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Op eigen benen staan.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Bijvoorbeeld.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Bijstand verlenen.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Een bijdrage leveren.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Kennismaken met iemand.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Contact aanknopen.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Belegde broodjes.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Naar uw believen.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Op elk gewenst moment.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Het stilzwijgen bewaren.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Voor het gemak.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Klaar zijn. • Bereid zijn.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Slachtoffers van een ongeval redden.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Verslag uitbrengen.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Alle plaatsen zijn bezet.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nieuwe bezems vegen schoon.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Hij bezit een huis.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Hij heeft veel moed.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Des te beter.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Beterschap!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Met de beste wil van de wereld.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Het beste.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Er bestaat twijfel.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Zijn taak bestaat erin ...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "De groeten doen.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Zeker weten.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Op bezoek komen.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Op bezoek zijn.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Vaak naar concerten gaan.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Op welke school heeft hij gezeten?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "In aanmerking nemen. • In overweging nemen.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Buiten beschouwing laten.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Hij runt een hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Allebei.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Alles betalen.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Met betrekking tot iets.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Graag gedaan. • Alsjeblieft.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Pardon?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Geen dank. • Alstublieft.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Ik heb een verzoek aan u.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Trompet spelen.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "In een boek bladeren.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Op blote voeten.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Met het blote oog.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Bedankt voor het compliment!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Alles in orde.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Graag controleren.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Daar is hij!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Alles pleit ervoor.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Ik kan er niets aan doen.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Ik ben ertegen.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Ik heb er niets op tegen.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Van huis.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Met de dame zetten.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Het schemert. • Het wordt licht.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Dank je wel!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Af en toe.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Daar kun je op rekenen.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Daar komt niets van.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Zodat ...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Waar ziet u mij voor aan?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Handen thuis!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Laat de moed niet zakken!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "thuis",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "naar huis gaan",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "van huis uit • van nature",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Van harte gefeliciteerd!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Weest u zo vriendelijk!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Weest u zo goed!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Wat heb je? • Wat is er?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Neemt u mij niet kwalijk! • Staat u mij toe!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Is roken toegestaan?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Ik moet toegeven dat ...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "gisterochtend",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "gisteravond",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Het maakt me niet uit of ...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Wat is er gebeurd?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Doe niet zo moeilijk! • Doe geen gekke dingen!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Laat staan ...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Gaat u rechtdoor!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Hoe gaat het met u?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Vraag hem bij gelegenheid of ...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "morgenochtend",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "in de lente",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Wat is er nieuws?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Uit deze brief blijkt dat ...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Ga door!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Hij is geen liefhebber van ...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Het bleek dat ...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Herinner je je mij? • Denk je aan mij?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "in de winter",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "In welk jaar bent u geboren?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Het doet me pijn te zien ...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "hoe meer, hoe beter",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "tot nu toe",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Hoe kom ik bij het station?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Kom hier!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Zou ik mevrouw N. kunnen spreken?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Wat kost dat?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Hoelang duurt de voorstelling?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Hou op! • Laat dat liggen!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Laat me met rust!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Laat mij u helpen!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Laten we gaan!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Nou, hoe gaat het?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Lang leve!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Het ga u goed! • Vaarwel!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Wat is er aan de hand?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Het werk is vermoeiend.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Dat was een vermoeiende dag.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Duits leren kan vermoeiend zijn.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Hij eist een verklaring.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "De verkoper vraagt te veel geld.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "De wet schrijft het zo voor.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Dat is helemaal niet zo moeilijk.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Ik heb helemaal geen geld.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Hij heeft helemaal niets gezegd.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "De hond is los.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Hier is veel te doen.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Hou je mond! • Overdrijf niet!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Wat doe je?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Zeg eens!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Wat bedoelt u daarmee?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "We gaan met u mee.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Ik ga met de trein.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "op woensdag",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Dat zou kunnen.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Daar hou ik niet van.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "op maandag",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Goedemorgen!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "'s morgens",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Goedenacht!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Neemt u plaats!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Het nieuwste snufje!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Toch?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Welnee! • Niet doen!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Nou, eindelijk!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Waar is dat goed voor?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Waar is dat allemaal goed voor?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Verboden te parkeren!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Niet parkeren!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Hij heeft gelijk.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Waar gaat het over?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Daar kan geen sprake van zijn.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Goede reis!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Mijn geduld raakt op.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Men zegt dat ...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Het is al goed!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Alstublieft! • Graag gedaan!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Wat ben ik u schuldig?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Voor gebruik schudden!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Kijkt u eens!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Hoezeer ook ...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Sinds wanneer?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Wat moet ik doen?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "in de zomer",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Niet alleen ..., maar ook ...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Anders nog iets?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Alle gekheid op een stokje!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Hoe laat is het?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Geen doorgaand verkeer!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Spreekt u Duits?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "In plaats van te ...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Hoe staan de zaken?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Deze hoed staat haar goed.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Goedendag!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Waar spreken we af?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Komt u dichterbij!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Eerlijkheid is een deugd.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Ik heb veel te doen.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Niet slecht!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Hij woont boven mij.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Hij is ervan overtuigd.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Zo is het gebruikelijk.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Je horloge loopt achter.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Hoe laat is het?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Om acht uur 's ochtends.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "temeer",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Rechtsom!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "En of!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "namelijk",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Op kosten van ... • Ten koste van ...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Hij zat tussen de toeschouwers.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Geen dank!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Het gebeurde zoals afgesproken.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Verboden te roken!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Verkeerd verbonden!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Verboden toegang!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Begrijpt u me?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Hij heeft er geen verstand van.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Zijn standpunt verdedigen.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Ruzie veroorzaken.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Veel beter.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Te veel.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Van horen zeggen.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Van tijd tot tijd.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Van beroep.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Hij is een geboren Berlijner.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Hij staat voor het raam.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Voor zonsopgang.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Twee weken geleden.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Van blijdschap.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Vooral.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Van tevoren.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Op voorwaarde dat ...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Onder voorbehoud.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Beschikbaar zijn. • Bestaan.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Vorige week.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Voorzorgsmaatregelen treffen.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Ze komt me bekend voor.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Hij heeft een voorliefde voor literatuur.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Vanochtend.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Van voren. • Van voren af aan.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Naar voren.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Van meet af aan.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "In het voordeel zijn.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Wakker zijn.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Wakker worden.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Op wacht staan.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Gedurende een jaar.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Tijdens de oorlog.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Voor dovemansoren praten.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Hier hebben de muren oren.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Tot wanneer?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Het is warm.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Op een bericht wachten.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Wat wilt u?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "Wat voor een ...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Halverwege.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Op deze manier. • Langs deze weg.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Langs vreedzame weg.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Ter wille van onze vriendschap.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Volgens de wet. • Eigenlijk.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Pijn doen.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Met Kerstmis.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Op welke manier?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Manier.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Zonder meer. • Zonder moeite.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Tot nader order.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "En zo verder.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Verder niets.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Op welke dag?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "De hele wereld. • Iedereen.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Over een paar dagen.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Te weinig.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Ook al.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Wie daar?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Verzamelde werken van Schiller.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Geselecteerde werken.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Hij verdient het dat ...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Het is twee euro waard.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Naar het westen.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Uit het westen.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "De concurrentie aangaan.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Om het hardst lopen.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Wat wedden we?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Hoe wordt het weer?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Turnwedstrijd.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Tegen mijn wil.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protest aantekenen. • Bezwaar maken.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Hoe oud is hij?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Hoelang?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Tot horens!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Tot ziens!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Wilde dieren.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Hartelijk welkom!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Jij bent aan zet.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Het tocht.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Vrij koud.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Eindje van een worst.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Naar hem toe gaan.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Naar school gaan.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Thuisblijven.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Met de dag.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Gelukkig.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Drinkwater.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Te voet.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Te paard.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Met de fiets.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Het hield op met regenen.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Ik heb nog veel te doen.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Te vroeg.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Te groot.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Je schouders ophalen.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "In één teug drinken.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Ten onder gaan.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Ten grondslag leggen. • Als basis nemen.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Voor het eerst.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Doet u alstublieft de deur dicht!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Hij is aangekomen.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "De dagen lengen.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Met iets samenhangen.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "De deur is dicht.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Dat had ik niet achter hem gezocht.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Vrije toegang.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Verboden toegang!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Dat is te veel!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Weerzinwekkend worden. • Gaan tegenstaan.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "En wel.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Het staat buiten kijf.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Zonder twijfel.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Ten tweede.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Gelukkig nieuwjaar!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Hartelijk gefeliciteerd met je verjaardag!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Goede reis!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Het is mij een genoegen kennis met u te maken.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Zou u alstublieft zo vriendelijk willen zijn?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Ik ben u zeer dankbaar.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Gaan jullie alsjeblieft zitten!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, kom alsjeblieft naar het bord!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Slaan jullie alsjeblieft de leerboeken open!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Gaan jullie alsjeblieft naar de gymzaal!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Slaap je nog?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Slaapt u nog?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Hij is diep in slaap gevallen.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Maak hem alsjeblieft wakker, het is al laat!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Het spijt me heel erg!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Hartelijk dank!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, begin alsjeblieft!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Lees alsjeblieft mee!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, kijk alsjeblieft niet uit het raam!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, breng alsjeblieft de schriften!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Ga alsjeblieft terug naar je plaats!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Het is half acht.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Wanneer word je meestal wakker?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Ik sta zo op.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Sta op, Hanna, de wekker gaat! • Sta op, Hanna, er wordt aangebeld!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Laat me nog vijf minuten slapen!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Vergeet niet de kamer te luchten!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Waar is de handdoek?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Ik wil graag mijn tanden poetsen.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Waarmee poets jij je tanden?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Ik wil me graag aankleden.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Kleed je alsjeblieft snel aan!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Kleed je warmer aan, het is fris buiten.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Goedemorgen, hoe gaat het met je?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Het gaat goed met me, dank je.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Wat is er nieuws?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Wat een rommel hier!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Mag ik helpen met opruimen?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Wat drink je 's ochtends, koffie of thee?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Meestal drink ik 's ochtends een kop koffie.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Het liefst drink ik zwarte koffie.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Goedemorgen, heb je goed geslapen?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Ik ben nog erg moe.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Wil je koffie of melk?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Geef me alsjeblieft een broodje kaas.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Ik moet nu weg!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Vergeet je ontbijt niet!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, dek alsjeblieft de tafel!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Vergeet de servetten niet!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Wanneer lunchen jullie?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Het is tijd om te eten.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Wat eten we vandaag tussen de middag?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Hoe vind je de soep?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Eerlijk gezegd is ze een beetje te zout.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Mag ik je een stuk brood geven?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Dank je, ik heb al wat.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "Het vlees smaakt uitstekend.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Dank je, ik zit al vol.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Vandaag hebben we bezoek.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Ben je vanavond vrij?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Kom vandaag toch langs voor de lunch!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Laten we aan tafel gaan.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Alsjeblieft, tast toe!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Heb je last van het roken?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Bedankt voor de hartelijke ontvangst!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Wanneer ga je naar bed?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Als ik van mijn werk kom, ben ik altijd moe.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Het is tijd om naar bed te gaan.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Het is mooi weer.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Wil je met mij gaan wandelen?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Kijk, het gaat zo regenen.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Neem de paraplu mee!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Het regent.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Ik ben al helemaal nat.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Denk je dat het de hele dag zal regenen?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Het houdt op met regenen.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "De zon schijnt weer.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Het is erg warm.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Het ziet ernaar uit dat het gaat regenen.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "We krijgen zo onweer.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "Het onweer trekt over.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "De wolken trekken weg.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Zie je de regenboog?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "De winter is er, het heeft gesneeuwd.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Het sneeuwt.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Wat is het 's winters mooi in het bos!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Ik heb het koud, ik verga van de kou.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Buiten is het spiegelglad, pas op!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Zullen we naar de ijsbaan gaan?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Trek je jas aan, je kunt kou vatten.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Het is half zeven.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Mijn horloge loopt vijf minuten voor.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Maak me morgenochtend om zeven uur wakker!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "De hoeveelste is het vandaag?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Vandaag is het elf juli.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Wat doe je meestal 's avonds?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Het is al lang geleden dat we elkaar hebben gezien.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Hoe gaat het met je?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Sorry, ik wil graag iets met je bespreken.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Laten we gaan wandelen!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Heb je zin om met mij naar het park te gaan?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Ik kom je ophalen voor een wandeling.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Loop alsjeblieft wat langzamer, ik kan je niet bijhouden!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Ik ben voor het eerst in deze buurt.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Laten we even uitrusten.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Nu kunnen we teruggaan.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Eerlijk gezegd ben ik nogal moe.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Sorry, waar is het dichtstbijzijnde metrostation?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Wat is de kortste weg?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Ga hier de tweede straat links in en dan steeds rechtdoor.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Hoe kom ik het snelst bij het station?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Ik ben van plan om morgen op reis te gaan.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Waar wil je naartoe?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Reis je zakelijk of privé?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn rijdt mee tot Berlijn, daarna gaat hij naar zee.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Wanneer vertrekt het schip?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Over een halfuur.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Kan ik nog een hut krijgen?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Vergeet je paspoort niet!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Het is tijd om de koffer te pakken.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "De trein vertrekt om half zeven.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Bel alsjeblieft een taxi voor me, anders mis ik de trein!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Rijd alsjeblieft naar het station!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Ik moet me haasten.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Is het loket al open?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Een kaartje naar Keulen, alstublieft.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Wanneer vertrekt de trein?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "De trein vertrekt zo.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Moet ik in Koblenz overstappen?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Ja, daar moet je overstappen.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Is deze plaats vrij?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nee, hier zit niemand.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Waar is de automaat voor perronkaartjes?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Leg mijn handbagage in het bagagerek.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Kan ik het raam opendoen?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Het tocht, doe alsjeblieft het raam dicht!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Wat is het volgende station?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Hoelang stopt de trein?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Waar moet ik overstappen?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "De trein heeft vertraging.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Deze wagon is voor niet-rokers.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "We gaan nu de grens over.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Heb je iets aan te geven?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "We zijn in Berlijn aangekomen.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Kun je me een goed hotel aanraden?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Hebt u nog kamers vrij?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Een kamer met twee bedden, alstublieft.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Wat kost de kamer per nacht?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Morgen vertrek ik. Maak me om zeven uur wakker!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "De rekening, alstublieft!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Waar is de stadsbibliotheek?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Wanneer is het museum open?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Zullen we naar het museum gaan?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Gaan we met de bus of met de metro?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Waar is de dichtstbijzijnde bushalte?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Ik heb erge honger.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Gaan we samen uit eten?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Ober, de menukaart, alstublieft!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Is de vis vers?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Dat smaakt uitstekend!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Ober, afrekenen graag!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Ik ga in het café een kop koffie drinken.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Wil je mee?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Een kop koffie met melk, alstublieft!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Graag wat sneller, ik heb haast!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Laat je koffie niet koud worden!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Hebt u iets verfrissends?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Een portie ijs, alstublieft!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Vanochtend heb ik een brief gekregen.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Ik moet hem meteen schrijven.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Waar is de dichtstbijzijnde brievenbus?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Waar is het postkantoor?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Herinner me er morgen aan om te schrijven!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Doet u deze brief alstublieft in de brievenbus.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hallo, met Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Kan ik je later bellen?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Moet ik lang wachten?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Knipt u alstublieft mijn haar.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Van achteren niet te kort, alstublieft.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Wanneer begint de voorstelling?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Het begint om half acht.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Alle plaatsen zijn uitverkocht.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Drie kaartjes, alstublieft!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "We laten de jassen in de garderobe.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Vlug alsjeblieft, het doek gaat zo op!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Het doek valt.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Mag ik je ten dans vragen?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Wanneer is jullie bruiloft?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Ik zoek een woning.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Is er in dit huis een woning vrij?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Hoeveel is de huur?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "De woning heeft drie kamers en een keuken.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Vandaag verhuizen we.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, pak de spullen alsjeblieft in dozen!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Heb je alles ingepakt?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Ik heb contact met mijn vriend.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Gaan we naar het theater?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Is alles ingeladen?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Wat een mooi uitzicht!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Nu kunnen we alles weer opruimen.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Hoeveel kamers hebben jullie?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "In de zomer ga ik naar zee.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Kun je zwemmen?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Zwem niet te ver weg!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Zwem je elke dag?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Bij mooi weer ga ik vissen.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Hoe ziet hij eruit?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Hij is wel flink veranderd.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Hoe is hij als mens?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Hij is altijd aardig en vriendelijk.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Ik voel me niet goed.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Ik heb erge hoofdpijn.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Ik ben verkouden geworden.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Ik heb een loopneus.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Ik ben duizelig.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Ik moet naar de dokter.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Ga in bed liggen!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Heb je koorts?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Gisteren had ik verhoging.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Ik heb kiespijn.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Ik moet naar de tandarts.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Weet je dat Finn ziek is?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Volgens de dokter wordt hij gauw weer beter.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Ik wil mijn appartement opnieuw inrichten.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Kan ik dat op afbetaling kopen?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Blijf in bed tot je je beter voelt!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah heeft in twee weken leren zwemmen.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Wees nog even voorzichtig met wat je eet.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Spreek je Duits?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Ja, een beetje.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Je spreekt vrij vloeiend.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Waar heb je Duits geleerd?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Ik volg al een jaar Duitse les.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Ik zoek altijd gelegenheden om Duits te spreken.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Is het boek nog op voorraad?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Het boek is helaas uitverkocht.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Wanneer verschijnt de nieuwe druk?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Waarmee kan ik u helpen?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Hebt u heel verse eieren?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Wat kosten die?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Dat is te duur.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Kunt u een halve kilo voor me afwegen?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Hoeveel moet ik betalen?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Hoeveel kost een kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Weegt u alstublieft twee kilo voor me af.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Hebt u ook wortels?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Hebt u goed rundvlees?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Geeft u mij twee kilo gehakt.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Een brood, alstublieft, maar niet te knapperig.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "Het brood is vers gebakken.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Wat voor fruit hebt u vandaag?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Wat kosten de appels?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Dan neem ik twee kilo appels.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "De peren zijn erg duur.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Kunt u alles bij mij thuis bezorgen?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Hebt u rijst?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Geeft u mij alstublieft een kilo rijst.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Dank u, deze keer niet.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Hoeveel kost dit tapijt?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Kunt u de meubels naar mijn appartement brengen?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Graag aan de kassa betalen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Maakt u alstublieft de rekening op.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Wat kost een meter?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Deze stof vind ik mooi.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Knipt u alstublieft drie meter voor me af.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Hebt u ook andere patronen? • Hebt u ook andere stalen?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Deze kleur vind ik niet mooi.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Geeft u mij een lichtere.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Wat kosten deze sokken?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Welke handschoenen wilt u?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Die zitten me wat te krap.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Zo, nu passen ze goed.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Kun je me een goede kleermaker aanraden?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Ik wil een pak laten maken.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Wanneer is het klaar?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Het pak zit goed.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "De broek is te lang.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Stoomt en strijkt u het alstublieft!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Wanneer is de jurk klaar?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "De schoenen zijn te krap.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Kunt u de schoenen vandaag repareren?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Wanneer kan ik de schoenen ophalen?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Mijn horloge werkt niet.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Het loopt vijf minuten voor.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Ben je bijziend of verziend?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Ik wil graag een bril kopen.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Kunt u mijn bril repareren?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Dat duurt maar een kwartier.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "De prijs is me te hoog.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Ik heb twee foto's nodig voor mijn paspoort.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Pakt u het alstublieft in en stuurt u het naar mijn huis.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Wij hebben vaste prijzen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Maakt u alstublieft een foto van mij.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Gaat u zitten, kijkt u recht in de camera en beweegt u niet!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Wanneer kan ik de proefdruk zien?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Wanneer zijn de foto's klaar?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "De opname is gelukt.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "De foto's zijn goed geworden.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Kunt u de foto ook vergroten?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Zijn deze stenen echt?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Is dat echt goud?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Laat u mij alstublieft trouwringen zien.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "De ring is me wat te ruim.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Ik kan hem kleiner maken.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Deze ring past me.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Laat u mij mooie cadeau-ideeën zien.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Hoe vind je deze oorbellen?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Deze broche is echt mooi.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "De steen is een saffier.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Dat is geen echte steen, dat is glas.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Deze armband kan ik u bijzonder aanbevelen.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Hij is bijzonder mooi bewerkt.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "De prijs is niet hoog.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Krijg ik de doos gratis?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Alle sieraden zijn gestempeld.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Als mijn vrouw het niet mooi vindt, kan ik het dan ruilen?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Natuurlijk, altijd.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

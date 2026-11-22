const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Pass dorop op!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Wann näischt dertëschentkënnt. • Wann alles no Plang geet.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Dat kann ech mer denken!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Ass hien da krank?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Wat dann?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Desto méi.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Wat méi, wat besser.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Et gesäit no Reen aus.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Domat ass mir wéineg gehollef.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Hien ass wéinst senger Aarbecht verhënnert.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Schwätzt dach!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Et donnert.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Duebel sou grouss.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Vun do.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "D'Zäit drängt.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Suerge bedrécken hien.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Hues du d'Buch duerchgeschafft?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Keen Duerchgank!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Däerf ech Iech bieden?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Ech hunn Duuscht.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Genee dat mengen ech.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Et ass ganz egal.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Wat wëllt Dir eigentlech?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Presséiert et mat dëser Saach?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Ganz dréngend!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Ech hunn et presséiert.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Du mengs nëmmen, du wiers krank.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Wat fält dir an?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Et war eemol.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Klammt wannechgelift an!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Kommt eran!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Verschiddenes huet mir do gefall.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Et ass ze recommandéieren.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Dës Fläsch enthält Esseg.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Entschëllegt wannechgelift!",
    "level": "Sätze"
  },
  {
    "de": "Entweder ... oder ...",
    "lv": "Entweeder... oder...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Wie war deen Éischten?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Wie feelt haut?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Wat feelt dir?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Wéi heescht Dir?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Wat soll dat heeschen?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Kommt wannechgelift méi no!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Eraus mat der Sprooch!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "am Hierscht",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Meng Dammen an Hären!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "vun haut un",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "haut de Moien",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "haut an der Nuecht",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Hëllef!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Ech léieren all Dag Däitsch.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Kanns du dat wannechgelift widderhuelen?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Mir treffen eis op der Gare.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Ech sinn deelweis mat dir d'accord.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Dës Decisioun huet wäitreechend Konsequenzen.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Et sollt ee verschidde Perspektiven a Betruecht zéien.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Kéint Dir dat méi genee erklären?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt, ...",
    "lv": "Wat mech ubelaangt,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Wéi al sidd Dir?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Ech sinn zwanzeg Joer al.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Vun haut un.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Vun elo un.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Anescht geet et net.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Rufft mech un.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Maacht wannechgelift de Radio aus.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Pass wannechgelift op de Verkéier op.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Dorop muss du oppassen.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Haut maachen ech et anescht.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Mir waarden op de Bus.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Hie wunnt eleng.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Ech hunn d'Ausbildung ofgeschloss.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Ech waarden, bis de Reen ophält.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Hie schafft am Verkaf.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Ech sinn allergesch op Kazen.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Anerersäits verstinn ech hien.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Ech hunn d'Situatioun analyséiert.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Si huet mäi Virschlag akzeptéiert.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Ech wéilt dat méi genee analyséieren.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Ech wéilt de Kontrakt änneren.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Hien ännert stänneg seng Meenung.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Änlech Problemer hate mir scho fréier.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Keng Iddi!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Hal op ze jéimeren.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Dëst Kleed ass elegant a klassesch.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Ech lauschtere gär Musek mam Akkordeon.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Kanns du den Apparat uklicken?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Maach wannechgelift de Fichier op a klick drop.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Ech hunn en Accident gehat.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Mir ginn zu Fouss op d'Gare.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Maach wannechgelift d'Tëlee un.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Mäi Computer ass ofgestierzt.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Um Weekend ginn ech fëschen.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Ech hunn den Uruff verpasst.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Kanns du mech méi spéit uruffen?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Huel wannechgelift mäi Virschlag un.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Ech huelen deng Offer un.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Hien huet d'Invitatioun ugeholl.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Ech hunn Angscht viru Spannen.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Keng Angscht, alles gëtt gutt.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Uklang fannen.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Et kënnt drop un.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Aus dësem Ulass.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass ...",
    "lv": "Huele mer un, datt...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Wat hues du do ugeriicht?",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Bis un d'Enn.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Du gleefs mer schéngs net.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach ...",
    "lv": "Menger Meenung no...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Maach net esou en Theater!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Un d'Aarbecht goen.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Ausser Otem sinn.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Gudden Appetit!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "An engem Otemzuch.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Op alle Fall.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Op eemol war et ganz roueg.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Maach wannechgelift d'Dier op!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Hien huet de Kredit opgeholl.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Mir mussen haut opraumen.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Ech halen elo op.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Hien ass schonn op.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Mir mussen d'Reunioun verréckelen.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Si huet mech opgereegt.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Op eemol.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Op der Plaz.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Fir de Schued opkommen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "D'Dier op, wannechgelift!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Riicht sëtzen.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Hien ass op.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "All Kräften asetzen.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Sech vill Méi ginn.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Géi mer aus den Aen!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Ënner véier Aen.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Aus Mangel un Zäit.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Aus dësem Grond.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "All ausser dir.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Op d'Ausgesinn Wäert leeën.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "Am äusserste Fall.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Äusserst wichteg.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Aussiicht op d'Mier.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Hien huet gutt Aussiichten.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Wéi gëtt dëst Wuert ausgeschwat?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Säi Bäileed ausdrécken.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Wéini goufen d'Meeschterschaften ausgedroen?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Wat fir e Beruff üübt Dir aus?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Afloss ausüben.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Auswäerts iessen.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Per Bunn.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Mam Zuch.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Esou séier wéi méiglech.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Mir ass Angscht a baang.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Op méi spéit verréckelen.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Boer bezuelen.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Äerz ofbauen.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Dommheete maachen.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Ech si beoptraagt.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "No Bedarf.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Ech bedaueren hien.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Wat bedeit dëst Wuert?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass ...",
    "lv": "Ënner der Konditioun, datt...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Si gesäit bedréckt aus.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Hiweiser befollegen.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Befeeler befollegen.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Mat der Post verschécken.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Ech si gespaant ze wëssen.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Zu Ufank.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Am Ufank.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Beim Ufank.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "A Begleedung.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Mat senger Begleedung.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Hien ass schwéier vu Begrëff.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Am Gediechtnes behalen.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Um Dësch.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Bei Trouscht sinn.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Bei Dag.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Bei Wäitem net esou.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Alle béid.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Stiermeschen Applaus ass lassgaangen.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Zoustëmmung fannen.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Bäileed ausdrécken.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Op eegene Bee stoen.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Zum Beispill.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Bäistand leeschten.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Bäitrag leeschten.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "D'Bekanntschaft vun engem maachen.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Bekanntschaft maachen.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Geschmiert Bréidercher.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Ganz wéi Dir wëllt.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Zu all Moment.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Stëll bleiwen.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "Fir d'Bequeemlechkeet.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Bereet sinn.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Affer vun engem Accident biergen.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Bericht maachen.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "All Plaze si besat.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Nei Bieseme kiere gutt.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Hie besëtzt en Haus.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Hien huet vill Courage.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Ëmsou besser.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Gutt Besserung!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Mam beschte Wëllen.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Am beschten.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Et besteet Zweiwel.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin ...",
    "lv": "Seng Aufgab besteet doran...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Gréiss ausriichten.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Ganz bestëmmt.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Op Besuch kommen.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Op Besuch sinn.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Dacks op Concerte goen.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Wéi eng Schoul huet hie besicht?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "A Betruecht zéien.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Ausser Betruecht loossen.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Hie bedreift en Hotel.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Alle béid.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Alles bezuelen.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Wat eppes ugeet.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Gär geschitt. • Wannechgelift.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Wéi gelift?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Gär geschitt. • Hei, wannechgelift.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Ech wéilt Iech ëm e Gefale bieden.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Trompett blosen.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "An engem Buch bliederen.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Mat blousse Féiss.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Mat bloussem A.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Merci fir d'Blummen!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Alles a Botter.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Wannechgelift kontrolléieren.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Do ass hien!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Alles schwätzt dofir.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Ech kann näischt dofir.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Ech sinn dogéint.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Ech hunn näischt dogéint.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Vun doheem.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Mat der Damm zéien.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Et gëtt däischter. • Et gëtt hell.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Villmools merci!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Vun Zäit zu Zäit.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Do kanns de dech drop verloossen.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Doraus gëtt näischt.",
    "level": "Sätze"
  },
  {
    "de": "So dass ...",
    "lv": "Sou datt...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Fir wie haalt Dir mech?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "Hänn ewech!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Looss de Kapp net hänken!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "doheem",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "heemgoen",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "ursprénglech • vun Natur aus",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Mäin häerzlechste Gléckwonsch!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Sidd esou gutt!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Sidd esou frëndlech!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Wat hues de?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Erlaabt, wannechgelift!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Ass et erlaabt ze fëmmen?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass ...",
    "lv": "Ech muss zouginn, datt...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "gëschter de Moien",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "gëschter den Owend",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob ...",
    "lv": "Et ass mir egal, ob...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Wat ass geschitt?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Maach keng Geschichten! • Maach keng Dommheeten!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn ...",
    "lv": "Nach vill manner...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Gitt riichtaus!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Wéi geet et Iech?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob ...",
    "lv": "Fro hien emol bei Geleeënheet, ob...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "muer de Moien",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "am Fréijoer",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Wat gëtt et Neies?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass ...",
    "lv": "Aus dësem Bréif geet ervir, datt...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Maach weider!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von ...",
    "lv": "Hien ass kee Frënd vun...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass ...",
    "lv": "Et huet sech erausgestallt, datt...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Erënners de dech u mech? • Denks de u mech?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "am Wanter",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Wéi ee Joergang sidd Dir?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen ...",
    "lv": "Et deet mir wéi, ze gesinn...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "wat méi, wat besser",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "bis elo",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Wéi kommen ech op d'Gare?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Komm hier!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Kéint ech mat der Madamm N. schwätzen?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Wat kascht dat?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Wéi laang dauert d'Virstellung?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Looss dat!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Looss mech a Rou!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Loosst mech Iech hëllefen!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Loosst eis goen!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Bon, wéi leeft et?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Et soll liewen!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Maacht et gutt!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Wat ass lass?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "De Job ass ustrengend.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Dat war en ustrengenden Dag.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "Däitsch léiere kann ustrengend sinn.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Hie verlaangt eng Erklärung.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "De Verkeefer verlaangt ze vill Geld.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "D'Gesetz verlaangt et esou.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Dat ass guer net sou schwéier.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Ech hu guer keng Suen.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Hien huet guer näischt gesot.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Den Hond ass lass.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Hei ass vill lass.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Sief roueg! • Iwwerdreif net!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Wat méchs de?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "So emol!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Wat mengt Dir domat?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Mir gi mat Iech.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Ech fuere mam Zuch.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "um Mëttwoch",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Et ka sinn.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Ech hunn dat net gär.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "um Méindeg",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Gudde Moien!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "moies",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Gutt Nuecht!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Huelt Plaz!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Lescht Neiegkeet!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Net wouer?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Mee neen! • Looss dat!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Elo endlech!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Wouzou notzt dat?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Wouzou notzt all dat?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parke verbueden!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Net parken!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Hien huet Recht.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Vu wat ass d'Ried?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Dovu ka keng Ried sinn.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Gutt Rees!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Ech verléieren d'Gedold.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass ...",
    "lv": "Et heescht, datt...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Scho gutt!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Wannechgelift! • Gär geschitt!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Wat sinn ech schëlleg?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Virum Gebrauch schëddelen!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Kuckt emol!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch ...",
    "lv": "Egal wéi vill...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Zënter wéini?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Wat soll ech maachen?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "am Summer",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur ..., sondern auch ...",
    "lv": "Net nëmmen..., mee och...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Soss nach eppes?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Ouni Spaass!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Wéi spéit ass et?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Duerchfaart gespaart!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Schwätzt Dir Däitsch?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu ...",
    "lv": "Amplaz ze...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Wéi geet et?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Dësen Hutt steet hir gutt.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Gudden Dag!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Wou treffe mir eis?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Kommt méi no!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Éierlechkeet ass eng Dugend.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Ech hu vill ze dinn.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Net schlecht!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Hie wunnt iwwer mir.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Hien ass dovun iwwerzeegt.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Esou ass et üblech.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Deng Auer geet no.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Wéi vill Auer ass et?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Um aacht Auer moies.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "ëmsou méi",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Riets ëm!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "Ma sécher!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "an zwar",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von ...",
    "lv": "Op Käschte vun...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Hie souz ënnert de Spectateuren.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Keng Ursaach!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Et ass geschitt, wéi ofgemaach.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Fëmme verbueden!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Falsch verbonnen!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Agank verbueden!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Verstitt Dir mech?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Hie versteet näischt dovun.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Seng Meenung vertrieden.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Sträit verursaachen.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Vill besser.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Ze vill.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Vum Héieresoen.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Vun Zäit zu Zäit.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Vu Beruff.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Hien ass Berliner vu Gebuert.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Hie steet virun der Fënster.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Virum Sonnenopgank.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Viru véierzéng Deeg.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "Vu Freed.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Virun allem.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Am Viraus.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass ...",
    "lv": "Ënnert der Viraussetzung, datt...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Ënnert dem Virbehalt.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Do sinn. • Disponibel sinn.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "An der leschter Woch.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Virsiichtsmoossnamen huelen.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Si kënnt mir bekannt vir.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Hien huet eng Virléift fir Literatur.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Haut virmëttes.",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Vu vir.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "No vir.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "Vun Ufank un.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Am Virdeel sinn.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Waakreg sinn.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Waakreg ginn.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Wuecht halen.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Wärend engem Joer.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "Wärend dem Krich.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Géint eng Mauer schwätzen.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Hei hunn d'Maueren Oueren.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Bis wéini?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Et ass waarm.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Op eng Noriicht waarden.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Wat wëllt Dir?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein ...?",
    "lv": "Wat fir en...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Um hallwe Wee.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Op dësem Wee. • Op dës Aart a Weis.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Op friddleche Wee.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "Wéinst eiser Frëndschaft.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Laut Gesetz. • Mat Recht.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Wéidoen.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Op Chrëschtdag.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Op wéi eng Aart a Weis?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Aart a Weis.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Ouni Weideres.",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "Bis op Weideres.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "A sou weider.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Soss näischt.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "U wéi engem Dag?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "D'ganz Welt. • Jiddereen.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "An e puer Deeg.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Ze wéineg.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Wann och.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Wien do? • Wien ass do?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Gesammelt Wierker vum Schiller.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Ausgewielt Wierker.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass ...",
    "lv": "Hien ass et wäert, datt...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Et ass zwee Euro wäert.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "A Richtung Westen.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Vum Westen.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "A Konkurrenz trieden.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Ëm d'Wett lafen.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Wat wette mer?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Wéi gëtt d'Wieder?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Concours am Turnen.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Géint mäi Wëllen.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Protest aleeën. • Widdersproch aleeën.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Wéi al ass hien?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Wéi laang?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Äddi, bis geschwënn!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Äddi!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Wëll Déieren.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Häerzlech wëllkomm!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Du muss zéien.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Et zitt.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Zimmlech kal.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Enn vun enger Wurscht.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Bei hie goen.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "An d'Schoul goen.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Doheem bleiwen.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Vun Dag zu Dag.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Zum Gléck.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Waasser fir ze drénken.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Zu Fouss.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Op engem Päerd.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Mam Vëlo.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Et huet opgehalen ze reenen.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Ech hunn nach vill ze dinn.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Ze fréi.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Ze grouss.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "D'Schëlleren hiewen.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "An enger Schlupp drénken.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Zugronn goen.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Als Basis huelen.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Fir déi éischte Kéier.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Maacht wannechgelift d'Dier zou!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Hien huet zougeholl.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "D'Deeg huelen zou.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Mat eppes zesummenhänken.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "D'Dier ass zou.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Dat hätt ech him net zougetraut.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Fräien Entrée.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Zougang verbueden!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Dat ass ze vill!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Ufänken ze eekelen.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "An zwar.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Et gëtt keen Zweiwel.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Ouni Zweiwel.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Zweetens.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "E schéint neit Joer!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Häerzleche Gléckwonsch zum Gebuertsdag!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Gutt Rees!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Et freet mech, Iech kennenzeléieren.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Wiert Dir wannechgelift sou léif?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Ech sinn Iech ganz dankbar.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Setzt iech wannechgelift!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, komm wannechgelift un d'Tafel!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Maacht wannechgelift d'Léierbicher op!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Gitt wannechgelift an d'Sportshal!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Schléifs du nach?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Schlooft Dir nach?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Hien ass fest ageschlof.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Erwäch hie wannechgelift, et ass scho spéit!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Et deet mer ganz leed!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Villmools merci!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, fänk wannechgelift un!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Liest wannechgelift mat!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, kuck wannechgelift net aus der Fënster!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, bréng wannechgelift d'Hefter!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Géi wannechgelift zréck op deng Plaz!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Et ass hallwer aacht.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Wéini erwächs du normalerweis?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Ech stinn direkt op.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Stéi op, Hanna, et schellt!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Looss mech nach fënnef Minutte schlofen!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Vergiess net, d'Zëmmer ze lëften!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Wou ass d'Handduch?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Ech wéilt mer d'Zänn botzen.",
    "level": "Sätze"
  },
  {
    "de": "Womit putzt du dir die Zähne?",
    "lv": "Mat wat botz du der d'Zänn?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Ech wéilt mech undoen.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Maach dech wannechgelift séier un!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Maach dech méi waarm un, dobaussen ass et frësch.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Gudde Moien, wéi geet et dir?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Mir geet et gutt, merci.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Wat gëtt et Neies?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Wat fir e Chaos hei!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Däerf ech beim Opraumen hëllefen?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Wat drénks du moies, Kaffi oder Téi?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Normalerweis drénken ech moies eng Taass Kaffi.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Am léifsten drénken ech schwaarze Kaffi.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Gudde Moien, hues du gutt geschlof?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Ech sinn nach ganz midd.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Wëlls du Kaffi oder Mëllech?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Gëff mer wannechgelift e Bréitche mat Kéis.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Ech muss elo lass!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Vergiess däi Moiesiessen net!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, deck wannechgelift den Dësch!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Vergiess d'Zerwéiten net!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Wéini iesst dir zu Mëtteg?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Et ass Zäit fir z'iessen.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Wat gëtt et haut zu Mëtteg?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Wéi schmaacht dir d'Zopp?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Éierlech gesot ass se e bëssen ze salzeg.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Däerf ech dir e Stéck Brout ginn?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Merci, ech hu schonn.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "D'Fleesch schmaacht ausgezeechent.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Merci, ech si scho sat.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Haut hu mir Besuch.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Bass du haut den Owend fräi?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Komm dach haut laanscht op d'Mëttegiessen!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Loosse mer eis un den Dësch setzen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Wannechgelift, gräif zou!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Stéiert dech d'Fëmmen?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Merci fir de frëndlechen Empfang!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Wéini gees du an d'Bett?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Wann ech vun der Aarbecht kommen, sinn ech ëmmer midd.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Et ass Zäit, fir an d'Bett ze goen.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Et ass schéint Wieder.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Wëlls du mat mir spadséiere goen?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Kuck emol, et reent gläich.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Huel de Prabbeli mat!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Et reent.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Ech si scho ganz naass.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Mengs du, datt et de ganzen Dag reent?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Et hält op ze reenen.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "D'Sonn schéngt erëm.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Et ass ganz waarm.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Et gesäit no Reen aus.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Mir kréie gläich en Donnerwieder.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "D'Donnerwieder zitt laanscht.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "D'Wolleke verzéien sech.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Gesäis du de Reebou?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "De Wanter ass do, et huet geschneit.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Et schneit.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Wéi schéin ass et am Wanter am Bësch!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Mir ass kal, ech fréieren.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Dobaussen ass Glatäis, pass op!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Wëlle mer op d'Äispist goen?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Do d'Jackett un, du kanns dech erkalen.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Et ass hallwer siwen.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Meng Auer geet fënnef Minutte vir.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Erwäch mech muer de Moien um siwen Auer!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Wat fir en Datum ass haut?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Haut ass den eelefte Juli.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Wat méchs du normalerweis owes?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Et ass scho laang hier, datt mir eis gesinn hunn.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Wéi geet et dir?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Entschëlleg, ech wéilt eppes mat dir beschwätzen.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Gi mer spadséieren!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Hues du Loscht, mat mir an de Park ze goen?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Ech kommen, fir dech fir e Spadséiergank ofzehuelen.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Géi wannechgelift e bësse méi lues, ech kann dir net nokommen!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Ech si fir d'éischt an dëser Géigend.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Loosse mer eis e bësse raschten.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Elo kënne mir zréckgoen.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Éierlech gesot sinn ech zimmlech midd.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Entschëlleg, wou ass déi nächst Metrosstatioun?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Wéi ee Wee ass de kierzten?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Géi hei déi zweet Strooss lénks an dann ëmmer riichtaus.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Wéi kommen ech am séiersten op d'Gare?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Ech hu vir, muer ze verreesen.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Wouhi wëlls du fueren?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Rees du geschäftlech oder privat?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "De Finn fiert bis Berlin mat, da geet hien un d'Mier.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Wéini fiert d'Schëff of?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "An enger hallwer Stonn.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Kann ech nach eng Kabinn kréien?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Vergiess däi Pass net!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Et ass Zäit, de Koffer ze paken.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "Den Zuch fiert um hallwer siwen of.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Ruff mer wannechgelift en Taxi, soss verpassen ech den Zuch!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Fuer wannechgelift op d'Gare!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Ech muss mech presséieren.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Ass de Guichet schonn op?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "E Billjee op Köln, wannechgelift.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Wéini fiert den Zuch fort?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Den Zuch fiert gläich fort.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Muss ech zu Koblenz ëmsteigen?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Jo, do muss du ëmsteigen.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Ass dës Plaz fräi?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nee, hei sëtzt keen.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Wou ass den Automat fir Quai-Billjeeën?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Stell mäin Handgepäck an d'Netz.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Kann ech d'Fënster opmaachen?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Et zitt, maach wannechgelift d'Fënster zou!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Wéi eng ass déi nächst Statioun?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Wéi laang hält den Zuch?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Wou muss ech ëmsteigen?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Den Zuch huet Verspéidung.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Dëse Waggon ass fir Leit, déi net fëmmen.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Mir fueren elo iwwer d'Grenz.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Hues du eppes ze verzollen?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Mir sinn zu Berlin ukomm.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Kanns du mer e gudden Hotel recommandéieren?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Hutt Dir fräi Zëmmer?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "En Zëmmer mat zwee Better, wannechgelift.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Wat kascht d'Zëmmer pro Nuecht?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Muer fueren ech fort. Erwäch mech um siwen Auer!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "D'Rechnung, wannechgelift!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Wou ass d'Stadbibliothéik?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Wéini ass de Musée op?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Solle mer an de Musée goen?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Fuere mer mam Bus oder mat der Metro?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Wou ass déi nächst Bushaltestell?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Ech hu groussen Honger.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Gi mer zesummen iessen?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Serveur, de Menu, wannechgelift!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Ass de Fësch frësch?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Dat schmaacht ausgezeechent!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Serveur, bezuelen, wannechgelift!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Ech ginn an de Café e Kaffi drénken.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Wëlls du matkommen?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Eng Taass Kaffi mat Mëllech, wannechgelift!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Méi séier, wannechgelift, ech si presséiert!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Looss däi Kaffi net kal ginn!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Hutt Dir eppes Erfrëschendes?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Eng Portioun Glace, wannechgelift!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Haut de Moien hunn ech e Bréif kritt.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Ech muss him gläich schreiwen.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Wou ass déi nächst Bréifkëscht?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Wou ass d'Post?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Erënner mech muer drun, ze schreiwen!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Geheit wannechgelift dëse Bréif an d'Bréifkëscht.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Hallo, hei schwätzt d'Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Kann ech dech méi spéit uruffen?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Muss ech laang waarden?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Schneit mer wannechgelift d'Hoer.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Hannen net ze kuerz, wannechgelift.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Wéini fänkt d'Virstellung un?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Et fänkt um hallwer aacht un.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "All Plaze sinn ausverkaaft.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Dräi Kaarten, wannechgelift!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Mir loossen d'Jacketten an der Garderob.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Séier, wannechgelift, de Riddo geet gläich op!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "De Riddo fält.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Däerf ech dech zum Danz froen?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Wéini ass är Hochzäit?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Ech sichen eng Wunneng.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Ass an dësem Haus eng Wunneng fräi?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Wéi vill kascht de Loyer?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "D'Wunneng huet dräi Zëmmer an eng Kichen.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Haut plënnere mer.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, pak d'Saache wannechgelift a Këschten!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Hues du alles agepaakt?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Ech stinn a Kontakt mat mengem Frënd.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Gi mer an den Theater?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Ass alles agelueden?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Wat eng schéin Aussiicht!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Elo kënne mer alles nees opraumen.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Wéi vill Zëmmer hutt dir?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Am Summer fueren ech un d'Mier.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Kanns du schwammen?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Schwamm net ze wäit eraus!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Gees du all Dag schwammen?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Bei schéinem Wieder ginn ech fëschen.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Wéi gesäit hien aus?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Hien huet sech awer ganz schéi verännert.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Wéi ass hien als Mënsch?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Hien ass ëmmer léif a frëndlech.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Ech fille mech net wuel.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Ech hu staarke Kappwéi.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Ech hu mech erkaalt.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Ech hunn de Schnapp.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Mir ass schwindeleg.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "Ech muss bei den Dokter goen.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Lee dech an d'Bett!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Hues du Féiwer?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Gëschter hat ech erhéicht Temperatur.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Ech hunn Zännwéi.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Ech muss bei den Zänndokter goen.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Weess du, datt de Finn krank ass?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Laut Dokter gëtt hie geschwënn erëm gesond.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Ech wëll meng Wunneng nei miwweléieren.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Kann ech dat an Tranchë bezuelen?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Bleif am Bett, bis et dir besser geet!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Den Noah huet an zwou Woche schwamme geléiert.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Sief mam Iessen nach virsiichteg.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Schwätz du Däitsch?",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Jo, e bëssen.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Du schwätz zimmlech fléissend.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Wou hues du Däitsch geléiert?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Ech huelen zënter engem Joer Däitschcoursen.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Ech sichen ëmmer eng Geleeënheet, Däitsch ze schwätzen.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Ass d'Buch nach um Lager?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "D'Buch ass leider ausverkaaft.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Wéini erschéngt déi nei Oplag?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Wéi kann ech Iech hëllefen?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Hutt Dir ganz frësch Eeër?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Wat kaschten déi?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Dat ass ze deier.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Kënnt Dir mir en hallwe Kilo ofweien?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Wéi vill muss ech bezuelen?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Wéi vill kascht de Kilo?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Weit mir wannechgelift zwee Kilo of.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Hutt Dir och Muerten?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Hutt Dir gutt Rëndfleesch?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Gitt mir zwee Kilo Gehacktes.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "E Brout, wannechgelift, awer net ze knuspereg.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "D'Brout ass frësch gebak.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Wat fir Uebst hutt Dir haut?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Wat kaschten d'Äppel?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Da huelen ech zwee Kilo Äppel.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "D'Biere si ganz deier.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Kënnt Dir mir alles heem liwweren?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Hutt Dir Räis?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Gitt mir wannechgelift e Kilo Räis.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Merci, dës Kéier net.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Wéi vill kascht dësen Teppech?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Kënnt Dir d'Miwwelen a meng Wunneng liwweren?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Wannechgelift un der Keess bezuelen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Wannechgelift, maacht d'Rechnung.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Wat kascht de Meter?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Dëse Stoff gefält mir.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Schneit mir wannechgelift dräi Meter of.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Hutt Dir och aner Muster?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Dës Faarf gefält mir net.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Gitt mir eng méi hell.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Wat kaschten dës Strëmp?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Wéi eng Händsche wënscht Dir?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Déi si mir e bëssen ze enk.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Sou, elo passen se gutt.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Kanns du mir e gudde Schneider recommandéieren?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Ech wëll e Kostüm bestellen.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Wéini ass hie fäerdeg?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "De Kostüm sëtzt gutt.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "D'Box ass ze laang.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Botzt a streckt hien, wannechgelift!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Wéini ass d'Kleed fäerdeg?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "D'Schong sinn ze enk.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Kënnt Dir d'Schong haut reparéieren?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Wéini kann ech d'Schong ofhuelen?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "Meng Aarmbandauer geet net.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Si geet fënnef Minutte vir.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Bass du kuerzsiichteg oder wäitsiichteg?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Ech wéilt gär e Brëll kafen.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Kënnt Dir mäi Brëll reparéieren?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Dat dauert nëmmen eng Véierelstonn.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "De Präis ass mir ze héich.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Ech brauch zwou Fotoe fir mäi Pass.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Paakt et wannechgelift an a schéckt mir et heem.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Mir hu fest Präisser.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Wannechgelift, fotograféiert mech.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Setzt Iech, kuckt riicht an d'Kamera a beweegt Iech net!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Wéini kann ech e Muster vun der Foto gesinn?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Wéini sinn d'Fotoe fäerdeg?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "D'Opnam ass gelongen.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "D'Fotoe si gutt ginn.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Kënnt Dir d'Foto och vergréisseren?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Sinn dës Steng echt?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Ass dat echt Gold?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Weist mir wannechgelift Brautréng.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "De Rank ass mir e bëssen ze wäit.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Ech kann hie méi enk maachen.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Dëse Rank passt mir.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Weist mir schéin Iddie fir Kaddoen.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Wéi gefalen dir dës Ouerréng?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Dës Brosch ass wierklech schéin.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "De Steen ass e Saphir.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Dat ass keen echte Steen, dat ass Glas.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Dëst Aarmband kann ech Iech besonnesch recommandéieren.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Et ass besonnesch schéi gemaach.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "De Präis ass net héich.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Kréien ech d'Këscht gratis?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "All d'Bijoue si gestempelt.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Falls et menger Fra net gefält, kann ech et ëmtauschen?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Natierlech, jidderzäit.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

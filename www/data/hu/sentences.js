const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Óvakodj tőle!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Ha semmi nem zavarja. • Ha minden a tervek szerint alakul.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "Ezt tudom!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Akkor ő beteg?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Mi van akkor?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Minél több.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Minél több, annál jobb.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Minden az esetre mutat.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Számomra nem sok értelme van.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Munka miatt nem tud jönni.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Beszélj!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Mennydörgés üvölt.",
    "level": "Sätze"
  },
  {
    "de": "Doppelt so groß.",
    "lv": "Kétszer akkora.",
    "level": "Sätze"
  },
  {
    "de": "Von dort.",
    "lv": "Onnan.",
    "level": "Sätze"
  },
  {
    "de": "Die Zeit drängt.",
    "lv": "Az idő fogy.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Eluralkodik rajta az aggodalom.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Gondosan átnézted a könyvet?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Ne menj át! • Kijárat zárva!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Megkérdezhetem",
    "level": "Sätze"
  },
  {
    "de": "Ich bin durstig.",
    "lv": "Szomjas vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Eben das meine ich.",
    "lv": "Pontosan erre gondolok.",
    "level": "Sätze"
  },
  {
    "de": "Es ist ganz egal.",
    "lv": "Egyáltalán nem számít.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Mit akarsz valójában?",
    "level": "Sätze"
  },
  {
    "de": "Eilt es mit dieser Sache?",
    "lv": "Sürgős ez az ügy?",
    "level": "Sätze"
  },
  {
    "de": "Eilt sehr!",
    "lv": "Nagyon sürgős!",
    "level": "Sätze"
  },
  {
    "de": "Ich habe es eilig.",
    "lv": "Sietek.",
    "level": "Sätze"
  },
  {
    "de": "Du bildest dir nur ein, krank zu sein.",
    "lv": "Csak azt képzeled, hogy beteg vagy.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Mi jut eszedbe?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Egyszer volt.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Kérem, lépjen be!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Kérlek gyere be!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Tetszett néhány dolog ott.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Ajánlott.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Ez a palack ecetet tartalmaz.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Elnézést kérek!",
    "level": "Sätze"
  },
  {
    "de": "Entweder... oder...",
    "lv": "Vagy... vagy...",
    "level": "Sätze"
  },
  {
    "de": "Wer war der Erste?",
    "lv": "Ki volt az első?",
    "level": "Sätze"
  },
  {
    "de": "Wer fehlt heute?",
    "lv": "Ki nem jött ma?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Mi van veled?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Mi a neved?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Ez mit jelent?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Kérlek gyere közelebb!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Beszélgetés! • Történetek!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "Ősszel",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Hölgyeim és uraim!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "Mától kezdve",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "Ma reggel",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "Tegnap este",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Segítség!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Minden nap tanulok németül.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Meg tudná ismételni kérem?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Találkozunk a vasútállomáson.",
    "level": "Sätze"
  },
  {
    "de": "Ich stimme dir teilweise zu.",
    "lv": "Részben egyetértek veled.",
    "level": "Sätze"
  },
  {
    "de": "Diese Entscheidung hat weitreichende Folgen.",
    "lv": "Ennek a döntésnek messzemenő következményei vannak.",
    "level": "Sätze"
  },
  {
    "de": "Man sollte mehrere Perspektiven berücksichtigen.",
    "lv": "Több szempontot is figyelembe kell venni.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Kifejtenéd ezt részletesebben?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt,...",
    "lv": "Ami engem illet...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Hány éves vagy?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Húsz éves vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Mától.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Ezentúl.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Nincs más út.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Hívj fel.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Kérjük, kapcsolja ki a rádiót.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Kérjük, figyeljen a forgalomra.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Erre oda kell figyelni.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Ma másképp fogom csinálni.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Várjuk a buszt.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Egyedül él.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Befejeztem a képzést. • Befejeztem tanulmányaimat.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Megvárom, míg eláll az eső.",
    "level": "Sätze"
  },
  {
    "de": "Er arbeitet in der Verkaufsabteilung.",
    "lv": "Az értékesítési osztályon dolgozik.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin allergisch gegen Katzen.",
    "lv": "Allergiás vagyok a macskákra.",
    "level": "Sätze"
  },
  {
    "de": "Andererseits verstehe ich ihn.",
    "lv": "Másrészt megértem őt.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Situation analysiert.",
    "lv": "Elemeztem a helyzetet.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat meinen Vorschlag akzeptiert.",
    "lv": "Elfogadta az ajánlatomat.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Pontosabban szeretném elemezni.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Meg akarom változtatni a szerződést.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Állandóan megváltoztatja a véleményét.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Korábban is voltak hasonló problémáink.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Fogalmam sincs!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Hagyd abba a panaszkodást.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist akademisch gekleidet.",
    "lv": "Ez a ruha stílusosan konzervatív.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Szeretek harmonika zenét hallgatni.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Rá tudsz kattintani a készülékre?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Nyissa meg a fájlt, és kattintson rá.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Balesetben voltam.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Az állomásra megyünk.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Kérjük, kapcsolja be a TV-t.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "A számítógépem összeomlott.",
    "level": "Sätze"
  },
  {
    "de": "Am Wochenende gehe ich angeln.",
    "lv": "Hétvégén horgászni megyek.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe den Anruf verpasst.",
    "lv": "Lemaradtam a hívásról.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mich später anrufen?",
    "lv": "Fel tudsz hívni később",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Kérem, fogadja el javaslatomat.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Elfogadom az ajánlatát.",
    "level": "Sätze"
  },
  {
    "de": "Er nahm die Einladung an.",
    "lv": "Elfogadta a meghívást.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Angst vor Spinnen.",
    "lv": "Félek a pókoktól.",
    "level": "Sätze"
  },
  {
    "de": "Keine Angst, alles wird gut.",
    "lv": "Ne félj, minden rendben lesz.",
    "level": "Sätze"
  },
  {
    "de": "Anklang finden.",
    "lv": "Keressen visszhangot. • Találja meg a válaszkészséget",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Attól függ.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Ez idő miatt. • Ebben a tekintetben",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass...",
    "lv": "Tegyük fel, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Mit csináltál ott",
    "level": "Sätze"
  },
  {
    "de": "Bis ans Ende.",
    "lv": "Egészen a végéig.",
    "level": "Sätze"
  },
  {
    "de": "Du glaubst mir anscheinend nicht.",
    "lv": "Úgy tűnik, nem hiszel nekem.",
    "level": "Sätze"
  },
  {
    "de": "Meiner Ansicht nach...",
    "lv": "Véleményem szerint...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Ne színlelj!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Menj dolgozni.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Kifulladni.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Jó étvágyat!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Egy lélegzettel.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Minden esetben.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Hirtelen minden elcsendesedett.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Kérem, nyissa ki az ajtót!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Kölcsönt vett fel.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Ma rendet kell tennünk a szobában.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre jetzt auf.",
    "lv": "Most abbahagyom.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schon auf.",
    "lv": "Már fent van.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen das Treffen verschieben.",
    "lv": "Újra kell ütemeznünk a találkozót.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Irritált engem.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Hirtelen.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Azonnal.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Fedje le a károkat.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Nyisd ki az ajtót, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Ülj egyenesen.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Felállt.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Minden erődet fordítsd.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Próbáld meg nagyon.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Ne nézz rám többé!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Kettőben. • Csendesen",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Időhiány miatt.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Emiatt.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Mindenki, kivéve téged.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Adj jelentőséget a megjelenésnek.",
    "level": "Sätze"
  },
  {
    "de": "Im äußersten Fall.",
    "lv": "A legrosszabb esetben.",
    "level": "Sätze"
  },
  {
    "de": "Äußerst wichtig.",
    "lv": "Rendkívül fontos.",
    "level": "Sätze"
  },
  {
    "de": "Aussicht auf die See.",
    "lv": "Tengerre néző.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Jó esélye van.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Hogyan ejtik ezt a szót?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Fejezze ki részvétét.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Mikor volt a bajnokság?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Mi a szakmád?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Befolyásolni.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Egyél kint.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Vasúton.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Vasúton.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Amint lehet.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Nagyon félek.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Késlekedik. • Húzza hosszúra • Elhalasztja határozatlan ideig",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Fizessen készpénzben.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Szerezz ércet.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Lő. • Tedd hülyét magadból",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Feladatot kaptam.",
    "level": "Sätze"
  },
  {
    "de": "Nach Bedarf.",
    "lv": "Szükség szerint.",
    "level": "Sätze"
  },
  {
    "de": "Ich bedauere ihn.",
    "lv": "Sajnálom őt.",
    "level": "Sätze"
  },
  {
    "de": "Was bedeutet dieses Wort?",
    "lv": "Mit jelent ez a szó?",
    "level": "Sätze"
  },
  {
    "de": "Unter der Bedingung, dass...",
    "lv": "Feltéve, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Depressziósnak tűnik.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Kövesse az utasításokat.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Kövesse a parancsokat.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Postán küldeni.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Nagyon szeretném tudni.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Az elején.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Az elején.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Indulás",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Kíséret.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "Kísérettel.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Lassan érzékeli. • Lassú a gondolkodása",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Emlékezz. • Őrizze meg a memóriában",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Az asztalnál.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Hogy józan legyek.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Napközben.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Egyáltalán nem.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Mindkettőt.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Mennydörgő taps hallatszott.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Szerezzen beleegyezést.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Fejezze ki részvétét.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "Hogy anyagilag független legyek.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Például.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Segíteni. • Segítségnyújtás",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Fektesse be a részesedését.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Ismerj meg valakit.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Ismerjék meg egymást. • Kapcsolatfelvétel",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Szendvicsek öntetekkel.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Ahogy akarod.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Bármikor.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Figyelni a csendet.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "A kényelem kedvéért.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Készen áll. • Legyen békében",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Az áldozatok mentése baleset esetén.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Jelentés. • Készítsen jelentést • Adjon áttekintést",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Minden hely foglalt.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Egy új seprű jól seper.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Van egy háza.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Nagy a bátorsága.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Minél jobb.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Meggyógyul! • Gyógyulj meg!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "Amit csak akarsz.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Legjobb.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Vannak kétségek.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin...",
    "lv": "Az ő feladata...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Köszönj.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Határozottan. • Teljesen biztonságos",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Látogass el.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Meglátogatni. • Meglátogatni",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Gyakran jár koncertekre.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Melyik iskolába járt?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Vegye figyelembe. • Fontolja meg",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Figyelmen kívül hagyás. • Ne vegye figyelembe",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Szállodát üzemeltet.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Mindkettőt.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Fizessen meg mindent.",
    "level": "Sätze"
  },
  {
    "de": "Bezüglich auf etwas.",
    "lv": "Valamivel kapcsolatban.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Kérem",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Hogyan kérem",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Kérem",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Egy kérésem van feléd.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Fújd meg a trombitát.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Válogassa a könyvet.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßen Füßen.",
    "lv": "Mezítláb.",
    "level": "Sätze"
  },
  {
    "de": "Mit bloßem Auge.",
    "lv": "Szabad szemmel.",
    "level": "Sätze"
  },
  {
    "de": "Danke für die Blumen!",
    "lv": "Köszönöm a virágokat!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Minden rendben van.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Ellenőrzés. • Ellenőrizze",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Itt van!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Minden jól beszél.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Nem tudok ott semmit csinálni.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Ellene vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Ez ellen nincs kifogásom.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Otthonról.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "Csinálj egy női mozdulatot.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Sötétedik. • Virrad a hajnal.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Köszönöm! • Köszönöm!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Most és akkor.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Számíthatsz rá.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Nem lesz belőle semmi.",
    "level": "Sätze"
  },
  {
    "de": "So dass...",
    "lv": "Szóval, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Mit gondolsz, mi vagyok?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "El a kezekkel!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Ne hajtsd le a fejed!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "Otthon",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "Menj haza",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "Gyermekkora óta • A kezdetektől fogva",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Gratulálok!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Légy olyan kedves! • Légy olyan jó!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Légy olyan kedves!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Mi van veled? • Mi történt?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Engedje meg, kérem!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Dohányozhatok?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass...",
    "lv": "Be kell vallanom, hogy...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "Tegnap kora reggel",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "Tegnap este",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob...",
    "lv": "Nem érdekel, ha...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Mi történt?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ne csinálj hülyeségeket! • Ne viccelj!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn...",
    "lv": "Arról nem is beszélve. • Hol máshol",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Menj egyenesen előre!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Hogy vagy • Hogy vagy?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob...",
    "lv": "Kérdezd meg, hogy kijön-e, ha...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "Holnap reggel",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "Tavasszal",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Mi újság?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass...",
    "lv": "Ebből a levélből kiderül, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Csak így tovább!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von...",
    "lv": "Nem szereti...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass...",
    "lv": "Kiderült, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Emlékszel rám • Gondoltál már rám?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "Télen",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Melyik évben születtél?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen...",
    "lv": "Szomorú nézni...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "Minél több, annál jobb",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "Egészen mostanáig",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Hogyan lehet eljutni az állomásra?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Gyere ide!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Beszélhetnék Mrs. N.-vel?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Mennyibe kerül?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Meddig tart az előadás?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Hagyd abba! • Dobd el!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Hagyjon békén!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Hadd segítsek!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Menjünk!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Hogy vagy",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Éljen!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Élj egészségesen! • Viszlát!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Mi történt?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "A munka kimerítő.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Mozgalmas nap volt.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "A német nyelvtanulás kimerítő lehet.",
    "level": "Sätze"
  },
  {
    "de": "Er verlangt eine Erklärung.",
    "lv": "Magyarázatot követel.",
    "level": "Sätze"
  },
  {
    "de": "Der Verkäufer verlangt zu viel Geld.",
    "lv": "Az eladó túl sok pénzt kér.",
    "level": "Sätze"
  },
  {
    "de": "Das Gesetz verlangt es so.",
    "lv": "A törvény megköveteli.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Egyáltalán nem olyan nehéz.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Egyáltalán nincs pénzem.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Egyáltalán nem mondott semmit.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "A kutyát elengedték.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Sok minden történik itt.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Tartsa vissza a lélegzetét!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Mit csinálsz",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Mondj igent!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Hogy érted ezt? • Mit gondolsz?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Veled megyünk.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Vonattal utazom.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "Szerdán",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Talán.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Nem szeretem.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "Hétfőn",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Jó reggelt!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "Reggel",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Jó éjszakát!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Leül!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "A legfrissebb hírek!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Jobbra?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Nem, persze! • Ne!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Na végre!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Mire jó?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Minek ez az egész?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Parkolni tilos!",
    "level": "Sätze"
  },
  {
    "de": "Nicht parken!",
    "lv": "Parkolni tilos!",
    "level": "Sätze"
  },
  {
    "de": "Er hat Recht.",
    "lv": "Igaza van.",
    "level": "Sätze"
  },
  {
    "de": "Wovon ist die Rede?",
    "lv": "Miről van szó?",
    "level": "Sätze"
  },
  {
    "de": "Davon kann keine Rede sein.",
    "lv": "Ez nem jöhet szóba.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Boldog utazást!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Kifogy a türelmem.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass...",
    "lv": "Azt mondják, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Az már jó!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Kérem!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Mennyivel tartozom? • Mennyit kell fizetnem?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Használat előtt rázza fel!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Nézzétek meg!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch...",
    "lv": "Mennyi...",
    "level": "Sätze"
  },
  {
    "de": "Seit wann?",
    "lv": "Mióta?",
    "level": "Sätze"
  },
  {
    "de": "Was soll ich tun?",
    "lv": "Mit tegyek?",
    "level": "Sätze"
  },
  {
    "de": "im Sommer",
    "lv": "Nyáron",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur..., sondern auch...",
    "lv": "Nem csak... hanem...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Még valami?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Nem vicc! • Viccek a szélén!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Mennyi az idő",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Áthajtani tilos!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Beszélsz németül?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu...",
    "lv": "Helyett...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Hogy vagy",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Ez a sapka jól áll neki.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Helló!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Hol fogunk találkozni?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Gyere közelebb!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "Az őszinteség erény.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Sok dolgom van.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Nagyon jó! • Nincs kifogás",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Fölöttem él.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Ő biztos benne.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Elfogadják.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Hátul van az órád.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Mennyi az idő?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Reggel nyolckor.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "Annál több",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Fordulj jobbra!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "És még mit!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "Ugyanis",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von...",
    "lv": "Ennek rovására...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "Leült a közönség közé.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Semmit a semmiért!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "Megbeszéltek szerint történt.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Dohányozni tilos!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Hibás kapcsolat!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "A belépés tilos!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Értesz engem?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Nem ért belőle semmit.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Védd meg a véleményedet.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Hozz vitát.",
    "level": "Sätze"
  },
  {
    "de": "Viel besser.",
    "lv": "Sokkal jobb.",
    "level": "Sätze"
  },
  {
    "de": "Zu viel.",
    "lv": "Túl sok.",
    "level": "Sätze"
  },
  {
    "de": "Vom Hörensagen.",
    "lv": "Hallás után.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Időről időre.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Szakma szerint.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Születése szerint berlini.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Az ablaknál áll.",
    "level": "Sätze"
  },
  {
    "de": "Vor Sonnenaufgang.",
    "lv": "Napkelte előtt.",
    "level": "Sätze"
  },
  {
    "de": "Vor vierzehn Tagen.",
    "lv": "Két héttel ezelőtt.",
    "level": "Sätze"
  },
  {
    "de": "Vor Freude.",
    "lv": "A szórakozás kedvéért.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Először is. • Először is",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Korábban.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass...",
    "lv": "Feltéve, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Feltételesen.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Lenni. • Legyen jelen • Legyen elérhető",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "Múlt héten.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Tegyen intézkedéseket a védelem érdekében.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Ismerősnek tűnik számomra.",
    "level": "Sätze"
  },
  {
    "de": "Er hat Vorliebe für Literatur.",
    "lv": "Nagyon szereti az irodalmat.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Ma reggel. • Ma reggel",
    "level": "Sätze"
  },
  {
    "de": "Von vorn.",
    "lv": "Elölről.",
    "level": "Sätze"
  },
  {
    "de": "Nach vorn.",
    "lv": "Előre.",
    "level": "Sätze"
  },
  {
    "de": "Von vornherein.",
    "lv": "A legelején.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Legyen jobb helyzetben.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Ébren lenni.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Felébred.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Állj őrt.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Az év folyamán.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "A háború alatt.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "Hiába beszélj.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Itt a falaknak fülük van.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Meddig?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Meleg van.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Várja meg az üzenetet.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Mit akarsz?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein...?",
    "lv": "WHO...? • Mi a helyzet...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Félúton.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Így. • Az ilyen alapokra",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "A béke útján.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "A barátságunk miatt.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Az igazságszolgáltatás által.",
    "level": "Sätze"
  },
  {
    "de": "Weh tun.",
    "lv": "Fájni.",
    "level": "Sätze"
  },
  {
    "de": "Zu Weihnachten.",
    "lv": "Karácsonykor.",
    "level": "Sätze"
  },
  {
    "de": "Auf welche Weise?",
    "lv": "Milyen módon?",
    "level": "Sätze"
  },
  {
    "de": "Art und Weise.",
    "lv": "Írja be.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Azonnal. • Azonnal",
    "level": "Sätze"
  },
  {
    "de": "Bis auf weiteres.",
    "lv": "További értesítésig.",
    "level": "Sätze"
  },
  {
    "de": "Und so weiter.",
    "lv": "És így tovább.",
    "level": "Sätze"
  },
  {
    "de": "Weiter nichts.",
    "lv": "Semmi több.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Melyik napon?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Az egész világ. • Mindenki",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Néhány napon belül.",
    "level": "Sätze"
  },
  {
    "de": "Zu wenig.",
    "lv": "Túl kevés.",
    "level": "Sätze"
  },
  {
    "de": "Wenn auch.",
    "lv": "Bár.",
    "level": "Sätze"
  },
  {
    "de": "Wer da?",
    "lv": "Mi van ott?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schiller összegyűjtött írásai.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Válogatás művekből.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass...",
    "lv": "Megérdemli, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Két euróba kerül.",
    "level": "Sätze"
  },
  {
    "de": "Nach Westen.",
    "lv": "Nyugatra.",
    "level": "Sätze"
  },
  {
    "de": "Von Westen.",
    "lv": "Nyugatról.",
    "level": "Sätze"
  },
  {
    "de": "In Wettbewerb treten.",
    "lv": "Lépj be a versenybe.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Futtassa a versenyt.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Mire alkudunk?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Milyen lesz az időjárás?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Tornaversenyek.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Akaratom ellenére.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Tiltakozni. • Tegyen fel ellenvetéseket",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Hány éves?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Meddig",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Búcsú!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Búcsú!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Vadon élő állatok.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Meleg üdvözlettel!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Van egy lépésed.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Húzni",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Elég hideg.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "Kolbász tipp.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Menj el hozzá.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Menj iskolába.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Otthon marad.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Napi szinten.",
    "level": "Sätze"
  },
  {
    "de": "Zum Glück.",
    "lv": "Szerencsére.",
    "level": "Sätze"
  },
  {
    "de": "Wasser zum Trinken.",
    "lv": "Ivóvíz.",
    "level": "Sätze"
  },
  {
    "de": "Zu Fuß.",
    "lv": "Lábaknak.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Igen.",
    "level": "Sätze"
  },
  {
    "de": "Zu Rad.",
    "lv": "Kerékpárral.",
    "level": "Sätze"
  },
  {
    "de": "Es hörte auf zu regnen.",
    "lv": "Elállt az eső.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe noch viel zu tun.",
    "lv": "Még sok dolgom van.",
    "level": "Sätze"
  },
  {
    "de": "Zu früh.",
    "lv": "Túl korán.",
    "level": "Sätze"
  },
  {
    "de": "Zu groß.",
    "lv": "Túl nagy.",
    "level": "Sätze"
  },
  {
    "de": "Mit den Achseln zucken.",
    "lv": "Vállat von.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Igyál egy kortyban.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Elpusztul.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Tedd az alapra. • Vegyük alapul.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Most először.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Kérem csukja be az ajtót!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Hízott.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "A nappalok egyre hosszabbak.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Társulni valamihez.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Az ajtó zárva van.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Ezt nem vártam volna tőle.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Ingyenes belépés.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "A belépés tilos!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Ez túl sok!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Undorítóvá válni. • Legyen beteg",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Ugyanis.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Semmi kétség.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Habozás nélkül.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Másodszor.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Boldog Új Évet!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Boldog születésnapot!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Boldog utazást!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Örülök, hogy találkoztunk.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Lennél olyan kedves?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Nagyon hálás vagyok neked.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Ülj le, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, kérlek gyere a táblához!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Nyisd ki a tankönyveket, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Kérlek menj az edzőterembe!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Alszol még",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Még mindig alszol?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Mélyen alszik.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Kérem, ébressze fel, már késő van!",
    "level": "Sätze"
  },
  {
    "de": "Es tut mir sehr leid!",
    "lv": "Nagyon sajnálom!",
    "level": "Sätze"
  },
  {
    "de": "Vielen Dank!",
    "lv": "Köszönöm szépen!",
    "level": "Sätze"
  },
  {
    "de": "Finn, fang bitte an!",
    "lv": "Finn, kezdd, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Olvass tovább, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, ​​kérlek, ne nézz ki az ablakon!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jónás, kérlek, hozd a füzeteket!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Menj vissza a helyedre!",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb acht.",
    "lv": "Fél nyolc van.",
    "level": "Sätze"
  },
  {
    "de": "Wann wachst du gewöhnlich auf?",
    "lv": "Általában mikor ébredsz fel?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe gleich auf.",
    "lv": "Mindjárt felkelek.",
    "level": "Sätze"
  },
  {
    "de": "Steh auf, Hanna, es klingelt!",
    "lv": "Kelj fel, Hannah, szól a csengő!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Hadd aludjak még öt percet!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Ne felejtse el szellőztetni a helyiséget!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Hol van a törölköző",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Fogat akarok mosni.",
    "level": "Sätze"
  },
  {
    "de": "Mit was putzt du dir die Zähne?",
    "lv": "Mivel mosol fogat?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Fel akarok öltözni.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Öltözz fel gyorsan, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Öltözz melegen, hideg van kint.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, wie geht es dir?",
    "lv": "Jó reggelt, hogy vagy?",
    "level": "Sätze"
  },
  {
    "de": "Mir geht es gut, danke.",
    "lv": "Jól vagyok, köszönöm.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es Neues?",
    "lv": "Mi újság?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein Chaos hier!",
    "lv": "Micsoda rendetlenség van itt!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich beim Aufräumen helfen?",
    "lv": "Segíthetek rendet rakni?",
    "level": "Sätze"
  },
  {
    "de": "Was trinkst du morgens, Kaffee oder Tee?",
    "lv": "Mit iszol reggel, kávét vagy teát?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Általában reggel iszom egy csésze kávét.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "A legjobban fekete kávét iszom.",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen, hast du gut geschlafen?",
    "lv": "Jó reggelt, jól aludtál?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin noch sehr müde.",
    "lv": "Még mindig nagyon fáradt vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Willst du Kaffee oder Milch?",
    "lv": "Kávét vagy tejet kérsz?",
    "level": "Sätze"
  },
  {
    "de": "Gib mir bitte ein Brötchen mit Käse.",
    "lv": "Adj egy sajtos zsemlét, kérlek.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss jetzt los!",
    "lv": "Most mennem kell!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss dein Frühstück nicht!",
    "lv": "Ne felejtsd el a reggelit!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Clara, kérlek, teríts asztalt!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Ne felejtsd el a szalvétákat!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Mikor ebédelsz",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Itt az ideje enni.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Mi van ma ebédre?",
    "level": "Sätze"
  },
  {
    "de": "Wie schmeckt dir die Suppe?",
    "lv": "Hogy ízlik a leves?",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt ist sie etwas zu salzig.",
    "lv": "Őszintén szólva egy kicsit túl sós.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dir ein Stück Brot geben?",
    "lv": "Adhatok egy szelet kenyeret?",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich habe schon.",
    "lv": "Köszönöm, már megvan.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "A hús remek ízű.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Köszönöm, már jóllaktam.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Ma látogatóink vannak.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Szabad vagy ma este",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Gyere el ma ebédelni!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Üljünk le az asztalhoz.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Kérlek egyél annyit, amennyit akarsz!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Zavar a dohányzás?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Köszönöm a szívélyes fogadtatást!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Mikor mész aludni",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Mindig fáradt vagyok, amikor hazajövök a munkából.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Ideje aludni.",
    "level": "Sätze"
  },
  {
    "de": "Es ist schönes Wetter.",
    "lv": "Szép idő van.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mit mir spazieren gehen?",
    "lv": "Akarsz velem sétálni?",
    "level": "Sätze"
  },
  {
    "de": "Sieh mal, es wird gleich regnen.",
    "lv": "Nézd, hamarosan esik az eső.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Vigyél magaddal esernyőt!",
    "level": "Sätze"
  },
  {
    "de": "Es regnet.",
    "lv": "Esik az eső.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin schon ganz nass.",
    "lv": "Már teljesen vizes vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Glaubst du, dass es den ganzen Tag regnen wird?",
    "lv": "Gondolod, hogy egész nap esni fog?",
    "level": "Sätze"
  },
  {
    "de": "Es hört auf zu regnen.",
    "lv": "Az eső eláll.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Ismét süt a nap.",
    "level": "Sätze"
  },
  {
    "de": "Es ist sehr warm.",
    "lv": "Nagyon meleg van.",
    "level": "Sätze"
  },
  {
    "de": "Es sieht nach Regen aus.",
    "lv": "Úgy tűnik, esni fog.",
    "level": "Sätze"
  },
  {
    "de": "Wir bekommen gleich ein Gewitter.",
    "lv": "Mindjárt vihar lesz nálunk.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "A vihar elmúlt.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "A felhők szétoszlanak.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Látod a szivárványt?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Itt a tél, éjszaka esett a hó.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Havazik.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Milyen szép télen az erdőben!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Fázok, megfagyok.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Kint csúszós, vigyázzatok!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Menjünk korcsolyázni?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Vegyél fel kabátot, megfázhatsz.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Fél nyolc van.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Az órám öt perc gyors.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Ébress fel holnap hétkor!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Mi a mai dátum?",
    "level": "Sätze"
  },
  {
    "de": "Heute ist der elfte Juli.",
    "lv": "Ma július tizenegyedike van.",
    "level": "Sätze"
  },
  {
    "de": "Was machst du gewöhnlich am Abend?",
    "lv": "Mit csinálsz általában esténként?",
    "level": "Sätze"
  },
  {
    "de": "Es ist schon lange her, dass wir uns gesehen haben.",
    "lv": "Régóta nem találkoztunk.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Hogy vagy",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Elnézést, szeretnék valamit megbeszélni veled.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Menjünk sétálni!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Akarsz velem menni a parkba?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Azért jöttem, hogy elvigyem sétálni.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Menj egy kicsit lassabban, nem tudok lépést tartani veled!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Most vagyok itt először.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Pihenjünk egy kicsit.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Most már mehetünk vissza.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Őszintén szólva, elég fáradt vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Elnézést, hol van a legközelebbi metrómegálló?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Melyik a legrövidebb út?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Itt forduljon balra a második utcán, és menjen tovább egyenesen.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Hogyan lehet gyorsabban eljutni az állomásra?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Holnap szándékozom elmenni.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Hova akarsz menni?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Munka vagy szabadidő miatt utazik?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn Berlinbe autózik, aztán a tengerhez megy.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt das Schiff ab?",
    "lv": "Mikor indul a hajó?",
    "level": "Sätze"
  },
  {
    "de": "In einer halben Stunde.",
    "lv": "Fél óra múlva.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich noch eine Kabine bekommen?",
    "lv": "Kaphatok még kabint?",
    "level": "Sätze"
  },
  {
    "de": "Vergiss deinen Pass nicht!",
    "lv": "Ne felejtse el az útlevelét!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Ideje bepakolni a bőröndöt.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "A vonat fél nyolckor indul.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Kérem, hívjon taxit, különben lekésem a vonatot!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Kérem, vigyen el az állomásra!",
    "level": "Sätze"
  },
  {
    "de": "Ich muss mich beeilen.",
    "lv": "Sietnem kell.",
    "level": "Sätze"
  },
  {
    "de": "Ist der Schalter schon offen?",
    "lv": "Nyitva van már a pénztár?",
    "level": "Sätze"
  },
  {
    "de": "Eine Fahrkarte nach Köln, bitte.",
    "lv": "Egy jegy Kölnbe, kérem.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Mikor indul a vonat?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "Hamarosan indul a vonat.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Kell-e helyet cserélnem Koblenzben?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Igen, ott kell helyet cserélni.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Ez a hely elérhető?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nem, nem ül itt senki.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Hol van a peron jegykiadó automata?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Tedd be a kézipoggyászomat a rácsba.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Kinyithatom az ablakot?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Húzz át, kérlek csukd be az ablakot!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Mi a következő megálló?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Meddig áll a vonat?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Hova kell áthelyeznem?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "A vonat késik.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Ez a kocsi nemdohányzó.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Most átmegyünk a határon.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Van valami tisztáznivalója?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Megérkeztünk Berlinbe.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Tudtok ajánlani egy jó szállodát?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Van szabad szobád?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Egy szoba két ággyal, kérem.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Mennyibe kerül a szoba éjszakánként?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Holnap indulok. Ébressz fel hétkor!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "Bill, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Stadtbibliothek?",
    "lv": "Hol van a városi könyvtár?",
    "level": "Sätze"
  },
  {
    "de": "Wann hat das Museum geöffnet?",
    "lv": "Mikor van nyitva a múzeum?",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir ins Museum gehen?",
    "lv": "Menjünk a múzeumba?",
    "level": "Sätze"
  },
  {
    "de": "Fahren wir mit dem Bus oder der U-Bahn?",
    "lv": "Busszal vagy metróval megyünk?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die nächste Bushaltestelle?",
    "lv": "Hol van a legközelebbi buszmegálló?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe großen Hunger.",
    "lv": "Nagyon éhes vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir zusammen essen?",
    "lv": "Menjünk együtt enni?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Pincérek, menü, kérem!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Friss a hal?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Nagyon ízlik!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Pincérek, fizessenek!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Elmegyek egy kávézóba kávézni.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Akarsz jönni?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Egy csésze kávét tejjel, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Gyorsabban kérem, sietnem kell!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Ne hagyja kihűlni a kávét!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Van valami frissítőd?",
    "level": "Sätze"
  },
  {
    "de": "Eine Portion Eis, bitte!",
    "lv": "Egy adag fagylaltot kérek!",
    "level": "Sätze"
  },
  {
    "de": "Heute Morgen habe ich einen Brief bekommen.",
    "lv": "Ma reggel kaptam egy levelet.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss ihm gleich schreiben.",
    "lv": "Most írnom kell neki.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Hol van a legközelebbi postafiók?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Hol van a posta?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran zu schreiben!",
    "lv": "Emlékeztess, hogy holnap aláírjam!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Kérjük, dobja be ezt a levelet a postafiókba!",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Helló, ő Emma.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Hívhatlak később",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Sokat kell várnom?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Kérlek vágd le a hajam.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Hátul, kérem, ne túl rövid.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Mikor kezdődik az előadás?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Fél kilenckor kezdődik.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind ausverkauft.",
    "lv": "Minden jegy elkelt.",
    "level": "Sätze"
  },
  {
    "de": "Drei Karten, bitte!",
    "lv": "Három jegyet kérek!",
    "level": "Sätze"
  },
  {
    "de": "Wir lassen die Jacken in der Garderobe.",
    "lv": "Hagyjuk a kabátokat a gardróbban.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Gyorsabban kérem, hamarosan nyílik a függöny!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "A függöny leesik.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Megkérhetlek táncolni?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Mikor lesz az esküvőd?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Lakást keresek.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Van szabad lakás ebben a házban?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Mennyi a bérleti díj?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "A lakásban három szoba és egy konyha található.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Ma költözünk.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, rakd dobozokba a dolgokat, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Már minden be van dobozolva?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Levelezésben vagyok a barátommal.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Menjünk színházba?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Minden fel van töltve?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Milyen gyönyörű kilátás!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Most mindent újra összerakhatunk.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Hány szobád van?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Nyáron elmegyek a tengerhez.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Tud úszni",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Ne ússzon túl messzire!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Minden nap úszol?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Ha jó az idő, horgászni megyek.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Hogy néz ki?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Azonban eléggé megváltozott.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Milyen ő mint ember?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Mindig kedves és kedves.",
    "level": "Sätze"
  },
  {
    "de": "Ich fühle mich nicht wohl.",
    "lv": "Rosszul érzem magam.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe starke Kopfschmerzen.",
    "lv": "Erős fejfájásom van.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe mich erkältet.",
    "lv": "Influenzás vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Schnupfen.",
    "lv": "Náthás vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist schwindlig.",
    "lv": "Szédülök.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Arzt gehen.",
    "lv": "El kell mennem az orvoshoz.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Feküdj az ágyba!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Lázad van?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Tegnap magas hőmérsékletem volt.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe Zahnschmerzen.",
    "lv": "Fáj a fogam.",
    "level": "Sätze"
  },
  {
    "de": "Ich muss zum Zahnarzt gehen.",
    "lv": "Fogorvoshoz kell mennem.",
    "level": "Sätze"
  },
  {
    "de": "Weißt du, dass Finn krank ist?",
    "lv": "Tudod, hogy Finn beteg?",
    "level": "Sätze"
  },
  {
    "de": "Laut Arzt wird er bald wieder gesund.",
    "lv": "Az orvos szerint hamarosan újra rendbe jön.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Szeretném felújítani a lakást.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Lehet részletre vásárolni?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Maradj ágyban, amíg jobban nem érzi magát!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noé két hét alatt megtanult úszni.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Legyen óvatos az étellel.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Beszélsz németül",
    "level": "Sätze"
  },
  {
    "de": "Ja, ein bisschen.",
    "lv": "Igen, egy kicsit.",
    "level": "Sätze"
  },
  {
    "de": "Du sprichst ziemlich fließend.",
    "lv": "Elég folyékonyan beszélsz.",
    "level": "Sätze"
  },
  {
    "de": "Wo hast du Deutsch gelernt?",
    "lv": "Hol tanultál németül?",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme seit einem Jahr Deutschstunden.",
    "lv": "Egy éve járok német leckére.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Mindig keresi a lehetőséget, hogy németül beszéljen.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Elérhető még ez a könyv?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Sajnos a könyv elkelt.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Mikor jelenik meg az új kiadás?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Hogyan segíthetek?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Van friss tojásod?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Mennyibe kerülnek?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Túl drága.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Tudsz fél kilót nyomni?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Mennyit kell fizetnem?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Mennyibe kerül egy kilogramm?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Kérem, mérjen két kilogrammot.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Neked is van sárgarépa?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Van jó marhahúsod?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Adj két kilogramm darált húst.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Egy vekni kenyeret kérek, de ne túl kemény.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "A kenyér frissen sült.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Milyen gyümölcsöt eszel ma?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Mennyibe kerül az alma?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Akkor veszek két kilogramm almát.",
    "level": "Sätze"
  },
  {
    "de": "Die Birnen sind sehr teuer.",
    "lv": "A körte nagyon drága.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir alles nach Hause liefern?",
    "lv": "Mindent házhoz tud szállítani?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie Reis?",
    "lv": "Van rizsed?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Adj egy kilogramm rizst, kérlek.",
    "level": "Sätze"
  },
  {
    "de": "Danke, diesmal nicht.",
    "lv": "Köszönöm, ezúttal nem.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet dieser Teppich?",
    "lv": "Mennyibe kerül ez a szőnyeg?",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Möbel in meine Wohnung liefern?",
    "lv": "Tudsz bútort szállítani a lakásba?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Kérjük, fizessen a pénztárban.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Kérjük, állítson ki számlát.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Mennyibe kerül egy mérő?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Imádom ezt a szövetet.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Kérem vágjon három métert.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Vannak más mintáid?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Nem szeretem ezt a színt.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Adj fényesebbet.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Mennyibe kerülnek ezek a zoknik?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Milyen kesztyűt szeretnél?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Nekem kicsit túl szűkek.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Szóval most jól működik.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Tudtok ajánlani egy jó szabót?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Öltönyt szeretnék rendelni.",
    "level": "Sätze"
  },
  {
    "de": "Wann wird er fertig sein?",
    "lv": "Mikor lesz kész?",
    "level": "Sätze"
  },
  {
    "de": "Der Anzug sitzt gut.",
    "lv": "Az öltöny jól áll.",
    "level": "Sätze"
  },
  {
    "de": "Die Hose ist zu lang.",
    "lv": "A nadrág túl hosszú.",
    "level": "Sätze"
  },
  {
    "de": "Bitte reinigen und bügeln Sie ihn!",
    "lv": "Kérjük, tisztítsa meg és vasalja ki!",
    "level": "Sätze"
  },
  {
    "de": "Wann wird das Kleid fertig sein?",
    "lv": "Mikor lesz kész a ruha?",
    "level": "Sätze"
  },
  {
    "de": "Die Schuhe sind zu eng.",
    "lv": "A cipő túl szűk.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie die Schuhe heute reparieren?",
    "lv": "Meg tudod javítani a cipődet ma?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Mikor vihetem a cipőt?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "A karórám nem működik.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Öt perccel korábban van.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Rövidlátó vagy távollátó?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Szemüveget szeretnék venni.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Meg tudod javítani a szemüvegemet?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Mindössze tizenöt percig tart.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Az ár túl magas nekem.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Két igazolványképre van szükségem.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Kérem csomagolja be és küldje haza.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Fix áraink vannak.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Kérlek, készíts rólam képet.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Ülj le, nézz egyenesen a kamerába, és ne mozdulj!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Mikor láthatok mintát?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Mikorra lesznek készen a képek?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "A fotó sikeres volt.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "Jól sikerültek a fotók.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "A fotót is fel tudod nagyítani?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Valódiak ezek a kövek?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Valódi arany?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Kérem, mutassa meg a jegygyűrűt.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "Nekem kicsit túl nagy a gyűrű.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Szűkíthetem.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Nekem bejön ez a gyűrű.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Mutasson gyönyörű ajándékötleteket.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Nektek hogy tetszenek ezek a fülbevalók?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Nagyon szép ez a bross.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "Ez a kő zafír.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Ez nem igazi kő, hanem üveg.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Ezt a karkötőt kifejezetten tudom ajánlani.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Rendkívül finoman kidolgozott.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Az ár nem magas.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "Ingyen kaptam a dobozt?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Minden ékszer pecsétes.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Ha a feleségemnek nem tetszik, kicserélhetem?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Természetesen bármikor.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;

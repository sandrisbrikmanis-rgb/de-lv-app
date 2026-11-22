const SENTENCE_ENTRIES = [
  {
    "de": "Hüte dich davor!",
    "lv": "Óvakodj tőle!",
    "level": "Sätze"
  },
  {
    "de": "Wenn nichts dazwischenkommt.",
    "lv": "Ha semmi sem jön közbe. • Ha minden a terv szerint alakul.",
    "level": "Sätze"
  },
  {
    "de": "Das kann ich mir denken!",
    "lv": "El tudom képzelni!",
    "level": "Sätze"
  },
  {
    "de": "Ist er denn krank?",
    "lv": "Csak nem beteg?",
    "level": "Sätze"
  },
  {
    "de": "Was denn?",
    "lv": "Mi az?",
    "level": "Sätze"
  },
  {
    "de": "Desto mehr.",
    "lv": "Annál inkább.",
    "level": "Sätze"
  },
  {
    "de": "Je mehr, desto besser.",
    "lv": "Minél több, annál jobb.",
    "level": "Sätze"
  },
  {
    "de": "Alles deutet auf Regen.",
    "lv": "Minden jel esőre mutat.",
    "level": "Sätze"
  },
  {
    "de": "Damit ist mir wenig gedient.",
    "lv": "Ezzel nem sokra megyek.",
    "level": "Sätze"
  },
  {
    "de": "Er ist dienstlich verhindert.",
    "lv": "Munkája miatt nem tud eljönni.",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie doch!",
    "lv": "Beszéljen már!",
    "level": "Sätze"
  },
  {
    "de": "Es donnert.",
    "lv": "Dörög az ég.",
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
    "lv": "Sürget az idő.",
    "level": "Sätze"
  },
  {
    "de": "Ihn drücken Sorgen.",
    "lv": "Gondok nyomasztják.",
    "level": "Sätze"
  },
  {
    "de": "Hast du das Buch durchgearbeitet?",
    "lv": "Áttanulmányoztad a könyvet?",
    "level": "Sätze"
  },
  {
    "de": "Kein Durchgang!",
    "lv": "Tilos az átjárás!",
    "level": "Sätze"
  },
  {
    "de": "Darf ich Sie bitten?",
    "lv": "Felkérhetem egy táncra? • Erre fáradna, kérem?",
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
    "lv": "Teljesen mindegy.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie eigentlich?",
    "lv": "Tulajdonképpen mit akar?",
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
    "lv": "Csak beképzeled magadnak, hogy beteg vagy.",
    "level": "Sätze"
  },
  {
    "de": "Was fällt dir ein?",
    "lv": "Mit képzelsz? • Mi jut eszedbe?",
    "level": "Sätze"
  },
  {
    "de": "Es war einmal.",
    "lv": "Egyszer volt, hol nem volt.",
    "level": "Sätze"
  },
  {
    "de": "Steigen Sie bitte ein!",
    "lv": "Szálljon be, kérem!",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie ein!",
    "lv": "Fáradjon be!",
    "level": "Sätze"
  },
  {
    "de": "Einzelnes hat mir dort gefallen.",
    "lv": "Egy-két dolog tetszett ott.",
    "level": "Sätze"
  },
  {
    "de": "Es empfiehlt sich.",
    "lv": "Ajánlatos.",
    "level": "Sätze"
  },
  {
    "de": "Diese Flasche enthält Essig.",
    "lv": "Ebben az üvegben ecet van.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldigen Sie bitte!",
    "lv": "Bocsásson meg, kérem!",
    "level": "Sätze"
  },
  {
    "de": "Entweder ... oder ...",
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
    "lv": "Ki hiányzik ma?",
    "level": "Sätze"
  },
  {
    "de": "Was fehlt dir?",
    "lv": "Mi bajod?",
    "level": "Sätze"
  },
  {
    "de": "Wie heißen Sie?",
    "lv": "Hogy hívják?",
    "level": "Sätze"
  },
  {
    "de": "Was soll das heißen?",
    "lv": "Ez mit akar jelenteni?",
    "level": "Sätze"
  },
  {
    "de": "Bitte treten Sie näher heran!",
    "lv": "Kérem, jöjjön közelebb!",
    "level": "Sätze"
  },
  {
    "de": "Heraus mit der Sprache!",
    "lv": "Ki vele!",
    "level": "Sätze"
  },
  {
    "de": "im Herbst",
    "lv": "ősszel",
    "level": "Sätze"
  },
  {
    "de": "Meine Herrschaften!",
    "lv": "Hölgyeim és uraim!",
    "level": "Sätze"
  },
  {
    "de": "von heute an",
    "lv": "mától kezdve",
    "level": "Sätze"
  },
  {
    "de": "heute früh",
    "lv": "ma reggel",
    "level": "Sätze"
  },
  {
    "de": "heute Nacht",
    "lv": "ma éjjel",
    "level": "Sätze"
  },
  {
    "de": "Zu Hilfe!",
    "lv": "Segítség!",
    "level": "Sätze"
  },
  {
    "de": "Ich lerne jeden Tag Deutsch.",
    "lv": "Mindennap tanulok németül.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das bitte wiederholen?",
    "lv": "Megismételnéd, kérlek?",
    "level": "Sätze"
  },
  {
    "de": "Wir treffen uns am Bahnhof.",
    "lv": "Az állomáson találkozunk.",
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
    "lv": "Több szempontot is figyelembe kellene venni.",
    "level": "Sätze"
  },
  {
    "de": "Könnten Sie das näher erläutern?",
    "lv": "Kifejtené ezt részletesebben?",
    "level": "Sätze"
  },
  {
    "de": "Was mich anbelangt, ...",
    "lv": "Ami engem illet,...",
    "level": "Sätze"
  },
  {
    "de": "Wie alt sind Sie?",
    "lv": "Hány éves?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zwanzig Jahre alt.",
    "lv": "Húszéves vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Von heute an.",
    "lv": "Mától.",
    "level": "Sätze"
  },
  {
    "de": "Von jetzt an.",
    "lv": "Mostantól.",
    "level": "Sätze"
  },
  {
    "de": "Anders geht es nicht.",
    "lv": "Másképp nem megy.",
    "level": "Sätze"
  },
  {
    "de": "Rufen Sie mich an.",
    "lv": "Hívjon fel.",
    "level": "Sätze"
  },
  {
    "de": "Bitte stellen Sie das Radio ab.",
    "lv": "Kérem, kapcsolja ki a rádiót.",
    "level": "Sätze"
  },
  {
    "de": "Achte bitte auf den Verkehr.",
    "lv": "Kérlek, figyelj a forgalomra.",
    "level": "Sätze"
  },
  {
    "de": "Darauf musst du achten.",
    "lv": "Erre figyelned kell.",
    "level": "Sätze"
  },
  {
    "de": "Heute mache ich es anders.",
    "lv": "Ma másképp csinálom.",
    "level": "Sätze"
  },
  {
    "de": "Wir warten auf den Bus.",
    "lv": "Várjuk a buszt.",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt allein.",
    "lv": "Egyedül lakik.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe die Ausbildung absolviert.",
    "lv": "Elvégeztem a képzést. • Befejeztem a tanulmányaimat.",
    "level": "Sätze"
  },
  {
    "de": "Ich warte den Regen ab.",
    "lv": "Megvárom, amíg eláll az eső.",
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
    "lv": "Elfogadta a javaslatomat.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte das genauer analysieren.",
    "lv": "Ezt szeretném részletesebben elemezni.",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte den Vertrag ändern.",
    "lv": "Szeretném módosítani a szerződést.",
    "level": "Sätze"
  },
  {
    "de": "Er ändert ständig seine Meinung.",
    "lv": "Folyton változtatja a véleményét.",
    "level": "Sätze"
  },
  {
    "de": "Ähnliche Probleme hatten wir schon früher.",
    "lv": "Hasonló problémáink már korábban is voltak.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ahnung!",
    "lv": "Fogalmam sincs!",
    "level": "Sätze"
  },
  {
    "de": "Hör auf zu jammern.",
    "lv": "Hagyd abba a siránkozást.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Kleid ist stilvoll und konservativ.",
    "lv": "Ez a ruha stílusosan konzervatív.",
    "level": "Sätze"
  },
  {
    "de": "Ich höre gerne Akkordeonmusik.",
    "lv": "Szeretek harmonikazenét hallgatni.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du das Gerät anklicken?",
    "lv": "Rá tudsz kattintani a készülékre?",
    "level": "Sätze"
  },
  {
    "de": "Bitte öffne die Datei und klicke darauf.",
    "lv": "Kérlek, nyisd meg a fájlt, és kattints rá.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe einen Unfall gehabt.",
    "lv": "Balesetem volt.",
    "level": "Sätze"
  },
  {
    "de": "Wir laufen zum Bahnhof.",
    "lv": "Gyalog megyünk az állomásra.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schalte den Fernseher an.",
    "lv": "Kérlek, kapcsold be a tévét.",
    "level": "Sätze"
  },
  {
    "de": "Mein Computer ist abgestürzt.",
    "lv": "Összeomlott a számítógépem.",
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
    "lv": "Fel tudsz hívni később?",
    "level": "Sätze"
  },
  {
    "de": "Bitte nimm meinen Vorschlag an.",
    "lv": "Kérlek, fogadd el a javaslatomat.",
    "level": "Sätze"
  },
  {
    "de": "Ich nehme dein Angebot an.",
    "lv": "Elfogadom az ajánlatodat.",
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
    "lv": "Tetszést aratni. • Visszhangra találni.",
    "level": "Sätze"
  },
  {
    "de": "Es kommt darauf an.",
    "lv": "Attól függ.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Anlass.",
    "lv": "Ebből az alkalomból. • Emiatt.",
    "level": "Sätze"
  },
  {
    "de": "Nehmen wir an, dass ...",
    "lv": "Tegyük fel, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Was hast du da angerichtet?",
    "lv": "Mit műveltél itt?",
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
    "de": "Meiner Ansicht nach ...",
    "lv": "Véleményem szerint...",
    "level": "Sätze"
  },
  {
    "de": "Stell dich nicht so an!",
    "lv": "Ne csinálj ekkora felhajtást!",
    "level": "Sätze"
  },
  {
    "de": "An die Arbeit gehen.",
    "lv": "Munkához látni.",
    "level": "Sätze"
  },
  {
    "de": "Außer Atem sein.",
    "lv": "Kifulladva lenni.",
    "level": "Sätze"
  },
  {
    "de": "Guten Appetit!",
    "lv": "Jó étvágyat!",
    "level": "Sätze"
  },
  {
    "de": "In einem Atemzug.",
    "lv": "Egy lélegzetre.",
    "level": "Sätze"
  },
  {
    "de": "Auf jeden Fall.",
    "lv": "Mindenesetre. • Mindenképpen.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal war alles still.",
    "lv": "Egyszer csak minden elcsendesedett.",
    "level": "Sätze"
  },
  {
    "de": "Bitte mach die Tür auf!",
    "lv": "Nyisd ki az ajtót, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Er hat den Kredit aufgenommen.",
    "lv": "Felvette a hitelt.",
    "level": "Sätze"
  },
  {
    "de": "Wir müssen heute aufräumen.",
    "lv": "Ma ki kell takarítanunk.",
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
    "lv": "El kell halasztanunk a találkozót.",
    "level": "Sätze"
  },
  {
    "de": "Sie hat mich aufgeregt.",
    "lv": "Felidegesített.",
    "level": "Sätze"
  },
  {
    "de": "Auf einmal.",
    "lv": "Egyszer csak.",
    "level": "Sätze"
  },
  {
    "de": "Auf der Stelle.",
    "lv": "Azonnal.",
    "level": "Sätze"
  },
  {
    "de": "Für den Schaden aufkommen.",
    "lv": "Megtéríteni a kárt.",
    "level": "Sätze"
  },
  {
    "de": "Bitte die Tür auf!",
    "lv": "Nyissa ki az ajtót, kérem!",
    "level": "Sätze"
  },
  {
    "de": "Aufrecht sitzen.",
    "lv": "Egyenesen ülni.",
    "level": "Sätze"
  },
  {
    "de": "Er ist auf.",
    "lv": "Fent van.",
    "level": "Sätze"
  },
  {
    "de": "Alle Kräfte aufwenden.",
    "lv": "Minden erejét latba vetni.",
    "level": "Sätze"
  },
  {
    "de": "Viel Mühe aufwenden.",
    "lv": "Sokat fáradozni.",
    "level": "Sätze"
  },
  {
    "de": "Geh mir aus den Augen!",
    "lv": "Tűnj el a szemem elől!",
    "level": "Sätze"
  },
  {
    "de": "Unter vier Augen.",
    "lv": "Négyszemközt.",
    "level": "Sätze"
  },
  {
    "de": "Aus Mangel an Zeit.",
    "lv": "Időhiány miatt.",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Grunde.",
    "lv": "Ebből az okból.",
    "level": "Sätze"
  },
  {
    "de": "Alle außer dir.",
    "lv": "Mindenki rajtad kívül.",
    "level": "Sätze"
  },
  {
    "de": "Auf Äußerlichkeiten Wert legen.",
    "lv": "Nagy súlyt helyezni a külsőségekre.",
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
    "lv": "Kilátás a tengerre.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gute Aussichten.",
    "lv": "Jók az esélyei.",
    "level": "Sätze"
  },
  {
    "de": "Wie wird dieses Wort ausgesprochen?",
    "lv": "Hogyan ejtik ki ezt a szót?",
    "level": "Sätze"
  },
  {
    "de": "Sein Beileid aussprechen.",
    "lv": "Részvétét nyilvánítani.",
    "level": "Sätze"
  },
  {
    "de": "Wann wurden die Meisterschaftskämpfe ausgetragen?",
    "lv": "Mikor rendezték a bajnokságot?",
    "level": "Sätze"
  },
  {
    "de": "Welchen Beruf üben Sie aus?",
    "lv": "Mi a foglalkozása?",
    "level": "Sätze"
  },
  {
    "de": "Einfluss ausüben.",
    "lv": "Befolyást gyakorolni.",
    "level": "Sätze"
  },
  {
    "de": "Auswärts essen.",
    "lv": "Házon kívül étkezni.",
    "level": "Sätze"
  },
  {
    "de": "Per Bahn.",
    "lv": "Vasúton.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Bahn.",
    "lv": "Vonattal.",
    "level": "Sätze"
  },
  {
    "de": "Möglichst bald.",
    "lv": "Minél előbb.",
    "level": "Sätze"
  },
  {
    "de": "Mir ist Angst und bange.",
    "lv": "Rettenetesen félek.",
    "level": "Sätze"
  },
  {
    "de": "Auf die lange Bank schieben.",
    "lv": "Halogatni.",
    "level": "Sätze"
  },
  {
    "de": "Bar zahlen.",
    "lv": "Készpénzzel fizetni.",
    "level": "Sätze"
  },
  {
    "de": "Erz bauen.",
    "lv": "Ércet bányászni.",
    "level": "Sätze"
  },
  {
    "de": "Mist bauen.",
    "lv": "Butaságot csinálni.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin beauftragt.",
    "lv": "Megbízást kaptam.",
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
    "de": "Unter der Bedingung, dass ...",
    "lv": "Azzal a feltétellel, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Sie sieht bedrückt aus.",
    "lv": "Levertnek látszik.",
    "level": "Sätze"
  },
  {
    "de": "Hinweise befolgen.",
    "lv": "Követni az utasításokat.",
    "level": "Sätze"
  },
  {
    "de": "Befehle befolgen.",
    "lv": "Teljesíteni a parancsokat.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Post befördern.",
    "lv": "Postán küldeni.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin begierig zu wissen.",
    "lv": "Nagyon kíváncsi vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Zu Beginn.",
    "lv": "Kezdetben.",
    "level": "Sätze"
  },
  {
    "de": "Am Beginn.",
    "lv": "Az elején.",
    "level": "Sätze"
  },
  {
    "de": "Bei Beginn.",
    "lv": "Kezdéskor.",
    "level": "Sätze"
  },
  {
    "de": "In Begleitung.",
    "lv": "Kíséretben.",
    "level": "Sätze"
  },
  {
    "de": "Mit seiner Begleitung.",
    "lv": "A kísérőjével.",
    "level": "Sätze"
  },
  {
    "de": "Er ist schwer von Begriff.",
    "lv": "Nehéz felfogású.",
    "level": "Sätze"
  },
  {
    "de": "Im Gedächtnis behalten.",
    "lv": "Emlékezetben tartani.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tisch.",
    "lv": "Az asztalnál.",
    "level": "Sätze"
  },
  {
    "de": "Bei Sinnen sein.",
    "lv": "Észnél lenni.",
    "level": "Sätze"
  },
  {
    "de": "Bei Tage.",
    "lv": "Nappal.",
    "level": "Sätze"
  },
  {
    "de": "Bei weitem nicht so.",
    "lv": "Közel sem annyira.",
    "level": "Sätze"
  },
  {
    "de": "Alle beide.",
    "lv": "Mindketten.",
    "level": "Sätze"
  },
  {
    "de": "Stürmischer Beifall brach los.",
    "lv": "Viharos taps tört ki.",
    "level": "Sätze"
  },
  {
    "de": "Beifall finden.",
    "lv": "Tetszést aratni.",
    "level": "Sätze"
  },
  {
    "de": "Beileid aussprechen.",
    "lv": "Részvétet nyilvánítani.",
    "level": "Sätze"
  },
  {
    "de": "Auf eigenen Beinen stehen.",
    "lv": "A saját lábán állni.",
    "level": "Sätze"
  },
  {
    "de": "Zum Beispiel.",
    "lv": "Például.",
    "level": "Sätze"
  },
  {
    "de": "Beistand leisten.",
    "lv": "Segítséget nyújtani.",
    "level": "Sätze"
  },
  {
    "de": "Beitrag leisten.",
    "lv": "Hozzájárulni.",
    "level": "Sätze"
  },
  {
    "de": "Jemandes Bekanntschaft machen.",
    "lv": "Megismerkedni valakivel.",
    "level": "Sätze"
  },
  {
    "de": "Bekanntschaft anknüpfen.",
    "lv": "Ismeretséget kötni.",
    "level": "Sätze"
  },
  {
    "de": "Belegte Brötchen.",
    "lv": "Szendvicsek.",
    "level": "Sätze"
  },
  {
    "de": "Nach Ihrem Belieben.",
    "lv": "Tetszése szerint.",
    "level": "Sätze"
  },
  {
    "de": "Zu jeder beliebigen Zeit.",
    "lv": "Bármikor.",
    "level": "Sätze"
  },
  {
    "de": "Schweigen beobachten.",
    "lv": "Csendet tartani.",
    "level": "Sätze"
  },
  {
    "de": "Zur Bequemlichkeit.",
    "lv": "A kényelem kedvéért.",
    "level": "Sätze"
  },
  {
    "de": "Bereit sein.",
    "lv": "Készen állni. • Hajlandónak lenni.",
    "level": "Sätze"
  },
  {
    "de": "Unfallopfer bergen.",
    "lv": "Kimenteni a baleset áldozatait.",
    "level": "Sätze"
  },
  {
    "de": "Bericht erstatten.",
    "lv": "Jelentést tenni.",
    "level": "Sätze"
  },
  {
    "de": "Alle Plätze sind besetzt.",
    "lv": "Minden hely foglalt.",
    "level": "Sätze"
  },
  {
    "de": "Neue Besen kehren gut.",
    "lv": "Új seprű jól seper.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt ein Haus.",
    "lv": "Van egy háza.",
    "level": "Sätze"
  },
  {
    "de": "Er besitzt viel Mut.",
    "lv": "Nagyon bátor.",
    "level": "Sätze"
  },
  {
    "de": "Desto besser.",
    "lv": "Annál jobb.",
    "level": "Sätze"
  },
  {
    "de": "Gute Besserung!",
    "lv": "Jobbulást!",
    "level": "Sätze"
  },
  {
    "de": "Beim besten Willen.",
    "lv": "A legjobb akarattal sem.",
    "level": "Sätze"
  },
  {
    "de": "Am besten.",
    "lv": "Legjobban.",
    "level": "Sätze"
  },
  {
    "de": "Es besteht Zweifel.",
    "lv": "Kétség áll fenn.",
    "level": "Sätze"
  },
  {
    "de": "Seine Aufgabe besteht darin ...",
    "lv": "A feladata abban áll, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Grüße bestellen.",
    "lv": "Átadni valakinek az üdvözletét.",
    "level": "Sätze"
  },
  {
    "de": "Ganz bestimmt.",
    "lv": "Egészen biztosan.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch kommen.",
    "lv": "Látogatóba jönni.",
    "level": "Sätze"
  },
  {
    "de": "Zu Besuch sein.",
    "lv": "Látogatóban lenni.",
    "level": "Sätze"
  },
  {
    "de": "Oft Konzerte besuchen.",
    "lv": "Gyakran járni koncertekre.",
    "level": "Sätze"
  },
  {
    "de": "Welche Schule hat er besucht?",
    "lv": "Melyik iskolába járt?",
    "level": "Sätze"
  },
  {
    "de": "In Betracht ziehen.",
    "lv": "Figyelembe venni. • Fontolóra venni.",
    "level": "Sätze"
  },
  {
    "de": "Außer Betracht lassen.",
    "lv": "Figyelmen kívül hagyni.",
    "level": "Sätze"
  },
  {
    "de": "Er betreibt ein Hotel.",
    "lv": "Szállodát vezet.",
    "level": "Sätze"
  },
  {
    "de": "Alle beiden.",
    "lv": "Mind a kettő.",
    "level": "Sätze"
  },
  {
    "de": "Alles bezahlen.",
    "lv": "Mindent kifizetni.",
    "level": "Sätze"
  },
  {
    "de": "In Bezug auf etwas.",
    "lv": "Valamivel kapcsolatban.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön.",
    "lv": "Szívesen. • Tessék.",
    "level": "Sätze"
  },
  {
    "de": "Wie bitte?",
    "lv": "Tessék?",
    "level": "Sätze"
  },
  {
    "de": "Bitte sehr.",
    "lv": "Nagyon szívesen. • Tessék.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe eine Bitte an Sie.",
    "lv": "Egy kérésem volna önhöz.",
    "level": "Sätze"
  },
  {
    "de": "Trompete blasen.",
    "lv": "Trombitálni.",
    "level": "Sätze"
  },
  {
    "de": "In einem Buch blättern.",
    "lv": "Könyvet lapozgatni.",
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
    "lv": "Köszönöm a bókot!",
    "level": "Sätze"
  },
  {
    "de": "Alles in Butter.",
    "lv": "Minden a legnagyobb rendben.",
    "level": "Sätze"
  },
  {
    "de": "Bitte checken.",
    "lv": "Kérem ellenőrizni.",
    "level": "Sätze"
  },
  {
    "de": "Da ist er!",
    "lv": "Ott van!",
    "level": "Sätze"
  },
  {
    "de": "Alles spricht dafür.",
    "lv": "Minden emellett szól.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann nichts dafür.",
    "lv": "Nem tehetek róla.",
    "level": "Sätze"
  },
  {
    "de": "Ich bin dagegen.",
    "lv": "Ellene vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe nichts dagegen.",
    "lv": "Nincs ellene kifogásom.",
    "level": "Sätze"
  },
  {
    "de": "Von daheim.",
    "lv": "Otthonról.",
    "level": "Sätze"
  },
  {
    "de": "Mit der Dame ziehen.",
    "lv": "A vezérrel lépni.",
    "level": "Sätze"
  },
  {
    "de": "Es dämmert.",
    "lv": "Alkonyodik. • Hajnalodik.",
    "level": "Sätze"
  },
  {
    "de": "Danke schön!",
    "lv": "Köszönöm szépen!",
    "level": "Sätze"
  },
  {
    "de": "Dann und wann.",
    "lv": "Néha-néha.",
    "level": "Sätze"
  },
  {
    "de": "Darauf kannst du dich verlassen.",
    "lv": "Számíthatsz rá.",
    "level": "Sätze"
  },
  {
    "de": "Daraus wird nichts.",
    "lv": "Ebből nem lesz semmi.",
    "level": "Sätze"
  },
  {
    "de": "So dass ...",
    "lv": "Úgyhogy...",
    "level": "Sätze"
  },
  {
    "de": "Für wen halten Sie mich?",
    "lv": "Kinek néz engem?",
    "level": "Sätze"
  },
  {
    "de": "Hände weg!",
    "lv": "El a kezekkel!",
    "level": "Sätze"
  },
  {
    "de": "Lass den Kopf nicht hängen!",
    "lv": "Ne lógasd az orrodat!",
    "level": "Sätze"
  },
  {
    "de": "zu Hause",
    "lv": "otthon",
    "level": "Sätze"
  },
  {
    "de": "nach Hause gehen",
    "lv": "hazamenni",
    "level": "Sätze"
  },
  {
    "de": "von Haus aus",
    "lv": "eredetileg • természeténél fogva",
    "level": "Sätze"
  },
  {
    "de": "Meinen herzlichsten Glückwunsch!",
    "lv": "Szívből gratulálok!",
    "level": "Sätze"
  },
  {
    "de": "Seien Sie so gut!",
    "lv": "Legyen olyan szíves!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie die Güte!",
    "lv": "Legyen olyan kedves!",
    "level": "Sätze"
  },
  {
    "de": "Was hast du?",
    "lv": "Mi bajod?",
    "level": "Sätze"
  },
  {
    "de": "Gestatten Sie bitte!",
    "lv": "Engedje meg, kérem!",
    "level": "Sätze"
  },
  {
    "de": "Ist es gestattet zu rauchen?",
    "lv": "Szabad dohányozni?",
    "level": "Sätze"
  },
  {
    "de": "Ich muss gestehen, dass ...",
    "lv": "Be kell vallanom, hogy...",
    "level": "Sätze"
  },
  {
    "de": "gestern früh",
    "lv": "tegnap reggel",
    "level": "Sätze"
  },
  {
    "de": "gestern Abend",
    "lv": "tegnap este",
    "level": "Sätze"
  },
  {
    "de": "Es ist mir gleichgültig, ob ...",
    "lv": "Nekem mindegy, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Was ist geschehen?",
    "lv": "Mi történt?",
    "level": "Sätze"
  },
  {
    "de": "Mach keine Geschichten!",
    "lv": "Ne csinálj felhajtást! • Ne csinálj butaságot!",
    "level": "Sätze"
  },
  {
    "de": "Geschweige denn ...",
    "lv": "Nemhogy...",
    "level": "Sätze"
  },
  {
    "de": "Gehen Sie geradeaus!",
    "lv": "Menjen egyenesen előre!",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es Ihnen?",
    "lv": "Hogy van?",
    "level": "Sätze"
  },
  {
    "de": "Frag ihn gelegentlich, ob ...",
    "lv": "Ha alkalmad lesz, kérdezd meg tőle, hogy...",
    "level": "Sätze"
  },
  {
    "de": "morgen früh",
    "lv": "holnap reggel",
    "level": "Sätze"
  },
  {
    "de": "im Frühling",
    "lv": "tavasszal",
    "level": "Sätze"
  },
  {
    "de": "Was gibt’s Neues?",
    "lv": "Mi újság?",
    "level": "Sätze"
  },
  {
    "de": "Aus diesem Brief folgt, dass ...",
    "lv": "Ebből a levélből az következik, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Fahre fort!",
    "lv": "Folytasd!",
    "level": "Sätze"
  },
  {
    "de": "Er ist kein Freund von ...",
    "lv": "Nem nagy barátja...",
    "level": "Sätze"
  },
  {
    "de": "Es erwies sich, dass ...",
    "lv": "Kiderült, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Gedenkst du meiner?",
    "lv": "Emlékszel rám? • Gondolsz rám?",
    "level": "Sätze"
  },
  {
    "de": "im Winter",
    "lv": "télen",
    "level": "Sätze"
  },
  {
    "de": "Welcher Jahrgang sind Sie?",
    "lv": "Melyik évben született?",
    "level": "Sätze"
  },
  {
    "de": "Es jammert mich zu sehen ...",
    "lv": "Fáj látni...",
    "level": "Sätze"
  },
  {
    "de": "je mehr, desto besser",
    "lv": "minél több, annál jobb",
    "level": "Sätze"
  },
  {
    "de": "bis jetzt",
    "lv": "eddig",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich zum Bahnhof?",
    "lv": "Hogyan jutok el a pályaudvarra?",
    "level": "Sätze"
  },
  {
    "de": "Komm her!",
    "lv": "Gyere ide!",
    "level": "Sätze"
  },
  {
    "de": "Könnte ich Frau N. sprechen?",
    "lv": "Beszélhetnék N. asszonnyal?",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das?",
    "lv": "Mennyibe kerül ez?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange dauert die Vorstellung?",
    "lv": "Meddig tart az előadás?",
    "level": "Sätze"
  },
  {
    "de": "Lass das!",
    "lv": "Hagyd abba! • Hagyd békén!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich in Ruhe!",
    "lv": "Hagyj békén!",
    "level": "Sätze"
  },
  {
    "de": "Lassen Sie mich Ihnen helfen!",
    "lv": "Hadd segítsek önnek!",
    "level": "Sätze"
  },
  {
    "de": "Lasst uns gehen!",
    "lv": "Menjünk!",
    "level": "Sätze"
  },
  {
    "de": "Na, wie läufts?",
    "lv": "Na, hogy megy?",
    "level": "Sätze"
  },
  {
    "de": "Es lebe!",
    "lv": "Éljen!",
    "level": "Sätze"
  },
  {
    "de": "Leben Sie wohl!",
    "lv": "Isten vele!",
    "level": "Sätze"
  },
  {
    "de": "Was ist los?",
    "lv": "Mi a baj? • Mi folyik itt?",
    "level": "Sätze"
  },
  {
    "de": "Der Job ist anstrengend.",
    "lv": "Fárasztó a munka.",
    "level": "Sätze"
  },
  {
    "de": "Das war ein anstrengender Tag.",
    "lv": "Fárasztó nap volt.",
    "level": "Sätze"
  },
  {
    "de": "Deutsch lernen kann anstrengend sein.",
    "lv": "A német nyelv tanulása fárasztó lehet.",
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
    "lv": "A törvény így írja elő.",
    "level": "Sätze"
  },
  {
    "de": "Das ist gar nicht so schwer.",
    "lv": "Ez egyáltalán nem olyan nehéz.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe gar kein Geld.",
    "lv": "Egyáltalán nincs pénzem.",
    "level": "Sätze"
  },
  {
    "de": "Er hat gar nichts gesagt.",
    "lv": "Egyáltalán semmit sem mondott.",
    "level": "Sätze"
  },
  {
    "de": "Der Hund ist los.",
    "lv": "Elszabadult a kutya.",
    "level": "Sätze"
  },
  {
    "de": "Hier ist viel los.",
    "lv": "Itt sok minden történik.",
    "level": "Sätze"
  },
  {
    "de": "Halt die Luft an!",
    "lv": "Hallgass már! • Ne túlozz!",
    "level": "Sätze"
  },
  {
    "de": "Was machst du?",
    "lv": "Mit csinálsz?",
    "level": "Sätze"
  },
  {
    "de": "Sag mal!",
    "lv": "Mondd csak!",
    "level": "Sätze"
  },
  {
    "de": "Was meinen Sie damit?",
    "lv": "Hogy érti ezt? • Mire gondol ezzel?",
    "level": "Sätze"
  },
  {
    "de": "Wir gehen mit Ihnen.",
    "lv": "Önnel megyünk.",
    "level": "Sätze"
  },
  {
    "de": "Ich fahre mit der Eisenbahn.",
    "lv": "Vonattal utazom.",
    "level": "Sätze"
  },
  {
    "de": "am Mittwoch",
    "lv": "szerdán",
    "level": "Sätze"
  },
  {
    "de": "Es mag sein.",
    "lv": "Meglehet.",
    "level": "Sätze"
  },
  {
    "de": "Ich mag das nicht.",
    "lv": "Ezt nem szeretem.",
    "level": "Sätze"
  },
  {
    "de": "am Montag",
    "lv": "hétfőn",
    "level": "Sätze"
  },
  {
    "de": "Guten Morgen!",
    "lv": "Jó reggelt!",
    "level": "Sätze"
  },
  {
    "de": "am Morgen",
    "lv": "reggel",
    "level": "Sätze"
  },
  {
    "de": "Gute Nacht!",
    "lv": "Jó éjszakát!",
    "level": "Sätze"
  },
  {
    "de": "Nehmen Sie Platz!",
    "lv": "Foglaljon helyet!",
    "level": "Sätze"
  },
  {
    "de": "Letzte Neuheit!",
    "lv": "Legfrissebb újdonság!",
    "level": "Sätze"
  },
  {
    "de": "Nicht wahr?",
    "lv": "Ugye?",
    "level": "Sätze"
  },
  {
    "de": "Nicht doch!",
    "lv": "Dehogy! • Ne!",
    "level": "Sätze"
  },
  {
    "de": "Nun endlich!",
    "lv": "Na végre!",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das?",
    "lv": "Mire jó ez?",
    "level": "Sätze"
  },
  {
    "de": "Wozu nützt das alles?",
    "lv": "Mi értelme ennek az egésznek?",
    "level": "Sätze"
  },
  {
    "de": "Parken verboten!",
    "lv": "Tilos a parkolás!",
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
    "lv": "Szó sem lehet róla.",
    "level": "Sätze"
  },
  {
    "de": "Glückliche Reise!",
    "lv": "Jó utat!",
    "level": "Sätze"
  },
  {
    "de": "Mir reißt die Geduld.",
    "lv": "Kezd elfogyni a türelmem.",
    "level": "Sätze"
  },
  {
    "de": "Man sagt, dass ...",
    "lv": "Azt mondják, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Schon gut!",
    "lv": "Jól van!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schön!",
    "lv": "Tessék! • Szívesen!",
    "level": "Sätze"
  },
  {
    "de": "Was bin ich schuldig?",
    "lv": "Mennyivel tartozom?",
    "level": "Sätze"
  },
  {
    "de": "Vor dem Gebrauch schütteln!",
    "lv": "Használat előtt felrázandó!",
    "level": "Sätze"
  },
  {
    "de": "Sehen Sie mal!",
    "lv": "Nézze csak!",
    "level": "Sätze"
  },
  {
    "de": "Wie sehr auch ...",
    "lv": "Bármennyire is...",
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
    "lv": "nyáron",
    "level": "Sätze"
  },
  {
    "de": "Nicht nur ..., sondern auch ...",
    "lv": "Nemcsak..., hanem... is...",
    "level": "Sätze"
  },
  {
    "de": "Sonst noch etwas?",
    "lv": "Még valamit?",
    "level": "Sätze"
  },
  {
    "de": "Spaß beiseite!",
    "lv": "Viccet félretéve!",
    "level": "Sätze"
  },
  {
    "de": "Wie spät ist es?",
    "lv": "Mennyi az idő?",
    "level": "Sätze"
  },
  {
    "de": "Durchfahrt gesperrt!",
    "lv": "Az átmenő forgalom elől elzárva!",
    "level": "Sätze"
  },
  {
    "de": "Sprechen Sie deutsch?",
    "lv": "Beszél németül?",
    "level": "Sätze"
  },
  {
    "de": "Statt zu ...",
    "lv": "Ahelyett, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Wie steht’s?",
    "lv": "Hogy állnak a dolgok?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Hut steht ihr gut.",
    "lv": "Jól áll neki ez a kalap.",
    "level": "Sätze"
  },
  {
    "de": "Guten Tag!",
    "lv": "Jó napot!",
    "level": "Sätze"
  },
  {
    "de": "Wo treffen wir uns?",
    "lv": "Hol találkozunk?",
    "level": "Sätze"
  },
  {
    "de": "Treten Sie näher!",
    "lv": "Jöjjön közelebb!",
    "level": "Sätze"
  },
  {
    "de": "Ehrlichkeit ist eine Tugend.",
    "lv": "A becsületesség erény.",
    "level": "Sätze"
  },
  {
    "de": "Ich habe viel zu tun.",
    "lv": "Sok dolgom van.",
    "level": "Sätze"
  },
  {
    "de": "Nicht übel!",
    "lv": "Nem rossz!",
    "level": "Sätze"
  },
  {
    "de": "Er wohnt über mir.",
    "lv": "Fölöttem lakik.",
    "level": "Sätze"
  },
  {
    "de": "Er ist davon überzeugt.",
    "lv": "Meg van győződve róla.",
    "level": "Sätze"
  },
  {
    "de": "So ist es üblich.",
    "lv": "Így szokás.",
    "level": "Sätze"
  },
  {
    "de": "Deine Uhr geht nach.",
    "lv": "Késik az órád.",
    "level": "Sätze"
  },
  {
    "de": "Wie viel Uhr ist es?",
    "lv": "Hány óra van?",
    "level": "Sätze"
  },
  {
    "de": "Um acht Uhr früh.",
    "lv": "Reggel nyolc órakor.",
    "level": "Sätze"
  },
  {
    "de": "umso mehr",
    "lv": "annál inkább",
    "level": "Sätze"
  },
  {
    "de": "Rechts um!",
    "lv": "Jobbra át!",
    "level": "Sätze"
  },
  {
    "de": "Und ob!",
    "lv": "De még mennyire!",
    "level": "Sätze"
  },
  {
    "de": "und zwar",
    "lv": "mégpedig",
    "level": "Sätze"
  },
  {
    "de": "Auf Unkosten von ...",
    "lv": "Valaki rovására...",
    "level": "Sätze"
  },
  {
    "de": "Er saß unter den Zuschauern.",
    "lv": "A nézők között ült.",
    "level": "Sätze"
  },
  {
    "de": "Keine Ursache!",
    "lv": "Nincs mit!",
    "level": "Sätze"
  },
  {
    "de": "Es geschah, wie verabredet.",
    "lv": "A megbeszéltek szerint történt.",
    "level": "Sätze"
  },
  {
    "de": "Rauchen verboten!",
    "lv": "Tilos a dohányzás!",
    "level": "Sätze"
  },
  {
    "de": "Falsch verbunden!",
    "lv": "Téves kapcsolás!",
    "level": "Sätze"
  },
  {
    "de": "Eintritt verboten!",
    "lv": "Belépni tilos!",
    "level": "Sätze"
  },
  {
    "de": "Verstehen Sie mich?",
    "lv": "Ért engem?",
    "level": "Sätze"
  },
  {
    "de": "Er versteht nichts davon.",
    "lv": "Semmit sem ért hozzá.",
    "level": "Sätze"
  },
  {
    "de": "Seine Ansicht vertreten.",
    "lv": "Kiállni a véleménye mellett.",
    "level": "Sätze"
  },
  {
    "de": "Streit verursachen.",
    "lv": "Vitát okozni.",
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
    "lv": "Hallomásból.",
    "level": "Sätze"
  },
  {
    "de": "Von Zeit zu Zeit.",
    "lv": "Időről időre.",
    "level": "Sätze"
  },
  {
    "de": "Von Beruf.",
    "lv": "Foglalkozására nézve.",
    "level": "Sätze"
  },
  {
    "de": "Er ist Berliner von Geburt.",
    "lv": "Született berlini.",
    "level": "Sätze"
  },
  {
    "de": "Er steht vor dem Fenster.",
    "lv": "Az ablak előtt áll.",
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
    "lv": "Örömében.",
    "level": "Sätze"
  },
  {
    "de": "Vor allem.",
    "lv": "Mindenekelőtt.",
    "level": "Sätze"
  },
  {
    "de": "Im Voraus.",
    "lv": "Előre.",
    "level": "Sätze"
  },
  {
    "de": "Unter der Voraussetzung, dass ...",
    "lv": "Azzal a feltétellel, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Unter dem Vorbehalt.",
    "lv": "Azzal a fenntartással.",
    "level": "Sätze"
  },
  {
    "de": "Vorhanden sein.",
    "lv": "Rendelkezésre állni. • Létezni.",
    "level": "Sätze"
  },
  {
    "de": "In der vorigen Woche.",
    "lv": "A múlt héten.",
    "level": "Sätze"
  },
  {
    "de": "Vorkehrungen treffen.",
    "lv": "Óvintézkedéseket tenni.",
    "level": "Sätze"
  },
  {
    "de": "Sie kommt mir bekannt vor.",
    "lv": "Ismerősnek tűnik.",
    "level": "Sätze"
  },
  {
    "de": "Er hat eine Vorliebe für Literatur.",
    "lv": "Különösen kedveli az irodalmat.",
    "level": "Sätze"
  },
  {
    "de": "Heute Vormittag.",
    "lv": "Ma délelőtt.",
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
    "lv": "Kezdettől fogva.",
    "level": "Sätze"
  },
  {
    "de": "Im Vorteil sein.",
    "lv": "Előnyben lenni.",
    "level": "Sätze"
  },
  {
    "de": "Wach sein.",
    "lv": "Ébren lenni.",
    "level": "Sätze"
  },
  {
    "de": "Wach werden.",
    "lv": "Felébredni.",
    "level": "Sätze"
  },
  {
    "de": "Auf Wache sein.",
    "lv": "Őrt állni.",
    "level": "Sätze"
  },
  {
    "de": "Während eines Jahres.",
    "lv": "Egy év folyamán.",
    "level": "Sätze"
  },
  {
    "de": "Während des Krieges.",
    "lv": "A háború alatt.",
    "level": "Sätze"
  },
  {
    "de": "Gegen eine Wand reden.",
    "lv": "A falnak beszélni.",
    "level": "Sätze"
  },
  {
    "de": "Hier haben die Wände Ohren.",
    "lv": "Itt a falnak is füle van.",
    "level": "Sätze"
  },
  {
    "de": "Bis wann?",
    "lv": "Meddig? • Mikorra?",
    "level": "Sätze"
  },
  {
    "de": "Es ist warm.",
    "lv": "Meleg van.",
    "level": "Sätze"
  },
  {
    "de": "Auf eine Nachricht warten.",
    "lv": "Üzenetre várni.",
    "level": "Sätze"
  },
  {
    "de": "Was wollen Sie?",
    "lv": "Mit akar?",
    "level": "Sätze"
  },
  {
    "de": "Was für ein ...?",
    "lv": "Milyen...? • Miféle...?",
    "level": "Sätze"
  },
  {
    "de": "Auf halbem Wege.",
    "lv": "Félúton.",
    "level": "Sätze"
  },
  {
    "de": "Auf diesem Wege.",
    "lv": "Ilyen módon. • Ezen az úton.",
    "level": "Sätze"
  },
  {
    "de": "Auf friedlichem Wege.",
    "lv": "Békés úton.",
    "level": "Sätze"
  },
  {
    "de": "Unserer Freundschaft wegen.",
    "lv": "A barátságunk kedvéért.",
    "level": "Sätze"
  },
  {
    "de": "Von Rechts wegen.",
    "lv": "Törvény szerint. • Igazság szerint.",
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
    "lv": "Mód.",
    "level": "Sätze"
  },
  {
    "de": "Ohne weiteres.",
    "lv": "Minden további nélkül. • Nehézség nélkül.",
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
    "lv": "Semmi más.",
    "level": "Sätze"
  },
  {
    "de": "An welchem Tag?",
    "lv": "Melyik napon?",
    "level": "Sätze"
  },
  {
    "de": "Alle Welt.",
    "lv": "Az egész világ. • Mindenki.",
    "level": "Sätze"
  },
  {
    "de": "In wenigen Tagen.",
    "lv": "Néhány nap múlva.",
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
    "lv": "Ki van ott?",
    "level": "Sätze"
  },
  {
    "de": "Gesammelte Werke von Schiller.",
    "lv": "Schiller összegyűjtött művei.",
    "level": "Sätze"
  },
  {
    "de": "Ausgewählte Werke.",
    "lv": "Válogatott művek.",
    "level": "Sätze"
  },
  {
    "de": "Er ist wert, dass ...",
    "lv": "Megérdemli, hogy...",
    "level": "Sätze"
  },
  {
    "de": "Es ist zwei Euro wert.",
    "lv": "Két eurót ér.",
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
    "lv": "Versenybe szállni.",
    "level": "Sätze"
  },
  {
    "de": "Um die Wette laufen.",
    "lv": "Versenyt futni.",
    "level": "Sätze"
  },
  {
    "de": "Was gilt die Wette?",
    "lv": "Mibe fogadunk?",
    "level": "Sätze"
  },
  {
    "de": "Wie wird das Wetter?",
    "lv": "Milyen idő lesz?",
    "level": "Sätze"
  },
  {
    "de": "Wettkampf im Turnen.",
    "lv": "Tornaverseny.",
    "level": "Sätze"
  },
  {
    "de": "Wider meinen Willen.",
    "lv": "Akaratom ellenére.",
    "level": "Sätze"
  },
  {
    "de": "Widerspruch erheben.",
    "lv": "Tiltakozni. • Kifogást emelni.",
    "level": "Sätze"
  },
  {
    "de": "Wie alt ist er?",
    "lv": "Hány éves?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange?",
    "lv": "Mennyi ideig?",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiederhören!",
    "lv": "Viszonthallásra!",
    "level": "Sätze"
  },
  {
    "de": "Auf Wiedersehen!",
    "lv": "Viszontlátásra!",
    "level": "Sätze"
  },
  {
    "de": "Wilde Tiere.",
    "lv": "Vadállatok.",
    "level": "Sätze"
  },
  {
    "de": "Herzlich willkommen!",
    "lv": "Szívélyesen üdvözöljük!",
    "level": "Sätze"
  },
  {
    "de": "Du musst ziehen.",
    "lv": "Te lépsz.",
    "level": "Sätze"
  },
  {
    "de": "Es zieht.",
    "lv": "Huzat van.",
    "level": "Sätze"
  },
  {
    "de": "Ziemlich kalt.",
    "lv": "Elég hideg.",
    "level": "Sätze"
  },
  {
    "de": "Zipfel einer Wurst.",
    "lv": "A kolbász vége.",
    "level": "Sätze"
  },
  {
    "de": "Zu ihm gehen.",
    "lv": "Elmenni hozzá.",
    "level": "Sätze"
  },
  {
    "de": "Zur Schule gehen.",
    "lv": "Iskolába menni. • Iskolába járni.",
    "level": "Sätze"
  },
  {
    "de": "Zu Hause bleiben.",
    "lv": "Otthon maradni.",
    "level": "Sätze"
  },
  {
    "de": "Von Tag zu Tag.",
    "lv": "Napról napra.",
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
    "lv": "Gyalog.",
    "level": "Sätze"
  },
  {
    "de": "Zu Pferde.",
    "lv": "Lóháton.",
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
    "lv": "Vállat vonni.",
    "level": "Sätze"
  },
  {
    "de": "In einem Zug trinken.",
    "lv": "Egy hajtásra kiinni.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde gehen.",
    "lv": "Elpusztulni.",
    "level": "Sätze"
  },
  {
    "de": "Zugrunde legen.",
    "lv": "Alapul venni.",
    "level": "Sätze"
  },
  {
    "de": "Zum ersten Mal.",
    "lv": "Először.",
    "level": "Sätze"
  },
  {
    "de": "Machen Sie bitte die Tür zu!",
    "lv": "Csukja be az ajtót, kérem!",
    "level": "Sätze"
  },
  {
    "de": "Er hat zugenommen.",
    "lv": "Meghízott.",
    "level": "Sätze"
  },
  {
    "de": "Die Tage nehmen zu.",
    "lv": "A napok hosszabbodnak.",
    "level": "Sätze"
  },
  {
    "de": "Zusammenhängen mit etwas.",
    "lv": "Összefüggni valamivel.",
    "level": "Sätze"
  },
  {
    "de": "Die Tür ist zu.",
    "lv": "Az ajtó csukva van.",
    "level": "Sätze"
  },
  {
    "de": "Das hätte ich ihm nicht zugetraut.",
    "lv": "Ezt nem gondoltam volna róla.",
    "level": "Sätze"
  },
  {
    "de": "Freier Zutritt.",
    "lv": "Szabad belépés.",
    "level": "Sätze"
  },
  {
    "de": "Zutritt verboten!",
    "lv": "Belépni tilos!",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu viel!",
    "lv": "Ez túl sok!",
    "level": "Sätze"
  },
  {
    "de": "Zuwider werden.",
    "lv": "Visszataszítóvá válni. • Megunni.",
    "level": "Sätze"
  },
  {
    "de": "Und zwar.",
    "lv": "Mégpedig.",
    "level": "Sätze"
  },
  {
    "de": "Es steht außer Zweifel.",
    "lv": "Nem fér hozzá kétség.",
    "level": "Sätze"
  },
  {
    "de": "Ohne Zweifel.",
    "lv": "Kétségkívül.",
    "level": "Sätze"
  },
  {
    "de": "Zum Zweiten.",
    "lv": "Másodszor.",
    "level": "Sätze"
  },
  {
    "de": "Frohes neues Jahr!",
    "lv": "Boldog új évet!",
    "level": "Sätze"
  },
  {
    "de": "Herzlichen Glückwunsch zum Geburtstag!",
    "lv": "Boldog születésnapot!",
    "level": "Sätze"
  },
  {
    "de": "Gute Reise!",
    "lv": "Jó utat!",
    "level": "Sätze"
  },
  {
    "de": "Es freut mich, Sie kennenzulernen.",
    "lv": "Örülök, hogy megismerhetem.",
    "level": "Sätze"
  },
  {
    "de": "Wären Sie bitte so nett?",
    "lv": "Lenne olyan kedves?",
    "level": "Sätze"
  },
  {
    "de": "Ich bin Ihnen sehr dankbar.",
    "lv": "Nagyon hálás vagyok önnek.",
    "level": "Sätze"
  },
  {
    "de": "Setzt euch bitte hin!",
    "lv": "Üljetek le, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Ben, komm bitte an die Tafel!",
    "lv": "Ben, gyere a táblához, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Schlagt bitte die Lehrbücher auf!",
    "lv": "Nyissátok ki a tankönyveket, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Geht bitte in die Sporthalle!",
    "lv": "Menjetek a tornaterembe, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Schläfst du noch?",
    "lv": "Alszol még?",
    "level": "Sätze"
  },
  {
    "de": "Schlafen Sie noch?",
    "lv": "Alszik még?",
    "level": "Sätze"
  },
  {
    "de": "Er ist fest eingeschlafen.",
    "lv": "Mélyen elaludt.",
    "level": "Sätze"
  },
  {
    "de": "Wecke ihn bitte auf, es ist schon spät!",
    "lv": "Ébreszd fel, kérlek, már késő van!",
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
    "lv": "Finn, kezdd el, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Lest bitte mit!",
    "lv": "Kövessétek a szöveget, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Emma, schau bitte nicht aus dem Fenster!",
    "lv": "Emma, kérlek, ne nézz ki az ablakon!",
    "level": "Sätze"
  },
  {
    "de": "Jonas, bring bitte die Hefte!",
    "lv": "Jonas, hozd ide a füzeteket, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte zurück an deinen Platz!",
    "lv": "Menj vissza a helyedre, kérlek!",
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
    "lv": "Kelj fel, Hanna, szól az óra! • Kelj fel, Hanna, csengetnek!",
    "level": "Sätze"
  },
  {
    "de": "Lass mich noch fünf Minuten schlafen!",
    "lv": "Hadd aludjak még öt percet!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss nicht, das Zimmer zu lüften!",
    "lv": "Ne felejtsd el kiszellőztetni a szobát!",
    "level": "Sätze"
  },
  {
    "de": "Wo ist das Handtuch?",
    "lv": "Hol van a törölköző?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mir die Zähne putzen.",
    "lv": "Szeretnék fogat mosni.",
    "level": "Sätze"
  },
  {
    "de": "Womit putzt du dir die Zähne?",
    "lv": "Mivel mosol fogat?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte mich anziehen.",
    "lv": "Szeretnék felöltözni.",
    "level": "Sätze"
  },
  {
    "de": "Zieh dich bitte schnell an!",
    "lv": "Öltözz fel gyorsan, kérlek!",
    "level": "Sätze"
  },
  {
    "de": "Kleide dich wärmer an, draußen ist es kühl.",
    "lv": "Öltözz fel melegebben, kint hűvös van.",
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
    "lv": "Mit iszol reggelente, kávét vagy teát?",
    "level": "Sätze"
  },
  {
    "de": "Gewöhnlich trinke ich morgens eine Tasse Kaffee.",
    "lv": "Reggelente általában egy csésze kávét iszom.",
    "level": "Sätze"
  },
  {
    "de": "Am liebsten trinke ich schwarzen Kaffee.",
    "lv": "Legszívesebben feketekávét iszom.",
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
    "lv": "Ne felejtsd el a reggelidet!",
    "level": "Sätze"
  },
  {
    "de": "Klara, deck bitte den Tisch!",
    "lv": "Klara, kérlek, terítsd meg az asztalt!",
    "level": "Sätze"
  },
  {
    "de": "Vergiss die Servietten nicht!",
    "lv": "Ne felejtsd el a szalvétákat!",
    "level": "Sätze"
  },
  {
    "de": "Wann esst ihr zu Mittag?",
    "lv": "Mikor ebédeltek?",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit zu essen.",
    "lv": "Ideje enni.",
    "level": "Sätze"
  },
  {
    "de": "Was gibt es heute zu Mittag?",
    "lv": "Mi lesz ma ebédre?",
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
    "lv": "Köszönöm, nekem már van.",
    "level": "Sätze"
  },
  {
    "de": "Das Fleisch schmeckt ausgezeichnet.",
    "lv": "A hús kitűnő ízű.",
    "level": "Sätze"
  },
  {
    "de": "Danke, ich bin schon satt.",
    "lv": "Köszönöm, már jóllaktam.",
    "level": "Sätze"
  },
  {
    "de": "Heute haben wir Besuch.",
    "lv": "Ma vendégeink vannak.",
    "level": "Sätze"
  },
  {
    "de": "Bist du heute Abend frei?",
    "lv": "Ráérsz ma este?",
    "level": "Sätze"
  },
  {
    "de": "Komm doch heute zum Mittagessen vorbei!",
    "lv": "Gyere át ma hozzánk ebédre!",
    "level": "Sätze"
  },
  {
    "de": "Setzen wir uns an den Tisch.",
    "lv": "Üljünk le az asztalhoz.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, bedien dich!",
    "lv": "Tessék, vegyél bátran!",
    "level": "Sätze"
  },
  {
    "de": "Stört dich das Rauchen?",
    "lv": "Zavar a dohányzás?",
    "level": "Sätze"
  },
  {
    "de": "Danke für die nette Aufnahme!",
    "lv": "Köszönöm a kedves fogadtatást!",
    "level": "Sätze"
  },
  {
    "de": "Wann gehst du ins Bett?",
    "lv": "Mikor fekszel le?",
    "level": "Sätze"
  },
  {
    "de": "Wenn ich von der Arbeit komme, bin ich immer müde.",
    "lv": "Amikor hazaérek a munkából, mindig fáradt vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, ins Bett zu gehen.",
    "lv": "Ideje lefeküdni.",
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
    "lv": "Nézd, mindjárt esni fog.",
    "level": "Sätze"
  },
  {
    "de": "Nimm den Regenschirm mit!",
    "lv": "Vidd magaddal az esernyőt!",
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
    "lv": "Eláll az eső.",
    "level": "Sätze"
  },
  {
    "de": "Die Sonne scheint wieder.",
    "lv": "Újra süt a nap.",
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
    "lv": "Mindjárt kitör a zivatar.",
    "level": "Sätze"
  },
  {
    "de": "Das Gewitter zieht vorüber.",
    "lv": "A zivatar elvonul.",
    "level": "Sätze"
  },
  {
    "de": "Die Wolken verziehen sich.",
    "lv": "Oszlanak a felhők.",
    "level": "Sätze"
  },
  {
    "de": "Siehst du den Regenbogen?",
    "lv": "Látod a szivárványt?",
    "level": "Sätze"
  },
  {
    "de": "Der Winter ist da, es hat geschneit.",
    "lv": "Itt a tél, leesett a hó.",
    "level": "Sätze"
  },
  {
    "de": "Es schneit.",
    "lv": "Esik a hó.",
    "level": "Sätze"
  },
  {
    "de": "Wie schön ist es im Wald im Winter!",
    "lv": "Milyen szép télen az erdőben!",
    "level": "Sätze"
  },
  {
    "de": "Mir ist kalt, ich friere.",
    "lv": "Fázom, didergek.",
    "level": "Sätze"
  },
  {
    "de": "Draußen ist Glatteis, pass auf!",
    "lv": "Kint jeges az út, vigyázz!",
    "level": "Sätze"
  },
  {
    "de": "Wollen wir auf die Eisbahn gehen?",
    "lv": "Elmenjünk a korcsolyapályára?",
    "level": "Sätze"
  },
  {
    "de": "Zieh die Jacke an, du kannst dich erkälten.",
    "lv": "Vedd fel a kabátot, megfázhatsz.",
    "level": "Sätze"
  },
  {
    "de": "Es ist halb sieben.",
    "lv": "Fél hét van.",
    "level": "Sätze"
  },
  {
    "de": "Meine Uhr geht fünf Minuten vor.",
    "lv": "Az órám öt percet siet.",
    "level": "Sätze"
  },
  {
    "de": "Weck mich morgen früh um sieben Uhr!",
    "lv": "Ébressz fel holnap reggel hét órakor!",
    "level": "Sätze"
  },
  {
    "de": "Was ist heute für ein Datum?",
    "lv": "Hányadika van ma?",
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
    "lv": "Már rég láttuk egymást.",
    "level": "Sätze"
  },
  {
    "de": "Wie geht es dir?",
    "lv": "Hogy vagy?",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, ich möchte etwas mit dir besprechen.",
    "lv": "Ne haragudj, szeretnék megbeszélni veled valamit.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir spazieren!",
    "lv": "Menjünk sétálni!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Lust, mit mir in den Park zu gehen?",
    "lv": "Van kedved eljönni velem a parkba?",
    "level": "Sätze"
  },
  {
    "de": "Ich komme, um dich zum Spaziergang abzuholen.",
    "lv": "Azért jövök, hogy elvigyelek sétálni.",
    "level": "Sätze"
  },
  {
    "de": "Geh bitte etwas langsamer, ich kann dir nicht folgen!",
    "lv": "Kérlek, menj egy kicsit lassabban, nem tudok lépést tartani veled!",
    "level": "Sätze"
  },
  {
    "de": "Ich bin zum ersten Mal in dieser Gegend.",
    "lv": "Most járok először ezen a környéken.",
    "level": "Sätze"
  },
  {
    "de": "Ruhen wir uns ein wenig aus.",
    "lv": "Pihenjünk egy kicsit.",
    "level": "Sätze"
  },
  {
    "de": "Jetzt können wir zurückgehen.",
    "lv": "Most már visszamehetünk.",
    "level": "Sätze"
  },
  {
    "de": "Ehrlich gesagt bin ich ziemlich müde.",
    "lv": "Őszintén szólva elég fáradt vagyok.",
    "level": "Sätze"
  },
  {
    "de": "Entschuldige, wo ist die nächste U-Bahn-Station?",
    "lv": "Ne haragudj, hol van a legközelebbi metróállomás?",
    "level": "Sätze"
  },
  {
    "de": "Welcher ist der kürzeste Weg?",
    "lv": "Melyik a legrövidebb út?",
    "level": "Sätze"
  },
  {
    "de": "Geh hier die zweite Straße links und dann immer geradeaus.",
    "lv": "Itt a második utcán fordulj be balra, aztán menj mindig egyenesen.",
    "level": "Sätze"
  },
  {
    "de": "Wie komme ich am schnellsten zum Bahnhof?",
    "lv": "Hogyan jutok el a leggyorsabban a pályaudvarra?",
    "level": "Sätze"
  },
  {
    "de": "Ich habe vor, morgen zu verreisen.",
    "lv": "Azt tervezem, hogy holnap elutazom.",
    "level": "Sätze"
  },
  {
    "de": "Wohin willst du fahren?",
    "lv": "Hová akarsz utazni?",
    "level": "Sätze"
  },
  {
    "de": "Reist du geschäftlich oder privat?",
    "lv": "Üzleti ügyben utazol vagy magánügyben?",
    "level": "Sätze"
  },
  {
    "de": "Finn fährt bis Berlin mit, dann geht er ans Meer.",
    "lv": "Finn Berlinig jön velünk, aztán továbbmegy a tengerhez.",
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
    "lv": "Ne felejtsd el az útleveledet!",
    "level": "Sätze"
  },
  {
    "de": "Es ist Zeit, den Koffer zu packen.",
    "lv": "Ideje bepakolni a bőröndbe.",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt um halb sieben ab.",
    "lv": "A vonat fél hétkor indul.",
    "level": "Sätze"
  },
  {
    "de": "Hol mir bitte ein Taxi, ich verpasse sonst den Zug!",
    "lv": "Hívj nekem egy taxit, kérlek, különben lekésem a vonatot!",
    "level": "Sätze"
  },
  {
    "de": "Fahr bitte zum Bahnhof!",
    "lv": "Vigyél a pályaudvarra, kérlek!",
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
    "lv": "Egy jegyet kérek Kölnbe.",
    "level": "Sätze"
  },
  {
    "de": "Wann fährt der Zug ab?",
    "lv": "Mikor indul a vonat?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug fährt gleich ab.",
    "lv": "A vonat mindjárt indul.",
    "level": "Sätze"
  },
  {
    "de": "Muss ich in Koblenz umsteigen?",
    "lv": "Koblenzben át kell szállnom?",
    "level": "Sätze"
  },
  {
    "de": "Ja, dort musst du umsteigen.",
    "lv": "Igen, ott át kell szállnod.",
    "level": "Sätze"
  },
  {
    "de": "Ist dieser Platz frei?",
    "lv": "Szabad ez a hely?",
    "level": "Sätze"
  },
  {
    "de": "Nein, hier sitzt niemand.",
    "lv": "Nem, itt nem ül senki.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der Bahnsteigkartenautomat?",
    "lv": "Hol van a peronjegy-automata?",
    "level": "Sätze"
  },
  {
    "de": "Stell mein Handgepäck ins Gepäcknetz.",
    "lv": "Tedd fel a kézipoggyászomat a csomagtartóra.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das Fenster aufmachen?",
    "lv": "Kinyithatom az ablakot?",
    "level": "Sätze"
  },
  {
    "de": "Es zieht, schließ bitte das Fenster!",
    "lv": "Huzat van, csukd be, kérlek, az ablakot!",
    "level": "Sätze"
  },
  {
    "de": "Welche ist die nächste Station?",
    "lv": "Melyik a következő állomás?",
    "level": "Sätze"
  },
  {
    "de": "Wie lange hält der Zug?",
    "lv": "Meddig áll a vonat?",
    "level": "Sätze"
  },
  {
    "de": "Wo muss ich umsteigen?",
    "lv": "Hol kell átszállnom?",
    "level": "Sätze"
  },
  {
    "de": "Der Zug hat Verspätung.",
    "lv": "Késik a vonat.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Wagen ist für Nichtraucher.",
    "lv": "Ez a kocsi nemdohányzó.",
    "level": "Sätze"
  },
  {
    "de": "Wir fahren jetzt über die Grenze.",
    "lv": "Most megyünk át a határon.",
    "level": "Sätze"
  },
  {
    "de": "Hast du etwas zu verzollen?",
    "lv": "Van valami elvámolnivalód?",
    "level": "Sätze"
  },
  {
    "de": "Wir sind in Berlin angekommen.",
    "lv": "Megérkeztünk Berlinbe.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir ein gutes Hotel empfehlen?",
    "lv": "Tudsz ajánlani egy jó szállodát?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie freie Zimmer?",
    "lv": "Van szabad szobájuk?",
    "level": "Sätze"
  },
  {
    "de": "Ein Zimmer mit zwei Betten, bitte.",
    "lv": "Egy kétágyas szobát kérek.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Zimmer pro Nacht?",
    "lv": "Mennyibe kerül a szoba egy éjszakára?",
    "level": "Sätze"
  },
  {
    "de": "Morgen reise ich ab. Weck mich um sieben Uhr!",
    "lv": "Holnap elutazom. Ébressz fel hét órakor!",
    "level": "Sätze"
  },
  {
    "de": "Die Rechnung, bitte!",
    "lv": "A számlát, kérem!",
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
    "lv": "Elmenjünk a múzeumba?",
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
    "lv": "Elmegyünk együtt enni?",
    "level": "Sätze"
  },
  {
    "de": "Kellner, die Speisekarte, bitte!",
    "lv": "Pincér, az étlapot, kérem!",
    "level": "Sätze"
  },
  {
    "de": "Ist der Fisch frisch?",
    "lv": "Friss a hal?",
    "level": "Sätze"
  },
  {
    "de": "Das schmeckt ausgezeichnet!",
    "lv": "Kitűnő az íze!",
    "level": "Sätze"
  },
  {
    "de": "Kellner, zahlen bitte!",
    "lv": "Pincér, fizetni szeretnék!",
    "level": "Sätze"
  },
  {
    "de": "Ich gehe ins Café einen Kaffee trinken.",
    "lv": "Elmegyek a kávézóba kávézni.",
    "level": "Sätze"
  },
  {
    "de": "Willst du mitkommen?",
    "lv": "Akarsz velem jönni?",
    "level": "Sätze"
  },
  {
    "de": "Eine Tasse Kaffee mit Milch, bitte!",
    "lv": "Egy csésze kávét kérek tejjel!",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneller, ich habe es eilig!",
    "lv": "Gyorsabban, kérem, sietek!",
    "level": "Sätze"
  },
  {
    "de": "Lass deinen Kaffee nicht kalt werden!",
    "lv": "Ne hagyd kihűlni a kávédat!",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie etwas Erfrischendes?",
    "lv": "Van valami frissítőjük?",
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
    "lv": "Azonnal írnom kell neki.",
    "level": "Sätze"
  },
  {
    "de": "Wo ist der nächste Briefkasten?",
    "lv": "Hol van a legközelebbi postaláda?",
    "level": "Sätze"
  },
  {
    "de": "Wo ist die Post?",
    "lv": "Hol van a posta?",
    "level": "Sätze"
  },
  {
    "de": "Erinnere mich morgen daran, zu schreiben!",
    "lv": "Holnap emlékeztess rá, hogy írjak!",
    "level": "Sätze"
  },
  {
    "de": "Werfen Sie bitte diesen Brief in den Briefkasten.",
    "lv": "Kérem, dobja be ezt a levelet a postaládába.",
    "level": "Sätze"
  },
  {
    "de": "Hallo, hier spricht Emma.",
    "lv": "Halló, itt Emma beszél.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich dich später anrufen?",
    "lv": "Felhívhatlak később?",
    "level": "Sätze"
  },
  {
    "de": "Muss ich lange warten?",
    "lv": "Sokáig kell várnom?",
    "level": "Sätze"
  },
  {
    "de": "Bitte schneiden Sie mir die Haare.",
    "lv": "Kérem, vágja le a hajamat.",
    "level": "Sätze"
  },
  {
    "de": "Hinten bitte nicht zu kurz.",
    "lv": "Hátul ne túl rövidre, kérem.",
    "level": "Sätze"
  },
  {
    "de": "Wann beginnt die Vorstellung?",
    "lv": "Mikor kezdődik az előadás?",
    "level": "Sätze"
  },
  {
    "de": "Es fängt um halb acht an.",
    "lv": "Fél nyolckor kezdődik.",
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
    "lv": "A kabátunkat a ruhatárban hagyjuk.",
    "level": "Sätze"
  },
  {
    "de": "Bitte schnell, der Vorhang geht gleich auf!",
    "lv": "Gyorsan, kérlek, mindjárt felmegy a függöny!",
    "level": "Sätze"
  },
  {
    "de": "Der Vorhang fällt.",
    "lv": "Legördül a függöny.",
    "level": "Sätze"
  },
  {
    "de": "Darf ich dich zum Tanz bitten?",
    "lv": "Felkérhetlek egy táncra?",
    "level": "Sätze"
  },
  {
    "de": "Wann ist eure Hochzeit?",
    "lv": "Mikor lesz az esküvőtök?",
    "level": "Sätze"
  },
  {
    "de": "Ich suche eine Wohnung.",
    "lv": "Lakást keresek.",
    "level": "Sätze"
  },
  {
    "de": "Ist in diesem Haus eine Wohnung frei?",
    "lv": "Van ebben a házban szabad lakás?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet die Miete?",
    "lv": "Mennyi a lakbér?",
    "level": "Sätze"
  },
  {
    "de": "Die Wohnung hat drei Zimmer und eine Küche.",
    "lv": "A lakásban három szoba és egy konyha van.",
    "level": "Sätze"
  },
  {
    "de": "Heute ziehen wir um.",
    "lv": "Ma költözünk.",
    "level": "Sätze"
  },
  {
    "de": "Mia, pack die Sachen bitte in Kisten!",
    "lv": "Mia, kérlek, rakd dobozokba a holmikat!",
    "level": "Sätze"
  },
  {
    "de": "Hast du alles eingepackt?",
    "lv": "Mindent becsomagoltál?",
    "level": "Sätze"
  },
  {
    "de": "Ich stehe mit meinem Freund in Kontakt.",
    "lv": "Tartom a kapcsolatot a barátommal.",
    "level": "Sätze"
  },
  {
    "de": "Gehen wir ins Theater?",
    "lv": "Elmegyünk a színházba?",
    "level": "Sätze"
  },
  {
    "de": "Ist alles eingeladen?",
    "lv": "Minden be van rakva?",
    "level": "Sätze"
  },
  {
    "de": "Welch schöne Aussicht!",
    "lv": "Milyen szép kilátás!",
    "level": "Sätze"
  },
  {
    "de": "Nun können wir alles wieder aufräumen.",
    "lv": "Most mindent újra rendbe tehetünk.",
    "level": "Sätze"
  },
  {
    "de": "Wie viele Zimmer habt ihr?",
    "lv": "Hány szobátok van?",
    "level": "Sätze"
  },
  {
    "de": "Im Sommer fahre ich ans Meer.",
    "lv": "Nyáron a tengerhez utazom.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du schwimmen?",
    "lv": "Tudsz úszni?",
    "level": "Sätze"
  },
  {
    "de": "Schwimm nicht zu weit hinaus!",
    "lv": "Ne ússz ki túl messzire!",
    "level": "Sätze"
  },
  {
    "de": "Badest du jeden Tag?",
    "lv": "Mindennap fürdesz?",
    "level": "Sätze"
  },
  {
    "de": "Bei schönem Wetter gehe ich angeln.",
    "lv": "Szép időben horgászni megyek.",
    "level": "Sätze"
  },
  {
    "de": "Wie sieht er aus?",
    "lv": "Hogy néz ki?",
    "level": "Sätze"
  },
  {
    "de": "Er hat sich aber recht verändert.",
    "lv": "Bizony elég sokat változott.",
    "level": "Sätze"
  },
  {
    "de": "Wie ist er als Mensch?",
    "lv": "Milyen ő mint ember?",
    "level": "Sätze"
  },
  {
    "de": "Er ist immer nett und freundlich.",
    "lv": "Mindig kedves és barátságos.",
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
    "lv": "Megfáztam.",
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
    "lv": "Orvoshoz kell mennem.",
    "level": "Sätze"
  },
  {
    "de": "Leg dich ins Bett!",
    "lv": "Feküdj ágyba!",
    "level": "Sätze"
  },
  {
    "de": "Hast du Fieber?",
    "lv": "Lázas vagy?",
    "level": "Sätze"
  },
  {
    "de": "Gestern hatte ich erhöhte Temperatur.",
    "lv": "Tegnap hőemelkedésem volt.",
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
    "lv": "Az orvos szerint hamarosan meggyógyul.",
    "level": "Sätze"
  },
  {
    "de": "Ich will meine Wohnung neu möblieren.",
    "lv": "Új bútorokkal akarom berendezni a lakásomat.",
    "level": "Sätze"
  },
  {
    "de": "Kann ich das auf Raten kaufen?",
    "lv": "Megvehetem részletre?",
    "level": "Sätze"
  },
  {
    "de": "Bleib im Bett, bis es dir besser geht!",
    "lv": "Maradj ágyban, amíg jobban nem érzed magad!",
    "level": "Sätze"
  },
  {
    "de": "Noah hat in zwei Wochen schwimmen gelernt.",
    "lv": "Noah két hét alatt megtanult úszni.",
    "level": "Sätze"
  },
  {
    "de": "Sei mit dem Essen noch vorsichtig.",
    "lv": "Az evéssel még légy óvatos.",
    "level": "Sätze"
  },
  {
    "de": "Sprichst du Deutsch?",
    "lv": "Beszélsz németül?",
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
    "lv": "Egy éve járok németórára.",
    "level": "Sätze"
  },
  {
    "de": "Ich suche immer Gelegenheit, Deutsch zu sprechen.",
    "lv": "Mindig keresem az alkalmat, hogy németül beszélhessek.",
    "level": "Sätze"
  },
  {
    "de": "Ist das Buch noch vorrätig?",
    "lv": "Van még raktáron a könyv?",
    "level": "Sätze"
  },
  {
    "de": "Das Buch ist leider ausverkauft.",
    "lv": "Sajnos a könyv elfogyott.",
    "level": "Sätze"
  },
  {
    "de": "Wann erscheint die neue Auflage?",
    "lv": "Mikor jelenik meg az új kiadás?",
    "level": "Sätze"
  },
  {
    "de": "Womit kann ich Ihnen helfen?",
    "lv": "Miben segíthetek?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie ganz frische Eier?",
    "lv": "Van egészen friss tojása?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die?",
    "lv": "Mennyibe kerülnek?",
    "level": "Sätze"
  },
  {
    "de": "Das ist zu teuer.",
    "lv": "Ez túl drága.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie mir ein halbes Kilo abwiegen?",
    "lv": "Le tudna mérni nekem fél kilót?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel muss ich zahlen?",
    "lv": "Mennyit kell fizetnem?",
    "level": "Sätze"
  },
  {
    "de": "Wie viel kostet das Kilo?",
    "lv": "Mennyibe kerül egy kiló?",
    "level": "Sätze"
  },
  {
    "de": "Wiegen Sie mir bitte zwei Kilo ab.",
    "lv": "Kérem, mérjen le nekem két kilót.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch Karotten?",
    "lv": "Van sárgarépája is?",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie gutes Rindfleisch?",
    "lv": "Van jó marhahúsa?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir zwei Kilo Hackfleisch.",
    "lv": "Adjon két kiló darált húst.",
    "level": "Sätze"
  },
  {
    "de": "Ein Laib Brot, bitte, aber nicht zu knusprig.",
    "lv": "Egy vekni kenyeret kérek, de ne túl ropogósat.",
    "level": "Sätze"
  },
  {
    "de": "Das Brot ist frisch gebacken.",
    "lv": "A kenyér frissen sült.",
    "level": "Sätze"
  },
  {
    "de": "Was für Obst haben Sie heute?",
    "lv": "Milyen gyümölcse van ma?",
    "level": "Sätze"
  },
  {
    "de": "Was kosten die Äpfel?",
    "lv": "Mennyibe kerül az alma?",
    "level": "Sätze"
  },
  {
    "de": "Dann nehme ich zwei Kilo Äpfel.",
    "lv": "Akkor viszek két kiló almát.",
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
    "lv": "Van rizse?",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir bitte ein Kilo Reis.",
    "lv": "Kérem, adjon egy kiló rizst.",
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
    "lv": "El tudja szállítani a bútort a lakásomba?",
    "level": "Sätze"
  },
  {
    "de": "Bitte an der Kasse zahlen.",
    "lv": "Kérjük, a pénztárnál fizessen.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, machen Sie die Rechnung.",
    "lv": "Kérem, készítse el a számlát.",
    "level": "Sätze"
  },
  {
    "de": "Was kostet das Meter?",
    "lv": "Mennyibe kerül egy méter?",
    "level": "Sätze"
  },
  {
    "de": "Dieser Stoff gefällt mir.",
    "lv": "Tetszik ez az anyag.",
    "level": "Sätze"
  },
  {
    "de": "Schneiden Sie mir bitte drei Meter ab.",
    "lv": "Kérem, vágjon le nekem három métert.",
    "level": "Sätze"
  },
  {
    "de": "Haben Sie auch andere Muster?",
    "lv": "Van más mintája is?",
    "level": "Sätze"
  },
  {
    "de": "Diese Farbe gefällt mir nicht.",
    "lv": "Ez a szín nem tetszik.",
    "level": "Sätze"
  },
  {
    "de": "Geben Sie mir eine hellere.",
    "lv": "Adjon egy világosabbat.",
    "level": "Sätze"
  },
  {
    "de": "Was kosten diese Socken?",
    "lv": "Mennyibe kerülnek ezek a zoknik?",
    "level": "Sätze"
  },
  {
    "de": "Welche Handschuhe wünschen Sie?",
    "lv": "Milyen kesztyűt szeretne?",
    "level": "Sätze"
  },
  {
    "de": "Die sind mir etwas zu eng.",
    "lv": "Ezek egy kicsit szűkek nekem.",
    "level": "Sätze"
  },
  {
    "de": "So, nun passen sie gut.",
    "lv": "Na, most már pont jók.",
    "level": "Sätze"
  },
  {
    "de": "Kannst du mir einen guten Schneider empfehlen?",
    "lv": "Tudsz ajánlani egy jó szabót?",
    "level": "Sätze"
  },
  {
    "de": "Ich will einen Anzug bestellen.",
    "lv": "Öltönyt szeretnék csináltatni.",
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
    "lv": "Kérem, tisztítsa ki és vasalja ki!",
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
    "lv": "Ma meg tudja javítani a cipőt?",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich die Schuhe abholen?",
    "lv": "Mikor vihetem el a cipőt?",
    "level": "Sätze"
  },
  {
    "de": "Meine Armbanduhr funktioniert nicht.",
    "lv": "A karórám nem működik.",
    "level": "Sätze"
  },
  {
    "de": "Sie geht fünf Minuten vor.",
    "lv": "Öt percet siet.",
    "level": "Sätze"
  },
  {
    "de": "Bist du kurzsichtig oder weitsichtig?",
    "lv": "Rövidlátó vagy, vagy távollátó?",
    "level": "Sätze"
  },
  {
    "de": "Ich möchte eine Brille kaufen.",
    "lv": "Szemüveget szeretnék venni.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie meine Brille reparieren?",
    "lv": "Meg tudná javítani a szemüvegemet?",
    "level": "Sätze"
  },
  {
    "de": "Das dauert nur eine Viertelstunde.",
    "lv": "Csak negyed óráig tart.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist mir zu hoch.",
    "lv": "Az ár nekem túl magas.",
    "level": "Sätze"
  },
  {
    "de": "Ich brauche zwei Fotos für meinen Pass.",
    "lv": "Két fénykép kell az útlevelembe.",
    "level": "Sätze"
  },
  {
    "de": "Bitte packen Sie es ein und schicken Sie es mir nach Hause.",
    "lv": "Kérem, csomagolja be és küldje el nekem haza.",
    "level": "Sätze"
  },
  {
    "de": "Wir haben feste Preise.",
    "lv": "Fix áraink vannak.",
    "level": "Sätze"
  },
  {
    "de": "Bitte, fotografieren Sie mich.",
    "lv": "Kérem, fényképezzen le.",
    "level": "Sätze"
  },
  {
    "de": "Setzen Sie sich, schauen Sie gerade in die Kamera und bewegen Sie sich nicht!",
    "lv": "Üljön le, nézzen egyenesen a kamerába, és ne mozduljon!",
    "level": "Sätze"
  },
  {
    "de": "Wann kann ich das Probebild sehen?",
    "lv": "Mikor láthatom a próbanyomatot?",
    "level": "Sätze"
  },
  {
    "de": "Wann sind die Fotos fertig?",
    "lv": "Mikor lesznek kész a fotók?",
    "level": "Sätze"
  },
  {
    "de": "Die Aufnahme ist gelungen.",
    "lv": "A felvétel sikerült.",
    "level": "Sätze"
  },
  {
    "de": "Die Fotos sind gut geworden.",
    "lv": "A fotók jól sikerültek.",
    "level": "Sätze"
  },
  {
    "de": "Können Sie das Foto auch vergrößern?",
    "lv": "Fel is tudja nagyítani a fotót?",
    "level": "Sätze"
  },
  {
    "de": "Sind diese Steine echt?",
    "lv": "Valódiak ezek a kövek?",
    "level": "Sätze"
  },
  {
    "de": "Ist das echtes Gold?",
    "lv": "Ez valódi arany?",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir bitte Trauringe.",
    "lv": "Kérem, mutasson nekem jegygyűrűket.",
    "level": "Sätze"
  },
  {
    "de": "Der Ring ist mir etwas zu weit.",
    "lv": "A gyűrű nekem egy kicsit bő.",
    "level": "Sätze"
  },
  {
    "de": "Ich kann ihn enger machen.",
    "lv": "Meg tudom szűkíteni.",
    "level": "Sätze"
  },
  {
    "de": "Dieser Ring passt mir.",
    "lv": "Ez a gyűrű jó rám.",
    "level": "Sätze"
  },
  {
    "de": "Zeigen Sie mir schöne Geschenkideen.",
    "lv": "Mutasson nekem szép ajándékötleteket.",
    "level": "Sätze"
  },
  {
    "de": "Wie gefallen dir diese Ohrringe?",
    "lv": "Hogy tetszenek neked ezek a fülbevalók?",
    "level": "Sätze"
  },
  {
    "de": "Diese Brosche ist wirklich schön.",
    "lv": "Ez a bross igazán szép.",
    "level": "Sätze"
  },
  {
    "de": "Der Stein ist ein Saphir.",
    "lv": "A kő zafír.",
    "level": "Sätze"
  },
  {
    "de": "Das ist kein echter Stein, das ist Glas.",
    "lv": "Ez nem valódi kő, hanem üveg.",
    "level": "Sätze"
  },
  {
    "de": "Dieses Armband kann ich Ihnen besonders empfehlen.",
    "lv": "Ezt a karkötőt különösen tudom ajánlani önnek.",
    "level": "Sätze"
  },
  {
    "de": "Es ist besonders schön gearbeitet.",
    "lv": "Különösen szép a kidolgozása.",
    "level": "Sätze"
  },
  {
    "de": "Der Preis ist nicht hoch.",
    "lv": "Az ár nem magas.",
    "level": "Sätze"
  },
  {
    "de": "Bekomme ich die Schachtel gratis?",
    "lv": "A dobozt ingyen kapom?",
    "level": "Sätze"
  },
  {
    "de": "Alle Schmuckstücke sind gestempelt.",
    "lv": "Minden ékszer fémjelzett.",
    "level": "Sätze"
  },
  {
    "de": "Falls es meiner Frau nicht gefällt, kann ich es umtauschen?",
    "lv": "Ha a feleségemnek nem tetszik, kicserélhetem?",
    "level": "Sätze"
  },
  {
    "de": "Natürlich, jederzeit.",
    "lv": "Természetesen, bármikor.",
    "level": "Sätze"
  }
];

window.SENTENCE_ENTRIES = SENTENCE_ENTRIES;
